<template>
  <div id="header">
    <header id="header_img">
      <img class="header_img" src="./assets/logo.png" alt="">
    </header>
    <nav id="menubar">
      <button @click="list()" class="tabs" id="lists-button">
        <img class="nav_img" src="./assets/home.png" alt="" /> 게시판
      </button>
    </nav>
  </div>
  <router-view />
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    list() {
      this.$router.push({ path: "/" });
    },
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
