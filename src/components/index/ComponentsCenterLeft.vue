<template>
  <div class="left">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>安装</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/components/componentsRightInstall">vue</router-link></el-menu-item>
              <el-menu-item index="1-1"><router-link to="/components/componentsRightInstall">vue-cli</router-link></el-menu-item>
              <el-menu-item index="1-1"><router-link to="/components/componentsRightInstall">webpack</router-link></el-menu-item>
              <el-menu-item index="1-1"><router-link to="/components/componentsRightInstall">element-ui</router-link></el-menu-item>
              <el-menu-item index="1-1"><router-link to="/components/componentsRightInstall">swiper</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>介绍</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/components/componentsRightRecommend">vue.js是什么</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/components/componentsRightRecommend">声明与渲染</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/components/componentsRightRecommend">条件与循环</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/components/componentsRightRecommend">组建化应用构建</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>vue实例</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/components/componentsRightCase">创建一个vue实例</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/components/componentsRightCase">实例生命周期钩子</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/components/componentsRightCase">生命周期示意图</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>API</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="componentsRightApi">全局配置</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="componentsRightApi">全局 API</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="componentsRightApi">选项 / 数据</router-link></el-menu-item>
              <el-menu-item index="1-4"><router-link to="componentsRightApi">选项 / DOM</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
 export default {
   name:'componentsCenterLeft',
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
      handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
   }
 }
</script>

<style lang='scss' scoped>
.left{
  width:230px;
  overflow-y: hidden;
  overflow-x: hidden;
  border-right:1px solid #999;
}
.el-submenu{
    width: 230px;
  }
  .el-menu-vertical-demo,.el-menu{
    background-color:transparent;
    border-right:none;
    .el-submenu{
    .el-submenu__title{
    background-color:transparent;
    span{
      color:black;
    }
  }
  }
  }
  .el-menu{
    background-color:#eee;
  }
</style>

