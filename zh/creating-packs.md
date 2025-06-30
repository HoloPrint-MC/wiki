# 創建材質包 Creating packs
## Android and Windows
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

## iOS/iPadOS
On iOS/iPadOS, you can't export structures from Structure Blocks due to Apple's restrictions. However, you can save them to the world, and upload the world file.
1. In the Structure Block menu, enter a structure name and press "Save". Remember the world name and thumbnail.
2. Open up Files, then navigate to `On My iPhone/iPad` > `Minecraft` > `games` > `com.mojang` > `minecraftWorlds`. From there, open folders until you find the world that matches the world you saved the structure in. Look at `levelname.txt` and `world_icon.jpeg` until you find the correct folder.
3. Remember the folder name. Go back into `minecraftWorlds`, long-tap on the folder and press "Compress". This will give you a .zip file. For convenience, move this file into `On My iPad/iPhone`.
4. [Open HoloPrint](https://holoprint-mc.github.io), press "Extract from world" and select the .zip file. HoloPrint will find the structure you saved, and you can create a pack as normal - follow the rest of the instructions above.

## 多結構投影 Multiple structure files in one pack
你只需要在選取文件時選取多個文件即可，你可以通過遊戲內的[切換結構顯示](/hologram-controls#換個結構-change-structure)功能切換成你想要查看的投影結構。