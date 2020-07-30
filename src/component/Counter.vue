<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-07-30 14:11:38
 * @LastEditTime: 2020-07-30 14:11:49
--> 
<template>
    <div>
        {{ count }}
        <button @click="increment">自增</button>
    </div>
</template>

<script>
export default {
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