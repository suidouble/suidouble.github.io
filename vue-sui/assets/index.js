var tg=Object.defineProperty;var Fu=t=>{throw TypeError(t)};var ng=(t,e,n)=>e in t?tg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Js=(t,e,n)=>ng(t,typeof e!="symbol"?e+"":e,n),Vu=(t,e,n)=>e.has(t)||Fu("Cannot "+n);var Ku=(t,e,n)=>(Vu(t,e,"read from private field"),n?n.call(t):e.get(t)),Wu=(t,e,n)=>e.has(t)?Fu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),qu=(t,e,n,s)=>(Vu(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);import md from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/highlight.min.js";import sg from"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/es/languages/javascript.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Uc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},fr=[],In=()=>{},rg=()=>!1,$o=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bc=t=>t.startsWith("onUpdate:"),bt=Object.assign,Lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ig=Object.prototype.hasOwnProperty,ye=(t,e)=>ig.call(t,e),ce=Array.isArray,hr=t=>Fo(t)==="[object Map]",wd=t=>Fo(t)==="[object Set]",ue=t=>typeof t=="function",qe=t=>typeof t=="string",xs=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",vd=t=>(ze(t)||ue(t))&&ue(t.then)&&ue(t.catch),Sd=Object.prototype.toString,Fo=t=>Sd.call(t),og=t=>Fo(t).slice(8,-1),Md=t=>Fo(t)==="[object Object]",zc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xr=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ag=/-(\w)/g,qt=Vo(t=>t.replace(ag,(e,n)=>n?n.toUpperCase():"")),cg=/\B([A-Z])/g,Zs=Vo(t=>t.replace(cg,"-$1").toLowerCase()),Ko=Vo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ca=Vo(t=>t?`on${Ko(t)}`:""),Rs=(t,e)=>!Object.is(t,e),ua=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Id=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ug=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gu;const Wo=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?hg(s):Pc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(qe(t)||ze(t))return t}const lg=/;(?![^(]*\))/g,dg=/:([^]+)/,fg=/\/\*[^]*?\*\//g;function hg(t){const e={};return t.replace(fg,"").split(lg).forEach(n=>{if(n){const s=n.split(dg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function li(t){let e="";if(qe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=li(t[n]);s&&(e+=s+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gg=Uc(pg);function xd(t){return!!t||t===""}const Ed=t=>!!(t&&t.__v_isRef===!0),Zt=t=>qe(t)?t:t==null?"":ce(t)||ze(t)&&(t.toString===Sd||!ue(t.toString))?Ed(t)?Zt(t.value):JSON.stringify(t,_d,2):String(t),_d=(t,e)=>Ed(e)?_d(t,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[la(s,i)+" =>"]=r,n),{})}:wd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>la(n))}:xs(e)?la(e):ze(e)&&!ce(e)&&!Md(e)?String(e):e,la=(t,e="")=>{var n;return xs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class bg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function yg(){return Dt}let _e;const da=new WeakSet;class Ad{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Td(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hu(this),Od(this);const e=_e,n=cn;_e=this,cn=!0;try{return this.fn()}finally{jd(this),_e=e,cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fc(e);this.deps=this.depsTail=void 0,Hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Va(this)&&this.run()}get dirty(){return Va(this)}}let Nd=0,Jr,ei;function Td(t,e=!1){if(t.flags|=8,e){t.next=ei,ei=t;return}t.next=Jr,Jr=t}function Rc(){Nd++}function $c(){if(--Nd>0)return;if(ei){let e=ei;for(ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Od(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jd(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Fc(s),mg(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Va(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Cd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===di))return;t.globalVersion=di;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Va(t)){t.flags&=-3;return}const n=_e,s=cn;_e=t,cn=!0;try{Od(t);const r=t.fn(t._value);(e.version===0||Rs(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{_e=n,cn=s,jd(t),t.flags&=-3}}function Fc(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Fc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function mg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let cn=!0;const kd=[];function Es(){kd.push(cn),cn=!1}function _s(){const t=kd.pop();cn=t===void 0?!0:t}function Hu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_e;_e=void 0;try{e()}finally{_e=n}}}let di=0;class wg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!_e||!cn||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new wg(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,Ud(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=s)}return n}trigger(e){this.version++,di++,this.notify(e)}notify(e){Rc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$c()}}}function Ud(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ud(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ka=new WeakMap,$s=Symbol(""),Wa=Symbol(""),fi=Symbol("");function at(t,e,n){if(cn&&_e){let s=Ka.get(t);s||Ka.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Dd),r.map=s,r.key=n),r.track()}}function $n(t,e,n,s,r,i){const o=Ka.get(t);if(!o){di++;return}const a=c=>{c&&c.trigger()};if(Rc(),e==="clear")o.forEach(a);else{const c=ce(t),l=c&&zc(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===fi||!xs(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(fi)),e){case"add":c?l&&a(o.get("length")):(a(o.get($s)),hr(t)&&a(o.get(Wa)));break;case"delete":c||(a(o.get($s)),hr(t)&&a(o.get(Wa)));break;case"set":hr(t)&&a(o.get($s));break}}$c()}function er(t){const e=Me(t);return e===t?e:(at(e,"iterate",fi),un(t)?e:e.map(St))}function qo(t){return at(t=Me(t),"iterate",fi),t}const vg={__proto__:null,[Symbol.iterator](){return fa(this,Symbol.iterator,St)},concat(...t){return er(this).concat(...t.map(e=>ce(e)?er(e):e))},entries(){return fa(this,"entries",t=>(t[1]=St(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(St),arguments)},find(t,e){return Tn(this,"find",t,e,St,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,St,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ha(this,"includes",t)},indexOf(...t){return ha(this,"indexOf",t)},join(t){return er(this).join(t)},lastIndexOf(...t){return ha(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return zr(this,"pop")},push(...t){return zr(this,"push",t)},reduce(t,...e){return Yu(this,"reduce",t,e)},reduceRight(t,...e){return Yu(this,"reduceRight",t,e)},shift(){return zr(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return zr(this,"splice",t)},toReversed(){return er(this).toReversed()},toSorted(t){return er(this).toSorted(t)},toSpliced(...t){return er(this).toSpliced(...t)},unshift(...t){return zr(this,"unshift",t)},values(){return fa(this,"values",St)}};function fa(t,e,n){const s=qo(t),r=s[e]();return s!==t&&!un(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Sg=Array.prototype;function Tn(t,e,n,s,r,i){const o=qo(t),a=o!==t&&!un(t),c=o[e];if(c!==Sg[e]){const d=c.apply(t,i);return a?St(d):d}let l=n;o!==t&&(a?l=function(d,f){return n.call(this,St(d),f,t)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Yu(t,e,n,s){const r=qo(t);let i=n;return r!==t&&(un(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,St(a),c,t)}),r[e](i,...s)}function ha(t,e,n){const s=Me(t);at(s,"iterate",fi);const r=s[e](...n);return(r===-1||r===!1)&&qc(n[0])?(n[0]=Me(n[0]),s[e](...n)):r}function zr(t,e,n=[]){Es(),Rc();const s=Me(t)[e].apply(t,n);return $c(),_s(),s}const Mg=Uc("__proto__,__v_isRef,__isVue"),Bd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xs));function Ig(t){xs(t)||(t=String(t));const e=Me(this);return at(e,"has",t),e.hasOwnProperty(t)}class Ld{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?kg:$d:i?Rd:Pd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!r){let c;if(o&&(c=vg[n]))return c;if(n==="hasOwnProperty")return Ig}const a=Reflect.get(e,n,pt(e)?e:s);return(xs(n)?Bd.has(n):Mg(n))||(r||at(e,"get",n),i)?a:pt(a)?o&&zc(n)?a:a.value:ze(a)?r?Fd(a):Kc(a):a}}class zd extends Ld{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=wr(i);if(!un(s)&&!wr(s)&&(i=Me(i),s=Me(s)),!ce(e)&&pt(i)&&!pt(s))return c?!1:(i.value=s,!0)}const o=ce(e)&&zc(n)?Number(n)<e.length:ye(e,n),a=Reflect.set(e,n,s,pt(e)?e:r);return e===Me(r)&&(o?Rs(s,i)&&$n(e,"set",n,s):$n(e,"add",n,s)),a}deleteProperty(e,n){const s=ye(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&$n(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!xs(n)||!Bd.has(n))&&at(e,"has",n),s}ownKeys(e){return at(e,"iterate",ce(e)?"length":$s),Reflect.ownKeys(e)}}class xg extends Ld{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Eg=new zd,_g=new xg,Ag=new zd(!0);const qa=t=>t,Bi=t=>Reflect.getPrototypeOf(t);function Ng(t,e,n){return function(...s){const r=this.__v_raw,i=Me(r),o=hr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?qa:e?Ga:St;return!e&&at(i,"iterate",c?Wa:$s),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Tg(t,e){const n={get(r){const i=this.__v_raw,o=Me(i),a=Me(r);t||(Rs(r,a)&&at(o,"get",r),at(o,"get",a));const{has:c}=Bi(o),l=e?qa:t?Ga:St;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&at(Me(r),"iterate",$s),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Me(i),a=Me(r);return t||(Rs(r,a)&&at(o,"has",r),at(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Me(a),l=e?qa:t?Ga:St;return!t&&at(c,"iterate",$s),a.forEach((u,d)=>r.call(i,l(u),l(d),o))}};return bt(n,t?{add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear")}:{add(r){!e&&!un(r)&&!wr(r)&&(r=Me(r));const i=Me(this);return Bi(i).has.call(i,r)||(i.add(r),$n(i,"add",r,r)),this},set(r,i){!e&&!un(i)&&!wr(i)&&(i=Me(i));const o=Me(this),{has:a,get:c}=Bi(o);let l=a.call(o,r);l||(r=Me(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Rs(i,u)&&$n(o,"set",r,i):$n(o,"add",r,i),this},delete(r){const i=Me(this),{has:o,get:a}=Bi(i);let c=o.call(i,r);c||(r=Me(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&$n(i,"delete",r,void 0),l},clear(){const r=Me(this),i=r.size!==0,o=r.clear();return i&&$n(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ng(r,t,e)}),n}function Vc(t,e){const n=Tg(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ye(n,r)&&r in s?n:s,r,i)}const Og={get:Vc(!1,!1)},jg={get:Vc(!1,!0)},Cg={get:Vc(!0,!1)};const Pd=new WeakMap,Rd=new WeakMap,$d=new WeakMap,kg=new WeakMap;function Dg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ug(t){return t.__v_skip||!Object.isExtensible(t)?0:Dg(og(t))}function Kc(t){return wr(t)?t:Wc(t,!1,Eg,Og,Pd)}function Bg(t){return Wc(t,!1,Ag,jg,Rd)}function Fd(t){return Wc(t,!0,_g,Cg,$d)}function Wc(t,e,n,s,r){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ug(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function pr(t){return wr(t)?pr(t.__v_raw):!!(t&&t.__v_isReactive)}function wr(t){return!!(t&&t.__v_isReadonly)}function un(t){return!!(t&&t.__v_isShallow)}function qc(t){return t?!!t.__v_raw:!1}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function Lg(t){return!ye(t,"__v_skip")&&Object.isExtensible(t)&&Id(t,"__v_skip",!0),t}const St=t=>ze(t)?Kc(t):t,Ga=t=>ze(t)?Fd(t):t;function pt(t){return t?t.__v_isRef===!0:!1}function zg(t){return pt(t)?t.value:t}const Pg={get:(t,e,n)=>e==="__v_raw"?t:zg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return pt(r)&&!pt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Vd(t){return pr(t)?t:new Proxy(t,Pg)}class Rg{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Dd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return Td(this,!0),!0}get value(){const e=this.dep.track();return Cd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $g(t,e,n=!1){let s,r;return ue(t)?s=t:(s=t.get,r=t.set),new Rg(s,r,n)}const zi={},vo=new WeakMap;let Os;function Fg(t,e=!1,n=Os){if(n){let s=vo.get(n);s||vo.set(n,s=[]),s.push(t)}}function Vg(t,e,n=Ne){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=T=>r?T:un(T)||r===!1||r===0?fs(T,1):fs(T);let u,d,f,p,g=!1,m=!1;if(pt(t)?(d=()=>t.value,g=un(t)):pr(t)?(d=()=>l(t),g=!0):ce(t)?(m=!0,g=t.some(T=>pr(T)||un(T)),d=()=>t.map(T=>{if(pt(T))return T.value;if(pr(T))return l(T);if(ue(T))return c?c(T,2):T()})):ue(t)?e?d=c?()=>c(t,2):t:d=()=>{if(f){Es();try{f()}finally{_s()}}const T=Os;Os=u;try{return c?c(t,3,[p]):t(p)}finally{Os=T}}:d=In,e&&r){const T=d,F=r===!0?1/0:r;d=()=>fs(T(),F)}const _=yg(),w=()=>{u.stop(),_&&_.active&&Lc(_.effects,u)};if(i&&e){const T=e;e=(...F)=>{T(...F),w()}}let D=m?new Array(t.length).fill(zi):zi;const v=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const F=u.run();if(r||g||(m?F.some((ae,de)=>Rs(ae,D[de])):Rs(F,D))){f&&f();const ae=Os;Os=u;try{const de=[F,D===zi?void 0:m&&D[0]===zi?[]:D,p];c?c(e,3,de):e(...de),D=F}finally{Os=ae}}}else u.run()};return a&&a(v),u=new Ad(d),u.scheduler=o?()=>o(v,!1):v,p=T=>Fg(T,!1,u),f=u.onStop=()=>{const T=vo.get(u);if(T){if(c)c(T,4);else for(const F of T)F();vo.delete(u)}},e?s?v(!0):D=u.run():o?o(v.bind(null,!0),!0):u.run(),w.pause=u.pause.bind(u),w.resume=u.resume.bind(u),w.stop=w,w}function fs(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pt(t))fs(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)fs(t[s],e,n);else if(wd(t)||hr(t))t.forEach(s=>{fs(s,e,n)});else if(Md(t)){for(const s in t)fs(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&fs(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ai(t,e,n,s){try{return s?t(...s):t()}catch(r){Go(r,e,n)}}function En(t,e,n,s){if(ue(t)){const r=Ai(t,e,n,s);return r&&vd(r)&&r.catch(i=>{Go(i,e,n)}),r}if(ce(t)){const r=[];for(let i=0;i<t.length;i++)r.push(En(t[i],e,n,s));return r}}function Go(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){Es(),Ai(i,null,10,[t,c,l]),_s();return}}Kg(t,n,r,s,o)}function Kg(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const ht=[];let bn=-1;const gr=[];let os=null,ir=0;const Kd=Promise.resolve();let So=null;function Wg(t){const e=So||Kd;return t?e.then(this?t.bind(this):t):e}function qg(t){let e=bn+1,n=ht.length;for(;e<n;){const s=e+n>>>1,r=ht[s],i=hi(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Gc(t){if(!(t.flags&1)){const e=hi(t),n=ht[ht.length-1];!n||!(t.flags&2)&&e>=hi(n)?ht.push(t):ht.splice(qg(e),0,t),t.flags|=1,Wd()}}function Wd(){So||(So=Kd.then(Gd))}function Gg(t){ce(t)?gr.push(...t):os&&t.id===-1?os.splice(ir+1,0,t):t.flags&1||(gr.push(t),t.flags|=1),Wd()}function Qu(t,e,n=bn+1){for(;n<ht.length;n++){const s=ht[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ht.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function qd(t){if(gr.length){const e=[...new Set(gr)].sort((n,s)=>hi(n)-hi(s));if(gr.length=0,os){os.push(...e);return}for(os=e,ir=0;ir<os.length;ir++){const n=os[ir];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}os=null,ir=0}}const hi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gd(t){try{for(bn=0;bn<ht.length;bn++){const e=ht[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bn<ht.length;bn++){const e=ht[bn];e&&(e.flags&=-2)}bn=-1,ht.length=0,qd(),So=null,(ht.length||gr.length)&&Gd()}}let rn=null,Hd=null;function Mo(t){const e=rn;return rn=t,Hd=t&&t.type.__scopeId||null,e}function Hg(t,e=rn,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ol(-1);const i=Mo(e);let o;try{o=t(...r)}finally{Mo(i),s._d&&ol(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function As(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Es(),En(c,n,8,[t.el,a,t,e]),_s())}}const Yg=Symbol("_vte"),Qg=t=>t.__isTeleport;function Hc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Yd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Io(t,e,n,s,r=!1){if(ce(t)){t.forEach((g,m)=>Io(g,e&&(ce(e)?e[m]:e),n,s,r));return}if(ti(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Io(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Zc(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,d=a.setupState,f=Me(d),p=d===Ne?()=>!1:g=>ye(f,g);if(l!=null&&l!==c&&(qe(l)?(u[l]=null,p(l)&&(d[l]=null)):pt(l)&&(l.value=null)),ue(c))Ai(c,a,12,[o,u]);else{const g=qe(c),m=pt(c);if(g||m){const _=()=>{if(t.f){const w=g?p(c)?d[c]:u[c]:c.value;r?ce(w)&&Lc(w,i):ce(w)?w.includes(i)||w.push(i):g?(u[c]=[i],p(c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else g?(u[c]=o,p(c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,kt(_,n)):_()}}}Wo().requestIdleCallback;Wo().cancelIdleCallback;const ti=t=>!!t.type.__asyncLoader,Qd=t=>t.type.__isKeepAlive;function Zg(t,e){Zd(t,"a",e)}function Xg(t,e){Zd(t,"da",e)}function Zd(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ho(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Qd(r.parent.vnode)&&Jg(s,e,n,r),r=r.parent}}function Jg(t,e,n,s){const r=Ho(e,t,s,!0);Xd(()=>{Lc(s[e],r)},n)}function Ho(t,e,n=ct,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Es();const a=Ni(n),c=En(e,n,t,o);return a(),_s(),c});return s?r.unshift(i):r.push(i),i}}const Hn=t=>(e,n=ct)=>{(!bi||t==="sp")&&Ho(t,(...s)=>e(...s),n)},eb=Hn("bm"),tb=Hn("m"),nb=Hn("bu"),sb=Hn("u"),rb=Hn("bum"),Xd=Hn("um"),ib=Hn("sp"),ob=Hn("rtg"),ab=Hn("rtc");function cb(t,e=ct){Ho("ec",t,e)}const ub="components";function pi(t,e){return db(ub,t,!0,e)||t}const lb=Symbol.for("v-ndc");function db(t,e,n=!0,s=!1){const r=rn||ct;if(r){const i=r.type;{const a=Jb(i,!1);if(a&&(a===e||a===qt(e)||a===Ko(qt(e))))return i}const o=Zu(r[t]||i[t],e)||Zu(r.appContext[t],e);return!o&&s?i:o}}function Zu(t,e){return t&&(t[e]||t[qt(e)]||t[Ko(qt(e))])}function Ha(t,e,n,s){let r;const i=n,o=ce(t);if(o||qe(t)){const a=o&&pr(t);let c=!1;a&&(c=!un(t),t=qo(t)),r=new Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=e(c?St(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ze(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}const Ya=t=>t?Mf(t)?Zc(t):Ya(t.parent):null,ni=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ya(t.parent),$root:t=>Ya(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ef(t),$forceUpdate:t=>t.f||(t.f=()=>{Gc(t.update)}),$nextTick:t=>t.n||(t.n=Wg.bind(t.proxy)),$watch:t=>kb.bind(t)}),pa=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ye(t,e),fb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(pa(s,e))return o[e]=1,s[e];if(r!==Ne&&ye(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ye(l,e))return o[e]=3,i[e];if(n!==Ne&&ye(n,e))return o[e]=4,n[e];Qa&&(o[e]=0)}}const u=ni[e];let d,f;if(u)return e==="$attrs"&&at(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ne&&ye(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ye(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return pa(r,e)?(r[e]=n,!0):s!==Ne&&ye(s,e)?(s[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&ye(t,o)||pa(e,o)||(a=i[0])&&ye(a,o)||ye(s,o)||ye(ni,o)||ye(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xu(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qa=!0;function hb(t){const e=ef(t),n=t.proxy,s=t.ctx;Qa=!1,e.beforeCreate&&Ju(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:_,beforeDestroy:w,beforeUnmount:D,destroyed:v,unmounted:T,render:F,renderTracked:ae,renderTriggered:de,errorCaptured:re,serverPrefetch:E,expose:W,inheritAttrs:ee,components:H,directives:x,filters:S}=e;if(l&&pb(l,s,null),o)for(const k in o){const B=o[k];ue(B)&&(s[k]=B.bind(n))}if(r){const k=r.call(n,n);ze(k)&&(t.data=Kc(k))}if(Qa=!0,i)for(const k in i){const B=i[k],K=ue(B)?B.bind(n,n):ue(B.get)?B.get.bind(n,n):In,q=!ue(B)&&ue(B.set)?B.set.bind(n):In,Q=t0({get:K,set:q});Object.defineProperty(s,k,{enumerable:!0,configurable:!0,get:()=>Q.value,set:J=>Q.value=J})}if(a)for(const k in a)Jd(a[k],s,n,k);if(c){const k=ue(c)?c.call(n):c;Reflect.ownKeys(k).forEach(B=>{vb(B,k[B])})}u&&Ju(u,t,"c");function A(k,B){ce(B)?B.forEach(K=>k(K.bind(n))):B&&k(B.bind(n))}if(A(eb,d),A(tb,f),A(nb,p),A(sb,g),A(Zg,m),A(Xg,_),A(cb,re),A(ab,ae),A(ob,de),A(rb,D),A(Xd,T),A(ib,E),ce(W))if(W.length){const k=t.exposed||(t.exposed={});W.forEach(B=>{Object.defineProperty(k,B,{get:()=>n[B],set:K=>n[B]=K})})}else t.exposed||(t.exposed={});F&&t.render===In&&(t.render=F),ee!=null&&(t.inheritAttrs=ee),H&&(t.components=H),x&&(t.directives=x),E&&Yd(t)}function pb(t,e,n=In){ce(t)&&(t=Za(t));for(const s in t){const r=t[s];let i;ze(r)?"default"in r?i=to(r.from||s,r.default,!0):i=to(r.from||s):i=to(r),pt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ju(t,e,n){En(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jd(t,e,n,s){let r=s.includes(".")?gf(n,s):()=>n[s];if(qe(t)){const i=e[t];ue(i)&&ba(r,i)}else if(ue(t))ba(r,t.bind(n));else if(ze(t))if(ce(t))t.forEach(i=>Jd(i,e,n,s));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&ba(r,i,t)}}function ef(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>xo(c,l,o,!0)),xo(c,e,o)),ze(e)&&i.set(e,c),c}function xo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&xo(t,i,n,!0),r&&r.forEach(o=>xo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=gb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gb={data:el,props:tl,emits:tl,methods:Wr,computed:Wr,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Wr,directives:Wr,watch:yb,provide:el,inject:bb};function el(t,e){return e?t?function(){return bt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function bb(t,e){return Wr(Za(t),Za(e))}function Za(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Wr(t,e){return t?bt(Object.create(null),t,e):e}function tl(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:bt(Object.create(null),Xu(t),Xu(e??{})):e}function yb(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const s in e)n[s]=dt(t[s],e[s]);return n}function tf(){return{app:null,config:{isNativeTag:rg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mb=0;function wb(t,e){return function(s,r=null){ue(s)||(s=bt({},s)),r!=null&&!ze(r)&&(r=null);const i=tf(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:mb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:n0,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(l,...d)):ue(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,f){if(!c){const p=l._ceVNode||gt(s,r);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),t(p,u,f),c=!0,l._container=u,u.__vue_app__=l,Zc(p.component)}},onUnmount(u){a.push(u)},unmount(){c&&(En(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=br;br=l;try{return u()}finally{br=d}}};return l}}let br=null;function vb(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function to(t,e,n=!1){const s=ct||rn;if(s||br){const r=br?br._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ue(e)?e.call(s&&s.proxy):e}}const nf={},sf=()=>Object.create(nf),rf=t=>Object.getPrototypeOf(t)===nf;function Sb(t,e,n,s=!1){const r={},i=sf();t.propsDefaults=Object.create(null),of(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Bg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Mb(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Me(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Yo(t.emitsOptions,f))continue;const p=e[f];if(c)if(ye(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const g=qt(f);r[g]=Xa(c,a,g,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{of(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!ye(e,d)&&((u=Zs(d))===d||!ye(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Xa(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!ye(e,d))&&(delete i[d],l=!0)}l&&$n(t.attrs,"set","")}function of(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xr(c))continue;const l=e[c];let u;r&&ye(r,u=qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Me(n),l=a||Ne;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Xa(r,c,d,l[d],t,!ye(l,d))}}return o}function Xa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ye(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ue(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=Ni(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zs(n))&&(s=!0))}return s}const Ib=new WeakMap;function af(t,e,n=!1){const s=n?Ib:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ue(t)){const u=d=>{c=!0;const[f,p]=af(d,e,!0);bt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ze(t)&&s.set(t,fr),fr;if(ce(i))for(let u=0;u<i.length;u++){const d=qt(i[u]);nl(d)&&(o[d]=Ne)}else if(i)for(const u in i){const d=qt(u);if(nl(d)){const f=i[u],p=o[d]=ce(f)||ue(f)?{type:f}:bt({},f),g=p.type;let m=!1,_=!0;if(ce(g))for(let w=0;w<g.length;++w){const D=g[w],v=ue(D)&&D.name;if(v==="Boolean"){m=!0;break}else v==="String"&&(_=!1)}else m=ue(g)&&g.name==="Boolean";p[0]=m,p[1]=_,(m||ye(p,"default"))&&a.push(d)}}const l=[o,a];return ze(t)&&s.set(t,l),l}function nl(t){return t[0]!=="$"&&!Xr(t)}const cf=t=>t[0]==="_"||t==="$stable",Yc=t=>ce(t)?t.map(vn):[vn(t)],xb=(t,e,n)=>{if(e._n)return e;const s=Hg((...r)=>Yc(e(...r)),n);return s._c=!1,s},uf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(cf(r))continue;const i=t[r];if(ue(i))e[r]=xb(r,i,s);else if(i!=null){const o=Yc(i);e[r]=()=>o}}},lf=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},df=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Eb=(t,e,n)=>{const s=t.slots=sf();if(t.vnode.shapeFlag&32){const r=e._;r?(df(s,e,n),n&&Id(s,"_",r,!0)):uf(e,s)}else e&&lf(t,e)},_b=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:df(r,e,n):(i=!e.$stable,uf(e,r)),o=e}else e&&(lf(t,e),o={default:1});if(i)for(const a in r)!cf(a)&&o[a]==null&&delete r[a]},kt=Rb;function Ab(t){return Nb(t)}function Nb(t,e){const n=Wo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=In,insertStaticContent:g}=t,m=(b,y,I,j=null,N=null,O=null,R=void 0,z=null,L=!!y.dynamicChildren)=>{if(b===y)return;b&&!Pr(b,y)&&(j=ke(b),J(b,N,O,!0),b=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:C,ref:ne,shapeFlag:V}=y;switch(C){case Qo:_(b,y,I,j);break;case Ks:w(b,y,I,j);break;case no:b==null&&D(y,I,j,R);break;case Mt:H(b,y,I,j,N,O,R,z,L);break;default:V&1?F(b,y,I,j,N,O,R,z,L):V&6?x(b,y,I,j,N,O,R,z,L):(V&64||V&128)&&C.process(b,y,I,j,N,O,R,z,L,Pe)}ne!=null&&N&&Io(ne,b&&b.ref,O,y||b,!y)},_=(b,y,I,j)=>{if(b==null)s(y.el=a(y.children),I,j);else{const N=y.el=b.el;y.children!==b.children&&l(N,y.children)}},w=(b,y,I,j)=>{b==null?s(y.el=c(y.children||""),I,j):y.el=b.el},D=(b,y,I,j)=>{[b.el,b.anchor]=g(b.children,y,I,j,b.el,b.anchor)},v=({el:b,anchor:y},I,j)=>{let N;for(;b&&b!==y;)N=f(b),s(b,I,j),b=N;s(y,I,j)},T=({el:b,anchor:y})=>{let I;for(;b&&b!==y;)I=f(b),r(b),b=I;r(y)},F=(b,y,I,j,N,O,R,z,L)=>{y.type==="svg"?R="svg":y.type==="math"&&(R="mathml"),b==null?ae(y,I,j,N,O,R,z,L):E(b,y,N,O,R,z,L)},ae=(b,y,I,j,N,O,R,z)=>{let L,C;const{props:ne,shapeFlag:V,transition:te,dirs:ie}=b;if(L=b.el=o(b.type,O,ne&&ne.is,ne),V&8?u(L,b.children):V&16&&re(b.children,L,null,j,N,ga(b,O),R,z),ie&&As(b,null,j,"created"),de(L,b,b.scopeId,R,j),ne){for(const Ee in ne)Ee!=="value"&&!Xr(Ee)&&i(L,Ee,null,ne[Ee],O,j);"value"in ne&&i(L,"value",null,ne.value,O),(C=ne.onVnodeBeforeMount)&&hn(C,j,b)}ie&&As(b,null,j,"beforeMount");const ge=Tb(N,te);ge&&te.beforeEnter(L),s(L,y,I),((C=ne&&ne.onVnodeMounted)||ge||ie)&&kt(()=>{C&&hn(C,j,b),ge&&te.enter(L),ie&&As(b,null,j,"mounted")},N)},de=(b,y,I,j,N)=>{if(I&&p(b,I),j)for(let O=0;O<j.length;O++)p(b,j[O]);if(N){let O=N.subTree;if(y===O||yf(O.type)&&(O.ssContent===y||O.ssFallback===y)){const R=N.vnode;de(b,R,R.scopeId,R.slotScopeIds,N.parent)}}},re=(b,y,I,j,N,O,R,z,L=0)=>{for(let C=L;C<b.length;C++){const ne=b[C]=z?as(b[C]):vn(b[C]);m(null,ne,y,I,j,N,O,R,z)}},E=(b,y,I,j,N,O,R)=>{const z=y.el=b.el;let{patchFlag:L,dynamicChildren:C,dirs:ne}=y;L|=b.patchFlag&16;const V=b.props||Ne,te=y.props||Ne;let ie;if(I&&Ns(I,!1),(ie=te.onVnodeBeforeUpdate)&&hn(ie,I,y,b),ne&&As(y,b,I,"beforeUpdate"),I&&Ns(I,!0),(V.innerHTML&&te.innerHTML==null||V.textContent&&te.textContent==null)&&u(z,""),C?W(b.dynamicChildren,C,z,I,j,ga(y,N),O):R||B(b,y,z,null,I,j,ga(y,N),O,!1),L>0){if(L&16)ee(z,V,te,I,N);else if(L&2&&V.class!==te.class&&i(z,"class",null,te.class,N),L&4&&i(z,"style",V.style,te.style,N),L&8){const ge=y.dynamicProps;for(let Ee=0;Ee<ge.length;Ee++){const me=ge[Ee],Tt=V[me],yt=te[me];(yt!==Tt||me==="value")&&i(z,me,Tt,yt,N,I)}}L&1&&b.children!==y.children&&u(z,y.children)}else!R&&C==null&&ee(z,V,te,I,N);((ie=te.onVnodeUpdated)||ne)&&kt(()=>{ie&&hn(ie,I,y,b),ne&&As(y,b,I,"updated")},j)},W=(b,y,I,j,N,O,R)=>{for(let z=0;z<y.length;z++){const L=b[z],C=y[z],ne=L.el&&(L.type===Mt||!Pr(L,C)||L.shapeFlag&70)?d(L.el):I;m(L,C,ne,null,j,N,O,R,!0)}},ee=(b,y,I,j,N)=>{if(y!==I){if(y!==Ne)for(const O in y)!Xr(O)&&!(O in I)&&i(b,O,y[O],null,N,j);for(const O in I){if(Xr(O))continue;const R=I[O],z=y[O];R!==z&&O!=="value"&&i(b,O,z,R,N,j)}"value"in I&&i(b,"value",y.value,I.value,N)}},H=(b,y,I,j,N,O,R,z,L)=>{const C=y.el=b?b.el:a(""),ne=y.anchor=b?b.anchor:a("");let{patchFlag:V,dynamicChildren:te,slotScopeIds:ie}=y;ie&&(z=z?z.concat(ie):ie),b==null?(s(C,I,j),s(ne,I,j),re(y.children||[],I,ne,N,O,R,z,L)):V>0&&V&64&&te&&b.dynamicChildren?(W(b.dynamicChildren,te,I,N,O,R,z),(y.key!=null||N&&y===N.subTree)&&ff(b,y,!0)):B(b,y,I,ne,N,O,R,z,L)},x=(b,y,I,j,N,O,R,z,L)=>{y.slotScopeIds=z,b==null?y.shapeFlag&512?N.ctx.activate(y,I,j,R,L):S(y,I,j,N,O,R,L):M(b,y,L)},S=(b,y,I,j,N,O,R)=>{const z=b.component=Hb(b,j,N);if(Qd(b)&&(z.ctx.renderer=Pe),Yb(z,!1,R),z.asyncDep){if(N&&N.registerDep(z,A,R),!b.el){const L=z.subTree=gt(Ks);w(null,L,y,I)}}else A(z,b,y,I,N,O,R)},M=(b,y,I)=>{const j=y.component=b.component;if(zb(b,y,I))if(j.asyncDep&&!j.asyncResolved){k(j,y,I);return}else j.next=y,j.update();else y.el=b.el,j.vnode=y},A=(b,y,I,j,N,O,R)=>{const z=()=>{if(b.isMounted){let{next:V,bu:te,u:ie,parent:ge,vnode:Ee}=b;{const dn=hf(b);if(dn){V&&(V.el=Ee.el,k(b,V,R)),dn.asyncDep.then(()=>{b.isUnmounted||z()});return}}let me=V,Tt;Ns(b,!1),V?(V.el=Ee.el,k(b,V,R)):V=Ee,te&&ua(te),(Tt=V.props&&V.props.onVnodeBeforeUpdate)&&hn(Tt,ge,V,Ee),Ns(b,!0);const yt=rl(b),ln=b.subTree;b.subTree=yt,m(ln,yt,d(ln.el),ke(ln),b,N,O),V.el=yt.el,me===null&&Pb(b,yt.el),ie&&kt(ie,N),(Tt=V.props&&V.props.onVnodeUpdated)&&kt(()=>hn(Tt,ge,V,Ee),N)}else{let V;const{el:te,props:ie}=y,{bm:ge,m:Ee,parent:me,root:Tt,type:yt}=b,ln=ti(y);Ns(b,!1),ge&&ua(ge),!ln&&(V=ie&&ie.onVnodeBeforeMount)&&hn(V,me,y),Ns(b,!0);{Tt.ce&&Tt.ce._injectChildStyle(yt);const dn=b.subTree=rl(b);m(null,dn,I,j,b,N,O),y.el=dn.el}if(Ee&&kt(Ee,N),!ln&&(V=ie&&ie.onVnodeMounted)){const dn=y;kt(()=>hn(V,me,dn),N)}(y.shapeFlag&256||me&&ti(me.vnode)&&me.vnode.shapeFlag&256)&&b.a&&kt(b.a,N),b.isMounted=!0,y=I=j=null}};b.scope.on();const L=b.effect=new Ad(z);b.scope.off();const C=b.update=L.run.bind(L),ne=b.job=L.runIfDirty.bind(L);ne.i=b,ne.id=b.uid,L.scheduler=()=>Gc(ne),Ns(b,!0),C()},k=(b,y,I)=>{y.component=b;const j=b.vnode.props;b.vnode=y,b.next=null,Mb(b,y.props,j,I),_b(b,y.children,I),Es(),Qu(b),_s()},B=(b,y,I,j,N,O,R,z,L=!1)=>{const C=b&&b.children,ne=b?b.shapeFlag:0,V=y.children,{patchFlag:te,shapeFlag:ie}=y;if(te>0){if(te&128){q(C,V,I,j,N,O,R,z,L);return}else if(te&256){K(C,V,I,j,N,O,R,z,L);return}}ie&8?(ne&16&&Se(C,N,O),V!==C&&u(I,V)):ne&16?ie&16?q(C,V,I,j,N,O,R,z,L):Se(C,N,O,!0):(ne&8&&u(I,""),ie&16&&re(V,I,j,N,O,R,z,L))},K=(b,y,I,j,N,O,R,z,L)=>{b=b||fr,y=y||fr;const C=b.length,ne=y.length,V=Math.min(C,ne);let te;for(te=0;te<V;te++){const ie=y[te]=L?as(y[te]):vn(y[te]);m(b[te],ie,I,null,N,O,R,z,L)}C>ne?Se(b,N,O,!0,!1,V):re(y,I,j,N,O,R,z,L,V)},q=(b,y,I,j,N,O,R,z,L)=>{let C=0;const ne=y.length;let V=b.length-1,te=ne-1;for(;C<=V&&C<=te;){const ie=b[C],ge=y[C]=L?as(y[C]):vn(y[C]);if(Pr(ie,ge))m(ie,ge,I,null,N,O,R,z,L);else break;C++}for(;C<=V&&C<=te;){const ie=b[V],ge=y[te]=L?as(y[te]):vn(y[te]);if(Pr(ie,ge))m(ie,ge,I,null,N,O,R,z,L);else break;V--,te--}if(C>V){if(C<=te){const ie=te+1,ge=ie<ne?y[ie].el:j;for(;C<=te;)m(null,y[C]=L?as(y[C]):vn(y[C]),I,ge,N,O,R,z,L),C++}}else if(C>te)for(;C<=V;)J(b[C],N,O,!0),C++;else{const ie=C,ge=C,Ee=new Map;for(C=ge;C<=te;C++){const Ot=y[C]=L?as(y[C]):vn(y[C]);Ot.key!=null&&Ee.set(Ot.key,C)}let me,Tt=0;const yt=te-ge+1;let ln=!1,dn=0;const Lr=new Array(yt);for(C=0;C<yt;C++)Lr[C]=0;for(C=ie;C<=V;C++){const Ot=b[C];if(Tt>=yt){J(Ot,N,O,!0);continue}let fn;if(Ot.key!=null)fn=Ee.get(Ot.key);else for(me=ge;me<=te;me++)if(Lr[me-ge]===0&&Pr(Ot,y[me])){fn=me;break}fn===void 0?J(Ot,N,O,!0):(Lr[fn-ge]=C+1,fn>=dn?dn=fn:ln=!0,m(Ot,y[fn],I,null,N,O,R,z,L),Tt++)}const Ru=ln?Ob(Lr):fr;for(me=Ru.length-1,C=yt-1;C>=0;C--){const Ot=ge+C,fn=y[Ot],$u=Ot+1<ne?y[Ot+1].el:j;Lr[C]===0?m(null,fn,I,$u,N,O,R,z,L):ln&&(me<0||C!==Ru[me]?Q(fn,I,$u,2):me--)}}},Q=(b,y,I,j,N=null)=>{const{el:O,type:R,transition:z,children:L,shapeFlag:C}=b;if(C&6){Q(b.component.subTree,y,I,j);return}if(C&128){b.suspense.move(y,I,j);return}if(C&64){R.move(b,y,I,Pe);return}if(R===Mt){s(O,y,I);for(let V=0;V<L.length;V++)Q(L[V],y,I,j);s(b.anchor,y,I);return}if(R===no){v(b,y,I);return}if(j!==2&&C&1&&z)if(j===0)z.beforeEnter(O),s(O,y,I),kt(()=>z.enter(O),N);else{const{leave:V,delayLeave:te,afterLeave:ie}=z,ge=()=>s(O,y,I),Ee=()=>{V(O,()=>{ge(),ie&&ie()})};te?te(O,ge,Ee):Ee()}else s(O,y,I)},J=(b,y,I,j=!1,N=!1)=>{const{type:O,props:R,ref:z,children:L,dynamicChildren:C,shapeFlag:ne,patchFlag:V,dirs:te,cacheIndex:ie}=b;if(V===-2&&(N=!1),z!=null&&Io(z,null,I,b,!0),ie!=null&&(y.renderCache[ie]=void 0),ne&256){y.ctx.deactivate(b);return}const ge=ne&1&&te,Ee=!ti(b);let me;if(Ee&&(me=R&&R.onVnodeBeforeUnmount)&&hn(me,y,b),ne&6)pe(b.component,I,j);else{if(ne&128){b.suspense.unmount(I,j);return}ge&&As(b,null,y,"beforeUnmount"),ne&64?b.type.remove(b,y,I,Pe,j):C&&!C.hasOnce&&(O!==Mt||V>0&&V&64)?Se(C,y,I,!1,!0):(O===Mt&&V&384||!N&&ne&16)&&Se(L,y,I),j&&Te(b)}(Ee&&(me=R&&R.onVnodeUnmounted)||ge)&&kt(()=>{me&&hn(me,y,b),ge&&As(b,null,y,"unmounted")},I)},Te=b=>{const{type:y,el:I,anchor:j,transition:N}=b;if(y===Mt){ve(I,j);return}if(y===no){T(b);return}const O=()=>{r(I),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(b.shapeFlag&1&&N&&!N.persisted){const{leave:R,delayLeave:z}=N,L=()=>R(I,O);z?z(b.el,O,L):L()}else O()},ve=(b,y)=>{let I;for(;b!==y;)I=f(b),r(b),b=I;r(y)},pe=(b,y,I)=>{const{bum:j,scope:N,job:O,subTree:R,um:z,m:L,a:C}=b;sl(L),sl(C),j&&ua(j),N.stop(),O&&(O.flags|=8,J(R,b,y,I)),z&&kt(z,y),kt(()=>{b.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Se=(b,y,I,j=!1,N=!1,O=0)=>{for(let R=O;R<b.length;R++)J(b[R],y,I,j,N)},ke=b=>{if(b.shapeFlag&6)return ke(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const y=f(b.anchor||b.el),I=y&&y[Yg];return I?f(I):y};let Ze=!1;const Oe=(b,y,I)=>{b==null?y._vnode&&J(y._vnode,null,null,!0):m(y._vnode||null,b,y,null,null,null,I),y._vnode=b,Ze||(Ze=!0,Qu(),qd(),Ze=!1)},Pe={p:m,um:J,m:Q,r:Te,mt:S,mc:re,pc:B,pbc:W,n:ke,o:t};return{render:Oe,hydrate:void 0,createApp:wb(Oe)}}function ga({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ns({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Tb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ff(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=as(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ff(o,a)),a.type===Qo&&(a.el=o.el)}}function Ob(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function hf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hf(e)}function sl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jb=Symbol.for("v-scx"),Cb=()=>to(jb);function ba(t,e,n){return pf(t,e,n)}function pf(t,e,n=Ne){const{immediate:s,deep:r,flush:i,once:o}=n,a=bt({},n),c=e&&s||!e&&i!=="post";let l;if(bi){if(i==="sync"){const p=Cb();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=In,p.resume=In,p.pause=In,p}}const u=ct;a.call=(p,g,m)=>En(p,u,g,m);let d=!1;i==="post"?a.scheduler=p=>{kt(p,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(p,g)=>{g?p():Gc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Vg(t,e,a);return bi&&(l?l.push(f):c&&f()),f}function kb(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?gf(s,t):()=>s[t]:t.bind(s,s);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Ni(this),a=pf(r,i.bind(s),n);return o(),a}function gf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Db=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Zs(e)}Modifiers`];function Ub(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let r=n;const i=e.startsWith("update:"),o=i&&Db(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>qe(u)?u.trim():u)),o.number&&(r=n.map(ug)));let a,c=s[a=ca(e)]||s[a=ca(qt(e))];!c&&i&&(c=s[a=ca(Zs(e))]),c&&En(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,En(l,t,6,r)}}function bf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ue(t)){const c=l=>{const u=bf(l,e,!0);u&&(a=!0,bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ze(t)&&s.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):bt(o,i),ze(t)&&s.set(t,o),o)}function Yo(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,Zs(e))||ye(t,e))}function rl(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:g,inheritAttrs:m}=t,_=Mo(t);let w,D;try{if(n.shapeFlag&4){const T=r||s,F=T;w=vn(l.call(F,T,u,d,p,f,g)),D=a}else{const T=e;w=vn(T.length>1?T(d,{attrs:a,slots:o,emit:c}):T(d,null)),D=e.props?a:Bb(a)}}catch(T){si.length=0,Go(T,t,1),w=gt(Ks)}let v=w;if(D&&m!==!1){const T=Object.keys(D),{shapeFlag:F}=v;T.length&&F&7&&(i&&T.some(Bc)&&(D=Lb(D,i)),v=vr(v,D,!1,!0))}return n.dirs&&(v=vr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Hc(v,n.transition),w=v,Mo(_),w}const Bb=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},Lb=(t,e)=>{const n={};for(const s in t)(!Bc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function zb(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?il(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Yo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?il(s,o,l):!0:!!o;return!1}function il(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Yo(n,i))return!0}return!1}function Pb({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const yf=t=>t.__isSuspense;function Rb(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Gg(t)}const Mt=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),Ks=Symbol.for("v-cmt"),no=Symbol.for("v-stc"),si=[];let Lt=null;function je(t=!1){si.push(Lt=t?null:[])}function $b(){si.pop(),Lt=si[si.length-1]||null}let gi=1;function ol(t,e=!1){gi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function mf(t){return t.dynamicChildren=gi>0?Lt||fr:null,$b(),gi>0&&Lt&&Lt.push(t),t}function Be(t,e,n,s,r,i){return mf(Y(t,e,n,s,r,i,!0))}function wf(t,e,n,s,r){return mf(gt(t,e,n,s,r,!0))}function vf(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const Sf=({key:t})=>t??null,so=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||pt(t)||ue(t)?{i:rn,r:t,k:e,f:!!n}:t:null);function Y(t,e=null,n=null,s=0,r=null,i=t===Mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sf(e),ref:e&&so(e),scopeId:Hd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(Qc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),gi>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const gt=Fb;function Fb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===lb)&&(t=Ks),vf(t)){const a=vr(t,e,!0);return n&&Qc(a,n),gi>0&&!i&&Lt&&(a.shapeFlag&6?Lt[Lt.indexOf(t)]=a:Lt.push(a)),a.patchFlag=-2,a}if(e0(t)&&(t=t.__vccOpts),e){e=Vb(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=li(a)),ze(c)&&(qc(c)&&!ce(c)&&(c=bt({},c)),e.style=Pc(c))}const o=qe(t)?1:yf(t)?128:Qg(t)?64:ze(t)?4:ue(t)?2:0;return Y(t,e,n,s,r,o,i,!0)}function Vb(t){return t?qc(t)||rf(t)?bt({},t):t:null}function vr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Wb(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Sf(l),ref:e&&e.ref?n&&i?ce(i)?i.concat(so(e)):[i,so(e)]:so(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vr(t.ssContent),ssFallback:t.ssFallback&&vr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Hc(u,c.clone(u)),u}function or(t=" ",e=0){return gt(Qo,null,t,e)}function Kb(t,e){const n=gt(no,null,t);return n.staticCount=e,n}function vt(t="",e=!1){return e?(je(),wf(Ks,null,t)):gt(Ks,null,t)}function vn(t){return t==null||typeof t=="boolean"?gt(Ks):ce(t)?gt(Mt,null,t.slice()):vf(t)?as(t):gt(Qo,null,String(t))}function as(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vr(t)}function Qc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!rf(e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:rn},n=32):(e=String(e),s&64?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=li([e.class,s.class]));else if(r==="style")e.style=Pc([e.style,s.style]);else if($o(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function hn(t,e,n,s=null){En(t,e,7,[n,s])}const qb=tf();let Gb=0;function Hb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||qb,i={uid:Gb++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:af(s,r),emitsOptions:bf(s,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ub.bind(null,i),t.ce&&t.ce(i),i}let ct=null,Eo,Ja;{const t=Wo(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Eo=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Ja=e("__VUE_SSR_SETTERS__",n=>bi=n)}const Ni=t=>{const e=ct;return Eo(t),t.scope.on(),()=>{t.scope.off(),Eo(e)}},al=()=>{ct&&ct.scope.off(),Eo(null)};function Mf(t){return t.vnode.shapeFlag&4}let bi=!1;function Yb(t,e=!1,n=!1){e&&Ja(e);const{props:s,children:r}=t.vnode,i=Mf(t);Sb(t,s,i,e),Eb(t,r,n);const o=i?Qb(t,e):void 0;return e&&Ja(!1),o}function Qb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fb);const{setup:s}=n;if(s){Es();const r=t.setupContext=s.length>1?Xb(t):null,i=Ni(t),o=Ai(s,t,0,[t.props,r]),a=vd(o);if(_s(),i(),(a||t.sp)&&!ti(t)&&Yd(t),a){if(o.then(al,al),e)return o.then(c=>{cl(t,c)}).catch(c=>{Go(c,t,0)});t.asyncDep=o}else cl(t,o)}else If(t)}function cl(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=Vd(e)),If(t)}function If(t,e,n){const s=t.type;t.render||(t.render=s.render||In);{const r=Ni(t);Es();try{hb(t)}finally{_s(),r()}}}const Zb={get(t,e){return at(t,"get",""),t[e]}};function Xb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zb),slots:t.slots,emit:t.emit,expose:e}}function Zc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vd(Lg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)},has(e,n){return n in e||n in ni}})):t.proxy}function Jb(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function e0(t){return ue(t)&&"__vccOpts"in t}const t0=(t,e)=>$g(t,e,bi),n0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ec;const ul=typeof window<"u"&&window.trustedTypes;if(ul)try{ec=ul.createPolicy("vue",{createHTML:t=>t})}catch{}const xf=ec?t=>ec.createHTML(t):t=>t,s0="http://www.w3.org/2000/svg",r0="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,ll=Ln&&Ln.createElement("template"),i0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ln.createElementNS(s0,t):e==="mathml"?Ln.createElementNS(r0,t):n?Ln.createElement(t,{is:n}):Ln.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ll.innerHTML=xf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=ll.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},o0=Symbol("_vtc");function a0(t,e,n){const s=t[o0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dl=Symbol("_vod"),c0=Symbol("_vsh"),u0=Symbol(""),l0=/(^|;)\s*display\s*:/;function d0(t,e,n){const s=t.style,r=qe(n);let i=!1;if(n&&!r){if(e)if(qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ro(s,a,"")}else for(const o in e)n[o]==null&&ro(s,o,"");for(const o in n)o==="display"&&(i=!0),ro(s,o,n[o])}else if(r){if(e!==n){const o=s[u0];o&&(n+=";"+o),s.cssText=n,i=l0.test(n)}}else e&&t.removeAttribute("style");dl in t&&(t[dl]=i?s.display:"",t[c0]&&(s.display="none"))}const fl=/\s*!important$/;function ro(t,e,n){if(ce(n))n.forEach(s=>ro(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=f0(t,e);fl.test(n)?t.setProperty(Zs(s),n.replace(fl,""),"important"):t[s]=n}}const hl=["Webkit","Moz","ms"],ya={};function f0(t,e){const n=ya[e];if(n)return n;let s=qt(e);if(s!=="filter"&&s in t)return ya[e]=s;s=Ko(s);for(let r=0;r<hl.length;r++){const i=hl[r]+s;if(i in t)return ya[e]=i}return e}const pl="http://www.w3.org/1999/xlink";function gl(t,e,n,s,r,i=gg(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(pl,e.slice(6,e.length)):t.setAttributeNS(pl,e,n):n==null||i&&!xd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xs(n)?String(n):n)}function bl(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xf(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=xd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function h0(t,e,n,s){t.addEventListener(e,n,s)}function p0(t,e,n,s){t.removeEventListener(e,n,s)}const yl=Symbol("_vei");function g0(t,e,n,s,r=null){const i=t[yl]||(t[yl]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=b0(e);if(s){const l=i[e]=w0(s,r);h0(t,a,l,c)}else o&&(p0(t,a,o,c),i[e]=void 0)}}const ml=/(?:Once|Passive|Capture)$/;function b0(t){let e;if(ml.test(t)){e={};let s;for(;s=t.match(ml);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zs(t.slice(2)),e]}let ma=0;const y0=Promise.resolve(),m0=()=>ma||(y0.then(()=>ma=0),ma=Date.now());function w0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;En(v0(s,n.value),e,5,[s])};return n.value=t,n.attached=m0(),n}function v0(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,S0=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?a0(t,s,o):e==="style"?d0(t,n,s):$o(e)?Bc(e)||g0(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):M0(t,e,s,o))?(bl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gl(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(s))?bl(t,qt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),gl(t,e,s,o))};function M0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wl(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wl(e)&&qe(n)?!1:e in t}const I0=bt({patchProp:S0},i0);let vl;function x0(){return vl||(vl=Ab(I0))}const E0=(...t)=>{const e=x0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=A0(s);if(!r)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,_0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function _0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function A0(t){return qe(t)?document.querySelector(t):t}var _i;class N0 extends Event{constructor(n,s){super(n,s);Wu(this,_i);qu(this,_i,(s==null?void 0:s.detail)??null)}get detail(){return Ku(this,_i)}}_i=new WeakMap;class _n extends EventTarget{constructor(e={}){super(),this._debug=!!e.debug}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}emit(e,n,s=!1){try{n&&n.isSuiEvent&&!s?this.dispatchEvent(n):this.dispatchEvent(new N0(e,{detail:n}))}catch(r){console.error(r)}}}var T0={};class O0 extends Error{}const Pi=async t=>{try{return await import(t)}catch{throw new O0(`Unable to import module ${t}`)}},Rr=async t=>{try{if(t=="execSync"||t=="spawn"){const{default:e}=await Pi("child_process");return e[t]}if(t=="fs"){const{default:e}=await Pi("fs");return e}if(t=="path"){const{default:e}=await Pi("path");return e}if(t=="net"){const{default:e}=await Pi("net");return e}}catch{return null}};class wa{static async isPortThere(e){const n=await Rr("net");if(!n)return!1;const s=n.Socket,r=new s;let i=null;const o=new Promise(c=>{i=c});setTimeout(()=>{r.destroy(),i(!1)},3e3),r.on("connect",()=>{i(!0)}),r.on("error",()=>{i(!1)}),r.on("timeout",()=>{i(!1)}),r.connect(e,"0.0.0.0");const a=await o;return r.destroy(),a}static async spawn(e,n=[],s={}){const r=await Rr("spawn");if(!r)throw new Error("can not spawn a proccess in this env");return await new Promise((i,o)=>{let a=!0,c=null;const l=r(e,n,{env:{...T0,...s}});l.on("error",function(u){a=!1,c=u}),setTimeout(()=>{a?i(l):o(c)},100)})}static async exec(e){const n=await Rr("execSync");if(!n)throw new Error("can not exec a proccess in this env");return n(e,{encoding:"utf-8"})}static async getModulesNamesFromPackagePath(e){const n=await Rr("path"),s=await Rr("fs");if(!n||!s)throw new Error("can not access path in this env");try{const i=(await s.promises.readdir(e.join(this._path,"build")))[0];return(await s.promises.readdir(n.join(this._path,"build",i,"bytecode_modules"),{withFileTypes:!0})).filter(c=>c.isFile()).map(c=>c.name.split(".mv").join(""))}catch{throw new Error("can not get modules names from local package path")}}}class Xc extends Event{constructor(e={}){const n=e.data?(""+e.data.type).split("<")[0].split("::").pop():null;if(super(n,{}),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._data=e.data||{},this.detail=this}log(...e){if(!this._debug)return;let n=this._suiMaster?""+this._suiMaster.instanceN+" |":this.instanceN?""+this.instanceN+" |":"";e.unshift(this.constructor.name+" |"),e.unshift(n),console.info.apply(null,e)}get isSuiEvent(){return!0}get typeName(){return this._data?(""+this._data.type).split("<")[0].split("::").pop():null}get type(){return this._data?""+this._data.type:null}get data(){return this._data}get parsedJson(){return this._data.parsedJson?this._data.parsedJson:null}get timestampMs(){return this._data.timestampMs?parseInt(this._data.timestampMs,10):null}}class Ef extends _n{constructor(e={}){if(super(e),this._debug=!!e.debug,this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried");this._data=e.data||{},this._results=null,this._events=null}get executedEpoch(){return this._data&&this._data.effects&&this._data.effects.executedEpoch?BigInt(this._data.effects.executedEpoch):null}get digest(){return this._data?this._data.digest:null}get gasUsed(){try{if(this._data&&this._data.effects&&this._data.effects.gasUsed)return BigInt(this._data.effects.gasUsed.computationCost)+BigInt(this._data.effects.gasUsed.storageCost)-BigInt(this._data.effects.gasUsed.storageRebate)}catch{return null}return null}get deleted(){return this.results.deleted}get mutated(){return this.results.mutated}get created(){return this.results.created}get data(){return this._data}get status(){let e=null;return this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&(e=this.data.effects.status.status),e}isSuccessful(){return!!(this.data&&this.data.effects&&this.data.effects.status&&this.data.effects.status.status&&this.data.effects.status.status=="success")}get events(){if(this._events)return this._events;const e=[];if(this.data.events&&this.data.events.length)for(const n of this.data.events){const s=new this._suiMaster.SuiEvent({suiMaster:this._suiMaster,debug:this._debug,data:n});e.push(s)}return this._events=e,this._events}get results(){if(this._results)return this._results;const e={},n=[],s=[],r=[];if(this.data.objectChanges){for(const i of this.data.objectChanges)if(i.objectId&&!e[i.objectId]){const o=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i});o.address&&(e[o.address]=o)}}if(this.data.effects){const i=["created","mutated"];for(const o of i)if(this.data.effects[o]&&this.data.effects[o].length)for(const a of this.data.effects[o])a.reference&&a.reference.objectId&&e[a.reference.objectId]&&(o==="created"?n.push(e[a.reference.objectId]):o==="mutated"&&s.push(e[a.reference.objectId]));if(this.data.effects.deleted){for(const o of this.data.effects.deleted)if(o.objectId){if(!e[o.objectId]){const a=new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:o});e[o.objectId]=a}e[o.objectId].markAsDeleted(),r.push(e[o.objectId])}}}return this._results={created:n,mutated:s,deleted:r,objects:Object.values(e),status:this.status},this._results}get timestampMs(){return this.data.timestampMs?parseInt(""+this.data.timestampMs,10):null}}class ms extends _n{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPaginatedResponse");this._method=e.method,this._params=e.params,this._order=e.order||"descending",this._hasNextPage=!0,this._nextCursor=null,this._data=[]}async forEach(e,n=null){let s=0;do for(const r of this._data)(!n||s<n)&&await e(r),s++;while((!n||s<n)&&await this.nextPage())}get hasNextPage(){return this._hasNextPage}get data(){return this._data}async nextPage(){return this._hasNextPage?await this.fetch({cursor:this._nextCursor}):!1}async fetch(e={}){const n=Object.assign({},this._params);e.cursor&&(n.cursor=e.cursor),n.order=this._order;const s=await this._suiMaster.client[this._method](n);let r=0;return s.data&&s.data.length&&(r=s.data.length),s.hasNextPage?(this._hasNextPage=!0,this._nextCursor=s.nextCursor):(this._hasNextPage=!1,this._nextCursor=null),this.log("got",r,"items. Has next page: ",s.hasNextPage),this._method==="queryEvents"?this._data=s.data.map(i=>new Xc({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="queryTransactionBlocks"?this._data=s.data.map(i=>new Ef({data:i,suiMaster:this._suiMaster,debug:this._debug})):this._method==="getOwnedObjects"?this._data=s.data.map(i=>new this._suiMaster.SuiObject({suiMaster:this._suiMaster,debug:this._debug,objectChange:i})):this._data=s.data,this._data}}/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function yi(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function _f(t,e){return Array.isArray(e)?e.length===0?!0:t?e.every(n=>typeof n=="string"):e.every(n=>Number.isSafeInteger(n)):!1}function Af(t){if(typeof t!="function")throw new Error("function expected");return!0}function Sr(t,e){if(typeof e!="string")throw new Error(`${t}: string expected`);return!0}function jr(t){if(!Number.isSafeInteger(t))throw new Error(`invalid integer: ${t}`)}function _o(t){if(!Array.isArray(t))throw new Error("array expected")}function Ao(t,e){if(!_f(!0,e))throw new Error(`${t}: array of strings expected`)}function Jc(t,e){if(!_f(!1,e))throw new Error(`${t}: array of numbers expected`)}function Zo(...t){const e=i=>i,n=(i,o)=>a=>i(o(a)),s=t.map(i=>i.encode).reduceRight(n,e),r=t.map(i=>i.decode).reduce(n,e);return{encode:s,decode:r}}function eu(t){const e=typeof t=="string"?t.split(""):t,n=e.length;Ao("alphabet",e);const s=new Map(e.map((r,i)=>[r,i]));return{encode:r=>(_o(r),r.map(i=>{if(!Number.isSafeInteger(i)||i<0||i>=n)throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${t}`);return e[i]})),decode:r=>(_o(r),r.map(i=>{Sr("alphabet.decode",i);const o=s.get(i);if(o===void 0)throw new Error(`Unknown letter: "${i}". Allowed: ${t}`);return o}))}}function tu(t=""){return Sr("join",t),{encode:e=>(Ao("join.decode",e),e.join(t)),decode:e=>(Sr("join.decode",e),e.split(t))}}function j0(t,e="="){return jr(t),Sr("padding",e),{encode(n){for(Ao("padding.encode",n);n.length*t%8;)n.push(e);return n},decode(n){Ao("padding.decode",n);let s=n.length;if(s*t%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;s>0&&n[s-1]===e;s--)if((s-1)*t%8===0)throw new Error("padding: invalid, string has too much padding");return n.slice(0,s)}}}function tc(t,e,n){if(e<2)throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);if(_o(t),!t.length)return[];let s=0;const r=[],i=Array.from(t,a=>{if(jr(a),a<0||a>=e)throw new Error(`invalid integer: ${a}`);return a}),o=i.length;for(;;){let a=0,c=!0;for(let l=s;l<o;l++){const u=i[l],d=e*a,f=d+u;if(!Number.isSafeInteger(f)||d/e!==a||f-u!==d)throw new Error("convertRadix: carry overflow");const p=f/n;a=f%n;const g=Math.floor(p);if(i[l]=g,!Number.isSafeInteger(g)||g*n+a!==f)throw new Error("convertRadix: carry overflow");if(c)g?c=!1:s=l;else continue}if(r.push(a),c)break}for(let a=0;a<t.length-1&&t[a]===0;a++)r.push(0);return r.reverse()}const Nf=(t,e)=>e===0?t:Nf(e,t%e),No=(t,e)=>t+(e-Nf(t,e)),io=(()=>{let t=[];for(let e=0;e<40;e++)t.push(2**e);return t})();function To(t,e,n,s){if(_o(t),e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(No(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${No(e,n)}`);let r=0,i=0;const o=io[e],a=io[n]-1,c=[];for(const l of t){if(jr(l),l>=o)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(r=r<<e|l,i+e>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);for(i+=e;i>=n;i-=n)c.push((r>>i-n&a)>>>0);const u=io[i];if(u===void 0)throw new Error("invalid carry");r&=u-1}if(r=r<<n-i&a,!s&&i>=e)throw new Error("Excess padding");if(!s&&r>0)throw new Error(`Non-zero padding: ${r}`);return s&&i>0&&c.push(r>>>0),c}function Tf(t){jr(t);const e=2**8;return{encode:n=>{if(!yi(n))throw new Error("radix.encode input should be Uint8Array");return tc(Array.from(n),e,t)},decode:n=>(Jc("radix.decode",n),Uint8Array.from(tc(n,t,e)))}}function Of(t,e=!1){if(jr(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(No(8,t)>32||No(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!yi(n))throw new Error("radix2.encode input should be Uint8Array");return To(Array.from(n),8,t,!e)},decode:n=>(Jc("radix2.decode",n),Uint8Array.from(To(n,t,8,e)))}}function Sl(t){return Af(t),function(...e){try{return t.apply(null,e)}catch{}}}function jf(t,e){return jr(t),Af(e),{encode(n){if(!yi(n))throw new Error("checksum.encode: input should be Uint8Array");const s=e(n).slice(0,t),r=new Uint8Array(n.length+t);return r.set(n),r.set(s,n.length),r},decode(n){if(!yi(n))throw new Error("checksum.decode: input should be Uint8Array");const s=n.slice(0,-t),r=n.slice(-t),i=e(s).slice(0,t);for(let o=0;o<t;o++)if(i[o]!==r[o])throw new Error("Invalid checksum");return s}}}const Ri={alphabet:eu,chain:Zo,checksum:jf,convertRadix:tc,convertRadix2:To,radix:Tf,radix2:Of,join:tu,padding:j0},C0=t=>Zo(Tf(58),eu(t),tu("")),nu=C0("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),k0=t=>Zo(jf(4,e=>t(t(e))),nu),nc=Zo(eu("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),tu("")),Ml=[996825010,642813549,513874426,1027748829,705979059];function $r(t){const e=t>>25;let n=(t&33554431)<<5;for(let s=0;s<Ml.length;s++)(e>>s&1)===1&&(n^=Ml[s]);return n}function Il(t,e,n=1){const s=t.length;let r=1;for(let i=0;i<s;i++){const o=t.charCodeAt(i);if(o<33||o>126)throw new Error(`Invalid prefix (${t})`);r=$r(r)^o>>5}r=$r(r);for(let i=0;i<s;i++)r=$r(r)^t.charCodeAt(i)&31;for(let i of e)r=$r(r)^i;for(let i=0;i<6;i++)r=$r(r);return r^=n,nc.encode(To([r%io[30]],30,5,!1))}function D0(t){const e=t==="bech32"?1:734539939,n=Of(5),s=n.decode,r=n.encode,i=Sl(s);function o(d,f,p=90){Sr("bech32.encode prefix",d),yi(f)&&(f=Array.from(f)),Jc("bech32.encode",f);const g=d.length;if(g===0)throw new TypeError(`Invalid prefix length ${g}`);const m=g+7+f.length;if(p!==!1&&m>p)throw new TypeError(`Length ${m} exceeds limit ${p}`);const _=d.toLowerCase(),w=Il(_,f,e);return`${_}1${nc.encode(f)}${w}`}function a(d,f=90){Sr("bech32.decode input",d);const p=d.length;if(p<8||f!==!1&&p>f)throw new TypeError(`invalid string length: ${p} (${d}). Expected (8..${f})`);const g=d.toLowerCase();if(d!==g&&d!==d.toUpperCase())throw new Error("String must be lowercase or uppercase");const m=g.lastIndexOf("1");if(m===0||m===-1)throw new Error('Letter "1" must be present between prefix and data only');const _=g.slice(0,m),w=g.slice(m+1);if(w.length<6)throw new Error("Data must be at least 6 characters long");const D=nc.decode(w).slice(0,-6),v=Il(_,D,e);if(!w.endsWith(v))throw new Error(`Invalid checksum in ${d}: expected "${v}"`);return{prefix:_,words:D}}const c=Sl(a);function l(d){const{prefix:f,words:p}=a(d,!1);return{prefix:f,words:p,bytes:s(p)}}function u(d,f){return o(d,r(f))}return{encode:o,decode:a,encodeFromBytes:u,decodeToBytes:l,decodeUnsafe:c,fromWords:s,fromWordsUnsafe:i,toWords:r}}const Oo=D0("bech32"),Xo=t=>nu.encode(t),mi=t=>nu.decode(t);function we(t){return Uint8Array.from(atob(t),e=>e.charCodeAt(0))}const va=8192;function xe(t){if(t.length<va)return btoa(String.fromCharCode(...t));let e="";for(var n=0;n<t.length;n+=va){const s=t.slice(n,n+va);e+=String.fromCharCode(...s)}return btoa(e)}function su(t){var r;const e=t.startsWith("0x")?t.slice(2):t,n=e.length%2===0?e:`0${e}`,s=((r=n.match(/[0-9a-fA-F]{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))??[];if(s.length!==n.length/2)throw new Error(`Invalid hex string ${t}`);return Uint8Array.from(s)}function vs(t){return t.reduce((e,n)=>e+n.toString(16).padStart(2,"0"),"")}function Jo(t,e){return Array.from({length:Math.ceil(t.length/e)},(n,s)=>t.slice(s*e,(s+1)*e))}class Cf{constructor(e,n){if(typeof e!="function")throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ${e}.`);this._batchLoadFn=e,this._maxBatchSize=z0(n),this._batchScheduleFn=P0(n),this._cacheKeyFn=R0(n),this._cacheMap=$0(n),this._batch=null,this.name=F0(n)}load(e){if(e==null)throw new TypeError(`The loader.load() function must be called with a value, but got: ${String(e)}.`);const n=B0(this),s=this._cacheMap;let r;if(s){r=this._cacheKeyFn(e);const o=s.get(r);if(o){const a=n.cacheHits||(n.cacheHits=[]);return new Promise(c=>{a.push(()=>{c(o)})})}}n.keys.push(e);const i=new Promise((o,a)=>{n.callbacks.push({resolve:o,reject:a})});return s&&s.set(r,i),i}loadMany(e){if(!kf(e))throw new TypeError(`The loader.loadMany() function must be called with Array<key>, but got: ${e}.`);const n=[];for(let s=0;s<e.length;s++)n.push(this.load(e[s]).catch(r=>r));return Promise.all(n)}clear(e){const n=this._cacheMap;if(n){const s=this._cacheKeyFn(e);n.delete(s)}return this}clearAll(){const e=this._cacheMap;return e&&e.clear(),this}prime(e,n){const s=this._cacheMap;if(s){const r=this._cacheKeyFn(e);if(s.get(r)===void 0){let i;n instanceof Error?(i=Promise.reject(n),i.catch(()=>{})):i=Promise.resolve(n),s.set(r,i)}}return this}}const U0=typeof process=="object"&&typeof process.nextTick=="function"?function(t){Sa||(Sa=Promise.resolve()),Sa.then(()=>{process.nextTick(t)})}:typeof setImmediate=="function"?function(t){setImmediate(t)}:function(t){setTimeout(t)};let Sa;function B0(t){const e=t._batch;if(e!==null&&!e.hasDispatched&&e.keys.length<t._maxBatchSize)return e;const n={hasDispatched:!1,keys:[],callbacks:[]};return t._batch=n,t._batchScheduleFn(()=>{L0(t,n)}),n}function L0(t,e){if(e.hasDispatched=!0,e.keys.length===0){sc(e);return}let n;try{n=t._batchLoadFn(e.keys)}catch(s){return Ma(t,e,new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ${String(s)}.`))}if(!n||typeof n.then!="function")return Ma(t,e,new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ${String(n)}.`));Promise.resolve(n).then(s=>{if(!kf(s))throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ${String(s)}.`);if(s.length!==e.keys.length)throw new TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
${String(e.keys)}

Values:
${String(s)}`);sc(e);for(let r=0;r<e.callbacks.length;r++){const i=s[r];i instanceof Error?e.callbacks[r].reject(i):e.callbacks[r].resolve(i)}}).catch(s=>{Ma(t,e,s)})}function Ma(t,e,n){sc(e);for(let s=0;s<e.keys.length;s++)t.clear(e.keys[s]),e.callbacks[s].reject(n)}function sc(t){if(t.cacheHits)for(let e=0;e<t.cacheHits.length;e++)t.cacheHits[e]()}function z0(t){if(!(!t||t.batch!==!1))return 1;const n=t&&t.maxBatchSize;if(n===void 0)return 1/0;if(typeof n!="number"||n<1)throw new TypeError(`maxBatchSize must be a positive number: ${n}`);return n}function P0(t){const e=t&&t.batchScheduleFn;if(e===void 0)return U0;if(typeof e!="function")throw new TypeError(`batchScheduleFn must be a function: ${e}`);return e}function R0(t){const e=t&&t.cacheKeyFn;if(e===void 0)return n=>n;if(typeof e!="function")throw new TypeError(`cacheKeyFn must be a function: ${e}`);return e}function $0(t){if(!(!t||t.cache!==!1))return null;const n=t&&t.cacheMap;if(n===void 0)return new Map;if(n!==null){const r=["get","set","delete","clear"].filter(i=>n&&typeof n[i]!="function");if(r.length!==0)throw new TypeError("Custom cacheMap missing methods: "+r.join(", "))}return n}function F0(t){return t&&t.name?t.name:null}function kf(t){return typeof t=="object"&&t!==null&&"length"in t&&typeof t.length=="number"&&(t.length===0||t.length>0&&Object.prototype.hasOwnProperty.call(t,t.length-1))}function jo(t){const e=[];let n=0;if(t===0)return[0];for(;t>0;)e[n]=t&127,(t>>=7)&&(e[n]|=128),n+=1;return e}function V0(t){let e=0,n=0,s=0;for(;;){const r=t[s];if(s+=1,e|=(r&127)<<n,!(r&128))break;n+=7}return{value:e,length:s}}class K0{constructor(e){this.bytePosition=0,this.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength)}shift(e){return this.bytePosition+=e,this}read8(){const e=this.dataView.getUint8(this.bytePosition);return this.shift(1),e}read16(){const e=this.dataView.getUint16(this.bytePosition,!0);return this.shift(2),e}read32(){const e=this.dataView.getUint32(this.bytePosition,!0);return this.shift(4),e}read64(){const e=this.read32(),s=this.read32().toString(16)+e.toString(16).padStart(8,"0");return BigInt("0x"+s).toString(10)}read128(){const e=BigInt(this.read64()),s=BigInt(this.read64()).toString(16)+e.toString(16).padStart(16,"0");return BigInt("0x"+s).toString(10)}read256(){const e=BigInt(this.read128()),s=BigInt(this.read128()).toString(16)+e.toString(16).padStart(32,"0");return BigInt("0x"+s).toString(10)}readBytes(e){const n=this.bytePosition+this.dataView.byteOffset,s=new Uint8Array(this.dataView.buffer,n,e);return this.shift(e),s}readULEB(){const e=this.bytePosition+this.dataView.byteOffset,n=new Uint8Array(this.dataView.buffer,e),{value:s,length:r}=V0(n);return this.shift(r),s}readVec(e){const n=this.readULEB(),s=[];for(let r=0;r<n;r++)s.push(e(this,r,n));return s}}function W0(t,e){switch(e){case"base58":return Xo(t);case"base64":return xe(t);case"hex":return vs(t);default:throw new Error("Unsupported encoding, supported values are: base64, hex")}}function Df(t,e=["<",">"]){const[n,s]=e,r=[];let i="",o=0;for(let a=0;a<t.length;a++){const c=t[a];if(c===n&&o++,c===s&&o--,o===0&&c===","){r.push(i.trim()),i="";continue}i+=c}return r.push(i.trim()),r}class q0{constructor({initialSize:e=1024,maxSize:n=1/0,allocateSize:s=1024}={}){this.bytePosition=0,this.size=e,this.maxSize=n,this.allocateSize=s,this.dataView=new DataView(new ArrayBuffer(e))}ensureSizeOrGrow(e){const n=this.bytePosition+e;if(n>this.size){const s=Math.min(this.maxSize,this.size+this.allocateSize);if(n>s)throw new Error(`Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${n}`);this.size=s;const r=new ArrayBuffer(this.size);new Uint8Array(r).set(new Uint8Array(this.dataView.buffer)),this.dataView=new DataView(r)}}shift(e){return this.bytePosition+=e,this}write8(e){return this.ensureSizeOrGrow(1),this.dataView.setUint8(this.bytePosition,Number(e)),this.shift(1)}write16(e){return this.ensureSizeOrGrow(2),this.dataView.setUint16(this.bytePosition,Number(e),!0),this.shift(2)}write32(e){return this.ensureSizeOrGrow(4),this.dataView.setUint32(this.bytePosition,Number(e),!0),this.shift(4)}write64(e){return Ia(BigInt(e),8).forEach(n=>this.write8(n)),this}write128(e){return Ia(BigInt(e),16).forEach(n=>this.write8(n)),this}write256(e){return Ia(BigInt(e),32).forEach(n=>this.write8(n)),this}writeULEB(e){return jo(e).forEach(n=>this.write8(n)),this}writeVec(e,n){return this.writeULEB(e.length),Array.from(e).forEach((s,r)=>n(this,s,r,e.length)),this}*[Symbol.iterator](){for(let e=0;e<this.bytePosition;e++)yield this.dataView.getUint8(e);return this.toBytes()}toBytes(){return new Uint8Array(this.dataView.buffer.slice(0,this.bytePosition))}toString(e){return W0(this.toBytes(),e)}}function Ia(t,e){const n=new Uint8Array(e);let s=0;for(;t>0;)n[s]=Number(t%BigInt(256)),t=t/BigInt(256),s+=1;return n}var Uf=t=>{throw TypeError(t)},Bf=(t,e,n)=>e.has(t)||Uf("Cannot "+n),Jt=(t,e,n)=>(Bf(t,e,"read from private field"),n?n.call(t):e.get(t)),Co=(t,e,n)=>e.has(t)?Uf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ko=(t,e,n,s)=>(Bf(t,e,"write to private field"),e.set(t,n),n),ar,qr,oo,ss;const G0=class Lf{constructor(e){Co(this,ar),Co(this,qr),this.name=e.name,this.read=e.read,this.serializedSize=e.serializedSize??(()=>null),ko(this,ar,e.write),ko(this,qr,e.serialize??((n,s)=>{const r=new q0({initialSize:this.serializedSize(n)??void 0,...s});return Jt(this,ar).call(this,n,r),r.toBytes()})),this.validate=e.validate??(()=>{})}write(e,n){this.validate(e),Jt(this,ar).call(this,e,n)}serialize(e,n){return this.validate(e),new H0(this,Jt(this,qr).call(this,e,n))}parse(e){const n=new K0(e);return this.read(n)}fromHex(e){return this.parse(su(e))}fromBase58(e){return this.parse(mi(e))}fromBase64(e){return this.parse(we(e))}transform({name:e,input:n,output:s,validate:r}){return new Lf({name:e??this.name,read:i=>s?s(this.read(i)):this.read(i),write:(i,o)=>Jt(this,ar).call(this,n?n(i):i,o),serializedSize:i=>this.serializedSize(n?n(i):i),serialize:(i,o)=>Jt(this,qr).call(this,n?n(i):i,o),validate:i=>{r==null||r(i),this.validate(n?n(i):i)}})}};ar=new WeakMap;qr=new WeakMap;let An=G0;const zf=Symbol.for("@mysten/serialized-bcs");function ru(t){return!!t&&typeof t=="object"&&t[zf]===!0}class H0{constructor(e,n){Co(this,oo),Co(this,ss),ko(this,oo,e),ko(this,ss,n)}get[zf](){return!0}toBytes(){return Jt(this,ss)}toHex(){return vs(Jt(this,ss))}toBase64(){return xe(Jt(this,ss))}toBase58(){return Xo(Jt(this,ss))}parse(){return Jt(this,oo).parse(Jt(this,ss))}}oo=new WeakMap;ss=new WeakMap;function Do({size:t,...e}){return new An({...e,serializedSize:()=>t})}function xa({readMethod:t,writeMethod:e,...n}){return Do({...n,read:s=>s[t](),write:(s,r)=>r[e](s),validate:s=>{var r;if(s<0||s>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${s}. Expected value in range 0-${n.maxValue}`);(r=n.validate)==null||r.call(n,s)}})}function Ea({readMethod:t,writeMethod:e,...n}){return Do({...n,read:s=>s[t](),write:(s,r)=>r[e](BigInt(s)),validate:s=>{var i;const r=BigInt(s);if(r<0||r>n.maxValue)throw new TypeError(`Invalid ${n.name} value: ${r}. Expected value in range 0-${n.maxValue}`);(i=n.validate)==null||i.call(n,r)}})}function Y0({serialize:t,...e}){const n=new An({...e,serialize:t,write:(s,r)=>{for(const i of n.serialize(s).toBytes())r.write8(i)}});return n}function Q0({toBytes:t,fromBytes:e,...n}){return new An({...n,read:s=>{const r=s.readULEB(),i=s.readBytes(r);return e(i)},write:(s,r)=>{const i=t(s);r.writeULEB(i.length);for(let o=0;o<i.length;o++)r.write8(i[o])},serialize:s=>{const r=t(s),i=jo(r.length),o=new Uint8Array(i.length+r.length);return o.set(i,0),o.set(r,i.length),o},validate:s=>{var r;if(typeof s!="string")throw new TypeError(`Invalid ${n.name} value: ${s}. Expected string`);(r=n.validate)==null||r.call(n,s)}})}function Z0(t){let e=null;function n(){return e||(e=t()),e}return new An({name:"lazy",read:s=>n().read(s),serializedSize:s=>n().serializedSize(s),write:(s,r)=>n().write(s,r),serialize:(s,r)=>n().serialize(s,r).toBytes()})}class X0 extends An{constructor({name:e,fields:n,...s}){const r=Object.entries(n);super({name:e,serializedSize:i=>{let o=0;for(const[a,c]of r){const l=c.serializedSize(i[a]);if(l==null)return null;o+=l}return o},read:i=>{const o={};for(const[a,c]of r)o[a]=c.read(i);return o},write:(i,o)=>{for(const[a,c]of r)c.write(i[a],o)},...s,validate:i=>{var o;if((o=s==null?void 0:s.validate)==null||o.call(s,i),typeof i!="object"||i==null)throw new TypeError(`Expected object, found ${typeof i}`)}})}}class J0 extends An{constructor({fields:e,...n}){const s=Object.entries(e);super({read:r=>{const i=r.readULEB(),o=s[i];if(!o)throw new TypeError(`Unknown value ${i} for enum ${name}`);const[a,c]=o;return{[a]:(c==null?void 0:c.read(r))??!0,$kind:a}},write:(r,i)=>{const[o,a]=Object.entries(r).filter(([c])=>Object.hasOwn(e,c))[0];for(let c=0;c<s.length;c++){const[l,u]=s[c];if(l===o){i.writeULEB(c),u==null||u.write(a,i);return}}},...n,validate:r=>{var a;if((a=n==null?void 0:n.validate)==null||a.call(n,r),typeof r!="object"||r==null)throw new TypeError(`Expected object, found ${typeof r}`);const i=Object.keys(r).filter(c=>r[c]!==void 0&&Object.hasOwn(e,c));if(i.length!==1)throw new TypeError(`Expected object with one key, but found ${i.length} for type ${name}}`);const[o]=i;if(!Object.hasOwn(e,o))throw new TypeError(`Invalid enum variant ${o}`)}})}}class ey extends An{constructor({fields:e,name:n,...s}){super({name:n??`(${e.map(r=>r.name).join(", ")})`,serializedSize:r=>{let i=0;for(let o=0;o<e.length;o++){const a=e[o].serializedSize(r[o]);if(a==null)return null;i+=a}return i},read:r=>{const i=[];for(const o of e)i.push(o.read(r));return i},write:(r,i)=>{for(let o=0;o<e.length;o++)e[o].write(r[o],i)},...s,validate:r=>{var i;if((i=s==null?void 0:s.validate)==null||i.call(s,r),!Array.isArray(r))throw new TypeError(`Expected array, found ${typeof r}`);if(r.length!==e.length)throw new TypeError(`Expected array of length ${e.length}, found ${r.length}`)}})}}function ty(t,e,n){return new An({read:s=>{const r=new Array(t);for(let i=0;i<t;i++)r[i]=e.read(s);return r},write:(s,r)=>{for(const i of s)e.write(i,r)},...n,name:(n==null?void 0:n.name)??`${e.name}[${t}]`,validate:s=>{var r;if((r=n==null?void 0:n.validate)==null||r.call(n,s),!s||typeof s!="object"||!("length"in s))throw new TypeError(`Expected array, found ${typeof s}`);if(s.length!==t)throw new TypeError(`Expected array of length ${t}, found ${s.length}`)}})}function ny(t){return h.enum(`Option<${t.name}>`,{None:null,Some:t}).transform({input:e=>e==null?{None:!0}:{Some:e},output:e=>e.$kind==="Some"?e.Some:null})}function sy(t,e){return new An({read:n=>{const s=n.readULEB(),r=new Array(s);for(let i=0;i<s;i++)r[i]=t.read(n);return r},write:(n,s)=>{s.writeULEB(n.length);for(const r of n)t.write(r,s)},...e,name:(e==null?void 0:e.name)??`vector<${t.name}>`,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`)}})}function ry(t,e){return h.vector(h.tuple([t,e])).transform({name:`Map<${t.name}, ${e.name}>`,input:n=>[...n.entries()],output:n=>{const s=new Map;for(const[r,i]of n)s.set(r,i);return s}})}const h={u8(t){return xa({readMethod:"read8",writeMethod:"write8",size:1,maxValue:2**8-1,...t,name:(t==null?void 0:t.name)??"u8"})},u16(t){return xa({readMethod:"read16",writeMethod:"write16",size:2,maxValue:2**16-1,...t,name:(t==null?void 0:t.name)??"u16"})},u32(t){return xa({readMethod:"read32",writeMethod:"write32",size:4,maxValue:2**32-1,...t,name:(t==null?void 0:t.name)??"u32"})},u64(t){return Ea({readMethod:"read64",writeMethod:"write64",size:8,maxValue:2n**64n-1n,...t,name:(t==null?void 0:t.name)??"u64"})},u128(t){return Ea({readMethod:"read128",writeMethod:"write128",size:16,maxValue:2n**128n-1n,...t,name:(t==null?void 0:t.name)??"u128"})},u256(t){return Ea({readMethod:"read256",writeMethod:"write256",size:32,maxValue:2n**256n-1n,...t,name:(t==null?void 0:t.name)??"u256"})},bool(t){return Do({size:1,read:e=>e.read8()===1,write:(e,n)=>n.write8(e?1:0),...t,name:(t==null?void 0:t.name)??"bool",validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),typeof e!="boolean")throw new TypeError(`Expected boolean, found ${typeof e}`)}})},uleb128(t){return Y0({read:e=>e.readULEB(),serialize:e=>Uint8Array.from(jo(e)),...t,name:(t==null?void 0:t.name)??"uleb128"})},bytes(t,e){return Do({size:t,read:n=>n.readBytes(t),write:(n,s)=>{const r=new Uint8Array(n);for(let i=0;i<t;i++)s.write8(r[i]??0)},...e,name:(e==null?void 0:e.name)??`bytes[${t}]`,validate:n=>{var s;if((s=e==null?void 0:e.validate)==null||s.call(e,n),!n||typeof n!="object"||!("length"in n))throw new TypeError(`Expected array, found ${typeof n}`);if(n.length!==t)throw new TypeError(`Expected array of length ${t}, found ${n.length}`)}})},byteVector(t){return new An({read:e=>{const n=e.readULEB();return e.readBytes(n)},write:(e,n)=>{const s=new Uint8Array(e);n.writeULEB(s.length);for(let r=0;r<s.length;r++)n.write8(s[r]??0)},...t,name:(t==null?void 0:t.name)??"vector<u8>",serializedSize:e=>{const n="length"in e?e.length:null;return n==null?null:jo(n).length+n},validate:e=>{var n;if((n=t==null?void 0:t.validate)==null||n.call(t,e),!e||typeof e!="object"||!("length"in e))throw new TypeError(`Expected array, found ${typeof e}`)}})},string(t){return Q0({toBytes:e=>new TextEncoder().encode(e),fromBytes:e=>new TextDecoder().decode(e),...t,name:(t==null?void 0:t.name)??"string"})},fixedArray:ty,option:ny,vector:sy,tuple(t,e){return new ey({fields:t,...e})},struct(t,e,n){return new X0({name:t,fields:e,...n})},enum(t,e,n){return new J0({name:t,fields:e,...n})},map:ry,lazy(t){return Z0(t)}},Pf=/^(?!.*(^(?!@)|[-.@])($|[-.@]))(?:[a-z0-9-]{0,63}(?:\.[a-z0-9-]{0,63})*)?@[a-z0-9-]{0,63}$/i,Rf=/^(?!.*(^|[-.])($|[-.]))(?:[a-z0-9-]{0,63}\.)+sui$/i,iy=235;function oy(t){return t.length>iy?!1:t.includes("@")?Pf.test(t):Rf.test(t)}function ay(t,e="at"){const n=t.toLowerCase();let s;if(n.includes("@")){if(!Pf.test(n))throw new Error(`Invalid SuiNS name ${t}`);const[r,i]=n.split("@");s=[...r?r.split("."):[],i]}else{if(!Rf.test(n))throw new Error(`Invalid SuiNS name ${t}`);s=n.split(".").slice(0,-1)}return e==="dot"?`${s.join(".")}.sui`:`${s.slice(0,-1).join(".")}@${s[s.length-1]}`}const cy=/^([a-z0-9]+(?:-[a-z0-9]+)*)$/,uy=/^\d+$/,ly=64,$f="/",Ut=t=>{const e=t.split($f);if(e.length<2||e.length>3)return!1;const[n,s,r]=e;return r!==void 0&&!uy.test(r)||!oy(n)?!1:cy.test(s)&&s.length<ly},dy=t=>{const e=t.split(/::|<|>|,/);for(const n of e)if(n.includes($f)&&!Ut(n))return!1;return!0},fy=32;function xl(t){try{return mi(t).length===fy}catch{return!1}}const Cr=32;function en(t){return py(t)&&gy(t)===Cr}function $i(t){return en(t)}function hy(t){return t.includes("::")?Ws(t):t}function Ws(t){const[e,n]=t.split("::"),s=Ut(e),r=t.slice(e.length+n.length+4),i=r.includes("<")?r.slice(0,r.indexOf("<")):r,o=r.includes("<")?Df(r.slice(r.indexOf("<")+1,r.lastIndexOf(">"))).map(a=>hy(a.trim())):[];return{address:s?e:le(e),module:n,name:i,typeParams:o}}function Mr(t){const{address:e,module:n,name:s,typeParams:r}=typeof t=="string"?Ws(t):t,i=(r==null?void 0:r.length)>0?`<${r.map(o=>typeof o=="string"?o:Mr(o)).join(",")}>`:"";return`${e}::${n}::${s}${i}`}function le(t,e=!1){let n=t.toLowerCase();return!e&&n.startsWith("0x")&&(n=n.slice(2)),`0x${n.padStart(Cr*2,"0")}`}function Fn(t,e=!1){return le(t,e)}function py(t){return/^(0x|0X)?[a-fA-F0-9]+$/.test(t)&&t.length%2===0}function gy(t){return/^(0x|0X)/.test(t)?(t.length-2)/2:t.length/2}const by=/^vector<(.+)>$/,yy=/^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;class nn{static parseFromStr(e,n=!1){if(e==="address")return{address:null};if(e==="bool")return{bool:null};if(e==="u8")return{u8:null};if(e==="u16")return{u16:null};if(e==="u32")return{u32:null};if(e==="u64")return{u64:null};if(e==="u128")return{u128:null};if(e==="u256")return{u256:null};if(e==="signer")return{signer:null};const s=e.match(by);if(s)return{vector:nn.parseFromStr(s[1],n)};const r=e.match(yy);if(r)return{struct:{address:n?le(r[1]):r[1],module:r[2],name:r[3],typeParams:r[5]===void 0?[]:nn.parseStructTypeArgs(r[5],n)}};throw new Error(`Encountered unexpected token when parsing type args for ${e}`)}static parseStructTypeArgs(e,n=!1){return Df(e).map(s=>nn.parseFromStr(s,n))}static tagToString(e){if("bool"in e)return"bool";if("u8"in e)return"u8";if("u16"in e)return"u16";if("u32"in e)return"u32";if("u64"in e)return"u64";if("u128"in e)return"u128";if("u256"in e)return"u256";if("address"in e)return"address";if("signer"in e)return"signer";if("vector"in e)return`vector<${nn.tagToString(e.vector)}>`;if("struct"in e){const n=e.struct,s=n.typeParams.map(nn.tagToString).join(", ");return`${n.address}::${n.module}::${n.name}${s?`<${s}>`:""}`}throw new Error("Invalid TypeTag")}}function my(t){return h.u64({name:"unsafe_u64",...t}).transform({input:e=>e,output:e=>Number(e)})}function wy(t){return h.enum("Option",{None:null,Some:t})}const Ce=h.bytes(Cr).transform({validate:t=>{const e=typeof t=="string"?t:vs(t);if(!e||!en(le(e)))throw new Error(`Invalid Sui address ${e}`)},input:t=>typeof t=="string"?su(le(t)):t,output:t=>le(vs(t))}),on=h.vector(h.u8()).transform({name:"ObjectDigest",input:t=>mi(t),output:t=>Xo(new Uint8Array(t)),validate:t=>{if(mi(t).length!==32)throw new Error("ObjectDigest must be 32 bytes")}}),$t=h.struct("SuiObjectRef",{objectId:Ce,version:h.u64(),digest:on}),Ff=h.struct("SharedObjectRef",{objectId:Ce,initialSharedVersion:h.u64(),mutable:h.bool()}),Vf=h.enum("ObjectArg",{ImmOrOwnedObject:$t,SharedObject:Ff,Receiving:$t}),ks=h.enum("Owner",{AddressOwner:Ce,ObjectOwner:Ce,Shared:h.struct("Shared",{initialSharedVersion:h.u64()}),Immutable:null,ConsensusAddressOwner:h.struct("ConsensusAddressOwner",{owner:Ce,startVersion:h.u64()})}),Kf=h.enum("CallArg",{Pure:h.struct("Pure",{bytes:h.vector(h.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>xe(new Uint8Array(t))})}),Object:Vf}),iu=h.enum("TypeTag",{bool:null,u8:null,u64:null,u128:null,address:null,signer:null,vector:h.lazy(()=>iu),struct:h.lazy(()=>Qf),u16:null,u32:null,u256:null}),ou=iu.transform({input:t=>typeof t=="string"?nn.parseFromStr(t,!0):t,output:t=>nn.tagToString(t)}),yn=h.enum("Argument",{GasCoin:null,Input:h.u16(),Result:h.u16(),NestedResult:h.tuple([h.u16(),h.u16()])}),Wf=h.struct("ProgrammableMoveCall",{package:Ce,module:h.string(),function:h.string(),typeArguments:h.vector(ou),arguments:h.vector(yn)}),qf=h.enum("Command",{MoveCall:Wf,TransferObjects:h.struct("TransferObjects",{objects:h.vector(yn),address:yn}),SplitCoins:h.struct("SplitCoins",{coin:yn,amounts:h.vector(yn)}),MergeCoins:h.struct("MergeCoins",{destination:yn,sources:h.vector(yn)}),Publish:h.struct("Publish",{modules:h.vector(h.vector(h.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>xe(new Uint8Array(t))})),dependencies:h.vector(Ce)}),MakeMoveVec:h.struct("MakeMoveVec",{type:wy(ou).transform({input:t=>t===null?{None:!0}:{Some:t},output:t=>t.Some??null}),elements:h.vector(yn)}),Upgrade:h.struct("Upgrade",{modules:h.vector(h.vector(h.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>xe(new Uint8Array(t))})),dependencies:h.vector(Ce),package:Ce,ticket:yn})}),Gf=h.struct("ProgrammableTransaction",{inputs:h.vector(Kf),commands:h.vector(qf)}),Hf=h.enum("TransactionKind",{ProgrammableTransaction:Gf,ChangeEpoch:null,Genesis:null,ConsensusCommitPrologue:null}),Yf=h.enum("TransactionExpiration",{None:null,Epoch:my()}),Qf=h.struct("StructTag",{address:Ce,module:h.string(),name:h.string(),typeParams:h.vector(iu)}),Zf=h.struct("GasData",{payment:h.vector($t),owner:Ce,price:h.u64(),budget:h.u64()}),Xf=h.struct("TransactionDataV1",{kind:Hf,sender:Ce,gasData:Zf,expiration:Yf}),Jf=h.enum("TransactionData",{V1:Xf}),eh=h.enum("IntentScope",{TransactionData:null,TransactionEffects:null,CheckpointSummary:null,PersonalMessage:null}),th=h.enum("IntentVersion",{V0:null}),nh=h.enum("AppId",{Sui:null}),sh=h.struct("Intent",{scope:eh,version:th,appId:nh});function rh(t){return h.struct(`IntentMessage<${t.name}>`,{intent:sh,value:t})}const ih=h.enum("CompressedSignature",{ED25519:h.fixedArray(64,h.u8()),Secp256k1:h.fixedArray(64,h.u8()),Secp256r1:h.fixedArray(64,h.u8()),ZkLogin:h.vector(h.u8()),Passkey:h.vector(h.u8())}),oh=h.enum("PublicKey",{ED25519:h.fixedArray(32,h.u8()),Secp256k1:h.fixedArray(33,h.u8()),Secp256r1:h.fixedArray(33,h.u8()),ZkLogin:h.vector(h.u8()),Passkey:h.fixedArray(33,h.u8())}),ah=h.struct("MultiSigPkMap",{pubKey:oh,weight:h.u8()}),ch=h.struct("MultiSigPublicKey",{pk_map:h.vector(ah),threshold:h.u16()}),vy=h.struct("MultiSig",{sigs:h.vector(ih),bitmap:h.u16(),multisig_pk:ch}),Sy=h.vector(h.u8()).transform({input:t=>typeof t=="string"?we(t):t,output:t=>xe(new Uint8Array(t))}),uh=h.struct("SenderSignedTransaction",{intentMessage:rh(Jf),txSignatures:h.vector(Sy)}),My=h.vector(uh,{name:"SenderSignedData"}),lh=h.struct("PasskeyAuthenticator",{authenticatorData:h.vector(h.u8()),clientDataJson:h.string(),userSignature:h.vector(h.u8())}),Iy=h.enum("PackageUpgradeError",{UnableToFetchPackage:h.struct("UnableToFetchPackage",{packageId:Ce}),NotAPackage:h.struct("NotAPackage",{objectId:Ce}),IncompatibleUpgrade:null,DigestDoesNotMatch:h.struct("DigestDoesNotMatch",{digest:h.vector(h.u8())}),UnknownUpgradePolicy:h.struct("UnknownUpgradePolicy",{policy:h.u8()}),PackageIDDoesNotMatch:h.struct("PackageIDDoesNotMatch",{packageId:Ce,ticketId:Ce})}),xy=h.struct("ModuleId",{address:Ce,name:h.string()}),El=h.struct("MoveLocation",{module:xy,function:h.u16(),instruction:h.u16(),functionName:h.option(h.string())}),Ey=h.enum("CommandArgumentError",{TypeMismatch:null,InvalidBCSBytes:null,InvalidUsageOfPureArg:null,InvalidArgumentToPrivateEntryFunction:null,IndexOutOfBounds:h.struct("IndexOutOfBounds",{idx:h.u16()}),SecondaryIndexOutOfBounds:h.struct("SecondaryIndexOutOfBounds",{resultIdx:h.u16(),secondaryIdx:h.u16()}),InvalidResultArity:h.struct("InvalidResultArity",{resultIdx:h.u16()}),InvalidGasCoinUsage:null,InvalidValueUsage:null,InvalidObjectByValue:null,InvalidObjectByMutRef:null,SharedObjectOperationNotAllowed:null}),_y=h.enum("TypeArgumentError",{TypeNotFound:null,ConstraintNotSatisfied:null}),Ay=h.enum("ExecutionFailureStatus",{InsufficientGas:null,InvalidGasObject:null,InvariantViolation:null,FeatureNotYetSupported:null,MoveObjectTooBig:h.struct("MoveObjectTooBig",{objectSize:h.u64(),maxObjectSize:h.u64()}),MovePackageTooBig:h.struct("MovePackageTooBig",{objectSize:h.u64(),maxObjectSize:h.u64()}),CircularObjectOwnership:h.struct("CircularObjectOwnership",{object:Ce}),InsufficientCoinBalance:null,CoinBalanceOverflow:null,PublishErrorNonZeroAddress:null,SuiMoveVerificationError:null,MovePrimitiveRuntimeError:h.option(El),MoveAbort:h.tuple([El,h.u64()]),VMVerificationOrDeserializationError:null,VMInvariantViolation:null,FunctionNotFound:null,ArityMismatch:null,TypeArityMismatch:null,NonEntryFunctionInvoked:null,CommandArgumentError:h.struct("CommandArgumentError",{argIdx:h.u16(),kind:Ey}),TypeArgumentError:h.struct("TypeArgumentError",{argumentIdx:h.u16(),kind:_y}),UnusedValueWithoutDrop:h.struct("UnusedValueWithoutDrop",{resultIdx:h.u16(),secondaryIdx:h.u16()}),InvalidPublicFunctionReturnType:h.struct("InvalidPublicFunctionReturnType",{idx:h.u16()}),InvalidTransferObject:null,EffectsTooLarge:h.struct("EffectsTooLarge",{currentSize:h.u64(),maxSize:h.u64()}),PublishUpgradeMissingDependency:null,PublishUpgradeDependencyDowngrade:null,PackageUpgradeError:h.struct("PackageUpgradeError",{upgradeError:Iy}),WrittenObjectsTooLarge:h.struct("WrittenObjectsTooLarge",{currentSize:h.u64(),maxSize:h.u64()}),CertificateDenied:null,SuiMoveVerificationTimedout:null,SharedObjectOperationNotAllowed:null,InputObjectDeleted:null,ExecutionCancelledDueToSharedObjectCongestion:h.struct("ExecutionCancelledDueToSharedObjectCongestion",{congestedObjects:h.vector(Ce)}),AddressDeniedForCoin:h.struct("AddressDeniedForCoin",{address:Ce,coinType:h.string()}),CoinTypeGlobalPause:h.struct("CoinTypeGlobalPause",{coinType:h.string()}),ExecutionCancelledDueToRandomnessUnavailable:null}),dh=h.enum("ExecutionStatus",{Success:null,Failed:h.struct("ExecutionFailed",{error:Ay,command:h.option(h.u64())})}),fh=h.struct("GasCostSummary",{computationCost:h.u64(),storageCost:h.u64(),storageRebate:h.u64(),nonRefundableStorageFee:h.u64()}),Ny=h.struct("TransactionEffectsV1",{status:dh,executedEpoch:h.u64(),gasUsed:fh,modifiedAtVersions:h.vector(h.tuple([Ce,h.u64()])),sharedObjects:h.vector($t),transactionDigest:on,created:h.vector(h.tuple([$t,ks])),mutated:h.vector(h.tuple([$t,ks])),unwrapped:h.vector(h.tuple([$t,ks])),deleted:h.vector($t),unwrappedThenDeleted:h.vector($t),wrapped:h.vector($t),gasObject:h.tuple([$t,ks]),eventsDigest:h.option(on),dependencies:h.vector(on)}),au=h.tuple([h.u64(),on]),Ty=h.enum("ObjectIn",{NotExist:null,Exist:h.tuple([au,ks])}),Oy=h.enum("ObjectOut",{NotExist:null,ObjectWrite:h.tuple([on,ks]),PackageWrite:au}),jy=h.enum("IDOperation",{None:null,Created:null,Deleted:null}),Cy=h.struct("EffectsObjectChange",{inputState:Ty,outputState:Oy,idOperation:jy}),ky=h.enum("UnchangedSharedKind",{ReadOnlyRoot:au,MutateDeleted:h.u64(),ReadDeleted:h.u64(),Cancelled:h.u64(),PerEpochConfig:null}),Dy=h.struct("TransactionEffectsV2",{status:dh,executedEpoch:h.u64(),gasUsed:fh,transactionDigest:on,gasObjectIndex:h.option(h.u32()),eventsDigest:h.option(on),dependencies:h.vector(on),lamportVersion:h.u64(),changedObjects:h.vector(h.tuple([Ce,Cy])),unchangedSharedObjects:h.vector(h.tuple([Ce,ky])),auxDataDigest:h.option(on)}),Uy=h.enum("TransactionEffects",{V1:Ny,V2:Dy});function ri(t){switch(t){case"u8":return h.u8();case"u16":return h.u16();case"u32":return h.u32();case"u64":return h.u64();case"u128":return h.u128();case"u256":return h.u256();case"bool":return h.bool();case"string":return h.string();case"id":case"address":return Ce}const e=t.match(/^(vector|option)<(.+)>$/);if(e){const[n,s]=e.slice(1);return n==="vector"?h.vector(ri(s)):h.option(ri(s))}throw new Error(`Invalid Pure type name: ${t}`)}const Z={...h,U8:h.u8(),U16:h.u16(),U32:h.u32(),U64:h.u64(),U128:h.u128(),U256:h.u256(),ULEB128:h.uleb128(),Bool:h.bool(),String:h.string(),Address:Ce,AppId:nh,Argument:yn,CallArg:Kf,Command:qf,CompressedSignature:ih,GasData:Zf,Intent:sh,IntentMessage:rh,IntentScope:eh,IntentVersion:th,MultiSig:vy,MultiSigPkMap:ah,MultiSigPublicKey:ch,ObjectArg:Vf,ObjectDigest:on,Owner:ks,PasskeyAuthenticator:lh,ProgrammableMoveCall:Wf,ProgrammableTransaction:Gf,PublicKey:oh,SenderSignedData:My,SenderSignedTransaction:uh,SharedObjectRef:Ff,StructTag:Qf,SuiObjectRef:$t,TransactionData:Jf,TransactionDataV1:Xf,TransactionEffects:Uy,TransactionExpiration:Yf,TransactionKind:Hf,TypeTag:ou},hh=BigInt(1e9),By="0x1",ph="0x2";Fn("0x6");const Ly=`${ph}::sui::SUI`;Fn("0x5");const tr=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ti(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Wn(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function ut(t,...e){if(!Ti(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function cu(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");Wn(t.outputLen),Wn(t.blockLen)}function Ir(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function gh(t,e){ut(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function Uo(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Gt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function Fs(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function pn(t,e){return t<<32-e|t>>>e}function Fi(t,e){return t<<e|t>>>32-e>>>0}const bh=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function yh(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}const Dn=bh?t=>t:t=>yh(t);function zy(t){for(let e=0;e<t.length;e++)t[e]=yh(t[e]);return t}const nr=bh?t=>t:zy,mh=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Py=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Wt(t){if(ut(t),mh)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=Py[t[n]];return e}const On={_0:48,_9:57,A:65,F:70,a:97,f:102};function _l(t){if(t>=On._0&&t<=On._9)return t-On._0;if(t>=On.A&&t<=On.F)return t-(On.A-10);if(t>=On.a&&t<=On.f)return t-(On.a-10)}function xr(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);if(mh)return Uint8Array.fromHex(t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const s=new Uint8Array(n);for(let r=0,i=0;r<n;r++,i+=2){const o=_l(t.charCodeAt(i)),a=_l(t.charCodeAt(i+1));if(o===void 0||a===void 0){const c=t[i]+t[i+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+i)}s[r]=o*16+a}return s}function uu(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function ws(t){return typeof t=="string"&&(t=uu(t)),ut(t),t}function Al(t){return typeof t=="string"&&(t=uu(t)),ut(t),t}function Et(...t){let e=0;for(let s=0;s<t.length;s++){const r=t[s];ut(r),e+=r.length}const n=new Uint8Array(e);for(let s=0,r=0;s<t.length;s++){const i=t[s];n.set(i,r),r+=i.length}return n}function Ry(t,e){if(e!==void 0&&{}.toString.call(e)!=="[object Object]")throw new Error("options should be object or undefined");return Object.assign(t,e)}class lu{}function ea(t){const e=s=>t().update(ws(s)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function $y(t){const e=(s,r)=>t(r).update(ws(s)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=s=>t(s),e}function du(t=32){if(tr&&typeof tr.getRandomValues=="function")return tr.getRandomValues(new Uint8Array(t));if(tr&&typeof tr.randomBytes=="function")return Uint8Array.from(tr.randomBytes(t));throw new Error("crypto.getRandomValues must be defined")}const Fy=Uint8Array.from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9]);function Vy(t,e,n,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,s);const r=BigInt(32),i=BigInt(4294967295),o=Number(n>>r&i),a=Number(n&i),c=s?4:0,l=s?0:4;t.setUint32(e+c,o,s),t.setUint32(e+l,a,s)}function Ky(t,e,n){return t&e^~t&n}function Wy(t,e,n){return t&e^t&n^e&n}class fu extends lu{constructor(e,n,s,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=n,this.padOffset=s,this.isLE=r,this.buffer=new Uint8Array(e),this.view=Fs(this.buffer)}update(e){Ir(this),e=ws(e),ut(e);const{view:n,buffer:s,blockLen:r}=this,i=e.length;for(let o=0;o<i;){const a=Math.min(r-this.pos,i-o);if(a===r){const c=Fs(e);for(;r<=i-o;o+=r)this.process(c,o);continue}s.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===r&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Ir(this),gh(e,this),this.finished=!0;const{buffer:n,view:s,blockLen:r,isLE:i}=this;let{pos:o}=this;n[o++]=128,Gt(this.buffer.subarray(o)),this.padOffset>r-o&&(this.process(s,0),o=0);for(let d=o;d<r;d++)n[d]=0;Vy(s,r-8,BigInt(this.length*8),i),this.process(s,0);const a=Fs(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:s,length:r,finished:i,destroyed:o,pos:a}=this;return e.destroyed=o,e.finished=i,e.length=r,e.pos=a,r%n&&e.buffer.set(s),e}clone(){return this._cloneInto()}}const Qn=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),st=Uint32Array.from([3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]),rt=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Vi=BigInt(2**32-1),Nl=BigInt(32);function wh(t,e=!1){return e?{h:Number(t&Vi),l:Number(t>>Nl&Vi)}:{h:Number(t>>Nl&Vi)|0,l:Number(t&Vi)|0}}function qy(t,e=!1){const n=t.length;let s=new Uint32Array(n),r=new Uint32Array(n);for(let i=0;i<n;i++){const{h:o,l:a}=wh(t[i],e);[s[i],r[i]]=[o,a]}return[s,r]}const Tl=(t,e,n)=>t>>>n,Ol=(t,e,n)=>t<<32-n|e>>>n,cs=(t,e,n)=>t>>>n|e<<32-n,us=(t,e,n)=>t<<32-n|e>>>n,Gr=(t,e,n)=>t<<64-n|e>>>n-32,Hr=(t,e,n)=>t>>>n-32|e<<64-n,Gy=(t,e)=>e,Hy=(t,e)=>t;function Yt(t,e,n,s){const r=(e>>>0)+(s>>>0);return{h:t+n+(r/2**32|0)|0,l:r|0}}const hu=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),pu=(t,e,n,s)=>e+n+s+(t/2**32|0)|0,Yy=(t,e,n,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0),Qy=(t,e,n,s,r)=>e+n+s+r+(t/2**32|0)|0,Zy=(t,e,n,s,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0)+(r>>>0),Xy=(t,e,n,s,r,i)=>e+n+s+r+i+(t/2**32|0)|0,Ge=Uint32Array.from([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),$=new Uint32Array(32);function Zn(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=$[2*t],l=$[2*t+1],u=$[2*e],d=$[2*e+1],f=$[2*n],p=$[2*n+1],g=$[2*s],m=$[2*s+1],_=hu(c,u,o);l=pu(_,l,d,a),c=_|0,{Dh:m,Dl:g}={Dh:m^l,Dl:g^c},{Dh:m,Dl:g}={Dh:Gy(m,g),Dl:Hy(m)},{h:p,l:f}=Yt(p,f,m,g),{Bh:d,Bl:u}={Bh:d^p,Bl:u^f},{Bh:d,Bl:u}={Bh:cs(d,u,24),Bl:us(d,u,24)},$[2*t]=c,$[2*t+1]=l,$[2*e]=u,$[2*e+1]=d,$[2*n]=f,$[2*n+1]=p,$[2*s]=g,$[2*s+1]=m}function Xn(t,e,n,s,r,i){const o=r[i],a=r[i+1];let c=$[2*t],l=$[2*t+1],u=$[2*e],d=$[2*e+1],f=$[2*n],p=$[2*n+1],g=$[2*s],m=$[2*s+1],_=hu(c,u,o);l=pu(_,l,d,a),c=_|0,{Dh:m,Dl:g}={Dh:m^l,Dl:g^c},{Dh:m,Dl:g}={Dh:cs(m,g,16),Dl:us(m,g,16)},{h:p,l:f}=Yt(p,f,m,g),{Bh:d,Bl:u}={Bh:d^p,Bl:u^f},{Bh:d,Bl:u}={Bh:Gr(d,u,63),Bl:Hr(d,u,63)},$[2*t]=c,$[2*t+1]=l,$[2*e]=u,$[2*e+1]=d,$[2*n]=f,$[2*n+1]=p,$[2*s]=g,$[2*s+1]=m}function Jy(t,e={},n,s,r){if(Wn(n),t<0||t>n)throw new Error("outputLen bigger than keyLen");const{key:i,salt:o,personalization:a}=e;if(i!==void 0&&(i.length<1||i.length>n))throw new Error("key length must be undefined or 1.."+n);if(o!==void 0&&o.length!==s)throw new Error("salt must be undefined or "+s);if(a!==void 0&&a.length!==r)throw new Error("personalization must be undefined or "+r)}class em extends lu{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,this.length=0,this.pos=0,Wn(e),Wn(n),this.blockLen=e,this.outputLen=n,this.buffer=new Uint8Array(e),this.buffer32=Uo(this.buffer)}update(e){Ir(this),e=ws(e),ut(e);const{blockLen:n,buffer:s,buffer32:r}=this,i=e.length,o=e.byteOffset,a=e.buffer;for(let c=0;c<i;){this.pos===n&&(nr(r),this.compress(r,0,!1),nr(r),this.pos=0);const l=Math.min(n-this.pos,i-c),u=o+c;if(l===n&&!(u%4)&&c+l<i){const d=new Uint32Array(a,u,Math.floor((i-c)/4));nr(d);for(let f=0;c+n<i;f+=r.length,c+=n)this.length+=n,this.compress(d,f,!1);nr(d);continue}s.set(e.subarray(c,c+l),this.pos),this.pos+=l,this.length+=l,c+=l}return this}digestInto(e){Ir(this),gh(e,this);const{pos:n,buffer32:s}=this;this.finished=!0,Gt(this.buffer.subarray(n)),nr(s),this.compress(s,0,!0),nr(s);const r=Uo(e);this.get().forEach((i,o)=>r[o]=Dn(i))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){const{buffer:n,length:s,finished:r,destroyed:i,outputLen:o,pos:a}=this;return e||(e=new this.constructor({dkLen:o})),e.set(...this.get()),e.buffer.set(n),e.destroyed=i,e.finished=r,e.length=s,e.pos=a,e.outputLen=o,e}clone(){return this._cloneInto()}}class tm extends em{constructor(e={}){const n=e.dkLen===void 0?64:e.dkLen;super(128,n),this.v0l=Ge[0]|0,this.v0h=Ge[1]|0,this.v1l=Ge[2]|0,this.v1h=Ge[3]|0,this.v2l=Ge[4]|0,this.v2h=Ge[5]|0,this.v3l=Ge[6]|0,this.v3h=Ge[7]|0,this.v4l=Ge[8]|0,this.v4h=Ge[9]|0,this.v5l=Ge[10]|0,this.v5h=Ge[11]|0,this.v6l=Ge[12]|0,this.v6h=Ge[13]|0,this.v7l=Ge[14]|0,this.v7h=Ge[15]|0,Jy(n,e,64,16,16);let{key:s,personalization:r,salt:i}=e,o=0;if(s!==void 0&&(s=ws(s),o=s.length),this.v0l^=this.outputLen|o<<8|65536|1<<24,i!==void 0){i=ws(i);const a=Uo(i);this.v4l^=Dn(a[0]),this.v4h^=Dn(a[1]),this.v5l^=Dn(a[2]),this.v5h^=Dn(a[3])}if(r!==void 0){r=ws(r);const a=Uo(r);this.v6l^=Dn(a[0]),this.v6h^=Dn(a[1]),this.v7l^=Dn(a[2]),this.v7h^=Dn(a[3])}if(s!==void 0){const a=new Uint8Array(this.blockLen);a.set(s),this.update(a)}}get(){let{v0l:e,v0h:n,v1l:s,v1h:r,v2l:i,v2h:o,v3l:a,v3h:c,v4l:l,v4h:u,v5l:d,v5h:f,v6l:p,v6h:g,v7l:m,v7h:_}=this;return[e,n,s,r,i,o,a,c,l,u,d,f,p,g,m,_]}set(e,n,s,r,i,o,a,c,l,u,d,f,p,g,m,_){this.v0l=e|0,this.v0h=n|0,this.v1l=s|0,this.v1h=r|0,this.v2l=i|0,this.v2h=o|0,this.v3l=a|0,this.v3h=c|0,this.v4l=l|0,this.v4h=u|0,this.v5l=d|0,this.v5h=f|0,this.v6l=p|0,this.v6h=g|0,this.v7l=m|0,this.v7h=_|0}compress(e,n,s){this.get().forEach((c,l)=>$[l]=c),$.set(Ge,16);let{h:r,l:i}=wh(BigInt(this.length));$[24]=Ge[8]^i,$[25]=Ge[9]^r,s&&($[28]=~$[28],$[29]=~$[29]);let o=0;const a=Fy;for(let c=0;c<12;c++)Zn(0,4,8,12,e,n+2*a[o++]),Xn(0,4,8,12,e,n+2*a[o++]),Zn(1,5,9,13,e,n+2*a[o++]),Xn(1,5,9,13,e,n+2*a[o++]),Zn(2,6,10,14,e,n+2*a[o++]),Xn(2,6,10,14,e,n+2*a[o++]),Zn(3,7,11,15,e,n+2*a[o++]),Xn(3,7,11,15,e,n+2*a[o++]),Zn(0,5,10,15,e,n+2*a[o++]),Xn(0,5,10,15,e,n+2*a[o++]),Zn(1,6,11,12,e,n+2*a[o++]),Xn(1,6,11,12,e,n+2*a[o++]),Zn(2,7,8,13,e,n+2*a[o++]),Xn(2,7,8,13,e,n+2*a[o++]),Zn(3,4,9,14,e,n+2*a[o++]),Xn(3,4,9,14,e,n+2*a[o++]);this.v0l^=$[0]^$[16],this.v0h^=$[1]^$[17],this.v1l^=$[2]^$[18],this.v1h^=$[3]^$[19],this.v2l^=$[4]^$[20],this.v2h^=$[5]^$[21],this.v3l^=$[6]^$[22],this.v3h^=$[7]^$[23],this.v4l^=$[8]^$[24],this.v4h^=$[9]^$[25],this.v5l^=$[10]^$[26],this.v5h^=$[11]^$[27],this.v6l^=$[12]^$[28],this.v6h^=$[13]^$[29],this.v7l^=$[14]^$[30],this.v7h^=$[15]^$[31],Gt($)}destroy(){this.destroyed=!0,Gt(this.buffer32),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const nm=$y(t=>new tm(t)),Ss=nm;function vh(t,e,n){const s=Z.Address.serialize(t).toBytes(),r=Z.TypeTag.serialize(e).toBytes(),i=Z.u64().serialize(n.length).toBytes(),o=Ss.create({dkLen:32});return o.update(new Uint8Array([240])),o.update(s),o.update(i),o.update(n),o.update(r),`0x${vs(o.digest().slice(0,32))}`}const sm="object",rm="ID",im="ascii",om="String",am="string",cm="String",um="option",lm="Option";function dm(t){const e=typeof t.body=="object"&&"datatype"in t.body?t.body.datatype:null;return!!e&&le(e.package)===le("0x2")&&e.module==="tx_context"&&e.type==="TxContext"}function rc(t){if(typeof t=="string")switch(t){case"address":return Z.Address;case"bool":return Z.Bool;case"u8":return Z.U8;case"u16":return Z.U16;case"u32":return Z.U32;case"u64":return Z.U64;case"u128":return Z.U128;case"u256":return Z.U256;default:throw new Error(`Unknown type signature ${t}`)}if("vector"in t){if(t.vector==="u8")return Z.vector(Z.U8).transform({input:n=>typeof n=="string"?new TextEncoder().encode(n):n,output:n=>n});const e=rc(t.vector);return e?Z.vector(e):null}if("datatype"in t){const e=le(t.datatype.package);if(e===le(By)){if(t.datatype.module===im&&t.datatype.type===om||t.datatype.module===am&&t.datatype.type===cm)return Z.String;if(t.datatype.module===um&&t.datatype.type===lm){const n=rc(t.datatype.typeParameters[0]);return n?Z.vector(n):null}}if(e===le(ph)&&t.datatype.module===sm&&t.datatype.type===rm)return Z.Address}return null}function fm(t){return typeof t=="object"&&"Reference"in t?{ref:"&",body:ii(t.Reference)}:typeof t=="object"&&"MutableReference"in t?{ref:"&mut",body:ii(t.MutableReference)}:{ref:null,body:ii(t)}}function ii(t){if(typeof t=="string")switch(t){case"Address":return"address";case"Bool":return"bool";case"U8":return"u8";case"U16":return"u16";case"U32":return"u32";case"U64":return"u64";case"U128":return"u128";case"U256":return"u256";default:throw new Error(`Unexpected type ${t}`)}if("Vector"in t)return{vector:ii(t.Vector)};if("Struct"in t)return{datatype:{package:t.Struct.address,module:t.Struct.module,type:t.Struct.name,typeParameters:t.Struct.typeArguments.map(ii)}};if("TypeParameter"in t)return{typeParameter:t.TypeParameter};throw new Error(`Unexpected type ${JSON.stringify(t)}`)}function hm(t){return{$kind:"Pure",Pure:{bytes:t instanceof Uint8Array?xe(t):t.toBase64()}}}const _t={Pure:hm,ObjectRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"ImmOrOwnedObject",ImmOrOwnedObject:{digest:e,version:n,objectId:le(t)}}}},SharedObjectRef({objectId:t,mutable:e,initialSharedVersion:n}){return{$kind:"Object",Object:{$kind:"SharedObject",SharedObject:{mutable:e,initialSharedVersion:n,objectId:le(t)}}}},ReceivingRef({objectId:t,digest:e,version:n}){return{$kind:"Object",Object:{$kind:"Receiving",Receiving:{digest:e,version:n,objectId:le(t)}}}}};var jn;function pm(t){return{lang:(t==null?void 0:t.lang)??(jn==null?void 0:jn.lang),message:t==null?void 0:t.message,abortEarly:(t==null?void 0:t.abortEarly)??(jn==null?void 0:jn.abortEarly),abortPipeEarly:(t==null?void 0:t.abortPipeEarly)??(jn==null?void 0:jn.abortPipeEarly)}}var _a;function gm(t){return _a==null?void 0:_a.get(t)}var Aa;function bm(t){return Aa==null?void 0:Aa.get(t)}var Na;function ym(t,e){var n;return(n=Na==null?void 0:Na.get(t))==null?void 0:n.get(e)}function Sh(t){var n,s;const e=typeof t;return e==="string"?`"${t}"`:e==="number"||e==="bigint"||e==="boolean"?`${t}`:e==="object"||e==="function"?(t&&((s=(n=Object.getPrototypeOf(t))==null?void 0:n.constructor)==null?void 0:s.name))??"null":e}function Pt(t,e,n,s,r){const i=r&&"input"in r?r.input:n.value,o=(r==null?void 0:r.expected)??t.expects??null,a=(r==null?void 0:r.received)??Sh(i),c={kind:t.kind,type:t.type,input:i,expected:o,received:a,message:`Invalid ${e}: ${o?`Expected ${o} but r`:"R"}eceived ${a}`,requirement:t.requirement,path:r==null?void 0:r.path,issues:r==null?void 0:r.issues,lang:s.lang,abortEarly:s.abortEarly,abortPipeEarly:s.abortPipeEarly},l=t.kind==="schema",u=(r==null?void 0:r.message)??t.message??ym(t.reference,c.lang)??(l?bm(c.lang):null)??s.message??gm(c.lang);u&&(c.message=typeof u=="function"?u(c):u),l&&(n.typed=!1),n.issues?n.issues.push(c):n.issues=[c]}function mm(t,e){return Object.hasOwn(t,e)&&e!=="__proto__"&&e!=="prototype"&&e!=="constructor"}var wm=class extends Error{constructor(e){super(e[0].message);Js(this,"issues");this.name="ValiError",this.issues=e}};function Oi(t,e){return{kind:"validation",type:"check",reference:Oi,async:!1,expects:null,requirement:t,message:e,_run(n,s){return n.typed&&!this.requirement(n.value)&&Pt(this,"input",n,s),n}}}function Ve(t){return{kind:"validation",type:"integer",reference:Ve,async:!1,expects:null,requirement:Number.isInteger,message:t,_run(e,n){return e.typed&&!this.requirement(e.value)&&Pt(this,"integer",e,n),e}}}function ta(t){return{kind:"transformation",type:"transform",reference:ta,async:!1,operation:t,_run(e){return e.value=this.operation(e.value),e}}}function gu(t,e,n){return typeof t.default=="function"?t.default(e,n):t.default}function ic(t,e){return!t._run({typed:!1,value:e},{abortEarly:!0}).issues}function se(t,e){return{kind:"schema",type:"array",reference:se,expects:"Array",async:!1,item:t,message:e,_run(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<r.length;o++){const a=r[o],c=this.item._run({typed:!1,value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Pt(this,"type",n,s);return n}}}function bu(t){return{kind:"schema",type:"bigint",reference:bu,expects:"bigint",async:!1,message:t,_run(e,n){return typeof e.value=="bigint"?e.typed=!0:Pt(this,"type",e,n),e}}}function kr(t){return{kind:"schema",type:"boolean",reference:kr,expects:"boolean",async:!1,message:t,_run(e,n){return typeof e.value=="boolean"?e.typed=!0:Pt(this,"type",e,n),e}}}function wi(t){return{kind:"schema",type:"lazy",reference:wi,expects:"unknown",async:!1,getter:t,_run(e,n){return this.getter(e.value)._run(e,n)}}}function oe(t,e){return{kind:"schema",type:"literal",reference:oe,expects:Sh(t),async:!1,literal:t,message:e,_run(n,s){return n.value===this.literal?n.typed=!0:Pt(this,"type",n,s),n}}}function be(t,...e){const n={kind:"schema",type:"nullable",reference:be,expects:`${t.expects} | null`,async:!1,wrapped:t,_run(s,r){return s.value===null&&("default"in this&&(s.value=gu(this,s,r)),s.value===null)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function Er(t,...e){const n={kind:"schema",type:"nullish",reference:Er,expects:`${t.expects} | null | undefined`,async:!1,wrapped:t,_run(s,r){return(s.value===null||s.value===void 0)&&("default"in this&&(s.value=gu(this,s,r)),s.value===null||s.value===void 0)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function Le(t){return{kind:"schema",type:"number",reference:Le,expects:"number",async:!1,message:t,_run(e,n){return typeof e.value=="number"&&!isNaN(e.value)?e.typed=!0:Pt(this,"type",e,n),e}}}function P(t,e){return{kind:"schema",type:"object",reference:P,expects:"Object",async:!1,entries:t,message:e,_run(n,s){var i;const r=n.value;if(r&&typeof r=="object"){n.typed=!0,n.value={};for(const o in this.entries){const a=r[o],c=this.entries[o]._run({typed:!1,value:a},s);if(c.issues){const l={type:"object",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),(c.value!==void 0||o in r)&&(n.value[o]=c.value)}}else Pt(this,"type",n,s);return n}}}function Qe(t,...e){const n={kind:"schema",type:"optional",reference:Qe,expects:`${t.expects} | undefined`,async:!1,wrapped:t,_run(s,r){return s.value===void 0&&("default"in this&&(s.value=gu(this,s,r)),s.value===void 0)?(s.typed=!0,s):this.wrapped._run(s,r)}};return 0 in e&&(n.default=e[0]),n}function vi(t,e,n){return{kind:"schema",type:"record",reference:vi,expects:"Object",async:!1,key:t,value:e,message:n,_run(s,r){var o,a;const i=s.value;if(i&&typeof i=="object"){s.typed=!0,s.value={};for(const c in i)if(mm(i,c)){const l=i[c],u=this.key._run({typed:!1,value:c},r);if(u.issues){const f={type:"object",origin:"key",input:i,key:c,value:l};for(const p of u.issues)p.path=[f],(o=s.issues)==null||o.push(p);if(s.issues||(s.issues=u.issues),r.abortEarly){s.typed=!1;break}}const d=this.value._run({typed:!1,value:l},r);if(d.issues){const f={type:"object",origin:"value",input:i,key:c,value:l};for(const p of d.issues)p.path?p.path.unshift(f):p.path=[f],(a=s.issues)==null||a.push(p);if(s.issues||(s.issues=d.issues),r.abortEarly){s.typed=!1;break}}(!u.typed||!d.typed)&&(s.typed=!1),u.typed&&(s.value[u.value]=d.value)}}else Pt(this,"type",s,r);return s}}}function fe(t){return{kind:"schema",type:"string",reference:fe,expects:"string",async:!1,message:t,_run(e,n){return typeof e.value=="string"?e.typed=!0:Pt(this,"type",e,n),e}}}function yu(t,e){return{kind:"schema",type:"tuple",reference:yu,expects:"Array",async:!1,items:t,message:e,_run(n,s){var i;const r=n.value;if(Array.isArray(r)){n.typed=!0,n.value=[];for(let o=0;o<this.items.length;o++){const a=r[o],c=this.items[o]._run({typed:!1,value:a},s);if(c.issues){const l={type:"array",origin:"value",input:r,key:o,value:a};for(const u of c.issues)u.path?u.path.unshift(l):u.path=[l],(i=n.issues)==null||i.push(u);if(n.issues||(n.issues=c.issues),s.abortEarly){n.typed=!1;break}}c.typed||(n.typed=!1),n.value.push(c.value)}}else Pt(this,"type",n,s);return n}}}function jl(t){let e;if(t)for(const n of t)e?e.push(...n.issues):e=n.issues;return e}function nt(t,e){return{kind:"schema",type:"union",reference:nt,expects:[...new Set(t.map(n=>n.expects))].join(" | ")||"never",async:!1,options:t,message:e,_run(n,s){let r,i,o;for(const a of this.options){const c=a._run({typed:!1,value:n.value},s);if(c.typed)if(c.issues)i?i.push(c):i=[c];else{r=c;break}else o?o.push(c):o=[c]}if(r)return r;if(i){if(i.length===1)return i[0];Pt(this,"type",n,s,{issues:jl(i)}),n.typed=!0}else{if((o==null?void 0:o.length)===1)return o[0];Pt(this,"type",n,s,{issues:jl(o)})}return n}}}function qs(){return{kind:"schema",type:"unknown",reference:qs,expects:"unknown",async:!1,_run(t){return t.typed=!0,t}}}function $e(t,e,n){const s=t._run({typed:!1,value:e},pm(n));if(s.issues)throw new wm(s.issues);return s.value}function Ie(...t){return{...t[0],pipe:t,_run(e,n){for(let s=0;s<t.length;s++){if(e.issues&&(t[s].kind==="schema"||t[s].kind==="transformation")){e.typed=!1;break}(!e.issues||!n.abortEarly&&!n.abortPipeEarly)&&(e=t[s]._run(e,n))}return e}}}function Xs(t){const e=Object.entries(t).map(([n,s])=>P({[n]:s}));return Ie(nt(e),ta(n=>({...n,$kind:Object.keys(n)[0]})))}const Dr=Ie(fe(),ta(t=>le(t)),Oi(en)),zt=Dr,Gs=fe(),Nt=Ie(nt([fe(),Ie(Le(),Ve())]),Oi(t=>{try{return BigInt(t),BigInt(t)>=0&&BigInt(t)<=18446744073709551615n}catch{return!1}},"Invalid u64")),Ms=P({objectId:Dr,version:Nt,digest:fe()}),Ue=Ie(nt([P({GasCoin:oe(!0)}),P({Input:Ie(Le(),Ve()),type:Qe(oe("pure"))}),P({Input:Ie(Le(),Ve()),type:Qe(oe("object"))}),P({Result:Ie(Le(),Ve())}),P({NestedResult:yu([Ie(Le(),Ve()),Ie(Le(),Ve())])})]),ta(t=>({...t,$kind:Object.keys(t)[0]}))),vm=P({budget:be(Nt),price:be(Nt),owner:be(Dr),payment:be(se(Ms))}),oc=nt([oe("address"),oe("bool"),oe("u8"),oe("u16"),oe("u32"),oe("u64"),oe("u128"),oe("u256"),P({vector:wi(()=>oc)}),P({datatype:P({package:fe(),module:fe(),type:fe(),typeParameters:se(wi(()=>oc))})}),P({typeParameter:Ie(Le(),Ve())})]),Sm=P({ref:be(nt([oe("&"),oe("&mut")])),body:oc}),Mm=P({package:zt,module:fe(),function:fe(),typeArguments:se(fe()),arguments:se(Ue),_argumentTypes:Qe(be(se(Sm)))}),Im=P({name:fe(),inputs:vi(fe(),nt([Ue,se(Ue)])),data:vi(fe(),qs())}),xm=Xs({MoveCall:Mm,TransferObjects:P({objects:se(Ue),address:Ue}),SplitCoins:P({coin:Ue,amounts:se(Ue)}),MergeCoins:P({destination:Ue,sources:se(Ue)}),Publish:P({modules:se(Gs),dependencies:se(zt)}),MakeMoveVec:P({type:be(fe()),elements:se(Ue)}),Upgrade:P({modules:se(Gs),dependencies:se(zt),package:zt,ticket:Ue}),$Intent:Im}),Mh=Xs({ImmOrOwnedObject:Ms,SharedObject:P({objectId:zt,initialSharedVersion:Nt,mutable:kr()}),Receiving:Ms}),Em=Xs({Object:Mh,Pure:P({bytes:Gs}),UnresolvedPure:P({value:qs()}),UnresolvedObject:P({objectId:zt,version:Qe(be(Nt)),digest:Qe(be(fe())),initialSharedVersion:Qe(be(Nt)),mutable:Qe(be(kr()))})}),Cl=Xs({Object:Mh,Pure:P({bytes:Gs})}),Ih=Xs({None:oe(!0),Epoch:Nt}),ao=P({version:oe(2),sender:Er(Dr),expiration:Er(Ih),gasData:vm,inputs:se(Em),commands:se(xm)}),Bt={MoveCall(t){const[e,n="",s=""]="target"in t?t.target.split("::"):[t.package,t.module,t.function];return{$kind:"MoveCall",MoveCall:{package:e,module:n,function:s,typeArguments:t.typeArguments??[],arguments:t.arguments??[]}}},TransferObjects(t,e){return{$kind:"TransferObjects",TransferObjects:{objects:t.map(n=>$e(Ue,n)),address:$e(Ue,e)}}},SplitCoins(t,e){return{$kind:"SplitCoins",SplitCoins:{coin:$e(Ue,t),amounts:e.map(n=>$e(Ue,n))}}},MergeCoins(t,e){return{$kind:"MergeCoins",MergeCoins:{destination:$e(Ue,t),sources:e.map(n=>$e(Ue,n))}}},Publish({modules:t,dependencies:e}){return{$kind:"Publish",Publish:{modules:t.map(n=>typeof n=="string"?n:xe(new Uint8Array(n))),dependencies:e.map(n=>Fn(n))}}},Upgrade({modules:t,dependencies:e,package:n,ticket:s}){return{$kind:"Upgrade",Upgrade:{modules:t.map(r=>typeof r=="string"?r:xe(new Uint8Array(r))),dependencies:e.map(r=>Fn(r)),package:n,ticket:$e(Ue,s)}}},MakeMoveVec({type:t,elements:e}){return{$kind:"MakeMoveVec",MakeMoveVec:{type:t??null,elements:e.map(n=>$e(Ue,n))}}},Intent({name:t,inputs:e={},data:n={}}){return{$kind:"$Intent",$Intent:{name:t,inputs:Object.fromEntries(Object.entries(e).map(([s,r])=>[s,Array.isArray(r)?r.map(i=>$e(Ue,i)):$e(Ue,r)])),data:n}}}},ac=P({digest:fe(),objectId:fe(),version:nt([Ie(Le(),Ve()),fe(),bu()])}),_m=Xs({ImmOrOwned:ac,Shared:P({objectId:zt,initialSharedVersion:Nt,mutable:kr()}),Receiving:ac}),kl=Xs({Object:_m,Pure:se(Ie(Le(),Ve()))}),xh=nt([P({kind:oe("Input"),index:Ie(Le(),Ve()),value:qs(),type:Qe(oe("object"))}),P({kind:oe("Input"),index:Ie(Le(),Ve()),value:qs(),type:oe("pure")})]),Am=nt([P({Epoch:Ie(Le(),Ve())}),P({None:be(oe(!0))})]),Dl=Ie(nt([Le(),fe(),bu()]),Oi(t=>{if(!["string","number","bigint"].includes(typeof t))return!1;try{return BigInt(t),!0}catch{return!1}})),mu=nt([P({bool:be(oe(!0))}),P({u8:be(oe(!0))}),P({u64:be(oe(!0))}),P({u128:be(oe(!0))}),P({address:be(oe(!0))}),P({signer:be(oe(!0))}),P({vector:wi(()=>mu)}),P({struct:wi(()=>Nm)}),P({u16:be(oe(!0))}),P({u32:be(oe(!0))}),P({u256:be(oe(!0))})]),Nm=P({address:fe(),module:fe(),name:fe(),typeParams:se(mu)}),Tm=P({budget:Qe(Dl),price:Qe(Dl),payment:Qe(se(ac)),owner:Qe(fe())}),Om=[xh,P({kind:oe("GasCoin")}),P({kind:oe("Result"),index:Ie(Le(),Ve())}),P({kind:oe("NestedResult"),index:Ie(Le(),Ve()),resultIndex:Ie(Le(),Ve())})],qn=nt([...Om]),jm=P({kind:oe("MoveCall"),target:Ie(fe(),Oi(t=>t.split("::").length===3)),typeArguments:se(fe()),arguments:se(qn)}),Cm=P({kind:oe("TransferObjects"),objects:se(qn),address:qn}),km=P({kind:oe("SplitCoins"),coin:qn,amounts:se(qn)}),Dm=P({kind:oe("MergeCoins"),destination:qn,sources:se(qn)}),Um=P({kind:oe("MakeMoveVec"),type:nt([P({Some:mu}),P({None:be(oe(!0))})]),objects:se(qn)}),Bm=P({kind:oe("Publish"),modules:se(se(Ie(Le(),Ve()))),dependencies:se(fe())}),Lm=P({kind:oe("Upgrade"),modules:se(se(Ie(Le(),Ve()))),dependencies:se(fe()),packageId:fe(),ticket:qn}),zm=[jm,Cm,km,Dm,Bm,Lm,Um],Pm=nt([...zm]);P({version:oe(1),sender:Qe(fe()),expiration:Er(Am),gasConfig:Tm,inputs:se(xh),transactions:se(Pm)});function Ul(t){var n;const e=t.inputs.map((s,r)=>{if(s.Object)return{kind:"Input",index:r,value:{Object:s.Object.ImmOrOwnedObject?{ImmOrOwned:s.Object.ImmOrOwnedObject}:s.Object.Receiving?{Receiving:{digest:s.Object.Receiving.digest,version:s.Object.Receiving.version,objectId:s.Object.Receiving.objectId}}:{Shared:{mutable:s.Object.SharedObject.mutable,initialSharedVersion:s.Object.SharedObject.initialSharedVersion,objectId:s.Object.SharedObject.objectId}}},type:"object"};if(s.Pure)return{kind:"Input",index:r,value:{Pure:Array.from(we(s.Pure.bytes))},type:"pure"};if(s.UnresolvedPure)return{kind:"Input",type:"pure",index:r,value:s.UnresolvedPure.value};if(s.UnresolvedObject)return{kind:"Input",type:"object",index:r,value:s.UnresolvedObject.objectId};throw new Error("Invalid input")});return{version:1,sender:t.sender??void 0,expiration:((n=t.expiration)==null?void 0:n.$kind)==="Epoch"?{Epoch:Number(t.expiration.Epoch)}:t.expiration?{None:!0}:null,gasConfig:{owner:t.gasData.owner??void 0,budget:t.gasData.budget??void 0,price:t.gasData.price??void 0,payment:t.gasData.payment??void 0},inputs:e,transactions:t.commands.map(s=>{if(s.MakeMoveVec)return{kind:"MakeMoveVec",type:s.MakeMoveVec.type===null?{None:!0}:{Some:nn.parseFromStr(s.MakeMoveVec.type)},objects:s.MakeMoveVec.elements.map(r=>Cn(r,e))};if(s.MergeCoins)return{kind:"MergeCoins",destination:Cn(s.MergeCoins.destination,e),sources:s.MergeCoins.sources.map(r=>Cn(r,e))};if(s.MoveCall)return{kind:"MoveCall",target:`${s.MoveCall.package}::${s.MoveCall.module}::${s.MoveCall.function}`,typeArguments:s.MoveCall.typeArguments,arguments:s.MoveCall.arguments.map(r=>Cn(r,e))};if(s.Publish)return{kind:"Publish",modules:s.Publish.modules.map(r=>Array.from(we(r))),dependencies:s.Publish.dependencies};if(s.SplitCoins)return{kind:"SplitCoins",coin:Cn(s.SplitCoins.coin,e),amounts:s.SplitCoins.amounts.map(r=>Cn(r,e))};if(s.TransferObjects)return{kind:"TransferObjects",objects:s.TransferObjects.objects.map(r=>Cn(r,e)),address:Cn(s.TransferObjects.address,e)};if(s.Upgrade)return{kind:"Upgrade",modules:s.Upgrade.modules.map(r=>Array.from(we(r))),dependencies:s.Upgrade.dependencies,packageId:s.Upgrade.package,ticket:Cn(s.Upgrade.ticket,e)};throw new Error(`Unknown transaction ${Object.keys(s)}`)})}}function Cn(t,e){if(t.$kind==="GasCoin")return{kind:"GasCoin"};if(t.$kind==="Result")return{kind:"Result",index:t.Result};if(t.$kind==="NestedResult")return{kind:"NestedResult",index:t.NestedResult[0],resultIndex:t.NestedResult[1]};if(t.$kind==="Input")return e[t.Input];throw new Error(`Invalid argument ${Object.keys(t)}`)}function Rm(t){var e,n,s;return $e(ao,{version:2,sender:t.sender??null,expiration:t.expiration?"Epoch"in t.expiration?{Epoch:t.expiration.Epoch}:{None:!0}:null,gasData:{owner:t.gasConfig.owner??null,budget:((e=t.gasConfig.budget)==null?void 0:e.toString())??null,price:((n=t.gasConfig.price)==null?void 0:n.toString())??null,payment:((s=t.gasConfig.payment)==null?void 0:s.map(r=>({digest:r.digest,objectId:r.objectId,version:r.version.toString()})))??null},inputs:t.inputs.map(r=>{if(r.kind==="Input"){if(ic(kl,r.value)){const i=$e(kl,r.value);if(i.Object){if(i.Object.ImmOrOwned)return{Object:{ImmOrOwnedObject:{objectId:i.Object.ImmOrOwned.objectId,version:String(i.Object.ImmOrOwned.version),digest:i.Object.ImmOrOwned.digest}}};if(i.Object.Shared)return{Object:{SharedObject:{mutable:i.Object.Shared.mutable??null,initialSharedVersion:i.Object.Shared.initialSharedVersion,objectId:i.Object.Shared.objectId}}};if(i.Object.Receiving)return{Object:{Receiving:{digest:i.Object.Receiving.digest,version:String(i.Object.Receiving.version),objectId:i.Object.Receiving.objectId}}};throw new Error("Invalid object input")}return{Pure:{bytes:xe(new Uint8Array(i.Pure))}}}return r.type==="object"?{UnresolvedObject:{objectId:r.value}}:{UnresolvedPure:{value:r.value}}}throw new Error("Invalid input")}),commands:t.transactions.map(r=>{switch(r.kind){case"MakeMoveVec":return{MakeMoveVec:{type:"Some"in r.type?nn.tagToString(r.type.Some):null,elements:r.objects.map(i=>kn(i))}};case"MergeCoins":return{MergeCoins:{destination:kn(r.destination),sources:r.sources.map(i=>kn(i))}};case"MoveCall":{const[i,o,a]=r.target.split("::");return{MoveCall:{package:i,module:o,function:a,typeArguments:r.typeArguments,arguments:r.arguments.map(c=>kn(c))}}}case"Publish":return{Publish:{modules:r.modules.map(i=>xe(Uint8Array.from(i))),dependencies:r.dependencies}};case"SplitCoins":return{SplitCoins:{coin:kn(r.coin),amounts:r.amounts.map(i=>kn(i))}};case"TransferObjects":return{TransferObjects:{objects:r.objects.map(i=>kn(i)),address:kn(r.address)}};case"Upgrade":return{Upgrade:{modules:r.modules.map(i=>xe(Uint8Array.from(i))),dependencies:r.dependencies,package:r.packageId,ticket:kn(r.ticket)}}}throw new Error(`Unknown transaction ${Object.keys(r)}`)})})}function kn(t){switch(t.kind){case"GasCoin":return{GasCoin:!0};case"Result":return{Result:t.index};case"NestedResult":return{NestedResult:[t.index,t.resultIndex]};case"Input":return{Input:t.index}}}function ji(t){return nt(Object.entries(t).map(([e,n])=>P({[e]:n})))}const Xt=ji({GasCoin:oe(!0),Input:Ie(Le(),Ve()),Result:Ie(Le(),Ve()),NestedResult:yu([Ie(Le(),Ve()),Ie(Le(),Ve())])}),$m=P({budget:be(Nt),price:be(Nt),owner:be(Dr),payment:be(se(Ms))}),Fm=P({package:zt,module:fe(),function:fe(),typeArguments:se(fe()),arguments:se(Xt)}),Vm=P({name:fe(),inputs:vi(fe(),nt([Xt,se(Xt)])),data:vi(fe(),qs())}),Km=ji({MoveCall:Fm,TransferObjects:P({objects:se(Xt),address:Xt}),SplitCoins:P({coin:Xt,amounts:se(Xt)}),MergeCoins:P({destination:Xt,sources:se(Xt)}),Publish:P({modules:se(Gs),dependencies:se(zt)}),MakeMoveVec:P({type:be(fe()),elements:se(Xt)}),Upgrade:P({modules:se(Gs),dependencies:se(zt),package:zt,ticket:Xt}),$Intent:Vm}),Wm=ji({ImmOrOwnedObject:Ms,SharedObject:P({objectId:zt,initialSharedVersion:Nt,mutable:kr()}),Receiving:Ms}),qm=ji({Object:Wm,Pure:P({bytes:Gs}),UnresolvedPure:P({value:qs()}),UnresolvedObject:P({objectId:zt,version:Qe(be(Nt)),digest:Qe(be(fe())),initialSharedVersion:Qe(be(Nt)),mutable:Qe(be(kr()))})}),Gm=ji({None:oe(!0),Epoch:Nt}),Hm=P({version:oe(2),sender:Er(Dr),expiration:Er(Gm),gasData:$m,inputs:se(qm),commands:se(Km),digest:Qe(be(fe()))}),Ym=50,Qm=1000n,Zm=5e10;function Eh(t){return async function(n,s,r){return await nw(n,t),await tw(n,t),s.onlyTransactionKind||(await Xm(n,t),await Jm(n,t),await ew(n,t)),await r()}}async function Xm(t,e){t.gasConfig.price||(t.gasConfig.price=String(await e.getReferenceGasPrice()))}async function Jm(t,e){if(t.gasConfig.budget)return;const n=await e.dryRunTransactionBlock({transactionBlock:t.build({overrides:{gasData:{budget:String(Zm),payment:[]}}})});if(n.effects.status.status!=="success")throw new Error(`Dry run failed, could not automatically determine a budget: ${n.effects.status.error}`,{cause:n});const s=Qm*BigInt(t.gasConfig.price||1n),r=BigInt(n.effects.gasUsed.computationCost)+s,i=r+BigInt(n.effects.gasUsed.storageCost)-BigInt(n.effects.gasUsed.storageRebate);t.gasConfig.budget=String(i>r?i:r)}async function ew(t,e){if(!t.gasConfig.payment){const s=(await e.getCoins({owner:t.gasConfig.owner||t.sender,coinType:Ly})).data.filter(r=>!t.inputs.find(o=>{var a;return(a=o.Object)!=null&&a.ImmOrOwnedObject?r.coinObjectId===o.Object.ImmOrOwnedObject.objectId:!1})).map(r=>({objectId:r.coinObjectId,digest:r.digest,version:r.version}));if(!s.length)throw new Error("No valid gas coins found for the transaction.");t.gasConfig.payment=s.map(r=>$e(Ms,r))}}async function tw(t,e){const n=t.inputs.filter(u=>{var d;return u.UnresolvedObject&&!(u.UnresolvedObject.version||(d=u.UnresolvedObject)!=null&&d.initialSharedVersion)}),s=[...new Set(n.map(u=>Fn(u.UnresolvedObject.objectId)))],r=s.length?Jo(s,Ym):[],i=(await Promise.all(r.map(u=>e.multiGetObjects({ids:u,options:{showOwner:!0}})))).flat(),o=new Map(s.map((u,d)=>[u,i[d]])),a=Array.from(o).filter(([u,d])=>d.error).map(([u,d])=>JSON.stringify(d.error));if(a.length)throw new Error(`The following input objects are invalid: ${a.join(", ")}`);const c=i.map(u=>{if(u.error||!u.data)throw new Error(`Failed to fetch object: ${u.error}`);const d=u.data.owner,f=d&&typeof d=="object"?"Shared"in d?d.Shared.initial_shared_version:"ConsensusAddressOwner"in d?d.ConsensusAddressOwner.start_version:null:null;return{objectId:u.data.objectId,digest:u.data.digest,version:u.data.version,initialSharedVersion:f}}),l=new Map(s.map((u,d)=>[u,c[d]]));for(const[u,d]of t.inputs.entries()){if(!d.UnresolvedObject)continue;let f;const p=le(d.UnresolvedObject.objectId),g=l.get(p);d.UnresolvedObject.initialSharedVersion??(g==null?void 0:g.initialSharedVersion)?f=_t.SharedObjectRef({objectId:p,initialSharedVersion:d.UnresolvedObject.initialSharedVersion||(g==null?void 0:g.initialSharedVersion),mutable:d.UnresolvedObject.mutable||sw(t,u)}):rw(t,u)&&(f=_t.ReceivingRef({objectId:p,digest:d.UnresolvedObject.digest??(g==null?void 0:g.digest),version:d.UnresolvedObject.version??(g==null?void 0:g.version)})),t.inputs[t.inputs.indexOf(d)]=f??_t.ObjectRef({objectId:p,digest:d.UnresolvedObject.digest??(g==null?void 0:g.digest),version:d.UnresolvedObject.version??(g==null?void 0:g.version)})}}async function nw(t,e){const{inputs:n,commands:s}=t,r=[],i=new Set;s.forEach(a=>{if(a.MoveCall){if(a.MoveCall._argumentTypes)return;if(a.MoveCall.arguments.map(u=>u.$kind==="Input"?t.inputs[u.Input]:null).some(u=>(u==null?void 0:u.UnresolvedPure)||(u==null?void 0:u.UnresolvedObject)&&typeof(u==null?void 0:u.UnresolvedObject.mutable)!="boolean")){const u=`${a.MoveCall.package}::${a.MoveCall.module}::${a.MoveCall.function}`;i.add(u),r.push(a.MoveCall)}}});const o=new Map;i.size>0&&await Promise.all([...i].map(async a=>{const[c,l,u]=a.split("::"),d=await e.getNormalizedMoveFunction({package:c,module:l,function:u});o.set(a,d.parameters.map(f=>fm(f)))})),r.length&&await Promise.all(r.map(async a=>{const c=o.get(`${a.package}::${a.module}::${a.function}`);if(!c)return;const u=c.length>0&&dm(c.at(-1))?c.slice(0,c.length-1):c;a._argumentTypes=u})),s.forEach(a=>{if(!a.MoveCall)return;const c=a.MoveCall,l=`${c.package}::${c.module}::${c.function}`,u=c._argumentTypes;if(u){if(u.length!==a.MoveCall.arguments.length)throw new Error(`Incorrect number of arguments for ${l}`);u.forEach((d,f)=>{var D,v;const p=c.arguments[f];if(p.$kind!=="Input")return;const g=n[p.Input];if(!g.UnresolvedPure&&!g.UnresolvedObject)return;const m=((D=g.UnresolvedPure)==null?void 0:D.value)??((v=g.UnresolvedObject)==null?void 0:v.objectId),_=rc(d.body);if(_){p.type="pure",n[n.indexOf(g)]=_t.Pure(_.serialize(m));return}if(typeof m!="string")throw new Error(`Expect the argument to be an object id string, got ${JSON.stringify(m,null,2)}`);p.type="object";const w=g.UnresolvedPure?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:m}}:g;n[p.Input]=w})}})}function sw(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=r.MoveCall._argumentTypes[i].ref!=="&"||n}(r.$kind==="MakeMoveVec"||r.$kind==="MergeCoins"||r.$kind==="SplitCoins"||r.$kind==="TransferObjects")&&(n=!0)}),n}function rw(t,e){let n=!1;return t.getInputUses(e,(s,r)=>{if(r.MoveCall&&r.MoveCall._argumentTypes){const i=r.MoveCall.arguments.indexOf(s);n=iw(r.MoveCall._argumentTypes[i])||n}}),n}function iw(t){return typeof t.body!="object"||!("datatype"in t.body)?!1:t.body.datatype.package==="0x2"&&t.body.datatype.module==="transfer"&&t.body.datatype.type==="Receiving"}function _h(t,e){return!!(t.inputs.some(n=>n.UnresolvedObject||n.UnresolvedPure)||!e.onlyTransactionKind&&(!t.gasConfig.price||!t.gasConfig.budget||!t.gasConfig.payment))}async function ow(t,e,n){var i;if(cw(t),!_h(t,e))return await Bl(t),n();const s=aw(e);return(((i=s.core)==null?void 0:i.resolveTransactionPlugin())??Eh(s))(t,e,async()=>{await Bl(t),await n()})}function Bl(t){t.inputs.forEach((e,n)=>{if(e.$kind!=="Object"&&e.$kind!=="Pure")throw new Error(`Input at index ${n} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(e)}`)})}function aw(t){if(!t.client)throw new Error("No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.");return t.client}function cw(t){for(const e of t.commands)switch(e.$kind){case"SplitCoins":e.SplitCoins.amounts.forEach(n=>{Ll(n,Z.U64,t)});break;case"TransferObjects":Ll(e.TransferObjects.address,Z.Address,t);break}}function Ll(t,e,n){if(t.$kind!=="Input")return;const s=n.inputs[t.Input];s.$kind==="UnresolvedPure"&&(n.inputs[t.Input]=_t.Pure(e.serialize(s.UnresolvedPure.value)))}function uw(t){function e(n){return t(n)}return e.system=n=>{const s=n==null?void 0:n.mutable;return e(s!==void 0?_t.SharedObjectRef({objectId:"0x5",initialSharedVersion:1,mutable:s}):{$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x5",initialSharedVersion:1}})},e.clock=()=>e(_t.SharedObjectRef({objectId:"0x6",initialSharedVersion:1,mutable:!1})),e.random=()=>e({$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x8",mutable:!1}}),e.denyList=n=>e({$kind:"UnresolvedObject",UnresolvedObject:{objectId:"0x403",mutable:n==null?void 0:n.mutable}}),e.option=({type:n,value:s})=>r=>r.moveCall({typeArguments:[n],target:`0x1::option::${s===null?"none":"some"}`,arguments:s===null?[]:[r.object(s)]}),e}function lw(t){function e(n,s){if(typeof n=="string")return t(ri(n).serialize(s));if(n instanceof Uint8Array||ru(n))return t(n);throw new Error("tx.pure must be called either a bcs type name, or a serialized bcs value")}return e.u8=n=>t(Z.U8.serialize(n)),e.u16=n=>t(Z.U16.serialize(n)),e.u32=n=>t(Z.U32.serialize(n)),e.u64=n=>t(Z.U64.serialize(n)),e.u128=n=>t(Z.U128.serialize(n)),e.u256=n=>t(Z.U256.serialize(n)),e.bool=n=>t(Z.Bool.serialize(n)),e.string=n=>t(Z.String.serialize(n)),e.address=n=>t(Z.Address.serialize(n)),e.id=e.address,e.vector=(n,s)=>t(Z.vector(ri(n)).serialize(s)),e.option=(n,s)=>t(Z.option(ri(n)).serialize(s)),e}function dw(t,e){const n=Array.from(`${t}::`).map(r=>r.charCodeAt(0)),s=new Uint8Array(n.length+e.length);return s.set(n),s.set(e,n.length),Ss(s,{dkLen:32})}function zl(t){return le(t).replace("0x","")}class It{constructor(e){this.version=2,this.sender=(e==null?void 0:e.sender)??null,this.expiration=(e==null?void 0:e.expiration)??null,this.inputs=(e==null?void 0:e.inputs)??[],this.commands=(e==null?void 0:e.commands)??[],this.gasData=(e==null?void 0:e.gasData)??{budget:null,price:null,owner:null,payment:null}}static fromKindBytes(e){const s=Z.TransactionKind.parse(e).ProgrammableTransaction;if(!s)throw new Error("Unable to deserialize from bytes.");return It.restore({version:2,sender:null,expiration:null,gasData:{budget:null,owner:null,payment:null,price:null},inputs:s.inputs,commands:s.commands})}static fromBytes(e){const n=Z.TransactionData.parse(e),s=n==null?void 0:n.V1,r=s.kind.ProgrammableTransaction;if(!s||!r)throw new Error("Unable to deserialize from bytes.");return It.restore({version:2,sender:s.sender,expiration:s.expiration,gasData:s.gasData,inputs:r.inputs,commands:r.commands})}static restore(e){return e.version===2?new It($e(ao,e)):new It($e(ao,Rm(e)))}static getDigestFromBytes(e){const n=dw("TransactionData",e);return Xo(n)}get gasConfig(){return this.gasData}set gasConfig(e){this.gasData=e}build({maxSizeBytes:e=1/0,overrides:n,onlyTransactionKind:s}={}){const r=this.inputs,i=this.commands,o={ProgrammableTransaction:{inputs:r,commands:i}};if(s)return Z.TransactionKind.serialize(o,{maxSize:e}).toBytes();const a=(n==null?void 0:n.expiration)??this.expiration,c=(n==null?void 0:n.sender)??this.sender,l={...this.gasData,...n==null?void 0:n.gasConfig,...n==null?void 0:n.gasData};if(!c)throw new Error("Missing transaction sender");if(!l.budget)throw new Error("Missing gas budget");if(!l.payment)throw new Error("Missing gas payment");if(!l.price)throw new Error("Missing gas price");const u={sender:zl(c),expiration:a||{None:!0},gasData:{payment:l.payment,owner:zl(this.gasData.owner??c),price:BigInt(l.price),budget:BigInt(l.budget)},kind:{ProgrammableTransaction:{inputs:r,commands:i}}};return Z.TransactionData.serialize({V1:u},{maxSize:e}).toBytes()}addInput(e,n){const s=this.inputs.length;return this.inputs.push(n),{Input:s,type:e,$kind:"Input"}}getInputUses(e,n){this.mapArguments((s,r)=>(s.$kind==="Input"&&s.Input===e&&n(s,r),s))}mapCommandArguments(e,n){const s=this.commands[e];switch(s.$kind){case"MoveCall":s.MoveCall.arguments=s.MoveCall.arguments.map(i=>n(i,s,e));break;case"TransferObjects":s.TransferObjects.objects=s.TransferObjects.objects.map(i=>n(i,s,e)),s.TransferObjects.address=n(s.TransferObjects.address,s,e);break;case"SplitCoins":s.SplitCoins.coin=n(s.SplitCoins.coin,s,e),s.SplitCoins.amounts=s.SplitCoins.amounts.map(i=>n(i,s,e));break;case"MergeCoins":s.MergeCoins.destination=n(s.MergeCoins.destination,s,e),s.MergeCoins.sources=s.MergeCoins.sources.map(i=>n(i,s,e));break;case"MakeMoveVec":s.MakeMoveVec.elements=s.MakeMoveVec.elements.map(i=>n(i,s,e));break;case"Upgrade":s.Upgrade.ticket=n(s.Upgrade.ticket,s,e);break;case"$Intent":const r=s.$Intent.inputs;s.$Intent.inputs={};for(const[i,o]of Object.entries(r))s.$Intent.inputs[i]=Array.isArray(o)?o.map(a=>n(a,s,e)):n(o,s,e);break;case"Publish":break;default:throw new Error(`Unexpected transaction kind: ${s.$kind}`)}}mapArguments(e){for(const n of this.commands.keys())this.mapCommandArguments(n,e)}replaceCommand(e,n,s=e){if(!Array.isArray(n)){this.commands[e]=n;return}const r=n.length-1;this.commands.splice(e,1,...n),r!==0&&this.mapArguments((i,o,a)=>{if(a<e+n.length)return i;switch(i.$kind){case"Result":i.Result===e&&(i.Result=s),i.Result>e&&(i.Result+=r);break;case"NestedResult":i.NestedResult[0]===e&&(i.NestedResult[0]=s),i.NestedResult[0]>e&&(i.NestedResult[0]+=r);break}return i})}getDigest(){const e=this.build({onlyTransactionKind:!1});return It.getDigestFromBytes(e)}snapshot(){return $e(ao,this)}shallowClone(){return new It({version:this.version,sender:this.sender,expiration:this.expiration,gasData:{...this.gasData},inputs:[...this.inputs],commands:[...this.commands]})}}function Pl(t){if(typeof t=="string")return le(t);if(t.Object)return t.Object.ImmOrOwnedObject?le(t.Object.ImmOrOwnedObject.objectId):t.Object.Receiving?le(t.Object.Receiving.objectId):le(t.Object.SharedObject.objectId);if(t.UnresolvedObject)return le(t.UnresolvedObject.objectId)}var Ah=t=>{throw TypeError(t)},Nh=(t,e,n)=>e.has(t)||Ah("Cannot "+n),it=(t,e,n)=>(Nh(t,e,"read from private field"),e.get(t)),Rl=(t,e,n)=>e.has(t)?Ah("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),$l=(t,e,n,s)=>(Nh(t,e,"write to private field"),e.set(t,n),n),js,ft;const fw=class Th{constructor({prefix:e,cache:n}={}){Rl(this,js),Rl(this,ft),$l(this,js,e??[]),$l(this,ft,n??new Map)}read(e,n){const s=[it(this,js),...e].join(":");if(it(this,ft).has(s))return it(this,ft).get(s);const r=n();return it(this,ft).set(s,r),typeof r=="object"&&r!==null&&"then"in r?Promise.resolve(r).then(i=>(it(this,ft).set(s,i),i)).catch(i=>{throw it(this,ft).delete(s),i}):r}readSync(e,n){const s=[it(this,js),...e].join(":");if(it(this,ft).has(s))return it(this,ft).get(s);const r=n();return it(this,ft).set(s,r),r}clear(e){const n=[...it(this,js),...e??[]].join(":");if(!n){it(this,ft).clear();return}for(const s of it(this,ft).keys())s.startsWith(n)&&it(this,ft).delete(s)}scope(e){return new Th({prefix:[...it(this,js),...Array.isArray(e)?e:[e]],cache:it(this,ft)})}};js=new WeakMap;ft=new WeakMap;let hw=fw;const Oh="1.38.0",pw="1.57.0";var jh=t=>{throw TypeError(t)},wu=(t,e,n)=>e.has(t)||jh("Cannot "+n),Ye=(t,e,n)=>(wu(t,e,"read from private field"),n?n.call(t):e.get(t)),Fr=(t,e,n)=>e.has(t)?jh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ki=(t,e,n,s)=>(wu(t,e,"write to private field"),e.set(t,n),n),na=(t,e,n)=>(wu(t,e,"access private method"),n),Si,Gn,Mi,hs,Sn,cc,uc,Ch,kh,vu;const gw="/",bw={"Mvr-Source":`@mysten/sui@${Oh}`};class yw{constructor({cache:e,url:n,pageSize:s=50,overrides:r}){Fr(this,Sn),Fr(this,Si),Fr(this,Gn),Fr(this,Mi),Fr(this,hs),Ki(this,Si,e),Ki(this,Gn,n),Ki(this,Mi,s),Ki(this,hs,{packages:r==null?void 0:r.packages,types:r==null?void 0:r.types}),mw(Ye(this,hs))}async resolvePackage({package:e}){return{package:await Ye(this,Sn,cc).load(e)}}async resolveType({type:e}){const n=[...lc(e)],s=await Ye(this,Sn,uc).loadMany(n),r={};for(let i=0;i<n.length;i++){const o=s[i];if(o instanceof Error)throw o;r[n[i]]=o}return{type:dc(e,r)}}async resolve({types:e=[],packages:n=[]}){var u,d,f;const s=new Set;for(const p of e??[])lc(p,s);const r=[...s],[i,o]=await Promise.all([r.length>0?Ye(this,Sn,uc).loadMany(r):[],n.length>0?Ye(this,Sn,cc).loadMany(n):[]]),a={...(u=Ye(this,hs))==null?void 0:u.types};for(const[p,g]of r.entries()){const m=i[p];if(m instanceof Error)throw m;a[g]=m}const c={};for(const p of e??[]){const g=dc(p,a);c[p]={type:g}}const l={};for(const[p,g]of(n??[]).entries()){const m=((f=(d=Ye(this,hs))==null?void 0:d.packages)==null?void 0:f[g])??o[p];if(m instanceof Error)throw m;l[g]={package:m}}return{types:c,packages:l}}}Si=new WeakMap;Gn=new WeakMap;Mi=new WeakMap;hs=new WeakMap;Sn=new WeakSet;cc=function(){return Ye(this,Si).readSync(["#mvrPackageDataLoader",Ye(this,Gn)??""],()=>{var n;const t=new Cf(async s=>{if(!Ye(this,Gn))throw new Error(`MVR Api URL is not set for the current client (resolving ${s.join(", ")})`);const r=await na(this,Sn,Ch).call(this,s);return s.map(i=>r[i]??new Error(`Failed to resolve package: ${i}`))}),e=(n=Ye(this,hs))==null?void 0:n.packages;if(e)for(const[s,r]of Object.entries(e))t.prime(s,r);return t})};uc=function(){return Ye(this,Si).readSync(["#mvrTypeDataLoader",Ye(this,Gn)??""],()=>{var n;const t=new Cf(async s=>{if(!Ye(this,Gn))throw new Error(`MVR Api URL is not set for the current client (resolving ${s.join(", ")})`);const r=await na(this,Sn,kh).call(this,s);return s.map(i=>r[i]??new Error(`Failed to resolve type: ${i}`))}),e=(n=Ye(this,hs))==null?void 0:n.types;if(e)for(const[s,r]of Object.entries(e))t.prime(s,r);return t})};Ch=async function(t){if(t.length===0)return{};const e=Jo(t,Ye(this,Mi)),n={};return await Promise.all(e.map(async s=>{var i;const r=await na(this,Sn,vu).call(this,"/v1/resolution/bulk",{names:s});if(r!=null&&r.resolution)for(const o of Object.keys(r==null?void 0:r.resolution)){const a=(i=r.resolution[o])==null?void 0:i.package_id;a&&(n[o]=a)}})),n};kh=async function(t){if(t.length===0)return{};const e=Jo(t,Ye(this,Mi)),n={};return await Promise.all(e.map(async s=>{var i;const r=await na(this,Sn,vu).call(this,"/v1/struct-definition/bulk",{types:s});if(r!=null&&r.resolution)for(const o of Object.keys(r==null?void 0:r.resolution)){const a=(i=r.resolution[o])==null?void 0:i.type_tag;a&&(n[o]=a)}})),n};vu=async function(t,e){if(!Ye(this,Gn))throw new Error("MVR Api URL is not set for the current client");const n=await fetch(`${Ye(this,Gn)}${t}`,{method:"POST",headers:{"Content-Type":"application/json",...bw},body:JSON.stringify(e)});if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(`Failed to resolve types: ${s==null?void 0:s.message}`)}return n.json()};function mw(t){if(t!=null&&t.packages)for(const[e,n]of Object.entries(t.packages)){if(!Ut(e))throw new Error(`Invalid package name: ${e}`);if(!en(le(n)))throw new Error(`Invalid package ID: ${n}`)}if(t!=null&&t.types)for(const[e,n]of Object.entries(t.types)){if(Ws(e).typeParams.length>0)throw new Error("Type overrides must be first-level only. If you want to supply generic types, just pass each type individually.");const s=Ws(n);if(!en(s.address))throw new Error(`Invalid type: ${n}`)}}function lc(t,e=new Set){if(typeof t=="string"&&!xt(t))return e;const n=Dh(t)?t:Ws(t);xt(n.address)&&e.add(`${n.address}::${n.module}::${n.name}`);for(const s of n.typeParams)lc(s,e);return e}function dc(t,e){const n=Dh(t)?t:Ws(t),s=`${n.address}::${n.module}::${n.name}`,r=e[s];return Mr({...n,address:r?r.split("::")[0]:n.address,typeParams:n.typeParams.map(i=>dc(i,e))})}function xt(t){return t.includes(gw)||t.includes("@")||t.includes(".sui")}function Dh(t){return typeof t=="object"&&"address"in t&&"module"in t&&"name"in t&&"typeParams"in t}function ww(t){const e=new Set,n=new Set;for(const s of t.commands)switch(s.$kind){case"MakeMoveVec":s.MakeMoveVec.type&&Fl([s.MakeMoveVec.type]).forEach(o=>{n.add(o)});break;case"MoveCall":const r=s.MoveCall,i=r.package.split("::")[0];if(xt(i)){if(!Ut(i))throw new Error(`Invalid package name: ${i}`);e.add(i)}Fl(r.typeArguments??[]).forEach(o=>{n.add(o)});break}return{packages:[...e],types:[...n]}}function vw(t,e){var n;for(const s of t.commands){if((n=s.MakeMoveVec)!=null&&n.type){if(!xt(s.MakeMoveVec.type))continue;if(!e.types[s.MakeMoveVec.type])throw new Error(`No resolution found for type: ${s.MakeMoveVec.type}`);s.MakeMoveVec.type=e.types[s.MakeMoveVec.type].type}const r=s.MoveCall;if(!r)continue;const i=r.package.split("::"),o=i[0];if(xt(o)&&!e.packages[o])throw new Error(`No address found for package: ${o}`);xt(o)&&(i[0]=e.packages[o].package,r.package=i.join("::"));const a=r.typeArguments;if(a){for(let c=0;c<a.length;c++)if(xt(a[c])){if(!e.types[a[c]])throw new Error(`No resolution found for type: ${a[c]}`);a[c]=e.types[a[c]].type}r.typeArguments=a}}}function Fl(t){const e=new Set;for(const n of t)if(xt(n)){if(!dy(n))throw new Error(`Invalid type with names: ${n}`);e.add(n)}return e}const Sw=t=>async(e,n,s)=>{const r=ww(e);if(r.types.length===0&&r.packages.length===0)return s();const i=await Mw(n).core.mvr.resolve({types:r.types,packages:r.packages});vw(e,i),await s()};function Mw(t){if(!t.client)throw new Error("No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.");return t.client}var Uh=t=>{throw TypeError(t)},Su=(t,e,n)=>e.has(t)||Uh("Cannot "+n),U=(t,e,n)=>(Su(t,e,"read from private field"),n?n.call(t):e.get(t)),gn=(t,e,n)=>e.has(t)?Uh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ae=(t,e,n,s)=>(Su(t,e,"write to private field"),e.set(t,n),n),He=(t,e,n)=>(Su(t,e,"access private method"),n),Ds,Vs,zn,xn,Vt,Kt,sn,ps,X,Ke,Bh,co,uo,lo,Bo,fc,Mu,Lh,zh;function Ta(t,e=1/0){const n={$kind:"Result",get Result(){return typeof t=="function"?t():t}},s=[],r=i=>s[i]??(s[i]={$kind:"NestedResult",get NestedResult(){return[typeof t=="function"?t():t,i]}});return new Proxy(n,{set(){throw new Error("The transaction result is a proxy, and does not support setting properties directly")},get(i,o){if(o in i)return Reflect.get(i,o);if(o===Symbol.iterator)return function*(){let c=0;for(;c<e;)yield r(c),c++};if(typeof o=="symbol")return;const a=parseInt(o,10);if(!(Number.isNaN(a)||a<0))return r(a)}})}const Ph=Symbol.for("@mysten/transaction");function Rh(t){return!!t&&typeof t=="object"&&t[Ph]===!0}const Vl={buildPlugins:new Map,serializationPlugins:new Map},Oa=Symbol.for("@mysten/transaction/registry");function Vr(){try{const t=globalThis;return t[Oa]||(t[Oa]=Vl),t[Oa]}catch{return Vl}}const $h=class hc{constructor(){gn(this,Ke),gn(this,Ds),gn(this,Vs),gn(this,zn,new Map),gn(this,xn,[]),gn(this,Vt,[]),gn(this,Kt,new Set),gn(this,sn,new Set),gn(this,ps,new Map),gn(this,X),this.object=uw(n=>{var i,o;if(typeof n=="function")return this.object(this.add(n));if(typeof n=="object"&&ic(Ue,n))return n;const s=Pl(n),r=U(this,X).inputs.find(a=>s===Pl(a));return(i=r==null?void 0:r.Object)!=null&&i.SharedObject&&typeof n=="object"&&((o=n.Object)!=null&&o.SharedObject)&&(r.Object.SharedObject.mutable=r.Object.SharedObject.mutable||n.Object.SharedObject.mutable),r?{$kind:"Input",Input:U(this,X).inputs.indexOf(r),type:"object"}:He(this,Ke,uo).call(this,"object",typeof n=="string"?{$kind:"UnresolvedObject",UnresolvedObject:{objectId:le(n)}}:n)});const e=Vr();Ae(this,X,new It),Ae(this,Vs,[...e.buildPlugins.values()]),Ae(this,Ds,[...e.serializationPlugins.values()])}static fromKind(e){const n=new hc;return Ae(n,X,It.fromKindBytes(typeof e=="string"?we(e):e)),Ae(n,xn,U(n,X).inputs.slice()),Ae(n,Vt,U(n,X).commands.slice()),Ae(n,Kt,new Set(U(n,Vt).map((s,r)=>r))),n}static from(e){const n=new hc;return Rh(e)?Ae(n,X,new It(e.getData())):typeof e!="string"||!e.startsWith("{")?Ae(n,X,It.fromBytes(typeof e=="string"?we(e):e)):Ae(n,X,It.restore(JSON.parse(e))),Ae(n,xn,U(n,X).inputs.slice()),Ae(n,Vt,U(n,X).commands.slice()),Ae(n,Kt,new Set(U(n,Vt).map((s,r)=>r))),n}static registerGlobalSerializationPlugin(e,n){Vr().serializationPlugins.set(e,n??e)}static unregisterGlobalSerializationPlugin(e){Vr().serializationPlugins.delete(e)}static registerGlobalBuildPlugin(e,n){Vr().buildPlugins.set(e,n??e)}static unregisterGlobalBuildPlugin(e){Vr().buildPlugins.delete(e)}addSerializationPlugin(e){U(this,Ds).push(e)}addBuildPlugin(e){U(this,Vs).push(e)}addIntentResolver(e,n){if(U(this,zn).has(e)&&U(this,zn).get(e)!==n)throw new Error(`Intent resolver for ${e} already exists`);U(this,zn).set(e,n)}setSender(e){U(this,X).sender=e}setSenderIfNotSet(e){U(this,X).sender||(U(this,X).sender=e)}setExpiration(e){U(this,X).expiration=e?$e(Ih,e):null}setGasPrice(e){U(this,X).gasConfig.price=String(e)}setGasBudget(e){U(this,X).gasConfig.budget=String(e)}setGasBudgetIfNotSet(e){U(this,X).gasData.budget==null&&(U(this,X).gasConfig.budget=String(e))}setGasOwner(e){U(this,X).gasConfig.owner=e}setGasPayment(e){U(this,X).gasConfig.payment=e.map(n=>$e(Ms,n))}get blockData(){return Ul(U(this,X).snapshot())}getData(){return U(this,X).snapshot()}get[Ph](){return!0}get pure(){return Object.defineProperty(this,"pure",{enumerable:!1,value:lw(e=>ru(e)?He(this,Ke,uo).call(this,"pure",{$kind:"Pure",Pure:{bytes:e.toBase64()}}):He(this,Ke,uo).call(this,"pure",ic(Cl,e)?$e(Cl,e):e instanceof Uint8Array?_t.Pure(e):{$kind:"UnresolvedPure",UnresolvedPure:{value:e}}))}),this.pure}get gas(){return{$kind:"GasCoin",GasCoin:!0}}objectRef(...e){return this.object(_t.ObjectRef(...e))}receivingRef(...e){return this.object(_t.ReceivingRef(...e))}sharedObjectRef(...e){return this.object(_t.SharedObjectRef(...e))}add(e){if(typeof e=="function"){if(U(this,ps).has(e))return U(this,ps).get(e);const n=He(this,Ke,Bh).call(this),s=e(n);if(!(s&&typeof s=="object"&&"then"in s))return Ae(this,Kt,U(n,Kt)),U(this,ps).set(e,s),s;const r=He(this,Ke,co).call(this,{$kind:"$Intent",$Intent:{name:"AsyncTransactionThunk",inputs:{},data:{resultIndex:U(this,X).commands.length,result:null}}});U(this,sn).add(Promise.resolve(s).then(o=>{r.$Intent.data.result=o}));const i=Ta(()=>r.$Intent.data.resultIndex);return U(this,ps).set(e,i),i}else He(this,Ke,co).call(this,e);return Ta(U(this,X).commands.length-1)}splitCoins(e,n){const s=Bt.SplitCoins(typeof e=="string"?this.object(e):He(this,Ke,Bo).call(this,e),n.map(r=>typeof r=="number"||typeof r=="bigint"||typeof r=="string"?this.pure.u64(r):He(this,Ke,lo).call(this,r)));return He(this,Ke,co).call(this,s),Ta(U(this,X).commands.length-1,n.length)}mergeCoins(e,n){return this.add(Bt.MergeCoins(this.object(e),n.map(s=>this.object(s))))}publish({modules:e,dependencies:n}){return this.add(Bt.Publish({modules:e,dependencies:n}))}upgrade({modules:e,dependencies:n,package:s,ticket:r}){return this.add(Bt.Upgrade({modules:e,dependencies:n,package:s,ticket:this.object(r)}))}moveCall({arguments:e,...n}){return this.add(Bt.MoveCall({...n,arguments:e==null?void 0:e.map(s=>He(this,Ke,lo).call(this,s))}))}transferObjects(e,n){return this.add(Bt.TransferObjects(e.map(s=>this.object(s)),typeof n=="string"?this.pure.address(n):He(this,Ke,lo).call(this,n)))}makeMoveVec({type:e,elements:n}){return this.add(Bt.MakeMoveVec({type:e,elements:n.map(s=>this.object(s))}))}serialize(){return JSON.stringify(Ul(U(this,X).snapshot()))}async toJSON(e={}){await this.prepareForSerialization(e);const n=this.isFullyResolved();return JSON.stringify($e(Hm,n?{...U(this,X).snapshot(),digest:U(this,X).getDigest()}:U(this,X).snapshot()),(s,r)=>typeof r=="bigint"?r.toString():r,2)}async sign(e){const{signer:n,...s}=e,r=await this.build(s);return n.signTransaction(r)}isFullyResolved(){return!(!U(this,X).sender||U(this,sn).size>0||U(this,X).commands.some(e=>e.$Intent)||_h(U(this,X),{}))}async build(e={}){return await this.prepareForSerialization(e),await He(this,Ke,fc).call(this,e),U(this,X).build({onlyTransactionKind:e.onlyTransactionKind})}async getDigest(e={}){return await this.prepareForSerialization(e),await He(this,Ke,fc).call(this,e),U(this,X).getDigest()}async prepareForSerialization(e){var r;await He(this,Ke,Lh).call(this),He(this,Ke,zh).call(this);const n=new Set;for(const i of U(this,X).commands)i.$Intent&&n.add(i.$Intent.name);const s=[...U(this,Ds)];for(const i of n)if(!((r=e.supportedIntents)!=null&&r.includes(i))){if(!U(this,zn).has(i))throw new Error(`Missing intent resolver for ${i}`);s.push(U(this,zn).get(i))}s.push(Sw()),await He(this,Ke,Mu).call(this,s,e)}};Ds=new WeakMap;Vs=new WeakMap;zn=new WeakMap;xn=new WeakMap;Vt=new WeakMap;Kt=new WeakMap;sn=new WeakMap;ps=new WeakMap;X=new WeakMap;Ke=new WeakSet;Bh=function(){const t=new $h;return Ae(t,X,U(this,X)),Ae(t,Ds,U(this,Ds)),Ae(t,Vs,U(this,Vs)),Ae(t,zn,U(this,zn)),Ae(t,sn,U(this,sn)),Ae(t,Kt,new Set(U(this,Kt))),Ae(t,ps,U(this,ps)),U(this,xn).push(U(t,xn)),U(this,Vt).push(U(t,Vt)),t};co=function(t){const e=U(this,X).commands.length;return U(this,Vt).push(t),U(this,Kt).add(e),U(this,X).commands.push(t),U(this,X).mapCommandArguments(e,n=>{if(n.$kind==="Result"&&!U(this,Kt).has(n.Result))throw new Error(`Result { Result: ${n.Result} } is not available to use the current transaction`);if(n.$kind==="NestedResult"&&!U(this,Kt).has(n.NestedResult[0]))throw new Error(`Result { NestedResult: [${n.NestedResult[0]}, ${n.NestedResult[1]}] } is not available to use the current transaction`);if(n.$kind==="Input"&&n.Input>=U(this,X).inputs.length)throw new Error(`Input { Input: ${n.Input} } references an input that does not exist in the current transaction`);return n}),t};uo=function(t,e){return U(this,xn).push(e),U(this,X).addInput(t,e)};lo=function(t){return ru(t)?this.pure(t):He(this,Ke,Bo).call(this,t)};Bo=function(t){if(typeof t=="function"){const e=this.add(t);return typeof e=="function"?He(this,Ke,Bo).call(this,e):$e(Ue,e)}return $e(Ue,t)};fc=async function(t){if(!t.onlyTransactionKind&&!U(this,X).sender)throw new Error("Missing transaction sender");await He(this,Ke,Mu).call(this,[...U(this,Vs),ow],t)};Mu=async function(t,e){try{const n=s=>{if(s>=t.length)return()=>{};const r=t[s];return async()=>{const i=n(s+1);let o=!1,a=!1;if(await r(U(this,X),e,async()=>{if(o)throw new Error(`next() was call multiple times in TransactionPlugin ${s}`);o=!0,await i(),a=!0}),!o)throw new Error(`next() was not called in TransactionPlugin ${s}`);if(!a)throw new Error(`next() was not awaited in TransactionPlugin ${s}`)}};await n(0)()}finally{Ae(this,xn,U(this,X).inputs.slice()),Ae(this,Vt,U(this,X).commands.slice())}};Lh=async function(){for(;U(this,sn).size>0;){const t=Promise.all(U(this,sn));U(this,sn).clear(),U(this,sn).add(t),await t,U(this,sn).delete(t)}};zh=function(){var o;const t=U(this,X).commands,e=U(this,X).inputs,n=U(this,Vt).flat(1/0),s=U(this,xn).flat(1/0);if(n.length!==t.length)throw new Error("Unexpected number of commands found in transaction data");if(s.length!==e.length)throw new Error("Unexpected number of inputs found in transaction data");const r=n.filter(a=>{var c;return((c=a.$Intent)==null?void 0:c.name)!=="AsyncTransactionThunk"});U(this,X).commands=r,U(this,X).inputs=s,Ae(this,Vt,r),Ae(this,xn,s),Ae(this,Kt,new Set(r.map((a,c)=>c)));function i(a){var u;const c=t[a];if(((u=c.$Intent)==null?void 0:u.name)==="AsyncTransactionThunk"){const d=c.$Intent.data.result;if(d==null)throw new Error("AsyncTransactionThunk has not been resolved");return i(d.Result)}const l=r.indexOf(c);if(l===-1)throw new Error("Unable to find original index for command");return l}U(this,X).mapArguments(a=>{if(a.$kind==="Input"){const c=s.indexOf(e[a.Input]);if(c===-1)throw new Error("Input has not been resolved");return{...a,Input:c}}else if(a.$kind==="Result"){const c=i(a.Result);return{...a,Result:c}}else if(a.$kind==="NestedResult"){const c=i(a.NestedResult[0]);return{...a,NestedResult:[c,a.NestedResult[1]]}}return a});for(const[a,c]of t.entries())if(((o=c.$Intent)==null?void 0:o.name)==="AsyncTransactionThunk")try{c.$Intent.data.resultIndex=i(a)}catch{}};let _r=$h;const Iw={"-32700":"ParseError","-32701":"OversizedRequest","-32702":"OversizedResponse","-32600":"InvalidRequest","-32601":"MethodNotFound","-32602":"InvalidParams","-32603":"InternalError","-32604":"ServerBusy","-32000":"CallExecutionFailed","-32001":"UnknownError","-32003":"SubscriptionClosed","-32004":"SubscriptionClosedWithError","-32005":"BatchesNotSupported","-32006":"TooManySubscriptions","-32050":"TransientError","-32002":"TransactionExecutionClientError"};class Fh extends Error{}class Vh extends Fh{constructor(e,n){super(e),this.code=n,this.type=Iw[n]??"ServerError"}}class xw extends Fh{constructor(e,n,s){super(e),this.status=n,this.statusText=s}}var Kh=t=>{throw TypeError(t)},Iu=(t,e,n)=>e.has(t)||Kh("Cannot "+n),De=(t,e,n)=>(Iu(t,e,"read from private field"),n?n.call(t):e.get(t)),Ts=(t,e,n)=>e.has(t)?Kh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),yr=(t,e,n,s)=>(Iu(t,e,"write to private field"),e.set(t,n),n),Wh=(t,e,n)=>(Iu(t,e,"access private method"),n),Ew=(t,e,n,s)=>({set _(r){yr(t,e,r)},get _(){return De(t,e,s)}}),rs,oi,Pn,Us,Ii,Bs,Lo,qh,Gh;function _w(t){const e=new URL(t);return e.protocol=e.protocol.replace("http","ws"),e.toString()}const Aw={WebSocketConstructor:typeof WebSocket<"u"?WebSocket:void 0,callTimeout:3e4,reconnectTimeout:3e3,maxReconnects:5};class Nw{constructor(e,n={}){if(Ts(this,Lo),Ts(this,rs,0),Ts(this,oi,0),Ts(this,Pn,null),Ts(this,Us,null),Ts(this,Ii,new Set),Ts(this,Bs,new Map),this.endpoint=e,this.options={...Aw,...n},!this.options.WebSocketConstructor)throw new Error("Missing WebSocket constructor");this.endpoint.startsWith("http")&&(this.endpoint=_w(this.endpoint))}async makeRequest(e,n,s){const r=await Wh(this,Lo,qh).call(this);return new Promise((i,o)=>{yr(this,rs,De(this,rs)+1),De(this,Bs).set(De(this,rs),{resolve:i,reject:o,timeout:setTimeout(()=>{De(this,Bs).delete(De(this,rs)),o(new Error(`Request timeout: ${e}`))},this.options.callTimeout)}),s==null||s.addEventListener("abort",()=>{De(this,Bs).delete(De(this,rs)),o(s.reason)}),r.send(JSON.stringify({jsonrpc:"2.0",id:De(this,rs),method:e,params:n}))}).then(({error:i,result:o})=>{if(i)throw new Vh(i.message,i.code);return o})}async subscribe(e){const n=new Tw(e);return De(this,Ii).add(n),await n.subscribe(this),()=>n.unsubscribe(this)}}rs=new WeakMap;oi=new WeakMap;Pn=new WeakMap;Us=new WeakMap;Ii=new WeakMap;Bs=new WeakMap;Lo=new WeakSet;qh=function(){return De(this,Us)?De(this,Us):(yr(this,Us,new Promise(t=>{var e;(e=De(this,Pn))==null||e.close(),yr(this,Pn,new this.options.WebSocketConstructor(this.endpoint)),De(this,Pn).addEventListener("open",()=>{yr(this,oi,0),t(De(this,Pn))}),De(this,Pn).addEventListener("close",()=>{Ew(this,oi)._++,De(this,oi)<=this.options.maxReconnects&&setTimeout(()=>{Wh(this,Lo,Gh).call(this)},this.options.reconnectTimeout)}),De(this,Pn).addEventListener("message",({data:n})=>{let s;try{s=JSON.parse(n)}catch(r){console.error(new Error(`Failed to parse RPC message: ${n}`,{cause:r}));return}if("id"in s&&s.id!=null&&De(this,Bs).has(s.id)){const{resolve:r,timeout:i}=De(this,Bs).get(s.id);clearTimeout(i),r(s)}else if("params"in s){const{params:r}=s;De(this,Ii).forEach(i=>{i.subscriptionId===r.subscription&&r.subscription===i.subscriptionId&&i.onMessage(r.result)})}})})),De(this,Us))};Gh=async function(){var t;return(t=De(this,Pn))==null||t.close(),yr(this,Us,null),Promise.allSettled([...De(this,Ii)].map(e=>e.subscribe(this)))};class Tw{constructor(e){this.subscriptionId=null,this.subscribed=!1,this.input=e}onMessage(e){this.subscribed&&this.input.onMessage(e)}async unsubscribe(e){const{subscriptionId:n}=this;return this.subscribed=!1,n==null?!1:(this.subscriptionId=null,e.makeRequest(this.input.unsubscribe,[n]))}async subscribe(e){this.subscriptionId=null,this.subscribed=!0;const n=await e.makeRequest(this.input.method,this.input.params,this.input.signal);this.subscribed&&(this.subscriptionId=n)}}var Hh=t=>{throw TypeError(t)},xu=(t,e,n)=>e.has(t)||Hh("Cannot "+n),Ft=(t,e,n)=>(xu(t,e,"read from private field"),n?n.call(t):e.get(t)),Wi=(t,e,n)=>e.has(t)?Hh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),pc=(t,e,n,s)=>(xu(t,e,"write to private field"),e.set(t,n),n),Ow=(t,e,n)=>(xu(t,e,"access private method"),n),Yr,tn,ai,gc,Yh;class bc{constructor(e){Wi(this,gc),Wi(this,Yr,0),Wi(this,tn),Wi(this,ai),pc(this,tn,e)}fetch(e,n){const s=Ft(this,tn).fetch??fetch;if(!s)throw new Error("The current environment does not support fetch, you can provide a fetch implementation in the options for SuiHTTPTransport.");return s(e,n)}async request(e){var r,i;pc(this,Yr,Ft(this,Yr)+1);const n=await this.fetch(((r=Ft(this,tn).rpc)==null?void 0:r.url)??Ft(this,tn).url,{method:"POST",signal:e.signal,headers:{"Content-Type":"application/json","Client-Sdk-Type":"typescript","Client-Sdk-Version":Oh,"Client-Target-Api-Version":pw,"Client-Request-Method":e.method,...(i=Ft(this,tn).rpc)==null?void 0:i.headers},body:JSON.stringify({jsonrpc:"2.0",id:Ft(this,Yr),method:e.method,params:e.params})});if(!n.ok)throw new xw(`Unexpected status code: ${n.status}`,n.status,n.statusText);const s=await n.json();if("error"in s&&s.error!=null)throw new Vh(s.error.message,s.error.code);return s.result}async subscribe(e){const n=await Ow(this,gc,Yh).call(this).subscribe(e);return e.signal&&(e.signal.throwIfAborted(),e.signal.addEventListener("abort",()=>{n()})),async()=>!!await n()}}Yr=new WeakMap;tn=new WeakMap;ai=new WeakMap;gc=new WeakSet;Yh=function(){var t;if(!Ft(this,ai)){const e=Ft(this,tn).WebSocketConstructor??WebSocket;if(!e)throw new Error("The current environment does not support WebSocket, you can provide a WebSocketConstructor in the options for SuiHTTPTransport.");pc(this,ai,new Nw(((t=Ft(this,tn).websocket)==null?void 0:t.url)??Ft(this,tn).url,{WebSocketConstructor:e,...Ft(this,tn).websocket}))}return Ft(this,ai)};function jw(t){switch(t){case"mainnet":return"https://fullnode.mainnet.sui.io:443";case"testnet":return"https://fullnode.testnet.sui.io:443";case"devnet":return"https://fullnode.devnet.sui.io:443";case"localnet":return"http://127.0.0.1:9000";default:throw new Error(`Unknown network: ${t}`)}}class Eu{constructor({network:e,base:n,cache:s=(n==null?void 0:n.cache)??new hw}){this.network=e,this.base=n??this,this.cache=s}$extend(...e){return Object.create(this,Object.fromEntries(e.map(n=>{if("experimental_asClientExtension"in n){const{name:s,register:r}=n.experimental_asClientExtension();return[s,{value:r(this)}]}return[n.name,{value:n.register(this)}]})))}}const Cw={mainnet:"https://mainnet.mvr.mystenlabs.com",testnet:"https://testnet.mvr.mystenlabs.com"};class Qh extends Eu{constructor(e){var n,s,r;super(e),this.core=this,this.mvr=new yw({cache:this.cache.scope("core.mvr"),url:((n=e.mvr)==null?void 0:n.url)??Cw[this.network],pageSize:(s=e.mvr)==null?void 0:s.pageSize,overrides:(r=e.mvr)==null?void 0:r.overrides})}async getObject(e){const{objectId:n}=e,{objects:[s]}=await this.getObjects({objectIds:[n],signal:e.signal});if(s instanceof Error)throw s;return{object:s}}async getDynamicField(e){const n=vh(e.parentId,nn.parseFromStr(e.name.type),e.name.bcs),{objects:[s]}=await this.getObjects({objectIds:[n],signal:e.signal});if(s instanceof Error)throw s;const r=Ws(s.type),i=await s.content;return{dynamicField:{id:s.id,digest:s.digest,version:s.version,type:s.type,name:{type:typeof r.typeParams[0]=="string"?r.typeParams[0]:Mr(r.typeParams[0]),bcs:e.name.bcs},value:{type:typeof r.typeParams[1]=="string"?r.typeParams[1]:Mr(r.typeParams[1]),bcs:i.slice(Cr+e.name.bcs.length)}}}}async waitForTransaction({signal:e,timeout:n=60*1e3,...s}){const r=e?AbortSignal.any([AbortSignal.timeout(n),e]):AbortSignal.timeout(n),i=new Promise((o,a)=>{r.addEventListener("abort",()=>a(r.reason))});for(i.catch(()=>{});;){r.throwIfAborted();try{return await this.getTransaction({...s,signal:r})}catch{await Promise.race([new Promise(a=>setTimeout(a,2e3)),i])}}}}class kw extends Error{}class Mn extends kw{constructor(e,n){super(n),this.code=e}static fromResponse(e,n){switch(e.code){case"notExists":return new Mn(e.code,`Object ${e.object_id} does not exist`);case"dynamicFieldNotFound":return new Mn(e.code,`Dynamic field not found for object ${e.parent_object_id}`);case"deleted":return new Mn(e.code,`Object ${e.object_id} has been deleted`);case"displayError":return new Mn(e.code,`Display error: ${e.error}`);case"unknown":default:return new Mn(e.code,`Unknown error while loading object${n?` ${n}`:""}`)}}}function Zh(t){return{...It.fromBytes(t).snapshot(),bcs:t}}function Xh(t){const e=Z.TransactionEffects.parse(t);switch(e.$kind){case"V1":return Dw({effects:e.V1});case"V2":return Uw({bytes:t,effects:e.V2});default:throw new Error(`Unknown transaction effects version: ${e.$kind}`)}}function Dw(t){throw new Error("V1 effects are not supported yet")}function Uw({bytes:t,effects:e}){const n=e.changedObjects.map(([s,r])=>{var i,o,a,c,l,u;return{id:s,inputState:r.inputState.$kind==="Exist"?"Exists":"DoesNotExist",inputVersion:((i=r.inputState.Exist)==null?void 0:i[0][0])??null,inputDigest:((o=r.inputState.Exist)==null?void 0:o[0][1])??null,inputOwner:((a=r.inputState.Exist)==null?void 0:a[1])??null,outputState:r.outputState.$kind==="NotExist"?"DoesNotExist":r.outputState.$kind,outputVersion:r.outputState.$kind==="PackageWrite"?(c=r.outputState.PackageWrite)==null?void 0:c[0]:r.outputState.ObjectWrite?e.lamportVersion:null,outputDigest:r.outputState.$kind==="PackageWrite"?(l=r.outputState.PackageWrite)==null?void 0:l[1]:((u=r.outputState.ObjectWrite)==null?void 0:u[0])??null,outputOwner:r.outputState.ObjectWrite?r.outputState.ObjectWrite[1]:null,idOperation:r.idOperation.$kind}});return{bcs:t,digest:e.transactionDigest,version:2,status:e.status.$kind==="Success"?{success:!0,error:null}:{success:!1,error:e.status.Failed.error.$kind},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:e.gasObjectIndex===null?null:n[e.gasObjectIndex]??null,eventsDigest:e.eventsDigest,dependencies:e.dependencies,lamportVersion:e.lamportVersion,changedObjects:n,unchangedSharedObjects:e.unchangedSharedObjects.map(([s,r])=>({kind:r.$kind==="MutateDeleted"?"MutateConsensusStreamEnded":r.$kind==="ReadDeleted"?"ReadConsensusStreamEnded":r.$kind,objectId:s,version:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[0]:r[r.$kind],digest:r.$kind==="ReadOnlyRoot"?r.ReadOnlyRoot[1]:null})),auxiliaryDataDigest:e.auxDataDigest}}var Jh=t=>{throw TypeError(t)},ep=(t,e,n)=>e.has(t)||Jh("Cannot "+n),jt=(t,e,n)=>(ep(t,e,"read from private field"),n?n.call(t):e.get(t)),Bw=(t,e,n)=>e.has(t)?Jh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Lw=(t,e,n,s)=>(ep(t,e,"write to private field"),e.set(t,n),n),ot;class zw extends Qh{constructor({jsonRpcClient:e,mvr:n}){super({network:e.network,base:e,mvr:n}),Bw(this,ot),Lw(this,ot,e)}async getObjects(e){const n=Jo(e.objectIds,50),s=[];for(const r of n){const i=await jt(this,ot).multiGetObjects({ids:r,options:{showOwner:!0,showType:!0,showBcs:!0},signal:e.signal});for(const[o,a]of i.entries())a.error?s.push(Mn.fromResponse(a.error,r[o])):s.push(Kl(a.data))}return{objects:s}}async getOwnedObjects(e){const n=await jt(this,ot).getOwnedObjects({owner:e.address,limit:e.limit,cursor:e.cursor,options:{showOwner:!0,showType:!0,showBcs:!0},filter:e.type?{StructType:e.type}:null,signal:e.signal});return{objects:n.data.map(s=>{if(s.error)throw Mn.fromResponse(s.error);return Kl(s.data)}),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getCoins(e){const n=await jt(this,ot).getCoins({owner:e.address,coinType:e.coinType,limit:e.limit,cursor:e.cursor,signal:e.signal});return{objects:n.data.map(s=>({id:s.coinObjectId,version:s.version,digest:s.digest,balance:s.balance,type:`0x2::coin::Coin<${s.coinType}>`,content:Promise.resolve($w.serialize({id:s.coinObjectId,balance:{value:s.balance}}).toBytes()),owner:{$kind:"ObjectOwner",ObjectOwner:e.address}})),hasNextPage:n.hasNextPage,cursor:n.nextCursor??null}}async getBalance(e){const n=await jt(this,ot).getBalance({owner:e.address,coinType:e.coinType,signal:e.signal});return{balance:{coinType:n.coinType,balance:n.totalBalance}}}async getAllBalances(e){return{balances:(await jt(this,ot).getAllBalances({owner:e.address,signal:e.signal})).map(s=>({coinType:s.coinType,balance:s.totalBalance})),hasNextPage:!1,cursor:null}}async getTransaction(e){const n=await jt(this,ot).getTransactionBlock({digest:e.digest,options:{showRawInput:!0,showObjectChanges:!0,showRawEffects:!0,showEvents:!0,showEffects:!0},signal:e.signal});return{transaction:Wl(n)}}async executeTransaction(e){const n=await jt(this,ot).executeTransactionBlock({transactionBlock:e.transaction,signature:e.signatures,options:{showRawEffects:!0,showEvents:!0,showObjectChanges:!0,showRawInput:!0,showEffects:!0},signal:e.signal});return{transaction:Wl(n)}}async dryRunTransaction(e){const n=_r.from(e.transaction),s=await jt(this,ot).dryRunTransactionBlock({transactionBlock:e.transaction,signal:e.signal}),{effects:r,objectTypes:i}=Pw({effects:s.effects,objectChanges:s.objectChanges});return{transaction:{digest:await n.getDigest(),epoch:null,effects:r,objectTypes:Promise.resolve(i),signatures:[],transaction:Zh(e.transaction)}}}async getReferenceGasPrice(e){const n=await jt(this,ot).getReferenceGasPrice({signal:e==null?void 0:e.signal});return{referenceGasPrice:String(n)}}async getDynamicFields(e){const n=await jt(this,ot).getDynamicFields({parentId:e.parentId,limit:e.limit,cursor:e.cursor});return{dynamicFields:n.data.map(s=>({id:s.objectId,type:s.objectType,name:{type:s.name.type,bcs:we(s.bcsName)}})),hasNextPage:n.hasNextPage,cursor:n.nextCursor}}async verifyZkLoginSignature(e){const n=await jt(this,ot).verifyZkLoginSignature({bytes:e.bytes,signature:e.signature,intentScope:e.intentScope,author:e.author});return{success:n.success,errors:n.errors}}resolveNameServiceNames(e){return jt(this,ot).resolveNameServiceNames(e)}resolveTransactionPlugin(){return Eh(jt(this,ot))}}ot=new WeakMap;function Kl(t){var e;return{id:t.objectId,version:t.version,digest:t.digest,type:t.type,content:Promise.resolve(((e=t.bcs)==null?void 0:e.dataType)==="moveObject"?we(t.bcs.bcsBytes):new Uint8Array),owner:cr(t.owner)}}function cr(t){if(t==="Immutable")return{$kind:"Immutable",Immutable:!0};if("ConsensusAddressOwner"in t)return{$kind:"ConsensusAddressOwner",ConsensusAddressOwner:{owner:t.ConsensusAddressOwner.owner,startVersion:t.ConsensusAddressOwner.start_version}};if("AddressOwner"in t)return{$kind:"AddressOwner",AddressOwner:t.AddressOwner};if("ObjectOwner"in t)return{$kind:"ObjectOwner",ObjectOwner:t.ObjectOwner};if("Shared"in t)return{$kind:"Shared",Shared:{initialSharedVersion:t.Shared.initial_shared_version}};throw new Error(`Unknown owner type: ${JSON.stringify(t)}`)}function Wl(t){var i,o;const e=Z.SenderSignedData.parse(we(t.rawTransaction))[0],n={};(i=t.objectChanges)==null||i.forEach(a=>{a.type!=="published"&&(n[a.objectId]=a.objectType)});const s=Z.TransactionData.serialize(e.intentMessage.value).toBytes(),r=It.restore({version:2,sender:e.intentMessage.value.V1.sender,expiration:e.intentMessage.value.V1.expiration,gasData:e.intentMessage.value.V1.gasData,inputs:e.intentMessage.value.V1.kind.ProgrammableTransaction.inputs,commands:e.intentMessage.value.V1.kind.ProgrammableTransaction.commands});return{digest:t.digest,epoch:((o=t.effects)==null?void 0:o.executedEpoch)??null,effects:Xh(new Uint8Array(t.rawEffects)),objectTypes:Promise.resolve(n),transaction:{...r,bcs:s},signatures:e.txSignatures}}function Pw({bytes:t,effects:e,objectChanges:n}){var o;const s=[],r=[],i={};return n==null||n.forEach(a=>{var c,l,u,d;switch(a.type){case"published":s.push({id:a.packageId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"PackageWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:null,idOperation:"Created"});break;case"transferred":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:a.digest,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:cr(a.recipient),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"mutated":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.previousVersion,inputDigest:null,inputOwner:cr(a.owner),outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:cr(a.owner),idOperation:"None"}),i[a.objectId]=a.objectType;break;case"deleted":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:((l=(c=e.deleted)==null?void 0:c.find(f=>f.objectId===a.objectId))==null?void 0:l.digest)??null,inputOwner:null,outputState:"DoesNotExist",outputVersion:null,outputDigest:null,outputOwner:null,idOperation:"Deleted"}),i[a.objectId]=a.objectType;break;case"wrapped":s.push({id:a.objectId,inputState:"Exists",inputVersion:a.version,inputDigest:null,inputOwner:{$kind:"AddressOwner",AddressOwner:a.sender},outputState:"ObjectWrite",outputVersion:a.version,outputDigest:((d=(u=e.wrapped)==null?void 0:u.find(f=>f.objectId===a.objectId))==null?void 0:d.digest)??null,outputOwner:{$kind:"ObjectOwner",ObjectOwner:a.sender},idOperation:"None"}),i[a.objectId]=a.objectType;break;case"created":s.push({id:a.objectId,inputState:"DoesNotExist",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:a.version,outputDigest:a.digest,outputOwner:cr(a.owner),idOperation:"Created"}),i[a.objectId]=a.objectType;break}}),{objectTypes:i,effects:{bcs:t??null,digest:e.transactionDigest,version:2,status:e.status.status==="success"?{success:!0,error:null}:{success:!1,error:e.status.error},gasUsed:e.gasUsed,transactionDigest:e.transactionDigest,gasObject:{id:(o=e.gasObject)==null?void 0:o.reference.objectId,inputState:"Exists",inputVersion:null,inputDigest:null,inputOwner:null,outputState:"ObjectWrite",outputVersion:e.gasObject.reference.version,outputDigest:e.gasObject.reference.digest,outputOwner:cr(e.gasObject.owner),idOperation:"None"},eventsDigest:e.eventsDigest??null,dependencies:e.dependencies??[],lamportVersion:e.gasObject.reference.version,changedObjects:s,unchangedSharedObjects:r,auxiliaryDataDigest:null}}}const Rw=Z.struct("Balance",{value:Z.u64()}),$w=Z.struct("Coin",{id:Z.Address,balance:Rw}),Fw=Symbol.for("@mysten/SuiClient");class yc extends Eu{constructor(e){super({network:e.network??"unknown"}),this.jsonRpc=this,this.transport=e.transport??new bc({url:e.url}),this.core=new zw({jsonRpcClient:this,mvr:e.mvr})}get[Fw](){return!0}async getRpcApiVersion({signal:e}={}){return(await this.transport.request({method:"rpc.discover",params:[],signal:e})).info.version}async getCoins({coinType:e,owner:n,cursor:s,limit:r,signal:i}){if(!n||!en(le(n)))throw new Error("Invalid Sui address");return e&&xt(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getCoins",params:[n,e,s,r],signal:i})}async getAllCoins(e){if(!e.owner||!en(le(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllCoins",params:[e.owner,e.cursor,e.limit],signal:e.signal})}async getBalance({owner:e,coinType:n,signal:s}){if(!e||!en(le(e)))throw new Error("Invalid Sui address");return n&&xt(n)&&(n=(await this.core.mvr.resolveType({type:n})).type),await this.transport.request({method:"suix_getBalance",params:[e,n],signal:s})}async getAllBalances(e){if(!e.owner||!en(le(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getAllBalances",params:[e.owner],signal:e.signal})}async getCoinMetadata({coinType:e,signal:n}){return e&&xt(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getCoinMetadata",params:[e],signal:n})}async getTotalSupply({coinType:e,signal:n}){return e&&xt(e)&&(e=(await this.core.mvr.resolveType({type:e})).type),await this.transport.request({method:"suix_getTotalSupply",params:[e],signal:n})}async call(e,n,{signal:s}={}){return await this.transport.request({method:e,params:n,signal:s})}async getMoveFunctionArgTypes({package:e,module:n,function:s,signal:r}){return e&&Ut(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getMoveFunctionArgTypes",params:[e,n,s],signal:r})}async getNormalizedMoveModulesByPackage({package:e,signal:n}){return e&&Ut(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveModulesByPackage",params:[e],signal:n})}async getNormalizedMoveModule({package:e,module:n,signal:s}){return e&&Ut(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveModule",params:[e,n],signal:s})}async getNormalizedMoveFunction({package:e,module:n,function:s,signal:r}){return e&&Ut(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveFunction",params:[e,n,s],signal:r})}async getNormalizedMoveStruct({package:e,module:n,struct:s,signal:r}){return e&&Ut(e)&&(e=(await this.core.mvr.resolvePackage({package:e})).package),await this.transport.request({method:"sui_getNormalizedMoveStruct",params:[e,n,s],signal:r})}async getOwnedObjects(e){if(!e.owner||!en(le(e.owner)))throw new Error("Invalid Sui address");const n=e.filter?{...e.filter}:void 0;return n&&"MoveModule"in n&&Ut(n.MoveModule.package)?n.MoveModule={module:n.MoveModule.module,package:(await this.core.mvr.resolvePackage({package:n.MoveModule.package})).package}:n&&"StructType"in n&&xt(n.StructType)&&(n.StructType=(await this.core.mvr.resolveType({type:n.StructType})).type),await this.transport.request({method:"suix_getOwnedObjects",params:[e.owner,{filter:n,options:e.options},e.cursor,e.limit],signal:e.signal})}async getObject(e){if(!e.id||!$i(Fn(e.id)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"sui_getObject",params:[e.id,e.options],signal:e.signal})}async tryGetPastObject(e){return await this.transport.request({method:"sui_tryGetPastObject",params:[e.id,e.version,e.options],signal:e.signal})}async multiGetObjects(e){if(e.ids.forEach(s=>{if(!s||!$i(Fn(s)))throw new Error(`Invalid Sui Object id ${s}`)}),e.ids.length!==new Set(e.ids).size)throw new Error(`Duplicate object ids in batch call ${e.ids}`);return await this.transport.request({method:"sui_multiGetObjects",params:[e.ids,e.options],signal:e.signal})}async queryTransactionBlocks({filter:e,options:n,cursor:s,limit:r,order:i,signal:o}){return e&&"MoveFunction"in e&&Ut(e.MoveFunction.package)&&(e={...e,MoveFunction:{package:(await this.core.mvr.resolvePackage({package:e.MoveFunction.package})).package}}),await this.transport.request({method:"suix_queryTransactionBlocks",params:[{filter:e,options:n},s,r,(i||"descending")==="descending"],signal:o})}async getTransactionBlock(e){if(!xl(e.digest))throw new Error("Invalid Transaction digest");return await this.transport.request({method:"sui_getTransactionBlock",params:[e.digest,e.options],signal:e.signal})}async multiGetTransactionBlocks(e){if(e.digests.forEach(s=>{if(!xl(s))throw new Error(`Invalid Transaction digest ${s}`)}),e.digests.length!==new Set(e.digests).size)throw new Error(`Duplicate digests in batch call ${e.digests}`);return await this.transport.request({method:"sui_multiGetTransactionBlocks",params:[e.digests,e.options],signal:e.signal})}async executeTransactionBlock({transactionBlock:e,signature:n,options:s,requestType:r,signal:i}){const o=await this.transport.request({method:"sui_executeTransactionBlock",params:[typeof e=="string"?e:xe(e),Array.isArray(n)?n:[n],s],signal:i});if(r==="WaitForLocalExecution")try{await this.waitForTransaction({digest:o.digest})}catch{}return o}async signAndExecuteTransaction({transaction:e,signer:n,...s}){let r;e instanceof Uint8Array?r=e:(e.setSenderIfNotSet(n.toSuiAddress()),r=await e.build({client:this}));const{signature:i,bytes:o}=await n.signTransaction(r);return this.executeTransactionBlock({transactionBlock:o,signature:i,...s})}async getTotalTransactionBlocks({signal:e}={}){const n=await this.transport.request({method:"sui_getTotalTransactionBlocks",params:[],signal:e});return BigInt(n)}async getReferenceGasPrice({signal:e}={}){const n=await this.transport.request({method:"suix_getReferenceGasPrice",params:[],signal:e});return BigInt(n)}async getStakes(e){if(!e.owner||!en(le(e.owner)))throw new Error("Invalid Sui address");return await this.transport.request({method:"suix_getStakes",params:[e.owner],signal:e.signal})}async getStakesByIds(e){return e.stakedSuiIds.forEach(n=>{if(!n||!$i(Fn(n)))throw new Error(`Invalid Sui Stake id ${n}`)}),await this.transport.request({method:"suix_getStakesByIds",params:[e.stakedSuiIds],signal:e.signal})}async getLatestSuiSystemState({signal:e}={}){return await this.transport.request({method:"suix_getLatestSuiSystemState",params:[],signal:e})}async queryEvents({query:e,cursor:n,limit:s,order:r,signal:i}){return e&&"MoveEventType"in e&&xt(e.MoveEventType)&&(e={...e,MoveEventType:(await this.core.mvr.resolveType({type:e.MoveEventType})).type}),e&&"MoveEventModule"in e&&Ut(e.MoveEventModule.package)&&(e={...e,MoveEventModule:{module:e.MoveEventModule.module,package:(await this.core.mvr.resolvePackage({package:e.MoveEventModule.package})).package}}),"MoveModule"in e&&Ut(e.MoveModule.package)&&(e={...e,MoveModule:{module:e.MoveModule.module,package:(await this.core.mvr.resolvePackage({package:e.MoveModule.package})).package}}),await this.transport.request({method:"suix_queryEvents",params:[e,n,s,(r||"descending")==="descending"],signal:i})}async subscribeEvent(e){return this.transport.subscribe({method:"suix_subscribeEvent",unsubscribe:"suix_unsubscribeEvent",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async subscribeTransaction(e){return this.transport.subscribe({method:"suix_subscribeTransaction",unsubscribe:"suix_unsubscribeTransaction",params:[e.filter],onMessage:e.onMessage,signal:e.signal})}async devInspectTransactionBlock(e){var s,r;let n;if(Rh(e.transactionBlock))e.transactionBlock.setSenderIfNotSet(e.sender),n=xe(await e.transactionBlock.build({client:this,onlyTransactionKind:!0}));else if(typeof e.transactionBlock=="string")n=e.transactionBlock;else if(e.transactionBlock instanceof Uint8Array)n=xe(e.transactionBlock);else throw new Error("Unknown transaction block format.");return(s=e.signal)==null||s.throwIfAborted(),await this.transport.request({method:"sui_devInspectTransactionBlock",params:[e.sender,n,(r=e.gasPrice)==null?void 0:r.toString(),e.epoch],signal:e.signal})}async dryRunTransactionBlock(e){return await this.transport.request({method:"sui_dryRunTransactionBlock",params:[typeof e.transactionBlock=="string"?e.transactionBlock:xe(e.transactionBlock)]})}async getDynamicFields(e){if(!e.parentId||!$i(Fn(e.parentId)))throw new Error("Invalid Sui Object id");return await this.transport.request({method:"suix_getDynamicFields",params:[e.parentId,e.cursor,e.limit],signal:e.signal})}async getDynamicFieldObject(e){return await this.transport.request({method:"suix_getDynamicFieldObject",params:[e.parentId,e.name],signal:e.signal})}async getLatestCheckpointSequenceNumber({signal:e}={}){const n=await this.transport.request({method:"sui_getLatestCheckpointSequenceNumber",params:[],signal:e});return String(n)}async getCheckpoint(e){return await this.transport.request({method:"sui_getCheckpoint",params:[e.id],signal:e.signal})}async getCheckpoints(e){return await this.transport.request({method:"sui_getCheckpoints",params:[e.cursor,e==null?void 0:e.limit,e.descendingOrder],signal:e.signal})}async getCommitteeInfo(e){return await this.transport.request({method:"suix_getCommitteeInfo",params:[e==null?void 0:e.epoch],signal:e==null?void 0:e.signal})}async getNetworkMetrics({signal:e}={}){return await this.transport.request({method:"suix_getNetworkMetrics",params:[],signal:e})}async getAddressMetrics({signal:e}={}){return await this.transport.request({method:"suix_getLatestAddressMetrics",params:[],signal:e})}async getEpochMetrics(e){return await this.transport.request({method:"suix_getEpochMetrics",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getAllEpochAddressMetrics(e){return await this.transport.request({method:"suix_getAllEpochAddressMetrics",params:[e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getEpochs(e){return await this.transport.request({method:"suix_getEpochs",params:[e==null?void 0:e.cursor,e==null?void 0:e.limit,e==null?void 0:e.descendingOrder],signal:e==null?void 0:e.signal})}async getMoveCallMetrics({signal:e}={}){return await this.transport.request({method:"suix_getMoveCallMetrics",params:[],signal:e})}async getCurrentEpoch({signal:e}={}){return await this.transport.request({method:"suix_getCurrentEpoch",params:[],signal:e})}async getValidatorsApy({signal:e}={}){return await this.transport.request({method:"suix_getValidatorsApy",params:[],signal:e})}async getChainIdentifier({signal:e}={}){const n=await this.getCheckpoint({id:"0",signal:e}),s=mi(n.digest);return vs(s.slice(0,4))}async resolveNameServiceAddress(e){return await this.transport.request({method:"suix_resolveNameServiceAddress",params:[e.name],signal:e.signal})}async resolveNameServiceNames({format:e="dot",...n}){const{nextCursor:s,hasNextPage:r,data:i}=await this.transport.request({method:"suix_resolveNameServiceNames",params:[n.address,n.cursor,n.limit],signal:n.signal});return{hasNextPage:r,nextCursor:s,data:i.map(o=>ay(o,e))}}async getProtocolConfig(e){return await this.transport.request({method:"sui_getProtocolConfig",params:[e==null?void 0:e.version],signal:e==null?void 0:e.signal})}async verifyZkLoginSignature(e){return await this.transport.request({method:"sui_verifyZkLoginSignature",params:[e.bytes,e.signature,e.intentScope,e.author],signal:e.signal})}async waitForTransaction({signal:e,timeout:n=60*1e3,pollInterval:s=2*1e3,...r}){const i=AbortSignal.timeout(n),o=new Promise((a,c)=>{i.addEventListener("abort",()=>c(i.reason))});for(o.catch(()=>{});!i.aborted;){e==null||e.throwIfAborted();try{return await this.getTransactionBlock(r)}catch{await Promise.race([new Promise(c=>setTimeout(c,s)),o])}}throw i.throwIfAborted(),new Error("Unexpected error while waiting for transaction block.")}experimental_asClientExtension(){return{name:"jsonRPC",register:()=>this}}}function Vw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ja,ql;function Kw(){if(ql)return ja;ql=1;var t=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return ja=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}(),ja}const Ww="1.0.35",qw={version:Ww};var Gw=qw.version,Cs;if(typeof globalThis=="object")Cs=globalThis;else try{Cs=Kw()}catch{}finally{if(!Cs&&typeof window<"u"&&(Cs=window),!Cs)throw new Error("Could not determine global this")}var xi=Cs.WebSocket||Cs.MozWebSocket,Hw=Gw;function tp(t,e){var n;return e?n=new xi(t,e):n=new xi(t),n}xi&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(t){Object.defineProperty(tp,t,{get:function(){return xi[t]}})});var Yw={w3cwebsocket:xi?tp:null,version:Hw};const Qw=Vw(Yw),Zw=Qw.w3cwebsocket;class wt extends _n{static txInput(e,n,s=null){return n&&n.Pure&&n.Pure.bytes?e.pure(wt.pureInputToBytes(n)):e.pure(wt.pureInputToBytes(wt.pureInput(n,s)))}static pureInput(e,n){let s=e;if(s.toLowerCase()=="address"&&(s="Address"),Z[s])return typeof Z[s]=="object"?_t.Pure(Z[s].serialize(n)):_t.Pure(Z[s]().serialize(n));{const r=(""+s).split("<");if(r[0]=="vector"&&r[1]){const i=r[1].split(">");if(i[0]&&Z[i[0]])return _t.Pure(Z.vector(Z[i[0]]()).serialize(n))}}}static pureInputToBytes(e){return we(e.Pure.bytes)}static normalizeSuiAddress(e){return le(e)}static WebSocketConstructor(){return Zw}static suiClientForRPC(e={}){const n=e.providerName||e.chainname||e.chain;delete e.providerName,delete e.chainName,delete e.chain,e.WebSocketConstructor=wt.WebSocketConstructor();const s=new bc(e),r=new yc({transport:s});return r.providerName=n,r}static suiClientFor(e){return new yc({transport:new bc({url:jw(e),WebSocketConstructor:wt.WebSocketConstructor()})})}static normalizeClient(e){let n=null,s=null;if(e)if(e=="local"||e.constructor&&e.constructor.name&&e.constructor.name=="SuiLocalTestValidator")e=="local"?(n=wt.suiClientFor("localnet"),s="sui:localnet"):(s=e.providerName,n=e.client);else if(e=="test"||e=="testnet")n=wt.suiClientFor("testnet"),s="sui:testnet";else if(e=="dev"||e=="devnet")n=wt.suiClientFor("devnet"),s="sui:devnet";else if(e=="main"||e=="mainnet")n=wt.suiClientFor("mainnet"),s="sui:mainnet";else if(e&&e.constructor&&(e.endpoint||e.transport)){n=e;let r="";e.endpoint?r=e.endpoint:e.transport&&e.transport.websocketClient&&e.transport.websocketClient.endpoint&&(r=e.transport.websocketClient.endpoint),e.providerName?(s=e.providerName,["devnet","mainnet","testnet","localnet"].indexOf(e.providerName)!=-1&&(s="sui:"+e.providerName)):r.indexOf("devnet")!==-1?s="sui:devnet":r.indexOf("testnet")!==-1?s="sui:testnet":r.indexOf("mainnet")!==-1?s="sui:mainnet":r.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=r.split("//")[1]}else e&&e.connection&&e.connection.fullnode&&(n=e,e.connection.fullnode.indexOf("devnet")!==-1?s="sui:devnet":e.connection.fullnode.indexOf("testnet")!==-1?s="sui:testnet":e.connection.fullnode.indexOf("mainnet")!==-1?s="sui:mainnet":e.connection.fullnode.indexOf("127.0.0.1")!==-1?s="sui:localnet":s=e.connection.fullnode);return n?(n.providerName=s,n):null}}class Hs extends _n{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for suiPackage");this._id=e.id||null,this._version=e.version||null,this._type=e.type||null,this._fields={},this._display={},this._owner=null,this._localProperties={},this._isDeleted=!1,e.objectChange&&this.tryToFillDataFromObjectChange(e.objectChange),this._constructedAt=new Date}get constructedAt(){return this._constructedAt}static idsEqual(e,n){return le(e)===le(n)}get isDeleted(){return this._isDeleted}get isShared(){return this._owner&&this._owner.Shared}get isImmutable(){return this._owner&&this._owner=="Immutable"}isOwnedBy(e){let n=e;return n.id&&(n=n.id),!!(this._owner&&this._owner.AddressOwner&&this._owner.AddressOwner==n)}markAsDeleted(){this._isDeleted=!0}get id(){return this._id}get type(){return this._type}get typeName(){return this._type?(""+this._type).split("<")[0].split("::").pop():null}idEquals(e){if(!e)return!1;const n=this.address;return!!(n&&n===le(e))}get address(){try{return le(this._id)}catch{return null}}get fields(){return this._fields}get display(){return this._display}get localProperties(){return this._localProperties}get version(){return this._version}async getPastObject(e=null){e||(e=this._version-BigInt(1)),e=Number(e);const n=await this._suiMaster._client.tryGetPastObject({version:e,id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});return n&&n.details&&n.details.objectId?new Hs({suiMaster:this._suiMaster,debug:this._debug,objectChange:n.details}):null}async queryTransactionBlocks(e={}){const n={filter:{InputObject:this.address},limit:e.limit||10,options:{showInput:!0,showEffects:!0,showEvents:!0,showObjectChanges:!0,showBalanceChanges:!0,showContent:!0,showOwner:!0,showDisplay:!0}},s=new ms({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"queryTransactionBlocks",order:e.order});return await s.fetch(),s}async getDynamicFields(e={}){const n={parentId:this.address,limit:e.limit||50},s=new ms({debug:this._debug,suiMaster:this._suiMaster,params:n,method:"getDynamicFields",order:e.order});return await s.fetch(),s}async fetchFields(){const e=await this._suiMaster._client.getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});e&&e.data&&this.tryToFillDataFromObjectChange(e.data)}replaceWithSuiObjectIfNeeded(e){return!e||!e.version||!e.id||!this.idEquals(e.id)?!1:!this.version||e.version>this.version?(this._type=e.type,this._owner=e._owner,this._fields=e._fields,this._display=e._display,this._version=e.version,e.isDeleted&&this.markAsDeleted(),!0):!1}tryToFillDataFromObjectChange(e){var n,s,r,i;if(!e.objectId&&e.data&&e.data.objectId&&(e=e.data),e.type&&e.type=="deleted"&&this.markAsDeleted(),e.objectId){if(!this._id)this._id=e.objectId;else if(!this.idEquals(e.objectId))throw new Error("Trying to fill from different object");e.type&&!this._type&&(this._type=e.type)}if(e.version&&(this._version=BigInt(e.version)),e.objectType&&(this._type=`${e.objectType}`),(n=e==null?void 0:e.content)!=null&&n.fields)for(const o in(s=e==null?void 0:e.content)==null?void 0:s.fields)o!=="id"&&(this._fields[o]=e.content.fields[o]);if((r=e==null?void 0:e.display)!=null&&r.data)for(const o in(i=e==null?void 0:e.display)==null?void 0:i.data)this._display[o]=e.display.data[o];e.owner&&(this._owner=e.owner)}}class Xw extends _n{constructor(e={}){if(super(e),this._package=e.package,!this._package)throw new Error("package is required for SuiPackageModule");if(this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is requried for SuiPackageModule");if(this._moduleName=e.moduleName,!this._moduleName)throw new Error("moduleName is required for SuiPackageModule");this._checkedOnChain=!1,this._normalizedMoveModule={},this._unsubscribeFunction=null}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async getNormalizedMoveFunction(e){const n=await this.getNormalizedPackageAddress();return await this._suiMaster._client.getMoveFunctionArgTypes({package:n,module:this._moduleName,function:e})}async subscribeEvents(){this.log("subscribing to events of module",this._moduleName);const e=await this.getNormalizedPackageAddress(),n=s=>{const r=new Xc({suiMaster:this._suiMaster,debug:this._debug,data:s}),i=r.typeName;this.log("got event",i),this.emit(i,r),this.emit("event",r,!0)};this._unsubscribeFunction=await this._suiMaster._client.subscribeEvent({filter:{MoveModule:{package:e,module:this._moduleName}},onMessage:n})}async unsubscribeEvents(){return this._unsubscribeFunction?(await this._unsubscribeFunction(),this._unsubscribeFunction=null,!0):!1}get objectStorage(){return this._suiMaster.objectStorage}get objects(){return this.objectStorage._objects}get objectsArray(){return this.objectStorage.asArray()}pushObject(e){let n=`${e}`;e.address&&(n=e.address);try{if(n=le(n),!this.objectStorage.byAddress(n))if(e.address)this.objectStorage.push(e);else{const s=new Hs({suiMaster:this._suiMaster,debug:this._debug,id:n});this.objectStorage.push(s),this.emit("added",s)}return this.objectStorage.byAddress(n)}catch(s){this.log("error",s)}return null}async moveCall(e,n,s){await this._package.checkOnChainIfNeeded();let r=null;if(n.tx)r=n.tx;else{r=new _r;const u=[];for(let d of n)if(d&&d.type&&d.amount){const f=this._suiMaster.address,g=await(await this._suiMaster.suiCoins.get(d.type)).coinOfAmountToTxCoin(r,f,d.amount);u.push(g)}else if(d&&Array.isArray(d)&&d.length==1&&d[0].type&&d[0].amount){const f=this._suiMaster.address,p=await this._suiMaster.suiCoins.get(d[0].type),g=await p.coinOfAmountToTxCoin(r,f,d[0].amount);u.push(r.makeMoveVec({type:p.coinObjectType,elements:[g]}))}else typeof d=="string"&&d.indexOf("0x")===0?u.push(r.object(d)):d&&d.Pure&&d.Pure.bytes?u.push(this._suiMaster.utils.txInput(r,d)):u.push(r.pure(d));r.moveCall({target:`${this._package.address}::${this._moduleName}::${e}`,arguments:u,typeArguments:s})}const i=await this._suiMaster.signAndExecuteTransaction({transaction:r,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0,showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),o=new this._suiMaster.SuiTransaction({suiMaster:this._suiMaster,debug:this._debug,data:i});o.status;const a=[],c=[],l=[];for(const u of o.results.objects)this.objectStorage.byAddress(u.id)?this.objectStorage.byAddress(u.id).replaceWithSuiObjectIfNeeded(u):(this.objectStorage.push(u),this.emit("added",u));for(const u of o.results.deleted)this.objectStorage.byAddress(u.id)&&(this.objectStorage.byAddress(u.id).markAsDeleted(),l.push(this.objectStorage.byAddress(u.id)),this.emit("deleted",this.objectStorage.byAddress(u.id)));await this.fetchObjects();for(const u of o.results.created)if(this.objectStorage.byAddress(u.id))a.push(this.objectStorage.byAddress(u.id)),this.emit("created",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.results.mutated)if(this.objectStorage.byAddress(u.id))c.push(this.objectStorage.byAddress(u.id)),this.emit("mutated",this.objectStorage.byAddress(u.id));else throw new Error("something is wrong!");for(const u of o.events)this.emit(u.typeName,u);return o}async getOwnedObjects(e={}){const n=await this.getNormalizedPackageAddress(),s={owner:this._suiMaster.address,filter:{MoveModule:{package:n,module:this._moduleName}},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};e.typeName&&(s.filter={StructType:`${n}::${this._moduleName}::${e.typeName}`});const r=new ms({debug:this._debug,suiMaster:this._suiMaster,params:s,method:"getOwnedObjects",order:e.order});return await r.fetch(),r}async fetchEvents(e={}){const n={};let s=await this.getNormalizedPackageAddress();e.eventTypeName?(n.MoveEventType=`${s}::${this._moduleName}::${e.eventTypeName}`,this.log("queriying for events of type: ",n.MoveEventType)):(n.MoveModule={package:s,module:this._moduleName},this.log("queriying for all events of module: ",this._moduleName));const r={descending_order:!1,query:n,limit:e.limit||50},i=new ms({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"queryEvents",order:e.order});return await i.fetch(),i}async fetchObjects(){return await this.objectStorage.fetchObjects()}async getNormalizedPackageAddress(){if(await this.checkOnChainIfNeeded(),this._normalizedMoveModule&&this._normalizedMoveModule.address)return this._normalizedMoveModule.address}async checkOnChainIfNeeded(){if(this._checkedOnChain)return!0;const e=await this._suiMaster._client.getNormalizedMoveModule({package:this._package.address,module:this._moduleName});return e&&e.address&&(this._normalizedMoveModule=e,this._checkedOnChain=!0),!0}}class Jw extends Hs{constructor(e={}){super(e),this._path=e.path,this._id=e.id||null,this._expectedModules=e.modules||null,this._isPublished=!1,this._publishedVersion=null,this._upgradeCap=null,this._upgradeCapId=null,this._isBuilt=!1,this._builtModules=null,this._builtDependencies=null,this._builtDigest=null,this._modules={}}get objectStorage(){return this._suiMaster.objectStorage}get modules(){return this._modules}async getModule(e){return await this.checkOnChainIfNeeded(),this._modules[e]}get isBuilt(){return this._isBuilt}get version(){return Number(this._publishedVersion)}async isOnChain(){try{await this.checkOnChainIfNeeded()}catch(e){console.error(e)}return!!(this._publishedVersion&&this._isPublished&&this.address)}arg(e,n){return this._suiMaster.utils.pureInput(e,n)}async moveCall(e,n,s,r){return await this.checkOnChainIfNeeded(),await this.modules[e].moveCall(n,s,r)}async fetchEvents(e,n={}){return await this.checkOnChainIfNeeded(),await this.modules[e].fetchEvents(n)}async checkOnChainIfNeeded(){if(this._isPublished)return!0;if(!this._id&&!this._expectedModules&&this._path&&(this._expectedModules=await this.getModulesNamesFromBuild()),!this._id&&this._expectedModules&&(this._id=await this.tryToFindByExpectedModules()),!this._id)throw new Error("no package id, nothing to check. Maybe lets start with .publish() ?");if(await this.getVersionOnChain())return this._isPublished=!0,!0}async tryToFindByExpectedModules(){this.log("trying to find Package by expected modules in its content...");const e=[];let n=this._expectedModules;Array.isArray(this._expectedModules)||(n=(""+this._expectedModules).split(",")),n.forEach(u=>{u.trim()&&e.indexOf(u.trim())===-1&&e.push(u.trim())}),this.log("looking for modules",e);const s=[],r={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};await new ms({debug:this._debug,suiMaster:this._suiMaster,params:r,method:"getOwnedObjects"}).forEach(u=>{const d=u.fields.package;d&&s.indexOf(d)===-1&&s.push(d)});const o=await this._suiMaster._client.multiGetObjects({ids:s,options:{showType:!0,showContent:!0}});let a=BigInt(0),c=null,l=0;for(const u of o){let d=!0;e.forEach(p=>{var g,m;(m=(g=u==null?void 0:u.data)==null?void 0:g.content)!=null&&m.disassembled[p]||(d=!1)});const f=BigInt(u.data.version);d&&l++,f>a&&(a=f,c=u.data.objectId)}return this.log("found packages with needed modules",l),c?(this.log("the one with most recent Publisher version is",c,"version",a),c):null}async getVersionOnChain(){var s,r,i,o,a,c;this.log("geting package version previously published on chain...");const n=await(await this._suiMaster.getClient()).getObject({id:this.address,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0,showPreviousTransaction:!0,showBcs:!1,showStorageRebate:!0}});if((s=n==null?void 0:n.data)!=null&&s.version&&(this._publishedVersion=BigInt((r=n==null?void 0:n.data)==null?void 0:r.version),this._isPublished=!0),(o=(i=n==null?void 0:n.data)==null?void 0:i.content)!=null&&o.disassembled)for(const l in(c=(a=n==null?void 0:n.data)==null?void 0:a.content)==null?void 0:c.disassembled)this.attachModule(l);return this.log("on chain version",this._publishedVersion,"with modules",Object.keys(this._modules)),this._publishedVersion}attachModule(e){return this._modules[e]?!1:(this._modules[e]=new Xw({suiMaster:this._suiMaster,debug:this._debug,moduleName:e,package:this}),this._modules[e].addEventListener("added",n=>{const s=n.detail;this.emit("added",s)}),!0)}async getUpgradeCapId(){var s,r,i;if(this._upgradeCap)return this._upgradeCap.address;this.log("trying to find UpgradeCap for this package in owned objects...");let e=!1,n=null;do{const o={owner:this._suiMaster.address,filter:{StructType:"0x2::package::UpgradeCap"},limit:50,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}};n&&(o.cursor=n);const a=await this._suiMaster._client.getOwnedObjects(o);a.hasNextPage&&a.nextCursor?(e=!0,n=a.nextCursor):e=!1;for(const c of a.data)if(((i=(r=(s=c==null?void 0:c.data)==null?void 0:s.content)==null?void 0:r.fields)==null?void 0:i.package)==this._id)return this._upgradeCap=new Hs({id:c.data.objectId,suiMaster:this._suiMaster,debug:this._debug}),this.log("found UpgradeCap",this._upgradeCap.address),this._upgradeCap.address}while(e&&!this._upgradeCap);return this.log("no UpgradeCap for this package found. Are you sure you work with most recent version of the package?"),null}async storeInfoFromPublishResult(e){if(e&&e.objectChanges&&e.objectChanges.length){for(const n of e.objectChanges){if(n.type==="published"&&n.packageId&&(this._id=le(n.packageId),this._isPublished=!0,n.version&&(this._publishedVersion=BigInt(n.version)),n.modules))for(const s of n.modules)this.attachModule(s);n.type==="created"&&n.objectType.indexOf("::package::UpgradeCap")!==-1&&(this._upgradeCapId=n.objectId,this.log("UpgradeCap",this._upgradeCapId))}for(const n of e.objectChanges)if(n.objectId&&n.objectType&&n.type&&(n.type=="created"||n.type=="mutated"))for(const s in this._modules){const r=this._modules[s].pushObject(n.objectId);r&&r.tryToFillDataFromObjectChange(n)}return this.log("got results:",this.address,"version",this._publishedVersion,"with modules",Object.keys(this._modules)),!0}else return this.log("nothing is found in publish result. storing old values"),!1}async publish(e={}){if(this._isBuilt||await this.build(e),this.address)throw new Error("already published. Maybe you need to upgrade() it?");this.log("publishing package...");const n=new _r,[s]=n.publish({modules:this._builtModules,dependencies:this._builtDependencies});n.transferObjects([s],this._suiMaster.address);const r=await this._suiMaster.signAndExecuteTransaction({transaction:n,requestType:"WaitForLocalExecution",options:{showEffects:!0,showEvents:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(r)&&this.log("published"),this.address}async upgrade(e={}){await this.checkOnChainIfNeeded(),this._isBuilt||await this.build(e),this.log("upgrading package...");const n=new _r,s=n.object(await this.getUpgradeCapId()),i=[s,this._suiMaster.utils.txInput(n,"u8",0),this._suiMaster.utils.txInput(n,"vector<u8>",this._builtDigest)],o=n.moveCall({target:"0x2::package::authorize_upgrade",arguments:i}),a=n.upgrade({modules:this._builtModules,dependencies:this._builtDependencies,package:this.address,ticket:o});n.moveCall({target:"0x2::package::commit_upgrade",arguments:[s,a]});const c=await this._suiMaster.signAndExecuteTransaction({transaction:n,options:{showEffects:!0,showObjectChanges:!0}});return await this.storeInfoFromPublishResult(c)&&this.log("upgraded"),this.address}async build(e={}){this.log("building a package...");const n=this._path;if(!n)throw new Error("Cant build a package with no path defined");if(e.env){this.log("switching environment to",e.env);const c=await wa.exec(`sui client switch --env ${e.env}`);this.log(c)}let s=`sui move build --dump-bytecode-as-base64 --path ${n}`;e.withUnpublishedDependencies&&(s=`sui move build --with-unpublished-dependencies --dump-bytecode-as-base64 --path ${n}`);const r=await wa.exec(s),{modules:i,dependencies:o,digest:a}=JSON.parse(r);return this._builtModules=i,this._builtDependencies=o,this._builtDigest=a,this._isBuilt=!0,this.log("package built"),!0}async getModulesNamesFromBuild(){this.log("tring to get modules names from local package path...");try{return wa.getModulesNamesFromPackagePath(this._path)}catch(e){throw this.log(e),new Error("can not get modules names from local package path")}}}class np extends lu{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,cu(e);const s=ws(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,i=new Uint8Array(r);i.set(s.length>r?e.create().update(s).digest():s);for(let o=0;o<i.length;o++)i[o]^=54;this.iHash.update(i),this.oHash=e.create();for(let o=0;o<i.length;o++)i[o]^=106;this.oHash.update(i),Gt(i)}update(e){return Ir(this),this.iHash.update(e),this}digestInto(e){Ir(this),ut(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:s,finished:r,destroyed:i,blockLen:o,outputLen:a}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=s._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ys=(t,e,n)=>new np(t,e).update(n).digest();Ys.create=(t,e)=>new np(t,e);function e1(t,e,n,s){cu(t);const r=Ry({dkLen:32,asyncTick:10},s),{c:i,dkLen:o,asyncTick:a}=r;if(Wn(i),Wn(o),Wn(a),i<1)throw new Error("iterations (c) should be >= 1");const c=Al(e),l=Al(n),u=new Uint8Array(o),d=Ys.create(t,c),f=d._cloneInto().update(l);return{c:i,dkLen:o,asyncTick:a,DK:u,PRF:d,PRFSalt:f}}function t1(t,e,n,s,r){return t.destroy(),e.destroy(),s&&s.destroy(),Gt(r),n}function n1(t,e,n,s){const{c:r,dkLen:i,DK:o,PRF:a,PRFSalt:c}=e1(t,e,n,s);let l;const u=new Uint8Array(4),d=Fs(u),f=new Uint8Array(a.outputLen);for(let p=1,g=0;g<i;p++,g+=a.outputLen){const m=o.subarray(g,g+a.outputLen);d.setInt32(0,p,!1),(l=c._cloneInto(l)).update(u).digestInto(f),m.set(f.subarray(0,m.length));for(let _=1;_<r;_++){a._cloneInto(l).update(f).digestInto(f);for(let w=0;w<m.length;w++)m[w]^=f[w]}}return t1(a,c,o,l,f)}const s1=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Jn=new Uint32Array(64);class r1 extends fu{constructor(e=32){super(64,e,8,!1),this.A=Qn[0]|0,this.B=Qn[1]|0,this.C=Qn[2]|0,this.D=Qn[3]|0,this.E=Qn[4]|0,this.F=Qn[5]|0,this.G=Qn[6]|0,this.H=Qn[7]|0}get(){const{A:e,B:n,C:s,D:r,E:i,F:o,G:a,H:c}=this;return[e,n,s,r,i,o,a,c]}set(e,n,s,r,i,o,a,c){this.A=e|0,this.B=n|0,this.C=s|0,this.D=r|0,this.E=i|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,n){for(let d=0;d<16;d++,n+=4)Jn[d]=e.getUint32(n,!1);for(let d=16;d<64;d++){const f=Jn[d-15],p=Jn[d-2],g=pn(f,7)^pn(f,18)^f>>>3,m=pn(p,17)^pn(p,19)^p>>>10;Jn[d]=m+Jn[d-7]+g+Jn[d-16]|0}let{A:s,B:r,C:i,D:o,E:a,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const f=pn(a,6)^pn(a,11)^pn(a,25),p=u+f+Ky(a,c,l)+s1[d]+Jn[d]|0,m=(pn(s,2)^pn(s,13)^pn(s,22))+Wy(s,r,i)|0;u=l,l=c,c=a,a=o+p|0,o=i,i=r,r=s,s=p+m|0}s=s+this.A|0,r=r+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(s,r,i,o,a,c,l,u)}roundClean(){Gt(Jn)}destroy(){this.set(0,0,0,0,0,0,0,0),Gt(this.buffer)}}const sp=qy(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),i1=sp[0],o1=sp[1],es=new Uint32Array(80),ts=new Uint32Array(80);class rp extends fu{constructor(e=64){super(128,e,16,!1),this.Ah=rt[0]|0,this.Al=rt[1]|0,this.Bh=rt[2]|0,this.Bl=rt[3]|0,this.Ch=rt[4]|0,this.Cl=rt[5]|0,this.Dh=rt[6]|0,this.Dl=rt[7]|0,this.Eh=rt[8]|0,this.El=rt[9]|0,this.Fh=rt[10]|0,this.Fl=rt[11]|0,this.Gh=rt[12]|0,this.Gl=rt[13]|0,this.Hh=rt[14]|0,this.Hl=rt[15]|0}get(){const{Ah:e,Al:n,Bh:s,Bl:r,Ch:i,Cl:o,Dh:a,Dl:c,Eh:l,El:u,Fh:d,Fl:f,Gh:p,Gl:g,Hh:m,Hl:_}=this;return[e,n,s,r,i,o,a,c,l,u,d,f,p,g,m,_]}set(e,n,s,r,i,o,a,c,l,u,d,f,p,g,m,_){this.Ah=e|0,this.Al=n|0,this.Bh=s|0,this.Bl=r|0,this.Ch=i|0,this.Cl=o|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=u|0,this.Fh=d|0,this.Fl=f|0,this.Gh=p|0,this.Gl=g|0,this.Hh=m|0,this.Hl=_|0}process(e,n){for(let v=0;v<16;v++,n+=4)es[v]=e.getUint32(n),ts[v]=e.getUint32(n+=4);for(let v=16;v<80;v++){const T=es[v-15]|0,F=ts[v-15]|0,ae=cs(T,F,1)^cs(T,F,8)^Tl(T,F,7),de=us(T,F,1)^us(T,F,8)^Ol(T,F,7),re=es[v-2]|0,E=ts[v-2]|0,W=cs(re,E,19)^Gr(re,E,61)^Tl(re,E,6),ee=us(re,E,19)^Hr(re,E,61)^Ol(re,E,6),H=Yy(de,ee,ts[v-7],ts[v-16]),x=Qy(H,ae,W,es[v-7],es[v-16]);es[v]=x|0,ts[v]=H|0}let{Ah:s,Al:r,Bh:i,Bl:o,Ch:a,Cl:c,Dh:l,Dl:u,Eh:d,El:f,Fh:p,Fl:g,Gh:m,Gl:_,Hh:w,Hl:D}=this;for(let v=0;v<80;v++){const T=cs(d,f,14)^cs(d,f,18)^Gr(d,f,41),F=us(d,f,14)^us(d,f,18)^Hr(d,f,41),ae=d&p^~d&m,de=f&g^~f&_,re=Zy(D,F,de,o1[v],ts[v]),E=Xy(re,w,T,ae,i1[v],es[v]),W=re|0,ee=cs(s,r,28)^Gr(s,r,34)^Gr(s,r,39),H=us(s,r,28)^Hr(s,r,34)^Hr(s,r,39),x=s&i^s&a^i&a,S=r&o^r&c^o&c;w=m|0,D=_|0,m=p|0,_=g|0,p=d|0,g=f|0,{h:d,l:f}=Yt(l|0,u|0,E|0,W|0),l=a|0,u=c|0,a=i|0,c=o|0,i=s|0,o=r|0;const M=hu(W,H,S);s=pu(M,E,ee,x),r=M|0}({h:s,l:r}=Yt(this.Ah|0,this.Al|0,s|0,r|0)),{h:i,l:o}=Yt(this.Bh|0,this.Bl|0,i|0,o|0),{h:a,l:c}=Yt(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:u}=Yt(this.Dh|0,this.Dl|0,l|0,u|0),{h:d,l:f}=Yt(this.Eh|0,this.El|0,d|0,f|0),{h:p,l:g}=Yt(this.Fh|0,this.Fl|0,p|0,g|0),{h:m,l:_}=Yt(this.Gh|0,this.Gl|0,m|0,_|0),{h:w,l:D}=Yt(this.Hh|0,this.Hl|0,w|0,D|0),this.set(s,r,i,o,a,c,l,u,d,f,p,g,m,_,w,D)}roundClean(){Gt(es,ts)}destroy(){Gt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class a1 extends rp{constructor(){super(48),this.Ah=st[0]|0,this.Al=st[1]|0,this.Bh=st[2]|0,this.Bl=st[3]|0,this.Ch=st[4]|0,this.Cl=st[5]|0,this.Dh=st[6]|0,this.Dl=st[7]|0,this.Eh=st[8]|0,this.El=st[9]|0,this.Fh=st[10]|0,this.Fl=st[11]|0,this.Gh=st[12]|0,this.Gl=st[13]|0,this.Hh=st[14]|0,this.Hl=st[15]|0}}const Ur=ea(()=>new r1),Ar=ea(()=>new rp),c1=ea(()=>new a1);/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const u1=t=>t[0]==="あいこくしん";function ip(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);return t.normalize("NFKD")}function l1(t){const e=ip(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function d1(t){ut(t,16,20,24,28,32)}const f1=t=>{const e=8-t.length/4;return new Uint8Array([Ur(t)[0]>>e<<e])};function h1(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error("wordlist: non-string element: "+e)}),Ri.chain(Ri.checksum(1,f1),Ri.radix2(11,!0),Ri.alphabet(t))}function p1(t,e){return d1(t),h1(e).encode(t).join(u1(e)?"　":" ")}const g1=t=>ip("mnemonic"+t);function b1(t,e=""){return n1(Ar,l1(t).nfkd,g1(e),{c:2048,dkLen:64})}const y1=`abandon
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
`);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _u=BigInt(0),mc=BigInt(1);function Qs(t,e=""){if(typeof t!="boolean"){const n=e&&`"${e}"`;throw new Error(n+"expected boolean, got type="+typeof t)}return t}function an(t,e,n=""){const s=Ti(t),r=t==null?void 0:t.length,i=e!==void 0;if(!s||i&&r!==e){const o=n&&`"${n}" `,a=i?` of length ${e}`:"",c=s?`length=${r}`:`type=${typeof t}`;throw new Error(o+"expected Uint8Array"+a+", got "+c)}return t}function qi(t){const e=t.toString(16);return e.length&1?"0"+e:e}function op(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?_u:BigInt("0x"+t)}function sa(t){return op(Wt(t))}function Ei(t){return ut(t),op(Wt(Uint8Array.from(t).reverse()))}function Au(t,e){return xr(t.toString(16).padStart(e*2,"0"))}function ap(t,e){return Au(t,e).reverse()}function Fe(t,e,n){let s;if(typeof e=="string")try{s=xr(e)}catch(i){throw new Error(t+" must be hex string or Uint8Array, cause: "+i)}else if(Ti(e))s=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const r=s.length;if(typeof n=="number"&&r!==n)throw new Error(t+" of length "+n+" expected, got "+r);return s}function Gl(t){return Uint8Array.from(t)}const Ca=t=>typeof t=="bigint"&&_u<=t;function m1(t,e,n){return Ca(t)&&Ca(e)&&Ca(n)&&e<=t&&t<n}function wc(t,e,n,s){if(!m1(e,n,s))throw new Error("expected valid "+t+": "+n+" <= n < "+s+", got "+e)}function cp(t){let e;for(e=0;t>_u;t>>=mc,e+=1);return e}const Ci=t=>(mc<<BigInt(t))-mc;function w1(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");const s=p=>new Uint8Array(p),r=p=>Uint8Array.of(p);let i=s(t),o=s(t),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},l=(...p)=>n(o,i,...p),u=(p=s(0))=>{o=l(r(0),p),i=l(),p.length!==0&&(o=l(r(1),p),i=l())},d=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let p=0;const g=[];for(;p<e;){i=l();const m=i.slice();g.push(m),p+=i.length}return Et(...g)};return(p,g)=>{c(),u(p);let m;for(;!(m=g(d()));)u();return c(),m}}function ki(t,e,n={}){if(!t||typeof t!="object")throw new Error("expected valid options object");function s(r,i,o){const a=t[r];if(o&&a===void 0)return;const c=typeof a;if(c!==i||a===null)throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`)}Object.entries(e).forEach(([r,i])=>s(r,i,!1)),Object.entries(n).forEach(([r,i])=>s(r,i,!0))}function zo(t){const e=new WeakMap;return(n,...s)=>{const r=e.get(n);if(r!==void 0)return r;const i=t(n,...s);return e.set(n,i),i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const At=BigInt(0),tt=BigInt(1),Ls=BigInt(2),up=BigInt(3),lp=BigInt(4),dp=BigInt(5),v1=BigInt(7),fp=BigInt(8),S1=BigInt(9),hp=BigInt(16);function We(t,e){const n=t%e;return n>=At?n:e+n}function Re(t,e,n){let s=t;for(;e-- >At;)s*=s,s%=n;return s}function Hl(t,e){if(t===At)throw new Error("invert: expected non-zero number");if(e<=At)throw new Error("invert: expected positive modulus, got "+e);let n=We(t,e),s=e,r=At,i=tt;for(;n!==At;){const a=s/n,c=s%n,l=r-i*a;s=n,n=c,r=i,i=l}if(s!==tt)throw new Error("invert: does not exist");return We(r,e)}function Nu(t,e,n){if(!t.eql(t.sqr(e),n))throw new Error("Cannot find square root")}function pp(t,e){const n=(t.ORDER+tt)/lp,s=t.pow(e,n);return Nu(t,s,e),s}function M1(t,e){const n=(t.ORDER-dp)/fp,s=t.mul(e,Ls),r=t.pow(s,n),i=t.mul(e,r),o=t.mul(t.mul(i,Ls),r),a=t.mul(i,t.sub(o,t.ONE));return Nu(t,a,e),a}function I1(t){const e=Nn(t),n=gp(t),s=n(e,e.neg(e.ONE)),r=n(e,s),i=n(e,e.neg(s)),o=(t+v1)/hp;return(a,c)=>{let l=a.pow(c,o),u=a.mul(l,s);const d=a.mul(l,r),f=a.mul(l,i),p=a.eql(a.sqr(u),c),g=a.eql(a.sqr(d),c);l=a.cmov(l,u,p),u=a.cmov(f,d,g);const m=a.eql(a.sqr(u),c),_=a.cmov(l,u,m);return Nu(a,_,c),_}}function gp(t){if(t<up)throw new Error("sqrt is not defined for small field");let e=t-tt,n=0;for(;e%Ls===At;)e/=Ls,n++;let s=Ls;const r=Nn(t);for(;Yl(r,s)===1;)if(s++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return pp;let i=r.pow(s,e);const o=(e+tt)/Ls;return function(c,l){if(c.is0(l))return l;if(Yl(c,l)!==1)throw new Error("Cannot find square root");let u=n,d=c.mul(c.ONE,i),f=c.pow(l,e),p=c.pow(l,o);for(;!c.eql(f,c.ONE);){if(c.is0(f))return c.ZERO;let g=1,m=c.sqr(f);for(;!c.eql(m,c.ONE);)if(g++,m=c.sqr(m),g===u)throw new Error("Cannot find square root");const _=tt<<BigInt(u-g-1),w=c.pow(d,_);u=g,d=c.sqr(w),f=c.mul(f,d),p=c.mul(p,w)}return p}}function x1(t){return t%lp===up?pp:t%fp===dp?M1:t%hp===S1?I1(t):gp(t)}const E1=(t,e)=>(We(t,e)&tt)===tt,_1=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function A1(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},n=_1.reduce((s,r)=>(s[r]="function",s),e);return ki(t,n),t}function N1(t,e,n){if(n<At)throw new Error("invalid exponent, negatives unsupported");if(n===At)return t.ONE;if(n===tt)return e;let s=t.ONE,r=e;for(;n>At;)n&tt&&(s=t.mul(s,r)),r=t.sqr(r),n>>=tt;return s}function bp(t,e,n=!1){const s=new Array(e.length).fill(n?t.ZERO:void 0),r=e.reduce((o,a,c)=>t.is0(a)?o:(s[c]=o,t.mul(o,a)),t.ONE),i=t.inv(r);return e.reduceRight((o,a,c)=>t.is0(a)?o:(s[c]=t.mul(o,s[c]),t.mul(o,a)),i),s}function Yl(t,e){const n=(t.ORDER-tt)/Ls,s=t.pow(e,n),r=t.eql(s,t.ONE),i=t.eql(s,t.ZERO),o=t.eql(s,t.neg(t.ONE));if(!r&&!i&&!o)throw new Error("invalid Legendre symbol result");return r?1:i?0:-1}function yp(t,e){e!==void 0&&Wn(e);const n=e!==void 0?e:t.toString(2).length,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}function Nn(t,e,n=!1,s={}){if(t<=At)throw new Error("invalid field: expected ORDER > 0, got "+t);let r,i,o=!1,a;if(typeof e=="object"&&e!=null){if(s.sqrt||n)throw new Error("cannot specify opts in two arguments");const f=e;f.BITS&&(r=f.BITS),f.sqrt&&(i=f.sqrt),typeof f.isLE=="boolean"&&(n=f.isLE),typeof f.modFromBytes=="boolean"&&(o=f.modFromBytes),a=f.allowedLengths}else typeof e=="number"&&(r=e),s.sqrt&&(i=s.sqrt);const{nBitLength:c,nByteLength:l}=yp(t,r);if(l>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let u;const d=Object.freeze({ORDER:t,isLE:n,BITS:c,BYTES:l,MASK:Ci(c),ZERO:At,ONE:tt,allowedLengths:a,create:f=>We(f,t),isValid:f=>{if(typeof f!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof f);return At<=f&&f<t},is0:f=>f===At,isValidNot0:f=>!d.is0(f)&&d.isValid(f),isOdd:f=>(f&tt)===tt,neg:f=>We(-f,t),eql:(f,p)=>f===p,sqr:f=>We(f*f,t),add:(f,p)=>We(f+p,t),sub:(f,p)=>We(f-p,t),mul:(f,p)=>We(f*p,t),pow:(f,p)=>N1(d,f,p),div:(f,p)=>We(f*Hl(p,t),t),sqrN:f=>f*f,addN:(f,p)=>f+p,subN:(f,p)=>f-p,mulN:(f,p)=>f*p,inv:f=>Hl(f,t),sqrt:i||(f=>(u||(u=x1(t)),u(d,f))),toBytes:f=>n?ap(f,l):Au(f,l),fromBytes:(f,p=!0)=>{if(a){if(!a.includes(f.length)||f.length>l)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+f.length);const m=new Uint8Array(l);m.set(f,n?0:m.length-f.length),f=m}if(f.length!==l)throw new Error("Field.fromBytes: expected "+l+" bytes, got "+f.length);let g=n?Ei(f):sa(f);if(o&&(g=We(g,t)),!p&&!d.isValid(g))throw new Error("invalid field element: outside of range 0..ORDER");return g},invertBatch:f=>bp(d,f),cmov:(f,p,g)=>g?p:f});return Object.freeze(d)}function mp(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function wp(t){const e=mp(t);return e+Math.ceil(e/2)}function T1(t,e,n=!1){const s=t.length,r=mp(e),i=wp(e);if(s<16||s<i||s>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+s);const o=n?Ei(t):sa(t),a=We(o,e-tt)+tt;return n?ap(a,r):Au(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Nr=BigInt(0),zs=BigInt(1);function Po(t,e){const n=e.negate();return t?n:e}function Ps(t,e){const n=bp(t.Fp,e.map(s=>s.Z));return e.map((s,r)=>t.fromAffine(s.toAffine(n[r])))}function vp(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function ka(t,e){vp(t,e);const n=Math.ceil(e/t)+1,s=2**(t-1),r=2**t,i=Ci(t),o=BigInt(t);return{windows:n,windowSize:s,mask:i,maxNumber:r,shiftBy:o}}function Ql(t,e,n){const{windowSize:s,mask:r,maxNumber:i,shiftBy:o}=n;let a=Number(t&r),c=t>>o;a>s&&(a-=i,c+=zs);const l=e*s,u=l+Math.abs(a)-1,d=a===0,f=a<0,p=e%2!==0;return{nextN:c,offset:u,isZero:d,isNeg:f,isNegF:p,offsetF:l}}function O1(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,s)=>{if(!(n instanceof e))throw new Error("invalid point at index "+s)})}function j1(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,s)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+s)})}const Da=new WeakMap,Sp=new WeakMap;function Ua(t){return Sp.get(t)||1}function Zl(t){if(t!==Nr)throw new Error("invalid wNAF")}class Mp{constructor(e,n){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=n}_unsafeLadder(e,n,s=this.ZERO){let r=e;for(;n>Nr;)n&zs&&(s=s.add(r)),r=r.double(),n>>=zs;return s}precomputeWindow(e,n){const{windows:s,windowSize:r}=ka(n,this.bits),i=[];let o=e,a=o;for(let c=0;c<s;c++){a=o,i.push(a);for(let l=1;l<r;l++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(e,n,s){if(!this.Fn.isValid(s))throw new Error("invalid scalar");let r=this.ZERO,i=this.BASE;const o=ka(e,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:u,isNeg:d,isNegF:f,offsetF:p}=Ql(s,a,o);s=c,u?i=i.add(Po(f,n[p])):r=r.add(Po(d,n[l]))}return Zl(s),{p:r,f:i}}wNAFUnsafe(e,n,s,r=this.ZERO){const i=ka(e,this.bits);for(let o=0;o<i.windows&&s!==Nr;o++){const{nextN:a,offset:c,isZero:l,isNeg:u}=Ql(s,o,i);if(s=a,!l){const d=n[c];r=r.add(u?d.negate():d)}}return Zl(s),r}getPrecomputes(e,n,s){let r=Da.get(n);return r||(r=this.precomputeWindow(n,e),e!==1&&(typeof s=="function"&&(r=s(r)),Da.set(n,r))),r}cached(e,n,s){const r=Ua(e);return this.wNAF(r,this.getPrecomputes(r,e,s),n)}unsafe(e,n,s,r){const i=Ua(e);return i===1?this._unsafeLadder(e,n,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,s),n,r)}createCache(e,n){vp(n,this.bits),Sp.set(e,n),Da.delete(e)}hasCache(e){return Ua(e)!==1}}function C1(t,e,n,s){let r=e,i=t.ZERO,o=t.ZERO;for(;n>Nr||s>Nr;)n&zs&&(i=i.add(r)),s&zs&&(o=o.add(r)),r=r.double(),n>>=zs,s>>=zs;return{p1:i,p2:o}}function Ip(t,e,n,s){O1(n,t),j1(s,e);const r=n.length,i=s.length;if(r!==i)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,a=cp(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=Ci(c),u=new Array(Number(l)+1).fill(o),d=Math.floor((e.BITS-1)/c)*c;let f=o;for(let p=d;p>=0;p-=c){u.fill(o);for(let m=0;m<i;m++){const _=s[m],w=Number(_>>BigInt(p)&l);u[w]=u[w].add(n[m])}let g=o;for(let m=u.length-1,_=o;m>0;m--)_=_.add(u[m]),g=g.add(_);if(f=f.add(g),p!==0)for(let m=0;m<c;m++)f=f.double()}return f}function Xl(t,e,n){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return A1(e),e}else return Nn(t,{isLE:n})}function xp(t,e,n={},s){if(s===void 0&&(s=t==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);for(const c of["p","n","h"]){const l=e[c];if(!(typeof l=="bigint"&&l>Nr))throw new Error(`CURVE.${c} must be positive bigint`)}const r=Xl(e.p,n.Fp,s),i=Xl(e.n,n.Fn,s),a=["Gx","Gy","a",t==="weierstrass"?"b":"d"];for(const c of a)if(!r.isValid(e[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:r,Fn:i}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ns=BigInt(0),Je=BigInt(1),Ba=BigInt(2),k1=BigInt(8);function D1(t,e,n,s){const r=t.sqr(n),i=t.sqr(s),o=t.add(t.mul(e.a,r),i),a=t.add(t.ONE,t.mul(e.d,t.mul(r,i)));return t.eql(o,a)}function U1(t,e={}){const n=xp("edwards",t,e,e.FpFnLE),{Fp:s,Fn:r}=n;let i=n.CURVE;const{h:o}=i;ki(e,{},{uvRatio:"function"});const a=Ba<<BigInt(r.BYTES*8)-Je,c=_=>s.create(_),l=e.uvRatio||((_,w)=>{try{return{isValid:!0,value:s.sqrt(s.div(_,w))}}catch{return{isValid:!1,value:ns}}});if(!D1(s,i,i.Gx,i.Gy))throw new Error("bad curve params: generator point");function u(_,w,D=!1){const v=D?Je:ns;return wc("coordinate "+_,w,v,a),w}function d(_){if(!(_ instanceof g))throw new Error("ExtendedPoint expected")}const f=zo((_,w)=>{const{X:D,Y:v,Z:T}=_,F=_.is0();w==null&&(w=F?k1:s.inv(T));const ae=c(D*w),de=c(v*w),re=s.mul(T,w);if(F)return{x:ns,y:Je};if(re!==Je)throw new Error("invZ was invalid");return{x:ae,y:de}}),p=zo(_=>{const{a:w,d:D}=i;if(_.is0())throw new Error("bad point: ZERO");const{X:v,Y:T,Z:F,T:ae}=_,de=c(v*v),re=c(T*T),E=c(F*F),W=c(E*E),ee=c(de*w),H=c(E*c(ee+re)),x=c(W+c(D*c(de*re)));if(H!==x)throw new Error("bad point: equation left != right (1)");const S=c(v*T),M=c(F*ae);if(S!==M)throw new Error("bad point: equation left != right (2)");return!0});class g{constructor(w,D,v,T){this.X=u("x",w),this.Y=u("y",D),this.Z=u("z",v,!0),this.T=u("t",T),Object.freeze(this)}static CURVE(){return i}static fromAffine(w){if(w instanceof g)throw new Error("extended point not allowed");const{x:D,y:v}=w||{};return u("x",D),u("y",v),new g(D,v,Je,c(D*v))}static fromBytes(w,D=!1){const v=s.BYTES,{a:T,d:F}=i;w=Gl(an(w,v,"point")),Qs(D,"zip215");const ae=Gl(w),de=w[v-1];ae[v-1]=de&-129;const re=Ei(ae),E=D?a:s.ORDER;wc("point.y",re,ns,E);const W=c(re*re),ee=c(W-Je),H=c(F*W-T);let{isValid:x,value:S}=l(ee,H);if(!x)throw new Error("bad point: invalid y coordinate");const M=(S&Je)===Je,A=(de&128)!==0;if(!D&&S===ns&&A)throw new Error("bad point: x=0 and x_0=1");return A!==M&&(S=c(-S)),g.fromAffine({x:S,y:re})}static fromHex(w,D=!1){return g.fromBytes(Fe("point",w),D)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(w=8,D=!0){return m.createCache(this,w),D||this.multiply(Ba),this}assertValidity(){p(this)}equals(w){d(w);const{X:D,Y:v,Z:T}=this,{X:F,Y:ae,Z:de}=w,re=c(D*de),E=c(F*T),W=c(v*de),ee=c(ae*T);return re===E&&W===ee}is0(){return this.equals(g.ZERO)}negate(){return new g(c(-this.X),this.Y,this.Z,c(-this.T))}double(){const{a:w}=i,{X:D,Y:v,Z:T}=this,F=c(D*D),ae=c(v*v),de=c(Ba*c(T*T)),re=c(w*F),E=D+v,W=c(c(E*E)-F-ae),ee=re+ae,H=ee-de,x=re-ae,S=c(W*H),M=c(ee*x),A=c(W*x),k=c(H*ee);return new g(S,M,k,A)}add(w){d(w);const{a:D,d:v}=i,{X:T,Y:F,Z:ae,T:de}=this,{X:re,Y:E,Z:W,T:ee}=w,H=c(T*re),x=c(F*E),S=c(de*v*ee),M=c(ae*W),A=c((T+F)*(re+E)-H-x),k=M-S,B=M+S,K=c(x-D*H),q=c(A*k),Q=c(B*K),J=c(A*K),Te=c(k*B);return new g(q,Q,Te,J)}subtract(w){return this.add(w.negate())}multiply(w){if(!r.isValidNot0(w))throw new Error("invalid scalar: expected 1 <= sc < curve.n");const{p:D,f:v}=m.cached(this,w,T=>Ps(g,T));return Ps(g,[D,v])[0]}multiplyUnsafe(w,D=g.ZERO){if(!r.isValid(w))throw new Error("invalid scalar: expected 0 <= sc < curve.n");return w===ns?g.ZERO:this.is0()||w===Je?this:m.unsafe(this,w,v=>Ps(g,v),D)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}isTorsionFree(){return m.unsafe(this,i.n).is0()}toAffine(w){return f(this,w)}clearCofactor(){return o===Je?this:this.multiplyUnsafe(o)}toBytes(){const{x:w,y:D}=this.toAffine(),v=s.toBytes(D);return v[v.length-1]|=w&Je?128:0,v}toHex(){return Wt(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get ex(){return this.X}get ey(){return this.Y}get ez(){return this.Z}get et(){return this.T}static normalizeZ(w){return Ps(g,w)}static msm(w,D){return Ip(g,r,w,D)}_setWindowSize(w){this.precompute(w)}toRawBytes(){return this.toBytes()}}g.BASE=new g(i.Gx,i.Gy,Je,c(i.Gx*i.Gy)),g.ZERO=new g(ns,Je,Je,ns),g.Fp=s,g.Fn=r;const m=new Mp(g,r.BITS);return g.BASE.precompute(8),g}function B1(t,e,n={}){if(typeof e!="function")throw new Error('"hash" function param is required');ki(n,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",mapToCurve:"function"});const{prehash:s}=n,{BASE:r,Fp:i,Fn:o}=t,a=n.randomBytes||du,c=n.adjustScalarBytes||(E=>E),l=n.domain||((E,W,ee)=>{if(Qs(ee,"phflag"),W.length||ee)throw new Error("Contexts/pre-hash are not supported");return E});function u(E){return o.create(Ei(E))}function d(E){const W=v.secretKey;E=Fe("private key",E,W);const ee=Fe("hashed private key",e(E),2*W),H=c(ee.slice(0,W)),x=ee.slice(W,2*W),S=u(H);return{head:H,prefix:x,scalar:S}}function f(E){const{head:W,prefix:ee,scalar:H}=d(E),x=r.multiply(H),S=x.toBytes();return{head:W,prefix:ee,scalar:H,point:x,pointBytes:S}}function p(E){return f(E).pointBytes}function g(E=Uint8Array.of(),...W){const ee=Et(...W);return u(e(l(ee,Fe("context",E),!!s)))}function m(E,W,ee={}){E=Fe("message",E),s&&(E=s(E));const{prefix:H,scalar:x,pointBytes:S}=f(W),M=g(ee.context,H,E),A=r.multiply(M).toBytes(),k=g(ee.context,A,S,E),B=o.create(M+k*x);if(!o.isValid(B))throw new Error("sign failed: invalid s");const K=Et(A,o.toBytes(B));return an(K,v.signature,"result")}const _={zip215:!0};function w(E,W,ee,H=_){const{context:x,zip215:S}=H,M=v.signature;E=Fe("signature",E,M),W=Fe("message",W),ee=Fe("publicKey",ee,v.publicKey),S!==void 0&&Qs(S,"zip215"),s&&(W=s(W));const A=M/2,k=E.subarray(0,A),B=Ei(E.subarray(A,M));let K,q,Q;try{K=t.fromBytes(ee,S),q=t.fromBytes(k,S),Q=r.multiplyUnsafe(B)}catch{return!1}if(!S&&K.isSmallOrder())return!1;const J=g(x,q.toBytes(),K.toBytes(),W);return q.add(K.multiplyUnsafe(J)).subtract(Q).clearCofactor().is0()}const D=i.BYTES,v={secretKey:D,publicKey:D,signature:2*D,seed:D};function T(E=a(v.seed)){return an(E,v.seed,"seed")}function F(E){const W=re.randomSecretKey(E);return{secretKey:W,publicKey:p(W)}}function ae(E){return Ti(E)&&E.length===o.BYTES}function de(E,W){try{return!!t.fromBytes(E,W)}catch{return!1}}const re={getExtendedPublicKey:f,randomSecretKey:T,isValidSecretKey:ae,isValidPublicKey:de,toMontgomery(E){const{y:W}=t.fromBytes(E),ee=v.publicKey,H=ee===32;if(!H&&ee!==57)throw new Error("only defined for 25519 and 448");const x=H?i.div(Je+W,Je-W):i.div(W-Je,W+Je);return i.toBytes(x)},toMontgomerySecret(E){const W=v.secretKey;an(E,W);const ee=e(E.subarray(0,W));return c(ee).subarray(0,W)},randomPrivateKey:T,precompute(E=8,W=t.BASE){return W.precompute(E,!1)}};return Object.freeze({keygen:F,getPublicKey:p,sign:m,verify:w,utils:re,Point:t,lengths:v})}function L1(t){const e={a:t.a,d:t.d,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp,s=Nn(e.n,t.nBitLength,!0),r={Fp:n,Fn:s,uvRatio:t.uvRatio},i={randomBytes:t.randomBytes,adjustScalarBytes:t.adjustScalarBytes,domain:t.domain,prehash:t.prehash,mapToCurve:t.mapToCurve};return{CURVE:e,curveOpts:r,hash:t.hash,eddsaOpts:i}}function z1(t,e){const n=e.Point;return Object.assign({},e,{ExtendedPoint:n,CURVE:t,nBitLength:n.Fn.BITS,nByteLength:n.Fn.BYTES})}function P1(t){const{CURVE:e,curveOpts:n,hash:s,eddsaOpts:r}=L1(t),i=U1(e,n),o=B1(i,s,r);return z1(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const R1=BigInt(1),Jl=BigInt(2);BigInt(3);const $1=BigInt(5),F1=BigInt(8),Tu=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),Ep={p:Tu,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:F1,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function V1(t){const e=BigInt(10),n=BigInt(20),s=BigInt(40),r=BigInt(80),i=Tu,a=t*t%i*t%i,c=Re(a,Jl,i)*a%i,l=Re(c,R1,i)*t%i,u=Re(l,$1,i)*l%i,d=Re(u,e,i)*u%i,f=Re(d,n,i)*d%i,p=Re(f,s,i)*f%i,g=Re(p,r,i)*p%i,m=Re(g,r,i)*p%i,_=Re(m,e,i)*u%i;return{pow_p_5_8:Re(_,Jl,i)*t%i,b2:a}}function K1(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const ed=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function W1(t,e){const n=Tu,s=We(e*e*e,n),r=We(s*s*e,n),i=V1(t*r).pow_p_5_8;let o=We(t*s*i,n);const a=We(e*o*o,n),c=o,l=We(o*ed,n),u=a===t,d=a===We(-t,n),f=a===We(-t*ed,n);return u&&(o=c),(d||f)&&(o=l),E1(o,n)&&(o=We(-o,n)),{isValid:u||d,value:o}}const q1=Nn(Ep.p,{isLE:!0}),G1={...Ep,Fp:q1,hash:Ar,adjustScalarBytes:K1,uvRatio:W1},Un=P1(G1);function _p(t,e){return Z.IntentMessage(Z.fixedArray(e.length,Z.u8())).serialize({intent:{scope:{[t]:!0},version:{V0:!0},appId:{Sui:!0}},value:e}).toBytes()}const Yn={ED25519:0,Secp256k1:1,Secp256r1:2,MultiSig:3,ZkLogin:5,Passkey:6},H1={ED25519:32,Secp256k1:33,Secp256r1:33,Passkey:33},Ou={0:"ED25519",1:"Secp256k1",2:"Secp256r1",3:"MultiSig",5:"ZkLogin",6:"Passkey"};/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const td=(t,e)=>(t+(t>=0?e:-e)/Ap)/e;function Y1(t,e,n){const[[s,r],[i,o]]=e,a=td(o*t,n),c=td(-r*t,n);let l=t-a*s-c*i,u=-a*r-c*o;const d=l<Vn,f=u<Vn;d&&(l=-l),f&&(u=-u);const p=Ci(Math.ceil(cp(n)/2))+mr;if(l<Vn||l>=p||u<Vn||u>=p)throw new Error("splitScalar (endomorphism): failed, k="+t);return{k1neg:d,k1:l,k2neg:f,k2:u}}function vc(t){if(!["compact","recovered","der"].includes(t))throw new Error('Signature format must be "compact", "recovered", or "der"');return t}function La(t,e){const n={};for(let s of Object.keys(e))n[s]=t[s]===void 0?e[s]:t[s];return Qs(n.lowS,"lowS"),Qs(n.prehash,"prehash"),n.format!==void 0&&vc(n.format),n}class Q1 extends Error{constructor(e=""){super(e)}}const Rn={Err:Q1,_tlv:{encode:(t,e)=>{const{Err:n}=Rn;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const s=e.length/2,r=qi(s);if(r.length/2&128)throw new n("tlv.encode: long form length too big");const i=s>127?qi(r.length/2|128):"";return qi(t)+i+r+e},decode(t,e){const{Err:n}=Rn;let s=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[s++]!==t)throw new n("tlv.decode: wrong tlv");const r=e[s++],i=!!(r&128);let o=0;if(!i)o=r;else{const c=r&127;if(!c)throw new n("tlv.decode(long): indefinite length not supported");if(c>4)throw new n("tlv.decode(long): byte length is too big");const l=e.subarray(s,s+c);if(l.length!==c)throw new n("tlv.decode: length bytes not complete");if(l[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(s+=c,o<128)throw new n("tlv.decode(long): not minimal encoding")}const a=e.subarray(s,s+o);if(a.length!==o)throw new n("tlv.decode: wrong value length");return{v:a,l:e.subarray(s+o)}}},_int:{encode(t){const{Err:e}=Rn;if(t<Vn)throw new e("integer: negative integers are not allowed");let n=qi(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=Rn;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return sa(t)}},toSig(t){const{Err:e,_int:n,_tlv:s}=Rn,r=Fe("signature",t),{v:i,l:o}=s.decode(48,r);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=s.decode(2,i),{v:l,l:u}=s.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(a),s:n.decode(l)}},hexFromSig(t){const{_tlv:e,_int:n}=Rn,s=e.encode(2,n.encode(t.r)),r=e.encode(2,n.encode(t.s)),i=s+r;return e.encode(48,i)}},Vn=BigInt(0),mr=BigInt(1),Ap=BigInt(2),Gi=BigInt(3),Z1=BigInt(4);function lr(t,e){const{BYTES:n}=t;let s;if(typeof e=="bigint")s=e;else{let r=Fe("private key",e);try{s=t.fromBytes(r)}catch{throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`)}}if(!t.isValidNot0(s))throw new Error("invalid private key: out of range [1..N-1]");return s}function X1(t,e={}){const n=xp("weierstrass",t,e),{Fp:s,Fn:r}=n;let i=n.CURVE;const{h:o,n:a}=i;ki(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:c}=e;if(c&&(!s.is0(i.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const l=Tp(s,r);function u(){if(!s.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function d(H,x,S){const{x:M,y:A}=x.toAffine(),k=s.toBytes(M);if(Qs(S,"isCompressed"),S){u();const B=!s.isOdd(A);return Et(Np(B),k)}else return Et(Uint8Array.of(4),k,s.toBytes(A))}function f(H){an(H,void 0,"Point");const{publicKey:x,publicKeyUncompressed:S}=l,M=H.length,A=H[0],k=H.subarray(1);if(M===x&&(A===2||A===3)){const B=s.fromBytes(k);if(!s.isValid(B))throw new Error("bad point: is not on curve, wrong x");const K=m(B);let q;try{q=s.sqrt(K)}catch(Te){const ve=Te instanceof Error?": "+Te.message:"";throw new Error("bad point: is not on curve, sqrt error"+ve)}u();const Q=s.isOdd(q);return(A&1)===1!==Q&&(q=s.neg(q)),{x:B,y:q}}else if(M===S&&A===4){const B=s.BYTES,K=s.fromBytes(k.subarray(0,B)),q=s.fromBytes(k.subarray(B,B*2));if(!_(K,q))throw new Error("bad point: is not on curve");return{x:K,y:q}}else throw new Error(`bad point: got length ${M}, expected compressed=${x} or uncompressed=${S}`)}const p=e.toBytes||d,g=e.fromBytes||f;function m(H){const x=s.sqr(H),S=s.mul(x,H);return s.add(s.add(S,s.mul(H,i.a)),i.b)}function _(H,x){const S=s.sqr(x),M=m(H);return s.eql(S,M)}if(!_(i.Gx,i.Gy))throw new Error("bad curve params: generator point");const w=s.mul(s.pow(i.a,Gi),Z1),D=s.mul(s.sqr(i.b),BigInt(27));if(s.is0(s.add(w,D)))throw new Error("bad curve params: a or b");function v(H,x,S=!1){if(!s.isValid(x)||S&&s.is0(x))throw new Error(`bad point coordinate ${H}`);return x}function T(H){if(!(H instanceof E))throw new Error("ProjectivePoint expected")}function F(H){if(!c||!c.basises)throw new Error("no endo");return Y1(H,c.basises,r.ORDER)}const ae=zo((H,x)=>{const{X:S,Y:M,Z:A}=H;if(s.eql(A,s.ONE))return{x:S,y:M};const k=H.is0();x==null&&(x=k?s.ONE:s.inv(A));const B=s.mul(S,x),K=s.mul(M,x),q=s.mul(A,x);if(k)return{x:s.ZERO,y:s.ZERO};if(!s.eql(q,s.ONE))throw new Error("invZ was invalid");return{x:B,y:K}}),de=zo(H=>{if(H.is0()){if(e.allowInfinityPoint&&!s.is0(H.Y))return;throw new Error("bad point: ZERO")}const{x,y:S}=H.toAffine();if(!s.isValid(x)||!s.isValid(S))throw new Error("bad point: x or y not field elements");if(!_(x,S))throw new Error("bad point: equation left != right");if(!H.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function re(H,x,S,M,A){return S=new E(s.mul(S.X,H),S.Y,S.Z),x=Po(M,x),S=Po(A,S),x.add(S)}class E{constructor(x,S,M){this.X=v("x",x),this.Y=v("y",S,!0),this.Z=v("z",M),Object.freeze(this)}static CURVE(){return i}static fromAffine(x){const{x:S,y:M}=x||{};if(!x||!s.isValid(S)||!s.isValid(M))throw new Error("invalid affine point");if(x instanceof E)throw new Error("projective point not allowed");return s.is0(S)&&s.is0(M)?E.ZERO:new E(S,M,s.ONE)}static fromBytes(x){const S=E.fromAffine(g(an(x,void 0,"point")));return S.assertValidity(),S}static fromHex(x){return E.fromBytes(Fe("pointHex",x))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(x=8,S=!0){return ee.createCache(this,x),S||this.multiply(Gi),this}assertValidity(){de(this)}hasEvenY(){const{y:x}=this.toAffine();if(!s.isOdd)throw new Error("Field doesn't support isOdd");return!s.isOdd(x)}equals(x){T(x);const{X:S,Y:M,Z:A}=this,{X:k,Y:B,Z:K}=x,q=s.eql(s.mul(S,K),s.mul(k,A)),Q=s.eql(s.mul(M,K),s.mul(B,A));return q&&Q}negate(){return new E(this.X,s.neg(this.Y),this.Z)}double(){const{a:x,b:S}=i,M=s.mul(S,Gi),{X:A,Y:k,Z:B}=this;let K=s.ZERO,q=s.ZERO,Q=s.ZERO,J=s.mul(A,A),Te=s.mul(k,k),ve=s.mul(B,B),pe=s.mul(A,k);return pe=s.add(pe,pe),Q=s.mul(A,B),Q=s.add(Q,Q),K=s.mul(x,Q),q=s.mul(M,ve),q=s.add(K,q),K=s.sub(Te,q),q=s.add(Te,q),q=s.mul(K,q),K=s.mul(pe,K),Q=s.mul(M,Q),ve=s.mul(x,ve),pe=s.sub(J,ve),pe=s.mul(x,pe),pe=s.add(pe,Q),Q=s.add(J,J),J=s.add(Q,J),J=s.add(J,ve),J=s.mul(J,pe),q=s.add(q,J),ve=s.mul(k,B),ve=s.add(ve,ve),J=s.mul(ve,pe),K=s.sub(K,J),Q=s.mul(ve,Te),Q=s.add(Q,Q),Q=s.add(Q,Q),new E(K,q,Q)}add(x){T(x);const{X:S,Y:M,Z:A}=this,{X:k,Y:B,Z:K}=x;let q=s.ZERO,Q=s.ZERO,J=s.ZERO;const Te=i.a,ve=s.mul(i.b,Gi);let pe=s.mul(S,k),Se=s.mul(M,B),ke=s.mul(A,K),Ze=s.add(S,M),Oe=s.add(k,B);Ze=s.mul(Ze,Oe),Oe=s.add(pe,Se),Ze=s.sub(Ze,Oe),Oe=s.add(S,A);let Pe=s.add(k,K);return Oe=s.mul(Oe,Pe),Pe=s.add(pe,ke),Oe=s.sub(Oe,Pe),Pe=s.add(M,A),q=s.add(B,K),Pe=s.mul(Pe,q),q=s.add(Se,ke),Pe=s.sub(Pe,q),J=s.mul(Te,Oe),q=s.mul(ve,ke),J=s.add(q,J),q=s.sub(Se,J),J=s.add(Se,J),Q=s.mul(q,J),Se=s.add(pe,pe),Se=s.add(Se,pe),ke=s.mul(Te,ke),Oe=s.mul(ve,Oe),Se=s.add(Se,ke),ke=s.sub(pe,ke),ke=s.mul(Te,ke),Oe=s.add(Oe,ke),pe=s.mul(Se,Oe),Q=s.add(Q,pe),pe=s.mul(Pe,Oe),q=s.mul(Ze,q),q=s.sub(q,pe),pe=s.mul(Ze,Se),J=s.mul(Pe,J),J=s.add(J,pe),new E(q,Q,J)}subtract(x){return this.add(x.negate())}is0(){return this.equals(E.ZERO)}multiply(x){const{endo:S}=e;if(!r.isValidNot0(x))throw new Error("invalid scalar: out of range");let M,A;const k=B=>ee.cached(this,B,K=>Ps(E,K));if(S){const{k1neg:B,k1:K,k2neg:q,k2:Q}=F(x),{p:J,f:Te}=k(K),{p:ve,f:pe}=k(Q);A=Te.add(pe),M=re(S.beta,J,ve,B,q)}else{const{p:B,f:K}=k(x);M=B,A=K}return Ps(E,[M,A])[0]}multiplyUnsafe(x){const{endo:S}=e,M=this;if(!r.isValid(x))throw new Error("invalid scalar: out of range");if(x===Vn||M.is0())return E.ZERO;if(x===mr)return M;if(ee.hasCache(this))return this.multiply(x);if(S){const{k1neg:A,k1:k,k2neg:B,k2:K}=F(x),{p1:q,p2:Q}=C1(E,M,k,K);return re(S.beta,q,Q,A,B)}else return ee.unsafe(M,x)}multiplyAndAddUnsafe(x,S,M){const A=this.multiplyUnsafe(S).add(x.multiplyUnsafe(M));return A.is0()?void 0:A}toAffine(x){return ae(this,x)}isTorsionFree(){const{isTorsionFree:x}=e;return o===mr?!0:x?x(E,this):ee.unsafe(this,a).is0()}clearCofactor(){const{clearCofactor:x}=e;return o===mr?this:x?x(E,this):this.multiplyUnsafe(o)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}toBytes(x=!0){return Qs(x,"isCompressed"),this.assertValidity(),p(E,this,x)}toHex(x=!0){return Wt(this.toBytes(x))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}toRawBytes(x=!0){return this.toBytes(x)}_setWindowSize(x){this.precompute(x)}static normalizeZ(x){return Ps(E,x)}static msm(x,S){return Ip(E,r,x,S)}static fromPrivateKey(x){return E.BASE.multiply(lr(r,x))}}E.BASE=new E(i.Gx,i.Gy,s.ONE),E.ZERO=new E(s.ZERO,s.ONE,s.ZERO),E.Fp=s,E.Fn=r;const W=r.BITS,ee=new Mp(E,e.endo?Math.ceil(W/2):W);return E.BASE.precompute(8),E}function Np(t){return Uint8Array.of(t?2:3)}function Tp(t,e){return{secretKey:e.BYTES,publicKey:1+t.BYTES,publicKeyUncompressed:1+2*t.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}function J1(t,e={}){const{Fn:n}=t,s=e.randomBytes||du,r=Object.assign(Tp(t.Fp,n),{seed:wp(n.ORDER)});function i(p){try{return!!lr(n,p)}catch{return!1}}function o(p,g){const{publicKey:m,publicKeyUncompressed:_}=r;try{const w=p.length;return g===!0&&w!==m||g===!1&&w!==_?!1:!!t.fromBytes(p)}catch{return!1}}function a(p=s(r.seed)){return T1(an(p,r.seed,"seed"),n.ORDER)}function c(p,g=!0){return t.BASE.multiply(lr(n,p)).toBytes(g)}function l(p){const g=a(p);return{secretKey:g,publicKey:c(g)}}function u(p){if(typeof p=="bigint")return!1;if(p instanceof t)return!0;const{secretKey:g,publicKey:m,publicKeyUncompressed:_}=r;if(n.allowedLengths||g===m)return;const w=Fe("key",p).length;return w===m||w===_}function d(p,g,m=!0){if(u(p)===!0)throw new Error("first arg must be private key");if(u(g)===!1)throw new Error("second arg must be public key");const _=lr(n,p);return t.fromHex(g).multiply(_).toBytes(m)}return Object.freeze({getPublicKey:c,getSharedSecret:d,keygen:l,Point:t,utils:{isValidSecretKey:i,isValidPublicKey:o,randomSecretKey:a,isValidPrivateKey:i,randomPrivateKey:a,normPrivateKeyToScalar:p=>lr(n,p),precompute(p=8,g=t.BASE){return g.precompute(p,!1)}},lengths:r})}function ev(t,e,n={}){cu(e),ki(n,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const s=n.randomBytes||du,r=n.hmac||((S,...M)=>Ys(e,S,Et(...M))),{Fp:i,Fn:o}=t,{ORDER:a,BITS:c}=o,{keygen:l,getPublicKey:u,getSharedSecret:d,utils:f,lengths:p}=J1(t,n),g={prehash:!1,lowS:typeof n.lowS=="boolean"?n.lowS:!1,format:void 0,extraEntropy:!1},m="compact";function _(S){const M=a>>mr;return S>M}function w(S,M){if(!o.isValidNot0(M))throw new Error(`invalid signature ${S}: out of range 1..Point.Fn.ORDER`);return M}function D(S,M){vc(M);const A=p.signature,k=M==="compact"?A:M==="recovered"?A+1:void 0;return an(S,k,`${M} signature`)}class v{constructor(M,A,k){this.r=w("r",M),this.s=w("s",A),k!=null&&(this.recovery=k),Object.freeze(this)}static fromBytes(M,A=m){D(M,A);let k;if(A==="der"){const{r:Q,s:J}=Rn.toSig(an(M));return new v(Q,J)}A==="recovered"&&(k=M[0],A="compact",M=M.subarray(1));const B=o.BYTES,K=M.subarray(0,B),q=M.subarray(B,B*2);return new v(o.fromBytes(K),o.fromBytes(q),k)}static fromHex(M,A){return this.fromBytes(xr(M),A)}addRecoveryBit(M){return new v(this.r,this.s,M)}recoverPublicKey(M){const A=i.ORDER,{r:k,s:B,recovery:K}=this;if(K==null||![0,1,2,3].includes(K))throw new Error("recovery id invalid");if(a*Ap<A&&K>1)throw new Error("recovery id is ambiguous for h>1 curve");const Q=K===2||K===3?k+a:k;if(!i.isValid(Q))throw new Error("recovery id 2 or 3 invalid");const J=i.toBytes(Q),Te=t.fromBytes(Et(Np((K&1)===0),J)),ve=o.inv(Q),pe=F(Fe("msgHash",M)),Se=o.create(-pe*ve),ke=o.create(B*ve),Ze=t.BASE.multiplyUnsafe(Se).add(Te.multiplyUnsafe(ke));if(Ze.is0())throw new Error("point at infinify");return Ze.assertValidity(),Ze}hasHighS(){return _(this.s)}toBytes(M=m){if(vc(M),M==="der")return xr(Rn.hexFromSig(this));const A=o.toBytes(this.r),k=o.toBytes(this.s);if(M==="recovered"){if(this.recovery==null)throw new Error("recovery bit must be present");return Et(Uint8Array.of(this.recovery),A,k)}return Et(A,k)}toHex(M){return Wt(this.toBytes(M))}assertValidity(){}static fromCompact(M){return v.fromBytes(Fe("sig",M),"compact")}static fromDER(M){return v.fromBytes(Fe("sig",M),"der")}normalizeS(){return this.hasHighS()?new v(this.r,o.neg(this.s),this.recovery):this}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return Wt(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return Wt(this.toBytes("compact"))}}const T=n.bits2int||function(M){if(M.length>8192)throw new Error("input is too large");const A=sa(M),k=M.length*8-c;return k>0?A>>BigInt(k):A},F=n.bits2int_modN||function(M){return o.create(T(M))},ae=Ci(c);function de(S){return wc("num < 2^"+c,S,Vn,ae),o.toBytes(S)}function re(S,M){return an(S,void 0,"message"),M?an(e(S),void 0,"prehashed message"):S}function E(S,M,A){if(["recovered","canonical"].some(Se=>Se in A))throw new Error("sign() legacy options not supported");const{lowS:k,prehash:B,extraEntropy:K}=La(A,g);S=re(S,B);const q=F(S),Q=lr(o,M),J=[de(Q),de(q)];if(K!=null&&K!==!1){const Se=K===!0?s(p.secretKey):K;J.push(Fe("extraEntropy",Se))}const Te=Et(...J),ve=q;function pe(Se){const ke=T(Se);if(!o.isValidNot0(ke))return;const Ze=o.inv(ke),Oe=t.BASE.multiply(ke).toAffine(),Pe=o.create(Oe.x);if(Pe===Vn)return;const Br=o.create(Ze*o.create(ve+Pe*Q));if(Br===Vn)return;let b=(Oe.x===Pe?0:2)|Number(Oe.y&mr),y=Br;return k&&_(Br)&&(y=o.neg(Br),b^=1),new v(Pe,y,b)}return{seed:Te,k2sig:pe}}function W(S,M,A={}){S=Fe("message",S);const{seed:k,k2sig:B}=E(S,M,A);return w1(e.outputLen,o.BYTES,r)(k,B)}function ee(S){let M;const A=typeof S=="string"||Ti(S),k=!A&&S!==null&&typeof S=="object"&&typeof S.r=="bigint"&&typeof S.s=="bigint";if(!A&&!k)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(k)M=new v(S.r,S.s);else if(A){try{M=v.fromBytes(Fe("sig",S),"der")}catch(B){if(!(B instanceof Rn.Err))throw B}if(!M)try{M=v.fromBytes(Fe("sig",S),"compact")}catch{return!1}}return M||!1}function H(S,M,A,k={}){const{lowS:B,prehash:K,format:q}=La(k,g);if(A=Fe("publicKey",A),M=re(Fe("message",M),K),"strict"in k)throw new Error("options.strict was renamed to lowS");const Q=q===void 0?ee(S):v.fromBytes(Fe("sig",S),q);if(Q===!1)return!1;try{const J=t.fromBytes(A);if(B&&Q.hasHighS())return!1;const{r:Te,s:ve}=Q,pe=F(M),Se=o.inv(ve),ke=o.create(pe*Se),Ze=o.create(Te*Se),Oe=t.BASE.multiplyUnsafe(ke).add(J.multiplyUnsafe(Ze));return Oe.is0()?!1:o.create(Oe.x)===Te}catch{return!1}}function x(S,M,A={}){const{prehash:k}=La(A,g);return M=re(M,k),v.fromBytes(S,"recovered").recoverPublicKey(M).toBytes()}return Object.freeze({keygen:l,getPublicKey:u,getSharedSecret:d,utils:f,lengths:p,Point:t,sign:W,verify:H,recoverPublicKey:x,Signature:v,hash:e})}function tv(t){const e={a:t.a,b:t.b,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp;let s=t.allowedPrivateKeyLengths?Array.from(new Set(t.allowedPrivateKeyLengths.map(o=>Math.ceil(o/2)))):void 0;const r=Nn(e.n,{BITS:t.nBitLength,allowedLengths:s,modFromBytes:t.wrapPrivateKey}),i={Fp:n,Fn:r,allowInfinityPoint:t.allowInfinityPoint,endo:t.endo,isTorsionFree:t.isTorsionFree,clearCofactor:t.clearCofactor,fromBytes:t.fromBytes,toBytes:t.toBytes};return{CURVE:e,curveOpts:i}}function nv(t){const{CURVE:e,curveOpts:n}=tv(t),s={hmac:t.hmac,randomBytes:t.randomBytes,lowS:t.lowS,bits2int:t.bits2int,bits2int_modN:t.bits2int_modN};return{CURVE:e,curveOpts:n,hash:t.hash,ecdsaOpts:s}}function sv(t,e){const n=e.Point;return Object.assign({},e,{ProjectivePoint:n,CURVE:Object.assign({},t,yp(n.Fn.ORDER,n.Fn.BITS))})}function rv(t){const{CURVE:e,curveOpts:n,hash:s,ecdsaOpts:r}=nv(t),i=X1(e,n),o=ev(i,s,r);return sv(t,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ra(t,e){const n=s=>rv({...t,hash:s});return{...n(e),create:n}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Op={p:BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),h:BigInt(1),a:BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),b:BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")},jp={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),n:BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),h:BigInt(1),a:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),b:BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),Gx:BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),Gy:BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")},Cp={p:BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),n:BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),h:BigInt(1),a:BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),b:BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),Gx:BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),Gy:BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")},iv=Nn(Op.p),ov=Nn(jp.p),av=Nn(Cp.p),cv=ra({...Op,Fp:iv,lowS:!1},Ur);ra({...jp,Fp:ov,lowS:!1},c1);ra({...Cp,Fp:av,lowS:!1,allowedPrivateKeyLengths:[130,131,132]},Ar);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const wn=cv,Tr=Ur;function Or(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}class Di{equals(e){return Or(this.toRawBytes(),e.toRawBytes())}toBase64(){return xe(this.toRawBytes())}toString(){throw new Error("`toString` is not implemented on public keys. Use `toBase64()` or `toRawBytes()` instead.")}toSuiPublicKey(){const e=this.toSuiBytes();return xe(e)}verifyWithIntent(e,n,s){const r=_p(s,e),i=Ss(r,{dkLen:32});return this.verify(i,n)}verifyPersonalMessage(e,n){return this.verifyWithIntent(Z.vector(Z.u8()).serialize(e).toBytes(),n,"PersonalMessage")}verifyTransaction(e,n){return this.verifyWithIntent(e,n,"TransactionData")}verifyAddress(e){return this.toSuiAddress()===e}toSuiBytes(){const e=this.toRawBytes(),n=new Uint8Array(e.length+1);return n.set([this.flag()]),n.set(e,1),n}toSuiAddress(){return le(Wt(Ss(this.toSuiBytes(),{dkLen:32})).slice(0,Cr*2))}}function ju(t){const e=we(t),n=Ou[e[0]];switch(n){case"ED25519":case"Secp256k1":case"Secp256r1":const s=H1[n],r=e.slice(1,e.length-s),i=e.slice(1+r.length);return{serializedSignature:t,signatureScheme:n,signature:r,publicKey:i,bytes:e};default:throw new Error("Unsupported signature scheme")}}const Sc=33,Mc=64;class uv extends Di{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==Sc)throw new Error(`Invalid public key input. Expected ${Sc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Yn.Passkey}async verify(e,n){const s=kp(n),r=JSON.parse(s.clientDataJson);if(r.type!=="webauthn.get")return!1;const i=we(r.challenge.replace(/-/g,"+").replace(/_/g,"/"));if(!Or(e,i))return!1;const o=s.userSignature.slice(1+Mc);if(!Or(this.toRawBytes(),o))return!1;const a=new Uint8Array([...s.authenticatorData,...Tr(s.clientDataJson)]),c=s.userSignature.slice(1,Mc+1);return wn.verify(c,Tr(a),o)}}uv.SIZE=Sc;function kp(t){const e=typeof t=="string"?we(t):t;if(e[0]!==Yn.Passkey)throw new Error("Invalid signature scheme");const n=lh.parse(e.slice(1));return{signatureScheme:"Passkey",serializedSignature:xe(e),signature:e,authenticatorData:n.authenticatorData,clientDataJson:n.clientDataJson,userSignature:new Uint8Array(n.userSignature),publicKey:new Uint8Array(n.userSignature.slice(1+Mc))}}function lv(t,e){if(!!!t)throw new Error(e)}const Dp={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},dv=new Set(Object.keys(Dp));function nd(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&dv.has(e)}var sd;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(sd||(sd={}));var Ic;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(Ic||(Ic={}));function rd(t){return t===9||t===32}function fv(t,e){const n=t.replace(/"""/g,'\\"""'),s=n.split(/\r\n|[\n\r]/g),r=s.length===1,i=s.length>1&&s.slice(1).every(p=>p.length===0||rd(p.charCodeAt(0))),o=n.endsWith('\\"""'),a=t.endsWith('"')&&!o,c=t.endsWith("\\"),l=a||c,u=!r||t.length>70||l||i||o;let d="";const f=r&&rd(t.charCodeAt(0));return(u&&!f||i)&&(d+=`
`),d+=n,(u||l)&&(d+=`
`),'"""'+d+'"""'}const hv=10,Up=2;function pv(t){return ia(t,[])}function ia(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return gv(t,e);default:return String(t)}}function gv(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const n=[...e,t];if(bv(t)){const s=t.toJSON();if(s!==t)return typeof s=="string"?s:ia(s,n)}else if(Array.isArray(t))return mv(t,n);return yv(t,n)}function bv(t){return typeof t.toJSON=="function"}function yv(t,e){const n=Object.entries(t);return n.length===0?"{}":e.length>Up?"["+wv(t)+"]":"{ "+n.map(([r,i])=>r+": "+ia(i,e)).join(", ")+" }"}function mv(t,e){if(t.length===0)return"[]";if(e.length>Up)return"[Array]";const n=Math.min(hv,t.length),s=t.length-n,r=[];for(let i=0;i<n;++i)r.push(ia(t[i],e));return s===1?r.push("... 1 more item"):s>1&&r.push(`... ${s} more items`),"["+r.join(", ")+"]"}function wv(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}function vv(t){return`"${t.replace(Sv,Mv)}"`}const Sv=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Mv(t){return Iv[t.charCodeAt(0)]}const Iv=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],xv=Object.freeze({});function Ev(t,e,n=Dp){const s=new Map;for(const w of Object.values(Ic))s.set(w,_v(e,w));let r,i=Array.isArray(t),o=[t],a=-1,c=[],l=t,u,d;const f=[],p=[];do{a++;const w=a===o.length,D=w&&c.length!==0;if(w){if(u=p.length===0?void 0:f[f.length-1],l=d,d=p.pop(),D)if(i){l=l.slice();let T=0;for(const[F,ae]of c){const de=F-T;ae===null?(l.splice(de,1),T++):l[de]=ae}}else{l={...l};for(const[T,F]of c)l[T]=F}a=r.index,o=r.keys,c=r.edits,i=r.inArray,r=r.prev}else if(d){if(u=i?a:o[a],l=d[u],l==null)continue;f.push(u)}let v;if(!Array.isArray(l)){var g,m;nd(l)||lv(!1,`Invalid AST Node: ${pv(l)}.`);const T=w?(g=s.get(l.kind))===null||g===void 0?void 0:g.leave:(m=s.get(l.kind))===null||m===void 0?void 0:m.enter;if(v=T==null?void 0:T.call(e,l,u,d,f,p),v===xv)break;if(v===!1){if(!w){f.pop();continue}}else if(v!==void 0&&(c.push([u,v]),!w))if(nd(v))l=v;else{f.pop();continue}}if(v===void 0&&D&&c.push([u,l]),w)f.pop();else{var _;r={inArray:i,index:a,keys:o,edits:c,prev:r},i=Array.isArray(l),o=i?l:(_=n[l.kind])!==null&&_!==void 0?_:[],a=-1,c=[],d&&p.push(d),d=l}}while(r!==void 0);return c.length!==0?c[c.length-1][1]:t}function _v(t,e){const n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function Av(t){return Ev(t,Tv)}const Nv=80,Tv={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>G(t.definitions,`

`)},OperationDefinition:{leave(t){const e=he("(",G(t.variableDefinitions,", "),")"),n=G([t.operation,G([t.name,e]),G(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:s})=>t+": "+e+he(" = ",n)+he(" ",G(s," "))},SelectionSet:{leave:({selections:t})=>Ht(t)},Field:{leave({alias:t,name:e,arguments:n,directives:s,selectionSet:r}){const i=he("",t,": ")+e;let o=i+he("(",G(n,", "),")");return o.length>Nv&&(o=i+he(`(
`,fo(G(n,`
`)),`
)`)),G([o,G(s," "),r]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+he(" ",G(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>G(["...",he("on ",t),G(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:s,selectionSet:r})=>`fragment ${t}${he("(",G(n,", "),")")} on ${e} ${he("",G(s," ")," ")}`+r},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?fv(t):vv(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+G(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+G(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+he("(",G(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>he("",t,`
`)+G(["schema",G(e," "),Ht(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>he("",t,`
`)+G(["scalar",e,G(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>he("",t,`
`)+G(["type",e,he("implements ",G(n," & ")),G(s," "),Ht(r)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:s,directives:r})=>he("",t,`
`)+e+(id(n)?he(`(
`,fo(G(n,`
`)),`
)`):he("(",G(n,", "),")"))+": "+s+he(" ",G(r," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:s,directives:r})=>he("",t,`
`)+G([e+": "+n,he("= ",s),G(r," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:s,fields:r})=>he("",t,`
`)+G(["interface",e,he("implements ",G(n," & ")),G(s," "),Ht(r)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:s})=>he("",t,`
`)+G(["union",e,G(n," "),he("= ",G(s," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:s})=>he("",t,`
`)+G(["enum",e,G(n," "),Ht(s)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>he("",t,`
`)+G([e,G(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:s})=>he("",t,`
`)+G(["input",e,G(n," "),Ht(s)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,repeatable:s,locations:r})=>he("",t,`
`)+"directive @"+e+(id(n)?he(`(
`,fo(G(n,`
`)),`
)`):he("(",G(n,", "),")"))+(s?" repeatable":"")+" on "+G(r," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>G(["extend schema",G(t," "),Ht(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>G(["extend scalar",t,G(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>G(["extend type",t,he("implements ",G(e," & ")),G(n," "),Ht(s)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:s})=>G(["extend interface",t,he("implements ",G(e," & ")),G(n," "),Ht(s)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>G(["extend union",t,G(e," "),he("= ",G(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>G(["extend enum",t,G(e," "),Ht(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>G(["extend input",t,G(e," "),Ht(n)]," ")}};function G(t,e=""){var n;return(n=t==null?void 0:t.filter(s=>s).join(e))!==null&&n!==void 0?n:""}function Ht(t){return he(`{
`,fo(G(t,`
`)),`
}`)}function he(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function fo(t){return he("  ",t.replace(/\n/g,`
  `))}function id(t){var e;return(e=t==null?void 0:t.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}var xc=(t=>(t.PersonalMessage="PERSONAL_MESSAGE",t.TransactionData="TRANSACTION_DATA",t))(xc||{});class lt extends String{constructor(e,n){super(e),this.value=e,this.__meta__=n}toString(){return this.value}}new lt(`
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
  ... on ConsensusAddressOwner {
    startVersion
    owner {
      address
    }
  }
}
    `,{fragmentName:"OBJECT_OWNER_FIELDS"});new lt(`
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
  ... on ConsensusAddressOwner {
    startVersion
    owner {
      address
    }
  }
}`,{fragmentName:"OBJECT_FIELDS"});new lt(`
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
  ... on ConsensusAddressOwner {
    startVersion
    owner {
      address
    }
  }
}`,{fragmentName:"MOVE_OBJECT_FIELDS"});new lt(`
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
    `,{fragmentName:"TRANSACTION_FIELDS"});const Ov=new lt(`
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
    `),jv=new lt(`
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
    `),Cv=new lt(`
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
  ... on ConsensusAddressOwner {
    startVersion
    owner {
      address
    }
  }
}`),kv=new lt(`
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
    `),Dv=new lt(`
    query getReferenceGasPrice {
  epoch {
    referenceGasPrice
  }
}
    `),Uv=new lt(`
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
    `),Bv=new lt(`
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
  ... on ConsensusAddressOwner {
    startVersion
    owner {
      address
    }
  }
}`),Lv=new lt(`
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
  ... on ConsensusAddressOwner {
    startVersion
    owner {
      address
    }
  }
}`),zv=new lt(`
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
}`),Pv=new lt(`
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
}`),Rv=new lt(`
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
}`),$v=new lt(`
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
    `);var Bp=t=>{throw TypeError(t)},Cu=(t,e,n)=>e.has(t)||Bp("Cannot "+n),Fv=(t,e,n)=>(Cu(t,e,"read from private field"),n?n.call(t):e.get(t)),od=(t,e,n)=>e.has(t)?Bp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Vv=(t,e,n,s)=>(Cu(t,e,"write to private field"),e.set(t,n),n),Rt=(t,e,n)=>(Cu(t,e,"access private method"),n),Ro,mt,Ct;class Kv extends Qh{constructor({graphqlClient:e,mvr:n}){super({network:e.network,base:e,mvr:n}),od(this,mt),od(this,Ro),Vv(this,Ro,e)}async getObjects(e){const n=[];let s=!0,r=null;for(;s;){const i=await Rt(this,mt,Ct).call(this,{query:Lv,variables:{objectIds:e.objectIds,cursor:r}},o=>o.objects);n.push(...i.nodes),s=i.pageInfo.hasNextPage,r=i.pageInfo.endCursor??null}return{objects:e.objectIds.map(i=>le(i)).map(i=>n.find(o=>o.address===i)??new Mn("notFound",`Object ${i} not found`)).map(i=>{var o,a,c,l,u;return i instanceof Mn?i:{id:i.address,version:i.version.toString(),digest:i.digest,owner:za(i.owner),type:(c=(a=(o=i.asMoveObject)==null?void 0:o.contents)==null?void 0:a.type)==null?void 0:c.repr,content:Promise.resolve((u=(l=i.asMoveObject)==null?void 0:l.contents)!=null&&u.bcs?we(i.asMoveObject.contents.bcs):new Uint8Array)}})}}async getOwnedObjects(e){const n=await Rt(this,mt,Ct).call(this,{query:Bv,variables:{owner:e.address,limit:e.limit,cursor:e.cursor,filter:e.type?{type:e.type}:void 0}},s=>{var r;return(r=s.address)==null?void 0:r.objects});return{objects:n.nodes.map(s=>{var r,i,o;return{id:s.address,version:s.version.toString(),digest:s.digest,owner:za(s.owner),type:(i=(r=s.contents)==null?void 0:r.type)==null?void 0:i.repr,content:Promise.resolve((o=s.contents)!=null&&o.bcs?we(s.contents.bcs):new Uint8Array)}}),hasNextPage:n.pageInfo.hasNextPage,cursor:n.pageInfo.endCursor??null}}async getCoins(e){const n=await Rt(this,mt,Ct).call(this,{query:Cv,variables:{owner:e.address,cursor:e.cursor,first:e.limit,type:e.coinType}},s=>{var r;return(r=s.address)==null?void 0:r.coins});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,objects:n.nodes.map(s=>{var r,i,o;return{id:s.address,version:s.version.toString(),digest:s.digest,owner:za(s.owner),type:(i=(r=s.contents)==null?void 0:r.type)==null?void 0:i.repr,balance:s.coinBalance,content:Promise.resolve((o=s.contents)!=null&&o.bcs?we(s.contents.bcs):new Uint8Array)}})}}async getBalance(e){const n=await Rt(this,mt,Ct).call(this,{query:jv,variables:{owner:e.address,type:e.coinType}},s=>{var r;return(r=s.address)==null?void 0:r.balance});return{balance:{coinType:n.coinType.repr,balance:n.totalBalance}}}async getAllBalances(e){const n=await Rt(this,mt,Ct).call(this,{query:Ov,variables:{owner:e.address}},s=>{var r;return(r=s.address)==null?void 0:r.balances});return{cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage,balances:n.nodes.map(s=>({coinType:s.coinType.repr,balance:s.totalBalance}))}}async getTransaction(e){const n=await Rt(this,mt,Ct).call(this,{query:Rv,variables:{digest:e.digest}},s=>s.transactionBlock);return{transaction:Pa(n)}}async executeTransaction(e){const n=await Rt(this,mt,Ct).call(this,{query:Pv,variables:{txBytes:xe(e.transaction),signatures:e.signatures}},s=>s.executeTransactionBlock);if(n.errors)throw n.errors.length===1?new Error(n.errors[0]):new AggregateError(n.errors.map(s=>new Error(s)));return{transaction:Pa(n.effects.transactionBlock)}}async dryRunTransaction(e){const n=await Rt(this,mt,Ct).call(this,{query:zv,variables:{txBytes:xe(e.transaction)}},s=>s.dryRunTransactionBlock);if(n.error)throw new Error(n.error);return{transaction:Pa(n.transaction)}}async getReferenceGasPrice(){return{referenceGasPrice:(await Rt(this,mt,Ct).call(this,{query:Dv},n=>{var s;return(s=n.epoch)==null?void 0:s.referenceGasPrice})).referenceGasPrice}}async getDynamicFields(e){const n=await Rt(this,mt,Ct).call(this,{query:kv,variables:{parentId:e.parentId}},s=>{var r;return(r=s.owner)==null?void 0:r.dynamicFields});return{dynamicFields:n.nodes.map(s=>{var i,o,a,c,l,u,d,f,p,g,m;const r=((i=s.value)==null?void 0:i.__typename)==="MoveObject"?(a=(o=s.value.contents)==null?void 0:o.type)==null?void 0:a.repr:(c=s.value)==null?void 0:c.type.repr;return{id:vh(e.parentId,(l=s.name)==null?void 0:l.type.repr,(u=s.name)==null?void 0:u.bcs),type:Mr(((d=s.value)==null?void 0:d.__typename)==="MoveObject"?`0x2::dynamic_field::Field<0x2::dynamic_object_field::Wrapper<${(f=s.name)==null?void 0:f.type.repr}>,0x2::object::ID>`:`0x2::dynamic_field::Field<${(p=s.name)==null?void 0:p.type.repr},${r}>`),name:{type:(g=s.name)==null?void 0:g.type.repr,bcs:we((m=s.name)==null?void 0:m.bcs)},valueType:r}}),cursor:n.pageInfo.endCursor??null,hasNextPage:n.pageInfo.hasNextPage}}async verifyZkLoginSignature(e){const n=e.intentScope==="TransactionData"?xc.TransactionData:xc.PersonalMessage,s=await Rt(this,mt,Ct).call(this,{query:$v,variables:{bytes:e.bytes,signature:e.signature,intentScope:n,author:e.author}},r=>r.verifyZkloginSignature);return{success:s.success,errors:s.errors}}async resolveNameServiceNames(e){const n=await Rt(this,mt,Ct).call(this,{query:Uv,signal:e.signal,variables:{address:e.address,cursor:e.cursor,limit:e.limit}},s=>{var r;return(r=s.address)==null?void 0:r.suinsRegistrations});return{hasNextPage:n.pageInfo.hasNextPage,nextCursor:n.pageInfo.endCursor??null,data:n.nodes.map(s=>s.domain)??[]}}resolveTransactionPlugin(){throw new Error("GraphQL client does not support transaction resolution yet")}}Ro=new WeakMap;mt=new WeakSet;Ct=async function(t,e){const{data:n,errors:s}=await Fv(this,Ro).query(t);Wv(s);const r=n&&(e?e(n):n);if(r==null)throw new Error("Missing response data");return r};function Wv(t){if(!t||t.length===0)return;const e=t.map(n=>new qv(n));throw e.length===1?e[0]:new AggregateError(e)}class qv extends Error{constructor(e){super(e.message),this.locations=e.locations}}function za(t){var e,n,s,r;switch(t.__typename){case"AddressOwner":return{$kind:"AddressOwner",AddressOwner:(n=(e=t.owner)==null?void 0:e.asAddress)==null?void 0:n.address};case"ConsensusAddressOwner":return{$kind:"ConsensusAddressOwner",ConsensusAddressOwner:{owner:(s=t.owner)==null?void 0:s.address,startVersion:t.startVersion}};case"Immutable":return{$kind:"Immutable",Immutable:!0};case"Parent":return{$kind:"ObjectOwner",ObjectOwner:(r=t.parent)==null?void 0:r.address};case"Shared":return{$kind:"Shared",Shared:t.initialSharedVersion}}}function Pa(t){var n,s,r,i,o;const e={};return(n=t.effects)==null||n.unchangedSharedObjects.nodes.forEach(a=>{var c,l,u,d,f;if(a.__typename==="SharedObjectRead"){const p=(u=(l=(c=a.object)==null?void 0:c.asMoveObject)==null?void 0:l.contents)==null?void 0:u.type.repr,g=(f=(d=a.object)==null?void 0:d.asMoveObject)==null?void 0:f.address;p&&g&&(e[g]=p)}}),(s=t.effects)==null||s.objectChanges.nodes.forEach(a=>{var u,d,f,p,g,m;const c=a.address,l=((f=(d=(u=a.inputState)==null?void 0:u.asMoveObject)==null?void 0:d.contents)==null?void 0:f.type.repr)??((m=(g=(p=a.outputState)==null?void 0:p.asMoveObject)==null?void 0:g.contents)==null?void 0:m.type.repr);c&&l&&(e[c]=l)}),{digest:t.digest,effects:Xh(new Uint8Array((r=t.effects)==null?void 0:r.bcs)),epoch:((o=(i=t.effects)==null?void 0:i.epoch)==null?void 0:o.epochId)??null,objectTypes:Promise.resolve(e),transaction:Zh(t.bcs),signatures:t.signatures}}var Lp=t=>{throw TypeError(t)},zp=(t,e,n)=>e.has(t)||Lp("Cannot "+n),Hi=(t,e,n)=>(zp(t,e,"read from private field"),n?n.call(t):e.get(t)),Yi=(t,e,n)=>e.has(t)?Lp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Qi=(t,e,n,s)=>(zp(t,e,"write to private field"),e.set(t,n),n),ho,po,go,bo;class Gv extends Error{}class Hv extends Eu{constructor({url:e,fetch:n=fetch,headers:s={},queries:r={},network:i="unknown",mvr:o}){super({network:i}),Yi(this,ho),Yi(this,po),Yi(this,go),Yi(this,bo),Qi(this,ho,e),Qi(this,po,r),Qi(this,go,s),Qi(this,bo,(...a)=>n(...a)),this.core=new Kv({graphqlClient:this,mvr:o})}async query(e){const n=await Hi(this,bo).call(this,Hi(this,ho),{method:"POST",headers:{"Content-Type":"application/json",...Hi(this,go)},body:JSON.stringify({query:typeof e.query=="string"||e.query instanceof String?String(e.query):Av(e.query),variables:e.variables,extensions:e.extensions,operationName:e.operationName}),signal:e.signal});if(!n.ok)throw new Gv(`GraphQL request failed: ${n.statusText} (${n.status})`);return await n.json()}async execute(e,n){return this.query({...n,query:Hi(this,po)[e]})}}ho=new WeakMap;po=new WeakMap;go=new WeakMap;bo=new WeakMap;function Yv(t){for(let e=0;e<t.length;e++)if(t[e]!==0)return e;return-1}function ku(t,e){const n=t.toString(16);return xr(n.padStart(e*2,"0").slice(-32*2))}function Pp(t,e){const n=ku(t,e),s=Yv(n);return s===-1?new Uint8Array([0]):n.slice(s)}function Qv(t){return t==="accounts.google.com"?"https://accounts.google.com":t}function Zv(t){if(t.length!==1)throw new Error("Invalid base64Url character: "+t);const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(t);if(n===-1)throw new Error("Invalid base64Url character: "+t);const s=n.toString(2).padStart(6,"0");return Array.from(s).map(Number)}function Xv(t){let e=[];for(let n=0;n<t.length;n++){const s=t.charAt(n),r=Zv(s);e=e.concat(r)}return e}function Jv(t,e){if(t.length<2)throw new Error(`Input (s = ${t}) is not tightly packed because s.length < 2`);let n=Xv(t);const s=e%4;if(s!==0)if(s===1)n=n.slice(2);else if(s===2)n=n.slice(4);else throw new Error(`Input (s = ${t}) is not tightly packed because i%4 = 3 (i = ${e}))`);const r=(e+t.length-1)%4;if(r!==3)if(r===2)n=n.slice(0,n.length-2);else if(r===1)n=n.slice(0,n.length-4);else throw new Error(`Input (s = ${t}) is not tightly packed because (i + s.length - 1)%4 = 0 (i = ${e}))`);if(n.length%8!==0)throw new Error("We should never reach here...");const i=new Uint8Array(Math.floor(n.length/8));let o=0;for(let a=0;a<n.length;a+=8){const c=n.slice(a,a+8),l=parseInt(c.join(""),2);i[o++]=l}return new TextDecoder().decode(i)}function e4(t){if(!(t.slice(-1)==="}"||t.slice(-1)===","))throw new Error("Invalid claim");const e=JSON.parse("{"+t.slice(0,-1)+"}");if(Object.keys(e).length!==1)throw new Error("Invalid claim");const n=Object.keys(e)[0];return[n,e[n]]}function Rp(t,e){const n=Jv(t.value,t.indexMod4),[s,r]=e4(n);if(s!==e)throw new Error(`Invalid field name: found ${s} expected ${e}`);return r}const t4=h.struct("ZkLoginSignature",{inputs:h.struct("ZkLoginSignatureInputs",{proofPoints:h.struct("ZkLoginSignatureInputsProofPoints",{a:h.vector(h.string()),b:h.vector(h.vector(h.string())),c:h.vector(h.string())}),issBase64Details:h.struct("ZkLoginSignatureInputsClaim",{value:h.string(),indexMod4:h.u8()}),headerBase64:h.string(),addressSeed:h.string()}),maxEpoch:h.u64(),userSignature:h.vector(h.u8())});function n4(t){return t4.parse(typeof t=="string"?we(t):t)}var $p=t=>{throw TypeError(t)},Du=(t,e,n)=>e.has(t)||$p("Cannot "+n),Bn=(t,e,n)=>(Du(t,e,"read from private field"),n?n.call(t):e.get(t)),Zi=(t,e,n)=>e.has(t)?$p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),sr=(t,e,n,s)=>(Du(t,e,"write to private field"),e.set(t,n),n),ad=(t,e,n)=>(Du(t,e,"access private method"),n),Qt,Qr,Zr,yo,Ec;const s4=class is extends Di{constructor(e,{client:n}={}){super(),Zi(this,yo),Zi(this,Qt),Zi(this,Qr),Zi(this,Zr),sr(this,Qr,n),typeof e=="string"?sr(this,Qt,we(e)):e instanceof Uint8Array?sr(this,Qt,e):sr(this,Qt,Uint8Array.from(e)),sr(this,Zr,Bn(this,Qt).length!==Bn(this,Qt)[0]+1+32),Bn(this,Zr)&&sr(this,Qt,ur(Bn(this,Qt)))}static fromBytes(e,{client:n,address:s,legacyAddress:r}={}){let i;if(r===!0?i=new is(ur(e,!0),{client:n}):r===!1?i=new is(ur(e,!1),{client:n}):s?(i=new is(ur(e,!1),{client:n}),i.toSuiAddress()!==s&&(i=new is(ur(e,!0),{client:n}))):i=new is(e,{client:n}),s&&i.toSuiAddress()!==s)throw new Error("Public key bytes do not match the provided address");return i}static fromProof(e,n){const{issBase64Details:s,addressSeed:r}=n,i=Rp(s,"iss"),o=_c(BigInt(r),i,{legacyAddress:!0});if(o.toSuiAddress()===e)return o;const a=_c(BigInt(r),i,{legacyAddress:!1});if(a.toSuiAddress()!==e)throw new Error("Proof does not match address");return a}equals(e){return super.equals(e)}toSuiAddress(){return Bn(this,Zr)?ad(this,yo,Ec).call(this):super.toSuiAddress()}toRawBytes(){return Bn(this,Qt)}flag(){return Yn.ZkLogin}async verify(e,n){throw Error("does not support")}verifyPersonalMessage(e,n){const s=Ac(n),r=new is(s.publicKey).toSuiAddress();return cd({address:r,bytes:xe(e),signature:s.serializedSignature,intentScope:"PersonalMessage",client:Bn(this,Qr)})}verifyTransaction(e,n){const s=Ac(n),r=new is(s.publicKey).toSuiAddress();return cd({address:r,bytes:xe(e),signature:s.serializedSignature,intentScope:"TransactionData",client:Bn(this,Qr)})}verifyAddress(e){return e===super.toSuiAddress()||e===ad(this,yo,Ec).call(this)}};Qt=new WeakMap;Qr=new WeakMap;Zr=new WeakMap;yo=new WeakSet;Ec=function(){const t=ur(Bn(this,Qt),!0),e=new Uint8Array(t.length+1);return e[0]=this.flag(),e.set(t,1),le(Wt(Ss(e,{dkLen:32})).slice(0,Cr*2))};let r4=s4;function _c(t,e,n){const s=n!=null&&n.legacyAddress?Pp(t,32):ku(t,32),r=new TextEncoder().encode(Qv(e)),i=new Uint8Array(1+r.length+s.length);return i.set([r.length],0),i.set(r,1),i.set(s,1+r.length),new r4(i,n)}function ur(t,e=!1){const n=t[0]+1,s=BigInt(`0x${vs(t.slice(n))}`),r=e?Pp(s,32):ku(s,32),i=new Uint8Array(n+r.length);return i.set(t.slice(0,n),0),i.set(r,n),i}async function cd({address:t,bytes:e,signature:n,intentScope:s,client:r=new Hv({url:"https://sui-mainnet.mystenlabs.com/graphql"})}){const i=await r.core.verifyZkLoginSignature({bytes:e,signature:n,intentScope:s,author:t});return i.success===!0&&i.errors.length===0}function Ac(t){const e=typeof t=="string"?we(t):t;if(e[0]!==Yn.ZkLogin)throw new Error("Invalid signature scheme");const n=e.slice(1),{inputs:s,maxEpoch:r,userSignature:i}=n4(n),{issBase64Details:o,addressSeed:a}=s,c=Rp(o,"iss"),l=_c(BigInt(a),c);return{serializedSignature:xe(e),signatureScheme:"ZkLogin",zkLogin:{inputs:s,maxEpoch:r,userSignature:i,iss:c,addressSeed:BigInt(a)},signature:e,publicKey:l.toRawBytes()}}function i4({signature:t,signatureScheme:e,publicKey:n}){if(!n)throw new Error("`publicKey` is required");const s=n.toRawBytes(),r=new Uint8Array(1+t.length+s.length);return r.set([Yn[e]]),r.set(t,1),r.set(s,1+t.length),xe(r)}function o4(t){const e=we(t),n=Ou[e[0]];switch(n){case"Passkey":return kp(t);case"MultiSig":const s=Z.MultiSig.parse(e.slice(1));return{serializedSignature:t,signatureScheme:n,multisig:s,bytes:e,signature:void 0};case"ZkLogin":return Ac(t);case"ED25519":case"Secp256k1":case"Secp256r1":return ju(t);default:throw new Error("Unsupported signature scheme")}}const mo=32,Fp="suiprivkey";class a4{async signWithIntent(e,n){const s=_p(n,e),r=Ss(s,{dkLen:32});return{signature:i4({signature:await this.sign(r),signatureScheme:this.getKeyScheme(),publicKey:this.getPublicKey()}),bytes:xe(e)}}async signTransaction(e){return this.signWithIntent(e,"TransactionData")}async signPersonalMessage(e){const{signature:n}=await this.signWithIntent(h.vector(h.u8()).serialize(e).toBytes(),"PersonalMessage");return{bytes:xe(e),signature:n}}async signAndExecuteTransaction({transaction:e,client:n}){const s=await e.build({client:n}),{signature:r}=await this.signTransaction(s);return(await n.core.executeTransaction({transaction:s,signatures:[r]})).transaction}toSuiAddress(){return this.getPublicKey().toSuiAddress()}}class Uu extends a4{}function oa(t){const{prefix:e,words:n}=Oo.decode(t);if(e!==Fp)throw new Error("invalid private key prefix");const s=new Uint8Array(Oo.fromWords(n)),r=s.slice(1),i=Ou[s[0]];return{scheme:i,schema:i,secretKey:r}}function Bu(t,e){if(t.length!==mo)throw new Error("Invalid bytes length");const n=Yn[e],s=new Uint8Array(t.length+1);return s.set([n]),s.set(t,1),Oo.encode(Fp,Oo.toWords(s))}function ud(t){return!!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(t)}function Vp(t){return!!new RegExp("^m\\/(54|74)'\\/784'\\/[0-9]+'\\/[0-9]+\\/[0-9]+$").test(t)}function Lu(t){return b1(t,"")}function c4(t){return vs(Lu(t))}const Kp=Ar,u4="ed25519 seed",l4=2147483648,d4=new RegExp("^m(\\/[0-9]+')+$"),Wp=t=>t.replace("'",""),f4=t=>{const n=Ys.create(Kp,u4).update(su(t)).digest(),s=n.slice(0,32),r=n.slice(32);return{key:s,chainCode:r}},h4=({key:t,chainCode:e},n)=>{const s=new ArrayBuffer(4);new DataView(s).setUint32(0,n);const i=new Uint8Array(1+t.length+s.byteLength);i.set(new Uint8Array(1).fill(0)),i.set(t,1),i.set(new Uint8Array(s,0,s.byteLength),t.length+1);const o=Ys.create(Kp,e).update(i).digest(),a=o.slice(0,32),c=o.slice(32);return{key:a,chainCode:c}},p4=t=>d4.test(t)?!t.split("/").slice(1).map(Wp).some(isNaN):!1,ld=(t,e,n=l4)=>{if(!p4(t))throw new Error("Invalid derivation path");const{key:s,chainCode:r}=f4(e);return t.split("/").slice(1).map(Wp).map(o=>parseInt(o,10)).reduce((o,a)=>h4(o,a+n),{key:s,chainCode:r})},Nc=32;class qp extends Di{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==Nc)throw new Error(`Invalid public key input. Expected ${Nc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Yn.ED25519}async verify(e,n){let s;if(typeof n=="string"){const r=ju(n);if(r.signatureScheme!=="ED25519")throw new Error("Invalid signature scheme");if(!Or(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return Un.verify(s,e,this.toRawBytes())}}qp.SIZE=Nc;const dd="m/44'/784'/0'/0'/0'";class Kn extends Uu{constructor(e){if(super(),e)this.keypair={publicKey:e.publicKey,secretKey:e.secretKey.slice(0,32)};else{const n=Un.utils.randomPrivateKey();this.keypair={publicKey:Un.getPublicKey(n),secretKey:n}}}getKeyScheme(){return"ED25519"}static generate(){const e=Un.utils.randomPrivateKey();return new Kn({publicKey:Un.getPublicKey(e),secretKey:e})}static fromSecretKey(e,n){if(typeof e=="string"){const i=oa(e);if(i.schema!=="ED25519")throw new Error(`Expected a ED25519 keypair, got ${i.schema}`);return this.fromSecretKey(i.secretKey,n)}const s=e.length;if(s!==mo)throw new Error(`Wrong secretKey size. Expected ${mo} bytes, got ${s}.`);const r={publicKey:Un.getPublicKey(e),secretKey:e};if(!n||!n.skipValidation){const o=new TextEncoder().encode("sui validation"),a=Un.sign(o,e);if(!Un.verify(a,o,r.publicKey))throw new Error("provided secretKey is invalid")}return new Kn(r)}getPublicKey(){return new qp(this.keypair.publicKey)}getSecretKey(){return Bu(this.keypair.secretKey.slice(0,mo),this.getKeyScheme())}async sign(e){return Un.sign(e,this.keypair.secretKey)}static deriveKeypair(e,n){if(n==null&&(n=dd),!ud(n))throw new Error("Invalid derivation path");const{key:s}=ld(n,c4(e));return Kn.fromSecretKey(s)}static deriveKeypairFromSeed(e,n){if(n==null&&(n=dd),!ud(n))throw new Error("Invalid derivation path");const{key:s}=ld(n,e);return Kn.fromSecretKey(s)}}class zu{static stringToKeyPair(e){const n=zu.stringToPhrase(e);return Kn.deriveKeypair(n)}static stringToPhrase(e){let n=`${e}`;do n=n.repeat(2)+'*"';while(n.length<32);const s=Array.from(`${n}`).map(o=>o.charCodeAt(0));if(s.length>32)for(let o=32;o<s.length;o++){const a=o%32;s[a]=(s[a]+s[o])%256}const r=new Uint8Array(32);return r.set(s.slice(0,32)),p1(r,y1)}}const ls=class ls extends _n{constructor(e={}){super(e),this._suiMaster=e.suiMaster,this._objects={}}asArray(){return Object.values(this._objects)}findMostRecentByTypeName(e){return this.findMostRecent(n=>n.typeName==e)}find(e){for(const n in this._objects)if(e(this._objects[n]))return this._objects[n];return null}findMostRecent(e){let n=null,s=null;for(const r in this._objects)e(this._objects[r])&&(!n||n.getTime()<=this._objects[r].constructedAt.getTime())&&(n=this._objects[r].constructedAt,s=this._objects[r]);return s}push(e){if(e&&e.address){const n=e;return this._objects[n.address]=n,n}else if(e&&(""+e).indexOf("0x")===0){if(this._objects[e])return this._objects[e];const n=new Hs({id:e,suiMaster:this._suiMaster});return this._objects[n.address]=n,n}return null}byAddress(e){return this._objects[e]?this._objects[e]:null}async fetchObjects(){const e=this.asArray(),n=[];for(const i of e)!i.isDeleted&&n.indexOf(i.address)===-1&&n.push(i.address);this.log("querying details about",n.length,"objects"),this.log(n);let s=[];const r=50;for(let i=0;i<n.length;i+=r){const o=n.slice(i,i+r);let a=[],c=null;try{const l=console.warn;console.warn=u=>{c=u},a=await this._suiMaster._client.multiGetObjects({ids:o,options:{showType:!0,showContent:!0,showOwner:!0,showDisplay:!0}}),console.warn=l}catch(l){console.error(l)}c?this.log("got",a.length,"objects but with warning (ok, but probably it is different client vs rpc versions)"):this.log("got",a.length,"objects"),a&&a.length&&(s=s.concat(a))}for(const i of e){const o=s.find(a=>{var c;return i.idEquals((c=a==null?void 0:a.data)==null?void 0:c.objectId)});o?i.tryToFillDataFromObjectChange(o):s.find(c=>{var l,u;return((l=c==null?void 0:c.error)==null?void 0:l.code)=="deleted"&&i.idEquals((u=c==null?void 0:c.error)==null?void 0:u.object_id)})?i.markAsDeleted():this.log("not found in results",i)}}static instanceOf(e,n={}){return ls._instances[e]||(ls._instances[e]=new ls(n)),ls._instances[e]}};Js(ls,"_instances",{});let Tc=ls;class g4{constructor(e={}){this._coinType=e.coinType,this._suiCoins=e.suiCoins,this._exists=null,this._metadata=null}normalizeAmount(e){if(typeof e=="string"&&e.indexOf(".")!==-1){if(!this.decimals)throw new Error("Please load coin metadata first");return BigInt(Math.floor(parseFloat(e,10)*Math.pow(10,this.decimals)))}return BigInt(e)}async lazyNormalizeAmount(e){return await this.getMetadata(),this.normalizeAmount(e)}amountToString(e,n={}){if(!this.decimals)throw new Error("Please load coin metadata first");const s=!!n.withAbbr,r=n.separateThousands,i=(""+BigInt(e)).padStart(this.decimals+1,"0"),o=i.length-this.decimals;let a=i.substring(0,o)+"."+i.substring(o);if(a.includes(".")&&(a=a.replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""),a.includes(".")||(a=""+a+".0")),s){const c=BigInt(Math.floor(Number(a)));if(c>1000n){if(c<1000000n)return this.formatWithAbbr(c,1000n,"K",r);if(c>=1000000n&&c<1000000000n)return this.formatWithAbbr(c,1000000n,"M",r);if(c>=1000000000n&&c<1000000000000n)return this.formatWithAbbr(c,1000000000n,"B",r);if(c>=1000000000000n)return this.formatWithAbbr(c,1000000000000n,"T",r)}}if(r){const[c,l]=a.split("."),u=typeof r=="string"?r:",";a=""+c.replace(/\B(?=(\d{3})+(?!\d))/g,u)+"."+l}return a}formatWithAbbr(e,n,s,r=!1){let i=""+Math.floor(Number(e)/Number(n/1000n));i=i.padEnd(4,"0");const o=Intl.NumberFormat("en-US").format(Number(i));let a="";r&&(a=typeof r=="string"?r:",");const c=o.split(","),l=c.pop();return c.join(a)+"."+l+s}get suiMaster(){return this._suiCoins.suiMaster}get coinType(){return this._coinType.indexOf("0x")===0?this._coinType:"0x"+this._coinType}get coinObjectType(){return"0x2::coin::Coin<"+this.coinType+">"}get decimals(){if(this.metadata)return this.metadata.decimals}get metadata(){return this._metadata}get symbol(){return this.metadata?this.metadata.symbol:null}get name(){return this.metadata.name}isSUI(){return this._coinType.toLowerCase()=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::sui"}setMetadata(e){return e&&e.decimals&&e.decimals>0&&e.name&&e.symbol?(this._metadata=e,this._exists=!0,!0):!1}async getMetadata(){if(this._metadata)return this._metadata;if(this.__getMetadataPromise)return await this.__getMetadataPromise;this.__getMetadataResolver=null,this.__getMetadataPromise=new Promise(n=>{this.__getMetadataResolver=n});let e=null;try{e=await this.suiMaster.client.getCoinMetadata({coinType:this.coinType})}catch(n){console.error(n),e=null}return e?(this._metadata=e,this._exists=!0):this._exists=!1,this.__getMetadataResolver(!0),!0}async getBalance(e){const n=[];let s=null,r=null;do s=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:r}),n.push(...s.data),r=s.nextCursor;while(s.hasNextPage);let i=BigInt(0);for(const o of n)i=i+BigInt(o.balance);return i}async coinOfAmountToTxCoin(e,n,s,r=!1){const i=await this.lazyNormalizeAmount(s),o=BigInt(i),a=await this.coinObjectsEnoughForAmount(n,o,r);if(!a||!a.length)throw new Error("you do not have enough coins of type "+this.coinType);if(a.length==1)return this.isSUI()?e.add(Bt.SplitCoins(e.gas,[e.pure.u64(o)])):e.add(Bt.SplitCoins(e.object(a[0]),[e.pure.u64(o)]));{const c=a.shift();return e.add(Bt.MergeCoins(e.object(c),a.map(u=>e.object(u)))),e.add(Bt.SplitCoins(e.object(c),[e.pure.u64(o)]))}}async coinObjectsEnoughForAmount(e,n,s=!1){const r=BigInt(n),i=[],o=[];let a=null,c=null;do a=await this.suiMaster.client.getCoins({owner:e,coinType:this.coinType,limit:50,cursor:c}),o.push(...a.data),c=a.nextCursor;while(a.hasNextPage);o.sort((u,d)=>Number(d.balance)-Number(u.balance));let l=BigInt(0);for(const u of o)l<=r?(i.push(u.coinObjectId),l=l+BigInt(u.balance)):s&&BigInt(u.balance)==0n&&i.push(u.coinObjectId);return l>=r?i:null}}const b4=[{decimals:9,name:"Sui",symbol:"SUI",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x0000000000000000000000000000000000000000000000000000000000000002-sui-SUI.svg",id:"0x9258181f5ceac8dbffb7030890243caed69a9599d2886d957a9cb7656af3bdb3",type:"0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"},{decimals:5,name:"FUD",symbol:"FUD",description:"The community coin of Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1-fud-FUD.webp",id:"0x01087411ef48aaac1eb6e24803213e3a60a03b147dac930e5e341f17a85e524e",type:"0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD"},{decimals:4,name:"SPAM",symbol:"SPAM",description:"The original Proof of Spam coin",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a-spam-SPAM.webp",id:"0xe01e2172335cd2b52bf2b3010ae6c95e8c2b4958db72ba11330be70e85793274",type:"0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a::spam::SPAM"},{decimals:6,name:"DeepBook Token",symbol:"DEEP",description:"The DEEP token secures the DeepBook protocol, the premier wholesale liquidity venue for on-chain trading.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270-deep-DEEP.svg",id:"0x6e60b051a08fa836f5a7acd7c464c8d9825bc29c44657fe170fe9b8e1e4770c0",type:"0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP"},{decimals:6,name:"USDC",symbol:"USDC",description:"USDC is a US dollar-backed stablecoin issued by Circle. USDC is designed to provide a faster, safer, and more efficient way to send, spend, and exchange money around the world.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7-usdc-USDC.webp",id:"0x69b7a7c3c200439c1b5f3b19d7d495d5966d5f08de66c69276152f8db3992ec6",type:"0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC"},{decimals:6,name:"USDC (Bridged)",symbol:"USDC (Bridged)",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf-coin-COIN.webp",id:"0x4fbf84f3029bd0c0b77164b587963be957f853eccf834a67bb9ecba6ec80f189",type:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},{decimals:6,name:"Tether USD",symbol:"USDT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c-coin-COIN.webp",id:"0xfb0e3eb97dd158a5ae979dddfa24348063843c5b20eb8381dd5fa7c93699e45c",type:"0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN"},{decimals:9,name:"Bucket USD",symbol:"BUCK",description:"the stablecoin minted through bucketprotocol.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2-buck-BUCK.svg",id:"0x0db5e20f3fc2b12e294e5474babbec1c2efd96f21663accfbcb25da99a48838a",type:"0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK"},{decimals:9,name:"Cetus Token",symbol:"CETUS",description:"CETUS is the native token of Cetus Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b-cetus-CETUS.webp",id:"0x4c0dce55eff2db5419bbd2d239d1aa22b4a400c01bbb648b058a9883989025da",type:"0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS"},{decimals:9,name:"Turbos",symbol:"TURBOS",description:"Turbos Finance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a-turbos-TURBOS.svg",id:"0x95a4518ae9e019c757df6703dce9ea5ecac8b319b9afed3a44c4d50363a66b42",type:"0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS"},{decimals:9,name:"SPT",symbol:"SPT",description:"Seapad launchpad foundation token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca-spt-SPT.webp",id:"0x5075594c01d46f3bcbc4a7ef1462058273bece7793eebd0464963597c9fd0935",type:"0xb779486cfd6c19e9218cc7dc17c453014d2d9ba12d2ee4dbb0ec4e1e02ae1cca::spt::SPT"},{decimals:0,name:"KOTO",symbol:"KOTO",description:"The utility token of the Studio Mirai ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975-koto-KOTO.webp",id:"0x5db6c4ce2921c9ef5fe725d18f0f7b276bebde5fa7981f9bc2bb504c9913384a",type:"0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975::koto::KOTO"},{decimals:2,name:"BLUB",symbol:"BLUB",description:"A Dirty Fish in the Waters of the Sui Ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0-BLUB-BLUB.webp",id:"0xac32b519790cae96c3317457d903d61d04f1bc8f7710096d80fcba72c7a53703",type:"0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB"},{decimals:9,name:"Volo Staked SUI",symbol:"vSUI",description:"Volo's SUI staking solution provides the best user experience and highest level of decentralization, security, combined with an attractive reward mechanism and instant staking liquidity through a bond-like synthetic token called voloSUI.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55-cert-CERT.webp",id:"0xabd84a23467b33854ab25cf862006fd97479f8f6f53e50fe732c43a274d939bd",type:"0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT"},{decimals:9,name:"NAVX Token",symbol:"NAVX",description:"One-stop Liquidity Protocol on Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5-navx-NAVX.webp",id:"0xdc0e051f8aab62d5ba1816bb7a03097faeccb7546c958da571d48882fd8dd0cd",type:"0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX"},{decimals:9,name:"haSUI",symbol:"haSUI",description:"haSUI is a staking token of SUI",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d-hasui-HASUI.svg",id:"0x2c5f33af93f6511df699aaaa5822d823aac6ed99d4a0de2a4a50b3afa0172e24",type:"0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI"},{decimals:9,name:"HammerHead",symbol:"HHS",description:"The Coolest Shark on SUI ocean",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c-hhs-HHS.webp",id:"0x7e24b4469033ee68de54da91032a598e27e5c0ddfc366315d22d1eba7a955f96",type:"0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c::hhs::HHS"},{decimals:9,name:"REAP",symbol:"REAP",description:"Reap Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066-reap_token-REAP_TOKEN.webp",id:"0x4602dc7bd60d623c57424af5480fe9c104d30bbbb051af18e0a283b3dd7a5367",type:"0xde2d3e02ba60b806f81ee9220be2a34932a513fe8d7f553167649e95de21c066::reap_token::REAP_TOKEN"},{decimals:9,name:"Scallop",symbol:"SCA",description:"SCA is the native token of Scallop Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6-sca-SCA.webp",id:"0x5d26a1e9a55c88147ac870bfa31b729d7f49f8804b8b3adfdf3582d301cca844",type:"0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA"},{decimals:9,name:"afSUI",symbol:"AFSUI",description:"Aftermath Staked Sui",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc-afsui-AFSUI.webp",id:"0x2f9217f533e51334873a39b8026a4aa6919497b47f49d0986a4f1aec66f8a34d",type:"0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI"},{decimals:9,name:"Suiswap Token",symbol:"SSWP",description:"Suiswap Platform Governance Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc-TOKEN-TOKEN.webp",id:"0x41911b7d8d87ceee4043ea3b83f402a03d0ffa0b286e78b23dcd81c9cde0f02f",type:"0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc::TOKEN::TOKEN"},{decimals:1,name:"SuiBoxer Coin",symbol:"SBOX",description:"SUI said fuck off but we say welcome, airdrop for everyone.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6-sbox-SBOX.webp",id:"0x7f35ac7fe5a05df9e68fa7d633a382db4f002209e57ccee3bf9d9f73eedff1b9",type:"0xbff8dc60d3f714f678cd4490ff08cabbea95d308c6de47a150c79cc875e0c7c6::sbox::SBOX"},{decimals:6,name:"SUI PEPE",symbol:"SPEPE",description:"The biggest memecoin on SUI blockchain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df-sui_pepe-SUI_PEPE.webp",id:"0xfdf83fbcc1ad8a407d32791e43a4019e89474f7031aa64b8c05834b1af420eae",type:"0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE"},{decimals:5,name:"Sacabam",symbol:"SCB",description:"The best meme token that Sui has ever seen",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001-scb-SCB.webp",id:"0xa34116a52f537f5235fe5d9a2e92195ffcdb2b55afba70b2b86b40c7f89bb01d",type:"0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001::scb::SCB"},{decimals:9,name:"MOVE",symbol:"MOVE",description:"BlueMove",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f-smove-SMOVE.webp",id:"0x7cfcc03055a0ba4c5ba7fb9727a77e23ccf4d59035646c3c3caf58060eed09a1",type:"0xd9f9b0b4f35276eecd1eea6985bfabe2a2bbd5575f9adb9162ccbdb4ddebde7f::smove::SMOVE"},{decimals:8,name:"Wrapped Ether",symbol:"WETH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5-coin-COIN.webp",id:"0x8900e4ceede3363bef086d6b50ca89d816d0e90bf6bc46efefe1f8455e08f50f",type:"0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN"},{decimals:9,name:"SUIA",symbol:"SUIA",description:"SUIA is the native token of Suia.io",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19-suia_token-SUIA_TOKEN.webp",id:"0x5875baf15d9fd9cc6148dd3866266f6fc3a3064170434efe97b9ea8c23a50775",type:"0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19::suia_token::SUIA_TOKEN"},{decimals:8,name:"FlowX",symbol:"FLX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c-flx-FLX.svg",id:"0x0bfe34db38444ff4a38e44b86128c7e02d551b8fdca9709fde140292d1ef6e95",type:"0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c::flx::FLX"},{decimals:8,name:"Aptos Coin",symbol:"APT",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37-coin-COIN.webp",id:"0xc969c5251f372c0f34c32759f1d315cf1ea0ee5e4454b52aea08778eacfdd0a8",type:"0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN"},{decimals:8,name:"Wrapped SOL",symbol:"SOL",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8-coin-COIN.webp",id:"0x4d2c39082b4477e3e79dc4562d939147ab90c42fc5f3e4acf03b94383cd69b6e",type:"0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN"},{decimals:8,name:"Wrapped Matic",symbol:"WMATIC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676-coin-COIN.webp",id:"0xb45d92d3ee25147c3235f881e63f7f362f9d6cbdfcba1f120fae6a6c930a1c8c",type:"0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN"},{decimals:8,name:"Wrapped BNB",symbol:"WBNB",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f-coin-COIN.webp",id:"0x1d0975ab0726f2e52384b6ea0f2c94c2dbdad8b004ee6b5ee552a3c789c044f0",type:"0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN"},{decimals:6,name:"Flame Token",symbol:"FLAME",description:"Flame Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2-flame-FLAME.webp",id:"0x1f42388fe61ae47fcd33f089bd0ee73f19f3984b2b6c09a51a755d0420fe6eab",type:"0x247a6d271810efbe80943433e84b9360e2f976fce89e7c19dc680f5aae8738e2::flame::FLAME"},{decimals:6,name:"ISSP Coin",symbol:"ISSP",description:"Sui20 Coin for ISSP",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8-issp-ISSP.webp",id:"0x39529b412fe961f76da1485ee48dbf7a2a084845b7f0f45eb97196e602446bb1",type:"0xd0ea9bc91c3855e9b58a51cd55e8455b37bd5c75f70b4d6e97e54b55c4ba4ae8::issp::ISSP"},{decimals:9,name:"Suizuki",symbol:"ZUKI",description:"Fast chain needs fast car",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908-zuki-ZUKI.webp",id:"0x03e0c971e4bf3f1a3d0c220bb93c041c873823e2382e081a4330c4c107361d7a",type:"0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908::zuki::ZUKI"},{decimals:9,name:"Burrial",symbol:"BURRY",description:"Burry your `Sui.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2-burry-BURRY.webp",id:"0xb3e2d41c9d775545e299faa739d6448108c09ff997d13cac0e21de64c66413ee",type:"0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2::burry::BURRY"},{decimals:8,name:"Poseidollar",symbol:"PDO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880-pdo-PDO.webp",id:"0xf637a1acf7ec74634baec11b0a7cbd24244fe7d8bee7bc636cd2dcc12c756016",type:"0x4fc3949a4a8fe3ad9c75cec9724ff2b2d8520506b6129c9d8f0fcc2a1e4a8880::pdo::PDO"},{decimals:6,name:"Sudo LP Token",symbol:"SLP",description:"LP Token for Sudo Market",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2-slp-SLP.webp",id:"0xaa1c21d59252f4b790faf9ab1c3a9fac5be59b612688c0ec2e24807d6cf9f626",type:"0xc44d97a4bc4e5a33ca847b72b123172c88a6328196b71414f32c3070233604b2::slp::SLP"},{decimals:8,name:"Wrapped AVAX",symbol:"WAVAX",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766-coin-COIN.webp",id:"0x23580088ff9f83848f86bc1cbf4964735116027e9cccad11b2dc96f16badab72",type:"0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN"},{decimals:8,name:"Wrapped BTC",symbol:"WBTC",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881-coin-COIN.webp",id:"0x5d3c6e60eeff8a05b693b481539e7847dfe33013e7070cdcb387f5c0cac05dfd",type:"0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN"},{decimals:8,name:"Wrapped Fantom",symbol:"WFTM",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396-coin-COIN.webp",id:"0x8b55537cb11498721f7bbe2055a9a3e9c947da81765e98d4313c820bdd7aa630",type:"0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN"},{decimals:8,name:"Celo native asset",symbol:"CELO",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f-coin-COIN.webp",id:"0xe288c52bb4d70465267ed1c8f727252a40e865ce9a9d5343d13d40f5e1a1fc46",type:"0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN"},{decimals:8,name:"Poseidollar Shares",symbol:"PSH",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a-psh-PSH.webp",id:"0xf6b09ea64d2f4f70e47794d84e432552ec9c7e948bf91b3eb707a5a2d056bc74",type:"0x3c1227010835ecf9cb8f2bf9993aa9378bb951f0b3a098de6f0ee20385e01c4a::psh::PSH"},{decimals:6,name:"Ondo US Dollar Yield",symbol:"USDY",description:"Ondo US Dollar Yield",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb-usdy-USDY.svg",id:"0xd8dd6cf839e2367de6e6107da4b4361f44798dd6cf26d094058d94e4cee25e36",type:"0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY"},{decimals:8,name:"Wrapped GLMR",symbol:"WGLMR",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75-coin-COIN.webp",id:"0xcd56eb0efc872d7e27fa9e5e31d70be594ccc4f40a6354521201b0e15971c8de",type:"0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75::coin::COIN"},{decimals:6,name:"SUIZ",symbol:"SUIZ",description:"Suizzle Proof of Work Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d-suiz-SUIZ.webp",id:"0x5e6858f47b0d3246177ec68075f718e80a83bab37b5471333525fba838147417",type:"0xda79c0756319ea12c1679cb0d2c9fa85c66c0c724f45b7d1af0f7ed79fe4573d::suiz::SUIZ"},{decimals:9,name:"BaySwap Token",symbol:"BSWT",description:"BaySwap governance token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b-bswt-BSWT.webp",id:"0xeef5a485257ebd7e555c6d33a0a6a6cac157e10c05fe6a819488b8e521bce5f2",type:"0xf0fe2210b4f0c4e3aff7ed147f14980cf14f1114c6ad8fd531ab748ccf33373b::bswt::BSWT"},{decimals:9,name:"Causa Sui",symbol:"CAUSA",description:"Ex Unitae Vires - Ens Causa Sui * suiprivkey1qr3uhgze5yuglnr6uygkyesp8z76pxu0tt2pd63gyeglda60frpn7n5epp0",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8-causa-CAUSA.webp",id:"0xb7ba98fb5ce46aa72235824632b757c064067de0239458a289348748df8c51bd",type:"0xc12fb8de513df4c6541d8dff0dbfd01b6079611703e01a4c0876e3c834c96be8::causa::CAUSA"},{decimals:9,name:"Suicune",symbol:"HSUI",description:"The Legendary Beast of SUI, believed to be both the embodiment of the north winds and compassion of pure spring waters. Suicune will be fully community operated.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533-suicune-SUICUNE.webp",id:"0x9770330e38ad3f4723463085e2cc8c5e2e3df98292c1b5ee83ed3ed1f08f8381",type:"0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533::suicune::SUICUNE"},{decimals:5,name:"CHOPSUI",symbol:"CHOP",description:"Chopsui token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a-chopsui-CHOPSUI.webp",id:"0x78f4acfb5f55f354739be22231c0b166a6c0debb7464cf5bd0df3544780e6b62",type:"0xecac50a7ae52df320e71f87ed97b2c44fdd0695462080591d38a06e3927b6a8a::chopsui::CHOPSUI"},{decimals:9,name:"Stork REDACTED",symbol:"STORKPOINT",description:"Stork Protocol.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736-storktoken-STORKTOKEN.webp",id:"0xf9281ff20ff16740a93f9d378732d0f87c7776d0325fee345c9c948d6a680629",type:"0x3cf6e24398c526fd1e0c46e22d4c1f88e3f3c14ba3df6fdaa6dd6d4aab202736::storktoken::STORKTOKEN"},{decimals:9,name:"LUCKYSTAR",symbol:"LUCK",description:"LUCKYSTAR TOKEN",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179-luck-LUCK.svg",id:"0xa9cb7f72c96d23437199bcf6731b08a7e225d7efe427d04f4c69e63a8940c2f3",type:"0x202591744d54ee4f4af736ef3b8508f3d46d982c36747d9587032bd549122179::luck::LUCK"},{decimals:9,name:"Simba the lonely lion",symbol:"SIMBA",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72-simba-SIMBA.webp",id:"0x4d3524dbaeddff858737d17e71b4a35c9971408f917fc426e289c04d8f65c6d5",type:"0x5d6881b68371f1d801ad93fb40d1cb130dd1975717170190207651b701938b72::simba::SIMBA"},{decimals:8,name:"Vaporeon",symbol:"VAPOREON",description:"Our favorite water-type pokemon swimming on Sui. Twitter: @VaporProtocol",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79-vaporeon-VAPOREON.webp",id:"0xb4294ab2ddf3e704640278ea2e0a1e04837e68b7774cd3f9f8c7115fe45d4c27",type:"0x84d155fb70aebcc1391bf497d8fc139154be745765dfec57faef4704f4112c79::vaporeon::VAPOREON"},{decimals:2,name:"ovan suu",symbol:"SUU",description:"Co-founder of Suu Network Web 2",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24-suu-SUU.webp",id:"0x3eac27d0eb0848abd5ad35a16728d0e40d06a8155b94da4cddc2a90a3f893d76",type:"0x8b9dc9a32c2f5ae548cece17ca3e31bc0cda4bb505bcf8395c8351c76799cf24::suu::SUU"},{decimals:12,name:"Pearl",symbol:"PRL",description:"The governance token of SuiPearl - the Yield Optimizer on Sui Network.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64-prl-PRL.webp",id:"0xc1274dbe242a6c4c4b881c03a862def371d9a4ae70da3348101263b4fe44e4fa",type:"0x4e56b39acd75721999cf833062dfb77b1d51e749b02d90f049a5688e21919a64::prl::PRL"},{decimals:9,name:"Suiba Inu",symbol:"SUIB",description:"Emerging from Shiba's boundless love, Suiba, your liquid companion, journeys with you on the Sui chain.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b-suib-SUIB.svg",id:"0xfd7cfcb627381de46e4d7bdd4a0cf3c37d8f241c8e0513565531d5e410037c59",type:"0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB"},{decimals:5,name:"KIMCHI",symbol:"KIMCHI",description:"Kimchi stands as a symbol of the Asian builder community’s innovation and creativity, serving as a platform for individuals to collaborate, exchange ideas, and push the boundaries of decentralized finance. The coin aims to form an unstoppable force within the Sui ecosystem.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064-kimchi-KIMCHI.webp",id:"0x494f68995d31da43d11567a68f8fd686cb5821a7b65b63f6f2d3d950cd242d3e",type:"0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064::kimchi::KIMCHI"},{decimals:2,name:"Pikasui",symbol:"PIKA",description:"PIKA SUI is the starter of the Sui chain, designed to be your companion as you embark on the Sui chain journey. It's a memecoin that seeks to build enjoyable and amusing elements within the Sui chain",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692-pika-PIKA.webp",id:"0x8ceeca937d8273acb48a13690af83961c7b0832424f7e690c996e5f76d2011a6",type:"0x4b8da3a458be156af7bd17c0e754c703d6f7318fcfb2cf2a293d39c080a06692::pika::PIKA"},{decimals:9,name:"HOMITOKEN",symbol:"HOMI",description:" The HOMI token is the native token of the HOMINIDS platform. It allows users to buy and sell Hominids NFTs, participate in wagering games to earn rewards, and interact with other platform features. HOMI will also be used for platform governance, allowing holders to vote on future updates and important decisions.",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5-homi-HOMI.webp",id:"0xfcf9f351cb0ae2730d32c3862eaa03d3918768fd26094723e4d1e1889dab5239",type:"0xf6e7fcac642280ba427bc1b3e158a169fa0624cad36cd79fc931aba3502880a5::homi::HOMI"},{decimals:2,name:"LAMBALL",symbol:"LAMB",description:"'HAH, you just got Lamballed!' Lamball ($LAMB): Your Pal on the SUI blockchain. This is an exciting fusion of PalWorld and crypto. Dive into our PalWorld server, engage in thrilling events and contests to earn $LAMB and other cool prizes. Connect with fellow Palworld enthusiasts and experience the best of both realms. $LAMB has something for everyone. Join us and discover the vibrant world of $LAMB on the SUI blockchain!",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0-lamb-LAMB.webp",id:"0xea8fc1f2e7e7619a13db86cc7934de285f8465cd868df2d5358470ea181a74d3",type:"0xcfd2bc58d96eb86bc48110e1cfdeebb5b9531317c2203cb415dfd44fab587cf0::lamb::LAMB"},{decimals:9,name:"Wen Dexscreener",symbol:"WEND",description:"When will Dexscreener integrate FlowX Finance ?",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272-wend-WEND.webp",id:"0xde918bf2751178443a054c8772f78bd52b0cd18aa985b8369756ea7fc2b10a9f",type:"0x9aff4aa4dd737a71dc374c03deaec1e11b20a51a46e64f4605e95cc3c966f272::wend::WEND"},{decimals:9,name:"Sui Generis",symbol:"GENERIS",description:"Sui Generis Auction House Community Token",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47-generis-GENERIS.webp",id:"0x13a00f780e30945830f97124a23d8554a3c98b0c8fa347073bfe6e50c8eff9f4",type:"0x18d1215fb5a050ed22da5cdefb9601adead8a9c3576e30c9bc03cbdb2eb17b47::generis::GENERIS"},{decimals:9,name:"SuiPad",symbol:"SUIP",description:"SuiPad The Premier Launchpad for Tier-1 Projects",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee-SUIP-SUIP.webp",id:"0x3e50a0a576877092bfaa4f8e4ec8cd7dd0a4a281bec3f806583949cf7873d07b",type:"0xe4239cd951f6c53d9c41e25270d80d31f925ad1655e5ba5b543843d4a66975ee::SUIP::SUIP"},{decimals:6,name:"USDCsol",symbol:"USDCsol",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037-coin-COIN.webp",id:"0x39047ec989791d939efee4c9b9dbc6885c5d12a5aaacf44152319b2289ea9b9e",type:"0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN"},{decimals:8,name:"USDCbnb",symbol:"USDCbnb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba-coin-COIN.webp",id:"0x8a775c4bbc9639c88e86fdc624bb30d0bfd22a1597b03da29198de214ddaa126",type:"0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN"},{decimals:6,name:"USDCarb",symbol:"USDCarb",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb-coin-COIN.webp",id:"0xe2720ee6eed0e11490bdbd1c6cc2282a7e442bf86c99a3a4ec67797c84b9fffc",type:"0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb::coin::COIN"},{decimals:6,name:"cUSDCe",symbol:"cUSDCe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdc_coin-CELER_USDC_COIN.webp",id:"0x9026b41cf942faaba954c8d9051d93b5bba015436141495b47465eb677d14e1e",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdc_coin::CELER_USDC_COIN"},{decimals:6,name:"cUSDTe",symbol:"cUSDTe",description:"",iconUrl:"https://coinmeta.polymedia.app/img/coins/0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690-celer_usdt_coin-CELER_USDT_COIN.webp",id:"0x2bce194d8454616d16d3ee756fef0c83970556233851fb9da2e5d154952338b8",type:"0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN"}],y4=b4,ds=class ds extends _n{constructor(e={}){if(super(e),this._suiMaster=e.suiMaster,!this._suiMaster)throw new Error("suiMaster is required");this._coins={},this._suiMaster.onMainnet&&this.setCoinMetas(y4)}get suiMaster(){return this._suiMaster}get coins(){return this._coins}setCoinMetas(e){let n=0;if(Array.isArray(e))for(const s of e)s.type&&this.get(s.type).setMetadata(s)&&n++;else for(const s in e)this.get(s).setMetadata(e[s])&&n++;return n}async getAllBalances(e={}){let n=e.owner;n||(n=this._suiMaster.address);const s=[],r=await this._suiMaster.client.getAllBalances({owner:n});for(const i of r){const o={coin:this.get(i.coinType),coinType:i.coinType,coinObjectCount:i.coinObjectCount,totalBalance:BigInt(i.totalBalance),lockedBalance:i.lockedBalance};s.push(o)}return s}normalizeCoinType(e){let n=""+e;return n.indexOf("::")==-1&&n.toLowerCase()=="sui"&&(n="0x2::sui::SUI"),n.indexOf("0x")==-1&&(n="0x"+n),n=Mr(n),n}get(e){const n=this.normalizeCoinType(e);let s=this._coins[n];return s||(s=new g4({coinType:n,suiCoins:this}),this._coins[n]=s,s)}static getSingleton(e={}){const s=e.suiMaster.connectedChain;return ds._singleInstances[s]||(ds._singleInstances[s]=new ds(e)),ds._singleInstances[s]}};Js(ds,"_singleInstances",{});let Oc=ds;/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Pu={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},m4={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},fd=BigInt(2);function w4(t){const e=Pu.p,n=BigInt(3),s=BigInt(6),r=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,d=Re(u,n,e)*u%e,f=Re(d,n,e)*u%e,p=Re(f,fd,e)*l%e,g=Re(p,r,e)*p%e,m=Re(g,i,e)*g%e,_=Re(m,a,e)*m%e,w=Re(_,c,e)*_%e,D=Re(w,a,e)*m%e,v=Re(D,n,e)*u%e,T=Re(v,o,e)*g%e,F=Re(T,s,e)*l%e,ae=Re(F,fd,e);if(!jc.eql(jc.sqr(ae),t))throw new Error("Cannot find square root");return ae}const jc=Nn(Pu.p,{sqrt:w4}),et=ra({...Pu,Fp:jc,lowS:!0,endo:m4},Ur),v4=Uint8Array.from([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Gp=Uint8Array.from(new Array(16).fill(0).map((t,e)=>e)),S4=Gp.map(t=>(9*t+5)%16),Hp=(()=>{const n=[[Gp],[S4]];for(let s=0;s<4;s++)for(let r of n)r.push(r[s].map(i=>v4[i]));return n})(),Yp=Hp[0],Qp=Hp[1],Zp=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>Uint8Array.from(t)),M4=Yp.map((t,e)=>t.map(n=>Zp[e][n])),I4=Qp.map((t,e)=>t.map(n=>Zp[e][n])),x4=Uint32Array.from([0,1518500249,1859775393,2400959708,2840853838]),E4=Uint32Array.from([1352829926,1548603684,1836072691,2053994217,0]);function hd(t,e,n,s){return t===0?e^n^s:t===1?e&n|~e&s:t===2?(e|~n)^s:t===3?e&s|n&~s:e^(n|~s)}const Xi=new Uint32Array(16);class _4 extends fu{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:s,h3:r,h4:i}=this;return[e,n,s,r,i]}set(e,n,s,r,i){this.h0=e|0,this.h1=n|0,this.h2=s|0,this.h3=r|0,this.h4=i|0}process(e,n){for(let p=0;p<16;p++,n+=4)Xi[p]=e.getUint32(n,!0);let s=this.h0|0,r=s,i=this.h1|0,o=i,a=this.h2|0,c=a,l=this.h3|0,u=l,d=this.h4|0,f=d;for(let p=0;p<5;p++){const g=4-p,m=x4[p],_=E4[p],w=Yp[p],D=Qp[p],v=M4[p],T=I4[p];for(let F=0;F<16;F++){const ae=Fi(s+hd(p,i,a,l)+Xi[w[F]]+m,v[F])+d|0;s=d,d=l,l=Fi(a,10)|0,a=i,i=ae}for(let F=0;F<16;F++){const ae=Fi(r+hd(g,o,c,u)+Xi[D[F]]+_,T[F])+f|0;r=f,f=u,u=Fi(c,10)|0,c=o,o=ae}}this.set(this.h1+a+u|0,this.h2+l+f|0,this.h3+d+r|0,this.h4+s+o|0,this.h0+i+c|0)}roundClean(){Gt(Xi)}destroy(){this.destroyed=!0,Gt(this.buffer),this.set(0,0,0,0,0)}}const A4=ea(()=>new _4);/*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Ji=et.ProjectivePoint,Ra=k0(Ur);function pd(t){ut(t);const e=t.length===0?"0":Wt(t);return BigInt("0x"+e)}function N4(t){if(typeof t!="bigint")throw new Error("bigint expected");return xr(t.toString(16).padStart(64,"0"))}const T4=uu("Bitcoin seed"),$a={private:76066276,public:76067358},Fa=2147483648,O4=t=>A4(Ur(t)),j4=t=>Fs(t).getUint32(0,!1),eo=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error("invalid number, should be from 0 to 2**32-1, got "+t);const e=new Uint8Array(4);return Fs(e).setUint32(0,t,!1),e};class gs{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return j4(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return Ra.encode(this.serialize(this.versions.private,Et(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Ra.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=$a){if(ut(e),8*e.length<128||8*e.length>512)throw new Error("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got "+e.length);const s=Ys(Ar,T4,e);return new gs({versions:n,chainCode:s.slice(32),privateKey:s.slice(0,32)})}static fromExtendedKey(e,n=$a){const s=Ra.decode(e),r=Fs(s),i=r.getUint32(0,!1),o={versions:n,depth:s[4],parentFingerprint:r.getUint32(5,!1),index:r.getUint32(9,!1),chainCode:s.slice(13,45)},a=s.slice(45),c=a[0]===0;if(i!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new gs({...o,privateKey:a.slice(1)}):new gs({...o,publicKey:a})}static fromJSON(e){return gs.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||$a,this.depth=e.depth||0,this.chainCode=e.chainCode||null,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!et.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:pd(e.privateKey),this.privKeyBytes=N4(this.privKey),this.pubKey=et.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=Ji.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=O4(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let s=this;for(const r of n){const i=/^(\d+)('?)$/.exec(r),o=i&&i[1];if(!i||i.length!==3||typeof o!="string")throw new Error("invalid child index: "+r);let a=+o;if(!Number.isSafeInteger(a)||a>=Fa)throw new Error("Invalid index");i[2]==="'"&&(a+=Fa),s=s.deriveChild(a)}return s}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=eo(e);if(e>=Fa){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Et(new Uint8Array([0]),a,n)}else n=Et(this.pubKey,n);const s=Ys(Ar,this.chainCode,n),r=pd(s.slice(0,32)),i=s.slice(32);if(!et.utils.isValidPrivateKey(r))throw new Error("Tweak bigger than curve order");const o={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const a=We(this.privKey+r,et.CURVE.n);if(!et.utils.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");o.privateKey=a}else{const a=Ji.fromHex(this.pubKey).add(Ji.fromPrivateKey(r));if(a.equals(Ji.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");o.publicKey=a.toRawBytes(!0)}return new gs(o)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return ut(e,32),et.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(ut(e,32),ut(n,64),!this.publicKey)throw new Error("No publicKey set!");let s;try{s=et.Signature.fromCompact(n)}catch{return!1}return et.verify(s,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return ut(n,33),Et(eo(e),new Uint8Array([this.depth]),eo(this.parentFingerprint),eo(this.index),this.chainCode,n)}}const Cc=33;class Xp extends Di{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==Cc)throw new Error(`Invalid public key input. Expected ${Cc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Yn.Secp256k1}async verify(e,n){let s;if(typeof n=="string"){const r=ju(n);if(r.signatureScheme!=="Secp256k1")throw new Error("Invalid signature scheme");if(!Or(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return et.verify(et.Signature.fromCompact(s),Tr(e),this.toRawBytes())}}Xp.SIZE=Cc;const C4="m/54'/784'/0'/0/0";class bs extends Uu{constructor(e){if(super(),e)this.keypair=e;else{const n=et.utils.randomPrivateKey(),s=et.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256k1"}static generate(){return new bs}static fromSecretKey(e,n){if(typeof e=="string"){const r=oa(e);if(r.schema!=="Secp256k1")throw new Error(`Expected a Secp256k1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=et.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=Wt(Ss(i,{dkLen:32})),a=et.sign(o,e);if(!et.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new bs({publicKey:s,secretKey:e})}static fromSeed(e){const n=et.getPublicKey(e,!0);return new bs({publicKey:n,secretKey:e})}getPublicKey(){return new Xp(this.keypair.publicKey)}getSecretKey(){return Bu(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=Tr(e);return et.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=C4),!Vp(n))throw new Error("Invalid derivation path");const s=gs.fromMasterSeed(Lu(e)).derive(n);if(s.publicKey==null||s.privateKey==null)throw new Error("Invalid key");return new bs({publicKey:s.publicKey,secretKey:s.privateKey})}}const kc=33;class Jp extends Di{constructor(e){if(super(),typeof e=="string"?this.data=we(e):e instanceof Uint8Array?this.data=e:this.data=Uint8Array.from(e),this.data.length!==kc)throw new Error(`Invalid public key input. Expected ${kc} bytes, got ${this.data.length}`)}equals(e){return super.equals(e)}toRawBytes(){return this.data}flag(){return Yn.Secp256r1}async verify(e,n){let s;if(typeof n=="string"){const r=o4(n);if(r.signatureScheme!=="Secp256r1")throw new Error("Invalid signature scheme");if(!Or(this.toRawBytes(),r.publicKey))throw new Error("Signature does not match public key");s=r.signature}else s=n;return wn.verify(wn.Signature.fromCompact(s),Tr(e),this.toRawBytes())}}Jp.SIZE=kc;const k4="m/74'/784'/0'/0/0";class ys extends Uu{constructor(e){if(super(),e)this.keypair=e;else{const n=wn.utils.randomPrivateKey(),s=wn.getPublicKey(n,!0);this.keypair={publicKey:s,secretKey:n}}}getKeyScheme(){return"Secp256r1"}static generate(){return new ys}static fromSecretKey(e,n){if(typeof e=="string"){const r=oa(e);if(r.schema!=="Secp256r1")throw new Error(`Expected a Secp256r1 keypair, got ${r.schema}`);return this.fromSecretKey(r.secretKey,n)}const s=wn.getPublicKey(e,!0);if(!n||!n.skipValidation){const i=new TextEncoder().encode("sui validation"),o=Wt(Ss(i,{dkLen:32})),a=wn.sign(o,e,{lowS:!0});if(!wn.verify(a,o,s,{lowS:!0}))throw new Error("Provided secretKey is invalid")}return new ys({publicKey:s,secretKey:e})}static fromSeed(e){const n=wn.getPublicKey(e,!0);return new ys({publicKey:n,secretKey:e})}getPublicKey(){return new Jp(this.keypair.publicKey)}getSecretKey(){return Bu(this.keypair.secretKey,this.getKeyScheme())}async sign(e){const n=Tr(e);return wn.sign(n,this.keypair.secretKey,{lowS:!0}).toCompactRawBytes()}static deriveKeypair(e,n){if(n==null&&(n=k4),!Vp(n))throw new Error("Invalid derivation path");const s=gs.fromMasterSeed(Lu(e)).derive(n).privateKey;return ys.fromSecretKey(s)}}class D4 extends Error{}async function U4({host:t,path:e,body:n,headers:s,method:r}){const i=new URL(e,t).toString(),o=await fetch(i,{method:r,body:n?JSON.stringify(n):void 0,headers:{"Content-Type":"application/json",...s||{}}});if(o.status===429)throw new D4("Too many requests from this client have been sent to the faucet. Please retry later");try{return await o.json()}catch(a){throw new Error(`Encountered error when parsing response from faucet, error: ${a}, status ${o.status}, response ${o}`)}}async function B4(t){const e=await U4({host:t.host,path:"/gas",body:{FixedAmountRequest:{recipient:t.recipient}},headers:t.headers,method:"POST"});if(e.error)throw new Error(`Faucet request failed: ${e.error}`);return e}function L4(t){switch(t){case"testnet":return"https://faucet.testnet.sui.io";case"devnet":return"https://faucet.devnet.sui.io";case"localnet":return"http://127.0.0.1:9123";default:throw new Error(`Unknown network: ${t}`)}}const ui=class ui extends _n{constructor(e={}){if(super(e),ui.instancesCount++,this._instanceN=ui.instancesCount,this._signer=null,this._keypair=null,this._address=null,e.signer)this._signer=e.signer,this._signer&&this._signer.connectedAddress&&(this._address=this._signer.connectedAddress);else if(e.keypair)this._keypair=e.keypair;else if(e.privateKey){const n=oa(e.privateKey);n&&n.schema&&(n.schema==="ED25519"?this._keypair=Kn.fromSecretKey(n.secretKey):n.schema=="Secp256k1"?this._keypair=bs.fromSecretKey(n.secretKey):n.schema=="Secp256r1"&&(this._keypair=ys.fromSecretKey(n.secretKey)))}else if(e.phrase){if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256r1")if(!e.accountIndex)this._keypair=ys.deriveKeypair(e.phrase);else{const n=`m/74'/784'/${e.accountIndex}'/0/0`;this._keypair=ys.deriveKeypair(e.phrase,n)}else if(e.keypairAlgo&&(""+e.keypairAlgo).toLowerCase()=="secp256k1")if(!e.accountIndex)this._keypair=bs.deriveKeypair(e.phrase);else{const n=`m/54'/784'/${e.accountIndex}'/0/0`;this._keypair=bs.deriveKeypair(e.phrase,n)}else if(!e.accountIndex)this._keypair=Kn.deriveKeypair(e.phrase);else{const n=`m/44'/784'/${e.accountIndex}'/0'/0'`;this._keypair=Kn.deriveKeypair(e.phrase,n)}this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress())}else e.as&&(this._keypair=zu.stringToKeyPair(e.as),this.log("goint to use keypair of",this._keypair.getPublicKey().toSuiAddress()));if(this._client=wt.normalizeClient(e.client),this._providerName=this._client?this._client.providerName:null,!this._client)throw new Error("Can not do anything without SuiClient. Set params.client at least to `local`");this._objectStorage=Tc.instanceOf(this._providerName,{debug:this._debug,suiMaster:this}),this._initialized=!1,this._packages={},this._suiCoins=new Oc({suiMaster:this,debug:this._debug})}get utils(){return wt}get suiCoins(){return this._suiCoins}get MIST_PER_SUI(){return BigInt(hh)}get Transaction(){return _r}get Commands(){return Bt}get SuiObject(){return Hs}get SuiTransaction(){return Ef}get SuiEvent(){return Xc}get SuiPaginatedResponse(){return ms}get objectStorage(){return this._objectStorage}get instanceN(){return this._instanceN}get client(){return this._client}get connectedChain(){return this._providerName}get onMainnet(){return this._providerName.split("sui:").join("").toLowerCase()==="mainnet"}get address(){return this._address}get signer(){return this._signer}package(e={}){return this.addPackage(e)}addPackage(e={}){if(e.id&&this._packages[e.id])return this._packages[e.id];const n=new Jw({...e,debug:this._debug,suiMaster:this});return e.id&&(this._packages[e.id]=n),n}async getClient(){return await this.initialize(),this._client}async initialize(){return this._initialized||(this.log("initializing..."),this._initialized=!0,!this._signer&&this._keypair&&(this._signer=this._keypair),this._signer?(this._signer.toSuiAddress?this._address=this._signer.toSuiAddress():this._signer.connectedAddress?this._address=this._signer.connectedAddress:this._address=await this._signer.getAddress(),this.log("initialized. connected as",this._address)):this.log("initialized in read-only mode.")),!0}async resolveNameServiceName(e={}){const n=await this.resolveNameServiceNames(e);return n&&n.length?n[0]:null}async resolveNameServiceNames(e={}){if(!this._address)return[];try{const n=await this._client.resolveNameServiceNames({address:this.address,format:e.format});if(n&&n.data)return n.data}catch{return[]}}async signAndExecuteTransaction(e){if(!e.chain){const s="sui:"+this._providerName.split("sui:").join("").toLowerCase();e.chain=s}e.account||(e.account={address:this._address});let n=null;this._keypair?(e.signer=this._keypair,n=await this._client.signAndExecuteTransaction(e)):this._signer&&(n=await this._signer.signAndExecuteTransaction(e));try{if(e&&e.requestType&&e.requestType=="WaitForLocalExecution")return await this.client.waitForTransaction({digest:n.digest,options:e.options||{}})}catch(s){this.log(s)}return n}async requestSuiFromFaucet(){await this.initialize();let e=BigInt(0);const n=this._providerName.split("sui:").join("");if(n==="mainnet")this.log(`no faucet on ${n}`);else{const s=L4(n);this.log(`requesting sui from faucet... ${s}`);const r=await B4({host:s,recipient:this._address});let i=0;if(r&&r.transferredGasObjects)for(let o of r.transferredGasObjects)e+=BigInt(o.amount),i++;this.log("got from faucet",e,"MIST in",i,"objects")}return e}async getBalance(e="0x2::sui::SUI",n=null){await this.initialize();let s=n;return!s&&this.address&&(s=this.address),await this._suiCoins.get(e).getBalance(s)}async fetchEvents(e={}){let n=e.query;const s={descending_order:e.descending_order||!1,query:n,limit:e.limit||50},r=new ms({debug:this._debug,suiMaster:this,params:s,method:"queryEvents",order:e.order});return await r.fetch(),r}async fetchTransactions(e={}){let n={};e.fromAddress&&(n.FromAddress=e.fromAddress),e.filter&&(n=e.filter);const s={descending_order:!1,filter:n,options:{showEffects:!0},limit:e.limit||50},r=new ms({debug:this._debug,suiMaster:this,params:s,method:"queryTransactionBlocks",order:e.order});return await r.fetch(),r}};Js(ui,"instancesCount",0);let Is=ui;Is.MIST_PER_SUI=BigInt(hh);Is.Transaction=_r;Is.Commands=Bt;Is.SuiUtils=wt;const Xe={DISCONNECT:"standard:disconnect",CONNECT:"standard:connect",EVENTS:"standard:events",SUI_SIGN_AND_EXECUTE_TX_BLOCK:"sui:signAndExecuteTransactionBlock",SUI_SIGN_TX_BLOCK:"sui:signTransactionBlock",SUI_SIGN_AND_EXECUTE_TX:"sui:signAndExecuteTransaction",SUI_SIGN_TX:"sui:signTransaction",SUI_SIGN_MESSAGE:"sui:signMessage",SUI_SIGN_PERSONAL_MESSAGE:"sui:signPersonalMessage"};class z4 extends _n{constructor(e={}){super(e),this._standartAdapter=null,e.standartAdapter&&this.setStandartAdapter(e.standartAdapter),this._name=e.name||null,this._icon=e.icon||null,this._downloadUrls=e.downloadUrls||{},this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1}async signAndExecuteTransaction(e){return this.hasFeature(Xe.SUI_SIGN_AND_EXECUTE_TX)?await this.getFeature(Xe.SUI_SIGN_AND_EXECUTE_TX).signAndExecuteTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(Xe.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e))}async signAndExecuteTransactionBlock(e){return await this.getFeature(Xe.SUI_SIGN_AND_EXECUTE_TX_BLOCK).signAndExecuteTransactionBlock(e)}async signTransactionBlock(e){return this.hasFeature(Xe.SUI_SIGN_TX)?await this.getFeature(Xe.SUI_SIGN_TX).signTransaction(e):(e.transactionBlock=e.transaction,await this.getFeature(Xe.SUI_SIGN_TX_BLOCK).signTransactionBlock(e))}async signTransactionBlock(e){return await this.getFeature(Xe.SUI_SIGN_TX_BLOCK).signTransactionBlock(e)}async signPersonalMessage(e){return this.hasFeature(Xe.SUI_SIGN_PERSONAL_MESSAGE)?await this.getFeature(Xe.SUI_SIGN_PERSONAL_MESSAGE).signPersonalMessage(e):await this.getFeature(Xe.SUI_SIGN_MESSAGE).signMessage(e)}async signMessage(e){return await this.signPersonalMessage(e)}async disconnect(e){const n=await this.getFeature(Xe.DISCONNECT).disconnect(e);return this.connectionUpdated(),n}getDownloadURL(){return this._downloadUrls&&this._downloadUrls.chrome?this._downloadUrls.chrome:null}get isDefault(){return!this._standartAdapter}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}get isConnected(){return this._isConnected}async connect(){try{await this.getFeature(Xe.CONNECT).connect()}catch(e){console.error(e)}this.connectionUpdated()}connectionUpdated(){const e=""+this._connectedAddress,n=""+this._connectedChain;try{this._standartAdapter&&this._standartAdapter.accounts&&this._standartAdapter.accounts.length?(this._connectedAddress=this._standartAdapter.accounts[0].address,this._connectedChain=this._standartAdapter.accounts[0].chains[0]):(this._connectedAddress=null,this._connectedChain=null)}catch{this._connectedAddress=null,this._connectedChain=null}(""+this._connectedAddress!=e||""+this._connectedChain!=n)&&(this._connectedAddress&&this._connectedChain?(this._isConnected=!0,this.emit("connected",this)):(this._isConnected=!1,this.emit("disconnected",this)))}setStandartAdapter(e){if(this._standartAdapter)return!0;let n=!1;for(const s in e.features)(""+s).indexOf("sui:")===0&&(n=!0);if(!n)return!1;this._standartAdapter=e,this.__standartAdapterChangeListener||(this.__standartAdapterChangeListener=s=>{this.connectionUpdated()}),this.getFeature(Xe.EVENTS).on("change",this.__standartAdapterChangeListener),this.connectionUpdated()}get okForSui(){return this.isInstalled?this.hasFeature(Xe.SUI_SIGN_AND_EXECUTE_TX_BLOCK)&&this.hasFeature(Xe.EVENTS):!1}get isInstalled(){return!!this._standartAdapter}get features(){return this._standartAdapter?this._standartAdapter.features:{}}get name(){return this._standartAdapter?this._standartAdapter.name:this._name}get icon(){return this._standartAdapter?this._standartAdapter.icon:this._icon}get version(){if(this._standartAdapter)return this._standartAdapter.version}hasFeature(e){return!!this.getFeature(e)}getFeature(e){const n=this.features;return n&&n[Xe[e]]?n[Xe[e]]:n&&n[e]?n[e]:null}}var P4=function(t,e,n,s){if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?s:n==="a"?s.call(t):s?s.value:e.get(t)},R4=function(t,e,n,s,r){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n},wo;let Kr;const aa=new Set;function $4(t){ci=void 0,aa.add(t)}function F4(t){ci=void 0,aa.delete(t)}const dr={};function V4(){if(Kr||(Kr=Object.freeze({register:gd,get:K4,on:W4}),typeof window>"u"))return Kr;const t=Object.freeze({register:gd});try{window.addEventListener("wallet-standard:register-wallet",({detail:e})=>e(t))}catch(e){console.error(`wallet-standard:register-wallet event listener could not be added
`,e)}try{window.dispatchEvent(new q4(t))}catch(e){console.error(`wallet-standard:app-ready event could not be dispatched
`,e)}return Kr}function gd(...t){var e;return t=t.filter(n=>!aa.has(n)),t.length?(t.forEach(n=>$4(n)),(e=dr.register)==null||e.forEach(n=>bd(()=>n(...t))),function(){var s;t.forEach(r=>F4(r)),(s=dr.unregister)==null||s.forEach(r=>bd(()=>r(...t)))}):()=>{}}let ci;function K4(){return ci||(ci=[...aa]),ci}function W4(t,e){var n;return(n=dr[t])!=null&&n.push(e)||(dr[t]=[e]),function(){var r;dr[t]=(r=dr[t])==null?void 0:r.filter(i=>e!==i)}}function bd(t){try{t()}catch(e){console.error(e)}}class q4 extends Event{get detail(){return P4(this,wo,"f")}get type(){return"wallet-standard:app-ready"}constructor(e){super("wallet-standard:app-ready",{bubbles:!1,cancelable:!1,composed:!1}),wo.set(this,void 0),R4(this,wo,e,"f")}preventDefault(){throw new Error("preventDefault cannot be called")}stopImmediatePropagation(){throw new Error("stopImmediatePropagation cannot be called")}stopPropagation(){throw new Error("stopPropagation cannot be called")}}wo=new WeakMap;const rr={SLUSH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzBDMEExRiIvPgo8cGF0aCBkPSJNMTMuMTM1OCAzMi4xMDg1QzE0LjE3MDEgMzUuOTY4MyAxOC4wMzMxIDM5LjQ2MjQgMjYuMDI1NSAzNy4zMjA4QzMzLjY1MTUgMzUuMjc3NCAzOC40MzA5IDI5LjAwNCAzNy4xOTE2IDI0LjM3ODlDMzYuNzYzNiAyMi43ODE3IDM1LjQ3NDYgMjEuNzAwNiAzMy40ODcyIDIxLjg3NjVMMTUuNzE2NSAyMy4zNTcyQzE0LjU5NzMgMjMuNDQzIDE0LjA4NDIgMjMuMjU5NiAxMy43ODgxIDIyLjU1NDNDMTMuNTAxIDIxLjg4MjMgMTMuNjY0NiAyMS4xNjA5IDE1LjAxNjMgMjAuNDc3N0wyOC41NDAxIDEzLjUzNzRDMjkuNTc2NyAxMy4wMSAzMC4yNjcxIDEyLjc4OTMgMzAuODk4IDEzLjAxMjZDMzEuMjkzNCAxMy4xNTYzIDMxLjU1MzggMTMuNzI4NCAzMS4zMTQ3IDE0LjQzNDRMMzAuNDM3OCAxNy4wMjMyQzI5LjM2MTcgMjAuMjAwMiAzMS42NjUzIDIwLjkzODIgMzIuOTY0MSAyMC41OTAyQzM0LjkyODkgMjAuMDYzNyAzNS4zOTExIDE4LjE5MjMgMzQuNzU4MSAxNS44Mjk5QzMzLjE1MzMgOS44NDA1NCAyNi43OTkgOC45MDQxMSAyMS4wMzc4IDEwLjQ0NzhDMTUuMTc2NyAxMi4wMTgzIDEwLjA5NiAxNi43Njc2IDExLjY0NzQgMjIuNTU3M0MxMi4wMTI5IDIzLjkyMTYgMTMuMjY4NyAyNS4wMTE2IDE0LjcyMzIgMjQuOTc4NUwxNi45NDM4IDI0Ljk3MzFDMTcuNDAwNCAyNC45NjI1IDE3LjIzNiAyNSAxOC4xMTcgMjQuOTI3MUMxOC45OTggMjQuODU0MSAyMS4zNTA5IDI0LjU2NDYgMjEuMzUwOSAyNC41NjQ2TDMyLjg5NjIgMjMuMjU4TDMzLjE5MzcgMjMuMjE0OEMzMy44Njg5IDIzLjA5OTcgMzQuMzc5MiAyMy4yNzUgMzQuODEwNiAyNC4wMTgzQzM1LjQ1NjMgMjUuMTMwNCAzNC40NzEyIDI1Ljk2OTEgMzMuMjkyIDI2Ljk3MzFDMzMuMjYwNSAyNyAzMy4yMjg4IDI3LjAyNyAzMy4xOTcgMjcuMDU0MUwyMy4wNDgyIDM1LjgwMDVDMjEuMzA4NyAzNy4zMDA4IDIwLjA4NjcgMzYuNzM2NyAxOS42NTg4IDM1LjEzOTVMMTguMTQzMSAyOS40ODI5QzE3Ljc2ODcgMjguMDg1NCAxNi40MDQxIDI2Ljk4ODkgMTQuODA1NiAyNy40MTcyQzEyLjgwNzUgMjcuOTUyNiAxMi42NDU1IDMwLjI3ODQgMTMuMTM1OCAzMi4xMDg1WiIgZmlsbD0iI0ZCRkFGRiIvPgo8L3N2Zz4K",OKX:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTUwIj48ZGVmcz48c3R5bGU+LmV7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxwYXRoIGlkPSJkIiBjbGFzcz0iZSIgZD0iTTAsMEgxNTBWMTUwSDBWMFoiLz48L2c+PC9nPjxwYXRoIGQ9Ik0xMy44MSwxMy41N3YxMjMuOThoMTIzLjk4VjEzLjU3SDEzLjgxWm0yNi44MiwyOC42NGMwLS44NywuNzEtMS41OCwxLjU4LTEuNThoMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTh2MjAuM2MwLC44OC0uNzEsMS41OS0xLjU4LDEuNTloLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OXYtMjAuM1ptMjMuNDYsNjYuN2MwLC44Ny0uNzEsMS41OC0xLjU4LDEuNThoLTIwLjNjLS44NywwLTEuNTgtLjcxLTEuNTgtMS41OHYtMjAuM2MwLS44OCwuNzEtMS41OSwxLjU4LTEuNTloMjAuM2MuODcsMCwxLjU4LC43MSwxLjU4LDEuNTl2MjAuM1ptMjEuODYtMjEuNjJoLTIwLjNjLS44NywwLTEuNTktLjcxLTEuNTktMS41OXYtMjAuM2MwLS44NywuNzEtMS41OSwxLjU5LTEuNTloMjAuM2MuODcsMCwxLjU5LC43MSwxLjU5LDEuNTl2MjAuM2MwLC44Ny0uNzEsMS41OS0xLjU5LDEuNTlabTI1LjA1LDIxLjYyYzAsLjg3LS43MSwxLjU4LTEuNTksMS41OGgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU4di0yMC4zYzAtLjg4LC43MS0xLjU5LDEuNTgtMS41OWgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OXYyMC4zWm0wLTQ2LjQxYzAsLjg4LS43MSwxLjU5LTEuNTksMS41OWgtMjAuM2MtLjg3LDAtMS41OC0uNzEtMS41OC0xLjU5di0yMC4zYzAtLjg3LC43MS0xLjU4LDEuNTgtMS41OGgyMC4zYy44NywwLDEuNTksLjcxLDEuNTksMS41OHYyMC4zWiIvPjwvc3ZnPg==",PHANTOM:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo=",SUIET:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMjQiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8zMDVfMTI1MTYpIi8+PHBhdGggZD0iTTUxLjUgNDMuNmMtMy45IDAtNy42LTMuOS05LjUtNi40LTEuOSAyLjUtNS42IDYuNC05LjUgNi40LTQgMC03LjctMy45LTkuNS02LjQtMS44IDIuNS01LjUgNi40LTkuNSA2LjQtLjggMC0xLjUtLjYtMS41LTEuNSAwLS44LjctMS41IDEuNS0xLjUgMy4yIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjMuN2MxLjEgMS44IDUgNi45IDguMiA2LjkgMy4xIDAgNy4xLTUuMSA4LjItNi45LjMtLjQuOC0uNyAxLjMtLjdzMSAuMiAxLjIuN2MxLjEgMS44IDUgNi45IDguMiA2LjkuOSAwIDEuNi43IDEuNiAxLjUgMCAuOS0uNiAxLjUtMS41IDEuNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTEuNSA1Mi4zYy0zLjkgMC03LjYtMy45LTkuNS02LjQtMS45IDIuNS01LjYgNi40LTkuNSA2LjQtNCAwLTcuNy0zLjktOS41LTYuNC0xLjggMi41LTUuNSA2LjQtOS41IDYuNC0uOCAwLTEuNS0uNi0xLjUtMS41IDAtLjguNy0xLjUgMS41LTEuNSAzLjIgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMy43YzEuMSAxLjggNSA2LjkgOC4yIDYuOSAzLjEgMCA3LjEtNS4xIDguMi02LjkuMy0uNC44LS43IDEuMy0uN3MxIC4zIDEuMi43YzEuMSAxLjggNSA2LjkgOC4yIDYuOS45IDAgMS42LjcgMS42IDEuNSAwIC45LS42IDEuNS0xLjUgMS41ek0xNC42IDM2LjdjLS44IDAtMS40LS41LTEuNi0xLjNsLS4zLTMuNmMwLTEwLjkgOC45LTE5LjggMTkuOC0xOS44IDExIDAgMTkuOCA4LjkgMTkuOCAxOS44bC0uMyAzLjZjLS4xLjgtLjkgMS40LTEuNyAxLjItLjktLjEtMS41LS45LTEuMy0xLjhsLjMtM2MwLTkuMi03LjUtMTYuOC0xNi44LTE2LjgtOS4yIDAtMTYuNyA3LjUtMTYuNyAxNi44bC4yIDMuMWMuMi44LS4zIDEuNi0xLjEgMS44aC0uM3oiIGZpbGw9IiNmZmYiLz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMzA1XzEyNTE2IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUyLjc1ODAzIDUxLjM1OCAtNTEuNDM5NDcgNTIuODQxNzIgMCA3LjQwNykiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDU4REQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2N0M4RkYiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",SURF:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NzAuMDc3IDM5OS45MDZDNDU5LjIxNCA0MDcuOTM1IDQ0Ny4yNDggNDEzLjc2IDQzNC45NjggNDE0LjcwNUMzODguMzY2IDQxOC42NDEgMzI4LjUzNyAzNzIuODI2IDI5MC41OTQgMzY3Ljk0NUMyNTIuNjUxIDM2My4wNjUgMjMxLjM5NyAzODguNzI4IDIyMi4yNjYgNDAzLjY4NEMyMTYuNTk4IDQxMi44MTYgMjE1LjU2NSA0MjYuMTcxIDIxNS44OCA0MzYuODc3QzIxNi4xOTUgNDQxLjEyOCAyMTYuNDQgNDQ1LjkyNyAyMTcuODU3IDQ1Mi4xNzZDMjIwLjM0OSA0NjMuMTcxIDI0Ny45MjggNTA2LjY1MSAzMTEuNTM0IDUwMS4xNEMzODAuOTY1IDQ5NS4xNTcgNDIxLjI3IDQ1Ny44NDQgNDYyLjM2MiA0MDkuMDM3TDQ2Ny41NTggNDAyLjc0QzQ2OC4zNDUgNDAxLjc5NSA0NjkuMjkgNDAwLjY5MyA0NzAuMDc3IDM5OS43NDhWMzk5LjkwNloiIGZpbGw9IiM1OEM1RjMiLz4KPHBhdGggZD0iTTI1NC4zNiAzMjcuMDA5QzI2NC43NTEgMzIwLjcxMSAyNzUuNzcyIDMxNi40NjEgMjg2Ljc5MiAzMTYuNDYxQzMyOC44MjkgMzE2LjQ2MSAzNzguNTgxIDM2MS45NjEgNDEyLjExNSAzNjkuMjAzQzQ0NS42NSAzNzYuNDQ1IDQ2OC4zMjIgMzU0LjQwNyA0NzUuODc5IDM0Mi40MzhDNDgzLjQzNiAzMzAuNDcgNDg0LjM1MSAzMTkuMDgzIDQ4My45MDggMzEwLjk1QzQ4My40NjUgMzAyLjgxNyA0ODMuNzUgMzAzLjIzNiA0ODMuNDM2IDI5OS40NTdDNDgwLjYwMiAyOTIuMDU3IDQ2MC43NjUgMjQ4LjYwNCA0MDMuNjE0IDI0OC42MDRDMzQxLjI2OCAyNDguNjA0IDMwMi4zOCAyNzguODMyIDI2MS45MTggMzE5LjI5NEwyNTYuNzIyIDMyNC40OUMyNTUuOTM1IDMyNS4yNzcgMjU0Ljk4OSAzMjYuMjIyIDI1NC4yMDIgMzI3LjAwOUgyNTQuMzZaIiBmaWxsPSIjOURFMkZGIi8+CjxwYXRoIGQ9Ik0zMyAyOTUuNTI1TDMzLjAwMzkgMjk4LjQzNUMzMy4wMDM5IDM1NS45IDc5LjYwMyA0MDAuNjk1IDEzNi45MTEgNDAwLjY5NUMxNjEuNDcyIDQwMC42OTUgMTgxLjkxOSAzOTMuOTIgMTk5LjcxIDM3OS43NUwyMDAuNzYgMzc4Ljc2N0MyMDAuNzYgMzc4Ljc2NyAyMDEuNDE3IDM3OC4yMjYgMjAxLjkzNCAzNzcuNzA5QzIwMi4wOTIgMzc3LjU1MSAyMDIuNDA2IDM3Ny4yMzYgMjAyLjU2NCAzNzcuMDc5QzIwMi43MjEgMzc2LjkyMSAyMDMuMDM2IDM3Ni42MDcgMjAzLjE5MyAzNzYuNDQ5QzIwNS4yNCAzNzQuNTYgMjA4Ljg2MSAzNzEuMDk2IDIxNC4yMTQgMzY2LjA1OEMyMjMuMDMxIDM1Ny43MTQgMjM2LjI1NiAzNDQuODA0IDI1NC4wNDcgMzI3LjE3QzI1NC44MzQgMzI2LjM4MyAyNTUuNzc5IDMyNS40MzggMjU2LjU2NiAzMjQuNjUxTDI2MS43NjIgMzE5LjQ1NkMzMDIuMDY2IDI3OS4xNTEgMzQwLjk1NCAyNDguNzY1IDQwMy40NTggMjQ4Ljc2NUM0NjAuNjA5IDI0OC43NjUgNDgwLjQ0NyAyOTIuMjE4IDQ4My4yODEgMjk5LjYxOEM0NzcuNjEzIDIwMC41ODggNDA4LjE4MSAxMTguNzE5IDMxNS40NDggOTQuMzE1N0MzMTUuNDQ4IDk0LjMxNTcgMzEzLjcxNyA5My44NDM0IDMxMS44MjggOTMuMzcxMUMzMDIuMjI0IDkwLjUzNzEgMjc2LjA4OCA4MS40MDU0IDI3Ni4wODggNjYuMTMzN1YxNy45NTY5QzI3Ni4wODggMTcuOTU2OSAyNzguMzM5IDUuMTA2MjggMjY0LjI4IDE0LjMzNThDMjI4LjA2OSAzOC4xMDk0IDE5Ny4yMTEgODkuOTA3NCAxNjkuMTg2IDEwNS4xNzlDMTY5LjE4NiAxMDUuMTc5IDE2OC44NzEgMTA1LjMzNiAxNjguNzE0IDEwNS40OTRDMTAwLjIyNyAxMzQuNzc4IDQ4LjczNzUgMTk1LjE4MiAzNS4xOTc3IDI3MC41OTZDMzMuNzgwNyAyNzguMzEgMzMuNDc2MiAyODIuMjY5IDMzLjAwMzkgMjkwLjE0MUwzMyAyOTUuNTI1WiIgZmlsbD0iIzU4QzVGMyIvPgo8cGF0aCBkPSJNMjU1LjQ5NSAyNzEuMzQ5QzI1NS40OTUgMjcxLjM0OSAyMzMuODIzIDI4Ny45MDUgMjExLjcyMyAzMDYuNTg2QzE5NS4xNzMgMzIwLjU3NSAxNzguOTYxIDMzNS45MzkgMTY4LjI3MSAzNDUuNDM0QzE2MS41MDMgMzUxLjQ0NCAxNTIuODIyIDM0OS4xNzYgMTUwLjQ3NCAzMzguMTIxQzE0Ni44NTMgMzI3LjEgMTUzLjQ3MSAyODUuNzY0IDE4NC4xNzIgMjY1Ljc2OUMyMTQuODczIDI0NS43NzQgMjQ2LjIwNCAyNDUuNzc0IDI1Ny42OTcgMjUzLjMzMUMyNjcuNDE1IDI1OS43MjEgMjYzLjc0MyAyNjQuMjAzIDI2Mi4xMDYgMjY1Ljc2OUMyNjAuNDY5IDI2Ny4zMzUgMjU1LjQ5NSAyNzEuMzQ5IDI1NS40OTUgMjcxLjM0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",NIGHTLY:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2RDczRjgiLz4KPHBhdGggZD0iTTQ4IDg1LjYzNTZDNDggODUuNjM1NiA1Mi40NTMzIDg1LjYzNTYgNTUuNDQgODIuNTg2N0M1OC45MTU1IDc5LjI4MDEgNTcuMzUxMSA3NS40MzEyIDYyLjI3NTUgNzEuNDMxMkM2Ni45ODY2IDY3LjY0NDUgNzIuOTI0NCA3MC4zMzc5IDcyLjkyNDQgNzAuMzM3OUM3Ny4wMjIyIDYyLjEyNDUgNzQuNzkxMSA1Mi41NjkgNzQuNzkxMSA1Mi41NjlDODEuNzY4OCAzNC4yNTc5IDc1Ljk2NDQgMjEuMTU1NyA3NC40NDQ0IDE3LjM2MDFDNjkuNDQ4OCAyNC4zMzc5IDYzLjE5MTEgMjkuMTczNCA1NS43OTU1IDMyLjQwOUM1My4yMjY2IDMxLjcwNjggNTAuNTk1NSAzMS4zMzM0IDQ4IDMxLjM2MDFDNDUuNDEzMyAzMS4zMzM0IDQyLjc3MzMgMzEuNzA2OCA0MC4yMDQ0IDMyLjQwOUMzMi44MTc3IDI5LjE2NDUgMjYuNTUxMSAyNC4zMzc5IDIxLjU1NTUgMTcuMzYwMUMyMC4wMzU1IDIxLjE1NTcgMTQuMjMxMSAzNC4yNTc5IDIxLjIwODkgNTIuNTY5QzIxLjIwODkgNTIuNTY5IDE4Ljk3NzggNjIuMTI0NSAyMy4wNzU1IDcwLjMzNzlDMjMuMDc1NSA3MC4zMzc5IDI5LjAxMzMgNjcuNjQ0NSAzMy43MjQ0IDcxLjQzMTJDMzguNjU3NyA3NS40MzEyIDM3LjA4NDQgNzkuMjgwMSA0MC41NiA4Mi41ODY3QzQzLjU0NjYgODUuNjM1NiA0OCA4NS42MzU2IDQ4IDg1LjYzNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDc5OSA2NS4yOThDNDIuMjkzMyA1OS4yMTggMzYuMzAyMSA1Ny4yNjI0IDMyLjIxMzMgNTkuODIyNEMzMi4yMTMzIDU5LjgyMjQgMzIuODUzMyA2Mi40MzU4IDM1LjgzOTkgNjMuNzUxM0MzOC4yNzU1IDY0LjgyNjkgMzkuMzI0NCA2My4zODY5IDQyLjQ3OTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNMjIuNDk3NyAyMy4wOTM1QzIwLjA4ODggMzEuNTQ2OCAyMS4xMjg4IDQyLjI0MDIgMjQuOTMzMyA1MC4wMjY5QzI4LjgyNjYgNDcuMjcxMyAzMi45MTU1IDQzLjAxMzUgMzUuMDkzMyAzOC41MDY5QzI5Ljk2NDQgMzQuNzExMyAyNS42NjIyIDMxLjEwMjQgMjIuNDk3NyAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNTMuNTE5OSA2NS4yOThDNTMuNzA2NiA1OS4yMTggNTkuNjk3NyA1Ny4yNjI0IDYzLjc4NjYgNTkuODIyNEM2My43ODY2IDU5LjgyMjQgNjMuMTQ2NiA2Mi40MzU4IDYwLjE1OTkgNjMuNzUxM0M1Ny43MjQzIDY0LjgyNjkgNTYuNjc1NSA2My4zODY5IDUzLjUxOTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNzMuNTAyMiAyMy4wOTM1Qzc1LjkxMTEgMzEuNTQ2OCA3NC44NzExIDQyLjI0MDIgNzEuMDY2NiA1MC4wMjY5QzY3LjE3MzMgNDcuMjcxMyA2My4wODQ0IDQzLjAxMzUgNjAuOTA2NiAzOC41MDY5QzY2LjAzNTUgMzQuNzExMyA3MC4zMzc3IDMxLjEwMjQgNzMuNTAyMiAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNDcuOTk5OSA4NS4zMDY5QzUwLjE0MDQgODUuMzA2OSA1MS44NzU1IDgzLjc3ODcgNTEuODc1NSA4MS44OTM2QzUxLjg3NTUgODAuMDA4NCA1MC4xNDA0IDc4LjQ4MDIgNDcuOTk5OSA3OC40ODAyQzQ1Ljg1OTUgNzguNDgwMiA0NC4xMjQ0IDgwLjAwODQgNDQuMTI0NCA4MS44OTM2QzQ0LjEyNDQgODMuNzc4NyA0NS44NTk1IDg1LjMwNjkgNDcuOTk5OSA4NS4zMDY5WiIgZmlsbD0iIzdCODFGOSIvPgo8L3N2Zz4K"},yd="sui:devnet",mn=class mn extends _n{constructor(e={}){super(e),this._adapters={},this._defaultChain=e.defaultChain||yd,this._activeAdapter=null,this._connectedAddress=null,this._connectedChain=null,this._isConnected=!1,this._isConnecting=!1,this._client=null,this._suiMaster=null,this._rpcSettings=null,setTimeout(()=>{this.initialize()},50)}get activeAdapter(){return this._activeAdapter}getAddress(){return this._connectedAddress}async signAndExecuteTransactionBlock(e){return await this._activeAdapter.signAndExecuteTransactionBlock(e)}async signAndExecuteTransaction(e){return await this._activeAdapter.signAndExecuteTransaction(e)}get client(){return this._client}async getClient(){return await this.initClient(),this._client}async getSuiMaster(){return await this.initClient(),this._suiMaster}get suiMaster(){return this._suiMaster}get isConnected(){return this._isConnected}get connectedAddress(){return this._connectedAddress}get connectedChain(){return this._connectedChain}static getSingleton(e={}){let n=e.defaultChain||yd;return mn._singleInstances[n]||(mn._singleInstances[n]=new mn(e)),mn._singleInstances[n]}get adapters(){return this._adapters}async connect(e){let n=e;if(e.name&&(n=e.name),!this._adapters[n])return!1;this._activeAdapter=this._adapters[n],this._isConnecting=!0;try{await this._activeAdapter.connect()}catch(s){this.log("error",s)}this._isConnecting=!1}adapterConnected(e){this._activeAdapter=e,this._isConnected=e.isConnected,this._connectedAddress=e.connectedAddress,this._connectedChain,this._connectedChain=e.connectedChain,this._connectedChain=="sui:unknown"&&(this._connectedChain="sui:mainnet"),this._client=null,this._suiMaster=null,this.initClient(),this.emit("connected")}async setRPC(e={}){this._rpcSettings=e,this._client=null,this._suiMaster=null,await this.initClient(),this.emit("rpc")}adapterDisconnected(e){this._isConnected=!1,this._connectedAddress=null,this.emit("disconnected")}attachAdapter(e){let n=e.name;if(e.standartAdapter&&e.standartAdapter.name&&(n=e.standartAdapter.name),!n)return!1;const s=new z4({...e,debug:this._debug});this._adapters[n]?e.standartAdapter&&this._adapters[n].setStandartAdapter(e.standartAdapter):(this._adapters[n]=s,this._adapters[n].addEventListener("connected",r=>{this.adapterConnected(r.detail)}),this._adapters[n].addEventListener("disconnected",r=>{this.adapterDisconnected(r.detail)}),this.emit("adapter",s))}getCurrentChain(){return this._connectedChain?this._connectedChain:this._defaultChain}async initClient(){if(this._client)return!0;let e=this.getCurrentChain();const n=mn.getChainsSettings();if(this._rpcSettings)this._rpcSettings.providerName=e.split("sui:").join(""),this._client=Is.SuiUtils.suiClientForRPC(this._rpcSettings);else if(n[e])this._client=new yc({url:n[e].fullnode}),this._client.endpoint=n[e].fullnode;else throw this.log("error","invalid chain",e),new Error("invalid chain: "+e);this._suiMaster=new Is({debug:this._debug,signer:this,client:this._client})}async initialize(){await this.initClient();for(const s of mn.getPossibleWallets())this.attachAdapter(s);const e=V4(),n=e.get();for(const s of n)this.attachAdapter({standartAdapter:s});e.on("register",s=>{s.name&&this.attachAdapter({standartAdapter:s})})}static getChainsSettings(){return{"sui:devnet":{fullnode:"https://fullnode.devnet.sui.io:443/",websocket:"https://fullnode.devnet.sui.io:443/",faucet:"https://faucet.devnet.sui.io/gas"},"sui:testnet":{fullnode:"https://fullnode.testnet.sui.io:443/",websocket:"https://fullnode.testnet.sui.io:443/",faucet:"https://faucet.testnet.sui.io/gas"},"sui:mainnet":{fullnode:"https://fullnode.mainnet.sui.io:443/",websocket:"https://fullnode.mainnet.sui.io:443/"},"sui:localnet":{websocket:"http://127.0.0.1:9000",fullnode:"http://127.0.0.1:9000",websocket:"http://127.0.0.1:9000",faucet:"http://127.0.0.1:9123/gas"}}}static getPossibleWallets(){return[{name:"Slush",icon:rr.SLUSH,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/slush-%E2%80%94-a-sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"}},{name:"Suiet",icon:rr.SUIET,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd"}},{name:"OKX Wallet",icon:rr.OKX,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/mcohilncbfahbmgdjkbpemcciiolgcge"}},{name:"Phantom",icon:rr.PHANTOM,downloadUrls:{chrome:"https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"}},{name:"Surf Wallet",icon:rr.SURF,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/surf-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen"}},{name:"Nightly Wallet",icon:rr.NIGHTLY,downloadUrls:{chrome:"https://chrome.google.com/webstore/detail/nightly/fiikommddbeccaoicoejoniammnalkfa"}}]}};Js(mn,"_singleInstances",{});let Dc=mn;wt.txInput;const Ui=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},G4={name:"SuiSync",props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object}},data(){return{connectedAddress:null,connectedChain:null,adapters:[],suiInBrowser:null,suiMaster:null,lastSuiMasterInstanceN:null}},emits:["connect","connected","loaded","disconnected","error","suiMaster","adapters"],components:{},watch:{},methods:{async reinitSuiMaster(){this.suiMaster=await this.suiInBrowser.getSuiMaster(),(!this.lastSuiMasterInstanceN||this.lastSuiMasterInstanceN!=this.suiMaster.instanceN)&&this.$emit("suiMaster",this.suiMaster)},async setRPC(t={}){await this.suiInBrowser.setRPC(t),await this.reinitSuiMaster()}},mounted:function(){this.suiInBrowser=Dc.getSingleton({debug:!0,defaultChain:this.defaultChain}),this.rpcSettings&&this.suiInBrowser.setRPC(this.rpcSettings),this.adapters=Object.values(this.suiInBrowser.adapters),this.suiInBrowser.addEventListener("adapter",t=>{console.log("New adapter",t.detail),this.adapters.push(t.detail),this.$emit("adapters",this.adapters)}),this.suiInBrowser.addEventListener("connected",()=>{this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)}),this.suiInBrowser.addEventListener("disconnected",()=>{this.connectedAddress=null,this.connectedChain=null,this.$emit("disconnected")}),this.$nextTick(()=>{this.$emit("loaded",this.suiInBrowser),this.$emit("adapters",this.adapters)}),this.suiInBrowser.isConnected&&(this.connectedAddress=this.suiInBrowser.connectedAddress,this.connectedChain=this.suiInBrowser.connectedChain,this.reinitSuiMaster(),this.$emit("connected",this.suiInBrowser)),this.reinitSuiMaster()},computed:{}};function H4(t,e,n,s,r,i){return je(),Be("div")}const Y4=Ui(G4,[["render",H4]]),Q4={name:"SignInWithSuiDialog",emits:["click","hidden"],props:{adapters:{type:Array,default(){return[]}},showing:{type:Boolean,default:!1}},data(){return{isActive:!1,isVisible:!1}},watch:{showing:function(){this.showing?this.show():this.hide()}},computed:{},components:{},methods:{onAdapterClick(t){this.$emit("click",t)},show(){this.isActive=!0,setTimeout(()=>{this.isVisible=!0},10)},hide(){this.isVisible=!1,setTimeout(()=>{this.isActive=!1,this.$emit("hidden")},300)},onBackdrop(){this.hide(),console.log(this.adapters)}},beforeMount:function(){},mounted:async function(){}},Z4={key:0,class:"signinwithsui_dialog"},X4={class:"signinwithsui_dialog_inner_card"},J4={class:"signinwithsui_dialog_list"},eS=["onClick"],tS={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_icon"},nS=["src"],sS={class:"signinwithsui_dialog_item_column signinwithsui_dialog_item_name"};function rS(t,e,n,s,r,i){return r.isActive?(je(),Be("div",Z4,[Y("div",{class:"signinwithsui_dialog_backdrop",onClick:e[0]||(e[0]=(...o)=>i.onBackdrop&&i.onBackdrop(...o))}),Y("div",{class:li(["signinwithsui_dialog_inner",{signinwithsui_dialog_inner_active:r.isVisible}])},[Y("div",X4,[Y("div",J4,[(je(!0),Be(Mt,null,Ha(n.adapters,(o,a)=>(je(),Be(Mt,{key:a},[o&&o.name&&(o.isDefault||o.okForSui)?(je(),Be("div",{key:0,class:li(["signinwithsui_dialog_item",{signinwithsui_dialog_item_disabled:o.isDefault}]),onClick:c=>i.onAdapterClick(o)},[Y("div",tS,[Y("img",{loading:"lazy",fetchpriority:"auto","aria-hidden":"true",draggable:"false",src:o.icon},null,8,nS)]),Y("div",sS,Zt(o.name),1)],10,eS)):vt("",!0)],64))),128))])])],2)])):vt("",!0)}const iS=Ui(Q4,[["render",rS],["__scopeId","data-v-76130ab2"]]),oS={name:"SignInWithSui",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},rpcSettings:{type:Object},auto:{default:!0,type:Boolean},visible:{default:!0,type:Boolean},persist:{default:!1,type:Boolean}},data(){return{isLoading:!1,libsRequested:!0,adapters:[],connectedAddress:null,displayAddress:null,resolvedNameServiceName:null,connectedChain:null,forceChainCalculated:null,suiMaster:null,activeAdapter:null,showingDialog:!1}},watch:{defaultChain:async function(){this.connectedAddress=null,this.connectedChain=null,this.suiMaster=null,this.libsRequested=!1,await new Promise(t=>setTimeout(t,50)),this.libsRequested=!0}},computed:{},components:{SuidoubleSync:Y4,SignInWithSuiDialog:iS},methods:{checkDisplayAddress(){let t=this.displayAddress;this.connectedAddress?this.connectedAddress&&(this.resolvedNameServiceName?t=this.resolvedNameServiceName:t=(""+this.connectedAddress).substr(0,6)+"..."+(""+this.connectedAddress).substr(-4)):t=null,this.displayAddress!=t&&(this.displayAddress=t,this.$emit("displayAddress",this.displayAddress))},async getNameServiceName(){if(this.suiMaster&&this.suiMaster.address){const t="resolvedNameServiceName_"+this.suiMaster.connectedChain+":"+this.suiMaster.address,e=10*60*1e3,n=this.getCache(t);if(n!==void 0)this.resolvedNameServiceName=n;else{const s=await this.suiMaster.resolveNameServiceName();this.resolvedNameServiceName=s,this.setCache(t,s,e)}this.checkDisplayAddress()}else this.resolvedNameServiceName=null,this.checkDisplayAddress()},onSuiMaster(t){this.suiMaster=t,(!this.defaultChain||this.defaultChain==this.suiMaster.connectedChain)&&(this.$emit("suiMaster",t),t.getClient().then(e=>{this.$emit("client",e),this.$emit("provider",e),t.signer&&t.signer.activeAdapter&&(this.$emit("adapter",t.signer.activeAdapter),this.activeAdapter=t.signer.activeAdapter)}),this.getNameServiceName()),this.__suiMasterPromise&&this.suiMaster&&(this.__suiMasterPromiseResolver(),this.__suiMasterPromise=null),this.__connectedSuiMasterPromise&&this.isSuiMasterConnected()&&(this.__connectedSuiMasterPromiseResolver(),this.__connectedSuiMasterPromise=null)},onSuiAdapters(t){this.adapters=t},isSuiMasterConnected(t=null){return this.suiMaster&&this.suiMaster.address?!(t&&this.suiMaster.connectedChain!=t):this.suiMaster&&this.suiMaster.signer&&this.suiMaster.signer.connectedAddress?!(t&&this.suiMaster.signer.connectedChain!=t):!1},async onAdapterClick(t){if(this.showingDialog=!1,t.isDefault&&!t.isInstalled)return window.open(t.getDownloadURL(),"_blank"),!1;this.isLoading=!0,await this.$refs.sui.suiInBrowser.connect(t),this.persist&&window.localStorage.setItem("vue-sui-preferred-adapter",t.name),this.isLoading=!1},async setRPC(t={}){this.$refs.sui.setRPC(t)},async requestSuiMaster(){if(this.suiMaster)return this.suiMaster;if(await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.suiMaster)return this.suiMaster;if(this.__suiMasterPromise){if(await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")}if(this.__suiMasterPromiseResolver=null,this.__suiMasterPromise=new Promise(t=>{this.__suiMasterPromiseResolver=t}),await this.__suiMasterPromise,this.suiMaster)return this.suiMaster;throw new Error("can not get suiMaster")},async requestConnectedSuiMaster(t=null){if(this.isSuiMasterConnected(t))return this.suiMaster;if(await this.requestLibs(),await new Promise(e=>{setTimeout(e,200)}),this.isSuiMasterConnected(t))return this.suiMaster;if(this.isLoading=!0,this.__connectedSuiMasterPromise){if(await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")}if(this.__connectedSuiMasterPromiseResolver=null,this.__connectedSuiMasterPromise=new Promise(e=>{this.__connectedSuiMasterPromiseResolver=e}),this.showingDialog=!0,await this.__connectedSuiMasterPromise,this.isLoading=!1,this.isSuiMasterConnected(t))return this.suiMaster;throw new Error("can not get connection")},async connect(){return await this.onClick()},async onClick(){this.isLoading=!0,await this.requestLibs(),await new Promise(t=>{setTimeout(t,200)}),this.connectedAddress||(this.showingDialog=!0),this.isLoading=!1},async initialize(){if(this.auto&&(this.isLoading=!0,await this.requestLibs(),this.isLoading=!1),await new Promise(t=>{setTimeout(t,200)}),this.persist){const t=window.localStorage.getItem("vue-sui-preferred-adapter");t&&this.adapters.forEach(e=>{e.name&&e.okForSui&&e.name==t&&this.onAdapterClick(e)})}},async requestLibs(){this.libsRequested=!0,await this.__libsRequestedPromise},onLibsLoaded(){this.__libsRequestedPromiseResolver()},onConnected(){this.showingDialog=!1;const t=this.$refs.sui.suiInBrowser.connectedChain;!this.defaultChain||this.defaultChain==t?(this.connectedAddress=this.$refs.sui.suiInBrowser.connectedAddress,this.connectedChain=this.$refs.sui.suiInBrowser.connectedChain,this.$emit("connected",this.connectedAddress),this.checkDisplayAddress()):(this.connectedAddress=null,this.$emit("wrongchain",t),this.checkDisplayAddress())},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected"),this.checkDisplayAddress()},async disconnect(){window.localStorage.setItem("vue-sui-preferred-adapter",null);try{await this.activeAdapter.disconnect()}catch(t){return console.error(t),window.location.reload(),!1}return!0},setCache(t,e,n){const r={value:e,expiry:new Date().getTime()+n};window.localStorage.setItem(t,JSON.stringify(r))},getCache(t){try{const e=window.localStorage.getItem(t);if(!e)return;const n=JSON.parse(e);if(new Date().getTime()>n.expiry){window.localStorage.removeItem(t);return}return n.value}catch{return}}},beforeMount:function(){this.__libsRequestedPromiseResolver=null,this.__libsRequestedPromise=new Promise(t=>{this.__libsRequestedPromiseResolver=t})},mounted:async function(){this.initialize()}},aS={key:0},cS={key:1};function uS(t,e,n,s,r,i){const o=pi("SignInWithSuiDialog"),a=pi("SuidoubleSync");return je(),Be("div",null,[n.visible?(je(),Be("div",{key:0,onClick:e[0]||(e[0]=(...c)=>i.onClick&&i.onClick(...c))},[r.connectedAddress?vt("",!0):(je(),Be("span",aS,"Connect with Sui")),r.connectedAddress?(je(),Be("span",cS,Zt(r.displayAddress),1)):vt("",!0)])):vt("",!0),gt(o,{showing:r.showingDialog,onHidden:e[1]||(e[1]=c=>{this.showingDialog=!1}),adapters:r.adapters,onClick:i.onAdapterClick},null,8,["showing","adapters","onClick"]),r.libsRequested?(je(),wf(a,{key:1,ref:"sui",rpcSettings:n.rpcSettings,defaultChain:n.defaultChain,onAdapters:i.onSuiAdapters,onSuiMaster:i.onSuiMaster,onLoaded:i.onLibsLoaded,onConnected:i.onConnected,onDisconnected:i.onDisconnected},null,8,["rpcSettings","defaultChain","onAdapters","onSuiMaster","onLoaded","onConnected","onDisconnected"])):vt("",!0)])}const eg=Ui(oS,[["render",uS]]),lS={name:"SignInWithSuiButton",emits:["suiMaster","provider","client","adapter","disconnected","connected","wrongchain","displayAddress"],props:{defaultChain:{default:"sui:devnet",type:String},persist:{default:!1,type:Boolean}},components:{SignInWithSui:eg},data(){return{connectedAddress:null,connectedChain:null,displayAddress:null}},methods:{onClick(){this.connectedAddress?this.$refs.signin.disconnect():this.$refs.signin.connect()},onDisplayAddress(t){this.displayAddress=t,this.$emit("displayAddress",t)},onConnected(t){this.connectedAddress=t,this.$emit("connected",t)},onDisconnected(){this.connectedAddress=null,this.$emit("disconnected")},onWrongChain(t){this.$emit("wrongchain",t)},onSuiMaster(t){this.$emit("suiMaster",t)},onProvider(t){this.$emit("client",t),this.$emit("provider",t)},onAdapter(t){this.$emit("adapter",t)}}},dS={class:"signinwithsui_button_inner"},fS={key:0,class:"signinwithsui_button_inner"};function hS(t,e,n,s,r,i){const o=pi("SignInWithSui");return je(),Be("div",{class:"signinwithsui_button",onClick:e[0]||(e[0]=(...a)=>i.onClick&&i.onClick(...a))},[Y("div",dS,[gt(o,{defaultChain:n.defaultChain,persist:n.persist,ref:"signin",onProvider:i.onProvider,onOnAdapter:i.onAdapter,onWrongchain:i.onWrongChain,onConnected:i.onConnected,onDisconnected:i.onDisconnected,onSuiMaster:i.onSuiMaster,onDisplayAddress:i.onDisplayAddress},null,8,["defaultChain","persist","onProvider","onOnAdapter","onWrongchain","onConnected","onDisconnected","onSuiMaster","onDisplayAddress"])]),r.connectedAddress?(je(),Be("div",fS,"disconnect")):vt("",!0)])}const pS=Ui(lS,[["render",hS],["__scopeId","data-v-64b1ae38"]]),gS={components:{SignInWithSui:eg,SignInWithSuiButton:pS},data(){return{connectedAddress:null,displayAddress:null,connectedChain:null,defaultChain:"sui:mainnet",extra:[],tryingTo:null,events:[],adapter:null,suiMaster:null}},mounted(){setTimeout(()=>{hljs.highlightAll()},50)},methods:{onDisplayAddress(t){this.events.unshift({name:"displayAddress",args:[t]}),this.displayAddress=t},onRPCClick(){this.$refs.sui.setRPC({url:"https://sui-mainnet-endpoint.blockvision.org",rpc:{}})},onWrongChain(t){this.events.unshift({name:"wrongchain",args:arguments}),this.connectedAddress=null,this.connectedChain=null,this.tryingTo=t},onSuiMaster(t){this.events.unshift({name:"suiMaster",args:[t?"instance_of_SuiMaster ("+(t.address?"wallet="+t.address:"readonly")+")":null]}),this.connectedAddress=t.address,this.connectedChain=t.connectedChain,this.suiMaster=t,this.tryingTo=null},onConnected(){this.events.unshift({name:"connected",args:arguments})},onProvider(t){this.events.unshift({name:"provider",args:[t?"instance_of_SuiClient":null]})},onClient(t){this.events.unshift({name:"client",args:[t?"instance_of_SuiClient":null]})},onAdapter(t){this.events.unshift({name:"adapter",args:[t?"instance_of_SuiInBrowserAdapter (name="+t.name+")":null]}),this.adapter=t},onDisconnected(){this.events.unshift({name:"disconnected",args:arguments}),this.connectedAddress=null,this.tryingTo=null},async onTx(){try{const t=this.suiMaster.suiCoins.get("sui"),e=new this.suiMaster.Transaction,n=await t.coinOfAmountToTxCoin(e,this.suiMaster.address,"0.01");e.transferObjects([n],this.suiMaster.address);const s=await this.suiMaster.signAndExecuteTransaction({transaction:e,requestType:"WaitForLocalExecution",options:{}});s&&s.digest&&alert("tx sent, digest: "+s.digest)}catch(t){alert(t)}}}},bS={style:{display:"block",padding:"12px",background:"#abc4ff",color:"#2A66F3","text-align":"right"}},yS={key:0},mS=["title"],wS={style:{padding:"12px"}},vS={class:"docs_column"},SS={class:"docs_column"},MS={class:"docs_column_right"},IS={key:0},xS={key:1},ES={key:0},_S={style:{padding:"12px"}},AS={class:"docs_column"},NS={key:0},TS={class:"docs_column"},OS={class:"docs_column_right"};function jS(t,e,n,s,r,i){const o=pi("SignInWithSui"),a=pi("SignInWithSuiButton");return je(),Be(Mt,null,[Y("div",null,[Y("div",bS,[e[9]||(e[9]=Y("div",{style:{float:"left","line-height":"32px","vertical-align":"middle"}},[Y("h3",{style:{margin:"0",padding:"0"}},"vue-sui")],-1)),Y("button",{onClick:e[0]||(e[0]=c=>{this.$refs.sui.connect()})},[r.connectedAddress?vt("",!0):(je(),Be("span",yS,"Connect")),r.connectedAddress?(je(),Be("span",{key:1,title:r.connectedAddress},Zt(r.displayAddress),9,mS)):vt("",!0),gt(o,{ref:"sui",defaultChain:r.defaultChain,persist:!0,onConnected:i.onConnected,onClient:i.onClient,onSuiMaster:i.onSuiMaster,onProvider:i.onProvider,onAdapter:i.onAdapter,onDisconnected:i.onDisconnected,onDisplayAddress:i.onDisplayAddress,visible:!1},null,8,["defaultChain","onConnected","onClient","onSuiMaster","onProvider","onAdapter","onDisconnected","onDisplayAddress"])]),r.connectedAddress?(je(),Be("button",{key:0,onClick:e[1]||(e[1]=c=>{this.$refs.sui.disconnect()})}," Disconnect ")):vt("",!0)])]),Y("div",wS,[Y("div",vS,[Y("p",null,[e[10]||(e[10]=or("switch `defaultChain` component prop to: ")),Y("a",{href:"#",onClick:e[2]||(e[2]=c=>{r.defaultChain="sui:mainnet"})},"sui:mainnet"),e[11]||(e[11]=or()),Y("a",{href:"#",onClick:e[3]||(e[3]=c=>{r.defaultChain="sui:devnet"})},"sui:devnet"),e[12]||(e[12]=or()),Y("a",{href:"#",onClick:e[4]||(e[4]=c=>{r.defaultChain="sui:testnet"})},"sui:testnet")])]),Y("div",SS,[Y("div",MS,[Y("table",null,[Y("tr",null,[e[13]||(e[13]=Y("td",null,"Connected as",-1)),Y("td",null,[!r.connectedAddress&&r.connectedChain?(je(),Be("span",IS,"read-only")):vt("",!0),r.connectedAddress&&r.connectedChain?(je(),Be("span",xS,[or(Zt(r.connectedAddress)+" ",1),Y("button",{onClick:e[5]||(e[5]=(...c)=>i.onTx&&i.onTx(...c))},"Do Sample TX")])):vt("",!0)])]),Y("tr",null,[e[14]||(e[14]=Y("td",null,"Connected to",-1)),Y("td",null,Zt(r.connectedChain),1)]),Y("tr",null,[e[15]||(e[15]=Y("td",null,"defaultChain",-1)),Y("td",null,Zt(r.defaultChain),1)])]),r.tryingTo?(je(),Be("span",ES,"Was trying to connect to "+Zt(r.tryingTo)+", but expected to "+Zt(r.defaultChain)+" (ask user to switch chain in wallet extension settings or reinitialize/redirect to different chain dapp/sub-dapp)",1)):vt("",!0)])])]),Y("div",_S,[Y("div",AS,[e[17]||(e[17]=Kb(`<div><p>Demo of the <a href="https://github.com/suidouble/vue-sui">vue-sui</a> component. Vue component to connect your dapp to Sui blockchain.</p></div><p><b>Option 1:</b> All styles on pages are managed by you, the SignInWithSui component itself is invisible until popup is requested.</p><p>Take a look at <a href="https://github.com/suidouble/vue-sui/blob/main/src/App.vue">this app code</a> to check this option implementation.</p><pre><code class="language-javascript">
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
		</code></pre>`,14)),gt(a,{defaultChain:r.defaultChain,onWrongchain:i.onWrongChain},null,8,["defaultChain","onWrongchain"]),e[18]||(e[18]=Y("p",null,"SignInWithSuiButton emits the same set of events as underlying SignInWithSui component",-1)),(je(!0),Be(Mt,null,Ha(r.extra,c=>(je(),Be("li",{key:c},[gt(a,{defaultChain:r.defaultChain},null,8,["defaultChain"])]))),128)),r.adapter?(je(),Be("p",NS,[Y("a",{href:"#",onClick:e[6]||(e[6]=c=>{t.$refs.sui.disconnect()})},"disconnect"),e[16]||(e[16]=or(" ( with some wallets (Suiet) it's instant, with some (Sui Wallet) - it clears connection and refreshes the page)"))])):vt("",!0),e[19]||(e[19]=Y("p",null,"Also try to disconnect or switch chain directly from browser extension, vue-sui will cover this events and update component state on the fly.",-1)),e[20]||(e[20]=Y("p",null," ",-1))]),Y("div",TS,[Y("div",OS,[e[21]||(e[21]=Y("p",null,"Request the component to display a wallet extension selection popup and prompt the user to connect their wallet:",-1)),e[22]||(e[22]=Y("pre",null,[Y("code",{class:"language-javascript"},`
this.$refs.sui.connect();
			`)],-1)),Y("p",null,[Y("button",{onClick:e[7]||(e[7]=c=>{this.$refs.sui.connect()})},"Execute this.$refs.sui.connect()")]),e[23]||(e[23]=Y("p",null,"To disconnect from the wallet:",-1)),e[24]||(e[24]=Y("pre",null,[Y("code",{class:"language-javascript"},`
this.$refs.sui.disconnect();
		`)],-1)),Y("p",null,[Y("button",{onClick:e[8]||(e[8]=c=>{this.$refs.sui.disconnect()})},"Execute this.$refs.sui.disconnect()")]),e[25]||(e[25]=Y("h3",null,"Events",-1)),e[26]||(e[26]=Y("p",null,"List of events from SignInWithSui `.$refs.sui` component",-1)),Y("table",null,[(je(!0),Be(Mt,null,Ha(r.events,(c,l)=>(je(),Be("tr",{key:l},[Y("td",null,[Y("b",null,Zt(c.name),1)]),Y("td",null,Zt(JSON.stringify(c.args)),1)]))),128))])])])])],64)}const CS=Ui(gS,[["render",jS]]);E0(CS).mount("#app");md.registerLanguage("javascript",sg);window.hljs=md;
