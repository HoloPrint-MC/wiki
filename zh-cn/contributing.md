# 贡献 Contributing
HoloPrint 是一个开源且欢迎提交贡献的项目，你可以在 [SuperLlama88888/holoprint](https://github.com/SuperLlama88888/holoprint) 中找到源码。并且由于 HoloPrint 是近乎数据驱动的，代表你并不需要编程能力也可以增加对新方块的支持。

## 代码编辑 Code editor
强烈建议使用VSCode，或者任何能够显示基于 JSON schmas 和 JSDoc 的提示。按下项目主页的 `.` 可以使用线上版 VSCode。

## 新增方块 Adding new blocks
所有方块模型都以 JSON 文件储存，并且可以在 `data` 文件夹中找到相应的数据，这里一共分成四种文件类型：
- `blockShapes.json` 控制方块的形状，所有相同形状的方块会使用同一个模型，并且大部分时候内容相同
- `blockShapeGeos.json` 储存了每个方块模型的实际形态，而座标代表每个像素的位置，并以（0,0,0）代表最前面、最下方、最左边的像素。这边建议查询 [Java 版方块模型](https://mcasset.cloud/1.21.3/assets/minecraft/models/block) 作参考
- `blockStateDefinitions.json` 储存控制材质与旋转的定义
  - 所有材质变体是来自于[原版材质包](https://github.com/Mojang/bedrock-samples/tree/preview/resource_pack)中的 `textures/terrain_texture.json` 文件，部分方块单以方块状态就可以判断其使用的材质，而部分方块有固定的材质变体，这种情况则需要在 `blockEigenvariants.json` 之中宣告。
  - 全方块旋转也被方块状态所定义，这里会涉及到大量方块状态，而且相同的方块状态也不代表在不同方块上有相同的表现，在使用的时候请务必小心
- `blockEigenvariants.json` 储存了方块的固定变体，这些方块会常态性的使用特定的材质变体并不依赖方块状态，下面是其中一个例子
  ```json
  {
    "wooden_door": 0,
    "spruce_door": 1,
    "birch_door": 2,
    "jungle_door": 3,
    "acacia_door": 4,
    "dark_oak_door": 5,
    "iron_door": 6
  }
  ```
  所有门都连接到 `terrain_texture.json` 中的同一个材质，所以需要使用参数（eigenvariants）来指定使用的材质类型。
## 其他数据文件 Other data files (此处下文可能有多处翻译不正确，有能力建议直接看英文版)
除了方块模型文件，还有两个json文件在 `data` 文件夹里:
- `textureAtlasMappings.json` 包含针对特定块的各种补丁和映射，其中许多是由于 ~~Bugrock~~ 基岩版本身造成的。然而，这里面还有一些更重要的数据，比如 `blocks_to_use_carried_textures` 数组，它列出了应该使用 `blocks.json` 中携带的纹理的方块。
如果使用 VSCode 之类的编辑器，建议将鼠标悬停在每个属性上;工具提示将更详细地解释什么是做什么的。
- `materialListMappings.json` 包含材质列表中使用的数据，例如在 `block_to_item_mappings` 中将块名称转换为物品名称，或者在 `item_count_multipliers` 中指定是否应将特定方块的数目相乘。同样，强烈建议使用 VSCode 或类似编辑器来查看每个属性的解释。

## 使用JavaScript Working with JavaScript
有时 JSON 可能容纳不下新方块，又或者是你想改变HoloPrint其他方面，例如动画和游戏内控件, 你有可能需要使用JavaScript。
### 项目流程 Code overview
``` mermaid
flowchart LR
id1(Block palette)
-- BlockGeoMaker.js
--> id2(
  Block geometry
  Texture references
)
-- TextureAtlas.js
--> id3(
  Load textures
  Stitch texture atlas
  Link texture references to UV
)
-- HoloPrint.js
--> id4(
  Make geometry
  Make other pack files
)
--> id5(Completed pack)
```
结构文件包含一个方块调色板，每个方块位置都有一个与特定调色板条目相对应的索引。`BlockGeoMaker.js` 为方块调色板中的每个方块制作几何图形，并将它们放入“骨骼模板调色板”中，但由于纹理尚未加载，它将几何图形中的每个面链接到一个“纹理引用”，其中包含有关所需特定纹理的所有信息。
然后，`TextureAtlas.js` 获取这些纹理引用，并使用原版资源包中的 `blocks.json` 和 `textures/terrain_texture.json` 来查找所需纹理的路径。加载所有图像后，它会将它们打包成一个单独的图像，并创建一个列表，将每个纹理引用与图像中的某个位置相关联。
然后，`HoloPrint.js` 获取骨骼模板调色板并放入每个面的纹理坐标。然后，它使用结构文件中的索引来复制这些模板，并将它们放在几何文件中的正确位置。它还会生成其他文件（例如动画），并将所有内容合并到最终的资源包中。
### 游戏内控件 In-game controls
盔甲架的游戏内代码是 `entityScripts.molang.js`，并且是用类似 JavaScript 的语法编写的，该语法将在创建包时被转译为 Molang。Molang 是资源包中实体可用的原始脚本语言，可以从 [Microsoft官方文档](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction?view=minecraft-bedrock-stable) 中了解。注意，转译器并不能支持 Molang 的所有语法功能，因此请始终打开游戏内内容日志以发现报错。
### 开发指导 Code guidelines
- 确保代码格式和样式遵循其他所有内容一致的格式
- 所有代码均应使用美式英语;其他英语方言可用于评论、提交消息等。
- 在代码的模糊区域周围添加注释。
- 对数据使用 snake_case（例如 Minecraft JSON，此项目的 JSON），对其他所有内容使用 camelCase。
- 控制台输出同步给用户。每个控制台函数都应该在不同的情况中使用：
  - `console.log()` 为了测试的Debug日志。来自此的日志将不会显示给用户。
  - `console.debug()`用于 HoloPrint 处理边缘情况（例如加载 TGA 纹理）和我们的硬编码补丁（类中的私有静态字段）。这是为了帮助调试，因此如果它执行异常作，我们也不会感到惊讶。默认情况下，这对用户是隐藏的。
  - “console.info（）”用于 HoloPrint 当前正在执行的作的状态。例如，完成纹理图集的制作、几何体的制作等。这应该只围绕流程的较大步骤，并且是向用户输出的主要类型。
  - `console.warn()` 不太重要的错误警告，例如没找到文件或者是找到多个文件。一般情况下，我们从 Minecraft 的数据中获得的不一致而才使用的（例如，blocks.json的纹理键不在terrain_texture.json中，序列化键不存在），尽管它只能对用户进行低烈度的警报。所有警告之后都应该尽可能地处理所有程序，并说明他们的默认内容。
  - `console.error()` 程序或者数据产生错误时使用, 包括未定义几何形状的方块、错误格式化方块状态条件以及网各错误。他们应该尽可能妥善处理所有问题，但这些问题比警告更为严重。 `throw new Error();` 尽量不要使用，会直接结束程序进程.
- `for(...of ...)` 循环应该仅用于没有 `.forEach()` 方法的可迭代对象，或者在所有事情都必须按顺序发生的异步函数中使用。请尽量使用`.forEach()` 。