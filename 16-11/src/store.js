import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1';

const store = new Vuex.Store({
    actions: {
        fetchLessons({commit}) {
            fetch(LESSONS_URL)
                .then(result => result.json())
                .then(result => {
                    commit('setLessons', result.courses);
                });
        },
    },
    getters: {
        isLessonInCart: state => lesson => (
            state.cart.findIndex(({id}) => (id === lesson.id)) !== -1
        ),
        lessonsInCart: state => (state.cart.length),
        priceInCart: state => (
            state.cart.reduce((accumulator, lesson) => (accumulator + lesson.price), 0)
        ),
    },
    mutations: {
        addToCart(state, lesson){
            // state.cart = state.cart.concat(lesson);
            // state.cart = [...state.cart, lesson];
            state.cart.push(lesson);
        },
        setLessons(state, lessons) {
            state.lessons = lessons;
        },
    },
    state: {
        cart: [],
        lessons: [],
    },
});

export default store;
