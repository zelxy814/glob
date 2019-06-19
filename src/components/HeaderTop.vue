<template>
  <nav>
  	<ul>
  		<li>
  			<!-- 默认a标签 -->
  			<!-- exact属性布尔类型值（默认false） -->
  			<!--设置链接激活时使用CSS类名,默认router-link-active. exact表示这个链接只有在地址为 / 的时候被激活,是否激活默认类名的依据是 inclusive match （全包含匹配）-->
  			<router-link to="/" exact>博客</router-link>	
  		</li>
  		<li>
  			<!-- 这个链接只有在地址为 /add 的时候被激活 -->
  			<router-link to="/add" exact>写博客</router-link>	
  		</li>
  	</ul>
  </nav>
</template>

<script>

export default {
  name:"headertop"
}
</script>

<style scoped>
	ul{
		list-style:none;
		text-align:center;
		margin: 0;
		box-sizing: border-box;
	}
	li{
		display:inline-block;
		margin:0 10px;
	}
	a{
		color: #fff;
		text-decoration:none;
		padding: 12px;
		border-radius: 5px;
	}
	nav{
		background:crimson;
		padding: 30px 20px;
		max-width:800px;
		margin: 0 auto 30px;
	}
	.router-link-active{
		background: rgba(255,255,255,0.8);
		color:#444;
	}
</style>


