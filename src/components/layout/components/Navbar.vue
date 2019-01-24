<template>
    <div class="app-navbar">
        <a href="https://www.marksmile.com" class="nav-logo"></a>
        <div class="navbar-main">
            <a href="javascript:;" class="sidebar-fold" :title="foldTitle" @click="toggleSideBar"><i :class="foldClass" class="el-icon-extend"></i></a>
            <div class="nav-phone">
                <i class="el-icon-phone el-icon-extend"></i>
                <span>400-8890-135</span>
            </div>
            <div class="fl-r">
                <div class="nav-service">
                    <span class="text">产品与服务</span>
                    <i class="el-icon-nav-arrow el-icon-extend"></i>
                    <div class="nav-dropmenu">
                        <a href="https://www.marksmile.com/brand.html" class="dropitem">品牌资质查询</a>
                        <a href="https://www.marksmile.com/domain.html" class="dropitem">域名查询与获取</a>
                        <a href="https://www.marksmile.com/tm.html" class="dropitem">商标查询与获取</a>
                    </div>
                </div>
                <router-link to="/my_cart" class="nav-cart"><i class="el-icon-cart el-icon-extend"></i><em class="badge">11</em></router-link>
                <router-link to="/my_message" class="nav-bell"><i class="el-icon-bell el-icon-extend"></i><em class="badge">5</em></router-link>
                <div class="nav-user">
                    <router-link to="/" class="text">杭州名商网络有限公司</router-link>
                    <i class="el-icon-nav-arrow el-icon-extend"></i>
                    <div class="nav-dropmenu">
                        <router-link to="/my_account" class="dropitem">账户信息</router-link>
                        <router-link to="/my_order" class="dropitem">我的订单</router-link>
                        <router-link to="/my_invoice" class="dropitem">发票管理</router-link>
                        <div class="dropline"></div>
                        <a href="https://www.marksmile.com/member/logout" class="dropitem">退出登录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            foldClass() {
                return this.sidebar.opened? 'el-icon-indent' : 'el-icon-outdent'
            },
            foldTitle(){
                return this.sidebar.opened? '收起' : '展开'
            }
        },
        methods: {
            toggleSideBar () {//切换侧边栏
                this.$store.dispatch('toggleSideBar')
            }
        }
    }
</script>

<style lang="less" scoped="scoped">
.app-navbar{
    height: 50px;
    line-height: 50px;
    background-color: #363d41;
    .nav-logo{
        float: left;
        width: 180px;
        height: 100%;
        background: url(~@/assets/logo.png) no-repeat;
        background-position: 50% 50%;
        border-right: 1px solid #282f33;
    }
    .navbar-main{
        height: 50px;
        line-height: 50px;
        .sidebar-fold{
            float: left;
            width: 50px;
            height: 50px;
            text-align: center;
            border-right: 1px solid #282f33;
            [class^=el-icon-]{
                font-size: 18px;
                color: #fff;
                vertical-align: middle;
            }
        }
        .nav-phone{
            float: left;
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            padding: 0 10px;
            [class^=el-icon-]{
                font-size: 18px;
                vertical-align: middle;
                width: 24px;
                text-align: center;
                margin-right: 5px;
            }
        }
        .nav-service{
            float: left;
            position: relative;
            height: 50px;
            line-height: 50px;
            padding: 0 10px 0 20px;
            font-size: 14px;
            color: #fff;
            border-left: 1px solid #282f33;
            .text{
                cursor: text;
            }
            [class^=el-icon-]{
                font-size: 12px;
                vertical-align: middle;
                width: 24px;
                text-align: center;
                cursor: text;
            }
            .nav-dropmenu{
                position: absolute;
                z-index: 999;
                left: 0;
                top: 50px;
                display: none;
                width: 140px;
                padding: 10px 0;
                background-color: #282c37;
                .dropitem{
                    display: block;
                    font-size: 12px;
                    color: #bbb;
                    line-height: 32px;
                    padding: 0 20px;
                    &:hover{
                        color: @base-bar-color;
                    }
                }
                .dropline{
                    padding-top: 10px;
                    border-bottom: 1px solid #515151;
                    margin-bottom: 10px;
                }
            }
            &:hover{
                .text{
                    color: @base-bar-color;
                }
                [class^=el-icon-]{
                    color: @base-bar-color;
                }
                .nav-dropmenu{
                    display: block;
                }
            }
        }
        .nav-cart{
            float: left;
            position: relative;
            height: 50px;
            line-height: 50px;
            padding: 0 5px;
            color: #fff;
            [class^=el-icon-]{
                font-size: 18px;
                vertical-align: middle;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-radius: 50%;
            }
            .badge{
                position: absolute;
                top: 5px;
                left: 28px;
                min-width: 20px;
                height: 20px;
                line-height: 20px;
                padding: 0 3px;
                font-size: 12px;
                text-align: center;
                color: #fff;
                background-color: #fd5f43;
                border-radius: 10px;
                transform: scale(.8);
            }
            &:hover{
                [class^=el-icon-]{
                    background-color: rgba(255,255,255,.2);
                }
            }
        }
        .nav-bell{
            float: left;
            position: relative;
            height: 50px;
            line-height: 50px;
            padding: 0 5px;
            color: #fff;
            [class^=el-icon-]{
                font-size: 18px;
                vertical-align: middle;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-radius: 50%;
            }
            .badge{
                position: absolute;
                top: 5px;
                left: 25px;
                min-width: 20px;
                height: 20px;
                line-height: 20px;
                padding: 0 3px;
                font-size: 12px;
                text-align: center;
                color: #fff;
                background-color: #fd5f43;
                border-radius: 10px;
                transform: scale(.8);
            }
            &:hover{
                [class^=el-icon-]{
                    background-color: rgba(255,255,255,.2);
                }
            }
        }
        .nav-user{
            float: left;
            position: relative;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            font-size: 14px;
            color: #fff;
            .text{
                display: inline-block;
                vertical-align: middle;
                font-size: 14px;
                color: #fff;
                max-width: 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: pointer;
            }
            [class^=el-icon-]{
                font-size: 12px;
                vertical-align: middle;
                width: 24px;
                text-align: center;
                cursor: text;
            }
            .nav-dropmenu{
                position: absolute;
                z-index: 999;
                left: 0;
                top: 50px;
                display: none;
                width: 120px;
                padding: 10px 0;
                background-color: #282c37;
                .dropitem{
                    display: block;
                    font-size: 12px;
                    color: #bbb;
                    line-height: 32px;
                    padding: 0 20px;
                    &:hover{
                        color: @base-bar-color;
                    }
                }
                .dropline{
                    padding-top: 10px;
                    border-bottom: 1px solid #515151;
                    margin-bottom: 10px;
                }
            }
            &:hover{
                .text{
                    color: @base-bar-color;
                }
                [class^=el-icon-]{
                    color: @base-bar-color;
                }
                .nav-dropmenu{
                    display: block;
                }
            }
        }
        
    }
}
.hide-sidebar{
    .app-navbar{
        .nav-logo{
            width: 64px;
            background-image: url(~@/assets/logo-min.png);
        }
    }
}
</style>
