<template>
    <div id="home">
        <div class="background">
            <div class="element">
                <img src="../assets/logo.png" style="margin-top:10%; " alt="logo" />
            </div>

        </div>
        <div class="profiles" v-for="profile in profiles" :key="profile.username" >
            <profile :profile="profile" />
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    import Profile from "../components/Profile";
    export default {
        name: "Home",
        components: {Profile},
        data(){
            return{
                profiles:
                        [{
                            username: 'lezalekss',
                            followers: 221,
                            following: 25,
                            posts: 45,
                            image: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/43913073_2056866304644254_4326191411889176576_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=Pzm4zv2bDhsAX8tdn2f&oh=3424359fbafb4abf4cfa54d5be47e71e&oe=5EC55965'
                        },
                        {
                            username: 'ognjanovicni',
                            followers: 215,
                            following: 45,
                            posts: 20,
                            image: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72274938_1002072803485828_2940947451135131648_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=zAr1tlWhujIAX_UrvFh&oh=9cea15cd27c462c0d90f532a58cfbb53&oe=5ED0CD54'
                        },
                         {
                             username: 'kostasavic',
                             followers: 322,
                             following: 121,
                             posts: 70,
                             image: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50787945_282561842424900_2223532194368847872_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=_SMPKvfz6CUAX_G2nLX&oh=b9fc7435a3bda23ca34ab31b9db078a0&oe=5EBDAEEA'
                         }
                ]
            }
        },
        mounted(){
            axios.get("localhost").then((r)=>{
                console.log(r);
            })
        },
        methods:{

        }
    }
</script>

<style scoped>
    .profiles{
        width: 50%;
        margin: 5% auto auto;
    }
    #home{

    }
    .background{
        display: flex;
        background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
        height: 500px;
    }
    .element {
        height: 250px;
        width: 250px;
        margin: auto;
        border-radius: 10%;
        background-color: #2a2a2e;
        animation-name: stretch;
        animation-duration: 1.5s;
        animation-timing-function: ease-out;
        /*animation-delay: 0;*/
        animation-direction: alternate;
        animation-iteration-count: 3;
        animation-fill-mode: none;
        animation-play-state: running;
    }

    @keyframes stretch {
        0% {
            transform: scale(.3);
            background-color: #dfd9d9;
            border-radius: 100%;
        }
        50% {
            background-color: lightgray;
        }
        100% {
            transform: scale(1.1);
            background-color: #2a2a2e;
        }
    }
</style>