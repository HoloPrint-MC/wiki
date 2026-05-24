# 創建材質包 Creating packs
## Windows
> [!TIP]
> 請使用[此材質包](https://holoprint-mc.github.io/exportbutton) 以強制顯示安卓裝置上默認隱藏的結構輸出按鈕
1. 在一個創造模式世界中使用 `/give @s structure_block` 命令取得結構方塊，並輸出 `.mcstructure` 文件
![Give Structure Block command](/assets/giveStructureBlockCommand.png)  
![Structure Block exporting](/assets/structureBlockExporting.png)

2. 前往 [https://holoprint-mc.github.io](https://holoprint-mc.github.io) 並選擇你的 `.mcstructure` 文件，並按照需求調整材質包的設置。
![Pack generation screen](/assets/packGenerationScreen.png)
> [!TIP]
> 你可以將多個結構文件導入到單一投影材質包之中，只需要拖拽或選取即可導入。

3. 生成並下載你的投影材質包 (`.mcpack`).  
![Resource pack active](/assets/resourcePackActive.png)

4. 啟用你的材質包並在你的世界中放置盔甲架
![Placing armour stand](/assets/placingArmourStand.gif)

## Android
On Android versions 1.21.130 and above, you can't export structures from Structure Blocks due to Mojang being silly. As a result, the process is more complicated:

1. Change the file storage location to `External` instead of the default `Application` location. If you don’t do this, your worlds won’t show up in the next steps.

> [!WARNING]
> Any worlds you already created in `Application` storage won’t show up after switching to `External`. Currently, there’s no way to transfer worlds from `Application` storage to `External` storage unless you buy a Minecraft Realms subscription (curse Minecraft Marketplace Edition), upload your world there, and download it again.
> Don’t worry though, your old worlds won’t be deleted. They’ll still be there if you switch the file storage back to `Application` later.

2. Create a folder anywhere on your device where you’ll save the world files.
3. Create the world and build the structure. (Yes, you’ll need to rebuild it if you created the world before changing the file storage location to `External`.)
4. Use a Structure Block to save the structure inside the world, then leave the world so it saves properly.
5. Go to: `Android` > `Data` > `com.mojang.minecraftpe` > `files` > `games` > `com.mojang` > `minecraftWorlds`
6. Tap the 3 dots in the top-right corner and set `Sort by` to `Modified (newest first)`. This makes the latest saved world appear first, which helps because world folder names are randomized.
7. Open the world you want. Tap the 3 dots in the top-right corner, select `Select all`, then tap the 3 dots again and choose `Copy to`.
8. Navigate to the folder you created in step 2 and paste the files there. You’ll be redirected back to the original world folder. Open the db folder, select all files again, tap `Copy to`, then go to the folder where you pasted the world files earlier. Open the db folder there (it should be empty), and paste the files into it.
9. Go back to the folder where you pasted the world files. Select all the folders and compress them into a `.zip` file.
10. Upload that `.zip` file to HoloPrint. If everything was done correctly, your structure should appear there. If it doesn't... curse Mojang Studios. :) Then make sure you did all the steps correctly.

On earlier Android versions you should be able to follow the same instructions as for Windows above. Note that in some versions just before 1.21.130, you may be unable to export from structure blocks but able to export the world as a `.mctemplate` from the world settings by using [this resource pack](https://github.com/user-attachments/files/24695202/ImportExportButtonUnhider_v1.0.0.mcpack.zip). You can then change the file extension to `.mcworld` and upload it to HoloPrint. This will not work on Ore UI.

> [!NOTE]
> Big thanks to [KITTUradiates](https://github.com/KITTUradiates) for providing the instructions for Android!

## iOS/iPadOS
On iOS/iPadOS, you can't export structures from Structure Blocks due to Apple's restrictions. However, you can save them to the world, and upload the world file.
1. In the Structure Block menu, enter a structure name and press "Save". Remember the world name and thumbnail.
2. Open up Files, then navigate to `On My iPhone/iPad` > `Minecraft` > `games` > `com.mojang` > `minecraftWorlds`. From there, open folders until you find the world that matches the world you saved the structure in. Look at `levelname.txt` and `world_icon.jpeg` until you find the correct folder.
3. Remember the folder name. Go back into `minecraftWorlds`, long-tap on the folder and press "Compress". This will give you a .zip file. For convenience, move this file into `On My iPad/iPhone`.
4. [Open HoloPrint](https://holoprint-mc.github.io), press "Extract from world" and select the .zip file. HoloPrint will find the structure you saved, and you can create a pack as normal - follow the rest of the instructions above.

## 多結構投影 Multiple structure files in one pack
你只需要在選取文件時選取多個文件即可，你可以通過遊戲內的[切換結構顯示](/hologram-controls#換個結構-change-structure)功能切換成你想要查看的投影結構。