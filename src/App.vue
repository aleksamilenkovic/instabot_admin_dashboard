<template>
  <div id="app">
    <navbar/>
    <div id="main">
      <router-view></router-view>
    </div>
    <footer class="footer" >
      <div class="container text-center" style="margin-top:1%">
        <small >Copyright &copy; lezalekss instabot d.o.o.</small>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'app',
  components: {
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
}
.footer {
   padding: 1%;
   margin-top: 2%;
   width: 100%;
   color: white;
   background-color: #2a2a2e;
 }
</style>
