# Public 0.3 Beta 5 — compatibility and limitations

Only firmware-supported Mac/HFS+ and Windows/FAT formats are restore targets.
APFS and exFAT are not supported iPod boot formats. Shuffle models use Windows
format; formats are filtered by the device's reported capabilities.

| Feature / connection | Beta coverage | Limits |
| --- | --- | --- |
| Direct USB firmware restore | Existing Apple updater paths for recognized non-touch models and matching firmware | Requires live approval and result checks; not every model/recovery state has been physically validated |
| Network disk-engine restore | Original FireWire iPods, iPod 3/4, Photo/Color, mini 1/2, Video 5/5.5, nano 1 profiles | Requires live identity and an existing conventional firmware/data partition map; new paths need hardware validation |
| Network Classic, nano 2–7, shuffle firmware restore | Unavailable | Separate firmware protocols remain to be implemented |
| Network DFU or entirely blank partition maps | Unavailable | Use an applicable direct-connection recovery/fresh-storage path |
| Nano 2 DFU/NOR recovery | Unavailable | No verified bootstrap/NOR restoration path |
| Network backup-library activation | Existing bridge host job | Matching-serial complete backups; cross-generation network conversion is unavailable |
| Network media edits, playlist writes, Dynamic Backup and Rockbox writes | Incomplete | Use direct attachment for supported workflows |
| FireWire | Requires functional transport on the bridge Mac | Optional driver integration is experimental, not proof of iPod operation |
| PowerPC Leopard companion native relay | Source-build option with already-installed developer tools | Has not been compiled/validated on that hardware |

The main Mac owns network firmware parsing, filesystem creation and write
sequencing. The bridge still must perform physical I/O and request access on
the computer holding the cable. It is not a virtual USB port. Backup-library
activation continues to run its existing job on the bridge Mac.

New network restore formats, disconnect handling, administrator dialogs and
on-device boot need physical validation. Transfer/readback success alone does
not prove that an iPod boots. If a restore fails after writing, its completion
may be unknown: keep the safety backup and log and inspect the device before
another attempt. There are no automatic firmware-write retries or rollbacks.

Protected purchases still depend on Apple's authorization and compatible sync
services. This beta does not remove DRM or provide purchased game licenses.
Apple firmware packages, click-wheel games and user media are not bundled. No user libraries, device
history, saved credentials or developer restore logs are included in the ZIP.

The app is not Apple-notarized. Catalina support is an explicit build target;
this beta has not been launched on every supported macOS release.

## 0.3 Beta 1 media and identification limits

- Protected-purchase sync uses Apple's final Finder sync. Being authorized on the Mac does not establish iPod authorization or encoding compatibility. Legacy downloaded purchases can be prepared; subscription downloads, streaming packages and rentals remain unsupported. The app does not decrypt content or provide licenses.
- Final protected transfers and playback require live Apple/device verification; automated routing tests are not playback certification. Direct sync still needs a supported database writer.
- Apple Podcasts requires access to its protected library/download folders; use Allow Podcasts Access on the Podcasts sync page. Only downloaded local episodes appear. Protected subscription podcasts cannot use direct sync.
- Nano 1 revision labels need live updater evidence (or host-reported evidence for network devices). Both original/revised physical variants still need validation. Generic USB product, capacity and names alone do not establish the revision.

## New 0.3 library features

191 automated tests: 186 passed, 5 optional checks skipped. All 10 final export/duplicate tests passed. Real generated-HD conversion, metadata/container handling and disposable dynamic snapshots were tested. The Music-import automation script compiled; live Music import and physical iPod behavior still need verification. No real iPod was synced, erased or flashed and no user backup was modified during this work.

Direct media sync still needs a supported database writer; nano 5–7 and shuffle retain their existing direct-writer restrictions. Duplicate presence badges are in Modern/Classic for songs/videos; photos retain the existing photo engine. Protected purchases finish through Apple's authorized sync and are not decrypted. Export artwork embedding supports MP3 ID3v2.3/2.4 and standard M4A/M4B/MP4 containers; unusual/protected formats remain unchanged. Remote artwork-cache extraction remains limited by existing bridge support.


## Beta 4 cloud and artwork limits

iCloud uses a chosen iCloud Drive folder. macOS can cache files locally; this is not a server-side backup API or a promise of zero local disk use. Upload status comes from macOS. A missing cloud baseline stops incremental updates. Changing destinations moves the matching history with verification and upload-gated source cleanup; cloud retention/deletion is managed in Finder. No additional backup encryption is supplied. Live account transfer still needs verification.

Artwork-only repair uses exact encoded-content matching with available local covers on supported conventional database writers. It does not authorize protected files or add direct writer support for later nano/shuffle models. Physical artwork display and destructive nano restoration were not performed during Beta 4 verification.

## Beta 5 additions and validation

Dynamic destination changes now move matching histories and create a consolidated
base, with source cleanup only after verified copying and confirmed cloud upload.
Interrupted moves are resumable. Manual backup copies remain separate. Temporary
cloud service errors can wait/retry; account sign-in, quota and network remain
macOS/user responsibilities. Live cross-Mac account behavior needs testing.

YouTube supports single public/unlisted video URLs with bundled download/merge/
conversion tools. No cookies or account login are supplied. Private/restricted
videos, playlists, live streams and DRM are unsupported. Service changes may
require newer tools. iPod video capability, writer and artwork limits still apply.

Backup-first sync is enabled by default: without Dynamic Backup it makes a full
local backup each time. Enable Dynamic Backup to reuse unchanged data, or change
the backup-before-sync setting. Protected purchases keep the Apple handoff.

The per-device catalog stores paths/metadata and cover references, not copies of
audio/video. Reconnect and Refresh inventory files; small idle signatures notice
normal library changes, but arbitrary external edits can require Refresh. Source
media must remain connected for playback. Unknown color/generation is not inferred
from capacity. Custom or cached volume icons take priority over native icons.
Older cloud catalogs without thumbnail bytes retain their existing image fallback.

Current suite: 352 checks, 342 passed and 10 opt-in/reference checks skipped.
Three macOS-bookmark checks passed after rerunning with folder-service access.
These supersede earlier historical test counts above. No physical restore/sync
was run for this release. Live two-device playback, generation/color evidence,
cloud account transfer, startup Apple-app automation and on-device media display
still need validation. Purchase tags are metadata, not authorization evidence.
