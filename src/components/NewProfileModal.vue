<template>
    <b-modal id="new-profile-modal" centered title="Add new insta profile" hide-footer>
        <Loading :active.sync="visible" :can-cancel="true"></Loading>

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
    import Loading from 'vue-loading-overlay';
    import ContentService from '../services/content-service'
    export default {
        name: "NewProfileModal",
        data(){
            return{
                toLike: false,
                toFollow: false,
                username: '',
                visible: false
            }
        },
        components:{
          Loading: Loading
        },
        methods:{
            scrapProfile(){
                /*let loader = this.$loading.show({
                    // Optional parameters
                    // container: null,
                    canCancel: false,
                    // onCancel: this.onCancel,
                    color: 'red',
                    width: 84,
                    height: 84,
                    backgroundColor: '#2a2a2e',
                });*/
                this.visible = true;
                // simulate AJAX
                ContentService.getNewProfile(this.username, this.toLike, this.toFollow).then(stats=>{
                    this.visible = false;
                    this.$router.push({name:'analyze', params:{ profileStats: stats.data, username: this.username}})
                }).catch(error=>{console.log(error)})
                // loader.hide()
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