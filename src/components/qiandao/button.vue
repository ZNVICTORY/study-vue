<template>
   <div class="btn-container">
         <div class="btn">
             <button class="icon" id="click">抢答</button>
             
             </div>
   </div>
</template>

<script type="text/javascript">
export default {
   name: '',
   data() {
       return {}
   },
  components: {},
  methods: {}
}
</script>

<style scoped >

 .icon{
   display: inline-block;
   box-sizing: border-box;
   font-size: 20px;
   cursor: pointer;
   margin: 15px 30px;
   width: 90px;
   height: 90px;
    border-radius: 50%;
    text-align: center;
    position: relative;
    z-index: 100;
    background:rgb(238,168,3); 
    transition: all .2s, color .2s,box-shadow .2s;
    color: #f4f4f4;
    font-weight: 600;
    font-size: 23px;
    border-width: 5px;
    border-color: rgb(238,168,3);
    box-shadow: 0 0 10px 10px rgba(238,168,3,.5)
   }
   .icon:hover{
        background:rgba(238,168,3,.5);;
        color: rgb(238,168,3);
        box-shadow: 0 0 20px 20px rgba(238,168,3,.5)
   }
   #click:active{
       top:4px;
   }
</style>

