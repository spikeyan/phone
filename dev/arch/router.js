/**
 * Vue Router config file
 * {path:'/',component:require('../com/com')} CMD
 * component(resolve){require(['../com/com'],resolve)} AMD
 */
const router=new VueRouter({
    routes:[
        {path:'/',component:require('../pages/main/main')},
        {path:'/com',component:require('../com/com')}
    ]
});


const app = new Vue({
    router
}).$mount('#app');