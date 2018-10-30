<template>
    <div class="list">
        <div class="item" v-for="picture in pictures" :style="getStyle(picture)"></div>
        <div v-if="loading" class="item">Loading</div>
    </div>
</template>

<script>
    export default {
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll);
        },
        data() {
            return {
                loading: false,
            };
        },
        methods: {
            getStyle(picture) {
                return {
                    backgroundImage: `url('${picture}')`,
                };
            },
            onScroll() {
                if (this.loading) {
                    return;
                }

                if (window.scrollY + window.innerHeight > document.body.scrollHeight - 50) {
                    this.loading = true;
                    this.next().then(() => this.loading = false);
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
        },
        props: ['next', 'pictures'],
    }
</script>

<style scoped>
    .item {
        background: center center no-repeat #CCC;
        background-size: cover;
        flex: 0 0 300px;
        height: 300px;
    }

    .list {
        display: flex;
        flex-flow: row wrap;
    }
</style>
