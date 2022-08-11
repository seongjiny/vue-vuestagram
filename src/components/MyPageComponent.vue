<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" @change="filter(value)" v-model="value" />
    <div class="post-header" v-for="follower in followersView" :key="follower">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${follower.image})` }"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, toRefs, watch } from "vue";
import axios from "axios";

export default {
  name: "MyPageComponent",
  props: { one: Number },
  setup(props) {
    // reactive 는 ref 랑 같지만 reactive 는 object 나 array 만보관
    // ref 는 primitive type 보관 (하지만 ref 에 object/array 넣어도 상관없음)
    // let test = reactive({name: 'kim'});
    let { one } = toRefs(props);
    console.log(one.value);

    watch(one, () => {
      console.log("one is now " + one);
    });

    let followers = ref([]);
    let followersView = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((x) => {
        followers.value = x.data;
        followersView.value = [...followers.value];
      });
    });

    function filter(str) {
      if (str.length == 0) {
        followersView.value = [...followers.value];
      } else {
        followersView.value = followers.value.filter((fol) => fol.name.includes(str));
      }
    }
    return { followers, followersView, filter };
  },
};
</script>

<style>
</style>