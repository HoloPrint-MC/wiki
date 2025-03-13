# 常見問題 FAQ
> [!提示]
> 若你找不到想要的解答，你可以在[討論](https://github.com/SuperLlama88888/holoprint/discussions/new?category=q-a)中提出

## HoloPrint的運作平台
你可以在電腦（Windows/ Linux/ Mac）與安卓裝置享受完整的 HoloPrint 功能。
HoloPrint fully works on PC (Windows/Linux/Mac) and Android.
iOS裝置上的結構輸出功能被蘋果禁止，但你依然可以通過傳送結構文件（.mcstructure）到你的裝置上來製作投影材質包。
HoloPrint 未在主機平台上進行任何測試。

## HoloPrint的運作版本
因為其使用了較新的的材質包功能，已生成的投影材質包在最新版本中效果自然最好，最舊可使用版本為1.18，但並不保證所有功能都能如常運作。
你可以使用任意版本中導出的結構文件（.mcstructure），即便老版本中的方塊編號與新版本有機會不一致，HoloPrint也能自動適配。
HoloPrint 在教育版也同樣生效。

## 使用HoloPrint是否會影響到成就？
HoloPrint只是一個材質包，並不會影響到遊戲成就。

## 這結構輸出按鈕跑哪了？
使用此[材質包](https://github.com/SuperLlama88888/holoprint/raw/refs/heads/main/assets/structureBlockButtonAdderPack.mcpack)以顯示所有隱藏的結構方塊按鈕（僅安卓平台）。

## 這盔甲架不顯示東西誒！
首先，你可以嘗試將所有其他資源包關閉，並保證投影材質包是唯一已啟用的資源包。
如果此問題依然持續，這就必然是一個bug了，請到[報告問題](https://github.com/SuperLlama88888/holoprint/issues/new)頁面回報讓我們可以快速解決這個問題。

## 遊戲內控制沒反應啊！
很大的機會是麻將的鍋，主要是因為一些「可附著模型」被渲染時候導致的，這些包括客製化的3D模型包括盔甲架、鞘翅、三叉戟、盾牌和弓等等。
你可以通過禁用左上角的紙娃娃，和避免在進行遊戲內控制時到處亂看以避免這個問題。

## 遊戲內保存投影狀態壞了！
投影狀態保存只會在保存粒子出現的同時進行保存，即便他們會在你遠離的時候自動保存，卻不能在進入傳送門或者離開遊戲時候保存，因此請保證你在進行這些動作前手動[保存投影狀態](/hologram-controls#save-hologram-settings)

在默認情況下，每個投影有十個備份保存格，且可以通過在 _Settings > Advanced > Backup slot count_ 中修改設置。

影響遊戲內控制的問題同樣也會影響遊戲內保存投影狀態的功能，詳情可以查看[遊戲內保存投影狀態壞了！](#遊戲內保存投影狀態壞了！)

## 投影大小有限制嗎
投影材質包本身並無大小限制，但遊戲內輸出結構有大小限制，而且渲染盔甲架也有距離限制，你可以通過將[多個結構文件合併成單一投影](https://holoprint-mc.github.io/wiki/hologram-controls#change-structure)

## 我要如何改變遊戲內控制？
遊戲內控制可以通過網站內的 _Settings > In-game controls_ 設定客制。

## 嫩卡，我咋玩啊！
首先，你可以檢查一下你周圍是否有隱藏的盔甲架，你可以通過[空手打盔甲架關閉渲染](/punch-to-activate)以減輕渲染壓力。可惜的是，現在並沒有任何高效的方法來渲染幽靈方塊，如果實在太卡，你可以考慮將大型的結構分成多個小型結構以減輕渲染壓力。

## 控制用物品可以重新命名嗎？
當然可以啦！重新命名物品並不會影響任何遊戲內控制。

## HoloPrint是否會保存我的檔案？
不會哦，所有處理都會在你的瀏覽器內完成，代表並無任何檔案會離開你的電腦。
為了分析需要，SHA-256的首4位元會被上載到數據庫，這是一個純數學生成數字並且無法通過此數字追蹤到檔案的來源。每一個相同的文件會被賦予同一個獨特的編號，這允許HoloPrint知道獨特結構文件的數量，同時保持使用者和檔案的匿名性。
