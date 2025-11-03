var ub=Object.defineProperty;var El=t=>{throw TypeError(t)};var lb=(t,e,n)=>e in t?ub(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var hr=(t,e,n)=>lb(t,typeof e!="symbol"?e+"":e,n),Il=(t,e,n)=>e.has(t)||El("Cannot "+n);var xl=(t,e,n)=>(Il(t,e,"read from private field"),n?n.call(t):e.get(t)),_l=(t,e,n)=>e.has(t)?El("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Al=(t,e,n,s)=>(Il(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);import lf from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/highlight.min.js";import db from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/languages/javascript.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Nr=[],On=()=>{},fb=()=>!1,ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gu=t=>t.startsWith("onUpdate:"),vt=Object.assign,bu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hb=Object.prototype.hasOwnProperty,xe=(t,e)=>hb.call(t,e),ge=Array.isArray,Tr=t=>la(t)==="[object Map]",df=t=>la(t)==="[object Set]",be=t=>typeof t=="function",Ye=t=>typeof t=="string",Ds=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",ff=t=>(Re(t)||be(t))&&be(t.then)&&be(t.catch),hf=Object.prototype.toString,la=t=>hf.call(t),pb=t=>la(t).slice(8,-1),pf=t=>la(t)==="[object Object]",yu=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hi=pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gb=/-(\w)/g,Zt=da(t=>t.replace(gb,(e,n)=>n?n.toUpperCase():"")),bb=/\B([A-Z])/g,lr=da(t=>t.replace(bb,"-$1").toLowerCase()),fa=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=da(t=>t?`on${fa(t)}`:""),Js=(t,e)=>!Object.is(t,e),Ba=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gf=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},yb=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nl;const ha=()=>Nl||(Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mu(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ye(s)?Sb(s):mu(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ye(t)||Re(t))return t}const mb=/;(?![^(]*\))/g,wb=/:([^]+)/,vb=/\/\*[^]*?\*\//g;function Sb(t){const e={};return t.replace(vb,"").split(mb).forEach(n=>{if(n){const s=n.split(wb);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _i(t){let e="";if(Ye(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const s=_i(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eb=pu(Mb);function bf(t){return!!t||t===""}const yf=t=>!!(t&&t.__v_isRef===!0),nn=t=>Ye(t)?t:t==null?"":ge(t)||Re(t)&&(t.toString===hf||!be(t.toString))?yf(t)?nn(t.value):JSON.stringify(t,mf,2):String(t),mf=(t,e)=>yf(e)?mf(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ua(s,i)+" =>"]=r,n),{})}:df(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ua(n))}:Ds(e)?Ua(e):Re(e)&&!ge(e)&&!pf(e)?String(e):e,Ua=(t,e="")=>{var n;return Ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class Ib{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function xb(){return zt}let ke;const La=new WeakSet;class wf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tl(this),Mf(this);const e=ke,n=fn;ke=this,fn=!0;try{return this.fn()}finally{Ef(this),ke=e,fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Su(e);this.deps=this.depsTail=void 0,Tl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vc(this)&&this.run()}get dirty(){return vc(this)}}let vf=0,pi,gi;function Sf(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=pi,pi=t}function wu(){vf++}function vu(){if(--vf>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pi;){let e=pi;for(pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Mf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ef(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Su(s),_b(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function vc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(If(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function If(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai))return;t.globalVersion=Ai;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vc(t)){t.flags&=-3;return}const n=ke,s=fn;ke=t,fn=!0;try{Mf(t);const r=t.fn(t._value);(e.version===0||Js(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ke=n,fn=s,Ef(t),t.flags&=-3}}function Su(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Su(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _b(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fn=!0;const xf=[];function Bs(){xf.push(fn),fn=!1}function Us(){const t=xf.pop();fn=t===void 0?!0:t}function Tl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Ai=0;class Ab{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _f{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ke||!fn||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Ab(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Af(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=s)}return n}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vu()}}}function Af(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Af(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Sc=new WeakMap,er=Symbol(""),Mc=Symbol(""),Ni=Symbol("");function lt(t,e,n){if(fn&&ke){let s=Sc.get(t);s||Sc.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new _f),r.map=s,r.key=n),r.track()}}function Jn(t,e,n,s,r,i){const o=Sc.get(t);if(!o){Ai++;return}const a=c=>{c&&c.trigger()};if(wu(),e==="clear")o.forEach(a);else{const c=ge(t),l=c&&yu(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===Ni||!Ds(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Ni)),e){case"add":c?l&&a(o.get("length")):(a(o.get(er)),Tr(t)&&a(o.get(Mc)));break;case"delete":c||(a(o.get(er)),Tr(t)&&a(o.get(Mc)));break;case"set":Tr(t)&&a(o.get(er));break}}vu()}function pr(t){const e=Ae(t);return e===t?e:(lt(e,"iterate",Ni),hn(t)?e:e.map(At))}function pa(t){return lt(t=Ae(t),"iterate",Ni),t}const Nb={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,At)},concat(...t){return pr(this).concat(...t.map(e=>ge(e)?pr(e):e))},entries(){return za(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return zn(this,"find",t,e,At,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pa(this,"includes",t)},indexOf(...t){return Pa(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return Pa(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return Jr(this,"pop")},push(...t){return Jr(this,"push",t)},reduce(t,...e){return Ol(this,"reduce",t,e)},reduceRight(t,...e){return Ol(this,"reduceRight",t,e)},shift(){return Jr(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return Jr(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return Jr(this,"unshift",t)},values(){return za(this,"values",At)}};function za(t,e,n){const s=pa(t),r=s[e]();return s!==t&&!hn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Tb=Array.prototype;function zn(t,e,n,s,r,i){const o=pa(t),a=o!==t&&!hn(t),c=o[e];if(c!==Tb[e]){const f=c.apply(t,i);return a?At(f):f}let l=n;o!==t&&(a?l=function(f,d){return n.call(this,At(f),d,t)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Ol(t,e,n,s){const r=pa(t);let i=n;return r!==t&&(hn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,At(a),c,t)}),r[e](i,...s)}function Pa(t,e,n){const s=Ae(t);lt(s,"iterate",Ni);const r=s[e](...n);return(r===-1||r===!1)&&xu(n[0])?(n[0]=Ae(n[0]),s[e](...n)):r}function Jr(t,e,n=[]){Bs(),wu();const s=Ae(t)[e].apply(t,n);return vu(),Us(),s}const Ob=pu("__proto__,__v_isRef,__isVue"),Nf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ds));function kb(t){Ds(t)||(t=String(t));const e=Ae(this);return lt(e,"has",t),e.hasOwnProperty(t)}class Tf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Rb:Cf:i?jf:kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ge(e);if(!r){let c;if(o&&(c=Nb[n]))return c;if(n==="hasOwnProperty")return kb}const a=Reflect.get(e,n,yt(e)?e:s);return(Ds(n)?Nf.has(n):Ob(n))||(r||lt(e,"get",n),i)?a:yt(a)?o&&yu(n)?a:a.value:Re(a)?r?Df(a):Eu(a):a}}class Of extends Tf{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ur(i);if(!hn(s)&&!Ur(s)&&(i=Ae(i),s=Ae(s)),!ge(e)&&yt(i)&&!yt(s))return c?!1:(i.value=s,!0)}const o=ge(e)&&yu(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,s,yt(e)?e:r);return e===Ae(r)&&(o?Js(s,i)&&Jn(e,"set",n,s):Jn(e,"add",n,s)),a}deleteProperty(e,n){const s=xe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Jn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ds(n)||!Nf.has(n))&&lt(e,"has",n),s}ownKeys(e){return lt(e,"iterate",ge(e)?"length":er),Reflect.ownKeys(e)}}class jb extends Tf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Cb=new Of,Db=new jb,Bb=new Of(!0);const Ec=t=>t,eo=t=>Reflect.getPrototypeOf(t);function Ub(t,e,n){return function(...s){const r=this.__v_raw,i=Ae(r),o=Tr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ec:e?Ic:At;return!e&&lt(i,"iterate",c?Mc:er),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function to(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lb(t,e){const n={get(r){const i=this.__v_raw,o=Ae(i),a=Ae(r);t||(Js(r,a)&&lt(o,"get",r),lt(o,"get",a));const{has:c}=eo(o),l=e?Ec:t?Ic:At;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&lt(Ae(r),"iterate",er),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Ae(i),a=Ae(r);return t||(Js(r,a)&&lt(o,"has",r),lt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Ae(a),l=e?Ec:t?Ic:At;return!t&&lt(c,"iterate",er),a.forEach((u,f)=>r.call(i,l(u),l(f),o))}};return vt(n,t?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(r){!e&&!hn(r)&&!Ur(r)&&(r=Ae(r));const i=Ae(this);return eo(i).has.call(i,r)||(i.add(r),Jn(i,"add",r,r)),this},set(r,i){!e&&!hn(i)&&!Ur(i)&&(i=Ae(i));const o=Ae(this),{has:a,get:c}=eo(o);let l=a.call(o,r);l||(r=Ae(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Js(i,u)&&Jn(o,"set",r,i):Jn(o,"add",r,i),this},delete(r){const i=Ae(this),{has:o,get:a}=eo(i);let c=o.call(i,r);c||(r=Ae(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&Jn(i,"delete",r,void 0),l},clear(){const r=Ae(this),i=r.size!==0,o=r.clear();return i&&Jn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ub(r,t,e)}),n}function Mu(t,e){const n=Lb(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,i)}const zb={get:Mu(!1,!1)},Pb={get:Mu(!1,!0)},$b={get:Mu(!0,!1)};const kf=new WeakMap,jf=new WeakMap,Cf=new WeakMap,Rb=new WeakMap;function Vb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fb(t){return t.__v_skip||!Object.isExtensible(t)?0:Vb(pb(t))}function Eu(t){return Ur(t)?t:Iu(t,!1,Cb,zb,kf)}function qb(t){return Iu(t,!1,Bb,Pb,jf)}function Df(t){return Iu(t,!0,Db,$b,Cf)}function Iu(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Fb(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Or(t){return Ur(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function Ur(t){return!!(t&&t.__v_isReadonly)}function hn(t){return!!(t&&t.__v_isShallow)}function xu(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Kb(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&gf(t,"__v_skip",!0),t}const At=t=>Re(t)?Eu(t):t,Ic=t=>Re(t)?Df(t):t;function yt(t){return t?t.__v_isRef===!0:!1}function Wb(t){return yt(t)?t.value:t}const Gb={get:(t,e,n)=>e==="__v_raw"?t:Wb(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return yt(r)&&!yt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Bf(t){return Or(t)?t:new Proxy(t,Gb)}class Hb{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new _f(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return If(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yb(t,e,n=!1){let s,r;return be(t)?s=t:(s=t.get,r=t.set),new Hb(s,r,n)}const no={},$o=new WeakMap;let $s;function Zb(t,e=!1,n=$s){if(n){let s=$o.get(n);s||$o.set(n,s=[]),s.push(t)}}function Qb(t,e,n=Ce){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=j=>r?j:hn(j)||r===!1||r===0?Es(j,1):Es(j);let u,f,d,h,p=!1,y=!1;if(yt(t)?(f=()=>t.value,p=hn(t)):Or(t)?(f=()=>l(t),p=!0):ge(t)?(y=!0,p=t.some(j=>Or(j)||hn(j)),f=()=>t.map(j=>{if(yt(j))return j.value;if(Or(j))return l(j);if(be(j))return c?c(j,2):j()})):be(t)?e?f=c?()=>c(t,2):t:f=()=>{if(d){Bs();try{d()}finally{Us()}}const j=$s;$s=u;try{return c?c(t,3,[h]):t(h)}finally{$s=j}}:f=On,e&&r){const j=f,K=r===!0?1/0:r;f=()=>Es(j(),K)}const S=xb(),_=()=>{u.stop(),S&&S.active&&bu(S.effects,u)};if(i&&e){const j=e;e=(...K)=>{j(...K),_()}}let B=y?new Array(t.length).fill(no):no;const T=j=>{if(!(!(u.flags&1)||!u.dirty&&!j))if(e){const K=u.run();if(r||p||(y?K.some((F,se)=>Js(F,B[se])):Js(K,B))){d&&d();const F=$s;$s=u;try{const se=[K,B===no?void 0:y&&B[0]===no?[]:B,h];c?c(e,3,se):e(...se),B=K}finally{$s=F}}}else u.run()};return a&&a(T),u=new wf(f),u.scheduler=o?()=>o(T,!1):T,h=j=>Zb(j,!1,u),d=u.onStop=()=>{const j=$o.get(u);if(j){if(c)c(j,4);else for(const K of j)K();$o.delete(u)}},e?s?T(!0):B=u.run():o?o(T.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Es(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))Es(t.value,e,n);else if(ge(t))for(let s=0;s<t.length;s++)Es(t[s],e,n);else if(df(t)||Tr(t))t.forEach(s=>{Es(s,e,n)});else if(pf(t)){for(const s in t)Es(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Es(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fi(t,e,n,s){try{return s?t(...s):t()}catch(r){ga(r,e,n)}}function Cn(t,e,n,s){if(be(t)){const r=Fi(t,e,n,s);return r&&ff(r)&&r.catch(i=>{ga(i,e,n)}),r}if(ge(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Cn(t[i],e,n,s));return r}}function ga(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Bs(),Fi(i,null,10,[t,c,l]),Us();return}}Xb(t,n,r,s,o)}function Xb(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const bt=[];let Sn=-1;const kr=[];let ys=null,wr=0;const Uf=Promise.resolve();let Ro=null;function Jb(t){const e=Ro||Uf;return t?e.then(this?t.bind(this):t):e}function ey(t){let e=Sn+1,n=bt.length;for(;e<n;){const s=e+n>>>1,r=bt[s],i=Ti(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function _u(t){if(!(t.flags&1)){const e=Ti(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=Ti(n)?bt.push(t):bt.splice(ey(e),0,t),t.flags|=1,Lf()}}function Lf(){Ro||(Ro=Uf.then(Pf))}function ty(t){ge(t)?kr.push(...t):ys&&t.id===-1?ys.splice(wr+1,0,t):t.flags&1||(kr.push(t),t.flags|=1),Lf()}function kl(t,e,n=Sn+1){for(;n<bt.length;n++){const s=bt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;bt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function zf(t){if(kr.length){const e=[...new Set(kr)].sort((n,s)=>Ti(n)-Ti(s));if(kr.length=0,ys){ys.push(...e);return}for(ys=e,wr=0;wr<ys.length;wr++){const n=ys[wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ys=null,wr=0}}const Ti=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pf(t){try{for(Sn=0;Sn<bt.length;Sn++){const e=bt[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<bt.length;Sn++){const e=bt[Sn];e&&(e.flags&=-2)}Sn=-1,bt.length=0,zf(),Ro=null,(bt.length||kr.length)&&Pf()}}let ln=null,$f=null;function Vo(t){const e=ln;return ln=t,$f=t&&t.type.__scopeId||null,e}function ny(t,e=ln,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Rl(-1);const i=Vo(e);let o;try{o=t(...r)}finally{Vo(i),s._d&&Rl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ls(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Bs(),Cn(c,n,8,[t.el,a,t,e]),Us())}}const sy=Symbol("_vte"),ry=t=>t.__isTeleport;function Au(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Au(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fo(t,e,n,s,r=!1){if(ge(t)){t.forEach((p,y)=>Fo(p,e&&(ge(e)?e[y]:e),n,s,r));return}if(bi(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Fo(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ou(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,f=a.setupState,d=Ae(f),h=f===Ce?()=>!1:p=>xe(d,p);if(l!=null&&l!==c&&(Ye(l)?(u[l]=null,h(l)&&(f[l]=null)):yt(l)&&(l.value=null)),be(c))Fi(c,a,12,[o,u]);else{const p=Ye(c),y=yt(c);if(p||y){const S=()=>{if(t.f){const _=p?h(c)?f[c]:u[c]:c.value;r?ge(_)&&bu(_,i):ge(_)?_.includes(i)||_.push(i):p?(u[c]=[i],h(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,h(c)&&(f[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,Lt(S,n)):S()}}}ha().requestIdleCallback;ha().cancelIdleCallback;const bi=t=>!!t.type.__asyncLoader,Vf=t=>t.type.__isKeepAlive;function iy(t,e){Ff(t,"a",e)}function oy(t,e){Ff(t,"da",e)}function Ff(t,e,n=ft){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Vf(r.parent.vnode)&&ay(s,e,n,r),r=r.parent}}function ay(t,e,n,s){const r=ba(e,t,s,!0);qf(()=>{bu(s[e],r)},n)}function ba(t,e,n=ft,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bs();const a=qi(n),c=Cn(e,n,t,o);return a(),Us(),c});return s?r.unshift(i):r.push(i),i}}const os=t=>(e,n=ft)=>{(!ji||t==="sp")&&ba(t,(...s)=>e(...s),n)},cy=os("bm"),uy=os("m"),ly=os("bu"),dy=os("u"),fy=os("bum"),qf=os("um"),hy=os("sp"),py=os("rtg"),gy=os("rtc");function by(t,e=ft){ba("ec",t,e)}const yy="components";function Oi(t,e){return wy(yy,t,!0,e)||t}const my=Symbol.for("v-ndc");function wy(t,e,n=!0,s=!1){const r=ln||ft;if(r){const i=r.type;{const a=a0(i,!1);if(a&&(a===e||a===Zt(e)||a===fa(Zt(e))))return i}const o=jl(r[t]||i[t],e)||jl(r.appContext[t],e);return!o&&s?i:o}}function jl(t,e){return t&&(t[e]||t[Zt(e)]||t[fa(Zt(e))])}function xc(t,e,n,s){let r;const i=n,o=ge(t);if(o||Ye(t)){const a=o&&Or(t);let c=!1;a&&(c=!hn(t),t=pa(t)),r=new Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=e(c?At(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}const _c=t=>t?hh(t)?Ou(t):_c(t.parent):null,yi=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wf(t),$forceUpdate:t=>t.f||(t.f=()=>{_u(t.update)}),$nextTick:t=>t.n||(t.n=Jb.bind(t.proxy)),$watch:t=>Ry.bind(t)}),$a=(t,e)=>t!==Ce&&!t.__isScriptSetup&&xe(t,e),vy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if($a(s,e))return o[e]=1,s[e];if(r!==Ce&&xe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&xe(l,e))return o[e]=3,i[e];if(n!==Ce&&xe(n,e))return o[e]=4,n[e];Ac&&(o[e]=0)}}const u=yi[e];let f,d;if(u)return e==="$attrs"&&lt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&xe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,xe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return $a(r,e)?(r[e]=n,!0):s!==Ce&&xe(s,e)?(s[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&xe(t,o)||$a(e,o)||(a=i[0])&&xe(a,o)||xe(s,o)||xe(yi,o)||xe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cl(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ac=!0;function Sy(t){const e=Wf(t),n=t.proxy,s=t.ctx;Ac=!1,e.beforeCreate&&Dl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:p,activated:y,deactivated:S,beforeDestroy:_,beforeUnmount:B,destroyed:T,unmounted:j,render:K,renderTracked:F,renderTriggered:se,errorCaptured:re,serverPrefetch:V,expose:O,inheritAttrs:A,components:k,directives:M,filters:I}=e;if(l&&My(l,s,null),o)for(const w in o){const x=o[w];be(x)&&(s[w]=x.bind(n))}if(r){const w=r.call(n,n);Re(w)&&(t.data=Eu(w))}if(Ac=!0,i)for(const w in i){const x=i[w],C=be(x)?x.bind(n,n):be(x.get)?x.get.bind(n,n):On,D=!be(x)&&be(x.set)?x.set.bind(n):On,L=u0({get:C,set:D});Object.defineProperty(s,w,{enumerable:!0,configurable:!0,get:()=>L.value,set:R=>L.value=R})}if(a)for(const w in a)Kf(a[w],s,n,w);if(c){const w=be(c)?c.call(n):c;Reflect.ownKeys(w).forEach(x=>{Ny(x,w[x])})}u&&Dl(u,t,"c");function v(w,x){ge(x)?x.forEach(C=>w(C.bind(n))):x&&w(x.bind(n))}if(v(cy,f),v(uy,d),v(ly,h),v(dy,p),v(iy,y),v(oy,S),v(by,re),v(gy,F),v(py,se),v(fy,B),v(qf,j),v(hy,V),ge(O))if(O.length){const w=t.exposed||(t.exposed={});O.forEach(x=>{Object.defineProperty(w,x,{get:()=>n[x],set:C=>n[x]=C})})}else t.exposed||(t.exposed={});K&&t.render===On&&(t.render=K),A!=null&&(t.inheritAttrs=A),k&&(t.components=k),M&&(t.directives=M),V&&Rf(t)}function My(t,e,n=On){ge(t)&&(t=Nc(t));for(const s in t){const r=t[s];let i;Re(r)?"default"in r?i=Mo(r.from||s,r.default,!0):i=Mo(r.from||s):i=Mo(r),yt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Dl(t,e,n){Cn(ge(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kf(t,e,n,s){let r=s.includes(".")?oh(n,s):()=>n[s];if(Ye(t)){const i=e[t];be(i)&&Va(r,i)}else if(be(t))Va(r,t.bind(n));else if(Re(t))if(ge(t))t.forEach(i=>Kf(i,e,n,s));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&Va(r,i,t)}}function Wf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>qo(c,l,o,!0)),qo(c,e,o)),Re(e)&&i.set(e,c),c}function qo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&qo(t,i,n,!0),r&&r.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ey[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ey={data:Bl,props:Ul,emits:Ul,methods:oi,computed:oi,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:oi,directives:oi,watch:xy,provide:Bl,inject:Iy};function Bl(t,e){return e?t?function(){return vt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function Iy(t,e){return oi(Nc(t),Nc(e))}function Nc(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?vt(Object.create(null),t,e):e}function Ul(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:vt(Object.create(null),Cl(t),Cl(e??{})):e}function xy(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function Gf(){return{app:null,config:{isNativeTag:fb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _y=0;function Ay(t,e){return function(s,r=null){be(s)||(s=vt({},s)),r!=null&&!Re(r)&&(r=null);const i=Gf(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:_y++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:l0,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&be(u.install)?(o.add(u),u.install(l,...f)):be(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const h=l._ceVNode||mt(s,r);return h.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),c=!0,l._container=u,u.__vue_app__=l,Ou(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Cn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=jr;jr=l;try{return u()}finally{jr=f}}};return l}}let jr=null;function Ny(t,e){if(ft){let n=ft.provides;const s=ft.parent&&ft.parent.provides;s===n&&(n=ft.provides=Object.create(s)),n[t]=e}}function Mo(t,e,n=!1){const s=ft||ln;if(s||jr){const r=jr?jr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&be(e)?e.call(s&&s.proxy):e}}const Hf={},Yf=()=>Object.create(Hf),Zf=t=>Object.getPrototypeOf(t)===Hf;function Ty(t,e,n,s=!1){const r={},i=Yf();t.propsDefaults=Object.create(null),Qf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:qb(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Oy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ya(t.emitsOptions,d))continue;const h=e[d];if(c)if(xe(i,d))h!==i[d]&&(i[d]=h,l=!0);else{const p=Zt(d);r[p]=Tc(c,a,p,h,t,!1)}else h!==i[d]&&(i[d]=h,l=!0)}}}else{Qf(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!xe(e,f)&&((u=lr(f))===f||!xe(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Tc(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!xe(e,f))&&(delete i[f],l=!0)}l&&Jn(t.attrs,"set","")}function Qf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(hi(c))continue;const l=e[c];let u;r&&xe(r,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ya(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Ae(n),l=a||Ce;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Tc(r,c,f,l[f],t,!xe(l,f))}}return o}function Tc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=qi(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===lr(n))&&(s=!0))}return s}const ky=new WeakMap;function Xf(t,e,n=!1){const s=n?ky:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!be(t)){const u=f=>{c=!0;const[d,h]=Xf(f,e,!0);vt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Re(t)&&s.set(t,Nr),Nr;if(ge(i))for(let u=0;u<i.length;u++){const f=Zt(i[u]);Ll(f)&&(o[f]=Ce)}else if(i)for(const u in i){const f=Zt(u);if(Ll(f)){const d=i[u],h=o[f]=ge(d)||be(d)?{type:d}:vt({},d),p=h.type;let y=!1,S=!0;if(ge(p))for(let _=0;_<p.length;++_){const B=p[_],T=be(B)&&B.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(S=!1)}else y=be(p)&&p.name==="Boolean";h[0]=y,h[1]=S,(y||xe(h,"default"))&&a.push(f)}}const l=[o,a];return Re(t)&&s.set(t,l),l}function Ll(t){return t[0]!=="$"&&!hi(t)}const Jf=t=>t[0]==="_"||t==="$stable",Nu=t=>ge(t)?t.map(xn):[xn(t)],jy=(t,e,n)=>{if(e._n)return e;const s=ny((...r)=>Nu(e(...r)),n);return s._c=!1,s},eh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Jf(r))continue;const i=t[r];if(be(i))e[r]=jy(r,i,s);else if(i!=null){const o=Nu(i);e[r]=()=>o}}},th=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},nh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Cy=(t,e,n)=>{const s=t.slots=Yf();if(t.vnode.shapeFlag&32){const r=e._;r?(nh(s,e,n),n&&gf(s,"_",r,!0)):eh(e,s)}else e&&th(t,e)},Dy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:nh(r,e,n):(i=!e.$stable,eh(e,r)),o=e}else e&&(th(t,e),o={default:1});if(i)for(const a in r)!Jf(a)&&o[a]==null&&delete r[a]},Lt=Hy;function By(t){return Uy(t)}function Uy(t,e){const n=ha();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=On,insertStaticContent:p}=t,y=(b,m,N,z=null,U=null,P=null,Y=void 0,G=null,W=!!m.dynamicChildren)=>{if(b===m)return;b&&!ei(b,m)&&(z=pe(b),R(b,U,P,!0),b=null),m.patchFlag===-2&&(W=!1,m.dynamicChildren=null);const{type:$,ref:ae,shapeFlag:Q}=m;switch($){case ma:S(b,m,N,z);break;case sr:_(b,m,N,z);break;case Eo:b==null&&B(m,N,z,Y);break;case Nt:k(b,m,N,z,U,P,Y,G,W);break;default:Q&1?K(b,m,N,z,U,P,Y,G,W):Q&6?M(b,m,N,z,U,P,Y,G,W):(Q&64||Q&128)&&$.process(b,m,N,z,U,P,Y,G,W,Ie)}ae!=null&&U&&Fo(ae,b&&b.ref,P,m||b,!m)},S=(b,m,N,z)=>{if(b==null)s(m.el=a(m.children),N,z);else{const U=m.el=b.el;m.children!==b.children&&l(U,m.children)}},_=(b,m,N,z)=>{b==null?s(m.el=c(m.children||""),N,z):m.el=b.el},B=(b,m,N,z)=>{[b.el,b.anchor]=p(b.children,m,N,z,b.el,b.anchor)},T=({el:b,anchor:m},N,z)=>{let U;for(;b&&b!==m;)U=d(b),s(b,N,z),b=U;s(m,N,z)},j=({el:b,anchor:m})=>{let N;for(;b&&b!==m;)N=d(b),r(b),b=N;r(m)},K=(b,m,N,z,U,P,Y,G,W)=>{m.type==="svg"?Y="svg":m.type==="math"&&(Y="mathml"),b==null?F(m,N,z,U,P,Y,G,W):V(b,m,U,P,Y,G,W)},F=(b,m,N,z,U,P,Y,G)=>{let W,$;const{props:ae,shapeFlag:Q,transition:ie,dirs:fe}=b;if(W=b.el=o(b.type,P,ae&&ae.is,ae),Q&8?u(W,b.children):Q&16&&re(b.children,W,null,z,U,Ra(b,P),Y,G),fe&&Ls(b,null,z,"created"),se(W,b,b.scopeId,Y,z),ae){for(const Oe in ae)Oe!=="value"&&!hi(Oe)&&i(W,Oe,null,ae[Oe],P,z);"value"in ae&&i(W,"value",null,ae.value,P),($=ae.onVnodeBeforeMount)&&yn($,z,b)}fe&&Ls(b,null,z,"beforeMount");const ve=Ly(U,ie);ve&&ie.beforeEnter(W),s(W,m,N),(($=ae&&ae.onVnodeMounted)||ve||fe)&&Lt(()=>{$&&yn($,z,b),ve&&ie.enter(W),fe&&Ls(b,null,z,"mounted")},U)},se=(b,m,N,z,U)=>{if(N&&h(b,N),z)for(let P=0;P<z.length;P++)h(b,z[P]);if(U){let P=U.subTree;if(m===P||ch(P.type)&&(P.ssContent===m||P.ssFallback===m)){const Y=U.vnode;se(b,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},re=(b,m,N,z,U,P,Y,G,W=0)=>{for(let $=W;$<b.length;$++){const ae=b[$]=G?ms(b[$]):xn(b[$]);y(null,ae,m,N,z,U,P,Y,G)}},V=(b,m,N,z,U,P,Y)=>{const G=m.el=b.el;let{patchFlag:W,dynamicChildren:$,dirs:ae}=m;W|=b.patchFlag&16;const Q=b.props||Ce,ie=m.props||Ce;let fe;if(N&&zs(N,!1),(fe=ie.onVnodeBeforeUpdate)&&yn(fe,N,m,b),ae&&Ls(m,b,N,"beforeUpdate"),N&&zs(N,!0),(Q.innerHTML&&ie.innerHTML==null||Q.textContent&&ie.textContent==null)&&u(G,""),$?O(b.dynamicChildren,$,G,N,z,Ra(m,U),P):Y||x(b,m,G,null,N,z,Ra(m,U),P,!1),W>0){if(W&16)A(G,Q,ie,N,U);else if(W&2&&Q.class!==ie.class&&i(G,"class",null,ie.class,U),W&4&&i(G,"style",Q.style,ie.style,U),W&8){const ve=m.dynamicProps;for(let Oe=0;Oe<ve.length;Oe++){const _e=ve[Oe],Dt=Q[_e],St=ie[_e];(St!==Dt||_e==="value")&&i(G,_e,Dt,St,U,N)}}W&1&&b.children!==m.children&&u(G,m.children)}else!Y&&$==null&&A(G,Q,ie,N,U);((fe=ie.onVnodeUpdated)||ae)&&Lt(()=>{fe&&yn(fe,N,m,b),ae&&Ls(m,b,N,"updated")},z)},O=(b,m,N,z,U,P,Y)=>{for(let G=0;G<m.length;G++){const W=b[G],$=m[G],ae=W.el&&(W.type===Nt||!ei(W,$)||W.shapeFlag&70)?f(W.el):N;y(W,$,ae,null,z,U,P,Y,!0)}},A=(b,m,N,z,U)=>{if(m!==N){if(m!==Ce)for(const P in m)!hi(P)&&!(P in N)&&i(b,P,m[P],null,U,z);for(const P in N){if(hi(P))continue;const Y=N[P],G=m[P];Y!==G&&P!=="value"&&i(b,P,G,Y,U,z)}"value"in N&&i(b,"value",m.value,N.value,U)}},k=(b,m,N,z,U,P,Y,G,W)=>{const $=m.el=b?b.el:a(""),ae=m.anchor=b?b.anchor:a("");let{patchFlag:Q,dynamicChildren:ie,slotScopeIds:fe}=m;fe&&(G=G?G.concat(fe):fe),b==null?(s($,N,z),s(ae,N,z),re(m.children||[],N,ae,U,P,Y,G,W)):Q>0&&Q&64&&ie&&b.dynamicChildren?(O(b.dynamicChildren,ie,N,U,P,Y,G),(m.key!=null||U&&m===U.subTree)&&sh(b,m,!0)):x(b,m,N,ae,U,P,Y,G,W)},M=(b,m,N,z,U,P,Y,G,W)=>{m.slotScopeIds=G,b==null?m.shapeFlag&512?U.ctx.activate(m,N,z,Y,W):I(m,N,z,U,P,Y,W):E(b,m,W)},I=(b,m,N,z,U,P,Y)=>{const G=b.component=n0(b,z,U);if(Vf(b)&&(G.ctx.renderer=Ie),s0(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,v,Y),!b.el){const W=G.subTree=mt(sr);_(null,W,m,N)}}else v(G,b,m,N,U,P,Y)},E=(b,m,N)=>{const z=m.component=b.component;if(Wy(b,m,N))if(z.asyncDep&&!z.asyncResolved){w(z,m,N);return}else z.next=m,z.update();else m.el=b.el,z.vnode=m},v=(b,m,N,z,U,P,Y)=>{const G=()=>{if(b.isMounted){let{next:Q,bu:ie,u:fe,parent:ve,vnode:Oe}=b;{const gn=rh(b);if(gn){Q&&(Q.el=Oe.el,w(b,Q,Y)),gn.asyncDep.then(()=>{b.isUnmounted||G()});return}}let _e=Q,Dt;zs(b,!1),Q?(Q.el=Oe.el,w(b,Q,Y)):Q=Oe,ie&&Ba(ie),(Dt=Q.props&&Q.props.onVnodeBeforeUpdate)&&yn(Dt,ve,Q,Oe),zs(b,!0);const St=Pl(b),pn=b.subTree;b.subTree=St,y(pn,St,f(pn.el),pe(pn),b,U,P),Q.el=St.el,_e===null&&Gy(b,St.el),fe&&Lt(fe,U),(Dt=Q.props&&Q.props.onVnodeUpdated)&&Lt(()=>yn(Dt,ve,Q,Oe),U)}else{let Q;const{el:ie,props:fe}=m,{bm:ve,m:Oe,parent:_e,root:Dt,type:St}=b,pn=bi(m);zs(b,!1),ve&&Ba(ve),!pn&&(Q=fe&&fe.onVnodeBeforeMount)&&yn(Q,_e,m),zs(b,!0);{Dt.ce&&Dt.ce._injectChildStyle(St);const gn=b.subTree=Pl(b);y(null,gn,N,z,b,U,P),m.el=gn.el}if(Oe&&Lt(Oe,U),!pn&&(Q=fe&&fe.onVnodeMounted)){const gn=m;Lt(()=>yn(Q,_e,gn),U)}(m.shapeFlag&256||_e&&bi(_e.vnode)&&_e.vnode.shapeFlag&256)&&b.a&&Lt(b.a,U),b.isMounted=!0,m=N=z=null}};b.scope.on();const W=b.effect=new wf(G);b.scope.off();const $=b.update=W.run.bind(W),ae=b.job=W.runIfDirty.bind(W);ae.i=b,ae.id=b.uid,W.scheduler=()=>_u(ae),zs(b,!0),$()},w=(b,m,N)=>{m.component=b;const z=b.vnode.props;b.vnode=m,b.next=null,Oy(b,m.props,z,N),Dy(b,m.children,N),Bs(),kl(b),Us()},x=(b,m,N,z,U,P,Y,G,W=!1)=>{const $=b&&b.children,ae=b?b.shapeFlag:0,Q=m.children,{patchFlag:ie,shapeFlag:fe}=m;if(ie>0){if(ie&128){D($,Q,N,z,U,P,Y,G,W);return}else if(ie&256){C($,Q,N,z,U,P,Y,G,W);return}}fe&8?(ae&16&&ee($,U,P),Q!==$&&u(N,Q)):ae&16?fe&16?D($,Q,N,z,U,P,Y,G,W):ee($,U,P,!0):(ae&8&&u(N,""),fe&16&&re(Q,N,z,U,P,Y,G,W))},C=(b,m,N,z,U,P,Y,G,W)=>{b=b||Nr,m=m||Nr;const $=b.length,ae=m.length,Q=Math.min($,ae);let ie;for(ie=0;ie<Q;ie++){const fe=m[ie]=W?ms(m[ie]):xn(m[ie]);y(b[ie],fe,N,null,U,P,Y,G,W)}$>ae?ee(b,U,P,!0,!1,Q):re(m,N,z,U,P,Y,G,W,Q)},D=(b,m,N,z,U,P,Y,G,W)=>{let $=0;const ae=m.length;let Q=b.length-1,ie=ae-1;for(;$<=Q&&$<=ie;){const fe=b[$],ve=m[$]=W?ms(m[$]):xn(m[$]);if(ei(fe,ve))y(fe,ve,N,null,U,P,Y,G,W);else break;$++}for(;$<=Q&&$<=ie;){const fe=b[Q],ve=m[ie]=W?ms(m[ie]):xn(m[ie]);if(ei(fe,ve))y(fe,ve,N,null,U,P,Y,G,W);else break;Q--,ie--}if($>Q){if($<=ie){const fe=ie+1,ve=fe<ae?m[fe].el:z;for(;$<=ie;)y(null,m[$]=W?ms(m[$]):xn(m[$]),N,ve,U,P,Y,G,W),$++}}else if($>ie)for(;$<=Q;)R(b[$],U,P,!0),$++;else{const fe=$,ve=$,Oe=new Map;for($=ve;$<=ie;$++){const Bt=m[$]=W?ms(m[$]):xn(m[$]);Bt.key!=null&&Oe.set(Bt.key,$)}let _e,Dt=0;const St=ie-ve+1;let pn=!1,gn=0;const Xr=new Array(St);for($=0;$<St;$++)Xr[$]=0;for($=fe;$<=Q;$++){const Bt=b[$];if(Dt>=St){R(Bt,U,P,!0);continue}let bn;if(Bt.key!=null)bn=Oe.get(Bt.key);else for(_e=ve;_e<=ie;_e++)if(Xr[_e-ve]===0&&ei(Bt,m[_e])){bn=_e;break}bn===void 0?R(Bt,U,P,!0):(Xr[bn-ve]=$+1,bn>=gn?gn=bn:pn=!0,y(Bt,m[bn],N,null,U,P,Y,G,W),Dt++)}const Sl=pn?zy(Xr):Nr;for(_e=Sl.length-1,$=St-1;$>=0;$--){const Bt=ve+$,bn=m[Bt],Ml=Bt+1<ae?m[Bt+1].el:z;Xr[$]===0?y(null,bn,N,Ml,U,P,Y,G,W):pn&&(_e<0||$!==Sl[_e]?L(bn,N,Ml,2):_e--)}}},L=(b,m,N,z,U=null)=>{const{el:P,type:Y,transition:G,children:W,shapeFlag:$}=b;if($&6){L(b.component.subTree,m,N,z);return}if($&128){b.suspense.move(m,N,z);return}if($&64){Y.move(b,m,N,Ie);return}if(Y===Nt){s(P,m,N);for(let Q=0;Q<W.length;Q++)L(W[Q],m,N,z);s(b.anchor,m,N);return}if(Y===Eo){T(b,m,N);return}if(z!==2&&$&1&&G)if(z===0)G.beforeEnter(P),s(P,m,N),Lt(()=>G.enter(P),U);else{const{leave:Q,delayLeave:ie,afterLeave:fe}=G,ve=()=>s(P,m,N),Oe=()=>{Q(P,()=>{ve(),fe&&fe()})};ie?ie(P,ve,Oe):Oe()}else s(P,m,N)},R=(b,m,N,z=!1,U=!1)=>{const{type:P,props:Y,ref:G,children:W,dynamicChildren:$,shapeFlag:ae,patchFlag:Q,dirs:ie,cacheIndex:fe}=b;if(Q===-2&&(U=!1),G!=null&&Fo(G,null,N,b,!0),fe!=null&&(m.renderCache[fe]=void 0),ae&256){m.ctx.deactivate(b);return}const ve=ae&1&&ie,Oe=!bi(b);let _e;if(Oe&&(_e=Y&&Y.onVnodeBeforeUnmount)&&yn(_e,m,b),ae&6)ue(b.component,N,z);else{if(ae&128){b.suspense.unmount(N,z);return}ve&&Ls(b,null,m,"beforeUnmount"),ae&64?b.type.remove(b,m,N,Ie,z):$&&!$.hasOnce&&(P!==Nt||Q>0&&Q&64)?ee($,m,N,!1,!0):(P===Nt&&Q&384||!U&&ae&16)&&ee(W,m,N),z&&ce(b)}(Oe&&(_e=Y&&Y.onVnodeUnmounted)||ve)&&Lt(()=>{_e&&yn(_e,m,b),ve&&Ls(b,null,m,"unmounted")},N)},ce=b=>{const{type:m,el:N,anchor:z,transition:U}=b;if(m===Nt){te(N,z);return}if(m===Eo){j(b);return}const P=()=>{r(N),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,W=()=>Y(N,P);G?G(b.el,P,W):W()}else P()},te=(b,m)=>{let N;for(;b!==m;)N=d(b),r(b),b=N;r(m)},ue=(b,m,N)=>{const{bum:z,scope:U,job:P,subTree:Y,um:G,m:W,a:$}=b;zl(W),zl($),z&&Ba(z),U.stop(),P&&(P.flags|=8,R(Y,b,m,N)),G&&Lt(G,m),Lt(()=>{b.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ee=(b,m,N,z=!1,U=!1,P=0)=>{for(let Y=P;Y<b.length;Y++)R(b[Y],m,N,z,U)},pe=b=>{if(b.shapeFlag&6)return pe(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const m=d(b.anchor||b.el),N=m&&m[sy];return N?d(N):m};let Me=!1;const we=(b,m,N)=>{b==null?m._vnode&&R(m._vnode,null,null,!0):y(m._vnode||null,b,m,null,null,null,N),m._vnode=b,Me||(Me=!0,kl(),zf(),Me=!1)},Ie={p:y,um:R,m:L,r:ce,mt:I,mc:re,pc:x,pbc:O,n:pe,o:t};return{render:we,hydrate:void 0,createApp:Ay(we)}}function Ra({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ly(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function sh(t,e,n=!1){const s=t.children,r=e.children;if(ge(s)&&ge(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ms(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&sh(o,a)),a.type===ma&&(a.el=o.el)}}function zy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function rh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rh(e)}function zl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Py=Symbol.for("v-scx"),$y=()=>Mo(Py);function Va(t,e,n){return ih(t,e,n)}function ih(t,e,n=Ce){const{immediate:s,deep:r,flush:i,once:o}=n,a=vt({},n),c=e&&s||!e&&i!=="post";let l;if(ji){if(i==="sync"){const h=$y();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=On,h.resume=On,h.pause=On,h}}const u=ft;a.call=(h,p,y)=>Cn(h,u,p,y);let f=!1;i==="post"?a.scheduler=h=>{Lt(h,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(h,p)=>{p?h():_u(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Qb(t,e,a);return ji&&(l?l.push(d):c&&d()),d}function Ry(t,e,n){const s=this.proxy,r=Ye(t)?t.includes(".")?oh(s,t):()=>s[t]:t.bind(s,s);let i;be(e)?i=e:(i=e.handler,n=e);const o=qi(this),a=ih(r,i.bind(s),n);return o(),a}function oh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Vy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${lr(e)}Modifiers`];function Fy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let r=n;const i=e.startsWith("update:"),o=i&&Vy(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ye(u)?u.trim():u)),o.number&&(r=n.map(yb)));let a,c=s[a=Da(e)]||s[a=Da(Zt(e))];!c&&i&&(c=s[a=Da(lr(e))]),c&&Cn(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Cn(l,t,6,r)}}function ah(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!be(t)){const c=l=>{const u=ah(l,e,!0);u&&(a=!0,vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&s.set(t,null),null):(ge(i)?i.forEach(c=>o[c]=null):vt(o,i),Re(t)&&s.set(t,o),o)}function ya(t,e){return!t||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,lr(e))||xe(t,e))}function Pl(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:h,ctx:p,inheritAttrs:y}=t,S=Vo(t);let _,B;try{if(n.shapeFlag&4){const j=r||s,K=j;_=xn(l.call(K,j,u,f,h,d,p)),B=a}else{const j=e;_=xn(j.length>1?j(f,{attrs:a,slots:o,emit:c}):j(f,null)),B=e.props?a:qy(a)}}catch(j){mi.length=0,ga(j,t,1),_=mt(sr)}let T=_;if(B&&y!==!1){const j=Object.keys(B),{shapeFlag:K}=T;j.length&&K&7&&(i&&j.some(gu)&&(B=Ky(B,i)),T=Lr(T,B,!1,!0))}return n.dirs&&(T=Lr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Au(T,n.transition),_=T,Vo(S),_}const qy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},Ky=(t,e)=>{const n={};for(const s in t)(!gu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Wy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$l(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!ya(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?$l(s,o,l):!0:!!o;return!1}function $l(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ya(n,i))return!0}return!1}function Gy({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ch=t=>t.__isSuspense;function Hy(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):ty(t)}const Nt=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),mi=[];let Rt=null;function De(t=!1){mi.push(Rt=t?null:[])}function Yy(){mi.pop(),Rt=mi[mi.length-1]||null}let ki=1;function Rl(t,e=!1){ki+=t,t<0&&Rt&&e&&(Rt.hasOnce=!0)}function uh(t){return t.dynamicChildren=ki>0?Rt||Nr:null,Yy(),ki>0&&Rt&&Rt.push(t),t}function ze(t,e,n,s,r,i){return uh(J(t,e,n,s,r,i,!0))}function lh(t,e,n,s,r){return uh(mt(t,e,n,s,r,!0))}function dh(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const fh=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||yt(t)||be(t)?{i:ln,r:t,k:e,f:!!n}:t:null);function J(t,e=null,n=null,s=0,r=null,i=t===Nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fh(e),ref:e&&Io(e),scopeId:$f,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return a?(Tu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),ki>0&&!o&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const mt=Zy;function Zy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===my)&&(t=sr),dh(t)){const a=Lr(t,e,!0);return n&&Tu(a,n),ki>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag=-2,a}if(c0(t)&&(t=t.__vccOpts),e){e=Qy(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=_i(a)),Re(c)&&(xu(c)&&!ge(c)&&(c=vt({},c)),e.style=mu(c))}const o=Ye(t)?1:ch(t)?128:ry(t)?64:Re(t)?4:be(t)?2:0;return J(t,e,n,s,r,o,i,!0)}function Qy(t){return t?xu(t)||Zf(t)?vt({},t):t:null}function Lr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Jy(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&fh(l),ref:e&&e.ref?n&&i?ge(i)?i.concat(Io(e)):[i,Io(e)]:Io(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lr(t.ssContent),ssFallback:t.ssFallback&&Lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Au(u,c.clone(u)),u}function vr(t=" ",e=0){return mt(ma,null,t,e)}function Xy(t,e){const n=mt(Eo,null,t);return n.staticCount=e,n}function _t(t="",e=!1){return e?(De(),lh(sr,null,t)):mt(sr,null,t)}function xn(t){return t==null||typeof t=="boolean"?mt(sr):ge(t)?mt(Nt,null,t.slice()):dh(t)?ms(t):mt(ma,null,String(t))}function ms(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lr(t)}function Tu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Tu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Zf(e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else be(e)?(e={default:e,_ctx:ln},n=32):(e=String(e),s&64?(n=16,e=[vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=_i([e.class,s.class]));else if(r==="style")e.style=mu([e.style,s.style]);else if(ua(r)){const i=e[r],o=s[r];o&&i!==o&&!(ge(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function yn(t,e,n,s=null){Cn(t,e,7,[n,s])}const e0=Gf();let t0=0;function n0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||e0,i={uid:t0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ib(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(s,r),emitsOptions:ah(s,r),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fy.bind(null,i),t.ce&&t.ce(i),i}let ft=null,Ko,Oc;{const t=ha(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ko=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Oc=e("__VUE_SSR_SETTERS__",n=>ji=n)}const qi=t=>{const e=ft;return Ko(t),t.scope.on(),()=>{t.scope.off(),Ko(e)}},Vl=()=>{ft&&ft.scope.off(),Ko(null)};function hh(t){return t.vnode.shapeFlag&4}let ji=!1;function s0(t,e=!1,n=!1){e&&Oc(e);const{props:s,children:r}=t.vnode,i=hh(t);Ty(t,s,i,e),Cy(t,r,n);const o=i?r0(t,e):void 0;return e&&Oc(!1),o}function r0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vy);const{setup:s}=n;if(s){Bs();const r=t.setupContext=s.length>1?o0(t):null,i=qi(t),o=Fi(s,t,0,[t.props,r]),a=ff(o);if(Us(),i(),(a||t.sp)&&!bi(t)&&Rf(t),a){if(o.then(Vl,Vl),e)return o.then(c=>{Fl(t,c)}).catch(c=>{ga(c,t,0)});t.asyncDep=o}else Fl(t,o)}else ph(t)}function Fl(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Bf(e)),ph(t)}function ph(t,e,n){const s=t.type;t.render||(t.render=s.render||On);{const r=qi(t);Bs();try{Sy(t)}finally{Us(),r()}}}const i0={get(t,e){return lt(t,"get",""),t[e]}};function o0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,i0),slots:t.slots,emit:t.emit,expose:e}}function Ou(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bf(Kb(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}})):t.proxy}function a0(t,e=!0){return be(t)?t.displayName||t.name:t.name||e&&t.__name}function c0(t){return be(t)&&"__vccOpts"in t}const u0=(t,e)=>Yb(t,e,ji),l0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kc;const ql=typeof window<"u"&&window.trustedTypes;if(ql)try{kc=ql.createPolicy("vue",{createHTML:t=>t})}catch{}const gh=kc?t=>kc.createHTML(t):t=>t,d0="http://www.w3.org/2000/svg",f0="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Kl=Gn&&Gn.createElement("template"),h0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Gn.createElementNS(d0,t):e==="mathml"?Gn.createElementNS(f0,t):n?Gn.createElement(t,{is:n}):Gn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Kl.innerHTML=gh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Kl.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},p0=Symbol("_vtc");function g0(t,e,n){const s=t[p0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wl=Symbol("_vod"),b0=Symbol("_vsh"),y0=Symbol(""),m0=/(^|;)\s*display\s*:/;function w0(t,e,n){const s=t.style,r=Ye(n);let i=!1;if(n&&!r){if(e)if(Ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xo(s,a,"")}else for(const o in e)n[o]==null&&xo(s,o,"");for(const o in n)o==="display"&&(i=!0),xo(s,o,n[o])}else if(r){if(e!==n){const o=s[y0];o&&(n+=";"+o),s.cssText=n,i=m0.test(n)}}else e&&t.removeAttribute("style");Wl in t&&(t[Wl]=i?s.display:"",t[b0]&&(s.display="none"))}const Gl=/\s*!important$/;function xo(t,e,n){if(ge(n))n.forEach(s=>xo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=v0(t,e);Gl.test(n)?t.setProperty(lr(s),n.replace(Gl,""),"important"):t[s]=n}}const Hl=["Webkit","Moz","ms"],Fa={};function v0(t,e){const n=Fa[e];if(n)return n;let s=Zt(e);if(s!=="filter"&&s in t)return Fa[e]=s;s=fa(s);for(let r=0;r<Hl.length;r++){const i=Hl[r]+s;if(i in t)return Fa[e]=i}return e}const Yl="http://www.w3.org/1999/xlink";function Zl(t,e,n,s,r,i=Eb(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yl,e.slice(6,e.length)):t.setAttributeNS(Yl,e,n):n==null||i&&!bf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ds(n)?String(n):n)}function Ql(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?gh(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=bf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function S0(t,e,n,s){t.addEventListener(e,n,s)}function M0(t,e,n,s){t.removeEventListener(e,n,s)}const Xl=Symbol("_vei");function E0(t,e,n,s,r=null){const i=t[Xl]||(t[Xl]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=I0(e);if(s){const l=i[e]=A0(s,r);S0(t,a,l,c)}else o&&(M0(t,a,o,c),i[e]=void 0)}}const Jl=/(?:Once|Passive|Capture)$/;function I0(t){let e;if(Jl.test(t)){e={};let s;for(;s=t.match(Jl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lr(t.slice(2)),e]}let qa=0;const x0=Promise.resolve(),_0=()=>qa||(x0.then(()=>qa=0),qa=Date.now());function A0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Cn(N0(s,n.value),e,5,[s])};return n.value=t,n.attached=_0(),n}function N0(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ed=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,T0=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?g0(t,s,o):e==="style"?w0(t,n,s):ua(e)?gu(e)||E0(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O0(t,e,s,o))?(Ql(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zl(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(s))?Ql(t,Zt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Zl(t,e,s,o))};function O0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ed(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ed(e)&&Ye(n)?!1:e in t}const k0=vt({patchProp:T0},h0);let td;function j0(){return td||(td=By(k0))}const C0=(...t)=>{const e=j0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=B0(s);if(!r)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,D0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function D0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function B0(t){return Ye(t)?document.querySelector(t):t}var Vi;class U0 extends Event{constructor(n,s){super(n,s);_l(this,Vi);Al(this,Vi,(s==null?void 0:s.detail)??null)}get detail(){return xl(this,Vi)}}Vi=new WeakMap;class Bn extends EventTarget{constructor(e={}){super(),this._debug=!!e.debug}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}emit(e,n,s=!1){try{n&&n.isSuiEvent&&!s?this.dispatchEvent(n):this.dispatchEvent(new U0(e,{detail:n}))}catch(r){console.error(r)}}}var L0={};class z0 extends Error{}const so=async t=>{try{return await import(t)}catch{throw new z0(`Unable to import module ${t}`)}},ti=async t=>{try{if(t=="execSync"||t=="spawn"){const{default:e}=await so("child_process");return e[t]}if(t=="fs"){const{default:e}=await so("fs");return e}if(t=="path"){const{default:e}=await so("path");return e}if(t=="net"){const{default:e}=await so("net");return e}}catch{return null}};class Ka{static async isPortThere(e){const n=await ti("net");if(!n)return!1;const s=n.Socket,r=new s;let i=null;const o=new Promise(c=>{i=c});setTimeout(()=>{r.destroy(),i(!1)},3e3),r.on("connect",()=>{i(!0)}),r.on("error",()=>{i(!1)}),r.on("timeout",()=>{i(!1)}),r.connect(e,"0.0.0.0");const a=await o;return r.destroy(),a}static async spawn(e,n=[],s={}){const r=await ti("spawn");if(!r)throw new Error("can not spawn a proccess in this env");return await new Promise((i,o)=>{let a=!0,c=null;const l=r(e,n,{env:{...L0,...s}});l.on("error",function(u){a=!1,c=u}),setTimeout(()=>{a?i(l):o(c)},100)})}static async exec(e){const n=await ti("execSync");if(!n)throw new Error("can not exec a proccess in this env");return n(e,{encoding:"utf-8"})}static async getModulesNamesFromPackagePath(e){const n=await ti("path"),s=await ti("fs");if(!n||!s)throw new Error("can not access path in this env");try{const i=(await s.promises.readdir(e.join(this._path,"build")))[0];return(await s.promises.readdir(n.join(this._path,"build",i,"bytecode_modules"),{withFileTypes:!0})).filter(c=>c.isFile()).map(c=>c.name.split(".mv").join(""))}catch{throw new Error("can not get modules names from local package path")}}}class ku extends Event{constructor(e={}){const n=e.data?(""+e.data.type).split("<")[0].split("::").pop():null;if(super(n,{}),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._data=e.data||{},this.detail=this}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}get isSuiEvent(){return!0}get typeName(){return this._data?(""+this._data.type).split("<")[0].split("::").pop():null}get type(){return this._data?""+this._data.type:null}get data(){return this._data}get parsedJson(){return this._data.parsedJson?this._data.parsedJson:null}get timestampMs(){return this._data.timestampMs?parseInt(this._data.timestampMs,10):null}}class bh extends Bn{constructor(e={}){if(super(e),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried");this._data=e.data||{},this._results=null,this._events=null}get executedEpoch(){return this._data&&this._data.effects&&this._data.effects.executedEpoch?BigInt(this._data.effects.executedEpoch):null}get digest(){return this._data?this._data.digest:null}get gasUsed(){try{if(this._data&&this._data.effects&&this._data.effects.gasUsed)return BigInt(this._data.effects.gasUsed.computationCost)+BigInt(this._data.effects.gasUsed.storageCost)-BigInt(this._data.effects.gasUsed.storageRebate)}catch{return null}return null}get deleted(){return this.results.deleted}get mutated(){return this.results.mutated}get created(){return this.results.created}get data(){return this._data}get status(){let e=null;return this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&(e=this.data.effects.status.status),e}isSuccessful(){return!!(this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&this.data.effects.status.status=="success")}get events(){if(this._events)return this._events;const e=[];if(this.data.events&&this.data.events.length)for(const n of this.data.events){const s=new this._suiMaster.SuiEvent({suiMaster:this._suiMaster,debug:this._debug,data:n});e.push(s)}return this._events=e,this._events}get results(){if(this._results)return this._results;const e={},n=[],s=[],r=[];if(this.data.objectChanges){for(const i of this.data.objectChanges)if(i.objectId&&!e[i.objectId]){const o=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i});o.address&&(e[o.address]=o)}}if(this.data.effects){const i=["created","mutated"];for(const o of i)if(this.data.effects[o]&&this.data.effects[o].length)for(const a of this.data.effects[o])a.reference&&a.reference.objectId&&e[a.reference.objectId]&&(o==="created"?n.push(e[a.reference.objectId]):o==="mutated"&&s.push(e[a.reference.objectId]));if(this.data.effects.deleted){for(const o of this.data.effects.deleted)if(o.objectId){if(!e[o.objectId]){const a=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:o});e[o.objectId]=a}e[o.objectId].markAsDeleted(),r.push(e[o.objectId])}}}return this._results={created:n,mutated:s,deleted:r,objects:Object.values(e),status:this.status},this._results}get timestampMs(){return this.data.timestampMs?parseInt(""+this.data.timestampMs,10):null}}class As extends Bn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPaginatedResponse");this._method=e.method,this._params=e.params,this._order=e.order||"descending",this._hasNextPage=!0,this._nextCursor=null,this._data=[]}async forEach(e,n=null){let s=0;do for(const r of this._data)(!n||s<n)&&await e(r),s++;while((!n||s<n)&&await this.nextPage())}get hasNextPage(){return this._hasNextPage}get data(){return this._data}async nextPage(){return this._hasNextPage?await this.fetch({cursor:this._nextCursor}):!1}async fetch(e={}){const n=Object.assign({},this._params);e.cursor&&(n.cursor=e.cursor),n.order=this._order;const s=await this._suiMaster.client[this._method](n);let r=0;return s.data&&s.data.length&&(r=s.data.length),s.hasNextPage?(this._hasNextPage=!0,this._nextCursor=s.nextCursor):(this._hasNextPage=!1,this._nextCursor=null),this.log("got",r,"items. Has next page: ",s.hasNextPage),this._method==="queryEvents"?this._data=s.data.map(i=>new ku({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="queryTransactionBlocks"?this._data=s.data.map(i=>new bh({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="getOwnedObjects"?this._data=s.data.map(i=>new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i})):this._data=s.data,this._data}}/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ci(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function yh(t,e){return Array.isArray(e)?e.length===0?!0:t?e.every(n=>typeof n=="string"):e.every(n=>Number.isSafeInteger(n)):!1}function mh(t){if(typeof t!="function")throw new Error("function expected");return!0}function zr(t,e){if(typeof e!="string")throw new Error(`${t}: string expected`);return!0}function Hr(t){if(!Number.isSafeInteger(t))throw new Error(`invalid integer: ${t}`)}function Wo(t){if(!Array.isArray(t))throw new Error("array expected")}function Go(t,e){if(!yh(!0,e))throw new Error(`${t}: array of strings expected`)}function ju(t,e){if(!yh(!1,e))throw new Error(`${t}: array of numbers expected`)}function wa(...t){const e=i=>i,n=(i,o)=>a=>i(o(a)),s=t.map(i=>i.encode).reduceRight(n,e),r=t.map(i=>i.decode).reduce(n,e);return{encode:s,decode:r}}function Cu(t){const e=typeof t=="string"?t.split(""):t,n=e.length;Go("alphabet",e);const s=new Map(e.map((r,i)=>[r,i]));return{encode:r=>(Wo(r),r.map(i=>{if(!Number.isSafeInteger(i)||i<0||i>=n)throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${t}`);return e[i]})),decode:r=>(Wo(r),r.map(i=>{zr("alphabet.decode",i);const o=s.get(i);if(o===void 0)throw new Error(`Unknown letter: "${i}". Allowed: ${t}`);return o}))}}function Du(t=""){return zr("join",t),{encode:e=>(Go("join.decode",e),e.join(t)),decode:e=>(zr("join.decode",e),e.split(t))}}function P0(t,e="="){return Hr(t),zr("padding",e),{encode(n){for(Go("padding.encode",n);n.length*t%8;)n.push(e);return n},decode(n){Go("padding.decode",n);let s=n.length;if(s*t%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;s>0&&n[s-1]===e;s--)if((s-1)*t%8===0)throw new Error("padding: invalid, string has too much padding");return n.slice(0,s)}}}function jc(t,e,n){if(e<2)throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);if(Wo(t),!t.length)return[];let s=0;const r=[],i=Array.from(t,a=>{if(Hr(a),a<0||a>=e)throw new Error(`invalid integer: ${a}`);return a}),o=i.length;for(;;){let a=0,c=!0;for(let l=s;l<o;l++){const u=i[l],f=e*a,d=f+u;if(!Number.isSafeInteger(d)||f/e!==a||d-u!==f)throw new Error("convertRadix: carry overflow");const h=d/n;a=d%n;const p=Math.floor(h);if(i[l]=p,!Number.isSafeInteger(p)||p*n+a!==d)throw new Error("convertRadix: carry overflow");if(c)p?c=!1:s=l;else continue}if(r.push(a),c)break}for(let a=0;a<t.length-1&&t[a]===0;a++)r.push(0);return r.reverse()}const wh=(t,e)=>e===0?t:wh(e,t%e),Ho=(t,e)=>t+(e-wh(t,e)),_o=(()=>{let t=[];for(let e=0;e<40;e++)t.push(2**e);return t})();function Yo(t,e,n,s){if(Wo(t),e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ho(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Ho(e,n)}`);let r=0,i=0;const o=_o[e],a=_o[n]-1,c=[];for(const l of t){if(Hr(l),l>=o)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(r=r<<e|l,i+e>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);for(i+=e;i>=n;i-=n)c.push((r>>i-n&a)>>>0);const u=_o[i];if(u===void 0)throw new Error("invalid carry");r&=u-1}if(r=r<<n-i&a,!s&&i>=e)throw new Error("Excess padding");if(!s&&r>0)throw new Error(`Non-zero padding: ${r}`);return s&&i>0&&c.push(r>>>0),c}function vh(t){Hr(t);const e=2**8;return{encode:n=>{if(!Ci(n))throw new Error("radix.encode input should be Uint8Array");return jc(Array.from(n),e,t)},decode:n=>(ju("radix.decode",n),Uint8Array.from(jc(n,t,e)))}}function Sh(t,e=!1){if(Hr(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(Ho(8,t)>32||Ho(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!Ci(n))throw new Error("radix2.encode input should be Uint8Array");return Yo(Array.from(n),8,t,!e)},decode:n=>(ju("radix2.decode",n),Uint8Array.from(Yo(n,t,8,e)))}}function nd(t){return mh(t),function(...e){try{return t.apply(null,e)}catch{}}}function Mh(t,e){return Hr(t),mh(e),{encode(n){if(!Ci(n))throw new Error("checksum.encode: input should be Uint8Array");const s=e(n).slice(0,t),r=new Uint8Array(n.length+t);return r.set(n),r.set(s,n.length),r},decode(n){if(!Ci(n))throw new Error("checksum.decode: input should be Uint8Array");const s=n.slice(0,-t),r=n.slice(-t),i=e(s).slice(0,t);for(let o=0;o<t;o++)if(i[o]!==r[o])throw new Error("Invalid checksum");return s}}}const ro={alphabet:Cu,chain:wa,checksum:Mh,convertRadix:jc,convertRadix2:Yo,radix:vh,radix2:Sh,join:Du,padding:P0},$0=t=>wa(vh(58),Cu(t),Du("")),Bu=$0("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),R0=t=>wa(Mh(4,e=>t(t(e))),Bu),Cc=wa(Cu("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Du("")),sd=[996825010,642813549,513874426,1027748829,705979059];function ni(t){const e=t>>25;let n=(t&33554431)<<5;for(let s=0;s<sd.length;s++)(e>>s&1)===1&&(n^=sd[s]);return n}function rd(t,e,n=1){const s=t.length;let r=1;for(let i=0;i<s;i++){const o=t.charCodeAt(i);if(o<33||o>126)throw new Error(`Invalid prefix (${t})`);r=ni(r)^o>>5}r=ni(r);for(let i=0;i<s;i++)r=ni(r)^t.charCodeAt(i)&31;for(let i of e)r=ni(r)^i;for(let i=0;i<6;i++)r=ni(r);return r^=n,Cc.encode(Yo([r%_o[30]],30,5,!1))}function V0(t){const e=t==="bech32"?1:734539939,n=Sh(5),s=n.decode,r=n.encode,i=nd(s);function o(f,d,h=90){zr("bech32.encode prefix",f),Ci(d)&&(d=Array.from(d)),ju("bech32.encode",d);const p=f.length;if(p===0)throw new TypeError(`Invalid prefix length ${p}`);const y=p+7+d.length;if(h!==!1&&y>h)throw new TypeError(`Length ${y} exceeds limit ${h}`);const S=f.toLowerCase(),_=rd(S,d,e);return`${S}1${Cc.encode(d)}${_}`}function a(f,d=90){zr("bech32.decode input",f);const h=f.length;if(h<8||d!==!1&&h>d)throw new TypeError(`invalid string length: ${h} (${f}). Expected (8..${d})`);const p=f.toLowerCase();if(f!==p&&f!==f.toUpperCase())throw new Error("String must be lowercase or uppercase");const y=p.lastIndexOf("1");if(y===0||y===-1)throw new Error('Letter "1" must be present between prefix and data only');const S=p.slice(0,y),_=p.slice(y+1);if(_.length<6)throw new Error("Data must be at least 6 characters long");const B=Cc.decode(_).slice(0,-6),T=rd(S,B,e);if(!_.endsWith(T))throw new Error(`Invalid checksum in ${f}: expected "${T}"`);return{prefix:S,words:B}}const c=nd(a);function l(f){const{prefix:d,words:h}=a(f,!1);return{prefix:d,words:h,bytes:s(h)}}function u(f,d){return o(f,r(d))}return{encode:o,decode:a,encodeFromBytes:u,decodeToBytes:l,decodeUnsafe:c,fromWords:s,fromWordsUnsafe:i,toWords:r}}const Zo=V0("bech32"),va=t=>Bu.encode(t),Di=t=>Bu.decode(t);function Ee(t){return Uint8Array.from(atob(t),e=>e.charCodeAt(0))}const Wa=8192;function Te(t){if(t.length<Wa)return btoa(String.fromCharCode(...t));let e="";for(var n=0;n<t.length;n+=Wa){const s=t.slice(n,n+Wa);e+=String.fromCharCode(...s)}return btoa(e)}function Uu(t){var r;const e=t.startsWith("0x")?t.slice(2):t,n=e.length%2===0?e:`0${e}`,s=((r=n.match(/[0-9a-fA-F]{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))??[];if(s.length!==n.length/2)throw new Error(`Invalid hex string ${t}`);return Uint8Array.from(s)}function Ts(t){return t.reduce((e,n)=>e+n.toString(16).padStart(2,"0"),"")}function Ki(t,e){return Array.from({length:Math.ceil(t.length/e)},(n,s)=>t.slice(s*e,(s+1)*e))}class Eh{constructor(e,n){if(typeof e!="function")throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ${e}.`);this._batchLoadFn=e,this._maxBatchSize=W0(n),this._batchScheduleFn=G0(n),this._cacheKeyFn=H0(n),this._cacheMap=Y0(n),this._batch=null,this.name=Z0(n)}load(e){if(e==null)throw new TypeError(`The loader.load() function must be called with a value, but got: ${String(e)}.`);const n=q0(this),s=this._cacheMap;let r;if(s){r=this._cacheKeyFn(e);const o=s.get(r);if(o){const a=n.cacheHits||(n.cacheHits=[]);return new Promise(c=>{a.push(()=>{c(o)})})}}n.keys.push(e);const i=new Promise((o,a)=>{n.callbacks.push({resolve:o,reject:a})});return s&&s.set(r,i),i}loadMany(e){if(!Ih(e))throw new TypeError(`The loader.loadMany() function must be called with Array<key>, but got: ${e}.`);const n=[];for(let s=0;s<e.length;s++)n.push(this.load(e[s]).catch(r=>r));return Promise.all(n)}clear(e){const n=this._cacheMap;if(n){const s=this._cacheKeyFn(e);n.delete(s)}return this}clearAll(){const e=this._cacheMap;return e&&e.clear(),this}prime(e,n){const s=this._cacheMap;if(s){const r=this._cacheKeyFn(e);if(s.get(r)===void 0){let i;n instanceof Error?(i=Promise.reject(n),i.catch(()=>{})):i=Promise.resolve(n),s.set(r,i)}}return this}}const F0=typeof process=="object"&&typeof process.nextTick=="function"?function(t){Ga||(Ga=Promise.resolve()),Ga.then(()=>{process.nextTick(t)})}:typeof setImmediate=="function"?function(t){setImmediate(t)}:function(t){setTimeout(t)};let Ga;function q0(t){const e=t._batch;if(e!==null&&!e.hasDispatched&&e.keys.length<t._maxBatchSize)return e;const n={hasDispatched:!1,keys:[],callbacks:[]};return t._batch=n,t._batchScheduleFn(()=>{K0(t,n)}),n}function K0(t,e){if(e.hasDispatched=!0,e.keys.length===0){Dc(e);return}let n;try{n=t._batchLoadFn(e.keys)}catch(s){return Ha(t,e,new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ${String(s)}.`))}if(!n||typeof n.then!="function")return Ha(t,e,new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ${String(n)}.`));Promise.resolve(n).then(s=>{if(!Ih(s))throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ${String(s)}.`);if(s.length!==e.keys.length)throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
${String(e.keys)}

Values:
${String(s)}`);Dc(e);for(let r=0;r<e.callbacks.length;r++){const i=s[r];i instanceof Error?e.callbacks[r].reject(i):e.callbacks[r].resolve(i)}}).catch(s=>{Ha(t,e,s)})}function Ha(t,e,n){Dc(e);for(let s=0;s<e.keys.length;s++)t.clear(e.keys[s]),e.callbacks[s].reject(n)}function Dc(t){if(t.cacheHits)for(let e=0;e<t.cacheHits.length;e++)t.cacheHits[e]()}function W0(t){if(!(!t||t.batch!==!1))return 1;const n=t&&t.maxBatchSize;if(n===void 0)return 1/0;if(typeof n!="number"||n<1)throw new TypeError(`maxBatchSize must be a positive number: ${n}`);return n}function G0(t){const e=t&&t.batchScheduleFn;if(e===void 0)return F0;if(typeof e!="function")throw new TypeError(`batchScheduleFn must be a function: ${e}`);return e}function H0(t){const e=t&&t.cacheKeyFn;if(e===void 0)return n=>n;if(typeof e!="function")throw new TypeError(`cacheKeyFn must be a function: ${e}`);return e}function Y0(t){if(!(!t||t.cache!==!1))return null;const n=t&&t.cacheMap;if(n===void 0)return new Map;if(n!==null){const r=["get","set","delete","clear"].filter(i=>n&&typeof n[i]!="function");if(r.length!==0)throw new TypeError("Custom cacheMap missing methods: "+r.join(", "))}return n}function Z0(t){return t&&t.name?t.name:null}function Ih(t){return typeof t=="object"&&t!==null&&"length"in t&&typeof t.length=="number"&&(t.length===0||t.length>0&&Object.prototype.hasOwnProperty.call(t,t.length-1))}function Qo(t){let e=BigInt(t);const n=[];let s=0;if(e===0n)return[0];for(;e>0;)n[s]=Number(e&0x7fn),e>>=7n,e>0n&&(n[s]|=128),s+=1;return n}function Q0(t){let e=0n,n=0n,s=0;for(;;){if(s>=t.length)throw new Error("ULEB decode error: buffer overflow");const r=t[s];if(s+=1,e+=BigInt(r&127)<<n,!(r&128))break;n+=7n}if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error("ULEB decode error: value exceeds MAX_SAFE_INTEGER");return{value:Number(e),length:s}}class X0{constructor(e){this.bytePosition=0,this.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength)}shift(e){return this.bytePosition+=e,this}read8(){const e=this.dataView.getUint8(this.bytePosition);return this.shift(1),e}read16(){const e=this.dataView.getUint16(this.bytePosition,!0);return this.shift(2),e}read32(){const e=this.dataView.getUint32(this.bytePosition,!0);return this.shift(4),e}read64(){const e=this.read32(),s=this.read32().toString(16)+e.toString(16).padStart(8,"0");return BigInt("0x"+s).toString(10)}read128(){const e=BigInt(this.read64()),s=BigInt(this.read64()).toString(16)+e.toString(16).padStart(16,"0");return BigInt("0x"+s).toString(10)}read256(){const e=BigInt(this.read128()),s=BigInt(this.read128()).toString(16)+e.toString(16).padStart(32,"0");return BigInt("0x"+s).toString(10)}readBytes(e){const n=this.bytePosition+this.dataView.byteOffset,s=new Uint8Array(this.dataView.buffer,n,e);return this.shift(e),s}readULEB(){const e=this.bytePosition+this.dataView.byteOffset,n=new Uint8Array(this.dataView.buffer,e),{value:s,length:r}=Q0(n);return this.shift(r),s}readVec(e){const n=this.readULEB(),s=[];for(let r=0;r<n;r++)s.push(e(this,r,n));return s}}function J0(t,e){switch(e){case"base58":return va(t);case"base64":return Te(t);case"hex":return Ts(t);default:throw new Error("Unsupported encoding, supported values are: base64, hex")}}function xh(t,e=["<",">"]){const[n,s]=e,r=[];let i="",o=0;for(let a=0;a<t.length;a++){const c=t[a];if(c===n&&o++,c===s&&o--,o===0&&c===","){r.push(i.trim()),i="";continue}i+=c}return r.push(i.trim()),r}class em{constructor({initialSize:e=1024,maxSize:n=1/0,allocateSize:s=1024}={}){this.bytePosition=0,this.size=e,this.maxSize=n,this.allocateSize=s,this.dataView=new DataView(new ArrayBuffer(e))}ensureSizeOrGrow(e){const n=this.bytePosition+e;if(n>this.size){const s=Math.min(this.maxSize,Math.max(this.size+n,this.size+this.allocateSize));if(n>s)throw new Error(`Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${n}`);this.size=s;const r=new ArrayBuffer(this.size);new Uint8Array(r).set(new Uint8Array(this.dataView.buffer)),this.dataView=new DataView(r)}}shift(e){return this.bytePosition+=e,this}write8(e){return this.ensureSizeOrGrow(1),this.dataView.setUint8(this.bytePosition,Number(e)),this.shift(1)}writeBytes(e){this.ensureSizeOrGrow(e.length);for(let n=0;n<e.length;n++)this.dataView.setUint8(this.bytePosition+n,e[n]);return this.shift(e.length)}write16(e){return this.ensureSizeOrGrow(2),this.dataView.setUint16(this.bytePosition,Number(e),!0),this.shift(2)}write32(e){return this.ensureSizeOrGrow(4),this.dataView.setUint32(this.bytePosition,Number(e),!0),this.shift(4)}write64(e){return Ya(BigInt(e),8).forEach(n=>this.write8(n)),this}write128(e){return Ya(BigInt(e),16).forEach(n=>this.write8(n)),this}write256(e){return Ya(BigInt(e),32).forEach(n=>this.write8(n)),this}writeULEB(e){return Qo(e).forEach(n=>this.write8(n)),this}writeVec(e,n){return this.writeULEB(e.length),Array.from(e).forEach((s,r)=>n(this,s,r,e.length)),this}*[Symbol.iterator](){for(let e=0;e<this.bytePosition;e++)yield this.dataView.getUint8(e);return this.toBytes()}toBytes(){return new Uint8Array(this.dataView.buffer.slice(0,this.bytePosition))}toString(e){return J0(this.toBytes(),e)}}function Ya(t,e){const n=new Uint8Array(e);let s=0;for(;t>0;)n[s]=Number(t%BigInt(256)),t=t/BigInt(256),s+=1;return n}var _h=t=>{throw TypeError(t)},Ah=(t,e,n)=>e.has(t)||_h("Cannot "+n),rn=(t,e,n)=>(Ah(t,e,"read from private field"),n?n.call(t):e.get(t)),Xo=(t,e,n)=>e.has(t)?_h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Jo=(t,e,n,s)=>(Ah(t,e,"write to private field"),e.set(t,n),n),Sr,ai,Ao,ps;const tm=class Nh{constructor(e){Xo(this,Sr),Xo(this,ai),this.name=e.name,this.read=e.read,this.serializedSize=e.serializedSize??(()=>null),Jo(this,Sr,e.write),Jo(this,ai,e.serialize??((n,s)=>{const r=new em({initialSize:this.serializedSize(n)??void 0,...s});return rn(this,Sr).call(this,n,r),r.toBytes()})),this.validate=e.validate??(()=>{})}write(e,n){this.validate(e),rn(this,Sr).call(this,e,n)}serialize(e,n){return this.validate(e),new nm(this,rn(this,ai).call(this,e,n))}parse(e){const n=new X0(e);return this.read(n)}fromHex(e){return this.parse(Uu(e))}fromBase58(e){return this.parse(Di(e))}fromBase64(e){return this.parse(Ee(e))}transform({name:e,input:n,output:s,validate:r}){return new Nh({name:e??this.name,read:i=>s?s(this.read(i)):this.read(i),write:(i,o)=>rn(this,Sr).call(this,n?n(i):i,o),serializedSize:i=>this.serializedSize(n?n(i):i),serialize:(i,o)=>rn(this,ai).call(this,n?n(i):i,o),validate:i=>{r==null||r(i),this.validate(n?n(i):i)}})}};Sr=new WeakMap;ai=new WeakMap;let Un=tm;const Th=Symbol.for("@mysten/serialized-bcs");function Lu(t){return!!t&&typeof t=="object"&&t[Th]===!0}class nm{constructor(e,n){Xo(this,Ao),Xo(this,ps),Jo(this,Ao,e),Jo(this,ps,n)}get[Th](){return!0}toBytes(){return rn(this,ps)}toHex(){return Ts(rn(this,ps))}toBase64(){return Te(rn(this,ps))}toBase58(){return va(rn(this,ps))}parse(){return rn(this,Ao).parse(rn(this,ps))}}Ao=new WeakMap;ps=new WeakMap;function ea({size:t,...e}){return new Un({...e,serializedSize:()=>t})}function Za({readMethod:t,writeMethod:e,...n}){return ea({...n,read:s=>s[t](),write:(s,r)=>r[e](s),validate:s=>{var r;if(s<0||s>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${s}. Expected value in range 0-${n.maxValue}`);(r=n.validate)==null||r.call(n,s)}})}function Qa({readMethod:t,writeMethod:e,...n}){return ea({...n,read:s=>s[t](),write:(s,r)=>r[e](BigInt(s)),validate:s=>{var i;const r=BigInt(s);if(r<0||r>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${r}. Expected value in range 0-${n.maxValue}`);(i=n.validate)==null||i.call(n,r)}})}function sm({serialize:t,...e}){const n=new Un({...e,serialize:t,write:(s,r)=>{for(const i of n.serialize(s).toBytes())r.write8(i)}});return n}function rm({toBytes:t,fromBytes:e,...n}){return new Un({...n,read:s=>{const r=s.readULEB(),i=s.readBytes(r);return e(i)},write:(s,r)=>{const i=t(s);r.writeULEB(i.length);for(let o=0;o<i.length;o++)r.write8(i[o])},serialize:s=>{const r=t(s),i=Qo(r.length),o=new Uint8Array(i.length+r.length);return o.set(i,0),o.set(r,i.length),o},validate:s=>{var r;if(typeof s!="string")throw new TypeError(`Invalid ${n.name} value: ${s}. Expected string`);(r=n.validate)==null||r.call(n,s)}})}function im(t){let e=null;function n(){return e||(e=t()),e}return new Un({name:"lazy",read:s=>n().read(s),serializedSize:s=>n().serializedSize(s),write:(s,r)=>n().write(s,r),serialize:(s,r)=>n().serialize(s,r).toBytes()})}class om extends Un{constructor({name:e,fields:n,...s}){const r=Object.entries(n);super({name:e,serializedSize:i=>{let o=0;for(const[a,c]of r){const l=c.serializedSize(i[a]);if(l==null)return null;o+=l}return o},read:i=>{const o={};for(const[a,c]of r)o[a]=c.read(i);return o},write:(i,o)=>{for(const[a,c]of r)c.write(i[a],o)},...s,validate:i=>{var o;if((o=s==null?void 0:s.validate)==null||o.call(s,i),typeof i!="object"||i==null)throw new TypeError(`Expected object, found ${typeof i}`)}})}}class am extends Un{constructor({fields:e,...n}){const s=Object.entries(e);super({read:r=>{const i=r.readULEB(),o=s[i];if(!o)throw new TypeError(`Unknown value ${i} for enum ${n.name}`);const[a,c]=o;return{[a]:(c==null?void 0:c.read(r))??!0,$kind:a}},write:(r,i)=>{const[o,a]=Object.entries(r).filter(([c])=>Object.hasOwn(e,c))[0];for(let c=0;c<s.length;c++){const[l,u]=s[c];if(l===o){i.writeULEB(c),u==null||u.write(a,i);return}}},...n,validate:r=>{var a;if((a=n==null?void 0:n.validate)==null||a.call(n,r),typeof r!="object"||r==null)throw new TypeError(`Expected object, found ${typeof r}`);const i=Object.keys(r).filter(c=>r[c]!==void 0&&Object.hasOwn(e,c));if(i.length!==1)throw new TypeError(`Expected object with one key, but found ${i.length} for type ${n.name}}`);const[o]=i;if(!Object.hasOwn(e,o))throw new TypeError(`Invalid enum variant ${o}`)}})}}class cm extends Un{constructor({fields:e,name:n,...s}){super({name:n??`(${e.map(r=>r.name).join(", ")})`,serializedSize:r=>{let i=0;for(let o=0;o<e.length;o++){const a=e[o].serializedSize(r[o]);if(a==null)return null;i+=a}return i},read:r=>{const i=[];for(const o of e)i.push(o.read(r));return i},write:(r,i)=>{for(let o=0;o<e.length;o++)e[o].write(r[o],i)},...s,validate:r=>{var i;if((i=s==null?void 0:s.validate)==null||i.call(s,r),!Array.isArray(r))throw new TypeError(`Expected array, found ${typeof r}`);if(r.length!==e.length)throw new TypeError(`Expected array of length ${e.length}, found ${r.length}`)}})}}function um(t,e,n){return new Un({read:s=>{const r=new Array(t);for(let i=0;i<t;i++)r[i]=e.read(s);return r},write:(s,r)=>{for(const i of s)e.write(i,r)},...n,name:(n==null?void 0:n.name)??`${e.name}[${t}]`,validate:s=>{var r;if((r=n==null?void 0:n.validate)==null||r.call(n,s),!s||typeof s!="object"||!("length"in s))throw new TypeError(`Expected array, found ${typeof s}`);if(s.length!==t)throw new TypeError(`Expected array of length ${t}, found ${s.length}`)}})}function lm(t){return g.enum(`Option<${t.name}>`,{None:null,Some:t}).transform({input:e=>e==null?{None:!0}:{Some:e},output:e=>e.$kind==="Some"?e.Some:null})}function dm(t,e){return new Un({read:n=>{const s=n.readULEB(),r=new Array(s);for(let i=0;i<s;i++)r[i]=t.read(n);return r},write:(n,s)=>{s.writeULEB(n.length);for(const r of n)t.write(r,s)},...e,name:(e==null?void 0:e.name)??`vector<${t.name}>`,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`)}})}function fm(t,e){return g.vector(g.tuple([t,e])).transform({name:`Map<${t.name}, ${e.name}>`,input:n=>[...n.entries()],output:n=>{const s=new Map;for(const[r,i]of n)s.set(r,i);return s}})}const g={u8(t){return Za({readMethod:"read8",writeMethod:"write8",size:1,maxValue:2**8-1,...t,name:(t==null?void 0:t.name)??"u8"})},u16(t){return Za({readMethod:"read16",writeMethod:"write16",size:2,maxValue:2**16-1,...t,name:(t==null?void 0:t.name)??"u16"})},u32(t){return Za({readMethod:"read32",writeMethod:"write32",size:4,maxValue:2**32-1,...t,name:(t==null?void 0:t.name)??"u32"})},u64(t){return Qa({readMethod:"read64",writeMethod:"write64",size:8,maxValue:2n**64n-1n,...t,name:(t==null?void 0:t.name)??"u64"})},u128(t){return Qa({readMethod:"read128",writeMethod:"write128",size:16,maxValue:2n**128n-1n,...t,name:(t==null?void 0:t.name)??"u128"})},u256(t){return Qa({readMethod:"read256",writeMethod:"write256",size:32,maxValue:2n**256n-1n,...t,name:(t==null?void 0:t.name)??"u256"})},bool(t){return ea({size:1,read:e=>e.read8()===1,write:(e,n)=>n.write8(e?1:0),...t,name:(t==null?void 0:t.name)??"bool",validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),typeof e!="boolean")throw new TypeError(`Expected boolean, found ${typeof e}`)}})},uleb128(t){return sm({read:e=>e.readULEB(),serialize:e=>Uint8Array.from(Qo(e)),...t,name:(t==null?void 0:t.name)??"uleb128"})},bytes(t,e){return ea({size:t,read:n=>n.readBytes(t),write:(n,s)=>{s.writeBytes(new Uint8Array(n))},...e,name:(e==null?void 0:e.name)??`bytes[${t}]`,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`);if(n.length!==t)throw new TypeError(`Expected array of length ${t}, found ${n.length}`)}})},byteVector(t){return new Un({read:e=>{const n=e.readULEB();return e.readBytes(n)},write:(e,n)=>{const s=new Uint8Array(e);n.writeULEB(s.length),n.writeBytes(s)},...t,name:(t==null?void 0:t.name)??"vector<u8>",serializedSize:e=>{const n="length"in e?e.length:null;return n==null?null:Qo(n).length+n},validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),!e||typeof e!="object"||!("length"in e))throw new TypeError(`Expected array, found ${typeof e}`)}})},string(t){return rm({toBytes:e=>new TextEncoder().encode(e),fromBytes:e=>new TextDecoder().decode(e),...t,name:(t==null?void 0:t.name)??"string"})},fixedArray:um,option:lm,vector:dm,tuple(t,e){return new cm({fields:t,...e})},struct(t,e,n){return new om({name:t,fields:e,...n})},enum(t,e,n){return new am({name:t,fields:e,...n})},map:fm,lazy(t){return im(t)}},Oh=/^(?!.*(^(?!@)|[-.@])($|[-.@]))(?:[a-z0-9-]{0,63}(?:\.[a-z0-9-]{0,63})*)?@[a-z0-9-]{0,63}$/i,kh=/^(?!.*(^|[-.])($|[-.]))(?:[a-z0-9-]{0,63}\.)+sui$/i,hm=235;function pm(t){return t.length>hm?!1:t.includes("@")?Oh.test(t):kh.test(t)}function gm(t,e="at"){const n=t.toLowerCase();let s;if(n.includes("@")){if(!Oh.test(n))throw new Error(`Invalid SuiNS name ${t}`);const[r,i]=n.split("@");s=[...r?r.split("."):[],i]}else{if(!kh.test(n))throw new Error(`Invalid SuiNS name ${t}`);s=n.split(".").slice(0,-1)}return e==="dot"?`${s.join(".")}.sui`:`${s.slice(0,-1).join(".")}@${s[s.length-1]}`}const bm=/^([a-z0-9]+(?:-[a-z0-9]+)*)$/,ym=/^\d+$/,mm=64,jh="/",Pt=t=>{const e=t.split(jh);if(e.length<2||e.length>3)return!1;const[n,s,r]=e;return r!==void 0&&!ym.test(r)||!pm(n)?!1:bm.test(s)&&s.length<mm},wm=t=>{const e=t.split(/::|<|>|,/);for(const n of e)if(n.includes(jh)&&!Pt(n))return!1;return!0},vm=32;function id(t){try{return Di(t).length===vm}catch{return!1}}const Yr=32;function on(t){return Mm(t)&&Em(t)===Yr}function io(t){return on(t)}function Sm(t){return t.includes("::")?rr(t):t}function rr(t){const[e,n]=t.split("::"),s=Pt(e),r=t.slice(e.length+n.length+4),i=r.includes("<")?r.slice(0,r.indexOf("<")):r,o=r.includes("<")?xh(r.slice(r.indexOf("<")+1,r.lastIndexOf(">"))).map(a=>Sm(a.trim())):[];return{address:s?e:de(e),module:n,name:i,typeParams:o}}function Pr(t){const{address:e,module:n,name:s,typeParams:r}=typeof t=="string"?rr(t):t,i=(r==null?void 0:r.length)>0?`<${r.map(o=>typeof o=="string"?o:Pr(o)).join(",")}>`:"";return`${e}::${n}::${s}${i}`}function de(t,e=!1){let n=t.toLowerCase();return!e&&n.startsWith("0x")&&(n=n.slice(2)),`0x${n.padStart(Yr*2,"0")}`}function Nn(t,e=!1){return de(t,e)}function Mm(t){return/^(0x|0X)?[a-fA-F0-9]+$/.test(t)&&t.length%2===0}function Em(t){return/^(0x|0X)/.test(t)?(t.length-2)/2:t.length/2}const Im=/^vector<(.+)>$/,xm=/^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;class cn{static parseFromStr(e,n=!1){if(e==="address")return{address:null};if(e==="bool")return{bool:null};if(e==="u8")return{u8:null};if(e==="u16")return{u16:null};if(e==="u32")return{u32:null};if(e==="u64")return{u64:null};if(e==="u128")return{u128:null};if(e==="u256")return{u256:null};if(e==="signer")return{signer:null};const s=e.match(Im);if(s)return{vector:cn.parseFromStr(s[1],n)};const r=e.match(xm);if(r)return{struct:{address:n?de(r[1]):r[1],module:r[2],name:r[3],typeParams:r[5]===void 0?[]:cn.parseStructTypeArgs(r[5],n)}};throw new Error(`Encountered unexpected token when parsing type args for ${e}`)}static parseStructTypeArgs(e,n=!1){return xh(e).map(s=>cn.parseFromStr(s,n))}static tagToString(e){if("bool"in e)return"bool";if("u8"in e)return"u8";if("u16"in e)return"u16";if("u32"in e)return"u32";if("u64"in e)return"u64";if("u128"in e)return"u128";if("u256"in e)return"u256";if("address"in e)return"address";if("signer"in e)return"signer";if("vector"in e)return`vector<${cn.tagToString(e.vector)}>`;if("struct"in e){const n=e.struct,s=n.typeParams.map(cn.tagToString).join(", ");return`${n.address}::${n.module}::${n.name}${s?`<${s}>`:""}`}throw new Error("Invalid TypeTag")}}function _m(t){return g.u64({name:"unsafe_u64",...t}).transform({input:e=>e,output:e=>Number(e)})}function Am(t){return g.enum("Option",{None:null,Some:t})}const Be=g.bytes(Yr).transform({validate:t=>{const e=typeof t=="string"?t:Ts(t);if(!e||!on(de(e)))throw new Error(`Invalid Sui address ${e}`)},input:t=>typeof t=="string"?Uu(de(t)):t,output:t=>de(Ts(t))}),dn=g.byteVector().transform({name:"ObjectDigest",input:t=>Di(t),output:t=>va(new Uint8Array(t)),validate:t=>{if(Di(t).length!==32)throw new Error("ObjectDigest must be 32 bytes")}}),Kt=g.struct("SuiObjectRef",{objectId:Be,version:g.u64(),digest:dn}),Ch=g.struct("SharedObjectRef",{objectId:Be,initialSharedVersion:g.u64(),mutable:g.bool()}),Dh=g.enum("ObjectArg",{ImmOrOwnedObject:Kt,SharedObject:Ch,Receiving:Kt}),Fs=g.enum("Owner",{AddressOwner:Be,ObjectOwner:Be,Shared:g.struct("Shared",{initialSharedVersion:g.u64()}),Immutable:null,ConsensusAddressOwner:g.struct("ConsensusAddressOwner",{owner:Be,startVersion:g.u64()})}),Bh=g.enum("CallArg",{Pure:g.struct("Pure",{bytes:g.byteVector().transform({input:t=>typeof t=="string"?Ee(t):t,output:t=>Te(new Uint8Array(t))})}),Object:Dh}),zu=g.enum("TypeTag",{bool:null,u8:null,u64:null,u128:null,address:null,signer:null,vector:g.lazy(()=>zu),struct:g.lazy(()=>Rh),u16:null,u32:null,u256:null}),Pu=zu.transform({input:t=>typeof t=="string"?cn.parseFromStr(t,!0):t,output:t=>cn.tagToString(t)}),Mn=g.enum("Argument",{GasCoin:null,Input:g.u16(),Result:g.u16(),NestedResult:g.tuple([g.u16(),g.u16()])}),Uh=g.struct("ProgrammableMoveCall",{package:Be,module:g.string(),function:g.string(),typeArguments:g.vector(Pu),arguments:g.vector(Mn)}),Lh=g.enum("Command",{MoveCall:Uh,TransferObjects:g.struct("TransferObjects",{objects:g.vector(Mn),address:Mn}),SplitCoins:g.struct("SplitCoins",{coin:Mn,amounts:g.vector(Mn)}),MergeCoins:g.struct("MergeCoins",{destination:Mn,sources:g.vector(Mn)}),Publish:g.struct("Publish",{modules:g.vector(g.byteVector().transform({input:t=>typeof t=="string"?Ee(t):t,output:t=>Te(new Uint8Array(t))})),dependencies:g.vector(Be)}),MakeMoveVec:g.struct("MakeMoveVec",{type:Am(Pu).transform({input:t=>t===null?{None:!0}:{Some:t},output:t=>t.Some??null}),elements:g.vector(Mn)}),Upgrade:g.struct("Upgrade",{modules:g.vector(g.byteVector().transform({input:t=>typeof t=="string"?Ee(t):t,output:t=>Te(new Uint8Array(t))})),dependencies:g.vector(Be),package:Be,ticket:Mn})}),zh=g.struct("ProgrammableTransaction",{inputs:g.vector(Bh),commands:g.vector(Lh)}),Ph=g.enum("TransactionKind",{ProgrammableTransaction:zh,ChangeEpoch:null,Genesis:null,ConsensusCommitPrologue:null}),$h=g.enum("TransactionExpiration",{None:null,Epoch:_m()}),Rh=g.struct("StructTag",{address:Be,module:g.string(),name:g.string(),typeParams:g.vector(zu)}),Vh=g.struct("GasData",{payment:g.vector(Kt),owner:Be,price:g.u64(),budget:g.u64()}),Fh=g.struct("TransactionDataV1",{kind:Ph,sender:Be,gasData:Vh,expiration:$h}),qh=g.enum("TransactionData",{V1:Fh}),Kh=g.enum("IntentScope",{TransactionData:null,TransactionEffects:null,CheckpointSummary:null,PersonalMessage:null}),Wh=g.enum("IntentVersion",{V0:null}),Gh=g.enum("AppId",{Sui:null}),Hh=g.struct("Intent",{scope:Kh,version:Wh,appId:Gh});function Yh(t){return g.struct(`IntentMessage<${t.name}>`,{intent:Hh,value:t})}const Zh=g.enum("CompressedSignature",{ED25519:g.bytes(64),Secp256k1:g.bytes(64),Secp256r1:g.bytes(64),ZkLogin:g.byteVector(),Passkey:g.byteVector()}),Qh=g.enum("PublicKey",{ED25519:g.bytes(32),Secp256k1:g.bytes(33),Secp256r1:g.bytes(33),ZkLogin:g.byteVector(),Passkey:g.bytes(33)}),Xh=g.struct("MultiSigPkMap",{pubKey:Qh,weight:g.u8()}),Jh=g.struct("MultiSigPublicKey",{pk_map:g.vector(Xh),threshold:g.u16()}),Nm=g.struct("MultiSig",{sigs:g.vector(Zh),bitmap:g.u16(),multisig_pk:Jh}),Tm=g.byteVector().transform({input:t=>typeof t=="string"?Ee(t):t,output:t=>Te(new Uint8Array(t))}),ep=g.struct("SenderSignedTransaction",{intentMessage:Yh(qh),txSignatures:g.vector(Tm)}),Om=g.vector(ep,{name:"SenderSignedData"}),tp=g.struct("PasskeyAuthenticator",{authenticatorData:g.byteVector(),clientDataJson:g.string(),userSignature:g.byteVector()}),km=g.enum("PackageUpgradeError",{UnableToFetchPackage:g.struct("UnableToFetchPackage",{packageId:Be}),NotAPackage:g.struct("NotAPackage",{objectId:Be}),IncompatibleUpgrade:null,DigestDoesNotMatch:g.struct("DigestDoesNotMatch",{digest:g.byteVector()}),UnknownUpgradePolicy:g.struct("UnknownUpgradePolicy",{policy:g.u8()}),PackageIDDoesNotMatch:g.struct("PackageIDDoesNotMatch",{packageId:Be,ticketId:Be})}),jm=g.struct("ModuleId",{address:Be,name:g.string()}),od=g.struct("MoveLocation",{module:jm,function:g.u16(),instruction:g.u16(),functionName:g.option(g.string())}),Cm=g.enum("CommandArgumentError",{TypeMismatch:null,InvalidBCSBytes:null,InvalidUsageOfPureArg:null,InvalidArgumentToPrivateEntryFunction:null,IndexOutOfBounds:g.struct("IndexOutOfBounds",{idx:g.u16()}),SecondaryIndexOutOfBounds:g.struct("SecondaryIndexOutOfBounds",{resultIdx:g.u16(),secondaryIdx:g.u16()}),InvalidResultArity:g.struct("InvalidResultArity",{resultIdx:g.u16()}),InvalidGasCoinUsage:null,InvalidValueUsage:null,InvalidObjectByValue:null,InvalidObjectByMutRef:null,SharedObjectOperationNotAllowed:null}),Dm=g.enum("TypeArgumentError",{TypeNotFound:null,ConstraintNotSatisfied:null}),Bm=g.enum("ExecutionFailureStatus",{InsufficientGas:null,InvalidGasObject:null,InvariantViolation:null,FeatureNotYetSupported:null,MoveObjectTooBig:g.struct("MoveObjectTooBig",{objectSize:g.u64(),maxObjectSize:g.u64()}),MovePackageTooBig:g.struct("MovePackageTooBig",{objectSize:g.u64(),maxObjectSize:g.u64()}),CircularObjectOwnership:g.struct("CircularObjectOwnership",{object:Be}),InsufficientCoinBalance:null,CoinBalanceOverflow:null,PublishErrorNonZeroAddress:null,SuiMoveVerificationError:null,MovePrimitiveRuntimeError:g.option(od),MoveAbort:g.tuple([od,g.u64()]),VMVerificationOrDeserializationError:null,VMInvariantViolation:null,FunctionNotFound:null,ArityMismatch:null,TypeArityMismatch:null,NonEntryFunctionInvoked:null,CommandArgumentError:g.struct("CommandArgumentError",{argIdx:g.u16(),kind:Cm}),TypeArgumentError:g.struct("TypeArgumentError",{argumentIdx:g.u16(),kind:Dm}),UnusedValueWithoutDrop:g.struct("UnusedValueWithoutDrop",{resultIdx:g.u16(),secondaryIdx:g.u16()}),InvalidPublicFunctionReturnType:g.struct("InvalidPublicFunctionReturnType",{idx:g.u16()}),InvalidTransferObject:null,EffectsTooLarge:g.struct("EffectsTooLarge",{currentSize:g.u64(),maxSize:g.u64()}),PublishUpgradeMissingDependency:null,PublishUpgradeDependencyDowngrade:null,PackageUpgradeError:g.struct("PackageUpgradeError",{upgradeError:km}),WrittenObjectsTooLarge:g.struct("WrittenObjectsTooLarge",{currentSize:g.u64(),maxSize:g.u64()}),CertificateDenied:null,SuiMoveVerificationTimedout:null,SharedObjectOperationNotAllowed:null,InputObjectDeleted:null,ExecutionCancelledDueToSharedObjectCongestion:g.struct("ExecutionCancelledDueToSharedObjectCongestion",{congestedObjects:g.vector(Be)}),AddressDeniedForCoin:g.struct("AddressDeniedForCoin",{address:Be,coinType:g.string()}),CoinTypeGlobalPause:g.struct("CoinTypeGlobalPause",{coinType:g.string()}),ExecutionCancelledDueToRandomnessUnavailable:null}),np=g.enum("ExecutionStatus",{Success:null,Failed:g.struct("ExecutionFailed",{error:Bm,command:g.option(g.u64())})}),sp=g.struct("GasCostSummary",{computationCost:g.u64(),storageCost:g.u64(),storageRebate:g.u64(),nonRefundableStorageFee:g.u64()}),Um=g.struct("TransactionEffectsV1",{status:np,executedEpoch:g.u64(),gasUsed:sp,modifiedAtVersions:g.vector(g.tuple([Be,g.u64()])),sharedObjects:g.vector(Kt),transactionDigest:dn,created:g.vector(g.tuple([Kt,Fs])),mutated:g.vector(g.tuple([Kt,Fs])),unwrapped:g.vector(g.tuple([Kt,Fs])),deleted:g.vector(Kt),unwrappedThenDeleted:g.vector(Kt),wrapped:g.vector(Kt),gasObject:g.tuple([Kt,Fs]),eventsDigest:g.option(dn),dependencies:g.vector(dn)}),$u=g.tuple([g.u64(),dn]),Lm=g.enum("ObjectIn",{NotExist:null,Exist:g.tuple([$u,Fs])}),zm=g.enum("ObjectOut",{NotExist:null,ObjectWrite:g.tuple([dn,Fs]),PackageWrite:$u}),Pm=g.enum("IDOperation",{None:null,Created:null,Deleted:null}),$m=g.struct("EffectsObjectChange",{inputState:Lm,outputState:zm,idOperation:Pm}),Rm=g.enum("UnchangedSharedKind",{ReadOnlyRoot:$u,MutateDeleted:g.u64(),ReadDeleted:g.u64(),Cancelled:g.u64(),PerEpochConfig:null}),Vm=g.struct("TransactionEffectsV2",{status:np,executedEpoch:g.u64(),gasUsed:sp,transactionDigest:dn,gasObjectIndex:g.option(g.u32()),eventsDigest:g.option(dn),dependencies:g.vector(dn),lamportVersion:g.u64(),changedObjects:g.vector(g.tuple([Be,$m])),unchangedSharedObjects:g.vector(g.tuple([Be,Rm])),auxDataDigest:g.option(dn)}),Fm=g.enum("TransactionEffects",{V1:Um,V2:Vm});function wi(t){switch(t){case"u8":return g.u8();case"u16":return g.u16();case"u32":return g.u32();case"u64":return g.u64();case"u128":return g.u128();case"u256":return g.u256();case"bool":return g.bool();case"string":return g.string();case"id":case"address":return Be}const e=t.match(/^(vector|option)<(.+)>$/);if(e){const[n,s]=e.slice(1);return n==="vector"?g.vector(wi(s)):g.option(wi(s))}throw new Error(`Invalid Pure type name: ${t}`)}const oe={...g,U8:g.u8(),U16:g.u16(),U32:g.u32(),U64:g.u64(),U128:g.u128(),U256:g.u256(),ULEB128:g.uleb128(),Bool:g.bool(),String:g.string(),Address:Be,AppId:Gh,Argument:Mn,CallArg:Bh,Command:Lh,CompressedSignature:Zh,GasData:Vh,Intent:Hh,IntentMessage:Yh,IntentScope:Kh,IntentVersion:Wh,MultiSig:Nm,MultiSigPkMap:Xh,MultiSigPublicKey:Jh,ObjectArg:Dh,ObjectDigest:dn,Owner:Fs,PasskeyAuthenticator:tp,ProgrammableMoveCall:Uh,ProgrammableTransaction:zh,PublicKey:Qh,SenderSignedData:Om,SenderSignedTransaction:ep,SharedObjectRef:Ch,StructTag:Rh,SuiObjectRef:Kt,TransactionData:qh,TransactionDataV1:Fh,TransactionEffects:Fm,TransactionExpiration:$h,TransactionKind:Ph,TypeTag:Pu},rp=BigInt(1e9),qm="0x1",ip="0x2";Nn("0x6");const Km=`${ip}::sui::SUI`;Nn("0x5");Nn("0x8");const gr=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ir(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function kn(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function Pe(t,...e){if(!ir(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function Sa(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");kn(t.outputLen),kn(t.blockLen)}function $r(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function op(t,e){Pe(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function ta(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Qt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function tr(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function mn(t,e){return t<<32-e|t>>>e}function oo(t,e){return t<<e|t>>>32-e>>>0}const ap=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function cp(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}const Fn=ap?t=>t:t=>cp(t);function Wm(t){for(let e=0;e<t.length;e++)t[e]=cp(t[e]);return t}const br=ap?t=>t:Wm,up=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Gm=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function nt(t){if(Pe(t),up)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=Gm[t[n]];return e}const Pn={_0:48,_9:57,A:65,F:70,a:97,f:102};function ad(t){if(t>=Pn._0&&t<=Pn._9)return t-Pn._0;if(t>=Pn.A&&t<=Pn.F)return t-(Pn.A-10);if(t>=Pn.a&&t<=Pn.f)return t-(Pn.a-10)}function Dn(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);if(up)return Uint8Array.fromHex(t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const s=new Uint8Array(n);for(let r=0,i=0;r<n;r++,i+=2){const o=ad(t.charCodeAt(i)),a=ad(t.charCodeAt(i+1));if(o===void 0||a===void 0){const c=t[i]+t[i+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+i)}s[r]=o*16+a}return s}function Ru(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function Ns(t){return typeof t=="string"&&(t=Ru(t)),Pe(t),t}function cd(t){return typeof t=="string"&&(t=Ru(t)),Pe(t),t}function Ge(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];Pe(r),e+=r.length}const n=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const i=t[s];n.set(i,r),r+=i.length}return n}function Hm(t,e){if(e!==void 0&&{}.toString.call(e)!=="[object Object]")throw new Error("options should be object or undefined");return Object.assign(t,e)}class Vu{}function Ma(t){const e=s=>t().update(Ns(s)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Ym(t){const e=(s,r)=>t(r).update(Ns(s)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=s=>t(s),e}function Ea(t=32){if(gr&&typeof gr.getRandomValues=="function")return gr.getRandomValues(new Uint8Array(t));if(gr&&typeof gr.randomBytes=="function")return Uint8Array.from(gr.randomBytes(t));throw new Error("crypto.getRandomValues must be defined")}const Zm=Uint8Array.from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9]);function Qm(t,e,n,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,s);const r=BigInt(32),i=BigInt(4294967295),o=Number(n>>r&i),a=Number(n&i),c=s?4:0,l=s?0:4;t.setUint32(e+c,o,s),t.setUint32(e+l,a,s)}function Xm(t,e,n){return t&e^~t&n}function Jm(t,e,n){return t&e^t&n^e&n}class Fu extends Vu{constructor(e,n,s,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=n,this.padOffset=s,this.isLE=r,this.buffer=new Uint8Array(e),this.view=tr(this.buffer)}update(e){$r(this),e=Ns(e),Pe(e);const{view:n,buffer:s,blockLen:r}=this,i=e.length;for(let o=0;o<i;){const a=Math.min(r-this.pos,i-o);if(a===r){const c=tr(e);for(;r<=i-o;o+=r)this.process(c,o);continue}s.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===r&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){$r(this),op(e,this),this.finished=!0;const{buffer:n,view:s,blockLen:r,isLE:i}=this;let{pos:o}=this;n[o++]=128,Qt(this.buffer.subarray(o)),this.padOffset>r-o&&(this.process(s,0),o=0);for(let f=o;f<r;f++)n[f]=0;Qm(s,r-8,BigInt(this.length*8),i),this.process(s,0);const a=tr(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<l;f++)a.setUint32(4*f,u[f],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:s,length:r,finished:i,destroyed:o,pos:a}=this;return e.destroyed=o,e.finished=i,e.length=r,e.pos=a,r%n&&e.buffer.set(s),e}clone(){return this._cloneInto()}}const cs=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),at=Uint32Array.from([3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]),ct=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),ao=BigInt(2**32-1),ud=BigInt(32);function lp(t,e=!1){return e?{h:Number(t&ao),l:Number(t>>ud&ao)}:{h:Number(t>>ud&ao)|0,l:Number(t&ao)|0}}function ew(t,e=!1){const n=t.length;let s=new Uint32Array(n),r=new Uint32Array(n);for(let i=0;i<n;i++){const{h:o,l:a}=lp(t[i],e);[s[i],r[i]]=[o,a]}return[s,r]}const ld=(t,e,n)=>t>>>n,dd=(t,e,n)=>t<<32-n|e>>>n,ws=(t,e,n)=>t>>>n|e<<32-n,vs=(t,e,n)=>t<<32-n|e>>>n,ci=(t,e,n)=>t<<64-n|e>>>n-32,ui=(t,e,n)=>t>>>n-32|e<<64-n,tw=(t,e)=>e,nw=(t,e)=>t;function en(t,e,n,s){const r=(e>>>0)+(s>>>0);return{h:t+n+(r/2**32|0)|0,l:r|0}}const qu=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),Ku=(t,e,n,s)=>e+n+s+(t/2**32|0)|0,sw=(t,e,n,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0),rw=(t,e,n,s,r)=>e+n+s+r+(t/2**32|0)|0,iw=(t,e,n,s,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0)+(r>>>0),ow=(t,e,n,s,r,i)=>e+n+s+r+i+(t/2**32|0)|0,Ze=Uint32Array.from([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),Z=new Uint32Array(32);function us(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=Z[2*t],l=Z[2*t+1],u=Z[2*e],f=Z[2*e+1],d=Z[2*n],h=Z[2*n+1],p=Z[2*s],y=Z[2*s+1],S=qu(c,u,o);l=Ku(S,l,f,a),c=S|0,{Dh:y,Dl:p}={Dh:y^l,Dl:p^c},{Dh:y,Dl:p}={Dh:tw(y,p),Dl:nw(y)},{h,l:d}=en(h,d,y,p),{Bh:f,Bl:u}={Bh:f^h,Bl:u^d},{Bh:f,Bl:u}={Bh:ws(f,u,24),Bl:vs(f,u,24)},Z[2*t]=c,Z[2*t+1]=l,Z[2*e]=u,Z[2*e+1]=f,Z[2*n]=d,Z[2*n+1]=h,Z[2*s]=p,Z[2*s+1]=y}function ls(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=Z[2*t],l=Z[2*t+1],u=Z[2*e],f=Z[2*e+1],d=Z[2*n],h=Z[2*n+1],p=Z[2*s],y=Z[2*s+1],S=qu(c,u,o);l=Ku(S,l,f,a),c=S|0,{Dh:y,Dl:p}={Dh:y^l,Dl:p^c},{Dh:y,Dl:p}={Dh:ws(y,p,16),Dl:vs(y,p,16)},{h,l:d}=en(h,d,y,p),{Bh:f,Bl:u}={Bh:f^h,Bl:u^d},{Bh:f,Bl:u}={Bh:ci(f,u,63),Bl:ui(f,u,63)},Z[2*t]=c,Z[2*t+1]=l,Z[2*e]=u,Z[2*e+1]=f,Z[2*n]=d,Z[2*n+1]=h,Z[2*s]=p,Z[2*s+1]=y}function aw(t,e={},n,s,r){if(kn(n),t<0||t>n)throw new Error("outputLen bigger than keyLen");const{key:i,salt:o,personalization:a}=e;if(i!==void 0&&(i.length<1||i.length>n))throw new Error("key length must be undefined or 1.."+n);if(o!==void 0&&o.length!==s)throw new Error("salt must be undefined or "+s);if(a!==void 0&&a.length!==r)throw new Error("personalization must be undefined or "+r)}class cw extends Vu{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,this.length=0,this.pos=0,kn(e),kn(n),this.blockLen=e,this.outputLen=n,this.buffer=new Uint8Array(e),this.buffer32=ta(this.buffer)}update(e){$r(this),e=Ns(e),Pe(e);const{blockLen:n,buffer:s,buffer32:r}=this,i=e.length,o=e.byteOffset,a=e.buffer;for(let c=0;c<i;){this.pos===n&&(br(r),this.compress(r,0,!1),br(r),this.pos=0);const l=Math.min(n-this.pos,i-c),u=o+c;if(l===n&&!(u%4)&&c+l<i){const f=new Uint32Array(a,u,Math.floor((i-c)/4));br(f);for(let d=0;c+n<i;d+=r.length,c+=n)this.length+=n,this.compress(f,d,!1);br(f);continue}s.set(e.subarray(c,c+l),this.pos),this.pos+=l,this.length+=l,c+=l}return this}digestInto(e){$r(this),op(e,this);const{pos:n,buffer32:s}=this;this.finished=!0,Qt(this.buffer.subarray(n)),br(s),this.compress(s,0,!0),br(s);const r=ta(e);this.get().forEach((i,o)=>r[o]=Fn(i))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){const{buffer:n,length:s,finished:r,destroyed:i,outputLen:o,pos:a}=this;return e||(e=new this.constructor({dkLen:o})),e.set(...this.get()),e.buffer.set(n),e.destroyed=i,e.finished=r,e.length=s,e.pos=a,e.outputLen=o,e}clone(){return this._cloneInto()}}class uw extends cw{constructor(e={}){const n=e.dkLen===void 0?64:e.dkLen;super(128,n),this.v0l=Ze[0]|0,this.v0h=Ze[1]|0,this.v1l=Ze[2]|0,this.v1h=Ze[3]|0,this.v2l=Ze[4]|0,this.v2h=Ze[5]|0,this.v3l=Ze[6]|0,this.v3h=Ze[7]|0,this.v4l=Ze[8]|0,this.v4h=Ze[9]|0,this.v5l=Ze[10]|0,this.v5h=Ze[11]|0,this.v6l=Ze[12]|0,this.v6h=Ze[13]|0,this.v7l=Ze[14]|0,this.v7h=Ze[15]|0,aw(n,e,64,16,16);let{key:s,personalization:r,salt:i}=e,o=0;if(s!==void 0&&(s=Ns(s),o=s.length),this.v0l^=this.outputLen|o<<8|65536|1<<24,i!==void 0){i=Ns(i);const a=ta(i);this.v4l^=Fn(a[0]),this.v4h^=Fn(a[1]),this.v5l^=Fn(a[2]),this.v5h^=Fn(a[3])}if(r!==void 0){r=Ns(r);const a=ta(r);this.v6l^=Fn(a[0]),this.v6h^=Fn(a[1]),this.v7l^=Fn(a[2]),this.v7h^=Fn(a[3])}if(s!==void 0){const a=new Uint8Array(this.blockLen);a.set(s),this.update(a)}}get(){let{v0l:e,v0h:n,v1l:s,v1h:r,v2l:i,v2h:o,v3l:a,v3h:c,v4l:l,v4h:u,v5l:f,v5h:d,v6l:h,v6h:p,v7l:y,v7h:S}=this;return[e,n,s,r,i,o,a,c,l,u,f,d,h,p,y,S]}set(e,n,s,r,i,o,a,c,l,u,f,d,h,p,y,S){this.v0l=e|0,this.v0h=n|0,this.v1l=s|0,this.v1h=r|0,this.v2l=i|0,this.v2h=o|0,this.v3l=a|0,this.v3h=c|0,this.v4l=l|0,this.v4h=u|0,this.v5l=f|0,this.v5h=d|0,this.v6l=h|0,this.v6h=p|0,this.v7l=y|0,this.v7h=S|0}compress(e,n,s){this.get().forEach((c,l)=>Z[l]=c),Z.set(Ze,16);let{h:r,l:i}=lp(BigInt(this.length));Z[24]=Ze[8]^i,Z[25]=Ze[9]^r,s&&(Z[28]=~Z[28],Z[29]=~Z[29]);let o=0;const a=Zm;for(let c=0;c<12;c++)us(0,4,8,12,e,n+2*a[o++]),ls(0,4,8,12,e,n+2*a[o++]),us(1,5,9,13,e,n+2*a[o++]),ls(1,5,9,13,e,n+2*a[o++]),us(2,6,10,14,e,n+2*a[o++]),ls(2,6,10,14,e,n+2*a[o++]),us(3,7,11,15,e,n+2*a[o++]),ls(3,7,11,15,e,n+2*a[o++]),us(0,5,10,15,e,n+2*a[o++]),ls(0,5,10,15,e,n+2*a[o++]),us(1,6,11,12,e,n+2*a[o++]),ls(1,6,11,12,e,n+2*a[o++]),us(2,7,8,13,e,n+2*a[o++]),ls(2,7,8,13,e,n+2*a[o++]),us(3,4,9,14,e,n+2*a[o++]),ls(3,4,9,14,e,n+2*a[o++]);this.v0l^=Z[0]^Z[16],this.v0h^=Z[1]^Z[17],this.v1l^=Z[2]^Z[18],this.v1h^=Z[3]^Z[19],this.v2l^=Z[4]^Z[20],this.v2h^=Z[5]^Z[21],this.v3l^=Z[6]^Z[22],this.v3h^=Z[7]^Z[23],this.v4l^=Z[8]^Z[24],this.v4h^=Z[9]^Z[25],this.v5l^=Z[10]^Z[26],this.v5h^=Z[11]^Z[27],this.v6l^=Z[12]^Z[28],this.v6h^=Z[13]^Z[29],this.v7l^=Z[14]^Z[30],this.v7h^=Z[15]^Z[31],Qt(Z)}destroy(){this.destroyed=!0,Qt(this.buffer32),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const lw=Ym(t=>new uw(t)),Os=lw;function dp(t,e,n){const s=oe.Address.serialize(t).toBytes(),r=oe.TypeTag.serialize(e).toBytes(),i=oe.u64().serialize(n.length).toBytes(),o=Os.create({dkLen:32});return o.update(new Uint8Array([240])),o.update(s),o.update(i),o.update(n),o.update(r),`0x${Ts(o.digest().slice(0,32))}`}const dw="object",fw="ID",hw="ascii",pw="String",gw="string",bw="String",yw="option",mw="Option";function ww(t){const e=typeof t.body=="object"&&"datatype"in t.body?t.body.datatype:null;return!!e&&de(e.package)===de("0x2")&&e.module==="tx_context"&&e.type==="TxContext"}function Bc(t){if(typeof t=="string")switch(t){case"address":return oe.Address;case"bool":return oe.Bool;case"u8":return oe.U8;case"u16":return oe.U16;case"u32":return oe.U32;case"u64":return oe.U64;case"u128":return oe.U128;case"u256":return oe.U256;default:throw new Error(`Unknown type signature ${t}`)}if("vector"in t){if(t.vector==="u8")return oe.byteVector().transform({input:n=>typeof n=="string"?new TextEncoder().encode(n):n,output:n=>n});const e=Bc(t.vector);return e?oe.vector(e):null}if("datatype"in t){const e=de(t.datatype.package);if(e===de(qm)){if(t.datatype.module===hw&&t.datatype.type===pw||t.datatype.module===gw&&t.datatype.type===bw)return oe.String;if(t.datatype.module===yw&&t.datatype.type===mw){const n=Bc(t.datatype.typeParameters[0]);return n?oe.vector(n):null}}if(e===de(ip)&&t.datatype.module===dw&&t.datatype.type===fw)return oe.Address}return null}function vw(t){return typeof t=="object"&&"Reference"in t?{ref:"&",body:vi(t.Reference)}:typeof t=="object"&&"MutableReference"in t?{ref:"&mut",body:vi(t.MutableReference)}:{ref:null,body:vi(t)}}function vi(t){if(typeof t=="string")switch(t){case"Address":return"address";case"Bool":return"bool";case"U8":return"u8";case"U16":return"u16";case"U32":return"u32";case"U64":return"u64";case"U128":return"u128";case"U256":return"u256";default:throw new Error(`Unexpected type ${t}`)}if("Vector"in t)return{vector:vi(t.Vector)};if("Struct"in t)return{datatype:{package:t.Struct.address,module:t.Struct.module,type:t.Struct.name,typeParameters:t.Struct.typeArguments.map(vi)}};if("TypeParameter"in t)return{typeParameter:t.TypeParameter};throw new Error(`Unexpected type ${JSON.stringify(t)}`)}function Sw(t){return{$kind:"Pure",Pure:{bytes:t instanceof Uint8Array?Te(t):t.toBase64()}}}const Ot={Pure:Sw,ObjectRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"ImmOrOwnedObject",ImmOrOwnedObject:{digest:e,version:n,objectId:de(t)}}}},SharedObjectRef({objectId:t,mutable:e,initialSharedVersion:n}){return{$kind:"Object",Object:{$kind:"SharedObject",SharedObject:{mutable:e,initialSharedVersion:n,objectId:de(t)}}}},ReceivingRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"Receiving",Receiving:{digest:e,version:n,objectId:de(t)}}}}};var $n;function Mw(t){return{lang:(t==null?void 0:t.lang)??($n==null?void 0:$n.lang),message:t==null?void 0:t.message,abortEarly:(t==null?void 0:t.abortEarly)??($n==null?void 0:$n.abortEarly),abortPipeEarly:(t==null?void 0:t.abortPipeEarly)??($n==null?void 0:$n.abortPipeEarly)}}var Xa;function Ew(t){return Xa==null?void 0:Xa.get(t)}var Ja;function Iw(t){return Ja==null?void 0:Ja.get(t)}var ec;function xw(t,e){var n;return(n=ec==null?void 0:ec.get(t))==null?void 0:n.get(e)}function fp(t){var n,s;const e=typeof t;return e==="string"?`"${t}"`:e==="number"||e==="bigint"||e==="boolean"?`${t}`:e==="object"||e==="function"?(t&&((s=(n=Object.getPrototypeOf(t))==null?void 0:n.constructor)==null?void 0:s.name))??"null":e}function Ft(t,e,n,s,r){const i=r&&"input"in r?r.input:n.value,o=(r==null?void 0:r.expected)??t.expects??null,a=(r==null?void 0:r.received)??fp(i),c={kind:t.kind,type:t.type,input:i,expected:o,received:a,message:`Invalid ${e}: ${o?`Expected ${o} but r`:"R"}eceived ${a}`,requirement:t.requirement,path:r==null?void 0:r.path,issues:r==null?void 0:r.issues,lang:s.lang,abortEarly:s.abortEarly,abortPipeEarly:s.abortPipeEarly},l=t.kind==="schema",u=(r==null?void 0:r.message)??t.message??xw(t.reference,c.lang)??(l?Iw(c.lang):null)??s.message??Ew(c.lang);u&&(c.message=typeof u=="function"?u(c):u),l&&(n.typed=!1),n.issues?n.issues.push(c):n.issues=[c]}function _w(t,e){return Object.hasOwn(t,e)&&e!=="__proto__"&&e!=="prototype"&&e!=="constructor"}var Aw=class extends Error{constructor(e){super(e[0].message);hr(this,"issues");this.name="ValiError",this.issues=e}};function Wi(t,e){return{kind:"validation",type:"check",reference:Wi,async:!1,expects:null,requirement:t,message:e,_run(n,s){return n.typed&&!this.requirement(n.value)&&Ft(this,"input",n,s),n}}}function Ke(t){return{kind:"validation",type:"integer",reference:Ke,async:!1,expects:null,requirement:Number.isInteger,message:t,_run(e,n){return e.typed&&!this.requirement(e.value)&&Ft(this,"integer",e,n),e}}}function Ia(t){return{kind:"transformation",type:"transform",reference:Ia,async:!1,operation:t,_run(e){return e.value=this.operation(e.value),e}}}function Wu(t,e,n){return typeof t.default=="function"?t.default(e,n):t.default}function Uc(t,e){return!t._run({typed:!1,value:e},{abortEarly:!0}).issues}function le(t,e){return{kind:"schema",type:"array",reference:le,expects:"Array",async:!1,item:t,message:e,_run(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<r.length;o++){const a=r[o],c=this.item._run({typed:!1,value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Ft(this,"type",n,s);return n}}}function Gu(t){return{kind:"schema",type:"bigint",reference:Gu,expects:"bigint",async:!1,message:t,_run(e,n){return typeof e.value=="bigint"?e.typed=!0:Ft(this,"type",e,n),e}}}function Zr(t){return{kind:"schema",type:"boolean",reference:Zr,expects:"boolean",async:!1,message:t,_run(e,n){return typeof e.value=="boolean"?e.typed=!0:Ft(this,"type",e,n),e}}}function Bi(t){return{kind:"schema",type:"lazy",reference:Bi,expects:"unknown",async:!1,getter:t,_run(e,n){return this.getter(e.value)._run(e,n)}}}function he(t,e){return{kind:"schema",type:"literal",reference:he,expects:fp(t),async:!1,literal:t,message:e,_run(n,s){return n.value===this.literal?n.typed=!0:Ft(this,"type",n,s),n}}}function Se(t,...e){const n={kind:"schema",type:"nullable",reference:Se,expects:`${t.expects} | null`,async:!1,wrapped:t,_run(s,r){return s.value===null&&("default"in this&&(s.value=Wu(this,s,r)),s.value===null)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function Rr(t,...e){const n={kind:"schema",type:"nullish",reference:Rr,expects:`${t.expects} | null | undefined`,async:!1,wrapped:t,_run(s,r){return(s.value===null||s.value===void 0)&&("default"in this&&(s.value=Wu(this,s,r)),s.value===null||s.value===void 0)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function $e(t){return{kind:"schema",type:"number",reference:$e,expects:"number",async:!1,message:t,_run(e,n){return typeof e.value=="number"&&!isNaN(e.value)?e.typed=!0:Ft(this,"type",e,n),e}}}function H(t,e){return{kind:"schema",type:"object",reference:H,expects:"Object",async:!1,entries:t,message:e,_run(n,s){var i;const r=n.value;if(r&&typeof r=="object"){n.typed=!0,n.value={};for(const o in this.entries){const a=r[o],c=this.entries[o]._run({typed:!1,value:a},s);if(c.issues){const l={type:"object",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),(c.value!==void 0||o in r)&&(n.value[o]=c.value)}}else Ft(this,"type",n,s);return n}}}function et(t,...e){const n={kind:"schema",type:"optional",reference:et,expects:`${t.expects} | undefined`,async:!1,wrapped:t,_run(s,r){return s.value===void 0&&("default"in this&&(s.value=Wu(this,s,r)),s.value===void 0)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function Ui(t,e,n){return{kind:"schema",type:"record",reference:Ui,expects:"Object",async:!1,key:t,value:e,message:n,_run(s,r){var o,a;const i=s.value;if(i&&typeof i=="object"){s.typed=!0,s.value={};for(const c in i)if(_w(i,c)){const l=i[c],u=this.key._run({typed:!1,value:c},r);if(u.issues){const d={type:"object",origin:"key",input:i,key:c,value:l};for(const h of u.issues)h.path=[d],(o=s.issues)==null||o.push(h);if(s.issues||(s.issues=u.issues),r.abortEarly){s.typed=!1;break}}const f=this.value._run({typed:!1,value:l},r);if(f.issues){const d={type:"object",origin:"value",input:i,key:c,value:l};for(const h of f.issues)h.path?h.path.unshift(d):h.path=[d],(a=s.issues)==null||a.push(h);if(s.issues||(s.issues=f.issues),r.abortEarly){s.typed=!1;break}}(!u.typed||!f.typed)&&(s.typed=!1),u.typed&&(s.value[u.value]=f.value)}}else Ft(this,"type",s,r);return s}}}function ye(t){return{kind:"schema",type:"string",reference:ye,expects:"string",async:!1,message:t,_run(e,n){return typeof e.value=="string"?e.typed=!0:Ft(this,"type",e,n),e}}}function Hu(t,e){return{kind:"schema",type:"tuple",reference:Hu,expects:"Array",async:!1,items:t,message:e,_run(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<this.items.length;o++){const a=r[o],c=this.items[o]._run({typed:!1,value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Ft(this,"type",n,s);return n}}}function fd(t){let e;if(t)for(const n of t)e?e.push(...n.issues):e=n.issues;return e}function it(t,e){return{kind:"schema",type:"union",reference:it,expects:[...new Set(t.map(n=>n.expects))].join(" | ")||"never",async:!1,options:t,message:e,_run(n,s){let r,i,o;for(const a of this.options){const c=a._run({typed:!1,value:n.value},s);if(c.typed)if(c.issues)i?i.push(c):i=[c];else{r=c;break}else o?o.push(c):o=[c]}if(r)return r;if(i){if(i.length===1)return i[0];Ft(this,"type",n,s,{issues:fd(i)}),n.typed=!0}else{if((o==null?void 0:o.length)===1)return o[0];Ft(this,"type",n,s,{issues:fd(o)})}return n}}}function or(){return{kind:"schema",type:"unknown",reference:or,expects:"unknown",async:!1,_run(t){return t.typed=!0,t}}}function Fe(t,e,n){const s=t._run({typed:!1,value:e},Mw(n));if(s.issues)throw new Aw(s.issues);return s.value}function Ne(...t){return{...t[0],pipe:t,_run(e,n){for(let s=0;s<t.length;s++){if(e.issues&&(t[s].kind==="schema"||t[s].kind==="transformation")){e.typed=!1;break}(!e.issues||!n.abortEarly&&!n.abortPipeEarly)&&(e=t[s]._run(e,n))}return e}}}function dr(t){const e=Object.entries(t).map(([n,s])=>H({[n]:s}));return Ne(it(e),Ia(n=>({...n,$kind:Object.keys(n)[0]})))}const Qr=Ne(ye(),Ia(t=>de(t)),Wi(on)),Vt=Qr,ar=ye(),Ct=Ne(it([ye(),Ne($e(),Ke())]),Wi(t=>{try{return BigInt(t),BigInt(t)>=0&&BigInt(t)<=18446744073709551615n}catch{return!1}},"Invalid u64")),ks=H({objectId:Qr,version:Ct,digest:ye()}),Le=Ne(it([H({GasCoin:he(!0)}),H({Input:Ne($e(),Ke()),type:et(he("pure"))}),H({Input:Ne($e(),Ke()),type:et(he("object"))}),H({Result:Ne($e(),Ke())}),H({NestedResult:Hu([Ne($e(),Ke()),Ne($e(),Ke())])})]),Ia(t=>({...t,$kind:Object.keys(t)[0]}))),Nw=H({budget:Se(Ct),price:Se(Ct),owner:Se(Qr),payment:Se(le(ks))}),Lc=it([he("address"),he("bool"),he("u8"),he("u16"),he("u32"),he("u64"),he("u128"),he("u256"),H({vector:Bi(()=>Lc)}),H({datatype:H({package:ye(),module:ye(),type:ye(),typeParameters:le(Bi(()=>Lc))})}),H({typeParameter:Ne($e(),Ke())})]),Tw=H({ref:Se(it([he("&"),he("&mut")])),body:Lc}),Ow=H({package:Vt,module:ye(),function:ye(),typeArguments:le(ye()),arguments:le(Le),_argumentTypes:et(Se(le(Tw)))}),kw=H({name:ye(),inputs:Ui(ye(),it([Le,le(Le)])),data:Ui(ye(),or())}),jw=dr({MoveCall:Ow,TransferObjects:H({objects:le(Le),address:Le}),SplitCoins:H({coin:Le,amounts:le(Le)}),MergeCoins:H({destination:Le,sources:le(Le)}),Publish:H({modules:le(ar),dependencies:le(Vt)}),MakeMoveVec:H({type:Se(ye()),elements:le(Le)}),Upgrade:H({modules:le(ar),dependencies:le(Vt),package:Vt,ticket:Le}),$Intent:kw}),hp=dr({ImmOrOwnedObject:ks,SharedObject:H({objectId:Vt,initialSharedVersion:Ct,mutable:Zr()}),Receiving:ks}),Cw=dr({Object:hp,Pure:H({bytes:ar}),UnresolvedPure:H({value:or()}),UnresolvedObject:H({objectId:Vt,version:et(Se(Ct)),digest:et(Se(ye())),initialSharedVersion:et(Se(Ct)),mutable:et(Se(Zr()))})}),hd=dr({Object:hp,Pure:H({bytes:ar})}),pp=dr({None:he(!0),Epoch:Ct}),No=H({version:he(2),sender:Rr(Qr),expiration:Rr(pp),gasData:Nw,inputs:le(Cw),commands:le(jw)}),$t={MoveCall(t){const[e,n="",s=""]="target"in t?t.target.split("::"):[t.package,t.module,t.function];return{$kind:"MoveCall",MoveCall:{package:e,module:n,function:s,typeArguments:t.typeArguments??[],arguments:t.arguments??[]}}},TransferObjects(t,e){return{$kind:"TransferObjects",TransferObjects:{objects:t.map(n=>Fe(Le,n)),address:Fe(Le,e)}}},SplitCoins(t,e){return{$kind:"SplitCoins",SplitCoins:{coin:Fe(Le,t),amounts:e.map(n=>Fe(Le,n))}}},MergeCoins(t,e){return{$kind:"MergeCoins",MergeCoins:{destination:Fe(Le,t),sources:e.map(n=>Fe(Le,n))}}},Publish({modules:t,dependencies:e}){return{$kind:"Publish",Publish:{modules:t.map(n=>typeof n=="string"?n:Te(new Uint8Array(n))),dependencies:e.map(n=>Nn(n))}}},Upgrade({modules:t,dependencies:e,package:n,ticket:s}){return{$kind:"Upgrade",Upgrade:{modules:t.map(r=>typeof r=="string"?r:Te(new Uint8Array(r))),dependencies:e.map(r=>Nn(r)),package:n,ticket:Fe(Le,s)}}},MakeMoveVec({type:t,elements:e}){return{$kind:"MakeMoveVec",MakeMoveVec:{type:t??null,elements:e.map(n=>Fe(Le,n))}}},Intent({name:t,inputs:e={},data:n={}}){return{$kind:"$Intent",$Intent:{name:t,inputs:Object.fromEntries(Object.entries(e).map(([s,r])=>[s,Array.isArray(r)?r.map(i=>Fe(Le,i)):Fe(Le,r)])),data:n}}}},zc=H({digest:ye(),objectId:ye(),version:it([Ne($e(),Ke()),ye(),Gu()])}),Dw=dr({ImmOrOwned:zc,Shared:H({objectId:Vt,initialSharedVersion:Ct,mutable:Zr()}),Receiving:zc}),pd=dr({Object:Dw,Pure:le(Ne($e(),Ke()))}),gp=it([H({kind:he("Input"),index:Ne($e(),Ke()),value:or(),type:et(he("object"))}),H({kind:he("Input"),index:Ne($e(),Ke()),value:or(),type:he("pure")})]),Bw=it([H({Epoch:Ne($e(),Ke())}),H({None:Se(he(!0))})]),gd=Ne(it([$e(),ye(),Gu()]),Wi(t=>{if(!["string","number","bigint"].includes(typeof t))return!1;try{return BigInt(t),!0}catch{return!1}})),Yu=it([H({bool:Se(he(!0))}),H({u8:Se(he(!0))}),H({u64:Se(he(!0))}),H({u128:Se(he(!0))}),H({address:Se(he(!0))}),H({signer:Se(he(!0))}),H({vector:Bi(()=>Yu)}),H({struct:Bi(()=>Uw)}),H({u16:Se(he(!0))}),H({u32:Se(he(!0))}),H({u256:Se(he(!0))})]),Uw=H({address:ye(),module:ye(),name:ye(),typeParams:le(Yu)}),Lw=H({budget:et(gd),price:et(gd),payment:et(le(zc)),owner:et(ye())}),zw=[gp,H({kind:he("GasCoin")}),H({kind:he("Result"),index:Ne($e(),Ke())}),H({kind:he("NestedResult"),index:Ne($e(),Ke()),resultIndex:Ne($e(),Ke())})],rs=it([...zw]),Pw=H({kind:he("MoveCall"),target:Ne(ye(),Wi(t=>t.split("::").length===3)),typeArguments:le(ye()),arguments:le(rs)}),$w=H({kind:he("TransferObjects"),objects:le(rs),address:rs}),Rw=H({kind:he("SplitCoins"),coin:rs,amounts:le(rs)}),Vw=H({kind:he("MergeCoins"),destination:rs,sources:le(rs)}),Fw=H({kind:he("MakeMoveVec"),type:it([H({Some:Yu}),H({None:Se(he(!0))})]),objects:le(rs)}),qw=H({kind:he("Publish"),modules:le(le(Ne($e(),Ke()))),dependencies:le(ye())}),Kw=H({kind:he("Upgrade"),modules:le(le(Ne($e(),Ke()))),dependencies:le(ye()),packageId:ye(),ticket:rs}),Ww=[Pw,$w,Rw,Vw,qw,Kw,Fw],Gw=it([...Ww]);H({version:he(1),sender:et(ye()),expiration:Rr(Bw),gasConfig:Lw,inputs:le(gp),transactions:le(Gw)});function bd(t){var n;const e=t.inputs.map((s,r)=>{if(s.Object)return{kind:"Input",index:r,value:{Object:s.Object.ImmOrOwnedObject?{ImmOrOwned:s.Object.ImmOrOwnedObject}:s.Object.Receiving?{Receiving:{digest:s.Object.Receiving.digest,version:s.Object.Receiving.version,objectId:s.Object.Receiving.objectId}}:{Shared:{mutable:s.Object.SharedObject.mutable,initialSharedVersion:s.Object.SharedObject.initialSharedVersion,objectId:s.Object.SharedObject.objectId}}},type:"object"};if(s.Pure)return{kind:"Input",index:r,value:{Pure:Array.from(Ee(s.Pure.bytes))},type:"pure"};if(s.UnresolvedPure)return{kind:"Input",type:"pure",index:r,value:s.UnresolvedPure.value};if(s.UnresolvedObject)return{kind:"Input",type:"object",index:r,value:s.UnresolvedObject.objectId};throw new Error("Invalid input")});return{version:1,sender:t.sender??void 0,expiration:((n=t.expiration)==null?void 0:n.$kind)==="Epoch"?{Epoch:Number(t.expiration.Epoch)}:t.expiration?{None:!0}:null,gasConfig:{owner:t.gasData.owner??void 0,budget:t.gasData.budget??void 0,price:t.gasData.price??void 0,payment:t.gasData.payment??void 0},inputs:e,transactions:t.commands.map(s=>{if(s.MakeMoveVec)return{kind:"MakeMoveVec",type:s.MakeMoveVec.type===null?{None:!0}:{Some:cn.parseFromStr(s.MakeMoveVec.type)},objects:s.MakeMoveVec.elements.map(r=>Rn(r,e))};if(s.MergeCoins)return{kind:"MergeCoins",destination:Rn(s.MergeCoins.destination,e),sources:s.MergeCoins.sources.map(r=>Rn(r,e))};if(s.MoveCall)return{kind:"MoveCall",target:`${s.MoveCall.package}::${s.MoveCall.module}::${s.MoveCall.function}`,typeArguments:s.MoveCall.typeArguments,arguments:s.MoveCall.arguments.map(r=>Rn(r,e))};if(s.Publish)return{kind:"Publish",modules:s.Publish.modules.map(r=>Array.from(Ee(r))),dependencies:s.Publish.dependencies};if(s.SplitCoins)return{kind:"SplitCoins",coin:Rn(s.SplitCoins.coin,e),amounts:s.SplitCoins.amounts.map(r=>Rn(r,e))};if(s.TransferObjects)return{kind:"TransferObjects",objects:s.TransferObjects.objects.map(r=>Rn(r,e)),address:Rn(s.TransferObjects.address,e)};if(s.Upgrade)return{kind:"Upgrade",modules:s.Upgrade.modules.map(r=>Array.from(Ee(r))),dependencies:s.Upgrade.dependencies,packageId:s.Upgrade.package,ticket:Rn(s.Upgrade.ticket,e)};throw new Error(`Unknown transaction ${Object.keys(s)}`)})}}function Rn(t,e){if(t.$kind==="GasCoin")return{kind:"GasCoin"};if(t.$kind==="Result")return{kind:"Result",index:t.Result};if(t.$kind==="NestedResult")return{kind:"NestedResult",index:t.NestedResult[0],resultIndex:t.NestedResult[1]};if(t.$kind==="Input")return e[t.Input];throw new Error(`Invalid argument ${Object.keys(t)}`)}function Hw(t){var e,n,s;return Fe(No,{version:2,sender:t.sender??null,expiration:t.expiration?"Epoch"in t.expiration?{Epoch:t.expiration.Epoch}:{None:!0}:null,gasData:{owner:t.gasConfig.owner??null,budget:((e=t.gasConfig.budget)==null?void 0:e.toString())??null,price:((n=t.gasConfig.price)==null?void 0:n.toString())??null,payment:((s=t.gasConfig.payment)==null?void 0:s.map(r=>({digest:r.digest,objectId:r.objectId,version:r.version.toString()})))??null},inputs:t.inputs.map(r=>{if(r.kind==="Input"){if(Uc(pd,r.value)){const i=Fe(pd,r.value);if(i.Object){if(i.Object.ImmOrOwned)return{Object:{ImmOrOwnedObject:{objectId:i.Object.ImmOrOwned.objectId,version:String(i.Object.ImmOrOwned.version),digest:i.Object.ImmOrOwned.digest}}};if(i.Object.Shared)return{Object:{SharedObject:{mutable:i.Object.Shared.mutable??null,initialSharedVersion:i.Object.Shared.initialSharedVersion,objectId:i.Object.Shared.objectId}}};if(i.Object.Receiving)return{Object:{Receiving:{digest:i.Object.Receiving.digest,version:String(i.Object.Receiving.version),objectId:i.Object.Receiving.objectId}}};throw new Error("Invalid object input")}return{Pure:{bytes:Te(new Uint8Array(i.Pure))}}}return r.type==="object"?{UnresolvedObject:{objectId:r.value}}:{UnresolvedPure:{value:r.value}}}throw new Error("Invalid input")}),commands:t.transactions.map(r=>{switch(r.kind){case"MakeMoveVec":return{MakeMoveVec:{type:"Some"in r.type?cn.tagToString(r.type.Some):null,elements:r.objects.map(i=>Vn(i))}};case"MergeCoins":return{MergeCoins:{destination:Vn(r.destination),sources:r.sources.map(i=>Vn(i))}};case"MoveCall":{const[i,o,a]=r.target.split("::");return{MoveCall:{package:i,module:o,function:a,typeArguments:r.typeArguments,arguments:r.arguments.map(c=>Vn(c))}}}case"Publish":return{Publish:{modules:r.modules.map(i=>Te(Uint8Array.from(i))),dependencies:r.dependencies}};case"SplitCoins":return{SplitCoins:{coin:Vn(r.coin),amounts:r.amounts.map(i=>Vn(i))}};case"TransferObjects":return{TransferObjects:{objects:r.objects.map(i=>Vn(i)),address:Vn(r.address)}};case"Upgrade":return{Upgrade:{modules:r.modules.map(i=>Te(Uint8Array.from(i))),dependencies:r.dependencies,package:r.packageId,ticket:Vn(r.ticket)}}}throw new Error(`Unknown transaction ${Object.keys(r)}`)})})}function Vn(t){switch(t.kind){case"GasCoin":return{GasCoin:!0};case"Result":return{Result:t.index};case"NestedResult":return{NestedResult:[t.index,t.resultIndex]};case"Input":return{Input:t.index}}}function Gi(t){return it(Object.entries(t).map(([e,n])=>H({[e]:n})))}const sn=Gi({GasCoin:he(!0),Input:Ne($e(),Ke()),Result:Ne($e(),Ke()),NestedResult:Hu([Ne($e(),Ke()),Ne($e(),Ke())])}),Yw=H({budget:Se(Ct),price:Se(Ct),owner:Se(Qr),payment:Se(le(ks))}),Zw=H({package:Vt,module:ye(),function:ye(),typeArguments:le(ye()),arguments:le(sn)}),Qw=H({name:ye(),inputs:Ui(ye(),it([sn,le(sn)])),data:Ui(ye(),or())}),Xw=Gi({MoveCall:Zw,TransferObjects:H({objects:le(sn),address:sn}),SplitCoins:H({coin:sn,amounts:le(sn)}),MergeCoins:H({destination:sn,sources:le(sn)}),Publish:H({modules:le(ar),dependencies:le(Vt)}),MakeMoveVec:H({type:Se(ye()),elements:le(sn)}),Upgrade:H({modules:le(ar),dependencies:le(Vt),package:Vt,ticket:sn}),$Intent:Qw}),Jw=Gi({ImmOrOwnedObject:ks,SharedObject:H({objectId:Vt,initialSharedVersion:Ct,mutable:Zr()}),Receiving:ks}),e1=Gi({Object:Jw,Pure:H({bytes:ar}),UnresolvedPure:H({value:or()}),UnresolvedObject:H({objectId:Vt,version:et(Se(Ct)),digest:et(Se(ye())),initialSharedVersion:et(Se(Ct)),mutable:et(Se(Zr()))})}),t1=Gi({None:he(!0),Epoch:Ct}),n1=H({version:he(2),sender:Rr(Qr),expiration:Rr(t1),gasData:Yw,inputs:le(e1),commands:le(Xw),digest:et(Se(ye()))}),s1=50,r1=1000n,i1=5e10;function bp(t){return async function(n,s,r){return await l1(n,t),await u1(n,t),s.onlyTransactionKind||(await o1(n,t),await a1(n,t),await c1(n,t)),await r()}}async function o1(t,e){t.gasConfig.price||(t.gasConfig.price=String(await e.getReferenceGasPrice()))}async function a1(t,e){if(t.gasConfig.budget)return;const n=await e.dryRunTransactionBlock({transactionBlock:t.build({overrides:{gasData:{budget:String(i1),payment:[]}}})});if(n.effects.status.status!=="success")throw new Error(`Dry run failed, could not automatically determine a budget: ${n.effects.status.error}`,{cause:n});const s=r1*BigInt(t.gasConfig.price||1n),r=BigInt(n.effects.gasUsed.computationCost)+s,i=r+BigInt(n.effects.gasUsed.storageCost)-BigInt(n.effects.gasUsed.storageRebate);t.gasConfig.budget=String(i>r?i:r)}async function c1(t,e){if(!t.gasConfig.payment){const s=(await e.getCoins({owner:t.gasConfig.owner||t.sender,coinType:Km})).data.filter(r=>!t.inputs.find(o=>{var a;return(a=o.Object)!=null&&a.ImmOrOwnedObject?r.coinObjectId===o.Object.ImmOrOwnedObject.objectId:!1})).map(r=>({objectId:r.coinObjectId,digest:r.digest,version:r.version}));if(!s.length)throw new Error("No valid gas coins found for the transaction.");t.gasConfig.payment=s.map(r=>Fe(ks,r))}}async function u1(t,e){const n=t.inputs.filter(u=>{var f;return u.UnresolvedObject&&!(u.UnresolvedObject.version||(f=u.UnresolvedObject)!=null&&f.initialSharedVersion)}),s=[...new Set(n.map(u=>Nn(u.UnresolvedObject.objectId)))],r=s.length?Ki(s,s1):[],i=(await Promise.all(r.map(u=>e.multiGetObjects({ids:u,options:{showOwner:!0}})))).flat(),o=new Map(s.map((u,f)=>[u,i[f]])),a=Array.from(o).filter(([u,f])=>f.error).map(([u,f])=>JSON.stringify(f.error));if(a.length)throw new Error(`The following input objects are invalid: ${a.join(", ")}`);const c=i.map(u=>{if(u.error||!u.data)throw new Error(`Failed to fetch object: ${u.error}`);const f=u.data.owner,d=f&&typeof f=="object"?"Shared"in f?f.Shared.initial_shared_version:"ConsensusAddressOwner"in f?f.ConsensusAddressOwner.start_version:null:null;return{objectId:u.data.objectId,digest:u.data.digest,version:u.data.version,initialSharedVersion:d}}),l=new Map(s.map((u,f)=>[u,c[f]]));for(const[u,f]of t.inputs.entries()){if(!f.UnresolvedObject)continue;let d;const h=de(f.UnresolvedObject.objectId),p=l.get(h);f.UnresolvedObject.initialSharedVersion??(p==null?void 0:p.initialSharedVersion)?d=Ot.SharedObjectRef({objectId:h,initialSharedVersion:f.UnresolvedObject.initialSharedVersion||(p==null?void 0:p.initialSharedVersion),mutable:f.UnresolvedObject.mutable||d1(t,u)}):f1(t,u)&&(d=Ot.ReceivingRef({objectId:h,digest:f.UnresolvedObject.digest??(p==null?void 0:p.digest),version:f.UnresolvedObject.version??(p==null?void 0:p.version)})),t.inputs[t.inputs.indexOf(f)]=d??Ot.ObjectRef({objectId:h,digest:f.UnresolvedObject.digest??(p==null?void 0:p.digest),version:f.UnresolvedObject.version??(p==null?void 0:p.version)})}}async function l1(t,e){const{inputs:n,commands:s}=t,r=[],i=new Set;s.forEach(a=>{if(a.MoveCall){if(a.MoveCall._argumentTypes)return;if(a.MoveCall.arguments.map(u=>u.$kind==="Input"?t.inputs[u.Input]:null).some(u=>(u==null?void 0:u.UnresolvedPure)||(u==null?void 0:u.UnresolvedObject)&&typeof(u==null?void 0:u.UnresolvedObject.mutable)!="boolean")){const u=`${a.MoveCall.package}::${a.MoveCall.module}::${a.MoveCall.function}`;i.add(u),r.push(a.MoveCall)}}});const o=new Map;i.size>0&&await Promise.all([...i].map(async a=>{const[c,l,u]=a.split("::"),f=await e.getNormalizedMoveFunction({package:c,module:l,function:u});o.set(a,f.parameters.map(d=>vw(d)))})),r.length&&await Promise.all(r.map(async a=>{const c=o.get(`${a.package}::${a.module}::${a.function}`);if(!c)return;const u=c.length>0&&ww(c.at(-1))?c.slice(0,c.length-1):c;a._argumentTypes=u})),s.forEach(a=>{if(!a.MoveCall)return;const c=a.MoveCall,l=`${c.package}::${c.module}::${c.function}`,u=c._argumentTypes;if(u){if(u.length!==a.MoveCall.arguments.length)throw new Error(`Incorrect number of arguments for ${l}`);u.forEach((f,d)=>{var B,T;const h=c.arguments[d];if(h.$kind!=="Input")return;const p=n[h.Input];if(!p.UnresolvedPure&&!p.UnresolvedObject)return;const y=((B=p.UnresolvedPure)==null?void 0:B.value)??((T=p.UnresolvedObject)==null?void 0:T.objectId),S=Bc(f.body);if(S){h.type="pure",n[n.indexOf(p)]=Ot.Pure(S.serialize(y));return}if(typeof y!="string")throw new Error(`Expect the argument to be an object id string, got ${JSON.stringify(y,null,2)}`);h.type="object";const _=p.UnresolvedPure?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:y}}:p;n[h.Input]=_})}})}function d1(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=r.MoveCall._argumentTypes[i].ref!=="&"||n}(r.$kind==="MakeMoveVec"||r.$kind==="MergeCoins"||r.$kind==="SplitCoins"||r.$kind==="TransferObjects")&&(n=!0)}),n}function f1(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=h1(r.MoveCall._argumentTypes[i])||n}}),n}function h1(t){return typeof t.body!="object"||!("datatype"in t.body)?!1:t.body.datatype.package==="0x2"&&t.body.datatype.module==="transfer"&&t.body.datatype.type==="Receiving"}function yp(t,e){return!!(t.inputs.some(n=>n.UnresolvedObject||n.UnresolvedPure)||!e.onlyTransactionKind&&(!t.gasConfig.price||!t.gasConfig.budget||!t.gasConfig.payment))}async function p1(t,e,n){var i;if(b1(t),!yp(t,e))return await yd(t),n();const s=g1(e);return(((i=s.core)==null?void 0:i.resolveTransactionPlugin())??bp(s))(t,e,async()=>{await yd(t),await n()})}function yd(t){t.inputs.forEach((e,n)=>{if(e.$kind!=="Object"&&e.$kind!=="Pure")throw new Error(`Input at index ${n} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(e)}`)})}function g1(t){if(!t.client)throw new Error("No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.");return t.client}function b1(t){for(const e of t.commands)switch(e.$kind){case"SplitCoins":e.SplitCoins.amounts.forEach(n=>{md(n,oe.U64,t)});break;case"TransferObjects":md(e.TransferObjects.address,oe.Address,t);break}}function md(t,e,n){if(t.$kind!=="Input")return;const s=n.inputs[t.Input];s.$kind==="UnresolvedPure"&&(n.inputs[t.Input]=Ot.Pure(e.serialize(s.UnresolvedPure.value)))}function y1(t){function e(n){return t(n)}return e.system=n=>{const s=n==null?void 0:n.mutable;return e(s!==void 0?Ot.SharedObjectRef({objectId:"0x5",initialSharedVersion:1,mutable:s}):{$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x5",initialSharedVersion:1}})},e.clock=()=>e(Ot.SharedObjectRef({objectId:"0x6",initialSharedVersion:1,mutable:!1})),e.random=()=>e({$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x8",mutable:!1}}),e.denyList=n=>e({$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x403",mutable:n==null?void 0:n.mutable}}),e.option=({type:n,value:s})=>r=>r.moveCall({typeArguments:[n],target:`0x1::option::${s===null?"none":"some"}`,arguments:s===null?[]:[r.object(s)]}),e}function m1(t){function e(n,s){if(typeof n=="string")return t(wi(n).serialize(s));if(n instanceof Uint8Array||Lu(n))return t(n);throw new Error("tx.pure must be called either a bcs type name, or a serialized bcs value")}return e.u8=n=>t(oe.U8.serialize(n)),e.u16=n=>t(oe.U16.serialize(n)),e.u32=n=>t(oe.U32.serialize(n)),e.u64=n=>t(oe.U64.serialize(n)),e.u128=n=>t(oe.U128.serialize(n)),e.u256=n=>t(oe.U256.serialize(n)),e.bool=n=>t(oe.Bool.serialize(n)),e.string=n=>t(oe.String.serialize(n)),e.address=n=>t(oe.Address.serialize(n)),e.id=e.address,e.vector=(n,s)=>t(oe.vector(wi(n)).serialize(s)),e.option=(n,s)=>t(oe.option(wi(n)).serialize(s)),e}function w1(t,e){const n=Array.from(`${t}::`).map(r=>r.charCodeAt(0)),s=new Uint8Array(n.length+e.length);return s.set(n),s.set(e,n.length),Os(s,{dkLen:32})}function wd(t){return de(t).replace("0x","")}class Tt{constructor(e){this.version=2,this.sender=(e==null?void 0:e.sender)??null,this.expiration=(e==null?void 0:e.expiration)??null,this.inputs=(e==null?void 0:e.inputs)??[],this.commands=(e==null?void 0:e.commands)??[],this.gasData=(e==null?void 0:e.gasData)??{budget:null,price:null,owner:null,payment:null}}static fromKindBytes(e){const s=oe.TransactionKind.parse(e).ProgrammableTransaction;if(!s)throw new Error("Unable to deserialize from bytes.");return Tt.restore({version:2,sender:null,expiration:null,gasData:{budget:null,owner:null,payment:null,price:null},inputs:s.inputs,commands:s.commands})}static fromBytes(e){const n=oe.TransactionData.parse(e),s=n==null?void 0:n.V1,r=s.kind.ProgrammableTransaction;if(!s||!r)throw new Error("Unable to deserialize from bytes.");return Tt.restore({version:2,sender:s.sender,expiration:s.expiration,gasData:s.gasData,inputs:r.inputs,commands:r.commands})}static restore(e){return e.version===2?new Tt(Fe(No,e)):new Tt(Fe(No,Hw(e)))}static getDigestFromBytes(e){const n=w1("TransactionData",e);return va(n)}get gasConfig(){return this.gasData}set gasConfig(e){this.gasData=e}build({maxSizeBytes:e=1/0,overrides:n,onlyTransactionKind:s}={}){const r=this.inputs,i=this.commands,o={ProgrammableTransaction:{inputs:r,commands:i}};if(s)return oe.TransactionKind.serialize(o,{maxSize:e}).toBytes();const a=(n==null?void 0:n.expiration)??this.expiration,c=(n==null?void 0:n.sender)??this.sender,l={...this.gasData,...n==null?void 0:n.gasConfig,...n==null?void 0:n.gasData};if(!c)throw new Error("Missing transaction sender");if(!l.budget)throw new Error("Missing gas budget");if(!l.payment)throw new Error("Missing gas payment");if(!l.price)throw new Error("Missing gas price");const u={sender:wd(c),expiration:a||{None:!0},gasData:{payment:l.payment,owner:wd(this.gasData.owner??c),price:BigInt(l.price),budget:BigInt(l.budget)},kind:{ProgrammableTransaction:{inputs:r,commands:i}}};return oe.TransactionData.serialize({V1:u},{maxSize:e}).toBytes()}addInput(e,n){const s=this.inputs.length;return this.inputs.push(n),{Input:s,type:e,$kind:"Input"}}getInputUses(e,n){this.mapArguments((s,r)=>(s.$kind==="Input"&&s.Input===e&&n(s,r),s))}mapCommandArguments(e,n){const s=this.commands[e];switch(s.$kind){case"MoveCall":s.MoveCall.arguments=s.MoveCall.arguments.map(i=>n(i,s,e));break;case"TransferObjects":s.TransferObjects.objects=s.TransferObjects.objects.map(i=>n(i,s,e)),s.TransferObjects.address=n(s.TransferObjects.address,s,e);break;case"SplitCoins":s.SplitCoins.coin=n(s.SplitCoins.coin,s,e),s.SplitCoins.amounts=s.SplitCoins.amounts.map(i=>n(i,s,e));break;case"MergeCoins":s.MergeCoins.destination=n(s.MergeCoins.destination,s,e),s.MergeCoins.sources=s.MergeCoins.sources.map(i=>n(i,s,e));break;case"MakeMoveVec":s.MakeMoveVec.elements=s.MakeMoveVec.elements.map(i=>n(i,s,e));break;case"Upgrade":s.Upgrade.ticket=n(s.Upgrade.ticket,s,e);break;case"$Intent":const r=s.$Intent.inputs;s.$Intent.inputs={};for(const[i,o]of Object.entries(r))s.$Intent.inputs[i]=Array.isArray(o)?o.map(a=>n(a,s,e)):n(o,s,e);break;case"Publish":break;default:throw new Error(`Unexpected transaction kind: ${s.$kind}`)}}mapArguments(e){for(const n of this.commands.keys())this.mapCommandArguments(n,e)}replaceCommand(e,n,s=e){if(!Array.isArray(n)){this.commands[e]=n;return}const r=n.length-1;this.commands.splice(e,1,...n),r!==0&&this.mapArguments((i,o,a)=>{if(a<e+n.length)return i;switch(i.$kind){case"Result":i.Result===e&&(i.Result=s),i.Result>e&&(i.Result+=r);break;case"NestedResult":i.NestedResult[0]===e&&(i.NestedResult[0]=s),i.NestedResult[0]>e&&(i.NestedResult[0]+=r);break}return i})}getDigest(){const e=this.build({onlyTransactionKind:!1});return Tt.getDigestFromBytes(e)}snapshot(){return Fe(No,this)}shallowClone(){return new Tt({version:this.version,sender:this.sender,expiration:this.expiration,gasData:{...this.gasData},inputs:[...this.inputs],commands:[...this.commands]})}applyResolvedData(e){this.sender||(this.sender=e.sender??null),this.expiration||(this.expiration=e.expiration??null),this.gasData.budget||(this.gasData.budget=e.gasData.budget),this.gasData.owner||(this.gasData.owner=e.gasData.owner??null),this.gasData.payment||(this.gasData.payment=e.gasData.payment),this.gasData.price||(this.gasData.price=e.gasData.price);for(let n=0;n<this.inputs.length;n++){const s=this.inputs[n],r=e.inputs[n];switch(s.$kind){case"UnresolvedPure":if(r.$kind!=="Pure")throw new Error(`Expected input at index ${n} to resolve to a Pure argument, but got ${JSON.stringify(r)}`);this.inputs[n]=r;break;case"UnresolvedObject":if(r.$kind!=="Object")throw new Error(`Expected input at index ${n} to resolve to an Object argument, but got ${JSON.stringify(r)}`);if(r.Object.$kind==="ImmOrOwnedObject"||r.Object.$kind==="Receiving"){const i=s.UnresolvedObject,o=r.Object.ImmOrOwnedObject??r.Object.Receiving;if(de(i.objectId)!==de(o.objectId)||i.version!=null&&i.version!==o.version||i.digest!=null&&i.digest!==o.digest||i.mutable!=null||i.initialSharedVersion!=null)throw new Error(`Input at index ${n} did not match unresolved object. ${JSON.stringify(i)} is not compatible with ${JSON.stringify(o)}`)}else if(r.Object.$kind==="SharedObject"){const i=s.UnresolvedObject,o=r.Object.SharedObject;if(de(i.objectId)!==de(o.objectId)||i.initialSharedVersion!=null&&i.initialSharedVersion!==o.initialSharedVersion||i.mutable!=null&&i.mutable!==o.mutable||i.version!=null||i.digest!=null)throw new Error(`Input at index ${n} did not match unresolved object. ${JSON.stringify(i)} is not compatible with ${JSON.stringify(o)}`)}else throw new Error(`Input at index ${n} resolved to an unexpected Object kind: ${JSON.stringify(r.Object)}`);this.inputs[n]=r;break}}}}function vd(t){if(typeof t=="string")return de(t);if(t.Object)return t.Object.ImmOrOwnedObject?de(t.Object.ImmOrOwnedObject.objectId):t.Object.Receiving?de(t.Object.Receiving.objectId):de(t.Object.SharedObject.objectId);if(t.UnresolvedObject)return de(t.UnresolvedObject.objectId)}var mp=t=>{throw TypeError(t)},wp=(t,e,n)=>e.has(t)||mp("Cannot "+n),ut=(t,e,n)=>(wp(t,e,"read from private field"),e.get(t)),Sd=(t,e,n)=>e.has(t)?mp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Md=(t,e,n,s)=>(wp(t,e,"write to private field"),e.set(t,n),n),Rs,pt;const v1=class vp{constructor({prefix:e,cache:n}={}){Sd(this,Rs),Sd(this,pt),Md(this,Rs,e??[]),Md(this,pt,n??new Map)}read(e,n){const s=[ut(this,Rs),...e].join(":");if(ut(this,pt).has(s))return ut(this,pt).get(s);const r=n();return ut(this,pt).set(s,r),typeof r=="object"&&r!==null&&"then"in r?Promise.resolve(r).then(i=>(ut(this,pt).set(s,i),i)).catch(i=>{throw ut(this,pt).delete(s),i}):r}readSync(e,n){const s=[ut(this,Rs),...e].join(":");if(ut(this,pt).has(s))return ut(this,pt).get(s);const r=n();return ut(this,pt).set(s,r),r}clear(e){const n=[...ut(this,Rs),...e??[]].join(":");if(!n){ut(this,pt).clear();return}for(const s of ut(this,pt).keys())s.startsWith(n)&&ut(this,pt).delete(s)}scope(e){return new vp({prefix:[...ut(this,Rs),...Array.isArray(e)?e:[e]],cache:ut(this,pt)})}};Rs=new WeakMap;pt=new WeakMap;let S1=v1;const Sp="1.44.0",M1="1.61.0";var Mp=t=>{throw TypeError(t)},Zu=(t,e,n)=>e.has(t)||Mp("Cannot "+n),Je=(t,e,n)=>(Zu(t,e,"read from private field"),n?n.call(t):e.get(t)),si=(t,e,n)=>e.has(t)?Mp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),co=(t,e,n,s)=>(Zu(t,e,"write to private field"),e.set(t,n),n),xa=(t,e,n)=>(Zu(t,e,"access private method"),n),Li,is,zi,Is,_n,Pc,$c,Ep,Ip,Qu;const E1="/",I1={"Mvr-Source":`@mysten/sui@${Sp}`};class x1{constructor({cache:e,url:n,pageSize:s=50,overrides:r}){si(this,_n),si(this,Li),si(this,is),si(this,zi),si(this,Is),co(this,Li,e),co(this,is,n),co(this,zi,s),co(this,Is,{packages:r==null?void 0:r.packages,types:r==null?void 0:r.types}),_1(Je(this,Is))}async resolvePackage({package:e}){return dt(e)?{package:await Je(this,_n,Pc).load(e)}:{package:e}}async resolveType({type:e}){if(!dt(e))return{type:e};const n=[...Rc(e)],s=await Je(this,_n,$c).loadMany(n),r={};for(let i=0;i<n.length;i++){const o=s[i];if(o instanceof Error)throw o;r[n[i]]=o}return{type:Vc(e,r)}}async resolve({types:e=[],packages:n=[]}){var u,f,d;const s=new Set;for(const h of e??[])Rc(h,s);const r=[...s],[i,o]=await Promise.all([r.length>0?Je(this,_n,$c).loadMany(r):[],n.length>0?Je(this,_n,Pc).loadMany(n):[]]),a={...(u=Je(this,Is))==null?void 0:u.types};for(const[h,p]of r.entries()){const y=i[h];if(y instanceof Error)throw y;a[p]=y}const c={};for(const h of e??[]){const p=Vc(h,a);c[h]={type:p}}const l={};for(const[h,p]of(n??[]).entries()){const y=((d=(f=Je(this,Is))==null?void 0:f.packages)==null?void 0:d[p])??o[h];if(y instanceof Error)throw y;l[p]={package:y}}return{types:c,packages:l}}}Li=new WeakMap;is=new WeakMap;zi=new WeakMap;Is=new WeakMap;_n=new WeakSet;Pc=function(){return Je(this,Li).readSync(["#mvrPackageDataLoader",Je(this,is)??""],()=>{var n;const t=new Eh(async s=>{if(!Je(this,is))throw new Error(`MVR Api URL is not set for the current client (resolving ${s.join(", ")})`);const r=await xa(this,_n,Ep).call(this,s);return s.map(i=>r[i]??new Error(`Failed to resolve package: ${i}`))}),e=(n=Je(this,Is))==null?void 0:n.packages;if(e)for(const[s,r]of Object.entries(e))t.prime(s,r);return t})};$c=function(){return Je(this,Li).readSync(["#mvrTypeDataLoader",Je(this,is)??""],()=>{var n;const t=new Eh(async s=>{if(!Je(this,is))throw new Error(`MVR Api URL is not set for the current client (resolving ${s.join(", ")})`);const r=await xa(this,_n,Ip).call(this,s);return s.map(i=>r[i]??new Error(`Failed to resolve type: ${i}`))}),e=(n=Je(this,Is))==null?void 0:n.types;if(e)for(const[s,r]of Object.entries(e))t.prime(s,r);return t})};Ep=async function(t){if(t.length===0)return{};const e=Ki(t,Je(this,zi)),n={};return await Promise.all(e.map(async s=>{var i;const r=await xa(this,_n,Qu).call(this,"/v1/resolution/bulk",{names:s});if(r!=null&&r.resolution)for(const o of Object.keys(r==null?void 0:r.resolution)){const a=(i=r.resolution[o])==null?void 0:i.package_id;a&&(n[o]=a)}})),n};Ip=async function(t){if(t.length===0)return{};const e=Ki(t,Je(this,zi)),n={};return await Promise.all(e.map(async s=>{var i;const r=await xa(this,_n,Qu).call(this,"/v1/struct-definition/bulk",{types:s});if(r!=null&&r.resolution)for(const o of Object.keys(r==null?void 0:r.resolution)){const a=(i=r.resolution[o])==null?void 0:i.type_tag;a&&(n[o]=a)}})),n};Qu=async function(t,e){if(!Je(this,is))throw new Error("MVR Api URL is not set for the current client");const n=await fetch(`${Je(this,is)}${t}`,{method:"POST",headers:{"Content-Type":"application/json",...I1},body:JSON.stringify(e)});if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(`Failed to resolve types: ${s==null?void 0:s.message}`)}return n.json()};function _1(t){if(t!=null&&t.packages)for(const[e,n]of Object.entries(t.packages)){if(!Pt(e))throw new Error(`Invalid package name: ${e}`);if(!on(de(n)))throw new Error(`Invalid package ID: ${n}`)}if(t!=null&&t.types)for(const[e,n]of Object.entries(t.types)){if(rr(e).typeParams.length>0)throw new Error("Type overrides must be first-level only. If you want to supply generic types, just pass each type individually.");const s=rr(n);if(!on(s.address))throw new Error(`Invalid type: ${n}`)}}function Rc(t,e=new Set){if(typeof t=="string"&&!dt(t))return e;const n=xp(t)?t:rr(t);dt(n.address)&&e.add(`${n.address}::${n.module}::${n.name}`);for(const s of n.typeParams)Rc(s,e);return e}function Vc(t,e){const n=xp(t)?t:rr(t),s=`${n.address}::${n.module}::${n.name}`,r=e[s];return Pr({...n,address:r?r.split("::")[0]:n.address,typeParams:n.typeParams.map(i=>Vc(i,e))})}function dt(t){return t.includes(E1)||t.includes("@")||t.includes(".sui")}function xp(t){return typeof t=="object"&&"address"in t&&"module"in t&&"name"in t&&"typeParams"in t}function A1(t){const e=new Set,n=new Set;for(const s of t.commands)switch(s.$kind){case"MakeMoveVec":s.MakeMoveVec.type&&Ed([s.MakeMoveVec.type]).forEach(o=>{n.add(o)});break;case"MoveCall":const r=s.MoveCall,i=r.package.split("::")[0];if(dt(i)){if(!Pt(i))throw new Error(`Invalid package name: ${i}`);e.add(i)}Ed(r.typeArguments??[]).forEach(o=>{n.add(o)});break}return{packages:[...e],types:[...n]}}function N1(t,e){var n;for(const s of t.commands){if((n=s.MakeMoveVec)!=null&&n.type){if(!dt(s.MakeMoveVec.type))continue;if(!e.types[s.MakeMoveVec.type])throw new Error(`No resolution found for type: ${s.MakeMoveVec.type}`);s.MakeMoveVec.type=e.types[s.MakeMoveVec.type].type}const r=s.MoveCall;if(!r)continue;const i=r.package.split("::"),o=i[0];if(dt(o)&&!e.packages[o])throw new Error(`No address found for package: ${o}`);dt(o)&&(i[0]=e.packages[o].package,r.package=i.join("::"));const a=r.typeArguments;if(a){for(let c=0;c<a.length;c++)if(dt(a[c])){if(!e.types[a[c]])throw new Error(`No resolution found for type: ${a[c]}`);a[c]=e.types[a[c]].type}r.typeArguments=a}}}function Ed(t){const e=new Set;for(const n of t)if(dt(n)){if(!wm(n))throw new Error(`Invalid type with names: ${n}`);e.add(n)}return e}const T1=t=>async(e,n,s)=>{const r=A1(e);if(r.types.length===0&&r.packages.length===0)return s();const i=await O1(n).core.mvr.resolve({types:r.types,packages:r.packages});N1(e,i),await s()};function O1(t){if(!t.client)throw new Error("No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.");return t.client}var _p=t=>{throw TypeError(t)},Xu=(t,e,n)=>e.has(t)||_p("Cannot "+n),q=(t,e,n)=>(Xu(t,e,"read from private field"),n?n.call(t):e.get(t)),wn=(t,e,n)=>e.has(t)?_p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),je=(t,e,n,s)=>(Xu(t,e,"write to private field"),e.set(t,n),n),Qe=(t,e,n)=>(Xu(t,e,"access private method"),n),qs,nr,Yn,jn,Ht,Yt,un,xs,ne,We,Ap,To,Oo,ko,na,Fc,Ju,Np,Tp;function tc(t,e=1/0){const n={$kind:"Result",get Result(){return typeof t=="function"?t():t}},s=[],r=i=>s[i]??(s[i]={$kind:"NestedResult",get NestedResult(){return[typeof t=="function"?t():t,i]}});return new Proxy(n,{set(){throw new Error("The transaction result is a proxy, and does not support setting properties directly")},get(i,o){if(o in i)return Reflect.get(i,o);if(o===Symbol.iterator)return function*(){let c=0;for(;c<e;)yield r(c),c++};if(typeof o=="symbol")return;const a=parseInt(o,10);if(!(Number.isNaN(a)||a<0))return r(a)}})}const Op=Symbol.for("@mysten/transaction");function kp(t){return!!t&&typeof t=="object"&&t[Op]===!0}const Id={buildPlugins:new Map,serializationPlugins:new Map},nc=Symbol.for("@mysten/transaction/registry");function ri(){try{const t=globalThis;return t[nc]||(t[nc]=Id),t[nc]}catch{return Id}}const jp=class qc{constructor(){wn(this,We),wn(this,qs),wn(this,nr),wn(this,Yn,new Map),wn(this,jn,[]),wn(this,Ht,[]),wn(this,Yt,new Set),wn(this,un,new Set),wn(this,xs,new Map),wn(this,ne),this.object=y1(n=>{var i,o;if(typeof n=="function")return this.object(this.add(n));if(typeof n=="object"&&Uc(Le,n))return n;const s=vd(n),r=q(this,ne).inputs.find(a=>s===vd(a));return(i=r==null?void 0:r.Object)!=null&&i.SharedObject&&typeof n=="object"&&((o=n.Object)!=null&&o.SharedObject)&&(r.Object.SharedObject.mutable=r.Object.SharedObject.mutable||n.Object.SharedObject.mutable),r?{$kind:"Input",Input:q(this,ne).inputs.indexOf(r),type:"object"}:Qe(this,We,Oo).call(this,"object",typeof n=="string"?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:de(n)}}:n)});const e=ri();je(this,ne,new Tt),je(this,nr,[...e.buildPlugins.values()]),je(this,qs,[...e.serializationPlugins.values()])}static fromKind(e){const n=new qc;return je(n,ne,Tt.fromKindBytes(typeof e=="string"?Ee(e):e)),je(n,jn,q(n,ne).inputs.slice()),je(n,Ht,q(n,ne).commands.slice()),je(n,Yt,new Set(q(n,Ht).map((s,r)=>r))),n}static from(e){const n=new qc;return kp(e)?je(n,ne,Tt.restore(e.getData())):typeof e!="string"||!e.startsWith("{")?je(n,ne,Tt.fromBytes(typeof e=="string"?Ee(e):e)):je(n,ne,Tt.restore(JSON.parse(e))),je(n,jn,q(n,ne).inputs.slice()),je(n,Ht,q(n,ne).commands.slice()),je(n,Yt,new Set(q(n,Ht).map((s,r)=>r))),n}static registerGlobalSerializationPlugin(e,n){ri().serializationPlugins.set(e,n??e)}static unregisterGlobalSerializationPlugin(e){ri().serializationPlugins.delete(e)}static registerGlobalBuildPlugin(e,n){ri().buildPlugins.set(e,n??e)}static unregisterGlobalBuildPlugin(e){ri().buildPlugins.delete(e)}addSerializationPlugin(e){q(this,qs).push(e)}addBuildPlugin(e){q(this,nr).push(e)}addIntentResolver(e,n){if(q(this,Yn).has(e)&&q(this,Yn).get(e)!==n)throw new Error(`Intent resolver for ${e} already exists`);q(this,Yn).set(e,n)}setSender(e){q(this,ne).sender=e}setSenderIfNotSet(e){q(this,ne).sender||(q(this,ne).sender=e)}setExpiration(e){q(this,ne).expiration=e?Fe(pp,e):null}setGasPrice(e){q(this,ne).gasConfig.price=String(e)}setGasBudget(e){q(this,ne).gasConfig.budget=String(e)}setGasBudgetIfNotSet(e){q(this,ne).gasData.budget==null&&(q(this,ne).gasConfig.budget=String(e))}setGasOwner(e){q(this,ne).gasConfig.owner=e}setGasPayment(e){q(this,ne).gasConfig.payment=e.map(n=>Fe(ks,n))}get blockData(){return bd(q(this,ne).snapshot())}getData(){return q(this,ne).snapshot()}get[Op](){return!0}get pure(){return Object.defineProperty(this,"pure",{enumerable:!1,value:m1(e=>Lu(e)?Qe(this,We,Oo).call(this,"pure",{$kind:"Pure",Pure:{bytes:e.toBase64()}}):Qe(this,We,Oo).call(this,"pure",Uc(hd,e)?Fe(hd,e):e instanceof Uint8Array?Ot.Pure(e):{$kind:"UnresolvedPure",UnresolvedPure:{value:e}}))}),this.pure}get gas(){return{$kind:"GasCoin",GasCoin:!0}}objectRef(...e){return this.object(Ot.ObjectRef(...e))}receivingRef(...e){return this.object(Ot.ReceivingRef(...e))}sharedObjectRef(...e){return this.object(Ot.SharedObjectRef(...e))}add(e){if(typeof e=="function"){if(q(this,xs).has(e))return q(this,xs).get(e);const n=Qe(this,We,Ap).call(this),s=e(n);if(!(s&&typeof s=="object"&&"then"in s))return je(this,Yt,q(n,Yt)),q(this,xs).set(e,s),s;const r=Qe(this,We,To).call(this,{$kind:"$Intent",$Intent:{name:"AsyncTransactionThunk",inputs:{},data:{resultIndex:q(this,ne).commands.length,result:null}}});q(this,un).add(Promise.resolve(s).then(o=>{r.$Intent.data.result=o}));const i=tc(()=>r.$Intent.data.resultIndex);return q(this,xs).set(e,i),i}else Qe(this,We,To).call(this,e);return tc(q(this,ne).commands.length-1)}splitCoins(e,n){const s=$t.SplitCoins(typeof e=="string"?this.object(e):Qe(this,We,na).call(this,e),n.map(r=>typeof r=="number"||typeof r=="bigint"||typeof r=="string"?this.pure.u64(r):Qe(this,We,ko).call(this,r)));return Qe(this,We,To).call(this,s),tc(q(this,ne).commands.length-1,n.length)}mergeCoins(e,n){return this.add($t.MergeCoins(this.object(e),n.map(s=>this.object(s))))}publish({modules:e,dependencies:n}){return this.add($t.Publish({modules:e,dependencies:n}))}upgrade({modules:e,dependencies:n,package:s,ticket:r}){return this.add($t.Upgrade({modules:e,dependencies:n,package:s,ticket:this.object(r)}))}moveCall({arguments:e,...n}){return this.add($t.MoveCall({...n,arguments:e==null?void 0:e.map(s=>Qe(this,We,ko).call(this,s))}))}transferObjects(e,n){return this.add($t.TransferObjects(e.map(s=>this.object(s)),typeof n=="string"?this.pure.address(n):Qe(this,We,ko).call(this,n)))}makeMoveVec({type:e,elements:n}){return this.add($t.MakeMoveVec({type:e,elements:n.map(s=>this.object(s))}))}serialize(){return JSON.stringify(bd(q(this,ne).snapshot()))}async toJSON(e={}){await this.prepareForSerialization(e);const n=this.isFullyResolved();return JSON.stringify(Fe(n1,n?{...q(this,ne).snapshot(),digest:q(this,ne).getDigest()}:q(this,ne).snapshot()),(s,r)=>typeof r=="bigint"?r.toString():r,2)}async sign(e){const{signer:n,...s}=e,r=await this.build(s);return n.signTransaction(r)}isFullyResolved(){return!(!q(this,ne).sender||q(this,un).size>0||q(this,ne).commands.some(e=>e.$Intent)||yp(q(this,ne),{}))}async build(e={}){return await this.prepareForSerialization(e),await Qe(this,We,Fc).call(this,e),q(this,ne).build({onlyTransactionKind:e.onlyTransactionKind})}async getDigest(e={}){return await this.prepareForSerialization(e),await Qe(this,We,Fc).call(this,e),q(this,ne).getDigest()}async prepareForSerialization(e){var r;await Qe(this,We,Np).call(this),Qe(this,We,Tp).call(this);const n=new Set;for(const i of q(this,ne).commands)i.$Intent&&n.add(i.$Intent.name);const s=[...q(this,qs)];for(const i of n)if(!((r=e.supportedIntents)!=null&&r.includes(i))){if(!q(this,Yn).has(i))throw new Error(`Missing intent resolver for ${i}`);s.push(q(this,Yn).get(i))}s.push(T1()),await Qe(this,We,Ju).call(this,s,e)}};qs=new WeakMap;nr=new WeakMap;Yn=new WeakMap;jn=new WeakMap;Ht=new WeakMap;Yt=new WeakMap;un=new WeakMap;xs=new WeakMap;ne=new WeakMap;We=new WeakSet;Ap=function(){const t=new jp;return je(t,ne,q(this,ne)),je(t,qs,q(this,qs)),je(t,nr,q(this,nr)),je(t,Yn,q(this,Yn)),je(t,un,q(this,un)),je(t,Yt,new Set(q(this,Yt))),je(t,xs,q(this,xs)),q(this,jn).push(q(t,jn)),q(this,Ht).push(q(t,Ht)),t};To=function(t){const e=q(this,ne).commands.length;return q(this,Ht).push(t),q(this,Yt).add(e),q(this,ne).commands.push(t),q(this,ne).mapCommandArguments(e,n=>{if(n.$kind==="Result"&&!q(this,Yt).has(n.Result))throw new Error(`Result { Result: ${n.Result} } is not available to use in the current transaction`);if(n.$kind==="NestedResult"&&!q(this,Yt).has(n.NestedResult[0]))throw new Error(`Result { NestedResult: [${n.NestedResult[0]}, ${n.NestedResult[1]}] } is not available to use in the current transaction`);if(n.$kind==="Input"&&n.Input>=q(this,ne).inputs.length)throw new Error(`Input { Input: ${n.Input} } references an input that does not exist in the current transaction`);return n}),t};Oo=function(t,e){return q(this,jn).push(e),q(this,ne).addInput(t,e)};ko=function(t){return Lu(t)?this.pure(t):Qe(this,We,na).call(this,t)};na=function(t){if(typeof t=="function"){const e=this.add(t);return typeof e=="function"?Qe(this,We,na).call(this,e):Fe(Le,e)}return Fe(Le,t)};Fc=async function(t){if(!t.onlyTransactionKind&&!q(this,ne).sender)throw new Error("Missing transaction sender");await Qe(this,We,Ju).call(this,[...q(this,nr),p1],t)};Ju=async function(t,e){try{const n=s=>{if(s>=t.length)return()=>{};const r=t[s];return async()=>{const i=n(s+1);let o=!1,a=!1;if(await r(q(this,ne),e,async()=>{if(o)throw new Error(`next() was call multiple times in TransactionPlugin ${s}`);o=!0,await i(),a=!0}),!o)throw new Error(`next() was not called in TransactionPlugin ${s}`);if(!a)throw new Error(`next() was not awaited in TransactionPlugin ${s}`)}};await n(0)()}finally{je(this,jn,q(this,ne).inputs.slice()),je(this,Ht,q(this,ne).commands.slice())}};Np=async function(){for(;q(this,un).size>0;){const t=Promise.all(q(this,un));q(this,un).clear(),q(this,un).add(t),await t,q(this,un).delete(t)}};Tp=function(){var o;const t=q(this,ne).commands,e=q(this,ne).inputs,n=q(this,Ht).flat(1/0),s=q(this,jn).flat(1/0);if(n.length!==t.length)throw new Error("Unexpected number of commands found in transaction data");if(s.length!==e.length)throw new Error("Unexpected number of inputs found in transaction data");const r=n.filter(a=>{var c;return((c=a.$Intent)==null?void 0:c.name)!=="AsyncTransactionThunk"});q(this,ne).commands=r,q(this,ne).inputs=s,je(this,Ht,r),je(this,jn,s),je(this,Yt,new Set(r.map((a,c)=>c)));function i(a){var u;const c=t[a];if(((u=c.$Intent)==null?void 0:u.name)==="AsyncTransactionThunk"){const f=c.$Intent.data.result;if(f==null)throw new Error("AsyncTransactionThunk has not been resolved");return i(f.Result)}const l=r.indexOf(c);if(l===-1)throw new Error("Unable to find original index for command");return l}q(this,ne).mapArguments(a=>{if(a.$kind==="Input"){const c=s.indexOf(e[a.Input]);if(c===-1)throw new Error("Input has not been resolved");return{...a,Input:c}}else if(a.$kind==="Result"){const c=i(a.Result);return{...a,Result:c}}else if(a.$kind==="NestedResult"){const c=i(a.NestedResult[0]);return{...a,NestedResult:[c,a.NestedResult[1]]}}return a});for(const[a,c]of t.entries())if(((o=c.$Intent)==null?void 0:o.name)==="AsyncTransactionThunk")try{c.$Intent.data.resultIndex=i(a)}catch{}};let Vr=jp;const k1={"-32700":"ParseError","-32701":"OversizedRequest","-32702":"OversizedResponse","-32600":"InvalidRequest","-32601":"MethodNotFound","-32602":"InvalidParams","-32603":"InternalError","-32604":"ServerBusy","-32000":"CallExecutionFailed","-32001":"UnknownError","-32003":"SubscriptionClosed","-32004":"SubscriptionClosedWithError","-32005":"BatchesNotSupported","-32006":"TooManySubscriptions","-32050":"TransientError","-32002":"TransactionExecutionClientError"};class Cp extends Error{}class Dp extends Cp{constructor(e,n){super(e),this.code=n,this.type=k1[n]??"ServerError"}}class j1 extends Cp{constructor(e,n,s){super(e),this.status=n,this.statusText=s}}var Bp=t=>{throw TypeError(t)},el=(t,e,n)=>e.has(t)||Bp("Cannot "+n),Ue=(t,e,n)=>(el(t,e,"read from private field"),n?n.call(t):e.get(t)),Ps=(t,e,n)=>e.has(t)?Bp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Cr=(t,e,n,s)=>(el(t,e,"write to private field"),e.set(t,n),n),Up=(t,e,n)=>(el(t,e,"access private method"),n),C1=(t,e,n,s)=>({set _(r){Cr(t,e,r)},get _(){return Ue(t,e,s)}}),gs,Si,Zn,Ks,Pi,Ws,sa,Lp,zp;function D1(t){const e=new URL(t);return e.protocol=e.protocol.replace("http","ws"),e.toString()}const B1={WebSocketConstructor:typeof WebSocket<"u"?WebSocket:void 0,callTimeout:3e4,reconnectTimeout:3e3,maxReconnects:5};class U1{constructor(e,n={}){if(Ps(this,sa),Ps(this,gs,0),Ps(this,Si,0),Ps(this,Zn,null),Ps(this,Ks,null),Ps(this,Pi,new Set),Ps(this,Ws,new Map),this.endpoint=e,this.options={...B1,...n},!this.options.WebSocketConstructor)throw new Error("Missing WebSocket constructor");this.endpoint.startsWith("http")&&(this.endpoint=D1(this.endpoint))}async makeRequest(e,n,s){const r=await Up(this,sa,Lp).call(this);return new Promise((i,o)=>{Cr(this,gs,Ue(this,gs)+1),Ue(this,Ws).set(Ue(this,gs),{resolve:i,reject:o,timeout:setTimeout(()=>{Ue(this,Ws).delete(Ue(this,gs)),o(new Error(`Request timeout: ${e}`))},this.options.callTimeout)}),s==null||s.addEventListener("abort",()=>{Ue(this,Ws).delete(Ue(this,gs)),o(s.reason)}),r.send(JSON.stringify({jsonrpc:"2.0",id:Ue(this,gs),method:e,params:n}))}).then(({error:i,result:o})=>{if(i)throw new Dp(i.message,i.code);return o})}async subscribe(e){const n=new L1(e);return Ue(this,Pi).add(n),await n.subscribe(this),()=>n.unsubscribe(this)}}gs=new WeakMap;Si=new WeakMap;Zn=new WeakMap;Ks=new WeakMap;Pi=new WeakMap;Ws=new WeakMap;sa=new WeakSet;Lp=function(){return Ue(this,Ks)?Ue(this,Ks):(Cr(this,Ks,new Promise(t=>{var e;(e=Ue(this,Zn))==null||e.close(),Cr(this,Zn,new this.options.WebSocketConstructor(this.endpoint)),Ue(this,Zn).addEventListener("open",()=>{Cr(this,Si,0),t(Ue(this,Zn))}),Ue(this,Zn).addEventListener("close",()=>{C1(this,Si)._++,Ue(this,Si)<=this.options.maxReconnects&&setTimeout(()=>{Up(this,sa,zp).call(this)},this.options.reconnectTimeout)}),Ue(this,Zn).addEventListener("message",({data:n})=>{let s;try{s=JSON.parse(n)}catch(r){console.error(new Error(`Failed to parse RPC message: ${n}`,{cause:r}));return}if("id"in s&&s.id!=null&&Ue(this,Ws).has(s.id)){const{resolve:r,timeout:i}=Ue(this,Ws).get(s.id);clearTimeout(i),r(s)}else if("params"in s){const{params:r}=s;Ue(this,Pi).forEach(i=>{i.subscriptionId===r.subscription&&r.subscription===i.subscriptionId&&i.onMessage(r.result)})}})})),Ue(this,Ks))};zp=async function(){var t;return(t=Ue(this,Zn))==null||t.close(),Cr(this,Ks,null),Promise.allSettled([...Ue(this,Pi)].map(e=>e.subscribe(this)))};class L1{constructor(e){this.subscriptionId=null,this.subscribed=!1,this.input=e}onMessage(e){this.subscribed&&this.input.onMessage(e)}async unsubscribe(e){const{subscriptionId:n}=this;return this.subscribed=!1,n==null?!1:(this.subscriptionId=null,e.makeRequest(this.input.unsubscribe,[n]))}async subscribe(e){this.subscriptionId=null,this.subscribed=!0;const n=await e.makeRequest(this.input.method,this.input.params,this.input.signal);this.subscribed&&(this.subscriptionId=n)}}var Pp=t=>{throw TypeError(t)},tl=(t,e,n)=>e.has(t)||Pp("Cannot "+n),Gt=(t,e,n)=>(tl(t,e,"read from private field"),n?n.call(t):e.get(t)),uo=(t,e,n)=>e.has(t)?Pp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Kc=(t,e,n,s)=>(tl(t,e,"write to private field"),e.set(t,n),n),z1=(t,e,n)=>(tl(t,e,"access private method"),n),li,an,Mi,Wc,$p;class Gc{constructor(e){uo(this,Wc),uo(this,li,0),uo(this,an),uo(this,Mi),Kc(this,an,e)}fetch(e,n){const s=Gt(this,an).fetch??fetch;if(!s)throw new Error("The current environment does not support fetch, you can provide a fetch implementation in the options for SuiHTTPTransport.");return s(e,n)}async request(e){var r,i;Kc(this,li,Gt(this,li)+1);const n=await this.fetch(((r=Gt(this,an).rpc)==null?void 0:r.url)??Gt(this,an).url,{method:"POST",signal:e.signal,headers:{"Content-Type":"application/json","Client-Sdk-Type":"typescript","Client-Sdk-Version":Sp,"Client-Target-Api-Version":M1,"Client-Request-Method":e.method,...(i=Gt(this,an).rpc)==null?void 0:i.headers},body:JSON.stringify({jsonrpc:"2.0",id:Gt(this,li),method:e.method,params:e.params})});if(!n.ok)throw new j1(`Unexpected status code: ${n.status}`,n.status,n.statusText);const s=await n.json();if("error"in s&&s.error!=null)throw new Dp(s.error.message,s.error.code);return s.result}async subscribe(e){const n=await z1(this,Wc,$p).call(this).subscribe(e);return e.signal&&(e.signal.throwIfAborted(),e.signal.addEventListener("abort",()=>{n()})),async()=>!!await n()}}li=new WeakMap;an=new WeakMap;Mi=new WeakMap;Wc=new WeakSet;$p=function(){var t;if(!Gt(this,Mi)){const e=Gt(this,an).WebSocketConstructor??WebSocket;if(!e)throw new Error("The current environment does not support WebSocket, you can provide a WebSocketConstructor in the options for SuiHTTPTransport.");Kc(this,Mi,new U1(((t=Gt(this,an).websocket)==null?void 0:t.url)??Gt(this,an).url,{WebSocketConstructor:e,...Gt(this,an).websocket}))}return Gt(this,Mi)};function P1(t){switch(t){case"mainnet":return"https://fullnode.mainnet.sui.io:443";case"testnet":return"https://fullnode.testnet.sui.io:443";case"devnet":return"https://fullnode.devnet.sui.io:443";case"localnet":return"http://127.0.0.1:9000";default:throw new Error(`Unknown network: ${t}`)}}class nl{constructor({network:e,base:n,cache:s=(n==null?void 0:n.cache)??new S1}){this.network=e,this.base=n??this,this.cache=s}$extend(...e){return Object.create(this,Object.fromEntries(e.map(n=>[n.name,{value:n.register(this)}])))}}const $1={mainnet:"https://mainnet.mvr.mystenlabs.com",testnet:"https://testnet.mvr.mystenlabs.com"};class Rp extends nl{constructor(e){var n,s,r;super(e),this.core=this,this.mvr=new x1({cache:this.cache.scope("core.mvr"),url:((n=e.mvr)==null?void 0:n.url)??$1[this.network],pageSize:(s=e.mvr)==null?void 0:s.pageSize,overrides:(r=e.mvr)==null?void 0:r.overrides})}async getObject(e){const{objectId:n}=e,{objects:[s]}=await this.getObjects({objectIds:[n],signal:e.signal});if(s instanceof Error)throw s;return{object:s}}async getDynamicField(e){const n=cn.parseFromStr((await this.core.mvr.resolveType({type:e.name.type})).type),s=dp(e.parentId,n,e.name.bcs),{objects:[r]}=await this.getObjects({objectIds:[s],signal:e.signal});if(r instanceof Error)throw r;const i=rr(r.type),o=await r.content;return{dynamicField:{id:r.id,digest:r.digest,version:r.version,type:r.type,previousTransaction:r.previousTransaction,name:{type:typeof i.typeParams[0]=="string"?i.typeParams[0]:Pr(i.typeParams[0]),bcs:e.name.bcs},value:{type:typeof i.typeParams[1]=="string"?i.typeParams[1]:Pr(i.typeParams[1]),bcs:o.slice(Yr+e.name.bcs.length)}}}}async waitForTransaction({signal:e,timeout:n=60*1e3,...s}){const r=e?AbortSignal.any([AbortSignal.timeout(n),e]):AbortSignal.timeout(n),i=new Promise((o,a)=>{r.addEventListener("abort",()=>a(r.reason))});for(i.catch(()=>{});;){r.throwIfAborted();try{return await this.getTransaction({...s,signal:r})}catch{await Promise.race([new Promise(o=>setTimeout(o,2e3)),i])}}}}class R1 extends Error{}class An extends R1{constructor(e,n){super(n),this.code=e}static fromResponse(e,n){switch(e.code){case"notExists":return new An(e.code,`Object ${e.object_id} does not exist`);case"dynamicFieldNotFound":return new An(e.code,`Dynamic field not found for object ${e.parent_object_id}`);case"deleted":return new An(e.code,`Object ${e.object_id} has been deleted`);case"displayError":return new An(e.code,`Display error: ${e.error}`);case"unknown":default:return new An(e.code,`Unknown error while loading object${n?` ${n}`:""}`)}}}function Vp(t){return{...Tt.fromBytes(t).snapshot(),bcs:t}}function Fp(t){const e=oe.TransactionEffects.parse(t);switch(e.$kind){case"V1":return V1({effects:e.V1});case"V2":return F1({bytes:t,effects:e.V2});default:throw new Error(`Unknown transaction effects version: ${e.$kind}`)}}function V1(t){throw new Error("V1 effects are not supported yet")}function F1({bytes:t,effects:e}){const n=e.changedObjects.map(([s,r])=>{var i,o,a,c,l,u;return{id:s,inputState:r.inputState.$kind==="Exist"?"Exists":"DoesNotExist",inputVersion:((i=r.inputState.Exist)==null?void 0:i[0][0])??null,inputDigest:((o=r.inputState.Exist)==null?void 0:o[0][1])??null,inputOwner:((a=r.inputState.Exist)==null?void 0:a[1])??null,outputState:r.outputState.$kind==="NotExist"?"DoesNotExist":r.outputState.$kind,outputVersion:r.outputState.$kind==="PackageWrite"?(c=r.outputState.PackageWrite)==null?void 0:c[0]:r.outputState.ObjectWrite?e.lamportVersion:null,outputDigest:r.outputState.$kind==="PackageWrite"?(l=r.outputState.PackageWrite)==null?void 0:l[1]:((u=r.outputState.ObjectWrite)==null?void 0:u[0])??null,outputOwner:r.outputState.ObjectWrite?r.outputState.ObjectWrite[1]:null,idOperation:r.idOperation.$kind}});return{bcs:t,digest:e.transactionDigest,version:2,status:e.status.$kind==="Success"?{success:!0,error:null}:{success:!1,error:e.status.Failed.error.$kind},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:e.gasObjectIndex===null?null:n[e.gasObjectIndex]??null,eventsDigest:e.eventsDigest,dependencies:e.dependencies,lamportVersion:e.lamportVersion,changedObjects:n,unchangedConsensusObjects:e.unchangedSharedObjects.map(([s,r])=>({kind:r.$kind==="MutateDeleted"?"MutateConsensusStreamEnded":r.$kind==="ReadDeleted"?"ReadConsensusStreamEnded":r.$kind,objectId:s,version:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[0]:r[r.$kind],digest:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[1]:null})),auxiliaryDataDigest:e.auxDataDigest}}var qp=t=>{throw TypeError(t)},Kp=(t,e,n)=>e.has(t)||qp("Cannot "+n),Mt=(t,e,n)=>(Kp(t,e,"read from private field"),n?n.call(t):e.get(t)),q1=(t,e,n)=>e.has(t)?qp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),K1=(t,e,n,s)=>(Kp(t,e,"write to private field"),e.set(t,n),n),st;class W1 extends Rp{constructor({jsonRpcClient:e,mvr:n}){super({network:e.network,base:e,mvr:n}),q1(this,st),K1(this,st,e)}async getObjects(e){const n=Ki(e.objectIds,50),s=[];for(const r of n){const i=await Mt(this,st).multiGetObjects({ids:r,options:{showOwner:!0,showType:!0,showBcs:!0,showPreviousTransaction:!0},signal:e.signal});for(const[o,a]of i.entries())a.error?s.push(An.fromResponse(a.error,r[o])):s.push(xd(a.data))}return{objects:s}}async getOwnedObjects(e){const n=await Mt(this,st).getOwnedObjects({owner:e.address,limit:e.limit,cursor:e.cursor,options:{showOwner:!0,showType:!0,showBcs:!0,showPreviousTransaction:!0},filter:e.type?{StructType:e.type}:null,signal:e.signal});return{objects:n.data.map(s=>{if(s.error)throw An.fromResponse(s.error);return xd(s.data)}),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getCoins(e){const n=await Mt(this,st).getCoins({owner:e.address,coinType:e.coinType,limit:e.limit,cursor:e.cursor,signal:e.signal});return{objects:n.data.map(s=>({id:s.coinObjectId,version:s.version,digest:s.digest,balance:s.balance,type:`0x2::coin::Coin<${s.coinType}>`,content:Promise.resolve(Y1.serialize({id:s.coinObjectId,balance:{value:s.balance}}).toBytes()),owner:{$kind:"ObjectOwner",ObjectOwner:e.address},previousTransaction:s.previousTransaction})),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getBalance(e){const n=await Mt(this,st).getBalance({owner:e.address,coinType:e.coinType,signal:e.signal});return{balance:{coinType:n.coinType,balance:n.totalBalance}}}async getAllBalances(e){return{balances:(await Mt(this,st).getAllBalances({owner:e.address,signal:e.signal})).map(s=>({coinType:s.coinType,balance:s.totalBalance})),hasNextPage:!1,cursor:null}}async getTransaction(e){const n=await Mt(this,st).getTransactionBlock({digest:e.digest,options:{showRawInput:!0,showObjectChanges:!0,showRawEffects:!0,showEvents:!0,showEffects:!0,showBalanceChanges:!0},signal:e.signal});return{transaction:_d(n)}}async executeTransaction(e){const n=await Mt(this,st).executeTransactionBlock({transactionBlock:e.transaction,signature:e.signatures,options:{showRawEffects:!0,showEvents:!0,showObjectChanges:!0,showRawInput:!0,showEffects:!0,showBalanceChanges:!0},signal:e.signal});return{transaction:_d(n)}}async dryRunTransaction(e){const n=Vr.from(e.transaction),s=await Mt(this,st).dryRunTransactionBlock({transactionBlock:e.transaction,signal:e.signal}),{effects:r,objectTypes:i}=G1({effects:s.effects,objectChanges:s.objectChanges});return{transaction:{digest:await n.getDigest(),epoch:null,effects:r,objectTypes:Promise.resolve(i),signatures:[],transaction:Vp(e.transaction),balanceChanges:s.balanceChanges.map(o=>({coinType:o.coinType,address:Wp(o.owner),amount:o.amount}))}}}async getReferenceGasPrice(e){const n=await Mt(this,st).getReferenceGasPrice({signal:e==null?void 0:e.signal});return{referenceGasPrice:String(n)}}async getDynamicFields(e){const n=await Mt(this,st).getDynamicFields({parentId:e.parentId,limit:e.limit,cursor:e.cursor});return{dynamicFields:n.data.map(s=>({id:s.objectId,type:s.objectType,name:{type:s.name.type,bcs:Ee(s.bcsName)}})),hasNextPage:n.hasNextPage,cursor:n.nextCursor}}async verifyZkLoginSignature(e){const n=await Mt(this,st).verifyZkLoginSignature({bytes:e.bytes,signature:e.signature,intentScope:e.intentScope,author:e.author});return{success:n.success,errors:n.errors}}async defaultNameServiceName(e){return{data:{name:(await Mt(this,st).resolveNameServiceNames(e)).data[0]}}}resolveTransactionPlugin(){return bp(Mt(this,st))}async getMoveFunction(e){const n=await Mt(this,st).getNormalizedMoveFunction({package:(await this.mvr.resolvePackage({package:e.packageId})).package,module:e.moduleName,function:e.name});return{function:{packageId:de(e.packageId),moduleName:e.moduleName,name:e.name,visibility:Q1(n.visibility),isEntry:n.isEntry,typeParameters:n.typeParameters.map(s=>({isPhantom:!1,constraints:Z1(s)})),parameters:n.parameters.map(s=>Ad(s)),returns:n.return.map(s=>Ad(s))}}}}st=new WeakMap;function xd(t){var e;return{id:t.objectId,version:t.version,digest:t.digest,type:t.type,content:Promise.resolve(((e=t.bcs)==null?void 0:e.dataType)==="moveObject"?Ee(t.bcs.bcsBytes):new Uint8Array),owner:Mr(t.owner),previousTransaction:t.previousTransaction??null}}function Mr(t){if(t==="Immutable")return{$kind:"Immutable",Immutable:!0};if("ConsensusAddressOwner"in t)return{$kind:"ConsensusAddressOwner",ConsensusAddressOwner:{owner:t.ConsensusAddressOwner.owner,startVersion:t.ConsensusAddressOwner.start_version}};if("AddressOwner"in t)return{$kind:"AddressOwner",AddressOwner:t.AddressOwner};if("ObjectOwner"in t)return{$kind:"ObjectOwner",ObjectOwner:t.ObjectOwner};if("Shared"in t)return{$kind:"Shared",Shared:{initialSharedVersion:t.Shared.initial_shared_version}};throw new Error(`Unknown owner type: ${JSON.stringify(t)}`)}function Wp(t){if(t==="Immutable")return null;if("ConsensusAddressOwner"in t)return t.ConsensusAddressOwner.owner;if("AddressOwner"in t)return t.AddressOwner;if("ObjectOwner"in t)return t.ObjectOwner;if("Shared"in t)return null;throw new Error(`Unknown owner type: ${JSON.stringify(t)}`)}function _d(t){var i,o,a;const e=oe.SenderSignedData.parse(Ee(t.rawTransaction))[0],n={};(i=t.objectChanges)==null||i.forEach(c=>{c.type!=="published"&&(n[c.objectId]=c.objectType)});const s=oe.TransactionData.serialize(e.intentMessage.value).toBytes(),r=Tt.restore({version:2,sender:e.intentMessage.value.V1.sender,expiration:e.intentMessage.value.V1.expiration,gasData:e.intentMessage.value.V1.gasData,inputs:e.intentMessage.value.V1.kind.ProgrammableTransaction.inputs,commands:e.intentMessage.value.V1.kind.ProgrammableTransaction.commands});return{digest:t.digest,epoch:((o=t.effects)==null?void 0:o.executedEpoch)??null,effects:Fp(new Uint8Array(t.rawEffects)),objectTypes:Promise.resolve(n),transaction:{...r,bcs:s},signatures:e.txSignatures,balanceChanges:((a=t.balanceChanges)==null?void 0:a.map(c=>({coinType:c.coinType,address:Wp(c.owner),amount:c.amount})))??[]}}function G1({bytes:t,effects:e,objectChanges:n}){var o;const s=[],r=[],i={};return n==null||n.forEach(a=>{var c,l,u,f;switch(a.type){case"published":s.push({id:a.packageId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"PackageWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:null,idOperation:"Created"});break;case"transferred":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:a.digest,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:Mr(a.recipient),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"mutated":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.previousVersion,inputDigest:null,inputOwner:Mr(a.owner),outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:Mr(a.owner),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"deleted":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:((l=(c=e.deleted)==null?void 0:c.find(d=>d.objectId===a.objectId))==null?void 0:l.digest)??null,inputOwner:null,outputState:"DoesNotExist",outputVersion:null,outputDigest:null,outputOwner:null,idOperation:"Deleted"}),i[a.objectId]=a.objectType;break;case"wrapped":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:null,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:((f=(u=e.wrapped)==null?void 0:u.find(d=>d.objectId===a.objectId))==null?void 0:f.digest)??null,outputOwner:{$kind:"ObjectOwner",ObjectOwner:a.sender},idOperation:"None"}),i[a.objectId]=a.objectType;break;case"created":s.push({id:a.objectId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:Mr(a.owner),idOperation:"Created"}),i[a.objectId]=a.objectType;break}}),{objectTypes:i,effects:{bcs:t??null,digest:e.transactionDigest,version:2,status:e.status.status==="success"?{success:!0,error:null}:{success:!1,error:e.status.error},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:{id:(o=e.gasObject)==null?void 0:o.reference.objectId,inputState:"Exists",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:e.gasObject.reference.version,outputDigest:e.gasObject.reference.digest,outputOwner:Mr(e.gasObject.owner),idOperation:"None"},eventsDigest:e.eventsDigest??null,dependencies:e.dependencies??[],lamportVersion:e.gasObject.reference.version,changedObjects:s,unchangedConsensusObjects:r,auxiliaryDataDigest:null}}}const H1=oe.struct("Balance",{value:oe.u64()}),Y1=oe.struct("Coin",{id:oe.Address,balance:H1});function Ad(t){if(typeof t!="string"){if("Reference"in t)return{reference:"immutable",body:Ei(t.Reference)};if("MutableReference"in t)return{reference:"mutable",body:Ei(t.MutableReference)}}return{reference:null,body:Ei(t)}}function Ei(t){switch(t){case"Address":return{$kind:"address"};case"Bool":return{$kind:"bool"};case"U8":return{$kind:"u8"};case"U16":return{$kind:"u16"};case"U32":return{$kind:"u32"};case"U64":return{$kind:"u64"};case"U128":return{$kind:"u128"};case"U256":return{$kind:"u256"}}if(typeof t=="string")throw new Error(`Unknown type: ${t}`);if("Vector"in t)return{$kind:"vector",vector:Ei(t.Vector)};if("Struct"in t)return{$kind:"datatype",datatype:{typeName:`${de(t.Struct.address)}::${t.Struct.module}::${t.Struct.name}`,typeParameters:t.Struct.typeArguments.map(e=>Ei(e))}};if("TypeParameter"in t)return{$kind:"typeParameter",index:t.TypeParameter};throw new Error(`Unknown type: ${JSON.stringify(t)}`)}function Z1(t){return t.abilities.map(e=>{switch(e){case"Copy":return"copy";case"Drop":return"drop";case"Store":return"store";case"Key":return"key";default:return"unknown"}})}function Q1(t){switch(t){case"Public":return"public";case"Private":return"private";case"Friend":return"friend";default:return"unknown"}}const X1=Symbol.for("@mysten/SuiClient");class Hc extends nl{constructor(e){super({network:e.network??"unknown"}),this.jsonRpc=this,this.transport=e.transport??new Gc({url:e.url}),this.core=new W1({jsonRpcClient:this,mvr:e.mvr})}get[X1](){return!0}async getRpcApiVersion({signal:e}={}){return(await this.transport.request({method:"rpc.discover",params:[],signal:e})).info.version}async getCoins({coinType:e,owner:n,cursor:s,limit:r,signal:i}){if(!n||!on(de(n)))throw new Error("Invalid Sui address");return e&&dt(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getCoins",params:[n,e,s,r],signal:i})}async getAllCoins(e){if(!e.owner||!on(de(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllCoins",params:[e.owner,e.cursor,e.limit],signal:e.signal})}async getBalance({owner:e,coinType:n,signal:s}){if(!e||!on(de(e)))throw new Error("Invalid Sui address");return n&&dt(n)&&(n=(await this.core.mvr.resolveType({type:n})).type),await this.transport.request({method:"suix_getBalance",params:[e,n],signal:s})}async getAllBalances(e){if(!e.owner||!on(de(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllBalances",params:[e.owner],signal:e.signal})}async getCoinMetadata({coinType:e,signal:n}){return e&&dt(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getCoinMetadata",params:[e],signal:n})}async getTotalSupply({coinType:e,signal:n}){return e&&dt(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getTotalSupply",params:[e],signal:n})}async call(e,n,{signal:s}={}){return await this.transport.request({method:e,params:n,signal:s})}async getMoveFunctionArgTypes({package:e,module:n,function:s,signal:r}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getMoveFunctionArgTypes",params:[e,n,s],signal:r})}async getNormalizedMoveModulesByPackage({package:e,signal:n}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveModulesByPackage",params:[e],signal:n})}async getNormalizedMoveModule({package:e,module:n,signal:s}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveModule",params:[e,n],signal:s})}async getNormalizedMoveFunction({package:e,module:n,function:s,signal:r}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveFunction",params:[e,n,s],signal:r})}async getNormalizedMoveStruct({package:e,module:n,struct:s,signal:r}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveStruct",params:[e,n,s],signal:r})}async getOwnedObjects(e){if(!e.owner||!on(de(e.owner)))throw new Error("Invalid Sui address");const n=e.filter?{...e.filter}:void 0;return n&&"MoveModule"in n&&Pt(n.MoveModule.package)?n.MoveModule={module:n.MoveModule.module,package:(await this.core.mvr.resolvePackage({package:n.MoveModule.package})).package}:n&&"StructType"in n&&dt(n.StructType)&&(n.StructType=(await this.core.mvr.resolveType({type:n.StructType})).type),await this.transport.request({method:"suix_getOwnedObjects",params:[e.owner,{filter:n,options:e.options},e.cursor,e.limit],signal:e.signal})}async getObject(e){if(!e.id||!io(Nn(e.id)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"sui_getObject",params:[e.id,e.options],signal:e.signal})}async tryGetPastObject(e){return await this.transport.request({method:"sui_tryGetPastObject",params:[e.id,e.version,e.options],signal:e.signal})}async multiGetObjects(e){if(e.ids.forEach(s=>{if(!s||!io(Nn(s)))throw new Error(`Invalid Sui Object id ${s}`)}),e.ids.length!==new Set(e.ids).size)throw new Error(`Duplicate object ids in batch call ${e.ids}`);return await this.transport.request({method:"sui_multiGetObjects",params:[e.ids,e.options],signal:e.signal})}async queryTransactionBlocks({filter:e,options:n,cursor:s,limit:r,order:i,signal:o}){return e&&"MoveFunction"in e&&Pt(e.MoveFunction.package)&&(e={...e,MoveFunction:{package:(await this.core.mvr.resolvePackage({package:e.MoveFunction.package})).package}}),await this.transport.request({method:"suix_queryTransactionBlocks",params:[{filter:e,options:n},s,r,(i||"descending")==="descending"],signal:o})}async getTransactionBlock(e){if(!id(e.digest))throw new Error("Invalid Transaction digest");return await this.transport.request({method:"sui_getTransactionBlock",params:[e.digest,e.options],signal:e.signal})}async multiGetTransactionBlocks(e){if(e.digests.forEach(s=>{if(!id(s))throw new Error(`Invalid Transaction digest ${s}`)}),e.digests.length!==new Set(e.digests).size)throw new Error(`Duplicate digests in batch call ${e.digests}`);return await this.transport.request({method:"sui_multiGetTransactionBlocks",params:[e.digests,e.options],signal:e.signal})}async executeTransactionBlock({transactionBlock:e,signature:n,options:s,requestType:r,signal:i}){const o=await this.transport.request({method:"sui_executeTransactionBlock",params:[typeof e=="string"?e:Te(e),Array.isArray(n)?n:[n],s],signal:i});if(r==="WaitForLocalExecution")try{await this.waitForTransaction({digest:o.digest})}catch{}return o}async signAndExecuteTransaction({transaction:e,signer:n,...s}){let r;e instanceof Uint8Array?r=e:(e.setSenderIfNotSet(n.toSuiAddress()),r=await e.build({client:this}));const{signature:i,bytes:o}=await n.signTransaction(r);return this.executeTransactionBlock({transactionBlock:o,signature:i,...s})}async getTotalTransactionBlocks({signal:e}={}){const n=await this.transport.request({method:"sui_getTotalTransactionBlocks",params:[],signal:e});return BigInt(n)}async getReferenceGasPrice({signal:e}={}){const n=await this.transport.request({method:"suix_getReferenceGasPrice",params:[],signal:e});return BigInt(n)}async getStakes(e){if(!e.owner||!on(de(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getStakes",params:[e.owner],signal:e.signal})}async getStakesByIds(e){return e.stakedSuiIds.forEach(n=>{if(!n||!io(Nn(n)))throw new Error(`Invalid Sui Stake id ${n}`)}),await this.transport.request({method:"suix_getStakesByIds",params:[e.stakedSuiIds],signal:e.signal})}async getLatestSuiSystemState({signal:e}={}){return await this.transport.request({method:"suix_getLatestSuiSystemState",params:[],signal:e})}async queryEvents({query:e,cursor:n,limit:s,order:r,signal:i}){return e&&"MoveEventType"in e&&dt(e.MoveEventType)&&(e={...e,MoveEventType:(await this.core.mvr.resolveType({type:e.MoveEventType})).type}),e&&"MoveEventModule"in e&&Pt(e.MoveEventModule.package)&&(e={...e,MoveEventModule:{module:e.MoveEventModule.module,package:(await this.core.mvr.resolvePackage({package:e.MoveEventModule.package})).package}}),"MoveModule"in e&&Pt(e.MoveModule.package)&&(e={...e,MoveModule:{module:e.MoveModule.module,package:(await this.core.mvr.resolvePackage({package:e.MoveModule.package})).package}}),await this.transport.request({method:"suix_queryEvents",params:[e,n,s,(r||"descending")==="descending"],signal:i})}async subscribeEvent(e){return this.transport.subscribe({method:"suix_subscribeEvent",unsubscribe:"suix_unsubscribeEvent",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async subscribeTransaction(e){return this.transport.subscribe({method:"suix_subscribeTransaction",unsubscribe:"suix_unsubscribeTransaction",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async devInspectTransactionBlock(e){var s,r;let n;if(kp(e.transactionBlock))e.transactionBlock.setSenderIfNotSet(e.sender),n=Te(await e.transactionBlock.build({client:this,onlyTransactionKind:!0}));else if(typeof e.transactionBlock=="string")n=e.transactionBlock;else if(e.transactionBlock instanceof Uint8Array)n=Te(e.transactionBlock);else throw new Error("Unknown transaction block format.");return(s=e.signal)==null||s.throwIfAborted(),await this.transport.request({method:"sui_devInspectTransactionBlock",params:[e.sender,n,(r=e.gasPrice)==null?void 0:r.toString(),e.epoch],signal:e.signal})}async dryRunTransactionBlock(e){return await this.transport.request({method:"sui_dryRunTransactionBlock",params:[typeof e.transactionBlock=="string"?e.transactionBlock:Te(e.transactionBlock)]})}async getDynamicFields(e){if(!e.parentId||!io(Nn(e.parentId)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"suix_getDynamicFields",params:[e.parentId,e.cursor,e.limit],signal:e.signal})}async getDynamicFieldObject(e){return await this.transport.request({method:"suix_getDynamicFieldObject",params:[e.parentId,e.name],signal:e.signal})}async getLatestCheckpointSequenceNumber({signal:e}={}){const n=await this.transport.request({method:"sui_getLatestCheckpointSequenceNumber",params:[],signal:e});return String(n)}async getCheckpoint(e){return await this.transport.request({method:"sui_getCheckpoint",params:[e.id],signal:e.signal})}async getCheckpoints(e){return await this.transport.request({method:"sui_getCheckpoints",params:[e.cursor,e==null?void 0:e.limit,e.descendingOrder],signal:e.signal})}async getCommitteeInfo(e){return await this.transport.request({method:"suix_getCommitteeInfo",params:[e==null?void 0:e.epoch],signal:e==null?void 0:e.signal})}async getNetworkMetrics({signal:e}={}){return await this.transport.request({method:"suix_getNetworkMetrics",params:[],signal:e})}async getAddressMetrics({signal:e}={}){return await this.transport.request({method:"suix_getLatestAddressMetrics",params:[],signal:e})}async getEpochMetrics(e){return await this.transport.request({method:"suix_getEpochMetrics",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getAllEpochAddressMetrics(e){return await this.transport.request({method:"suix_getAllEpochAddressMetrics",params:[e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getEpochs(e){return await this.transport.request({method:"suix_getEpochs",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getMoveCallMetrics({signal:e}={}){return await this.transport.request({method:"suix_getMoveCallMetrics",params:[],signal:e})}async getCurrentEpoch({signal:e}={}){return await this.transport.request({method:"suix_getCurrentEpoch",params:[],signal:e})}async getValidatorsApy({signal:e}={}){return await this.transport.request({method:"suix_getValidatorsApy",params:[],signal:e})}async getChainIdentifier({signal:e}={}){const n=await this.getCheckpoint({id:"0",signal:e}),s=Di(n.digest);return Ts(s.slice(0,4))}async resolveNameServiceAddress(e){return await this.transport.request({method:"suix_resolveNameServiceAddress",params:[e.name],signal:e.signal})}async resolveNameServiceNames({format:e="dot",...n}){const{nextCursor:s,hasNextPage:r,data:i}=await this.transport.request({method:"suix_resolveNameServiceNames",params:[n.address,n.cursor,n.limit],signal:n.signal});return{hasNextPage:r,nextCursor:s,data:i.map(o=>gm(o,e))}}async getProtocolConfig(e){return await this.transport.request({method:"sui_getProtocolConfig",params:[e==null?void 0:e.version],signal:e==null?void 0:e.signal})}async verifyZkLoginSignature(e){return await this.transport.request({method:"sui_verifyZkLoginSignature",params:[e.bytes,e.signature,e.intentScope,e.author],signal:e.signal})}async waitForTransaction({signal:e,timeout:n=60*1e3,pollInterval:s=2*1e3,...r}){const i=AbortSignal.timeout(n),o=new Promise((a,c)=>{i.addEventListener("abort",()=>c(i.reason))});for(o.catch(()=>{});!i.aborted;){e==null||e.throwIfAborted();try{return await this.getTransactionBlock(r)}catch{await Promise.race([new Promise(a=>setTimeout(a,s)),o])}}throw i.throwIfAborted(),new Error("Unexpected error while waiting for transaction block.")}}function J1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sc,Nd;function ev(){if(Nd)return sc;Nd=1;var t=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return sc=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}(),sc}const tv="1.0.35",nv={version:tv};var sv=nv.version,Vs;if(typeof globalThis=="object")Vs=globalThis;else try{Vs=ev()}catch{}finally{if(!Vs&&typeof window<"u"&&(Vs=window),!Vs)throw new Error("Could not determine global this")}var $i=Vs.WebSocket||Vs.MozWebSocket,rv=sv;function Gp(t,e){var n;return e?n=new $i(t,e):n=new $i(t),n}$i&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(t){Object.defineProperty(Gp,t,{get:function(){return $i[t]}})});var iv={w3cwebsocket:$i?Gp:null,version:rv};const ov=J1(iv),av=ov.w3cwebsocket;class xt extends Bn{static txInput(e,n,s=null){return n&&n.Pure&&n.Pure.bytes?e.pure(xt.pureInputToBytes(n)):e.pure(xt.pureInputToBytes(xt.pureInput(n,s)))}static pureInput(e,n){let s=e;if(s.toLowerCase()=="address"&&(s="Address"),oe[s])return typeof oe[s]=="object"?Ot.Pure(oe[s].serialize(n)):Ot.Pure(oe[s]().serialize(n));{const r=(""+s).split("<");if(r[0]=="vector"&&r[1]){const i=r[1].split(">");if(i[0]&&oe[i[0]])return Ot.Pure(oe.vector(oe[i[0]]()).serialize(n))}}}static pureInputToBytes(e){return Ee(e.Pure.bytes)}static normalizeSuiAddress(e){return de(e)}static WebSocketConstructor(){return av}static suiClientForRPC(e={}){const n=e.providerName||e.chainname||e.chain;delete e.providerName,delete e.chainName,delete e.chain,e.WebSocketConstructor=xt.WebSocketConstructor();const s=new Gc(e),r=new Hc({transport:s});return r.providerName=n,r}static suiClientFor(e){return new Hc({transport:new Gc({url:P1(e),WebSocketConstructor:xt.WebSocketConstructor()})})}static normalizeClient(e){let n=null,s=null;if(e)if(e=="local"||e.constructor&&e.constructor.name&&e.constructor.name=="SuiLocalTestValidator")e=="local"?(n=xt.suiClientFor("localnet"),s="sui:localnet"):(s=e.providerName,n=e.client);else if(e=="test"||e=="testnet")n=xt.suiClientFor("testnet"),s="sui:testnet";else if(e=="dev"||e=="devnet")n=xt.suiClientFor("devnet"),s="sui:devnet";else if(e=="main"||e=="mainnet")n=xt.suiClientFor("mainnet"),s="sui:mainnet";else if(e&&e.constructor&&(e.endpoint||e.transport)){n=e;let r="";e.endpoint?r=e.endpoint:e.transport&&e.transport.websocketClient&&e.transport.websocketClient.endpoint&&(r=e.transport.websocketClient.endpoint),e.providerName?(s=e.providerName,["devnet","mainnet","testnet","localnet"].indexOf(e.providerName)!=-1&&(s="sui:"+e.providerName)):r.indexOf("devnet")!==-1?s="sui:devnet":r.indexOf("testnet")!==-1?s="sui:testnet":r.indexOf("mainnet")!==-1?s="sui:mainnet":r.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=r.split("//")[1]}else e&&e.connection&&e.connection.fullnode&&(n=e,e.connection.fullnode.indexOf("devnet")!==-1?s="sui:devnet":e.connection.fullnode.indexOf("testnet")!==-1?s="sui:testnet":e.connection.fullnode.indexOf("mainnet")!==-1?s="sui:mainnet":e.connection.fullnode.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=e.connection.fullnode);return n?(n.providerName=s,n):null}}class cr extends Bn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._id=e.id||null,this._version=e.version||null,this._type=e.type||null,this._fields={},this._display={},this._owner=null,this._localProperties={},this._isDeleted=!1,e.objectChange&&this.tryToFillDataFromObjectChange(e.objectChange),this._constructedAt=new Date}get constructedAt(){return this._constructedAt}static idsEqual(e,n){return de(e)===de(n)}get isDeleted(){return this._isDeleted}get isShared(){return this._owner&&this._owner.Shared}get isImmutable(){return this._owner&&this._owner=="Immutable"}isOwnedBy(e){let n=e;return n.id&&(n=n.id),!!(this._owner&&this._owner.AddressOwner&&this._owner.AddressOwner==n)}markAsDeleted(){this._isDeleted=!0}get id(){return this._id}get type(){return this._type}get typeName(){return this._type?(""+this._type).split("<")[0].split("::").pop():null}idEquals(e){if(!e)return!1;const n=this.address;return!!(n&&n===de(e))}get address(){try{return de(this._id)}catch{return null}}get fields(){return this._fields}get display(){return this._display}get localProperties(){return this._localProperties}get version(){return this._version}async getPastObject(e=null){e||(e=this._version-BigInt(1)),e=Number(e);const n=await this._suiMaster._client.tryGetPastObject({version:e,id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});return n&&n.details&&n.details.objectId?new cr({suiMaster:this._suiMaster,debug:this._debug,objectChange:n.details}):null}async queryTransactionBlocks(e={}){const n={filter:{InputObject:this.address},limit:e.limit||10,options:{showInput:!0,showEffects:!0,showEvents:!0,showObjectChanges:!0,showBalanceChanges:!0,showContent:!0,showOwner:!0,showDisplay:!0}},s=new As({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"queryTransactionBlocks",order:e.order});return await s.fetch(),s}async getDynamicFields(e={}){const n={parentId:this.address,limit:e.limit||50},s=new As({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"getDynamicFields",order:e.order});return await s.fetch(),s}async fetchFields(){const e=await this._suiMaster._client.getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});e&&e.data&&this.tryToFillDataFromObjectChange(e.data)}replaceWithSuiObjectIfNeeded(e){return!e||!e.version||!e.id||!this.idEquals(e.id)?!1:!this.version||e.version>this.version?(this._type=e.type,this._owner=e._owner,this._fields=e._fields,this._display=e._display,this._version=e.version,e.isDeleted&&this.markAsDeleted(),!0):!1}tryToFillDataFromObjectChange(e){var n,s,r,i;if(!e.objectId&&e.data&&e.data.objectId&&(e=e.data),e.type&&e.type=="deleted"&&this.markAsDeleted(),e.objectId){if(!this._id)this._id=e.objectId;else if(!this.idEquals(e.objectId))throw new Error("Trying to fill from different object");e.type&&!this._type&&(this._type=e.type)}if(e.version&&(this._version=BigInt(e.version)),e.objectType&&(this._type=`${e.objectType}`),(n=e==null?void 0:e.content)!=null&&n.fields)for(const o in(s=e==null?void 0:e.content)==null?void 0:s.fields)o!=="id"&&(this._fields[o]=e.content.fields[o]);if((r=e==null?void 0:e.display)!=null&&r.data)for(const o in(i=e==null?void 0:e.display)==null?void 0:i.data)this._display[o]=e.display.data[o];e.owner&&(this._owner=e.owner)}}class cv extends Bn{constructor(e={}){if(super(e),this._package=e.package,!this._package)throw new Error("package is required for SuiPackageModule");if(this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPackageModule");if(this._moduleName=e.moduleName,!this._moduleName)throw new Error("moduleName is required for SuiPackageModule");this._checkedOnChain=!1,this._normalizedMoveModule={},this._unsubscribeFunction=null}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async getNormalizedMoveFunction(e){const n=await this.getNormalizedPackageAddress();return await this._suiMaster._client.getMoveFunctionArgTypes({package:n,module:this._moduleName,function:e})}async subscribeEvents(){this.log("subscribing to events of module",this._moduleName);const e=await this.getNormalizedPackageAddress(),n=s=>{const r=new ku({suiMaster:this._suiMaster,debug:this._debug,data:s}),i=r.typeName;this.log("got event",i),this.emit(i,r),this.emit("event",r,!0)};this._unsubscribeFunction=await this._suiMaster._client.subscribeEvent({filter:{MoveModule:{package:e,module:this._moduleName}},onMessage:n})}async unsubscribeEvents(){return this._unsubscribeFunction?(await this._unsubscribeFunction(),this._unsubscribeFunction=null,!0):!1}get objectStorage(){return this._suiMaster.objectStorage}get objects(){return this.objectStorage._objects}get objectsArray(){return this.objectStorage.asArray()}pushObject(e){let n=`${e}`;e.address&&(n=e.address);try{if(n=de(n),!this.objectStorage.byAddress(n))if(e.address)this.objectStorage.push(e);else{const s=new cr({suiMaster:this._suiMaster,debug:this._debug,id:n});this.objectStorage.push(s),this.emit("added",s)}return this.objectStorage.byAddress(n)}catch(s){this.log("error",s)}return null}async moveCall(e,n,s){await this._package.checkOnChainIfNeeded();let r=null;if(n.tx)r=n.tx;else{r=new Vr;const u=[];for(let f of n)if(f&&f.type&&f.amount){const d=this._suiMaster.address,p=await(await this._suiMaster.suiCoins.get(f.type)).coinOfAmountToTxCoin(r,d,f.amount);u.push(p)}else if(f&&Array.isArray(f)&&f.length==1&&f[0].type&&f[0].amount){const d=this._suiMaster.address,h=await this._suiMaster.suiCoins.get(f[0].type),p=await h.coinOfAmountToTxCoin(r,d,f[0].amount);u.push(r.makeMoveVec({type:h.coinObjectType,elements:[p]}))}else typeof f=="string"&&f.indexOf("0x")===0?u.push(r.object(f)):f&&f.Pure&&f.Pure.bytes?u.push(this._suiMaster.utils.txInput(r,f)):u.push(r.pure(f));r.moveCall({target:`${this._package.address}::${this._moduleName}::${e}`,arguments:u,typeArguments:s})}const i=await this._suiMaster.signAndExecuteTransaction({transaction:r,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0,showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),o=new this._suiMaster.SuiTransaction({suiMaster:this._suiMaster,debug:this._debug,data:i});o.status;const a=[],c=[],l=[];for(const u of o.results.objects)this.objectStorage.byAddress(u.id)?this.objectStorage.byAddress(u.id).replaceWithSuiObjectIfNeeded(u):(this.objectStorage.push(u),this.emit("added",u));for(const u of o.results.deleted)this.objectStorage.byAddress(u.id)&&(this.objectStorage.byAddress(u.id).markAsDeleted(),l.push(this.objectStorage.byAddress(u.id)),this.emit("deleted",this.objectStorage.byAddress(u.id)));await this.fetchObjects();for(const u of o.results.created)if(this.objectStorage.byAddress(u.id))a.push(this.objectStorage.byAddress(u.id)),this.emit("created",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.results.mutated)if(this.objectStorage.byAddress(u.id))c.push(this.objectStorage.byAddress(u.id)),this.emit("mutated",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.events)this.emit(u.typeName,u);return o}async getOwnedObjects(e={}){const n=await this.getNormalizedPackageAddress(),s={owner:this._suiMaster.address,filter:{MoveModule:{package:n,module:this._moduleName}},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};e.typeName&&(s.filter={StructType:`${n}::${this._moduleName}::${e.typeName}`});const r=new As({debug:this._debug,suiMaster:this._suiMaster,params:s,method:"getOwnedObjects",order:e.order});return await r.fetch(),r}async fetchEvents(e={}){const n={};let s=await this.getNormalizedPackageAddress();e.eventTypeName?(n.MoveEventType=`${s}::${this._moduleName}::${e.eventTypeName}`,this.log("queriying for events of type: ",n.MoveEventType)):(n.MoveModule={package:s,module:this._moduleName},this.log("queriying for all events of module: ",this._moduleName));const r={descending_order:!1,query:n,limit:e.limit||50},i=new As({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"queryEvents",order:e.order});return await i.fetch(),i}async fetchObjects(){return await this.objectStorage.fetchObjects()}async getNormalizedPackageAddress(){if(await this.checkOnChainIfNeeded(),this._normalizedMoveModule&&this._normalizedMoveModule.address)return this._normalizedMoveModule.address}async checkOnChainIfNeeded(){if(this._checkedOnChain)return!0;const e=await this._suiMaster._client.getNormalizedMoveModule({package:this._package.address,module:this._moduleName});return e&&e.address&&(this._normalizedMoveModule=e,this._checkedOnChain=!0),!0}}class uv extends cr{constructor(e={}){super(e),this._path=e.path,this._id=e.id||null,this._expectedModules=e.modules||null,this._isPublished=!1,this._publishedVersion=null,this._upgradeCap=null,this._upgradeCapId=null,this._isBuilt=!1,this._builtModules=null,this._builtDependencies=null,this._builtDigest=null,this._modules={}}get objectStorage(){return this._suiMaster.objectStorage}get modules(){return this._modules}async getModule(e){return await this.checkOnChainIfNeeded(),this._modules[e]}get isBuilt(){return this._isBuilt}get version(){return Number(this._publishedVersion)}async isOnChain(){try{await this.checkOnChainIfNeeded()}catch(e){console.error(e)}return!!(this._publishedVersion&&this._isPublished&&this.address)}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async moveCall(e,n,s,r){return await this.checkOnChainIfNeeded(),await this.modules[e].moveCall(n,s,r)}async fetchEvents(e,n={}){return await this.checkOnChainIfNeeded(),await this.modules[e].fetchEvents(n)}async checkOnChainIfNeeded(){if(this._isPublished)return!0;if(!this._id&&!this._expectedModules&&this._path&&(this._expectedModules=await this.getModulesNamesFromBuild()),!this._id&&this._expectedModules&&(this._id=await this.tryToFindByExpectedModules()),!this._id)throw new Error("no package id, nothing to check. Maybe lets start with .publish() ?");if(await this.getVersionOnChain())return this._isPublished=!0,!0}async tryToFindByExpectedModules(){this.log("trying to find Package by expected modules in its content...");const e=[];let n=this._expectedModules;Array.isArray(this._expectedModules)||(n=(""+this._expectedModules).split(",")),n.forEach(u=>{u.trim()&&e.indexOf(u.trim())===-1&&e.push(u.trim())}),this.log("looking for modules",e);const s=[],r={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};await new As({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"getOwnedObjects"}).forEach(u=>{const f=u.fields.package;f&&s.indexOf(f)===-1&&s.push(f)});const o=await this._suiMaster._client.multiGetObjects({ids:s,options:{showType:!0,showContent:!0}});let a=BigInt(0),c=null,l=0;for(const u of o){let f=!0;e.forEach(h=>{var p,y;(y=(p=u==null?void 0:u.data)==null?void 0:p.content)!=null&&y.disassembled[h]||(f=!1)});const d=BigInt(u.data.version);f&&l++,d>a&&(a=d,c=u.data.objectId)}return this.log("found packages with needed modules",l),c?(this.log("the one with most recent Publisher version is",c,"version",a),c):null}async getVersionOnChain(){var s,r,i,o,a,c;this.log("geting package version previously published on chain...");const n=await(await this._suiMaster.getClient()).getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});if((s=n==null?void 0:n.data)!=null&&s.version&&(this._publishedVersion=BigInt((r=n==null?void 0:n.data)==null?void 0:r.version),this._isPublished=!0),(o=(i=n==null?void 0:n.data)==null?void 0:i.content)!=null&&o.disassembled)for(const l in(c=(a=n==null?void 0:n.data)==null?void 0:a.content)==null?void 0:c.disassembled)this.attachModule(l);return this.log("on chain version",this._publishedVersion,"with modules",Object.keys(this._modules)),this._publishedVersion}attachModule(e){return this._modules[e]?!1:(this._modules[e]=new cv({suiMaster:this._suiMaster,debug:this._debug,moduleName:e,package:this}),this._modules[e].addEventListener("added",n=>{const s=n.detail;this.emit("added",s)}),!0)}async getUpgradeCapId(){var s,r,i;if(this._upgradeCap)return this._upgradeCap.address;this.log("trying to find UpgradeCap for this package in owned objects...");let e=!1,n=null;do{const o={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};n&&(o.cursor=n);const a=await this._suiMaster._client.getOwnedObjects(o);a.hasNextPage&&a.nextCursor?(e=!0,n=a.nextCursor):e=!1;for(const c of a.data)if(((i=(r=(s=c==null?void 0:c.data)==null?void 0:s.content)==null?void 0:r.fields)==null?void 0:i.package)==this._id)return this._upgradeCap=new cr({id:c.data.objectId,suiMaster:this._suiMaster,debug:this._debug}),this.log("found UpgradeCap",this._upgradeCap.address),this._upgradeCap.address}while(e&&!this._upgradeCap);return this.log("no UpgradeCap for this package found. Are you sure you work with most recent version of the package?"),null}async storeInfoFromPublishResult(e){if(e&&e.objectChanges&&e.objectChanges.length){for(const n of e.objectChanges){if(n.type==="published"&&n.packageId&&(this._id=de(n.packageId),this._isPublished=!0,n.version&&(this._publishedVersion=BigInt(n.version)),n.modules))for(const s of n.modules)this.attachModule(s);n.type==="created"&&n.objectType.indexOf("::package::UpgradeCap")!==-1&&(this._upgradeCapId=n.objectId,this.log("UpgradeCap",this._upgradeCapId))}for(const n of e.objectChanges)if(n.objectId&&n.objectType&&n.type&&(n.type=="created"||n.type=="mutated"))for(const s in this._modules){const r=this._modules[s].pushObject(n.objectId);r&&r.tryToFillDataFromObjectChange(n)}return this.log("got results:",this.address,"version",this._publishedVersion,"with modules",Object.keys(this._modules)),!0}else return this.log("nothing is found in publish result. storing old values"),!1}async publish(e={}){if(this._isBuilt||await this.build(e),this.address)throw new Error("already published. Maybe you need to upgrade() it?");this.log("publishing package...");const n=new Vr,[s]=n.publish({modules:this._builtModules,dependencies:this._builtDependencies});n.transferObjects([s],this._suiMaster.address);const r=await this._suiMaster.signAndExecuteTransaction({transaction:n,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(r)&&this.log("published"),this.address}async upgrade(e={}){await this.checkOnChainIfNeeded(),this._isBuilt||await this.build(e),this.log("upgrading package...");const n=new Vr,s=n.object(await this.getUpgradeCapId()),i=[s,this._suiMaster.utils.txInput(n,"u8",0),this._suiMaster.utils.txInput(n,"vector<u8>",this._builtDigest)],o=n.moveCall({target:"0x2::package::authorize_upgrade",arguments:i}),a=n.upgrade({modules:this._builtModules,dependencies:this._builtDependencies,package:this.address,ticket:o});n.moveCall({target:"0x2::package::commit_upgrade",arguments:[s,a]});const c=await this._suiMaster.signAndExecuteTransaction({transaction:n,options:{showEffects:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(c)&&this.log("upgraded"),this.address}async build(e={}){this.log("building a package...");const n=this._path;if(!n)throw new Error("Cant build a package with no path defined");if(e.env){this.log("switching environment to",e.env);const c=await Ka.exec(`sui client switch --env ${e.env}`);this.log(c)}let s=`sui move build --dump-bytecode-as-base64 --path ${n}`;e.withUnpublishedDependencies&&(s=`sui move build --with-unpublished-dependencies --dump-bytecode-as-base64 --path ${n}`);const r=await Ka.exec(s),{modules:i,dependencies:o,digest:a}=JSON.parse(r);return this._builtModules=i,this._builtDependencies=o,this._builtDigest=a,this._isBuilt=!0,this.log("package built"),!0}async getModulesNamesFromBuild(){this.log("tring to get modules names from local package path...");try{return Ka.getModulesNamesFromPackagePath(this._path)}catch(e){throw this.log(e),new Error("can not get modules names from local package path")}}}class Hp extends Vu{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Sa(e);const s=Ns(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,i=new Uint8Array(r);i.set(s.length>r?e.create().update(s).digest():s);for(let o=0;o<i.length;o++)i[o]^=54;this.iHash.update(i),this.oHash=e.create();for(let o=0;o<i.length;o++)i[o]^=106;this.oHash.update(i),Qt(i)}update(e){return $r(this),this.iHash.update(e),this}digestInto(e){$r(this),Pe(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:s,finished:r,destroyed:i,blockLen:o,outputLen:a}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=s._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const js=(t,e,n)=>new Hp(t,e).update(n).digest();js.create=(t,e)=>new Hp(t,e);function lv(t,e,n,s){Sa(t);const r=Hm({dkLen:32,asyncTick:10},s),{c:i,dkLen:o,asyncTick:a}=r;if(kn(i),kn(o),kn(a),i<1)throw new Error("iterations (c) should be >= 1");const c=cd(e),l=cd(n),u=new Uint8Array(o),f=js.create(t,c),d=f._cloneInto().update(l);return{c:i,dkLen:o,asyncTick:a,DK:u,PRF:f,PRFSalt:d}}function dv(t,e,n,s,r){return t.destroy(),e.destroy(),s&&s.destroy(),Qt(r),n}function fv(t,e,n,s){const{c:r,dkLen:i,DK:o,PRF:a,PRFSalt:c}=lv(t,e,n,s);let l;const u=new Uint8Array(4),f=tr(u),d=new Uint8Array(a.outputLen);for(let h=1,p=0;p<i;h++,p+=a.outputLen){const y=o.subarray(p,p+a.outputLen);f.setInt32(0,h,!1),(l=c._cloneInto(l)).update(u).digestInto(d),y.set(d.subarray(0,y.length));for(let S=1;S<r;S++){a._cloneInto(l).update(d).digestInto(d);for(let _=0;_<y.length;_++)y[_]^=d[_]}}return dv(a,c,o,l,d)}const hv=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ds=new Uint32Array(64);class pv extends Fu{constructor(e=32){super(64,e,8,!1),this.A=cs[0]|0,this.B=cs[1]|0,this.C=cs[2]|0,this.D=cs[3]|0,this.E=cs[4]|0,this.F=cs[5]|0,this.G=cs[6]|0,this.H=cs[7]|0}get(){const{A:e,B:n,C:s,D:r,E:i,F:o,G:a,H:c}=this;return[e,n,s,r,i,o,a,c]}set(e,n,s,r,i,o,a,c){this.A=e|0,this.B=n|0,this.C=s|0,this.D=r|0,this.E=i|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,n){for(let f=0;f<16;f++,n+=4)ds[f]=e.getUint32(n,!1);for(let f=16;f<64;f++){const d=ds[f-15],h=ds[f-2],p=mn(d,7)^mn(d,18)^d>>>3,y=mn(h,17)^mn(h,19)^h>>>10;ds[f]=y+ds[f-7]+p+ds[f-16]|0}let{A:s,B:r,C:i,D:o,E:a,F:c,G:l,H:u}=this;for(let f=0;f<64;f++){const d=mn(a,6)^mn(a,11)^mn(a,25),h=u+d+Xm(a,c,l)+hv[f]+ds[f]|0,y=(mn(s,2)^mn(s,13)^mn(s,22))+Jm(s,r,i)|0;u=l,l=c,c=a,a=o+h|0,o=i,i=r,r=s,s=h+y|0}s=s+this.A|0,r=r+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(s,r,i,o,a,c,l,u)}roundClean(){Qt(ds)}destroy(){this.set(0,0,0,0,0,0,0,0),Qt(this.buffer)}}const Yp=ew(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),gv=Yp[0],bv=Yp[1],fs=new Uint32Array(80),hs=new Uint32Array(80);class Zp extends Fu{constructor(e=64){super(128,e,16,!1),this.Ah=ct[0]|0,this.Al=ct[1]|0,this.Bh=ct[2]|0,this.Bl=ct[3]|0,this.Ch=ct[4]|0,this.Cl=ct[5]|0,this.Dh=ct[6]|0,this.Dl=ct[7]|0,this.Eh=ct[8]|0,this.El=ct[9]|0,this.Fh=ct[10]|0,this.Fl=ct[11]|0,this.Gh=ct[12]|0,this.Gl=ct[13]|0,this.Hh=ct[14]|0,this.Hl=ct[15]|0}get(){const{Ah:e,Al:n,Bh:s,Bl:r,Ch:i,Cl:o,Dh:a,Dl:c,Eh:l,El:u,Fh:f,Fl:d,Gh:h,Gl:p,Hh:y,Hl:S}=this;return[e,n,s,r,i,o,a,c,l,u,f,d,h,p,y,S]}set(e,n,s,r,i,o,a,c,l,u,f,d,h,p,y,S){this.Ah=e|0,this.Al=n|0,this.Bh=s|0,this.Bl=r|0,this.Ch=i|0,this.Cl=o|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=u|0,this.Fh=f|0,this.Fl=d|0,this.Gh=h|0,this.Gl=p|0,this.Hh=y|0,this.Hl=S|0}process(e,n){for(let T=0;T<16;T++,n+=4)fs[T]=e.getUint32(n),hs[T]=e.getUint32(n+=4);for(let T=16;T<80;T++){const j=fs[T-15]|0,K=hs[T-15]|0,F=ws(j,K,1)^ws(j,K,8)^ld(j,K,7),se=vs(j,K,1)^vs(j,K,8)^dd(j,K,7),re=fs[T-2]|0,V=hs[T-2]|0,O=ws(re,V,19)^ci(re,V,61)^ld(re,V,6),A=vs(re,V,19)^ui(re,V,61)^dd(re,V,6),k=sw(se,A,hs[T-7],hs[T-16]),M=rw(k,F,O,fs[T-7],fs[T-16]);fs[T]=M|0,hs[T]=k|0}let{Ah:s,Al:r,Bh:i,Bl:o,Ch:a,Cl:c,Dh:l,Dl:u,Eh:f,El:d,Fh:h,Fl:p,Gh:y,Gl:S,Hh:_,Hl:B}=this;for(let T=0;T<80;T++){const j=ws(f,d,14)^ws(f,d,18)^ci(f,d,41),K=vs(f,d,14)^vs(f,d,18)^ui(f,d,41),F=f&h^~f&y,se=d&p^~d&S,re=iw(B,K,se,bv[T],hs[T]),V=ow(re,_,j,F,gv[T],fs[T]),O=re|0,A=ws(s,r,28)^ci(s,r,34)^ci(s,r,39),k=vs(s,r,28)^ui(s,r,34)^ui(s,r,39),M=s&i^s&a^i&a,I=r&o^r&c^o&c;_=y|0,B=S|0,y=h|0,S=p|0,h=f|0,p=d|0,{h:f,l:d}=en(l|0,u|0,V|0,O|0),l=a|0,u=c|0,a=i|0,c=o|0,i=s|0,o=r|0;const E=qu(O,k,I);s=Ku(E,V,A,M),r=E|0}({h:s,l:r}=en(this.Ah|0,this.Al|0,s|0,r|0)),{h:i,l:o}=en(this.Bh|0,this.Bl|0,i|0,o|0),{h:a,l:c}=en(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:u}=en(this.Dh|0,this.Dl|0,l|0,u|0),{h:f,l:d}=en(this.Eh|0,this.El|0,f|0,d|0),{h,l:p}=en(this.Fh|0,this.Fl|0,h|0,p|0),{h:y,l:S}=en(this.Gh|0,this.Gl|0,y|0,S|0),{h:_,l:B}=en(this.Hh|0,this.Hl|0,_|0,B|0),this.set(s,r,i,o,a,c,l,u,f,d,h,p,y,S,_,B)}roundClean(){Qt(fs,hs)}destroy(){Qt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class yv extends Zp{constructor(){super(48),this.Ah=at[0]|0,this.Al=at[1]|0,this.Bh=at[2]|0,this.Bl=at[3]|0,this.Ch=at[4]|0,this.Cl=at[5]|0,this.Dh=at[6]|0,this.Dl=at[7]|0,this.Eh=at[8]|0,this.El=at[9]|0,this.Fh=at[10]|0,this.Fl=at[11]|0,this.Gh=at[12]|0,this.Gl=at[13]|0,this.Hh=at[14]|0,this.Hl=at[15]|0}}const fr=Ma(()=>new pv),Fr=Ma(()=>new Zp),mv=Ma(()=>new yv);/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const wv=t=>t[0]==="あいこくしん";function Qp(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);return t.normalize("NFKD")}function vv(t){const e=Qp(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function Sv(t){Pe(t,16,20,24,28,32)}const Mv=t=>{const e=8-t.length/4;return new Uint8Array([fr(t)[0]>>e<<e])};function Ev(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error("wordlist: non-string element: "+e)}),ro.chain(ro.checksum(1,Mv),ro.radix2(11,!0),ro.alphabet(t))}function Iv(t,e){return Sv(t),Ev(e).encode(t).join(wv(e)?"　":" ")}const xv=t=>Qp("mnemonic"+t);function _v(t,e=""){return fv(Fr,vv(t).nfkd,xv(e),{c:2048,dkLen:64})}const Av=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const sl=BigInt(0),Yc=BigInt(1);function ur(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}function lo(t){const e=t.toString(16);return e.length&1?"0"+e:e}function Xp(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?sl:BigInt("0x"+t)}function _a(t){return Xp(nt(t))}function Ri(t){return Pe(t),Xp(nt(Uint8Array.from(t).reverse()))}function rl(t,e){return Dn(t.toString(16).padStart(e*2,"0"))}function Aa(t,e){return rl(t,e).reverse()}function qe(t,e,n){let s;if(typeof e=="string")try{s=Dn(e)}catch(i){throw new Error(t+" must be hex string or Uint8Array, cause: "+i)}else if(ir(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const r=s.length;if(typeof n=="number"&&r!==n)throw new Error(t+" of length "+n+" expected, got "+r);return s}const rc=t=>typeof t=="bigint"&&sl<=t;function Nv(t,e,n){return rc(t)&&rc(e)&&rc(n)&&e<=t&&t<n}function xr(t,e,n,s){if(!Nv(e,n,s))throw new Error("expected valid "+t+": "+n+" <= n < "+s+", got "+e)}function Jp(t){let e;for(e=0;t>sl;t>>=Yc,e+=1);return e}const Hi=t=>(Yc<<BigInt(t))-Yc;function Tv(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");const s=h=>new Uint8Array(h),r=h=>Uint8Array.of(h);let i=s(t),o=s(t),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},l=(...h)=>n(o,i,...h),u=(h=s(0))=>{o=l(r(0),h),i=l(),h.length!==0&&(o=l(r(1),h),i=l())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const p=[];for(;h<e;){i=l();const y=i.slice();p.push(y),h+=i.length}return Ge(...p)};return(h,p)=>{c(),u(h);let y;for(;!(y=p(f()));)u();return c(),y}}function Yi(t,e,n={}){if(!t||typeof t!="object")throw new Error("expected valid options object");function s(r,i,o){const a=t[r];if(o&&a===void 0)return;const c=typeof a;if(c!==i||a===null)throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`)}Object.entries(e).forEach(([r,i])=>s(r,i,!1)),Object.entries(n).forEach(([r,i])=>s(r,i,!0))}function ra(t){const e=new WeakMap;return(n,...s)=>{const r=e.get(n);if(r!==void 0)return r;const i=t(n,...s);return e.set(n,i),i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),rt=BigInt(1),Gs=BigInt(2),eg=BigInt(3),tg=BigInt(4),ng=BigInt(5),Ov=BigInt(7),sg=BigInt(8),kv=BigInt(9),rg=BigInt(16);function He(t,e){const n=t%e;return n>=kt?n:e+n}function Ve(t,e,n){let s=t;for(;e-- >kt;)s*=s,s%=n;return s}function Td(t,e){if(t===kt)throw new Error("invert: expected non-zero number");if(e<=kt)throw new Error("invert: expected positive modulus, got "+e);let n=He(t,e),s=e,r=kt,i=rt;for(;n!==kt;){const a=s/n,c=s%n,l=r-i*a;s=n,n=c,r=i,i=l}if(s!==rt)throw new Error("invert: does not exist");return He(r,e)}function il(t,e,n){if(!t.eql(t.sqr(e),n))throw new Error("Cannot find square root")}function ig(t,e){const n=(t.ORDER+rt)/tg,s=t.pow(e,n);return il(t,s,e),s}function jv(t,e){const n=(t.ORDER-ng)/sg,s=t.mul(e,Gs),r=t.pow(s,n),i=t.mul(e,r),o=t.mul(t.mul(i,Gs),r),a=t.mul(i,t.sub(o,t.ONE));return il(t,a,e),a}function Cv(t){const e=Ln(t),n=og(t),s=n(e,e.neg(e.ONE)),r=n(e,s),i=n(e,e.neg(s)),o=(t+Ov)/rg;return(a,c)=>{let l=a.pow(c,o),u=a.mul(l,s);const f=a.mul(l,r),d=a.mul(l,i),h=a.eql(a.sqr(u),c),p=a.eql(a.sqr(f),c);l=a.cmov(l,u,h),u=a.cmov(d,f,p);const y=a.eql(a.sqr(u),c),S=a.cmov(l,u,y);return il(a,S,c),S}}function og(t){if(t<eg)throw new Error("sqrt is not defined for small field");let e=t-rt,n=0;for(;e%Gs===kt;)e/=Gs,n++;let s=Gs;const r=Ln(t);for(;Od(r,s)===1;)if(s++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return ig;let i=r.pow(s,e);const o=(e+rt)/Gs;return function(c,l){if(c.is0(l))return l;if(Od(c,l)!==1)throw new Error("Cannot find square root");let u=n,f=c.mul(c.ONE,i),d=c.pow(l,e),h=c.pow(l,o);for(;!c.eql(d,c.ONE);){if(c.is0(d))return c.ZERO;let p=1,y=c.sqr(d);for(;!c.eql(y,c.ONE);)if(p++,y=c.sqr(y),p===u)throw new Error("Cannot find square root");const S=rt<<BigInt(u-p-1),_=c.pow(f,S);u=p,f=c.sqr(_),d=c.mul(d,f),h=c.mul(h,_)}return h}}function Dv(t){return t%tg===eg?ig:t%sg===ng?jv:t%rg===kv?Cv(t):og(t)}const Bv=(t,e)=>(He(t,e)&rt)===rt,Uv=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Lv(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},n=Uv.reduce((s,r)=>(s[r]="function",s),e);return Yi(t,n),t}function zv(t,e,n){if(n<kt)throw new Error("invalid exponent, negatives unsupported");if(n===kt)return t.ONE;if(n===rt)return e;let s=t.ONE,r=e;for(;n>kt;)n&rt&&(s=t.mul(s,r)),r=t.sqr(r),n>>=rt;return s}function ag(t,e,n=!1){const s=new Array(e.length).fill(n?t.ZERO:void 0),r=e.reduce((o,a,c)=>t.is0(a)?o:(s[c]=o,t.mul(o,a)),t.ONE),i=t.inv(r);return e.reduceRight((o,a,c)=>t.is0(a)?o:(s[c]=t.mul(o,s[c]),t.mul(o,a)),i),s}function Od(t,e){const n=(t.ORDER-rt)/Gs,s=t.pow(e,n),r=t.eql(s,t.ONE),i=t.eql(s,t.ZERO),o=t.eql(s,t.neg(t.ONE));if(!r&&!i&&!o)throw new Error("invalid Legendre symbol result");return r?1:i?0:-1}function Pv(t,e){e!==void 0&&kn(e);const n=e!==void 0?e:t.toString(2).length,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}function Ln(t,e,n=!1,s={}){if(t<=kt)throw new Error("invalid field: expected ORDER > 0, got "+t);let r,i,o=!1,a;if(typeof e=="object"&&e!=null){if(s.sqrt||n)throw new Error("cannot specify opts in two arguments");const d=e;d.BITS&&(r=d.BITS),d.sqrt&&(i=d.sqrt),typeof d.isLE=="boolean"&&(n=d.isLE),typeof d.modOnDecode=="boolean"&&(o=d.modOnDecode),a=d.allowedLengths}else typeof e=="number"&&(r=e),s.sqrt&&(i=s.sqrt);const{nBitLength:c,nByteLength:l}=Pv(t,r);if(l>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let u;const f=Object.freeze({ORDER:t,isLE:n,BITS:c,BYTES:l,MASK:Hi(c),ZERO:kt,ONE:rt,allowedLengths:a,create:d=>He(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof d);return kt<=d&&d<t},is0:d=>d===kt,isValidNot0:d=>!f.is0(d)&&f.isValid(d),isOdd:d=>(d&rt)===rt,neg:d=>He(-d,t),eql:(d,h)=>d===h,sqr:d=>He(d*d,t),add:(d,h)=>He(d+h,t),sub:(d,h)=>He(d-h,t),mul:(d,h)=>He(d*h,t),pow:(d,h)=>zv(f,d,h),div:(d,h)=>He(d*Td(h,t),t),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>Td(d,t),sqrt:i||(d=>(u||(u=Dv(t)),u(f,d))),toBytes:d=>n?Aa(d,l):rl(d,l),fromBytes:(d,h=!0)=>{if(a){if(!a.includes(d.length)||d.length>l)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+d.length);const y=new Uint8Array(l);y.set(d,n?0:y.length-d.length),d=y}if(d.length!==l)throw new Error("Field.fromBytes: expected "+l+" bytes, got "+d.length);let p=n?Ri(d):_a(d);if(o&&(p=He(p,t)),!h&&!f.isValid(p))throw new Error("invalid field element: outside of range 0..ORDER");return p},invertBatch:d=>ag(f,d),cmov:(d,h,p)=>p?h:d});return Object.freeze(f)}function cg(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function ug(t){const e=cg(t);return e+Math.ceil(e/2)}function $v(t,e,n=!1){const s=t.length,r=cg(e),i=ug(e);if(s<16||s<i||s>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+s);const o=n?Ri(t):_a(t),a=He(o,e-rt)+rt;return n?Aa(a,r):rl(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const qr=BigInt(0),Hs=BigInt(1);function ia(t,e){const n=e.negate();return t?n:e}function Ys(t,e){const n=ag(t.Fp,e.map(s=>s.Z));return e.map((s,r)=>t.fromAffine(s.toAffine(n[r])))}function lg(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function ic(t,e){lg(t,e);const n=Math.ceil(e/t)+1,s=2**(t-1),r=2**t,i=Hi(t),o=BigInt(t);return{windows:n,windowSize:s,mask:i,maxNumber:r,shiftBy:o}}function kd(t,e,n){const{windowSize:s,mask:r,maxNumber:i,shiftBy:o}=n;let a=Number(t&r),c=t>>o;a>s&&(a-=i,c+=Hs);const l=e*s,u=l+Math.abs(a)-1,f=a===0,d=a<0,h=e%2!==0;return{nextN:c,offset:u,isZero:f,isNeg:d,isNegF:h,offsetF:l}}function Rv(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,s)=>{if(!(n instanceof e))throw new Error("invalid point at index "+s)})}function Vv(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,s)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+s)})}const oc=new WeakMap,dg=new WeakMap;function ac(t){return dg.get(t)||1}function jd(t){if(t!==qr)throw new Error("invalid wNAF")}let fg=class{constructor(e,n){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=n}_unsafeLadder(e,n,s=this.ZERO){let r=e;for(;n>qr;)n&Hs&&(s=s.add(r)),r=r.double(),n>>=Hs;return s}precomputeWindow(e,n){const{windows:s,windowSize:r}=ic(n,this.bits),i=[];let o=e,a=o;for(let c=0;c<s;c++){a=o,i.push(a);for(let l=1;l<r;l++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(e,n,s){if(!this.Fn.isValid(s))throw new Error("invalid scalar");let r=this.ZERO,i=this.BASE;const o=ic(e,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:u,isNeg:f,isNegF:d,offsetF:h}=kd(s,a,o);s=c,u?i=i.add(ia(d,n[h])):r=r.add(ia(f,n[l]))}return jd(s),{p:r,f:i}}wNAFUnsafe(e,n,s,r=this.ZERO){const i=ic(e,this.bits);for(let o=0;o<i.windows&&s!==qr;o++){const{nextN:a,offset:c,isZero:l,isNeg:u}=kd(s,o,i);if(s=a,!l){const f=n[c];r=r.add(u?f.negate():f)}}return jd(s),r}getPrecomputes(e,n,s){let r=oc.get(n);return r||(r=this.precomputeWindow(n,e),e!==1&&(typeof s=="function"&&(r=s(r)),oc.set(n,r))),r}cached(e,n,s){const r=ac(e);return this.wNAF(r,this.getPrecomputes(r,e,s),n)}unsafe(e,n,s,r){const i=ac(e);return i===1?this._unsafeLadder(e,n,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,s),n,r)}createCache(e,n){lg(n,this.bits),dg.set(e,n),oc.delete(e)}hasCache(e){return ac(e)!==1}};function Fv(t,e,n,s){let r=e,i=t.ZERO,o=t.ZERO;for(;n>qr||s>qr;)n&Hs&&(i=i.add(r)),s&Hs&&(o=o.add(r)),r=r.double(),n>>=Hs,s>>=Hs;return{p1:i,p2:o}}function hg(t,e,n,s){Rv(n,t),Vv(s,e);const r=n.length,i=s.length;if(r!==i)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,a=Jp(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=Hi(c),u=new Array(Number(l)+1).fill(o),f=Math.floor((e.BITS-1)/c)*c;let d=o;for(let h=f;h>=0;h-=c){u.fill(o);for(let y=0;y<i;y++){const S=s[y],_=Number(S>>BigInt(h)&l);u[_]=u[_].add(n[y])}let p=o;for(let y=u.length-1,S=o;y>0;y--)S=S.add(u[y]),p=p.add(S);if(d=d.add(p),h!==0)for(let y=0;y<c;y++)d=d.double()}return d}function Cd(t,e){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return Lv(e),e}else return Ln(t)}function pg(t,e,n={}){if(!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);for(const a of["p","n","h"]){const c=e[a];if(!(typeof c=="bigint"&&c>qr))throw new Error(`CURVE.${a} must be positive bigint`)}const s=Cd(e.p,n.Fp),r=Cd(e.n,n.Fn),o=["Gx","Gy","a",t==="weierstrass"?"b":"d"];for(const a of o)if(!s.isValid(e[a]))throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);return{Fp:s,Fn:r}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vn=BigInt(0),Xe=BigInt(1),cc=BigInt(2),qv=BigInt(8);function Kv(t,e,n,s){const r=t.sqr(n),i=t.sqr(s),o=t.add(t.mul(e.a,r),i),a=t.add(t.ONE,t.mul(e.d,t.mul(r,i)));return t.eql(o,a)}function Wv(t,e={}){const{Fp:n,Fn:s}=pg("edwards",t,e),{h:r,n:i}=t;Yi(e,{},{uvRatio:"function"});const o=cc<<BigInt(s.BYTES*8)-Xe,a=y=>n.create(y),c=e.uvRatio||((y,S)=>{try{return{isValid:!0,value:n.sqrt(n.div(y,S))}}catch{return{isValid:!1,value:vn}}});if(!Kv(n,t,t.Gx,t.Gy))throw new Error("bad curve params: generator point");function l(y,S,_=!1){const B=_?Xe:vn;return xr("coordinate "+y,S,B,o),S}function u(y){if(!(y instanceof h))throw new Error("ExtendedPoint expected")}const f=ra((y,S)=>{const{X:_,Y:B,Z:T}=y,j=y.is0();S==null&&(S=j?qv:n.inv(T));const K=a(_*S),F=a(B*S),se=n.mul(T,S);if(j)return{x:vn,y:Xe};if(se!==Xe)throw new Error("invZ was invalid");return{x:K,y:F}}),d=ra(y=>{const{a:S,d:_}=t;if(y.is0())throw new Error("bad point: ZERO");const{X:B,Y:T,Z:j,T:K}=y,F=a(B*B),se=a(T*T),re=a(j*j),V=a(re*re),O=a(F*S),A=a(re*a(O+se)),k=a(V+a(_*a(F*se)));if(A!==k)throw new Error("bad point: equation left != right (1)");const M=a(B*T),I=a(j*K);if(M!==I)throw new Error("bad point: equation left != right (2)");return!0});class h{constructor(S,_,B,T){this.X=l("x",S),this.Y=l("y",_),this.Z=l("z",B,!0),this.T=l("t",T),Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}get ex(){return this.X}get ey(){return this.Y}get ez(){return this.Z}get et(){return this.T}static normalizeZ(S){return Ys(h,S)}static msm(S,_){return hg(h,s,S,_)}_setWindowSize(S){this.precompute(S)}static fromAffine(S){if(S instanceof h)throw new Error("extended point not allowed");const{x:_,y:B}=S||{};return l("x",_),l("y",B),new h(_,B,Xe,a(_*B))}precompute(S=8,_=!0){return p.createCache(this,S),_||this.multiply(cc),this}assertValidity(){d(this)}equals(S){u(S);const{X:_,Y:B,Z:T}=this,{X:j,Y:K,Z:F}=S,se=a(_*F),re=a(j*T),V=a(B*F),O=a(K*T);return se===re&&V===O}is0(){return this.equals(h.ZERO)}negate(){return new h(a(-this.X),this.Y,this.Z,a(-this.T))}double(){const{a:S}=t,{X:_,Y:B,Z:T}=this,j=a(_*_),K=a(B*B),F=a(cc*a(T*T)),se=a(S*j),re=_+B,V=a(a(re*re)-j-K),O=se+K,A=O-F,k=se-K,M=a(V*A),I=a(O*k),E=a(V*k),v=a(A*O);return new h(M,I,v,E)}add(S){u(S);const{a:_,d:B}=t,{X:T,Y:j,Z:K,T:F}=this,{X:se,Y:re,Z:V,T:O}=S,A=a(T*se),k=a(j*re),M=a(F*B*O),I=a(K*V),E=a((T+j)*(se+re)-A-k),v=I-M,w=I+M,x=a(k-_*A),C=a(E*v),D=a(w*x),L=a(E*x),R=a(v*w);return new h(C,D,R,L)}subtract(S){return this.add(S.negate())}multiply(S){const _=S;xr("scalar",_,Xe,i);const{p:B,f:T}=p.cached(this,_,j=>Ys(h,j));return Ys(h,[B,T])[0]}multiplyUnsafe(S,_=h.ZERO){const B=S;return xr("scalar",B,vn,i),B===vn?h.ZERO:this.is0()||B===Xe?this:p.unsafe(this,B,T=>Ys(h,T),_)}isSmallOrder(){return this.multiplyUnsafe(r).is0()}isTorsionFree(){return p.unsafe(this,i).is0()}toAffine(S){return f(this,S)}clearCofactor(){return r===Xe?this:this.multiplyUnsafe(r)}static fromBytes(S,_=!1){return Pe(S),h.fromHex(S,_)}static fromHex(S,_=!1){const{d:B,a:T}=t,j=n.BYTES;S=qe("pointHex",S,j),ur("zip215",_);const K=S.slice(),F=S[j-1];K[j-1]=F&-129;const se=Ri(K),re=_?o:n.ORDER;xr("pointHex.y",se,vn,re);const V=a(se*se),O=a(V-Xe),A=a(B*V-T);let{isValid:k,value:M}=c(O,A);if(!k)throw new Error("Point.fromHex: invalid y coordinate");const I=(M&Xe)===Xe,E=(F&128)!==0;if(!_&&M===vn&&E)throw new Error("Point.fromHex: x=0 and x_0=1");return E!==I&&(M=a(-M)),h.fromAffine({x:M,y:se})}toBytes(){const{x:S,y:_}=this.toAffine(),B=Aa(_,n.BYTES);return B[B.length-1]|=S&Xe?128:0,B}toRawBytes(){return this.toBytes()}toHex(){return nt(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}h.BASE=new h(t.Gx,t.Gy,Xe,a(t.Gx*t.Gy)),h.ZERO=new h(vn,Xe,Xe,vn),h.Fp=n,h.Fn=s;const p=new fg(h,s.BYTES*8);return h}function Gv(t,e,n){if(typeof e!="function")throw new Error('"hash" function param is required');Yi(n,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",mapToCurve:"function"});const{prehash:s}=n,{BASE:r,Fp:i,Fn:o}=t,a=o.ORDER,c=n.randomBytes||Ea,l=n.adjustScalarBytes||(A=>A),u=n.domain||((A,k,M)=>{if(ur("phflag",M),k.length||M)throw new Error("Contexts/pre-hash are not supported");return A});function f(A){return o.create(A)}function d(A){return f(Ri(A))}function h(A){const k=i.BYTES;A=qe("private key",A,k);const M=qe("hashed private key",e(A),2*k),I=l(M.slice(0,k)),E=M.slice(k,2*k),v=d(I);return{head:I,prefix:E,scalar:v}}function p(A){const{head:k,prefix:M,scalar:I}=h(A),E=r.multiply(I),v=E.toBytes();return{head:k,prefix:M,scalar:I,point:E,pointBytes:v}}function y(A){return p(A).pointBytes}function S(A=Uint8Array.of(),...k){const M=Ge(...k);return d(e(u(M,qe("context",A),!!s)))}function _(A,k,M={}){A=qe("message",A),s&&(A=s(A));const{prefix:I,scalar:E,pointBytes:v}=p(k),w=S(M.context,I,A),x=r.multiply(w).toBytes(),C=S(M.context,x,v,A),D=f(w+C*E);xr("signature.s",D,vn,a);const L=i.BYTES,R=Ge(x,Aa(D,L));return qe("result",R,L*2)}const B={zip215:!0};function T(A,k,M,I=B){const{context:E,zip215:v}=I,w=i.BYTES;A=qe("signature",A,2*w),k=qe("message",k),M=qe("publicKey",M,w),v!==void 0&&ur("zip215",v),s&&(k=s(k));const x=Ri(A.slice(w,2*w));let C,D,L;try{C=t.fromHex(M,v),D=t.fromHex(A.slice(0,w),v),L=r.multiplyUnsafe(x)}catch{return!1}if(!v&&C.isSmallOrder())return!1;const R=S(E,D.toBytes(),C.toBytes(),k);return D.add(C.multiplyUnsafe(R)).subtract(L).clearCofactor().is0()}r.precompute(8);const j=i.BYTES,K={secret:j,public:j,signature:2*j,seed:j};function F(A=c(K.seed)){return A}const se={getExtendedPublicKey:p,randomSecretKey:F,isValidSecretKey:V,isValidPublicKey:O,randomPrivateKey:F,toMontgomery(A){const{y:k}=t.fromBytes(A),M=j===32;if(!M&&j!==57)throw new Error("only defined for 25519 and 448");const I=M?i.div(Xe+k,Xe-k):i.div(k-Xe,k+Xe);return i.toBytes(I)},toMontgomeryPriv(A){Pe(A,j);const k=e(A.subarray(0,j));return l(k).subarray(0,j)},precompute(A=8,k=t.BASE){return k.precompute(A,!1)}};function re(A){const k=se.randomSecretKey(A);return{secretKey:k,publicKey:y(k)}}function V(A){try{return!!o.fromBytes(A,!1)}catch{return!1}}function O(A,k){try{return!!t.fromBytes(A,k)}catch{return!1}}return Object.freeze({keygen:re,getPublicKey:y,sign:_,verify:T,utils:se,Point:t,info:{type:"edwards",lengths:K}})}function Hv(t){const e={a:t.a,d:t.d,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp,s=Ln(e.n,t.nBitLength,!0),r={Fp:n,Fn:s,uvRatio:t.uvRatio},i={randomBytes:t.randomBytes,adjustScalarBytes:t.adjustScalarBytes,domain:t.domain,prehash:t.prehash,mapToCurve:t.mapToCurve};return{CURVE:e,curveOpts:r,hash:t.hash,eddsaOpts:i}}function Yv(t,e){return Object.assign({},e,{ExtendedPoint:e.Point,CURVE:t})}function Zv(t){const{CURVE:e,curveOpts:n,hash:s,eddsaOpts:r}=Hv(t),i=Wv(e,n),o=Gv(i,s,r);return Yv(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);const Qv=BigInt(1),Dd=BigInt(2);BigInt(3);const Xv=BigInt(5),Jv=BigInt(8),Na={p:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:Jv,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function e2(t){const e=BigInt(10),n=BigInt(20),s=BigInt(40),r=BigInt(80),i=Na.p,a=t*t%i*t%i,c=Ve(a,Dd,i)*a%i,l=Ve(c,Qv,i)*t%i,u=Ve(l,Xv,i)*l%i,f=Ve(u,e,i)*u%i,d=Ve(f,n,i)*f%i,h=Ve(d,s,i)*d%i,p=Ve(h,r,i)*h%i,y=Ve(p,r,i)*h%i,S=Ve(y,e,i)*u%i;return{pow_p_5_8:Ve(S,Dd,i)*t%i,b2:a}}function t2(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const Bd=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function n2(t,e){const n=Na.p,s=He(e*e*e,n),r=He(s*s*e,n),i=e2(t*r).pow_p_5_8;let o=He(t*s*i,n);const a=He(e*o*o,n),c=o,l=He(o*Bd,n),u=a===t,f=a===He(-t,n),d=a===He(-t*Bd,n);return u&&(o=c),(f||d)&&(o=l),Bv(o,n)&&(o=He(-o,n)),{isValid:u||f,value:o}}const s2=Ln(Na.p,{isLE:!0}),r2={...Na,Fp:s2,hash:Fr,adjustScalarBytes:t2,uvRatio:n2},qn=Zv(r2);function gg(t,e){return oe.IntentMessage(oe.bytes(e.length)).serialize({intent:{scope:{[t]:!0},version:{V0:!0},appId:{Sui:!0}},value:e}).toBytes()}const as={ED25519:0,Secp256k1:1,Secp256r1:2,MultiSig:3,ZkLogin:5,Passkey:6},i2={ED25519:32,Secp256k1:33,Secp256r1:33,Passkey:33},ol={0:"ED25519",1:"Secp256k1",2:"Secp256r1",3:"MultiSig",5:"ZkLogin",6:"Passkey"};/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ud=(t,e)=>(t+(t>=0?e:-e)/bg)/e;function o2(t,e,n){const[[s,r],[i,o]]=e,a=Ud(o*t,n),c=Ud(-r*t,n);let l=t-a*s-c*i,u=-a*r-c*o;const f=l<es,d=u<es;f&&(l=-l),d&&(u=-u);const h=Hi(Math.ceil(Jp(n)/2))+Dr;if(l<es||l>=h||u<es||u>=h)throw new Error("splitScalar (endomorphism): failed, k="+t);return{k1neg:f,k1:l,k2neg:d,k2:u}}function Ld(t){t.lowS!==void 0&&ur("lowS",t.lowS),t.prehash!==void 0&&ur("prehash",t.prehash)}let a2=class extends Error{constructor(e=""){super(e)}};const Qn={Err:a2,_tlv:{encode:(t,e)=>{const{Err:n}=Qn;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const s=e.length/2,r=lo(s);if(r.length/2&128)throw new n("tlv.encode: long form length too big");const i=s>127?lo(r.length/2|128):"";return lo(t)+i+r+e},decode(t,e){const{Err:n}=Qn;let s=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new n("tlv.decode: wrong tlv");const r=e[s++],i=!!(r&128);let o=0;if(!i)o=r;else{const c=r&127;if(!c)throw new n("tlv.decode(long): indefinite length not supported");if(c>4)throw new n("tlv.decode(long): byte length is too big");const l=e.subarray(s,s+c);if(l.length!==c)throw new n("tlv.decode: length bytes not complete");if(l[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(s+=c,o<128)throw new n("tlv.decode(long): not minimal encoding")}const a=e.subarray(s,s+o);if(a.length!==o)throw new n("tlv.decode: wrong value length");return{v:a,l:e.subarray(s+o)}}},_int:{encode(t){const{Err:e}=Qn;if(t<es)throw new e("integer: negative integers are not allowed");let n=lo(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=Qn;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return _a(t)}},toSig(t){const{Err:e,_int:n,_tlv:s}=Qn,r=qe("signature",t),{v:i,l:o}=s.decode(48,r);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=s.decode(2,i),{v:l,l:u}=s.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(a),s:n.decode(l)}},hexFromSig(t){const{_tlv:e,_int:n}=Qn,s=e.encode(2,n.encode(t.r)),r=e.encode(2,n.encode(t.s)),i=s+r;return e.encode(48,i)}},es=BigInt(0),Dr=BigInt(1),bg=BigInt(2),fo=BigInt(3),c2=BigInt(4);function u2(t,e,n){function s(r){const i=t.sqr(r),o=t.mul(i,r);return t.add(t.add(o,t.mul(r,e)),n)}return s}function Er(t,e){const{BYTES:n}=t;let s;if(typeof e=="bigint")s=e;else{let r=qe("private key",e);try{s=t.fromBytes(r)}catch{throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`)}}if(!t.isValidNot0(s))throw new Error("invalid private key: out of range [1..N-1]");return s}function l2(t,e={}){const{Fp:n,Fn:s}=pg("weierstrass",t,e),{h:r,n:i}=t;Yi(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:o}=e;if(o&&(!n.is0(t.a)||typeof o.beta!="bigint"||!Array.isArray(o.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');function a(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function c(V,O,A){const{x:k,y:M}=O.toAffine(),I=n.toBytes(k);if(ur("isCompressed",A),A){a();const E=!n.isOdd(M);return Ge(yg(E),I)}else return Ge(Uint8Array.of(4),I,n.toBytes(M))}function l(V){Pe(V);const O=n.BYTES,A=O+1,k=2*O+1,M=V.length,I=V[0],E=V.subarray(1);if(M===A&&(I===2||I===3)){const v=n.fromBytes(E);if(!n.isValid(v))throw new Error("bad point: is not on curve, wrong x");const w=d(v);let x;try{x=n.sqrt(w)}catch(L){const R=L instanceof Error?": "+L.message:"";throw new Error("bad point: is not on curve, sqrt error"+R)}a();const C=n.isOdd(x);return(I&1)===1!==C&&(x=n.neg(x)),{x:v,y:x}}else if(M===k&&I===4){const v=n.fromBytes(E.subarray(O*0,O*1)),w=n.fromBytes(E.subarray(O*1,O*2));if(!h(v,w))throw new Error("bad point: is not on curve");return{x:v,y:w}}else throw new Error(`bad point: got length ${M}, expected compressed=${A} or uncompressed=${k}`)}const u=e.toBytes||c,f=e.fromBytes||l,d=u2(n,t.a,t.b);function h(V,O){const A=n.sqr(O),k=d(V);return n.eql(A,k)}if(!h(t.Gx,t.Gy))throw new Error("bad curve params: generator point");const p=n.mul(n.pow(t.a,fo),c2),y=n.mul(n.sqr(t.b),BigInt(27));if(n.is0(n.add(p,y)))throw new Error("bad curve params: a or b");function S(V,O,A=!1){if(!n.isValid(O)||A&&n.is0(O))throw new Error(`bad point coordinate ${V}`);return O}function _(V){if(!(V instanceof F))throw new Error("ProjectivePoint expected")}function B(V){if(!o||!o.basises)throw new Error("no endo");return o2(V,o.basises,s.ORDER)}const T=ra((V,O)=>{const{X:A,Y:k,Z:M}=V;if(n.eql(M,n.ONE))return{x:A,y:k};const I=V.is0();O==null&&(O=I?n.ONE:n.inv(M));const E=n.mul(A,O),v=n.mul(k,O),w=n.mul(M,O);if(I)return{x:n.ZERO,y:n.ZERO};if(!n.eql(w,n.ONE))throw new Error("invZ was invalid");return{x:E,y:v}}),j=ra(V=>{if(V.is0()){if(e.allowInfinityPoint&&!n.is0(V.Y))return;throw new Error("bad point: ZERO")}const{x:O,y:A}=V.toAffine();if(!n.isValid(O)||!n.isValid(A))throw new Error("bad point: x or y not field elements");if(!h(O,A))throw new Error("bad point: equation left != right");if(!V.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function K(V,O,A,k,M){return A=new F(n.mul(A.X,V),A.Y,A.Z),O=ia(k,O),A=ia(M,A),O.add(A)}class F{constructor(O,A,k){this.X=S("x",O),this.Y=S("y",A,!0),this.Z=S("z",k),Object.freeze(this)}static fromAffine(O){const{x:A,y:k}=O||{};if(!O||!n.isValid(A)||!n.isValid(k))throw new Error("invalid affine point");if(O instanceof F)throw new Error("projective point not allowed");return n.is0(A)&&n.is0(k)?F.ZERO:new F(A,k,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}static normalizeZ(O){return Ys(F,O)}static fromBytes(O){return Pe(O),F.fromHex(O)}static fromHex(O){const A=F.fromAffine(f(qe("pointHex",O)));return A.assertValidity(),A}static fromPrivateKey(O){return F.BASE.multiply(Er(s,O))}static msm(O,A){return hg(F,s,O,A)}_setWindowSize(O){this.precompute(O)}precompute(O=8,A=!0){return re.createCache(this,O),A||this.multiply(fo),this}assertValidity(){j(this)}hasEvenY(){const{y:O}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(O)}equals(O){_(O);const{X:A,Y:k,Z:M}=this,{X:I,Y:E,Z:v}=O,w=n.eql(n.mul(A,v),n.mul(I,M)),x=n.eql(n.mul(k,v),n.mul(E,M));return w&&x}negate(){return new F(this.X,n.neg(this.Y),this.Z)}double(){const{a:O,b:A}=t,k=n.mul(A,fo),{X:M,Y:I,Z:E}=this;let v=n.ZERO,w=n.ZERO,x=n.ZERO,C=n.mul(M,M),D=n.mul(I,I),L=n.mul(E,E),R=n.mul(M,I);return R=n.add(R,R),x=n.mul(M,E),x=n.add(x,x),v=n.mul(O,x),w=n.mul(k,L),w=n.add(v,w),v=n.sub(D,w),w=n.add(D,w),w=n.mul(v,w),v=n.mul(R,v),x=n.mul(k,x),L=n.mul(O,L),R=n.sub(C,L),R=n.mul(O,R),R=n.add(R,x),x=n.add(C,C),C=n.add(x,C),C=n.add(C,L),C=n.mul(C,R),w=n.add(w,C),L=n.mul(I,E),L=n.add(L,L),C=n.mul(L,R),v=n.sub(v,C),x=n.mul(L,D),x=n.add(x,x),x=n.add(x,x),new F(v,w,x)}add(O){_(O);const{X:A,Y:k,Z:M}=this,{X:I,Y:E,Z:v}=O;let w=n.ZERO,x=n.ZERO,C=n.ZERO;const D=t.a,L=n.mul(t.b,fo);let R=n.mul(A,I),ce=n.mul(k,E),te=n.mul(M,v),ue=n.add(A,k),ee=n.add(I,E);ue=n.mul(ue,ee),ee=n.add(R,ce),ue=n.sub(ue,ee),ee=n.add(A,M);let pe=n.add(I,v);return ee=n.mul(ee,pe),pe=n.add(R,te),ee=n.sub(ee,pe),pe=n.add(k,M),w=n.add(E,v),pe=n.mul(pe,w),w=n.add(ce,te),pe=n.sub(pe,w),C=n.mul(D,ee),w=n.mul(L,te),C=n.add(w,C),w=n.sub(ce,C),C=n.add(ce,C),x=n.mul(w,C),ce=n.add(R,R),ce=n.add(ce,R),te=n.mul(D,te),ee=n.mul(L,ee),ce=n.add(ce,te),te=n.sub(R,te),te=n.mul(D,te),ee=n.add(ee,te),R=n.mul(ce,ee),x=n.add(x,R),R=n.mul(pe,ee),w=n.mul(ue,w),w=n.sub(w,R),R=n.mul(ue,ce),C=n.mul(pe,C),C=n.add(C,R),new F(w,x,C)}subtract(O){return this.add(O.negate())}is0(){return this.equals(F.ZERO)}multiply(O){const{endo:A}=e;if(!s.isValidNot0(O))throw new Error("invalid scalar: out of range");let k,M;const I=E=>re.cached(this,E,v=>Ys(F,v));if(A){const{k1neg:E,k1:v,k2neg:w,k2:x}=B(O),{p:C,f:D}=I(v),{p:L,f:R}=I(x);M=D.add(R),k=K(A.beta,C,L,E,w)}else{const{p:E,f:v}=I(O);k=E,M=v}return Ys(F,[k,M])[0]}multiplyUnsafe(O){const{endo:A}=e,k=this;if(!s.isValid(O))throw new Error("invalid scalar: out of range");if(O===es||k.is0())return F.ZERO;if(O===Dr)return k;if(re.hasCache(this))return this.multiply(O);if(A){const{k1neg:M,k1:I,k2neg:E,k2:v}=B(O),{p1:w,p2:x}=Fv(F,k,I,v);return K(A.beta,w,x,M,E)}else return re.unsafe(k,O)}multiplyAndAddUnsafe(O,A,k){const M=this.multiplyUnsafe(A).add(O.multiplyUnsafe(k));return M.is0()?void 0:M}toAffine(O){return T(this,O)}isTorsionFree(){const{isTorsionFree:O}=e;return r===Dr?!0:O?O(F,this):re.unsafe(this,i).is0()}clearCofactor(){const{clearCofactor:O}=e;return r===Dr?this:O?O(F,this):this.multiplyUnsafe(r)}isSmallOrder(){return this.multiplyUnsafe(r).is0()}toBytes(O=!0){return ur("isCompressed",O),this.assertValidity(),u(F,this,O)}toRawBytes(O=!0){return this.toBytes(O)}toHex(O=!0){return nt(this.toBytes(O))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}F.BASE=new F(t.Gx,t.Gy,n.ONE),F.ZERO=new F(n.ZERO,n.ONE,n.ZERO),F.Fp=n,F.Fn=s;const se=s.BITS,re=new fg(F,e.endo?Math.ceil(se/2):se);return F}function yg(t){return Uint8Array.of(t?2:3)}function d2(t,e,n={}){Sa(e),Yi(n,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const s=n.randomBytes||Ea,r=n.hmac||((v,...w)=>js(e,v,Ge(...w))),{Fp:i,Fn:o}=t,{ORDER:a,BITS:c}=o,l=ug(a),u={secret:o.BYTES,public:1+i.BYTES,publicUncompressed:1+2*i.BYTES,signature:2*o.BYTES,seed:l};function f(v){const w=a>>Dr;return v>w}function d(v){return f(v)?o.neg(v):v}function h(v,w){if(!o.isValidNot0(w))throw new Error(`invalid signature ${v}: out of range 1..CURVE.n`)}class p{constructor(w,x,C){h("r",w),h("s",x),this.r=w,this.s=x,C!=null&&(this.recovery=C),Object.freeze(this)}static fromBytes(w,x="compact"){if(x==="compact"){const C=o.BYTES;Pe(w,C*2);const D=w.subarray(0,C),L=w.subarray(C,C*2);return new p(o.fromBytes(D),o.fromBytes(L))}if(x==="der"){Pe(w);const{r:C,s:D}=Qn.toSig(w);return new p(C,D)}throw new Error("invalid format")}static fromHex(w,x){return this.fromBytes(Dn(w),x)}addRecoveryBit(w){return new p(this.r,this.s,w)}recoverPublicKey(w){const x=i.ORDER,{r:C,s:D,recovery:L}=this;if(L==null||![0,1,2,3].includes(L))throw new Error("recovery id invalid");if(a*bg<x&&L>1)throw new Error("recovery id is ambiguous for h>1 curve");const ce=L===2||L===3?C+a:C;if(!i.isValid(ce))throw new Error("recovery id 2 or 3 invalid");const te=i.toBytes(ce),ue=t.fromHex(Ge(yg((L&1)===0),te)),ee=o.inv(ce),pe=se(qe("msgHash",w)),Me=o.create(-pe*ee),we=o.create(D*ee),Ie=t.BASE.multiplyUnsafe(Me).add(ue.multiplyUnsafe(we));if(Ie.is0())throw new Error("point at infinify");return Ie.assertValidity(),Ie}hasHighS(){return f(this.s)}normalizeS(){return this.hasHighS()?new p(this.r,o.neg(this.s),this.recovery):this}toBytes(w="compact"){if(w==="compact")return Ge(o.toBytes(this.r),o.toBytes(this.s));if(w==="der")return Dn(Qn.hexFromSig(this));throw new Error("invalid format")}toHex(w){return nt(this.toBytes(w))}assertValidity(){}static fromCompact(w){return p.fromBytes(qe("sig",w),"compact")}static fromDER(w){return p.fromBytes(qe("sig",w),"der")}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return nt(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return nt(this.toBytes("compact"))}}function y(v){try{return!!Er(o,v)}catch{return!1}}function S(v,w){try{const x=v.length;return w===!0&&x!==u.public||w===!1&&x!==u.publicUncompressed?!1:!!t.fromBytes(v)}catch{return!1}}function _(v=s(l)){return $v(v,a)}const B={isValidSecretKey:y,isValidPublicKey:S,randomSecretKey:_,isValidPrivateKey:y,randomPrivateKey:_,normPrivateKeyToScalar:v=>Er(o,v),precompute(v=8,w=t.BASE){return w.precompute(v,!1)}};function T(v,w=!0){return t.BASE.multiply(Er(o,v)).toBytes(w)}function j(v){if(typeof v=="bigint")return!1;if(v instanceof t)return!0;if(o.allowedLengths||u.secret===u.public)return;const w=qe("key",v).length;return w===u.public||w===u.publicUncompressed}function K(v,w,x=!0){if(j(v)===!0)throw new Error("first arg must be private key");if(j(w)===!1)throw new Error("second arg must be public key");const C=Er(o,v);return t.fromHex(w).multiply(C).toBytes(x)}const F=n.bits2int||function(v){if(v.length>8192)throw new Error("input is too large");const w=_a(v),x=v.length*8-c;return x>0?w>>BigInt(x):w},se=n.bits2int_modN||function(v){return o.create(F(v))},re=Hi(c);function V(v){return xr("num < 2^"+c,v,es,re),o.toBytes(v)}function O(v,w,x=A){if(["recovered","canonical"].some(Me=>Me in x))throw new Error("sign() legacy options not supported");let{lowS:C,prehash:D,extraEntropy:L}=x;C==null&&(C=!0),v=qe("msgHash",v),Ld(x),D&&(v=qe("prehashed msgHash",e(v)));const R=se(v),ce=Er(o,w),te=[V(ce),V(R)];if(L!=null&&L!==!1){const Me=L===!0?s(u.secret):L;te.push(qe("extraEntropy",Me))}const ue=Ge(...te),ee=R;function pe(Me){const we=F(Me);if(!o.isValidNot0(we))return;const Ie=o.inv(we),Xt=t.BASE.multiply(we).toAffine(),b=o.create(Xt.x);if(b===es)return;const m=o.create(Ie*o.create(ee+b*ce));if(m===es)return;let N=(Xt.x===b?0:2)|Number(Xt.y&Dr),z=m;return C&&f(m)&&(z=d(m),N^=1),new p(b,z,N)}return{seed:ue,k2sig:pe}}const A={lowS:n.lowS,prehash:!1},k={lowS:n.lowS,prehash:!1};function M(v,w,x=A){const{seed:C,k2sig:D}=O(v,w,x);return Tv(e.outputLen,o.BYTES,r)(C,D)}t.BASE.precompute(8);function I(v,w,x,C=k){const D=v;w=qe("msgHash",w),x=qe("publicKey",x),Ld(C);const{lowS:L,prehash:R,format:ce}=C;if("strict"in C)throw new Error("options.strict was renamed to lowS");let te,ue;if(ce===void 0){const ee=typeof D=="string"||ir(D),pe=!ee&&D!==null&&typeof D=="object"&&typeof D.r=="bigint"&&typeof D.s=="bigint";if(!ee&&!pe)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(pe)te=new p(D.r,D.s);else if(ee){try{te=p.fromDER(D)}catch(Me){if(!(Me instanceof Qn.Err))throw Me}if(!te)try{te=p.fromCompact(D)}catch{return!1}}}else if(ce==="compact"||ce==="der"){if(typeof D!="string"&&!ir(D))throw new Error('"der" / "compact" format expects Uint8Array signature');te=p.fromBytes(qe("sig",D),ce)}else if(ce==="js"){if(!(D instanceof p))throw new Error('"js" format expects Signature instance');te=D}else throw new Error('format must be "compact", "der" or "js"');if(!te)return!1;try{if(ue=t.fromHex(x),L&&te.hasHighS())return!1;R&&(w=e(w));const{r:ee,s:pe}=te,Me=se(w),we=o.inv(pe),Ie=o.create(Me*we),Xt=o.create(ee*we),b=t.BASE.multiplyUnsafe(Ie).add(ue.multiplyUnsafe(Xt));return b.is0()?!1:o.create(b.x)===ee}catch{return!1}}function E(v){const w=B.randomSecretKey(v);return{secretKey:w,publicKey:T(w)}}return Object.freeze({keygen:E,getPublicKey:T,sign:M,verify:I,getSharedSecret:K,utils:B,Point:t,Signature:p,info:{type:"weierstrass",lengths:u,publicKeyHasPrefix:!0}})}function f2(t){const e={a:t.a,b:t.b,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp;let s=t.allowedPrivateKeyLengths?Array.from(new Set(t.allowedPrivateKeyLengths.map(o=>Math.ceil(o/2)))):void 0;const r=Ln(e.n,{BITS:t.nBitLength,allowedLengths:s,modOnDecode:t.wrapPrivateKey}),i={Fp:n,Fn:r,allowInfinityPoint:t.allowInfinityPoint,endo:t.endo,isTorsionFree:t.isTorsionFree,clearCofactor:t.clearCofactor,fromBytes:t.fromBytes,toBytes:t.toBytes};return{CURVE:e,curveOpts:i}}function h2(t){const{CURVE:e,curveOpts:n}=f2(t),s={hmac:t.hmac,randomBytes:t.randomBytes,lowS:t.lowS,bits2int:t.bits2int,bits2int_modN:t.bits2int_modN};return{CURVE:e,curveOpts:n,hash:t.hash,ecdsaOpts:s}}function p2(t,e){return Object.assign({},e,{ProjectivePoint:e.Point,CURVE:t})}function g2(t){const{CURVE:e,curveOpts:n,hash:s,ecdsaOpts:r}=h2(t),i=l2(e,n),o=d2(i,s,r);return p2(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ta(t,e){const n=s=>g2({...t,hash:s});return{...n(e),create:n}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const mg={p:BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),h:BigInt(1),a:BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),b:BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")},wg={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),n:BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),h:BigInt(1),a:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),b:BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),Gx:BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),Gy:BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")},vg={p:BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),n:BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),h:BigInt(1),a:BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),b:BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),Gx:BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),Gy:BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")},b2=Ln(mg.p),y2=Ln(wg.p),m2=Ln(vg.p),w2=Ta({...mg,Fp:b2,lowS:!1},fr);Ta({...wg,Fp:y2,lowS:!1},mv);Ta({...vg,Fp:m2,lowS:!1,allowedPrivateKeyLengths:[130,131,132]},Fr);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const In=w2,Kr=fr;function Wr(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}class Zi{equals(e){return Wr(this.toRawBytes(),e.toRawBytes())}toBase64(){return Te(this.toRawBytes())}toString(){throw new Error("`toString` is not implemented on public keys. Use `toBase64()` or `toRawBytes()` instead.")}toSuiPublicKey(){const e=this.toSuiBytes();return Te(e)}verifyWithIntent(e,n,s){const r=gg(s,e),i=Os(r,{dkLen:32});return this.verify(i,n)}verifyPersonalMessage(e,n){return this.verifyWithIntent(oe.byteVector().serialize(e).toBytes(),n,"PersonalMessage")}verifyTransaction(e,n){return this.verifyWithIntent(e,n,"TransactionData")}verifyAddress(e){return this.toSuiAddress()===e}toSuiBytes(){const e=this.toRawBytes(),n=new Uint8Array(e.length+1);return n.set([this.flag()]),n.set(e,1),n}toSuiAddress(){return de(nt(Os(this.toSuiBytes(),{dkLen:32})).slice(0,Yr*2))}}function al(t){const e=Ee(t),n=ol[e[0]];switch(n){case"ED25519":case"Secp256k1":case"Secp256r1":const s=i2[n],r=e.slice(1,e.length-s),i=e.slice(1+r.length);return{serializedSignature:t,signatureScheme:n,signature:r,publicKey:i,bytes:e};default:throw new Error("Unsupported signature scheme")}}const Zc=33,Qc=64;class v2 extends Zi{constructor(e){if(super(),typeof e=="string"?this.data=Ee(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==Zc)throw new Error(`Invalid public key input. Expected ${Zc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.Passkey}async verify(e,n){const s=Sg(n),r=JSON.parse(s.clientDataJson);if(r.type!=="webauthn.get")return!1;const i=Ee(r.challenge.replace(/-/g,"+").replace(/_/g,"/"));if(!Wr(e,i))return!1;const o=s.userSignature.slice(1+Qc);if(!Wr(this.toRawBytes(),o))return!1;const a=new Uint8Array([...s.authenticatorData,...Kr(s.clientDataJson)]),c=s.userSignature.slice(1,Qc+1);return In.verify(c,Kr(a),o)}}v2.SIZE=Zc;function Sg(t){const e=typeof t=="string"?Ee(t):t;if(e[0]!==as.Passkey)throw new Error("Invalid signature scheme");const n=tp.parse(e.slice(1));return{signatureScheme:"Passkey",serializedSignature:Te(e),signature:e,authenticatorData:n.authenticatorData,clientDataJson:n.clientDataJson,userSignature:new Uint8Array(n.userSignature),publicKey:new Uint8Array(n.userSignature.slice(1+Qc))}}function S2(t,e){if(!!!t)throw new Error(e)}const Mg={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},M2=new Set(Object.keys(Mg));function zd(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&M2.has(e)}var Pd;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(Pd||(Pd={}));var Xc;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(Xc||(Xc={}));function $d(t){return t===9||t===32}function E2(t,e){const n=t.replace(/"""/g,'\\"""'),s=n.split(/\r\n|[\n\r]/g),r=s.length===1,i=s.length>1&&s.slice(1).every(h=>h.length===0||$d(h.charCodeAt(0))),o=n.endsWith('\\"""'),a=t.endsWith('"')&&!o,c=t.endsWith("\\"),l=a||c,u=!r||t.length>70||l||i||o;let f="";const d=r&&$d(t.charCodeAt(0));return(u&&!d||i)&&(f+=`
`),f+=n,(u||l)&&(f+=`
`),'"""'+f+'"""'}const I2=10,Eg=2;function x2(t){return Oa(t,[])}function Oa(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return _2(t,e);default:return String(t)}}function _2(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const n=[...e,t];if(A2(t)){const s=t.toJSON();if(s!==t)return typeof s=="string"?s:Oa(s,n)}else if(Array.isArray(t))return T2(t,n);return N2(t,n)}function A2(t){return typeof t.toJSON=="function"}function N2(t,e){const n=Object.entries(t);return n.length===0?"{}":e.length>Eg?"["+O2(t)+"]":"{ "+n.map(([r,i])=>r+": "+Oa(i,e)).join(", ")+" }"}function T2(t,e){if(t.length===0)return"[]";if(e.length>Eg)return"[Array]";const n=Math.min(I2,t.length),s=t.length-n,r=[];for(let i=0;i<n;++i)r.push(Oa(t[i],e));return s===1?r.push("... 1 more item"):s>1&&r.push(`... ${s} more items`),"["+r.join(", ")+"]"}function O2(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}function k2(t){return`"${t.replace(j2,C2)}"`}const j2=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function C2(t){return D2[t.charCodeAt(0)]}const D2=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],B2=Object.freeze({});function U2(t,e,n=Mg){const s=new Map;for(const _ of Object.values(Xc))s.set(_,L2(e,_));let r,i=Array.isArray(t),o=[t],a=-1,c=[],l=t,u,f;const d=[],h=[];do{a++;const _=a===o.length,B=_&&c.length!==0;if(_){if(u=h.length===0?void 0:d[d.length-1],l=f,f=h.pop(),B)if(i){l=l.slice();let j=0;for(const[K,F]of c){const se=K-j;F===null?(l.splice(se,1),j++):l[se]=F}}else{l={...l};for(const[j,K]of c)l[j]=K}a=r.index,o=r.keys,c=r.edits,i=r.inArray,r=r.prev}else if(f){if(u=i?a:o[a],l=f[u],l==null)continue;d.push(u)}let T;if(!Array.isArray(l)){var p,y;zd(l)||S2(!1,`Invalid AST Node: ${x2(l)}.`);const j=_?(p=s.get(l.kind))===null||p===void 0?void 0:p.leave:(y=s.get(l.kind))===null||y===void 0?void 0:y.enter;if(T=j==null?void 0:j.call(e,l,u,f,d,h),T===B2)break;if(T===!1){if(!_){d.pop();continue}}else if(T!==void 0&&(c.push([u,T]),!_))if(zd(T))l=T;else{d.pop();continue}}if(T===void 0&&B&&c.push([u,l]),_)d.pop();else{var S;r={inArray:i,index:a,keys:o,edits:c,prev:r},i=Array.isArray(l),o=i?l:(S=n[l.kind])!==null&&S!==void 0?S:[],a=-1,c=[],f&&h.push(f),f=l}}while(r!==void 0);return c.length!==0?c[c.length-1][1]:t}function L2(t,e){const n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function z2(t){return U2(t,$2)}const P2=80,$2={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>X(t.definitions,`

`)},OperationDefinition:{leave(t){const e=me("(",X(t.variableDefinitions,", "),")"),n=X([t.operation,X([t.name,e]),X(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:s})=>t+": "+e+me(" = ",n)+me(" ",X(s," "))},SelectionSet:{leave:({selections:t})=>Jt(t)},Field:{leave({alias:t,name:e,arguments:n,directives:s,selectionSet:r}){const i=me("",t,": ")+e;let o=i+me("(",X(n,", "),")");return o.length>P2&&(o=i+me(`(
`,jo(X(n,`
`)),`
)`)),X([o,X(s," "),r]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+me(" ",X(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>X(["...",me("on ",t),X(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:s,selectionSet:r})=>`fragment ${t}${me("(",X(n,", "),")")} on ${e} ${me("",X(s," ")," ")}`+r},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?E2(t):k2(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+X(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+X(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+me("(",X(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>me("",t,`
`)+X(["schema",X(e," "),Jt(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>me("",t,`
`)+X(["scalar",e,X(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>me("",t,`
`)+X(["type",e,me("implements ",X(n," & ")),X(s," "),Jt(r)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:s,directives:r})=>me("",t,`
`)+e+(Rd(n)?me(`(
`,jo(X(n,`
`)),`
)`):me("(",X(n,", "),")"))+": "+s+me(" ",X(r," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:s,directives:r})=>me("",t,`
`)+X([e+": "+n,me("= ",s),X(r," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>me("",t,`
`)+X(["interface",e,me("implements ",X(n," & ")),X(s," "),Jt(r)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:s})=>me("",t,`
`)+X(["union",e,X(n," "),me("= ",X(s," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:s})=>me("",t,`
`)+X(["enum",e,X(n," "),Jt(s)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>me("",t,`
`)+X([e,X(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:s})=>me("",t,`
`)+X(["input",e,X(n," "),Jt(s)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,repeatable:s,locations:r})=>me("",t,`
`)+"directive @"+e+(Rd(n)?me(`(
`,jo(X(n,`
`)),`
)`):me("(",X(n,", "),")"))+(s?" repeatable":"")+" on "+X(r," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>X(["extend schema",X(t," "),Jt(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>X(["extend scalar",t,X(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>X(["extend type",t,me("implements ",X(e," & ")),X(n," "),Jt(s)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>X(["extend interface",t,me("implements ",X(e," & ")),X(n," "),Jt(s)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>X(["extend union",t,X(e," "),me("= ",X(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>X(["extend enum",t,X(e," "),Jt(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>X(["extend input",t,X(e," "),Jt(n)]," ")}};function X(t,e=""){var n;return(n=t==null?void 0:t.filter(s=>s).join(e))!==null&&n!==void 0?n:""}function Jt(t){return me(`{
`,jo(X(t,`
`)),`
}`)}function me(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function jo(t){return me("  ",t.replace(/\n/g,`
  `))}function Rd(t){var e;return(e=t==null?void 0:t.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}var Jc=(t=>(t.PersonalMessage="PERSONAL_MESSAGE",t.TransactionData="TRANSACTION_DATA",t))(Jc||{});class ot extends String{constructor(e,n){super(e),this.value=e,this.__meta__=n}toString(){return this.value}}new ot(`
    fragment OBJECT_OWNER_FIELDS on Owner {
  __typename
  ... on AddressOwner {
    address {
      address
    }
  }
  ... on ObjectOwner {
    address {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusAddressOwner {
    startVersion
    address {
      address
    }
  }
}
    `,{fragmentName:"OBJECT_OWNER_FIELDS"});new ot(`
    fragment OBJECT_FIELDS on Object {
  address
  digest
  version
  asMoveObject {
    contents {
      bcs
      type {
        repr
      }
    }
  }
  owner {
    ...OBJECT_OWNER_FIELDS
  }
  previousTransaction {
    digest
  }
}
    fragment OBJECT_OWNER_FIELDS on Owner {
  __typename
  ... on AddressOwner {
    address {
      address
    }
  }
  ... on ObjectOwner {
    address {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusAddressOwner {
    startVersion
    address {
      address
    }
  }
}`,{fragmentName:"OBJECT_FIELDS"});new ot(`
    fragment MOVE_OBJECT_FIELDS on MoveObject {
  address
  digest
  version
  contents {
    bcs
    type {
      repr
    }
  }
  owner {
    ...OBJECT_OWNER_FIELDS
  }
  previousTransaction {
    digest
  }
}
    fragment OBJECT_OWNER_FIELDS on Owner {
  __typename
  ... on AddressOwner {
    address {
      address
    }
  }
  ... on ObjectOwner {
    address {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusAddressOwner {
    startVersion
    address {
      address
    }
  }
}`,{fragmentName:"MOVE_OBJECT_FIELDS"});new ot(`
    fragment TRANSACTION_FIELDS on Transaction {
  digest
  transactionBcs
  signatures {
    signatureBytes
  }
  effects {
    effectsBcs
    epoch {
      epochId
    }
    unchangedConsensusObjects {
      nodes {
        __typename
        ... on ConsensusObjectRead {
          object {
            asMoveObject {
              address
              contents {
                type {
                  repr
                }
              }
            }
          }
        }
      }
    }
    objectChanges {
      nodes {
        address
        inputState {
          version
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
        outputState {
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
      }
    }
    balanceChanges(first: 50) {
      pageInfo {
        hasNextPage
      }
      nodes {
        owner {
          address
        }
        coinType {
          repr
        }
        amount
      }
    }
  }
}
    `,{fragmentName:"TRANSACTION_FIELDS"});const R2=new ot(`
    query getAllBalances($owner: SuiAddress!, $limit: Int, $cursor: String) {
  address(address: $owner) {
    balances(first: $limit, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        coinType {
          repr
        }
        totalBalance
      }
    }
  }
}
    `),V2=new ot(`
    query getBalance($owner: SuiAddress!, $coinType: String! = "0x2::sui::SUI") {
  address(address: $owner) {
    balance(coinType: $coinType) {
      coinType {
        repr
      }
      totalBalance
    }
  }
}
    `),F2=new ot(`
    query getCoins($owner: SuiAddress!, $first: Int, $cursor: String, $type: String! = "0x2::coin::Coin<0x2::sui::SUI>") {
  address(address: $owner) {
    address
    objects(first: $first, after: $cursor, filter: {type: $type}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        owner {
          ...OBJECT_OWNER_FIELDS
        }
        contents {
          bcs
          json
          type {
            repr
          }
        }
        address
        version
        digest
        previousTransaction {
          digest
        }
      }
    }
  }
}
    fragment OBJECT_OWNER_FIELDS on Owner {
  __typename
  ... on AddressOwner {
    address {
      address
    }
  }
  ... on ObjectOwner {
    address {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusAddressOwner {
    startVersion
    address {
      address
    }
  }
}`),q2=new ot(`
    query getDynamicFields($parentId: SuiAddress!, $first: Int, $cursor: String) {
  address(address: $parentId) {
    dynamicFields(first: $first, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        name {
          bcs
          type {
            repr
          }
        }
        value {
          __typename
          ... on MoveValue {
            type {
              repr
            }
          }
          ... on MoveObject {
            contents {
              type {
                repr
              }
            }
          }
        }
      }
    }
  }
}
    `),K2=new ot(`
    query getMoveFunction($package: SuiAddress!, $module: String!, $function: String!) {
  package(address: $package) {
    module(name: $module) {
      function(name: $function) {
        name
        visibility
        isEntry
        typeParameters {
          constraints
        }
        parameters {
          signature
        }
        return {
          signature
        }
      }
    }
  }
}
    `),W2=new ot(`
    query getReferenceGasPrice {
  epoch {
    referenceGasPrice
  }
}
    `),G2=new ot(`
    query defaultSuinsName($address: SuiAddress!) {
  address(address: $address) {
    defaultSuinsName
  }
}
    `),H2=new ot(`
    query getOwnedObjects($owner: SuiAddress!, $limit: Int, $cursor: String, $filter: ObjectFilter) {
  address(address: $owner) {
    objects(first: $limit, after: $cursor, filter: $filter) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...MOVE_OBJECT_FIELDS
      }
    }
  }
}
    fragment MOVE_OBJECT_FIELDS on MoveObject {
  address
  digest
  version
  contents {
    bcs
    type {
      repr
    }
  }
  owner {
    ...OBJECT_OWNER_FIELDS
  }
  previousTransaction {
    digest
  }
}
fragment OBJECT_OWNER_FIELDS on Owner {
  __typename
  ... on AddressOwner {
    address {
      address
    }
  }
  ... on ObjectOwner {
    address {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusAddressOwner {
    startVersion
    address {
      address
    }
  }
}`),Y2=new ot(`
    query multiGetObjects($objectKeys: [ObjectKey!]!) {
  multiGetObjects(keys: $objectKeys) {
    ...OBJECT_FIELDS
  }
}
    fragment OBJECT_FIELDS on Object {
  address
  digest
  version
  asMoveObject {
    contents {
      bcs
      type {
        repr
      }
    }
  }
  owner {
    ...OBJECT_OWNER_FIELDS
  }
  previousTransaction {
    digest
  }
}
fragment OBJECT_OWNER_FIELDS on Owner {
  __typename
  ... on AddressOwner {
    address {
      address
    }
  }
  ... on ObjectOwner {
    address {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusAddressOwner {
    startVersion
    address {
      address
    }
  }
}`),Z2=new ot(`
    query simulateTransaction($transaction: JSON!) {
  simulateTransaction(transaction: $transaction) {
    error
    effects {
      transaction {
        ...TRANSACTION_FIELDS
      }
    }
  }
}
    fragment TRANSACTION_FIELDS on Transaction {
  digest
  transactionBcs
  signatures {
    signatureBytes
  }
  effects {
    effectsBcs
    epoch {
      epochId
    }
    unchangedConsensusObjects {
      nodes {
        __typename
        ... on ConsensusObjectRead {
          object {
            asMoveObject {
              address
              contents {
                type {
                  repr
                }
              }
            }
          }
        }
      }
    }
    objectChanges {
      nodes {
        address
        inputState {
          version
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
        outputState {
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
      }
    }
    balanceChanges(first: 50) {
      pageInfo {
        hasNextPage
      }
      nodes {
        owner {
          address
        }
        coinType {
          repr
        }
        amount
      }
    }
  }
}`),Q2=new ot(`
    mutation executeTransaction($transactionDataBcs: Base64!, $signatures: [Base64!]!) {
  executeTransaction(
    transactionDataBcs: $transactionDataBcs
    signatures: $signatures
  ) {
    errors
    effects {
      transaction {
        ...TRANSACTION_FIELDS
      }
    }
  }
}
    fragment TRANSACTION_FIELDS on Transaction {
  digest
  transactionBcs
  signatures {
    signatureBytes
  }
  effects {
    effectsBcs
    epoch {
      epochId
    }
    unchangedConsensusObjects {
      nodes {
        __typename
        ... on ConsensusObjectRead {
          object {
            asMoveObject {
              address
              contents {
                type {
                  repr
                }
              }
            }
          }
        }
      }
    }
    objectChanges {
      nodes {
        address
        inputState {
          version
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
        outputState {
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
      }
    }
    balanceChanges(first: 50) {
      pageInfo {
        hasNextPage
      }
      nodes {
        owner {
          address
        }
        coinType {
          repr
        }
        amount
      }
    }
  }
}`),X2=new ot(`
    query getTransactionBlock($digest: String!) {
  transaction(digest: $digest) {
    ...TRANSACTION_FIELDS
  }
}
    fragment TRANSACTION_FIELDS on Transaction {
  digest
  transactionBcs
  signatures {
    signatureBytes
  }
  effects {
    effectsBcs
    epoch {
      epochId
    }
    unchangedConsensusObjects {
      nodes {
        __typename
        ... on ConsensusObjectRead {
          object {
            asMoveObject {
              address
              contents {
                type {
                  repr
                }
              }
            }
          }
        }
      }
    }
    objectChanges {
      nodes {
        address
        inputState {
          version
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
        outputState {
          asMoveObject {
            address
            contents {
              type {
                repr
              }
            }
          }
        }
      }
    }
    balanceChanges(first: 50) {
      pageInfo {
        hasNextPage
      }
      nodes {
        owner {
          address
        }
        coinType {
          repr
        }
        amount
      }
    }
  }
}`),J2=new ot(`
    query verifyZkLoginSignature($bytes: Base64!, $signature: Base64!, $intentScope: ZkLoginIntentScope!, $author: SuiAddress!) {
  verifyZkLoginSignature(
    bytes: $bytes
    signature: $signature
    intentScope: $intentScope
    author: $author
  ) {
    success
    error
  }
}
    `);var Ig=t=>{throw TypeError(t)},cl=(t,e,n)=>e.has(t)||Ig("Cannot "+n),eS=(t,e,n)=>(cl(t,e,"read from private field"),n?n.call(t):e.get(t)),Vd=(t,e,n)=>e.has(t)?Ig("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),tS=(t,e,n,s)=>(cl(t,e,"write to private field"),e.set(t,n),n),Ut=(t,e,n)=>(cl(t,e,"access private method"),n),oa,gt,Et;class nS extends Rp{constructor({graphqlClient:e,mvr:n}){super({network:e.network,base:e,mvr:n}),Vd(this,gt),Vd(this,oa),tS(this,oa,e)}async getObjects(e){const n=Ki(e.objectIds,50),s=[];for(const r of n){const i=await Ut(this,gt,Et).call(this,{query:Y2,variables:{objectKeys:r.map(o=>({address:o}))}},o=>o.multiGetObjects);s.push(...r.map(o=>de(o)).map(o=>i.find(a=>(a==null?void 0:a.address)===o)??new An("notFound",`Object ${o} not found`)).map(o=>{var a,c,l,u,f,d,h;return o instanceof An?o:{id:o.address,version:(a=o.version)==null?void 0:a.toString(),digest:o.digest,owner:uc(o.owner),type:(u=(l=(c=o.asMoveObject)==null?void 0:c.contents)==null?void 0:l.type)==null?void 0:u.repr,content:Promise.resolve((d=(f=o.asMoveObject)==null?void 0:f.contents)!=null&&d.bcs?Ee(o.asMoveObject.contents.bcs):new Uint8Array),previousTransaction:((h=o.previousTransaction)==null?void 0:h.digest)??null}}))}return{objects:s}}async getOwnedObjects(e){const n=await Ut(this,gt,Et).call(this,{query:H2,variables:{owner:e.address,limit:e.limit,cursor:e.cursor,filter:e.type?{type:(await this.mvr.resolveType({type:e.type})).type}:void 0}},s=>{var r;return(r=s.address)==null?void 0:r.objects});return{objects:n.nodes.map(s=>{var r,i,o,a,c;return{id:s.address,version:(r=s.version)==null?void 0:r.toString(),digest:s.digest,owner:uc(s.owner),type:(o=(i=s.contents)==null?void 0:i.type)==null?void 0:o.repr,content:Promise.resolve((a=s.contents)!=null&&a.bcs?Ee(s.contents.bcs):new Uint8Array),previousTransaction:((c=s.previousTransaction)==null?void 0:c.digest)??null}}),hasNextPage:n.pageInfo.hasNextPage,cursor:n.pageInfo.endCursor??null}}async getCoins(e){const n=await Ut(this,gt,Et).call(this,{query:F2,variables:{owner:e.address,cursor:e.cursor,first:e.limit,type:`0x2::coin::Coin<${(await this.mvr.resolveType({type:e.coinType})).type}>`}},s=>{var r;return(r=s.address)==null?void 0:r.objects});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,objects:n.nodes.map(s=>{var r,i,o,a,c,l,u;return{id:s.address,version:(r=s.version)==null?void 0:r.toString(),digest:s.digest,owner:uc(s.owner),type:(o=(i=s.contents)==null?void 0:i.type)==null?void 0:o.repr,balance:(c=(a=s.contents)==null?void 0:a.json)==null?void 0:c.balance,content:Promise.resolve((l=s.contents)!=null&&l.bcs?Ee(s.contents.bcs):new Uint8Array),previousTransaction:((u=s.previousTransaction)==null?void 0:u.digest)??null}})}}async getBalance(e){var s;const n=await Ut(this,gt,Et).call(this,{query:V2,variables:{owner:e.address,type:(await this.mvr.resolveType({type:e.coinType})).type}},r=>{var i;return(i=r.address)==null?void 0:i.balance});return{balance:{coinType:(s=n.coinType)==null?void 0:s.repr,balance:n.totalBalance}}}async getAllBalances(e){const n=await Ut(this,gt,Et).call(this,{query:R2,variables:{owner:e.address}},s=>{var r;return(r=s.address)==null?void 0:r.balances});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,balances:n.nodes.map(s=>{var r;return{coinType:(r=s.coinType)==null?void 0:r.repr,balance:s.totalBalance}})}}async getTransaction(e){const n=await Ut(this,gt,Et).call(this,{query:X2,variables:{digest:e.digest}},s=>s.transaction);return{transaction:lc(n)}}async executeTransaction(e){var s;const n=await Ut(this,gt,Et).call(this,{query:Q2,variables:{transactionDataBcs:Te(e.transaction),signatures:e.signatures}},r=>r.executeTransaction);if(n.errors)throw n.errors.length===1?new Error(n.errors[0]):new AggregateError(n.errors.map(r=>new Error(r)));return{transaction:lc((s=n.effects)==null?void 0:s.transaction)}}async dryRunTransaction(e){var s;const n=await Ut(this,gt,Et).call(this,{query:Z2,variables:{transaction:{bcs:{value:Te(e.transaction)}}}},r=>r.simulateTransaction);if(n.error)throw new Error(n.error);return{transaction:lc((s=n.effects)==null?void 0:s.transaction)}}async getReferenceGasPrice(){return{referenceGasPrice:await Ut(this,gt,Et).call(this,{query:W2},n=>{var s;return(s=n.epoch)==null?void 0:s.referenceGasPrice})}}async getDynamicFields(e){const n=await Ut(this,gt,Et).call(this,{query:q2,variables:{parentId:e.parentId}},s=>{var r;return(r=s.address)==null?void 0:r.dynamicFields});return{dynamicFields:n.nodes.map(s=>{var i,o,a,c,l,u,f,d,h,p,y,S,_,B,T,j;const r=((i=s.value)==null?void 0:i.__typename)==="MoveObject"?(a=(o=s.value.contents)==null?void 0:o.type)==null?void 0:a.repr:(l=(c=s.value)==null?void 0:c.type)==null?void 0:l.repr;return{id:dp(e.parentId,(f=(u=s.name)==null?void 0:u.type)==null?void 0:f.repr,Ee((d=s.name)==null?void 0:d.bcs)),type:Pr(((h=s.value)==null?void 0:h.__typename)==="MoveObject"?`0x2::dynamic_field::Field<0x2::dynamic_object_field::Wrapper<${(y=(p=s.name)==null?void 0:p.type)==null?void 0:y.repr}>,0x2::object::ID>`:`0x2::dynamic_field::Field<${(_=(S=s.name)==null?void 0:S.type)==null?void 0:_.repr},${r}>`),name:{type:(T=(B=s.name)==null?void 0:B.type)==null?void 0:T.repr,bcs:Ee((j=s.name)==null?void 0:j.bcs)},valueType:r}}),cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage}}async verifyZkLoginSignature(e){const n=e.intentScope==="TransactionData"?Jc.TransactionData:Jc.PersonalMessage,s=await Ut(this,gt,Et).call(this,{query:J2,variables:{bytes:e.bytes,signature:e.signature,intentScope:n,author:e.author}},r=>r.verifyZkLoginSignature);return{success:s.success??!1,errors:s.error?[s.error]:[]}}async defaultNameServiceName(e){return{data:{name:await Ut(this,gt,Et).call(this,{query:G2,signal:e.signal,variables:{address:e.address}},s=>{var r;return((r=s.address)==null?void 0:r.defaultSuinsName)??null})}}}async getMoveFunction(e){var r,i,o;const n=await Ut(this,gt,Et).call(this,{query:K2,variables:{package:(await this.mvr.resolvePackage({package:e.packageId})).package,module:e.moduleName,function:e.name}},a=>{var c,l;return(l=(c=a.package)==null?void 0:c.module)==null?void 0:l.function});let s="unknown";switch(n.visibility){case"PUBLIC":s="public";break;case"PRIVATE":s="private";break;case"FRIEND":s="friend";break}return{function:{packageId:de(e.packageId),moduleName:e.moduleName,name:n.name,visibility:s,isEntry:n.isEntry??!1,typeParameters:((r=n.typeParameters)==null?void 0:r.map(({constraints:a})=>({isPhantom:!1,constraints:a.map(c=>{switch(c){case"COPY":return"copy";case"DROP":return"drop";case"STORE":return"store";case"KEY":return"key";default:return"unknown"}})??[]})))??[],parameters:((i=n.parameters)==null?void 0:i.map(a=>Fd(a.signature)))??[],returns:((o=n.return)==null?void 0:o.map(({signature:a})=>Fd(a)))??[]}}}resolveTransactionPlugin(){throw new Error("GraphQL client does not support transaction resolution yet")}}oa=new WeakMap;gt=new WeakSet;Et=async function(t,e){const{data:n,errors:s}=await eS(this,oa).query(t);sS(s);const r=n&&(e?e(n):n);if(r==null)throw new Error("Missing response data");return r};function sS(t){if(!t||t.length===0)return;const e=t.map(n=>new rS(n));throw e.length===1?e[0]:new AggregateError(e)}class rS extends Error{constructor(e){super(e.message),this.locations=e.locations}}function uc(t){var e,n,s;switch(t.__typename){case"AddressOwner":return{$kind:"AddressOwner",AddressOwner:(e=t.address)==null?void 0:e.address};case"ConsensusAddressOwner":return{$kind:"ConsensusAddressOwner",ConsensusAddressOwner:{owner:(n=t==null?void 0:t.address)==null?void 0:n.address,startVersion:String(t.startVersion)}};case"ObjectOwner":return{$kind:"ObjectOwner",ObjectOwner:(s=t.address)==null?void 0:s.address};case"Immutable":return{$kind:"Immutable",Immutable:!0};case"Shared":return{$kind:"Shared",Shared:{initialSharedVersion:String(t.initialSharedVersion)}}}}function lc(t){var n,s,r,i,o,a,c,l,u,f,d,h;const e={};if((s=(n=t.effects)==null?void 0:n.unchangedConsensusObjects)==null||s.nodes.forEach(p=>{var y,S,_,B,T,j;if(p.__typename==="ConsensusObjectRead"){const K=(B=(_=(S=(y=p.object)==null?void 0:y.asMoveObject)==null?void 0:S.contents)==null?void 0:_.type)==null?void 0:B.repr,F=(j=(T=p.object)==null?void 0:T.asMoveObject)==null?void 0:j.address;K&&F&&(e[F]=K)}}),(i=(r=t.effects)==null?void 0:r.objectChanges)==null||i.nodes.forEach(p=>{var _,B,T,j,K,F,se,re;const y=p.address,S=((j=(T=(B=(_=p.inputState)==null?void 0:_.asMoveObject)==null?void 0:B.contents)==null?void 0:T.type)==null?void 0:j.repr)??((re=(se=(F=(K=p.outputState)==null?void 0:K.asMoveObject)==null?void 0:F.contents)==null?void 0:se.type)==null?void 0:re.repr);y&&S&&(e[y]=S)}),(a=(o=t.effects)==null?void 0:o.balanceChanges)!=null&&a.pageInfo.hasNextPage)throw new Error("Pagination for balance changes is not supported");return{digest:t.digest,effects:Fp(Ee((c=t.effects)==null?void 0:c.effectsBcs)),epoch:((f=(u=(l=t.effects)==null?void 0:l.epoch)==null?void 0:u.epochId)==null?void 0:f.toString())??null,objectTypes:Promise.resolve(e),transaction:Vp(Ee(t.transactionBcs)),signatures:t.signatures.map(p=>p.signatureBytes),balanceChanges:((h=(d=t.effects)==null?void 0:d.balanceChanges)==null?void 0:h.nodes.map(p=>{var y,S;return{coinType:(y=p==null?void 0:p.coinType)==null?void 0:y.repr,address:(S=p.owner)==null?void 0:S.address,amount:p.amount}}))??[]}}function Fd(t){let e=null;return t.ref==="&"?e="immutable":t.ref==="&mut"&&(e="mutable"),{reference:e,body:eu(t.body)}}function eu(t){switch(t){case"address":return{$kind:"address"};case"bool":return{$kind:"bool"};case"u8":return{$kind:"u8"};case"u16":return{$kind:"u16"};case"u32":return{$kind:"u32"};case"u64":return{$kind:"u64"};case"u128":return{$kind:"u128"};case"u256":return{$kind:"u256"}}if(typeof t=="string")throw new Error(`Unknown type: ${t}`);if("vector"in t)return{$kind:"vector",vector:eu(t.vector)};if("datatype"in t)return{$kind:"datatype",datatype:{typeName:`${de(t.datatype.package)}::${t.datatype.module}::${t.datatype.type}`,typeParameters:t.datatype.typeParameters.map(e=>eu(e))}};if("typeParameter"in t)return{$kind:"typeParameter",index:t.typeParameter};throw new Error(`Unknown type: ${JSON.stringify(t)}`)}var xg=t=>{throw TypeError(t)},_g=(t,e,n)=>e.has(t)||xg("Cannot "+n),ho=(t,e,n)=>(_g(t,e,"read from private field"),n?n.call(t):e.get(t)),po=(t,e,n)=>e.has(t)?xg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),go=(t,e,n,s)=>(_g(t,e,"write to private field"),e.set(t,n),n),Co,Do,Bo,Uo;class iS extends Error{}class oS extends nl{constructor({url:e,fetch:n=fetch,headers:s={},queries:r={},network:i="unknown",mvr:o}){super({network:i}),po(this,Co),po(this,Do),po(this,Bo),po(this,Uo),go(this,Co,e),go(this,Do,r),go(this,Bo,s),go(this,Uo,(...a)=>n(...a)),this.core=new nS({graphqlClient:this,mvr:o})}async query(e){const n=await ho(this,Uo).call(this,ho(this,Co),{method:"POST",headers:{"Content-Type":"application/json",...ho(this,Bo)},body:JSON.stringify({query:typeof e.query=="string"||e.query instanceof String?String(e.query):z2(e.query),variables:e.variables,extensions:e.extensions,operationName:e.operationName}),signal:e.signal});if(!n.ok)throw new iS(`GraphQL request failed: ${n.statusText} (${n.status})`);return await n.json()}async execute(e,n){return this.query({...n,query:ho(this,Do)[e]})}}Co=new WeakMap;Do=new WeakMap;Bo=new WeakMap;Uo=new WeakMap;function aS(t){for(let e=0;e<t.length;e++)if(t[e]!==0)return e;return-1}function ul(t,e){const n=t.toString(16);return Dn(n.padStart(e*2,"0").slice(-32*2))}function Ag(t,e){const n=ul(t,e),s=aS(n);return s===-1?new Uint8Array([0]):n.slice(s)}function cS(t){return t==="accounts.google.com"?"https://accounts.google.com":t}function uS(t){if(t.length!==1)throw new Error("Invalid base64Url character: "+t);const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(t);if(n===-1)throw new Error("Invalid base64Url character: "+t);const s=n.toString(2).padStart(6,"0");return Array.from(s).map(Number)}function lS(t){let e=[];for(let n=0;n<t.length;n++){const s=t.charAt(n),r=uS(s);e=e.concat(r)}return e}function dS(t,e){if(t.length<2)throw new Error(`Input (s = ${t}) is not tightly packed because s.length < 2`);let n=lS(t);const s=e%4;if(s!==0)if(s===1)n=n.slice(2);else if(s===2)n=n.slice(4);else throw new Error(`Input (s = ${t}) is not tightly packed because i%4 = 3 (i = ${e}))`);const r=(e+t.length-1)%4;if(r!==3)if(r===2)n=n.slice(0,n.length-2);else if(r===1)n=n.slice(0,n.length-4);else throw new Error(`Input (s = ${t}) is not tightly packed because (i + s.length - 1)%4 = 0 (i = ${e}))`);if(n.length%8!==0)throw new Error("We should never reach here...");const i=new Uint8Array(Math.floor(n.length/8));let o=0;for(let a=0;a<n.length;a+=8){const c=n.slice(a,a+8),l=parseInt(c.join(""),2);i[o++]=l}return new TextDecoder().decode(i)}function fS(t){if(!(t.slice(-1)==="}"||t.slice(-1)===","))throw new Error("Invalid claim");const e=JSON.parse("{"+t.slice(0,-1)+"}");if(Object.keys(e).length!==1)throw new Error("Invalid claim");const n=Object.keys(e)[0];return[n,e[n]]}function Ng(t,e){const n=dS(t.value,t.indexMod4),[s,r]=fS(n);if(s!==e)throw new Error(`Invalid field name: found ${s} expected ${e}`);return r}const hS=g.struct("ZkLoginSignature",{inputs:g.struct("ZkLoginSignatureInputs",{proofPoints:g.struct("ZkLoginSignatureInputsProofPoints",{a:g.vector(g.string()),b:g.vector(g.vector(g.string())),c:g.vector(g.string())}),issBase64Details:g.struct("ZkLoginSignatureInputsClaim",{value:g.string(),indexMod4:g.u8()}),headerBase64:g.string(),addressSeed:g.string()}),maxEpoch:g.u64(),userSignature:g.byteVector()});function pS(t){return hS.parse(typeof t=="string"?Ee(t):t)}var Tg=t=>{throw TypeError(t)},ll=(t,e,n)=>e.has(t)||Tg("Cannot "+n),Kn=(t,e,n)=>(ll(t,e,"read from private field"),n?n.call(t):e.get(t)),bo=(t,e,n)=>e.has(t)?Tg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),yr=(t,e,n,s)=>(ll(t,e,"write to private field"),e.set(t,n),n),qd=(t,e,n)=>(ll(t,e,"access private method"),n),tn,di,fi,Lo,tu;const gS=class bs extends Zi{constructor(e,{client:n}={}){super(),bo(this,Lo),bo(this,tn),bo(this,di),bo(this,fi),yr(this,di,n),typeof e=="string"?yr(this,tn,Ee(e)):e instanceof Uint8Array?yr(this,tn,e):yr(this,tn,Uint8Array.from(e)),yr(this,fi,Kn(this,tn).length!==Kn(this,tn)[0]+1+32),Kn(this,fi)&&yr(this,tn,Ir(Kn(this,tn)))}static fromBytes(e,{client:n,address:s,legacyAddress:r}={}){let i;if(r===!0?i=new bs(Ir(e,!0),{client:n}):r===!1?i=new bs(Ir(e,!1),{client:n}):s?(i=new bs(Ir(e,!1),{client:n}),i.toSuiAddress()!==s&&(i=new bs(Ir(e,!0),{client:n}))):i=new bs(e,{client:n}),s&&i.toSuiAddress()!==s)throw new Error("Public key bytes do not match the provided address");return i}static fromProof(e,n){const{issBase64Details:s,addressSeed:r}=n,i=Ng(s,"iss"),o=nu(BigInt(r),i,{legacyAddress:!0});if(o.toSuiAddress()===e)return o;const a=nu(BigInt(r),i,{legacyAddress:!1});if(a.toSuiAddress()!==e)throw new Error("Proof does not match address");return a}equals(e){return super.equals(e)}toSuiAddress(){return Kn(this,fi)?qd(this,Lo,tu).call(this):super.toSuiAddress()}toRawBytes(){return Kn(this,tn)}flag(){return as.ZkLogin}async verify(e,n){throw Error("does not support")}verifyPersonalMessage(e,n){const s=su(n),r=new bs(s.publicKey).toSuiAddress();return Kd({address:r,bytes:Te(e),signature:s.serializedSignature,intentScope:"PersonalMessage",client:Kn(this,di)})}verifyTransaction(e,n){const s=su(n),r=new bs(s.publicKey).toSuiAddress();return Kd({address:r,bytes:Te(e),signature:s.serializedSignature,intentScope:"TransactionData",client:Kn(this,di)})}verifyAddress(e){return e===super.toSuiAddress()||e===qd(this,Lo,tu).call(this)}};tn=new WeakMap;di=new WeakMap;fi=new WeakMap;Lo=new WeakSet;tu=function(){const t=Ir(Kn(this,tn),!0),e=new Uint8Array(t.length+1);return e[0]=this.flag(),e.set(t,1),de(nt(Os(e,{dkLen:32})).slice(0,Yr*2))};let bS=gS;function nu(t,e,n){const s=n!=null&&n.legacyAddress?Ag(t,32):ul(t,32),r=new TextEncoder().encode(cS(e)),i=new Uint8Array(1+r.length+s.length);return i.set([r.length],0),i.set(r,1),i.set(s,1+r.length),new bS(i,n)}function Ir(t,e=!1){const n=t[0]+1,s=BigInt(`0x${Ts(t.slice(n))}`),r=e?Ag(s,32):ul(s,32),i=new Uint8Array(n+r.length);return i.set(t.slice(0,n),0),i.set(r,n),i}async function Kd({address:t,bytes:e,signature:n,intentScope:s,client:r=new oS({url:"https://graphql.mainnet.sui.io/graphql"})}){const i=await r.core.verifyZkLoginSignature({bytes:e,signature:n,intentScope:s,author:t});return i.success===!0&&i.errors.length===0}function su(t){const e=typeof t=="string"?Ee(t):t;if(e[0]!==as.ZkLogin)throw new Error("Invalid signature scheme");const n=e.slice(1),{inputs:s,maxEpoch:r,userSignature:i}=pS(n),{issBase64Details:o,addressSeed:a}=s,c=Ng(o,"iss"),l=nu(BigInt(a),c);return{serializedSignature:Te(e),signatureScheme:"ZkLogin",zkLogin:{inputs:s,maxEpoch:r,userSignature:i,iss:c,addressSeed:BigInt(a)},signature:e,publicKey:l.toRawBytes()}}function yS({signature:t,signatureScheme:e,publicKey:n}){if(!n)throw new Error("`publicKey` is required");const s=n.toRawBytes(),r=new Uint8Array(1+t.length+s.length);return r.set([as[e]]),r.set(t,1),r.set(s,1+t.length),Te(r)}function mS(t){const e=Ee(t),n=ol[e[0]];switch(n){case"Passkey":return Sg(t);case"MultiSig":const s=oe.MultiSig.parse(e.slice(1));return{serializedSignature:t,signatureScheme:n,multisig:s,bytes:e,signature:void 0};case"ZkLogin":return su(t);case"ED25519":case"Secp256k1":case"Secp256r1":return al(t);default:throw new Error("Unsupported signature scheme")}}const zo=32,Og="suiprivkey";class wS{async signWithIntent(e,n){const s=gg(n,e),r=Os(s,{dkLen:32});return{signature:yS({signature:await this.sign(r),signatureScheme:this.getKeyScheme(),publicKey:this.getPublicKey()}),bytes:Te(e)}}async signTransaction(e){return this.signWithIntent(e,"TransactionData")}async signPersonalMessage(e){const{signature:n}=await this.signWithIntent(g.byteVector().serialize(e).toBytes(),"PersonalMessage");return{bytes:Te(e),signature:n}}async signAndExecuteTransaction({transaction:e,client:n}){const s=await e.build({client:n}),{signature:r}=await this.signTransaction(s);return(await n.core.executeTransaction({transaction:s,signatures:[r]})).transaction}toSuiAddress(){return this.getPublicKey().toSuiAddress()}}class dl extends wS{}function ka(t){const{prefix:e,words:n}=Zo.decode(t);if(e!==Og)throw new Error("invalid private key prefix");const s=new Uint8Array(Zo.fromWords(n)),r=s.slice(1),i=ol[s[0]];return{scheme:i,schema:i,secretKey:r}}function fl(t,e){if(t.length!==zo)throw new Error("Invalid bytes length");const n=as[e],s=new Uint8Array(t.length+1);return s.set([n]),s.set(t,1),Zo.encode(Og,Zo.toWords(s))}function Wd(t){return!!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(t)}function kg(t){return!!new RegExp("^m\\/(54|74)'\\/784'\\/[0-9]+'\\/[0-9]+\\/[0-9]+$").test(t)}function hl(t){return _v(t,"")}function vS(t){return Ts(hl(t))}const jg=Fr,SS="ed25519 seed",MS=2147483648,ES=new RegExp("^m(\\/[0-9]+')+$"),Cg=t=>t.replace("'",""),IS=t=>{const n=js.create(jg,SS).update(Uu(t)).digest(),s=n.slice(0,32),r=n.slice(32);return{key:s,chainCode:r}},xS=({key:t,chainCode:e},n)=>{const s=new ArrayBuffer(4);new DataView(s).setUint32(0,n);const i=new Uint8Array(1+t.length+s.byteLength);i.set(new Uint8Array(1).fill(0)),i.set(t,1),i.set(new Uint8Array(s,0,s.byteLength),t.length+1);const o=js.create(jg,e).update(i).digest(),a=o.slice(0,32),c=o.slice(32);return{key:a,chainCode:c}},_S=t=>ES.test(t)?!t.split("/").slice(1).map(Cg).some(isNaN):!1,Gd=(t,e,n=MS)=>{if(!_S(t))throw new Error("Invalid derivation path");const{key:s,chainCode:r}=IS(e);return t.split("/").slice(1).map(Cg).map(o=>parseInt(o,10)).reduce((o,a)=>xS(o,a+n),{key:s,chainCode:r})},ru=32;class Dg extends Zi{constructor(e){if(super(),typeof e=="string"?this.data=Ee(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==ru)throw new Error(`Invalid public key input. Expected ${ru} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.ED25519}async verify(e,n){let s;if(typeof n=="string"){const r=al(n);if(r.signatureScheme!=="ED25519")throw new Error("Invalid signature scheme");if(!Wr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return qn.verify(s,e,this.toRawBytes())}}Dg.SIZE=ru;const Hd="m/44'/784'/0'/0'/0'";class Tn extends dl{constructor(e){if(super(),e)this.keypair={publicKey:e.publicKey,secretKey:e.secretKey.slice(0,32)};else{const n=qn.utils.randomPrivateKey();this.keypair={publicKey:qn.getPublicKey(n),secretKey:n}}}getKeyScheme(){return"ED25519"}static generate(){const e=qn.utils.randomPrivateKey();return new Tn({publicKey:qn.getPublicKey(e),secretKey:e})}static fromSecretKey(e,n){if(typeof e=="string"){const i=ka(e);if(i.schema!=="ED25519")throw new Error(`Expected a ED25519 keypair, got ${i.schema}`);return this.fromSecretKey(i.secretKey,n)}const s=e.length;if(s!==zo)throw new Error(`Wrong secretKey size. Expected ${zo} bytes, got ${s}.`);const r={publicKey:qn.getPublicKey(e),secretKey:e};if(!n||!n.skipValidation){const o=new TextEncoder().encode("sui validation"),a=qn.sign(o,e);if(!qn.verify(a,o,r.publicKey))throw new Error("provided secretKey is invalid")}return new Tn(r)}getPublicKey(){return new Dg(this.keypair.publicKey)}getSecretKey(){return fl(this.keypair.secretKey.slice(0,zo),this.getKeyScheme())}async sign(e){return qn.sign(e,this.keypair.secretKey)}static deriveKeypair(e,n){if(n==null&&(n=Hd),!Wd(n))throw new Error("Invalid derivation path");const{key:s}=Gd(n,vS(e));return Tn.fromSecretKey(s)}static deriveKeypairFromSeed(e,n){if(n==null&&(n=Hd),!Wd(n))throw new Error("Invalid derivation path");const{key:s}=Gd(n,e);return Tn.fromSecretKey(s)}}class pl{static stringToKeyPair(e){const n=pl.stringToPhrase(e);return Tn.deriveKeypair(n)}static stringToPhrase(e){let n=`${e}`;do n=n.repeat(2)+'*"';while(n.length<32);const s=Array.from(`${n}`).map(o=>o.charCodeAt(0));if(s.length>32)for(let o=32;o<s.length;o++){const a=o%32;s[a]=(s[a]+s[o])%256}const r=new Uint8Array(32);return r.set(s.slice(0,32)),Iv(r,Av)}}const Ss=class Ss extends Bn{constructor(e={}){super(e),this._suiMaster=e.suiMaster,this._objects={}}asArray(){return Object.values(this._objects)}findMostRecentByTypeName(e){return this.findMostRecent(n=>n.typeName==e)}find(e){for(const n in this._objects)if(e(this._objects[n]))return this._objects[n];return null}findMostRecent(e){let n=null,s=null;for(const r in this._objects)e(this._objects[r])&&(!n||n.getTime()<=this._objects[r].constructedAt.getTime())&&(n=this._objects[r].constructedAt,s=this._objects[r]);return s}push(e){if(e&&e.address){const n=e;return this._objects[n.address]=n,n}else if(e&&(""+e).indexOf("0x")===0){if(this._objects[e])return this._objects[e];const n=new cr({id:e,suiMaster:this._suiMaster});return this._objects[n.address]=n,n}return null}byAddress(e){return this._objects[e]?this._objects[e]:null}async fetchObjects(){const e=this.asArray(),n=[];for(const i of e)!i.isDeleted&&n.indexOf(i.address)===-1&&n.push(i.address);this.log("querying details about",n.length,"objects"),this.log(n);let s=[];const r=50;for(let i=0;i<n.length;i+=r){const o=n.slice(i,i+r);let a=[],c=null;try{const l=console.warn;console.warn=u=>{c=u},a=await this._suiMaster._client.multiGetObjects({ids:o,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),console.warn=l}catch(l){console.error(l)}c?this.log("got",a.length,"objects but with warning (ok, but probably it is different client vs rpc versions)"):this.log("got",a.length,"objects"),a&&a.length&&(s=s.concat(a))}for(const i of e){const o=s.find(a=>{var c;return i.idEquals((c=a==null?void 0:a.data)==null?void 0:c.objectId)});o?i.tryToFillDataFromObjectChange(o):s.find(c=>{var l,u;return((l=c==null?void 0:c.error)==null?void 0:l.code)=="deleted"&&i.idEquals((u=c==null?void 0:c.error)==null?void 0:u.object_id)})?i.markAsDeleted():this.log("not found in results",i)}}static instanceOf(e,n={}){return Ss._instances[e]||(Ss._instances[e]=new Ss(n)),Ss._instances[e]}};hr(Ss,"_instances",{});let iu=Ss;class AS{constructor(e={}){this._coinType=e.coinType,this._suiCoins=e.suiCoins,this._exists=null,this._metadata=null}normalizeAmount(e){if(typeof e=="string"&&e.indexOf(".")!==-1){if(!this.decimals)throw new Error("Please load coin metadata first");return BigInt(Math.floor(parseFloat(e,10)*Math.pow(10,this.decimals)))}return BigInt(e)}async lazyNormalizeAmount(e){return await this.getMetadata(),this.normalizeAmount(e)}amountToString(e,n={}){if(!this.decimals)throw new Error("Please load coin metadata first");const s=!!n.withAbbr,r=n.separateThousands,i=(""+BigInt(e)).padStart(this.decimals+1,"0"),o=i.length-this.decimals;let a=i.substring(0,o)+"."+i.substring(o);if(a.includes(".")&&(a=a.replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""),a.includes(".")||(a=""+a+".0")),s){const c=BigInt(Math.floor(Number(a)));if(c>1000n){if(c<1000000n)return this.formatWithAbbr(c,1000n,"K",r);if(c>=1000000n&&c<1000000000n)return this.formatWithAbbr(c,1000000n,"M",r);if(c>=1000000000n&&c<1000000000000n)return this.formatWithAbbr(c,1000000000n,"B",r);if(c>=1000000000000n)return this.formatWithAbbr(c,1000000000000n,"T",r)}}if(r){const[c,l]=a.split("."),u=typeof r=="string"?r:",";a=""+c.replace(/\B(?=(\d{3})+(?!\d))/g,u)+"."+l}return a}formatWithAbbr(e,n,s,r=!1){let i=""+Math.floor(Number(e)/Number(n/1000n));i=i.padEnd(4,"0");const o=Intl.NumberFormat("en-US").format(Number(i));let a="";r&&(a=typeof r=="string"?r:",");const c=o.split(","),l=c.pop();return c.join(a)+"."+l+s}get suiMaster(){return this._suiCoins.suiMaster}get coinType(){return this._coinType.indexOf("0x")===0?this._coinType:"0x"+this._coinType}get coinObjectType(){return"0x2::coin::Coin<"+this.coinType+">"}get decimals(){if(this.metadata)return this.metadata.decimals}get metadata(){return this._metadata}get symbol(){return this.metadata?this.metadata.symbol:null}get name(){return this.metadata.name}isSUI(){return this._coinType.toLowerCase()=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::sui"}setMetadata(e){return e&&e.decimals&&e.decimals>0&&e.name&&e.symbol?(this._metadata=e,this._exists=!0,!0):!1}async getMetadata(){if(this._metadata)return this._metadata;if(this.__getMetadataPromise)return await this.__getMetadataPromise;this.__getMetadataResolver=null,this.__getMetadataPromise=new Promise(n=>{this.__getMetadataResolver=n});let e=null;try{e=await this.suiMaster.client.getCoinMetadata({coinType:this.coinType})}catch(n){console.error(n),e=null}return e?(this._metadata=e,this._exists=!0):this._exists=!1,this.__getMetadataResolver(!0),!0}async getBalance(e){const n=[];let s=null,r=null;do s=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:r}),n.push(...s.data),r=s.nextCursor;while(s.hasNextPage);let i=BigInt(0);for(const o of n)i=i+BigInt(o.balance);return i}async coinOfAmountToTxCoin(e,n,s,r=!1){const i=await this.lazyNormalizeAmount(s),o=BigInt(i),a=await this.coinObjectsEnoughForAmount(n,o,r);if(!a||!a.length)throw new Error("you do not have enough coins of type "+this.coinType);if(a.length==1)return this.isSUI()?e.add($t.SplitCoins(e.gas,[e.pure.u64(o)])):e.add($t.SplitCoins(e.object(a[0]),[e.pure.u64(o)]));{const c=a.shift();return e.add($t.MergeCoins(e.object(c),a.map(u=>e.object(u)))),e.add($t.SplitCoins(e.object(c),[e.pure.u64(o)]))}}async coinObjectsEnoughForAmount(e,n,s=!1){const r=BigInt(n),i=[],o=[];let a=null,c=null;do a=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:c}),o.push(...a.data),c=a.nextCursor;while(a.hasNextPage);o.sort((u,f)=>Number(f.balance)-Number(u.balance));let l=BigInt(0);for(const u of o)l<=r?(i.push(u.coinObjectId),l=l+BigInt(u.balance)):s&&BigInt(u.balance)==0n&&i.push(u.coinObjectId);return l>=r?i:null}}const NS=[{decimals:9,name:"Sui",symbol:"SUI",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x0000000000000000000000000000000000000000000000000000000000000002-sui-SUI.svg",id:"0x9258181f5ceac8dbffb7030890243caed69a9599d2886d957a9cb7656af3bdb3",type:"0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"},{decimals:5,name:"FUD",symbol:"FUD",description:"The community coin of Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1-fud-FUD.webp",id:"0x01087411ef48aaac1eb6e24803213e3a60a03b147dac930e5e341f17a85e524e",type:"0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD"},{decimals:4,name:"SPAM",symbol:"SPAM",description:"The original Proof of Spam coin",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a-spam-SPAM.webp",id:"0xe01e2172335cd2b52bf2b3010ae6c95e8c2b4958db72ba11330be70e85793274",type:"0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a::spam::SPAM"},{decimals:6,name:"DeepBook Token",symbol:"DEEP",description:"The DEEP token secures the DeepBook protocol, the premier wholesale liquidity venue for on-chain trading.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270-deep-DEEP.svg",id:"0x6e60b051a08fa836f5a7acd7c464c8d9825bc29c44657fe170fe9b8e1e4770c0",type:"0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP"},{decimals:6,name:"USDC",symbol:"USDC",description:"USDC is a US dollar-backed stablecoin issued by Circle. USDC is designed to provide a faster, safer, and more efficient way to send, spend, and exchange money around the world.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7-usdc-USDC.webp",id:"0x69b7a7c3c200439c1b5f3b19d7d495d5966d5f08de66c69276152f8db3992ec6",type:"0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC"},{decimals:6,name:"USDC (Bridged)",symbol:"USDC (Bridged)",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf-coin-COIN.webp",id:"0x4fbf84f3029bd0c0b77164b587963be957f853eccf834a67bb9ecba6ec80f189",type:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},{decimals:6,name:"Tether USD",symbol:"USDT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c-coin-COIN.webp",id:"0xfb0e3eb97dd158a5ae979dddfa24348063843c5b20eb8381dd5fa7c93699e45c",type:"0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN"},{decimals:9,name:"Bucket USD",symbol:"BUCK",description:"the stablecoin minted through bucketprotocol.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2-buck-BUCK.svg",id:"0x0db5e20f3fc2b12e294e5474babbec1c2efd96f21663accfbcb25da99a48838a",type:"0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK"},{decimals:9,name:"Cetus Token",symbol:"CETUS",description:"CETUS is the native token of Cetus Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b-cetus-CETUS.webp",id:"0x4c0dce55eff2db5419bbd2d239d1aa22b4a400c01bbb648b058a9883989025da",type:"0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS"},{decimals:9,name:"Turbos",symbol:"TURBOS",description:"Turbos Finance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a-turbos-TURBOS.svg",id:"0x95a4518ae9e019c757df6703dce9ea5ecac8b319b9afed3a44c4d50363a66b42",type:"0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS"},{decimals:9,name:"SPT",symbol:"SPT",description:"Seapad launchpad foundation token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca-spt-SPT.webp",id:"0x5075594c01d46f3bcbc4a7ef1462058273bece7793eebd0464963597c9fd0935",type:"0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca::spt::SPT"},{decimals:0,name:"KOTO",symbol:"KOTO",description:"The utility token of the Studio Mirai ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975-koto-KOTO.webp",id:"0x5db6c4ce2921c9ef5fe725d18f0f7b276bebde5fa7981f9bc2bb504c9913384a",type:"0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975::koto::KOTO"},{decimals:2,name:"BLUB",symbol:"BLUB",description:"A Dirty Fish in the Waters of the Sui Ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0-BLUB-BLUB.webp",id:"0xac32b519790cae96c3317457d903d61d04f1bc8f7710096d80fcba72c7a53703",type:"0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB"},{decimals:9,name:"Volo Staked SUI",symbol:"vSUI",description:"Volo's SUI staking solution provides the best user experience and highest level of decentralization, security, combined with an attractive reward mechanism and instant staking liquidity through a bond-like synthetic token called voloSUI.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55-cert-CERT.webp",id:"0xabd84a23467b33854ab25cf862006fd97479f8f6f53e50fe732c43a274d939bd",type:"0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT"},{decimals:9,name:"NAVX Token",symbol:"NAVX",description:"One-stop Liquidity Protocol on Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5-navx-NAVX.webp",id:"0xdc0e051f8aab62d5ba1816bb7a03097faeccb7546c958da571d48882fd8dd0cd",type:"0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX"},{decimals:9,name:"haSUI",symbol:"haSUI",description:"haSUI is a staking token of SUI",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d-hasui-HASUI.svg",id:"0x2c5f33af93f6511df699aaaa5822d823aac6ed99d4a0de2a4a50b3afa0172e24",type:"0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI"},{decimals:9,name:"HammerHead",symbol:"HHS",description:"The Coolest Shark on SUI ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c-hhs-HHS.webp",id:"0x7e24b4469033ee68de54da91032a598e27e5c0ddfc366315d22d1eba7a955f96",type:"0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c::hhs::HHS"},{decimals:9,name:"REAP",symbol:"REAP",description:"Reap Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066-reap_token-REAP_TOKEN.webp",id:"0x4602dc7bd60d623c57424af5480fe9c104d30bbbb051af18e0a283b3dd7a5367",type:"0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066::reap_token::REAP_TOKEN"},{decimals:9,name:"Scallop",symbol:"SCA",description:"SCA is the native token of Scallop Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6-sca-SCA.webp",id:"0x5d26a1e9a55c88147ac870bfa31b729d7f49f8804b8b3adfdf3582d301cca844",type:"0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA"},{decimals:9,name:"afSUI",symbol:"AFSUI",description:"Aftermath Staked Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc-afsui-AFSUI.webp",id:"0x2f9217f533e51334873a39b8026a4aa6919497b47f49d0986a4f1aec66f8a34d",type:"0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI"},{decimals:9,name:"Suiswap Token",symbol:"SSWP",description:"Suiswap Platform Governance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc-TOKEN-TOKEN.webp",id:"0x41911b7d8d87ceee4043ea3b83f402a03d0ffa0b286e78b23dcd81c9cde0f02f",type:"0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc::TOKEN::TOKEN"},{decimals:1,name:"SuiBoxer Coin",symbol:"SBOX",description:"SUI said fuck off but we say welcome, airdrop for everyone.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6-sbox-SBOX.webp",id:"0x7f35ac7fe5a05df9e68fa7d633a382db4f002209e57ccee3bf9d9f73eedff1b9",type:"0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6::sbox::SBOX"},{decimals:6,name:"SUI PEPE",symbol:"SPEPE",description:"The biggest memecoin on SUI blockchain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df-sui_pepe-SUI_PEPE.webp",id:"0xfdf83fbcc1ad8a407d32791e43a4019e89474f7031aa64b8c05834b1af420eae",type:"0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE"},{decimals:5,name:"Sacabam",symbol:"SCB",description:"The best meme token that Sui has ever seen",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001-scb-SCB.webp",id:"0xa34116a52f537f5235fe5d9a2e92195ffcdb2b55afba70b2b86b40c7f89bb01d",type:"0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001::scb::SCB"},{decimals:9,name:"MOVE",symbol:"MOVE",description:"BlueMove",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f-smove-SMOVE.webp",id:"0x7cfcc03055a0ba4c5ba7fb9727a77e23ccf4d59035646c3c3caf58060eed09a1",type:"0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f::smove::SMOVE"},{decimals:8,name:"Wrapped Ether",symbol:"WETH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5-coin-COIN.webp",id:"0x8900e4ceede3363bef086d6b50ca89d816d0e90bf6bc46efefe1f8455e08f50f",type:"0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN"},{decimals:9,name:"SUIA",symbol:"SUIA",description:"SUIA is the native token of Suia.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19-suia_token-SUIA_TOKEN.webp",id:"0x5875baf15d9fd9cc6148dd3866266f6fc3a3064170434efe97b9ea8c23a50775",type:"0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19::suia_token::SUIA_TOKEN"},{decimals:8,name:"FlowX",symbol:"FLX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c-flx-FLX.svg",id:"0x0bfe34db38444ff4a38e44b86128c7e02d551b8fdca9709fde140292d1ef6e95",type:"0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c::flx::FLX"},{decimals:8,name:"Aptos Coin",symbol:"APT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37-coin-COIN.webp",id:"0xc969c5251f372c0f34c32759f1d315cf1ea0ee5e4454b52aea08778eacfdd0a8",type:"0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN"},{decimals:8,name:"Wrapped SOL",symbol:"SOL",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8-coin-COIN.webp",id:"0x4d2c39082b4477e3e79dc4562d939147ab90c42fc5f3e4acf03b94383cd69b6e",type:"0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN"},{decimals:8,name:"Wrapped Matic",symbol:"WMATIC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676-coin-COIN.webp",id:"0xb45d92d3ee25147c3235f881e63f7f362f9d6cbdfcba1f120fae6a6c930a1c8c",type:"0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN"},{decimals:8,name:"Wrapped BNB",symbol:"WBNB",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f-coin-COIN.webp",id:"0x1d0975ab0726f2e52384b6ea0f2c94c2dbdad8b004ee6b5ee552a3c789c044f0",type:"0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN"},{decimals:6,name:"Flame Token",symbol:"FLAME",description:"Flame Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2-flame-FLAME.webp",id:"0x1f42388fe61ae47fcd33f089bd0ee73f19f3984b2b6c09a51a755d0420fe6eab",type:"0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2::flame::FLAME"},{decimals:6,name:"ISSP Coin",symbol:"ISSP",description:"Sui20 Coin for ISSP",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8-issp-ISSP.webp",id:"0x39529b412fe961f76da1485ee48dbf7a2a084845b7f0f45eb97196e602446bb1",type:"0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8::issp::ISSP"},{decimals:9,name:"Suizuki",symbol:"ZUKI",description:"Fast chain needs fast car",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908-zuki-ZUKI.webp",id:"0x03e0c971e4bf3f1a3d0c220bb93c041c873823e2382e081a4330c4c107361d7a",type:"0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908::zuki::ZUKI"},{decimals:9,name:"Burrial",symbol:"BURRY",description:"Burry your `Sui.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2-burry-BURRY.webp",id:"0xb3e2d41c9d775545e299faa739d6448108c09ff997d13cac0e21de64c66413ee",type:"0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2::burry::BURRY"},{decimals:8,name:"Poseidollar",symbol:"PDO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880-pdo-PDO.webp",id:"0xf637a1acf7ec74634baec11b0a7cbd24244fe7d8bee7bc636cd2dcc12c756016",type:"0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880::pdo::PDO"},{decimals:6,name:"Sudo LP Token",symbol:"SLP",description:"LP Token for Sudo Market",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2-slp-SLP.webp",id:"0xaa1c21d59252f4b790faf9ab1c3a9fac5be59b612688c0ec2e24807d6cf9f626",type:"0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2::slp::SLP"},{decimals:8,name:"Wrapped AVAX",symbol:"WAVAX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766-coin-COIN.webp",id:"0x23580088ff9f83848f86bc1cbf4964735116027e9cccad11b2dc96f16badab72",type:"0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN"},{decimals:8,name:"Wrapped BTC",symbol:"WBTC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881-coin-COIN.webp",id:"0x5d3c6e60eeff8a05b693b481539e7847dfe33013e7070cdcb387f5c0cac05dfd",type:"0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN"},{decimals:8,name:"Wrapped Fantom",symbol:"WFTM",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396-coin-COIN.webp",id:"0x8b55537cb11498721f7bbe2055a9a3e9c947da81765e98d4313c820bdd7aa630",type:"0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN"},{decimals:8,name:"Celo native asset",symbol:"CELO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f-coin-COIN.webp",id:"0xe288c52bb4d70465267ed1c8f727252a40e865ce9a9d5343d13d40f5e1a1fc46",type:"0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN"},{decimals:8,name:"Poseidollar Shares",symbol:"PSH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a-psh-PSH.webp",id:"0xf6b09ea64d2f4f70e47794d84e432552ec9c7e948bf91b3eb707a5a2d056bc74",type:"0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a::psh::PSH"},{decimals:6,name:"Ondo US Dollar Yield",symbol:"USDY",description:"Ondo US Dollar Yield",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb-usdy-USDY.svg",id:"0xd8dd6cf839e2367de6e6107da4b4361f44798dd6cf26d094058d94e4cee25e36",type:"0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY"},{decimals:8,name:"Wrapped GLMR",symbol:"WGLMR",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75-coin-COIN.webp",id:"0xcd56eb0efc872d7e27fa9e5e31d70be594ccc4f40a6354521201b0e15971c8de",type:"0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75::coin::COIN"},{decimals:6,name:"SUIZ",symbol:"SUIZ",description:"Suizzle Proof of Work Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d-suiz-SUIZ.webp",id:"0x5e6858f47b0d3246177ec68075f718e80a83bab37b5471333525fba838147417",type:"0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d::suiz::SUIZ"},{decimals:9,name:"BaySwap Token",symbol:"BSWT",description:"BaySwap governance token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b-bswt-BSWT.webp",id:"0xeef5a485257ebd7e555c6d33a0a6a6cac157e10c05fe6a819488b8e521bce5f2",type:"0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b::bswt::BSWT"},{decimals:9,name:"Causa Sui",symbol:"CAUSA",description:"Ex Unitae Vires - Ens Causa Sui * suiprivkey1qr3uhgze5yuglnr6uygkyesp8z76pxu0tt2pd63gyeglda60frpn7n5epp0",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8-causa-CAUSA.webp",id:"0xb7ba98fb5ce46aa72235824632b757c064067de0239458a289348748df8c51bd",type:"0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8::causa::CAUSA"},{decimals:9,name:"Suicune",symbol:"HSUI",description:"The Legendary Beast of SUI, believed to be both the embodiment of the north winds and compassion of pure spring waters. Suicune will be fully community operated.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533-suicune-SUICUNE.webp",id:"0x9770330e38ad3f4723463085e2cc8c5e2e3df98292c1b5ee83ed3ed1f08f8381",type:"0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533::suicune::SUICUNE"},{decimals:5,name:"CHOPSUI",symbol:"CHOP",description:"Chopsui token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a-chopsui-CHOPSUI.webp",id:"0x78f4acfb5f55f354739be22231c0b166a6c0debb7464cf5bd0df3544780e6b62",type:"0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a::chopsui::CHOPSUI"},{decimals:9,name:"Stork REDACTED",symbol:"STORKPOINT",description:"Stork Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736-storktoken-STORKTOKEN.webp",id:"0xf9281ff20ff16740a93f9d378732d0f87c7776d0325fee345c9c948d6a680629",type:"0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736::storktoken::STORKTOKEN"},{decimals:9,name:"LUCKYSTAR",symbol:"LUCK",description:"LUCKYSTAR TOKEN",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179-luck-LUCK.svg",id:"0xa9cb7f72c96d23437199bcf6731b08a7e225d7efe427d04f4c69e63a8940c2f3",type:"0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179::luck::LUCK"},{decimals:9,name:"Simba the lonely lion",symbol:"SIMBA",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72-simba-SIMBA.webp",id:"0x4d3524dbaeddff858737d17e71b4a35c9971408f917fc426e289c04d8f65c6d5",type:"0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72::simba::SIMBA"},{decimals:8,name:"Vaporeon",symbol:"VAPOREON",description:"Our favorite water-type pokemon swimming on Sui. Twitter: @VaporProtocol",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79-vaporeon-VAPOREON.webp",id:"0xb4294ab2ddf3e704640278ea2e0a1e04837e68b7774cd3f9f8c7115fe45d4c27",type:"0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79::vaporeon::VAPOREON"},{decimals:2,name:"ovan suu",symbol:"SUU",description:"Co-founder of Suu Network Web 2",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24-suu-SUU.webp",id:"0x3eac27d0eb0848abd5ad35a16728d0e40d06a8155b94da4cddc2a90a3f893d76",type:"0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24::suu::SUU"},{decimals:12,name:"Pearl",symbol:"PRL",description:"The governance token of SuiPearl - the Yield Optimizer on Sui Network.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64-prl-PRL.webp",id:"0xc1274dbe242a6c4c4b881c03a862def371d9a4ae70da3348101263b4fe44e4fa",type:"0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64::prl::PRL"},{decimals:9,name:"Suiba Inu",symbol:"SUIB",description:"Emerging from Shiba's boundless love, Suiba, your liquid companion, journeys with you on the Sui chain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b-suib-SUIB.svg",id:"0xfd7cfcb627381de46e4d7bdd4a0cf3c37d8f241c8e0513565531d5e410037c59",type:"0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB"},{decimals:5,name:"KIMCHI",symbol:"KIMCHI",description:"Kimchi stands as a symbol of the Asian builder community’s innovation and creativity, serving as a platform for individuals to collaborate, exchange ideas, and push the boundaries of decentralized finance. The coin aims to form an unstoppable force within the Sui ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064-kimchi-KIMCHI.webp",id:"0x494f68995d31da43d11567a68f8fd686cb5821a7b65b63f6f2d3d950cd242d3e",type:"0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064::kimchi::KIMCHI"},{decimals:2,name:"Pikasui",symbol:"PIKA",description:"PIKA SUI is the starter of the Sui chain, designed to be your companion as you embark on the Sui chain journey. It's a memecoin that seeks to build enjoyable and amusing elements within the Sui chain",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692-pika-PIKA.webp",id:"0x8ceeca937d8273acb48a13690af83961c7b0832424f7e690c996e5f76d2011a6",type:"0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692::pika::PIKA"},{decimals:9,name:"HOMITOKEN",symbol:"HOMI",description:" The HOMI token is the native token of the HOMINIDS platform. It allows users to buy and sell Hominids NFTs, participate in wagering games to earn rewards, and interact with other platform features. HOMI will also be used for platform governance, allowing holders to vote on future updates and important decisions.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5-homi-HOMI.webp",id:"0xfcf9f351cb0ae2730d32c3862eaa03d3918768fd26094723e4d1e1889dab5239",type:"0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5::homi::HOMI"},{decimals:2,name:"LAMBALL",symbol:"LAMB",description:"'HAH, you just got Lamballed!' Lamball ($LAMB): Your Pal on the SUI blockchain. This is an exciting fusion of PalWorld and crypto. Dive into our PalWorld server, engage in thrilling events and contests to earn $LAMB and other cool prizes. Connect with fellow Palworld enthusiasts and experience the best of both realms. $LAMB has something for everyone. Join us and discover the vibrant world of $LAMB on the SUI blockchain!",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0-lamb-LAMB.webp",id:"0xea8fc1f2e7e7619a13db86cc7934de285f8465cd868df2d5358470ea181a74d3",type:"0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0::lamb::LAMB"},{decimals:9,name:"Wen Dexscreener",symbol:"WEND",description:"When will Dexscreener integrate FlowX Finance ?",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272-wend-WEND.webp",id:"0xde918bf2751178443a054c8772f78bd52b0cd18aa985b8369756ea7fc2b10a9f",type:"0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272::wend::WEND"},{decimals:9,name:"Sui Generis",symbol:"GENERIS",description:"Sui Generis Auction House Community Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47-generis-GENERIS.webp",id:"0x13a00f780e30945830f97124a23d8554a3c98b0c8fa347073bfe6e50c8eff9f4",type:"0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47::generis::GENERIS"},{decimals:9,name:"SuiPad",symbol:"SUIP",description:"SuiPad The Premier Launchpad for Tier-1 Projects",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee-SUIP-SUIP.webp",id:"0x3e50a0a576877092bfaa4f8e4ec8cd7dd0a4a281bec3f806583949cf7873d07b",type:"0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee::SUIP::SUIP"},{decimals:6,name:"USDCsol",symbol:"USDCsol",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037-coin-COIN.webp",id:"0x39047ec989791d939efee4c9b9dbc6885c5d12a5aaacf44152319b2289ea9b9e",type:"0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN"},{decimals:8,name:"USDCbnb",symbol:"USDCbnb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba-coin-COIN.webp",id:"0x8a775c4bbc9639c88e86fdc624bb30d0bfd22a1597b03da29198de214ddaa126",type:"0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN"},{decimals:6,name:"USDCarb",symbol:"USDCarb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb-coin-COIN.webp",id:"0xe2720ee6eed0e11490bdbd1c6cc2282a7e442bf86c99a3a4ec67797c84b9fffc",type:"0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb::coin::COIN"},{decimals:6,name:"cUSDCe",symbol:"cUSDCe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdc_coin-CELER_USDC_COIN.webp",id:"0x9026b41cf942faaba954c8d9051d93b5bba015436141495b47465eb677d14e1e",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdc_coin::CELER_USDC_COIN"},{decimals:6,name:"cUSDTe",symbol:"cUSDTe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdt_coin-CELER_USDT_COIN.webp",id:"0x2bce194d8454616d16d3ee756fef0c83970556233851fb9da2e5d154952338b8",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN"}],TS=NS,Ms=class Ms extends Bn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is required");this._coins={},this._suiMaster.onMainnet&&this.setCoinMetas(TS)}get suiMaster(){return this._suiMaster}get coins(){return this._coins}setCoinMetas(e){let n=0;if(Array.isArray(e))for(const s of e)s.type&&this.get(s.type).setMetadata(s)&&n++;else for(const s in e)this.get(s).setMetadata(e[s])&&n++;return n}async getAllBalances(e={}){let n=e.owner;n||(n=this._suiMaster.address);const s=[],r=await this._suiMaster.client.getAllBalances({owner:n});for(const i of r){const o={coin:this.get(i.coinType),coinType:i.coinType,coinObjectCount:i.coinObjectCount,totalBalance:BigInt(i.totalBalance),lockedBalance:i.lockedBalance};s.push(o)}return s}normalizeCoinType(e){let n=""+e;return n.indexOf("::")==-1&&n.toLowerCase()=="sui"&&(n="0x2::sui::SUI"),n.indexOf("0x")==-1&&(n="0x"+n),n=Pr(n),n}get(e){const n=this.normalizeCoinType(e);let s=this._coins[n];return s||(s=new AS({coinType:n,suiCoins:this}),this._coins[n]=s,s)}static getSingleton(e={}){const s=e.suiMaster.connectedChain;return Ms._singleInstances[s]||(Ms._singleInstances[s]=new Ms(e)),Ms._singleInstances[s]}};hr(Ms,"_singleInstances",{});let ou=Ms;/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const gl={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},OS={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},Yd=BigInt(2);function kS(t){const e=gl.p,n=BigInt(3),s=BigInt(6),r=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,f=Ve(u,n,e)*u%e,d=Ve(f,n,e)*u%e,h=Ve(d,Yd,e)*l%e,p=Ve(h,r,e)*h%e,y=Ve(p,i,e)*p%e,S=Ve(y,a,e)*y%e,_=Ve(S,c,e)*S%e,B=Ve(_,a,e)*y%e,T=Ve(B,n,e)*u%e,j=Ve(T,o,e)*p%e,K=Ve(j,s,e)*l%e,F=Ve(K,Yd,e);if(!au.eql(au.sqr(F),t))throw new Error("Cannot find square root");return F}const au=Ln(gl.p,void 0,void 0,{sqrt:kS}),Hn=Ta({...gl,Fp:au,lowS:!0,endo:OS},fr);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const bl=BigInt(0),cu=BigInt(1);function aa(t,e=""){if(typeof t!="boolean"){const n=e&&`"${e}"`;throw new Error(n+"expected boolean, got type="+typeof t)}return t}function Zs(t,e,n=""){const s=ir(t),r=t==null?void 0:t.length,i=e!==void 0;if(!s||i&&r!==e){const o=n&&`"${n}" `,a=i?` of length ${e}`:"",c=s?`length=${r}`:`type=${typeof t}`;throw new Error(o+"expected Uint8Array"+a+", got "+c)}return t}function yo(t){const e=t.toString(16);return e.length&1?"0"+e:e}function Bg(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?bl:BigInt("0x"+t)}function ja(t){return Bg(nt(t))}function Ug(t){return Pe(t),Bg(nt(Uint8Array.from(t).reverse()))}function yl(t,e){return Dn(t.toString(16).padStart(e*2,"0"))}function Lg(t,e){return yl(t,e).reverse()}function It(t,e,n){let s;if(typeof e=="string")try{s=Dn(e)}catch(r){throw new Error(t+" must be hex string or Uint8Array, cause: "+r)}else if(ir(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");return s.length,s}const dc=t=>typeof t=="bigint"&&bl<=t;function jS(t,e,n){return dc(t)&&dc(e)&&dc(n)&&e<=t&&t<n}function CS(t,e,n,s){if(!jS(e,n,s))throw new Error("expected valid "+t+": "+n+" <= n < "+s+", got "+e)}function zg(t){let e;for(e=0;t>bl;t>>=cu,e+=1);return e}const Qi=t=>(cu<<BigInt(t))-cu;function DS(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");const s=h=>new Uint8Array(h),r=h=>Uint8Array.of(h);let i=s(t),o=s(t),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},l=(...h)=>n(o,i,...h),u=(h=s(0))=>{o=l(r(0),h),i=l(),h.length!==0&&(o=l(r(1),h),i=l())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const p=[];for(;h<e;){i=l();const y=i.slice();p.push(y),h+=i.length}return Ge(...p)};return(h,p)=>{c(),u(h);let y;for(;!(y=p(f()));)u();return c(),y}}function ml(t,e,n={}){if(!t||typeof t!="object")throw new Error("expected valid options object");function s(r,i,o){const a=t[r];if(o&&a===void 0)return;const c=typeof a;if(c!==i||a===null)throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`)}Object.entries(e).forEach(([r,i])=>s(r,i,!1)),Object.entries(n).forEach(([r,i])=>s(r,i,!0))}function Zd(t){const e=new WeakMap;return(n,...s)=>{const r=e.get(n);if(r!==void 0)return r;const i=t(n,...s);return e.set(n,i),i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const jt=BigInt(0),wt=BigInt(1),Qs=BigInt(2),Pg=BigInt(3),$g=BigInt(4),Rg=BigInt(5),BS=BigInt(7),Vg=BigInt(8),US=BigInt(9),Fg=BigInt(16);function Wt(t,e){const n=t%e;return n>=jt?n:e+n}function qt(t,e,n){let s=t;for(;e-- >jt;)s*=s,s%=n;return s}function Qd(t,e){if(t===jt)throw new Error("invert: expected non-zero number");if(e<=jt)throw new Error("invert: expected positive modulus, got "+e);let n=Wt(t,e),s=e,r=jt,i=wt;for(;n!==jt;){const a=s/n,c=s%n,l=r-i*a;s=n,n=c,r=i,i=l}if(s!==wt)throw new Error("invert: does not exist");return Wt(r,e)}function wl(t,e,n){if(!t.eql(t.sqr(e),n))throw new Error("Cannot find square root")}function qg(t,e){const n=(t.ORDER+wt)/$g,s=t.pow(e,n);return wl(t,s,e),s}function LS(t,e){const n=(t.ORDER-Rg)/Vg,s=t.mul(e,Qs),r=t.pow(s,n),i=t.mul(e,r),o=t.mul(t.mul(i,Qs),r),a=t.mul(i,t.sub(o,t.ONE));return wl(t,a,e),a}function zS(t){const e=Xi(t),n=Kg(t),s=n(e,e.neg(e.ONE)),r=n(e,s),i=n(e,e.neg(s)),o=(t+BS)/Fg;return(a,c)=>{let l=a.pow(c,o),u=a.mul(l,s);const f=a.mul(l,r),d=a.mul(l,i),h=a.eql(a.sqr(u),c),p=a.eql(a.sqr(f),c);l=a.cmov(l,u,h),u=a.cmov(d,f,p);const y=a.eql(a.sqr(u),c),S=a.cmov(l,u,y);return wl(a,S,c),S}}function Kg(t){if(t<Pg)throw new Error("sqrt is not defined for small field");let e=t-wt,n=0;for(;e%Qs===jt;)e/=Qs,n++;let s=Qs;const r=Xi(t);for(;Xd(r,s)===1;)if(s++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return qg;let i=r.pow(s,e);const o=(e+wt)/Qs;return function(c,l){if(c.is0(l))return l;if(Xd(c,l)!==1)throw new Error("Cannot find square root");let u=n,f=c.mul(c.ONE,i),d=c.pow(l,e),h=c.pow(l,o);for(;!c.eql(d,c.ONE);){if(c.is0(d))return c.ZERO;let p=1,y=c.sqr(d);for(;!c.eql(y,c.ONE);)if(p++,y=c.sqr(y),p===u)throw new Error("Cannot find square root");const S=wt<<BigInt(u-p-1),_=c.pow(f,S);u=p,f=c.sqr(_),d=c.mul(d,f),h=c.mul(h,_)}return h}}function PS(t){return t%$g===Pg?qg:t%Vg===Rg?LS:t%Fg===US?zS(t):Kg(t)}const $S=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function RS(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},n=$S.reduce((s,r)=>(s[r]="function",s),e);return ml(t,n),t}function VS(t,e,n){if(n<jt)throw new Error("invalid exponent, negatives unsupported");if(n===jt)return t.ONE;if(n===wt)return e;let s=t.ONE,r=e;for(;n>jt;)n&wt&&(s=t.mul(s,r)),r=t.sqr(r),n>>=wt;return s}function Wg(t,e,n=!1){const s=new Array(e.length).fill(n?t.ZERO:void 0),r=e.reduce((o,a,c)=>t.is0(a)?o:(s[c]=o,t.mul(o,a)),t.ONE),i=t.inv(r);return e.reduceRight((o,a,c)=>t.is0(a)?o:(s[c]=t.mul(o,s[c]),t.mul(o,a)),i),s}function Xd(t,e){const n=(t.ORDER-wt)/Qs,s=t.pow(e,n),r=t.eql(s,t.ONE),i=t.eql(s,t.ZERO),o=t.eql(s,t.neg(t.ONE));if(!r&&!i&&!o)throw new Error("invalid Legendre symbol result");return r?1:i?0:-1}function Gg(t,e){e!==void 0&&kn(e);const n=e!==void 0?e:t.toString(2).length,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}function Xi(t,e,n=!1,s={}){if(t<=jt)throw new Error("invalid field: expected ORDER > 0, got "+t);let r,i,o=!1,a;if(typeof e=="object"&&e!=null){if(s.sqrt||n)throw new Error("cannot specify opts in two arguments");const d=e;d.BITS&&(r=d.BITS),d.sqrt&&(i=d.sqrt),typeof d.isLE=="boolean"&&(n=d.isLE),typeof d.modFromBytes=="boolean"&&(o=d.modFromBytes),a=d.allowedLengths}else typeof e=="number"&&(r=e),s.sqrt&&(i=s.sqrt);const{nBitLength:c,nByteLength:l}=Gg(t,r);if(l>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let u;const f=Object.freeze({ORDER:t,isLE:n,BITS:c,BYTES:l,MASK:Qi(c),ZERO:jt,ONE:wt,allowedLengths:a,create:d=>Wt(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof d);return jt<=d&&d<t},is0:d=>d===jt,isValidNot0:d=>!f.is0(d)&&f.isValid(d),isOdd:d=>(d&wt)===wt,neg:d=>Wt(-d,t),eql:(d,h)=>d===h,sqr:d=>Wt(d*d,t),add:(d,h)=>Wt(d+h,t),sub:(d,h)=>Wt(d-h,t),mul:(d,h)=>Wt(d*h,t),pow:(d,h)=>VS(f,d,h),div:(d,h)=>Wt(d*Qd(h,t),t),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>Qd(d,t),sqrt:i||(d=>(u||(u=PS(t)),u(f,d))),toBytes:d=>n?Lg(d,l):yl(d,l),fromBytes:(d,h=!0)=>{if(a){if(!a.includes(d.length)||d.length>l)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+d.length);const y=new Uint8Array(l);y.set(d,n?0:y.length-d.length),d=y}if(d.length!==l)throw new Error("Field.fromBytes: expected "+l+" bytes, got "+d.length);let p=n?Ug(d):ja(d);if(o&&(p=Wt(p,t)),!h&&!f.isValid(p))throw new Error("invalid field element: outside of range 0..ORDER");return p},invertBatch:d=>Wg(f,d),cmov:(d,h,p)=>p?h:d});return Object.freeze(f)}function Hg(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Yg(t){const e=Hg(t);return e+Math.ceil(e/2)}function FS(t,e,n=!1){const s=t.length,r=Hg(e),i=Yg(e);if(s<16||s<i||s>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+s);const o=n?Ug(t):ja(t),a=Wt(o,e-wt)+wt;return n?Lg(a,r):yl(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Gr=BigInt(0),Xs=BigInt(1);function ca(t,e){const n=e.negate();return t?n:e}function fc(t,e){const n=Wg(t.Fp,e.map(s=>s.Z));return e.map((s,r)=>t.fromAffine(s.toAffine(n[r])))}function Zg(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function hc(t,e){Zg(t,e);const n=Math.ceil(e/t)+1,s=2**(t-1),r=2**t,i=Qi(t),o=BigInt(t);return{windows:n,windowSize:s,mask:i,maxNumber:r,shiftBy:o}}function Jd(t,e,n){const{windowSize:s,mask:r,maxNumber:i,shiftBy:o}=n;let a=Number(t&r),c=t>>o;a>s&&(a-=i,c+=Xs);const l=e*s,u=l+Math.abs(a)-1,f=a===0,d=a<0,h=e%2!==0;return{nextN:c,offset:u,isZero:f,isNeg:d,isNegF:h,offsetF:l}}function qS(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,s)=>{if(!(n instanceof e))throw new Error("invalid point at index "+s)})}function KS(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,s)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+s)})}const pc=new WeakMap,Qg=new WeakMap;function gc(t){return Qg.get(t)||1}function ef(t){if(t!==Gr)throw new Error("invalid wNAF")}class WS{constructor(e,n){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=n}_unsafeLadder(e,n,s=this.ZERO){let r=e;for(;n>Gr;)n&Xs&&(s=s.add(r)),r=r.double(),n>>=Xs;return s}precomputeWindow(e,n){const{windows:s,windowSize:r}=hc(n,this.bits),i=[];let o=e,a=o;for(let c=0;c<s;c++){a=o,i.push(a);for(let l=1;l<r;l++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(e,n,s){if(!this.Fn.isValid(s))throw new Error("invalid scalar");let r=this.ZERO,i=this.BASE;const o=hc(e,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:u,isNeg:f,isNegF:d,offsetF:h}=Jd(s,a,o);s=c,u?i=i.add(ca(d,n[h])):r=r.add(ca(f,n[l]))}return ef(s),{p:r,f:i}}wNAFUnsafe(e,n,s,r=this.ZERO){const i=hc(e,this.bits);for(let o=0;o<i.windows&&s!==Gr;o++){const{nextN:a,offset:c,isZero:l,isNeg:u}=Jd(s,o,i);if(s=a,!l){const f=n[c];r=r.add(u?f.negate():f)}}return ef(s),r}getPrecomputes(e,n,s){let r=pc.get(n);return r||(r=this.precomputeWindow(n,e),e!==1&&(typeof s=="function"&&(r=s(r)),pc.set(n,r))),r}cached(e,n,s){const r=gc(e);return this.wNAF(r,this.getPrecomputes(r,e,s),n)}unsafe(e,n,s,r){const i=gc(e);return i===1?this._unsafeLadder(e,n,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,s),n,r)}createCache(e,n){Zg(n,this.bits),Qg.set(e,n),pc.delete(e)}hasCache(e){return gc(e)!==1}}function GS(t,e,n,s){let r=e,i=t.ZERO,o=t.ZERO;for(;n>Gr||s>Gr;)n&Xs&&(i=i.add(r)),s&Xs&&(o=o.add(r)),r=r.double(),n>>=Xs,s>>=Xs;return{p1:i,p2:o}}function HS(t,e,n,s){qS(n,t),KS(s,e);const r=n.length,i=s.length;if(r!==i)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,a=zg(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=Qi(c),u=new Array(Number(l)+1).fill(o),f=Math.floor((e.BITS-1)/c)*c;let d=o;for(let h=f;h>=0;h-=c){u.fill(o);for(let y=0;y<i;y++){const S=s[y],_=Number(S>>BigInt(h)&l);u[_]=u[_].add(n[y])}let p=o;for(let y=u.length-1,S=o;y>0;y--)S=S.add(u[y]),p=p.add(S);if(d=d.add(p),h!==0)for(let y=0;y<c;y++)d=d.double()}return d}function tf(t,e,n){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return RS(e),e}else return Xi(t,{isLE:n})}function YS(t,e,n={},s){if(s===void 0&&(s=t==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);for(const c of["p","n","h"]){const l=e[c];if(!(typeof l=="bigint"&&l>Gr))throw new Error(`CURVE.${c} must be positive bigint`)}const r=tf(e.p,n.Fp,s),i=tf(e.n,n.Fn,s),a=["Gx","Gy","a","b"];for(const c of a)if(!r.isValid(e[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:r,Fn:i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const nf=(t,e)=>(t+(t>=0?e:-e)/Xg)/e;function ZS(t,e,n){const[[s,r],[i,o]]=e,a=nf(o*t,n),c=nf(-r*t,n);let l=t-a*s-c*i,u=-a*r-c*o;const f=l<ts,d=u<ts;f&&(l=-l),d&&(u=-u);const h=Qi(Math.ceil(zg(n)/2))+Br;if(l<ts||l>=h||u<ts||u>=h)throw new Error("splitScalar (endomorphism): failed, k="+t);return{k1neg:f,k1:l,k2neg:d,k2:u}}function uu(t){if(!["compact","recovered","der"].includes(t))throw new Error('Signature format must be "compact", "recovered", or "der"');return t}function bc(t,e){const n={};for(let s of Object.keys(e))n[s]=t[s]===void 0?e[s]:t[s];return aa(n.lowS,"lowS"),aa(n.prehash,"prehash"),n.format!==void 0&&uu(n.format),n}class QS extends Error{constructor(e=""){super(e)}}const Xn={Err:QS,_tlv:{encode:(t,e)=>{const{Err:n}=Xn;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const s=e.length/2,r=yo(s);if(r.length/2&128)throw new n("tlv.encode: long form length too big");const i=s>127?yo(r.length/2|128):"";return yo(t)+i+r+e},decode(t,e){const{Err:n}=Xn;let s=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new n("tlv.decode: wrong tlv");const r=e[s++],i=!!(r&128);let o=0;if(!i)o=r;else{const c=r&127;if(!c)throw new n("tlv.decode(long): indefinite length not supported");if(c>4)throw new n("tlv.decode(long): byte length is too big");const l=e.subarray(s,s+c);if(l.length!==c)throw new n("tlv.decode: length bytes not complete");if(l[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(s+=c,o<128)throw new n("tlv.decode(long): not minimal encoding")}const a=e.subarray(s,s+o);if(a.length!==o)throw new n("tlv.decode: wrong value length");return{v:a,l:e.subarray(s+o)}}},_int:{encode(t){const{Err:e}=Xn;if(t<ts)throw new e("integer: negative integers are not allowed");let n=yo(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=Xn;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return ja(t)}},toSig(t){const{Err:e,_int:n,_tlv:s}=Xn,r=It("signature",t),{v:i,l:o}=s.decode(48,r);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=s.decode(2,i),{v:l,l:u}=s.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(a),s:n.decode(l)}},hexFromSig(t){const{_tlv:e,_int:n}=Xn,s=e.encode(2,n.encode(t.r)),r=e.encode(2,n.encode(t.s)),i=s+r;return e.encode(48,i)}},ts=BigInt(0),Br=BigInt(1),Xg=BigInt(2),mo=BigInt(3),XS=BigInt(4);function _r(t,e){const{BYTES:n}=t;let s;if(typeof e=="bigint")s=e;else{let r=It("private key",e);try{s=t.fromBytes(r)}catch{throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`)}}if(!t.isValidNot0(s))throw new Error("invalid private key: out of range [1..N-1]");return s}function JS(t,e={}){const n=YS("weierstrass",t,e),{Fp:s,Fn:r}=n;let i=n.CURVE;const{h:o,n:a}=i;ml(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:c}=e;if(c&&(!s.is0(i.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const l=eb(s,r);function u(){if(!s.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function f(k,M,I){const{x:E,y:v}=M.toAffine(),w=s.toBytes(E);if(aa(I,"isCompressed"),I){u();const x=!s.isOdd(v);return Ge(Jg(x),w)}else return Ge(Uint8Array.of(4),w,s.toBytes(v))}function d(k){Zs(k,void 0,"Point");const{publicKey:M,publicKeyUncompressed:I}=l,E=k.length,v=k[0],w=k.subarray(1);if(E===M&&(v===2||v===3)){const x=s.fromBytes(w);if(!s.isValid(x))throw new Error("bad point: is not on curve, wrong x");const C=y(x);let D;try{D=s.sqrt(C)}catch(ce){const te=ce instanceof Error?": "+ce.message:"";throw new Error("bad point: is not on curve, sqrt error"+te)}u();const L=s.isOdd(D);return(v&1)===1!==L&&(D=s.neg(D)),{x,y:D}}else if(E===I&&v===4){const x=s.BYTES,C=s.fromBytes(w.subarray(0,x)),D=s.fromBytes(w.subarray(x,x*2));if(!S(C,D))throw new Error("bad point: is not on curve");return{x:C,y:D}}else throw new Error(`bad point: got length ${E}, expected compressed=${M} or uncompressed=${I}`)}const h=e.toBytes||f,p=e.fromBytes||d;function y(k){const M=s.sqr(k),I=s.mul(M,k);return s.add(s.add(I,s.mul(k,i.a)),i.b)}function S(k,M){const I=s.sqr(M),E=y(k);return s.eql(I,E)}if(!S(i.Gx,i.Gy))throw new Error("bad curve params: generator point");const _=s.mul(s.pow(i.a,mo),XS),B=s.mul(s.sqr(i.b),BigInt(27));if(s.is0(s.add(_,B)))throw new Error("bad curve params: a or b");function T(k,M,I=!1){if(!s.isValid(M)||I&&s.is0(M))throw new Error(`bad point coordinate ${k}`);return M}function j(k){if(!(k instanceof V))throw new Error("ProjectivePoint expected")}function K(k){if(!c||!c.basises)throw new Error("no endo");return ZS(k,c.basises,r.ORDER)}const F=Zd((k,M)=>{const{X:I,Y:E,Z:v}=k;if(s.eql(v,s.ONE))return{x:I,y:E};const w=k.is0();M==null&&(M=w?s.ONE:s.inv(v));const x=s.mul(I,M),C=s.mul(E,M),D=s.mul(v,M);if(w)return{x:s.ZERO,y:s.ZERO};if(!s.eql(D,s.ONE))throw new Error("invZ was invalid");return{x,y:C}}),se=Zd(k=>{if(k.is0()){if(e.allowInfinityPoint&&!s.is0(k.Y))return;throw new Error("bad point: ZERO")}const{x:M,y:I}=k.toAffine();if(!s.isValid(M)||!s.isValid(I))throw new Error("bad point: x or y not field elements");if(!S(M,I))throw new Error("bad point: equation left != right");if(!k.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function re(k,M,I,E,v){return I=new V(s.mul(I.X,k),I.Y,I.Z),M=ca(E,M),I=ca(v,I),M.add(I)}class V{constructor(M,I,E){this.X=T("x",M),this.Y=T("y",I,!0),this.Z=T("z",E),Object.freeze(this)}static CURVE(){return i}static fromAffine(M){const{x:I,y:E}=M||{};if(!M||!s.isValid(I)||!s.isValid(E))throw new Error("invalid affine point");if(M instanceof V)throw new Error("projective point not allowed");return s.is0(I)&&s.is0(E)?V.ZERO:new V(I,E,s.ONE)}static fromBytes(M){const I=V.fromAffine(p(Zs(M,void 0,"point")));return I.assertValidity(),I}static fromHex(M){return V.fromBytes(It("pointHex",M))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(M=8,I=!0){return A.createCache(this,M),I||this.multiply(mo),this}assertValidity(){se(this)}hasEvenY(){const{y:M}=this.toAffine();if(!s.isOdd)throw new Error("Field doesn't support isOdd");return!s.isOdd(M)}equals(M){j(M);const{X:I,Y:E,Z:v}=this,{X:w,Y:x,Z:C}=M,D=s.eql(s.mul(I,C),s.mul(w,v)),L=s.eql(s.mul(E,C),s.mul(x,v));return D&&L}negate(){return new V(this.X,s.neg(this.Y),this.Z)}double(){const{a:M,b:I}=i,E=s.mul(I,mo),{X:v,Y:w,Z:x}=this;let C=s.ZERO,D=s.ZERO,L=s.ZERO,R=s.mul(v,v),ce=s.mul(w,w),te=s.mul(x,x),ue=s.mul(v,w);return ue=s.add(ue,ue),L=s.mul(v,x),L=s.add(L,L),C=s.mul(M,L),D=s.mul(E,te),D=s.add(C,D),C=s.sub(ce,D),D=s.add(ce,D),D=s.mul(C,D),C=s.mul(ue,C),L=s.mul(E,L),te=s.mul(M,te),ue=s.sub(R,te),ue=s.mul(M,ue),ue=s.add(ue,L),L=s.add(R,R),R=s.add(L,R),R=s.add(R,te),R=s.mul(R,ue),D=s.add(D,R),te=s.mul(w,x),te=s.add(te,te),R=s.mul(te,ue),C=s.sub(C,R),L=s.mul(te,ce),L=s.add(L,L),L=s.add(L,L),new V(C,D,L)}add(M){j(M);const{X:I,Y:E,Z:v}=this,{X:w,Y:x,Z:C}=M;let D=s.ZERO,L=s.ZERO,R=s.ZERO;const ce=i.a,te=s.mul(i.b,mo);let ue=s.mul(I,w),ee=s.mul(E,x),pe=s.mul(v,C),Me=s.add(I,E),we=s.add(w,x);Me=s.mul(Me,we),we=s.add(ue,ee),Me=s.sub(Me,we),we=s.add(I,v);let Ie=s.add(w,C);return we=s.mul(we,Ie),Ie=s.add(ue,pe),we=s.sub(we,Ie),Ie=s.add(E,v),D=s.add(x,C),Ie=s.mul(Ie,D),D=s.add(ee,pe),Ie=s.sub(Ie,D),R=s.mul(ce,we),D=s.mul(te,pe),R=s.add(D,R),D=s.sub(ee,R),R=s.add(ee,R),L=s.mul(D,R),ee=s.add(ue,ue),ee=s.add(ee,ue),pe=s.mul(ce,pe),we=s.mul(te,we),ee=s.add(ee,pe),pe=s.sub(ue,pe),pe=s.mul(ce,pe),we=s.add(we,pe),ue=s.mul(ee,we),L=s.add(L,ue),ue=s.mul(Ie,we),D=s.mul(Me,D),D=s.sub(D,ue),ue=s.mul(Me,ee),R=s.mul(Ie,R),R=s.add(R,ue),new V(D,L,R)}subtract(M){return this.add(M.negate())}is0(){return this.equals(V.ZERO)}multiply(M){const{endo:I}=e;if(!r.isValidNot0(M))throw new Error("invalid scalar: out of range");let E,v;const w=x=>A.cached(this,x,C=>fc(V,C));if(I){const{k1neg:x,k1:C,k2neg:D,k2:L}=K(M),{p:R,f:ce}=w(C),{p:te,f:ue}=w(L);v=ce.add(ue),E=re(I.beta,R,te,x,D)}else{const{p:x,f:C}=w(M);E=x,v=C}return fc(V,[E,v])[0]}multiplyUnsafe(M){const{endo:I}=e,E=this;if(!r.isValid(M))throw new Error("invalid scalar: out of range");if(M===ts||E.is0())return V.ZERO;if(M===Br)return E;if(A.hasCache(this))return this.multiply(M);if(I){const{k1neg:v,k1:w,k2neg:x,k2:C}=K(M),{p1:D,p2:L}=GS(V,E,w,C);return re(I.beta,D,L,v,x)}else return A.unsafe(E,M)}multiplyAndAddUnsafe(M,I,E){const v=this.multiplyUnsafe(I).add(M.multiplyUnsafe(E));return v.is0()?void 0:v}toAffine(M){return F(this,M)}isTorsionFree(){const{isTorsionFree:M}=e;return o===Br?!0:M?M(V,this):A.unsafe(this,a).is0()}clearCofactor(){const{clearCofactor:M}=e;return o===Br?this:M?M(V,this):this.multiplyUnsafe(o)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}toBytes(M=!0){return aa(M,"isCompressed"),this.assertValidity(),h(V,this,M)}toHex(M=!0){return nt(this.toBytes(M))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}toRawBytes(M=!0){return this.toBytes(M)}_setWindowSize(M){this.precompute(M)}static normalizeZ(M){return fc(V,M)}static msm(M,I){return HS(V,r,M,I)}static fromPrivateKey(M){return V.BASE.multiply(_r(r,M))}}V.BASE=new V(i.Gx,i.Gy,s.ONE),V.ZERO=new V(s.ZERO,s.ONE,s.ZERO),V.Fp=s,V.Fn=r;const O=r.BITS,A=new WS(V,e.endo?Math.ceil(O/2):O);return V.BASE.precompute(8),V}function Jg(t){return Uint8Array.of(t?2:3)}function eb(t,e){return{secretKey:e.BYTES,publicKey:1+t.BYTES,publicKeyUncompressed:1+2*t.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}function e4(t,e={}){const{Fn:n}=t,s=e.randomBytes||Ea,r=Object.assign(eb(t.Fp,n),{seed:Yg(n.ORDER)});function i(h){try{return!!_r(n,h)}catch{return!1}}function o(h,p){const{publicKey:y,publicKeyUncompressed:S}=r;try{const _=h.length;return p===!0&&_!==y||p===!1&&_!==S?!1:!!t.fromBytes(h)}catch{return!1}}function a(h=s(r.seed)){return FS(Zs(h,r.seed,"seed"),n.ORDER)}function c(h,p=!0){return t.BASE.multiply(_r(n,h)).toBytes(p)}function l(h){const p=a(h);return{secretKey:p,publicKey:c(p)}}function u(h){if(typeof h=="bigint")return!1;if(h instanceof t)return!0;const{secretKey:p,publicKey:y,publicKeyUncompressed:S}=r;if(n.allowedLengths||p===y)return;const _=It("key",h).length;return _===y||_===S}function f(h,p,y=!0){if(u(h)===!0)throw new Error("first arg must be private key");if(u(p)===!1)throw new Error("second arg must be public key");const S=_r(n,h);return t.fromHex(p).multiply(S).toBytes(y)}return Object.freeze({getPublicKey:c,getSharedSecret:f,keygen:l,Point:t,utils:{isValidSecretKey:i,isValidPublicKey:o,randomSecretKey:a,isValidPrivateKey:i,randomPrivateKey:a,normPrivateKeyToScalar:h=>_r(n,h),precompute(h=8,p=t.BASE){return p.precompute(h,!1)}},lengths:r})}function t4(t,e,n={}){Sa(e),ml(n,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const s=n.randomBytes||Ea,r=n.hmac||((I,...E)=>js(e,I,Ge(...E))),{Fp:i,Fn:o}=t,{ORDER:a,BITS:c}=o,{keygen:l,getPublicKey:u,getSharedSecret:f,utils:d,lengths:h}=e4(t,n),p={prehash:!1,lowS:typeof n.lowS=="boolean"?n.lowS:!1,format:void 0,extraEntropy:!1},y="compact";function S(I){const E=a>>Br;return I>E}function _(I,E){if(!o.isValidNot0(E))throw new Error(`invalid signature ${I}: out of range 1..Point.Fn.ORDER`);return E}function B(I,E){uu(E);const v=h.signature,w=E==="compact"?v:E==="recovered"?v+1:void 0;return Zs(I,w,`${E} signature`)}class T{constructor(E,v,w){this.r=_("r",E),this.s=_("s",v),w!=null&&(this.recovery=w),Object.freeze(this)}static fromBytes(E,v=y){B(E,v);let w;if(v==="der"){const{r:L,s:R}=Xn.toSig(Zs(E));return new T(L,R)}v==="recovered"&&(w=E[0],v="compact",E=E.subarray(1));const x=o.BYTES,C=E.subarray(0,x),D=E.subarray(x,x*2);return new T(o.fromBytes(C),o.fromBytes(D),w)}static fromHex(E,v){return this.fromBytes(Dn(E),v)}addRecoveryBit(E){return new T(this.r,this.s,E)}recoverPublicKey(E){const v=i.ORDER,{r:w,s:x,recovery:C}=this;if(C==null||![0,1,2,3].includes(C))throw new Error("recovery id invalid");if(a*Xg<v&&C>1)throw new Error("recovery id is ambiguous for h>1 curve");const L=C===2||C===3?w+a:w;if(!i.isValid(L))throw new Error("recovery id 2 or 3 invalid");const R=i.toBytes(L),ce=t.fromBytes(Ge(Jg((C&1)===0),R)),te=o.inv(L),ue=K(It("msgHash",E)),ee=o.create(-ue*te),pe=o.create(x*te),Me=t.BASE.multiplyUnsafe(ee).add(ce.multiplyUnsafe(pe));if(Me.is0())throw new Error("point at infinify");return Me.assertValidity(),Me}hasHighS(){return S(this.s)}toBytes(E=y){if(uu(E),E==="der")return Dn(Xn.hexFromSig(this));const v=o.toBytes(this.r),w=o.toBytes(this.s);if(E==="recovered"){if(this.recovery==null)throw new Error("recovery bit must be present");return Ge(Uint8Array.of(this.recovery),v,w)}return Ge(v,w)}toHex(E){return nt(this.toBytes(E))}assertValidity(){}static fromCompact(E){return T.fromBytes(It("sig",E),"compact")}static fromDER(E){return T.fromBytes(It("sig",E),"der")}normalizeS(){return this.hasHighS()?new T(this.r,o.neg(this.s),this.recovery):this}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return nt(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return nt(this.toBytes("compact"))}}const j=n.bits2int||function(E){if(E.length>8192)throw new Error("input is too large");const v=ja(E),w=E.length*8-c;return w>0?v>>BigInt(w):v},K=n.bits2int_modN||function(E){return o.create(j(E))},F=Qi(c);function se(I){return CS("num < 2^"+c,I,ts,F),o.toBytes(I)}function re(I,E){return Zs(I,void 0,"message"),E?Zs(e(I),void 0,"prehashed message"):I}function V(I,E,v){if(["recovered","canonical"].some(ee=>ee in v))throw new Error("sign() legacy options not supported");const{lowS:w,prehash:x,extraEntropy:C}=bc(v,p);I=re(I,x);const D=K(I),L=_r(o,E),R=[se(L),se(D)];if(C!=null&&C!==!1){const ee=C===!0?s(h.secretKey):C;R.push(It("extraEntropy",ee))}const ce=Ge(...R),te=D;function ue(ee){const pe=j(ee);if(!o.isValidNot0(pe))return;const Me=o.inv(pe),we=t.BASE.multiply(pe).toAffine(),Ie=o.create(we.x);if(Ie===ts)return;const Xt=o.create(Me*o.create(te+Ie*L));if(Xt===ts)return;let b=(we.x===Ie?0:2)|Number(we.y&Br),m=Xt;return w&&S(Xt)&&(m=o.neg(Xt),b^=1),new T(Ie,m,b)}return{seed:ce,k2sig:ue}}function O(I,E,v={}){I=It("message",I);const{seed:w,k2sig:x}=V(I,E,v);return DS(e.outputLen,o.BYTES,r)(w,x)}function A(I){let E;const v=typeof I=="string"||ir(I),w=!v&&I!==null&&typeof I=="object"&&typeof I.r=="bigint"&&typeof I.s=="bigint";if(!v&&!w)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(w)E=new T(I.r,I.s);else if(v){try{E=T.fromBytes(It("sig",I),"der")}catch(x){if(!(x instanceof Xn.Err))throw x}if(!E)try{E=T.fromBytes(It("sig",I),"compact")}catch{return!1}}return E||!1}function k(I,E,v,w={}){const{lowS:x,prehash:C,format:D}=bc(w,p);if(v=It("publicKey",v),E=re(It("message",E),C),"strict"in w)throw new Error("options.strict was renamed to lowS");const L=D===void 0?A(I):T.fromBytes(It("sig",I),D);if(L===!1)return!1;try{const R=t.fromBytes(v);if(x&&L.hasHighS())return!1;const{r:ce,s:te}=L,ue=K(E),ee=o.inv(te),pe=o.create(ue*ee),Me=o.create(ce*ee),we=t.BASE.multiplyUnsafe(pe).add(R.multiplyUnsafe(Me));return we.is0()?!1:o.create(we.x)===ce}catch{return!1}}function M(I,E,v={}){const{prehash:w}=bc(v,p);return E=re(E,w),T.fromBytes(I,"recovered").recoverPublicKey(E).toBytes()}return Object.freeze({keygen:l,getPublicKey:u,getSharedSecret:f,utils:d,lengths:h,Point:t,sign:O,verify:k,recoverPublicKey:M,Signature:T,hash:e})}function n4(t){const e={a:t.a,b:t.b,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp;let s=t.allowedPrivateKeyLengths?Array.from(new Set(t.allowedPrivateKeyLengths.map(o=>Math.ceil(o/2)))):void 0;const r=Xi(e.n,{BITS:t.nBitLength,allowedLengths:s,modFromBytes:t.wrapPrivateKey}),i={Fp:n,Fn:r,allowInfinityPoint:t.allowInfinityPoint,endo:t.endo,isTorsionFree:t.isTorsionFree,clearCofactor:t.clearCofactor,fromBytes:t.fromBytes,toBytes:t.toBytes};return{CURVE:e,curveOpts:i}}function s4(t){const{CURVE:e,curveOpts:n}=n4(t),s={hmac:t.hmac,randomBytes:t.randomBytes,lowS:t.lowS,bits2int:t.bits2int,bits2int_modN:t.bits2int_modN};return{CURVE:e,curveOpts:n,hash:t.hash,ecdsaOpts:s}}function r4(t,e){const n=e.Point;return Object.assign({},e,{ProjectivePoint:n,CURVE:Object.assign({},t,Gg(n.Fn.ORDER,n.Fn.BITS))})}function i4(t){const{CURVE:e,curveOpts:n,hash:s,ecdsaOpts:r}=s4(t),i=JS(e,n),o=t4(i,s,r);return r4(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function o4(t,e){const n=s=>i4({...t,hash:s});return{...n(e),create:n}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vl={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},a4={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},sf=BigInt(2);function c4(t){const e=vl.p,n=BigInt(3),s=BigInt(6),r=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,f=qt(u,n,e)*u%e,d=qt(f,n,e)*u%e,h=qt(d,sf,e)*l%e,p=qt(h,r,e)*h%e,y=qt(p,i,e)*p%e,S=qt(y,a,e)*y%e,_=qt(S,c,e)*S%e,B=qt(_,a,e)*y%e,T=qt(B,n,e)*u%e,j=qt(T,o,e)*p%e,K=qt(j,s,e)*l%e,F=qt(K,sf,e);if(!lu.eql(lu.sqr(F),t))throw new Error("Cannot find square root");return F}const lu=Xi(vl.p,{sqrt:c4}),Wn=o4({...vl,Fp:lu,lowS:!0,endo:a4},fr),u4=Uint8Array.from([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),tb=Uint8Array.from(new Array(16).fill(0).map((t,e)=>e)),l4=tb.map(t=>(9*t+5)%16),nb=(()=>{const n=[[tb],[l4]];for(let s=0;s<4;s++)for(let r of n)r.push(r[s].map(i=>u4[i]));return n})(),sb=nb[0],rb=nb[1],ib=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>Uint8Array.from(t)),d4=sb.map((t,e)=>t.map(n=>ib[e][n])),f4=rb.map((t,e)=>t.map(n=>ib[e][n])),h4=Uint32Array.from([0,1518500249,1859775393,2400959708,2840853838]),p4=Uint32Array.from([1352829926,1548603684,1836072691,2053994217,0]);function rf(t,e,n,s){return t===0?e^n^s:t===1?e&n|~e&s:t===2?(e|~n)^s:t===3?e&s|n&~s:e^(n|~s)}const wo=new Uint32Array(16);class g4 extends Fu{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:s,h3:r,h4:i}=this;return[e,n,s,r,i]}set(e,n,s,r,i){this.h0=e|0,this.h1=n|0,this.h2=s|0,this.h3=r|0,this.h4=i|0}process(e,n){for(let h=0;h<16;h++,n+=4)wo[h]=e.getUint32(n,!0);let s=this.h0|0,r=s,i=this.h1|0,o=i,a=this.h2|0,c=a,l=this.h3|0,u=l,f=this.h4|0,d=f;for(let h=0;h<5;h++){const p=4-h,y=h4[h],S=p4[h],_=sb[h],B=rb[h],T=d4[h],j=f4[h];for(let K=0;K<16;K++){const F=oo(s+rf(h,i,a,l)+wo[_[K]]+y,T[K])+f|0;s=f,f=l,l=oo(a,10)|0,a=i,i=F}for(let K=0;K<16;K++){const F=oo(r+rf(p,o,c,u)+wo[B[K]]+S,j[K])+d|0;r=d,d=u,u=oo(c,10)|0,c=o,o=F}}this.set(this.h1+a+u|0,this.h2+l+d|0,this.h3+f+r|0,this.h4+s+o|0,this.h0+i+c|0)}roundClean(){Qt(wo)}destroy(){this.destroyed=!0,Qt(this.buffer),this.set(0,0,0,0,0)}}const b4=Ma(()=>new g4);/*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const vo=Wn.ProjectivePoint,yc=R0(fr);function of(t){Pe(t);const e=t.length===0?"0":nt(t);return BigInt("0x"+e)}function y4(t){if(typeof t!="bigint")throw new Error("bigint expected");return Dn(t.toString(16).padStart(64,"0"))}const m4=Ru("Bitcoin seed"),mc={private:76066276,public:76067358},wc=2147483648,w4=t=>b4(fr(t)),v4=t=>tr(t).getUint32(0,!1),So=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error("invalid number, should be from 0 to 2**32-1, got "+t);const e=new Uint8Array(4);return tr(e).setUint32(0,t,!1),e};class _s{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return v4(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return yc.encode(this.serialize(this.versions.private,Ge(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return yc.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=mc){if(Pe(e),8*e.length<128||8*e.length>512)throw new Error("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got "+e.length);const s=js(Fr,m4,e);return new _s({versions:n,chainCode:s.slice(32),privateKey:s.slice(0,32)})}static fromExtendedKey(e,n=mc){const s=yc.decode(e),r=tr(s),i=r.getUint32(0,!1),o={versions:n,depth:s[4],parentFingerprint:r.getUint32(5,!1),index:r.getUint32(9,!1),chainCode:s.slice(13,45)},a=s.slice(45),c=a[0]===0;if(i!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new _s({...o,privateKey:a.slice(1)}):new _s({...o,publicKey:a})}static fromJSON(e){return _s.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||mc,this.depth=e.depth||0,this.chainCode=e.chainCode||null,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Wn.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:of(e.privateKey),this.privKeyBytes=y4(this.privKey),this.pubKey=Wn.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=vo.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=w4(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let s=this;for(const r of n){const i=/^(\d+)('?)$/.exec(r),o=i&&i[1];if(!i||i.length!==3||typeof o!="string")throw new Error("invalid child index: "+r);let a=+o;if(!Number.isSafeInteger(a)||a>=wc)throw new Error("Invalid index");i[2]==="'"&&(a+=wc),s=s.deriveChild(a)}return s}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=So(e);if(e>=wc){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Ge(new Uint8Array([0]),a,n)}else n=Ge(this.pubKey,n);const s=js(Fr,this.chainCode,n),r=of(s.slice(0,32)),i=s.slice(32);if(!Wn.utils.isValidPrivateKey(r))throw new Error("Tweak bigger than curve order");const o={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const a=Wt(this.privKey+r,Wn.CURVE.n);if(!Wn.utils.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");o.privateKey=a}else{const a=vo.fromHex(this.pubKey).add(vo.fromPrivateKey(r));if(a.equals(vo.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");o.publicKey=a.toRawBytes(!0)}return new _s(o)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return Pe(e,32),Wn.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(Pe(e,32),Pe(n,64),!this.publicKey)throw new Error("No publicKey set!");let s;try{s=Wn.Signature.fromCompact(n)}catch{return!1}return Wn.verify(s,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return Pe(n,33),Ge(So(e),new Uint8Array([this.depth]),So(this.parentFingerprint),So(this.index),this.chainCode,n)}}const du=33;class ob extends Zi{constructor(e){if(super(),typeof e=="string"?this.data=Ee(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==du)throw new Error(`Invalid public key input. Expected ${du} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.Secp256k1}async verify(e,n){let s;if(typeof n=="string"){const r=al(n);if(r.signatureScheme!=="Secp256k1")throw new Error("Invalid signature scheme");if(!Wr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return Hn.verify(Hn.Signature.fromCompact(s),Kr(e),this.toRawBytes())}}ob.SIZE=du;const S4="m/54'/784'/0'/0/0";class ns extends dl{constructor(e){if(super(),e)this.keypair=e;else{const n=Hn.utils.randomPrivateKey(),s=Hn.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256k1"}static generate(){return new ns}static fromSecretKey(e,n){if(typeof e=="string"){const r=ka(e);if(r.schema!=="Secp256k1")throw new Error(`Expected a Secp256k1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=Hn.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=nt(Os(i,{dkLen:32})),a=Hn.sign(o,e);if(!Hn.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new ns({publicKey:s,secretKey:e})}static fromSeed(e){const n=Hn.getPublicKey(e,!0);return new ns({publicKey:n,secretKey:e})}getPublicKey(){return new ob(this.keypair.publicKey)}getSecretKey(){return fl(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=Kr(e);return Hn.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=S4),!kg(n))throw new Error("Invalid derivation path");const s=_s.fromMasterSeed(hl(e)).derive(n);if(s.publicKey==null||s.privateKey==null)throw new Error("Invalid key");return new ns({publicKey:s.publicKey,secretKey:s.privateKey})}}const fu=33;class ab extends Zi{constructor(e){if(super(),typeof e=="string"?this.data=Ee(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==fu)throw new Error(`Invalid public key input. Expected ${fu} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.Secp256r1}async verify(e,n){let s;if(typeof n=="string"){const r=mS(n);if(r.signatureScheme!=="Secp256r1")throw new Error("Invalid signature scheme");if(!Wr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return In.verify(In.Signature.fromCompact(s),Kr(e),this.toRawBytes())}}ab.SIZE=fu;const M4="m/74'/784'/0'/0/0";class ss extends dl{constructor(e){if(super(),e)this.keypair=e;else{const n=In.utils.randomPrivateKey(),s=In.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256r1"}static generate(){return new ss}static fromSecretKey(e,n){if(typeof e=="string"){const r=ka(e);if(r.schema!=="Secp256r1")throw new Error(`Expected a Secp256r1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=In.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=nt(Os(i,{dkLen:32})),a=In.sign(o,e,{lowS:!0});if(!In.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new ss({publicKey:s,secretKey:e})}static fromSeed(e){const n=In.getPublicKey(e,!0);return new ss({publicKey:n,secretKey:e})}getPublicKey(){return new ab(this.keypair.publicKey)}getSecretKey(){return fl(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=Kr(e);return In.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=M4),!kg(n))throw new Error("Invalid derivation path");const s=_s.fromMasterSeed(hl(e)).derive(n).privateKey;return ss.fromSecretKey(s)}}class E4 extends Error{}async function I4({host:t,path:e,body:n,headers:s,method:r}){const i=new URL(e,t).toString(),o=await fetch(i,{method:r,body:n?JSON.stringify(n):void 0,headers:{"Content-Type":"application/json",...s}});if(o.status===429)throw new E4("Too many requests from this client have been sent to the faucet. Please retry later");try{return await o.json()}catch(a){throw new Error(`Encountered error when parsing response from faucet, error: ${a}, status ${o.status}, response ${o}`)}}async function x4(t){const e=await I4({host:t.host,path:"/gas",body:{FixedAmountRequest:{recipient:t.recipient}},headers:t.headers,method:"POST"});if(e.error)throw new Error(`Faucet request failed: ${e.error}`);return e}function _4(t){switch(t){case"testnet":return"https://faucet.testnet.sui.io";case"devnet":return"https://faucet.devnet.sui.io";case"localnet":return"http://127.0.0.1:9123";default:throw new Error(`Unknown network: ${t}`)}}const xi=class xi extends Bn{constructor(e={}){if(super(e),xi.instancesCount++,this._instanceN=xi.instancesCount,this._signer=null,this._keypair=null,this._address=null,e.signer)this._signer=e.signer,this._signer&&this._signer.connectedAddress&&(this._address=this._signer.connectedAddress);else if(e.keypair)this._keypair=e.keypair;else if(e.privateKey){const n=ka(e.privateKey);n&&n.schema?n.schema==="ED25519"?this._keypair=Tn.fromSecretKey(n.secretKey):n.schema=="Secp256k1"?this._keypair=ns.fromSecretKey(n.secretKey):n.schema=="Secp256r1"&&(this._keypair=ss.fromSecretKey(n.secretKey)):n&&n.scheme&&(n.scheme==="ED25519"?this._keypair=Tn.fromSecretKey(n.secretKey):n.scheme=="Secp256k1"?this._keypair=ns.fromSecretKey(n.secretKey):n.scheme=="Secp256r1"&&(this._keypair=ss.fromSecretKey(n.secretKey)))}else if(e.phrase){if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256r1")if(!e.accountIndex)this._keypair=ss.deriveKeypair(e.phrase);else{const n=`m/74'/784'/${e.accountIndex}'/0/0`;this._keypair=ss.deriveKeypair(e.phrase,n)}else if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256k1")if(!e.accountIndex)this._keypair=ns.deriveKeypair(e.phrase);else{const n=`m/54'/784'/${e.accountIndex}'/0/0`;this._keypair=ns.deriveKeypair(e.phrase,n)}else if(!e.accountIndex)this._keypair=Tn.deriveKeypair(e.phrase);else{const n=`m/44'/784'/${e.accountIndex}'/0'/0'`;this._keypair=Tn.deriveKeypair(e.phrase,n)}this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress())}else e.as&&(this._keypair=pl.stringToKeyPair(e.as),this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress()));if(this._client=xt.normalizeClient(e.client),this._providerName=this._client?this._client.providerName:null,!this._client)throw new Error("Can not do anything without SuiClient. Set params.client at least to `local`");this._objectStorage=iu.instanceOf(this._providerName,{debug:this._debug,suiMaster:this}),this._initialized=!1,this._packages={},this._suiCoins=new ou({suiMaster:this,debug:this._debug})}get utils(){return xt}get suiCoins(){return this._suiCoins}get MIST_PER_SUI(){return BigInt(rp)}get Transaction(){return Vr}get Commands(){return $t}get SuiObject(){return cr}get SuiTransaction(){return bh}get SuiEvent(){return ku}get SuiPaginatedResponse(){return As}get objectStorage(){return this._objectStorage}get instanceN(){return this._instanceN}get client(){return this._client}get connectedChain(){return this._providerName}get onMainnet(){return this._providerName.split("sui:").join("").toLowerCase()==="mainnet"}get address(){return this._address}get signer(){return this._signer}package(e={}){return this.addPackage(e)}addPackage(e){if(e.id&&this._packages[e.id])return this._packages[e.id];const n=new uv({...e,debug:this._debug,suiMaster:this});return e.id&&(this._packages[e.id]=n),n}async getClient(){return await this.initialize(),this._client}async initialize(){return this._initialized||(this.log("initializing..."),this._initialized=!0,!this._signer&&this._keypair&&(this._signer=this._keypair),this._signer?(this._signer.toSuiAddress?this._address=this._signer.toSuiAddress():this._signer.connectedAddress?this._address=this._signer.connectedAddress:this._address=await this._signer.getAddress(),this.log("initialized. connected as",this._address)):this.log("initialized in read-only mode.")),!0}async resolveNameServiceName(e={}){const n=await this.resolveNameServiceNames(e);return n&&n.length?n[0]:null}async resolveNameServiceNames(e={}){if(!this._address)return[];try{const n=await this._client.resolveNameServiceNames({address:this.address,format:e.format});if(n&&n.data)return n.data}catch{return[]}}async signAndExecuteTransaction(e){if(!e.chain){const s="sui:"+this._providerName.split("sui:").join("").toLowerCase();e.chain=s}e.account||(e.account={address:this._address});let n=null;this._keypair?(e.signer=this._keypair,n=await this._client.signAndExecuteTransaction(e)):this._signer&&(n=await this._signer.signAndExecuteTransaction(e));try{if(e&&e.requestType&&e.requestType=="WaitForLocalExecution")return await this.client.waitForTransaction({digest:n.digest,options:e.options||{}})}catch(s){this.log(s)}return n}async requestSuiFromFaucet(){await this.initialize();let e=BigInt(0);const n=this._providerName.split("sui:").join("");if(n==="mainnet")this.log(`no faucet on ${n}`);else{const s=_4(n);this.log(`requesting sui from faucet... ${s}`);const r=await x4({host:s,recipient:this._address});let i=0;if(r&&r.transferredGasObjects)for(let o of r.transferredGasObjects)e+=BigInt(o.amount),i++;this.log("got from faucet",e,"MIST in",i,"objects")}return e}async getBalance(e="0x2::sui::SUI",n=null){await this.initialize();let s=n;return!s&&this.address&&(s=this.address),await this._suiCoins.get(e).getBalance(s)}async fetchEvents(e={}){let n=e.query;const s={descending_order:e.descending_order||!1,query:n,limit:e.limit||50},r=new As({debug:this._debug,suiMaster:this,params:s,method:"queryEvents",order:e.order});return await r.fetch(),r}async fetchTransactions(e={}){let n={};e.fromAddress&&(n.FromAddress=e.fromAddress),e.filter&&(n=e.filter);const s={descending_order:!1,filter:n,options:{showEffects:!0},limit:e.limit||50},r=new As({debug:this._debug,suiMaster:this,params:s,method:"queryTransactionBlocks",order:e.order});return await r.fetch(),r}};hr(xi,"instancesCount",0);let Cs=xi;Cs.MIST_PER_SUI=BigInt(rp);Cs.Transaction=Vr;Cs.Commands=$t;Cs.SuiUtils=xt;const tt={DISCONNECT:"standard:disconnect",CONNECT:"standard:connect",EVENTS:"standard:events",SUI_SIGN_AND_EXECUTE_TX_BLOCK:"sui:signAndExecuteTransactionBlock",SUI_SIGN_TX_BLOCK:"sui:signTransactionBlock",SUI_SIGN_AND_EXECUTE_TX:"sui:signAndExecuteTransaction",SUI_SIGN_TX:"sui:signTransaction",SUI_SIGN_MESSAGE:"sui:signMessage",SUI_SIGN_PERSONAL_MESSAGE:"sui:signPersonalMessage"};class A4 extends Bn{constructor(e={}){super(e),this._standartAdapter=null,e.standartAdapter&&this.setStandartAdapter(e.standartAdapter),this._name=e.name||null,this._icon=e.icon||null,this._downloadUrls=e.downloadUrls||{},this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1}async signAndExecuteTransaction(e){return this.hasFeature(tt.SUI_SIGN_AND_EXECUTE_TX)?await this.getFeature(tt.SUI_SIGN_AND_EXECUTE_TX).signAndExecuteTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(tt.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e))}async signAndExecuteTransactionBlock(e){return await this.getFeature(tt.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e)}async signTransactionBlock(e){return this.hasFeature(tt.SUI_SIGN_TX)?await this.getFeature(tt.SUI_SIGN_TX).signTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(tt.SUI_SIGN_TX_BLOCK).signTransactionBlock(e))}async signTransactionBlock(e){return await this.getFeature(tt.SUI_SIGN_TX_BLOCK).signTransactionBlock(e)}async signPersonalMessage(e){return this.hasFeature(tt.SUI_SIGN_PERSONAL_MESSAGE)?await this.getFeature(tt.SUI_SIGN_PERSONAL_MESSAGE).signPersonalMessage(e):await this.getFeature(tt.SUI_SIGN_MESSAGE).signMessage(e)}async signMessage(e){return await this.signPersonalMessage(e)}async disconnect(e){const n=await this.getFeature(tt.DISCONNECT).disconnect(e);return this.connectionUpdated(),n}getDownloadURL(){return this._downloadUrls&&this._downloadUrls.chrome?this._downloadUrls.chrome:null}get isDefault(){return!this._standartAdapter}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}get isConnected(){return this._isConnected}async connect(){try{await this.getFeature(tt.CONNECT).connect()}catch(e){console.error(e)}this.connectionUpdated()}connectionUpdated(){const e=""+this._connectedAddress,n=""+this._connectedChain;try{this._standartAdapter&&this._standartAdapter.accounts&&this._standartAdapter.accounts.length?(this._connectedAddress=this._standartAdapter.accounts[0].address,this._connectedChain=this._standartAdapter.accounts[0].chains[0]):(this._connectedAddress=null,this._connectedChain=null)}catch{this._connectedAddress=null,this._connectedChain=null}(""+this._connectedAddress!=e||""+this._connectedChain!=n)&&(this._connectedAddress&&this._connectedChain?(this._isConnected=!0,this.emit("connected",this)):(this._isConnected=!1,this.emit("disconnected",this)))}setStandartAdapter(e){if(this._standartAdapter)return!0;let n=!1;for(const s in e.features)(""+s).indexOf("sui:")===0&&(n=!0);if(!n)return!1;this._standartAdapter=e,this.__standartAdapterChangeListener||(this.__standartAdapterChangeListener=s=>{this.connectionUpdated()}),this.getFeature(tt.EVENTS).on("change",this.__standartAdapterChangeListener),this.connectionUpdated()}get okForSui(){return this.isInstalled?this.hasFeature(tt.SUI_SIGN_AND_EXECUTE_TX_BLOCK)&&this.hasFeature(tt.EVENTS):!1}get isInstalled(){return!!this._standartAdapter}get features(){return this._standartAdapter?this._standartAdapter.features:{}}get name(){return this._standartAdapter?this._standartAdapter.name:this._name}get icon(){return this._standartAdapter?this._standartAdapter.icon:this._icon}get version(){if(this._standartAdapter)return this._standartAdapter.version}hasFeature(e){return!!this.getFeature(e)}getFeature(e){const n=this.features;return n&&n[tt[e]]?n[tt[e]]:n&&n[e]?n[e]:null}}var N4=function(t,e,n,s){if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?s:n==="a"?s.call(t):s?s.value:e.get(t)},T4=function(t,e,n,s,r){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n},Po;let ii;const Ca=new Set;function O4(t){Ii=void 0,Ca.add(t)}function k4(t){Ii=void 0,Ca.delete(t)}const Ar={};function j4(){if(ii||(ii=Object.freeze({register:af,get:C4,on:D4}),typeof window>"u"))return ii;const t=Object.freeze({register:af});try{window.addEventListener("wallet-standard:register-wallet",({detail:e})=>e(t))}catch(e){console.error(`wallet-standard:register-wallet event listener could not be added
`,e)}try{window.dispatchEvent(new B4(t))}catch(e){console.error(`wallet-standard:app-ready event could not be dispatched
`,e)}return ii}function af(...t){var e;return t=t.filter(n=>!Ca.has(n)),t.length?(t.forEach(n=>O4(n)),(e=Ar.register)==null||e.forEach(n=>cf(()=>n(...t))),function(){var s;t.forEach(r=>k4(r)),(s=Ar.unregister)==null||s.forEach(r=>cf(()=>r(...t)))}):()=>{}}let Ii;function C4(){return Ii||(Ii=[...Ca]),Ii}function D4(t,e){var n;return(n=Ar[t])!=null&&n.push(e)||(Ar[t]=[e]),function(){var r;Ar[t]=(r=Ar[t])==null?void 0:r.filter(i=>e!==i)}}function cf(t){try{t()}catch(e){console.error(e)}}class B4 extends Event{get detail(){return N4(this,Po,"f")}get type(){return"wallet-standard:app-ready"}constructor(e){super("wallet-standard:app-ready",{bubbles:!1,cancelable:!1,composed:!1}),Po.set(this,void 0),T4(this,Po,e,"f")}preventDefault(){throw new Error("preventDefault cannot be called")}stopImmediatePropagation(){throw new Error("stopImmediatePropagation cannot be called")}stopPropagation(){throw new Error("stopPropagation cannot be called")}}Po=new WeakMap;const mr={SLUSH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzBDMEExRiIvPgo8cGF0aCBkPSJNMTMuMTM1OCAzMi4xMDg1QzE0LjE3MDEgMzUuOTY4MyAxOC4wMzMxIDM5LjQ2MjQgMjYuMDI1NSAzNy4zMjA4QzMzLjY1MTUgMzUuMjc3NCAzOC40MzA5IDI5LjAwNCAzNy4xOTE2IDI0LjM3ODlDMzYuNzYzNiAyMi43ODE3IDM1LjQ3NDYgMjEuNzAwNiAzMy40ODcyIDIxLjg3NjVMMTUuNzE2NSAyMy4zNTcyQzE0LjU5NzMgMjMuNDQzIDE0LjA4NDIgMjMuMjU5NiAxMy43ODgxIDIyLjU1NDNDMTMuNTAxIDIxLjg4MjMgMTMuNjY0NiAyMS4xNjA5IDE1LjAxNjMgMjAuNDc3N0wyOC41NDAxIDEzLjUzNzRDMjkuNTc2NyAxMy4wMSAzMC4yNjcxIDEyLjc4OTMgMzAuODk4IDEzLjAxMjZDMzEuMjkzNCAxMy4xNTYzIDMxLjU1MzggMTMuNzI4NCAzMS4zMTQ3IDE0LjQzNDRMMzAuNDM3OCAxNy4wMjMyQzI5LjM2MTcgMjAuMjAwMiAzMS42NjUzIDIwLjkzODIgMzIuOTY0MSAyMC41OTAyQzM0LjkyODkgMjAuMDYzNyAzNS4zOTExIDE4LjE5MjMgMzQuNzU4MSAxNS44Mjk5QzMzLjE1MzMgOS44NDA1NCAyNi43OTkgOC45MDQxMSAyMS4wMzc4IDEwLjQ0NzhDMTUuMTc2NyAxMi4wMTgzIDEwLjA5NiAxNi43Njc2IDExLjY0NzQgMjIuNTU3M0MxMi4wMTI5IDIzLjkyMTYgMTMuMjY4NyAyNS4wMTE2IDE0LjcyMzIgMjQuOTc4NUwxNi45NDM4IDI0Ljk3MzFDMTcuNDAwNCAyNC45NjI1IDE3LjIzNiAyNSAxOC4xMTcgMjQuOTI3MUMxOC45OTggMjQuODU0MSAyMS4zNTA5IDI0LjU2NDYgMjEuMzUwOSAyNC41NjQ2TDMyLjg5NjIgMjMuMjU4TDMzLjE5MzcgMjMuMjE0OEMzMy44Njg5IDIzLjA5OTcgMzQuMzc5MiAyMy4yNzUgMzQuODEwNiAyNC4wMTgzQzM1LjQ1NjMgMjUuMTMwNCAzNC40NzEyIDI1Ljk2OTEgMzMuMjkyIDI2Ljk3MzFDMzMuMjYwNSAyNyAzMy4yMjg4IDI3LjAyNyAzMy4xOTcgMjcuMDU0MUwyMy4wNDgyIDM1LjgwMDVDMjEuMzA4NyAzNy4zMDA4IDIwLjA4NjcgMzYuNzM2NyAxOS42NTg4IDM1LjEzOTVMMTguMTQzMSAyOS40ODI5QzE3Ljc2ODcgMjguMDg1NCAxNi40MDQxIDI2Ljk4ODkgMTQuODA1NiAyNy40MTcyQzEyLjgwNzUgMjcuOTUyNiAxMi42NDU1IDMwLjI3ODQgMTMuMTM1OCAzMi4xMDg1WiIgZmlsbD0iI0ZCRkFGRiIvPgo8L3N2Zz4K",OKX:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTUwIj48ZGVmcz48c3R5bGU+LmV7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxwYXRoIGlkPSJkIiBjbGFzcz0iZSIgZD0iTTAsMEgxNTBWMTUwSDBWMFoiLz48L2c+PC9nPjxwYXRoIGQ9Ik0xMy44MSwxMy41N3YxMjMuOThoMTIzLjk4VjEzLjU3SDEzLjgxWm0yNi44MiwyOC42NGMwLS44NywuNzEtMS41OCwxLjU4LTEuNThoMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTh2MjAuM2MwLC44OC0uNzEsMS41OS0xLjU4LDEuNTloLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OXYtMjAuM1ptMjMuNDYsNjYuN2MwLC44Ny0uNzEsMS41OC0xLjU4LDEuNThoLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OHYtMjAuM2MwLS44OCwuNzEtMS41OSwxLjU4LTEuNTloMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTl2MjAuM1ptMjEuODYtMjEuNjJoLTIwLjNjLS44NywwLTEuNTktLjcxLTEuNTktMS41OXYtMjAuM2MwLS44NywuNzEtMS41OSwxLjU5LTEuNTloMjAuM2MuODcsMCwxLjU5LC43MSwxLjU5LDEuNTl2MjAuM2MwLC44Ny0uNzEsMS41OS0xLjU5LDEuNTlabTI1LjA1LDIxLjYyYzAsLjg3LS43MSwxLjU4LTEuNTksMS41OGgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU4di0yMC4zYzAtLjg4LC43MS0xLjU5LDEuNTgtMS41OWgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OXYyMC4zWm0wLTQ2LjQxYzAsLjg4LS43MSwxLjU5LTEuNTksMS41OWgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU5di0yMC4zYzAtLjg3LC43MS0xLjU4LDEuNTgtMS41OGgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OHYyMC4zWiIvPjwvc3ZnPg==",PHANTOM:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo=",SUIET:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMjQiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8zMDVfMTI1MTYpIi8+PHBhdGggZD0iTTUxLjUgNDMuNmMtMy45IDAtNy42LTMuOS05LjUtNi40LTEuOSAyLjUtNS42IDYuNC05LjUgNi40LTQgMC03LjctMy45LTkuNS02LjQtMS44IDIuNS01LjUgNi40LTkuNSA2LjQtLjggMC0xLjUtLjYtMS41LTEuNSAwLS44LjctMS41IDEuNS0xLjUgMy4yIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjMuN2MxLjEgMS44IDUgNi45IDguMiA2LjkgMy4xIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjIuN2MxLjEgMS44IDUgNi45IDguMiA2LjkuOSAwIDEuNi43IDEuNiAxLjUgMCAuOS0uNiAxLjUtMS41IDEuNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTEuNSA1Mi4zYy0zLjkgMC03LjYtMy45LTkuNS02LjQtMS45IDIuNS01LjYgNi40LTkuNSA2LjQtNCAwLTcuNy0zLjktOS41LTYuNC0xLjggMi41LTUuNSA2LjQtOS41IDYuNC0uOCAwLTEuNS0uNi0xLjUtMS41IDAtLjguNy0xLjUgMS41LTEuNSAzLjIgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMy43YzEuMSAxLjggNSA2LjkgOC4yIDYuOSAzLjEgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMi43YzEuMSAxLjggNSA2LjkgOC4yIDYuOS45IDAgMS42LjcgMS42IDEuNSAwIC45LS42IDEuNS0xLjUgMS41ek0xNC42IDM2LjdjLS44IDAtMS40LS41LTEuNi0xLjNsLS4zLTMuNmMwLTEwLjkgOC45LTE5LjggMTkuOC0xOS44IDExIDAgMTkuOCA4LjkgMTkuOCAxOS44bC0uMyAzLjZjLS4xLjgtLjkgMS40LTEuNyAxLjItLjktLjEtMS41LS45LTEuMy0xLjhsLjMtM2MwLTkuMi03LjUtMTYuOC0xNi44LTE2LjgtOS4yIDAtMTYuNyA3LjUtMTYuNyAxNi44bC4yIDMuMWMuMi44LS4zIDEuNi0xLjEgMS44aC0uM3oiIGZpbGw9IiNmZmYiLz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMzA1XzEyNTE2IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUyLjc1ODAzIDUxLjM1OCAtNTEuNDM5NDcgNTIuODQxNzIgMCA3LjQwNykiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDU4REQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2N0M4RkYiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",SURF:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NzAuMDc3IDM5OS45MDZDNDU5LjIxNCA0MDcuOTM1IDQ0Ny4yNDggNDEzLjc2IDQzNC45NjggNDE0LjcwNUMzODguMzY2IDQxOC42NDEgMzI4LjUzNyAzNzIuODI2IDI5MC41OTQgMzY3Ljk0NUMyNTIuNjUxIDM2My4wNjUgMjMxLjM5NyAzODguNzI4IDIyMi4yNjYgNDAzLjY4NEMyMTYuNTk4IDQxMi44MTYgMjE1LjU2NSA0MjYuMTcxIDIxNS44OCA0MzYuODc3QzIxNi4xOTUgNDQxLjEyOCAyMTYuNDQgNDQ1LjkyNyAyMTcuODU3IDQ1Mi4xNzZDMjIwLjM0OSA0NjMuMTcxIDI0Ny45MjggNTA2LjY1MSAzMTEuNTM0IDUwMS4xNEMzODAuOTY1IDQ5NS4xNTcgNDIxLjI3IDQ1Ny44NDQgNDYyLjM2MiA0MDkuMDM3TDQ2Ny41NTggNDAyLjc0QzQ2OC4zNDUgNDAxLjc5NSA0NjkuMjkgNDAwLjY5MyA0NzAuMDc3IDM5OS43NDhWMzk5LjkwNloiIGZpbGw9IiM1OEM1RjMiLz4KPHBhdGggZD0iTTI1NC4zNiAzMjcuMDA5QzI2NC43NTEgMzIwLjcxMSAyNzUuNzcyIDMxNi40NjEgMjg2Ljc5MiAzMTYuNDYxQzMyOC44MjkgMzE2LjQ2MSAzNzguNTgxIDM2MS45NjEgNDEyLjExNSAzNjkuMjAzQzQ0NS42NSAzNzYuNDQ1IDQ2OC4zMjIgMzU0LjQwNyA0NzUuODc5IDM0Mi40MzhDNDgzLjQzNiAzMzAuNDcgNDg0LjM1MSAzMTkuMDgzIDQ4My45MDggMzEwLjk1QzQ4My40NjUgMzAyLjgxNyA0ODMuNzUgMzAzLjIzNiA0ODMuNDM2IDI5OS40NTdDNDgwLjYwMiAyOTIuMDU3IDQ2MC43NjUgMjQ4LjYwNCA0MDMuNjE0IDI0OC42MDRDMzQxLjI2OCAyNDguNjA0IDMwMi4zOCAyNzguODMyIDI2MS45MTggMzE5LjI5NEwyNTYuNzIyIDMyNC40OUMyNTUuOTM1IDMyNS4yNzcgMjU0Ljk4OSAzMjYuMjIyIDI1NC4yMDIgMzI3LjAwOUgyNTQuMzZaIiBmaWxsPSIjOURFMkZGIi8+CjxwYXRoIGQ9Ik0zMyAyOTUuNTI1TDMzLjAwMzkgMjk4LjQzNUMzMy4wMDM5IDM1NS45IDc5LjYwMyA0MDAuNjk1IDEzNi45MTEgNDAwLjY5NUMxNjEuNDcyIDQwMC42OTUgMTgxLjkxOSAzOTMuOTIgMTk5LjcxIDM3OS43NUwyMDAuNzYgMzc4Ljc2N0MyMDAuNzYgMzc4Ljc2NyAyMDEuNDE3IDM3OC4yMjYgMjAxLjkzNCAzNzcuNzA5QzIwMi4wOTIgMzc3LjU1MSAyMDIuNDA2IDM3Ny4yMzYgMjAyLjU2NCAzNzcuMDc5QzIwMi43MjEgMzc2LjkyMSAyMDMuMDM2IDM3Ni42MDcgMjAzLjE5MyAzNzYuNDQ5QzIwNS4yNCAzNzQuNTYgMjA4Ljg2MSAzNzEuMDk2IDIxNC4yMTQgMzY2LjA1OEMyMjMuMDMxIDM1Ny43MTQgMjM2LjI1NiAzNDQuODA0IDI1NC4wNDcgMzI3LjE3QzI1NC44MzQgMzI2LjM4MyAyNTUuNzc5IDMyNS40MzggMjU2LjU2NiAzMjQuNjUxTDI2MS43NjIgMzE5LjQ1NkMzMDIuMDY2IDI3OS4xNTEgMzQwLjk1NCAyNDguNzY1IDQwMy40NTggMjQ4Ljc2NUM0NjAuNjA5IDI0OC43NjUgNDgwLjQ0NyAyOTIuMjE4IDQ4My4yODEgMjk5LjYxOEM0NzcuNjEzIDIwMC41ODggNDA4LjE4MSAxMTguNzE5IDMxNS40NDggOTQuMzE1N0MzMTUuNDQ4IDk0LjMxNTcgMzEzLjcxNyA5My44NDM0IDMxMS44MjggOTMuMzcxMUMzMDIuMjI0IDkwLjUzNzEgMjc2LjA4OCA4MS40MDU0IDI3Ni4wODggNjYuMTMzN1YxNy45NTY5QzI3Ni4wODggMTcuOTU2OSAyNzguMzM5IDUuMTA2MjggMjY0LjI4IDE0LjMzNThDMjI4LjA2OSAzOC4xMDk0IDE5Ny4yMTEgODkuOTA3NCAxNjkuMTg2IDEwNS4xNzlDMTY5LjE4NiAxMDUuMTc5IDE2OC44NzEgMTA1LjMzNiAxNjguNzE0IDEwNS40OTRDMTAwLjIyNyAxMzQuNzc4IDQ4LjczNzUgMTk1LjE4MiAzNS4xOTc3IDI3MC41OTZDMzMuNzgwNyAyNzguMzEgMzMuNDc2MiAyODIuMjY5IDMzLjAwMzkgMjkwLjE0MUwzMyAyOTUuNTI1WiIgZmlsbD0iIzU4QzVGMyIvPgo8cGF0aCBkPSJNMjU1LjQ5NSAyNzEuMzQ5QzI1NS40OTUgMjcxLjM0OSAyMzMuODIzIDI4Ny45MDUgMjExLjcyMyAzMDYuNTg2QzE5NS4xNzMgMzIwLjU3NSAxNzguOTYxIDMzNS45MzkgMTY4LjI3MSAzNDUuNDM0QzE2MS41MDMgMzUxLjQ0NCAxNTIuODIyIDM0OS4xNzYgMTUwLjQ3NCAzMzguMTIxQzE0Ni44NTMgMzI3LjEgMTUzLjQ3MSAyODUuNzY0IDE4NC4xNzIgMjY1Ljc2OUMyMTQuODczIDI0NS43NzQgMjQ2LjIwNCAyNDUuNzc0IDI1Ny42OTcgMjUzLjMzMUMyNjcuNDE1IDI1OS43MjEgMjYzLjc0MyAyNjQuMjAzIDI2Mi4xMDYgMjY1Ljc2OUMyNjAuNDY5IDI2Ny4zMzUgMjU1LjQ5NSAyNzEuMzQ5IDI1NS40OTUgMjcxLjM0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",NIGHTLY:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2RDczRjgiLz4KPHBhdGggZD0iTTQ4IDg1LjYzNTZDNDggODUuNjM1NiA1Mi40NTMzIDg1LjYzNTYgNTUuNDQgODIuNTg2N0M1OC45MTU1IDc5LjI4MDEgNTcuMzUxMSA3NS40MzEyIDYyLjI3NTUgNzEuNDMxMkM2Ni45ODY2IDY3LjY0NDUgNzIuOTI0NCA3MC4zMzc5IDcyLjkyNDQgNzAuMzM3OUM3Ny4wMjIyIDYyLjEyNDUgNzQuNzkxMSA1Mi41NjkgNzQuNzkxMSA1Mi41NjlDODEuNzY4OCAzNC4yNTc5IDc1Ljk2NDQgMjEuMTU1NyA3NC40NDQ0IDE3LjM2MDFDNjkuNDQ4OCAyNC4zMzc5IDYzLjE5MTEgMjkuMTczNCA1NS43OTU1IDMyLjQwOUM1My4yMjY2IDMxLjcwNjggNTAuNTk1NSAzMS4zMzM0IDQ4IDMxLjM2MDFDNDUuNDEzMyAzMS4zMzM0IDQyLjc3MzMgMzEuNzA2OCA0MC4yMDQ0IDMyLjQwOUMzMi44MTc3IDI5LjE2NDUgMjYuNTUxMSAyNC4zMzc5IDIxLjU1NTUgMTcuMzYwMUMyMC4wMzU1IDIxLjE1NTcgMTQuMjMxMSAzNC4yNTc5IDIxLjIwODkgNTIuNTY5QzIxLjIwODkgNTIuNTY5IDE4Ljk3NzggNjIuMTI0NSAyMy4wNzU1IDcwLjMzNzlDMjMuMDc1NSA3MC4zMzc5IDI5LjAxMzMgNjcuNjQ0NSAzMy43MjQ0IDcxLjQzMTJDMzguNjU3NyA3NS40MzEyIDM3LjA4NDQgNzkuMjgwMSA0MC41NiA4Mi41ODY3QzQzLjU0NjYgODUuNjM1NiA0OCA4NS42MzU2IDQ4IDg1LjYzNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDc5OSA2NS4yOThDNDIuMjkzMyA1OS4yMTggMzYuMzAyMSA1Ny4yNjI0IDMyLjIxMzMgNTkuODIyNEMzMi4yMTMzIDU5LjgyMjQgMzIuODUzMyA2Mi40MzU4IDM1LjgzOTkgNjMuNzUxM0MzOC4yNzU1IDY0LjgyNjkgMzkuMzI0NCA2My4zODY5IDQyLjQ3OTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNMjIuNDk3NyAyMy4wOTM1QzIwLjA4ODggMzEuNTQ2OCAyMS4xMjg4IDQyLjI0MDIgMjQuOTMzMyA1MC4wMjY5QzI4LjgyNjYgNDcuMjcxMyAzMi45MTU1IDQzLjAxMzUgMzUuMDkzMyAzOC41MDY5QzI5Ljk2NDQgMzQuNzExMyAyNS42NjIyIDMxLjEwMjQgMjIuNDk3NyAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNTMuNTE5OSA2NS4yOThDNTMuNzA2NiA1OS4yMTggNTkuNjk3NyA1Ny4yNjI0IDYzLjc4NjYgNTkuODIyNEM2My43ODY2IDU5LjgyMjQgNjMuMTQ2NiA2Mi40MzU4IDYwLjE1OTkgNjMuNzUxM0M1Ny43MjQzIDY0LjgyNjkgNTYuNjc1NSA2My4zODY5IDUzLjUxOTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNzMuNTAyMiAyMy4wOTM1Qzc1LjkxMTEgMzEuNTQ2OCA3NC44NzExIDQyLjI0MDIgNzEuMDY2NiA1MC4wMjY5QzY3LjE3MzMgNDcuMjcxMyA2My4wODQ0IDQzLjAxMzUgNjAuOTA2NiAzOC41MDY5QzY2LjAzNTUgMzQuNzExMyA3MC4zMzc3IDMxLjEwMjQgNzMuNTAyMiAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNDcuOTk5OSA4NS4zMDY5QzUwLjE0MDQgODUuMzA2OSA1MS44NzU1IDgzLjc3ODcgNTEuODc1NSA4MS44OTM2QzUxLjg3NTUgODAuMDA4NCA1MC4xNDA0IDc4LjQ4MDIgNDcuOTk5OSA3OC40ODAyQzQ1Ljg1OTUgNzguNDgwMiA0NC4xMjQ0IDgwLjAwODQgNDQuMTI0NCA4MS44OTM2QzQ0LjEyNDQgODMuNzc4NyA0NS44NTk1IDg1LjMwNjkgNDcuOTk5OSA4NS4zMDY5WiIgZmlsbD0iIzdCODFGOSIvPgo8L3N2Zz4K"},uf="sui:devnet",En=class En extends Bn{constructor(e={}){super(e),this._adapters={},this._defaultChain=e.defaultChain||uf,this._activeAdapter=null,this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1,this._isConnecting=!1,this._client=null,this._suiMaster=null,this._rpcSettings=null,setTimeout(()=>{this.initialize()},50)}get activeAdapter(){return this._activeAdapter}getAddress(){return this._connectedAddress}async signAndExecuteTransactionBlock(e){return await this._activeAdapter.signAndExecuteTransactionBlock(e)}async signAndExecuteTransaction(e){return await this._activeAdapter.signAndExecuteTransaction(e)}get client(){return this._client}async getClient(){return await this.initClient(),this._client}async getSuiMaster(){return await this.initClient(),this._suiMaster}get suiMaster(){return this._suiMaster}get isConnected(){return this._isConnected}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}static getSingleton(e={}){let n=e.defaultChain||uf;return En._singleInstances[n]||(En._singleInstances[n]=new En(e)),En._singleInstances[n]}get adapters(){return this._adapters}async connect(e){let n=e;if(e.name&&(n=e.name),!this._adapters[n])return!1;this._activeAdapter=this._adapters[n],this._isConnecting=!0;try{await this._activeAdapter.connect()}catch(s){this.log("error",s)}this._isConnecting=!1}adapterConnected(e){this._activeAdapter=e,this._isConnected=e.isConnected,this._connectedAddress=e.connectedAddress,this._connectedChain,this._connectedChain=e.connectedChain,this._connectedChain=="sui:unknown"&&(this._connectedChain="sui:mainnet"),this._client=null,this._suiMaster=null,this.initClient(),this.emit("connected")}async setRPC(e={}){this._rpcSettings=e,this._client=null,this._suiMaster=null,await this.initClient(),this.emit("rpc")}adapterDisconnected(e){this._isConnected=!1,this._connectedAddress=null,this.emit("disconnected")}attachAdapter(e){let n=e.name;if(e.standartAdapter&&e.standartAdapter.name&&(n=e.standartAdapter.name),!n)return!1;const s=new A4({...e,debug:this._debug});this._adapters[n]?e.standartAdapter&&this._adapters[n].setStandartAdapter(e.standartAdapter):(this._adapters[n]=s,this._adapters[n].addEventListener("connected",r=>{this.adapterConnected(r.detail)}),this._adapters[n].addEventListener("disconnected",r=>{this.adapterDisconnected(r.detail)}),this.emit("adapter",s))}getCurrentChain(){return this._connectedChain?this._connectedChain:this._defaultChain}async initClient(){if(this._client)return!0;let e=this.getCurrentChain();const n=En.getChainsSettings();if(this._rpcSettings)this._rpcSettings.providerName=e.split("sui:").join(""),this._client=Cs.SuiUtils.suiClientForRPC(this._rpcSettings);else if(n[e])this._client=new Hc({url:n[e].fullnode}),this._client.endpoint=n[e].fullnode;else throw this.log("error","invalid chain",e),new Error("invalid chain: "+e);this._suiMaster=new Cs({debug:this._debug,signer:this,client:this._client})}async initialize(){await this.initClient();for(const s of En.getPossibleWallets())this.attachAdapter(s);const e=j4(),n=e.get();for(const s of n)this.attachAdapter({standartAdapter:s});e.on("register",s=>{s.name&&this.attachAdapter({standartAdapter:s})})}static getChainsSettings(){return{"sui:devnet":{fullnode:"https://fullnode.devnet.sui.io:443/",websocket:"https://fullnode.devnet.sui.io:443/",faucet:"https://faucet.devnet.sui.io/gas"},"sui:testnet":{fullnode:"https://fullnode.testnet.sui.io:443/",websocket:"https://fullnode.testnet.sui.io:443/",faucet:"https://faucet.testnet.sui.io/gas"},"sui:mainnet":{fullnode:"https://fullnode.mainnet.sui.io:443/",websocket:"https://fullnode.mainnet.sui.io:443/"},"sui:localnet":{websocket:"http://127.0.0.1:9000",fullnode:"http://127.0.0.1:9000",websocket:"http://127.0.0.1:9000",faucet:"http://127.0.0.1:9123/gas"}}}static getPossibleWallets(){return[{name:"Slush",icon:mr.SLUSH,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/slush-%E2%80%94-a-sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"}},{name:"Suiet",icon:mr.SUIET,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd"}},{name:"OKX Wallet",icon:mr.OKX,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/mcohilncbfahbmgdjkbpemcciiolgcge"}},{name:"Phantom",icon:mr.PHANTOM,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"}},{name:"Surf Wallet",icon:mr.SURF,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/surf-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen"}},{name:"Nightly Wallet",icon:mr.NIGHTLY,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/nightly/fiikommddbeccaoicoejoniammnalkfa"}}]}};hr(En,"_singleInstances",{});let hu=En;xt.txInput;const Ji=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},U4={name:"SuiSync",props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object}},data(){return{connectedAddress:null,connectedChain:null,adapters:[],suiInBrowser:null,suiMaster:null,lastSuiMasterInstanceN:null}},emits:["connect","connected","loaded","disconnected","error","suiMaster","adapters"],components:{},watch:{},methods:{async reinitSuiMaster(){this.suiMaster=await this.suiInBrowser.getSuiMaster(),(!this.lastSuiMasterInstanceN||this.lastSuiMasterInstanceN!=this.suiMaster.instanceN)&&this.$emit("suiMaster",this.suiMaster)},async setRPC(t={}){await this.suiInBrowser.setRPC(t),await this.reinitSuiMaster()}},mounted:function(){this.suiInBrowser=hu.getSingleton({debug:!0,defaultChain:this.defaultChain}),this.rpcSettings&&this.suiInBrowser.setRPC(this.rpcSettings),this.adapters=Object.values(this.suiInBrowser.adapters),this.suiInBrowser.addEventListener("adapter",t=>{this.adapters.push(t.detail),this.$emit("adapters",this.adapters)}),this.suiInBrowser.addEventListener("connected",()=>{this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)}),this.suiInBrowser.addEventListener("disconnected",()=>{this.connectedAddress=null,this.connectedChain=null,this.$emit("disconnected")}),this.$nextTick(()=>{this.$emit("loaded",this.suiInBrowser),this.$emit("adapters",this.adapters)}),this.suiInBrowser.isConnected&&(this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)),this.reinitSuiMaster()},computed:{}};function L4(t,e,n,s,r,i){return De(),ze("div")}const z4=Ji(U4,[["render",L4]]),P4={name:"SignInWithSuiDialog",emits:["click","hidden"],props:{adapters:{type:Array,default(){return[]}},showing:{type:Boolean,default:!1}},data(){return{isActive:!1,isVisible:!1}},watch:{showing:function(){this.showing?this.show():this.hide()}},computed:{},components:{},methods:{onAdapterClick(t){this.$emit("click",t)},show(){this.isActive=!0,setTimeout(()=>{this.isVisible=!0},10)},hide(){this.isVisible=!1,setTimeout(()=>{this.isActive=!1,this.$emit("hidden")},300)},onBackdrop(){this.hide(),console.log(this.adapters)}},beforeMount:function(){},mounted:async function(){}},$4={key:0,class:"signinwithsui_dialog"},R4={class:"signinwithsui_dialog_inner_card"},V4={class:"signinwithsui_dialog_list"},F4=["onClick"],q4={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_icon"},K4=["src"],W4={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_name"};function G4(t,e,n,s,r,i){return r.isActive?(De(),ze("div",$4,[J("div",{class:"signinwithsui_dialog_backdrop",onClick:e[0]||(e[0]=(...o)=>i.onBackdrop&&i.onBackdrop(...o))}),J("div",{class:_i(["signinwithsui_dialog_inner",{signinwithsui_dialog_inner_active:r.isVisible}])},[J("div",R4,[J("div",V4,[(De(!0),ze(Nt,null,xc(n.adapters,(o,a)=>(De(),ze(Nt,{key:a},[o&&o.name&&(o.isDefault||o.okForSui)?(De(),ze("div",{key:0,class:_i(["signinwithsui_dialog_item",{signinwithsui_dialog_item_disabled:o.isDefault}]),onClick:c=>i.onAdapterClick(o)},[J("div",q4,[J("img",{loading:"lazy",fetchpriority:"auto","aria-hidden":"true",draggable:"false",src:o.icon},null,8,K4)]),J("div",W4,nn(o.name),1)],10,F4)):_t("",!0)],64))),128))])])],2)])):_t("",!0)}const H4=Ji(P4,[["render",G4],["__scopeId","data-v-76130ab2"]]),Y4={name:"SignInWithSui",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object},auto:{default:!0,type:Boolean},visible:{default:!0,type:Boolean},persist:{default:!1,type:Boolean}},data(){return{isLoading:!1,libsRequested:!0,adapters:[],connectedAddress:null,displayAddress:null,resolvedNameServiceName:null,connectedChain:null,forceChainCalculated:null,suiMaster:null,activeAdapter:null,showingDialog:!1}},watch:{defaultChain:async function(){this.connectedAddress=null,this.connectedChain=null,this.suiMaster=null,this.libsRequested=!1,await new Promise(t=>setTimeout(t,50)),this.libsRequested=!0}},computed:{},components:{SuidoubleSync:z4,SignInWithSuiDialog:H4},methods:{checkDisplayAddress(){let t=this.displayAddress;this.connectedAddress?this.connectedAddress&&(this.resolvedNameServiceName?t=this.resolvedNameServiceName:t=(""+this.connectedAddress).substr(0,6)+"..."+(""+this.connectedAddress).substr(-4)):t=null,this.displayAddress!=t&&(this.displayAddress=t,this.$emit("displayAddress",this.displayAddress))},async getNameServiceName(){if(this.suiMaster&&this.suiMaster.address){const t="resolvedNameServiceName_"+this.suiMaster.connectedChain+":"+this.suiMaster.address,e=10*60*1e3,n=this.getCache(t);if(n!==void 0)this.resolvedNameServiceName=n;else{const s=await this.suiMaster.resolveNameServiceName();this.resolvedNameServiceName=s,this.setCache(t,s,e)}this.checkDisplayAddress()}else this.resolvedNameServiceName=null,this.checkDisplayAddress()},onSuiMaster(t){this.suiMaster=t,(!this.defaultChain||this.defaultChain==this.suiMaster.connectedChain)&&(this.$emit("suiMaster",t),t.getClient().then(e=>{this.$emit("client",e),this.$emit("provider",e),t.signer&&t.signer.activeAdapter&&(this.$emit("adapter",t.signer.activeAdapter),this.activeAdapter=t.signer.activeAdapter)}),this.getNameServiceName()),this.__suiMasterPromise&&this.suiMaster&&(this.__suiMasterPromiseResolver(),this.__suiMasterPromise=null),this.__connectedSuiMasterPromise&&this.isSuiMasterConnected()&&(this.__connectedSuiMasterPromiseResolver(),this.__connectedSuiMasterPromise=null)},onSuiAdapters(t){this.adapters=t},isSuiMasterConnected(t=null){return this.suiMaster&&this.suiMaster.address?!(t&&this.suiMaster.connectedChain!=t):this.suiMaster&&this.suiMaster.signer&&this.suiMaster.signer.connectedAddress?!(t&&this.suiMaster.signer.connectedChain!=t):!1},async onAdapterClick(t){if(this.showingDialog=!1,t.isDefault&&!t.isInstalled)return window.open(t.getDownloadURL(),"_blank"),!1;this.isLoading=!0,await this.$refs.sui.suiInBrowser.connect(t),this.persist&&window.localStorage.setItem("vue-sui-preferred-adapter",t.name),this.isLoading=!1},async setRPC(t={}){this.$refs.sui.setRPC(t)},async requestSuiMaster(){if(this.suiMaster)return this.suiMaster;if(await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.suiMaster)return this.suiMaster;if(this.__suiMasterPromise){if(await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")}if(this.__suiMasterPromiseResolver=null,this.__suiMasterPromise=new Promise(t=>{this.__suiMasterPromiseResolver=t}),await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")},async requestConnectedSuiMaster(t=null){if(this.isSuiMasterConnected(t))return this.suiMaster;if(await this.requestLibs(),await new Promise(e=>{setTimeout(e,200)}),this.isSuiMasterConnected(t))return this.suiMaster;if(this.isLoading=!0,this.__connectedSuiMasterPromise){if(await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")}if(this.__connectedSuiMasterPromiseResolver=null,this.__connectedSuiMasterPromise=new Promise(e=>{this.__connectedSuiMasterPromiseResolver=e}),this.showingDialog=!0,await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")},async connect(){return await this.onClick()},async onClick(){this.isLoading=!0,await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.connectedAddress||(this.showingDialog=!0),this.isLoading=!1},async initialize(){if(this.auto&&(this.isLoading=!0,await this.requestLibs(),this.isLoading=!1),await new Promise(t=>{setTimeout(t,200)}),this.persist){const t=window.localStorage.getItem("vue-sui-preferred-adapter");t&&this.adapters.forEach(e=>{e.name&&e.okForSui&&e.name==t&&this.onAdapterClick(e)})}},async requestLibs(){this.libsRequested=!0,await this.__libsRequestedPromise},onLibsLoaded(){this.__libsRequestedPromiseResolver()},onConnected(){this.showingDialog=!1;const t=this.$refs.sui.suiInBrowser.connectedChain;!this.defaultChain||this.defaultChain==t?(this.connectedAddress=this.$refs.sui.suiInBrowser.connectedAddress,this.connectedChain=this.$refs.sui.suiInBrowser.connectedChain,this.$emit("connected",this.connectedAddress),this.checkDisplayAddress()):(this.connectedAddress=null,this.$emit("wrongchain",t),this.checkDisplayAddress())},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected"),this.checkDisplayAddress()},async disconnect(){window.localStorage.setItem("vue-sui-preferred-adapter",null);try{await this.activeAdapter.disconnect()}catch(t){return console.error(t),window.location.reload(),!1}return!0},setCache(t,e,n){const r={value:e,expiry:new Date().getTime()+n};window.localStorage.setItem(t,JSON.stringify(r))},getCache(t){try{const e=window.localStorage.getItem(t);if(!e)return;const n=JSON.parse(e);if(new Date().getTime()>n.expiry){window.localStorage.removeItem(t);return}return n.value}catch{return}}},beforeMount:function(){this.__libsRequestedPromiseResolver=null,this.__libsRequestedPromise=new Promise(t=>{this.__libsRequestedPromiseResolver=t})},mounted:async function(){this.initialize()}},Z4={key:0},Q4={key:1};function X4(t,e,n,s,r,i){const o=Oi("SignInWithSuiDialog"),a=Oi("SuidoubleSync");return De(),ze("div",null,[n.visible?(De(),ze("div",{key:0,onClick:e[0]||(e[0]=(...c)=>i.onClick&&i.onClick(...c))},[r.connectedAddress?_t("",!0):(De(),ze("span",Z4,"Connect with Sui")),r.connectedAddress?(De(),ze("span",Q4,nn(r.displayAddress),1)):_t("",!0)])):_t("",!0),mt(o,{showing:r.showingDialog,onHidden:e[1]||(e[1]=c=>{this.showingDialog=!1}),adapters:r.adapters,onClick:i.onAdapterClick},null,8,["showing","adapters","onClick"]),r.libsRequested?(De(),lh(a,{key:1,ref:"sui",rpcSettings:n.rpcSettings,defaultChain:n.defaultChain,onAdapters:i.onSuiAdapters,onSuiMaster:i.onSuiMaster,onLoaded:i.onLibsLoaded,onConnected:i.onConnected,onDisconnected:i.onDisconnected},null,8,["rpcSettings","defaultChain","onAdapters","onSuiMaster","onLoaded","onConnected","onDisconnected"])):_t("",!0)])}const cb=Ji(Y4,[["render",X4]]),J4={name:"SignInWithSuiButton",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},persist:{default:!1,type:Boolean}},components:{SignInWithSui:cb},data(){return{connectedAddress:null,connectedChain:null,displayAddress:null}},methods:{onClick(){this.connectedAddress?this.$refs.signin.disconnect():this.$refs.signin.connect()},onDisplayAddress(t){this.displayAddress=t,this.$emit("displayAddress",t)},onConnected(t){this.connectedAddress=t,this.$emit("connected",t)},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected")},onWrongChain(t){this.$emit("wrongchain",t)},onSuiMaster(t){this.$emit("suiMaster",t)},onProvider(t){this.$emit("client",t),this.$emit("provider",t)},onAdapter(t){this.$emit("adapter",t)}}},eM={class:"signinwithsui_button_inner"},tM={key:0,class:"signinwithsui_button_inner"};function nM(t,e,n,s,r,i){const o=Oi("SignInWithSui");return De(),ze("div",{class:"signinwithsui_button",onClick:e[0]||(e[0]=(...a)=>i.onClick&&i.onClick(...a))},[J("div",eM,[mt(o,{defaultChain:n.defaultChain,persist:n.persist,ref:"signin",onProvider:i.onProvider,onOnAdapter:i.onAdapter,onWrongchain:i.onWrongChain,onConnected:i.onConnected,onDisconnected:i.onDisconnected,onSuiMaster:i.onSuiMaster,onDisplayAddress:i.onDisplayAddress},null,8,["defaultChain","persist","onProvider","onOnAdapter","onWrongchain","onConnected","onDisconnected","onSuiMaster","onDisplayAddress"])]),r.connectedAddress?(De(),ze("div",tM,"disconnect")):_t("",!0)])}const sM=Ji(J4,[["render",nM],["__scopeId","data-v-64b1ae38"]]),rM={components:{SignInWithSui:cb,SignInWithSuiButton:sM},data(){return{connectedAddress:null,displayAddress:null,connectedChain:null,defaultChain:"sui:mainnet",extra:[],tryingTo:null,events:[],adapter:null,suiMaster:null}},mounted(){setTimeout(()=>{hljs.highlightAll()},50)},methods:{onDisplayAddress(t){this.events.unshift({name:"displayAddress",args:[t]}),this.displayAddress=t},onRPCClick(){this.$refs.sui.setRPC({url:"https://sui-mainnet-endpoint.blockvision.org",rpc:{}})},onWrongChain(t){this.events.unshift({name:"wrongchain",args:arguments}),this.connectedAddress=null,this.connectedChain=null,this.tryingTo=t},onSuiMaster(t){this.events.unshift({name:"suiMaster",args:[t?"instance_of_SuiMaster ("+(t.address?"wallet="+t.address:"readonly")+")":null]}),this.connectedAddress=t.address,this.connectedChain=t.connectedChain,this.suiMaster=t,this.tryingTo=null},onConnected(){this.events.unshift({name:"connected",args:arguments})},onProvider(t){this.events.unshift({name:"provider",args:[t?"instance_of_SuiClient":null]})},onClient(t){this.events.unshift({name:"client",args:[t?"instance_of_SuiClient":null]})},onAdapter(t){this.events.unshift({name:"adapter",args:[t?"instance_of_SuiInBrowserAdapter (name="+t.name+")":null]}),this.adapter=t},onDisconnected(){this.events.unshift({name:"disconnected",args:arguments}),this.connectedAddress=null,this.tryingTo=null},async onTx(){try{const t=this.suiMaster.suiCoins.get("sui"),e=new this.suiMaster.Transaction,n=await t.coinOfAmountToTxCoin(e,this.suiMaster.address,"0.01");e.transferObjects([n],this.suiMaster.address);const s=await this.suiMaster.signAndExecuteTransaction({transaction:e,requestType:"WaitForLocalExecution",options:{}});s&&s.digest&&alert("tx sent, digest: "+s.digest)}catch(t){alert(t)}}}},iM={style:{display:"block",padding:"12px",background:"#abc4ff",color:"#2A66F3","text-align":"right"}},oM={key:0},aM=["title"],cM={style:{padding:"12px"}},uM={class:"docs_column"},lM={class:"docs_column"},dM={class:"docs_column_right"},fM={key:0},hM={key:1},pM={key:0},gM={style:{padding:"12px"}},bM={class:"docs_column"},yM={key:0},mM={class:"docs_column"},wM={class:"docs_column_right"};function vM(t,e,n,s,r,i){const o=Oi("SignInWithSui"),a=Oi("SignInWithSuiButton");return De(),ze(Nt,null,[J("div",null,[J("div",iM,[e[9]||(e[9]=J("div",{style:{float:"left","line-height":"32px","vertical-align":"middle"}},[J("h3",{style:{margin:"0",padding:"0"}},"vue-sui")],-1)),J("button",{onClick:e[0]||(e[0]=c=>{this.$refs.sui.connect()})},[r.connectedAddress?_t("",!0):(De(),ze("span",oM,"Connect")),r.connectedAddress?(De(),ze("span",{key:1,title:r.connectedAddress},nn(r.displayAddress),9,aM)):_t("",!0),mt(o,{ref:"sui",defaultChain:r.defaultChain,persist:!0,onConnected:i.onConnected,onClient:i.onClient,onSuiMaster:i.onSuiMaster,onProvider:i.onProvider,onAdapter:i.onAdapter,onDisconnected:i.onDisconnected,onDisplayAddress:i.onDisplayAddress,visible:!1},null,8,["defaultChain","onConnected","onClient","onSuiMaster","onProvider","onAdapter","onDisconnected","onDisplayAddress"])]),r.connectedAddress?(De(),ze("button",{key:0,onClick:e[1]||(e[1]=c=>{this.$refs.sui.disconnect()})}," Disconnect ")):_t("",!0)])]),J("div",cM,[J("div",uM,[J("p",null,[e[10]||(e[10]=vr("switch `defaultChain` component prop to: ")),J("a",{href:"#",onClick:e[2]||(e[2]=c=>{r.defaultChain="sui:mainnet"})},"sui:mainnet"),e[11]||(e[11]=vr()),J("a",{href:"#",onClick:e[3]||(e[3]=c=>{r.defaultChain="sui:devnet"})},"sui:devnet"),e[12]||(e[12]=vr()),J("a",{href:"#",onClick:e[4]||(e[4]=c=>{r.defaultChain="sui:testnet"})},"sui:testnet")])]),J("div",lM,[J("div",dM,[J("table",null,[J("tr",null,[e[13]||(e[13]=J("td",null,"Connected as",-1)),J("td",null,[!r.connectedAddress&&r.connectedChain?(De(),ze("span",fM,"read-only")):_t("",!0),r.connectedAddress&&r.connectedChain?(De(),ze("span",hM,[vr(nn(r.connectedAddress)+" ",1),J("button",{onClick:e[5]||(e[5]=(...c)=>i.onTx&&i.onTx(...c))},"Do Sample TX")])):_t("",!0)])]),J("tr",null,[e[14]||(e[14]=J("td",null,"Connected to",-1)),J("td",null,nn(r.connectedChain),1)]),J("tr",null,[e[15]||(e[15]=J("td",null,"defaultChain",-1)),J("td",null,nn(r.defaultChain),1)])]),r.tryingTo?(De(),ze("span",pM,"Was trying to connect to "+nn(r.tryingTo)+", but expected to "+nn(r.defaultChain)+" (ask user to switch chain in wallet extension settings or reinitialize/redirect to different chain dapp/sub-dapp)",1)):_t("",!0)])])]),J("div",gM,[J("div",bM,[e[17]||(e[17]=Xy(`<div><p>Demo of the <a href="https://github.com/suidouble/vue-sui">vue-sui</a> component. Vue component to connect your dapp to Sui blockchain.</p></div><p><b>Option 1:</b> All styles on pages are managed by you, the SignInWithSui component itself is invisible until popup is requested.</p><p>Take a look at <a href="https://github.com/suidouble/vue-sui/blob/main/src/App.vue">this app code</a> to check this option implementation.</p><pre><code class="language-javascript">
import { SignInWithSui } from &#39;vue-sui&#39;;

&lt;SignInWithSui 
	ref=&quot;sui&quot;
	:defaultChain=&quot;defaultChain&quot; 
	:persist=&quot;true&quot; 
	@connected=&quot;onConnected&quot; 
	@client=&quot;onClient&quot; 
	@suiMaster=&quot;onSuiMaster&quot; 
	@wrongchain=&quot;onWrongChain&quot;
	@displayAddress=&quot;onDisplayAddress&quot;
	:visible=&quot;false&quot; 
	:persist=&quot;true&quot; 
	&gt;
		</code></pre><p>Listen to component events of:</p><p><b>@client</b> to get an instance of sui sdk&#39;s <a href="https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/client/client.ts" target="_blank">SuiClient</a></p><p><b>@suiMaster</b> to get an instance of suidouble <a href="https://github.com/suidouble/suidouble" target="_blank">SuiMaster</a></p><p><b>@connected</b> when user wallet is connected, you also get additional suiMaster event with connected SuiMaster</p><p><b>@adapter</b> to get an instance of <a href="https://github.com/suidouble/suidouble/blob/main/lib/SuiInBrowserAdapter.js">SuiInBrowserAdapter</a> connected with user&#39;s wallet in case you want to sign txs without SuiMaster</p><p><b>@displayAddress</b> when displayAddress is updated. May be a short wallet address, like &quot;0x2636...9f78&quot; or SuiNS name, if resolved for the connected wallet</p><p><b>@wrongchain</b> to catch the case when you expect user to be connected to specific chain, like &#39;mainnet&#39;(defaultChain == &#39;sui:mainnet&#39;), but user has different one selected in the wallet</p><p> </p><p><b>Option 2:</b> Or use SignInWithSuiButton with pre-defined styling:</p><pre><code class="language-javascript">
import { SignInWithSuiButton } from &#39;vue-sui&#39;;

&lt;SignInWithSuiButton :defaultChain=&quot;defaultChain&quot; :persist=&quot;true&quot; /&gt;
		</code></pre>`,14)),mt(a,{defaultChain:r.defaultChain,onWrongchain:i.onWrongChain},null,8,["defaultChain","onWrongchain"]),e[18]||(e[18]=J("p",null,"SignInWithSuiButton emits the same set of events as underlying SignInWithSui component",-1)),(De(!0),ze(Nt,null,xc(r.extra,c=>(De(),ze("li",{key:c},[mt(a,{defaultChain:r.defaultChain},null,8,["defaultChain"])]))),128)),r.adapter?(De(),ze("p",yM,[J("a",{href:"#",onClick:e[6]||(e[6]=c=>{t.$refs.sui.disconnect()})},"disconnect"),e[16]||(e[16]=vr(" ( with some wallets (Suiet) it's instant, with some (Sui Wallet) - it clears connection and refreshes the page)"))])):_t("",!0),e[19]||(e[19]=J("p",null,"Also try to disconnect or switch chain directly from browser extension, vue-sui will cover this events and update component state on the fly.",-1)),e[20]||(e[20]=J("p",null," ",-1))]),J("div",mM,[J("div",wM,[e[21]||(e[21]=J("p",null,"Request the component to display a wallet extension selection popup and prompt the user to connect their wallet:",-1)),e[22]||(e[22]=J("pre",null,[J("code",{class:"language-javascript"},`
this.$refs.sui.connect();
			`)],-1)),J("p",null,[J("button",{onClick:e[7]||(e[7]=c=>{this.$refs.sui.connect()})},"Execute this.$refs.sui.connect()")]),e[23]||(e[23]=J("p",null,"To disconnect from the wallet:",-1)),e[24]||(e[24]=J("pre",null,[J("code",{class:"language-javascript"},`
this.$refs.sui.disconnect();
		`)],-1)),J("p",null,[J("button",{onClick:e[8]||(e[8]=c=>{this.$refs.sui.disconnect()})},"Execute this.$refs.sui.disconnect()")]),e[25]||(e[25]=J("h3",null,"Events",-1)),e[26]||(e[26]=J("p",null,"List of events from SignInWithSui `.$refs.sui` component",-1)),J("table",null,[(De(!0),ze(Nt,null,xc(r.events,(c,l)=>(De(),ze("tr",{key:l},[J("td",null,[J("b",null,nn(c.name),1)]),J("td",null,nn(JSON.stringify(c.args)),1)]))),128))])])])])],64)}const SM=Ji(rM,[["render",vM]]);C0(SM).mount("#app");lf.registerLanguage("javascript",db);window.hljs=lf;
