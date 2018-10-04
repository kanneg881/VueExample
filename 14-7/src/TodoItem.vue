<template>
    <li class="todo-item">{{data}}</li>
</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style>
    .todo-item {
        background-color: #FED;
        cursor: pointer;
        font-family: Arial, sans-serif;
        font-size: 1em;
        margin: 1px 0;
        padding: 4px 8px;

    }

    .todo-item:hover {
        background-color: #DEF;
    }
</style>
