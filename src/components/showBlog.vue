<template>
  <div v-theme:column="'narrow'" id="show-blog">
   <h1>博客总览</h1>
   <input type="text" v-model="search" placeholder="搜索">
   <div v-for="blog in filteredBlog" class="single-blog">
   		<router-link v-bind:to="'/blog/'+blog.id">
   			<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
   		</router-link>
   		<article>{{blog.content | snippet}}</article>
   </div>  
  </div>
</template>

<script>

export default {
  name: 'show-blog',
  data(){
  	return{
  		blogs:[],
  		search:''
  	}
  },
  created(){
  	//https://jsonplaceholder.typicode.com/posts
  	/*this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
  		this.blogs = data.body.slice(0,10);
  	});*/
  	// 在firebase中的数据是对象不是数组,将对象放在数组中。
  	this.$http.get('https://vuedemo-e615b.firebaseio.com/posts.json')
  	.then(function(data){
  		console.log(data.json());
  		return data.json();
  	}).then(function(data){
  		var blogArray = [];
  		for(let key in data){
  			console.log(key);
  			console.log(data[key]);
  			//在firebase中没有id属性
  			data[key].id = key;
  			blogArray.push(data[key]);
  		}
  		this.blogs = blogArray;
  	});
  },
  computed:{
  	filteredBlog:function(){
  	//在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
  	return this.blogs.filter((blo) => {
  		return blo.title.match(this.search)
  	});
  	}
  },
  // 局部 api
  filters:{
  	"to-uppercase":function(value){
  		return value.toUpperCase();
  	},
  	snippet(value){
  		return value.slice(0,100) + "...";
  	}
  },
  directives:{
  	"rainbow":{
  		bind(el,binding,vnode){
  			/* 数学运算，将小数转换成十六进制，在取六位 */
  			el.style.color="#"+Math.random().toString(16).slice(2,8);
  		}
  	},
  	theme:{
  		bind(el,binding,vnode){
		// if(binding.value=='narrow'){
		// 	el.style.maxWidth = '560px';
		// }
		if(binding.arg='column'){
			el.style.background = "#6677cc";
			el.style.padding = "20px";
		}
		}
  	},
  }
}
</script>

<style scoped>
	#show-blog{
		max-width:800px;
		margin: 0 auto;
	}
	.single-blog{
		margin:20px 0;
		background:#eee;
		padding: 20px;
		box-sizing:border-box;
		border: 1px dotted #aaa;
	}
	.single-blog a{
		text-decoration:none;
	}
	input[type="text"]{
		padding: 20px;
		width: 100%;
		box-sizing: border-box;

	}
</style>

