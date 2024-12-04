(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{242:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"物品japi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物品japi"}},[s._v("#")]),s._v(" 物品 japi")]),s._v(" "),t("div",{staticClass:"language-jass line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jass"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//屏蔽所有物品在地面的指向提示 开局调用一次即可")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" DisableItemPreselectUi "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//异步获取当前选中的物品, 没有延迟但是返回值是异步的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetRealSelectItem "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取玩家当前选中的物品, 返回值是同步的,需要提供玩家参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" GetSelectItem "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("player")]),s._v(" Player "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置物品模型缩放比例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXSetItemSize "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" size "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取物品模型缩放比例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXGetItemSize "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//修改物品颜色 透明值有效  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXSetItemColor "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" color "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//物品模型 x轴旋转  乘法计算")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXItemMatRotateX "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" rotate_x "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//物品模型 y轴旋转  乘法计算")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXItemMatRotateY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" rotate_y "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//物品模型 z轴旋转  乘法计算")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXItemMatRotateZ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" rotate_z "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//物品模型 xyz轴缩放  乘法计算")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXItemMatRotateY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" scale_x, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" scale_y, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("real")]),s._v(" scale_z "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//物品模型恢复")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" EXItemMatReset "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("item")]),s._v(" Handle "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);