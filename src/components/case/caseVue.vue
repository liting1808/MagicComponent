<template>
  <div class="install_two">
    <h3>创建一个 Vue 实例</h3>
      <p>
      每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：
      </p>

    <code>
      <p>var vm = new Vue({</p>
      <span class="textIndent">// 选项</span>
      <p>});</p>
    </code>
    <p>
      虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。
    </p>
    <label>
      当创建一个 Vue 实例时，你可以传入一个选项对象。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为。作为参考，你也可以在 API 文档 中浏览完整的选项列表。
    </label>
    <p>
      一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。举个例子，一个 todo 应用的组件树可以是这样的：
    </p>
    <code>
      <p>根实例</p>
      <p class="textIndent">└─ TodoList</p>
      <p class="textIndent textIndent2"> ├─ TodoItem</p>
      <p class="textIndent textIndent2">│  ├─ DeleteTodoButton</p>
      <p class="textIndent textIndent2">│  └─ EditTodoButton</p>
      <p class="textIndent textIndent2">└─ TodoListFooter</p>
      <p class="textIndent textIndent3">├─ ClearTodosButton</p>
      <p class="textIndent textIndent3">└─ TodoListStatistics</p>
    </code>
    <p>
      我们会在稍后的组件系统章节具体展开。不过现在，你只需要明白所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。
    </p>
    <h3>数据与方法</h3>
    <p>
      当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
    </p>
    <code>
      <span>// 我们的数据对象</span>
      <p>var data = { a: 1 }</p>
      <span>// 该对象被加入到一个 Vue 实例中</span>
      <p>var vm = new Vue({</p>
      <p class="textIndent">data: data</p>
      <p>})</p>
      <span>// 获得这个实例上的属性</span>
      <span>// 返回源数据中对应的字段</span>
      <p>vm.a == data.a // => true</p>
      <span>// 设置属性也会影响到原始数据</span>
      <p>vm.a = 2</p>
      <p>data.a // => 2</p>
      <span>// ……反之亦然</span>
      <p>data.a = 3</p>
      <p>vm.a // => 3</p>
    </code>
    <p>当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的。也就是说如果你添加一个新的属性，比如：</p>
    <code>
      <p>vm.b = 'hi'</p>
    </code>
    <p>那么对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：</p>
    <code>
      <p> data: {</p>
      <p class="textIndent">newTodoText: '',</p>
      <p class="textIndent">visitCount: 0,</p>
      <p class="textIndent">hideCompletedTodos: false,</p>
      <p class="textIndent">todos: [],</p>
      <p class="textIndent">error: null</p>
      <p>}</p>
    </code>
    <p>这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。</p>
    <code>
      <p> var obj = {</p>
      <p class="textIndent">foo: 'bar'</p>
      <p>}</p>
      <p>Object.freeze(obj)</p>
      <p>new Vue({</p>
      <p class="textIndent">el: '#app',</p>
      <p class="textIndent">data: obj</p>
      <p>})</p>
    </code>
    <code>
      <p>&lt;div id="app"&gt;</p>
      <p class="textIndent">&lt;p&gt;{ foo }&lt;/p&gt;</p>
      <span class="textIndent">&lt;!-- 这里的 `foo` 不会更新！ --&gt;</span>
      <p class="textIndent">&lt;button v-on:click="foo = 'baz'"&gt;Change it&lt;/button&gt;</p>
      <p>&lt;/div&gt;</p>
    </code>
    <p>除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来。例如：</p>
    <code>
      <p>var data = { a: 1 }</p>
      <p>var vm = new Vue({</p>
      <p class="textIndent">el: '#example',</p>
      <p class="textIndent">data: data</p>
      <p>})</p>
      <p>vm.$data === data // => true</p>
      <p>vm.$el === document.getElementById('example') // => true</p>
      <span>// $watch 是一个实例方法</span>
      <p>vm.$watch('a', function (newValue, oldValue) {</p>
      <span class="textIndent">// 这个回调将在 `vm.a` 改变后调用</span>
      <p>})</p>
    </code>
    <p>以后你可以在 API 参考中查阅到完整的实例属性和方法的列表。</p>
    <h3>实例生命周期钩子</h3>
    <p>每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。</p>
    <label>比如 created 钩子可以用来在一个实例被创建之后执行代码：</label>
    <code>
      <p>new Vue({</p>
      <p>data: {</p>
      <p class="textIndent">a: 1</p>
      <p>},</p>
      <p>created: function () {</p>
      <span class="textIndent">// `this` 指向 vm 实例</span>
      <p class="textIndent">console.log('a is: ' + this.a)</p>
      <p class="textIndent">}</p>
      <p>})</p>
      <span>// => "a is: 1"</span>
    </code>
    <p>也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 mounted、updated 和 destroyed。生命周期钩子的 this 上下文指向调用它的 Vue 实例。</p>
    <ul>
      <li>
      不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。
      </li>
    </ul>
    <h3>生命周期图示</h3>
    <p>下图展示了实例的生命周期。你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。</p>
    <img src="static/img/lifecycle.png"/>


  </div>
</template>

<script>
 export default {
   name:'caseVue',
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
