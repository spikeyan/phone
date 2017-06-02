/**
 * scrolltop plugin
 */

var startPoint;
var cache;

function rootBind(ele,top,bottom){
    startPoint=0;
    bindTouch.call(document.querySelector(ele),['touchstart','touchmove','touchend'],top,bottom)
}

function bindTouch(arr,top,bottom){
    arr.map(e=>{
        this.addEventListener(e,judge.bind(this,top,bottom))
    })
}

function judge(top,bottom,e){

    if(this.scrollTop==0){
        scroll.call(this,e,top)
    }else if(this.scrollTop+10>=this.scrollHeight-this.clientHeight){
        scroll.call(this,e,bottom)
    }else{
        if(this.style.transform!=''){
            this.style.transform=''
        }
    }
}

function scroll(e,fn){
    var y
    if(e.touches.length){y=e.touches[0].clientY}
    if(e.type=='touchstart'){
        this.style.transition='';
        startPoint=y
    }else if(e.type=='touchmove'){
        if(y>startPoint){this.style.transform=`translateY(${(y-startPoint)/2}px)`}
        if(y<startPoint){this.style.transform=`translateY(${(y-startPoint)/2}px)`}
    }else{
        this.style.transition='all 0.3s';
        this.style.transform='';
        if(typeof fn =='function'){
            fn()
        }
    }
}



export default rootBind

