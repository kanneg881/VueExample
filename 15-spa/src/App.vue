<template>
    <div id="app">
        <Menu></Menu>
        <img src="./assets/image/kv.jpg"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Menu from './Menu.vue';

    export default {
        components: {
            Menu,
        },
    };
</script>
