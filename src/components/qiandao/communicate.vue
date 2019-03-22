<template>
   <div class="communicate-container">
       <div class="header">答疑讨论室</div>
       <div class="main-list">
           <!-- <a> v-for="item in Name" :key="item.nameValue">{{item.nameValue}}</a> -->
           <div v-for="item in Name" :key="item.nameValue">
               <div>
                   <span class="name">{{ item.nameValue }}</span>
                   <span class="message">{{ item.message}}</span>
               </div>
               <div class="time">{{ item.time }}</div>     
           </div>
       </div>
       <div class="footer">
  
                  <span> <input v-model="msg"  @keyup.enter="post"  class="left" type="text" placeholder="请输入关键字"></span>
                   <span class="right"><button >发送</button ></span>
       </div>
   </div>
</template>

<script type="text/javascript">
export default {
   name: '',
   data() {
       return {
           msg:"",
           Name:[
               {name:"张三",message:"hello nihao",time:new Date()},
               {name:"李四",message:"hello nihao",time:new Date()},
               {name:"王五", message:"hello nihao",time:new Date()}
           ]
       }
   },
  components: {},
  methods:{
      post(){
          console.log(this.msg);
          var news  = {nameValue:"张三",message:this.msg,time:new Date()};
           this.Name.push(news)
      }
  }
}
</script>

<style scoped >
    .header{
        display: block;
        font-size: 21px;
        box-shadow: 0 0 5px 0 #dddddd;
        font-weight: 500;
        color: black;
        background: rgb(247,247,247);
        text-align: center;
        line-height: 36px;
        height: 36px;
    }
    .main-list {
      padding-top: 10px;
      position: absolute;
      height: 100%;
      width:100%;
      padding-bottom: 50px;
      color: black;
    }
    .main-list .name{
         color: black;
         font-size: 15px;
    }
    .main-list .message{
         color: black;
         font-size: 15px;
    }
    .main-list .time{
        display: block;
         color: #ddd;
        font-size: 10px;
    }
    .footer{
      display:block;
      width: 100%;
      height: 50px;
      position: fixed;
      bottom: 0;
      background: #ddd;
      border: 1px solid #ddd;
      box-shadow: 0 0 4px #ddd;
      padding-top: 3px;
    
    }
    .footer .left{
        width: 95%;
    }
     .footer .right{
         width: 5%;
         right: 0;
         
     }
</style>
