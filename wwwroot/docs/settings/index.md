---
title: Settings
description: Settings documentation for the TKMM desktop application.
---

# Settings

---

## Application Settings

- [Theme](#theme)
- [System Language](#system-language)
- [Auto Save Settings](#auto-save-settings)
- [7z Path](#7z-path)
- [Emulator Executable Path](#emulator-executable-path)
- [Show Trivia Popup](#show-trivia-popup)
- [Show Advanced Settings](#show-advanced-settings)

<br>

### **Theme**

Controls the application theme.

<br>

### System Language

Defines which language to use on the user interface (restart required).

<br>

### Auto Save Settings

Controls whether or not the settings should be saved automatically.

<br>

### 7z Path

> [!NOTE]
> This field is optional but highly recomended.

Stores the location of the installed 7-zip executable for faster `.7z` mod installation.

<br>

### Emulator Executable Path

The absolute path to your emulator's executable. It should point to the direct executable (e.g: Ryujinx.exe or Ryujinx.AppImage).

Alternatively, you may also type the full name of the emulator, instead of the path to its executable (if the emulator is open when doing so, it will fetch the rest of the configuration on its own).

> [!NOTE]
> If using an .AppImage file, the file's name should contain only the exact name of the emulator and nothing else (e.g: `Citron.AppImage` instead of `Citron-Nightly-0.10.0.AppImage`).

<br>

### Show Trivia Popup

Defines whether or not to show the trivia popup during the merging process.

<br>

### Show Advanced Settings

This makes advanced options visible (restart required). Those options are hidden by default because modifying them can break your configuration.

<br>

---

## Packaging Settings

- [Default Author](#default-author)

<br>

### Default Author

> [!WARNING]
> This setting is automatically set your computers username. Make sure this does not contain sensitive information that may be packaged and deployed in mods.

Defines the author name to use when packaging mods.

---

## Merging Settings

- [Target Language](#target-language)
- [Export Locations](#export-locations)
- [Use romfslite](#use-romfslite)
- [Merged Mod Output Folder](#merged-mod-output-folder)

<br>

### Target Language

Sets the language and region to use when merging.

<br>

### Export Locations

Defines the location(s) to export the merged mod to.

For usage details, refer to the [Using Mods](../using-mods) guide.

<br>

### Use romfslite

Defines whether or not to use the romfslite feature from the TotK Optimizer. This renames the `romfs` folder to `romfslite` and bypasses the atmosphere romfs building process on Switch hardware (to load mod files through the optimizer instead).

This fixes issues preventing the game from being able to launch with mods on Switch hardware using firmware 20.0.0 and higher (due to lack of memory).

This setting is ignored if the TotK Optimizer is disabled.

<br>

### Merged Output Folder

> [!CAUTION]
> The `romfs`, `romfslite`, `exefs` and `cheats` folders in this location will be **permanently deleted** when merging.
> 
> **Do not set this to a folder with any valuable contents**.

Defines the folder where the merged mod is stored (ignored when exporting to a microSD card).

---

## GameBanana Client

- [Use Threaded Downloads](#use-threaded-downloads)
- [Download Timeout Seconds](#download-timeout-seconds)
- [GameBanana Download Max Retries](#gamebanana-download-max-retries)
- [GameBanana Poll Interval](#gamebanana-poll-interval)

<br>

### Use Threaded Downloads

Defines whether to use multi-threaded downloads when downloading mods from the GameBanana browser. Enable this if you experience low download speeds.

<br>

### Download Timeout Seconds

This defines the maximum amount of seconds to wait for a response from the server before failing.

<br>

### GameBanana Download Max Retries

This defines the maximum amount of times to retry a download before failing.

<br>

### GameBanana Poll Interval

This defines the duration (in minutes) between attempts to fetch remotely installed mods from GameBanana. A clear value only polls once at startup.

<br>

---

## Game Dump

- [Preferred Game Version](#preferred-game-version)
- [Keys Folder Path](#keys-folder-path)
- [Packaged Base Game Path(s)](#packaged-base-game-paths)
- [Game Update File Path(s)](#game-update-file-paths)
- [SD Card Root Path](#sd-card-root-path)
- [Game Dump Folder Path(s)](#game-dump-folder-paths)
- [NAND Folder Path(s)](#nand-folder-paths)

<br>

> [!IMPORTANT]
> By default, all these settings are hidden under [Show Advanced Settings](#show-advanced-settings) (except [Preferred Game Version](#preferred-game-version)), because the required paths are automatically fetched during the setup process.
> 
> Do not make modifications to the hidden settings if you do not know what you are doing.
> 
> Not all types of dump formats are required, so if you see empty fields it does not mean you have to fill them. TKMM is compatible with multiple dump types, but it does not mean you have to provide all possible types.

### Preferred Game Version

This defines which version of the game to use if multiple are found in your configuration. When the preferred version is not available, the first version found is used.

This setting is useful if you have different game versions in Sysnand and Emunand on your Switch. Otherwise, for emulators, it is recommended to leave this setting on `Auto` so that TKMM directly selects the exact version that is currently in use on your emulator.

<br>

### Keys Folder Path

This is the path to the folder containing your dumped Switch decryption keys.

<br>

### Packaged Base Game Path(s)

The absolute path to your dumped base game file (.xci or .nsp), or a folder with the base game split into multiple files.

<br>

### Game Update File Path(s)

The absolute path to your dumped game update file (.nsp). Multiple paths can be provided if you use multiple versions.

<br>

### SD Card Root Path

The path to the root of your SD card. For this to be used to be used to fetch the game dump, it must either contain a `Nintendo/Contents` folder with the game on it, or the game needs to be dumped to this SD card via nxdumptool.

Additionally, this setting is also used to determine where to output the TotK Optimizer configuration.

<br>

### Game Dump Folder Path(s)

The absolute path to your dumped RomFS Folder. This type of dump is not recommended for most users, but can be useful for mod creators who have dumps with all extracted contents. Multiple paths can be provided if you use multiple versions.

<br>

### NAND Folder Path(s)

The absolute path to your virtual NAND folder. This is where the game update is installed for some emulators.