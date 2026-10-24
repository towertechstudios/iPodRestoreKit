# Public Beta 1 — compatibility and limitations

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
