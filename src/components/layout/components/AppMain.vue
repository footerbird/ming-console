<template>
    <el-scrollbar class="app-main">
        <router-view/>
    </el-scrollbar>
</template>

<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>

<style lang="less" scoped="scoped">
.app-main {
    width: 100%;
    height: 100%;
    padding: 15px;
    overflow: hidden;
}
</style>
