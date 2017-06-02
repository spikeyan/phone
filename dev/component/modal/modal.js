/**
 * modal component
 */

import './modal.styl';

Vue.component('modal',{
    template:require('./modal.html'),
    data(){
        return {
            modal:{
                title:'default',
                content:'default',
                type:'mes'
            }
        }
    },
    methods:{
        back(){
            history.back()
        },
        fade(){
            this.modal.display=false;
        }
    },
    props:['modal'],
    mounted(){
        alert(100);
        if(this.modal.type=='mes'){
            setTimeout(()=>{this.modal.display=false},2000)
        }
    }
})