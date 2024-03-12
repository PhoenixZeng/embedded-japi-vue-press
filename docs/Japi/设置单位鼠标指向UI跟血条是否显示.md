# 设置 单位 鼠标指向 UI 跟血条 是否显示

```jass
function SetUnitPressUIVisible takes handle Handle, boolean is_show returns nothing
```

# 描述

隐藏单位跟物品 鼠标指向时显示的 UI 包括单位血条

::: danger 警告
目前对 物品使用会引起 掉线 请勿对物品使用
:::

# 参数

| 类型   | 名字    | 说明                       |
| ------ | ------- | -------------------------- |
| 单位   | handle  | 要修改的单位或物品         |
| 字符串 | is_show | 是否显示 填 false 就是隐藏 |

# 例子

```jass
call SetUnitPressUIVisible(GetTriggerUnit(), false)

```

```lua
local japi = require 'jass.japi'
local jass = require 'jass.common'

japi.SetUnitPressUIVisible(jass.GetTriggerUnit(), false)

```
