import Vue from 'vue';
import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

const store = new Store({
    mutations: {
        addCount(state) {
            state.count++;
        },
    },
    state: {
        count: 0,
    },
});

export default store;
