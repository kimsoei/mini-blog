(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function UP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var s_={exports:{}},Jc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function zP(){if(kb)return Jc;kb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Jc.Fragment=e,Jc.jsx=t,Jc.jsxs=t,Jc}var Vb;function BP(){return Vb||(Vb=1,s_.exports=zP()),s_.exports}var q=BP(),a_={exports:{}},eh={},o_={exports:{}},l_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function FP(){return Mb||(Mb=1,function(n){function e(he,Ae){var we=he.length;he.push(Ae);e:for(;0<we;){var ke=we-1>>>1,O=he[ke];if(0<a(O,Ae))he[ke]=Ae,he[we]=O,we=ke;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var Ae=he[0],we=he.pop();if(we!==Ae){he[0]=we;e:for(var ke=0,O=he.length,ie=O>>>1;ke<ie;){var ge=2*(ke+1)-1,pe=he[ge],fe=ge+1,xe=he[fe];if(0>a(pe,we))fe<O&&0>a(xe,pe)?(he[ke]=xe,he[fe]=we,ke=fe):(he[ke]=pe,he[ge]=we,ke=ge);else if(fe<O&&0>a(xe,we))he[ke]=xe,he[fe]=we,ke=fe;else break e}}return Ae}function a(he,Ae){var we=he.sortIndex-Ae.sortIndex;return we!==0?we:he.id-Ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,v=null,w=3,S=!1,P=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(he){for(var Ae=t(m);Ae!==null;){if(Ae.callback===null)r(m);else if(Ae.startTime<=he)r(m),Ae.sortIndex=Ae.expirationTime,e(p,Ae);else break;Ae=t(m)}}function oe(he){if(U=!1,K(he),!P)if(t(p)!==null)P=!0,Ot();else{var Ae=t(m);Ae!==null&&At(oe,Ae.startTime-he)}}var se=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function x(){if(se){var he=n.unstable_now();R=he;var Ae=!0;try{e:{P=!1,U&&(U=!1,H(le),le=-1),S=!0;var we=w;try{t:{for(K(he),v=t(p);v!==null&&!(v.expirationTime>he&&A());){var ke=v.callback;if(typeof ke=="function"){v.callback=null,w=v.priorityLevel;var O=ke(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,K(he),Ae=!0;break t}v===t(p)&&r(p),K(he)}else r(p);v=t(p)}if(v!==null)Ae=!0;else{var ie=t(m);ie!==null&&At(oe,ie.startTime-he),Ae=!1}}break e}finally{v=null,w=we,S=!1}Ae=void 0}}finally{Ae?k():se=!1}}}var k;if(typeof X=="function")k=function(){X(x)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,N=B.port2;B.port1.onmessage=x,k=function(){N.postMessage(null)}}else k=function(){M(x,0)};function Ot(){se||(se=!0,k())}function At(he,Ae){le=M(function(){he(n.unstable_now())},Ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){P||S||(P=!0,Ot())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var Ae=3;break;default:Ae=w}var we=w;w=Ae;try{return he()}finally{w=we}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,Ae){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var we=w;w=he;try{return Ae()}finally{w=we}},n.unstable_scheduleCallback=function(he,Ae,we){var ke=n.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?ke+we:ke):we=ke,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=we+O,he={id:_++,callback:Ae,priorityLevel:he,startTime:we,expirationTime:O,sortIndex:-1},we>ke?(he.sortIndex=we,e(m,he),t(p)===null&&he===t(m)&&(U?(H(le),le=-1):U=!0,At(oe,we-ke))):(he.sortIndex=O,e(p,he),P||S||(P=!0,Ot())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var Ae=w;return function(){var we=w;w=Ae;try{return he.apply(this,arguments)}finally{w=we}}}}(l_)),l_}var Lb;function jP(){return Lb||(Lb=1,o_.exports=FP()),o_.exports}var u_={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function qP(){if(Ub)return Oe;Ub=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,U={};function M(O,ie,ge){this.props=O,this.context=ie,this.refs=U,this.updater=ge||S}M.prototype.isReactComponent={},M.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=M.prototype;function X(O,ie,ge){this.props=O,this.context=ie,this.refs=U,this.updater=ge||S}var K=X.prototype=new H;K.constructor=X,P(K,M.prototype),K.isPureReactComponent=!0;var oe=Array.isArray,se={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,ie,ge,pe,fe,xe){return ge=xe.ref,{$$typeof:n,type:O,key:ie,ref:ge!==void 0?ge:null,props:xe}}function R(O,ie){return D(O.type,ie,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function x(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ie[ge]})}var k=/\/+/g;function B(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):ie.toString(36)}function N(){}function Ot(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function At(O,ie,ge,pe,fe){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var De=!1;if(O===null)De=!0;else switch(xe){case"bigint":case"string":case"number":De=!0;break;case"object":switch(O.$$typeof){case n:case e:De=!0;break;case _:return De=O._init,At(De(O._payload),ie,ge,pe,fe)}}if(De)return fe=fe(O),De=pe===""?"."+B(O,0):pe,oe(fe)?(ge="",De!=null&&(ge=De.replace(k,"$&/")+"/"),At(fe,ie,ge,"",function(Je){return Je})):fe!=null&&(A(fe)&&(fe=R(fe,ge+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(k,"$&/")+"/")+De)),ie.push(fe)),1;De=0;var ct=pe===""?".":pe+":";if(oe(O))for(var Le=0;Le<O.length;Le++)pe=O[Le],xe=ct+B(pe,Le),De+=At(pe,ie,ge,xe,fe);else if(Le=w(O),typeof Le=="function")for(O=Le.call(O),Le=0;!(pe=O.next()).done;)pe=pe.value,xe=ct+B(pe,Le++),De+=At(pe,ie,ge,xe,fe);else if(xe==="object"){if(typeof O.then=="function")return At(Ot(O),ie,ge,pe,fe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return De}function he(O,ie,ge){if(O==null)return O;var pe=[],fe=0;return At(O,pe,"","",function(xe){return ie.call(ge,xe,fe++)}),pe}function Ae(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var we=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ke(){}return Oe.Children={map:he,forEach:function(O,ie,ge){he(O,function(){ie.apply(this,arguments)},ge)},count:function(O){var ie=0;return he(O,function(){ie++}),ie},toArray:function(O){return he(O,function(ie){return ie})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Oe.Component=M,Oe.Fragment=t,Oe.Profiler=a,Oe.PureComponent=X,Oe.StrictMode=r,Oe.Suspense=p,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,Oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},Oe.cache=function(O){return function(){return O.apply(null,arguments)}},Oe.cloneElement=function(O,ie,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var pe=P({},O.props),fe=O.key,xe=void 0;if(ie!=null)for(De in ie.ref!==void 0&&(xe=void 0),ie.key!==void 0&&(fe=""+ie.key),ie)!le.call(ie,De)||De==="key"||De==="__self"||De==="__source"||De==="ref"&&ie.ref===void 0||(pe[De]=ie[De]);var De=arguments.length-2;if(De===1)pe.children=ge;else if(1<De){for(var ct=Array(De),Le=0;Le<De;Le++)ct[Le]=arguments[Le+2];pe.children=ct}return D(O.type,fe,void 0,void 0,xe,pe)},Oe.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Oe.createElement=function(O,ie,ge){var pe,fe={},xe=null;if(ie!=null)for(pe in ie.key!==void 0&&(xe=""+ie.key),ie)le.call(ie,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(fe[pe]=ie[pe]);var De=arguments.length-2;if(De===1)fe.children=ge;else if(1<De){for(var ct=Array(De),Le=0;Le<De;Le++)ct[Le]=arguments[Le+2];fe.children=ct}if(O&&O.defaultProps)for(pe in De=O.defaultProps,De)fe[pe]===void 0&&(fe[pe]=De[pe]);return D(O,xe,void 0,void 0,null,fe)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(O){return{$$typeof:d,render:O}},Oe.isValidElement=A,Oe.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Ae}},Oe.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},Oe.startTransition=function(O){var ie=se.T,ge={};se.T=ge;try{var pe=O(),fe=se.S;fe!==null&&fe(ge,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(ke,we)}catch(xe){we(xe)}finally{se.T=ie}},Oe.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},Oe.use=function(O){return se.H.use(O)},Oe.useActionState=function(O,ie,ge){return se.H.useActionState(O,ie,ge)},Oe.useCallback=function(O,ie){return se.H.useCallback(O,ie)},Oe.useContext=function(O){return se.H.useContext(O)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(O,ie){return se.H.useDeferredValue(O,ie)},Oe.useEffect=function(O,ie){return se.H.useEffect(O,ie)},Oe.useId=function(){return se.H.useId()},Oe.useImperativeHandle=function(O,ie,ge){return se.H.useImperativeHandle(O,ie,ge)},Oe.useInsertionEffect=function(O,ie){return se.H.useInsertionEffect(O,ie)},Oe.useLayoutEffect=function(O,ie){return se.H.useLayoutEffect(O,ie)},Oe.useMemo=function(O,ie){return se.H.useMemo(O,ie)},Oe.useOptimistic=function(O,ie){return se.H.useOptimistic(O,ie)},Oe.useReducer=function(O,ie,ge){return se.H.useReducer(O,ie,ge)},Oe.useRef=function(O){return se.H.useRef(O)},Oe.useState=function(O){return se.H.useState(O)},Oe.useSyncExternalStore=function(O,ie,ge){return se.H.useSyncExternalStore(O,ie,ge)},Oe.useTransition=function(){return se.H.useTransition()},Oe.version="19.0.0",Oe}var zb;function kv(){return zb||(zb=1,u_.exports=qP()),u_.exports}var c_={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bb;function HP(){if(Bb)return In;Bb=1;var n=kv();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,In.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(p,m,null,_)},In.flushSync=function(p){var m=u.T,_=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=_,r.d.f()}},In.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},In.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},In.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},In.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},In.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},In.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},In.requestFormReset=function(p){r.d.r(p)},In.unstable_batchedUpdates=function(p,m){return p(m)},In.useFormState=function(p,m,_){return u.H.useFormState(p,m,_)},In.useFormStatus=function(){return u.H.useHostTransitionStatus()},In.version="19.0.0",In}var Fb;function $P(){if(Fb)return c_.exports;Fb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),c_.exports=HP(),c_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jb;function GP(){if(jb)return eh;jb=1;var n=jP(),e=kv(),t=$P();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=se&&i[se]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case U:return"Suspense";case M:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case P:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case X:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=Object.assign,k,B;function N(i){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||"",B=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+i+B}var Ot=!1;function At(i,s){if(!i||Ot)return"";Ot=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Z){var G=Z}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(Z){G=Z}i.call(ne.prototype)}}else{try{throw Error()}catch(Z){G=Z}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Z){if(Z&&G&&typeof Z.stack=="string")return[Z.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),L=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<L.length&&!L[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===L.length)for(c=C.length-1,f=L.length-1;1<=c&&0<=f&&C[c]!==L[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==L[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==L[f]){var J=`
`+C[c].replace(" at new "," at ");return i.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",i.displayName)),J}while(1<=c&&0<=f);break}}}finally{Ot=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function he(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=At(i.type,!1),i;case 11:return i=At(i.type.render,!1),i;case 1:return i=At(i.type,!0),i;default:return""}}function Ae(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function we(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function ke(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(we(i)!==i)throw Error(r(188))}function ie(i){var s=i.alternate;if(!s){if(s=we(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function ge(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ge(i),s!==null)return s;i=i.sibling}return null}var pe=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},De=[],ct=-1;function Le(i){return{current:i}}function Je(i){0>ct||(i.current=De[ct],De[ct]=null,ct--)}function Qe(i,s){ct++,De[ct]=i.current,i.current=s}var zt=Le(null),tn=Le(null),sr=Le(null),ls=Le(null);function us(i,s){switch(Qe(sr,s),Qe(tn,i),Qe(zt,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?ub(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=ub(i),s=cb(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Je(zt),Qe(zt,s)}function vi(){Je(zt),Je(tn),Je(sr)}function Qu(i){i.memoizedState!==null&&Qe(ls,i);var s=zt.current,l=cb(s,i.type);s!==l&&(Qe(tn,i),Qe(zt,l))}function $o(i){tn.current===i&&(Je(zt),Je(tn)),ls.current===i&&(Je(ls),Qc._currentValue=xe)}var Go=Object.prototype.hasOwnProperty,Sa=n.unstable_scheduleCallback,Ko=n.unstable_cancelCallback,og=n.unstable_shouldYield,Wu=n.unstable_requestPaint,zn=n.unstable_now,Nd=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,nn=n.unstable_UserBlockingPriority,Ei=n.unstable_NormalPriority,Od=n.unstable_LowPriority,Yu=n.unstable_IdlePriority,lg=n.log,Ra=n.unstable_setDisableYieldValue,cs=null,wn=null;function Xu(i){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(cs,i,void 0,(i.current.flags&128)===128)}catch{}}function Lr(i){if(typeof lg=="function"&&Ra(i),wn&&typeof wn.setStrictMode=="function")try{wn.setStrictMode(cs,i)}catch{}}var Dn=Math.clz32?Math.clz32:Vd,Zu=Math.log,kd=Math.LN2;function Vd(i){return i>>>=0,i===0?32:31-(Zu(i)/kd|0)|0}var Ur=128,hs=4194304;function Sr(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ar(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Sr(l):(g&=b,g!==0?c=Sr(g):i||(T=b&~T,T!==0&&(c=Sr(T))))):(b=l&~f,b!==0?c=Sr(b):g!==0?c=Sr(g):i||(T=l&~T,T!==0&&(c=Sr(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function ds(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Qo(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ju(){var i=Ur;return Ur<<=1,(Ur&4194176)===0&&(Ur=128),i}function fs(){var i=hs;return hs<<=1,(hs&62914560)===0&&(hs=4194304),i}function Wo(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function kt(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Md(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,L=i.hiddenUpdates;for(l=T&~l;0<l;){var J=31-Dn(l),ne=1<<J;b[J]=0,C[J]=-1;var G=L[J];if(G!==null)for(L[J]=null,J=0;J<G.length;J++){var Z=G[J];Z!==null&&(Z.lane&=-536870913)}l&=~ne}c!==0&&ps(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ps(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Dn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function ms(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Dn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function Ld(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ud(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:Cb(i.type))}function gs(i,s){var l=fe.p;try{return fe.p=i,s()}finally{fe.p=l}}var zr=Math.random().toString(36).slice(2),rn="__reactFiber$"+zr,Kt="__reactProps$"+zr,Ti="__reactContainer$"+zr,Ca="__reactEvents$"+zr,Yo="__reactListeners$"+zr,Br="__reactHandles$"+zr,ec="__reactResources$"+zr,ys="__reactMarker$"+zr;function Da(i){delete i[rn],delete i[Kt],delete i[Ca],delete i[Yo],delete i[Br]}function Rr(i){var s=i[rn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Ti]||l[rn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=fb(i);i!==null;){if(l=i[rn])return l;i=fb(i)}return s}i=l,l=i.parentNode}return null}function wi(i){if(i=i[rn]||i[Ti]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function _s(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function vs(i){var s=i[ec];return s||(s=i[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function _t(i){i[ys]=!0}var tc=new Set,Xo={};function Kn(i,s){Bn(i,s),Bn(i+"Capture",s)}function Bn(i,s){for(Xo[i]=s,i=0;i<s.length;i++)tc.add(s[i])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ug=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},rc={};function zd(i){return Go.call(rc,i)?!0:Go.call(nc,i)?!1:ug.test(i)?rc[i]=!0:(nc[i]=!0,!1)}function Es(i,s,l){if(zd(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function Ts(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function or(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function xn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Bd(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function cg(i){var s=Bd(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function xa(i){i._valueTracker||(i._valueTracker=cg(i))}function ic(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Bd(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Zo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var bi=/[\n"\\]/g;function St(i){return i.replace(bi,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ws(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+xn(s)):i.value!==""+xn(s)&&(i.value=""+xn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Jo(i,T,xn(s)):l!=null?Jo(i,T,xn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+xn(b):i.removeAttribute("name")}function Pa(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+xn(l):"",s=s!=null?""+xn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Jo(i,s,l){s==="number"&&Zo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function We(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+xn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Na(i,s,l){if(s!=null&&(s=""+xn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+xn(l):""}function bs(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(pe(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=xn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function lr(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var hg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sc(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||hg.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Fd(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&sc(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&sc(i,g,s[g])}function ac(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fr(i){return fg.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ur=null;function el(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ii=null,Ai=null;function Si(i){var s=wi(i);if(s&&(i=s.stateNode)){var l=i[Kt]||null;e:switch(i=s.stateNode,s.type){case"input":if(ws(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+St(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[Kt]||null;if(!f)throw Error(r(90));ws(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&ic(c)}break e;case"textarea":Na(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&We(i,!!l.multiple,s,!1)}}}var oc=!1;function jd(i,s,l){if(oc)return i(s,l);oc=!0;try{var c=i(s);return c}finally{if(oc=!1,(Ii!==null||Ai!==null)&&(kf(),Ii&&(s=Ii,i=Ai,Ai=Ii=null,Si(s),i)))for(s=0;s<i.length;s++)Si(i[s])}}function Oa(i,s){var l=i.stateNode;if(l===null)return null;var c=l[Kt]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var cr=!1;if(Qn)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){cr=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{cr=!1}var jr=null,Is=null,Ri=null;function lc(){if(Ri)return Ri;var i,s=Is,l=s.length,c,f="value"in jr?jr.value:jr.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ri=f.slice(i,1<c?1-c:void 0)}function qr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Hr(){return!0}function uc(){return!1}function sn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Hr:uc,this.isPropagationStopped=uc,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),s}var et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=sn(et),Va=x({},et,{view:0,detail:0}),qd=sn(Va),nl,rl,$r,Ma=x({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==$r&&($r&&i.type==="mousemove"?(nl=i.screenX-$r.screenX,rl=i.screenY-$r.screenY):rl=nl=0,$r=i),nl)},movementY:function(i){return"movementY"in i?i.movementY:rl}}),hr=sn(Ma),Hd=x({},Ma,{dataTransfer:0}),pg=sn(Hd),La=x({},Va,{relatedTarget:0}),il=sn(La),cc=x({},et,{animationName:0,elapsedTime:0,pseudoElement:0}),sl=sn(cc),$d=x({},et,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),al=sn($d),mg=x({},et,{data:0}),hc=sn(mg),Ua={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Kd[i])?!!s[i]:!1}function za(){return dc}var Qd=x({},Va,{key:function(i){if(i.key){var s=Ua[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=qr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Gd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(i){return i.type==="keypress"?qr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?qr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ol=sn(Qd),Wd=x({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=sn(Wd),Ci=x({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Yd=sn(Ci),Xd=x({},et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zd=sn(Xd),Jd=x({},Ma,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ll=sn(Jd),Pn=x({},et,{newState:0,oldState:0}),ef=sn(Pn),tf=[9,13,27,32],Gr=Qn&&"CompositionEvent"in window,h=null;Qn&&"documentMode"in document&&(h=document.documentMode);var y=Qn&&"TextEvent"in window&&!h,E=Qn&&(!Gr||h&&8<h&&11>=h),I=" ",F=!1;function W(i,s){switch(i){case"keyup":return tf.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var He=!1;function Qt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function $e(i,s){if(He)return i==="compositionend"||!Gr&&W(i,s)?(i=lc(),Ri=Is=jr=null,He=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var an={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!an[i.type]:s==="textarea"}function Di(i,s,l,c){Ii?Ai?Ai.push(c):Ai=[c]:Ii=c,s=zf(s,"onChange"),0<s.length&&(l=new tl("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var pn=null,Kr=null;function pc(i){ib(i,0)}function nf(i){var s=_s(i);if(ic(s))return i}function OT(i,s){if(i==="change")return s}var kT=!1;if(Qn){var gg;if(Qn){var yg="oninput"in document;if(!yg){var VT=document.createElement("div");VT.setAttribute("oninput","return;"),yg=typeof VT.oninput=="function"}gg=yg}else gg=!1;kT=gg&&(!document.documentMode||9<document.documentMode)}function MT(){pn&&(pn.detachEvent("onpropertychange",LT),Kr=pn=null)}function LT(i){if(i.propertyName==="value"&&nf(Kr)){var s=[];Di(s,Kr,i,el(i)),jd(pc,s)}}function px(i,s,l){i==="focusin"?(MT(),pn=s,Kr=l,pn.attachEvent("onpropertychange",LT)):i==="focusout"&&MT()}function mx(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return nf(Kr)}function gx(i,s){if(i==="click")return nf(s)}function yx(i,s){if(i==="input"||i==="change")return nf(s)}function _x(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Wn=typeof Object.is=="function"?Object.is:_x;function mc(i,s){if(Wn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!Go.call(s,f)||!Wn(i[f],s[f]))return!1}return!0}function UT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function zT(i,s){var l=UT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=UT(l)}}function BT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?BT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function FT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Zo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Zo(i.document)}return s}function _g(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function vx(i,s){var l=FT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&BT(s.ownerDocument.documentElement,s)){if(c!==null&&_g(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=zT(s,g);var T=zT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var Ex=Qn&&"documentMode"in document&&11>=document.documentMode,ul=null,vg=null,gc=null,Eg=!1;function jT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Eg||ul==null||ul!==Zo(c)||(c=ul,"selectionStart"in c&&_g(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),gc&&mc(gc,c)||(gc=c,c=zf(vg,"onSelect"),0<c.length&&(s=new tl("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=ul)))}function Ba(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var cl={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Tg={},qT={};Qn&&(qT=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function Fa(i){if(Tg[i])return Tg[i];if(!cl[i])return i;var s=cl[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in qT)return Tg[i]=s[l];return i}var HT=Fa("animationend"),$T=Fa("animationiteration"),GT=Fa("animationstart"),Tx=Fa("transitionrun"),wx=Fa("transitionstart"),bx=Fa("transitioncancel"),KT=Fa("transitionend"),QT=new Map,WT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Cr(i,s){QT.set(i,s),Kn(s,[i])}var dr=[],hl=0,wg=0;function rf(){for(var i=hl,s=wg=hl=0;s<i;){var l=dr[s];dr[s++]=null;var c=dr[s];dr[s++]=null;var f=dr[s];dr[s++]=null;var g=dr[s];if(dr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&YT(l,f,g)}}function sf(i,s,l,c){dr[hl++]=i,dr[hl++]=s,dr[hl++]=l,dr[hl++]=c,wg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function bg(i,s,l,c){return sf(i,s,l,c),af(i)}function As(i,s){return sf(i,null,null,s),af(i)}function YT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Dn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function af(i){if(50<Fc)throw Fc=0,Dy=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var dl={},XT=new WeakMap;function fr(i,s){if(typeof i=="object"&&i!==null){var l=XT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:Ae(s)},XT.set(i,s),s)}return{value:i,source:s,stack:Ae(s)}}var fl=[],pl=0,of=null,lf=0,pr=[],mr=0,ja=null,xi=1,Pi="";function qa(i,s){fl[pl++]=lf,fl[pl++]=of,of=i,lf=s}function ZT(i,s,l){pr[mr++]=xi,pr[mr++]=Pi,pr[mr++]=ja,ja=i;var c=xi;i=Pi;var f=32-Dn(c)-1;c&=~(1<<f),l+=1;var g=32-Dn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,xi=1<<32-Dn(s)+f|l<<f|c,Pi=g+i}else xi=1<<g|l<<f|c,Pi=i}function Ig(i){i.return!==null&&(qa(i,1),ZT(i,1,0))}function Ag(i){for(;i===of;)of=fl[--pl],fl[pl]=null,lf=fl[--pl],fl[pl]=null;for(;i===ja;)ja=pr[--mr],pr[mr]=null,Pi=pr[--mr],pr[mr]=null,xi=pr[--mr],pr[mr]=null}var Nn=null,mn=null,Ye=!1,Dr=null,Qr=!1,Sg=Error(r(519));function Ha(i){var s=Error(r(418,""));throw vc(fr(s,i)),Sg}function JT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[rn]=i,s[Kt]=c,l){case"dialog":qe("cancel",s),qe("close",s);break;case"iframe":case"object":case"embed":qe("load",s);break;case"video":case"audio":for(l=0;l<qc.length;l++)qe(qc[l],s);break;case"source":qe("error",s);break;case"img":case"image":case"link":qe("error",s),qe("load",s);break;case"details":qe("toggle",s);break;case"input":qe("invalid",s),Pa(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),xa(s);break;case"select":qe("invalid",s);break;case"textarea":qe("invalid",s),bs(s,c.value,c.defaultValue,c.children),xa(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||lb(s.textContent,l)?(c.popover!=null&&(qe("beforetoggle",s),qe("toggle",s)),c.onScroll!=null&&qe("scroll",s),c.onScrollEnd!=null&&qe("scrollend",s),c.onClick!=null&&(s.onclick=Bf),s=!0):s=!1,s||Ha(i)}function e0(i){for(Nn=i.return;Nn;)switch(Nn.tag){case 3:case 27:Qr=!0;return;case 5:case 13:Qr=!1;return;default:Nn=Nn.return}}function yc(i){if(i!==Nn)return!1;if(!Ye)return e0(i),Ye=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||Gy(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&mn&&Ha(i),e0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){mn=Pr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}mn=null}}else mn=Nn?Pr(i.stateNode.nextSibling):null;return!0}function _c(){mn=Nn=null,Ye=!1}function vc(i){Dr===null?Dr=[i]:Dr.push(i)}var Ec=Error(r(460)),t0=Error(r(474)),Rg={then:function(){}};function n0(i){return i=i.status,i==="fulfilled"||i==="rejected"}function uf(){}function r0(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(uf,uf),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===Ec?Error(r(483)):i;default:if(typeof s.status=="string")s.then(uf,uf);else{if(i=ot,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===Ec?Error(r(483)):i}throw Tc=s,Ec}}var Tc=null;function i0(){if(Tc===null)throw Error(r(459));var i=Tc;return Tc=null,i}var ml=null,wc=0;function cf(i){var s=wc;return wc+=1,ml===null&&(ml=[]),r0(ml,i,s)}function bc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function hf(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function s0(i){var s=i._init;return s(i._payload)}function a0(i){function s(z,V){if(i){var $=z.deletions;$===null?(z.deletions=[V],z.flags|=16):$.push(V)}}function l(z,V){if(!i)return null;for(;V!==null;)s(z,V),V=V.sibling;return null}function c(z){for(var V=new Map;z!==null;)z.key!==null?V.set(z.key,z):V.set(z.index,z),z=z.sibling;return V}function f(z,V){return z=Ls(z,V),z.index=0,z.sibling=null,z}function g(z,V,$){return z.index=$,i?($=z.alternate,$!==null?($=$.index,$<V?(z.flags|=33554434,V):$):(z.flags|=33554434,V)):(z.flags|=1048576,V)}function T(z){return i&&z.alternate===null&&(z.flags|=33554434),z}function b(z,V,$,ee){return V===null||V.tag!==6?(V=Ty($,z.mode,ee),V.return=z,V):(V=f(V,$),V.return=z,V)}function C(z,V,$,ee){var ye=$.type;return ye===p?J(z,V,$.props.children,ee,$.key):V!==null&&(V.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===X&&s0(ye)===V.type)?(V=f(V,$.props),bc(V,$),V.return=z,V):(V=Df($.type,$.key,$.props,null,z.mode,ee),bc(V,$),V.return=z,V)}function L(z,V,$,ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=wy($,z.mode,ee),V.return=z,V):(V=f(V,$.children||[]),V.return=z,V)}function J(z,V,$,ee,ye){return V===null||V.tag!==7?(V=eo($,z.mode,ee,ye),V.return=z,V):(V=f(V,$),V.return=z,V)}function ne(z,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ty(""+V,z.mode,$),V.return=z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case u:return $=Df(V.type,V.key,V.props,null,z.mode,$),bc($,V),$.return=z,$;case d:return V=wy(V,z.mode,$),V.return=z,V;case X:var ee=V._init;return V=ee(V._payload),ne(z,V,$)}if(pe(V)||le(V))return V=eo(V,z.mode,$,null),V.return=z,V;if(typeof V.then=="function")return ne(z,cf(V),$);if(V.$$typeof===S)return ne(z,Sf(z,V),$);hf(z,V)}return null}function G(z,V,$,ee){var ye=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ye!==null?null:b(z,V,""+$,ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case u:return $.key===ye?C(z,V,$,ee):null;case d:return $.key===ye?L(z,V,$,ee):null;case X:return ye=$._init,$=ye($._payload),G(z,V,$,ee)}if(pe($)||le($))return ye!==null?null:J(z,V,$,ee,null);if(typeof $.then=="function")return G(z,V,cf($),ee);if($.$$typeof===S)return G(z,V,Sf(z,$),ee);hf(z,$)}return null}function Z(z,V,$,ee,ye){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return z=z.get($)||null,b(V,z,""+ee,ye);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return z=z.get(ee.key===null?$:ee.key)||null,C(V,z,ee,ye);case d:return z=z.get(ee.key===null?$:ee.key)||null,L(V,z,ee,ye);case X:var Ue=ee._init;return ee=Ue(ee._payload),Z(z,V,$,ee,ye)}if(pe(ee)||le(ee))return z=z.get($)||null,J(V,z,ee,ye,null);if(typeof ee.then=="function")return Z(z,V,$,cf(ee),ye);if(ee.$$typeof===S)return Z(z,V,$,Sf(V,ee),ye);hf(V,ee)}return null}function Ee(z,V,$,ee){for(var ye=null,Ue=null,be=V,Re=V=0,un=null;be!==null&&Re<$.length;Re++){be.index>Re?(un=be,be=null):un=be.sibling;var Xe=G(z,be,$[Re],ee);if(Xe===null){be===null&&(be=un);break}i&&be&&Xe.alternate===null&&s(z,be),V=g(Xe,V,Re),Ue===null?ye=Xe:Ue.sibling=Xe,Ue=Xe,be=un}if(Re===$.length)return l(z,be),Ye&&qa(z,Re),ye;if(be===null){for(;Re<$.length;Re++)be=ne(z,$[Re],ee),be!==null&&(V=g(be,V,Re),Ue===null?ye=be:Ue.sibling=be,Ue=be);return Ye&&qa(z,Re),ye}for(be=c(be);Re<$.length;Re++)un=Z(be,z,Re,$[Re],ee),un!==null&&(i&&un.alternate!==null&&be.delete(un.key===null?Re:un.key),V=g(un,V,Re),Ue===null?ye=un:Ue.sibling=un,Ue=un);return i&&be.forEach(function(Hs){return s(z,Hs)}),Ye&&qa(z,Re),ye}function Pe(z,V,$,ee){if($==null)throw Error(r(151));for(var ye=null,Ue=null,be=V,Re=V=0,un=null,Xe=$.next();be!==null&&!Xe.done;Re++,Xe=$.next()){be.index>Re?(un=be,be=null):un=be.sibling;var Hs=G(z,be,Xe.value,ee);if(Hs===null){be===null&&(be=un);break}i&&be&&Hs.alternate===null&&s(z,be),V=g(Hs,V,Re),Ue===null?ye=Hs:Ue.sibling=Hs,Ue=Hs,be=un}if(Xe.done)return l(z,be),Ye&&qa(z,Re),ye;if(be===null){for(;!Xe.done;Re++,Xe=$.next())Xe=ne(z,Xe.value,ee),Xe!==null&&(V=g(Xe,V,Re),Ue===null?ye=Xe:Ue.sibling=Xe,Ue=Xe);return Ye&&qa(z,Re),ye}for(be=c(be);!Xe.done;Re++,Xe=$.next())Xe=Z(be,z,Re,Xe.value,ee),Xe!==null&&(i&&Xe.alternate!==null&&be.delete(Xe.key===null?Re:Xe.key),V=g(Xe,V,Re),Ue===null?ye=Xe:Ue.sibling=Xe,Ue=Xe);return i&&be.forEach(function(LP){return s(z,LP)}),Ye&&qa(z,Re),ye}function Dt(z,V,$,ee){if(typeof $=="object"&&$!==null&&$.type===p&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case u:e:{for(var ye=$.key;V!==null;){if(V.key===ye){if(ye=$.type,ye===p){if(V.tag===7){l(z,V.sibling),ee=f(V,$.props.children),ee.return=z,z=ee;break e}}else if(V.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===X&&s0(ye)===V.type){l(z,V.sibling),ee=f(V,$.props),bc(ee,$),ee.return=z,z=ee;break e}l(z,V);break}else s(z,V);V=V.sibling}$.type===p?(ee=eo($.props.children,z.mode,ee,$.key),ee.return=z,z=ee):(ee=Df($.type,$.key,$.props,null,z.mode,ee),bc(ee,$),ee.return=z,z=ee)}return T(z);case d:e:{for(ye=$.key;V!==null;){if(V.key===ye)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){l(z,V.sibling),ee=f(V,$.children||[]),ee.return=z,z=ee;break e}else{l(z,V);break}else s(z,V);V=V.sibling}ee=wy($,z.mode,ee),ee.return=z,z=ee}return T(z);case X:return ye=$._init,$=ye($._payload),Dt(z,V,$,ee)}if(pe($))return Ee(z,V,$,ee);if(le($)){if(ye=le($),typeof ye!="function")throw Error(r(150));return $=ye.call($),Pe(z,V,$,ee)}if(typeof $.then=="function")return Dt(z,V,cf($),ee);if($.$$typeof===S)return Dt(z,V,Sf(z,$),ee);hf(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(l(z,V.sibling),ee=f(V,$),ee.return=z,z=ee):(l(z,V),ee=Ty($,z.mode,ee),ee.return=z,z=ee),T(z)):l(z,V)}return function(z,V,$,ee){try{wc=0;var ye=Dt(z,V,$,ee);return ml=null,ye}catch(be){if(be===Ec)throw be;var Ue=vr(29,be,null,z.mode);return Ue.lanes=ee,Ue.return=z,Ue}finally{}}}var $a=a0(!0),o0=a0(!1),gl=Le(null),df=Le(0);function l0(i,s){i=ji,Qe(df,i),Qe(gl,s),ji=i|s.baseLanes}function Cg(){Qe(df,ji),Qe(gl,gl.current)}function Dg(){ji=df.current,Je(gl),Je(df)}var gr=Le(null),Wr=null;function Ss(i){var s=i.alternate;Qe(Yt,Yt.current&1),Qe(gr,i),Wr===null&&(s===null||gl.current!==null||s.memoizedState!==null)&&(Wr=i)}function u0(i){if(i.tag===22){if(Qe(Yt,Yt.current),Qe(gr,i),Wr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Wr=i)}}else Rs()}function Rs(){Qe(Yt,Yt.current),Qe(gr,gr.current)}function Ni(i){Je(gr),Wr===i&&(Wr=null),Je(Yt)}var Yt=Le(0);function ff(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ix=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},Ax=n.unstable_scheduleCallback,Sx=n.unstable_NormalPriority,Xt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xg(){return{controller:new Ix,data:new Map,refCount:0}}function Ic(i){i.refCount--,i.refCount===0&&Ax(Sx,function(){i.controller.abort()})}var Ac=null,Pg=0,yl=0,_l=null;function Rx(i,s){if(Ac===null){var l=Ac=[];Pg=0,yl=Ly(),_l={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Pg++,s.then(c0,c0),s}function c0(){if(--Pg===0&&Ac!==null){_l!==null&&(_l.status="fulfilled");var i=Ac;Ac=null,yl=0,_l=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function Cx(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var h0=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&Rx(i,s),h0!==null&&h0(i,s)};var Ga=Le(null);function Ng(){var i=Ga.current;return i!==null?i:ot.pooledCache}function pf(i,s){s===null?Qe(Ga,Ga.current):Qe(Ga,s.pool)}function d0(){var i=Ng();return i===null?null:{parent:Xt._currentValue,pool:i}}var Cs=0,Me=null,it=null,Bt=null,mf=!1,vl=!1,Ka=!1,gf=0,Sc=0,El=null,Dx=0;function Vt(){throw Error(r(321))}function Og(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Wn(i[l],s[l]))return!1;return!0}function kg(i,s,l,c,f,g){return Cs=g,Me=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?Qa:Ds,Ka=!1,g=l(c,f),Ka=!1,vl&&(g=p0(s,l,c,f)),f0(i),g}function f0(i){A.H=Yr;var s=it!==null&&it.next!==null;if(Cs=0,Bt=it=Me=null,mf=!1,Sc=0,El=null,s)throw Error(r(300));i===null||on||(i=i.dependencies,i!==null&&Af(i)&&(on=!0))}function p0(i,s,l,c){Me=i;var f=0;do{if(vl&&(El=null),Sc=0,vl=!1,25<=f)throw Error(r(301));if(f+=1,Bt=it=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Wa,g=s(l,c)}while(vl);return g}function xx(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?Rc(s):s,i=i.useState()[0],(it!==null?it.memoizedState:null)!==i&&(Me.flags|=1024),s}function Vg(){var i=gf!==0;return gf=0,i}function Mg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Lg(i){if(mf){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}mf=!1}Cs=0,Bt=it=Me=null,vl=!1,Sc=gf=0,El=null}function Fn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Me.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function Ft(){if(it===null){var i=Me.alternate;i=i!==null?i.memoizedState:null}else i=it.next;var s=Bt===null?Me.memoizedState:Bt.next;if(s!==null)Bt=s,it=i;else{if(i===null)throw Me.alternate===null?Error(r(467)):Error(r(310));it=i,i={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Bt===null?Me.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var yf;yf=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Rc(i){var s=Sc;return Sc+=1,El===null&&(El=[]),i=r0(El,i,s),s=Me,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?Qa:Ds),i}function _f(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Rc(i);if(i.$$typeof===S)return bn(i)}throw Error(r(438,String(i)))}function Ug(i){var s=null,l=Me.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Me.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=yf(),Me.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function Oi(i,s){return typeof s=="function"?s(i):s}function vf(i){var s=Ft();return zg(s,it,i)}function zg(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,L=s,J=!1;do{var ne=L.lane&-536870913;if(ne!==L.lane?(Ge&ne)===ne:(Cs&ne)===ne){var G=L.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),ne===yl&&(J=!0);else if((Cs&G)===G){L=L.next,G===yl&&(J=!0);continue}else ne={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,Me.lanes|=G,Us|=G;ne=L.action,Ka&&l(g,ne),g=L.hasEagerState?L.eagerState:l(g,ne)}else G={lane:ne,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=G,T=g):C=C.next=G,Me.lanes|=ne,Us|=ne;L=L.next}while(L!==null&&L!==s);if(C===null?T=g:C.next=b,!Wn(g,i.memoizedState)&&(on=!0,J&&(l=_l,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Bg(i){var s=Ft(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Wn(g,s.memoizedState)||(on=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function m0(i,s,l){var c=Me,f=Ft(),g=Ye;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Wn((it||f).memoizedState,l);if(T&&(f.memoizedState=l,on=!0),f=f.queue,qg(_0.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,Tl(9,y0.bind(null,c,f,l,s),{destroy:void 0},null),ot===null)throw Error(r(349));g||(Cs&60)!==0||g0(c,s,l)}return l}function g0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Me.updateQueue,s===null?(s=yf(),Me.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function y0(i,s,l,c){s.value=l,s.getSnapshot=c,v0(s)&&E0(i)}function _0(i,s,l){return l(function(){v0(s)&&E0(i)})}function v0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Wn(i,l)}catch{return!0}}function E0(i){var s=As(i,2);s!==null&&On(s,i,2)}function Fg(i){var s=Fn();if(typeof i=="function"){var l=i;if(i=l(),Ka){Lr(!0);try{l()}finally{Lr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:i},s}function T0(i,s,l,c){return i.baseState=l,zg(i,it,typeof c=="function"?c:Oi)}function Px(i,s,l,c,f){if(wf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,w0(s,g)):(g.next=l.next,s.pending=l.next=g)}}function w0(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),b0(i,s,b)}catch(L){jg(i,s,L)}finally{A.T=g}}else try{g=l(f,c),b0(i,s,g)}catch(L){jg(i,s,L)}}function b0(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){I0(i,s,c)},function(c){return jg(i,s,c)}):I0(i,s,l)}function I0(i,s,l){s.status="fulfilled",s.value=l,A0(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,w0(i,l)))}function jg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,A0(s),s=s.next;while(s!==c)}i.action=null}function A0(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function S0(i,s){return s}function R0(i,s){if(Ye){var l=ot.formState;if(l!==null){e:{var c=Me;if(Ye){if(mn){t:{for(var f=mn,g=Qr;f.nodeType!==8;){if(!g){f=null;break t}if(f=Pr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){mn=Pr(f.nextSibling),c=f.data==="F!";break e}}Ha(c)}c=!1}c&&(s=l[0])}}return l=Fn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S0,lastRenderedState:s},l.queue=c,l=$0.bind(null,Me,c),c.dispatch=l,c=Fg(!1),g=Qg.bind(null,Me,!1,c.queue),c=Fn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=Px.bind(null,Me,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function C0(i){var s=Ft();return D0(s,it,i)}function D0(i,s,l){s=zg(i,s,S0)[0],i=vf(Oi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?Rc(s):s;var c=Ft(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(Me.flags|=2048,Tl(9,Nx.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function Nx(i,s){i.action=s}function x0(i){var s=Ft(),l=it;if(l!==null)return D0(s,l,i);Ft(),s=s.memoizedState,l=Ft();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function Tl(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Me.updateQueue,s===null&&(s=yf(),Me.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function P0(){return Ft().memoizedState}function Ef(i,s,l,c){var f=Fn();Me.flags|=i,f.memoizedState=Tl(1|s,l,{destroy:void 0},c===void 0?null:c)}function Tf(i,s,l,c){var f=Ft();c=c===void 0?null:c;var g=f.memoizedState.inst;it!==null&&c!==null&&Og(c,it.memoizedState.deps)?f.memoizedState=Tl(s,l,g,c):(Me.flags|=i,f.memoizedState=Tl(1|s,l,g,c))}function N0(i,s){Ef(8390656,8,i,s)}function qg(i,s){Tf(2048,8,i,s)}function O0(i,s){return Tf(4,2,i,s)}function k0(i,s){return Tf(4,4,i,s)}function V0(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function M0(i,s,l){l=l!=null?l.concat([i]):null,Tf(4,4,V0.bind(null,s,i),l)}function Hg(){}function L0(i,s){var l=Ft();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Og(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function U0(i,s){var l=Ft();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Og(s,c[1]))return c[0];if(c=i(),Ka){Lr(!0);try{i()}finally{Lr(!1)}}return l.memoizedState=[c,s],c}function $g(i,s,l){return l===void 0||(Cs&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=Bw(),Me.lanes|=i,Us|=i,l)}function z0(i,s,l,c){return Wn(l,s)?l:gl.current!==null?(i=$g(i,l,c),Wn(i,s)||(on=!0),i):(Cs&42)===0?(on=!0,i.memoizedState=l):(i=Bw(),Me.lanes|=i,Us|=i,s)}function B0(i,s,l,c,f){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,Qg(i,!1,s,l);try{var C=f(),L=A.S;if(L!==null&&L(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var J=Cx(C,c);Cc(i,s,J,Jn(i))}else Cc(i,s,c,Jn(i))}catch(ne){Cc(i,s,{then:function(){},status:"rejected",reason:ne},Jn())}finally{fe.p=g,A.T=T}}function Ox(){}function Gg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=F0(i).queue;B0(i,f,s,xe,l===null?Ox:function(){return j0(i),l(c)})}function F0(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:xe},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function j0(i){var s=F0(i).next.queue;Cc(i,s,{},Jn())}function Kg(){return bn(Qc)}function q0(){return Ft().memoizedState}function H0(){return Ft().memoizedState}function kx(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Jn();i=Ns(l);var c=Os(s,i,l);c!==null&&(On(c,s,l),Pc(c,s,l)),s={cache:xg()},i.payload=s;return}s=s.return}}function Vx(i,s,l){var c=Jn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},wf(i)?G0(s,l):(l=bg(i,s,l,c),l!==null&&(On(l,i,c),K0(l,s,c)))}function $0(i,s,l){var c=Jn();Cc(i,s,l,c)}function Cc(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(wf(i))G0(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Wn(b,T))return sf(i,s,f,0),ot===null&&rf(),!1}catch{}finally{}if(l=bg(i,s,f,c),l!==null)return On(l,i,c),K0(l,s,c),!0}return!1}function Qg(i,s,l,c){if(c={lane:2,revertLane:Ly(),action:c,hasEagerState:!1,eagerState:null,next:null},wf(i)){if(s)throw Error(r(479))}else s=bg(i,l,c,2),s!==null&&On(s,i,2)}function wf(i){var s=i.alternate;return i===Me||s!==null&&s===Me}function G0(i,s){vl=mf=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function K0(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,ms(i,l)}}var Yr={readContext:bn,use:_f,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt};Yr.useCacheRefresh=Vt,Yr.useMemoCache=Vt,Yr.useHostTransitionStatus=Vt,Yr.useFormState=Vt,Yr.useActionState=Vt,Yr.useOptimistic=Vt;var Qa={readContext:bn,use:_f,useCallback:function(i,s){return Fn().memoizedState=[i,s===void 0?null:s],i},useContext:bn,useEffect:N0,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,Ef(4194308,4,V0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Ef(4194308,4,i,s)},useInsertionEffect:function(i,s){Ef(4,2,i,s)},useMemo:function(i,s){var l=Fn();s=s===void 0?null:s;var c=i();if(Ka){Lr(!0);try{i()}finally{Lr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Fn();if(l!==void 0){var f=l(s);if(Ka){Lr(!0);try{l(s)}finally{Lr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=Vx.bind(null,Me,i),[c.memoizedState,i]},useRef:function(i){var s=Fn();return i={current:i},s.memoizedState=i},useState:function(i){i=Fg(i);var s=i.queue,l=$0.bind(null,Me,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:Hg,useDeferredValue:function(i,s){var l=Fn();return $g(l,i,s)},useTransition:function(){var i=Fg(!1);return i=B0.bind(null,Me,i.queue,!0,!1),Fn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Me,f=Fn();if(Ye){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),ot===null)throw Error(r(349));(Ge&60)!==0||g0(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,N0(_0.bind(null,c,g,i),[i]),c.flags|=2048,Tl(9,y0.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=Fn(),s=ot.identifierPrefix;if(Ye){var l=Pi,c=xi;l=(c&~(1<<32-Dn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=gf++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Dx++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Fn().memoizedState=kx.bind(null,Me)}};Qa.useMemoCache=Ug,Qa.useHostTransitionStatus=Kg,Qa.useFormState=R0,Qa.useActionState=R0,Qa.useOptimistic=function(i){var s=Fn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=Qg.bind(null,Me,!0,l),l.dispatch=s,[i,s]};var Ds={readContext:bn,use:_f,useCallback:L0,useContext:bn,useEffect:qg,useImperativeHandle:M0,useInsertionEffect:O0,useLayoutEffect:k0,useMemo:U0,useReducer:vf,useRef:P0,useState:function(){return vf(Oi)},useDebugValue:Hg,useDeferredValue:function(i,s){var l=Ft();return z0(l,it.memoizedState,i,s)},useTransition:function(){var i=vf(Oi)[0],s=Ft().memoizedState;return[typeof i=="boolean"?i:Rc(i),s]},useSyncExternalStore:m0,useId:q0};Ds.useCacheRefresh=H0,Ds.useMemoCache=Ug,Ds.useHostTransitionStatus=Kg,Ds.useFormState=C0,Ds.useActionState=C0,Ds.useOptimistic=function(i,s){var l=Ft();return T0(l,it,i,s)};var Wa={readContext:bn,use:_f,useCallback:L0,useContext:bn,useEffect:qg,useImperativeHandle:M0,useInsertionEffect:O0,useLayoutEffect:k0,useMemo:U0,useReducer:Bg,useRef:P0,useState:function(){return Bg(Oi)},useDebugValue:Hg,useDeferredValue:function(i,s){var l=Ft();return it===null?$g(l,i,s):z0(l,it.memoizedState,i,s)},useTransition:function(){var i=Bg(Oi)[0],s=Ft().memoizedState;return[typeof i=="boolean"?i:Rc(i),s]},useSyncExternalStore:m0,useId:q0};Wa.useCacheRefresh=H0,Wa.useMemoCache=Ug,Wa.useHostTransitionStatus=Kg,Wa.useFormState=x0,Wa.useActionState=x0,Wa.useOptimistic=function(i,s){var l=Ft();return it!==null?T0(l,it,i,s):(l.baseState=i,[i,l.queue.dispatch])};function Wg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:x({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Yg={isMounted:function(i){return(i=i._reactInternals)?we(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Jn(),f=Ns(c);f.payload=s,l!=null&&(f.callback=l),s=Os(i,f,c),s!==null&&(On(s,i,c),Pc(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Jn(),f=Ns(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=Os(i,f,c),s!==null&&(On(s,i,c),Pc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Jn(),c=Ns(l);c.tag=2,s!=null&&(c.callback=s),s=Os(i,c,l),s!==null&&(On(s,i,l),Pc(s,i,l))}};function Q0(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!mc(l,c)||!mc(f,g):!0}function W0(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&Yg.enqueueReplaceState(s,s.state,null)}function Ya(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=x({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var bf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Y0(i){bf(i)}function X0(i){console.error(i)}function Z0(i){bf(i)}function If(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function J0(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xg(i,s,l){return l=Ns(l),l.tag=3,l.payload={element:null},l.callback=function(){If(i,s)},l}function ew(i){return i=Ns(i),i.tag=3,i}function tw(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){J0(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){J0(s,l,c),typeof f!="function"&&(zs===null?zs=new Set([this]):zs.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function Mx(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&xc(s,l,f,!0),l=gr.current,l!==null){switch(l.tag){case 13:return Wr===null?Ny():l.alternate===null&&Ct===0&&(Ct=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===Rg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),ky(i,c,f)),!1;case 22:return l.flags|=65536,c===Rg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),ky(i,c,f)),!1}throw Error(r(435,l.tag))}return ky(i,c,f),Ny(),!1}if(Ye)return s=gr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Sg&&(i=Error(r(422),{cause:c}),vc(fr(i,l)))):(c!==Sg&&(s=Error(r(423),{cause:c}),vc(fr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=fr(c,l),f=Xg(i.stateNode,c,f),dy(i,f),Ct!==4&&(Ct=2)),!1;var g=Error(r(520),{cause:c});if(g=fr(g,l),zc===null?zc=[g]:zc.push(g),Ct!==4&&(Ct=2),s===null)return!0;c=fr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=Xg(l.stateNode,c,i),dy(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zs===null||!zs.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=ew(f),tw(f,i,l,c),dy(l,f),!1}l=l.return}while(l!==null);return!1}var nw=Error(r(461)),on=!1;function gn(i,s,l,c){s.child=i===null?o0(s,null,l,c):$a(s,i.child,l,c)}function rw(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Za(s),c=kg(i,s,l,T,g,f),b=Vg(),i!==null&&!on?(Mg(i,s,f),ki(i,s,f)):(Ye&&b&&Ig(s),s.flags|=1,gn(i,s,c,f),s.child)}function iw(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!Ey(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,sw(i,s,g,c,f)):(i=Df(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!ay(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:mc,l(T,c)&&i.ref===s.ref)return ki(i,s,f)}return s.flags|=1,i=Ls(g,c),i.ref=s.ref,i.return=s,s.child=i}function sw(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(mc(g,c)&&i.ref===s.ref)if(on=!1,s.pendingProps=c=g,ay(i,f))(i.flags&131072)!==0&&(on=!0);else return s.lanes=i.lanes,ki(i,s,f)}return Zg(i,s,l,c,f)}function aw(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Dc(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return ow(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&pf(s,T!==null?T.cachePool:null),T!==null?l0(s,T):Cg(),u0(s);else return s.lanes=s.childLanes=536870912,ow(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(pf(s,T.cachePool),l0(s,T),Rs(),s.memoizedState=null):(i!==null&&pf(s,null),Cg(),Rs());return gn(i,s,f,l),s.child}function ow(i,s,l,c){var f=Ng();return f=f===null?null:{parent:Xt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&pf(s,null),Cg(),u0(s),i!==null&&xc(i,s,c,!0),null}function Dc(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function Zg(i,s,l,c,f){return Za(s),l=kg(i,s,l,c,void 0,f),c=Vg(),i!==null&&!on?(Mg(i,s,f),ki(i,s,f)):(Ye&&c&&Ig(s),s.flags|=1,gn(i,s,l,f),s.child)}function lw(i,s,l,c,f,g){return Za(s),s.updateQueue=null,l=p0(s,c,l,f),f0(i),c=Vg(),i!==null&&!on?(Mg(i,s,g),ki(i,s,g)):(Ye&&c&&Ig(s),s.flags|=1,gn(i,s,l,g),s.child)}function uw(i,s,l,c,f){if(Za(s),s.stateNode===null){var g=dl,T=l.contextType;typeof T=="object"&&T!==null&&(g=bn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Yg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},cy(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?bn(T):dl,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Wg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Yg.enqueueReplaceState(g,g.state,null),Oc(s,c,g,f),Nc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Ya(l,b);g.props=C;var L=g.context,J=l.contextType;T=dl,typeof J=="object"&&J!==null&&(T=bn(J));var ne=l.getDerivedStateFromProps;J=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,J||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||L!==T)&&W0(s,g,c,T),Ps=!1;var G=s.memoizedState;g.state=G,Oc(s,c,g,f),Nc(),L=s.memoizedState,b||G!==L||Ps?(typeof ne=="function"&&(Wg(s,l,ne,c),L=s.memoizedState),(C=Ps||Q0(s,l,C,c,G,L,T))?(J||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=L),g.props=c,g.state=L,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,hy(i,s),T=s.memoizedProps,J=Ya(l,T),g.props=J,ne=s.pendingProps,G=g.context,L=l.contextType,C=dl,typeof L=="object"&&L!==null&&(C=bn(L)),b=l.getDerivedStateFromProps,(L=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||G!==C)&&W0(s,g,c,C),Ps=!1,G=s.memoizedState,g.state=G,Oc(s,c,g,f),Nc();var Z=s.memoizedState;T!==ne||G!==Z||Ps||i!==null&&i.dependencies!==null&&Af(i.dependencies)?(typeof b=="function"&&(Wg(s,l,b,c),Z=s.memoizedState),(J=Ps||Q0(s,l,J,c,G,Z,C)||i!==null&&i.dependencies!==null&&Af(i.dependencies))?(L||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,Z,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,Z,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Z),g.props=c,g.state=Z,g.context=C,c=J):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Dc(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=$a(s,i.child,null,f),s.child=$a(s,null,l,f)):gn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=ki(i,s,f),i}function cw(i,s,l,c){return _c(),s.flags|=256,gn(i,s,l,c),s.child}var Jg={dehydrated:null,treeContext:null,retryLane:0};function ey(i){return{baseLanes:i,cachePool:d0()}}function ty(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=Er),i}function hw(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Yt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(Ye){if(f?Ss(s):Rs(),Ye){var b=mn,C;if(C=b){e:{for(C=b,b=Qr;C.nodeType!==8;){if(!b){b=null;break e}if(C=Pr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:ja!==null?{id:xi,overflow:Pi}:null,retryLane:536870912},C=vr(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Nn=s,mn=null,C=!0):C=!1}C||Ha(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Ni(s)}return b=c.children,c=c.fallback,f?(Rs(),f=s.mode,b=ry({mode:"hidden",children:b},f),c=eo(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=ey(l),f.childLanes=ty(i,T,l),s.memoizedState=Jg,c):(Ss(s),ny(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Ss(s),s.flags&=-257,s=iy(i,s,l)):s.memoizedState!==null?(Rs(),s.child=i.child,s.flags|=128,s=null):(Rs(),f=c.fallback,b=s.mode,c=ry({mode:"visible",children:c.children},b),f=eo(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,$a(s,i.child,null,l),c=s.child,c.memoizedState=ey(l),c.childLanes=ty(i,T,l),s.memoizedState=Jg,s=f);else if(Ss(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var L=T.dgst;T=L,c=Error(r(419)),c.stack="",c.digest=T,vc({value:c,source:null,stack:null}),s=iy(i,s,l)}else if(on||xc(i,s,l,!1),T=(l&i.childLanes)!==0,on||T){if(T=ot,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,As(i,c),On(T,i,c),nw}b.data==="$?"||Ny(),s=iy(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=Xx.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,mn=Pr(b.nextSibling),Nn=s,Ye=!0,Dr=null,Qr=!1,i!==null&&(pr[mr++]=xi,pr[mr++]=Pi,pr[mr++]=ja,xi=i.id,Pi=i.overflow,ja=s),s=ny(s,c.children),s.flags|=4096);return s}return f?(Rs(),f=c.fallback,b=s.mode,C=i.child,L=C.sibling,c=Ls(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,L!==null?f=Ls(L,f):(f=eo(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=ey(l):(C=b.cachePool,C!==null?(L=Xt._currentValue,C=C.parent!==L?{parent:L,pool:L}:C):C=d0(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=ty(i,T,l),s.memoizedState=Jg,c):(Ss(s),l=i.child,i=l.sibling,l=Ls(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function ny(i,s){return s=ry({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function ry(i,s){return Lw(i,s,0,null)}function iy(i,s,l){return $a(s,i.child,null,l),i=ny(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function dw(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),ly(i.return,s,l)}function sy(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function fw(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(gn(i,s,c.children,l),c=Yt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&dw(i,l,s);else if(i.tag===19)dw(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Qe(Yt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&ff(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),sy(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&ff(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}sy(s,!0,l,null,g);break;case"together":sy(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ki(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Us|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(xc(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Ls(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ls(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function ay(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&Af(i)))}function Lx(i,s,l){switch(s.tag){case 3:us(s,s.stateNode.containerInfo),xs(s,Xt,i.memoizedState.cache),_c();break;case 27:case 5:Qu(s);break;case 4:us(s,s.stateNode.containerInfo);break;case 10:xs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Ss(s),s.flags|=128,null):(l&s.child.childLanes)!==0?hw(i,s,l):(Ss(s),i=ki(i,s,l),i!==null?i.sibling:null);Ss(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(xc(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return fw(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qe(Yt,Yt.current),c)break;return null;case 22:case 23:return s.lanes=0,aw(i,s,l);case 24:xs(s,Xt,i.memoizedState.cache)}return ki(i,s,l)}function pw(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)on=!0;else{if(!ay(i,l)&&(s.flags&128)===0)return on=!1,Lx(i,s,l);on=(i.flags&131072)!==0}else on=!1,Ye&&(s.flags&1048576)!==0&&ZT(s,lf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")Ey(c)?(i=Ya(c,i),s.tag=1,s=uw(null,s,c,i,l)):(s.tag=0,s=Zg(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===P){s.tag=11,s=rw(null,s,c,i,l);break e}else if(f===H){s.tag=14,s=iw(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return Zg(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Ya(c,s.pendingProps),uw(i,s,c,f,l);case 3:e:{if(us(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,hy(i,s),Oc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,xs(s,Xt,g),g!==f.cache&&uy(s,[Xt],l,!0),Nc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=cw(i,s,g,l);break e}else if(g!==c){c=fr(Error(r(424)),s),vc(c),s=cw(i,s,g,l);break e}else for(mn=Pr(s.stateNode.containerInfo.firstChild),Nn=s,Ye=!0,Dr=null,Qr=!0,l=o0(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(_c(),g===c){s=ki(i,s,l);break e}gn(i,s,g,l)}s=s.child}return s;case 26:return Dc(i,s),i===null?(l=yb(s.type,null,s.pendingProps,null))?s.memoizedState=l:Ye||(l=s.type,i=s.pendingProps,c=Ff(sr.current).createElement(l),c[rn]=s,c[Kt]=i,yn(c,l,i),_t(c),s.stateNode=c):s.memoizedState=yb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return Qu(s),i===null&&Ye&&(c=s.stateNode=pb(s.type,s.pendingProps,sr.current),Nn=s,Qr=!0,mn=Pr(c.firstChild)),c=s.pendingProps.children,i!==null||Ye?gn(i,s,c,l):s.child=$a(s,null,c,l),Dc(i,s),s.child;case 5:return i===null&&Ye&&((f=c=mn)&&(c=fP(c,s.type,s.pendingProps,Qr),c!==null?(s.stateNode=c,Nn=s,mn=Pr(c.firstChild),Qr=!1,f=!0):f=!1),f||Ha(s)),Qu(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,Gy(f,g)?c=null:T!==null&&Gy(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=kg(i,s,xx,null,null,l),Qc._currentValue=f),Dc(i,s),gn(i,s,c,l),s.child;case 6:return i===null&&Ye&&((i=l=mn)&&(l=pP(l,s.pendingProps,Qr),l!==null?(s.stateNode=l,Nn=s,mn=null,i=!0):i=!1),i||Ha(s)),null;case 13:return hw(i,s,l);case 4:return us(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=$a(s,null,c,l):gn(i,s,c,l),s.child;case 11:return rw(i,s,s.type,s.pendingProps,l);case 7:return gn(i,s,s.pendingProps,l),s.child;case 8:return gn(i,s,s.pendingProps.children,l),s.child;case 12:return gn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,xs(s,s.type,c.value),gn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Za(s),f=bn(f),c=c(f),s.flags|=1,gn(i,s,c,l),s.child;case 14:return iw(i,s,s.type,s.pendingProps,l);case 15:return sw(i,s,s.type,s.pendingProps,l);case 19:return fw(i,s,l);case 22:return aw(i,s,l);case 24:return Za(s),c=bn(Xt),i===null?(f=Ng(),f===null&&(f=ot,g=xg(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},cy(s),xs(s,Xt,f)):((i.lanes&l)!==0&&(hy(i,s),Oc(s,null,null,l),Nc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),xs(s,Xt,c)):(c=g.cache,xs(s,Xt,c),c!==f.cache&&uy(s,[Xt],l,!0))),gn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var oy=Le(null),Xa=null,Vi=null;function xs(i,s,l){Qe(oy,s._currentValue),s._currentValue=l}function Mi(i){i._currentValue=oy.current,Je(oy)}function ly(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function uy(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),ly(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),ly(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function xc(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Wn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===ls.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Qc):i=[Qc])}f=f.return}i!==null&&uy(s,i,l,c),s.flags|=262144}function Af(i){for(i=i.firstContext;i!==null;){if(!Wn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Za(i){Xa=i,Vi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function bn(i){return mw(Xa,i)}function Sf(i,s){return Xa===null&&Za(i),mw(i,s)}function mw(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Vi===null){if(i===null)throw Error(r(308));Vi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Vi=Vi.next=s;return l}var Ps=!1;function cy(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hy(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ns(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Os(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=af(i),YT(i,null,l),s}return sf(i,c,s,l),af(i)}function Pc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,ms(i,l)}}function dy(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var fy=!1;function Nc(){if(fy){var i=_l;if(i!==null)throw i}}function Oc(i,s,l,c){fy=!1;var f=i.updateQueue;Ps=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,L=C.next;C.next=null,T===null?g=L:T.next=L,T=C;var J=i.alternate;J!==null&&(J=J.updateQueue,b=J.lastBaseUpdate,b!==T&&(b===null?J.firstBaseUpdate=L:b.next=L,J.lastBaseUpdate=C))}if(g!==null){var ne=f.baseState;T=0,J=L=C=null,b=g;do{var G=b.lane&-536870913,Z=G!==b.lane;if(Z?(Ge&G)===G:(c&G)===G){G!==0&&G===yl&&(fy=!0),J!==null&&(J=J.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ee=i,Pe=b;G=s;var Dt=l;switch(Pe.tag){case 1:if(Ee=Pe.payload,typeof Ee=="function"){ne=Ee.call(Dt,ne,G);break e}ne=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Pe.payload,G=typeof Ee=="function"?Ee.call(Dt,ne,G):Ee,G==null)break e;ne=x({},ne,G);break e;case 2:Ps=!0}}G=b.callback,G!==null&&(i.flags|=64,Z&&(i.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[G]:Z.push(G))}else Z={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},J===null?(L=J=Z,C=ne):J=J.next=Z,T|=G;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;Z=b,b=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);J===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=L,f.lastBaseUpdate=J,g===null&&(f.shared.lanes=0),Us|=T,i.lanes=T,i.memoizedState=ne}}function gw(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function yw(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)gw(l[i],s)}function kc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){at(s,s.return,b)}}function ks(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(L){at(f,C,L)}}}c=c.next}while(c!==g)}}catch(L){at(s,s.return,L)}}function _w(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{yw(s,l)}catch(c){at(i,i.return,c)}}}function vw(i,s,l){l.props=Ya(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){at(i,s,c)}}function Ja(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){at(i,s,g)}}function Yn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){at(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){at(i,s,f)}else l.current=null}function Ew(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){at(i,i.return,f)}}function Tw(i,s,l){try{var c=i.stateNode;lP(c,i.type,l,s),c[Kt]=s}catch(f){at(i,i.return,f)}}function ww(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function py(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ww(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function my(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Bf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(my(i,s,l),i=i.sibling;i!==null;)my(i,s,l),i=i.sibling}function Rf(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(Rf(i,s,l),i=i.sibling;i!==null;)Rf(i,s,l),i=i.sibling}var Li=!1,Rt=!1,gy=!1,bw=typeof WeakSet=="function"?WeakSet:Set,ln=null,Iw=!1;function Ux(i,s){if(i=i.containerInfo,Hy=Kf,i=FT(i),_g(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,L=0,J=0,ne=i,G=null;t:for(;;){for(var Z;ne!==l||f!==0&&ne.nodeType!==3||(b=T+f),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(Z=ne.firstChild)!==null;)G=ne,ne=Z;for(;;){if(ne===i)break t;if(G===l&&++L===f&&(b=T),G===g&&++J===c&&(C=T),(Z=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=Z}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for($y={focusedElem:i,selectionRange:l},Kf=!1,ln=s;ln!==null;)if(s=ln,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ln=i;else for(;ln!==null;){switch(s=ln,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var Ee=Ya(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(Ee,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(Pe){at(l,l.return,Pe)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)Wy(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Wy(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,ln=i;break}ln=s.return}return Ee=Iw,Iw=!1,Ee}function Aw(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:zi(i,l),c&4&&kc(5,l);break;case 1:if(zi(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){at(l,l.return,b)}else{var f=Ya(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){at(l,l.return,b)}}c&64&&_w(l),c&512&&Ja(l,l.return);break;case 3:if(zi(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{yw(c,i)}catch(b){at(l,l.return,b)}}break;case 26:zi(i,l),c&512&&Ja(l,l.return);break;case 27:case 5:zi(i,l),s===null&&c&4&&Ew(l),c&512&&Ja(l,l.return);break;case 12:zi(i,l);break;case 13:zi(i,l),c&4&&Cw(i,l);break;case 22:if(f=l.memoizedState!==null||Li,!f){s=s!==null&&s.memoizedState!==null||Rt;var g=Li,T=Rt;Li=f,(Rt=s)&&!T?Vs(i,l,(l.subtreeFlags&8772)!==0):zi(i,l),Li=g,Rt=T}c&512&&(l.memoizedProps.mode==="manual"?Ja(l,l.return):Yn(l,l.return));break;default:zi(i,l)}}function Sw(i){var s=i.alternate;s!==null&&(i.alternate=null,Sw(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Da(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var jt=null,Xn=!1;function Ui(i,s,l){for(l=l.child;l!==null;)Rw(i,s,l),l=l.sibling}function Rw(i,s,l){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(cs,l)}catch{}switch(l.tag){case 26:Rt||Yn(l,s),Ui(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Rt||Yn(l,s);var c=jt,f=Xn;for(jt=l.stateNode,Ui(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Da(l),jt=c,Xn=f;break;case 5:Rt||Yn(l,s);case 6:f=jt;var g=Xn;if(jt=null,Ui(i,s,l),jt=f,Xn=g,jt!==null)if(Xn)try{i=jt,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){at(l,s,T)}else try{jt.removeChild(l.stateNode)}catch(T){at(l,s,T)}break;case 18:jt!==null&&(Xn?(s=jt,l=l.stateNode,s.nodeType===8?Qy(s.parentNode,l):s.nodeType===1&&Qy(s,l),Zc(s)):Qy(jt,l.stateNode));break;case 4:c=jt,f=Xn,jt=l.stateNode.containerInfo,Xn=!0,Ui(i,s,l),jt=c,Xn=f;break;case 0:case 11:case 14:case 15:Rt||ks(2,l,s),Rt||ks(4,l,s),Ui(i,s,l);break;case 1:Rt||(Yn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&vw(l,s,c)),Ui(i,s,l);break;case 21:Ui(i,s,l);break;case 22:Rt||Yn(l,s),Rt=(c=Rt)||l.memoizedState!==null,Ui(i,s,l),Rt=c;break;default:Ui(i,s,l)}}function Cw(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Zc(i)}catch(l){at(s,s.return,l)}}function zx(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new bw),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new bw),s;default:throw Error(r(435,i.tag))}}function yy(i,s){var l=zx(i);s.forEach(function(c){var f=Zx.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function yr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:jt=b.stateNode,Xn=!1;break e;case 3:jt=b.stateNode.containerInfo,Xn=!0;break e;case 4:jt=b.stateNode.containerInfo,Xn=!0;break e}b=b.return}if(jt===null)throw Error(r(160));Rw(g,T,f),jt=null,Xn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)Dw(s,i),s=s.sibling}var xr=null;function Dw(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:yr(s,i),_r(i),c&4&&(ks(3,i,i.return),kc(3,i),ks(5,i,i.return));break;case 1:yr(s,i),_r(i),c&512&&(Rt||l===null||Yn(l,l.return)),c&64&&Li&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=xr;if(yr(s,i),_r(i),c&512&&(Rt||l===null||Yn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ys]||g[rn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),yn(g,c,l),g[rn]=i,_t(g),c=g;break e;case"link":var T=Eb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),yn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=Eb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),yn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[rn]=i,_t(g),c=g}i.stateNode=c}else Tb(f,i.type,i.stateNode);else i.stateNode=vb(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?Tb(f,i.type,i.stateNode):vb(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&Tw(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var L=C.nextSibling,J=C.nodeName;C[ys]||J==="HEAD"||J==="BODY"||J==="SCRIPT"||J==="STYLE"||J==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=L}for(var ne=i.type,G=f.attributes;G.length;)f.removeAttributeNode(G[0]);yn(f,ne,g),f[rn]=i,f[Kt]=g}catch(Ee){at(i,i.return,Ee)}}case 5:if(yr(s,i),_r(i),c&512&&(Rt||l===null||Yn(l,l.return)),i.flags&32){f=i.stateNode;try{lr(f,"")}catch(Ee){at(i,i.return,Ee)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,Tw(i,f,l!==null?l.memoizedProps:f)),c&1024&&(gy=!0);break;case 6:if(yr(s,i),_r(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(Ee){at(i,i.return,Ee)}}break;case 3:if(Hf=null,f=xr,xr=jf(s.containerInfo),yr(s,i),xr=f,_r(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Zc(s.containerInfo)}catch(Ee){at(i,i.return,Ee)}gy&&(gy=!1,xw(i));break;case 4:c=xr,xr=jf(i.stateNode.containerInfo),yr(s,i),_r(i),xr=c;break;case 12:yr(s,i),_r(i);break;case 13:yr(s,i),_r(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Sy=zn()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,yy(i,c)));break;case 22:if(c&512&&(Rt||l===null||Yn(l,l.return)),C=i.memoizedState!==null,L=l!==null&&l.memoizedState!==null,J=Li,ne=Rt,Li=J||C,Rt=ne||L,yr(s,i),Rt=ne,Li=J,_r(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Li||Rt,l===null||L||s||wl(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){L=l=s;try{if(f=L.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=L.stateNode,b=L.memoizedProps.style;var Z=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(Ee){at(L,L.return,Ee)}}}else if(s.tag===6){if(l===null){L=s;try{L.stateNode.nodeValue=C?"":L.memoizedProps}catch(Ee){at(L,L.return,Ee)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,yy(i,l))));break;case 19:yr(s,i),_r(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,yy(i,c)));break;case 21:break;default:yr(s,i),_r(i)}}function _r(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(ww(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=py(i);Rf(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(lr(T,""),c.flags&=-33);var b=py(i);Rf(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,L=py(i);my(i,L,C);break;default:throw Error(r(161))}}}catch(J){at(i,i.return,J)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function xw(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;xw(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function zi(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Aw(i,s.alternate,s),s=s.sibling}function wl(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:ks(4,s,s.return),wl(s);break;case 1:Yn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&vw(s,s.return,l),wl(s);break;case 26:case 27:case 5:Yn(s,s.return),wl(s);break;case 22:Yn(s,s.return),s.memoizedState===null&&wl(s);break;default:wl(s)}i=i.sibling}}function Vs(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Vs(f,g,l),kc(4,g);break;case 1:if(Vs(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(L){at(c,c.return,L)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)gw(C[f],b)}catch(L){at(c,c.return,L)}}l&&T&64&&_w(g),Ja(g,g.return);break;case 26:case 27:case 5:Vs(f,g,l),l&&c===null&&T&4&&Ew(g),Ja(g,g.return);break;case 12:Vs(f,g,l);break;case 13:Vs(f,g,l),l&&T&4&&Cw(f,g);break;case 22:g.memoizedState===null&&Vs(f,g,l),Ja(g,g.return);break;default:Vs(f,g,l)}s=s.sibling}}function _y(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&Ic(l))}function vy(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ic(i))}function Ms(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pw(i,s,l,c),s=s.sibling}function Pw(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Ms(i,s,l,c),f&2048&&kc(9,s);break;case 3:Ms(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ic(i)));break;case 12:if(f&2048){Ms(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){at(s,s.return,C)}}else Ms(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?Ms(i,s,l,c):Vc(i,s):g._visibility&4?Ms(i,s,l,c):(g._visibility|=4,bl(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&_y(s.alternate,s);break;case 24:Ms(i,s,l,c),f&2048&&vy(s.alternate,s);break;default:Ms(i,s,l,c)}}function bl(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,L=T.flags;switch(T.tag){case 0:case 11:case 15:bl(g,T,b,C,f),kc(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&4?bl(g,T,b,C,f):Vc(g,T):(J._visibility|=4,bl(g,T,b,C,f)),f&&L&2048&&_y(T.alternate,T);break;case 24:bl(g,T,b,C,f),f&&L&2048&&vy(T.alternate,T);break;default:bl(g,T,b,C,f)}s=s.sibling}}function Vc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:Vc(l,c),f&2048&&_y(c.alternate,c);break;case 24:Vc(l,c),f&2048&&vy(c.alternate,c);break;default:Vc(l,c)}s=s.sibling}}var Mc=8192;function Il(i){if(i.subtreeFlags&Mc)for(i=i.child;i!==null;)Nw(i),i=i.sibling}function Nw(i){switch(i.tag){case 26:Il(i),i.flags&Mc&&i.memoizedState!==null&&RP(xr,i.memoizedState,i.memoizedProps);break;case 5:Il(i);break;case 3:case 4:var s=xr;xr=jf(i.stateNode.containerInfo),Il(i),xr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=Mc,Mc=16777216,Il(i),Mc=s):Il(i));break;default:Il(i)}}function Ow(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Lc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];ln=c,Vw(c,i)}Ow(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kw(i),i=i.sibling}function kw(i){switch(i.tag){case 0:case 11:case 15:Lc(i),i.flags&2048&&ks(9,i,i.return);break;case 3:Lc(i);break;case 12:Lc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,Cf(i)):Lc(i);break;default:Lc(i)}}function Cf(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];ln=c,Vw(c,i)}Ow(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:ks(8,s,s.return),Cf(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,Cf(s));break;default:Cf(s)}i=i.sibling}}function Vw(i,s){for(;ln!==null;){var l=ln;switch(l.tag){case 0:case 11:case 15:ks(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ic(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,ln=c;else e:for(l=i;ln!==null;){c=ln;var f=c.sibling,g=c.return;if(Sw(c),c===l){ln=null;break e}if(f!==null){f.return=g,ln=f;break e}ln=g}}}function Bx(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(i,s,l,c){return new Bx(i,s,l,c)}function Ey(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Ls(i,s){var l=i.alternate;return l===null?(l=vr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function Mw(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function Df(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")Ey(i)&&(T=1);else if(typeof i=="string")T=AP(i,l,zt.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return eo(l.children,f,g,s);case m:T=8,f|=24;break;case _:return i=vr(12,l,s,f|2),i.elementType=_,i.lanes=g,i;case U:return i=vr(13,l,s,f),i.elementType=U,i.lanes=g,i;case M:return i=vr(19,l,s,f),i.elementType=M,i.lanes=g,i;case K:return Lw(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case P:T=11;break e;case H:T=14;break e;case X:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=vr(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function eo(i,s,l,c){return i=vr(7,i,c,s),i.lanes=l,i}function Lw(i,s,l,c){i=vr(22,i,c,s),i.elementType=K,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=As(g,2);T!==null&&(f._pendingVisibility|=2,On(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=As(g,2);T!==null&&(f._pendingVisibility&=-3,On(T,g,2))}}};return i.stateNode=f,i}function Ty(i,s,l){return i=vr(6,i,null,s),i.lanes=l,i}function wy(i,s,l){return s=vr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Bi(i){i.flags|=4}function Uw(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!wb(s)){if(s=gr.current,s!==null&&((Ge&4194176)===Ge?Wr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==Wr))throw Tc=Rg,t0;i.flags|=8192}}function xf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?fs():536870912,i.lanes|=s,Sl|=s)}function Uc(i,s){if(!Ye)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function vt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function Fx(i,s,l){var c=s.pendingProps;switch(Ag(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(s),null;case 1:return vt(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Mi(Xt),vi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(yc(s)?Bi(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Dr!==null&&(xy(Dr),Dr=null))),vt(s),null;case 26:return l=s.memoizedState,i===null?(Bi(s),l!==null?(vt(s),Uw(s,l)):(vt(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Bi(s),vt(s),Uw(s,l)):(vt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Bi(s),vt(s),s.flags&=-16777217),null;case 27:$o(s),l=sr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Bi(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return vt(s),null}i=zt.current,yc(s)?JT(s):(i=pb(f,c,l),s.stateNode=i,Bi(s))}return vt(s),null;case 5:if($o(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Bi(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return vt(s),null}if(i=zt.current,yc(s))JT(s);else{switch(f=Ff(sr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[rn]=s,i[Kt]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(yn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bi(s)}}return vt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Bi(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=sr.current,yc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[rn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||lb(i.nodeValue,l)),i||Ha(s)}else i=Ff(i).createTextNode(c),i[rn]=s,s.stateNode=i}return vt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=yc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[rn]=s}else _c(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vt(s),f=!1}else Dr!==null&&(xy(Dr),Dr=null),f=!0;if(!f)return s.flags&256?(Ni(s),s):(Ni(s),null)}if(Ni(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),xf(s,s.updateQueue),vt(s),null;case 4:return vi(),i===null&&Fy(s.stateNode.containerInfo),vt(s),null;case 10:return Mi(s.type),vt(s),null;case 19:if(Je(Yt),f=s.memoizedState,f===null)return vt(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)Uc(f,!1);else{if(Ct!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=ff(i),g!==null){for(s.flags|=128,Uc(f,!1),i=g.updateQueue,s.updateQueue=i,xf(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)Mw(l,i),l=l.sibling;return Qe(Yt,Yt.current&1|2),s.child}i=i.sibling}f.tail!==null&&zn()>Pf&&(s.flags|=128,c=!0,Uc(f,!1),s.lanes=4194304)}else{if(!c)if(i=ff(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,xf(s,i),Uc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ye)return vt(s),null}else 2*zn()-f.renderingStartTime>Pf&&l!==536870912&&(s.flags|=128,c=!0,Uc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=zn(),s.sibling=null,i=Yt.current,Qe(Yt,c?i&1|2:i&1),s):(vt(s),null);case 22:case 23:return Ni(s),Dg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(vt(s),s.subtreeFlags&6&&(s.flags|=8192)):vt(s),l=s.updateQueue,l!==null&&xf(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Je(Ga),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),Mi(Xt),vt(s),null;case 25:return null}throw Error(r(156,s.tag))}function jx(i,s){switch(Ag(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Mi(Xt),vi(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return $o(s),null;case 13:if(Ni(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));_c()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Je(Yt),null;case 4:return vi(),null;case 10:return Mi(s.type),null;case 22:case 23:return Ni(s),Dg(),i!==null&&Je(Ga),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return Mi(Xt),null;case 25:return null;default:return null}}function zw(i,s){switch(Ag(s),s.tag){case 3:Mi(Xt),vi();break;case 26:case 27:case 5:$o(s);break;case 4:vi();break;case 13:Ni(s);break;case 19:Je(Yt);break;case 10:Mi(s.type);break;case 22:case 23:Ni(s),Dg(),i!==null&&Je(Ga);break;case 24:Mi(Xt)}}var qx={getCacheForType:function(i){var s=bn(Xt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},Hx=typeof WeakMap=="function"?WeakMap:Map,Et=0,ot=null,ze=null,Ge=0,lt=0,Zn=null,Fi=!1,Al=!1,by=!1,ji=0,Ct=0,Us=0,to=0,Iy=0,Er=0,Sl=0,zc=null,Xr=null,Ay=!1,Sy=0,Pf=1/0,Nf=null,zs=null,Of=!1,no=null,Bc=0,Ry=0,Cy=null,Fc=0,Dy=null;function Jn(){if((Et&2)!==0&&Ge!==0)return Ge&-Ge;if(A.T!==null){var i=yl;return i!==0?i:Ly()}return Ud()}function Bw(){Er===0&&(Er=(Ge&536870912)===0||Ye?Ju():536870912);var i=gr.current;return i!==null&&(i.flags|=32),Er}function On(i,s,l){(i===ot&&lt===2||i.cancelPendingCommit!==null)&&(Rl(i,0),qi(i,Ge,Er,!1)),kt(i,l),((Et&2)===0||i!==ot)&&(i===ot&&((Et&2)===0&&(to|=l),Ct===4&&qi(i,Ge,Er,!1)),Zr(i))}function Fw(i,s,l){if((Et&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||ds(i,s),f=c?Kx(i,s):Oy(i,s,!0),g=c;do{if(f===0){Al&&!c&&qi(i,s,0,!1);break}else if(f===6)qi(i,s,0,!Fi);else{if(l=i.current.alternate,g&&!$x(l)){f=Oy(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=zc;var C=b.current.memoizedState.isDehydrated;if(C&&(Rl(b,T).flags|=256),T=Oy(b,T,!1),T!==2){if(by&&!C){b.errorRecoveryDisabledLanes|=g,to|=g,f=4;break e}g=Xr,Xr=f,g!==null&&xy(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){Rl(i,0),qi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){qi(c,s,Er,!Fi);break e}break;case 2:Xr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=Sy+300-zn(),10<g)){if(qi(c,s,Er,!Fi),ar(c,0)!==0)break e;c.timeoutHandle=hb(jw.bind(null,c,l,Xr,Nf,Ay,s,Er,to,Sl,Fi,2,-0,0),g);break e}jw(c,l,Xr,Nf,Ay,s,Er,to,Sl,Fi,0,-0,0)}}break}while(!0);Zr(i)}function xy(i){Xr===null?Xr=i:Xr.push.apply(Xr,i)}function jw(i,s,l,c,f,g,T,b,C,L,J,ne,G){var Z=s.subtreeFlags;if((Z&8192||(Z&16785408)===16785408)&&(Kc={stylesheets:null,count:0,unsuspend:SP},Nw(s),s=CP(),s!==null)){i.cancelPendingCommit=s(Ww.bind(null,i,l,c,f,T,b,C,1,ne,G)),qi(i,g,T,!L);return}Ww(i,l,c,f,T,b,C,J,ne,G)}function $x(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Wn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function qi(i,s,l,c){s&=~Iy,s&=~to,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Dn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ps(i,l,s)}function kf(){return(Et&6)===0?(jc(0),!1):!0}function Py(){if(ze!==null){if(lt===0)var i=ze.return;else i=ze,Vi=Xa=null,Lg(i),ml=null,wc=0,i=ze;for(;i!==null;)zw(i.alternate,i),i=i.return;ze=null}}function Rl(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,cP(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),Py(),ot=i,ze=l=Ls(i.current,null),Ge=s,lt=0,Zn=null,Fi=!1,Al=ds(i,s),by=!1,Sl=Er=Iy=to=Us=Ct=0,Xr=zc=null,Ay=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Dn(c),g=1<<f;s|=i[f],c&=~g}return ji=s,rf(),l}function qw(i,s){Me=null,A.H=Yr,s===Ec?(s=i0(),lt=3):s===t0?(s=i0(),lt=4):lt=s===nw?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Zn=s,ze===null&&(Ct=1,If(i,fr(s,i.current)))}function Hw(){var i=A.H;return A.H=Yr,i===null?Yr:i}function $w(){var i=A.A;return A.A=qx,i}function Ny(){Ct=4,Fi||(Ge&4194176)!==Ge&&gr.current!==null||(Al=!0),(Us&134217727)===0&&(to&134217727)===0||ot===null||qi(ot,Ge,Er,!1)}function Oy(i,s,l){var c=Et;Et|=2;var f=Hw(),g=$w();(ot!==i||Ge!==s)&&(Nf=null,Rl(i,s)),s=!1;var T=Ct;e:do try{if(lt!==0&&ze!==null){var b=ze,C=Zn;switch(lt){case 8:Py(),T=6;break e;case 3:case 2:case 6:gr.current===null&&(s=!0);var L=lt;if(lt=0,Zn=null,Cl(i,b,C,L),l&&Al){T=0;break e}break;default:L=lt,lt=0,Zn=null,Cl(i,b,C,L)}}Gx(),T=Ct;break}catch(J){qw(i,J)}while(!0);return s&&i.shellSuspendCounter++,Vi=Xa=null,Et=c,A.H=f,A.A=g,ze===null&&(ot=null,Ge=0,rf()),T}function Gx(){for(;ze!==null;)Gw(ze)}function Kx(i,s){var l=Et;Et|=2;var c=Hw(),f=$w();ot!==i||Ge!==s?(Nf=null,Pf=zn()+500,Rl(i,s)):Al=ds(i,s);e:do try{if(lt!==0&&ze!==null){s=ze;var g=Zn;t:switch(lt){case 1:lt=0,Zn=null,Cl(i,s,g,1);break;case 2:if(n0(g)){lt=0,Zn=null,Kw(s);break}s=function(){lt===2&&ot===i&&(lt=7),Zr(i)},g.then(s,s);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:n0(g)?(lt=0,Zn=null,Kw(s)):(lt=0,Zn=null,Cl(i,s,g,7));break;case 5:var T=null;switch(ze.tag){case 26:T=ze.memoizedState;case 5:case 27:var b=ze;if(!T||wb(T)){lt=0,Zn=null;var C=b.sibling;if(C!==null)ze=C;else{var L=b.return;L!==null?(ze=L,Vf(L)):ze=null}break t}}lt=0,Zn=null,Cl(i,s,g,5);break;case 6:lt=0,Zn=null,Cl(i,s,g,6);break;case 8:Py(),Ct=6;break e;default:throw Error(r(462))}}Qx();break}catch(J){qw(i,J)}while(!0);return Vi=Xa=null,A.H=c,A.A=f,Et=l,ze!==null?0:(ot=null,Ge=0,rf(),Ct)}function Qx(){for(;ze!==null&&!og();)Gw(ze)}function Gw(i){var s=pw(i.alternate,i,ji);i.memoizedProps=i.pendingProps,s===null?Vf(i):ze=s}function Kw(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=lw(l,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=lw(l,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:Lg(s);default:zw(l,s),s=ze=Mw(s,ji),s=pw(l,s,ji)}i.memoizedProps=i.pendingProps,s===null?Vf(i):ze=s}function Cl(i,s,l,c){Vi=Xa=null,Lg(s),ml=null,wc=0;var f=s.return;try{if(Mx(i,f,s,l,Ge)){Ct=1,If(i,fr(l,i.current)),ze=null;return}}catch(g){if(f!==null)throw ze=f,g;Ct=1,If(i,fr(l,i.current)),ze=null;return}s.flags&32768?(Ye||c===1?i=!0:Al||(Ge&536870912)!==0?i=!1:(Fi=i=!0,(c===2||c===3||c===6)&&(c=gr.current,c!==null&&c.tag===13&&(c.flags|=16384))),Qw(s,i)):Vf(s)}function Vf(i){var s=i;do{if((s.flags&32768)!==0){Qw(s,Fi);return}i=s.return;var l=Fx(s.alternate,s,ji);if(l!==null){ze=l;return}if(s=s.sibling,s!==null){ze=s;return}ze=s=i}while(s!==null);Ct===0&&(Ct=5)}function Qw(i,s){do{var l=jx(i.alternate,i);if(l!==null){l.flags&=32767,ze=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){ze=i;return}ze=i=l}while(i!==null);Ct=6,ze=null}function Ww(i,s,l,c,f,g,T,b,C,L){var J=A.T,ne=fe.p;try{fe.p=2,A.T=null,Wx(i,s,l,c,ne,f,g,T,b,C,L)}finally{A.T=J,fe.p=ne}}function Wx(i,s,l,c,f,g,T,b){do Dl();while(no!==null);if((Et&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var L=C.lanes|C.childLanes;if(L|=wg,Md(i,c,L,g,T,b),i===ot&&(ze=ot=null,Ge=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Of||(Of=!0,Ry=L,Cy=l,Jx(Ei,function(){return Dl(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=fe.p,fe.p=2,T=Et,Et|=4,Ux(i,C),Dw(C,i),vx($y,i.containerInfo),Kf=!!Hy,$y=Hy=null,i.current=C,Aw(i,C.alternate,C),Wu(),Et=T,fe.p=g,A.T=l):i.current=C,Of?(Of=!1,no=i,Bc=c):Yw(i,L),L=i.pendingLanes,L===0&&(zs=null),Xu(C.stateNode),Zr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)L=s[C],f(L.value,{componentStack:L.stack});return(Bc&3)!==0&&Dl(),L=i.pendingLanes,(c&4194218)!==0&&(L&42)!==0?i===Dy?Fc++:(Fc=0,Dy=i):Fc=0,jc(0),null}function Yw(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,Ic(s)))}function Dl(){if(no!==null){var i=no,s=Ry;Ry=0;var l=Ld(Bc),c=A.T,f=fe.p;try{if(fe.p=32>l?32:l,A.T=null,no===null)var g=!1;else{l=Cy,Cy=null;var T=no,b=Bc;if(no=null,Bc=0,(Et&6)!==0)throw Error(r(331));var C=Et;if(Et|=4,kw(T.current),Pw(T,T.current,b,l),Et=C,jc(0,!1),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(cs,T)}catch{}g=!0}return g}finally{fe.p=f,A.T=c,Yw(i,s)}}return!1}function Xw(i,s,l){s=fr(l,s),s=Xg(i.stateNode,s,2),i=Os(i,s,2),i!==null&&(kt(i,2),Zr(i))}function at(i,s,l){if(i.tag===3)Xw(i,i,l);else for(;s!==null;){if(s.tag===3){Xw(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zs===null||!zs.has(c))){i=fr(l,i),l=ew(2),c=Os(s,l,2),c!==null&&(tw(l,c,s,i),kt(c,2),Zr(c));break}}s=s.return}}function ky(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new Hx;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(by=!0,f.add(l),i=Yx.bind(null,i,s,l),s.then(i,i))}function Yx(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,ot===i&&(Ge&l)===l&&(Ct===4||Ct===3&&(Ge&62914560)===Ge&&300>zn()-Sy?(Et&2)===0&&Rl(i,0):Iy|=l,Sl===Ge&&(Sl=0)),Zr(i)}function Zw(i,s){s===0&&(s=fs()),i=As(i,s),i!==null&&(kt(i,s),Zr(i))}function Xx(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Zw(i,l)}function Zx(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),Zw(i,l)}function Jx(i,s){return Sa(i,s)}var Mf=null,xl=null,Vy=!1,Lf=!1,My=!1,ro=0;function Zr(i){i!==xl&&i.next===null&&(xl===null?Mf=xl=i:xl=xl.next=i),Lf=!0,Vy||(Vy=!0,tP(eP))}function jc(i,s){if(!My&&Lf){My=!0;do for(var l=!1,c=Mf;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Dn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,tb(c,g))}else g=Ge,g=ar(c,c===ot?g:0),(g&3)===0||ds(c,g)||(l=!0,tb(c,g));c=c.next}while(l);My=!1}}function eP(){Lf=Vy=!1;var i=0;ro!==0&&(uP()&&(i=ro),ro=0);for(var s=zn(),l=null,c=Mf;c!==null;){var f=c.next,g=Jw(c,s);g===0?(c.next=null,l===null?Mf=f:l.next=f,f===null&&(xl=l)):(l=c,(i!==0||(g&3)!==0)&&(Lf=!0)),c=f}jc(i)}function Jw(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Dn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=Qo(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=ot,l=Ge,l=ar(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&lt===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Ko(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||ds(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&Ko(c),Ld(l)){case 2:case 8:l=nn;break;case 32:l=Ei;break;case 268435456:l=Yu;break;default:l=Ei}return c=eb.bind(null,i),l=Sa(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&Ko(c),i.callbackPriority=2,i.callbackNode=null,2}function eb(i,s){var l=i.callbackNode;if(Dl()&&i.callbackNode!==l)return null;var c=Ge;return c=ar(i,i===ot?c:0),c===0?null:(Fw(i,c,s),Jw(i,zn()),i.callbackNode!=null&&i.callbackNode===l?eb.bind(null,i):null)}function tb(i,s){if(Dl())return null;Fw(i,s,!0)}function tP(i){hP(function(){(Et&6)!==0?Sa(Gt,i):i()})}function Ly(){return ro===0&&(ro=Ju()),ro}function nb(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Fr(""+i)}function rb(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function nP(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=nb((f[Kt]||null).action),T=c.submitter;T&&(s=(s=T[Kt]||null)?nb(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new tl("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ro!==0){var C=T?rb(f,T):new FormData(f);Gg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?rb(f,T):new FormData(f),Gg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var Uy=0;Uy<WT.length;Uy++){var zy=WT[Uy],rP=zy.toLowerCase(),iP=zy[0].toUpperCase()+zy.slice(1);Cr(rP,"on"+iP)}Cr(HT,"onAnimationEnd"),Cr($T,"onAnimationIteration"),Cr(GT,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Tx,"onTransitionRun"),Cr(wx,"onTransitionStart"),Cr(bx,"onTransitionCancel"),Cr(KT,"onTransitionEnd"),Bn("onMouseEnter",["mouseout","mouseover"]),Bn("onMouseLeave",["mouseout","mouseover"]),Bn("onPointerEnter",["pointerout","pointerover"]),Bn("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qc));function ib(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,L=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(J){bf(J)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,L=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(J){bf(J)}f.currentTarget=null,g=C}}}}function qe(i,s){var l=s[Ca];l===void 0&&(l=s[Ca]=new Set);var c=i+"__bubble";l.has(c)||(sb(s,i,2,!1),l.add(c))}function By(i,s,l){var c=0;s&&(c|=4),sb(l,i,c,s)}var Uf="_reactListening"+Math.random().toString(36).slice(2);function Fy(i){if(!i[Uf]){i[Uf]=!0,tc.forEach(function(l){l!=="selectionchange"&&(sP.has(l)||By(l,!1,i),By(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Uf]||(s[Uf]=!0,By("selectionchange",!1,s))}}function sb(i,s,l,c){switch(Cb(s)){case 2:var f=PP;break;case 8:f=NP;break;default:f=e_}l=f.bind(null,s,l,i),f=void 0,!cr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function jy(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Rr(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}jd(function(){var L=g,J=el(l),ne=[];e:{var G=QT.get(i);if(G!==void 0){var Z=tl,Ee=i;switch(i){case"keypress":if(qr(l)===0)break e;case"keydown":case"keyup":Z=ol;break;case"focusin":Ee="focus",Z=il;break;case"focusout":Ee="blur",Z=il;break;case"beforeblur":case"afterblur":Z=il;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Yd;break;case HT:case $T:case GT:Z=sl;break;case KT:Z=Zd;break;case"scroll":case"scrollend":Z=qd;break;case"wheel":Z=ll;break;case"copy":case"cut":case"paste":Z=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=fc;break;case"toggle":case"beforetoggle":Z=ef}var Pe=(s&4)!==0,Dt=!Pe&&(i==="scroll"||i==="scrollend"),z=Pe?G!==null?G+"Capture":null:G;Pe=[];for(var V=L,$;V!==null;){var ee=V;if($=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||$===null||z===null||(ee=Oa(V,z),ee!=null&&Pe.push(Hc(V,ee,$))),Dt)break;V=V.return}0<Pe.length&&(G=new Z(G,Ee,null,l,J),ne.push({event:G,listeners:Pe}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",Z=i==="mouseout"||i==="pointerout",G&&l!==ur&&(Ee=l.relatedTarget||l.fromElement)&&(Rr(Ee)||Ee[Ti]))break e;if((Z||G)&&(G=J.window===J?J:(G=J.ownerDocument)?G.defaultView||G.parentWindow:window,Z?(Ee=l.relatedTarget||l.toElement,Z=L,Ee=Ee?Rr(Ee):null,Ee!==null&&(Dt=we(Ee),Pe=Ee.tag,Ee!==Dt||Pe!==5&&Pe!==27&&Pe!==6)&&(Ee=null)):(Z=null,Ee=L),Z!==Ee)){if(Pe=hr,ee="onMouseLeave",z="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(Pe=fc,ee="onPointerLeave",z="onPointerEnter",V="pointer"),Dt=Z==null?G:_s(Z),$=Ee==null?G:_s(Ee),G=new Pe(ee,V+"leave",Z,l,J),G.target=Dt,G.relatedTarget=$,ee=null,Rr(J)===L&&(Pe=new Pe(z,V+"enter",Ee,l,J),Pe.target=$,Pe.relatedTarget=Dt,ee=Pe),Dt=ee,Z&&Ee)t:{for(Pe=Z,z=Ee,V=0,$=Pe;$;$=Pl($))V++;for($=0,ee=z;ee;ee=Pl(ee))$++;for(;0<V-$;)Pe=Pl(Pe),V--;for(;0<$-V;)z=Pl(z),$--;for(;V--;){if(Pe===z||z!==null&&Pe===z.alternate)break t;Pe=Pl(Pe),z=Pl(z)}Pe=null}else Pe=null;Z!==null&&ab(ne,G,Z,Pe,!1),Ee!==null&&Dt!==null&&ab(ne,Dt,Ee,Pe,!0)}}e:{if(G=L?_s(L):window,Z=G.nodeName&&G.nodeName.toLowerCase(),Z==="select"||Z==="input"&&G.type==="file")var ye=OT;else if(Wt(G))if(kT)ye=yx;else{ye=mx;var Ue=px}else Z=G.nodeName,!Z||Z.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?L&&ac(L.elementType)&&(ye=OT):ye=gx;if(ye&&(ye=ye(i,L))){Di(ne,ye,l,J);break e}Ue&&Ue(i,G,L),i==="focusout"&&L&&G.type==="number"&&L.memoizedProps.value!=null&&Jo(G,"number",G.value)}switch(Ue=L?_s(L):window,i){case"focusin":(Wt(Ue)||Ue.contentEditable==="true")&&(ul=Ue,vg=L,gc=null);break;case"focusout":gc=vg=ul=null;break;case"mousedown":Eg=!0;break;case"contextmenu":case"mouseup":case"dragend":Eg=!1,jT(ne,l,J);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":jT(ne,l,J)}var be;if(Gr)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else He?W(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(E&&l.locale!=="ko"&&(He||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&He&&(be=lc()):(jr=J,Is="value"in jr?jr.value:jr.textContent,He=!0)),Ue=zf(L,Re),0<Ue.length&&(Re=new hc(Re,i,null,l,J),ne.push({event:Re,listeners:Ue}),be?Re.data=be:(be=ue(l),be!==null&&(Re.data=be)))),(be=y?Qt(i,l):$e(i,l))&&(Re=zf(L,"onBeforeInput"),0<Re.length&&(Ue=new hc("onBeforeInput","beforeinput",null,l,J),ne.push({event:Ue,listeners:Re}),Ue.data=be)),nP(ne,i,L,l,J)}ib(ne,s)})}function Hc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function zf(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Oa(i,l),f!=null&&c.unshift(Hc(i,f,g)),f=Oa(i,s),f!=null&&c.push(Hc(i,f,g))),i=i.return}return c}function Pl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function ab(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,L=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||L===null||(C=L,f?(L=Oa(l,g),L!=null&&T.unshift(Hc(l,L,C))):f||(L=Oa(l,g),L!=null&&T.push(Hc(l,L,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var aP=/\r\n?/g,oP=/\u0000|\uFFFD/g;function ob(i){return(typeof i=="string"?i:""+i).replace(aP,`
`).replace(oP,"")}function lb(i,s){return s=ob(s),ob(i)===s}function Bf(){}function st(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||lr(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&lr(i,""+c);break;case"className":Ts(i,"class",c);break;case"tabIndex":Ts(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ts(i,l,c);break;case"style":Fd(i,c,g);break;case"data":if(s!=="object"){Ts(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Fr(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&st(i,s,"name",f.name,f,null),st(i,s,"formEncType",f.formEncType,f,null),st(i,s,"formMethod",f.formMethod,f,null),st(i,s,"formTarget",f.formTarget,f,null)):(st(i,s,"encType",f.encType,f,null),st(i,s,"method",f.method,f,null),st(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Fr(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Bf);break;case"onScroll":c!=null&&qe("scroll",i);break;case"onScrollEnd":c!=null&&qe("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Fr(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":qe("beforetoggle",i),qe("toggle",i),Es(i,"popover",c);break;case"xlinkActuate":or(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":or(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":or(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":or(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":or(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":or(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":or(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":or(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":or(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Es(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=dg.get(l)||l,Es(i,l,c))}}function qy(i,s,l,c,f,g){switch(l){case"style":Fd(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?lr(i,c):(typeof c=="number"||typeof c=="bigint")&&lr(i,""+c);break;case"onScroll":c!=null&&qe("scroll",i);break;case"onScrollEnd":c!=null&&qe("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Bf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[Kt]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):Es(i,l,c)}}}function yn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",i),qe("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:st(i,s,g,T,l,null)}}f&&st(i,s,"srcSet",l.srcSet,l,null),c&&st(i,s,"src",l.src,l,null);return;case"input":qe("invalid",i);var b=g=T=f=null,C=null,L=null;for(c in l)if(l.hasOwnProperty(c)){var J=l[c];if(J!=null)switch(c){case"name":f=J;break;case"type":T=J;break;case"checked":C=J;break;case"defaultChecked":L=J;break;case"value":g=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:st(i,s,c,J,l,null)}}Pa(i,g,b,C,L,T,f,!1),xa(i);return;case"select":qe("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:st(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?We(i,!!c,s,!1):l!=null&&We(i,!!c,l,!0);return;case"textarea":qe("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:st(i,s,T,b,l,null)}bs(i,c,f,g),xa(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:st(i,s,C,c,l,null)}return;case"dialog":qe("cancel",i),qe("close",i);break;case"iframe":case"object":qe("load",i);break;case"video":case"audio":for(c=0;c<qc.length;c++)qe(qc[c],i);break;case"image":qe("error",i),qe("load",i);break;case"details":qe("toggle",i);break;case"embed":case"source":case"link":qe("error",i),qe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in l)if(l.hasOwnProperty(L)&&(c=l[L],c!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:st(i,s,L,c,l,null)}return;default:if(ac(s)){for(J in l)l.hasOwnProperty(J)&&(c=l[J],c!==void 0&&qy(i,s,J,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&st(i,s,b,c,l,null))}function lP(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,L=null,J=null;for(Z in l){var ne=l[Z];if(l.hasOwnProperty(Z)&&ne!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(Z)||st(i,s,Z,null,c,ne)}}for(var G in c){var Z=c[G];if(ne=l[G],c.hasOwnProperty(G)&&(Z!=null||ne!=null))switch(G){case"type":g=Z;break;case"name":f=Z;break;case"checked":L=Z;break;case"defaultChecked":J=Z;break;case"value":T=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:Z!==ne&&st(i,s,G,Z,c,ne)}}ws(i,T,b,C,L,J,g,f);return;case"select":Z=T=b=G=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":Z=C;default:c.hasOwnProperty(g)||st(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":G=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&st(i,s,f,g,c,C)}s=b,l=T,c=Z,G!=null?We(i,!!l,G,!1):!!c!=!!l&&(s!=null?We(i,!!l,s,!0):We(i,!!l,l?[]:"",!1));return;case"textarea":Z=G=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:st(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":G=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&st(i,s,T,f,c,g)}Na(i,G,Z);return;case"option":for(var Ee in l)if(G=l[Ee],l.hasOwnProperty(Ee)&&G!=null&&!c.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:st(i,s,Ee,null,c,G)}for(C in c)if(G=c[C],Z=l[C],c.hasOwnProperty(C)&&G!==Z&&(G!=null||Z!=null))switch(C){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:st(i,s,C,G,c,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Pe in l)G=l[Pe],l.hasOwnProperty(Pe)&&G!=null&&!c.hasOwnProperty(Pe)&&st(i,s,Pe,null,c,G);for(L in c)if(G=c[L],Z=l[L],c.hasOwnProperty(L)&&G!==Z&&(G!=null||Z!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,s));break;default:st(i,s,L,G,c,Z)}return;default:if(ac(s)){for(var Dt in l)G=l[Dt],l.hasOwnProperty(Dt)&&G!==void 0&&!c.hasOwnProperty(Dt)&&qy(i,s,Dt,void 0,c,G);for(J in c)G=c[J],Z=l[J],!c.hasOwnProperty(J)||G===Z||G===void 0&&Z===void 0||qy(i,s,J,G,c,Z);return}}for(var z in l)G=l[z],l.hasOwnProperty(z)&&G!=null&&!c.hasOwnProperty(z)&&st(i,s,z,null,c,G);for(ne in c)G=c[ne],Z=l[ne],!c.hasOwnProperty(ne)||G===Z||G==null&&Z==null||st(i,s,ne,G,c,Z)}var Hy=null,$y=null;function Ff(i){return i.nodeType===9?i:i.ownerDocument}function ub(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cb(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function Gy(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ky=null;function uP(){var i=window.event;return i&&i.type==="popstate"?i===Ky?!1:(Ky=i,!0):(Ky=null,!1)}var hb=typeof setTimeout=="function"?setTimeout:void 0,cP=typeof clearTimeout=="function"?clearTimeout:void 0,db=typeof Promise=="function"?Promise:void 0,hP=typeof queueMicrotask=="function"?queueMicrotask:typeof db<"u"?function(i){return db.resolve(null).then(i).catch(dP)}:hb;function dP(i){setTimeout(function(){throw i})}function Qy(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),Zc(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);Zc(s)}function Wy(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wy(l),Da(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function fP(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ys])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Pr(i.nextSibling),i===null)break}return null}function pP(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=Pr(i.nextSibling),i===null))return null;return i}function Pr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function fb(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function pb(i,s,l){switch(s=Ff(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var Tr=new Map,mb=new Set;function jf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var Hi=fe.d;fe.d={f:mP,r:gP,D:yP,C:_P,L:vP,m:EP,X:wP,S:TP,M:bP};function mP(){var i=Hi.f(),s=kf();return i||s}function gP(i){var s=wi(i);s!==null&&s.tag===5&&s.type==="form"?j0(s):Hi.r(i)}var Nl=typeof document>"u"?null:document;function gb(i,s,l){var c=Nl;if(c&&typeof s=="string"&&s){var f=St(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),mb.has(f)||(mb.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),yn(s,"link",i),_t(s),c.head.appendChild(s)))}}function yP(i){Hi.D(i),gb("dns-prefetch",i,null)}function _P(i,s){Hi.C(i,s),gb("preconnect",i,s)}function vP(i,s,l){Hi.L(i,s,l);var c=Nl;if(c&&i&&s){var f='link[rel="preload"][as="'+St(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+St(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+St(l.imageSizes)+'"]')):f+='[href="'+St(i)+'"]';var g=f;switch(s){case"style":g=Ol(i);break;case"script":g=kl(i)}Tr.has(g)||(i=x({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),Tr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector($c(g))||s==="script"&&c.querySelector(Gc(g))||(s=c.createElement("link"),yn(s,"link",i),_t(s),c.head.appendChild(s)))}}function EP(i,s){Hi.m(i,s);var l=Nl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+St(c)+'"][href="'+St(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=kl(i)}if(!Tr.has(g)&&(i=x({rel:"modulepreload",href:i},s),Tr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Gc(g)))return}c=l.createElement("link"),yn(c,"link",i),_t(c),l.head.appendChild(c)}}}function TP(i,s,l){Hi.S(i,s,l);var c=Nl;if(c&&i){var f=vs(c).hoistableStyles,g=Ol(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector($c(g)))b.loading=5;else{i=x({rel:"stylesheet",href:i,"data-precedence":s},l),(l=Tr.get(g))&&Yy(i,l);var C=T=c.createElement("link");_t(C),yn(C,"link",i),C._p=new Promise(function(L,J){C.onload=L,C.onerror=J}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,qf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function wP(i,s){Hi.X(i,s);var l=Nl;if(l&&i){var c=vs(l).hoistableScripts,f=kl(i),g=c.get(f);g||(g=l.querySelector(Gc(f)),g||(i=x({src:i,async:!0},s),(s=Tr.get(f))&&Xy(i,s),g=l.createElement("script"),_t(g),yn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function bP(i,s){Hi.M(i,s);var l=Nl;if(l&&i){var c=vs(l).hoistableScripts,f=kl(i),g=c.get(f);g||(g=l.querySelector(Gc(f)),g||(i=x({src:i,async:!0,type:"module"},s),(s=Tr.get(f))&&Xy(i,s),g=l.createElement("script"),_t(g),yn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function yb(i,s,l,c){var f=(f=sr.current)?jf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Ol(l.href),l=vs(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=Ol(l.href);var g=vs(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector($c(i)))&&!g._p&&(T.instance=g,T.state.loading=5),Tr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Tr.set(i,l),g||IP(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=kl(l),l=vs(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Ol(i){return'href="'+St(i)+'"'}function $c(i){return'link[rel="stylesheet"]['+i+"]"}function _b(i){return x({},i,{"data-precedence":i.precedence,precedence:null})}function IP(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),yn(s,"link",l),_t(s),i.head.appendChild(s))}function kl(i){return'[src="'+St(i)+'"]'}function Gc(i){return"script[async]"+i}function vb(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+St(l.href)+'"]');if(c)return s.instance=c,_t(c),c;var f=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),_t(c),yn(c,"style",f),qf(c,l.precedence,i),s.instance=c;case"stylesheet":f=Ol(l.href);var g=i.querySelector($c(f));if(g)return s.state.loading|=4,s.instance=g,_t(g),g;c=_b(l),(f=Tr.get(f))&&Yy(c,f),g=(i.ownerDocument||i).createElement("link"),_t(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),yn(g,"link",c),s.state.loading|=4,qf(g,l.precedence,i),s.instance=g;case"script":return g=kl(l.src),(f=i.querySelector(Gc(g)))?(s.instance=f,_t(f),f):(c=l,(f=Tr.get(g))&&(c=x({},l),Xy(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),_t(f),yn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,qf(c,l.precedence,i));return s.instance}function qf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function Yy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Xy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Hf=null;function Eb(i,s,l){if(Hf===null){var c=new Map,f=Hf=new Map;f.set(l,c)}else f=Hf,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ys]||g[rn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function Tb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function AP(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function wb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Kc=null;function SP(){}function RP(i,s,l){if(Kc===null)throw Error(r(475));var c=Kc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ol(l.href),g=i.querySelector($c(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=$f.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,_t(g);return}g=i.ownerDocument||i,l=_b(l),(f=Tr.get(f))&&Yy(l,f),g=g.createElement("link"),_t(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),yn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=$f.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function CP(){if(Kc===null)throw Error(r(475));var i=Kc;return i.stylesheets&&i.count===0&&Zy(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&Zy(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function $f(){if(this.count--,this.count===0){if(this.stylesheets)Zy(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Gf=null;function Zy(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Gf=new Map,s.forEach(DP,i),Gf=null,$f.call(i))}function DP(i,s){if(!(s.state.loading&4)){var l=Gf.get(i);if(l)var c=l.get(null);else{l=new Map,Gf.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=$f.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var Qc={$$typeof:S,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function xP(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.hiddenUpdates=Wo(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function bb(i,s,l,c,f,g,T,b,C,L,J,ne){return i=new xP(i,s,l,T,b,C,L,ne),s=1,g===!0&&(s|=24),g=vr(3,null,null,s),i.current=g,g.stateNode=i,s=xg(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},cy(g),i}function Ib(i){return i?(i=dl,i):dl}function Ab(i,s,l,c,f,g){f=Ib(f),c.context===null?c.context=f:c.pendingContext=f,c=Ns(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Os(i,c,s),l!==null&&(On(l,i,s),Pc(l,i,s))}function Sb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Jy(i,s){Sb(i,s),(i=i.alternate)&&Sb(i,s)}function Rb(i){if(i.tag===13){var s=As(i,67108864);s!==null&&On(s,i,67108864),Jy(i,67108864)}}var Kf=!0;function PP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=2,e_(i,s,l,c)}finally{fe.p=g,A.T=f}}function NP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=8,e_(i,s,l,c)}finally{fe.p=g,A.T=f}}function e_(i,s,l,c){if(Kf){var f=t_(c);if(f===null)jy(i,s,c,Qf,l),Db(i,c);else if(kP(f,i,s,l,c))c.stopPropagation();else if(Db(i,c),s&4&&-1<OP.indexOf(i)){for(;f!==null;){var g=wi(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Sr(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Dn(T);b.entanglements[1]|=C,T&=~C}Zr(g),(Et&6)===0&&(Pf=zn()+500,jc(0))}}break;case 13:b=As(g,2),b!==null&&On(b,g,2),kf(),Jy(g,2)}if(g=t_(c),g===null&&jy(i,s,c,Qf,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else jy(i,s,c,null,l)}}function t_(i){return i=el(i),n_(i)}var Qf=null;function n_(i){if(Qf=null,i=Rr(i),i!==null){var s=we(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=ke(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Qf=i,null}function Cb(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nd()){case Gt:return 2;case nn:return 8;case Ei:case Od:return 32;case Yu:return 268435456;default:return 32}default:return 32}}var r_=!1,Bs=null,Fs=null,js=null,Wc=new Map,Yc=new Map,qs=[],OP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Db(i,s){switch(i){case"focusin":case"focusout":Bs=null;break;case"dragenter":case"dragleave":Fs=null;break;case"mouseover":case"mouseout":js=null;break;case"pointerover":case"pointerout":Wc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yc.delete(s.pointerId)}}function Xc(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=wi(s),s!==null&&Rb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function kP(i,s,l,c,f){switch(s){case"focusin":return Bs=Xc(Bs,i,s,l,c,f),!0;case"dragenter":return Fs=Xc(Fs,i,s,l,c,f),!0;case"mouseover":return js=Xc(js,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return Wc.set(g,Xc(Wc.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Yc.set(g,Xc(Yc.get(g)||null,i,s,l,c,f)),!0}return!1}function xb(i){var s=Rr(i.target);if(s!==null){var l=we(s);if(l!==null){if(s=l.tag,s===13){if(s=ke(l),s!==null){i.blockedOn=s,gs(i.priority,function(){if(l.tag===13){var c=Jn(),f=As(l,c);f!==null&&On(f,l,c),Jy(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Wf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=t_(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);ur=c,l.target.dispatchEvent(c),ur=null}else return s=wi(l),s!==null&&Rb(s),i.blockedOn=l,!1;s.shift()}return!0}function Pb(i,s,l){Wf(i)&&l.delete(s)}function VP(){r_=!1,Bs!==null&&Wf(Bs)&&(Bs=null),Fs!==null&&Wf(Fs)&&(Fs=null),js!==null&&Wf(js)&&(js=null),Wc.forEach(Pb),Yc.forEach(Pb)}function Yf(i,s){i.blockedOn===s&&(i.blockedOn=null,r_||(r_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,VP)))}var Xf=null;function Nb(i){Xf!==i&&(Xf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xf===i&&(Xf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(n_(c||l)===null)continue;break}var g=wi(l);g!==null&&(i.splice(s,3),s-=3,Gg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function Zc(i){function s(C){return Yf(C,i)}Bs!==null&&Yf(Bs,i),Fs!==null&&Yf(Fs,i),js!==null&&Yf(js,i),Wc.forEach(s),Yc.forEach(s);for(var l=0;l<qs.length;l++){var c=qs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<qs.length&&(l=qs[0],l.blockedOn===null);)xb(l),l.blockedOn===null&&qs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[Kt]||null;if(typeof g=="function")T||Nb(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[Kt]||null)b=T.formAction;else if(n_(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Nb(l)}}}function i_(i){this._internalRoot=i}Zf.prototype.render=i_.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Jn();Ab(l,c,i,s,null,null)},Zf.prototype.unmount=i_.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Dl(),Ab(i.current,2,null,i,null,null),kf(),s[Ti]=null}};function Zf(i){this._internalRoot=i}Zf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ud();i={blockedOn:null,target:i,priority:s};for(var l=0;l<qs.length&&s!==0&&s<qs[l].priority;l++);qs.splice(l,0,i),l===0&&xb(i)}};var Ob=e.version;if(Ob!=="19.0.0")throw Error(r(527,Ob,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=ie(s),i=i!==null?ge(i):null,i=i===null?null:i.stateNode,i};var MP={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Rr,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jf.isDisabled&&Jf.supportsFiber)try{cs=Jf.inject(MP),wn=Jf}catch{}}return eh.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=Y0,g=X0,T=Z0,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=bb(i,1,!1,null,null,l,c,f,g,T,b,null),i[Ti]=s.current,Fy(i.nodeType===8?i.parentNode:i),new i_(s)},eh.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=Y0,T=X0,b=Z0,C=null,L=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(L=l.formState)),s=bb(i,1,!0,s,l??null,c,f,g,T,b,C,L),s.context=Ib(null),l=s.current,c=Jn(),f=Ns(c),f.callback=null,Os(l,f,c),s.current.lanes=c,kt(s,c),Zr(s),i[Ti]=s.current,Fy(i),new Zf(s)},eh.version="19.0.0",eh}var qb;function KP(){if(qb)return a_.exports;qb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),a_.exports=GP(),a_.exports}var QP=KP(),Y=kv();const kh=UP(Y);var th={},Hb;function WP(){if(Hb)return th;Hb=1,Object.defineProperty(th,"__esModule",{value:!0}),th.parse=u,th.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const P=new o,U=w.length;if(U<2)return P;const M=(S==null?void 0:S.decode)||_;let H=0;do{const X=w.indexOf("=",H);if(X===-1)break;const K=w.indexOf(";",H),oe=K===-1?U:K;if(X>oe){H=w.lastIndexOf(";",X-1)+1;continue}const se=d(w,H,X),le=p(w,X,se),D=w.slice(se,le);if(P[D]===void 0){let R=d(w,X+1,oe),A=p(w,oe,R);const x=M(w.slice(R,A));P[D]=x}H=oe+1}while(H<U);return P}function d(w,S,P){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<P);return P}function p(w,S,P){for(;S>P;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return P}function m(w,S,P){const U=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const M=U(S);if(!e.test(M))throw new TypeError(`argument val is invalid: ${S}`);let H=w+"="+M;if(!P)return H;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);H+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);H+="; Domain="+P.domain}if(P.path){if(!r.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);H+="; Path="+P.path}if(P.expires){if(!v(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);H+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(H+="; HttpOnly"),P.secure&&(H+="; Secure"),P.partitioned&&(H+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return H}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return th}WP();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $b="popstate";function YP(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return U_("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Vh(a)}return ZP(e,t,null,n)}function Tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function hi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XP(){return Math.random().toString(36).substring(2,10)}function Gb(n,e){return{usr:n.state,key:n.key,idx:e}}function U_(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Pu(e):e,state:t,key:e&&e.key||r||XP()}}function Vh({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Pu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function ZP(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",p=null,m=_();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function _(){return(u.state||{idx:null}).idx}function v(){d="POP";let M=_(),H=M==null?null:M-m;m=M,p&&p({action:d,location:U.location,delta:H})}function w(M,H){d="PUSH";let X=U_(U.location,M,H);m=_()+1;let K=Gb(X,m),oe=U.createHref(X);try{u.pushState(K,"",oe)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;a.location.assign(oe)}o&&p&&p({action:d,location:U.location,delta:1})}function S(M,H){d="REPLACE";let X=U_(U.location,M,H);m=_();let K=Gb(X,m),oe=U.createHref(X);u.replaceState(K,"",oe),o&&p&&p({action:d,location:U.location,delta:0})}function P(M){let H=a.location.origin!=="null"?a.location.origin:a.location.href,X=typeof M=="string"?M:Vh(M);return X=X.replace(/ $/,"%20"),Tt(H,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,H)}let U={get action(){return d},get location(){return n(a,u)},listen(M){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener($b,v),p=M,()=>{a.removeEventListener($b,v),p=null}},createHref(M){return e(a,M)},createURL:P,encodeLocation(M){let H=P(M);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:S,go(M){return u.go(M)}};return U}function _S(n,e,t="/"){return JP(n,e,t,!1)}function JP(n,e,t,r){let a=typeof e=="string"?Pu(e):e,o=Yi(a.pathname||"/",t);if(o==null)return null;let u=vS(n);eN(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=hN(o);d=uN(u[p],m,r)}return d}function vS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};p.relativePath.startsWith("/")&&(Tt(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=Qi([r,p.relativePath]),_=t.concat(p);o.children&&o.children.length>0&&(Tt(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),vS(o.children,e,_,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:oN(m,o.index),routesMeta:_})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let p of ES(o.path))a(o,u,p)}),e}function ES(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=ES(r.join("/")),d=[];return d.push(...u.map(p=>p===""?o:[o,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function eN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:lN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var tN=/^:[\w-]+$/,nN=3,rN=2,iN=1,sN=10,aN=-2,Kb=n=>n==="*";function oN(n,e){let t=n.split("/"),r=t.length;return t.some(Kb)&&(r+=aN),e&&(r+=rN),t.filter(a=>!Kb(a)).reduce((a,o)=>a+(tN.test(o)?nN:o===""?iN:sN),r)}function lN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function uN(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,_=o==="/"?e:e.slice(o.length)||"/",v=kp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=kp({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:Qi([o,v.pathname]),pathnameBase:mN(Qi([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=Qi([o,v.pathnameBase]))}return u}function kp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=cN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:_,isOptional:v},w)=>{if(_==="*"){let P=d[w]||"";u=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?m[_]=void 0:m[_]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function cN(n,e=!1,t=!0){hi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function hN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Yi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function dN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Pu(n):n;return{pathname:t?t.startsWith("/")?t:fN(t,e):e,search:gN(r),hash:yN(a)}}function fN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function h_(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function TS(n){let e=pN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function wS(n,e,t,r=!1){let a;typeof n=="string"?a=Pu(n):(a={...n},Tt(!a.pathname||!a.pathname.includes("?"),h_("?","pathname","search",a)),Tt(!a.pathname||!a.pathname.includes("#"),h_("#","pathname","hash",a)),Tt(!a.search||!a.search.includes("#"),h_("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let p=dN(a,d),m=u&&u!=="/"&&u.endsWith("/"),_=(o||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var Qi=n=>n.join("/").replace(/\/\/+/g,"/"),mN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),gN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,yN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function _N(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var bS=["POST","PUT","PATCH","DELETE"];new Set(bS);var vN=["GET",...bS];new Set(vN);var Nu=Y.createContext(null);Nu.displayName="DataRouter";var pm=Y.createContext(null);pm.displayName="DataRouterState";var IS=Y.createContext({isTransitioning:!1});IS.displayName="ViewTransition";var EN=Y.createContext(new Map);EN.displayName="Fetchers";var TN=Y.createContext(null);TN.displayName="Await";var yi=Y.createContext(null);yi.displayName="Navigation";var od=Y.createContext(null);od.displayName="Location";var _i=Y.createContext({outlet:null,matches:[],isDataRoute:!1});_i.displayName="Route";var Vv=Y.createContext(null);Vv.displayName="RouteError";function wN(n,{relative:e}={}){Tt(ld(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Y.useContext(yi),{hash:a,pathname:o,search:u}=ud(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:Qi([t,o])),r.createHref({pathname:d,search:u,hash:a})}function ld(){return Y.useContext(od)!=null}function Uo(){return Tt(ld(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(od).location}var AS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function SS(n){Y.useContext(yi).static||Y.useLayoutEffect(n)}function Ou(){let{isDataRoute:n}=Y.useContext(_i);return n?MN():bN()}function bN(){Tt(ld(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(Nu),{basename:e,navigator:t}=Y.useContext(yi),{matches:r}=Y.useContext(_i),{pathname:a}=Uo(),o=JSON.stringify(TS(r)),u=Y.useRef(!1);return SS(()=>{u.current=!0}),Y.useCallback((p,m={})=>{if(hi(u.current,AS),!u.current)return;if(typeof p=="number"){t.go(p);return}let _=wS(p,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Qi([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,o,a,n])}Y.createContext(null);function IN(){let{matches:n}=Y.useContext(_i),e=n[n.length-1];return e?e.params:{}}function ud(n,{relative:e}={}){let{matches:t}=Y.useContext(_i),{pathname:r}=Uo(),a=JSON.stringify(TS(t));return Y.useMemo(()=>wS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function AN(n,e){return RS(n,e)}function RS(n,e,t,r){var X;Tt(ld(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=Y.useContext(yi),{matches:u}=Y.useContext(_i),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",_=d?d.pathnameBase:"/",v=d&&d.route;{let K=v&&v.path||"";CS(m,!v||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let w=Uo(),S;if(e){let K=typeof e=="string"?Pu(e):e;Tt(_==="/"||((X=K.pathname)==null?void 0:X.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=w;let P=S.pathname||"/",U=P;if(_!=="/"){let K=_.replace(/^\//,"").split("/");U="/"+P.replace(/^\//,"").split("/").slice(K.length).join("/")}let M=!o&&t&&t.matches&&t.matches.length>0?t.matches:_S(n,{pathname:U});hi(v||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),hi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=xN(M&&M.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:Qi([_,a.encodeLocation?a.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?_:Qi([_,a.encodeLocation?a.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),u,t,r);return e&&H?Y.createElement(od.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function SN(){let n=VN(),e=_N(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:o},"ErrorBoundary")," or"," ",Y.createElement("code",{style:o},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:a},t):null,u)}var RN=Y.createElement(SN,null),CN=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Y.createElement(_i.Provider,{value:this.props.routeContext},Y.createElement(Vv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DN({routeContext:n,match:e,children:t}){let r=Y.useContext(Nu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(_i.Provider,{value:n},t)}function xN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let p=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Tt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:_,errors:v}=t,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,_)=>{let v,w=!1,S=null,P=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,S=m.route.errorElement||RN,u&&(d<0&&_===0?(CS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):d===_&&(w=!0,P=m.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,_+1)),M=()=>{let H;return v?H=S:w?H=P:m.route.Component?H=Y.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=p,Y.createElement(DN,{match:m,routeContext:{outlet:p,matches:U,isDataRoute:t!=null},children:H})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?Y.createElement(CN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):M()},null)}function Mv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PN(n){let e=Y.useContext(Nu);return Tt(e,Mv(n)),e}function NN(n){let e=Y.useContext(pm);return Tt(e,Mv(n)),e}function ON(n){let e=Y.useContext(_i);return Tt(e,Mv(n)),e}function Lv(n){let e=ON(n),t=e.matches[e.matches.length-1];return Tt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function kN(){return Lv("useRouteId")}function VN(){var r;let n=Y.useContext(Vv),e=NN("useRouteError"),t=Lv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function MN(){let{router:n}=PN("useNavigate"),e=Lv("useNavigate"),t=Y.useRef(!1);return SS(()=>{t.current=!0}),Y.useCallback(async(a,o={})=>{hi(t.current,AS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var Qb={};function CS(n,e,t){!e&&!Qb[n]&&(Qb[n]=!0,hi(!1,t))}Y.memo(LN);function LN({routes:n,future:e,state:t}){return RS(n,void 0,t,e)}function hp(n){Tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function UN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Tt(!ld(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=Y.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Pu(t));let{pathname:p="/",search:m="",hash:_="",state:v=null,key:w="default"}=t,S=Y.useMemo(()=>{let P=Yi(p,u);return P==null?null:{location:{pathname:P,search:m,hash:_,state:v,key:w},navigationType:r}},[u,p,m,_,v,w,r]);return hi(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:Y.createElement(yi.Provider,{value:d},Y.createElement(od.Provider,{children:e,value:S}))}function zN({children:n,location:e}){return AN(z_(n),e)}function z_(n,e=[]){let t=[];return Y.Children.forEach(n,(r,a)=>{if(!Y.isValidElement(r))return;let o=[...e,a];if(r.type===Y.Fragment){t.push.apply(t,z_(r.props.children,o));return}Tt(r.type===hp,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Tt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=z_(r.props.children,o)),t.push(u)}),t}var dp="get",fp="application/x-www-form-urlencoded";function mm(n){return n!=null&&typeof n.tagName=="string"}function BN(n){return mm(n)&&n.tagName.toLowerCase()==="button"}function FN(n){return mm(n)&&n.tagName.toLowerCase()==="form"}function jN(n){return mm(n)&&n.tagName.toLowerCase()==="input"}function qN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function HN(n,e){return n.button===0&&(!e||e==="_self")&&!qN(n)}var ep=null;function $N(){if(ep===null)try{new FormData(document.createElement("form"),0),ep=!1}catch{ep=!0}return ep}var GN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function d_(n){return n!=null&&!GN.has(n)?(hi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fp}"`),null):n}function KN(n,e){let t,r,a,o,u;if(FN(n)){let d=n.getAttribute("action");r=d?Yi(d,e):null,t=n.getAttribute("method")||dp,a=d_(n.getAttribute("enctype"))||fp,o=new FormData(n)}else if(BN(n)||jN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Yi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||dp,a=d_(n.getAttribute("formenctype"))||d_(d.getAttribute("enctype"))||fp,o=new FormData(d,n),!$N()){let{name:m,type:_,value:v}=n;if(_==="image"){let w=m?`${m}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else m&&o.append(m,v)}}else{if(mm(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=dp,r=null,a=fp,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Uv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function QN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function YN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await QN(o,t);return u.links?u.links():[]}return[]}));return eO(r.flat(1).filter(WN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Wb(n,e,t,r,a,o){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var _;return t[m].pathname!==p.pathname||((_=t[m].route.path)==null?void 0:_.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return o==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):o==="data"?e.filter((p,m)=>{var v;let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function XN(n,e,{includeHydrateFallback:t}={}){return ZN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function ZN(n){return[...new Set(n)]}function JN(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function eO(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(JN(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function tO(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Yi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function DS(){let n=Y.useContext(Nu);return Uv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function nO(){let n=Y.useContext(pm);return Uv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var zv=Y.createContext(void 0);zv.displayName="FrameworkContext";function xS(){let n=Y.useContext(zv);return Uv(n,"You must render this element inside a <HydratedRouter> element"),n}function rO(n,e){let t=Y.useContext(zv),[r,a]=Y.useState(!1),[o,u]=Y.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:v}=e,w=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=H=>{H.forEach(X=>{u(X.isIntersecting)})},M=new IntersectionObserver(U,{threshold:.5});return w.current&&M.observe(w.current),()=>{M.disconnect()}}},[n]),Y.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},P=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:nh(d,S),onBlur:nh(p,P),onMouseEnter:nh(m,S),onMouseLeave:nh(_,P),onTouchStart:nh(v,S)}]:[!1,w,{}]}function nh(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function iO({page:n,...e}){let{router:t}=DS(),r=Y.useMemo(()=>_S(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?Y.createElement(aO,{page:n,matches:r,...e}):null}function sO(n){let{manifest:e,routeModules:t}=xS(),[r,a]=Y.useState([]);return Y.useEffect(()=>{let o=!1;return YN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function aO({page:n,matches:e,...t}){let r=Uo(),{manifest:a,routeModules:o}=xS(),{basename:u}=DS(),{loaderData:d,matches:p}=nO(),m=Y.useMemo(()=>Wb(n,e,p,a,r,"data"),[n,e,p,a,r]),_=Y.useMemo(()=>Wb(n,e,p,a,r,"assets"),[n,e,p,a,r]),v=Y.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let P=new Set,U=!1;if(e.forEach(H=>{var K;let X=a.routes[H.route.id];!X||!X.hasLoader||(!m.some(oe=>oe.route.id===H.route.id)&&H.route.id in d&&((K=o[H.route.id])!=null&&K.shouldRevalidate)||X.hasClientLoader?U=!0:P.add(H.route.id))}),P.size===0)return[];let M=tO(n,u);return U&&P.size>0&&M.searchParams.set("_routes",e.filter(H=>P.has(H.route.id)).map(H=>H.route.id).join(",")),[M.pathname+M.search]},[u,d,r,a,m,e,n,o]),w=Y.useMemo(()=>XN(_,a),[_,a]),S=sO(_);return Y.createElement(Y.Fragment,null,v.map(P=>Y.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),w.map(P=>Y.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),S.map(({key:P,link:U})=>Y.createElement("link",{key:P,...U})))}function oO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var PS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PS&&(window.__reactRouterVersion="7.5.0")}catch{}function lO({basename:n,children:e,window:t}){let r=Y.useRef();r.current==null&&(r.current=YP({window:t,v5Compat:!0}));let a=r.current,[o,u]=Y.useState({action:a.action,location:a.location}),d=Y.useCallback(p=>{Y.startTransition(()=>u(p))},[u]);return Y.useLayoutEffect(()=>a.listen(d),[a,d]),Y.createElement(UN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var NS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,OS=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:p,to:m,preventScrollReset:_,viewTransition:v,...w},S){let{basename:P}=Y.useContext(yi),U=typeof m=="string"&&NS.test(m),M,H=!1;if(typeof m=="string"&&U&&(M=m,PS))try{let A=new URL(window.location.href),x=m.startsWith("//")?new URL(A.protocol+m):new URL(m),k=Yi(x.pathname,P);x.origin===A.origin&&k!=null?m=k+x.search+x.hash:H=!0}catch{hi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=wN(m,{relative:a}),[K,oe,se]=rO(r,w),le=dO(m,{replace:u,state:d,target:p,preventScrollReset:_,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=Y.createElement("a",{...w,...se,href:M||X,onClick:H||o?e:D,ref:oO(S,oe),target:p,"data-discover":!U&&t==="render"?"true":void 0});return K&&!U?Y.createElement(Y.Fragment,null,R,Y.createElement(iO,{page:X})):R});OS.displayName="Link";var uO=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:p,...m},_){let v=ud(u,{relative:m.relative}),w=Uo(),S=Y.useContext(pm),{navigator:P,basename:U}=Y.useContext(yi),M=S!=null&&yO(v)&&d===!0,H=P.encodeLocation?P.encodeLocation(v).pathname:v.pathname,X=w.pathname,K=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(X=X.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&U&&(K=Yi(K,U)||K);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let se=X===H||!a&&X.startsWith(H)&&X.charAt(oe)==="/",le=K!=null&&(K===H||!a&&K.startsWith(H)&&K.charAt(H.length)==="/"),D={isActive:se,isPending:le,isTransitioning:M},R=se?e:void 0,A;typeof r=="function"?A=r(D):A=[r,se?"active":null,le?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let x=typeof o=="function"?o(D):o;return Y.createElement(OS,{...m,"aria-current":R,className:A,ref:_,style:x,to:u,viewTransition:d},typeof p=="function"?p(D):p)});uO.displayName="NavLink";var cO=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=dp,action:d,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:v,...w},S)=>{let P=mO(),U=gO(d,{relative:m}),M=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&NS.test(d),X=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let oe=K.nativeEvent.submitter,se=(oe==null?void 0:oe.getAttribute("formmethod"))||u;P(oe||K.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:a,state:o,relative:m,preventScrollReset:_,viewTransition:v})};return Y.createElement("form",{ref:S,method:M,action:U,onSubmit:r?p:X,...w,"data-discover":!H&&n==="render"?"true":void 0})});cO.displayName="Form";function hO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kS(n){let e=Y.useContext(Nu);return Tt(e,hO(n)),e}function dO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=Ou(),p=Uo(),m=ud(n,{relative:o});return Y.useCallback(_=>{if(HN(_,e)){_.preventDefault();let v=t!==void 0?t:Vh(p)===Vh(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[p,d,m,t,r,e,n,a,o,u])}var fO=0,pO=()=>`__${String(++fO)}__`;function mO(){let{router:n}=kS("useSubmit"),{basename:e}=Y.useContext(yi),t=kN();return Y.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:p,body:m}=KN(r,e);if(a.navigate===!1){let _=a.fetcherKey||pO();await n.fetch(_,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function gO(n,{relative:e}={}){let{basename:t}=Y.useContext(yi),r=Y.useContext(_i);Tt(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...ud(n||".",{relative:e})},u=Uo();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let _=d.toString();o.search=_?`?${_}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Qi([t,o.pathname])),Vh(o)}function yO(n,e={}){let t=Y.useContext(IS);Tt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=kS("useViewTransitionState"),a=ud(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Yi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Yi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return kp(a.pathname,u)!=null||kp(a.pathname,o)!=null}new TextEncoder;var qn=function(){return qn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},qn.apply(this,arguments)};function Bv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Vp(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ht="-ms-",Eh="-moz-",tt="-webkit-",VS="comm",gm="rule",Fv="decl",_O="@import",MS="@keyframes",vO="@layer",LS=Math.abs,jv=String.fromCharCode,B_=Object.assign;function EO(n,e){return hn(n,0)^45?(((e<<2^hn(n,0))<<2^hn(n,1))<<2^hn(n,2))<<2^hn(n,3):0}function US(n){return n.trim()}function $i(n,e){return(n=e.exec(n))?n[0]:n}function Ve(n,e,t){return n.replace(e,t)}function pp(n,e,t){return n.indexOf(e,t)}function hn(n,e){return n.charCodeAt(e)|0}function ru(n,e,t){return n.slice(e,t)}function ei(n){return n.length}function zS(n){return n.length}function dh(n,e){return e.push(n),n}function TO(n,e){return n.map(e).join("")}function Yb(n,e){return n.filter(function(t){return!$i(t,e)})}var ym=1,iu=1,BS=0,Ir=0,$t=0,ku="";function _m(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:ym,column:iu,length:u,return:"",siblings:d}}function Ys(n,e){return B_(_m("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Vl(n){for(;n.root;)n=Ys(n.root,{children:[n]});dh(n,n.siblings)}function wO(){return $t}function bO(){return $t=Ir>0?hn(ku,--Ir):0,iu--,$t===10&&(iu=1,ym--),$t}function kr(){return $t=Ir<BS?hn(ku,Ir++):0,iu++,$t===10&&(iu=1,ym++),$t}function Eo(){return hn(ku,Ir)}function mp(){return Ir}function vm(n,e){return ru(ku,n,e)}function F_(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function IO(n){return ym=iu=1,BS=ei(ku=n),Ir=0,[]}function AO(n){return ku="",n}function f_(n){return US(vm(Ir-1,j_(n===91?n+2:n===40?n+1:n)))}function SO(n){for(;($t=Eo())&&$t<33;)kr();return F_(n)>2||F_($t)>3?"":" "}function RO(n,e){for(;--e&&kr()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return vm(n,mp()+(e<6&&Eo()==32&&kr()==32))}function j_(n){for(;kr();)switch($t){case n:return Ir;case 34:case 39:n!==34&&n!==39&&j_($t);break;case 40:n===41&&j_(n);break;case 92:kr();break}return Ir}function CO(n,e){for(;kr()&&n+$t!==57;)if(n+$t===84&&Eo()===47)break;return"/*"+vm(e,Ir-1)+"*"+jv(n===47?n:kr())}function DO(n){for(;!F_(Eo());)kr();return vm(n,Ir)}function xO(n){return AO(gp("",null,null,null,[""],n=IO(n),0,[0],n))}function gp(n,e,t,r,a,o,u,d,p){for(var m=0,_=0,v=u,w=0,S=0,P=0,U=1,M=1,H=1,X=0,K="",oe=a,se=o,le=r,D=K;M;)switch(P=X,X=kr()){case 40:if(P!=108&&hn(D,v-1)==58){pp(D+=Ve(f_(X),"&","&\f"),"&\f",LS(m?d[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:D+=f_(X);break;case 9:case 10:case 13:case 32:D+=SO(P);break;case 92:D+=RO(mp()-1,7);continue;case 47:switch(Eo()){case 42:case 47:dh(PO(CO(kr(),mp()),e,t,p),p);break;default:D+="/"}break;case 123*U:d[m++]=ei(D)*H;case 125*U:case 59:case 0:switch(X){case 0:case 125:M=0;case 59+_:H==-1&&(D=Ve(D,/\f/g,"")),S>0&&ei(D)-v&&dh(S>32?Zb(D+";",r,t,v-1,p):Zb(Ve(D," ","")+";",r,t,v-2,p),p);break;case 59:D+=";";default:if(dh(le=Xb(D,e,t,m,_,a,d,K,oe=[],se=[],v,o),o),X===123)if(_===0)gp(D,e,le,le,oe,o,v,d,se);else switch(w===99&&hn(D,3)===110?100:w){case 100:case 108:case 109:case 115:gp(n,le,le,r&&dh(Xb(n,le,le,0,0,a,d,K,a,oe=[],v,se),se),a,se,v,d,r?oe:se);break;default:gp(D,le,le,le,[""],se,0,d,se)}}m=_=S=0,U=H=1,K=D="",v=u;break;case 58:v=1+ei(D),S=P;default:if(U<1){if(X==123)--U;else if(X==125&&U++==0&&bO()==125)continue}switch(D+=jv(X),X*U){case 38:H=_>0?1:(D+="\f",-1);break;case 44:d[m++]=(ei(D)-1)*H,H=1;break;case 64:Eo()===45&&(D+=f_(kr())),w=Eo(),_=v=ei(K=D+=DO(mp())),X++;break;case 45:P===45&&ei(D)==2&&(U=0)}}return o}function Xb(n,e,t,r,a,o,u,d,p,m,_,v){for(var w=a-1,S=a===0?o:[""],P=zS(S),U=0,M=0,H=0;U<r;++U)for(var X=0,K=ru(n,w+1,w=LS(M=u[U])),oe=n;X<P;++X)(oe=US(M>0?S[X]+" "+K:Ve(K,/&\f/g,S[X])))&&(p[H++]=oe);return _m(n,e,t,a===0?gm:d,p,m,_,v)}function PO(n,e,t,r){return _m(n,e,t,VS,jv(wO()),ru(n,2,-2),0,r)}function Zb(n,e,t,r,a){return _m(n,e,t,Fv,ru(n,0,r),ru(n,r+1,-1),r,a)}function FS(n,e,t){switch(EO(n,e)){case 5103:return tt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+n+n;case 4789:return Eh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+n+Eh+n+ht+n+n;case 5936:switch(hn(n,e+11)){case 114:return tt+n+ht+Ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return tt+n+ht+Ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return tt+n+ht+Ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return tt+n+ht+n+n;case 6165:return tt+n+ht+"flex-"+n+n;case 5187:return tt+n+Ve(n,/(\w+).+(:[^]+)/,tt+"box-$1$2"+ht+"flex-$1$2")+n;case 5443:return tt+n+ht+"flex-item-"+Ve(n,/flex-|-self/g,"")+($i(n,/flex-|baseline/)?"":ht+"grid-row-"+Ve(n,/flex-|-self/g,""))+n;case 4675:return tt+n+ht+"flex-line-pack"+Ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return tt+n+ht+Ve(n,"shrink","negative")+n;case 5292:return tt+n+ht+Ve(n,"basis","preferred-size")+n;case 6060:return tt+"box-"+Ve(n,"-grow","")+tt+n+ht+Ve(n,"grow","positive")+n;case 4554:return tt+Ve(n,/([^-])(transform)/g,"$1"+tt+"$2")+n;case 6187:return Ve(Ve(Ve(n,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),n,"")+n;case 5495:case 3959:return Ve(n,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Ve(Ve(n,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+n+n;case 4200:if(!$i(n,/flex-|baseline/))return ht+"grid-column-align"+ru(n,e)+n;break;case 2592:case 3360:return ht+Ve(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,$i(r.props,/grid-\w+-end/)})?~pp(n+(t=t[e].value),"span",0)?n:ht+Ve(n,"-start","")+n+ht+"grid-row-span:"+(~pp(t,"span",0)?$i(t,/\d+/):+$i(t,/\d+/)-+$i(n,/\d+/))+";":ht+Ve(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return $i(r.props,/grid-\w+-start/)})?n:ht+Ve(Ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ve(n,/(.+)-inline(.+)/,tt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ei(n)-1-e>6)switch(hn(n,e+1)){case 109:if(hn(n,e+4)!==45)break;case 102:return Ve(n,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Eh+(hn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~pp(n,"stretch",0)?FS(Ve(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,p,m){return ht+a+":"+o+m+(u?ht+a+"-span:"+(d?p:+p-+o)+m:"")+n});case 4949:if(hn(n,e+6)===121)return Ve(n,":",":"+tt)+n;break;case 6444:switch(hn(n,hn(n,14)===45?18:11)){case 120:return Ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(hn(n,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+ht+"$2box$3")+n;case 100:return Ve(n,":",":"+ht)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(n,"scroll-","scroll-snap-")+n}return n}function Mp(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function NO(n,e,t,r){switch(n.type){case vO:if(n.children.length)break;case _O:case Fv:return n.return=n.return||n.value;case VS:return"";case MS:return n.return=n.value+"{"+Mp(n.children,r)+"}";case gm:if(!ei(n.value=n.props.join(",")))return""}return ei(t=Mp(n.children,r))?n.return=n.value+"{"+t+"}":""}function OO(n){var e=zS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function kO(n){return function(e){e.root||(e=e.return)&&n(e)}}function VO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Fv:n.return=FS(n.value,n.length,t);return;case MS:return Mp([Ys(n,{value:Ve(n.value,"@","@"+tt)})],r);case gm:if(n.length)return TO(t=n.props,function(a){switch($i(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vl(Ys(n,{props:[Ve(a,/:(read-\w+)/,":"+Eh+"$1")]})),Vl(Ys(n,{props:[a]})),B_(n,{props:Yb(t,r)});break;case"::placeholder":Vl(Ys(n,{props:[Ve(a,/:(plac\w+)/,":"+tt+"input-$1")]})),Vl(Ys(n,{props:[Ve(a,/:(plac\w+)/,":"+Eh+"$1")]})),Vl(Ys(n,{props:[Ve(a,/:(plac\w+)/,ht+"input-$1")]})),Vl(Ys(n,{props:[a]})),B_(n,{props:Yb(t,r)});break}return""})}}var MO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},er={},su=typeof process<"u"&&er!==void 0&&(er.REACT_APP_SC_ATTR||er.SC_ATTR)||"data-styled",jS="active",qS="data-styled-version",Em="6.1.17",qv=`/*!sc*/
`,Lp=typeof window<"u"&&"HTMLElement"in window,LO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&er!==void 0&&er.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&er.REACT_APP_SC_DISABLE_SPEEDY!==""?er.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&er.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&er!==void 0&&er.SC_DISABLE_SPEEDY!==void 0&&er.SC_DISABLE_SPEEDY!==""&&er.SC_DISABLE_SPEEDY!=="false"&&er.SC_DISABLE_SPEEDY),Tm=Object.freeze([]),au=Object.freeze({});function UO(n,e,t){return t===void 0&&(t=au),n.theme!==t.theme&&n.theme||e||t.theme}var HS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,BO=/(^-|-$)/g;function Jb(n){return n.replace(zO,"-").replace(BO,"")}var FO=/(a)(d)/gi,tp=52,eI=function(n){return String.fromCharCode(n+(n>25?39:97))};function q_(n){var e,t="";for(e=Math.abs(n);e>tp;e=e/tp|0)t=eI(e%tp)+t;return(eI(e%tp)+t).replace(FO,"$1-$2")}var p_,$S=5381,Ql=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},GS=function(n){return Ql($S,n)};function jO(n){return q_(GS(n)>>>0)}function qO(n){return n.displayName||n.name||"Component"}function m_(n){return typeof n=="string"&&!0}var KS=typeof Symbol=="function"&&Symbol.for,QS=KS?Symbol.for("react.memo"):60115,HO=KS?Symbol.for("react.forward_ref"):60112,$O={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},KO=((p_={})[HO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},p_[QS]=WS,p_);function tI(n){return("type"in(e=n)&&e.type.$$typeof)===QS?WS:"$$typeof"in n?KO[n.$$typeof]:$O;var e}var QO=Object.defineProperty,WO=Object.getOwnPropertyNames,nI=Object.getOwnPropertySymbols,YO=Object.getOwnPropertyDescriptor,XO=Object.getPrototypeOf,rI=Object.prototype;function YS(n,e,t){if(typeof e!="string"){if(rI){var r=XO(e);r&&r!==rI&&YS(n,r,t)}var a=WO(e);nI&&(a=a.concat(nI(e)));for(var o=tI(n),u=tI(e),d=0;d<a.length;++d){var p=a[d];if(!(p in GO||t&&t[p]||u&&p in u||o&&p in o)){var m=YO(e,p);try{QO(n,p,m)}catch{}}}}return n}function ou(n){return typeof n=="function"}function Hv(n){return typeof n=="object"&&"styledComponentId"in n}function mo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function iI(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function Mh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function H_(n,e,t){if(t===void 0&&(t=!1),!t&&!Mh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=H_(n[r],e[r]);else if(Mh(e))for(var r in e)n[r]=H_(n[r],e[r]);return n}function $v(n,e){Object.defineProperty(n,"toString",{value:e})}function cd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ZO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw cd(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(qv);return t},n}(),yp=new Map,Up=new Map,_p=1,np=function(n){if(yp.has(n))return yp.get(n);for(;Up.has(_p);)_p++;var e=_p++;return yp.set(n,e),Up.set(e,n),e},JO=function(n,e){_p=e+1,yp.set(n,e),Up.set(e,n)},ek="style[".concat(su,"][").concat(qS,'="').concat(Em,'"]'),tk=new RegExp("^".concat(su,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nk=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},rk=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(qv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var p=d.match(tk);if(p){var m=0|parseInt(p[1],10),_=p[2];m!==0&&(JO(_,m),nk(n,_,p[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},sI=function(n){for(var e=document.querySelectorAll(ek),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(su)!==jS&&(rk(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function ik(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var XS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(su,"]")));return p[p.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(su,jS),r.setAttribute(qS,Em);var u=ik();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},sk=function(){function n(e){this.element=XS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw cd(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),ak=function(){function n(e){this.element=XS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),ok=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),aI=Lp,lk={isServer:!Lp,useCSSOMInjection:!LO},ZS=function(){function n(e,t,r){e===void 0&&(e=au),t===void 0&&(t={});var a=this;this.options=qn(qn({},lk),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Lp&&aI&&(aI=!1,sI(this)),$v(this,function(){return function(o){for(var u=o.getTag(),d=u.length,p="",m=function(v){var w=function(H){return Up.get(H)}(v);if(w===void 0)return"continue";var S=o.names.get(w),P=u.getGroup(v);if(S===void 0||!S.size||P.length===0)return"continue";var U="".concat(su,".g").concat(v,'[id="').concat(w,'"]'),M="";S!==void 0&&S.forEach(function(H){H.length>0&&(M+="".concat(H,","))}),p+="".concat(P).concat(U,'{content:"').concat(M,'"}').concat(qv)},_=0;_<d;_++)m(_);return p}(a)})}return n.registerId=function(e){return np(e)},n.prototype.rehydrate=function(){!this.server&&Lp&&sI(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(qn(qn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new ok(a):r?new sk(a):new ak(a)}(this.options),new ZO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(np(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(np(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(np(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),uk=/&/g,ck=/^\s*\/\/.*$/gm;function JS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=JS(t.children,e)),t})}function hk(n){var e,t,r,a=au,o=a.options,u=o===void 0?au:o,d=a.plugins,p=d===void 0?Tm:d,m=function(w,S,P){return P.startsWith(t)&&P.endsWith(t)&&P.replaceAll(t,"").length>0?".".concat(e):w},_=p.slice();_.push(function(w){w.type===gm&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(uk,t).replace(r,m))}),u.prefix&&_.push(VO),_.push(NO);var v=function(w,S,P,U){S===void 0&&(S=""),P===void 0&&(P=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var M=w.replace(ck,""),H=xO(P||S?"".concat(P," ").concat(S," { ").concat(M," }"):M);u.namespace&&(H=JS(H,u.namespace));var X=[];return Mp(H,OO(_.concat(kO(function(K){return X.push(K)})))),X};return v.hash=p.length?p.reduce(function(w,S){return S.name||cd(15),Ql(w,S.name)},$S).toString():"",v}var dk=new ZS,$_=hk(),eR=kh.createContext({shouldForwardProp:void 0,styleSheet:dk,stylis:$_});eR.Consumer;kh.createContext(void 0);function oI(){return Y.useContext(eR)}var fk=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=$_);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,$v(this,function(){throw cd(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=$_),this.name+e.hash},n}(),pk=function(n){return n>="A"&&n<="Z"};function lI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;pk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var tR=function(n){return n==null||n===!1||n===""},nR=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!tR(o)&&(Array.isArray(o)&&o.isCss||ou(o)?r.push("".concat(lI(a),":"),o,";"):Mh(o)?r.push.apply(r,Vp(Vp(["".concat(a," {")],nR(o),!1),["}"],!1)):r.push("".concat(lI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in MO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function To(n,e,t,r){if(tR(n))return[];if(Hv(n))return[".".concat(n.styledComponentId)];if(ou(n)){if(!ou(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return To(a,e,t,r)}var o;return n instanceof fk?t?(n.inject(t,r),[n.getName(r)]):[n]:Mh(n)?nR(n):Array.isArray(n)?Array.prototype.concat.apply(Tm,n.map(function(u){return To(u,e,t,r)})):[n.toString()]}function mk(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(ou(t)&&!Hv(t))return!1}return!0}var gk=GS(Em),yk=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mk(e),this.componentId=t,this.baseHash=Ql(gk,t),this.baseStyle=r,ZS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=mo(a,this.staticRulesId);else{var o=iI(To(this.rules,e,t,r)),u=q_(Ql(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=mo(a,u),this.staticRulesId=u}else{for(var p=Ql(this.baseHash,r.hash),m="",_=0;_<this.rules.length;_++){var v=this.rules[_];if(typeof v=="string")m+=v;else if(v){var w=iI(To(v,e,t,r));p=Ql(p,w+_),m+=w}}if(m){var S=q_(p>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(m,".".concat(S),void 0,this.componentId)),a=mo(a,S)}}return a},n}(),rR=kh.createContext(void 0);rR.Consumer;var g_={};function _k(n,e,t){var r=Hv(n),a=n,o=!m_(n),u=e.attrs,d=u===void 0?Tm:u,p=e.componentId,m=p===void 0?function(oe,se){var le=typeof oe!="string"?"sc":Jb(oe);g_[le]=(g_[le]||0)+1;var D="".concat(le,"-").concat(jO(Em+le+g_[le]));return se?"".concat(se,"-").concat(D):D}(e.displayName,e.parentComponentId):p,_=e.displayName,v=_===void 0?function(oe){return m_(oe)?"styled.".concat(oe):"Styled(".concat(qO(oe),")")}(n):_,w=e.displayName&&e.componentId?"".concat(Jb(e.displayName),"-").concat(e.componentId):e.componentId||m,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,P=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;P=function(oe,se){return U(oe,se)&&M(oe,se)}}else P=U}var H=new yk(t,w,r?a.componentStyle:void 0);function X(oe,se){return function(le,D,R){var A=le.attrs,x=le.componentStyle,k=le.defaultProps,B=le.foldedComponentIds,N=le.styledComponentId,Ot=le.target,At=kh.useContext(rR),he=oI(),Ae=le.shouldForwardProp||he.shouldForwardProp,we=UO(D,At,k)||au,ke=function(xe,De,ct){for(var Le,Je=qn(qn({},De),{className:void 0,theme:ct}),Qe=0;Qe<xe.length;Qe+=1){var zt=ou(Le=xe[Qe])?Le(Je):Le;for(var tn in zt)Je[tn]=tn==="className"?mo(Je[tn],zt[tn]):tn==="style"?qn(qn({},Je[tn]),zt[tn]):zt[tn]}return De.className&&(Je.className=mo(Je.className,De.className)),Je}(A,D,we),O=ke.as||Ot,ie={};for(var ge in ke)ke[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&ke.theme===we||(ge==="forwardedAs"?ie.as=ke.forwardedAs:Ae&&!Ae(ge,O)||(ie[ge]=ke[ge]));var pe=function(xe,De){var ct=oI(),Le=xe.generateAndInjectStyles(De,ct.styleSheet,ct.stylis);return Le}(x,ke),fe=mo(B,N);return pe&&(fe+=" "+pe),ke.className&&(fe+=" "+ke.className),ie[m_(O)&&!HS.has(O)?"class":"className"]=fe,R&&(ie.ref=R),Y.createElement(O,ie)}(K,oe,se)}X.displayName=v;var K=kh.forwardRef(X);return K.attrs=S,K.componentStyle=H,K.displayName=v,K.shouldForwardProp=P,K.foldedComponentIds=r?mo(a.foldedComponentIds,a.styledComponentId):"",K.styledComponentId=w,K.target=r?a.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(se){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)H_(se,A[R],!0);return se}({},a.defaultProps,oe):oe}}),$v(K,function(){return".".concat(K.styledComponentId)}),o&&YS(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function uI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var cI=function(n){return Object.assign(n,{isCss:!0})};function vk(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ou(n)||Mh(n))return cI(To(uI(Tm,Vp([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?To(r):cI(To(uI(r,e)))}function G_(n,e,t){if(t===void 0&&(t=au),!e)throw cd(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,vk.apply(void 0,Vp([a],o,!1)))};return r.attrs=function(a){return G_(n,e,qn(qn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return G_(n,e,qn(qn({},t),a))},r}var iR=function(n){return G_(_k,n)},Ie=iR;HS.forEach(function(n){Ie[n]=iR(n)});const ve={gray:{white:"#FFFFFF",50:"#F6F7F9",100:"#E9EBEE",200:"#DADDE2",300:"#C4C9D1",400:"#A3AAB5",500:"#858D9C",600:"#6C7586",700:"#4F5B6B",800:"#333E4C",black:"#000000"},pointblue:{100:"#EEF3FF",500:"#8DC8FF",1e3:"#0084FF"},pointgreen:{1e3:"#00B51B"}},Yl=Ie.span`
  color: ${ve.gray[700]};
  font-weight: 500;
`,zp=Ie.span`
  font-weight: 400;
`,Gv=Ie.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${ve.gray[50]};
  color: ${ve.gray.white};
  text-align: center;
  font-size: 16px;
  line-height: 150%;
  }
`,Ek=Ie(Gv)`
  background: ${ve.pointblue[100]};
  ${Yl} {
    color: ${ve.pointblue[1e3]};
  }

  ${zp} {
    color: ${ve.pointblue[500]};
  }
`,Tk=Ie(Gv)`
  background: ${n=>n.$selected?ve.pointblue[1e3]:ve.gray[50]};

  ${Yl} {
    color: ${n=>n.$selected?ve.gray.white:ve.gray[700]};
  }

  ${zp} {
    color: ${n=>n.$selected?ve.pointblue[500]:ve.gray[400]};
  }

  cursor: pointer;

  ${n=>!n.$selected&&`
    &:hover {
      background: ${ve.pointblue[100]};

      ${Yl} {
        color: ${ve.pointblue[1e3]};
      }

      ${zp} {
        color: ${ve.pointblue[500]};
      }
    }
  `}
`;function lo(n){const e=n.type||"display";if(e==="editor")return q.jsxs(Gv,{children:[q.jsx(Yl,{children:n.text||"Chip"}),q.jsx("img",{src:"/mini-blog//delete.svg",alt:"delete",style:{width:"16px",height:"16px",cursor:"pointer"},onClick:n.onDelete})]});if(e==="display")return q.jsx(Ek,{children:q.jsx(Yl,{children:n.text||""})});if(e==="category")return q.jsxs(Tk,{$selected:n.selected,onClick:n.onClick,children:[q.jsx(Yl,{children:n.text||"category"}),q.jsx(zp,{children:n.number??0})]})}const wk=Ie.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 240px;
  padding: 110px 160px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > p {
    color: ${ve.gray[600]};
  }
`;function Kv(){return q.jsx(wk,{children:q.jsx("p",{children:"Copyright © 2025 김소리"})})}const bk=Ie.div`
  display: flex;
  width: 100%;
  height: 72px;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid ${ve.gray[200]};
`,sR=Ie.div`
  width: 2rem;
  height: 2rem;
  background-color: #3b82f6;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
  z-index: 4;
`,aR=Ie.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${ve.pointgreen[1e3]};
  border-radius: 9999px;
  margin-left: -0.5rem;
  transition: transform 0.3s ease;
`,Ik=Ie.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover ${sR} {
    transform: rotate(90deg);
  }

  &:hover ${aR} {
    transform: scale(0.9);
  }
`;function Qv({onLogoClick:n}){const e=Ou(),t=()=>{n?n():e("/")};return q.jsx(bk,{children:q.jsxs(Ik,{onClick:t,children:[q.jsx(sR,{}),q.jsx(aR,{})]})})}const Ak=()=>{};var hI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Sk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},lR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,_=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|m>>6,S=m&63;p||(S=64,u||(w=64)),r.push(t[_],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new Rk;const w=o<<2|d>>4;if(r.push(w),m!==64){const S=d<<4&240|m>>2;if(r.push(S),v!==64){const P=m<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ck=function(n){const e=oR(n);return lR.encodeByteArray(e,!0)},Bp=function(n){return Ck(n).replace(/\./g,"")},Wv=function(n){try{return lR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Fp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Dk(t)||(n[t]=Fp(n[t],e[t]));return n}function Dk(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=()=>uR().__FIREBASE_DEFAULTS__,Pk=()=>{if(typeof process>"u"||typeof hI>"u")return;const n=hI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wv(n[1]);return e&&JSON.parse(e)},Yv=()=>{try{return Ak()||xk()||Pk()||Nk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cR=()=>{var n;return(n=Yv())===null||n===void 0?void 0:n.config},Ok=n=>{var e;return(e=Yv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bp(JSON.stringify(t)),Bp(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Xv(){var n;const e=(n=Yv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lk(){return typeof window<"u"||hR()}function hR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Uk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fR(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pR(){return!Xv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lh(){try{return typeof indexedDB=="object"}catch{return!1}}function zk(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="FirebaseError";class Mn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bk,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?Fk(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new Mn(a,d,r)}}function Fk(n,e){return n.replace(jk,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const jk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function qk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function aa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(fI(o)&&fI(u)){if(!aa(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function fI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function fh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mR(n,e){const t=new Hk(n,e);return t.subscribe.bind(t)}class Hk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$k(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=y_),a.error===void 0&&(a.error=y_),a.complete===void 0&&(a.complete=y_);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $k(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function y_(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return n&&n._delegate?n._delegate:n}class di{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new kk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qk(e))try{this.getOrInitializeService({instanceIdentifier:so})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=so){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=so){return this.instances.has(e)}getOptions(e=so){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=so){return this.component?this.component.multipleInstances?e:so:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kk(n){return n===so?void 0:n}function Qk(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const yR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},Wk=Be.INFO,Yk={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},Xk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=Yk[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wm{constructor(e){this.name=e,this._logLevel=Wk,this._logHandler=Xk,this._userLogHandler=null,Jv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function Zk(n){Jv.forEach(e=>{e.setLogLevel(n)})}function Jk(n,e){for(const t of Jv){let r=null;e&&e.level&&(r=yR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");o>=(r??a.logLevel)&&n({level:Be[o].toLowerCase(),message:d,args:u,type:a.name})}}}const eV=(n,e)=>e.some(t=>n instanceof t);let pI,mI;function tV(){return pI||(pI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nV(){return mI||(mI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _R=new WeakMap,K_=new WeakMap,vR=new WeakMap,__=new WeakMap,eE=new WeakMap;function rV(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(ta(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&_R.set(t,n)}).catch(()=>{}),eE.set(e,n),e}function iV(n){if(K_.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});K_.set(n,e)}let Q_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return K_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ta(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sV(n){Q_=n(Q_)}function aV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(v_(this),e,...t);return vR.set(r,e.sort?e.sort():[e]),ta(r)}:nV().includes(n)?function(...e){return n.apply(v_(this),e),ta(_R.get(this))}:function(...e){return ta(n.apply(v_(this),e))}}function oV(n){return typeof n=="function"?aV(n):(n instanceof IDBTransaction&&iV(n),eV(n,tV())?new Proxy(n,Q_):n)}function ta(n){if(n instanceof IDBRequest)return rV(n);if(__.has(n))return __.get(n);const e=oV(n);return e!==n&&(__.set(n,e),eE.set(e,n)),e}const v_=n=>eE.get(n);function lV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=ta(u);return r&&u.addEventListener("upgradeneeded",p=>{r(ta(u.result),p.oldVersion,p.newVersion,ta(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const uV=["get","getKey","getAll","getAllKeys","count"],cV=["put","add","delete","clear"],E_=new Map;function gI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(E_.get(e))return E_.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=cV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||uV.includes(t)))return;const o=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return E_.set(e,o),o}sV(n=>({...n,get:(e,t,r)=>gI(e,t)||n.get(e,t,r),has:(e,t)=>!!gI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jp="@firebase/app",W_="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new wm("@firebase/app"),fV="@firebase/app-compat",pV="@firebase/analytics-compat",mV="@firebase/analytics",gV="@firebase/app-check-compat",yV="@firebase/app-check",_V="@firebase/auth",vV="@firebase/auth-compat",EV="@firebase/database",TV="@firebase/data-connect",wV="@firebase/database-compat",bV="@firebase/functions",IV="@firebase/functions-compat",AV="@firebase/installations",SV="@firebase/installations-compat",RV="@firebase/messaging",CV="@firebase/messaging-compat",DV="@firebase/performance",xV="@firebase/performance-compat",PV="@firebase/remote-config",NV="@firebase/remote-config-compat",OV="@firebase/storage",kV="@firebase/storage-compat",VV="@firebase/firestore",MV="@firebase/vertexai",LV="@firebase/firestore-compat",UV="firebase",zV="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="[DEFAULT]",BV={[jp]:"fire-core",[fV]:"fire-core-compat",[mV]:"fire-analytics",[pV]:"fire-analytics-compat",[yV]:"fire-app-check",[gV]:"fire-app-check-compat",[_V]:"fire-auth",[vV]:"fire-auth-compat",[EV]:"fire-rtdb",[TV]:"fire-data-connect",[wV]:"fire-rtdb-compat",[bV]:"fire-fn",[IV]:"fire-fn-compat",[AV]:"fire-iid",[SV]:"fire-iid-compat",[RV]:"fire-fcm",[CV]:"fire-fcm-compat",[DV]:"fire-perf",[xV]:"fire-perf-compat",[PV]:"fire-rc",[NV]:"fire-rc-compat",[OV]:"fire-gcs",[kV]:"fire-gcs-compat",[VV]:"fire-fst",[LV]:"fire-fst-compat",[MV]:"fire-vertex","fire-js":"fire-js",[UV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map,lu=new Map,uu=new Map;function Uh(n,e){try{n.container.addComponent(e)}catch(t){Xi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ER(n,e){n.container.addOrOverwriteComponent(e)}function ua(n){const e=n.name;if(uu.has(e))return Xi.debug(`There were multiple attempts to register component ${e}.`),!1;uu.set(e,n);for(const t of la.values())Uh(t,n);for(const t of lu.values())Uh(t,n);return!0}function TR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function FV(n,e,t=oa){TR(n,e).clearInstance(t)}function wR(n){return n.options!==void 0}function pt(n){return n==null?!1:n.settings!==void 0}function jV(){uu.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new zo("app","Firebase",qV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n,e){const t=Wv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class HV extends bR{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&yI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&yI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Vr(jp,W_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){nE(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw br.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=zV;function tE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw br.create("bad-app-name",{appName:String(a)});if(t||(t=cR()),!t)throw br.create("no-options");const o=la.get(a);if(o){if(aa(t,o.options)&&aa(r,o.config))return o;throw br.create("duplicate-app",{appName:a})}const u=new gR(a);for(const p of uu.values())u.addComponent(p);const d=new bR(t,r,u);return la.set(a,d),d}function $V(n,e){if(Lk()&&!hR())throw br.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;wR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((_,v)=>Math.imul(31,_)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw br.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=lu.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new gR(o);for(const m of uu.values())d.addComponent(m);const p=new HV(t,e,o,d);return lu.set(o,p),p}function GV(n=oa){const e=la.get(n);if(!e&&n===oa&&cR())return tE();if(!e)throw br.create("no-app",{appName:n});return e}function KV(){return Array.from(la.values())}async function nE(n){let e=!1;const t=n.name;la.has(t)?(e=!0,la.delete(t)):lu.has(t)&&n.decRefCount()<=0&&(lu.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Vr(n,e,t){var r;let a=(r=BV[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xi.warn(d.join(" "));return}ua(new di(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function IR(n,e){if(n!==null&&typeof n!="function")throw br.create("invalid-log-argument");Jk(n,e)}function AR(n){Zk(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV="firebase-heartbeat-database",WV=1,zh="firebase-heartbeat-store";let T_=null;function SR(){return T_||(T_=lV(QV,WV,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zh)}catch(t){console.warn(t)}}}}).catch(n=>{throw br.create("idb-open",{originalErrorMessage:n.message})})),T_}async function YV(n){try{const t=(await SR()).transaction(zh),r=await t.objectStore(zh).get(RR(n));return await t.done,r}catch(e){if(e instanceof Mn)Xi.warn(e.message);else{const t=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xi.warn(t.message)}}}async function _I(n,e){try{const r=(await SR()).transaction(zh,"readwrite");await r.objectStore(zh).put(e,RR(n)),await r.done}catch(t){if(t instanceof Mn)Xi.warn(t.message);else{const r=br.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xi.warn(r.message)}}}function RR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV=1024,ZV=30;class JV{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>ZV){const u=nM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vI(),{heartbeatsToSend:r,unsentEntries:a}=eM(this._heartbeatsCache.heartbeats),o=Bp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Xi.warn(t),""}}}function vI(){return new Date().toISOString().substring(0,10)}function eM(n,e=XV){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),EI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),EI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lh()?zk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YV(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return _I(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return _I(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function EI(n){return Bp(JSON.stringify({version:2,heartbeats:n})).length}function nM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(n){ua(new di("platform-logger",e=>new hV(e),"PRIVATE")),ua(new di("heartbeat",e=>new JV(e),"PRIVATE")),Vr(jp,W_,n),Vr(jp,W_,"esm2017"),Vr("fire-js","")}rM("");const iM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Mn,SDK_VERSION:va,_DEFAULT_ENTRY_NAME:oa,_addComponent:Uh,_addOrOverwriteComponent:ER,_apps:la,_clearComponents:jV,_components:uu,_getProvider:TR,_isFirebaseApp:wR,_isFirebaseServerApp:pt,_registerComponent:ua,_removeServiceInstance:FV,_serverApps:lu,deleteApp:nE,getApp:GV,getApps:KV,initializeApp:tE,initializeServerApp:$V,onLog:IR,registerVersion:Vr,setLogLevel:AR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,t){this._delegate=e,this.firebase=t,Uh(e,new di("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),nE(this._delegate)))}_getService(e,t=oa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=oa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Uh(this._delegate,e)}_addOrOverwriteComponent(e){ER(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},TI=new zo("app-compat","Firebase",aM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Vr,setLogLevel:AR,onLog:IR,apps:null,SDK_VERSION:va,INTERNAL:{registerComponent:d,removeApp:r,useAsService:p,modularAPIs:iM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||oa,!dI(e,m))throw TI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,_={}){const v=tE(m,_);if(dI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const _=m.name,v=_.replace("-compat","");if(ua(m)&&m.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw TI.create("invalid-app-argument",{appName:_});return S[v]()};m.serviceProps!==void 0&&Fp(w,m.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,_).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?t[v]:null}function p(m,_){return _==="serverAuth"?null:_}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(){const n=oM(sM);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:CR,extendNamespace:e,createSubscribe:mR,ErrorFactory:zo,deepExtend:Fp});function e(t){Fp(n,t)}return n}const lM=CR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new wm("@firebase/app-compat"),uM="@firebase/app-compat",cM="0.2.53";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(n){Vr(uM,cM,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=uR();if(n.firebase!==void 0){wI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&wI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Mu=lM;hM();var dM="firebase",fM="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mu.registerVersion(dM,fM,"app-compat");const rh={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ml={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function DR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mM=pM,gM=DR,xR=new zo("auth","Firebase",DR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=new wm("@firebase/auth");function yM(n,...e){qp.logLevel<=Be.WARN&&qp.warn(`Auth (${va}): ${n}`,...e)}function vp(n,...e){qp.logLevel<=Be.ERROR&&qp.error(`Auth (${va}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,...e){throw iE(n,...e)}function Jt(n,...e){return iE(n,...e)}function rE(n,e,t){const r=Object.assign(Object.assign({},gM()),{[e]:t});return new zo("auth","Firebase",r).create(e,{appName:n.name})}function fn(n){return rE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(n,"argument-error"),rE(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function iE(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xR.create(n,...e)}function ae(n,e,...t){if(!n)throw iE(e,...t)}function ai(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vp(e),new Error(e)}function Mr(n,e){n||ai(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sE(){return bI()==="http:"||bI()==="https:"}function bI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sE()||dR()||"connection"in navigator)?navigator.onLine:!0}function vM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=Mk()||Zv()}get(){return _M()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n,e){Mr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wM=new hd(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nt(n,e,t,r,a={}){return NR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=Vu(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},o);return Uk()||(m.referrerPolicy="no-referrer"),PR.fetch()(await OR(n,n.config.apiHost,t,d),m)})}async function NR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},EM),e);try{const a=new IM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ph(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ph(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw ph(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw ph(n,"user-disabled",u);const _=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw rE(n,_,m);Tn(n,_)}}catch(a){if(a instanceof Mn)throw a;Tn(n,"network-request-failed",{message:String(a)})}}async function ns(n,e,t,r,a={}){const o=await Nt(n,e,t,r,a);return"mfaPendingCredential"in o&&Tn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function OR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?aE(n.config,a):`${n.config.apiScheme}://${a}`;return TM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function bM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),wM.get())})}}function ph(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Jt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n){return n!==void 0&&n.getResponse!==void 0}function AI(n){return n!==void 0&&n.enterprise!==void 0}class kR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(n){return(await Nt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function VR(n,e){return Nt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SM(n,e){return Nt(n,"POST","/v1/accounts:delete",e)}async function RM(n,e){return Nt(n,"POST","/v1/accounts:update",e)}async function Hp(n,e){return Nt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CM(n,e=!1){const t=Se(n),r=await t.getIdToken(e),a=bm(r);ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:Th(w_(a.auth_time)),issuedAtTime:Th(w_(a.iat)),expirationTime:Th(w_(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function w_(n){return Number(n)*1e3}function bm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vp("JWT malformed, contained fewer than 3 sections"),null;try{const a=Wv(t);return a?JSON.parse(a):(vp("Failed to decode base64 JWT payload"),null)}catch(a){return vp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function SI(n){const e=bm(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Mn&&DM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function DM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Th(this.lastLoginAt),this.creationTime=Th(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Zi(n,Hp(t,{idToken:r}));ae(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?MR(o.providerUserInfo):[],d=NM(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),_=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Y_(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function PM(n){const e=Se(n);await Fh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NM(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function MR(n){return n.map(e=>{var{providerId:t}=e,r=Bv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OM(n,e){const t=await NR(n,{},async()=>{const r=Vu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await OR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",PR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kM(n,e){return Nt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):SI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=SI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await OM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new Xl;return r&&(ae(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(ae(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(ae(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xl,this.toJSON())}_performRefresh(){return ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Or{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Bv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CM(this,e)}reload(){return PM(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(fn(this.auth));const e=await this.getIdToken();return await Zi(this,SM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,p,m,_;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,P=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(m=t.createdAt)!==null&&m!==void 0?m:void 0,X=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:K,emailVerified:oe,isAnonymous:se,providerData:le,stsTokenManager:D}=t;ae(K&&D,e,"internal-error");const R=Xl.fromJSON(this.name,D);ae(typeof K=="string",e,"internal-error"),$s(v,e.name),$s(w,e.name),ae(typeof oe=="boolean",e,"internal-error"),ae(typeof se=="boolean",e,"internal-error"),$s(S,e.name),$s(P,e.name),$s(U,e.name),$s(M,e.name),$s(H,e.name),$s(X,e.name);const A=new Or({uid:K,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:se,photoURL:P,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:H,lastLoginAt:X});return le&&Array.isArray(le)&&(A.providerData=le.map(x=>Object.assign({},x))),M&&(A._redirectEventId=M),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Xl;a.updateFromServerResponse(t);const o=new Or({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Fh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];ae(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?MR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new Xl;d.updateFromIdToken(r);const p=new Or({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Y_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Map;function rr(n){Mr(n instanceof Function,"Expected a class definition");let e=RI.get(n);return e?(Mr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,RI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}LR.type="NONE";const cu=LR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n,e,t){return`firebase:${n}:${e}:${t}`}class Zl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=wo(this.userKey,a.apiKey,o),this.fullPersistenceKey=wo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hp(this.auth,{idToken:e}).catch(()=>{});return t?Or._fromGetAccountInfoResponse(this.auth,t,e):null}return Or._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zl(rr(cu),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||rr(cu);const u=wo(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const _=await m._get(u);if(_){let v;if(typeof _=="string"){const w=await Hp(e,{idToken:_}).catch(()=>{});if(!w)break;v=await Or._fromGetAccountInfoResponse(e,w,_)}else v=Or._fromJSON(e,_);m!==o&&(d=v),o=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new Zl(o,e,r):(o=p[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Zl(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jR(e))return"Blackberry";if(qR(e))return"Webos";if(zR(e))return"Safari";if((e.includes("chrome/")||BR(e))&&!e.includes("edge/"))return"Chrome";if(dd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UR(n=bt()){return/firefox\//i.test(n)}function zR(n=bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BR(n=bt()){return/crios\//i.test(n)}function FR(n=bt()){return/iemobile/i.test(n)}function dd(n=bt()){return/android/i.test(n)}function jR(n=bt()){return/blackberry/i.test(n)}function qR(n=bt()){return/webos/i.test(n)}function fd(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function VM(n=bt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function MM(n=bt()){var e;return fd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LM(){return fR()&&document.documentMode===10}function HR(n=bt()){return fd(n)||dd(n)||qR(n)||jR(n)||/windows phone/i.test(n)||FR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(n,e=[]){let t;switch(n){case"Browser":t=CI(bt());break;case"Worker":t=`${CI(bt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${va}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const p=e(o);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zM(n,e={}){return Nt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=6;class FM{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:BM,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new DI(this),this.idTokenSubscription=new DI(this),this.beforeStateQueue=new UM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Zl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hp(this,{idToken:e}),r=await Or._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(fn(this));const t=e?Se(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zM(this),t=new FM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await kM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rr(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await Zl.create(this,[rr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$R(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function It(n){return Se(n)}class DI{constructor(e){this.auth=e,this.observer=null,this.addObserver=mR(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qM(n){pd=n}function oE(n){return pd.loadJS(n)}function HM(){return pd.recaptchaV2Script}function $M(){return pd.recaptchaEnterpriseScript}function GM(){return pd.gapiScript}function GR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=500,QM=6e4,rp=1e12;class WM{constructor(e){this.auth=e,this.counter=rp,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new ZM(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||rp;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||rp;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||rp;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class YM{constructor(){this.enterprise=new XM}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class XM{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ZM{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ae(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=JM(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},QM)},KM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function JM(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const eL="recaptcha-enterprise",wh="NO_RECAPTCHA";class KR{constructor(e){this.type=eL,this.auth=It(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{VR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new kR(p);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(o,u,d){const p=window.grecaptcha;AI(p)?p.enterprise.ready(()=>{p.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(wh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YM().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&AI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=$M();p.length!==0&&(p+=d),oE(p).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function ih(n,e,t,r=!1,a=!1){const o=new KR(n);let u;if(a)u=wh;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function na(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await ih(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await ih(n,e,t,t==="getOobCode");return r(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await ih(n,e,t);return r(n,d).catch(async p=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const _=await ih(n,e,t,!1,!0);return r(n,_)}return Promise.reject(p)})}else{const d=await ih(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function tL(n){const e=It(n),t=await VR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new kR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new KR(e).verify()}function nL(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rL(n,e,t){const r=It(n);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=QR(e),{host:u,port:d}=iL(e),p=d===null?"":`:${d}`,m={url:`${o}//${u}${p}/`},_=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(aa(m,r.config.emulator)&&aa(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,a||sL()}function QR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iL(n){const e=QR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:xI(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:xI(u)}}}function xI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function sL(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ai("not implemented")}_getIdTokenResponse(e){return ai("not implemented")}_linkToIdToken(e,t){return ai("not implemented")}_getReauthenticationResolver(e){return ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e){return Nt(n,"POST","/v1/accounts:resetPassword",Pt(n,e))}async function aL(n,e){return Nt(n,"POST","/v1/accounts:update",e)}async function oL(n,e){return Nt(n,"POST","/v1/accounts:signUp",e)}async function lL(n,e){return Nt(n,"POST","/v1/accounts:update",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(n,e){return ns(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function Im(n,e){return Nt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function cL(n,e){return Im(n,e)}async function hL(n,e){return Im(n,e)}async function dL(n,e){return Im(n,e)}async function fL(n,e){return Im(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL(n,e){return ns(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function mL(n,e){return ns(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends Uu{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new jh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new jh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(e,t,"signInWithPassword",uL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return pL(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(e,r,"signUpPassword",oL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mL(e,{idToken:t,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(n,e){return ns(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL="http://localhost";class fi extends Uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Bv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new fi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Wi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wi(e,t)}buildRequest(){const e={requestUri:gL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(n,e){return Nt(n,"POST","/v1/accounts:sendVerificationCode",Pt(n,e))}async function yL(n,e){return ns(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e))}async function _L(n,e){const t=await ns(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e));if(t.temporaryProof)throw ph(n,"account-exists-with-different-credential",t);return t}const vL={USER_NOT_FOUND:"user-not-found"};async function EL(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ns(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,t),vL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Uu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new bo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new bo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _L(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return EL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new bo({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wL(n){const e=Wl(fh(n)).link,t=e?Wl(fh(e)).deep_link_id:null,r=Wl(fh(n)).deep_link_id;return(r?Wl(fh(r)).link:null)||r||t||e||n}class Am{constructor(e){var t,r,a,o,u,d;const p=Wl(fh(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(r=p.oobCode)!==null&&r!==void 0?r:null,v=TL((a=p.mode)!==null&&a!==void 0?a:null);ae(m&&_&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=_,this.continueUrl=(o=p.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=wL(e);try{return new Am(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.providerId=Ea.PROVIDER_ID}static credential(e,t){return jh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Am.parseLink(t);return ae(r,"argument-error"),jh._fromEmailAndCode(e,r.code,r.tenantId)}}Ea.PROVIDER_ID="password";Ea.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ea.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends rs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Jl extends zu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ae("providerId"in t&&"signInMethod"in t,"argument-error"),fi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ae(e.idToken||e.accessToken,"argument-error"),fi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Jl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Jl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Jl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends zu{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.GOOGLE_SIGN_IN_METHOD="google.com";ri.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends zu{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL="http://localhost";class hu extends Uu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Wi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new hu(r,o)}static _create(e,t){return new hu(e,t)}buildRequest(){return{requestUri:bL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL="saml.";class $p extends rs{constructor(e){ae(e.startsWith(IL),"argument-error"),super(e)}static credentialFromResult(e){return $p.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $p.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=hu.fromJSON(e);return ae(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return hu._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends zu{constructor(){super("twitter.com")}static credential(e,t){return fi._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return si.credential(t,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(n,e){return ns(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await Or._fromIdTokenResponse(e,r,a),u=NI(r);return new Ar({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=NI(r);return new Ar({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function NI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(n){var e;if(pt(n.app))return Promise.reject(fn(n));const t=It(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ar({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await YR(t,{returnSecureToken:!0}),a=await Ar._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends Mn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Gp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Gp(e,t,r,a)}}function XR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Gp._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL(n,e){const t=Se(n);await Sm(!0,t,e);const{providerUserInfo:r}=await RM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=ZR(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function lE(n,e,t=!1){const r=await Zi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ar._forOperation(n,"link",r)}async function Sm(n,e,t){await Fh(e);const r=ZR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";ae(r.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(n,e,t=!1){const{auth:r}=n;if(pt(r.app))return Promise.reject(fn(r));const a="reauthenticate";try{const o=await Zi(n,XR(r,a,e,n),t);ae(o.idToken,r,"internal-error");const u=bm(o.idToken);ae(u,r,"internal-error");const{sub:d}=u;return ae(n.uid===d,r,"user-mismatch"),Ar._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(n,e,t=!1){if(pt(n.app))return Promise.reject(fn(n));const r="signIn",a=await XR(n,r,e),o=await Ar._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function Rm(n,e){return eC(It(n),e)}async function tC(n,e){const t=Se(n);return await Sm(!1,t,e.providerId),lE(t,e)}async function nC(n,e){return JR(Se(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(n,e){return ns(n,"POST","/v1/accounts:signInWithCustomToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(n,e){if(pt(n.app))return Promise.reject(fn(n));const t=It(n),r=await RL(t,{token:e,returnSecureToken:!0}),a=await Ar._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?uE._fromServerResponse(e,t):"totpInfo"in t?cE._fromServerResponse(e,t):Tn(e,"internal-error")}}class uE extends md{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new uE(t)}}class cE extends md{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new cE(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n,e,t){var r;ae(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),ae(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),ae(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ae(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ae(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(n){const e=It(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DL(n,e,t){const r=It(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Cm(r,a,t),await na(r,a,"getOobCode",hL,"EMAIL_PASSWORD_PROVIDER")}async function xL(n,e,t){await WR(Se(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hE(n),r})}async function PL(n,e){await lL(Se(n),{oobCode:e})}async function rC(n,e){const t=Se(n),r=await WR(t,{oobCode:e}),a=r.requestType;switch(ae(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ae(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ae(r.mfaInfo,t,"internal-error");default:ae(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=md._fromServerResponse(It(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function NL(n,e){const{data:t}=await rC(Se(n),e);return t.email}async function OL(n,e,t){if(pt(n.app))return Promise.reject(fn(n));const r=It(n),u=await na(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&hE(n),p}),d=await Ar._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function kL(n,e,t){return pt(n.app)?Promise.reject(fn(n)):Rm(Se(n),Ea.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VL(n,e,t){const r=It(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){ae(d.handleCodeInApp,r,"argument-error"),d&&Cm(r,u,d)}o(a,t),await na(r,a,"getOobCode",dL,"EMAIL_PASSWORD_PROVIDER")}function ML(n,e){const t=Am.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function LL(n,e,t){if(pt(n.app))return Promise.reject(fn(n));const r=Se(n),a=Ea.credentialWithLink(e,t||Bh());return ae(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Rm(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UL(n,e){return Nt(n,"POST","/v1/accounts:createAuthUri",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL(n,e){const t=sE()?Bh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await UL(Se(n),r);return a||[]}async function BL(n,e){const t=Se(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Cm(t.auth,a,e);const{email:o}=await cL(t.auth,a);o!==n.email&&await n.reload()}async function FL(n,e,t){const r=Se(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Cm(r.auth,o,t);const{email:u}=await fL(r.auth,o);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jL(n,e){return Nt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Se(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Zi(r,jL(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function HL(n,e){const t=Se(n);return pt(t.auth.app)?Promise.reject(fn(t.auth)):iC(t,e,null)}function $L(n,e){return iC(Se(n),null,e)}async function iC(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Zi(n,aL(r,o));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=bm(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new eu(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new KL(o,a);case"github.com":return new QL(o,a);case"google.com":return new WL(o,a);case"twitter.com":return new YL(o,a,n.screenName||null);case"custom":case"anonymous":return new eu(o,null);default:return new eu(o,r,a)}}class eu{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class sC extends eu{constructor(e,t,r,a){super(e,t,r),this.username=a}}class KL extends eu{constructor(e,t){super(e,"facebook.com",t)}}class QL extends sC{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class WL extends eu{constructor(e,t){super(e,"google.com",t)}}class YL extends sC{constructor(e,t,r){super(e,"twitter.com",t,r)}}function XL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:GL(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new go("enroll",e,t)}static _fromMfaPendingCredential(e){return new go("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return go._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return go._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=It(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>md._fromServerResponse(r,d));ae(a.mfaPendingCredential,r,"internal-error");const u=go._fromMfaPendingCredential(a.mfaPendingCredential);return new dE(u,o,async d=>{const p=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const _=await Ar._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(_.user),_;case"reauthenticate":return ae(t.user,r,"internal-error"),Ar._forOperation(t.user,t.operationType,m);default:Tn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ZL(n,e){var t;const r=Se(n),a=e;return ae(e.customData.operationType,r,"argument-error"),ae((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),dE._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:start",Pt(n,e))}function JL(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Pt(n,e))}function e2(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Pt(n,e))}class fE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>md._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new fE(e)}async getSession(){return go._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Zi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Zi(this.user,e2(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const b_=new WeakMap;function t2(n){const e=Se(n);return b_.has(e)||b_.set(e,fE._fromUser(e)),b_.get(e)}const Kp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kp,"1"),this.storage.removeItem(Kp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=1e3,r2=10;class oC extends aC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=HR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);LM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,r2):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},n2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oC.type="LOCAL";const pE=oC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC extends aC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lC.type="SESSION";const Ao=lC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Dm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),p=await i2(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dm.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,p)=>{const m=gd("",20);a.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(_),clearTimeout(o),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function a2(n){Ht().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function o2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function u2(){return mE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="firebaseLocalStorageDb",c2=1,Qp="firebaseLocalStorage",cC="fbase_key";class yd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xm(n,e){return n.transaction([Qp],e?"readwrite":"readonly").objectStore(Qp)}function h2(){const n=indexedDB.deleteDatabase(uC);return new yd(n).toPromise()}function X_(){const n=indexedDB.open(uC,c2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Qp,{keyPath:cC})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Qp)?e(r):(r.close(),await h2(),e(await X_()))})})}async function kI(n,e,t){const r=xm(n,!0).put({[cC]:e,value:t});return new yd(r).toPromise()}async function d2(n,e){const t=xm(n,!1).get(e),r=await new yd(t).toPromise();return r===void 0?null:r.value}function VI(n,e){const t=xm(n,!0).delete(e);return new yd(t).toPromise()}const f2=800,p2=3;class hC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await X_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>p2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dm._getInstance(u2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await o2(),!this.activeServiceWorker)return;this.sender=new s2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await X_();return await kI(e,Kp,"1"),await VI(e,Kp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>d2(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>VI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=xm(a,!1).getAll();return new yd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hC.type="LOCAL";const qh=hC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(n,e){return Nt(n,"POST","/v2/accounts/mfaSignIn:start",Pt(n,e))}function m2(n,e){return Nt(n,"POST","/v2/accounts/mfaSignIn:finalize",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=GR("rcb"),g2=new hd(3e4,6e4);class y2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ht().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return ae(_2(t),e,"argument-error"),this.shouldResolveImmediately(t)&&II(Ht().grecaptcha)?Promise.resolve(Ht().grecaptcha):new Promise((r,a)=>{const o=Ht().setTimeout(()=>{a(Jt(e,"network-request-failed"))},g2.get());Ht()[I_]=()=>{Ht().clearTimeout(o),delete Ht()[I_];const d=Ht().grecaptcha;if(!d||!II(d)){a(Jt(e,"internal-error"));return}const p=d.render;d.render=(m,_)=>{const v=p(m,_);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${HM()}?${Vu({onload:I_,render:"explicit",hl:t})}`;oE(u).catch(()=>{clearTimeout(o),a(Jt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ht().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _2(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class v2{async load(e){return new WM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="recaptcha",E2={theme:"light",type:"image"};let T2=class{constructor(e,t,r=Object.assign({},E2)){this.parameters=r,this.type=bh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=It(e),this.isInvisible=this.parameters.size==="invisible",ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ae(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new v2:new y2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ae(!this.parameters.sitekey,this.auth,"argument-error"),ae(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ht()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){ae(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ae(sE()&&!mE(),this.auth,"internal-error"),await w2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await AM(this.auth);ae(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ae(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function w2(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=bo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function b2(n,e,t){if(pt(n.app))return Promise.reject(fn(n));const r=It(n),a=await Pm(r,e,Se(t));return new gE(a,o=>Rm(r,o))}async function I2(n,e,t){const r=Se(n);await Sm(!1,r,"phone");const a=await Pm(r.auth,e,Se(t));return new gE(a,o=>tC(r,o))}async function A2(n,e,t){const r=Se(n);if(pt(r.auth.app))return Promise.reject(fn(r.auth));const a=await Pm(r.auth,e,Se(t));return new gE(a,o=>nC(r,o))}async function Pm(n,e,t){var r;if(!n._getRecaptchaConfig())try{await tL(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){ae(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await na(n,u,"mfaSmsEnrollment",async(_,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===wh){ae((t==null?void 0:t.type)===bh,_,"argument-error");const w=await A_(_,v,t);return OI(_,w)}return OI(_,v)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{ae(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;ae(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await na(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===wh){ae((t==null?void 0:t.type)===bh,v,"argument-error");const S=await A_(v,w,t);return MI(v,S)}return MI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await na(n,o,"sendVerificationCode",async(m,_)=>{if(_.captchaResponse===wh){ae((t==null?void 0:t.type)===bh,m,"argument-error");const v=await A_(m,_,t);return PI(m,v)}return PI(m,_)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function S2(n,e){const t=Se(n);if(pt(t.auth.app))return Promise.reject(fn(t.auth));await lE(t,e)}async function A_(n,e,t){ae(t.type===bh,n,"argument-error");const r=await t.verify();ae(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So=class Ep{constructor(e){this.providerId=Ep.PROVIDER_ID,this.auth=It(e)}verifyPhoneNumber(e,t){return Pm(this.auth,e,Se(t))}static credential(e,t){return bo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ep.credentialFromTaggedObject(t)}static credentialFromError(e){return Ep.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?bo._fromTokenResponse(t,r):null}};So.PROVIDER_ID="phone";So.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n,e){return e?rr(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends Uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R2(n){return eC(n.auth,new yE(n),n.bypassAuthState)}function C2(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),JR(t,new yE(n),n.bypassAuthState)}async function D2(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),lE(t,new yE(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R2;case"linkViaPopup":case"linkViaRedirect":return D2;case"reauthViaPopup":case"reauthViaRedirect":return C2;default:Tn(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new hd(2e3,1e4);async function P2(n,e,t){if(pt(n.app))return Promise.reject(Jt(n,"operation-not-supported-in-this-environment"));const r=It(n);Lu(n,e,rs);const a=Bo(r,t);return new Gi(r,"signInViaPopup",e,a).executeNotNull()}async function N2(n,e,t){const r=Se(n);if(pt(r.auth.app))return Promise.reject(Jt(r.auth,"operation-not-supported-in-this-environment"));Lu(r.auth,e,rs);const a=Bo(r.auth,t);return new Gi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function O2(n,e,t){const r=Se(n);Lu(r.auth,e,rs);const a=Bo(r.auth,t);return new Gi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Gi extends dC{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x2.get())};e()}}Gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2="pendingRedirect",Ih=new Map;class V2 extends dC{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ih.get(this.auth._key());if(!e){try{const r=await M2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ih.set(this.auth._key(),e)}return this.bypassAuthState||Ih.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M2(n,e){const t=pC(e),r=fC(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function _E(n,e){return fC(n)._set(pC(e),"true")}function L2(){Ih.clear()}function vE(n,e){Ih.set(n._key(),e)}function fC(n){return rr(n._redirectPersistence)}function pC(n){return wo(k2,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(n,e,t){return z2(n,e,t)}async function z2(n,e,t){if(pt(n.app))return Promise.reject(fn(n));const r=It(n);Lu(n,e,rs),await r._initializationPromise;const a=Bo(r,t);return await _E(a,r),a._openRedirect(r,e,"signInViaRedirect")}function B2(n,e,t){return F2(n,e,t)}async function F2(n,e,t){const r=Se(n);if(Lu(r.auth,e,rs),pt(r.auth.app))return Promise.reject(fn(r.auth));await r.auth._initializationPromise;const a=Bo(r.auth,t);await _E(a,r.auth);const o=await mC(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function j2(n,e,t){return q2(n,e,t)}async function q2(n,e,t){const r=Se(n);Lu(r.auth,e,rs),await r.auth._initializationPromise;const a=Bo(r.auth,t);await Sm(!1,r,e.providerId),await _E(a,r.auth);const o=await mC(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function H2(n,e){return await It(n)._initializationPromise,Nm(n,e,!1)}async function Nm(n,e,t=!1){if(pt(n.app))return Promise.reject(fn(n));const r=It(n),a=Bo(r,e),u=await new V2(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function mC(n){const e=gd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=10*60*1e3;class gC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yC(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Jt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$2&&this.cachedEventUids.clear(),this.cachedEventUids.has(LI(e))}saveEventToCache(e){this.cachedEventUids.add(LI(e)),this.lastProcessedEventTime=Date.now()}}function LI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function G2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(n,e={}){return Nt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q2=/^https?/;async function W2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _C(n);for(const t of e)try{if(Y2(t))return}catch{}Tn(n,"unauthorized-domain")}function Y2(n){const e=Bh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!Q2.test(t))return!1;if(K2.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=new hd(3e4,6e4);function UI(){const n=Ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Z2(n){return new Promise((e,t)=>{var r,a,o;function u(){UI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{UI(),t(Jt(n,"network-request-failed"))},timeout:X2.get()})}if(!((a=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=Ht().gapi)===null||o===void 0)&&o.load)u();else{const d=GR("iframefcb");return Ht()[d]=()=>{gapi.load?u():t(Jt(n,"network-request-failed"))},oE(`${GM()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Tp=null,e})}let Tp=null;function J2(n){return Tp=Tp||Z2(n),Tp}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU=new hd(5e3,15e3),tU="__/auth/iframe",nU="emulator/auth/iframe",rU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sU(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?aE(e,nU):`https://${n.config.authDomain}/${tU}`,r={apiKey:e.apiKey,appName:n.name,v:va},a=iU.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Vu(r).slice(1)}`}async function aU(n){const e=await J2(n),t=Ht().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:sU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rU,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Jt(n,"network-request-failed"),d=Ht().setTimeout(()=>{o(u)},eU.get());function p(){Ht().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lU=500,uU=600,cU="_blank",hU="http://localhost";class zI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dU(n,e,t,r=lU,a=uU){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},oU),{width:r.toString(),height:a.toString(),top:o,left:u}),m=bt().toLowerCase();t&&(d=BR(m)?cU:t),UR(m)&&(e=e||hU,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[S,P])=>`${w}${S}=${P},`,"");if(MM(m)&&d!=="_self")return fU(e||"",d),new zI(null);const v=window.open(e||"",d,_);ae(v,n,"popup-blocked");try{v.focus()}catch{}return new zI(v)}function fU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU="__/auth/handler",mU="emulator/auth/handler",gU=encodeURIComponent("fac");async function Z_(n,e,t,r,a,o){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:va,eventId:a};if(e instanceof rs){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",qk(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries(o||{}))u[_]=v}if(e instanceof zu){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),m=p?`#${gU}=${encodeURIComponent(p)}`:"";return`${yU(n)}?${Vu(d).slice(1)}${m}`}function yU({config:n}){return n.emulator?aE(n,mU):`https://${n.authDomain}/${pU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="webStorageSupport";class _U{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ao,this._completeRedirectFn=Nm,this._overrideRedirectResult=vE}async _openPopup(e,t,r,a){var o;Mr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await Z_(e,t,r,Bh(),a);return dU(e,u,gd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await Z_(e,t,r,Bh(),a);return a2(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(Mr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await aU(e),r=new gC(e);return t.register("authEvent",a=>(ae(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(S_,{type:S_},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[S_];u!==void 0&&t(!!u),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return HR()||zR()||fd()}}const vU=_U;class EU{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ai("unexpected MultiFactorSessionType")}}}class EE extends EU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new EE(e)}_finalizeEnroll(e,t,r){return JL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return m2(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class vC{constructor(){}static assertion(e){return EE._fromCredential(e)}}vC.FACTOR_ID="phone";var BI="@firebase/auth",FI="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bU(n){ua(new di("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;ae(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$R(n)},m=new jM(r,a,o,p);return nL(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ua(new di("auth-internal",e=>{const t=It(e.getProvider("auth").getImmediate());return(r=>new TU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(BI,FI,wU(n)),Vr(BI,FI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IU=5*60;Ok("authIdTokenMaxAge");function AU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qM({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Jt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",AU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bU("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SU=2e3;async function RU(n,e,t){var r;const{BuildInfo:a}=Ro();Mr(e.sessionId,"AuthEvent did not contain a session ID");const o=await NU(e.sessionId),u={};return fd()?u.ibi=a.packageName:dd()?u.apn=a.packageName:Tn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,Z_(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function CU(n){const{BuildInfo:e}=Ro(),t={};fd()?t.iosBundleId=e.packageName:dd()?t.androidPackageName=e.packageName:Tn(n,"operation-not-supported-in-this-environment"),await _C(n,t)}function DU(n){const{cordova:e}=Ro();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,VM()?"_blank":"_system","location=yes"),t(a)})})}async function xU(n,e,t){const{cordova:r}=Ro();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function p(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Jt(n,"redirect-cancelled-by-user"))},SU))}function _(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),dd()&&document.addEventListener("visibilitychange",_,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",_,!1),d&&window.clearTimeout(d)}})}finally{a()}}function PU(n){var e,t,r,a,o,u,d,p,m,_;const v=Ro();ae(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ae(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ae(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ae(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ae(typeof((_=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||_===void 0?void 0:_.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function NU(n){const e=OU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function OU(n){if(Mr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kU=20;class VU extends gC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function MU(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:zU(),postBody:null,tenantId:n.tenantId,error:Jt(n,"no-auth-event")}}function LU(n,e){return J_()._set(ev(n),e)}async function jI(n){const e=await J_()._get(ev(n));return e&&await J_()._remove(ev(n)),e}function UU(n,e){var t,r;const a=FU(e);if(a.includes("/__/auth/callback")){const o=wp(a),u=o.firebaseError?BU(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=d?Jt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function zU(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<kU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function J_(){return rr(pE)}function ev(n){return wo("authEvent",n.config.apiKey,n.name)}function BU(n){try{return JSON.parse(n)}catch{return null}}function FU(n){const e=wp(n),t=e.link?decodeURIComponent(e.link):void 0,r=wp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return wp(a).link||a||r||t||n}function wp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Wl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU=500;class qU{constructor(){this._redirectPersistence=Ao,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Nm,this._overrideRedirectResult=vE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new VU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Tn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){PU(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),L2(),await this._originValidation(e);const u=MU(e,r,a);await LU(e,u);const d=await RU(e,u,t),p=await DU(d);return xU(e,o,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Ro(),u=setTimeout(async()=>{await jI(e),t.onEvent(qI())},jU),d=async _=>{clearTimeout(u);const v=await jI(e);let w=null;v&&(_!=null&&_.url)&&(w=UU(v,_.url)),t.onEvent(w||qI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const p=a,m=`${o.packageName.toLowerCase()}://`;Ro().handleOpenURL=async _=>{if(_.toLowerCase().startsWith(m)&&d({url:_}),typeof p=="function")try{p(_)}catch(v){console.error(v)}}}}const HU=qU;function qI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Jt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $U(n,e){It(n)._logFramework(e)}var GU="@firebase/auth-compat",KU="0.5.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QU=1e3;function Ah(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function WU(){return Ah()==="http:"||Ah()==="https:"}function EC(n=bt()){return!!((Ah()==="file:"||Ah()==="ionic:"||Ah()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function YU(){return Zv()||Xv()}function XU(){return fR()&&(document==null?void 0:document.documentMode)===11}function ZU(n=bt()){return/Edge\/\d+/.test(n)}function JU(n=bt()){return XU()||ZU(n)}function TC(){try{const n=self.localStorage,e=gd();if(n)return n.setItem(e,"1"),n.removeItem(e),JU()?Lh():!0}catch{return TE()&&Lh()}return!1}function TE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function R_(){return(WU()||dR()||EC())&&!YU()&&TC()&&!TE()}function wC(){return EC()&&typeof document<"u"}async function e4(){return wC()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},QU);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function t4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={LOCAL:"local",NONE:"none",SESSION:"session"},sh=ae,bC="persistence";function n4(n,e){if(sh(Object.values(nr).includes(e),n,"invalid-persistence-type"),Zv()){sh(e!==nr.SESSION,n,"unsupported-persistence-type");return}if(Xv()){sh(e===nr.NONE,n,"unsupported-persistence-type");return}if(TE()){sh(e===nr.NONE||e===nr.LOCAL&&Lh(),n,"unsupported-persistence-type");return}sh(e===nr.NONE||TC(),n,"unsupported-persistence-type")}async function tv(n){await n._initializationPromise;const e=IC(),t=wo(bC,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function r4(n,e){const t=IC();if(!t)return[];const r=wo(bC,n,e);switch(t.getItem(r)){case nr.NONE:return[cu];case nr.LOCAL:return[qh,Ao];case nr.SESSION:return[Ao];default:return[]}}function IC(){var n;try{return((n=t4())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=ae;class Zs{constructor(){this.browserResolver=rr(vU),this.cordovaResolver=rr(HU),this.underlyingResolver=null,this._redirectPersistence=Ao,this._completeRedirectFn=Nm,this._overrideRedirectResult=vE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return wC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return i4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await e4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(n){return n.unwrap()}function s4(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(n){return SC(n)}function o4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new l4(n,ZL(n,e))}else if(r){const a=SC(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function SC(n){const{_tokenResponse:e}=n instanceof Mn?n.customData:n;if(!e)return null;if(!(n instanceof Mn)&&"temporaryProof"in e&&"phoneNumber"in e)return So.credentialFromResult(n);const t=e.providerId;if(!t||t===rh.PASSWORD)return null;let r;switch(t){case rh.GOOGLE:r=ri;break;case rh.FACEBOOK:r=ni;break;case rh.GITHUB:r=ii;break;case rh.TWITTER:r=si;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?hu._create(t,d):fi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Jl(t).credential({idToken:a,accessToken:o,rawNonce:p})}return n instanceof Mn?r.credentialFromError(n):r.credentialFromResult(n)}function jn(n,e){return e.catch(t=>{throw t instanceof Mn&&o4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:a4(t),additionalUserInfo:XL(t),user:Om.getOrCreate(a)}})}async function nv(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>jn(n,t.confirm(r))}}class l4{constructor(e,t){this.resolver=t,this.auth=s4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return jn(AC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Om=class mh{constructor(e){this._delegate=e,this.multiFactor=t2(e)}static getOrCreate(e){return mh.USER_MAP.has(e)||mh.USER_MAP.set(e,new mh(e)),mh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return jn(this.auth,tC(this._delegate,e))}async linkWithPhoneNumber(e,t){return nv(this.auth,I2(this._delegate,e,t))}async linkWithPopup(e){return jn(this.auth,O2(this._delegate,e,Zs))}async linkWithRedirect(e){return await tv(It(this.auth)),j2(this._delegate,e,Zs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return jn(this.auth,nC(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return nv(this.auth,A2(this._delegate,e,t))}reauthenticateWithPopup(e){return jn(this.auth,N2(this._delegate,e,Zs))}async reauthenticateWithRedirect(e){return await tv(It(this.auth)),B2(this._delegate,e,Zs)}sendEmailVerification(e){return BL(this._delegate,e)}async unlink(e){return await SL(this._delegate,e),this}updateEmail(e){return HL(this._delegate,e)}updatePassword(e){return $L(this._delegate,e)}updatePhoneNumber(e){return S2(this._delegate,e)}updateProfile(e){return qL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return FL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Om.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=ae;class rv{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ah(r,"invalid-api-key",{appName:e.name}),ah(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Zs:void 0;this._delegate=t.initialize({options:{persistence:u4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(mM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Om.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){rL(this._delegate,e,t)}applyActionCode(e){return PL(this._delegate,e)}checkActionCode(e){return rC(this._delegate,e)}confirmPasswordReset(e,t){return xL(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return jn(this._delegate,OL(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return zL(this._delegate,e)}isSignInWithEmailLink(e){return ML(this._delegate,e)}async getRedirectResult(){ah(R_(),this._delegate,"operation-not-supported-in-this-environment");const e=await H2(this._delegate,Zs);return e?jn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){$U(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=HI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=HI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return VL(this._delegate,e,t)}sendPasswordResetEmail(e,t){return DL(this._delegate,e,t||void 0)}async setPersistence(e){n4(this._delegate,e);let t;switch(e){case nr.SESSION:t=Ao;break;case nr.LOCAL:t=await rr(qh)._isAvailable()?qh:pE;break;case nr.NONE:t=cu;break;default:return Tn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return jn(this._delegate,AL(this._delegate))}signInWithCredential(e){return jn(this._delegate,Rm(this._delegate,e))}signInWithCustomToken(e){return jn(this._delegate,CL(this._delegate,e))}signInWithEmailAndPassword(e,t){return jn(this._delegate,kL(this._delegate,e,t))}signInWithEmailLink(e,t){return jn(this._delegate,LL(this._delegate,e,t))}signInWithPhoneNumber(e,t){return nv(this._delegate,b2(this._delegate,e,t))}async signInWithPopup(e){return ah(R_(),this._delegate,"operation-not-supported-in-this-environment"),jn(this._delegate,P2(this._delegate,e,Zs))}async signInWithRedirect(e){return ah(R_(),this._delegate,"operation-not-supported-in-this-environment"),await tv(this._delegate),U2(this._delegate,e,Zs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return NL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}rv.Persistence=nr;function HI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Om.getOrCreate(u)),error:e,complete:t}}function u4(n,e){const t=r4(n,e);if(typeof self<"u"&&!t.includes(qh)&&t.push(qh),typeof window<"u")for(const r of[pE,Ao])t.includes(r)||t.push(r);return t.includes(cu)||t.push(cu),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{static credential(e,t){return So.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new So(AC(Mu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}wE.PHONE_SIGN_IN_METHOD=So.PHONE_SIGN_IN_METHOD;wE.PROVIDER_ID=So.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=ae;class h4{constructor(e,t,r=Mu.app()){var a;c4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new T2(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4="auth-compat";function f4(n){n.INTERNAL.registerComponent(new di(d4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new rv(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ml.EMAIL_SIGNIN,PASSWORD_RESET:Ml.PASSWORD_RESET,RECOVER_EMAIL:Ml.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ml.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ml.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ml.VERIFY_EMAIL}},EmailAuthProvider:Ea,FacebookAuthProvider:ni,GithubAuthProvider:ii,GoogleAuthProvider:ri,OAuthProvider:Jl,SAMLAuthProvider:$p,PhoneAuthProvider:wE,PhoneMultiFactorGenerator:vC,RecaptchaVerifier:h4,TwitterAuthProvider:si,Auth:rv,AuthCredential:Uu,Error:Mn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(GU,KU)}f4(Mu);var $I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,RC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(x,k,B){for(var N=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)N[Ot-2]=arguments[Ot];return R.prototype[k].apply(x,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var x=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)x[k]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(k=0;16>k;++k)x[k]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],k=D.g[2];var B=D.g[3],N=R+(B^A&(k^B))+x[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=B+(k^R&(A^k))+x[1]+3905402710&4294967295,B=R+(N<<12&4294967295|N>>>20),N=k+(A^B&(R^A))+x[2]+606105819&4294967295,k=B+(N<<17&4294967295|N>>>15),N=A+(R^k&(B^R))+x[3]+3250441966&4294967295,A=k+(N<<22&4294967295|N>>>10),N=R+(B^A&(k^B))+x[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(k^R&(A^k))+x[5]+1200080426&4294967295,B=R+(N<<12&4294967295|N>>>20),N=k+(A^B&(R^A))+x[6]+2821735955&4294967295,k=B+(N<<17&4294967295|N>>>15),N=A+(R^k&(B^R))+x[7]+4249261313&4294967295,A=k+(N<<22&4294967295|N>>>10),N=R+(B^A&(k^B))+x[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(k^R&(A^k))+x[9]+2336552879&4294967295,B=R+(N<<12&4294967295|N>>>20),N=k+(A^B&(R^A))+x[10]+4294925233&4294967295,k=B+(N<<17&4294967295|N>>>15),N=A+(R^k&(B^R))+x[11]+2304563134&4294967295,A=k+(N<<22&4294967295|N>>>10),N=R+(B^A&(k^B))+x[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(k^R&(A^k))+x[13]+4254626195&4294967295,B=R+(N<<12&4294967295|N>>>20),N=k+(A^B&(R^A))+x[14]+2792965006&4294967295,k=B+(N<<17&4294967295|N>>>15),N=A+(R^k&(B^R))+x[15]+1236535329&4294967295,A=k+(N<<22&4294967295|N>>>10),N=R+(k^B&(A^k))+x[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^k&(R^A))+x[6]+3225465664&4294967295,B=R+(N<<9&4294967295|N>>>23),N=k+(R^A&(B^R))+x[11]+643717713&4294967295,k=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(k^B))+x[0]+3921069994&4294967295,A=k+(N<<20&4294967295|N>>>12),N=R+(k^B&(A^k))+x[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^k&(R^A))+x[10]+38016083&4294967295,B=R+(N<<9&4294967295|N>>>23),N=k+(R^A&(B^R))+x[15]+3634488961&4294967295,k=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(k^B))+x[4]+3889429448&4294967295,A=k+(N<<20&4294967295|N>>>12),N=R+(k^B&(A^k))+x[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^k&(R^A))+x[14]+3275163606&4294967295,B=R+(N<<9&4294967295|N>>>23),N=k+(R^A&(B^R))+x[3]+4107603335&4294967295,k=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(k^B))+x[8]+1163531501&4294967295,A=k+(N<<20&4294967295|N>>>12),N=R+(k^B&(A^k))+x[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^k&(R^A))+x[2]+4243563512&4294967295,B=R+(N<<9&4294967295|N>>>23),N=k+(R^A&(B^R))+x[7]+1735328473&4294967295,k=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(k^B))+x[12]+2368359562&4294967295,A=k+(N<<20&4294967295|N>>>12),N=R+(A^k^B)+x[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^k)+x[8]+2272392833&4294967295,B=R+(N<<11&4294967295|N>>>21),N=k+(B^R^A)+x[11]+1839030562&4294967295,k=B+(N<<16&4294967295|N>>>16),N=A+(k^B^R)+x[14]+4259657740&4294967295,A=k+(N<<23&4294967295|N>>>9),N=R+(A^k^B)+x[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^k)+x[4]+1272893353&4294967295,B=R+(N<<11&4294967295|N>>>21),N=k+(B^R^A)+x[7]+4139469664&4294967295,k=B+(N<<16&4294967295|N>>>16),N=A+(k^B^R)+x[10]+3200236656&4294967295,A=k+(N<<23&4294967295|N>>>9),N=R+(A^k^B)+x[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^k)+x[0]+3936430074&4294967295,B=R+(N<<11&4294967295|N>>>21),N=k+(B^R^A)+x[3]+3572445317&4294967295,k=B+(N<<16&4294967295|N>>>16),N=A+(k^B^R)+x[6]+76029189&4294967295,A=k+(N<<23&4294967295|N>>>9),N=R+(A^k^B)+x[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^k)+x[12]+3873151461&4294967295,B=R+(N<<11&4294967295|N>>>21),N=k+(B^R^A)+x[15]+530742520&4294967295,k=B+(N<<16&4294967295|N>>>16),N=A+(k^B^R)+x[2]+3299628645&4294967295,A=k+(N<<23&4294967295|N>>>9),N=R+(k^(A|~B))+x[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~k))+x[7]+1126891415&4294967295,B=R+(N<<10&4294967295|N>>>22),N=k+(R^(B|~A))+x[14]+2878612391&4294967295,k=B+(N<<15&4294967295|N>>>17),N=A+(B^(k|~R))+x[5]+4237533241&4294967295,A=k+(N<<21&4294967295|N>>>11),N=R+(k^(A|~B))+x[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~k))+x[3]+2399980690&4294967295,B=R+(N<<10&4294967295|N>>>22),N=k+(R^(B|~A))+x[10]+4293915773&4294967295,k=B+(N<<15&4294967295|N>>>17),N=A+(B^(k|~R))+x[1]+2240044497&4294967295,A=k+(N<<21&4294967295|N>>>11),N=R+(k^(A|~B))+x[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~k))+x[15]+4264355552&4294967295,B=R+(N<<10&4294967295|N>>>22),N=k+(R^(B|~A))+x[6]+2734768916&4294967295,k=B+(N<<15&4294967295|N>>>17),N=A+(B^(k|~R))+x[13]+1309151649&4294967295,A=k+(N<<21&4294967295|N>>>11),N=R+(k^(A|~B))+x[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~k))+x[11]+3174756917&4294967295,B=R+(N<<10&4294967295|N>>>22),N=k+(R^(B|~A))+x[2]+718787259&4294967295,k=B+(N<<15&4294967295|N>>>17),N=A+(B^(k|~R))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+k&4294967295,D.g[3]=D.g[3]+B&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,x=this.B,k=this.h,B=0;B<R;){if(k==0)for(;B<=A;)a(this,D,B),B+=this.blockSize;if(typeof D=="string"){for(;B<R;)if(x[k++]=D.charCodeAt(B++),k==this.blockSize){a(this,x),k=0;break}}else for(;B<R;)if(x[k++]=D[B++],k==this.blockSize){a(this,x),k=0;break}}this.h=k,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var x=0;32>x;x+=8)D[A++]=this.g[R]>>>x&255;return D};function o(D,R){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],x=!0,k=D.length-1;0<=k;k--){var B=D[k]|0;x&&B==R||(A[k]=B,x=!1)}this.g=A}var d={};function p(D){return-128<=D&&128>D?o(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return M(m(-D));for(var R=[],A=1,x=0;D>=A;x++)R[x]=D/A|0,A*=4294967296;return new u(R,0)}function _(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return M(_(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(R,8)),x=v,k=0;k<D.length;k+=8){var B=Math.min(8,D.length-k),N=parseInt(D.substring(k,k+B),R);8>B?(B=m(Math.pow(R,B)),x=x.j(B).add(m(N))):(x=x.j(A),x=x.add(m(N)))}return x}var v=p(0),w=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(U(this))return-M(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var x=this.i(A);D+=(0<=x?x:4294967296+x)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(U(this))return"-"+M(this).toString(D);for(var R=m(Math.pow(D,6)),A=this,x="";;){var k=oe(A,R).g;A=H(A,k.j(R));var B=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=k,P(A))return B+x;for(;6>B.length;)B="0"+B;x=B+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function U(D){return D.h==-1}n.l=function(D){return D=H(this,D),U(D)?-1:P(D)?0:1};function M(D){for(var R=D.g.length,A=[],x=0;x<R;x++)A[x]=~D.g[x];return new u(A,~D.h).add(w)}n.abs=function(){return U(this)?M(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0,k=0;k<=R;k++){var B=x+(this.i(k)&65535)+(D.i(k)&65535),N=(B>>>16)+(this.i(k)>>>16)+(D.i(k)>>>16);x=N>>>16,B&=65535,N&=65535,A[k]=N<<16|B}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(D,R){return D.add(M(R))}n.j=function(D){if(P(this)||P(D))return v;if(U(this))return U(D)?M(this).j(M(D)):M(M(this).j(D));if(U(D))return M(this.j(M(D)));if(0>this.l(S)&&0>D.l(S))return m(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],x=0;x<2*R;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<D.g.length;k++){var B=this.i(x)>>>16,N=this.i(x)&65535,Ot=D.i(k)>>>16,At=D.i(k)&65535;A[2*x+2*k]+=N*At,X(A,2*x+2*k),A[2*x+2*k+1]+=B*At,X(A,2*x+2*k+1),A[2*x+2*k+1]+=N*Ot,X(A,2*x+2*k+1),A[2*x+2*k+2]+=B*Ot,X(A,2*x+2*k+2)}for(x=0;x<R;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=R;x<2*R;x++)A[x]=0;return new u(A,0)};function X(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function K(D,R){this.g=D,this.h=R}function oe(D,R){if(P(R))throw Error("division by zero");if(P(D))return new K(v,v);if(U(D))return R=oe(M(D),R),new K(M(R.g),M(R.h));if(U(R))return R=oe(D,M(R)),new K(M(R.g),R.h);if(30<D.g.length){if(U(D)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,x=R;0>=x.l(D);)A=se(A),x=se(x);var k=le(A,1),B=le(x,1);for(x=le(x,2),A=le(A,2);!P(x);){var N=B.add(x);0>=N.l(D)&&(k=k.add(A),B=N),x=le(x,1),A=le(A,1)}return R=H(D,k.j(R)),new K(k,R)}for(k=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),B=m(A),N=B.j(R);U(N)||0<N.l(D);)A-=x,B=m(A),N=B.j(R);P(B)&&(B=w),k=k.add(B),D=H(D,N)}return new K(k,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)&D.i(x);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)|D.i(x);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)^D.i(x);return new u(A,this.h^D.h)};function se(D){for(var R=D.g.length+1,A=[],x=0;x<R;x++)A[x]=D.i(x)<<1|D.i(x-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var x=D.g.length-A,k=[],B=0;B<x;B++)k[B]=0<R?D.i(B+A)>>>R|D.i(B+A+1)<<32-R:D.i(B+A);return new u(k,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,RC=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=_,ra=u}).apply(typeof $I<"u"?$I:typeof self<"u"?self:typeof window<"u"?window:{});var ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var CC,gh,DC,bp,iv,xC,PC,NC;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof ip=="object"&&ip];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],y=y(I),y!=I&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function o(h,y){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var W=E++;return{value:y(W,h[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return o(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function m(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function _(h,y,E){return h.call.apply(h.bind,arguments)}function v(h,y,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(y,F)}}return function(){return h.apply(y,arguments)}}function w(h,y,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:v,w.apply(null,arguments)}function S(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function P(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,W){for(var ue=Array(arguments.length-2),He=2;He<arguments.length;He++)ue[He-2]=arguments[He];return y.prototype[F].apply(I,ue)}}function U(h){const y=h.length;if(0<y){const E=Array(y);for(let I=0;I<y;I++)E[I]=h[I];return E}return[]}function M(h,y){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const F=h.length||0,W=I.length||0;h.length=F+W;for(let ue=0;ue<W;ue++)h[F+ue]=I[ue]}else h.push(I)}}class H{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function X(h){return/^[\s\xa0]*$/.test(h)}function K(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var se=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function le(h,y,E){for(const I in h)y.call(E,h[I],I,h)}function D(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function R(h){const y={};for(const E in h)y[E]=h[E];return y}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(h,y){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let W=0;W<A.length;W++)E=A[W],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function k(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function B(h){d.setTimeout(()=>{throw h},0)}function N(){var h=ke;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Ot{constructor(){this.h=this.g=null}add(y,E){const I=At.get();I.set(y,E),this.h?this.h.next=I:this.g=I,this.h=I}}var At=new H(()=>new he,h=>h.reset());class he{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,we=!1,ke=new Ot,O=()=>{const h=d.Promise.resolve(void 0);Ae=()=>{h.then(ie)}};var ie=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){B(E)}var y=At;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}we=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function xe(h,y){if(pe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(se){e:{try{oe(y.nodeName);var F=!0;break e}catch{}F=!1}F||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:De[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}P(xe,pe);var De={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Le=0;function Je(h,y,E,I,F){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!I,this.ha=F,this.key=++Le,this.da=this.fa=!1}function Qe(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function zt(h){this.src=h,this.g={},this.h=0}zt.prototype.add=function(h,y,E,I,F){var W=h.toString();h=this.g[W],h||(h=this.g[W]=[],this.h++);var ue=sr(h,y,I,F);return-1<ue?(y=h[ue],E||(y.fa=!1)):(y=new Je(y,this.src,W,!!I,F),y.fa=E,h.push(y)),y};function tn(h,y){var E=y.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,y,void 0),W;(W=0<=F)&&Array.prototype.splice.call(I,F,1),W&&(Qe(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function sr(h,y,E,I){for(var F=0;F<h.length;++F){var W=h[F];if(!W.da&&W.listener==y&&W.capture==!!E&&W.ha==I)return F}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),us={};function vi(h,y,E,I,F){if(Array.isArray(y)){for(var W=0;W<y.length;W++)vi(h,y[W],E,I,F);return null}return E=Nd(E),h&&h[ct]?h.K(y,E,m(I)?!!I.capture:!1,F):Qu(h,y,E,!1,I,F)}function Qu(h,y,E,I,F,W){if(!y)throw Error("Invalid event type");var ue=m(F)?!!F.capture:!!F,He=Wu(h);if(He||(h[ls]=He=new zt(h)),E=He.add(y,E,I,ue,W),E.proxy)return E;if(I=$o(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)fe||(F=ue),F===void 0&&(F=!1),h.addEventListener(y.toString(),I,F);else if(h.attachEvent)h.attachEvent(Ko(y.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function $o(){function h(E){return y.call(h.src,h.listener,E)}const y=og;return h}function Go(h,y,E,I,F){if(Array.isArray(y))for(var W=0;W<y.length;W++)Go(h,y[W],E,I,F);else I=m(I)?!!I.capture:!!I,E=Nd(E),h&&h[ct]?(h=h.i,y=String(y).toString(),y in h.g&&(W=h.g[y],E=sr(W,E,I,F),-1<E&&(Qe(W[E]),Array.prototype.splice.call(W,E,1),W.length==0&&(delete h.g[y],h.h--)))):h&&(h=Wu(h))&&(y=h.g[y.toString()],h=-1,y&&(h=sr(y,E,I,F)),(E=-1<h?y[h]:null)&&Sa(E))}function Sa(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[ct])tn(y.i,h);else{var E=h.type,I=h.proxy;y.removeEventListener?y.removeEventListener(E,I,h.capture):y.detachEvent?y.detachEvent(Ko(E),I):y.addListener&&y.removeListener&&y.removeListener(I),(E=Wu(y))?(tn(E,h),E.h==0&&(E.src=null,y[ls]=null)):Qe(h)}}}function Ko(h){return h in us?us[h]:us[h]="on"+h}function og(h,y){if(h.da)h=!0;else{y=new xe(y,this);var E=h.listener,I=h.ha||h.src;h.fa&&Sa(h),h=E.call(I,y)}return h}function Wu(h){return h=h[ls],h instanceof zt?h:null}var zn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nd(h){return typeof h=="function"?h:(h[zn]||(h[zn]=function(y){return h.handleEvent(y)}),h[zn])}function Gt(){ge.call(this),this.i=new zt(this),this.M=this,this.F=null}P(Gt,ge),Gt.prototype[ct]=!0,Gt.prototype.removeEventListener=function(h,y,E,I){Go(this,h,y,E,I)};function nn(h,y){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=y.type||y,typeof y=="string")y=new pe(y,h);else if(y instanceof pe)y.target=y.target||h;else{var F=y;y=new pe(I,h),x(y,F)}if(F=!0,E)for(var W=E.length-1;0<=W;W--){var ue=y.g=E[W];F=Ei(ue,I,!0,y)&&F}if(ue=y.g=h,F=Ei(ue,I,!0,y)&&F,F=Ei(ue,I,!1,y)&&F,E)for(W=0;W<E.length;W++)ue=y.g=E[W],F=Ei(ue,I,!1,y)&&F}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],I=0;I<E.length;I++)Qe(E[I]);delete h.g[y],h.h--}}this.F=null},Gt.prototype.K=function(h,y,E,I){return this.i.add(String(h),y,!1,E,I)},Gt.prototype.L=function(h,y,E,I){return this.i.add(String(h),y,!0,E,I)};function Ei(h,y,E,I){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var F=!0,W=0;W<y.length;++W){var ue=y[W];if(ue&&!ue.da&&ue.capture==E){var He=ue.listener,Qt=ue.ha||ue.src;ue.fa&&tn(h.i,ue),F=He.call(Qt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Od(h,y,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function Yu(h){h.g=Od(()=>{h.g=null,h.i&&(h.i=!1,Yu(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class lg extends ge{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Yu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ra(h){ge.call(this),this.h=h,this.g={}}P(Ra,ge);var cs=[];function wn(h){le(h.g,function(y,E){this.g.hasOwnProperty(E)&&Sa(y)},h),h.g={}}Ra.prototype.N=function(){Ra.aa.N.call(this),wn(this)},Ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xu=d.JSON.stringify,Lr=d.JSON.parse,Dn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Zu(){}Zu.prototype.h=null;function kd(h){return h.h||(h.h=h.i())}function Vd(){}var Ur={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hs(){pe.call(this,"d")}P(hs,pe);function Sr(){pe.call(this,"c")}P(Sr,pe);var ar={},ds=null;function Qo(){return ds=ds||new Gt}ar.La="serverreachability";function Ju(h){pe.call(this,ar.La,h)}P(Ju,pe);function fs(h){const y=Qo();nn(y,new Ju(y))}ar.STAT_EVENT="statevent";function Wo(h,y){pe.call(this,ar.STAT_EVENT,h),this.stat=y}P(Wo,pe);function kt(h){const y=Qo();nn(y,new Wo(y,h))}ar.Ma="timingevent";function Md(h,y){pe.call(this,ar.Ma,h),this.size=y}P(Md,pe);function ps(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function Ld(h,y,E,I,F,W){h.info(function(){if(h.g)if(W)for(var ue="",He=W.split("&"),Qt=0;Qt<He.length;Qt++){var $e=He[Qt].split("=");if(1<$e.length){var an=$e[0];$e=$e[1];var Wt=an.split("_");ue=2<=Wt.length&&Wt[1]=="type"?ue+(an+"="+$e+"&"):ue+(an+"=redacted&")}}else ue=null;else ue=W;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+y+`
`+E+`
`+ue})}function Ud(h,y,E,I,F,W,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+y+`
`+E+`
`+W+" "+ue})}function gs(h,y,E,I){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+rn(h,E)+(I?" "+I:"")})}function zr(h,y){h.info(function(){return"TIMEOUT: "+y})}ms.prototype.info=function(){};function rn(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ue=1;ue<F.length;ue++)F[ue]=""}}}}return Xu(E)}catch{return y}}var Kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function Yo(){}P(Yo,Zu),Yo.prototype.g=function(){return new XMLHttpRequest},Yo.prototype.i=function(){return{}},Ca=new Yo;function Br(h,y,E,I){this.j=h,this.i=y,this.l=E,this.R=I||1,this.U=new Ra(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ec}function ec(){this.i=null,this.g="",this.h=!1}var ys={},Da={};function Rr(h,y,E){h.L=1,h.v=Na(St(y)),h.m=E,h.P=!0,wi(h,null)}function wi(h,y){h.F=Date.now(),_t(h),h.A=St(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),Ai(E.i,"t",I),h.C=0,E=h.j.J,h.h=new ec,h.g=Zd(h.j,E?y:null,!h.m),0<h.O&&(h.M=new lg(w(h.Y,h,h.g),h.O)),y=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(cs[0]=F.toString()),F=cs);for(var W=0;W<F.length;W++){var ue=vi(E,F[W],I||y.handleEvent,!1,y.h||y);if(!ue)break;y.g[ue.key]=ue}y=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),fs(),Ld(h.i,h.u,h.A,h.l,h.R,h.m)}Br.prototype.ca=function(h){h=h.target;const y=this.M;y&&hr(h)==3?y.j():this.Y(h)},Br.prototype.Y=function(h){try{if(h==this.g)e:{const Wt=hr(this.g);var y=this.g.Ba();const Di=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Hd(this.g)))){this.J||Wt!=4||y==7||(y==8||0>=Di?fs(3):fs(2)),Xo(this);var E=this.g.Z();this.X=E;t:if(_s(this)){var I=Hd(this.g);h="";var F=I.length,W=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),Kn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(y=0;y<F;y++)this.h.h=!0,h+=this.h.i.decode(I[y],{stream:!(W&&y==F-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Ud(this.i,this.u,this.A,this.l,this.R,Wt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var He,Qt=this.g;if((He=Qt.g?Qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(He)){var $e=He;break t}}$e=null}if(E=$e)gs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qn(this,E);else{this.o=!1,this.s=3,kt(12),Bn(this),Kn(this);break e}}if(this.P){E=!0;let pn;for(;!this.J&&this.C<ue.length;)if(pn=vs(this,ue),pn==Da){Wt==4&&(this.s=4,kt(14),E=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==ys){this.s=4,kt(15),gs(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else gs(this.i,this.l,pn,null),Qn(this,pn);if(_s(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||ue.length!=0||this.h.h||(this.s=1,kt(16),E=!1),this.o=this.o&&E,!E)gs(this.i,this.l,ue,"[Invalid Chunked Response]"),Bn(this),Kn(this);else if(0<ue.length&&!this.W){this.W=!0;var an=this.j;an.g==this&&an.ba&&!an.M&&(an.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),za(an),an.M=!0,kt(11))}}else gs(this.i,this.l,ue,null),Qn(this,ue);Wt==4&&Bn(this),this.o&&!this.J&&(Wt==4?Wd(this.j,this):(this.o=!1,_t(this)))}else pg(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Bn(this),Kn(this)}}}catch{}finally{}};function _s(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function vs(h,y){var E=h.C,I=y.indexOf(`
`,E);return I==-1?Da:(E=Number(y.substring(E,I)),isNaN(E)?ys:(I+=1,I+E>y.length?Da:(y=y.slice(I,I+E),h.C=I+E,y)))}Br.prototype.cancel=function(){this.J=!0,Bn(this)};function _t(h){h.S=Date.now()+h.I,tc(h,h.I)}function tc(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ps(w(h.ba,h),y)}function Xo(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Br.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(zr(this.i,this.A),this.L!=2&&(fs(),kt(17)),Bn(this),this.s=2,Kn(this)):tc(this,this.S-h)};function Kn(h){h.j.G==0||h.J||Wd(h.j,h)}function Bn(h){Xo(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,wn(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Qn(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||Es(E.h,h))){if(!h.K&&Es(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(y)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)ol(E),sl(E);else break e;dc(E),kt(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ps(w(E.Za,E),6e3));if(1>=zd(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Ci(E,11)}else if((h.K||E.g==h)&&ol(E),!X(y))for(F=E.Da.g.parse(y),y=0;y<F.length;y++){let $e=F[y];if(E.T=$e[0],$e=$e[1],E.G==2)if($e[0]=="c"){E.K=$e[1],E.ia=$e[2];const an=$e[3];an!=null&&(E.la=an,E.j.info("VER="+E.la));const Wt=$e[4];Wt!=null&&(E.Aa=Wt,E.j.info("SVER="+E.Aa));const Di=$e[5];Di!=null&&typeof Di=="number"&&0<Di&&(I=1.5*Di,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const pn=h.g;if(pn){const Kr=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kr){var W=I.h;W.g||Kr.indexOf("spdy")==-1&&Kr.indexOf("quic")==-1&&Kr.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Ts(W,W.h),W.h=null))}if(I.D){const pc=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(I.ya=pc,We(I.I,I.D,pc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=Xd(I,I.J?I.ia:null,I.W),ue.K){or(I.h,ue);var He=ue,Qt=I.L;Qt&&(He.I=Qt),He.B&&(Xo(He),_t(He)),I.g=ue}else Kd(I);0<E.i.length&&al(E)}else $e[0]!="stop"&&$e[0]!="close"||Ci(E,7);else E.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?Ci(E,7):cc(E):$e[0]!="noop"&&E.l&&E.l.ta($e),E.v=0)}}fs(4)}catch{}}var ug=class{constructor(h,y){this.g=h,this.map=y}};function nc(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rc(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function zd(h){return h.h?1:h.g?h.g.size:0}function Es(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function Ts(h,y){h.g?h.g.add(y):h.h=y}function or(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}nc.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function xn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return U(h.i)}function Bd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,I=0;I<E;I++)y.push(h[I]);return y}y=[],E=0;for(I in h)y[E++]=h[I];return y}function cg(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const I in h)y[E++]=I;return y}}}function xa(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=cg(h),I=Bd(h),F=I.length,W=0;W<F;W++)y.call(void 0,I[W],E&&E[W],h)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zo(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var W=h[E].substring(0,I);F=h[E].substring(I+1)}else W=h[E];y(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function bi(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof bi){this.h=h.h,ws(this,h.j),this.o=h.o,this.g=h.g,Pa(this,h.s),this.l=h.l;var y=h.i,E=new Fr;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Jo(this,E),this.m=h.m}else h&&(y=String(h).match(ic))?(this.h=!1,ws(this,y[1]||"",!0),this.o=bs(y[2]||""),this.g=bs(y[3]||"",!0),Pa(this,y[4]),this.l=bs(y[5]||"",!0),Jo(this,y[6]||"",!0),this.m=bs(y[7]||"")):(this.h=!1,this.i=new Fr(null,this.h))}bi.prototype.toString=function(){var h=[],y=this.j;y&&h.push(lr(y,sc,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(lr(y,sc,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(lr(E,E.charAt(0)=="/"?ac:Fd,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",lr(E,fg)),h.join("")};function St(h){return new bi(h)}function ws(h,y,E){h.j=E?bs(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Pa(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Jo(h,y,E){y instanceof Fr?(h.i=y,oc(h.i,h.h)):(E||(y=lr(y,dg)),h.i=new Fr(y,h.h))}function We(h,y,E){h.i.set(y,E)}function Na(h){return We(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function bs(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function lr(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,hg),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function hg(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var sc=/[#\/\?@]/g,Fd=/[#\?:]/g,ac=/[#\?]/g,dg=/[#\?@]/g,fg=/#/g;function Fr(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function ur(h){h.g||(h.g=new Map,h.h=0,h.i&&Zo(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}n=Fr.prototype,n.add=function(h,y){ur(this),this.i=null,h=Si(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function el(h,y){ur(h),y=Si(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Ii(h,y){return ur(h),y=Si(h,y),h.g.has(y)}n.forEach=function(h,y){ur(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(y,F,I,this)},this)},this)},n.na=function(){ur(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let I=0;I<y.length;I++){const F=h[I];for(let W=0;W<F.length;W++)E.push(y[I])}return E},n.V=function(h){ur(this);let y=[];if(typeof h=="string")Ii(this,h)&&(y=y.concat(this.g.get(Si(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},n.set=function(h,y){return ur(this),this.i=null,h=Si(this,h),Ii(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function Ai(h,y,E){el(h,y),0<E.length&&(h.i=null,h.g.set(Si(h,y),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var I=y[E];const W=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var F=W;ue[I]!==""&&(F+="="+encodeURIComponent(String(ue[I]))),h.push(F)}}return this.i=h.join("&")};function Si(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function oc(h,y){y&&!h.j&&(ur(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(el(this,I),Ai(this,F,E))},h)),h.j=y}function jd(h,y){const E=new ms;if(d.Image){const I=new Image;I.onload=S(cr,E,"TestLoadImage: loaded",!0,y,I),I.onerror=S(cr,E,"TestLoadImage: error",!1,y,I),I.onabort=S(cr,E,"TestLoadImage: abort",!1,y,I),I.ontimeout=S(cr,E,"TestLoadImage: timeout",!1,y,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else y(!1)}function Oa(h,y){const E=new ms,I=new AbortController,F=setTimeout(()=>{I.abort(),cr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:I.signal}).then(W=>{clearTimeout(F),W.ok?cr(E,"TestPingServer: ok",!0,y):cr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),cr(E,"TestPingServer: error",!1,y)})}function cr(h,y,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function ka(){this.g=new Dn}function jr(h,y,E){const I=E||"";try{xa(h,function(F,W){let ue=F;m(F)&&(ue=Xu(F)),y.push(I+W+"="+encodeURIComponent(ue))})}catch(F){throw y.push(I+"type="+encodeURIComponent("_badmap")),F}}function Is(h){this.l=h.Ub||null,this.j=h.eb||!1}P(Is,Zu),Is.prototype.g=function(){return new Ri(this.l,this.j)},Is.prototype.i=function(h){return function(){return h}}({});function Ri(h,y){Gt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ri,Gt),n=Ri.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,Hr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Hr(this)),this.g&&(this.readyState=3,Hr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lc(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function lc(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?qr(this):Hr(this),this.readyState==3&&lc(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,qr(this))},n.Qa=function(h){this.g&&(this.response=h,qr(this))},n.ga=function(){this.g&&qr(this)};function qr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Hr(h)}n.setRequestHeader=function(h,y){this.u.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function Hr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function uc(h){let y="";return le(h,function(E,I){y+=I,y+=":",y+=E,y+=`\r
`}),y}function sn(h,y,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=uc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):We(h,y,E))}function et(h){Gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(et,Gt);var tl=/^https?$/i,Va=["POST","PUT"];n=et.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,y,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?kd(this.o):kd(Ca),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(W){qd(this,W);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())E.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(W=>W.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Va,y,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ue]of E)this.g.setRequestHeader(W,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ma(this),this.u=!0,this.g.send(h),this.u=!1}catch(W){qd(this,W)}};function qd(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,nl(h),$r(h)}function nl(h){h.A||(h.A=!0,nn(h,"complete"),nn(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,nn(this,"complete"),nn(this,"abort"),$r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?rl(this):this.bb())},n.bb=function(){rl(this)};function rl(h){if(h.h&&typeof u<"u"&&(!h.v[1]||hr(h)!=4||h.Z()!=2)){if(h.u&&hr(h)==4)Od(h.Ea,0,h);else if(nn(h,"readystatechange"),hr(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var I;if(I=ue===0){var F=String(h.D).match(ic)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!tl.test(F?F.toLowerCase():"")}E=I}if(E)nn(h,"complete"),nn(h,"success");else{h.m=6;try{var W=2<hr(h)?h.g.statusText:""}catch{W=""}h.l=W+" ["+h.Z()+"]",nl(h)}}finally{$r(h)}}}}function $r(h,y){if(h.g){Ma(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||nn(h,"ready");try{E.onreadystatechange=I}catch{}}}function Ma(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function hr(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Lr(y)}};function Hd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function pg(h){const y={};h=(h.g&&2<=hr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(X(h[I]))continue;var E=k(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const W=y[F]||[];y[F]=W,W.push(E)}D(y,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function La(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function il(h){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=La("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=La("baseRetryDelayMs",5e3,h),this.cb=La("retryDelaySeedMs",1e4,h),this.Wa=La("forwardChannelMaxRetries",2,h),this.wa=La("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new nc(h&&h.concurrentRequestLimit),this.Da=new ka,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=il.prototype,n.la=8,n.G=1,n.connect=function(h,y,E,I){kt(0),this.W=h,this.H=y||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Xd(this,null,this.W),al(this)};function cc(h){if($d(h),h.G==3){var y=h.U++,E=St(h.I);if(We(E,"SID",h.K),We(E,"RID",y),We(E,"TYPE","terminate"),Ua(h,E),y=new Br(h,h.j,y),y.L=2,y.v=Na(St(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=Zd(y.j,null),y.g.ea(y.v)),y.F=Date.now(),_t(y)}Yd(h)}function sl(h){h.g&&(za(h),h.g.cancel(),h.g=null)}function $d(h){sl(h),h.u&&(d.clearTimeout(h.u),h.u=null),ol(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function al(h){if(!rc(h.h)&&!h.s){h.s=!0;var y=h.Ga;Ae||O(),we||(Ae(),we=!0),ke.add(y,h),h.B=0}}function mg(h,y){return zd(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ps(w(h.Ga,h,y),fc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Br(this,this.j,h);let W=this.o;if(this.S&&(W?(W=R(W),x(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(y+=I,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=Gd(this,F,y),E=St(this.I),We(E,"RID",h),We(E,"CVER",22),this.D&&We(E,"X-HTTP-Session-Id",this.D),Ua(this,E),W&&(this.O?y="headers="+encodeURIComponent(String(uc(W)))+"&"+y:this.m&&sn(E,this.m,W)),Ts(this.h,F),this.Ua&&We(E,"TYPE","init"),this.P?(We(E,"$req",y),We(E,"SID","null"),F.T=!0,Rr(F,E,null)):Rr(F,E,y),this.G=2}}else this.G==3&&(h?hc(this,h):this.i.length==0||rc(this.h)||hc(this))};function hc(h,y){var E;y?E=y.l:E=h.U++;const I=St(h.I);We(I,"SID",h.K),We(I,"RID",E),We(I,"AID",h.T),Ua(h,I),h.m&&h.o&&sn(I,h.m,h.o),E=new Br(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=Gd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ts(h.h,E),Rr(E,I,y)}function Ua(h,y){h.H&&le(h.H,function(E,I){We(y,I,E)}),h.l&&xa({},function(E,I){We(y,I,E)})}function Gd(h,y,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let W=-1;for(;;){const ue=["count="+E];W==-1?0<E?(W=F[0].g,ue.push("ofs="+W)):W=0:ue.push("ofs="+W);let He=!0;for(let Qt=0;Qt<E;Qt++){let $e=F[Qt].g;const an=F[Qt].map;if($e-=W,0>$e)W=Math.max(0,F[Qt].g-100),He=!1;else try{jr(an,ue,"req"+$e+"_")}catch{I&&I(an)}}if(He){I=ue.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,I}function Kd(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;Ae||O(),we||(Ae(),we=!0),ke.add(y,h),h.v=0}}function dc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ps(w(h.Fa,h),fc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Qd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ps(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),sl(this),Qd(this))};function za(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Qd(h){h.g=new Br(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=St(h.qa);We(y,"RID","rpc"),We(y,"SID",h.K),We(y,"AID",h.T),We(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&We(y,"TO",h.ja),We(y,"TYPE","xmlhttp"),Ua(h,y),h.m&&h.o&&sn(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Na(St(y)),E.m=null,E.P=!0,wi(E,h)}n.Za=function(){this.C!=null&&(this.C=null,sl(this),dc(this),kt(19))};function ol(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Wd(h,y){var E=null;if(h.g==y){ol(h),za(h),h.g=null;var I=2}else if(Es(h.h,y))E=y.D,or(h.h,y),I=1;else return;if(h.G!=0){if(y.o)if(I==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var F=h.B;I=Qo(),nn(I,new Md(I,E)),al(h)}else Kd(h);else if(F=y.s,F==3||F==0&&0<y.X||!(I==1&&mg(h,y)||I==2&&dc(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),F){case 1:Ci(h,5);break;case 4:Ci(h,10);break;case 3:Ci(h,6);break;default:Ci(h,2)}}}function fc(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Ci(h,y){if(h.j.info("Error code "+y),y==2){var E=w(h.fb,h),I=h.Xa;const F=!I;I=new bi(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ws(I,"https"),Na(I),F?jd(I.toString(),E):Oa(I.toString(),E)}else kt(2);h.G=0,h.l&&h.l.sa(y),Yd(h),$d(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Yd(h){if(h.G=0,h.ka=[],h.l){const y=xn(h.h);(y.length!=0||h.i.length!=0)&&(M(h.ka,y),M(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function Xd(h,y,E){var I=E instanceof bi?St(E):new bi(E);if(I.g!="")y&&(I.g=y+"."+I.g),Pa(I,I.s);else{var F=d.location;I=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;var W=new bi(null);I&&ws(W,I),y&&(W.g=y),F&&Pa(W,F),E&&(W.l=E),I=W}return E=h.D,y=h.ya,E&&y&&We(I,E,y),We(I,"VER",h.la),Ua(h,I),I}function Zd(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new et(new Is({eb:E})):new et(h.pa),y.Ha(h.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jd(){}n=Jd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ll(){}ll.prototype.g=function(h,y){return new Pn(h,y)};function Pn(h,y){Gt.call(this),this.g=new il(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!X(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!X(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Gr(this)}P(Pn,Gt),Pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pn.prototype.close=function(){cc(this.g)},Pn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Xu(h),h=E);y.i.push(new ug(y.Ya++,h)),y.G==3&&al(y)},Pn.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,Pn.aa.N.call(this)};function ef(h){hs.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}P(ef,hs);function tf(){Sr.call(this),this.status=1}P(tf,Sr);function Gr(h){this.g=h}P(Gr,Jd),Gr.prototype.ua=function(){nn(this.g,"a")},Gr.prototype.ta=function(h){nn(this.g,new ef(h))},Gr.prototype.sa=function(h){nn(this.g,new tf)},Gr.prototype.ra=function(){nn(this.g,"b")},ll.prototype.createWebChannel=ll.prototype.g,Pn.prototype.send=Pn.prototype.o,Pn.prototype.open=Pn.prototype.m,Pn.prototype.close=Pn.prototype.close,NC=function(){return new ll},PC=function(){return Qo()},xC=ar,iv={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,bp=Kt,Ti.COMPLETE="complete",DC=Ti,Vd.EventType=Ur,Ur.OPEN="a",Ur.CLOSE="b",Ur.ERROR="c",Ur.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,gh=Vd,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,CC=et}).apply(typeof ip<"u"?ip:typeof self<"u"?self:typeof window<"u"?window:{});const GI="@firebase/firestore",KI="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new wm("@firebase/firestore");function ql(){return ca.logLevel}function p4(n){ca.setLogLevel(n)}function re(n,...e){if(ca.logLevel<=Be.DEBUG){const t=e.map(bE);ca.debug(`Firestore (${Bu}): ${n}`,...t)}}function Mt(n,...e){if(ca.logLevel<=Be.ERROR){const t=e.map(bE);ca.error(`Firestore (${Bu}): ${n}`,...t)}}function pi(n,...e){if(ca.logLevel<=Be.WARN){const t=e.map(bE);ca.warn(`Firestore (${Bu}): ${n}`,...t)}}function bE(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n="Unexpected state"){const e=`FIRESTORE (${Bu}) INTERNAL ASSERTION FAILED: `+n;throw Mt(e),new Error(e)}function _e(n,e){n||me()}function m4(n,e){n||me()}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dn.UNAUTHENTICATED))}shutdown(){}}class y4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _4{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){_e(this.o===void 0);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let o=new En;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new En,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=o;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new En)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new OC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new dn(e)}}class v4{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class E4{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new v4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,pt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){_e(this.o===void 0);const r=o=>{o.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new QI(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(_e(typeof t.token=="string"),this.R=t.token,new QI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=w4(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Ce(n,e){return n<e?-1:n>e?1:0}function sv(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Ce(r,a);{const o=IE(),u=b4(o.encode(WI(n,t)),o.encode(WI(e,t)));return u!==0?u:Ce(r,a)}}t+=r>65535?2:1}return Ce(n.length,e.length)}function WI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function b4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ce(n[t],e[t]);return Ce(n.length,e.length)}function du(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function VC(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=-62135596800,XI=1e6;class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*XI);return new yt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<YI)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/XI}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-YI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new yt(0,0))}static max(){return new Te(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="__name__";class Jr{constructor(e,t,r){t===void 0?t=0:t>e.length&&me(),r===void 0?r=e.length-t:r>e.length-t&&me(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Jr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Ce(e.length,t.length)}static compareSegments(e,t){const r=Jr.isNumericId(e),a=Jr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Jr.extractNumericId(e).compare(Jr.extractNumericId(t)):sv(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ra.fromString(e.substring(4,e.length-2))}}class Fe extends Jr{construct(e,t,r){return new Fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new Fe(t)}static emptyPath(){return new Fe([])}}const I4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Jr{construct(e,t,r){return new mt(e,t,r)}static isValidIdentifier(e){return I4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ZI}static keyField(){return new mt([ZI])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new te(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new te(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(t)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Fe.fromString(e))}static fromName(e){return new ce(Fe.fromString(e).popFirst(5))}static empty(){return new ce(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=-1;class Wp{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function av(n){return n.fields.find(e=>e.kind===2)}function ao(n){return n.fields.filter(e=>e.kind!==2)}Wp.UNKNOWN_ID=-1;class Ip{constructor(e,t){this.fieldPath=e,this.kind=t}}class Hh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Hh(0,ir.min())}}function MC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Te.fromTimestamp(r===1e9?new yt(t+1,0):new yt(t,r));return new ir(a,ce.empty(),e)}function LC(n){return new ir(n.readTime,n.key,fu)}class ir{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ir(Te.min(),ce.empty(),fu)}static max(){return new ir(Te.max(),ce.empty(),fu)}}function AE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==UC)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},p=>r(p))}),u=!0,o===a&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(a=>a?j.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new j((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let p=0;p<o;p++){const m=p;t(e[m]).next(_=>{u[m]=_,++d,d===o&&r(u)},_=>a(_))}})}static doWhile(e,t){return new j((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="SimpleDb";class km{static open(e,t,r,a){try{return new km(t,e.transaction(a,r))}catch(o){throw new Sh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new En,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Sh(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=SE(r.target.error);this.m.reject(new Sh(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(re(tr,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new S4(t)}}class ui{static delete(e){return re(tr,"Removing database:",e),uo(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Lh())return!1;if(ui.v())return!0;const e=bt(),t=ui.C(e),r=0<t&&t<10,a=BC(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,ui.C(bt())===12.2&&Mt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(re(tr,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new Sh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new te(Q.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(Q.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Sh(e,u))},a.onupgradeneeded=o=>{re(tr,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{re(tr,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const d=km.open(this.db,e,o?"readonly":"readwrite",r),p=a(d).next(m=>(d.S(),m)).catch(m=>(d.abort(m),j.reject(m))).toPromise();return p.catch(()=>{}),await d.p,p}catch(d){const p=d,m=p.name!=="FirebaseError"&&u<3;if(re(tr,"Transaction failed with error:",p.message,"Retrying:",m),this.close(),!m)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function BC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class A4{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return uo(this.q.delete())}}class Sh extends te{constructor(e,t){super(Q.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function wa(n){return n.name==="IndexedDbTransactionError"}class S4{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(tr,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(tr,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),uo(r)}add(e){return re(tr,"ADD",this.store.name,e,e),uo(this.store.add(e))}get(e){return uo(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(tr,"GET",this.store.name,e,t),t))}delete(e){return re(tr,"DELETE",this.store.name,e),uo(this.store.delete(e))}count(){return re(tr,"COUNT",this.store.name),uo(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new j((u,d)=>{o.onerror=p=>{d(p.target.error)},o.onsuccess=p=>{u(p.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(d,p)=>{u.push(p)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new j((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){re(tr,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,d)=>d.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new j((r,a)=>{t.onerror=o=>{const u=SE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}j(e,t){const r=[];return new j((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new A4(d),m=t(d.primaryKey,d.value,p);if(m instanceof j){const _=m.catch(v=>(p.done(),j.reject(v)));r.push(_)}p.isDone?a():p.K===null?d.continue():d.continue(p.K)}}).next(()=>j.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function uo(n){return new j((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=SE(r.target.error);t(a)}})}let JI=!1;function SE(n){const e=ui.C(bt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return JI||(JI=!0,setTimeout(()=>{throw r},0)),r}}return n}const Rh="IndexBackfiller";class R4{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){re(Rh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();re(Rh,`Documents written: ${t}`)}catch(t){wa(t)?re(Rh,"Ignoring IndexedDB error during index backfill: ",t):await Ta(t)}await this.te(6e4)})}}class C4{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return j.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(Rh,`Processing collection: ${u}`),this.ie(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(d=>(re(Rh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=LC(o);AE(u,r)>0&&(r=u)}),new ir(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Hn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=-1;function _d(n){return n==null}function $h(n){return n===0&&1/n==-1/0}function FC(n){return typeof n=="number"&&Number.isInteger(n)&&!$h(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="";function Rn(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=eA(e)),e=D4(n.get(t),e);return eA(e)}function D4(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case Yp:t+="";break;default:t+=o}}return t}function eA(n){return n+Yp+""}function oi(n){const e=n.length;if(_e(e>=2),e===2)return _e(n.charAt(0)===Yp&&n.charAt(1)===""),Fe.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(Yp,o);switch((u<0||u>t)&&me(),n.charAt(u+1)){case"":const d=n.substring(o,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),r.push(p);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:me()}o=u+2}return new Fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="remoteDocuments",vd="owner",Ll="owner",Gh="mutationQueues",x4="userId",Nr="mutations",tA="batchId",yo="userMutationsIndex",nA=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n,e){return[n,Rn(e)]}function jC(n,e,t){return[n,Rn(e),t]}const P4={},pu="documentMutations",Xp="remoteDocumentsV14",N4=["prefixPath","collectionGroup","readTime","documentId"],Sp="documentKeyIndex",O4=["prefixPath","collectionGroup","documentId"],qC="collectionGroupIndex",k4=["collectionGroup","readTime","prefixPath","documentId"],Kh="remoteDocumentGlobal",ov="remoteDocumentGlobalKey",mu="targets",HC="queryTargetsIndex",V4=["canonicalId","targetId"],gu="targetDocuments",M4=["targetId","path"],RE="documentTargetsIndex",L4=["path","targetId"],Zp="targetGlobalKey",Io="targetGlobal",Qh="collectionParents",U4=["collectionId","parent"],yu="clientMetadata",z4="clientId",Vm="bundles",B4="bundleId",Mm="namedQueries",F4="name",CE="indexConfiguration",j4="indexId",lv="collectionGroupIndex",q4="collectionGroup",Jp="indexState",H4=["indexId","uid"],$C="sequenceNumberIndex",$4=["uid","sequenceNumber"],em="indexEntries",G4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],GC="documentKeyIndex",K4=["indexId","uid","orderedDocumentKey"],Lm="documentOverlays",Q4=["userId","collectionPath","documentId"],uv="collectionPathOverlayIndex",W4=["userId","collectionPath","largestBatchId"],KC="collectionGroupOverlayIndex",Y4=["userId","collectionGroup","largestBatchId"],DE="globals",X4="name",QC=[Gh,Nr,pu,oo,mu,vd,Io,gu,yu,Kh,Qh,Vm,Mm],Z4=[...QC,Lm],WC=[Gh,Nr,pu,Xp,mu,vd,Io,gu,yu,Kh,Qh,Vm,Mm,Lm],YC=WC,xE=[...YC,CE,Jp,em],J4=xE,ez=[...xE,DE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends zC{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function en(n,e){const t=de(n);return ui.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ba(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function XC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.comparator=e,this.root=t||_n.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_n.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_n.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sp(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sp(this.root,e,this.comparator,!1)}getReverseIterator(){return new sp(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sp(this.root,e,this.comparator,!0)}}class sp{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _n{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??_n.RED,this.left=a??_n.EMPTY,this.right=o??_n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new _n(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return _n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return _n.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}_n.EMPTY=null,_n.RED=!0,_n.BLACK=!1;_n.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,r,a,o){return this}insert(e,t,r){return new _n(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iA(this.data.getIterator())}getIteratorFrom(e){return new iA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new rt(this.comparator);return t.data=e,t}}class iA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ul(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new rt(mt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return du(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tz(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ZC("Invalid base64 string: "+o):o}}(e);return new xt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const nz=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ji(n){if(_e(!!n),typeof n=="string"){let e=0;const t=nz.exec(n);if(_e(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function es(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="server_timestamp",e1="__type__",t1="__previous_value__",n1="__local_write_time__";function Um(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[e1])===null||t===void 0?void 0:t.stringValue)===JC}function zm(n){const e=n.mapValue.fields[t1];return Um(e)?zm(e):e}function Wh(n){const e=Ji(n.mapValue.fields[n1].timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e,t,r,a,o,u,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const hv="(default)";class ha{constructor(e,t){this.projectId=e,this.database=t||hv}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database===hv}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="__type__",r1="__max__",Js={mapValue:{fields:{__type__:{stringValue:r1}}}},NE="__vector__",_u="value",Rp={nullValue:"NULL_VALUE"};function da(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Um(n)?4:i1(n)?9007199254740991:Bm(n)?10:11:me()}function mi(n,e){if(n===e)return!0;const t=da(n);if(t!==da(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wh(n).isEqual(Wh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Ji(a.timestampValue),d=Ji(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return es(a.bytesValue).isEqual(es(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return ft(a.geoPointValue.latitude)===ft(o.geoPointValue.latitude)&&ft(a.geoPointValue.longitude)===ft(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return ft(a.integerValue)===ft(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=ft(a.doubleValue),d=ft(o.doubleValue);return u===d?$h(u)===$h(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return du(n.arrayValue.values||[],e.arrayValue.values||[],mi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(rA(u)!==rA(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!mi(u[p],d[p])))return!1;return!0}(n,e);default:return me()}}function Yh(n,e){return(n.values||[]).find(t=>mi(t,e))!==void 0}function fa(n,e){if(n===e)return 0;const t=da(n),r=da(e);if(t!==r)return Ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=ft(o.integerValue||o.doubleValue),p=ft(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return sA(n.timestampValue,e.timestampValue);case 4:return sA(Wh(n),Wh(e));case 5:return sv(n.stringValue,e.stringValue);case 6:return function(o,u){const d=es(o),p=es(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const _=Ce(d[m],p[m]);if(_!==0)return _}return Ce(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Ce(ft(o.latitude),ft(u.latitude));return d!==0?d:Ce(ft(o.longitude),ft(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return aA(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,p,m,_;const v=o.fields||{},w=u.fields||{},S=(d=v[_u])===null||d===void 0?void 0:d.arrayValue,P=(p=w[_u])===null||p===void 0?void 0:p.arrayValue,U=Ce(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((_=P==null?void 0:P.values)===null||_===void 0?void 0:_.length)||0);return U!==0?U:aA(S,P)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Js.mapValue&&u===Js.mapValue)return 0;if(o===Js.mapValue)return 1;if(u===Js.mapValue)return-1;const d=o.fields||{},p=Object.keys(d),m=u.fields||{},_=Object.keys(m);p.sort(),_.sort();for(let v=0;v<p.length&&v<_.length;++v){const w=sv(p[v],_[v]);if(w!==0)return w;const S=fa(d[p[v]],m[_[v]]);if(S!==0)return S}return Ce(p.length,_.length)}(n.mapValue,e.mapValue);default:throw me()}}function sA(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=Ji(n),r=Ji(e),a=Ce(t.seconds,r.seconds);return a!==0?a:Ce(t.nanos,r.nanos)}function aA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=fa(t[a],r[a]);if(o)return o}return Ce(t.length,r.length)}function vu(n){return dv(n)}function dv(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ji(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return es(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=dv(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${dv(t.fields[u])}`;return a+"}"}(n.mapValue):me()}function Cp(n){switch(da(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zm(n);return e?16+Cp(e):16;case 5:return 2*n.stringValue.length;case 6:return es(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+Cp(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return ba(r.fields,(o,u)=>{a+=o.length+Cp(u)}),a}(n.mapValue);default:throw me()}}function Co(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function fv(n){return!!n&&"integerValue"in n}function Xh(n){return!!n&&"arrayValue"in n}function oA(n){return!!n&&"nullValue"in n}function lA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Dp(n){return!!n&&"mapValue"in n}function Bm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[PE])===null||t===void 0?void 0:t.stringValue)===NE}function Ch(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ba(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ch(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ch(n.arrayValue.values[t]);return e}return Object.assign({},n)}function i1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===r1}const s1={mapValue:{fields:{[PE]:{stringValue:NE},[_u]:{arrayValue:{}}}}};function iz(n){return"nullValue"in n?Rp:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Co(ha.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Bm(n)?s1:{mapValue:{}}:me()}function sz(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Co(ha.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?s1:"mapValue"in n?Bm(n)?{mapValue:{}}:Js:me()}function uA(n,e){const t=fa(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function cA(n,e){const t=fa(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Dp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ch(t)}setAll(e){let t=mt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Ch(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());Dp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Dp(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){ba(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new vn(Ch(this.value))}}function a1(n){const e=[];return ba(n.fields,(t,r)=>{const a=new mt([t]);if(Dp(r)){const o=a1(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new $n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new dt(e,0,Te.min(),Te.min(),Te.min(),vn.empty(),0)}static newFoundDocument(e,t,r,a){return new dt(e,1,t,Te.min(),r,a,0)}static newNoDocument(e,t){return new dt(e,2,t,Te.min(),Te.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,Te.min(),Te.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.position=e,this.inclusive=t}}function hA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=fa(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function dA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t="asc"){this.field=e,this.dir=t}}function az(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{}class je extends o1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new oz(e,t,r):t==="array-contains"?new cz(e,r):t==="in"?new f1(e,r):t==="not-in"?new hz(e,r):t==="array-contains-any"?new dz(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lz(e,r):new uz(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fa(t,this.value)):t!==null&&da(this.value)===da(t)&&this.matchesComparison(fa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nt extends o1{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new nt(e,t)}matches(e){return Eu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Eu(n){return n.op==="and"}function pv(n){return n.op==="or"}function OE(n){return l1(n)&&Eu(n)}function l1(n){for(const e of n.filters)if(e instanceof nt)return!1;return!0}function mv(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+vu(n.value);if(OE(n))return n.filters.map(e=>mv(e)).join(",");{const e=n.filters.map(t=>mv(t)).join(",");return`${n.op}(${e})`}}function u1(n,e){return n instanceof je?function(r,a){return a instanceof je&&r.op===a.op&&r.field.isEqual(a.field)&&mi(r.value,a.value)}(n,e):n instanceof nt?function(r,a){return a instanceof nt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&u1(u,a.filters[d]),!0):!1}(n,e):void me()}function c1(n,e){const t=n.filters.concat(e);return nt.create(t,n.op)}function h1(n){return n instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${vu(t.value)}`}(n):n instanceof nt?function(t){return t.op.toString()+" {"+t.getFilters().map(h1).join(" ,")+"}"}(n):"Filter"}class oz extends je{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class lz extends je{constructor(e,t){super(e,"in",t),this.keys=d1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uz extends je{constructor(e,t){super(e,"not-in",t),this.keys=d1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function d1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class cz extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xh(t)&&Yh(t.arrayValue,this.value)}}class f1 extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yh(this.value.arrayValue,t)}}class hz extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Yh(this.value.arrayValue,t)}}class dz extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Yh(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fz{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.le=null}}function gv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new fz(n,e,t,r,a,o,u)}function Do(n){const e=de(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>mv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),_d(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>vu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>vu(r)).join(",")),e.le=t}return e.le}function Ed(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!az(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!u1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dA(n.startAt,e.startAt)&&dA(n.endAt,e.endAt)}function tm(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nm(n,e){return n.filters.filter(t=>t instanceof je&&t.field.isEqual(e))}function fA(n,e,t){let r=Rp,a=!0;for(const o of nm(n,e)){let u=Rp,d=!0;switch(o.op){case"<":case"<=":u=iz(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=Rp}uA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];uA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function pA(n,e,t){let r=Js,a=!0;for(const o of nm(n,e)){let u=Js,d=!0;switch(o.op){case">=":case">":u=sz(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Js}cA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];cA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function p1(n,e,t,r,a,o,u,d){return new is(n,e,t,r,a,o,u,d)}function Fu(n){return new is(n)}function mA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kE(n){return n.collectionGroup!==null}function tu(n){const e=de(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new rt(mt.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Zh(o,r))}),t.has(mt.keyField().canonicalString())||e.he.push(new Zh(mt.keyField(),r))}return e.he}function Ln(n){const e=de(n);return e.Pe||(e.Pe=pz(e,tu(n))),e.Pe}function pz(n,e){if(n.limitType==="F")return gv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Zh(a.field,o)});const t=n.endAt?new pa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pa(n.startAt.position,n.startAt.inclusive):null;return gv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function yv(n,e){const t=n.filters.concat([e]);return new is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function rm(n,e,t){return new is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Td(n,e){return Ed(Ln(n),Ln(e))&&n.limitType===e.limitType}function m1(n){return`${Do(Ln(n))}|lt:${n.limitType}`}function Hl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>h1(a)).join(", ")}]`),_d(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>vu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>vu(a)).join(",")),`Target(${r})`}(Ln(n))}; limitType=${n.limitType})`}function wd(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ce.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of tu(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,p){const m=hA(u,d,p);return u.inclusive?m<=0:m<0}(r.startAt,tu(r),a)||r.endAt&&!function(u,d,p){const m=hA(u,d,p);return u.inclusive?m>=0:m>0}(r.endAt,tu(r),a))}(n,e)}function g1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function y1(n){return(e,t)=>{let r=!1;for(const a of tu(n)){const o=mz(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function mz(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(o,u,d){const p=u.data.field(o),m=d.data.field(o);return p!==null&&m!==null?fa(p,m):me()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ba(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return XC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gz=new ut(ce.comparator);function Gn(){return gz}const _1=new ut(ce.comparator);function yh(...n){let e=_1;for(const t of n)e=e.insert(t.key,t);return e}function v1(n){let e=_1;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function li(){return Dh()}function E1(){return Dh()}function Dh(){return new ss(n=>n.toString(),(n,e)=>n.isEqual(e))}const yz=new ut(ce.comparator),_z=new rt(ce.comparator);function Ne(...n){let e=_z;for(const t of n)e=e.add(t);return e}const vz=new rt(Ce);function VE(){return vz}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$h(e)?"-0":e}}function T1(n){return{integerValue:""+n}}function w1(n,e){return FC(e)?T1(e):ME(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this._=void 0}}function Ez(n,e,t){return n instanceof Tu?function(a,o){const u={fields:{[e1]:{stringValue:JC},[n1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Um(o)&&(o=zm(o)),o&&(u.fields[t1]=o),{mapValue:u}}(t,e):n instanceof xo?I1(n,e):n instanceof Po?A1(n,e):function(a,o){const u=b1(a,o),d=gA(u)+gA(a.Ie);return fv(u)&&fv(a.Ie)?T1(d):ME(a.serializer,d)}(n,e)}function Tz(n,e,t){return n instanceof xo?I1(n,e):n instanceof Po?A1(n,e):t}function b1(n,e){return n instanceof wu?function(r){return fv(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Tu extends Fm{}class xo extends Fm{constructor(e){super(),this.elements=e}}function I1(n,e){const t=S1(e);for(const r of n.elements)t.some(a=>mi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Po extends Fm{constructor(e){super(),this.elements=e}}function A1(n,e){let t=S1(e);for(const r of n.elements)t=t.filter(a=>!mi(a,r));return{arrayValue:{values:t}}}class wu extends Fm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function gA(n){return ft(n.integerValue||n.doubleValue)}function S1(n){return Xh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.field=e,this.transform=t}}function wz(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof xo&&a instanceof xo||r instanceof Po&&a instanceof Po?du(r.elements,a.elements,mi):r instanceof wu&&a instanceof wu?mi(r.Ie,a.Ie):r instanceof Tu&&a instanceof Tu}(n.transform,e.transform)}class bz{constructor(e,t){this.version=e,this.transformResults=t}}class gt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gt}static exists(e){return new gt(void 0,e)}static updateTime(e){return new gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xp(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jm{}function R1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qu(n.key,gt.none()):new ju(n.key,n.data,gt.none());{const t=n.data,r=vn.empty();let a=new rt(mt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new as(n.key,r,new $n(a.toArray()),gt.none())}}function Iz(n,e,t){n instanceof ju?function(a,o,u){const d=a.value.clone(),p=_A(a.fieldTransforms,o,u.transformResults);d.setAll(p),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof as?function(a,o,u){if(!xp(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=_A(a.fieldTransforms,o,u.transformResults),p=o.data;p.setAll(C1(a)),p.setAll(d),o.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function xh(n,e,t,r){return n instanceof ju?function(o,u,d,p){if(!xp(o.precondition,u))return d;const m=o.value.clone(),_=vA(o.fieldTransforms,p,u);return m.setAll(_),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof as?function(o,u,d,p){if(!xp(o.precondition,u))return d;const m=vA(o.fieldTransforms,p,u),_=u.data;return _.setAll(C1(o)),_.setAll(m),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return xp(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function Az(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=b1(r.transform,a||null);o!=null&&(t===null&&(t=vn.empty()),t.set(r.field,o))}return t||null}function yA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&du(r,a,(o,u)=>wz(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ju extends jm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class as extends jm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function C1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function _A(n,e,t){const r=new Map;_e(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,Tz(u,d,t[a]))}return r}function vA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,Ez(o,u,e))}return r}class qu extends jm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LE extends jm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&Iz(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xh(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xh(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=E1();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const p=R1(u,d);p!==null&&r.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&du(this.mutations,e.mutations,(t,r)=>yA(t,r))&&du(this.baseMutations,e.baseMutations,(t,r)=>yA(t,r))}}class zE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){_e(e.mutations.length===r.length);let a=function(){return yz}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new zE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BE=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sz{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt,Ke;function D1(n){switch(n){case Q.OK:return me();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return me()}}function x1(n){if(n===void 0)return Mt("GRPC error has no .code"),Q.UNKNOWN;switch(n){case qt.OK:return Q.OK;case qt.CANCELLED:return Q.CANCELLED;case qt.UNKNOWN:return Q.UNKNOWN;case qt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case qt.INTERNAL:return Q.INTERNAL;case qt.UNAVAILABLE:return Q.UNAVAILABLE;case qt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case qt.NOT_FOUND:return Q.NOT_FOUND;case qt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case qt.ABORTED:return Q.ABORTED;case qt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case qt.DATA_LOSS:return Q.DATA_LOSS;default:return me()}}(Ke=qt||(qt={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rz=new ra([4294967295,4294967295],0);function EA(n){const e=IE().encode(n),t=new RC;return t.update(e),new Uint8Array(t.digest())}function TA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ra([t,r],0),new ra([a,o],0)]}class FE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new _h(`Invalid padding: ${t}`);if(r<0)throw new _h(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _h(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new _h(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ra.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(ra.fromNumber(r)));return a.compare(Rz)===1&&(a=new ra([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=EA(e),[r,a]=TA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new FE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=EA(e),[r,a]=TA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class _h extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Ad.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Id(Te.min(),a,new ut(Ce),Gn(),Ne())}}class Ad{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ad(r,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class P1{constructor(e,t){this.targetId=e,this.ge=t}}class N1{constructor(e,t,r=xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class wA{constructor(){this.pe=0,this.ye=bA(),this.we=xt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ne(),t=Ne(),r=Ne();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:me()}}),new Ad(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=bA()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,_e(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Cz{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Gn(),this.$e=ap(),this.Ue=ap(),this.Ke=new ut(Ce)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(tm(o))if(r===0){const u=new ce(o.path);this.ze(t,u,dt.newNoDocument(u,Te.min()))}else _e(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),p=d?this.nt(d,e,u):1;if(p!==0){this.Ye(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=es(r).toUint8Array()}catch(p){if(p instanceof ZC)return pi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new FE(u,a,o)}catch(p){return pi(p instanceof _h?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const d=this.Xe(u);if(d){if(o.current&&tm(d.target)){const p=new ce(d.target.path);this._t(p).has(u)||this.ut(u,p)||this.ze(u,p,dt.newNoDocument(p,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=Ne();this.Ue.forEach((o,u)=>{let d=!0;u.forEachWhile(p=>{const m=this.Xe(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new Id(e,t,this.Ke,this.Qe,r);return this.Qe=Gn(),this.$e=ap(),this.Ue=ap(),this.Ke=new ut(Ce),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new wA,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new rt(Ce),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new rt(Ce),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new wA),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ap(){return new ut(ce.comparator)}function bA(){return new ut(ce.comparator)}const Dz={asc:"ASCENDING",desc:"DESCENDING"},xz={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pz={and:"AND",or:"OR"};class Nz{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _v(n,e){return n.useProto3Json||_d(e)?e:{value:e}}function bu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Oz(n,e){return bu(n,e.toTimestamp())}function Lt(n){return _e(!!n),Te.fromTimestamp(function(t){const r=Ji(t);return new yt(r.seconds,r.nanos)}(n))}function jE(n,e){return vv(n,e).canonicalString()}function vv(n,e){const t=function(a){return new Fe(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function k1(n){const e=Fe.fromString(n);return _e(H1(e)),e}function Jh(n,e){return jE(n.databaseId,e.path)}function ci(n,e){const t=k1(e);if(t.get(1)!==n.databaseId.projectId)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(L1(t))}function V1(n,e){return jE(n.databaseId,e)}function M1(n){const e=k1(n);return e.length===4?Fe.emptyPath():L1(e)}function Ev(n){return new Fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function L1(n){return _e(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function IA(n,e,t){return{name:Jh(n,e),fields:t.value.mapValue.fields}}function U1(n,e,t){const r=ci(n,e.name),a=Lt(e.updateTime),o=e.createTime?Lt(e.createTime):Te.min(),u=new vn({mapValue:{fields:e.fields}}),d=dt.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function kz(n,e){return"found"in e?function(r,a){_e(!!a.found),a.found.name,a.found.updateTime;const o=ci(r,a.found.name),u=Lt(a.found.updateTime),d=a.found.createTime?Lt(a.found.createTime):Te.min(),p=new vn({mapValue:{fields:a.found.fields}});return dt.newFoundDocument(o,u,d,p)}(n,e):"missing"in e?function(r,a){_e(!!a.missing),_e(!!a.readTime);const o=ci(r,a.missing),u=Lt(a.readTime);return dt.newNoDocument(o,u)}(n,e):me()}function Vz(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,_){return m.useProto3Json?(_e(_===void 0||typeof _=="string"),xt.fromBase64String(_||"")):(_e(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),xt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const _=m.code===void 0?Q.UNKNOWN:x1(m.code);return new te(_,m.message||"")}(u);t=new N1(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=ci(n,r.document.name),o=Lt(r.document.updateTime),u=r.document.createTime?Lt(r.document.createTime):Te.min(),d=new vn({mapValue:{fields:r.document.fields}}),p=dt.newFoundDocument(a,o,u,d),m=r.targetIds||[],_=r.removedTargetIds||[];t=new Pp(m,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=ci(n,r.document),o=r.readTime?Lt(r.readTime):Te.min(),u=dt.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Pp([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=ci(n,r.document),o=r.removedTargetIds||[];t=new Pp([],o,a,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new Sz(a,o),d=r.targetId;t=new P1(d,u)}}return t}function ed(n,e){let t;if(e instanceof ju)t={update:IA(n,e.key,e.value)};else if(e instanceof qu)t={delete:Jh(n,e.key)};else if(e instanceof as)t={update:IA(n,e.key,e.data),updateMask:Fz(e.fieldMask)};else{if(!(e instanceof LE))return me();t={verify:Jh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof Tu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof xo)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Po)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof wu)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw me()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:Oz(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:me()}(n,e.precondition)),t}function Tv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?gt.updateTime(Lt(o.updateTime)):o.exists!==void 0?gt.exists(o.exists):gt.none()}(e.currentDocument):gt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)_e(d.setToServerValue==="REQUEST_TIME"),p=new Tu;else if("appendMissingElements"in d){const _=d.appendMissingElements.values||[];p=new xo(_)}else if("removeAllFromArray"in d){const _=d.removeAllFromArray.values||[];p=new Po(_)}else"increment"in d?p=new wu(u,d.increment):me();const m=mt.fromServerFormat(d.fieldPath);return new bd(m,p)}(n,a)):[];if(e.update){e.update.name;const a=ci(n,e.update.name),o=new vn({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const m=p.fieldPaths||[];return new $n(m.map(_=>mt.fromServerFormat(_)))}(e.updateMask);return new as(a,o,u,t,r)}return new ju(a,o,t,r)}if(e.delete){const a=ci(n,e.delete);return new qu(a,t)}if(e.verify){const a=ci(n,e.verify);return new LE(a,t)}return me()}function Mz(n,e){return n&&n.length>0?(_e(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Lt(a.updateTime):Lt(o);return u.isEqual(Te.min())&&(u=Lt(o)),new bz(u,a.transformResults||[])}(t,e))):[]}function z1(n,e){return{documents:[V1(n,e.path)]}}function B1(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=V1(n,a);const o=function(m){if(m.length!==0)return q1(nt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(_=>function(w){return{field:$l(w.field),direction:Uz(w.dir)}}(_))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=_v(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function F1(n){let e=M1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){_e(r===1);const _=t.from[0];_.allDescendants?a=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(v){const w=j1(v);return w instanceof nt&&OE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(P){return new Zh(Gl(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,_d(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,S=v.values||[];return new pa(S,w)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const w=!v.before,S=v.values||[];return new pa(S,w)}(t.endAt)),p1(e,a,u,o,d,"F",p,m)}function Lz(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function j1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Gl(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=Gl(t.unaryFilter.field);return je.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Gl(t.unaryFilter.field);return je.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Gl(t.unaryFilter.field);return je.create(u,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(n):n.fieldFilter!==void 0?function(t){return je.create(Gl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nt.create(t.compositeFilter.filters.map(r=>j1(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(n):me()}function Uz(n){return Dz[n]}function zz(n){return xz[n]}function Bz(n){return Pz[n]}function $l(n){return{fieldPath:n.canonicalString()}}function Gl(n){return mt.fromServerFormat(n.fieldPath)}function q1(n){return n instanceof je?function(t){if(t.op==="=="){if(lA(t.value))return{unaryFilter:{field:$l(t.field),op:"IS_NAN"}};if(oA(t.value))return{unaryFilter:{field:$l(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lA(t.value))return{unaryFilter:{field:$l(t.field),op:"IS_NOT_NAN"}};if(oA(t.value))return{unaryFilter:{field:$l(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$l(t.field),op:zz(t.op),value:t.value}}}(n):n instanceof nt?function(t){const r=t.getFilters().map(a=>q1(a));return r.length===1?r[0]:{compositeFilter:{op:Bz(t.op),filters:r}}}(n):me()}function Fz(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function H1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t,r,a,o=Te.min(),u=Te.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.Tt=e}}function jz(n,e){let t;if(e.document)t=U1(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=Oo(e.noDocument.readTime);t=dt.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return me();{const r=ce.fromSegments(e.unknownDocument.path),a=Oo(e.unknownDocument.version);t=dt.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new yt(a[0],a[1]);return Te.fromTimestamp(o)}(e.readTime)),t}function AA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:im(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:Jh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:bu(o,u.version.toTimestamp()),createTime:bu(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:No(e.version)};else{if(!e.isUnknownDocument())return me();r.unknownDocument={path:t.path.toArray(),version:No(e.version)}}return r}function im(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function No(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Oo(n){const e=new yt(n.seconds,n.nanoseconds);return Te.fromTimestamp(e)}function co(n,e){const t=(e.baseMutations||[]).map(o=>Tv(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>Tv(n.Tt,o)),a=yt.fromMillis(e.localWriteTimeMs);return new UE(e.batchId,a,t,r)}function vh(n){const e=Oo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Oo(n.lastLimboFreeSnapshotVersion):Te.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return _e(o.documents.length===1),Ln(Fu(M1(o.documents[0])))}(n.query):function(o){return Ln(F1(o))}(n.query),new Ki(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,xt.fromBase64String(n.resumeToken))}function G1(n,e){const t=No(e.snapshotVersion),r=No(e.lastLimboFreeSnapshotVersion);let a;a=tm(e.target)?z1(n.Tt,e.target):B1(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Do(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function qE(n){const e=F1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?rm(e,e.limit,"L"):e}function C_(n,e){return new BE(e.largestBatchId,Tv(n.Tt,e.overlayMutation))}function SA(n,e){const t=e.path.lastSegment();return[n,Rn(e.path.popLast()),t]}function RA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:No(r.readTime),documentKey:Rn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz{getBundleMetadata(e,t){return CA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:Oo(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return CA(e).put(function(a){return{bundleId:a.id,createTime:No(Lt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return DA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:qE(o.bundledQuery),readTime:Oo(o.readTime)}}(r)})}saveNamedQuery(e,t){return DA(e).put(function(a){return{name:a.name,readTime:No(Lt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function CA(n){return en(n,Vm)}function DA(n){return en(n,Mm)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new qm(e,r)}getOverlay(e,t){return oh(e).get(SA(this.userId,t)).next(r=>r?C_(this.serializer,r):null)}getOverlays(e,t){const r=li();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new BE(t,u);a.push(this.Et(e,d))}),j.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(Rn(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(oh(e).J(uv,d))}),j.waitFor(o)}getOverlaysForCollection(e,t,r){const a=li(),o=Rn(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return oh(e).G(uv,u).next(d=>{for(const p of d){const m=C_(this.serializer,p);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=li();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return oh(e).Z({index:KC,range:d},(p,m,_)=>{const v=C_(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):_.done()}).next(()=>o)}Et(e,t){return oh(e).put(function(a,o,u){const[d,p,m]=SA(o,u.mutation.key);return{userId:o,collectionPath:p,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:ed(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function oh(n){return en(n,Lm)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hz{dt(e){return en(e,DE)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?xt.fromUint8Array(r):xt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(ft(e.integerValue));else if("doubleValue"in e){const r=ft(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),$h(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Ji(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(es(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?i1(e)?this.ft(t,Number.MAX_SAFE_INTEGER):Bm(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):me()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=_u,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(ft(d)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),ce.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}ho.xt=new ho;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=255;function $z(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function xA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=$z(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class Gz{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=xA(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=xA(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(zl),this.jt(255)}Ht(){this.Jt(zl),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===zl?(this.jt(zl),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===zl?(this.Jt(zl),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class Kz{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class Qz{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class lh{constructor(){this.Zt=new Gz,this.Xt=new Kz(this.Zt),this.en=new Qz(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new fo(this.indexId,this.documentKey,this.arrayValue,r)}}function Gs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=PA(n.arrayValue,e.arrayValue),t!==0?t:(t=PA(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function PA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.rn=new rt((t,r)=>mt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(_e(e.collectionGroup===this.collectionId),this.an)return!1;const t=av(e);if(t!==void 0&&!this.cn(t))return!1;const r=ao(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const d=this.rn.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=r[o];if(!this.ln(d,p)||!this.hn(this.sn[u++],p))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],d))return!1}return!0}Pn(){if(this.an)return null;let e=new rt(mt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ip(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ip(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ip(r.field,r.dir==="asc"?0:1)));return new Wp(Wp.UNKNOWN_ID,this.collectionId,t,Hh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){var e,t;if(_e(n instanceof je||n instanceof nt),n instanceof je){if(n instanceof f1){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>je.create(n.field,"==",o)))||[];return nt.create(a,"or")}return n}const r=n.filters.map(a=>K1(a));return nt.create(r,n.op)}function Wz(n){if(n.getFilters().length===0)return[];const e=Iv(K1(n));return _e(Q1(e)),wv(e)||bv(e)?[e]:e.getFilters()}function wv(n){return n instanceof je}function bv(n){return n instanceof nt&&OE(n)}function Q1(n){return wv(n)||bv(n)||function(t){if(t instanceof nt&&pv(t)){for(const r of t.getFilters())if(!wv(r)&&!bv(r))return!1;return!0}return!1}(n)}function Iv(n){if(_e(n instanceof je||n instanceof nt),n instanceof je)return n;if(n.filters.length===1)return Iv(n.filters[0]);const e=n.filters.map(r=>Iv(r));let t=nt.create(e,n.op);return t=sm(t),Q1(t)?t:(_e(t instanceof nt),_e(Eu(t)),_e(t.filters.length>1),t.filters.reduce((r,a)=>HE(r,a)))}function HE(n,e){let t;return _e(n instanceof je||n instanceof nt),_e(e instanceof je||e instanceof nt),t=n instanceof je?e instanceof je?function(a,o){return nt.create([a,o],"and")}(n,e):OA(n,e):e instanceof je?OA(e,n):function(a,o){if(_e(a.filters.length>0&&o.filters.length>0),Eu(a)&&Eu(o))return c1(a,o.getFilters());const u=pv(a)?a:o,d=pv(a)?o:a,p=u.filters.map(m=>HE(m,d));return nt.create(p,"or")}(n,e),sm(t)}function OA(n,e){if(Eu(e))return c1(e,n.getFilters());{const t=e.filters.map(r=>HE(n,r));return nt.create(t,"or")}}function sm(n){if(_e(n instanceof je||n instanceof nt),n instanceof je)return n;const e=n.getFilters();if(e.length===1)return sm(e[0]);if(l1(n))return n;const t=e.map(a=>sm(a)),r=[];return t.forEach(a=>{a instanceof je?r.push(a):a instanceof nt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:nt.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yz{constructor(){this.Tn=new $E}addToCollectionParentIndex(e,t){return this.Tn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(ir.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class $E{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new rt(Fe.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new rt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="IndexedDbIndexManager",op=new Uint8Array(0);class Xz{constructor(e,t){this.databaseId=t,this.In=new $E,this.En=new ss(r=>Do(r),(r,a)=>Ed(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:Rn(a)};return VA(e).put(o)}return j.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[VC(t),""],!1,!0);return VA(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(oi(u.parent))}return r})}addFieldIndex(e,t){const r=uh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Fl(e);return o.next(d=>{u.put(RA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=uh(e),a=Fl(e),o=Bl(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=uh(e),r=Bl(e),a=Fl(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return j.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new NA(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Bl(e);let a=!0;const o=new Map;return j.forEach(this.dn(t),u=>this.An(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=Ne();const d=[];return j.forEach(o,(p,m)=>{re(kA,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${Do(t)}`);const _=function(K,oe){const se=av(oe);if(se===void 0)return null;for(const le of nm(K,se.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(m,p),v=function(K,oe){const se=new Map;for(const le of ao(oe))for(const D of nm(K,le.fieldPath))switch(D.op){case"==":case"in":se.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return se.set(le.fieldPath.canonicalString(),D.value),Array.from(se.values())}return null}(m,p),w=function(K,oe){const se=[];let le=!0;for(const D of ao(oe)){const R=D.kind===0?fA(K,D.fieldPath,K.startAt):pA(K,D.fieldPath,K.startAt);se.push(R.value),le&&(le=R.inclusive)}return new pa(se,le)}(m,p),S=function(K,oe){const se=[];let le=!0;for(const D of ao(oe)){const R=D.kind===0?pA(K,D.fieldPath,K.endAt):fA(K,D.fieldPath,K.endAt);se.push(R.value),le&&(le=R.inclusive)}return new pa(se,le)}(m,p),P=this.Rn(p,m,w),U=this.Rn(p,m,S),M=this.Vn(p,m,v),H=this.mn(p.indexId,_,P,w.inclusive,U,S.inclusive,M);return j.forEach(H,X=>r.H(X,t.limit).next(K=>{K.forEach(oe=>{const se=ce.fromSegments(oe.documentKey);u.has(se)||(u=u.add(se),d.push(se))})}))}).next(()=>d)}return j.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=Wz(nt.create(e.filters,"and")).map(r=>gv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,d){const p=(t!=null?t.length:1)*Math.max(r.length,o.length),m=p/(t!=null?t.length:1),_=[];for(let v=0;v<p;++v){const w=t?this.fn(t[v/m]):op,S=this.gn(e,w,r[v%m],a),P=this.pn(e,w,o[v%m],u),U=d.map(M=>this.gn(e,w,M,!0));_.push(...this.createRange(S,P,U))}return _}gn(e,t,r,a){const o=new fo(e,ce.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new fo(e,ce.empty(),t,r);return a?o.nn():o}An(e,t){const r=new NA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.un(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return j.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(p){let m=new rt(mt.comparator),_=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?_=!0:m=m.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(_?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new lh;for(const a of ao(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);ho.xt.At(o,u)}return r.Yt()}fn(e){const t=new lh;return ho.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new lh;return ho.xt.At(Co(this.databaseId,t),r.tn(function(o){const u=ao(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new lh);let o=0;for(const u of ao(e)){const d=r[o++];for(const p of a)if(this.Sn(t,u.fieldPath)&&Xh(d))a=this.bn(a,u,d);else{const m=p.tn(u.kind);ho.xt.At(d,m)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const p=new lh;p.seed(d.Yt()),ho.xt.At(u,p.tn(t.kind)),o.push(p)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof je&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=uh(e),a=Fl(e);return(t?r.G(lv,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return j.forEach(o,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(_,v){const w=v?new Hh(v.sequenceNumber,new ir(Oo(v.readTime),new ce(oi(v.documentKey)),v.largestBatchId)):Hh.empty(),S=_.fields.map(([P,U])=>new Ip(mt.fromServerFormat(P),U));return new Wp(_.indexId,_.collectionGroup,S,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Ce(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=uh(e),o=Fl(e);return this.vn(e).next(u=>a.G(lv,IDBKeyRange.bound(t,t)).next(d=>j.forEach(d,p=>o.put(RA(p.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return j.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?j.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),j.forEach(d,p=>this.Cn(e,a,p).next(m=>{const _=this.Fn(o,p);return m.isEqual(_)?j.resolve():this.Mn(e,o,p,m,_)}))))})}xn(e,t,r,a){return Bl(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return Bl(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=Bl(e);let o=new rt(Gs);return a.Z({index:GC,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,d)=>{o=o.add(new fo(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Fn(e,t){let r=new rt(Gs);const a=this.yn(t,e);if(a==null)return r;const o=av(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Xh(u))for(const d of u.arrayValue.values||[])r=r.add(new fo(t.indexId,e.key,this.fn(d),a))}else r=r.add(new fo(t.indexId,e.key,op,a));return r}Mn(e,t,r,a,o){re(kA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,m,_,v,w){const S=p.getIterator(),P=m.getIterator();let U=Ul(S),M=Ul(P);for(;U||M;){let H=!1,X=!1;if(U&&M){const K=_(U,M);K<0?X=!0:K>0&&(H=!0)}else U!=null?X=!0:H=!0;H?(v(M),M=Ul(P)):X?(w(U),U=Ul(S)):(U=Ul(S),M=Ul(P))}}(a,o,Gs,d=>{u.push(this.xn(e,t,r,d))},d=>{u.push(this.On(e,t,r,d))}),j.waitFor(u)}vn(e){let t=1;return Fl(e).Z({index:$C,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Gs(u,d)).filter((u,d,p)=>!d||Gs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Gs(u,e),p=Gs(u,t);if(d===0)a[0]=e.nn();else if(d>0&&p<0)a.push(u),a.push(u.nn());else if(p>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,op,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,op,[]];o.push(IDBKeyRange.bound(d,p))}return o}Nn(e,t){return Gs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(MA)}getMinOffset(e,t){return j.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||me())).next(MA)}}function VA(n){return en(n,Qh)}function Bl(n){return en(n,em)}function uh(n){return en(n,CE)}function Fl(n){return en(n,Jp)}function MA(n){_e(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;AE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new ir(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W1=41943040;class Sn{static withCacheSize(e){return new Sn(e,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(n,e,t){const r=n.store(Nr),a=n.store(pu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=r.Z({range:u},(_,v,w)=>(d++,w.delete()));o.push(p.next(()=>{_e(d===1)}));const m=[];for(const _ of t.mutations){const v=jC(e,_.key.path,t.batchId);o.push(a.delete(v)),m.push(_.key)}return j.waitFor(o).next(()=>m)}function am(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw me();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.DEFAULT_COLLECTION_PERCENTILE=10,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sn.DEFAULT=new Sn(W1,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sn.DISABLED=new Sn(-1,0,0);class Hm{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){_e(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new Hm(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ks(e).Z({index:yo,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=Kl(e),u=Ks(e);return u.add({}).next(d=>{_e(typeof d=="number");const p=new UE(d,t,r,a),m=function(S,P,U){const M=U.baseMutations.map(X=>ed(S.Tt,X)),H=U.mutations.map(X=>ed(S.Tt,X));return{userId:P,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:M,mutations:H}}(this.serializer,this.userId,p),_=[];let v=new rt((w,S)=>Ce(w.canonicalString(),S.canonicalString()));for(const w of a){const S=jC(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),_.push(u.put(m)),_.push(o.put(S,P4))}return v.forEach(w=>{_.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Bn[d]=p.keys()}),j.waitFor(_).next(()=>p)})}lookupMutationBatch(e,t){return Ks(e).get(t).next(r=>r?(_e(r.userId===this.userId),co(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?j.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return Ks(e).Z({index:yo,range:a},(u,d,p)=>{d.userId===this.userId&&(_e(d.batchId>=r),o=co(this.serializer,d)),p.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=ia;return Ks(e).Z({index:yo,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ia],[this.userId,Number.POSITIVE_INFINITY]);return Ks(e).G(yo,t).next(r=>r.map(a=>co(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ap(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return Kl(e).Z({range:a},(u,d,p)=>{const[m,_,v]=u,w=oi(_);if(m===this.userId&&t.path.isEqual(w))return Ks(e).get(v).next(S=>{if(!S)throw me();_e(S.userId===this.userId),o.push(co(this.serializer,S))});p.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rt(Ce);const a=[];return t.forEach(o=>{const u=Ap(this.userId,o.path),d=IDBKeyRange.lowerBound(u),p=Kl(e).Z({range:d},(m,_,v)=>{const[w,S,P]=m,U=oi(S);w===this.userId&&o.path.isEqual(U)?r=r.add(P):v.done()});a.push(p)}),j.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=Ap(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new rt(Ce);return Kl(e).Z({range:u},(p,m,_)=>{const[v,w,S]=p,P=oi(w);v===this.userId&&r.isPrefixOf(P)?P.length===a&&(d=d.add(S)):_.done()}).next(()=>this.kn(e,d))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push(Ks(e).get(o).next(u=>{if(u===null)throw me();_e(u.userId===this.userId),r.push(co(this.serializer,u))}))}),j.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return Y1(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),j.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return j.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Kl(e).Z({range:r},(o,u,d)=>{if(o[0]===this.userId){const p=oi(o[1]);a.push(p)}else d.done()}).next(()=>{_e(a.length===0)})})}containsKey(e,t){return X1(e,this.userId,t)}Qn(e){return Z1(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:ia,lastStreamToken:""})}}function X1(n,e,t){const r=Ap(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return Kl(n).Z({range:o,Y:!0},(d,p,m)=>{const[_,v,w]=d;_===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function Ks(n){return en(n,Nr)}function Kl(n){return en(n,pu)}function Z1(n){return en(n,Gh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ko(0)}static Kn(){return new ko(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zz{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new ko(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Te.fromTimestamp(new yt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>jl(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(_e(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return jl(e).Z((u,d)=>{const p=vh(d);p.sequenceNumber<=t&&r.get(p.targetId)===null&&(a++,o.push(this.removeTargetData(e,p)))}).next(()=>j.waitFor(o)).next(()=>a)}forEachTarget(e,t){return jl(e).Z((r,a)=>{const o=vh(a);t(o)})}Wn(e){return UA(e).get(Zp).next(t=>(_e(t!==null),t))}Gn(e,t){return UA(e).put(Zp,t)}zn(e,t){return jl(e).put(G1(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Do(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return jl(e).Z({range:a,index:HC},(u,d,p)=>{const m=vh(d);Ed(t,m.target)&&(o=m,p.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Xs(e);return t.forEach(u=>{const d=Rn(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),j.waitFor(a)}removeMatchingKeys(e,t,r){const a=Xs(e);return j.forEach(t,o=>{const u=Rn(o.path);return j.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Xs(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Xs(e);let o=Ne();return a.Z({range:r,Y:!0},(u,d,p)=>{const m=oi(u[1]),_=new ce(m);o=o.add(_)}).next(()=>o)}containsKey(e,t){const r=Rn(t.path),a=IDBKeyRange.bound([r],[VC(r)],!1,!0);let o=0;return Xs(e).Z({index:RE,Y:!0,range:a},([u,d],p,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}lt(e,t){return jl(e).get(t).next(r=>r?vh(r):null)}}function jl(n){return en(n,mu)}function UA(n){return en(n,Io)}function Xs(n){return en(n,gu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="LruGarbageCollector",Jz=1048576;function BA([n,e],[t,r]){const a=Ce(n,t);return a===0?Ce(e,r):a}class eB{constructor(e){this.Hn=e,this.buffer=new rt(BA),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();BA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class J1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(zA,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wa(t)?re(zA,"Ignoring IndexedDB error during garbage collection: ",t):await Ta(t)}await this.er(3e5)})}}class tB{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Hn.ae);const r=new eB(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(LA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),LA):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,d,p,m;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),ql()<=Be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(m-p)+`ms
Total Duration: ${m-_}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function eD(n,e){return new tB(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t){this.db=e,this.garbageCollector=eD(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return lp(e,r)}removeReference(e,t,r){return lp(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return lp(e,t)}ar(e,t){return function(a,o){let u=!1;return Z1(a).X(d=>X1(a,d,o).next(p=>(p&&(u=!0),j.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,d)=>{if(d<=t){const p=this.ar(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Te.min()),Xs(e).delete(function(v){return[0,Rn(v.path)]}(u))))});a.push(p)}}).next(()=>j.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return lp(e,t)}_r(e,t){const r=Xs(e);let a,o=Hn.ae;return r.Z({index:RE},([u,d],{path:p,sequenceNumber:m})=>{u===0?(o!==Hn.ae&&t(new ce(oi(a)),o),o=m,a=p):o=Hn.ae}).next(()=>{o!==Hn.ae&&t(new ce(oi(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function lp(n,e){return Xs(n).put(function(r,a){return{targetId:0,path:Rn(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.changes=new ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return io(e).put(r)}removeEntry(e,t,r){return io(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],im(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=dt.newInvalidDocument(t);return io(e).Z({index:Sp,range:IDBKeyRange.only(ch(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:dt.newInvalidDocument(t)};return io(e).Z({index:Sp,range:IDBKeyRange.only(ch(t))},(a,o)=>{r={document:this.cr(t,o),size:am(o)}}).next(()=>r)}getEntries(e,t){let r=Gn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=Gn(),a=new ut(ce.comparator);return this.hr(e,t,(o,u)=>{const d=this.cr(o,u);r=r.insert(o,d),a=a.insert(o,am(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return j.resolve();let a=new rt(qA);t.forEach(p=>a=a.add(p));const o=IDBKeyRange.bound(ch(a.first()),ch(a.last())),u=a.getIterator();let d=u.getNext();return io(e).Z({index:Sp,range:o},(p,m,_)=>{const v=ce.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&qA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?_.W(ch(d)):_.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),im(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return io(e).G(IDBKeyRange.bound(d,p,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let _=Gn();for(const v of m){const w=this.cr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(wd(t,w)||a.has(w.key))&&(_=_.insert(w.key,w))}return _})}getAllFromCollectionGroup(e,t,r,a){let o=Gn();const u=jA(t,r),d=jA(t,ir.max());return io(e).Z({index:qC,range:IDBKeyRange.bound(u,d,!0)},(p,m,_)=>{const v=this.cr(ce.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&_.done()}).next(()=>o)}newChangeBuffer(e){return new iB(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return FA(e).get(ov).next(t=>(_e(!!t),t))}ur(e,t){return FA(e).put(ov,t)}cr(e,t){if(t){const r=jz(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Te.min())))return r}return dt.newInvalidDocument(e)}}function nD(n){return new rB(n)}class iB extends tD{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new ss(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new rt((o,u)=>Ce(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,d.readTime)),u.isValidDocument()){const p=AA(this.Ir.serializer,u);a=a.add(o.path.popLast());const m=am(p);r+=m-d.size,t.push(this.Ir.addEntry(e,o,p))}else if(r-=d.size,this.trackRemovals){const p=AA(this.Ir.serializer,u.convertToNoDocument(Te.min()));t.push(this.Ir.addEntry(e,o,p))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),j.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function FA(n){return en(n,Kh)}function io(n){return en(n,Xp)}function ch(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function jA(n,e){const t=e.documentKey.path.toArray();return[n,im(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function qA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Ce(t[o],r[o]),a)return a;return a=Ce(t.length,r.length),a||(a=Ce(t[t.length-2],r[r.length-2]),a||Ce(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&xh(r.mutation,a,$n.empty(),yt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ne()){const a=li();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=yh();return o.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=li();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ne()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Gn();const u=Dh(),d=function(){return Dh()}();return t.forEach((p,m)=>{const _=r.get(m.key);a.has(m.key)&&(_===void 0||_.mutation instanceof as)?o=o.insert(m.key,m):_!==void 0?(u.set(m.key,_.mutation.getFieldMask()),xh(_.mutation,m,_.mutation.getFieldMask(),yt.now())):u.set(m.key,$n.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,_)=>u.set(m,_)),t.forEach((m,_)=>{var v;return d.set(m,new sB(_,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Dh();let a=new ut((u,d)=>u-d),o=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let _=r.get(p)||$n.empty();_=d.applyToLocalView(m,_),r.set(p,_);const v=(a.get(d.batchId)||Ne()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,_=p.value,v=E1();_.forEach(w=>{if(!o.has(w)){const S=R1(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return j.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):j.resolve(li());let d=fu,p=o;return u.next(m=>j.forEach(m,(_,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(_)?j.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{p=p.insert(_,w)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,Ne())).next(_=>({batchId:d,changes:v1(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=yh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=yh();return this.indexManager.getCollectionParents(e,o).next(d=>j.forEach(d,p=>{const m=function(v,w){return new is(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(_=>{_.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((p,m)=>{const _=m.getKey();u.get(_)===null&&(u=u.insert(_,dt.newInvalidDocument(_)))});let d=yh();return u.forEach((p,m)=>{const _=o.get(p);_!==void 0&&xh(_.mutation,m,$n.empty(),yt.now()),wd(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return j.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Lt(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:qE(a.bundledQuery),readTime:Lt(a.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(){this.overlays=new ut(ce.comparator),this.Rr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=li();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const a=li(),o=t.length+1,u=new ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>r&&a.set(p.getKey(),p)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new ut((m,_)=>m-_);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let _=o.get(m.largestBatchId);_===null&&(_=li(),o=o.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const d=li(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,_)=>d.set(m,_)),!(d.size()>=a)););return j.resolve(d)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new BE(t,r));let o=this.Rr.get(t);o===void 0&&(o=Ne(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.Vr=new rt(cn.mr),this.gr=new rt(cn.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new cn(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new cn(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ce(new Fe([])),r=new cn(t,e),a=new cn(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ce(new Fe([])),r=new cn(t,e),a=new cn(t,e+1);let o=Ne();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new cn(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class cn{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ce.comparator(e.key,t.key)||Ce(e.Cr,t.Cr)}static pr(e,t){return Ce(e.Cr,t.Cr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(cn.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new UE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new cn(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return j.resolve(u)}lookupMutationBatch(e,t){return j.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return j.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?ia:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new cn(t,0),a=new cn(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const d=this.Or(u.Cr);o.push(d)}),j.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rt(Ce);return t.forEach(a=>{const o=new cn(a,0),u=new cn(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],d=>{r=r.add(d.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;ce.isDocumentKey(o)||(o=o.child(""));const u=new cn(new ce(o),0);let d=new rt(Ce);return this.Mr.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Cr)),!0)},u),j.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){_e(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(t.mutations,a=>{const o=new cn(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new cn(t,0),a=this.Mr.firstAfterOrEqual(r);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cB{constructor(e){this.kr=e,this.docs=function(){return new ut(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=Gn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():dt.newInvalidDocument(a))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Gn();const u=t.path,d=new ce(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:_}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||AE(LC(_),r)<=0||(a.has(_.key)||wd(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return j.resolve(o)}getAllFromCollectionGroup(e,t,r,a){me()}qr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new hB(this)}getSize(e){return j.resolve(this.size)}}class hB extends tD{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(e){this.persistence=e,this.Qr=new ss(t=>Do(t),Ed),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Ur=new GE,this.targetCount=0,this.Kr=ko.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),j.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new ko(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.zn(t),j.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),j.waitFor(o).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),j.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Hn(0),this.zr=!1,this.zr=!0,this.jr=new lB,this.referenceDelegate=e(this),this.Hr=new dB(this),this.indexManager=new Yz,this.remoteDocumentCache=function(a){return new cB(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new $1(t),this.Yr=new aB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oB,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new uB(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new fB(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class fB extends zC{constructor(e){super(),this.currentSequenceNumber=e}}class $m{constructor(e){this.persistence=e,this.ti=new GE,this.ni=null}static ri(e){return new $m(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),j.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const a=ce.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Te.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return j.or([()=>j.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class om{constructor(e,t){this.persistence=e,this.oi=new ss(r=>Rn(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=eD(this,t)}static ri(e,t){return new om(e,t)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return j.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?j.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cp(e.data.value)),t}ar(e,t,r){return j.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return j.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pB{constructor(e){this.serializer=e}B(e,t,r,a){const o=new km("createOrUpgrade",t);r<1&&a>=1&&(function(p){p.createObjectStore(vd)}(e),function(p){p.createObjectStore(Gh,{keyPath:x4}),p.createObjectStore(Nr,{keyPath:tA,autoIncrement:!0}).createIndex(yo,nA,{unique:!0}),p.createObjectStore(pu)}(e),HA(e),function(p){p.createObjectStore(oo)}(e));let u=j.resolve();return r<3&&a>=3&&(r!==0&&(function(p){p.deleteObjectStore(gu),p.deleteObjectStore(mu),p.deleteObjectStore(Io)}(e),HA(e)),u=u.next(()=>function(p){const m=p.store(Io),_={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Te.min().toTimestamp(),targetCount:0};return m.put(Zp,_)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(p,m){return m.store(Nr).G().next(v=>{p.deleteObjectStore(Nr),p.createObjectStore(Nr,{keyPath:tA,autoIncrement:!0}).createIndex(yo,nA,{unique:!0});const w=m.store(Nr),S=v.map(P=>w.put(P));return j.waitFor(S)})}(e,o))),u=u.next(()=>{(function(p){p.createObjectStore(yu,{keyPath:z4})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(Kh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(Vm,{keyPath:B4})})(e),function(p){p.createObjectStore(Mm,{keyPath:F4})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(p){const m=p.createObjectStore(Lm,{keyPath:Q4});m.createIndex(uv,W4,{unique:!1}),m.createIndex(KC,Y4,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(p){const m=p.createObjectStore(Xp,{keyPath:N4});m.createIndex(Sp,O4),m.createIndex(qC,k4)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(oo))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(CE,{keyPath:j4,autoIncrement:!0}).createIndex(lv,q4,{unique:!1}),p.createObjectStore(Jp,{keyPath:H4}).createIndex($C,$4,{unique:!1}),p.createObjectStore(em,{keyPath:G4}).createIndex(GC,K4,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Jp).clear()}).next(()=>{t.objectStore(em).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(DE,{keyPath:X4})})(e)})),u}ai(e){let t=0;return e.store(oo).Z((r,a)=>{t+=am(a)}).next(()=>{const r={byteSize:t};return e.store(Kh).put(ov,r)})}_i(e){const t=e.store(Gh),r=e.store(Nr);return t.G().next(a=>j.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,ia],[o.userId,o.lastAcknowledgedBatchId]);return r.G(yo,u).next(d=>j.forEach(d,p=>{_e(p.userId===o.userId);const m=co(this.serializer,p);return Y1(e,o.userId,m).next(()=>{})}))}))}ui(e){const t=e.store(gu),r=e.store(oo);return e.store(Io).get(Zp).next(a=>{const o=[];return r.Z((u,d)=>{const p=new Fe(u),m=function(v){return[0,Rn(v)]}(p);o.push(t.get(m).next(_=>_?j.resolve():(v=>t.put({targetId:0,path:Rn(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>j.waitFor(o))})}ci(e,t){e.createObjectStore(Qh,{keyPath:U4});const r=t.store(Qh),a=new $E,o=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return r.put({collectionId:d,parent:Rn(p)})}};return t.store(oo).Z({Y:!0},(u,d)=>{const p=new Fe(u);return o(p.popLast())}).next(()=>t.store(pu).Z({Y:!0},([u,d,p],m)=>{const _=oi(d);return o(_.popLast())}))}li(e){const t=e.store(mu);return t.Z((r,a)=>{const o=vh(a),u=G1(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(oo),a=[];return r.Z((o,u)=>{const d=t.store(Xp),p=function(v){return v.document?new ce(Fe.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):me()}(u).path.toArray(),m={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>j.waitFor(a))}Pi(e,t){const r=t.store(Nr),a=nD(this.serializer),o=new KE($m.ri,this.serializer.Tt);return r.G().next(u=>{const d=new Map;return u.forEach(p=>{var m;let _=(m=d.get(p.userId))!==null&&m!==void 0?m:Ne();co(this.serializer,p).keys().forEach(v=>_=_.add(v)),d.set(p.userId,_)}),j.forEach(d,(p,m)=>{const _=new dn(m),v=qm.It(this.serializer,_),w=o.getIndexManager(_),S=Hm.It(_,this.serializer,w,o.referenceDelegate);return new rD(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new cv(t,Hn.ae),p).next()})})}}function HA(n){n.createObjectStore(gu,{keyPath:M4}).createIndex(RE,L4,{unique:!0}),n.createObjectStore(mu,{keyPath:"targetId"}).createIndex(HC,V4,{unique:!0}),n.createObjectStore(Io)}const Qs="IndexedDbPersistence",D_=18e5,x_=5e3,P_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",iD="main";class QE{constructor(e,t,r,a,o,u,d,p,m,_,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=d,this.Ii=m,this.Ei=_,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=w=>Promise.resolve(),!QE.D())throw new te(Q.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new nB(this,a),this.gi=t+iD,this.serializer=new $1(p),this.pi=new ui(this.gi,this.di,new pB(this.serializer)),this.jr=new Hz,this.Hr=new Zz(this.referenceDelegate,this.serializer),this.remoteDocumentCache=nD(this.serializer),this.Yr=new qz,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,_===!1&&Mt(Qs,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,P_);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new Hn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>up(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(wa(e))return re(Qs,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re(Qs,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return hh(e).get(Ll).next(t=>j.resolve(this.Ni(t)))}Bi(e){return up(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,D_)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=en(t,yu);return r.G().next(a=>{const o=this.qi(a,D_),u=a.filter(d=>o.indexOf(d)===-1);return j.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?j.resolve(!0):hh(e).get(Ll).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,x_)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,P_);return!1}}return!(!this.networkEnabled||!this.inForeground)||up(e).G().next(r=>this.qi(r,x_).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re(Qs,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[vd,yu],e=>{const t=new cv(e,Hn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>up(e).G().next(t=>this.qi(t,D_).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return Hm.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Xz(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return qm.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){re(Qs,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(p){return p===17?ez:p===16?J4:p===15?xE:p===14?YC:p===13?WC:p===12?Z4:p===11?QC:void me()}(this.di);let u;return this.pi.runTransaction(e,a,o,d=>(u=new cv(d,this.Gr?this.Gr.next():Hn.ae),t==="readwrite-primary"?this.Fi(u).next(p=>!!p||this.Mi(u)).next(p=>{if(!p)throw Mt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new te(Q.FAILED_PRECONDITION,UC);return r(u)}).next(p=>this.Oi(u).next(()=>p)):this.ji(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}ji(e){return hh(e).get(Ll).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,x_)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(Q.FAILED_PRECONDITION,P_)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hh(e).put(Ll,t)}static D(){return ui.D()}xi(e){const t=hh(e);return t.get(Ll).next(r=>this.Ni(r)?(re(Qs,"Releasing primary lease."),t.delete(Ll)):j.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Mt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;pR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return re(Qs,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Mt(Qs,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Mt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hh(n){return en(n,vd)}function up(n){return en(n,yu)}function WE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=Ne(),a=Ne();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new YE(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return pR()?8:BC(bt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new mB;return this._s(e,t,u).next(d=>{if(o.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(ql()<=Be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Hl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(ql()<=Be.DEBUG&&re("QueryEngine","Query:",Hl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(ql()<=Be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Hl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(t))):j.resolve())}rs(e,t){if(mA(t))return j.resolve(null);let r=Ln(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=rm(t,null,"F"),r=Ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Ne(...o);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.cs(t,d);return this.ls(t,m,u,p.readTime)?this.rs(e,rm(t,null,"F")):this.hs(e,m,t,p)}))})))}ss(e,t,r,a){return mA(t)||a.isEqual(Te.min())?j.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?j.resolve(null):(ql()<=Be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Hl(t)),this.hs(e,u,t,MC(a,fu)).next(d=>d))})}cs(e,t){let r=new rt(y1(e));return t.forEach((a,o)=>{wd(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return ql()<=Be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Hl(t)),this.ns.getDocumentsMatchingQuery(e,t,ir.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="LocalStore",gB=3e8;class yB{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new ut(Ce),this.Is=new ss(o=>Do(o),Ed),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function aD(n,e,t,r){return new yB(n,e,t,r)}async function oD(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let p=Ne();for(const m of a){u.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}for(const m of o){d.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(r,p).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:d}))})})}function _B(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,m,_){const v=m.batch,w=v.keys();let S=j.resolve();return w.forEach(P=>{S=S.next(()=>_.getEntry(p,P)).next(U=>{const M=m.docVersions.get(P);_e(M!==null),U.version.compareTo(M)<0&&(v.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),_.addEntry(U)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=Ne();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function lD(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function vB(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((_,v)=>{const w=a.get(v);if(!w)return;d.push(t.Hr.removeMatchingKeys(o,_.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,_.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),a=a.insert(v,S),function(U,M,H){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=gB?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,S,_)&&d.push(t.Hr.updateTargetData(o,S))});let p=Gn(),m=Ne();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,_))}),d.push(uD(o,u,e.documentUpdates).next(_=>{p=_.Vs,m=_.fs})),!r.isEqual(Te.min())){const _=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(_)}return j.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.Ts=a,o))}function uD(n,e,t){let r=Ne(),a=Ne();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Gn();return t.forEach((d,p)=>{const m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(XE,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Vs:u,fs:a}})}function EB(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ia),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Iu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,j.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Ki(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Au(n,e,t){const r=de(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!wa(u))throw u;re(XE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function lm(n,e,t){const r=de(n);let a=Te.min(),o=Ne();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,_){const v=de(p),w=v.Is.get(_);return w!==void 0?j.resolve(v.Ts.get(w)):v.Hr.getTargetData(m,_)}(r,u,Ln(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(p=>{o=p})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Te.min(),t?o:Ne())).next(d=>(dD(r,g1(e),d),{documents:d,gs:o})))}function cD(n,e){const t=de(n),r=de(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function hD(n,e){const t=de(n),r=t.Es.get(e)||Te.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,MC(r,fu),Number.MAX_SAFE_INTEGER)).then(a=>(dD(t,e,a),a))}function dD(n,e,t){let r=n.Es.get(e)||Te.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function TB(n,e,t,r){const a=de(n);let o=Ne(),u=Gn();for(const m of t){const _=e.ps(m.metadata.name);m.document&&(o=o.add(_));const v=e.ys(m);v.setReadTime(e.ws(m.metadata.readTime)),u=u.insert(_,v)}const d=a.ds.newChangeBuffer({trackRemovals:!0}),p=await Iu(a,function(_){return Ln(Fu(Fe.fromString(`__bundle__/docs/${_}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>uD(m,d,u).next(_=>(d.apply(m),_)).next(_=>a.Hr.removeMatchingKeysForTargetId(m,p.targetId).next(()=>a.Hr.addMatchingKeys(m,o,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,_.Vs,_.fs)).next(()=>_.Vs)))}async function wB(n,e,t=Ne()){const r=await Iu(n,Ln(qE(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Lt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const d=r.withResumeToken(xt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(d.targetId,d),a.Hr.updateTargetData(o,d).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="firestore_clients";function $A(n,e){return`${fD}_${n}_${e}`}const pD="firestore_mutations";function GA(n,e,t){let r=`${pD}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const mD="firestore_targets";function N_(n,e){return`${mD}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="SharedClientState";class um{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new te(a.error.code,a.error.message))),u?new um(e,t,a.state,o):(Mt(ti,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ph{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new te(r.error.code,r.error.message))),o?new Ph(e,r.state,a):(Mt(ti,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=VE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=FC(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new cm(e,o):(Mt(ti,`Failed to parse client data for instance '${e}': ${t}`),null)}}class ZE{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ZE(t.clientId,t.onlineState):(Mt(ti,`Failed to parse online state: ${e}`),null)}}class Av{constructor(){this.activeTargetIds=VE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class O_{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new ut(Ce),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=$A(this.persistenceKey,this.Cs),this.Bs=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new Av),this.Ls=new RegExp(`^${fD}_${u}_([^_]*)$`),this.ks=new RegExp(`^${pD}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${mD}_${u}_(\\d+)$`),this.Qs=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.$s=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem($A(this.persistenceKey,r));if(a){const o=cm.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(N_(this.persistenceKey,e));if(a){const o=Ph.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(N_(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(ti,"READ",e,t),t}setItem(e,t){re(ti,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(ti,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(re(ti,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Mt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=Hn.ae;if(o!=null)try{const d=JSON.parse(o);_e(typeof d=="number"),u=d}catch(d){Mt(ti,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==Hn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new um(this.currentUser,e,t,r),o=GA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=GA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=N_(this.persistenceKey,e),o=new Ph(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return cm.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return um.Ss(new dn(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return Ph.Ss(a,t)}Ks(e){return ZE.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);re(ti,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],d=[];return o.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{o.has(p)||d.push(p)}),this.syncEngine.lo(u,d).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=VE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class gD{constructor(){this.ho=new Av,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Av,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bB{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="ConnectivityMonitor";class QA{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(KA,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(KA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cp=null;function Sv(){return cp===null?cp=function(){return 268435456+Math.round(2147483648*Math.random())}():cp++,"0x"+cp.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="RestConnection",IB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AB{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===hv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=Sv(),d=this.bo(e,t.toUriEncodedString());re(k_,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,o),this.vo(e,d,p,r).then(m=>(re(k_,`Received RPC '${e}' ${u}: `,m),m),m=>{throw pi(k_,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",r),m})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=IB[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SB{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="WebChannelConnection";class RB extends AB{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=Sv();return new Promise((u,d)=>{const p=new CC;p.setWithCredentials(!0),p.listenOnce(DC.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case bp.NO_ERROR:const _=p.getResponseJson();re(An,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(_)),u(_);break;case bp.TIMEOUT:re(An,`RPC '${e}' ${o} timed out`),d(new te(Q.DEADLINE_EXCEEDED,"Request time out"));break;case bp.HTTP_ERROR:const v=p.getStatus();if(re(An,`RPC '${e}' ${o} failed with status:`,v,"response text:",p.getResponseText()),v>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const P=function(M){const H=M.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(H)>=0?H:Q.UNKNOWN}(S.status);d(new te(P,S.message))}else d(new te(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new te(Q.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{re(An,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(a);re(An,`RPC '${e}' ${o} sending request:`,a),p.send(t,"POST",m,r,15)})}Wo(e,t,r){const a=Sv(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=NC(),d=PC(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const _=o.join("");re(An,`Creating RPC '${e}' stream ${a}: ${_}`,p);const v=u.createWebChannel(_,p);let w=!1,S=!1;const P=new SB({Fo:M=>{S?re(An,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(w||(re(An,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(An,`RPC '${e}' stream ${a} sending:`,M),v.send(M))},Mo:()=>v.close()}),U=(M,H,X)=>{M.listen(H,K=>{try{X(K)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,gh.EventType.OPEN,()=>{S||(re(An,`RPC '${e}' stream ${a} transport opened.`),P.Qo())}),U(v,gh.EventType.CLOSE,()=>{S||(S=!0,re(An,`RPC '${e}' stream ${a} transport closed`),P.Uo())}),U(v,gh.EventType.ERROR,M=>{S||(S=!0,pi(An,`RPC '${e}' stream ${a} transport errored:`,M),P.Uo(new te(Q.UNAVAILABLE,"The operation could not be completed")))}),U(v,gh.EventType.MESSAGE,M=>{var H;if(!S){const X=M.data[0];_e(!!X);const K=X,oe=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(oe){re(An,`RPC '${e}' stream ${a} received error:`,oe);const se=oe.status;let le=function(A){const x=qt[A];if(x!==void 0)return x1(x)}(se),D=oe.message;le===void 0&&(le=Q.INTERNAL,D="Unknown error status: "+se+" with message "+oe.message),S=!0,P.Uo(new te(le,D)),v.close()}else re(An,`RPC '${e}' stream ${a} received:`,X),P.Ko(X)}}),U(d,xC.STAT_EVENT,M=>{M.stat===iv.PROXY?re(An,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===iv.NOPROXY&&re(An,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return typeof window<"u"?window:null}function Np(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n){return new Nz(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="PersistentStream";class _D{constructor(e,t,r,a,o,u,d,p){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new JE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Mt(t.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new te(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(WA,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(re(WA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CB extends _D{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=Vz(this.serializer,e),r=function(o){if(!("targetChange"in o))return Te.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Lt(u.readTime):Te.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Ev(this.serializer),t.addTarget=function(o,u){let d;const p=u.target;if(d=tm(p)?{documents:z1(o,p)}:{query:B1(o,p).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=O1(o,u.resumeToken);const m=_v(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=bu(o,u.snapshotVersion.toTimestamp());const m=_v(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=Lz(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Ev(this.serializer),t.removeTarget=e,this.I_(t)}}class DB extends _D{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Mz(e.writeResults,e.commitTime),r=Lt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Ev(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ed(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xB{}class PB extends xB{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,vv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(Q.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,vv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(Q.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class NB{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Mt(t),this.N_=!1):re("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="RemoteStore";class OB{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{Ia(this)&&(re(Vo,"Restarting streams for network reachability change."),await async function(p){const m=de(p);m.W_.add(4),await Hu(m),m.j_.set("Unknown"),m.W_.delete(4),await Rd(m)}(this))})}),this.j_=new NB(r,a)}}async function Rd(n){if(Ia(n))for(const e of n.G_)await e(!0)}async function Hu(n){for(const e of n.G_)await e(!1)}function Gm(n,e){const t=de(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),nT(t)?tT(t):Gu(t).c_()&&eT(t,e))}function Su(n,e){const t=de(n),r=Gu(t);t.K_.delete(e),r.c_()&&vD(t,e),t.K_.size===0&&(r.c_()?r.P_():Ia(t)&&t.j_.set("Unknown"))}function eT(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Gu(n).y_(e)}function vD(n,e){n.H_.Ne(e),Gu(n).w_(e)}function tT(n){n.H_=new Cz({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Gu(n).start(),n.j_.B_()}function nT(n){return Ia(n)&&!Gu(n).u_()&&n.K_.size>0}function Ia(n){return de(n).W_.size===0}function ED(n){n.H_=void 0}async function kB(n){n.j_.set("Online")}async function VB(n){n.K_.forEach((e,t)=>{eT(n,e)})}async function MB(n,e){ED(n),nT(n)?(n.j_.q_(e),tT(n)):n.j_.set("Unknown")}async function LB(n,e,t){if(n.j_.set("Online"),e instanceof N1&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a.K_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.K_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(r){re(Vo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hm(n,r)}else if(e instanceof Pp?n.H_.We(e):e instanceof P1?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Te.min()))try{const r=await lD(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.H_.ot(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const _=o.K_.get(m);_&&o.K_.set(m,_.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const _=o.K_.get(p);if(!_)return;o.K_.set(p,_.withResumeToken(xt.EMPTY_BYTE_STRING,_.snapshotVersion)),vD(o,p);const v=new Ki(_.target,p,m,_.sequenceNumber);eT(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re(Vo,"Failed to raise snapshot:",r),await hm(n,r)}}async function hm(n,e,t){if(!wa(e))throw e;n.W_.add(1),await Hu(n),n.j_.set("Offline"),t||(t=()=>lD(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(Vo,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Rd(n)})}function TD(n,e){return e().catch(t=>hm(n,t,e))}async function $u(n){const e=de(n),t=ma(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:ia;for(;UB(e);)try{const a=await EB(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,zB(e,a)}catch(a){await hm(e,a)}wD(e)&&bD(e)}function UB(n){return Ia(n)&&n.U_.length<10}function zB(n,e){n.U_.push(e);const t=ma(n);t.c_()&&t.S_&&t.b_(e.mutations)}function wD(n){return Ia(n)&&!ma(n).u_()&&n.U_.length>0}function bD(n){ma(n).start()}async function BB(n){ma(n).C_()}async function FB(n){const e=ma(n);for(const t of n.U_)e.b_(t.mutations)}async function jB(n,e,t){const r=n.U_.shift(),a=zE.from(r,e,t);await TD(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await $u(n)}async function qB(n,e){e&&ma(n).S_&&await async function(r,a){if(function(u){return D1(u)&&u!==Q.ABORTED}(a.code)){const o=r.U_.shift();ma(r).h_(),await TD(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await $u(r)}}(n,e),wD(n)&&bD(n)}async function YA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),re(Vo,"RemoteStore received new credentials");const r=Ia(t);t.W_.add(3),await Hu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Rd(t)}async function Rv(n,e){const t=de(n);e?(t.W_.delete(2),await Rd(t)):e||(t.W_.add(2),await Hu(t),t.j_.set("Unknown"))}function Gu(n){return n.J_||(n.J_=function(t,r,a){const o=de(t);return o.M_(),new CB(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:kB.bind(null,n),No:VB.bind(null,n),Lo:MB.bind(null,n),p_:LB.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),nT(n)?tT(n):n.j_.set("Unknown")):(await n.J_.stop(),ED(n))})),n.J_}function ma(n){return n.Y_||(n.Y_=function(t,r,a){const o=de(t);return o.M_(),new DB(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:BB.bind(null,n),Lo:qB.bind(null,n),D_:FB.bind(null,n),v_:jB.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await $u(n)):(await n.Y_.stop(),n.U_.length>0&&(re(Vo,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new rT(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ku(n,e){if(Mt("AsyncQueue",`${e}: ${n}`),wa(n))return new te(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static emptySet(e){return new nu(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=yh(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nu)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new nu;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.Z_=new ut(ce.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ru{constructor(e,t,r,a,o,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Ru(e,t,nu.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HB{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class $B{constructor(){this.queries=ZA(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=de(t),o=a.queries;a.queries=ZA(),o.forEach((u,d)=>{for(const p of d.ta)p.onError(r)})})(this,new te(Q.ABORTED,"Firestore shutting down"))}}function ZA(){return new ss(n=>m1(n),Td)}async function iT(n,e){const t=de(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new HB,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=Ku(u,`Initialization of query '${Hl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&aT(t)}async function sT(n,e){const t=de(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function GB(n,e){const t=de(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.ta)d.oa(a)&&(r=!0);u.ea=a}}r&&aT(t)}function KB(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function aT(n){n.ia.forEach(e=>{e.next()})}var Cv,JA;(JA=Cv||(Cv={}))._a="default",JA.Cache="cache";class oT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Ru(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ru.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Cv.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QB{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.serializer=e}ps(e){return ci(this.serializer,e)}ys(e){return e.metadata.exists?U1(this.serializer,e.document,!1):dt.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Lt(e)}}class WB{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ID(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=Fe.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new eS(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Ne()).add(o);t.set(u,d)}}return t}async complete(){const e=await TB(this.localStore,new eS(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await wB(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function ID(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.key=e}}class SD{constructor(e){this.key=e}}class RD{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ne(),this.mutatedKeys=Ne(),this.ya=y1(e),this.wa=new nu(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new XA,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((_,v)=>{const w=a.get(_),S=wd(this.query,v)?v:null,P=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let M=!1;w&&S?w.data.isEqual(S.data)?P!==U&&(r.track({type:3,doc:S}),M=!0):this.va(w,S)||(r.track({type:2,doc:S}),M=!0,(p&&this.ya(S,p)>0||m&&this.ya(S,m)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),M=!0):w&&!S&&(r.track({type:1,doc:w}),M=!0,(p||m)&&(d=!0)),M&&(S?(u=u.add(S),o=U?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{wa:u,Da:r,ls:d,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((_,v)=>function(S,P){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return U(S)-U(P)}(_.type,v.type)||this.ya(_.doc,v.doc)),this.Ca(r),a=a!=null&&a;const d=t&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,m=p!==this.ga;return this.ga=p,u.length!==0||m?{snapshot:new Ru(this.query,e.wa,o,u,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new XA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ne(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new SD(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new AD(r))}),t}Oa(e){this.fa=e.gs,this.pa=Ne();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Ru.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Aa="SyncEngine";class YB{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class XB{constructor(e){this.key=e,this.Ba=!1}}class ZB{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new ss(d=>m1(d),Td),this.qa=new Map,this.Qa=new Set,this.$a=new ut(ce.comparator),this.Ua=new Map,this.Ka=new GE,this.Wa={},this.Ga=new Map,this.za=ko.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function JB(n,e,t=!0){const r=Km(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await CD(r,e,t,!0),a}async function eF(n,e){const t=Km(n);await CD(t,e,!0,!1)}async function CD(n,e,t,r){const a=await Iu(n.localStore,Ln(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await lT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Gm(n.remoteStore,a),d}async function lT(n,e,t,r,a){n.Ha=(v,w,S)=>async function(U,M,H,X){let K=M.view.ba(H);K.ls&&(K=await lm(U.localStore,M.query,!1).then(({documents:D})=>M.view.ba(D,K)));const oe=X&&X.targetChanges.get(M.targetId),se=X&&X.targetMismatches.get(M.targetId)!=null,le=M.view.applyChanges(K,U.isPrimaryClient,oe,se);return Dv(U,M.targetId,le.Ma),le.snapshot}(n,v,w,S);const o=await lm(n.localStore,e,!0),u=new RD(e,o.gs),d=u.ba(o.documents),p=Ad.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);Dv(n,t,m.Ma);const _=new YB(e,t,u);return n.ka.set(e,_),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function tF(n,e,t){const r=de(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!Td(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Au(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&Su(r.remoteStore,a.targetId),Cu(r,a.targetId)}).catch(Ta)):(Cu(r,a.targetId),await Au(r.localStore,a.targetId,!0))}async function nF(n,e){const t=de(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Su(t.remoteStore,r.targetId))}async function rF(n,e,t){const r=dT(n);try{const a=await function(u,d){const p=de(u),m=yt.now(),_=d.reduce((S,P)=>S.add(P.key),Ne());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Gn(),U=Ne();return p.ds.getEntries(S,_).next(M=>{P=M,P.forEach((H,X)=>{X.isValidDocument()||(U=U.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,P)).next(M=>{v=M;const H=[];for(const X of d){const K=Az(X,v.get(X.key).overlayedDocument);K!=null&&H.push(new as(X.key,K,a1(K.value.mapValue),gt.exists(!0)))}return p.mutationQueue.addMutationBatch(S,m,H,d)}).next(M=>{w=M;const H=M.applyToLocalDocumentSet(v,U);return p.documentOverlayCache.saveOverlays(S,M.batchId,H)})}).then(()=>({batchId:w.batchId,changes:v1(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.Wa[u.currentUser.toKey()];m||(m=new ut(Ce)),m=m.insert(d,p),u.Wa[u.currentUser.toKey()]=m}(r,a.batchId,t),await os(r,a.changes),await $u(r.remoteStore)}catch(a){const o=Ku(a,"Failed to persist write");t.reject(o)}}async function DD(n,e){const t=de(n);try{const r=await vB(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(_e(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?_e(u.Ba):a.removedDocuments.size>0&&(_e(u.Ba),u.Ba=!1))}),await os(t,r,e)}catch(r){await Ta(r)}}function tS(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=de(u);p.onlineState=d;let m=!1;p.queries.forEach((_,v)=>{for(const w of v.ta)w.sa(d)&&(m=!0)}),m&&aT(p)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iF(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new ut(ce.comparator);u=u.insert(o,dt.newNoDocument(o,Te.min()));const d=Ne().add(o),p=new Id(Te.min(),new Map,new ut(Ce),u,d);await DD(r,p),r.$a=r.$a.remove(o),r.Ua.delete(e),hT(r)}else await Au(r.localStore,e,!1).then(()=>Cu(r,e,t)).catch(Ta)}async function sF(n,e){const t=de(n),r=e.batch.batchId;try{const a=await _B(t.localStore,e);cT(t,r,null),uT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await os(t,a)}catch(a){await Ta(a)}}async function aF(n,e,t){const r=de(n);try{const a=await function(u,d){const p=de(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return p.mutationQueue.lookupMutationBatch(m,d).next(v=>(_e(v!==null),_=v.keys(),p.mutationQueue.removeMutationBatch(m,v))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,_,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>p.localDocuments.getDocuments(m,_))})}(r.localStore,e);cT(r,e,t),uT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await os(r,a)}catch(a){await Ta(a)}}async function oF(n,e){const t=de(n);Ia(t.remoteStore)||re(Aa,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=de(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(r===ia)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=Ku(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function uT(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function cT(n,e,t){const r=de(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function Cu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||xD(n,r)})}function xD(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Su(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),hT(n))}function Dv(n,e,t){for(const r of t)r instanceof AD?(n.Ka.addReference(r.key,e),lF(n,r)):r instanceof SD?(re(Aa,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||xD(n,r.key)):me()}function lF(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(re(Aa,"New document in limbo: "+t),n.Qa.add(r),hT(n))}function hT(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ce(Fe.fromString(e)),r=n.za.next();n.Ua.set(r,new XB(t)),n.$a=n.$a.insert(t,r),Gm(n.remoteStore,new Ki(Ln(Fu(t.path)),r,"TargetPurposeLimboResolution",Hn.ae))}}async function os(n,e,t){const r=de(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,p)=>{u.push(r.Ha(p,e,t).then(m=>{var _;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(m){a.push(m);const v=YE.Yi(p.targetId,m);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(p,m){const _=de(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>j.forEach(m,w=>j.forEach(w.Hi,S=>_.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>j.forEach(w.Ji,S=>_.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!wa(v))throw v;re(XE,"Failed to update sequence numbers: "+v)}for(const v of m){const w=v.targetId;if(!v.fromCache){const S=_.Ts.get(w),P=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(P);_.Ts=_.Ts.insert(w,U)}}}(r.localStore,o))}async function uF(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){re(Aa,"User change. New user:",e.toKey());const r=await oD(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(d=>{d.forEach(p=>{p.reject(new te(Q.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await os(t,r.Rs)}}function cF(n,e){const t=de(n),r=t.Ua.get(e);if(r&&r.Ba)return Ne().add(r.key);{let a=Ne();const o=t.qa.get(e);if(!o)return a;for(const u of o){const d=t.ka.get(u);a=a.unionWith(d.view.Sa)}return a}}async function hF(n,e){const t=de(n),r=await lm(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&Dv(t,e.targetId,a.Ma),a}async function dF(n,e){const t=de(n);return hD(t.localStore,e).then(r=>os(t,r))}async function fF(n,e,t,r){const a=de(n),o=await function(d,p){const m=de(d),_=de(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>_.Ln(v,p).next(w=>w?m.localDocuments.getDocuments(v,w):j.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await $u(a.remoteStore):t==="acknowledged"||t==="rejected"?(cT(a,e,r||null),uT(a,e),function(d,p){de(de(d).mutationQueue).qn(p)}(a.localStore,e)):me(),await os(a,o)):re(Aa,"Cannot apply mutation batch with id: "+e)}async function pF(n,e){const t=de(n);if(Km(t),dT(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await nS(t,r.toArray());t.ja=!0,await Rv(t.remoteStore,!0);for(const o of a)Gm(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Cu(t,u),Au(t.localStore,u,!0))),Su(t.remoteStore,u)}),await a,await nS(t,r),function(u){const d=de(u);d.Ua.forEach((p,m)=>{Su(d.remoteStore,m)}),d.Ka.Dr(),d.Ua=new Map,d.$a=new ut(ce.comparator)}(t),t.ja=!1,await Rv(t.remoteStore,!1)}}async function nS(n,e,t){const r=de(n),a=[],o=[];for(const u of e){let d;const p=r.qa.get(u);if(p&&p.length!==0){d=await Iu(r.localStore,Ln(p[0]));for(const m of p){const _=r.ka.get(m),v=await hF(r,_);v.snapshot&&o.push(v.snapshot)}}else{const m=await cD(r.localStore,u);d=await Iu(r.localStore,m),await lT(r,PD(m),u,!1,d.resumeToken)}a.push(d)}return r.La.p_(o),a}function PD(n){return p1(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function mF(n){return function(t){return de(de(t).persistence).zi()}(de(n).localStore)}async function gF(n,e,t,r){const a=de(n);if(a.ja)return void re(Aa,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await hD(a.localStore,g1(o[0])),d=Id.createSynthesizedRemoteEventForCurrentChange(e,t==="current",xt.EMPTY_BYTE_STRING);await os(a,u,d);break}case"rejected":await Au(a.localStore,e,!0),Cu(a,e,r);break;default:me()}}async function yF(n,e,t){const r=Km(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(Aa,"Adding an already active target "+a);continue}const o=await cD(r.localStore,a),u=await Iu(r.localStore,o);await lT(r,PD(o),u.targetId,!1,u.resumeToken),Gm(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await Au(r.localStore,a,!1).then(()=>{Su(r.remoteStore,a),Cu(r,a)}).catch(Ta)}}function Km(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=DD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iF.bind(null,e),e.La.p_=GB.bind(null,e.eventManager),e.La.Ja=KB.bind(null,e.eventManager),e}function dT(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aF.bind(null,e),e}function _F(n,e,t){const r=de(n);(async function(o,u,d){try{const p=await u.getMetadata();if(await function(S,P){const U=de(S),M=Lt(P.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",H=>U.Yr.getBundleMetadata(H,P.id)).then(H=>!!H&&H.createTime.compareTo(M)>=0)}(o.localStore,p))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(ID(p));const m=new WB(p,o.localStore,u.serializer);let _=await u.Ya();for(;_;){const w=await m.Aa(_);w&&d._updateProgress(w),_=await u.Ya()}const v=await m.complete();return await os(o,v.ma,void 0),await function(S,P){const U=de(S);return U.persistence.runTransaction("Save bundle","readwrite",M=>U.Yr.saveBundleMetadata(M,P))}(o.localStore,p),d._completeWith(v.progress),Promise.resolve(v.Va)}catch(p){return pi(Aa,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class td{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return aD(this.persistence,new sD,e.initialUser,this.serializer)}Xa(e){return new KE($m.ri,this.serializer)}Za(e){return new gD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}td.provider={build:()=>new td};class vF extends td{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){_e(this.persistence.referenceDelegate instanceof om);const r=this.persistence.referenceDelegate.garbageCollector;return new J1(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new KE(r=>om.ri(r,t),this.serializer)}}class ND extends td{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await dT(this.ru.syncEngine),await $u(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return aD(this.persistence,new sD,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new J1(r,e.asyncQueue,t)}nu(e,t){const r=new C4(t,this.persistence);return new R4(e.asyncQueue,r)}Xa(e){const t=WE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new QE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,yD(),Np(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new gD}}class EF extends ND{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof O_&&(this.sharedClientState.syncEngine={uo:fF.bind(null,t),co:gF.bind(null,t),lo:yF.bind(null,t),zi:mF.bind(null,t),ao:dF.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await pF(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=yD();if(!O_.D(t))throw new te(Q.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=WE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new O_(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class nd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uF.bind(null,this.syncEngine),await Rv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $B}()}createDatastore(e){const t=Sd(e.databaseInfo.databaseId),r=function(o){return new RB(o)}(e.databaseInfo);return function(o,u,d,p){return new PB(o,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new OB(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>tS(this.syncEngine,t,0),function(){return QA.D()?new QA:new bB}())}createSyncEngine(e,t){return function(a,o,u,d,p,m,_){const v=new ZB(a,o,u,d,p,m);return _&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=de(a);re(Vo,"RemoteStore shutting down."),o.W_.add(5),await Hu(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nd.provider={build:()=>new nd};function rS(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Mt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new En,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new QB(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(Q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=de(a),d={documents:o.map(v=>Jh(u.serializer,v))},p=await u.Co("BatchGetDocuments",u.serializer.databaseId,Fe.emptyPath(),d,o.length),m=new Map;p.forEach(v=>{const w=kz(u.serializer,v);m.set(w.key.toString(),w)});const _=[];return o.forEach(v=>{const w=m.get(v.toString());_e(!!w),_.push(w)}),_}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new qu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new LE(a,this.precondition(a)))}),await async function(r,a){const o=de(r),u={writes:a.map(d=>ed(o.serializer,d))};await o.So("Commit",o.serializer.databaseId,Fe.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw me();t=Te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(Q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Te.min())?gt.exists(!1):gt.updateTime(t):gt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Te.min()))throw new te(Q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gt.updateTime(t)}return gt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new JE(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new wF(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!_d(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!D1(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="FirestoreClient";class IF{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=dn.UNAUTHENTICATED,this.clientId=kC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{re(ga,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(ga,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ku(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function V_(n,e){n.asyncQueue.verifyOperationInProgress(),re(ga,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await oD(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function iS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fT(n);re(ga,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>YA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>YA(e.remoteStore,a)),n._onlineComponents=e}async function fT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(ga,"Using user provided OfflineComponentProvider");try{await V_(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;pi("Error using user provided cache. Falling back to memory cache: "+t),await V_(n,new td)}}else re(ga,"Using default OfflineComponentProvider"),await V_(n,new vF(void 0));return n._offlineComponents}async function Wm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(ga,"Using user provided OnlineComponentProvider"),await iS(n,n._uninitializedComponentsProvider._online)):(re(ga,"Using default OnlineComponentProvider"),await iS(n,new nd))),n._onlineComponents}function OD(n){return fT(n).then(e=>e.persistence)}function pT(n){return fT(n).then(e=>e.localStore)}function kD(n){return Wm(n).then(e=>e.remoteStore)}function mT(n){return Wm(n).then(e=>e.syncEngine)}function AF(n){return Wm(n).then(e=>e.datastore)}async function Du(n){const e=await Wm(n),t=e.eventManager;return t.onListen=JB.bind(null,e.syncEngine),t.onUnlisten=tF.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eF.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nF.bind(null,e.syncEngine),t}function SF(n){return n.asyncQueue.enqueue(async()=>{const e=await OD(n),t=await kD(n);return e.setNetworkEnabled(!0),function(a){const o=de(a);return o.W_.delete(0),Rd(o)}(t)})}function RF(n){return n.asyncQueue.enqueue(async()=>{const e=await OD(n),t=await kD(n);return e.setNetworkEnabled(!1),async function(a){const o=de(a);o.W_.add(0),await Hu(o),o.j_.set("Offline")}(t)})}function CF(n,e){const t=new En;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,_){const v=de(m);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,_))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new te(Q.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=Ku(d,`Failed to get document '${o} from cache`);u.reject(p)}}(await pT(n),e,t)),t.promise}function VD(n,e,t={}){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new Qm({next:w=>{_.su(),u.enqueueAndForget(()=>sT(o,v));const S=w.docs.has(d);!S&&w.fromCache?m.reject(new te(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&p&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new oT(Fu(d.path),_,{includeMetadataChanges:!0,Ta:!0});return iT(o,v)}(await Du(n),n.asyncQueue,e,t,r)),r.promise}function DF(n,e){const t=new En;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await lm(a,o,!0),p=new RD(o,d.gs),m=p.ba(d.documents),_=p.applyChanges(m,!1);u.resolve(_.snapshot)}catch(d){const p=Ku(d,`Failed to execute query '${o} against cache`);u.reject(p)}}(await pT(n),e,t)),t.promise}function MD(n,e,t={}){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new Qm({next:w=>{_.su(),u.enqueueAndForget(()=>sT(o,v)),w.fromCache&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new oT(d,_,{includeMetadataChanges:!0,Ta:!0});return iT(o,v)}(await Du(n),n.asyncQueue,e,t,r)),r.promise}function xF(n,e){const t=new Qm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.add(o),o.next()}(await Du(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.delete(o)}(await Du(n),t))}}function PF(n,e,t,r){const a=function(u,d){let p;return p=typeof u=="string"?IE().encode(u):u,function(_,v){return new TF(_,v)}(function(_,v){if(_ instanceof Uint8Array)return rS(_,v);if(_ instanceof ArrayBuffer)return rS(new Uint8Array(_),v);if(_ instanceof ReadableStream)return _.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,Sd(e));n.asyncQueue.enqueueAndForget(async()=>{_F(await mT(n),a,r)})}function NF(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=de(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await pT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n,e,t){if(!t)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function UD(n,e,t,r){if(e===!0&&r===!0)throw new te(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function aS(n){if(!ce.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function oS(n){if(ce.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ym(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me()}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ym(n);throw new te(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function zD(n,e){if(e<=0)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="firestore.googleapis.com",lS=!0;class uS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=BD,this.ssl=lS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:lS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=W1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jz)throw new te(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LD((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cd{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new g4;switch(r.type){case"firstParty":return new E4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=sS.get(t);r&&(re("ComponentProvider","Removing Datastore"),sS.delete(t),r.terminate())}(this),Promise.resolve()}}function OF(n,e,t,r={}){var a;const o=(n=Ze(n,Cd))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==BD&&o.host!==d&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!aa(p,u)&&(n._setSettings(p),r.mockUserToken)){let m,_;if(typeof r.mockUserToken=="string")m=r.mockUserToken,_=dn.MOCK_USER;else{m=Vk(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new te(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new dn(v)}n._authCredentials=new y4(new OC(m,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=class FD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new FD(this.firestore,e,this._query)}},wt=class jD{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jD(this.firestore,e,this._key)}},sa=class qD extends Un{constructor(e,t,r){super(e,t,Fu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new ce(e))}withConverter(e){return new qD(this.firestore,e,this._path)}};function HD(n,e,...t){if(n=Se(n),gT("collection","path",e),n instanceof Cd){const r=Fe.fromString(e,...t);return oS(r),new sa(n,null,r)}{if(!(n instanceof wt||n instanceof sa))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Fe.fromString(e,...t));return oS(r),new sa(n.firestore,null,r)}}function kF(n,e){if(n=Ze(n,Cd),gT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Un(n,null,function(r){return new is(Fe.emptyPath(),r)}(e))}function dm(n,e,...t){if(n=Se(n),arguments.length===1&&(e=kC.newId()),gT("doc","path",e),n instanceof Cd){const r=Fe.fromString(e,...t);return aS(r),new wt(n,null,new ce(r))}{if(!(n instanceof wt||n instanceof sa))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Fe.fromString(e,...t));return aS(r),new wt(n.firestore,n instanceof sa?n.converter:null,new ce(r))}}function $D(n,e){return n=Se(n),e=Se(e),(n instanceof wt||n instanceof sa)&&(e instanceof wt||e instanceof sa)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function GD(n,e){return n=Se(n),e=Se(e),n instanceof Un&&e instanceof Un&&n.firestore===e.firestore&&Td(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="AsyncQueue";class hS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new JE(this,"async_queue_retry"),this.Su=()=>{const r=Np();r&&re(cS,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Np();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Np();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new En;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!wa(e))throw e;re(cS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw Mt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=rT.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function xv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class VF{constructor(){this._progressObserver={},this._taskCompletionResolver=new En,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF=-1;let Ut=class extends Cd{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new hS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hS(e),this._firestoreClient=void 0,await e}}};function Cn(n){if(n._terminated)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KD(n),n._firestoreClient}function KD(n){var e,t,r;const a=n._freezeSettings(),o=function(d,p,m,_){return new rz(d,p,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,LD(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new IF(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function LF(n,e){pi("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return QD(n,nd.provider,{build:r=>new ND(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function UF(n){pi("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();QD(n,nd.provider,{build:t=>new EF(t,e.cacheSizeBytes)})}function QD(n,e,t){if((n=Ze(n,Ut))._firestoreClient||n._terminated)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(Q.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},KD(n)}function zF(n){if(n._initialized&&!n._terminated)throw new te(Q.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new En;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ui.D())return Promise.resolve();const a=r+iD;await ui.delete(a)}(WE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function BF(n){return function(t){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>oF(await mT(t),r)),r.promise}(Cn(n=Ze(n,Ut)))}function FF(n){return SF(Cn(n=Ze(n,Ut)))}function jF(n){return RF(Cn(n=Ze(n,Ut)))}function qF(n,e){const t=Cn(n=Ze(n,Ut)),r=new VF;return PF(t,n._databaseId,e,r),r}function HF(n,e){return NF(Cn(n=Ze(n,Ut)),e).then(t=>t?new Un(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gi(xt.fromBase64String(e))}catch(t){throw new te(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gi(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $F=/^__.*__$/;class GF{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,t,this.fieldTransforms):new ju(e,this.data,t,this.fieldTransforms)}}class WD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new as(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function YD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Zm{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Zm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return fm(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(YD(this.Lu)&&$F.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class KF{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Sd(e)}ju(e,t,r,a=!1){return new Zm({Lu:e,methodName:t,zu:r,path:mt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jo(n){const e=n._freezeSettings(),t=Sd(n._databaseId);return new KF(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jm(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);IT("Data must be an object, but it was:",u,r);const d=JD(r,u);let p,m;if(o.merge)p=new $n(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const v of o.mergeFields){const w=Pv(e,v,t);if(!u.contains(w))throw new te(Q.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);tx(_,w)||_.push(w)}p=new $n(_),m=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,m=u.fieldTransforms;return new GF(new vn(d),p,m)}class Dd extends Fo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dd}}function XD(n,e,t){return new Zm({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class _T extends Fo{_toFieldTransform(e){return new bd(e.path,new Tu)}isEqual(e){return e instanceof _T}}class vT extends Fo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=XD(this,e,!0),r=this.Hu.map(o=>qo(o,t)),a=new xo(r);return new bd(e.path,a)}isEqual(e){return e instanceof vT&&aa(this.Hu,e.Hu)}}class ET extends Fo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=XD(this,e,!0),r=this.Hu.map(o=>qo(o,t)),a=new Po(r);return new bd(e.path,a)}isEqual(e){return e instanceof ET&&aa(this.Hu,e.Hu)}}class TT extends Fo{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new wu(e.serializer,w1(e.serializer,this.Ju));return new bd(e.path,t)}isEqual(e){return e instanceof TT&&this.Ju===e.Ju}}function wT(n,e,t,r){const a=n.ju(1,e,t);IT("Data must be an object, but it was:",a,r);const o=[],u=vn.empty();ba(r,(p,m)=>{const _=AT(e,p,t);m=Se(m);const v=a.Uu(_);if(m instanceof Dd)o.push(_);else{const w=qo(m,v);w!=null&&(o.push(_),u.set(_,w))}});const d=new $n(o);return new WD(u,d,a.fieldTransforms)}function bT(n,e,t,r,a,o){const u=n.ju(1,e,t),d=[Pv(e,r,t)],p=[a];if(o.length%2!=0)throw new te(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(Pv(e,o[w])),p.push(o[w+1]);const m=[],_=vn.empty();for(let w=d.length-1;w>=0;--w)if(!tx(m,d[w])){const S=d[w];let P=p[w];P=Se(P);const U=u.Uu(S);if(P instanceof Dd)m.push(S);else{const M=qo(P,U);M!=null&&(m.push(S),_.set(S,M))}}const v=new $n(m);return new WD(_,v,u.fieldTransforms)}function ZD(n,e,t,r=!1){return qo(t,n.ju(r?4:3,e))}function qo(n,e){if(ex(n=Se(n)))return IT("Unsupported field value:",e,n),JD(n,e);if(n instanceof Fo)return function(r,a){if(!YD(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let p=qo(d,a.Ku(u));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return w1(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=yt.fromDate(r);return{timestampValue:bu(a.serializer,o)}}if(r instanceof yt){const o=new yt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bu(a.serializer,o)}}if(r instanceof Xm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gi)return{bytesValue:O1(a.serializer,r._byteString)};if(r instanceof wt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:jE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof yT)return function(u,d){return{mapValue:{fields:{[PE]:{stringValue:NE},[_u]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return ME(d.serializer,m)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Ym(r)}`)}(n,e)}function JD(n,e){const t={};return XC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ba(n,(r,a)=>{const o=qo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function ex(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof Xm||n instanceof gi||n instanceof wt||n instanceof Fo||n instanceof yT)}function IT(n,e,t){if(!ex(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Ym(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Pv(n,e,t){if((e=Se(e))instanceof ya)return e._internalPath;if(typeof e=="string")return AT(n,e);throw fm("Field path arguments must be of type string or ",n,!1,void 0,t)}const QF=new RegExp("[~\\*/\\[\\]]");function AT(n,e,t){if(e.search(QF)>=0)throw fm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ya(...e.split("."))._internalPath}catch{throw fm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fm(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||u)&&(p+=" (found",o&&(p+=` in field ${r}`),u&&(p+=` in document ${a}`),p+=")"),new te(Q.INVALID_ARGUMENT,d+n+p)}function tx(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WF extends rd{data(){return super.data()}}function eg(n,e){return typeof e=="string"?AT(n,e):e instanceof ya?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ST{}class xd extends ST{}function Ws(n,e,...t){let r=[];e instanceof ST&&r.push(e),r=r.concat(t),function(o){const u=o.filter(p=>p instanceof RT).length,d=o.filter(p=>p instanceof tg).length;if(u>1||u>0&&d>0)throw new te(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class tg extends xd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new tg(e,t,r)}_apply(e){const t=this._parse(e);return ix(e._query,t),new Un(e.firestore,e.converter,yv(e._query,t))}_parse(e){const t=jo(e.firestore);return function(o,u,d,p,m,_,v){let w;if(m.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new te(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){fS(v,_);const P=[];for(const U of v)P.push(dS(p,o,U));w={arrayValue:{values:P}}}else w=dS(p,o,v)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||fS(v,_),w=ZD(d,u,v,_==="in"||_==="not-in");return je.create(m,_,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function YF(n,e,t){const r=e,a=eg("where",n);return tg._create(a,r,t)}class RT extends ST{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new RT(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:nt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const p of d)ix(u,p),u=yv(u,p)}(e._query,t),new Un(e.firestore,e.converter,yv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class CT extends xd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new CT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zh(o,u)}(e._query,this._field,this._direction);return new Un(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new is(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function XF(n,e="asc"){const t=e,r=eg("orderBy",n);return CT._create(r,t)}class ng extends xd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ng(e,t,r)}_apply(e){return new Un(e.firestore,e.converter,rm(e._query,this._limit,this._limitType))}}function ZF(n){return zD("limit",n),ng._create("limit",n,"F")}function JF(n){return zD("limitToLast",n),ng._create("limitToLast",n,"L")}class rg extends xd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new rg(e,t,r)}_apply(e){const t=rx(e,this.type,this._docOrFields,this._inclusive);return new Un(e.firestore,e.converter,function(a,o){return new is(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function e6(...n){return rg._create("startAt",n,!0)}function t6(...n){return rg._create("startAfter",n,!1)}class ig extends xd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ig(e,t,r)}_apply(e){const t=rx(e,this.type,this._docOrFields,this._inclusive);return new Un(e.firestore,e.converter,function(a,o){return new is(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function n6(...n){return ig._create("endBefore",n,!1)}function r6(...n){return ig._create("endAt",n,!0)}function rx(n,e,t,r){if(t[0]=Se(t[0]),t[0]instanceof rd)return function(o,u,d,p,m){if(!p)throw new te(Q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const _=[];for(const v of tu(o))if(v.field.isKeyField())_.push(Co(u,p.key));else{const w=p.data.field(v.field);if(Um(w))throw new te(Q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(Q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}_.push(w)}return new pa(_,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=jo(n.firestore);return function(u,d,p,m,_,v){const w=u.explicitOrderBy;if(_.length>w.length)throw new te(Q.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let P=0;P<_.length;P++){const U=_[P];if(w[P].field.isKeyField()){if(typeof U!="string")throw new te(Q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!kE(u)&&U.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const M=u.path.child(Fe.fromString(U));if(!ce.isDocumentKey(M))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${M}' is not because it contains an odd number of segments.`);const H=new ce(M);S.push(Co(d,H))}else{const M=ZD(p,m,U);S.push(M)}}return new pa(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function dS(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new te(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kE(e)&&t.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Fe.fromString(t));if(!ce.isDocumentKey(r))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Co(n,new ce(r))}if(t instanceof wt)return Co(n,t._key);throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ym(t)}.`)}function fS(n,e){if(!Array.isArray(n)||n.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ix(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class DT{convertValue(e,t="none"){switch(da(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ba(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[_u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>ft(u.doubleValue));return new yT(o)}convertGeoPoint(e){return new Xm(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Wh(e));default:return null}}convertTimestamp(e){const t=Ji(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Fe.fromString(e);_e(H1(r));const a=new ha(r.get(1),r.get(3)),o=new ce(r.popFirst(5));return a.isEqual(t)||Mt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class i6 extends DT{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ts=class extends rd{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(eg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Nh=class extends ts{data(e={}){return super.data(e)}},_a=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new _o(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Nh(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new Nh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new _o(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const p=new Nh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new _o(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,_=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),_=u.indexOf(d.doc.key)),{type:s6(d.type),doc:p,oldIndex:m,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function s6(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}function sx(n,e){return n instanceof ts&&e instanceof ts?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof _a&&e instanceof _a&&n._firestore===e._firestore&&GD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(n){n=Ze(n,wt);const e=Ze(n.firestore,Ut);return VD(Cn(e),n._key).then(t=>xT(e,n,t))}class Ho extends DT{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function o6(n){n=Ze(n,wt);const e=Ze(n.firestore,Ut),t=Cn(e),r=new Ho(e);return CF(t,n._key).then(a=>new ts(e,r,n._key,a,new _o(a!==null&&a.hasLocalMutations,!0),n.converter))}function l6(n){n=Ze(n,wt);const e=Ze(n.firestore,Ut);return VD(Cn(e),n._key,{source:"server"}).then(t=>xT(e,n,t))}function u6(n){n=Ze(n,Un);const e=Ze(n.firestore,Ut),t=Cn(e),r=new Ho(e);return nx(n._query),MD(t,n._query).then(a=>new _a(e,r,n,a))}function c6(n){n=Ze(n,Un);const e=Ze(n.firestore,Ut),t=Cn(e),r=new Ho(e);return DF(t,n._query).then(a=>new _a(e,r,n,a))}function h6(n){n=Ze(n,Un);const e=Ze(n.firestore,Ut),t=Cn(e),r=new Ho(e);return MD(t,n._query,{source:"server"}).then(a=>new _a(e,r,n,a))}function pS(n,e,t){n=Ze(n,wt);const r=Ze(n.firestore,Ut),a=sg(n.converter,e,t);return Pd(r,[Jm(jo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,gt.none())])}function mS(n,e,t,...r){n=Ze(n,wt);const a=Ze(n.firestore,Ut),o=jo(a);let u;return u=typeof(e=Se(e))=="string"||e instanceof ya?bT(o,"updateDoc",n._key,e,t,r):wT(o,"updateDoc",n._key,e),Pd(a,[u.toMutation(n._key,gt.exists(!0))])}function d6(n){return Pd(Ze(n.firestore,Ut),[new qu(n._key,gt.none())])}function f6(n,e){const t=Ze(n.firestore,Ut),r=dm(n),a=sg(n.converter,e);return Pd(t,[Jm(jo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,gt.exists(!1))]).then(()=>r)}function ax(n,...e){var t,r,a;n=Se(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||xv(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(xv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,m,_;if(n instanceof wt)m=Ze(n.firestore,Ut),_=Fu(n._key.path),p={next:v=>{e[u]&&e[u](xT(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Ze(n,Un);m=Ze(v.firestore,Ut),_=v._query;const w=new Ho(m);p={next:S=>{e[u]&&e[u](new _a(m,w,v,S))},error:e[u+1],complete:e[u+2]},nx(n._query)}return function(w,S,P,U){const M=new Qm(U),H=new oT(S,M,P);return w.asyncQueue.enqueueAndForget(async()=>iT(await Du(w),H)),()=>{M.su(),w.asyncQueue.enqueueAndForget(async()=>sT(await Du(w),H))}}(Cn(m),_,d,p)}function p6(n,e){return xF(Cn(n=Ze(n,Ut)),xv(e)?e:{next:e})}function Pd(n,e){return function(r,a){const o=new En;return r.asyncQueue.enqueueAndForget(async()=>rF(await mT(r),a,o)),o.promise}(Cn(n),e)}function xT(n,e,t){const r=t.docs.get(e._key),a=new Ho(n);return new ts(n,a,e._key,r,new _o(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m6={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g6=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jo(e)}set(e,t,r){this._verifyNotCommitted();const a=ea(e,this._firestore),o=sg(a.converter,t,r),u=Jm(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,gt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=ea(e,this._firestore);let u;return u=typeof(t=Se(t))=="string"||t instanceof ya?bT(this._dataReader,"WriteBatch.update",o._key,t,r,a):wT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ea(e,this._firestore);return this._mutations=this._mutations.concat(new qu(t._key,gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(Q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ea(n,e){if((n=Se(n)).firestore!==e)throw new te(Q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=jo(e)}get(e){const t=ea(e,this._firestore),r=new i6(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return me();const o=a[0];if(o.isFoundDocument())return new rd(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new rd(this._firestore,r,t._key,null,t.converter);throw me()})}set(e,t,r){const a=ea(e,this._firestore),o=sg(a.converter,t,r),u=Jm(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=ea(e,this._firestore);let u;return u=typeof(t=Se(t))=="string"||t instanceof ya?bT(this._dataReader,"Transaction.update",o._key,t,r,a):wT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=ea(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _6=class extends y6{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ea(e,this._firestore),r=new Ho(this._firestore);return super.get(e).then(a=>new ts(this._firestore,r,t._key,a._document,new _o(!1,!1),t.converter))}};function v6(n,e,t){n=Ze(n,Ut);const r=Object.assign(Object.assign({},m6),t);return function(o){if(o.maxAttempts<1)throw new te(Q.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const p=new En;return o.asyncQueue.enqueueAndForget(async()=>{const m=await AF(o);new bF(o.asyncQueue,m,d,u,p).Iu()}),p.promise}(Cn(n),a=>e(new _6(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E6(){return new Dd("deleteField")}function T6(){return new _T("serverTimestamp")}function w6(...n){return new vT("arrayUnion",n)}function b6(...n){return new ET("arrayRemove",n)}function I6(n){return new TT("increment",n)}(function(e,t=!0){(function(a){Bu=a})(va),ua(new di("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Ut(new _4(r.getProvider("auth-internal")),new T4(u,r.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new te(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(m.options.projectId,_)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Vr(GI,KI,e),Vr(GI,KI,"esm2017")})();const A6="@firebase/firestore-compat",S6="0.3.45";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function yS(){if(!tz())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class id{constructor(e){this._delegate=e}static fromBase64String(e){return yS(),new id(gi.fromBase64String(e))}static fromUint8Array(e){return gS(),new id(gi.fromUint8Array(e))}toBase64(){return yS(),this._delegate.toBase64()}toUint8Array(){return gS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n){return R6(n,["next","error","complete"])}function R6(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C6{enableIndexedDbPersistence(e,t){return LF(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return UF(e._delegate)}clearIndexedDbPersistence(e){return zF(e._delegate)}}class ox{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ha||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&pi("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){OF(this._delegate,e,t,r)}enableNetwork(){return FF(this._delegate)}disableNetwork(){return jF(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,UD("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return BF(this._delegate)}onSnapshotsInSync(e){return p6(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new xu(this,HD(this._delegate,e))}catch(t){throw Vn(t,"collection()","Firestore.collection()")}}doc(e){try{return new wr(this,dm(this._delegate,e))}catch(t){throw Vn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new kn(this,kF(this._delegate,e))}catch(t){throw Vn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return v6(this._delegate,t=>e(new lx(this,t)))}batch(){return Cn(this._delegate),new ux(new g6(this._delegate,e=>Pd(this._delegate,e)))}loadBundle(e){return qF(this._delegate,e)}namedQuery(e){return HF(this._delegate,e).then(t=>t?new kn(this,t):null)}}class ag extends DT{constructor(e){super(),this.firestore=e}convertBytes(e){return new id(new gi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return wr.forKey(t,this.firestore,null)}}function D6(n){p4(n)}class lx{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ag(e)}get(e){const t=vo(e);return this._delegate.get(t).then(r=>new sd(this._firestore,new ts(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=vo(e);return r?(PT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=vo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=vo(e);return this._delegate.delete(t),this}}class ux{constructor(e){this._delegate=e}set(e,t,r){const a=vo(e);return r?(PT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=vo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=vo(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Mo{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Nh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ad(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Mo.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new Mo(e,new ag(e),t),a.set(t,o)),o}}Mo.INSTANCES=new WeakMap;class wr{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ag(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new wr(t,new wt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new wr(t,new wt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new xu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new xu(this.firestore,HD(this._delegate,e))}catch(t){throw Vn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Se(e),e instanceof wt?$D(this._delegate,e):!1}set(e,t){t=PT("DocumentReference.set",t);try{return t?pS(this._delegate,e,t):pS(this._delegate,e)}catch(r){throw Vn(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?mS(this._delegate,e):mS(this._delegate,e,t,...r)}catch(a){throw Vn(a,"updateDoc()","DocumentReference.update()")}}delete(){return d6(this._delegate)}onSnapshot(...e){const t=cx(e),r=hx(e,a=>new sd(this.firestore,new ts(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return ax(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=o6(this._delegate):(e==null?void 0:e.source)==="server"?t=l6(this._delegate):t=a6(this._delegate),t.then(r=>new sd(this.firestore,new ts(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new wr(this.firestore,e?this._delegate.withConverter(Mo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vn(n,e,t){return n.message=n.message.replace(e,t),n}function cx(n){for(const e of n)if(typeof e=="object"&&!Nv(e))return e;return{}}function hx(n,e){var t,r;let a;return Nv(n[0])?a=n[0]:Nv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class sd{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new wr(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return sx(this._delegate,e._delegate)}}class ad extends sd{data(e){const t=this._delegate.data(e);return this._delegate._converter||m4(t!==void 0),t}}class kn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ag(e)}where(e,t,r){try{return new kn(this.firestore,Ws(this._delegate,YF(e,t,r)))}catch(a){throw Vn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new kn(this.firestore,Ws(this._delegate,XF(e,t)))}catch(r){throw Vn(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new kn(this.firestore,Ws(this._delegate,ZF(e)))}catch(t){throw Vn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new kn(this.firestore,Ws(this._delegate,JF(e)))}catch(t){throw Vn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new kn(this.firestore,Ws(this._delegate,e6(...e)))}catch(t){throw Vn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new kn(this.firestore,Ws(this._delegate,t6(...e)))}catch(t){throw Vn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new kn(this.firestore,Ws(this._delegate,n6(...e)))}catch(t){throw Vn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new kn(this.firestore,Ws(this._delegate,r6(...e)))}catch(t){throw Vn(t,"endAt()","Query.endAt()")}}isEqual(e){return GD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=c6(this._delegate):(e==null?void 0:e.source)==="server"?t=h6(this._delegate):t=u6(this._delegate),t.then(r=>new Ov(this.firestore,new _a(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=cx(e),r=hx(e,a=>new Ov(this.firestore,new _a(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return ax(this._delegate,t,r)}withConverter(e){return new kn(this.firestore,e?this._delegate.withConverter(Mo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class x6{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ad(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ov{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new kn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ad(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new x6(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ad(this._firestore,r))})}isEqual(e){return sx(this._delegate,e._delegate)}}class xu extends kn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new wr(this.firestore,e):null}doc(e){try{return e===void 0?new wr(this.firestore,dm(this._delegate)):new wr(this.firestore,dm(this._delegate,e))}catch(t){throw Vn(t,"doc()","CollectionReference.doc()")}}add(e){return f6(this._delegate,e).then(t=>new wr(this.firestore,t))}isEqual(e){return $D(this._delegate,e._delegate)}withConverter(e){return new xu(this.firestore,e?this._delegate.withConverter(Mo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vo(n){return Ze(n,wt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(...e){this._delegate=new ya(...e)}static documentId(){return new NT(mt.keyField().canonicalString())}isEqual(e){return e=Se(e),e instanceof ya?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static serverTimestamp(){const e=T6();return e._methodName="FieldValue.serverTimestamp",new po(e)}static delete(){const e=E6();return e._methodName="FieldValue.delete",new po(e)}static arrayUnion(...e){const t=w6(...e);return t._methodName="FieldValue.arrayUnion",new po(t)}static arrayRemove(...e){const t=b6(...e);return t._methodName="FieldValue.arrayRemove",new po(t)}static increment(e){const t=I6(e);return t._methodName="FieldValue.increment",new po(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P6={Firestore:ox,GeoPoint:Xm,Timestamp:yt,Blob:id,Transaction:lx,WriteBatch:ux,DocumentReference:wr,DocumentSnapshot:sd,Query:kn,QueryDocumentSnapshot:ad,QuerySnapshot:Ov,CollectionReference:xu,FieldPath:NT,FieldValue:po,setLogLevel:D6,CACHE_SIZE_UNLIMITED:MF};function N6(n,e){n.INTERNAL.registerComponent(new di("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},P6)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O6(n){N6(n,(e,t)=>new ox(e,t,new C6)),n.registerVersion(A6,S6)}O6(Mu);const k6={apiKey:"AIzaSyAPa14ck-1alEizxhEtNNkVuXl4F9aZ_ak",authDomain:"react-app-mini-blog-2e57a.firebaseapp.com",projectId:"react-app-mini-blog-2e57a",storageBucket:"react-app-mini-blog-2e57a.firebasestorage.app",messagingSenderId:"908567219399",appId:"1:908567219399:web:6a60980f2f511acccd02e2"},V6=Mu.initializeApp(k6),Oh=V6.firestore(),M6=Ie.div`
  display: block;
  padding: 48px 16px;
  border-bottom: 1px solid ${ve.gray[300]};
  &:last-child {
    border-bottom: none;
  }

  &: hover {
    background-color: rgba(238, 243, 255, 0.5);
  }
  cursor: pointer;
`,L6=Ie.p`
  font-weight: 600;
  font-size: 28px;
  color: ${ve.gray[800]};
`,U6=Ie.p`
  font-weight: 400;
  color: ${ve.gray[800]};
  font-size: 20px;
  max-height: 60px;
  align-self: stretch;
  overflow: hidden;
  display: -webkit-box;
  max-height: 60px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  align-self: stretch;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  margin-top: 8px;
`,z6=Ie.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  margin-bottom: 32px;
`,B6=Ie.p`
  color: ${ve.gray[500]};
  align-self: stretch;
  font-size: 16px;
`;function F6(n){var u;const{post:e,onClick:t,image:r}=n,a=(u=e.createdAt)==null?void 0:u.toDate(),o=a?a.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):null;return n.type,q.jsxs(M6,{onClick:t,children:[r&&q.jsx(z6,{src:r,alt:e.title}),q.jsx(L6,{children:e.title}),q.jsx(U6,{children:e.content}),q.jsx(B6,{children:o})]})}const j6=Ie.div``;function q6(n){const{posts:e,itemClicked:t}=n,r=e.map((a,o)=>q.jsx(F6,{post:a,content:a.content,image:a.image,onClick:u=>t(a)},a.id));return q.jsx(j6,{children:r})}const dx=Ie.button`
  box-sizing: border-box;
  cursor: pointer;
  height: 48px;
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  background: ${ve.gray.black};
  color: ${ve.gray.white};
  font-size: 16px;
  &:hover {
    background-color: ${ve.pointgreen[1e3]};
  }
`,H6=Ie(dx)`
  background: ${ve.gray.white};
  color: ${ve.gray[800]};
  border: 1px solid ${ve.gray.black};
  &:hover {
    background: ${ve.gray.white};
    color: ${ve.pointgreen[1e3]};
    border: 1px solid ${ve.pointgreen[1e3]};
  }
`;function Lo(n){const{title:e,onClick:t}=n,r=n.type||"default";if(r=="default")return q.jsx(dx,{onClick:t,children:e||"Button"});if(r=="line")return q.jsx(H6,{onClick:t,children:e||"Button"})}const Zt=Ie.div`
  width: ${n=>n.size||"24px"};
  height: ${n=>n.size||"24px"};
`,$6=Ie.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,G6=Ie.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,K6=Ie.div`
  display: flex;
  justify-content: flex-end;
`,M_=Ie.button`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 0;
  background-color: transparent;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;function Q6({data:n}){const e=Ou(),[t,r]=Y.useState(1),a=5,o=Math.ceil(n.length/a),u=t*a,d=u-a,p=n.slice(d,u);return Y.useEffect(()=>{r(1)},[n]),q.jsx("div",{children:p.length===0?q.jsxs("div",{children:[q.jsx("p",{style:{textAlign:"center",color:ve.gray[500],fontSize:"18px"},children:"작성된 게시글이 없습니다."}),q.jsx(Zt,{size:"80px"}),q.jsx(K6,{children:q.jsx(Lo,{title:"글 작성",onClick:()=>e("/write")})})]}):q.jsxs("div",{children:[q.jsx(q6,{posts:p,itemClicked:m=>{e(`/post/${m.id}`)}}),q.jsx(Zt,{size:"80px"}),q.jsxs($6,{children:[q.jsxs(G6,{children:[q.jsx(M_,{onClick:()=>r(m=>Math.max(m-1,1)),disabled:t===1,children:"<"}),Array.from({length:o},(m,_)=>q.jsx(M_,{onClick:()=>r(_+1),style:{backgroundColor:t===_+1?ve.pointblue[1e3]:"transparent",color:t===_+1?ve.gray.white:ve.gray[800]},children:_+1},_+1)),q.jsx(M_,{onClick:()=>r(m=>Math.min(m+1,o)),disabled:t===o,children:">"})]}),q.jsx(Lo,{title:"글 작성",onClick:()=>e("/write")})]})]})})}const W6=Ie.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Y6=Ie.div`
  display: flex;
  justify-content: center;
`;function X6(n){Ou();const[e,t]=Y.useState([]),[r,a]=Y.useState("ALL view"),o=r==="ALL view"?e:e.filter(u=>u.category===r);return Y.useEffect(()=>{let u=[];Oh.collection("post").get().then(d=>{d.forEach(m=>{u.push(m.data())});const p=u.sort((m,_)=>_.id-m.id);t(p)})},[]),q.jsxs("div",{children:[q.jsx(Qv,{}),q.jsx(Zt,{size:"100px"}),q.jsx(Y6,{children:q.jsx("img",{src:"/mini-blog//Logo.svg"})}),q.jsx(Zt,{size:"40px"}),q.jsxs("p",{style:{textAlign:"center",fontSize:"24px",fontWeight:"400",color:ve.gray[800]},children:["소리는 디자인을 공부하는 학생이고, 올해 4학년이에요.",q.jsx("br",{}),"그리고 커피마시면서 노래듣는 걸 좋아해요."]}),q.jsx(Zt,{size:"80px"}),q.jsxs(W6,{children:[q.jsx(lo,{type:"category",text:"ALL view",number:e.length,selected:r==="ALL view",onClick:()=>a("ALL view")}),q.jsx(lo,{type:"category",text:"일상",number:e.filter(u=>u.category==="일상").length,selected:r==="일상",onClick:()=>a("일상")}),q.jsx(lo,{type:"category",text:"공부",number:e.filter(u=>u.category==="공부").length,selected:r==="공부",onClick:()=>a("공부")}),q.jsx(lo,{type:"category",text:"기타",number:e.filter(u=>u.category==="기타").length,selected:r==="기타",onClick:()=>a("기타")}),q.jsx(lo,{type:"default"})]}),q.jsx(Zt,{size:"80px"}),q.jsx(Q6,{data:o}),q.jsx(Zt,{size:"160px"}),q.jsx(Kv,{})]})}const Z6=Ie.textarea`
  border-radius: 4px;
  background: ${ve.gray[50]};
  height: ${n=>n.height}px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 24px;
  resize: none;
  border: none;
  font-size: 20px;
  &::placeholder {
    color: ${ve.gray[400]};
    font-size: 20px;
    font-weight: 400;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: 3px solid ${ve.pointblue[500]};
  }
`,J6=Ie.p`
  color: ${ve.gray[800]};
  align-self: stretch;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 12px;
`;function Op(n){const{height:e,value:t,onChange:r,placeholder:a,title:o,onKeyDown:u}=n;return q.jsxs("div",{children:[o&&q.jsx(J6,{children:o}),q.jsx(Z6,{placeholder:a,height:e||62,value:t,onChange:r,onKeyDown:u})]})}const e9=Ie.div`
  position: relative;
  overflow: hidden;
  background-color: ${ve.gray[50]};
  display: flex;
  height: 540px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  cursor: pointer;

  & > h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: ${ve.gray[400]};
  }

  & > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${ve.gray[400]};
  }

  img.preview {
    width: 100%;
    height: 540px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    border-radius: 8px;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .delete-icon {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`,t9=Ie.p`
  color: ${ve.gray[800]};
  align-self: stretch;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 12px;
`;function n9(n){const{image:e,setImage:t}=n,r=Y.useRef(null),a=o=>{if(!o.target.files[0])return;let d=new FileReader;d.readAsDataURL(o.target.files[0]),d.onload=p=>{console.log(p.target.result),t(p.target.result)}};return q.jsxs(q.Fragment,{children:[q.jsx(t9,{children:"대표 이미지"}),q.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:r,onChange:a}),q.jsx(e9,{onClick:()=>r.current.click(),children:e?q.jsxs(q.Fragment,{children:[q.jsx("img",{className:"preview",src:e,alt:"업로드 이미지"}),q.jsx("div",{className:"overlay",onClick:o=>{o.stopPropagation(),t(null)},children:q.jsx("img",{className:"delete-icon",src:"/mini-blog//trash.svg",alt:"삭제"})})]}):q.jsxs(q.Fragment,{children:[q.jsx("img",{src:"/mini-blog//camera.svg",alt:"카메라"}),q.jsx("h2",{children:"클릭해 대표 이미지를 삽입해주세요"}),q.jsx("p",{children:"사진을 한 장만 삽입할 수 있습니다"})]})}),q.jsx("p",{style:{padding:"12px 0px",fontSize:"16px",fontWeight:"400",color:ve.gray[400]},children:"• 사진은 1MB 이하로 삽입해주세요."})]})}const r9=Ie.p`
  color: ${ve.gray[800]};
  align-self: stretch;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 12px;
`,i9=Ie.div`
  display: flex;
  height: 62px;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  background-color: ${ve.gray[50]};
  color: ${n=>n.$hasValue?ve.gray.black:ve.gray[400]};
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
`,s9=Ie.ul`
  align-items: center;
  padding: 16px 24px;
  gap: 24px;
  list-style: none;
  align-self: stretch;
  border-radius: 4px;
  background-color: ${ve.gray.white};
  border: 1px solid ${ve.gray[100]};
`,L_=Ie.li`
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0px;
  }

  &: hover {
    color: ${ve.pointgreen[1e3]};
  }
`;function a9({onSelect:n}){const[e,t]=Y.useState(!1),[r,a]=Y.useState(""),o=()=>t(!e),u=d=>{a(d),t(!1),n(d)};return q.jsxs("div",{children:[q.jsx(r9,{children:"카테고리"}),q.jsxs(i9,{onClick:o,$hasValue:r!=="",children:[r||"카테고리를 설정하세요",q.jsx("img",{src:"/mini-blog//chevron-down.svg",alt:"down"})]}),e&&q.jsxs(s9,{children:[q.jsx(L_,{onClick:()=>u("일상"),children:"일상"}),q.jsx(L_,{onClick:()=>u("공부"),children:"공부"}),q.jsx(L_,{onClick:()=>u("기타"),children:"기타"})]})]})}const o9=Ie.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,l9=Ie.div`
  margin: 40px 80px;
  display: inline-flex;
  background-color: ${ve.gray.white};
  padding: 40px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${ve.gray[100]};
  border-radius: 8px;
`,u9=Ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
  & > h2 {
    color: ${ve.gray[800]};
    font-size: 20px;
    font-weight: 500;
  }
  & > p {
    color: ${ve.gray[800]};
    font-size: 16px;
    font-weight: 400;
  }
`;function fx(n){const{title:e,message:t,onConfirm:r,onCancel:a}=n;return q.jsx(o9,{children:q.jsxs(l9,{children:[q.jsxs(u9,{children:[q.jsx("h2",{children:e||"title"}),q.jsx("p",{children:t||"message"})]}),q.jsxs("div",{style:{display:"flex",gap:"12px"},children:[q.jsx(Lo,{type:"default",title:"확인",onClick:r}),a&&q.jsx(Lo,{type:"line",title:"취소",onClick:a})]})]})})}const c9=Ie.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;function h9(n){const e=Ou(),[t,r]=Y.useState(""),[a,o]=Y.useState(""),[u,d]=Y.useState(""),[p,m]=Y.useState([]),[_,v]=Y.useState(null),[w,S]=Y.useState(""),[P,U]=Y.useState(!1),[M,H]=Y.useState(""),X=()=>{H("logo"),U(!0)},K=()=>{if(!t||!a||!w){H("post"),U(!0);return}let A=new Date().getTime().toString(),x=new Date;Oh.collection("post").doc(A).set({id:A,title:t,content:a,hashtag:p,image:_,category:w,comments:[],createdAt:x}).then(()=>{alert("글이 등록되었습니다!"),e("/")})},oe=A=>{if(A.key==="Enter"&&u.trim()!==""){A.preventDefault();const x=u.trim();p.includes(x)||m([...p,x]),d("")}},se=A=>{m(p.filter((x,k)=>k!==A))},le=()=>{U(!1),M==="logo"&&e("/")},D=()=>{U(!1)},R=!t||!w||!a;return q.jsxs("div",{children:[q.jsx(Qv,{onLogoClick:X}),q.jsx(Zt,{size:"80px"}),q.jsx("h1",{children:"새로운 글 쓰기"}),q.jsx(Zt,{size:"40px"}),q.jsx("h2",{style:{color:ve.gray[800]},children:"필수 항목"}),q.jsx(Zt,{size:"20px"}),q.jsx(Op,{title:"제목",placeholder:"제목을 작성하세요",value:t,onChange:A=>r(A.target.value)}),q.jsx(Zt,{size:"40px"}),q.jsx(a9,{onSelect:A=>S(A)}),q.jsx(Zt,{size:"40px"}),q.jsx(Op,{title:"본문",placeholder:"본문을 작성하세요",height:"200",value:a,onChange:A=>o(A.target.value)}),q.jsx(Zt,{size:"64px"}),q.jsx("h2",{style:{color:ve.gray[800]},children:"선택 항목"}),q.jsx(Zt,{size:"20px"}),q.jsx(n9,{image:_,setImage:v}),q.jsx(Zt,{size:"40px"}),q.jsx(Op,{title:"해시태그",placeholder:"해시태그를 입력한 뒤 엔터키를 누르세요",value:u,onChange:A=>d(A.target.value),onKeyDown:oe}),q.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},children:p.map((A,x)=>q.jsx(lo,{type:"editor",text:`${A}`,onDelete:()=>se(x)},x))}),q.jsx(c9,{children:q.jsx(Lo,{title:"글 작성 완료",onClick:A=>{K()},disabled:R})}),q.jsx(Zt,{size:"160px"}),q.jsx(Kv,{}),P&&q.jsx(fx,{title:M==="logo"?"정말 이동하시겠습니까?":"필수 항목 미작성",message:M==="logo"?"로고를 클릭하여 메인 페이지로 이동합니다.":"제목, 내용, 카테고리는 필수 항목입니다. 모두 입력해주세요.",onConfirm:le,onCancel:M==="logo"?D:null})]})}const d9=Ie.div`
  display: block;
`,f9=Ie.h3`
  color: ${ve.gray[800]};
  font-size: 40px;
`,p9=Ie.p`
  color: ${ve.gray[800]};
  font-size: 20px;
  margin: 40px 0 40px 0;
  white-space: pre-line;
`,m9=Ie.p`
  color: ${ve.gray[500]};
  align-self: stretch;
  font-size: 20px;
`,g9=Ie.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
  object-position: center;
`,y9=Ie.div`
  position: relative;
  display: inline-block;
`,_9=Ie.div`
  position: absolute;
  top: 48px;
  right: 0;
  z-index: 10;
`;function v9(n){var m;const{post:e,onDelete:t}=n,r=(m=e.createdAt)!=null&&m.toDate?e.createdAt.toDate():new Date(e.createdAt),[a,o]=Y.useState(!1),[u,d]=Y.useState(!1),p=()=>{d(!0)};return q.jsxs(d9,{children:[q.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"flex-start"},children:[q.jsxs("div",{children:[q.jsx(f9,{children:e.title}),q.jsxs(m9,{children:[r.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})," ","• ",e.category]})]}),q.jsxs(y9,{children:[q.jsx("img",{src:"/mini-blog//ellipsis-v.svg",alt:"ellipsis-v",style:{cursor:"pointer"},onClick:()=>o(_=>!_)}),a&&q.jsx(_9,{children:q.jsx(Lo,{title:"삭제하기",onClick:p})})]})]}),e.image&&q.jsxs(q.Fragment,{children:[q.jsx(Zt,{size:"40px"}),q.jsx(g9,{src:e.image,alt:"대표 이미지"})]}),q.jsx(p9,{children:e.content}),u&&q.jsx(fx,{title:"정말로 글을 삭제하시겠습니까?",message:"삭제한 글은 복구할 수 없습니다.",onConfirm:t,onCancel:()=>d(!1)})]})}const E9=Ie.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 24px 24px;
  align-items: center;
  gap: 16px;
  background: #fff;
  border-bottom: 1px solid #c4c9d0;
  &:last-child {
    border-bottom: none;
  }
`,T9=Ie.p`
  font-size: 20px;
  color: #4f4f4f;
  & > span {
    color: #a3a3a3;
  }
`;function w9(n){const{comment:e,index:t}=n;return q.jsx(E9,{children:q.jsxs(T9,{children:[q.jsx("span",{children:t+1})," ",e.content]})})}const b9=Ie.div`
  display: flex;
  flex-direction: column;
`,I9=Ie.div`
  margin-bottom: 20px;
  font-size: 20px;
  & > span {
    color: #0084ff;
    font-weight: 500;
  }
`;function A9(n){const{comments:e}=n,t=e.map((r,a)=>q.jsx(w9,{comment:r,index:a},r.id));return q.jsxs(b9,{children:[q.jsxs(I9,{children:["댓글 ",q.jsxs("span",{children:[e.length," "]})]}),t]})}const S9=Ie.div`
  display: flex;
  gap: 8px;
`,R9=Ie.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,C9=Ie.div`
  flex: 1;
`,D9=Ie.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;function x9(n){const e=IN().id,t=Ou(),[r,a]=Y.useState({id:0,title:"",content:"",comments:[],hashtag:[],category:"",image:""});Y.useEffect(()=>{Oh.collection("post").doc(e).get().then(m=>{a(m.data())})},[]);const[o,u]=Y.useState(""),d=()=>{if(!o.trim()){alert("댓글을 입력해주세요.");return}let m=new Date().getTime().toString(),_=r.comments;_.push({id:`${e}_${m}`,content:o}),Oh.collection("post").doc(e).update({comments:_}).then(()=>{u(""),alert("댓글이 등록되었습니다!")})},p=()=>{Oh.collection("post").doc(e).delete().then(()=>{t("/")})};return q.jsxs(R9,{children:[q.jsx(Qv,{}),q.jsx(Zt,{size:"80px"}),q.jsxs(C9,{children:[q.jsx(v9,{post:r,onDelete:p}),q.jsx(S9,{children:r.hashtag.map((m,_)=>q.jsx(lo,{type:"display",text:`${m}`},_))}),q.jsx(Zt,{size:"140px"}),q.jsx(A9,{comments:r.comments}),q.jsx(Op,{placeholder:"댓글을 작성하세요",value:o,onChange:m=>u(m.target.value)}),q.jsx(D9,{children:q.jsx(Lo,{title:"댓글 작성",onClick:d})})]}),q.jsx(Kv,{})]})}QP.createRoot(document.getElementById("root")).render(q.jsx(lO,{basename:"/mini-blog/",children:q.jsxs(zN,{children:[q.jsx(hp,{index:!0,element:q.jsx(X6,{})}),q.jsx(hp,{path:"write",element:q.jsx(h9,{})}),q.jsx(hp,{path:"post/:id",element:q.jsx(x9,{})})]})}));
