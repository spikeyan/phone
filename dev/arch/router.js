/**
 * Vue Router config file
 * {path:'/',component:require('../com/com')} CMD
 * component(resolve){require(['../com/com'],resolve)} AMD
 */
const router=new VueRouter({
    routes:[
        {path:'/',component:require('../pages/main/main')},
        {path:'/com',component(resolve){require(['../pages/com/com'],resolve)}},
        {path:'/login',component:require('../pages/login/login')},
        {path:'/setting',component:require('../pages/setting/setting'),children:[
            {path:'index',component:require('../pages/setting/index/index')},
            {path:'wallpaper',component:require('../pages/setting/wallpaper/wallpaper')},
        ]}
    ]
});

const app = new Vue({
    router
}).$mount('#app');


export default router