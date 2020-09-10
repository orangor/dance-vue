<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-08-07 14:58:16
 * @LastEditTime: 2020-08-07 14:58:29
-->
<template>
    <button @click="fetchResults">{{ value }}</button>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            value: null,
        }
    },

    methods: {
        async fetchResults() {
            const response = await axios.get('mock/service')
            this.value = response.data
        },
    },
}
</script>