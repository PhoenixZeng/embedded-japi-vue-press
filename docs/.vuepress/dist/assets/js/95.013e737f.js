(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{302:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"lua引擎里的rsa算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lua引擎里的rsa算法"}},[s._v("#")]),s._v(" lua 引擎里的 RSA 算法")]),s._v(" "),t("h2",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("p",[s._v("ydlua 内置了一套 sha1 算法 以及 rsa 算法 这篇文字教你们如何使用。")]),s._v(" "),t("p",[s._v("先看以下代码")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" bignum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jass.bignum"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" rsa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- RSA公钥")]),s._v("\nrsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"00010001"')]),s._v("\nrsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A6040BC5737510DFF2E4DF965D50338855E151AABF8DE41854B129F862438DB933427C7006210C6B73A4846C2422C490808A45E1119FC5DEE4F9B8AC9B0657D65CBB09BC1B3E71872F998A307542BF9F5D31C8559EB070128805D8C75E3D0F7604C9A3DD7B37A87A8746F7F92678198946A46F22ED60987B6110D4382EB4EB6D8B857216CD5CFBF5F396D6E19D2B4E140AAF850E3EDC0851E47B83F7678D1F706CE4A15B11205540811DE28EFA1426C2CB4F1A35C4256AB5AFEAA32FAB25675334530D8B8ACA71AD8AD3ED4B3B02895F4CEEA7F97B2E6E41655262147D5D5A7ED69E4E7D4A132691E1BD8728F648DE468787312A62DA4DFC5E3DC008F6A87CB1"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- RSA私钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" suc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pcall")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(ppk)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" suc "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" key\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("e_bn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n_bn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d_bn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--解码密文 需要 e n")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" c_bn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" m_bn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("powmod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("e_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tostring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--编码生成密文 需要 d n")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("encode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" m_bn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" c_bn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" m_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("powmod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tostring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c_bn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\nrsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" sha1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bignum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sha1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--生成签名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--\t文本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_sign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("encode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sha1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--验证签名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--\t文本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--\t签名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("check_sign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sha1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("p",[s._v("上面这段代码 是 英萌里原本的例子 现在教你们如何使用这段代码")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("rsa.e = 公钥指数\n\nrsa.n = 公钥模数 \n\nrsa.d = 私钥指数\n")])])]),t("p",[s._v("在上面的代码中 公钥部分 是放在代码里 可以被公开的部分   用来验证的")]),s._v(" "),t("p",[s._v("私钥是放在自己安全的环境里 不开放给别人知道的")]),s._v(" "),t("h2",{attrs:{id:"rsa的加密方法如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rsa的加密方法如下"}},[s._v("#")]),s._v(" rsa 的加密方法如下")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("1. 使用 公钥指数 + 私钥指数  在自己的电脑或服务器上 对源文进行加密 得到密文\n2. 将密文保存传输\n3. 对方的电脑上  使用 公钥指数 + 公钥模数  对密文进行解密 得到源文\n")])])]),t("h2",{attrs:{id:"由于上面的-私钥并没有开放-故此我们可以自己生成一套-自己的-公私钥来做数据加密-验签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#由于上面的-私钥并没有开放-故此我们可以自己生成一套-自己的-公私钥来做数据加密-验签"}},[s._v("#")]),s._v(" 由于上面的 私钥并没有开放  故此我们可以自己生成一套 自己的 公私钥来做数据加密 验签")]),s._v(" "),t("ol",[t("li",[s._v("先下载安装 openssl   32/64 位都可以 下载地址 http://slproweb.com/products/Win32OpenSSL.html")]),s._v(" "),t("li",[s._v("在安装目录里 bin / 目录下 新建一个 make.bat")]),s._v(" "),t("li",[s._v("在 bat 里编辑以下内容后保存运行")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  openssl genrsa -out private_rsa.pem 1024\n\n  openssl rsa -in private_rsa.pem -text -out private.txt\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[s._v("打开运行后生成的 private.txt  这个文件保存了公私钥 如果使用记得自己保存好，不要丢失外放")])]),s._v(" "),t("li",[t("p",[s._v("打开后")]),s._v(" "),t("p",[s._v("modulus: 下面的内容 就是  公钥模数   去掉 第一个 00 再去掉空格换行冒号 就可以放在 最上面 rsa.n 的代码里")]),s._v(" "),t("p",[s._v("publicExponent: 右边括号里 去掉 0x  再补 3 个 0 就可以放到上面的 rsa.e 里")]),s._v(" "),t("p",[s._v("privateExponent: 下面的内容 就是 私钥指数  去掉空格换行冒号 就可以放在 最上面的 rsa.d 里 不过私钥 不能对外开放 不能随着代码一起发出， 切记小心。")])])]),s._v(" "),t("p",[s._v("如果需要在魔兽之外 独立程序使用 可以参考 "),t("a",{attrs:{href:"https://github.com/w4454962/RSA",target:"_blank",rel:"noopener noreferrer"}},[s._v("c++ 版本 RSA 例子"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);