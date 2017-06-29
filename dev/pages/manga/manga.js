/**
 * Created by A11150421050193k on 2017/5/18.1
 */
import $ from 'jquery';
import scroll from '../../component/scrolltop/scrolltop';
import api from '../../config/apis';

var currentPage=1;

function ajax(success,fail){
    $.get(api.getMangaNews+currentPage,e=>{
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
        scroll('.manga_container .child_container',()=>{currentPage=1;ajax((e)=>{
            this.items=e
        })},()=>{ajax((e)=>{e.map((e)=>{
            this.items.push(e)
        })})});
    },
    filters:{
        mangaType(val){
            return 'background-color:'+getColor(val);
            function getColor(val){
                switch(val){
                    case '杂类':return '#10186e'; break;
                    case '美图':return '#9a1517'; break;
                    case '音乐':return '#1c979a'; break;
                    case '游戏':return '#179a16'; break;
                    case '漫画':return '#6d184f'; break;
                    case '动画':return '#9a2993'; break;
                    case '周边':return '#9a9117'; break;
                    case '漫展':return '#9a3911'; break;
                    case '小说':return '#649a13'; break;
                }
            }
        }
    }
}


module.exports=Com;
