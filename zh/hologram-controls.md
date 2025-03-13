# 投影控制
手持不同物品使用攻擊可以進行投影控制，而由於基岩版的獨特性，其他玩家的行動也會影響投影的渲染狀態

> [!WARNING]
> 玩家行為控制並不一定能生效，但[盔甲架互動](#直接控制-armour-stand-controls)是最可靠的方式
> 關閉紙娃娃可以提高玩家行為控制的可靠性

特別鳴謝 **kizoku246** 提供了下面照片裏的房子

## 啟用渲染 Toggle rendering
默認：紅磚（Brick）

此功能可以顯示或隱藏投影，大部分的投影控制在隱藏投影時無法生效。
![Toggling rendering](/assets/togglingRendering.gif)

## 更改透明度 Change transparency
默認：紫水晶（蹲下以減少，站著以增加）

此功能可以每次調整10%的透明度，而調整範圍為40%到100%
![Changing transparency](/assets/changingTransparency.gif)

## 調整層數 Change layer
默認：羽毛（蹲下以減低，站著以增高），或直接調整盔甲架的姿勢

此功能會顯示單一層數並且隱藏其他層數，對於生存逐層復刻建築非常有用。
![Changing layer](/assets/changingLayer.gif)

## 移動投影 Move hologram
默認：木棍
此功能能夠在不移動盔甲架的情況下移動投影。

![Moving hologram](/assets/movingHologram.gif)

## 旋轉投影 Rotate hologram
默認：銅錠
此功能可以將投影以順時針旋轉90°，而蹲下則可以逆時針旋轉90°。

![Rotating hologram](/assets/rotatingHologram.gif)

## 方塊檢查 Block validation
默認：鐵錠

此功能可以檢查投影中的所有方塊是否被正確放置，同時並不會檢查空氣方塊和方塊狀態，若投影只展示單一層數，則只會檢查該層數的方塊。
![Validating structure](/assets/validatingStructure.gif)

## 方塊列表 Material list
默認：Tab按鈕（鍵盤），書按鈕（觸屏）

此功能可以顯示一個投影中方塊的完整列表和其數量，若投影由多個結構組成，方塊列表則會將所有結構中的方塊統一計算，另外也請注意物品圖標有可能顯示錯誤的方塊。
![Material list](/assets/materialList.gif)

## 覆蓋色調 Toggle overlay tint
默認：白色染料

此功能能夠調整投影的整體色調以分辨真實方塊與投影中的方塊，而顏色和能見度可以在 _Settings > Textures_ 中修改。
![Toggle overlay tint](/assets/togglingTint.gif)

## 層數模式 Change layer mode
默認：打火石

此功能可以開啟或關閉顯示當前顯示層數下方的所有層數。
![Change layer mode](/assets/changingLayerMode.gif)

## 換個結構 Change structure
默認：箭矢，或攻擊空手的盔甲架

此功能可以在多個結構之間切換，站著可以換成下一個，蹲下則是上一個。
![Changing structure](/assets/changingStructure.gif)

## 儲存設定 Save hologram settings
默認：紙

此功能讓所有盔甲架在三十秒內儲存他們當前的顯示狀態，此功能會在玩家距離盔甲架55格以外的距離自動啟動。若盔甲架在儲存時被卸載則會在重新加載的時候載入上次保存的設定（包括切換維度、離開世界或走的太遠）。備份數量有限並默認為10，可以通過 _Settings > Advanced > Backup slot count_ 設置。
![Saving backup](/assets/savingBackup.gif)

## 直接控制 Armour stand controls
默認：給予物品或攻擊

玩家控制在某些情況之下不太穩定，因此所有玩家控制都可以通過給予盔甲架該物品，然後攻擊來實現相應的功能。
![Armour stand controls](/assets/armourStandControls.gif)

## 關閉控制 Disable player controls
默認：骨頭

通過給予盔甲架骨頭可以關閉控制投影的功能，讓你能夠單獨調整單一盔甲架而不會影響到其他投影結構
![Disabling player controls](/assets/disablingPlayerControls.gif)