# 技能japi 

重新实现的japi 可以对单位独立修改,  需要单位先添加技能 再修改 删除技能后即清除数据

需要新版本私聊我

```jass


//允许查看指定单位技能    可以看友军或敌军单位的技能
function EnableDrawSkillPanel takes unit u, boolean enable returns nothing 

//允许查看指定玩家单位技能 可以看友军或敌军单位的技能
function EnableDrawSkillPanelByPlayer takes player p, boolean enable returns nothing 



// 设置单位技能范围
// @param unit u 单位
// @param integer abil 技能ID
// @param real data 技能范围
// @return boolean 是否成功设置单位技能范围
function SetUnitAbilityRange takes unit u, integer abil, real data returns boolean

// 设置单位技能区域
// @param unit u 单位
// @param integer abil 技能ID
// @param real data 技能区域
// @return boolean 是否成功设置单位技能区域
function SetUnitAbilityArea takes unit u, integer abil, real data returns boolean

// 设置单位技能冷却时间
// @param unit u 单位
// @param integer abil 技能ID
// @param real cool 技能冷却时间
// @param real max_cool 技能最大冷却时间
// @return boolean 是否成功设置单位技能冷却时间
function SetUnitAbilityCool takes unit u, integer abil, real cool, real max_cool returns boolean

// 设置单位技能数据A
// @param unit u 单位
// @param integer abil 技能ID
// @param real data 技能数据A
// @return boolean 是否成功设置单位技能数据A
function SetUnitAbilityDataA takes unit u, integer abil, real data returns boolean

// 设置单位技能数据B
// @param unit u 单位
// @param integer abil 技能ID
// @param real data 技能数据B
// @return boolean 是否成功设置单位技能数据B
function SetUnitAbilityDataB takes unit u, integer abil, real data returns boolean


// 设置单位技能数据C
// @param unit u 单位
// @param integer abil 技能ID
// @param real data 技能数据C
// @return boolean 是否成功设置单位技能数据C
function SetUnitAbilityDataC takes unit u, integer abil, real data returns boolean


// 设置单位技能数据D
// @param unit u 单位
// @param integer abil 技能ID
// @param real data 技能数据D
// @return boolean 是否成功设置单位技能数据D
function SetUnitAbilityDataD takes unit u, integer abil, real data returns boolean

// 设置单位技能数据E
// @param unit u 单位
// @param integer abil 技能ID
// @param real data 技能数据E
// @return boolean 是否成功设置单位技能数据E
function SetUnitAbilityDataE takes unit u, integer abil, real data returns boolean


// 设置单位技能按钮位置     如果需要隐藏技能 x=0, y=-11
// @param unit u 单位
// @param integer abil 技能ID
// @param integer x 按钮X坐标
// @param integer y 按钮Y坐标
// @return boolean 是否成功设置单位技能按钮位置
function SetUnitAbilityButtonPos takes unit u, integer abil, integer x, integer y returns boolean


// 设置单位技能热键
// @param unit u 单位
// @param integer abil 技能ID
// @param string hotkey 技能热键
// @return boolean 是否成功设置单位技能热键
function SetUnitAbilityHotkey takes unit u, integer abil, string hotkey returns boolean


// 设置单位技能目标
// @param unit u 单位
// @param integer abil 技能ID
// @param integer targs 技能目标
// @return boolean 是否成功设置单位技能目标
function SetUnitAbilityTargs takes unit u, integer abil, integer targs returns boolean

// 设置单位技能消耗
// @param unit u 单位
// @param integer abil 技能ID
// @param integer cost 技能消耗
// @return boolean 是否成功设置单位技能消耗
function SetUnitAbilityCost takes unit u, integer abil, integer cost returns boolean


// 设置单位技能单位ID
// @param unit u 单位
// @param integer abil 技能ID
// @param integer unit_id 技能单位ID
// @return boolean 是否成功设置单位技能单位ID
function SetUnitAbilityUnitId takes unit u, integer abil, integer unit_id returns boolean

// 设置单位技能要求等级
// @param unit u 单位
// @param integer abil 技能ID
// @param integer req_level 技能要求等级
// @return boolean 是否成功设置单位技能要求等级
function SetUnitAbilityReqLevel takes unit u, integer abil, integer req_level returns boolean

// 单位是否拥有技能, 填父模板id 拥有子模版id 也会返回true
// @param unit u 单位
// @param integer abil 技能ID
// @return boolean 单位是否拥有技能 
function UnitHasAbility takes unit u, integer abil returns boolean


// 设置单位技能书数据A  修改后 需要升级 或者降级 来刷新
// @param unit u 单位
// @param integer abil 技能ID
// @param string abil_list 技能书数据A
// @return boolean 是否成功设置单位技能书数据A
function SetUnitAbilitySpellBookDataA takes unit u, integer abil, string abil_list returns boolean


// 创建命令按钮
// @return integer 创建的命令按钮  可以用UI的锚点位置 修改大小
function CreateCommandButton takes nothing returns integer


// 销毁命令按钮
// @param integer btn 命令按钮ID
function DestroyCommandButton takes integer btn returns nothing


// 命令按钮点击事件
// @param integer btn 命令按钮ID
// @param integer mouse_type 鼠标类型
function CommandButtonClick takes integer btn, integer mouse_type returns nothing


// 设置命令单位技能
// @param integer btn 命令按钮ID
// @param unit u 单位
// @param integer abil 技能ID
function SetCommandUnitAbility takes integer btn, unit u, integer abil returns nothing



```