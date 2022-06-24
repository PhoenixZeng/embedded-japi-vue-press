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
    //'vuepress-plugin-permalink-pinyin':{
    //
    //},
    'vuepress-plugin-auto-sidebar': {
        sort: {
            mode: "created_time_asc",
            readmeFirst: false,
            readmeFirstForce: false
        },
        title: {
            mode: "titlecase",
            map: {}
        },
        sidebarDepth: 3,
        collapse: {
            open: false,
            collapseList: [],
            uncollapseList: []
        },
        ignore: [],
        removeEmptyGroup: false,
        git: {
            trackStatus: 'all'
        }
    },
}
