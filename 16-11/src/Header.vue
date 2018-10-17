<template>
    <div class="header">
        <span class="cart">
            <span>購物車內: </span>
            <span class="lessons">{{lessons}}</span>
            <span> 套課程，共 </span>
            <span class="price">${{price}}</span>
        </span>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                lessons: 'lessonsInCart',
                price: 'priceInCart',
            }),
        },
    };
</script>

<style scoped>
    .header {
        background-color: #41b883;
        box-sizing: border-box;
        color: white;
        font-size: .9em;
        padding: 6px 8px;
        position: fixed;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, .7);
        width: 100%;
    }

    .lessons, .price {
        color: #ffc;
        font-weight: bolder;
    }
</style>
