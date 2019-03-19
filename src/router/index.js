import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import componentsIndexSelection from '@/components/componentsIndexSelection';
import componentsRightInstall from '@/components/right/install';
import componentsRightRecommend from '@/components/right/recommend';
import componentsRightCase from '@/components/right/case';
import componentsRightApi from '@/components/right/api';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:"index",
      component:index
    },
    {
      path:"/components/",
      name: 'componentsIndexSelection',
      component: componentsIndexSelection,
      children:[
        {
          path: '/components/componentsRightInstall',
          name: 'componentsRightInstall',
          component:componentsRightInstall
        },
        {
          path:'/components/componentsRightRecommend',
          name: 'componentsRightRecommend',
          component:componentsRightRecommend
        },
        {
          path:'/components/componentsRightCase',
          name: 'componentsRightCase',
          component:componentsRightCase
        },
        {
          path:'/components/componentsRightApi',
          name: 'componentsRightApi',
          component:componentsRightApi
        }
      ]
    },

  ]
})
