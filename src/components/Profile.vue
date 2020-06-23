<template>
    <div class="profile" >
        <Loading :active.sync="visible" :can-cancel="true"></Loading>
        <div class="container overflow-hidden card-body ">
            <div class="row" >
                <div class="col-md-3">
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
                <div class="col-md-1">
                    <span class="fa fa-remove delete" @click="openDeleteModal"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import ContentService from '../services/content-service'
    export default {
        name: 'Profile',
        data(){
            return{
                profileStats : {},
                visible : false
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
        components:{
            Loading: Loading
        },
        methods:{
            analyze(){
                this.visible = true
                // setTimeout(() => {  loader.hide(); }, 5000);

                ContentService.getProfileStats(this.profile.username)
                    .then(stats=>{
                        this.$router.push({name:'analyze', params:{ profileStats: stats.data, username: this.profile.username}})
                    }).catch(error=>{ console.log(error) })
                this.visible = false
            },
            deleteProfile(){

            },
            openDeleteModal(){
                this.$emit('setProfileToDelete')
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
    #username:hover{
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);

    }
    .delete{
        font-size:24px;color: #6c757d;
        border: none;
        outline:none;
    }
    .delete:hover{
        transform: scale(1.3);
    }
</style>