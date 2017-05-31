/**
 * scrolltop plugin
 */
import $ from 'jquery';

function scrollTop(ele,top,bottom){
    var start;
    var begin;
    var con=$(ele);
    var rate=1;
    var kamui=false;
    con.on('touchstart',function(e){
        start=e.touches[0].clientY;
        begin=false;
        $(this).css('transition','')
        rate=1;
    }).on('touchend',function(){
        if(begin){
            $(this).css('transition','all 0.3s').css('margin-top',0).css('margin-bottom',0);begin=false;
            if(kamui==1){
                if(top){top()}
                kamui=false
            }else if(kamui==2){
                if(bottom){bottom()}
                kamui=false
            }
        }
    }).on('touchmove',function(e){
        if($(this).scrollTop()==0){
            rate=rate-0.02
            if(!begin){start=e.touches[0].clientY;begin=true}
            let range=(e.touches[0].clientY-start)*rate;
            $(this).css('margin-top',`${range}px`)
            if(range>100){kamui=1}
        }else if(con[0].scrollHeight==con[0].clientHeight+con[0].scrollTop){
            rate=rate-0.02
            if(!begin){start=e.touches[0].clientY;begin=true}
            let range=(e.touches[0].clientY-start)*rate;
            $(this).css('margin-bottom',`${-range}px`)
            if(range<-100){kamui=2}
        }
    })

}


export default scrollTop

