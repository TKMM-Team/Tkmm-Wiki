---
_layout: landing
title: TKMM - Frequently Asked Questions (FAQ)
description: Frequently asked questions for TKMM troubleshooting.
---

<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
            "@type": "Question",
            "name": "Why do I need a game dump?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To save space and be more copyright-friendly, TKMM stores mods without any of the game's copyrighted content.\n\nThis is achieved by comparing the game's copyrighted file with the modded file.\n\nWhile this makes distributing mods easier, it also means that TKMM needs access to a copy of the game.\n\nDistributing any part of the game files is illegal, thus, TKMM requires you to provide your own legally obtained copy of the game."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use an external cartridge dumping tool to get the game files?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because these tools only dump the information from the cartridge, they will only have the base game and firmware stored on them.\n\nThese tools cannot be used to dump the <code>title.keys</code> and <code>prod.keys</code> files, or an update of the game, which are required for TKMM to function."
            }
        },
        {
            "@type": "Question",
            "name": "Why can't I use version 1.0.0?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The first version of Tears of the Kingdom is very different from every other version.\n\nWith the large number of changes, it becomes challenging to distinguish changes made by modders and changes from the update.\n\nThis is why version 1.0.0 of Tears of the Kingdom is not supported by TKMM."
            }
        },
        {
            "@type": "Question",
            "name": "Can mods be made compatible for any version?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TKMM will apply the edits from each RomFS mod to the exact version of your game dump, which needs to be at least version <a href=\"#why-cant-i-use-version-100\">1.1.0 or later</a>.\n\nThis however will not be the case for ExeFS mods and cheats, those need to be directly compatible with your target version."
            }
        },
        {
            "@type": "Question",
            "name": "Why do I see \"MsgNotFound\" in-game?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "When mods edit or add more text, every language will not always be included. TKMM can handle this by applying text edits to the language you use in the game.\n\nIn order to fix this problem, go to the settings page and navigate to <kbd><samp>Merging</samp></kbd> / <kbd><samp>Target Language</samp></kbd> then ensure your region and language are properly selected.\n\nFor example, if you play in <ins>English</ins> and your region is set to <ins>America</ins> (in your Switch settings or emulator settings), you should select <ins>American English</ins> in the TKMM merging settings."
            }
        },
        {
            "@type": "Question",
            "name": "How do I use cheats?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The method for enabling cheats depends on what you use to play the game:<br/><br/><ul><li><b>Nintendo Switch:</b> Use a cheat manager like EdiZon to enable cheats. You can also configure cheats to be enabled by default by editing <code>/atmosphere/config/system_settings.ini</code> and setting <code>dmnt_cheats_enabled_by_default = u8!0x1</code>.</li><li><b>Ryujinx:</b> Use the built-in cheat manager within the emulator while the game is running.</li><li><b>Yuzu (and forks):</b> Cheats are enabled by default and will work automatically.</li></ul>"
            }
        },
        {
            "@type": "Question",
            "name": "What files can TKMM merge?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TKMM can merge archive files (<code>.sarc</code>, <code>.pack</code>), parameter files (<code>.bgyml</code>), the resource database (RSDB), the Mals system (Mals) and the resource size table (RESTBL).\n\nPatches in the form of <code>.ips</code> or <code>.pchtxt</code> files are merged into one singular IPS patch.\n\nSupport for texture archives (<code>.bntx</code>) and audio archives (<code>.bars</code>) is planned for future releases.\n\nTKMM will never support AI files (<code>.ainb</code>), animation sequence files (<code>.asb</code>), timeline files (<code>.bfevtm</code>) or event flow files (<code>.bfevfl</code>)."
            }
        },
        {
            "@type": "Question",
            "name": "Why aren't my mods showing up in-game?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you play on Switch, ensure that you are running the latest version of Atmosphere. Follow <a href=\"https://switch.hacks.guide\">this guide</a> if your Switch isn't modded.\n\nIf you play on emulator, you need to ensure the path to the emulator's executable in Application Settings is correct (e.g. <code>C:\\Games\\Ryujinx\\Ryujinx.exe</code>).\n\nWhen that path is filled, the Merge Output is automatically set to a new folder in the emulator's mod folder for TotK.\n\nFor example, a correct path for Ryujinx would be <code>C:\\Users\\YourUsername\\AppData\\Roaming\\Ryujinx\\mods\\contents\\0100f2c0115b6000\\TKMM</code>.\n\nIf that path is empty, or does not point to the correct location, right click TotK in your emulator, and select <kbd><samp>Open Mod Data Location</samp></kbd> or <kbd><samp>Open Mod Folder</samp></kbd>. In the location that is now opened in your file explorer, create a new folder called <code>TKMM</code>, and set that newly created folder as the Merge Output."
            }
        },
        {
            "@type": "Question",
            "name": "Why am I getting errors / crashes in-game?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The most common problems are either caused by a corrupted game dump, broken / incompatible mods, or because the dump provided isn't the same version as the update you're playing on.\n\nYou can check the version by going to the <kbd><samp>Cheats</samp></kbd> page in TKMM. At the top of the page, it will show the text <code>Detected Game Version:</code> followed by the version number detected by TKMM (e.g. <code>1.1.0</code>). If it does not match the version in your emulator or Switch, you need to ensure your dump settings are correct.\n\nIn the case of broken or incompatible mods, the best you can do is disable mods one by one and test again until you find which ones are causing problems. Sometimes, this can also be fixed by changing the <a href=\"https://tkmm.org/docs/using-mods/#ordering-mods\">priority order</a> of the mods in question.\n\nFor mods with <a href=\"https://tkmm.org/docs/using-mods/#configuring-mod-options\">configurable options</a>, please ensure you selected those according to your preferences.\n\nIf all else fails and your issue is persistent, please open an issue on the <a href=\"https://github.com/TKMM-Team/Tkmm/issues/new\">GitHub repository</a>, or report the issue on our <a href=\"https://discord.gg/BbVXenRFVc\">Discord server</a>."
            }
        },
        {
            "@type": "Question",
            "name": "Where are logs stored?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The TKMM logs are stored in the <code>Logs</code> folder next to the executable (<code>Tkmm.exe</code> on Windows).\n\nOn the Switch version, the logs are stored in the folder <code>tkmm/Logs</code> on your SD card."
            }
        }
      ]
    }
