<template>
    <div>
        <div class="overlay" v-bind:class="{ 'd-none': loaded}">
            <div class="loader"></div>
        </div>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div>
                    <center>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar">
                        <p></p>
                        <h2 style="margin: 0px;">{{username}}</h2>
                    </center>
                </div>

                <div class="title" style="font-size: 2em">
                    Selamat datang di E-School
                </div>

                <br>

                <div class="links">
                    <div class="container">
                        <div class="row">
                            <a class="col-sm-12" href="javascript:void(0)" @click="doLogout()">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                username:'',
                loaded:false,
                IS_URL:'',
                token:'',
                users:{},
                details:{},
                headers:''
            }
        },

        created(){
            this.token = window.config.getCookie('eschool_token_app')
            this.headers = {
                'Authorization': 'Bearer '+this.token,
                'Content-Type':'application/json'
            }
            if(this.token === undefined || this.token === null || this.token === '')
            {
                window.location = "login.html"
            }
            this.loadData()
            this.loadUsers()
        },
        methods: {
            loadData(){
                fetch(window.config.getApiUrl()+'/getUser', {
                    method:'post',
                    headers: this.headers
                })
                .then(res => res.json())
                .then(res => {
                    this.username = res.name
                    this.loaded = true
                    this.details = res
                })
            },
            loadUsers(){
                fetch(window.config.getApiUrl()+'/user',{
                    headers:this.headers
                })
                .then(res => res.json())
                .then(res => {
                    this.users = res
                })
            },
            doLogout(){
                fetch(window.config.getApiUrl()+'/logout', {
                    method:'post',
                    headers: this.headers
                })
                .then(res => {
                    window.config.deleteCookie('eschool_token_app')
                    window.location = "login.html"
                })
            }
        }
    }
</script>