<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-07-10 14:38:08
 * @LastEditTime: 2020-07-10 16:53:58
--> 
<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-05-29 15:20:56
 * @LastEditTime: 2020-07-10 14:35:57
--> 
<template>
    <div class="danceFormCreate">
        <FormCreate :rule="rule" v-model="fApi" :option="options" />
    </div>
</template>

<script>
export default {
    name: 'dance-form-create',

    components: {},

    data() {
        return {
            fApi: {},
            options: {
                onSubmit: formData => {
                    alert(JSON.stringify(formData))
                },
                resetBtn: true
            },
            rule: [
                {
                    type: 'input',
                    field: 'goods_name',
                    title: '商品名称'
                },
                {
                    type: 'checkbox',
                    field: 'label',
                    title: '标签',
                    options: [
                        { label: '好用', value: 0 },
                        { label: '快速', value: 1 },
                        { label: '高效', value: 2 },
                        { label: '全能', value: 3 }
                    ]
                },
                {
                    type: 'input',
                    title: '商品名称x',
                    field: 'goods_namex',
                    value: 'iphone 7',
                    col: {
                        span: 12,
                        labelWidth: 50
                    },
                    props: {
                        type: 'text'
                    },
                    validate: [
                        {
                            required: true,
                            message: '请输入goods_name',
                            trigger: 'blur'
                        }
                    ]
                },
                {
                    type: 'radio',
                    title: '是否包邮',
                    field: 'is_postage',
                    value: '0',
                    options: [
                        { value: '0', label: '不包邮', disabled: false },
                        { value: '1', label: '包邮', disabled: true }
                    ]
                }
            ]
        }
    },
    created() {},
    methods: {},
    computed: {}
}
</script>

<style lang="scss">
.danceFormCreate {
    width: 200px;
    height: 400px;
}
</style> 