</script>

# Frequently Asked Questions

This page contains answers to frequently asked questions.

---

## Why do I need a game dump?

To save space and be more copyright-friendly, TKMM stores mods without any of the game's copyrighted content.

This is achieved by comparing the game's copyrighted file with the modded file.

While this makes distributing mods easier, it also means that TKMM needs access to a copy of the game.

Distributing any part of the game files is illegal, thus, TKMM requires you to provide your own legally obtained copy of the game.

---

## Can I use an external cartridge dumping tool to get the game files?

Because these tools only dump the information from the cartridge, they will only have the base game and firmware stored on them.

These tools cannot be used to dump the <code>title.keys</code> and <code>prod.keys</code> files, or an update of the game, which are required for TKMM to function.

---

## Why can't I use version 1.0.0?

The first version of Tears of the Kingdom is very different from every other version.

With the large number of changes, it becomes challenging to distinguish changes made by modders and changes from the update.

This is why version 1.0.0 of Tears of the Kingdom is not supported by TKMM.

---

## Can mods be made compatible for any version?

TKMM will apply the edits from each RomFS mod to the exact version of your game dump, which needs to be at least version <a href="#why-cant-i-use-version-100">1.1.0 or later</a>.

This however will not be the case for ExeFS mods and cheats, those need to be directly compatible with your target version.

---

## Why do I see "MsgNotFound" in-game?

When mods edit or add more text, every language will not always be included. TKMM can handle this by applying text edits to the language you use in the game.

