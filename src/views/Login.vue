<template>
    <div class="cont" >
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
            <h2>Please Sign in</h2>
            <form name="form" @submit.prevent="handleLogin">
                <div class="form-group">
                    <input
                            v-model="user.username"
                            v-validate="'required'"
                            type="text"
                            class="form-control"
                            name="username"
                            placeholder="username" />
                    <div
                            v-if="errors.has('username')"
                            class="alert alert-danger"
                            role="alert">
                        Username is required!
                    </div>
                </div>
                <div class="form-group">
                    <input
                            v-model="user.password"
                            v-validate="'required'"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="password" />

                    <div    v-if="errors.has('password')"
                            class="alert alert-danger"
                            role="alert">
                        Password is required!
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" :disabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        <span>Login</span>
                    </button>
                </div>
                <div class="form-group">
                    <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                </div>
            </form>
            <h2></h2>
        </div>


    </div>
</template>

<script>
    import User from "../models/user";

    export default {
        name: "Login",
        data() {
            return {
                user: new User('', ''),
                loading: false,
                message: ''
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/home');
            }
        },
        methods:{
            handleLogin() {
                this.loading = true;
                this.$validator.validateAll().then(isValid => {
                    if (!isValid) {
                        this.loading = false;
                        return;
                    }

                    if (this.user.username && this.user.password) {
                        this.$store.dispatch('auth/login', this.user).then(
                            () => {
                                this.$router.push('/');
                            },
                            error => {
                                this.loading = false;
                                this.message =
                                    (error.response && error.response.data) ||
                                    error.message ||
                                    error.toString();
                            }
                        );
                    }
                });
            }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Raleway:400,700");
    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        font-family: 'Raleway', sans-serif;
    }

    .cont {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .cont:hover .top:before, .cont:hover .top:after, .cont:hover .bottom:before, .cont:hover .bottom:after, .cont:active .top:before, .cont:active .top:after, .cont:active .bottom:before, .cont:active .bottom:after {
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay: 0s;
    }
    .cont:hover .center, .cont:active .center {
        opacity: 1;
        transition-delay: 0.2s;
    }

    .top:before, .top:after, .bottom:before, .bottom:after {
        content: '';
        display: block;
        position: absolute;
        width: 200vmax;
        height: 200vmax;
        top: 50%;
        left: 50%;
        margin-top: -100vmax;
        transform-origin: 0 50%;
        transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
        z-index: 10;
        opacity: 0.65;
        transition-delay: 0.2s;
    }

    .top:before {
        transform: rotate(45deg);
        background: #e46569;
    }
    .top:after {
        transform: rotate(135deg);
        background: #ecaf81;
    }

    .bottom:before {
        transform: rotate(-45deg);
        background: #60b8d4;
    }
    .bottom:after {
        transform: rotate(-135deg);
        background: #3745b5;
    }

    .center {
        position: absolute;
        width: 400px;
        height: 400px;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
        transition-delay: 0s;
        color: #333;
    }
    .center input {
        width: 100%;
        padding: 15px;
        margin: 5px;
        border-radius: 1px;
        border: 1px solid #ccc;
        font-family: inherit;
    }
</style>