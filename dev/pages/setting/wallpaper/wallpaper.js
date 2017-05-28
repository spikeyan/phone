/**
 * THIS IS Setting's wallpaper page
 */
import {change} from '../../../config/config'
import R from '../../../arch/router';

const WallPaper={
    template:require('./wallpaper.html'),
    data(){
        return {
            items:[
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,'bg','f1','f2','f3','f4'
            ]
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
    mounted(){

    }
}


module.exports=WallPaper;