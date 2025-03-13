# 投影控制
手持不同物品使用攻击可以进行投影控制，而由于基岩版的独特性，其他玩家的行动也会影响投影的渲染状态

> [!警告]
> 玩家行為控制并不一定能生效，但[盔甲架互动](#armour-stand-controls)是最可靠的方式
> 关闭纸娃娃可以提高玩家行为控制的可靠性

特别鸣谢 **kizoku246** 提供了下面照片里的房子

## 启用渲染 Toggle rendering
默认：红砖（Brick）

此功能可以显示或隐藏投影，大部分的投影控制在隐藏投影时无法生效。
![Toggling rendering](/assets/togglingRendering.gif)

## 更改透明度 Change transparency
默认：紫水晶（蹲下以减少，站著以增加）

此功能可以每次调整10%的透明度，而调整范围為40%到100%
![Changing transparency](/assets/changingTransparency.gif)

## 调整层数 Change layer
默认：羽毛（蹲下以减低，站著以增高），或直接调整盔甲架的姿势

此功能会显示单一层数并且隐藏其他层数，对于生存逐层复刻建筑非常有用。
![Changing layer](/assets/changingLayer.gif)

## 移动投影 Move hologram
默认：木棍
此功能能够在不移动盔甲架的情况下移动投影。

![Moving hologram](/assets/movingHologram.gif)

## 旋转投影 Rotate hologram
默认：铜锭
此功能可以将投影以顺时针旋转90°，而蹲下则可以逆时针旋转90°。

![Rotating hologram](/assets/rotatingHologram.gif)

## 方块检查 Block validation
默认：铁锭

此功能可以检查投影中的所有方块是否被正确放置，同时并不会检查空气方块和方块状态，若投影只展示单一层数，则只会检查该层数的方块。
![Validating structure](/assets/validatingStructure.gif)

## 方块列表 Material list
默认：Tab按钮（键盘），书按钮（触屏）

此功能可以显示一个投影中方块的完整列表和其数量，若投影由多个结构组成，方块列表则会将所有结构中的方块统一计算，另外也请注意物品图标有可能显示错误的方块。
![Material list](/assets/materialList.gif)

## 覆盖色调 Toggle overlay tint
默认：白色染料

此功能能够调整投影的整体色调以分辨真实方块与投影中的方块，而颜色和能见度可以在 _Settings > Textures_ 中修改。
![Toggle overlay tint](/assets/togglingTint.gif)

## 层数模式 Change layer mode
默认：打火石

此功能可以𫔭啟或关闭显示当前显示层数下方的所有层数。
![Change layer mode](/assets/changingLayerMode.gif)

## 换个结构 Change structure
默认：箭矢，或攻击空手的盔甲架

此功能可以在多个结构之间切换，站著可以换成下一个，蹲下则是上一个。
![Changing structure](/assets/changingStructure.gif)

## 储存设定 Save hologram settings
默认：纸

此功能让所有盔甲架在三十秒内储存他们当前的显示状态，此功能会在玩家距离盔甲架55格以外的距离自动啟动。若盔甲架在储存时被卸载则会在重新加载的时候载入上次保存的设定（包括切换维度、离𫔭世界或走的太远）。备份数量有限并默认為10，可以通过 _Settings > Advanced > Backup slot count_ 设置。
![Saving backup](/assets/savingBackup.gif)

## 直接控制 Armour stand controls
默认：给予物品或攻击

玩家控制在某些情况之下不太稳定，因此所有玩家控制都可以通过给予盔甲架该物品，然后攻击来实现相应的功能。
![Armour stand controls](/assets/armourStandControls.gif)

## 关闭控制 Disable player controls
默认：骨头

通过给予盔甲架骨头可以关闭控制投影的功能，让你能够单独调整单一盔甲架而不会影响到其他投影结构
![Disabling player controls](/assets/disablingPlayerControls.gif)
