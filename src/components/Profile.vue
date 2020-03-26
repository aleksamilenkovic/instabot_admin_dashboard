<template>
    <div class="profile" >
        <div class="container overflow-hidden card-body ">
            <div class="row" >
                <div class="col-md-4">
                    <b-img :src=profile.imgUrl style="border-radius:50%;width: 150px;" ></b-img>
                </div>
                <div class="col-md-4" >
                        <a :href="`https://www.instagram.com/`+profile.username">
                            <b-button  pill size="lg" id="username">{{profile.username}}</b-button>
                        </a>
                    <b-row style="margin-top:5%">
                        <b-col  lg="6">
                            <span >Followers: {{profile.followers}}</span>
                        </b-col>
                        <b-col  lg="6">
                            <span >Following: {{profile.following}}</span>
                        </b-col>
                    </b-row>
                        <span>Posts: {{profile.posts}}</span>
                </div>
                <div class="col-md-4" >
                        <b-button pill size="md" id="analyze" @click="analyze()">analyze</b-button>
                        <br >
                        <b-button pill size="md" id="follow" style="margin-top:15%">following</b-button>
                </div>
            </div>
        </div>

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

        },
        methods:{
            analyze(){
                this.$router.push({name:'analyze', params:{ username: this.profile.username }})
            }
        }

    }
</script>

<style scoped>
    .followers_following{
    }
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