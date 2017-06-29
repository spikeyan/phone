/**
 * THIS IS LOGIN PAGE
 */
import $ from 'jquery';
import api from '../../config/apis';

const Login={
    template:require('./login.html'),
    data(){
        return {
            show:true,
            modal:{
                type:'mes',
                title:'this is a alert',
                content:'im content place',
            },
            username:'',
            password:''
        }
    },
    methods:{
        showModal(){
            this.$children[0].show()
        },
        login(){
            $.post(api.login,{username:this.username,password:this.password},(e)=>{
                this.modal.title='message';
                if(JSON.parse(e).success==true){
                    this.modal.content='loggin success';
                }else{
                    this.modal.content='loggin failed';
                }
                this.showModal()
            })
        }
    },
    mounted(){

    }
}


module.exports=Login;