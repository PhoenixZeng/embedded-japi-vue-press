# 装饰物japi 

```jass

//获取装饰物最大数量
//返回值：装饰物最大数量    循环1~最大数量 用循环数 作为装饰物的索引
function GetDoodadCount takes nothing returns integer 


//获取装饰物的类型id
//参数：装饰物索引
//返回值：装饰物的物编类型id
function GetDoodadTypeId takes integer index returns integer


//设置装饰物的模型  如果无效的模型路径 会是一个 绿色的方块
//参数：装饰物索引  模型路径
//返回值：无
function SetDoodadModel takes integer index, string model returns nothing


//设置装饰物的队伍颜色
//参数：装饰物索引  队伍颜色  0~15
//返回值：无
function SetDoodadTeamColor takes integer index, integer team_color returns nothing


//设置装饰物的颜色
//参数：装饰物索引  颜色   16进制颜色值 0xffffffff  透明通道暂时无效
//返回值：无
function SetDoodadColor takes integer index, integer color returns nothing


//获取装饰物的x坐标
//参数：装饰物索引
//返回值：装饰物的x坐标
function GetDoodadX takes integer index returns real



//获取装饰物的y坐标
//参数：装饰物索引
//返回值：装饰物的y坐标
function GetDoodadY takes integer index returns real


//获取装饰物的z坐标
//参数：装饰物索引
//返回值：装饰物的z坐标
function GetDoodadZ takes integer index returns real


//设置装饰物的坐标
//参数：装饰物索引  x坐标  y坐标  z坐标
//返回值：无
function SetDoodadPosition takes integer index, real x, real y, real z returns nothing


//设置装饰物的缩放   每次设置是会累加的  乘法计算 会刷新渲染范围
//参数：装饰物索引  x缩放  y缩放  z缩放
//返回值：无
function SetDoodadMatScale takes integer index, real x, real y, real z returns nothing


//设置装饰物的旋转矩阵  每次设置是会累加的  乘法计算
//参数：装饰物索引  x旋转  y旋转  z旋转
//返回值：无
function SetDoodadMatRotateX takes integer index, real x returns nothing
function SetDoodadMatRotateY takes integer index, real y returns nothing
function SetDoodadMatRotateZ takes integer index, real z returns nothing


//设置装饰物的矩阵重置成1  将旋转跟缩放重置成1
//参数：装饰物索引
//返回值：无
function SetDoodadMatReset takes integer index returns nothing


//设置装饰物的是否可见
//参数：装饰物索引  是否可见
//返回值：无
function SetDoodadVisible takes integer index, boolean visible returns nothing


//设置装饰物的动画  调用后 可以使用GetDoodadCurrentAnimationIndex 获取索引，根据索引获取动画名称，时长等信息
//参数：装饰物索引  动画名称  是否禁止随机  true禁止  如果是false则允许随机 会一直随机切换动画 比如stand多个动画时会自动切换。
//返回值：动画时长(毫秒)
function SetDoodadAnimation takes integer index, string animation, boolean disable_random returns integer
    

//设置装饰物的动画速度  1.0是正常速度  0.5是一半速度  2.0是两倍速度
//参数：装饰物索引  动画速度
//返回值：无
function SetDoodadSpeed takes integer index, real speed returns nothing


//获取装饰物的动画速度
//参数：装饰物索引
//返回值：装饰物的动画速度
function GetDoodadSpeed takes integer index returns real

//获取装饰物的样式
//参数：装饰物索引
//返回值：样式索引
function GetDoodadVariation takes integer index returns integer


//获取装饰物的当前动画索引
//参数：装饰物索引
//返回值：装饰物的当前动画索引
function GetDoodadCurrentAnimationIndex takes integer index returns integer


//获取装饰物的动画数量
//参数：装饰物索引
//返回值：装饰物的动画数量 循环0~最大数量-1 用循环数 作为装饰物的动画索引 跟model2的动画索引机制一样
function GetDoodadAnimationCount takes integer index returns integer


//获取装饰物的动画名称
//参数：装饰物索引  动画索引
//返回值：装饰物的动画名称
function GetDoodadAnimationnName takes integer index, integer animation_index returns string


//获取装饰物的动画时长
//参数：装饰物索引  动画索引
//返回值：装饰物的动画时长(毫秒)
function GetDoodadAnimationTime takes integer index, integer animation_index returns integer


//创建装饰物    由于没有销毁， 如果可以设置模型+设置不可见 来模拟回收， 需要使用时 再重新提取出来
//参数 装饰物物编类型ID, 样式, x坐标, y坐标, z坐标, 旋转角度, 缩放比例( 受到编辑器最小 最大比例限制)
//返回值：装饰物索引
function CreateDoodad takes integer type_id, integer style, real x, real y, real z, real face, real scale returns integer



```

# 例子



```lua

for index = 0, japi.GetDoodadCount() do 
    japi.SetDoodadVisible(index, false)
end 

```
