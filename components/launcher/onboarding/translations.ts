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
  methodOAuthDesc: string
  methodDeviceDesc: string
  error: string
  codeExpired: string
  chooseMethod: string
  openLink: string
  openLoginPage: string
  copied: string
  clickToCopy: string
  waitingConfirmation: string
  requestNewCode: string
  loginSuccess: string
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
    methodOAuthDesc: "fetch failed",
    methodDeviceDesc: "fetch failed",
    error: "fetch failed",
    codeExpired: "fetch failed",
    chooseMethod: "fetch failed",
    openLink: "fetch failed",
    openLoginPage: "fetch failed",
    copied: "fetch failed",
    clickToCopy: "fetch failed",
    waitingConfirmation: "fetch failed",
    requestNewCode: "fetch failed",
    loginSuccess: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "fetch failed",
    sourceNames: { gdlauncher: "GDLauncher", prism: "fetch failed", astralrinth: "AstralRinth", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "~/.minecraftx/instances",
      gdlauncher: "~/.local/share/gdlauncher_carbon/data/instances",
      prism: "~/.var/app/org.prismlauncher.PrismLauncher/... или ~/.local/share/PrismLauncher",
      astralrinth: "~/.local/share/AstralRinthApp/profiles",
      modrinthapp: "~/.local/share/modrinth-app/profiles или %APPDATA%/ModrinthApp/profiles",
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
    skip: "Skip",
    back: "Back",
    next: "Next",
    finish: "Finish",
    stepCounter: "Step {{current}} of {{total}}",
    importFound: "Found: {{count}}.",
    importSource: "Source:",
    importButton: "Import",
    importingButton: "Importing...",
    importEmpty: "No instances found for import. X Launcher, GDLauncher, Prism Launcher, Modrinth App, and AstralRinth are supported.",
    importResult: "fetch failed",
    importNotStarted: "fetch failed",
    importCompleted: "Imported instances: {{count}}",
    modsLabel: "mods",
    resourcepacksLabel: "RPs",
    shadersLabel: "shaders",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "Nickname",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "Add",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "Select",
    accountMissing: "fetch failed",
    methodOAuthDesc: "fetch failed",
    methodDeviceDesc: "Enter the code on the {{site}} website on any device",
    error: "Error",
    codeExpired: "The code has expired. Request a new one.",
    chooseMethod: "fetch failed",
    openLink: "fetch failed",
    openLoginPage: "fetch failed",
    copied: "Copied!",
    clickToCopy: "fetch failed",
    waitingConfirmation: "fetch failed",
    requestNewCode: "fetch failed",
    loginSuccess: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "Minimum must not be greater than maximum. A common starting point is `2G` and `4G`.",
    sourceNames: { gdlauncher: "GDLauncher", prism: "fetch failed", astralrinth: "AstralRinth", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "~/.minecraftx/instances",
      gdlauncher: "~/.local/share/gdlauncher_carbon/data/instances",
      prism: "~/.var/app/org.prismlauncher.PrismLauncher/... or ~/.local/share/PrismLauncher",
      astralrinth: "~/.local/share/AstralRinthApp/profiles",
      modrinthapp: "~/.local/share/modrinth-app/profiles or %APPDATA%/ModrinthApp/profiles",
    },
    errors: {
      offlineUsername: "fetch failed",
      offlineUsernameInvalid: "fetch failed",
      loginFailed: "Sign-in failed.",
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
    methodOAuthDesc: "fetch failed",
    methodDeviceDesc: "fetch failed",
    error: "fetch failed",
    codeExpired: "fetch failed",
    chooseMethod: "fetch failed",
    openLink: "fetch failed",
    openLoginPage: "fetch failed",
    copied: "fetch failed",
    clickToCopy: "fetch failed",
    waitingConfirmation: "fetch failed",
    requestNewCode: "fetch failed",
    loginSuccess: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "fetch failed",
    sourceNames: { gdlauncher: "GDLauncher", prism: "fetch failed", astralrinth: "AstralRinth", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "~/.minecraftx/instances",
      gdlauncher: "~/.local/share/gdlauncher_carbon/data/instances",
      prism: "~/.var/app/org.prismlauncher.PrismLauncher/... або ~/.local/share/PrismLauncher",
      astralrinth: "~/.local/share/AstralRinthApp/profiles",
      modrinthapp: "~/.local/share/modrinth-app/profiles або %APPDATA%/ModrinthApp/profiles",
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
    skip: "Überspringen",
    back: "Zurück",
    next: "Weiter",
    finish: "Fertig",
    stepCounter: "Schritt {{current}} von {{total}}",
    importFound: "Gefunden: {{count}}.",
    importSource: "Quelle:",
    importButton: "Importieren",
    importingButton: "Importiere...",
    importEmpty: "Keine Instanzen zum Import gefunden. X Launcher, GDLauncher, Prism Launcher, Modrinth App und AstralRinth werden unterstützt.",
    importResult: "Importergebnis",
    importNotStarted: "fetch failed",
    importCompleted: "Importierte Instanzen: {{count}}",
    modsLabel: "Mods",
    resourcepacksLabel: "RPs",
    shadersLabel: "Shader",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "Nickname",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "Hinzufügen",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "Auswählen",
    accountMissing: "fetch failed",
    methodOAuthDesc: "fetch failed",
    methodDeviceDesc: "Gib den Code auf der {{site}}-Website auf einem beliebigen Gerät ein",
    error: "Fehler",
    codeExpired: "Der Code ist abgelaufen. Fordere einen neuen Code an.",
    chooseMethod: "fetch failed",
    openLink: "fetch failed",
    openLoginPage: "fetch failed",
    copied: "Kopiert!",
    clickToCopy: "fetch failed",
    waitingConfirmation: "fetch failed",
    requestNewCode: "fetch failed",
    loginSuccess: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "Das Minimum darf nicht größer als das Maximum sein. Ein üblicher Startwert ist `2G` und `4G`.",
    sourceNames: { gdlauncher: "GDLauncher", prism: "fetch failed", astralrinth: "AstralRinth", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "~/.minecraftx/instances",
      gdlauncher: "~/.local/share/gdlauncher_carbon/data/instances",
      prism: "~/.var/app/org.prismlauncher.PrismLauncher/... oder ~/.local/share/PrismLauncher",
      astralrinth: "~/.local/share/AstralRinthApp/profiles",
      modrinthapp: "~/.local/share/modrinth-app/profiles oder %APPDATA%/ModrinthApp/profiles",
    },
    errors: {
      offlineUsername: "Gib einen Namen für das Offline-Konto ein.",
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
    skip: "Omitir",
    back: "Atrás",
    next: "Siguiente",
    finish: "Finalizar",
    stepCounter: "Paso {{current}} de {{total}}",
    importFound: "Encontradas: {{count}}.",
    importSource: "Origen:",
    importButton: "Importar",
    importingButton: "Importando...",
    importEmpty: "No se encontraron instancias para importar. Se admiten X Launcher, GDLauncher, Prism Launcher, Modrinth App y AstralRinth.",
    importResult: "fetch failed",
    importNotStarted: "fetch failed",
    importCompleted: "Instancias importadas: {{count}}",
    modsLabel: "mods",
    resourcepacksLabel: "RPs",
    shadersLabel: "shaders",
    accountOfflineTitle: "fetch failed",
    accountNicknameLabel: "Apodo",
    accountOfflinePlaceholder: "fetch failed",
    accountOfflineAdd: "Añadir",
    accountOfflineInvalidHint: "fetch failed",
    accountOfflineAllowInvalid: "fetch failed",
    accountSelected: "fetch failed",
    accountSelect: "Seleccionar",
    accountMissing: "fetch failed",
    methodOAuthDesc: "fetch failed",
    methodDeviceDesc: "Introduce el código en el sitio web de {{site}} desde cualquier dispositivo",
    error: "Error",
    codeExpired: "El código ha caducado. Solicita uno nuevo.",
    chooseMethod: "fetch failed",
    openLink: "fetch failed",
    openLoginPage: "fetch failed",
    copied: "¡Copiado!",
    clickToCopy: "fetch failed",
    waitingConfirmation: "fetch failed",
    requestNewCode: "fetch failed",
    loginSuccess: "fetch failed",
    memoryMin: "fetch failed",
    memoryMax: "fetch failed",
    memoryHint: "El mínimo no debe ser mayor que el máximo. Un punto de partida habitual es `2G` y `4G`.",
    sourceNames: { gdlauncher: "GDLauncher", prism: "fetch failed", astralrinth: "AstralRinth", xlauncher: "fetch failed", modrinthapp: "fetch failed" },
    sourcePaths: {
      xlauncher: "~/.minecraftx/instances",
      gdlauncher: "~/.local/share/gdlauncher_carbon/data/instances",
      prism: "~/.var/app/org.prismlauncher.PrismLauncher/... o ~/.local/share/PrismLauncher",
      astralrinth: "~/.local/share/AstralRinthApp/profiles",
      modrinthapp: "~/.local/share/modrinth-app/profiles o %APPDATA%/ModrinthApp/profiles",
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
