<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-07-30 14:11:38
 * @LastEditTime: 2020-08-06 11:41:31
--> 
<template>
    <div>
        <span class="count">{{ count }}</span>
        <button @click="increment">Increment</button>
        <dance title="title"></dance>
    </div>
</template>

<script>
import dance from './Dance.vue'
export default {
    components: {
        dance,
    },
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