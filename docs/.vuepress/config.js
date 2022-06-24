

const jassConfig = require("./jass");
const plugin = require("./plugin");
const sidebar = require("./sidebar");


module.exports = {
    title: '内置Japi文档',
    description: 'embedded-japi-vue-press',
    evergreen: true,
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
        // github
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'PhoenixZeng/embedded-japi-vue-press',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'PhoenixZeng/embedded-japi-vue-press',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在GitHub上编辑'
    }
}