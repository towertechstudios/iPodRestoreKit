# iPod Restore Kit 0.2.0 — Public Beta 1

Prepared 24 October 2026. Based on development version 0.1.173.

A native Mac toolkit for browsing an iPod, backing up its library, transferring
media and managing compatible firmware. Includes Modern and Classic interfaces,
an older-macOS Compatibility interface, Plex downloads, bundled HandBrake video
conversion and optional Rockbox workflows on supported models.

## Included in this beta

- Universal Intel and Apple silicon application, built with release optimization.
- A separate Beta application name, identifier and About version label.
- Network firmware engine expanded to conventional disk-based iPods, preparing
  Mac HFS+ or Windows FAT32 on the main Mac where the live iPod permits it.
- Checked physical device identity, original firmware/map safety copies, bounded
  writes and readback verification for the network disk engine.
- Improved handling of Apple's verified firmware-reservation resize stage on
  recognized shrouded USB iPods, including Classic restore paths.
- Bundled companion 0.5.0/build 12 and third-party credits, notices and sources.
- Removed a developer-specific Plex server address from the first-run default.

## Beta status

This is an experimental build, not a universal compatibility certification.
Compilation, app/package signatures and checksums do not establish physical
restore or boot success. Read KNOWN-LIMITATIONS.md before testing.

## Credits

App: Nico Maentanis, Tower Tech Studios — https://www.towertechstudios.com
Icon: Shahzeb Ali (TCHGOD) — https://www.youtube.com/@tchgod
Full third-party notices are included in the app's About panel and resources.
This independent project is not affiliated with Apple, Plex or Rockbox.
