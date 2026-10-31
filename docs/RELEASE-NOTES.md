# iPod Restore Kit 0.3.0 — Public Beta 5

Build **20261031.57**. Upgrade with **Check for App Updates…**, or use the installer or ZIP below.

## Changes since Beta 4

- **Safer Dynamic Backup moves:** changing Local/iCloud destination transfers the matching history, verifies it, creates a consolidated base, and only then cleans up the old location. iCloud cleanup also waits for confirmed upload. Interrupted moves can resume; cancellation keeps existing backups. Manual backups retain separate Copy to Mac/iCloud actions. Streaming checksums reduce memory use during long moves.
- **Cloud backups on another Mac:** discover existing iCloud backup catalogs, verify their files and prepare them for restore. Temporary upload-service failures retry with bounded delays. macOS still controls cloud caching, upload and download; zero local disk use is not guaranteed.
- **Responsive controls and playlists:** background cloud checks no longer disable device actions or normal playlist loading.
- **Backup-first sync:** a backup is the first step by default, followed by each selected media category and metadata verification. Enabled Dynamic Backups reuse unchanged data; otherwise this creates a full local backup. A failed/canceled backup stops before media writes. Sync prevents idle sleep.
- **YouTube in Media:** download a single public/unlisted video, convert it with bundled tools and prepare it for a compatible video iPod. New downloads are TV Shows with the channel as the show. Titles, dates, descriptions and artwork are retained. Saved downloads can be previewed, synced or deleted from the Mac. Account-restricted videos, DRM, playlists and live streams are unsupported.
- **Incremental per-iPod library catalogs:** cache file paths, metadata and artwork references for mounted devices; update changed records instead of rebuilding unchanged libraries. Media plays from the iPod. Library scans respect the automatic-scan preference and do not remount ejected devices.
- **Smoother playback:** switching views/themes, additive sync and work on another iPod no longer close the current player. Destructive operations stop previews belonging to their target. Playback updates do less work; Explicit tracks show a red E.
- **Richer album and song details:** selected albums show artwork, artist, year, song count and length. Get Info shows embedded Purchasing Apple ID and Purchasing Name when available. Missing values are not guessed from the Mac account.
- **Better device labels and pictures:** distinguish iPod classic 6th/6.5/7th and iPod video 5th/5.5 generations from hardware evidence. Gray 7th-generation Classics use the separate Finder image; black 6th-generation models stay black. Cached device pictures remain available for backups; new cloud catalogs carry a portable thumbnail.
- **Compact Mac menu activity:** an iPod icon and progress ring show activity; click for details, steps and available controls. The minimized-only preference remains available.
- **Apple library startup refresh:** open Music/TV in the background, refresh the local lists, then close only the app processes started by this refresh. Apps already open are retained.

## Verification and limits

**352 automated checks: 342 passed, 10 optional checks skipped.** Three cloud-refresh checks initially could not access macOS's folder-permission service in the restricted test run; they passed when rerun with that access. Fixtures cover backup integrity/moves, cancellation, incremental catalogs, device labels/colors, scoped playback, purchase tags and media metadata. Narrow/wide album banners and native device images were rendered and inspected. Universal Intel/Apple silicon packaging and update integrity were verified.

Live two-iPod playback, physical gray/black detection, cross-Mac iCloud-account moves and physical sync/restore still need verification. This is an experimental beta, not certification of every model. Existing firmware, network, protected-content and direct-writer limitations remain; see **KNOWN-LIMITATIONS.md** and the [compatibility chart](https://towertechstudios.github.io/iPodRestoreKit/). No real iPod was erased, flashed or synced for this release validation.

Intel: **macOS Catalina 10.15.7+**. Apple silicon: **macOS Big Sur 11+**. Modern/Classic require Sonoma or newer; older supported systems use Compatibility. iPod touch is unsupported. Finish operations and quit the old app before installing. Keep Shared Backup Data with snapshots and retain an independent backup.

The app is ad-hoc signed, the installer unsigned, and neither is Apple-notarized. Pinned-key signed updater metadata is a separate integrity check.

App: Nico Maentanis — [Tower Tech Studios](https://www.towertechstudios.com). Icon: Shahzeb Ali ([TCHGOD](https://www.youtube.com/@tchgod)).
