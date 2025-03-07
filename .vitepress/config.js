import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(withMermaid({
	title: "HoloPrint Wiki",
	description: "HoloPrint Wiki. View tutorials and documentation for HoloPrint!",
	base: "/wiki/",
	lang: "en",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: "Home",
				link: "/"
			},
			{
				text: "Tutorial",
				link: "/creating-packs"
			},
			{
				text: "Try it out",
				link: "https://holoprint-mc.github.io"
			}
		],
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/SuperLlama88888/holoprint"
			}
		],
		logo: "/logo_288.png",
		editLink: {
			pattern: "https://github.com/HoloPrint-MC/wiki/blob/main/:path",
			text: "Edit this page on GitHub"
		},
		search: {
			provider: "local"
		},
		outline: "deep",
		externalLinkIcon: true
	},
	markdown: {
		image: {
			lazyLoading: true
		}
	},
	cleanUrls: true,
	lastUpdated: true,
	sitemap: {
		hostname: "https://holoprint-mc.github.io/wiki/"
	}
}), {
	documentRootPath: "/",
	useTitleFromFileHeading: true,
	manualSortFileNameByPriority: ["about.md", "creating-packs.md", "pack-creation-options.md", "hologram-controls.md", "punch-to-activate.md", "contributing.md", "adding-translations.md", "faq.md"],
	excludePattern: ["README.md"]
}));