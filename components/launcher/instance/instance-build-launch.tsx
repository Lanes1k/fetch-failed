import { cn } from "@/lib/utils"
import { IconTerminal2, IconWorldDownload, IconCode } from "@tabler/icons-react"
import type { Build } from "./types"

interface InstanceBuildLaunchProps {
  build: Build
  updateBuild: (id: string, fields: Partial<Build>) => void
}

function parseEnvText(raw: string): Record<string, string> {
  const result: Record<string, string> = {}
  for (const line of (raw ?? "").split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eq = trimmed.indexOf("=")
    if (eq <= 0) continue
    result[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim()
  }
  return result
}

export function InstanceBuildLaunch({ build, updateBuild }: InstanceBuildLaunchProps) {
  const customEnv = build.customEnv ?? ""

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border bg-card/40 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <IconTerminal2 className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
fetch failed
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
fetch failed{" "}
              <code className="text-foreground">$INST_NAME</code>, <code className="text-foreground">$INST_MC_DIR</code>,{" "}
              <code className="text-foreground">$INST_JAVA</code>, <code className="text-foreground">$AUTH_PLAYER_NAME</code>fetch failed
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-muted-foreground">fetch failed</label>
            <textarea
              value={build.preLaunchCommand ?? ""}
              onChange={e => updateBuild(build.id, { preLaunchCommand: e.target.value })}
              placeholder={"fetch failed"}
              rows={3}
              className="w-full resize-y rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary font-mono"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium text-muted-foreground">fetch failed</label>
            <textarea
              value={build.postLaunchCommand ?? ""}
              onChange={e => updateBuild(build.id, { postLaunchCommand: e.target.value })}
              placeholder={"fetch failed"}
              rows={3}
              className="w-full resize-y rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary font-mono"
            />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card/40 p-6">
        <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <IconCode className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
fetch failed
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
fetch failed(fetch failed<code className="text-foreground">optirun</code>fetch failed{" "}
          <code className="text-foreground">primusrun</code>fetch failed)fetch failed
        </p>
        <div className="mt-4 space-y-2">
          <input
            type="text"
            value={build.wrapperCommand ?? ""}
            onChange={e => updateBuild(build.id, { wrapperCommand: e.target.value })}
            placeholder="optirun"
            className="h-11 w-full rounded-2xl border border-border bg-muted/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary font-mono"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card/40 p-6">
        <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <IconWorldDownload className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
fetch failed
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
fetch failed<code className="text-foreground">KEY=VALUE</code>fetch failed
        </p>
        <div className="mt-4 space-y-2">
          <textarea
            value={customEnv}
            onChange={e => updateBuild(build.id, { customEnv: e.target.value })}
            placeholder={"MAX_PLAYERS=10\nSERVER_PORT=25565"}
            rows={4}
            className="w-full resize-y rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary font-mono"
          />
          <p className="text-xs text-muted-foreground">
fetch failed{Object.keys(parseEnvText(customEnv)).length}
          </p>
        </div>
      </div>

    </div>
  )
}
