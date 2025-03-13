import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { generateSidebar } from "vitepress-sidebar";

const navLinks = {
	"Home": "/",
	"Tutorial": "/creating-packs",
	"Try it out": "https://holoprint-mc.github.io"
};
const additionalLanguages = {
	zh: {
		label: "中國傳統",
		siteTitle: "HoloPrint Wiki",
		navLinks: {
			"Home": "/",
			"Tutorial": "/creating-packs",
			"Try it out": "https://holoprint-mc.github.io"
		},
		outline: "On this page",
		edit: "Edit this page on GitHub",
		lastUpdated: "Last updated",
		previousPage: "Previous page",
		nextPage: "Next page",
		darkModeSwitchLabel: "Appearance",
		lightModeSwitchTitle: "Switch to light theme",
		darkModeSwitchTitle: "Switch to dark theme",
		sidebarMenuLabel: "Menu",
		search: { // these ones are hardly used, don't worry about doing them all
			button: {
				buttonText: "Search",
				buttonAriaLabel: "Search"
			},
			modal: {
				displayDetails: "Display detailed list",
				resetButtonTitle: "Reset search",
				backButtonTitle: "Close search",
				noResultsText: "No results for",
				footer: {
					selectText: "to select",
					selectKeyAriaLabel: "enter",
					navigateText: "to navigate",
					navigateUpKeyAriaLabel: "up arrow",
					navigateDownKeyAriaLabel: "down arrow",
					closeText: "to close",
					closeKeyAriaLabel: "escape"
				}
			}
		}
	}
};
const sidebarConfig = {
	documentRootPath: "/",
	useTitleFromFileHeading: true,
	manualSortFileNameByPriority: ["about.md", "creating-packs.md", "pack-creation-options.md", "hologram-controls.md", "punch-to-activate.md", "contributing.md", "adding-translations.md", "faq.md"],
	excludePattern: ["README.md"]
};

export default defineConfig(withMermaid({
	title: "HoloPrint Wiki",
	description: "HoloPrint Wiki. View tutorials and documentation for HoloPrint!",
	base: "/wiki/",
	locales: {
		root: {
			label: "English",
			lang: "en"
		},
		...Object.fromEntries(Object.entries(additionalLanguages).map(([lang, config]) => [lang, {
			label: config.label,
			lang,
			link: "/" + lang,
			themeConfig: {
				nav: generateNav(config.navLinks, lang),
				outline: {
					label: config.outline,
					level: "deep"
				},
				editLink: {
					pattern: "https://github.com/HoloPrint-MC/wiki/blob/main/:path",
					text: config.edit
				},
				docFooter: {
					prev: config.previousPage,
					next: config.nextPage
				},
				lastUpdated: {
					text: config.lastUpdated
				},
				siteTitle: config.siteTitle,
				darkModeSwitchLabel: config.darkModeSwitchLabel,
				lightModeSwitchTitle: config.lightModeSwitchTitle,
				darkModeSwitchTitle: config.darkModeSwitchTitle,
				sidebarMenuLabel: config.sidebarMenuLabel
			}
		}]))
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: generateNav(navLinks),
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/SuperLlama88888/holoprint"
			}
		],
		logo: "/logo_288.png",
		sidebar: {
			...Object.fromEntries(Object.keys(additionalLanguages).map(lang => [`/${lang}/`, generateSidebar({
				...sidebarConfig,
				scanStartPath: lang
			}).map(entry => {
				entry.link = `/${lang}/${entry.link}`;
				return entry;
			})])),
			"/": generateSidebar({
				...sidebarConfig,
				excludePattern: [...sidebarConfig.excludePattern, ...Object.keys(additionalLanguages).map(lang => lang + "/")]
			})
		},
		editLink: {
			pattern: "https://github.com/HoloPrint-MC/wiki/blob/main/:path",
			text: "Edit this page on GitHub"
		},
		search: {
			provider: "local",
			options: {
				locales: Object.fromEntries(Object.entries(additionalLanguages).map(([lang, config]) => [lang, {
					translations: config.search
				}]))
			}
		},
		outline: "deep",
		externalLinkIcon: true
	},
	markdown: {
		image: {
			lazyLoading: true
		},
		config: md => {
			md.core.ruler.after("inline", "rewrite-links", state => {
				Object.keys(additionalLanguages).forEach(lang => {
					let slashBeforeLang = "/" + lang;
					if(state.env.relativePath.startsWith(lang + "/")) {
						state.env.frontmatter.features?.forEach(feature => {
							if(feature.link.startsWith("/") && !feature.link.startsWith(slashBeforeLang)) {
								feature.link = slashBeforeLang + feature.link;
							}
						});
						state.tokens.forEach(token => {
							if(token.type == "inline") {
								token.children?.forEach(child => {
									if(child.type == "link_open") {
										let href = child.attrGet("href");
										if(href?.startsWith("/")) {
											child.attrSet("href", slashBeforeLang + href);
										}
									}
								});
							}
						});
					}
				});
			});
		}
	},
	cleanUrls: true,
	lastUpdated: true,
	sitemap: {
		hostname: "https://holoprint-mc.github.io/wiki/"
	}
}));

function generateNav(navLinks, lang) {
	if(lang) {
		for(let text in navLinks) {
			if(navLinks[text].startsWith("/")) {
				navLinks[text] = "/" + lang + navLinks[text];
			}
		}
	}
	return Object.entries(navLinks).map(([text, link]) => ({ text, link }));
}