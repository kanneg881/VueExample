import Vue from 'vue'
import App from './App.vue'
import InfiniteScrollApp from './InfiniteScrollApp.vue'

new Vue({
  el: '#app',
  render: h => h(InfiniteScrollApp)
});
