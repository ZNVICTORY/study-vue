import  Vue  from  'vue'
//导入路由模块
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter);
//导入对应的路由组件
import Home from './components/Tabbar/homeContainer.vue'
import Member from './components/Tabbar/MemberContainer.vue'
import Search from './components/Tabbar/SearchContainer.vue'
import Shopcar from './components/Tabbar/ShopcarContainer.vue'
import  NewList from './components/news/newlist.vue'
import NewInfo from './components/news/newinfo.vue'
import Photo from './components/photo/photolist.vue'
import PhotoInfo from './components/photo/photoinfo.vue'
import GoodsList from './components/goods/goodslist.vue'
import GoodsInfo from './components/goods/goodsinfo.vue'
import GoodDesc from './components/goods/goodDesc.vue'
import GoodComment from './components/goods/goodComment.vue'
import QiangDa from './components/qiandao/qiangDa.vue';
import Communicate from './components/qiandao/communicate.vue';


//创建路由对象
var router = new VueRouter({
    routes:[
        //配置路由规则
        { path:'/',redirect:"/home"},//路由重定向
        { path: '/home' , component:Home },
        { path: '/member' , component:Member },
        { path: '/shopcar' , component:Shopcar },
        { path: '/search' , component:Search },
        { path: '/home/newlist', component:NewList},
        { path:'/home/newinfo/:id', component:NewInfo},
        { path: '/home/photolist' , component:Photo},
        { path: '/home/photoinfo/:id' , component:PhotoInfo},
        { path:'/home/goodslist' , component:GoodsList},
        { path:'/home/goodsinfo/:id' ,component:GoodsInfo,name:"goodsinfo"},
        { path:"/home/goodDesc/:id",component:GoodDesc},
        { path:"/home/goodComment/:id",component:GoodComment},
        { path:"/home/qiangda",component:QiangDa},
        { path:'/home/communicate',component:Communicate}
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由，高亮的类，默认的类叫做router-link-active
});
//把路由对象暴露出去
export default router;