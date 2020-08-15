<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-07-30 14:11:38
 * @LastEditTime: 2020-07-30 15:27:54
--> 
<template>
    <div>
        {{ count }}
        <button @click="increment">自增</button>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'red',
        },
    },
    data() {
        return {
            count: 0,
        }
    },

    methods: {
        increment() {
            this.count++
        },
    },
}
</script>