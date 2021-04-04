/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/admin/dashboard",
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    i18n: 'Dashboard'
  },
    {
        url: null,
        name: 'Blog',
        icon: 'CheckSquareIcon',
        i18n: 'Blog',
        submenu: [
            {
                url: '/admin/blog/list',
                name: 'Blog',
                slug: 'blog-list',
                i18n: 'Blog'
            },
            // {
            //     url: '/admin/blog/tags',
            //     name: 'Tags',
            //     slug: 'blog-tag',
            //     i18n: 'Tags'
            // }
        ]
    },
    // {
    //     url: null,
    //     name: 'User',
    //     icon: 'UserIcon',
    //     i18n: 'User',
    //     submenu: [
    //         {
    //             url: '/admin/user/list',
    //             name: 'User',
    //             slug: 'user-list',
    //             i18n: 'User'
    //         },
    //         {
    //             url: '/admin/membership/list',
    //             name: 'Membership',
    //             slug: 'membership-list',
    //             i18n: 'Membership'
    //         }
    //     ]
    // },
    {
        url: null,
        name: 'Lessons',
        icon: 'HeadphonesIcon',
        i18n: 'Lessons',
        submenu: [
            {
                url: '/admin/course/list',
                name: 'List',
                slug: 'lesson-list',
                i18n: 'List'
            },
            {
                url: '/admin/language/list',
                name: 'languages',
                slug: 'language-list',
                i18n: 'Languages'
            }
        ]
    }
]
