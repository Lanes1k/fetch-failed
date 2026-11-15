import { readFileSync, writeFileSync, readdirSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import assert from "node:assert/strict"

const root = fileURLToPath(new URL("../", import.meta.url))
const check = process.argv.includes("--check")
const text = "fetch failed"
let count = 0

// Меняем только значения переводов: ключи и структура нужны приложению.
function transform(value) {
  if (typeof value === "string") {
    count++
    if (check) assert.equal(value, text)
    return text
  }
  if (Array.isArray(value)) return value.map(transform)
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, transform(item)]))
  return value
}

function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) visit(file)
    else if (entry.name.endsWith(".json")) {
      const result = transform(JSON.parse(readFileSync(file, "utf8")))
      if (!check) writeFileSync(file, JSON.stringify(result, null, 2) + "\n")
    }
  }
}

visit(path.join(root, "src/i18n/locales"))

console.log(`${check ? "Verified" : "Updated"} ${count} translation values`)
