<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" id="menu">
        <span class="instagram">
                  <span class="fa fa-instagram" id="id_icon" style="font-size: 2em;"></span>
         </span>

        <b-navbar-brand href="#">Instabot</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/BotScrapper">BotScrapper</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                show: true
            }
        },
        methods: {
            toggleNavbar() {
                this.show = !this.show
            }
        }
    }
</script>

<style scoped>
    #menu{
        /*background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);*/
        color: white;
    }
    .instagram{
        margin-right: 1%;
        font-size: 20px;
        width: 40px;
        height: 40px;
        border-radius: 20%;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }
</style>