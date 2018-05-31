import Vue from 'vue';
import $ from 'jquery';

new Vue({
  el: '#app',
  data: {
    vue_test: 'vue is loaded!'
  }
});

$(function () {
  $('.jq_test').html('jquery is loaded');
});