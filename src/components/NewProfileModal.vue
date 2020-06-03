<template>
    <b-modal id="new-profile-modal" centered title="Add new insta profile" hide-footer>
        <div class="content">
            <b-input placeholder="Enter profile username" name="profile-username" v-model="username" @keydown.enter="scrapProfile()"></b-input>
            <div class="config-box" >
                <span >To like:</span>
                <i :class="resolveHeartClass()" @click="like"></i>
            </div>
            <div class="config-box">
                <span>To follow:</span>
                <span class="to-follow">
                    <i :class="resolveFollowClass()" @click="follow"></i>
                </span>

            </div>
        </div>
    </b-modal>
</template>

<script>
    import ContentService from '../services/content-service'
    export default {
        name: "NewProfileModal",
        data(){
            return{
                toLike: false,
                toFollow: false,
                username: '',
            }
        },
        methods:{
            scrapProfile(){
                ContentService.getNewProfile(this.username, this.toLike, this.toFollow).then(stats=>{
                    this.$router.push({name:'analyze', params:{ profileStats: stats.data, username: this.username}})
                }).catch(error=>{console.log(error)})
            },
            resolveHeartClass(){
                return this.toLike ? "fa fa-heart like-active": "fa fa-heart";
            },
            like(){
                this.toLike = !this.toLike;
            },
            resolveFollowClass(){
                return this.toFollow ? "fa fa-user-plus follow-active": "fa fa-user-plus";
            },
            follow(){
                this.toFollow = !this.toFollow;
            }
        }
    }
</script>

<style scoped>
    .content{
    }
    .fa{
        color: #6c757d ;
        font-size: 50px;
        vertical-align: middle;
        margin-left: 7px;
        transition: all 0.3s linear;
    }
    .fa:hover{
        transform: scale(1.1);
    }
    .like-active{
        color: red ;
        font-size: 50px;
        vertical-align: middle;
        margin-left: 7px;
        transition: all 0.5s linear;
    }
    .follow-active{
        color: red ;
        font-size: 50px;
        vertical-align: middle;
        margin-left: 7px;
        transition: all 0.5s linear;
    }

    .config-box{
        display:inline-block;
        margin:0 8% ;
        padding:15px;
    }
</style>