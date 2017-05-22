<template>
	<div>
		<div class="cell" v-for="item in list">
			<a class="user_avatar pull-left" href="/user/leehomeok">
				<img :src="item.author.avatar_url" :title="item.author.loginname">
			</a>
		<span class="reply_count pull-left">
		<span class="count_of_replies" title="回复数">
			{{item.reply_count}}
		</span>
		<span class="count_seperator">/</span>
		<span class="count_of_visits" title="点击数">
			{{item.visit_count}}
		</span>
	</span>
		<span class="last_time pull-right">
		<img class="user_small_avatar" :src="item.repliesAuthor ? item.repliesAuthor.avatar_url : ''">
		<span class="last_active_time">{{item.last_reply_at | dateDiff}}</span>
	</span>
			<div class="topic_title_wrapper">
				<span v-if="item.top" class="put_top">置顶</span>
				<span v-else-if="item.good" class="put_top">精华</span>
				<span v-else="!item.good" class="topiclist-tab">分享</span>
				<a class="topic_title" :href="'/topic/' + item.id" :title="item.title">
					{{item.title}}
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	var Vue = require('vue');
	var axios = require('axios');
	require('../../widget/format.js');

	export default{
		data(){
			return {
				list:[]
			};
		},
		methods:{
			getData(url){
				axios.get(url).then((result)=>{
					this.list = result.data.data;
					return this.list;
				}).then((items)=>{
						items.forEach((item,index)=>{
							axios.get(`https://cnodejs.org/api/v1/topic/${item.id}`).then((result)=>{
								let author = result.data.data.replies[result.data.data.replies.length-1];
								Vue.set(this.list[index],'repliesAuthor',author ? author.author : null);
							});
					});
				});
			}
		},
		created(){
			this.getData('https://cnodejs.org/api/v1/topics');
		},
		watch:{
			'$route'(to){
				this.getData(`https://cnodejs.org/api/v1/topics?tab=${to.params.id}`);
			}
		}
	}
</script>