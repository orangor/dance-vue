<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-08-07 10:23:39
 * @LastEditTime: 2020-08-07 10:24:41
-->
<template>
    <div>
        <transition>
            <p v-if="show">Foo</p>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    },
}
</script>