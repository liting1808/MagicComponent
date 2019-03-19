<template>
  <div class="install_two">
    <h3>全局配置</h3>
    <p>Vue.config 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改下列属性：</p>
    <em>silent</em>
    <i>类型：boolean</i>
    <i>默认值：false</i>
    <i>用法:</i>
    <code>
      <p>Vue.config.silent = true</p>
    </code>
    <p>取消 Vue 所有的日志与警告。</p>
    <em>optionMergeStrategies</em>
    <i>类型：{ [key: string]: Function }</i>
    <i>默认值：{}</i>
    <i>用法:</i>
    <code>
      <p>Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {</p>
      <p class="textIndent">return child + 1</p>
      <p>}</p>
      <p>const Profile = Vue.extend({</p>
      <p class="textIndent">_my_option: 1</p>
      <p>})</p>
      <span>// Profile.options._my_option = 2</span>
    </code>
    <p>自定义合并策略的选项。</p>
    <label for="">合并策略选项分别接收在父实例和子实例上定义的该选项的值作为第一个和第二个参数，Vue 实例上下文被作为第三个参数传入。</label>
    <em>devtools</em>
    <i>类型：boolean</i>
    <i>默认值：true (生产版为 false)</i>
    <i>用法:</i>
    <code>
      <span>// 务必在加载 Vue 之后，立即同步设置以下内容</span>
      <p>Vue.config.devtools = true</p>
    </code>
    <p>配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。</p>
    <em>errorHandler</em>
    <i>类型：Function</i>
    <i>默认值：undefined</i>
    <i>用法:</i>
    <code>
      <p>Vue.config.errorHandler = function (err, vm, info) {</p>
      <span class="textIndent">// handle error</span>
      <span class="textIndent">// `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子</span>
      <span class="textIndent">// 只在 2.2.0+ 可用</span>
      <p>}</p>
    </code>
    <p>指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。</p>
    <em>warnHandler</em>
    <i>类型：Function</i>
    <i>默认值：undefined</i>
    <i>用法:</i>
    <code>
      <p>Vue.config.warnHandler = function (msg, vm, trace) {</p>
      <span class="textIndent">// `trace` 是组件的继承关系追踪</span>
      <p>}</p>
    </code>
    <p>为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略。</p>
     <em>ignoredElements</em>
    <i>类型：Array&lt;string | RegExp&gt;</i>
    <i>默认值：[]</i>
    <i>用法:</i>
    <code>
     <p> Vue.config.ignoredElements = [</p>
     <p class="textIndent">'my-custom-web-component',</p>
      <p class="textIndent">'another-web-component',</p>
      <span class="textIndent">// 用一个 `RegExp` 忽略所有“ion-”开头的元素</span>
      <span class="textIndent">// 仅在 2.5+ 支持</span>
      <span class="textIndent">/^ion-/</span>
      <p>]</p>
    </code>
    <p>须使 Vue 忽略在 Vue 之外的自定义元素 (e.g. 使用了 Web Components APIs)。否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于 Unknown custom element 的警告。</p>
    <em>keyCodes</em>
    <i>类型：{ [key: string]: number | Array&lt;number&gt; }</i>
    <i>默认值：{}</i>
    <i>用法:</i>
    <code>
     <p>Vue.config.keyCodes = {</p>
     <p class="textIndent">v: 86,</p>
      <p class="textIndent">f1: 112,</p>
      <span class="textIndent">// camelCase 不可用</span>
      <p class="textIndent"> mediaPlayPause: 179,</p>
      <span class="textIndent"> // 取而代之的是 kebab-case 且用双引号括起来</span>
      <p class="textIndent">"media-play-pause": 179,</p>
      <p class="textIndent">up: [38, 87]</p>
      <p>}</p>
    </code>
    <code>
      <p>&lt;input type="text" @keyup.media-play-pause="method"&gt;</p>
    </code>
    <p>给 v-on 自定义键位别名。</p>
    <h3>全局 API</h3>
    <em>Vue.extend( options )</em>
    <i>参数：{Object} options</i>
    <i>用法：</i>
    <p>使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数</p>
    <code>
      <p>&gt;div id="mount-point"&lt;&gt;/div&lt;</p>
    </code>
    <code>
      <span> // 创建构造器</span>
      <p>var Profile = Vue.extend({</p>
      <p class="textIndent">template: '&lt;p&gt;{firstName} {lastName} aka {alias}&lt;/p&gt;',</p>
      <p class="textIndent textIndent2">data: function () {</p>
      <p class="textIndent textIndent2">return {</p>
      <p class="textIndent textIndent3">firstName: 'Walter',</p>
      <p class="textIndent textIndent3">lastName: 'White',</p>
      <p class="textIndent textIndent3">alias: 'Heisenberg'</p>
      <p class="textIndent textIndent2">}</p>
      <p class="textIndent">}</p>
      <p>})</p>
      <span>// 创建 Profile 实例，并挂载到一个元素上。</span>
      <p>new Profile().$mount('#mount-point')</p>
    </code>
    <p>结果如下：</p>
    <code>
      <p>&lt;p&gt;Walter White aka Heisenberg&lt;/p&gt;</p>
    </code>
    <em>Vue.nextTick( [callback, context] )</em>
    <i>参数：{Function} [callback]</i>
    <i style="text-indent: 62px;">      {Object} [context]</i>
    <i>用法：</i>
    <p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</p>
    <code>
      <span>// 修改数据</span>
      <p>vm.msg = 'Hello'</p>
      <span>// DOM 还没有更新</span>
      <p>Vue.nextTick(function () {</p>
      <span class="textIndent">// DOM 更新了</span>
      <p>})</p>
      <span>// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)</span>
      <p>Vue.nextTick()</p>
      <p class="textIndent">.then(function () {</p>
      <span class="textIndent">// DOM 更新了</span>
      <p>})</p>
    </code>
    <em>Vue.set( target, key, value )</em>
    <i>参数：{Object | Array} target</i>
    <i style="text-indent: 62px;">{string | number} key</i>
    <i style="text-indent: 62px;">{any} value</i>
    <i>返回值：设置的值</i>
    <i>用法：</i>
    <p>向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')</p>
    <ul>
      <li>注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。</li>
    </ul>
    <em>Vue.delete( target, key )</em>
    <i>参数：{Object | Array} target</i>
    <i style="text-indent: 62px;">{string | number} key/index</i>
    <i>用法：</i>
    <p>删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。</p>
    <ul>
      <li>
        目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。
      </li>
    </ul>
    <em>Vue.directive( id, [definition] )</em>
    <i>参数：{string} id</i>
    <i style="text-indent: 62px;">{Function | Object} [definition]</i>
    <i>用法：</i>
    <p>注册或获取全局指令。</p>
    <code>
      <span>// 注册</span>
      <p>Vue.directive('my-directive', {</p>
        <p class="textIndent">bind: function () {},</p>
        <p class="textIndent">inserted: function () {},</p>
        <p class="textIndent">update: function () {},</p>
        <p class="textIndent">componentUpdated: function () {},</p>
        <p class="textIndent">unbind: function () {}</p>
      <p>})</p>

      <span>// 注册 (指令函数)</span>
      <p>Vue.directive('my-directive', function () {</p>
        <span class="textIndent">// 这里将会被 `bind` 和 `update` 调用</span>
      <p>})</p>

      <span>// getter，返回已注册的指令</span>
      <p>var myDirective = Vue.directive('my-directive')</p>
    </code>
    <em>Vue.filter( id, [definition] )</em>
    <i>参数：{string} id</i>
    <i style="text-indent: 62px;">{Function} [definition]</i>
    <i>用法：</i>
    <p>注册或获取全局过滤器</p>
    <code>
      <span>// 注册</span>
      <p>Vue.filter('my-filter', function (value) {</p>
        <span class="textIndent">// 返回处理后的值</span>
        <p>});</p>
      <span>// getter，返回已注册的过滤器</span>
      <p>var myFilter = Vue.filter('my-filter')</p>
    </code>
    <em>Vue.component( id, [definition] )</em>
    <i>参数：{string} id</i>
    <i style="text-indent: 62px;">{Function | Object} [definition]</i>
    <i>用法：</i>
    <p>注册或获取全局组件。注册还会自动使用给定的id设置组件的名称</p>
    <code>
      <span>/// 注册组件，传入一个扩展过的构造器</span>
      <p>Vue.component('my-component', Vue.extend({ /* ... */ }))</p>
        <span>// 注册组件，传入一个选项对象 (自动调用 Vue.extend)</span>
        <p>Vue.component('my-component', { /* ... */ })</p>
      <span>// 获取注册的组件 (始终返回构造器)</span>
      <p>var MyComponent = Vue.component('my-component')</p>
    </code>
    <em>Vue.use( plugin )</em>
    <i>参数:{Object | Function} plugin</i>
    <i>用法：</i>
    <p>安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。</p>
    <label>该方法需要在调用 new Vue() 之前被调用。</label>
    <p>当 install 方法被同一个插件多次调用，插件将只会被安装一次。</p>
    <em>Vue.mixin( mixin )</em>
    <i>参数:{Object} mixin</i>
    <i>用法：</i>
    <p>全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。</p>
    <h3>选项 / 数据</h3>
    <em>data</em>
    <i>类型：Object | Function</i>
    <i>限制：组件的定义只接受 function。</i>
    <i>详细：</i>
    <p>Vue 实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化。对象必须是纯粹的对象 (含有零个或多个的 key/value 对)：浏览器 API 创建的原生对象，原型上的属性会被忽略。大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象。</p>
    <label for="">一旦观察过，不需要再次在数据对象上添加响应式属性。因此推荐在创建实例之前，就声明所有的根级响应式属性。</label>
    <p>实例创建之后，可以通过 vm.$data 访问原始数据对象。Vue 实例也代理了 data 对象上所有的属性，因此访问 vm.a 等价于访问 vm.$data.a。</p>
    <label for="">以 _ 或 $ 开头的属性 不会 被 Vue 实例代理，因为它们可能和 Vue 内置的属性、API 方法冲突。你可以使用例如 vm.$data._property 的方式访问这些属性。</label>
    <p>当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。</p>
    <label for="">如果需要，可以通过将 vm.$data 传入 JSON.parse(JSON.stringify(...)) 得到深拷贝的原始数据对象。</label>
    <i>示例：</i>
    <code>
      <p>var data = { a: 1 }</p>

      <span>// 直接创建一个实例</span>
      <p>var vm = new Vue({</p>
        <p class="textIndent">data: data</p>
      <p>})</p>
      <p>vm.a // => 1</p>
      <p>vm.$data === data // => true</p>

      <span>// Vue.extend() 中 data 必须是函数</span>
      <p>var Component = Vue.extend({</p>
        <p class="textIndent">data: function () {</p>
          <p class="textIndent textIndent2">return { a: 1 }</p>
        <p class="textIndent">}</p>
      <p>})</p>
    </code>
    <p>注意，如果你为 data 属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。</p>
    <code>
      <p>data: vm => ({ a: vm.myProp })</p>
    </code>
    <em>props</em>
    <i>类型：Array&lt;string&gt; | Object</i>
    <i>详细：</i>
    <p>props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。</p>
    <i>示例：</i>
    <code>
      <span>// 简单语法</span>
      <p>Vue.component('props-demo-simple', {</p>
        <p class="textIndent">props: ['size', 'myMessage']</p>
      <p>})</p>

      <span>// 对象语法，提供校验</span>
      <p>Vue.component('props-demo-advanced', {</p>
        <p class="textIndent">props: {</p>
          <span class="textIndent textIndent2">// 检测类型</span>
          <p class="textIndent textIndent2">height: Number,</p>
          <span class="textIndent textIndent2">// 检测类型 + 其他验证</span>
          <p class="textIndent textIndent2">age: {</p>
            <p class="textIndent textIndent3">type: Number,</p>
            <p class="textIndent textIndent3">default: 0,</p>
            <p class="textIndent textIndent3">required: true,</p>
            <p class="textIndent textIndent3">validator: function (value) {</p>
              <p class="textIndent textIndent3">return value >= 0</p>
            <p class="textIndent textIndent3">}</p>
          <p class="textIndent textIndent2">}</p>
        <p class="textIndent">}</p>
      <p>})</p>
    </code>
    <em>propsData</em>
    <i>类型：{ [key: string]: any }</i>
    <i>限制：只用于 new 创建的实例中。</i>
    <i>详细：</i>
    <p>创建实例时传递 props。主要作用是方便测试。</p>
    <i>示例：</i>
    <code>
      <p>var Comp = Vue.extend({</p>
        <p class="textIndent">props: ['msg'],</p>
        <p class="textIndent">template: '&lt;div&gt;{ msg }&lt;/div&gt;'</p>
      <p>})</p>

      <p>var vm = new Comp({</p>
        <p class="textIndent">propsData: {</p>
          <p class="textIndent textIndent2">msg: 'hello'</p>
        <p class="textIndent">}</p>
      <p>})</p>
    </code>
    <em>computed</em>
    <i>类型：{ [key: string]: Function | { get: Function, set: Function } }</i>
    <i>详细：</i>
    <p>计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。</p>
    <label for="">注意如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。</label>
    <code>
      <p>computed: {</p>
        <p class="textIndent">aDouble: vm => vm.a * 2</p>
      <p>}</p>
    </code>
    <p>计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意，如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是不会被更新的。</p>
    <i>示例：</i>
    <code>
      <p>var vm = new Vue({</p>
      <p class="textIndent">data: { a: 1 },</p>
      <p class="textIndent">computed: {</p>
        <span class="textIndent textIndent2">// 仅读取</span>
        <p class="textIndent textIndent2">aDouble: function () {</p>
          <p class="textIndent textIndent3">return this.a * 2</p>
        <p class="textIndent textIndent2">},</p>
        <span class="textIndent textIndent2">// 读取和设置</span>
        <p class="textIndent">aPlus: {</p>
          <p class="textIndent textIndent2">get: function () {</p>
            <p class="textIndent textIndent3">return this.a + 1</p>
          <p class="textIndent textIndent2">},</p>
          <p class="textIndent textIndent2">set: function (v) {</p>
            <p class="textIndent textIndent3">this.a = v - 1</p>
          <p class="textIndent textIndent2">}</p>
        <p class="textIndent">}</p>
      <p>}</p>
    <p>})</p>
    <p>vm.aPlus   // => 2</p>
    <p>vm.aPlus = 3</p>
    <p>vm.a       // => 2</p>
    <p>vm.aDouble // => 4</p>
    </code>
    <em>methods</em>
    <i>类型：{ [key: string]: Function }</i>
    <i>详细：</i>
    <p>methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。</p>
    <ul>
      <li>注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。</li>
    </ul>
    <i>示例：</i>
    <code>
      <p>var vm = new Vue({</p>
        <p class="textIndent">data: { a: 1 },</p>
        <p class="textIndent">methods: {</p>
          <p class="textIndent textIndent2">plus: function () {</p>
            <p class="textIndent textIndent3">this.a++</p>
          <p class="textIndent textIndent2">}</p>
        <p class="textIndent">}</p>
      <p>})</p>
      <p>vm.plus()</p>
      <p>vm.a // 2</p>
    </code>
    <em>watch</em>
    <i>类型：{ [key: string]: string | Function | Object | Array }</i>
    <i>详细：</i>
    <p>一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。</p>
    <i>示例：</i>
    <code>
      <p>var vm = new Vue({</p>
        <p class="textIndent">data: {</p>
          <p class="textIndent textIndent2">a: 1,</p>
          <p class="textIndent textIndent2">b: 2,</p>
          <p class="textIndent textIndent2">c: 3,</p>
          <p class="textIndent textIndent2">d: 4,</p>
          <p class="textIndent textIndent2">e: {</p>
            <p class="textIndent textIndent3">f: {</p>
              <p class="textIndent  textIndent3">g: 5</p>
            <p class="textIndent  textIndent3">}</p>
          <p class="textIndent  textIndent2">}</p>
        <p class="textIndent">},</p>
        <p class="textIndent">watch: {</p>
          <p class="textIndent  textIndent2">a: function (val, oldVal) {</p>
            <p class="textIndent  textIndent3">console.log('new: %s, old: %s', val, oldVal)</p>
          <p class="textIndent  textIndent2">},</p>
          <span class="textIndent  textIndent2">// 方法名</span>
          <p class="textIndent  textIndent2"> b: 'someMethod',</p>
          <span class="textIndent  textIndent2"> // 深度 watcher</span>
          <p class="textIndent  textIndent2">c: {</p>
          <p class="textIndent  textIndent3">handler: function (val, oldVal) { /* ... */ },</p>
          <p class="textIndent  textIndent3">deep: true</p>
          <span class="textIndent  textIndent2">// 该回调将会在侦听开始之后被立即调用</span>
          <p class="textIndent  textIndent2">d: {</p>
          <p class="textIndent  textIndent3">handler: function (val, oldVal) { /* ... */ },</p>
          <p class="textIndent  textIndent3">immediate: true</p>
          <p class="textIndent  textIndent2">e: [</p>
          <p class="textIndent  textIndent3">'handle1',</p>
          <p class="textIndent  textIndent3">function handle2 (val, oldVal) { /* ... */ },</p>
          <p class="textIndent  textIndent3">{</p>
          <p class="textIndent  textIndent3"> handler: function handle3 (val, oldVal) { /* ... */ },</p>
          <p class="textIndent  textIndent3">}</p>
          <p class="textIndent  textIndent2">],</p>
          <span class="textIndent  textIndent2">// watch vm.e.f's value: {g: 5}</span>
          <p class="textIndent  textIndent2"> 'e.f': function (val, oldVal) { /* ... */ }</p>
          <p class="textIndent">}</p>
          <p>})</p>
          <p>vm.a = 2 // => new: 2, old: 1</p>
    </code>
    <ul>
      <li>
        注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。
      </li>
    </ul>
    <h3>选项 / DOM</h3>
    <em>el</em>
    <i>类型：string | Element</i>
    <i>限制：只在由 new 创建的实例中遵守</i>
    <i>详细：</i>
    <p>提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例</p>
    <label for="">在实例挂载之后，元素可以用 vm.$el 访问。</label>
    <p>如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 vm.$mount() 手动开启编译。</p>
    <ul>
      <li>提供的元素只能作为挂载点。不同于 Vue 1.x，所有的挂载元素会被 Vue 生成的 DOM 替换。因此不推荐挂载 root 实例到 &lt;html&gt; 或者 &lt;body&gt; 上。</li>
    </ul>
    <ul>
      <li>如果 render 函数和 template 属性都不存在，挂载 DOM 元素的 HTML 会被提取出来用作模板，此时，必须使用 Runtime + Compiler 构建的 Vue 库。</li>
    </ul>
    <em>template</em>
    <i>类型：string</i>
    <i>详细：</i>
    <p>一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。</p>
    <label for="">如果值以 # 开始，则它将被用作选择符，并使用匹配元素的 innerHTML 作为模板。常用的技巧是用 &lt;script type="x-template"&gt; 包含模板。</label>
    <ul>
      <li>出于安全考虑，你应该只使用你信任的 Vue 模板。避免使用其他人生成的内容作为你的模板。</li>
    </ul>
    <ul>
      <li>如果 Vue 选项中包含渲染函数，该模板将被忽略。</li>
    </ul>
    <em>render</em>
    <i>类型：(createElement: () => VNode) => VNode</i>
    <i>详细：</i>
    <p>字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。</p>
    <label for="">如果组件是一个函数组件，渲染函数还会接收一个额外的 context 参数，为没有实例的函数组件提供上下文信息。</label>
    <ul>
      <li>Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。</li>
    </ul>
    <em>renderError</em>
    <i>类型：(createElement: () => VNode, error: Error) => VNode</i>
    <i>详细：</i>
    <p>当 render 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 renderError。这个功能配合 hot-reload 非常实用。</p>
    <i>示例：</i>
    <code>
      <P>new Vue({</P>
        <P class="textIndent">render (h) {</P>
          <P class="textIndent textIndent2">throw new Error('oops')</P>
        <P class="textIndent">},</P>
        <P class="textIndent">renderError (h, err) {</P>
          <P class="textIndent textIndent2">return h('pre', { style: { color: 'red' }}, err.stack)</P>
        <P class="textIndent">}</P>
      <P>}).$mount('#app')</P>
    </code>



 </div>
</template>

<script>
 export default {
   name:'apiVue',
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
  em{
    display: flex;
    font-size: 18px;
    line-height: 2;
    font-weight: 600;
    margin-top:20px;
    color:blueviolet;
  }
  i{
    display: flex;
    font-size: 16px;
    line-height: 2;
    text-indent: 16px;

  }
}


</style>
