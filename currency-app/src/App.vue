<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import CurrencyPage from '@/views/CurrencyPage.vue'

export default {
  components: {
    CurrencyPage
  }
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
