<template>
	<div class="container">
		<div class="row">
	         <div class="col-sm-8">
	               <div class="panel panel-default">
	                  <div class="panel-heading">{{singlePost.title}}</div>
	                  <div class="panel-body">
	                     <p><strong>Author Name: </strong>{{singlePost.author}}</p>
	                     <p><b>Posted on:</b> {{ getDate() }}</p>
	                     <p>{{singlePost.discription}}</p>
	                     <router-link class="btn btn-primary" to="/">Back Home</router-link>
	                     <router-link class="btn btn-default pull-right" :to="'/edit/' + singlePost.id">Edit Post</router-link>
	                  </div>
	               </div>
	            </div>
	        </div>
      	</div>
	</div>
</template>

<script>
var moment = require('moment')
export default{
	data(){
		return{
			singlePost: {}
		}
	},
	methods:{
		httpReq(id){
         	this.$http.get('http://localhost:3000/posts/' + id)
         	.then((response)=>{
            	this.singlePost = response.body
         	})
         	.catch()
      	},
      	getDate: function(){
	        return moment(this.singlePost.time).format('MMM DD, YYYY. hh mm A')
	    },
	},
	mounted(){
		this.httpReq(this.$route.params.id)
	}
}
</script>

