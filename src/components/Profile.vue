<template>
    <div class="profile" >
        <b-card  class="overflow-hidden " >
            <b-row no-gutters class="card-body align-items-center d-flex justify-content-center">

                    <b-col >
                        <b-card-img :src=profile.imgUrl style="border-radius:50%; " left></b-card-img>
                    </b-col>
                    <b-card-body >

                        <b-row >
                            <b-col >
                                <b-row>
                                    <a :href="`https://www.instagram.com/`+profile.username">
                                        <b-button  pill size="lg" id="username">{{profile.username}}</b-button>
                                    </a>
                                </b-row>
                                <b-row>
                                    <span >Followers: {{profile.followers}}</span>
                                    <span>Following: {{profile.following}}</span>
                                </b-row>

                                <b-row>
                                    <span>Posts: {{profile.posts}}</span>
                                </b-row>
                            </b-col>
                            <b-col >
                                <b-row>
                                    <b-button  pill size="md" id="analyze" >analyze</b-button>
                                </b-row>
                                <b-row>
                                <b-button  pill size="md" id="follow">following</b-button>
                            </b-row>
                            </b-col>
                        </b-row>

                    </b-card-body>
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
                imgUrl: String
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