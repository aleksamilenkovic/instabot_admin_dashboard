<template>
  <div id="app">
    <navbar/>
    <Home/>
    <footer class="footer" >
      <div class="container text-center" style="margin-top:1%">
        <small >Copyright &copy; lezalekss instabot d.o.o.</small>
      </div>
    </footer>
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
}
.footer {
   padding: 1%;
   margin-top: 2%;
   width: 100%;
   color: white;
   background-color: #2a2a2e;
 }
</style>
