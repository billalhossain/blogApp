<template>
   <div>
      <nav class="navbar navbar-default">
         <div class="container-fluid">
            <div class="container">
               <div class="navbar-header">
                  <router-link to="/" class="navbar-brand">App Blog</router-link>
               </div>
               <ul class="nav navbar-nav navbar-right">
                  <li><router-link to="/addpost" class="btn addPost">Add Post</router-link></li>
               </ul>
            </div>
         </div>
      </nav>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped>
   .navbar-brand{
      font-size: 24px;
   }
   .navbar-default .navbar-nav > li > a.addPost{
      color: #fff;
      background: #0084FF;
      transition: all .3s;
      font-size: 18px;
   }
   .navbar-default .navbar-nav > li > a.addPost:hover{
      color: #fff;
      background: #286090;
   }
</style>
