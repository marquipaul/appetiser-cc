require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export

const app = new Vue({
    el: '#app',
    vuetify,
    render: h => h(App)
})

export default app;