# Adding translations
If you're interested in translating HoloPrint into other languages, your contributions would be greatly appreciated! You will need to be able to modify files, so if you don't have any code editor already on your computer, a quick way to start is pressing `.` on the [GitHub repository](https:///github.com/SuperLlama88888/holoprint). Here are the steps you can follow to add a new language.

> [!WARNING]
> Translations auto-generated by online translation services such as Google Translate or ChatGPT are forbidden.

## 1. Website translations
Start by copying `translations/en.lang` and name it `LANGUAGE CODE.lang`. Next, add `LANGUAGE CODE` and the language name to `translations/languages.json`. The language code is only used internally for the pack generation UI and can be anything you want. The language name is how it will appear on the website language picker. You can then translate everything in the new JSON file.
A few basic syntax extensions similar to Markdown are available:
- Using `` `...` `` will show something in a monospace font
- Using `[Link text](https://url.com)` will display a link to another webpage
## 2. In-game translations
Start by adding the [MCBE language code](https://wiki.bedrock.dev/concepts/text-and-translations.html#vanilla-languages) for the target language to `packTemplate/texts/languages.json`. Next, copy `packTemplate/texts/en_US.lang` and rename it to match the desired language. Text enclosed in `{}` like `{PACK_NAME}` are placeholders for relevant pack info which will be substituted in later.
It can be quite confusing, so I recommend playing around with it a bit and seeing how it appears in-game. If you have any questions or issues, feel free to [create a discussion](https://github.com/SuperLlama88888/holoprint/discussions/new?category=q-a).
## 3. Less important: Structure Block Button Adder pack translations
In this repository, there's a small resource pack which forces all structure block buttons to show, regardless of device. This is needed for Android players as the export button is hidden by default. Translations for the pack name and description would also be appreciated.

Follow the same steps as translating [the main in-game translations](#_2-in-game-translations), except that everything belongs in the `assets/structureBlockButtonAdderPack/texts` folder.