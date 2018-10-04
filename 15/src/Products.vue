<template>
    <div>
        <h1>Products</h1>
        <h2>{{id}}</h2>
        <h2>{{queryId}}</h2>
    </div>
</template>

<script>
    const products = {
        18: 'Shoes',
        26: 'T-Shirts',
        37: 'Pants',
    };

    export default {
        computed: {
            queryId() {
                return products[this.$route.query.id];
            },
            id() {
                return products[this.$route.params.id];
            },
        },
    };
</script>
