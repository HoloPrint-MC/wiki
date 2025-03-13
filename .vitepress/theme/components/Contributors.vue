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
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
	}
</style>