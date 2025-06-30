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
			avatar: "https://r2.mcpedl.com/users/1106565/4a81689a1d3249158f82793b9ded89b9.png",
			name: "Nextr",
			title: "Pixel artist",
			links: [
				{
					icon: {
						"svg": `<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 114 114" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0)" d="m0 0h114v114h-114v-114z" fill="#696969"/><path transform="translate(23,27)" d="m0 0c28.355 0 28.355 0 33.562 3.9375 2.1894 3.1414 2.5659 5.7292 2.5986 9.4546 0.0096076 0.88457 0.019215 1.7691 0.029114 2.6805 0.0042499 0.95315 0.0084998 1.9063 0.012878 2.8883 0.0057001 0.98272 0.0114 1.9654 0.017273 2.9779 0.0094472 2.0796 0.015983 4.1592 0.019836 6.2389 0.0097068 3.178 0.040733 6.3554 0.072266 9.5332 0.0065301 2.0208 0.011781 4.0417 0.015625 6.0625 0.012347 0.9491 0.024694 1.8982 0.037415 2.8761-0.029965 8.8951-0.029965 8.8951-3.3655 12.35-7 2-7 2-33 2v-61z" fill="#FCFCFC"/><path transform="translate(67,27)" d="m0 0h15v50h10v11h-25v-61z" fill="#F9F9F9"/><path transform="translate(38,36)" d="m0 0c2.97 0.495 2.97 0.495 6 1 1.5987 3.1974 1.1842 6.6706 1.2031 10.184 0.0057001 0.81131 0.0114 1.6226 0.017273 2.4585 0.0094519 1.7173 0.015985 3.4347 0.019836 5.1521 0.0097145 2.6295 0.040739 5.2582 0.072266 7.8875 0.0065292 1.6673 0.01178 3.3346 0.015625 5.002 0.012347 0.78757 0.024694 1.5751 0.037415 2.3866-0.02201 5.3837-0.02201 5.3837-1.636 7.9496-1.7295 0.98022-1.7295 0.98022-5.7295 0.98022v-43z" fill="#646464"/></svg>`
					},
					link: "https://mcpedl.com/user/nextr"
				},
				{
					icon: "discord",
					link: "https://discordapp.com/users/909434577867636757"
				}
			]
		},
		{
			avatar: "https://avatars.githubusercontent.com/u/77906640?v=4",
			name: "TimothyGrass",
			title: "Translator",
			links: [
				{
					icon: "github",
					link: "https://github.com/TimothyGrass"
				}
			]
		},
		{
			avatar: "https://avatars.githubusercontent.com/u/112787582?v=4",
			name: "Elec_Glaciar",
			title: "Translator",
			links: [
				{
					icon: "github",
					link: "https://github.com/Elec-Glacier"
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
<template>
	<VPTeamMembers size="small" :members="contributors" class="smaller"/>
</template>
<style scoped>
	.smaller :deep(.container) {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
	}
</style>