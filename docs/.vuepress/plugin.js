const moment = require("moment");

module.exports = {
    '@vuepress/active-header-links': {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    },
    // '@vuepress/pwa':{
    //     serviceWorker: true,
    //     updatePopup: {
    //         message : '此文件似乎有更新',
    //         buttonText: '刷新'
    //     }
    // },
    '@vuepress/back-to-top': {

    },
    '@vuepress/last-updated': {
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            moment.locale('zh-cn')
            return moment(timestamp).format('lll')
        }
    },
    'check-md': {

    },
    'seo': {

    },
    'pangu': {

    },
    'code-copy': {

    },
    'vuepress-plugin-analytics': {
        ba: '7d4d1b04612583f505a991ef2d6bf18d', // 662dade0b3fe9911e80442e86935e233
        ga: '' // UA-00000000-0
    }
}
