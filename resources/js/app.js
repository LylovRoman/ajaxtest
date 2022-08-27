import Vue from "vue";
import router from "./router";
import store from "./store";
require('./bootstrap');


window.Vue = require('vue').default;
Vue.component('index', require('./components/Index.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store
});
