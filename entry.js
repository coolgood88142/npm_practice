document.write('It works.')
var $ = require('jquery');
window.jQuery = $;
window.$ = $;

import Vue from 'vue'
import Msg from './msg.vue'
new Vue({
    el: '#app',
    components:{Msg}
})