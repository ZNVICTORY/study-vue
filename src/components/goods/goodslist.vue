<template>
    <div class="goods-list">
        <router-link :to="'/home/goodsinfo/'+'10'" class="goods-item" tag="div">
            <img src="//i1.mifile.cn/a1/pms_1545457703.71734471!220x220.png" alt="">
            <h1 class="title">小米（MI） 小米note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
        <div  class="goods-item" @click="getDetail('14')">
            <img src="//i1.mifile.cn/a1/pms_1545457703.71734471!220x220.png" alt="">
            <h1 class="title">小米（MI） 小米note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <router-link class="goods-item" :to="'/home/goodsinfo/'+'12'" tag="div">
            <img src="//i1.mifile.cn/a1/pms_1545457703.71734471!220x220.png" alt="">
            <h1 class="title">小米（MI） 小米note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
        <!--<div class="goods-item" v-for="item in Goodlist" :key="item.id">-->
            <!--<img :src="item.image_url" alt="">-->
            <!--<h1 class="title">{{item.title}}</h1>-->
            <!--<div class="info">-->
                <!--<p class="price">-->
                    <!--<span class="now">{{item.nowprice}}</span>-->
                    <!--<span class="old">{{item.oldprice}}</span>-->
                <!--</p>-->
                <!--<p class="sell">-->
                    <!--<span>{{item.market}}</span>-->
                    <!--<span>剩 {{ item.sellyu }}件</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    export default {
        name: "goodslist",
        data(){
            return {
                pageindex:1,
                Goodlist:[]
            }
        },
        created(){
            // this.getGoodslist();
        },
        methods:{
            getGoodslist(){
                this.$http.get("url"+this.pageindex).then(result =>{
                    if(result.body.status ===0 ){
                        this.Goodlist = this.Goodlist.concat(result.body.message);
                    }
                    else{
                        Toast("获取失败");
                    }
                })
            },
            //router-link 即标签导航
            //router.push,即编程式导航
            getDetail(i){
                //以js形式进行路由导航
                //一定要区分 this.$route 和 this.$router 对象
                //其中，this.$route对象，是路由参数对象，params，query都属于它
                //this.$router对象，是一个路由导航对象，用它可以方便的使用JS代码，实现路由的前进、后退，跳转到新的URL地址
                //1.最简单的
                // this.$router.push("/home/goodsinfo/"+id)
                //2.传递对象
                // this.$router.push({path:"/home/goodsinfo/"+id})
                //3.传递命名的路由
                this.$router.push({name:"goodsinfo",params:{ id:i }});
            }

        }
    }
</script>

<style scoped lang="scss">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;

        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;

            img {
                width: 100%;
            }

            .title {
                font-size: 14px;
            }

            .info {
                background: #eee;

                p {
                    margin: 0;
                    padding: 5px;
                }

                .price {
                    .now {
                        color: red;
                        font-size: 16px;
                        font-weight: bold;
                    }

                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }

                .sell {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }

</style>