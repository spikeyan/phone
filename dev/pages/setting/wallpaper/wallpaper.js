/**
 * THIS IS Setting's wallpaper page
 */
import {change} from '../../../config/config'
import R from '../../../arch/router';
import scroll from '../../../component/scrolltop/scrolltop'

const WallPaper={
    template:require('./wallpaper.html'),
    data(){
        return {
            items:[]
        }
    },
    methods:{
        icon(val){
            return "url('res/img/"+val+".jpg')"
        },
        choose(url){
            change(url);
            R.push('/')
        }
    },
    created(){
        for(let i = 1;i<32;i++){
            this.items.push(i)
        }
    },
    mounted(){
        scroll('.child_container');
    }
}


module.exports=WallPaper;