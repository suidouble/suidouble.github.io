var Sp=Object.defineProperty;var vu=t=>{throw TypeError(t)};var Mp=(t,e,n)=>e in t?Sp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Vs=(t,e,n)=>Mp(t,typeof e!="symbol"?e+"":e,n),Su=(t,e,n)=>e.has(t)||vu("Cannot "+n);var Mu=(t,e,n)=>(Su(t,e,"read from private field"),n?n.call(t):e.get(t)),xu=(t,e,n)=>e.has(t)?vu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Iu=(t,e,n,s)=>(Su(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);import Yl from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/highlight.min.js";import xp from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/languages/javascript.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ee={},sr=[],mn=()=>{},Ip=()=>!1,Oo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vc=t=>t.startsWith("onUpdate:"),ut=Object.assign,Sc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_p=Object.prototype.hasOwnProperty,ge=(t,e)=>_p.call(t,e),oe=Array.isArray,rr=t=>jo(t)==="[object Map]",Ql=t=>jo(t)==="[object Set]",ae=t=>typeof t=="function",Fe=t=>typeof t=="string",bs=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Zl=t=>(ke(t)||ae(t))&&ae(t.then)&&ae(t.catch),Jl=Object.prototype.toString,jo=t=>Jl.call(t),Ep=t=>jo(t).slice(8,-1),Xl=t=>jo(t)==="[object Object]",Mc=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Br=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ap=/-(\w)/g,zt=Co(t=>t.replace(Ap,(e,n)=>n?n.toUpperCase():"")),Np=/\B([A-Z])/g,$s=Co(t=>t.replace(Np,"-$1").toLowerCase()),ko=Co(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jo=Co(t=>t?`on${ko(t)}`:""),js=(t,e)=>!Object.is(t,e),Xo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ed=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Tp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _u;const Do=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Fe(s)?kp(s):xc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Fe(t)||ke(t))return t}const Op=/;(?![^(]*\))/g,jp=/:([^]+)/,Cp=/\/\*[^]*?\*\//g;function kp(t){const e={};return t.replace(Cp,"").split(Op).forEach(n=>{if(n){const s=n.split(jp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Zr(t){let e="";if(Fe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const s=Zr(t[n]);s&&(e+=s+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Up=wc(Dp);function td(t){return!!t||t===""}const nd=t=>!!(t&&t.__v_isRef===!0),Vt=t=>Fe(t)?t:t==null?"":oe(t)||ke(t)&&(t.toString===Jl||!ae(t.toString))?nd(t)?Vt(t.value):JSON.stringify(t,sd,2):String(t),sd=(t,e)=>nd(e)?sd(t,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ea(s,i)+" =>"]=r,n),{})}:Ql(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ea(n))}:bs(e)?ea(e):ke(e)&&!oe(e)&&!Xl(e)?String(e):e,ea=(t,e="")=>{var n;return bs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Bp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Lp(){return It}let Ie;const ta=new WeakSet;class rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ta.has(this)&&(ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),ad(this);const e=Ie,n=Zt;Ie=this,Zt=!0;try{return this.fn()}finally{cd(this),Ie=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let id=0,Lr,zr;function od(t,e=!1){if(t.flags|=8,e){t.next=zr,zr=t;return}t.next=Lr,Lr=t}function Ic(){id++}function _c(){if(--id>0)return;if(zr){let e=zr;for(zr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Lr;){let e=Lr;for(Lr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ad(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cd(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ec(s),zp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function ja(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ud(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ud(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Jr))return;t.globalVersion=Jr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ja(t)){t.flags&=-3;return}const n=Ie,s=Zt;Ie=t,Zt=!0;try{ad(t);const r=t.fn(t._value);(e.version===0||js(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ie=n,Zt=s,cd(t),t.flags&=-3}}function Ec(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ec(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function zp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const ld=[];function ys(){ld.push(Zt),Zt=!1}function ms(){const t=ld.pop();Zt=t===void 0?!0:t}function Eu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ie;Ie=void 0;try{e()}finally{Ie=n}}}let Jr=0;class Pp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ie||!Zt||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new Pp(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,fd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=s)}return n}trigger(e){this.version++,Jr++,this.notify(e)}notify(e){Ic();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_c()}}}function fd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)fd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ca=new WeakMap,Cs=Symbol(""),ka=Symbol(""),Xr=Symbol("");function tt(t,e,n){if(Zt&&Ie){let s=Ca.get(t);s||Ca.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new dd),r.map=s,r.key=n),r.track()}}function Bn(t,e,n,s,r,i){const o=Ca.get(t);if(!o){Jr++;return}const a=c=>{c&&c.trigger()};if(Ic(),e==="clear")o.forEach(a);else{const c=oe(t),l=c&&Mc(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===Xr||!bs(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Xr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Cs)),rr(t)&&a(o.get(ka)));break;case"delete":c||(a(o.get(Cs)),rr(t)&&a(o.get(ka)));break;case"set":rr(t)&&a(o.get(Cs));break}}_c()}function Ws(t){const e=me(t);return e===t?e:(tt(e,"iterate",Xr),Jt(t)?e:e.map(pt))}function Uo(t){return tt(t=me(t),"iterate",Xr),t}const Rp={__proto__:null,[Symbol.iterator](){return na(this,Symbol.iterator,pt)},concat(...t){return Ws(this).concat(...t.map(e=>oe(e)?Ws(e):e))},entries(){return na(this,"entries",t=>(t[1]=pt(t[1]),t))},every(t,e){return xn(this,"every",t,e,void 0,arguments)},filter(t,e){return xn(this,"filter",t,e,n=>n.map(pt),arguments)},find(t,e){return xn(this,"find",t,e,pt,arguments)},findIndex(t,e){return xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return xn(this,"findLast",t,e,pt,arguments)},findLastIndex(t,e){return xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return sa(this,"includes",t)},indexOf(...t){return sa(this,"indexOf",t)},join(t){return Ws(this).join(t)},lastIndexOf(...t){return sa(this,"lastIndexOf",t)},map(t,e){return xn(this,"map",t,e,void 0,arguments)},pop(){return xr(this,"pop")},push(...t){return xr(this,"push",t)},reduce(t,...e){return Au(this,"reduce",t,e)},reduceRight(t,...e){return Au(this,"reduceRight",t,e)},shift(){return xr(this,"shift")},some(t,e){return xn(this,"some",t,e,void 0,arguments)},splice(...t){return xr(this,"splice",t)},toReversed(){return Ws(this).toReversed()},toSorted(t){return Ws(this).toSorted(t)},toSpliced(...t){return Ws(this).toSpliced(...t)},unshift(...t){return xr(this,"unshift",t)},values(){return na(this,"values",pt)}};function na(t,e,n){const s=Uo(t),r=s[e]();return s!==t&&!Jt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const $p=Array.prototype;function xn(t,e,n,s,r,i){const o=Uo(t),a=o!==t&&!Jt(t),c=o[e];if(c!==$p[e]){const d=c.apply(t,i);return a?pt(d):d}let l=n;o!==t&&(a?l=function(d,h){return n.call(this,pt(d),h,t)}:n.length>2&&(l=function(d,h){return n.call(this,d,h,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Au(t,e,n,s){const r=Uo(t);let i=n;return r!==t&&(Jt(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,pt(a),c,t)}),r[e](i,...s)}function sa(t,e,n){const s=me(t);tt(s,"iterate",Xr);const r=s[e](...n);return(r===-1||r===!1)&&Oc(n[0])?(n[0]=me(n[0]),s[e](...n)):r}function xr(t,e,n=[]){ys(),Ic();const s=me(t)[e].apply(t,n);return _c(),ms(),s}const Fp=wc("__proto__,__v_isRef,__isVue"),hd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bs));function Vp(t){bs(t)||(t=String(t));const e=me(this);return tt(e,"has",t),e.hasOwnProperty(t)}class pd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Xp:md:i?yd:bd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=oe(e);if(!r){let c;if(o&&(c=Rp[n]))return c;if(n==="hasOwnProperty")return Vp}const a=Reflect.get(e,n,at(e)?e:s);return(bs(n)?hd.has(n):Fp(n))||(r||tt(e,"get",n),i)?a:at(a)?o&&Mc(n)?a:a.value:ke(a)?r?wd(a):Nc(a):a}}class gd extends pd{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=ur(i);if(!Jt(s)&&!ur(s)&&(i=me(i),s=me(s)),!oe(e)&&at(i)&&!at(s))return c?!1:(i.value=s,!0)}const o=oe(e)&&Mc(n)?Number(n)<e.length:ge(e,n),a=Reflect.set(e,n,s,at(e)?e:r);return e===me(r)&&(o?js(s,i)&&Bn(e,"set",n,s):Bn(e,"add",n,s)),a}deleteProperty(e,n){const s=ge(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Bn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!bs(n)||!hd.has(n))&&tt(e,"has",n),s}ownKeys(e){return tt(e,"iterate",oe(e)?"length":Cs),Reflect.ownKeys(e)}}class Wp extends pd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qp=new gd,Kp=new Wp,Gp=new gd(!0);const Da=t=>t,xi=t=>Reflect.getPrototypeOf(t);function Hp(t,e,n){return function(...s){const r=this.__v_raw,i=me(r),o=rr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Da:e?Ua:pt;return!e&&tt(i,"iterate",c?ka:Cs),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Ii(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yp(t,e){const n={get(r){const i=this.__v_raw,o=me(i),a=me(r);t||(js(r,a)&&tt(o,"get",r),tt(o,"get",a));const{has:c}=xi(o),l=e?Da:t?Ua:pt;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&tt(me(r),"iterate",Cs),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=me(i),a=me(r);return t||(js(r,a)&&tt(o,"has",r),tt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=me(a),l=e?Da:t?Ua:pt;return!t&&tt(c,"iterate",Cs),a.forEach((u,d)=>r.call(i,l(u),l(d),o))}};return ut(n,t?{add:Ii("add"),set:Ii("set"),delete:Ii("delete"),clear:Ii("clear")}:{add(r){!e&&!Jt(r)&&!ur(r)&&(r=me(r));const i=me(this);return xi(i).has.call(i,r)||(i.add(r),Bn(i,"add",r,r)),this},set(r,i){!e&&!Jt(i)&&!ur(i)&&(i=me(i));const o=me(this),{has:a,get:c}=xi(o);let l=a.call(o,r);l||(r=me(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?js(i,u)&&Bn(o,"set",r,i):Bn(o,"add",r,i),this},delete(r){const i=me(this),{has:o,get:a}=xi(i);let c=o.call(i,r);c||(r=me(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&Bn(i,"delete",r,void 0),l},clear(){const r=me(this),i=r.size!==0,o=r.clear();return i&&Bn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Hp(r,t,e)}),n}function Ac(t,e){const n=Yp(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ge(n,r)&&r in s?n:s,r,i)}const Qp={get:Ac(!1,!1)},Zp={get:Ac(!1,!0)},Jp={get:Ac(!0,!1)};const bd=new WeakMap,yd=new WeakMap,md=new WeakMap,Xp=new WeakMap;function eg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tg(t){return t.__v_skip||!Object.isExtensible(t)?0:eg(Ep(t))}function Nc(t){return ur(t)?t:Tc(t,!1,qp,Qp,bd)}function ng(t){return Tc(t,!1,Gp,Zp,yd)}function wd(t){return Tc(t,!0,Kp,Jp,md)}function Tc(t,e,n,s,r){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=tg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ir(t){return ur(t)?ir(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function Jt(t){return!!(t&&t.__v_isShallow)}function Oc(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function sg(t){return!ge(t,"__v_skip")&&Object.isExtensible(t)&&ed(t,"__v_skip",!0),t}const pt=t=>ke(t)?Nc(t):t,Ua=t=>ke(t)?wd(t):t;function at(t){return t?t.__v_isRef===!0:!1}function rg(t){return at(t)?t.value:t}const ig={get:(t,e,n)=>e==="__v_raw"?t:rg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return at(r)&&!at(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function vd(t){return ir(t)?t:new Proxy(t,ig)}class og{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new dd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return od(this,!0),!0}get value(){const e=this.dep.track();return ud(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ag(t,e,n=!1){let s,r;return ae(t)?s=t:(s=t.get,r=t.set),new og(s,r,n)}const _i={},io=new WeakMap;let xs;function cg(t,e=!1,n=xs){if(n){let s=io.get(n);s||io.set(n,s=[]),s.push(t)}}function ug(t,e,n=Ee){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>r?O:Jt(O)||r===!1||r===0?is(O,1):is(O);let u,d,h,p,y=!1,m=!1;if(at(t)?(d=()=>t.value,y=Jt(t)):ir(t)?(d=()=>l(t),y=!0):oe(t)?(m=!0,y=t.some(O=>ir(O)||Jt(O)),d=()=>t.map(O=>{if(at(O))return O.value;if(ir(O))return l(O);if(ae(O))return c?c(O,2):O()})):ae(t)?e?d=c?()=>c(t,2):t:d=()=>{if(h){ys();try{h()}finally{ms()}}const O=xs;xs=u;try{return c?c(t,3,[p]):t(p)}finally{xs=O}}:d=mn,e&&r){const O=d,S=r===!0?1/0:r;d=()=>is(O(),S)}const w=Lp(),x=()=>{u.stop(),w&&w.active&&Sc(w.effects,u)};if(i&&e){const O=e;e=(...S)=>{O(...S),x()}}let U=m?new Array(t.length).fill(_i):_i;const A=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const S=u.run();if(r||y||(m?S.some((H,Q)=>js(H,U[Q])):js(S,U))){h&&h();const H=xs;xs=u;try{const Q=[S,U===_i?void 0:m&&U[0]===_i?[]:U,p];c?c(e,3,Q):e(...Q),U=S}finally{xs=H}}}else u.run()};return a&&a(A),u=new rd(d),u.scheduler=o?()=>o(A,!1):A,p=O=>cg(O,!1,u),h=u.onStop=()=>{const O=io.get(u);if(O){if(c)c(O,4);else for(const S of O)S();io.delete(u)}},e?s?A(!0):U=u.run():o?o(A.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function is(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,at(t))is(t.value,e,n);else if(oe(t))for(let s=0;s<t.length;s++)is(t[s],e,n);else if(Ql(t)||rr(t))t.forEach(s=>{is(s,e,n)});else if(Xl(t)){for(const s in t)is(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&is(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pi(t,e,n,s){try{return s?t(...s):t()}catch(r){Bo(r,e,n)}}function vn(t,e,n,s){if(ae(t)){const r=pi(t,e,n,s);return r&&Zl(r)&&r.catch(i=>{Bo(i,e,n)}),r}if(oe(t)){const r=[];for(let i=0;i<t.length;i++)r.push(vn(t[i],e,n,s));return r}}function Bo(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ee;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){ys(),pi(i,null,10,[t,c,l]),ms();return}}lg(t,n,r,s,o)}function lg(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const ot=[];let dn=-1;const or=[];let Xn=null,Ys=0;const Sd=Promise.resolve();let oo=null;function dg(t){const e=oo||Sd;return t?e.then(this?t.bind(this):t):e}function fg(t){let e=dn+1,n=ot.length;for(;e<n;){const s=e+n>>>1,r=ot[s],i=ei(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function jc(t){if(!(t.flags&1)){const e=ei(t),n=ot[ot.length-1];!n||!(t.flags&2)&&e>=ei(n)?ot.push(t):ot.splice(fg(e),0,t),t.flags|=1,Md()}}function Md(){oo||(oo=Sd.then(Id))}function hg(t){oe(t)?or.push(...t):Xn&&t.id===-1?Xn.splice(Ys+1,0,t):t.flags&1||(or.push(t),t.flags|=1),Md()}function Nu(t,e,n=dn+1){for(;n<ot.length;n++){const s=ot[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ot.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function xd(t){if(or.length){const e=[...new Set(or)].sort((n,s)=>ei(n)-ei(s));if(or.length=0,Xn){Xn.push(...e);return}for(Xn=e,Ys=0;Ys<Xn.length;Ys++){const n=Xn[Ys];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xn=null,Ys=0}}const ei=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Id(t){try{for(dn=0;dn<ot.length;dn++){const e=ot[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<ot.length;dn++){const e=ot[dn];e&&(e.flags&=-2)}dn=-1,ot.length=0,xd(),oo=null,(ot.length||or.length)&&Id()}}let Yt=null,_d=null;function ao(t){const e=Yt;return Yt=t,_d=t&&t.type.__scopeId||null,e}function pg(t,e=Yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&zu(-1);const i=ao(e);let o;try{o=t(...r)}finally{ao(i),s._d&&zu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ys(),vn(c,n,8,[t.el,a,t,e]),ms())}}const gg=Symbol("_vte"),bg=t=>t.__isTeleport;function Cc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Cc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ed(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function co(t,e,n,s,r=!1){if(oe(t)){t.forEach((y,m)=>co(y,e&&(oe(e)?e[m]:e),n,s,r));return}if(Pr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&co(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Uc(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,d=a.setupState,h=me(d),p=d===Ee?()=>!1:y=>ge(h,y);if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,p(l)&&(d[l]=null)):at(l)&&(l.value=null)),ae(c))pi(c,a,12,[o,u]);else{const y=Fe(c),m=at(c);if(y||m){const w=()=>{if(t.f){const x=y?p(c)?d[c]:u[c]:c.value;r?oe(x)&&Sc(x,i):oe(x)?x.includes(i)||x.push(i):y?(u[c]=[i],p(c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else y?(u[c]=o,p(c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,xt(w,n)):w()}}}Do().requestIdleCallback;Do().cancelIdleCallback;const Pr=t=>!!t.type.__asyncLoader,Ad=t=>t.type.__isKeepAlive;function yg(t,e){Nd(t,"a",e)}function mg(t,e){Nd(t,"da",e)}function Nd(t,e,n=nt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Lo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ad(r.parent.vnode)&&wg(s,e,n,r),r=r.parent}}function wg(t,e,n,s){const r=Lo(e,t,s,!0);Td(()=>{Sc(s[e],r)},n)}function Lo(t,e,n=nt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ys();const a=gi(n),c=vn(e,n,t,o);return a(),ms(),c});return s?r.unshift(i):r.push(i),i}}const $n=t=>(e,n=nt)=>{(!si||t==="sp")&&Lo(t,(...s)=>e(...s),n)},vg=$n("bm"),Sg=$n("m"),Mg=$n("bu"),xg=$n("u"),Ig=$n("bum"),Td=$n("um"),_g=$n("sp"),Eg=$n("rtg"),Ag=$n("rtc");function Ng(t,e=nt){Lo("ec",t,e)}const Tg="components";function ti(t,e){return jg(Tg,t,!0,e)||t}const Og=Symbol.for("v-ndc");function jg(t,e,n=!0,s=!1){const r=Yt||nt;if(r){const i=r.type;{const a=wb(i,!1);if(a&&(a===e||a===zt(e)||a===ko(zt(e))))return i}const o=Tu(r[t]||i[t],e)||Tu(r.appContext[t],e);return!o&&s?i:o}}function Tu(t,e){return t&&(t[e]||t[zt(e)]||t[ko(zt(e))])}function Ba(t,e,n,s){let r;const i=n,o=oe(t);if(o||Fe(t)){const a=o&&ir(t);let c=!1;a&&(c=!Jt(t),t=Uo(t)),r=new Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=e(c?pt(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ke(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}const La=t=>t?Jd(t)?Uc(t):La(t.parent):null,Rr=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>La(t.parent),$root:t=>La(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jd(t),$forceUpdate:t=>t.f||(t.f=()=>{jc(t.update)}),$nextTick:t=>t.n||(t.n=dg.bind(t.proxy)),$watch:t=>Xg.bind(t)}),ra=(t,e)=>t!==Ee&&!t.__isScriptSetup&&ge(t,e),Cg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ra(s,e))return o[e]=1,s[e];if(r!==Ee&&ge(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,i[e];if(n!==Ee&&ge(n,e))return o[e]=4,n[e];za&&(o[e]=0)}}const u=Rr[e];let d,h;if(u)return e==="$attrs"&&tt(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ee&&ge(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,ge(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ra(r,e)?(r[e]=n,!0):s!==Ee&&ge(s,e)?(s[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&ge(t,o)||ra(e,o)||(a=i[0])&&ge(a,o)||ge(s,o)||ge(Rr,o)||ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ou(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let za=!0;function kg(t){const e=jd(t),n=t.proxy,s=t.ctx;za=!1,e.beforeCreate&&ju(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:y,activated:m,deactivated:w,beforeDestroy:x,beforeUnmount:U,destroyed:A,unmounted:O,render:S,renderTracked:H,renderTriggered:Q,errorCaptured:G,serverPrefetch:v,expose:N,inheritAttrs:I,components:_,directives:k,filters:W}=e;if(l&&Dg(l,s,null),o)for(const q in o){const P=o[q];ae(P)&&(s[q]=P.bind(n))}if(r){const q=r.call(n,n);ke(q)&&(t.data=Nc(q))}if(za=!0,i)for(const q in i){const P=i[q],be=ae(P)?P.bind(n,n):ae(P.get)?P.get.bind(n,n):mn,de=!ae(P)&&ae(P.set)?P.set.bind(n):mn,te=Sb({get:be,set:de});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>te.value,set:he=>te.value=he})}if(a)for(const q in a)Od(a[q],s,n,q);if(c){const q=ae(c)?c.call(n):c;Reflect.ownKeys(q).forEach(P=>{Rg(P,q[P])})}u&&ju(u,t,"c");function z(q,P){oe(P)?P.forEach(be=>q(be.bind(n))):P&&q(P.bind(n))}if(z(vg,d),z(Sg,h),z(Mg,p),z(xg,y),z(yg,m),z(mg,w),z(Ng,G),z(Ag,H),z(Eg,Q),z(Ig,U),z(Td,O),z(_g,v),oe(N))if(N.length){const q=t.exposed||(t.exposed={});N.forEach(P=>{Object.defineProperty(q,P,{get:()=>n[P],set:be=>n[P]=be})})}else t.exposed||(t.exposed={});S&&t.render===mn&&(t.render=S),I!=null&&(t.inheritAttrs=I),_&&(t.components=_),k&&(t.directives=k),v&&Ed(t)}function Dg(t,e,n=mn){oe(t)&&(t=Pa(t));for(const s in t){const r=t[s];let i;ke(r)?"default"in r?i=$i(r.from||s,r.default,!0):i=$i(r.from||s):i=$i(r),at(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function ju(t,e,n){vn(oe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Od(t,e,n,s){let r=s.includes(".")?qd(n,s):()=>n[s];if(Fe(t)){const i=e[t];ae(i)&&oa(r,i)}else if(ae(t))oa(r,t.bind(n));else if(ke(t))if(oe(t))t.forEach(i=>Od(i,e,n,s));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&oa(r,i,t)}}function jd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>uo(c,l,o,!0)),uo(c,e,o)),ke(e)&&i.set(e,c),c}function uo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&uo(t,i,n,!0),r&&r.forEach(o=>uo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ug[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ug={data:Cu,props:ku,emits:ku,methods:Tr,computed:Tr,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Tr,directives:Tr,watch:Lg,provide:Cu,inject:Bg};function Cu(t,e){return e?t?function(){return ut(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function Bg(t,e){return Tr(Pa(t),Pa(e))}function Pa(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Tr(t,e){return t?ut(Object.create(null),t,e):e}function ku(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:ut(Object.create(null),Ou(t),Ou(e??{})):e}function Lg(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Cd(){return{app:null,config:{isNativeTag:Ip,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zg=0;function Pg(t,e){return function(s,r=null){ae(s)||(s=ut({},s)),r!=null&&!ke(r)&&(r=null);const i=Cd(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:zg++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Mb,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&ae(u.install)?(o.add(u),u.install(l,...d)):ae(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,h){if(!c){const p=l._ceVNode||ct(s,r);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),c=!0,l._container=u,u.__vue_app__=l,Uc(p.component)}},onUnmount(u){a.push(u)},unmount(){c&&(vn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=ar;ar=l;try{return u()}finally{ar=d}}};return l}}let ar=null;function Rg(t,e){if(nt){let n=nt.provides;const s=nt.parent&&nt.parent.provides;s===n&&(n=nt.provides=Object.create(s)),n[t]=e}}function $i(t,e,n=!1){const s=nt||Yt;if(s||ar){const r=ar?ar._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ae(e)?e.call(s&&s.proxy):e}}const kd={},Dd=()=>Object.create(kd),Ud=t=>Object.getPrototypeOf(t)===kd;function $g(t,e,n,s=!1){const r={},i=Dd();t.propsDefaults=Object.create(null),Bd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ng(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Fg(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=me(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(zo(t.emitsOptions,h))continue;const p=e[h];if(c)if(ge(i,h))p!==i[h]&&(i[h]=p,l=!0);else{const y=zt(h);r[y]=Ra(c,a,y,p,t,!1)}else p!==i[h]&&(i[h]=p,l=!0)}}}else{Bd(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!ge(e,d)&&((u=$s(d))===d||!ge(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Ra(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!ge(e,d))&&(delete i[d],l=!0)}l&&Bn(t.attrs,"set","")}function Bd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Br(c))continue;const l=e[c];let u;r&&ge(r,u=zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:zo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=me(n),l=a||Ee;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ra(r,c,d,l[d],t,!ge(l,d))}}return o}function Ra(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ae(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=gi(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===$s(n))&&(s=!0))}return s}const Vg=new WeakMap;function Ld(t,e,n=!1){const s=n?Vg:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ae(t)){const u=d=>{c=!0;const[h,p]=Ld(d,e,!0);ut(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ke(t)&&s.set(t,sr),sr;if(oe(i))for(let u=0;u<i.length;u++){const d=zt(i[u]);Du(d)&&(o[d]=Ee)}else if(i)for(const u in i){const d=zt(u);if(Du(d)){const h=i[u],p=o[d]=oe(h)||ae(h)?{type:h}:ut({},h),y=p.type;let m=!1,w=!0;if(oe(y))for(let x=0;x<y.length;++x){const U=y[x],A=ae(U)&&U.name;if(A==="Boolean"){m=!0;break}else A==="String"&&(w=!1)}else m=ae(y)&&y.name==="Boolean";p[0]=m,p[1]=w,(m||ge(p,"default"))&&a.push(d)}}const l=[o,a];return ke(t)&&s.set(t,l),l}function Du(t){return t[0]!=="$"&&!Br(t)}const zd=t=>t[0]==="_"||t==="$stable",kc=t=>oe(t)?t.map(gn):[gn(t)],Wg=(t,e,n)=>{if(e._n)return e;const s=pg((...r)=>kc(e(...r)),n);return s._c=!1,s},Pd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zd(r))continue;const i=t[r];if(ae(i))e[r]=Wg(r,i,s);else if(i!=null){const o=kc(i);e[r]=()=>o}}},Rd=(t,e)=>{const n=kc(e);t.slots.default=()=>n},$d=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},qg=(t,e,n)=>{const s=t.slots=Dd();if(t.vnode.shapeFlag&32){const r=e._;r?($d(s,e,n),n&&ed(s,"_",r,!0)):Pd(e,s)}else e&&Rd(t,e)},Kg=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:$d(r,e,n):(i=!e.$stable,Pd(e,r)),o=e}else e&&(Rd(t,e),o={default:1});if(i)for(const a in r)!zd(a)&&o[a]==null&&delete r[a]},xt=ob;function Gg(t){return Hg(t)}function Hg(t,e){const n=Do();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=mn,insertStaticContent:y}=t,m=(g,b,M,j=null,E=null,T=null,F=void 0,L=null,B=!!b.dynamicChildren)=>{if(g===b)return;g&&!Ir(g,b)&&(j=en(g),he(g,E,T,!0),g=null),b.patchFlag===-2&&(B=!1,b.dynamicChildren=null);const{type:C,ref:ne,shapeFlag:K}=b;switch(C){case Po:w(g,b,M,j);break;case Us:x(g,b,M,j);break;case Fi:g==null&&U(b,M,j,F);break;case gt:_(g,b,M,j,E,T,F,L,B);break;default:K&1?S(g,b,M,j,E,T,F,L,B):K&6?k(g,b,M,j,E,T,F,L,B):(K&64||K&128)&&C.process(g,b,M,j,E,T,F,L,B,Mn)}ne!=null&&E&&co(ne,g&&g.ref,T,b||g,!b)},w=(g,b,M,j)=>{if(g==null)s(b.el=a(b.children),M,j);else{const E=b.el=g.el;b.children!==g.children&&l(E,b.children)}},x=(g,b,M,j)=>{g==null?s(b.el=c(b.children||""),M,j):b.el=g.el},U=(g,b,M,j)=>{[g.el,g.anchor]=y(g.children,b,M,j,g.el,g.anchor)},A=({el:g,anchor:b},M,j)=>{let E;for(;g&&g!==b;)E=h(g),s(g,M,j),g=E;s(b,M,j)},O=({el:g,anchor:b})=>{let M;for(;g&&g!==b;)M=h(g),r(g),g=M;r(b)},S=(g,b,M,j,E,T,F,L,B)=>{b.type==="svg"?F="svg":b.type==="math"&&(F="mathml"),g==null?H(b,M,j,E,T,F,L,B):v(g,b,E,T,F,L,B)},H=(g,b,M,j,E,T,F,L)=>{let B,C;const{props:ne,shapeFlag:K,transition:ee,dirs:re}=g;if(B=g.el=o(g.type,T,ne&&ne.is,ne),K&8?u(B,g.children):K&16&&G(g.children,B,null,j,E,ia(g,T),F,L),re&&vs(g,null,j,"created"),Q(B,g,g.scopeId,F,j),ne){for(const xe in ne)xe!=="value"&&!Br(xe)&&i(B,xe,null,ne[xe],T,j);"value"in ne&&i(B,"value",null,ne.value,T),(C=ne.onVnodeBeforeMount)&&an(C,j,g)}re&&vs(g,null,j,"beforeMount");const fe=Yg(E,ee);fe&&ee.beforeEnter(B),s(B,b,M),((C=ne&&ne.onVnodeMounted)||fe||re)&&xt(()=>{C&&an(C,j,g),fe&&ee.enter(B),re&&vs(g,null,j,"mounted")},E)},Q=(g,b,M,j,E)=>{if(M&&p(g,M),j)for(let T=0;T<j.length;T++)p(g,j[T]);if(E){let T=E.subTree;if(b===T||Gd(T.type)&&(T.ssContent===b||T.ssFallback===b)){const F=E.vnode;Q(g,F,F.scopeId,F.slotScopeIds,E.parent)}}},G=(g,b,M,j,E,T,F,L,B=0)=>{for(let C=B;C<g.length;C++){const ne=g[C]=L?es(g[C]):gn(g[C]);m(null,ne,b,M,j,E,T,F,L)}},v=(g,b,M,j,E,T,F)=>{const L=b.el=g.el;let{patchFlag:B,dynamicChildren:C,dirs:ne}=b;B|=g.patchFlag&16;const K=g.props||Ee,ee=b.props||Ee;let re;if(M&&Ss(M,!1),(re=ee.onVnodeBeforeUpdate)&&an(re,M,b,g),ne&&vs(b,g,M,"beforeUpdate"),M&&Ss(M,!0),(K.innerHTML&&ee.innerHTML==null||K.textContent&&ee.textContent==null)&&u(L,""),C?N(g.dynamicChildren,C,L,M,j,ia(b,E),T):F||P(g,b,L,null,M,j,ia(b,E),T,!1),B>0){if(B&16)I(L,K,ee,M,E);else if(B&2&&K.class!==ee.class&&i(L,"class",null,ee.class,E),B&4&&i(L,"style",K.style,ee.style,E),B&8){const fe=b.dynamicProps;for(let xe=0;xe<fe.length;xe++){const ye=fe[xe],wt=K[ye],lt=ee[ye];(lt!==wt||ye==="value")&&i(L,ye,wt,lt,E,M)}}B&1&&g.children!==b.children&&u(L,b.children)}else!F&&C==null&&I(L,K,ee,M,E);((re=ee.onVnodeUpdated)||ne)&&xt(()=>{re&&an(re,M,b,g),ne&&vs(b,g,M,"updated")},j)},N=(g,b,M,j,E,T,F)=>{for(let L=0;L<b.length;L++){const B=g[L],C=b[L],ne=B.el&&(B.type===gt||!Ir(B,C)||B.shapeFlag&70)?d(B.el):M;m(B,C,ne,null,j,E,T,F,!0)}},I=(g,b,M,j,E)=>{if(b!==M){if(b!==Ee)for(const T in b)!Br(T)&&!(T in M)&&i(g,T,b[T],null,E,j);for(const T in M){if(Br(T))continue;const F=M[T],L=b[T];F!==L&&T!=="value"&&i(g,T,L,F,E,j)}"value"in M&&i(g,"value",b.value,M.value,E)}},_=(g,b,M,j,E,T,F,L,B)=>{const C=b.el=g?g.el:a(""),ne=b.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:re}=b;re&&(L=L?L.concat(re):re),g==null?(s(C,M,j),s(ne,M,j),G(b.children||[],M,ne,E,T,F,L,B)):K>0&&K&64&&ee&&g.dynamicChildren?(N(g.dynamicChildren,ee,M,E,T,F,L),(b.key!=null||E&&b===E.subTree)&&Fd(g,b,!0)):P(g,b,M,ne,E,T,F,L,B)},k=(g,b,M,j,E,T,F,L,B)=>{b.slotScopeIds=L,g==null?b.shapeFlag&512?E.ctx.activate(b,M,j,F,B):W(b,M,j,E,T,F,B):$(g,b,B)},W=(g,b,M,j,E,T,F)=>{const L=g.component=pb(g,j,E);if(Ad(g)&&(L.ctx.renderer=Mn),gb(L,!1,F),L.asyncDep){if(E&&E.registerDep(L,z,F),!g.el){const B=L.subTree=ct(Us);x(null,B,b,M)}}else z(L,g,b,M,E,T,F)},$=(g,b,M)=>{const j=b.component=g.component;if(rb(g,b,M))if(j.asyncDep&&!j.asyncResolved){q(j,b,M);return}else j.next=b,j.update();else b.el=g.el,j.vnode=b},z=(g,b,M,j,E,T,F)=>{const L=()=>{if(g.isMounted){let{next:K,bu:ee,u:re,parent:fe,vnode:xe}=g;{const rn=Vd(g);if(rn){K&&(K.el=xe.el,q(g,K,F)),rn.asyncDep.then(()=>{g.isUnmounted||L()});return}}let ye=K,wt;Ss(g,!1),K?(K.el=xe.el,q(g,K,F)):K=xe,ee&&Xo(ee),(wt=K.props&&K.props.onVnodeBeforeUpdate)&&an(wt,fe,K,xe),Ss(g,!0);const lt=Bu(g),sn=g.subTree;g.subTree=lt,m(sn,lt,d(sn.el),en(sn),g,E,T),K.el=lt.el,ye===null&&ib(g,lt.el),re&&xt(re,E),(wt=K.props&&K.props.onVnodeUpdated)&&xt(()=>an(wt,fe,K,xe),E)}else{let K;const{el:ee,props:re}=b,{bm:fe,m:xe,parent:ye,root:wt,type:lt}=g,sn=Pr(b);Ss(g,!1),fe&&Xo(fe),!sn&&(K=re&&re.onVnodeBeforeMount)&&an(K,ye,b),Ss(g,!0);{wt.ce&&wt.ce._injectChildStyle(lt);const rn=g.subTree=Bu(g);m(null,rn,M,j,g,E,T),b.el=rn.el}if(xe&&xt(xe,E),!sn&&(K=re&&re.onVnodeMounted)){const rn=b;xt(()=>an(K,ye,rn),E)}(b.shapeFlag&256||ye&&Pr(ye.vnode)&&ye.vnode.shapeFlag&256)&&g.a&&xt(g.a,E),g.isMounted=!0,b=M=j=null}};g.scope.on();const B=g.effect=new rd(L);g.scope.off();const C=g.update=B.run.bind(B),ne=g.job=B.runIfDirty.bind(B);ne.i=g,ne.id=g.uid,B.scheduler=()=>jc(ne),Ss(g,!0),C()},q=(g,b,M)=>{b.component=g;const j=g.vnode.props;g.vnode=b,g.next=null,Fg(g,b.props,j,M),Kg(g,b.children,M),ys(),Nu(g),ms()},P=(g,b,M,j,E,T,F,L,B=!1)=>{const C=g&&g.children,ne=g?g.shapeFlag:0,K=b.children,{patchFlag:ee,shapeFlag:re}=b;if(ee>0){if(ee&128){de(C,K,M,j,E,T,F,L,B);return}else if(ee&256){be(C,K,M,j,E,T,F,L,B);return}}re&8?(ne&16&&Pe(C,E,T),K!==C&&u(M,K)):ne&16?re&16?de(C,K,M,j,E,T,F,L,B):Pe(C,E,T,!0):(ne&8&&u(M,""),re&16&&G(K,M,j,E,T,F,L,B))},be=(g,b,M,j,E,T,F,L,B)=>{g=g||sr,b=b||sr;const C=g.length,ne=b.length,K=Math.min(C,ne);let ee;for(ee=0;ee<K;ee++){const re=b[ee]=B?es(b[ee]):gn(b[ee]);m(g[ee],re,M,null,E,T,F,L,B)}C>ne?Pe(g,E,T,!0,!1,K):G(b,M,j,E,T,F,L,B,K)},de=(g,b,M,j,E,T,F,L,B)=>{let C=0;const ne=b.length;let K=g.length-1,ee=ne-1;for(;C<=K&&C<=ee;){const re=g[C],fe=b[C]=B?es(b[C]):gn(b[C]);if(Ir(re,fe))m(re,fe,M,null,E,T,F,L,B);else break;C++}for(;C<=K&&C<=ee;){const re=g[K],fe=b[ee]=B?es(b[ee]):gn(b[ee]);if(Ir(re,fe))m(re,fe,M,null,E,T,F,L,B);else break;K--,ee--}if(C>K){if(C<=ee){const re=ee+1,fe=re<ne?b[re].el:j;for(;C<=ee;)m(null,b[C]=B?es(b[C]):gn(b[C]),M,fe,E,T,F,L,B),C++}}else if(C>ee)for(;C<=K;)he(g[C],E,T,!0),C++;else{const re=C,fe=C,xe=new Map;for(C=fe;C<=ee;C++){const vt=b[C]=B?es(b[C]):gn(b[C]);vt.key!=null&&xe.set(vt.key,C)}let ye,wt=0;const lt=ee-fe+1;let sn=!1,rn=0;const Mr=new Array(lt);for(C=0;C<lt;C++)Mr[C]=0;for(C=re;C<=K;C++){const vt=g[C];if(wt>=lt){he(vt,E,T,!0);continue}let on;if(vt.key!=null)on=xe.get(vt.key);else for(ye=fe;ye<=ee;ye++)if(Mr[ye-fe]===0&&Ir(vt,b[ye])){on=ye;break}on===void 0?he(vt,E,T,!0):(Mr[on-fe]=C+1,on>=rn?rn=on:sn=!0,m(vt,b[on],M,null,E,T,F,L,B),wt++)}const mu=sn?Qg(Mr):sr;for(ye=mu.length-1,C=lt-1;C>=0;C--){const vt=fe+C,on=b[vt],wu=vt+1<ne?b[vt+1].el:j;Mr[C]===0?m(null,on,M,wu,E,T,F,L,B):sn&&(ye<0||C!==mu[ye]?te(on,M,wu,2):ye--)}}},te=(g,b,M,j,E=null)=>{const{el:T,type:F,transition:L,children:B,shapeFlag:C}=g;if(C&6){te(g.component.subTree,b,M,j);return}if(C&128){g.suspense.move(b,M,j);return}if(C&64){F.move(g,b,M,Mn);return}if(F===gt){s(T,b,M);for(let K=0;K<B.length;K++)te(B[K],b,M,j);s(g.anchor,b,M);return}if(F===Fi){A(g,b,M);return}if(j!==2&&C&1&&L)if(j===0)L.beforeEnter(T),s(T,b,M),xt(()=>L.enter(T),E);else{const{leave:K,delayLeave:ee,afterLeave:re}=L,fe=()=>s(T,b,M),xe=()=>{K(T,()=>{fe(),re&&re()})};ee?ee(T,fe,xe):xe()}else s(T,b,M)},he=(g,b,M,j=!1,E=!1)=>{const{type:T,props:F,ref:L,children:B,dynamicChildren:C,shapeFlag:ne,patchFlag:K,dirs:ee,cacheIndex:re}=g;if(K===-2&&(E=!1),L!=null&&co(L,null,M,g,!0),re!=null&&(b.renderCache[re]=void 0),ne&256){b.ctx.deactivate(g);return}const fe=ne&1&&ee,xe=!Pr(g);let ye;if(xe&&(ye=F&&F.onVnodeBeforeUnmount)&&an(ye,b,g),ne&6)ve(g.component,M,j);else{if(ne&128){g.suspense.unmount(M,j);return}fe&&vs(g,null,b,"beforeUnmount"),ne&64?g.type.remove(g,b,M,Mn,j):C&&!C.hasOnce&&(T!==gt||K>0&&K&64)?Pe(C,b,M,!1,!0):(T===gt&&K&384||!E&&ne&16)&&Pe(B,b,M),j&&ze(g)}(xe&&(ye=F&&F.onVnodeUnmounted)||fe)&&xt(()=>{ye&&an(ye,b,g),fe&&vs(g,null,b,"unmounted")},M)},ze=g=>{const{type:b,el:M,anchor:j,transition:E}=g;if(b===gt){Ke(M,j);return}if(b===Fi){O(g);return}const T=()=>{r(M),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(g.shapeFlag&1&&E&&!E.persisted){const{leave:F,delayLeave:L}=E,B=()=>F(M,T);L?L(g.el,T,B):B()}else T()},Ke=(g,b)=>{let M;for(;g!==b;)M=h(g),r(g),g=M;r(b)},ve=(g,b,M)=>{const{bum:j,scope:E,job:T,subTree:F,um:L,m:B,a:C}=g;Uu(B),Uu(C),j&&Xo(j),E.stop(),T&&(T.flags|=8,he(F,g,b,M)),L&&xt(L,b),xt(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Pe=(g,b,M,j=!1,E=!1,T=0)=>{for(let F=T;F<g.length;F++)he(g[F],b,M,j,E)},en=g=>{if(g.shapeFlag&6)return en(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const b=h(g.anchor||g.el),M=b&&b[gg];return M?h(M):b};let tn=!1;const nn=(g,b,M)=>{g==null?b._vnode&&he(b._vnode,null,null,!0):m(b._vnode||null,g,b,null,null,null,M),b._vnode=g,tn||(tn=!0,Nu(),xd(),tn=!1)},Mn={p:m,um:he,m:te,r:ze,mt:W,mc:G,pc:P,pbc:N,n:en,o:t};return{render:nn,hydrate:void 0,createApp:Pg(nn)}}function ia({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ss({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fd(t,e,n=!1){const s=t.children,r=e.children;if(oe(s)&&oe(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=es(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Fd(o,a)),a.type===Po&&(a.el=o.el)}}function Qg(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vd(e)}function Uu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zg=Symbol.for("v-scx"),Jg=()=>$i(Zg);function oa(t,e,n){return Wd(t,e,n)}function Wd(t,e,n=Ee){const{immediate:s,deep:r,flush:i,once:o}=n,a=ut({},n),c=e&&s||!e&&i!=="post";let l;if(si){if(i==="sync"){const p=Jg();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=mn,p.resume=mn,p.pause=mn,p}}const u=nt;a.call=(p,y,m)=>vn(p,u,y,m);let d=!1;i==="post"?a.scheduler=p=>{xt(p,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(p,y)=>{y?p():jc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=ug(t,e,a);return si&&(l?l.push(h):c&&h()),h}function Xg(t,e,n){const s=this.proxy,r=Fe(t)?t.includes(".")?qd(s,t):()=>s[t]:t.bind(s,s);let i;ae(e)?i=e:(i=e.handler,n=e);const o=gi(this),a=Wd(r,i.bind(s),n);return o(),a}function qd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const eb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${$s(e)}Modifiers`];function tb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let r=n;const i=e.startsWith("update:"),o=i&&eb(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Fe(u)?u.trim():u)),o.number&&(r=n.map(Tp)));let a,c=s[a=Jo(e)]||s[a=Jo(zt(e))];!c&&i&&(c=s[a=Jo($s(e))]),c&&vn(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vn(l,t,6,r)}}function Kd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ae(t)){const c=l=>{const u=Kd(l,e,!0);u&&(a=!0,ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ke(t)&&s.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):ut(o,i),ke(t)&&s.set(t,o),o)}function zo(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,$s(e))||ge(t,e))}function Bu(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:h,setupState:p,ctx:y,inheritAttrs:m}=t,w=ao(t);let x,U;try{if(n.shapeFlag&4){const O=r||s,S=O;x=gn(l.call(S,O,u,d,p,h,y)),U=a}else{const O=e;x=gn(O.length>1?O(d,{attrs:a,slots:o,emit:c}):O(d,null)),U=e.props?a:nb(a)}}catch(O){$r.length=0,Bo(O,t,1),x=ct(Us)}let A=x;if(U&&m!==!1){const O=Object.keys(U),{shapeFlag:S}=A;O.length&&S&7&&(i&&O.some(vc)&&(U=sb(U,i)),A=lr(A,U,!1,!0))}return n.dirs&&(A=lr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Cc(A,n.transition),x=A,ao(w),x}const nb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oo(n))&&((e||(e={}))[n]=t[n]);return e},sb=(t,e)=>{const n={};for(const s in t)(!vc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rb(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Lu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!zo(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Lu(s,o,l):!0:!!o;return!1}function Lu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!zo(n,i))return!0}return!1}function ib({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gd=t=>t.__isSuspense;function ob(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):hg(t)}const gt=Symbol.for("v-fgt"),Po=Symbol.for("v-txt"),Us=Symbol.for("v-cmt"),Fi=Symbol.for("v-stc"),$r=[];let Et=null;function Ae(t=!1){$r.push(Et=t?null:[])}function ab(){$r.pop(),Et=$r[$r.length-1]||null}let ni=1;function zu(t,e=!1){ni+=t,t<0&&Et&&e&&(Et.hasOnce=!0)}function Hd(t){return t.dynamicChildren=ni>0?Et||sr:null,ab(),ni>0&&Et&&Et.push(t),t}function je(t,e,n,s,r,i){return Hd(Z(t,e,n,s,r,i,!0))}function Yd(t,e,n,s,r){return Hd(ct(t,e,n,s,r,!0))}function Qd(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const Zd=({key:t})=>t??null,Vi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||at(t)||ae(t)?{i:Yt,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,s=0,r=null,i=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zd(e),ref:e&&Vi(e),scopeId:_d,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return a?(Dc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),ni>0&&!o&&Et&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Et.push(c),c}const ct=cb;function cb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Og)&&(t=Us),Qd(t)){const a=lr(t,e,!0);return n&&Dc(a,n),ni>0&&!i&&Et&&(a.shapeFlag&6?Et[Et.indexOf(t)]=a:Et.push(a)),a.patchFlag=-2,a}if(vb(t)&&(t=t.__vccOpts),e){e=ub(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=Zr(a)),ke(c)&&(Oc(c)&&!oe(c)&&(c=ut({},c)),e.style=xc(c))}const o=Fe(t)?1:Gd(t)?128:bg(t)?64:ke(t)?4:ae(t)?2:0;return Z(t,e,n,s,r,o,i,!0)}function ub(t){return t?Oc(t)||Ud(t)?ut({},t):t:null}function lr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?db(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Zd(l),ref:e&&e.ref?n&&i?oe(i)?i.concat(Vi(e)):[i,Vi(e)]:Vi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lr(t.ssContent),ssFallback:t.ssFallback&&lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Cc(u,c.clone(u)),u}function Qs(t=" ",e=0){return ct(Po,null,t,e)}function lb(t,e){const n=ct(Fi,null,t);return n.staticCount=e,n}function ht(t="",e=!1){return e?(Ae(),Yd(Us,null,t)):ct(Us,null,t)}function gn(t){return t==null||typeof t=="boolean"?ct(Us):oe(t)?ct(gt,null,t.slice()):Qd(t)?es(t):ct(Po,null,String(t))}function es(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:lr(t)}function Dc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Dc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ud(e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Yt},n=32):(e=String(e),s&64?(n=16,e=[Qs(e)]):n=8);t.children=e,t.shapeFlag|=n}function db(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Zr([e.class,s.class]));else if(r==="style")e.style=xc([e.style,s.style]);else if(Oo(r)){const i=e[r],o=s[r];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function an(t,e,n,s=null){vn(t,e,7,[n,s])}const fb=Cd();let hb=0;function pb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||fb,i={uid:hb++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ld(s,r),emitsOptions:Kd(s,r),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tb.bind(null,i),t.ce&&t.ce(i),i}let nt=null,lo,$a;{const t=Do(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};lo=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),$a=e("__VUE_SSR_SETTERS__",n=>si=n)}const gi=t=>{const e=nt;return lo(t),t.scope.on(),()=>{t.scope.off(),lo(e)}},Pu=()=>{nt&&nt.scope.off(),lo(null)};function Jd(t){return t.vnode.shapeFlag&4}let si=!1;function gb(t,e=!1,n=!1){e&&$a(e);const{props:s,children:r}=t.vnode,i=Jd(t);$g(t,s,i,e),qg(t,r,n);const o=i?bb(t,e):void 0;return e&&$a(!1),o}function bb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cg);const{setup:s}=n;if(s){ys();const r=t.setupContext=s.length>1?mb(t):null,i=gi(t),o=pi(s,t,0,[t.props,r]),a=Zl(o);if(ms(),i(),(a||t.sp)&&!Pr(t)&&Ed(t),a){if(o.then(Pu,Pu),e)return o.then(c=>{Ru(t,c)}).catch(c=>{Bo(c,t,0)});t.asyncDep=o}else Ru(t,o)}else Xd(t)}function Ru(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=vd(e)),Xd(t)}function Xd(t,e,n){const s=t.type;t.render||(t.render=s.render||mn);{const r=gi(t);ys();try{kg(t)}finally{ms(),r()}}}const yb={get(t,e){return tt(t,"get",""),t[e]}};function mb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yb),slots:t.slots,emit:t.emit,expose:e}}function Uc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vd(sg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rr)return Rr[n](t)},has(e,n){return n in e||n in Rr}})):t.proxy}function wb(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function vb(t){return ae(t)&&"__vccOpts"in t}const Sb=(t,e)=>ag(t,e,si),Mb="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fa;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{Fa=$u.createPolicy("vue",{createHTML:t=>t})}catch{}const ef=Fa?t=>Fa.createHTML(t):t=>t,xb="http://www.w3.org/2000/svg",Ib="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Fu=jn&&jn.createElement("template"),_b={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?jn.createElementNS(xb,t):e==="mathml"?jn.createElementNS(Ib,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fu.innerHTML=ef(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Fu.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Eb=Symbol("_vtc");function Ab(t,e,n){const s=t[Eb];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vu=Symbol("_vod"),Nb=Symbol("_vsh"),Tb=Symbol(""),Ob=/(^|;)\s*display\s*:/;function jb(t,e,n){const s=t.style,r=Fe(n);let i=!1;if(n&&!r){if(e)if(Fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Wi(s,a,"")}else for(const o in e)n[o]==null&&Wi(s,o,"");for(const o in n)o==="display"&&(i=!0),Wi(s,o,n[o])}else if(r){if(e!==n){const o=s[Tb];o&&(n+=";"+o),s.cssText=n,i=Ob.test(n)}}else e&&t.removeAttribute("style");Vu in t&&(t[Vu]=i?s.display:"",t[Nb]&&(s.display="none"))}const Wu=/\s*!important$/;function Wi(t,e,n){if(oe(n))n.forEach(s=>Wi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Cb(t,e);Wu.test(n)?t.setProperty($s(s),n.replace(Wu,""),"important"):t[s]=n}}const qu=["Webkit","Moz","ms"],aa={};function Cb(t,e){const n=aa[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return aa[e]=s;s=ko(s);for(let r=0;r<qu.length;r++){const i=qu[r]+s;if(i in t)return aa[e]=i}return e}const Ku="http://www.w3.org/1999/xlink";function Gu(t,e,n,s,r,i=Up(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ku,e.slice(6,e.length)):t.setAttributeNS(Ku,e,n):n==null||i&&!td(n)?t.removeAttribute(e):t.setAttribute(e,i?"":bs(n)?String(n):n)}function Hu(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ef(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=td(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function kb(t,e,n,s){t.addEventListener(e,n,s)}function Db(t,e,n,s){t.removeEventListener(e,n,s)}const Yu=Symbol("_vei");function Ub(t,e,n,s,r=null){const i=t[Yu]||(t[Yu]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Bb(e);if(s){const l=i[e]=Pb(s,r);kb(t,a,l,c)}else o&&(Db(t,a,o,c),i[e]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function Bb(t){let e;if(Qu.test(t)){e={};let s;for(;s=t.match(Qu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$s(t.slice(2)),e]}let ca=0;const Lb=Promise.resolve(),zb=()=>ca||(Lb.then(()=>ca=0),ca=Date.now());function Pb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vn(Rb(s,n.value),e,5,[s])};return n.value=t,n.attached=zb(),n}function Rb(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Zu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$b=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Ab(t,s,o):e==="style"?jb(t,n,s):Oo(e)?vc(e)||Ub(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fb(t,e,s,o))?(Hu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gu(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(s))?Hu(t,zt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Gu(t,e,s,o))};function Fb(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zu(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Zu(e)&&Fe(n)?!1:e in t}const Vb=ut({patchProp:$b},_b);let Ju;function Wb(){return Ju||(Ju=Gg(Vb))}const qb=(...t)=>{const e=Wb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Gb(s);if(!r)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Kb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Kb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gb(t){return Fe(t)?document.querySelector(t):t}var hi;class Hb extends Event{constructor(n,s){super(n,s);xu(this,hi);Iu(this,hi,(s==null?void 0:s.detail)??null)}get detail(){return Mu(this,hi)}}hi=new WeakMap;class Sn extends EventTarget{constructor(e={}){super(),this._debug=!!e.debug}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}emit(e,n,s=!1){try{n&&n.isSuiEvent&&!s?this.dispatchEvent(n):this.dispatchEvent(new Hb(e,{detail:n}))}catch(r){console.error(r)}}}var Yb={};class Qb extends Error{}const Ei=async t=>{try{return await import(t)}catch{throw new Qb(`Unable to import module ${t}`)}},_r=async t=>{try{if(t=="execSync"||t=="spawn"){const{default:e}=await Ei("child_process");return e[t]}if(t=="fs"){const{default:e}=await Ei("fs");return e}if(t=="path"){const{default:e}=await Ei("path");return e}if(t=="net"){const{default:e}=await Ei("net");return e}}catch{return null}};class ua{static async isPortThere(e){const n=await _r("net");if(!n)return!1;const s=n.Socket,r=new s;let i=null;const o=new Promise(c=>{i=c});setTimeout(()=>{r.destroy(),i(!1)},3e3),r.on("connect",()=>{i(!0)}),r.on("error",()=>{i(!1)}),r.on("timeout",()=>{i(!1)}),r.connect(e,"0.0.0.0");const a=await o;return r.destroy(),a}static async spawn(e,n=[],s={}){const r=await _r("spawn");if(!r)throw new Error("can not spawn a proccess in this env");return await new Promise((i,o)=>{let a=!0,c=null;const l=r(e,n,{env:{...Yb,...s}});l.on("error",function(u){a=!1,c=u}),setTimeout(()=>{a?i(l):o(c)},100)})}static async exec(e){const n=await _r("execSync");if(!n)throw new Error("can not exec a proccess in this env");return n(e,{encoding:"utf-8"})}static async getModulesNamesFromPackagePath(e){const n=await _r("path"),s=await _r("fs");if(!n||!s)throw new Error("can not access path in this env");try{const i=(await s.promises.readdir(e.join(this._path,"build")))[0];return(await s.promises.readdir(n.join(this._path,"build",i,"bytecode_modules"),{withFileTypes:!0})).filter(c=>c.isFile()).map(c=>c.name.split(".mv").join(""))}catch{throw new Error("can not get modules names from local package path")}}}class Bc extends Event{constructor(e={}){const n=e.data?(""+e.data.type).split("<")[0].split("::").pop():null;if(super(n,{}),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._data=e.data||{},this.detail=this}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}get isSuiEvent(){return!0}get typeName(){return this._data?(""+this._data.type).split("<")[0].split("::").pop():null}get type(){return this._data?""+this._data.type:null}get data(){return this._data}get parsedJson(){return this._data.parsedJson?this._data.parsedJson:null}get timestampMs(){return this._data.timestampMs?parseInt(this._data.timestampMs,10):null}}class tf extends Sn{constructor(e={}){if(super(e),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried");this._data=e.data||{},this._results=null,this._events=null}get executedEpoch(){return this._data&&this._data.effects&&this._data.effects.executedEpoch?BigInt(this._data.effects.executedEpoch):null}get digest(){return this._data?this._data.digest:null}get gasUsed(){try{if(this._data&&this._data.effects&&this._data.effects.gasUsed)return BigInt(this._data.effects.gasUsed.computationCost)+BigInt(this._data.effects.gasUsed.storageCost)-BigInt(this._data.effects.gasUsed.storageRebate)}catch{return null}return null}get deleted(){return this.results.deleted}get mutated(){return this.results.mutated}get created(){return this.results.created}get data(){return this._data}get status(){let e=null;return this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&(e=this.data.effects.status.status),e}isSuccessful(){return!!(this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&this.data.effects.status.status=="success")}get events(){if(this._events)return this._events;const e=[];if(this.data.events&&this.data.events.length)for(const n of this.data.events){const s=new this._suiMaster.SuiEvent({suiMaster:this._suiMaster,debug:this._debug,data:n});e.push(s)}return this._events=e,this._events}get results(){if(this._results)return this._results;const e={},n=[],s=[],r=[];if(this.data.objectChanges){for(const i of this.data.objectChanges)if(i.objectId&&!e[i.objectId]){const o=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i});o.address&&(e[o.address]=o)}}if(this.data.effects){const i=["created","mutated"];for(const o of i)if(this.data.effects[o]&&this.data.effects[o].length)for(const a of this.data.effects[o])a.reference&&a.reference.objectId&&e[a.reference.objectId]&&(o==="created"?n.push(e[a.reference.objectId]):o==="mutated"&&s.push(e[a.reference.objectId]));if(this.data.effects.deleted){for(const o of this.data.effects.deleted)if(o.objectId){if(!e[o.objectId]){const a=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:o});e[o.objectId]=a}e[o.objectId].markAsDeleted(),r.push(e[o.objectId])}}}return this._results={created:n,mutated:s,deleted:r,objects:Object.values(e),status:this.status},this._results}get timestampMs(){return this.data.timestampMs?parseInt(""+this.data.timestampMs,10):null}}class ls extends Sn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPaginatedResponse");this._method=e.method,this._params=e.params,this._order=e.order||"descending",this._hasNextPage=!0,this._nextCursor=null,this._data=[]}async forEach(e,n=null){let s=0;do for(const r of this._data)(!n||s<n)&&await e(r),s++;while((!n||s<n)&&await this.nextPage())}get hasNextPage(){return this._hasNextPage}get data(){return this._data}async nextPage(){return this._hasNextPage?await this.fetch({cursor:this._nextCursor}):!1}async fetch(e={}){const n=Object.assign({},this._params);e.cursor&&(n.cursor=e.cursor),n.order=this._order;const s=await this._suiMaster.client[this._method](n);let r=0;return s.data&&s.data.length&&(r=s.data.length),s.hasNextPage?(this._hasNextPage=!0,this._nextCursor=s.nextCursor):(this._hasNextPage=!1,this._nextCursor=null),this.log("got",r,"items. Has next page: ",s.hasNextPage),this._method==="queryEvents"?this._data=s.data.map(i=>new Bc({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="queryTransactionBlocks"?this._data=s.data.map(i=>new tf({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="getOwnedObjects"?this._data=s.data.map(i=>new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i})):this._data=s.data,this._data}}/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ri(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function nf(t,e){return Array.isArray(e)?e.length===0?!0:t?e.every(n=>typeof n=="string"):e.every(n=>Number.isSafeInteger(n)):!1}function sf(t){if(typeof t!="function")throw new Error("function expected");return!0}function ii(t,e){if(typeof e!="string")throw new Error(`${t}: string expected`);return!0}function bi(t){if(!Number.isSafeInteger(t))throw new Error(`invalid integer: ${t}`)}function fo(t){if(!Array.isArray(t))throw new Error("array expected")}function rf(t,e){if(!nf(!0,e))throw new Error(`${t}: array of strings expected`)}function Lc(t,e){if(!nf(!1,e))throw new Error(`${t}: array of numbers expected`)}function zc(...t){const e=i=>i,n=(i,o)=>a=>i(o(a)),s=t.map(i=>i.encode).reduceRight(n,e),r=t.map(i=>i.decode).reduce(n,e);return{encode:s,decode:r}}function of(t){const e=typeof t=="string"?t.split(""):t,n=e.length;rf("alphabet",e);const s=new Map(e.map((r,i)=>[r,i]));return{encode:r=>(fo(r),r.map(i=>{if(!Number.isSafeInteger(i)||i<0||i>=n)throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${t}`);return e[i]})),decode:r=>(fo(r),r.map(i=>{ii("alphabet.decode",i);const o=s.get(i);if(o===void 0)throw new Error(`Unknown letter: "${i}". Allowed: ${t}`);return o}))}}function af(t=""){return ii("join",t),{encode:e=>(rf("join.decode",e),e.join(t)),decode:e=>(ii("join.decode",e),e.split(t))}}function Xu(t,e,n){if(e<2)throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);if(fo(t),!t.length)return[];let s=0;const r=[],i=Array.from(t,a=>{if(bi(a),a<0||a>=e)throw new Error(`invalid integer: ${a}`);return a}),o=i.length;for(;;){let a=0,c=!0;for(let l=s;l<o;l++){const u=i[l],d=e*a,h=d+u;if(!Number.isSafeInteger(h)||d/e!==a||h-u!==d)throw new Error("convertRadix: carry overflow");const p=h/n;a=h%n;const y=Math.floor(p);if(i[l]=y,!Number.isSafeInteger(y)||y*n+a!==h)throw new Error("convertRadix: carry overflow");if(c)y?c=!1:s=l;else continue}if(r.push(a),c)break}for(let a=0;a<t.length-1&&t[a]===0;a++)r.push(0);return r.reverse()}const cf=(t,e)=>e===0?t:cf(e,t%e),ho=(t,e)=>t+(e-cf(t,e)),qi=(()=>{let t=[];for(let e=0;e<40;e++)t.push(2**e);return t})();function Va(t,e,n,s){if(fo(t),e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(ho(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${ho(e,n)}`);let r=0,i=0;const o=qi[e],a=qi[n]-1,c=[];for(const l of t){if(bi(l),l>=o)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(r=r<<e|l,i+e>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);for(i+=e;i>=n;i-=n)c.push((r>>i-n&a)>>>0);const u=qi[i];if(u===void 0)throw new Error("invalid carry");r&=u-1}if(r=r<<n-i&a,!s&&i>=e)throw new Error("Excess padding");if(!s&&r>0)throw new Error(`Non-zero padding: ${r}`);return s&&i>0&&c.push(r>>>0),c}function Zb(t){bi(t);const e=2**8;return{encode:n=>{if(!ri(n))throw new Error("radix.encode input should be Uint8Array");return Xu(Array.from(n),e,t)},decode:n=>(Lc("radix.decode",n),Uint8Array.from(Xu(n,t,e)))}}function Jb(t,e=!1){if(bi(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(ho(8,t)>32||ho(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!ri(n))throw new Error("radix2.encode input should be Uint8Array");return Va(Array.from(n),8,t,!e)},decode:n=>(Lc("radix2.decode",n),Uint8Array.from(Va(n,t,8,e)))}}function el(t){return sf(t),function(...e){try{return t.apply(null,e)}catch{}}}function Xb(t,e){return bi(t),sf(e),{encode(n){if(!ri(n))throw new Error("checksum.encode: input should be Uint8Array");const s=e(n).slice(0,t),r=new Uint8Array(n.length+t);return r.set(n),r.set(s,n.length),r},decode(n){if(!ri(n))throw new Error("checksum.decode: input should be Uint8Array");const s=n.slice(0,-t),r=n.slice(-t),i=e(s).slice(0,t);for(let o=0;o<t;o++)if(i[o]!==r[o])throw new Error("Invalid checksum");return s}}}const e0=t=>zc(Zb(58),of(t),af("")),Pc=e0("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),t0=t=>zc(Xb(4,e=>t(t(e))),Pc),Wa=zc(of("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),af("")),tl=[996825010,642813549,513874426,1027748829,705979059];function Er(t){const e=t>>25;let n=(t&33554431)<<5;for(let s=0;s<tl.length;s++)(e>>s&1)===1&&(n^=tl[s]);return n}function nl(t,e,n=1){const s=t.length;let r=1;for(let i=0;i<s;i++){const o=t.charCodeAt(i);if(o<33||o>126)throw new Error(`Invalid prefix (${t})`);r=Er(r)^o>>5}r=Er(r);for(let i=0;i<s;i++)r=Er(r)^t.charCodeAt(i)&31;for(let i of e)r=Er(r)^i;for(let i=0;i<6;i++)r=Er(r);return r^=n,Wa.encode(Va([r%qi[30]],30,5,!1))}function n0(t){const e=t==="bech32"?1:734539939,n=Jb(5),s=n.decode,r=n.encode,i=el(s);function o(d,h,p=90){ii("bech32.encode prefix",d),ri(h)&&(h=Array.from(h)),Lc("bech32.encode",h);const y=d.length;if(y===0)throw new TypeError(`Invalid prefix length ${y}`);const m=y+7+h.length;if(p!==!1&&m>p)throw new TypeError(`Length ${m} exceeds limit ${p}`);const w=d.toLowerCase(),x=nl(w,h,e);return`${w}1${Wa.encode(h)}${x}`}function a(d,h=90){ii("bech32.decode input",d);const p=d.length;if(p<8||h!==!1&&p>h)throw new TypeError(`invalid string length: ${p} (${d}). Expected (8..${h})`);const y=d.toLowerCase();if(d!==y&&d!==d.toUpperCase())throw new Error("String must be lowercase or uppercase");const m=y.lastIndexOf("1");if(m===0||m===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=y.slice(0,m),x=y.slice(m+1);if(x.length<6)throw new Error("Data must be at least 6 characters long");const U=Wa.decode(x).slice(0,-6),A=nl(w,U,e);if(!x.endsWith(A))throw new Error(`Invalid checksum in ${d}: expected "${A}"`);return{prefix:w,words:U}}const c=el(a);function l(d){const{prefix:h,words:p}=a(d,!1);return{prefix:h,words:p,bytes:s(p)}}function u(d,h){return o(d,r(h))}return{encode:o,decode:a,encodeFromBytes:u,decodeToBytes:l,decodeUnsafe:c,fromWords:s,fromWordsUnsafe:i,toWords:r}}const po=n0("bech32"),Ro=t=>Pc.encode(t),oi=t=>Pc.decode(t);function we(t){return Uint8Array.from(atob(t),e=>e.charCodeAt(0))}const la=8192;function Me(t){if(t.length<la)return btoa(String.fromCharCode(...t));let e="";for(var n=0;n<t.length;n+=la){const s=t.slice(n,n+la);e+=String.fromCharCode(...s)}return btoa(e)}function Rc(t){var r;const e=t.startsWith("0x")?t.slice(2):t,n=e.length%2===0?e:`0${e}`,s=((r=n.match(/[0-9a-fA-F]{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))??[];if(s.length!==n.length/2)throw new Error(`Invalid hex string ${t}`);return Uint8Array.from(s)}function fs(t){return t.reduce((e,n)=>e+n.toString(16).padStart(2,"0"),"")}function s0(t,e){return Array.from({length:Math.ceil(t.length/e)},(n,s)=>t.slice(s*e,(s+1)*e))}function go(t){const e=[];let n=0;if(t===0)return[0];for(;t>0;)e[n]=t&127,(t>>=7)&&(e[n]|=128),n+=1;return e}function r0(t){let e=0,n=0,s=0;for(;;){const r=t[s];if(s+=1,e|=(r&127)<<n,!(r&128))break;n+=7}return{value:e,length:s}}class i0{constructor(e){this.bytePosition=0,this.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength)}shift(e){return this.bytePosition+=e,this}read8(){const e=this.dataView.getUint8(this.bytePosition);return this.shift(1),e}read16(){const e=this.dataView.getUint16(this.bytePosition,!0);return this.shift(2),e}read32(){const e=this.dataView.getUint32(this.bytePosition,!0);return this.shift(4),e}read64(){const e=this.read32(),s=this.read32().toString(16)+e.toString(16).padStart(8,"0");return BigInt("0x"+s).toString(10)}read128(){const e=BigInt(this.read64()),s=BigInt(this.read64()).toString(16)+e.toString(16).padStart(16,"0");return BigInt("0x"+s).toString(10)}read256(){const e=BigInt(this.read128()),s=BigInt(this.read128()).toString(16)+e.toString(16).padStart(32,"0");return BigInt("0x"+s).toString(10)}readBytes(e){const n=this.bytePosition+this.dataView.byteOffset,s=new Uint8Array(this.dataView.buffer,n,e);return this.shift(e),s}readULEB(){const e=this.bytePosition+this.dataView.byteOffset,n=new Uint8Array(this.dataView.buffer,e),{value:s,length:r}=r0(n);return this.shift(r),s}readVec(e){const n=this.readULEB(),s=[];for(let r=0;r<n;r++)s.push(e(this,r,n));return s}}function o0(t,e){switch(e){case"base58":return Ro(t);case"base64":return Me(t);case"hex":return fs(t);default:throw new Error("Unsupported encoding, supported values are: base64, hex")}}function uf(t,e=["<",">"]){const[n,s]=e,r=[];let i="",o=0;for(let a=0;a<t.length;a++){const c=t[a];if(c===n&&o++,c===s&&o--,o===0&&c===","){r.push(i.trim()),i="";continue}i+=c}return r.push(i.trim()),r}class a0{constructor({initialSize:e=1024,maxSize:n=1/0,allocateSize:s=1024}={}){this.bytePosition=0,this.size=e,this.maxSize=n,this.allocateSize=s,this.dataView=new DataView(new ArrayBuffer(e))}ensureSizeOrGrow(e){const n=this.bytePosition+e;if(n>this.size){const s=Math.min(this.maxSize,this.size+this.allocateSize);if(n>s)throw new Error(`Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${n}`);this.size=s;const r=new ArrayBuffer(this.size);new Uint8Array(r).set(new Uint8Array(this.dataView.buffer)),this.dataView=new DataView(r)}}shift(e){return this.bytePosition+=e,this}write8(e){return this.ensureSizeOrGrow(1),this.dataView.setUint8(this.bytePosition,Number(e)),this.shift(1)}write16(e){return this.ensureSizeOrGrow(2),this.dataView.setUint16(this.bytePosition,Number(e),!0),this.shift(2)}write32(e){return this.ensureSizeOrGrow(4),this.dataView.setUint32(this.bytePosition,Number(e),!0),this.shift(4)}write64(e){return da(BigInt(e),8).forEach(n=>this.write8(n)),this}write128(e){return da(BigInt(e),16).forEach(n=>this.write8(n)),this}write256(e){return da(BigInt(e),32).forEach(n=>this.write8(n)),this}writeULEB(e){return go(e).forEach(n=>this.write8(n)),this}writeVec(e,n){return this.writeULEB(e.length),Array.from(e).forEach((s,r)=>n(this,s,r,e.length)),this}*[Symbol.iterator](){for(let e=0;e<this.bytePosition;e++)yield this.dataView.getUint8(e);return this.toBytes()}toBytes(){return new Uint8Array(this.dataView.buffer.slice(0,this.bytePosition))}toString(e){return o0(this.toBytes(),e)}}function da(t,e){const n=new Uint8Array(e);let s=0;for(;t>0;)n[s]=Number(t%BigInt(256)),t=t/BigInt(256),s+=1;return n}var lf=t=>{throw TypeError(t)},df=(t,e,n)=>e.has(t)||lf("Cannot "+n),qt=(t,e,n)=>(df(t,e,"read from private field"),n?n.call(t):e.get(t)),bo=(t,e,n)=>e.has(t)?lf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),yo=(t,e,n,s)=>(df(t,e,"write to private field"),e.set(t,n),n),Zs,Or,Ki,Qn;const c0=class ff{constructor(e){bo(this,Zs),bo(this,Or),this.name=e.name,this.read=e.read,this.serializedSize=e.serializedSize??(()=>null),yo(this,Zs,e.write),yo(this,Or,e.serialize??((n,s)=>{const r=new a0({initialSize:this.serializedSize(n)??void 0,...s});return qt(this,Zs).call(this,n,r),r.toBytes()})),this.validate=e.validate??(()=>{})}write(e,n){this.validate(e),qt(this,Zs).call(this,e,n)}serialize(e,n){return this.validate(e),new u0(this,qt(this,Or).call(this,e,n))}parse(e){const n=new i0(e);return this.read(n)}fromHex(e){return this.parse(Rc(e))}fromBase58(e){return this.parse(oi(e))}fromBase64(e){return this.parse(we(e))}transform({name:e,input:n,output:s,validate:r}){return new ff({name:e??this.name,read:i=>s?s(this.read(i)):this.read(i),write:(i,o)=>qt(this,Zs).call(this,n?n(i):i,o),serializedSize:i=>this.serializedSize(n?n(i):i),serialize:(i,o)=>qt(this,Or).call(this,n?n(i):i,o),validate:i=>{r==null||r(i),this.validate(n?n(i):i)}})}};Zs=new WeakMap;Or=new WeakMap;let bn=c0;const hf=Symbol.for("@mysten/serialized-bcs");function $c(t){return!!t&&typeof t=="object"&&t[hf]===!0}class u0{constructor(e,n){bo(this,Ki),bo(this,Qn),yo(this,Ki,e),yo(this,Qn,n)}get[hf](){return!0}toBytes(){return qt(this,Qn)}toHex(){return fs(qt(this,Qn))}toBase64(){return Me(qt(this,Qn))}toBase58(){return Ro(qt(this,Qn))}parse(){return qt(this,Ki).parse(qt(this,Qn))}}Ki=new WeakMap;Qn=new WeakMap;function mo({size:t,...e}){return new bn({...e,serializedSize:()=>t})}function fa({readMethod:t,writeMethod:e,...n}){return mo({...n,read:s=>s[t](),write:(s,r)=>r[e](s),validate:s=>{var r;if(s<0||s>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${s}. Expected value in range 0-${n.maxValue}`);(r=n.validate)==null||r.call(n,s)}})}function ha({readMethod:t,writeMethod:e,...n}){return mo({...n,read:s=>s[t](),write:(s,r)=>r[e](BigInt(s)),validate:s=>{var i;const r=BigInt(s);if(r<0||r>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${r}. Expected value in range 0-${n.maxValue}`);(i=n.validate)==null||i.call(n,r)}})}function l0({serialize:t,...e}){const n=new bn({...e,serialize:t,write:(s,r)=>{for(const i of n.serialize(s).toBytes())r.write8(i)}});return n}function d0({toBytes:t,fromBytes:e,...n}){return new bn({...n,read:s=>{const r=s.readULEB(),i=s.readBytes(r);return e(i)},write:(s,r)=>{const i=t(s);r.writeULEB(i.length);for(let o=0;o<i.length;o++)r.write8(i[o])},serialize:s=>{const r=t(s),i=go(r.length),o=new Uint8Array(i.length+r.length);return o.set(i,0),o.set(r,i.length),o},validate:s=>{var r;if(typeof s!="string")throw new TypeError(`Invalid ${n.name} value: ${s}. Expected string`);(r=n.validate)==null||r.call(n,s)}})}function f0(t){let e=null;function n(){return e||(e=t()),e}return new bn({name:"lazy",read:s=>n().read(s),serializedSize:s=>n().serializedSize(s),write:(s,r)=>n().write(s,r),serialize:(s,r)=>n().serialize(s,r).toBytes()})}const f={u8(t){return fa({name:"u8",readMethod:"read8",writeMethod:"write8",size:1,maxValue:2**8-1,...t})},u16(t){return fa({name:"u16",readMethod:"read16",writeMethod:"write16",size:2,maxValue:2**16-1,...t})},u32(t){return fa({name:"u32",readMethod:"read32",writeMethod:"write32",size:4,maxValue:2**32-1,...t})},u64(t){return ha({name:"u64",readMethod:"read64",writeMethod:"write64",size:8,maxValue:2n**64n-1n,...t})},u128(t){return ha({name:"u128",readMethod:"read128",writeMethod:"write128",size:16,maxValue:2n**128n-1n,...t})},u256(t){return ha({name:"u256",readMethod:"read256",writeMethod:"write256",size:32,maxValue:2n**256n-1n,...t})},bool(t){return mo({name:"bool",size:1,read:e=>e.read8()===1,write:(e,n)=>n.write8(e?1:0),...t,validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),typeof e!="boolean")throw new TypeError(`Expected boolean, found ${typeof e}`)}})},uleb128(t){return l0({name:"uleb128",read:e=>e.readULEB(),serialize:e=>Uint8Array.from(go(e)),...t})},bytes(t,e){return mo({name:`bytes[${t}]`,size:t,read:n=>n.readBytes(t),write:(n,s)=>{const r=new Uint8Array(n);for(let i=0;i<t;i++)s.write8(r[i]??0)},...e,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`);if(n.length!==t)throw new TypeError(`Expected array of length ${t}, found ${n.length}`)}})},byteVector(t){return new bn({name:"bytesVector",read:e=>{const n=e.readULEB();return e.readBytes(n)},write:(e,n)=>{const s=new Uint8Array(e);n.writeULEB(s.length);for(let r=0;r<s.length;r++)n.write8(s[r]??0)},...t,serializedSize:e=>{const n="length"in e?e.length:null;return n==null?null:go(n).length+n},validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),!e||typeof e!="object"||!("length"in e))throw new TypeError(`Expected array, found ${typeof e}`)}})},string(t){return d0({name:"string",toBytes:e=>new TextEncoder().encode(e),fromBytes:e=>new TextDecoder().decode(e),...t})},fixedArray(t,e,n){return new bn({name:`${e.name}[${t}]`,read:s=>{const r=new Array(t);for(let i=0;i<t;i++)r[i]=e.read(s);return r},write:(s,r)=>{for(const i of s)e.write(i,r)},...n,validate:s=>{var r;if((r=n==null?void 0:n.validate)==null||r.call(n,s),!s||typeof s!="object"||!("length"in s))throw new TypeError(`Expected array, found ${typeof s}`);if(s.length!==t)throw new TypeError(`Expected array of length ${t}, found ${s.length}`)}})},option(t){return f.enum(`Option<${t.name}>`,{None:null,Some:t}).transform({input:e=>e==null?{None:!0}:{Some:e},output:e=>e.$kind==="Some"?e.Some:null})},vector(t,e){return new bn({name:`vector<${t.name}>`,read:n=>{const s=n.readULEB(),r=new Array(s);for(let i=0;i<s;i++)r[i]=t.read(n);return r},write:(n,s)=>{s.writeULEB(n.length);for(const r of n)t.write(r,s)},...e,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`)}})},tuple(t,e){return new bn({name:`(${t.map(n=>n.name).join(", ")})`,serializedSize:n=>{let s=0;for(let r=0;r<t.length;r++){const i=t[r].serializedSize(n[r]);if(i==null)return null;s+=i}return s},read:n=>{const s=[];for(const r of t)s.push(r.read(n));return s},write:(n,s)=>{for(let r=0;r<t.length;r++)t[r].write(n[r],s)},...e,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!Array.isArray(n))throw new TypeError(`Expected array, found ${typeof n}`);if(n.length!==t.length)throw new TypeError(`Expected array of length ${t.length}, found ${n.length}`)}})},struct(t,e,n){const s=Object.entries(e);return new bn({name:t,serializedSize:r=>{let i=0;for(const[o,a]of s){const c=a.serializedSize(r[o]);if(c==null)return null;i+=c}return i},read:r=>{const i={};for(const[o,a]of s)i[o]=a.read(r);return i},write:(r,i)=>{for(const[o,a]of s)a.write(r[o],i)},...n,validate:r=>{var i;if((i=n==null?void 0:n.validate)==null||i.call(n,r),typeof r!="object"||r==null)throw new TypeError(`Expected object, found ${typeof r}`)}})},enum(t,e,n){const s=Object.entries(e);return new bn({name:t,read:r=>{const i=r.readULEB(),o=s[i];if(!o)throw new TypeError(`Unknown value ${i} for enum ${t}`);const[a,c]=o;return{[a]:(c==null?void 0:c.read(r))??!0,$kind:a}},write:(r,i)=>{const[o,a]=Object.entries(r).filter(([c])=>Object.hasOwn(e,c))[0];for(let c=0;c<s.length;c++){const[l,u]=s[c];if(l===o){i.writeULEB(c),u==null||u.write(a,i);return}}},...n,validate:r=>{var a;if((a=n==null?void 0:n.validate)==null||a.call(n,r),typeof r!="object"||r==null)throw new TypeError(`Expected object, found ${typeof r}`);const i=Object.keys(r).filter(c=>r[c]!==void 0&&Object.hasOwn(e,c));if(i.length!==1)throw new TypeError(`Expected object with one key, but found ${i.length} for type ${t}}`);const[o]=i;if(!Object.hasOwn(e,o))throw new TypeError(`Invalid enum variant ${o}`)}})},map(t,e){return f.vector(f.tuple([t,e])).transform({name:`Map<${t.name}, ${e.name}>`,input:n=>[...n.entries()],output:n=>{const s=new Map;for(const[r,i]of n)s.set(r,i);return s}})},lazy(t){return f0(t)}},pf=/^(?!.*(^(?!@)|[-.@])($|[-.@]))(?:[a-z0-9-]{0,63}(?:\.[a-z0-9-]{0,63})*)?@[a-z0-9-]{0,63}$/i,gf=/^(?!.*(^|[-.])($|[-.]))(?:[a-z0-9-]{0,63}\.)+sui$/i,h0=235;function p0(t){return t.length>h0?!1:t.includes("@")?pf.test(t):gf.test(t)}function g0(t,e="at"){const n=t.toLowerCase();let s;if(n.includes("@")){if(!pf.test(n))throw new Error(`Invalid SuiNS name ${t}`);const[r,i]=n.split("@");s=[...r?r.split("."):[],i]}else{if(!gf.test(n))throw new Error(`Invalid SuiNS name ${t}`);s=n.split(".").slice(0,-1)}return e==="dot"?`${s.join(".")}.sui`:`${s.slice(0,-1).join(".")}@${s[s.length-1]}`}const b0=/^([a-z0-9]+(?:-[a-z0-9]+)*)$/,y0=/^\d+$/,m0=64,w0="/",v0=t=>{const e=t.split(w0);if(e.length<2||e.length>3)return!1;const[n,s,r]=e;return r!==void 0&&!y0.test(r)||!p0(n)?!1:b0.test(s)&&s.length<m0},S0=32;function sl(t){try{return oi(t).length===S0}catch{return!1}}const mr=32;function Cn(t){return x0(t)&&I0(t)===mr}function Ai(t){return Cn(t)}function M0(t){return t.includes("::")?Fc(t):t}function Fc(t){const[e,n]=t.split("::"),s=v0(e),r=t.slice(e.length+n.length+4),i=r.includes("<")?r.slice(0,r.indexOf("<")):r,o=r.includes("<")?uf(r.slice(r.indexOf("<")+1,r.lastIndexOf(">"))).map(a=>M0(a.trim())):[];return{address:s?e:ce(e),module:n,name:i,typeParams:o}}function ai(t){const{address:e,module:n,name:s,typeParams:r}=typeof t=="string"?Fc(t):t,i=(r==null?void 0:r.length)>0?`<${r.map(o=>typeof o=="string"?o:ai(o)).join(",")}>`:"";return`${e}::${n}::${s}${i}`}function ce(t,e=!1){let n=t.toLowerCase();return!e&&n.startsWith("0x")&&(n=n.slice(2)),`0x${n.padStart(mr*2,"0")}`}function Ln(t,e=!1){return ce(t,e)}function x0(t){return/^(0x|0X)?[a-fA-F0-9]+$/.test(t)&&t.length%2===0}function I0(t){return/^(0x|0X)/.test(t)?(t.length-2)/2:t.length/2}const _0=/^vector<(.+)>$/,E0=/^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;class Gt{static parseFromStr(e,n=!1){if(e==="address")return{address:null};if(e==="bool")return{bool:null};if(e==="u8")return{u8:null};if(e==="u16")return{u16:null};if(e==="u32")return{u32:null};if(e==="u64")return{u64:null};if(e==="u128")return{u128:null};if(e==="u256")return{u256:null};if(e==="signer")return{signer:null};const s=e.match(_0);if(s)return{vector:Gt.parseFromStr(s[1],n)};const r=e.match(E0);if(r)return{struct:{address:n?ce(r[1]):r[1],module:r[2],name:r[3],typeParams:r[5]===void 0?[]:Gt.parseStructTypeArgs(r[5],n)}};throw new Error(`Encountered unexpected token when parsing type args for ${e}`)}static parseStructTypeArgs(e,n=!1){return uf(e).map(s=>Gt.parseFromStr(s,n))}static tagToString(e){if("bool"in e)return"bool";if("u8"in e)return"u8";if("u16"in e)return"u16";if("u32"in e)return"u32";if("u64"in e)return"u64";if("u128"in e)return"u128";if("u256"in e)return"u256";if("address"in e)return"address";if("signer"in e)return"signer";if("vector"in e)return`vector<${Gt.tagToString(e.vector)}>`;if("struct"in e){const n=e.struct,s=n.typeParams.map(Gt.tagToString).join(", ");return`${n.address}::${n.module}::${n.name}${s?`<${s}>`:""}`}throw new Error("Invalid TypeTag")}}function A0(t){return f.u64({name:"unsafe_u64",...t}).transform({input:e=>e,output:e=>Number(e)})}function N0(t){return f.enum("Option",{None:null,Some:t})}const Ne=f.bytes(mr).transform({validate:t=>{const e=typeof t=="string"?t:fs(t);if(!e||!Cn(ce(e)))throw new Error(`Invalid Sui address ${e}`)},input:t=>typeof t=="string"?Rc(ce(t)):t,output:t=>ce(fs(t))}),Qt=f.vector(f.u8()).transform({name:"ObjectDigest",input:t=>oi(t),output:t=>Ro(new Uint8Array(t)),validate:t=>{if(oi(t).length!==32)throw new Error("ObjectDigest must be 32 bytes")}}),kt=f.struct("SuiObjectRef",{objectId:Ne,version:f.u64(),digest:Qt}),bf=f.struct("SharedObjectRef",{objectId:Ne,initialSharedVersion:f.u64(),mutable:f.bool()}),yf=f.enum("ObjectArg",{ImmOrOwnedObject:kt,SharedObject:bf,Receiving:kt}),_s=f.enum("Owner",{AddressOwner:Ne,ObjectOwner:Ne,Shared:f.struct("Shared",{initialSharedVersion:f.u64()}),Immutable:null,ConsensusV2:f.struct("ConsensusV2",{authenticator:f.enum("Authenticator",{SingleOwner:Ne}),startVersion:f.u64()})}),mf=f.enum("CallArg",{Pure:f.struct("Pure",{bytes:f.vector(f.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>Me(new Uint8Array(t))})}),Object:yf}),Vc=f.enum("TypeTag",{bool:null,u8:null,u64:null,u128:null,address:null,signer:null,vector:f.lazy(()=>Vc),struct:f.lazy(()=>If),u16:null,u32:null,u256:null}),Wc=Vc.transform({input:t=>typeof t=="string"?Gt.parseFromStr(t,!0):t,output:t=>Gt.tagToString(t)}),fn=f.enum("Argument",{GasCoin:null,Input:f.u16(),Result:f.u16(),NestedResult:f.tuple([f.u16(),f.u16()])}),wf=f.struct("ProgrammableMoveCall",{package:Ne,module:f.string(),function:f.string(),typeArguments:f.vector(Wc),arguments:f.vector(fn)}),vf=f.enum("Command",{MoveCall:wf,TransferObjects:f.struct("TransferObjects",{objects:f.vector(fn),address:fn}),SplitCoins:f.struct("SplitCoins",{coin:fn,amounts:f.vector(fn)}),MergeCoins:f.struct("MergeCoins",{destination:fn,sources:f.vector(fn)}),Publish:f.struct("Publish",{modules:f.vector(f.vector(f.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>Me(new Uint8Array(t))})),dependencies:f.vector(Ne)}),MakeMoveVec:f.struct("MakeMoveVec",{type:N0(Wc).transform({input:t=>t===null?{None:!0}:{Some:t},output:t=>t.Some??null}),elements:f.vector(fn)}),Upgrade:f.struct("Upgrade",{modules:f.vector(f.vector(f.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>Me(new Uint8Array(t))})),dependencies:f.vector(Ne),package:Ne,ticket:fn})}),Sf=f.struct("ProgrammableTransaction",{inputs:f.vector(mf),commands:f.vector(vf)}),Mf=f.enum("TransactionKind",{ProgrammableTransaction:Sf,ChangeEpoch:null,Genesis:null,ConsensusCommitPrologue:null}),xf=f.enum("TransactionExpiration",{None:null,Epoch:A0()}),If=f.struct("StructTag",{address:Ne,module:f.string(),name:f.string(),typeParams:f.vector(Vc)}),_f=f.struct("GasData",{payment:f.vector(kt),owner:Ne,price:f.u64(),budget:f.u64()}),Ef=f.struct("TransactionDataV1",{kind:Mf,sender:Ne,gasData:_f,expiration:xf}),Af=f.enum("TransactionData",{V1:Ef}),Nf=f.enum("IntentScope",{TransactionData:null,TransactionEffects:null,CheckpointSummary:null,PersonalMessage:null}),Tf=f.enum("IntentVersion",{V0:null}),Of=f.enum("AppId",{Sui:null}),jf=f.struct("Intent",{scope:Nf,version:Tf,appId:Of});function Cf(t){return f.struct(`IntentMessage<${t.name}>`,{intent:jf,value:t})}const kf=f.enum("CompressedSignature",{ED25519:f.fixedArray(64,f.u8()),Secp256k1:f.fixedArray(64,f.u8()),Secp256r1:f.fixedArray(64,f.u8()),ZkLogin:f.vector(f.u8())}),Df=f.enum("PublicKey",{ED25519:f.fixedArray(32,f.u8()),Secp256k1:f.fixedArray(33,f.u8()),Secp256r1:f.fixedArray(33,f.u8()),ZkLogin:f.vector(f.u8())}),Uf=f.struct("MultiSigPkMap",{pubKey:Df,weight:f.u8()}),Bf=f.struct("MultiSigPublicKey",{pk_map:f.vector(Uf),threshold:f.u16()}),T0=f.struct("MultiSig",{sigs:f.vector(kf),bitmap:f.u16(),multisig_pk:Bf}),O0=f.vector(f.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>Me(new Uint8Array(t))}),Lf=f.struct("SenderSignedTransaction",{intentMessage:Cf(Af),txSignatures:f.vector(O0)}),j0=f.vector(Lf,{name:"SenderSignedData"}),zf=f.struct("PasskeyAuthenticator",{authenticatorData:f.vector(f.u8()),clientDataJson:f.string(),userSignature:f.vector(f.u8())}),C0=f.enum("PackageUpgradeError",{UnableToFetchPackage:f.struct("UnableToFetchPackage",{packageId:Ne}),NotAPackage:f.struct("NotAPackage",{objectId:Ne}),IncompatibleUpgrade:null,DigestDoesNotMatch:f.struct("DigestDoesNotMatch",{digest:f.vector(f.u8())}),UnknownUpgradePolicy:f.struct("UnknownUpgradePolicy",{policy:f.u8()}),PackageIDDoesNotMatch:f.struct("PackageIDDoesNotMatch",{packageId:Ne,ticketId:Ne})}),k0=f.struct("ModuleId",{address:Ne,name:f.string()}),rl=f.struct("MoveLocation",{module:k0,function:f.u16(),instruction:f.u16(),functionName:f.option(f.string())}),D0=f.enum("CommandArgumentError",{TypeMismatch:null,InvalidBCSBytes:null,InvalidUsageOfPureArg:null,InvalidArgumentToPrivateEntryFunction:null,IndexOutOfBounds:f.struct("IndexOutOfBounds",{idx:f.u16()}),SecondaryIndexOutOfBounds:f.struct("SecondaryIndexOutOfBounds",{resultIdx:f.u16(),secondaryIdx:f.u16()}),InvalidResultArity:f.struct("InvalidResultArity",{resultIdx:f.u16()}),InvalidGasCoinUsage:null,InvalidValueUsage:null,InvalidObjectByValue:null,InvalidObjectByMutRef:null,SharedObjectOperationNotAllowed:null}),U0=f.enum("TypeArgumentError",{TypeNotFound:null,ConstraintNotSatisfied:null}),B0=f.enum("ExecutionFailureStatus",{InsufficientGas:null,InvalidGasObject:null,InvariantViolation:null,FeatureNotYetSupported:null,MoveObjectTooBig:f.struct("MoveObjectTooBig",{objectSize:f.u64(),maxObjectSize:f.u64()}),MovePackageTooBig:f.struct("MovePackageTooBig",{objectSize:f.u64(),maxObjectSize:f.u64()}),CircularObjectOwnership:f.struct("CircularObjectOwnership",{object:Ne}),InsufficientCoinBalance:null,CoinBalanceOverflow:null,PublishErrorNonZeroAddress:null,SuiMoveVerificationError:null,MovePrimitiveRuntimeError:f.option(rl),MoveAbort:f.tuple([rl,f.u64()]),VMVerificationOrDeserializationError:null,VMInvariantViolation:null,FunctionNotFound:null,ArityMismatch:null,TypeArityMismatch:null,NonEntryFunctionInvoked:null,CommandArgumentError:f.struct("CommandArgumentError",{argIdx:f.u16(),kind:D0}),TypeArgumentError:f.struct("TypeArgumentError",{argumentIdx:f.u16(),kind:U0}),UnusedValueWithoutDrop:f.struct("UnusedValueWithoutDrop",{resultIdx:f.u16(),secondaryIdx:f.u16()}),InvalidPublicFunctionReturnType:f.struct("InvalidPublicFunctionReturnType",{idx:f.u16()}),InvalidTransferObject:null,EffectsTooLarge:f.struct("EffectsTooLarge",{currentSize:f.u64(),maxSize:f.u64()}),PublishUpgradeMissingDependency:null,PublishUpgradeDependencyDowngrade:null,PackageUpgradeError:f.struct("PackageUpgradeError",{upgradeError:C0}),WrittenObjectsTooLarge:f.struct("WrittenObjectsTooLarge",{currentSize:f.u64(),maxSize:f.u64()}),CertificateDenied:null,SuiMoveVerificationTimedout:null,SharedObjectOperationNotAllowed:null,InputObjectDeleted:null,ExecutionCancelledDueToSharedObjectCongestion:f.struct("ExecutionCancelledDueToSharedObjectCongestion",{congestedObjects:f.vector(Ne)}),AddressDeniedForCoin:f.struct("AddressDeniedForCoin",{address:Ne,coinType:f.string()}),CoinTypeGlobalPause:f.struct("CoinTypeGlobalPause",{coinType:f.string()}),ExecutionCancelledDueToRandomnessUnavailable:null}),Pf=f.enum("ExecutionStatus",{Success:null,Failed:f.struct("ExecutionFailed",{error:B0,command:f.option(f.u64())})}),Rf=f.struct("GasCostSummary",{computationCost:f.u64(),storageCost:f.u64(),storageRebate:f.u64(),nonRefundableStorageFee:f.u64()}),L0=f.struct("TransactionEffectsV1",{status:Pf,executedEpoch:f.u64(),gasUsed:Rf,modifiedAtVersions:f.vector(f.tuple([Ne,f.u64()])),sharedObjects:f.vector(kt),transactionDigest:Qt,created:f.vector(f.tuple([kt,_s])),mutated:f.vector(f.tuple([kt,_s])),unwrapped:f.vector(f.tuple([kt,_s])),deleted:f.vector(kt),unwrappedThenDeleted:f.vector(kt),wrapped:f.vector(kt),gasObject:f.tuple([kt,_s]),eventsDigest:f.option(Qt),dependencies:f.vector(Qt)}),qc=f.tuple([f.u64(),Qt]),z0=f.enum("ObjectIn",{NotExist:null,Exist:f.tuple([qc,_s])}),P0=f.enum("ObjectOut",{NotExist:null,ObjectWrite:f.tuple([Qt,_s]),PackageWrite:qc}),R0=f.enum("IDOperation",{None:null,Created:null,Deleted:null}),$0=f.struct("EffectsObjectChange",{inputState:z0,outputState:P0,idOperation:R0}),F0=f.enum("UnchangedSharedKind",{ReadOnlyRoot:qc,MutateDeleted:f.u64(),ReadDeleted:f.u64(),Cancelled:f.u64(),PerEpochConfig:null}),V0=f.struct("TransactionEffectsV2",{status:Pf,executedEpoch:f.u64(),gasUsed:Rf,transactionDigest:Qt,gasObjectIndex:f.option(f.u32()),eventsDigest:f.option(Qt),dependencies:f.vector(Qt),lamportVersion:f.u64(),changedObjects:f.vector(f.tuple([Ne,$0])),unchangedSharedObjects:f.vector(f.tuple([Ne,F0])),auxDataDigest:f.option(Qt)}),W0=f.enum("TransactionEffects",{V1:L0,V2:V0});function Fr(t){switch(t){case"u8":return f.u8();case"u16":return f.u16();case"u32":return f.u32();case"u64":return f.u64();case"u128":return f.u128();case"u256":return f.u256();case"bool":return f.bool();case"string":return f.string();case"id":case"address":return Ne}const e=t.match(/^(vector|option)<(.+)>$/);if(e){const[n,s]=e.slice(1);return n==="vector"?f.vector(Fr(s)):f.option(Fr(s))}throw new Error(`Invalid Pure type name: ${t}`)}const J={...f,U8:f.u8(),U16:f.u16(),U32:f.u32(),U64:f.u64(),U128:f.u128(),U256:f.u256(),ULEB128:f.uleb128(),Bool:f.bool(),String:f.string(),Address:Ne,AppId:Of,Argument:fn,CallArg:mf,Command:vf,CompressedSignature:kf,GasData:_f,Intent:jf,IntentMessage:Cf,IntentScope:Nf,IntentVersion:Tf,MultiSig:T0,MultiSigPkMap:Uf,MultiSigPublicKey:Bf,ObjectArg:yf,ObjectDigest:Qt,Owner:_s,PasskeyAuthenticator:zf,ProgrammableMoveCall:wf,ProgrammableTransaction:Sf,PublicKey:Df,SenderSignedData:j0,SenderSignedTransaction:Lf,SharedObjectRef:bf,StructTag:If,SuiObjectRef:kt,TransactionData:Af,TransactionDataV1:Ef,TransactionEffects:W0,TransactionExpiration:xf,TransactionKind:Mf,TypeTag:Wc},$f=BigInt(1e9),q0="0x1",Ff="0x2";Ln("0x6");const K0=`${Ff}::sui::SUI`;Ln("0x5");const qs=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Kc(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Pn(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function qe(t,...e){if(!Kc(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function Vf(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");Pn(t.outputLen),Pn(t.blockLen)}function dr(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Wf(t,e){qe(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function wo(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Pt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function ks(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function cn(t,e){return t<<32-e|t>>>e}function Ni(t,e){return t<<e|t>>>32-e>>>0}const qf=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Kf(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}const Nn=qf?t=>t:t=>Kf(t);function G0(t){for(let e=0;e<t.length;e++)t[e]=Kf(t[e]);return t}const Ks=qf?t=>t:G0,Gf=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",H0=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Xt(t){if(qe(t),Gf)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=H0[t[n]];return e}const In={_0:48,_9:57,A:65,F:70,a:97,f:102};function il(t){if(t>=In._0&&t<=In._9)return t-In._0;if(t>=In.A&&t<=In.F)return t-(In.A-10);if(t>=In.a&&t<=In.f)return t-(In.a-10)}function yi(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);if(Gf)return Uint8Array.fromHex(t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const s=new Uint8Array(n);for(let r=0,i=0;r<n;r++,i+=2){const o=il(t.charCodeAt(i)),a=il(t.charCodeAt(i+1));if(o===void 0||a===void 0){const c=t[i]+t[i+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+i)}s[r]=o*16+a}return s}function Gc(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function ds(t){return typeof t=="string"&&(t=Gc(t)),qe(t),t}function ol(t){return typeof t=="string"&&(t=Gc(t)),qe(t),t}function At(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];qe(r),e+=r.length}const n=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const i=t[s];n.set(i,r),r+=i.length}return n}function Y0(t,e){if(e!==void 0&&{}.toString.call(e)!=="[object Object]")throw new Error("options should be object or undefined");return Object.assign(t,e)}class Hc{}function $o(t){const e=s=>t().update(ds(s)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Q0(t){const e=(s,r)=>t(r).update(ds(s)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=s=>t(s),e}function Hf(t=32){if(qs&&typeof qs.getRandomValues=="function")return qs.getRandomValues(new Uint8Array(t));if(qs&&typeof qs.randomBytes=="function")return Uint8Array.from(qs.randomBytes(t));throw new Error("crypto.getRandomValues must be defined")}const Z0=Uint8Array.from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9]);function J0(t,e,n,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,s);const r=BigInt(32),i=BigInt(4294967295),o=Number(n>>r&i),a=Number(n&i),c=s?4:0,l=s?0:4;t.setUint32(e+c,o,s),t.setUint32(e+l,a,s)}function X0(t,e,n){return t&e^~t&n}function ey(t,e,n){return t&e^t&n^e&n}class Yc extends Hc{constructor(e,n,s,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=n,this.padOffset=s,this.isLE=r,this.buffer=new Uint8Array(e),this.view=ks(this.buffer)}update(e){dr(this),e=ds(e),qe(e);const{view:n,buffer:s,blockLen:r}=this,i=e.length;for(let o=0;o<i;){const a=Math.min(r-this.pos,i-o);if(a===r){const c=ks(e);for(;r<=i-o;o+=r)this.process(c,o);continue}s.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===r&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){dr(this),Wf(e,this),this.finished=!0;const{buffer:n,view:s,blockLen:r,isLE:i}=this;let{pos:o}=this;n[o++]=128,Pt(this.buffer.subarray(o)),this.padOffset>r-o&&(this.process(s,0),o=0);for(let d=o;d<r;d++)n[d]=0;J0(s,r-8,BigInt(this.length*8),i),this.process(s,0);const a=ks(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:s,length:r,finished:i,destroyed:o,pos:a}=this;return e.destroyed=o,e.finished=i,e.length=r,e.pos=a,r%n&&e.buffer.set(s),e}clone(){return this._cloneInto()}}const Wn=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Je=Uint32Array.from([3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]),Xe=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Ti=BigInt(2**32-1),al=BigInt(32);function Yf(t,e=!1){return e?{h:Number(t&Ti),l:Number(t>>al&Ti)}:{h:Number(t>>al&Ti)|0,l:Number(t&Ti)|0}}function ty(t,e=!1){const n=t.length;let s=new Uint32Array(n),r=new Uint32Array(n);for(let i=0;i<n;i++){const{h:o,l:a}=Yf(t[i],e);[s[i],r[i]]=[o,a]}return[s,r]}const cl=(t,e,n)=>t>>>n,ul=(t,e,n)=>t<<32-n|e>>>n,ts=(t,e,n)=>t>>>n|e<<32-n,ns=(t,e,n)=>t<<32-n|e>>>n,jr=(t,e,n)=>t<<64-n|e>>>n-32,Cr=(t,e,n)=>t>>>n-32|e<<64-n,ny=(t,e)=>e,sy=(t,e)=>t;function $t(t,e,n,s){const r=(e>>>0)+(s>>>0);return{h:t+n+(r/2**32|0)|0,l:r|0}}const Qc=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),Zc=(t,e,n,s)=>e+n+s+(t/2**32|0)|0,ry=(t,e,n,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0),iy=(t,e,n,s,r)=>e+n+s+r+(t/2**32|0)|0,oy=(t,e,n,s,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0)+(r>>>0),ay=(t,e,n,s,r,i)=>e+n+s+r+i+(t/2**32|0)|0,Ve=Uint32Array.from([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),V=new Uint32Array(32);function qn(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=V[2*t],l=V[2*t+1],u=V[2*e],d=V[2*e+1],h=V[2*n],p=V[2*n+1],y=V[2*s],m=V[2*s+1],w=Qc(c,u,o);l=Zc(w,l,d,a),c=w|0,{Dh:m,Dl:y}={Dh:m^l,Dl:y^c},{Dh:m,Dl:y}={Dh:ny(m,y),Dl:sy(m)},{h:p,l:h}=$t(p,h,m,y),{Bh:d,Bl:u}={Bh:d^p,Bl:u^h},{Bh:d,Bl:u}={Bh:ts(d,u,24),Bl:ns(d,u,24)},V[2*t]=c,V[2*t+1]=l,V[2*e]=u,V[2*e+1]=d,V[2*n]=h,V[2*n+1]=p,V[2*s]=y,V[2*s+1]=m}function Kn(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=V[2*t],l=V[2*t+1],u=V[2*e],d=V[2*e+1],h=V[2*n],p=V[2*n+1],y=V[2*s],m=V[2*s+1],w=Qc(c,u,o);l=Zc(w,l,d,a),c=w|0,{Dh:m,Dl:y}={Dh:m^l,Dl:y^c},{Dh:m,Dl:y}={Dh:ts(m,y,16),Dl:ns(m,y,16)},{h:p,l:h}=$t(p,h,m,y),{Bh:d,Bl:u}={Bh:d^p,Bl:u^h},{Bh:d,Bl:u}={Bh:jr(d,u,63),Bl:Cr(d,u,63)},V[2*t]=c,V[2*t+1]=l,V[2*e]=u,V[2*e+1]=d,V[2*n]=h,V[2*n+1]=p,V[2*s]=y,V[2*s+1]=m}function cy(t,e={},n,s,r){if(Pn(n),t<0||t>n)throw new Error("outputLen bigger than keyLen");const{key:i,salt:o,personalization:a}=e;if(i!==void 0&&(i.length<1||i.length>n))throw new Error("key length must be undefined or 1.."+n);if(o!==void 0&&o.length!==s)throw new Error("salt must be undefined or "+s);if(a!==void 0&&a.length!==r)throw new Error("personalization must be undefined or "+r)}class uy extends Hc{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,this.length=0,this.pos=0,Pn(e),Pn(n),this.blockLen=e,this.outputLen=n,this.buffer=new Uint8Array(e),this.buffer32=wo(this.buffer)}update(e){dr(this),e=ds(e),qe(e);const{blockLen:n,buffer:s,buffer32:r}=this,i=e.length,o=e.byteOffset,a=e.buffer;for(let c=0;c<i;){this.pos===n&&(Ks(r),this.compress(r,0,!1),Ks(r),this.pos=0);const l=Math.min(n-this.pos,i-c),u=o+c;if(l===n&&!(u%4)&&c+l<i){const d=new Uint32Array(a,u,Math.floor((i-c)/4));Ks(d);for(let h=0;c+n<i;h+=r.length,c+=n)this.length+=n,this.compress(d,h,!1);Ks(d);continue}s.set(e.subarray(c,c+l),this.pos),this.pos+=l,this.length+=l,c+=l}return this}digestInto(e){dr(this),Wf(e,this);const{pos:n,buffer32:s}=this;this.finished=!0,Pt(this.buffer.subarray(n)),Ks(s),this.compress(s,0,!0),Ks(s);const r=wo(e);this.get().forEach((i,o)=>r[o]=Nn(i))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){const{buffer:n,length:s,finished:r,destroyed:i,outputLen:o,pos:a}=this;return e||(e=new this.constructor({dkLen:o})),e.set(...this.get()),e.buffer.set(n),e.destroyed=i,e.finished=r,e.length=s,e.pos=a,e.outputLen=o,e}clone(){return this._cloneInto()}}class ly extends uy{constructor(e={}){const n=e.dkLen===void 0?64:e.dkLen;super(128,n),this.v0l=Ve[0]|0,this.v0h=Ve[1]|0,this.v1l=Ve[2]|0,this.v1h=Ve[3]|0,this.v2l=Ve[4]|0,this.v2h=Ve[5]|0,this.v3l=Ve[6]|0,this.v3h=Ve[7]|0,this.v4l=Ve[8]|0,this.v4h=Ve[9]|0,this.v5l=Ve[10]|0,this.v5h=Ve[11]|0,this.v6l=Ve[12]|0,this.v6h=Ve[13]|0,this.v7l=Ve[14]|0,this.v7h=Ve[15]|0,cy(n,e,64,16,16);let{key:s,personalization:r,salt:i}=e,o=0;if(s!==void 0&&(s=ds(s),o=s.length),this.v0l^=this.outputLen|o<<8|65536|1<<24,i!==void 0){i=ds(i);const a=wo(i);this.v4l^=Nn(a[0]),this.v4h^=Nn(a[1]),this.v5l^=Nn(a[2]),this.v5h^=Nn(a[3])}if(r!==void 0){r=ds(r);const a=wo(r);this.v6l^=Nn(a[0]),this.v6h^=Nn(a[1]),this.v7l^=Nn(a[2]),this.v7h^=Nn(a[3])}if(s!==void 0){const a=new Uint8Array(this.blockLen);a.set(s),this.update(a)}}get(){let{v0l:e,v0h:n,v1l:s,v1h:r,v2l:i,v2h:o,v3l:a,v3h:c,v4l:l,v4h:u,v5l:d,v5h:h,v6l:p,v6h:y,v7l:m,v7h:w}=this;return[e,n,s,r,i,o,a,c,l,u,d,h,p,y,m,w]}set(e,n,s,r,i,o,a,c,l,u,d,h,p,y,m,w){this.v0l=e|0,this.v0h=n|0,this.v1l=s|0,this.v1h=r|0,this.v2l=i|0,this.v2h=o|0,this.v3l=a|0,this.v3h=c|0,this.v4l=l|0,this.v4h=u|0,this.v5l=d|0,this.v5h=h|0,this.v6l=p|0,this.v6h=y|0,this.v7l=m|0,this.v7h=w|0}compress(e,n,s){this.get().forEach((c,l)=>V[l]=c),V.set(Ve,16);let{h:r,l:i}=Yf(BigInt(this.length));V[24]=Ve[8]^i,V[25]=Ve[9]^r,s&&(V[28]=~V[28],V[29]=~V[29]);let o=0;const a=Z0;for(let c=0;c<12;c++)qn(0,4,8,12,e,n+2*a[o++]),Kn(0,4,8,12,e,n+2*a[o++]),qn(1,5,9,13,e,n+2*a[o++]),Kn(1,5,9,13,e,n+2*a[o++]),qn(2,6,10,14,e,n+2*a[o++]),Kn(2,6,10,14,e,n+2*a[o++]),qn(3,7,11,15,e,n+2*a[o++]),Kn(3,7,11,15,e,n+2*a[o++]),qn(0,5,10,15,e,n+2*a[o++]),Kn(0,5,10,15,e,n+2*a[o++]),qn(1,6,11,12,e,n+2*a[o++]),Kn(1,6,11,12,e,n+2*a[o++]),qn(2,7,8,13,e,n+2*a[o++]),Kn(2,7,8,13,e,n+2*a[o++]),qn(3,4,9,14,e,n+2*a[o++]),Kn(3,4,9,14,e,n+2*a[o++]);this.v0l^=V[0]^V[16],this.v0h^=V[1]^V[17],this.v1l^=V[2]^V[18],this.v1h^=V[3]^V[19],this.v2l^=V[4]^V[20],this.v2h^=V[5]^V[21],this.v3l^=V[6]^V[22],this.v3h^=V[7]^V[23],this.v4l^=V[8]^V[24],this.v4h^=V[9]^V[25],this.v5l^=V[10]^V[26],this.v5h^=V[11]^V[27],this.v6l^=V[12]^V[28],this.v6h^=V[13]^V[29],this.v7l^=V[14]^V[30],this.v7h^=V[15]^V[31],Pt(V)}destroy(){this.destroyed=!0,Pt(this.buffer32),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const dy=Q0(t=>new ly(t)),hs=dy;function Qf(t,e,n){const s=J.Address.serialize(t).toBytes(),r=J.TypeTag.serialize(e).toBytes(),i=J.u64().serialize(n.length).toBytes(),o=hs.create({dkLen:32});return o.update(new Uint8Array([240])),o.update(s),o.update(i),o.update(n),o.update(r),`0x${fs(o.digest().slice(0,32))}`}const fy="object",hy="ID",py="ascii",gy="String",by="string",yy="String",my="option",wy="Option";function vy(t){const e=typeof t.body=="object"&&"datatype"in t.body?t.body.datatype:null;return!!e&&ce(e.package)===ce("0x2")&&e.module==="tx_context"&&e.type==="TxContext"}function qa(t){if(typeof t=="string")switch(t){case"address":return J.Address;case"bool":return J.Bool;case"u8":return J.U8;case"u16":return J.U16;case"u32":return J.U32;case"u64":return J.U64;case"u128":return J.U128;case"u256":return J.U256;default:throw new Error(`Unknown type signature ${t}`)}if("vector"in t){if(t.vector==="u8")return J.vector(J.U8).transform({input:n=>typeof n=="string"?new TextEncoder().encode(n):n,output:n=>n});const e=qa(t.vector);return e?J.vector(e):null}if("datatype"in t){const e=ce(t.datatype.package);if(e===ce(q0)){if(t.datatype.module===py&&t.datatype.type===gy||t.datatype.module===by&&t.datatype.type===yy)return J.String;if(t.datatype.module===my&&t.datatype.type===wy){const n=qa(t.datatype.typeParameters[0]);return n?J.vector(n):null}}if(e===ce(Ff)&&t.datatype.module===fy&&t.datatype.type===hy)return J.Address}return null}function Sy(t){return typeof t=="object"&&"Reference"in t?{ref:"&",body:Vr(t.Reference)}:typeof t=="object"&&"MutableReference"in t?{ref:"&mut",body:Vr(t.MutableReference)}:{ref:null,body:Vr(t)}}function Vr(t){if(typeof t=="string")switch(t){case"Address":return"address";case"Bool":return"bool";case"U8":return"u8";case"U16":return"u16";case"U32":return"u32";case"U64":return"u64";case"U128":return"u128";case"U256":return"u256";default:throw new Error(`Unexpected type ${t}`)}if("Vector"in t)return{vector:Vr(t.Vector)};if("Struct"in t)return{datatype:{package:t.Struct.address,module:t.Struct.module,type:t.Struct.name,typeParameters:t.Struct.typeArguments.map(Vr)}};if("TypeParameter"in t)return{typeParameter:t.TypeParameter};throw new Error(`Unexpected type ${JSON.stringify(t)}`)}function My(t){return{$kind:"Pure",Pure:{bytes:t instanceof Uint8Array?Me(t):t.toBase64()}}}const Lt={Pure:My,ObjectRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"ImmOrOwnedObject",ImmOrOwnedObject:{digest:e,version:n,objectId:ce(t)}}}},SharedObjectRef({objectId:t,mutable:e,initialSharedVersion:n}){return{$kind:"Object",Object:{$kind:"SharedObject",SharedObject:{mutable:e,initialSharedVersion:n,objectId:ce(t)}}}},ReceivingRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"Receiving",Receiving:{digest:e,version:n,objectId:ce(t)}}}}};var _n;function xy(t){return{lang:(t==null?void 0:t.lang)??(_n==null?void 0:_n.lang),message:t==null?void 0:t.message,abortEarly:(t==null?void 0:t.abortEarly)??(_n==null?void 0:_n.abortEarly),abortPipeEarly:(t==null?void 0:t.abortPipeEarly)??(_n==null?void 0:_n.abortPipeEarly)}}var pa;function Iy(t){return pa==null?void 0:pa.get(t)}var ga;function _y(t){return ga==null?void 0:ga.get(t)}var ba;function Ey(t,e){var n;return(n=ba==null?void 0:ba.get(t))==null?void 0:n.get(e)}function Zf(t){var n,s;const e=typeof t;return e==="string"?`"${t}"`:e==="number"||e==="bigint"||e==="boolean"?`${t}`:e==="object"||e==="function"?(t&&((s=(n=Object.getPrototypeOf(t))==null?void 0:n.constructor)==null?void 0:s.name))??"null":e}function Tt(t,e,n,s,r){const i=r&&"input"in r?r.input:n.value,o=(r==null?void 0:r.expected)??t.expects??null,a=(r==null?void 0:r.received)??Zf(i),c={kind:t.kind,type:t.type,input:i,expected:o,received:a,message:`Invalid ${e}: ${o?`Expected ${o} but r`:"R"}eceived ${a}`,requirement:t.requirement,path:r==null?void 0:r.path,issues:r==null?void 0:r.issues,lang:s.lang,abortEarly:s.abortEarly,abortPipeEarly:s.abortPipeEarly},l=t.kind==="schema",u=(r==null?void 0:r.message)??t.message??Ey(t.reference,c.lang)??(l?_y(c.lang):null)??s.message??Iy(c.lang);u&&(c.message=typeof u=="function"?u(c):u),l&&(n.typed=!1),n.issues?n.issues.push(c):n.issues=[c]}function Ay(t,e){return Object.hasOwn(t,e)&&e!=="__proto__"&&e!=="prototype"&&e!=="constructor"}var Ny=class extends Error{constructor(e){super(e[0].message);Vs(this,"issues");this.name="ValiError",this.issues=e}};function mi(t,e){return{kind:"validation",type:"check",reference:mi,async:!1,expects:null,requirement:t,message:e,_run(n,s){return n.typed&&!this.requirement(n.value)&&Tt(this,"input",n,s),n}}}function Le(t){return{kind:"validation",type:"integer",reference:Le,async:!1,expects:null,requirement:Number.isInteger,message:t,_run(e,n){return e.typed&&!this.requirement(e.value)&&Tt(this,"integer",e,n),e}}}function Fo(t){return{kind:"transformation",type:"transform",reference:Fo,async:!1,operation:t,_run(e){return e.value=this.operation(e.value),e}}}function Jc(t,e,n){return typeof t.default=="function"?t.default(e,n):t.default}function Ka(t,e){return!t._run({typed:!1,value:e},{abortEarly:!0}).issues}function se(t,e){return{kind:"schema",type:"array",reference:se,expects:"Array",async:!1,item:t,message:e,_run(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<r.length;o++){const a=r[o],c=this.item._run({typed:!1,value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Tt(this,"type",n,s);return n}}}function Xc(t){return{kind:"schema",type:"bigint",reference:Xc,expects:"bigint",async:!1,message:t,_run(e,n){return typeof e.value=="bigint"?e.typed=!0:Tt(this,"type",e,n),e}}}function Vo(t){return{kind:"schema",type:"boolean",reference:Vo,expects:"boolean",async:!1,message:t,_run(e,n){return typeof e.value=="boolean"?e.typed=!0:Tt(this,"type",e,n),e}}}function ci(t){return{kind:"schema",type:"lazy",reference:ci,expects:"unknown",async:!1,getter:t,_run(e,n){return this.getter(e.value)._run(e,n)}}}function ie(t,e){return{kind:"schema",type:"literal",reference:ie,expects:Zf(t),async:!1,literal:t,message:e,_run(n,s){return n.value===this.literal?n.typed=!0:Tt(this,"type",n,s),n}}}function pe(t,...e){const n={kind:"schema",type:"nullable",reference:pe,expects:`${t.expects} | null`,async:!1,wrapped:t,_run(s,r){return s.value===null&&("default"in this&&(s.value=Jc(this,s,r)),s.value===null)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function fr(t,...e){const n={kind:"schema",type:"nullish",reference:fr,expects:`${t.expects} | null | undefined`,async:!1,wrapped:t,_run(s,r){return(s.value===null||s.value===void 0)&&("default"in this&&(s.value=Jc(this,s,r)),s.value===null||s.value===void 0)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function Ce(t){return{kind:"schema",type:"number",reference:Ce,expects:"number",async:!1,message:t,_run(e,n){return typeof e.value=="number"&&!isNaN(e.value)?e.typed=!0:Tt(this,"type",e,n),e}}}function R(t,e){return{kind:"schema",type:"object",reference:R,expects:"Object",async:!1,entries:t,message:e,_run(n,s){var i;const r=n.value;if(r&&typeof r=="object"){n.typed=!0,n.value={};for(const o in this.entries){const a=r[o],c=this.entries[o]._run({typed:!1,value:a},s);if(c.issues){const l={type:"object",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),(c.value!==void 0||o in r)&&(n.value[o]=c.value)}}else Tt(this,"type",n,s);return n}}}function Ye(t,...e){const n={kind:"schema",type:"optional",reference:Ye,expects:`${t.expects} | undefined`,async:!1,wrapped:t,_run(s,r){return s.value===void 0&&("default"in this&&(s.value=Jc(this,s,r)),s.value===void 0)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function ui(t,e,n){return{kind:"schema",type:"record",reference:ui,expects:"Object",async:!1,key:t,value:e,message:n,_run(s,r){var o,a;const i=s.value;if(i&&typeof i=="object"){s.typed=!0,s.value={};for(const c in i)if(Ay(i,c)){const l=i[c],u=this.key._run({typed:!1,value:c},r);if(u.issues){const h={type:"object",origin:"key",input:i,key:c,value:l};for(const p of u.issues)p.path=[h],(o=s.issues)==null||o.push(p);if(s.issues||(s.issues=u.issues),r.abortEarly){s.typed=!1;break}}const d=this.value._run({typed:!1,value:l},r);if(d.issues){const h={type:"object",origin:"value",input:i,key:c,value:l};for(const p of d.issues)p.path?p.path.unshift(h):p.path=[h],(a=s.issues)==null||a.push(p);if(s.issues||(s.issues=d.issues),r.abortEarly){s.typed=!1;break}}(!u.typed||!d.typed)&&(s.typed=!1),u.typed&&(s.value[u.value]=d.value)}}else Tt(this,"type",s,r);return s}}}function ue(t){return{kind:"schema",type:"string",reference:ue,expects:"string",async:!1,message:t,_run(e,n){return typeof e.value=="string"?e.typed=!0:Tt(this,"type",e,n),e}}}function eu(t,e){return{kind:"schema",type:"tuple",reference:eu,expects:"Array",async:!1,items:t,message:e,_run(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<this.items.length;o++){const a=r[o],c=this.items[o]._run({typed:!1,value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Tt(this,"type",n,s);return n}}}function ll(t){let e;if(t)for(const n of t)e?e.push(...n.issues):e=n.issues;return e}function Ze(t,e){return{kind:"schema",type:"union",reference:Ze,expects:[...new Set(t.map(n=>n.expects))].join(" | ")||"never",async:!1,options:t,message:e,_run(n,s){let r,i,o;for(const a of this.options){const c=a._run({typed:!1,value:n.value},s);if(c.typed)if(c.issues)i?i.push(c):i=[c];else{r=c;break}else o?o.push(c):o=[c]}if(r)return r;if(i){if(i.length===1)return i[0];Tt(this,"type",n,s,{issues:ll(i)}),n.typed=!0}else{if((o==null?void 0:o.length)===1)return o[0];Tt(this,"type",n,s,{issues:ll(o)})}return n}}}function Bs(){return{kind:"schema",type:"unknown",reference:Bs,expects:"unknown",async:!1,_run(t){return t.typed=!0,t}}}function Ue(t,e,n){const s=t._run({typed:!1,value:e},xy(n));if(s.issues)throw new Ny(s.issues);return s.value}function Se(...t){return{...t[0],pipe:t,_run(e,n){for(let s=0;s<t.length;s++){if(e.issues&&(t[s].kind==="schema"||t[s].kind==="transformation")){e.typed=!1;break}(!e.issues||!n.abortEarly&&!n.abortPipeEarly)&&(e=t[s]._run(e,n))}return e}}}function Fs(t){const e=Object.entries(t).map(([n,s])=>R({[n]:s}));return Se(Ze(e),Fo(n=>({...n,$kind:Object.keys(n)[0]})))}const wr=Se(ue(),Fo(t=>ce(t)),mi(Cn)),Nt=wr,Ls=ue(),mt=Se(Ze([ue(),Se(Ce(),Le())]),mi(t=>{try{return BigInt(t),BigInt(t)>=0&&BigInt(t)<=18446744073709551615n}catch{return!1}},"Invalid u64")),ps=R({objectId:wr,version:mt,digest:ue()}),Oe=Se(Ze([R({GasCoin:ie(!0)}),R({Input:Se(Ce(),Le()),type:Ye(ie("pure"))}),R({Input:Se(Ce(),Le()),type:Ye(ie("object"))}),R({Result:Se(Ce(),Le())}),R({NestedResult:eu([Se(Ce(),Le()),Se(Ce(),Le())])})]),Fo(t=>({...t,$kind:Object.keys(t)[0]}))),Ty=R({budget:pe(mt),price:pe(mt),owner:pe(wr),payment:pe(se(ps))}),Ga=Ze([ie("address"),ie("bool"),ie("u8"),ie("u16"),ie("u32"),ie("u64"),ie("u128"),ie("u256"),R({vector:ci(()=>Ga)}),R({datatype:R({package:ue(),module:ue(),type:ue(),typeParameters:se(ci(()=>Ga))})}),R({typeParameter:Se(Ce(),Le())})]),Oy=R({ref:pe(Ze([ie("&"),ie("&mut")])),body:Ga}),jy=R({package:Nt,module:ue(),function:ue(),typeArguments:se(ue()),arguments:se(Oe),_argumentTypes:Ye(pe(se(Oy)))}),Cy=R({name:ue(),inputs:ui(ue(),Ze([Oe,se(Oe)])),data:ui(ue(),Bs())}),ky=Fs({MoveCall:jy,TransferObjects:R({objects:se(Oe),address:Oe}),SplitCoins:R({coin:Oe,amounts:se(Oe)}),MergeCoins:R({destination:Oe,sources:se(Oe)}),Publish:R({modules:se(Ls),dependencies:se(Nt)}),MakeMoveVec:R({type:pe(ue()),elements:se(Oe)}),Upgrade:R({modules:se(Ls),dependencies:se(Nt),package:Nt,ticket:Oe}),$Intent:Cy}),Jf=Fs({ImmOrOwnedObject:ps,SharedObject:R({objectId:Nt,initialSharedVersion:mt,mutable:Vo()}),Receiving:ps}),Dy=Fs({Object:Jf,Pure:R({bytes:Ls}),UnresolvedPure:R({value:Bs()}),UnresolvedObject:R({objectId:Nt,version:Ye(pe(mt)),digest:Ye(pe(ue())),initialSharedVersion:Ye(pe(mt))})}),dl=Fs({Object:Jf,Pure:R({bytes:Ls})}),Xf=Fs({None:ie(!0),Epoch:mt}),Gi=R({version:ie(2),sender:fr(wr),expiration:fr(Xf),gasData:Ty,inputs:se(Dy),commands:se(ky)}),_t={MoveCall(t){const[e,n="",s=""]="target"in t?t.target.split("::"):[t.package,t.module,t.function];return{$kind:"MoveCall",MoveCall:{package:e,module:n,function:s,typeArguments:t.typeArguments??[],arguments:t.arguments??[]}}},TransferObjects(t,e){return{$kind:"TransferObjects",TransferObjects:{objects:t.map(n=>Ue(Oe,n)),address:Ue(Oe,e)}}},SplitCoins(t,e){return{$kind:"SplitCoins",SplitCoins:{coin:Ue(Oe,t),amounts:e.map(n=>Ue(Oe,n))}}},MergeCoins(t,e){return{$kind:"MergeCoins",MergeCoins:{destination:Ue(Oe,t),sources:e.map(n=>Ue(Oe,n))}}},Publish({modules:t,dependencies:e}){return{$kind:"Publish",Publish:{modules:t.map(n=>typeof n=="string"?n:Me(new Uint8Array(n))),dependencies:e.map(n=>Ln(n))}}},Upgrade({modules:t,dependencies:e,package:n,ticket:s}){return{$kind:"Upgrade",Upgrade:{modules:t.map(r=>typeof r=="string"?r:Me(new Uint8Array(r))),dependencies:e.map(r=>Ln(r)),package:n,ticket:Ue(Oe,s)}}},MakeMoveVec({type:t,elements:e}){return{$kind:"MakeMoveVec",MakeMoveVec:{type:t??null,elements:e.map(n=>Ue(Oe,n))}}},Intent({name:t,inputs:e={},data:n={}}){return{$kind:"$Intent",$Intent:{name:t,inputs:Object.fromEntries(Object.entries(e).map(([s,r])=>[s,Array.isArray(r)?r.map(i=>Ue(Oe,i)):Ue(Oe,r)])),data:n}}}},Ha=R({digest:ue(),objectId:ue(),version:Ze([Se(Ce(),Le()),ue(),Xc()])}),Uy=Fs({ImmOrOwned:Ha,Shared:R({objectId:Nt,initialSharedVersion:mt,mutable:Vo()}),Receiving:Ha}),fl=Fs({Object:Uy,Pure:se(Se(Ce(),Le()))}),eh=Ze([R({kind:ie("Input"),index:Se(Ce(),Le()),value:Bs(),type:Ye(ie("object"))}),R({kind:ie("Input"),index:Se(Ce(),Le()),value:Bs(),type:ie("pure")})]),By=Ze([R({Epoch:Se(Ce(),Le())}),R({None:pe(ie(!0))})]),hl=Se(Ze([Ce(),ue(),Xc()]),mi(t=>{if(!["string","number","bigint"].includes(typeof t))return!1;try{return BigInt(t),!0}catch{return!1}})),tu=Ze([R({bool:pe(ie(!0))}),R({u8:pe(ie(!0))}),R({u64:pe(ie(!0))}),R({u128:pe(ie(!0))}),R({address:pe(ie(!0))}),R({signer:pe(ie(!0))}),R({vector:ci(()=>tu)}),R({struct:ci(()=>Ly)}),R({u16:pe(ie(!0))}),R({u32:pe(ie(!0))}),R({u256:pe(ie(!0))})]),Ly=R({address:ue(),module:ue(),name:ue(),typeParams:se(tu)}),zy=R({budget:Ye(hl),price:Ye(hl),payment:Ye(se(Ha)),owner:Ye(ue())}),Py=[eh,R({kind:ie("GasCoin")}),R({kind:ie("Result"),index:Se(Ce(),Le())}),R({kind:ie("NestedResult"),index:Se(Ce(),Le()),resultIndex:Se(Ce(),Le())})],Rn=Ze([...Py]),Ry=R({kind:ie("MoveCall"),target:Se(ue(),mi(t=>t.split("::").length===3)),typeArguments:se(ue()),arguments:se(Rn)}),$y=R({kind:ie("TransferObjects"),objects:se(Rn),address:Rn}),Fy=R({kind:ie("SplitCoins"),coin:Rn,amounts:se(Rn)}),Vy=R({kind:ie("MergeCoins"),destination:Rn,sources:se(Rn)}),Wy=R({kind:ie("MakeMoveVec"),type:Ze([R({Some:tu}),R({None:pe(ie(!0))})]),objects:se(Rn)}),qy=R({kind:ie("Publish"),modules:se(se(Se(Ce(),Le()))),dependencies:se(ue())}),Ky=R({kind:ie("Upgrade"),modules:se(se(Se(Ce(),Le()))),dependencies:se(ue()),packageId:ue(),ticket:Rn}),Gy=[Ry,$y,Fy,Vy,qy,Ky,Wy],Hy=Ze([...Gy]);R({version:ie(1),sender:Ye(ue()),expiration:fr(By),gasConfig:zy,inputs:se(eh),transactions:se(Hy)});function pl(t){var n;const e=t.inputs.map((s,r)=>{if(s.Object)return{kind:"Input",index:r,value:{Object:s.Object.ImmOrOwnedObject?{ImmOrOwned:s.Object.ImmOrOwnedObject}:s.Object.Receiving?{Receiving:{digest:s.Object.Receiving.digest,version:s.Object.Receiving.version,objectId:s.Object.Receiving.objectId}}:{Shared:{mutable:s.Object.SharedObject.mutable,initialSharedVersion:s.Object.SharedObject.initialSharedVersion,objectId:s.Object.SharedObject.objectId}}},type:"object"};if(s.Pure)return{kind:"Input",index:r,value:{Pure:Array.from(we(s.Pure.bytes))},type:"pure"};if(s.UnresolvedPure)return{kind:"Input",type:"pure",index:r,value:s.UnresolvedPure.value};if(s.UnresolvedObject)return{kind:"Input",type:"object",index:r,value:s.UnresolvedObject.objectId};throw new Error("Invalid input")});return{version:1,sender:t.sender??void 0,expiration:((n=t.expiration)==null?void 0:n.$kind)==="Epoch"?{Epoch:Number(t.expiration.Epoch)}:t.expiration?{None:!0}:null,gasConfig:{owner:t.gasData.owner??void 0,budget:t.gasData.budget??void 0,price:t.gasData.price??void 0,payment:t.gasData.payment??void 0},inputs:e,transactions:t.commands.map(s=>{if(s.MakeMoveVec)return{kind:"MakeMoveVec",type:s.MakeMoveVec.type===null?{None:!0}:{Some:Gt.parseFromStr(s.MakeMoveVec.type)},objects:s.MakeMoveVec.elements.map(r=>En(r,e))};if(s.MergeCoins)return{kind:"MergeCoins",destination:En(s.MergeCoins.destination,e),sources:s.MergeCoins.sources.map(r=>En(r,e))};if(s.MoveCall)return{kind:"MoveCall",target:`${s.MoveCall.package}::${s.MoveCall.module}::${s.MoveCall.function}`,typeArguments:s.MoveCall.typeArguments,arguments:s.MoveCall.arguments.map(r=>En(r,e))};if(s.Publish)return{kind:"Publish",modules:s.Publish.modules.map(r=>Array.from(we(r))),dependencies:s.Publish.dependencies};if(s.SplitCoins)return{kind:"SplitCoins",coin:En(s.SplitCoins.coin,e),amounts:s.SplitCoins.amounts.map(r=>En(r,e))};if(s.TransferObjects)return{kind:"TransferObjects",objects:s.TransferObjects.objects.map(r=>En(r,e)),address:En(s.TransferObjects.address,e)};if(s.Upgrade)return{kind:"Upgrade",modules:s.Upgrade.modules.map(r=>Array.from(we(r))),dependencies:s.Upgrade.dependencies,packageId:s.Upgrade.package,ticket:En(s.Upgrade.ticket,e)};throw new Error(`Unknown transaction ${Object.keys(s)}`)})}}function En(t,e){if(t.$kind==="GasCoin")return{kind:"GasCoin"};if(t.$kind==="Result")return{kind:"Result",index:t.Result};if(t.$kind==="NestedResult")return{kind:"NestedResult",index:t.NestedResult[0],resultIndex:t.NestedResult[1]};if(t.$kind==="Input")return e[t.Input];throw new Error(`Invalid argument ${Object.keys(t)}`)}function Yy(t){var e,n,s;return Ue(Gi,{version:2,sender:t.sender??null,expiration:t.expiration?"Epoch"in t.expiration?{Epoch:t.expiration.Epoch}:{None:!0}:null,gasData:{owner:t.gasConfig.owner??null,budget:((e=t.gasConfig.budget)==null?void 0:e.toString())??null,price:((n=t.gasConfig.price)==null?void 0:n.toString())??null,payment:((s=t.gasConfig.payment)==null?void 0:s.map(r=>({digest:r.digest,objectId:r.objectId,version:r.version.toString()})))??null},inputs:t.inputs.map(r=>{if(r.kind==="Input"){if(Ka(fl,r.value)){const i=Ue(fl,r.value);if(i.Object){if(i.Object.ImmOrOwned)return{Object:{ImmOrOwnedObject:{objectId:i.Object.ImmOrOwned.objectId,version:String(i.Object.ImmOrOwned.version),digest:i.Object.ImmOrOwned.digest}}};if(i.Object.Shared)return{Object:{SharedObject:{mutable:i.Object.Shared.mutable??null,initialSharedVersion:i.Object.Shared.initialSharedVersion,objectId:i.Object.Shared.objectId}}};if(i.Object.Receiving)return{Object:{Receiving:{digest:i.Object.Receiving.digest,version:String(i.Object.Receiving.version),objectId:i.Object.Receiving.objectId}}};throw new Error("Invalid object input")}return{Pure:{bytes:Me(new Uint8Array(i.Pure))}}}return r.type==="object"?{UnresolvedObject:{objectId:r.value}}:{UnresolvedPure:{value:r.value}}}throw new Error("Invalid input")}),commands:t.transactions.map(r=>{switch(r.kind){case"MakeMoveVec":return{MakeMoveVec:{type:"Some"in r.type?Gt.tagToString(r.type.Some):null,elements:r.objects.map(i=>An(i))}};case"MergeCoins":return{MergeCoins:{destination:An(r.destination),sources:r.sources.map(i=>An(i))}};case"MoveCall":{const[i,o,a]=r.target.split("::");return{MoveCall:{package:i,module:o,function:a,typeArguments:r.typeArguments,arguments:r.arguments.map(c=>An(c))}}}case"Publish":return{Publish:{modules:r.modules.map(i=>Me(Uint8Array.from(i))),dependencies:r.dependencies}};case"SplitCoins":return{SplitCoins:{coin:An(r.coin),amounts:r.amounts.map(i=>An(i))}};case"TransferObjects":return{TransferObjects:{objects:r.objects.map(i=>An(i)),address:An(r.address)}};case"Upgrade":return{Upgrade:{modules:r.modules.map(i=>Me(Uint8Array.from(i))),dependencies:r.dependencies,package:r.packageId,ticket:An(r.ticket)}}}throw new Error(`Unknown transaction ${Object.keys(r)}`)})})}function An(t){switch(t.kind){case"GasCoin":return{GasCoin:!0};case"Result":return{Result:t.index};case"NestedResult":return{NestedResult:[t.index,t.resultIndex]};case"Input":return{Input:t.index}}}function wi(t){return Ze(Object.entries(t).map(([e,n])=>R({[e]:n})))}const Wt=wi({GasCoin:ie(!0),Input:Se(Ce(),Le()),Result:Se(Ce(),Le()),NestedResult:eu([Se(Ce(),Le()),Se(Ce(),Le())])}),Qy=R({budget:pe(mt),price:pe(mt),owner:pe(wr),payment:pe(se(ps))}),Zy=R({package:Nt,module:ue(),function:ue(),typeArguments:se(ue()),arguments:se(Wt)}),Jy=R({name:ue(),inputs:ui(ue(),Ze([Wt,se(Wt)])),data:ui(ue(),Bs())}),Xy=wi({MoveCall:Zy,TransferObjects:R({objects:se(Wt),address:Wt}),SplitCoins:R({coin:Wt,amounts:se(Wt)}),MergeCoins:R({destination:Wt,sources:se(Wt)}),Publish:R({modules:se(Ls),dependencies:se(Nt)}),MakeMoveVec:R({type:pe(ue()),elements:se(Wt)}),Upgrade:R({modules:se(Ls),dependencies:se(Nt),package:Nt,ticket:Wt}),$Intent:Jy}),em=wi({ImmOrOwnedObject:ps,SharedObject:R({objectId:Nt,initialSharedVersion:mt,mutable:Vo()}),Receiving:ps}),tm=wi({Object:em,Pure:R({bytes:Ls}),UnresolvedPure:R({value:Bs()}),UnresolvedObject:R({objectId:Nt,version:Ye(pe(mt)),digest:Ye(pe(ue())),initialSharedVersion:Ye(pe(mt))})}),nm=wi({None:ie(!0),Epoch:mt}),sm=R({version:ie(2),sender:fr(wr),expiration:fr(nm),gasData:Qy,inputs:se(tm),commands:se(Xy),digest:Ye(pe(ue()))});function th(t,e){return!!(t.inputs.some(n=>n.UnresolvedObject||n.UnresolvedPure)||!e.onlyTransactionKind&&(!t.gasConfig.price||!t.gasConfig.budget||!t.gasConfig.payment))}async function rm(t,e,n){return om(t),th(t,e)?im(e).core.resolveTransactionPlugin()(t,e,async()=>{await gl(t),await n()}):(await gl(t),n())}function gl(t){t.inputs.forEach((e,n)=>{if(e.$kind!=="Object"&&e.$kind!=="Pure")throw new Error(`Input at index ${n} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(e)}`)})}function im(t){if(!t.client)throw new Error("No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.");return t.client}function om(t){for(const e of t.commands)switch(e.$kind){case"SplitCoins":e.SplitCoins.amounts.forEach(n=>{bl(n,J.U64,t)});break;case"TransferObjects":bl(e.TransferObjects.address,J.Address,t);break}}function bl(t,e,n){if(t.$kind!=="Input")return;const s=n.inputs[t.Input];s.$kind==="UnresolvedPure"&&(n.inputs[t.Input]=Lt.Pure(e.serialize(s.UnresolvedPure.value)))}function am(t){function e(n){return t(n)}return e.system=()=>e("0x5"),e.clock=()=>e("0x6"),e.random=()=>e("0x8"),e.denyList=()=>e("0x403"),e.option=({type:n,value:s})=>r=>r.moveCall({typeArguments:[n],target:`0x1::option::${s===null?"none":"some"}`,arguments:s===null?[]:[r.object(s)]}),e}function cm(t){function e(n,s){if(typeof n=="string")return t(Fr(n).serialize(s));if(n instanceof Uint8Array||$c(n))return t(n);throw new Error("tx.pure must be called either a bcs type name, or a serialized bcs value")}return e.u8=n=>t(J.U8.serialize(n)),e.u16=n=>t(J.U16.serialize(n)),e.u32=n=>t(J.U32.serialize(n)),e.u64=n=>t(J.U64.serialize(n)),e.u128=n=>t(J.U128.serialize(n)),e.u256=n=>t(J.U256.serialize(n)),e.bool=n=>t(J.Bool.serialize(n)),e.string=n=>t(J.String.serialize(n)),e.address=n=>t(J.Address.serialize(n)),e.id=e.address,e.vector=(n,s)=>t(J.vector(Fr(n)).serialize(s)),e.option=(n,s)=>t(J.option(Fr(n)).serialize(s)),e}function um(t,e){const n=Array.from(`${t}::`).map(r=>r.charCodeAt(0)),s=new Uint8Array(n.length+e.length);return s.set(n),s.set(e,n.length),hs(s,{dkLen:32})}function yl(t){return ce(t).replace("0x","")}class bt{constructor(e){this.version=2,this.sender=(e==null?void 0:e.sender)??null,this.expiration=(e==null?void 0:e.expiration)??null,this.inputs=(e==null?void 0:e.inputs)??[],this.commands=(e==null?void 0:e.commands)??[],this.gasData=(e==null?void 0:e.gasData)??{budget:null,price:null,owner:null,payment:null}}static fromKindBytes(e){const s=J.TransactionKind.parse(e).ProgrammableTransaction;if(!s)throw new Error("Unable to deserialize from bytes.");return bt.restore({version:2,sender:null,expiration:null,gasData:{budget:null,owner:null,payment:null,price:null},inputs:s.inputs,commands:s.commands})}static fromBytes(e){const n=J.TransactionData.parse(e),s=n==null?void 0:n.V1,r=s.kind.ProgrammableTransaction;if(!s||!r)throw new Error("Unable to deserialize from bytes.");return bt.restore({version:2,sender:s.sender,expiration:s.expiration,gasData:s.gasData,inputs:r.inputs,commands:r.commands})}static restore(e){return e.version===2?new bt(Ue(Gi,e)):new bt(Ue(Gi,Yy(e)))}static getDigestFromBytes(e){const n=um("TransactionData",e);return Ro(n)}get gasConfig(){return this.gasData}set gasConfig(e){this.gasData=e}build({maxSizeBytes:e=1/0,overrides:n,onlyTransactionKind:s}={}){const r=this.inputs,i=this.commands,o={ProgrammableTransaction:{inputs:r,commands:i}};if(s)return J.TransactionKind.serialize(o,{maxSize:e}).toBytes();const a=(n==null?void 0:n.expiration)??this.expiration,c=(n==null?void 0:n.sender)??this.sender,l={...this.gasData,...n==null?void 0:n.gasConfig,...n==null?void 0:n.gasData};if(!c)throw new Error("Missing transaction sender");if(!l.budget)throw new Error("Missing gas budget");if(!l.payment)throw new Error("Missing gas payment");if(!l.price)throw new Error("Missing gas price");const u={sender:yl(c),expiration:a||{None:!0},gasData:{payment:l.payment,owner:yl(this.gasData.owner??c),price:BigInt(l.price),budget:BigInt(l.budget)},kind:{ProgrammableTransaction:{inputs:r,commands:i}}};return J.TransactionData.serialize({V1:u},{maxSize:e}).toBytes()}addInput(e,n){const s=this.inputs.length;return this.inputs.push(n),{Input:s,type:e,$kind:"Input"}}getInputUses(e,n){this.mapArguments((s,r)=>(s.$kind==="Input"&&s.Input===e&&n(s,r),s))}mapCommandArguments(e,n){const s=this.commands[e];switch(s.$kind){case"MoveCall":s.MoveCall.arguments=s.MoveCall.arguments.map(i=>n(i,s,e));break;case"TransferObjects":s.TransferObjects.objects=s.TransferObjects.objects.map(i=>n(i,s,e)),s.TransferObjects.address=n(s.TransferObjects.address,s,e);break;case"SplitCoins":s.SplitCoins.coin=n(s.SplitCoins.coin,s,e),s.SplitCoins.amounts=s.SplitCoins.amounts.map(i=>n(i,s,e));break;case"MergeCoins":s.MergeCoins.destination=n(s.MergeCoins.destination,s,e),s.MergeCoins.sources=s.MergeCoins.sources.map(i=>n(i,s,e));break;case"MakeMoveVec":s.MakeMoveVec.elements=s.MakeMoveVec.elements.map(i=>n(i,s,e));break;case"Upgrade":s.Upgrade.ticket=n(s.Upgrade.ticket,s,e);break;case"$Intent":const r=s.$Intent.inputs;s.$Intent.inputs={};for(const[i,o]of Object.entries(r))s.$Intent.inputs[i]=Array.isArray(o)?o.map(a=>n(a,s,e)):n(o,s,e);break;case"Publish":break;default:throw new Error(`Unexpected transaction kind: ${s.$kind}`)}}mapArguments(e){for(const n of this.commands.keys())this.mapCommandArguments(n,e)}replaceCommand(e,n,s=e){if(!Array.isArray(n)){this.commands[e]=n;return}const r=n.length-1;this.commands.splice(e,1,...n),r!==0&&this.mapArguments((i,o,a)=>{if(a<e+n.length)return i;switch(i.$kind){case"Result":i.Result===e&&(i.Result=s),i.Result>e&&(i.Result+=r);break;case"NestedResult":i.NestedResult[0]===e&&(i.NestedResult[0]=s),i.NestedResult[0]>e&&(i.NestedResult[0]+=r);break}return i})}getDigest(){const e=this.build({onlyTransactionKind:!1});return bt.getDigestFromBytes(e)}snapshot(){return Ue(Gi,this)}shallowClone(){return new bt({version:this.version,sender:this.sender,expiration:this.expiration,gasData:{...this.gasData},inputs:[...this.inputs],commands:[...this.commands]})}}function ml(t){if(typeof t=="string")return ce(t);if(t.Object)return t.Object.ImmOrOwnedObject?ce(t.Object.ImmOrOwnedObject.objectId):t.Object.Receiving?ce(t.Object.Receiving.objectId):ce(t.Object.SharedObject.objectId);if(t.UnresolvedObject)return ce(t.UnresolvedObject.objectId)}var nh=t=>{throw TypeError(t)},nu=(t,e,n)=>e.has(t)||nh("Cannot "+n),D=(t,e,n)=>(nu(t,e,"read from private field"),n?n.call(t):e.get(t)),un=(t,e,n)=>e.has(t)?nh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),_e=(t,e,n,s)=>(nu(t,e,"write to private field"),e.set(t,n),n),We=(t,e,n)=>(nu(t,e,"access private method"),n),Es,Ds,kn,wn,Ut,Bt,Ht,os,X,Re,sh,Hi,Yi,Qi,vo,Ya,su,rh,ih;function ya(t,e=1/0){const n={$kind:"Result",get Result(){return typeof t=="function"?t():t}},s=[],r=i=>s[i]??(s[i]={$kind:"NestedResult",get NestedResult(){return[typeof t=="function"?t():t,i]}});return new Proxy(n,{set(){throw new Error("The transaction result is a proxy, and does not support setting properties directly")},get(i,o){if(o in i)return Reflect.get(i,o);if(o===Symbol.iterator)return function*(){let c=0;for(;c<e;)yield r(c),c++};if(typeof o=="symbol")return;const a=parseInt(o,10);if(!(Number.isNaN(a)||a<0))return r(a)}})}const oh=Symbol.for("@mysten/transaction");function ah(t){return!!t&&typeof t=="object"&&t[oh]===!0}const wl={buildPlugins:new Map,serializationPlugins:new Map},ma=Symbol.for("@mysten/transaction/registry");function Ar(){try{const t=globalThis;return t[ma]||(t[ma]=wl),t[ma]}catch{return wl}}const ch=class Qa{constructor(){un(this,Re),un(this,Es),un(this,Ds),un(this,kn,new Map),un(this,wn,[]),un(this,Ut,[]),un(this,Bt,new Set),un(this,Ht,new Set),un(this,os,new Map),un(this,X),this.object=am(n=>{var i,o;if(typeof n=="function")return this.object(this.add(n));if(typeof n=="object"&&Ka(Oe,n))return n;const s=ml(n),r=D(this,X).inputs.find(a=>s===ml(a));return(i=r==null?void 0:r.Object)!=null&&i.SharedObject&&typeof n=="object"&&((o=n.Object)!=null&&o.SharedObject)&&(r.Object.SharedObject.mutable=r.Object.SharedObject.mutable||n.Object.SharedObject.mutable),r?{$kind:"Input",Input:D(this,X).inputs.indexOf(r),type:"object"}:We(this,Re,Yi).call(this,"object",typeof n=="string"?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:ce(n)}}:n)});const e=Ar();_e(this,X,new bt),_e(this,Ds,[...e.buildPlugins.values()]),_e(this,Es,[...e.serializationPlugins.values()])}static fromKind(e){const n=new Qa;return _e(n,X,bt.fromKindBytes(typeof e=="string"?we(e):e)),_e(n,wn,D(n,X).inputs.slice()),_e(n,Ut,D(n,X).commands.slice()),_e(n,Bt,new Set(D(n,Ut).map((s,r)=>r))),n}static from(e){const n=new Qa;return ah(e)?_e(n,X,new bt(e.getData())):typeof e!="string"||!e.startsWith("{")?_e(n,X,bt.fromBytes(typeof e=="string"?we(e):e)):_e(n,X,bt.restore(JSON.parse(e))),_e(n,wn,D(n,X).inputs.slice()),_e(n,Ut,D(n,X).commands.slice()),_e(n,Bt,new Set(D(n,Ut).map((s,r)=>r))),n}static registerGlobalSerializationPlugin(e,n){Ar().serializationPlugins.set(e,n??e)}static unregisterGlobalSerializationPlugin(e){Ar().serializationPlugins.delete(e)}static registerGlobalBuildPlugin(e,n){Ar().buildPlugins.set(e,n??e)}static unregisterGlobalBuildPlugin(e){Ar().buildPlugins.delete(e)}addSerializationPlugin(e){D(this,Es).push(e)}addBuildPlugin(e){D(this,Ds).push(e)}addIntentResolver(e,n){if(D(this,kn).has(e)&&D(this,kn).get(e)!==n)throw new Error(`Intent resolver for ${e} already exists`);D(this,kn).set(e,n)}setSender(e){D(this,X).sender=e}setSenderIfNotSet(e){D(this,X).sender||(D(this,X).sender=e)}setExpiration(e){D(this,X).expiration=e?Ue(Xf,e):null}setGasPrice(e){D(this,X).gasConfig.price=String(e)}setGasBudget(e){D(this,X).gasConfig.budget=String(e)}setGasBudgetIfNotSet(e){D(this,X).gasData.budget==null&&(D(this,X).gasConfig.budget=String(e))}setGasOwner(e){D(this,X).gasConfig.owner=e}setGasPayment(e){D(this,X).gasConfig.payment=e.map(n=>Ue(ps,n))}get blockData(){return pl(D(this,X).snapshot())}getData(){return D(this,X).snapshot()}get[oh](){return!0}get pure(){return Object.defineProperty(this,"pure",{enumerable:!1,value:cm(e=>$c(e)?We(this,Re,Yi).call(this,"pure",{$kind:"Pure",Pure:{bytes:e.toBase64()}}):We(this,Re,Yi).call(this,"pure",Ka(dl,e)?Ue(dl,e):e instanceof Uint8Array?Lt.Pure(e):{$kind:"UnresolvedPure",UnresolvedPure:{value:e}}))}),this.pure}get gas(){return{$kind:"GasCoin",GasCoin:!0}}objectRef(...e){return this.object(Lt.ObjectRef(...e))}receivingRef(...e){return this.object(Lt.ReceivingRef(...e))}sharedObjectRef(...e){return this.object(Lt.SharedObjectRef(...e))}add(e){if(typeof e=="function"){if(D(this,os).has(e))return D(this,os).get(e);const n=We(this,Re,sh).call(this),s=e(n);if(!(s&&typeof s=="object"&&"then"in s))return _e(this,Bt,D(n,Bt)),D(this,os).set(e,s),s;const r=We(this,Re,Hi).call(this,{$kind:"$Intent",$Intent:{name:"AsyncTransactionThunk",inputs:{},data:{resultIndex:D(this,X).commands.length,result:null}}});D(this,Ht).add(Promise.resolve(s).then(o=>{r.$Intent.data.result=o}));const i=ya(()=>r.$Intent.data.resultIndex);return D(this,os).set(e,i),i}else We(this,Re,Hi).call(this,e);return ya(D(this,X).commands.length-1)}splitCoins(e,n){const s=_t.SplitCoins(typeof e=="string"?this.object(e):We(this,Re,vo).call(this,e),n.map(r=>typeof r=="number"||typeof r=="bigint"||typeof r=="string"?this.pure.u64(r):We(this,Re,Qi).call(this,r)));return We(this,Re,Hi).call(this,s),ya(D(this,X).commands.length-1,n.length)}mergeCoins(e,n){return this.add(_t.MergeCoins(this.object(e),n.map(s=>this.object(s))))}publish({modules:e,dependencies:n}){return this.add(_t.Publish({modules:e,dependencies:n}))}upgrade({modules:e,dependencies:n,package:s,ticket:r}){return this.add(_t.Upgrade({modules:e,dependencies:n,package:s,ticket:this.object(r)}))}moveCall({arguments:e,...n}){return this.add(_t.MoveCall({...n,arguments:e==null?void 0:e.map(s=>We(this,Re,Qi).call(this,s))}))}transferObjects(e,n){return this.add(_t.TransferObjects(e.map(s=>this.object(s)),typeof n=="string"?this.pure.address(n):We(this,Re,Qi).call(this,n)))}makeMoveVec({type:e,elements:n}){return this.add(_t.MakeMoveVec({type:e,elements:n.map(s=>this.object(s))}))}serialize(){return JSON.stringify(pl(D(this,X).snapshot()))}async toJSON(e={}){await this.prepareForSerialization(e);const n=this.isFullyResolved();return JSON.stringify(Ue(sm,n?{...D(this,X).snapshot(),digest:D(this,X).getDigest()}:D(this,X).snapshot()),(s,r)=>typeof r=="bigint"?r.toString():r,2)}async sign(e){const{signer:n,...s}=e,r=await this.build(s);return n.signTransaction(r)}isFullyResolved(){return!(!D(this,X).sender||D(this,Ht).size>0||D(this,X).commands.some(e=>e.$Intent)||th(D(this,X),{}))}async build(e={}){return await this.prepareForSerialization(e),await We(this,Re,Ya).call(this,e),D(this,X).build({onlyTransactionKind:e.onlyTransactionKind})}async getDigest(e={}){return await We(this,Re,Ya).call(this,e),D(this,X).getDigest()}async prepareForSerialization(e){var r;await We(this,Re,rh).call(this),We(this,Re,ih).call(this);const n=new Set;for(const i of D(this,X).commands)i.$Intent&&n.add(i.$Intent.name);const s=[...D(this,Es)];for(const i of n)if(!((r=e.supportedIntents)!=null&&r.includes(i))){if(!D(this,kn).has(i))throw new Error(`Missing intent resolver for ${i}`);s.push(D(this,kn).get(i))}await We(this,Re,su).call(this,s,e)}};Es=new WeakMap;Ds=new WeakMap;kn=new WeakMap;wn=new WeakMap;Ut=new WeakMap;Bt=new WeakMap;Ht=new WeakMap;os=new WeakMap;X=new WeakMap;Re=new WeakSet;sh=function(){const t=new ch;return _e(t,X,D(this,X)),_e(t,Es,D(this,Es)),_e(t,Ds,D(this,Ds)),_e(t,kn,D(this,kn)),_e(t,Ht,D(this,Ht)),_e(t,Bt,new Set(D(this,Bt))),_e(t,os,D(this,os)),D(this,wn).push(D(t,wn)),D(this,Ut).push(D(t,Ut)),t};Hi=function(t){const e=D(this,X).commands.length;return D(this,Ut).push(t),D(this,Bt).add(e),D(this,X).commands.push(t),D(this,X).mapCommandArguments(e,n=>{if(n.$kind==="Result"&&!D(this,Bt).has(n.Result))throw new Error(`Result { Result: ${n.Result} } is not available to use the current transaction`);if(n.$kind==="NestedResult"&&!D(this,Bt).has(n.NestedResult[0]))throw new Error(`Result { NestedResult: [${n.NestedResult[0]}, ${n.NestedResult[1]}] } is not available to use the current transaction`);if(n.$kind==="Input"&&n.Input>=D(this,X).inputs.length)throw new Error(`Input { Input: ${n.Input} } references an input that does not exist in the current transaction`);return n}),t};Yi=function(t,e){return D(this,wn).push(e),D(this,X).addInput(t,e)};Qi=function(t){return $c(t)?this.pure(t):We(this,Re,vo).call(this,t)};vo=function(t){if(typeof t=="function"){const e=this.add(t);return typeof e=="function"?We(this,Re,vo).call(this,e):Ue(Oe,e)}return Ue(Oe,t)};Ya=async function(t){if(!t.onlyTransactionKind&&!D(this,X).sender)throw new Error("Missing transaction sender");await We(this,Re,su).call(this,[...D(this,Ds),rm],t)};su=async function(t,e){const n=s=>{if(s>=t.length)return()=>{};const r=t[s];return async()=>{const i=n(s+1);let o=!1,a=!1;if(await r(D(this,X),e,async()=>{if(o)throw new Error(`next() was call multiple times in TransactionPlugin ${s}`);o=!0,await i(),a=!0}),!o)throw new Error(`next() was not called in TransactionPlugin ${s}`);if(!a)throw new Error(`next() was not awaited in TransactionPlugin ${s}`)}};await n(0)(),_e(this,wn,D(this,X).inputs.slice()),_e(this,Ut,D(this,X).commands.slice())};rh=async function(){for(;D(this,Ht).size>0;){const t=Promise.all(D(this,Ht));D(this,Ht).clear(),D(this,Ht).add(t),await t,D(this,Ht).delete(t)}};ih=function(){var o;const t=D(this,X).commands,e=D(this,X).inputs,n=D(this,Ut).flat(1/0),s=D(this,wn).flat(1/0);if(n.length!==t.length)throw new Error("Unexpected number of commands found in transaction data");if(s.length!==e.length)throw new Error("Unexpected number of inputs found in transaction data");const r=n.filter(a=>{var c;return((c=a.$Intent)==null?void 0:c.name)!=="AsyncTransactionThunk"});D(this,X).commands=r,D(this,X).inputs=s,_e(this,Ut,r),_e(this,wn,s),_e(this,Bt,new Set(r.map((a,c)=>c)));function i(a){var u;const c=t[a];if(((u=c.$Intent)==null?void 0:u.name)==="AsyncTransactionThunk"){const d=c.$Intent.data.result;if(d==null)throw new Error("AsyncTransactionThunk has not been resolved");return i(d.Result)}const l=r.indexOf(c);if(l===-1)throw new Error("Unable to find original index for command");return l}D(this,X).mapArguments(a=>{if(a.$kind==="Input"){const c=s.indexOf(e[a.Input]);if(c===-1)throw new Error("Input has not been resolved");return{...a,Input:c}}else if(a.$kind==="Result"){const c=i(a.Result);return{...a,Result:c}}else if(a.$kind==="NestedResult"){const c=i(a.NestedResult[0]);return{...a,NestedResult:[c,a.NestedResult[1]]}}return a});for(const[a,c]of t.entries())if(((o=c.$Intent)==null?void 0:o.name)==="AsyncTransactionThunk")try{c.$Intent.data.resultIndex=i(a)}catch{}};let hr=ch;function lm(t,e){const n=[];for(let s=0;s<t.length;s+=e)n.push(t.slice(s,s+e));return n}/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function So(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function uh(t,e){return Array.isArray(e)?e.length===0?!0:t?e.every(n=>typeof n=="string"):e.every(n=>Number.isSafeInteger(n)):!1}function dm(t){if(typeof t!="function")throw new Error("function expected");return!0}function Mo(t,e){if(typeof e!="string")throw new Error(`${t}: string expected`);return!0}function vr(t){if(!Number.isSafeInteger(t))throw new Error(`invalid integer: ${t}`)}function xo(t){if(!Array.isArray(t))throw new Error("array expected")}function Io(t,e){if(!uh(!0,e))throw new Error(`${t}: array of strings expected`)}function lh(t,e){if(!uh(!1,e))throw new Error(`${t}: array of numbers expected`)}function fm(...t){const e=i=>i,n=(i,o)=>a=>i(o(a)),s=t.map(i=>i.encode).reduceRight(n,e),r=t.map(i=>i.decode).reduce(n,e);return{encode:s,decode:r}}function hm(t){const e=typeof t=="string"?t.split(""):t,n=e.length;Io("alphabet",e);const s=new Map(e.map((r,i)=>[r,i]));return{encode:r=>(xo(r),r.map(i=>{if(!Number.isSafeInteger(i)||i<0||i>=n)throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${t}`);return e[i]})),decode:r=>(xo(r),r.map(i=>{Mo("alphabet.decode",i);const o=s.get(i);if(o===void 0)throw new Error(`Unknown letter: "${i}". Allowed: ${t}`);return o}))}}function pm(t=""){return Mo("join",t),{encode:e=>(Io("join.decode",e),e.join(t)),decode:e=>(Mo("join.decode",e),e.split(t))}}function gm(t,e="="){return vr(t),Mo("padding",e),{encode(n){for(Io("padding.encode",n);n.length*t%8;)n.push(e);return n},decode(n){Io("padding.decode",n);let s=n.length;if(s*t%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;s>0&&n[s-1]===e;s--)if((s-1)*t%8===0)throw new Error("padding: invalid, string has too much padding");return n.slice(0,s)}}}function Za(t,e,n){if(e<2)throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);if(xo(t),!t.length)return[];let s=0;const r=[],i=Array.from(t,a=>{if(vr(a),a<0||a>=e)throw new Error(`invalid integer: ${a}`);return a}),o=i.length;for(;;){let a=0,c=!0;for(let l=s;l<o;l++){const u=i[l],d=e*a,h=d+u;if(!Number.isSafeInteger(h)||d/e!==a||h-u!==d)throw new Error("convertRadix: carry overflow");const p=h/n;a=h%n;const y=Math.floor(p);if(i[l]=y,!Number.isSafeInteger(y)||y*n+a!==h)throw new Error("convertRadix: carry overflow");if(c)y?c=!1:s=l;else continue}if(r.push(a),c)break}for(let a=0;a<t.length-1&&t[a]===0;a++)r.push(0);return r.reverse()}const dh=(t,e)=>e===0?t:dh(e,t%e),_o=(t,e)=>t+(e-dh(t,e)),wa=(()=>{let t=[];for(let e=0;e<40;e++)t.push(2**e);return t})();function Ja(t,e,n,s){if(xo(t),e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(_o(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${_o(e,n)}`);let r=0,i=0;const o=wa[e],a=wa[n]-1,c=[];for(const l of t){if(vr(l),l>=o)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(r=r<<e|l,i+e>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);for(i+=e;i>=n;i-=n)c.push((r>>i-n&a)>>>0);const u=wa[i];if(u===void 0)throw new Error("invalid carry");r&=u-1}if(r=r<<n-i&a,!s&&i>=e)throw new Error("Excess padding");if(!s&&r>0)throw new Error(`Non-zero padding: ${r}`);return s&&i>0&&c.push(r>>>0),c}function bm(t){vr(t);const e=2**8;return{encode:n=>{if(!So(n))throw new Error("radix.encode input should be Uint8Array");return Za(Array.from(n),e,t)},decode:n=>(lh("radix.decode",n),Uint8Array.from(Za(n,t,e)))}}function ym(t,e=!1){if(vr(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(_o(8,t)>32||_o(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!So(n))throw new Error("radix2.encode input should be Uint8Array");return Ja(Array.from(n),8,t,!e)},decode:n=>(lh("radix2.decode",n),Uint8Array.from(Ja(n,t,8,e)))}}function mm(t,e){return vr(t),dm(e),{encode(n){if(!So(n))throw new Error("checksum.encode: input should be Uint8Array");const s=e(n).slice(0,t),r=new Uint8Array(n.length+t);return r.set(n),r.set(s,n.length),r},decode(n){if(!So(n))throw new Error("checksum.decode: input should be Uint8Array");const s=n.slice(0,-t),r=n.slice(-t),i=e(s).slice(0,t);for(let o=0;o<t;o++)if(i[o]!==r[o])throw new Error("Invalid checksum");return s}}}const Oi={alphabet:hm,chain:fm,checksum:mm,convertRadix:Za,convertRadix2:Ja,radix:bm,radix2:ym,join:pm,padding:gm};function wm(t){return Uint8Array.from(atob(t),e=>e.charCodeAt(0))}const vm="1.32.0",Sm="1.51.0",Mm={"-32700":"ParseError","-32701":"OversizedRequest","-32702":"OversizedResponse","-32600":"InvalidRequest","-32601":"MethodNotFound","-32602":"InvalidParams","-32603":"InternalError","-32604":"ServerBusy","-32000":"CallExecutionFailed","-32001":"UnknownError","-32003":"SubscriptionClosed","-32004":"SubscriptionClosedWithError","-32005":"BatchesNotSupported","-32006":"TooManySubscriptions","-32050":"TransientError","-32002":"TransactionExecutionClientError"};class fh extends Error{}class hh extends fh{constructor(e,n){super(e),this.code=n,this.type=Mm[n]??"ServerError"}}class xm extends fh{constructor(e,n,s){super(e),this.status=n,this.statusText=s}}var ph=t=>{throw TypeError(t)},ru=(t,e,n)=>e.has(t)||ph("Cannot "+n),Te=(t,e,n)=>(ru(t,e,"read from private field"),n?n.call(t):e.get(t)),Ms=(t,e,n)=>e.has(t)?ph("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),cr=(t,e,n,s)=>(ru(t,e,"write to private field"),e.set(t,n),n),gh=(t,e,n)=>(ru(t,e,"access private method"),n),Im=(t,e,n,s)=>({set _(r){cr(t,e,r)},get _(){return Te(t,e,s)}}),Zn,Wr,Dn,As,li,Ns,Eo,bh,yh;function _m(t){const e=new URL(t);return e.protocol=e.protocol.replace("http","ws"),e.toString()}const Em={WebSocketConstructor:typeof WebSocket<"u"?WebSocket:void 0,callTimeout:3e4,reconnectTimeout:3e3,maxReconnects:5};class Am{constructor(e,n={}){if(Ms(this,Eo),Ms(this,Zn,0),Ms(this,Wr,0),Ms(this,Dn,null),Ms(this,As,null),Ms(this,li,new Set),Ms(this,Ns,new Map),this.endpoint=e,this.options={...Em,...n},!this.options.WebSocketConstructor)throw new Error("Missing WebSocket constructor");this.endpoint.startsWith("http")&&(this.endpoint=_m(this.endpoint))}async makeRequest(e,n,s){const r=await gh(this,Eo,bh).call(this);return new Promise((i,o)=>{cr(this,Zn,Te(this,Zn)+1),Te(this,Ns).set(Te(this,Zn),{resolve:i,reject:o,timeout:setTimeout(()=>{Te(this,Ns).delete(Te(this,Zn)),o(new Error(`Request timeout: ${e}`))},this.options.callTimeout)}),s==null||s.addEventListener("abort",()=>{Te(this,Ns).delete(Te(this,Zn)),o(s.reason)}),r.send(JSON.stringify({jsonrpc:"2.0",id:Te(this,Zn),method:e,params:n}))}).then(({error:i,result:o})=>{if(i)throw new hh(i.message,i.code);return o})}async subscribe(e){const n=new Nm(e);return Te(this,li).add(n),await n.subscribe(this),()=>n.unsubscribe(this)}}Zn=new WeakMap;Wr=new WeakMap;Dn=new WeakMap;As=new WeakMap;li=new WeakMap;Ns=new WeakMap;Eo=new WeakSet;bh=function(){return Te(this,As)?Te(this,As):(cr(this,As,new Promise(t=>{var e;(e=Te(this,Dn))==null||e.close(),cr(this,Dn,new this.options.WebSocketConstructor(this.endpoint)),Te(this,Dn).addEventListener("open",()=>{cr(this,Wr,0),t(Te(this,Dn))}),Te(this,Dn).addEventListener("close",()=>{Im(this,Wr)._++,Te(this,Wr)<=this.options.maxReconnects&&setTimeout(()=>{gh(this,Eo,yh).call(this)},this.options.reconnectTimeout)}),Te(this,Dn).addEventListener("message",({data:n})=>{let s;try{s=JSON.parse(n)}catch(r){console.error(new Error(`Failed to parse RPC message: ${n}`,{cause:r}));return}if("id"in s&&s.id!=null&&Te(this,Ns).has(s.id)){const{resolve:r,timeout:i}=Te(this,Ns).get(s.id);clearTimeout(i),r(s)}else if("params"in s){const{params:r}=s;Te(this,li).forEach(i=>{i.subscriptionId===r.subscription&&r.subscription===i.subscriptionId&&i.onMessage(r.result)})}})})),Te(this,As))};yh=async function(){var t;return(t=Te(this,Dn))==null||t.close(),cr(this,As,null),Promise.allSettled([...Te(this,li)].map(e=>e.subscribe(this)))};class Nm{constructor(e){this.subscriptionId=null,this.subscribed=!1,this.input=e}onMessage(e){this.subscribed&&this.input.onMessage(e)}async unsubscribe(e){const{subscriptionId:n}=this;return this.subscribed=!1,n==null?!1:(this.subscriptionId=null,e.makeRequest(this.input.unsubscribe,[n]))}async subscribe(e){this.subscriptionId=null,this.subscribed=!0;const n=await e.makeRequest(this.input.method,this.input.params,this.input.signal);this.subscribed&&(this.subscriptionId=n)}}var mh=t=>{throw TypeError(t)},iu=(t,e,n)=>e.has(t)||mh("Cannot "+n),Dt=(t,e,n)=>(iu(t,e,"read from private field"),n?n.call(t):e.get(t)),ji=(t,e,n)=>e.has(t)?mh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Xa=(t,e,n,s)=>(iu(t,e,"write to private field"),e.set(t,n),n),Tm=(t,e,n)=>(iu(t,e,"access private method"),n),kr,Kt,qr,ec,wh;class tc{constructor(e){ji(this,ec),ji(this,kr,0),ji(this,Kt),ji(this,qr),Xa(this,Kt,e)}fetch(e,n){const s=Dt(this,Kt).fetch??fetch;if(!s)throw new Error("The current environment does not support fetch, you can provide a fetch implementation in the options for SuiHTTPTransport.");return s(e,n)}async request(e){var r,i;Xa(this,kr,Dt(this,kr)+1);const n=await this.fetch(((r=Dt(this,Kt).rpc)==null?void 0:r.url)??Dt(this,Kt).url,{method:"POST",signal:e.signal,headers:{"Content-Type":"application/json","Client-Sdk-Type":"typescript","Client-Sdk-Version":vm,"Client-Target-Api-Version":Sm,"Client-Request-Method":e.method,...(i=Dt(this,Kt).rpc)==null?void 0:i.headers},body:JSON.stringify({jsonrpc:"2.0",id:Dt(this,kr),method:e.method,params:e.params})});if(!n.ok)throw new xm(`Unexpected status code: ${n.status}`,n.status,n.statusText);const s=await n.json();if("error"in s&&s.error!=null)throw new hh(s.error.message,s.error.code);return s.result}async subscribe(e){const n=await Tm(this,ec,wh).call(this).subscribe(e);return e.signal&&(e.signal.throwIfAborted(),e.signal.addEventListener("abort",()=>{n()})),async()=>!!await n()}}kr=new WeakMap;Kt=new WeakMap;qr=new WeakMap;ec=new WeakSet;wh=function(){var t;if(!Dt(this,qr)){const e=Dt(this,Kt).WebSocketConstructor??WebSocket;if(!e)throw new Error("The current environment does not support WebSocket, you can provide a WebSocketConstructor in the options for SuiHTTPTransport.");Xa(this,qr,new Am(((t=Dt(this,Kt).websocket)==null?void 0:t.url)??Dt(this,Kt).url,{WebSocketConstructor:e,...Dt(this,Kt).websocket}))}return Dt(this,qr)};function Om(t){switch(t){case"mainnet":return"https://fullnode.mainnet.sui.io:443";case"testnet":return"https://fullnode.testnet.sui.io:443";case"devnet":return"https://fullnode.devnet.sui.io:443";case"localnet":return"http://127.0.0.1:9000";default:throw new Error(`Unknown network: ${t}`)}}var vh=t=>{throw TypeError(t)},Sh=(t,e,n)=>e.has(t)||vh("Cannot "+n),Ot=(t,e,n)=>(Sh(t,e,"read from private field"),e.get(t)),vl=(t,e,n)=>e.has(t)?vh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Sl=(t,e,n,s)=>(Sh(t,e,"write to private field"),e.set(t,n),n),Js,Ct;const jm=class Mh{constructor({prefix:e,cache:n}={}){vl(this,Js),vl(this,Ct),Sl(this,Js,e??[]),Sl(this,Ct,n??new Map)}read(e,n){const s=[Ot(this,Js),...e].join(":");if(Ot(this,Ct).has(s))return Ot(this,Ct).get(s);const r=n();return Ot(this,Ct).set(s,r),typeof r=="object"&&r!==null&&"then"in r?Promise.resolve(r).then(i=>(Ot(this,Ct).set(s,i),i)).catch(i=>{throw Ot(this,Ct).delete(s),i}):r}clear(e){const n=[...Ot(this,Js),...e??[]].join(":");if(!n){Ot(this,Ct).clear();return}for(const s of Ot(this,Ct).keys())s.startsWith(n)&&Ot(this,Ct).delete(s)}scope(e){return new Mh({prefix:[...Ot(this,Js),...Array.isArray(e)?e:[e]],cache:Ot(this,Ct)})}};Js=new WeakMap;Ct=new WeakMap;let Cm=jm;class ou{constructor({network:e}){this.cache=new Cm,this.network=e}$extend(...e){return Object.create(this,Object.fromEntries(e.map(n=>{if("experimental_asClientExtension"in n){const{name:s,register:r}=n.experimental_asClientExtension();return[s,{value:r(this)}]}return[n.name,{value:n.register(this)}]})))}}class xh extends ou{constructor(){super(...arguments),this.core=this}async getObject(e){const{objectId:n}=e,{objects:[s]}=await this.getObjects({objectIds:[n],signal:e.signal});if(s instanceof Error)throw s;return{object:s}}async getDynamicField(e){const n=Qf(e.parentId,Gt.parseFromStr(e.name.type),e.name.bcs),{objects:[s]}=await this.getObjects({objectIds:[n],signal:e.signal});if(s instanceof Error)throw s;const r=Fc(s.type),i=await s.content;return{dynamicField:{id:s.id,digest:s.digest,version:s.version,type:s.type,name:{type:typeof r.typeParams[0]=="string"?r.typeParams[0]:ai(r.typeParams[0]),bcs:e.name.bcs},value:{type:typeof r.typeParams[1]=="string"?r.typeParams[1]:ai(r.typeParams[1]),bcs:i.slice(mr+e.name.bcs.length)}}}}async waitForTransaction({signal:e,timeout:n=60*1e3,...s}){const r=e?AbortSignal.any([AbortSignal.timeout(n),e]):AbortSignal.timeout(n),i=new Promise((o,a)=>{r.addEventListener("abort",()=>a(r.reason))});for(i.catch(()=>{});;){r.throwIfAborted();try{return await this.getTransaction({...s,signal:r})}catch{await Promise.race([new Promise(a=>setTimeout(a,2e3)),i])}}}}class km extends Error{}class yn extends km{constructor(e,n){super(n),this.code=e}static fromResponse(e,n){switch(e.code){case"notExists":return new yn(e.code,`Object ${e.object_id} does not exist`);case"dynamicFieldNotFound":return new yn(e.code,`Dynamic field not found for object ${e.parent_object_id}`);case"deleted":return new yn(e.code,`Object ${e.object_id} has been deleted`);case"displayError":return new yn(e.code,`Display error: ${e.error}`);case"unknown":default:return new yn(e.code,`Unknown error while loading object${n?` ${n}`:""}`)}}}function Ih(t){return{...bt.fromBytes(t).snapshot(),bcs:t}}function _h(t){const e=J.TransactionEffects.parse(t);switch(e.$kind){case"V1":return Dm({effects:e.V1});case"V2":return Um({bytes:t,effects:e.V2});default:throw new Error(`Unknown transaction effects version: ${e.$kind}`)}}function Dm(t){throw new Error("V1 effects are not supported yet")}function Um({bytes:t,effects:e}){const n=e.changedObjects.map(([s,r])=>{var i,o,a,c,l,u;return{id:s,inputState:r.inputState.$kind==="Exist"?"Exists":"DoesNotExist",inputVersion:((i=r.inputState.Exist)==null?void 0:i[0][0])??null,inputDigest:((o=r.inputState.Exist)==null?void 0:o[0][1])??null,inputOwner:((a=r.inputState.Exist)==null?void 0:a[1])??null,outputState:r.outputState.$kind==="NotExist"?"DoesNotExist":r.outputState.$kind,outputVersion:r.outputState.$kind==="PackageWrite"?(c=r.outputState.PackageWrite)==null?void 0:c[0]:r.outputState.ObjectWrite?e.lamportVersion:null,outputDigest:r.outputState.$kind==="PackageWrite"?(l=r.outputState.PackageWrite)==null?void 0:l[1]:((u=r.outputState.ObjectWrite)==null?void 0:u[0])??null,outputOwner:r.outputState.ObjectWrite?r.outputState.ObjectWrite[1]:null,idOperation:r.idOperation.$kind}});return{bcs:t,digest:e.transactionDigest,version:2,status:e.status.$kind==="Success"?{success:!0,error:null}:{success:!1,error:e.status.Failed.error.$kind},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:e.gasObjectIndex===null?null:n[e.gasObjectIndex]??null,eventsDigest:e.eventsDigest,dependencies:e.dependencies,lamportVersion:e.lamportVersion,changedObjects:n,unchangedSharedObjects:e.unchangedSharedObjects.map(([s,r])=>({kind:r.$kind,objectId:s,version:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[0]:r[r.$kind],digest:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[1]:null})),auxiliaryDataDigest:e.auxDataDigest}}const Bm=50,Lm=1000n,zm=5e10;function Pm(t){return async function(n,s,r){return await Wm(n,t),await Vm(n,t),s.onlyTransactionKind||(await Rm(n,t),await $m(n,t),await Fm(n,t)),await r()}}async function Rm(t,e){t.gasConfig.price||(t.gasConfig.price=String(await e.getReferenceGasPrice()))}async function $m(t,e){if(t.gasConfig.budget)return;const n=await e.dryRunTransactionBlock({transactionBlock:t.build({overrides:{gasData:{budget:String(zm),payment:[]}}})});if(n.effects.status.status!=="success")throw new Error(`Dry run failed, could not automatically determine a budget: ${n.effects.status.error}`,{cause:n});const s=Lm*BigInt(t.gasConfig.price||1n),r=BigInt(n.effects.gasUsed.computationCost)+s,i=r+BigInt(n.effects.gasUsed.storageCost)-BigInt(n.effects.gasUsed.storageRebate);t.gasConfig.budget=String(i>r?i:r)}async function Fm(t,e){if(!t.gasConfig.payment){const s=(await e.getCoins({owner:t.gasConfig.owner||t.sender,coinType:K0})).data.filter(r=>!t.inputs.find(o=>{var a;return(a=o.Object)!=null&&a.ImmOrOwnedObject?r.coinObjectId===o.Object.ImmOrOwnedObject.objectId:!1})).map(r=>({objectId:r.coinObjectId,digest:r.digest,version:r.version}));if(!s.length)throw new Error("No valid gas coins found for the transaction.");t.gasConfig.payment=s.map(r=>Ue(ps,r))}}async function Vm(t,e){const n=t.inputs.filter(u=>{var d;return u.UnresolvedObject&&!(u.UnresolvedObject.version||(d=u.UnresolvedObject)!=null&&d.initialSharedVersion)}),s=[...new Set(n.map(u=>Ln(u.UnresolvedObject.objectId)))],r=s.length?s0(s,Bm):[],i=(await Promise.all(r.map(u=>e.multiGetObjects({ids:u,options:{showOwner:!0}})))).flat(),o=new Map(s.map((u,d)=>[u,i[d]])),a=Array.from(o).filter(([u,d])=>d.error).map(([u,d])=>JSON.stringify(d.error));if(a.length)throw new Error(`The following input objects are invalid: ${a.join(", ")}`);const c=i.map(u=>{if(u.error||!u.data)throw new Error(`Failed to fetch object: ${u.error}`);const d=u.data.owner,h=d&&typeof d=="object"&&"Shared"in d?d.Shared.initial_shared_version:null;return{objectId:u.data.objectId,digest:u.data.digest,version:u.data.version,initialSharedVersion:h}}),l=new Map(s.map((u,d)=>[u,c[d]]));for(const[u,d]of t.inputs.entries()){if(!d.UnresolvedObject)continue;let h;const p=ce(d.UnresolvedObject.objectId),y=l.get(p);d.UnresolvedObject.initialSharedVersion??(y==null?void 0:y.initialSharedVersion)?h=Lt.SharedObjectRef({objectId:p,initialSharedVersion:d.UnresolvedObject.initialSharedVersion||(y==null?void 0:y.initialSharedVersion),mutable:qm(t,u)}):Km(t,u)&&(h=Lt.ReceivingRef({objectId:p,digest:d.UnresolvedObject.digest??(y==null?void 0:y.digest),version:d.UnresolvedObject.version??(y==null?void 0:y.version)})),t.inputs[t.inputs.indexOf(d)]=h??Lt.ObjectRef({objectId:p,digest:d.UnresolvedObject.digest??(y==null?void 0:y.digest),version:d.UnresolvedObject.version??(y==null?void 0:y.version)})}}async function Wm(t,e){const{inputs:n,commands:s}=t,r=[],i=new Set;s.forEach(a=>{if(a.MoveCall){if(a.MoveCall._argumentTypes)return;if(a.MoveCall.arguments.map(u=>u.$kind==="Input"?t.inputs[u.Input]:null).some(u=>(u==null?void 0:u.UnresolvedPure)||(u==null?void 0:u.UnresolvedObject))){const u=`${a.MoveCall.package}::${a.MoveCall.module}::${a.MoveCall.function}`;i.add(u),r.push(a.MoveCall)}}});const o=new Map;i.size>0&&await Promise.all([...i].map(async a=>{const[c,l,u]=a.split("::"),d=await e.getNormalizedMoveFunction({package:c,module:l,function:u});o.set(a,d.parameters.map(h=>Sy(h)))})),r.length&&await Promise.all(r.map(async a=>{const c=o.get(`${a.package}::${a.module}::${a.function}`);if(!c)return;const u=c.length>0&&vy(c.at(-1))?c.slice(0,c.length-1):c;a._argumentTypes=u})),s.forEach(a=>{if(!a.MoveCall)return;const c=a.MoveCall,l=`${c.package}::${c.module}::${c.function}`,u=c._argumentTypes;if(u){if(u.length!==a.MoveCall.arguments.length)throw new Error(`Incorrect number of arguments for ${l}`);u.forEach((d,h)=>{var U,A;const p=c.arguments[h];if(p.$kind!=="Input")return;const y=n[p.Input];if(!y.UnresolvedPure&&!y.UnresolvedObject)return;const m=((U=y.UnresolvedPure)==null?void 0:U.value)??((A=y.UnresolvedObject)==null?void 0:A.objectId),w=qa(d.body);if(w){p.type="pure",n[n.indexOf(y)]=Lt.Pure(w.serialize(m));return}if(typeof m!="string")throw new Error(`Expect the argument to be an object id string, got ${JSON.stringify(m,null,2)}`);p.type="object";const x=y.UnresolvedPure?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:m}}:y;n[p.Input]=x})}})}function qm(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=r.MoveCall._argumentTypes[i].ref!=="&"||n}(r.$kind==="MakeMoveVec"||r.$kind==="MergeCoins"||r.$kind==="SplitCoins")&&(n=!0)}),n}function Km(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=Gm(r.MoveCall._argumentTypes[i])||n}}),n}function Gm(t){return typeof t.body!="object"||!("datatype"in t.body)?!1:t.body.datatype.package==="0x2"&&t.body.datatype.module==="transfer"&&t.body.datatype.type==="Receiving"}var Eh=t=>{throw TypeError(t)},Ah=(t,e,n)=>e.has(t)||Eh("Cannot "+n),St=(t,e,n)=>(Ah(t,e,"read from private field"),n?n.call(t):e.get(t)),Hm=(t,e,n)=>e.has(t)?Eh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ym=(t,e,n,s)=>(Ah(t,e,"write to private field"),e.set(t,n),n),et;class Qm extends xh{constructor(e){super({network:e.network}),Hm(this,et),Ym(this,et,e)}async getObjects(e){const n=lm(e.objectIds,50),s=[];for(const r of n){const i=await St(this,et).multiGetObjects({ids:r,options:{showOwner:!0,showType:!0,showBcs:!0},signal:e.signal});for(const[o,a]of i.entries())a.error?s.push(yn.fromResponse(a.error,r[o])):s.push(Ml(a.data))}return{objects:s}}async getOwnedObjects(e){const n=await St(this,et).getOwnedObjects({owner:e.address,limit:e.limit,cursor:e.cursor,options:{showOwner:!0,showType:!0,showBcs:!0},signal:e.signal});return{objects:n.data.map(s=>{if(s.error)throw yn.fromResponse(s.error);return Ml(s.data)}),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getCoins(e){const n=await St(this,et).getCoins({owner:e.address,coinType:e.coinType,limit:e.limit,cursor:e.cursor,signal:e.signal});return{objects:n.data.map(s=>({id:s.coinObjectId,version:s.version,digest:s.digest,balance:s.balance,type:`0x2::coin::Coin<${s.coinType}>`,content:Promise.resolve(Xm.serialize({id:s.coinObjectId,balance:{value:s.balance}}).toBytes()),owner:{$kind:"ObjectOwner",ObjectOwner:e.address}})),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getBalance(e){const n=await St(this,et).getBalance({owner:e.address,coinType:e.coinType,signal:e.signal});return{balance:{coinType:n.coinType,balance:n.totalBalance}}}async getAllBalances(e){return{balances:(await St(this,et).getAllBalances({owner:e.address,signal:e.signal})).map(s=>({coinType:s.coinType,balance:s.totalBalance})),hasNextPage:!1,cursor:null}}async getTransaction(e){const n=await St(this,et).getTransactionBlock({digest:e.digest,options:{showRawInput:!0,showObjectChanges:!0,showRawEffects:!0,showEvents:!0,showEffects:!0},signal:e.signal});return{transaction:xl(n)}}async executeTransaction(e){const n=await St(this,et).executeTransactionBlock({transactionBlock:e.transaction,signature:e.signatures,options:{showRawEffects:!0,showEvents:!0,showObjectChanges:!0,showRawInput:!0,showEffects:!0},signal:e.signal});return{transaction:xl(n)}}async dryRunTransaction(e){const n=hr.from(e.transaction),s=await St(this,et).dryRunTransactionBlock({transactionBlock:e.transaction,signal:e.signal}),{effects:r,objectTypes:i}=Zm({effects:s.effects,objectChanges:s.objectChanges});return{transaction:{digest:await n.getDigest(),epoch:null,effects:r,objectTypes:Promise.resolve(i),signatures:[],transaction:Ih(e.transaction)}}}async getReferenceGasPrice(e){const n=await St(this,et).getReferenceGasPrice({signal:e==null?void 0:e.signal});return{referenceGasPrice:String(n)}}async getDynamicFields(e){const n=await St(this,et).getDynamicFields({parentId:e.parentId,limit:e.limit,cursor:e.cursor});return{dynamicFields:n.data.map(s=>({id:s.objectId,type:s.objectType,name:{type:s.name.type,bcs:we(s.bcsName)}})),hasNextPage:n.hasNextPage,cursor:n.nextCursor}}async verifyZkLoginSignature(e){const n=await St(this,et).verifyZkLoginSignature({bytes:e.bytes,signature:e.signature,intentScope:e.intentScope,author:e.author});return{success:n.success,errors:n.errors}}resolveNameServiceNames(e){return St(this,et).resolveNameServiceNames(e)}resolveTransactionPlugin(){return Pm(St(this,et))}}et=new WeakMap;function Ml(t){var e;return{id:t.objectId,version:t.version,digest:t.digest,type:t.type,content:Promise.resolve(((e=t.bcs)==null?void 0:e.dataType)==="moveObject"?we(t.bcs.bcsBytes):new Uint8Array),owner:Xs(t.owner)}}function Xs(t){if(t==="Immutable")return{$kind:"Immutable",Immutable:!0};if("ConsensusV2"in t)return{$kind:"ConsensusV2",ConsensusV2:{authenticator:{$kind:"SingleOwner",SingleOwner:t.ConsensusV2.authenticator.SingleOwner},startVersion:t.ConsensusV2.start_version}};if("AddressOwner"in t)return{$kind:"AddressOwner",AddressOwner:t.AddressOwner};if("ObjectOwner"in t)return{$kind:"ObjectOwner",ObjectOwner:t.ObjectOwner};if("Shared"in t)return{$kind:"Shared",Shared:{initialSharedVersion:t.Shared.initial_shared_version}};throw new Error(`Unknown owner type: ${JSON.stringify(t)}`)}function xl(t){var i,o;const e=J.SenderSignedData.parse(we(t.rawTransaction))[0],n={};(i=t.objectChanges)==null||i.forEach(a=>{a.type!=="published"&&(n[a.objectId]=a.objectType)});const s=J.TransactionData.serialize(e.intentMessage.value).toBytes(),r=bt.restore({version:2,sender:e.intentMessage.value.V1.sender,expiration:e.intentMessage.value.V1.expiration,gasData:e.intentMessage.value.V1.gasData,inputs:e.intentMessage.value.V1.kind.ProgrammableTransaction.inputs,commands:e.intentMessage.value.V1.kind.ProgrammableTransaction.commands});return{digest:t.digest,epoch:((o=t.effects)==null?void 0:o.executedEpoch)??null,effects:_h(new Uint8Array(t.rawEffects)),objectTypes:Promise.resolve(n),transaction:{...r,bcs:s},signatures:e.txSignatures}}function Zm({bytes:t,effects:e,objectChanges:n}){var o;const s=[],r=[],i={};return n==null||n.forEach(a=>{var c,l,u,d;switch(a.type){case"published":s.push({id:a.packageId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"PackageWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:null,idOperation:"Created"});break;case"transferred":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:a.digest,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:Xs(a.recipient),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"mutated":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.previousVersion,inputDigest:null,inputOwner:Xs(a.owner),outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:Xs(a.owner),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"deleted":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:((l=(c=e.deleted)==null?void 0:c.find(h=>h.objectId===a.objectId))==null?void 0:l.digest)??null,inputOwner:null,outputState:"DoesNotExist",outputVersion:null,outputDigest:null,outputOwner:null,idOperation:"Deleted"}),i[a.objectId]=a.objectType;break;case"wrapped":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:null,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:((d=(u=e.wrapped)==null?void 0:u.find(h=>h.objectId===a.objectId))==null?void 0:d.digest)??null,outputOwner:{$kind:"ObjectOwner",ObjectOwner:a.sender},idOperation:"None"}),i[a.objectId]=a.objectType;break;case"created":s.push({id:a.objectId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:Xs(a.owner),idOperation:"Created"}),i[a.objectId]=a.objectType;break}}),{objectTypes:i,effects:{bcs:t??null,digest:e.transactionDigest,version:2,status:e.status.status==="success"?{success:!0,error:null}:{success:!1,error:e.status.error},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:{id:(o=e.gasObject)==null?void 0:o.reference.objectId,inputState:"Exists",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:e.gasObject.reference.version,outputDigest:e.gasObject.reference.digest,outputOwner:Xs(e.gasObject.owner),idOperation:"None"},eventsDigest:e.eventsDigest??null,dependencies:e.dependencies??[],lamportVersion:e.gasObject.reference.version,changedObjects:s,unchangedSharedObjects:r,auxiliaryDataDigest:null}}}const Jm=J.struct("Balance",{value:J.u64()}),Xm=J.struct("Coin",{id:J.Address,balance:Jm}),ew=Symbol.for("@mysten/SuiClient");class nc extends ou{constructor(e){super({network:e.network??"unknown"}),this.core=new Qm(this),this.jsonRpc=this,this.transport=e.transport??new tc({url:e.url})}get[ew](){return!0}async getRpcApiVersion({signal:e}={}){return(await this.transport.request({method:"rpc.discover",params:[],signal:e})).info.version}async getCoins(e){if(!e.owner||!Cn(ce(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getCoins",params:[e.owner,e.coinType,e.cursor,e.limit],signal:e.signal})}async getAllCoins(e){if(!e.owner||!Cn(ce(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllCoins",params:[e.owner,e.cursor,e.limit],signal:e.signal})}async getBalance(e){if(!e.owner||!Cn(ce(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getBalance",params:[e.owner,e.coinType],signal:e.signal})}async getAllBalances(e){if(!e.owner||!Cn(ce(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllBalances",params:[e.owner],signal:e.signal})}async getCoinMetadata(e){return await this.transport.request({method:"suix_getCoinMetadata",params:[e.coinType],signal:e.signal})}async getTotalSupply(e){return await this.transport.request({method:"suix_getTotalSupply",params:[e.coinType],signal:e.signal})}async call(e,n,{signal:s}={}){return await this.transport.request({method:e,params:n,signal:s})}async getMoveFunctionArgTypes(e){return await this.transport.request({method:"sui_getMoveFunctionArgTypes",params:[e.package,e.module,e.function],signal:e.signal})}async getNormalizedMoveModulesByPackage(e){return await this.transport.request({method:"sui_getNormalizedMoveModulesByPackage",params:[e.package],signal:e.signal})}async getNormalizedMoveModule(e){return await this.transport.request({method:"sui_getNormalizedMoveModule",params:[e.package,e.module],signal:e.signal})}async getNormalizedMoveFunction(e){return await this.transport.request({method:"sui_getNormalizedMoveFunction",params:[e.package,e.module,e.function],signal:e.signal})}async getNormalizedMoveStruct(e){return await this.transport.request({method:"sui_getNormalizedMoveStruct",params:[e.package,e.module,e.struct],signal:e.signal})}async getOwnedObjects(e){if(!e.owner||!Cn(ce(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getOwnedObjects",params:[e.owner,{filter:e.filter,options:e.options},e.cursor,e.limit],signal:e.signal})}async getObject(e){if(!e.id||!Ai(Ln(e.id)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"sui_getObject",params:[e.id,e.options],signal:e.signal})}async tryGetPastObject(e){return await this.transport.request({method:"sui_tryGetPastObject",params:[e.id,e.version,e.options],signal:e.signal})}async multiGetObjects(e){if(e.ids.forEach(s=>{if(!s||!Ai(Ln(s)))throw new Error(`Invalid Sui Object id ${s}`)}),e.ids.length!==new Set(e.ids).size)throw new Error(`Duplicate object ids in batch call ${e.ids}`);return await this.transport.request({method:"sui_multiGetObjects",params:[e.ids,e.options],signal:e.signal})}async queryTransactionBlocks(e){return await this.transport.request({method:"suix_queryTransactionBlocks",params:[{filter:e.filter,options:e.options},e.cursor,e.limit,(e.order||"descending")==="descending"],signal:e.signal})}async getTransactionBlock(e){if(!sl(e.digest))throw new Error("Invalid Transaction digest");return await this.transport.request({method:"sui_getTransactionBlock",params:[e.digest,e.options],signal:e.signal})}async multiGetTransactionBlocks(e){if(e.digests.forEach(s=>{if(!sl(s))throw new Error(`Invalid Transaction digest ${s}`)}),e.digests.length!==new Set(e.digests).size)throw new Error(`Duplicate digests in batch call ${e.digests}`);return await this.transport.request({method:"sui_multiGetTransactionBlocks",params:[e.digests,e.options],signal:e.signal})}async executeTransactionBlock({transactionBlock:e,signature:n,options:s,requestType:r,signal:i}){const o=await this.transport.request({method:"sui_executeTransactionBlock",params:[typeof e=="string"?e:Me(e),Array.isArray(n)?n:[n],s],signal:i});if(r==="WaitForLocalExecution")try{await this.waitForTransaction({digest:o.digest})}catch{}return o}async signAndExecuteTransaction({transaction:e,signer:n,...s}){let r;e instanceof Uint8Array?r=e:(e.setSenderIfNotSet(n.toSuiAddress()),r=await e.build({client:this}));const{signature:i,bytes:o}=await n.signTransaction(r);return this.executeTransactionBlock({transactionBlock:o,signature:i,...s})}async getTotalTransactionBlocks({signal:e}={}){const n=await this.transport.request({method:"sui_getTotalTransactionBlocks",params:[],signal:e});return BigInt(n)}async getReferenceGasPrice({signal:e}={}){const n=await this.transport.request({method:"suix_getReferenceGasPrice",params:[],signal:e});return BigInt(n)}async getStakes(e){if(!e.owner||!Cn(ce(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getStakes",params:[e.owner],signal:e.signal})}async getStakesByIds(e){return e.stakedSuiIds.forEach(n=>{if(!n||!Ai(Ln(n)))throw new Error(`Invalid Sui Stake id ${n}`)}),await this.transport.request({method:"suix_getStakesByIds",params:[e.stakedSuiIds],signal:e.signal})}async getLatestSuiSystemState({signal:e}={}){return await this.transport.request({method:"suix_getLatestSuiSystemState",params:[],signal:e})}async queryEvents(e){return await this.transport.request({method:"suix_queryEvents",params:[e.query,e.cursor,e.limit,(e.order||"descending")==="descending"],signal:e.signal})}async subscribeEvent(e){return this.transport.subscribe({method:"suix_subscribeEvent",unsubscribe:"suix_unsubscribeEvent",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async subscribeTransaction(e){return this.transport.subscribe({method:"suix_subscribeTransaction",unsubscribe:"suix_unsubscribeTransaction",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async devInspectTransactionBlock(e){var s,r;let n;if(ah(e.transactionBlock))e.transactionBlock.setSenderIfNotSet(e.sender),n=Me(await e.transactionBlock.build({client:this,onlyTransactionKind:!0}));else if(typeof e.transactionBlock=="string")n=e.transactionBlock;else if(e.transactionBlock instanceof Uint8Array)n=Me(e.transactionBlock);else throw new Error("Unknown transaction block format.");return(s=e.signal)==null||s.throwIfAborted(),await this.transport.request({method:"sui_devInspectTransactionBlock",params:[e.sender,n,(r=e.gasPrice)==null?void 0:r.toString(),e.epoch],signal:e.signal})}async dryRunTransactionBlock(e){return await this.transport.request({method:"sui_dryRunTransactionBlock",params:[typeof e.transactionBlock=="string"?e.transactionBlock:Me(e.transactionBlock)]})}async getDynamicFields(e){if(!e.parentId||!Ai(Ln(e.parentId)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"suix_getDynamicFields",params:[e.parentId,e.cursor,e.limit],signal:e.signal})}async getDynamicFieldObject(e){return await this.transport.request({method:"suix_getDynamicFieldObject",params:[e.parentId,e.name],signal:e.signal})}async getLatestCheckpointSequenceNumber({signal:e}={}){const n=await this.transport.request({method:"sui_getLatestCheckpointSequenceNumber",params:[],signal:e});return String(n)}async getCheckpoint(e){return await this.transport.request({method:"sui_getCheckpoint",params:[e.id],signal:e.signal})}async getCheckpoints(e){return await this.transport.request({method:"sui_getCheckpoints",params:[e.cursor,e==null?void 0:e.limit,e.descendingOrder],signal:e.signal})}async getCommitteeInfo(e){return await this.transport.request({method:"suix_getCommitteeInfo",params:[e==null?void 0:e.epoch],signal:e==null?void 0:e.signal})}async getNetworkMetrics({signal:e}={}){return await this.transport.request({method:"suix_getNetworkMetrics",params:[],signal:e})}async getAddressMetrics({signal:e}={}){return await this.transport.request({method:"suix_getLatestAddressMetrics",params:[],signal:e})}async getEpochMetrics(e){return await this.transport.request({method:"suix_getEpochMetrics",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getAllEpochAddressMetrics(e){return await this.transport.request({method:"suix_getAllEpochAddressMetrics",params:[e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getEpochs(e){return await this.transport.request({method:"suix_getEpochs",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getMoveCallMetrics({signal:e}={}){return await this.transport.request({method:"suix_getMoveCallMetrics",params:[],signal:e})}async getCurrentEpoch({signal:e}={}){return await this.transport.request({method:"suix_getCurrentEpoch",params:[],signal:e})}async getValidatorsApy({signal:e}={}){return await this.transport.request({method:"suix_getValidatorsApy",params:[],signal:e})}async getChainIdentifier({signal:e}={}){const n=await this.getCheckpoint({id:"0",signal:e}),s=oi(n.digest);return fs(s.slice(0,4))}async resolveNameServiceAddress(e){return await this.transport.request({method:"suix_resolveNameServiceAddress",params:[e.name],signal:e.signal})}async resolveNameServiceNames({format:e="dot",...n}){const{nextCursor:s,hasNextPage:r,data:i}=await this.transport.request({method:"suix_resolveNameServiceNames",params:[n.address,n.cursor,n.limit],signal:n.signal});return{hasNextPage:r,nextCursor:s,data:i.map(o=>g0(o,e))}}async getProtocolConfig(e){return await this.transport.request({method:"sui_getProtocolConfig",params:[e==null?void 0:e.version],signal:e==null?void 0:e.signal})}async verifyZkLoginSignature(e){return await this.transport.request({method:"sui_verifyZkLoginSignature",params:[e.bytes,e.signature,e.intentScope,e.author],signal:e.signal})}async waitForTransaction({signal:e,timeout:n=60*1e3,pollInterval:s=2*1e3,...r}){const i=AbortSignal.timeout(n),o=new Promise((a,c)=>{i.addEventListener("abort",()=>c(i.reason))});for(o.catch(()=>{});!i.aborted;){e==null||e.throwIfAborted();try{return await this.getTransactionBlock(r)}catch{await Promise.race([new Promise(c=>setTimeout(c,s)),o])}}throw i.throwIfAborted(),new Error("Unexpected error while waiting for transaction block.")}experimental_asClientExtension(){return{name:"jsonRPC",register:()=>this}}}function tw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var va,Il;function nw(){if(Il)return va;Il=1;var t=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return va=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}(),va}const sw="1.0.35",rw={version:sw};var iw=rw.version,Is;if(typeof globalThis=="object")Is=globalThis;else try{Is=nw()}catch{}finally{if(!Is&&typeof window<"u"&&(Is=window),!Is)throw new Error("Could not determine global this")}var di=Is.WebSocket||Is.MozWebSocket,ow=iw;function Nh(t,e){var n;return e?n=new di(t,e):n=new di(t),n}di&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(t){Object.defineProperty(Nh,t,{get:function(){return di[t]}})});var aw={w3cwebsocket:di?Nh:null,version:ow};const cw=tw(aw),uw=cw.w3cwebsocket;class ft extends Sn{static txInput(e,n,s=null){return n&&n.Pure&&n.Pure.bytes?e.pure(ft.pureInputToBytes(n)):e.pure(ft.pureInputToBytes(ft.pureInput(n,s)))}static pureInput(e,n){let s=e;if(s.toLowerCase()=="address"&&(s="Address"),J[s])return typeof J[s]=="object"?Lt.Pure(J[s].serialize(n)):Lt.Pure(J[s]().serialize(n));{const r=(""+s).split("<");if(r[0]=="vector"&&r[1]){const i=r[1].split(">");if(i[0]&&J[i[0]])return Lt.Pure(J.vector(J[i[0]]()).serialize(n))}}}static pureInputToBytes(e){return wm(e.Pure.bytes)}static normalizeSuiAddress(e){return ce(e)}static WebSocketConstructor(){return uw}static suiClientForRPC(e={}){const n=e.providerName||e.chainname||e.chain;delete e.providerName,delete e.chainName,delete e.chain,e.WebSocketConstructor=ft.WebSocketConstructor();const s=new tc(e),r=new nc({transport:s});return r.providerName=n,r}static suiClientFor(e){return new nc({transport:new tc({url:Om(e),WebSocketConstructor:ft.WebSocketConstructor()})})}static normalizeClient(e){let n=null,s=null;if(e)if(e=="local"||e.constructor&&e.constructor.name&&e.constructor.name=="SuiLocalTestValidator")e=="local"?(n=ft.suiClientFor("localnet"),s="sui:localnet"):(s=e.providerName,n=e.client);else if(e=="test"||e=="testnet")n=ft.suiClientFor("testnet"),s="sui:testnet";else if(e=="dev"||e=="devnet")n=ft.suiClientFor("devnet"),s="sui:devnet";else if(e=="main"||e=="mainnet")n=ft.suiClientFor("mainnet"),s="sui:mainnet";else if(e&&e.constructor&&(e.endpoint||e.transport)){n=e;let r="";e.endpoint?r=e.endpoint:e.transport&&e.transport.websocketClient&&e.transport.websocketClient.endpoint&&(r=e.transport.websocketClient.endpoint),e.providerName?(s=e.providerName,["devnet","mainnet","testnet","localnet"].indexOf(e.providerName)!=-1&&(s="sui:"+e.providerName)):r.indexOf("devnet")!==-1?s="sui:devnet":r.indexOf("testnet")!==-1?s="sui:testnet":r.indexOf("mainnet")!==-1?s="sui:mainnet":r.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=r.split("//")[1]}else e&&e.connection&&e.connection.fullnode&&(n=e,e.connection.fullnode.indexOf("devnet")!==-1?s="sui:devnet":e.connection.fullnode.indexOf("testnet")!==-1?s="sui:testnet":e.connection.fullnode.indexOf("mainnet")!==-1?s="sui:mainnet":e.connection.fullnode.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=e.connection.fullnode);return n?(n.providerName=s,n):null}}class zs extends Sn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._id=e.id||null,this._version=e.version||null,this._type=e.type||null,this._fields={},this._display={},this._owner=null,this._localProperties={},this._isDeleted=!1,e.objectChange&&this.tryToFillDataFromObjectChange(e.objectChange),this._constructedAt=new Date}get constructedAt(){return this._constructedAt}static idsEqual(e,n){return ce(e)===ce(n)}get isDeleted(){return this._isDeleted}get isShared(){return this._owner&&this._owner.Shared}get isImmutable(){return this._owner&&this._owner=="Immutable"}isOwnedBy(e){let n=e;return n.id&&(n=n.id),!!(this._owner&&this._owner.AddressOwner&&this._owner.AddressOwner==n)}markAsDeleted(){this._isDeleted=!0}get id(){return this._id}get type(){return this._type}get typeName(){return this._type?(""+this._type).split("<")[0].split("::").pop():null}idEquals(e){if(!e)return!1;const n=this.address;return!!(n&&n===ce(e))}get address(){try{return ce(this._id)}catch{return null}}get fields(){return this._fields}get display(){return this._display}get localProperties(){return this._localProperties}get version(){return this._version}async getPastObject(e=null){e||(e=this._version-BigInt(1)),e=Number(e);const n=await this._suiMaster._client.tryGetPastObject({version:e,id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});return n&&n.details&&n.details.objectId?new zs({suiMaster:this._suiMaster,debug:this._debug,objectChange:n.details}):null}async queryTransactionBlocks(e={}){const n={filter:{InputObject:this.address},limit:e.limit||10,options:{showInput:!0,showEffects:!0,showEvents:!0,showObjectChanges:!0,showBalanceChanges:!0,showContent:!0,showOwner:!0,showDisplay:!0}},s=new ls({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"queryTransactionBlocks",order:e.order});return await s.fetch(),s}async getDynamicFields(e={}){const n={parentId:this.address,limit:e.limit||50},s=new ls({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"getDynamicFields",order:e.order});return await s.fetch(),s}async fetchFields(){const e=await this._suiMaster._client.getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});e&&e.data&&this.tryToFillDataFromObjectChange(e.data)}replaceWithSuiObjectIfNeeded(e){return!e||!e.version||!e.id||!this.idEquals(e.id)?!1:!this.version||e.version>this.version?(this._type=e.type,this._owner=e._owner,this._fields=e._fields,this._display=e._display,this._version=e.version,e.isDeleted&&this.markAsDeleted(),!0):!1}tryToFillDataFromObjectChange(e){var n,s,r,i;if(!e.objectId&&e.data&&e.data.objectId&&(e=e.data),e.type&&e.type=="deleted"&&this.markAsDeleted(),e.objectId){if(!this._id)this._id=e.objectId;else if(!this.idEquals(e.objectId))throw new Error("Trying to fill from different object");e.type&&!this._type&&(this._type=e.type)}if(e.version&&(this._version=BigInt(e.version)),e.objectType&&(this._type=`${e.objectType}`),(n=e==null?void 0:e.content)!=null&&n.fields)for(const o in(s=e==null?void 0:e.content)==null?void 0:s.fields)o!=="id"&&(this._fields[o]=e.content.fields[o]);if((r=e==null?void 0:e.display)!=null&&r.data)for(const o in(i=e==null?void 0:e.display)==null?void 0:i.data)this._display[o]=e.display.data[o];e.owner&&(this._owner=e.owner)}}class lw extends Sn{constructor(e={}){if(super(e),this._package=e.package,!this._package)throw new Error("package is required for SuiPackageModule");if(this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPackageModule");if(this._moduleName=e.moduleName,!this._moduleName)throw new Error("moduleName is required for SuiPackageModule");this._checkedOnChain=!1,this._normalizedMoveModule={},this._unsubscribeFunction=null}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async getNormalizedMoveFunction(e){const n=await this.getNormalizedPackageAddress();return await this._suiMaster._client.getMoveFunctionArgTypes({package:n,module:this._moduleName,function:e})}async subscribeEvents(){this.log("subscribing to events of module",this._moduleName);const e=await this.getNormalizedPackageAddress(),n=s=>{const r=new Bc({suiMaster:this._suiMaster,debug:this._debug,data:s}),i=r.typeName;this.log("got event",i),this.emit(i,r),this.emit("event",r,!0)};this._unsubscribeFunction=await this._suiMaster._client.subscribeEvent({filter:{MoveModule:{package:e,module:this._moduleName}},onMessage:n})}async unsubscribeEvents(){return this._unsubscribeFunction?(await this._unsubscribeFunction(),this._unsubscribeFunction=null,!0):!1}get objectStorage(){return this._suiMaster.objectStorage}get objects(){return this.objectStorage._objects}get objectsArray(){return this.objectStorage.asArray()}pushObject(e){let n=`${e}`;e.address&&(n=e.address);try{if(n=ce(n),!this.objectStorage.byAddress(n))if(e.address)this.objectStorage.push(e);else{const s=new zs({suiMaster:this._suiMaster,debug:this._debug,id:n});this.objectStorage.push(s),this.emit("added",s)}return this.objectStorage.byAddress(n)}catch(s){this.log("error",s)}return null}async moveCall(e,n,s){await this._package.checkOnChainIfNeeded();let r=null;if(n.tx)r=n.tx;else{r=new hr;const u=[];for(let d of n)if(d&&d.type&&d.amount){const h=this._suiMaster.address,y=await(await this._suiMaster.suiCoins.get(d.type)).coinOfAmountToTxCoin(r,h,d.amount);u.push(y)}else if(d&&Array.isArray(d)&&d.length==1&&d[0].type&&d[0].amount){const h=this._suiMaster.address,p=await this._suiMaster.suiCoins.get(d[0].type),y=await p.coinOfAmountToTxCoin(r,h,d[0].amount);u.push(r.makeMoveVec({type:p.coinObjectType,elements:[y]}))}else typeof d=="string"&&d.indexOf("0x")===0?u.push(r.object(d)):d&&d.Pure&&d.Pure.bytes?u.push(this._suiMaster.utils.txInput(r,d)):u.push(r.pure(d));r.moveCall({target:`${this._package.address}::${this._moduleName}::${e}`,arguments:u,typeArguments:s})}const i=await this._suiMaster.signAndExecuteTransaction({transaction:r,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0,showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),o=new this._suiMaster.SuiTransaction({suiMaster:this._suiMaster,debug:this._debug,data:i});o.status;const a=[],c=[],l=[];for(const u of o.results.objects)this.objectStorage.byAddress(u.id)?this.objectStorage.byAddress(u.id).replaceWithSuiObjectIfNeeded(u):(this.objectStorage.push(u),this.emit("added",u));for(const u of o.results.deleted)this.objectStorage.byAddress(u.id)&&(this.objectStorage.byAddress(u.id).markAsDeleted(),l.push(this.objectStorage.byAddress(u.id)),this.emit("deleted",this.objectStorage.byAddress(u.id)));await this.fetchObjects();for(const u of o.results.created)if(this.objectStorage.byAddress(u.id))a.push(this.objectStorage.byAddress(u.id)),this.emit("created",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.results.mutated)if(this.objectStorage.byAddress(u.id))c.push(this.objectStorage.byAddress(u.id)),this.emit("mutated",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.events)this.emit(u.typeName,u);return o}async getOwnedObjects(e={}){const n=await this.getNormalizedPackageAddress(),s={owner:this._suiMaster.address,filter:{MoveModule:{package:n,module:this._moduleName}},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};e.typeName&&(s.filter={StructType:`${n}::${this._moduleName}::${e.typeName}`});const r=new ls({debug:this._debug,suiMaster:this._suiMaster,params:s,method:"getOwnedObjects",order:e.order});return await r.fetch(),r}async fetchEvents(e={}){const n={};let s=await this.getNormalizedPackageAddress();e.eventTypeName?(n.MoveEventType=`${s}::${this._moduleName}::${e.eventTypeName}`,this.log("queriying for events of type: ",n.MoveEventType)):(n.MoveModule={package:s,module:this._moduleName},this.log("queriying for all events of module: ",this._moduleName));const r={descending_order:!1,query:n,limit:e.limit||50},i=new ls({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"queryEvents",order:e.order});return await i.fetch(),i}async fetchObjects(){return await this.objectStorage.fetchObjects()}async getNormalizedPackageAddress(){if(await this.checkOnChainIfNeeded(),this._normalizedMoveModule&&this._normalizedMoveModule.address)return this._normalizedMoveModule.address}async checkOnChainIfNeeded(){if(this._checkedOnChain)return!0;const e=await this._suiMaster._client.getNormalizedMoveModule({package:this._package.address,module:this._moduleName});return e&&e.address&&(this._normalizedMoveModule=e,this._checkedOnChain=!0),!0}}class dw extends zs{constructor(e={}){super(e),this._path=e.path,this._id=e.id||null,this._expectedModules=e.modules||null,this._isPublished=!1,this._publishedVersion=null,this._upgradeCap=null,this._upgradeCapId=null,this._isBuilt=!1,this._builtModules=null,this._builtDependencies=null,this._builtDigest=null,this._modules={}}get objectStorage(){return this._suiMaster.objectStorage}get modules(){return this._modules}async getModule(e){return await this.checkOnChainIfNeeded(),this._modules[e]}get isBuilt(){return this._isBuilt}get version(){return Number(this._publishedVersion)}async isOnChain(){try{await this.checkOnChainIfNeeded()}catch(e){console.error(e)}return!!(this._publishedVersion&&this._isPublished&&this.address)}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async moveCall(e,n,s,r){return await this.checkOnChainIfNeeded(),await this.modules[e].moveCall(n,s,r)}async fetchEvents(e,n={}){return await this.checkOnChainIfNeeded(),await this.modules[e].fetchEvents(n)}async checkOnChainIfNeeded(){if(this._isPublished)return!0;if(!this._id&&!this._expectedModules&&this._path&&(this._expectedModules=await this.getModulesNamesFromBuild()),!this._id&&this._expectedModules&&(this._id=await this.tryToFindByExpectedModules()),!this._id)throw new Error("no package id, nothing to check. Maybe lets start with .publish() ?");if(await this.getVersionOnChain())return this._isPublished=!0,!0}async tryToFindByExpectedModules(){this.log("trying to find Package by expected modules in its content...");const e=[];let n=this._expectedModules;Array.isArray(this._expectedModules)||(n=(""+this._expectedModules).split(",")),n.forEach(u=>{u.trim()&&e.indexOf(u.trim())===-1&&e.push(u.trim())}),this.log("looking for modules",e);const s=[],r={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};await new ls({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"getOwnedObjects"}).forEach(u=>{const d=u.fields.package;d&&s.indexOf(d)===-1&&s.push(d)});const o=await this._suiMaster._client.multiGetObjects({ids:s,options:{showType:!0,showContent:!0}});let a=BigInt(0),c=null,l=0;for(const u of o){let d=!0;e.forEach(p=>{var y,m;(m=(y=u==null?void 0:u.data)==null?void 0:y.content)!=null&&m.disassembled[p]||(d=!1)});const h=BigInt(u.data.version);d&&l++,h>a&&(a=h,c=u.data.objectId)}return this.log("found packages with needed modules",l),c?(this.log("the one with most recent Publisher version is",c,"version",a),c):null}async getVersionOnChain(){var s,r,i,o,a,c;this.log("geting package version previously published on chain...");const n=await(await this._suiMaster.getClient()).getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});if((s=n==null?void 0:n.data)!=null&&s.version&&(this._publishedVersion=BigInt((r=n==null?void 0:n.data)==null?void 0:r.version),this._isPublished=!0),(o=(i=n==null?void 0:n.data)==null?void 0:i.content)!=null&&o.disassembled)for(const l in(c=(a=n==null?void 0:n.data)==null?void 0:a.content)==null?void 0:c.disassembled)this.attachModule(l);return this.log("on chain version",this._publishedVersion,"with modules",Object.keys(this._modules)),this._publishedVersion}attachModule(e){return this._modules[e]?!1:(this._modules[e]=new lw({suiMaster:this._suiMaster,debug:this._debug,moduleName:e,package:this}),this._modules[e].addEventListener("added",n=>{const s=n.detail;this.emit("added",s)}),!0)}async getUpgradeCapId(){var s,r,i;if(this._upgradeCap)return this._upgradeCap.address;this.log("trying to find UpgradeCap for this package in owned objects...");let e=!1,n=null;do{const o={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};n&&(o.cursor=n);const a=await this._suiMaster._client.getOwnedObjects(o);a.hasNextPage&&a.nextCursor?(e=!0,n=a.nextCursor):e=!1;for(const c of a.data)if(((i=(r=(s=c==null?void 0:c.data)==null?void 0:s.content)==null?void 0:r.fields)==null?void 0:i.package)==this._id)return this._upgradeCap=new zs({id:c.data.objectId,suiMaster:this._suiMaster,debug:this._debug}),this.log("found UpgradeCap",this._upgradeCap.address),this._upgradeCap.address}while(e&&!this._upgradeCap);return this.log("no UpgradeCap for this package found. Are you sure you work with most recent version of the package?"),null}async storeInfoFromPublishResult(e){if(e&&e.objectChanges&&e.objectChanges.length){for(const n of e.objectChanges){if(n.type==="published"&&n.packageId&&(this._id=ce(n.packageId),this._isPublished=!0,n.version&&(this._publishedVersion=BigInt(n.version)),n.modules))for(const s of n.modules)this.attachModule(s);n.type==="created"&&n.objectType.indexOf("::package::UpgradeCap")!==-1&&(this._upgradeCapId=n.objectId,this.log("UpgradeCap",this._upgradeCapId))}for(const n of e.objectChanges)if(n.objectId&&n.objectType&&n.type&&(n.type=="created"||n.type=="mutated"))for(const s in this._modules){const r=this._modules[s].pushObject(n.objectId);r&&r.tryToFillDataFromObjectChange(n)}return this.log("got results:",this.address,"version",this._publishedVersion,"with modules",Object.keys(this._modules)),!0}else return this.log("nothing is found in publish result. storing old values"),!1}async publish(e={}){if(this._isBuilt||await this.build(e),this.address)throw new Error("already published. Maybe you need to upgrade() it?");this.log("publishing package...");const n=new hr,[s]=n.publish({modules:this._builtModules,dependencies:this._builtDependencies});n.transferObjects([s],this._suiMaster.address);const r=await this._suiMaster.signAndExecuteTransaction({transaction:n,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(r)&&this.log("published"),this.address}async upgrade(e={}){await this.checkOnChainIfNeeded(),this._isBuilt||await this.build(e),this.log("upgrading package...");const n=new hr,s=n.object(await this.getUpgradeCapId()),i=[s,this._suiMaster.utils.txInput(n,"u8",0),this._suiMaster.utils.txInput(n,"vector<u8>",this._builtDigest)],o=n.moveCall({target:"0x2::package::authorize_upgrade",arguments:i}),a=n.upgrade({modules:this._builtModules,dependencies:this._builtDependencies,package:this.address,ticket:o});n.moveCall({target:"0x2::package::commit_upgrade",arguments:[s,a]});const c=await this._suiMaster.signAndExecuteTransaction({transaction:n,options:{showEffects:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(c)&&this.log("upgraded"),this.address}async build(e={}){this.log("building a package...");const n=this._path;if(!n)throw new Error("Cant build a package with no path defined");if(e.env){this.log("switching environment to",e.env);const c=await ua.exec(`sui client switch --env ${e.env}`);this.log(c)}let s=`sui move build --dump-bytecode-as-base64 --path ${n}`;e.withUnpublishedDependencies&&(s=`sui move build --with-unpublished-dependencies --dump-bytecode-as-base64 --path ${n}`);const r=await ua.exec(s),{modules:i,dependencies:o,digest:a}=JSON.parse(r);return this._builtModules=i,this._builtDependencies=o,this._builtDigest=a,this._isBuilt=!0,this.log("package built"),!0}async getModulesNamesFromBuild(){this.log("tring to get modules names from local package path...");try{return ua.getModulesNamesFromPackagePath(this._path)}catch(e){throw this.log(e),new Error("can not get modules names from local package path")}}}class Th extends Hc{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Vf(e);const s=ds(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,i=new Uint8Array(r);i.set(s.length>r?e.create().update(s).digest():s);for(let o=0;o<i.length;o++)i[o]^=54;this.iHash.update(i),this.oHash=e.create();for(let o=0;o<i.length;o++)i[o]^=106;this.oHash.update(i),Pt(i)}update(e){return dr(this),this.iHash.update(e),this}digestInto(e){dr(this),qe(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:s,finished:r,destroyed:i,blockLen:o,outputLen:a}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=s._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ps=(t,e,n)=>new Th(t,e).update(n).digest();Ps.create=(t,e)=>new Th(t,e);function fw(t,e,n,s){Vf(t);const r=Y0({dkLen:32,asyncTick:10},s),{c:i,dkLen:o,asyncTick:a}=r;if(Pn(i),Pn(o),Pn(a),i<1)throw new Error("iterations (c) should be >= 1");const c=ol(e),l=ol(n),u=new Uint8Array(o),d=Ps.create(t,c),h=d._cloneInto().update(l);return{c:i,dkLen:o,asyncTick:a,DK:u,PRF:d,PRFSalt:h}}function hw(t,e,n,s,r){return t.destroy(),e.destroy(),s&&s.destroy(),Pt(r),n}function pw(t,e,n,s){const{c:r,dkLen:i,DK:o,PRF:a,PRFSalt:c}=fw(t,e,n,s);let l;const u=new Uint8Array(4),d=ks(u),h=new Uint8Array(a.outputLen);for(let p=1,y=0;y<i;p++,y+=a.outputLen){const m=o.subarray(y,y+a.outputLen);d.setInt32(0,p,!1),(l=c._cloneInto(l)).update(u).digestInto(h),m.set(h.subarray(0,m.length));for(let w=1;w<r;w++){a._cloneInto(l).update(h).digestInto(h);for(let x=0;x<m.length;x++)m[x]^=h[x]}}return hw(a,c,o,l,h)}const gw=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Gn=new Uint32Array(64);class bw extends Yc{constructor(e=32){super(64,e,8,!1),this.A=Wn[0]|0,this.B=Wn[1]|0,this.C=Wn[2]|0,this.D=Wn[3]|0,this.E=Wn[4]|0,this.F=Wn[5]|0,this.G=Wn[6]|0,this.H=Wn[7]|0}get(){const{A:e,B:n,C:s,D:r,E:i,F:o,G:a,H:c}=this;return[e,n,s,r,i,o,a,c]}set(e,n,s,r,i,o,a,c){this.A=e|0,this.B=n|0,this.C=s|0,this.D=r|0,this.E=i|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,n){for(let d=0;d<16;d++,n+=4)Gn[d]=e.getUint32(n,!1);for(let d=16;d<64;d++){const h=Gn[d-15],p=Gn[d-2],y=cn(h,7)^cn(h,18)^h>>>3,m=cn(p,17)^cn(p,19)^p>>>10;Gn[d]=m+Gn[d-7]+y+Gn[d-16]|0}let{A:s,B:r,C:i,D:o,E:a,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const h=cn(a,6)^cn(a,11)^cn(a,25),p=u+h+X0(a,c,l)+gw[d]+Gn[d]|0,m=(cn(s,2)^cn(s,13)^cn(s,22))+ey(s,r,i)|0;u=l,l=c,c=a,a=o+p|0,o=i,i=r,r=s,s=p+m|0}s=s+this.A|0,r=r+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(s,r,i,o,a,c,l,u)}roundClean(){Pt(Gn)}destroy(){this.set(0,0,0,0,0,0,0,0),Pt(this.buffer)}}const Oh=ty(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),yw=Oh[0],mw=Oh[1],Hn=new Uint32Array(80),Yn=new Uint32Array(80);class jh extends Yc{constructor(e=64){super(128,e,16,!1),this.Ah=Xe[0]|0,this.Al=Xe[1]|0,this.Bh=Xe[2]|0,this.Bl=Xe[3]|0,this.Ch=Xe[4]|0,this.Cl=Xe[5]|0,this.Dh=Xe[6]|0,this.Dl=Xe[7]|0,this.Eh=Xe[8]|0,this.El=Xe[9]|0,this.Fh=Xe[10]|0,this.Fl=Xe[11]|0,this.Gh=Xe[12]|0,this.Gl=Xe[13]|0,this.Hh=Xe[14]|0,this.Hl=Xe[15]|0}get(){const{Ah:e,Al:n,Bh:s,Bl:r,Ch:i,Cl:o,Dh:a,Dl:c,Eh:l,El:u,Fh:d,Fl:h,Gh:p,Gl:y,Hh:m,Hl:w}=this;return[e,n,s,r,i,o,a,c,l,u,d,h,p,y,m,w]}set(e,n,s,r,i,o,a,c,l,u,d,h,p,y,m,w){this.Ah=e|0,this.Al=n|0,this.Bh=s|0,this.Bl=r|0,this.Ch=i|0,this.Cl=o|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=u|0,this.Fh=d|0,this.Fl=h|0,this.Gh=p|0,this.Gl=y|0,this.Hh=m|0,this.Hl=w|0}process(e,n){for(let A=0;A<16;A++,n+=4)Hn[A]=e.getUint32(n),Yn[A]=e.getUint32(n+=4);for(let A=16;A<80;A++){const O=Hn[A-15]|0,S=Yn[A-15]|0,H=ts(O,S,1)^ts(O,S,8)^cl(O,S,7),Q=ns(O,S,1)^ns(O,S,8)^ul(O,S,7),G=Hn[A-2]|0,v=Yn[A-2]|0,N=ts(G,v,19)^jr(G,v,61)^cl(G,v,6),I=ns(G,v,19)^Cr(G,v,61)^ul(G,v,6),_=ry(Q,I,Yn[A-7],Yn[A-16]),k=iy(_,H,N,Hn[A-7],Hn[A-16]);Hn[A]=k|0,Yn[A]=_|0}let{Ah:s,Al:r,Bh:i,Bl:o,Ch:a,Cl:c,Dh:l,Dl:u,Eh:d,El:h,Fh:p,Fl:y,Gh:m,Gl:w,Hh:x,Hl:U}=this;for(let A=0;A<80;A++){const O=ts(d,h,14)^ts(d,h,18)^jr(d,h,41),S=ns(d,h,14)^ns(d,h,18)^Cr(d,h,41),H=d&p^~d&m,Q=h&y^~h&w,G=oy(U,S,Q,mw[A],Yn[A]),v=ay(G,x,O,H,yw[A],Hn[A]),N=G|0,I=ts(s,r,28)^jr(s,r,34)^jr(s,r,39),_=ns(s,r,28)^Cr(s,r,34)^Cr(s,r,39),k=s&i^s&a^i&a,W=r&o^r&c^o&c;x=m|0,U=w|0,m=p|0,w=y|0,p=d|0,y=h|0,{h:d,l:h}=$t(l|0,u|0,v|0,N|0),l=a|0,u=c|0,a=i|0,c=o|0,i=s|0,o=r|0;const $=Qc(N,_,W);s=Zc($,v,I,k),r=$|0}({h:s,l:r}=$t(this.Ah|0,this.Al|0,s|0,r|0)),{h:i,l:o}=$t(this.Bh|0,this.Bl|0,i|0,o|0),{h:a,l:c}=$t(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:u}=$t(this.Dh|0,this.Dl|0,l|0,u|0),{h:d,l:h}=$t(this.Eh|0,this.El|0,d|0,h|0),{h:p,l:y}=$t(this.Fh|0,this.Fl|0,p|0,y|0),{h:m,l:w}=$t(this.Gh|0,this.Gl|0,m|0,w|0),{h:x,l:U}=$t(this.Hh|0,this.Hl|0,x|0,U|0),this.set(s,r,i,o,a,c,l,u,d,h,p,y,m,w,x,U)}roundClean(){Pt(Hn,Yn)}destroy(){Pt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class ww extends jh{constructor(){super(48),this.Ah=Je[0]|0,this.Al=Je[1]|0,this.Bh=Je[2]|0,this.Bl=Je[3]|0,this.Ch=Je[4]|0,this.Cl=Je[5]|0,this.Dh=Je[6]|0,this.Dl=Je[7]|0,this.Eh=Je[8]|0,this.El=Je[9]|0,this.Fh=Je[10]|0,this.Fl=Je[11]|0,this.Gh=Je[12]|0,this.Gl=Je[13]|0,this.Hh=Je[14]|0,this.Hl=Je[15]|0}}const Sr=$o(()=>new bw),pr=$o(()=>new jh),vw=$o(()=>new ww);/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Sw=t=>t[0]==="あいこくしん";function Ch(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);return t.normalize("NFKD")}function Mw(t){const e=Ch(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function xw(t){qe(t,16,20,24,28,32)}const Iw=t=>{const e=8-t.length/4;return new Uint8Array([Sr(t)[0]>>e<<e])};function _w(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error("wordlist: non-string element: "+e)}),Oi.chain(Oi.checksum(1,Iw),Oi.radix2(11,!0),Oi.alphabet(t))}function Ew(t,e){return xw(t),_w(e).encode(t).join(Sw(e)?"　":" ")}const Aw=t=>Ch("mnemonic"+t);function Nw(t,e=""){return pw(pr,Mw(t).nfkd,Aw(e),{c:2048,dkLen:64})}const Tw=`abandon
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
`);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const au=BigInt(0),sc=BigInt(1);function Rs(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}function Ci(t){const e=t.toString(16);return e.length&1?"0"+e:e}function kh(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?au:BigInt("0x"+t)}function Wo(t){return kh(Xt(t))}function fi(t){return qe(t),kh(Xt(Uint8Array.from(t).reverse()))}function cu(t,e){return yi(t.toString(16).padStart(e*2,"0"))}function qo(t,e){return cu(t,e).reverse()}function $e(t,e,n){let s;if(typeof e=="string")try{s=yi(e)}catch(i){throw new Error(t+" must be hex string or Uint8Array, cause: "+i)}else if(Kc(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const r=s.length;if(typeof n=="number"&&r!==n)throw new Error(t+" of length "+n+" expected, got "+r);return s}const Sa=t=>typeof t=="bigint"&&au<=t;function Ow(t,e,n){return Sa(t)&&Sa(e)&&Sa(n)&&e<=t&&t<n}function tr(t,e,n,s){if(!Ow(e,n,s))throw new Error("expected valid "+t+": "+n+" <= n < "+s+", got "+e)}function jw(t){let e;for(e=0;t>au;t>>=sc,e+=1);return e}const Ko=t=>(sc<<BigInt(t))-sc;function Cw(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");const s=p=>new Uint8Array(p),r=p=>Uint8Array.of(p);let i=s(t),o=s(t),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},l=(...p)=>n(o,i,...p),u=(p=s(0))=>{o=l(r(0),p),i=l(),p.length!==0&&(o=l(r(1),p),i=l())},d=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let p=0;const y=[];for(;p<e;){i=l();const m=i.slice();y.push(m),p+=i.length}return At(...y)};return(p,y)=>{c(),u(p);let m;for(;!(m=y(d()));)u();return c(),m}}function vi(t,e,n={}){if(!t||typeof t!="object")throw new Error("expected valid options object");function s(r,i,o){const a=t[r];if(o&&a===void 0)return;const c=typeof a;if(c!==i||a===null)throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`)}Object.entries(e).forEach(([r,i])=>s(r,i,!1)),Object.entries(n).forEach(([r,i])=>s(r,i,!0))}function Ao(t){const e=new WeakMap;return(n,...s)=>{const r=e.get(n);if(r!==void 0)return r;const i=t(n,...s);return e.set(n,i),i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const yt=BigInt(0),Qe=BigInt(1),Ts=BigInt(2),kw=BigInt(3),Dh=BigInt(4),Uh=BigInt(5),Bh=BigInt(8);function Be(t,e){const n=t%e;return n>=yt?n:e+n}function De(t,e,n){let s=t;for(;e-- >yt;)s*=s,s%=n;return s}function _l(t,e){if(t===yt)throw new Error("invert: expected non-zero number");if(e<=yt)throw new Error("invert: expected positive modulus, got "+e);let n=Be(t,e),s=e,r=yt,i=Qe;for(;n!==yt;){const a=s/n,c=s%n,l=r-i*a;s=n,n=c,r=i,i=l}if(s!==Qe)throw new Error("invert: does not exist");return Be(r,e)}function Lh(t,e){const n=(t.ORDER+Qe)/Dh,s=t.pow(e,n);if(!t.eql(t.sqr(s),e))throw new Error("Cannot find square root");return s}function Dw(t,e){const n=(t.ORDER-Uh)/Bh,s=t.mul(e,Ts),r=t.pow(s,n),i=t.mul(e,r),o=t.mul(t.mul(i,Ts),r),a=t.mul(i,t.sub(o,t.ONE));if(!t.eql(t.sqr(a),e))throw new Error("Cannot find square root");return a}function Uw(t){if(t<BigInt(3))throw new Error("sqrt is not defined for small field");let e=t-Qe,n=0;for(;e%Ts===yt;)e/=Ts,n++;let s=Ts;const r=Fn(t);for(;El(r,s)===1;)if(s++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return Lh;let i=r.pow(s,e);const o=(e+Qe)/Ts;return function(c,l){if(c.is0(l))return l;if(El(c,l)!==1)throw new Error("Cannot find square root");let u=n,d=c.mul(c.ONE,i),h=c.pow(l,e),p=c.pow(l,o);for(;!c.eql(h,c.ONE);){if(c.is0(h))return c.ZERO;let y=1,m=c.sqr(h);for(;!c.eql(m,c.ONE);)if(y++,m=c.sqr(m),y===u)throw new Error("Cannot find square root");const w=Qe<<BigInt(u-y-1),x=c.pow(d,w);u=y,d=c.sqr(x),h=c.mul(h,d),p=c.mul(p,x)}return p}}function Bw(t){return t%Dh===kw?Lh:t%Bh===Uh?Dw:Uw(t)}const Lw=(t,e)=>(Be(t,e)&Qe)===Qe,zw=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Pw(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},n=zw.reduce((s,r)=>(s[r]="function",s),e);return vi(t,n),t}function Rw(t,e,n){if(n<yt)throw new Error("invalid exponent, negatives unsupported");if(n===yt)return t.ONE;if(n===Qe)return e;let s=t.ONE,r=e;for(;n>yt;)n&Qe&&(s=t.mul(s,r)),r=t.sqr(r),n>>=Qe;return s}function zh(t,e,n=!1){const s=new Array(e.length).fill(n?t.ZERO:void 0),r=e.reduce((o,a,c)=>t.is0(a)?o:(s[c]=o,t.mul(o,a)),t.ONE),i=t.inv(r);return e.reduceRight((o,a,c)=>t.is0(a)?o:(s[c]=t.mul(o,s[c]),t.mul(o,a)),i),s}function El(t,e){const n=(t.ORDER-Qe)/Ts,s=t.pow(e,n),r=t.eql(s,t.ONE),i=t.eql(s,t.ZERO),o=t.eql(s,t.neg(t.ONE));if(!r&&!i&&!o)throw new Error("invalid Legendre symbol result");return r?1:i?0:-1}function $w(t,e){e!==void 0&&Pn(e);const n=e!==void 0?e:t.toString(2).length,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}function Fn(t,e,n=!1,s={}){if(t<=yt)throw new Error("invalid field: expected ORDER > 0, got "+t);let r,i;if(typeof e=="object"&&e!=null){if(s.sqrt||n)throw new Error("cannot specify opts in two arguments");const u=e;u.BITS&&(r=u.BITS),u.sqrt&&(i=u.sqrt),typeof u.isLE=="boolean"&&(n=u.isLE)}else typeof e=="number"&&(r=e),s.sqrt&&(i=s.sqrt);const{nBitLength:o,nByteLength:a}=$w(t,r);if(a>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let c;const l=Object.freeze({ORDER:t,isLE:n,BITS:o,BYTES:a,MASK:Ko(o),ZERO:yt,ONE:Qe,create:u=>Be(u,t),isValid:u=>{if(typeof u!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof u);return yt<=u&&u<t},is0:u=>u===yt,isValidNot0:u=>!l.is0(u)&&l.isValid(u),isOdd:u=>(u&Qe)===Qe,neg:u=>Be(-u,t),eql:(u,d)=>u===d,sqr:u=>Be(u*u,t),add:(u,d)=>Be(u+d,t),sub:(u,d)=>Be(u-d,t),mul:(u,d)=>Be(u*d,t),pow:(u,d)=>Rw(l,u,d),div:(u,d)=>Be(u*_l(d,t),t),sqrN:u=>u*u,addN:(u,d)=>u+d,subN:(u,d)=>u-d,mulN:(u,d)=>u*d,inv:u=>_l(u,t),sqrt:i||(u=>(c||(c=Bw(t)),c(l,u))),toBytes:u=>n?qo(u,a):cu(u,a),fromBytes:u=>{if(u.length!==a)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+u.length);return n?fi(u):Wo(u)},invertBatch:u=>zh(l,u),cmov:(u,d,h)=>h?d:u});return Object.freeze(l)}function Ph(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Rh(t){const e=Ph(t);return e+Math.ceil(e/2)}function Fw(t,e,n=!1){const s=t.length,r=Ph(e),i=Rh(e);if(s<16||s<i||s>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+s);const o=n?fi(t):Wo(t),a=Be(o,e-Qe)+Qe;return n?qo(a,r):cu(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const gr=BigInt(0),Os=BigInt(1);function Kr(t,e){const n=e.negate();return t?n:e}function $h(t,e,n){const s=e==="pz"?o=>o.pz:o=>o.ez,r=zh(t.Fp,n.map(s));return n.map((o,a)=>o.toAffine(r[a])).map(t.fromAffine)}function Fh(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Ma(t,e){Fh(t,e);const n=Math.ceil(e/t)+1,s=2**(t-1),r=2**t,i=Ko(t),o=BigInt(t);return{windows:n,windowSize:s,mask:i,maxNumber:r,shiftBy:o}}function Al(t,e,n){const{windowSize:s,mask:r,maxNumber:i,shiftBy:o}=n;let a=Number(t&r),c=t>>o;a>s&&(a-=i,c+=Os);const l=e*s,u=l+Math.abs(a)-1,d=a===0,h=a<0,p=e%2!==0;return{nextN:c,offset:u,isZero:d,isNeg:h,isNegF:p,offsetF:l}}function Vw(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,s)=>{if(!(n instanceof e))throw new Error("invalid point at index "+s)})}function Ww(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,s)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+s)})}const xa=new WeakMap,Vh=new WeakMap;function Ia(t){return Vh.get(t)||1}function Nl(t){if(t!==gr)throw new Error("invalid wNAF")}function Wh(t,e){return{constTimeNegate:Kr,hasPrecomputes(n){return Ia(n)!==1},unsafeLadder(n,s,r=t.ZERO){let i=n;for(;s>gr;)s&Os&&(r=r.add(i)),i=i.double(),s>>=Os;return r},precomputeWindow(n,s){const{windows:r,windowSize:i}=Ma(s,e),o=[];let a=n,c=a;for(let l=0;l<r;l++){c=a,o.push(c);for(let u=1;u<i;u++)c=c.add(a),o.push(c);a=c.double()}return o},wNAF(n,s,r){let i=t.ZERO,o=t.BASE;const a=Ma(n,e);for(let c=0;c<a.windows;c++){const{nextN:l,offset:u,isZero:d,isNeg:h,isNegF:p,offsetF:y}=Al(r,c,a);r=l,d?o=o.add(Kr(p,s[y])):i=i.add(Kr(h,s[u]))}return Nl(r),{p:i,f:o}},wNAFUnsafe(n,s,r,i=t.ZERO){const o=Ma(n,e);for(let a=0;a<o.windows&&r!==gr;a++){const{nextN:c,offset:l,isZero:u,isNeg:d}=Al(r,a,o);if(r=c,!u){const h=s[l];i=i.add(d?h.negate():h)}}return Nl(r),i},getPrecomputes(n,s,r){let i=xa.get(s);return i||(i=this.precomputeWindow(s,n),n!==1&&(typeof r=="function"&&(i=r(i)),xa.set(s,i))),i},wNAFCached(n,s,r){const i=Ia(n);return this.wNAF(i,this.getPrecomputes(i,n,r),s)},wNAFCachedUnsafe(n,s,r,i){const o=Ia(n);return o===1?this.unsafeLadder(n,s,i):this.wNAFUnsafe(o,this.getPrecomputes(o,n,r),s,i)},setWindowSize(n,s){Fh(s,e),Vh.set(n,s),xa.delete(n)}}}function qw(t,e,n,s){let r=e,i=t.ZERO,o=t.ZERO;for(;n>gr||s>gr;)n&Os&&(i=i.add(r)),s&Os&&(o=o.add(r)),r=r.double(),n>>=Os,s>>=Os;return{p1:i,p2:o}}function qh(t,e,n,s){Vw(n,t),Ww(s,e);const r=n.length,i=s.length;if(r!==i)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,a=jw(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=Ko(c),u=new Array(Number(l)+1).fill(o),d=Math.floor((e.BITS-1)/c)*c;let h=o;for(let p=d;p>=0;p-=c){u.fill(o);for(let m=0;m<i;m++){const w=s[m],x=Number(w>>BigInt(p)&l);u[x]=u[x].add(n[m])}let y=o;for(let m=u.length-1,w=o;m>0;m--)w=w.add(u[m]),y=y.add(w);if(h=h.add(y),p!==0)for(let m=0;m<c;m++)h=h.double()}return h}function Tl(t,e){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return Pw(e),e}else return Fn(t)}function Kh(t,e,n={}){if(!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);for(const a of["p","n","h"]){const c=e[a];if(!(typeof c=="bigint"&&c>gr))throw new Error(`CURVE.${a} must be positive bigint`)}const s=Tl(e.p,n.Fp),r=Tl(e.n,n.Fn),o=["Gx","Gy","a",t==="weierstrass"?"b":"d"];for(const a of o)if(!s.isValid(e[a]))throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);return{Fp:s,Fn:r}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ln=BigInt(0),rt=BigInt(1),_a=BigInt(2),Kw=BigInt(8),Gw={zip215:!0};function Hw(t,e,n,s){const r=t.sqr(n),i=t.sqr(s),o=t.add(t.mul(e.a,r),i),a=t.add(t.ONE,t.mul(e.d,t.mul(r,i)));return t.eql(o,a)}function Yw(t,e={}){const{Fp:n,Fn:s}=Kh("edwards",t,e),{h:r,n:i}=t;vi(e,{},{uvRatio:"function"});const o=_a<<BigInt(s.BYTES*8)-rt,a=m=>n.create(m),c=e.uvRatio||((m,w)=>{try{return{isValid:!0,value:n.sqrt(n.div(m,w))}}catch{return{isValid:!1,value:ln}}});if(!Hw(n,t,t.Gx,t.Gy))throw new Error("bad curve params: generator point");function l(m,w,x=!1){const U=x?rt:ln;return tr("coordinate "+m,w,U,o),w}function u(m){if(!(m instanceof p))throw new Error("ExtendedPoint expected")}const d=Ao((m,w)=>{const{ex:x,ey:U,ez:A}=m,O=m.is0();w==null&&(w=O?Kw:n.inv(A));const S=a(x*w),H=a(U*w),Q=a(A*w);if(O)return{x:ln,y:rt};if(Q!==rt)throw new Error("invZ was invalid");return{x:S,y:H}}),h=Ao(m=>{const{a:w,d:x}=t;if(m.is0())throw new Error("bad point: ZERO");const{ex:U,ey:A,ez:O,et:S}=m,H=a(U*U),Q=a(A*A),G=a(O*O),v=a(G*G),N=a(H*w),I=a(G*a(N+Q)),_=a(v+a(x*a(H*Q)));if(I!==_)throw new Error("bad point: equation left != right (1)");const k=a(U*A),W=a(O*S);if(k!==W)throw new Error("bad point: equation left != right (2)");return!0});class p{constructor(w,x,U,A){this.ex=l("x",w),this.ey=l("y",x),this.ez=l("z",U,!0),this.et=l("t",A),Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static fromAffine(w){if(w instanceof p)throw new Error("extended point not allowed");const{x,y:U}=w||{};return l("x",x),l("y",U),new p(x,U,rt,a(x*U))}static normalizeZ(w){return $h(p,"ez",w)}static msm(w,x){return qh(p,s,w,x)}_setWindowSize(w){this.precompute(w)}precompute(w=8,x=!0){return y.setWindowSize(this,w),x||this.multiply(_a),this}assertValidity(){h(this)}equals(w){u(w);const{ex:x,ey:U,ez:A}=this,{ex:O,ey:S,ez:H}=w,Q=a(x*H),G=a(O*A),v=a(U*H),N=a(S*A);return Q===G&&v===N}is0(){return this.equals(p.ZERO)}negate(){return new p(a(-this.ex),this.ey,this.ez,a(-this.et))}double(){const{a:w}=t,{ex:x,ey:U,ez:A}=this,O=a(x*x),S=a(U*U),H=a(_a*a(A*A)),Q=a(w*O),G=x+U,v=a(a(G*G)-O-S),N=Q+S,I=N-H,_=Q-S,k=a(v*I),W=a(N*_),$=a(v*_),z=a(I*N);return new p(k,W,z,$)}add(w){u(w);const{a:x,d:U}=t,{ex:A,ey:O,ez:S,et:H}=this,{ex:Q,ey:G,ez:v,et:N}=w,I=a(A*Q),_=a(O*G),k=a(H*U*N),W=a(S*v),$=a((A+O)*(Q+G)-I-_),z=W-k,q=W+k,P=a(_-x*I),be=a($*z),de=a(q*P),te=a($*P),he=a(z*q);return new p(be,de,he,te)}subtract(w){return this.add(w.negate())}multiply(w){const x=w;tr("scalar",x,rt,i);const{p:U,f:A}=y.wNAFCached(this,x,p.normalizeZ);return p.normalizeZ([U,A])[0]}multiplyUnsafe(w,x=p.ZERO){const U=w;return tr("scalar",U,ln,i),U===ln?p.ZERO:this.is0()||U===rt?this:y.wNAFCachedUnsafe(this,U,p.normalizeZ,x)}isSmallOrder(){return this.multiplyUnsafe(r).is0()}isTorsionFree(){return y.wNAFCachedUnsafe(this,i).is0()}toAffine(w){return d(this,w)}clearCofactor(){return r===rt?this:this.multiplyUnsafe(r)}static fromBytes(w,x=!1){return qe(w),this.fromHex(w,x)}static fromHex(w,x=!1){const{d:U,a:A}=t,O=n.BYTES;w=$e("pointHex",w,O),Rs("zip215",x);const S=w.slice(),H=w[O-1];S[O-1]=H&-129;const Q=fi(S),G=x?o:n.ORDER;tr("pointHex.y",Q,ln,G);const v=a(Q*Q),N=a(v-rt),I=a(U*v-A);let{isValid:_,value:k}=c(N,I);if(!_)throw new Error("Point.fromHex: invalid y coordinate");const W=(k&rt)===rt,$=(H&128)!==0;if(!x&&k===ln&&$)throw new Error("Point.fromHex: x=0 and x_0=1");return $!==W&&(k=a(-k)),p.fromAffine({x:k,y:Q})}static fromPrivateScalar(w){return p.BASE.multiply(w)}toBytes(){const{x:w,y:x}=this.toAffine(),U=qo(x,n.BYTES);return U[U.length-1]|=w&rt?128:0,U}toRawBytes(){return this.toBytes()}toHex(){return Xt(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}p.BASE=new p(t.Gx,t.Gy,rt,a(t.Gx*t.Gy)),p.ZERO=new p(ln,rt,rt,ln),p.Fp=n,p.Fn=s;const y=Wh(p,s.BYTES*8);return p}function Qw(t,e){vi(e,{hash:"function"},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",mapToCurve:"function"});const{prehash:n,hash:s}=e,{BASE:r,Fp:i,Fn:o}=t,a=o.ORDER,c=e.randomBytes||Hf,l=e.adjustScalarBytes||(S=>S),u=e.domain||((S,H,Q)=>{if(Rs("phflag",Q),H.length||Q)throw new Error("Contexts/pre-hash are not supported");return S});function d(S){return o.create(S)}function h(S){return d(fi(S))}function p(S){const H=i.BYTES;S=$e("private key",S,H);const Q=$e("hashed private key",s(S),2*H),G=l(Q.slice(0,H)),v=Q.slice(H,2*H),N=h(G);return{head:G,prefix:v,scalar:N}}function y(S){const{head:H,prefix:Q,scalar:G}=p(S),v=r.multiply(G),N=v.toBytes();return{head:H,prefix:Q,scalar:G,point:v,pointBytes:N}}function m(S){return y(S).pointBytes}function w(S=Uint8Array.of(),...H){const Q=At(...H);return h(s(u(Q,$e("context",S),!!n)))}function x(S,H,Q={}){S=$e("message",S),n&&(S=n(S));const{prefix:G,scalar:v,pointBytes:N}=y(H),I=w(Q.context,G,S),_=r.multiply(I).toBytes(),k=w(Q.context,_,N,S),W=d(I+k*v);tr("signature.s",W,ln,a);const $=i.BYTES,z=At(_,qo(W,$));return $e("result",z,$*2)}const U=Gw;function A(S,H,Q,G=U){const{context:v,zip215:N}=G,I=i.BYTES;S=$e("signature",S,2*I),H=$e("message",H),Q=$e("publicKey",Q,I),N!==void 0&&Rs("zip215",N),n&&(H=n(H));const _=fi(S.slice(I,2*I));let k,W,$;try{k=t.fromHex(Q,N),W=t.fromHex(S.slice(0,I),N),$=r.multiplyUnsafe(_)}catch{return!1}if(!N&&k.isSmallOrder())return!1;const z=w(v,W.toBytes(),k.toBytes(),H);return W.add(k.multiplyUnsafe(z)).subtract($).clearCofactor().is0()}return r.precompute(8),{getPublicKey:m,sign:x,verify:A,utils:{getExtendedPublicKey:y,randomPrivateKey:()=>c(i.BYTES),precompute(S=8,H=t.BASE){return H.precompute(S,!1)}},Point:t}}function Zw(t){const e={a:t.a,d:t.d,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp,s=Fn(e.n,t.nBitLength,!0),r={Fp:n,Fn:s,uvRatio:t.uvRatio},i={hash:t.hash,randomBytes:t.randomBytes,adjustScalarBytes:t.adjustScalarBytes,domain:t.domain,prehash:t.prehash,mapToCurve:t.mapToCurve};return{CURVE:e,curveOpts:r,eddsaOpts:i}}function Jw(t,e){return Object.assign({},e,{ExtendedPoint:e.Point,CURVE:t})}function Xw(t){const{CURVE:e,curveOpts:n,eddsaOpts:s}=Zw(t),r=Yw(e,n),i=Qw(r,s);return Jw(t,i)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);const e1=BigInt(1),Ol=BigInt(2);BigInt(3);const t1=BigInt(5),n1=BigInt(8),Go={p:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:n1,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function s1(t){const e=BigInt(10),n=BigInt(20),s=BigInt(40),r=BigInt(80),i=Go.p,a=t*t%i*t%i,c=De(a,Ol,i)*a%i,l=De(c,e1,i)*t%i,u=De(l,t1,i)*l%i,d=De(u,e,i)*u%i,h=De(d,n,i)*d%i,p=De(h,s,i)*h%i,y=De(p,r,i)*p%i,m=De(y,r,i)*p%i,w=De(m,e,i)*u%i;return{pow_p_5_8:De(w,Ol,i)*t%i,b2:a}}function r1(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const jl=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function i1(t,e){const n=Go.p,s=Be(e*e*e,n),r=Be(s*s*e,n),i=s1(t*r).pow_p_5_8;let o=Be(t*s*i,n);const a=Be(e*o*o,n),c=o,l=Be(o*jl,n),u=a===t,d=a===Be(-t,n),h=a===Be(-t*jl,n);return u&&(o=c),(d||h)&&(o=l),Lw(o,n)&&(o=Be(-o,n)),{isValid:u||d,value:o}}const o1=Fn(Go.p,void 0,!0),a1={...Go,Fp:o1,hash:pr,adjustScalarBytes:r1,uvRatio:i1},Tn=Xw(a1);function Gh(t,e){return J.IntentMessage(J.fixedArray(e.length,J.u8())).serialize({intent:{scope:{[t]:!0},version:{V0:!0},appId:{Sui:!0}},value:e}).toBytes()}const Vn={ED25519:0,Secp256k1:1,Secp256r1:2,MultiSig:3,ZkLogin:5,Passkey:6},c1={ED25519:32,Secp256k1:33,Secp256r1:33},uu={0:"ED25519",1:"Secp256k1",2:"Secp256r1",3:"MultiSig",5:"ZkLogin",6:"Passkey"};/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Cl(t){t.lowS!==void 0&&Rs("lowS",t.lowS),t.prehash!==void 0&&Rs("prehash",t.prehash)}class u1 extends Error{constructor(e=""){super(e)}}const Un={Err:u1,_tlv:{encode:(t,e)=>{const{Err:n}=Un;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const s=e.length/2,r=Ci(s);if(r.length/2&128)throw new n("tlv.encode: long form length too big");const i=s>127?Ci(r.length/2|128):"";return Ci(t)+i+r+e},decode(t,e){const{Err:n}=Un;let s=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new n("tlv.decode: wrong tlv");const r=e[s++],i=!!(r&128);let o=0;if(!i)o=r;else{const c=r&127;if(!c)throw new n("tlv.decode(long): indefinite length not supported");if(c>4)throw new n("tlv.decode(long): byte length is too big");const l=e.subarray(s,s+c);if(l.length!==c)throw new n("tlv.decode: length bytes not complete");if(l[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(s+=c,o<128)throw new n("tlv.decode(long): not minimal encoding")}const a=e.subarray(s,s+o);if(a.length!==o)throw new n("tlv.decode: wrong value length");return{v:a,l:e.subarray(s+o)}}},_int:{encode(t){const{Err:e}=Un;if(t<Gr)throw new e("integer: negative integers are not allowed");let n=Ci(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=Un;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return Wo(t)}},toSig(t){const{Err:e,_int:n,_tlv:s}=Un,r=$e("signature",t),{v:i,l:o}=s.decode(48,r);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=s.decode(2,i),{v:l,l:u}=s.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(a),s:n.decode(l)}},hexFromSig(t){const{_tlv:e,_int:n}=Un,s=e.encode(2,n.encode(t.r)),r=e.encode(2,n.encode(t.s)),i=s+r;return e.encode(48,i)}},Gr=BigInt(0),Hr=BigInt(1),l1=BigInt(2),ki=BigInt(3),d1=BigInt(4);function f1(t,e,n){function s(r){const i=t.sqr(r),o=t.mul(i,r);return t.add(t.add(o,t.mul(r,e)),n)}return s}function Hh(t,e,n){const{BYTES:s}=t;function r(i){let o;if(typeof i=="bigint")o=i;else{let a=$e("private key",i);if(e){if(!e.includes(a.length*2))throw new Error("invalid private key");const c=new Uint8Array(s);c.set(a,c.length-a.length),a=c}try{o=t.fromBytes(a)}catch{throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof i}`)}}if(n&&(o=t.create(o)),!t.isValidNot0(o))throw new Error("invalid private key: out of range [1..N-1]");return o}return r}function h1(t,e={}){const{Fp:n,Fn:s}=Kh("weierstrass",t,e),{h:r,n:i}=t;vi(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:o}=e;if(o&&(!n.is0(t.a)||typeof o.beta!="bigint"||typeof o.splitScalar!="function"))throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');function a(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function c(G,v,N){const{x:I,y:_}=v.toAffine(),k=n.toBytes(I);if(Rs("isCompressed",N),N){a();const W=!n.isOdd(_);return At(Yh(W),k)}else return At(Uint8Array.of(4),k,n.toBytes(_))}function l(G){qe(G);const v=n.BYTES,N=v+1,I=2*v+1,_=G.length,k=G[0],W=G.subarray(1);if(_===N&&(k===2||k===3)){const $=n.fromBytes(W);if(!n.isValid($))throw new Error("bad point: is not on curve, wrong x");const z=h($);let q;try{q=n.sqrt(z)}catch(de){const te=de instanceof Error?": "+de.message:"";throw new Error("bad point: is not on curve, sqrt error"+te)}a();const P=n.isOdd(q);return(k&1)===1!==P&&(q=n.neg(q)),{x:$,y:q}}else if(_===I&&k===4){const $=n.fromBytes(W.subarray(v*0,v*1)),z=n.fromBytes(W.subarray(v*1,v*2));if(!p($,z))throw new Error("bad point: is not on curve");return{x:$,y:z}}else throw new Error(`bad point: got length ${_}, expected compressed=${N} or uncompressed=${I}`)}const u=e.toBytes||c,d=e.fromBytes||l,h=f1(n,t.a,t.b);function p(G,v){const N=n.sqr(v),I=h(G);return n.eql(N,I)}if(!p(t.Gx,t.Gy))throw new Error("bad curve params: generator point");const y=n.mul(n.pow(t.a,ki),d1),m=n.mul(n.sqr(t.b),BigInt(27));if(n.is0(n.add(y,m)))throw new Error("bad curve params: a or b");function w(G,v,N=!1){if(!n.isValid(v)||N&&n.is0(v))throw new Error(`bad point coordinate ${G}`);return v}function x(G){if(!(G instanceof S))throw new Error("ProjectivePoint expected")}const U=Ao((G,v)=>{const{px:N,py:I,pz:_}=G;if(n.eql(_,n.ONE))return{x:N,y:I};const k=G.is0();v==null&&(v=k?n.ONE:n.inv(_));const W=n.mul(N,v),$=n.mul(I,v),z=n.mul(_,v);if(k)return{x:n.ZERO,y:n.ZERO};if(!n.eql(z,n.ONE))throw new Error("invZ was invalid");return{x:W,y:$}}),A=Ao(G=>{if(G.is0()){if(e.allowInfinityPoint&&!n.is0(G.py))return;throw new Error("bad point: ZERO")}const{x:v,y:N}=G.toAffine();if(!n.isValid(v)||!n.isValid(N))throw new Error("bad point: x or y not field elements");if(!p(v,N))throw new Error("bad point: equation left != right");if(!G.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function O(G,v,N,I,_){return N=new S(n.mul(N.px,G),N.py,N.pz),v=Kr(I,v),N=Kr(_,N),v.add(N)}class S{constructor(v,N,I){this.px=w("x",v),this.py=w("y",N,!0),this.pz=w("z",I),Object.freeze(this)}static fromAffine(v){const{x:N,y:I}=v||{};if(!v||!n.isValid(N)||!n.isValid(I))throw new Error("invalid affine point");if(v instanceof S)throw new Error("projective point not allowed");return n.is0(N)&&n.is0(I)?S.ZERO:new S(N,I,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(v){return $h(S,"pz",v)}static fromBytes(v){return qe(v),S.fromHex(v)}static fromHex(v){const N=S.fromAffine(d($e("pointHex",v)));return N.assertValidity(),N}static fromPrivateKey(v){const N=Hh(s,e.allowedPrivateKeyLengths,e.wrapPrivateKey);return S.BASE.multiply(N(v))}static msm(v,N){return qh(S,s,v,N)}precompute(v=8,N=!0){return Q.setWindowSize(this,v),N||this.multiply(ki),this}_setWindowSize(v){this.precompute(v)}assertValidity(){A(this)}hasEvenY(){const{y:v}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(v)}equals(v){x(v);const{px:N,py:I,pz:_}=this,{px:k,py:W,pz:$}=v,z=n.eql(n.mul(N,$),n.mul(k,_)),q=n.eql(n.mul(I,$),n.mul(W,_));return z&&q}negate(){return new S(this.px,n.neg(this.py),this.pz)}double(){const{a:v,b:N}=t,I=n.mul(N,ki),{px:_,py:k,pz:W}=this;let $=n.ZERO,z=n.ZERO,q=n.ZERO,P=n.mul(_,_),be=n.mul(k,k),de=n.mul(W,W),te=n.mul(_,k);return te=n.add(te,te),q=n.mul(_,W),q=n.add(q,q),$=n.mul(v,q),z=n.mul(I,de),z=n.add($,z),$=n.sub(be,z),z=n.add(be,z),z=n.mul($,z),$=n.mul(te,$),q=n.mul(I,q),de=n.mul(v,de),te=n.sub(P,de),te=n.mul(v,te),te=n.add(te,q),q=n.add(P,P),P=n.add(q,P),P=n.add(P,de),P=n.mul(P,te),z=n.add(z,P),de=n.mul(k,W),de=n.add(de,de),P=n.mul(de,te),$=n.sub($,P),q=n.mul(de,be),q=n.add(q,q),q=n.add(q,q),new S($,z,q)}add(v){x(v);const{px:N,py:I,pz:_}=this,{px:k,py:W,pz:$}=v;let z=n.ZERO,q=n.ZERO,P=n.ZERO;const be=t.a,de=n.mul(t.b,ki);let te=n.mul(N,k),he=n.mul(I,W),ze=n.mul(_,$),Ke=n.add(N,I),ve=n.add(k,W);Ke=n.mul(Ke,ve),ve=n.add(te,he),Ke=n.sub(Ke,ve),ve=n.add(N,_);let Pe=n.add(k,$);return ve=n.mul(ve,Pe),Pe=n.add(te,ze),ve=n.sub(ve,Pe),Pe=n.add(I,_),z=n.add(W,$),Pe=n.mul(Pe,z),z=n.add(he,ze),Pe=n.sub(Pe,z),P=n.mul(be,ve),z=n.mul(de,ze),P=n.add(z,P),z=n.sub(he,P),P=n.add(he,P),q=n.mul(z,P),he=n.add(te,te),he=n.add(he,te),ze=n.mul(be,ze),ve=n.mul(de,ve),he=n.add(he,ze),ze=n.sub(te,ze),ze=n.mul(be,ze),ve=n.add(ve,ze),te=n.mul(he,ve),q=n.add(q,te),te=n.mul(Pe,ve),z=n.mul(Ke,z),z=n.sub(z,te),te=n.mul(Ke,he),P=n.mul(Pe,P),P=n.add(P,te),new S(z,q,P)}subtract(v){return this.add(v.negate())}is0(){return this.equals(S.ZERO)}multiply(v){const{endo:N}=e;if(!s.isValidNot0(v))throw new Error("invalid scalar: out of range");let I,_;const k=W=>Q.wNAFCached(this,W,S.normalizeZ);if(N){const{k1neg:W,k1:$,k2neg:z,k2:q}=N.splitScalar(v),{p:P,f:be}=k($),{p:de,f:te}=k(q);_=be.add(te),I=O(N.beta,P,de,W,z)}else{const{p:W,f:$}=k(v);I=W,_=$}return S.normalizeZ([I,_])[0]}multiplyUnsafe(v){const{endo:N}=e,I=this;if(!s.isValid(v))throw new Error("invalid scalar: out of range");if(v===Gr||I.is0())return S.ZERO;if(v===Hr)return I;if(Q.hasPrecomputes(this))return this.multiply(v);if(N){const{k1neg:_,k1:k,k2neg:W,k2:$}=N.splitScalar(v),{p1:z,p2:q}=qw(S,I,k,$);return O(N.beta,z,q,_,W)}else return Q.wNAFCachedUnsafe(I,v)}multiplyAndAddUnsafe(v,N,I){const _=this.multiplyUnsafe(N).add(v.multiplyUnsafe(I));return _.is0()?void 0:_}toAffine(v){return U(this,v)}isTorsionFree(){const{isTorsionFree:v}=e;return r===Hr?!0:v?v(S,this):Q.wNAFCachedUnsafe(this,i).is0()}clearCofactor(){const{clearCofactor:v}=e;return r===Hr?this:v?v(S,this):this.multiplyUnsafe(r)}toBytes(v=!0){return Rs("isCompressed",v),this.assertValidity(),u(S,this,v)}toRawBytes(v=!0){return this.toBytes(v)}toHex(v=!0){return Xt(this.toBytes(v))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}S.BASE=new S(t.Gx,t.Gy,n.ONE),S.ZERO=new S(n.ZERO,n.ONE,n.ZERO),S.Fp=n,S.Fn=s;const H=s.BITS,Q=Wh(S,e.endo?Math.ceil(H/2):H);return S}function Yh(t){return Uint8Array.of(t?2:3)}function p1(t,e,n={}){vi(e,{hash:"function"},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const s=e.randomBytes||Hf,r=e.hmac||((I,..._)=>Ps(e.hash,I,At(..._))),{Fp:i,Fn:o}=t,{ORDER:a,BITS:c}=o;function l(I){const _=a>>Hr;return I>_}function u(I){return l(I)?o.neg(I):I}function d(I,_){if(!o.isValidNot0(_))throw new Error(`invalid signature ${I}: out of range 1..CURVE.n`)}class h{constructor(_,k,W){d("r",_),d("s",k),this.r=_,this.s=k,W!=null&&(this.recovery=W),Object.freeze(this)}static fromCompact(_){const k=o.BYTES,W=$e("compactSignature",_,k*2);return new h(o.fromBytes(W.subarray(0,k)),o.fromBytes(W.subarray(k,k*2)))}static fromDER(_){const{r:k,s:W}=Un.toSig($e("DER",_));return new h(k,W)}assertValidity(){}addRecoveryBit(_){return new h(this.r,this.s,_)}recoverPublicKey(_){const k=i.ORDER,{r:W,s:$,recovery:z}=this;if(z==null||![0,1,2,3].includes(z))throw new Error("recovery id invalid");if(a*l1<k&&z>1)throw new Error("recovery id is ambiguous for h>1 curve");const P=z===2||z===3?W+a:W;if(!i.isValid(P))throw new Error("recovery id 2 or 3 invalid");const be=i.toBytes(P),de=t.fromHex(At(Yh((z&1)===0),be)),te=o.inv(P),he=A($e("msgHash",_)),ze=o.create(-he*te),Ke=o.create($*te),ve=t.BASE.multiplyUnsafe(ze).add(de.multiplyUnsafe(Ke));if(ve.is0())throw new Error("point at infinify");return ve.assertValidity(),ve}hasHighS(){return l(this.s)}normalizeS(){return this.hasHighS()?new h(this.r,o.neg(this.s),this.recovery):this}toBytes(_){if(_==="compact")return At(o.toBytes(this.r),o.toBytes(this.s));if(_==="der")return yi(Un.hexFromSig(this));throw new Error("invalid format")}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return Xt(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return Xt(this.toBytes("compact"))}}const p=Hh(o,n.allowedPrivateKeyLengths,n.wrapPrivateKey),y={isValidPrivateKey(I){try{return p(I),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const I=a;return Fw(s(Rh(I)),I)},precompute(I=8,_=t.BASE){return _.precompute(I,!1)}};function m(I,_=!0){return t.fromPrivateKey(I).toBytes(_)}function w(I){if(typeof I=="bigint")return!1;if(I instanceof t)return!0;const k=$e("key",I).length,W=i.BYTES,$=W+1,z=2*W+1;if(!(n.allowedPrivateKeyLengths||o.BYTES===$))return k===$||k===z}function x(I,_,k=!0){if(w(I)===!0)throw new Error("first arg must be private key");if(w(_)===!1)throw new Error("second arg must be public key");return t.fromHex(_).multiply(p(I)).toBytes(k)}const U=e.bits2int||function(I){if(I.length>8192)throw new Error("input is too large");const _=Wo(I),k=I.length*8-c;return k>0?_>>BigInt(k):_},A=e.bits2int_modN||function(I){return o.create(U(I))},O=Ko(c);function S(I){return tr("num < 2^"+c,I,Gr,O),o.toBytes(I)}function H(I,_,k=Q){if(["recovered","canonical"].some(Ke=>Ke in k))throw new Error("sign() legacy options not supported");const{hash:W}=e;let{lowS:$,prehash:z,extraEntropy:q}=k;$==null&&($=!0),I=$e("msgHash",I),Cl(k),z&&(I=$e("prehashed msgHash",W(I)));const P=A(I),be=p(_),de=[S(be),S(P)];if(q!=null&&q!==!1){const Ke=q===!0?s(i.BYTES):q;de.push($e("extraEntropy",Ke))}const te=At(...de),he=P;function ze(Ke){const ve=U(Ke);if(!o.isValidNot0(ve))return;const Pe=o.inv(ve),en=t.BASE.multiply(ve).toAffine(),tn=o.create(en.x);if(tn===Gr)return;const nn=o.create(Pe*o.create(he+tn*be));if(nn===Gr)return;let Mn=(en.x===tn?0:2)|Number(en.y&Hr),ws=nn;return $&&l(nn)&&(ws=u(nn),Mn^=1),new h(tn,ws,Mn)}return{seed:te,k2sig:ze}}const Q={lowS:e.lowS,prehash:!1},G={lowS:e.lowS,prehash:!1};function v(I,_,k=Q){const{seed:W,k2sig:$}=H(I,_,k);return Cw(e.hash.outputLen,o.BYTES,r)(W,$)}t.BASE.precompute(8);function N(I,_,k,W=G){const $=I;_=$e("msgHash",_),k=$e("publicKey",k),Cl(W);const{lowS:z,prehash:q,format:P}=W;if("strict"in W)throw new Error("options.strict was renamed to lowS");if(P!==void 0&&!["compact","der","js"].includes(P))throw new Error('format must be "compact", "der" or "js"');const be=typeof $=="string"||Kc($),de=!be&&!P&&typeof $=="object"&&$!==null&&typeof $.r=="bigint"&&typeof $.s=="bigint";if(!be&&!de)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let te,he;try{if(de)if(P===void 0||P==="js")te=new h($.r,$.s);else throw new Error("invalid format");if(be){try{P!=="compact"&&(te=h.fromDER($))}catch(ws){if(!(ws instanceof Un.Err))throw ws}!te&&P!=="der"&&(te=h.fromCompact($))}he=t.fromHex(k)}catch{return!1}if(!te||z&&te.hasHighS())return!1;q&&(_=e.hash(_));const{r:ze,s:Ke}=te,ve=A(_),Pe=o.inv(Ke),en=o.create(ve*Pe),tn=o.create(ze*Pe),nn=t.BASE.multiplyUnsafe(en).add(he.multiplyUnsafe(tn));return nn.is0()?!1:o.create(nn.x)===ze}return Object.freeze({getPublicKey:m,getSharedSecret:x,sign:v,verify:N,utils:y,Point:t,Signature:h})}function g1(t){const e={a:t.a,b:t.b,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp,s=Fn(e.n,t.nBitLength),r={Fp:n,Fn:s,allowedPrivateKeyLengths:t.allowedPrivateKeyLengths,allowInfinityPoint:t.allowInfinityPoint,endo:t.endo,wrapPrivateKey:t.wrapPrivateKey,isTorsionFree:t.isTorsionFree,clearCofactor:t.clearCofactor,fromBytes:t.fromBytes,toBytes:t.toBytes};return{CURVE:e,curveOpts:r}}function b1(t){const{CURVE:e,curveOpts:n}=g1(t),s={hash:t.hash,hmac:t.hmac,randomBytes:t.randomBytes,lowS:t.lowS,bits2int:t.bits2int,bits2int_modN:t.bits2int_modN};return{CURVE:e,curveOpts:n,ecdsaOpts:s}}function y1(t,e){return Object.assign({},e,{ProjectivePoint:e.Point,CURVE:t})}function m1(t){const{CURVE:e,curveOpts:n,ecdsaOpts:s}=b1(t),r=h1(e,n),i=p1(r,s,n);return y1(t,i)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ho(t,e){const n=s=>m1({...t,hash:s});return{...n(e),create:n}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Qh={p:BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),h:BigInt(1),a:BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),b:BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")},Zh={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),n:BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),h:BigInt(1),a:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),b:BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),Gx:BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),Gy:BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")},Jh={p:BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),n:BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),h:BigInt(1),a:BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),b:BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),Gx:BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),Gy:BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")},w1=Fn(Qh.p),v1=Fn(Zh.p),S1=Fn(Jh.p),M1=Ho({...Qh,Fp:w1,lowS:!1},Sr);Ho({...Zh,Fp:v1,lowS:!1},vw);Ho({...Jh,Fp:S1,lowS:!1,allowedPrivateKeyLengths:[130,131,132]},pr);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pn=M1,br=Sr;function yr(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}class Si{equals(e){return yr(this.toRawBytes(),e.toRawBytes())}toBase64(){return Me(this.toRawBytes())}toString(){throw new Error("`toString` is not implemented on public keys. Use `toBase64()` or `toRawBytes()` instead.")}toSuiPublicKey(){const e=this.toSuiBytes();return Me(e)}verifyWithIntent(e,n,s){const r=Gh(s,e),i=hs(r,{dkLen:32});return this.verify(i,n)}verifyPersonalMessage(e,n){return this.verifyWithIntent(J.vector(J.u8()).serialize(e).toBytes(),n,"PersonalMessage")}verifyTransaction(e,n){return this.verifyWithIntent(e,n,"TransactionData")}verifyAddress(e){return this.toSuiAddress()===e}toSuiBytes(){const e=this.toRawBytes(),n=new Uint8Array(e.length+1);return n.set([this.flag()]),n.set(e,1),n}toSuiAddress(){return ce(Xt(hs(this.toSuiBytes(),{dkLen:32})).slice(0,mr*2))}}function lu(t){const e=we(t),n=uu[e[0]];switch(n){case"ED25519":case"Secp256k1":case"Secp256r1":const s=c1[n],r=e.slice(1,e.length-s),i=e.slice(1+r.length);return{serializedSignature:t,signatureScheme:n,signature:r,publicKey:i,bytes:e};default:throw new Error("Unsupported signature scheme")}}const rc=33,ic=64;class x1 extends Si{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==rc)throw new Error(`Invalid public key input. Expected ${rc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Vn.Passkey}async verify(e,n){const s=Xh(n),r=JSON.parse(s.clientDataJson);if(r.type!=="webauthn.get")return!1;const i=we(r.challenge.replace(/-/g,"+").replace(/_/g,"/"));if(!yr(e,i))return!1;const o=s.userSignature.slice(1+ic);if(!yr(this.toRawBytes(),o))return!1;const a=new Uint8Array([...s.authenticatorData,...br(s.clientDataJson)]),c=s.userSignature.slice(1,ic+1);return pn.verify(c,br(a),o)}}x1.SIZE=rc;function Xh(t){const e=typeof t=="string"?we(t):t;if(e[0]!==Vn.Passkey)throw new Error("Invalid signature scheme");const n=zf.parse(e.slice(1));return{signatureScheme:"Passkey",serializedSignature:Me(e),signature:e,authenticatorData:n.authenticatorData,clientDataJson:n.clientDataJson,userSignature:new Uint8Array(n.userSignature),publicKey:new Uint8Array(n.userSignature.slice(1+ic))}}function I1(t,e){if(!!!t)throw new Error(e)}const ep={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},_1=new Set(Object.keys(ep));function kl(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&_1.has(e)}var Dl;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(Dl||(Dl={}));var oc;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(oc||(oc={}));function Ul(t){return t===9||t===32}function E1(t,e){const n=t.replace(/"""/g,'\\"""'),s=n.split(/\r\n|[\n\r]/g),r=s.length===1,i=s.length>1&&s.slice(1).every(p=>p.length===0||Ul(p.charCodeAt(0))),o=n.endsWith('\\"""'),a=t.endsWith('"')&&!o,c=t.endsWith("\\"),l=a||c,u=!r||t.length>70||l||i||o;let d="";const h=r&&Ul(t.charCodeAt(0));return(u&&!h||i)&&(d+=`
`),d+=n,(u||l)&&(d+=`
`),'"""'+d+'"""'}const A1=10,tp=2;function N1(t){return Yo(t,[])}function Yo(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return T1(t,e);default:return String(t)}}function T1(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const n=[...e,t];if(O1(t)){const s=t.toJSON();if(s!==t)return typeof s=="string"?s:Yo(s,n)}else if(Array.isArray(t))return C1(t,n);return j1(t,n)}function O1(t){return typeof t.toJSON=="function"}function j1(t,e){const n=Object.entries(t);return n.length===0?"{}":e.length>tp?"["+k1(t)+"]":"{ "+n.map(([r,i])=>r+": "+Yo(i,e)).join(", ")+" }"}function C1(t,e){if(t.length===0)return"[]";if(e.length>tp)return"[Array]";const n=Math.min(A1,t.length),s=t.length-n,r=[];for(let i=0;i<n;++i)r.push(Yo(t[i],e));return s===1?r.push("... 1 more item"):s>1&&r.push(`... ${s} more items`),"["+r.join(", ")+"]"}function k1(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}function D1(t){return`"${t.replace(U1,B1)}"`}const U1=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function B1(t){return L1[t.charCodeAt(0)]}const L1=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],z1=Object.freeze({});function P1(t,e,n=ep){const s=new Map;for(const x of Object.values(oc))s.set(x,R1(e,x));let r,i=Array.isArray(t),o=[t],a=-1,c=[],l=t,u,d;const h=[],p=[];do{a++;const x=a===o.length,U=x&&c.length!==0;if(x){if(u=p.length===0?void 0:h[h.length-1],l=d,d=p.pop(),U)if(i){l=l.slice();let O=0;for(const[S,H]of c){const Q=S-O;H===null?(l.splice(Q,1),O++):l[Q]=H}}else{l={...l};for(const[O,S]of c)l[O]=S}a=r.index,o=r.keys,c=r.edits,i=r.inArray,r=r.prev}else if(d){if(u=i?a:o[a],l=d[u],l==null)continue;h.push(u)}let A;if(!Array.isArray(l)){var y,m;kl(l)||I1(!1,`Invalid AST Node: ${N1(l)}.`);const O=x?(y=s.get(l.kind))===null||y===void 0?void 0:y.leave:(m=s.get(l.kind))===null||m===void 0?void 0:m.enter;if(A=O==null?void 0:O.call(e,l,u,d,h,p),A===z1)break;if(A===!1){if(!x){h.pop();continue}}else if(A!==void 0&&(c.push([u,A]),!x))if(kl(A))l=A;else{h.pop();continue}}if(A===void 0&&U&&c.push([u,l]),x)h.pop();else{var w;r={inArray:i,index:a,keys:o,edits:c,prev:r},i=Array.isArray(l),o=i?l:(w=n[l.kind])!==null&&w!==void 0?w:[],a=-1,c=[],d&&p.push(d),d=l}}while(r!==void 0);return c.length!==0?c[c.length-1][1]:t}function R1(t,e){const n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function $1(t){return P1(t,V1)}const F1=80,V1={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>Y(t.definitions,`

`)},OperationDefinition:{leave(t){const e=le("(",Y(t.variableDefinitions,", "),")"),n=Y([t.operation,Y([t.name,e]),Y(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:s})=>t+": "+e+le(" = ",n)+le(" ",Y(s," "))},SelectionSet:{leave:({selections:t})=>Rt(t)},Field:{leave({alias:t,name:e,arguments:n,directives:s,selectionSet:r}){const i=le("",t,": ")+e;let o=i+le("(",Y(n,", "),")");return o.length>F1&&(o=i+le(`(
`,Zi(Y(n,`
`)),`
)`)),Y([o,Y(s," "),r]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+le(" ",Y(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>Y(["...",le("on ",t),Y(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:s,selectionSet:r})=>`fragment ${t}${le("(",Y(n,", "),")")} on ${e} ${le("",Y(s," ")," ")}`+r},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?E1(t):D1(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+Y(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+Y(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+le("(",Y(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>le("",t,`
`)+Y(["schema",Y(e," "),Rt(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>le("",t,`
`)+Y(["scalar",e,Y(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>le("",t,`
`)+Y(["type",e,le("implements ",Y(n," & ")),Y(s," "),Rt(r)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:s,directives:r})=>le("",t,`
`)+e+(Bl(n)?le(`(
`,Zi(Y(n,`
`)),`
)`):le("(",Y(n,", "),")"))+": "+s+le(" ",Y(r," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:s,directives:r})=>le("",t,`
`)+Y([e+": "+n,le("= ",s),Y(r," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>le("",t,`
`)+Y(["interface",e,le("implements ",Y(n," & ")),Y(s," "),Rt(r)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:s})=>le("",t,`
`)+Y(["union",e,Y(n," "),le("= ",Y(s," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:s})=>le("",t,`
`)+Y(["enum",e,Y(n," "),Rt(s)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>le("",t,`
`)+Y([e,Y(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:s})=>le("",t,`
`)+Y(["input",e,Y(n," "),Rt(s)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,repeatable:s,locations:r})=>le("",t,`
`)+"directive @"+e+(Bl(n)?le(`(
`,Zi(Y(n,`
`)),`
)`):le("(",Y(n,", "),")"))+(s?" repeatable":"")+" on "+Y(r," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>Y(["extend schema",Y(t," "),Rt(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>Y(["extend scalar",t,Y(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>Y(["extend type",t,le("implements ",Y(e," & ")),Y(n," "),Rt(s)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>Y(["extend interface",t,le("implements ",Y(e," & ")),Y(n," "),Rt(s)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>Y(["extend union",t,Y(e," "),le("= ",Y(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>Y(["extend enum",t,Y(e," "),Rt(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>Y(["extend input",t,Y(e," "),Rt(n)]," ")}};function Y(t,e=""){var n;return(n=t==null?void 0:t.filter(s=>s).join(e))!==null&&n!==void 0?n:""}function Rt(t){return le(`{
`,Zi(Y(t,`
`)),`
}`)}function le(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function Zi(t){return le("  ",t.replace(/\n/g,`
  `))}function Bl(t){var e;return(e=t==null?void 0:t.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}var ac=(t=>(t.PersonalMessage="PERSONAL_MESSAGE",t.TransactionData="TRANSACTION_DATA",t))(ac||{});class st extends String{constructor(e,n){super(e),this.value=e,this.__meta__=n}toString(){return this.value}}new st(`
    fragment OBJECT_OWNER_FIELDS on ObjectOwner {
  __typename
  ... on AddressOwner {
    owner {
      asObject {
        address
      }
      asAddress {
        address
      }
    }
  }
  ... on Parent {
    parent {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusV2 {
    authenticator {
      ... on Address {
        address
      }
    }
  }
}
    `,{fragmentName:"OBJECT_OWNER_FIELDS"});new st(`
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
}
    fragment OBJECT_OWNER_FIELDS on ObjectOwner {
  __typename
  ... on AddressOwner {
    owner {
      asObject {
        address
      }
      asAddress {
        address
      }
    }
  }
  ... on Parent {
    parent {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusV2 {
    authenticator {
      ... on Address {
        address
      }
    }
  }
}`,{fragmentName:"OBJECT_FIELDS"});new st(`
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
}
    fragment OBJECT_OWNER_FIELDS on ObjectOwner {
  __typename
  ... on AddressOwner {
    owner {
      asObject {
        address
      }
      asAddress {
        address
      }
    }
  }
  ... on Parent {
    parent {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusV2 {
    authenticator {
      ... on Address {
        address
      }
    }
  }
}`,{fragmentName:"MOVE_OBJECT_FIELDS"});new st(`
    fragment TRANSACTION_FIELDS on TransactionBlock {
  digest
  bcs
  signatures
  effects {
    bcs
    epoch {
      epochId
    }
    unchangedSharedObjects {
      nodes {
        __typename
        ... on SharedObjectRead {
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
  }
}
    `,{fragmentName:"TRANSACTION_FIELDS"});const W1=new st(`
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
        coinObjectCount
        totalBalance
      }
    }
  }
}
    `),q1=new st(`
    query getBalance($owner: SuiAddress!, $type: String = "0x2::sui::SUI") {
  address(address: $owner) {
    balance(type: $type) {
      coinType {
        repr
      }
      coinObjectCount
      totalBalance
    }
  }
}
    `),K1=new st(`
    query getCoins($owner: SuiAddress!, $first: Int, $cursor: String, $type: String = "0x2::sui::SUI") {
  address(address: $owner) {
    address
    coins(first: $first, after: $cursor, type: $type) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        coinBalance
        owner {
          ...OBJECT_OWNER_FIELDS
        }
        contents {
          bcs
          type {
            repr
          }
        }
        address
        version
        digest
      }
    }
  }
}
    fragment OBJECT_OWNER_FIELDS on ObjectOwner {
  __typename
  ... on AddressOwner {
    owner {
      asObject {
        address
      }
      asAddress {
        address
      }
    }
  }
  ... on Parent {
    parent {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusV2 {
    authenticator {
      ... on Address {
        address
      }
    }
  }
}`),G1=new st(`
    query getDynamicFields($parentId: SuiAddress!, $first: Int, $cursor: String) {
  owner(address: $parentId) {
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
    `),H1=new st(`
    query getReferenceGasPrice {
  epoch {
    referenceGasPrice
  }
}
    `),Y1=new st(`
    query resolveNameServiceNames($address: SuiAddress!, $limit: Int, $cursor: String) {
  address(address: $address) {
    suinsRegistrations(first: $limit, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        domain
      }
    }
  }
}
    `),Q1=new st(`
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
}
fragment OBJECT_OWNER_FIELDS on ObjectOwner {
  __typename
  ... on AddressOwner {
    owner {
      asObject {
        address
      }
      asAddress {
        address
      }
    }
  }
  ... on Parent {
    parent {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusV2 {
    authenticator {
      ... on Address {
        address
      }
    }
  }
}`),Z1=new st(`
    query multiGetObjects($objectIds: [SuiAddress!]!, $limit: Int, $cursor: String) {
  objects(first: $limit, after: $cursor, filter: {objectIds: $objectIds}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      ...OBJECT_FIELDS
    }
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
}
fragment OBJECT_OWNER_FIELDS on ObjectOwner {
  __typename
  ... on AddressOwner {
    owner {
      asObject {
        address
      }
      asAddress {
        address
      }
    }
  }
  ... on Parent {
    parent {
      address
    }
  }
  ... on Shared {
    initialSharedVersion
  }
  ... on ConsensusV2 {
    authenticator {
      ... on Address {
        address
      }
    }
  }
}`),J1=new st(`
    query dryRunTransactionBlock($txBytes: String!) {
  dryRunTransactionBlock(txBytes: $txBytes) {
    error
    transaction {
      ...TRANSACTION_FIELDS
    }
  }
}
    fragment TRANSACTION_FIELDS on TransactionBlock {
  digest
  bcs
  signatures
  effects {
    bcs
    epoch {
      epochId
    }
    unchangedSharedObjects {
      nodes {
        __typename
        ... on SharedObjectRead {
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
  }
}`),X1=new st(`
    mutation executeTransactionBlock($txBytes: String!, $signatures: [String!]!) {
  executeTransactionBlock(txBytes: $txBytes, signatures: $signatures) {
    errors
    effects {
      transactionBlock {
        ...TRANSACTION_FIELDS
      }
    }
  }
}
    fragment TRANSACTION_FIELDS on TransactionBlock {
  digest
  bcs
  signatures
  effects {
    bcs
    epoch {
      epochId
    }
    unchangedSharedObjects {
      nodes {
        __typename
        ... on SharedObjectRead {
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
  }
}`),e2=new st(`
    query getTransactionBlock($digest: String!) {
  transactionBlock(digest: $digest) {
    ...TRANSACTION_FIELDS
  }
}
    fragment TRANSACTION_FIELDS on TransactionBlock {
  digest
  bcs
  signatures
  effects {
    bcs
    epoch {
      epochId
    }
    unchangedSharedObjects {
      nodes {
        __typename
        ... on SharedObjectRead {
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
  }
}`),t2=new st(`
    query verifyZkLoginSignature($bytes: Base64!, $signature: Base64!, $intentScope: ZkLoginIntentScope!, $author: SuiAddress!) {
  verifyZkloginSignature(
    bytes: $bytes
    signature: $signature
    intentScope: $intentScope
    author: $author
  ) {
    success
    errors
  }
}
    `);var np=t=>{throw TypeError(t)},du=(t,e,n)=>e.has(t)||np("Cannot "+n),n2=(t,e,n)=>(du(t,e,"read from private field"),n?n.call(t):e.get(t)),Ll=(t,e,n)=>e.has(t)?np("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),s2=(t,e,n,s)=>(du(t,e,"write to private field"),e.set(t,n),n),jt=(t,e,n)=>(du(t,e,"access private method"),n),No,dt,Mt;class r2 extends xh{constructor(e){super({network:e.network}),Ll(this,dt),Ll(this,No),s2(this,No,e)}async getObjects(e){const n=[];let s=!0,r=null;for(;s;){const i=await jt(this,dt,Mt).call(this,{query:Z1,variables:{objectIds:e.objectIds,cursor:r}},o=>o.objects);n.push(...i.nodes),s=i.pageInfo.hasNextPage,r=i.pageInfo.endCursor??null}return{objects:e.objectIds.map(i=>ce(i)).map(i=>n.find(o=>o.address===i)??new yn("notFound",`Object ${i} not found`)).map(i=>{var o,a,c,l,u;return i instanceof yn?i:{id:i.address,version:i.version.toString(),digest:i.digest,owner:Ea(i.owner),type:(c=(a=(o=i.asMoveObject)==null?void 0:o.contents)==null?void 0:a.type)==null?void 0:c.repr,content:Promise.resolve((u=(l=i.asMoveObject)==null?void 0:l.contents)!=null&&u.bcs?we(i.asMoveObject.contents.bcs):new Uint8Array)}})}}async getOwnedObjects(e){const n=await jt(this,dt,Mt).call(this,{query:Q1,variables:{owner:e.address,limit:e.limit,cursor:e.cursor,filter:e.type?{type:e.type}:void 0}},s=>{var r;return(r=s.address)==null?void 0:r.objects});return{objects:n.nodes.map(s=>{var r,i,o;return{id:s.address,version:s.version.toString(),digest:s.digest,owner:Ea(s.owner),type:(i=(r=s.contents)==null?void 0:r.type)==null?void 0:i.repr,content:Promise.resolve((o=s.contents)!=null&&o.bcs?we(s.contents.bcs):new Uint8Array)}}),hasNextPage:n.pageInfo.hasNextPage,cursor:n.pageInfo.endCursor??null}}async getCoins(e){const n=await jt(this,dt,Mt).call(this,{query:K1,variables:{owner:e.address,cursor:e.cursor,first:e.limit,type:e.coinType}},s=>{var r;return(r=s.address)==null?void 0:r.coins});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,objects:n.nodes.map(s=>{var r,i,o;return{id:s.address,version:s.version.toString(),digest:s.digest,owner:Ea(s.owner),type:(i=(r=s.contents)==null?void 0:r.type)==null?void 0:i.repr,balance:s.coinBalance,content:Promise.resolve((o=s.contents)!=null&&o.bcs?we(s.contents.bcs):new Uint8Array)}})}}async getBalance(e){const n=await jt(this,dt,Mt).call(this,{query:q1,variables:{owner:e.address,type:e.coinType}},s=>{var r;return(r=s.address)==null?void 0:r.balance});return{balance:{coinType:n.coinType.repr,balance:n.totalBalance}}}async getAllBalances(e){const n=await jt(this,dt,Mt).call(this,{query:W1,variables:{owner:e.address}},s=>{var r;return(r=s.address)==null?void 0:r.balances});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,balances:n.nodes.map(s=>({coinType:s.coinType.repr,balance:s.totalBalance}))}}async getTransaction(e){const n=await jt(this,dt,Mt).call(this,{query:e2,variables:{digest:e.digest}},s=>s.transactionBlock);return{transaction:Aa(n)}}async executeTransaction(e){const n=await jt(this,dt,Mt).call(this,{query:X1,variables:{txBytes:Me(e.transaction),signatures:e.signatures}},s=>s.executeTransactionBlock);if(n.errors)throw n.errors.length===1?new Error(n.errors[0]):new AggregateError(n.errors.map(s=>new Error(s)));return{transaction:Aa(n.effects.transactionBlock)}}async dryRunTransaction(e){const n=await jt(this,dt,Mt).call(this,{query:J1,variables:{txBytes:Me(e.transaction)}},s=>s.dryRunTransactionBlock);if(n.error)throw new Error(n.error);return{transaction:Aa(n.transaction)}}async getReferenceGasPrice(){return{referenceGasPrice:(await jt(this,dt,Mt).call(this,{query:H1},n=>{var s;return(s=n.epoch)==null?void 0:s.referenceGasPrice})).referenceGasPrice}}async getDynamicFields(e){const n=await jt(this,dt,Mt).call(this,{query:G1,variables:{parentId:e.parentId}},s=>{var r;return(r=s.owner)==null?void 0:r.dynamicFields});return{dynamicFields:n.nodes.map(s=>{var i,o,a,c,l,u,d,h,p,y,m;const r=((i=s.value)==null?void 0:i.__typename)==="MoveObject"?(a=(o=s.value.contents)==null?void 0:o.type)==null?void 0:a.repr:(c=s.value)==null?void 0:c.type.repr;return{id:Qf(e.parentId,(l=s.name)==null?void 0:l.type.repr,(u=s.name)==null?void 0:u.bcs),type:ai(((d=s.value)==null?void 0:d.__typename)==="MoveObject"?`0x2::dynamic_field::Field<0x2::dynamic_object_field::Wrapper<${(h=s.name)==null?void 0:h.type.repr}>,0x2::object::ID>`:`0x2::dynamic_field::Field<${(p=s.name)==null?void 0:p.type.repr},${r}>`),name:{type:(y=s.name)==null?void 0:y.type.repr,bcs:we((m=s.name)==null?void 0:m.bcs)},valueType:r}}),cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage}}async verifyZkLoginSignature(e){const n=e.intentScope==="TransactionData"?ac.TransactionData:ac.PersonalMessage,s=await jt(this,dt,Mt).call(this,{query:t2,variables:{bytes:e.bytes,signature:e.signature,intentScope:n,author:e.author}},r=>r.verifyZkloginSignature);return{success:s.success,errors:s.errors}}async resolveNameServiceNames(e){const n=await jt(this,dt,Mt).call(this,{query:Y1,signal:e.signal,variables:{address:e.address,cursor:e.cursor,limit:e.limit}},s=>{var r;return(r=s.address)==null?void 0:r.suinsRegistrations});return{hasNextPage:n.pageInfo.hasNextPage,nextCursor:n.pageInfo.endCursor??null,data:n.nodes.map(s=>s.domain)??[]}}resolveTransactionPlugin(){throw new Error("GraphQL client does not support transaction resolution yet")}}No=new WeakMap;dt=new WeakSet;Mt=async function(t,e){const{data:n,errors:s}=await n2(this,No).query(t);i2(s);const r=n&&(e?e(n):n);if(r==null)throw new Error("Missing response data");return r};function i2(t){if(!t||t.length===0)return;const e=t.map(n=>new o2(n));throw e.length===1?e[0]:new AggregateError(e)}class o2 extends Error{constructor(e){super(e.message),this.locations=e.locations}}function Ea(t){var e,n,s;switch(t.__typename){case"AddressOwner":return{$kind:"AddressOwner",AddressOwner:(n=(e=t.owner)==null?void 0:e.asAddress)==null?void 0:n.address};case"ConsensusV2":return{$kind:"ConsensusV2",ConsensusV2:t.authenticator.address};case"Immutable":return{$kind:"Immutable",Immutable:!0};case"Parent":return{$kind:"ObjectOwner",ObjectOwner:(s=t.parent)==null?void 0:s.address};case"Shared":return{$kind:"Shared",Shared:t.initialSharedVersion}}}function Aa(t){var n,s,r,i,o;const e={};return(n=t.effects)==null||n.unchangedSharedObjects.nodes.forEach(a=>{var c,l,u,d,h;if(a.__typename==="SharedObjectRead"){const p=(u=(l=(c=a.object)==null?void 0:c.asMoveObject)==null?void 0:l.contents)==null?void 0:u.type.repr,y=(h=(d=a.object)==null?void 0:d.asMoveObject)==null?void 0:h.address;p&&y&&(e[y]=p)}}),(s=t.effects)==null||s.objectChanges.nodes.forEach(a=>{var u,d,h,p,y,m;const c=a.address,l=((h=(d=(u=a.inputState)==null?void 0:u.asMoveObject)==null?void 0:d.contents)==null?void 0:h.type.repr)??((m=(y=(p=a.outputState)==null?void 0:p.asMoveObject)==null?void 0:y.contents)==null?void 0:m.type.repr);c&&l&&(e[c]=l)}),{digest:t.digest,effects:_h(new Uint8Array((r=t.effects)==null?void 0:r.bcs)),epoch:((o=(i=t.effects)==null?void 0:i.epoch)==null?void 0:o.epochId)??null,objectTypes:Promise.resolve(e),transaction:Ih(t.bcs),signatures:t.signatures}}var sp=t=>{throw TypeError(t)},rp=(t,e,n)=>e.has(t)||sp("Cannot "+n),Di=(t,e,n)=>(rp(t,e,"read from private field"),n?n.call(t):e.get(t)),Ui=(t,e,n)=>e.has(t)?sp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Bi=(t,e,n,s)=>(rp(t,e,"write to private field"),e.set(t,n),n),Ji,Xi,eo,to;class a2 extends Error{}class c2 extends ou{constructor({url:e,fetch:n=fetch,headers:s={},queries:r={},network:i="unknown"}){super({network:i}),Ui(this,Ji),Ui(this,Xi),Ui(this,eo),Ui(this,to),this.core=new r2(this),Bi(this,Ji,e),Bi(this,Xi,r),Bi(this,eo,s),Bi(this,to,(...o)=>n(...o))}async query(e){const n=await Di(this,to).call(this,Di(this,Ji),{method:"POST",headers:{"Content-Type":"application/json",...Di(this,eo)},body:JSON.stringify({query:typeof e.query=="string"||e.query instanceof String?String(e.query):$1(e.query),variables:e.variables,extensions:e.extensions,operationName:e.operationName}),signal:e.signal});if(!n.ok)throw new a2(`GraphQL request failed: ${n.statusText} (${n.status})`);return await n.json()}async execute(e,n){return this.query({...n,query:Di(this,Xi)[e]})}}Ji=new WeakMap;Xi=new WeakMap;eo=new WeakMap;to=new WeakMap;function u2(t){for(let e=0;e<t.length;e++)if(t[e]!==0)return e;return-1}function fu(t,e){const n=t.toString(16);return yi(n.padStart(e*2,"0").slice(-32*2))}function ip(t,e){const n=fu(t,e),s=u2(n);return s===-1?new Uint8Array([0]):n.slice(s)}function l2(t){return t==="accounts.google.com"?"https://accounts.google.com":t}function d2(t){if(t.length!==1)throw new Error("Invalid base64Url character: "+t);const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(t);if(n===-1)throw new Error("Invalid base64Url character: "+t);const s=n.toString(2).padStart(6,"0");return Array.from(s).map(Number)}function f2(t){let e=[];for(let n=0;n<t.length;n++){const s=t.charAt(n),r=d2(s);e=e.concat(r)}return e}function h2(t,e){if(t.length<2)throw new Error(`Input (s = ${t}) is not tightly packed because s.length < 2`);let n=f2(t);const s=e%4;if(s!==0)if(s===1)n=n.slice(2);else if(s===2)n=n.slice(4);else throw new Error(`Input (s = ${t}) is not tightly packed because i%4 = 3 (i = ${e}))`);const r=(e+t.length-1)%4;if(r!==3)if(r===2)n=n.slice(0,n.length-2);else if(r===1)n=n.slice(0,n.length-4);else throw new Error(`Input (s = ${t}) is not tightly packed because (i + s.length - 1)%4 = 0 (i = ${e}))`);if(n.length%8!==0)throw new Error("We should never reach here...");const i=new Uint8Array(Math.floor(n.length/8));let o=0;for(let a=0;a<n.length;a+=8){const c=n.slice(a,a+8),l=parseInt(c.join(""),2);i[o++]=l}return new TextDecoder().decode(i)}function p2(t){if(!(t.slice(-1)==="}"||t.slice(-1)===","))throw new Error("Invalid claim");const e=JSON.parse("{"+t.slice(0,-1)+"}");if(Object.keys(e).length!==1)throw new Error("Invalid claim");const n=Object.keys(e)[0];return[n,e[n]]}function op(t,e){const n=h2(t.value,t.indexMod4),[s,r]=p2(n);if(s!==e)throw new Error(`Invalid field name: found ${s} expected ${e}`);return r}const g2=f.struct("ZkLoginSignature",{inputs:f.struct("ZkLoginSignatureInputs",{proofPoints:f.struct("ZkLoginSignatureInputsProofPoints",{a:f.vector(f.string()),b:f.vector(f.vector(f.string())),c:f.vector(f.string())}),issBase64Details:f.struct("ZkLoginSignatureInputsClaim",{value:f.string(),indexMod4:f.u8()}),headerBase64:f.string(),addressSeed:f.string()}),maxEpoch:f.u64(),userSignature:f.vector(f.u8())});function b2(t){return g2.parse(typeof t=="string"?we(t):t)}var ap=t=>{throw TypeError(t)},hu=(t,e,n)=>e.has(t)||ap("Cannot "+n),On=(t,e,n)=>(hu(t,e,"read from private field"),n?n.call(t):e.get(t)),Li=(t,e,n)=>e.has(t)?ap("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Gs=(t,e,n,s)=>(hu(t,e,"write to private field"),e.set(t,n),n),zl=(t,e,n)=>(hu(t,e,"access private method"),n),Ft,Dr,Ur,no,cc;const y2=class Jn extends Si{constructor(e,{client:n}={}){super(),Li(this,no),Li(this,Ft),Li(this,Dr),Li(this,Ur),Gs(this,Dr,n),typeof e=="string"?Gs(this,Ft,we(e)):e instanceof Uint8Array?Gs(this,Ft,e):Gs(this,Ft,Uint8Array.from(e)),Gs(this,Ur,On(this,Ft).length!==On(this,Ft)[0]+1+32),On(this,Ur)&&Gs(this,Ft,er(On(this,Ft)))}static fromBytes(e,{client:n,address:s,legacyAddress:r}={}){let i;if(r===!0?i=new Jn(er(e,!0),{client:n}):r===!1?i=new Jn(er(e,!1),{client:n}):s?(i=new Jn(er(e,!1),{client:n}),i.toSuiAddress()!==s&&(i=new Jn(er(e,!0),{client:n}))):i=new Jn(e,{client:n}),s&&i.toSuiAddress()!==s)throw new Error("Public key bytes do not match the provided address");return i}static fromProof(e,n){const{issBase64Details:s,addressSeed:r}=n,i=op(s,"iss"),o=uc(BigInt(r),i,{legacyAddress:!0});if(o.toSuiAddress()===e)return o;const a=uc(BigInt(r),i,{legacyAddress:!1});if(a.toSuiAddress()!==e)throw new Error("Proof does not match address");return a}equals(e){return super.equals(e)}toSuiAddress(){return On(this,Ur)?zl(this,no,cc).call(this):super.toSuiAddress()}toRawBytes(){return On(this,Ft)}flag(){return Vn.ZkLogin}async verify(e,n){throw Error("does not support")}verifyPersonalMessage(e,n){const s=lc(n),r=new Jn(s.publicKey).toSuiAddress();return Pl({address:r,bytes:Me(e),signature:s.serializedSignature,intentScope:"PersonalMessage",client:On(this,Dr)})}verifyTransaction(e,n){const s=lc(n),r=new Jn(s.publicKey).toSuiAddress();return Pl({address:r,bytes:Me(e),signature:s.serializedSignature,intentScope:"TransactionData",client:On(this,Dr)})}verifyAddress(e){return e===super.toSuiAddress()||e===zl(this,no,cc).call(this)}};Ft=new WeakMap;Dr=new WeakMap;Ur=new WeakMap;no=new WeakSet;cc=function(){const t=er(On(this,Ft),!0),e=new Uint8Array(t.length+1);return e[0]=this.flag(),e.set(t,1),ce(Xt(hs(e,{dkLen:32})).slice(0,mr*2))};let m2=y2;function uc(t,e,n){const s=n!=null&&n.legacyAddress?ip(t,32):fu(t,32),r=new TextEncoder().encode(l2(e)),i=new Uint8Array(1+r.length+s.length);return i.set([r.length],0),i.set(r,1),i.set(s,1+r.length),new m2(i,n)}function er(t,e=!1){const n=t[0]+1,s=BigInt(`0x${fs(t.slice(n))}`),r=e?ip(s,32):fu(s,32),i=new Uint8Array(n+r.length);return i.set(t.slice(0,n),0),i.set(r,n),i}async function Pl({address:t,bytes:e,signature:n,intentScope:s,client:r=new c2({url:"https://sui-mainnet.mystenlabs.com/graphql"})}){const i=await r.core.verifyZkLoginSignature({bytes:e,signature:n,intentScope:s,author:t});return i.success===!0&&i.errors.length===0}function lc(t){const e=typeof t=="string"?we(t):t;if(e[0]!==Vn.ZkLogin)throw new Error("Invalid signature scheme");const n=e.slice(1),{inputs:s,maxEpoch:r,userSignature:i}=b2(n),{issBase64Details:o,addressSeed:a}=s,c=op(o,"iss"),l=uc(BigInt(a),c);return{serializedSignature:Me(e),signatureScheme:"ZkLogin",zkLogin:{inputs:s,maxEpoch:r,userSignature:i,iss:c,addressSeed:BigInt(a)},signature:e,publicKey:l.toRawBytes()}}function w2({signature:t,signatureScheme:e,publicKey:n}){if(!n)throw new Error("`publicKey` is required");const s=n.toRawBytes(),r=new Uint8Array(1+t.length+s.length);return r.set([Vn[e]]),r.set(t,1),r.set(s,1+t.length),Me(r)}function v2(t){const e=we(t),n=uu[e[0]];switch(n){case"Passkey":return Xh(t);case"MultiSig":const s=J.MultiSig.parse(e.slice(1));return{serializedSignature:t,signatureScheme:n,multisig:s,bytes:e,signature:void 0};case"ZkLogin":return lc(t);case"ED25519":case"Secp256k1":case"Secp256r1":return lu(t);default:throw new Error("Unsupported signature scheme")}}const so=32,cp="suiprivkey";class S2{async signWithIntent(e,n){const s=Gh(n,e),r=hs(s,{dkLen:32});return{signature:w2({signature:await this.sign(r),signatureScheme:this.getKeyScheme(),publicKey:this.getPublicKey()}),bytes:Me(e)}}async signTransaction(e){return this.signWithIntent(e,"TransactionData")}async signPersonalMessage(e){const{signature:n}=await this.signWithIntent(f.vector(f.u8()).serialize(e).toBytes(),"PersonalMessage");return{bytes:Me(e),signature:n}}async signAndExecuteTransaction({transaction:e,client:n}){const s=await e.build({client:n}),{signature:r}=await this.signTransaction(s);return(await n.core.executeTransaction({transaction:s,signatures:[r]})).transaction}toSuiAddress(){return this.getPublicKey().toSuiAddress()}}class pu extends S2{}function Qo(t){const{prefix:e,words:n}=po.decode(t);if(e!==cp)throw new Error("invalid private key prefix");const s=new Uint8Array(po.fromWords(n)),r=s.slice(1),i=uu[s[0]];return{scheme:i,schema:i,secretKey:r}}function gu(t,e){if(t.length!==so)throw new Error("Invalid bytes length");const n=Vn[e],s=new Uint8Array(t.length+1);return s.set([n]),s.set(t,1),po.encode(cp,po.toWords(s))}function Rl(t){return!!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(t)}function up(t){return!!new RegExp("^m\\/(54|74)'\\/784'\\/[0-9]+'\\/[0-9]+\\/[0-9]+$").test(t)}function bu(t){return Nw(t,"")}function M2(t){return fs(bu(t))}const lp=pr,x2="ed25519 seed",I2=2147483648,_2=new RegExp("^m(\\/[0-9]+')+$"),dp=t=>t.replace("'",""),E2=t=>{const n=Ps.create(lp,x2).update(Rc(t)).digest(),s=n.slice(0,32),r=n.slice(32);return{key:s,chainCode:r}},A2=({key:t,chainCode:e},n)=>{const s=new ArrayBuffer(4);new DataView(s).setUint32(0,n);const i=new Uint8Array(1+t.length+s.byteLength);i.set(new Uint8Array(1).fill(0)),i.set(t,1),i.set(new Uint8Array(s,0,s.byteLength),t.length+1);const o=Ps.create(lp,e).update(i).digest(),a=o.slice(0,32),c=o.slice(32);return{key:a,chainCode:c}},N2=t=>_2.test(t)?!t.split("/").slice(1).map(dp).some(isNaN):!1,$l=(t,e,n=I2)=>{if(!N2(t))throw new Error("Invalid derivation path");const{key:s,chainCode:r}=E2(e);return t.split("/").slice(1).map(dp).map(o=>parseInt(o,10)).reduce((o,a)=>A2(o,a+n),{key:s,chainCode:r})},dc=32;class fp extends Si{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==dc)throw new Error(`Invalid public key input. Expected ${dc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Vn.ED25519}async verify(e,n){let s;if(typeof n=="string"){const r=lu(n);if(r.signatureScheme!=="ED25519")throw new Error("Invalid signature scheme");if(!yr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return Tn.verify(s,e,this.toRawBytes())}}fp.SIZE=dc;const Fl="m/44'/784'/0'/0'/0'";class zn extends pu{constructor(e){if(super(),e)this.keypair={publicKey:e.publicKey,secretKey:e.secretKey.slice(0,32)};else{const n=Tn.utils.randomPrivateKey();this.keypair={publicKey:Tn.getPublicKey(n),secretKey:n}}}getKeyScheme(){return"ED25519"}static generate(){const e=Tn.utils.randomPrivateKey();return new zn({publicKey:Tn.getPublicKey(e),secretKey:e})}static fromSecretKey(e,n){if(typeof e=="string"){const i=Qo(e);if(i.schema!=="ED25519")throw new Error(`Expected a ED25519 keypair, got ${i.schema}`);return this.fromSecretKey(i.secretKey,n)}const s=e.length;if(s!==so)throw new Error(`Wrong secretKey size. Expected ${so} bytes, got ${s}.`);const r={publicKey:Tn.getPublicKey(e),secretKey:e};if(!n||!n.skipValidation){const o=new TextEncoder().encode("sui validation"),a=Tn.sign(o,e);if(!Tn.verify(a,o,r.publicKey))throw new Error("provided secretKey is invalid")}return new zn(r)}getPublicKey(){return new fp(this.keypair.publicKey)}getSecretKey(){return gu(this.keypair.secretKey.slice(0,so),this.getKeyScheme())}async sign(e){return Tn.sign(e,this.keypair.secretKey)}static deriveKeypair(e,n){if(n==null&&(n=Fl),!Rl(n))throw new Error("Invalid derivation path");const{key:s}=$l(n,M2(e));return zn.fromSecretKey(s)}static deriveKeypairFromSeed(e,n){if(n==null&&(n=Fl),!Rl(n))throw new Error("Invalid derivation path");const{key:s}=$l(n,e);return zn.fromSecretKey(s)}}class yu{static stringToKeyPair(e){const n=yu.stringToPhrase(e);return zn.deriveKeypair(n)}static stringToPhrase(e){let n=`${e}`;do n=n.repeat(2)+'*"';while(n.length<32);const s=Array.from(`${n}`).map(o=>o.charCodeAt(0));if(s.length>32)for(let o=32;o<s.length;o++){const a=o%32;s[a]=(s[a]+s[o])%256}const r=new Uint8Array(32);return r.set(s.slice(0,32)),Ew(r,Tw)}}const ss=class ss extends Sn{constructor(e={}){super(e),this._suiMaster=e.suiMaster,this._objects={}}asArray(){return Object.values(this._objects)}findMostRecentByTypeName(e){return this.findMostRecent(n=>n.typeName==e)}find(e){for(const n in this._objects)if(e(this._objects[n]))return this._objects[n];return null}findMostRecent(e){let n=null,s=null;for(const r in this._objects)e(this._objects[r])&&(!n||n.getTime()<=this._objects[r].constructedAt.getTime())&&(n=this._objects[r].constructedAt,s=this._objects[r]);return s}push(e){if(e&&e.address){const n=e;return this._objects[n.address]=n,n}else if(e&&(""+e).indexOf("0x")===0){if(this._objects[e])return this._objects[e];const n=new zs({id:e,suiMaster:this._suiMaster});return this._objects[n.address]=n,n}return null}byAddress(e){return this._objects[e]?this._objects[e]:null}async fetchObjects(){const e=this.asArray(),n=[];for(const i of e)!i.isDeleted&&n.indexOf(i.address)===-1&&n.push(i.address);this.log("querying details about",n.length,"objects"),this.log(n);let s=[];const r=50;for(let i=0;i<n.length;i+=r){const o=n.slice(i,i+r);let a=[],c=null;try{const l=console.warn;console.warn=u=>{c=u},a=await this._suiMaster._client.multiGetObjects({ids:o,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),console.warn=l}catch(l){console.error(l)}c?this.log("got",a.length,"objects but with warning (ok, but probably it is different client vs rpc versions)"):this.log("got",a.length,"objects"),a&&a.length&&(s=s.concat(a))}for(const i of e){const o=s.find(a=>{var c;return i.idEquals((c=a==null?void 0:a.data)==null?void 0:c.objectId)});o?i.tryToFillDataFromObjectChange(o):s.find(c=>{var l,u;return((l=c==null?void 0:c.error)==null?void 0:l.code)=="deleted"&&i.idEquals((u=c==null?void 0:c.error)==null?void 0:u.object_id)})?i.markAsDeleted():this.log("not found in results",i)}}static instanceOf(e,n={}){return ss._instances[e]||(ss._instances[e]=new ss(n)),ss._instances[e]}};Vs(ss,"_instances",{});let fc=ss;class T2{constructor(e={}){this._coinType=e.coinType,this._suiCoins=e.suiCoins,this._exists=null,this._metadata=null}normalizeAmount(e){if(typeof e=="string"&&e.indexOf(".")!==-1){if(!this.decimals)throw new Error("Please load coin metadata first");return BigInt(Math.floor(parseFloat(e,10)*Math.pow(10,this.decimals)))}return BigInt(e)}async lazyNormalizeAmount(e){return await this.getMetadata(),this.normalizeAmount(e)}amountToString(e,n={}){if(!this.decimals)throw new Error("Please load coin metadata first");const s=!!n.withAbbr,r=n.separateThousands,i=(""+BigInt(e)).padStart(this.decimals+1,"0"),o=i.length-this.decimals;let a=i.substring(0,o)+"."+i.substring(o);if(a.includes(".")&&(a=a.replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""),a.includes(".")||(a=""+a+".0")),s){const c=BigInt(Math.floor(Number(a)));if(c>1000n){if(c<1000000n)return this.formatWithAbbr(c,1000n,"K",r);if(c>=1000000n&&c<1000000000n)return this.formatWithAbbr(c,1000000n,"M",r);if(c>=1000000000n&&c<1000000000000n)return this.formatWithAbbr(c,1000000000n,"B",r);if(c>=1000000000000n)return this.formatWithAbbr(c,1000000000000n,"T",r)}}if(r){const[c,l]=a.split("."),u=typeof r=="string"?r:",";a=""+c.replace(/\B(?=(\d{3})+(?!\d))/g,u)+"."+l}return a}formatWithAbbr(e,n,s,r=!1){let i=""+Math.floor(Number(e)/Number(n/1000n));i=i.padEnd(4,"0");const o=Intl.NumberFormat("en-US").format(Number(i));let a="";r&&(a=typeof r=="string"?r:",");const c=o.split(","),l=c.pop();return c.join(a)+"."+l+s}get suiMaster(){return this._suiCoins.suiMaster}get coinType(){return this._coinType.indexOf("0x")===0?this._coinType:"0x"+this._coinType}get coinObjectType(){return"0x2::coin::Coin<"+this.coinType+">"}get decimals(){if(this.metadata)return this.metadata.decimals}get metadata(){return this._metadata}get symbol(){return this.metadata?this.metadata.symbol:null}get name(){return this.metadata.name}isSUI(){return this._coinType.toLowerCase()=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::sui"}setMetadata(e){return e&&e.decimals&&e.decimals>0&&e.name&&e.symbol?(this._metadata=e,this._exists=!0,!0):!1}async getMetadata(){if(this._metadata)return this._metadata;if(this.__getMetadataPromise)return await this.__getMetadataPromise;this.__getMetadataResolver=null,this.__getMetadataPromise=new Promise(n=>{this.__getMetadataResolver=n});let e=null;try{e=await this.suiMaster.client.getCoinMetadata({coinType:this.coinType})}catch(n){console.error(n),e=null}return e?(this._metadata=e,this._exists=!0):this._exists=!1,this.__getMetadataResolver(!0),!0}async getBalance(e){const n=[];let s=null,r=null;do s=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:r}),n.push(...s.data),r=s.nextCursor;while(s.hasNextPage);let i=BigInt(0);for(const o of n)i=i+BigInt(o.balance);return i}async coinOfAmountToTxCoin(e,n,s,r=!1){const i=await this.lazyNormalizeAmount(s),o=BigInt(i),a=await this.coinObjectsEnoughForAmount(n,o,r);if(!a||!a.length)throw new Error("you do not have enough coins of type "+this.coinType);if(a.length==1)return this.isSUI()?e.add(_t.SplitCoins(e.gas,[e.pure.u64(o)])):e.add(_t.SplitCoins(e.object(a[0]),[e.pure.u64(o)]));{const c=a.shift();return e.add(_t.MergeCoins(e.object(c),a.map(u=>e.object(u)))),e.add(_t.SplitCoins(e.object(c),[e.pure.u64(o)]))}}async coinObjectsEnoughForAmount(e,n,s=!1){const r=BigInt(n),i=[],o=[];let a=null,c=null;do a=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:c}),o.push(...a.data),c=a.nextCursor;while(a.hasNextPage);o.sort((u,d)=>Number(d.balance)-Number(u.balance));let l=BigInt(0);for(const u of o)l<=r?(i.push(u.coinObjectId),l=l+BigInt(u.balance)):s&&BigInt(u.balance)==0n&&i.push(u.coinObjectId);return l>=r?i:null}}const O2=[{decimals:9,name:"Sui",symbol:"SUI",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x0000000000000000000000000000000000000000000000000000000000000002-sui-SUI.svg",id:"0x9258181f5ceac8dbffb7030890243caed69a9599d2886d957a9cb7656af3bdb3",type:"0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"},{decimals:5,name:"FUD",symbol:"FUD",description:"The community coin of Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1-fud-FUD.webp",id:"0x01087411ef48aaac1eb6e24803213e3a60a03b147dac930e5e341f17a85e524e",type:"0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD"},{decimals:4,name:"SPAM",symbol:"SPAM",description:"The original Proof of Spam coin",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a-spam-SPAM.webp",id:"0xe01e2172335cd2b52bf2b3010ae6c95e8c2b4958db72ba11330be70e85793274",type:"0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a::spam::SPAM"},{decimals:6,name:"DeepBook Token",symbol:"DEEP",description:"The DEEP token secures the DeepBook protocol, the premier wholesale liquidity venue for on-chain trading.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270-deep-DEEP.svg",id:"0x6e60b051a08fa836f5a7acd7c464c8d9825bc29c44657fe170fe9b8e1e4770c0",type:"0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP"},{decimals:6,name:"USDC",symbol:"USDC",description:"USDC is a US dollar-backed stablecoin issued by Circle. USDC is designed to provide a faster, safer, and more efficient way to send, spend, and exchange money around the world.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7-usdc-USDC.webp",id:"0x69b7a7c3c200439c1b5f3b19d7d495d5966d5f08de66c69276152f8db3992ec6",type:"0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC"},{decimals:6,name:"USDC (Bridged)",symbol:"USDC (Bridged)",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf-coin-COIN.webp",id:"0x4fbf84f3029bd0c0b77164b587963be957f853eccf834a67bb9ecba6ec80f189",type:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},{decimals:6,name:"Tether USD",symbol:"USDT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c-coin-COIN.webp",id:"0xfb0e3eb97dd158a5ae979dddfa24348063843c5b20eb8381dd5fa7c93699e45c",type:"0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN"},{decimals:9,name:"Bucket USD",symbol:"BUCK",description:"the stablecoin minted through bucketprotocol.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2-buck-BUCK.svg",id:"0x0db5e20f3fc2b12e294e5474babbec1c2efd96f21663accfbcb25da99a48838a",type:"0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK"},{decimals:9,name:"Cetus Token",symbol:"CETUS",description:"CETUS is the native token of Cetus Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b-cetus-CETUS.webp",id:"0x4c0dce55eff2db5419bbd2d239d1aa22b4a400c01bbb648b058a9883989025da",type:"0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS"},{decimals:9,name:"Turbos",symbol:"TURBOS",description:"Turbos Finance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a-turbos-TURBOS.svg",id:"0x95a4518ae9e019c757df6703dce9ea5ecac8b319b9afed3a44c4d50363a66b42",type:"0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS"},{decimals:9,name:"SPT",symbol:"SPT",description:"Seapad launchpad foundation token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca-spt-SPT.webp",id:"0x5075594c01d46f3bcbc4a7ef1462058273bece7793eebd0464963597c9fd0935",type:"0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca::spt::SPT"},{decimals:0,name:"KOTO",symbol:"KOTO",description:"The utility token of the Studio Mirai ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975-koto-KOTO.webp",id:"0x5db6c4ce2921c9ef5fe725d18f0f7b276bebde5fa7981f9bc2bb504c9913384a",type:"0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975::koto::KOTO"},{decimals:2,name:"BLUB",symbol:"BLUB",description:"A Dirty Fish in the Waters of the Sui Ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0-BLUB-BLUB.webp",id:"0xac32b519790cae96c3317457d903d61d04f1bc8f7710096d80fcba72c7a53703",type:"0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB"},{decimals:9,name:"Volo Staked SUI",symbol:"vSUI",description:"Volo's SUI staking solution provides the best user experience and highest level of decentralization, security, combined with an attractive reward mechanism and instant staking liquidity through a bond-like synthetic token called voloSUI.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55-cert-CERT.webp",id:"0xabd84a23467b33854ab25cf862006fd97479f8f6f53e50fe732c43a274d939bd",type:"0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT"},{decimals:9,name:"NAVX Token",symbol:"NAVX",description:"One-stop Liquidity Protocol on Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5-navx-NAVX.webp",id:"0xdc0e051f8aab62d5ba1816bb7a03097faeccb7546c958da571d48882fd8dd0cd",type:"0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX"},{decimals:9,name:"haSUI",symbol:"haSUI",description:"haSUI is a staking token of SUI",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d-hasui-HASUI.svg",id:"0x2c5f33af93f6511df699aaaa5822d823aac6ed99d4a0de2a4a50b3afa0172e24",type:"0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI"},{decimals:9,name:"HammerHead",symbol:"HHS",description:"The Coolest Shark on SUI ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c-hhs-HHS.webp",id:"0x7e24b4469033ee68de54da91032a598e27e5c0ddfc366315d22d1eba7a955f96",type:"0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c::hhs::HHS"},{decimals:9,name:"REAP",symbol:"REAP",description:"Reap Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066-reap_token-REAP_TOKEN.webp",id:"0x4602dc7bd60d623c57424af5480fe9c104d30bbbb051af18e0a283b3dd7a5367",type:"0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066::reap_token::REAP_TOKEN"},{decimals:9,name:"Scallop",symbol:"SCA",description:"SCA is the native token of Scallop Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6-sca-SCA.webp",id:"0x5d26a1e9a55c88147ac870bfa31b729d7f49f8804b8b3adfdf3582d301cca844",type:"0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA"},{decimals:9,name:"afSUI",symbol:"AFSUI",description:"Aftermath Staked Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc-afsui-AFSUI.webp",id:"0x2f9217f533e51334873a39b8026a4aa6919497b47f49d0986a4f1aec66f8a34d",type:"0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI"},{decimals:9,name:"Suiswap Token",symbol:"SSWP",description:"Suiswap Platform Governance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc-TOKEN-TOKEN.webp",id:"0x41911b7d8d87ceee4043ea3b83f402a03d0ffa0b286e78b23dcd81c9cde0f02f",type:"0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc::TOKEN::TOKEN"},{decimals:1,name:"SuiBoxer Coin",symbol:"SBOX",description:"SUI said fuck off but we say welcome, airdrop for everyone.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6-sbox-SBOX.webp",id:"0x7f35ac7fe5a05df9e68fa7d633a382db4f002209e57ccee3bf9d9f73eedff1b9",type:"0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6::sbox::SBOX"},{decimals:6,name:"SUI PEPE",symbol:"SPEPE",description:"The biggest memecoin on SUI blockchain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df-sui_pepe-SUI_PEPE.webp",id:"0xfdf83fbcc1ad8a407d32791e43a4019e89474f7031aa64b8c05834b1af420eae",type:"0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE"},{decimals:5,name:"Sacabam",symbol:"SCB",description:"The best meme token that Sui has ever seen",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001-scb-SCB.webp",id:"0xa34116a52f537f5235fe5d9a2e92195ffcdb2b55afba70b2b86b40c7f89bb01d",type:"0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001::scb::SCB"},{decimals:9,name:"MOVE",symbol:"MOVE",description:"BlueMove",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f-smove-SMOVE.webp",id:"0x7cfcc03055a0ba4c5ba7fb9727a77e23ccf4d59035646c3c3caf58060eed09a1",type:"0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f::smove::SMOVE"},{decimals:8,name:"Wrapped Ether",symbol:"WETH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5-coin-COIN.webp",id:"0x8900e4ceede3363bef086d6b50ca89d816d0e90bf6bc46efefe1f8455e08f50f",type:"0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN"},{decimals:9,name:"SUIA",symbol:"SUIA",description:"SUIA is the native token of Suia.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19-suia_token-SUIA_TOKEN.webp",id:"0x5875baf15d9fd9cc6148dd3866266f6fc3a3064170434efe97b9ea8c23a50775",type:"0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19::suia_token::SUIA_TOKEN"},{decimals:8,name:"FlowX",symbol:"FLX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c-flx-FLX.svg",id:"0x0bfe34db38444ff4a38e44b86128c7e02d551b8fdca9709fde140292d1ef6e95",type:"0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c::flx::FLX"},{decimals:8,name:"Aptos Coin",symbol:"APT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37-coin-COIN.webp",id:"0xc969c5251f372c0f34c32759f1d315cf1ea0ee5e4454b52aea08778eacfdd0a8",type:"0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN"},{decimals:8,name:"Wrapped SOL",symbol:"SOL",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8-coin-COIN.webp",id:"0x4d2c39082b4477e3e79dc4562d939147ab90c42fc5f3e4acf03b94383cd69b6e",type:"0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN"},{decimals:8,name:"Wrapped Matic",symbol:"WMATIC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676-coin-COIN.webp",id:"0xb45d92d3ee25147c3235f881e63f7f362f9d6cbdfcba1f120fae6a6c930a1c8c",type:"0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN"},{decimals:8,name:"Wrapped BNB",symbol:"WBNB",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f-coin-COIN.webp",id:"0x1d0975ab0726f2e52384b6ea0f2c94c2dbdad8b004ee6b5ee552a3c789c044f0",type:"0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN"},{decimals:6,name:"Flame Token",symbol:"FLAME",description:"Flame Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2-flame-FLAME.webp",id:"0x1f42388fe61ae47fcd33f089bd0ee73f19f3984b2b6c09a51a755d0420fe6eab",type:"0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2::flame::FLAME"},{decimals:6,name:"ISSP Coin",symbol:"ISSP",description:"Sui20 Coin for ISSP",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8-issp-ISSP.webp",id:"0x39529b412fe961f76da1485ee48dbf7a2a084845b7f0f45eb97196e602446bb1",type:"0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8::issp::ISSP"},{decimals:9,name:"Suizuki",symbol:"ZUKI",description:"Fast chain needs fast car",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908-zuki-ZUKI.webp",id:"0x03e0c971e4bf3f1a3d0c220bb93c041c873823e2382e081a4330c4c107361d7a",type:"0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908::zuki::ZUKI"},{decimals:9,name:"Burrial",symbol:"BURRY",description:"Burry your `Sui.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2-burry-BURRY.webp",id:"0xb3e2d41c9d775545e299faa739d6448108c09ff997d13cac0e21de64c66413ee",type:"0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2::burry::BURRY"},{decimals:8,name:"Poseidollar",symbol:"PDO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880-pdo-PDO.webp",id:"0xf637a1acf7ec74634baec11b0a7cbd24244fe7d8bee7bc636cd2dcc12c756016",type:"0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880::pdo::PDO"},{decimals:6,name:"Sudo LP Token",symbol:"SLP",description:"LP Token for Sudo Market",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2-slp-SLP.webp",id:"0xaa1c21d59252f4b790faf9ab1c3a9fac5be59b612688c0ec2e24807d6cf9f626",type:"0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2::slp::SLP"},{decimals:8,name:"Wrapped AVAX",symbol:"WAVAX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766-coin-COIN.webp",id:"0x23580088ff9f83848f86bc1cbf4964735116027e9cccad11b2dc96f16badab72",type:"0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN"},{decimals:8,name:"Wrapped BTC",symbol:"WBTC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881-coin-COIN.webp",id:"0x5d3c6e60eeff8a05b693b481539e7847dfe33013e7070cdcb387f5c0cac05dfd",type:"0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN"},{decimals:8,name:"Wrapped Fantom",symbol:"WFTM",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396-coin-COIN.webp",id:"0x8b55537cb11498721f7bbe2055a9a3e9c947da81765e98d4313c820bdd7aa630",type:"0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN"},{decimals:8,name:"Celo native asset",symbol:"CELO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f-coin-COIN.webp",id:"0xe288c52bb4d70465267ed1c8f727252a40e865ce9a9d5343d13d40f5e1a1fc46",type:"0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN"},{decimals:8,name:"Poseidollar Shares",symbol:"PSH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a-psh-PSH.webp",id:"0xf6b09ea64d2f4f70e47794d84e432552ec9c7e948bf91b3eb707a5a2d056bc74",type:"0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a::psh::PSH"},{decimals:6,name:"Ondo US Dollar Yield",symbol:"USDY",description:"Ondo US Dollar Yield",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb-usdy-USDY.svg",id:"0xd8dd6cf839e2367de6e6107da4b4361f44798dd6cf26d094058d94e4cee25e36",type:"0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY"},{decimals:8,name:"Wrapped GLMR",symbol:"WGLMR",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75-coin-COIN.webp",id:"0xcd56eb0efc872d7e27fa9e5e31d70be594ccc4f40a6354521201b0e15971c8de",type:"0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75::coin::COIN"},{decimals:6,name:"SUIZ",symbol:"SUIZ",description:"Suizzle Proof of Work Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d-suiz-SUIZ.webp",id:"0x5e6858f47b0d3246177ec68075f718e80a83bab37b5471333525fba838147417",type:"0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d::suiz::SUIZ"},{decimals:9,name:"BaySwap Token",symbol:"BSWT",description:"BaySwap governance token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b-bswt-BSWT.webp",id:"0xeef5a485257ebd7e555c6d33a0a6a6cac157e10c05fe6a819488b8e521bce5f2",type:"0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b::bswt::BSWT"},{decimals:9,name:"Causa Sui",symbol:"CAUSA",description:"Ex Unitae Vires - Ens Causa Sui * suiprivkey1qr3uhgze5yuglnr6uygkyesp8z76pxu0tt2pd63gyeglda60frpn7n5epp0",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8-causa-CAUSA.webp",id:"0xb7ba98fb5ce46aa72235824632b757c064067de0239458a289348748df8c51bd",type:"0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8::causa::CAUSA"},{decimals:9,name:"Suicune",symbol:"HSUI",description:"The Legendary Beast of SUI, believed to be both the embodiment of the north winds and compassion of pure spring waters. Suicune will be fully community operated.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533-suicune-SUICUNE.webp",id:"0x9770330e38ad3f4723463085e2cc8c5e2e3df98292c1b5ee83ed3ed1f08f8381",type:"0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533::suicune::SUICUNE"},{decimals:5,name:"CHOPSUI",symbol:"CHOP",description:"Chopsui token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a-chopsui-CHOPSUI.webp",id:"0x78f4acfb5f55f354739be22231c0b166a6c0debb7464cf5bd0df3544780e6b62",type:"0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a::chopsui::CHOPSUI"},{decimals:9,name:"Stork REDACTED",symbol:"STORKPOINT",description:"Stork Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736-storktoken-STORKTOKEN.webp",id:"0xf9281ff20ff16740a93f9d378732d0f87c7776d0325fee345c9c948d6a680629",type:"0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736::storktoken::STORKTOKEN"},{decimals:9,name:"LUCKYSTAR",symbol:"LUCK",description:"LUCKYSTAR TOKEN",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179-luck-LUCK.svg",id:"0xa9cb7f72c96d23437199bcf6731b08a7e225d7efe427d04f4c69e63a8940c2f3",type:"0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179::luck::LUCK"},{decimals:9,name:"Simba the lonely lion",symbol:"SIMBA",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72-simba-SIMBA.webp",id:"0x4d3524dbaeddff858737d17e71b4a35c9971408f917fc426e289c04d8f65c6d5",type:"0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72::simba::SIMBA"},{decimals:8,name:"Vaporeon",symbol:"VAPOREON",description:"Our favorite water-type pokemon swimming on Sui. Twitter: @VaporProtocol",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79-vaporeon-VAPOREON.webp",id:"0xb4294ab2ddf3e704640278ea2e0a1e04837e68b7774cd3f9f8c7115fe45d4c27",type:"0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79::vaporeon::VAPOREON"},{decimals:2,name:"ovan suu",symbol:"SUU",description:"Co-founder of Suu Network Web 2",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24-suu-SUU.webp",id:"0x3eac27d0eb0848abd5ad35a16728d0e40d06a8155b94da4cddc2a90a3f893d76",type:"0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24::suu::SUU"},{decimals:12,name:"Pearl",symbol:"PRL",description:"The governance token of SuiPearl - the Yield Optimizer on Sui Network.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64-prl-PRL.webp",id:"0xc1274dbe242a6c4c4b881c03a862def371d9a4ae70da3348101263b4fe44e4fa",type:"0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64::prl::PRL"},{decimals:9,name:"Suiba Inu",symbol:"SUIB",description:"Emerging from Shiba's boundless love, Suiba, your liquid companion, journeys with you on the Sui chain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b-suib-SUIB.svg",id:"0xfd7cfcb627381de46e4d7bdd4a0cf3c37d8f241c8e0513565531d5e410037c59",type:"0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB"},{decimals:5,name:"KIMCHI",symbol:"KIMCHI",description:"Kimchi stands as a symbol of the Asian builder community’s innovation and creativity, serving as a platform for individuals to collaborate, exchange ideas, and push the boundaries of decentralized finance. The coin aims to form an unstoppable force within the Sui ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064-kimchi-KIMCHI.webp",id:"0x494f68995d31da43d11567a68f8fd686cb5821a7b65b63f6f2d3d950cd242d3e",type:"0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064::kimchi::KIMCHI"},{decimals:2,name:"Pikasui",symbol:"PIKA",description:"PIKA SUI is the starter of the Sui chain, designed to be your companion as you embark on the Sui chain journey. It's a memecoin that seeks to build enjoyable and amusing elements within the Sui chain",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692-pika-PIKA.webp",id:"0x8ceeca937d8273acb48a13690af83961c7b0832424f7e690c996e5f76d2011a6",type:"0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692::pika::PIKA"},{decimals:9,name:"HOMITOKEN",symbol:"HOMI",description:" The HOMI token is the native token of the HOMINIDS platform. It allows users to buy and sell Hominids NFTs, participate in wagering games to earn rewards, and interact with other platform features. HOMI will also be used for platform governance, allowing holders to vote on future updates and important decisions.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5-homi-HOMI.webp",id:"0xfcf9f351cb0ae2730d32c3862eaa03d3918768fd26094723e4d1e1889dab5239",type:"0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5::homi::HOMI"},{decimals:2,name:"LAMBALL",symbol:"LAMB",description:"'HAH, you just got Lamballed!' Lamball ($LAMB): Your Pal on the SUI blockchain. This is an exciting fusion of PalWorld and crypto. Dive into our PalWorld server, engage in thrilling events and contests to earn $LAMB and other cool prizes. Connect with fellow Palworld enthusiasts and experience the best of both realms. $LAMB has something for everyone. Join us and discover the vibrant world of $LAMB on the SUI blockchain!",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0-lamb-LAMB.webp",id:"0xea8fc1f2e7e7619a13db86cc7934de285f8465cd868df2d5358470ea181a74d3",type:"0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0::lamb::LAMB"},{decimals:9,name:"Wen Dexscreener",symbol:"WEND",description:"When will Dexscreener integrate FlowX Finance ?",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272-wend-WEND.webp",id:"0xde918bf2751178443a054c8772f78bd52b0cd18aa985b8369756ea7fc2b10a9f",type:"0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272::wend::WEND"},{decimals:9,name:"Sui Generis",symbol:"GENERIS",description:"Sui Generis Auction House Community Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47-generis-GENERIS.webp",id:"0x13a00f780e30945830f97124a23d8554a3c98b0c8fa347073bfe6e50c8eff9f4",type:"0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47::generis::GENERIS"},{decimals:9,name:"SuiPad",symbol:"SUIP",description:"SuiPad The Premier Launchpad for Tier-1 Projects",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee-SUIP-SUIP.webp",id:"0x3e50a0a576877092bfaa4f8e4ec8cd7dd0a4a281bec3f806583949cf7873d07b",type:"0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee::SUIP::SUIP"},{decimals:6,name:"USDCsol",symbol:"USDCsol",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037-coin-COIN.webp",id:"0x39047ec989791d939efee4c9b9dbc6885c5d12a5aaacf44152319b2289ea9b9e",type:"0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN"},{decimals:8,name:"USDCbnb",symbol:"USDCbnb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba-coin-COIN.webp",id:"0x8a775c4bbc9639c88e86fdc624bb30d0bfd22a1597b03da29198de214ddaa126",type:"0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN"},{decimals:6,name:"USDCarb",symbol:"USDCarb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb-coin-COIN.webp",id:"0xe2720ee6eed0e11490bdbd1c6cc2282a7e442bf86c99a3a4ec67797c84b9fffc",type:"0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb::coin::COIN"},{decimals:6,name:"cUSDCe",symbol:"cUSDCe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdc_coin-CELER_USDC_COIN.webp",id:"0x9026b41cf942faaba954c8d9051d93b5bba015436141495b47465eb677d14e1e",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdc_coin::CELER_USDC_COIN"},{decimals:6,name:"cUSDTe",symbol:"cUSDTe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdt_coin-CELER_USDT_COIN.webp",id:"0x2bce194d8454616d16d3ee756fef0c83970556233851fb9da2e5d154952338b8",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN"}],j2=O2,rs=class rs extends Sn{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is required");this._coins={},this._suiMaster.onMainnet&&this.setCoinMetas(j2)}get suiMaster(){return this._suiMaster}get coins(){return this._coins}setCoinMetas(e){let n=0;if(Array.isArray(e))for(const s of e)s.type&&this.get(s.type).setMetadata(s)&&n++;else for(const s in e)this.get(s).setMetadata(e[s])&&n++;return n}async getAllBalances(e={}){let n=e.owner;n||(n=this._suiMaster.address);const s=[],r=await this._suiMaster.client.getAllBalances({owner:n});for(const i of r){const o={coin:this.get(i.coinType),coinType:i.coinType,coinObjectCount:i.coinObjectCount,totalBalance:BigInt(i.totalBalance),lockedBalance:i.lockedBalance};s.push(o)}return s}normalizeCoinType(e){let n=""+e;return n.indexOf("::")==-1&&n.toLowerCase()=="sui"&&(n="0x2::sui::SUI"),n.indexOf("0x")==-1&&(n="0x"+n),n=ai(n),n}get(e){const n=this.normalizeCoinType(e);let s=this._coins[n];return s||(s=new T2({coinType:n,suiCoins:this}),this._coins[n]=s,s)}static getSingleton(e={}){const s=e.suiMaster.connectedChain;return rs._singleInstances[s]||(rs._singleInstances[s]=new rs(e)),rs._singleInstances[s]}};Vs(rs,"_singleInstances",{});let hc=rs;/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const To={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")};BigInt(0);const C2=BigInt(1),pc=BigInt(2),Vl=(t,e)=>(t+e/pc)/e;function k2(t){const e=To.p,n=BigInt(3),s=BigInt(6),r=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,d=De(u,n,e)*u%e,h=De(d,n,e)*u%e,p=De(h,pc,e)*l%e,y=De(p,r,e)*p%e,m=De(y,i,e)*y%e,w=De(m,a,e)*m%e,x=De(w,c,e)*w%e,U=De(x,a,e)*m%e,A=De(U,n,e)*u%e,O=De(A,o,e)*y%e,S=De(O,s,e)*l%e,H=De(S,pc,e);if(!gc.eql(gc.sqr(H),t))throw new Error("Cannot find square root");return H}const gc=Fn(To.p,void 0,void 0,{sqrt:k2}),He=Ho({...To,Fp:gc,lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=To.n,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),s=-C2*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,o=BigInt("0x100000000000000000000000000000000"),a=Vl(i*t,e),c=Vl(-s*t,e);let l=Be(t-a*n-c*r,e),u=Be(-a*s-c*i,e);const d=l>o,h=u>o;if(d&&(l=e-l),h&&(u=e-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:d,k1:l,k2neg:h,k2:u}}}},Sr),D2=Uint8Array.from([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),hp=Uint8Array.from(new Array(16).fill(0).map((t,e)=>e)),U2=hp.map(t=>(9*t+5)%16),pp=(()=>{const n=[[hp],[U2]];for(let s=0;s<4;s++)for(let r of n)r.push(r[s].map(i=>D2[i]));return n})(),gp=pp[0],bp=pp[1],yp=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>Uint8Array.from(t)),B2=gp.map((t,e)=>t.map(n=>yp[e][n])),L2=bp.map((t,e)=>t.map(n=>yp[e][n])),z2=Uint32Array.from([0,1518500249,1859775393,2400959708,2840853838]),P2=Uint32Array.from([1352829926,1548603684,1836072691,2053994217,0]);function Wl(t,e,n,s){return t===0?e^n^s:t===1?e&n|~e&s:t===2?(e|~n)^s:t===3?e&s|n&~s:e^(n|~s)}const zi=new Uint32Array(16);class R2 extends Yc{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:s,h3:r,h4:i}=this;return[e,n,s,r,i]}set(e,n,s,r,i){this.h0=e|0,this.h1=n|0,this.h2=s|0,this.h3=r|0,this.h4=i|0}process(e,n){for(let p=0;p<16;p++,n+=4)zi[p]=e.getUint32(n,!0);let s=this.h0|0,r=s,i=this.h1|0,o=i,a=this.h2|0,c=a,l=this.h3|0,u=l,d=this.h4|0,h=d;for(let p=0;p<5;p++){const y=4-p,m=z2[p],w=P2[p],x=gp[p],U=bp[p],A=B2[p],O=L2[p];for(let S=0;S<16;S++){const H=Ni(s+Wl(p,i,a,l)+zi[x[S]]+m,A[S])+d|0;s=d,d=l,l=Ni(a,10)|0,a=i,i=H}for(let S=0;S<16;S++){const H=Ni(r+Wl(y,o,c,u)+zi[U[S]]+w,O[S])+h|0;r=h,h=u,u=Ni(c,10)|0,c=o,o=H}}this.set(this.h1+a+u|0,this.h2+l+h|0,this.h3+d+r|0,this.h4+s+o|0,this.h0+i+c|0)}roundClean(){Pt(zi)}destroy(){this.destroyed=!0,Pt(this.buffer),this.set(0,0,0,0,0)}}const $2=$o(()=>new R2);/*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Pi=He.ProjectivePoint,Na=t0(Sr);function ql(t){qe(t);const e=t.length===0?"0":Xt(t);return BigInt("0x"+e)}function F2(t){if(typeof t!="bigint")throw new Error("bigint expected");return yi(t.toString(16).padStart(64,"0"))}const V2=Gc("Bitcoin seed"),Ta={private:76066276,public:76067358},Oa=2147483648,W2=t=>$2(Sr(t)),q2=t=>ks(t).getUint32(0,!1),Ri=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error("invalid number, should be from 0 to 2**32-1, got "+t);const e=new Uint8Array(4);return ks(e).setUint32(0,t,!1),e};class as{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return q2(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return Na.encode(this.serialize(this.versions.private,At(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Na.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=Ta){if(qe(e),8*e.length<128||8*e.length>512)throw new Error("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got "+e.length);const s=Ps(pr,V2,e);return new as({versions:n,chainCode:s.slice(32),privateKey:s.slice(0,32)})}static fromExtendedKey(e,n=Ta){const s=Na.decode(e),r=ks(s),i=r.getUint32(0,!1),o={versions:n,depth:s[4],parentFingerprint:r.getUint32(5,!1),index:r.getUint32(9,!1),chainCode:s.slice(13,45)},a=s.slice(45),c=a[0]===0;if(i!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new as({...o,privateKey:a.slice(1)}):new as({...o,publicKey:a})}static fromJSON(e){return as.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||Ta,this.depth=e.depth||0,this.chainCode=e.chainCode||null,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!He.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:ql(e.privateKey),this.privKeyBytes=F2(this.privKey),this.pubKey=He.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=Pi.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=W2(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let s=this;for(const r of n){const i=/^(\d+)('?)$/.exec(r),o=i&&i[1];if(!i||i.length!==3||typeof o!="string")throw new Error("invalid child index: "+r);let a=+o;if(!Number.isSafeInteger(a)||a>=Oa)throw new Error("Invalid index");i[2]==="'"&&(a+=Oa),s=s.deriveChild(a)}return s}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=Ri(e);if(e>=Oa){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=At(new Uint8Array([0]),a,n)}else n=At(this.pubKey,n);const s=Ps(pr,this.chainCode,n),r=ql(s.slice(0,32)),i=s.slice(32);if(!He.utils.isValidPrivateKey(r))throw new Error("Tweak bigger than curve order");const o={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const a=Be(this.privKey+r,He.CURVE.n);if(!He.utils.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");o.privateKey=a}else{const a=Pi.fromHex(this.pubKey).add(Pi.fromPrivateKey(r));if(a.equals(Pi.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");o.publicKey=a.toRawBytes(!0)}return new as(o)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return qe(e,32),He.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(qe(e,32),qe(n,64),!this.publicKey)throw new Error("No publicKey set!");let s;try{s=He.Signature.fromCompact(n)}catch{return!1}return He.verify(s,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return qe(n,33),At(Ri(e),new Uint8Array([this.depth]),Ri(this.parentFingerprint),Ri(this.index),this.chainCode,n)}}const bc=33;class mp extends Si{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==bc)throw new Error(`Invalid public key input. Expected ${bc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Vn.Secp256k1}async verify(e,n){let s;if(typeof n=="string"){const r=lu(n);if(r.signatureScheme!=="Secp256k1")throw new Error("Invalid signature scheme");if(!yr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return He.verify(He.Signature.fromCompact(s),br(e),this.toRawBytes())}}mp.SIZE=bc;const K2="m/54'/784'/0'/0/0";class cs extends pu{constructor(e){if(super(),e)this.keypair=e;else{const n=He.utils.randomPrivateKey(),s=He.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256k1"}static generate(){return new cs}static fromSecretKey(e,n){if(typeof e=="string"){const r=Qo(e);if(r.schema!=="Secp256k1")throw new Error(`Expected a Secp256k1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=He.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=Xt(hs(i,{dkLen:32})),a=He.sign(o,e);if(!He.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new cs({publicKey:s,secretKey:e})}static fromSeed(e){const n=He.getPublicKey(e,!0);return new cs({publicKey:n,secretKey:e})}getPublicKey(){return new mp(this.keypair.publicKey)}getSecretKey(){return gu(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=br(e);return He.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=K2),!up(n))throw new Error("Invalid derivation path");const s=as.fromMasterSeed(bu(e)).derive(n);if(s.publicKey==null||s.privateKey==null)throw new Error("Invalid key");return new cs({publicKey:s.publicKey,secretKey:s.privateKey})}}const yc=33;class wp extends Si{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==yc)throw new Error(`Invalid public key input. Expected ${yc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Vn.Secp256r1}async verify(e,n){let s;if(typeof n=="string"){const r=v2(n);if(r.signatureScheme!=="Secp256r1")throw new Error("Invalid signature scheme");if(!yr(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return pn.verify(pn.Signature.fromCompact(s),br(e),this.toRawBytes())}}wp.SIZE=yc;const G2="m/74'/784'/0'/0/0";class us extends pu{constructor(e){if(super(),e)this.keypair=e;else{const n=pn.utils.randomPrivateKey(),s=pn.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256r1"}static generate(){return new us}static fromSecretKey(e,n){if(typeof e=="string"){const r=Qo(e);if(r.schema!=="Secp256r1")throw new Error(`Expected a Secp256r1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=pn.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=Xt(hs(i,{dkLen:32})),a=pn.sign(o,e,{lowS:!0});if(!pn.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new us({publicKey:s,secretKey:e})}static fromSeed(e){const n=pn.getPublicKey(e,!0);return new us({publicKey:n,secretKey:e})}getPublicKey(){return new wp(this.keypair.publicKey)}getSecretKey(){return gu(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=br(e);return pn.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=G2),!up(n))throw new Error("Invalid derivation path");const s=as.fromMasterSeed(bu(e)).derive(n).privateKey;return us.fromSecretKey(s)}}class H2 extends Error{}async function Y2({host:t,path:e,body:n,headers:s,method:r}){const i=new URL(e,t).toString(),o=await fetch(i,{method:r,body:n?JSON.stringify(n):void 0,headers:{"Content-Type":"application/json",...s||{}}});if(o.status===429)throw new H2("Too many requests from this client have been sent to the faucet. Please retry later");try{return await o.json()}catch(a){throw new Error(`Encountered error when parsing response from faucet, error: ${a}, status ${o.status}, response ${o}`)}}async function Q2(t){const e=await Y2({host:t.host,path:"/gas",body:{FixedAmountRequest:{recipient:t.recipient}},headers:t.headers,method:"POST"});if(e.error)throw new Error(`Faucet request failed: ${e.error}`);return e}function Z2(t){switch(t){case"testnet":return"https://faucet.testnet.sui.io";case"devnet":return"https://faucet.devnet.sui.io";case"localnet":return"http://127.0.0.1:9123";default:throw new Error(`Unknown network: ${t}`)}}const Qr=class Qr extends Sn{constructor(e={}){if(super(e),Qr.instancesCount++,this._instanceN=Qr.instancesCount,this._signer=null,this._keypair=null,this._address=null,e.signer)this._signer=e.signer,this._signer&&this._signer.connectedAddress&&(this._address=this._signer.connectedAddress);else if(e.keypair)this._keypair=e.keypair;else if(e.privateKey){const n=Qo(e.privateKey);n&&n.schema&&(n.schema==="ED25519"?this._keypair=zn.fromSecretKey(n.secretKey):n.schema=="Secp256k1"?this._keypair=cs.fromSecretKey(n.secretKey):n.schema=="Secp256r1"&&(this._keypair=us.fromSecretKey(n.secretKey)))}else if(e.phrase){if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256r1")if(!e.accountIndex)this._keypair=us.deriveKeypair(e.phrase);else{const n=`m/74'/784'/${e.accountIndex}'/0/0`;this._keypair=us.deriveKeypair(e.phrase,n)}else if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256k1")if(!e.accountIndex)this._keypair=cs.deriveKeypair(e.phrase);else{const n=`m/54'/784'/${e.accountIndex}'/0/0`;this._keypair=cs.deriveKeypair(e.phrase,n)}else if(!e.accountIndex)this._keypair=zn.deriveKeypair(e.phrase);else{const n=`m/44'/784'/${e.accountIndex}'/0'/0'`;this._keypair=zn.deriveKeypair(e.phrase,n)}this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress())}else e.as&&(this._keypair=yu.stringToKeyPair(e.as),this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress()));if(this._client=ft.normalizeClient(e.client),this._providerName=this._client?this._client.providerName:null,!this._client)throw new Error("Can not do anything without SuiClient. Set params.client at least to `local`");this._objectStorage=fc.instanceOf(this._providerName,{debug:this._debug,suiMaster:this}),this._initialized=!1,this._packages={},this._suiCoins=new hc({suiMaster:this,debug:this._debug})}get utils(){return ft}get suiCoins(){return this._suiCoins}get MIST_PER_SUI(){return BigInt($f)}get Transaction(){return hr}get Commands(){return _t}get SuiObject(){return zs}get SuiTransaction(){return tf}get SuiEvent(){return Bc}get SuiPaginatedResponse(){return ls}get objectStorage(){return this._objectStorage}get instanceN(){return this._instanceN}get client(){return this._client}get connectedChain(){return this._providerName}get onMainnet(){return this._providerName.split("sui:").join("").toLowerCase()==="mainnet"}get address(){return this._address}get signer(){return this._signer}package(e={}){return this.addPackage(e)}addPackage(e={}){if(e.id&&this._packages[e.id])return this._packages[e.id];const n=new dw({...e,debug:this._debug,suiMaster:this});return e.id&&(this._packages[e.id]=n),n}async getClient(){return await this.initialize(),this._client}async initialize(){return this._initialized||(this.log("initializing..."),this._initialized=!0,!this._signer&&this._keypair&&(this._signer=this._keypair),this._signer?(this._signer.toSuiAddress?this._address=this._signer.toSuiAddress():this._signer.connectedAddress?this._address=this._signer.connectedAddress:this._address=await this._signer.getAddress(),this.log("initialized. connected as",this._address)):this.log("initialized in read-only mode.")),!0}async resolveNameServiceName(e={}){const n=await this.resolveNameServiceNames(e);return n&&n.length?n[0]:null}async resolveNameServiceNames(e={}){if(!this._address)return[];try{const n=await this._client.resolveNameServiceNames({address:this.address,format:e.format});if(n&&n.data)return n.data}catch{return[]}}async signAndExecuteTransaction(e){if(!e.chain){const s="sui:"+this._providerName.split("sui:").join("").toLowerCase();e.chain=s}e.account||(e.account={address:this._address});let n=null;this._keypair?(e.signer=this._keypair,n=await this._client.signAndExecuteTransaction(e)):this._signer&&(n=await this._signer.signAndExecuteTransaction(e));try{if(e&&e.requestType&&e.requestType=="WaitForLocalExecution")return await this.client.waitForTransaction({digest:n.digest,options:e.options||{}})}catch(s){this.log(s)}return n}async requestSuiFromFaucet(){await this.initialize();let e=BigInt(0);const n=this._providerName.split("sui:").join("");if(n==="mainnet")this.log(`no faucet on ${n}`);else{const s=Z2(n);this.log(`requesting sui from faucet... ${s}`);const r=await Q2({host:s,recipient:this._address});let i=0;if(r&&r.transferredGasObjects)for(let o of r.transferredGasObjects)e+=BigInt(o.amount),i++;this.log("got from faucet",e,"MIST in",i,"objects")}return e}async getBalance(e="0x2::sui::SUI",n=null){await this.initialize();let s=n;return!s&&this.address&&(s=this.address),await this._suiCoins.get(e).getBalance(s)}async fetchEvents(e={}){let n=e.query;const s={descending_order:e.descending_order||!1,query:n,limit:e.limit||50},r=new ls({debug:this._debug,suiMaster:this,params:s,method:"queryEvents",order:e.order});return await r.fetch(),r}async fetchTransactions(e={}){let n={};e.fromAddress&&(n.FromAddress=e.fromAddress),e.filter&&(n=e.filter);const s={descending_order:!1,filter:n,options:{showEffects:!0},limit:e.limit||50},r=new ls({debug:this._debug,suiMaster:this,params:s,method:"queryTransactionBlocks",order:e.order});return await r.fetch(),r}};Vs(Qr,"instancesCount",0);let gs=Qr;gs.MIST_PER_SUI=BigInt($f);gs.Transaction=hr;gs.Commands=_t;gs.SuiUtils=ft;const Ge={DISCONNECT:"standard:disconnect",CONNECT:"standard:connect",EVENTS:"standard:events",SUI_SIGN_AND_EXECUTE_TX_BLOCK:"sui:signAndExecuteTransactionBlock",SUI_SIGN_TX_BLOCK:"sui:signTransactionBlock",SUI_SIGN_AND_EXECUTE_TX:"sui:signAndExecuteTransaction",SUI_SIGN_TX:"sui:signTransaction",SUI_SIGN_MESSAGE:"sui:signMessage",SUI_SIGN_PERSONAL_MESSAGE:"sui:signPersonalMessage"};class J2 extends Sn{constructor(e={}){super(e),this._standartAdapter=null,e.standartAdapter&&this.setStandartAdapter(e.standartAdapter),this._name=e.name||null,this._icon=e.icon||null,this._downloadUrls=e.downloadUrls||{},this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1}async signAndExecuteTransaction(e){return this.hasFeature(Ge.SUI_SIGN_AND_EXECUTE_TX)?await this.getFeature(Ge.SUI_SIGN_AND_EXECUTE_TX).signAndExecuteTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(Ge.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e))}async signAndExecuteTransactionBlock(e){return await this.getFeature(Ge.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e)}async signTransactionBlock(e){return this.hasFeature(Ge.SUI_SIGN_TX)?await this.getFeature(Ge.SUI_SIGN_TX).signTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(Ge.SUI_SIGN_TX_BLOCK).signTransactionBlock(e))}async signTransactionBlock(e){return await this.getFeature(Ge.SUI_SIGN_TX_BLOCK).signTransactionBlock(e)}async signPersonalMessage(e){return this.hasFeature(Ge.SUI_SIGN_PERSONAL_MESSAGE)?await this.getFeature(Ge.SUI_SIGN_PERSONAL_MESSAGE).signPersonalMessage(e):await this.getFeature(Ge.SUI_SIGN_MESSAGE).signMessage(e)}async signMessage(e){return await this.signPersonalMessage(e)}async disconnect(e){const n=await this.getFeature(Ge.DISCONNECT).disconnect(e);return this.connectionUpdated(),n}getDownloadURL(){return this._downloadUrls&&this._downloadUrls.chrome?this._downloadUrls.chrome:null}get isDefault(){return!this._standartAdapter}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}get isConnected(){return this._isConnected}async connect(){try{await this.getFeature(Ge.CONNECT).connect()}catch(e){console.error(e)}this.connectionUpdated()}connectionUpdated(){const e=""+this._connectedAddress,n=""+this._connectedChain;try{this._standartAdapter&&this._standartAdapter.accounts&&this._standartAdapter.accounts.length?(this._connectedAddress=this._standartAdapter.accounts[0].address,this._connectedChain=this._standartAdapter.accounts[0].chains[0]):(this._connectedAddress=null,this._connectedChain=null)}catch{this._connectedAddress=null,this._connectedChain=null}(""+this._connectedAddress!=e||""+this._connectedChain!=n)&&(this._connectedAddress&&this._connectedChain?(this._isConnected=!0,this.emit("connected",this)):(this._isConnected=!1,this.emit("disconnected",this)))}setStandartAdapter(e){if(this._standartAdapter)return!0;let n=!1;for(const s in e.features)(""+s).indexOf("sui:")===0&&(n=!0);if(!n)return!1;this._standartAdapter=e,this.__standartAdapterChangeListener||(this.__standartAdapterChangeListener=s=>{this.connectionUpdated()}),this.getFeature(Ge.EVENTS).on("change",this.__standartAdapterChangeListener),this.connectionUpdated()}get okForSui(){return this.isInstalled?this.hasFeature(Ge.SUI_SIGN_AND_EXECUTE_TX_BLOCK)&&this.hasFeature(Ge.EVENTS):!1}get isInstalled(){return!!this._standartAdapter}get features(){return this._standartAdapter?this._standartAdapter.features:{}}get name(){return this._standartAdapter?this._standartAdapter.name:this._name}get icon(){return this._standartAdapter?this._standartAdapter.icon:this._icon}get version(){if(this._standartAdapter)return this._standartAdapter.version}hasFeature(e){return!!this.getFeature(e)}getFeature(e){const n=this.features;return n&&n[Ge[e]]?n[Ge[e]]:n&&n[e]?n[e]:null}}var X2=function(t,e,n,s){if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?s:n==="a"?s.call(t):s?s.value:e.get(t)},e4=function(t,e,n,s,r){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n},ro;let Nr;const Zo=new Set;function t4(t){Yr=void 0,Zo.add(t)}function n4(t){Yr=void 0,Zo.delete(t)}const nr={};function s4(){if(Nr||(Nr=Object.freeze({register:Kl,get:r4,on:i4}),typeof window>"u"))return Nr;const t=Object.freeze({register:Kl});try{window.addEventListener("wallet-standard:register-wallet",({detail:e})=>e(t))}catch(e){console.error(`wallet-standard:register-wallet event listener could not be added
`,e)}try{window.dispatchEvent(new o4(t))}catch(e){console.error(`wallet-standard:app-ready event could not be dispatched
`,e)}return Nr}function Kl(...t){var e;return t=t.filter(n=>!Zo.has(n)),t.length?(t.forEach(n=>t4(n)),(e=nr.register)==null||e.forEach(n=>Gl(()=>n(...t))),function(){var s;t.forEach(r=>n4(r)),(s=nr.unregister)==null||s.forEach(r=>Gl(()=>r(...t)))}):()=>{}}let Yr;function r4(){return Yr||(Yr=[...Zo]),Yr}function i4(t,e){var n;return(n=nr[t])!=null&&n.push(e)||(nr[t]=[e]),function(){var r;nr[t]=(r=nr[t])==null?void 0:r.filter(i=>e!==i)}}function Gl(t){try{t()}catch(e){console.error(e)}}class o4 extends Event{get detail(){return X2(this,ro,"f")}get type(){return"wallet-standard:app-ready"}constructor(e){super("wallet-standard:app-ready",{bubbles:!1,cancelable:!1,composed:!1}),ro.set(this,void 0),e4(this,ro,e,"f")}preventDefault(){throw new Error("preventDefault cannot be called")}stopImmediatePropagation(){throw new Error("stopImmediatePropagation cannot be called")}stopPropagation(){throw new Error("stopPropagation cannot be called")}}ro=new WeakMap;const Hs={SLUSH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzBDMEExRiIvPgo8cGF0aCBkPSJNMTMuMTM1OCAzMi4xMDg1QzE0LjE3MDEgMzUuOTY4MyAxOC4wMzMxIDM5LjQ2MjQgMjYuMDI1NSAzNy4zMjA4QzMzLjY1MTUgMzUuMjc3NCAzOC40MzA5IDI5LjAwNCAzNy4xOTE2IDI0LjM3ODlDMzYuNzYzNiAyMi43ODE3IDM1LjQ3NDYgMjEuNzAwNiAzMy40ODcyIDIxLjg3NjVMMTUuNzE2NSAyMy4zNTcyQzE0LjU5NzMgMjMuNDQzIDE0LjA4NDIgMjMuMjU5NiAxMy43ODgxIDIyLjU1NDNDMTMuNTAxIDIxLjg4MjMgMTMuNjY0NiAyMS4xNjA5IDE1LjAxNjMgMjAuNDc3N0wyOC41NDAxIDEzLjUzNzRDMjkuNTc2NyAxMy4wMSAzMC4yNjcxIDEyLjc4OTMgMzAuODk4IDEzLjAxMjZDMzEuMjkzNCAxMy4xNTYzIDMxLjU1MzggMTMuNzI4NCAzMS4zMTQ3IDE0LjQzNDRMMzAuNDM3OCAxNy4wMjMyQzI5LjM2MTcgMjAuMjAwMiAzMS42NjUzIDIwLjkzODIgMzIuOTY0MSAyMC41OTAyQzM0LjkyODkgMjAuMDYzNyAzNS4zOTExIDE4LjE5MjMgMzQuNzU4MSAxNS44Mjk5QzMzLjE1MzMgOS44NDA1NCAyNi43OTkgOC45MDQxMSAyMS4wMzc4IDEwLjQ0NzhDMTUuMTc2NyAxMi4wMTgzIDEwLjA5NiAxNi43Njc2IDExLjY0NzQgMjIuNTU3M0MxMi4wMTI5IDIzLjkyMTYgMTMuMjY4NyAyNS4wMTE2IDE0LjcyMzIgMjQuOTc4NUwxNi45NDM4IDI0Ljk3MzFDMTcuNDAwNCAyNC45NjI1IDE3LjIzNiAyNSAxOC4xMTcgMjQuOTI3MUMxOC45OTggMjQuODU0MSAyMS4zNTA5IDI0LjU2NDYgMjEuMzUwOSAyNC41NjQ2TDMyLjg5NjIgMjMuMjU4TDMzLjE5MzcgMjMuMjE0OEMzMy44Njg5IDIzLjA5OTcgMzQuMzc5MiAyMy4yNzUgMzQuODEwNiAyNC4wMTgzQzM1LjQ1NjMgMjUuMTMwNCAzNC40NzEyIDI1Ljk2OTEgMzMuMjkyIDI2Ljk3MzFDMzMuMjYwNSAyNyAzMy4yMjg4IDI3LjAyNyAzMy4xOTcgMjcuMDU0MUwyMy4wNDgyIDM1LjgwMDVDMjEuMzA4NyAzNy4zMDA4IDIwLjA4NjcgMzYuNzM2NyAxOS42NTg4IDM1LjEzOTVMMTguMTQzMSAyOS40ODI5QzE3Ljc2ODcgMjguMDg1NCAxNi40MDQxIDI2Ljk4ODkgMTQuODA1NiAyNy40MTcyQzEyLjgwNzUgMjcuOTUyNiAxMi42NDU1IDMwLjI3ODQgMTMuMTM1OCAzMi4xMDg1WiIgZmlsbD0iI0ZCRkFGRiIvPgo8L3N2Zz4K",OKX:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTUwIj48ZGVmcz48c3R5bGU+LmV7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxwYXRoIGlkPSJkIiBjbGFzcz0iZSIgZD0iTTAsMEgxNTBWMTUwSDBWMFoiLz48L2c+PC9nPjxwYXRoIGQ9Ik0xMy44MSwxMy41N3YxMjMuOThoMTIzLjk4VjEzLjU3SDEzLjgxWm0yNi44MiwyOC42NGMwLS44NywuNzEtMS41OCwxLjU4LTEuNThoMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTh2MjAuM2MwLC44OC0uNzEsMS41OS0xLjU4LDEuNTloLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OXYtMjAuM1ptMjMuNDYsNjYuN2MwLC44Ny0uNzEsMS41OC0xLjU4LDEuNThoLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OHYtMjAuM2MwLS44OCwuNzEtMS41OSwxLjU4LTEuNTloMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTl2MjAuM1ptMjEuODYtMjEuNjJoLTIwLjNjLS44NywwLTEuNTktLjcxLTEuNTktMS41OXYtMjAuM2MwLS44NywuNzEtMS41OSwxLjU5LTEuNTloMjAuM2MuODcsMCwxLjU5LC43MSwxLjU5LDEuNTl2MjAuM2MwLC44Ny0uNzEsMS41OS0xLjU5LDEuNTlabTI1LjA1LDIxLjYyYzAsLjg3LS43MSwxLjU4LTEuNTksMS41OGgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU4di0yMC4zYzAtLjg4LC43MS0xLjU5LDEuNTgtMS41OWgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OXYyMC4zWm0wLTQ2LjQxYzAsLjg4LS43MSwxLjU5LTEuNTksMS41OWgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU5di0yMC4zYzAtLjg3LC43MS0xLjU4LDEuNTgtMS41OGgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OHYyMC4zWiIvPjwvc3ZnPg==",PHANTOM:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo=",SUIET:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMjQiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8zMDVfMTI1MTYpIi8+PHBhdGggZD0iTTUxLjUgNDMuNmMtMy45IDAtNy42LTMuOS05LjUtNi40LTEuOSAyLjUtNS42IDYuNC05LjUgNi40LTQgMC03LjctMy45LTkuNS02LjQtMS44IDIuNS01LjUgNi40LTkuNSA2LjQtLjggMC0xLjUtLjYtMS41LTEuNSAwLS44LjctMS41IDEuNS0xLjUgMy4yIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjMuN2MxLjEgMS44IDUgNi45IDguMiA2LjkgMy4xIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjIuN2MxLjEgMS44IDUgNi45IDguMiA2LjkuOSAwIDEuNi43IDEuNiAxLjUgMCAuOS0uNiAxLjUtMS41IDEuNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTEuNSA1Mi4zYy0zLjkgMC03LjYtMy45LTkuNS02LjQtMS45IDIuNS01LjYgNi40LTkuNSA2LjQtNCAwLTcuNy0zLjktOS41LTYuNC0xLjggMi41LTUuNSA2LjQtOS41IDYuNC0uOCAwLTEuNS0uNi0xLjUtMS41IDAtLjguNy0xLjUgMS41LTEuNSAzLjIgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMy43YzEuMSAxLjggNSA2LjkgOC4yIDYuOSAzLjEgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMi43YzEuMSAxLjggNSA2LjkgOC4yIDYuOS45IDAgMS42LjcgMS42IDEuNSAwIC45LS42IDEuNS0xLjUgMS41ek0xNC42IDM2LjdjLS44IDAtMS40LS41LTEuNi0xLjNsLS4zLTMuNmMwLTEwLjkgOC45LTE5LjggMTkuOC0xOS44IDExIDAgMTkuOCA4LjkgMTkuOCAxOS44bC0uMyAzLjZjLS4xLjgtLjkgMS40LTEuNyAxLjItLjktLjEtMS41LS45LTEuMy0xLjhsLjMtM2MwLTkuMi03LjUtMTYuOC0xNi44LTE2LjgtOS4yIDAtMTYuNyA3LjUtMTYuNyAxNi44bC4yIDMuMWMuMi44LS4zIDEuNi0xLjEgMS44aC0uM3oiIGZpbGw9IiNmZmYiLz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMzA1XzEyNTE2IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUyLjc1ODAzIDUxLjM1OCAtNTEuNDM5NDcgNTIuODQxNzIgMCA3LjQwNykiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDU4REQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2N0M4RkYiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",SURF:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NzAuMDc3IDM5OS45MDZDNDU5LjIxNCA0MDcuOTM1IDQ0Ny4yNDggNDEzLjc2IDQzNC45NjggNDE0LjcwNUMzODguMzY2IDQxOC42NDEgMzI4LjUzNyAzNzIuODI2IDI5MC41OTQgMzY3Ljk0NUMyNTIuNjUxIDM2My4wNjUgMjMxLjM5NyAzODguNzI4IDIyMi4yNjYgNDAzLjY4NEMyMTYuNTk4IDQxMi44MTYgMjE1LjU2NSA0MjYuMTcxIDIxNS44OCA0MzYuODc3QzIxNi4xOTUgNDQxLjEyOCAyMTYuNDQgNDQ1LjkyNyAyMTcuODU3IDQ1Mi4xNzZDMjIwLjM0OSA0NjMuMTcxIDI0Ny45MjggNTA2LjY1MSAzMTEuNTM0IDUwMS4xNEMzODAuOTY1IDQ5NS4xNTcgNDIxLjI3IDQ1Ny44NDQgNDYyLjM2MiA0MDkuMDM3TDQ2Ny41NTggNDAyLjc0QzQ2OC4zNDUgNDAxLjc5NSA0NjkuMjkgNDAwLjY5MyA0NzAuMDc3IDM5OS43NDhWMzk5LjkwNloiIGZpbGw9IiM1OEM1RjMiLz4KPHBhdGggZD0iTTI1NC4zNiAzMjcuMDA5QzI2NC43NTEgMzIwLjcxMSAyNzUuNzcyIDMxNi40NjEgMjg2Ljc5MiAzMTYuNDYxQzMyOC44MjkgMzE2LjQ2MSAzNzguNTgxIDM2MS45NjEgNDEyLjExNSAzNjkuMjAzQzQ0NS42NSAzNzYuNDQ1IDQ2OC4zMjIgMzU0LjQwNyA0NzUuODc5IDM0Mi40MzhDNDgzLjQzNiAzMzAuNDcgNDg0LjM1MSAzMTkuMDgzIDQ4My45MDggMzEwLjk1QzQ4My40NjUgMzAyLjgxNyA0ODMuNzUgMzAzLjIzNiA0ODMuNDM2IDI5OS40NTdDNDgwLjYwMiAyOTIuMDU3IDQ2MC43NjUgMjQ4LjYwNCA0MDMuNjE0IDI0OC42MDRDMzQxLjI2OCAyNDguNjA0IDMwMi4zOCAyNzguODMyIDI2MS45MTggMzE5LjI5NEwyNTYuNzIyIDMyNC40OUMyNTUuOTM1IDMyNS4yNzcgMjU0Ljk4OSAzMjYuMjIyIDI1NC4yMDIgMzI3LjAwOUgyNTQuMzZaIiBmaWxsPSIjOURFMkZGIi8+CjxwYXRoIGQ9Ik0zMyAyOTUuNTI1TDMzLjAwMzkgMjk4LjQzNUMzMy4wMDM5IDM1NS45IDc5LjYwMyA0MDAuNjk1IDEzNi45MTEgNDAwLjY5NUMxNjEuNDcyIDQwMC42OTUgMTgxLjkxOSAzOTMuOTIgMTk5LjcxIDM3OS43NUwyMDAuNzYgMzc4Ljc2N0MyMDAuNzYgMzc4Ljc2NyAyMDEuNDE3IDM3OC4yMjYgMjAxLjkzNCAzNzcuNzA5QzIwMi4wOTIgMzc3LjU1MSAyMDIuNDA2IDM3Ny4yMzYgMjAyLjU2NCAzNzcuMDc5QzIwMi43MjEgMzc2LjkyMSAyMDMuMDM2IDM3Ni42MDcgMjAzLjE5MyAzNzYuNDQ5QzIwNS4yNCAzNzQuNTYgMjA4Ljg2MSAzNzEuMDk2IDIxNC4yMTQgMzY2LjA1OEMyMjMuMDMxIDM1Ny43MTQgMjM2LjI1NiAzNDQuODA0IDI1NC4wNDcgMzI3LjE3QzI1NC44MzQgMzI2LjM4MyAyNTUuNzc5IDMyNS40MzggMjU2LjU2NiAzMjQuNjUxTDI2MS43NjIgMzE5LjQ1NkMzMDIuMDY2IDI3OS4xNTEgMzQwLjk1NCAyNDguNzY1IDQwMy40NTggMjQ4Ljc2NUM0NjAuNjA5IDI0OC43NjUgNDgwLjQ0NyAyOTIuMjE4IDQ4My4yODEgMjk5LjYxOEM0NzcuNjEzIDIwMC41ODggNDA4LjE4MSAxMTguNzE5IDMxNS40NDggOTQuMzE1N0MzMTUuNDQ4IDk0LjMxNTcgMzEzLjcxNyA5My44NDM0IDMxMS44MjggOTMuMzcxMUMzMDIuMjI0IDkwLjUzNzEgMjc2LjA4OCA4MS40MDU0IDI3Ni4wODggNjYuMTMzN1YxNy45NTY5QzI3Ni4wODggMTcuOTU2OSAyNzguMzM5IDUuMTA2MjggMjY0LjI4IDE0LjMzNThDMjI4LjA2OSAzOC4xMDk0IDE5Ny4yMTEgODkuOTA3NCAxNjkuMTg2IDEwNS4xNzlDMTY5LjE4NiAxMDUuMTc5IDE2OC44NzEgMTA1LjMzNiAxNjguNzE0IDEwNS40OTRDMTAwLjIyNyAxMzQuNzc4IDQ4LjczNzUgMTk1LjE4MiAzNS4xOTc3IDI3MC41OTZDMzMuNzgwNyAyNzguMzEgMzMuNDc2MiAyODIuMjY5IDMzLjAwMzkgMjkwLjE0MUwzMyAyOTUuNTI1WiIgZmlsbD0iIzU4QzVGMyIvPgo8cGF0aCBkPSJNMjU1LjQ5NSAyNzEuMzQ5QzI1NS40OTUgMjcxLjM0OSAyMzMuODIzIDI4Ny45MDUgMjExLjcyMyAzMDYuNTg2QzE5NS4xNzMgMzIwLjU3NSAxNzguOTYxIDMzNS45MzkgMTY4LjI3MSAzNDUuNDM0QzE2MS41MDMgMzUxLjQ0NCAxNTIuODIyIDM0OS4xNzYgMTUwLjQ3NCAzMzguMTIxQzE0Ni44NTMgMzI3LjEgMTUzLjQ3MSAyODUuNzY0IDE4NC4xNzIgMjY1Ljc2OUMyMTQuODczIDI0NS43NzQgMjQ2LjIwNCAyNDUuNzc0IDI1Ny42OTcgMjUzLjMzMUMyNjcuNDE1IDI1OS43MjEgMjYzLjc0MyAyNjQuMjAzIDI2Mi4xMDYgMjY1Ljc2OUMyNjAuNDY5IDI2Ny4zMzUgMjU1LjQ5NSAyNzEuMzQ5IDI1NS40OTUgMjcxLjM0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",NIGHTLY:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2RDczRjgiLz4KPHBhdGggZD0iTTQ4IDg1LjYzNTZDNDggODUuNjM1NiA1Mi40NTMzIDg1LjYzNTYgNTUuNDQgODIuNTg2N0M1OC45MTU1IDc5LjI4MDEgNTcuMzUxMSA3NS40MzEyIDYyLjI3NTUgNzEuNDMxMkM2Ni45ODY2IDY3LjY0NDUgNzIuOTI0NCA3MC4zMzc5IDcyLjkyNDQgNzAuMzM3OUM3Ny4wMjIyIDYyLjEyNDUgNzQuNzkxMSA1Mi41NjkgNzQuNzkxMSA1Mi41NjlDODEuNzY4OCAzNC4yNTc5IDc1Ljk2NDQgMjEuMTU1NyA3NC40NDQ0IDE3LjM2MDFDNjkuNDQ4OCAyNC4zMzc5IDYzLjE5MTEgMjkuMTczNCA1NS43OTU1IDMyLjQwOUM1My4yMjY2IDMxLjcwNjggNTAuNTk1NSAzMS4zMzM0IDQ4IDMxLjM2MDFDNDUuNDEzMyAzMS4zMzM0IDQyLjc3MzMgMzEuNzA2OCA0MC4yMDQ0IDMyLjQwOUMzMi44MTc3IDI5LjE2NDUgMjYuNTUxMSAyNC4zMzc5IDIxLjU1NTUgMTcuMzYwMUMyMC4wMzU1IDIxLjE1NTcgMTQuMjMxMSAzNC4yNTc5IDIxLjIwODkgNTIuNTY5QzIxLjIwODkgNTIuNTY5IDE4Ljk3NzggNjIuMTI0NSAyMy4wNzU1IDcwLjMzNzlDMjMuMDc1NSA3MC4zMzc5IDI5LjAxMzMgNjcuNjQ0NSAzMy43MjQ0IDcxLjQzMTJDMzguNjU3NyA3NS40MzEyIDM3LjA4NDQgNzkuMjgwMSA0MC41NiA4Mi41ODY3QzQzLjU0NjYgODUuNjM1NiA0OCA4NS42MzU2IDQ4IDg1LjYzNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDc5OSA2NS4yOThDNDIuMjkzMyA1OS4yMTggMzYuMzAyMSA1Ny4yNjI0IDMyLjIxMzMgNTkuODIyNEMzMi4yMTMzIDU5LjgyMjQgMzIuODUzMyA2Mi40MzU4IDM1LjgzOTkgNjMuNzUxM0MzOC4yNzU1IDY0LjgyNjkgMzkuMzI0NCA2My4zODY5IDQyLjQ3OTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNMjIuNDk3NyAyMy4wOTM1QzIwLjA4ODggMzEuNTQ2OCAyMS4xMjg4IDQyLjI0MDIgMjQuOTMzMyA1MC4wMjY5QzI4LjgyNjYgNDcuMjcxMyAzMi45MTU1IDQzLjAxMzUgMzUuMDkzMyAzOC41MDY5QzI5Ljk2NDQgMzQuNzExMyAyNS42NjIyIDMxLjEwMjQgMjIuNDk3NyAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNTMuNTE5OSA2NS4yOThDNTMuNzA2NiA1OS4yMTggNTkuNjk3NyA1Ny4yNjI0IDYzLjc4NjYgNTkuODIyNEM2My43ODY2IDU5LjgyMjQgNjMuMTQ2NiA2Mi40MzU4IDYwLjE1OTkgNjMuNzUxM0M1Ny43MjQzIDY0LjgyNjkgNTYuNjc1NSA2My4zODY5IDUzLjUxOTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNzMuNTAyMiAyMy4wOTM1Qzc1LjkxMTEgMzEuNTQ2OCA3NC44NzExIDQyLjI0MDIgNzEuMDY2NiA1MC4wMjY5QzY3LjE3MzMgNDcuMjcxMyA2My4wODQ0IDQzLjAxMzUgNjAuOTA2NiAzOC41MDY5QzY2LjAzNTUgMzQuNzExMyA3MC4zMzc3IDMxLjEwMjQgNzMuNTAyMiAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNDcuOTk5OSA4NS4zMDY5QzUwLjE0MDQgODUuMzA2OSA1MS44NzU1IDgzLjc3ODcgNTEuODc1NSA4MS44OTM2QzUxLjg3NTUgODAuMDA4NCA1MC4xNDA0IDc4LjQ4MDIgNDcuOTk5OSA3OC40ODAyQzQ1Ljg1OTUgNzguNDgwMiA0NC4xMjQ0IDgwLjAwODQgNDQuMTI0NCA4MS44OTM2QzQ0LjEyNDQgODMuNzc4NyA0NS44NTk1IDg1LjMwNjkgNDcuOTk5OSA4NS4zMDY5WiIgZmlsbD0iIzdCODFGOSIvPgo8L3N2Zz4K"},Hl="sui:devnet",hn=class hn extends Sn{constructor(e={}){super(e),this._adapters={},this._defaultChain=e.defaultChain||Hl,this._activeAdapter=null,this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1,this._isConnecting=!1,this._client=null,this._suiMaster=null,this._rpcSettings=null,setTimeout(()=>{this.initialize()},50)}get activeAdapter(){return this._activeAdapter}getAddress(){return this._connectedAddress}async signAndExecuteTransactionBlock(e){return await this._activeAdapter.signAndExecuteTransactionBlock(e)}async signAndExecuteTransaction(e){return await this._activeAdapter.signAndExecuteTransaction(e)}get client(){return this._client}async getClient(){return await this.initClient(),this._client}async getSuiMaster(){return await this.initClient(),this._suiMaster}get suiMaster(){return this._suiMaster}get isConnected(){return this._isConnected}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}static getSingleton(e={}){let n=e.defaultChain||Hl;return hn._singleInstances[n]||(hn._singleInstances[n]=new hn(e)),hn._singleInstances[n]}get adapters(){return this._adapters}async connect(e){let n=e;if(e.name&&(n=e.name),!this._adapters[n])return!1;this._activeAdapter=this._adapters[n],this._isConnecting=!0;try{await this._activeAdapter.connect()}catch(s){this.log("error",s)}this._isConnecting=!1}adapterConnected(e){this._activeAdapter=e,this._isConnected=e.isConnected,this._connectedAddress=e.connectedAddress,this._connectedChain,this._connectedChain=e.connectedChain,this._connectedChain=="sui:unknown"&&(this._connectedChain="sui:mainnet"),this._client=null,this._suiMaster=null,this.initClient(),this.emit("connected")}async setRPC(e={}){this._rpcSettings=e,this._client=null,this._suiMaster=null,await this.initClient(),this.emit("rpc")}adapterDisconnected(e){this._isConnected=!1,this._connectedAddress=null,this.emit("disconnected")}attachAdapter(e){let n=e.name;if(e.standartAdapter&&e.standartAdapter.name&&(n=e.standartAdapter.name),!n)return!1;const s=new J2({...e,debug:this._debug});this._adapters[n]?e.standartAdapter&&this._adapters[n].setStandartAdapter(e.standartAdapter):(this._adapters[n]=s,this._adapters[n].addEventListener("connected",r=>{this.adapterConnected(r.detail)}),this._adapters[n].addEventListener("disconnected",r=>{this.adapterDisconnected(r.detail)}),this.emit("adapter",s))}getCurrentChain(){return this._connectedChain?this._connectedChain:this._defaultChain}async initClient(){if(this._client)return!0;let e=this.getCurrentChain();const n=hn.getChainsSettings();if(this._rpcSettings)this._rpcSettings.providerName=e.split("sui:").join(""),this._client=gs.SuiUtils.suiClientForRPC(this._rpcSettings);else if(n[e])this._client=new nc({url:n[e].fullnode}),this._client.endpoint=n[e].fullnode;else throw this.log("error","invalid chain",e),new Error("invalid chain: "+e);this._suiMaster=new gs({debug:this._debug,signer:this,client:this._client})}async initialize(){await this.initClient();for(const s of hn.getPossibleWallets())this.attachAdapter(s);const e=s4(),n=e.get();for(const s of n)this.attachAdapter({standartAdapter:s});e.on("register",s=>{s.name&&this.attachAdapter({standartAdapter:s})})}static getChainsSettings(){return{"sui:devnet":{fullnode:"https://fullnode.devnet.sui.io:443/",websocket:"https://fullnode.devnet.sui.io:443/",faucet:"https://faucet.devnet.sui.io/gas"},"sui:testnet":{fullnode:"https://fullnode.testnet.sui.io:443/",websocket:"https://fullnode.testnet.sui.io:443/",faucet:"https://faucet.testnet.sui.io/gas"},"sui:mainnet":{fullnode:"https://fullnode.mainnet.sui.io:443/",websocket:"https://fullnode.mainnet.sui.io:443/"},"sui:localnet":{websocket:"http://127.0.0.1:9000",fullnode:"http://127.0.0.1:9000",websocket:"http://127.0.0.1:9000",faucet:"http://127.0.0.1:9123/gas"}}}static getPossibleWallets(){return[{name:"Slush — A Sui wallet",icon:Hs.SLUSH,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/slush-%E2%80%94-a-sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"}},{name:"Suiet",icon:Hs.SUIET,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd"}},{name:"OKX Wallet",icon:Hs.OKX,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/mcohilncbfahbmgdjkbpemcciiolgcge"}},{name:"Phantom",icon:Hs.PHANTOM,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"}},{name:"Surf Wallet",icon:Hs.SURF,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/surf-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen"}},{name:"Nightly Wallet",icon:Hs.NIGHTLY,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/nightly/fiikommddbeccaoicoejoniammnalkfa"}}]}};Vs(hn,"_singleInstances",{});let mc=hn;ft.txInput;const Mi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},a4={name:"SuiSync",props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object}},data(){return{connectedAddress:null,connectedChain:null,adapters:[],suiInBrowser:null,suiMaster:null,lastSuiMasterInstanceN:null}},emits:["connect","connected","loaded","disconnected","error","suiMaster","adapters"],components:{},watch:{},methods:{async reinitSuiMaster(){this.suiMaster=await this.suiInBrowser.getSuiMaster(),(!this.lastSuiMasterInstanceN||this.lastSuiMasterInstanceN!=this.suiMaster.instanceN)&&this.$emit("suiMaster",this.suiMaster)},async setRPC(t={}){await this.suiInBrowser.setRPC(t),await this.reinitSuiMaster()}},mounted:function(){this.suiInBrowser=mc.getSingleton({debug:!0,defaultChain:this.defaultChain}),this.rpcSettings&&this.suiInBrowser.setRPC(this.rpcSettings),this.adapters=Object.values(this.suiInBrowser.adapters),this.suiInBrowser.addEventListener("adapter",t=>{this.adapters.push(t.detail),this.$emit("adapters",this.adapters)}),this.suiInBrowser.addEventListener("connected",()=>{this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)}),this.suiInBrowser.addEventListener("disconnected",()=>{this.connectedAddress=null,this.connectedChain=null,this.$emit("disconnected")}),this.$nextTick(()=>{this.$emit("loaded",this.suiInBrowser),this.$emit("adapters",this.adapters)}),this.suiInBrowser.isConnected&&(this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)),this.reinitSuiMaster()},computed:{}};function c4(t,e,n,s,r,i){return Ae(),je("div")}const u4=Mi(a4,[["render",c4]]),l4={name:"SignInWithSuiDialog",emits:["click","hidden"],props:{adapters:{type:Array,default(){return[]}},showing:{type:Boolean,default:!1}},data(){return{isActive:!1,isVisible:!1}},watch:{showing:function(){this.showing?this.show():this.hide()}},computed:{},components:{},methods:{onAdapterClick(t){this.$emit("click",t)},show(){this.isActive=!0,setTimeout(()=>{this.isVisible=!0},10)},hide(){this.isVisible=!1,setTimeout(()=>{this.isActive=!1,this.$emit("hidden")},300)},onBackdrop(){this.hide()}},beforeMount:function(){},mounted:async function(){}},d4={key:0,class:"signinwithsui_dialog"},f4={class:"signinwithsui_dialog_inner_card"},h4={class:"signinwithsui_dialog_list"},p4=["onClick"],g4={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_icon"},b4=["src"],y4={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_name"};function m4(t,e,n,s,r,i){return r.isActive?(Ae(),je("div",d4,[Z("div",{class:"signinwithsui_dialog_backdrop",onClick:e[0]||(e[0]=(...o)=>i.onBackdrop&&i.onBackdrop(...o))}),Z("div",{class:Zr(["signinwithsui_dialog_inner",{signinwithsui_dialog_inner_active:r.isVisible}])},[Z("div",f4,[Z("div",h4,[(Ae(!0),je(gt,null,Ba(n.adapters,(o,a)=>(Ae(),je(gt,{key:a},[o.isDefault||o.okForSui?(Ae(),je("div",{key:0,class:Zr(["signinwithsui_dialog_item",{signinwithsui_dialog_item_disabled:o.isDefault}]),onClick:c=>i.onAdapterClick(o)},[Z("div",g4,[Z("img",{loading:"lazy",fetchpriority:"auto","aria-hidden":"true",draggable:"false",src:o.icon},null,8,b4)]),Z("div",y4,Vt(o.name),1)],10,p4)):ht("",!0)],64))),128))])])],2)])):ht("",!0)}const w4=Mi(l4,[["render",m4],["__scopeId","data-v-59623375"]]),v4={name:"SignInWithSui",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object},auto:{default:!0,type:Boolean},visible:{default:!0,type:Boolean},persist:{default:!1,type:Boolean}},data(){return{isLoading:!1,libsRequested:!0,adapters:[],connectedAddress:null,displayAddress:null,resolvedNameServiceName:null,connectedChain:null,forceChainCalculated:null,suiMaster:null,activeAdapter:null,showingDialog:!1}},watch:{defaultChain:async function(){this.connectedAddress=null,this.connectedChain=null,this.suiMaster=null,this.libsRequested=!1,await new Promise(t=>setTimeout(t,50)),this.libsRequested=!0}},computed:{},components:{SuidoubleSync:u4,SignInWithSuiDialog:w4},methods:{checkDisplayAddress(){let t=this.displayAddress;this.connectedAddress?this.connectedAddress&&(this.resolvedNameServiceName?t=this.resolvedNameServiceName:t=(""+this.connectedAddress).substr(0,6)+"..."+(""+this.connectedAddress).substr(-4)):t=null,this.displayAddress!=t&&(this.displayAddress=t,this.$emit("displayAddress",this.displayAddress))},async getNameServiceName(){if(this.suiMaster&&this.suiMaster.address){const t="resolvedNameServiceName_"+this.suiMaster.connectedChain+":"+this.suiMaster.address,e=10*60*1e3,n=this.getCache(t);if(n!==void 0)this.resolvedNameServiceName=n;else{const s=await this.suiMaster.resolveNameServiceName();this.resolvedNameServiceName=s,this.setCache(t,s,e)}this.checkDisplayAddress()}else this.resolvedNameServiceName=null,this.checkDisplayAddress()},onSuiMaster(t){this.suiMaster=t,(!this.defaultChain||this.defaultChain==this.suiMaster.connectedChain)&&(this.$emit("suiMaster",t),t.getClient().then(e=>{this.$emit("client",e),this.$emit("provider",e),t.signer&&t.signer.activeAdapter&&(this.$emit("adapter",t.signer.activeAdapter),this.activeAdapter=t.signer.activeAdapter)}),this.getNameServiceName()),this.__suiMasterPromise&&this.suiMaster&&(this.__suiMasterPromiseResolver(),this.__suiMasterPromise=null),this.__connectedSuiMasterPromise&&this.isSuiMasterConnected()&&(this.__connectedSuiMasterPromiseResolver(),this.__connectedSuiMasterPromise=null)},onSuiAdapters(t){this.adapters=t},isSuiMasterConnected(t=null){return this.suiMaster&&this.suiMaster.address?!(t&&this.suiMaster.connectedChain!=t):this.suiMaster&&this.suiMaster.signer&&this.suiMaster.signer.connectedAddress?!(t&&this.suiMaster.signer.connectedChain!=t):!1},async onAdapterClick(t){if(this.showingDialog=!1,t.isDefault&&!t.isInstalled)return window.open(t.getDownloadURL(),"_blank"),!1;this.isLoading=!0,await this.$refs.sui.suiInBrowser.connect(t),this.persist&&window.localStorage.setItem("vue-sui-preferred-adapter",t.name),this.isLoading=!1},async setRPC(t={}){this.$refs.sui.setRPC(t)},async requestSuiMaster(){if(this.suiMaster)return this.suiMaster;if(await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.suiMaster)return this.suiMaster;if(this.__suiMasterPromise){if(await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")}if(this.__suiMasterPromiseResolver=null,this.__suiMasterPromise=new Promise(t=>{this.__suiMasterPromiseResolver=t}),await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")},async requestConnectedSuiMaster(t=null){if(this.isSuiMasterConnected(t))return this.suiMaster;if(await this.requestLibs(),await new Promise(e=>{setTimeout(e,200)}),this.isSuiMasterConnected(t))return this.suiMaster;if(this.isLoading=!0,this.__connectedSuiMasterPromise){if(await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")}if(this.__connectedSuiMasterPromiseResolver=null,this.__connectedSuiMasterPromise=new Promise(e=>{this.__connectedSuiMasterPromiseResolver=e}),this.showingDialog=!0,await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")},async connect(){return await this.onClick()},async onClick(){this.isLoading=!0,await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.connectedAddress||(this.showingDialog=!0),this.isLoading=!1},async initialize(){if(this.auto&&(this.isLoading=!0,await this.requestLibs(),this.isLoading=!1),await new Promise(t=>{setTimeout(t,200)}),this.persist){const t=window.localStorage.getItem("vue-sui-preferred-adapter");t&&this.adapters.forEach(e=>{e.name&&e.okForSui&&e.name==t&&this.onAdapterClick(e)})}},async requestLibs(){this.libsRequested=!0,await this.__libsRequestedPromise},onLibsLoaded(){this.__libsRequestedPromiseResolver()},onConnected(){this.showingDialog=!1;const t=this.$refs.sui.suiInBrowser.connectedChain;!this.defaultChain||this.defaultChain==t?(this.connectedAddress=this.$refs.sui.suiInBrowser.connectedAddress,this.connectedChain=this.$refs.sui.suiInBrowser.connectedChain,this.$emit("connected",this.connectedAddress),this.checkDisplayAddress()):(this.connectedAddress=null,this.$emit("wrongchain",t),this.checkDisplayAddress())},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected"),this.checkDisplayAddress()},async disconnect(){window.localStorage.setItem("vue-sui-preferred-adapter",null);try{await this.activeAdapter.disconnect()}catch(t){return console.error(t),window.location.reload(),!1}return!0},setCache(t,e,n){const r={value:e,expiry:new Date().getTime()+n};window.localStorage.setItem(t,JSON.stringify(r))},getCache(t){try{const e=window.localStorage.getItem(t);if(!e)return;const n=JSON.parse(e);if(new Date().getTime()>n.expiry){window.localStorage.removeItem(t);return}return n.value}catch{return}}},beforeMount:function(){this.__libsRequestedPromiseResolver=null,this.__libsRequestedPromise=new Promise(t=>{this.__libsRequestedPromiseResolver=t})},mounted:async function(){this.initialize()}},S4={key:0},M4={key:1};function x4(t,e,n,s,r,i){const o=ti("SignInWithSuiDialog"),a=ti("SuidoubleSync");return Ae(),je("div",null,[n.visible?(Ae(),je("div",{key:0,onClick:e[0]||(e[0]=(...c)=>i.onClick&&i.onClick(...c))},[r.connectedAddress?ht("",!0):(Ae(),je("span",S4,"Connect with Sui")),r.connectedAddress?(Ae(),je("span",M4,Vt(r.displayAddress),1)):ht("",!0)])):ht("",!0),ct(o,{showing:r.showingDialog,onHidden:e[1]||(e[1]=c=>{this.showingDialog=!1}),adapters:r.adapters,onClick:i.onAdapterClick},null,8,["showing","adapters","onClick"]),r.libsRequested?(Ae(),Yd(a,{key:1,ref:"sui",rpcSettings:n.rpcSettings,defaultChain:n.defaultChain,onAdapters:i.onSuiAdapters,onSuiMaster:i.onSuiMaster,onLoaded:i.onLibsLoaded,onConnected:i.onConnected,onDisconnected:i.onDisconnected},null,8,["rpcSettings","defaultChain","onAdapters","onSuiMaster","onLoaded","onConnected","onDisconnected"])):ht("",!0)])}const vp=Mi(v4,[["render",x4]]),I4={name:"SignInWithSuiButton",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},persist:{default:!1,type:Boolean}},components:{SignInWithSui:vp},data(){return{connectedAddress:null,connectedChain:null,displayAddress:null}},methods:{onClick(){this.connectedAddress?this.$refs.signin.disconnect():this.$refs.signin.connect()},onDisplayAddress(t){this.displayAddress=t,this.$emit("displayAddress",t)},onConnected(t){this.connectedAddress=t,this.$emit("connected",t)},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected")},onWrongChain(t){this.$emit("wrongchain",t)},onSuiMaster(t){this.$emit("suiMaster",t)},onProvider(t){this.$emit("client",t),this.$emit("provider",t)},onAdapter(t){this.$emit("adapter",t)}}},_4={class:"signinwithsui_button_inner"},E4={key:0,class:"signinwithsui_button_inner"};function A4(t,e,n,s,r,i){const o=ti("SignInWithSui");return Ae(),je("div",{class:"signinwithsui_button",onClick:e[0]||(e[0]=(...a)=>i.onClick&&i.onClick(...a))},[Z("div",_4,[ct(o,{defaultChain:n.defaultChain,persist:n.persist,ref:"signin",onProvider:i.onProvider,onOnAdapter:i.onAdapter,onWrongchain:i.onWrongChain,onConnected:i.onConnected,onDisconnected:i.onDisconnected,onSuiMaster:i.onSuiMaster,onDisplayAddress:i.onDisplayAddress},null,8,["defaultChain","persist","onProvider","onOnAdapter","onWrongchain","onConnected","onDisconnected","onSuiMaster","onDisplayAddress"])]),r.connectedAddress?(Ae(),je("div",E4,"disconnect")):ht("",!0)])}const N4=Mi(I4,[["render",A4],["__scopeId","data-v-64b1ae38"]]),T4={components:{SignInWithSui:vp,SignInWithSuiButton:N4},data(){return{connectedAddress:null,displayAddress:null,connectedChain:null,defaultChain:"sui:mainnet",extra:[],tryingTo:null,events:[],adapter:null,suiMaster:null}},mounted(){setTimeout(()=>{hljs.highlightAll()},50)},methods:{onDisplayAddress(t){this.events.unshift({name:"displayAddress",args:[t]}),this.displayAddress=t},onRPCClick(){this.$refs.sui.setRPC({url:"https://sui-mainnet-endpoint.blockvision.org",rpc:{}})},onWrongChain(t){this.events.unshift({name:"wrongchain",args:arguments}),this.connectedAddress=null,this.connectedChain=null,this.tryingTo=t},onSuiMaster(t){this.events.unshift({name:"suiMaster",args:[t?"instance_of_SuiMaster ("+(t.address?"wallet="+t.address:"readonly")+")":null]}),this.connectedAddress=t.address,this.connectedChain=t.connectedChain,this.suiMaster=t,this.tryingTo=null},onConnected(){this.events.unshift({name:"connected",args:arguments})},onProvider(t){this.events.unshift({name:"provider",args:[t?"instance_of_SuiClient":null]})},onClient(t){this.events.unshift({name:"client",args:[t?"instance_of_SuiClient":null]})},onAdapter(t){this.events.unshift({name:"adapter",args:[t?"instance_of_SuiInBrowserAdapter (name="+t.name+")":null]}),this.adapter=t},onDisconnected(){this.events.unshift({name:"disconnected",args:arguments}),this.connectedAddress=null,this.tryingTo=null},async onTx(){try{const t=this.suiMaster.suiCoins.get("sui"),e=new this.suiMaster.Transaction,n=await t.coinOfAmountToTxCoin(e,this.suiMaster.address,"0.01");e.transferObjects([n],this.suiMaster.address);const s=await this.suiMaster.signAndExecuteTransaction({transaction:e,requestType:"WaitForLocalExecution",options:{}});s&&s.digest&&alert("tx sent, digest: "+s.digest)}catch(t){alert(t)}}}},O4={style:{display:"block",padding:"12px",background:"#abc4ff",color:"#2A66F3","text-align":"right"}},j4={key:0},C4=["title"],k4={style:{padding:"12px"}},D4={class:"docs_column"},U4={class:"docs_column"},B4={class:"docs_column_right"},L4={key:0},z4={key:1},P4={key:0},R4={style:{padding:"12px"}},$4={class:"docs_column"},F4={key:0},V4={class:"docs_column"},W4={class:"docs_column_right"};function q4(t,e,n,s,r,i){const o=ti("SignInWithSui"),a=ti("SignInWithSuiButton");return Ae(),je(gt,null,[Z("div",null,[Z("div",O4,[e[9]||(e[9]=Z("div",{style:{float:"left","line-height":"32px","vertical-align":"middle"}},[Z("h3",{style:{margin:"0",padding:"0"}},"vue-sui")],-1)),Z("button",{onClick:e[0]||(e[0]=c=>{this.$refs.sui.connect()})},[r.connectedAddress?ht("",!0):(Ae(),je("span",j4,"Connect")),r.connectedAddress?(Ae(),je("span",{key:1,title:r.connectedAddress},Vt(r.displayAddress),9,C4)):ht("",!0),ct(o,{ref:"sui",defaultChain:r.defaultChain,persist:!0,onConnected:i.onConnected,onClient:i.onClient,onSuiMaster:i.onSuiMaster,onProvider:i.onProvider,onAdapter:i.onAdapter,onDisconnected:i.onDisconnected,onDisplayAddress:i.onDisplayAddress,visible:!1},null,8,["defaultChain","onConnected","onClient","onSuiMaster","onProvider","onAdapter","onDisconnected","onDisplayAddress"])]),r.connectedAddress?(Ae(),je("button",{key:0,onClick:e[1]||(e[1]=c=>{this.$refs.sui.disconnect()})}," Disconnect ")):ht("",!0)])]),Z("div",k4,[Z("div",D4,[Z("p",null,[e[10]||(e[10]=Qs("switch `defaultChain` component prop to: ")),Z("a",{href:"#",onClick:e[2]||(e[2]=c=>{r.defaultChain="sui:mainnet"})},"sui:mainnet"),e[11]||(e[11]=Qs()),Z("a",{href:"#",onClick:e[3]||(e[3]=c=>{r.defaultChain="sui:devnet"})},"sui:devnet"),e[12]||(e[12]=Qs()),Z("a",{href:"#",onClick:e[4]||(e[4]=c=>{r.defaultChain="sui:testnet"})},"sui:testnet")])]),Z("div",U4,[Z("div",B4,[Z("table",null,[Z("tr",null,[e[13]||(e[13]=Z("td",null,"Connected as",-1)),Z("td",null,[!r.connectedAddress&&r.connectedChain?(Ae(),je("span",L4,"read-only")):ht("",!0),r.connectedAddress&&r.connectedChain?(Ae(),je("span",z4,[Qs(Vt(r.connectedAddress)+" ",1),Z("button",{onClick:e[5]||(e[5]=(...c)=>i.onTx&&i.onTx(...c))},"Do Sample TX")])):ht("",!0)])]),Z("tr",null,[e[14]||(e[14]=Z("td",null,"Connected to",-1)),Z("td",null,Vt(r.connectedChain),1)]),Z("tr",null,[e[15]||(e[15]=Z("td",null,"defaultChain",-1)),Z("td",null,Vt(r.defaultChain),1)])]),r.tryingTo?(Ae(),je("span",P4,"Was trying to connect to "+Vt(r.tryingTo)+", but expected to "+Vt(r.defaultChain)+" (ask user to switch chain in wallet extension settings or reinitialize/redirect to different chain dapp/sub-dapp)",1)):ht("",!0)])])]),Z("div",R4,[Z("div",$4,[e[17]||(e[17]=lb(`<div><p>Demo of the <a href="https://github.com/suidouble/vue-sui">vue-sui</a> component. Vue component to connect your dapp to Sui blockchain.</p></div><p><b>Option 1:</b> All styles on pages are managed by you, the SignInWithSui component itself is invisible until popup is requested.</p><p>Take a look at <a href="https://github.com/suidouble/vue-sui/blob/main/src/App.vue">this app code</a> to check this option implementation.</p><pre><code class="language-javascript">
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
		</code></pre>`,14)),ct(a,{defaultChain:r.defaultChain,onWrongchain:i.onWrongChain},null,8,["defaultChain","onWrongchain"]),e[18]||(e[18]=Z("p",null,"SignInWithSuiButton emits the same set of events as underlying SignInWithSui component",-1)),(Ae(!0),je(gt,null,Ba(r.extra,c=>(Ae(),je("li",{key:c},[ct(a,{defaultChain:r.defaultChain},null,8,["defaultChain"])]))),128)),r.adapter?(Ae(),je("p",F4,[Z("a",{href:"#",onClick:e[6]||(e[6]=c=>{t.$refs.sui.disconnect()})},"disconnect"),e[16]||(e[16]=Qs(" ( with some wallets (Suiet) it's instant, with some (Sui Wallet) - it clears connection and refreshes the page)"))])):ht("",!0),e[19]||(e[19]=Z("p",null,"Also try to disconnect or switch chain directly from browser extension, vue-sui will cover this events and update component state on the fly.",-1)),e[20]||(e[20]=Z("p",null," ",-1))]),Z("div",V4,[Z("div",W4,[e[21]||(e[21]=Z("p",null,"Request the component to display a wallet extension selection popup and prompt the user to connect their wallet:",-1)),e[22]||(e[22]=Z("pre",null,[Z("code",{class:"language-javascript"},`
this.$refs.sui.connect();
			`)],-1)),Z("p",null,[Z("button",{onClick:e[7]||(e[7]=c=>{this.$refs.sui.connect()})},"Execute this.$refs.sui.connect()")]),e[23]||(e[23]=Z("p",null,"To disconnect from the wallet:",-1)),e[24]||(e[24]=Z("pre",null,[Z("code",{class:"language-javascript"},`
this.$refs.sui.disconnect();
		`)],-1)),Z("p",null,[Z("button",{onClick:e[8]||(e[8]=c=>{this.$refs.sui.disconnect()})},"Execute this.$refs.sui.disconnect()")]),e[25]||(e[25]=Z("h3",null,"Events",-1)),e[26]||(e[26]=Z("p",null,"List of events from SignInWithSui `.$refs.sui` component",-1)),Z("table",null,[(Ae(!0),je(gt,null,Ba(r.events,(c,l)=>(Ae(),je("tr",{key:l},[Z("td",null,[Z("b",null,Vt(c.name),1)]),Z("td",null,Vt(JSON.stringify(c.args)),1)]))),128))])])])])],64)}const K4=Mi(T4,[["render",q4]]);qb(K4).mount("#app");Yl.registerLanguage("javascript",xp);window.hljs=Yl;
