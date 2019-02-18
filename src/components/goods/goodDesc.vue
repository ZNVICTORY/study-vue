<template>
    <div class="goodDesc-container">
        <h3 class="title">商品介绍页面</h3>
        <hr>
        <div class="content" v-html="goodDesc.content"></div>
    </div>
</template>

<script>
    export default {
        name: "goodDesc",
        data(){
            return {
                id:this.$route.params.id,
                goodDesc:{}
            }
        },
        created(){
            this.getGoodDesc();
        },
        methods:{
            getGoodDesc(){
                this.$http.get("url"+this.id).then(result=>{
                    if (result.body.status === 0){
                        this.goodDesc = result.body.message[0];
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
   .goodDesc-container{
       h3{
           font-size: 16px;
           color: #226aff;
           text-align: center;
           margin: 10px 0;
       }
   }
</style>