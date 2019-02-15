<template>
    <div>
        <!--<h4>这是新闻资讯</h4>-->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to=" '/home/newinfo/13'">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2012-12-12 12:12:12</span>
                            <span>点击:0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<router-link :to="'/home/newinfo/' + item.id">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>幸福</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间: 2012-12-12 12:12:12</span>-->
                            <!--<span>点击:0次</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</router-link>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<router-link :to="'/home/newinfo/' + item.id">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>幸福</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间: 2012-12-12 12:12:12</span>-->
                            <!--<span>点击:0次</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</router-link>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media" v-for="item in newsList" v-bind:key="item.id">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" :src="{{item.img_url}}">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>{{ item.title }}</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间: {{item.addtime | dataformat}}</span>-->
                            <!--<span>点击:{{item.click}}次</span>-->
                        <!--</p>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        name: "newlist",
        data(){
            return {
                newsList:[]//新闻列表
            }
        },
        created(){
          this.getNewList();
        },
        methods:{
            //获取列表
            getNewList(){
                this.$http.get("请求路径").then(result=>{
                    if (result.body.status === 0){
                        this.newsList = result.body.message;
                    }
                    else{
                        //获取失败
                        Toast('获取新闻列表失败');
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>