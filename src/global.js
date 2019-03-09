import Vue from 'vue';
import axios from 'axios';
import qs from 'querystring';

Vue.filter('title_case', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter('lower_case', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toLowerCase() + value.slice(1)
});


Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;

Vue.prototype.$url = 'http://devue.local/api';
// Vue.prototype.$url = 'http://209.97.169.78:88/api';