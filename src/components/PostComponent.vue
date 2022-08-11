<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${datum.userImage})`}"></div>
      <span class="profile-name">{{ datum.name }}</span>
    </div>
    <img :class="`post-body ${datum.filter}`" :src="datum.postImage" />
    <div class="post-content">
      <p @click="$store.commit('liked')">{{ $store.state.likes }} Likes</p>
      <p><strong>{{ datum.name }}</strong> {{ datum.content }}</p>
      <p class="date">{{ datum.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    datum: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>