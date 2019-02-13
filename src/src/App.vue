<template>
    <div>
        <h1>这是APP组件</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/goodlist">goodslist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped lang="">

</style>