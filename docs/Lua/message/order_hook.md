# 本地命令的捕获跟屏蔽  

### 返回nil 或者 false 可以屏蔽本地命令的发出

* 可以用来做 不打断的失控
* 可以让 主动技能 不能施法 变成被动技能
* 可以屏蔽玩家丢弃物品 或者 移动物品操作

```lua
    local message = require 'jass.message'
    local japi = require 'jass.japi'
    -- 这里就是下面的flag 采用bitset结构判断
    local orderFlag = {
        -- shift 队列，插旗子
        ["队列"] = 1 << 0,
        -- 瞬发指令,例如狂战士
        ["瞬发"] = 1 << 1,
        -- 多选时只有主选择单位发布
        ["独立"] = 1 << 2,
        -- 多选时所有单位都发布
        ["群体"] = 1 << 3,
        -- 跟群体一起用的，就是阵型移动
        ["阵型"] = 1 << 4,
        -- 抢先发布命令,然后继续原来的命令,有队列标志时无效
        ["抢占"] = 1 << 5,
        -- 多选时,高亮的那一个子组发布,比如建筑物一起升级这种,但是war3有的技能是无视子组的,会对所有选择的都发布
        ["子组"] = 1 << 6,
        -- war3开发的时候用的,现在没有任何卵用
        ["无效"] = 1 << 7,
        -- 自动指令,右键激活的那种技能,比如黑暗之箭,需要配合瞬发一起用
        ["自动"] = 1 << 8,
    }
    local event_map = {

        --本地发布无目标命令
        ['order_immediate'] = function (unit_handle, info)
            --当框选一群单位发布命令时 flag 会变化
            local name, order_id, unknow, flag = table.unpack(info)
            

            return true
        end,

        --本地发布点命令
        ['order_point'] = function (unit_handle, info)
            --当框选一群单位发布命令时 flag 会变化
            local name, order_id, unknow, x, y, flag = table.unpack(info) 
          
            
            return true
        end,

        --本地发布目标命令
        ['order_target'] = function (unit_handle, info)
            --当框选一群单位发布命令时 flag 会变化
            --当对地面发布命令时 handle 为0
            local name, order_id, unknow, x, y, handle, flag = table.unpack(info) 
          
            
            return true
        end,

        --本地右键单位发布命令
        ['order_smart'] = function (unit_handle, info)
            --当框选一群单位发布命令时 flag 会变化
            local name, order_id, unknow, handle, flag = table.unpack(info) 

            return true
        end,

        --本地物品丢弃事件
        ['order_discard'] = function (unit_handle, info)
            local name, order_id, unknow, x, y, unit, handle, flag = table.unpack(info) 

            return true
        end,

    }

    function message.order_hook(info)
        local unit_handle = japi.GetRealSelectUnit() 
        local event = event_map[info[1]]
        if event then 
            return event(unit_handle, info)
        end 
        return true 
    end

```
