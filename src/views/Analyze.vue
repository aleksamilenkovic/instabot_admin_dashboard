<template>
    <div class="fade-in-card">
        <div class="frame" align="center">
            <div class="blur"></div>
            <div class="center">
                <div class="profile">
                    <div class="image">
                        <div class="circle-1"></div>
                        <div class="circle-2"></div>
                        <img :src=profileStats.profile.imgUrl width="80" height="80" alt="User">
                    </div>

                    <div class="name">{{profileStats.profile.username}}</div>
                    <div class="job" >{{profileStats.time.split("T")[0]}}</div>
                    <div class="job" >{{profileStats.time.split("T")[1]}}</div>

                    <div v-if="!profileStats.profile.private" class="stats" style="margin-left: 20%;margin-top: 5%;">
                        <div class="box" style="border-radius: 45px;">
                            <span class="value">{{Math.floor(profileStats.averageLikes * 100) / 100}}</span>
                            <span class="parameter">Average likes</span>
                        </div>
                    </div>
                </div>

                <div class="stats" >
                    <div class="box">
                        <span class="value">{{profileStats.posts}}</span>
                        <span class="parameter">Posts</span>
                    </div>
                    <div class="box">
                        <span class="value">{{profileStats.followers}}</span>
                        <span class="parameter">Followers</span>
                    </div>
                    <div class="box">
                        <span class="value">{{profileStats.following}}</span>
                        <span class="parameter">Following</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!profileStats.profile.private">
            <fusioncharts style="font-size: 16px;"
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="dataSource"
            ></fusioncharts>
            <hr class="featurette-divider" style="margin-left: 15%;margin-right: 15%">
            <p>
                <h1>Recent posts</h1>
            <p>

             <div v-for="groupOfPosts in this.groupedPostsBy3" class="row" :key="groupOfPosts[0].time" style="margin-left: 9%;margin-right: 9%">
                <div v-for="post in groupOfPosts" class="col" :key="post.url">
                    <div class="panel hovereffect" >
                        <b-img :src=post.imgUrl style="" class="img-responsive"/>
                        <a :href="post.url">
                            <div class="overlay">
                                        <span>❤ {{post.likes}}</span>
                                        <h2 style="margin-top:105px;margin-bottom: 95px;"></h2>
                                        <span>🕒 {{post.time}}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="private-profile">
            <h3 style="padding:20px;">Profile is private.</h3>
            <i class="fa fa-lock fa-5x" style="color:gray;" aria-hidden="true"></i>

            <fusioncharts style="font-size: 16px;"
                          :type="type"
                          :width="width"
                          :height="height"
                          :dataFormat="dataFormat"
            ></fusioncharts>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Analyze",
        data(){
            return{
                profile: {},
                profileStats:
                {
                    followers: 221,
                    following: 25,
                    posts: 45,
                    averageLikes: 89.2,
                    time: '2020-01-05',
                    postsStats: [
                        {
                            time: '2020-01-05',
                            likes: 50,
                            url: 'instagram.com/lezalekss',
                            imgUrl: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50787945_282561842424900_2223532194368847872_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=_SMPKvfz6CUAX_G2nLX&oh=b9fc7435a3bda23ca34ab31b9db078a0&oe=5EBDAEEA',
                        },
                        {
                            time: '2020-01-05',
                            likes: 32,
                            url: 'instagram.com/kostasavic',
                            imgUrl: 'https://instagram.fbeg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50787945_282561842424900_2223532194368847872_n.jpg?_nc_ht=instagram.fbeg5-1.fna.fbcdn.net&_nc_ohc=_SMPKvfz6CUAX_G2nLX&oh=b9fc7435a3bda23ca34ab31b9db078a0&oe=5EBDAEEA'
                        }
                    ],
                    profile:{
                        imgUrl:"",
                        private: false
                    }
                },
                groupedPostsBy3:[],
                width: "100%",
                height: "400",
                type: "column2d",
                dataFormat: "json",
                dataSource: {
                    chart: {
                        caption: "Recent posts statistic",
                        subCaption: "likes/time",
                        xAxisName: "Post upload date",
                        yAxisName: "Likes",
                        numberSuffix: " Likes",
                        theme: 'fusion'
                    },
                    data: [
                        ["01-Feb-11",8866],["02-Feb-11",2174],["03-Feb-11",2084],["04-Feb-11",1503],["05-Feb-11",4928],["06-Feb-11",4667]]
                }
            }
        },
        created() {
            // eslint-disable-next-line no-console
            this.profileStats = this.$route.params.profileStats
            if(!this.profileStats)
                this.$router.push('/BotScrapper')
            // eslint-disable-next-line no-undef
            this.groupedPostsBy3 = _.chunk(this.profileStats.postsStats, 3)
            console.log(this.profileStats)
            this.convertPostsForChart()
            console.log(this.dataSource)
        },
        methods:{
            convertPostsForChart(){
                var chartData = []
                for (let i = 0; i < 12; i++) {
                    var chartElement = {label:this.profileStats.postsStats[i].time.replace("T","\n"), value:this.profileStats.postsStats[i].likes}
                    chartData.push(chartElement)
                }
                this.dataSource.data = chartData;
                console.log(this.dataSource)
            }

        }
    }
