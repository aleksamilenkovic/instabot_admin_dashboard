<template>
    <div class="profile">
        <b-card no-body class="overflow-hidden" >
            <b-row no-gutters>
                <b-col md="3">
                    <b-card-img :src=profile.image style="border-radius:50%; " left></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body >
                        <b-card-text><b-row >
                            <b-col >
                                <a :href="`https://www.instagram.com/`+profile.username">
                                    <b-button  pill size="lg" id="username">{{profile.username}}</b-button>
                                </a>
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
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
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
        font-family: 'Ink Free', Helvetica, Arial, sans-serif;
    }
    .overflow-hidden{
        background-color: rgba(154,154,154,0.13);

    }
    #username:hover{  background: #f09433;
        background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );

    }
</style>