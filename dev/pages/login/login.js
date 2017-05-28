/**
 * THIS IS LOGIN PAGE
 */
const Login={
    template:require('./login.html'),
    data(){
        return {
            hello:'hi im from controller',
            show:true
        }
    },
    methods:{
        go(){
            go(this.hello);
        }
    },
    mounted(){

    }
}


module.exports=Login;