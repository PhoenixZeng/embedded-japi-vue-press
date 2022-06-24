

const jassConfig = require("./jass");
const plugin = require("./plugin");
const sidebar = require("./sidebar");


module.exports = {
    title: '内置Japi文档',
    description: 'embedded-japi-vue-press',
    evergreen: true,
    base: "/japi/",
    plugins: plugin,
    markdown: {
        lineNumbers: true,
    },
    theme: 'yuu',
    themeConfig: {
        yuu: {
            defaultDarkTheme: true,
            disableThemeIgnore: true,
            labels: {
                darkTheme: '黑色主题', // Default is "Enable Dark Theme?"
                ignoreThemes: '忽略其他主题', // Default is "Ignore Other Themes?"
            },
        },
        // logo: '/assets/img/logo.png',
        prevLinks: false,
        nextLinks: false,
        smoothScroll: true,
        lastUpdated: '更新于', // string | boolean
        searchMaxSuggestions: 20,
        displayAllHeaders: true, // 默认值：false
        sidebar: sidebar,
    }
}