In order to fix this problem, go to the settings page and navigate to <kbd><samp>Merging</samp></kbd> / <kbd><samp>Target Language</samp></kbd> then ensure your region and language are properly selected.

For example, if you play in <ins>English</ins> and your region is set to <ins>America</ins> (in your Switch settings or emulator settings), you should select <ins>American English</ins> in the TKMM merging settings.

---

## How do I use cheats?

The method for enabling cheats depends on what you use to play the game:
- **Nintendo Switch:** Use a cheat manager like [EdiZon](https://github.com/WerWolv/EdiZon) to enable cheats. You can also configure cheats to be enabled by default by editing `/atmosphere/config/system_settings.ini` and setting `dmnt_cheats_enabled_by_default = u8!0x1`.
- **Ryujinx:** Use the built-in cheat manager within the emulator while the game is running.
- **Yuzu (and forks):** Cheats are enabled by default and will work automatically.

---

## What files can TKMM merge?

TKMM can merge archive files (<code>.sarc</code>, <code>.pack</code>), parameter files (<code>.bgyml</code>), the resource database (RSDB), the Mals system (Mals) and the resource size table (RESTBL).

Patches in the form of <code>.ips</code> or <code>.pchtxt</code> files are merged into one singular IPS patch.

Support for texture archives (<code>.bntx</code>) and audio archives (<code>.bars</code>) is planned for future releases.

TKMM will never support AI files (<code>.ainb</code>), animation sequence files (<code>.asb</code>), timeline files (<code>.bfevtm</code>) or event flow files (<code>.bfevfl</code>).

---

## Why aren't my mods showing up in-game?

If you play on Switch, ensure that you are running the latest version of Atmosphere. Follow [this guide](https://switch.hacks.guide) if your Switch isn't modded.

If you play on emulator, you need to ensure the path to the emulator's executable in Application Settings is correct (e.g. <code>C:\Games\Ryujinx\Ryujinx.exe</code>).

When that path is filled, the Merge Output is automatically set to a new folder in the emulator's mod folder for TotK.

For example, a correct Merge Output path for Ryujinx would be <code>C:\Users\YourUsername\AppData\Roaming\Ryujinx\mods\contents\0100f2c0115b6000\TKMM</code>.

If that path is empty, or does not point to the correct location, right click TotK in your emulator, and select <kbd><samp>Open Mod Data Location</samp></kbd> or <kbd><samp>Open Mod Folder</samp></kbd>. In the location that is now opened in your file explorer, create a new folder called <code>TKMM</code>, and set that newly created folder as the Merge Output.

---

## Why am I getting errors / crashes in-game?

The most common problems are either caused by a corrupted game dump, broken / incompatible mods, or because the dump provided isn't the same version as the update you're playing on.

You can check the version by going to the <kbd><samp>Cheats</samp></kbd> page in TKMM. At the top of the page, it will show the text <code>Detected Game Version:</code> followed by the version number detected by TKMM (e.g. <code>1.1.0</code>). If it does not match the version in your emulator or Switch, you need to ensure your dump settings are correct.

In the case of broken or incompatible mods, the best you can do is disable mods one by one and test again until you find which ones are causing problems. Sometimes, this can also be fixed by changing the <a href="https://tkmm.org/docs/using-mods/#ordering-mods">priority order</a> of the mods in question.

For mods with <a href="https://tkmm.org/docs/using-mods/#configuring-mod-options">configurable options</a>, please ensure you selected those according to your preferences.

If all else fails and your issue is persistent, please open an issue on the <a href="https://github.com/TKMM-Team/Tkmm/issues/new">GitHub repository</a>, or report the issue on our <a href="https://discord.gg/BbVXenRFVc">Discord server</a>.

---

## Where are logs stored?

The TKMM logs are stored in the <code>Logs</code> folder next to the executable (<code>Tkmm.exe</code> on Windows).

On the Switch version, the logs are stored in the folder <code>tkmm/Logs</code> on your SD card.
