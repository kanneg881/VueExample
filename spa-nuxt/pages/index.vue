<template>
    <div id="app">
        <Menu></Menu>
        <img src="../assets/image/kv.jpg"/>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
    import Menu from '../components/Menu.vue';

    export default {
        components: {
            Menu,
        },
    };
</script>
