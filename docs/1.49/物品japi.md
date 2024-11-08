# 物品japi 

```jass

//屏蔽所有物品在地面的指向提示 开局调用一次即可
function DisableItemPreselectUi takes nothing returns nothing

//异步获取当前选中的物品, 没有延迟但是返回值是异步的
function GetRealSelectItem takes nothing returns item

//获取玩家当前选中的物品, 返回值是同步的,需要提供玩家参数
function GetSelectItem takes player Player returns item

//设置物品模型缩放比例
function EXSetItemSize takes item Handle, real size returns nothing

//获取物品模型缩放比例
function EXGetItemSize takes item Handle returns real

//修改物品颜色 透明值有效  
function EXSetItemColor takes item Handle, integer color returns nothing

//物品模型 x轴旋转  乘法计算
function EXItemMatRotateX takes item Handle, real rotate_x returns nothing

//物品模型 y轴旋转  乘法计算
function EXItemMatRotateY takes item Handle, real rotate_y returns nothing

//物品模型 z轴旋转  乘法计算
function EXItemMatRotateZ takes item Handle, real rotate_z returns nothing

//物品模型 xyz轴缩放  乘法计算
function EXItemMatRotateY takes item Handle, real scale_x, real scale_y, real scale_z returns nothing

//物品模型恢复
function EXItemMatReset takes item Handle returns nothing


```
