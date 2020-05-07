<template>
    <div class="botscrapper">
        <div class="profiles" v-for="(profile,index) in profiles" :key="profile.username" >
            <profile :profile="profile" v-bind:class="classObject(index)"/>
        </div>
    </div>
</template>

<script>
    import ContentService from '../services/content-service'
    import Profile from "@/components/Profile";
    export default {
        name: "BotScrapper",
        components: {Profile},
        data(){
            return{
                profiles: [
                    /*{
                        username: 'lezalekss',
                        followers: 221,
                        following: 251,
                        posts: 45,
                        imgUrl: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/43913073_2056866304644254_4326191411889176576_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=Pzm4zv2bDhsAX8tdn2f&oh=3424359fbafb4abf4cfa54d5be47e71e&oe=5EC55965'
                    },
                    {
                        username: 'ognjanovicni',
                        followers: 215,
                        following: 453,
                        posts: 20,
                        imgUrl: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72274938_1002072803485828_2940947451135131648_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=zAr1tlWhujIAX_UrvFh&oh=9cea15cd27c462c0d90f532a58cfbb53&oe=5ED0CD54'
                    },
                    {
                        username: 'kostasavic',
                        followers: 322,
                        following: 121,
                        posts: 70,
                        imgUrl: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50787945_282561842424900_2223532194368847872_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=_SMPKvfz6CUAX_G2nLX&oh=b9fc7435a3bda23ca34ab31b9db078a0&oe=5EBDAEEA'
                    }*/
                ],

            }
        },
        methods:{
            getProfiles(){
                ContentService.getAllProfiles().then(response =>{
                    this.profiles = response.data
                }).catch(error =>{
                    console.log(error);
                    this.$store.dispatch('auth/logout');
                    this.$router.push('/login');
                })
            },
            classObject: function (index) {
                return index%2===0 ? 'slidein-to-left':'slidein-to-right';
            }
        },
        mounted(){
            this.getProfiles()
        },
    }
</script>

<style scoped>
    .botscrapper{
        min-height: 1000px;
    }
    .profiles{
        width: 50%;
        margin: 5% auto auto;
    }
    .slidein-to-left {
        animation: slidein-to-left ease 1s;
    }
    .slidein-to-right {
        animation: slidein-to-right ease 1s;
    }
    @keyframes slidein-to-left {
        from {
            margin-left: 200%;
            width: 100%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }

    @keyframes slidein-to-right {
        from {
            margin-left: -200%;
            width: 100%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }
</style>