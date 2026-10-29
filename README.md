<p align="center"><img src="assets/app-icon.png" alt="iPod Restore Kit" width="128"></p>

# iPod Restore Kit

A native Mac toolkit for classic iPods: browse media, preserve libraries, transfer content and restore matching firmware on supported devices.

**Current version: 0.3.0 Public Beta 4 · Build 20261028.35 · Experimental**

## Download and install

[**Download Beta 4 →**](https://github.com/towertechstudios/iPodRestoreKit/releases/tag/v0.3.0-beta.4)

Finish iPod operations and quit the app, then download **iPod-Restore-Kit-0.3.0-beta.4-macOS-universal.pkg** from the release's Assets. The installer places the beta in Applications. For manual installation, expand **iPod-Restore-Kit-0.3.0-beta.4-macOS-universal.zip** and move the app to Applications. Existing beta users can choose **Check for App Updates…**.

GitHub's automatic “Source code” archives contain repository documentation, not the app. This repository hosts downloads, release information and the compatibility website; the main app source is not included.

- **Intel:** macOS Catalina 10.15.7 or newer.
- **Apple silicon:** macOS Big Sur 11 or newer.
- Modern and Classic use macOS Sonoma or newer; older supported versions use the native Compatibility interface.
- **iPod touch is unsupported.**

The app is **ad-hoc signed**, the installer is unsigned, and neither is Apple-notarized. [Apple's per-app approval instructions](https://support.apple.com/en-us/102445) describe first-launch options; do not disable Gatekeeper. Signed updater metadata is a separate protection. See [START-HERE](docs/START-HERE.txt).

## What's new in Beta 4

- **Local or iCloud Dynamic Backups, per iPod:** save directly to the selected destination, share unchanged data and create a snapshot only when files change. Switching keeps both histories. Missing cloud data stops the update instead of silently creating a full replacement backup. macOS may keep a local cloud cache; live iCloud-account transfer still needs verification.
- **Simpler Backups & Migration:** one main backup action, settings in sheets, one migration workflow at a time and saved backups at the bottom.
- **Visual backup picker:** searchable iPod cards with dates, snapshot type, Local/iCloud storage, file counts, compatibility and expandable earlier versions.
- **Nano 1 Revision A firmware fix:** accepts matching family 17 packages with live hardware family 7. Original family 14 stays separate; actual restores still require device/format/Apple updater checks.
- **Artwork on older iPods:** corrected per-song thumbnail records for Photo/Color, Video and nano 1/2. Use **My Library → Music → Selected Media → Sync Album Artwork** to repair matching existing songs without copying audio. Physical cover display still needs checking after safe eject.

[Full release notes](docs/RELEASE-NOTES.md) · [Known limitations](docs/KNOWN-LIMITATIONS.md)

## Features and compatibility

Browse music, videos, photos and playlists; preview media; export files with supported metadata/artwork; use full or Dynamic Backups and supported migration. Firmware import/restore, bundled HandBrakeCLI conversion, Plex downloads, Apple library sources and optional Rockbox workflows retain model-specific limits. Protected purchases use legitimate Apple authorization; the app does not decrypt content or supply game licenses.

[**Open the iPod compatibility chart →**](https://towertechstudios.github.io/iPodRestoreKit/)

The chart covers 25 model groups with search, family filters, direct/network restore, recovery and format limits, plus direct media/photo/artwork support and backup-destination requirements. A library category appearing in the app does not imply that its direct sync writer is implemented. Later nano and shuffle direct writers, network recovery and some transport paths remain unavailable.

**Implementation is not universal hardware certification.** Beta 4 has 110 passing focused checks and two optional skips, plus architecture/package checks. No actual iPod restore, sync or media write was run for these changes. The beta shares **Documents/iRestore** with the regular app; keep independent backups and run one edition at a time. Keep **Shared Backup Data** beside its snapshots. Automatic snapshot retention is local-only; cloud deletion is managed in Finder.

[Pages setup](PAGES-SETUP.md) · [Chart source](docs/index.html)

## Feedback and credits

Report issues with app/macOS versions, iPod model, format, connection, steps and exact error. Remove serial numbers, tokens, account names and private media details from logs. [Reporting guide](docs/REPORT-A-PROBLEM.txt).

**Nico Maentanis** — app creation · [Tower Tech Studios](https://www.towertechstudios.com)  
**Shahzeb Ali (TCHGOD)** — app icon · [YouTube](https://www.youtube.com/@tchgod)

[Third-party credits](docs/CREDITS.md) accompany the app. Bundled components keep their licenses and notices; included sources/notices are in Resources. This download/documentation repository does not declare an overall open-source license for the main app. Apple firmware, click-wheel games and user media are not bundled. Independent project; not affiliated with Apple, Plex or Rockbox.
