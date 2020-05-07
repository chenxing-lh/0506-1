import Vue from 'vue';
import openAxios from '@/utils/openApiFetch'
export default function( ) {
  Vue.prototype.$openAxios = openAxios
}
