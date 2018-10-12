<template>
    <div id="app">
        <h1>{{storeCount}}</h1>
        <h1>{{storeCount2}}</h1>
        <h1>{{totalCount}}</h1>
        <h1>{{countX2}}</h1>
        <h1>{{countX2XCount}}</h1>
        <h1>{{xValue}}</h1>
        <button @click="addCount(2)">Add</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['countX2', 'countX2XCount', 'countXValue']),

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
            xValue() {
                return this.getCountXValue();
            },
        },
        data() {
            return {
                localCount: 5,
            };
        },
        methods: {
            ...mapActions(['fetchTodos']),
            // 用法1
            // addCount() {
            //     this.$store.commit({
            //         type: 'addCount',
            //         step: 2,
            //     });
            // },

            // 用法2
            // ...mapMutations(['addCount']),

            // 用法3
            ...mapMutations({
                addCount: 'addCount',
            }),

            getCountXValue() {
                return this.countXValue(10);
            },
        },
        mounted() {
            this.fetchTodos({id: 2}).then(() => {});
        }
    }
</script>
<style>
</style>
