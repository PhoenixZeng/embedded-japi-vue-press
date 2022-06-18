

const jassConfig = require("./jass");
const plugin = require("./plugin");
module.exports = {
    title: '内置Japi文档',
    description: 'embedded-japi-vue-press',
    plugins: plugin,
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        smoothScroll: true,
        lastUpdated: '更新于', // string | boolean
        searchMaxSuggestions: 20,
        displayAllHeaders: true, // 默认值：false
    }
}