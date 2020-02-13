<template>
    <div class="profile">
            <b-card :img-src=profile.image img-alt="Card image" fluid img-height="120px" img-left >
                <b-card-text >
                    <b-row >
                        <b-col >
                            <h4>{{profile.username}}</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col >
                            <span>Followers: {{profile.followers}}</span>
                        </b-col>
                        <b-col >
                            <span>Following: {{profile.following}}</span>
                        </b-col>
                    </b-row>

                    <b-col>
                        <span>Posts: {{profile.posts}}</span>
                    </b-col>
                    <b-row>

                    </b-row>

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