

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <div v-for="diary in diarys" :diary="diary" :key="diary.title"> 
        <h1>{{diary.title}}</h1>
        <p>{{diary.content}}</p>
      </div> 
    </ul>
    <input type='text' v-model="sendDiary.title" placeholder="title">
    <input type='text' v-model="sendDiary.content" placeholder="content">
    <button v-on:click="send">send</button>
  </div>
</template>

<script>
const axios = require('axios');
// import DiaryArticle from './components/DiaryArticle.vue';

export default {
  name: 'app',
  data() {
    return {
      //dataに直にkeyvalueをつくっておくれるか試してみる
      //sendDiary: this.sendDiary的なことをaxiosで書く
      diarys: [
      ],
      sendDiary: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    send() {
      axios.post('http://localhost:3000/post',{title: this.sendDiary.title, content: this.sendDiary.content})
      .then(function(response) {
        console.log(response.data.diarys);
      })
    },
    get() {
      axios.get('http://localhost:3000/diarys')
    .then(response => (this.diarys = response.data.diarys));
    }
  },
  components: {
    // 'diary-article': DiaryArticle
  },
  mounted () {
    this.get();
  },
  beforeUpdate () {
    this.get();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
