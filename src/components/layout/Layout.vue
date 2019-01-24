<template>
    <div :class="foldClass" class="app-wraper">
        <navbar/>
        <div class="main-container">
            <sidebar/>
            <app-main/>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Navbar, Sidebar, AppMain } from './components'
    export default {
        name: 'Layout',
        components: {
            Navbar,
            Sidebar,
            AppMain
        },
        data() {
            return {

            };
        },
        computed: {
            ...mapState([
                'sidebar'
            ]),
            foldClass() {
                return this.sidebar.opened? '' : 'hide-sidebar'
            }
        },
        mounted() {
            let that = this;
            console.log(that.$router);
            console.log(that.$route);
        }
    }
</script>

<style lang="less" scoped="scoped">
.app-wraper{
    width: 100%;
    height: 100%;
    position: relative;
    .main-container{
        height: calc(100vh - 50px);
        padding-left: 180px;
        position: relative;
    }
    &.hide-sidebar{
        .main-container{
            padding-left: 64px;
        }
    }
}
</style>
