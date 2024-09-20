import Vue from 'vue'
import Router from 'vue-router'
import AppVision from './components/Vision.vue'
import AppContact from './components/Contact.vue'
import AppAbout from './components/About.vue'

Vue.use(Router)

// The 'vision' component holds both the image and analysis steps, whereas 'guide' and 'about' take you to those specific pages.
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'vision',
      component: AppVision
    },
    {
      path: '/contact',
      name: 'contact',
      component: AppContact
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout
    }
  ]
})
