<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-bind:class=" { 'navbarOpen': show }" id="menu" >
        <a class="navbar-brand" href="#">Instabot</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
               <span class="instagram">
                  <span class="fa fa-instagram" id="id_icon" style="font-size: 2em;"></span>
               </span>
            </form>
        </div>
    </nav>
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
        border-radius: 50%;
        height: 31px;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }
</style>