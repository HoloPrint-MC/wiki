# 材质包设定
HoloPrint提供一系列不同的选项，助你客製化你的材质包。

## 设定 Settings
### 幽灵方块大小 Ghost block scale
控制投影中幽灵方块的大小，100%代表与正常方块大小相同，但容易导致渲染时的闪烁。

### 材质 Textures
#### 覆盖着色 Overlay tint
若你想要在投影上加上一层著色，你可以修改着色颜色和能见度后在[游戏内开启](/hologram-controls#覆盖色调-toggle-overlay-tint)

#### 边框 Outline
幽灵方块的边框厚度、颜色与能见度都是可客制化的内容。

### 游戏内控制 In-game controls
[控制投影](/hologram-controls)的物品可以修改，并且可以让多个物品设为同一功能，也可以使用[Item tags](https://minecraft.wiki/w/Item_tag_(Bedrock_Edition))作控制之用。

### 生成动画 Spawn animation
开启或关闭放下盔甲架或开始渲染投影时的动画，大型投影的动画可以导致游戏卡顿。

### 忽略方块 Ignored blocks
输入在投影之中需要被忽略的方块ID，并用空格隔开

### 进阶控制 Advanced
#### 备份栏数量 Backup slot count
控制储存投影设置[储存投影设置](/hologram-controls#储存设定-save-hologram-settings)的储存栏位数量

#### 透明度模式 Opacity mode
若设定为 `In-game controls` 则开启游戏内[调整透明度](/hologram-controls#更改透明度-change-transparency)的功能
若设定为 `Single option` 则无法在游戏内调整透明度，并能减少材质包大小和有可能减低卡顿

## 诠释资料 Metadata
### 材质包名称 Pack name
啊很简单啊，就字面意思。
### 材质包图标 Pack icon
材质包的大图，就这么简单。
### 结构作者 Structure author
这个结构是谁做的。看清楚，是结构哦，不是材质包哦。
### 描述 Description
想写啥写啥。
### 压缩程度 Compression level
压缩文件的[压缩程度](https://en.wikipedia.org/wiki/Deflate)，可设定為0-9。数字0代表未被压缩，数字越高代表压缩程度越高，同时处理时间越长材质包越大。
## 材质包 Resource packs
允许上载一个本地的材质包，并变更里面投影的材质。
### 清理材质包缓存 Clear resource pack cache
清理缓存可以加速存取材质包中的档案，如果你在加载投影材质包后修改了投影的材质，你应该先清理缓存再重新加载。