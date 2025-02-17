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
HoloPrint is a web app that converts MCBE structure files into resource packs showing holograms of builds. It builds off the work of [Structura](https://github.com/RavinMaddHatter/Structura), a similar project. Both Structura and HoloPrint aim to recreate the experience of Java Edition mods like [Litematica](https://github.com/maruohon/litematica) and [Schematica](https://github.com/Lunatrius/Schematica) for Bedrock Edition users through resource packs.

HoloPrint is optimised for playing on the latest version of Minecraft, but some features will still work in older versions.

HoloPrint is primarily coded in JavaScript and JSON.

<VPTeamMembers size="small" :members="contributors"/>

## Inspiration from Structura
[Structura](https://github.com/RavinMaddHatter/Structura), made by [RavinMaddHatter](https://github.com/RavinMaddHatter), is an older project that was the first to recreate the Litematica experience for Bedrock Edition. However, since it is written in Python, it's harder to access for smartphone players and cannot be run on all devices, requiring wrapper services such as a Discord bot to upload structure files to. Furthermore, Mojang has made many technical changes since Structura's first release such as changing block IDs and block states, meaning not all blocks from modern versions will work correctly. This, coupled with Structura not being data-driven and requiring hardcoded patches, makes it hard for Structura to keep up with modern Minecraft versions.

HoloPrint solves these issues by being written as a web app, meaning anybody with a modern internet browser can use it. HoloPrint is almost fully data-driven and more reliant on data generated from Bedrock Edition, meaning updates to Minecraft can be quickly implemented into HoloPrint.

Additionally, HoloPrint utilises more features of resource packs, allowing for a more enjoyable and customisable experience. You can learn about in-game features in the [Hologram controls](/hologram-controls) page.

Most of HoloPrint was written from scratch; only one file ([`data/blockShapes.json`](https://github.com/SuperLlama88888/holoprint/blob/main/data/blockShapes.json)) was taken from Structura, and it has been heavily modified.