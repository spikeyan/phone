webpackJsonp([0],{7:function(n,t,e){"use strict";function r(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,i){try{var u=t[o](i),c=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(c).then(function(n){r("next",n)},function(n){r("throw",n)});n(c)}return r("next")})}}function o(){return new Promise(function(n,t){setTimeout(function(){n()},3e3)})}var i=function(){var n=r(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(100),n.next=3,o();case 3:console.log(t);case 4:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),u=e(0),c={template:e(8),data:function(){return{hello:"hi im from controller"}},methods:{go:function(){i(this.hello)}},mounted:function(){u("div div").trigger("click")}};n.exports=c},8:function(n,t){n.exports='<div v-on:click="go">\n    hi im com\'s index pages 12345 {{hello}}\n</div>'}});