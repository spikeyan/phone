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
                content:'im content place',
            }
        }
    },
    methods:{
        login(){
            this.modal.title='hello world';
            this.modal.content='login servive has not done yet';
            this.$children[0].show()
        }
    },
    mounted(){

    }
}


module.exports=Login;