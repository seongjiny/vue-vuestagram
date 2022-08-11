<template>
  <div>
    <!-- 저번시간에 만든거 -->
    <div v-if="page == 0">
      <post-component v-for="datum in data" :key="datum" :datum="datum" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="page == 1">
      <div
        :class="`upload-image ${currentFilter}`"
        :style="`background-image:url(${newImageUrl})`"
      ></div>
      <div class="filters">
        <filter-box-component
          v-for="filter in filters"
          :key="filter"
          :newImageUrl="newImageUrl"
          :filter="filter"
          @click="
            currentFilter = filter;
            $emit('updateFilter', filter);
          "
        >
          <template v-slot:title><h4>{{ filter }}</h4></template>
          <template v-slot:content>abc</template>
        </filter-box-component>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="page == 2">
      <div
        :class="`upload-image ${currentFilter}`"
        :style="{ backgroundImage: `url(${newImageUrl})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          placeholder="내용을 여기에"
          @input="$emit('updateContent', $event.target.value)"
        ></textarea>
      </div>
    </div>
    <!-- 팔로워 페이지 -->
    <div v-if="page==3">
      <my-page-component :one="1"></my-page-component>
    </div>
  </div>
</template>

<script>
import PostComponent from "./PostComponent.vue";
import FilterBoxComponent from "./FilterBoxComponent.vue";
import MyPageComponent from "./MyPageComponent.vue";
export default {
  name: "ContainerComponent",
  components: {
    PostComponent,
    FilterBoxComponent,
    MyPageComponent,
  },
  props: {
    data: Array,
    page: Number,
    newImageUrl: String,
  },
  data() {
    return {
      currentFilter: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>