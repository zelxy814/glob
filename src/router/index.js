
import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import addBlog from '../components/AddBlog'
import showBlog from "../components/showBlog"
import SingleBlog from "../components/SingleBlog"
Vue.use(VueRouter)
Vue.use(VueResource)
export default new VueRouter({
	routes:[
		{
			path:'/add',
			component:addBlog
		},
		{
			path:"/",
			component:showBlog
		},
		{
			path:"/blog/:id",
			component:SingleBlog
		}
	],
	mode:'history'
})