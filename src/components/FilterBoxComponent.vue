<template>
  <div
    :class="`filter-item ${filter}`"
    :style="{ backgroundImage: `url(${this.newImageUrl})` }"
  >
    <slot name="title"></slot>
    <slot name="content"></slot>
    <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
  name: "FilterBoxComponent",
  props: {
    newImageUrl: String,
    filter: String,
  },
  methods: {
    fire() {
        this.emitter.emit('작명', '데이터');
    }
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>