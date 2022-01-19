<template>
  <div id="app">
    <the-header :title="title" />
    <navigation-bar />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import NavigationBar from "@/components/NavigationBar.vue"

export default {
  components: {
    TheHeader,
    NavigationBar,
  },
  computed: {
    title() {
      return this.$route.meta.title
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
