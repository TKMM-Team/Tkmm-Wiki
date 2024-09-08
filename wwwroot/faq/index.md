---
_layout: landing
title: FAQ
---

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

The first version of Tears of the Kingdom is largely different from every version.

With the large number of changes, it becomes difficult to distinguish changes made by modders and changes from the update.

This is why version 1.0.0 of Tears of the Kingdom is not supported by TKMM.

---

## Can mods be made compatible for any version?

TKMM will apply the edits from each RomFS mod to the exact version of your game dump, which needs to be at least version 1.1.0 or later.

This however will not be the case for ExeFS mods and cheats, those need to be directly compatible with your target version.

---

## What files can TKMM merge?

TKMM can merge archive files (`.sarc`, `.pack`), parameter files (`.bgyml`), the resource database (RSDB), the Mals system and the resource size table.

Support for texture archives (`.bntx`) and audio archives (`.bars`) is planned for future releases.

TKMM will never support AI files (`.ainb`), animation sequence files (`.asb`), timeline files (`.bfevtm`) or event flow files (`.bfevfl`).

---

## What to do if TKMM outputs an error when trying to merge?

Most common errors are related to either a broken mod, or a corrupted game dump. You can verify your dump by navigating the menu and using `Tools` > `Check Dump Integrity`.

If any corrupted or missing files are detected, refer to the documentation and follow the instructions again on how to extract a RomFS dump.

If your error is different, you can open an issue on the [GitHub repository](https://github.com/TKMM-Team/Tkmm/issues), or ask for support in the [Discord server](https://discord.gg/BbVXenRFVc).