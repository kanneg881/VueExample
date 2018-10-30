<template>
    <div>
        <span>{{connected}}</span>
        <InfiniteScroll :pictures="pictures" :next="getAlbum"></InfiniteScroll>
    </div>
</template>

<script>
    import InfiniteScroll from './InfiniteScroll';

    export default {
        components: {
            InfiniteScroll,
        },
        data() {
            return {
                after: '',
                connected: false,
                pictures: [],
            };
        },
        methods: {
            connect() {
                FB.login(this.statusGet);
            },
            getAlbum() {
                return new Promise(resolve => {
                    FB.api(
                        '/369358273254586/photos',
                        {
                            after: this.after,
                            fields: ['picture',],
                        },
                        result => {
                            this.after = result.paging.cursors.after;
                            this.pictures = this.pictures.concat(result.data.map(item => item.picture));
                            resolve();
                        }
                    );
                });
            },
            statusGet(result) {
                if (result.status === 'connected') {
                    this.connected = true;
                    this.getAlbum();
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

