<template>
  <!-- {{ name }}
  {{ 이름 }} -->
  <div class="header">
    <ul class="header-button-left">
      <li v-if="pageIndex == 1" @click="pageIndex--">Cancel</li>
      <li v-if="pageIndex == 2" @click="pageIndex--">Previous</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="pageIndex == 1" @click="pageIndex++">Next</li>
      <li v-if="pageIndex == 2" @click="addNewPost">Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <container-component
    :data="data"
    :page="pageIndex"
    :newImageUrl="newImageUrl"
    @updateContent="content = $event"
    @updateFilter="filter = $event"
  />
  <!-- <button @click="getMorePost()">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더 보기</button> -->
</template>

<script>
import ContainerComponent from "./components/ContainerComponent.vue";
import data from "./assets/data.js";
import { mapMutations, mapState } from "vuex";
// import axios from "axios";

export default {
  name: "App",
  components: {
    ContainerComponent,
  },
  data() {
    return {
      data: data,
      pageIndex: 3,
      newImageUrl: "",
      content: "",
      filter: "",
      counter: 0,
    };
  },
  methods: {
    ...mapMutations(["setMore"]),

    // getMorePost() {
    //   // axios.post('URL', { data: data}).then().catch((err)=>{/*error*/});
    //   axios.get(`https://codingapple1.github.io/vue/more0.json`).then((x) => {
    //     this.data.push(x.data);
    //   });
    // },
    upload(event) {
      let file = event.target.files[0];
      this.newImageUrl = URL.createObjectURL(file);
      this.pageIndex = 1;
    },
    addNewPost() {
      var newPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.newImageUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.filter,
      };
      this.data.unshift(newPost);
      this.pageIndex = 0;
      this.newImageUrl = "";
      this.content = "";
      this.filter = "";
    },
  },
  computed: {
    // 무조건 return 이 있어야함. 계산 결과 저장용 이기 때문
    // name() {
    //   return this.$store.state.name;
    // },
    ...mapState(["name"]),
    ...mapState({ 이름: "name" }),
  },
  mounted() {
    this.emitter.on("작명", (a) => {
      console.log(a);
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
