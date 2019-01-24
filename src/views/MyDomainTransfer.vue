<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/my_domain' }">域名管理</el-breadcrumb-item>
            <el-breadcrumb-item>域名转入</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>

<style>

</style>
