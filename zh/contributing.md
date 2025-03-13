# 貢獻此項目
HoloPrint 是一個開源且歡迎貢獻的項目，你可以在 [SuperLlama88888/holoprint](https://github.com/SuperLlama88888/holoprint) 中找到源碼。並且由於 HoloPrint 是近乎數據驅動的，代表你並不需要曉得變成也可以增加新方塊的支持。

## 代碼編輯 Code editor
強烈建議使用VSCode，或者任何能夠顯示基於 JSON schmas 和 JSDoc 的提示。按下項目主頁的 `.` 可以使用線上版 VSCode。

## 新增方塊 Adding new blocks
所有方塊模型都以 JSON 文件儲存，並且可以在 `data` 文件夾中找到相應的數據，這裏一共分成四種文件類型：
- `blockShapes.json` 控制方塊的形狀，所有相同形狀的方塊會使用同一個模型，並且大部分時候內容相同

- `blockShapeGeos.json` 儲存了每個方塊模型的實際形態，而座標代表每個像素的位置，並以（0,0,0）代表最前面、最下方、最左邊的像素。這邊建議查詢 [Java 版方塊模型](https://mcasset.cloud/1.21.3/assets/minecraft/models/block) 作參考

- `blockStateDefinitions.json` 儲存控制材質與旋轉的定義
  - 所有材質變體是來自於[原版材質包](https://github.com/Mojang/bedrock-samples/tree/preview/resource_pack)中的 `textures/terrain_texture.json` 文件，部分方塊單以方塊狀態就可以判斷其使用的材質，而部分方塊有固定的材質變體，這種情況則需要在 `blockEigenvariants.json` 之中宣告。
  - 全方塊旋轉也被方塊狀態所定義，這裏會涉及到大量方塊狀態，而且相同的方塊狀態也不代表在不同方塊上有相同的表現，在使用的時候請務必小心
  - `blockEigenvariants.json` 儲存了方塊的固定變體，這些方塊會常態性的使用特定的材質變體並不依賴方塊狀態，下面是其中一個例子
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
  所有門都連接到 `terrain_texture.json` 中的同一個材質，所以需要使用參數（eigenvariants）來指定使用的材質類型。

## Other data files （下面的我不翻譯了，我看不懂，你看不懂的話也建議你別碰）
In addition to the files for block models, there are two other JSON files in the `data` folder:
- `textureAtlasMappings.json` contains a variety of patches and mappings for specific blocks, many of which are caused by ~~Bugrock~~ Bedrock being Bedrock. However, there are some other more meaningful things in there, such as the `blocks_to_use_carried_textures` array, which lists blocks that should use their carried textures from `blocks.json`.  
  If using an editor like VSCode, it is recommended to hover over each property; the tooltips will explain in more detail what does what.
- `materialListMappings.json` has data used in material lists, such as converting block names to item names in `block_to_item_mappings` or specifying if item counts for specific blocks should be multiplied in `item_count_multipliers`. Again, VSCode or a similar editor is highly recommended to view explanations for each property.

## Working with JavaScript
In some cases where JSON isn't enough to add a new block, or if you want to change other aspects of HoloPrint like the animations or in-game controls, you'll probably have to work with JavaScript.
### Code overview
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
The structure file contains a block palette and each block position has an index corresponding to a certain palette entry. `BlockGeoMaker.js` makes the geometry for each block in the block palette, and puts them into a "bone template palette", but since textures haven't been loaded yet, it links each face in the geometry to a "texture reference" containing all the info about the certain texture needed.  
`TextureAtlas.js` then takes these texture references and uses `blocks.json` and `textures/terrain_texture.json` from the vanilla resource pack to find the path of the texture needed. After loading all images, it packs them into a singular image and makes a list which associates every texture reference with a position in the image.  
`HoloPrint.js` then takes the bone template palette and puts in the texture coordinates for every face. It then uses the indices from the structure file to copy these templates and put them in their correct positions in the geometry file. It also makes other files, such as the animations, and combines everything into the final resource pack.
### In-game controls
The in-game code for the armour stands is in `entityScripts.molang.js` and is written in a JavaScript-like syntax, which will be transpiled to Molang upon pack creation. Molang is the primitive scripting language available to entities within resource packs, and can be learnt from [the official Microsoft documentation](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction?view=minecraft-bedrock-stable). Note that not all syntax features of Molang are supported by the transpiler, so always have the in-game content log open to spot errors.
### Code guidelines
- Ensure code formatting and styling follows everything else.
- All code is to be in American English; other English dialects can be used in comments, commit messages etc.
- Add comments around ambiguous areas of code.
- Use snake_case for data (i.e. Minecraft JSON, our JSON) and camelCase for everything else.
- Console output is mirrored to the user. Each console function should be used in different contexts:
  - `console.log()` is purely for testing. Logs from this will not be shown to the user.
  - `console.debug()` is for when HoloPrint handles an edge case (e.g. loading a TGA texture) and our hardcoded patches (private static fields in classes). This is to help debugging so we are't surprised if it does something out of the ordinary. This is hidden to users by default.
  - `console.info()` is for status about what HoloPrint is currently doing. E.g. Finished making the texture atlas, making geometry, etc. This should only be around the larger steps of the process, and are the main type of output to users.
  - `console.warn()` is for non-critical warnings, such as not finding something in data, or having too much data. Generally, it is reserved for inconsistencies that we get from  Minecraft's data (e.g. texture key from blocks.json not being in terrain_texture.json, serialisation key not existing), although it can be used for general alerts to the user. All warnings should handle everything as best as they can and also say what they're defaulting to.
  - `console.error()` is for errors within our code or data, including block shapes not having any geometry defined, formatting a block state conditional incorrectly, as well as network errors. Again, they should handle everything as best as possible, but they are more critical than warnings. `throw new Error();` should never be used, as this will terminate the program flow.
- `for(... of ...)` loops should be used only for iterables that don't have the `.forEach()` method, or in async functions when everything must happen in order. Use `.forEach()` instead.
