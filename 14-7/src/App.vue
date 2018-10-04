<template>
    <div id="app">
        <TodoInput @submit="addTodo"></TodoInput>
        <ul>
            <TodoItem v-for="(todo, index) in todos" :data="todo" @click.native="removeTodo(index)"></TodoItem>
        </ul>
    </div>
</template>

<script>
    import TodoInput from './TodoInput.vue';
    import TodoItem from './TodoItem.vue';

    export default {
        name: 'app',
        components: {
            TodoInput,
            TodoItem,
        },
        data() {
            return {
                todos: [],
            }
        },
        methods: {
            addTodo(text) {
                this.todos.push(text);
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
        }
    }
</script>

<style>

</style>
