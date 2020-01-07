import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import singleBlog from '@/components/single-blog'
import addPost from '@/components/addPost'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/single-blog/:id',
      name: 'singleBlog',
      component: singleBlog
    },
    {
      path: '/addpost',
      name: 'addPost',
      component: addPost
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    }
  ]
})
