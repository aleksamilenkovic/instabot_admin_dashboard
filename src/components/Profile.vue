<template>
    <div class="profile">
            <b-card :img-src=profile.image img-alt="Card image" fluid  img-left >
                <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        data(){
            return{

            }
        },
        props:{
            profile:{
                username: String,
                followers: Number,
                following: Number,
                posts: Number,
                image: String
            }

        }

    }
</script>

<style scoped>
    .profile{
        margin:1%;
    }
</style>