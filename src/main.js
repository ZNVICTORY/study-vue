//这是所有js 入口的文件

//导入Vue
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter);
//1.3导入自定义的router.js 路由模块
import router from  './router.js'
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
import axios from 'axios';
Vue.use(axios);
//注册Vuex
import Vuex from 'vuex'
Vue.use(Vuex);

//每次进入网站 ， 肯定会调用 main.js ,在刚调用的时候，先从本地存储中，把购物车的数据读出来，放到store中
var car  = JSON.parse(localStorage.getItem("car") ||"[]");

 var store  =new Vuex.Store({
     state:{//this.$store.state.***
         car:car//将购物车中的数据，用一个数组存储起来，在car 数组中存储一些商品对象
                 //{id:商品的id，count：商品购买的数量，price：商品的单价，selected：false}
     },
     mutations:{//this.$store.commit("方法名"，"按需传递唯一的参数")
          addToCar(state,goodsinfo){
              var flag = false;//默认没选中
              state.car.some(item =>{

                  if (item.id === goodsinfo.id)
                  {
                      item.count = item.count+parseInt(goodsinfo.count);
                      flag=true;
                      return true;
                  }
              });
              if (!flag){
                  state.car.push(goodsinfo);
              }
          //    当更新 car 之后，把car 数组存储到本地的 localStorage 中
              localStorage.setItem("car",JSON.stringify(state.car))
          },
         updateGoodsinfo(state,goodsinfo){
              //修改购物车中商品的数量
             state.car.some(item =>{
                 if(item.id == goodsinfo.id){
                     item.count = parseInt(goodsinfo.count);
                     return true;
                 }
             });
         //    当修改完商品的数量后，把最新的数量保存到本地存储中
             localStorage.setItem("car",JSON.stringify(state.car))
         },
         removeFormCar(state,id){

              state.car.some((item,i)=>{
                  if (item.id == id){
                      state.car.splice(i,1);
                      console.log(id);
                      return true;
                  }
              });
              localStorage.setItem("car",JSON.stringify(state.car));
         },
         updateGoodsSelected(state,info){
              state.car.some(item=>{
                  if(item.id == info.id){
                      item.selected = info.selected;
                  }
              });
             localStorage.setItem("car",JSON.stringify(state.car));
         }
     },
     getters:{//this.$store.getters.***
         getAllCount(state){
             var c = 0;
             state.car.forEach(item =>{
                 c+=item.count;
             });
             return c;
         },
         getGoodsCount(state){
             var o = {};
             state.car.forEach(item =>{
                 o[item.id] = item.count;
             });
             return o;
         },
         getGoodsSelect(state){
             var o = {};
                 state.car.forEach(item=>{
                     // console.log(item.id+"hahaa");
                     o[item.id] = item.selected;
             });
             return  o;
         },
         getCountAndAmout(state){
            var o ={
                count:0,//勾选的数量

                amount:0//勾选的总价
            };
            state.car.forEach(item =>{
                if (item.selected){
                    o.count += item.count;
                    o.amount +=item.price*item.count;
                }
            });
            return o;
         }
     }
 });



Vue.http.options.root="";//设置请求的根路径
//全局设置post时，表单数据的格式组织形式
Vue.http.options.emulateJSON = true;
//导入时间插件
import moment from 'moment';
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
//定义全局过滤器
Vue.filter("dataformat",function (dataStr,pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern);
});



//导入MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入组件
import { Header, Swipe, SwipeItem ,Button,Lazyload,Switch,Spinner} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.component(Spinner.name, Spinner)
Vue.use(Lazyload);






//导入APP根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router,//挂在路由对象到VM实例上
    store//将store 挂载到 VM实例上
});