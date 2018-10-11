import Vue from 'vue';
import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

const store = new Store({
    getters: {
        countX2(state) {
            return state.count * 2;
        },
        countX2XCount(state, getters) {
            return state.count * getters.countX2;
        },
        countXValue: state => value => state.count * value,
    },
    mutations: {
        addCount(state, payLoad) {
            // 用法1 有用 step 設定
            // state.count += payLoad.step;
            state.count += payLoad;
            // Vue.set(state.editor, 'Loading', true);
            // state.editor = {
            //     ...state.editor,
            //     Loading: true,
            // };
        },
    },
    state: {
        count: 0,
        // editor: {
        //     text: '',
        // },
    },
});

export default store;
