<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MockjsDemo />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MockjsDemo from './components/MockjsDemo'
export default {
  name: 'App',
  components: {
    MockjsDemo
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
