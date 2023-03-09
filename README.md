# xiaoyou.github.io

访问地址：https://mr-wang-de-jun.github.io/xiaoyou.github.io/

基于vue开发的移动端商城，所有的内容都是请求的mock平台自己创建的测试接口

所使用的组件库：
1.vant手机app移动端组件库:https://vant-contrib.gitee.io/vant/#/zh-CN/sku

vant中可能会遇到的技术难点：

①.用组件的时候跟文档上的样式不一致，其主要原因是有些特定的组件需要引入特定的文件，比如城市的三级联动需要引入city.js文件，页面的样式效果需要引入一个.css后缀的文件，具体引入什么文件还需看使用的是什么样的组件，然后进行百度下载源码，创建一个相应的文件放进去

②.无法达到预期的效果，使用了该组件后无法达到自己想要的效果样式，主要原因是没有看每一个组件下面的api介绍和数据结构与函数调用的解释，使用之后发现效果不理想可往下查找文档介绍，有时候也无法达到效果就需要自己进行一个修改

2.BetterScroll 2.0横竖屏滚动：https://better-scroll.github.io/docs/zh-CN/guide/base-scroll.html#%E4%B8%8A%E6%89%8B

BetterScroll 2.0可能遇到的难点：

①.当给滑动的条目添加点击事件的时候无法跳转，需要注意添加以下代码

```js
   this.bs = new BScroll(this.$refs.scroll, {
     probeType: 3,
     // 允许点击事件
     click: true,
     // 允许沿Y轴进行滚动
     scrollY: true,
     // 加入这句话让内容在移动端也能滚动，如果不加的话在移动端就滚动不了
     eventPassthrough: 'vertical'
   })
```

②.有的时候会发现滚动条无法滚动，其实主要原因是可视区超出了屏幕的高度或者是宽度，我们可以进行一个函数封装，针对不同手机的可视区高度做一个判断，然后将组件的高度设置为此高度便可继续滚动

3.Element ui3：https://element.eleme.cn/#/zh-CN

这个组件库使用的不是很多，因为主页的轮播图用了这个组件，感觉不是很适合移动端开发后面就没使用过了，主要的问题是更改其原有的样式比较麻烦（个人感觉不好用）

开发这个项目遇到的主要问题：

1.项目的数据存储问题，需要通过vuex进行存储，一开始存储起来很费劲，经过一段时间的使用后就适应了，主要就是commit提交与state的使用与props的传递，可以实现数据的双向获取，与存储

2.开发购物车页面的时候进行商品购买时出现了数据渲染的错误，主要还是对数据结构的构思出现了问题，一开始想的是使用数组存储，导致数据渲染的时候出现内容重复出现叠加问题，最后使用对象进行存储就解决了这个数据渲染问题

vue打包所使用的配置文件
```js
module.exports = {
  // 公共路径(必须有的)
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave: false,
  // 我用的only，打包后小些
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  // css相关配置(我暂时没用到)
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true
    // 开启 CSS source maps?
    // sourceMap: false,
    // css预设器配置项
    // loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // npm run serve后自动打开页面
    host: '127.0.0.1', // 匹配本机IP地址(默认是0.0.0.0)
    port: 8080, // 开发服务器运行端口号
    proxy: null
    // 注：目前本项目暂时没有写后台接口，没有跨域问题，暂时不配置proxy
  }
}
// 差不多就这些的，其余的大家可以查看官方文档，链接上边给出了
```
