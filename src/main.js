/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-05-28 14:56:05
 * @LastEditTime: 2020-06-01 09:06:21
 */
import Vue from 'vue';
import App from './component/App.vue';
import './style/common.scss';

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
console.log(regex);
