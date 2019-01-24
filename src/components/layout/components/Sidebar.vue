<template>
    <el-scrollbar class="app-sidebar" wrap-class="scrollbar-wrapper">
        <el-menu
            :default-active="$route.meta.module"
            router
            :collapse="isCollapse"
            background-color="#323745"
            text-color="#bbb"
            active-text-color="#00a4ff">
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">控制台</span>
            </el-menu-item>
            <el-menu-item index="/my_brand">
                <i class="el-icon-star-off"></i>
                <span slot="title">品牌管理</span>
            </el-menu-item>
            <el-menu-item index="/my_domain">
                <i class="el-icon-domain el-icon-extend"></i>
                <span slot="title">域名管理</span>
            </el-menu-item>
            <el-menu-item index="/my_mark">
                <i class="el-icon-mark el-icon-extend"></i>
                <span slot="title">商标管理</span>
            </el-menu-item>
            <el-menu-item index="5" disabled>
                <i class="el-icon-social el-icon-extend"></i>
                <span slot="title">舆情监控</span>
            </el-menu-item>
            <el-menu-item index="6" disabled>
                <i class="el-icon-business el-icon-extend"></i>
                <span slot="title">商情监控</span>
            </el-menu-item>
            <el-menu-item index="/my_order">
                <i class="el-icon-tickets"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="/my_message">
                <i class="el-icon-message"></i>
                <span slot="title">消息中心</span>
            </el-menu-item>
            <el-menu-item index="/my_account">
                <i class="el-icon-setting"></i>
                <span slot="title">账户管理</span>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                
            };
        },
        computed: {
            ...mapState([
                'sidebar'
            ]),
            isCollapse() {
                return !this.sidebar.opened
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped="scoped">
.app-sidebar{
    position: absolute;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;
    background-color: #323745;
    overflow: hidden;
}
.hide-sidebar{
    .app-sidebar{
        width: 64px;
        .el-menu-item{
            span{
                display: none;
            }
        }
    }
}
</style>
