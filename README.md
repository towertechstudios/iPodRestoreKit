<p align="center"><img src="assets/app-icon.png" alt="iPod Restore Kit" width="128"></p>

# iPod Restore Kit

A native Mac toolkit for classic iPods: browse media, preserve libraries, transfer content and restore matching firmware on supported devices.

**Current version: 0.3.0 Public Beta 5 · Build 20261031.57 · Experimental**

## Download and install

[**Download Beta 5 →**](https://github.com/towertechstudios/iPodRestoreKit/releases/tag/v0.3.0-beta.5)

Finish iPod operations and quit the app, then download **iPod-Restore-Kit-0.3.0-beta.5-macOS-universal.pkg** from the release's Assets. The installer places the beta in Applications. For manual installation, expand **iPod-Restore-Kit-0.3.0-beta.5-macOS-universal.zip** and move the app to Applications. Existing beta users can choose **Check for App Updates…**.

GitHub's automatic “Source code” archives contain repository documentation, not the app. This repository hosts downloads, release information and the compatibility website; the main app source is not included.

- **Intel:** macOS Catalina 10.15.7 or newer.
- **Apple silicon:** macOS Big Sur 11 or newer.
- Modern and Classic use macOS Sonoma or newer; older supported versions use the native Compatibility interface.
- **iPod touch is unsupported.**

The app is **ad-hoc signed**, the installer is unsigned, and neither is Apple-notarized. [Apple's per-app approval instructions](https://support.apple.com/en-us/102445) describe first-launch options; do not disable Gatekeeper. Signed updater metadata is a separate protection. See [START-HERE](docs/START-HERE.txt).

## What's new in Beta 5

- **Dynamic backup moves and cloud discovery:** verified, resumable destination changes, a consolidated base, upload-gated source cleanup, lower-memory checksums and restore preparation on another Mac. macOS may cache cloud data locally.
- **Backup-first sync:** backup, individual media categories and metadata verification are separate steps. Dynamic Backup reuses unchanged files; otherwise a full backup is made before sync.
- **YouTube downloads:** bundled conversion, TV Show/channel metadata, artwork, saved downloads and deletion; sync requires a compatible video iPod and writer.
- **Faster libraries and steadier playback:** incremental per-iPod metadata catalogs, scoped preview shutdown and fewer updates while playing. Changing views or working on another iPod no longer closes the player.
- **Album and purchase details:** album artwork/year/count/length banners and embedded Purchasing Apple ID/Name in Get Info.
- **Device appearance:** hardware-based classic/video generation labels, gray 7th versus black 6th-generation Classic images, and cached backup device pictures.
- **Compact menu activity and startup refresh:** progress icon/popover and background Music/TV library refresh with ownership-aware closing.

[Full release notes](docs/RELEASE-NOTES.md) · [Known limitations](docs/KNOWN-LIMITATIONS.md)

## Features and compatibility

Browse music, videos, photos and playlists; preview media; export files with supported metadata/artwork; use full or Dynamic Backups and supported migration. Firmware import/restore, bundled HandBrakeCLI conversion, Plex downloads, Apple library sources and optional Rockbox workflows retain model-specific limits. Protected purchases use legitimate Apple authorization; the app does not decrypt content or supply game licenses.

[**Open the iPod compatibility chart →**](https://towertechstudios.github.io/iPodRestoreKit/)

The chart covers 25 model groups with search, family filters, direct/network restore, recovery and format limits, plus direct media/photo/artwork support and backup-destination requirements. A library category appearing in the app does not imply that its direct sync writer is implemented. Later nano and shuffle direct writers, network recovery and some transport paths remain unavailable.

**Implementation is not universal hardware certification.** Beta 5 has 342 passing checks and 10 optional skips, plus architecture/package checks. Three bookmark checks passed after rerunning with access to the macOS folder-permission service. No actual iPod restore, sync or media write was run for these changes. The beta shares **Documents/iRestore** with the regular app; keep independent backups and run one edition at a time. Keep **Shared Backup Data** beside its snapshots. Automatic snapshot retention is local-only; cloud deletion is managed in Finder.

[Pages setup](PAGES-SETUP.md) · [Chart source](docs/index.html)

## Feedback and credits

Report issues with app/macOS versions, iPod model, format, connection, steps and exact error. Remove serial numbers, tokens, account names and private media details from logs. [Reporting guide](docs/REPORT-A-PROBLEM.txt).

**Nico Maentanis** — app creation · [Tower Tech Studios](https://www.towertechstudios.com)  
**Shahzeb Ali (TCHGOD)** — app icon · [YouTube](https://www.youtube.com/@tchgod)

[Third-party credits](docs/CREDITS.md) accompany the app. Bundled components keep their licenses and notices; included sources/notices are in Resources. This download/documentation repository does not declare an overall open-source license for the main app. Apple firmware, click-wheel games and user media are not bundled. Independent project; not affiliated with Apple, Plex or Rockbox.
