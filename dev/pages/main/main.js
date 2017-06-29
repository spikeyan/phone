//3
import R from '../../arch/router';
import K from '../../arch/kamui';

import {get} from '../../config/config';

let watch=0;
const Main={
    template:require('./main.html'),
    data(){
        return{
            itemLists:[
                {name:'manga',src:'manga',url:'/manga'},
                {name:'p',src:'p',url:'/p'}
            ],
            items:null,
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
        goto(url){
            R.push(url)
        },
        timeBuz(){
            this.time = new Date().toString().slice(0,25)
        }
    },
    created(){
        this.items=K.arr2arr(this.itemLists,16)
    },
    mounted(){
        new Swiper('.main_container .body');
        watch = setInterval(this.timeBuz,1000);
    },
    destroyed(){
        clearInterval(watch)
    },
    filters:{
        desk(val){
            return "background-image:url('res/desk/"+val+".jpg')"
        },
        icon(val){
            return "background-image:url('res/img/"+val+".jpg')"
        },
        ficon(val){
            return "background-image:url('res/img/f"+val+".jpg')"
        }
    }
};


module.exports=Main;