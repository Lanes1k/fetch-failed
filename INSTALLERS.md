# Fetch failed 1.0.7 — установочные файлы

Результаты упаковки находятся в `release/`.

## Windows x64

- `fetch-failed-1.0.7-win-x64.exe` — установщик.
- `fetch-failed-1.0.7-win-x64.exe.blockmap` — служебный файл обновления.
- `fetch-failed-1.0.7-win-x64.zip` — архив приложения.

## Linux x64

Эти файлы собираются заданием Linux в GitHub Actions, а не локально на Windows:

- `fetch-failed-1.0.7-amd64.deb`
- `fetch-failed-1.0.7-x86_64.rpm`
- `fetch-failed-1.0.7-x86_64.AppImage`
- `fetch-failed-1.0.7-x86_64.pacman`
- `fetch-failed-1.0.7-x64.tar.xz`

## macOS Apple Silicon

Эти файлы собираются заданием macOS в GitHub Actions:

- `fetch-failed-1.0.7-mac-arm64.dmg`
- `fetch-failed-1.0.7-mac-arm64.dmg.blockmap`
- `fetch-failed-1.0.7-mac-arm64.zip`
- `fetch-failed-1.0.7-mac-arm64.zip.blockmap`

## Обновления

Electron Builder создаёт `latest.yml`, `latest-linux.yml` и `latest-mac.yml`.
Имена оставлены стандартными: их ожидает `electron-updater`.
В релизе 1.0.6 эти файлы назывались `fetch-failed*.yml`.

## Полная сборка

Workflow `.github/workflows/release.yml` собирает все три платформы.
Ручной запуск создаёт артефакты без публикации релиза.
Публикация релиза выполняется только при отправке тега `v*`.

Сборки без сертификата подписи могут вызывать предупреждение Windows или macOS.
