<template>
    <div class="shopcar-container">
   <div class="goods-list">
       <!--商品列表区域-->
       <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
           <div class="mui-card-content">
               <div class="mui-card-content-inner">
                   <mt-switch v-model="$store.getters.getGoodsSelect[item.id]"
                   @change="Selectedchange(item.id,$store.getters.getGoodsSelect[item.id])"></mt-switch>
                   <img :src="item.img_url" alt="">
                   <div class="info">
                       <h1>{{item.title}}</h1>
                       <p>
                           <span class="price">￥{{item.price}}</span>
                           <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                           <!--如何从购物车中获取商品的数量-->
                           <!--1.我们可以先创建一个空对象，然后循环购物车中所有的商品数据，
                           把 当前循环这条商品的id，作为这个对象的属性名，count值作为这个对象的属性值
                           当吧所有商品循环一遍，就会得到一个对象 ，例如：{88:2,89:3,90:1}-->
                           <a @click.prevent="remove(item.id,i)">删除</a>
                       </p>

                   </div>
               </div>
           </div>
       </div>

   </div>
       <!--结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品 <span class="red">{{ $store.getters.getCountAndAmout.count}}</span> 件，
                                总价 <span class="red">￥{{ $store.getters.getCountAndAmout.amount}}</span> 元</p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
        {{ $store.getters.getGoodsSelect}}
    </div>

</template>

<script>
    import numbox from '../subcomponents/shopcar_numbox.vue'
    export default {
        name: "ShopcarContainer",
        data(){
          return {
              goodslist:[
                  {id:10,title:"小米 note 16G 双网通版", price:2199,img_url:"//i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg"},
                  {id:14,title:"小米 note 34G 双网通版", price:2199,img_url:"//i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg"},
                  {id:12,title:"小米 note 88G 双网通版", price:2199,img_url:"//i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg"}
              ]
          }
        },
        created(){
          //  发起数据请求
          // this.getGoodslist();
        },
        methods:{
          getGoodslist(){
          //1.获取store 中所有商品的 id ，然后拼接出用一个用逗号分隔的字符串
              var idArr = [];

              this.$store.state.car.forEach( item =>idArr.push(item.id));
          //    如果购物车中没有商品，则直接返回，不需要请求数据，否则会报错
              if(idArr.length<=0){
                  return ;
              }

          //    获取购物车商品列表
              this.$http.get(""+idArr.join(',')).then(result =>{

                  if (result.body.status === 0 ){
                      this.goodslist = result.body.message;
                  }
              })
          },
            remove(id,index){
                 this.goodslist.splice(index,1);
                 // console.log(id);
                 this.$store.commit("removeFormCar",id);
            },
            Selectedchange(id,val){
              //每次点击开关，获取最新状态，同步到store中去
                console.log(id+"-----"+val);
                this.$store.commit("updateGoodsSelected",{id,selected:val});

            }
        },
        components:{
            numbox
        }
    }
</script>

<style scoped lang="scss">
      .shopcar-container{
          background: #eee;
          overflow: hidden;
          .mui-card-content-inner{
              display: flex;
              align-items: center;
          }
          .goods-list{
              img{
                  width: 60px;
                  height: 60px;
              }
              h1{
                  font-size: 13px;
              }
              .info{
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  .price{
                      color: red;
                      font-weight: bold;
                  }
              }

          }
          .jiesuan{
              display: flex;
              justify-content: space-between;
              align-content: center;
              .red{
                  color: red;
                  font-weight: bold;
                  font-size: 16px;
              }
          }
      }
</style>