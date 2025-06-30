# 创建材质包 Creating packs
## Android and Windows
> [!TIP]
> 请使用[此材质包](https://holoprint-mc.github.io/exportbutton) 以强制显示安卓装置上默认隐藏的结构输出按钮
1. 在一个创造模式世界中使用 `/give @s structure_block` 命令取得结构方块，并导出 `.mcstructure` 文件
![Give Structure Block command](/assets/giveStructureBlockCommand.png)
![Structure Block exporting](/assets/structureBlockExporting.png)

2. 前往 [https://holoprint-mc.github.io](https://holoprint-mc.github.io) 并选择你的 `.mcstructure` 文件，并按照需求调整材质包的设置。
![Pack generation screen](/assets/packGenerationScreen.png)
> [!TIP]
> 你可以将多个结构文件导入到单一投影材质包之中，只需要拖拽或选取即可导入。

3. 生成并下载你的投影材质包 (`.mcpack`).
![Resource pack active](/assets/resourcePackActive.png)

4. 启用你的材质包并在你的世界中放置盔甲架
![Placing armour stand](/assets/placingArmourStand.gif)

## iOS/iPadOS
On iOS/iPadOS, you can't export structures from Structure Blocks due to Apple's restrictions. However, you can save them to the world, and upload the world file.
1. In the Structure Block menu, enter a structure name and press "Save". Remember the world name and thumbnail.
2. Open up Files, then navigate to `On My iPhone/iPad` > `Minecraft` > `games` > `com.mojang` > `minecraftWorlds`. From there, open folders until you find the world that matches the world you saved the structure in. Look at `levelname.txt` and `world_icon.jpeg` until you find the correct folder.
3. Remember the folder name. Go back into `minecraftWorlds`, long-tap on the folder and press "Compress". This will give you a .zip file. For convenience, move this file into `On My iPad/iPhone`.
4. [Open HoloPrint](https://holoprint-mc.github.io), press "Extract from world" and select the .zip file. HoloPrint will find the structure you saved, and you can create a pack as normal - follow the rest of the instructions above.

## 多结构投影 Multiple structure files in one pack
你只需要在选取文件时选取多个文件即可，你可以通过游戏内的[切换结构显示](/hologram-controls#换个结构-change-structure)功能切换成你想要查看的投影结构。