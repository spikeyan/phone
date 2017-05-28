/**
 * Created by kamui on 17-5-26.
 */
import './topnav.styl';

Vue.component('top-nav',{
    template:require('./topnav.html'),
    methods:{
        back(){
            history.back()
        }
    },
    props:['titleName'],
})