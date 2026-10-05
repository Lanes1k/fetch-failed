import { toErrorMessage } from "./errors"
import type { AuthSession, VersionInfo } from "@xnlc/core" with { "resolution-mode": "import" }
import type { MinecraftLaunchParams } from "@xnlc/types" with { "resolution-mode": "import" }
import * as fs from "fs/promises"
import * as path from "path"
import {
  clearLaunchState,
  getGameDir,
  isLaunchActive,
  loadXnlcModule,
  resolveLaunchAccount,
  runLaunchWorker,
  stopLaunchWorker,
} from "./minecraft-core"
import { logRuntimeDebug } from "./runtime"
import { registerIpcHandlers, ctxHandler, rawHandler, type IpcHandlerDef } from "./ipc-router"
import {
  getPaperVersions,
  getPurpurVersions,
  getFoliaVersions,
  getPaperBuilds,
  getPurpurBuilds,
  getFoliaBuilds,
  getVelocityVersions,
  getVelocityBuilds,
  getWaterfallVersions,
  getWaterfallBuilds,
  getSpongeSupportedVersions,
  getSpongeBuilds,
  type SpongeType,
} from "@xnlc/servers"

type LaunchResultPayload = {
  success: boolean
  pid?: number
  error?: string
}

async function listInstalledVersions(): Promise<Array<{ version: string; stable: boolean; type: string }>> {
  try {
    const gameDir = await getGameDir()
    const versionsDir = path.join(gameDir, "versions")
    const entries = await fs.readdir(versionsDir, { withFileTypes: true })
    const result: Array<{ version: string; stable: boolean; type: string }> = []
    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      try {
        await fs.access(path.join(versionsDir, entry.name, `${entry.name}.jar`))
      } catch {
        continue
      }
      result.push({ version: entry.name, stable: false, type: "installed" })
    }
    return result.sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }))
  } catch {
    return []
  }
}

// ---------- Version Handlers ----------

