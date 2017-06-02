/**
 * THIS IS LOGIN PAGE
 */
const Login={
    template:require('./login.html'),
    data(){
        return {
            show:true,
            modal:{
                type:'mes',
                title:'this is a alert',
                display:false,
                content:'im content place'
            }
        }
    },
    methods:{
        login(){
            this.modal.display=true;
        }
    },
    mounted(){

    }
}


module.exports=Login;