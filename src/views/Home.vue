<template>
    <div id="home">
        <div class="background">
            <div class="element">
                <img src="../assets/logo.png" style="margin-top:10%; ">
            </div>

        </div>
        <profile-stats></profile-stats>

    </div>
</template>

<script>
    import ProfileStats from "@/components/ProfileStats";
    export default {
        name: "Home",
        components: {ProfileStats},

    }
</script>

<style scoped>

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
</style>