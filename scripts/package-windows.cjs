// Запуск из короткого пути (например H:\fetch-failed) для старого NSIS.
const path = require("node:path")
const { createRequire } = require("node:module")

const builderEntry = require.resolve("electron-builder")
const builderRequire = createRequire(builderEntry)
const manager = builderRequire("app-builder-lib/out/util/pathManager")
const original = manager.getTemplatePath
manager.getTemplatePath = file => {
  const resolved = original(file)
  const marker = `${path.sep}node_modules${path.sep}`
  const index = resolved.indexOf(marker)
  return index < 0 ? resolved : path.join(process.cwd(), resolved.slice(index + 1))
}

builderRequire("electron-builder/out/cli/cli")