</script>

<style lang="scss" scoped>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:600,300);

    $brown: #786450;
    $gray: #2a2a2e;
    .blur{
        background-image: url('../assets/Social-Media-Metrics.png');
        position: absolute;
        width: 100%;
        height: 400px;
        filter: blur(2px);
    }
    .frame {
        position: relative;
        width: 100%;
        height: 400px;
        border-radius: 2px;
        box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EEBE6C', endColorstr='#CA7C4E',GradientType=1 );
        color: $gray;
        font-family: 'Open Sans', Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .center {
        position: relative;
        top: 50px;
        height: 299px;
        width: 400px;
        background: rgba(231,232,233,0.60);
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
    }

    .profile {
        float: left;
        width: 200px;
        height: 320px;
        text-align: center;

    .image {
        position: relative;
        width: 70px;
        height: 70px;
        margin: 38px auto 0 auto;

    .circle-1 {
        position: absolute;
        box-sizing: border-box;
        width: 86px;
        height: 86px;
        top: -3px;
        left: -3px;
        border-width: 1px;
        border-style: solid;
        border-color: $gray $gray $gray transparent;
        border-radius: 50%;
        transition: all 1.5s ease-in-out;
    }

    .circle-2 {
    @extend .circle-1;
        width: 92px;
        height: 92px;
        top: -6px;
        left: -6px;
        border-color: $gray transparent $gray $gray;
    }

    img {
        display: block;
        border-radius: 50%;
        background: #F5E8DF;
    }

    &:hover {
         cursor: pointer;

    .circle-1 {
        transform: rotate(360deg);
    }

    .circle-2 {
        transform: rotate(-360deg);
    }

    }

    }

    .name {
        font-size: 15px;
        font-weight: 600;
        margin-top: 20px;
    }

    .job {
        font-size: 11px;
        line-height: 15px;
    }

    .actions {
        margin-top: 33px;

    .btn {
        display: block;
        width: 120px;
        height: 30px;
        margin: 0 auto 10px auto;
        background: none;
        border: 1px solid $brown;
        border-radius: 15px;
        font-size: 12px;
        font-weight: 600;
        box-sizing: border-box;
        transition: all .3s ease-in-out;
        color: $brown;

    &:hover {
         background: $brown;
         color: #fff;
     }
    }
    }

    }

    .stats {
        float: left;
        margin-left: 10%;
    .box {
        box-sizing: border-box;
        width: 120px;
        height: 99px;
        background: #F5E8DF;
        text-align: center;
        padding-top: 28px;
        transition: all .4s ease-in-out;

    &:hover {
         background: #E1CFC2;
         cursor: pointer;
     }

    &:nth-child(2) {
         margin: 1px 0;
     }

    }

    span {
        display: block;
    }

    .value {
        font-size: 18px;
        font-weight: 600;
    }

    .parameter {
        font-size: 11px;
    }

    }
    .posts{
        margin-top:50px;
    }





    .hovereffect {
        float: left;
        overflow: hidden;
        position: relative;
        text-align: center;
        cursor: default;
        border-radius: 25px;
        background-color: #2a2a2e;
        width: 350px;margin:15px;
    }

    .hovereffect .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        padding: 50px 20px;
    }
    .hovereffect img {
        display: block;
        position: relative;
        max-width: none;
        width: calc(100% + 20px);
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background: #2a2a2e;
    }

    .hovereffect:hover img {
        opacity: 0.4;
        filter: alpha(opacity=40);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }

    .hovereffect h2 {
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: 17px;
        overflow: hidden;
        padding: 0.5em 0;
        background-color: transparent;
    }

    .hovereffect h2:after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #fff;
        content: '';
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
    }

    .hovereffect:hover h2:after {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }

    .hovereffect a, .hovereffect p {
        color: #FFF;
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
    }

    .hovereffect:hover a, .hovereffect:hover p {
        opacity: 1;
        filter: alpha(opacity=100);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }



    .fade-in-card {
        animation: fadeInCard ease 2s;
    }
    @keyframes fadeInCard {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    .private-profile{
        background: linear-gradient(90deg, rgba(108,108,108,1) 0%, rgba(255,255,255,1) 50%, rgba(138,138,138,1) 100%);
        width: 100%;
        height: 20%;
        font-family: 'Open Sans', Helvetica, sans-serif;
    }
</style>