<template>
    <div class="goodsinfo-container">
        <!--购物车小球-->
       <transition @before-enter="beforeEnter"
                   @enter="Enter"
                   @after-enter="afterEnter">
           <div class="ball" v-show="ballFlag" ref="ball"></div>
       </transition>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                 <swiper :lunbotuList="lunbotuList"  :isfull="false"></swiper>
                </div>
        </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品的标题名称</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="price">
                       市场价:<del>￥2399</del>
                       销售价:<span class="now_price">￥2199</span>
                   </p>
                    <p>购买数量:<numbox></numbox></p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:</p>
                    <p>库存情况:</p>
                    <p>上架时间:</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc()">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>

            </div>
        </div>


    </div>
</template>

<script>
    import '../../lib/mui/js/mui.min.js'
    import swiper from '../subcomponents/swipe.vue'
    import numbox from '../subcomponents/goodsinfo_numbox.vue'

    export default {
        name: "Goodsinfo",
        data() {
            return {
                id: this.$route.params.id,
                lunbotuList: [
                    {url: "//i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg"},
                    {url: "//i1.mifile.cn/a1/pms_1545457703.71734471!220x220.png"},
                    {url: "//i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}
                ],
                goodinfo: {},
                ballFlag: false//控制小球的隐藏和显示的
            }
        },
        created() {
            // this.gettLunbotu();//获取轮播图的地址

            // this.getGoodinfo();//获取商品的信息
        },
        methods: {
            gettLunbotu() {
                this.$http.get("lunbotuurl" + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.lunbotuList = result.body.message;
                    }
                })
            },
            getGoodinfo() {
                this.$http.get("url" + this.id).then(
                    result => {
                        if (result.body.status === 0) {
                            this.goodinfo = result.body.message[0];
                        }
                    }
                )
            },
            goDesc() {
                this.$router.push({path: "/home/goodDesc/" + this.id})
            },
            goComment() {
                this.$router.push({path: "/home/goodComment/" + this.id})
            },
            addToShopCar() {
                this.ballFlag = !this.ballFlag;
            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)";
            },
            Enter(el, done) {
                el.offsetWidth;
                //获取小球的position
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document.getElementById("badge").getBoundingClientRect();
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;

                el.style.transform = `translate(${xDist}px,${yDist}px)`;
                el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,0.68)";
                done();

            },
            afterEnter(el) {
                this.ballFlag = !this.ballFlag;
            }
        },
            components:{
                swiper,
                numbox
            }

    }
</script>

<style scoped lang="scss">
   .goodsinfo-container{
       background-color: #eee;
       overflow: hidden;
       .now_price{
           font-size: 16px;
           font-weight: bold;
           color: red;
       }
       .mui-card-footer{
           display: block;
           button{
               margin: 15px 0;
           }
       }
       .ball{
           width: 15px;
           height: 15px;
           border-radius: 50%;
           background:red;
           z-index: 99;
           position: absolute;
           left: 137px;
           top:390px;
       }
   }
</style>