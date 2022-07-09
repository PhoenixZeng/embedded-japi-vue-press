(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{238:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"新增ui接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增ui接口"}},[s._v("#")]),s._v(" 新增 ui 接口")]),s._v(" "),t("div",{staticClass:"language-jass line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jass"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 框选按钮 slot 从0 ~ 11 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameGetInfoSelectButton "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" slot "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 下方buff按钮 slot 从0 ~ 7 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameGetBuffButton "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" slot "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 农民按钮 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameGetUnitButton "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 技能右下角数字文本控件 button = 技能按钮  返回值 = SimpleString 类型控件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameGetButtonSimpleString "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 技能右下角控件  button = 技能按钮  返回值 = SimpleFrame 类型控件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameGetButtonSimpleFrame "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" \n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断控件是否显示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameIsShow "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" \n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改/获取 原生按钮图片 button 可以是 技能按钮 物品按钮 英雄按钮 农民按钮 框选按钮 buff按钮")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameSetOriginButtonTexture "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("button")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameGetOriginButtonTexture "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" \n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改/获取 simple类型控件的 父控件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameGetSimpleParent "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" SimpleFrame "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameSetSimpleParent "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" SimpleFrame, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" parentSimple "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为Simple绑定 frame类型的子控件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以将任意frame类型 绑定到 原生ui下面 返回值 可以解除绑定")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回的是一个 SetupFrame值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameSimpleBindFrame "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" SimpleFrame, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" Frame "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解除绑定 解除后 frame跟simple 就不再关联")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" FrameSimpleUnBindFrame "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" SetupFrame "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])]),t("h1",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("p",[s._v("下面有个 lua 的例子")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[s._v("\n\nac"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("game"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("event "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'玩家-聊天'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" player"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" frame \n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n        frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetBuffButton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--print('buff按钮图标', japi.FrameGetOriginButtonTexture(frame))")]),s._v("\n        japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--技能12个按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n            frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetCommandBarButton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" texture "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--print('技能图标', x, y, texture)")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--japi.FrameSetOriginButtonTexture(frame, "core\\\\texture.blp")')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--物品6个按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n        frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetItemBarButton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" texture "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--print('物品图标', i, texture)")]),s._v("\n            japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--框选单位12个按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n        frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetInfoSelectButton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" texture "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--print('框选图标', i, texture)")]),s._v("\n            japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--英雄头像6个按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n        frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetHeroBarButton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" texture "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--print('英雄图标', i, texture)")]),s._v("\n            japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--农民头像按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetUnitButton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" texture "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameGetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- print('农民图标', texture)")]),s._v("\n        japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--攻击按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" attack "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SimpleTextureFindByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"InfoPanelIconBackdrop"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("attack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--护甲按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" armor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SimpleTextureFindByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"InfoPanelIconBackdrop"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("armor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--英雄属性按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" attr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SimpleTextureFindByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"InfoPanelIconHeroIcon"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--local texture = japi.FrameGetOriginButtonTexture(frame)")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--print('图标',  texture)")]),s._v("\n    japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FrameSetOriginButtonTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("attr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core\\\\texture.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);