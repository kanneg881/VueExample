<template>
    <div>
        <h1>Products</h1>
        <router-link :to="{name: 'product', params: {id: 18}}">Shoes</router-link>
        <h2>{{id}}</h2>
        <h2>{{productName}}</h2>
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
            productName() {
                return products[this.$route.params.id];
            },
            queryId() {
                return products[this.$route.query.id];
            },
        },
        props: ['id'],
    };
</script>
