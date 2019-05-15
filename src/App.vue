

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <div v-for="diary in diarys" :diary="diary" :key="diary.title"> 
        <h1>{{diary.title}}</h1>
        <p>{{diary.content}}</p>
      </div> 
    </ul>
 
  </div>
</template>

 <!--  <input type='text' v-model="sendDiary" placeholder="title">
    <input type='text' v-model="sendDiary" placeholder="content">
    <button v-on:click="send">send</button> -->

<script>
const axios = require('axios');
// import DiaryArticle from './components/DiaryArticle.vue';

export default {
  name: 'app',
  data() {
    return {
      diarys: [
      ],
      sendDiary: []
    };
  },
  methods: {
    send() {
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/post',
      //   data: {
      //     sendDiary: this.sendDiary
      //   }
      // })
      axios.post('http://localhost:3000/post',[{title:'shine'}])
      .then(function(response) {
        console.log(response.data);
      })
    }
  },
  components: {
    // 'diary-article': DiaryArticle
  },
  mounted () {
    axios.get('http://localhost:3000/diarys')
    .then(response => (this.diarys = response.data.diarys));
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
