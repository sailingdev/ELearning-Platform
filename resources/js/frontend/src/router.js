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
                    name: 'Home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/lesson-list',
                    name: 'Lessons',
                    component: () => import('./views/LessonList.vue')
                },
                {
                    path: '/lesson',
                    name: 'Lesson',
                    component: () => import('./views/Lesson.vue')
                },
                {
                    path: '/contact',
                    name: 'Contact',
                    component: () => import('./views/Contact.vue')
                },
                {
                    path: '/pricing',
                    name: 'Pricing',
                    component: () => import('./views/Pricing.vue')
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: () => import('./views/auth/Login.vue')
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: () => import('./views/auth/Register.vue')
                },
                {
                    path: '/forgot-password',
                    name: 'Forgot Password',
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
