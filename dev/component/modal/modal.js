/**
 * modal component
 */

import './modal.styl';
import $ from 'jquery';

Vue.component('modal',{
    template:require('./modal.html'),
    data(){
        return {
            modal:{
                title:'default',
                content:'default',
                type:'mes',
            },
            display:false
        }
    },
    methods:{
        show(){
            this.display=true;
        },
        fade(){
            this.display=false;
        },
        hidemodal(e){
           if(e.target==$('.modal_bk')[0]){
               this.display=false;
           }
        },
        confirm(){

        }
    },
    props:['modal'],
});