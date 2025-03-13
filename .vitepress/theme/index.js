import DefaultTheme from "vitepress/theme";
import Contributors from "./components/Contributors.vue";
import "./custom.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component("Contributors", Contributors);
	}
};