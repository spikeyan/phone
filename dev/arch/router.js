/**
 * Vue Router config file
 * {path:'/',component:require('../com/com')} CMD
 * component(resolve){require(['../com/com'],resolve)} AMD
 */
import $ from 'jquery';
import api from '../config/apis';

const router=new VueRouter({
    routes:[
        {path:'/',component:require('../pages/main/main')},
        {path:'/com',component(resolve){require(['../pages/time/time'],resolve)}},
        {path:'/login',component:require('../pages/login/login')},
        {path:'/setting',component:require('../pages/setting/setting'),children:[
            {path:'index',component:require('../pages/setting/index/index')},
            {path:'wallpaper',component:require('../pages/setting/wallpaper/wallpaper')},
        ]},
        {path:'/manga',component(resolve){require(['../pages/manga/manga'],resolve)}},
        {path:'/p',component(resolve){require(['../pages/p/p'],resolve)}},
    ]
});

router.beforeEach((to, from, next) => {
    switch(to.path){
        case '/p':
                (async function(){
                    try{
                        await new Promise((y,n)=>{
                            $.get(api.loggedCheck,(res)=>{
                                if(JSON.parse(res).logged==true){
                                    y()
                                }else{
                                    n('please login')
                                }
                            })
                        })
                    }catch(err){
                        alert(err);
                        return err
                    }
                    next();
                })()

            break;
        default:next();
    }
})

const app = new Vue({
    router
}).$mount('#app');


export default router