<template>
    <b-modal id="delete-modal" centered hide-footer>
        <div >
            <div  class="d-flex justify-content-center">
                Are you sure u wanna delete profile: <span style="font-weight: bold">{{this.username}}</span> ?
            </div>
            <div class="d-flex justify-content-center">
                <b-button class="confirm-button" @click="deleteProfile">Yes</b-button>
                <b-button class="confirm-button" @click="hideModal">No</b-button>
            </div>

        </div>
    </b-modal>
</template>

<script>
    import ContentService from '../services/content-service'
    export default {
        name: "DeleteProfileModal",
        props:{
          username: String
        },
        methods:{
            hideModal(){
                this.$bvModal.hide("delete-modal")
            },
            deleteProfile(){
                ContentService.deleteProfile(this.username).then(()=>{
                    this.$router.go()
                })
            }
        }
    }
</script>

<style scoped>
    .confirm-button{
        margin: 10%;
        width: 150px;
    }
</style>