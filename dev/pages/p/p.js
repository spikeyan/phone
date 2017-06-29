/**
 * Created by kamui on 17-6-21.
 */
const P={
    template:require('./p.html'),
    data(){
        return {
            current:1,
            total:32,
            single:8,
            pageList:[
                1,2,3,4,5,6,7,8
            ],
            news:[]
        }
    },
    methods:{
        check(val){
            if(this.current==val){
                return '#7fddff'
            }else{
                return ''
            }
        },

        jump(val){
            if(val==this.current){return null}
            this.getNews(val)

        },
        next(){
            if(this.current<this.total){
                this.jump(this.current+1)
            }
        },
        prev(){
            if(this.current>1){
                this.jump(this.current-1)
            }
        },
        getNews(val){
            var $this=this
            let i=1
            get();
            async function get(){
                await new Promise((y,n)=>{
                    setTimeout(y,2000)
                })

                $this.current=val
                $this.news=$this.news.map(()=>{
                    return 'this is page '+$this.current+' and list '+i++
                })
                if(val>5&&val<$this.total-2){
                    let j=4;
                    $this.pageList=$this.pageList.map((e)=>{
                        return val-j--
                    })
                    // this.getNews(val);
                }else if(val<=5){
                    $this.pageList=[1,2,3,4,5,6,7,8];
                    // this.getNews(val);
                }else if(val>=$this.total-2&&val<=$this.total){
                    let k=7;
                    $this.pageList=$this.pageList.map((e)=>{
                        return $this.total-k--
                    })
                    // this.getNews(val);
                }
            }
        }
    },
    created(){
        this.news=[1,2,3,4,5,6,7,8]
    },
    mounted(){

    }
}


module.exports=P;