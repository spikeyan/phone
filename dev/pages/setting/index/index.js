/**
 * THIS IS Setting's index page
 */
import R from '../../../arch/router';

const Index={
    template:require('./index.html'),
    data(){
        return {
            items:[
                {name:'Wall-Paper',url:'wallpaper'}
            ]
        }
    },
    methods:{
        goto(url){
            R.push(url)
        }
    },
    mounted(){

    }
}


module.exports=Index;