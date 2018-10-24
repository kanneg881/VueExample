<template>
    <div>
        <span>{{connected}}</span>
        <button v-if="!connected" @click="connect">Connect</button>
        <div v-else>
            <h4>{{userName}}</h4>
            <img :src="picture"/>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                connected: false,
                picture: '',
                userName: '',
            };
        },
        methods: {
            connect() {
                FB.login(this.statusGet);
            },
            statusGet(result) {
                if (result.status === 'connected') {
                    this.connected = true;
                    FB.api(
                        '/me',
                        'GET',
                        {
                            fields: ['name', 'picture',],
                        },
                        apiResult => {
                            this.userName = apiResult.name;
                            this.picture = apiResult.picture.data.url;
                            console.log(apiResult);
                        }
                    )
                }
            },
        },
        mounted() {
            FB.init({
                appId: 145697292715292,
                version: 'v2.10',
            });
            FB.getLoginStatus(this.statusGet);
        },
    };
</script>

<style>
</style>

