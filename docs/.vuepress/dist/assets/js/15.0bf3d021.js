(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{224:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"设置窗口大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置窗口大小"}},[s._v("#")]),s._v(" 设置窗口大小")]),s._v(" "),t("div",{staticClass:"language-jass line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetWindowSize "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" width, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" height "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("p",[s._v("修改窗口大小 可以强行限制用户 窗口模式下的 窗口比例 16/9")]),s._v(" "),t("h1",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("名字")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("整数")]),s._v(" "),t("td",[s._v("width")]),s._v(" "),t("td",[s._v("窗口宽度")])]),s._v(" "),t("tr",[t("td",[s._v("整数")]),s._v(" "),t("td",[s._v("height")]),s._v(" "),t("td",[s._v("窗口高度")])])])]),s._v(" "),t("h1",{attrs:{id:"返回值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("整数")]),s._v(" "),t("td",[s._v("控件地址")])])])]),s._v(" "),t("h1",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),t("div",{staticClass:"language-jass line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jass"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("call")]),s._v(" SetWindowSize("),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("768")]),s._v(")\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" japi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jass.japi'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" GetWindowWidth "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetWindowWidth\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" GetWindowHeight "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetWindowHeight\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" IsWindowMode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IsWindowMode\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" SetWindowSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" japi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SetWindowSize\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--窗口模式下 强行 16:9")]),s._v("\nac"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" w"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetWindowWidth")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetWindowHeight")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("  w "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("IsWindowMode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetWindowSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);