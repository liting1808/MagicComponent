<template>
  <div class="install_two">
    <h3>Vue.js 是什么</h3>
      <p>
      Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
      </p>
      <br>
      <p>如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。</p>
      <br>
      <p>如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。</p>

    <h3>声明式渲染</h3>
    <p>Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统:</p>

    <code>
      <p>&lt;div id="app"&gt;</p>
      <p class="textIndent"> {message} </p>
      <p>&lt;/div&gt;</p>
    </code>
    <code>
      <p>var app = new Vue({</p>
      <p class="textIndent">el: '#app',</p>
      <p class="textIndent">data: {</p>
      <p class="textIndent textIndent2">message: 'Hello Vue!'</p>
      <p class="textIndent">}</p>
      <p>})</p>
    </code>
    <ul>
      <li>Hello Vue!</li>
    </ul>
    <p>
      我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。我们要怎么确认呢？打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 app.message 的值，你将看到上例相应地更新。
    </p>
    <label>除了文本插值，我们还可以像这样来绑定元素特性：</label>
    <code>
      <p>&lt;div id="app-2"&gt;
      <p class="textIndent">&lt;span v-bind:title="message"&gt;</p>
      <p class="textIndent textIndent2">鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>
      <p class="textIndent">&lt;/span&gt;</p>
      <p>&lt;/div&gt;</p>
    </code>
    <code>
      <p>var app2 = new Vue({</p>
      <p class="textIndent">el: '#app-2',</p>
      <p class="textIndent textIndent2">data: {</p>
          <p class="textIndent textIndent3">message: '页面加载于 ' + new Date().toLocaleString()</p>
        <p class="textIndent textIndent2">}</p>
      <p class="textIndent">});</p>
    </code>
    <ul>
      <li>鼠标悬停几秒钟查看此处动态绑定的提示信息！</li>
    </ul>
    <p>这里我们遇到了一点新东西。你看到的 v-bind 特性被称为指令。指令带有前缀 v-，以表示它们是 Vue 提供的特殊特性。可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为。在这里，该指令的意思是：“将这个元素节点的 title 特性和 Vue 实例的 message 属性保持一致”。</p>
    <p>如果你再次打开浏览器的 JavaScript 控制台，输入 app2.message = '新消息'，就会再一次看到这个绑定了 title 特性的 HTML 已经进行了更新。</p>
    <h3>条件与循环</h3>
    <label>控制切换一个元素是否显示也相当简单：</label>
    <code>
      <p>&lt;div id="app-3"&gt;</p>
      <p class="textIndent">&lt; p v-if="seen"&gt;现在你看到我了&lt;/p&gt;</p>
      <p>&lt;/div&gt;</p>
    </code>
    <code>
      <p>var app3 = new Vue({</p>
      <p class="textIndent">el: '#app-3',</p>
      <p class="textIndent textIndent2">data: {</p>
          <p class="textIndent textIndent3">seen: true</p>
        <p class="textIndent textIndent2">}</p>
      <p class="textIndent">});</p>
    </code>
    <ul>
      <li>现在你看到我了</li>
    </ul>
    <label>继续在控制台输入 app3.seen = false，你会发现之前显示的消息消失了。</label>
    <p>这个例子演示了我们不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM 结构。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用过渡效果。</p>
    <label>还有其它很多指令，每个都有特殊的功能。例如，v-for 指令可以绑定数组的数据来渲染一个项目列表：</label>
    <code>
      <p>&lt;div id="app-4"&gt;</p>
      <p class="textIndent">&lt;ol&gt;</p>
      <p class="textIndent textIndent2">&lt; li v-for="todo in todos"&gt;</p>
      <p class="textIndent textIndent3">{todo.text}</p>
      <p class="textIndent textIndent2">&lt;/li&gt;</p>
      <p class="textIndent">&lt;/ol&gt;</p>
      <p>&lt;/div&gt;</p>
    </code>
    <code>
      <p>var app4 = new Vue({</p>
      <p class="textIndent">el: '#app-4',</p>
      <p class="textIndent textIndent2">data: {</p>
          <p class="textIndent textIndent3">todos: [</p>
          <p class="textIndent textIndent3">{ text: '学习 JavaScript' },</p>
          <p class="textIndent textIndent3">{ text: '学习 Vue' },</p>
          <p class="textIndent textIndent3">{ text: '整个牛项目' }</p>
          <p class="textIndent textIndent3">]</p>
        <p class="textIndent textIndent2">}</p>
      <p class="textIndent">});</p>
    </code>
    <ul>
      <li>1. 学习 JavaScript</li>
      <li>2. 学习 Vue</li>
      <li>3. 整个牛项目</li>
    </ul>
    <p>在控制台里，输入 app4.todos.push({ text: '新项目' })，你会发现列表最后添加了一个新项目。</p>
    <h3>组件化应用构建</h3>
    <p>组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：</p>
    <img src="static/img/components.png"/>
    <p>在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。在 Vue 中注册组件很简单：</p>
    <code>
      <span>// 定义名为 todo-item 的新组件</span>
      <p>Vue.component('todo-item', {</p>
      <p class="textIndent">template: '&lt;li&gt;这是个待办项&lt;/li&gt;'</p>
      <p>});</p>
    </code>
    <label>现在你可以用它构建另一个组件模板：</label>
    <code>
      <p>&lt;ol&gt;</p>
      <span class="textIndent">&lt;!-- 创建一个 todo-item 组件的实例 --&gt;</span>
      <p class="textIndent">&lt;todo-item&gt;&lt;/todo-item&gt;</p>
      <p>&lt;/ol&gt;</p>
    </code>
    <p>但是这样会为每个待办项渲染同样的文本，这看起来并不炫酷。我们应该能从父作用域将数据传到子组件才对。让我们来修改一下组件的定义，使之能够接受一个 prop：</p>
    <code>
      <p>Vue.component('todo-item', {</p>
      <span class="textIndent">// todo-item 组件现在接受一个</span>
      <span class="textIndent">// "prop"，类似于一个自定义特性。</span>
      <span class="textIndent">// 这个 prop 名为 todo。</span>
      <p class="textIndent">props: ['todo'],</p>
      <p class="textIndent textIndent2">template: '&lt;li&gt;{ todo.text }&lt;/li&gt;'</p>
      <p>})</p>
    </code>
    <label>现在，我们可以使用 v-bind 指令将待办项传到循环输出的每个组件中：</label>
    <code>
      <p>&lt;div id="app-7"&gt;</p>
      <p class="textIndent">&lt;ol&gt;</p>
      <span class="textIndent textIndent2">&lt;!--</span>
      <span class="textIndent textIndent3">现在我们为每个 todo-item 提供 todo 对象</span>
      <span class="textIndent textIndent3">todo 对象是变量，即其内容可以是动态的。</span>
      <span class="textIndent textIndent3">我们也需要为每个组件提供一个“key”，稍后再</span>
      <span class="textIndent textIndent3">作详细解释。</span>
      <span class="textIndent textIndent2">--&gt;</span>
      <p class="textIndent textIndent2">&lt;todo-item</p>
      <p class="textIndent textIndent3">v-for="item in groceryList"</p>
      <p class="textIndent textIndent3">v-bind:todo="item"</p>
      <p class="textIndent textIndent3">v-bind:key="item.id"</p>
      <p class="textIndent textIndent2">&gt;&lt;/todo-item&gt;</p>
      <p class="textIndent">&lt;/ol&gt;</p>
      <p>&lt;/div&gt;</p>
    </code>
    <code>
      <p>Vue.component('todo-item', {</p>
      <p class="textIndent">props: ['todo'],</p>
      <p class="textIndent textIndent2">template: '&lt;li&gt;{ todo.text }&lt;/li&gt;'</p>
      <p>})</p>
      <p>var app7 = new Vue({</p>
      <p class="textIndent"> el: '#app-7',"</p>
      <p class="textIndent">data: {</p>
      <p class="textIndent textIndent2">groceryList: [</p>
      <p class="textIndent textIndent3"> { id: 0, text: '蔬菜' },</p>
      <p class="textIndent textIndent3">  { id: 1, text: '奶酪' },</p>
      <p class="textIndent textIndent3"> { id: 2, text: '随便其它什么人吃的东西' }</p>
      <p class="textIndent textIndent2">]</p>
      <p class="textIndent">}</p>
      <p>});</p>
    </code>
    <ul>
      <li>1. 蔬菜</li>
      <li>2. 奶酪</li>
      <li>3. 随便其它什么人吃的东西</li>
    </ul>
    <p>尽管这只是一个刻意设计的例子，但是我们已经设法将应用分割成了两个更小的单元。子单元通过 prop 接口与父单元进行了良好的解耦。我们现在可以进一步改进 &lt;todo-item&gt; 组件，提供更为复杂的模板和逻辑，而不会影响到父单元。</p>
    <label>在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理。在后续教程中我们将详述组件，不过这里有一个 (假想的) 例子，以展示使用了组件的应用模板是什么样的：</label>
    <code>
      <p>&lt;div id="app"&gt;</p>
      <p class="textIndent">&lt;app-nav&gt;&lt;/app-nav&gt;</p>
      <p class="textIndent">&lt;app-view&gt;</p>
      <p class="textIndent textIndent2">&lt;app-sidebar&gt;&lt;/app-sidebar&gt;</p>
      <p class="textIndent textIndent2">&lt;app-content&gt;&lt;/app-content&gt;</p>
      <p class="textIndent">&lt;/app-view&gt;</p>
      <p>&lt;/div&gt;</p>
    </code>


  </div>
