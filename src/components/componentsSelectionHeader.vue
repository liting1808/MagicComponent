<template>
  <div class="header">
    <h3></h3>
    <ul>
      <li class="student">学习
        <div class="stud">
          <ul>
            <li>安装</li>
            <li>介绍</li>
            <li>Vue 实例</li>
            <li>API</li>
          </ul>
        </div>
      </li>
      <li class="student">生态系统
        <div class="stud stud1">
          <ul>
            <li>安装</li>
            <li>介绍</li>
            <li>Vue 实例</li>
            <li>API</li>
          </ul>
        </div>
      </li>
      <li>团队</li>
      <li class="student">支持 Vue
        <div class="stud">
          <ul>
            <li>一次性赞助</li>
            <li>周期性赞助</li>
            <li>贴纸</li>
          </ul>
        </div>
      </li>
      <li class="student">多语言
        <div class="stud">
          <ul>
            <li>English</li>
            <li>简体中文</li>
            <li>繁体中文</li>
            <li>日本语</li>
          </ul>
        </div>
      </li>
      <li>参与翻译</li>
    </ul>
  </div>
</template>

<script>
 export default {
   name:'componentsSelectionHeader',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.header{
  height:100px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:1px solid gray;
  h3{
    margin-left:20px;
    height:70px;
    width:150px;
    background:url(../assets/img/1552655378_735584.png) no-repeat;
    background-size: 150px 70px;
  }
  ul{
    display: flex;
    margin-right:50px;
    li{
      padding:10px;
      margin:10px;
      font-size: 18px;
      box-sizing:border-box;
      border-bottom:2px solid transparent;
    }
    li:hover{
      border-bottom:2px solid gray;
    }
  }
}
.student{
  position: relative;
  .stud{
    position: absolute;
    border:1px solid gray;
    border-radius: 5px;
    width:150px;
    background:white;
    left:-40px;
    top:30px;
    display: none;
    ul{
      flex:1;
      display: flex;
      flex-direction: column;
      li{
        width:100%;
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .stud1{
    left:-20px;
  }
}
.student:hover{
  .stud{
    display: block;
  }
}
</style>
