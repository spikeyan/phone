//3
import R from '../../arch/router';
import K from '../../arch/kamui';

import {get} from '../../config/config';

let watch=0;
const Main={
    template:require('./main.html'),
    data(){
        return{
            items:[
                {name:'manga',src:'manga',url:'/manga'}
            ],
            fitem:[
                {name:'PHONE',src:1,url:'/'},
                {name:'TIME',src:2,url:'/com'},
                {name:'SETTING',src:3,url:'/setting/index'},
                {name:'LOGIN',src:4,url:'/login'},
            ],
            bg:get(),
            time:new Date().toString().slice(0,25)
        }
    },
    methods:{
        desk(val){
            return "url('res/desk/"+val+".jpg')"
        },
        icon(val){
            return "url('res/img/"+val+".jpg')"
        },
        ficon(val){
            return "url('res/img/f"+val+".jpg')"
        },
        goto(url){
            R.push(url)
        },
        arr2arr(arr,count){
            return K.arr2arr(arr,count)
        },
        timeBuz(){
            this.time = new Date().toString().slice(0,25)
        }
    },
    mounted(){
        new Swiper('.main_container .body');
        watch = setInterval(this.timeBuz,1000);
    },
    destroyed(){
        clearInterval(watch)
    }
};


module.exports=Main;