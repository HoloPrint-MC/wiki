# FAQ
## What platforms does HoloPrint work on?
HoloPrint fully works on PC (Windows/Linux/Mac) and Android.

On iOS, you are unable to export structure files from Structure Blocks due to Apple's restrictions; however, you will be able to create and use a HoloPrint resource pack if you send a structure file to your iOS device.

HoloPrint has not been tested on console platforms.
## What Minecraft versions does HoloPrint work on?
Generated HoloPrint resource packs will work best in modern Minecraft Bedrock versions because they use modern Minecraft resource pack features; however, they can be used in versions as far back as 1.18, but there is no guarantee all features will work!

Structure files you use to make your packs can be from any Minecraft version. Even though block IDs from older versions are different to modern versions, HoloPrint automatically updates structures to the latest Minecraft version. 

HoloPrint also works in Education Edition.
## Does HoloPrint disable achievements?
No, HoloPrint does not disable achievements.
## I can't find the “Export” button...
Use this [helper resource pack](https://github.com/SuperLlama88888/holoprint/raw/refs/heads/main/assets/structureBlockButtonAdderPack.mcpack) to show all Structure Block buttons.  
This is because the “Export” button is hidden by default on all platforms except desktop.
## The armour stand doesn't show the hologram
First, try disabling all other global resources and any resource packs applied on worlds, so the HoloPrint resource pack is the only resource pack applied.  
If this issue persists, that's definitely a bug! Please [create an issue](https://github.com/SuperLlama88888/holoprint/issues/new) so this can be investigated and fixed.
## Player controls don't work
This is most likely due to Bugrock, which can break player controls when certain models called "attachables" are rendered on-screen. Attachables are items with custom 3D models, including armour, elytra, trident, shield, bow, etc.

To avoid this, try disabling the paper doll in the top-left, and try looking around in random directions while performing the player control.
## Saving the hologram didn't work
Armour stands only save the hologram state *while* the save particles are showing. Although they will automatically try to save if you get far away, they won't automatically save if you're going through a portal or exiting the world. In that case, make sure to [save the hologram settings](/hologram-controls#save-hologram-settings) before going through a portal/leaving the world.

By default, there are 10 backup slots for holograms; this can be changed with the _Settings > Advanced > Backup slot count_ setting.

Additionally, the same bug which sometimes affects player controls also affects hologram saving; refer to [Player controls don't work](#player-controls-don-t-work).
## Is there a size limit to holograms?
No. However, you may be limited by the Structure Block size limit; in this case, split your structure up into multiple structure files, and [combine them into the same pack](/creating-packs#multiple-structure-files-in-one-pack).
## How can I change player controls?
Player controls can be customised on the website in the _Settings > In-game controls_ options.
## Why is it so laggy?
First, check there aren't any hidden armour stands around where you're building; you can use [punch to activate](/punch-to-activate) mode to reduce the lag.Unfortunately, there is no high-performance way to render many ghost blocks in Bedrock Edition. Try splitting your structure up into multiple structure files, and [combining them into the same pack](/creating-packs#multiple-structure-files-in-one-pack).
## Can I rename my control items?
Absolutely! Renaming items has no effect on player controls.
## Does HoloPrint keep my structure file?
No. All processing is done entirely within your web browser, meaning your files never leave your computer.

For analytics, the first 4 bytes of the SHA-256 hashes of structure files used are uploaded to a database. This is a mathematically generated number that is **impossible** to find the original file from. Since the same file will give the same number each time, the number of unique structure files seen by HoloPrint can be tracked while keeping users and files anonymous.