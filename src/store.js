import Vue from 'vue';
import Vuex from 'vuex';
import { setStore, getStore } from './util/util';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebar: {
            opened: !+getStore('sidebarStatus')//sidebarStatus为1表示侧边栏收起，0为展开,+将后面的操作数转换为数字
        }
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                setStore('sidebarStatus', 1);
            } else {
                setStore('sidebarStatus', 0);
            }
            state.sidebar.opened = !state.sidebar.opened
        }
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        }
    }
})
