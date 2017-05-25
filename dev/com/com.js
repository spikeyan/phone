/**
 * Created by A11150421050193k on 2017/5/18.
 */
var $=require('jquery')
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
        $('div div').trigger('click')
    }
}

async function go(arg){
    console.log(100);
    await hello();
    console.log(arg);
}
function hello(){
    return new Promise(function(n,r){
        setTimeout(()=>{n()},3000)
    })
}

module.exports=Com;
