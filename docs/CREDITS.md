# Credits & Acknowledgments

## App creation

**Nico Maentanis — App builder**  
[Tower Tech Studios](https://www.towertechstudios.com)

**Shahzeb Ali (TCHGOD) — App icon**  
[TCHGOD on YouTube](https://www.youtube.com/@tchgod)

iPod Restore Kit also thanks the following projects and their contributors.

## Bundled tools and source

- **HandBrake / The HandBrake Team** — the unmodified HandBrakeCLI 1.11.2 universal Mac executable powers video conversion. Licensed under GPLv2. The matching official source archive, COPYING, LICENSE, authors and full upstream library credits are included with the app. https://handbrake.fr/
- **Rockbox / Rockbox contributors** — firmware, bootloaders, fonts and manuals; ipodpatcher and mks5lboot underpin the app's bootloader helpers. Adapted helper source and the pinned upstream source are included. GPLv2 or later, as specified in the source files. https://www.rockbox.org/
- **ipodpatcher contributors, including Dave Chapman**, and **mks5lboot contributors, including Cástor Muñoz** — iPod firmware partition and bootloader tools. Original author and copyright notices are retained in the bundled source. https://github.com/Rockbox/rockbox
- **Tom Thornhill / Ridgecrop Consultants, with Rockbox adaptations by Dave Chapman** — FAT32 formatting code included through Rockbox's ipodpatcher. GPL; original notices are retained. https://www.ridgecrop.demon.co.uk/

- **Milan Marocchi / PodBox contributors** — MIT-licensed hash72/hashAB checksum wrappers and compressed/SQLite nano format references, and iTunesDB serialization-format references for the independent cross-generation library writer. Pinned source and original license are included in the app. https://github.com/MilanMarocchi/podbox
- **Dustin Staley / hashab contributors** — public-domain (Unlicense) HashAB implementation for nano 6th/7th-generation database checksums. Pinned source and license are included. https://github.com/dstaley/hashab
- **Chris Lee and Christophe Fergeau** — original hash72 reverse-engineering and implementation, acknowledged in the PodBox source used by the nano checksum helper.
- **zlib contributors and SQLite developers** — macOS-provided compression and database libraries used for staged nano library updates. https://zlib.net/ and https://sqlite.org/

## macOS apps and platform services

- **Apple** — Finder and installed iTunes integration for iPod sync workflows; QuickTime Player for media previews; macOS iPodUpdater and AMPDevices components for device information, restore and icons. These are system components, not redistributed copies of Apple apps. https://www.apple.com/macos/
- **Swift and SwiftUI, AppKit, Foundation, Combine, AVFoundation, CoreMedia, CoreGraphics, ImageIO, IOKit, Disk Arbitration, Security, CryptoKit, QuickLook, Uniform Type Identifiers and the macOS SDK** — native interface, media, USB/storage access and supporting services. https://www.swift.org/ and https://developer.apple.com/
- **macOS command-line utilities and their contributors** — diskutil, newfs_msdos, ditto and unzip are invoked from the operating system for disk, filesystem and archive operations. https://opensource.apple.com/

## Design, device data and artwork

- **Jonathan Sterling / AquaUI contributors** — MIT-licensed Aqua color mixer and lozenge control backgrounds adapted for Classic buttons, transport controls and checkboxes on macOS 15+, plus scroller gradients adapted to native AppKit scrollbars. Pinned original source, license and integration notes are bundled in AquaUISource. https://github.com/jonsterling/AquaUI

- **Zane Kleinberg (zzanehip), iTunes-Experiment** — design reference for the Classic interface. The app independently implements the visual direction; no upstream source, fonts or graphics from this project are bundled. https://github.com/zzanehip/iTunes-Experiment
- **Christophe Fergeau, wtbw and gtkpod / libgpod contributors** — BSD-licensed hash58 checksum algorithm adapted to Swift for Classic/nano renaming (original source and license are included), plus reference device/model/color tables and iTunesDB/ArtworkDB record and image-format documentation for device identification, names and library metadata. https://github.com/gtkpod/libgpod
- **AppleDB contributors** — external device artwork used when suitable Finder artwork is unavailable. https://appledb.dev/device-selection/
- **Apple Support** — iPod identification information and fallback model imagery. https://support.apple.com/en-us/103823

## Firmware and hardware research

- **The Apple Wiki contributors** — iPod firmware catalog references and published checksums. Firmware downloads remain distinguished by their actual host and verification state. https://theapplewiki.com/wiki/Firmware/iPod
- **Apple** — official firmware packages hosted on Apple's download servers. Firmware is downloaded separately rather than bundled with this app. https://support.apple.com/
- **freemyipod contributors** — recovery, restore and bootloader research used as implementation references. https://freemyipod.org/wiki/Restore_iPod_without_iTunes
- **Rockbox documentation contributors** — Windows/FAT32 conversion and device-specific bootloader guidance. https://www.rockbox.org/wiki/IpodConversionToFAT32

## Optional and archived game workflows

These credits describe source references and optional workflows retained in the project. The game store is currently hidden.

- **Olsro and the iPod Click Wheel Games Preservation Project contributors** — game preservation catalogs and authorization workflow research. https://github.com/Olsro/ipodclickwheelgamespreservationproject
- **Internet Archive and the ipod-classic-games collection contributors** — external community game archive catalog. Game files and authorization are not provided by iPod Restore Kit. https://archive.org/details/ipod-classic-games
- **Tyshawn Cormier / Retroactive contributors** — external reference for optional legacy iTunes installation workflows; Retroactive is not bundled. https://github.com/cormiertyshawn895/Retroactive
- **UTM contributors** — optional external preservation VM workflow reference; UTM and virtual machines are not bundled or required for media conversion. https://mac.getutm.app/

## HandBrake's own library credits

The complete upstream THANKS file and license information are available below. It includes libraries, optional components and platform-specific software used across HandBrake builds; not every component listed is included in the macOS CLI. Credit and license notices are preserved as supplied by HandBrake.

All product names and marks belong to their respective owners. Acknowledgment does not imply endorsement or affiliation.

## Media library integration

- **Plex, Inc.** — Plex Media Server API and download documentation used by the optional personal-server integration. Plex is not bundled; iPod Restore Kit is not affiliated with Plex. https://developer.plex.tv/pms/
- **Apple** — iTunesLibrary, AVFoundation, ImageIO and Keychain frameworks used for local media, metadata, photo thumbnails and credentials. https://developer.apple.com/documentation/ituneslibrary
- **gtkpod / libgpod contributors** — Photo Database structure and model thumbnail format reference for the independent Swift photo sync writer. https://github.com/gtkpod/libgpod

- **Christophe Lambin / mediaclients contributors** — primary implementation reference for Plex account JWT versus registered-device Media Server credentials; no Go code or SDK is bundled. https://pkg.go.dev/github.com/clambin/mediaclients/plex/plextv
- **gtkpod / libgpod contributors** — ArtworkDB record layout, track artwork links and device cover thumbnail profiles used as references for the independent Swift video artwork sync writer. https://github.com/gtkpod/libgpod/blob/master/src/db-artwork-writer.c and https://github.com/gtkpod/libgpod/blob/master/src/itdb_device.c

## Optional FireWire transport

- **Aleksandr Shabelnikov (mrmidi) and ASFireWire contributors** — independently developed DriverKit FireWire/SBP-2/SCSI transport. The unmodified signed/notarized ASFW 0.5.0 build 25 installer is included for optional, separate installation. Apache License 2.0; LICENSE, NOTICE and provenance accompany the installer. FireWire iPod operation remains experimental and unverified. https://github.com/mrmidi/ASFireWire and https://www.asfw.net/

- **Apple iPod Reset Utility 1.0.3** — original encrypted Shuffle 2 recovery image, downloaded from Apple's HTTPS server when requested and extracted as data. The old utility is neither bundled, installed nor executed. Native transfer framing was independently implemented after static inspection of Apple's downloader.
- **TheSeven / freemyipod and Linux4Nano contributors** — Nano 2 boot-ROM/NOR DFU documentation and recovery research, including the device-specific original-NOR limitation. https://github.com/freemyipod/freemyipod and https://files.freemyipod.org/reports/Linux4NanoReport.pdf

## Rockbox extras

- **Rockbox Utility contributors** — theme catalog protocol and official font/game-data download references. The independent native installer uses the project's HTTPS feeds; no Qt source was copied. https://github.com/Rockbox/rockbox/tree/master/utils/rbutilqt
- **Rockbox theme authors** — community themes downloaded on request, with author attribution shown in the browser. Themes retain their individual licenses and are not bundled. https://themes.rockbox.org/
- **Freedoom contributors** — free game data provided by the official Rockbox Doom-data download; downloaded on request, not bundled. https://freedoom.github.io/
- **Simon Tatham and Portable Puzzle Collection contributors** — puzzle plugins supplied by matching Rockbox builds; associated fonts are downloaded on request from Rockbox. https://www.chiark.greenend.org.uk/~sgtatham/puzzles/

- **Apple Music and Apple TV scripting interfaces** — optional read-only source-library artwork export for Mac sync views. Cached images remain on the user's Mac; iPod artwork browsing retains its original device database source. These apps and their artwork are not bundled.
- **Apple PhotoKit / Photos** — authorized, read-only album browsing and selected-image preparation for photo sync. The Photos library is not modified. https://developer.apple.com/documentation/photokit
- **Apple Podcasts** — optional read-only local episode metadata and downloaded-file discovery. Its database schema is private and may change between macOS releases; no Podcasts software or episode content is redistributed.
