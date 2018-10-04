<template>
    <div id="app">
        <div class="menu">
            <router-link to="/about">About</router-link>
            <router-link to="/products">Products</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import VueRouter from 'vue-router';
    import About from './About.vue';
    import Products from './Products.vue';

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        router: new VueRouter({
            routes: [
                {
                    path: '/about',
                    component: About,
                },
                {
                    path: '/products/:id?',
                    component: Products,
                }
            ],
        }),
    };
</script>

<style>
</style>