</template>

<script>
 export default {
   name:'recommendVue',
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
     fun(){
       let str = document.querySelectorAll("h3");
       console.log("所有h3",str);
       for(let i=0;i<str.length;i++){
         str[i].onclick=function(){
           let ss = this;
          //  let tt=this.scrollTop();
           console.log("h3",ss);
          //  console.log("h3的top",tt);
         }
       }
     }
   },
   mounted(){
     this.fun();
   }
 }
</script>

<style lang='scss' scoped>
.install_two{
  margin-top:20px;
  padding-bottom:20px;
  h3{
    font-size: 28px;
    color:#999;
    cursor: pointer;
    padding-left:20px;
    border-bottom:1px solid #999;
    padding-bottom:20px;
    width:73%;
    margin-bottom:20px;
    margin-top:20px;
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
      line-height: 2;
    }
    p{
      text-indent: 0px;
    }
  }
  label{
    margin-top:30px;
    text-indent: 32px;
    font-size: 16px;
    margin-bottom:20px;
    width:70%;
    line-height: 2;
  }
  b{
    display: block;
    font-size: 16px;
    color:#999;
    padding-top:10px;
    text-indent: 32px;
  }
  .textIndent{
    text-indent: 16px;
  }
  .textIndent2{
    text-indent: 32px;
  }
  .textIndent3{
    text-indent: 48px;
  }
  ul{
    width:70%;
    border:1px solid rgb(202, 200, 200);
    background:rgb(252, 252, 252);
    padding:20px;
    border-radius: 4px;
    margin-bottom:20px;
    li{
      font-size: 18px;
      color:rgb(32, 31, 31);
      line-height: 32px;
    }
  }
  img{
    display: block;
    width:70%;
    margin-top:20px;
    margin-bottom:20px;
    margin-left:20px;
  }
}


</style>
