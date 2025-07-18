# 常见问题 FAQ
> [!TIP]
> 若你找不到想要的解答，你可以在[讨论](https://github.com/SuperLlama88888/holoprint/discussions/new?category=q-a)中提出

## HoloPrint的运作平台
你可以在电脑（Windows/ Linux/ Mac）、安卓与 iOS/ iPadOS 装置享受完整的 HoloPrint 功能。

Note that on iOS/iPadOS, due to Apple's restrictions, you will have to [follow separate instructions](/creating-packs#ios-ipados) to use your structures.

HoloPrint works on Safari 16.4 and later.

HoloPrint 未在主机平台上进行任何测试。

## HoloPrint的运作版本
因為其使用了较新的的材质包功能，已生成的投影材质包在最新版本中效果自然最好，最旧可使用版本為1.18，但并不保证所有功能都能如常运作。
你可以使用任意版本中导出的结构文件（.mcstructure），即便老版本中的方块编号与新版本有机会不一致，HoloPrint也能自动适配。
HoloPrint 在教育版也同样生效。

## 使用HoloPrint是否会影响到获得成就？
HoloPrint只是一个材质包，并不会影响到获得游戏成就。

## 这结构输出按钮跑哪了？
使用此[材质包](https://holoprint-mc.github.io/exportbutton)以显示所有隐藏的结构方块按钮（仅安卓平台）。

## 这盔甲架不显示东西诶！
首先，你可以尝试将所有其他资源包关闭，并保证投影材质包是唯一已啟用的资源包。
如果此问题依然持续，这就必然是一个bug了，请到[报告问题](https://github.com/SuperLlama88888/holoprint/issues/new/choose)页面回报让我们可以快速解决这个问题。

## It doesn't work on a server
This means a server resource pack is intefering with HoloPrint. When you join some servers for the first time, it says you have to download resource packs to play - these resource packs override the armour stand and break HoloPrint. If the server has Java-Bedrock crossplay, there's a high likelihood that it uses Geyser and specifically [GeyserOptionalPack](https://geysermc.org/wiki/other/geyseroptionalpack), a resource pack which modifies armour stands.

To fix this, you have two options:
1. Contact the server owner(s) and ask them to remove any server resource packs that modify the armour stand entity.
2. Modify the server resource pack for your Minecraft installation. Finding where they are stored depends on your device:
   - If you are on Android, go to `/data/data/com.mojang.minecraftpe/cache/minecraftpe/packcache/resource/`
   - If you are on Windows, go to `C:\Users\...\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalCache\minecraftpe\packcache\resource\`

   Then look through all resource packs and if they contain a `entity/armor_stand.entity.json` file, delete that file. If you suspect GeyserOptionalPack is causing this issue, look for the resource pack which contains a `developer_documentation.md` file.

## 游戏内控制没反应啊！
很大的可能是麻将的锅，主要是因為一些「可附着模型」被渲染时候导致的，这些包括客制化的3D模型包括盔甲架、鞘翅、三叉戟、盾牌和弓等等。
你可以通过禁用左上角的纸娃娃，和避免在进行游戏内控制时到处乱看以避免这个问题。

## 游戏内保存投影状态坏了！
投影状态保存只会在保存粒子出现的同时进行保存，即便他们会在你远离的时候自动保存，却不能在进入传送门或者离开游戏时候保存，因此请保证你在进行这些动作前手动[保存投影状态](/hologram-controls#save-hologram-settings)

在默认情况下，每个投影有十个备份保存格，且可以通过在 _Settings > Advanced > Backup slot count_ 中修改设置。

影响游戏内控制的问题同样也会影响游戏内保存投影状态的功能，详情可以查看[游戏内保存投影状态坏了！](#游戏内控制没反应啊)

## 投影大小有限制吗？
投影材质包本身并无大小限制，但游戏内输出结构有大小限制，而且渲染盔甲架也有距离限制，你可以通过将[多个结构文件合併成单一投影](/hologram-controls#换个结构-change-structure)

## 我要如何改变游戏内控制？
游戏内控制可以通过网站内的 _Settings > In-game controls_ 设定。

## 嫩卡，我咋玩啊！
首先，你可以检查一下你周围是否有隐藏的盔甲架，你可以通过[空手打盔甲架关闭渲染](/punch-to-activate)以减轻渲染压力。可惜的是，现在并没有任何高效的方法来渲染幽灵方块，如果实在太卡，你可以考虑将大型的结构分成多个小型结构以减轻渲染压力。

## 控制用物品可以重新命名吗？
当然可以啦！重新命名物品并不会影响任何游戏内控制。

## HoloPrint是否会保存我的档案？
不会哦，所有处理都会在你的浏览器内完成，代表并无任何档案会离开你的电脑。
為了分析需要，SHA-256的首4位元会被上载到数据库，这是一个纯数学生成数字并且无法通过此数字追踪到档案的来源。每一个相同的文件会被赋予同一个独特的编号，这允许HoloPrint知道独特结构文件的数量，同时保持使用者和档案的匿名性。