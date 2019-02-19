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
                    <!--上限值，即最大值应该是库存量，父组件向子组件传值，即属性绑定-->
                    <p>购买数量:<numbox @getCount="getSelectCount" :max="60"></numbox></p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                </div>
                <!--涉及到子组件向父组件传值，即 numbox子组件向父组件goodsinfo传值 ，采用(事件调用机制)-->
                <!--事件调用的本质 ：父组件 向 子组件 传递方法 ，子组件调用这个方法，同时把 数据当做参数
                传递给这个方法-->
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
                ballFlag: false,//控制小球的隐藏和显示的
                SelectCounted:1//保存用户选择的商品数量，默认商品数量为1
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
            //    添加到购物车
                //{id:商品的id，count：商品购买的数量，price：商品的单价，selected：false}
                //拼接出一个，要保存到car 数组中的商品信息对象
                var goodsinfo ={
                    id:this.id,
                    count:this.SelectCounted,
                    price:/**this.goodinfo.sell_price,**/2199,
                    selected:true
                };
                this.$store.commit("addToCar",goodsinfo);
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
            },
            getSelectCount(count){
                //当子组件调用这个方法时，将选中的数量传递给父组件，即将选中的值保存在data上
                this.SelectCounted = count;
                console.log("父组件拿到的数量值"+this.SelectCounted)

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