const versionHandlers: IpcHandlerDef[] = [
  ctxHandler("minecraft:get-versions", "fetch failed", [], async (handler) => {
    try {
      const versions = await handler.getVersions()
      const mapped = versions.map((version: VersionInfo) => ({
        version: version.id,
        stable: version.type === "release",
        type: version.type,
      }))
      if (mapped.length > 0) {
        return mapped
      }
      console.warn("[Minecraft] Empty version list from network, falling back to installed versions")
    } catch (error) {
      console.error("[Minecraft] Network unavailable, falling back to installed versions:", error)
    }
    return listInstalledVersions()
  }),

  ctxHandler("minecraft:get-latest-release", "fetch failed", null,
    (handler) => handler.getLatestRelease()),


  // Fabric / LiteLoader / Quilt / NeoForge / Forge / OptiFine version queries (with mcVersion arg)
  ctxHandler("minecraft:get-fabric-versions", "fetch failed", [],
    (handler, mcVersion) => handler.getFabricVersions(mcVersion as string)),

  ctxHandler("minecraft:get-liteloader-versions", "fetch failed", [],
    (handler, mcVersion) => handler.getLiteLoaderVersions(mcVersion as string)),

  ctxHandler("minecraft:get-quilt-versions", "fetch failed", [],
    (handler, mcVersion) => handler.getQuiltVersions(mcVersion as string)),

  ctxHandler("minecraft:get-neoforge-versions", "fetch failed", [], async (handler, mcVersion) => {
    const versions = await handler.getNeoForgeVersions(mcVersion as string)
    return versions.map(v => ({ version: v, stable: !v.includes("beta") && !v.includes("alpha") && !v.includes("rc") }))
  }),

  ctxHandler("minecraft:get-forge-versions", "fetch failed", [], async (handler, mcVersion) => {
    const versions = await handler.getForgeVersions(mcVersion as string)
    return versions.map(v => ({ version: v, stable: true }))
  }),

  ctxHandler("minecraft:get-optifine-versions", "fetch failed", [],
    (handler, mcVersion) => handler.getOptifineVersions(mcVersion as string)),

  // No-arg version queries

  ctxHandler("minecraft:get-fabric-supported", "fetch failed", [],
    (handler) => handler.getFabricSupportedVersions()),


  ctxHandler("minecraft:get-neoforge-supported", "fetch failed", [],
    (handler) => handler.getNeoForgeSupportedVersions()),

  ctxHandler("minecraft:get-forge-supported", "fetch failed", [],
    (handler) => handler.getForgeSupportedVersions()),

  ctxHandler("minecraft:get-custom-versions", "fetch failed", [],
    (handler) => handler.getCustomVersions()),

  ctxHandler("minecraft:get-quilt-supported", "fetch failed", [],
    (handler) => handler.getQuiltSupportedVersions()),

  // Recommended version handlers (with mcVersion arg, return string | null)
  ctxHandler("minecraft:get-liteloader-recommended", "fetch failed", null,
    async (handler, mcVersion) => await handler.getLiteLoaderRecommended(mcVersion as string) ?? null),

  ctxHandler("minecraft:get-neoforge-recommended", "fetch failed", null,
    async (handler, mcVersion) => await handler.getNeoForgeRecommended(mcVersion as string) ?? null),

  ctxHandler("minecraft:get-forge-recommended", "fetch failed", null,
    async (handler, mcVersion) => await handler.getForgeRecommended(mcVersion as string) ?? null),

  ctxHandler("minecraft:get-optifine-recommended", "fetch failed", null,
    async (handler, mcVersion) => {
      const result = await handler.getOptifineRecommended(mcVersion as string)
      return result?.filename ?? null
    }),

  // Supported MC versions for loaders
  ctxHandler("minecraft:get-liteloader-supported", "fetch failed", [],
    (handler) => handler.getLiteLoaderSupportedVersions()),

  ctxHandler("minecraft:get-optifine-supported", "fetch failed", [],
    (handler) => handler.getOptifineSupportedVersions()),

  // Paper / Purpur / Folia — MC version queries (no loader version needed)
  rawHandler("minecraft:get-paper-supported", async () => {
    const versions = await getPaperVersions()
    return versions.map(v => v.version)
  }),

  rawHandler("minecraft:get-purpur-supported", async () => {
    const versions = await getPurpurVersions()
    return versions.map(v => v.version)
  }),

  rawHandler("minecraft:get-folia-supported", async () => {
    const versions = await getFoliaVersions()
    return versions.map(v => v.version)
  }),

  // Paper / Purpur / Folia — loader version queries (builds for a specific MC version)
  rawHandler("minecraft:get-paper-versions", async (...args: unknown[]) => {
    const mcVersion = args[0] as string
    return await getPaperBuilds(mcVersion)
  }),

  rawHandler("minecraft:get-purpur-versions", async (...args: unknown[]) => {
    const mcVersion = args[0] as string
    return await getPurpurBuilds(mcVersion)
  }),

  rawHandler("minecraft:get-folia-versions", async (...args: unknown[]) => {
    const mcVersion = args[0] as string
    return await getFoliaBuilds(mcVersion)
  }),

  // Velocity — proxy, NOT tied to MC
  rawHandler("minecraft:get-velocity-supported", async () => {
    const versions = await getVelocityVersions()
    return versions.map(v => v.version)
  }),

  rawHandler("minecraft:get-velocity-versions", async (...args: unknown[]) => {
    const velocityVersion = args[0] as string
    return await getVelocityBuilds(velocityVersion)
  }),

  // Waterfall — proxy, tied to MC
  rawHandler("minecraft:get-waterfall-supported", async () => {
    const versions = await getWaterfallVersions()
    return versions.map(v => v.version)
  }),

  rawHandler("minecraft:get-waterfall-versions", async (...args: unknown[]) => {
    const mcVersion = args[0] as string
    return await getWaterfallBuilds(mcVersion)
  }),

  // Sponge — SpongeVanilla / SpongeForge / SpongeNeo
  rawHandler("minecraft:get-sponge-supported", async (...args: unknown[]) => {
    const spongeType = args[0] as SpongeType | undefined
    return await getSpongeSupportedVersions(spongeType)
  }),

  rawHandler("minecraft:get-sponge-versions", async (...args: unknown[]) => {
    const spongeType = (args[0] as SpongeType) || "spongevanilla"
    const mcVersion = args[1] as string
    return await getSpongeBuilds(spongeType, mcVersion)
  }),

  // Auth
  ctxHandler("minecraft:set-offline-auth", "fetch failed", null,
    async (handler, username) => {
      handler.setOfflineAuth(username as string)
      return handler.getAuth()
    }),

  ctxHandler("minecraft:get-auth", "fetch failed", null,
    async (handler) => handler.getAuth()),
]

