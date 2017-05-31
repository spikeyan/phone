/**
 * Created by A11150421050193k on 2017/5/18.1
 */
import $ from 'jquery';
import scroll from '../../component/scrolltop/scrolltop';

var currentPage=1;

function ajax(success,fail){
    $.get('http://192.168.80.128:1026/get-manga-news?page='+currentPage,e=>{
        var result=JSON.parse(e);
        if(result.success){
            currentPage++;
            success(result.response)
        }else{
            fail(false)
        }
    })
}

const Com={
    template:require('./manga.html'),
    data(){
        return {
            items:[]
        }
    },
    methods:{
        goto(url){
            location.href=url
        }
    },
    created(){
        currentPage=1;
        ajax((e)=>{this.items=e},()=>{},true)
    },
    mounted(){
        scroll('.child_container',()=>{currentPage=1;ajax((e)=>{
            this.items=e
        })},()=>{ajax((e)=>{e.map((e)=>{
            this.items.push(e)
        })})});
    }
}


module.exports=Com;
