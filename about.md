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
HoloPrint 是一个将MC结构（.mcstructure）文件转化成投影材质包的网站。此项目以 [Structura](https://github.com/RavinMaddHatter/Structura) 为基础并且旨在以材质包方式为基岩版玩家提供类Java版中 [Litematica](https://github.com/maruohon/litematica)与[Schematica](https://github.com/Lunatrius/Schematica) 的体验。

Holoprint 已针对最新版本的MCBE进行优化，但部分功能依然能在旧版本上使用。

HoloPrint 主要构建语言为 JavaScript 与 JSON 。

<VPTeamMembers size="small" :members="contributors"/>

## 启发自Structura
过往由 [RavinMaddHatter](https://github.com/RavinMaddHatter) 所开发的 [Structura](https://github.com/RavinMaddHatter/Structura) 是第一个在基岩版上塑造类 Litematica 的方案。而由于其编程语言为Python，手机玩家有时候并不能够在自己的设备上运行，并且需要依靠如 Discord 机器人的代理服务才能顺利使用。再者，Mojang 在 Structura 第一个版本释出后进行了多项技术性更新，比如说改变方块的ID和方块状态，这代表了新版本中中的部分方块未必能正确的显示，同时因為 Structura 是需要依赖硬编码修复的，使得其更新难度更大。

通过网站服务， HoloPrint 可以很好的解决上述的问题，并允许所有拥有浏览器的人都能够简单的使用，同时由于 HoloPrint 是纯数据驱动和更依靠基岩版中生成的数据，代表了游戏中的更新能够更快的响应在 HoloPrint之中。另外， HoloPrint也使用了 [pmmp/BedrockBlockUpgradeSchema](https://github.com/pmmp/BedrockBlockUpgradeSchema) 以自动化更新旧版本中输出的结构到最新的游戏版本，因此只需要维护单一版本便足矣。

HoloPrint也很好的运用了材质包中的不同功能，并允许更方便且客制化地使用，你可以通过访问 [Hologram controls](/hologram-controls) 页面以查询更多。

HoloPrint 中的大部分内容都是从头开始开发的，只有一个文件（[`data/blockShapes.json`](https://github.com/SuperLlama88888/holoprint/blob/main/data/blockShapes.json)）是从 Structura 继承，并且经过大量的修改。