<template>
    <div class="lesson">
        <div class="cover" :style="coverStyle"></div>
        <span class="title">{{lesson.title}}</span>
        <span class="price">{{lesson.price}}</span>
        <span class="teachers">{{teachers}}</span>
        <div :class="buttonClass" @click="addToCart(lesson)">
        {{buttonLabel}}
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['isLessonInCart']),
            buttonClass() {
                return {
                    buy: true,
                    bought: this.inCart,
                };
            },
            buttonLabel() {
                return this.inCart ? '已加入購物車' : '加入購物車';
            },
            coverStyle() {
                return {
                    backgroundImage: `url('${this.lesson.cover}')`,
                };
            },
            inCart() {
                return this.isLessonInCart(this.lesson);
            },
            teachers() {
                return this.lesson.teachers
                    .map(teacher => teacher.username)
                    .join(', ');
            },
        },
        methods: {
            ...mapMutations(['addToCart']),
        },
        props: ['lesson'],
    };
</script>

<style scoped>
    span {
        display: block;
        padding: 6px;
    }

    .buy {
        background-color: #DEE;
        clear: both;
        cursor: pointer;
        font-size: .7em;
        text-align: center;
        padding: 6px;
    }

    .buy:hover {
        background-color: #CEE;
    }

    .buy.bought {
        background-color: #CCC;
    }

    .cover {
        background: center center;
        background-size: cover;
        height: 120px;
        width: 100%;
    }

    .lesson {
        border-radius: 6px;
        box-shadow: 2px 2px 15px #999;
        display: inline-block;
        margin: 10px;
        overflow: hidden;
        vertical-align: top;
        width: 200px;
    }

    .price {
        color: #178FAC;
        float: left;
        font-size: .8em;
    }

    .price:before {
        content: '$';
    }

    .teachers {
        color: #178FAC;
        float: right;
        font-size: .7em;
        line-height: 1.7em;
    }

    .title {
        color: #333;
        font-size: .9em;
        height: 30px;
        text-align: left;
    }
</style>
