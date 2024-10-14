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
            "name": "Why do I need a full game dump?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To save space and be more copyright-friendly, TKMM stores mods without any of the game's copyrighted content.\n\nThis is achieved by comparing the game's copyrighted file with the modded file.\n\nWhile this makes distributing mods easier, it also means that TKMM needs access to a copy of the game.\n\nDistributing any part of the game files is illegal, thus, TKMM requires you to provide your own legally obtained copy of the game."
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
                "text": "When mods edit or add more text, every language will not always be included. TKMM can handle this by applying text edits to the language you use in the game.\n\nIn order to fix this problem, go to the settings page and navigate to <kbd><samp>Merging</samp></kbd> / <kbd><samp>Target Language</samp></kbd> then ensure your region and language are properly selected.\n\nFor example, if you play in English and your region is set to America, you should select <ins>USen</ins>."
            }
        },
        {
            "@type": "Question",
            "name": "What files can TKMM merge?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TKMM can merge archive files (<code>.sarc</code>, <code>.pack</code>), parameter files (<code>.bgyml</code>), the resource database (RSDB), the Mals system (Mals) and the resource size table (RESTBL).\n\nSupport for texture archives (<code>.bntx</code>) and audio archives (<code>.bars</code>) is planned for future releases.\n\nTKMM will never support AI files (<code>.ainb</code>), animation sequence files (<code>.asb</code>), timeline files (<code>.bfevtm</code>) or event flow files (<code>.bfevfl</code>)."
            }
        },
        {
            "@type": "Question",
            "name": "Why aren't my mods showing up in-game?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you play on emulator, please ensure you configured the proper <a href=\"https://tkmm.org/docs/using-mods/#emulator-setup\">Export Location</a>. Otherwise, please refer to the <a href=\"https://tkmm.org/docs/using-mods/#switch-setup\">Switch Setup</a> section of the documentation."
            }
        },
        {
            "@type": "Question",
            "name": "Why am I getting errors / crashes in-game?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The most common problems are either caused by a corrupted game dump, broken / incompatible mods, or because your RomFS dump isn't the same version as the update you're playing on.\n\nYou can check for corrupted or missing data with <kbd><samp>Tools</samp></kbd> &gt; <kbd><samp>Check Dump Integrity</samp></kbd>. If it detects any issues, refer to the <a href=\"https://zeldamods.org/wiki/Help:Dumping_games#Switch\">RomFS dumping</a> guide to get a clean game dump. It is recommended to reinstall each mod after redumping (*not needed for mods in the form of TKCL files*).\n\nIn the case of broken or incompatible mods, the best you can do is disable mods one by one and test again until you find which ones are causing problems. Sometimes, this can also be fixed by changing the <a href=\"https://tkmm.org/docs/using-mods/#ordering-mods\">priority order</a> of the mods in question.\n\nFor mods with <a href=\"https://tkmm.org/docs/using-mods/#configuring-mod-options\">configurable options</a>, please ensure you selected those according to your preferences.\n\nIf all else fails and your issue is persistent, please open an issue on the <a href=\"https://github.com/TKMM-Team/Tkmm/issues/new\">GitHub repository</a>, or report the issue on our <a href=\"https://discord.gg/BbVXenRFVc\">Discord server</a>."
            }
        },
        {
            "@type": "Question",
            "name": "Where are logs stored?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The TKMM logs are stored in the <code>log.txt</code> file in the folder <code>/Documents/TotK Mod Manager</code>."
            }
        }
      ]
    }
</script>

# Frequently Asked Questions

This page contains answers to frequently asked questions.

---

## Why do I need a full game dump?

To save space and be more copyright-friendly, TKMM stores mods without any of the game's copyrighted content.

This is achieved by comparing the game's copyrighted file with the modded file.

While this makes distributing mods easier, it also means that TKMM needs access to a copy of the game.

Distributing any part of the game files is illegal, thus, TKMM requires you to provide your own legally obtained copy of the game.

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

For example, if you play in English and your region is set to America, you should select <ins>USen</ins>.

---

## What files can TKMM merge?

TKMM can merge archive files (<code>.sarc</code>, <code>.pack</code>), parameter files (<code>.bgyml</code>), the resource database (RSDB), the Mals system (Mals) and the resource size table (RESTBL).

Support for texture archives (<code>.bntx</code>) and audio archives (<code>.bars</code>) is planned for future releases.

TKMM will never support AI files (<code>.ainb</code>), animation sequence files (<code>.asb</code>), timeline files (<code>.bfevtm</code>) or event flow files (<code>.bfevfl</code>).

---

## Why aren't my mods showing up in-game?

If you play on emulator, please ensure you configured the proper <a href="https://tkmm.org/docs/using-mods/#emulator-setup">Export Location</a>. Otherwise, please refer to the <a href="https://tkmm.org/docs/using-mods/#switch-setup">Switch Setup</a> section of the documentation.

---

## Why am I getting errors / crashes in-game?

The most common problems are either caused by a corrupted game dump, broken / incompatible mods, or because your RomFS dump isn't the same version as the update you're playing on.

You can check for corrupted or missing data with <kbd><samp>Tools</samp></kbd> &gt; <kbd><samp>Check Dump Integrity</samp></kbd>. If it detects any issues, refer to the <a href="https://zeldamods.org/wiki/Help:Dumping_games#Switch">RomFS dumping</a> guide to get a clean game dump. It is recommended to reinstall each mod after redumping (*not needed for mods in the form of TKCL files*).

In the case of broken or incompatible mods, the best you can do is disable mods one by one and test again until you find which ones are causing problems. Sometimes, this can also be fixed by changing the <a href="https://tkmm.org/docs/using-mods/#ordering-mods">priority order</a> of the mods in question.

For mods with <a href="https://tkmm.org/docs/using-mods/#configuring-mod-options">configurable options</a>, please ensure you selected those according to your preferences.

If all else fails and your issue is persistent, please open an issue on the <a href="https://github.com/TKMM-Team/Tkmm/issues/new">GitHub repository</a>, or report the issue on our <a href="https://discord.gg/BbVXenRFVc">Discord server</a>.

---

## Where are logs stored?

The TKMM logs are stored in the <code>log.txt</code> file in the folder <code>/Documents/TotK Mod Manager</code>.

