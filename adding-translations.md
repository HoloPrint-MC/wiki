# 增加翻譯版本
若你對翻譯 HoloPrint感興趣，你將需要具備編輯文件的能力，若你沒有任何編程軟件，你可以選擇按下 [GitHub repository](https:///github.com/SuperLlama88888/holoprint) 頁面中的 `.`。下面是一些你可以參考的步驟，這裏就先感謝您的貢獻。


> [!警告]
> 嚴格禁止使用自動生成的翻譯軟件

## 1. 網站翻譯 Website translations
首先。複製 `translations/en.lang` 並重新命名為 `LANGUAGE CODE.lang`，接著在 `translations/languages.json` 文檔之中增加 `LANGUAGE CODE` 與語言名稱（language name）。此語言代碼（language code）只會用於材質包生成界面，並且可以命名為任何你喜歡的名稱。而語言名稱（language name）會被顯示在網站上的語言選項中。之後你就可以著手將所有東西翻譯到一個新的 JSON 文件中。
以下是一些你可以使用的類 Markdown 格式：
- 使用 `` `...` `` 將文字變成等寬字體
- 使用 `[Link text](https://url.com)` 將文字變成超鏈接

## 2. 遊戲內翻譯 In-game translations
首先。在 `packTemplate/texts/languages.json` 中新增代表目標語言的 [MCBE language code](https://wiki.bedrock.dev/concepts/text-and-translations.html#vanilla-languages)。然後，複製 `packTemplate/texts/en_US.lang` 並且重新命名為你的目標語言。以 `{}` 括柱的文字如 `{PACK_NAME}` 是相關條件的占位符號，並且會在稍後被替代。

我建議先在遊戲內嘗試相關內容看看其在遊戲內的功能和顯示內容再進行翻譯，若你有任何問題，也可以在[討論](https://github.com/SuperLlama88888/holoprint/discussions/new?category=q-a)之中提出哦！

## 3. 結構方塊輸出 Less important: Structure Block Button Adder pack translations
此項目也包含了一個強制在所有裝置上顯示結構方塊按鈕的材質包，你有興趣的話也可以翻譯此材質包。
 
你可以按照[遊戲內翻譯](#2-in-game-translations)相同的流程來翻譯，只是所有文檔都被存儲在 `assets/structureBlockButtonAdderPack/texts` 文件夾中。
