<template>
  <div class="bg" id="app">
    <!--<login></login>-->
    <hello-world></hello-world>
  </div>
</template>

<script>
  import Login from "./components/login/login";
  import HelloWorld from "./components/HelloWorld";
export default {
  components: {HelloWorld, Login}, name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
