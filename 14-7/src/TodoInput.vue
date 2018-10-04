<template>
    <form @submit.prevent="submit">
        <label>
            <input v-model="text"/>
        </label>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
            };
        },
        methods: {
            submit() {
                this.$emit('submit', this.text);
                this.text = '';
            },
        },
    }
</script>
