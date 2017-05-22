import Vue from 'vue'
import App from './App.vue'
var {router} = require('./routes/routes.js');


require('/src/view/index/index.css');
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');