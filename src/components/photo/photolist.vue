<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="[ 'mui-control-item',item.id===0?'mui-active' :'']" v-for="item in cates" :key="item.id" @click="getPhotoList(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>

        </div>


        <!--图片列表区域-->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img  v-lazy="item">
                <div class="info">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-body"> {{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    //导入 mui 的js 的文件
    import mui from '../../lib/mui/js/mui.js'
    import { Toast } from 'mint-ui'
    export default {
        name: "photolist",
        data(){
             return{
                 cates:[
                     {title:"全部",id: 0},
                     {title:"家具生活",id: 1},
                     {title:"摄影设计",id: 2},
                     {title:"明星美女",id: 3},
                     {title:"明星写真",id: 4},
                     {title:"古典美女",id: 5},
                     {title:"摄影器材",id: 6}

                 ],
                 list:[]//图片的地址
             }
        },
        mounted(){
          //当组件中的DOM结构被渲染好并放到页面中去，就会执行这个钩子函数
            //初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration:0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小。默认值 0.0006
            });
        },
        created(){
          this.getAllCategory();
          this.getPhotoList(0);
        },
        methods:{
            getAllCategory(){
                this.$http.get("url").then(result=>{
                    if (result.body.status === 0){
                         result.body.message.unshift({title:"全部",id:0});
                         this.cates = result.body.message;
                    }
                    else{
                        Toast("获取数据失败")
                    }
                })
            },
            getPhotoList(cateId){
                this.$http.get("url"+cateId).then(result=>{
                        if (result.body.status === 0){
                            this.list = result.body.message;
                        }
                        else{
                            Toast("获取失败");
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
  *{
      touch-action: pan-y;
  }
    .photo-list{
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li{
            background-color: #ccc;
            text-align: center;
            margin-bottom: 0;
            box-shadow: 0 0 9px #999999;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"]{
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background: rgba( 0,0,0,0.5);
                .info-title{
                    font-size:14px;
                }
                .info-body{
                    font-size:13px;
                }
            }
        }
    }
</style>