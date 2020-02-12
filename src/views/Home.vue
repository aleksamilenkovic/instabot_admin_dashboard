<template>
    <div id="home">
        <profile :profile="this.profile"/>
    </div>
</template>

<script>
    import Profile from "../components/Profile";
    export default {
        name: "Home",
        components: {Profile},
        data(){
            return{
                profile:{
                    username: 'lezalekss',
                    followers: 221,
                    following: 25,
                    posts: 45,
                    image: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73470583_2420940214814795_9004833367711023104_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=p1LehSgZGKYAX_UQve1&oh=ca482fef6b1ffdad082cd3e999c3f963&oe=5F03188E'
                }
            }
        }
    }
</script>

<style scoped>

</style>