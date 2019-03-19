<template>
  <div class="install_two">
    <h3>Vue</h3>
      <p>
      在用 Vue 构建大型应用时推荐使用 NPM 安装。NPM 能很好地和诸如 <a href="https://webpack.js.org/">webpack</a> 或 <a href="http://browserify.org/">Browserify</a> 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。
      </p>
    <code>
      <span># 最新稳定版</span>
      <p>$ npm install vue</p>
    </code>
    <h3>Vue CLI</h3>
    <p>Vue CLI 需要 <a href="https://nodejs.org/en/">Node.js</a> 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 <a href="https://github.com/creationix/nvm">nvm</a> 或 <a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a> 在同一台电脑中管理多个 Node 版本。</p>
    <label>可以使用下列任一命令安装这个新的包：</label>
    <code>
      <p>$ npm install -g @vue/cli</p>
      <span># OR</span>
      <p>$ yarn global add @vue/cli</p>
    </code>
    <p>安装之后，你就可以在命令行中访问 vue 命令。你可以通过简单运行 vue，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。</p>
    <label>你还可以用这个命令来检查其版本是否正确 (3.x)</label>
    <code>
      <p>vue --version</p>
    </code>
    <h3>Webpack</h3>
    <p>webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。</p>
    <code>
      <p>$ npm install --save-dev webpack</p>

    </code>
    <h3>Vue CLI + Webpack</h3>
    <p>当Vue CLI 和 Webpack都安装好之后,执行下列命令：</p>
    <code>
      <p>$ vue init webpack-simple(模板名，就是你的项目的名称)</p>
    </code>
    <p>在项目文件下打开cmd窗口，并执行下列命令：</p>
    <code>
      <p>$ npm install</p>
    </code>
    <p>这时候我们需要等待一小会，npm在为我们下载基于node的一些文件,然后你会发现多了一个node——modules文件，里面是node的一些模块,然后再命令行接着执行下列命令进行运行:</p>
    <code>
      <p>$ npm run dev</p>
    </code>
    <h3>Element UI</h3>
    <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <code>
      <p>$ npm install element-ui -S</p>
    </code>
    <b>引入 Element</b>
    <label>在 main.js 中写入以下内容：</label>
    <code>
      <p>import ElementUI from 'element-ui';</p>
      <p>import 'element-ui/lib/theme-chalk/index.css';</p>
      <p>Vue.use(ElementUI);</p>
    </code>
    <h3>Swiper</h3>
    <p>Swiper 是一款免费以及轻量级的移动设备触控滑块的js框架，使用硬件加速过渡（如果该设备支持的话）。主要使用于移动端的网站、移动web apps，native apps和hybrid apps。主要是为IOS而设计的，同时，在Android、WP8系统也有着良好的用户体验，Swiper从3.0开始不再全面支持PC端。因此，如需在PC上兼容更多的浏览器，可以选择<a href="https://2.swiper.com.cn/">Swiper2.x</a>（甚至支持IE7）</p>
    <code>
      <p>$ npm install vue-awesome-swiper --save</p>
    </code>
    <b>引入 Swiper</b>
    <label>在 main.js 中写入以下内容：</label>
    <code>
      <p>import VueAwesomeSwiper from 'vue-awesome-swiper'</p>
      <span>// require styles</span>
      <p>import 'swiper/dist/css/swiper.css'</p>
      <p>Vue.use(VueAwesomeSwiper, /* { default global options } */)</p>
    </code>
  </div>
</template>

<script>
 export default {
   name:'installVue',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.install_two{
  margin-top:20px;
  h3{
    font-size: 28px;
    color:#999;
    cursor: pointer;
    padding-left:20px;
    border-bottom:1px solid #999;
    padding-bottom:20px;
    width:73%;
    margin-bottom:20px;
  }

  p{
    font-size: 16px;
    color:black;
    line-height: 32px;
    width:77%;
    text-indent: 32px;

    a{
      color:blueviolet;
      text-align: left;
      display: inline-block;
      text-indent: 0px;
    }
  }

  code{
    flex-direction: column;
    span{
      color:gray;
    }
    p{
      text-indent: 0px;
    }
  }
  label{
    margin-top:30px;
    text-indent: 32px;
    font-size: 16px;
  }
  b{
    display: block;
    font-size: 16px;
    color:#999;
    padding-top:10px;
    text-indent: 32px;
  }
}

</style>
