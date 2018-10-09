import Vue from 'vue';
import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

const store = new Store({
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
