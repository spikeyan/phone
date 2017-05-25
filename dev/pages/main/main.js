//2
const Main={
    template:require('./main.html'),
    data(){
        return{
            items:[
                {src:1},
                {src:2},
                {src:3},
                {src:4},
                {src:5},
                {src:6},
                {src:7},
                {src:8},
                {src:9},
                {src:10},
                {src:11},
                {src:12},
                {src:13},
                {src:14},
                {src:15},
                {src:16},
            ],
            fitem:[
                {src:1},
                {src:2},
                {src:3},
                {src:4}
            ]
        }
    },
    methods:{


    },
    mounted(){
        this.items.forEach((e)=>{
            e.name=e.src;
            e.src="url('res/img/"+e.src+".jpg')"
        })
        this.fitem.forEach((e)=>{
            e.name=e.src;
            e.src="url('res/img/f"+e.src+".jpg')"
        })

    },
    filters:{
        icon(val){
            return val+1
        }
    }
}

module.exports=Main;