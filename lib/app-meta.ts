import packageJson from "../package.json"

/**
 * Отображаемое имя продукта — единственный источник для title окна, NSIS,
 * VERSIONINFO и Linux-пакетов. Технические имена (`Fetchfailed`,
 * `fetch-failed`, `org.fetchfailed.launcher`) от него не зависят.
 */
export const APP_NAME = "Fetch failed"
export const APP_VERSION = packageJson.version
export const APP_USER_AGENT = `Fetch-failed/${APP_VERSION}`
