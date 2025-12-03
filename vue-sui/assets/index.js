var yb=Object.defineProperty;var Al=t=>{throw TypeError(t)};var mb=(t,e,n)=>e in t?yb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Zr=(t,e,n)=>mb(t,typeof e!="symbol"?e+"":e,n),Nl=(t,e,n)=>e.has(t)||Al("Cannot "+n);var Tl=(t,e,n)=>(Nl(t,e,"read from private field"),n?n.call(t):e.get(t)),Ol=(t,e,n)=>e.has(t)?Al("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),kl=(t,e,n,s)=>(Nl(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);import bf from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/highlight.min.js";import wb from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/languages/javascript.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},_r=[],On=()=>{},vb=()=>!1,da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vu=t=>t.startsWith("onUpdate:"),mt=Object.assign,Su=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sb=Object.prototype.hasOwnProperty,Me=(t,e)=>Sb.call(t,e),he=Array.isArray,Ar=t=>fa(t)==="[object Map]",yf=t=>fa(t)==="[object Set]",pe=t=>typeof t=="function",qe=t=>typeof t=="string",Ds=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",mf=t=>(ze(t)||pe(t))&&pe(t.then)&&pe(t.catch),wf=Object.prototype.toString,fa=t=>wf.call(t),Mb=t=>fa(t).slice(8,-1),vf=t=>fa(t)==="[object Object]",Mu=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,di=wu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Eb=/-(\w)/g,Zt=ha(t=>t.replace(Eb,(e,n)=>n?n.toUpperCase():"")),Ib=/\B([A-Z])/g,ur=ha(t=>t.replace(Ib,"-$1").toLowerCase()),pa=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),La=ha(t=>t?`on${pa(t)}`:""),Js=(t,e)=>!Object.is(t,e),za=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sf=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},xb=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jl;const ga=()=>jl||(jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?Tb(s):Eu(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(qe(t)||ze(t))return t}const _b=/;(?![^(]*\))/g,Ab=/:([^]+)/,Nb=/\/\*[^]*?\*\//g;function Tb(t){const e={};return t.replace(Nb,"").split(_b).forEach(n=>{if(n){const s=n.split(Ab);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xi(t){let e="";if(qe(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const s=xi(t[n]);s&&(e+=s+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ob="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kb=wu(Ob);function Mf(t){return!!t||t===""}const Ef=t=>!!(t&&t.__v_isRef===!0),nn=t=>qe(t)?t:t==null?"":he(t)||ze(t)&&(t.toString===wf||!pe(t.toString))?Ef(t)?nn(t.value):JSON.stringify(t,If,2):String(t),If=(t,e)=>Ef(e)?If(t,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Pa(s,i)+" =>"]=r,n),{})}:yf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pa(n))}:Ds(e)?Pa(e):ze(e)&&!he(e)&&!vf(e)?String(e):e,Pa=(t,e="")=>{var n;return Ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class jb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cb(){return zt}let Te;const Ra=new WeakSet;class xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cl(this),Nf(this);const e=Te,n=fn;Te=this,fn=!0;try{return this.fn()}finally{Tf(this),Te=e,fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_u(e);this.deps=this.depsTail=void 0,Cl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let _f=0,fi,hi;function Af(t,e=!1){if(t.flags|=8,e){t.next=hi,hi=t;return}t.next=fi,fi=t}function Iu(){_f++}function xu(){if(--_f>0)return;if(hi){let e=hi;for(hi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fi;){let e=fi;for(fi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Nf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tf(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),_u(s),Db(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Ec(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Of(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Of(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_i))return;t.globalVersion=_i;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ec(t)){t.flags&=-3;return}const n=Te,s=fn;Te=t,fn=!0;try{Nf(t);const r=t.fn(t._value);(e.version===0||Js(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Te=n,fn=s,Tf(t),t.flags&=-3}}function _u(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_u(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Db(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fn=!0;const kf=[];function Bs(){kf.push(fn),fn=!1}function Us(){const t=kf.pop();fn=t===void 0?!0:t}function Cl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Te;Te=void 0;try{e()}finally{Te=n}}}let _i=0;class Bb{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Te||!fn||Te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Te)n=this.activeLink=new Bb(Te,this),Te.deps?(n.prevDep=Te.depsTail,Te.depsTail.nextDep=n,Te.depsTail=n):Te.deps=Te.depsTail=n,Cf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Te.depsTail,n.nextDep=void 0,Te.depsTail.nextDep=n,Te.depsTail=n,Te.deps===n&&(Te.deps=s)}return n}trigger(e){this.version++,_i++,this.notify(e)}notify(e){Iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xu()}}}function Cf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Cf(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ic=new WeakMap,er=Symbol(""),xc=Symbol(""),Ai=Symbol("");function ot(t,e,n){if(fn&&Te){let s=Ic.get(t);s||Ic.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new jf),r.map=s,r.key=n),r.track()}}function es(t,e,n,s,r,i){const o=Ic.get(t);if(!o){_i++;return}const a=c=>{c&&c.trigger()};if(Iu(),e==="clear")o.forEach(a);else{const c=he(t),l=c&&Mu(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===Ai||!Ds(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Ai)),e){case"add":c?l&&a(o.get("length")):(a(o.get(er)),Ar(t)&&a(o.get(xc)));break;case"delete":c||(a(o.get(er)),Ar(t)&&a(o.get(xc)));break;case"set":Ar(t)&&a(o.get(er));break}}xu()}function fr(t){const e=Ie(t);return e===t?e:(ot(e,"iterate",Ai),hn(t)?e:e.map(xt))}function ba(t){return ot(t=Ie(t),"iterate",Ai),t}const Ub={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,xt)},concat(...t){return fr(this).concat(...t.map(e=>he(e)?fr(e):e))},entries(){return $a(this,"entries",t=>(t[1]=xt(t[1]),t))},every(t,e){return Pn(this,"every",t,e,void 0,arguments)},filter(t,e){return Pn(this,"filter",t,e,n=>n.map(xt),arguments)},find(t,e){return Pn(this,"find",t,e,xt,arguments)},findIndex(t,e){return Pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pn(this,"findLast",t,e,xt,arguments)},findLastIndex(t,e){return Pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Va(this,"includes",t)},indexOf(...t){return Va(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return Va(this,"lastIndexOf",t)},map(t,e){return Pn(this,"map",t,e,void 0,arguments)},pop(){return Qr(this,"pop")},push(...t){return Qr(this,"push",t)},reduce(t,...e){return Dl(this,"reduce",t,e)},reduceRight(t,...e){return Dl(this,"reduceRight",t,e)},shift(){return Qr(this,"shift")},some(t,e){return Pn(this,"some",t,e,void 0,arguments)},splice(...t){return Qr(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return Qr(this,"unshift",t)},values(){return $a(this,"values",xt)}};function $a(t,e,n){const s=ba(t),r=s[e]();return s!==t&&!hn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Lb=Array.prototype;function Pn(t,e,n,s,r,i){const o=ba(t),a=o!==t&&!hn(t),c=o[e];if(c!==Lb[e]){const f=c.apply(t,i);return a?xt(f):f}let l=n;o!==t&&(a?l=function(f,d){return n.call(this,xt(f),d,t)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Dl(t,e,n,s){const r=ba(t);let i=n;return r!==t&&(hn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,xt(a),c,t)}),r[e](i,...s)}function Va(t,e,n){const s=Ie(t);ot(s,"iterate",Ai);const r=s[e](...n);return(r===-1||r===!1)&&Ou(n[0])?(n[0]=Ie(n[0]),s[e](...n)):r}function Qr(t,e,n=[]){Bs(),Iu();const s=Ie(t)[e].apply(t,n);return xu(),Us(),s}const zb=wu("__proto__,__v_isRef,__isVue"),Df=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ds));function Pb(t){Ds(t)||(t=String(t));const e=Ie(this);return ot(e,"has",t),e.hasOwnProperty(t)}class Bf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Yb:Pf:i?zf:Lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=he(e);if(!r){let c;if(o&&(c=Ub[n]))return c;if(n==="hasOwnProperty")return Pb}const a=Reflect.get(e,n,gt(e)?e:s);return(Ds(n)?Df.has(n):zb(n))||(r||ot(e,"get",n),i)?a:gt(a)?o&&Mu(n)?a:a.value:ze(a)?r?Rf(a):Nu(a):a}}class Uf extends Bf{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Dr(i);if(!hn(s)&&!Dr(s)&&(i=Ie(i),s=Ie(s)),!he(e)&&gt(i)&&!gt(s))return c?!1:(i.value=s,!0)}const o=he(e)&&Mu(n)?Number(n)<e.length:Me(e,n),a=Reflect.set(e,n,s,gt(e)?e:r);return e===Ie(r)&&(o?Js(s,i)&&es(e,"set",n,s):es(e,"add",n,s)),a}deleteProperty(e,n){const s=Me(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&es(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ds(n)||!Df.has(n))&&ot(e,"has",n),s}ownKeys(e){return ot(e,"iterate",he(e)?"length":er),Reflect.ownKeys(e)}}class Rb extends Bf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $b=new Uf,Vb=new Rb,Fb=new Uf(!0);const _c=t=>t,Ji=t=>Reflect.getPrototypeOf(t);function qb(t,e,n){return function(...s){const r=this.__v_raw,i=Ie(r),o=Ar(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?_c:e?Ac:xt;return!e&&ot(i,"iterate",c?xc:er),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Kb(t,e){const n={get(r){const i=this.__v_raw,o=Ie(i),a=Ie(r);t||(Js(r,a)&&ot(o,"get",r),ot(o,"get",a));const{has:c}=Ji(o),l=e?_c:t?Ac:xt;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ot(Ie(r),"iterate",er),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Ie(i),a=Ie(r);return t||(Js(r,a)&&ot(o,"has",r),ot(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Ie(a),l=e?_c:t?Ac:xt;return!t&&ot(c,"iterate",er),a.forEach((u,f)=>r.call(i,l(u),l(f),o))}};return mt(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(r){!e&&!hn(r)&&!Dr(r)&&(r=Ie(r));const i=Ie(this);return Ji(i).has.call(i,r)||(i.add(r),es(i,"add",r,r)),this},set(r,i){!e&&!hn(i)&&!Dr(i)&&(i=Ie(i));const o=Ie(this),{has:a,get:c}=Ji(o);let l=a.call(o,r);l||(r=Ie(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Js(i,u)&&es(o,"set",r,i):es(o,"add",r,i),this},delete(r){const i=Ie(this),{has:o,get:a}=Ji(i);let c=o.call(i,r);c||(r=Ie(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&es(i,"delete",r,void 0),l},clear(){const r=Ie(this),i=r.size!==0,o=r.clear();return i&&es(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qb(r,t,e)}),n}function Au(t,e){const n=Kb(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Me(n,r)&&r in s?n:s,r,i)}const Wb={get:Au(!1,!1)},Gb={get:Au(!1,!0)},Hb={get:Au(!0,!1)};const Lf=new WeakMap,zf=new WeakMap,Pf=new WeakMap,Yb=new WeakMap;function Zb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qb(t){return t.__v_skip||!Object.isExtensible(t)?0:Zb(Mb(t))}function Nu(t){return Dr(t)?t:Tu(t,!1,$b,Wb,Lf)}function Xb(t){return Tu(t,!1,Fb,Gb,zf)}function Rf(t){return Tu(t,!0,Vb,Hb,Pf)}function Tu(t,e,n,s,r){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Qb(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Nr(t){return Dr(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function hn(t){return!!(t&&t.__v_isShallow)}function Ou(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Jb(t){return!Me(t,"__v_skip")&&Object.isExtensible(t)&&Sf(t,"__v_skip",!0),t}const xt=t=>ze(t)?Nu(t):t,Ac=t=>ze(t)?Rf(t):t;function gt(t){return t?t.__v_isRef===!0:!1}function e0(t){return gt(t)?t.value:t}const t0={get:(t,e,n)=>e==="__v_raw"?t:e0(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return gt(r)&&!gt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function $f(t){return Nr(t)?t:new Proxy(t,t0)}class n0{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_i-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Af(this,!0),!0}get value(){const e=this.dep.track();return Of(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function s0(t,e,n=!1){let s,r;return pe(t)?s=t:(s=t.get,r=t.set),new n0(s,r,n)}const to={},$o=new WeakMap;let Rs;function r0(t,e=!1,n=Rs){if(n){let s=$o.get(n);s||$o.set(n,s=[]),s.push(t)}}function i0(t,e,n=ke){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=j=>r?j:hn(j)||r===!1||r===0?Es(j,1):Es(j);let u,f,d,h,p=!1,b=!1;if(gt(t)?(f=()=>t.value,p=hn(t)):Nr(t)?(f=()=>l(t),p=!0):he(t)?(b=!0,p=t.some(j=>Nr(j)||hn(j)),f=()=>t.map(j=>{if(gt(j))return j.value;if(Nr(j))return l(j);if(pe(j))return c?c(j,2):j()})):pe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(d){Bs();try{d()}finally{Us()}}const j=Rs;Rs=u;try{return c?c(t,3,[h]):t(h)}finally{Rs=j}}:f=On,e&&r){const j=f,q=r===!0?1/0:r;f=()=>Es(j(),q)}const S=Cb(),x=()=>{u.stop(),S&&S.active&&Su(S.effects,u)};if(i&&e){const j=e;e=(...q)=>{j(...q),x()}}let B=b?new Array(t.length).fill(to):to;const T=j=>{if(!(!(u.flags&1)||!u.dirty&&!j))if(e){const q=u.run();if(r||p||(b?q.some((P,J)=>Js(P,B[J])):Js(q,B))){d&&d();const P=Rs;Rs=u;try{const J=[q,B===to?void 0:b&&B[0]===to?[]:B,h];c?c(e,3,J):e(...J),B=q}finally{Rs=P}}}else u.run()};return a&&a(T),u=new xf(f),u.scheduler=o?()=>o(T,!1):T,h=j=>r0(j,!1,u),d=u.onStop=()=>{const j=$o.get(u);if(j){if(c)c(j,4);else for(const q of j)q();$o.delete(u)}},e?s?T(!0):B=u.run():o?o(T.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function Es(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,gt(t))Es(t.value,e,n);else if(he(t))for(let s=0;s<t.length;s++)Es(t[s],e,n);else if(yf(t)||Ar(t))t.forEach(s=>{Es(s,e,n)});else if(vf(t)){for(const s in t)Es(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Es(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vi(t,e,n,s){try{return s?t(...s):t()}catch(r){ya(r,e,n)}}function Cn(t,e,n,s){if(pe(t)){const r=Vi(t,e,n,s);return r&&mf(r)&&r.catch(i=>{ya(i,e,n)}),r}if(he(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Cn(t[i],e,n,s));return r}}function ya(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Bs(),Vi(i,null,10,[t,c,l]),Us();return}}o0(t,n,r,s,o)}function o0(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const pt=[];let Sn=-1;const Tr=[];let ys=null,yr=0;const Vf=Promise.resolve();let Vo=null;function a0(t){const e=Vo||Vf;return t?e.then(this?t.bind(this):t):e}function c0(t){let e=Sn+1,n=pt.length;for(;e<n;){const s=e+n>>>1,r=pt[s],i=Ni(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function ku(t){if(!(t.flags&1)){const e=Ni(t),n=pt[pt.length-1];!n||!(t.flags&2)&&e>=Ni(n)?pt.push(t):pt.splice(c0(e),0,t),t.flags|=1,Ff()}}function Ff(){Vo||(Vo=Vf.then(Kf))}function u0(t){he(t)?Tr.push(...t):ys&&t.id===-1?ys.splice(yr+1,0,t):t.flags&1||(Tr.push(t),t.flags|=1),Ff()}function Bl(t,e,n=Sn+1){for(;n<pt.length;n++){const s=pt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;pt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function qf(t){if(Tr.length){const e=[...new Set(Tr)].sort((n,s)=>Ni(n)-Ni(s));if(Tr.length=0,ys){ys.push(...e);return}for(ys=e,yr=0;yr<ys.length;yr++){const n=ys[yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ys=null,yr=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kf(t){try{for(Sn=0;Sn<pt.length;Sn++){const e=pt[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<pt.length;Sn++){const e=pt[Sn];e&&(e.flags&=-2)}Sn=-1,pt.length=0,qf(),Vo=null,(pt.length||Tr.length)&&Kf()}}let ln=null,Wf=null;function Fo(t){const e=ln;return ln=t,Wf=t&&t.type.__scopeId||null,e}function l0(t,e=ln,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Hl(-1);const i=Fo(e);let o;try{o=t(...r)}finally{Fo(i),s._d&&Hl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ls(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Bs(),Cn(c,n,8,[t.el,a,t,e]),Us())}}const Gf=Symbol("_vte"),d0=t=>t.__isTeleport,pi=t=>t&&(t.disabled||t.disabled===""),Ul=t=>t&&(t.defer||t.defer===""),Ll=t=>typeof SVGElement<"u"&&t instanceof SVGElement,zl=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Nc=(t,e)=>{const n=t&&t.to;return qe(n)?e?e(n):null:n},Hf={name:"Teleport",__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:p,createText:b,createComment:S}}=l,x=pi(e.props);let{shapeFlag:B,children:T,dynamicChildren:j}=e;if(t==null){const q=e.el=b(""),P=e.anchor=b("");h(q,n,s),h(P,n,s);const J=(U,N)=>{B&16&&(r&&r.isCE&&(r.ce._teleportTarget=U),u(T,U,N,r,i,o,a,c))},X=()=>{const U=e.target=Nc(e.props,p),N=Yf(U,e,b,h);U&&(o!=="svg"&&Ll(U)?o="svg":o!=="mathml"&&zl(U)&&(o="mathml"),x||(J(U,N),Mo(e,!1)))};x&&(J(n,P),Mo(e,!0)),Ul(e.props)?ht(()=>{X(),e.el.__isMounted=!0},i):X()}else{if(Ul(e.props)&&!t.el.__isMounted){ht(()=>{Hf.process(t,e,n,s,r,i,o,a,c,l),delete t.el.__isMounted},i);return}e.el=t.el,e.targetStart=t.targetStart;const q=e.anchor=t.anchor,P=e.target=t.target,J=e.targetAnchor=t.targetAnchor,X=pi(t.props),U=X?n:P,N=X?q:J;if(o==="svg"||Ll(P)?o="svg":(o==="mathml"||zl(P))&&(o="mathml"),j?(d(t.dynamicChildren,j,U,r,i,o,a),Du(t,e,!0)):c||f(t,e,U,N,r,i,o,a,!1),x)X?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):no(e,n,q,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=Nc(e.props,p);A&&no(e,A,null,l,0)}else X&&no(e,P,J,l,1);Mo(e,x)}},remove(t,e,n,{um:s,o:{remove:r}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:f,props:d}=t;if(f&&(r(l),r(u)),i&&r(c),o&16){const h=i||!pi(d);for(let p=0;p<a.length;p++){const b=a[p];s(b,e,n,h,!!b.dynamicChildren)}}},move:no,hydrate:f0};function no(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&s(o,e,n),(!f||pi(u))&&c&16)for(let d=0;d<l.length;d++)r(l[d],e,n,2);f&&s(a,e,n)}function f0(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},f){const d=e.target=Nc(e.props,c);if(d){const h=pi(e.props),p=d._lpa||d.firstChild;if(e.shapeFlag&16)if(h)e.anchor=f(o(t),e,a(t),n,s,r,i),e.targetStart=p,e.targetAnchor=p&&o(p);else{e.anchor=o(t);let b=p;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}}b=o(b)}e.targetAnchor||Yf(d,e,u,l),f(p&&o(p),e,d,n,s,r,i)}Mo(e,h)}return e.anchor&&o(e.anchor)}const h0=Hf;function Mo(t,e){const n=t.ctx;if(n&&n.ut){let s,r;for(e?(s=t.el,r=t.anchor):(s=t.targetStart,r=t.targetAnchor);s&&s!==r;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function Yf(t,e,n,s){const r=e.targetStart=n(""),i=e.targetAnchor=n("");return r[Gf]=i,t&&(s(r,t),s(i,t)),i}function ju(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ju(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qo(t,e,n,s,r=!1){if(he(t)){t.forEach((p,b)=>qo(p,e&&(he(e)?e[b]:e),n,s,r));return}if(gi(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&qo(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Uu(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,f=a.setupState,d=Ie(f),h=f===ke?()=>!1:p=>Me(d,p);if(l!=null&&l!==c&&(qe(l)?(u[l]=null,h(l)&&(f[l]=null)):gt(l)&&(l.value=null)),pe(c))Vi(c,a,12,[o,u]);else{const p=qe(c),b=gt(c);if(p||b){const S=()=>{if(t.f){const x=p?h(c)?f[c]:u[c]:c.value;r?he(x)&&Su(x,i):he(x)?x.includes(i)||x.push(i):p?(u[c]=[i],h(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,h(c)&&(f[c]=o)):b&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,ht(S,n)):S()}}}ga().requestIdleCallback;ga().cancelIdleCallback;const gi=t=>!!t.type.__asyncLoader,Qf=t=>t.type.__isKeepAlive;function p0(t,e){Xf(t,"a",e)}function g0(t,e){Xf(t,"da",e)}function Xf(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ma(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Qf(r.parent.vnode)&&b0(s,e,n,r),r=r.parent}}function b0(t,e,n,s){const r=ma(e,t,s,!0);Jf(()=>{Su(s[e],r)},n)}function ma(t,e,n=ct,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bs();const a=Fi(n),c=Cn(e,n,t,o);return a(),Us(),c});return s?r.unshift(i):r.push(i),i}}const os=t=>(e,n=ct)=>{(!ki||t==="sp")&&ma(t,(...s)=>e(...s),n)},y0=os("bm"),m0=os("m"),w0=os("bu"),v0=os("u"),S0=os("bum"),Jf=os("um"),M0=os("sp"),E0=os("rtg"),I0=os("rtc");function x0(t,e=ct){ma("ec",t,e)}const _0="components";function Ti(t,e){return N0(_0,t,!0,e)||t}const A0=Symbol.for("v-ndc");function N0(t,e,n=!0,s=!1){const r=ln||ct;if(r){const i=r.type;{const a=by(i,!1);if(a&&(a===e||a===Zt(e)||a===pa(Zt(e))))return i}const o=Pl(r[t]||i[t],e)||Pl(r.appContext[t],e);return!o&&s?i:o}}function Pl(t,e){return t&&(t[e]||t[Zt(e)]||t[pa(Zt(e))])}function Tc(t,e,n,s){let r;const i=n,o=he(t);if(o||qe(t)){const a=o&&Nr(t);let c=!1;a&&(c=!hn(t),t=ba(t)),r=new Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=e(c?xt(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ze(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}const Oc=t=>t?vh(t)?Uu(t):Oc(t.parent):null,bi=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oc(t.parent),$root:t=>Oc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>th(t),$forceUpdate:t=>t.f||(t.f=()=>{ku(t.update)}),$nextTick:t=>t.n||(t.n=a0.bind(t.proxy)),$watch:t=>Z0.bind(t)}),Fa=(t,e)=>t!==ke&&!t.__isScriptSetup&&Me(t,e),T0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Fa(s,e))return o[e]=1,s[e];if(r!==ke&&Me(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Me(l,e))return o[e]=3,i[e];if(n!==ke&&Me(n,e))return o[e]=4,n[e];kc&&(o[e]=0)}}const u=bi[e];let f,d;if(u)return e==="$attrs"&&ot(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ke&&Me(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Me(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Fa(r,e)?(r[e]=n,!0):s!==ke&&Me(s,e)?(s[e]=n,!0):Me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&Me(t,o)||Fa(e,o)||(a=i[0])&&Me(a,o)||Me(s,o)||Me(bi,o)||Me(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rl(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kc=!0;function O0(t){const e=th(t),n=t.proxy,s=t.ctx;kc=!1,e.beforeCreate&&$l(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:p,activated:b,deactivated:S,beforeDestroy:x,beforeUnmount:B,destroyed:T,unmounted:j,render:q,renderTracked:P,renderTriggered:J,errorCaptured:X,serverPrefetch:U,expose:N,inheritAttrs:A,components:k,directives:M,filters:I}=e;if(l&&k0(l,s,null),o)for(const w in o){const _=o[w];pe(_)&&(s[w]=_.bind(n))}if(r){const w=r.call(n,n);ze(w)&&(t.data=Nu(w))}if(kc=!0,i)for(const w in i){const _=i[w],C=pe(_)?_.bind(n,n):pe(_.get)?_.get.bind(n,n):On,D=!pe(_)&&pe(_.set)?_.set.bind(n):On,z=my({get:C,set:D});Object.defineProperty(s,w,{enumerable:!0,configurable:!0,get:()=>z.value,set:F=>z.value=F})}if(a)for(const w in a)eh(a[w],s,n,w);if(c){const w=pe(c)?c.call(n):c;Reflect.ownKeys(w).forEach(_=>{L0(_,w[_])})}u&&$l(u,t,"c");function v(w,_){he(_)?_.forEach(C=>w(C.bind(n))):_&&w(_.bind(n))}if(v(y0,f),v(m0,d),v(w0,h),v(v0,p),v(p0,b),v(g0,S),v(x0,X),v(I0,P),v(E0,J),v(S0,B),v(Jf,j),v(M0,U),he(N))if(N.length){const w=t.exposed||(t.exposed={});N.forEach(_=>{Object.defineProperty(w,_,{get:()=>n[_],set:C=>n[_]=C})})}else t.exposed||(t.exposed={});q&&t.render===On&&(t.render=q),A!=null&&(t.inheritAttrs=A),k&&(t.components=k),M&&(t.directives=M),U&&Zf(t)}function k0(t,e,n=On){he(t)&&(t=jc(t));for(const s in t){const r=t[s];let i;ze(r)?"default"in r?i=Eo(r.from||s,r.default,!0):i=Eo(r.from||s):i=Eo(r),gt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function $l(t,e,n){Cn(he(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function eh(t,e,n,s){let r=s.includes(".")?ph(n,s):()=>n[s];if(qe(t)){const i=e[t];pe(i)&&Ka(r,i)}else if(pe(t))Ka(r,t.bind(n));else if(ze(t))if(he(t))t.forEach(i=>eh(i,e,n,s));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Ka(r,i,t)}}function th(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ko(c,l,o,!0)),Ko(c,e,o)),ze(e)&&i.set(e,c),c}function Ko(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ko(t,i,n,!0),r&&r.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=j0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const j0={data:Vl,props:Fl,emits:Fl,methods:ri,computed:ri,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:ri,directives:ri,watch:D0,provide:Vl,inject:C0};function Vl(t,e){return e?t?function(){return mt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function C0(t,e){return ri(jc(t),jc(e))}function jc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function ri(t,e){return t?mt(Object.create(null),t,e):e}function Fl(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:mt(Object.create(null),Rl(t),Rl(e??{})):e}function D0(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const s in e)n[s]=lt(t[s],e[s]);return n}function nh(){return{app:null,config:{isNativeTag:vb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B0=0;function U0(t,e){return function(s,r=null){pe(s)||(s=mt({},s)),r!=null&&!ze(r)&&(r=null);const i=nh(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:B0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:wy,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&pe(u.install)?(o.add(u),u.install(l,...f)):pe(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const h=l._ceVNode||bt(s,r);return h.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),c=!0,l._container=u,u.__vue_app__=l,Uu(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Cn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Or;Or=l;try{return u()}finally{Or=f}}};return l}}let Or=null;function L0(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function Eo(t,e,n=!1){const s=ct||ln;if(s||Or){const r=Or?Or._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}const sh={},rh=()=>Object.create(sh),ih=t=>Object.getPrototypeOf(t)===sh;function z0(t,e,n,s=!1){const r={},i=rh();t.propsDefaults=Object.create(null),oh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Xb(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function P0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(wa(t.emitsOptions,d))continue;const h=e[d];if(c)if(Me(i,d))h!==i[d]&&(i[d]=h,l=!0);else{const p=Zt(d);r[p]=Cc(c,a,p,h,t,!1)}else h!==i[d]&&(i[d]=h,l=!0)}}}else{oh(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Me(e,f)&&((u=ur(f))===f||!Me(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Cc(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Me(e,f))&&(delete i[f],l=!0)}l&&es(t.attrs,"set","")}function oh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(di(c))continue;const l=e[c];let u;r&&Me(r,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:wa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Ie(n),l=a||ke;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Cc(r,c,f,l[f],t,!Me(l,f))}}return o}function Cc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Me(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=Fi(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ur(n))&&(s=!0))}return s}const R0=new WeakMap;function ah(t,e,n=!1){const s=n?R0:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const u=f=>{c=!0;const[d,h]=ah(f,e,!0);mt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ze(t)&&s.set(t,_r),_r;if(he(i))for(let u=0;u<i.length;u++){const f=Zt(i[u]);ql(f)&&(o[f]=ke)}else if(i)for(const u in i){const f=Zt(u);if(ql(f)){const d=i[u],h=o[f]=he(d)||pe(d)?{type:d}:mt({},d),p=h.type;let b=!1,S=!0;if(he(p))for(let x=0;x<p.length;++x){const B=p[x],T=pe(B)&&B.name;if(T==="Boolean"){b=!0;break}else T==="String"&&(S=!1)}else b=pe(p)&&p.name==="Boolean";h[0]=b,h[1]=S,(b||Me(h,"default"))&&a.push(f)}}const l=[o,a];return ze(t)&&s.set(t,l),l}function ql(t){return t[0]!=="$"&&!di(t)}const ch=t=>t[0]==="_"||t==="$stable",Cu=t=>he(t)?t.map(xn):[xn(t)],$0=(t,e,n)=>{if(e._n)return e;const s=l0((...r)=>Cu(e(...r)),n);return s._c=!1,s},uh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ch(r))continue;const i=t[r];if(pe(i))e[r]=$0(r,i,s);else if(i!=null){const o=Cu(i);e[r]=()=>o}}},lh=(t,e)=>{const n=Cu(e);t.slots.default=()=>n},dh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},V0=(t,e,n)=>{const s=t.slots=rh();if(t.vnode.shapeFlag&32){const r=e._;r?(dh(s,e,n),n&&Sf(s,"_",r,!0)):uh(e,s)}else e&&lh(t,e)},F0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:dh(r,e,n):(i=!e.$stable,uh(e,r)),o=e}else e&&(lh(t,e),o={default:1});if(i)for(const a in r)!ch(a)&&o[a]==null&&delete r[a]},ht=sy;function q0(t){return K0(t)}function K0(t,e){const n=ga();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=On,insertStaticContent:p}=t,b=(y,m,O,R=null,L=null,$=null,H=void 0,G=null,W=!!m.dynamicChildren)=>{if(y===m)return;y&&!Xr(y,m)&&(R=fe(y),F(y,L,$,!0),y=null),m.patchFlag===-2&&(W=!1,m.dynamicChildren=null);const{type:V,ref:oe,shapeFlag:Z}=m;switch(V){case va:S(y,m,O,R);break;case sr:x(y,m,O,R);break;case Io:y==null&&B(m,O,R,H);break;case _t:k(y,m,O,R,L,$,H,G,W);break;default:Z&1?q(y,m,O,R,L,$,H,G,W):Z&6?M(y,m,O,R,L,$,H,G,W):(Z&64||Z&128)&&V.process(y,m,O,R,L,$,H,G,W,Se)}oe!=null&&L&&qo(oe,y&&y.ref,$,m||y,!m)},S=(y,m,O,R)=>{if(y==null)s(m.el=a(m.children),O,R);else{const L=m.el=y.el;m.children!==y.children&&l(L,m.children)}},x=(y,m,O,R)=>{y==null?s(m.el=c(m.children||""),O,R):m.el=y.el},B=(y,m,O,R)=>{[y.el,y.anchor]=p(y.children,m,O,R,y.el,y.anchor)},T=({el:y,anchor:m},O,R)=>{let L;for(;y&&y!==m;)L=d(y),s(y,O,R),y=L;s(m,O,R)},j=({el:y,anchor:m})=>{let O;for(;y&&y!==m;)O=d(y),r(y),y=O;r(m)},q=(y,m,O,R,L,$,H,G,W)=>{m.type==="svg"?H="svg":m.type==="math"&&(H="mathml"),y==null?P(m,O,R,L,$,H,G,W):U(y,m,L,$,H,G,W)},P=(y,m,O,R,L,$,H,G)=>{let W,V;const{props:oe,shapeFlag:Z,transition:re,dirs:le}=y;if(W=y.el=o(y.type,$,oe&&oe.is,oe),Z&8?u(W,y.children):Z&16&&X(y.children,W,null,R,L,qa(y,$),H,G),le&&Ls(y,null,R,"created"),J(W,y,y.scopeId,H,R),oe){for(const Ne in oe)Ne!=="value"&&!di(Ne)&&i(W,Ne,null,oe[Ne],$,R);"value"in oe&&i(W,"value",null,oe.value,$),(V=oe.onVnodeBeforeMount)&&yn(V,R,y)}le&&Ls(y,null,R,"beforeMount");const ye=W0(L,re);ye&&re.beforeEnter(W),s(W,m,O),((V=oe&&oe.onVnodeMounted)||ye||le)&&ht(()=>{V&&yn(V,R,y),ye&&re.enter(W),le&&Ls(y,null,R,"mounted")},L)},J=(y,m,O,R,L)=>{if(O&&h(y,O),R)for(let $=0;$<R.length;$++)h(y,R[$]);if(L){let $=L.subTree;if(m===$||bh($.type)&&($.ssContent===m||$.ssFallback===m)){const H=L.vnode;J(y,H,H.scopeId,H.slotScopeIds,L.parent)}}},X=(y,m,O,R,L,$,H,G,W=0)=>{for(let V=W;V<y.length;V++){const oe=y[V]=G?ms(y[V]):xn(y[V]);b(null,oe,m,O,R,L,$,H,G)}},U=(y,m,O,R,L,$,H)=>{const G=m.el=y.el;let{patchFlag:W,dynamicChildren:V,dirs:oe}=m;W|=y.patchFlag&16;const Z=y.props||ke,re=m.props||ke;let le;if(O&&zs(O,!1),(le=re.onVnodeBeforeUpdate)&&yn(le,O,m,y),oe&&Ls(m,y,O,"beforeUpdate"),O&&zs(O,!0),(Z.innerHTML&&re.innerHTML==null||Z.textContent&&re.textContent==null)&&u(G,""),V?N(y.dynamicChildren,V,G,O,R,qa(m,L),$):H||_(y,m,G,null,O,R,qa(m,L),$,!1),W>0){if(W&16)A(G,Z,re,O,L);else if(W&2&&Z.class!==re.class&&i(G,"class",null,re.class,L),W&4&&i(G,"style",Z.style,re.style,L),W&8){const ye=m.dynamicProps;for(let Ne=0;Ne<ye.length;Ne++){const Ee=ye[Ne],Bt=Z[Ee],wt=re[Ee];(wt!==Bt||Ee==="value")&&i(G,Ee,Bt,wt,L,O)}}W&1&&y.children!==m.children&&u(G,m.children)}else!H&&V==null&&A(G,Z,re,O,L);((le=re.onVnodeUpdated)||oe)&&ht(()=>{le&&yn(le,O,m,y),oe&&Ls(m,y,O,"updated")},R)},N=(y,m,O,R,L,$,H)=>{for(let G=0;G<m.length;G++){const W=y[G],V=m[G],oe=W.el&&(W.type===_t||!Xr(W,V)||W.shapeFlag&70)?f(W.el):O;b(W,V,oe,null,R,L,$,H,!0)}},A=(y,m,O,R,L)=>{if(m!==O){if(m!==ke)for(const $ in m)!di($)&&!($ in O)&&i(y,$,m[$],null,L,R);for(const $ in O){if(di($))continue;const H=O[$],G=m[$];H!==G&&$!=="value"&&i(y,$,G,H,L,R)}"value"in O&&i(y,"value",m.value,O.value,L)}},k=(y,m,O,R,L,$,H,G,W)=>{const V=m.el=y?y.el:a(""),oe=m.anchor=y?y.anchor:a("");let{patchFlag:Z,dynamicChildren:re,slotScopeIds:le}=m;le&&(G=G?G.concat(le):le),y==null?(s(V,O,R),s(oe,O,R),X(m.children||[],O,oe,L,$,H,G,W)):Z>0&&Z&64&&re&&y.dynamicChildren?(N(y.dynamicChildren,re,O,L,$,H,G),(m.key!=null||L&&m===L.subTree)&&Du(y,m,!0)):_(y,m,O,oe,L,$,H,G,W)},M=(y,m,O,R,L,$,H,G,W)=>{m.slotScopeIds=G,y==null?m.shapeFlag&512?L.ctx.activate(m,O,R,H,W):I(m,O,R,L,$,H,W):E(y,m,W)},I=(y,m,O,R,L,$,H)=>{const G=y.component=dy(y,R,L);if(Qf(y)&&(G.ctx.renderer=Se),fy(G,!1,H),G.asyncDep){if(L&&L.registerDep(G,v,H),!y.el){const W=G.subTree=bt(sr);x(null,W,m,O)}}else v(G,y,m,O,L,$,H)},E=(y,m,O)=>{const R=m.component=y.component;if(ty(y,m,O))if(R.asyncDep&&!R.asyncResolved){w(R,m,O);return}else R.next=m,R.update();else m.el=y.el,R.vnode=m},v=(y,m,O,R,L,$,H)=>{const G=()=>{if(y.isMounted){let{next:Z,bu:re,u:le,parent:ye,vnode:Ne}=y;{const gn=fh(y);if(gn){Z&&(Z.el=Ne.el,w(y,Z,H)),gn.asyncDep.then(()=>{y.isUnmounted||G()});return}}let Ee=Z,Bt;zs(y,!1),Z?(Z.el=Ne.el,w(y,Z,H)):Z=Ne,re&&za(re),(Bt=Z.props&&Z.props.onVnodeBeforeUpdate)&&yn(Bt,ye,Z,Ne),zs(y,!0);const wt=Wl(y),pn=y.subTree;y.subTree=wt,b(pn,wt,f(pn.el),fe(pn),y,L,$),Z.el=wt.el,Ee===null&&ny(y,wt.el),le&&ht(le,L),(Bt=Z.props&&Z.props.onVnodeUpdated)&&ht(()=>yn(Bt,ye,Z,Ne),L)}else{let Z;const{el:re,props:le}=m,{bm:ye,m:Ne,parent:Ee,root:Bt,type:wt}=y,pn=gi(m);zs(y,!1),ye&&za(ye),!pn&&(Z=le&&le.onVnodeBeforeMount)&&yn(Z,Ee,m),zs(y,!0);{Bt.ce&&Bt.ce._injectChildStyle(wt);const gn=y.subTree=Wl(y);b(null,gn,O,R,y,L,$),m.el=gn.el}if(Ne&&ht(Ne,L),!pn&&(Z=le&&le.onVnodeMounted)){const gn=m;ht(()=>yn(Z,Ee,gn),L)}(m.shapeFlag&256||Ee&&gi(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&ht(y.a,L),y.isMounted=!0,m=O=R=null}};y.scope.on();const W=y.effect=new xf(G);y.scope.off();const V=y.update=W.run.bind(W),oe=y.job=W.runIfDirty.bind(W);oe.i=y,oe.id=y.uid,W.scheduler=()=>ku(oe),zs(y,!0),V()},w=(y,m,O)=>{m.component=y;const R=y.vnode.props;y.vnode=m,y.next=null,P0(y,m.props,R,O),F0(y,m.children,O),Bs(),Bl(y),Us()},_=(y,m,O,R,L,$,H,G,W=!1)=>{const V=y&&y.children,oe=y?y.shapeFlag:0,Z=m.children,{patchFlag:re,shapeFlag:le}=m;if(re>0){if(re&128){D(V,Z,O,R,L,$,H,G,W);return}else if(re&256){C(V,Z,O,R,L,$,H,G,W);return}}le&8?(oe&16&&te(V,L,$),Z!==V&&u(O,Z)):oe&16?le&16?D(V,Z,O,R,L,$,H,G,W):te(V,L,$,!0):(oe&8&&u(O,""),le&16&&X(Z,O,R,L,$,H,G,W))},C=(y,m,O,R,L,$,H,G,W)=>{y=y||_r,m=m||_r;const V=y.length,oe=m.length,Z=Math.min(V,oe);let re;for(re=0;re<Z;re++){const le=m[re]=W?ms(m[re]):xn(m[re]);b(y[re],le,O,null,L,$,H,G,W)}V>oe?te(y,L,$,!0,!1,Z):X(m,O,R,L,$,H,G,W,Z)},D=(y,m,O,R,L,$,H,G,W)=>{let V=0;const oe=m.length;let Z=y.length-1,re=oe-1;for(;V<=Z&&V<=re;){const le=y[V],ye=m[V]=W?ms(m[V]):xn(m[V]);if(Xr(le,ye))b(le,ye,O,null,L,$,H,G,W);else break;V++}for(;V<=Z&&V<=re;){const le=y[Z],ye=m[re]=W?ms(m[re]):xn(m[re]);if(Xr(le,ye))b(le,ye,O,null,L,$,H,G,W);else break;Z--,re--}if(V>Z){if(V<=re){const le=re+1,ye=le<oe?m[le].el:R;for(;V<=re;)b(null,m[V]=W?ms(m[V]):xn(m[V]),O,ye,L,$,H,G,W),V++}}else if(V>re)for(;V<=Z;)F(y[V],L,$,!0),V++;else{const le=V,ye=V,Ne=new Map;for(V=ye;V<=re;V++){const Ut=m[V]=W?ms(m[V]):xn(m[V]);Ut.key!=null&&Ne.set(Ut.key,V)}let Ee,Bt=0;const wt=re-ye+1;let pn=!1,gn=0;const Yr=new Array(wt);for(V=0;V<wt;V++)Yr[V]=0;for(V=le;V<=Z;V++){const Ut=y[V];if(Bt>=wt){F(Ut,L,$,!0);continue}let bn;if(Ut.key!=null)bn=Ne.get(Ut.key);else for(Ee=ye;Ee<=re;Ee++)if(Yr[Ee-ye]===0&&Xr(Ut,m[Ee])){bn=Ee;break}bn===void 0?F(Ut,L,$,!0):(Yr[bn-ye]=V+1,bn>=gn?gn=bn:pn=!0,b(Ut,m[bn],O,null,L,$,H,G,W),Bt++)}const xl=pn?G0(Yr):_r;for(Ee=xl.length-1,V=wt-1;V>=0;V--){const Ut=ye+V,bn=m[Ut],_l=Ut+1<oe?m[Ut+1].el:R;Yr[V]===0?b(null,bn,O,_l,L,$,H,G,W):pn&&(Ee<0||V!==xl[Ee]?z(bn,O,_l,2):Ee--)}}},z=(y,m,O,R,L=null)=>{const{el:$,type:H,transition:G,children:W,shapeFlag:V}=y;if(V&6){z(y.component.subTree,m,O,R);return}if(V&128){y.suspense.move(m,O,R);return}if(V&64){H.move(y,m,O,Se);return}if(H===_t){s($,m,O);for(let Z=0;Z<W.length;Z++)z(W[Z],m,O,R);s(y.anchor,m,O);return}if(H===Io){T(y,m,O);return}if(R!==2&&V&1&&G)if(R===0)G.beforeEnter($),s($,m,O),ht(()=>G.enter($),L);else{const{leave:Z,delayLeave:re,afterLeave:le}=G,ye=()=>s($,m,O),Ne=()=>{Z($,()=>{ye(),le&&le()})};re?re($,ye,Ne):Ne()}else s($,m,O)},F=(y,m,O,R=!1,L=!1)=>{const{type:$,props:H,ref:G,children:W,dynamicChildren:V,shapeFlag:oe,patchFlag:Z,dirs:re,cacheIndex:le}=y;if(Z===-2&&(L=!1),G!=null&&qo(G,null,O,y,!0),le!=null&&(m.renderCache[le]=void 0),oe&256){m.ctx.deactivate(y);return}const ye=oe&1&&re,Ne=!gi(y);let Ee;if(Ne&&(Ee=H&&H.onVnodeBeforeUnmount)&&yn(Ee,m,y),oe&6)ce(y.component,O,R);else{if(oe&128){y.suspense.unmount(O,R);return}ye&&Ls(y,null,m,"beforeUnmount"),oe&64?y.type.remove(y,m,O,Se,R):V&&!V.hasOnce&&($!==_t||Z>0&&Z&64)?te(V,m,O,!1,!0):($===_t&&Z&384||!L&&oe&16)&&te(W,m,O),R&&ae(y)}(Ne&&(Ee=H&&H.onVnodeUnmounted)||ye)&&ht(()=>{Ee&&yn(Ee,m,y),ye&&Ls(y,null,m,"unmounted")},O)},ae=y=>{const{type:m,el:O,anchor:R,transition:L}=y;if(m===_t){ne(O,R);return}if(m===Io){j(y);return}const $=()=>{r(O),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:H,delayLeave:G}=L,W=()=>H(O,$);G?G(y.el,$,W):W()}else $()},ne=(y,m)=>{let O;for(;y!==m;)O=d(y),r(y),y=O;r(m)},ce=(y,m,O)=>{const{bum:R,scope:L,job:$,subTree:H,um:G,m:W,a:V}=y;Kl(W),Kl(V),R&&za(R),L.stop(),$&&($.flags|=8,F(H,y,m,O)),G&&ht(G,m),ht(()=>{y.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},te=(y,m,O,R=!1,L=!1,$=0)=>{for(let H=$;H<y.length;H++)F(y[H],m,O,R,L)},fe=y=>{if(y.shapeFlag&6)return fe(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const m=d(y.anchor||y.el),O=m&&m[Gf];return O?d(O):m};let me=!1;const be=(y,m,O)=>{y==null?m._vnode&&F(m._vnode,null,null,!0):b(m._vnode||null,y,m,null,null,null,O),m._vnode=y,me||(me=!0,Bl(),qf(),me=!1)},Se={p:b,um:F,m:z,r:ae,mt:I,mc:X,pc:_,pbc:N,n:fe,o:t};return{render:be,hydrate:void 0,createApp:U0(be)}}function qa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function W0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Du(t,e,n=!1){const s=t.children,r=e.children;if(he(s)&&he(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ms(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Du(o,a)),a.type===va&&(a.el=o.el)}}function G0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function fh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fh(e)}function Kl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const H0=Symbol.for("v-scx"),Y0=()=>Eo(H0);function Ka(t,e,n){return hh(t,e,n)}function hh(t,e,n=ke){const{immediate:s,deep:r,flush:i,once:o}=n,a=mt({},n),c=e&&s||!e&&i!=="post";let l;if(ki){if(i==="sync"){const h=Y0();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=On,h.resume=On,h.pause=On,h}}const u=ct;a.call=(h,p,b)=>Cn(h,u,p,b);let f=!1;i==="post"?a.scheduler=h=>{ht(h,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(h,p)=>{p?h():ku(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=i0(t,e,a);return ki&&(l?l.push(d):c&&d()),d}function Z0(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?ph(s,t):()=>s[t]:t.bind(s,s);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Fi(this),a=hh(r,i.bind(s),n);return o(),a}function ph(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Q0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${ur(e)}Modifiers`];function X0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let r=n;const i=e.startsWith("update:"),o=i&&Q0(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>qe(u)?u.trim():u)),o.number&&(r=n.map(xb)));let a,c=s[a=La(e)]||s[a=La(Zt(e))];!c&&i&&(c=s[a=La(ur(e))]),c&&Cn(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Cn(l,t,6,r)}}function gh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=l=>{const u=gh(l,e,!0);u&&(a=!0,mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ze(t)&&s.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):mt(o,i),ze(t)&&s.set(t,o),o)}function wa(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),Me(t,e[0].toLowerCase()+e.slice(1))||Me(t,ur(e))||Me(t,e))}function Wl(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:h,ctx:p,inheritAttrs:b}=t,S=Fo(t);let x,B;try{if(n.shapeFlag&4){const j=r||s,q=j;x=xn(l.call(q,j,u,f,h,d,p)),B=a}else{const j=e;x=xn(j.length>1?j(f,{attrs:a,slots:o,emit:c}):j(f,null)),B=e.props?a:J0(a)}}catch(j){yi.length=0,ya(j,t,1),x=bt(sr)}let T=x;if(B&&b!==!1){const j=Object.keys(B),{shapeFlag:q}=T;j.length&&q&7&&(i&&j.some(vu)&&(B=ey(B,i)),T=Br(T,B,!1,!0))}return n.dirs&&(T=Br(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&ju(T,n.transition),x=T,Fo(S),x}const J0=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},ey=(t,e)=>{const n={};for(const s in t)(!vu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ty(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Gl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!wa(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gl(s,o,l):!0:!!o;return!1}function Gl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!wa(n,i))return!0}return!1}function ny({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const bh=t=>t.__isSuspense;function sy(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):u0(t)}const _t=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),yi=[];let Ft=null;function Oe(t=!1){yi.push(Ft=t?null:[])}function ry(){yi.pop(),Ft=yi[yi.length-1]||null}let Oi=1;function Hl(t,e=!1){Oi+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function yh(t){return t.dynamicChildren=Oi>0?Ft||_r:null,ry(),Oi>0&&Ft&&Ft.push(t),t}function Be(t,e,n,s,r,i){return yh(ee(t,e,n,s,r,i,!0))}function Dc(t,e,n,s,r){return yh(bt(t,e,n,s,r,!0))}function mh(t){return t?t.__v_isVNode===!0:!1}function Xr(t,e){return t.type===e.type&&t.key===e.key}const wh=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||gt(t)||pe(t)?{i:ln,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,s=0,r=null,i=t===_t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wh(e),ref:e&&xo(e),scopeId:Wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return a?(Bu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Oi>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const bt=iy;function iy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===A0)&&(t=sr),mh(t)){const a=Br(t,e,!0);return n&&Bu(a,n),Oi>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag=-2,a}if(yy(t)&&(t=t.__vccOpts),e){e=oy(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=xi(a)),ze(c)&&(Ou(c)&&!he(c)&&(c=mt({},c)),e.style=Eu(c))}const o=qe(t)?1:bh(t)?128:d0(t)?64:ze(t)?4:pe(t)?2:0;return ee(t,e,n,s,r,o,i,!0)}function oy(t){return t?Ou(t)||ih(t)?mt({},t):t:null}function Br(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?cy(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&wh(l),ref:e&&e.ref?n&&i?he(i)?i.concat(xo(e)):[i,xo(e)]:xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Br(t.ssContent),ssFallback:t.ssFallback&&Br(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ju(u,c.clone(u)),u}function mr(t=" ",e=0){return bt(va,null,t,e)}function ay(t,e){const n=bt(Io,null,t);return n.staticCount=e,n}function It(t="",e=!1){return e?(Oe(),Dc(sr,null,t)):bt(sr,null,t)}function xn(t){return t==null||typeof t=="boolean"?bt(sr):he(t)?bt(_t,null,t.slice()):mh(t)?ms(t):bt(va,null,String(t))}function ms(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Br(t)}function Bu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Bu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ih(e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ln},n=32):(e=String(e),s&64?(n=16,e=[mr(e)]):n=8);t.children=e,t.shapeFlag|=n}function cy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=xi([e.class,s.class]));else if(r==="style")e.style=Eu([e.style,s.style]);else if(da(r)){const i=e[r],o=s[r];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function yn(t,e,n,s=null){Cn(t,e,7,[n,s])}const uy=nh();let ly=0;function dy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||uy,i={uid:ly++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ah(s,r),emitsOptions:gh(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=X0.bind(null,i),t.ce&&t.ce(i),i}let ct=null,Wo,Bc;{const t=ga(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Wo=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Bc=e("__VUE_SSR_SETTERS__",n=>ki=n)}const Fi=t=>{const e=ct;return Wo(t),t.scope.on(),()=>{t.scope.off(),Wo(e)}},Yl=()=>{ct&&ct.scope.off(),Wo(null)};function vh(t){return t.vnode.shapeFlag&4}let ki=!1;function fy(t,e=!1,n=!1){e&&Bc(e);const{props:s,children:r}=t.vnode,i=vh(t);z0(t,s,i,e),V0(t,r,n);const o=i?hy(t,e):void 0;return e&&Bc(!1),o}function hy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,T0);const{setup:s}=n;if(s){Bs();const r=t.setupContext=s.length>1?gy(t):null,i=Fi(t),o=Vi(s,t,0,[t.props,r]),a=mf(o);if(Us(),i(),(a||t.sp)&&!gi(t)&&Zf(t),a){if(o.then(Yl,Yl),e)return o.then(c=>{Zl(t,c)}).catch(c=>{ya(c,t,0)});t.asyncDep=o}else Zl(t,o)}else Sh(t)}function Zl(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=$f(e)),Sh(t)}function Sh(t,e,n){const s=t.type;t.render||(t.render=s.render||On);{const r=Fi(t);Bs();try{O0(t)}finally{Us(),r()}}}const py={get(t,e){return ot(t,"get",""),t[e]}};function gy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,py),slots:t.slots,emit:t.emit,expose:e}}function Uu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($f(Jb(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bi)return bi[n](t)},has(e,n){return n in e||n in bi}})):t.proxy}function by(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function yy(t){return pe(t)&&"__vccOpts"in t}const my=(t,e)=>s0(t,e,ki),wy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Uc;const Ql=typeof window<"u"&&window.trustedTypes;if(Ql)try{Uc=Ql.createPolicy("vue",{createHTML:t=>t})}catch{}const Mh=Uc?t=>Uc.createHTML(t):t=>t,vy="http://www.w3.org/2000/svg",Sy="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,Xl=Hn&&Hn.createElement("template"),My={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Hn.createElementNS(vy,t):e==="mathml"?Hn.createElementNS(Sy,t):n?Hn.createElement(t,{is:n}):Hn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Xl.innerHTML=Mh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Xl.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ey=Symbol("_vtc");function Iy(t,e,n){const s=t[Ey];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jl=Symbol("_vod"),xy=Symbol("_vsh"),_y=Symbol(""),Ay=/(^|;)\s*display\s*:/;function Ny(t,e,n){const s=t.style,r=qe(n);let i=!1;if(n&&!r){if(e)if(qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&_o(s,a,"")}else for(const o in e)n[o]==null&&_o(s,o,"");for(const o in n)o==="display"&&(i=!0),_o(s,o,n[o])}else if(r){if(e!==n){const o=s[_y];o&&(n+=";"+o),s.cssText=n,i=Ay.test(n)}}else e&&t.removeAttribute("style");Jl in t&&(t[Jl]=i?s.display:"",t[xy]&&(s.display="none"))}const ed=/\s*!important$/;function _o(t,e,n){if(he(n))n.forEach(s=>_o(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ty(t,e);ed.test(n)?t.setProperty(ur(s),n.replace(ed,""),"important"):t[s]=n}}const td=["Webkit","Moz","ms"],Wa={};function Ty(t,e){const n=Wa[e];if(n)return n;let s=Zt(e);if(s!=="filter"&&s in t)return Wa[e]=s;s=pa(s);for(let r=0;r<td.length;r++){const i=td[r]+s;if(i in t)return Wa[e]=i}return e}const nd="http://www.w3.org/1999/xlink";function sd(t,e,n,s,r,i=kb(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nd,e.slice(6,e.length)):t.setAttributeNS(nd,e,n):n==null||i&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ds(n)?String(n):n)}function rd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mh(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Mf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Oy(t,e,n,s){t.addEventListener(e,n,s)}function ky(t,e,n,s){t.removeEventListener(e,n,s)}const id=Symbol("_vei");function jy(t,e,n,s,r=null){const i=t[id]||(t[id]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Cy(e);if(s){const l=i[e]=Uy(s,r);Oy(t,a,l,c)}else o&&(ky(t,a,o,c),i[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function Cy(t){let e;if(od.test(t)){e={};let s;for(;s=t.match(od);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ur(t.slice(2)),e]}let Ga=0;const Dy=Promise.resolve(),By=()=>Ga||(Dy.then(()=>Ga=0),Ga=Date.now());function Uy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Cn(Ly(s,n.value),e,5,[s])};return n.value=t,n.attached=By(),n}function Ly(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zy=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Iy(t,s,o):e==="style"?Ny(t,n,s):da(e)?vu(e)||jy(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Py(t,e,s,o))?(rd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(s))?rd(t,Zt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sd(t,e,s,o))};function Py(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ad(e)&&qe(n)?!1:e in t}const Ry=mt({patchProp:zy},My);let cd;function $y(){return cd||(cd=q0(Ry))}const Vy=(...t)=>{const e=$y().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=qy(s);if(!r)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Fy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Fy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qy(t){return qe(t)?document.querySelector(t):t}var $i;class Ky extends Event{constructor(n,s){super(n,s);Ol(this,$i);kl(this,$i,(s==null?void 0:s.detail)??null)}get detail(){return Tl(this,$i)}}$i=new WeakMap;class Bn extends EventTarget{constructor(e={}){super(),this._debug=!!e.debug}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}emit(e,n,s=!1){try{n&&n.isSuiEvent&&!s?this.dispatchEvent(n):this.dispatchEvent(new Ky(e,{detail:n}))}catch(r){console.error(r)}}}var Wy={};class Gy extends Error{}const so=async t=>{try{return await import(t)}catch{throw new Gy(`Unable to import module ${t}`)}},Jr=async t=>{try{if(t=="execSync"||t=="spawn"){const{default:e}=await so("child_process");return e[t]}if(t=="fs"){const{default:e}=await so("fs");return e}if(t=="path"){const{default:e}=await so("path");return e}if(t=="net"){const{default:e}=await so("net");return e}}catch{return null}};class Ha{static async isPortThere(e){const n=await Jr("net");if(!n)return!1;const s=n.Socket,r=new s;let i=null;const o=new Promise(c=>{i=c});setTimeout(()=>{r.destroy(),i(!1)},3e3),r.on("connect",()=>{i(!0)}),r.on("error",()=>{i(!1)}),r.on("timeout",()=>{i(!1)}),r.connect(e,"0.0.0.0");const a=await o;return r.destroy(),a}static async spawn(e,n=[],s={}){const r=await Jr("spawn");if(!r)throw new Error("can not spawn a proccess in this env");return await new Promise((i,o)=>{let a=!0,c=null;const l=r(e,n,{env:{...Wy,...s}});l.on("error",function(u){a=!1,c=u}),setTimeout(()=>{a?i(l):o(c)},100)})}static async exec(e){const n=await Jr("execSync");if(!n)throw new Error("can not exec a proccess in this env");return n(e,{encoding:"utf-8"})}static async getModulesNamesFromPackagePath(e){const n=await Jr("path"),s=await Jr("fs");if(!n||!s)throw new Error("can not access path in this env");try{const i=(await s.promises.readdir(e.join(this._path,"build")))[0];return(await s.promises.readdir(n.join(this._path,"build",i,"bytecode_modules"),{withFileTypes:!0})).filter(c=>c.isFile()).map(c=>c.name.split(".mv").join(""))}catch{throw new Error("can not get modules names from local package path")}}}class Lu extends Event{constructor(e={}){const n=e.data?(""+e.data.type).split("<")[0].split("::").pop():null;if(super(n,{}),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._data=e.data||{},this.detail=this}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}get isSuiEvent(){return!0}get typeName(){return this._data?(""+this._data.type).split("<")[0].split("::").pop():null}get type(){return this._data?""+this._data.type:null}get data(){return this._data}get parsedJson(){return this._data.parsedJson?this._data.parsedJson:null}get timestampMs(){return this._data.timestampMs?parseInt(this._data.timestampMs,10):null}}class Eh extends Bn{constructor(e={}){if(super(e),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried");this._data=e.data||{},this._results=null,this._events=null}get executedEpoch(){return this._data&&this._data.effects&&this._data.effects.executedEpoch?BigInt(this._data.effects.executedEpoch):null}get digest(){return this._data?this._data.digest:null}get gasUsed(){try{if(this._data&&this._data.effects&&this._data.effects.gasUsed)return BigInt(this._data.effects.gasUsed.computationCost)+BigInt(this._data.effects.gasUsed.storageCost)-BigInt(this._data.effects.gasUsed.storageRebate)}catch{return null}return null}get deleted(){return this.results.deleted}get mutated(){return this.results.mutated}get created(){return this.results.created}get data(){return this._data}get status(){let e=null;return this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&(e=this.data.effects.status.status),e}isSuccessful(){return!!(this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&this.data.effects.status.status=="success")}get events(){if(this._events)return this._events;const e=[];if(this.data.events&&this.data.events.length)for(const n of this.data.events){const s=new this._suiMaster.SuiEvent({suiMaster:this._suiMaster,debug:this._debug,data:n});e.push(s)}return this._events=e,this._events}get results(){if(this._results)return this._results;const e={},n=[],s=[],r=[];if(this.data.objectChanges){for(const i of this.data.objectChanges)if(i.objectId&&!e[i.objectId]){const o=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i});o.address&&(e[o.address]=o)}}if(this.data.effects){const i=["created","mutated"];for(const o of i)if(this.data.effects[o]&&this.data.effects[o].length)for(const a of this.data.effects[o])a.reference&&a.reference.objectId&&e[a.reference.objectId]&&(o==="created"?n.push(e[a.reference.objectId]):o==="mutated"&&s.push(e[a.reference.objectId]));if(this.data.effects.deleted){for(const o of this.data.effects.deleted)if(o.objectId){if(!e[o.objectId]){const a=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:o});e[o.objectId]=a}e[o.objectId].markAsDeleted(),r.push(e[o.objectId])}}}return this._results={created:n,mutated:s,deleted:r,objects:Object.values(e),status:this.status},this._results}get timestampMs(){return this.data.timestampMs?parseInt(""+this.data.timestampMs,10):null}}class As extends Bn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPaginatedResponse");this._method=e.method,this._params=e.params,this._order=e.order||"descending",this._hasNextPage=!0,this._nextCursor=null,this._data=[]}async forEach(e,n=null){let s=0;do for(const r of this._data)(!n||s<n)&&await e(r),s++;while((!n||s<n)&&await this.nextPage())}get hasNextPage(){return this._hasNextPage}get data(){return this._data}async nextPage(){return this._hasNextPage?await this.fetch({cursor:this._nextCursor}):!1}async fetch(e={}){const n=Object.assign({},this._params);e.cursor&&(n.cursor=e.cursor),n.order=this._order;const s=await this._suiMaster.client[this._method](n);let r=0;return s.data&&s.data.length&&(r=s.data.length),s.hasNextPage?(this._hasNextPage=!0,this._nextCursor=s.nextCursor):(this._hasNextPage=!1,this._nextCursor=null),this.log("got",r,"items. Has next page: ",s.hasNextPage),this._method==="queryEvents"?this._data=s.data.map(i=>new Lu({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="queryTransactionBlocks"?this._data=s.data.map(i=>new Eh({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="getOwnedObjects"?this._data=s.data.map(i=>new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i})):this._data=s.data,this._data}}/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ji(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Ih(t,e){return Array.isArray(e)?e.length===0?!0:t?e.every(n=>typeof n=="string"):e.every(n=>Number.isSafeInteger(n)):!1}function xh(t){if(typeof t!="function")throw new Error("function expected");return!0}function Ur(t,e){if(typeof e!="string")throw new Error(`${t}: string expected`);return!0}function Kr(t){if(!Number.isSafeInteger(t))throw new Error(`invalid integer: ${t}`)}function Go(t){if(!Array.isArray(t))throw new Error("array expected")}function Ho(t,e){if(!Ih(!0,e))throw new Error(`${t}: array of strings expected`)}function zu(t,e){if(!Ih(!1,e))throw new Error(`${t}: array of numbers expected`)}function Sa(...t){const e=i=>i,n=(i,o)=>a=>i(o(a)),s=t.map(i=>i.encode).reduceRight(n,e),r=t.map(i=>i.decode).reduce(n,e);return{encode:s,decode:r}}function Pu(t){const e=typeof t=="string"?t.split(""):t,n=e.length;Ho("alphabet",e);const s=new Map(e.map((r,i)=>[r,i]));return{encode:r=>(Go(r),r.map(i=>{if(!Number.isSafeInteger(i)||i<0||i>=n)throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${t}`);return e[i]})),decode:r=>(Go(r),r.map(i=>{Ur("alphabet.decode",i);const o=s.get(i);if(o===void 0)throw new Error(`Unknown letter: "${i}". Allowed: ${t}`);return o}))}}function Ru(t=""){return Ur("join",t),{encode:e=>(Ho("join.decode",e),e.join(t)),decode:e=>(Ur("join.decode",e),e.split(t))}}function Hy(t,e="="){return Kr(t),Ur("padding",e),{encode(n){for(Ho("padding.encode",n);n.length*t%8;)n.push(e);return n},decode(n){Ho("padding.decode",n);let s=n.length;if(s*t%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;s>0&&n[s-1]===e;s--)if((s-1)*t%8===0)throw new Error("padding: invalid, string has too much padding");return n.slice(0,s)}}}function Lc(t,e,n){if(e<2)throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);if(Go(t),!t.length)return[];let s=0;const r=[],i=Array.from(t,a=>{if(Kr(a),a<0||a>=e)throw new Error(`invalid integer: ${a}`);return a}),o=i.length;for(;;){let a=0,c=!0;for(let l=s;l<o;l++){const u=i[l],f=e*a,d=f+u;if(!Number.isSafeInteger(d)||f/e!==a||d-u!==f)throw new Error("convertRadix: carry overflow");const h=d/n;a=d%n;const p=Math.floor(h);if(i[l]=p,!Number.isSafeInteger(p)||p*n+a!==d)throw new Error("convertRadix: carry overflow");if(c)p?c=!1:s=l;else continue}if(r.push(a),c)break}for(let a=0;a<t.length-1&&t[a]===0;a++)r.push(0);return r.reverse()}const _h=(t,e)=>e===0?t:_h(e,t%e),Yo=(t,e)=>t+(e-_h(t,e)),Ao=(()=>{let t=[];for(let e=0;e<40;e++)t.push(2**e);return t})();function Zo(t,e,n,s){if(Go(t),e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Yo(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Yo(e,n)}`);let r=0,i=0;const o=Ao[e],a=Ao[n]-1,c=[];for(const l of t){if(Kr(l),l>=o)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(r=r<<e|l,i+e>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);for(i+=e;i>=n;i-=n)c.push((r>>i-n&a)>>>0);const u=Ao[i];if(u===void 0)throw new Error("invalid carry");r&=u-1}if(r=r<<n-i&a,!s&&i>=e)throw new Error("Excess padding");if(!s&&r>0)throw new Error(`Non-zero padding: ${r}`);return s&&i>0&&c.push(r>>>0),c}function Ah(t){Kr(t);const e=2**8;return{encode:n=>{if(!ji(n))throw new Error("radix.encode input should be Uint8Array");return Lc(Array.from(n),e,t)},decode:n=>(zu("radix.decode",n),Uint8Array.from(Lc(n,t,e)))}}function Nh(t,e=!1){if(Kr(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(Yo(8,t)>32||Yo(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!ji(n))throw new Error("radix2.encode input should be Uint8Array");return Zo(Array.from(n),8,t,!e)},decode:n=>(zu("radix2.decode",n),Uint8Array.from(Zo(n,t,8,e)))}}function ud(t){return xh(t),function(...e){try{return t.apply(null,e)}catch{}}}function Th(t,e){return Kr(t),xh(e),{encode(n){if(!ji(n))throw new Error("checksum.encode: input should be Uint8Array");const s=e(n).slice(0,t),r=new Uint8Array(n.length+t);return r.set(n),r.set(s,n.length),r},decode(n){if(!ji(n))throw new Error("checksum.decode: input should be Uint8Array");const s=n.slice(0,-t),r=n.slice(-t),i=e(s).slice(0,t);for(let o=0;o<t;o++)if(i[o]!==r[o])throw new Error("Invalid checksum");return s}}}const ro={alphabet:Pu,chain:Sa,checksum:Th,convertRadix:Lc,convertRadix2:Zo,radix:Ah,radix2:Nh,join:Ru,padding:Hy},Yy=t=>Sa(Ah(58),Pu(t),Ru("")),$u=Yy("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Zy=t=>Sa(Th(4,e=>t(t(e))),$u),zc=Sa(Pu("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Ru("")),ld=[996825010,642813549,513874426,1027748829,705979059];function ei(t){const e=t>>25;let n=(t&33554431)<<5;for(let s=0;s<ld.length;s++)(e>>s&1)===1&&(n^=ld[s]);return n}function dd(t,e,n=1){const s=t.length;let r=1;for(let i=0;i<s;i++){const o=t.charCodeAt(i);if(o<33||o>126)throw new Error(`Invalid prefix (${t})`);r=ei(r)^o>>5}r=ei(r);for(let i=0;i<s;i++)r=ei(r)^t.charCodeAt(i)&31;for(let i of e)r=ei(r)^i;for(let i=0;i<6;i++)r=ei(r);return r^=n,zc.encode(Zo([r%Ao[30]],30,5,!1))}function Qy(t){const e=t==="bech32"?1:734539939,n=Nh(5),s=n.decode,r=n.encode,i=ud(s);function o(f,d,h=90){Ur("bech32.encode prefix",f),ji(d)&&(d=Array.from(d)),zu("bech32.encode",d);const p=f.length;if(p===0)throw new TypeError(`Invalid prefix length ${p}`);const b=p+7+d.length;if(h!==!1&&b>h)throw new TypeError(`Length ${b} exceeds limit ${h}`);const S=f.toLowerCase(),x=dd(S,d,e);return`${S}1${zc.encode(d)}${x}`}function a(f,d=90){Ur("bech32.decode input",f);const h=f.length;if(h<8||d!==!1&&h>d)throw new TypeError(`invalid string length: ${h} (${f}). Expected (8..${d})`);const p=f.toLowerCase();if(f!==p&&f!==f.toUpperCase())throw new Error("String must be lowercase or uppercase");const b=p.lastIndexOf("1");if(b===0||b===-1)throw new Error('Letter "1" must be present between prefix and data only');const S=p.slice(0,b),x=p.slice(b+1);if(x.length<6)throw new Error("Data must be at least 6 characters long");const B=zc.decode(x).slice(0,-6),T=dd(S,B,e);if(!x.endsWith(T))throw new Error(`Invalid checksum in ${f}: expected "${T}"`);return{prefix:S,words:B}}const c=ud(a);function l(f){const{prefix:d,words:h}=a(f,!1);return{prefix:d,words:h,bytes:s(h)}}function u(f,d){return o(f,r(d))}return{encode:o,decode:a,encodeFromBytes:u,decodeToBytes:l,decodeUnsafe:c,fromWords:s,fromWordsUnsafe:i,toWords:r}}const Qo=Qy("bech32"),Ma=t=>$u.encode(t),Ci=t=>$u.decode(t);function ve(t){return Uint8Array.from(atob(t),e=>e.charCodeAt(0))}const Ya=8192;function Ae(t){if(t.length<Ya)return btoa(String.fromCharCode(...t));let e="";for(var n=0;n<t.length;n+=Ya){const s=t.slice(n,n+Ya);e+=String.fromCharCode(...s)}return btoa(e)}function Vu(t){var r;const e=t.startsWith("0x")?t.slice(2):t,n=e.length%2===0?e:`0${e}`,s=((r=n.match(/[0-9a-fA-F]{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))??[];if(s.length!==n.length/2)throw new Error(`Invalid hex string ${t}`);return Uint8Array.from(s)}function Ts(t){return t.reduce((e,n)=>e+n.toString(16).padStart(2,"0"),"")}function qi(t,e){return Array.from({length:Math.ceil(t.length/e)},(n,s)=>t.slice(s*e,(s+1)*e))}class Oh{constructor(e,n){if(typeof e!="function")throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ${e}.`);this._batchLoadFn=e,this._maxBatchSize=tm(n),this._batchScheduleFn=nm(n),this._cacheKeyFn=sm(n),this._cacheMap=rm(n),this._batch=null,this.name=im(n)}load(e){if(e==null)throw new TypeError(`The loader.load() function must be called with a value, but got: ${String(e)}.`);const n=Jy(this),s=this._cacheMap;let r;if(s){r=this._cacheKeyFn(e);const o=s.get(r);if(o){const a=n.cacheHits||(n.cacheHits=[]);return new Promise(c=>{a.push(()=>{c(o)})})}}n.keys.push(e);const i=new Promise((o,a)=>{n.callbacks.push({resolve:o,reject:a})});return s&&s.set(r,i),i}loadMany(e){if(!kh(e))throw new TypeError(`The loader.loadMany() function must be called with Array<key>, but got: ${e}.`);const n=[];for(let s=0;s<e.length;s++)n.push(this.load(e[s]).catch(r=>r));return Promise.all(n)}clear(e){const n=this._cacheMap;if(n){const s=this._cacheKeyFn(e);n.delete(s)}return this}clearAll(){const e=this._cacheMap;return e&&e.clear(),this}prime(e,n){const s=this._cacheMap;if(s){const r=this._cacheKeyFn(e);if(s.get(r)===void 0){let i;n instanceof Error?(i=Promise.reject(n),i.catch(()=>{})):i=Promise.resolve(n),s.set(r,i)}}return this}}const Xy=typeof process=="object"&&typeof process.nextTick=="function"?function(t){Za||(Za=Promise.resolve()),Za.then(()=>{process.nextTick(t)})}:typeof setImmediate=="function"?function(t){setImmediate(t)}:function(t){setTimeout(t)};let Za;function Jy(t){const e=t._batch;if(e!==null&&!e.hasDispatched&&e.keys.length<t._maxBatchSize)return e;const n={hasDispatched:!1,keys:[],callbacks:[]};return t._batch=n,t._batchScheduleFn(()=>{em(t,n)}),n}function em(t,e){if(e.hasDispatched=!0,e.keys.length===0){Pc(e);return}let n;try{n=t._batchLoadFn(e.keys)}catch(s){return Qa(t,e,new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ${String(s)}.`))}if(!n||typeof n.then!="function")return Qa(t,e,new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ${String(n)}.`));Promise.resolve(n).then(s=>{if(!kh(s))throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ${String(s)}.`);if(s.length!==e.keys.length)throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
${String(e.keys)}

Values:
${String(s)}`);Pc(e);for(let r=0;r<e.callbacks.length;r++){const i=s[r];i instanceof Error?e.callbacks[r].reject(i):e.callbacks[r].resolve(i)}}).catch(s=>{Qa(t,e,s)})}function Qa(t,e,n){Pc(e);for(let s=0;s<e.keys.length;s++)t.clear(e.keys[s]),e.callbacks[s].reject(n)}function Pc(t){if(t.cacheHits)for(let e=0;e<t.cacheHits.length;e++)t.cacheHits[e]()}function tm(t){if(!(!t||t.batch!==!1))return 1;const n=t&&t.maxBatchSize;if(n===void 0)return 1/0;if(typeof n!="number"||n<1)throw new TypeError(`maxBatchSize must be a positive number: ${n}`);return n}function nm(t){const e=t&&t.batchScheduleFn;if(e===void 0)return Xy;if(typeof e!="function")throw new TypeError(`batchScheduleFn must be a function: ${e}`);return e}function sm(t){const e=t&&t.cacheKeyFn;if(e===void 0)return n=>n;if(typeof e!="function")throw new TypeError(`cacheKeyFn must be a function: ${e}`);return e}function rm(t){if(!(!t||t.cache!==!1))return null;const n=t&&t.cacheMap;if(n===void 0)return new Map;if(n!==null){const r=["get","set","delete","clear"].filter(i=>n&&typeof n[i]!="function");if(r.length!==0)throw new TypeError("Custom cacheMap missing methods: "+r.join(", "))}return n}function im(t){return t&&t.name?t.name:null}function kh(t){return typeof t=="object"&&t!==null&&"length"in t&&typeof t.length=="number"&&(t.length===0||t.length>0&&Object.prototype.hasOwnProperty.call(t,t.length-1))}function Xo(t){let e=BigInt(t);const n=[];let s=0;if(e===0n)return[0];for(;e>0;)n[s]=Number(e&0x7fn),e>>=7n,e>0n&&(n[s]|=128),s+=1;return n}function om(t){let e=0n,n=0n,s=0;for(;;){if(s>=t.length)throw new Error("ULEB decode error: buffer overflow");const r=t[s];if(s+=1,e+=BigInt(r&127)<<n,!(r&128))break;n+=7n}if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error("ULEB decode error: value exceeds MAX_SAFE_INTEGER");return{value:Number(e),length:s}}class am{constructor(e){this.bytePosition=0,this.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength)}shift(e){return this.bytePosition+=e,this}read8(){const e=this.dataView.getUint8(this.bytePosition);return this.shift(1),e}read16(){const e=this.dataView.getUint16(this.bytePosition,!0);return this.shift(2),e}read32(){const e=this.dataView.getUint32(this.bytePosition,!0);return this.shift(4),e}read64(){const e=this.read32(),s=this.read32().toString(16)+e.toString(16).padStart(8,"0");return BigInt("0x"+s).toString(10)}read128(){const e=BigInt(this.read64()),s=BigInt(this.read64()).toString(16)+e.toString(16).padStart(16,"0");return BigInt("0x"+s).toString(10)}read256(){const e=BigInt(this.read128()),s=BigInt(this.read128()).toString(16)+e.toString(16).padStart(32,"0");return BigInt("0x"+s).toString(10)}readBytes(e){const n=this.bytePosition+this.dataView.byteOffset,s=new Uint8Array(this.dataView.buffer,n,e);return this.shift(e),s}readULEB(){const e=this.bytePosition+this.dataView.byteOffset,n=new Uint8Array(this.dataView.buffer,e),{value:s,length:r}=om(n);return this.shift(r),s}readVec(e){const n=this.readULEB(),s=[];for(let r=0;r<n;r++)s.push(e(this,r,n));return s}}function cm(t,e){switch(e){case"base58":return Ma(t);case"base64":return Ae(t);case"hex":return Ts(t);default:throw new Error("Unsupported encoding, supported values are: base64, hex")}}function jh(t,e=["<",">"]){const[n,s]=e,r=[];let i="",o=0;for(let a=0;a<t.length;a++){const c=t[a];if(c===n&&o++,c===s&&o--,o===0&&c===","){r.push(i.trim()),i="";continue}i+=c}return r.push(i.trim()),r}class um{constructor({initialSize:e=1024,maxSize:n=1/0,allocateSize:s=1024}={}){this.bytePosition=0,this.size=e,this.maxSize=n,this.allocateSize=s,this.dataView=new DataView(new ArrayBuffer(e))}ensureSizeOrGrow(e){const n=this.bytePosition+e;if(n>this.size){const s=Math.min(this.maxSize,Math.max(this.size+n,this.size+this.allocateSize));if(n>s)throw new Error(`Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${n}`);this.size=s;const r=new ArrayBuffer(this.size);new Uint8Array(r).set(new Uint8Array(this.dataView.buffer)),this.dataView=new DataView(r)}}shift(e){return this.bytePosition+=e,this}write8(e){return this.ensureSizeOrGrow(1),this.dataView.setUint8(this.bytePosition,Number(e)),this.shift(1)}writeBytes(e){this.ensureSizeOrGrow(e.length);for(let n=0;n<e.length;n++)this.dataView.setUint8(this.bytePosition+n,e[n]);return this.shift(e.length)}write16(e){return this.ensureSizeOrGrow(2),this.dataView.setUint16(this.bytePosition,Number(e),!0),this.shift(2)}write32(e){return this.ensureSizeOrGrow(4),this.dataView.setUint32(this.bytePosition,Number(e),!0),this.shift(4)}write64(e){return Xa(BigInt(e),8).forEach(n=>this.write8(n)),this}write128(e){return Xa(BigInt(e),16).forEach(n=>this.write8(n)),this}write256(e){return Xa(BigInt(e),32).forEach(n=>this.write8(n)),this}writeULEB(e){return Xo(e).forEach(n=>this.write8(n)),this}writeVec(e,n){return this.writeULEB(e.length),Array.from(e).forEach((s,r)=>n(this,s,r,e.length)),this}*[Symbol.iterator](){for(let e=0;e<this.bytePosition;e++)yield this.dataView.getUint8(e);return this.toBytes()}toBytes(){return new Uint8Array(this.dataView.buffer.slice(0,this.bytePosition))}toString(e){return cm(this.toBytes(),e)}}function Xa(t,e){const n=new Uint8Array(e);let s=0;for(;t>0;)n[s]=Number(t%BigInt(256)),t=t/BigInt(256),s+=1;return n}var Ch=t=>{throw TypeError(t)},Dh=(t,e,n)=>e.has(t)||Ch("Cannot "+n),rn=(t,e,n)=>(Dh(t,e,"read from private field"),n?n.call(t):e.get(t)),Jo=(t,e,n)=>e.has(t)?Ch("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ea=(t,e,n,s)=>(Dh(t,e,"write to private field"),e.set(t,n),n),wr,ii,No,ps;const lm=class Bh{constructor(e){Jo(this,wr),Jo(this,ii),this.name=e.name,this.read=e.read,this.serializedSize=e.serializedSize??(()=>null),ea(this,wr,e.write),ea(this,ii,e.serialize??((n,s)=>{const r=new um({initialSize:this.serializedSize(n)??void 0,...s});return rn(this,wr).call(this,n,r),r.toBytes()})),this.validate=e.validate??(()=>{})}write(e,n){this.validate(e),rn(this,wr).call(this,e,n)}serialize(e,n){return this.validate(e),new dm(this,rn(this,ii).call(this,e,n))}parse(e){const n=new am(e);return this.read(n)}fromHex(e){return this.parse(Vu(e))}fromBase58(e){return this.parse(Ci(e))}fromBase64(e){return this.parse(ve(e))}transform({name:e,input:n,output:s,validate:r}){return new Bh({name:e??this.name,read:i=>s?s(this.read(i)):this.read(i),write:(i,o)=>rn(this,wr).call(this,n?n(i):i,o),serializedSize:i=>this.serializedSize(n?n(i):i),serialize:(i,o)=>rn(this,ii).call(this,n?n(i):i,o),validate:i=>{r==null||r(i),this.validate(n?n(i):i)}})}};wr=new WeakMap;ii=new WeakMap;let Un=lm;const Uh=Symbol.for("@mysten/serialized-bcs");function Fu(t){return!!t&&typeof t=="object"&&t[Uh]===!0}class dm{constructor(e,n){Jo(this,No),Jo(this,ps),ea(this,No,e),ea(this,ps,n)}get[Uh](){return!0}toBytes(){return rn(this,ps)}toHex(){return Ts(rn(this,ps))}toBase64(){return Ae(rn(this,ps))}toBase58(){return Ma(rn(this,ps))}parse(){return rn(this,No).parse(rn(this,ps))}}No=new WeakMap;ps=new WeakMap;function ta({size:t,...e}){return new Un({...e,serializedSize:()=>t})}function Ja({readMethod:t,writeMethod:e,...n}){return ta({...n,read:s=>s[t](),write:(s,r)=>r[e](s),validate:s=>{var r;if(s<0||s>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${s}. Expected value in range 0-${n.maxValue}`);(r=n.validate)==null||r.call(n,s)}})}function ec({readMethod:t,writeMethod:e,...n}){return ta({...n,read:s=>s[t](),write:(s,r)=>r[e](BigInt(s)),validate:s=>{var i;const r=BigInt(s);if(r<0||r>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${r}. Expected value in range 0-${n.maxValue}`);(i=n.validate)==null||i.call(n,r)}})}function fm({serialize:t,...e}){const n=new Un({...e,serialize:t,write:(s,r)=>{for(const i of n.serialize(s).toBytes())r.write8(i)}});return n}function hm({toBytes:t,fromBytes:e,...n}){return new Un({...n,read:s=>{const r=s.readULEB(),i=s.readBytes(r);return e(i)},write:(s,r)=>{const i=t(s);r.writeULEB(i.length);for(let o=0;o<i.length;o++)r.write8(i[o])},serialize:s=>{const r=t(s),i=Xo(r.length),o=new Uint8Array(i.length+r.length);return o.set(i,0),o.set(r,i.length),o},validate:s=>{var r;if(typeof s!="string")throw new TypeError(`Invalid ${n.name} value: ${s}. Expected string`);(r=n.validate)==null||r.call(n,s)}})}function pm(t){let e=null;function n(){return e||(e=t()),e}return new Un({name:"lazy",read:s=>n().read(s),serializedSize:s=>n().serializedSize(s),write:(s,r)=>n().write(s,r),serialize:(s,r)=>n().serialize(s,r).toBytes()})}class gm extends Un{constructor({name:e,fields:n,...s}){const r=Object.entries(n);super({name:e,serializedSize:i=>{let o=0;for(const[a,c]of r){const l=c.serializedSize(i[a]);if(l==null)return null;o+=l}return o},read:i=>{const o={};for(const[a,c]of r)o[a]=c.read(i);return o},write:(i,o)=>{for(const[a,c]of r)c.write(i[a],o)},...s,validate:i=>{var o;if((o=s==null?void 0:s.validate)==null||o.call(s,i),typeof i!="object"||i==null)throw new TypeError(`Expected object, found ${typeof i}`)}})}}class bm extends Un{constructor({fields:e,...n}){const s=Object.entries(e);super({read:r=>{const i=r.readULEB(),o=s[i];if(!o)throw new TypeError(`Unknown value ${i} for enum ${n.name}`);const[a,c]=o;return{[a]:(c==null?void 0:c.read(r))??!0,$kind:a}},write:(r,i)=>{const[o,a]=Object.entries(r).filter(([c])=>Object.hasOwn(e,c))[0];for(let c=0;c<s.length;c++){const[l,u]=s[c];if(l===o){i.writeULEB(c),u==null||u.write(a,i);return}}},...n,validate:r=>{var a;if((a=n==null?void 0:n.validate)==null||a.call(n,r),typeof r!="object"||r==null)throw new TypeError(`Expected object, found ${typeof r}`);const i=Object.keys(r).filter(c=>r[c]!==void 0&&Object.hasOwn(e,c));if(i.length!==1)throw new TypeError(`Expected object with one key, but found ${i.length} for type ${n.name}}`);const[o]=i;if(!Object.hasOwn(e,o))throw new TypeError(`Invalid enum variant ${o}`)}})}}class ym extends Un{constructor({fields:e,name:n,...s}){super({name:n??`(${e.map(r=>r.name).join(", ")})`,serializedSize:r=>{let i=0;for(let o=0;o<e.length;o++){const a=e[o].serializedSize(r[o]);if(a==null)return null;i+=a}return i},read:r=>{const i=[];for(const o of e)i.push(o.read(r));return i},write:(r,i)=>{for(let o=0;o<e.length;o++)e[o].write(r[o],i)},...s,validate:r=>{var i;if((i=s==null?void 0:s.validate)==null||i.call(s,r),!Array.isArray(r))throw new TypeError(`Expected array, found ${typeof r}`);if(r.length!==e.length)throw new TypeError(`Expected array of length ${e.length}, found ${r.length}`)}})}}function mm(t,e,n){return new Un({read:s=>{const r=new Array(t);for(let i=0;i<t;i++)r[i]=e.read(s);return r},write:(s,r)=>{for(const i of s)e.write(i,r)},...n,name:(n==null?void 0:n.name)??`${e.name}[${t}]`,validate:s=>{var r;if((r=n==null?void 0:n.validate)==null||r.call(n,s),!s||typeof s!="object"||!("length"in s))throw new TypeError(`Expected array, found ${typeof s}`);if(s.length!==t)throw new TypeError(`Expected array of length ${t}, found ${s.length}`)}})}function wm(t){return g.enum(`Option<${t.name}>`,{None:null,Some:t}).transform({input:e=>e==null?{None:!0}:{Some:e},output:e=>e.$kind==="Some"?e.Some:null})}function vm(t,e){return new Un({read:n=>{const s=n.readULEB(),r=new Array(s);for(let i=0;i<s;i++)r[i]=t.read(n);return r},write:(n,s)=>{s.writeULEB(n.length);for(const r of n)t.write(r,s)},...e,name:(e==null?void 0:e.name)??`vector<${t.name}>`,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`)}})}function Sm(t,e){return g.vector(g.tuple([t,e])).transform({name:`Map<${t.name}, ${e.name}>`,input:n=>[...n.entries()],output:n=>{const s=new Map;for(const[r,i]of n)s.set(r,i);return s}})}const g={u8(t){return Ja({readMethod:"read8",writeMethod:"write8",size:1,maxValue:2**8-1,...t,name:(t==null?void 0:t.name)??"u8"})},u16(t){return Ja({readMethod:"read16",writeMethod:"write16",size:2,maxValue:2**16-1,...t,name:(t==null?void 0:t.name)??"u16"})},u32(t){return Ja({readMethod:"read32",writeMethod:"write32",size:4,maxValue:2**32-1,...t,name:(t==null?void 0:t.name)??"u32"})},u64(t){return ec({readMethod:"read64",writeMethod:"write64",size:8,maxValue:2n**64n-1n,...t,name:(t==null?void 0:t.name)??"u64"})},u128(t){return ec({readMethod:"read128",writeMethod:"write128",size:16,maxValue:2n**128n-1n,...t,name:(t==null?void 0:t.name)??"u128"})},u256(t){return ec({readMethod:"read256",writeMethod:"write256",size:32,maxValue:2n**256n-1n,...t,name:(t==null?void 0:t.name)??"u256"})},bool(t){return ta({size:1,read:e=>e.read8()===1,write:(e,n)=>n.write8(e?1:0),...t,name:(t==null?void 0:t.name)??"bool",validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),typeof e!="boolean")throw new TypeError(`Expected boolean, found ${typeof e}`)}})},uleb128(t){return fm({read:e=>e.readULEB(),serialize:e=>Uint8Array.from(Xo(e)),...t,name:(t==null?void 0:t.name)??"uleb128"})},bytes(t,e){return ta({size:t,read:n=>n.readBytes(t),write:(n,s)=>{s.writeBytes(new Uint8Array(n))},...e,name:(e==null?void 0:e.name)??`bytes[${t}]`,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`);if(n.length!==t)throw new TypeError(`Expected array of length ${t}, found ${n.length}`)}})},byteVector(t){return new Un({read:e=>{const n=e.readULEB();return e.readBytes(n)},write:(e,n)=>{const s=new Uint8Array(e);n.writeULEB(s.length),n.writeBytes(s)},...t,name:(t==null?void 0:t.name)??"vector<u8>",serializedSize:e=>{const n="length"in e?e.length:null;return n==null?null:Xo(n).length+n},validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),!e||typeof e!="object"||!("length"in e))throw new TypeError(`Expected array, found ${typeof e}`)}})},string(t){return hm({toBytes:e=>new TextEncoder().encode(e),fromBytes:e=>new TextDecoder().decode(e),...t,name:(t==null?void 0:t.name)??"string"})},fixedArray:mm,option:wm,vector:vm,tuple(t,e){return new ym({fields:t,...e})},struct(t,e,n){return new gm({name:t,fields:e,...n})},enum(t,e,n){return new bm({name:t,fields:e,...n})},map:Sm,lazy(t){return pm(t)}},Lh=/^(?!.*(^(?!@)|[-.@])($|[-.@]))(?:[a-z0-9-]{0,63}(?:\.[a-z0-9-]{0,63})*)?@[a-z0-9-]{0,63}$/i,zh=/^(?!.*(^|[-.])($|[-.]))(?:[a-z0-9-]{0,63}\.)+sui$/i,Mm=235;function Em(t){return t.length>Mm?!1:t.includes("@")?Lh.test(t):zh.test(t)}function Im(t,e="at"){const n=t.toLowerCase();let s;if(n.includes("@")){if(!Lh.test(n))throw new Error(`Invalid SuiNS name ${t}`);const[r,i]=n.split("@");s=[...r?r.split("."):[],i]}else{if(!zh.test(n))throw new Error(`Invalid SuiNS name ${t}`);s=n.split(".").slice(0,-1)}return e==="dot"?`${s.join(".")}.sui`:`${s.slice(0,-1).join(".")}@${s[s.length-1]}`}const xm=/^([a-z0-9]+(?:-[a-z0-9]+)*)$/,_m=/^\d+$/,Am=64,Ph="/",Pt=t=>{const e=t.split(Ph);if(e.length<2||e.length>3)return!1;const[n,s,r]=e;return r!==void 0&&!_m.test(r)||!Em(n)?!1:xm.test(s)&&s.length<Am},Nm=t=>{const e=t.split(/::|<|>|,/);for(const n of e)if(n.includes(Ph)&&!Pt(n))return!1;return!0},Tm=32;function fd(t){try{return Ci(t).length===Tm}catch{return!1}}const Wr=32;function on(t){return km(t)&&jm(t)===Wr}function io(t){return on(t)}function Om(t){return t.includes("::")?rr(t):t}function rr(t){const[e,n]=t.split("::"),s=Pt(e),r=t.slice(e.length+n.length+4),i=r.includes("<")?r.slice(0,r.indexOf("<")):r,o=r.includes("<")?jh(r.slice(r.indexOf("<")+1,r.lastIndexOf(">"))).map(a=>Om(a.trim())):[];return{address:s?e:ue(e),module:n,name:i,typeParams:o}}function Lr(t){const{address:e,module:n,name:s,typeParams:r}=typeof t=="string"?rr(t):t,i=(r==null?void 0:r.length)>0?`<${r.map(o=>typeof o=="string"?o:Lr(o)).join(",")}>`:"";return`${e}::${n}::${s}${i}`}function ue(t,e=!1){let n=t.toLowerCase();return!e&&n.startsWith("0x")&&(n=n.slice(2)),`0x${n.padStart(Wr*2,"0")}`}function Nn(t,e=!1){return ue(t,e)}function km(t){return/^(0x|0X)?[a-fA-F0-9]+$/.test(t)&&t.length%2===0}function jm(t){return/^(0x|0X)/.test(t)?(t.length-2)/2:t.length/2}const Cm=/^vector<(.+)>$/,Dm=/^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;class cn{static parseFromStr(e,n=!1){if(e==="address")return{address:null};if(e==="bool")return{bool:null};if(e==="u8")return{u8:null};if(e==="u16")return{u16:null};if(e==="u32")return{u32:null};if(e==="u64")return{u64:null};if(e==="u128")return{u128:null};if(e==="u256")return{u256:null};if(e==="signer")return{signer:null};const s=e.match(Cm);if(s)return{vector:cn.parseFromStr(s[1],n)};const r=e.match(Dm);if(r)return{struct:{address:n?ue(r[1]):r[1],module:r[2],name:r[3],typeParams:r[5]===void 0?[]:cn.parseStructTypeArgs(r[5],n)}};throw new Error(`Encountered unexpected token when parsing type args for ${e}`)}static parseStructTypeArgs(e,n=!1){return jh(e).map(s=>cn.parseFromStr(s,n))}static tagToString(e){if("bool"in e)return"bool";if("u8"in e)return"u8";if("u16"in e)return"u16";if("u32"in e)return"u32";if("u64"in e)return"u64";if("u128"in e)return"u128";if("u256"in e)return"u256";if("address"in e)return"address";if("signer"in e)return"signer";if("vector"in e)return`vector<${cn.tagToString(e.vector)}>`;if("struct"in e){const n=e.struct,s=n.typeParams.map(cn.tagToString).join(", ");return`${n.address}::${n.module}::${n.name}${s?`<${s}>`:""}`}throw new Error("Invalid TypeTag")}}function Bm(t){return g.u64({name:"unsafe_u64",...t}).transform({input:e=>e,output:e=>Number(e)})}function Um(t){return g.enum("Option",{None:null,Some:t})}const Ce=g.bytes(Wr).transform({validate:t=>{const e=typeof t=="string"?t:Ts(t);if(!e||!on(ue(e)))throw new Error(`Invalid Sui address ${e}`)},input:t=>typeof t=="string"?Vu(ue(t)):t,output:t=>ue(Ts(t))}),dn=g.byteVector().transform({name:"ObjectDigest",input:t=>Ci(t),output:t=>Ma(new Uint8Array(t)),validate:t=>{if(Ci(t).length!==32)throw new Error("ObjectDigest must be 32 bytes")}}),Gt=g.struct("SuiObjectRef",{objectId:Ce,version:g.u64(),digest:dn}),Rh=g.struct("SharedObjectRef",{objectId:Ce,initialSharedVersion:g.u64(),mutable:g.bool()}),$h=g.enum("ObjectArg",{ImmOrOwnedObject:Gt,SharedObject:Rh,Receiving:Gt}),Fs=g.enum("Owner",{AddressOwner:Ce,ObjectOwner:Ce,Shared:g.struct("Shared",{initialSharedVersion:g.u64()}),Immutable:null,ConsensusAddressOwner:g.struct("ConsensusAddressOwner",{owner:Ce,startVersion:g.u64()})}),Vh=g.enum("CallArg",{Pure:g.struct("Pure",{bytes:g.byteVector().transform({input:t=>typeof t=="string"?ve(t):t,output:t=>Ae(new Uint8Array(t))})}),Object:$h}),qu=g.enum("TypeTag",{bool:null,u8:null,u64:null,u128:null,address:null,signer:null,vector:g.lazy(()=>qu),struct:g.lazy(()=>Hh),u16:null,u32:null,u256:null}),Ku=qu.transform({input:t=>typeof t=="string"?cn.parseFromStr(t,!0):t,output:t=>cn.tagToString(t)}),Mn=g.enum("Argument",{GasCoin:null,Input:g.u16(),Result:g.u16(),NestedResult:g.tuple([g.u16(),g.u16()])}),Fh=g.struct("ProgrammableMoveCall",{package:Ce,module:g.string(),function:g.string(),typeArguments:g.vector(Ku),arguments:g.vector(Mn)}),qh=g.enum("Command",{MoveCall:Fh,TransferObjects:g.struct("TransferObjects",{objects:g.vector(Mn),address:Mn}),SplitCoins:g.struct("SplitCoins",{coin:Mn,amounts:g.vector(Mn)}),MergeCoins:g.struct("MergeCoins",{destination:Mn,sources:g.vector(Mn)}),Publish:g.struct("Publish",{modules:g.vector(g.byteVector().transform({input:t=>typeof t=="string"?ve(t):t,output:t=>Ae(new Uint8Array(t))})),dependencies:g.vector(Ce)}),MakeMoveVec:g.struct("MakeMoveVec",{type:Um(Ku).transform({input:t=>t===null?{None:!0}:{Some:t},output:t=>t.Some??null}),elements:g.vector(Mn)}),Upgrade:g.struct("Upgrade",{modules:g.vector(g.byteVector().transform({input:t=>typeof t=="string"?ve(t):t,output:t=>Ae(new Uint8Array(t))})),dependencies:g.vector(Ce),package:Ce,ticket:Mn})}),Kh=g.struct("ProgrammableTransaction",{inputs:g.vector(Vh),commands:g.vector(qh)}),Wh=g.enum("TransactionKind",{ProgrammableTransaction:Kh,ChangeEpoch:null,Genesis:null,ConsensusCommitPrologue:null}),Gh=g.enum("TransactionExpiration",{None:null,Epoch:Bm()}),Hh=g.struct("StructTag",{address:Ce,module:g.string(),name:g.string(),typeParams:g.vector(qu)}),Yh=g.struct("GasData",{payment:g.vector(Gt),owner:Ce,price:g.u64(),budget:g.u64()}),Zh=g.struct("TransactionDataV1",{kind:Wh,sender:Ce,gasData:Yh,expiration:Gh}),Qh=g.enum("TransactionData",{V1:Zh}),Xh=g.enum("IntentScope",{TransactionData:null,TransactionEffects:null,CheckpointSummary:null,PersonalMessage:null}),Jh=g.enum("IntentVersion",{V0:null}),ep=g.enum("AppId",{Sui:null}),tp=g.struct("Intent",{scope:Xh,version:Jh,appId:ep});function np(t){return g.struct(`IntentMessage<${t.name}>`,{intent:tp,value:t})}const sp=g.enum("CompressedSignature",{ED25519:g.bytes(64),Secp256k1:g.bytes(64),Secp256r1:g.bytes(64),ZkLogin:g.byteVector(),Passkey:g.byteVector()}),rp=g.enum("PublicKey",{ED25519:g.bytes(32),Secp256k1:g.bytes(33),Secp256r1:g.bytes(33),ZkLogin:g.byteVector(),Passkey:g.bytes(33)}),ip=g.struct("MultiSigPkMap",{pubKey:rp,weight:g.u8()}),op=g.struct("MultiSigPublicKey",{pk_map:g.vector(ip),threshold:g.u16()}),Lm=g.struct("MultiSig",{sigs:g.vector(sp),bitmap:g.u16(),multisig_pk:op}),zm=g.byteVector().transform({input:t=>typeof t=="string"?ve(t):t,output:t=>Ae(new Uint8Array(t))}),ap=g.struct("SenderSignedTransaction",{intentMessage:np(Qh),txSignatures:g.vector(zm)}),Pm=g.vector(ap,{name:"SenderSignedData"}),cp=g.struct("PasskeyAuthenticator",{authenticatorData:g.byteVector(),clientDataJson:g.string(),userSignature:g.byteVector()}),Rm=g.enum("PackageUpgradeError",{UnableToFetchPackage:g.struct("UnableToFetchPackage",{packageId:Ce}),NotAPackage:g.struct("NotAPackage",{objectId:Ce}),IncompatibleUpgrade:null,DigestDoesNotMatch:g.struct("DigestDoesNotMatch",{digest:g.byteVector()}),UnknownUpgradePolicy:g.struct("UnknownUpgradePolicy",{policy:g.u8()}),PackageIDDoesNotMatch:g.struct("PackageIDDoesNotMatch",{packageId:Ce,ticketId:Ce})}),$m=g.struct("ModuleId",{address:Ce,name:g.string()}),hd=g.struct("MoveLocation",{module:$m,function:g.u16(),instruction:g.u16(),functionName:g.option(g.string())}),Vm=g.enum("CommandArgumentError",{TypeMismatch:null,InvalidBCSBytes:null,InvalidUsageOfPureArg:null,InvalidArgumentToPrivateEntryFunction:null,IndexOutOfBounds:g.struct("IndexOutOfBounds",{idx:g.u16()}),SecondaryIndexOutOfBounds:g.struct("SecondaryIndexOutOfBounds",{resultIdx:g.u16(),secondaryIdx:g.u16()}),InvalidResultArity:g.struct("InvalidResultArity",{resultIdx:g.u16()}),InvalidGasCoinUsage:null,InvalidValueUsage:null,InvalidObjectByValue:null,InvalidObjectByMutRef:null,SharedObjectOperationNotAllowed:null}),Fm=g.enum("TypeArgumentError",{TypeNotFound:null,ConstraintNotSatisfied:null}),qm=g.enum("ExecutionFailureStatus",{InsufficientGas:null,InvalidGasObject:null,InvariantViolation:null,FeatureNotYetSupported:null,MoveObjectTooBig:g.struct("MoveObjectTooBig",{objectSize:g.u64(),maxObjectSize:g.u64()}),MovePackageTooBig:g.struct("MovePackageTooBig",{objectSize:g.u64(),maxObjectSize:g.u64()}),CircularObjectOwnership:g.struct("CircularObjectOwnership",{object:Ce}),InsufficientCoinBalance:null,CoinBalanceOverflow:null,PublishErrorNonZeroAddress:null,SuiMoveVerificationError:null,MovePrimitiveRuntimeError:g.option(hd),MoveAbort:g.tuple([hd,g.u64()]),VMVerificationOrDeserializationError:null,VMInvariantViolation:null,FunctionNotFound:null,ArityMismatch:null,TypeArityMismatch:null,NonEntryFunctionInvoked:null,CommandArgumentError:g.struct("CommandArgumentError",{argIdx:g.u16(),kind:Vm}),TypeArgumentError:g.struct("TypeArgumentError",{argumentIdx:g.u16(),kind:Fm}),UnusedValueWithoutDrop:g.struct("UnusedValueWithoutDrop",{resultIdx:g.u16(),secondaryIdx:g.u16()}),InvalidPublicFunctionReturnType:g.struct("InvalidPublicFunctionReturnType",{idx:g.u16()}),InvalidTransferObject:null,EffectsTooLarge:g.struct("EffectsTooLarge",{currentSize:g.u64(),maxSize:g.u64()}),PublishUpgradeMissingDependency:null,PublishUpgradeDependencyDowngrade:null,PackageUpgradeError:g.struct("PackageUpgradeError",{upgradeError:Rm}),WrittenObjectsTooLarge:g.struct("WrittenObjectsTooLarge",{currentSize:g.u64(),maxSize:g.u64()}),CertificateDenied:null,SuiMoveVerificationTimedout:null,SharedObjectOperationNotAllowed:null,InputObjectDeleted:null,ExecutionCancelledDueToSharedObjectCongestion:g.struct("ExecutionCancelledDueToSharedObjectCongestion",{congestedObjects:g.vector(Ce)}),AddressDeniedForCoin:g.struct("AddressDeniedForCoin",{address:Ce,coinType:g.string()}),CoinTypeGlobalPause:g.struct("CoinTypeGlobalPause",{coinType:g.string()}),ExecutionCancelledDueToRandomnessUnavailable:null}),up=g.enum("ExecutionStatus",{Success:null,Failed:g.struct("ExecutionFailed",{error:qm,command:g.option(g.u64())})}),lp=g.struct("GasCostSummary",{computationCost:g.u64(),storageCost:g.u64(),storageRebate:g.u64(),nonRefundableStorageFee:g.u64()}),Km=g.struct("TransactionEffectsV1",{status:up,executedEpoch:g.u64(),gasUsed:lp,modifiedAtVersions:g.vector(g.tuple([Ce,g.u64()])),sharedObjects:g.vector(Gt),transactionDigest:dn,created:g.vector(g.tuple([Gt,Fs])),mutated:g.vector(g.tuple([Gt,Fs])),unwrapped:g.vector(g.tuple([Gt,Fs])),deleted:g.vector(Gt),unwrappedThenDeleted:g.vector(Gt),wrapped:g.vector(Gt),gasObject:g.tuple([Gt,Fs]),eventsDigest:g.option(dn),dependencies:g.vector(dn)}),Wu=g.tuple([g.u64(),dn]),Wm=g.enum("ObjectIn",{NotExist:null,Exist:g.tuple([Wu,Fs])}),Gm=g.enum("ObjectOut",{NotExist:null,ObjectWrite:g.tuple([dn,Fs]),PackageWrite:Wu}),Hm=g.enum("IDOperation",{None:null,Created:null,Deleted:null}),Ym=g.struct("EffectsObjectChange",{inputState:Wm,outputState:Gm,idOperation:Hm}),Zm=g.enum("UnchangedSharedKind",{ReadOnlyRoot:Wu,MutateDeleted:g.u64(),ReadDeleted:g.u64(),Cancelled:g.u64(),PerEpochConfig:null}),Qm=g.struct("TransactionEffectsV2",{status:up,executedEpoch:g.u64(),gasUsed:lp,transactionDigest:dn,gasObjectIndex:g.option(g.u32()),eventsDigest:g.option(dn),dependencies:g.vector(dn),lamportVersion:g.u64(),changedObjects:g.vector(g.tuple([Ce,Ym])),unchangedSharedObjects:g.vector(g.tuple([Ce,Zm])),auxDataDigest:g.option(dn)}),Xm=g.enum("TransactionEffects",{V1:Km,V2:Qm});function mi(t){switch(t){case"u8":return g.u8();case"u16":return g.u16();case"u32":return g.u32();case"u64":return g.u64();case"u128":return g.u128();case"u256":return g.u256();case"bool":return g.bool();case"string":return g.string();case"id":case"address":return Ce}const e=t.match(/^(vector|option)<(.+)>$/);if(e){const[n,s]=e.slice(1);return n==="vector"?g.vector(mi(s)):g.option(mi(s))}throw new Error(`Invalid Pure type name: ${t}`)}const ie={...g,U8:g.u8(),U16:g.u16(),U32:g.u32(),U64:g.u64(),U128:g.u128(),U256:g.u256(),ULEB128:g.uleb128(),Bool:g.bool(),String:g.string(),Address:Ce,AppId:ep,Argument:Mn,CallArg:Vh,Command:qh,CompressedSignature:sp,GasData:Yh,Intent:tp,IntentMessage:np,IntentScope:Xh,IntentVersion:Jh,MultiSig:Lm,MultiSigPkMap:ip,MultiSigPublicKey:op,ObjectArg:$h,ObjectDigest:dn,Owner:Fs,PasskeyAuthenticator:cp,ProgrammableMoveCall:Fh,ProgrammableTransaction:Kh,PublicKey:rp,SenderSignedData:Pm,SenderSignedTransaction:ap,SharedObjectRef:Rh,StructTag:Hh,SuiObjectRef:Gt,TransactionData:Qh,TransactionDataV1:Zh,TransactionEffects:Xm,TransactionExpiration:Gh,TransactionKind:Wh,TypeTag:Ku},dp=BigInt(1e9),Jm="0x1",fp="0x2";Nn("0x6");const ew=`${fp}::sui::SUI`;Nn("0x5");Nn("0x8");const hr=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ir(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function kn(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function Le(t,...e){if(!ir(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function Ea(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");kn(t.outputLen),kn(t.blockLen)}function zr(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function hp(t,e){Le(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function na(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Qt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function tr(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function mn(t,e){return t<<32-e|t>>>e}function oo(t,e){return t<<e|t>>>32-e>>>0}const pp=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function gp(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}const qn=pp?t=>t:t=>gp(t);function tw(t){for(let e=0;e<t.length;e++)t[e]=gp(t[e]);return t}const pr=pp?t=>t:tw,bp=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",nw=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Xe(t){if(Le(t),bp)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=nw[t[n]];return e}const Rn={_0:48,_9:57,A:65,F:70,a:97,f:102};function pd(t){if(t>=Rn._0&&t<=Rn._9)return t-Rn._0;if(t>=Rn.A&&t<=Rn.F)return t-(Rn.A-10);if(t>=Rn.a&&t<=Rn.f)return t-(Rn.a-10)}function Dn(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);if(bp)return Uint8Array.fromHex(t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const s=new Uint8Array(n);for(let r=0,i=0;r<n;r++,i+=2){const o=pd(t.charCodeAt(i)),a=pd(t.charCodeAt(i+1));if(o===void 0||a===void 0){const c=t[i]+t[i+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+i)}s[r]=o*16+a}return s}function Gu(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function Ns(t){return typeof t=="string"&&(t=Gu(t)),Le(t),t}function gd(t){return typeof t=="string"&&(t=Gu(t)),Le(t),t}function Fe(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];Le(r),e+=r.length}const n=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const i=t[s];n.set(i,r),r+=i.length}return n}function sw(t,e){if(e!==void 0&&{}.toString.call(e)!=="[object Object]")throw new Error("options should be object or undefined");return Object.assign(t,e)}class Hu{}function Ia(t){const e=s=>t().update(Ns(s)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function rw(t){const e=(s,r)=>t(r).update(Ns(s)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=s=>t(s),e}function xa(t=32){if(hr&&typeof hr.getRandomValues=="function")return hr.getRandomValues(new Uint8Array(t));if(hr&&typeof hr.randomBytes=="function")return Uint8Array.from(hr.randomBytes(t));throw new Error("crypto.getRandomValues must be defined")}const iw=Uint8Array.from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9]);function ow(t,e,n,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,s);const r=BigInt(32),i=BigInt(4294967295),o=Number(n>>r&i),a=Number(n&i),c=s?4:0,l=s?0:4;t.setUint32(e+c,o,s),t.setUint32(e+l,a,s)}function aw(t,e,n){return t&e^~t&n}function cw(t,e,n){return t&e^t&n^e&n}class Yu extends Hu{constructor(e,n,s,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=n,this.padOffset=s,this.isLE=r,this.buffer=new Uint8Array(e),this.view=tr(this.buffer)}update(e){zr(this),e=Ns(e),Le(e);const{view:n,buffer:s,blockLen:r}=this,i=e.length;for(let o=0;o<i;){const a=Math.min(r-this.pos,i-o);if(a===r){const c=tr(e);for(;r<=i-o;o+=r)this.process(c,o);continue}s.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===r&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){zr(this),hp(e,this),this.finished=!0;const{buffer:n,view:s,blockLen:r,isLE:i}=this;let{pos:o}=this;n[o++]=128,Qt(this.buffer.subarray(o)),this.padOffset>r-o&&(this.process(s,0),o=0);for(let f=o;f<r;f++)n[f]=0;ow(s,r-8,BigInt(this.length*8),i),this.process(s,0);const a=tr(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<l;f++)a.setUint32(4*f,u[f],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:s,length:r,finished:i,destroyed:o,pos:a}=this;return e.destroyed=o,e.finished=i,e.length=r,e.pos=a,r%n&&e.buffer.set(s),e}clone(){return this._cloneInto()}}const cs=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),st=Uint32Array.from([3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]),rt=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),ao=BigInt(2**32-1),bd=BigInt(32);function yp(t,e=!1){return e?{h:Number(t&ao),l:Number(t>>bd&ao)}:{h:Number(t>>bd&ao)|0,l:Number(t&ao)|0}}function uw(t,e=!1){const n=t.length;let s=new Uint32Array(n),r=new Uint32Array(n);for(let i=0;i<n;i++){const{h:o,l:a}=yp(t[i],e);[s[i],r[i]]=[o,a]}return[s,r]}const yd=(t,e,n)=>t>>>n,md=(t,e,n)=>t<<32-n|e>>>n,ws=(t,e,n)=>t>>>n|e<<32-n,vs=(t,e,n)=>t<<32-n|e>>>n,oi=(t,e,n)=>t<<64-n|e>>>n-32,ai=(t,e,n)=>t>>>n-32|e<<64-n,lw=(t,e)=>e,dw=(t,e)=>t;function en(t,e,n,s){const r=(e>>>0)+(s>>>0);return{h:t+n+(r/2**32|0)|0,l:r|0}}const Zu=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),Qu=(t,e,n,s)=>e+n+s+(t/2**32|0)|0,fw=(t,e,n,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0),hw=(t,e,n,s,r)=>e+n+s+r+(t/2**32|0)|0,pw=(t,e,n,s,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0)+(r>>>0),gw=(t,e,n,s,r,i)=>e+n+s+r+i+(t/2**32|0)|0,We=Uint32Array.from([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),Y=new Uint32Array(32);function us(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=Y[2*t],l=Y[2*t+1],u=Y[2*e],f=Y[2*e+1],d=Y[2*n],h=Y[2*n+1],p=Y[2*s],b=Y[2*s+1],S=Zu(c,u,o);l=Qu(S,l,f,a),c=S|0,{Dh:b,Dl:p}={Dh:b^l,Dl:p^c},{Dh:b,Dl:p}={Dh:lw(b,p),Dl:dw(b)},{h,l:d}=en(h,d,b,p),{Bh:f,Bl:u}={Bh:f^h,Bl:u^d},{Bh:f,Bl:u}={Bh:ws(f,u,24),Bl:vs(f,u,24)},Y[2*t]=c,Y[2*t+1]=l,Y[2*e]=u,Y[2*e+1]=f,Y[2*n]=d,Y[2*n+1]=h,Y[2*s]=p,Y[2*s+1]=b}function ls(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=Y[2*t],l=Y[2*t+1],u=Y[2*e],f=Y[2*e+1],d=Y[2*n],h=Y[2*n+1],p=Y[2*s],b=Y[2*s+1],S=Zu(c,u,o);l=Qu(S,l,f,a),c=S|0,{Dh:b,Dl:p}={Dh:b^l,Dl:p^c},{Dh:b,Dl:p}={Dh:ws(b,p,16),Dl:vs(b,p,16)},{h,l:d}=en(h,d,b,p),{Bh:f,Bl:u}={Bh:f^h,Bl:u^d},{Bh:f,Bl:u}={Bh:oi(f,u,63),Bl:ai(f,u,63)},Y[2*t]=c,Y[2*t+1]=l,Y[2*e]=u,Y[2*e+1]=f,Y[2*n]=d,Y[2*n+1]=h,Y[2*s]=p,Y[2*s+1]=b}function bw(t,e={},n,s,r){if(kn(n),t<0||t>n)throw new Error("outputLen bigger than keyLen");const{key:i,salt:o,personalization:a}=e;if(i!==void 0&&(i.length<1||i.length>n))throw new Error("key length must be undefined or 1.."+n);if(o!==void 0&&o.length!==s)throw new Error("salt must be undefined or "+s);if(a!==void 0&&a.length!==r)throw new Error("personalization must be undefined or "+r)}class yw extends Hu{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,this.length=0,this.pos=0,kn(e),kn(n),this.blockLen=e,this.outputLen=n,this.buffer=new Uint8Array(e),this.buffer32=na(this.buffer)}update(e){zr(this),e=Ns(e),Le(e);const{blockLen:n,buffer:s,buffer32:r}=this,i=e.length,o=e.byteOffset,a=e.buffer;for(let c=0;c<i;){this.pos===n&&(pr(r),this.compress(r,0,!1),pr(r),this.pos=0);const l=Math.min(n-this.pos,i-c),u=o+c;if(l===n&&!(u%4)&&c+l<i){const f=new Uint32Array(a,u,Math.floor((i-c)/4));pr(f);for(let d=0;c+n<i;d+=r.length,c+=n)this.length+=n,this.compress(f,d,!1);pr(f);continue}s.set(e.subarray(c,c+l),this.pos),this.pos+=l,this.length+=l,c+=l}return this}digestInto(e){zr(this),hp(e,this);const{pos:n,buffer32:s}=this;this.finished=!0,Qt(this.buffer.subarray(n)),pr(s),this.compress(s,0,!0),pr(s);const r=na(e);this.get().forEach((i,o)=>r[o]=qn(i))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){const{buffer:n,length:s,finished:r,destroyed:i,outputLen:o,pos:a}=this;return e||(e=new this.constructor({dkLen:o})),e.set(...this.get()),e.buffer.set(n),e.destroyed=i,e.finished=r,e.length=s,e.pos=a,e.outputLen=o,e}clone(){return this._cloneInto()}}class mw extends yw{constructor(e={}){const n=e.dkLen===void 0?64:e.dkLen;super(128,n),this.v0l=We[0]|0,this.v0h=We[1]|0,this.v1l=We[2]|0,this.v1h=We[3]|0,this.v2l=We[4]|0,this.v2h=We[5]|0,this.v3l=We[6]|0,this.v3h=We[7]|0,this.v4l=We[8]|0,this.v4h=We[9]|0,this.v5l=We[10]|0,this.v5h=We[11]|0,this.v6l=We[12]|0,this.v6h=We[13]|0,this.v7l=We[14]|0,this.v7h=We[15]|0,bw(n,e,64,16,16);let{key:s,personalization:r,salt:i}=e,o=0;if(s!==void 0&&(s=Ns(s),o=s.length),this.v0l^=this.outputLen|o<<8|65536|1<<24,i!==void 0){i=Ns(i);const a=na(i);this.v4l^=qn(a[0]),this.v4h^=qn(a[1]),this.v5l^=qn(a[2]),this.v5h^=qn(a[3])}if(r!==void 0){r=Ns(r);const a=na(r);this.v6l^=qn(a[0]),this.v6h^=qn(a[1]),this.v7l^=qn(a[2]),this.v7h^=qn(a[3])}if(s!==void 0){const a=new Uint8Array(this.blockLen);a.set(s),this.update(a)}}get(){let{v0l:e,v0h:n,v1l:s,v1h:r,v2l:i,v2h:o,v3l:a,v3h:c,v4l:l,v4h:u,v5l:f,v5h:d,v6l:h,v6h:p,v7l:b,v7h:S}=this;return[e,n,s,r,i,o,a,c,l,u,f,d,h,p,b,S]}set(e,n,s,r,i,o,a,c,l,u,f,d,h,p,b,S){this.v0l=e|0,this.v0h=n|0,this.v1l=s|0,this.v1h=r|0,this.v2l=i|0,this.v2h=o|0,this.v3l=a|0,this.v3h=c|0,this.v4l=l|0,this.v4h=u|0,this.v5l=f|0,this.v5h=d|0,this.v6l=h|0,this.v6h=p|0,this.v7l=b|0,this.v7h=S|0}compress(e,n,s){this.get().forEach((c,l)=>Y[l]=c),Y.set(We,16);let{h:r,l:i}=yp(BigInt(this.length));Y[24]=We[8]^i,Y[25]=We[9]^r,s&&(Y[28]=~Y[28],Y[29]=~Y[29]);let o=0;const a=iw;for(let c=0;c<12;c++)us(0,4,8,12,e,n+2*a[o++]),ls(0,4,8,12,e,n+2*a[o++]),us(1,5,9,13,e,n+2*a[o++]),ls(1,5,9,13,e,n+2*a[o++]),us(2,6,10,14,e,n+2*a[o++]),ls(2,6,10,14,e,n+2*a[o++]),us(3,7,11,15,e,n+2*a[o++]),ls(3,7,11,15,e,n+2*a[o++]),us(0,5,10,15,e,n+2*a[o++]),ls(0,5,10,15,e,n+2*a[o++]),us(1,6,11,12,e,n+2*a[o++]),ls(1,6,11,12,e,n+2*a[o++]),us(2,7,8,13,e,n+2*a[o++]),ls(2,7,8,13,e,n+2*a[o++]),us(3,4,9,14,e,n+2*a[o++]),ls(3,4,9,14,e,n+2*a[o++]);this.v0l^=Y[0]^Y[16],this.v0h^=Y[1]^Y[17],this.v1l^=Y[2]^Y[18],this.v1h^=Y[3]^Y[19],this.v2l^=Y[4]^Y[20],this.v2h^=Y[5]^Y[21],this.v3l^=Y[6]^Y[22],this.v3h^=Y[7]^Y[23],this.v4l^=Y[8]^Y[24],this.v4h^=Y[9]^Y[25],this.v5l^=Y[10]^Y[26],this.v5h^=Y[11]^Y[27],this.v6l^=Y[12]^Y[28],this.v6h^=Y[13]^Y[29],this.v7l^=Y[14]^Y[30],this.v7h^=Y[15]^Y[31],Qt(Y)}destroy(){this.destroyed=!0,Qt(this.buffer32),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const ww=rw(t=>new mw(t)),Os=ww;function mp(t,e,n){const s=ie.Address.serialize(t).toBytes(),r=ie.TypeTag.serialize(e).toBytes(),i=ie.u64().serialize(n.length).toBytes(),o=Os.create({dkLen:32});return o.update(new Uint8Array([240])),o.update(s),o.update(i),o.update(n),o.update(r),`0x${Ts(o.digest().slice(0,32))}`}const vw="object",Sw="ID",Mw="ascii",Ew="String",Iw="string",xw="String",_w="option",Aw="Option";function Nw(t){const e=typeof t.body=="object"&&"datatype"in t.body?t.body.datatype:null;return!!e&&ue(e.package)===ue("0x2")&&e.module==="tx_context"&&e.type==="TxContext"}function Rc(t){if(typeof t=="string")switch(t){case"address":return ie.Address;case"bool":return ie.Bool;case"u8":return ie.U8;case"u16":return ie.U16;case"u32":return ie.U32;case"u64":return ie.U64;case"u128":return ie.U128;case"u256":return ie.U256;default:throw new Error(`Unknown type signature ${t}`)}if("vector"in t){if(t.vector==="u8")return ie.byteVector().transform({input:n=>typeof n=="string"?new TextEncoder().encode(n):n,output:n=>n});const e=Rc(t.vector);return e?ie.vector(e):null}if("datatype"in t){const e=ue(t.datatype.package);if(e===ue(Jm)){if(t.datatype.module===Mw&&t.datatype.type===Ew||t.datatype.module===Iw&&t.datatype.type===xw)return ie.String;if(t.datatype.module===_w&&t.datatype.type===Aw){const n=Rc(t.datatype.typeParameters[0]);return n?ie.vector(n):null}}if(e===ue(fp)&&t.datatype.module===vw&&t.datatype.type===Sw)return ie.Address}return null}function Tw(t){return typeof t=="object"&&"Reference"in t?{ref:"&",body:wi(t.Reference)}:typeof t=="object"&&"MutableReference"in t?{ref:"&mut",body:wi(t.MutableReference)}:{ref:null,body:wi(t)}}function wi(t){if(typeof t=="string")switch(t){case"Address":return"address";case"Bool":return"bool";case"U8":return"u8";case"U16":return"u16";case"U32":return"u32";case"U64":return"u64";case"U128":return"u128";case"U256":return"u256";default:throw new Error(`Unexpected type ${t}`)}if("Vector"in t)return{vector:wi(t.Vector)};if("Struct"in t)return{datatype:{package:t.Struct.address,module:t.Struct.module,type:t.Struct.name,typeParameters:t.Struct.typeArguments.map(wi)}};if("TypeParameter"in t)return{typeParameter:t.TypeParameter};throw new Error(`Unexpected type ${JSON.stringify(t)}`)}function Ow(t){return{$kind:"Pure",Pure:{bytes:t instanceof Uint8Array?Ae(t):t.toBase64()}}}const Ot={Pure:Ow,ObjectRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"ImmOrOwnedObject",ImmOrOwnedObject:{digest:e,version:n,objectId:ue(t)}}}},SharedObjectRef({objectId:t,mutable:e,initialSharedVersion:n}){return{$kind:"Object",Object:{$kind:"SharedObject",SharedObject:{mutable:e,initialSharedVersion:n,objectId:ue(t)}}}},ReceivingRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"Receiving",Receiving:{digest:e,version:n,objectId:ue(t)}}}}};let $n;function wp(t){return{lang:(t==null?void 0:t.lang)??($n==null?void 0:$n.lang),message:t==null?void 0:t.message,abortEarly:(t==null?void 0:t.abortEarly)??($n==null?void 0:$n.abortEarly),abortPipeEarly:(t==null?void 0:t.abortPipeEarly)??($n==null?void 0:$n.abortPipeEarly)}}let tc;function kw(t){return tc==null?void 0:tc.get(t)}let nc;function jw(t){return nc==null?void 0:nc.get(t)}let sc;function Cw(t,e){var n;return(n=sc==null?void 0:sc.get(t))==null?void 0:n.get(e)}function vp(t){var n,s;const e=typeof t;return e==="string"?`"${t}"`:e==="number"||e==="bigint"||e==="boolean"?`${t}`:e==="object"||e==="function"?(t&&((s=(n=Object.getPrototypeOf(t))==null?void 0:n.constructor)==null?void 0:s.name))??"null":e}function Ct(t,e,n,s,r){const i=r&&"input"in r?r.input:n.value,o=(r==null?void 0:r.expected)??t.expects??null,a=(r==null?void 0:r.received)??vp(i),c={kind:t.kind,type:t.type,input:i,expected:o,received:a,message:`Invalid ${e}: ${o?`Expected ${o} but r`:"R"}eceived ${a}`,requirement:t.requirement,path:r==null?void 0:r.path,issues:r==null?void 0:r.issues,lang:s.lang,abortEarly:s.abortEarly,abortPipeEarly:s.abortPipeEarly},l=t.kind==="schema",u=(r==null?void 0:r.message)??t.message??Cw(t.reference,c.lang)??(l?jw(c.lang):null)??s.message??kw(c.lang);u!==void 0&&(c.message=typeof u=="function"?u(c):u),l&&(n.typed=!1),n.issues?n.issues.push(c):n.issues=[c]}function ut(t){return{version:1,vendor:"valibot",validate(e){return t["~run"]({value:e},wp())}}}function Dw(t,e){return Object.hasOwn(t,e)&&e!=="__proto__"&&e!=="prototype"&&e!=="constructor"}function Bw(t,e){const n=[...new Set(t)];return n.length>1?`(${n.join(` ${e} `)})`:n[0]??"never"}var Uw=class extends Error{constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function Xu(t,e){return{kind:"validation",type:"check",reference:Xu,async:!1,expects:null,requirement:t,message:e,"~run"(n,s){return n.typed&&!this.requirement(n.value)&&Ct(this,"input",n,s),n}}}function Nt(t){return{kind:"validation",type:"integer",reference:Nt,async:!1,expects:null,requirement:Number.isInteger,message:t,"~run"(e,n){return e.typed&&!this.requirement(e.value)&&Ct(this,"integer",e,n),e}}}function _a(t){return{kind:"transformation",type:"transform",reference:_a,async:!1,operation:t,"~run"(e){return e.value=this.operation(e.value),e}}}function Lw(t,e,n){return typeof t.fallback=="function"?t.fallback(e,n):t.fallback}function Aa(t,e,n){return typeof t.default=="function"?t.default(e,n):t.default}function $c(t,e){return!t["~run"]({value:e},{abortEarly:!0}).issues}function we(t,e){return{kind:"schema",type:"array",reference:we,expects:"Array",async:!1,item:t,message:e,get"~standard"(){return ut(this)},"~run"(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<r.length;o++){const a=r[o],c=this.item["~run"]({value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Ct(this,"type",n,s);return n}}}function Sp(t){return{kind:"schema",type:"bigint",reference:Sp,expects:"bigint",async:!1,message:t,get"~standard"(){return ut(this)},"~run"(e,n){return typeof e.value=="bigint"?e.typed=!0:Ct(this,"type",e,n),e}}}function Gr(t){return{kind:"schema",type:"boolean",reference:Gr,expects:"boolean",async:!1,message:t,get"~standard"(){return ut(this)},"~run"(e,n){return typeof e.value=="boolean"?e.typed=!0:Ct(this,"type",e,n),e}}}function Vc(t){return{kind:"schema",type:"lazy",reference:Vc,expects:"unknown",async:!1,getter:t,get"~standard"(){return ut(this)},"~run"(e,n){return this.getter(e.value)["~run"](e,n)}}}function Ye(t,e){return{kind:"schema",type:"literal",reference:Ye,expects:vp(t),async:!1,literal:t,message:e,get"~standard"(){return ut(this)},"~run"(n,s){return n.value===this.literal?n.typed=!0:Ct(this,"type",n,s),n}}}function $e(t,e){return{kind:"schema",type:"nullable",reference:$e,expects:`(${t.expects} | null)`,async:!1,wrapped:t,default:e,get"~standard"(){return ut(this)},"~run"(n,s){return n.value===null&&(this.default!==void 0&&(n.value=Aa(this,n,s)),n.value===null)?(n.typed=!0,n):this.wrapped["~run"](n,s)}}}function Di(t,e){return{kind:"schema",type:"nullish",reference:Di,expects:`(${t.expects} | null | undefined)`,async:!1,wrapped:t,default:e,get"~standard"(){return ut(this)},"~run"(n,s){return(n.value===null||n.value===void 0)&&(this.default!==void 0&&(n.value=Aa(this,n,s)),n.value===null||n.value===void 0)?(n.typed=!0,n):this.wrapped["~run"](n,s)}}}function Tt(t){return{kind:"schema",type:"number",reference:Tt,expects:"number",async:!1,message:t,get"~standard"(){return ut(this)},"~run"(e,n){return typeof e.value=="number"&&!isNaN(e.value)?e.typed=!0:Ct(this,"type",e,n),e}}}function de(t,e){return{kind:"schema",type:"object",reference:de,expects:"Object",async:!1,entries:t,message:e,get"~standard"(){return ut(this)},"~run"(n,s){var i;const r=n.value;if(r&&typeof r=="object"){n.typed=!0,n.value={};for(const o in this.entries){const a=this.entries[o];if(o in r||(a.type==="exact_optional"||a.type==="optional"||a.type==="nullish")&&a.default!==void 0){const c=o in r?r[o]:Aa(a),l=a["~run"]({value:c},s);if(l.issues){const u={type:"object",origin:"value",input:r,key:o,value:c};for(const f of l.issues)f.path?f.path.unshift(u):f.path=[u],(i=n.issues)==null||i.push(f);if(n.issues||(n.issues=l.issues),s.abortEarly){n.typed=!1;break}}l.typed||(n.typed=!1),n.value[o]=l.value}else if(a.fallback!==void 0)n.value[o]=Lw(a);else if(a.type!=="exact_optional"&&a.type!=="optional"&&a.type!=="nullish"&&(Ct(this,"key",n,s,{input:void 0,expected:`"${o}"`,path:[{type:"object",origin:"key",input:r,key:o,value:r[o]}]}),s.abortEarly))break}}else Ct(this,"type",n,s);return n}}}function qt(t,e){return{kind:"schema",type:"optional",reference:qt,expects:`(${t.expects} | undefined)`,async:!1,wrapped:t,default:e,get"~standard"(){return ut(this)},"~run"(n,s){return n.value===void 0&&(this.default!==void 0&&(n.value=Aa(this,n,s)),n.value===void 0)?(n.typed=!0,n):this.wrapped["~run"](n,s)}}}function Bi(t,e,n){return{kind:"schema",type:"record",reference:Bi,expects:"Object",async:!1,key:t,value:e,message:n,get"~standard"(){return ut(this)},"~run"(s,r){var o,a;const i=s.value;if(i&&typeof i=="object"){s.typed=!0,s.value={};for(const c in i)if(Dw(i,c)){const l=i[c],u=this.key["~run"]({value:c},r);if(u.issues){const d={type:"object",origin:"key",input:i,key:c,value:l};for(const h of u.issues)h.path=[d],(o=s.issues)==null||o.push(h);if(s.issues||(s.issues=u.issues),r.abortEarly){s.typed=!1;break}}const f=this.value["~run"]({value:l},r);if(f.issues){const d={type:"object",origin:"value",input:i,key:c,value:l};for(const h of f.issues)h.path?h.path.unshift(d):h.path=[d],(a=s.issues)==null||a.push(h);if(s.issues||(s.issues=f.issues),r.abortEarly){s.typed=!1;break}}(!u.typed||!f.typed)&&(s.typed=!1),u.typed&&(s.value[u.value]=f.value)}}else Ct(this,"type",s,r);return s}}}function xe(t){return{kind:"schema",type:"string",reference:xe,expects:"string",async:!1,message:t,get"~standard"(){return ut(this)},"~run"(e,n){return typeof e.value=="string"?e.typed=!0:Ct(this,"type",e,n),e}}}function Ju(t,e){return{kind:"schema",type:"tuple",reference:Ju,expects:"Array",async:!1,items:t,message:e,get"~standard"(){return ut(this)},"~run"(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<this.items.length;o++){const a=r[o],c=this.items[o]["~run"]({value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Ct(this,"type",n,s);return n}}}function wd(t){let e;if(t)for(const n of t)e?e.push(...n.issues):e=n.issues;return e}function Ln(t,e){return{kind:"schema",type:"union",reference:Ln,expects:Bw(t.map(n=>n.expects),"|"),async:!1,options:t,message:e,get"~standard"(){return ut(this)},"~run"(n,s){let r,i,o;for(const a of this.options){const c=a["~run"]({value:n.value},s);if(c.typed)if(c.issues)i?i.push(c):i=[c];else{r=c;break}else o?o.push(c):o=[c]}if(r)return r;if(i){if(i.length===1)return i[0];Ct(this,"type",n,s,{issues:wd(i)}),n.typed=!0}else{if((o==null?void 0:o.length)===1)return o[0];Ct(this,"type",n,s,{issues:wd(o)})}return n}}}function Ki(){return{kind:"schema",type:"unknown",reference:Ki,expects:"unknown",async:!1,get"~standard"(){return ut(this)},"~run"(t){return t.typed=!0,t}}}function Ue(t,e,n){const s=t["~run"]({value:e},wp(n));if(s.issues)throw new Uw(s.issues);return s.value}function et(...t){return{...t[0],pipe:t,get"~standard"(){return ut(this)},"~run"(e,n){for(const s of t)if(s.kind!=="metadata"){if(e.issues&&(s.kind==="schema"||s.kind==="transformation")){e.typed=!1;break}(!e.issues||!n.abortEarly&&!n.abortPipeEarly)&&(e=s["~run"](e,n))}return e}}}function lr(t){const e=Object.entries(t).map(([n,s])=>de({[n]:s}));return et(Ln(e),_a(n=>({...n,$kind:Object.keys(n)[0]})))}const Hr=et(xe(),_a(t=>ue(t)),Xu(on)),Kt=Hr,or=xe(),Dt=et(Ln([xe(),et(Tt(),Nt())]),Xu(t=>{try{return BigInt(t),BigInt(t)>=0&&BigInt(t)<=18446744073709551615n}catch{return!1}},"Invalid u64")),ks=de({objectId:Hr,version:Dt,digest:xe()}),je=et(Ln([de({GasCoin:Ye(!0)}),de({Input:et(Tt(),Nt()),type:qt(Ye("pure"))}),de({Input:et(Tt(),Nt()),type:qt(Ye("object"))}),de({Result:et(Tt(),Nt())}),de({NestedResult:Ju([et(Tt(),Nt()),et(Tt(),Nt())])})]),_a(t=>({...t,$kind:Object.keys(t)[0]}))),zw=de({budget:$e(Dt),price:$e(Dt),owner:$e(Hr),payment:$e(we(ks))}),Fc=Ln([Ye("address"),Ye("bool"),Ye("u8"),Ye("u16"),Ye("u32"),Ye("u64"),Ye("u128"),Ye("u256"),de({vector:Vc(()=>Fc)}),de({datatype:de({package:xe(),module:xe(),type:xe(),typeParameters:we(Vc(()=>Fc))})}),de({typeParameter:et(Tt(),Nt())})]),Pw=de({ref:$e(Ln([Ye("&"),Ye("&mut")])),body:Fc}),Rw=de({package:Kt,module:xe(),function:xe(),typeArguments:we(xe()),arguments:we(je),_argumentTypes:qt($e(we(Pw)))}),$w=de({name:xe(),inputs:Bi(xe(),Ln([je,we(je)])),data:Bi(xe(),Ki())}),Vw=lr({MoveCall:Rw,TransferObjects:de({objects:we(je),address:je}),SplitCoins:de({coin:je,amounts:we(je)}),MergeCoins:de({destination:je,sources:we(je)}),Publish:de({modules:we(or),dependencies:we(Kt)}),MakeMoveVec:de({type:$e(xe()),elements:we(je)}),Upgrade:de({modules:we(or),dependencies:we(Kt),package:Kt,ticket:je}),$Intent:$w}),Mp=lr({ImmOrOwnedObject:ks,SharedObject:de({objectId:Kt,initialSharedVersion:Dt,mutable:Gr()}),Receiving:ks}),Fw=lr({Object:Mp,Pure:de({bytes:or}),UnresolvedPure:de({value:Ki()}),UnresolvedObject:de({objectId:Kt,version:qt($e(Dt)),digest:qt($e(xe())),initialSharedVersion:qt($e(Dt)),mutable:qt($e(Gr()))})}),vd=lr({Object:Mp,Pure:de({bytes:or})}),Ep=lr({None:Ye(!0),Epoch:Dt}),To=de({version:Ye(2),sender:Di(Hr),expiration:Di(Ep),gasData:zw,inputs:we(Fw),commands:we(Vw)}),Rt={MoveCall(t){const[e,n="",s=""]="target"in t?t.target.split("::"):[t.package,t.module,t.function];return{$kind:"MoveCall",MoveCall:{package:e,module:n,function:s,typeArguments:t.typeArguments??[],arguments:t.arguments??[]}}},TransferObjects(t,e){return{$kind:"TransferObjects",TransferObjects:{objects:t.map(n=>Ue(je,n)),address:Ue(je,e)}}},SplitCoins(t,e){return{$kind:"SplitCoins",SplitCoins:{coin:Ue(je,t),amounts:e.map(n=>Ue(je,n))}}},MergeCoins(t,e){return{$kind:"MergeCoins",MergeCoins:{destination:Ue(je,t),sources:e.map(n=>Ue(je,n))}}},Publish({modules:t,dependencies:e}){return{$kind:"Publish",Publish:{modules:t.map(n=>typeof n=="string"?n:Ae(new Uint8Array(n))),dependencies:e.map(n=>Nn(n))}}},Upgrade({modules:t,dependencies:e,package:n,ticket:s}){return{$kind:"Upgrade",Upgrade:{modules:t.map(r=>typeof r=="string"?r:Ae(new Uint8Array(r))),dependencies:e.map(r=>Nn(r)),package:n,ticket:Ue(je,s)}}},MakeMoveVec({type:t,elements:e}){return{$kind:"MakeMoveVec",MakeMoveVec:{type:t??null,elements:e.map(n=>Ue(je,n))}}},Intent({name:t,inputs:e={},data:n={}}){return{$kind:"$Intent",$Intent:{name:t,inputs:Object.fromEntries(Object.entries(e).map(([s,r])=>[s,Array.isArray(r)?r.map(i=>Ue(je,i)):Ue(je,r)])),data:n}}}},Sd=de({digest:xe(),objectId:xe(),version:Ln([et(Tt(),Nt()),xe(),Sp()])}),qw=lr({ImmOrOwned:Sd,Shared:de({objectId:Kt,initialSharedVersion:Dt,mutable:Gr()}),Receiving:Sd}),Md=lr({Object:qw,Pure:we(et(Tt(),Nt()))});function Ed(t){var n;const e=t.inputs.map((s,r)=>{if(s.Object)return{kind:"Input",index:r,value:{Object:s.Object.ImmOrOwnedObject?{ImmOrOwned:s.Object.ImmOrOwnedObject}:s.Object.Receiving?{Receiving:{digest:s.Object.Receiving.digest,version:s.Object.Receiving.version,objectId:s.Object.Receiving.objectId}}:{Shared:{mutable:s.Object.SharedObject.mutable,initialSharedVersion:s.Object.SharedObject.initialSharedVersion,objectId:s.Object.SharedObject.objectId}}},type:"object"};if(s.Pure)return{kind:"Input",index:r,value:{Pure:Array.from(ve(s.Pure.bytes))},type:"pure"};if(s.UnresolvedPure)return{kind:"Input",type:"pure",index:r,value:s.UnresolvedPure.value};if(s.UnresolvedObject)return{kind:"Input",type:"object",index:r,value:s.UnresolvedObject.objectId};throw new Error("Invalid input")});return{version:1,sender:t.sender??void 0,expiration:((n=t.expiration)==null?void 0:n.$kind)==="Epoch"?{Epoch:Number(t.expiration.Epoch)}:t.expiration?{None:!0}:null,gasConfig:{owner:t.gasData.owner??void 0,budget:t.gasData.budget??void 0,price:t.gasData.price??void 0,payment:t.gasData.payment??void 0},inputs:e,transactions:t.commands.map(s=>{if(s.MakeMoveVec)return{kind:"MakeMoveVec",type:s.MakeMoveVec.type===null?{None:!0}:{Some:cn.parseFromStr(s.MakeMoveVec.type)},objects:s.MakeMoveVec.elements.map(r=>Vn(r,e))};if(s.MergeCoins)return{kind:"MergeCoins",destination:Vn(s.MergeCoins.destination,e),sources:s.MergeCoins.sources.map(r=>Vn(r,e))};if(s.MoveCall)return{kind:"MoveCall",target:`${s.MoveCall.package}::${s.MoveCall.module}::${s.MoveCall.function}`,typeArguments:s.MoveCall.typeArguments,arguments:s.MoveCall.arguments.map(r=>Vn(r,e))};if(s.Publish)return{kind:"Publish",modules:s.Publish.modules.map(r=>Array.from(ve(r))),dependencies:s.Publish.dependencies};if(s.SplitCoins)return{kind:"SplitCoins",coin:Vn(s.SplitCoins.coin,e),amounts:s.SplitCoins.amounts.map(r=>Vn(r,e))};if(s.TransferObjects)return{kind:"TransferObjects",objects:s.TransferObjects.objects.map(r=>Vn(r,e)),address:Vn(s.TransferObjects.address,e)};if(s.Upgrade)return{kind:"Upgrade",modules:s.Upgrade.modules.map(r=>Array.from(ve(r))),dependencies:s.Upgrade.dependencies,packageId:s.Upgrade.package,ticket:Vn(s.Upgrade.ticket,e)};throw new Error(`Unknown transaction ${Object.keys(s)}`)})}}function Vn(t,e){if(t.$kind==="GasCoin")return{kind:"GasCoin"};if(t.$kind==="Result")return{kind:"Result",index:t.Result};if(t.$kind==="NestedResult")return{kind:"NestedResult",index:t.NestedResult[0],resultIndex:t.NestedResult[1]};if(t.$kind==="Input")return e[t.Input];throw new Error(`Invalid argument ${Object.keys(t)}`)}function Kw(t){var e,n,s;return Ue(To,{version:2,sender:t.sender??null,expiration:t.expiration?"Epoch"in t.expiration?{Epoch:t.expiration.Epoch}:{None:!0}:null,gasData:{owner:t.gasConfig.owner??null,budget:((e=t.gasConfig.budget)==null?void 0:e.toString())??null,price:((n=t.gasConfig.price)==null?void 0:n.toString())??null,payment:((s=t.gasConfig.payment)==null?void 0:s.map(r=>({digest:r.digest,objectId:r.objectId,version:r.version.toString()})))??null},inputs:t.inputs.map(r=>{if(r.kind==="Input"){if($c(Md,r.value)){const i=Ue(Md,r.value);if(i.Object){if(i.Object.ImmOrOwned)return{Object:{ImmOrOwnedObject:{objectId:i.Object.ImmOrOwned.objectId,version:String(i.Object.ImmOrOwned.version),digest:i.Object.ImmOrOwned.digest}}};if(i.Object.Shared)return{Object:{SharedObject:{mutable:i.Object.Shared.mutable??null,initialSharedVersion:i.Object.Shared.initialSharedVersion,objectId:i.Object.Shared.objectId}}};if(i.Object.Receiving)return{Object:{Receiving:{digest:i.Object.Receiving.digest,version:String(i.Object.Receiving.version),objectId:i.Object.Receiving.objectId}}};throw new Error("Invalid object input")}return{Pure:{bytes:Ae(new Uint8Array(i.Pure))}}}return r.type==="object"?{UnresolvedObject:{objectId:r.value}}:{UnresolvedPure:{value:r.value}}}throw new Error("Invalid input")}),commands:t.transactions.map(r=>{switch(r.kind){case"MakeMoveVec":return{MakeMoveVec:{type:"Some"in r.type?cn.tagToString(r.type.Some):null,elements:r.objects.map(i=>Fn(i))}};case"MergeCoins":return{MergeCoins:{destination:Fn(r.destination),sources:r.sources.map(i=>Fn(i))}};case"MoveCall":{const[i,o,a]=r.target.split("::");return{MoveCall:{package:i,module:o,function:a,typeArguments:r.typeArguments,arguments:r.arguments.map(c=>Fn(c))}}}case"Publish":return{Publish:{modules:r.modules.map(i=>Ae(Uint8Array.from(i))),dependencies:r.dependencies}};case"SplitCoins":return{SplitCoins:{coin:Fn(r.coin),amounts:r.amounts.map(i=>Fn(i))}};case"TransferObjects":return{TransferObjects:{objects:r.objects.map(i=>Fn(i)),address:Fn(r.address)}};case"Upgrade":return{Upgrade:{modules:r.modules.map(i=>Ae(Uint8Array.from(i))),dependencies:r.dependencies,package:r.packageId,ticket:Fn(r.ticket)}}}throw new Error(`Unknown transaction ${Object.keys(r)}`)})})}function Fn(t){switch(t.kind){case"GasCoin":return{GasCoin:!0};case"Result":return{Result:t.index};case"NestedResult":return{NestedResult:[t.index,t.resultIndex]};case"Input":return{Input:t.index}}}function Wi(t){return Ln(Object.entries(t).map(([e,n])=>de({[e]:n})))}const sn=Wi({GasCoin:Ye(!0),Input:et(Tt(),Nt()),Result:et(Tt(),Nt()),NestedResult:Ju([et(Tt(),Nt()),et(Tt(),Nt())])}),Ww=de({budget:$e(Dt),price:$e(Dt),owner:$e(Hr),payment:$e(we(ks))}),Gw=de({package:Kt,module:xe(),function:xe(),typeArguments:we(xe()),arguments:we(sn)}),Hw=de({name:xe(),inputs:Bi(xe(),Ln([sn,we(sn)])),data:Bi(xe(),Ki())}),Yw=Wi({MoveCall:Gw,TransferObjects:de({objects:we(sn),address:sn}),SplitCoins:de({coin:sn,amounts:we(sn)}),MergeCoins:de({destination:sn,sources:we(sn)}),Publish:de({modules:we(or),dependencies:we(Kt)}),MakeMoveVec:de({type:$e(xe()),elements:we(sn)}),Upgrade:de({modules:we(or),dependencies:we(Kt),package:Kt,ticket:sn}),$Intent:Hw}),Zw=Wi({ImmOrOwnedObject:ks,SharedObject:de({objectId:Kt,initialSharedVersion:Dt,mutable:Gr()}),Receiving:ks}),Qw=Wi({Object:Zw,Pure:de({bytes:or}),UnresolvedPure:de({value:Ki()}),UnresolvedObject:de({objectId:Kt,version:qt($e(Dt)),digest:qt($e(xe())),initialSharedVersion:qt($e(Dt)),mutable:qt($e(Gr()))})}),Xw=Wi({None:Ye(!0),Epoch:Dt}),Jw=de({version:Ye(2),sender:Di(Hr),expiration:Di(Xw),gasData:Ww,inputs:we(Qw),commands:we(Yw),digest:qt($e(xe()))}),e1=50,t1=1000n,n1=5e10;function Ip(t){return async function(n,s,r){return await a1(n,t),await o1(n,t),s.onlyTransactionKind||(await s1(n,t),await r1(n,t),await i1(n,t)),await r()}}async function s1(t,e){t.gasConfig.price||(t.gasConfig.price=String(await e.getReferenceGasPrice()))}async function r1(t,e){if(t.gasConfig.budget)return;const n=await e.dryRunTransactionBlock({transactionBlock:t.build({overrides:{gasData:{budget:String(n1),payment:[]}}})});if(n.effects.status.status!=="success")throw new Error(`Dry run failed, could not automatically determine a budget: ${n.effects.status.error}`,{cause:n});const s=t1*BigInt(t.gasConfig.price||1n),r=BigInt(n.effects.gasUsed.computationCost)+s,i=r+BigInt(n.effects.gasUsed.storageCost)-BigInt(n.effects.gasUsed.storageRebate);t.gasConfig.budget=String(i>r?i:r)}async function i1(t,e){if(!t.gasConfig.payment){const s=(await e.getCoins({owner:t.gasConfig.owner||t.sender,coinType:ew})).data.filter(r=>!t.inputs.find(o=>{var a;return(a=o.Object)!=null&&a.ImmOrOwnedObject?r.coinObjectId===o.Object.ImmOrOwnedObject.objectId:!1})).map(r=>({objectId:r.coinObjectId,digest:r.digest,version:r.version}));if(!s.length)throw new Error("No valid gas coins found for the transaction.");t.gasConfig.payment=s.map(r=>Ue(ks,r))}}async function o1(t,e){const n=t.inputs.filter(u=>{var f;return u.UnresolvedObject&&!(u.UnresolvedObject.version||(f=u.UnresolvedObject)!=null&&f.initialSharedVersion)}),s=[...new Set(n.map(u=>Nn(u.UnresolvedObject.objectId)))],r=s.length?qi(s,e1):[],i=(await Promise.all(r.map(u=>e.multiGetObjects({ids:u,options:{showOwner:!0}})))).flat(),o=new Map(s.map((u,f)=>[u,i[f]])),a=Array.from(o).filter(([u,f])=>f.error).map(([u,f])=>JSON.stringify(f.error));if(a.length)throw new Error(`The following input objects are invalid: ${a.join(", ")}`);const c=i.map(u=>{if(u.error||!u.data)throw new Error(`Failed to fetch object: ${u.error}`);const f=u.data.owner,d=f&&typeof f=="object"?"Shared"in f?f.Shared.initial_shared_version:"ConsensusAddressOwner"in f?f.ConsensusAddressOwner.start_version:null:null;return{objectId:u.data.objectId,digest:u.data.digest,version:u.data.version,initialSharedVersion:d}}),l=new Map(s.map((u,f)=>[u,c[f]]));for(const[u,f]of t.inputs.entries()){if(!f.UnresolvedObject)continue;let d;const h=ue(f.UnresolvedObject.objectId),p=l.get(h);f.UnresolvedObject.initialSharedVersion??(p==null?void 0:p.initialSharedVersion)?d=Ot.SharedObjectRef({objectId:h,initialSharedVersion:f.UnresolvedObject.initialSharedVersion||(p==null?void 0:p.initialSharedVersion),mutable:f.UnresolvedObject.mutable||c1(t,u)}):u1(t,u)&&(d=Ot.ReceivingRef({objectId:h,digest:f.UnresolvedObject.digest??(p==null?void 0:p.digest),version:f.UnresolvedObject.version??(p==null?void 0:p.version)})),t.inputs[t.inputs.indexOf(f)]=d??Ot.ObjectRef({objectId:h,digest:f.UnresolvedObject.digest??(p==null?void 0:p.digest),version:f.UnresolvedObject.version??(p==null?void 0:p.version)})}}async function a1(t,e){const{inputs:n,commands:s}=t,r=[],i=new Set;s.forEach(a=>{if(a.MoveCall){if(a.MoveCall._argumentTypes)return;if(a.MoveCall.arguments.map(u=>u.$kind==="Input"?t.inputs[u.Input]:null).some(u=>(u==null?void 0:u.UnresolvedPure)||(u==null?void 0:u.UnresolvedObject)&&typeof(u==null?void 0:u.UnresolvedObject.mutable)!="boolean")){const u=`${a.MoveCall.package}::${a.MoveCall.module}::${a.MoveCall.function}`;i.add(u),r.push(a.MoveCall)}}});const o=new Map;i.size>0&&await Promise.all([...i].map(async a=>{const[c,l,u]=a.split("::"),f=await e.getNormalizedMoveFunction({package:c,module:l,function:u});o.set(a,f.parameters.map(d=>Tw(d)))})),r.length&&await Promise.all(r.map(async a=>{const c=o.get(`${a.package}::${a.module}::${a.function}`);if(!c)return;const u=c.length>0&&Nw(c.at(-1))?c.slice(0,c.length-1):c;a._argumentTypes=u})),s.forEach(a=>{if(!a.MoveCall)return;const c=a.MoveCall,l=`${c.package}::${c.module}::${c.function}`,u=c._argumentTypes;if(u){if(u.length!==a.MoveCall.arguments.length)throw new Error(`Incorrect number of arguments for ${l}`);u.forEach((f,d)=>{var B,T;const h=c.arguments[d];if(h.$kind!=="Input")return;const p=n[h.Input];if(!p.UnresolvedPure&&!p.UnresolvedObject)return;const b=((B=p.UnresolvedPure)==null?void 0:B.value)??((T=p.UnresolvedObject)==null?void 0:T.objectId),S=Rc(f.body);if(S){h.type="pure",n[n.indexOf(p)]=Ot.Pure(S.serialize(b));return}if(typeof b!="string")throw new Error(`Expect the argument to be an object id string, got ${JSON.stringify(b,null,2)}`);h.type="object";const x=p.UnresolvedPure?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:b}}:p;n[h.Input]=x})}})}function c1(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=r.MoveCall._argumentTypes[i].ref!=="&"||n}(r.$kind==="MakeMoveVec"||r.$kind==="MergeCoins"||r.$kind==="SplitCoins"||r.$kind==="TransferObjects")&&(n=!0)}),n}function u1(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=l1(r.MoveCall._argumentTypes[i])||n}}),n}function l1(t){return typeof t.body!="object"||!("datatype"in t.body)?!1:t.body.datatype.package==="0x2"&&t.body.datatype.module==="transfer"&&t.body.datatype.type==="Receiving"}function xp(t,e){return!!(t.inputs.some(n=>n.UnresolvedObject||n.UnresolvedPure)||!e.onlyTransactionKind&&(!t.gasConfig.price||!t.gasConfig.budget||!t.gasConfig.payment))}async function d1(t,e,n){var i;if(h1(t),!xp(t,e))return await Id(t),n();const s=f1(e);return(((i=s.core)==null?void 0:i.resolveTransactionPlugin())??Ip(s))(t,e,async()=>{await Id(t),await n()})}function Id(t){t.inputs.forEach((e,n)=>{if(e.$kind!=="Object"&&e.$kind!=="Pure")throw new Error(`Input at index ${n} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(e)}`)})}function f1(t){if(!t.client)throw new Error("No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.");return t.client}function h1(t){for(const e of t.commands)switch(e.$kind){case"SplitCoins":e.SplitCoins.amounts.forEach(n=>{xd(n,ie.U64,t)});break;case"TransferObjects":xd(e.TransferObjects.address,ie.Address,t);break}}function xd(t,e,n){if(t.$kind!=="Input")return;const s=n.inputs[t.Input];s.$kind==="UnresolvedPure"&&(n.inputs[t.Input]=Ot.Pure(e.serialize(s.UnresolvedPure.value)))}function p1(t){function e(n){return t(n)}return e.system=n=>{const s=n==null?void 0:n.mutable;return e(s!==void 0?Ot.SharedObjectRef({objectId:"0x5",initialSharedVersion:1,mutable:s}):{$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x5",initialSharedVersion:1}})},e.clock=()=>e(Ot.SharedObjectRef({objectId:"0x6",initialSharedVersion:1,mutable:!1})),e.random=()=>e({$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x8",mutable:!1}}),e.denyList=n=>e({$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x403",mutable:n==null?void 0:n.mutable}}),e.option=({type:n,value:s})=>r=>r.moveCall({typeArguments:[n],target:`0x1::option::${s===null?"none":"some"}`,arguments:s===null?[]:[r.object(s)]}),e}function g1(t){function e(n,s){if(typeof n=="string")return t(mi(n).serialize(s));if(n instanceof Uint8Array||Fu(n))return t(n);throw new Error("tx.pure must be called either a bcs type name, or a serialized bcs value")}return e.u8=n=>t(ie.U8.serialize(n)),e.u16=n=>t(ie.U16.serialize(n)),e.u32=n=>t(ie.U32.serialize(n)),e.u64=n=>t(ie.U64.serialize(n)),e.u128=n=>t(ie.U128.serialize(n)),e.u256=n=>t(ie.U256.serialize(n)),e.bool=n=>t(ie.Bool.serialize(n)),e.string=n=>t(ie.String.serialize(n)),e.address=n=>t(ie.Address.serialize(n)),e.id=e.address,e.vector=(n,s)=>t(ie.vector(mi(n)).serialize(s)),e.option=(n,s)=>t(ie.option(mi(n)).serialize(s)),e}function b1(t,e){const n=Array.from(`${t}::`).map(r=>r.charCodeAt(0)),s=new Uint8Array(n.length+e.length);return s.set(n),s.set(e,n.length),Os(s,{dkLen:32})}function sa(t){if(typeof t=="string")return ue(t);if(t.Object)return t.Object.ImmOrOwnedObject?ue(t.Object.ImmOrOwnedObject.objectId):t.Object.Receiving?ue(t.Object.Receiving.objectId):ue(t.Object.SharedObject.objectId);if(t.UnresolvedObject)return ue(t.UnresolvedObject.objectId)}function y1(t,e,n){const s=r=>{switch(r.$kind){case"Input":{const i=e.get(r.Input);if(i===void 0)throw new Error(`Input ${r.Input} not found in input mapping`);return{...r,Input:i}}case"Result":{const i=n.get(r.Result);return i!==void 0?{...r,Result:i}:r}case"NestedResult":{const i=n.get(r.NestedResult[0]);return i!==void 0?{...r,NestedResult:[i,r.NestedResult[1]]}:r}default:return r}};switch(t.$kind){case"MoveCall":t.MoveCall.arguments=t.MoveCall.arguments.map(s);break;case"TransferObjects":t.TransferObjects.objects=t.TransferObjects.objects.map(s),t.TransferObjects.address=s(t.TransferObjects.address);break;case"SplitCoins":t.SplitCoins.coin=s(t.SplitCoins.coin),t.SplitCoins.amounts=t.SplitCoins.amounts.map(s);break;case"MergeCoins":t.MergeCoins.destination=s(t.MergeCoins.destination),t.MergeCoins.sources=t.MergeCoins.sources.map(s);break;case"MakeMoveVec":t.MakeMoveVec.elements=t.MakeMoveVec.elements.map(s);break;case"Upgrade":t.Upgrade.ticket=s(t.Upgrade.ticket);break;case"$Intent":{const r=t.$Intent.inputs;t.$Intent.inputs={};for(const[i,o]of Object.entries(r))t.$Intent.inputs[i]=Array.isArray(o)?o.map(s):s(o);break}}}function _d(t){return ue(t).replace("0x","")}class At{constructor(e){this.version=2,this.sender=(e==null?void 0:e.sender)??null,this.expiration=(e==null?void 0:e.expiration)??null,this.inputs=(e==null?void 0:e.inputs)??[],this.commands=(e==null?void 0:e.commands)??[],this.gasData=(e==null?void 0:e.gasData)??{budget:null,price:null,owner:null,payment:null}}static fromKindBytes(e){const s=ie.TransactionKind.parse(e).ProgrammableTransaction;if(!s)throw new Error("Unable to deserialize from bytes.");return At.restore({version:2,sender:null,expiration:null,gasData:{budget:null,owner:null,payment:null,price:null},inputs:s.inputs,commands:s.commands})}static fromBytes(e){const n=ie.TransactionData.parse(e),s=n==null?void 0:n.V1,r=s.kind.ProgrammableTransaction;if(!s||!r)throw new Error("Unable to deserialize from bytes.");return At.restore({version:2,sender:s.sender,expiration:s.expiration,gasData:s.gasData,inputs:r.inputs,commands:r.commands})}static restore(e){return e.version===2?new At(Ue(To,e)):new At(Ue(To,Kw(e)))}static getDigestFromBytes(e){const n=b1("TransactionData",e);return Ma(n)}get gasConfig(){return this.gasData}set gasConfig(e){this.gasData=e}build({maxSizeBytes:e=1/0,overrides:n,onlyTransactionKind:s}={}){const r=this.inputs,i=this.commands,o={ProgrammableTransaction:{inputs:r,commands:i}};if(s)return ie.TransactionKind.serialize(o,{maxSize:e}).toBytes();const a=(n==null?void 0:n.expiration)??this.expiration,c=(n==null?void 0:n.sender)??this.sender,l={...this.gasData,...n==null?void 0:n.gasConfig,...n==null?void 0:n.gasData};if(!c)throw new Error("Missing transaction sender");if(!l.budget)throw new Error("Missing gas budget");if(!l.payment)throw new Error("Missing gas payment");if(!l.price)throw new Error("Missing gas price");const u={sender:_d(c),expiration:a||{None:!0},gasData:{payment:l.payment,owner:_d(this.gasData.owner??c),price:BigInt(l.price),budget:BigInt(l.budget)},kind:{ProgrammableTransaction:{inputs:r,commands:i}}};return ie.TransactionData.serialize({V1:u},{maxSize:e}).toBytes()}addInput(e,n){const s=this.inputs.length;return this.inputs.push(n),{Input:s,type:e,$kind:"Input"}}getInputUses(e,n){this.mapArguments((s,r)=>(s.$kind==="Input"&&s.Input===e&&n(s,r),s))}mapCommandArguments(e,n){const s=this.commands[e];switch(s.$kind){case"MoveCall":s.MoveCall.arguments=s.MoveCall.arguments.map(i=>n(i,s,e));break;case"TransferObjects":s.TransferObjects.objects=s.TransferObjects.objects.map(i=>n(i,s,e)),s.TransferObjects.address=n(s.TransferObjects.address,s,e);break;case"SplitCoins":s.SplitCoins.coin=n(s.SplitCoins.coin,s,e),s.SplitCoins.amounts=s.SplitCoins.amounts.map(i=>n(i,s,e));break;case"MergeCoins":s.MergeCoins.destination=n(s.MergeCoins.destination,s,e),s.MergeCoins.sources=s.MergeCoins.sources.map(i=>n(i,s,e));break;case"MakeMoveVec":s.MakeMoveVec.elements=s.MakeMoveVec.elements.map(i=>n(i,s,e));break;case"Upgrade":s.Upgrade.ticket=n(s.Upgrade.ticket,s,e);break;case"$Intent":const r=s.$Intent.inputs;s.$Intent.inputs={};for(const[i,o]of Object.entries(r))s.$Intent.inputs[i]=Array.isArray(o)?o.map(a=>n(a,s,e)):n(o,s,e);break;case"Publish":break;default:throw new Error(`Unexpected transaction kind: ${s.$kind}`)}}mapArguments(e){for(const n of this.commands.keys())this.mapCommandArguments(n,e)}replaceCommand(e,n,s=e){if(!Array.isArray(n)){this.commands[e]=n;return}const r=n.length-1;this.commands.splice(e,1,...structuredClone(n)),this.mapArguments((i,o,a)=>{if(a<e+n.length)return i;if(typeof s!="number"&&(i.$kind==="Result"&&i.Result===e||i.$kind==="NestedResult"&&i.NestedResult[0]===e)){if(!("NestedResult"in i)||i.NestedResult[1]===0)return Ue(je,structuredClone(s));throw new Error(`Cannot replace command ${e} with a specific result type: NestedResult[${e}, ${i.NestedResult[1]}] references a nested element that cannot be mapped to the replacement result`)}switch(i.$kind){case"Result":i.Result===e&&typeof s=="number"&&(i.Result=s),i.Result>e&&(i.Result+=r);break;case"NestedResult":if(i.NestedResult[0]===e&&typeof s=="number")return{$kind:"NestedResult",NestedResult:[s,i.NestedResult[1]]};i.NestedResult[0]>e&&(i.NestedResult[0]+=r);break}return i})}replaceCommandWithTransaction(e,n,s){if(s.$kind!=="Result"&&s.$kind!=="NestedResult")throw new Error("Result must be of kind Result or NestedResult");this.insertTransaction(e,n),this.replaceCommand(e+n.commands.length,[],"Result"in s?{NestedResult:[s.Result+e,0]}:{NestedResult:[s.NestedResult[0]+e,s.NestedResult[1]]})}insertTransaction(e,n){var a,c;const s=new Map,r=new Map;for(let l=0;l<n.inputs.length;l++){const u=n.inputs[l],f=sa(u);let d=-1;if(f!==void 0&&(d=this.inputs.findIndex(h=>sa(h)===f),d!==-1&&((a=this.inputs[d].Object)!=null&&a.SharedObject)&&((c=u.Object)!=null&&c.SharedObject)&&(this.inputs[d].Object.SharedObject.mutable=this.inputs[d].Object.SharedObject.mutable||u.Object.SharedObject.mutable)),d!==-1)s.set(l,d);else{const h=this.inputs.length;this.inputs.push(u),s.set(l,h)}}for(let l=0;l<n.commands.length;l++)r.set(l,e+l);const i=[];for(let l=0;l<n.commands.length;l++){const u=structuredClone(n.commands[l]);y1(u,s,r),i.push(u)}this.commands.splice(e,0,...i);const o=i.length;o>0&&this.mapArguments((l,u,f)=>{if(f>=e&&f<e+i.length)return l;switch(l.$kind){case"Result":l.Result>=e&&(l.Result+=o);break;case"NestedResult":l.NestedResult[0]>=e&&(l.NestedResult[0]+=o);break}return l})}getDigest(){const e=this.build({onlyTransactionKind:!1});return At.getDigestFromBytes(e)}snapshot(){return Ue(To,this)}shallowClone(){return new At({version:this.version,sender:this.sender,expiration:this.expiration,gasData:{...this.gasData},inputs:[...this.inputs],commands:[...this.commands]})}applyResolvedData(e){this.sender||(this.sender=e.sender??null),this.expiration||(this.expiration=e.expiration??null),this.gasData.budget||(this.gasData.budget=e.gasData.budget),this.gasData.owner||(this.gasData.owner=e.gasData.owner??null),this.gasData.payment||(this.gasData.payment=e.gasData.payment),this.gasData.price||(this.gasData.price=e.gasData.price);for(let n=0;n<this.inputs.length;n++){const s=this.inputs[n],r=e.inputs[n];switch(s.$kind){case"UnresolvedPure":if(r.$kind!=="Pure")throw new Error(`Expected input at index ${n} to resolve to a Pure argument, but got ${JSON.stringify(r)}`);this.inputs[n]=r;break;case"UnresolvedObject":if(r.$kind!=="Object")throw new Error(`Expected input at index ${n} to resolve to an Object argument, but got ${JSON.stringify(r)}`);if(r.Object.$kind==="ImmOrOwnedObject"||r.Object.$kind==="Receiving"){const i=s.UnresolvedObject,o=r.Object.ImmOrOwnedObject??r.Object.Receiving;if(ue(i.objectId)!==ue(o.objectId)||i.version!=null&&i.version!==o.version||i.digest!=null&&i.digest!==o.digest||i.mutable!=null||i.initialSharedVersion!=null)throw new Error(`Input at index ${n} did not match unresolved object. ${JSON.stringify(i)} is not compatible with ${JSON.stringify(o)}`)}else if(r.Object.$kind==="SharedObject"){const i=s.UnresolvedObject,o=r.Object.SharedObject;if(ue(i.objectId)!==ue(o.objectId)||i.initialSharedVersion!=null&&i.initialSharedVersion!==o.initialSharedVersion||i.mutable!=null&&i.mutable!==o.mutable||i.version!=null||i.digest!=null)throw new Error(`Input at index ${n} did not match unresolved object. ${JSON.stringify(i)} is not compatible with ${JSON.stringify(o)}`)}else throw new Error(`Input at index ${n} resolved to an unexpected Object kind: ${JSON.stringify(r.Object)}`);this.inputs[n]=r;break}}}}var _p=t=>{throw TypeError(t)},Ap=(t,e,n)=>e.has(t)||_p("Cannot "+n),it=(t,e,n)=>(Ap(t,e,"read from private field"),e.get(t)),Ad=(t,e,n)=>e.has(t)?_p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Nd=(t,e,n,s)=>(Ap(t,e,"write to private field"),e.set(t,n),n),$s,dt;const m1=class Np{constructor({prefix:e,cache:n}={}){Ad(this,$s),Ad(this,dt),Nd(this,$s,e??[]),Nd(this,dt,n??new Map)}read(e,n){const s=[it(this,$s),...e].join(":");if(it(this,dt).has(s))return it(this,dt).get(s);const r=n();return it(this,dt).set(s,r),typeof r=="object"&&r!==null&&"then"in r?Promise.resolve(r).then(i=>(it(this,dt).set(s,i),i)).catch(i=>{throw it(this,dt).delete(s),i}):r}readSync(e,n){const s=[it(this,$s),...e].join(":");if(it(this,dt).has(s))return it(this,dt).get(s);const r=n();return it(this,dt).set(s,r),r}clear(e){const n=[...it(this,$s),...e??[]].join(":");if(!n){it(this,dt).clear();return}for(const s of it(this,dt).keys())s.startsWith(n)&&it(this,dt).delete(s)}scope(e){return new Np({prefix:[...it(this,$s),...Array.isArray(e)?e:[e]],cache:it(this,dt)})}};$s=new WeakMap;dt=new WeakMap;let w1=m1;const Tp="1.45.2",v1="1.62.0";var Op=t=>{throw TypeError(t)},el=(t,e,n)=>e.has(t)||Op("Cannot "+n),Ze=(t,e,n)=>(el(t,e,"read from private field"),n?n.call(t):e.get(t)),ti=(t,e,n)=>e.has(t)?Op("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),co=(t,e,n,s)=>(el(t,e,"write to private field"),e.set(t,n),n),Na=(t,e,n)=>(el(t,e,"access private method"),n),Ui,is,Li,Is,_n,qc,Kc,kp,jp,tl;const S1="/",M1={"Mvr-Source":`@mysten/sui@${Tp}`};class E1{constructor({cache:e,url:n,pageSize:s=50,overrides:r}){ti(this,_n),ti(this,Ui),ti(this,is),ti(this,Li),ti(this,Is),co(this,Ui,e),co(this,is,n),co(this,Li,s),co(this,Is,{packages:r==null?void 0:r.packages,types:r==null?void 0:r.types}),I1(Ze(this,Is))}async resolvePackage({package:e}){return at(e)?{package:await Ze(this,_n,qc).load(e)}:{package:e}}async resolveType({type:e}){if(!at(e))return{type:e};const n=[...Wc(e)],s=await Ze(this,_n,Kc).loadMany(n),r={};for(let i=0;i<n.length;i++){const o=s[i];if(o instanceof Error)throw o;r[n[i]]=o}return{type:Gc(e,r)}}async resolve({types:e=[],packages:n=[]}){var u,f,d;const s=new Set;for(const h of e??[])Wc(h,s);const r=[...s],[i,o]=await Promise.all([r.length>0?Ze(this,_n,Kc).loadMany(r):[],n.length>0?Ze(this,_n,qc).loadMany(n):[]]),a={...(u=Ze(this,Is))==null?void 0:u.types};for(const[h,p]of r.entries()){const b=i[h];if(b instanceof Error)throw b;a[p]=b}const c={};for(const h of e??[]){const p=Gc(h,a);c[h]={type:p}}const l={};for(const[h,p]of(n??[]).entries()){const b=((d=(f=Ze(this,Is))==null?void 0:f.packages)==null?void 0:d[p])??o[h];if(b instanceof Error)throw b;l[p]={package:b}}return{types:c,packages:l}}}Ui=new WeakMap;is=new WeakMap;Li=new WeakMap;Is=new WeakMap;_n=new WeakSet;qc=function(){return Ze(this,Ui).readSync(["#mvrPackageDataLoader",Ze(this,is)??""],()=>{var n;const t=new Oh(async s=>{if(!Ze(this,is))throw new Error(`MVR Api URL is not set for the current client (resolving ${s.join(", ")})`);const r=await Na(this,_n,kp).call(this,s);return s.map(i=>r[i]??new Error(`Failed to resolve package: ${i}`))}),e=(n=Ze(this,Is))==null?void 0:n.packages;if(e)for(const[s,r]of Object.entries(e))t.prime(s,r);return t})};Kc=function(){return Ze(this,Ui).readSync(["#mvrTypeDataLoader",Ze(this,is)??""],()=>{var n;const t=new Oh(async s=>{if(!Ze(this,is))throw new Error(`MVR Api URL is not set for the current client (resolving ${s.join(", ")})`);const r=await Na(this,_n,jp).call(this,s);return s.map(i=>r[i]??new Error(`Failed to resolve type: ${i}`))}),e=(n=Ze(this,Is))==null?void 0:n.types;if(e)for(const[s,r]of Object.entries(e))t.prime(s,r);return t})};kp=async function(t){if(t.length===0)return{};const e=qi(t,Ze(this,Li)),n={};return await Promise.all(e.map(async s=>{var i;const r=await Na(this,_n,tl).call(this,"/v1/resolution/bulk",{names:s});if(r!=null&&r.resolution)for(const o of Object.keys(r==null?void 0:r.resolution)){const a=(i=r.resolution[o])==null?void 0:i.package_id;a&&(n[o]=a)}})),n};jp=async function(t){if(t.length===0)return{};const e=qi(t,Ze(this,Li)),n={};return await Promise.all(e.map(async s=>{var i;const r=await Na(this,_n,tl).call(this,"/v1/struct-definition/bulk",{types:s});if(r!=null&&r.resolution)for(const o of Object.keys(r==null?void 0:r.resolution)){const a=(i=r.resolution[o])==null?void 0:i.type_tag;a&&(n[o]=a)}})),n};tl=async function(t,e){if(!Ze(this,is))throw new Error("MVR Api URL is not set for the current client");const n=await fetch(`${Ze(this,is)}${t}`,{method:"POST",headers:{"Content-Type":"application/json",...M1},body:JSON.stringify(e)});if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(`Failed to resolve types: ${s==null?void 0:s.message}`)}return n.json()};function I1(t){if(t!=null&&t.packages)for(const[e,n]of Object.entries(t.packages)){if(!Pt(e))throw new Error(`Invalid package name: ${e}`);if(!on(ue(n)))throw new Error(`Invalid package ID: ${n}`)}if(t!=null&&t.types)for(const[e,n]of Object.entries(t.types)){if(rr(e).typeParams.length>0)throw new Error("Type overrides must be first-level only. If you want to supply generic types, just pass each type individually.");const s=rr(n);if(!on(s.address))throw new Error(`Invalid type: ${n}`)}}function Wc(t,e=new Set){if(typeof t=="string"&&!at(t))return e;const n=Cp(t)?t:rr(t);at(n.address)&&e.add(`${n.address}::${n.module}::${n.name}`);for(const s of n.typeParams)Wc(s,e);return e}function Gc(t,e){const n=Cp(t)?t:rr(t),s=`${n.address}::${n.module}::${n.name}`,r=e[s];return Lr({...n,address:r?r.split("::")[0]:n.address,typeParams:n.typeParams.map(i=>Gc(i,e))})}function at(t){return t.includes(S1)||t.includes("@")||t.includes(".sui")}function Cp(t){return typeof t=="object"&&"address"in t&&"module"in t&&"name"in t&&"typeParams"in t}function x1(t){const e=new Set,n=new Set;for(const s of t.commands)switch(s.$kind){case"MakeMoveVec":s.MakeMoveVec.type&&Td([s.MakeMoveVec.type]).forEach(o=>{n.add(o)});break;case"MoveCall":const r=s.MoveCall,i=r.package.split("::")[0];if(at(i)){if(!Pt(i))throw new Error(`Invalid package name: ${i}`);e.add(i)}Td(r.typeArguments??[]).forEach(o=>{n.add(o)});break}return{packages:[...e],types:[...n]}}function _1(t,e){var n;for(const s of t.commands){if((n=s.MakeMoveVec)!=null&&n.type){if(!at(s.MakeMoveVec.type))continue;if(!e.types[s.MakeMoveVec.type])throw new Error(`No resolution found for type: ${s.MakeMoveVec.type}`);s.MakeMoveVec.type=e.types[s.MakeMoveVec.type].type}const r=s.MoveCall;if(!r)continue;const i=r.package.split("::"),o=i[0];if(at(o)&&!e.packages[o])throw new Error(`No address found for package: ${o}`);at(o)&&(i[0]=e.packages[o].package,r.package=i.join("::"));const a=r.typeArguments;if(a){for(let c=0;c<a.length;c++)if(at(a[c])){if(!e.types[a[c]])throw new Error(`No resolution found for type: ${a[c]}`);a[c]=e.types[a[c]].type}r.typeArguments=a}}}function Td(t){const e=new Set;for(const n of t)if(at(n)){if(!Nm(n))throw new Error(`Invalid type with names: ${n}`);e.add(n)}return e}const A1=t=>async(e,n,s)=>{const r=x1(e);if(r.types.length===0&&r.packages.length===0)return s();const i=await N1(n).core.mvr.resolve({types:r.types,packages:r.packages});_1(e,i),await s()};function N1(t){if(!t.client)throw new Error("No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.");return t.client}var Dp=t=>{throw TypeError(t)},nl=(t,e,n)=>e.has(t)||Dp("Cannot "+n),K=(t,e,n)=>(nl(t,e,"read from private field"),n?n.call(t):e.get(t)),wn=(t,e,n)=>e.has(t)?Dp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),_e=(t,e,n,s)=>(nl(t,e,"write to private field"),e.set(t,n),n),Ge=(t,e,n)=>(nl(t,e,"access private method"),n),qs,nr,Zn,jn,$t,Vt,un,xs,se,Ve,Bp,Oo,ko,jo,ra,Hc,sl,Up,Lp;function rc(t,e=1/0){const n={$kind:"Result",get Result(){return typeof t=="function"?t():t}},s=[],r=i=>s[i]??(s[i]={$kind:"NestedResult",get NestedResult(){return[typeof t=="function"?t():t,i]}});return new Proxy(n,{set(){throw new Error("The transaction result is a proxy, and does not support setting properties directly")},get(i,o){if(o in i)return Reflect.get(i,o);if(o===Symbol.iterator)return function*(){let c=0;for(;c<e;)yield r(c),c++};if(typeof o=="symbol")return;const a=parseInt(o,10);if(!(Number.isNaN(a)||a<0))return r(a)}})}const zp=Symbol.for("@mysten/transaction");function Pp(t){return!!t&&typeof t=="object"&&t[zp]===!0}const Od={buildPlugins:new Map,serializationPlugins:new Map},ic=Symbol.for("@mysten/transaction/registry");function ni(){try{const t=globalThis;return t[ic]||(t[ic]=Od),t[ic]}catch{return Od}}const Rp=class Yc{constructor(){wn(this,Ve),wn(this,qs),wn(this,nr),wn(this,Zn,new Map),wn(this,jn,[]),wn(this,$t,[]),wn(this,Vt,new Set),wn(this,un,new Set),wn(this,xs,new Map),wn(this,se),this.object=p1(n=>{var i,o;if(typeof n=="function")return this.object(this.add(n));if(typeof n=="object"&&$c(je,n))return n;const s=sa(n),r=K(this,se).inputs.find(a=>s===sa(a));return(i=r==null?void 0:r.Object)!=null&&i.SharedObject&&typeof n=="object"&&((o=n.Object)!=null&&o.SharedObject)&&(r.Object.SharedObject.mutable=r.Object.SharedObject.mutable||n.Object.SharedObject.mutable),r?{$kind:"Input",Input:K(this,se).inputs.indexOf(r),type:"object"}:Ge(this,Ve,ko).call(this,"object",typeof n=="string"?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:ue(n)}}:n)});const e=ni();_e(this,se,new At),_e(this,nr,[...e.buildPlugins.values()]),_e(this,qs,[...e.serializationPlugins.values()])}static fromKind(e){const n=new Yc;return _e(n,se,At.fromKindBytes(typeof e=="string"?ve(e):e)),_e(n,jn,K(n,se).inputs.slice()),_e(n,$t,K(n,se).commands.slice()),_e(n,Vt,new Set(K(n,$t).map((s,r)=>r))),n}static from(e){const n=new Yc;return Pp(e)?_e(n,se,At.restore(e.getData())):typeof e!="string"||!e.startsWith("{")?_e(n,se,At.fromBytes(typeof e=="string"?ve(e):e)):_e(n,se,At.restore(JSON.parse(e))),_e(n,jn,K(n,se).inputs.slice()),_e(n,$t,K(n,se).commands.slice()),_e(n,Vt,new Set(K(n,$t).map((s,r)=>r))),n}static registerGlobalSerializationPlugin(e,n){ni().serializationPlugins.set(e,n??e)}static unregisterGlobalSerializationPlugin(e){ni().serializationPlugins.delete(e)}static registerGlobalBuildPlugin(e,n){ni().buildPlugins.set(e,n??e)}static unregisterGlobalBuildPlugin(e){ni().buildPlugins.delete(e)}addSerializationPlugin(e){K(this,qs).push(e)}addBuildPlugin(e){K(this,nr).push(e)}addIntentResolver(e,n){if(K(this,Zn).has(e)&&K(this,Zn).get(e)!==n)throw new Error(`Intent resolver for ${e} already exists`);K(this,Zn).set(e,n)}setSender(e){K(this,se).sender=e}setSenderIfNotSet(e){K(this,se).sender||(K(this,se).sender=e)}setExpiration(e){K(this,se).expiration=e?Ue(Ep,e):null}setGasPrice(e){K(this,se).gasConfig.price=String(e)}setGasBudget(e){K(this,se).gasConfig.budget=String(e)}setGasBudgetIfNotSet(e){K(this,se).gasData.budget==null&&(K(this,se).gasConfig.budget=String(e))}setGasOwner(e){K(this,se).gasConfig.owner=e}setGasPayment(e){K(this,se).gasConfig.payment=e.map(n=>Ue(ks,n))}get blockData(){return Ed(K(this,se).snapshot())}getData(){return K(this,se).snapshot()}get[zp](){return!0}get pure(){return Object.defineProperty(this,"pure",{enumerable:!1,value:g1(e=>Fu(e)?Ge(this,Ve,ko).call(this,"pure",{$kind:"Pure",Pure:{bytes:e.toBase64()}}):Ge(this,Ve,ko).call(this,"pure",$c(vd,e)?Ue(vd,e):e instanceof Uint8Array?Ot.Pure(e):{$kind:"UnresolvedPure",UnresolvedPure:{value:e}}))}),this.pure}get gas(){return{$kind:"GasCoin",GasCoin:!0}}objectRef(...e){return this.object(Ot.ObjectRef(...e))}receivingRef(...e){return this.object(Ot.ReceivingRef(...e))}sharedObjectRef(...e){return this.object(Ot.SharedObjectRef(...e))}add(e){if(typeof e=="function"){if(K(this,xs).has(e))return K(this,xs).get(e);const n=Ge(this,Ve,Bp).call(this),s=e(n);if(!(s&&typeof s=="object"&&"then"in s))return _e(this,Vt,K(n,Vt)),K(this,xs).set(e,s),s;const r=Ge(this,Ve,Oo).call(this,{$kind:"$Intent",$Intent:{name:"AsyncTransactionThunk",inputs:{},data:{resultIndex:K(this,se).commands.length,result:null}}});K(this,un).add(Promise.resolve(s).then(o=>{r.$Intent.data.result=o}));const i=rc(()=>r.$Intent.data.resultIndex);return K(this,xs).set(e,i),i}else Ge(this,Ve,Oo).call(this,e);return rc(K(this,se).commands.length-1)}splitCoins(e,n){const s=Rt.SplitCoins(typeof e=="string"?this.object(e):Ge(this,Ve,ra).call(this,e),n.map(r=>typeof r=="number"||typeof r=="bigint"||typeof r=="string"?this.pure.u64(r):Ge(this,Ve,jo).call(this,r)));return Ge(this,Ve,Oo).call(this,s),rc(K(this,se).commands.length-1,n.length)}mergeCoins(e,n){return this.add(Rt.MergeCoins(this.object(e),n.map(s=>this.object(s))))}publish({modules:e,dependencies:n}){return this.add(Rt.Publish({modules:e,dependencies:n}))}upgrade({modules:e,dependencies:n,package:s,ticket:r}){return this.add(Rt.Upgrade({modules:e,dependencies:n,package:s,ticket:this.object(r)}))}moveCall({arguments:e,...n}){return this.add(Rt.MoveCall({...n,arguments:e==null?void 0:e.map(s=>Ge(this,Ve,jo).call(this,s))}))}transferObjects(e,n){return this.add(Rt.TransferObjects(e.map(s=>this.object(s)),typeof n=="string"?this.pure.address(n):Ge(this,Ve,jo).call(this,n)))}makeMoveVec({type:e,elements:n}){return this.add(Rt.MakeMoveVec({type:e,elements:n.map(s=>this.object(s))}))}serialize(){return JSON.stringify(Ed(K(this,se).snapshot()))}async toJSON(e={}){await this.prepareForSerialization(e);const n=this.isFullyResolved();return JSON.stringify(Ue(Jw,n?{...K(this,se).snapshot(),digest:K(this,se).getDigest()}:K(this,se).snapshot()),(s,r)=>typeof r=="bigint"?r.toString():r,2)}async sign(e){const{signer:n,...s}=e,r=await this.build(s);return n.signTransaction(r)}isFullyResolved(){return!(!K(this,se).sender||K(this,un).size>0||K(this,se).commands.some(e=>e.$Intent)||xp(K(this,se),{}))}async build(e={}){return await this.prepareForSerialization(e),await Ge(this,Ve,Hc).call(this,e),K(this,se).build({onlyTransactionKind:e.onlyTransactionKind})}async getDigest(e={}){return await this.prepareForSerialization(e),await Ge(this,Ve,Hc).call(this,e),K(this,se).getDigest()}async prepareForSerialization(e){var r;await Ge(this,Ve,Up).call(this),Ge(this,Ve,Lp).call(this);const n=new Set;for(const i of K(this,se).commands)i.$Intent&&n.add(i.$Intent.name);const s=[...K(this,qs)];for(const i of n)if(!((r=e.supportedIntents)!=null&&r.includes(i))){if(!K(this,Zn).has(i))throw new Error(`Missing intent resolver for ${i}`);s.push(K(this,Zn).get(i))}s.push(A1()),await Ge(this,Ve,sl).call(this,s,e)}};qs=new WeakMap;nr=new WeakMap;Zn=new WeakMap;jn=new WeakMap;$t=new WeakMap;Vt=new WeakMap;un=new WeakMap;xs=new WeakMap;se=new WeakMap;Ve=new WeakSet;Bp=function(){const t=new Rp;return _e(t,se,K(this,se)),_e(t,qs,K(this,qs)),_e(t,nr,K(this,nr)),_e(t,Zn,K(this,Zn)),_e(t,un,K(this,un)),_e(t,Vt,new Set(K(this,Vt))),_e(t,xs,K(this,xs)),K(this,jn).push(K(t,jn)),K(this,$t).push(K(t,$t)),t};Oo=function(t){const e=K(this,se).commands.length;return K(this,$t).push(t),K(this,Vt).add(e),K(this,se).commands.push(t),K(this,se).mapCommandArguments(e,n=>{if(n.$kind==="Result"&&!K(this,Vt).has(n.Result))throw new Error(`Result { Result: ${n.Result} } is not available to use in the current transaction`);if(n.$kind==="NestedResult"&&!K(this,Vt).has(n.NestedResult[0]))throw new Error(`Result { NestedResult: [${n.NestedResult[0]}, ${n.NestedResult[1]}] } is not available to use in the current transaction`);if(n.$kind==="Input"&&n.Input>=K(this,se).inputs.length)throw new Error(`Input { Input: ${n.Input} } references an input that does not exist in the current transaction`);return n}),t};ko=function(t,e){return K(this,jn).push(e),K(this,se).addInput(t,e)};jo=function(t){return Fu(t)?this.pure(t):Ge(this,Ve,ra).call(this,t)};ra=function(t){if(typeof t=="function"){const e=this.add(t);return typeof e=="function"?Ge(this,Ve,ra).call(this,e):Ue(je,e)}return Ue(je,t)};Hc=async function(t){if(!t.onlyTransactionKind&&!K(this,se).sender)throw new Error("Missing transaction sender");await Ge(this,Ve,sl).call(this,[...K(this,nr),d1],t)};sl=async function(t,e){try{const n=s=>{if(s>=t.length)return()=>{};const r=t[s];return async()=>{const i=n(s+1);let o=!1,a=!1;if(await r(K(this,se),e,async()=>{if(o)throw new Error(`next() was call multiple times in TransactionPlugin ${s}`);o=!0,await i(),a=!0}),!o)throw new Error(`next() was not called in TransactionPlugin ${s}`);if(!a)throw new Error(`next() was not awaited in TransactionPlugin ${s}`)}};await n(0)()}finally{_e(this,jn,K(this,se).inputs.slice()),_e(this,$t,K(this,se).commands.slice()),_e(this,Vt,new Set(K(this,$t).map((n,s)=>s)))}};Up=async function(){for(;K(this,un).size>0;){const t=Promise.all(K(this,un));K(this,un).clear(),K(this,un).add(t),await t,K(this,un).delete(t)}};Lp=function(){var o;const t=K(this,se).commands,e=K(this,se).inputs,n=K(this,$t).flat(1/0),s=K(this,jn).flat(1/0);if(n.length!==t.length)throw new Error("Unexpected number of commands found in transaction data");if(s.length!==e.length)throw new Error("Unexpected number of inputs found in transaction data");const r=n.filter(a=>{var c;return((c=a.$Intent)==null?void 0:c.name)!=="AsyncTransactionThunk"});K(this,se).commands=r,K(this,se).inputs=s,_e(this,$t,r),_e(this,jn,s),_e(this,Vt,new Set(r.map((a,c)=>c)));function i(a){var u;const c=t[a];if(((u=c.$Intent)==null?void 0:u.name)==="AsyncTransactionThunk"){const f=c.$Intent.data.result;if(f==null)throw new Error("AsyncTransactionThunk has not been resolved");return i(f.Result)}const l=r.indexOf(c);if(l===-1)throw new Error("Unable to find original index for command");return l}K(this,se).mapArguments(a=>{if(a.$kind==="Input"){const c=s.indexOf(e[a.Input]);if(c===-1)throw new Error("Input has not been resolved");return{...a,Input:c}}else if(a.$kind==="Result"){const c=i(a.Result);return{...a,Result:c}}else if(a.$kind==="NestedResult"){const c=i(a.NestedResult[0]);return{...a,NestedResult:[c,a.NestedResult[1]]}}return a});for(const[a,c]of t.entries())if(((o=c.$Intent)==null?void 0:o.name)==="AsyncTransactionThunk")try{c.$Intent.data.resultIndex=i(a)}catch{}};let Pr=Rp;const T1={"-32700":"ParseError","-32701":"OversizedRequest","-32702":"OversizedResponse","-32600":"InvalidRequest","-32601":"MethodNotFound","-32602":"InvalidParams","-32603":"InternalError","-32604":"ServerBusy","-32000":"CallExecutionFailed","-32001":"UnknownError","-32003":"SubscriptionClosed","-32004":"SubscriptionClosedWithError","-32005":"BatchesNotSupported","-32006":"TooManySubscriptions","-32050":"TransientError","-32002":"TransactionExecutionClientError"};class $p extends Error{}class Vp extends $p{constructor(e,n){super(e),this.code=n,this.type=T1[n]??"ServerError"}}class O1 extends $p{constructor(e,n,s){super(e),this.status=n,this.statusText=s}}var Fp=t=>{throw TypeError(t)},rl=(t,e,n)=>e.has(t)||Fp("Cannot "+n),De=(t,e,n)=>(rl(t,e,"read from private field"),n?n.call(t):e.get(t)),Ps=(t,e,n)=>e.has(t)?Fp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),kr=(t,e,n,s)=>(rl(t,e,"write to private field"),e.set(t,n),n),qp=(t,e,n)=>(rl(t,e,"access private method"),n),k1=(t,e,n,s)=>({set _(r){kr(t,e,r)},get _(){return De(t,e,s)}}),gs,vi,Qn,Ks,zi,Ws,ia,Kp,Wp;function j1(t){const e=new URL(t);return e.protocol=e.protocol.replace("http","ws"),e.toString()}const C1={WebSocketConstructor:typeof WebSocket<"u"?WebSocket:void 0,callTimeout:3e4,reconnectTimeout:3e3,maxReconnects:5};class D1{constructor(e,n={}){if(Ps(this,ia),Ps(this,gs,0),Ps(this,vi,0),Ps(this,Qn,null),Ps(this,Ks,null),Ps(this,zi,new Set),Ps(this,Ws,new Map),this.endpoint=e,this.options={...C1,...n},!this.options.WebSocketConstructor)throw new Error("Missing WebSocket constructor");this.endpoint.startsWith("http")&&(this.endpoint=j1(this.endpoint))}async makeRequest(e,n,s){const r=await qp(this,ia,Kp).call(this);return new Promise((i,o)=>{kr(this,gs,De(this,gs)+1),De(this,Ws).set(De(this,gs),{resolve:i,reject:o,timeout:setTimeout(()=>{De(this,Ws).delete(De(this,gs)),o(new Error(`Request timeout: ${e}`))},this.options.callTimeout)}),s==null||s.addEventListener("abort",()=>{De(this,Ws).delete(De(this,gs)),o(s.reason)}),r.send(JSON.stringify({jsonrpc:"2.0",id:De(this,gs),method:e,params:n}))}).then(({error:i,result:o})=>{if(i)throw new Vp(i.message,i.code);return o})}async subscribe(e){const n=new B1(e);return De(this,zi).add(n),await n.subscribe(this),()=>n.unsubscribe(this)}}gs=new WeakMap;vi=new WeakMap;Qn=new WeakMap;Ks=new WeakMap;zi=new WeakMap;Ws=new WeakMap;ia=new WeakSet;Kp=function(){return De(this,Ks)?De(this,Ks):(kr(this,Ks,new Promise(t=>{var e;(e=De(this,Qn))==null||e.close(),kr(this,Qn,new this.options.WebSocketConstructor(this.endpoint)),De(this,Qn).addEventListener("open",()=>{kr(this,vi,0),t(De(this,Qn))}),De(this,Qn).addEventListener("close",()=>{k1(this,vi)._++,De(this,vi)<=this.options.maxReconnects&&setTimeout(()=>{qp(this,ia,Wp).call(this)},this.options.reconnectTimeout)}),De(this,Qn).addEventListener("message",({data:n})=>{let s;try{s=JSON.parse(n)}catch(r){console.error(new Error(`Failed to parse RPC message: ${n}`,{cause:r}));return}if("id"in s&&s.id!=null&&De(this,Ws).has(s.id)){const{resolve:r,timeout:i}=De(this,Ws).get(s.id);clearTimeout(i),r(s)}else if("params"in s){const{params:r}=s;De(this,zi).forEach(i=>{i.subscriptionId===r.subscription&&r.subscription===i.subscriptionId&&i.onMessage(r.result)})}})})),De(this,Ks))};Wp=async function(){var t;return(t=De(this,Qn))==null||t.close(),kr(this,Ks,null),Promise.allSettled([...De(this,zi)].map(e=>e.subscribe(this)))};class B1{constructor(e){this.subscriptionId=null,this.subscribed=!1,this.input=e}onMessage(e){this.subscribed&&this.input.onMessage(e)}async unsubscribe(e){const{subscriptionId:n}=this;return this.subscribed=!1,n==null?!1:(this.subscriptionId=null,e.makeRequest(this.input.unsubscribe,[n]))}async subscribe(e){this.subscriptionId=null,this.subscribed=!0;const n=await e.makeRequest(this.input.method,this.input.params,this.input.signal);this.subscribed&&(this.subscriptionId=n)}}var Gp=t=>{throw TypeError(t)},il=(t,e,n)=>e.has(t)||Gp("Cannot "+n),Yt=(t,e,n)=>(il(t,e,"read from private field"),n?n.call(t):e.get(t)),uo=(t,e,n)=>e.has(t)?Gp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Zc=(t,e,n,s)=>(il(t,e,"write to private field"),e.set(t,n),n),U1=(t,e,n)=>(il(t,e,"access private method"),n),ci,an,Si,Qc,Hp;class Xc{constructor(e){uo(this,Qc),uo(this,ci,0),uo(this,an),uo(this,Si),Zc(this,an,e)}fetch(e,n){const s=Yt(this,an).fetch??fetch;if(!s)throw new Error("The current environment does not support fetch, you can provide a fetch implementation in the options for SuiHTTPTransport.");return s(e,n)}async request(e){var r,i;Zc(this,ci,Yt(this,ci)+1);const n=await this.fetch(((r=Yt(this,an).rpc)==null?void 0:r.url)??Yt(this,an).url,{method:"POST",signal:e.signal,headers:{"Content-Type":"application/json","Client-Sdk-Type":"typescript","Client-Sdk-Version":Tp,"Client-Target-Api-Version":v1,"Client-Request-Method":e.method,...(i=Yt(this,an).rpc)==null?void 0:i.headers},body:JSON.stringify({jsonrpc:"2.0",id:Yt(this,ci),method:e.method,params:e.params})});if(!n.ok)throw new O1(`Unexpected status code: ${n.status}`,n.status,n.statusText);const s=await n.json();if("error"in s&&s.error!=null)throw new Vp(s.error.message,s.error.code);return s.result}async subscribe(e){const n=await U1(this,Qc,Hp).call(this).subscribe(e);return e.signal&&(e.signal.throwIfAborted(),e.signal.addEventListener("abort",()=>{n()})),async()=>!!await n()}}ci=new WeakMap;an=new WeakMap;Si=new WeakMap;Qc=new WeakSet;Hp=function(){var t;if(!Yt(this,Si)){const e=Yt(this,an).WebSocketConstructor??WebSocket;if(!e)throw new Error("The current environment does not support WebSocket, you can provide a WebSocketConstructor in the options for SuiHTTPTransport.");Zc(this,Si,new D1(((t=Yt(this,an).websocket)==null?void 0:t.url)??Yt(this,an).url,{WebSocketConstructor:e,...Yt(this,an).websocket}))}return Yt(this,Si)};function L1(t){switch(t){case"mainnet":return"https://fullnode.mainnet.sui.io:443";case"testnet":return"https://fullnode.testnet.sui.io:443";case"devnet":return"https://fullnode.devnet.sui.io:443";case"localnet":return"http://127.0.0.1:9000";default:throw new Error(`Unknown network: ${t}`)}}class ol{constructor({network:e,base:n,cache:s=(n==null?void 0:n.cache)??new w1}){this.network=e,this.base=n??this,this.cache=s}$extend(...e){return Object.create(this,Object.fromEntries(e.map(n=>[n.name,{value:n.register(this)}])))}}const z1={mainnet:"https://mainnet.mvr.mystenlabs.com",testnet:"https://testnet.mvr.mystenlabs.com"};class Yp extends ol{constructor(e){var n,s,r;super(e),this.core=this,this.mvr=new E1({cache:this.cache.scope("core.mvr"),url:((n=e.mvr)==null?void 0:n.url)??z1[this.network],pageSize:(s=e.mvr)==null?void 0:s.pageSize,overrides:(r=e.mvr)==null?void 0:r.overrides})}async getObject(e){const{objectId:n}=e,{objects:[s]}=await this.getObjects({objectIds:[n],signal:e.signal});if(s instanceof Error)throw s;return{object:s}}async getDynamicField(e){const n=cn.parseFromStr((await this.core.mvr.resolveType({type:e.name.type})).type),s=mp(e.parentId,n,e.name.bcs),{objects:[r]}=await this.getObjects({objectIds:[s],signal:e.signal});if(r instanceof Error)throw r;const i=rr(r.type),o=await r.content;return{dynamicField:{id:r.id,digest:r.digest,version:r.version,type:r.type,previousTransaction:r.previousTransaction,name:{type:typeof i.typeParams[0]=="string"?i.typeParams[0]:Lr(i.typeParams[0]),bcs:e.name.bcs},value:{type:typeof i.typeParams[1]=="string"?i.typeParams[1]:Lr(i.typeParams[1]),bcs:o.slice(Wr+e.name.bcs.length)}}}}async waitForTransaction({signal:e,timeout:n=60*1e3,...s}){const r=e?AbortSignal.any([AbortSignal.timeout(n),e]):AbortSignal.timeout(n),i=new Promise((o,a)=>{r.addEventListener("abort",()=>a(r.reason))});for(i.catch(()=>{});;){r.throwIfAborted();try{return await this.getTransaction({...s,signal:r})}catch{await Promise.race([new Promise(o=>setTimeout(o,2e3)),i])}}}}class P1 extends Error{}class An extends P1{constructor(e,n){super(n),this.code=e}static fromResponse(e,n){switch(e.code){case"notExists":return new An(e.code,`Object ${e.object_id} does not exist`);case"dynamicFieldNotFound":return new An(e.code,`Dynamic field not found for object ${e.parent_object_id}`);case"deleted":return new An(e.code,`Object ${e.object_id} has been deleted`);case"displayError":return new An(e.code,`Display error: ${e.error}`);case"unknown":default:return new An(e.code,`Unknown error while loading object${n?` ${n}`:""}`)}}}function Zp(t){return{...At.fromBytes(t).snapshot(),bcs:t}}function Qp(t){const e=ie.TransactionEffects.parse(t);switch(e.$kind){case"V1":return R1({effects:e.V1});case"V2":return $1({bytes:t,effects:e.V2});default:throw new Error(`Unknown transaction effects version: ${e.$kind}`)}}function R1(t){throw new Error("V1 effects are not supported yet")}function $1({bytes:t,effects:e}){const n=e.changedObjects.map(([s,r])=>{var i,o,a,c,l,u;return{id:s,inputState:r.inputState.$kind==="Exist"?"Exists":"DoesNotExist",inputVersion:((i=r.inputState.Exist)==null?void 0:i[0][0])??null,inputDigest:((o=r.inputState.Exist)==null?void 0:o[0][1])??null,inputOwner:((a=r.inputState.Exist)==null?void 0:a[1])??null,outputState:r.outputState.$kind==="NotExist"?"DoesNotExist":r.outputState.$kind,outputVersion:r.outputState.$kind==="PackageWrite"?(c=r.outputState.PackageWrite)==null?void 0:c[0]:r.outputState.ObjectWrite?e.lamportVersion:null,outputDigest:r.outputState.$kind==="PackageWrite"?(l=r.outputState.PackageWrite)==null?void 0:l[1]:((u=r.outputState.ObjectWrite)==null?void 0:u[0])??null,outputOwner:r.outputState.ObjectWrite?r.outputState.ObjectWrite[1]:null,idOperation:r.idOperation.$kind}});return{bcs:t,digest:e.transactionDigest,version:2,status:e.status.$kind==="Success"?{success:!0,error:null}:{success:!1,error:e.status.Failed.error.$kind},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:e.gasObjectIndex===null?null:n[e.gasObjectIndex]??null,eventsDigest:e.eventsDigest,dependencies:e.dependencies,lamportVersion:e.lamportVersion,changedObjects:n,unchangedConsensusObjects:e.unchangedSharedObjects.map(([s,r])=>({kind:r.$kind==="MutateDeleted"?"MutateConsensusStreamEnded":r.$kind==="ReadDeleted"?"ReadConsensusStreamEnded":r.$kind,objectId:s,version:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[0]:r[r.$kind],digest:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[1]:null})),auxiliaryDataDigest:e.auxDataDigest}}var Xp=t=>{throw TypeError(t)},Jp=(t,e,n)=>e.has(t)||Xp("Cannot "+n),vt=(t,e,n)=>(Jp(t,e,"read from private field"),n?n.call(t):e.get(t)),V1=(t,e,n)=>e.has(t)?Xp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),F1=(t,e,n,s)=>(Jp(t,e,"write to private field"),e.set(t,n),n),Je;class q1 extends Yp{constructor({jsonRpcClient:e,mvr:n}){super({network:e.network,base:e,mvr:n}),V1(this,Je),F1(this,Je,e)}async getObjects(e){const n=qi(e.objectIds,50),s=[];for(const r of n){const i=await vt(this,Je).multiGetObjects({ids:r,options:{showOwner:!0,showType:!0,showBcs:!0,showPreviousTransaction:!0},signal:e.signal});for(const[o,a]of i.entries())a.error?s.push(An.fromResponse(a.error,r[o])):s.push(kd(a.data))}return{objects:s}}async getOwnedObjects(e){const n=await vt(this,Je).getOwnedObjects({owner:e.address,limit:e.limit,cursor:e.cursor,options:{showOwner:!0,showType:!0,showBcs:!0,showPreviousTransaction:!0},filter:e.type?{StructType:e.type}:null,signal:e.signal});return{objects:n.data.map(s=>{if(s.error)throw An.fromResponse(s.error);return kd(s.data)}),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getCoins(e){const n=await vt(this,Je).getCoins({owner:e.address,coinType:e.coinType,limit:e.limit,cursor:e.cursor,signal:e.signal});return{objects:n.data.map(s=>({id:s.coinObjectId,version:s.version,digest:s.digest,balance:s.balance,type:`0x2::coin::Coin<${s.coinType}>`,content:Promise.resolve(G1.serialize({id:s.coinObjectId,balance:{value:s.balance}}).toBytes()),owner:{$kind:"ObjectOwner",ObjectOwner:e.address},previousTransaction:s.previousTransaction})),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getBalance(e){const n=await vt(this,Je).getBalance({owner:e.address,coinType:e.coinType,signal:e.signal});return{balance:{coinType:n.coinType,balance:n.totalBalance}}}async getAllBalances(e){return{balances:(await vt(this,Je).getAllBalances({owner:e.address,signal:e.signal})).map(s=>({coinType:s.coinType,balance:s.totalBalance})),hasNextPage:!1,cursor:null}}async getTransaction(e){const n=await vt(this,Je).getTransactionBlock({digest:e.digest,options:{showRawInput:!0,showObjectChanges:!0,showRawEffects:!0,showEvents:!0,showEffects:!0,showBalanceChanges:!0},signal:e.signal});return{transaction:jd(n)}}async executeTransaction(e){const n=await vt(this,Je).executeTransactionBlock({transactionBlock:e.transaction,signature:e.signatures,options:{showRawEffects:!0,showEvents:!0,showObjectChanges:!0,showRawInput:!0,showEffects:!0,showBalanceChanges:!0},signal:e.signal});return{transaction:jd(n)}}async dryRunTransaction(e){const n=Pr.from(e.transaction),s=await vt(this,Je).dryRunTransactionBlock({transactionBlock:e.transaction,signal:e.signal}),{effects:r,objectTypes:i}=K1({effects:s.effects,objectChanges:s.objectChanges});return{transaction:{digest:await n.getDigest(),epoch:null,effects:r,objectTypes:Promise.resolve(i),signatures:[],transaction:Zp(e.transaction),balanceChanges:s.balanceChanges.map(o=>({coinType:o.coinType,address:eg(o.owner),amount:o.amount}))}}}async getReferenceGasPrice(e){const n=await vt(this,Je).getReferenceGasPrice({signal:e==null?void 0:e.signal});return{referenceGasPrice:String(n)}}async getDynamicFields(e){const n=await vt(this,Je).getDynamicFields({parentId:e.parentId,limit:e.limit,cursor:e.cursor});return{dynamicFields:n.data.map(s=>({id:s.objectId,type:s.objectType,name:{type:s.name.type,bcs:ve(s.bcsName)}})),hasNextPage:n.hasNextPage,cursor:n.nextCursor}}async verifyZkLoginSignature(e){const n=await vt(this,Je).verifyZkLoginSignature({bytes:e.bytes,signature:e.signature,intentScope:e.intentScope,author:e.author});return{success:n.success,errors:n.errors}}async defaultNameServiceName(e){return{data:{name:(await vt(this,Je).resolveNameServiceNames(e)).data[0]}}}resolveTransactionPlugin(){return Ip(vt(this,Je))}async getMoveFunction(e){const n=await vt(this,Je).getNormalizedMoveFunction({package:(await this.mvr.resolvePackage({package:e.packageId})).package,module:e.moduleName,function:e.name});return{function:{packageId:ue(e.packageId),moduleName:e.moduleName,name:e.name,visibility:Y1(n.visibility),isEntry:n.isEntry,typeParameters:n.typeParameters.map(s=>({isPhantom:!1,constraints:H1(s)})),parameters:n.parameters.map(s=>Cd(s)),returns:n.return.map(s=>Cd(s))}}}}Je=new WeakMap;function kd(t){var e;return{id:t.objectId,version:t.version,digest:t.digest,type:t.type,content:Promise.resolve(((e=t.bcs)==null?void 0:e.dataType)==="moveObject"?ve(t.bcs.bcsBytes):new Uint8Array),owner:vr(t.owner),previousTransaction:t.previousTransaction??null}}function vr(t){if(t==="Immutable")return{$kind:"Immutable",Immutable:!0};if("ConsensusAddressOwner"in t)return{$kind:"ConsensusAddressOwner",ConsensusAddressOwner:{owner:t.ConsensusAddressOwner.owner,startVersion:t.ConsensusAddressOwner.start_version}};if("AddressOwner"in t)return{$kind:"AddressOwner",AddressOwner:t.AddressOwner};if("ObjectOwner"in t)return{$kind:"ObjectOwner",ObjectOwner:t.ObjectOwner};if("Shared"in t)return{$kind:"Shared",Shared:{initialSharedVersion:t.Shared.initial_shared_version}};throw new Error(`Unknown owner type: ${JSON.stringify(t)}`)}function eg(t){if(t==="Immutable")return null;if("ConsensusAddressOwner"in t)return t.ConsensusAddressOwner.owner;if("AddressOwner"in t)return t.AddressOwner;if("ObjectOwner"in t)return t.ObjectOwner;if("Shared"in t)return null;throw new Error(`Unknown owner type: ${JSON.stringify(t)}`)}function jd(t){var i,o,a;const e=ie.SenderSignedData.parse(ve(t.rawTransaction))[0],n={};(i=t.objectChanges)==null||i.forEach(c=>{c.type!=="published"&&(n[c.objectId]=c.objectType)});const s=ie.TransactionData.serialize(e.intentMessage.value).toBytes(),r=At.restore({version:2,sender:e.intentMessage.value.V1.sender,expiration:e.intentMessage.value.V1.expiration,gasData:e.intentMessage.value.V1.gasData,inputs:e.intentMessage.value.V1.kind.ProgrammableTransaction.inputs,commands:e.intentMessage.value.V1.kind.ProgrammableTransaction.commands});return{digest:t.digest,epoch:((o=t.effects)==null?void 0:o.executedEpoch)??null,effects:Qp(new Uint8Array(t.rawEffects)),objectTypes:Promise.resolve(n),transaction:{...r,bcs:s},signatures:e.txSignatures,balanceChanges:((a=t.balanceChanges)==null?void 0:a.map(c=>({coinType:c.coinType,address:eg(c.owner),amount:c.amount})))??[]}}function K1({bytes:t,effects:e,objectChanges:n}){var o;const s=[],r=[],i={};return n==null||n.forEach(a=>{var c,l,u,f;switch(a.type){case"published":s.push({id:a.packageId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"PackageWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:null,idOperation:"Created"});break;case"transferred":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:a.digest,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:vr(a.recipient),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"mutated":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.previousVersion,inputDigest:null,inputOwner:vr(a.owner),outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:vr(a.owner),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"deleted":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:((l=(c=e.deleted)==null?void 0:c.find(d=>d.objectId===a.objectId))==null?void 0:l.digest)??null,inputOwner:null,outputState:"DoesNotExist",outputVersion:null,outputDigest:null,outputOwner:null,idOperation:"Deleted"}),i[a.objectId]=a.objectType;break;case"wrapped":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:null,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:((f=(u=e.wrapped)==null?void 0:u.find(d=>d.objectId===a.objectId))==null?void 0:f.digest)??null,outputOwner:{$kind:"ObjectOwner",ObjectOwner:a.sender},idOperation:"None"}),i[a.objectId]=a.objectType;break;case"created":s.push({id:a.objectId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:vr(a.owner),idOperation:"Created"}),i[a.objectId]=a.objectType;break}}),{objectTypes:i,effects:{bcs:t??null,digest:e.transactionDigest,version:2,status:e.status.status==="success"?{success:!0,error:null}:{success:!1,error:e.status.error},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:{id:(o=e.gasObject)==null?void 0:o.reference.objectId,inputState:"Exists",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:e.gasObject.reference.version,outputDigest:e.gasObject.reference.digest,outputOwner:vr(e.gasObject.owner),idOperation:"None"},eventsDigest:e.eventsDigest??null,dependencies:e.dependencies??[],lamportVersion:e.gasObject.reference.version,changedObjects:s,unchangedConsensusObjects:r,auxiliaryDataDigest:null}}}const W1=ie.struct("Balance",{value:ie.u64()}),G1=ie.struct("Coin",{id:ie.Address,balance:W1});function Cd(t){if(typeof t!="string"){if("Reference"in t)return{reference:"immutable",body:Mi(t.Reference)};if("MutableReference"in t)return{reference:"mutable",body:Mi(t.MutableReference)}}return{reference:null,body:Mi(t)}}function Mi(t){switch(t){case"Address":return{$kind:"address"};case"Bool":return{$kind:"bool"};case"U8":return{$kind:"u8"};case"U16":return{$kind:"u16"};case"U32":return{$kind:"u32"};case"U64":return{$kind:"u64"};case"U128":return{$kind:"u128"};case"U256":return{$kind:"u256"}}if(typeof t=="string")throw new Error(`Unknown type: ${t}`);if("Vector"in t)return{$kind:"vector",vector:Mi(t.Vector)};if("Struct"in t)return{$kind:"datatype",datatype:{typeName:`${ue(t.Struct.address)}::${t.Struct.module}::${t.Struct.name}`,typeParameters:t.Struct.typeArguments.map(e=>Mi(e))}};if("TypeParameter"in t)return{$kind:"typeParameter",index:t.TypeParameter};throw new Error(`Unknown type: ${JSON.stringify(t)}`)}function H1(t){return t.abilities.map(e=>{switch(e){case"Copy":return"copy";case"Drop":return"drop";case"Store":return"store";case"Key":return"key";default:return"unknown"}})}function Y1(t){switch(t){case"Public":return"public";case"Private":return"private";case"Friend":return"friend";default:return"unknown"}}const Z1=Symbol.for("@mysten/SuiClient");class Jc extends ol{constructor(e){super({network:e.network??"unknown"}),this.jsonRpc=this,this.transport=e.transport??new Xc({url:e.url}),this.core=new q1({jsonRpcClient:this,mvr:e.mvr})}get[Z1](){return!0}async getRpcApiVersion({signal:e}={}){return(await this.transport.request({method:"rpc.discover",params:[],signal:e})).info.version}async getCoins({coinType:e,owner:n,cursor:s,limit:r,signal:i}){if(!n||!on(ue(n)))throw new Error("Invalid Sui address");return e&&at(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getCoins",params:[n,e,s,r],signal:i})}async getAllCoins(e){if(!e.owner||!on(ue(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllCoins",params:[e.owner,e.cursor,e.limit],signal:e.signal})}async getBalance({owner:e,coinType:n,signal:s}){if(!e||!on(ue(e)))throw new Error("Invalid Sui address");return n&&at(n)&&(n=(await this.core.mvr.resolveType({type:n})).type),await this.transport.request({method:"suix_getBalance",params:[e,n],signal:s})}async getAllBalances(e){if(!e.owner||!on(ue(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllBalances",params:[e.owner],signal:e.signal})}async getCoinMetadata({coinType:e,signal:n}){return e&&at(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getCoinMetadata",params:[e],signal:n})}async getTotalSupply({coinType:e,signal:n}){return e&&at(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getTotalSupply",params:[e],signal:n})}async call(e,n,{signal:s}={}){return await this.transport.request({method:e,params:n,signal:s})}async getMoveFunctionArgTypes({package:e,module:n,function:s,signal:r}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getMoveFunctionArgTypes",params:[e,n,s],signal:r})}async getNormalizedMoveModulesByPackage({package:e,signal:n}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveModulesByPackage",params:[e],signal:n})}async getNormalizedMoveModule({package:e,module:n,signal:s}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveModule",params:[e,n],signal:s})}async getNormalizedMoveFunction({package:e,module:n,function:s,signal:r}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveFunction",params:[e,n,s],signal:r})}async getNormalizedMoveStruct({package:e,module:n,struct:s,signal:r}){return e&&Pt(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveStruct",params:[e,n,s],signal:r})}async getOwnedObjects(e){if(!e.owner||!on(ue(e.owner)))throw new Error("Invalid Sui address");const n=e.filter?{...e.filter}:void 0;return n&&"MoveModule"in n&&Pt(n.MoveModule.package)?n.MoveModule={module:n.MoveModule.module,package:(await this.core.mvr.resolvePackage({package:n.MoveModule.package})).package}:n&&"StructType"in n&&at(n.StructType)&&(n.StructType=(await this.core.mvr.resolveType({type:n.StructType})).type),await this.transport.request({method:"suix_getOwnedObjects",params:[e.owner,{filter:n,options:e.options},e.cursor,e.limit],signal:e.signal})}async getObject(e){if(!e.id||!io(Nn(e.id)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"sui_getObject",params:[e.id,e.options],signal:e.signal})}async tryGetPastObject(e){return await this.transport.request({method:"sui_tryGetPastObject",params:[e.id,e.version,e.options],signal:e.signal})}async multiGetObjects(e){if(e.ids.forEach(s=>{if(!s||!io(Nn(s)))throw new Error(`Invalid Sui Object id ${s}`)}),e.ids.length!==new Set(e.ids).size)throw new Error(`Duplicate object ids in batch call ${e.ids}`);return await this.transport.request({method:"sui_multiGetObjects",params:[e.ids,e.options],signal:e.signal})}async queryTransactionBlocks({filter:e,options:n,cursor:s,limit:r,order:i,signal:o}){return e&&"MoveFunction"in e&&Pt(e.MoveFunction.package)&&(e={...e,MoveFunction:{package:(await this.core.mvr.resolvePackage({package:e.MoveFunction.package})).package}}),await this.transport.request({method:"suix_queryTransactionBlocks",params:[{filter:e,options:n},s,r,(i||"descending")==="descending"],signal:o})}async getTransactionBlock(e){if(!fd(e.digest))throw new Error("Invalid Transaction digest");return await this.transport.request({method:"sui_getTransactionBlock",params:[e.digest,e.options],signal:e.signal})}async multiGetTransactionBlocks(e){if(e.digests.forEach(s=>{if(!fd(s))throw new Error(`Invalid Transaction digest ${s}`)}),e.digests.length!==new Set(e.digests).size)throw new Error(`Duplicate digests in batch call ${e.digests}`);return await this.transport.request({method:"sui_multiGetTransactionBlocks",params:[e.digests,e.options],signal:e.signal})}async executeTransactionBlock({transactionBlock:e,signature:n,options:s,requestType:r,signal:i}){const o=await this.transport.request({method:"sui_executeTransactionBlock",params:[typeof e=="string"?e:Ae(e),Array.isArray(n)?n:[n],s],signal:i});if(r==="WaitForLocalExecution")try{await this.waitForTransaction({digest:o.digest})}catch{}return o}async signAndExecuteTransaction({transaction:e,signer:n,...s}){let r;e instanceof Uint8Array?r=e:(e.setSenderIfNotSet(n.toSuiAddress()),r=await e.build({client:this}));const{signature:i,bytes:o}=await n.signTransaction(r);return this.executeTransactionBlock({transactionBlock:o,signature:i,...s})}async getTotalTransactionBlocks({signal:e}={}){const n=await this.transport.request({method:"sui_getTotalTransactionBlocks",params:[],signal:e});return BigInt(n)}async getReferenceGasPrice({signal:e}={}){const n=await this.transport.request({method:"suix_getReferenceGasPrice",params:[],signal:e});return BigInt(n)}async getStakes(e){if(!e.owner||!on(ue(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getStakes",params:[e.owner],signal:e.signal})}async getStakesByIds(e){return e.stakedSuiIds.forEach(n=>{if(!n||!io(Nn(n)))throw new Error(`Invalid Sui Stake id ${n}`)}),await this.transport.request({method:"suix_getStakesByIds",params:[e.stakedSuiIds],signal:e.signal})}async getLatestSuiSystemState({signal:e}={}){return await this.transport.request({method:"suix_getLatestSuiSystemState",params:[],signal:e})}async queryEvents({query:e,cursor:n,limit:s,order:r,signal:i}){return e&&"MoveEventType"in e&&at(e.MoveEventType)&&(e={...e,MoveEventType:(await this.core.mvr.resolveType({type:e.MoveEventType})).type}),e&&"MoveEventModule"in e&&Pt(e.MoveEventModule.package)&&(e={...e,MoveEventModule:{module:e.MoveEventModule.module,package:(await this.core.mvr.resolvePackage({package:e.MoveEventModule.package})).package}}),"MoveModule"in e&&Pt(e.MoveModule.package)&&(e={...e,MoveModule:{module:e.MoveModule.module,package:(await this.core.mvr.resolvePackage({package:e.MoveModule.package})).package}}),await this.transport.request({method:"suix_queryEvents",params:[e,n,s,(r||"descending")==="descending"],signal:i})}async subscribeEvent(e){return this.transport.subscribe({method:"suix_subscribeEvent",unsubscribe:"suix_unsubscribeEvent",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async subscribeTransaction(e){return this.transport.subscribe({method:"suix_subscribeTransaction",unsubscribe:"suix_unsubscribeTransaction",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async devInspectTransactionBlock(e){var s,r;let n;if(Pp(e.transactionBlock))e.transactionBlock.setSenderIfNotSet(e.sender),n=Ae(await e.transactionBlock.build({client:this,onlyTransactionKind:!0}));else if(typeof e.transactionBlock=="string")n=e.transactionBlock;else if(e.transactionBlock instanceof Uint8Array)n=Ae(e.transactionBlock);else throw new Error("Unknown transaction block format.");return(s=e.signal)==null||s.throwIfAborted(),await this.transport.request({method:"sui_devInspectTransactionBlock",params:[e.sender,n,(r=e.gasPrice)==null?void 0:r.toString(),e.epoch],signal:e.signal})}async dryRunTransactionBlock(e){return await this.transport.request({method:"sui_dryRunTransactionBlock",params:[typeof e.transactionBlock=="string"?e.transactionBlock:Ae(e.transactionBlock)]})}async getDynamicFields(e){if(!e.parentId||!io(Nn(e.parentId)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"suix_getDynamicFields",params:[e.parentId,e.cursor,e.limit],signal:e.signal})}async getDynamicFieldObject(e){return await this.transport.request({method:"suix_getDynamicFieldObject",params:[e.parentId,e.name],signal:e.signal})}async getLatestCheckpointSequenceNumber({signal:e}={}){const n=await this.transport.request({method:"sui_getLatestCheckpointSequenceNumber",params:[],signal:e});return String(n)}async getCheckpoint(e){return await this.transport.request({method:"sui_getCheckpoint",params:[e.id],signal:e.signal})}async getCheckpoints(e){return await this.transport.request({method:"sui_getCheckpoints",params:[e.cursor,e==null?void 0:e.limit,e.descendingOrder],signal:e.signal})}async getCommitteeInfo(e){return await this.transport.request({method:"suix_getCommitteeInfo",params:[e==null?void 0:e.epoch],signal:e==null?void 0:e.signal})}async getNetworkMetrics({signal:e}={}){return await this.transport.request({method:"suix_getNetworkMetrics",params:[],signal:e})}async getAddressMetrics({signal:e}={}){return await this.transport.request({method:"suix_getLatestAddressMetrics",params:[],signal:e})}async getEpochMetrics(e){return await this.transport.request({method:"suix_getEpochMetrics",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getAllEpochAddressMetrics(e){return await this.transport.request({method:"suix_getAllEpochAddressMetrics",params:[e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getEpochs(e){return await this.transport.request({method:"suix_getEpochs",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getMoveCallMetrics({signal:e}={}){return await this.transport.request({method:"suix_getMoveCallMetrics",params:[],signal:e})}async getCurrentEpoch({signal:e}={}){return await this.transport.request({method:"suix_getCurrentEpoch",params:[],signal:e})}async getValidatorsApy({signal:e}={}){return await this.transport.request({method:"suix_getValidatorsApy",params:[],signal:e})}async getChainIdentifier({signal:e}={}){const n=await this.getCheckpoint({id:"0",signal:e}),s=Ci(n.digest);return Ts(s.slice(0,4))}async resolveNameServiceAddress(e){return await this.transport.request({method:"suix_resolveNameServiceAddress",params:[e.name],signal:e.signal})}async resolveNameServiceNames({format:e="dot",...n}){const{nextCursor:s,hasNextPage:r,data:i}=await this.transport.request({method:"suix_resolveNameServiceNames",params:[n.address,n.cursor,n.limit],signal:n.signal});return{hasNextPage:r,nextCursor:s,data:i.map(o=>Im(o,e))}}async getProtocolConfig(e){return await this.transport.request({method:"sui_getProtocolConfig",params:[e==null?void 0:e.version],signal:e==null?void 0:e.signal})}async verifyZkLoginSignature(e){return await this.transport.request({method:"sui_verifyZkLoginSignature",params:[e.bytes,e.signature,e.intentScope,e.author],signal:e.signal})}async waitForTransaction({signal:e,timeout:n=60*1e3,pollInterval:s=2*1e3,...r}){const i=AbortSignal.timeout(n),o=new Promise((a,c)=>{i.addEventListener("abort",()=>c(i.reason))});for(o.catch(()=>{});!i.aborted;){e==null||e.throwIfAborted();try{return await this.getTransactionBlock(r)}catch{await Promise.race([new Promise(a=>setTimeout(a,s)),o])}}throw i.throwIfAborted(),new Error("Unexpected error while waiting for transaction block.")}}function Q1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var oc,Dd;function X1(){if(Dd)return oc;Dd=1;var t=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return oc=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}(),oc}const J1="1.0.35",ev={version:J1};var tv=ev.version,Vs;if(typeof globalThis=="object")Vs=globalThis;else try{Vs=X1()}catch{}finally{if(!Vs&&typeof window<"u"&&(Vs=window),!Vs)throw new Error("Could not determine global this")}var Pi=Vs.WebSocket||Vs.MozWebSocket,nv=tv;function tg(t,e){var n;return e?n=new Pi(t,e):n=new Pi(t),n}Pi&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(t){Object.defineProperty(tg,t,{get:function(){return Pi[t]}})});var sv={w3cwebsocket:Pi?tg:null,version:nv};const rv=Q1(sv),iv=rv.w3cwebsocket;class Et extends Bn{static txInput(e,n,s=null){return n&&n.Pure&&n.Pure.bytes?e.pure(Et.pureInputToBytes(n)):e.pure(Et.pureInputToBytes(Et.pureInput(n,s)))}static pureInput(e,n){let s=e;if(s.toLowerCase()=="address"&&(s="Address"),ie[s])return typeof ie[s]=="object"?Ot.Pure(ie[s].serialize(n)):Ot.Pure(ie[s]().serialize(n));{const r=(""+s).split("<");if(r[0]=="vector"&&r[1]){const i=r[1].split(">");if(i[0]&&ie[i[0]])return Ot.Pure(ie.vector(ie[i[0]]()).serialize(n))}}}static pureInputToBytes(e){return ve(e.Pure.bytes)}static normalizeSuiAddress(e){return ue(e)}static WebSocketConstructor(){return iv}static suiClientForRPC(e={}){const n=e.providerName||e.chainname||e.chain;delete e.providerName,delete e.chainName,delete e.chain,e.WebSocketConstructor=Et.WebSocketConstructor();const s=new Xc(e),r=new Jc({transport:s});return r.providerName=n,r}static suiClientFor(e){return new Jc({transport:new Xc({url:L1(e),WebSocketConstructor:Et.WebSocketConstructor()})})}static normalizeClient(e){let n=null,s=null;if(e)if(e=="local"||e.constructor&&e.constructor.name&&e.constructor.name=="SuiLocalTestValidator")e=="local"?(n=Et.suiClientFor("localnet"),s="sui:localnet"):(s=e.providerName,n=e.client);else if(e=="test"||e=="testnet")n=Et.suiClientFor("testnet"),s="sui:testnet";else if(e=="dev"||e=="devnet")n=Et.suiClientFor("devnet"),s="sui:devnet";else if(e=="main"||e=="mainnet")n=Et.suiClientFor("mainnet"),s="sui:mainnet";else if(e&&e.constructor&&(e.endpoint||e.transport)){n=e;let r="";e.endpoint?r=e.endpoint:e.transport&&e.transport.websocketClient&&e.transport.websocketClient.endpoint&&(r=e.transport.websocketClient.endpoint),e.providerName?(s=e.providerName,["devnet","mainnet","testnet","localnet"].indexOf(e.providerName)!=-1&&(s="sui:"+e.providerName)):r.indexOf("devnet")!==-1?s="sui:devnet":r.indexOf("testnet")!==-1?s="sui:testnet":r.indexOf("mainnet")!==-1?s="sui:mainnet":r.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=r.split("//")[1]}else e&&e.connection&&e.connection.fullnode&&(n=e,e.connection.fullnode.indexOf("devnet")!==-1?s="sui:devnet":e.connection.fullnode.indexOf("testnet")!==-1?s="sui:testnet":e.connection.fullnode.indexOf("mainnet")!==-1?s="sui:mainnet":e.connection.fullnode.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=e.connection.fullnode);return n?(n.providerName=s,n):null}}class ar extends Bn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._id=e.id||null,this._version=e.version||null,this._type=e.type||null,this._fields={},this._display={},this._owner=null,this._localProperties={},this._isDeleted=!1,e.objectChange&&this.tryToFillDataFromObjectChange(e.objectChange),this._constructedAt=new Date}get constructedAt(){return this._constructedAt}static idsEqual(e,n){return ue(e)===ue(n)}get isDeleted(){return this._isDeleted}get isShared(){return this._owner&&this._owner.Shared}get isImmutable(){return this._owner&&this._owner=="Immutable"}isOwnedBy(e){let n=e;return n.id&&(n=n.id),!!(this._owner&&this._owner.AddressOwner&&this._owner.AddressOwner==n)}markAsDeleted(){this._isDeleted=!0}get id(){return this._id}get type(){return this._type}get typeName(){return this._type?(""+this._type).split("<")[0].split("::").pop():null}idEquals(e){if(!e)return!1;const n=this.address;return!!(n&&n===ue(e))}get address(){try{return ue(this._id)}catch{return null}}get fields(){return this._fields}get display(){return this._display}get localProperties(){return this._localProperties}get version(){return this._version}async getPastObject(e=null){e||(e=this._version-BigInt(1)),e=Number(e);const n=await this._suiMaster._client.tryGetPastObject({version:e,id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});return n&&n.details&&n.details.objectId?new ar({suiMaster:this._suiMaster,debug:this._debug,objectChange:n.details}):null}async queryTransactionBlocks(e={}){const n={filter:{InputObject:this.address},limit:e.limit||10,options:{showInput:!0,showEffects:!0,showEvents:!0,showObjectChanges:!0,showBalanceChanges:!0,showContent:!0,showOwner:!0,showDisplay:!0}},s=new As({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"queryTransactionBlocks",order:e.order});return await s.fetch(),s}async getDynamicFields(e={}){const n={parentId:this.address,limit:e.limit||50},s=new As({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"getDynamicFields",order:e.order});return await s.fetch(),s}async fetchFields(){const e=await this._suiMaster._client.getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});e&&e.data&&this.tryToFillDataFromObjectChange(e.data)}replaceWithSuiObjectIfNeeded(e){return!e||!e.version||!e.id||!this.idEquals(e.id)?!1:!this.version||e.version>this.version?(this._type=e.type,this._owner=e._owner,this._fields=e._fields,this._display=e._display,this._version=e.version,e.isDeleted&&this.markAsDeleted(),!0):!1}tryToFillDataFromObjectChange(e){var n,s,r,i;if(!e.objectId&&e.data&&e.data.objectId&&(e=e.data),e.type&&e.type=="deleted"&&this.markAsDeleted(),e.objectId){if(!this._id)this._id=e.objectId;else if(!this.idEquals(e.objectId))throw new Error("Trying to fill from different object");e.type&&!this._type&&(this._type=e.type)}if(e.version&&(this._version=BigInt(e.version)),e.objectType&&(this._type=`${e.objectType}`),(n=e==null?void 0:e.content)!=null&&n.fields)for(const o in(s=e==null?void 0:e.content)==null?void 0:s.fields)o!=="id"&&(this._fields[o]=e.content.fields[o]);if((r=e==null?void 0:e.display)!=null&&r.data)for(const o in(i=e==null?void 0:e.display)==null?void 0:i.data)this._display[o]=e.display.data[o];e.owner&&(this._owner=e.owner)}}class ov extends Bn{constructor(e={}){if(super(e),this._package=e.package,!this._package)throw new Error("package is required for SuiPackageModule");if(this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPackageModule");if(this._moduleName=e.moduleName,!this._moduleName)throw new Error("moduleName is required for SuiPackageModule");this._checkedOnChain=!1,this._normalizedMoveModule={},this._unsubscribeFunction=null}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async getNormalizedMoveFunction(e){const n=await this.getNormalizedPackageAddress();return await this._suiMaster._client.getMoveFunctionArgTypes({package:n,module:this._moduleName,function:e})}async subscribeEvents(){this.log("subscribing to events of module",this._moduleName);const e=await this.getNormalizedPackageAddress(),n=s=>{const r=new Lu({suiMaster:this._suiMaster,debug:this._debug,data:s}),i=r.typeName;this.log("got event",i),this.emit(i,r),this.emit("event",r,!0)};this._unsubscribeFunction=await this._suiMaster._client.subscribeEvent({filter:{MoveModule:{package:e,module:this._moduleName}},onMessage:n})}async unsubscribeEvents(){return this._unsubscribeFunction?(await this._unsubscribeFunction(),this._unsubscribeFunction=null,!0):!1}get objectStorage(){return this._suiMaster.objectStorage}get objects(){return this.objectStorage._objects}get objectsArray(){return this.objectStorage.asArray()}pushObject(e){let n=`${e}`;e.address&&(n=e.address);try{if(n=ue(n),!this.objectStorage.byAddress(n))if(e.address)this.objectStorage.push(e);else{const s=new ar({suiMaster:this._suiMaster,debug:this._debug,id:n});this.objectStorage.push(s),this.emit("added",s)}return this.objectStorage.byAddress(n)}catch(s){this.log("error",s)}return null}async moveCall(e,n,s){await this._package.checkOnChainIfNeeded();let r=null;if(n.tx)r=n.tx;else{r=new Pr;const u=[];for(let f of n)if(f&&f.type&&f.amount){const d=this._suiMaster.address,p=await(await this._suiMaster.suiCoins.get(f.type)).coinOfAmountToTxCoin(r,d,f.amount);u.push(p)}else if(f&&Array.isArray(f)&&f.length==1&&f[0].type&&f[0].amount){const d=this._suiMaster.address,h=await this._suiMaster.suiCoins.get(f[0].type),p=await h.coinOfAmountToTxCoin(r,d,f[0].amount);u.push(r.makeMoveVec({type:h.coinObjectType,elements:[p]}))}else typeof f=="string"&&f.indexOf("0x")===0?u.push(r.object(f)):f&&f.Pure&&f.Pure.bytes?u.push(this._suiMaster.utils.txInput(r,f)):u.push(r.pure(f));r.moveCall({target:`${this._package.address}::${this._moduleName}::${e}`,arguments:u,typeArguments:s})}const i=await this._suiMaster.signAndExecuteTransaction({transaction:r,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0,showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),o=new this._suiMaster.SuiTransaction({suiMaster:this._suiMaster,debug:this._debug,data:i});o.status;const a=[],c=[],l=[];for(const u of o.results.objects)this.objectStorage.byAddress(u.id)?this.objectStorage.byAddress(u.id).replaceWithSuiObjectIfNeeded(u):(this.objectStorage.push(u),this.emit("added",u));for(const u of o.results.deleted)this.objectStorage.byAddress(u.id)&&(this.objectStorage.byAddress(u.id).markAsDeleted(),l.push(this.objectStorage.byAddress(u.id)),this.emit("deleted",this.objectStorage.byAddress(u.id)));await this.fetchObjects();for(const u of o.results.created)if(this.objectStorage.byAddress(u.id))a.push(this.objectStorage.byAddress(u.id)),this.emit("created",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.results.mutated)if(this.objectStorage.byAddress(u.id))c.push(this.objectStorage.byAddress(u.id)),this.emit("mutated",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.events)this.emit(u.typeName,u);return o}async getOwnedObjects(e={}){const n=await this.getNormalizedPackageAddress(),s={owner:this._suiMaster.address,filter:{MoveModule:{package:n,module:this._moduleName}},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};e.typeName&&(s.filter={StructType:`${n}::${this._moduleName}::${e.typeName}`});const r=new As({debug:this._debug,suiMaster:this._suiMaster,params:s,method:"getOwnedObjects",order:e.order});return await r.fetch(),r}async fetchEvents(e={}){const n={};let s=await this.getNormalizedPackageAddress();e.eventTypeName?(n.MoveEventType=`${s}::${this._moduleName}::${e.eventTypeName}`,this.log("queriying for events of type: ",n.MoveEventType)):(n.MoveModule={package:s,module:this._moduleName},this.log("queriying for all events of module: ",this._moduleName));const r={descending_order:!1,query:n,limit:e.limit||50},i=new As({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"queryEvents",order:e.order});return await i.fetch(),i}async fetchObjects(){return await this.objectStorage.fetchObjects()}async getNormalizedPackageAddress(){if(await this.checkOnChainIfNeeded(),this._normalizedMoveModule&&this._normalizedMoveModule.address)return this._normalizedMoveModule.address}async checkOnChainIfNeeded(){if(this._checkedOnChain)return!0;const e=await this._suiMaster._client.getNormalizedMoveModule({package:this._package.address,module:this._moduleName});return e&&e.address&&(this._normalizedMoveModule=e,this._checkedOnChain=!0),!0}}class av extends ar{constructor(e={}){super(e),this._path=e.path,this._id=e.id||null,this._expectedModules=e.modules||null,this._isPublished=!1,this._publishedVersion=null,this._upgradeCap=null,this._upgradeCapId=null,this._isBuilt=!1,this._builtModules=null,this._builtDependencies=null,this._builtDigest=null,this._modules={}}get objectStorage(){return this._suiMaster.objectStorage}get modules(){return this._modules}async getModule(e){return await this.checkOnChainIfNeeded(),this._modules[e]}get isBuilt(){return this._isBuilt}get version(){return Number(this._publishedVersion)}async isOnChain(){try{await this.checkOnChainIfNeeded()}catch(e){console.error(e)}return!!(this._publishedVersion&&this._isPublished&&this.address)}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async moveCall(e,n,s,r){return await this.checkOnChainIfNeeded(),await this.modules[e].moveCall(n,s,r)}async fetchEvents(e,n={}){return await this.checkOnChainIfNeeded(),await this.modules[e].fetchEvents(n)}async checkOnChainIfNeeded(){if(this._isPublished)return!0;if(!this._id&&!this._expectedModules&&this._path&&(this._expectedModules=await this.getModulesNamesFromBuild()),!this._id&&this._expectedModules&&(this._id=await this.tryToFindByExpectedModules()),!this._id)throw new Error("no package id, nothing to check. Maybe lets start with .publish() ?");if(await this.getVersionOnChain())return this._isPublished=!0,!0}async tryToFindByExpectedModules(){this.log("trying to find Package by expected modules in its content...");const e=[];let n=this._expectedModules;Array.isArray(this._expectedModules)||(n=(""+this._expectedModules).split(",")),n.forEach(u=>{u.trim()&&e.indexOf(u.trim())===-1&&e.push(u.trim())}),this.log("looking for modules",e);const s=[],r={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};await new As({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"getOwnedObjects"}).forEach(u=>{const f=u.fields.package;f&&s.indexOf(f)===-1&&s.push(f)});const o=await this._suiMaster._client.multiGetObjects({ids:s,options:{showType:!0,showContent:!0}});let a=BigInt(0),c=null,l=0;for(const u of o){let f=!0;e.forEach(h=>{var p,b;(b=(p=u==null?void 0:u.data)==null?void 0:p.content)!=null&&b.disassembled[h]||(f=!1)});const d=BigInt(u.data.version);f&&l++,d>a&&(a=d,c=u.data.objectId)}return this.log("found packages with needed modules",l),c?(this.log("the one with most recent Publisher version is",c,"version",a),c):null}async getVersionOnChain(){var s,r,i,o,a,c;this.log("geting package version previously published on chain...");const n=await(await this._suiMaster.getClient()).getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});if((s=n==null?void 0:n.data)!=null&&s.version&&(this._publishedVersion=BigInt((r=n==null?void 0:n.data)==null?void 0:r.version),this._isPublished=!0),(o=(i=n==null?void 0:n.data)==null?void 0:i.content)!=null&&o.disassembled)for(const l in(c=(a=n==null?void 0:n.data)==null?void 0:a.content)==null?void 0:c.disassembled)this.attachModule(l);return this.log("on chain version",this._publishedVersion,"with modules",Object.keys(this._modules)),this._publishedVersion}attachModule(e){return this._modules[e]?!1:(this._modules[e]=new ov({suiMaster:this._suiMaster,debug:this._debug,moduleName:e,package:this}),this._modules[e].addEventListener("added",n=>{const s=n.detail;this.emit("added",s)}),!0)}async getUpgradeCapId(){var s,r,i;if(this._upgradeCap)return this._upgradeCap.address;this.log("trying to find UpgradeCap for this package in owned objects...");let e=!1,n=null;do{const o={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};n&&(o.cursor=n);const a=await this._suiMaster._client.getOwnedObjects(o);a.hasNextPage&&a.nextCursor?(e=!0,n=a.nextCursor):e=!1;for(const c of a.data)if(((i=(r=(s=c==null?void 0:c.data)==null?void 0:s.content)==null?void 0:r.fields)==null?void 0:i.package)==this._id)return this._upgradeCap=new ar({id:c.data.objectId,suiMaster:this._suiMaster,debug:this._debug}),this.log("found UpgradeCap",this._upgradeCap.address),this._upgradeCap.address}while(e&&!this._upgradeCap);return this.log("no UpgradeCap for this package found. Are you sure you work with most recent version of the package?"),null}async storeInfoFromPublishResult(e){if(e&&e.objectChanges&&e.objectChanges.length){for(const n of e.objectChanges){if(n.type==="published"&&n.packageId&&(this._id=ue(n.packageId),this._isPublished=!0,n.version&&(this._publishedVersion=BigInt(n.version)),n.modules))for(const s of n.modules)this.attachModule(s);n.type==="created"&&n.objectType.indexOf("::package::UpgradeCap")!==-1&&(this._upgradeCapId=n.objectId,this.log("UpgradeCap",this._upgradeCapId))}for(const n of e.objectChanges)if(n.objectId&&n.objectType&&n.type&&(n.type=="created"||n.type=="mutated"))for(const s in this._modules){const r=this._modules[s].pushObject(n.objectId);r&&r.tryToFillDataFromObjectChange(n)}return this.log("got results:",this.address,"version",this._publishedVersion,"with modules",Object.keys(this._modules)),!0}else return this.log("nothing is found in publish result. storing old values"),!1}async publish(e={}){if(this._isBuilt||await this.build(e),this.address)throw new Error("already published. Maybe you need to upgrade() it?");this.log("publishing package...");const n=new Pr,[s]=n.publish({modules:this._builtModules,dependencies:this._builtDependencies});n.transferObjects([s],this._suiMaster.address);const r=await this._suiMaster.signAndExecuteTransaction({transaction:n,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(r)&&this.log("published"),this.address}async upgrade(e={}){await this.checkOnChainIfNeeded(),this._isBuilt||await this.build(e),this.log("upgrading package...");const n=new Pr,s=n.object(await this.getUpgradeCapId()),i=[s,this._suiMaster.utils.txInput(n,"u8",0),this._suiMaster.utils.txInput(n,"vector<u8>",this._builtDigest)],o=n.moveCall({target:"0x2::package::authorize_upgrade",arguments:i}),a=n.upgrade({modules:this._builtModules,dependencies:this._builtDependencies,package:this.address,ticket:o});n.moveCall({target:"0x2::package::commit_upgrade",arguments:[s,a]});const c=await this._suiMaster.signAndExecuteTransaction({transaction:n,options:{showEffects:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(c)&&this.log("upgraded"),this.address}async build(e={}){this.log("building a package...");const n=this._path;if(!n)throw new Error("Cant build a package with no path defined");if(e.env){this.log("switching environment to",e.env);const c=await Ha.exec(`sui client switch --env ${e.env}`);this.log(c)}let s=`sui move build --dump-bytecode-as-base64 --path ${n}`;e.withUnpublishedDependencies&&(s=`sui move build --with-unpublished-dependencies --dump-bytecode-as-base64 --path ${n}`);const r=await Ha.exec(s),{modules:i,dependencies:o,digest:a}=JSON.parse(r);return this._builtModules=i,this._builtDependencies=o,this._builtDigest=a,this._isBuilt=!0,this.log("package built"),!0}async getModulesNamesFromBuild(){this.log("tring to get modules names from local package path...");try{return Ha.getModulesNamesFromPackagePath(this._path)}catch(e){throw this.log(e),new Error("can not get modules names from local package path")}}}class ng extends Hu{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Ea(e);const s=Ns(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,i=new Uint8Array(r);i.set(s.length>r?e.create().update(s).digest():s);for(let o=0;o<i.length;o++)i[o]^=54;this.iHash.update(i),this.oHash=e.create();for(let o=0;o<i.length;o++)i[o]^=106;this.oHash.update(i),Qt(i)}update(e){return zr(this),this.iHash.update(e),this}digestInto(e){zr(this),Le(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:s,finished:r,destroyed:i,blockLen:o,outputLen:a}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=s._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const js=(t,e,n)=>new ng(t,e).update(n).digest();js.create=(t,e)=>new ng(t,e);function cv(t,e,n,s){Ea(t);const r=sw({dkLen:32,asyncTick:10},s),{c:i,dkLen:o,asyncTick:a}=r;if(kn(i),kn(o),kn(a),i<1)throw new Error("iterations (c) should be >= 1");const c=gd(e),l=gd(n),u=new Uint8Array(o),f=js.create(t,c),d=f._cloneInto().update(l);return{c:i,dkLen:o,asyncTick:a,DK:u,PRF:f,PRFSalt:d}}function uv(t,e,n,s,r){return t.destroy(),e.destroy(),s&&s.destroy(),Qt(r),n}function lv(t,e,n,s){const{c:r,dkLen:i,DK:o,PRF:a,PRFSalt:c}=cv(t,e,n,s);let l;const u=new Uint8Array(4),f=tr(u),d=new Uint8Array(a.outputLen);for(let h=1,p=0;p<i;h++,p+=a.outputLen){const b=o.subarray(p,p+a.outputLen);f.setInt32(0,h,!1),(l=c._cloneInto(l)).update(u).digestInto(d),b.set(d.subarray(0,b.length));for(let S=1;S<r;S++){a._cloneInto(l).update(d).digestInto(d);for(let x=0;x<b.length;x++)b[x]^=d[x]}}return uv(a,c,o,l,d)}const dv=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ds=new Uint32Array(64);class fv extends Yu{constructor(e=32){super(64,e,8,!1),this.A=cs[0]|0,this.B=cs[1]|0,this.C=cs[2]|0,this.D=cs[3]|0,this.E=cs[4]|0,this.F=cs[5]|0,this.G=cs[6]|0,this.H=cs[7]|0}get(){const{A:e,B:n,C:s,D:r,E:i,F:o,G:a,H:c}=this;return[e,n,s,r,i,o,a,c]}set(e,n,s,r,i,o,a,c){this.A=e|0,this.B=n|0,this.C=s|0,this.D=r|0,this.E=i|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,n){for(let f=0;f<16;f++,n+=4)ds[f]=e.getUint32(n,!1);for(let f=16;f<64;f++){const d=ds[f-15],h=ds[f-2],p=mn(d,7)^mn(d,18)^d>>>3,b=mn(h,17)^mn(h,19)^h>>>10;ds[f]=b+ds[f-7]+p+ds[f-16]|0}let{A:s,B:r,C:i,D:o,E:a,F:c,G:l,H:u}=this;for(let f=0;f<64;f++){const d=mn(a,6)^mn(a,11)^mn(a,25),h=u+d+aw(a,c,l)+dv[f]+ds[f]|0,b=(mn(s,2)^mn(s,13)^mn(s,22))+cw(s,r,i)|0;u=l,l=c,c=a,a=o+h|0,o=i,i=r,r=s,s=h+b|0}s=s+this.A|0,r=r+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(s,r,i,o,a,c,l,u)}roundClean(){Qt(ds)}destroy(){this.set(0,0,0,0,0,0,0,0),Qt(this.buffer)}}const sg=uw(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),hv=sg[0],pv=sg[1],fs=new Uint32Array(80),hs=new Uint32Array(80);class rg extends Yu{constructor(e=64){super(128,e,16,!1),this.Ah=rt[0]|0,this.Al=rt[1]|0,this.Bh=rt[2]|0,this.Bl=rt[3]|0,this.Ch=rt[4]|0,this.Cl=rt[5]|0,this.Dh=rt[6]|0,this.Dl=rt[7]|0,this.Eh=rt[8]|0,this.El=rt[9]|0,this.Fh=rt[10]|0,this.Fl=rt[11]|0,this.Gh=rt[12]|0,this.Gl=rt[13]|0,this.Hh=rt[14]|0,this.Hl=rt[15]|0}get(){const{Ah:e,Al:n,Bh:s,Bl:r,Ch:i,Cl:o,Dh:a,Dl:c,Eh:l,El:u,Fh:f,Fl:d,Gh:h,Gl:p,Hh:b,Hl:S}=this;return[e,n,s,r,i,o,a,c,l,u,f,d,h,p,b,S]}set(e,n,s,r,i,o,a,c,l,u,f,d,h,p,b,S){this.Ah=e|0,this.Al=n|0,this.Bh=s|0,this.Bl=r|0,this.Ch=i|0,this.Cl=o|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=u|0,this.Fh=f|0,this.Fl=d|0,this.Gh=h|0,this.Gl=p|0,this.Hh=b|0,this.Hl=S|0}process(e,n){for(let T=0;T<16;T++,n+=4)fs[T]=e.getUint32(n),hs[T]=e.getUint32(n+=4);for(let T=16;T<80;T++){const j=fs[T-15]|0,q=hs[T-15]|0,P=ws(j,q,1)^ws(j,q,8)^yd(j,q,7),J=vs(j,q,1)^vs(j,q,8)^md(j,q,7),X=fs[T-2]|0,U=hs[T-2]|0,N=ws(X,U,19)^oi(X,U,61)^yd(X,U,6),A=vs(X,U,19)^ai(X,U,61)^md(X,U,6),k=fw(J,A,hs[T-7],hs[T-16]),M=hw(k,P,N,fs[T-7],fs[T-16]);fs[T]=M|0,hs[T]=k|0}let{Ah:s,Al:r,Bh:i,Bl:o,Ch:a,Cl:c,Dh:l,Dl:u,Eh:f,El:d,Fh:h,Fl:p,Gh:b,Gl:S,Hh:x,Hl:B}=this;for(let T=0;T<80;T++){const j=ws(f,d,14)^ws(f,d,18)^oi(f,d,41),q=vs(f,d,14)^vs(f,d,18)^ai(f,d,41),P=f&h^~f&b,J=d&p^~d&S,X=pw(B,q,J,pv[T],hs[T]),U=gw(X,x,j,P,hv[T],fs[T]),N=X|0,A=ws(s,r,28)^oi(s,r,34)^oi(s,r,39),k=vs(s,r,28)^ai(s,r,34)^ai(s,r,39),M=s&i^s&a^i&a,I=r&o^r&c^o&c;x=b|0,B=S|0,b=h|0,S=p|0,h=f|0,p=d|0,{h:f,l:d}=en(l|0,u|0,U|0,N|0),l=a|0,u=c|0,a=i|0,c=o|0,i=s|0,o=r|0;const E=Zu(N,k,I);s=Qu(E,U,A,M),r=E|0}({h:s,l:r}=en(this.Ah|0,this.Al|0,s|0,r|0)),{h:i,l:o}=en(this.Bh|0,this.Bl|0,i|0,o|0),{h:a,l:c}=en(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:u}=en(this.Dh|0,this.Dl|0,l|0,u|0),{h:f,l:d}=en(this.Eh|0,this.El|0,f|0,d|0),{h,l:p}=en(this.Fh|0,this.Fl|0,h|0,p|0),{h:b,l:S}=en(this.Gh|0,this.Gl|0,b|0,S|0),{h:x,l:B}=en(this.Hh|0,this.Hl|0,x|0,B|0),this.set(s,r,i,o,a,c,l,u,f,d,h,p,b,S,x,B)}roundClean(){Qt(fs,hs)}destroy(){Qt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class gv extends rg{constructor(){super(48),this.Ah=st[0]|0,this.Al=st[1]|0,this.Bh=st[2]|0,this.Bl=st[3]|0,this.Ch=st[4]|0,this.Cl=st[5]|0,this.Dh=st[6]|0,this.Dl=st[7]|0,this.Eh=st[8]|0,this.El=st[9]|0,this.Fh=st[10]|0,this.Fl=st[11]|0,this.Gh=st[12]|0,this.Gl=st[13]|0,this.Hh=st[14]|0,this.Hl=st[15]|0}}const dr=Ia(()=>new fv),Rr=Ia(()=>new rg),bv=Ia(()=>new gv);/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const yv=t=>t[0]==="あいこくしん";function ig(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);return t.normalize("NFKD")}function mv(t){const e=ig(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function wv(t){Le(t,16,20,24,28,32)}const vv=t=>{const e=8-t.length/4;return new Uint8Array([dr(t)[0]>>e<<e])};function Sv(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error("wordlist: non-string element: "+e)}),ro.chain(ro.checksum(1,vv),ro.radix2(11,!0),ro.alphabet(t))}function Mv(t,e){return wv(t),Sv(e).encode(t).join(yv(e)?"　":" ")}const Ev=t=>ig("mnemonic"+t);function Iv(t,e=""){return lv(Rr,mv(t).nfkd,Ev(e),{c:2048,dkLen:64})}const xv=`abandon
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
`);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const al=BigInt(0),eu=BigInt(1);function cr(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}function lo(t){const e=t.toString(16);return e.length&1?"0"+e:e}function og(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?al:BigInt("0x"+t)}function Ta(t){return og(Xe(t))}function Ri(t){return Le(t),og(Xe(Uint8Array.from(t).reverse()))}function cl(t,e){return Dn(t.toString(16).padStart(e*2,"0"))}function Oa(t,e){return cl(t,e).reverse()}function Re(t,e,n){let s;if(typeof e=="string")try{s=Dn(e)}catch(i){throw new Error(t+" must be hex string or Uint8Array, cause: "+i)}else if(ir(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const r=s.length;if(typeof n=="number"&&r!==n)throw new Error(t+" of length "+n+" expected, got "+r);return s}const ac=t=>typeof t=="bigint"&&al<=t;function _v(t,e,n){return ac(t)&&ac(e)&&ac(n)&&e<=t&&t<n}function Er(t,e,n,s){if(!_v(e,n,s))throw new Error("expected valid "+t+": "+n+" <= n < "+s+", got "+e)}function ag(t){let e;for(e=0;t>al;t>>=eu,e+=1);return e}const Gi=t=>(eu<<BigInt(t))-eu;function Av(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");const s=h=>new Uint8Array(h),r=h=>Uint8Array.of(h);let i=s(t),o=s(t),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},l=(...h)=>n(o,i,...h),u=(h=s(0))=>{o=l(r(0),h),i=l(),h.length!==0&&(o=l(r(1),h),i=l())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const p=[];for(;h<e;){i=l();const b=i.slice();p.push(b),h+=i.length}return Fe(...p)};return(h,p)=>{c(),u(h);let b;for(;!(b=p(f()));)u();return c(),b}}function Hi(t,e,n={}){if(!t||typeof t!="object")throw new Error("expected valid options object");function s(r,i,o){const a=t[r];if(o&&a===void 0)return;const c=typeof a;if(c!==i||a===null)throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`)}Object.entries(e).forEach(([r,i])=>s(r,i,!1)),Object.entries(n).forEach(([r,i])=>s(r,i,!0))}function oa(t){const e=new WeakMap;return(n,...s)=>{const r=e.get(n);if(r!==void 0)return r;const i=t(n,...s);return e.set(n,i),i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),tt=BigInt(1),Gs=BigInt(2),cg=BigInt(3),ug=BigInt(4),lg=BigInt(5),Nv=BigInt(7),dg=BigInt(8),Tv=BigInt(9),fg=BigInt(16);function Ke(t,e){const n=t%e;return n>=kt?n:e+n}function Pe(t,e,n){let s=t;for(;e-- >kt;)s*=s,s%=n;return s}function Bd(t,e){if(t===kt)throw new Error("invert: expected non-zero number");if(e<=kt)throw new Error("invert: expected positive modulus, got "+e);let n=Ke(t,e),s=e,r=kt,i=tt;for(;n!==kt;){const a=s/n,c=s%n,l=r-i*a;s=n,n=c,r=i,i=l}if(s!==tt)throw new Error("invert: does not exist");return Ke(r,e)}function ul(t,e,n){if(!t.eql(t.sqr(e),n))throw new Error("Cannot find square root")}function hg(t,e){const n=(t.ORDER+tt)/ug,s=t.pow(e,n);return ul(t,s,e),s}function Ov(t,e){const n=(t.ORDER-lg)/dg,s=t.mul(e,Gs),r=t.pow(s,n),i=t.mul(e,r),o=t.mul(t.mul(i,Gs),r),a=t.mul(i,t.sub(o,t.ONE));return ul(t,a,e),a}function kv(t){const e=zn(t),n=pg(t),s=n(e,e.neg(e.ONE)),r=n(e,s),i=n(e,e.neg(s)),o=(t+Nv)/fg;return(a,c)=>{let l=a.pow(c,o),u=a.mul(l,s);const f=a.mul(l,r),d=a.mul(l,i),h=a.eql(a.sqr(u),c),p=a.eql(a.sqr(f),c);l=a.cmov(l,u,h),u=a.cmov(d,f,p);const b=a.eql(a.sqr(u),c),S=a.cmov(l,u,b);return ul(a,S,c),S}}function pg(t){if(t<cg)throw new Error("sqrt is not defined for small field");let e=t-tt,n=0;for(;e%Gs===kt;)e/=Gs,n++;let s=Gs;const r=zn(t);for(;Ud(r,s)===1;)if(s++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return hg;let i=r.pow(s,e);const o=(e+tt)/Gs;return function(c,l){if(c.is0(l))return l;if(Ud(c,l)!==1)throw new Error("Cannot find square root");let u=n,f=c.mul(c.ONE,i),d=c.pow(l,e),h=c.pow(l,o);for(;!c.eql(d,c.ONE);){if(c.is0(d))return c.ZERO;let p=1,b=c.sqr(d);for(;!c.eql(b,c.ONE);)if(p++,b=c.sqr(b),p===u)throw new Error("Cannot find square root");const S=tt<<BigInt(u-p-1),x=c.pow(f,S);u=p,f=c.sqr(x),d=c.mul(d,f),h=c.mul(h,x)}return h}}function jv(t){return t%ug===cg?hg:t%dg===lg?Ov:t%fg===Tv?kv(t):pg(t)}const Cv=(t,e)=>(Ke(t,e)&tt)===tt,Dv=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Bv(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},n=Dv.reduce((s,r)=>(s[r]="function",s),e);return Hi(t,n),t}function Uv(t,e,n){if(n<kt)throw new Error("invalid exponent, negatives unsupported");if(n===kt)return t.ONE;if(n===tt)return e;let s=t.ONE,r=e;for(;n>kt;)n&tt&&(s=t.mul(s,r)),r=t.sqr(r),n>>=tt;return s}function gg(t,e,n=!1){const s=new Array(e.length).fill(n?t.ZERO:void 0),r=e.reduce((o,a,c)=>t.is0(a)?o:(s[c]=o,t.mul(o,a)),t.ONE),i=t.inv(r);return e.reduceRight((o,a,c)=>t.is0(a)?o:(s[c]=t.mul(o,s[c]),t.mul(o,a)),i),s}function Ud(t,e){const n=(t.ORDER-tt)/Gs,s=t.pow(e,n),r=t.eql(s,t.ONE),i=t.eql(s,t.ZERO),o=t.eql(s,t.neg(t.ONE));if(!r&&!i&&!o)throw new Error("invalid Legendre symbol result");return r?1:i?0:-1}function Lv(t,e){e!==void 0&&kn(e);const n=e!==void 0?e:t.toString(2).length,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}function zn(t,e,n=!1,s={}){if(t<=kt)throw new Error("invalid field: expected ORDER > 0, got "+t);let r,i,o=!1,a;if(typeof e=="object"&&e!=null){if(s.sqrt||n)throw new Error("cannot specify opts in two arguments");const d=e;d.BITS&&(r=d.BITS),d.sqrt&&(i=d.sqrt),typeof d.isLE=="boolean"&&(n=d.isLE),typeof d.modOnDecode=="boolean"&&(o=d.modOnDecode),a=d.allowedLengths}else typeof e=="number"&&(r=e),s.sqrt&&(i=s.sqrt);const{nBitLength:c,nByteLength:l}=Lv(t,r);if(l>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let u;const f=Object.freeze({ORDER:t,isLE:n,BITS:c,BYTES:l,MASK:Gi(c),ZERO:kt,ONE:tt,allowedLengths:a,create:d=>Ke(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof d);return kt<=d&&d<t},is0:d=>d===kt,isValidNot0:d=>!f.is0(d)&&f.isValid(d),isOdd:d=>(d&tt)===tt,neg:d=>Ke(-d,t),eql:(d,h)=>d===h,sqr:d=>Ke(d*d,t),add:(d,h)=>Ke(d+h,t),sub:(d,h)=>Ke(d-h,t),mul:(d,h)=>Ke(d*h,t),pow:(d,h)=>Uv(f,d,h),div:(d,h)=>Ke(d*Bd(h,t),t),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>Bd(d,t),sqrt:i||(d=>(u||(u=jv(t)),u(f,d))),toBytes:d=>n?Oa(d,l):cl(d,l),fromBytes:(d,h=!0)=>{if(a){if(!a.includes(d.length)||d.length>l)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+d.length);const b=new Uint8Array(l);b.set(d,n?0:b.length-d.length),d=b}if(d.length!==l)throw new Error("Field.fromBytes: expected "+l+" bytes, got "+d.length);let p=n?Ri(d):Ta(d);if(o&&(p=Ke(p,t)),!h&&!f.isValid(p))throw new Error("invalid field element: outside of range 0..ORDER");return p},invertBatch:d=>gg(f,d),cmov:(d,h,p)=>p?h:d});return Object.freeze(f)}function bg(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function yg(t){const e=bg(t);return e+Math.ceil(e/2)}function zv(t,e,n=!1){const s=t.length,r=bg(e),i=yg(e);if(s<16||s<i||s>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+s);const o=n?Ri(t):Ta(t),a=Ke(o,e-tt)+tt;return n?Oa(a,r):cl(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $r=BigInt(0),Hs=BigInt(1);function aa(t,e){const n=e.negate();return t?n:e}function Ys(t,e){const n=gg(t.Fp,e.map(s=>s.Z));return e.map((s,r)=>t.fromAffine(s.toAffine(n[r])))}function mg(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function cc(t,e){mg(t,e);const n=Math.ceil(e/t)+1,s=2**(t-1),r=2**t,i=Gi(t),o=BigInt(t);return{windows:n,windowSize:s,mask:i,maxNumber:r,shiftBy:o}}function Ld(t,e,n){const{windowSize:s,mask:r,maxNumber:i,shiftBy:o}=n;let a=Number(t&r),c=t>>o;a>s&&(a-=i,c+=Hs);const l=e*s,u=l+Math.abs(a)-1,f=a===0,d=a<0,h=e%2!==0;return{nextN:c,offset:u,isZero:f,isNeg:d,isNegF:h,offsetF:l}}function Pv(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,s)=>{if(!(n instanceof e))throw new Error("invalid point at index "+s)})}function Rv(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,s)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+s)})}const uc=new WeakMap,wg=new WeakMap;function lc(t){return wg.get(t)||1}function zd(t){if(t!==$r)throw new Error("invalid wNAF")}let vg=class{constructor(e,n){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=n}_unsafeLadder(e,n,s=this.ZERO){let r=e;for(;n>$r;)n&Hs&&(s=s.add(r)),r=r.double(),n>>=Hs;return s}precomputeWindow(e,n){const{windows:s,windowSize:r}=cc(n,this.bits),i=[];let o=e,a=o;for(let c=0;c<s;c++){a=o,i.push(a);for(let l=1;l<r;l++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(e,n,s){if(!this.Fn.isValid(s))throw new Error("invalid scalar");let r=this.ZERO,i=this.BASE;const o=cc(e,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:u,isNeg:f,isNegF:d,offsetF:h}=Ld(s,a,o);s=c,u?i=i.add(aa(d,n[h])):r=r.add(aa(f,n[l]))}return zd(s),{p:r,f:i}}wNAFUnsafe(e,n,s,r=this.ZERO){const i=cc(e,this.bits);for(let o=0;o<i.windows&&s!==$r;o++){const{nextN:a,offset:c,isZero:l,isNeg:u}=Ld(s,o,i);if(s=a,!l){const f=n[c];r=r.add(u?f.negate():f)}}return zd(s),r}getPrecomputes(e,n,s){let r=uc.get(n);return r||(r=this.precomputeWindow(n,e),e!==1&&(typeof s=="function"&&(r=s(r)),uc.set(n,r))),r}cached(e,n,s){const r=lc(e);return this.wNAF(r,this.getPrecomputes(r,e,s),n)}unsafe(e,n,s,r){const i=lc(e);return i===1?this._unsafeLadder(e,n,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,s),n,r)}createCache(e,n){mg(n,this.bits),wg.set(e,n),uc.delete(e)}hasCache(e){return lc(e)!==1}};function $v(t,e,n,s){let r=e,i=t.ZERO,o=t.ZERO;for(;n>$r||s>$r;)n&Hs&&(i=i.add(r)),s&Hs&&(o=o.add(r)),r=r.double(),n>>=Hs,s>>=Hs;return{p1:i,p2:o}}function Sg(t,e,n,s){Pv(n,t),Rv(s,e);const r=n.length,i=s.length;if(r!==i)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,a=ag(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=Gi(c),u=new Array(Number(l)+1).fill(o),f=Math.floor((e.BITS-1)/c)*c;let d=o;for(let h=f;h>=0;h-=c){u.fill(o);for(let b=0;b<i;b++){const S=s[b],x=Number(S>>BigInt(h)&l);u[x]=u[x].add(n[b])}let p=o;for(let b=u.length-1,S=o;b>0;b--)S=S.add(u[b]),p=p.add(S);if(d=d.add(p),h!==0)for(let b=0;b<c;b++)d=d.double()}return d}function Pd(t,e){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return Bv(e),e}else return zn(t)}function Mg(t,e,n={}){if(!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);for(const a of["p","n","h"]){const c=e[a];if(!(typeof c=="bigint"&&c>$r))throw new Error(`CURVE.${a} must be positive bigint`)}const s=Pd(e.p,n.Fp),r=Pd(e.n,n.Fn),o=["Gx","Gy","a",t==="weierstrass"?"b":"d"];for(const a of o)if(!s.isValid(e[a]))throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);return{Fp:s,Fn:r}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vn=BigInt(0),He=BigInt(1),dc=BigInt(2),Vv=BigInt(8);function Fv(t,e,n,s){const r=t.sqr(n),i=t.sqr(s),o=t.add(t.mul(e.a,r),i),a=t.add(t.ONE,t.mul(e.d,t.mul(r,i)));return t.eql(o,a)}function qv(t,e={}){const{Fp:n,Fn:s}=Mg("edwards",t,e),{h:r,n:i}=t;Hi(e,{},{uvRatio:"function"});const o=dc<<BigInt(s.BYTES*8)-He,a=b=>n.create(b),c=e.uvRatio||((b,S)=>{try{return{isValid:!0,value:n.sqrt(n.div(b,S))}}catch{return{isValid:!1,value:vn}}});if(!Fv(n,t,t.Gx,t.Gy))throw new Error("bad curve params: generator point");function l(b,S,x=!1){const B=x?He:vn;return Er("coordinate "+b,S,B,o),S}function u(b){if(!(b instanceof h))throw new Error("ExtendedPoint expected")}const f=oa((b,S)=>{const{X:x,Y:B,Z:T}=b,j=b.is0();S==null&&(S=j?Vv:n.inv(T));const q=a(x*S),P=a(B*S),J=n.mul(T,S);if(j)return{x:vn,y:He};if(J!==He)throw new Error("invZ was invalid");return{x:q,y:P}}),d=oa(b=>{const{a:S,d:x}=t;if(b.is0())throw new Error("bad point: ZERO");const{X:B,Y:T,Z:j,T:q}=b,P=a(B*B),J=a(T*T),X=a(j*j),U=a(X*X),N=a(P*S),A=a(X*a(N+J)),k=a(U+a(x*a(P*J)));if(A!==k)throw new Error("bad point: equation left != right (1)");const M=a(B*T),I=a(j*q);if(M!==I)throw new Error("bad point: equation left != right (2)");return!0});class h{constructor(S,x,B,T){this.X=l("x",S),this.Y=l("y",x),this.Z=l("z",B,!0),this.T=l("t",T),Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}get ex(){return this.X}get ey(){return this.Y}get ez(){return this.Z}get et(){return this.T}static normalizeZ(S){return Ys(h,S)}static msm(S,x){return Sg(h,s,S,x)}_setWindowSize(S){this.precompute(S)}static fromAffine(S){if(S instanceof h)throw new Error("extended point not allowed");const{x,y:B}=S||{};return l("x",x),l("y",B),new h(x,B,He,a(x*B))}precompute(S=8,x=!0){return p.createCache(this,S),x||this.multiply(dc),this}assertValidity(){d(this)}equals(S){u(S);const{X:x,Y:B,Z:T}=this,{X:j,Y:q,Z:P}=S,J=a(x*P),X=a(j*T),U=a(B*P),N=a(q*T);return J===X&&U===N}is0(){return this.equals(h.ZERO)}negate(){return new h(a(-this.X),this.Y,this.Z,a(-this.T))}double(){const{a:S}=t,{X:x,Y:B,Z:T}=this,j=a(x*x),q=a(B*B),P=a(dc*a(T*T)),J=a(S*j),X=x+B,U=a(a(X*X)-j-q),N=J+q,A=N-P,k=J-q,M=a(U*A),I=a(N*k),E=a(U*k),v=a(A*N);return new h(M,I,v,E)}add(S){u(S);const{a:x,d:B}=t,{X:T,Y:j,Z:q,T:P}=this,{X:J,Y:X,Z:U,T:N}=S,A=a(T*J),k=a(j*X),M=a(P*B*N),I=a(q*U),E=a((T+j)*(J+X)-A-k),v=I-M,w=I+M,_=a(k-x*A),C=a(E*v),D=a(w*_),z=a(E*_),F=a(v*w);return new h(C,D,F,z)}subtract(S){return this.add(S.negate())}multiply(S){const x=S;Er("scalar",x,He,i);const{p:B,f:T}=p.cached(this,x,j=>Ys(h,j));return Ys(h,[B,T])[0]}multiplyUnsafe(S,x=h.ZERO){const B=S;return Er("scalar",B,vn,i),B===vn?h.ZERO:this.is0()||B===He?this:p.unsafe(this,B,T=>Ys(h,T),x)}isSmallOrder(){return this.multiplyUnsafe(r).is0()}isTorsionFree(){return p.unsafe(this,i).is0()}toAffine(S){return f(this,S)}clearCofactor(){return r===He?this:this.multiplyUnsafe(r)}static fromBytes(S,x=!1){return Le(S),h.fromHex(S,x)}static fromHex(S,x=!1){const{d:B,a:T}=t,j=n.BYTES;S=Re("pointHex",S,j),cr("zip215",x);const q=S.slice(),P=S[j-1];q[j-1]=P&-129;const J=Ri(q),X=x?o:n.ORDER;Er("pointHex.y",J,vn,X);const U=a(J*J),N=a(U-He),A=a(B*U-T);let{isValid:k,value:M}=c(N,A);if(!k)throw new Error("Point.fromHex: invalid y coordinate");const I=(M&He)===He,E=(P&128)!==0;if(!x&&M===vn&&E)throw new Error("Point.fromHex: x=0 and x_0=1");return E!==I&&(M=a(-M)),h.fromAffine({x:M,y:J})}toBytes(){const{x:S,y:x}=this.toAffine(),B=Oa(x,n.BYTES);return B[B.length-1]|=S&He?128:0,B}toRawBytes(){return this.toBytes()}toHex(){return Xe(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}h.BASE=new h(t.Gx,t.Gy,He,a(t.Gx*t.Gy)),h.ZERO=new h(vn,He,He,vn),h.Fp=n,h.Fn=s;const p=new vg(h,s.BYTES*8);return h}function Kv(t,e,n){if(typeof e!="function")throw new Error('"hash" function param is required');Hi(n,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",mapToCurve:"function"});const{prehash:s}=n,{BASE:r,Fp:i,Fn:o}=t,a=o.ORDER,c=n.randomBytes||xa,l=n.adjustScalarBytes||(A=>A),u=n.domain||((A,k,M)=>{if(cr("phflag",M),k.length||M)throw new Error("Contexts/pre-hash are not supported");return A});function f(A){return o.create(A)}function d(A){return f(Ri(A))}function h(A){const k=i.BYTES;A=Re("private key",A,k);const M=Re("hashed private key",e(A),2*k),I=l(M.slice(0,k)),E=M.slice(k,2*k),v=d(I);return{head:I,prefix:E,scalar:v}}function p(A){const{head:k,prefix:M,scalar:I}=h(A),E=r.multiply(I),v=E.toBytes();return{head:k,prefix:M,scalar:I,point:E,pointBytes:v}}function b(A){return p(A).pointBytes}function S(A=Uint8Array.of(),...k){const M=Fe(...k);return d(e(u(M,Re("context",A),!!s)))}function x(A,k,M={}){A=Re("message",A),s&&(A=s(A));const{prefix:I,scalar:E,pointBytes:v}=p(k),w=S(M.context,I,A),_=r.multiply(w).toBytes(),C=S(M.context,_,v,A),D=f(w+C*E);Er("signature.s",D,vn,a);const z=i.BYTES,F=Fe(_,Oa(D,z));return Re("result",F,z*2)}const B={zip215:!0};function T(A,k,M,I=B){const{context:E,zip215:v}=I,w=i.BYTES;A=Re("signature",A,2*w),k=Re("message",k),M=Re("publicKey",M,w),v!==void 0&&cr("zip215",v),s&&(k=s(k));const _=Ri(A.slice(w,2*w));let C,D,z;try{C=t.fromHex(M,v),D=t.fromHex(A.slice(0,w),v),z=r.multiplyUnsafe(_)}catch{return!1}if(!v&&C.isSmallOrder())return!1;const F=S(E,D.toBytes(),C.toBytes(),k);return D.add(C.multiplyUnsafe(F)).subtract(z).clearCofactor().is0()}r.precompute(8);const j=i.BYTES,q={secret:j,public:j,signature:2*j,seed:j};function P(A=c(q.seed)){return A}const J={getExtendedPublicKey:p,randomSecretKey:P,isValidSecretKey:U,isValidPublicKey:N,randomPrivateKey:P,toMontgomery(A){const{y:k}=t.fromBytes(A),M=j===32;if(!M&&j!==57)throw new Error("only defined for 25519 and 448");const I=M?i.div(He+k,He-k):i.div(k-He,k+He);return i.toBytes(I)},toMontgomeryPriv(A){Le(A,j);const k=e(A.subarray(0,j));return l(k).subarray(0,j)},precompute(A=8,k=t.BASE){return k.precompute(A,!1)}};function X(A){const k=J.randomSecretKey(A);return{secretKey:k,publicKey:b(k)}}function U(A){try{return!!o.fromBytes(A,!1)}catch{return!1}}function N(A,k){try{return!!t.fromBytes(A,k)}catch{return!1}}return Object.freeze({keygen:X,getPublicKey:b,sign:x,verify:T,utils:J,Point:t,info:{type:"edwards",lengths:q}})}function Wv(t){const e={a:t.a,d:t.d,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp,s=zn(e.n,t.nBitLength,!0),r={Fp:n,Fn:s,uvRatio:t.uvRatio},i={randomBytes:t.randomBytes,adjustScalarBytes:t.adjustScalarBytes,domain:t.domain,prehash:t.prehash,mapToCurve:t.mapToCurve};return{CURVE:e,curveOpts:r,hash:t.hash,eddsaOpts:i}}function Gv(t,e){return Object.assign({},e,{ExtendedPoint:e.Point,CURVE:t})}function Hv(t){const{CURVE:e,curveOpts:n,hash:s,eddsaOpts:r}=Wv(t),i=qv(e,n),o=Kv(i,s,r);return Gv(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);const Yv=BigInt(1),Rd=BigInt(2);BigInt(3);const Zv=BigInt(5),Qv=BigInt(8),ka={p:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:Qv,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function Xv(t){const e=BigInt(10),n=BigInt(20),s=BigInt(40),r=BigInt(80),i=ka.p,a=t*t%i*t%i,c=Pe(a,Rd,i)*a%i,l=Pe(c,Yv,i)*t%i,u=Pe(l,Zv,i)*l%i,f=Pe(u,e,i)*u%i,d=Pe(f,n,i)*f%i,h=Pe(d,s,i)*d%i,p=Pe(h,r,i)*h%i,b=Pe(p,r,i)*h%i,S=Pe(b,e,i)*u%i;return{pow_p_5_8:Pe(S,Rd,i)*t%i,b2:a}}function Jv(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const $d=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function e2(t,e){const n=ka.p,s=Ke(e*e*e,n),r=Ke(s*s*e,n),i=Xv(t*r).pow_p_5_8;let o=Ke(t*s*i,n);const a=Ke(e*o*o,n),c=o,l=Ke(o*$d,n),u=a===t,f=a===Ke(-t,n),d=a===Ke(-t*$d,n);return u&&(o=c),(f||d)&&(o=l),Cv(o,n)&&(o=Ke(-o,n)),{isValid:u||f,value:o}}const t2=zn(ka.p,{isLE:!0}),n2={...ka,Fp:t2,hash:Rr,adjustScalarBytes:Jv,uvRatio:e2},Kn=Hv(n2);function Eg(t,e){return ie.IntentMessage(ie.bytes(e.length)).serialize({intent:{scope:{[t]:!0},version:{V0:!0},appId:{Sui:!0}},value:e}).toBytes()}const as={ED25519:0,Secp256k1:1,Secp256r1:2,MultiSig:3,ZkLogin:5,Passkey:6},s2={ED25519:32,Secp256k1:33,Secp256r1:33,Passkey:33},ll={0:"ED25519",1:"Secp256k1",2:"Secp256r1",3:"MultiSig",5:"ZkLogin",6:"Passkey"};/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Vd=(t,e)=>(t+(t>=0?e:-e)/Ig)/e;function r2(t,e,n){const[[s,r],[i,o]]=e,a=Vd(o*t,n),c=Vd(-r*t,n);let l=t-a*s-c*i,u=-a*r-c*o;const f=l<ts,d=u<ts;f&&(l=-l),d&&(u=-u);const h=Gi(Math.ceil(ag(n)/2))+jr;if(l<ts||l>=h||u<ts||u>=h)throw new Error("splitScalar (endomorphism): failed, k="+t);return{k1neg:f,k1:l,k2neg:d,k2:u}}function Fd(t){t.lowS!==void 0&&cr("lowS",t.lowS),t.prehash!==void 0&&cr("prehash",t.prehash)}let i2=class extends Error{constructor(e=""){super(e)}};const Xn={Err:i2,_tlv:{encode:(t,e)=>{const{Err:n}=Xn;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const s=e.length/2,r=lo(s);if(r.length/2&128)throw new n("tlv.encode: long form length too big");const i=s>127?lo(r.length/2|128):"";return lo(t)+i+r+e},decode(t,e){const{Err:n}=Xn;let s=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new n("tlv.decode: wrong tlv");const r=e[s++],i=!!(r&128);let o=0;if(!i)o=r;else{const c=r&127;if(!c)throw new n("tlv.decode(long): indefinite length not supported");if(c>4)throw new n("tlv.decode(long): byte length is too big");const l=e.subarray(s,s+c);if(l.length!==c)throw new n("tlv.decode: length bytes not complete");if(l[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(s+=c,o<128)throw new n("tlv.decode(long): not minimal encoding")}const a=e.subarray(s,s+o);if(a.length!==o)throw new n("tlv.decode: wrong value length");return{v:a,l:e.subarray(s+o)}}},_int:{encode(t){const{Err:e}=Xn;if(t<ts)throw new e("integer: negative integers are not allowed");let n=lo(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=Xn;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return Ta(t)}},toSig(t){const{Err:e,_int:n,_tlv:s}=Xn,r=Re("signature",t),{v:i,l:o}=s.decode(48,r);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=s.decode(2,i),{v:l,l:u}=s.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(a),s:n.decode(l)}},hexFromSig(t){const{_tlv:e,_int:n}=Xn,s=e.encode(2,n.encode(t.r)),r=e.encode(2,n.encode(t.s)),i=s+r;return e.encode(48,i)}},ts=BigInt(0),jr=BigInt(1),Ig=BigInt(2),fo=BigInt(3),o2=BigInt(4);function a2(t,e,n){function s(r){const i=t.sqr(r),o=t.mul(i,r);return t.add(t.add(o,t.mul(r,e)),n)}return s}function Sr(t,e){const{BYTES:n}=t;let s;if(typeof e=="bigint")s=e;else{let r=Re("private key",e);try{s=t.fromBytes(r)}catch{throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`)}}if(!t.isValidNot0(s))throw new Error("invalid private key: out of range [1..N-1]");return s}function c2(t,e={}){const{Fp:n,Fn:s}=Mg("weierstrass",t,e),{h:r,n:i}=t;Hi(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:o}=e;if(o&&(!n.is0(t.a)||typeof o.beta!="bigint"||!Array.isArray(o.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');function a(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function c(U,N,A){const{x:k,y:M}=N.toAffine(),I=n.toBytes(k);if(cr("isCompressed",A),A){a();const E=!n.isOdd(M);return Fe(xg(E),I)}else return Fe(Uint8Array.of(4),I,n.toBytes(M))}function l(U){Le(U);const N=n.BYTES,A=N+1,k=2*N+1,M=U.length,I=U[0],E=U.subarray(1);if(M===A&&(I===2||I===3)){const v=n.fromBytes(E);if(!n.isValid(v))throw new Error("bad point: is not on curve, wrong x");const w=d(v);let _;try{_=n.sqrt(w)}catch(z){const F=z instanceof Error?": "+z.message:"";throw new Error("bad point: is not on curve, sqrt error"+F)}a();const C=n.isOdd(_);return(I&1)===1!==C&&(_=n.neg(_)),{x:v,y:_}}else if(M===k&&I===4){const v=n.fromBytes(E.subarray(N*0,N*1)),w=n.fromBytes(E.subarray(N*1,N*2));if(!h(v,w))throw new Error("bad point: is not on curve");return{x:v,y:w}}else throw new Error(`bad point: got length ${M}, expected compressed=${A} or uncompressed=${k}`)}const u=e.toBytes||c,f=e.fromBytes||l,d=a2(n,t.a,t.b);function h(U,N){const A=n.sqr(N),k=d(U);return n.eql(A,k)}if(!h(t.Gx,t.Gy))throw new Error("bad curve params: generator point");const p=n.mul(n.pow(t.a,fo),o2),b=n.mul(n.sqr(t.b),BigInt(27));if(n.is0(n.add(p,b)))throw new Error("bad curve params: a or b");function S(U,N,A=!1){if(!n.isValid(N)||A&&n.is0(N))throw new Error(`bad point coordinate ${U}`);return N}function x(U){if(!(U instanceof P))throw new Error("ProjectivePoint expected")}function B(U){if(!o||!o.basises)throw new Error("no endo");return r2(U,o.basises,s.ORDER)}const T=oa((U,N)=>{const{X:A,Y:k,Z:M}=U;if(n.eql(M,n.ONE))return{x:A,y:k};const I=U.is0();N==null&&(N=I?n.ONE:n.inv(M));const E=n.mul(A,N),v=n.mul(k,N),w=n.mul(M,N);if(I)return{x:n.ZERO,y:n.ZERO};if(!n.eql(w,n.ONE))throw new Error("invZ was invalid");return{x:E,y:v}}),j=oa(U=>{if(U.is0()){if(e.allowInfinityPoint&&!n.is0(U.Y))return;throw new Error("bad point: ZERO")}const{x:N,y:A}=U.toAffine();if(!n.isValid(N)||!n.isValid(A))throw new Error("bad point: x or y not field elements");if(!h(N,A))throw new Error("bad point: equation left != right");if(!U.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function q(U,N,A,k,M){return A=new P(n.mul(A.X,U),A.Y,A.Z),N=aa(k,N),A=aa(M,A),N.add(A)}class P{constructor(N,A,k){this.X=S("x",N),this.Y=S("y",A,!0),this.Z=S("z",k),Object.freeze(this)}static fromAffine(N){const{x:A,y:k}=N||{};if(!N||!n.isValid(A)||!n.isValid(k))throw new Error("invalid affine point");if(N instanceof P)throw new Error("projective point not allowed");return n.is0(A)&&n.is0(k)?P.ZERO:new P(A,k,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}static normalizeZ(N){return Ys(P,N)}static fromBytes(N){return Le(N),P.fromHex(N)}static fromHex(N){const A=P.fromAffine(f(Re("pointHex",N)));return A.assertValidity(),A}static fromPrivateKey(N){return P.BASE.multiply(Sr(s,N))}static msm(N,A){return Sg(P,s,N,A)}_setWindowSize(N){this.precompute(N)}precompute(N=8,A=!0){return X.createCache(this,N),A||this.multiply(fo),this}assertValidity(){j(this)}hasEvenY(){const{y:N}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(N)}equals(N){x(N);const{X:A,Y:k,Z:M}=this,{X:I,Y:E,Z:v}=N,w=n.eql(n.mul(A,v),n.mul(I,M)),_=n.eql(n.mul(k,v),n.mul(E,M));return w&&_}negate(){return new P(this.X,n.neg(this.Y),this.Z)}double(){const{a:N,b:A}=t,k=n.mul(A,fo),{X:M,Y:I,Z:E}=this;let v=n.ZERO,w=n.ZERO,_=n.ZERO,C=n.mul(M,M),D=n.mul(I,I),z=n.mul(E,E),F=n.mul(M,I);return F=n.add(F,F),_=n.mul(M,E),_=n.add(_,_),v=n.mul(N,_),w=n.mul(k,z),w=n.add(v,w),v=n.sub(D,w),w=n.add(D,w),w=n.mul(v,w),v=n.mul(F,v),_=n.mul(k,_),z=n.mul(N,z),F=n.sub(C,z),F=n.mul(N,F),F=n.add(F,_),_=n.add(C,C),C=n.add(_,C),C=n.add(C,z),C=n.mul(C,F),w=n.add(w,C),z=n.mul(I,E),z=n.add(z,z),C=n.mul(z,F),v=n.sub(v,C),_=n.mul(z,D),_=n.add(_,_),_=n.add(_,_),new P(v,w,_)}add(N){x(N);const{X:A,Y:k,Z:M}=this,{X:I,Y:E,Z:v}=N;let w=n.ZERO,_=n.ZERO,C=n.ZERO;const D=t.a,z=n.mul(t.b,fo);let F=n.mul(A,I),ae=n.mul(k,E),ne=n.mul(M,v),ce=n.add(A,k),te=n.add(I,E);ce=n.mul(ce,te),te=n.add(F,ae),ce=n.sub(ce,te),te=n.add(A,M);let fe=n.add(I,v);return te=n.mul(te,fe),fe=n.add(F,ne),te=n.sub(te,fe),fe=n.add(k,M),w=n.add(E,v),fe=n.mul(fe,w),w=n.add(ae,ne),fe=n.sub(fe,w),C=n.mul(D,te),w=n.mul(z,ne),C=n.add(w,C),w=n.sub(ae,C),C=n.add(ae,C),_=n.mul(w,C),ae=n.add(F,F),ae=n.add(ae,F),ne=n.mul(D,ne),te=n.mul(z,te),ae=n.add(ae,ne),ne=n.sub(F,ne),ne=n.mul(D,ne),te=n.add(te,ne),F=n.mul(ae,te),_=n.add(_,F),F=n.mul(fe,te),w=n.mul(ce,w),w=n.sub(w,F),F=n.mul(ce,ae),C=n.mul(fe,C),C=n.add(C,F),new P(w,_,C)}subtract(N){return this.add(N.negate())}is0(){return this.equals(P.ZERO)}multiply(N){const{endo:A}=e;if(!s.isValidNot0(N))throw new Error("invalid scalar: out of range");let k,M;const I=E=>X.cached(this,E,v=>Ys(P,v));if(A){const{k1neg:E,k1:v,k2neg:w,k2:_}=B(N),{p:C,f:D}=I(v),{p:z,f:F}=I(_);M=D.add(F),k=q(A.beta,C,z,E,w)}else{const{p:E,f:v}=I(N);k=E,M=v}return Ys(P,[k,M])[0]}multiplyUnsafe(N){const{endo:A}=e,k=this;if(!s.isValid(N))throw new Error("invalid scalar: out of range");if(N===ts||k.is0())return P.ZERO;if(N===jr)return k;if(X.hasCache(this))return this.multiply(N);if(A){const{k1neg:M,k1:I,k2neg:E,k2:v}=B(N),{p1:w,p2:_}=$v(P,k,I,v);return q(A.beta,w,_,M,E)}else return X.unsafe(k,N)}multiplyAndAddUnsafe(N,A,k){const M=this.multiplyUnsafe(A).add(N.multiplyUnsafe(k));return M.is0()?void 0:M}toAffine(N){return T(this,N)}isTorsionFree(){const{isTorsionFree:N}=e;return r===jr?!0:N?N(P,this):X.unsafe(this,i).is0()}clearCofactor(){const{clearCofactor:N}=e;return r===jr?this:N?N(P,this):this.multiplyUnsafe(r)}isSmallOrder(){return this.multiplyUnsafe(r).is0()}toBytes(N=!0){return cr("isCompressed",N),this.assertValidity(),u(P,this,N)}toRawBytes(N=!0){return this.toBytes(N)}toHex(N=!0){return Xe(this.toBytes(N))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}P.BASE=new P(t.Gx,t.Gy,n.ONE),P.ZERO=new P(n.ZERO,n.ONE,n.ZERO),P.Fp=n,P.Fn=s;const J=s.BITS,X=new vg(P,e.endo?Math.ceil(J/2):J);return P}function xg(t){return Uint8Array.of(t?2:3)}function u2(t,e,n={}){Ea(e),Hi(n,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const s=n.randomBytes||xa,r=n.hmac||((v,...w)=>js(e,v,Fe(...w))),{Fp:i,Fn:o}=t,{ORDER:a,BITS:c}=o,l=yg(a),u={secret:o.BYTES,public:1+i.BYTES,publicUncompressed:1+2*i.BYTES,signature:2*o.BYTES,seed:l};function f(v){const w=a>>jr;return v>w}function d(v){return f(v)?o.neg(v):v}function h(v,w){if(!o.isValidNot0(w))throw new Error(`invalid signature ${v}: out of range 1..CURVE.n`)}class p{constructor(w,_,C){h("r",w),h("s",_),this.r=w,this.s=_,C!=null&&(this.recovery=C),Object.freeze(this)}static fromBytes(w,_="compact"){if(_==="compact"){const C=o.BYTES;Le(w,C*2);const D=w.subarray(0,C),z=w.subarray(C,C*2);return new p(o.fromBytes(D),o.fromBytes(z))}if(_==="der"){Le(w);const{r:C,s:D}=Xn.toSig(w);return new p(C,D)}throw new Error("invalid format")}static fromHex(w,_){return this.fromBytes(Dn(w),_)}addRecoveryBit(w){return new p(this.r,this.s,w)}recoverPublicKey(w){const _=i.ORDER,{r:C,s:D,recovery:z}=this;if(z==null||![0,1,2,3].includes(z))throw new Error("recovery id invalid");if(a*Ig<_&&z>1)throw new Error("recovery id is ambiguous for h>1 curve");const ae=z===2||z===3?C+a:C;if(!i.isValid(ae))throw new Error("recovery id 2 or 3 invalid");const ne=i.toBytes(ae),ce=t.fromHex(Fe(xg((z&1)===0),ne)),te=o.inv(ae),fe=J(Re("msgHash",w)),me=o.create(-fe*te),be=o.create(D*te),Se=t.BASE.multiplyUnsafe(me).add(ce.multiplyUnsafe(be));if(Se.is0())throw new Error("point at infinify");return Se.assertValidity(),Se}hasHighS(){return f(this.s)}normalizeS(){return this.hasHighS()?new p(this.r,o.neg(this.s),this.recovery):this}toBytes(w="compact"){if(w==="compact")return Fe(o.toBytes(this.r),o.toBytes(this.s));if(w==="der")return Dn(Xn.hexFromSig(this));throw new Error("invalid format")}toHex(w){return Xe(this.toBytes(w))}assertValidity(){}static fromCompact(w){return p.fromBytes(Re("sig",w),"compact")}static fromDER(w){return p.fromBytes(Re("sig",w),"der")}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return Xe(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return Xe(this.toBytes("compact"))}}function b(v){try{return!!Sr(o,v)}catch{return!1}}function S(v,w){try{const _=v.length;return w===!0&&_!==u.public||w===!1&&_!==u.publicUncompressed?!1:!!t.fromBytes(v)}catch{return!1}}function x(v=s(l)){return zv(v,a)}const B={isValidSecretKey:b,isValidPublicKey:S,randomSecretKey:x,isValidPrivateKey:b,randomPrivateKey:x,normPrivateKeyToScalar:v=>Sr(o,v),precompute(v=8,w=t.BASE){return w.precompute(v,!1)}};function T(v,w=!0){return t.BASE.multiply(Sr(o,v)).toBytes(w)}function j(v){if(typeof v=="bigint")return!1;if(v instanceof t)return!0;if(o.allowedLengths||u.secret===u.public)return;const w=Re("key",v).length;return w===u.public||w===u.publicUncompressed}function q(v,w,_=!0){if(j(v)===!0)throw new Error("first arg must be private key");if(j(w)===!1)throw new Error("second arg must be public key");const C=Sr(o,v);return t.fromHex(w).multiply(C).toBytes(_)}const P=n.bits2int||function(v){if(v.length>8192)throw new Error("input is too large");const w=Ta(v),_=v.length*8-c;return _>0?w>>BigInt(_):w},J=n.bits2int_modN||function(v){return o.create(P(v))},X=Gi(c);function U(v){return Er("num < 2^"+c,v,ts,X),o.toBytes(v)}function N(v,w,_=A){if(["recovered","canonical"].some(me=>me in _))throw new Error("sign() legacy options not supported");let{lowS:C,prehash:D,extraEntropy:z}=_;C==null&&(C=!0),v=Re("msgHash",v),Fd(_),D&&(v=Re("prehashed msgHash",e(v)));const F=J(v),ae=Sr(o,w),ne=[U(ae),U(F)];if(z!=null&&z!==!1){const me=z===!0?s(u.secret):z;ne.push(Re("extraEntropy",me))}const ce=Fe(...ne),te=F;function fe(me){const be=P(me);if(!o.isValidNot0(be))return;const Se=o.inv(be),Xt=t.BASE.multiply(be).toAffine(),y=o.create(Xt.x);if(y===ts)return;const m=o.create(Se*o.create(te+y*ae));if(m===ts)return;let O=(Xt.x===y?0:2)|Number(Xt.y&jr),R=m;return C&&f(m)&&(R=d(m),O^=1),new p(y,R,O)}return{seed:ce,k2sig:fe}}const A={lowS:n.lowS,prehash:!1},k={lowS:n.lowS,prehash:!1};function M(v,w,_=A){const{seed:C,k2sig:D}=N(v,w,_);return Av(e.outputLen,o.BYTES,r)(C,D)}t.BASE.precompute(8);function I(v,w,_,C=k){const D=v;w=Re("msgHash",w),_=Re("publicKey",_),Fd(C);const{lowS:z,prehash:F,format:ae}=C;if("strict"in C)throw new Error("options.strict was renamed to lowS");let ne,ce;if(ae===void 0){const te=typeof D=="string"||ir(D),fe=!te&&D!==null&&typeof D=="object"&&typeof D.r=="bigint"&&typeof D.s=="bigint";if(!te&&!fe)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(fe)ne=new p(D.r,D.s);else if(te){try{ne=p.fromDER(D)}catch(me){if(!(me instanceof Xn.Err))throw me}if(!ne)try{ne=p.fromCompact(D)}catch{return!1}}}else if(ae==="compact"||ae==="der"){if(typeof D!="string"&&!ir(D))throw new Error('"der" / "compact" format expects Uint8Array signature');ne=p.fromBytes(Re("sig",D),ae)}else if(ae==="js"){if(!(D instanceof p))throw new Error('"js" format expects Signature instance');ne=D}else throw new Error('format must be "compact", "der" or "js"');if(!ne)return!1;try{if(ce=t.fromHex(_),z&&ne.hasHighS())return!1;F&&(w=e(w));const{r:te,s:fe}=ne,me=J(w),be=o.inv(fe),Se=o.create(me*be),Xt=o.create(te*be),y=t.BASE.multiplyUnsafe(Se).add(ce.multiplyUnsafe(Xt));return y.is0()?!1:o.create(y.x)===te}catch{return!1}}function E(v){const w=B.randomSecretKey(v);return{secretKey:w,publicKey:T(w)}}return Object.freeze({keygen:E,getPublicKey:T,sign:M,verify:I,getSharedSecret:q,utils:B,Point:t,Signature:p,info:{type:"weierstrass",lengths:u,publicKeyHasPrefix:!0}})}function l2(t){const e={a:t.a,b:t.b,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp;let s=t.allowedPrivateKeyLengths?Array.from(new Set(t.allowedPrivateKeyLengths.map(o=>Math.ceil(o/2)))):void 0;const r=zn(e.n,{BITS:t.nBitLength,allowedLengths:s,modOnDecode:t.wrapPrivateKey}),i={Fp:n,Fn:r,allowInfinityPoint:t.allowInfinityPoint,endo:t.endo,isTorsionFree:t.isTorsionFree,clearCofactor:t.clearCofactor,fromBytes:t.fromBytes,toBytes:t.toBytes};return{CURVE:e,curveOpts:i}}function d2(t){const{CURVE:e,curveOpts:n}=l2(t),s={hmac:t.hmac,randomBytes:t.randomBytes,lowS:t.lowS,bits2int:t.bits2int,bits2int_modN:t.bits2int_modN};return{CURVE:e,curveOpts:n,hash:t.hash,ecdsaOpts:s}}function f2(t,e){return Object.assign({},e,{ProjectivePoint:e.Point,CURVE:t})}function h2(t){const{CURVE:e,curveOpts:n,hash:s,ecdsaOpts:r}=d2(t),i=c2(e,n),o=u2(i,s,r);return f2(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ja(t,e){const n=s=>h2({...t,hash:s});return{...n(e),create:n}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _g={p:BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),h:BigInt(1),a:BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),b:BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")},Ag={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),n:BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),h:BigInt(1),a:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),b:BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),Gx:BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),Gy:BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")},Ng={p:BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),n:BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),h:BigInt(1),a:BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),b:BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),Gx:BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),Gy:BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")},p2=zn(_g.p),g2=zn(Ag.p),b2=zn(Ng.p),y2=ja({..._g,Fp:p2,lowS:!1},dr);ja({...Ag,Fp:g2,lowS:!1},bv);ja({...Ng,Fp:b2,lowS:!1,allowedPrivateKeyLengths:[130,131,132]},Rr);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const In=y2,Vr=dr;function Fr(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}class Yi{equals(e){return Fr(this.toRawBytes(),e.toRawBytes())}toBase64(){return Ae(this.toRawBytes())}toString(){throw new Error("`toString` is not implemented on public keys. Use `toBase64()` or `toRawBytes()` instead.")}toSuiPublicKey(){const e=this.toSuiBytes();return Ae(e)}verifyWithIntent(e,n,s){const r=Eg(s,e),i=Os(r,{dkLen:32});return this.verify(i,n)}verifyPersonalMessage(e,n){return this.verifyWithIntent(ie.byteVector().serialize(e).toBytes(),n,"PersonalMessage")}verifyTransaction(e,n){return this.verifyWithIntent(e,n,"TransactionData")}verifyAddress(e){return this.toSuiAddress()===e}toSuiBytes(){const e=this.toRawBytes(),n=new Uint8Array(e.length+1);return n.set([this.flag()]),n.set(e,1),n}toSuiAddress(){return ue(Xe(Os(this.toSuiBytes(),{dkLen:32})).slice(0,Wr*2))}}function dl(t){const e=ve(t),n=ll[e[0]];switch(n){case"ED25519":case"Secp256k1":case"Secp256r1":const s=s2[n],r=e.slice(1,e.length-s),i=e.slice(1+r.length);return{serializedSignature:t,signatureScheme:n,signature:r,publicKey:i,bytes:e};default:throw new Error("Unsupported signature scheme")}}const tu=33,nu=64;class m2 extends Yi{constructor(e){if(super(),typeof e=="string"?this.data=ve(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==tu)throw new Error(`Invalid public key input. Expected ${tu} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.Passkey}async verify(e,n){const s=Tg(n),r=JSON.parse(s.clientDataJson);if(r.type!=="webauthn.get")return!1;const i=ve(r.challenge.replace(/-/g,"+").replace(/_/g,"/"));if(!Fr(e,i))return!1;const o=s.userSignature.slice(1+nu);if(!Fr(this.toRawBytes(),o))return!1;const a=new Uint8Array([...s.authenticatorData,...Vr(s.clientDataJson)]),c=s.userSignature.slice(1,nu+1);return In.verify(c,Vr(a),o)}}m2.SIZE=tu;function Tg(t){const e=typeof t=="string"?ve(t):t;if(e[0]!==as.Passkey)throw new Error("Invalid signature scheme");const n=cp.parse(e.slice(1));return{signatureScheme:"Passkey",serializedSignature:Ae(e),signature:e,authenticatorData:n.authenticatorData,clientDataJson:n.clientDataJson,userSignature:new Uint8Array(n.userSignature),publicKey:new Uint8Array(n.userSignature.slice(1+nu))}}function w2(t,e){if(!!!t)throw new Error(e)}const Og={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},v2=new Set(Object.keys(Og));function qd(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&v2.has(e)}var Kd;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(Kd||(Kd={}));var su;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(su||(su={}));function Wd(t){return t===9||t===32}function S2(t,e){const n=t.replace(/"""/g,'\\"""'),s=n.split(/\r\n|[\n\r]/g),r=s.length===1,i=s.length>1&&s.slice(1).every(h=>h.length===0||Wd(h.charCodeAt(0))),o=n.endsWith('\\"""'),a=t.endsWith('"')&&!o,c=t.endsWith("\\"),l=a||c,u=!r||t.length>70||l||i||o;let f="";const d=r&&Wd(t.charCodeAt(0));return(u&&!d||i)&&(f+=`
`),f+=n,(u||l)&&(f+=`
`),'"""'+f+'"""'}const M2=10,kg=2;function E2(t){return Ca(t,[])}function Ca(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return I2(t,e);default:return String(t)}}function I2(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const n=[...e,t];if(x2(t)){const s=t.toJSON();if(s!==t)return typeof s=="string"?s:Ca(s,n)}else if(Array.isArray(t))return A2(t,n);return _2(t,n)}function x2(t){return typeof t.toJSON=="function"}function _2(t,e){const n=Object.entries(t);return n.length===0?"{}":e.length>kg?"["+N2(t)+"]":"{ "+n.map(([r,i])=>r+": "+Ca(i,e)).join(", ")+" }"}function A2(t,e){if(t.length===0)return"[]";if(e.length>kg)return"[Array]";const n=Math.min(M2,t.length),s=t.length-n,r=[];for(let i=0;i<n;++i)r.push(Ca(t[i],e));return s===1?r.push("... 1 more item"):s>1&&r.push(`... ${s} more items`),"["+r.join(", ")+"]"}function N2(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}function T2(t){return`"${t.replace(O2,k2)}"`}const O2=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function k2(t){return j2[t.charCodeAt(0)]}const j2=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],C2=Object.freeze({});function D2(t,e,n=Og){const s=new Map;for(const x of Object.values(su))s.set(x,B2(e,x));let r,i=Array.isArray(t),o=[t],a=-1,c=[],l=t,u,f;const d=[],h=[];do{a++;const x=a===o.length,B=x&&c.length!==0;if(x){if(u=h.length===0?void 0:d[d.length-1],l=f,f=h.pop(),B)if(i){l=l.slice();let j=0;for(const[q,P]of c){const J=q-j;P===null?(l.splice(J,1),j++):l[J]=P}}else{l={...l};for(const[j,q]of c)l[j]=q}a=r.index,o=r.keys,c=r.edits,i=r.inArray,r=r.prev}else if(f){if(u=i?a:o[a],l=f[u],l==null)continue;d.push(u)}let T;if(!Array.isArray(l)){var p,b;qd(l)||w2(!1,`Invalid AST Node: ${E2(l)}.`);const j=x?(p=s.get(l.kind))===null||p===void 0?void 0:p.leave:(b=s.get(l.kind))===null||b===void 0?void 0:b.enter;if(T=j==null?void 0:j.call(e,l,u,f,d,h),T===C2)break;if(T===!1){if(!x){d.pop();continue}}else if(T!==void 0&&(c.push([u,T]),!x))if(qd(T))l=T;else{d.pop();continue}}if(T===void 0&&B&&c.push([u,l]),x)d.pop();else{var S;r={inArray:i,index:a,keys:o,edits:c,prev:r},i=Array.isArray(l),o=i?l:(S=n[l.kind])!==null&&S!==void 0?S:[],a=-1,c=[],f&&h.push(f),f=l}}while(r!==void 0);return c.length!==0?c[c.length-1][1]:t}function B2(t,e){const n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function U2(t){return D2(t,z2)}const L2=80,z2={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>Q(t.definitions,`

`)},OperationDefinition:{leave(t){const e=ge("(",Q(t.variableDefinitions,", "),")"),n=Q([t.operation,Q([t.name,e]),Q(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:s})=>t+": "+e+ge(" = ",n)+ge(" ",Q(s," "))},SelectionSet:{leave:({selections:t})=>Jt(t)},Field:{leave({alias:t,name:e,arguments:n,directives:s,selectionSet:r}){const i=ge("",t,": ")+e;let o=i+ge("(",Q(n,", "),")");return o.length>L2&&(o=i+ge(`(
`,Co(Q(n,`
`)),`
)`)),Q([o,Q(s," "),r]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+ge(" ",Q(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>Q(["...",ge("on ",t),Q(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:s,selectionSet:r})=>`fragment ${t}${ge("(",Q(n,", "),")")} on ${e} ${ge("",Q(s," ")," ")}`+r},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?S2(t):T2(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+Q(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+Q(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+ge("(",Q(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>ge("",t,`
`)+Q(["schema",Q(e," "),Jt(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>ge("",t,`
`)+Q(["scalar",e,Q(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>ge("",t,`
`)+Q(["type",e,ge("implements ",Q(n," & ")),Q(s," "),Jt(r)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:s,directives:r})=>ge("",t,`
`)+e+(Gd(n)?ge(`(
`,Co(Q(n,`
`)),`
)`):ge("(",Q(n,", "),")"))+": "+s+ge(" ",Q(r," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:s,directives:r})=>ge("",t,`
`)+Q([e+": "+n,ge("= ",s),Q(r," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>ge("",t,`
`)+Q(["interface",e,ge("implements ",Q(n," & ")),Q(s," "),Jt(r)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:s})=>ge("",t,`
`)+Q(["union",e,Q(n," "),ge("= ",Q(s," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:s})=>ge("",t,`
`)+Q(["enum",e,Q(n," "),Jt(s)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>ge("",t,`
`)+Q([e,Q(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:s})=>ge("",t,`
`)+Q(["input",e,Q(n," "),Jt(s)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,repeatable:s,locations:r})=>ge("",t,`
`)+"directive @"+e+(Gd(n)?ge(`(
`,Co(Q(n,`
`)),`
)`):ge("(",Q(n,", "),")"))+(s?" repeatable":"")+" on "+Q(r," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>Q(["extend schema",Q(t," "),Jt(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>Q(["extend scalar",t,Q(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>Q(["extend type",t,ge("implements ",Q(e," & ")),Q(n," "),Jt(s)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>Q(["extend interface",t,ge("implements ",Q(e," & ")),Q(n," "),Jt(s)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>Q(["extend union",t,Q(e," "),ge("= ",Q(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>Q(["extend enum",t,Q(e," "),Jt(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>Q(["extend input",t,Q(e," "),Jt(n)]," ")}};function Q(t,e=""){var n;return(n=t==null?void 0:t.filter(s=>s).join(e))!==null&&n!==void 0?n:""}function Jt(t){return ge(`{
`,Co(Q(t,`
`)),`
}`)}function ge(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function Co(t){return ge("  ",t.replace(/\n/g,`
  `))}function Gd(t){var e;return(e=t==null?void 0:t.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}var ru=(t=>(t.PersonalMessage="PERSONAL_MESSAGE",t.TransactionData="TRANSACTION_DATA",t))(ru||{});class nt extends String{constructor(e,n){super(e),this.value=e,this.__meta__=n}toString(){return this.value}}new nt(`
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
    `,{fragmentName:"OBJECT_OWNER_FIELDS"});new nt(`
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
}`,{fragmentName:"OBJECT_FIELDS"});new nt(`
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
}`,{fragmentName:"MOVE_OBJECT_FIELDS"});new nt(`
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
    `,{fragmentName:"TRANSACTION_FIELDS"});const P2=new nt(`
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
    `),R2=new nt(`
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
    `),$2=new nt(`
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
}`),V2=new nt(`
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
    `),F2=new nt(`
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
    `),q2=new nt(`
    query getReferenceGasPrice {
  epoch {
    referenceGasPrice
  }
}
    `),K2=new nt(`
    query defaultSuinsName($address: SuiAddress!) {
  address(address: $address) {
    defaultSuinsName
  }
}
    `),W2=new nt(`
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
}`),G2=new nt(`
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
}`),H2=new nt(`
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
}`),Y2=new nt(`
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
}`),Z2=new nt(`
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
}`),Q2=new nt(`
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
    `);var jg=t=>{throw TypeError(t)},fl=(t,e,n)=>e.has(t)||jg("Cannot "+n),X2=(t,e,n)=>(fl(t,e,"read from private field"),n?n.call(t):e.get(t)),Hd=(t,e,n)=>e.has(t)?jg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),J2=(t,e,n,s)=>(fl(t,e,"write to private field"),e.set(t,n),n),Lt=(t,e,n)=>(fl(t,e,"access private method"),n),ca,ft,St;class eS extends Yp{constructor({graphqlClient:e,mvr:n}){super({network:e.network,base:e,mvr:n}),Hd(this,ft),Hd(this,ca),J2(this,ca,e)}async getObjects(e){const n=qi(e.objectIds,50),s=[];for(const r of n){const i=await Lt(this,ft,St).call(this,{query:G2,variables:{objectKeys:r.map(o=>({address:o}))}},o=>o.multiGetObjects);s.push(...r.map(o=>ue(o)).map(o=>i.find(a=>(a==null?void 0:a.address)===o)??new An("notFound",`Object ${o} not found`)).map(o=>{var a,c,l,u,f,d,h;return o instanceof An?o:{id:o.address,version:(a=o.version)==null?void 0:a.toString(),digest:o.digest,owner:fc(o.owner),type:(u=(l=(c=o.asMoveObject)==null?void 0:c.contents)==null?void 0:l.type)==null?void 0:u.repr,content:Promise.resolve((d=(f=o.asMoveObject)==null?void 0:f.contents)!=null&&d.bcs?ve(o.asMoveObject.contents.bcs):new Uint8Array),previousTransaction:((h=o.previousTransaction)==null?void 0:h.digest)??null}}))}return{objects:s}}async getOwnedObjects(e){const n=await Lt(this,ft,St).call(this,{query:W2,variables:{owner:e.address,limit:e.limit,cursor:e.cursor,filter:e.type?{type:(await this.mvr.resolveType({type:e.type})).type}:void 0}},s=>{var r;return(r=s.address)==null?void 0:r.objects});return{objects:n.nodes.map(s=>{var r,i,o,a,c;return{id:s.address,version:(r=s.version)==null?void 0:r.toString(),digest:s.digest,owner:fc(s.owner),type:(o=(i=s.contents)==null?void 0:i.type)==null?void 0:o.repr,content:Promise.resolve((a=s.contents)!=null&&a.bcs?ve(s.contents.bcs):new Uint8Array),previousTransaction:((c=s.previousTransaction)==null?void 0:c.digest)??null}}),hasNextPage:n.pageInfo.hasNextPage,cursor:n.pageInfo.endCursor??null}}async getCoins(e){const n=await Lt(this,ft,St).call(this,{query:$2,variables:{owner:e.address,cursor:e.cursor,first:e.limit,type:`0x2::coin::Coin<${(await this.mvr.resolveType({type:e.coinType})).type}>`}},s=>{var r;return(r=s.address)==null?void 0:r.objects});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,objects:n.nodes.map(s=>{var r,i,o,a,c,l,u;return{id:s.address,version:(r=s.version)==null?void 0:r.toString(),digest:s.digest,owner:fc(s.owner),type:(o=(i=s.contents)==null?void 0:i.type)==null?void 0:o.repr,balance:(c=(a=s.contents)==null?void 0:a.json)==null?void 0:c.balance,content:Promise.resolve((l=s.contents)!=null&&l.bcs?ve(s.contents.bcs):new Uint8Array),previousTransaction:((u=s.previousTransaction)==null?void 0:u.digest)??null}})}}async getBalance(e){var s;const n=await Lt(this,ft,St).call(this,{query:R2,variables:{owner:e.address,type:(await this.mvr.resolveType({type:e.coinType})).type}},r=>{var i;return(i=r.address)==null?void 0:i.balance});return{balance:{coinType:(s=n.coinType)==null?void 0:s.repr,balance:n.totalBalance}}}async getAllBalances(e){const n=await Lt(this,ft,St).call(this,{query:P2,variables:{owner:e.address}},s=>{var r;return(r=s.address)==null?void 0:r.balances});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,balances:n.nodes.map(s=>{var r;return{coinType:(r=s.coinType)==null?void 0:r.repr,balance:s.totalBalance}})}}async getTransaction(e){const n=await Lt(this,ft,St).call(this,{query:Z2,variables:{digest:e.digest}},s=>s.transaction);return{transaction:hc(n)}}async executeTransaction(e){var s;const n=await Lt(this,ft,St).call(this,{query:Y2,variables:{transactionDataBcs:Ae(e.transaction),signatures:e.signatures}},r=>r.executeTransaction);if(n.errors)throw n.errors.length===1?new Error(n.errors[0]):new AggregateError(n.errors.map(r=>new Error(r)));return{transaction:hc((s=n.effects)==null?void 0:s.transaction)}}async dryRunTransaction(e){var s;const n=await Lt(this,ft,St).call(this,{query:H2,variables:{transaction:{bcs:{value:Ae(e.transaction)}}}},r=>r.simulateTransaction);if(n.error)throw new Error(n.error);return{transaction:hc((s=n.effects)==null?void 0:s.transaction)}}async getReferenceGasPrice(){return{referenceGasPrice:await Lt(this,ft,St).call(this,{query:q2},n=>{var s;return(s=n.epoch)==null?void 0:s.referenceGasPrice})}}async getDynamicFields(e){const n=await Lt(this,ft,St).call(this,{query:V2,variables:{parentId:e.parentId}},s=>{var r;return(r=s.address)==null?void 0:r.dynamicFields});return{dynamicFields:n.nodes.map(s=>{var i,o,a,c,l,u,f,d,h,p,b,S,x,B,T,j;const r=((i=s.value)==null?void 0:i.__typename)==="MoveObject"?(a=(o=s.value.contents)==null?void 0:o.type)==null?void 0:a.repr:(l=(c=s.value)==null?void 0:c.type)==null?void 0:l.repr;return{id:mp(e.parentId,(f=(u=s.name)==null?void 0:u.type)==null?void 0:f.repr,ve((d=s.name)==null?void 0:d.bcs)),type:Lr(((h=s.value)==null?void 0:h.__typename)==="MoveObject"?`0x2::dynamic_field::Field<0x2::dynamic_object_field::Wrapper<${(b=(p=s.name)==null?void 0:p.type)==null?void 0:b.repr}>,0x2::object::ID>`:`0x2::dynamic_field::Field<${(x=(S=s.name)==null?void 0:S.type)==null?void 0:x.repr},${r}>`),name:{type:(T=(B=s.name)==null?void 0:B.type)==null?void 0:T.repr,bcs:ve((j=s.name)==null?void 0:j.bcs)},valueType:r}}),cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage}}async verifyZkLoginSignature(e){const n=e.intentScope==="TransactionData"?ru.TransactionData:ru.PersonalMessage,s=await Lt(this,ft,St).call(this,{query:Q2,variables:{bytes:e.bytes,signature:e.signature,intentScope:n,author:e.author}},r=>r.verifyZkLoginSignature);return{success:s.success??!1,errors:s.error?[s.error]:[]}}async defaultNameServiceName(e){return{data:{name:await Lt(this,ft,St).call(this,{query:K2,signal:e.signal,variables:{address:e.address}},s=>{var r;return((r=s.address)==null?void 0:r.defaultSuinsName)??null})}}}async getMoveFunction(e){var r,i,o;const n=await Lt(this,ft,St).call(this,{query:F2,variables:{package:(await this.mvr.resolvePackage({package:e.packageId})).package,module:e.moduleName,function:e.name}},a=>{var c,l;return(l=(c=a.package)==null?void 0:c.module)==null?void 0:l.function});let s="unknown";switch(n.visibility){case"PUBLIC":s="public";break;case"PRIVATE":s="private";break;case"FRIEND":s="friend";break}return{function:{packageId:ue(e.packageId),moduleName:e.moduleName,name:n.name,visibility:s,isEntry:n.isEntry??!1,typeParameters:((r=n.typeParameters)==null?void 0:r.map(({constraints:a})=>({isPhantom:!1,constraints:a.map(c=>{switch(c){case"COPY":return"copy";case"DROP":return"drop";case"STORE":return"store";case"KEY":return"key";default:return"unknown"}})??[]})))??[],parameters:((i=n.parameters)==null?void 0:i.map(a=>Yd(a.signature)))??[],returns:((o=n.return)==null?void 0:o.map(({signature:a})=>Yd(a)))??[]}}}resolveTransactionPlugin(){throw new Error("GraphQL client does not support transaction resolution yet")}}ca=new WeakMap;ft=new WeakSet;St=async function(t,e){const{data:n,errors:s}=await X2(this,ca).query(t);tS(s);const r=n&&(e?e(n):n);if(r==null)throw new Error("Missing response data");return r};function tS(t){if(!t||t.length===0)return;const e=t.map(n=>new nS(n));throw e.length===1?e[0]:new AggregateError(e)}class nS extends Error{constructor(e){super(e.message),this.locations=e.locations}}function fc(t){var e,n,s;switch(t.__typename){case"AddressOwner":return{$kind:"AddressOwner",AddressOwner:(e=t.address)==null?void 0:e.address};case"ConsensusAddressOwner":return{$kind:"ConsensusAddressOwner",ConsensusAddressOwner:{owner:(n=t==null?void 0:t.address)==null?void 0:n.address,startVersion:String(t.startVersion)}};case"ObjectOwner":return{$kind:"ObjectOwner",ObjectOwner:(s=t.address)==null?void 0:s.address};case"Immutable":return{$kind:"Immutable",Immutable:!0};case"Shared":return{$kind:"Shared",Shared:{initialSharedVersion:String(t.initialSharedVersion)}}}}function hc(t){var n,s,r,i,o,a,c,l,u,f,d,h;const e={};if((s=(n=t.effects)==null?void 0:n.unchangedConsensusObjects)==null||s.nodes.forEach(p=>{var b,S,x,B,T,j;if(p.__typename==="ConsensusObjectRead"){const q=(B=(x=(S=(b=p.object)==null?void 0:b.asMoveObject)==null?void 0:S.contents)==null?void 0:x.type)==null?void 0:B.repr,P=(j=(T=p.object)==null?void 0:T.asMoveObject)==null?void 0:j.address;q&&P&&(e[P]=q)}}),(i=(r=t.effects)==null?void 0:r.objectChanges)==null||i.nodes.forEach(p=>{var x,B,T,j,q,P,J,X;const b=p.address,S=((j=(T=(B=(x=p.inputState)==null?void 0:x.asMoveObject)==null?void 0:B.contents)==null?void 0:T.type)==null?void 0:j.repr)??((X=(J=(P=(q=p.outputState)==null?void 0:q.asMoveObject)==null?void 0:P.contents)==null?void 0:J.type)==null?void 0:X.repr);b&&S&&(e[b]=S)}),(a=(o=t.effects)==null?void 0:o.balanceChanges)!=null&&a.pageInfo.hasNextPage)throw new Error("Pagination for balance changes is not supported");return{digest:t.digest,effects:Qp(ve((c=t.effects)==null?void 0:c.effectsBcs)),epoch:((f=(u=(l=t.effects)==null?void 0:l.epoch)==null?void 0:u.epochId)==null?void 0:f.toString())??null,objectTypes:Promise.resolve(e),transaction:Zp(ve(t.transactionBcs)),signatures:t.signatures.map(p=>p.signatureBytes),balanceChanges:((h=(d=t.effects)==null?void 0:d.balanceChanges)==null?void 0:h.nodes.map(p=>{var b,S;return{coinType:(b=p==null?void 0:p.coinType)==null?void 0:b.repr,address:(S=p.owner)==null?void 0:S.address,amount:p.amount}}))??[]}}function Yd(t){let e=null;return t.ref==="&"?e="immutable":t.ref==="&mut"&&(e="mutable"),{reference:e,body:iu(t.body)}}function iu(t){switch(t){case"address":return{$kind:"address"};case"bool":return{$kind:"bool"};case"u8":return{$kind:"u8"};case"u16":return{$kind:"u16"};case"u32":return{$kind:"u32"};case"u64":return{$kind:"u64"};case"u128":return{$kind:"u128"};case"u256":return{$kind:"u256"}}if(typeof t=="string")throw new Error(`Unknown type: ${t}`);if("vector"in t)return{$kind:"vector",vector:iu(t.vector)};if("datatype"in t)return{$kind:"datatype",datatype:{typeName:`${ue(t.datatype.package)}::${t.datatype.module}::${t.datatype.type}`,typeParameters:t.datatype.typeParameters.map(e=>iu(e))}};if("typeParameter"in t)return{$kind:"typeParameter",index:t.typeParameter};throw new Error(`Unknown type: ${JSON.stringify(t)}`)}var Cg=t=>{throw TypeError(t)},Dg=(t,e,n)=>e.has(t)||Cg("Cannot "+n),ho=(t,e,n)=>(Dg(t,e,"read from private field"),n?n.call(t):e.get(t)),po=(t,e,n)=>e.has(t)?Cg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),go=(t,e,n,s)=>(Dg(t,e,"write to private field"),e.set(t,n),n),Do,Bo,Uo,Lo;class sS extends Error{}class rS extends ol{constructor({url:e,fetch:n=fetch,headers:s={},queries:r={},network:i="unknown",mvr:o}){super({network:i}),po(this,Do),po(this,Bo),po(this,Uo),po(this,Lo),go(this,Do,e),go(this,Bo,r),go(this,Uo,s),go(this,Lo,(...a)=>n(...a)),this.core=new eS({graphqlClient:this,mvr:o})}async query(e){const n=await ho(this,Lo).call(this,ho(this,Do),{method:"POST",headers:{"Content-Type":"application/json",...ho(this,Uo)},body:JSON.stringify({query:typeof e.query=="string"||e.query instanceof String?String(e.query):U2(e.query),variables:e.variables,extensions:e.extensions,operationName:e.operationName}),signal:e.signal});if(!n.ok)throw new sS(`GraphQL request failed: ${n.statusText} (${n.status})`);return await n.json()}async execute(e,n){return this.query({...n,query:ho(this,Bo)[e]})}}Do=new WeakMap;Bo=new WeakMap;Uo=new WeakMap;Lo=new WeakMap;function iS(t){for(let e=0;e<t.length;e++)if(t[e]!==0)return e;return-1}function hl(t,e){const n=t.toString(16);return Dn(n.padStart(e*2,"0").slice(-32*2))}function Bg(t,e){const n=hl(t,e),s=iS(n);return s===-1?new Uint8Array([0]):n.slice(s)}function oS(t){return t==="accounts.google.com"?"https://accounts.google.com":t}function aS(t){if(t.length!==1)throw new Error("Invalid base64Url character: "+t);const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(t);if(n===-1)throw new Error("Invalid base64Url character: "+t);const s=n.toString(2).padStart(6,"0");return Array.from(s).map(Number)}function cS(t){let e=[];for(let n=0;n<t.length;n++){const s=t.charAt(n),r=aS(s);e=e.concat(r)}return e}function uS(t,e){if(t.length<2)throw new Error(`Input (s = ${t}) is not tightly packed because s.length < 2`);let n=cS(t);const s=e%4;if(s!==0)if(s===1)n=n.slice(2);else if(s===2)n=n.slice(4);else throw new Error(`Input (s = ${t}) is not tightly packed because i%4 = 3 (i = ${e}))`);const r=(e+t.length-1)%4;if(r!==3)if(r===2)n=n.slice(0,n.length-2);else if(r===1)n=n.slice(0,n.length-4);else throw new Error(`Input (s = ${t}) is not tightly packed because (i + s.length - 1)%4 = 0 (i = ${e}))`);if(n.length%8!==0)throw new Error("We should never reach here...");const i=new Uint8Array(Math.floor(n.length/8));let o=0;for(let a=0;a<n.length;a+=8){const c=n.slice(a,a+8),l=parseInt(c.join(""),2);i[o++]=l}return new TextDecoder().decode(i)}function lS(t){if(!(t.slice(-1)==="}"||t.slice(-1)===","))throw new Error("Invalid claim");const e=JSON.parse("{"+t.slice(0,-1)+"}");if(Object.keys(e).length!==1)throw new Error("Invalid claim");const n=Object.keys(e)[0];return[n,e[n]]}function Ug(t,e){const n=uS(t.value,t.indexMod4),[s,r]=lS(n);if(s!==e)throw new Error(`Invalid field name: found ${s} expected ${e}`);return r}const dS=g.struct("ZkLoginSignature",{inputs:g.struct("ZkLoginSignatureInputs",{proofPoints:g.struct("ZkLoginSignatureInputsProofPoints",{a:g.vector(g.string()),b:g.vector(g.vector(g.string())),c:g.vector(g.string())}),issBase64Details:g.struct("ZkLoginSignatureInputsClaim",{value:g.string(),indexMod4:g.u8()}),headerBase64:g.string(),addressSeed:g.string()}),maxEpoch:g.u64(),userSignature:g.byteVector()});function fS(t){return dS.parse(typeof t=="string"?ve(t):t)}var Lg=t=>{throw TypeError(t)},pl=(t,e,n)=>e.has(t)||Lg("Cannot "+n),Wn=(t,e,n)=>(pl(t,e,"read from private field"),n?n.call(t):e.get(t)),bo=(t,e,n)=>e.has(t)?Lg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),gr=(t,e,n,s)=>(pl(t,e,"write to private field"),e.set(t,n),n),Zd=(t,e,n)=>(pl(t,e,"access private method"),n),tn,ui,li,zo,ou;const hS=class bs extends Yi{constructor(e,{client:n}={}){super(),bo(this,zo),bo(this,tn),bo(this,ui),bo(this,li),gr(this,ui,n),typeof e=="string"?gr(this,tn,ve(e)):e instanceof Uint8Array?gr(this,tn,e):gr(this,tn,Uint8Array.from(e)),gr(this,li,Wn(this,tn).length!==Wn(this,tn)[0]+1+32),Wn(this,li)&&gr(this,tn,Mr(Wn(this,tn)))}static fromBytes(e,{client:n,address:s,legacyAddress:r}={}){let i;if(r===!0?i=new bs(Mr(e,!0),{client:n}):r===!1?i=new bs(Mr(e,!1),{client:n}):s?(i=new bs(Mr(e,!1),{client:n}),i.toSuiAddress()!==s&&(i=new bs(Mr(e,!0),{client:n}))):i=new bs(e,{client:n}),s&&i.toSuiAddress()!==s)throw new Error("Public key bytes do not match the provided address");return i}static fromProof(e,n){const{issBase64Details:s,addressSeed:r}=n,i=Ug(s,"iss"),o=au(BigInt(r),i,{legacyAddress:!0});if(o.toSuiAddress()===e)return o;const a=au(BigInt(r),i,{legacyAddress:!1});if(a.toSuiAddress()!==e)throw new Error("Proof does not match address");return a}equals(e){return super.equals(e)}toSuiAddress(){return Wn(this,li)?Zd(this,zo,ou).call(this):super.toSuiAddress()}toRawBytes(){return Wn(this,tn)}flag(){return as.ZkLogin}async verify(e,n){throw Error("does not support")}verifyPersonalMessage(e,n){const s=cu(n),r=new bs(s.publicKey).toSuiAddress();return Qd({address:r,bytes:Ae(e),signature:s.serializedSignature,intentScope:"PersonalMessage",client:Wn(this,ui)})}verifyTransaction(e,n){const s=cu(n),r=new bs(s.publicKey).toSuiAddress();return Qd({address:r,bytes:Ae(e),signature:s.serializedSignature,intentScope:"TransactionData",client:Wn(this,ui)})}verifyAddress(e){return e===super.toSuiAddress()||e===Zd(this,zo,ou).call(this)}};tn=new WeakMap;ui=new WeakMap;li=new WeakMap;zo=new WeakSet;ou=function(){const t=Mr(Wn(this,tn),!0),e=new Uint8Array(t.length+1);return e[0]=this.flag(),e.set(t,1),ue(Xe(Os(e,{dkLen:32})).slice(0,Wr*2))};let pS=hS;function au(t,e,n){const s=n!=null&&n.legacyAddress?Bg(t,32):hl(t,32),r=new TextEncoder().encode(oS(e)),i=new Uint8Array(1+r.length+s.length);return i.set([r.length],0),i.set(r,1),i.set(s,1+r.length),new pS(i,n)}function Mr(t,e=!1){const n=t[0]+1,s=BigInt(`0x${Ts(t.slice(n))}`),r=e?Bg(s,32):hl(s,32),i=new Uint8Array(n+r.length);return i.set(t.slice(0,n),0),i.set(r,n),i}async function Qd({address:t,bytes:e,signature:n,intentScope:s,client:r=new rS({url:"https://graphql.mainnet.sui.io/graphql"})}){const i=await r.core.verifyZkLoginSignature({bytes:e,signature:n,intentScope:s,author:t});return i.success===!0&&i.errors.length===0}function cu(t){const e=typeof t=="string"?ve(t):t;if(e[0]!==as.ZkLogin)throw new Error("Invalid signature scheme");const n=e.slice(1),{inputs:s,maxEpoch:r,userSignature:i}=fS(n),{issBase64Details:o,addressSeed:a}=s,c=Ug(o,"iss"),l=au(BigInt(a),c);return{serializedSignature:Ae(e),signatureScheme:"ZkLogin",zkLogin:{inputs:s,maxEpoch:r,userSignature:i,iss:c,addressSeed:BigInt(a)},signature:e,publicKey:l.toRawBytes()}}function gS({signature:t,signatureScheme:e,publicKey:n}){if(!n)throw new Error("`publicKey` is required");const s=n.toRawBytes(),r=new Uint8Array(1+t.length+s.length);return r.set([as[e]]),r.set(t,1),r.set(s,1+t.length),Ae(r)}function bS(t){const e=ve(t),n=ll[e[0]];switch(n){case"Passkey":return Tg(t);case"MultiSig":const s=ie.MultiSig.parse(e.slice(1));return{serializedSignature:t,signatureScheme:n,multisig:s,bytes:e,signature:void 0};case"ZkLogin":return cu(t);case"ED25519":case"Secp256k1":case"Secp256r1":return dl(t);default:throw new Error("Unsupported signature scheme")}}const Po=32,zg="suiprivkey";class yS{async signWithIntent(e,n){const s=Eg(n,e),r=Os(s,{dkLen:32});return{signature:gS({signature:await this.sign(r),signatureScheme:this.getKeyScheme(),publicKey:this.getPublicKey()}),bytes:Ae(e)}}async signTransaction(e){return this.signWithIntent(e,"TransactionData")}async signPersonalMessage(e){const{signature:n}=await this.signWithIntent(g.byteVector().serialize(e).toBytes(),"PersonalMessage");return{bytes:Ae(e),signature:n}}async signAndExecuteTransaction({transaction:e,client:n}){const s=await e.build({client:n}),{signature:r}=await this.signTransaction(s);return(await n.core.executeTransaction({transaction:s,signatures:[r]})).transaction}toSuiAddress(){return this.getPublicKey().toSuiAddress()}}class gl extends yS{}function Da(t){const{prefix:e,words:n}=Qo.decode(t);if(e!==zg)throw new Error("invalid private key prefix");const s=new Uint8Array(Qo.fromWords(n)),r=s.slice(1),i=ll[s[0]];return{scheme:i,schema:i,secretKey:r}}function bl(t,e){if(t.length!==Po)throw new Error("Invalid bytes length");const n=as[e],s=new Uint8Array(t.length+1);return s.set([n]),s.set(t,1),Qo.encode(zg,Qo.toWords(s))}function Xd(t){return!!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(t)}function Pg(t){return!!new RegExp("^m\\/(54|74)'\\/784'\\/[0-9]+'\\/[0-9]+\\/[0-9]+$").test(t)}function yl(t){return Iv(t,"")}function mS(t){return Ts(yl(t))}const Rg=Rr,wS="ed25519 seed",vS=2147483648,SS=new RegExp("^m(\\/[0-9]+')+$"),$g=t=>t.replace("'",""),MS=t=>{const n=js.create(Rg,wS).update(Vu(t)).digest(),s=n.slice(0,32),r=n.slice(32);return{key:s,chainCode:r}},ES=({key:t,chainCode:e},n)=>{const s=new ArrayBuffer(4);new DataView(s).setUint32(0,n);const i=new Uint8Array(1+t.length+s.byteLength);i.set(new Uint8Array(1).fill(0)),i.set(t,1),i.set(new Uint8Array(s,0,s.byteLength),t.length+1);const o=js.create(Rg,e).update(i).digest(),a=o.slice(0,32),c=o.slice(32);return{key:a,chainCode:c}},IS=t=>SS.test(t)?!t.split("/").slice(1).map($g).some(isNaN):!1,Jd=(t,e,n=vS)=>{if(!IS(t))throw new Error("Invalid derivation path");const{key:s,chainCode:r}=MS(e);return t.split("/").slice(1).map($g).map(o=>parseInt(o,10)).reduce((o,a)=>ES(o,a+n),{key:s,chainCode:r})},uu=32;class Vg extends Yi{constructor(e){if(super(),typeof e=="string"?this.data=ve(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==uu)throw new Error(`Invalid public key input. Expected ${uu} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.ED25519}async verify(e,n){let s;if(typeof n=="string"){const r=dl(n);if(r.signatureScheme!=="ED25519")throw new Error("Invalid signature scheme");if(!Fr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return Kn.verify(s,e,this.toRawBytes())}}Vg.SIZE=uu;const ef="m/44'/784'/0'/0'/0'";class Tn extends gl{constructor(e){if(super(),e)this.keypair={publicKey:e.publicKey,secretKey:e.secretKey.slice(0,32)};else{const n=Kn.utils.randomPrivateKey();this.keypair={publicKey:Kn.getPublicKey(n),secretKey:n}}}getKeyScheme(){return"ED25519"}static generate(){const e=Kn.utils.randomPrivateKey();return new Tn({publicKey:Kn.getPublicKey(e),secretKey:e})}static fromSecretKey(e,n){if(typeof e=="string"){const i=Da(e);if(i.schema!=="ED25519")throw new Error(`Expected a ED25519 keypair, got ${i.schema}`);return this.fromSecretKey(i.secretKey,n)}const s=e.length;if(s!==Po)throw new Error(`Wrong secretKey size. Expected ${Po} bytes, got ${s}.`);const r={publicKey:Kn.getPublicKey(e),secretKey:e};if(!n||!n.skipValidation){const o=new TextEncoder().encode("sui validation"),a=Kn.sign(o,e);if(!Kn.verify(a,o,r.publicKey))throw new Error("provided secretKey is invalid")}return new Tn(r)}getPublicKey(){return new Vg(this.keypair.publicKey)}getSecretKey(){return bl(this.keypair.secretKey.slice(0,Po),this.getKeyScheme())}async sign(e){return Kn.sign(e,this.keypair.secretKey)}static deriveKeypair(e,n){if(n==null&&(n=ef),!Xd(n))throw new Error("Invalid derivation path");const{key:s}=Jd(n,mS(e));return Tn.fromSecretKey(s)}static deriveKeypairFromSeed(e,n){if(n==null&&(n=ef),!Xd(n))throw new Error("Invalid derivation path");const{key:s}=Jd(n,e);return Tn.fromSecretKey(s)}}class ml{static stringToKeyPair(e){const n=ml.stringToPhrase(e);return Tn.deriveKeypair(n)}static stringToPhrase(e){let n=`${e}`;do n=n.repeat(2)+'*"';while(n.length<32);const s=Array.from(`${n}`).map(o=>o.charCodeAt(0));if(s.length>32)for(let o=32;o<s.length;o++){const a=o%32;s[a]=(s[a]+s[o])%256}const r=new Uint8Array(32);return r.set(s.slice(0,32)),Mv(r,xv)}}const Ss=class Ss extends Bn{constructor(e={}){super(e),this._suiMaster=e.suiMaster,this._objects={}}asArray(){return Object.values(this._objects)}findMostRecentByTypeName(e){return this.findMostRecent(n=>n.typeName==e)}find(e){for(const n in this._objects)if(e(this._objects[n]))return this._objects[n];return null}findMostRecent(e){let n=null,s=null;for(const r in this._objects)e(this._objects[r])&&(!n||n.getTime()<=this._objects[r].constructedAt.getTime())&&(n=this._objects[r].constructedAt,s=this._objects[r]);return s}push(e){if(e&&e.address){const n=e;return this._objects[n.address]=n,n}else if(e&&(""+e).indexOf("0x")===0){if(this._objects[e])return this._objects[e];const n=new ar({id:e,suiMaster:this._suiMaster});return this._objects[n.address]=n,n}return null}byAddress(e){return this._objects[e]?this._objects[e]:null}async fetchObjects(){const e=this.asArray(),n=[];for(const i of e)!i.isDeleted&&n.indexOf(i.address)===-1&&n.push(i.address);this.log("querying details about",n.length,"objects"),this.log(n);let s=[];const r=50;for(let i=0;i<n.length;i+=r){const o=n.slice(i,i+r);let a=[],c=null;try{const l=console.warn;console.warn=u=>{c=u},a=await this._suiMaster._client.multiGetObjects({ids:o,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),console.warn=l}catch(l){console.error(l)}c?this.log("got",a.length,"objects but with warning (ok, but probably it is different client vs rpc versions)"):this.log("got",a.length,"objects"),a&&a.length&&(s=s.concat(a))}for(const i of e){const o=s.find(a=>{var c;return i.idEquals((c=a==null?void 0:a.data)==null?void 0:c.objectId)});o?i.tryToFillDataFromObjectChange(o):s.find(c=>{var l,u;return((l=c==null?void 0:c.error)==null?void 0:l.code)=="deleted"&&i.idEquals((u=c==null?void 0:c.error)==null?void 0:u.object_id)})?i.markAsDeleted():this.log("not found in results",i)}}static instanceOf(e,n={}){return Ss._instances[e]||(Ss._instances[e]=new Ss(n)),Ss._instances[e]}};Zr(Ss,"_instances",{});let lu=Ss;class xS{constructor(e={}){this._coinType=e.coinType,this._suiCoins=e.suiCoins,this._exists=null,this._metadata=null}normalizeAmount(e){if(typeof e=="string"&&e.indexOf(".")!==-1){if(!this.decimals)throw new Error("Please load coin metadata first");return BigInt(Math.floor(parseFloat(e,10)*Math.pow(10,this.decimals)))}return BigInt(e)}async lazyNormalizeAmount(e){return await this.getMetadata(),this.normalizeAmount(e)}amountToString(e,n={}){if(!this.decimals)throw new Error("Please load coin metadata first");const s=!!n.withAbbr,r=n.separateThousands,i=(""+BigInt(e)).padStart(this.decimals+1,"0"),o=i.length-this.decimals;let a=i.substring(0,o)+"."+i.substring(o);if(a.includes(".")&&(a=a.replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""),a.includes(".")||(a=""+a+".0")),s){const c=BigInt(Math.floor(Number(a)));if(c>1000n){if(c<1000000n)return this.formatWithAbbr(c,1000n,"K",r);if(c>=1000000n&&c<1000000000n)return this.formatWithAbbr(c,1000000n,"M",r);if(c>=1000000000n&&c<1000000000000n)return this.formatWithAbbr(c,1000000000n,"B",r);if(c>=1000000000000n)return this.formatWithAbbr(c,1000000000000n,"T",r)}}if(r){const[c,l]=a.split("."),u=typeof r=="string"?r:",";a=""+c.replace(/\B(?=(\d{3})+(?!\d))/g,u)+"."+l}return a}formatWithAbbr(e,n,s,r=!1){let i=""+Math.floor(Number(e)/Number(n/1000n));i=i.padEnd(4,"0");const o=Intl.NumberFormat("en-US").format(Number(i));let a="";r&&(a=typeof r=="string"?r:",");const c=o.split(","),l=c.pop();return c.join(a)+"."+l+s}get suiMaster(){return this._suiCoins.suiMaster}get coinType(){return this._coinType.indexOf("0x")===0?this._coinType:"0x"+this._coinType}get coinObjectType(){return"0x2::coin::Coin<"+this.coinType+">"}get decimals(){if(this.metadata)return this.metadata.decimals}get metadata(){return this._metadata}get symbol(){return this.metadata?this.metadata.symbol:null}get name(){return this.metadata.name}isSUI(){return this._coinType.toLowerCase()=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::sui"}setMetadata(e){return e&&e.decimals&&e.decimals>0&&e.name&&e.symbol?(this._metadata=e,this._exists=!0,!0):!1}async getMetadata(){if(this._metadata)return this._metadata;if(this.__getMetadataPromise)return await this.__getMetadataPromise;this.__getMetadataResolver=null,this.__getMetadataPromise=new Promise(n=>{this.__getMetadataResolver=n});let e=null;try{e=await this.suiMaster.client.getCoinMetadata({coinType:this.coinType})}catch(n){console.error(n),e=null}return e?(this._metadata=e,this._exists=!0):this._exists=!1,this.__getMetadataResolver(!0),!0}async getBalance(e){const n=[];let s=null,r=null;do s=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:r}),n.push(...s.data),r=s.nextCursor;while(s.hasNextPage);let i=BigInt(0);for(const o of n)i=i+BigInt(o.balance);return i}async coinOfAmountToTxCoin(e,n,s,r=!1){const i=await this.lazyNormalizeAmount(s),o=BigInt(i),a=await this.coinObjectsEnoughForAmount(n,o,r);if(!a||!a.length)throw new Error("you do not have enough coins of type "+this.coinType);if(a.length==1)return this.isSUI()?e.add(Rt.SplitCoins(e.gas,[e.pure.u64(o)])):e.add(Rt.SplitCoins(e.object(a[0]),[e.pure.u64(o)]));{const c=a.shift();return e.add(Rt.MergeCoins(e.object(c),a.map(u=>e.object(u)))),e.add(Rt.SplitCoins(e.object(c),[e.pure.u64(o)]))}}async coinObjectsEnoughForAmount(e,n,s=!1){const r=BigInt(n),i=[],o=[];let a=null,c=null;do a=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:c}),o.push(...a.data),c=a.nextCursor;while(a.hasNextPage);o.sort((u,f)=>Number(f.balance)-Number(u.balance));let l=BigInt(0);for(const u of o)l<=r?(i.push(u.coinObjectId),l=l+BigInt(u.balance)):s&&BigInt(u.balance)==0n&&i.push(u.coinObjectId);return l>=r?i:null}}const _S=[{decimals:9,name:"Sui",symbol:"SUI",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x0000000000000000000000000000000000000000000000000000000000000002-sui-SUI.svg",id:"0x9258181f5ceac8dbffb7030890243caed69a9599d2886d957a9cb7656af3bdb3",type:"0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"},{decimals:5,name:"FUD",symbol:"FUD",description:"The community coin of Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1-fud-FUD.webp",id:"0x01087411ef48aaac1eb6e24803213e3a60a03b147dac930e5e341f17a85e524e",type:"0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD"},{decimals:4,name:"SPAM",symbol:"SPAM",description:"The original Proof of Spam coin",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a-spam-SPAM.webp",id:"0xe01e2172335cd2b52bf2b3010ae6c95e8c2b4958db72ba11330be70e85793274",type:"0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a::spam::SPAM"},{decimals:6,name:"DeepBook Token",symbol:"DEEP",description:"The DEEP token secures the DeepBook protocol, the premier wholesale liquidity venue for on-chain trading.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270-deep-DEEP.svg",id:"0x6e60b051a08fa836f5a7acd7c464c8d9825bc29c44657fe170fe9b8e1e4770c0",type:"0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP"},{decimals:6,name:"USDC",symbol:"USDC",description:"USDC is a US dollar-backed stablecoin issued by Circle. USDC is designed to provide a faster, safer, and more efficient way to send, spend, and exchange money around the world.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7-usdc-USDC.webp",id:"0x69b7a7c3c200439c1b5f3b19d7d495d5966d5f08de66c69276152f8db3992ec6",type:"0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC"},{decimals:6,name:"USDC (Bridged)",symbol:"USDC (Bridged)",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf-coin-COIN.webp",id:"0x4fbf84f3029bd0c0b77164b587963be957f853eccf834a67bb9ecba6ec80f189",type:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},{decimals:6,name:"Tether USD",symbol:"USDT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c-coin-COIN.webp",id:"0xfb0e3eb97dd158a5ae979dddfa24348063843c5b20eb8381dd5fa7c93699e45c",type:"0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN"},{decimals:9,name:"Bucket USD",symbol:"BUCK",description:"the stablecoin minted through bucketprotocol.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2-buck-BUCK.svg",id:"0x0db5e20f3fc2b12e294e5474babbec1c2efd96f21663accfbcb25da99a48838a",type:"0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK"},{decimals:9,name:"Cetus Token",symbol:"CETUS",description:"CETUS is the native token of Cetus Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b-cetus-CETUS.webp",id:"0x4c0dce55eff2db5419bbd2d239d1aa22b4a400c01bbb648b058a9883989025da",type:"0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS"},{decimals:9,name:"Turbos",symbol:"TURBOS",description:"Turbos Finance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a-turbos-TURBOS.svg",id:"0x95a4518ae9e019c757df6703dce9ea5ecac8b319b9afed3a44c4d50363a66b42",type:"0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS"},{decimals:9,name:"SPT",symbol:"SPT",description:"Seapad launchpad foundation token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca-spt-SPT.webp",id:"0x5075594c01d46f3bcbc4a7ef1462058273bece7793eebd0464963597c9fd0935",type:"0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca::spt::SPT"},{decimals:0,name:"KOTO",symbol:"KOTO",description:"The utility token of the Studio Mirai ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975-koto-KOTO.webp",id:"0x5db6c4ce2921c9ef5fe725d18f0f7b276bebde5fa7981f9bc2bb504c9913384a",type:"0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975::koto::KOTO"},{decimals:2,name:"BLUB",symbol:"BLUB",description:"A Dirty Fish in the Waters of the Sui Ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0-BLUB-BLUB.webp",id:"0xac32b519790cae96c3317457d903d61d04f1bc8f7710096d80fcba72c7a53703",type:"0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB"},{decimals:9,name:"Volo Staked SUI",symbol:"vSUI",description:"Volo's SUI staking solution provides the best user experience and highest level of decentralization, security, combined with an attractive reward mechanism and instant staking liquidity through a bond-like synthetic token called voloSUI.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55-cert-CERT.webp",id:"0xabd84a23467b33854ab25cf862006fd97479f8f6f53e50fe732c43a274d939bd",type:"0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT"},{decimals:9,name:"NAVX Token",symbol:"NAVX",description:"One-stop Liquidity Protocol on Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5-navx-NAVX.webp",id:"0xdc0e051f8aab62d5ba1816bb7a03097faeccb7546c958da571d48882fd8dd0cd",type:"0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX"},{decimals:9,name:"haSUI",symbol:"haSUI",description:"haSUI is a staking token of SUI",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d-hasui-HASUI.svg",id:"0x2c5f33af93f6511df699aaaa5822d823aac6ed99d4a0de2a4a50b3afa0172e24",type:"0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI"},{decimals:9,name:"HammerHead",symbol:"HHS",description:"The Coolest Shark on SUI ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c-hhs-HHS.webp",id:"0x7e24b4469033ee68de54da91032a598e27e5c0ddfc366315d22d1eba7a955f96",type:"0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c::hhs::HHS"},{decimals:9,name:"REAP",symbol:"REAP",description:"Reap Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066-reap_token-REAP_TOKEN.webp",id:"0x4602dc7bd60d623c57424af5480fe9c104d30bbbb051af18e0a283b3dd7a5367",type:"0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066::reap_token::REAP_TOKEN"},{decimals:9,name:"Scallop",symbol:"SCA",description:"SCA is the native token of Scallop Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6-sca-SCA.webp",id:"0x5d26a1e9a55c88147ac870bfa31b729d7f49f8804b8b3adfdf3582d301cca844",type:"0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA"},{decimals:9,name:"afSUI",symbol:"AFSUI",description:"Aftermath Staked Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc-afsui-AFSUI.webp",id:"0x2f9217f533e51334873a39b8026a4aa6919497b47f49d0986a4f1aec66f8a34d",type:"0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI"},{decimals:9,name:"Suiswap Token",symbol:"SSWP",description:"Suiswap Platform Governance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc-TOKEN-TOKEN.webp",id:"0x41911b7d8d87ceee4043ea3b83f402a03d0ffa0b286e78b23dcd81c9cde0f02f",type:"0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc::TOKEN::TOKEN"},{decimals:1,name:"SuiBoxer Coin",symbol:"SBOX",description:"SUI said fuck off but we say welcome, airdrop for everyone.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6-sbox-SBOX.webp",id:"0x7f35ac7fe5a05df9e68fa7d633a382db4f002209e57ccee3bf9d9f73eedff1b9",type:"0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6::sbox::SBOX"},{decimals:6,name:"SUI PEPE",symbol:"SPEPE",description:"The biggest memecoin on SUI blockchain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df-sui_pepe-SUI_PEPE.webp",id:"0xfdf83fbcc1ad8a407d32791e43a4019e89474f7031aa64b8c05834b1af420eae",type:"0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE"},{decimals:5,name:"Sacabam",symbol:"SCB",description:"The best meme token that Sui has ever seen",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001-scb-SCB.webp",id:"0xa34116a52f537f5235fe5d9a2e92195ffcdb2b55afba70b2b86b40c7f89bb01d",type:"0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001::scb::SCB"},{decimals:9,name:"MOVE",symbol:"MOVE",description:"BlueMove",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f-smove-SMOVE.webp",id:"0x7cfcc03055a0ba4c5ba7fb9727a77e23ccf4d59035646c3c3caf58060eed09a1",type:"0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f::smove::SMOVE"},{decimals:8,name:"Wrapped Ether",symbol:"WETH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5-coin-COIN.webp",id:"0x8900e4ceede3363bef086d6b50ca89d816d0e90bf6bc46efefe1f8455e08f50f",type:"0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN"},{decimals:9,name:"SUIA",symbol:"SUIA",description:"SUIA is the native token of Suia.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19-suia_token-SUIA_TOKEN.webp",id:"0x5875baf15d9fd9cc6148dd3866266f6fc3a3064170434efe97b9ea8c23a50775",type:"0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19::suia_token::SUIA_TOKEN"},{decimals:8,name:"FlowX",symbol:"FLX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c-flx-FLX.svg",id:"0x0bfe34db38444ff4a38e44b86128c7e02d551b8fdca9709fde140292d1ef6e95",type:"0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c::flx::FLX"},{decimals:8,name:"Aptos Coin",symbol:"APT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37-coin-COIN.webp",id:"0xc969c5251f372c0f34c32759f1d315cf1ea0ee5e4454b52aea08778eacfdd0a8",type:"0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN"},{decimals:8,name:"Wrapped SOL",symbol:"SOL",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8-coin-COIN.webp",id:"0x4d2c39082b4477e3e79dc4562d939147ab90c42fc5f3e4acf03b94383cd69b6e",type:"0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN"},{decimals:8,name:"Wrapped Matic",symbol:"WMATIC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676-coin-COIN.webp",id:"0xb45d92d3ee25147c3235f881e63f7f362f9d6cbdfcba1f120fae6a6c930a1c8c",type:"0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN"},{decimals:8,name:"Wrapped BNB",symbol:"WBNB",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f-coin-COIN.webp",id:"0x1d0975ab0726f2e52384b6ea0f2c94c2dbdad8b004ee6b5ee552a3c789c044f0",type:"0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN"},{decimals:6,name:"Flame Token",symbol:"FLAME",description:"Flame Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2-flame-FLAME.webp",id:"0x1f42388fe61ae47fcd33f089bd0ee73f19f3984b2b6c09a51a755d0420fe6eab",type:"0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2::flame::FLAME"},{decimals:6,name:"ISSP Coin",symbol:"ISSP",description:"Sui20 Coin for ISSP",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8-issp-ISSP.webp",id:"0x39529b412fe961f76da1485ee48dbf7a2a084845b7f0f45eb97196e602446bb1",type:"0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8::issp::ISSP"},{decimals:9,name:"Suizuki",symbol:"ZUKI",description:"Fast chain needs fast car",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908-zuki-ZUKI.webp",id:"0x03e0c971e4bf3f1a3d0c220bb93c041c873823e2382e081a4330c4c107361d7a",type:"0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908::zuki::ZUKI"},{decimals:9,name:"Burrial",symbol:"BURRY",description:"Burry your `Sui.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2-burry-BURRY.webp",id:"0xb3e2d41c9d775545e299faa739d6448108c09ff997d13cac0e21de64c66413ee",type:"0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2::burry::BURRY"},{decimals:8,name:"Poseidollar",symbol:"PDO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880-pdo-PDO.webp",id:"0xf637a1acf7ec74634baec11b0a7cbd24244fe7d8bee7bc636cd2dcc12c756016",type:"0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880::pdo::PDO"},{decimals:6,name:"Sudo LP Token",symbol:"SLP",description:"LP Token for Sudo Market",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2-slp-SLP.webp",id:"0xaa1c21d59252f4b790faf9ab1c3a9fac5be59b612688c0ec2e24807d6cf9f626",type:"0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2::slp::SLP"},{decimals:8,name:"Wrapped AVAX",symbol:"WAVAX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766-coin-COIN.webp",id:"0x23580088ff9f83848f86bc1cbf4964735116027e9cccad11b2dc96f16badab72",type:"0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN"},{decimals:8,name:"Wrapped BTC",symbol:"WBTC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881-coin-COIN.webp",id:"0x5d3c6e60eeff8a05b693b481539e7847dfe33013e7070cdcb387f5c0cac05dfd",type:"0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN"},{decimals:8,name:"Wrapped Fantom",symbol:"WFTM",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396-coin-COIN.webp",id:"0x8b55537cb11498721f7bbe2055a9a3e9c947da81765e98d4313c820bdd7aa630",type:"0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN"},{decimals:8,name:"Celo native asset",symbol:"CELO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f-coin-COIN.webp",id:"0xe288c52bb4d70465267ed1c8f727252a40e865ce9a9d5343d13d40f5e1a1fc46",type:"0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN"},{decimals:8,name:"Poseidollar Shares",symbol:"PSH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a-psh-PSH.webp",id:"0xf6b09ea64d2f4f70e47794d84e432552ec9c7e948bf91b3eb707a5a2d056bc74",type:"0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a::psh::PSH"},{decimals:6,name:"Ondo US Dollar Yield",symbol:"USDY",description:"Ondo US Dollar Yield",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb-usdy-USDY.svg",id:"0xd8dd6cf839e2367de6e6107da4b4361f44798dd6cf26d094058d94e4cee25e36",type:"0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY"},{decimals:8,name:"Wrapped GLMR",symbol:"WGLMR",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75-coin-COIN.webp",id:"0xcd56eb0efc872d7e27fa9e5e31d70be594ccc4f40a6354521201b0e15971c8de",type:"0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75::coin::COIN"},{decimals:6,name:"SUIZ",symbol:"SUIZ",description:"Suizzle Proof of Work Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d-suiz-SUIZ.webp",id:"0x5e6858f47b0d3246177ec68075f718e80a83bab37b5471333525fba838147417",type:"0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d::suiz::SUIZ"},{decimals:9,name:"BaySwap Token",symbol:"BSWT",description:"BaySwap governance token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b-bswt-BSWT.webp",id:"0xeef5a485257ebd7e555c6d33a0a6a6cac157e10c05fe6a819488b8e521bce5f2",type:"0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b::bswt::BSWT"},{decimals:9,name:"Causa Sui",symbol:"CAUSA",description:"Ex Unitae Vires - Ens Causa Sui * suiprivkey1qr3uhgze5yuglnr6uygkyesp8z76pxu0tt2pd63gyeglda60frpn7n5epp0",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8-causa-CAUSA.webp",id:"0xb7ba98fb5ce46aa72235824632b757c064067de0239458a289348748df8c51bd",type:"0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8::causa::CAUSA"},{decimals:9,name:"Suicune",symbol:"HSUI",description:"The Legendary Beast of SUI, believed to be both the embodiment of the north winds and compassion of pure spring waters. Suicune will be fully community operated.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533-suicune-SUICUNE.webp",id:"0x9770330e38ad3f4723463085e2cc8c5e2e3df98292c1b5ee83ed3ed1f08f8381",type:"0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533::suicune::SUICUNE"},{decimals:5,name:"CHOPSUI",symbol:"CHOP",description:"Chopsui token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a-chopsui-CHOPSUI.webp",id:"0x78f4acfb5f55f354739be22231c0b166a6c0debb7464cf5bd0df3544780e6b62",type:"0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a::chopsui::CHOPSUI"},{decimals:9,name:"Stork REDACTED",symbol:"STORKPOINT",description:"Stork Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736-storktoken-STORKTOKEN.webp",id:"0xf9281ff20ff16740a93f9d378732d0f87c7776d0325fee345c9c948d6a680629",type:"0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736::storktoken::STORKTOKEN"},{decimals:9,name:"LUCKYSTAR",symbol:"LUCK",description:"LUCKYSTAR TOKEN",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179-luck-LUCK.svg",id:"0xa9cb7f72c96d23437199bcf6731b08a7e225d7efe427d04f4c69e63a8940c2f3",type:"0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179::luck::LUCK"},{decimals:9,name:"Simba the lonely lion",symbol:"SIMBA",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72-simba-SIMBA.webp",id:"0x4d3524dbaeddff858737d17e71b4a35c9971408f917fc426e289c04d8f65c6d5",type:"0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72::simba::SIMBA"},{decimals:8,name:"Vaporeon",symbol:"VAPOREON",description:"Our favorite water-type pokemon swimming on Sui. Twitter: @VaporProtocol",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79-vaporeon-VAPOREON.webp",id:"0xb4294ab2ddf3e704640278ea2e0a1e04837e68b7774cd3f9f8c7115fe45d4c27",type:"0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79::vaporeon::VAPOREON"},{decimals:2,name:"ovan suu",symbol:"SUU",description:"Co-founder of Suu Network Web 2",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24-suu-SUU.webp",id:"0x3eac27d0eb0848abd5ad35a16728d0e40d06a8155b94da4cddc2a90a3f893d76",type:"0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24::suu::SUU"},{decimals:12,name:"Pearl",symbol:"PRL",description:"The governance token of SuiPearl - the Yield Optimizer on Sui Network.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64-prl-PRL.webp",id:"0xc1274dbe242a6c4c4b881c03a862def371d9a4ae70da3348101263b4fe44e4fa",type:"0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64::prl::PRL"},{decimals:9,name:"Suiba Inu",symbol:"SUIB",description:"Emerging from Shiba's boundless love, Suiba, your liquid companion, journeys with you on the Sui chain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b-suib-SUIB.svg",id:"0xfd7cfcb627381de46e4d7bdd4a0cf3c37d8f241c8e0513565531d5e410037c59",type:"0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB"},{decimals:5,name:"KIMCHI",symbol:"KIMCHI",description:"Kimchi stands as a symbol of the Asian builder community’s innovation and creativity, serving as a platform for individuals to collaborate, exchange ideas, and push the boundaries of decentralized finance. The coin aims to form an unstoppable force within the Sui ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064-kimchi-KIMCHI.webp",id:"0x494f68995d31da43d11567a68f8fd686cb5821a7b65b63f6f2d3d950cd242d3e",type:"0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064::kimchi::KIMCHI"},{decimals:2,name:"Pikasui",symbol:"PIKA",description:"PIKA SUI is the starter of the Sui chain, designed to be your companion as you embark on the Sui chain journey. It's a memecoin that seeks to build enjoyable and amusing elements within the Sui chain",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692-pika-PIKA.webp",id:"0x8ceeca937d8273acb48a13690af83961c7b0832424f7e690c996e5f76d2011a6",type:"0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692::pika::PIKA"},{decimals:9,name:"HOMITOKEN",symbol:"HOMI",description:" The HOMI token is the native token of the HOMINIDS platform. It allows users to buy and sell Hominids NFTs, participate in wagering games to earn rewards, and interact with other platform features. HOMI will also be used for platform governance, allowing holders to vote on future updates and important decisions.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5-homi-HOMI.webp",id:"0xfcf9f351cb0ae2730d32c3862eaa03d3918768fd26094723e4d1e1889dab5239",type:"0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5::homi::HOMI"},{decimals:2,name:"LAMBALL",symbol:"LAMB",description:"'HAH, you just got Lamballed!' Lamball ($LAMB): Your Pal on the SUI blockchain. This is an exciting fusion of PalWorld and crypto. Dive into our PalWorld server, engage in thrilling events and contests to earn $LAMB and other cool prizes. Connect with fellow Palworld enthusiasts and experience the best of both realms. $LAMB has something for everyone. Join us and discover the vibrant world of $LAMB on the SUI blockchain!",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0-lamb-LAMB.webp",id:"0xea8fc1f2e7e7619a13db86cc7934de285f8465cd868df2d5358470ea181a74d3",type:"0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0::lamb::LAMB"},{decimals:9,name:"Wen Dexscreener",symbol:"WEND",description:"When will Dexscreener integrate FlowX Finance ?",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272-wend-WEND.webp",id:"0xde918bf2751178443a054c8772f78bd52b0cd18aa985b8369756ea7fc2b10a9f",type:"0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272::wend::WEND"},{decimals:9,name:"Sui Generis",symbol:"GENERIS",description:"Sui Generis Auction House Community Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47-generis-GENERIS.webp",id:"0x13a00f780e30945830f97124a23d8554a3c98b0c8fa347073bfe6e50c8eff9f4",type:"0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47::generis::GENERIS"},{decimals:9,name:"SuiPad",symbol:"SUIP",description:"SuiPad The Premier Launchpad for Tier-1 Projects",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee-SUIP-SUIP.webp",id:"0x3e50a0a576877092bfaa4f8e4ec8cd7dd0a4a281bec3f806583949cf7873d07b",type:"0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee::SUIP::SUIP"},{decimals:6,name:"USDCsol",symbol:"USDCsol",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037-coin-COIN.webp",id:"0x39047ec989791d939efee4c9b9dbc6885c5d12a5aaacf44152319b2289ea9b9e",type:"0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN"},{decimals:8,name:"USDCbnb",symbol:"USDCbnb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba-coin-COIN.webp",id:"0x8a775c4bbc9639c88e86fdc624bb30d0bfd22a1597b03da29198de214ddaa126",type:"0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN"},{decimals:6,name:"USDCarb",symbol:"USDCarb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb-coin-COIN.webp",id:"0xe2720ee6eed0e11490bdbd1c6cc2282a7e442bf86c99a3a4ec67797c84b9fffc",type:"0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb::coin::COIN"},{decimals:6,name:"cUSDCe",symbol:"cUSDCe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdc_coin-CELER_USDC_COIN.webp",id:"0x9026b41cf942faaba954c8d9051d93b5bba015436141495b47465eb677d14e1e",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdc_coin::CELER_USDC_COIN"},{decimals:6,name:"cUSDTe",symbol:"cUSDTe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdt_coin-CELER_USDT_COIN.webp",id:"0x2bce194d8454616d16d3ee756fef0c83970556233851fb9da2e5d154952338b8",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN"}],AS=_S,Ms=class Ms extends Bn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is required");this._coins={},this._suiMaster.onMainnet&&this.setCoinMetas(AS)}get suiMaster(){return this._suiMaster}get coins(){return this._coins}setCoinMetas(e){let n=0;if(Array.isArray(e))for(const s of e)s.type&&this.get(s.type).setMetadata(s)&&n++;else for(const s in e)this.get(s).setMetadata(e[s])&&n++;return n}async getAllBalances(e={}){let n=e.owner;n||(n=this._suiMaster.address);const s=[],r=await this._suiMaster.client.getAllBalances({owner:n});for(const i of r){const o={coin:this.get(i.coinType),coinType:i.coinType,coinObjectCount:i.coinObjectCount,totalBalance:BigInt(i.totalBalance),lockedBalance:i.lockedBalance};s.push(o)}return s}normalizeCoinType(e){let n=""+e;return n.indexOf("::")==-1&&n.toLowerCase()=="sui"&&(n="0x2::sui::SUI"),n.indexOf("0x")==-1&&(n="0x"+n),n=Lr(n),n}get(e){const n=this.normalizeCoinType(e);let s=this._coins[n];return s||(s=new xS({coinType:n,suiCoins:this}),this._coins[n]=s,s)}static getSingleton(e={}){const s=e.suiMaster.connectedChain;return Ms._singleInstances[s]||(Ms._singleInstances[s]=new Ms(e)),Ms._singleInstances[s]}};Zr(Ms,"_singleInstances",{});let du=Ms;/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const wl={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},NS={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},tf=BigInt(2);function TS(t){const e=wl.p,n=BigInt(3),s=BigInt(6),r=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,f=Pe(u,n,e)*u%e,d=Pe(f,n,e)*u%e,h=Pe(d,tf,e)*l%e,p=Pe(h,r,e)*h%e,b=Pe(p,i,e)*p%e,S=Pe(b,a,e)*b%e,x=Pe(S,c,e)*S%e,B=Pe(x,a,e)*b%e,T=Pe(B,n,e)*u%e,j=Pe(T,o,e)*p%e,q=Pe(j,s,e)*l%e,P=Pe(q,tf,e);if(!fu.eql(fu.sqr(P),t))throw new Error("Cannot find square root");return P}const fu=zn(wl.p,void 0,void 0,{sqrt:TS}),Yn=ja({...wl,Fp:fu,lowS:!0,endo:NS},dr);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vl=BigInt(0),hu=BigInt(1);function ua(t,e=""){if(typeof t!="boolean"){const n=e&&`"${e}"`;throw new Error(n+"expected boolean, got type="+typeof t)}return t}function Zs(t,e,n=""){const s=ir(t),r=t==null?void 0:t.length,i=e!==void 0;if(!s||i&&r!==e){const o=n&&`"${n}" `,a=i?` of length ${e}`:"",c=s?`length=${r}`:`type=${typeof t}`;throw new Error(o+"expected Uint8Array"+a+", got "+c)}return t}function yo(t){const e=t.toString(16);return e.length&1?"0"+e:e}function Fg(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?vl:BigInt("0x"+t)}function Ba(t){return Fg(Xe(t))}function qg(t){return Le(t),Fg(Xe(Uint8Array.from(t).reverse()))}function Sl(t,e){return Dn(t.toString(16).padStart(e*2,"0"))}function Kg(t,e){return Sl(t,e).reverse()}function Mt(t,e,n){let s;if(typeof e=="string")try{s=Dn(e)}catch(r){throw new Error(t+" must be hex string or Uint8Array, cause: "+r)}else if(ir(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");return s.length,s}const pc=t=>typeof t=="bigint"&&vl<=t;function OS(t,e,n){return pc(t)&&pc(e)&&pc(n)&&e<=t&&t<n}function kS(t,e,n,s){if(!OS(e,n,s))throw new Error("expected valid "+t+": "+n+" <= n < "+s+", got "+e)}function Wg(t){let e;for(e=0;t>vl;t>>=hu,e+=1);return e}const Zi=t=>(hu<<BigInt(t))-hu;function jS(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");const s=h=>new Uint8Array(h),r=h=>Uint8Array.of(h);let i=s(t),o=s(t),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},l=(...h)=>n(o,i,...h),u=(h=s(0))=>{o=l(r(0),h),i=l(),h.length!==0&&(o=l(r(1),h),i=l())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const p=[];for(;h<e;){i=l();const b=i.slice();p.push(b),h+=i.length}return Fe(...p)};return(h,p)=>{c(),u(h);let b;for(;!(b=p(f()));)u();return c(),b}}function Ml(t,e,n={}){if(!t||typeof t!="object")throw new Error("expected valid options object");function s(r,i,o){const a=t[r];if(o&&a===void 0)return;const c=typeof a;if(c!==i||a===null)throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`)}Object.entries(e).forEach(([r,i])=>s(r,i,!1)),Object.entries(n).forEach(([r,i])=>s(r,i,!0))}function nf(t){const e=new WeakMap;return(n,...s)=>{const r=e.get(n);if(r!==void 0)return r;const i=t(n,...s);return e.set(n,i),i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const jt=BigInt(0),yt=BigInt(1),Qs=BigInt(2),Gg=BigInt(3),Hg=BigInt(4),Yg=BigInt(5),CS=BigInt(7),Zg=BigInt(8),DS=BigInt(9),Qg=BigInt(16);function Ht(t,e){const n=t%e;return n>=jt?n:e+n}function Wt(t,e,n){let s=t;for(;e-- >jt;)s*=s,s%=n;return s}function sf(t,e){if(t===jt)throw new Error("invert: expected non-zero number");if(e<=jt)throw new Error("invert: expected positive modulus, got "+e);let n=Ht(t,e),s=e,r=jt,i=yt;for(;n!==jt;){const a=s/n,c=s%n,l=r-i*a;s=n,n=c,r=i,i=l}if(s!==yt)throw new Error("invert: does not exist");return Ht(r,e)}function El(t,e,n){if(!t.eql(t.sqr(e),n))throw new Error("Cannot find square root")}function Xg(t,e){const n=(t.ORDER+yt)/Hg,s=t.pow(e,n);return El(t,s,e),s}function BS(t,e){const n=(t.ORDER-Yg)/Zg,s=t.mul(e,Qs),r=t.pow(s,n),i=t.mul(e,r),o=t.mul(t.mul(i,Qs),r),a=t.mul(i,t.sub(o,t.ONE));return El(t,a,e),a}function US(t){const e=Qi(t),n=Jg(t),s=n(e,e.neg(e.ONE)),r=n(e,s),i=n(e,e.neg(s)),o=(t+CS)/Qg;return(a,c)=>{let l=a.pow(c,o),u=a.mul(l,s);const f=a.mul(l,r),d=a.mul(l,i),h=a.eql(a.sqr(u),c),p=a.eql(a.sqr(f),c);l=a.cmov(l,u,h),u=a.cmov(d,f,p);const b=a.eql(a.sqr(u),c),S=a.cmov(l,u,b);return El(a,S,c),S}}function Jg(t){if(t<Gg)throw new Error("sqrt is not defined for small field");let e=t-yt,n=0;for(;e%Qs===jt;)e/=Qs,n++;let s=Qs;const r=Qi(t);for(;rf(r,s)===1;)if(s++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return Xg;let i=r.pow(s,e);const o=(e+yt)/Qs;return function(c,l){if(c.is0(l))return l;if(rf(c,l)!==1)throw new Error("Cannot find square root");let u=n,f=c.mul(c.ONE,i),d=c.pow(l,e),h=c.pow(l,o);for(;!c.eql(d,c.ONE);){if(c.is0(d))return c.ZERO;let p=1,b=c.sqr(d);for(;!c.eql(b,c.ONE);)if(p++,b=c.sqr(b),p===u)throw new Error("Cannot find square root");const S=yt<<BigInt(u-p-1),x=c.pow(f,S);u=p,f=c.sqr(x),d=c.mul(d,f),h=c.mul(h,x)}return h}}function LS(t){return t%Hg===Gg?Xg:t%Zg===Yg?BS:t%Qg===DS?US(t):Jg(t)}const zS=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function PS(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},n=zS.reduce((s,r)=>(s[r]="function",s),e);return Ml(t,n),t}function RS(t,e,n){if(n<jt)throw new Error("invalid exponent, negatives unsupported");if(n===jt)return t.ONE;if(n===yt)return e;let s=t.ONE,r=e;for(;n>jt;)n&yt&&(s=t.mul(s,r)),r=t.sqr(r),n>>=yt;return s}function eb(t,e,n=!1){const s=new Array(e.length).fill(n?t.ZERO:void 0),r=e.reduce((o,a,c)=>t.is0(a)?o:(s[c]=o,t.mul(o,a)),t.ONE),i=t.inv(r);return e.reduceRight((o,a,c)=>t.is0(a)?o:(s[c]=t.mul(o,s[c]),t.mul(o,a)),i),s}function rf(t,e){const n=(t.ORDER-yt)/Qs,s=t.pow(e,n),r=t.eql(s,t.ONE),i=t.eql(s,t.ZERO),o=t.eql(s,t.neg(t.ONE));if(!r&&!i&&!o)throw new Error("invalid Legendre symbol result");return r?1:i?0:-1}function tb(t,e){e!==void 0&&kn(e);const n=e!==void 0?e:t.toString(2).length,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}function Qi(t,e,n=!1,s={}){if(t<=jt)throw new Error("invalid field: expected ORDER > 0, got "+t);let r,i,o=!1,a;if(typeof e=="object"&&e!=null){if(s.sqrt||n)throw new Error("cannot specify opts in two arguments");const d=e;d.BITS&&(r=d.BITS),d.sqrt&&(i=d.sqrt),typeof d.isLE=="boolean"&&(n=d.isLE),typeof d.modFromBytes=="boolean"&&(o=d.modFromBytes),a=d.allowedLengths}else typeof e=="number"&&(r=e),s.sqrt&&(i=s.sqrt);const{nBitLength:c,nByteLength:l}=tb(t,r);if(l>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let u;const f=Object.freeze({ORDER:t,isLE:n,BITS:c,BYTES:l,MASK:Zi(c),ZERO:jt,ONE:yt,allowedLengths:a,create:d=>Ht(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof d);return jt<=d&&d<t},is0:d=>d===jt,isValidNot0:d=>!f.is0(d)&&f.isValid(d),isOdd:d=>(d&yt)===yt,neg:d=>Ht(-d,t),eql:(d,h)=>d===h,sqr:d=>Ht(d*d,t),add:(d,h)=>Ht(d+h,t),sub:(d,h)=>Ht(d-h,t),mul:(d,h)=>Ht(d*h,t),pow:(d,h)=>RS(f,d,h),div:(d,h)=>Ht(d*sf(h,t),t),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>sf(d,t),sqrt:i||(d=>(u||(u=LS(t)),u(f,d))),toBytes:d=>n?Kg(d,l):Sl(d,l),fromBytes:(d,h=!0)=>{if(a){if(!a.includes(d.length)||d.length>l)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+d.length);const b=new Uint8Array(l);b.set(d,n?0:b.length-d.length),d=b}if(d.length!==l)throw new Error("Field.fromBytes: expected "+l+" bytes, got "+d.length);let p=n?qg(d):Ba(d);if(o&&(p=Ht(p,t)),!h&&!f.isValid(p))throw new Error("invalid field element: outside of range 0..ORDER");return p},invertBatch:d=>eb(f,d),cmov:(d,h,p)=>p?h:d});return Object.freeze(f)}function nb(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function sb(t){const e=nb(t);return e+Math.ceil(e/2)}function $S(t,e,n=!1){const s=t.length,r=nb(e),i=sb(e);if(s<16||s<i||s>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+s);const o=n?qg(t):Ba(t),a=Ht(o,e-yt)+yt;return n?Kg(a,r):Sl(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const qr=BigInt(0),Xs=BigInt(1);function la(t,e){const n=e.negate();return t?n:e}function gc(t,e){const n=eb(t.Fp,e.map(s=>s.Z));return e.map((s,r)=>t.fromAffine(s.toAffine(n[r])))}function rb(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function bc(t,e){rb(t,e);const n=Math.ceil(e/t)+1,s=2**(t-1),r=2**t,i=Zi(t),o=BigInt(t);return{windows:n,windowSize:s,mask:i,maxNumber:r,shiftBy:o}}function of(t,e,n){const{windowSize:s,mask:r,maxNumber:i,shiftBy:o}=n;let a=Number(t&r),c=t>>o;a>s&&(a-=i,c+=Xs);const l=e*s,u=l+Math.abs(a)-1,f=a===0,d=a<0,h=e%2!==0;return{nextN:c,offset:u,isZero:f,isNeg:d,isNegF:h,offsetF:l}}function VS(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,s)=>{if(!(n instanceof e))throw new Error("invalid point at index "+s)})}function FS(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,s)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+s)})}const yc=new WeakMap,ib=new WeakMap;function mc(t){return ib.get(t)||1}function af(t){if(t!==qr)throw new Error("invalid wNAF")}class qS{constructor(e,n){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=n}_unsafeLadder(e,n,s=this.ZERO){let r=e;for(;n>qr;)n&Xs&&(s=s.add(r)),r=r.double(),n>>=Xs;return s}precomputeWindow(e,n){const{windows:s,windowSize:r}=bc(n,this.bits),i=[];let o=e,a=o;for(let c=0;c<s;c++){a=o,i.push(a);for(let l=1;l<r;l++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(e,n,s){if(!this.Fn.isValid(s))throw new Error("invalid scalar");let r=this.ZERO,i=this.BASE;const o=bc(e,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:u,isNeg:f,isNegF:d,offsetF:h}=of(s,a,o);s=c,u?i=i.add(la(d,n[h])):r=r.add(la(f,n[l]))}return af(s),{p:r,f:i}}wNAFUnsafe(e,n,s,r=this.ZERO){const i=bc(e,this.bits);for(let o=0;o<i.windows&&s!==qr;o++){const{nextN:a,offset:c,isZero:l,isNeg:u}=of(s,o,i);if(s=a,!l){const f=n[c];r=r.add(u?f.negate():f)}}return af(s),r}getPrecomputes(e,n,s){let r=yc.get(n);return r||(r=this.precomputeWindow(n,e),e!==1&&(typeof s=="function"&&(r=s(r)),yc.set(n,r))),r}cached(e,n,s){const r=mc(e);return this.wNAF(r,this.getPrecomputes(r,e,s),n)}unsafe(e,n,s,r){const i=mc(e);return i===1?this._unsafeLadder(e,n,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,s),n,r)}createCache(e,n){rb(n,this.bits),ib.set(e,n),yc.delete(e)}hasCache(e){return mc(e)!==1}}function KS(t,e,n,s){let r=e,i=t.ZERO,o=t.ZERO;for(;n>qr||s>qr;)n&Xs&&(i=i.add(r)),s&Xs&&(o=o.add(r)),r=r.double(),n>>=Xs,s>>=Xs;return{p1:i,p2:o}}function WS(t,e,n,s){VS(n,t),FS(s,e);const r=n.length,i=s.length;if(r!==i)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,a=Wg(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=Zi(c),u=new Array(Number(l)+1).fill(o),f=Math.floor((e.BITS-1)/c)*c;let d=o;for(let h=f;h>=0;h-=c){u.fill(o);for(let b=0;b<i;b++){const S=s[b],x=Number(S>>BigInt(h)&l);u[x]=u[x].add(n[b])}let p=o;for(let b=u.length-1,S=o;b>0;b--)S=S.add(u[b]),p=p.add(S);if(d=d.add(p),h!==0)for(let b=0;b<c;b++)d=d.double()}return d}function cf(t,e,n){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return PS(e),e}else return Qi(t,{isLE:n})}function GS(t,e,n={},s){if(s===void 0&&(s=t==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);for(const c of["p","n","h"]){const l=e[c];if(!(typeof l=="bigint"&&l>qr))throw new Error(`CURVE.${c} must be positive bigint`)}const r=cf(e.p,n.Fp,s),i=cf(e.n,n.Fn,s),a=["Gx","Gy","a","b"];for(const c of a)if(!r.isValid(e[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:r,Fn:i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const uf=(t,e)=>(t+(t>=0?e:-e)/ob)/e;function HS(t,e,n){const[[s,r],[i,o]]=e,a=uf(o*t,n),c=uf(-r*t,n);let l=t-a*s-c*i,u=-a*r-c*o;const f=l<ns,d=u<ns;f&&(l=-l),d&&(u=-u);const h=Zi(Math.ceil(Wg(n)/2))+Cr;if(l<ns||l>=h||u<ns||u>=h)throw new Error("splitScalar (endomorphism): failed, k="+t);return{k1neg:f,k1:l,k2neg:d,k2:u}}function pu(t){if(!["compact","recovered","der"].includes(t))throw new Error('Signature format must be "compact", "recovered", or "der"');return t}function wc(t,e){const n={};for(let s of Object.keys(e))n[s]=t[s]===void 0?e[s]:t[s];return ua(n.lowS,"lowS"),ua(n.prehash,"prehash"),n.format!==void 0&&pu(n.format),n}class YS extends Error{constructor(e=""){super(e)}}const Jn={Err:YS,_tlv:{encode:(t,e)=>{const{Err:n}=Jn;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const s=e.length/2,r=yo(s);if(r.length/2&128)throw new n("tlv.encode: long form length too big");const i=s>127?yo(r.length/2|128):"";return yo(t)+i+r+e},decode(t,e){const{Err:n}=Jn;let s=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new n("tlv.decode: wrong tlv");const r=e[s++],i=!!(r&128);let o=0;if(!i)o=r;else{const c=r&127;if(!c)throw new n("tlv.decode(long): indefinite length not supported");if(c>4)throw new n("tlv.decode(long): byte length is too big");const l=e.subarray(s,s+c);if(l.length!==c)throw new n("tlv.decode: length bytes not complete");if(l[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(s+=c,o<128)throw new n("tlv.decode(long): not minimal encoding")}const a=e.subarray(s,s+o);if(a.length!==o)throw new n("tlv.decode: wrong value length");return{v:a,l:e.subarray(s+o)}}},_int:{encode(t){const{Err:e}=Jn;if(t<ns)throw new e("integer: negative integers are not allowed");let n=yo(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=Jn;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return Ba(t)}},toSig(t){const{Err:e,_int:n,_tlv:s}=Jn,r=Mt("signature",t),{v:i,l:o}=s.decode(48,r);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=s.decode(2,i),{v:l,l:u}=s.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(a),s:n.decode(l)}},hexFromSig(t){const{_tlv:e,_int:n}=Jn,s=e.encode(2,n.encode(t.r)),r=e.encode(2,n.encode(t.s)),i=s+r;return e.encode(48,i)}},ns=BigInt(0),Cr=BigInt(1),ob=BigInt(2),mo=BigInt(3),ZS=BigInt(4);function Ir(t,e){const{BYTES:n}=t;let s;if(typeof e=="bigint")s=e;else{let r=Mt("private key",e);try{s=t.fromBytes(r)}catch{throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`)}}if(!t.isValidNot0(s))throw new Error("invalid private key: out of range [1..N-1]");return s}function QS(t,e={}){const n=GS("weierstrass",t,e),{Fp:s,Fn:r}=n;let i=n.CURVE;const{h:o,n:a}=i;Ml(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:c}=e;if(c&&(!s.is0(i.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const l=cb(s,r);function u(){if(!s.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function f(k,M,I){const{x:E,y:v}=M.toAffine(),w=s.toBytes(E);if(ua(I,"isCompressed"),I){u();const _=!s.isOdd(v);return Fe(ab(_),w)}else return Fe(Uint8Array.of(4),w,s.toBytes(v))}function d(k){Zs(k,void 0,"Point");const{publicKey:M,publicKeyUncompressed:I}=l,E=k.length,v=k[0],w=k.subarray(1);if(E===M&&(v===2||v===3)){const _=s.fromBytes(w);if(!s.isValid(_))throw new Error("bad point: is not on curve, wrong x");const C=b(_);let D;try{D=s.sqrt(C)}catch(ae){const ne=ae instanceof Error?": "+ae.message:"";throw new Error("bad point: is not on curve, sqrt error"+ne)}u();const z=s.isOdd(D);return(v&1)===1!==z&&(D=s.neg(D)),{x:_,y:D}}else if(E===I&&v===4){const _=s.BYTES,C=s.fromBytes(w.subarray(0,_)),D=s.fromBytes(w.subarray(_,_*2));if(!S(C,D))throw new Error("bad point: is not on curve");return{x:C,y:D}}else throw new Error(`bad point: got length ${E}, expected compressed=${M} or uncompressed=${I}`)}const h=e.toBytes||f,p=e.fromBytes||d;function b(k){const M=s.sqr(k),I=s.mul(M,k);return s.add(s.add(I,s.mul(k,i.a)),i.b)}function S(k,M){const I=s.sqr(M),E=b(k);return s.eql(I,E)}if(!S(i.Gx,i.Gy))throw new Error("bad curve params: generator point");const x=s.mul(s.pow(i.a,mo),ZS),B=s.mul(s.sqr(i.b),BigInt(27));if(s.is0(s.add(x,B)))throw new Error("bad curve params: a or b");function T(k,M,I=!1){if(!s.isValid(M)||I&&s.is0(M))throw new Error(`bad point coordinate ${k}`);return M}function j(k){if(!(k instanceof U))throw new Error("ProjectivePoint expected")}function q(k){if(!c||!c.basises)throw new Error("no endo");return HS(k,c.basises,r.ORDER)}const P=nf((k,M)=>{const{X:I,Y:E,Z:v}=k;if(s.eql(v,s.ONE))return{x:I,y:E};const w=k.is0();M==null&&(M=w?s.ONE:s.inv(v));const _=s.mul(I,M),C=s.mul(E,M),D=s.mul(v,M);if(w)return{x:s.ZERO,y:s.ZERO};if(!s.eql(D,s.ONE))throw new Error("invZ was invalid");return{x:_,y:C}}),J=nf(k=>{if(k.is0()){if(e.allowInfinityPoint&&!s.is0(k.Y))return;throw new Error("bad point: ZERO")}const{x:M,y:I}=k.toAffine();if(!s.isValid(M)||!s.isValid(I))throw new Error("bad point: x or y not field elements");if(!S(M,I))throw new Error("bad point: equation left != right");if(!k.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function X(k,M,I,E,v){return I=new U(s.mul(I.X,k),I.Y,I.Z),M=la(E,M),I=la(v,I),M.add(I)}class U{constructor(M,I,E){this.X=T("x",M),this.Y=T("y",I,!0),this.Z=T("z",E),Object.freeze(this)}static CURVE(){return i}static fromAffine(M){const{x:I,y:E}=M||{};if(!M||!s.isValid(I)||!s.isValid(E))throw new Error("invalid affine point");if(M instanceof U)throw new Error("projective point not allowed");return s.is0(I)&&s.is0(E)?U.ZERO:new U(I,E,s.ONE)}static fromBytes(M){const I=U.fromAffine(p(Zs(M,void 0,"point")));return I.assertValidity(),I}static fromHex(M){return U.fromBytes(Mt("pointHex",M))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(M=8,I=!0){return A.createCache(this,M),I||this.multiply(mo),this}assertValidity(){J(this)}hasEvenY(){const{y:M}=this.toAffine();if(!s.isOdd)throw new Error("Field doesn't support isOdd");return!s.isOdd(M)}equals(M){j(M);const{X:I,Y:E,Z:v}=this,{X:w,Y:_,Z:C}=M,D=s.eql(s.mul(I,C),s.mul(w,v)),z=s.eql(s.mul(E,C),s.mul(_,v));return D&&z}negate(){return new U(this.X,s.neg(this.Y),this.Z)}double(){const{a:M,b:I}=i,E=s.mul(I,mo),{X:v,Y:w,Z:_}=this;let C=s.ZERO,D=s.ZERO,z=s.ZERO,F=s.mul(v,v),ae=s.mul(w,w),ne=s.mul(_,_),ce=s.mul(v,w);return ce=s.add(ce,ce),z=s.mul(v,_),z=s.add(z,z),C=s.mul(M,z),D=s.mul(E,ne),D=s.add(C,D),C=s.sub(ae,D),D=s.add(ae,D),D=s.mul(C,D),C=s.mul(ce,C),z=s.mul(E,z),ne=s.mul(M,ne),ce=s.sub(F,ne),ce=s.mul(M,ce),ce=s.add(ce,z),z=s.add(F,F),F=s.add(z,F),F=s.add(F,ne),F=s.mul(F,ce),D=s.add(D,F),ne=s.mul(w,_),ne=s.add(ne,ne),F=s.mul(ne,ce),C=s.sub(C,F),z=s.mul(ne,ae),z=s.add(z,z),z=s.add(z,z),new U(C,D,z)}add(M){j(M);const{X:I,Y:E,Z:v}=this,{X:w,Y:_,Z:C}=M;let D=s.ZERO,z=s.ZERO,F=s.ZERO;const ae=i.a,ne=s.mul(i.b,mo);let ce=s.mul(I,w),te=s.mul(E,_),fe=s.mul(v,C),me=s.add(I,E),be=s.add(w,_);me=s.mul(me,be),be=s.add(ce,te),me=s.sub(me,be),be=s.add(I,v);let Se=s.add(w,C);return be=s.mul(be,Se),Se=s.add(ce,fe),be=s.sub(be,Se),Se=s.add(E,v),D=s.add(_,C),Se=s.mul(Se,D),D=s.add(te,fe),Se=s.sub(Se,D),F=s.mul(ae,be),D=s.mul(ne,fe),F=s.add(D,F),D=s.sub(te,F),F=s.add(te,F),z=s.mul(D,F),te=s.add(ce,ce),te=s.add(te,ce),fe=s.mul(ae,fe),be=s.mul(ne,be),te=s.add(te,fe),fe=s.sub(ce,fe),fe=s.mul(ae,fe),be=s.add(be,fe),ce=s.mul(te,be),z=s.add(z,ce),ce=s.mul(Se,be),D=s.mul(me,D),D=s.sub(D,ce),ce=s.mul(me,te),F=s.mul(Se,F),F=s.add(F,ce),new U(D,z,F)}subtract(M){return this.add(M.negate())}is0(){return this.equals(U.ZERO)}multiply(M){const{endo:I}=e;if(!r.isValidNot0(M))throw new Error("invalid scalar: out of range");let E,v;const w=_=>A.cached(this,_,C=>gc(U,C));if(I){const{k1neg:_,k1:C,k2neg:D,k2:z}=q(M),{p:F,f:ae}=w(C),{p:ne,f:ce}=w(z);v=ae.add(ce),E=X(I.beta,F,ne,_,D)}else{const{p:_,f:C}=w(M);E=_,v=C}return gc(U,[E,v])[0]}multiplyUnsafe(M){const{endo:I}=e,E=this;if(!r.isValid(M))throw new Error("invalid scalar: out of range");if(M===ns||E.is0())return U.ZERO;if(M===Cr)return E;if(A.hasCache(this))return this.multiply(M);if(I){const{k1neg:v,k1:w,k2neg:_,k2:C}=q(M),{p1:D,p2:z}=KS(U,E,w,C);return X(I.beta,D,z,v,_)}else return A.unsafe(E,M)}multiplyAndAddUnsafe(M,I,E){const v=this.multiplyUnsafe(I).add(M.multiplyUnsafe(E));return v.is0()?void 0:v}toAffine(M){return P(this,M)}isTorsionFree(){const{isTorsionFree:M}=e;return o===Cr?!0:M?M(U,this):A.unsafe(this,a).is0()}clearCofactor(){const{clearCofactor:M}=e;return o===Cr?this:M?M(U,this):this.multiplyUnsafe(o)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}toBytes(M=!0){return ua(M,"isCompressed"),this.assertValidity(),h(U,this,M)}toHex(M=!0){return Xe(this.toBytes(M))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}toRawBytes(M=!0){return this.toBytes(M)}_setWindowSize(M){this.precompute(M)}static normalizeZ(M){return gc(U,M)}static msm(M,I){return WS(U,r,M,I)}static fromPrivateKey(M){return U.BASE.multiply(Ir(r,M))}}U.BASE=new U(i.Gx,i.Gy,s.ONE),U.ZERO=new U(s.ZERO,s.ONE,s.ZERO),U.Fp=s,U.Fn=r;const N=r.BITS,A=new qS(U,e.endo?Math.ceil(N/2):N);return U.BASE.precompute(8),U}function ab(t){return Uint8Array.of(t?2:3)}function cb(t,e){return{secretKey:e.BYTES,publicKey:1+t.BYTES,publicKeyUncompressed:1+2*t.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}function XS(t,e={}){const{Fn:n}=t,s=e.randomBytes||xa,r=Object.assign(cb(t.Fp,n),{seed:sb(n.ORDER)});function i(h){try{return!!Ir(n,h)}catch{return!1}}function o(h,p){const{publicKey:b,publicKeyUncompressed:S}=r;try{const x=h.length;return p===!0&&x!==b||p===!1&&x!==S?!1:!!t.fromBytes(h)}catch{return!1}}function a(h=s(r.seed)){return $S(Zs(h,r.seed,"seed"),n.ORDER)}function c(h,p=!0){return t.BASE.multiply(Ir(n,h)).toBytes(p)}function l(h){const p=a(h);return{secretKey:p,publicKey:c(p)}}function u(h){if(typeof h=="bigint")return!1;if(h instanceof t)return!0;const{secretKey:p,publicKey:b,publicKeyUncompressed:S}=r;if(n.allowedLengths||p===b)return;const x=Mt("key",h).length;return x===b||x===S}function f(h,p,b=!0){if(u(h)===!0)throw new Error("first arg must be private key");if(u(p)===!1)throw new Error("second arg must be public key");const S=Ir(n,h);return t.fromHex(p).multiply(S).toBytes(b)}return Object.freeze({getPublicKey:c,getSharedSecret:f,keygen:l,Point:t,utils:{isValidSecretKey:i,isValidPublicKey:o,randomSecretKey:a,isValidPrivateKey:i,randomPrivateKey:a,normPrivateKeyToScalar:h=>Ir(n,h),precompute(h=8,p=t.BASE){return p.precompute(h,!1)}},lengths:r})}function JS(t,e,n={}){Ea(e),Ml(n,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const s=n.randomBytes||xa,r=n.hmac||((I,...E)=>js(e,I,Fe(...E))),{Fp:i,Fn:o}=t,{ORDER:a,BITS:c}=o,{keygen:l,getPublicKey:u,getSharedSecret:f,utils:d,lengths:h}=XS(t,n),p={prehash:!1,lowS:typeof n.lowS=="boolean"?n.lowS:!1,format:void 0,extraEntropy:!1},b="compact";function S(I){const E=a>>Cr;return I>E}function x(I,E){if(!o.isValidNot0(E))throw new Error(`invalid signature ${I}: out of range 1..Point.Fn.ORDER`);return E}function B(I,E){pu(E);const v=h.signature,w=E==="compact"?v:E==="recovered"?v+1:void 0;return Zs(I,w,`${E} signature`)}class T{constructor(E,v,w){this.r=x("r",E),this.s=x("s",v),w!=null&&(this.recovery=w),Object.freeze(this)}static fromBytes(E,v=b){B(E,v);let w;if(v==="der"){const{r:z,s:F}=Jn.toSig(Zs(E));return new T(z,F)}v==="recovered"&&(w=E[0],v="compact",E=E.subarray(1));const _=o.BYTES,C=E.subarray(0,_),D=E.subarray(_,_*2);return new T(o.fromBytes(C),o.fromBytes(D),w)}static fromHex(E,v){return this.fromBytes(Dn(E),v)}addRecoveryBit(E){return new T(this.r,this.s,E)}recoverPublicKey(E){const v=i.ORDER,{r:w,s:_,recovery:C}=this;if(C==null||![0,1,2,3].includes(C))throw new Error("recovery id invalid");if(a*ob<v&&C>1)throw new Error("recovery id is ambiguous for h>1 curve");const z=C===2||C===3?w+a:w;if(!i.isValid(z))throw new Error("recovery id 2 or 3 invalid");const F=i.toBytes(z),ae=t.fromBytes(Fe(ab((C&1)===0),F)),ne=o.inv(z),ce=q(Mt("msgHash",E)),te=o.create(-ce*ne),fe=o.create(_*ne),me=t.BASE.multiplyUnsafe(te).add(ae.multiplyUnsafe(fe));if(me.is0())throw new Error("point at infinify");return me.assertValidity(),me}hasHighS(){return S(this.s)}toBytes(E=b){if(pu(E),E==="der")return Dn(Jn.hexFromSig(this));const v=o.toBytes(this.r),w=o.toBytes(this.s);if(E==="recovered"){if(this.recovery==null)throw new Error("recovery bit must be present");return Fe(Uint8Array.of(this.recovery),v,w)}return Fe(v,w)}toHex(E){return Xe(this.toBytes(E))}assertValidity(){}static fromCompact(E){return T.fromBytes(Mt("sig",E),"compact")}static fromDER(E){return T.fromBytes(Mt("sig",E),"der")}normalizeS(){return this.hasHighS()?new T(this.r,o.neg(this.s),this.recovery):this}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return Xe(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return Xe(this.toBytes("compact"))}}const j=n.bits2int||function(E){if(E.length>8192)throw new Error("input is too large");const v=Ba(E),w=E.length*8-c;return w>0?v>>BigInt(w):v},q=n.bits2int_modN||function(E){return o.create(j(E))},P=Zi(c);function J(I){return kS("num < 2^"+c,I,ns,P),o.toBytes(I)}function X(I,E){return Zs(I,void 0,"message"),E?Zs(e(I),void 0,"prehashed message"):I}function U(I,E,v){if(["recovered","canonical"].some(te=>te in v))throw new Error("sign() legacy options not supported");const{lowS:w,prehash:_,extraEntropy:C}=wc(v,p);I=X(I,_);const D=q(I),z=Ir(o,E),F=[J(z),J(D)];if(C!=null&&C!==!1){const te=C===!0?s(h.secretKey):C;F.push(Mt("extraEntropy",te))}const ae=Fe(...F),ne=D;function ce(te){const fe=j(te);if(!o.isValidNot0(fe))return;const me=o.inv(fe),be=t.BASE.multiply(fe).toAffine(),Se=o.create(be.x);if(Se===ns)return;const Xt=o.create(me*o.create(ne+Se*z));if(Xt===ns)return;let y=(be.x===Se?0:2)|Number(be.y&Cr),m=Xt;return w&&S(Xt)&&(m=o.neg(Xt),y^=1),new T(Se,m,y)}return{seed:ae,k2sig:ce}}function N(I,E,v={}){I=Mt("message",I);const{seed:w,k2sig:_}=U(I,E,v);return jS(e.outputLen,o.BYTES,r)(w,_)}function A(I){let E;const v=typeof I=="string"||ir(I),w=!v&&I!==null&&typeof I=="object"&&typeof I.r=="bigint"&&typeof I.s=="bigint";if(!v&&!w)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(w)E=new T(I.r,I.s);else if(v){try{E=T.fromBytes(Mt("sig",I),"der")}catch(_){if(!(_ instanceof Jn.Err))throw _}if(!E)try{E=T.fromBytes(Mt("sig",I),"compact")}catch{return!1}}return E||!1}function k(I,E,v,w={}){const{lowS:_,prehash:C,format:D}=wc(w,p);if(v=Mt("publicKey",v),E=X(Mt("message",E),C),"strict"in w)throw new Error("options.strict was renamed to lowS");const z=D===void 0?A(I):T.fromBytes(Mt("sig",I),D);if(z===!1)return!1;try{const F=t.fromBytes(v);if(_&&z.hasHighS())return!1;const{r:ae,s:ne}=z,ce=q(E),te=o.inv(ne),fe=o.create(ce*te),me=o.create(ae*te),be=t.BASE.multiplyUnsafe(fe).add(F.multiplyUnsafe(me));return be.is0()?!1:o.create(be.x)===ae}catch{return!1}}function M(I,E,v={}){const{prehash:w}=wc(v,p);return E=X(E,w),T.fromBytes(I,"recovered").recoverPublicKey(E).toBytes()}return Object.freeze({keygen:l,getPublicKey:u,getSharedSecret:f,utils:d,lengths:h,Point:t,sign:N,verify:k,recoverPublicKey:M,Signature:T,hash:e})}function e4(t){const e={a:t.a,b:t.b,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp;let s=t.allowedPrivateKeyLengths?Array.from(new Set(t.allowedPrivateKeyLengths.map(o=>Math.ceil(o/2)))):void 0;const r=Qi(e.n,{BITS:t.nBitLength,allowedLengths:s,modFromBytes:t.wrapPrivateKey}),i={Fp:n,Fn:r,allowInfinityPoint:t.allowInfinityPoint,endo:t.endo,isTorsionFree:t.isTorsionFree,clearCofactor:t.clearCofactor,fromBytes:t.fromBytes,toBytes:t.toBytes};return{CURVE:e,curveOpts:i}}function t4(t){const{CURVE:e,curveOpts:n}=e4(t),s={hmac:t.hmac,randomBytes:t.randomBytes,lowS:t.lowS,bits2int:t.bits2int,bits2int_modN:t.bits2int_modN};return{CURVE:e,curveOpts:n,hash:t.hash,ecdsaOpts:s}}function n4(t,e){const n=e.Point;return Object.assign({},e,{ProjectivePoint:n,CURVE:Object.assign({},t,tb(n.Fn.ORDER,n.Fn.BITS))})}function s4(t){const{CURVE:e,curveOpts:n,hash:s,ecdsaOpts:r}=t4(t),i=QS(e,n),o=JS(i,s,r);return n4(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function r4(t,e){const n=s=>s4({...t,hash:s});return{...n(e),create:n}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Il={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},i4={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},lf=BigInt(2);function o4(t){const e=Il.p,n=BigInt(3),s=BigInt(6),r=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,f=Wt(u,n,e)*u%e,d=Wt(f,n,e)*u%e,h=Wt(d,lf,e)*l%e,p=Wt(h,r,e)*h%e,b=Wt(p,i,e)*p%e,S=Wt(b,a,e)*b%e,x=Wt(S,c,e)*S%e,B=Wt(x,a,e)*b%e,T=Wt(B,n,e)*u%e,j=Wt(T,o,e)*p%e,q=Wt(j,s,e)*l%e,P=Wt(q,lf,e);if(!gu.eql(gu.sqr(P),t))throw new Error("Cannot find square root");return P}const gu=Qi(Il.p,{sqrt:o4}),Gn=r4({...Il,Fp:gu,lowS:!0,endo:i4},dr),a4=Uint8Array.from([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),ub=Uint8Array.from(new Array(16).fill(0).map((t,e)=>e)),c4=ub.map(t=>(9*t+5)%16),lb=(()=>{const n=[[ub],[c4]];for(let s=0;s<4;s++)for(let r of n)r.push(r[s].map(i=>a4[i]));return n})(),db=lb[0],fb=lb[1],hb=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>Uint8Array.from(t)),u4=db.map((t,e)=>t.map(n=>hb[e][n])),l4=fb.map((t,e)=>t.map(n=>hb[e][n])),d4=Uint32Array.from([0,1518500249,1859775393,2400959708,2840853838]),f4=Uint32Array.from([1352829926,1548603684,1836072691,2053994217,0]);function df(t,e,n,s){return t===0?e^n^s:t===1?e&n|~e&s:t===2?(e|~n)^s:t===3?e&s|n&~s:e^(n|~s)}const wo=new Uint32Array(16);class h4 extends Yu{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:s,h3:r,h4:i}=this;return[e,n,s,r,i]}set(e,n,s,r,i){this.h0=e|0,this.h1=n|0,this.h2=s|0,this.h3=r|0,this.h4=i|0}process(e,n){for(let h=0;h<16;h++,n+=4)wo[h]=e.getUint32(n,!0);let s=this.h0|0,r=s,i=this.h1|0,o=i,a=this.h2|0,c=a,l=this.h3|0,u=l,f=this.h4|0,d=f;for(let h=0;h<5;h++){const p=4-h,b=d4[h],S=f4[h],x=db[h],B=fb[h],T=u4[h],j=l4[h];for(let q=0;q<16;q++){const P=oo(s+df(h,i,a,l)+wo[x[q]]+b,T[q])+f|0;s=f,f=l,l=oo(a,10)|0,a=i,i=P}for(let q=0;q<16;q++){const P=oo(r+df(p,o,c,u)+wo[B[q]]+S,j[q])+d|0;r=d,d=u,u=oo(c,10)|0,c=o,o=P}}this.set(this.h1+a+u|0,this.h2+l+d|0,this.h3+f+r|0,this.h4+s+o|0,this.h0+i+c|0)}roundClean(){Qt(wo)}destroy(){this.destroyed=!0,Qt(this.buffer),this.set(0,0,0,0,0)}}const p4=Ia(()=>new h4);/*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const vo=Gn.ProjectivePoint,vc=Zy(dr);function ff(t){Le(t);const e=t.length===0?"0":Xe(t);return BigInt("0x"+e)}function g4(t){if(typeof t!="bigint")throw new Error("bigint expected");return Dn(t.toString(16).padStart(64,"0"))}const b4=Gu("Bitcoin seed"),Sc={private:76066276,public:76067358},Mc=2147483648,y4=t=>p4(dr(t)),m4=t=>tr(t).getUint32(0,!1),So=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error("invalid number, should be from 0 to 2**32-1, got "+t);const e=new Uint8Array(4);return tr(e).setUint32(0,t,!1),e};class _s{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return m4(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return vc.encode(this.serialize(this.versions.private,Fe(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return vc.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=Sc){if(Le(e),8*e.length<128||8*e.length>512)throw new Error("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got "+e.length);const s=js(Rr,b4,e);return new _s({versions:n,chainCode:s.slice(32),privateKey:s.slice(0,32)})}static fromExtendedKey(e,n=Sc){const s=vc.decode(e),r=tr(s),i=r.getUint32(0,!1),o={versions:n,depth:s[4],parentFingerprint:r.getUint32(5,!1),index:r.getUint32(9,!1),chainCode:s.slice(13,45)},a=s.slice(45),c=a[0]===0;if(i!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new _s({...o,privateKey:a.slice(1)}):new _s({...o,publicKey:a})}static fromJSON(e){return _s.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||Sc,this.depth=e.depth||0,this.chainCode=e.chainCode||null,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Gn.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:ff(e.privateKey),this.privKeyBytes=g4(this.privKey),this.pubKey=Gn.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=vo.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=y4(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let s=this;for(const r of n){const i=/^(\d+)('?)$/.exec(r),o=i&&i[1];if(!i||i.length!==3||typeof o!="string")throw new Error("invalid child index: "+r);let a=+o;if(!Number.isSafeInteger(a)||a>=Mc)throw new Error("Invalid index");i[2]==="'"&&(a+=Mc),s=s.deriveChild(a)}return s}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=So(e);if(e>=Mc){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Fe(new Uint8Array([0]),a,n)}else n=Fe(this.pubKey,n);const s=js(Rr,this.chainCode,n),r=ff(s.slice(0,32)),i=s.slice(32);if(!Gn.utils.isValidPrivateKey(r))throw new Error("Tweak bigger than curve order");const o={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const a=Ht(this.privKey+r,Gn.CURVE.n);if(!Gn.utils.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");o.privateKey=a}else{const a=vo.fromHex(this.pubKey).add(vo.fromPrivateKey(r));if(a.equals(vo.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");o.publicKey=a.toRawBytes(!0)}return new _s(o)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return Le(e,32),Gn.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(Le(e,32),Le(n,64),!this.publicKey)throw new Error("No publicKey set!");let s;try{s=Gn.Signature.fromCompact(n)}catch{return!1}return Gn.verify(s,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return Le(n,33),Fe(So(e),new Uint8Array([this.depth]),So(this.parentFingerprint),So(this.index),this.chainCode,n)}}const bu=33;class pb extends Yi{constructor(e){if(super(),typeof e=="string"?this.data=ve(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==bu)throw new Error(`Invalid public key input. Expected ${bu} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.Secp256k1}async verify(e,n){let s;if(typeof n=="string"){const r=dl(n);if(r.signatureScheme!=="Secp256k1")throw new Error("Invalid signature scheme");if(!Fr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return Yn.verify(Yn.Signature.fromCompact(s),Vr(e),this.toRawBytes())}}pb.SIZE=bu;const w4="m/54'/784'/0'/0/0";class ss extends gl{constructor(e){if(super(),e)this.keypair=e;else{const n=Yn.utils.randomPrivateKey(),s=Yn.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256k1"}static generate(){return new ss}static fromSecretKey(e,n){if(typeof e=="string"){const r=Da(e);if(r.schema!=="Secp256k1")throw new Error(`Expected a Secp256k1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=Yn.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=Xe(Os(i,{dkLen:32})),a=Yn.sign(o,e);if(!Yn.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new ss({publicKey:s,secretKey:e})}static fromSeed(e){const n=Yn.getPublicKey(e,!0);return new ss({publicKey:n,secretKey:e})}getPublicKey(){return new pb(this.keypair.publicKey)}getSecretKey(){return bl(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=Vr(e);return Yn.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=w4),!Pg(n))throw new Error("Invalid derivation path");const s=_s.fromMasterSeed(yl(e)).derive(n);if(s.publicKey==null||s.privateKey==null)throw new Error("Invalid key");return new ss({publicKey:s.publicKey,secretKey:s.privateKey})}}const yu=33;class gb extends Yi{constructor(e){if(super(),typeof e=="string"?this.data=ve(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==yu)throw new Error(`Invalid public key input. Expected ${yu} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return as.Secp256r1}async verify(e,n){let s;if(typeof n=="string"){const r=bS(n);if(r.signatureScheme!=="Secp256r1")throw new Error("Invalid signature scheme");if(!Fr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return In.verify(In.Signature.fromCompact(s),Vr(e),this.toRawBytes())}}gb.SIZE=yu;const v4="m/74'/784'/0'/0/0";class rs extends gl{constructor(e){if(super(),e)this.keypair=e;else{const n=In.utils.randomPrivateKey(),s=In.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256r1"}static generate(){return new rs}static fromSecretKey(e,n){if(typeof e=="string"){const r=Da(e);if(r.schema!=="Secp256r1")throw new Error(`Expected a Secp256r1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=In.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=Xe(Os(i,{dkLen:32})),a=In.sign(o,e,{lowS:!0});if(!In.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new rs({publicKey:s,secretKey:e})}static fromSeed(e){const n=In.getPublicKey(e,!0);return new rs({publicKey:n,secretKey:e})}getPublicKey(){return new gb(this.keypair.publicKey)}getSecretKey(){return bl(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=Vr(e);return In.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=v4),!Pg(n))throw new Error("Invalid derivation path");const s=_s.fromMasterSeed(yl(e)).derive(n).privateKey;return rs.fromSecretKey(s)}}class S4 extends Error{}async function M4({host:t,path:e,body:n,headers:s,method:r}){const i=new URL(e,t).toString(),o=await fetch(i,{method:r,body:n?JSON.stringify(n):void 0,headers:{"Content-Type":"application/json",...s}});if(o.status===429)throw new S4("Too many requests from this client have been sent to the faucet. Please retry later");try{return await o.json()}catch(a){throw new Error(`Encountered error when parsing response from faucet, error: ${a}, status ${o.status}, response ${o}`)}}async function E4(t){const e=await M4({host:t.host,path:"/gas",body:{FixedAmountRequest:{recipient:t.recipient}},headers:t.headers,method:"POST"});if(e.error)throw new Error(`Faucet request failed: ${e.error}`);return e}function I4(t){switch(t){case"testnet":return"https://faucet.testnet.sui.io";case"devnet":return"https://faucet.devnet.sui.io";case"localnet":return"http://127.0.0.1:9123";default:throw new Error(`Unknown network: ${t}`)}}const Ii=class Ii extends Bn{constructor(e){if(super(e),Ii.instancesCount++,this._instanceN=Ii.instancesCount,this._signer=null,this._keypair=null,this._address=null,e.signer)this._signer=e.signer,this._signer&&this._signer.connectedAddress&&(this._address=this._signer.connectedAddress);else if(e.keypair)this._keypair=e.keypair;else if(e.privateKey){const n=Da(e.privateKey);n&&n.schema?n.schema==="ED25519"?this._keypair=Tn.fromSecretKey(n.secretKey):n.schema=="Secp256k1"?this._keypair=ss.fromSecretKey(n.secretKey):n.schema=="Secp256r1"&&(this._keypair=rs.fromSecretKey(n.secretKey)):n&&n.scheme&&(n.scheme==="ED25519"?this._keypair=Tn.fromSecretKey(n.secretKey):n.scheme=="Secp256k1"?this._keypair=ss.fromSecretKey(n.secretKey):n.scheme=="Secp256r1"&&(this._keypair=rs.fromSecretKey(n.secretKey)))}else if(e.phrase){if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256r1")if(!e.accountIndex)this._keypair=rs.deriveKeypair(e.phrase);else{const n=`m/74'/784'/${e.accountIndex}'/0/0`;this._keypair=rs.deriveKeypair(e.phrase,n)}else if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256k1")if(!e.accountIndex)this._keypair=ss.deriveKeypair(e.phrase);else{const n=`m/54'/784'/${e.accountIndex}'/0/0`;this._keypair=ss.deriveKeypair(e.phrase,n)}else if(!e.accountIndex)this._keypair=Tn.deriveKeypair(e.phrase);else{const n=`m/44'/784'/${e.accountIndex}'/0'/0'`;this._keypair=Tn.deriveKeypair(e.phrase,n)}this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress())}else e.as&&(this._keypair=ml.stringToKeyPair(e.as),this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress()));if(this._client=Et.normalizeClient(e.client),this._providerName=this._client?this._client.providerName:null,!this._client)throw new Error("Can not do anything without SuiClient. Set params.client at least to `local`");this._objectStorage=lu.instanceOf(this._providerName,{debug:this._debug,suiMaster:this}),this._initialized=!1,this._packages={},this._suiCoins=new du({suiMaster:this,debug:this._debug})}get utils(){return Et}get suiCoins(){return this._suiCoins}get MIST_PER_SUI(){return BigInt(dp)}get Transaction(){return Pr}get Commands(){return Rt}get SuiObject(){return ar}get SuiTransaction(){return Eh}get SuiEvent(){return Lu}get SuiPaginatedResponse(){return As}get objectStorage(){return this._objectStorage}get instanceN(){return this._instanceN}get client(){return this._client}get connectedChain(){return this._providerName}get onMainnet(){return this._providerName.split("sui:").join("").toLowerCase()==="mainnet"}get address(){return this._address}get signer(){return this._signer}package(e={}){return this.addPackage(e)}addPackage(e){if(e.id&&this._packages[e.id])return this._packages[e.id];const n=new av({...e,debug:this._debug,suiMaster:this});return e.id&&(this._packages[e.id]=n),n}async getClient(){return await this.initialize(),this._client}async initialize(){return this._initialized||(this.log("initializing..."),this._initialized=!0,!this._signer&&this._keypair&&(this._signer=this._keypair),this._signer?(this._signer.toSuiAddress?this._address=this._signer.toSuiAddress():this._signer.connectedAddress?this._address=this._signer.connectedAddress:this._address=await this._signer.getAddress(),this.log("initialized. connected as",this._address)):this.log("initialized in read-only mode.")),!0}async resolveNameServiceName(e={}){const n=await this.resolveNameServiceNames(e);return n&&n.length?n[0]:null}async resolveNameServiceNames(e={}){if(!this._address)return[];try{const n=await this._client.resolveNameServiceNames({address:this.address,format:e.format});if(n&&n.data)return n.data}catch{return[]}}async signAndExecuteTransaction(e){if(!e.chain){const s="sui:"+this._providerName.split("sui:").join("").toLowerCase();e.chain=s}e.account||(e.account={address:this._address});let n=null;this._keypair?(e.signer=this._keypair,n=await this._client.signAndExecuteTransaction(e)):this._signer&&(n=await this._signer.signAndExecuteTransaction(e));try{if(e&&e.requestType&&e.requestType=="WaitForLocalExecution")return await this.client.waitForTransaction({digest:n.digest,options:e.options||{}})}catch(s){this.log(s)}return n}async requestSuiFromFaucet(){await this.initialize();let e=BigInt(0);const n=this._providerName.split("sui:").join("");if(n==="mainnet")this.log(`no faucet on ${n}`);else{const s=I4(n);this.log(`requesting sui from faucet... ${s}`);const r=await E4({host:s,recipient:this._address});let i=0;if(r&&r.transferredGasObjects)for(let o of r.transferredGasObjects)e+=BigInt(o.amount),i++;this.log("got from faucet",e,"MIST in",i,"objects")}return e}async getBalance(e="0x2::sui::SUI",n=null){await this.initialize();let s=n;return!s&&this.address&&(s=this.address),await this._suiCoins.get(e).getBalance(s)}async fetchEvents(e={}){let n=e.query;const s={descending_order:e.descending_order||!1,query:n,limit:e.limit||50},r=new As({debug:this._debug,suiMaster:this,params:s,method:"queryEvents",order:e.order});return await r.fetch(),r}async fetchTransactions(e={}){let n={};e.fromAddress&&(n.FromAddress=e.fromAddress),e.filter&&(n=e.filter);const s={descending_order:!1,filter:n,options:{showEffects:!0},limit:e.limit||50},r=new As({debug:this._debug,suiMaster:this,params:s,method:"queryTransactionBlocks",order:e.order});return await r.fetch(),r}};Zr(Ii,"instancesCount",0);let Cs=Ii;Cs.MIST_PER_SUI=BigInt(dp);Cs.Transaction=Pr;Cs.Commands=Rt;Cs.SuiUtils=Et;const Qe={DISCONNECT:"standard:disconnect",CONNECT:"standard:connect",EVENTS:"standard:events",SUI_SIGN_AND_EXECUTE_TX_BLOCK:"sui:signAndExecuteTransactionBlock",SUI_SIGN_TX_BLOCK:"sui:signTransactionBlock",SUI_SIGN_AND_EXECUTE_TX:"sui:signAndExecuteTransaction",SUI_SIGN_TX:"sui:signTransaction",SUI_SIGN_MESSAGE:"sui:signMessage",SUI_SIGN_PERSONAL_MESSAGE:"sui:signPersonalMessage"};class x4 extends Bn{constructor(e={}){super(e),this._standartAdapter=null,e.standartAdapter&&this.setStandartAdapter(e.standartAdapter),this._name=e.name||null,this._icon=e.icon||null,this._downloadUrls=e.downloadUrls||{},this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1}async signAndExecuteTransaction(e){return this.hasFeature(Qe.SUI_SIGN_AND_EXECUTE_TX)?await this.getFeature(Qe.SUI_SIGN_AND_EXECUTE_TX).signAndExecuteTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(Qe.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e))}async signAndExecuteTransactionBlock(e){return await this.getFeature(Qe.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e)}async signTransactionBlock(e){return this.hasFeature(Qe.SUI_SIGN_TX)?await this.getFeature(Qe.SUI_SIGN_TX).signTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(Qe.SUI_SIGN_TX_BLOCK).signTransactionBlock(e))}async signTransactionBlock(e){return await this.getFeature(Qe.SUI_SIGN_TX_BLOCK).signTransactionBlock(e)}async signPersonalMessage(e){return this.hasFeature(Qe.SUI_SIGN_PERSONAL_MESSAGE)?await this.getFeature(Qe.SUI_SIGN_PERSONAL_MESSAGE).signPersonalMessage(e):await this.getFeature(Qe.SUI_SIGN_MESSAGE).signMessage(e)}async signMessage(e){return await this.signPersonalMessage(e)}async disconnect(e){const n=await this.getFeature(Qe.DISCONNECT).disconnect(e);return this.connectionUpdated(),n}getDownloadURL(){return this._downloadUrls&&this._downloadUrls.chrome?this._downloadUrls.chrome:null}get isDefault(){return!this._standartAdapter}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}get isConnected(){return this._isConnected}async connect(){try{await this.getFeature(Qe.CONNECT).connect()}catch(e){console.error(e)}this.connectionUpdated()}connectionUpdated(){const e=""+this._connectedAddress,n=""+this._connectedChain;try{this._standartAdapter&&this._standartAdapter.accounts&&this._standartAdapter.accounts.length?(this._connectedAddress=this._standartAdapter.accounts[0].address,this._connectedChain=this._standartAdapter.accounts[0].chains[0]):(this._connectedAddress=null,this._connectedChain=null)}catch{this._connectedAddress=null,this._connectedChain=null}(""+this._connectedAddress!=e||""+this._connectedChain!=n)&&(this._connectedAddress&&this._connectedChain?(this._isConnected=!0,this.emit("connected",this)):(this._isConnected=!1,this.emit("disconnected",this)))}setStandartAdapter(e){if(this._standartAdapter)return!0;let n=!1;for(const s in e.features)(""+s).indexOf("sui:")===0&&(n=!0);if(!n)return!1;this._standartAdapter=e,this.__standartAdapterChangeListener||(this.__standartAdapterChangeListener=s=>{this.connectionUpdated()}),this.getFeature(Qe.EVENTS).on("change",this.__standartAdapterChangeListener),this.connectionUpdated()}get okForSui(){return this.isInstalled?this.hasFeature(Qe.SUI_SIGN_AND_EXECUTE_TX_BLOCK)&&this.hasFeature(Qe.EVENTS):!1}get isInstalled(){return!!this._standartAdapter}get features(){return this._standartAdapter?this._standartAdapter.features:{}}get name(){return this._standartAdapter?this._standartAdapter.name:this._name}get icon(){return this._standartAdapter?this._standartAdapter.icon:this._icon}get version(){if(this._standartAdapter)return this._standartAdapter.version}hasFeature(e){return!!this.getFeature(e)}getFeature(e){const n=this.features;return n&&n[Qe[e]]?n[Qe[e]]:n&&n[e]?n[e]:null}}var _4=function(t,e,n,s){if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?s:n==="a"?s.call(t):s?s.value:e.get(t)},A4=function(t,e,n,s,r){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n},Ro;let si;const Ua=new Set;function N4(t){Ei=void 0,Ua.add(t)}function T4(t){Ei=void 0,Ua.delete(t)}const xr={};function O4(){if(si||(si=Object.freeze({register:hf,get:k4,on:j4}),typeof window>"u"))return si;const t=Object.freeze({register:hf});try{window.addEventListener("wallet-standard:register-wallet",({detail:e})=>e(t))}catch(e){console.error(`wallet-standard:register-wallet event listener could not be added
`,e)}try{window.dispatchEvent(new C4(t))}catch(e){console.error(`wallet-standard:app-ready event could not be dispatched
`,e)}return si}function hf(...t){var e;return t=t.filter(n=>!Ua.has(n)),t.length?(t.forEach(n=>N4(n)),(e=xr.register)==null||e.forEach(n=>pf(()=>n(...t))),function(){var s;t.forEach(r=>T4(r)),(s=xr.unregister)==null||s.forEach(r=>pf(()=>r(...t)))}):()=>{}}let Ei;function k4(){return Ei||(Ei=[...Ua]),Ei}function j4(t,e){var n;return(n=xr[t])!=null&&n.push(e)||(xr[t]=[e]),function(){var r;xr[t]=(r=xr[t])==null?void 0:r.filter(i=>e!==i)}}function pf(t){try{t()}catch(e){console.error(e)}}class C4 extends Event{get detail(){return _4(this,Ro,"f")}get type(){return"wallet-standard:app-ready"}constructor(e){super("wallet-standard:app-ready",{bubbles:!1,cancelable:!1,composed:!1}),Ro.set(this,void 0),A4(this,Ro,e,"f")}preventDefault(){throw new Error("preventDefault cannot be called")}stopImmediatePropagation(){throw new Error("stopImmediatePropagation cannot be called")}stopPropagation(){throw new Error("stopPropagation cannot be called")}}Ro=new WeakMap;const br={SLUSH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzBDMEExRiIvPgo8cGF0aCBkPSJNMTMuMTM1OCAzMi4xMDg1QzE0LjE3MDEgMzUuOTY4MyAxOC4wMzMxIDM5LjQ2MjQgMjYuMDI1NSAzNy4zMjA4QzMzLjY1MTUgMzUuMjc3NCAzOC40MzA5IDI5LjAwNCAzNy4xOTE2IDI0LjM3ODlDMzYuNzYzNiAyMi43ODE3IDM1LjQ3NDYgMjEuNzAwNiAzMy40ODcyIDIxLjg3NjVMMTUuNzE2NSAyMy4zNTcyQzE0LjU5NzMgMjMuNDQzIDE0LjA4NDIgMjMuMjU5NiAxMy43ODgxIDIyLjU1NDNDMTMuNTAxIDIxLjg4MjMgMTMuNjY0NiAyMS4xNjA5IDE1LjAxNjMgMjAuNDc3N0wyOC41NDAxIDEzLjUzNzRDMjkuNTc2NyAxMy4wMSAzMC4yNjcxIDEyLjc4OTMgMzAuODk4IDEzLjAxMjZDMzEuMjkzNCAxMy4xNTYzIDMxLjU1MzggMTMuNzI4NCAzMS4zMTQ3IDE0LjQzNDRMMzAuNDM3OCAxNy4wMjMyQzI5LjM2MTcgMjAuMjAwMiAzMS42NjUzIDIwLjkzODIgMzIuOTY0MSAyMC41OTAyQzM0LjkyODkgMjAuMDYzNyAzNS4zOTExIDE4LjE5MjMgMzQuNzU4MSAxNS44Mjk5QzMzLjE1MzMgOS44NDA1NCAyNi43OTkgOC45MDQxMSAyMS4wMzc4IDEwLjQ0NzhDMTUuMTc2NyAxMi4wMTgzIDEwLjA5NiAxNi43Njc2IDExLjY0NzQgMjIuNTU3M0MxMi4wMTI5IDIzLjkyMTYgMTMuMjY4NyAyNS4wMTE2IDE0LjcyMzIgMjQuOTc4NUwxNi45NDM4IDI0Ljk3MzFDMTcuNDAwNCAyNC45NjI1IDE3LjIzNiAyNSAxOC4xMTcgMjQuOTI3MUMxOC45OTggMjQuODU0MSAyMS4zNTA5IDI0LjU2NDYgMjEuMzUwOSAyNC41NjQ2TDMyLjg5NjIgMjMuMjU4TDMzLjE5MzcgMjMuMjE0OEMzMy44Njg5IDIzLjA5OTcgMzQuMzc5MiAyMy4yNzUgMzQuODEwNiAyNC4wMTgzQzM1LjQ1NjMgMjUuMTMwNCAzNC40NzEyIDI1Ljk2OTEgMzMuMjkyIDI2Ljk3MzFDMzMuMjYwNSAyNyAzMy4yMjg4IDI3LjAyNyAzMy4xOTcgMjcuMDU0MUwyMy4wNDgyIDM1LjgwMDVDMjEuMzA4NyAzNy4zMDA4IDIwLjA4NjcgMzYuNzM2NyAxOS42NTg4IDM1LjEzOTVMMTguMTQzMSAyOS40ODI5QzE3Ljc2ODcgMjguMDg1NCAxNi40MDQxIDI2Ljk4ODkgMTQuODA1NiAyNy40MTcyQzEyLjgwNzUgMjcuOTUyNiAxMi42NDU1IDMwLjI3ODQgMTMuMTM1OCAzMi4xMDg1WiIgZmlsbD0iI0ZCRkFGRiIvPgo8L3N2Zz4K",OKX:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTUwIj48ZGVmcz48c3R5bGU+LmV7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxwYXRoIGlkPSJkIiBjbGFzcz0iZSIgZD0iTTAsMEgxNTBWMTUwSDBWMFoiLz48L2c+PC9nPjxwYXRoIGQ9Ik0xMy44MSwxMy41N3YxMjMuOThoMTIzLjk4VjEzLjU3SDEzLjgxWm0yNi44MiwyOC42NGMwLS44NywuNzEtMS41OCwxLjU4LTEuNThoMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTh2MjAuM2MwLC44OC0uNzEsMS41OS0xLjU4LDEuNTloLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OXYtMjAuM1ptMjMuNDYsNjYuN2MwLC44Ny0uNzEsMS41OC0xLjU4LDEuNThoLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OHYtMjAuM2MwLS44OCwuNzEtMS41OSwxLjU4LTEuNTloMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTl2MjAuM1ptMjEuODYtMjEuNjJoLTIwLjNjLS44NywwLTEuNTktLjcxLTEuNTktMS41OXYtMjAuM2MwLS44NywuNzEtMS41OSwxLjU5LTEuNTloMjAuM2MuODcsMCwxLjU5LC43MSwxLjU5LDEuNTl2MjAuM2MwLC44Ny0uNzEsMS41OS0xLjU5LDEuNTlabTI1LjA1LDIxLjYyYzAsLjg3LS43MSwxLjU4LTEuNTksMS41OGgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU4di0yMC4zYzAtLjg4LC43MS0xLjU5LDEuNTgtMS41OWgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OXYyMC4zWm0wLTQ2LjQxYzAsLjg4LS43MSwxLjU5LTEuNTksMS41OWgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU5di0yMC4zYzAtLjg3LC43MS0xLjU4LDEuNTgtMS41OGgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OHYyMC4zWiIvPjwvc3ZnPg==",PHANTOM:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo=",SUIET:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMjQiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8zMDVfMTI1MTYpIi8+PHBhdGggZD0iTTUxLjUgNDMuNmMtMy45IDAtNy42LTMuOS05LjUtNi40LTEuOSAyLjUtNS42IDYuNC05LjUgNi40LTQgMC03LjctMy45LTkuNS02LjQtMS44IDIuNS01LjUgNi40LTkuNSA2LjQtLjggMC0xLjUtLjYtMS41LTEuNSAwLS44LjctMS41IDEuNS0xLjUgMy4yIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjMuN2MxLjEgMS44IDUgNi45IDguMiA2LjkgMy4xIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjIuN2MxLjEgMS44IDUgNi45IDguMiA2LjkuOSAwIDEuNi43IDEuNiAxLjUgMCAuOS0uNiAxLjUtMS41IDEuNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTEuNSA1Mi4zYy0zLjkgMC03LjYtMy45LTkuNS02LjQtMS45IDIuNS01LjYgNi40LTkuNSA2LjQtNCAwLTcuNy0zLjktOS41LTYuNC0xLjggMi41LTUuNSA2LjQtOS41IDYuNC0uOCAwLTEuNS0uNi0xLjUtMS41IDAtLjguNy0xLjUgMS41LTEuNSAzLjIgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMy43YzEuMSAxLjggNSA2LjkgOC4yIDYuOSAzLjEgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMi43YzEuMSAxLjggNSA2LjkgOC4yIDYuOS45IDAgMS42LjcgMS42IDEuNSAwIC45LS42IDEuNS0xLjUgMS41ek0xNC42IDM2LjdjLS44IDAtMS40LS41LTEuNi0xLjNsLS4zLTMuNmMwLTEwLjkgOC45LTE5LjggMTkuOC0xOS44IDExIDAgMTkuOCA4LjkgMTkuOCAxOS44bC0uMyAzLjZjLS4xLjgtLjkgMS40LTEuNyAxLjItLjktLjEtMS41LS45LTEuMy0xLjhsLjMtM2MwLTkuMi03LjUtMTYuOC0xNi44LTE2LjgtOS4yIDAtMTYuNyA3LjUtMTYuNyAxNi44bC4yIDMuMWMuMi44LS4zIDEuNi0xLjEgMS44aC0uM3oiIGZpbGw9IiNmZmYiLz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMzA1XzEyNTE2IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUyLjc1ODAzIDUxLjM1OCAtNTEuNDM5NDcgNTIuODQxNzIgMCA3LjQwNykiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDU4REQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2N0M4RkYiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",SURF:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NzAuMDc3IDM5OS45MDZDNDU5LjIxNCA0MDcuOTM1IDQ0Ny4yNDggNDEzLjc2IDQzNC45NjggNDE0LjcwNUMzODguMzY2IDQxOC42NDEgMzI4LjUzNyAzNzIuODI2IDI5MC41OTQgMzY3Ljk0NUMyNTIuNjUxIDM2My4wNjUgMjMxLjM5NyAzODguNzI4IDIyMi4yNjYgNDAzLjY4NEMyMTYuNTk4IDQxMi44MTYgMjE1LjU2NSA0MjYuMTcxIDIxNS44OCA0MzYuODc3QzIxNi4xOTUgNDQxLjEyOCAyMTYuNDQgNDQ1LjkyNyAyMTcuODU3IDQ1Mi4xNzZDMjIwLjM0OSA0NjMuMTcxIDI0Ny45MjggNTA2LjY1MSAzMTEuNTM0IDUwMS4xNEMzODAuOTY1IDQ5NS4xNTcgNDIxLjI3IDQ1Ny44NDQgNDYyLjM2MiA0MDkuMDM3TDQ2Ny41NTggNDAyLjc0QzQ2OC4zNDUgNDAxLjc5NSA0NjkuMjkgNDAwLjY5MyA0NzAuMDc3IDM5OS43NDhWMzk5LjkwNloiIGZpbGw9IiM1OEM1RjMiLz4KPHBhdGggZD0iTTI1NC4zNiAzMjcuMDA5QzI2NC43NTEgMzIwLjcxMSAyNzUuNzcyIDMxNi40NjEgMjg2Ljc5MiAzMTYuNDYxQzMyOC44MjkgMzE2LjQ2MSAzNzguNTgxIDM2MS45NjEgNDEyLjExNSAzNjkuMjAzQzQ0NS42NSAzNzYuNDQ1IDQ2OC4zMjIgMzU0LjQwNyA0NzUuODc5IDM0Mi40MzhDNDgzLjQzNiAzMzAuNDcgNDg0LjM1MSAzMTkuMDgzIDQ4My45MDggMzEwLjk1QzQ4My40NjUgMzAyLjgxNyA0ODMuNzUgMzAzLjIzNiA0ODMuNDM2IDI5OS40NTdDNDgwLjYwMiAyOTIuMDU3IDQ2MC43NjUgMjQ4LjYwNCA0MDMuNjE0IDI0OC42MDRDMzQxLjI2OCAyNDguNjA0IDMwMi4zOCAyNzguODMyIDI2MS45MTggMzE5LjI5NEwyNTYuNzIyIDMyNC40OUMyNTUuOTM1IDMyNS4yNzcgMjU0Ljk4OSAzMjYuMjIyIDI1NC4yMDIgMzI3LjAwOUgyNTQuMzZaIiBmaWxsPSIjOURFMkZGIi8+CjxwYXRoIGQ9Ik0zMyAyOTUuNTI1TDMzLjAwMzkgMjk4LjQzNUMzMy4wMDM5IDM1NS45IDc5LjYwMyA0MDAuNjk1IDEzNi45MTEgNDAwLjY5NUMxNjEuNDcyIDQwMC42OTUgMTgxLjkxOSAzOTMuOTIgMTk5LjcxIDM3OS43NUwyMDAuNzYgMzc4Ljc2N0MyMDAuNzYgMzc4Ljc2NyAyMDEuNDE3IDM3OC4yMjYgMjAxLjkzNCAzNzcuNzA5QzIwMi4wOTIgMzc3LjU1MSAyMDIuNDA2IDM3Ny4yMzYgMjAyLjU2NCAzNzcuMDc5QzIwMi43MjEgMzc2LjkyMSAyMDMuMDM2IDM3Ni42MDcgMjAzLjE5MyAzNzYuNDQ5QzIwNS4yNCAzNzQuNTYgMjA4Ljg2MSAzNzEuMDk2IDIxNC4yMTQgMzY2LjA1OEMyMjMuMDMxIDM1Ny43MTQgMjM2LjI1NiAzNDQuODA0IDI1NC4wNDcgMzI3LjE3QzI1NC44MzQgMzI2LjM4MyAyNTUuNzc5IDMyNS40MzggMjU2LjU2NiAzMjQuNjUxTDI2MS43NjIgMzE5LjQ1NkMzMDIuMDY2IDI3OS4xNTEgMzQwLjk1NCAyNDguNzY1IDQwMy40NTggMjQ4Ljc2NUM0NjAuNjA5IDI0OC43NjUgNDgwLjQ0NyAyOTIuMjE4IDQ4My4yODEgMjk5LjYxOEM0NzcuNjEzIDIwMC41ODggNDA4LjE4MSAxMTguNzE5IDMxNS40NDggOTQuMzE1N0MzMTUuNDQ4IDk0LjMxNTcgMzEzLjcxNyA5My44NDM0IDMxMS44MjggOTMuMzcxMUMzMDIuMjI0IDkwLjUzNzEgMjc2LjA4OCA4MS40MDU0IDI3Ni4wODggNjYuMTMzN1YxNy45NTY5QzI3Ni4wODggMTcuOTU2OSAyNzguMzM5IDUuMTA2MjggMjY0LjI4IDE0LjMzNThDMjI4LjA2OSAzOC4xMDk0IDE5Ny4yMTEgODkuOTA3NCAxNjkuMTg2IDEwNS4xNzlDMTY5LjE4NiAxMDUuMTc5IDE2OC44NzEgMTA1LjMzNiAxNjguNzE0IDEwNS40OTRDMTAwLjIyNyAxMzQuNzc4IDQ4LjczNzUgMTk1LjE4MiAzNS4xOTc3IDI3MC41OTZDMzMuNzgwNyAyNzguMzEgMzMuNDc2MiAyODIuMjY5IDMzLjAwMzkgMjkwLjE0MUwzMyAyOTUuNTI1WiIgZmlsbD0iIzU4QzVGMyIvPgo8cGF0aCBkPSJNMjU1LjQ5NSAyNzEuMzQ5QzI1NS40OTUgMjcxLjM0OSAyMzMuODIzIDI4Ny45MDUgMjExLjcyMyAzMDYuNTg2QzE5NS4xNzMgMzIwLjU3NSAxNzguOTYxIDMzNS45MzkgMTY4LjI3MSAzNDUuNDM0QzE2MS41MDMgMzUxLjQ0NCAxNTIuODIyIDM0OS4xNzYgMTUwLjQ3NCAzMzguMTIxQzE0Ni44NTMgMzI3LjEgMTUzLjQ3MSAyODUuNzY0IDE4NC4xNzIgMjY1Ljc2OUMyMTQuODczIDI0NS43NzQgMjQ2LjIwNCAyNDUuNzc0IDI1Ny42OTcgMjUzLjMzMUMyNjcuNDE1IDI1OS43MjEgMjYzLjc0MyAyNjQuMjAzIDI2Mi4xMDYgMjY1Ljc2OUMyNjAuNDY5IDI2Ny4zMzUgMjU1LjQ5NSAyNzEuMzQ5IDI1NS40OTUgMjcxLjM0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",NIGHTLY:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2RDczRjgiLz4KPHBhdGggZD0iTTQ4IDg1LjYzNTZDNDggODUuNjM1NiA1Mi40NTMzIDg1LjYzNTYgNTUuNDQgODIuNTg2N0M1OC45MTU1IDc5LjI4MDEgNTcuMzUxMSA3NS40MzEyIDYyLjI3NTUgNzEuNDMxMkM2Ni45ODY2IDY3LjY0NDUgNzIuOTI0NCA3MC4zMzc5IDcyLjkyNDQgNzAuMzM3OUM3Ny4wMjIyIDYyLjEyNDUgNzQuNzkxMSA1Mi41NjkgNzQuNzkxMSA1Mi41NjlDODEuNzY4OCAzNC4yNTc5IDc1Ljk2NDQgMjEuMTU1NyA3NC40NDQ0IDE3LjM2MDFDNjkuNDQ4OCAyNC4zMzc5IDYzLjE5MTEgMjkuMTczNCA1NS43OTU1IDMyLjQwOUM1My4yMjY2IDMxLjcwNjggNTAuNTk1NSAzMS4zMzM0IDQ4IDMxLjM2MDFDNDUuNDEzMyAzMS4zMzM0IDQyLjc3MzMgMzEuNzA2OCA0MC4yMDQ0IDMyLjQwOUMzMi44MTc3IDI5LjE2NDUgMjYuNTUxMSAyNC4zMzc5IDIxLjU1NTUgMTcuMzYwMUMyMC4wMzU1IDIxLjE1NTcgMTQuMjMxMSAzNC4yNTc5IDIxLjIwODkgNTIuNTY5QzIxLjIwODkgNTIuNTY5IDE4Ljk3NzggNjIuMTI0NSAyMy4wNzU1IDcwLjMzNzlDMjMuMDc1NSA3MC4zMzc5IDI5LjAxMzMgNjcuNjQ0NSAzMy43MjQ0IDcxLjQzMTJDMzguNjU3NyA3NS40MzEyIDM3LjA4NDQgNzkuMjgwMSA0MC41NiA4Mi41ODY3QzQzLjU0NjYgODUuNjM1NiA0OCA4NS42MzU2IDQ4IDg1LjYzNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDc5OSA2NS4yOThDNDIuMjkzMyA1OS4yMTggMzYuMzAyMSA1Ny4yNjI0IDMyLjIxMzMgNTkuODIyNEMzMi4yMTMzIDU5LjgyMjQgMzIuODUzMyA2Mi40MzU4IDM1LjgzOTkgNjMuNzUxM0MzOC4yNzU1IDY0LjgyNjkgMzkuMzI0NCA2My4zODY5IDQyLjQ3OTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNMjIuNDk3NyAyMy4wOTM1QzIwLjA4ODggMzEuNTQ2OCAyMS4xMjg4IDQyLjI0MDIgMjQuOTMzMyA1MC4wMjY5QzI4LjgyNjYgNDcuMjcxMyAzMi45MTU1IDQzLjAxMzUgMzUuMDkzMyAzOC41MDY5QzI5Ljk2NDQgMzQuNzExMyAyNS42NjIyIDMxLjEwMjQgMjIuNDk3NyAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNTMuNTE5OSA2NS4yOThDNTMuNzA2NiA1OS4yMTggNTkuNjk3NyA1Ny4yNjI0IDYzLjc4NjYgNTkuODIyNEM2My43ODY2IDU5LjgyMjQgNjMuMTQ2NiA2Mi40MzU4IDYwLjE1OTkgNjMuNzUxM0M1Ny43MjQzIDY0LjgyNjkgNTYuNjc1NSA2My4zODY5IDUzLjUxOTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNzMuNTAyMiAyMy4wOTM1Qzc1LjkxMTEgMzEuNTQ2OCA3NC44NzExIDQyLjI0MDIgNzEuMDY2NiA1MC4wMjY5QzY3LjE3MzMgNDcuMjcxMyA2My4wODQ0IDQzLjAxMzUgNjAuOTA2NiAzOC41MDY5QzY2LjAzNTUgMzQuNzExMyA3MC4zMzc3IDMxLjEwMjQgNzMuNTAyMiAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNDcuOTk5OSA4NS4zMDY5QzUwLjE0MDQgODUuMzA2OSA1MS44NzU1IDgzLjc3ODcgNTEuODc1NSA4MS44OTM2QzUxLjg3NTUgODAuMDA4NCA1MC4xNDA0IDc4LjQ4MDIgNDcuOTk5OSA3OC40ODAyQzQ1Ljg1OTUgNzguNDgwMiA0NC4xMjQ0IDgwLjAwODQgNDQuMTI0NCA4MS44OTM2QzQ0LjEyNDQgODMuNzc4NyA0NS44NTk1IDg1LjMwNjkgNDcuOTk5OSA4NS4zMDY5WiIgZmlsbD0iIzdCODFGOSIvPgo8L3N2Zz4K"},gf="sui:devnet",En=class En extends Bn{constructor(e={}){super(e),this._adapters={},this._defaultChain=e.defaultChain||gf,this._activeAdapter=null,this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1,this._isConnecting=!1,this._client=null,this._suiMaster=null,this._rpcSettings=null,setTimeout(()=>{this.initialize()},50)}get activeAdapter(){return this._activeAdapter}getAddress(){return this._connectedAddress}async signAndExecuteTransactionBlock(e){return await this._activeAdapter.signAndExecuteTransactionBlock(e)}async signAndExecuteTransaction(e){return await this._activeAdapter.signAndExecuteTransaction(e)}get client(){return this._client}async getClient(){return await this.initClient(),this._client}async getSuiMaster(){return await this.initClient(),this._suiMaster}get suiMaster(){return this._suiMaster}get isConnected(){return this._isConnected}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}static getSingleton(e={}){let n=e.defaultChain||gf;return En._singleInstances[n]||(En._singleInstances[n]=new En(e)),En._singleInstances[n]}get adapters(){return this._adapters}async connect(e){let n=e;if(e.name&&(n=e.name),!this._adapters[n])return!1;this._activeAdapter=this._adapters[n],this._isConnecting=!0;try{await this._activeAdapter.connect()}catch(s){this.log("error",s)}this._isConnecting=!1}adapterConnected(e){this._activeAdapter=e,this._isConnected=e.isConnected,this._connectedAddress=e.connectedAddress,this._connectedChain,this._connectedChain=e.connectedChain,this._connectedChain=="sui:unknown"&&(this._connectedChain="sui:mainnet"),this._client=null,this._suiMaster=null,this.initClient(),this.emit("connected")}async setRPC(e={}){this._rpcSettings=e,this._client=null,this._suiMaster=null,await this.initClient(),this.emit("rpc")}adapterDisconnected(e){this._isConnected=!1,this._connectedAddress=null,this.emit("disconnected")}attachAdapter(e){let n=e.name;if(e.standartAdapter&&e.standartAdapter.name&&(n=e.standartAdapter.name),!n)return!1;const s=new x4({...e,debug:this._debug});this._adapters[n]?e.standartAdapter&&this._adapters[n].setStandartAdapter(e.standartAdapter):(this._adapters[n]=s,this._adapters[n].addEventListener("connected",r=>{this.adapterConnected(r.detail)}),this._adapters[n].addEventListener("disconnected",r=>{this.adapterDisconnected(r.detail)}),this.emit("adapter",s))}getCurrentChain(){return this._connectedChain?this._connectedChain:this._defaultChain}async initClient(){if(this._client)return!0;let e=this.getCurrentChain();const n=En.getChainsSettings();if(this._rpcSettings)this._rpcSettings.providerName=e.split("sui:").join(""),this._client=Cs.SuiUtils.suiClientForRPC(this._rpcSettings);else if(n[e])this._client=new Jc({url:n[e].fullnode}),this._client.endpoint=n[e].fullnode;else throw this.log("error","invalid chain",e),new Error("invalid chain: "+e);this._suiMaster=new Cs({debug:this._debug,signer:this,client:this._client})}async initialize(){await this.initClient();for(const s of En.getPossibleWallets())this.attachAdapter(s);const e=O4(),n=e.get();for(const s of n)this.attachAdapter({standartAdapter:s});e.on("register",s=>{s.name&&this.attachAdapter({standartAdapter:s})})}static getChainsSettings(){return{"sui:devnet":{fullnode:"https://fullnode.devnet.sui.io:443/",websocket:"https://fullnode.devnet.sui.io:443/",faucet:"https://faucet.devnet.sui.io/gas"},"sui:testnet":{fullnode:"https://fullnode.testnet.sui.io:443/",websocket:"https://fullnode.testnet.sui.io:443/",faucet:"https://faucet.testnet.sui.io/gas"},"sui:mainnet":{fullnode:"https://fullnode.mainnet.sui.io:443/",websocket:"https://fullnode.mainnet.sui.io:443/"},"sui:localnet":{websocket:"http://127.0.0.1:9000",fullnode:"http://127.0.0.1:9000",websocket:"http://127.0.0.1:9000",faucet:"http://127.0.0.1:9123/gas"}}}static getPossibleWallets(){return[{name:"Slush",icon:br.SLUSH,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/slush-%E2%80%94-a-sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"}},{name:"Suiet",icon:br.SUIET,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd"}},{name:"OKX Wallet",icon:br.OKX,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/mcohilncbfahbmgdjkbpemcciiolgcge"}},{name:"Phantom",icon:br.PHANTOM,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"}},{name:"Surf Wallet",icon:br.SURF,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/surf-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen"}},{name:"Nightly Wallet",icon:br.NIGHTLY,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/nightly/fiikommddbeccaoicoejoniammnalkfa"}}]}};Zr(En,"_singleInstances",{});let mu=En;Et.txInput;const Xi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},D4={name:"SuiSync",props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object}},data(){return{connectedAddress:null,connectedChain:null,adapters:[],suiInBrowser:null,suiMaster:null,lastSuiMasterInstanceN:null}},emits:["connect","connected","loaded","disconnected","error","suiMaster","adapters"],components:{},watch:{},methods:{async reinitSuiMaster(){this.suiMaster=await this.suiInBrowser.getSuiMaster(),(!this.lastSuiMasterInstanceN||this.lastSuiMasterInstanceN!=this.suiMaster.instanceN)&&this.$emit("suiMaster",this.suiMaster)},async setRPC(t={}){await this.suiInBrowser.setRPC(t),await this.reinitSuiMaster()}},mounted:function(){this.suiInBrowser=mu.getSingleton({debug:!0,defaultChain:this.defaultChain}),this.rpcSettings&&this.suiInBrowser.setRPC(this.rpcSettings),this.adapters=Object.values(this.suiInBrowser.adapters),this.suiInBrowser.addEventListener("adapter",t=>{this.adapters.push(t.detail),this.$emit("adapters",this.adapters)}),this.suiInBrowser.addEventListener("connected",()=>{this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)}),this.suiInBrowser.addEventListener("disconnected",()=>{this.connectedAddress=null,this.connectedChain=null,this.$emit("disconnected")}),this.$nextTick(()=>{this.$emit("loaded",this.suiInBrowser),this.$emit("adapters",this.adapters)}),this.suiInBrowser.isConnected&&(this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)),this.reinitSuiMaster()},computed:{}};function B4(t,e,n,s,r,i){return Oe(),Be("div")}const U4=Xi(D4,[["render",B4]]),L4={name:"SignInWithSuiDialog",emits:["click","hidden"],props:{adapters:{type:Array,default(){return[]}},showing:{type:Boolean,default:!1}},data(){return{isActive:!1,isVisible:!1}},watch:{showing:function(){this.showing?this.show():this.hide()}},computed:{},components:{},methods:{onAdapterClick(t){this.$emit("click",t)},show(){this.isActive=!0,setTimeout(()=>{this.isVisible=!0},10)},hide(){this.isVisible=!1,setTimeout(()=>{this.isActive=!1,this.$emit("hidden")},300)},onBackdrop(){this.hide(),console.log(this.adapters)}},beforeMount:function(){},mounted:async function(){}},z4={key:0,class:"signinwithsui_dialog"},P4={class:"signinwithsui_dialog_inner_card"},R4={class:"signinwithsui_dialog_list"},$4=["onClick"],V4={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_icon"},F4=["src"],q4={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_name"};function K4(t,e,n,s,r,i){return r.isActive?(Oe(),Be("div",z4,[ee("div",{class:"signinwithsui_dialog_backdrop",onClick:e[0]||(e[0]=(...o)=>i.onBackdrop&&i.onBackdrop(...o))}),ee("div",{class:xi(["signinwithsui_dialog_inner",{signinwithsui_dialog_inner_active:r.isVisible}])},[ee("div",P4,[ee("div",R4,[(Oe(!0),Be(_t,null,Tc(n.adapters,(o,a)=>(Oe(),Be(_t,{key:a},[o&&o.name&&(o.isDefault||o.okForSui)?(Oe(),Be("div",{key:0,class:xi(["signinwithsui_dialog_item",{signinwithsui_dialog_item_disabled:o.isDefault}]),onClick:c=>i.onAdapterClick(o)},[ee("div",V4,[ee("img",{loading:"lazy",fetchpriority:"auto","aria-hidden":"true",draggable:"false",src:o.icon},null,8,F4)]),ee("div",q4,nn(o.name),1)],10,$4)):It("",!0)],64))),128))])])],2)])):It("",!0)}const W4=Xi(L4,[["render",K4],["__scopeId","data-v-76130ab2"]]),G4={name:"SignInWithSui",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object},auto:{default:!0,type:Boolean},visible:{default:!0,type:Boolean},persist:{default:!1,type:Boolean}},data(){return{isLoading:!1,libsRequested:!0,adapters:[],connectedAddress:null,displayAddress:null,resolvedNameServiceName:null,connectedChain:null,forceChainCalculated:null,suiMaster:null,activeAdapter:null,showingDialog:!1}},watch:{defaultChain:async function(){this.connectedAddress=null,this.connectedChain=null,this.suiMaster=null,this.libsRequested=!1,await new Promise(t=>setTimeout(t,50)),this.libsRequested=!0}},computed:{},components:{SuidoubleSync:U4,SignInWithSuiDialog:W4},methods:{checkDisplayAddress(){let t=this.displayAddress;this.connectedAddress?this.connectedAddress&&(this.resolvedNameServiceName?t=this.resolvedNameServiceName:t=(""+this.connectedAddress).substr(0,6)+"..."+(""+this.connectedAddress).substr(-4)):t=null,this.displayAddress!=t&&(this.displayAddress=t,this.$emit("displayAddress",this.displayAddress))},async getNameServiceName(){if(this.suiMaster&&this.suiMaster.address){const t="resolvedNameServiceName_"+this.suiMaster.connectedChain+":"+this.suiMaster.address,e=10*60*1e3,n=this.getCache(t);if(n!==void 0)this.resolvedNameServiceName=n;else{const s=await this.suiMaster.resolveNameServiceName();this.resolvedNameServiceName=s,this.setCache(t,s,e)}this.checkDisplayAddress()}else this.resolvedNameServiceName=null,this.checkDisplayAddress()},onSuiMaster(t){this.suiMaster=t,(!this.defaultChain||this.defaultChain==this.suiMaster.connectedChain)&&(this.$emit("suiMaster",t),t.getClient().then(e=>{this.$emit("client",e),this.$emit("provider",e),t.signer&&t.signer.activeAdapter&&(this.$emit("adapter",t.signer.activeAdapter),this.activeAdapter=t.signer.activeAdapter)}),this.getNameServiceName()),this.__suiMasterPromise&&this.suiMaster&&(this.__suiMasterPromiseResolver(),this.__suiMasterPromise=null),this.__connectedSuiMasterPromise&&this.isSuiMasterConnected()&&(this.__connectedSuiMasterPromiseResolver(),this.__connectedSuiMasterPromise=null)},onSuiAdapters(t){this.adapters=t},isSuiMasterConnected(t=null){return this.suiMaster&&this.suiMaster.address?!(t&&this.suiMaster.connectedChain!=t):this.suiMaster&&this.suiMaster.signer&&this.suiMaster.signer.connectedAddress?!(t&&this.suiMaster.signer.connectedChain!=t):!1},async onAdapterClick(t){if(this.showingDialog=!1,t.isDefault&&!t.isInstalled)return window.open(t.getDownloadURL(),"_blank"),!1;this.isLoading=!0,await this.$refs.sui.suiInBrowser.connect(t),this.persist&&window.localStorage.setItem("vue-sui-preferred-adapter",t.name),this.isLoading=!1},async setRPC(t={}){this.$refs.sui.setRPC(t)},async requestSuiMaster(){if(this.suiMaster)return this.suiMaster;if(await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.suiMaster)return this.suiMaster;if(this.__suiMasterPromise){if(await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")}if(this.__suiMasterPromiseResolver=null,this.__suiMasterPromise=new Promise(t=>{this.__suiMasterPromiseResolver=t}),await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")},async requestConnectedSuiMaster(t=null){if(this.isSuiMasterConnected(t))return this.suiMaster;if(await this.requestLibs(),await new Promise(e=>{setTimeout(e,200)}),this.isSuiMasterConnected(t))return this.suiMaster;if(this.isLoading=!0,this.__connectedSuiMasterPromise){if(await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")}if(this.__connectedSuiMasterPromiseResolver=null,this.__connectedSuiMasterPromise=new Promise(e=>{this.__connectedSuiMasterPromiseResolver=e}),this.showingDialog=!0,await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")},async connect(){return await this.onClick()},async onClick(){this.isLoading=!0,await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.connectedAddress||(this.showingDialog=!0),this.isLoading=!1},async initialize(){if(this.auto&&(this.isLoading=!0,await this.requestLibs(),this.isLoading=!1),await new Promise(t=>{setTimeout(t,200)}),this.persist){const t=window.localStorage.getItem("vue-sui-preferred-adapter");t&&this.adapters.forEach(e=>{e.name&&e.okForSui&&e.name==t&&this.onAdapterClick(e)})}},async requestLibs(){this.libsRequested=!0,await this.__libsRequestedPromise},onLibsLoaded(){this.__libsRequestedPromiseResolver()},onConnected(){this.showingDialog=!1;const t=this.$refs.sui.suiInBrowser.connectedChain;!this.defaultChain||this.defaultChain==t?(this.connectedAddress=this.$refs.sui.suiInBrowser.connectedAddress,this.connectedChain=this.$refs.sui.suiInBrowser.connectedChain,this.$emit("connected",this.connectedAddress),this.checkDisplayAddress()):(this.connectedAddress=null,this.$emit("wrongchain",t),this.checkDisplayAddress())},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected"),this.checkDisplayAddress()},async disconnect(){window.localStorage.setItem("vue-sui-preferred-adapter",null);try{await this.activeAdapter.disconnect()}catch(t){return console.error(t),window.location.reload(),!1}return!0},setCache(t,e,n){const r={value:e,expiry:new Date().getTime()+n};window.localStorage.setItem(t,JSON.stringify(r))},getCache(t){try{const e=window.localStorage.getItem(t);if(!e)return;const n=JSON.parse(e);if(new Date().getTime()>n.expiry){window.localStorage.removeItem(t);return}return n.value}catch{return}}},beforeMount:function(){this.__libsRequestedPromiseResolver=null,this.__libsRequestedPromise=new Promise(t=>{this.__libsRequestedPromiseResolver=t})},mounted:async function(){this.initialize()}},H4={key:0},Y4={key:1};function Z4(t,e,n,s,r,i){const o=Ti("SignInWithSuiDialog"),a=Ti("SuidoubleSync");return Oe(),Be("div",null,[n.visible?(Oe(),Be("div",{key:0,onClick:e[0]||(e[0]=(...c)=>i.onClick&&i.onClick(...c))},[r.connectedAddress?It("",!0):(Oe(),Be("span",H4,"Connect with Sui")),r.connectedAddress?(Oe(),Be("span",Y4,nn(r.displayAddress),1)):It("",!0)])):It("",!0),(Oe(),Dc(h0,{to:"body"},[bt(o,{showing:r.showingDialog,onHidden:e[1]||(e[1]=c=>{this.showingDialog=!1}),adapters:r.adapters,onClick:i.onAdapterClick},null,8,["showing","adapters","onClick"])])),r.libsRequested?(Oe(),Dc(a,{key:1,ref:"sui",rpcSettings:n.rpcSettings,defaultChain:n.defaultChain,onAdapters:i.onSuiAdapters,onSuiMaster:i.onSuiMaster,onLoaded:i.onLibsLoaded,onConnected:i.onConnected,onDisconnected:i.onDisconnected},null,8,["rpcSettings","defaultChain","onAdapters","onSuiMaster","onLoaded","onConnected","onDisconnected"])):It("",!0)])}const bb=Xi(G4,[["render",Z4]]),Q4={name:"SignInWithSuiButton",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},persist:{default:!1,type:Boolean}},components:{SignInWithSui:bb},data(){return{connectedAddress:null,connectedChain:null,displayAddress:null}},methods:{onClick(){this.connectedAddress?this.$refs.signin.disconnect():this.$refs.signin.connect()},onDisplayAddress(t){this.displayAddress=t,this.$emit("displayAddress",t)},onConnected(t){this.connectedAddress=t,this.$emit("connected",t)},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected")},onWrongChain(t){this.$emit("wrongchain",t)},onSuiMaster(t){this.$emit("suiMaster",t)},onProvider(t){this.$emit("client",t),this.$emit("provider",t)},onAdapter(t){this.$emit("adapter",t)}}},X4={class:"signinwithsui_button_inner"},J4={key:0,class:"signinwithsui_button_inner"};function eM(t,e,n,s,r,i){const o=Ti("SignInWithSui");return Oe(),Be("div",{class:"signinwithsui_button",onClick:e[0]||(e[0]=(...a)=>i.onClick&&i.onClick(...a))},[ee("div",X4,[bt(o,{visible:!0,defaultChain:n.defaultChain,persist:n.persist,ref:"signin",onProvider:i.onProvider,onOnAdapter:i.onAdapter,onWrongchain:i.onWrongChain,onConnected:i.onConnected,onDisconnected:i.onDisconnected,onSuiMaster:i.onSuiMaster,onDisplayAddress:i.onDisplayAddress},null,8,["defaultChain","persist","onProvider","onOnAdapter","onWrongchain","onConnected","onDisconnected","onSuiMaster","onDisplayAddress"])]),r.connectedAddress?(Oe(),Be("div",J4,"disconnect")):It("",!0)])}const tM=Xi(Q4,[["render",eM],["__scopeId","data-v-fdd264ce"]]),nM={components:{SignInWithSui:bb,SignInWithSuiButton:tM},data(){return{connectedAddress:null,displayAddress:null,connectedChain:null,defaultChain:"sui:mainnet",extra:[],tryingTo:null,events:[],adapter:null,suiMaster:null}},mounted(){setTimeout(()=>{hljs.highlightAll()},50)},methods:{onDisplayAddress(t){this.events.unshift({name:"displayAddress",args:[t]}),this.displayAddress=t},onRPCClick(){this.$refs.sui.setRPC({url:"https://sui-mainnet-endpoint.blockvision.org",rpc:{}})},onWrongChain(t){this.events.unshift({name:"wrongchain",args:arguments}),this.connectedAddress=null,this.connectedChain=null,this.tryingTo=t},onSuiMaster(t){this.events.unshift({name:"suiMaster",args:[t?"instance_of_SuiMaster ("+(t.address?"wallet="+t.address:"readonly")+")":null]}),this.connectedAddress=t.address,this.connectedChain=t.connectedChain,this.suiMaster=t,this.tryingTo=null},onConnected(){this.events.unshift({name:"connected",args:arguments})},onProvider(t){this.events.unshift({name:"provider",args:[t?"instance_of_SuiClient":null]})},onClient(t){this.events.unshift({name:"client",args:[t?"instance_of_SuiClient":null]})},onAdapter(t){this.events.unshift({name:"adapter",args:[t?"instance_of_SuiInBrowserAdapter (name="+t.name+")":null]}),this.adapter=t},onDisconnected(){this.events.unshift({name:"disconnected",args:arguments}),this.connectedAddress=null,this.tryingTo=null},async onTx(){try{const t=this.suiMaster.suiCoins.get("sui"),e=new this.suiMaster.Transaction,n=await t.coinOfAmountToTxCoin(e,this.suiMaster.address,"0.01");e.transferObjects([n],this.suiMaster.address);const s=await this.suiMaster.signAndExecuteTransaction({transaction:e,requestType:"WaitForLocalExecution",options:{}});s&&s.digest&&alert("tx sent, digest: "+s.digest)}catch(t){alert(t)}}}},sM={style:{display:"block",padding:"12px",background:"#abc4ff",color:"#2A66F3","text-align":"right"}},rM={key:0},iM=["title"],oM={style:{padding:"12px"}},aM={class:"docs_column"},cM={class:"docs_column"},uM={class:"docs_column_right"},lM={key:0},dM={key:1},fM={key:0},hM={style:{padding:"12px"}},pM={class:"docs_column"},gM={key:0},bM={class:"docs_column"},yM={class:"docs_column_right"};function mM(t,e,n,s,r,i){const o=Ti("SignInWithSui"),a=Ti("SignInWithSuiButton");return Oe(),Be(_t,null,[ee("div",null,[ee("div",sM,[e[9]||(e[9]=ee("div",{style:{float:"left","line-height":"32px","vertical-align":"middle"}},[ee("h3",{style:{margin:"0",padding:"0"}},"vue-sui")],-1)),ee("button",{onClick:e[0]||(e[0]=c=>{this.$refs.sui.connect()})},[r.connectedAddress?It("",!0):(Oe(),Be("span",rM,"Connect")),r.connectedAddress?(Oe(),Be("span",{key:1,title:r.connectedAddress},nn(r.displayAddress),9,iM)):It("",!0),bt(o,{ref:"sui",defaultChain:r.defaultChain,persist:!0,onConnected:i.onConnected,onClient:i.onClient,onSuiMaster:i.onSuiMaster,onProvider:i.onProvider,onAdapter:i.onAdapter,onDisconnected:i.onDisconnected,onDisplayAddress:i.onDisplayAddress,visible:!1},null,8,["defaultChain","onConnected","onClient","onSuiMaster","onProvider","onAdapter","onDisconnected","onDisplayAddress"])]),r.connectedAddress?(Oe(),Be("button",{key:0,onClick:e[1]||(e[1]=c=>{this.$refs.sui.disconnect()})}," Disconnect ")):It("",!0)])]),ee("div",oM,[ee("div",aM,[ee("p",null,[e[10]||(e[10]=mr("switch `defaultChain` component prop to: ")),ee("a",{href:"#",onClick:e[2]||(e[2]=c=>{r.defaultChain="sui:mainnet"})},"sui:mainnet"),e[11]||(e[11]=mr()),ee("a",{href:"#",onClick:e[3]||(e[3]=c=>{r.defaultChain="sui:devnet"})},"sui:devnet"),e[12]||(e[12]=mr()),ee("a",{href:"#",onClick:e[4]||(e[4]=c=>{r.defaultChain="sui:testnet"})},"sui:testnet")])]),ee("div",cM,[ee("div",uM,[ee("table",null,[ee("tr",null,[e[13]||(e[13]=ee("td",null,"Connected as",-1)),ee("td",null,[!r.connectedAddress&&r.connectedChain?(Oe(),Be("span",lM,"read-only")):It("",!0),r.connectedAddress&&r.connectedChain?(Oe(),Be("span",dM,[mr(nn(r.connectedAddress)+" ",1),ee("button",{onClick:e[5]||(e[5]=(...c)=>i.onTx&&i.onTx(...c))},"Do Sample TX")])):It("",!0)])]),ee("tr",null,[e[14]||(e[14]=ee("td",null,"Connected to",-1)),ee("td",null,nn(r.connectedChain),1)]),ee("tr",null,[e[15]||(e[15]=ee("td",null,"defaultChain",-1)),ee("td",null,nn(r.defaultChain),1)])]),r.tryingTo?(Oe(),Be("span",fM,"Was trying to connect to "+nn(r.tryingTo)+", but expected to "+nn(r.defaultChain)+" (ask user to switch chain in wallet extension settings or reinitialize/redirect to different chain dapp/sub-dapp)",1)):It("",!0)])])]),ee("div",hM,[ee("div",pM,[e[17]||(e[17]=ay(`<div><p>Demo of the <a href="https://github.com/suidouble/vue-sui">vue-sui</a> component. Vue component to connect your dapp to Sui blockchain.</p></div><p><b>Option 1:</b> All styles on pages are managed by you, the SignInWithSui component itself is invisible until popup is requested.</p><p>Take a look at <a href="https://github.com/suidouble/vue-sui/blob/main/src/App.vue">this app code</a> to check this option implementation.</p><pre><code class="language-javascript">
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
		</code></pre>`,14)),bt(a,{defaultChain:r.defaultChain,onWrongchain:i.onWrongChain},null,8,["defaultChain","onWrongchain"]),e[18]||(e[18]=ee("p",null,"SignInWithSuiButton emits the same set of events as underlying SignInWithSui component",-1)),(Oe(!0),Be(_t,null,Tc(r.extra,c=>(Oe(),Be("li",{key:c},[bt(a,{defaultChain:r.defaultChain},null,8,["defaultChain"])]))),128)),r.adapter?(Oe(),Be("p",gM,[ee("a",{href:"#",onClick:e[6]||(e[6]=c=>{t.$refs.sui.disconnect()})},"disconnect"),e[16]||(e[16]=mr(" ( with some wallets (Suiet) it's instant, with some (Sui Wallet) - it clears connection and refreshes the page)"))])):It("",!0),e[19]||(e[19]=ee("p",null,"Also try to disconnect or switch chain directly from browser extension, vue-sui will cover this events and update component state on the fly.",-1)),e[20]||(e[20]=ee("p",null," ",-1))]),ee("div",bM,[ee("div",yM,[e[21]||(e[21]=ee("p",null,"Request the component to display a wallet extension selection popup and prompt the user to connect their wallet:",-1)),e[22]||(e[22]=ee("pre",null,[ee("code",{class:"language-javascript"},`
this.$refs.sui.connect();
			`)],-1)),ee("p",null,[ee("button",{onClick:e[7]||(e[7]=c=>{this.$refs.sui.connect()})},"Execute this.$refs.sui.connect()")]),e[23]||(e[23]=ee("p",null,"To disconnect from the wallet:",-1)),e[24]||(e[24]=ee("pre",null,[ee("code",{class:"language-javascript"},`
this.$refs.sui.disconnect();
		`)],-1)),ee("p",null,[ee("button",{onClick:e[8]||(e[8]=c=>{this.$refs.sui.disconnect()})},"Execute this.$refs.sui.disconnect()")]),e[25]||(e[25]=ee("h3",null,"Events",-1)),e[26]||(e[26]=ee("p",null,"List of events from SignInWithSui `.$refs.sui` component",-1)),ee("table",null,[(Oe(!0),Be(_t,null,Tc(r.events,(c,l)=>(Oe(),Be("tr",{key:l},[ee("td",null,[ee("b",null,nn(c.name),1)]),ee("td",null,nn(JSON.stringify(c.args)),1)]))),128))])])])])],64)}const wM=Xi(nM,[["render",mM]]);Vy(wM).mount("#app");bf.registerLanguage("javascript",wb);window.hljs=bf;
