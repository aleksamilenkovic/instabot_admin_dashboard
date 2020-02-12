<template>
  <div id="app">
    <navbar/>
    <Home/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "./views/Home";

export default {
  name: 'app',
  components: {
    Home,
    Navbar,
  }
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
