<!--
 * @Descripttion: 
 * @version: 
 * @Author: luohongwen
 * @Date: 2020-05-29 15:20:56
 * @LastEditTime: 2020-06-02 12:59:27
--> 
<template>
  <div id="app" :style="{fontSize:postFontSize+'em'}">
    <h1>{{ msg }}</h1>
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
    <input v-model="message" placeholder="干掉这一杯" />
    <br />
    <textarea v-model.lazy="message" placeholder="相遇在人海"></textarea>
    <p>Message is :{{message}}</p>
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <input type="radio" v-model="pick" v-bind:value="message" />
    <input v-model.number="age" type="number" />
    <dance title="title" v-on:enlarge-text="postFontSize += 0.1" v-on:button="postFontSize -= 0.1"></dance>
  </div>
</template>

<script>
import getData from "../util";
import dance from "./Dance.vue";
export default {
  name: "app",

  components: {
    dance
  },
  data() {
    return {
      postFontSize: 1,
      pick: "相信缘分依然在",
      option_v: "A",
      selected: "A",
      selected2: "A",
      toggle: "yes",
      age: 23,
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ],
      picked: "",
      checkedNames: [],
      checked: true,
      msg: "Welcome to Your Vue.js",
      message: "别让我一个人醉",
      space: [
        { name: "空间1", id: 1 },
        { name: "空间2", id: 2 },
        { name: "空间3", id: 3 }
      ],
      styleObject: {
        color: "red",
        fontSize: "13px"
      },
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10"
      },
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10]
      ]
    };
  },
  created() {
    this.fetchData();
    console.log("23333");
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
    onTex() {
      alert("xxxxx");
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style> 