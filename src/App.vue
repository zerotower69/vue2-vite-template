<template>
  <div class="app">
    <img src="../pika.png" alt="logo" />
    <div>vue2+vite by <span style="font-weight: bolder">zerotower</span></div>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    let obj = {
      name: "zerotower",
    };
    console.log("aa");
    console.log(obj?.name);
  },
};
</script>

<style>
.app {
  margin: 0 auto;
  text-align: center;
}
.app img {
  margin: 0 auto;
}
</style>
