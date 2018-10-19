<template>
    <div>
        <label>
            <input type="text" v-model="text"/>
        </label>
        <div class="lesson-list">
            <div class="lesson" v-for="lesson in lessons">
                <img :src="lesson.cover"/>
                <span>{{lesson.title}}</span>
                <label>{{lesson.owner.username}}</label>
            </div>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce';

    const SEARCH_API = "https://hiskio.com/api/v1/courses/search?word=";

    export default {
        created() {
            this.searchDebounced = debounce(this.search, 500);
        },
        data() {
            return {
                lessons: [],
                text: '',
            };
        },
        methods: {
            search(value) {
                fetch(`${SEARCH_API}${value}`)
                    .then(result => result.json())
                    .then(data => {
                        this.lessons = data.courses;
                    })
            },
        },
        name: "SearchLesson",
        watch: {
            text(value) {
                this.searchDebounced(value);
            },
        }
    }
</script>

<style scoped>
    .lesson img {
        width: 100px;
    }

    .lesson span, .lesson label {
        display: block;
    }
</style>
