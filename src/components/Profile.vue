<template>
    <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="`${profile.image}`" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body title="Horizontal Card">
                        <b-card-text>
                            <img slot="{{profile.image}}">
                            {{profile.image}}
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                            {{profile.username}}
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

</style>