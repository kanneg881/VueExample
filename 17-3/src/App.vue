<template>
    <div id="app">
        <h1>App</h1>
        <h2>{{count}}</h2>
        <RunningNumber :number="count"></RunningNumber>
        <br>
        <button @click="count += 100">+</button>
        <button @click="count -= 100">-</button>
    </div>
</template>

<script>
    import RunningNumber from './RunningNumber';

    export default {
        components: {
            RunningNumber,
        },
        data() {
            return {
                count: 0,
            };
        },
        name: 'app',
    };
</script>

<style>
</style>
