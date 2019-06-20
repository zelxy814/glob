<template>
  <div id="add">
   <h2>编辑博客</h2>
   <form v-if="!submitted">
   	<label for="">博客标题</label>
   	<input type="text" v-model="blog.title" required>
   	<label for="">博客内容</label>
   	<textarea name="" id="" cols="30" rows="10" v-model="blog.content"></textarea>
   	<div id="checkboxes">
   		<label for="">Vue.js</label>
   		<input type="checkbox" value="Vue.js" v-model="blog.categories">
   		<label for="">Node.js</label>
   		<input type="checkbox" value="Node.js" v-model="blog.categories">
   		<label for="">React.js</label>
   		<input type="checkbox" value="React.js" v-model="blog.categories">
   		<label for="">Angular.js</label>
   		<input type="checkbox" value="Angular.js" v-model="blog.categories">
   	</div>
   	<label for="">作者：</label>
   	<select v-model="blog.author">
   		<option v-for="au in authors">
   			{{au}}
   		</option>
   	</select>
   	<!-- 阻止默认事件，防止点击按钮是更新页面 -->
   	<button @click.prevent="post">编辑博客</button>
   </form>
   <div v-if="submitted">
   	<h3>你的博客修改成功！</h3>
   </div>
   <hr>
   <div id="preview">
   		<h3>博客总览</h3>
   		<p>博客标题:{{blog.title}}</p>
   		<p>博客内容:</p>
   		<p>{{blog.content}}</p>
   		<p>博客分类:</p>
   		<ul>
   			<li v-for="category in blog.categories">{{category}}</li>
   		</ul>
   		<p>作者：{{blog.author}}</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'add',
   data(){
    return{
      id:this.$route.params.id,
    	blog:{},
    	authors:['Hemiah',"Lee","Ann"],
    	submitted:false
    }
  },
  methods:{
  	post:function(){
  			this.$http.put('https://vuedemo-e615b.firebaseio.com/posts/'+this.id +'.json',this.blog).then(function(data){
  				//console.log(data);
  				this.submitted = true;
  			});
  	}
  },
  created(){
        this.$http.get('https://vuedemo-e615b.firebaseio.com/posts/'+this.id +'.json').then(function(data){
        return data.json();
      }).then(function(data){
        this.blog = data;
      });
    }
  }
</script>

<style scoped>
	#add *{
		box-sizing:border-box;
	}
	#add{
		margin: 20px auto;
		max-width: 800px;
		padding:20px;
		background: #f5f5f5;
	}
	label{
		display:block;
		margin: 20px 0 10px;
	}
	input[type="text"],textarea,select{
		display:block;
		width: 100%;
		padding:8px;
	}
	textarea{
		height:200px;
	}
	#checkboxes label{
		display:inline-block;
		margin-top:0;
	}
	#checkboxes input{
		display:inline-block;
		margin-right: 10px;
	}
	button{
		display: inline-block;
		margin: 20px 0;
		background:crimson;
		color:#fff;
		border: 0;
		padding: 14px;
		border-radius: 4px;
		font-size: 18px;
		cursor:pointer;
	}
	#preview{
		padding: 10px 20px;
		border: 1px dotted #ccc;
		margin:30px 0;
	}
	#preview h3{
		margin-top:10px;
	}

</style>



