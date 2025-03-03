# Contributing
HoloPrint is open-source and open to contributions, and can be found on GitHub at [SuperLlama88888/holoprint](https://github.com/SuperLlama88888/holoprint). HoloPrint is nearly fully data-driven, meaning you don't need to know how to code to add support for new blocks.
## Code editor
It is highly recommended to use VSCode, or a code editor which can show hints based on JSON schemas and JSDoc comments. To use VSCode online, you can press `.` on the repository's homepage.
## Adding new blocks
All block models are stored in JSON. This data is available in the `data` folder. There are four main files:
- `blockShapes.json` controls which blocks use which block shapes. All blocks with the same block shape will use the same model, and mostly appear the same.
- `blockShapeGeos.json` contains the actual models for each block shape. Coordinates are in pixels (1/16 of a block) with (0, 0, 0) being the front-bottom-left corner of where the block will be. It is recommended to use the [Java Edition block models](https://mcasset.cloud/1.21.3/assets/minecraft/models/block) as a reference.
- `blockStateDefinitions.json` contains definitions for block states that control texture variants and rotations.
  - Texture variants are from `textures/terrain_texture.json` in the [vanilla resource pack](https://github.com/Mojang/bedrock-samples/tree/preview/resource_pack), in which multiple images are listed for a texture. Some block states determine which texture variant is used, and they are in this file. However, some blocks have a fixed texture variant, in which case you'll need to declare the eigenvariant in `blockEigenvariants.json`.
  - Whole block rotations are also defined by block states. There are many block states that control rotations, and some blocks that use the same block state are rotated differently, so be careful when editing these.
- `blockEigenvariants.json` contains fixed texture variants for blocks. These blocks always use a specific texture variant, regardless of block states, and are put in here. For example:
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
  All doors link to the same texture in `terrain_texture.json`, so eigenvariants have to be used to specify that oak (wooden) doors use the first texture, spruce doors use the second, etc.
## Other data files
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