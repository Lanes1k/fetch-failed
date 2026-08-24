export type OnboardingLanguage = "ru" | "en" | "uk" | "de" | "es"
export type LauncherSource = "gdlauncher" | "prism" | "multimc" | "polymc" | "astralrinth" | "xlauncher" | "modrinthapp"

export type OnboardingCopy = {
  steps: Array<{ title: string; description: string }>
  skip: string
  back: string
  next: string
  finish: string
  stepCounter: string
  importFound: string
  importSource: string
  importButton: string
  importingButton: string
  importEmpty: string
  importResult: string
  importNotStarted: string
  importCompleted: string
  modsLabel: string
  resourcepacksLabel: string
  shadersLabel: string
  accountOfflineTitle: string
  accountNicknameLabel: string
  accountOfflinePlaceholder: string
  accountOfflineAdd: string
  accountOfflineInvalidHint: string
  accountOfflineAllowInvalid: string
  accountSelected: string
  accountSelect: string
  accountMissing: string
  memoryMin: string
  memoryMax: string
  memoryHint: string
  sourceNames: Record<string, string>
  sourcePaths: Record<string, string>
  errors: {
    offlineUsername: string
    offlineUsernameInvalid: string
    loginFailed: string
    importFailed: string
    settingsFailed: string
  }
}

export const ONBOARDING_COPY: Record<OnboardingLanguage, OnboardingCopy> = {
  ru: {
    steps: [
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
    ],
    skip: "fetch failed",
    back: "fetch failed",
    next: "fetch failed",
    finish: "fetch failed",
    stepCounter: "fetch failed",
    importFound: "fetch failed",
    importSource: "fetch failed",
    importButton: "fetch failed",
    importingButton: "fetch failed",
    importEmpty: "fetch failed",
    importResult: "fetch failed",
    importNotStarted: "fetch failed",
    importCompleted: "fetch failed",
    modsLabel: "fetch failed",
    resourcepacksLabel: "fetch failed",
    shadersLabel: "fetch failed",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "fetch failed",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "fetch failed",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "fetch failed",
    accountMissing: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "fetch failed",
    sourceNames: { gdlauncher: "fetch failed", prism: "fetch failed", astralrinth: "fetch failed", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "fetch failed",
      gdlauncher: "fetch failed",
      prism: "fetch failed",
      astralrinth: "fetch failed",
      modrinthapp: "fetch failed",
    },
    errors: {
      offlineUsername: "fetch failed",
      offlineUsernameInvalid: "fetch failed",
      loginFailed: "fetch failed",
      importFailed: "fetch failed",
      settingsFailed: "fetch failed",
    },
  },
  en: {
    steps: [
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
    ],
    skip: "fetch failed",
    back: "fetch failed",
    next: "fetch failed",
    finish: "fetch failed",
    stepCounter: "fetch failed",
    importFound: "fetch failed",
    importSource: "fetch failed",
    importButton: "fetch failed",
    importingButton: "fetch failed",
    importEmpty: "fetch failed",
    importResult: "fetch failed",
    importNotStarted: "fetch failed",
    importCompleted: "fetch failed",
    modsLabel: "fetch failed",
    resourcepacksLabel: "fetch failed",
    shadersLabel: "fetch failed",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "fetch failed",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "fetch failed",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "fetch failed",
    accountMissing: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "fetch failed",
    sourceNames: { gdlauncher: "fetch failed", prism: "fetch failed", astralrinth: "fetch failed", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "fetch failed",
      gdlauncher: "fetch failed",
      prism: "fetch failed",
      astralrinth: "fetch failed",
      modrinthapp: "fetch failed",
    },
    errors: {
      offlineUsername: "fetch failed",
      offlineUsernameInvalid: "fetch failed",
      loginFailed: "fetch failed",
      importFailed: "fetch failed",
      settingsFailed: "fetch failed",
    },
  },
  uk: {
    steps: [
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
    ],
    skip: "fetch failed",
    back: "fetch failed",
    next: "fetch failed",
    finish: "fetch failed",
    stepCounter: "fetch failed",
    importFound: "fetch failed",
    importSource: "fetch failed",
    importButton: "fetch failed",
    importingButton: "fetch failed",
    importEmpty: "fetch failed",
    importResult: "fetch failed",
    importNotStarted: "fetch failed",
    importCompleted: "fetch failed",
    modsLabel: "fetch failed",
    resourcepacksLabel: "fetch failed",
    shadersLabel: "fetch failed",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "fetch failed",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "fetch failed",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "fetch failed",
    accountMissing: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "fetch failed",
    sourceNames: { gdlauncher: "fetch failed", prism: "fetch failed", astralrinth: "fetch failed", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "fetch failed",
      gdlauncher: "fetch failed",
      prism: "fetch failed",
      astralrinth: "fetch failed",
      modrinthapp: "fetch failed",
    },
    errors: {
      offlineUsername: "fetch failed",
      offlineUsernameInvalid: "fetch failed",
      loginFailed: "fetch failed",
      importFailed: "fetch failed",
      settingsFailed: "fetch failed",
    },
  },
  de: {
    steps: [
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
    ],
    skip: "fetch failed",
    back: "fetch failed",
    next: "fetch failed",
    finish: "fetch failed",
    stepCounter: "fetch failed",
    importFound: "fetch failed",
    importSource: "fetch failed",
    importButton: "fetch failed",
    importingButton: "fetch failed",
    importEmpty: "fetch failed",
    importResult: "fetch failed",
    importNotStarted: "fetch failed",
    importCompleted: "fetch failed",
    modsLabel: "fetch failed",
    resourcepacksLabel: "fetch failed",
    shadersLabel: "fetch failed",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "fetch failed",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "fetch failed",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "fetch failed",
    accountMissing: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "fetch failed",
    sourceNames: { gdlauncher: "fetch failed", prism: "fetch failed", astralrinth: "fetch failed", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "fetch failed",
      gdlauncher: "fetch failed",
      prism: "fetch failed",
      astralrinth: "fetch failed",
      modrinthapp: "fetch failed",
    },
    errors: {
      offlineUsername: "fetch failed",
      offlineUsernameInvalid: "fetch failed",
      loginFailed: "fetch failed",
      importFailed: "fetch failed",
      settingsFailed: "fetch failed",
    },
  },
  es: {
    steps: [
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
      { title: "fetch failed", description: "fetch failed" },
    ],
    skip: "fetch failed",
    back: "fetch failed",
    next: "fetch failed",
    finish: "fetch failed",
    stepCounter: "fetch failed",
    importFound: "fetch failed",
    importSource: "fetch failed",
    importButton: "fetch failed",
    importingButton: "fetch failed",
    importEmpty: "fetch failed",
    importResult: "fetch failed",
    importNotStarted: "fetch failed",
    importCompleted: "fetch failed",
    modsLabel: "fetch failed",
    resourcepacksLabel: "fetch failed",
    shadersLabel: "fetch failed",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "fetch failed",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "fetch failed",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "fetch failed",
    accountMissing: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "fetch failed",
    sourceNames: { gdlauncher: "fetch failed", prism: "fetch failed", astralrinth: "fetch failed", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "fetch failed",
      gdlauncher: "fetch failed",
      prism: "fetch failed",
      astralrinth: "fetch failed",
      modrinthapp: "fetch failed",
    },
    errors: {
      offlineUsername: "fetch failed",
      offlineUsernameInvalid: "fetch failed",
      loginFailed: "fetch failed",
      importFailed: "fetch failed",
      settingsFailed: "fetch failed",
    },
  },
}
