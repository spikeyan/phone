/**
 * Wallpaper edit module
 */
var bg=localStorage.bg==undefined?13:localStorage.bg;

function set(val){
    bg=localStorage.bg=val
}
function getit(){
    return bg;
}


export const change=set;
export const get=getit;

