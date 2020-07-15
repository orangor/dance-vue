/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-05-28 14:56:05
 * @LastEditTime: 2020-07-10 14:35:08
 */
import Vue from 'vue';
//import VueRouter from 'vue-router'
import App from './component/App.vue';
import ElementUI from 'element-ui';
import formCreate, { maker } from '@form-create/element-ui'
import './style/common.scss';
import './dance_vue.js'
Vue.use(ElementUI);
Vue.use(formCreate)
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
})

new Vue({ el: '#components-demo' })
var regex = new RegExp('xyz', 'i');


