(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n,t,r,a=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,r;return t=n,r=[{key:"divide",value:function(e,n){return e/n}},{key:"multiple",value:function(e,n){return e*n}},{key:"minus",value:function(e,n){return e-n}},{key:"plus",value:function(e,n){return e+n}},{key:"squareroot",value:function(e){return Math.sqrt(e)}},{key:"remaining",value:function(e,n){return e%n}}],null&&e(t.prototype,null),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n=Number(n),t=Number(t);var r=a[e](n,t);return isNaN(r)?0:parseFloat(r.toPrecision(14))},(t="calculation")in(n=a)?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r;const l=a;function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n,t){!function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,n),n.set(e,t)}function s(e,n,t){return function(e,n,t){if(n.set)n.set.call(e,t);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=t}}(e,d(e,n,"set"),t),t}function f(e,n){return function(e,n){return n.get?n.get.call(e):n.value}(e,d(e,n,"get"))}function d(e,n,t){if(!n.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return n.get(e)}var h=new WeakMap,v=new WeakMap,p=new WeakMap,b=new WeakMap,w=new WeakMap,y=new(o((function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,h,{writable:!0,value:null}),c(this,v,{writable:!0,value:0}),c(this,p,{writable:!0,value:0}),c(this,b,{writable:!0,value:0}),c(this,w,{writable:!0,value:!1}),u(this,"pressNumber",(function(e,t){var r=t.currentTarget;n.handleEventButtons(r),f(n,h)?(f(n,w)?s(n,v,"".concat(f(n,v)).concat(e)):s(n,v,10*f(n,v)+e),n.handleClearScreen(),n.handleUpdateScreen(f(n,v))):(f(n,w)?s(n,p,"".concat(f(n,p)).concat(e)):s(n,p,10*f(n,p)+e),n.handleUpdateScreen(f(n,p)))})),u(this,"pressDot",(function(e){var t=e.currentTarget;n.handleEventButtons(t),s(n,w,!0),f(n,h)?(s(n,v,"".concat(f(n,v),".")),n.handleUpdateScreen(f(n,v))):(s(n,p,"".concat(f(n,p),".")),n.handleUpdateScreen(f(n,p)))})),u(this,"handleOperator",(function(e){s(n,w,!1),f(n,h)&&s(n,p,l.calculation(f(n,h),f(n,p),f(n,v))),s(n,h,e),s(n,v,0),n.handleEventButtons(document.getElementById(e))})),u(this,"handleSquareRoot",(function(e){s(n,w,!1),f(n,h)&&s(n,p,l.calculation(f(n,h),f(n,p),f(n,v))),s(n,h,e),n.handleEventButtons(document.getElementById(e)),s(n,p,l.calculation(f(n,h),f(n,p))),n.handleClearScreen(),n.handleUpdateScreen(f(n,p)),s(n,h,null)})),u(this,"handleResult",(function(e){n.handleClearScreen(),n.handleEventButtons(document.getElementById(e)),f(n,h)?(s(n,b,l.calculation(f(n,h),f(n,p),f(n,v))),s(n,p,f(n,b))):s(n,b,f(n,p)),n.handleUpdateScreen(f(n,b)),s(n,h,null),s(n,w,!1)})),u(this,"handleUpdateScreen",(function(e){var n=Array.from(document.querySelectorAll(".digit-number"));(e=e.toString()).length>14&&(e=e.substr(0,14));for(var t=e.length;t>=1;t--)n[n.length-t].innerHTML=e[e.length-t]})),u(this,"handleClearScreen",(function(){for(var e=0,n=Array.from(document.querySelectorAll(".digit-number"));e<n.length;e++)n[e].innerHTML=""})),u(this,"handleClear",(function(e){s(n,p,0),s(n,v,0),s(n,h,null),n.handleEventButtons(e.currentTarget),n.handleClearScreen(),n.handleUpdateScreen(f(n,p))})),u(this,"handleEventButtons",(function(e){e.classList.add("active"),setTimeout((function(){e.classList.remove("active")}),100)}))})));window.calculatorObject=y})();