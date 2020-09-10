<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-08-07 13:43:07
 * @LastEditTime: 2020-08-07 14:12:48
-->
<template>
    <input type="text" @keydown.prevent="onKeydown" v-model="quantity" />
</template>

<script>
const KEY_DOWN = 40
const KEY_UP = 38
const ESCAPE = 27

export default {
    data() {
        return {
            quantity: 0,
        }
    },

    methods: {
        increment() {
            this.quantity += 1
        },
        decrement() {
            this.quantity -= 1
        },
        clear() {
            this.quantity = 0
        },
        onKeydown(e) {
            if (e.keyCode === ESCAPE) {
                this.clear()
            }
            if (e.keyCode === KEY_DOWN) {
                this.decrement()
            }
            if (e.keyCode === KEY_UP) {
                this.increment()
            }
            if (e.key === 'a') {
                this.quantity = 13
            }
        },
    },

    watch: {
        quantity: function (newValue) {
            this.$emit('input', newValue)
        },
    },
}
</script>