(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{242:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"装饰物japi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#装饰物japi"}},[s._v("#")]),s._v(" 装饰物 japi")]),s._v(" "),n("div",{staticClass:"language-jass line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-jass"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物最大数量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物最大数量    循环1~最大数量 用循环数 作为装饰物的索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadCount "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" \n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的类型id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的物编类型id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadTypeId "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的模型  如果无效的模型路径 会是一个 绿色的方块")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  模型路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadModel "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" model "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的队伍颜色")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  队伍颜色  0~15")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadTeamColor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" team_color "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的颜色")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  颜色   16进制颜色值 0xffffffff  透明通道暂时无效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadColor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" color "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的x坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的x坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadX "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的y坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的y坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadY "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的z坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的z坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadZ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  x坐标  y坐标  z坐标")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadPosition "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" x, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" y, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" z "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的缩放   每次设置是会累加的  乘法计算 会刷新渲染范围")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  x缩放  y缩放  z缩放")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadMatScale "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" x, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" y, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" z "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的旋转矩阵  每次设置是会累加的  乘法计算")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  x旋转  y旋转  z旋转")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadMatRotateX "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadMatRotateY "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadMatRotateZ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" z "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的矩阵重置成1  将旋转跟缩放重置成1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadMatReset "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的是否可见")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  是否可见")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadVisible "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" visible "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的动画  调用后 可以使用GetDoodadCurrentAnimationIndex 获取索引，根据索引获取动画名称，时长等信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  动画名称  是否禁止随机  true禁止  如果是false则允许随机 会一直随机切换动画 比如stand多个动画时会自动切换。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：动画时长(毫秒)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadAnimation "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" animation, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" disable_random "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n    \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置装饰物的动画速度  1.0是正常速度  0.5是一半速度  2.0是两倍速度")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  动画速度")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：无")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetDoodadSpeed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" speed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的动画速度")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的动画速度")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadSpeed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的样式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：样式索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadVariation "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的当前动画索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的当前动画索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadCurrentAnimationIndex "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的动画数量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的动画数量 循环0~最大数量-1 用循环数 作为装饰物的动画索引 跟model2的动画索引机制一样")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadAnimationCount "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的动画名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  动画索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的动画名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadAnimationnName "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" animation_index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取装饰物的动画时长")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数：装饰物索引  动画索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物的动画时长(毫秒)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetDoodadAnimationTime "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" index, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" animation_index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建装饰物    由于没有销毁， 如果可以设置模型+设置不可见 来模拟回收， 需要使用时 再重新提取出来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参数 装饰物物编类型ID, 样式, x坐标, y坐标, z坐标, 旋转角度, 缩放比例( 受到编辑器最小 最大比例限制)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值：装饰物索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" CreateDoodad "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" type_id, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" style, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" x, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" y, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" z, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" face, "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" scale "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br")])]),n("h1",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),n("div",{staticClass:"language-lua line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-lua"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" japi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetDoodadCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n    japi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetDoodadVisible")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);