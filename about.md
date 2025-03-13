<script setup>
	import { VPTeamMembers } from "vitepress/theme";
	const contributors = [
		{
			avatar: "https://avatars.githubusercontent.com/u/116475184?v=4",
			name: "SuperLlama88888",
			title: "Developer",
			links: [
				{
					icon: "github",
					link: "https://github.com/SuperLlama88888"
				},
				{
					icon: "bluesky",
					link: "https://superllama88888.bsky.social"
				}
			]
		},
		{
			avatar: "https://avatars.githubusercontent.com/u/125613427?v=4",
			name: "guobao2333",
			title: "Translator",
			links: [
				{
					icon: "github",
					link: "https://github.com/guobao2333"
				},
				{
					icon: "bilibili",
					link: "https://space.bilibili.com/1975312515"
				}
			]
		}
	];
</script>

# About HoloPrint
HoloPrint 是一個能夠將MCBE結構文件（.mcstructure）文件轉換成投影材質包的網站。此項目以 [Structura](https://github.com/RavinMaddHatter/Structura) 為基礎並且旨在以材質包方式為基岩版玩家提供類Java版中 [Litematica](https://github.com/maruohon/litematica)與[Schematica](https://github.com/Lunatrius/Schematica) 的體驗。

Holoprint 已針對最新版本的MCBE作優化，但部分功能依然能在舊版本上使用。

HoloPrint 主要以 JavaScript 與 JSON 編碼。

<VPTeamMembers size="small" :members="contributors"/>

## Structura 與緣起
過往由 [RavinMaddHatter](https://github.com/RavinMaddHatter) 所開發的 [Structura](https://github.com/RavinMaddHatter/Structura) 是第一個在基岩版上塑造類 Litematica 的方案。而由於其編碼語言為Python，手機用家有時候並不能夠在自己的裝置上運行，並且需要依靠如 Discord 機器人的代理服務才能順利使用。再者，Mojang 在 Structura 第一個版本釋出後進行了多項技術性更新，比如說改變方塊的ID和方塊狀態，這代表了新版本中中的部分方塊未必能正確的顯示，同時因為 Structura 是需要依賴硬編碼修復的，使得其更新難度更大。

通過網站服務， HoloPrint 可以很好的解決上述的問題，並允許所有擁有瀏覽器的人都能夠簡單的使用，同時由於 HoloPrint 是純數據驅動和更依靠基岩版中生成的數據，代表了遊戲中的更新能夠更快的響應在 HoloPrint之中。另外， HoloPrint也使用了 [pmmp/BedrockBlockUpgradeSchema](https://github.com/pmmp/BedrockBlockUpgradeSchema) 以自動化更新舊版本中輸出的結構到最新的遊戲版本，因此只需要維護單一版本便足矣。

HoloPrint也很好的運用了材質包中的不同功能，並允許更方便且客製化的使用，你可以通過訪問 [Hologram controls](/hologram-controls) 頁面以查詢更多。

HoloPrint 中的大部分內容都是從頭開始開發的，只有一個文件（[`data/blockShapes.json`](https://github.com/SuperLlama88888/holoprint/blob/main/data/blockShapes.json)）是從 Structura 繼承，並且經過大量的修改。
