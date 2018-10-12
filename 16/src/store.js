import Vue from 'vue';
import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

const url = '';

const store = new Store({
    actions: {
        fetchTodos({commit, dispatch}, payload) {
            commit('setLoading', true);
            
            return fetch(`${url}/todos`)
                .then(result => result.json())
                .then(todos => {
                    commit('setTodos', todos);
                    commit('setLoading', true);
                    dispatch('fetchUserInfo');
                    resolve();
                })
        },
        fetchUserInfo() {
        
        },
    },
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
        setLoading(state, loading) {
            state.loading = loading;
        },
    },
    state: {
        count: 0,
        // editor: {
        //     text: '',
        // },
        loading: false,
        todos: [],
    },
});

export default store;
