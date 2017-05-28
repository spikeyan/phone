/**
 * Wallpaper edit module
 */
var bg=localStorage.bg==undefined?'bg':localStorage.bg;

function set(val){
    bg=localStorage.bg=val
}
function getit(){
    return bg;
}


export const change=set;
export const get=getit;

