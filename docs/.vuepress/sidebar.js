const getAutoBarConfig = require("./bar");
const bar = getAutoBarConfig({
    filter: (meta) => meta.autoIgnore !== true,
    stripNumbers: false,
    addReadMeToFirstGroup: false,
})
let autoSidebar = bar.sidebar
console.log('autoSidebar', autoSidebar)

let sidebar = [
    {
        title: '标准',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 5,    // 可选的, 默认值是 1
        children: [
            ['/', '首页'],
            ['/Japi/', 'Japi'],
            ['/Lua/', 'Lua'],
            ['/Script/', '界面'],
        ]
    },
    {
        title: '更新',
        children: [
            ['/1.44/', '1.44更新'],
            ['/1.46/', '1.46更新'],
            ['/1.47/', '1.47更新'],
            ['/1.48/', '1.48更新'],
        ],
        collapsable: false, // 可选的, 默认值是 true,
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    }
]
let autoMap = {}
autoSidebar.forEach(dir => {
    if (typeof dir === 'string') {
        return
    }

    dir.children.forEach(child => {
        if (typeof child !== 'string') {
            console.log('dir.children.object', child)
        }
    })
    autoMap['/' + dir.title + '/'] = dir.children
});

console.log('autoMap', autoMap)
sidebar = sidebar.map(item => {
    if (item.children) {
        item.children = item.children.map(child => {
            let path = child[0]
            let title = child[1]

            if (autoMap[path]) {
                return {
                    title: title,
                    path: path,
                    children: autoMap[path],
                }
            }
            return child
        })
    }
    return item
})
console.log(JSON.stringify(sidebar))

console.log("")
console.log("")
console.log("")
console.log("")

module.exports = sidebar