<template>
    <div id="app">
        <h1>{{storeCount}}</h1>
        <h1>{{storeCount2}}</h1>
        <h1>{{totalCount}}</h1>
        <button @click="addCount">Add</button>
    </div>
</template>

<script>
    import {mapState, mapMutations,} from 'vuex';

    export default {
        computed: {
            // 用法1
            // ...mapState(['count']),

            // 用法2
            ...mapState({
                storeCount: 'count',
                storeCount2: state => state.count,
                totalCount(state) {
                    return this.localCount + state.count;
                },
            }),
        },
        data() {
            return {
                localCount: 5,
            };
        },
        methods: {
            ...mapMutations(['addCount']),
        },
    }
</script>

<style>
</style>
