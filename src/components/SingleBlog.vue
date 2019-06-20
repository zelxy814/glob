<template>
	<div id="single-blog">
		<h3>{{blog.title}}</h3>
		<article>{{blog.content}}</article>
		<p>作者：{{blog.author}}</p>
		<p>分类:</p>
		<ul>
			<li v-for="catagory in blog.categories">
				{{catagory}}
			</li>
		</ul>
		<button @click="deleteSingle">删除</button>
		<router-link v-bind:to="'/edit/'+id">编辑</router-link>
	</div>
</template>
<script>
import axios from "axios"
	export default{
		name:"single-blog",
		data(){
			return {
				id:this.$route.params.id,
				blog:{}
			}
		},
		methods:{
			deleteSingle(){
				axios.delete("https://vuedemo-e615b.firebaseio.com/posts/"+this.id +'.json').then(response=>{
					this.$router.push({path:"/"});
				});
			}
		},
		created(){
			axios.get('https://vuedemo-e615b.firebaseio.com/posts/'+this.id +'.json').then(function(data){
				return data.data;
			}).then((data)=>{
				this.blog = data;
			});
		}
	}
</script>
<style scoped>
	#single-blog{
		max-width: 960px;
		magrin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #aaa;
	}
	button,a{
		display: inline-block;
		margin: 20px 5px;
		background:crimson;
		color:#fff;
		border: 0;
		padding: 10px;
		border-radius: 4px;
		font-size: 18px;
		cursor:pointer;
		text-decoration: none;
	}
</style>