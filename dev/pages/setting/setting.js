/**
 * THIS IS Setting PAGE
 */


import {change} from '../../config/config'

const Setting={
    template:require('./setting.html'),
    data(){
        return {
            hello:'hi im from controller',
            show:true
        }
    },
    methods:{
        go(){
            change(1)
        }
    },
    mounted(){

    }
}


module.exports=Setting;
