<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-05-29 15:20:56
 * @LastEditTime: 2020-09-09 18:55:06
--> 
<template>
    <div id="app">
        <!--
        <h1 :style="{fontSize:postFontSize+'em'}">{{ msg }}</h1>
        <div>{{message}}</div>
        <div v-for="(item,name,index) in space" :key="item.id">{{item.name}}{{name}}{{index}}</div>
        <div v-for="(item,name,index) in object" :key="name">{{item+name}}:{{index}}</div>
        <img src="../images/dc.jpg" />
        <input type="text" v-model="msg" />
        <p v-bind:style="styleObject">Original message:"{{message}}"</p>
        <p>Computed reversed message:"{{ reverseMessage}}"</p>
        <ul v-for="(set,name,index) in sets" :key="index">
            <li v-for="n in even(set)" :key="n">{{n}}</li>
        </ul>
        <input v-on:keyup.enter="onTex" />
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{checked}}</label>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="jack">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="jack">Mike</label>
        <br />
        <span>Checked names:{{checkedNames}}</span>

        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>
        <br />
        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
        <br />
        <span>Picked:{{picked}}</span>
        <select v-model="selected">
            <option disabled value>请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <select v-model="option_v">
            <option
                v-for="option in options"
                v-bind:value="option.value"
                :key="option.value"
            >{{option.text}}</option>
        </select>
        <br />
        <input v-model="message" placeholder="掉这一杯" />
        <br />
        <textarea v-model.lazy="message" placeholder="山水之间"></textarea>
        <p>Message is :{{message}}</p>
        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
        <input type="radio" v-model="pick" v-bind:value="message" />
        <input v-model.number="age" type="number" />
        -->
        <transition>
            <p v-if="show">Foo</p>
        </transition>

        <dance
            title="title"
            v-on:enlarge-text="postFontSize += 0.1"
            v-on:button="postFontSize -= 0.1"
            @custom="onCustom"
        ></dance>

        <br />
        <p v-if="emitted">Emitted!</p>
        <!--
        <dance-form-create></dance-form-create>
        -->
        <div id="myChart" class="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
import getData from '../util'
import dance from './Dance.vue'
import danceFormCreate from './element/dance-form-create.vue'
export default {
    name: 'app',
    show: true,
    components: {
        dance,
        danceFormCreate,
    },
    data() {
        return {
            show: true,
            count: '1',
            emitted: false,
            optionx: {
                //行内表单模式
                inline: false,
                //表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
                labelPosition: 'right',
                //表单域标签的后缀
                labelSuffix: undefined,
                //是否显示必填字段的标签旁边的红色星号
                hideRequiredAsterisk: false,
                //表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
                labelWidth: '125px',
                //是否显示校验错误信息
                showMessage: true,
                //是否以行内形式展示校验信息
                inlineMessage: false,
                //是否在输入框中显示校验结果反馈图标
                statusIcon: false,
                //是否在 rules 属性改变后立即触发一次验证
                validateOnRuleChange: true,
                //是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
                disabled: false,
                //用于控制该表单内组件的尺寸 medium / small / mini
                size: undefined,
            },
            postFontSize: 1,
            pick: '相信缘分依然在',
            option_v: 'A',
            selected: 'A',
            selected2: 'A',
            toggle: 'yes',
            age: 23,
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' },
            ],
            picked: '',
            checkedNames: [],
            checked: true,
            msg: 'Welcome to Your Vue.js',
            message: '山水之间',
            space: [
                { name: '空间1', id: 1 },
                { name: '空间2', id: 2 },
                { name: '空间3', id: 3 },
            ],
            styleObject: {
                color: 'red',
                fontSize: '13px',
            },
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10',
            },
            sets: [
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
            ],
        }
    },
    created() {
        this.fetchData()
    },
    mounted() {
        this.drawLine()
    },
    methods: {
        onCustom() {
            this.emitted = true
        },
        async fetchData() {
            const data = await getData()
            this.msg = data
        },
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        },
        onTex() {
            alert('xxxxx')
        },

        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: [
                        '衬衫',
                        '羊毛衫',
                        '雪纺衫',
                        '裤子',
                        '高跟鞋',
                        '袜子',
                    ],
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            })
        },
    },
    computed: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        },
    },
}
</script>

<style lang="scss">
.myChart {
    background: cadetblue;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    h1 {
        color: green;
    }
}
</style> 