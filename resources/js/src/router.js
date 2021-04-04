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
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/admin/dashboard',
                name: 'dashboard',
                component: () => import('./views/Home.vue')
              },
              {
                path: '/admin/blog/list',
                name: 'blog',
                component: () => import('./views/blog/BlogList.vue'),
                  meta: {
                    breadcrumb: [
                        {title: 'Home', url: '/admin/dashboard'},
                        {title: 'Blog', active: false},
                        {title: 'List', active: true}
                    ],
                      pageTitle: 'Blog List'
                  }
              },
                {
                    path: '/admin/blog/create',
                    name: 'blog-create',
                    component: () => import('./views/blog/BlogCreate.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/admin/dashboard'},
                            {title: 'Blog', url: '/admin/blog/list'},
                            {title: 'Create', active: true}
                        ],
                        pageTitle: 'Blog Create'
                    },
                },
                {
                    path: '/admin/blog/edit/:id',
                    name: 'blog-edit',
                    component: () => import('./views/blog/BlogEdit.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/admin/dashboard'},
                            {title: 'Blog', url: '/admin/blog/list'},
                            {title: 'Edit', active: true}
                        ],
                        pageTitle: 'Blog Edit'
                    },
                    props: true
                },

                {
                    path: '/admin/blog/tags',
                    name: 'blog-tag',
                    component: () => import('./views/blog/Tag.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/admin/dashboard'},
                            {title: 'Blog Tag', active: false},
                            {title: 'List', active: true}
                        ],
                        pageTitle: 'Blog Tags'
                    }
                },
                {
                    path: '/admin/user/list',
                    name: 'user-list',
                    component: ()=> import('./views/user/UserList.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/admin/dashboard'},
                            {title: 'User', url: '/admin/user/list'},
                            {title: 'list', active: true}
                        ],
                        pageTitle: 'User List'
                    }
                },
                {
                    path: '/admin/membership/list',
                    name: 'membership-list',
                    component: ()=> import('./views/user/UserList.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/admin/dashboard'},
                            {title: 'Membership', url: '/admin/user/list'},
                            {title: 'list', active: true}
                        ],
                        pageTitle: 'Membership Plan'
                    }
                },
                {
                    path: '/admin/course/list',
                    name: 'lesson-list',
                    component: () => import('./views/course/LessonList.vue'),
                },
                {
                    path: '/admin/language/list',
                    name: 'language-list',
                    component: () => import('./views/course/LanguageList.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/admin/dashboard'},
                            {title: 'Languages', active: true}
                        ],
                        pageTitle: 'Languages'
                    }
                }
            ]
        }
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    //     {
    //         path: '',
    //         component: () => import('@/layouts/full-page/FullPage.vue'),
    //         children: [
    //     // =============================================================================
    //     // PAGES
    //     // =============================================================================
    //           {
    //             path: '/pages/login',
    //             name: 'page-login',
    //             component: () => import('@/views/pages/Login.vue')
    //           },
    //           {
    //             path: '/pages/error-404',
    //             name: 'page-error-404',
    //             component: () => import('@/views/pages/Error404.vue')
    //           },
    //         ]
    //     },
        // Redirect to 404 page, if no match found
        // {
        //     path: '*',
        //     redirect: '/pages/error-404'
        // }
    ]
})

router.beforeEach((to, from, next) => {
    let _token = localStorage.getItem('tortu_accessToken')
    let userData = JSON.parse(localStorage.getItem('tortu_userData'))

    if (_token && userData){
        if (_token.length > 0 && Object.keys(userData).length > 0) {
            if (userData.role && userData.role === 'admin') {
                next()
                return
            }
        }
    }
    localStorage.removeItem('tortu_accessToken')
    localStorage.removeItem('tortu_userData')
    window.location.href = "/"
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})

export default router
