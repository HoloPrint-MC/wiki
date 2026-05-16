# Creating packs
## Windows
1. In a creative world, use a Structure Block to export a `.mcstructure` file. To get a Structure Block, run the command `/give @s structure_block`.  
![Give Structure Block command](/assets/giveStructureBlockCommand.png)  
![Structure Block exporting](/assets/structureBlockExporting.png)
2. Go to [https://holoprint-mc.github.io](https://holoprint-mc.github.io), select your `.mcstructure` file, and tweak settings.  
![Pack generation screen](/assets/packGenerationScreen.png)
> [!TIP]
> You can enter multiple structure files to put into the same pack, or drag-and-drop files to add them!
3. Generate and download your resource pack (`.mcpack`).  
![Resource pack active](/assets/resourcePackActive.png)
4. Apply your resource pack in your survival world/server and place an armour stand down.  
![Placing armour stand](/assets/placingArmourStand.gif)

## Android
On Android versions 1.21.132 and above, you can't export structures from Structure Blocks due to Mojang being silly. Therefore you must first set Minecraft's storage location to "external" rather than the default "application" before creating the world you want to export the structure from. Once done, you can save structures to the world, and upload the world file with the same instructions as for iOS/iPadOS below.

On earlier Android versions you should be able to follow the same instructions as for Windows above.

Unfortunately I do not have detailed instructions for Android so you will have to experiment yourself. If you have more helpful instructions, please feel free to [update this page](https://github.com/HoloPrint-MC/wiki/edit/main/creating-packs.md).

## iOS/iPadOS
On iOS/iPadOS, you can't export structures from Structure Blocks due to Apple's restrictions. However, you can save them to the world, and upload the world file.
1. In the Structure Block menu, enter a structure name and press "Save". Remember the world name and thumbnail.
2. Open up Files, then navigate to `On My iPhone/iPad` > `Minecraft` > `games` > `com.mojang` > `minecraftWorlds`. From there, open folders until you find the world that matches the world you saved the structure in. Look at `levelname.txt` and `world_icon.jpeg` until you find the correct folder.
3. Remember the folder name. Go back into `minecraftWorlds`, long-tap on the folder and press "Compress". This will give you a .zip file. For convenience, move this file into `On My iPad/iPhone`.
4. [Open HoloPrint](https://holoprint-mc.github.io), press "Extract from world" and select the .zip file. HoloPrint will find the structure you saved, and you can create a pack as normal - follow the rest of the instructions above.

## Multiple structure files in one pack
Simply select multiple files in the file selector. You can [switch between different structures](/hologram-controls#change-structure) in-game.