// ---------- Launch Handlers ----------

/**
 * Переводит параметры запуска из IPC-контракта (`MinecraftLaunchParams`, где память
 * лежит вложенным объектом `memory: { min, max }`) в плоский вид `LaunchRequestOptions`
 * (`memoryMin`/`memoryMax`), который понимает `resolveLaunchRequest`.
 *
 * Без этого перевода `resolveLaunchRequest` не находил `memoryMin`/`memoryMax` и всегда
 * подставлял свои дефолты `512M`/`4G`: настройка «Оперативная память» и пер-сборочный
 * оверрайд Java игнорировались, а игра получала `-Xms512M -Xmx4G`.
 */
export function toLaunchRequestOptions(params: MinecraftLaunchParams) {
  const legacy = params as MinecraftLaunchParams & { memoryMin?: string; memoryMax?: string }
  return {
    ...legacy,
    memoryMin: params.memory?.min || legacy.memoryMin,
    memoryMax: params.memory?.max || legacy.memoryMax,
  }
}

const launchHandlers: IpcHandlerDef[] = [
  rawHandler("minecraft:launch", async (...args: unknown[]): Promise<LaunchResultPayload> => {
    const options = args[0] as MinecraftLaunchParams
    const { resolveLaunchRequest } = await loadXnlcModule()
    const request = resolveLaunchRequest(toLaunchRequestOptions(options))

    try {
      if (isLaunchActive()) {
        return { success: false, error: "fetch failed" }
      }

      if ("error" in request) {
        return { success: false, error: request.error }
      }

      logRuntimeDebug(`[Minecraft] Launch memory: -Xms${request.memoryMin} -Xmx${request.memoryMax}`)

      const launchAccount = await resolveLaunchAccount(options.account as any)
      if (!launchAccount) {
        return { success: false, error: "No active account. Please select an account first." }
      }

      logRuntimeDebug(`fetch failed${launchAccount.type}:${launchAccount.username}`)
      if (!launchAccount.isActive) {
        const { dbHelpers } = await import("../db/index.js")
        await dbHelpers.saveAccount({ ...launchAccount, isActive: true })
      }

      const extendedRequest = {
        ...request,
        buildName: options.buildName,
        buildId: (options as { buildId?: string }).buildId,
        gameDir: options.gameDir,
        javaArgs: (options as { javaArgs?: string }).javaArgs,
        server: (options as { server?: string }).server,
        serverPort: (options as { serverPort?: string }).serverPort,
        quickPlaySingleplayer: (options as { quickPlaySingleplayer?: string }).quickPlaySingleplayer,
        quickPlayMultiplayer: (options as { quickPlayMultiplayer?: string }).quickPlayMultiplayer,
        preLaunchCommand: (options as { preLaunchCommand?: string }).preLaunchCommand,
        postLaunchCommand: (options as { postLaunchCommand?: string }).postLaunchCommand,
        wrapperCommand: (options as { wrapperCommand?: string }).wrapperCommand,
        customEnv: (options as { customEnv?: Record<string, string> }).customEnv,
        offlineUsername: (options as { offlineUsername?: string }).offlineUsername,
      }

      return await runLaunchWorker(launchAccount, extendedRequest)
    } catch (error) {
      const errorMessage = toErrorMessage(error)
      console.error("Launch failed:", errorMessage)
      clearLaunchState()
      return { success: false, error: errorMessage }
    }
  }),

  rawHandler("minecraft:get-game-dir", async () => getGameDir()),

  rawHandler("minecraft:is-running", async () => isLaunchActive()),

  rawHandler("minecraft:stop", async () => {
    if (!isLaunchActive()) {
      clearLaunchState()
      return
    }
    stopLaunchWorker()
  }),
]

export function registerMinecraftHandlers(): void {
  registerIpcHandlers([...versionHandlers, ...launchHandlers])
  logRuntimeDebug("fetch failed")
}
