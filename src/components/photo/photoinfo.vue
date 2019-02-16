<template>
    <div class="photoinfo-container">
        <!--<h3>标题</h3>-->
        <!--<p class="subtitle">-->
            <!--<span>发表时间</span>-->
            <!--<span>点击:0次</span>-->
        <!--</p>-->
        <!--<hr>-->

        <!--&lt;!&ndash;缩略涂区域&ndash;&gt;-->
        <!--&lt;!&ndash;内容区域&ndash;&gt;-->
        <!--<div class="content"></div>-->
        <!--&lt;!&ndash;评论子组件&ndash;&gt;-->
        <h3>{{ photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{ photoinfo.add_time}}</span>
            <span>点击:{{ photoinfo.click }}次</span>
        </p>
        <hr>

        <!--缩略涂区域-->
        <div class="thumbs">
            <img class="preview-img" v-for="(item,index) in  list" :src="item.src" height="100"
                 @click="$preview.open(index,list)" :key="item.src">
        </div>

        <!--内容区域-->
        <div class="content"></div>
        <!--评论子组件-->
        <com-box :id="id"></com-box>
    </div>
</template>

<script>
    //导入子组件
    import comment from '../subcomponents/component.vue'
    export default {
        name: "photoinfo",
        data(){
            return {
                id:this.$route.params.id,//从路由中获取的图片的id
                photoinfo:{},
                list:[]
            }
        },
        created(){
            this.getPhotoinfo();
            this.getThumbs();
        },
        methods:{
            getPhotoinfo(){
                this.$http.get("url"+this.id).then(result=>{
                    if (result.body.status === 0 ){
                           this.photoinfo = result.body.message;
                    }
                })
         },
            getThumbs(){
                this.$http.get("url"+this.id).then(result=>{
                    if (result.body.status === 0){
                        result.body.message.forEach(item=>{
                            iten.w= 600;
                            item.h= 400;
                        })
                    }
                })
            }
        },
        components :{
            //注册评论子组件
            "com-box":comment
        }
    }
</script>

<style scoped lang="scss">
  .photoinfo-container{
      padding: 3px;
      h3{
          color: #26A2ff;
          font-size: 15px;
          text-align: center;
          margin: 15px 0;
      }
      .subtitle{
          display: flex;
          justify-content: space-between;
          font-size: 13px;
      }
      .content{
          font-size: 13px;
          line-height: 30px;
      }
      .thumbs{
          img{
              margin: 10px;
              box-shadow: inset 0 0 8px #ccc;
          }
      }
  }
</style>