<p align="center"><img src="assets/app-icon.png" alt="iPod Restore Kit" width="128"></p>

# iPod Restore Kit

A native Mac toolkit for managing classic iPods: browse media, back up libraries,
transfer content, and restore matching firmware on supported devices.

**Current version: 0.2.0 Public Beta 1 · Experimental**

## Download

Open **Releases** on this repository and select **0.2.0 Public Beta 1**.
Download `iPod-Restore-Kit-0.2.0-beta.1-macOS-universal.zip` from **Assets**.
GitHub's automatically generated “Source code” archives contain repository
content, not the Mac app. This repository currently hosts downloads and docs.

The beta supports Intel Macs running **macOS Catalina 10.15.7+** and Apple silicon
Macs running **macOS Big Sur 11+**. Older supported macOS releases use the native
Compatibility interface. iPod touch is not supported.

## Features

- Browse music, videos, photos, supported playlists and device information.
- Full and Dynamic Backups, backup history, and supported media migration.
- Model-aware firmware selection and restore workflows.
- Modern and Classic interfaces, with an older-macOS Compatibility interface.
- Video conversion through bundled HandBrakeCLI and optional Plex integration.
- Optional Rockbox workflows on supported models.

Availability varies by model, format, connection and macOS version. **This beta
is not certified to restore every iPod.** Read [known limitations](docs/KNOWN-LIMITATIONS.md),
especially before using network restoration or changing anything on a device.

## Install

1. Download and expand the release ZIP.
2. Drag **iPod Restore Kit Beta.app** into Applications and open it there.
3. Follow [START-HERE](docs/START-HERE.txt) for permissions and network setup.

This beta is **ad-hoc signed and not Apple-notarized**. macOS may block first
launch; [Apple's per-app approval instructions](https://support.apple.com/en-us/102445)
explain the available option. Do not disable Gatekeeper.

The beta has separate preferences but shares **Documents/iRestore** with the
regular app. Keep independent copies of important backups and run one version
at a time. No new physical restore/boot validation was performed for this build.

## Feedback

Use this repository's **Issues** tab. Include the beta version, macOS version,
iPod model, connection, steps and exact error. Remove serial numbers, tokens,
account names and private media details before attaching logs. See the
[reporting guide](docs/REPORT-A-PROBLEM.txt).

## Credits

**Nico Maentanis** — app creation · [Tower Tech Studios](https://www.towertechstudios.com)  
**Shahzeb Ali (TCHGOD)** — app icon · [YouTube](https://www.youtube.com/@tchgod)

[Third-party credits](docs/CREDITS.md) accompany the app. Bundled components retain
their own licenses and notices; their included source/notice folders are in the
app's Resources. No overall open-source license for the main app is declared by
this download/documentation repository. Apple firmware packages, click-wheel
games and user media are downloaded/imported separately.

An independent project, not affiliated with Apple, Plex or Rockbox.
