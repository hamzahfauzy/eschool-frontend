var Vue = require('vue');

Vue.component('login-component', require('./components/LoginComponent.vue').default);
Vue.component('admin-component', require('./components/AdminComponent.vue').default);

vue = new Vue({
    el: '#app',
});
