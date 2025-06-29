# 材質包設定
HoloPrint提供一系列不同的選項，助你客製化你的材質包。

## 設定 Settings
### 幽靈方塊比例 Ghost block scale
控制投影中幽靈方塊的大小，100%代表與正常方塊大小相同，但容易導致渲染時的閃爍。

### 材質 Textures
#### 覆蓋著色 Overlay tint
若你想要在投影上加上一層著色，你可以修改著色顏色和能見度後在[遊戲內開啟](/hologram-controls#覆蓋色調-Toggle-overlay-tint)

#### 邊框 Outline
幽靈方塊的邊框厚度、顏色與能見度都是可客製化的內容。

### 遊戲內控制 In-game controls
[控制投影](/hologram-controls)的物品可以修改，並且可以讓多個物品設為同一功能，也可以使用[Item tags](https://minecraft.wiki/w/Item_tag_(Bedrock_Edition))作控制之用。

### Features
#### 生成動畫 Spawn animation
開啟或關閉放下盔甲架或開始渲染投影時的動畫，大型投影的動畫可以導致遊戲卡頓。
#### Player controls
Enables/Disables [controlling the hologram](/hologram-controls) by attacking with specific items.
#### Material list
Enables/Disables the in-game [material list](/hologram-controls#material-list), accessible by pressing the tab key or the book icon.
#### Retexture control items
Enables/Disables icons overlayed on the hologram control items representing how they control the hologram.  
![Retextured control items](assets/retexturedControlItems.png)
#### Rename control items
Enables/Disables the labels displayed underneath the names of hologram control items.  
![Renamed control items](assets/renamedControlItems.png)

### 忽略方塊 Ignored blocks
輸入在投影之中需要被忽略的方塊ID，並用空格隔開

### 進階控制 Advanced
#### Initial offset
Controls the initial offset of the hologram from the armour stand, in X/Y/Z coordinates. Useful with large structures.
#### 備份欄數量 Backup slot count
控制儲存投影設置[儲存投影設置](/hologram-controls#儲存設定-Save-hologram-settings)的儲存欄位數量
#### Control item texture scale
If you play with a non-power-of-two resource pack (this means anything that isn't 8x, 16x, 32x, 64x, etc.), the [retextured control items](#retexture-control-items) can cause the original item textures to be distorted. If this happens, try changing the control item texture scale to 2, 4, etc. It will cause a slightly higher pack size.
#### 透明度模式 Opacity mode
若設定為 `In-game controls` 則開啟遊戲內[調整透明度](/hologram-controls#change-transparency)的功能
若設定為 `Single option` 則無法在遊戲內調整透明度，並能減少材質包大小和有可能減低卡頓

## 詮釋資料 Metadata
### 材質包名稱 Pack name
啊很簡單啊，就字面意思。
### 材質包圖標 Pack icon
材質包的大圖，就這麽簡單。
### 結構作者 Structure author
這個結構是誰做的。看清楚，是結構哦，不是材質包哦。
### 描述 Description
想寫啥寫啥。
### 壓縮程度 Compression level
壓縮文件的[壓縮程度](https://en.wikipedia.org/wiki/Deflate)，可設定為0-9。數字0代表未被壓縮，數字越高代表壓縮程度越高，同時處理時間越長材質包越大。
## 材質包 Resource packs
允許上載一個本地的材質包，並變更裏面投影的材質。
### 清理材質包緩存 Clear resource pack cache
清理緩存可以加速存取材質包中的檔案，如果你在加載投影材質包後修改了投影的材質，你應該先清理緩存再重新加載。
