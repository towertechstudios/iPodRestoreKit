# iPod Restore Kit 0.3.0 — Public Beta 4

Build **20261028.35**. Existing beta users can choose **Check for App Updates…**, or download the installer below.

## What changed

- **Local or iCloud Dynamic Backups:** choose a destination for each iPod. iCloud snapshots go directly into the selected iCloud Drive folder and share unchanged file data; the app does not create a second local chain. Unchanged reconnects create no new snapshot. Switching destinations keeps both histories. macOS may cache iCloud files locally.
- **Safer cloud baseline handling:** missing cloud metadata or stored files stops the incremental check instead of silently starting a full replacement backup. Verified Download to Mac and manual cloud copies remain available. Automatic snapshot retention applies to local backups; cloud deletion is managed in Finder.
- **Cleaner Backups & Migration:** one backup action/status card, settings and iCloud management in sheets, and a centered switch between restoring a backup and iPod-to-iPod transfer. Saved versions stay at the bottom.
- **Visual backup picker:** searchable cards show device images, date, snapshot type, Local/iCloud location, file count and restore compatibility. Earlier versions expand per iPod; the chosen card stays visible before restoration.
- **Nano 1 Revision A firmware matching:** recognizes hardware family 7 with updater/payload family 17, so the matching downloaded package can be offered. Original nano family 14 remains separate; Apple updater eligibility and format checks still apply.
- **Older-iPod artwork repair:** Photo/Color, Video and nano 1/2 get individual song-linked artwork records. **My Library → Music → Selected Media → Sync Album Artwork** repairs matching songs already on a supported iPod without copying audio. Other models retain existing writer limits; protected content stays on Apple's authorized path.

Includes Beta 3's Get Info, advisory labels and library performance improvements.

## Verification and limits

**110 distinct automated checks passed; two optional firmware-reference checks skipped.** Coverage includes destination isolation, unchanged reconnects, portable cloud recovery, unavailable baselines, the actual downloaded Revision A firmware archive, seven artwork profiles and replacement of existing artwork links. Actual backup-card layouts were checked in light and dark with display-only fixtures. The current source was built for Intel and Apple silicon.

Live iCloud-account transfers, a destructive physical nano restore and actual on-device artwork display still need verification. No real iPod was synced, erased or flashed for these changes. Existing model-specific restore, direct sync, protected-content and network limitations remain. Read **KNOWN-LIMITATIONS.md** and the [compatibility page](https://towertechstudios.github.io/iPodRestoreKit/). Keep Shared Backup Data with its snapshots.

Intel: **macOS Catalina 10.15.7+**. Apple silicon: **Big Sur 11+**. iPod touch is unsupported. New installations default to Modern where available; saved preferences and Documents/iRestore are retained. The visual workspace changes apply to Modern and Classic; Compatibility retains its native layout.

The app is ad-hoc signed and the installer is unsigned; neither is Apple-notarized. The pinned-key signed updater manifest is separate from Apple signing/notarization.

App: Nico Maentanis — [Tower Tech Studios](https://www.towertechstudios.com). Icon: Shahzeb Ali ([TCHGOD](https://www.youtube.com/@tchgod)).
