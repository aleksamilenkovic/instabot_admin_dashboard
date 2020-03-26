<template>
    <div id="home">

        <div class="background">
            <div class="element">
                <img src="../assets/logo.png" style="margin-top:5%; ">
            </div>
        </div>
        <hr class="featurette-divider" style="margin-left: 15%;margin-right: 15%">
        <div class="container features">
            <b-row>
                <b-col lg="4">
                    <img class="rounded-circle feature" src="../assets/instagram-follower.png" alt="Following" width="140" height="140">
                    <h4>Following</h4>

                </b-col>
                <b-col lg="4">
                    <img class="rounded-circle feature" src="../assets/instagram-heart.png" alt="Liking photos" width="130" height="130">
                    <h4>Liking photos</h4>

                </b-col>
                <b-col lg="4">
                    <img class="rounded-circle feature" src="../assets/Instagram-Analytics.jpg" alt="Generic placeholder image" width="130" height="130">
                    <h4>Scrapping stats</h4>

                </b-col>
            </b-row>
        </div>
        <hr class="featurette-divider" style="margin-left: 15%;margin-right: 15%">

    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{

            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        margin-top:8%;
        margin-bottom: 8%;
        font-family: 'Ink Free', Helvetica, Arial, sans-serif;
    }
    #home{

    }
    .background{
        display: flex;
        background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
        height: 500px;
    }
    .element {
        height: 220px;
        width: 220px;
        margin: auto;
        border-radius: 10%;
        background-color: #2a2a2e;
        animation-name: stretch;
        animation-duration: 1.5s;
        animation-timing-function: ease-out;
        animation-delay: 0;
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
    .feature{
        margin:5px;
        transition: transform 0.5s;
    }
    .feature:hover {
        transform: rotate(360deg);
     }

</style>