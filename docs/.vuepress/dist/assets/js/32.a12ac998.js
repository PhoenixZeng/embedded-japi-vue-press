(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{241:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"技能japi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技能japi"}},[s._v("#")]),s._v(" 技能 japi")]),s._v(" "),n("p",[s._v("重新实现的 japi 可以对单位独立修改，需要单位先添加技能 再修改 删除技能后即清除数据")]),s._v(" "),n("p",[s._v("需要新版本私聊我")]),s._v(" "),n("div",{staticClass:"language-jass line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-jass"}},[n("code",[s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//允许查看指定单位技能    可以看友军或敌军单位的技能")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EnableDrawSkillPanel "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" enable "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//允许查看指定玩家单位技能 可以看友军或敌军单位的技能")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EnableDrawSkillPanelByPlayer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("player")]),s._v(" p, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" enable "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" \n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能范围")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real data 技能范围")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能范围")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityRange "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能区域")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real data 技能区域")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能区域")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityArea "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能冷却时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real cool 技能冷却时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real max_cool 技能最大冷却时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能冷却时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityCool "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" cool, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" max_cool "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能数据A")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real data 技能数据A")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能数据A")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityDataA "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能数据B")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real data 技能数据B")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能数据B")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityDataB "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能数据C")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real data 技能数据C")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能数据C")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityDataC "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能数据D")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real data 技能数据D")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能数据D")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityDataD "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能数据E")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param real data 技能数据E")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能数据E")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityDataE "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能按钮位置     如果需要隐藏技能 x=0, y=-11")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer x 按钮X坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer y 按钮Y坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能按钮位置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityButtonPos "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" x, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能热键")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param string hotkey 技能热键")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能热键")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityHotkey "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" hotkey "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能目标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer targs 技能目标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能目标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityTargs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" targs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能消耗")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer cost 技能消耗")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能消耗")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityCost "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" cost "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能单位ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer unit_id 技能单位ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能单位ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityUnitId "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" unit_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能要求等级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer req_level 技能要求等级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能要求等级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilityReqLevel "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" req_level "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单位是否拥有技能, 填父模板id 拥有子模版id 也会返回true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 单位是否拥有技能 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" UnitHasAbility "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置单位技能书数据A  修改后 需要升级 或者降级 来刷新")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param string abil_list 技能书数据A")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return boolean 是否成功设置单位技能书数据A")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitAbilitySpellBookDataA "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" abil_list "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建命令按钮")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @return integer 创建的命令按钮  可以用UI的锚点位置 修改大小")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" CreateCommandButton "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 销毁命令按钮")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer btn 命令按钮ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" DestroyCommandButton "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" btn "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 命令按钮点击事件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer btn 命令按钮ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer mouse_type 鼠标类型")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" CommandButtonClick "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" btn, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" mouse_type "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置命令单位技能")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer btn 命令按钮ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param unit u 单位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @param integer abil 技能ID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetCommandUnitAbility "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" btn, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" u, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" abil "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);