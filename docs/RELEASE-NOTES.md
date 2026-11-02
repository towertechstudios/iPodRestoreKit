# iPod Restore Kit 0.3 — Public Beta 6

Build **20261102.75** · macOS Catalina 10.15.7+ on Intel; Big Sur 11+ on Apple silicon. Modern and Classic require Sonoma or newer.

## Changes since Public Beta 5

- **Full-screen Now Playing:** click the artwork beside the status bar for large artwork, song details, seek controls, volume, Mac sound output and Up Next. Close or press Escape without stopping music. Smooth opening, artwork/play-pause and queue transitions respect Reduce Motion.
- **Music queue:** Play Next and Add to Queue, remove upcoming songs, clear Up Next and automatic advance. Disconnecting the playing source stops playback; disconnecting another iPod removes its upcoming tracks.
- **Mac audio output:** the themed AirPlay button lists available output devices and checks the current Mac output. Nearby Bonjour AirPlay advertisements appear separately; new receiver connections use macOS Sound settings. Receiver visibility depends on the network and macOS discovery; the app does not claim every advertised receiver is connected or compatible.
- **Optional iPod touch:** off by default in Settings → General. Existing explicit choices are retained. Bundled native tools support experimental identity, pairing, backup, supported media reading/playback, storage information and imported-IPSW operations. Native touch media syncing and Dynamic/iCloud touch backups remain unavailable.
- **Built-in device tools:** universal Intel/Apple silicon helpers and corresponding source archives/licenses; no separate Homebrew or Legacy iOS Kit installation required. Advanced shell, jailbreak, SHSH and tethered/custom downgrade recipes are not integrated.
- **Dynamic backup reliability:** resumable cloud-move recovery, retained folder access and safer handling of temporary iCloud outages. Backups stay protected until destination checks and required upload confirmation finish.
- **Shared touch Summary and native Finder icons:** aligned layouts, diagnostics and measured storage categories, plus additional touch model/color images.
- **Settings and toolbar fixes:** Classic General scrolls to all sections; open Settings updates on theme changes. Modern volume sits beside playback controls. Redundant automatic-action buttons are removed from normal screens; Diagnostics and failed-read retries remain.

## Validation and limitations

The release includes automated queue, output selection, discovery-name, default-setting, backup and media tests, plus isolated small/large player and Settings/theme renders. **425 checks passed, 12 optional/reference checks skipped, zero failures.** This release pass does not perform live iPod writes or audio output changes. Live AirPlay routing, full-screen transitions during real playback, real touch model/OS combinations and cross-Mac iCloud behavior still require hardware checks.

This is an experimental beta. Restore, media writing, network operation and protected purchases retain their existing model-specific requirements. The app does not bypass Apple authorization or firmware signing.

The app is ad-hoc signed and the installer unsigned; neither is Apple-notarized. The pinned-key updater signature protects the release manifest separately. Finish all iPod operations and quit the old app before installing.

Created by Nico Maentanis — [Tower Tech Studios](https://www.towertechstudios.com). App icon by Shahzeb Ali ([TCHGOD](https://www.youtube.com/@tchgod)).
