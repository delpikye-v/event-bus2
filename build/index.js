!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).EventBus={})}(this,(function(e){"use strict";function t(e,t,n){if(n||2===arguments.length)for(var o,f=0,r=t.length;f<r;f++)!o&&f in t||(o||(o=Array.prototype.slice.call(t,0,f)),o[f]=t[f]);return e.concat(o||Array.prototype.slice.call(t))}var n=new Map,o=function(e){return n.get(e)||[]},f=function(){function e(){}return e.prototype.$once=function(e,f){e&&n.set(e,t(t([],o(e),!0),[{callback:f,once:!0}],!1))},e.prototype.$on=function(e,f){e&&n.set(e,t(t([],o(e),!0),[{callback:f}],!1))},e.prototype.$off=function(e,f){if(f){var r=t([],o(e),!0).filter((function(e){return e.callback!=f}));0!==r.length?n.set(e,r):n.delete(e)}},e.prototype.$offAll=function(e){n.delete(e)},e.prototype.$emit=function(e){for(var f=[],r=1;r<arguments.length;r++)f[r-1]=arguments[r];var c=t([],o(e),!0);c.length>0&&(c.forEach((function(e){e.once?e.emitted||(e.callback(f),e.emitted=!0):e.callback.apply(e,f)})),n.set(e,c))},e.prototype.$reset=function(){n.clear()},e.prototype.eventNames=function(){return Array.from(n.keys())},e}(),r=new f,c=r.$once,l=r.$on,i=r.$off,a=r.$offAll,u=r.$emit,p=r.$reset,s=r.eventNames;e.$emit=u,e.$off=i,e.$offAll=a,e.$on=l,e.$once=c,e.$reset=p,e.default=r,e.eventBus=r,e.eventNames=s,Object.defineProperty(e,"__esModule",{value:!0})}));