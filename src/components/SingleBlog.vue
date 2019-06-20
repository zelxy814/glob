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
	</div>
</template>
<script>
	export default{
		name:"single-blog",
		data(){
			return {
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			/*this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
				this.blog = data.body;
			})*/

			//https://vuedemo-e615b.firebaseio.com/posts/-Lhno4N7wiSo8mhbxmqo
			this.$http.get('https://vuedemo-e615b.firebaseio.com/posts/'+this.id +'.json').then(function(data){
				console.log(data);
				return data.json();
			}).then(function(data){
				console.log(data);
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
</style>