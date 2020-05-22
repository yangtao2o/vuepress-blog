(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{203:function(t,a,e){"use strict";e.r(a);var s=e(3),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"html-基础理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-基础理论"}},[t._v("#")]),t._v(" Html 基础理论")]),t._v(" "),e("h2",{attrs:{id:"html5-语义化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-语义化"}},[t._v("#")]),t._v(" HTML5 语义化")]),t._v(" "),e("p",[t._v("什么是语义化？就是用 "),e("strong",[t._v("合理、正确的标签")]),t._v(" 来展示内容，比如 h1~h6 定义标题。")]),t._v(" "),e("p",[t._v("好处")]),t._v(" "),e("ul",[e("li",[t._v("易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。")]),t._v(" "),e("li",[t._v("有利于 SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。")]),t._v(" "),e("li",[t._v("方便其他设备解析，如盲人阅读器根据语义渲染网页")]),t._v(" "),e("li",[t._v("有利于开发和维护，语义化更具可读性，代码更好维护，与 CSS3 关系更和谐。")])]),t._v(" "),e("h2",{attrs:{id:"doctype-有什么用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#doctype-有什么用"}},[t._v("#")]),t._v(" Doctype 有什么用")]),t._v(" "),e("p",[e("strong",[t._v("Doctype")]),t._v(" 是一种 "),e("strong",[t._v("标准通用标记语言")]),t._v(" 的文档类型声明，目的是告诉标准通用标记 "),e("strong",[t._v("语言解析器")]),t._v(" 要使用什么样的文档类型定义（DTD）来解析文档。")]),t._v(" "),e("p",[e("strong",[t._v("声明")]),t._v(" 是用来指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。 声明必须是 HTML 文档的第一行，位于 html 标签之前。")]),t._v(" "),e("p",[t._v("浏览器本身分为两种模式，一种是 "),e("strong",[t._v("标准模式")]),t._v("，一种是 "),e("strong",[t._v("怪异模式")]),t._v("，浏览器通过 Doctype 来区分这两种模式。")]),t._v(" "),e("p",[t._v("如果 html 中省略了 doctype，浏览器就会进入到 Quirks 模式的怪异状态，在这种模式下，有些样式会和标准模式存在差异，而 html 标准和 dom 标准值规定了标准模式下的行为，没有对怪异模式做出规定，因此不同浏览器的处理也是不同的，所以一定要在 html 开头使用 doctype。")]),t._v(" "),e("h2",{attrs:{id:"viewport-属性值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewport-属性值"}},[t._v("#")]),t._v(" Viewport 属性值")]),t._v(" "),e("ul",[e("li",[t._v('width 设置 layout viewport 的宽度，为一个正整数，或字符串"width-device"')]),t._v(" "),e("li",[t._v("initial-scale 设置页面的初始缩放值，为一个数字，可以带小数")]),t._v(" "),e("li",[t._v("minimum-scale 允许用户的最小缩放值，为一个数字，可以带小数")]),t._v(" "),e("li",[t._v("maximum-scale 允许用户的最大缩放值，为一个数字，可以带小数")]),t._v(" "),e("li",[t._v("height 设置 layout viewport 的高度，这个属性对我们并不重要，很少使用")]),t._v(" "),e("li",[t._v('user-scalable 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。')])]),t._v(" "),e("p",[t._v("另，viewport 可分为可见视口和视窗视口，可见视口是实际的设备大小，视窗视口是网页的实际宽度。")]),t._v(" "),e("h2",{attrs:{id:"http-equive-属性的作用和参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-equive-属性的作用和参数"}},[t._v("#")]),t._v(" http-equive 属性的作用和参数")]),t._v(" "),e("ul",[e("li",[t._v("expires，指定过期时间")]),t._v(" "),e("li",[t._v("progma，设置no-cache可以禁止缓存")]),t._v(" "),e("li",[t._v("refresh，定时刷新")]),t._v(" "),e("li",[t._v("set-cookie，可以设置cookie")]),t._v(" "),e("li",[t._v("X-UA-Compatible，使用浏览器版本")]),t._v(" "),e("li",[t._v("apple-mobile-web-app-status-bar-style，针对WebApp全屏模式，隐藏状态栏/设置状态栏颜色")])]),t._v(" "),e("h2",{attrs:{id:"渲染引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎"}},[t._v("#")]),t._v(" 渲染引擎")]),t._v(" "),e("p",[t._v("渲染引擎的作用是根据资源文件的内容渲染出用户可见的界面。目前市面上主要的浏览器和它们所对应的渲染引擎有：")]),t._v(" "),e("ul",[e("li",[t._v("IE，引擎为 Trident")]),t._v(" "),e("li",[t._v("Firefox(Mozilla)，引擎为 Gecko")]),t._v(" "),e("li",[t._v("Safari，引擎为 Webkit")]),t._v(" "),e("li",[t._v("Chrome，引擎为 Blink")]),t._v(" "),e("li",[t._v("Opera，引擎同样为 Blink")])]),t._v(" "),e("h2",{attrs:{id:"浏览器的渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染过程"}},[t._v("#")]),t._v(" 浏览器的渲染过程")]),t._v(" "),e("ol",[e("li",[t._v("解析 HTML 生成 DOM 树。")]),t._v(" "),e("li",[t._v("解析 CSS 生成 CSSOM 规则树。")]),t._v(" "),e("li",[t._v("将 DOM 树与 CSSOM 规则树合并在一起生成渲染树。")]),t._v(" "),e("li",[t._v("遍历渲染树开始布局，计算每个节点的位置大小信息。")]),t._v(" "),e("li",[t._v("将渲染树每个节点绘制到屏幕。")])]),t._v(" "),e("h2",{attrs:{id:"user-agent-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-agent-是什么"}},[t._v("#")]),t._v(" User-Agent 是什么")]),t._v(" "),e("p",[t._v("User-Agent 是一个特征字符串，用来标识发起请求的用户代理软件的应用类型、操作系统、软件开发商和版本号的信息。")]),t._v(" "),e("p",[t._v("Chrome 浏览器，输入"),e("code",[t._v("window.navigator.userAgent")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"')]),t._v("\n")])])]),e("p",[t._v("网景 (Netscape) 浏览器曾经是世界浏览器市场的霸主，网景浏览器把 User-Agent 中自己的标识名定位：Mozilla。")]),t._v(" "),e("p",[t._v("所以那时候的程序员就利用 "),e("code",[t._v("User-Agent")]),t._v(" 来判断浏览器的特性，比如是否支持 frame，对于不符合要求的浏览器直接显示不兼容内容。就像现在程序员不喜欢IE一样。")]),t._v(" "),e("p",[t._v("所以后来微软推出 IE 浏览器的时候，为了能够兼容那些用来兼容 Netscape 的网页，就在自己的 "),e("code",[t._v("User-Agent")]),t._v(" 中也加入了 Mozilla 用来伪装成 Netscape。后来渐渐地这种作法就成为事实标准了。")]),t._v(" "),e("h2",{attrs:{id:"reflow-和-repaint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reflow-和-repaint"}},[t._v("#")]),t._v(" Reflow 和 Repaint")]),t._v(" "),e("h3",{attrs:{id:"reflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reflow"}},[t._v("#")]),t._v(" Reflow")]),t._v(" "),e("p",[t._v("当涉及到 DOM 节点的布局属性发生变化时，就会重新计算该属性，浏览器会重新描绘相应的元素，此过程叫 Reflow（回流或重排）。")]),t._v(" "),e("h3",{attrs:{id:"repaint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repaint"}},[t._v("#")]),t._v(" Repaint")]),t._v(" "),e("p",[t._v("当影响 DOM 元素可见性的属性发生变化 (如 color) 时, 浏览器会重新描绘相应的元素, 此过程称为 Repaint（重绘）。因此重排必然会引起重绘。")]),t._v(" "),e("h3",{attrs:{id:"引起-repaint-和-reflow-的一些操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引起-repaint-和-reflow-的一些操作"}},[t._v("#")]),t._v(" 引起 Repaint 和 Reflow 的一些操作")]),t._v(" "),e("ul",[e("li",[t._v("调整窗口大小")]),t._v(" "),e("li",[t._v("字体大小")]),t._v(" "),e("li",[t._v("样式表变动")]),t._v(" "),e("li",[t._v("元素内容变化，尤其是输入控件")]),t._v(" "),e("li",[t._v("CSS 伪类激活，在用户交互过程中发生")]),t._v(" "),e("li",[t._v("DOM 操作，DOM 元素增删、修改")]),t._v(" "),e("li",[t._v("width, clientWidth, scrollTop 等布局宽高的计算")])]),t._v(" "),e("p",[t._v("Repaint 和 Reflow 是不可避免的，只能说对性能的影响减到最小，给出下面几条建议：")]),t._v(" "),e("ul",[e("li",[t._v("避免逐条更改样式。建议集中修改样式，例如操作 className。")]),t._v(" "),e("li",[t._v("避免频繁操作 DOM。创建一个 documentFragment 或 div，在它上面应用所有 DOM 操作，最后添加到文档里。设置 display:none 的元素上操作，最后显示出来。")]),t._v(" "),e("li",[t._v("避免频繁读取元素几何属性（例如 scrollTop）。绝对定位具有复杂动画的元素。")]),t._v(" "),e("li",[t._v("绝对定位使它脱离文档流，避免引起父元素及后续元素大量的回流")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://harttle.land/2015/08/11/reflow-repaint.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("减少页面重排与重绘（Reflow & Repaint）"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"nodelist-和-htmlcollection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-和-htmlcollection"}},[t._v("#")]),t._v(" NodeList 和 HTMLCollection")]),t._v(" "),e("p",[t._v("主要区别是，NodeList 可以包含各种类型的节点，HTMLCollection 只能包含 HTML 元素节点。")]),t._v(" "),e("h3",{attrs:{id:"nodelist-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-接口"}},[t._v("#")]),t._v(" NodeList 接口")]),t._v(" "),e("p",[t._v("NodeList 实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到 NodeList 实例。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Node.childNodes")])]),t._v(" "),e("li",[e("code",[t._v("document.querySelectorAll()")]),t._v(" 等节点搜索方法")])]),t._v(" "),e("p",[t._v("NodeList 实例很像数组，可以使用 length 属性和 forEach 方法。但是，它不是数组，不能使用 pop 或 push 之类数组特有的方法。")]),t._v(" "),e("p",[t._v("如果 NodeList 实例要使用数组方法，可以将其转为真正的数组。")]),t._v(" "),e("p",[t._v("除了使用 forEach 方法遍历 NodeList 实例，还可以使用 for 循环。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("NodeList.prototype.length")]),t._v("，length 属性返回 NodeList 实例包含的节点数量")]),t._v(" "),e("li",[e("code",[t._v("NodeList.prototype.forEach()")]),t._v("，遍历 NodeList 的所有成员")]),t._v(" "),e("li",[e("code",[t._v("NodeList.prototype.item()")]),t._v("，item 方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。")])]),t._v(" "),e("p",[t._v("下面三个方法，都返回一个 ES6 的遍历器对象，"),e("code",[t._v("for...of")]),t._v(" 可获取每一个成员信息：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("NodeList.prototype.keys()")]),t._v("，返回键名的遍历器")]),t._v(" "),e("li",[e("code",[t._v("NodeList.prototype.values()")]),t._v("，返回键值的遍历器")]),t._v(" "),e("li",[e("code",[t._v("NodeList.prototype.entries()")]),t._v("，返回的遍历器")])]),t._v(" "),e("h3",{attrs:{id:"htmlcollection-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlcollection-接口"}},[t._v("#")]),t._v(" HTMLCollection 接口")]),t._v(" "),e("p",[t._v("HTMLCollection 是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。")]),t._v(" "),e("p",[t._v("它的返回值是一个类似数组的对象，但是与 NodeList 接口不同，HTMLCollection 没有 forEach 方法，只能使用 for 循环遍历。")]),t._v(" "),e("p",[t._v("返回 HTMLCollection 实例的，主要是一些 Document 对象的集合属性，比如 "),e("code",[t._v("document.links")]),t._v("、"),e("code",[t._v("document.forms")]),t._v("、"),e("code",[t._v("document.images")]),t._v(" 等。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("HTMLCollection.prototype.length")])]),t._v(" "),e("li",[e("code",[t._v("HTMLCollection.prototype.item()")])]),t._v(" "),e("li",[e("code",[t._v("HTMLCollection.prototype.namedItem()")]),t._v("，参数是一个字符串，表示 id 属性或 name 属性的值，返回对应的元素节点。如果没有对应的节点，则返回 null。")])]),t._v(" "),e("h3",{attrs:{id:"对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),e("p",[t._v("共同点：")]),t._v(" "),e("ul",[e("li",[t._v("类数组对象，有 length 属性")]),t._v(" "),e("li",[t._v("共同的方法：item，可以通过 item(index) 或者 item(id) 来访问返回结果中的元素")]),t._v(" "),e("li",[t._v("实时变动的（live），document 上的更改会反映到相关对象上（例外："),e("code",[t._v("document.querySelectorAll")]),t._v(" 返回的 NodeList 不是实时的）")])]),t._v(" "),e("p",[t._v("区别：")]),t._v(" "),e("ul",[e("li",[t._v("NodeList 可以包含任何节点类型，HTMLCollection 只包含元素节点（elementNode），elementNode 就是 HTML 中的标签")]),t._v(" "),e("li",[t._v("HTMLCollection 比 NodeList 多一项方法：namedItem，可以通过传递 id 或 name 属性来获取节点信息")])]),t._v(" "),e("p",[t._v("参考资料：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://wangdoc.com/javascript/dom/nodelist.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeList 接口，HTMLCollection 接口"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/f6ff5ebe45fd",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLCollection vs. NodeList"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"什么是渐进式渲染（progressive-rendering）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是渐进式渲染（progressive-rendering）"}},[t._v("#")]),t._v(" 什么是渐进式渲染（progressive rendering）")]),t._v(" "),e("p",[t._v("渐进式渲染是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。")]),t._v(" "),e("p",[t._v("在以前互联网带宽较小的时期，这种技术更为普遍。如今，移动终端的盛行，而移动网络往往不稳定，渐进式渲染在现代前端开发中仍然有用武之地。")]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("ul",[e("li",[t._v("图片懒加载——页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。")]),t._v(" "),e("li",[t._v("确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容，然后可以使用延迟加载脚本或监听 DOMContentLoaded/load 事件加载其他资源和内容。")]),t._v(" "),e("li",[t._v("异步加载 HTML 片段——当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://tech.ebayinc.com/engineering/async-fragments-rediscovering-progressive-html-rendering-with-marko/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Async Fragments: Rediscovering Progressive HTML Rendering with Marko"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"img-中的-alt-和元素的-title-属性作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#img-中的-alt-和元素的-title-属性作用"}},[t._v("#")]),t._v(" img 中的 alt 和元素的 title 属性作用")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("img 的 alt 属性\n如果无法显示图像，浏览器将显示 alt 指定的内容")])]),t._v(" "),e("li",[e("p",[t._v("元素 title 属性\n在鼠标移到元素上时显示 title 的内容")])])]),t._v(" "),e("h2",{attrs:{id:"href-和-src-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#href-和-src-区别"}},[t._v("#")]),t._v(" href 和 src 区别")]),t._v(" "),e("h3",{attrs:{id:"href"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#href"}},[t._v("#")]),t._v(" href")]),t._v(" "),e("p",[t._v("href 标识超文本引用，用在 link 和 a 等元素上，href 是引用和页面关联，是在当前元素和引用资源之间建立联系。")]),t._v(" "),e("p",[t._v("若在文档中添加 href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。")]),t._v(" "),e("h3",{attrs:{id:"src"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#src"}},[t._v("#")]),t._v(" src")]),t._v(" "),e("p",[t._v("src 表示引用资源，替换当前元素，用在 img，script，iframe 上，src 是页面内容不可缺少的一部分。")]),t._v(" "),e("p",[t._v("当浏览器解析到 src ，会暂停其他资源的下载和处理（图片不会暂停其他资源下载），直到将该资源加载、编译、执行完毕，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。")]),t._v(" "),e("h2",{attrs:{id:"为何会出现浏览器兼容问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为何会出现浏览器兼容问题"}},[t._v("#")]),t._v(" 为何会出现浏览器兼容问题")]),t._v(" "),e("ul",[e("li",[t._v("同一产品，版本越老 bug 越多")]),t._v(" "),e("li",[t._v("同一产品，版本越新，功能越多")]),t._v(" "),e("li",[t._v("不同产品，不同标准，不同实现方式")])]),t._v(" "),e("h2",{attrs:{id:"处理兼容问题的思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#处理兼容问题的思路"}},[t._v("#")]),t._v(" 处理兼容问题的思路")]),t._v(" "),e("ol",[e("li",[t._v("要不要做？")])]),t._v(" "),e("ul",[e("li",[t._v("产品的角度（产品的受众、受众的浏览器比例、效果优先还是基本功能优先）")]),t._v(" "),e("li",[t._v("成本的角度 (有无必要做某件事)")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("做到什么程度？让哪些浏览器支持哪些效果？")])]),t._v(" "),e("li",[e("p",[t._v("如何做")])])]),t._v(" "),e("ul",[e("li",[t._v("根据兼容需求选择技术框架/库(jquery) 根据兼容需求选择兼容工具("),e("code",[t._v("html5shiv.js、respond.js、css reset、normalize.css、Modernizr")]),t._v(")")]),t._v(" "),e("li",[t._v("postCSS")]),t._v(" "),e("li",[t._v("条件注释、CSS Hack、js 能力检测做一些修补\n"),e("ul",[e("li",[t._v("渐进增强(progressive enhancement): 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验")]),t._v(" "),e("li",[t._v("优雅降级 (graceful degradation): 一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/jirengu/frontend-interview/issues/35",target:"_blank",rel:"noopener noreferrer"}},[t._v("为何会出现浏览器兼容问题"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"dom-和-bom-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-和-bom-有什么区别"}},[t._v("#")]),t._v(" DOM 和 BOM 有什么区别")]),t._v(" "),e("h3",{attrs:{id:"dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),e("p",[t._v("Document Object Model，文档对象模型")]),t._v(" "),e("p",[t._v("DOM 是为了操作文档出现的 API，document 是其的一个对象")]),t._v(" "),e("p",[t._v("DOM 和文档有关，这里的文档指的是网页，也就是 html 文档。DOM 和浏览器无关，他关注的是网页本身的内容。")]),t._v(" "),e("h3",{attrs:{id:"bom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),e("p",[t._v("Browser Object Model，浏览器对象模型")]),t._v(" "),e("p",[t._v("BOM 是为了操作浏览器出现的 API，window 是其的一个对象")]),t._v(" "),e("p",[t._v("window 对象既为 javascript 访问浏览器提供 API，同时在 ECMAScript 中充当 Global 对象")]),t._v(" "),e("h2",{attrs:{id:"行内元素和块级元素有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#行内元素和块级元素有哪些"}},[t._v("#")]),t._v(" 行内元素和块级元素有哪些")]),t._v(" "),e("h3",{attrs:{id:"行内元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#行内元素"}},[t._v("#")]),t._v(" 行内元素")]),t._v(" "),e("ul",[e("li",[t._v("一个行内元素只占据它对应标签的边框所包含的空间")]),t._v(" "),e("li",[t._v("一般情况下，行内元素只能包含数据和其他行内元素")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("b, big, i, small, tt\n\nabbr, acronym, cite, code, dfn, em, kbd, strong, samp, var\n\na, bdo, br, img, map, object, q, script, span, sub, sup\n\nbutton, input, label, select, textarea\n")])])]),e("h3",{attrs:{id:"块级元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#块级元素"}},[t._v("#")]),t._v(" 块级元素")]),t._v(" "),e("ul",[e("li",[t._v("占据一整行")]),t._v(" "),e("li",[t._v("高度、行高、内边距和外边距都可以改变，可以容纳块级标签和其他行内标签")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("header,form,ul,ol,table,article,div\n\nhr,aside,figure,canvas,video,audio,footer\n")])])]),e("h2",{attrs:{id:"label-标签有什么作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#label-标签有什么作用"}},[t._v("#")]),t._v(" label 标签有什么作用")]),t._v(" "),e("p",[t._v("label 标签通常是写在表单内，它关联一个控件，使用 label 可以实现点击文字选取对应的控件。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"html5-的-form-如何关闭自动完成功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-的-form-如何关闭自动完成功能"}},[t._v("#")]),t._v(" HTML5 的 form 如何关闭自动完成功能")]),t._v(" "),e("p",[t._v("将不想要自动完成的 form 或 input 设置为 "),e("code",[t._v("autocomplete=off")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/form"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autocomplete")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  […]\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("信用卡："),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autocomplete")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("在这里设置 "),e("code",[t._v('autocomplete="off"')]),t._v(" 会有两种效果：")]),t._v(" "),e("ul",[e("li",[t._v("它会阻止浏览器为了以后自动完成类似的表单来自动保存表单数据，但是浏览器是不一样的。")]),t._v(" "),e("li",[t._v("它会阻止浏览器历史记录缓存中的表单数据。当表单数据来自缓存的时候，当用户点击返回按钮来返回的时候，用户填写的信息是可见的。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何关闭表单自动填充"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"iframe-框架有那些优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iframe-框架有那些优缺点"}},[t._v("#")]),t._v(" iframe 框架有那些优缺点")]),t._v(" "),e("p",[t._v("优点：")]),t._v(" "),e("ul",[e("li",[t._v("iframe 能够原封不动的把嵌入的网页展现出来。")]),t._v(" "),e("li",[t._v("如果有多个网页引用 iframe，那么你只需要修改 iframe 的内容，就可以实现调用的每一个页面内容的更改，方便快捷。")]),t._v(" "),e("li",[t._v("网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用 iframe 来嵌套，可以增加代码的可重用。")]),t._v(" "),e("li",[t._v("如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由 iframe 来解决。")])]),t._v(" "),e("p",[t._v("缺点：")]),t._v(" "),e("ul",[e("li",[t._v("搜索引擎的爬虫程序无法解读这种页面")]),t._v(" "),e("li",[t._v("框架结构中出现各种滚动条")]),t._v(" "),e("li",[t._v("使用框架结构时，保证设置正确的导航链接。")]),t._v(" "),e("li",[t._v("iframe 页面会增加服务器的 http 请求")])]),t._v(" "),e("h2",{attrs:{id:"学习资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#学习资料"}},[t._v("#")]),t._v(" 学习资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/woai3c/Front-end-basic-knowledge/blob/master/HTML.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("2019 前端最全面试题-HTML"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);