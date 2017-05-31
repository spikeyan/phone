/**
 * THIS IS Setting's index page
 */
import R from '../../../arch/router';
import scroll from '../../../component/scrolltop/scrolltop'

const Index={
    template:require('./index.html'),
    data(){
        return {
            items:[
                {name:'Wall-Paper',url:'wallpaper'},
            ]
        }
    },
    methods:{
        goto(url){
            R.push(url)
        }
    },
    mounted(){
        scroll('.child_container')
    }
}


module.exports=Index;