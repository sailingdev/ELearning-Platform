/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/Main.vue'),
            children: [
        // =============================================================================
        // Page Routes
        // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/category',
                    name: 'category',
                    component: () => import('./views/Category.vue')
                },
                {
                    path: '/lesson-list',
                    name: 'lesson-list',
                    component: () => import('./views/LessonList.vue')
                },
                {
                    path: '/lesson',
                    name: 'lesson',
                    component: () => import('./views/Lesson.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('./views/Contact.vue')
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    component: () => import('./views/Pricing.vue')
                },
                {
                    path: '/blog-management',
                    name: 'blog',
                    component: () => import('./views/blog/Blog.vue')
                },
                {
                    path: '/blog-management-details/:id',
                    name: 'blog-details',
                    component: () => import('./views/blog/BlogDetails.vue')
                },
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('./views/auth/Login.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('./views/auth/Register.vue')
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-password',
                    component: () => import('./views/auth/ForgotPassword.vue')
                }
            ],
        },
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const preloader = document.getElementById('preloader')
    if (preloader) {
        preloader.style.display = "none";
    }
})

export default router
