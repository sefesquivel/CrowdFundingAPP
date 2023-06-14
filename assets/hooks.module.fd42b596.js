import{aU as ye}from"./index.92bc79b7.js";var $e={exports:{}},q=typeof Reflect=="object"?Reflect:null,me=q&&typeof q.apply=="function"?q.apply:function(e,n,r){return Function.prototype.apply.call(e,n,r)},ee;q&&typeof q.ownKeys=="function"?ee=q.ownKeys:Object.getOwnPropertySymbols?ee=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:ee=function(e){return Object.getOwnPropertyNames(e)};function st(t){console&&console.warn&&console.warn(t)}var Ne=Number.isNaN||function(e){return e!==e};function S(){S.init.call(this)}$e.exports=S;$e.exports.once=ht;S.EventEmitter=S;S.prototype._events=void 0;S.prototype._eventsCount=0;S.prototype._maxListeners=void 0;var be=10;function ie(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(S,"defaultMaxListeners",{enumerable:!0,get:function(){return be},set:function(t){if(typeof t!="number"||t<0||Ne(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");be=t}});S.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};S.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Ne(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Te(t){return t._maxListeners===void 0?S.defaultMaxListeners:t._maxListeners}S.prototype.getMaxListeners=function(){return Te(this)};S.prototype.emit=function(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var i=e==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var f;if(n.length>0&&(f=n[0]),f instanceof Error)throw f;var c=new Error("Unhandled error."+(f?" ("+f.message+")":""));throw c.context=f,c}var y=o[e];if(y===void 0)return!1;if(typeof y=="function")me(y,this,n);else for(var w=y.length,_=Fe(y,w),r=0;r<w;++r)me(_[r],this,n);return!0};function He(t,e,n,r){var i,o,f;if(ie(n),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),f=o[e]),f===void 0)f=o[e]=n,++t._eventsCount;else if(typeof f=="function"?f=o[e]=r?[n,f]:[f,n]:r?f.unshift(n):f.push(n),i=Te(t),i>0&&f.length>i&&!f.warned){f.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=f.length,st(c)}return t}S.prototype.addListener=function(e,n){return He(this,e,n,!1)};S.prototype.on=S.prototype.addListener;S.prototype.prependListener=function(e,n){return He(this,e,n,!0)};function at(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Ae(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=at.bind(r);return i.listener=n,r.wrapFn=i,i}S.prototype.once=function(e,n){return ie(n),this.on(e,Ae(this,e,n)),this};S.prototype.prependOnceListener=function(e,n){return ie(n),this.prependListener(e,Ae(this,e,n)),this};S.prototype.removeListener=function(e,n){var r,i,o,f,c;if(ie(n),i=this._events,i===void 0)return this;if(r=i[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(o=-1,f=r.length-1;f>=0;f--)if(r[f]===n||r[f].listener===n){c=r[f].listener,o=f;break}if(o<0)return this;o===0?r.shift():lt(r,o),r.length===1&&(i[e]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",e,c||n)}return this};S.prototype.off=S.prototype.removeListener;S.prototype.removeAllListeners=function(e){var n,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var o=Object.keys(r),f;for(i=0;i<o.length;++i)f=o[i],f!=="removeListener"&&this.removeAllListeners(f);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(i=n.length-1;i>=0;i--)this.removeListener(e,n[i]);return this};function Re(t,e,n){var r=t._events;if(r===void 0)return[];var i=r[e];return i===void 0?[]:typeof i=="function"?n?[i.listener||i]:[i]:n?ct(i):Fe(i,i.length)}S.prototype.listeners=function(e){return Re(this,e,!0)};S.prototype.rawListeners=function(e){return Re(this,e,!1)};S.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Me.call(t,e)};S.prototype.listenerCount=Me;function Me(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}S.prototype.eventNames=function(){return this._eventsCount>0?ee(this._events):[]};function Fe(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function lt(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function ct(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function ht(t,e){return new Promise(function(n,r){function i(f){t.removeListener(e,o),r(f)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",i),n([].slice.call(arguments))}De(t,e,o,{once:!0}),e!=="error"&&pt(t,i,{once:!0})})}function pt(t,e,n){typeof t.on=="function"&&De(t,"error",e,n)}function De(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(o){r.once&&t.removeEventListener(e,i),n(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var dt={exports:{}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(t){var e,n,r,i,o,f,c,y,w,_,E,v,h,b,T,k,x,$,D,F,K,I,W;(function(g){var H=typeof ye=="object"?ye:typeof self=="object"?self:typeof this=="object"?this:{};g(u(H,u(t.exports)));function u(s,a){return s!==H&&(typeof Object.create=="function"?Object.defineProperty(s,"__esModule",{value:!0}):s.__esModule=!0),function(p,d){return s[p]=a?a(p,d):d}}})(function(g){var H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,s){u.__proto__=s}||function(u,s){for(var a in s)s.hasOwnProperty(a)&&(u[a]=s[a])};e=function(u,s){H(u,s);function a(){this.constructor=u}u.prototype=s===null?Object.create(s):(a.prototype=s.prototype,new a)},n=Object.assign||function(u){for(var s,a=1,p=arguments.length;a<p;a++){s=arguments[a];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(u[d]=s[d])}return u},r=function(u,s){var a={};for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&s.indexOf(p)<0&&(a[p]=u[p]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,p=Object.getOwnPropertySymbols(u);d<p.length;d++)s.indexOf(p[d])<0&&Object.prototype.propertyIsEnumerable.call(u,p[d])&&(a[p[d]]=u[p[d]]);return a},i=function(u,s,a,p){var d=arguments.length,l=d<3?s:p===null?p=Object.getOwnPropertyDescriptor(s,a):p,L;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(u,s,a,p);else for(var C=u.length-1;C>=0;C--)(L=u[C])&&(l=(d<3?L(l):d>3?L(s,a,l):L(s,a))||l);return d>3&&l&&Object.defineProperty(s,a,l),l},o=function(u,s){return function(a,p){s(a,p,u)}},f=function(u,s){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(u,s)},c=function(u,s,a,p){function d(l){return l instanceof a?l:new a(function(L){L(l)})}return new(a||(a=Promise))(function(l,L){function C(N){try{O(p.next(N))}catch(G){L(G)}}function A(N){try{O(p.throw(N))}catch(G){L(G)}}function O(N){N.done?l(N.value):d(N.value).then(C,A)}O((p=p.apply(u,s||[])).next())})},y=function(u,s){var a={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},p,d,l,L;return L={next:C(0),throw:C(1),return:C(2)},typeof Symbol=="function"&&(L[Symbol.iterator]=function(){return this}),L;function C(O){return function(N){return A([O,N])}}function A(O){if(p)throw new TypeError("Generator is already executing.");for(;a;)try{if(p=1,d&&(l=O[0]&2?d.return:O[0]?d.throw||((l=d.return)&&l.call(d),0):d.next)&&!(l=l.call(d,O[1])).done)return l;switch(d=0,l&&(O=[O[0]&2,l.value]),O[0]){case 0:case 1:l=O;break;case 4:return a.label++,{value:O[1],done:!1};case 5:a.label++,d=O[1],O=[0];continue;case 7:O=a.ops.pop(),a.trys.pop();continue;default:if(l=a.trys,!(l=l.length>0&&l[l.length-1])&&(O[0]===6||O[0]===2)){a=0;continue}if(O[0]===3&&(!l||O[1]>l[0]&&O[1]<l[3])){a.label=O[1];break}if(O[0]===6&&a.label<l[1]){a.label=l[1],l=O;break}if(l&&a.label<l[2]){a.label=l[2],a.ops.push(O);break}l[2]&&a.ops.pop(),a.trys.pop();continue}O=s.call(u,a)}catch(N){O=[6,N],d=0}finally{p=l=0}if(O[0]&5)throw O[1];return{value:O[0]?O[1]:void 0,done:!0}}},W=function(u,s,a,p){p===void 0&&(p=a),u[p]=s[a]},w=function(u,s){for(var a in u)a!=="default"&&!s.hasOwnProperty(a)&&(s[a]=u[a])},_=function(u){var s=typeof Symbol=="function"&&Symbol.iterator,a=s&&u[s],p=0;if(a)return a.call(u);if(u&&typeof u.length=="number")return{next:function(){return u&&p>=u.length&&(u=void 0),{value:u&&u[p++],done:!u}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")},E=function(u,s){var a=typeof Symbol=="function"&&u[Symbol.iterator];if(!a)return u;var p=a.call(u),d,l=[],L;try{for(;(s===void 0||s-- >0)&&!(d=p.next()).done;)l.push(d.value)}catch(C){L={error:C}}finally{try{d&&!d.done&&(a=p.return)&&a.call(p)}finally{if(L)throw L.error}}return l},v=function(){for(var u=[],s=0;s<arguments.length;s++)u=u.concat(E(arguments[s]));return u},h=function(){for(var u=0,s=0,a=arguments.length;s<a;s++)u+=arguments[s].length;for(var p=Array(u),d=0,s=0;s<a;s++)for(var l=arguments[s],L=0,C=l.length;L<C;L++,d++)p[d]=l[L];return p},b=function(u){return this instanceof b?(this.v=u,this):new b(u)},T=function(u,s,a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var p=a.apply(u,s||[]),d,l=[];return d={},L("next"),L("throw"),L("return"),d[Symbol.asyncIterator]=function(){return this},d;function L(j){p[j]&&(d[j]=function(B){return new Promise(function(fe,ft){l.push([j,B,fe,ft])>1||C(j,B)})})}function C(j,B){try{A(p[j](B))}catch(fe){G(l[0][3],fe)}}function A(j){j.value instanceof b?Promise.resolve(j.value.v).then(O,N):G(l[0][2],j)}function O(j){C("next",j)}function N(j){C("throw",j)}function G(j,B){j(B),l.shift(),l.length&&C(l[0][0],l[0][1])}},k=function(u){var s,a;return s={},p("next"),p("throw",function(d){throw d}),p("return"),s[Symbol.iterator]=function(){return this},s;function p(d,l){s[d]=u[d]?function(L){return(a=!a)?{value:b(u[d](L)),done:d==="return"}:l?l(L):L}:l}},x=function(u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=u[Symbol.asyncIterator],a;return s?s.call(u):(u=typeof _=="function"?_(u):u[Symbol.iterator](),a={},p("next"),p("throw"),p("return"),a[Symbol.asyncIterator]=function(){return this},a);function p(l){a[l]=u[l]&&function(L){return new Promise(function(C,A){L=u[l](L),d(C,A,L.done,L.value)})}}function d(l,L,C,A){Promise.resolve(A).then(function(O){l({value:O,done:C})},L)}},$=function(u,s){return Object.defineProperty?Object.defineProperty(u,"raw",{value:s}):u.raw=s,u},D=function(u){if(u&&u.__esModule)return u;var s={};if(u!=null)for(var a in u)Object.hasOwnProperty.call(u,a)&&(s[a]=u[a]);return s.default=u,s},F=function(u){return u&&u.__esModule?u:{default:u}},K=function(u,s){if(!s.has(u))throw new TypeError("attempted to get private field on non-instance");return s.get(u)},I=function(u,s,a){if(!s.has(u))throw new TypeError("attempted to set private field on non-instance");return s.set(u,a),a},g("__extends",e),g("__assign",n),g("__rest",r),g("__decorate",i),g("__param",o),g("__metadata",f),g("__awaiter",c),g("__generator",y),g("__exportStar",w),g("__createBinding",W),g("__values",_),g("__read",E),g("__spread",v),g("__spreadArrays",h),g("__await",b),g("__asyncGenerator",T),g("__asyncDelegator",k),g("__asyncValues",x),g("__makeTemplateObject",$),g("__importStar",D),g("__importDefault",F),g("__classPrivateFieldGet",K),g("__classPrivateFieldSet",I)})})(dt);var Y,m,Ie,Ue,U,ge,Ve,ae,We,re={},Ge=[],vt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ue=Array.isArray;function R(t,e){for(var n in e)t[n]=e[n];return t}function Be(t){var e=t.parentNode;e&&e.removeChild(t)}function le(t,e,n){var r,i,o,f={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:f[o]=e[o];if(arguments.length>2&&(f.children=arguments.length>3?Y.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)f[o]===void 0&&(f[o]=t.defaultProps[o]);return J(t,f,r,i,null)}function J(t,e,n,r,i){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++Ie:i};return i==null&&m.vnode!=null&&m.vnode(o),o}function yt(){return{current:null}}function Z(t){return t.children}function Q(t,e){this.props=t,this.context=e}function X(t,e){if(e==null)return t.__?X(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?X(t):null}function qe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return qe(t)}}function ce(t){(!t.__d&&(t.__d=!0)&&U.push(t)&&!oe.__r++||ge!==m.debounceRendering)&&((ge=m.debounceRendering)||Ve)(oe)}function oe(){var t,e,n,r,i,o,f,c;for(U.sort(ae);t=U.shift();)t.__d&&(e=U.length,r=void 0,i=void 0,f=(o=(n=t).__v).__e,(c=n.__P)&&(r=[],(i=R({},o)).__v=o.__v+1,pe(c,o,i,n.__n,c.ownerSVGElement!==void 0,o.__h!=null?[f]:null,r,f==null?X(o):f,o.__h),Ye(r,o),o.__e!=f&&qe(o)),U.length>e&&U.sort(ae));oe.__r=0}function ze(t,e,n,r,i,o,f,c,y,w){var _,E,v,h,b,T,k,x=r&&r.__k||Ge,$=x.length;for(n.__k=[],_=0;_<e.length;_++)if((h=n.__k[_]=(h=e[_])==null||typeof h=="boolean"||typeof h=="function"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?J(null,h,null,null,h):ue(h)?J(Z,{children:h},null,null,null):h.__b>0?J(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(v=x[_])===null||v&&h.key==v.key&&h.type===v.type)x[_]=void 0;else for(E=0;E<$;E++){if((v=x[E])&&h.key==v.key&&h.type===v.type){x[E]=void 0;break}v=null}pe(t,h,v=v||re,i,o,f,c,y,w),b=h.__e,(E=h.ref)&&v.ref!=E&&(k||(k=[]),v.ref&&k.push(v.ref,null,h),k.push(E,h.__c||b,h)),b!=null?(T==null&&(T=b),typeof h.type=="function"&&h.__k===v.__k?h.__d=y=Ke(h,y,t):y=Qe(t,h,v,x,b,y),typeof n.type=="function"&&(n.__d=y)):y&&v.__e==y&&y.parentNode!=t&&(y=X(v))}for(n.__e=T,_=$;_--;)x[_]!=null&&(typeof n.type=="function"&&x[_].__e!=null&&x[_].__e==n.__d&&(n.__d=Xe(r).nextSibling),et(x[_],x[_]));if(k)for(_=0;_<k.length;_++)Ze(k[_],k[++_],k[++_])}function Ke(t,e,n){for(var r,i=t.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=t,e=typeof r.type=="function"?Ke(r,e,n):Qe(n,r,r,i,r.__e,e));return e}function Je(t,e){return e=e||[],t==null||typeof t=="boolean"||(ue(t)?t.some(function(n){Je(n,e)}):e.push(t)),e}function Qe(t,e,n,r,i,o){var f,c,y;if(e.__d!==void 0)f=e.__d,e.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),f=null;else{for(c=o,y=0;(c=c.nextSibling)&&y<r.length;y+=1)if(c==i)break e;t.insertBefore(i,o),f=o}return f!==void 0?f:i.nextSibling}function Xe(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=Xe(n)))return r}return null}function mt(t,e,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in e||_e(t,o,null,n[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||_e(t,o,e[o],n[o],r)}function we(t,e,n){e[0]==="-"?t.setProperty(e,n==null?"":n):t[e]=n==null?"":typeof n!="number"||vt.test(e)?n:n+"px"}function _e(t,e,n,r,i){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||we(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||we(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r||t.addEventListener(e,o?Oe:Le,o):t.removeEventListener(e,o?Oe:Le,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Le(t){return this.l[t.type+!1](m.event?m.event(t):t)}function Oe(t){return this.l[t.type+!0](m.event?m.event(t):t)}function pe(t,e,n,r,i,o,f,c,y){var w,_,E,v,h,b,T,k,x,$,D,F,K,I,W,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(y=n.__h,c=e.__e=n.__e,e.__h=null,o=[c]),(w=m.__b)&&w(e);try{e:if(typeof g=="function"){if(k=e.props,x=(w=g.contextType)&&r[w.__c],$=w?x?x.props.value:w.__:r,n.__c?T=(_=e.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?e.__c=_=new g(k,$):(e.__c=_=new Q(k,$),_.constructor=g,_.render=gt),x&&x.sub(_),_.props=k,_.state||(_.state={}),_.context=$,_.__n=r,E=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=R({},_.__s)),R(_.__s,g.getDerivedStateFromProps(k,_.__s))),v=_.props,h=_.state,_.__v=e,E)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&k!==v&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(k,$),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(k,_.__s,$)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(_.props=k,_.state=_.__s,_.__d=!1),_.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(H){H&&(H.__=e)}),D=0;D<_._sb.length;D++)_.__h.push(_._sb[D]);_._sb=[],_.__h.length&&f.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(k,_.__s,$),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(v,h,b)})}if(_.context=$,_.props=k,_.__P=t,F=m.__r,K=0,"prototype"in g&&g.prototype.render){for(_.state=_.__s,_.__d=!1,F&&F(e),w=_.render(_.props,_.state,_.context),I=0;I<_._sb.length;I++)_.__h.push(_._sb[I]);_._sb=[]}else do _.__d=!1,F&&F(e),w=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++K<25);_.state=_.__s,_.getChildContext!=null&&(r=R(R({},r),_.getChildContext())),E||_.getSnapshotBeforeUpdate==null||(b=_.getSnapshotBeforeUpdate(v,h)),ze(t,ue(W=w!=null&&w.type===Z&&w.key==null?w.props.children:w)?W:[W],e,n,r,i,o,f,c,y),_.base=e.__e,e.__h=null,_.__h.length&&f.push(_),T&&(_.__E=_.__=null),_.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=bt(n.__e,e,n,r,i,o,f,y);(w=m.diffed)&&w(e)}catch(H){e.__v=null,(y||o!=null)&&(e.__e=c,e.__h=!!y,o[o.indexOf(c)]=null),m.__e(H,e,n)}}function Ye(t,e){m.__c&&m.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){m.__e(r,n.__v)}})}function bt(t,e,n,r,i,o,f,c){var y,w,_,E=n.props,v=e.props,h=e.type,b=0;if(h==="svg"&&(i=!0),o!=null){for(;b<o.length;b++)if((y=o[b])&&"setAttribute"in y==!!h&&(h?y.localName===h:y.nodeType===3)){t=y,o[b]=null;break}}if(t==null){if(h===null)return document.createTextNode(v);t=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,v.is&&v),o=null,c=!1}if(h===null)E===v||c&&t.data===v||(t.data=v);else{if(o=o&&Y.call(t.childNodes),w=(E=n.props||re).dangerouslySetInnerHTML,_=v.dangerouslySetInnerHTML,!c){if(o!=null)for(E={},b=0;b<t.attributes.length;b++)E[t.attributes[b].name]=t.attributes[b].value;(_||w)&&(_&&(w&&_.__html==w.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(mt(t,v,E,i,c),_)e.__k=[];else if(ze(t,ue(b=e.props.children)?b:[b],e,n,r,i&&h!=="foreignObject",o,f,o?o[0]:n.__k&&X(n,0),c),o!=null)for(b=o.length;b--;)o[b]!=null&&Be(o[b]);c||("value"in v&&(b=v.value)!==void 0&&(b!==t.value||h==="progress"&&!b||h==="option"&&b!==E.value)&&_e(t,"value",b,E.value,!1),"checked"in v&&(b=v.checked)!==void 0&&b!==t.checked&&_e(t,"checked",b,E.checked,!1))}return t}function Ze(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){m.__e(r,n)}}function et(t,e,n){var r,i;if(m.unmount&&m.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Ze(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){m.__e(o,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&et(r[i],e,n||typeof t.type!="function");n||t.__e==null||Be(t.__e),t.__=t.__e=t.__d=void 0}function gt(t,e,n){return this.constructor(t,n)}function tt(t,e,n){var r,i,o;m.__&&m.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],pe(e,t=(!r&&n||e).__k=le(Z,null,[t]),i||re,re,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?Y.call(e.childNodes):null,o,!r&&n?n:i?i.__e:e.firstChild,r),Ye(o,t)}function nt(t,e){tt(t,e,nt)}function wt(t,e,n){var r,i,o,f,c=R({},t.props);for(o in t.type&&t.type.defaultProps&&(f=t.type.defaultProps),e)o=="key"?r=e[o]:o=="ref"?i=e[o]:c[o]=e[o]===void 0&&f!==void 0?f[o]:e[o];return arguments.length>2&&(c.children=arguments.length>3?Y.call(arguments,2):n),J(t.type,c,r||t.key,i||t.ref,null)}function Lt(t,e){var n={__c:e="__cC"+We++,__:t,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(f){this.props.value!==f.value&&i.some(function(c){c.__e=!0,ce(c)})},this.sub=function(f){i.push(f);var c=f.componentWillUnmount;f.componentWillUnmount=function(){i.splice(i.indexOf(f),1),c&&c.call(f)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Y=Ge.slice,m={__e:function(t,e,n,r){for(var i,o,f;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),f=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),f=i.__d),f)return i.__E=i}catch(c){t=c}throw t}},Ie=0,Ue=function(t){return t!=null&&t.constructor===void 0},Q.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=R({},this.state),typeof t=="function"&&(t=t(R({},n),this.props)),t&&R(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),ce(this))},Q.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ce(this))},Q.prototype.render=Z,U=[],Ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ae=function(t,e){return t.__v.__b-e.__v.__b},oe.__r=0,We=0;const Ht=Object.freeze(Object.defineProperty({__proto__:null,Component:Q,Fragment:Z,cloneElement:wt,createContext:Lt,createElement:le,createRef:yt,h:le,hydrate:nt,get isValidElement(){return Ue},get options(){return m},render:tt,toChildArray:Je},Symbol.toStringTag,{value:"Module"}));var M,P,se,Ee,z=0,rt=[],te=[],Se=m.__b,Pe=m.__r,ke=m.diffed,Ce=m.__c,xe=m.unmount;function V(t,e){m.__h&&m.__h(P,t,z||e),z=0;var n=P.__H||(P.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:te}),n.__[t]}function ot(t){return z=1,_t(ut,t)}function _t(t,e,n){var r=V(M++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):ut(void 0,e),function(c){var y=r.__N?r.__N[0]:r.__[0],w=r.t(y,c);y!==w&&(r.__N=[w,r.__[1]],r.__c.setState({}))}],r.__c=P,!P.u)){var i=function(c,y,w){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter(function(v){return v.__c});if(_.every(function(v){return!v.__N}))return!o||o.call(this,c,y,w);var E=!1;return _.forEach(function(v){if(v.__N){var h=v.__[0];v.__=v.__N,v.__N=void 0,h!==v.__[0]&&(E=!0)}}),!(!E&&r.__c.props===c)&&(!o||o.call(this,c,y,w))};P.u=!0;var o=P.shouldComponentUpdate,f=P.componentWillUpdate;P.componentWillUpdate=function(c,y,w){if(this.__e){var _=o;o=void 0,i(c,y,w),o=_}f&&f.call(this,c,y,w)},P.shouldComponentUpdate=i}return r.__N||r.__}function Ot(t,e){var n=V(M++,3);!m.__s&&ve(n.__H,e)&&(n.__=t,n.i=e,P.__H.__h.push(n))}function it(t,e){var n=V(M++,4);!m.__s&&ve(n.__H,e)&&(n.__=t,n.i=e,P.__h.push(n))}function Et(t){return z=5,de(function(){return{current:t}},[])}function St(t,e,n){z=6,it(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function de(t,e){var n=V(M++,7);return ve(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Pt(t,e){return z=8,de(function(){return t},e)}function kt(t){var e=P.context[t.__c],n=V(M++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(P)),e.props.value):t.__}function Ct(t,e){m.useDebugValue&&m.useDebugValue(e?e(t):t)}function xt(t){var e=V(M++,10),n=ot();return e.__=t,P.componentDidCatch||(P.componentDidCatch=function(r,i){e.__&&e.__(r,i),n[1](r)}),[n[0],function(){n[1](void 0)}]}function jt(){var t=V(M++,11);if(!t.__){for(var e=P.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function $t(){for(var t;t=rt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ne),t.__H.__h.forEach(he),t.__H.__h=[]}catch(e){t.__H.__h=[],m.__e(e,t.__v)}}m.__b=function(t){P=null,Se&&Se(t)},m.__r=function(t){Pe&&Pe(t),M=0;var e=(P=t.__c).__H;e&&(se===P?(e.__h=[],P.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=te,n.__N=n.i=void 0})):(e.__h.forEach(ne),e.__h.forEach(he),e.__h=[],M=0)),se=P},m.diffed=function(t){ke&&ke(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(rt.push(e)!==1&&Ee===m.requestAnimationFrame||((Ee=m.requestAnimationFrame)||Nt)($t)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==te&&(n.__=n.__V),n.i=void 0,n.__V=te})),se=P=null},m.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ne),n.__h=n.__h.filter(function(r){return!r.__||he(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],m.__e(r,n.__v)}}),Ce&&Ce(t,e)},m.unmount=function(t){xe&&xe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ne(r)}catch(i){e=i}}),n.__H=void 0,e&&m.__e(e,n.__v))};var je=typeof requestAnimationFrame=="function";function Nt(t){var e,n=function(){clearTimeout(r),je&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);je&&(e=requestAnimationFrame(n))}function ne(t){var e=P,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),P=e}function he(t){var e=P;t.__c=t.__(),P=e}function ve(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function ut(t,e){return typeof e=="function"?e(t):e}const At=Object.freeze(Object.defineProperty({__proto__:null,useCallback:Pt,useContext:kt,useDebugValue:Ct,useEffect:Ot,useErrorBoundary:xt,useId:jt,useImperativeHandle:St,useLayoutEffect:it,useMemo:de,useReducer:_t,useRef:Et,useState:ot},Symbol.toStringTag,{value:"Module"}));export{St as A,tt as D,nt as E,wt as F,Lt as G,xt as P,Je as S,Pt as T,jt as V,Et as _,it as a,Q as b,ot as c,Ot as d,$e as e,de as f,yt as g,At as h,Z as k,m as l,Ht as p,kt as q,_t as s,dt as t,Ct as x,le as y};
