/**
 * Created by A11150421050193k on 2017/5/18.
 */

const Com={
    template:require('./com.html'),
    data(){
        return {
            hello:'hi im from controller'
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


module.exports=Com;
