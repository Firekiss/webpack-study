> loader用于对模块的源代码进行转换.它们是运行在Node.js中的函数,可以将资源文件作为参数的来源,然后返回新的资源文件.

* sass-loader 将 scss 编译成 css
* css-loader 将 css 转化成 commonJS 模块

css-loader使你能够使用类似@importt,url(...)的方法实现require的功能

* style-loader 将 JS 字符串生成为 style 节点

style-loader将所有的计算后的样式加入页面中


静态资源请求地址后面有?v=或者?hash的原因

1. 可能是服务端会根据你的这个版本请求返回给你不同版本的静态资源文件
2. ?后面的参数发生了改变之后浏览器将不使用之前缓存的静态资源,而会选择从服务器上重新下载,解决了请求的文件内容发生改变浏览器依旧使用缓存的静态资源的问题.