import About from './About.vue';
import AboutHome from './AboutHome.vue';
import AboutUs from './AboutUs.vue';
import AboutYou from './AboutYou.vue';
import App from './App.vue';
import Products from './Products.vue';
import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    // history 路徑沒有 #
    // hash 路徑有 #
    mode: 'history',
    routes: [
        {
            children: [
                {
                    alias: 'story',
                    children: [
                        {
                            alias: ['/2', '2'],
                            components: {
                                us: AboutUs,
                                you: AboutYou,
                            },
                            path: 'both',
                        },
                        {component: AboutHome, name: 'home', path: '',},
                        {component: AboutYou, path: 'you',},
                        {component: AboutUs, name: 'us', path: 'us',},
                    ],
                    component: About,
                    path: 'about',
                },
                {
                    component: Products,
                    name: 'product',
                    path: 'product/:id?',
                    props: route => {
                        return {
                            id: route.params.id,
                        };
                    },
                },
                {
                    component: Products,
                    path: 'products/:id?',
                    props: true,
                },
                {
                    component: Products,
                    path: 'products/shoes',
                    props: {id: 18},
                },
                {
                    path: '*',
                    // 用法1
                    // redirect: '/about',
                    
                    // 用法2
                    // redirect: {name: 'home'},
                    
                    // 用法3
                    redirect: from => {
                        // 用法1
                        // return '/about';
                        
                        // 用法2
                        return {name: 'home',};
                    },
                },
            ],
            component: App,
            path: '/',
        },
    ],
});
