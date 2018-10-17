<template>
    <div id="app">
        <Header/>
        <LessonList/>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import LessonList from './LessonList.vue';

    export default {
        components: {
            Header,
            LessonList,
        },
    };
</script>

<style>
    html, body {
        font-family: Microsoft JhengHei, sans-serif;
        padding: 0;
        margin: 0;
    }
</style>
