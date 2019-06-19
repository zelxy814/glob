// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 自定义全局指令
/*Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color = "#"+Math.random().toString(16).slice(2,8);
		//console.log(Math.random().toString());
		//console.log('0.6026271517535047'.slice(2,8));
	}
})

Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value=='narrow'){
			el.style.maxWidth = '560px';
		}
		if(binding.arg='column'){
			el.style.background = "#6677cc";
			el.style.padding = "20px";
		}
	}
})*/
// 自定义全局过滤器, 过滤器名称，value那到的值
// 全局 api
/*Vue.filter("to-uppercase",function(value){
	return value.toUpperCase();
})
Vue.filter("snippet",function(value){
	return value.slice(0,100) + "...";
})*/
/* eslint-disable no-new */


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
