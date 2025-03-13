# 增加翻译版本
若你对翻译 HoloPrint感兴趣，你将需要具备编辑文件的能力，若你没有任何编程软件，你可以选择按下 [GitHub repository](https:///github.com/SuperLlama88888/holoprint) 页面中的 `.`。下面是一些你可以参考的步骤，这里就先感谢您的贡献。


> [!警告]
> 严格禁止使用自动生成的翻译软件

## 1. 网站翻译 Website translations
首先。复制 `translations/en.lang` 并重新命名为 `LANGUAGE CODE.lang`，接着在 `translations/languages.json` 文档之中增加 `LANGUAGE CODE` 与语言名称（language name）。此语言代码（language code）只会用于材质包生成界面，并且可以命名為任何你喜欢的名称。而语言名称（language name）会被显示在网站上的语言选项中。之后你就可以著手将所有东西翻译到一个新的 JSON 文件中。
以下是一些你可以使用的类 Markdown 格式：
- 使用 `` `...` `` 将文字变成等宽字体
- 使用 `[Link text](https://url.com)` 将文字变成超链接

## 2. 游戏内翻译 In-game translations
首先。在 `packTemplate/texts/languages.json` 中新增代表目标语言的 [MCBE language code](https://wiki.bedrock.dev/concepts/text-and-translations.html#vanilla-languages)。然后，复制 `packTemplate/texts/en_US.lang` 并且重新命名为你的目标语言。以 `{}` 括柱的文字如 `{PACK_NAME}` 是相关条件的占位符号，并且会在稍后被替代。

我建议先在游戏内尝试相关内容看看其在游戏内的功能和显示内容再进行翻译，若你有任何问题，也可以在[讨论](https://github.com/SuperLlama88888/holoprint/discussions/new?category=q-a)之中提出哦！

## 3. 结构方块输出 Less important: Structure Block Button Adder pack translations
此项目也包含了一个强制在所有装置上显示结构方块按钮的材质包，你有兴趣的话也可以翻译此材质包。

你可以按照[游戏内翻译](#2-in-game-translations)相同的流程来翻译，只是所有文档都被存储在 `assets/structureBlockButtonAdderPack/texts` 文件夹中。