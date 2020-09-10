<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-08-07 11:20:06
 * @LastEditTime: 2020-08-07 14:05:06
-->
<template>
    <div>
        <button class="yes" @click="callYes">Yes</button>
        <button class="no" @click="callNo">No</button>
    </div>
</template>

<script>
export default {
    name: 'testButton',

    props: {
        callMe: {
            type: Function,
        },
    },

    methods: {
        callYes() {
            this.callMe('yes')
        },
        callNo() {
            this.callMe('no')
        },
    },
}
</script>