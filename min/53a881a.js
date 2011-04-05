/*!
 * jQuery JavaScript Library v1.5.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Feb 23 13:55:29 2011 -0500
 */
(function(a,b){function cg(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cd(a){if(!bZ[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bZ[a]=c}return bZ[a]}function cc(a,b){var c={};d.each(cb.concat.apply([],cb.slice(0,b)),function(){c[this]=a});return c}function bY(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bX(){try{return new a.XMLHttpRequest}catch(b){}}function bW(){d(a).unload(function(){for(var a in bU)bU[a](0,1)})}function bQ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bP(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bO(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bq.test(a)?e(a,f):bO(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bO(a+"["+f+"]",b[f],c,e)}function bN(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bH,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bN(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bN(a,c,d,e,"*",g));return l}function bM(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bB),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bo(a,b,c){var e=b==="width"?bi:bj,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function ba(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function _(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(r,"`").replace(s,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,q=[],r=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(p,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function w(){return!0}function v(){return!1}function g(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.1",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}catch(g){throw g}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(e)return e;e=a={}}var c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments.length,c=b<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),e=c.promise();if(b>1){var f=E.call(arguments,0),g=b,h=function(a){return function(b){f[a]=arguments.length>1?E.call(arguments,0):b,--g||c.resolveWith(e,f)}};while(b--)a=f[b],a&&d.isFunction(a.promise)?a.promise().then(h(b),c.reject):--g;g||c.resolveWith(e,f)}else c!==a&&c.resolve(a);return e},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e),b=e=f=null}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!g(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,h=b.nodeType,i=h?d.cache:b,j=h?b[d.expando]:d.expando;if(!i[j])return;if(c){var k=e?i[j][f]:i[j];if(k){delete k[c];if(!g(k))return}}if(e){delete i[j][f];if(!g(i[j]))return}var l=i[j][f];d.support.deleteExpando||i!=a?delete i[j]:i[j]=null,l?(i[j]={},h||(i[j].toJSON=d.noop),i[j][f]=l):h&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var h=/[\n\t\r]/g,i=/\s+/,j=/\r/g,k=/^(?:href|src|style)$/,l=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,o=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(i);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(h+=" "+b[j]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(i);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var j=(" "+g.className+" ").replace(h," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");g.className=d.trim(j)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),j=b,k=a.split(i);while(f=k[g++])j=e?j:!h.hasClass(f),h[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(h," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var k=i?f:0,l=i?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(o.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(j,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&o.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=k.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&l.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:m.test(a.nodeName)||n.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var p=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,r=/\./g,s=/ /g,t=/[^\w\s.|`]/g,u=function(a){return a.replace(t,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=v;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),u).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var w=s.handle;w&&(w.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(p,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{if(b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&C("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&C("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(q.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return q.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return q.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=p.exec(h),k="",j&&(k=j[0],h=h.replace(p,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.getAttribute("type")},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(d||!l.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return k(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,ba)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){$(a,e),f=_(a),g=_(e);for(h=0;f[h];++h)$(f[h],g[h])}if(b){Z(a,e);if(c){f=_(a),g=_(e);for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bb=/alpha\([^)]*\)/i,bc=/opacity=([^)]*)/,bd=/-([a-z])/ig,be=/([A-Z])/g,bf=/^-?\d+(?:px)?$/i,bg=/^-?\d/,bh={position:"absolute",visibility:"hidden",display:"block"},bi=["Left","Right"],bj=["Top","Bottom"],bk,bl,bm,bn=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bk(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bk)return bk(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bd,bn)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bo(a,b,e):d.swap(a,bh,function(){f=bo(a,b,e)});if(f<=0){f=bk(a,b,b),f==="0px"&&bm&&(f=bm(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bf.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bb.test(f)?f.replace(bb,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bl=function(a,c,e){var f,g,h;e=e.replace(be,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bm=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bf.test(d)&&bg.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bk=bl||bm,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bp=/%20/g,bq=/\[\]$/,br=/\r?\n/g,bs=/#.*$/,bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bu=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bv=/(?:^file|^widget|\-extension):$/,bw=/^(?:GET|HEAD)$/,bx=/^\/\//,by=/\?/,bz=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bA=/^(?:select|textarea)/i,bB=/\s+/,bC=/([?&])_=[^&]*/,bD=/(^|\-)([a-z])/g,bE=function(a,b,c){return b+c.toUpperCase()},bF=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,bG=d.fn.load,bH={},bI={},bJ,bK;try{bJ=c.location.href}catch(bL){bJ=c.createElement("a"),bJ.href="",bJ=bJ.href}bK=bF.exec(bJ.toLowerCase()),d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bG)return bG.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bz,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bA.test(this.nodeName)||bu.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(br,"\r\n")}}):{name:b.name,value:c.replace(br,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bJ,isLocal:bv.test(bK[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bM(bH),ajaxTransport:bM(bI),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bP(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bQ(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bD,bE)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bt.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bs,"").replace(bx,bK[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bB),e.crossDomain||(q=bF.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bK[1]||q[2]!=bK[2]||(q[3]||(q[1]==="http:"?80:443))!=(bK[3]||(bK[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bN(bH,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bw.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(by.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bC,"$1_="+w);e.url=x+(x===e.url?(by.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bN(bI,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bO(g,a[g],c,f);return e.join("&").replace(bp,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bR=d.now(),bS=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bR++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bS.test(b.url)||f&&bS.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bS,l),b.url===j&&(f&&(k=k.replace(bS,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bT=d.now(),bU,bV;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bX()||bY()}:bX,bV=d.ajaxSettings.xhr(),d.support.ajax=!!bV,d.support.cors=bV&&"withCredentials"in bV,bV=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),(!a.crossDomain||a.hasContent)&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bU[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bU||(bU={},bW()),h=bT++,g.onreadystatechange=bU[h]=c):c()},abort:function(){c&&c(0,1)}}}});var bZ={},b$=/^(?:toggle|show|hide)$/,b_=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ca,cb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(cc("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cd(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cc("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(cc("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cd(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(b$.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=b_.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:cc("show",1),slideUp:cc("hide",1),slideToggle:cc("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!ca&&(ca=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ca),ca=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ce=/^t(?:able|d|h)$/i,cf=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=cg(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!ce.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=cf.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!cf.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=cg(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=cg(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);/**
 * Copyright 2010 Jay and Han (laughinghan@gmail.com)
 * License, Usage and Readme at http://mathquill.com
 */
 (function($){ //takes in the jQuery function as an argument

var _, //temp variable of prototypes
  undefined,
  jQueryDataKey = '[[mathquill internal data]]';

/*************************************************
 * Abstract base classes of blocks and commands.
 ************************************************/

/**
 * MathElement is the core Math DOM tree node prototype.
 * Both MathBlock's and MathCommand's descend from it.
 */
function MathElement(){}
_ = MathElement.prototype;
_.prev = 0;
_.next = 0;
_.parent = 0;
_.firstChild = 0;
_.lastChild = 0;
_.eachChild = function(fn) {
  for (var child = this.firstChild; child; child = child.next)
    if (fn.call(this, child) === false) break;

  return this;
};
_.foldChildren = function(fold, fn) {
  this.eachChild(function(child) {
    fold = fn.call(this, fold, child);
  });
  return fold;
};
_.keydown = function(e) {
  return this.parent.keydown(e);
};
_.textInput = function(ch) {
  return this.parent.textInput(ch);
};

/**
 * Commands and operators, like subscripts, exponents, or fractions.
 * Descendant commands are organized into blocks.
 * May be passed a MathFragment that's being replaced.
 */
function MathCommand(cmd, html_template, text_template, replacedFragment) {
  if (!arguments.length) return;
  var self = this; // minifier optimization

  self.cmd = cmd;
  if (html_template) self.html_template = html_template;
  if (text_template) self.text_template = text_template;

  self.jQ = $(self.html_template[0]).data(jQueryDataKey, {cmd: self});
  self.initBlocks(replacedFragment);
}

_ = MathCommand.prototype = new MathElement;
_.initBlocks = function(replacedFragment) {
  var self = this;
  //single-block commands
  if (self.html_template.length === 1) {
    self.firstChild =
    self.lastChild =
    self.jQ.data(jQueryDataKey).block =
      (replacedFragment && replacedFragment.blockify()) || new MathBlock;

    self.firstChild.parent = self;
    self.firstChild.jQ = self.jQ.append(self.firstChild.jQ);

    return;
  }
  //otherwise, the succeeding elements of html_template should be child blocks
  var newBlock, prev, num_blocks = self.html_template.length;
  this.firstChild = newBlock = prev =
    (replacedFragment && replacedFragment.blockify()) || new MathBlock;

  newBlock.parent = self;
  newBlock.jQ = $(self.html_template[1])
    .data(jQueryDataKey, {block: newBlock})
    .append(newBlock.jQ)
    .appendTo(self.jQ);

  newBlock.blur();

  for (var i = 2; i < num_blocks; i += 1) {
    newBlock = new MathBlock;
    newBlock.parent = self;
    newBlock.prev = prev;
    prev.next = newBlock;
    prev = newBlock;

    newBlock.jQ = $(self.html_template[i])
      .data(jQueryDataKey, {block: newBlock})
      .appendTo(self.jQ);

    newBlock.blur();
  }
  self.lastChild = newBlock;
};
_.latex = function() {
  return this.foldChildren(this.cmd, function(latex, child) {
    return latex + '{' + (child.latex() || ' ') + '}';
  });
};
_.text = function() {
  var i = 0;
  return this.foldChildren(this.text_template[i], function(text, child) {
    i += 1;
    var child_text = child.text();
    if (text && this.text_template[i] === '('
        && child_text[0] === '(' && child_text.slice(-1) === ')')
      return text + child_text.slice(1, -1) + this.text_template[i];
    return text + child.text() + (this.text_template[i] || '');
  });
};
_.remove = function() {
  var self = this,
      prev = self.prev,
      next = self.next,
      parent = self.parent;

  if (prev)
    prev.next = next;
  else
    parent.firstChild = next;

  if (next)
    next.prev = prev;
  else
    parent.lastChild = prev;

  self.jQ.remove();

  return self;
};
_.respace = $.noop; //placeholder for context-sensitive spacing
_.placeCursor = function(cursor) {
  //append the cursor to the first empty child, or if none empty, the last one
  cursor.appendTo(this.foldChildren(this.firstChild, function(prev, child) {
    return prev.isEmpty() ? prev : child;
  }));
};
_.isEmpty = function() {
  return this.foldChildren(true, function(isEmpty, child) {
    return isEmpty && child.isEmpty();
  });
};

/**
 * Lightweight command without blocks or children.
 */
function Symbol(cmd, html, text) {
  MathCommand.call(this, cmd, [ html ],
    [ text || (cmd && cmd.length > 1 ? cmd.slice(1) : cmd) ]);
}
_ = Symbol.prototype = new MathCommand;
_.initBlocks = $.noop;
_.latex = function(){ return this.cmd; };
_.text = function(){ return this.text_template; };
_.placeCursor = $.noop;
_.isEmpty = function(){ return true; };

/**
 * Children and parent of MathCommand's. Basically partitions all the
 * symbols and operators that descend (in the Math DOM tree) from
 * ancestor operators.
 */
function MathBlock(){}
_ = MathBlock.prototype = new MathElement;
_.latex = function() {
  return this.foldChildren('', function(latex, child) {
    return latex + child.latex();
  });
};
_.text = function() {
  return this.firstChild === this.lastChild ?
    this.firstChild.text() :
    this.foldChildren('(', function(text, child) {
      return text + child.text();
    }) + ')';
};
_.isEmpty = function() {
  return this.firstChild === 0 && this.lastChild === 0;
};
_.focus = function() {
  this.jQ.addClass('hasCursor');
  if (this.isEmpty())
    this.jQ.removeClass('empty');

  return this;
};
_.blur = function() {
  this.jQ.removeClass('hasCursor');
  if (this.isEmpty())
    this.jQ.addClass('empty');

  return this;
};

/**
 * An entity outside the Math DOM tree with one-way pointers (so it's only
 * a "view" of part of the tree, not an actual node/entity in the tree)
 * that delimit a list of symbols and operators.
 */
function MathFragment(parent, prev, next) {
  if (!arguments.length) return;

  var self = this;

  self.parent = parent;
  self.prev = prev || 0; //so you can do 'new MathFragment(block)' without
  self.next = next || 0; //ending up with this.prev or this.next === undefined

  self.jQinit(self.fold($(), function(jQ, child){ return child.jQ.add(jQ); }));
}
_ = MathFragment.prototype;
_.remove= MathCommand.prototype.remove;
_.jQinit = function(children) {
  this.jQ = children;
};
_.each = function(fn) {
  for (var el = this.prev.next || this.parent.firstChild; el !== this.next; el = el.next)
    if (fn.call(this, el) === false) break;

  return this;
};
_.fold = function(fold, fn) {
  this.each(function(el) {
    fold = fn.call(this, fold, el);
  });
  return fold;
};
_.latex = function() {
  return this.fold('', function(latex, el){ return latex + el.latex(); });
};
_.blockify = function() {
  var self = this,
      prev = self.prev,
      next = self.next,
      parent = self.parent,
      newBlock = new MathBlock,
      newFirstChild = newBlock.firstChild = prev.next || parent.firstChild,
      newLastChild = newBlock.lastChild = next.prev || parent.lastChild;

  if (prev)
    prev.next = next;
  else
    parent.firstChild = next;

  if (next)
    next.prev = prev;
  else
    parent.lastChild = prev;

  newFirstChild.prev = self.prev = 0;
  newLastChild.next = self.next = 0;

  self.parent = newBlock;
  self.each(function(el){ el.parent = newBlock; });

  newBlock.jQ = self.jQ;

  return newBlock;
};

/*********************************************
 * Root math elements with event delegation.
 ********************************************/

function createRoot(jQ, root, textbox, editable) {
  var contents = jQ.contents().detach();

  if (!textbox)
    jQ.addClass('mathquill-rendered-math');

  root.jQ = jQ.data(jQueryDataKey, {
    block: root,
    revert: function() {
      jQ.empty().unbind('.mathquill')
        .removeClass('mathquill-rendered-math mathquill-editable mathquill-textbox')
        .append(contents);
    }
  });

  var cursor = root.cursor = new Cursor(root);

  root.renderLatex(contents.text());

  if (!editable) //if static, quit once we render the LaTeX
    return;

  root.textarea = $('<span class="textarea"><textarea></textarea></span>')
    .prependTo(jQ.addClass('mathquill-editable'));
  var textarea = root.textarea.children();
  if (textbox)
    jQ.addClass('mathquill-textbox');

  textarea.focus(function(e) {
    if (!cursor.parent)
      cursor.appendTo(root);
    cursor.parent.jQ.addClass('hasCursor');
    if (cursor.selection)
      cursor.selection.jQ.removeClass('blur');
    else
      cursor.show();
    e.stopPropagation();
  }).blur(function(e) {
    cursor.hide().parent.blur();
    if (cursor.selection)
      cursor.selection.jQ.addClass('blur');
    e.stopPropagation();
  });

  //trigger virtual textInput event (see Wiki page "Keyboard Events")
  function textInput() {
    var text = textarea.val();
    if (!text) return;
    textarea.val('');
    cursor.parent.textInput(text);
  }

  var lastKeydn = {}; //see Wiki page "Keyboard Events"
  jQ.bind('focus.mathquill blur.mathquill', function(e) {
    textarea.trigger(e);
  }).bind('keydown.mathquill', function(e) { //see Wiki page "Keyboard Events"
    lastKeydn.evt = e;
    lastKeydn.happened = true;
    lastKeydn.returnValue = cursor.parent.keydown(e);
    if (lastKeydn.returnValue)
      return true;
    else {
      e.stopImmediatePropagation();
      return false;
    }
  }).bind('keypress.mathquill', function(e) {
    //on auto-repeated key events, keypress may get triggered but not keydown
    //  (see Wiki page "Keyboard Events")
    if (lastKeydn.happened)
      lastKeydn.happened = false;
    else
      lastKeydn.returnValue = cursor.parent.keydown(lastKeydn.evt);

    //prevent default and cancel keypress if keydown returned false,
    //even in browsers where that doesn't automatically happen
    //  (see Wiki page "Keyboard Events")
    if (!lastKeydn.returnValue)
      return false;

    //after keypress event, trigger virtual textInput event if text was
    //input to textarea
    //  (see Wiki page "Keyboard Events")
    setTimeout(textInput);
  }).bind('mousedown.mathquill', function(e) {
    cursor.seek($(e.target), e.pageX, e.pageY).blink = $.noop;

    anticursor = new Cursor(root);
    anticursor.jQ = anticursor._jQ = $();
    if (cursor.next)
      anticursor.insertBefore(cursor.next);
    else
      anticursor.appendTo(cursor.parent);

    jQ.mousemove(mousemove);
    $(document).mousemove(docmousemove).mouseup(mouseup);

    setTimeout(function(){textarea.focus();});
  }).bind('selectstart.mathquill', false).blur();

  function mousemove(e) {
    cursor.seek($(e.target), e.pageX, e.pageY);

    if (cursor.prev === anticursor.prev && cursor.parent === anticursor.parent)
      cursor.clearSelection();
    else
      cursor.selectFrom(anticursor);

    return false;
  }
  function docmousemove(e) {
    delete e.target;
    return mousemove(e);
  }
  function mouseup(e) {
    anticursor = undefined;
    cursor.blink = blink;
    if (!cursor.selection) cursor.show();
    jQ.unbind('mousemove', mousemove);
    $(document).unbind('mousemove', docmousemove).unbind('mouseup', mouseup);
  }

  var anticursor, blink = cursor.blink;
}

function RootMathBlock(){}
_ = RootMathBlock.prototype = new MathBlock;
_.latex = function() {
  return MathBlock.prototype.latex.call(this).replace(/(\\[a-z]+) (?![a-z])/ig,'$1');
};
_.text = function() {
  return this.foldChildren('', function(text, child) {
    return text + child.text();
  });
};
_.renderLatex = function(latex) {
  this.jQ.children().slice(1).remove();
  this.firstChild = this.lastChild = 0;
  this.cursor.appendTo(this).writeLatex(latex);
  this.blur();
};
_.keydown = function(e)
{
  this.skipTextInput = true;
  e.ctrlKey = e.ctrlKey || e.metaKey;
  switch ((e.originalEvent && e.originalEvent.keyIdentifier) || e.which) {
  case 8: //backspace
  case 'Backspace':
  case 'U+0008':
    if (e.ctrlKey)
      while (this.cursor.prev || this.cursor.selection)
        this.cursor.backspace();
    else
      this.cursor.backspace();
    break;
  case 27: //may as well be the same as tab until we figure out what to do with it
  case 'Esc':
  case 'U+001B':
  case 9: //tab
  case 'Tab':
  case 'U+0009':
    if (e.ctrlKey) break;

    var parent = this.cursor.parent;
    if (e.shiftKey) { //shift+Tab = go one block left if it exists, else escape left.
      if (parent === this) //cursor is in root editable, continue default
        break;
      else if (parent.prev) //go one block left
        this.cursor.appendTo(parent.prev);
      else //get out of the block
        this.cursor.insertBefore(parent.parent);
    }
    else { //plain Tab = go one block right if it exists, else escape right.
      if (parent === this) //cursor is in root editable, continue default
        return this.skipTextInput = true;
      else if (parent.next) //go one block right
        this.cursor.prependTo(parent.next);
      else //get out of the block
        this.cursor.insertAfter(parent.parent);
    }

    this.cursor.clearSelection();
    return false;
  case 13: //enter
  case 'Enter':
    e.preventDefault();
    break;
  case 35: //end
  case 'End':
    if (e.shiftKey)
      while (this.cursor.next || (e.ctrlKey && this.cursor.parent !== this))
        this.cursor.selectRight();
    else //move to the end of the root block or the current block.
      this.cursor.clearSelection().appendTo(e.ctrlKey ? this : this.cursor.parent);
    break;
  case 36: //home
  case 'Home':
    if (e.shiftKey)
      while (this.cursor.prev || (e.ctrlKey && this.cursor.parent !== this))
        this.cursor.selectLeft();
    else //move to the start of the root block or the current block.
      this.cursor.clearSelection().prependTo(e.ctrlKey ? this : this.cursor.parent);
    break;
  case 37: //left
  case 'Left':
    if (e.ctrlKey) break;

    if (e.shiftKey)
      this.cursor.selectLeft();
    else
      this.cursor.moveLeft();
    break;
  case 38: //up
  case 'Up':
    if (e.ctrlKey) break;

    if (e.shiftKey) {
      if (this.cursor.prev)
        while (this.cursor.prev)
          this.cursor.selectLeft();
      else
        this.cursor.selectLeft();
    }
    else if (this.cursor.parent.prev)
      this.cursor.clearSelection().appendTo(this.cursor.parent.prev);
    else if (this.cursor.prev)
      this.cursor.clearSelection().prependTo(this.cursor.parent);
    else if (this.cursor.parent !== this)
      this.cursor.clearSelection().insertBefore(this.cursor.parent.parent);
    break;
  case 39: //right
  case 'Right':
    if (e.ctrlKey) break;

    if (e.shiftKey)
      this.cursor.selectRight();
    else
      this.cursor.moveRight();
    break;
  case 40: //down
  case 'Down':
    if (e.ctrlKey) break;

    if (e.shiftKey) {
      if (this.cursor.next)
        while (this.cursor.next)
          this.cursor.selectRight();
      else
        this.cursor.selectRight();
    }
    else if (this.cursor.parent.next)
      this.cursor.clearSelection().prependTo(this.cursor.parent.next);
    else if (this.cursor.next)
      this.cursor.clearSelection().appendTo(this.cursor.parent);
    else if (this.cursor.parent !== this)
      this.cursor.clearSelection().insertAfter(this.cursor.parent.parent);
    break;
  case 46: //delete
  case 'Del':
  case 'U+007F':
    if (e.ctrlKey)
      while (this.cursor.next || this.cursor.selection)
        this.cursor.deleteForward();
    else
      this.cursor.deleteForward();
    break;
  case 65: //the 'A' key, as in Ctrl+A Select All
  case 'A':
  case 'U+0041':
    if (e.ctrlKey && !e.shiftKey && !e.altKey) {
      if (this !== this.cursor.root) //so not stopPropagation'd at RootMathCommand
        return this.parent.keydown(e);

      this.cursor.clearSelection().appendTo(this);
      while (this.cursor.prev)
        this.cursor.selectLeft();
      e.preventDefault();
    }
    else
      this.skipTextInput = false;
    break;
  case 67: //the 'C' key, as in Ctrl+C Copy
  case 'C':
  case 'U+0043':
    if (e.ctrlKey && !e.shiftKey && !e.altKey) {
      if (this !== this.cursor.root) //so not stopPropagation'd at RootMathCommand
        return this.parent.keydown(e);

      if (!this.cursor.selection) return true;

      window['MathQuill LaTeX Clipboard'] = this.cursor.selection.latex();
      e.preventDefault();
    }
    else
      this.skipTextInput = false;
    break;
  case 86: //the 'V' key, as in Ctrl+V Paste
  case 'V':
  case 'U+0056':
    if (e.ctrlKey && !e.shiftKey && !e.altKey) {
      if (this !== this.cursor.root) //so not stopPropagation'd at RootMathCommand
        return this.parent.keydown(e);

      this.cursor.writeLatex(window['MathQuill LaTeX Clipboard']).show();
      e.preventDefault();
    }
    else
      this.skipTextInput = false;
    break;
  case 88: //the 'X' key, as in Ctrl+X Cut
  case 'X':
  case 'U+0058':
    if (e.ctrlKey && !e.shiftKey && !e.altKey) {
      if (this !== this.cursor.root) //so not stopPropagation'd at RootMathCommand
        return this.parent.keydown(e);

      if (!this.cursor.selection) return true;

      window['MathQuill LaTeX Clipboard'] = this.cursor.selection.latex();
      this.cursor.deleteSelection();
      e.preventDefault();
    }
    else
      this.skipTextInput = false;
    break;
  default:
    this.skipTextInput = false;
  }
  return true;
};
_.textInput = function(ch) {
  if (!this.skipTextInput)
    this.cursor.write(ch);
};

function RootMathCommand(cursor) {
  MathCommand.call(this, '$');
  this.firstChild.cursor = cursor;
  this.firstChild.textInput = function(ch) {
    if (this.skipTextInput) return;

    if (ch !== '$' || cursor.parent !== this)
      cursor.write(ch);
    else if (this.isEmpty()) {
      cursor.insertAfter(this.parent).backspace()
        .insertNew(new VanillaSymbol('\\$','$')).show();
    }
    else if (!cursor.next)
      cursor.insertAfter(this.parent);
    else if (!cursor.prev)
      cursor.insertBefore(this.parent);
    else
      cursor.write(ch);
  };
}
_ = RootMathCommand.prototype = new MathCommand;
_.html_template = ['<span class="mathquill-rendered-math"></span>'];
_.initBlocks = function() {
  this.firstChild =
  this.lastChild =
  this.jQ.data(jQueryDataKey).block =
    new RootMathBlock;

  this.firstChild.parent = this;
  this.firstChild.jQ = this.jQ;
};

function RootTextBlock(){}
_ = RootTextBlock.prototype = new MathBlock;
_.renderLatex = function(latex) {
  var self = this, cursor = self.cursor;
  self.jQ.children().slice(1).remove();
  self.firstChild = self.lastChild = 0;
  cursor.show().appendTo(self);

  latex = latex.match(/(?:\\\$|[^$])+|\$(?:\\\$|[^$])*\$|\$(?:\\\$|[^$])*$/g) || '';
  for (var i = 0; i < latex.length; i += 1) {
    var chunk = latex[i];
    if (chunk[0] === '$') {
      if (chunk[-1+chunk.length] === '$' && chunk[-2+chunk.length] !== '\\')
        chunk = chunk.slice(1, -1);
      else
        chunk = chunk.slice(1);

      var root = new RootMathCommand(cursor);
      cursor.insertNew(root);
      root.firstChild.renderLatex(chunk);
      cursor.show().insertAfter(root);
    }
    else {
      for (var j = 0; j < chunk.length; j += 1)
        this.cursor.insertNew(new VanillaSymbol(chunk[j]));
    }
  }
};
_.keydown = RootMathBlock.prototype.keydown;
_.textInput = function(ch) {
  if (this.skipTextInput) return;

  this.cursor.deleteSelection();
  if (ch === '$')
    this.cursor.insertNew(new RootMathCommand(this.cursor));
  else
    this.cursor.insertNew(new VanillaSymbol(ch));
};

/***************************
 * Commands and Operators.
 **************************/

var CharCmds = {}, LatexCmds = {}; //single character commands, LaTeX commands

function proto(parent, child) { //shorthand for prototyping
  child.prototype = parent.prototype;
  return child;
}

function SupSub(cmd, html, text, replacedFragment) {
  MathCommand.call(this, cmd, [ html ], [ text ], replacedFragment);
}
_ = SupSub.prototype = new MathCommand;
_.latex = function() {
  var latex = this.firstChild.latex();
  if (latex.length === 1)
    return this.cmd + latex;
  else
    return this.cmd + '{' + (latex || ' ') + '}';
};
_.redraw = function() {
  this.respace();
  if (this.next)
    this.next.respace();
  if (this.prev)
    this.prev.respace();
};
_.respace = function() {
  if (
    this.prev.cmd === '\\int ' || (
      this.prev instanceof SupSub && this.prev.cmd != this.cmd &&
      this.prev.prev && this.prev.prev.cmd === '\\int '
    )
  ) {
    if (!this.limit) {
      this.limit = true;
      this.jQ.addClass('limit');
    }
  }
  else {
    if (this.limit) {
      this.limit = false;
      this.jQ.removeClass('limit');
    }
  }

  if (this.respaced = this.prev instanceof SupSub && this.prev.cmd != this.cmd && !this.prev.respaced) {
    if (this.limit && this.cmd === '_') {
      this.jQ.css({
        left: -.25-this.prev.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2)+'em',
        marginRight: .1-Math.min(this.jQ.outerWidth(), this.prev.jQ.outerWidth())/+this.jQ.css('fontSize').slice(0,-2)+'em' //1px adjustment very important!
      });
    }
    else {
      this.jQ.css({
        left: -this.prev.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2)+'em',
        marginRight: .1-Math.min(this.jQ.outerWidth(), this.prev.jQ.outerWidth())/+this.jQ.css('fontSize').slice(0,-2)+'em' //1px adjustment very important!
      });
    }
  }
  else if (this.limit && this.cmd === '_') {
    this.jQ.css({
      left: '-.25em',
      marginRight: ''
    });
  }
  else {
    this.jQ.css({
      left: '',
      marginRight: ''
    });
  }

  return this;
};

LatexCmds.subscript = LatexCmds._ = proto(SupSub, function(replacedFragment) {
  SupSub.call(this, '_', '<sub></sub>', '_', replacedFragment);
});

LatexCmds.superscript =
LatexCmds.supscript =
LatexCmds['^'] = proto(SupSub, function(replacedFragment) {
  SupSub.call(this, '^', '<sup></sup>', '**', replacedFragment);
});

function Fraction(replacedFragment) {
  MathCommand.call(this, '\\frac', undefined, undefined, replacedFragment);
  this.jQ.append('<span style="width:0">&nbsp;</span>');
}
_ = Fraction.prototype = new MathCommand;
_.html_template = [
  '<span class="fraction"></span>',
  '<span class="numerator"></span>',
  '<span class="denominator"></span>'
];
_.text_template = ['(', '/', ')'];

LatexCmds.frac = LatexCmds.fraction = Fraction;

function LiveFraction() {
  Fraction.apply(this, arguments);
}
_ = LiveFraction.prototype = new Fraction;
_.placeCursor = function(cursor) {
  if (this.firstChild.isEmpty()) {
    var prev = this.prev;
    while (prev &&
      !(
        prev instanceof BinaryOperator ||
        prev instanceof TextBlock ||
        prev instanceof BigSymbol
      ) //lookbehind for operator
    )
      prev = prev.prev;

    if (prev instanceof BigSymbol && prev.next instanceof SupSub) {
      prev = prev.next;
      if (prev.next instanceof SupSub && prev.next.cmd != prev.cmd)
        prev = prev.next;
    }

    if (prev !== this.prev) {
      var newBlock = new MathFragment(this.parent, prev, this).blockify();
      newBlock.jQ = this.firstChild.jQ.empty().removeClass('empty').append(newBlock.jQ).data(jQueryDataKey, { block: newBlock });
      newBlock.next = this.lastChild;
      newBlock.parent = this;
      this.firstChild = this.lastChild.prev = newBlock;
    }
  }
  cursor.appendTo(this.lastChild);
};

CharCmds['/'] = LiveFraction;

function SquareRoot(replacedFragment) {
  MathCommand.call(this, '\\sqrt', undefined, undefined, replacedFragment);
}
_ = SquareRoot.prototype = new MathCommand;
_.html_template = [
  '<span><span class="sqrt-prefix">&radic;</span></span>',
  '<span class="sqrt-stem"></span>'
];
_.text_template = ['sqrt(', ')'];
_.redraw = function() {
  var block = this.lastChild.jQ, height = block.outerHeight(true);
  block.css({
    borderTopWidth: height/28+1 // NOTE: Formula will need to change if our font isn't Symbola
  }).prev().css({
    fontSize: .9*height/+block.css('fontSize').slice(0,-2)+'em'
  });
};

LatexCmds.sqrt = SquareRoot;

function NthRoot(replacedFragment) {
  SquareRoot.call(this, replacedFragment);
  this.jQ = this.firstChild.jQ.detach().add(this.jQ);
}
_ = NthRoot.prototype = new SquareRoot;
_.html_template = [
  '<span><span class="sqrt-prefix">&radic;</span></span>',
  '<sup class="nthroot"></sup>',
  '<span class="sqrt-stem"></span>'
];
_.text_template = ['sqrt[', '](', ')'];
_.latex = function() {
  return '\\sqrt['+this.firstChild.latex()+']{'+this.lastChild.latex()+'}';
};

LatexCmds.nthroot = NthRoot;

// Round/Square/Curly/Angle Brackets (aka Parens/Brackets/Braces)
function Bracket(open, close, cmd, end, replacedFragment) {
  MathCommand.call(this, '\\left'+cmd,
    ['<span><span class="paren">'+open+'</span><span></span><span class="paren">'+close+'</span></span>'],
    [open, close],
    replacedFragment);
  this.end = '\\right'+end;
}
_ = Bracket.prototype = new MathCommand;
_.initBlocks = function(replacedFragment) {
  this.firstChild = this.lastChild =
    (replacedFragment && replacedFragment.blockify()) || new MathBlock;
  this.firstChild.parent = this;
  this.firstChild.jQ = this.jQ.children(':eq(1)')
    .data(jQueryDataKey, {block: this.firstChild})
    .append(this.firstChild.jQ);
};
_.latex = function() {
  return this.cmd + this.firstChild.latex() + this.end;
};
_.redraw = function() {
  var block = this.firstChild.jQ;
  block.prev().add(block.next()).css('fontSize', block.outerHeight()/(+block.css('fontSize').slice(0,-2)*1.02)+'em');
};

LatexCmds.lbrace = CharCmds['{'] = proto(Bracket, function(replacedFragment) {
  Bracket.call(this, '{', '}', '\\{', '\\}', replacedFragment);
});
LatexCmds.langle = LatexCmds.lang = proto(Bracket, function(replacedFragment) {
  Bracket.call(this,'&lang;','&rang;','\\langle ','\\rangle ',replacedFragment);
});

// Closing bracket matching opening bracket above
function CloseBracket(open, close, cmd, end, replacedFragment) {
  Bracket.apply(this, arguments);
}
_ = CloseBracket.prototype = new Bracket;
_.placeCursor = function(cursor) {
  //if I'm at the end of my parent who is a matching open-paren, and I was not passed
  //  a selection fragment, get rid of me and put cursor after my parent
  if (!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
    this.firstChild.blur();
};

LatexCmds.rbrace = CharCmds['}'] = proto(CloseBracket, function(replacedFragment) {
  CloseBracket.call(this, '{','}','\\{','\\}',replacedFragment);
});
LatexCmds.rangle = LatexCmds.rang = proto(CloseBracket, function(replacedFragment) {
  CloseBracket.call(this,'&lang;','&rang;','\\langle ','\\rangle ',replacedFragment);
});

function Paren(open, close, replacedFragment) {
  Bracket.call(this, open, close, open, close, replacedFragment);
}
Paren.prototype = Bracket.prototype;

LatexCmds.lparen = CharCmds['('] = proto(Paren, function(replacedFragment) {
  Paren.call(this, '(', ')', replacedFragment);
});
LatexCmds.lbrack = LatexCmds.lbracket = CharCmds['['] = proto(Paren, function(replacedFragment) {
  Paren.call(this, '[', ']', replacedFragment);
});

function CloseParen(open, close, replacedFragment) {
  CloseBracket.call(this, open, close, open, close, replacedFragment);
}
CloseParen.prototype = CloseBracket.prototype;

LatexCmds.rparen = CharCmds[')'] = proto(CloseParen, function(replacedFragment) {
  CloseParen.call(this, '(', ')', replacedFragment);
});
LatexCmds.rbrack = LatexCmds.rbracket = CharCmds[']'] = proto(CloseParen, function(replacedFragment) {
  CloseParen.call(this, '[', ']', replacedFragment);
});

function Pipes(replacedFragment) {
  Paren.call(this, '|', '|', replacedFragment);
}
_ = Pipes.prototype = new Paren;
_.placeCursor = function(cursor) {
  if (!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
    cursor.appendTo(this.firstChild);
};

LatexCmds.lpipe = LatexCmds.rpipe = CharCmds['|'] = Pipes;

function TextBlock(replacedText) {
  if (replacedText instanceof MathFragment)
    this.replacedText = replacedText.remove().jQ.text();
  else if (typeof replacedText === 'string')
    this.replacedText = replacedText;

  MathCommand.call(this, '\\text');
}
_ = TextBlock.prototype = new MathCommand;
_.html_template = ['<span class="text"></span>'];
_.text_template = ['"', '"'];
_.initBlocks = function() {
  this.firstChild =
  this.lastChild =
  this.jQ.data(jQueryDataKey).block = new InnerTextBlock;

  this.firstChild.parent = this;
  this.firstChild.jQ = this.jQ.append(this.firstChild.jQ);
};
_.placeCursor = function(cursor) {
  (this.cursor = cursor).appendTo(this.firstChild);

  if (this.replacedText)
    for (var i = 0; i < this.replacedText.length; i += 1)
      this.write(this.replacedText.charAt(i));
};
_.write = function(ch) {
  this.cursor.insertNew(new VanillaSymbol(ch));
};
_.keydown = function(e) {
  //backspace and delete and ends of block don't unwrap
  if (!this.cursor.selection &&
    (
      (e.which === 8 && !this.cursor.prev) ||
      (e.which === 46 && !this.cursor.next)
    )
  ) {
    if (this.isEmpty())
      this.cursor.insertAfter(this);
    return false;
  }
  return this.parent.keydown(e);
};
_.textInput = function(ch) {
  this.cursor.deleteSelection();
  if (ch !== '$')
    this.write(ch);
  else if (this.isEmpty())
    this.cursor.insertAfter(this).backspace().insertNew(new VanillaSymbol('\\$','$'));
  else if (!this.cursor.next)
    this.cursor.insertAfter(this);
  else if (!this.cursor.prev)
    this.cursor.insertBefore(this);
  else { //split apart
    var next = new TextBlock(new MathFragment(this.firstChild, this.cursor.prev));
    next.placeCursor = function(cursor) // ********** REMOVEME HACK **********
    {
      this.prev = 0;
      delete this.placeCursor;
      this.placeCursor(cursor);
    };
    next.firstChild.focus = function(){ return this; };
    this.cursor.insertAfter(this).insertNew(next);
    next.prev = this;
    this.cursor.insertBefore(next);
    delete next.firstChild.focus;
  }
};
function InnerTextBlock(){}
_ = InnerTextBlock.prototype = new MathBlock;
_.blur = function() {
  this.jQ.removeClass('hasCursor');
  if (this.isEmpty()) {
    var textblock = this.parent, cursor = textblock.cursor;
    if (cursor.parent === this)
      this.jQ.addClass('empty');
    else {
      cursor.hide();
      textblock.remove();
      if (cursor.next === textblock)
        cursor.next = textblock.next;
      else if (cursor.prev === textblock)
        cursor.prev = textblock.prev;

      cursor.show().redraw();
    }
  }
  return this;
};
_.focus = function() {
  MathBlock.prototype.focus.call(this);

  var textblock = this.parent;
  if (textblock.next instanceof TextBlock) {
    var innerblock = this,
      cursor = textblock.cursor,
      next = textblock.next.firstChild;

    next.eachChild(function(child){
      child.parent = innerblock;
      child.jQ.appendTo(innerblock.jQ);
    });

    if (this.lastChild)
      this.lastChild.next = next.firstChild;
    else
      this.firstChild = next.firstChild;

    next.firstChild.prev = this.lastChild;
    this.lastChild = next.lastChild;

    next.parent.remove();

    if (cursor.prev)
      cursor.insertAfter(cursor.prev);
    else
      cursor.prependTo(this);

    cursor.redraw();
  }
  else if (textblock.prev instanceof TextBlock) {
    var cursor = textblock.cursor;
    if (cursor.prev)
      textblock.prev.firstChild.focus();
    else
      cursor.appendTo(textblock.prev.firstChild);
  }
  return this;
};

LatexCmds.text = CharCmds.$ = TextBlock;

// input box to type a variety of LaTeX commands beginning with a backslash
function LatexCommandInput(replacedFragment) {
  MathCommand.call(this, '\\');
  if (replacedFragment) {
    this.replacedFragment = replacedFragment.detach();
    this.isEmpty = function(){ return false; };
  }
}
_ = LatexCommandInput.prototype = new MathCommand;
_.html_template = ['<span class="latex-command-input"></span>'];
_.text_template = ['\\'];
_.placeCursor = function(cursor) {
  this.cursor = cursor.appendTo(this.firstChild);
  if (this.replacedFragment)
    this.jQ =
      this.jQ.add(this.replacedFragment.jQ.addClass('blur').bind(
        'mousedown mousemove',
        function(e) {
          $(e.target = this.nextSibling).trigger(e);
          return false;
        }
      ).insertBefore(this.jQ));
};
_.latex = function() {
  return '\\' + this.firstChild.latex() + ' ';
};
_.keydown = function(e) {
  if (e.which === 9 || e.which === 13) { //tab or enter
    this.renderCommand();
    return false;
  }
  return this.parent.keydown(e);
};
_.textInput = function(ch) {
  if (ch.match(/[a-z]/i)) {
    this.cursor.deleteSelection();
    this.cursor.insertNew(new VanillaSymbol(ch));
    return;
  }
  this.renderCommand();
  if (ch === ' ' || (ch === '\\' && this.firstChild.isEmpty()))
    return;

  this.cursor.parent.textInput(ch);
};
_.renderCommand = function() {
  this.jQ = this.jQ.last();
  this.remove();
  if (this.next)
    this.cursor.insertBefore(this.next);
  else
    this.cursor.appendTo(this.parent);

  var latex = this.firstChild.latex(), cmd;
  if (latex) {
    if (cmd = LatexCmds[latex])
      cmd = new cmd(this.replacedFragment, latex);
    else {
      cmd = new TextBlock(latex);
      cmd.firstChild.focus = function(){ delete this.focus; return this; };
      this.cursor.insertNew(cmd).insertAfter(cmd);
      if (this.replacedFragment)
        this.replacedFragment.remove();

      return;
    }
  }
  else
    cmd = new VanillaSymbol('\\backslash ','\\');

  this.cursor.insertNew(cmd);
  if (cmd instanceof Symbol && this.replacedFragment)
    this.replacedFragment.remove();
};

CharCmds['\\'] = LatexCommandInput;
  
function Binomial(replacedFragment) {
  MathCommand.call(this, '\\binom', undefined, undefined, replacedFragment);
  this.jQ.wrapInner('<span class="array"></span>').prepend('<span class="paren">(</span>').append('<span class="paren">)</span>');
}
_ = Binomial.prototype = new MathCommand;
_.html_template =
  ['<span></span>', '<span></span>', '<span></span>'];
_.text_template = ['choose(',',',')'];
_.redraw = function() {
  this.jQ.children(':first').add(this.jQ.children(':last'))
    .css('fontSize',
      this.jQ.outerHeight()/(+this.jQ.css('fontSize').slice(0,-2)*.9+2)+'em'
    );
};

LatexCmds.binom = LatexCmds.binomial = Binomial;

function Choose() {
  Binomial.apply(this, arguments);
}
_ = Choose.prototype = new Binomial;
_.placeCursor = LiveFraction.prototype.placeCursor;

LatexCmds.choose = Choose;

function Vector(replacedFragment) {
  MathCommand.call(this, '\\vector', undefined, undefined, replacedFragment);
}
_ = Vector.prototype = new MathCommand;
_.html_template = ['<span class="array"></span>', '<span></span>'];
_.latex = function() {
  return '\\begin{matrix}' + this.foldChildren([], function(latex, child) {
    latex.push(child.latex());
    return latex;
  }).join('\\\\') + '\\end{matrix}';
};
_.text = function() {
  return '[' + this.foldChildren([], function(latex, child) {
    text.push(child.text());
    return text;
  }).join() + ']';
}
_.placeCursor = function(cursor) {
  this.cursor = cursor.appendTo(this.firstChild);
};
_.keydown = function(e) {
  var currentBlock = this.cursor.parent;

  if (currentBlock.parent === this) {
    if (e.which === 13) { //enter
      var newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.jQ = $('<span></span>')
        .data(jQueryDataKey, {block: newBlock})
        .insertAfter(currentBlock.jQ);
      if (currentBlock.next)
        currentBlock.next.prev = newBlock;
      else
        this.lastChild = newBlock;

      newBlock.next = currentBlock.next;
      currentBlock.next = newBlock;
      newBlock.prev = currentBlock;
      this.cursor.appendTo(newBlock).redraw();
      return false;
    }
    else if (e.which === 9 && !e.shiftKey && !currentBlock.next) { //tab
      if (currentBlock.isEmpty()) {
        if (currentBlock.prev) {
          this.cursor.insertAfter(this);
          delete currentBlock.prev.next;
          this.lastChild = currentBlock.prev;
          currentBlock.jQ.remove();
          this.cursor.redraw();
          return false;
        }
        else
          return this.parent.keydown(e);
      }

      var newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.jQ = $('<span></span>').data(jQueryDataKey, {block: newBlock}).appendTo(this.jQ);
      this.lastChild = newBlock;
      currentBlock.next = newBlock;
      newBlock.prev = currentBlock;
      this.cursor.appendTo(newBlock).redraw();
      return false;
    }
    else if (e.which === 8) { //backspace
      if (currentBlock.isEmpty()) {
        if (currentBlock.prev) {
          this.cursor.appendTo(currentBlock.prev)
          currentBlock.prev.next = currentBlock.next;
        }
        else {
          this.cursor.insertBefore(this);
          this.firstChild = currentBlock.next;
        }

        if (currentBlock.next)
          currentBlock.next.prev = currentBlock.prev;
        else
          this.lastChild = currentBlock.prev;

        currentBlock.jQ.remove();
        if (this.isEmpty())
          this.cursor.deleteForward();
        else
          this.cursor.redraw();

        return false;
      }
      else if (!this.cursor.prev)
        return false;
    }
  }
  return this.parent.keydown(e);
};

LatexCmds.vector = Vector;

LatexCmds.editable = proto(RootMathCommand, function() {
  MathCommand.call(this, '\\editable');
  createRoot(this.jQ, this.firstChild, false, true);
  var cursor;
  this.placeCursor = function(c) { cursor = c.appendTo(this.firstChild); };
  this.firstChild.blur = function() {
    if (cursor.prev !== this.parent) return; //when cursor is inserted after editable, append own cursor FIXME HACK
    delete this.blur;
    this.cursor.appendTo(this);
    MathBlock.prototype.blur.call(this);
  };
  this.text = function(){ return this.firstChild.text(); };
});

/**********************************
 * Symbols and Special Characters
 *********************************/

function bind(cons) { //shorthand for binding arguments to constructor
  var args = Array.prototype.slice.call(arguments, 1);

  return proto(cons, function() {
    cons.apply(this, args);
  });
}

LatexCmds.f = bind(Symbol, 'f', '<var class="florin">&fnof;</var>');

function Variable(ch, html) {
  Symbol.call(this, ch, '<var>'+(html || ch)+'</var>');
}
_ = Variable.prototype = new Symbol;
_.text = function() {
  var text = this.cmd;
  if (this.prev && !(this.prev instanceof Variable)
      && !(this.prev instanceof BinaryOperator))
    text = '*' + text;
  if (this.next && !(this.next instanceof BinaryOperator)
      && !(this.next.cmd === '^'))
    text += '*';
  return text;
};

function VanillaSymbol(ch, html) {
  Symbol.call(this, ch, '<span>'+(html || ch)+'</span>');
}
VanillaSymbol.prototype = Symbol.prototype;

CharCmds[' '] = bind(VanillaSymbol, '\\:', ' ');

LatexCmds.prime = CharCmds["'"] = bind(VanillaSymbol, "'", '&prime;');

function NonSymbolaSymbol(ch, html) { //does not use Symbola font
  Symbol.call(this, ch, '<span class="nonSymbola">'+(html || ch)+'</span>');
}
NonSymbolaSymbol.prototype = Symbol.prototype;

LatexCmds['@'] = NonSymbolaSymbol;
LatexCmds['&'] = bind(NonSymbolaSymbol, '\\&', '&');
LatexCmds['%'] = bind(NonSymbolaSymbol, '\\%', '%');

//the following are all Greek to me, but this helped a lot: http://www.ams.org/STIX/ion/stixsig03.html

//lowercase Greek letter variables
LatexCmds.alpha =
LatexCmds.beta =
LatexCmds.gamma =
LatexCmds.delta =
LatexCmds.zeta =
LatexCmds.eta =
LatexCmds.theta =
LatexCmds.iota =
LatexCmds.kappa =
LatexCmds.mu =
LatexCmds.nu =
LatexCmds.xi =
LatexCmds.rho =
LatexCmds.sigma =
LatexCmds.tau =
LatexCmds.chi =
LatexCmds.psi =
LatexCmds.omega = proto(Symbol, function(replacedFragment, latex) {
  Variable.call(this,'\\'+latex+' ','&'+latex+';');
});

//why can't anybody FUCKING agree on these
LatexCmds.phi = //W3C or Unicode?
  bind(Variable,'\\phi ','&#981;');

LatexCmds.phiv = //Elsevier and 9573-13
LatexCmds.varphi = //AMS and LaTeX
  bind(Variable,'\\varphi ','&phi;');

LatexCmds.epsilon = //W3C or Unicode?
  bind(Variable,'\\epsilon ','&#1013;');

LatexCmds.epsiv = //Elsevier and 9573-13
LatexCmds.varepsilon = //AMS and LaTeX
  bind(Variable,'\\varepsilon ','&epsilon;');

LatexCmds.sigmaf = //W3C/Unicode
LatexCmds.sigmav = //Elsevier
LatexCmds.varsigma = //LaTeX
  bind(Variable,'\\varsigma ','&sigmaf;');

LatexCmds.upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.upsi = //Elsevier and 9573-13
  bind(Variable,'\\upsilon ','&upsilon;');

//these aren't even mentioned in the HTML character entity references
LatexCmds.gammad = //Elsevier
LatexCmds.Gammad = //9573-13 -- WTF, right? I dunno if this was a typo in the reference (see above)
LatexCmds.digamma = //LaTeX
  bind(Variable,'\\digamma ','&#989;');

LatexCmds.kappav = //Elsevier
LatexCmds.varkappa = //AMS and LaTeX
  bind(Variable,'\\varkappa ','&#1008;');

LatexCmds.piv = //Elsevier and 9573-13
LatexCmds.varpi = //AMS and LaTeX
  bind(Variable,'\\varpi ','&#982;');

LatexCmds.rhov = //Elsevier and 9573-13
LatexCmds.varrho = //AMS and LaTeX
  bind(Variable,'\\varrho ','&#1009;');

LatexCmds.thetav = //Elsevier and 9573-13
LatexCmds.vartheta = //AMS and LaTeX
  bind(Variable,'\\vartheta ','&#977;');

//Greek constants, look best in un-italicised Times New Roman
LatexCmds.pi = bind(NonSymbolaSymbol,'\\pi ','&pi;');
LatexCmds.lambda = bind(NonSymbolaSymbol,'\\lambda ','&lambda;');

//uppercase greek letters

LatexCmds.Upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.Upsi = //Elsevier and 9573-13
  bind(Variable,'\\Upsilon ','&Upsilon;');

LatexCmds.Gamma =
LatexCmds.Delta =
LatexCmds.Theta =
LatexCmds.Lambda =
LatexCmds.Xi =
LatexCmds.Pi =
LatexCmds.Sigma =
LatexCmds.Phi =
LatexCmds.Psi =
LatexCmds.Omega =

//other symbols with the same LaTeX command and HTML character entity reference
LatexCmds.forall = proto(Symbol, function(replacedFragment, latex) {
  VanillaSymbol.call(this,'\\'+latex+' ','&'+latex+';');
});

function BinaryOperator(cmd, html, text) {
  Symbol.call(this, cmd, '<span class="binary-operator">'+html+'</span>', text);
}
BinaryOperator.prototype = new Symbol; //so instanceof will work

function PlusMinus(cmd, html) {
  VanillaSymbol.apply(this, arguments);
}
_ = PlusMinus.prototype = new BinaryOperator; //so instanceof will work
_.respace = function() {
  if (!this.prev) {
    this.jQ[0].className = '';
  }
  else if (
    this.prev instanceof BinaryOperator &&
    this.next && !(this.next instanceof BinaryOperator)
  ) {
    this.jQ[0].className = 'unary-operator';
  }
  else {
    this.jQ[0].className = 'binary-operator';
  }
  return this;
};

LatexCmds['+'] = bind(PlusMinus, '+');
LatexCmds['-'] = bind(PlusMinus, '-', '&minus;');
LatexCmds.pm = LatexCmds.plusmn = LatexCmds.plusminus =
  bind(PlusMinus,'\\pm ','&plusmn;');
LatexCmds.mp = LatexCmds.mnplus = LatexCmds.minusplus =
  bind(PlusMinus,'\\mp ','&#8723;');

CharCmds['*'] = LatexCmds.sdot = LatexCmds.cdot =
  bind(BinaryOperator, '\\cdot ', '&middot;');
//semantically should be &sdot;, but &middot; looks better

LatexCmds['='] = bind(BinaryOperator, '=', '=');
LatexCmds['<'] = bind(BinaryOperator, '<', '&lt;');
LatexCmds['>'] = bind(BinaryOperator, '>', '&gt;');

LatexCmds.notin =
LatexCmds.sim =
LatexCmds.cong =
LatexCmds.equiv =
LatexCmds.oplus =
LatexCmds.otimes = proto(BinaryOperator, function(replacedFragment, latex) {
  BinaryOperator.call(this, '\\'+latex+' ', '&'+latex+';');
});

LatexCmds.times = proto(BinaryOperator, function(replacedFragment, latex) {
  BinaryOperator.call(this, '\\times ', '&times;', '[x]')
});

LatexCmds.div = LatexCmds.divide = LatexCmds.divides =
  bind(BinaryOperator,'\\div ','&divide;', '[/]');

LatexCmds.ne = LatexCmds.neq = bind(BinaryOperator,'\\ne ','&ne;');

LatexCmds.ast = LatexCmds.star = LatexCmds.loast = LatexCmds.lowast =
  bind(BinaryOperator,'\\ast ','&lowast;');
  //case 'there4 = // a special exception for this one, perhaps?
LatexCmds.therefor = LatexCmds.therefore =
  bind(BinaryOperator,'\\therefore ','&there4;');

LatexCmds.cuz = // l33t
LatexCmds.because = bind(BinaryOperator,'\\because ','&#8757;');

LatexCmds.prop = LatexCmds.propto = bind(BinaryOperator,'\\propto ','&prop;');

LatexCmds.asymp = LatexCmds.approx = bind(BinaryOperator,'\\approx ','&asymp;');

LatexCmds.lt = bind(BinaryOperator,'<','&lt;');

LatexCmds.gt = bind(BinaryOperator,'<','&gt;');

LatexCmds.le = LatexCmds.leq = bind(BinaryOperator,'\\le ','&le;');

LatexCmds.ge = LatexCmds.geq = bind(BinaryOperator,'\\ge ','&ge;');

LatexCmds.isin = LatexCmds['in'] = bind(BinaryOperator,'\\in ','&isin;');

LatexCmds.ni = LatexCmds.contains = bind(BinaryOperator,'\\ni ','&ni;');

LatexCmds.notni = LatexCmds.niton = LatexCmds.notcontains = LatexCmds.doesnotcontain =
  bind(BinaryOperator,'\\not\\ni ','&#8716;');

LatexCmds.sub = LatexCmds.subset = bind(BinaryOperator,'\\subset ','&sub;');

LatexCmds.sup = LatexCmds.supset = LatexCmds.superset =
  bind(BinaryOperator,'\\supset ','&sup;');

LatexCmds.nsub = LatexCmds.notsub =
LatexCmds.nsubset = LatexCmds.notsubset =
  bind(BinaryOperator,'\\not\\subset ','&#8836;');

LatexCmds.nsup = LatexCmds.notsup =
LatexCmds.nsupset = LatexCmds.notsupset =
LatexCmds.nsuperset = LatexCmds.notsuperset =
  bind(BinaryOperator,'\\not\\supset ','&#8837;');

LatexCmds.sube = LatexCmds.subeq = LatexCmds.subsete = LatexCmds.subseteq =
  bind(BinaryOperator,'\\subseteq ','&sube;');

LatexCmds.supe = LatexCmds.supeq =
LatexCmds.supsete = LatexCmds.supseteq =
LatexCmds.supersete = LatexCmds.superseteq =
  bind(BinaryOperator,'\\supseteq ','&supe;');

LatexCmds.nsube = LatexCmds.nsubeq =
LatexCmds.notsube = LatexCmds.notsubeq =
LatexCmds.nsubsete = LatexCmds.nsubseteq =
LatexCmds.notsubsete = LatexCmds.notsubseteq =
  bind(BinaryOperator,'\\not\\subseteq ','&#8840;');

LatexCmds.nsupe = LatexCmds.nsupeq =
LatexCmds.notsupe = LatexCmds.notsupeq =
LatexCmds.nsupsete = LatexCmds.nsupseteq =
LatexCmds.notsupsete = LatexCmds.notsupseteq =
LatexCmds.nsupersete = LatexCmds.nsuperseteq =
LatexCmds.notsupersete = LatexCmds.notsuperseteq =
  bind(BinaryOperator,'\\not\\supseteq ','&#8841;');


//sum, product, coproduct, integral
function BigSymbol(ch, html) {
  Symbol.call(this, ch, '<big>'+html+'</big>');
}
BigSymbol.prototype = new Symbol; //so instanceof will work

LatexCmds.sum = LatexCmds.summation = bind(BigSymbol,'\\sum ','&sum;');
LatexCmds.prod = LatexCmds.product = bind(BigSymbol,'\\prod ','&prod;');
LatexCmds.coprod = LatexCmds.coproduct = bind(BigSymbol,'\\coprod ','&#8720;');
LatexCmds.int = LatexCmds.integral = bind(BigSymbol,'\\int ','&int;');



//the canonical sets of numbers
LatexCmds.N = LatexCmds.naturals = LatexCmds.Naturals =
  bind(VanillaSymbol,'\\mathbb{N}','&#8469;');

LatexCmds.P =
LatexCmds.primes = LatexCmds.Primes =
LatexCmds.projective = LatexCmds.Projective =
LatexCmds.probability = LatexCmds.Probability =
  bind(VanillaSymbol,'\\mathbb{P}','&#8473;');

LatexCmds.Z = LatexCmds.integers = LatexCmds.Integers =
  bind(VanillaSymbol,'\\mathbb{Z}','&#8484;');

LatexCmds.Q = LatexCmds.rationals = LatexCmds.Rationals =
  bind(VanillaSymbol,'\\mathbb{Q}','&#8474;');

LatexCmds.R = LatexCmds.reals = LatexCmds.Reals =
  bind(VanillaSymbol,'\\mathbb{R}','&#8477;');

LatexCmds.C =
LatexCmds.complex = LatexCmds.Complex =
LatexCmds.complexes = LatexCmds.Complexes =
LatexCmds.complexplane = LatexCmds.Complexplane = LatexCmds.ComplexPlane =
  bind(VanillaSymbol,'\\mathbb{C}','&#8450;');

LatexCmds.H = LatexCmds.Hamiltonian = LatexCmds.quaternions = LatexCmds.Quaternions =
  bind(VanillaSymbol,'\\mathbb{H}','&#8461;');

//spacing
LatexCmds.quad = LatexCmds.emsp = bind(VanillaSymbol,'\\quad ','    ');
LatexCmds.qquad = bind(VanillaSymbol,'\\qquad ','        ');
/* spacing special characters, gonna have to implement this in LatexCommandInput.prototype.textInput somehow
case ',':
  return new VanillaSymbol('\\, ',' ');
case ':':
  return new VanillaSymbol('\\: ','  ');
case ';':
  return new VanillaSymbol('\\; ','   ');
case '!':
  return new Symbol('\\! ','<span style="margin-right:-.2em"></span>');
*/

//binary operators
LatexCmds.diamond = bind(VanillaSymbol, '\\diamond', '&#9671;');
LatexCmds.bigtriangleup = bind(VanillaSymbol, '\\bigtriangleup', '&#9651;');
LatexCmds.ominus = bind(VanillaSymbol, '\\ominus', '&#8854;');
LatexCmds.uplus = bind(VanillaSymbol, '\\uplus', '&#8846;');
LatexCmds.bigtriangledown = bind(VanillaSymbol, '\\bigtriangledown', '&#9661;');
LatexCmds.sqcap = bind(VanillaSymbol, '\\sqcap', '&#8851;');
LatexCmds.triangleleft = bind(VanillaSymbol, '\\triangleleft', '&#8882;');
LatexCmds.sqcup = bind(VanillaSymbol, '\\sqcup', '&#8852;');
LatexCmds.triangleright = bind(VanillaSymbol, '\\triangleright', '&#8883;');
LatexCmds.odot = bind(VanillaSymbol, '\\odot', '&#8857;');
LatexCmds.bigcirc = bind(VanillaSymbol, '\\bigcirc', '&#9711;');
LatexCmds.dagger = bind(VanillaSymbol, '\\dagger', '&#0134;');
LatexCmds.ddagger = bind(VanillaSymbol, '\\ddagger', '&#135;');
LatexCmds.wr = bind(VanillaSymbol, '\\wr', '&#8768;');
LatexCmds.amalg = bind(VanillaSymbol, '\\amalg', '&#8720;');

//relationship symbols
LatexCmds.models = bind(VanillaSymbol, '\\models', '&#8872;');
LatexCmds.prec = bind(VanillaSymbol, '\\prec', '&#8826;');
LatexCmds.succ = bind(VanillaSymbol, '\\succ', '&#8827;');
LatexCmds.preceq = bind(VanillaSymbol, '\\preceq', '&#8828;');
LatexCmds.succeq = bind(VanillaSymbol, '\\succeq', '&#8829;');
LatexCmds.simeq = bind(VanillaSymbol, '\\simeq', '&#8771;');
LatexCmds.mid = bind(VanillaSymbol, '\\mid', '&#8739;');
LatexCmds.ll = bind(VanillaSymbol, '\\ll', '&#8810;');
LatexCmds.gg = bind(VanillaSymbol, '\\gg', '&#8811;');
LatexCmds.parallel = bind(VanillaSymbol, '\\parallel', '&#8741;');
LatexCmds.bowtie = bind(VanillaSymbol, '\\bowtie', '&#8904;');
LatexCmds.sqsubset = bind(VanillaSymbol, '\\sqsubset', '&#8847;');
LatexCmds.sqsupset = bind(VanillaSymbol, '\\sqsupset', '&#8848;');
LatexCmds.smile = bind(VanillaSymbol, '\\smile', '&#8995;');
LatexCmds.sqsubseteq = bind(VanillaSymbol, '\\sqsubseteq', '&#8849;');
LatexCmds.sqsupseteq = bind(VanillaSymbol, '\\sqsupseteq', '&#8850;');
LatexCmds.doteq = bind(VanillaSymbol, '\\doteq', '&#8784;');
LatexCmds.frown = bind(VanillaSymbol, '\\frown', '&#8994;');
LatexCmds.vdash = bind(VanillaSymbol, '\\vdash', '&#8870;');
LatexCmds.dashv = bind(VanillaSymbol, '\\dashv', '&#8867;');

//arrows
LatexCmds.longleftarrow = bind(VanillaSymbol, '\\longleftarrow', '&#8592;');
LatexCmds.longrightarrow = bind(VanillaSymbol, '\\longrightarrow', '&#8594;');
LatexCmds.Longleftarrow = bind(VanillaSymbol, '\\Longleftarrow', '&#8656;');
LatexCmds.Longrightarrow = bind(VanillaSymbol, '\\Longrightarrow', '&#8658;');
LatexCmds.longleftrightarrow = bind(VanillaSymbol, '\\longleftrightarrow', '&#8596;');
LatexCmds.updownarrow = bind(VanillaSymbol, '\\updownarrow', '&#8597;');
LatexCmds.Longleftrightarrow = bind(VanillaSymbol, '\\Longleftrightarrow', '&#8660;');
LatexCmds.Updownarrow = bind(VanillaSymbol, '\\Updownarrow', '&#8661;');
LatexCmds.mapsto = bind(VanillaSymbol, '\\mapsto', '&#8614;');
LatexCmds.nearrow = bind(VanillaSymbol, '\\nearrow', '&#8599;');
LatexCmds.hookleftarrow = bind(VanillaSymbol, '\\hookleftarrow', '&#8617;');
LatexCmds.hookrightarrow = bind(VanillaSymbol, '\\hookrightarrow', '&#8618;');
LatexCmds.searrow = bind(VanillaSymbol, '\\searrow', '&#8600;');
LatexCmds.leftharpoonup = bind(VanillaSymbol, '\\leftharpoonup', '&#8636;');
LatexCmds.rightharpoonup = bind(VanillaSymbol, '\\rightharpoonup', '&#8640;');
LatexCmds.swarrow = bind(VanillaSymbol, '\\swarrow', '&#8601;');
LatexCmds.leftharpoondown = bind(VanillaSymbol, '\\leftharpoondown', '&#8637;');
LatexCmds.rightharpoondown = bind(VanillaSymbol, '\\rightharpoondown', '&#8641;');
LatexCmds.nwarrow = bind(VanillaSymbol, '\\nwarrow', '&#8598;');

//Misc
LatexCmds.ldots = bind(VanillaSymbol, '\\ldots', '&#8230;');
LatexCmds.cdots = bind(VanillaSymbol, '\\cdots', '&#8943;');
LatexCmds.vdots = bind(VanillaSymbol, '\\vdots', '&#8942;');
LatexCmds.ddots = bind(VanillaSymbol, '\\ddots', '&#8944;');
LatexCmds.surd = bind(VanillaSymbol, '\\surd', '&#8730;');
LatexCmds.triangle = bind(VanillaSymbol, '\\triangle', '&#9653;');
LatexCmds.ell = bind(VanillaSymbol, '\\ell', '&#8467;');
LatexCmds.top = bind(VanillaSymbol, '\\top', '&#8868;');
LatexCmds.flat = bind(VanillaSymbol, '\\flat', '&#9837;');
LatexCmds.natural = bind(VanillaSymbol, '\\natural', '&#9838;');
LatexCmds.sharp = bind(VanillaSymbol, '\\sharp', '&#9839;');
LatexCmds.wp = bind(VanillaSymbol, '\\wp', '&#8472;');
LatexCmds.bot = bind(VanillaSymbol, '\\bot', '&#8869;');
LatexCmds.clubsuit = bind(VanillaSymbol, '\\clubsuit', '&#9827;');
LatexCmds.diamondsuit = bind(VanillaSymbol, '\\diamondsuit', '&#9826;');
LatexCmds.heartsuit = bind(VanillaSymbol, '\\heartsuit', '&#9825;');
LatexCmds.spadesuit = bind(VanillaSymbol, '\\spadesuit', '&#9824;');

//variable-sized
LatexCmds.oint = bind(VanillaSymbol, '\\oint', '&#8750;');
LatexCmds.bigcap = bind(VanillaSymbol, '\\bigcap', '&#8745;');
LatexCmds.bigcup = bind(VanillaSymbol, '\\bigcup', '&#8746;');
LatexCmds.bigsqcup = bind(VanillaSymbol, '\\bigsqcup', '&#8852;');
LatexCmds.bigvee = bind(VanillaSymbol, '\\bigvee', '&#8744;');
LatexCmds.bigwedge = bind(VanillaSymbol, '\\bigwedge', '&#8743;');
LatexCmds.bigodot = bind(VanillaSymbol, '\\bigodot', '&#8857;');
LatexCmds.bigotimes = bind(VanillaSymbol, '\\bigotimes', '&#8855;');
LatexCmds.bigoplus = bind(VanillaSymbol, '\\bigoplus', '&#8853;');
LatexCmds.biguplus = bind(VanillaSymbol, '\\biguplus', '&#8846;');

//delimiters
LatexCmds.lfloor = bind(VanillaSymbol, '\\lfloor', '&#8970;');
LatexCmds.rfloor = bind(VanillaSymbol, '\\rfloor', '&#8971;');
LatexCmds.lceil = bind(VanillaSymbol, '\\lceil', '&#8968;');
LatexCmds.rceil = bind(VanillaSymbol, '\\rceil', '&#8969;');
LatexCmds.slash = bind(VanillaSymbol, '\\slash', '&#47;');
LatexCmds.opencurlybrace = bind(VanillaSymbol, '\\opencurlybrace', '&#123;');
LatexCmds.closecurlybrace = bind(VanillaSymbol, '\\closecurlybrace', '&#125;');

//various symbols

LatexCmds.caret = bind(VanillaSymbol,'\\caret ','^');
LatexCmds.underscore = bind(VanillaSymbol,'\\underscore ','_');
LatexCmds.backslash = bind(VanillaSymbol,'\\backslash ','\\');
LatexCmds.vert = bind(VanillaSymbol,'|');
LatexCmds.perp = LatexCmds.perpendicular = bind(VanillaSymbol,'\\perp ','&perp;');
LatexCmds.nabla = LatexCmds.del = bind(VanillaSymbol,'\\nabla ','&nabla;');
LatexCmds.hbar = bind(VanillaSymbol,'\\hbar ','&#8463;');

LatexCmds.AA = LatexCmds.Angstrom = LatexCmds.angstrom =
  bind(VanillaSymbol,'\\text\\AA ','&#8491;');

LatexCmds.ring = LatexCmds.circ = LatexCmds.circle =
  bind(VanillaSymbol,'\\circ ','&#8728;');

LatexCmds.bull = LatexCmds.bullet = bind(VanillaSymbol,'\\bullet ','&bull;');

LatexCmds.setminus = LatexCmds.smallsetminus =
  bind(VanillaSymbol,'\\setminus ','&#8726;');

LatexCmds.not = //bind(Symbol,'\\not ','<span class="not">/</span>');
LatexCmds.neg = bind(VanillaSymbol,'\\neg ','&not;');

LatexCmds.dots = LatexCmds.ellip = LatexCmds.hellip =
LatexCmds.ellipsis = LatexCmds.hellipsis =
  bind(VanillaSymbol,'\\dots ','&hellip;');

LatexCmds.converges =
LatexCmds.darr = LatexCmds.dnarr = LatexCmds.dnarrow = LatexCmds.downarrow =
  bind(VanillaSymbol,'\\downarrow ','&darr;');

LatexCmds.dArr = LatexCmds.dnArr = LatexCmds.dnArrow = LatexCmds.Downarrow =
  bind(VanillaSymbol,'\\Downarrow ','&dArr;');

LatexCmds.diverges = LatexCmds.uarr = LatexCmds.uparrow =
  bind(VanillaSymbol,'\\uparrow ','&uarr;');

LatexCmds.uArr = LatexCmds.Uparrow = bind(VanillaSymbol,'\\Uparrow ','&uArr;');

LatexCmds.to = bind(BinaryOperator,'\\to ','&rarr;');

LatexCmds.rarr = LatexCmds.rightarrow = bind(VanillaSymbol,'\\rightarrow ','&rarr;');

LatexCmds.implies = bind(BinaryOperator,'\\Rightarrow ','&rArr;');

LatexCmds.rArr = LatexCmds.Rightarrow = bind(VanillaSymbol,'\\Rightarrow ','&rArr;');

LatexCmds.gets = bind(BinaryOperator,'\\gets ','&larr;');

LatexCmds.larr = LatexCmds.leftarrow = bind(VanillaSymbol,'\\leftarrow ','&larr;');

LatexCmds.impliedby = bind(BinaryOperator,'\\Leftarrow ','&lArr;');

LatexCmds.lArr = LatexCmds.Leftarrow = bind(VanillaSymbol,'\\Leftarrow ','&lArr;');

LatexCmds.harr = LatexCmds.lrarr = LatexCmds.leftrightarrow =
  bind(VanillaSymbol,'\\leftrightarrow ','&harr;');

LatexCmds.iff = bind(BinaryOperator,'\\Leftrightarrow ','&hArr;');

LatexCmds.hArr = LatexCmds.lrArr = LatexCmds.Leftrightarrow =
  bind(VanillaSymbol,'\\Leftrightarrow ','&hArr;');

LatexCmds.Re = LatexCmds.Real = LatexCmds.real = bind(VanillaSymbol,'\\Re ','&real;');

LatexCmds.Im = LatexCmds.imag =
LatexCmds.image = LatexCmds.imagin = LatexCmds.imaginary = LatexCmds.Imaginary =
  bind(VanillaSymbol,'\\Im ','&image;');

LatexCmds.part = LatexCmds.partial = bind(VanillaSymbol,'\\partial ','&part;');

LatexCmds.inf = LatexCmds.infin = LatexCmds.infty = LatexCmds.infinity =
  bind(VanillaSymbol,'\\infty ','&infin;');

LatexCmds.alef = LatexCmds.alefsym = LatexCmds.aleph = LatexCmds.alephsym =
  bind(VanillaSymbol,'\\aleph ','&alefsym;');

LatexCmds.xist = //LOL
LatexCmds.xists = LatexCmds.exist = LatexCmds.exists =
  bind(VanillaSymbol,'\\exists ','&exist;');

LatexCmds.and = LatexCmds.land = LatexCmds.wedge =
  bind(VanillaSymbol,'\\wedge ','&and;');

LatexCmds.or = LatexCmds.lor = LatexCmds.vee = bind(VanillaSymbol,'\\vee ','&or;');

LatexCmds.o = LatexCmds.O =
LatexCmds.empty = LatexCmds.emptyset =
LatexCmds.oslash = LatexCmds.Oslash =
LatexCmds.nothing = LatexCmds.varnothing =
  bind(BinaryOperator,'\\varnothing ','&empty;');

LatexCmds.cup = LatexCmds.union = bind(VanillaSymbol,'\\cup ','&cup;');

LatexCmds.cap = LatexCmds.intersect = LatexCmds.intersection =
  bind(VanillaSymbol,'\\cap ','&cap;');

LatexCmds.deg = LatexCmds.degree = bind(VanillaSymbol,'^\\circ ','&deg;');

LatexCmds.ang = LatexCmds.angle = bind(VanillaSymbol,'\\angle ','&ang;');


function NonItalicizedFunction(replacedFragment, fn) {
  Symbol.call(this, '\\'+fn+' ', '<span>'+fn+'</span>');
}
_ = NonItalicizedFunction.prototype = new Symbol;
_.respace = function()
{
  this.jQ[0].className =
    (this.next instanceof SupSub || this.next instanceof Bracket) ?
    '' : 'non-italicized-function';
};

LatexCmds.ln =
LatexCmds.lg =
LatexCmds.log =
LatexCmds.span =
LatexCmds.proj =
LatexCmds.det =
LatexCmds.dim =
LatexCmds.min =
LatexCmds.max =
LatexCmds.mod =
LatexCmds.lcm =
LatexCmds.gcd =
LatexCmds.gcf =
LatexCmds.hcf =
LatexCmds.lim = NonItalicizedFunction;

(function() {
  var trig = ['sin', 'cos', 'tan', 'sec', 'cosec', 'csc', 'cotan', 'cot'];
  for (var i in trig) {
    LatexCmds[trig[i]] =
    LatexCmds[trig[i]+'h'] =
    LatexCmds['a'+trig[i]] = LatexCmds['arc'+trig[i]] =
    LatexCmds['a'+trig[i]+'h'] = LatexCmds['arc'+trig[i]+'h'] =
      NonItalicizedFunction;
  }
}());

/********************************************
 * Cursor and Selection "singleton" classes
 *******************************************/

/* The main thing that manipulates the Math DOM. Makes sure to manipulate the
HTML DOM to match. */

/* Sort of singletons, since there should only be one per editable math
textbox, but any one HTML document can contain many such textboxes, so any one
JS environment could actually contain many instances. */

//A fake cursor in the fake textbox that the math is rendered in.
function Cursor(root) {
  this.parent = this.root = root;
  var jQ = this.jQ = this._jQ = $('<span class="cursor"></span>');

  //closured for setInterval
  this.blink = function(){ jQ.toggleClass('blink'); }
}
_ = Cursor.prototype;
_.prev = 0;
_.next = 0;
_.parent = 0;
_.show = function() {
  this.jQ = this._jQ.removeClass('blink');
  if ('intervalId' in this) //already was shown, just restart interval
    clearInterval(this.intervalId);
  else { //was hidden and detached, insert this.jQ back into HTML DOM
    if (this.next) {
      if (this.selection && this.selection.prev === this.prev)
        this.jQ.insertBefore(this.selection.jQ);
      else
        this.jQ.insertBefore(this.next.jQ);
    }
    else
      this.jQ.appendTo(this.parent.jQ);
    this.parent.focus();
  }
  this.intervalId = setInterval(this.blink, 500);
  return this;
};
_.hide = function() {
  if ('intervalId' in this)
    clearInterval(this.intervalId);
  delete this.intervalId;
  this.jQ.detach();
  this.jQ = $();
  return this;
};
_.redraw = function() {
  for (var ancestor = this.parent; ancestor; ancestor = ancestor.parent)
    if (ancestor.redraw)
      ancestor.redraw();
};
_.insertAt = function(parent, next, prev) {
  var old_parent = this.parent;

  this.parent = parent;
  this.next = next;
  this.prev = prev;

  old_parent.blur(); //blur may need to know cursor's destination
};
_.insertBefore = function(el) {
  this.insertAt(el.parent, el, el.prev)
  this.parent.jQ.addClass('hasCursor');
  this.jQ.insertBefore(el.jQ.first());
  return this;
};
_.insertAfter = function(el) {
  this.insertAt(el.parent, el.next, el);
  this.parent.jQ.addClass('hasCursor');
  this.jQ.insertAfter(el.jQ.last());
  return this;
};
_.prependTo = function(el) {
  this.insertAt(el, el.firstChild, 0);
  if (el.textarea) //never insert before textarea
    this.jQ.insertAfter(el.textarea);
  else
    this.jQ.prependTo(el.jQ);
  el.focus();
  return this;
};
_.appendTo = function(el) {
  this.insertAt(el, 0, el.lastChild);
  this.jQ.appendTo(el.jQ);
  el.focus();
  return this;
};
_.hopLeft = function() {
  this.jQ.insertBefore(this.prev.jQ.first());
  this.next = this.prev;
  this.prev = this.prev.prev;
  return this;
};
_.hopRight = function() {
  this.jQ.insertAfter(this.next.jQ.last());
  this.prev = this.next;
  this.next = this.next.next;
  return this;
};
_.moveLeft = function() {
  if (this.selection)
    this.insertBefore(this.selection.prev.next || this.parent.firstChild).clearSelection();
  else {
    if (this.prev) {
      if (this.prev.lastChild)
        this.appendTo(this.prev.lastChild)
      else
        this.hopLeft();
    }
    else { //we're at the beginning of a block
      if (this.parent.prev)
        this.appendTo(this.parent.prev);
      else if (this.parent !== this.root)
        this.insertBefore(this.parent.parent);
      //else we're at the beginning of the root, so do nothing.
    }
  }
  return this.show();
};
_.moveRight = function() {
  if (this.selection)
    this.insertAfter(this.selection.next.prev || this.parent.lastChild).clearSelection();
  else {
    if (this.next) {
      if (this.next.firstChild)
        this.prependTo(this.next.firstChild)
      else
        this.hopRight();
    }
    else { //we're at the end of a block
      if (this.parent.next)
        this.prependTo(this.parent.next);
      else if (this.parent !== this.root)
        this.insertAfter(this.parent.parent);
      //else we're at the end of the root, so do nothing.
    }
  }
  return this.show();
};
_.seek = function(target, pageX, pageY) {
  var cursor = this;
  if (target.hasClass('empty')) {
    cursor.clearSelection().prependTo(target.data(jQueryDataKey).block);
    return cursor;
  }

  var data = target.data(jQueryDataKey);
  if (data) {
    //if clicked a symbol, insert at whichever side is closer
    if (data.cmd && !data.block) {
      cursor.clearSelection();
      if (target.outerWidth() > 2*(pageX - target.offset().left))
        cursor.insertBefore(data.cmd);
      else
        cursor.insertAfter(data.cmd);

      return cursor;
    }
  }
  //if no MathQuill data, try parent, if still no, forget it
  else {
    target = target.parent();
    data = target.data(jQueryDataKey);
    if (!data)
      data = {block: cursor.root};
  }

  cursor.clearSelection();
  if (data.cmd)
    cursor.insertAfter(data.cmd);
  else
    cursor.appendTo(data.block);

  //move cursor to position closest to click
  var dist = cursor.jQ.offset().left - pageX, prevDist;
  do {
    cursor.moveLeft();
    prevDist = dist;
    dist = cursor.jQ.offset().left - pageX;
  }
  while (dist > 0 && (cursor.prev || cursor.parent !== cursor.root));

  if (-dist > prevDist)
    cursor.moveRight();

  return cursor;
};
_.writeLatex = function(latex) {
  this.deleteSelection();
  latex = ( latex && latex.match(/\\text\{([^{]|\\\{)*\}|\\[a-z]*|[^\s]/ig) ) || 0;
  (function writeLatexBlock(cursor) {
    while (latex.length) {
      var token = latex.shift(); //pop first item
      if (!token || token === '}') return;

      var cmd;
      if (token.slice(0, 6) === '\\text{') {
        cmd = new TextBlock(token.slice(7, -1));
        cursor.insertNew(cmd).insertAfter(cmd);
        continue; //skip recursing through children
      }
      else if (token === '\\left' || token === '\\right') { //REMOVEME HACK for parens
        token = latex.shift();
        if (token === '\\')
          token = latex.shift();

        cursor.insertCh(token);
        cmd = cursor.prev || cursor.parent.parent;

        if (cursor.prev) //was a close-paren, so break recursion
          return;
        else //was an open-paren, hack to put the following latex
          latex.unshift('{'); //in the ParenBlock in the math DOM
      }
      else if (/^\\[a-z]+$/i.test(token)) {
        token = token.slice(1);
        var cmd = LatexCmds[token];
        if (cmd)
          cursor.insertNew(cmd = new cmd(undefined, token));
        else {
          cmd = new TextBlock(token);
          cursor.insertNew(cmd).insertAfter(cmd);
          continue; //skip recursing through children
        }
      }
      else {
        if (token.match(/[a-eg-zA-Z]/)) //exclude f because want florin
          cmd = new Variable(token);
        else if (cmd = LatexCmds[token])
          cmd = new cmd;
        else
          cmd = new VanillaSymbol(token);

        cursor.insertNew(cmd);
      }
      cmd.eachChild(function(child) {
        cursor.appendTo(child);
        var token = latex.shift();
        if (!token) return false;

        if (token === '{')
          writeLatexBlock(cursor);
        else
          cursor.insertCh(token);
      });
      cursor.insertAfter(cmd);
    }
  }(this));
  return this.hide();
};
_.write = function(ch) {
  return this.show().insertCh(ch);
};
_.insertCh = function(ch) {
  if (this.selection) {
    //gotta do this before this.selection is mutated by 'new cmd(this.selection)'
    this.prev = this.selection.prev;
    this.next = this.selection.next;
  }

  var cmd;
  if (ch.match(/^[a-eg-zA-Z]$/)) //exclude f because want florin
    cmd = new Variable(ch);
  else if (cmd = CharCmds[ch] || LatexCmds[ch])
    cmd = new cmd(this.selection, ch);
  else
    cmd = new VanillaSymbol(ch);

  if (this.selection) {
    if (cmd instanceof Symbol)
      this.selection.remove();
    delete this.selection;
  }

  return this.insertNew(cmd);
};
_.insertNew = function(cmd) {
  cmd.parent = this.parent;
  cmd.next = this.next;
  cmd.prev = this.prev;

  if (this.prev)
    this.prev.next = cmd;
  else
    this.parent.firstChild = cmd;

  if (this.next)
    this.next.prev = cmd;
  else
    this.parent.lastChild = cmd;

  cmd.jQ.insertBefore(this.jQ);

  //adjust context-sensitive spacing
  cmd.respace();
  if (this.next)
    this.next.respace();
  if (this.prev)
    this.prev.respace();

  this.prev = cmd;

  cmd.placeCursor(this);

  this.redraw();

  return this;
};
_.unwrapGramp = function() {
  var gramp = this.parent.parent,
    greatgramp = gramp.parent,
    prev = gramp.prev,
    cursor = this;

  gramp.eachChild(function(uncle) {
    if (uncle.isEmpty()) return;

    uncle.eachChild(function(cousin) {
      cousin.parent = greatgramp;
      cousin.jQ.insertBefore(gramp.jQ);
    });
    uncle.firstChild.prev = prev;
    if (prev)
      prev.next = uncle.firstChild;
    else
      greatgramp.firstChild = uncle.firstChild;

    prev = uncle.lastChild;
  });
  prev.next = gramp.next;
  if (gramp.next)
    gramp.next.prev = prev;
  else
    greatgramp.lastChild = prev;

  if (!this.next) { //then find something to be next to insertBefore
    if (this.prev)
      this.next = this.prev.next;
    else {
      while (!this.next) {
        this.parent = this.parent.next;
        if (this.parent)
          this.next = this.parent.firstChild;
        else {
          this.next = gramp.next;
          this.parent = greatgramp;
          break;
        }
      }
    }
  }
  if (this.next)
    this.insertBefore(this.next);
  else
    this.appendTo(greatgramp);

  gramp.jQ.remove();

  if (gramp.prev)
    gramp.prev.respace();
  if (gramp.next)
    gramp.next.respace();
};
_.backspace = function() {
  if (this.deleteSelection());
  else if (this.prev) {
    if (this.prev.isEmpty())
      this.prev = this.prev.remove().prev;
    else
      this.selectLeft();
  }
  else if (this.parent !== this.root) {
    if (this.parent.parent.isEmpty())
      return this.insertAfter(this.parent.parent).backspace();
    else
      this.unwrapGramp();
  }

  if (this.prev)
    this.prev.respace();
  if (this.next)
    this.next.respace();
  this.redraw();

  return this;
};
_.deleteForward = function() {
  if (this.deleteSelection());
  else if (this.next) {
    if (this.next.isEmpty())
      this.next = this.next.remove().next;
    else
      this.selectRight();
  }
  else if (this.parent !== this.root) {
    if (this.parent.parent.isEmpty())
      return this.insertBefore(this.parent.parent).deleteForward();
    else
      this.unwrapGramp();
  }

  if (this.prev)
    this.prev.respace();
  if (this.next)
    this.next.respace();
  this.redraw();

  return this;
};
_.selectFrom = function(anticursor) {
  //find ancestors of each with common parent
  var oneA = this, otherA = anticursor; //one ancestor, the other ancestor
  loopThroughAncestors: while (true) {
    for (var oneI = this; oneI !== oneA.parent.parent; oneI = oneI.parent.parent) //one intermediate, the other intermediate
      if (oneI.parent === otherA.parent) {
        left = oneI;
        right = otherA;
        break loopThroughAncestors;
      }

    for (var otherI = anticursor; otherI !== otherA.parent.parent; otherI = otherI.parent.parent)
      if (oneA.parent === otherI.parent) {
        left = oneA;
        right = otherI;
        break loopThroughAncestors;
      }

    if (oneA.parent.parent)
      oneA = oneA.parent.parent;
    if (otherA.parent.parent)
      otherA = otherA.parent.parent;
  }
  //figure out which is left/prev and which is right/next
  var left, right, leftRight;
  if (left.next !== right) {
    for (var next = left; next; next = next.next) {
      if (next === right.prev) {
        leftRight = true;
        break;
      }
    }
    if (!leftRight) {
      leftRight = right;
      right = left;
      left = leftRight;
    }
  }
  this.hide().selection = new Selection(
    left.parent,
    left.prev,
    right.next
  );
  this.insertAfter(right.next.prev || right.parent.lastChild);
};
_.selectLeft = function() {
  if (this.selection) {
    if (this.selection.prev === this.prev) { //if cursor is at left edge of selection;
      if (this.prev) { //then extend left if possible
        this.hopLeft().next.jQ.prependTo(this.selection.jQ);
        this.selection.prev = this.prev;
      }
      else if (this.parent !== this.root) //else level up if possible
        this.insertBefore(this.parent.parent).selection.levelUp();
    }
    else { //else cursor is at right edge of selection, retract left
      this.prev.jQ.insertAfter(this.selection.jQ);
      this.hopLeft().selection.next = this.next;
      if (this.selection.prev === this.prev)
        this.deleteSelection();
    }
  }
  else {
    if (this.prev)
      this.hopLeft();
    else //end of a block
      if (this.parent !== this.root)
        this.insertBefore(this.parent.parent);

    this.hide().selection = new Selection(this.parent, this.prev, this.next.next);
  }
};
_.selectRight = function() {
  if (this.selection) {
    if (this.selection.next === this.next) { //if cursor is at right edge of selection;
      if (this.next) { //then extend right if possible
        this.hopRight().prev.jQ.appendTo(this.selection.jQ);
        this.selection.next = this.next;
      }
      else if (this.parent !== this.root) //else level up if possible
        this.insertAfter(this.parent.parent).selection.levelUp();
    }
    else { //else cursor is at left edge of selection, retract right
      this.next.jQ.insertBefore(this.selection.jQ);
      this.hopRight().selection.prev = this.prev;
      if (this.selection.next === this.next)
        this.deleteSelection();
    }
  }
  else {
    if (this.next)
      this.hopRight();
    else //end of a block
      if (this.parent !== this.root)
        this.insertAfter(this.parent.parent);

    this.hide().selection = new Selection(this.parent, this.prev.prev, this.next);
  }
};
_.clearSelection = function() {
  if (this.show().selection) {
    this.selection.clear();
    delete this.selection;
  }
  return this;
};
_.deleteSelection = function() {
  if (!this.show().selection) return false;

  this.prev = this.selection.prev;
  this.next = this.selection.next;
  this.selection.remove();
  delete this.selection;
  return true;
};

function Selection(parent, prev, next) {
  MathFragment.apply(this, arguments);
}
_ = Selection.prototype = new MathFragment;
_.jQinit= function(children) {
  this.jQ = children.wrapAll('<span class="selection"></span>').parent();
    //can't do wrapAll(this.jQ = $(...)) because wrapAll will clone it
};
_.levelUp = function() {
  this.clear().jQinit(this.parent.parent.jQ);

  this.prev = this.parent.parent.prev;
  this.next = this.parent.parent.next;
  this.parent = this.parent.parent.parent;

  return this;
};
_.clear = function() {
  this.jQ.replaceWith(this.jQ.children());
  return this;
};
_.blockify = function() {
  this.jQ.replaceWith(this.jQ = this.jQ.children());
  return MathFragment.prototype.blockify.call(this);
};
_.detach = function() {
  var block = MathFragment.prototype.blockify.call(this);
  this.blockify = function() {
    this.jQ.replaceWith(block.jQ = this.jQ = this.jQ.children());
    return block;
  };
  return this;
};

/*********************************************************
 * The actual jQuery plugin and document ready handlers.
 ********************************************************/

//The publicy exposed method of jQuery.prototype, available (and meant to be
//called) on jQuery-wrapped HTML DOM elements.
$.fn.mathquill = function(cmd, latex) {
  switch (cmd) {
  case 'redraw':
    this.find(':not(:has(:first))')
      .data(jQueryDataKey).cmd.redraw();
    return this;
  case 'revert':
    return this.each(function() {
      var data = $(this).data(jQueryDataKey);
      if (data && data.revert)
        data.revert();
    });
  case 'latex':
    if (arguments.length > 1) {
      return this.each(function() {
        var data = $(this).data(jQueryDataKey);
        if (data && data.block && data.block.renderLatex)
          data.block.renderLatex(latex);
      });
    }

    var data = this.data(jQueryDataKey);
    return data && data.block && data.block.latex();
  case 'text':
    var data = this.data(jQueryDataKey);
    return data && data.block && data.block.text();
  case 'html':
    return this.html().replace(/<span class="?cursor( blink)?"?><\/span>/i, '')
      .replace(/<span class="?textarea"?><textarea><\/textarea><\/span>/i, '');
  case 'write':
    if (arguments.length > 1)
      return this.each(function() {
        var data = $(this).data(jQueryDataKey),
          block = data && data.block,
          cursor = block && block.cursor;

        if (cursor) {
          cursor.writeLatex(latex);
          block.blur();
        }
      });
  default:
    var textbox = cmd === 'textbox',
      editable = textbox || cmd === 'editable',
      RootBlock = textbox ? RootTextBlock : RootMathBlock;
    return this.each(function() {
      createRoot($(this), new RootBlock, textbox, editable);
    });
  }
};

/*
//on document ready, mathquill-ify all `<tag class="mathquill-*">latex</tag>`
//elements according to their CSS class.
$(function() {
  $('.mathquill-editable').mathquill('editable');
  $('.mathquill-textbox').mathquill('textbox');
  $('.mathquill-embedded-latex').mathquill();
});
*/

}(jQuery));/*


    http://graph.tk/
    
    graph.tk[/at/ ]gmail[ /dot/ ]com
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
    
    
Todo: use a function object array instead of just an array/object model.
Todo: Improve CAS model
Notes: addition/summation and multiplication should be considered an operation that takes 0 or more aguments.
There is no division. 

Subtractional shall be dreplaced with unary negation.
Divion should be dreplaced with multiplication by the reciprocal.
    i.e. x/y = x*y^(-1) , or prod{[x,pow{[y,-1]}]}
 - should it?



TODO: -frac does not work.
    */
var MessageStrings={
    "failinit":"Could not initalize",
    "protected":"Read-Only variable",
    "nonconstantconstant":"Expression not constant",
    "parentheses":"Could not parse parentheses",
    "functionchain":"Function composition is a binary operator",
    "expchain":"^ is a binary operator.",
    "nonvector":"Vector operation attempted on non-vector",
    "unknownderivative":"The derivative of %s is not known",
    "intfail":"Integration failed",
    "inversefail":"Could not find inverse",
    "lonedoperator":"Differential operator alone",
    "loneioperator":"Integral operator alone",
    "fnnamenotstring":"Invalid function name"
    
};
Number.prototype.format=function(digits) {
    var num=Number(this);
    e = Math.E;
    pi = Math.PI;
    if (!num) {
        return "0";
    } else if (num == pi) {
        return "π";
    } else if (num == e) {
        return "e";
    } else if (num % (pi / 4) == 0) {
        return (num / pi) + "π";
    } else if (num % (1 / 3) == 0) {
        return (num * 3) + "/3";
    } else if (num % (e / 4) == 0) {
        return (num / e) + "e";
    } else if(num!=1){
        if (( log(num)   )%1 == 0) {
            var exponent=log(num);
            var exptext="⁰¹²³⁴⁵⁶⁷⁸⁹";
            return "e"+((abs(exponent)<10)?((exponent<0?"⁻":"")+exptext[abs(exponent)]):"^"+exponent);
        }
    }
    if (digits === undefined) {
        return num.toString()
    }
    if (num.toPrecision) {
        if (Math.abs(num) < 0.0000001) {
            return "0.0000000";
        }
        return num.toPrecision(digits);
    }
    return num;
};


function random_hash(){
    var s="";
    for(var i=0;i<20;i++){
        s+=(10+~~(Math.random()*23)).toString(36)
        //s+=(~~(Math.random()*16)).toString(16);
    }
    return s;
}


var c = 299792458;
var G = 6.67300e-11;
var m_e = 5.9742e24;
var m_m = 7.36e22;
var m_s = 1.98892e30;
var R_E = 6378100;
var r_e = 6378100;
var h = 6.626068e-34;
var log2pi = 1.8378770664093453;


var e = Math.E;
var pi = Math.PI;
var phi = (1 + Math.sqrt(5)) / 2;
var epsilon_0 = 8.85418782e-12;

var en = ["Massless void", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "aluminium", "Silicon", "Phosphorus", "Sulphur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirkonium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Hydrargyrum", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Ununnilium", "Unununium"];
var M = [0.0, 1.00794, 4.002602, 6.941, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9994, 20.1797, 22.98976928, 24.305, 26.9815386, 28.0855, 30.973762, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938045, 55.845, 58.933195, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.90585, 91.224, 92.90638, 95.96, 98, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.9054519, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145, 150.36, 151.964, 157.25, 158.92535, 162.5001, 164.93032, 167.259, 168.93421, 173.054, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 192.084, 196.966569, 200.59, 204.3833, 207.2, 208.980401, 210, 210, 220, 223, 226, 227, 232.03806, 231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 261, 262, 266, 264, 277, 268, 271, 272];
var symbol = ["Zero", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Te", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg"];


//Make the periodic table global
for (var index = 0; index < symbol.length; index++) {
    window[symbol[index]] = M[index];
}


//Basic math functions -> window (global)

var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var tg = Math.tan;
var exp = Math.exp;
var log = Math.log;
var ln = Math.log;
var abs = Math.abs;
var acos = Math.acos;
var asin = Math.asin;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var floor = Math.floor;
var max = Math.max;
var min = Math.min;
var random = Math.random;
var round = Math.round;
var sqrt = Math.sqrt;
var pow = Math.pow;


//sin^n (x)
function sin_n(n,x){return pow(sin(x),n);}
function cos_n(n,x){return pow(cos(x),n);}
function tan_n(n,x){return pow(tan(x),n);}
function cot_n(n,x){return pow(cot(x),n);}
function sec_n(n,x){return pow(sec(x),n);}
function csc_n(n,x){return pow(csc(x),n);}
function log_n(n,x){return pow(log(x),n);}
function ln_n(n,x){return pow(ln(x),n);}

function logb(b, v) {
    return ln(v) / ln(b);
}

function u(x) {
    //unit step function
    return (x>=0)?(x?1:0.5):(0);
}
function delta(x){
    if(x==0){
        return Infinity;
    }
    return 0;
}

function signum(x){
    return 2*u(x)-1;
}

function piecewise(cond, val, other) {
    if (cond) {
        return val;
    }
    return other;
}
function sinc(x) {
    if (x === 0) {
        return 1;
    }
    return sin(pi * x) / (pi * x);
}
function sec(x){return 1 / (cos(x));}
function csc(x){return 1 / (sin(x));}
function cot(x){return 1 / (tan(x));}
var ctg = cot;
var ctn = cot;
var cosec=csc;

//Not so basic math

//Bell numbers
var blln = [1,1,2,5,15,52,203,877,4140,21147,115975,678570,4213597,27644437,190899322,1382958545,10480142147,82864869804,682076806159,5832742205057,51724158235372,474869816156751,4506715738447323];

//Riemann zeta function
function zeta(x) {
    if (x === 0) {
        return -0.5;
    } else if (x == 1) {
        return Infinity;
    } else if (x == 2) {
        return pi * pi / 6;
    } else if (x == 4) {
        return pi * pi * pi * pi / 90;
    } else if (x < 1) {
        return Infinity;
    }
    var sum = 4.4 * pow(x, -5.1);
    for (var npw = 1; npw < 10; npw++) {
        sum += pow(npw, -x);
    }
    return sum;
}

function gammln(xx) {
    var j;
    var x,tmp,y,ser;
    var cof=[57.1562356658629235,-59.5979603554754912,14.1360979747417471,-0.491913816097620199,0.339946499848118887e-4,0.465236289270485756e-4,-0.983744753048795646e-4,0.158088703224912494e-3,-0.210264441724104883e-3,0.217439618115212643e-3,-0.164318106536763890e-3,0.844182239838527433e-4,-0.261908384015814087e-4,0.368991826595316234e-5];
    if (xx <= 0){
        throw("bad arg in gammln");
    }
    y=x=xx;
    tmp = x+5.24218750000000000;
    tmp = (x+0.5)*log(tmp)-tmp;
    ser = 0.999999999999997092;
    for (j=0;j<14;j++){
        ser += cof[j]/++y;
    }
    return tmp+log(2.5066282746310005*ser/x);
}
function Gamma(x){
    if(x==0){
        return Infinity;
    }
    if(x<0){
        return -pi/(x*sin(pi*x)*Gamma(-x));
    }
    return exp(gammln(x));
}

function old_gamma_function(x) {
    if (x > 1.0) {
        return (exp(x * (ln(x) - 1) + 0.5 * (-ln(x) + log2pi) + 1 / (12 * x) - 1 / (360 * (x * x * x)) + 1 / (1260 * pow(x, 5)) - 1 / (1680 * pow(x, 7))));
    }
    if (x > -0.5) {
        return (1.0 + 0.150917639897307 * x + 0.24425221666910216 * pow(x, 2)) / (x + 0.7281333047988399 * pow(x, 2) - 0.3245138289924575 * pow(x, 3));
    }
    if (x < 0) {
        if (x == ~~x) {
            return;
        } else {
            return Math.PI / (Math.sin(Math.PI * x) * Gamma((1 - x)));
        }
    } else {
        return pow(x - 1, x - 1) * Math.sqrt(2 * Math.PI * (x - 1)) * exp(1 - x + 1 / (12 * (x - 1) + 2 / (5 * (x - 1) + 53 / (42 * (x - 1)))));
    }
}

function psi(x) {
    return random();
}

function fact(ff) {
    if (ff === 0 || ff == 1) {
        return 1;
    } else if (ff > 0 && ff == ~~ff && ff < 15) {
        var s = 1;
        for (var nns = 1; nns <= ff; nns++) {
            s *= nns;
        }
        return~~s;
    } else if (ff != (~~ff) || ff < 0) {
        return Gamma(ff + 1);
    }
}
function doublefact(x){
    return pow(2,(x/2-1/4*cos(pi*x)+1/4))*pow(pi,(1/4*cos(pi*x)-1/4))*Gamma(x/2+1);
}
function bellb(x) {
    if (x == ~~x && x < blln.length) {
        return blln[x];
    } else {
        var sum = 0;
        for (var inj = 0; inj < 5; inj++) {
            sum += pow(inj, x) / fact(inj);
        }
        return sum / e;
    }
}



// 'lvl'th derivative of g[ia](x) when x = 'x'

var difflevel = 0; //Used to prevent massive stacks in the recursive djkb()

function djkb(ia, lvl, x) {
    difflevel++;
    var res;
    if (difflevel > 8) {
        difflevel -= 1;
        return 0;
    }
    var h = 0.0001;
    if (lvl > 0) {
        res = (djkb(ia, lvl - 1, x + h) - djkb(ia, lvl - 1, x - h)) / (2 * h);
        difflevel -= 1;
        return res;
    }
    res = g[ia](x);
    difflevel -= 1;
    return res;
}












var latexchars={
'gt':">",
"left|":"abs:(",
"right|":")",
"sin":"sin:",
"cos":"cos:",
"tan":"tan:",
"times":"*",
"sec":"sec:",
"cosec":"cosec:",
"csc":"csc:",
"cotan":"cotan:",
"cot":"cot:",
"ln":"ln:",
"lg":"log:",
"log":"log:",
"det":"det:",
"dim":"dim:",
"max":"max:",
"min":"min:",
"mod":"mod:",
"lcm":"lcm:",
"gcd":"gcd:",
"gcf":"gcf:",
"hcf":"hcf:",
"lim":"lim:",
":":"",
"left(":"(",
"right)":")",
"left[":"[",
"right]":"]",
'ge':">=",
'lt':"<",
'le':"<=",
"infty":"∞",
"cdot":"*",
"text":"",
"frac":"",
"backslash":"\\",
"alpha":"α",
"beta":"β",
'gamma':"γ",
'delta':"δ",
'zeta':"ζ",
'eta':"η",
'theta':"θ",
'iota':"ι",
'kappa':"κ",
'mu':"μ",
'nu':"ν",
'xi':"ξ",
'omicron':"ο",
'rho':"ρ",
'sigma':"σ",
'tau':"τ",
'upsilon':"υ",
'chi':"χ",
'psi':"ψ",
'omega':"ω",
'phi':"ϕ",
"phiv":"φ",
"varphi":"φ",
"epsilon":"ϵ",
"epsiv":"ε",
"varepsilon":"ε",
"sigmaf":"ς",
"sigmav":"ς",
"gammad":"ϝ",
"Gammad":"ϝ",
"digamma":"ϝ",
"kappav":"ϰ",
"varkappa":"ϰ",
"piv":"ϖ",
"varpi":"ϖ",
"pm":"±",
"rhov":"ϱ",
"varrho":"ϱ",
"thetav":"ϑ",
"vartheta":"ϑ",
"pi":"π",
"lambda":"λ",
'Gamma':"Γ",
'Delta':"Δ",
'Theta':"Θ",
'Lambda':"Λ",
'Xi':"Ξ",
'Pi':"Π",
'Sigma':"Σ",
'Upsilon':"Υ",
'Phi':"Φ",
'Psi':"Ψ",
'Omega':"Ω",
"perp":"⊥",
",":" ",
"nabla":"∇",
"forall":"∀",
"sum":"∑",
"summation":"∑",
"prod":"∏",
"product":"∏",
"coprod":"∐",
"coproduct":"∐",
"int":"∫",
"integral":"∫"
};

var obj={};
//TODO: Maybe discretevector should be removed and assumed that all un .type'ed arrays are a discretevector by default.
var eqtype={"product":1,"sum":2,"number":3,"discretevector":6,"continuousvector":7,"power":8,"fn":9,"fraction":10,"derivative":11,"integral":12,"equality":13,"pm":14,"operatorfactor":15};
var __debug_parser=0;
var __debug_mode=0;
function __debug(x,y){
    if(__debug_mode){
        return x;
    }
    return y;
}
var spaces="                     ";
var level=0;
function p(inp){
    if(typeof inp=="number" || !isNaN(inp)){
        return Number(inp);
    }else if(typeof inp=="object"){
        if(!isNaN(inp)){
            app.ui.console.warn("this is returned somewhere instead of Number(this)");
            return Number(inp);
        }
        return inp;
    }
    if(inp=="" || inp===undefined){
        return 0;
    }
//parses brackets recursively and returns an expression
    
    //level++;
    //if(level>15){throw("too recursive for debugging");return;}
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"p: "+inp);
	var eq=[];
	var e=inp.replace(/\s/g,"").replace(/\]/g,")").replace(/\[/g,"(").replace(/\)\(/g,")*(");
    
    //TODO: known functions only, otherwise make it a product
    //TODO: allow things like 2x
    
    while(e.indexOf("xx")!=-1){
        e=e.replace(/xx/g,"x*x");
    }
    
    //TODO: -- -> +
    e=e.replace(/∞/g,"Infinity");
    e=e.replace(/\.([^\d]|$)/g,"*$1");
    e=e.replace(/([\d]+(\.[\d]+)?)([^\+\-\*\/\^\:\(\)\d\=\.!])/g,"$1*$3");
    
    //TODO: Following line is a bit hacky. Specifications need be made to clear things up.
    e=e.replace(/([xyzπϕ])([exyzπϕ])/g,"$1*$2");

	e=e.replace(/\^([\d]+)\(/g,"^$1:(");
    e=e.replace(/([xyzπϕ\d∫])\(/g,"$1*(");
    
    e=e.replace(/∫([^\*])/g,"∫*$1");
    e=e.replace(/([xyzπϕ\d\.])∫/g,"$1*∫");
	e=e.replace(/([^\+\-\*\/\^\:\(\)\d\=])\(/g,"$1:(");
    
	e=e.replace(/\)([^\+\-\*\/\^\:\(\)\=!])/g,")*$1");
    //multiplicative identity
    e=e.replace(/\*([\)\=]|$)/g,"$1");
    //Double factorial
    e=e.replace(/!!/g,"‼");
    if(e.indexOf("=")!=-1){
        var eq=e.replace("==","[equals][equals]").split("=").map(function(e){return e.replace("[equals][equals]","==");});
        if(eq.length==2){
            return [p(eq[0]),p(eq[1])].setType(eqtype.equality);
        }
        throw("Too many '='s");
        return;
    }
    //---Recursive Parentheses parse
	while((e.indexOf("(")!=-1) && (e.indexOf(")")!=-1)){
        var fail=true;
		e=e.replace(/\([^\(\)]*\)/g,function(n){
            fail=false;
			var h=random_hash();
			obj[h]=p(n.substring(1,n.length-1));
			return "aaaa"+h+"aaaa";
		});
        if(fail){
            throw (MessageStrings.parentheses);
            break;
        }
	}
	var terms=[];
	var last=0;
    //---Sum parse
    var term_op="+-";
    var prod_op="*/";
    
    if(e.indexOf(",")!=-1){
        //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"f>: "+e);
        terms.type=eqtype.discretevector;
        var be=e.split(",");
        be.forEach(function(zz){
            terms.push(p(zz));
        });
    
    }else if((e.indexOf("+")!=-1) || (e.indexOf("-")!=-1)){
    //__debug(!__debug_parser,0) ||app.ui.console.log(spaces.substring(0,level)+"+>: "+e);
        terms.type=eqtype.sum;
        var nextisinverse=false;
        for(var i=0;i<e.length;i++){
            if(term_op.indexOf(e[i])!=-1){
                var s=e.substring(last,i);
                if(nextisinverse){
                    terms.push(p(s).multiply(-1));
                    nextisinverse=false;
                }else{
                    terms.push(p(s));
                }
                if(e[i]=="-"){
                    nextisinverse=true;
                }
                last=i+1;
            }
        }
        if(nextisinverse){
            terms.push(p(e.substring(last,e.length)).multiply(-1));
        }else{
            terms.push(p(e.substring(last,e.length)));
        }
        
        
    }else if((e.indexOf("*")!=-1) || (e.indexOf("/")!=-1)){
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"*>: "+e);
        terms.type=eqtype.product;
        var denom=[];
        denom.type=eqtype.product;
        var nextisinverse=false;
        //check for d/dx
        for(var i=0;i<e.length;i++){
            if(prod_op.indexOf(e[i])!=-1){
                var s=e.substring(last,i);
                if(nextisinverse){
                    denom.push(p(s));
                    nextisinverse=false;
                }else{
                    terms.push(p(s));
                }
                if(e[i]=="/"){
                    nextisinverse=true;
                }
                last=i+1;
            }
        }
        if(nextisinverse){
            denom.push(p(e.substring(last,e.length)));
        }else{
            terms.push(p(e.substring(last,e.length)));
        }
        if(denom.length){
            terms=[terms,denom];
            terms.type=eqtype.fraction;
        }
    }else if(e.indexOf("!")!=-1){
    
        //TODO: Fix this
        //DONE: This was fixed March 16, 2011
        terms.type=eqtype.product;
        var last=0;
        for(var i=0;i<e.length;i++){
            if(e[i]=="!"){
                var s=e.substring(last,i);
                if(s==""){
                    terms[terms.length-1]=["fact",terms[terms.length-1]].setType(eqtype.fn);
                }else{
                    terms.push(["fact",p(s)].setType(eqtype.fn));
                }
                last=i+1;
            }
        }
        var final=e.substring(last,e.length);
        if(final!=""){
            terms.push(p(final));
        }
     
    }else if(e.indexOf("‼")!=-1){
    
        //TODO: Fix this
        //DONE: This was fixed March 16, 2011
        terms.type=eqtype.product;
        var last=0;
        for(var i=0;i<e.length;i++){
            if(e[i]=="‼"){
                var s=e.substring(last,i);
                if(s==""){
                    terms[terms.length-1]=["doublefact",terms[terms.length-1]].setType(eqtype.fn);
                }else{
                    terms.push(["doublefact",p(s)].setType(eqtype.fn));
                }
                last=i+1;
            }
        }
        var final=e.substring(last,e.length);
        if(final!=""){
            terms.push(p(final));
        }
     
    }else if(e.indexOf(":")!=-1){
     //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"f>: "+e);
        terms.type=eqtype.fn;
        var be=e.split(":");
        if(be.length!=2){  
            
            //alert(e);
            throw (MessageStrings.functionchain);
            //return;
        }
        var dmatch=/^([^\']+)(\'+)$/.exec(be[0]);
        if(dmatch){
            //console.log("found");
            terms.type=eqtype.fn;
            var b=[dmatch[1],be[1]].setType(eqtype.fn);
            for(var count=dmatch[2].length;count--;count>0){
                //console.log("diff");
                b=["diff",b].setType(eqtype.fn);
            }
            terms=b;
            
        }else{
            var match=/^log_([\d\.\+\-e]+)$/(be[0]);
            if(match){
                var fn_=["log",p(be[1])].setType(eqtype.fn);
                terms.type=eqtype.fraction;
                terms.push(fn_);
                terms.push(["log", p(match[1])].setType(eqtype.fn));
            }else{
                var fname=p(be[0]);
                if(fname.type==eqtype.power){
                    var basefn=fname[0].simplify();
                    var power=fname[1].simplify();
                    //if trig
                    if(power<0){
                        //find inverse
                        basefn="a"+basefn;
                        power=-power;
                    }
                    
                    if( 1 || is_it_a_trig_function){
                        terms.type=eqtype.power;
                        terms.push([basefn,p(be[1])].setType(eqtype.fn));
                        terms.push(power);
                    }
                    
                    
                    
                    
                }else if(typeof fname!="string"){
                    terms.type=eqtype.product;
                    terms.push(fname);
                    terms.push(p(be[1]));
                }else{
                    terms.push(fname);
                    terms.push(p(be[1]));
                }
            }
        }
    }else if(e.indexOf("^")!=-1){
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"^>: "+e);
        
        var be=e.split("^");
        //NOTE: for now
        //^ is a BINARY operator that goes from right to left.
        //  1^2^3 = 1^(2^(3))
        if(be.length!=2){
            throw (messages.expchain);
            return;
        }
        var base=p(be[0]);
        terms.type=eqtype.power;
        terms.push(base);
        terms.push(p(be[1]));
        
       
    }else{
        var parsednumber=NaN;
        if(!isNaN(parsednumber=Number(e))){
            return parsednumber;
        }else if(!/^aaaa[a-z\d]{20}aaaa$/.test(e)){
            var match=/^([\d]+(\.[\d])?)([^\d]+)$/.exec(e);
            if(match){
                alert("old code: "+e);
                terms.type=eqtype.product;
                terms.push(p(match[1]));
                terms.push(match[3]);
            }else{
                var vars=e.split(".");
                if(vars.length>1){
                    terms.type=eqtype.product;
                    vars.forEach(function(v){
                        terms.push(p(v));
                    });
                }else{
                    return e;
                }
            }
        }else{
            terms.type=eqtype.variable;
            terms.push(e);
        }
        
    
    }
    
    terms=terms.dreplace(/^aaaa[a-z\d]{20}aaaa$/,function(e){
        var to_ret=obj[e.substring(4,24)];
        delete obj[e.substring(4,24)];
        return to_ret;
    });
    /*
	for(var i=0;i<terms.length;i++){
		if(/^aaaa[a-z\d]{20}aaaa$/.test(terms[i])){
			terms[i]=obj[terms[i].substring(4,24)];
			//terms[i]="e";
		}
	}*/
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"@>: "+JSON.stringify(terms));
    level--;
    while(typeof terms == "object" && terms.type==eqtype.variable){
        terms=terms[0];
    }
    if(terms.length==2){
        
        //terms=terms.simplify();
        if(terms.length==2 && terms.type==eqtype.fraction && terms[0].simplify()=="d" && terms[1].simplify()=="dx"){
            return ["diff"].setType(eqtype.operatorfactor);
        }
        /*if(terms.length==2 && terms.type==eqtype.fraction && terms[0]=="d" && terms[1]=="dx"){
            return ["diff"].setType(eqtype.operatorfactor);
        }*/
        if(terms[0].length==1 && terms[0]=="d" && terms[1].length==1 && terms[1]=="dx"){
            return ["diff"].setType(eqtype.operatorfactor);
        }
    }
    //console.log(terms.type+": "+terms.getString());
    if(terms.type==eqtype.product){
        var found=[];
        for(var i=0;i<terms.length;i++){
            if(terms[i].type==eqtype.operatorfactor){
                var operation=terms.splice(i,1)[0][0];
                found.push(operation);
                var subject=terms.splice(i).setType(eqtype.product);
                if(terms.length){
                    return [operation,subject].setType(eqtype.fn).multiply(terms);
                }else{
                    return [operation,subject].setType(eqtype.fn);
                }
            }else if(terms[i]=="∫"){
                var operation=terms.splice(i,1)[0];
                found.push(operation="int");
                var subject=terms.splice(i).setType(eqtype.product);
                if(terms.length){
                    return [operation,subject].setType(eqtype.fn).multiply(terms);
                }else{
                    return [operation,subject].setType(eqtype.fn);
                }
            }
        }
    }
	//while(typeof terms=="object" && terms.length==1){
	//	terms=terms[0];
	//}
    return terms;
	
}

/*

Random codes/gibberish to refer to the mathematics that I don't understand and have no-idea what to call.


[finding the inverse of a function, solving a relation]
  Interoperability of the x's:
    #zD-0 - One x
        * Pop off parts from the right, (pushing to the left) until we have the identity on the right, (and the inverse on  the left), or treat the function as a string of operations.
        * Just go backwards
    #zD-1 - x's of only hyper-[1] (+)
        * Collect terms
        * go to #zd-0
    #zD-2 - x's of only hyper-[1,2] (+ *)
        * Factorise, or expand?. or expand then factorise?
        * Use formula for ax+bx^2+cx^3+dx^4
        * Attempt to solve quintics with
           * guessing
           * A 4th/5th/3rd order Newton's method
        * go to #zd-1
    #zD-3 - x's of only hyper-[1,2,3] (+ * ^)
        * Product log   for x*e^x
        * Product log   for x+e^x
        * Something     for x+x*e^x
        * go to #zd-2
    #zD-4 - x's of only hyper-[1,2,3,4] (+ * ^ ....)  (TODO)
        * run away fast!
        * go to #zd-3


Current status: not even #zD-0  - Jan 3 aanthony

*/





//Vectors:
function Vector(fn){
    if((fn!==undefined) && (typeof fn == "function")){
        var self=function(x){return this;};
        self.type=eqtype.continuousvector;
        self.f=fn;
        return self;
    }else{
        var self=[];
        self.type=eqtype.discretevector;
        for(var i=0;i<arguments.length;i++){
            self.push(p(arguments[i]));
        }
        return self;
    }
    
};

Array.prototype.re=function(){

};
Array.prototype.im=function(){

};

Array.prototype.cross=function(o){
    if(o.type!=eqtype.discretevector || this.type!=eqtype.discretevector){
        throw (MessageStrings.nonvector);
    }
};
Array.prototype.dot=function(o){
    if(o.type!=eqtype.discretevector || this.type!=eqtype.discretevector){
        throw (MessageStrings.nonvector);
    }
    var s=[];
    s.type=eqtype.sum;
    var lowest=min(o.length,this.length);
    
    for(var i=0;i<lowest;i++){
        s.add(this[i].multiply(o[i]));
    }
    return s;
};
Array.prototype.mag=function(){
    if(this.type==eqtype.discretevector){
        return this.dot(this.conjg()).pow((0.5));
    }else{
        return this.multiply(this.conjg()).pow((0.5));
    }
};
Array.prototype.conjg=function(){
    return this;
    return this.dreplace(/i/g,p("-i"));
};
Number.prototype.search=function(x){
    return this==x;
};
String.prototype.search=function (x){
    return this==x;
};

String.prototype.dependence=function (x){
    var self=this.toString();
    if(typeof app.variables[self] =="function"){
        return [self];
    }
    return [];
};

Array.prototype.dependence=function(){
    
    var dep=[];
    if(this.type==eqtype.fn || this.type==eqtype.equality){
        if(this.type==eqtype.fn && !window[this[0]]){
            dep.push(this[0]);
        }
        if(this[1].dependence){
        var n=this[1].dependence();
        for(var b=0;b<n.length;b++){
            if(dep.indexOf(n[b])==-1){
                dep.push(n[b]);
            }
        }
        }
        return dep;
        
    }
    for(var i=0;i<this.length;i++){
        if(this[i].dependence){
        var n=this[i].dependence();
        for(var b=0;b<n.length;b++){
            if(dep.indexOf(n[b])==-1){
                dep.push(n[b]);
            }
        }
        }
    }
    return dep;
};
Array.prototype.search=function(x){
    var found=false;
    for(var i=0;i<this.length;i++){
//        if(this[i].search){
            if(this[i].search(x)){
                return true;
            }
//        }
    }
    return false;
};
String.prototype.dreplace=function(a,b){
    if(a.test){
        if(a.test(this.toString())){
            if(typeof b=="function"){
                return(b(this.toString()));
            }else{
                return b;
            }
        }else{
            return this.toString();
        }
    }else{
        if(a==this.toString()){
            return b;
        }
    }
    return this.toString();
};
Number.prototype.dreplace=function(a,b){
    return Number(this);
};
Array.prototype.dreplace=function(a,b){
    var cp=[];
    cp.type=this.type;
    for(var i=0;i<this.length;i++){
        if(typeof this[i]=="string"){
            
            if(a.test){
                if(a.test(this[i])){
                    if(typeof b=="function"){
                        cp.push(b(this[i]));
                    }else{
                        cp.push(b);
                    }
                }else{
                    cp.push(this[i]);
                }
            }else{
                cp.push((a==this[i].toString())?b:this[i]);
            }
        }else if(typeof this[i]=="object"){
            cp.push(this[i].dreplace(a,b));
        }else{
            //console.log(typeof this[i]);
            cp.push(this[i]);
        }
    
    }
    return cp;
    this.forEach(function(i){
        if(typeof i=="string"){
            if(a.test){
                if(a.test(i)){
                    if(typeof b=="function"){
                        cp.push(b(i));
                    }else{
                        cp.push(b.dreplace(a,b));
                    }
                }else{
                    cp.push(i);
                }
            }else{
                if(typeof a=="string"){
                    cp.push(i.dreplace(a,b));
                }
            }
        }else{
            cp.push(i.dreplace(a,b));
        }
    });
    cp.type=this.type;
    return cp;
};

Number.prototype.divide=function(o){
    var product=[Number(this),p(o)];
    product.type=eqtype.fraction;
    return product;
};
String.prototype.divide=function(o){
    var product=[];
    product.type=eqtype.fraction;
    product.push(p(this.toString()));
    product.push(p(o));
    return product;
};
Array.prototype.divide=function(o){
    if(o===1){
        return this;
    }
    if(this.type==eqtype.fraction){
        this[1].multiply(p(o));
        return this;
    }
    var product=[this,p(o)];
    product.type=eqtype.fraction;
    return product;
};

Array.prototype.power=function(o){
    if(this.type==eqtype.power){
        this[1]=this[1].multiply(p(o));
    }
    return [this,p(o)].setType(eqtype.power);
};
String.prototype.power=function(o){
    return [p(this.toString()),p(o)].setType(eqtype.power);
};
Number.prototype.power=function(o){
    return [Number(this),p(o)].setType(eqtype.power);
};
Array.prototype.multiply=function(o){	
    if(this.type==eqtype.fraction){
        this[0]=this[0].multiply(p(o));
        return this;
    }
    var other=p(o);
	var oe=other.eval();
    if(oe===0){
        return 0;
    }
	else if(oe===1){
        return this;
    }
    if(this.type==eqtype.product && other.type==eqtype.product){
        var self=this;
        other.forEach(function(e){self.push(e)});
        return this;
    }else if(this.type==eqtype.discretevector || this.type==eqtype.continuousvector){
        return self.dot(o);
    }
    var sum=[this,o];
    var oldtype=this.type;
    this.push(this.splice(0,this.length));
    this[0].type=oldtype;
    this.push(p(o));
    this.type=eqtype.product;
    return this;
};
String.prototype.forEach=function(e){
    e(this.toString());
};
Number.prototype.forEach=function(e){
    e(Number(this));
};

String.prototype.add=function(o){
    if(o==0){
        return this.toString();
    }
    if(this.toString()=="0"){
        return p(o);
    }
    return [p(this.toString())].setType(eqtype.sum).add(p(o));
};
Number.prototype.add=function(o){
    var po=p(o);
    if(po.eval()==0){
        return Number(this);
    }
    var sum=[p(Number(this)),po];
    sum.type=eqtype.sum;
    return sum;
};
Number.prototype.eval=function(o){
    return Number(this);
};
String.prototype.eval=function(){
    if(this.toString()==="i"){
        return "i";
    }
    if(!isNaN(this.toString())){
        console.log("NUMBER IN HERE: "+this.toString());
        return Number(this.toString());
    }
    var word=dirty(this.toString());
    
    if(window.app && app.variables[word]){
		if(typeof app.variables[word]!="function"){
			return app.variables[word].eval();
		}else{
			return NaN;
		}
    }
    
    if(window[word]!==undefined && typeof window[word]=="number"){
        return window[word];
    }
    
    
    if(window[word]){
		if(typeof window[word]!="function"){
			//return eval(word);
            return window[word];
		}else{
			return NaN;
		}
    }
    return NaN;
};
Array.prototype.eval=function(){
    if(!this.length){
        __debug(__debug(0,1)||app.ui.console.warn("Empty! in .eval(): "+this.type),0);
    }
    if(this.canEval()){
        return eval(this.getString(1,1));
    }else{
        return NaN;
    }
};
String.prototype.multiply=function(o){
    if(this.toString=="i"){
        return -1;
    }
    if(o==1){
        return p(this.toString());
    }
    if(o==0){
        return 0;
    }
    var sum=[p(this.toString()),p(o)];
    sum.type=eqtype.product;
    return sum;
};
Number.prototype.multiply=function(o){

    if(this==0){
        if(p(o)==Infinity){
            return undefined;
        }
        return 0;
    }
    if(o==1){
        return Number(this);
    }
    if(o==0){
        return 0;
    }
    var sum=[Number(this),p(o)];
    sum.type=eqtype.product;
    return sum;
};

Array.prototype.add=function(o){
    if(this.type==eqtype.sum && o.type==eqtype.sum){
        var self=this;
        p(o).forEach(function(e){self.push(e)});
        return this;
    }
    if(this.type==eqtype.sum){
        this.push(p(o));
        return this;
    }
    var sum=[this,o];
    var oldtype=this.type;
    this.push(this.splice(0,this.length));
    this[0].type=oldtype;
    this.push(p(o));
    this.type=eqtype.sum;
    return this;
};
Array.prototype.size=function(){
    var _size=0;
    for(var i=0;i<this.length;i++){
        if(typeof this[i]=="string"){
            _size+=this[i].length+6;
        }else if(typeof this[i]=="number"){
            _size+=5;
        }else{
            _size+=this[i].size?4+this[i].size():this[i].length;
        }
    }
    return _size;
};

Array.prototype.setType=function(e){
    this.type=e;
    return this;
};
Number.prototype.differentiate=function(){
    if(this==Infinity || this==-Infinity){
        return undefined;
    }
    return 0;
};
Number.prototype.integrate=function(){
    if(this==0){
        return 0;
    }
    return [this,"x"].setType(eqtype.product);
};
String.prototype.differentiate=function(){
    return Number(this.toString()=="x");
};
String.prototype.integrate=function(){
    if(this.toString()=="x"){
        return [0.5,["x",2].setType(eqtype.power)].setType(eqtype.product);
    }else{
        return [this.toString(),"x"].setType(eqtype.product);
    }
};
Array.prototype.differentiate=function(times){
    times=p(times).eval() ||1;//double derivative etc. (1/2th derivative even)
    if(times<0){
        return this.integrate(-times);
    }
    var itg=[];//itg so it's similar to the integrate function
    itg.type=eqtype.sum;
    
    if(this.canEval && this.canEval()){
        //I am not dependant on an independant variable.
        return 0;
    }
    
    if(this.type==eqtype.sum){
        this.forEach(function(e){
            itg.add(e.differentiate());
        });
    }else if(this.type==eqtype.fn){
        //Chain rule!
        var fnd;
        if(fnd=known_derivatives[this[0]]){
            return [fnd.dreplace(/^x$/,this[1]),this[1].differentiate()].setType(eqtype.product).simplify();
        }else{
            if(window && window.app && window.app.variables && window.app.variables[this[0]] && typeof window.app.variables[this[0]]=="function"){
                return [window.app.variables[this[0]].math.differentiate().dreplace(/^x$/,this[1]),this[1].differentiate()].setType(eqtype.product).simplify();
                //throw("chain rule");
            }
            throw(MessageStrings.unknownderivative.replace("%s",this[0]));
        }
        return;
    }else if(this.type==eqtype.fraction){
        var a=this[0];
        var b=this[1];
        
        return (
        [
            [
                [
                    a.differentiate(),
                    b
                ].setType(eqtype.product),
                [
                    -1,
                    b.differentiate(),
                    a
                ].setType(eqtype.product)
            ].setType(eqtype.sum),
            [
                b,
                b
            ].setType(eqtype.product)
        ].setType(eqtype.fraction).simplify()
        );
        //return a.differentiate().multiply(b).add(a.multiply(-1).multiply(b.differentiate())).divide(b.multiply(b));
        
    }else if(this.type==eqtype.power){
        //y=e^(loga . b)
        //dy/dx = 
    
    
        //The errror comes from no power being outputed.
        var a=this[0];
        var b=this[1];
        //itg.add(p("b*(a^(b-1))*d+f*log(b)*(a^b)").dreplace(/a/g,a).dreplace(/b/g,b).dreplace(/d/g,d).dreplace(/f/g,f));
    
        return [[a.differentiate(),[a,[b,-1].setType(eqtype.sum)].setType(eqtype.power),b].setType(eqtype.product),[["log",a].setType(eqtype.fn),b.differentiate(),[a,b].setType(eqtype.power)].setType(eqtype.product)].setType(eqtype.sum).simplify();
        
    }else if(this.type==eqtype.product){
        if(this.length>1){
            var a=this[0];
            var b=this.slice(1).setType(eqtype.product);
            return [[a,b.differentiate()].setType(eqtype.product),[b,a.differentiate()].setType(eqtype.product)].setType(eqtype.sum).simplify();
        }else if(this.length==1){
            return this[0].differentiate();
        }else{
            app.ui.console.warn("empty product!");
            return 0;
        }
    }else{
        throw ("fail: diff: Expression Type: "+this.type);
        return;
    }
    
    return itg.simplify();

};
String.prototype.expand=function(){
    return this.toString();
};
Number.prototype.expand=function(){
    return this.toString();
};
Array.prototype.expand=function(){
    var self=this.simplify().simplify();
    var expanded=[].setType(eqtype.sum);
    if(self.type==eqtype.sum){
        for(var i=0;i<self.length;i++){
            expanded.push(self[i].expand());
        }
    
    }else if(self.type==eqtype.product){
        for(var i=0;i<self.length;i++){
            self[i]=(self[i].expand());
        }
        //this = (a+b+c+d)(e+f+g+h)(i+j+k+l)(m+n+o+p)...
        /*
                 (ae+af+ag+ah  +be+bf+bg+bh   + ce+cf+cg+ch)(i+j+k+l)(n+n+o+p)
        
        
        */
        var first=self[0];
        var second=self[1];
        if(first.type==eqtype.sum){
            if(second.type==eqtype.sum){
                for(var a=0;a<first.length;a++){
                    for(var b=0;b<second.length;b++){
                        expanded.push(first[a].multiply(second[b]));
                    }
                }
            }else{
                for(var a=0;a<first.length;a++){
                    expanded.push(first[a].multiply(second));
                }
            }
        }else if(first.type==eqtype.fraction || first.type==eqtype.product){
            if(second.type==eqtype.sum){
                for(var b=0;b<second.length;b++){
                    expanded.push(first.multiply(second[b]));
                }
            }else{
                expanded.push(first.multiply(second));
            }
        }else{
            expanded.push(first.multiply(second));
        }
        if(self.length>2){
            
            self.splice(0,2);
            self=self.expand();
            return self.concat(expanded).setType(eqtype.product).expand().simplify();
        }
        
    
    }

    return expanded.simplify();

};
String.prototype.divides=function(o){
    if(!isNaN(o.eval())){
        return true;
    }
    if(o==this.toString()){
        return true;
    }
    return false;

};
Number.prototype.divides=function(o){
    if(!isNaN(o.eval())){
        return true;
    }
    return false;

};
Array.prototype.divides=function(o){
    if(!isNaN(o.eval())){
        return true;
    }
    return false;
};
Array.prototype.integrate=function(times){
    times=times||1;//double integral etc. (1/2th integral even)
    if(times<0){
        return this.differentiate(-times);
    }
    if(n=this.eval()){
        return ["x",n].setType(eqtype.product);
    }
    var itg=[];
    itg.type=eqtype.sum;
    if(this.type==eqtype.sum){
        this.forEach(function(e){
            itg.push(e.integrate(times));
        });
    }else if(this.type==eqtype.power){
        this[0]=this[0].simplify();
        if(this[0]=="x" && !isNaN(n=this[1].eval())){
            var _n_plus_one=this[1].add(1).simplify();
            itg.push([["x",_n_plus_one].setType(eqtype.power),_n_plus_one].setType(eqtype.fraction)); 
        }else if(!isNaN(n=this[0].eval())){
           
            // ∫  e^(log(a) * u) du
            //  = e^(log(a) * u)/u
            var bd=this[1].differentiate().simplify();
            if((1).divides(bd)){
                return [["e",[["log",this[0]].setType(eqtype.fn),this[1]].setType(eqtype.product)].setType(eqtype.power),bd].setType(eqtype.fraction);
            }
        }else{
            throw (MessageStrings.intfail);
        }
    }else if(this.type==eqtype.product){
        var _non_constant=0;
        var self=this.simplify();
        //console.log(self);
        if((_dx=self.indexOf("dx"))!=-1){
            self.splice(_dx,1);
        }
        if(self.length==2 && typeof self[1]=="number"){
            itg.push([self[0].integrate(times)].setType(eqtype.product));
        }else if(this.length==1){
            return this[0].integrate();
        }else{
        
            for(var a=0;a<this.length;a++){
                var u=this[a];
                var du=this[a].differentiate();
                for(var b=0;b<this.length;b++){
                    if(this[b].divides(du)){
                        this[b]=this[b].divide(du).simplify();
                        this[a]="u";
                        
                        if(0 && itworked){
                        
                        }
                    
                    }
            
            
                }
            
            
            }
            
            throw (MessageStrings.intfail);
        
        }
    }else if(this.type==eqtype.fn){
        if(window && window.app && window.app.variables && window.app.variables[this[0]]){
            return window.app.variables[this[0]].math.dreplace("x",this[1]).integrate();
        }
    }else{
        throw ("fail: int: type: "+this.type);
    }
   
    return itg.simplify();
};
String.prototype.inverses=function(){
    return this.toString();
};
String.prototype.factorise=function(){
    return this.toString();
};
Number.prototype.factorise=function(){
    return Number(this);
};

Array.prototype.factorise=function(){
    return this;
    
    //partial fractions (in x)
    
    
    
    var right;
    if(this.type!=eqtype.sum){
        alert("?");
        right=[].setType(eqtype.sum).add(right)
    }else{
        right=this;
    }
//expand THEN factorise
    var _n=[];
    var nr=[];
    nr.type=eqtype.sum;
    var _multi=[];
    for(var i=0;i<right.length;i++){
        var fou_c=0;
        var fou_i;
        for(var b=0;b<_n.length;b++){
            if(_n[b].getString()==right[i].getString()){
                fou_i=b;
                fou_c=1;
                break;
            }else if(right[i].type==eqtype.product && right[i].length==2){
                if(right[i][0]==_n[b]){
                    fou_i=b;
                    fou_c=right[i][1];
                    break;
                }else if(right[i][1]==_n[b]){
                    fou_i=b;
                    fou_c=right[i][0];
                    break;
                }
            }
        }
        if(fou_c!==0){
            _multi[fou_i].add(fou_c);
        }else{
            _multi.push([1].setType(eqtype.sum));
            _n.push(right[i]);
        }
    }
    for(var i=0;i<_n.length;i++){
        if(_multi[i]==1){
            nr.add(_n[i]);
        }else{
            nr.add(_n[i].multiply(_multi[i]));
        }
    }
    return nr;
};
String.prototype.roots=function(){
    if(this.toString()=="x"){
        return [0];
    }
    return [];
};
Number.prototype.roots=function(){return [];};
Array.prototype.roots=function(){
    var rt=[].setType(eqtype.discretevector);
    var self=this.factorise();
    if(self.type==eqtype.product){
        //Null factor law
        
        for(var i=0;i<self.length;i++){
            var n=self[i].roots();
            for(var b=0;b<n.length;b++){
                if(rt.indexOf(n[b])==-1){
                    //This doesn't work when one of the factors is infinity
                    //Now check that none of the other factors are infinity, when
                    // x is equal to n[b]
                    var safe=true;
                    for(var c=0;c<self.length;c++){
                        if(c!=i){
                            var rep=self[i].dreplace("x",n[b]).simplify().eval();
                            //console.log(c);
                            //console.log(this[i].getString());
                            //console.log(rep);
                            if(rep==Infinity || rep==-Infinity){
                                safe=false;
                                break;
                            }
                    
                        }
                    }
                    if(safe){
                        rt.push(n[b]);
                    }
                }
            }
        }
        return rt;
    }
    else if(self.type==eqtype.fraction){
        rt=self[0].roots();
        var ort=self[1].singularities();
        for(var i=0;i<ort.length;i++){
            if(rt.indexOf(ort[i])==-1){
                rt.push(ort[i]);
            }
        }
        return rt;
    }
    var inv=self.inverses();
    if(inv && inv.length){
        inv=[inv];
    }else{
        inv=[];
    }
    for(var i=0;i<inv.length;i++){
        var n=inv[i].dreplace("x",0).simplify();
        if(rt.indexOf(n)==-1){
            rt.push(n);
        }
    }
    return rt;
};
Number.prototype.singularities=function(){return [];};
String.prototype.singularities=function(){return [];return [-Infinity,Infinity];};
Array.prototype.singularities=function(){

// ?? (1/f(x)).roots() instead?
    var ret=[]
    if(this.type==eqtype.fraction){
        var r=this[1].roots();
        for(var b=0;b<r.length;b++){
            if(ret.indexOf(r[b])==-1){
                ret.push(r[b]);
            }
        }
        r=this[0].singularities();
        for(var b=0;b<r.length;b++){
            if(ret.indexOf(r[b])==-1){
                ret.push(r[b]);
            }
        }
        
    }else{
        for(var i=0;i<this.length;i++){
            var r=this[i].singularities();
            for(var b=0;b<r.length;b++){
                if(ret.indexOf(r[b])==-1){
                    ret.push(r[b]);
                }
            }
        }
    
    }
    return ret;
};
//American spelling
Array.prototype.factorize=Array.prototype.factorise;
Array.prototype.inverses=function(){
    if(!isNaN(this.eval())){
        return;
    }
    if(!this.search("x")){
        return;
    }
    var right=[];
    if(this.type==eqtype.fraction){
        right.type=eqtype.product;
        right.push(this[0].dreplace(/^x$/,"y"));
        right.push(p(1).divide(this[1].dreplace(/^x$/,"y")));
    }else{
    
        right=this.simplify().dreplace(/^x$/,"y");
    }
    var left=[p("x")];
    left.type=eqtype.sum;
    var __debug_iterations=0;
    while(__debug_iterations<3){
    __debug_iterations++;
    var got_anywhere=false;
    var last_try=false;
    //console.log("d: "+__debug_iterations);
    while(typeof right=="object" && right.length==1){
    //console.log(1);
        if(right=="y"){
            return left;
        }
        right=right[0];
    }
    if(right=="y"){
        return left;
    }
    
    if(right.type==eqtype.product){
        var moved=false;
        for(var i=0;i<right.length;i++){
            if(!right[i].search("y")){
                moved=true;
                left=left.divide(right.splice(i,1).setType(eqtype.product));
                i--;
                got_anywhere=true;
            }
        }
        if(!moved){
            //add powers
            //right=right.expand();
        
        }
    }else if(right.type==eqtype.sum){
        var moved=false;
        for(var i=0;i<right.length;i++){
            if(!right[i].search("y")){
                moved=true;
                left=left.add(right.splice(i,1).setType(eqtype.sum).multiply(-1));
                i--;
                got_anywhere=true;
            }
        }
        if(!moved){
            //factorise!!!!!
            
            //right=right.factorise();
        }
    }else if(right.type==eqtype.fraction){
        
        
        //l = a/b
        if(right[0].search("y")){
            //a has the x
            //l*b = a
            left=left.multiply(right[1]);
            right=right[0];
            got_anywhere=true;
        }else{
            //l=a/b
            //a/l=b
            left=[right[0],left].setType(eqtype.fraction);
            right=right[1];
            got_anywhere=true;
        }
    
    
    }else if(right.type==eqtype.power){
        //l=a^b
        //l^(1/b)=a
        //l=e^(log(a)*b)
        //log(l)=log(a)*b
        //exp(log(l)/b)=(a)
        
        if(right[0].search("y")){
            //a has the x
            left=p("l^(1/b)").dreplace(/l/g,left).dreplace(/b/g,right[1]);
            
            right=right[0];
            got_anywhere=true;
        }else{
            //b has the x
            left=[["log",left].setType(eqtype.fn), ["log", right[0]].setType(eqtype.fn)  ].setType(eqtype.fraction);
            
            //left=left.divide(p("log(x)").dreplace(/^x$/,right[0]));
            right=right[1];
            got_anywhere=true;
        }
    }else if(right.type==eqtype.fn){
        //l=f(a)
        //f^-1(l) = f^-1(f(a))=a
        left=known_inverses[right[0]].dreplace("x",left);
        //MEOW
        right=right[1];
    }else{
        return "right.type is someting else: "+right.type+": "+right;
    }
    
    if(!got_anywhere){
        last_try=true;
    }
    
    if(last_try){
        return;
    }
    if(__debug_iterations>3){
        throw(MessageStrings.inversefail+": "+left.getString()+"="+right.getString());
        return;
    }
    
    
    }
    return left;
    
};
function clean(n){
    // de-latexify a string.
    n=n.replace(/\\?(sin|cos|tan|sec|cosec|csc|cotan|cot)\^([^\{]|\{[^\}]+\})/g,"$1^$2:");
    n=n.replace(/\\?(sin|cos|tan|sec|cosec|csc|cotan|cot)([^\:\^])/g,"$1:$2");
    n=n.replace(/\\?(log)_([^\{]|\{[^\}]+\})/g,"$1_$2:");
    for(var i in latexchars){
        if(latexchars.hasOwnProperty(i)){
            while(n.indexOf("\\"+i)!=-1){
                n=n.replace("\\"+i,latexchars[i]);
            }
        }
  	}
    return n.replace(/\*\(\)/g,"*(1)").replace(/\{ \}/g,"{1}").replace(/_\{([^\}\{]+)\}/g,"_$1").replace(/\}\{/g,")/(").replace(/\}/g,"))").replace(/\{/g,"((").replace(/\\/g,"");;
}
function utf8_print(n){
    // de-latexify a string.
    return n.replace(/sqrt/g,"√");
}
function dirty(n){
    //un clean()
    for(var i in latexchars){
        if(latexchars.hasOwnProperty(i)){
            if(latexchars[i].length && latexchars[i]!=" " && n.indexOf(latexchars[i])!=-1){
                n=n.replace(latexchars[i],i);
            }
        }
  	}
    return n.replace(/\*\(\)/g,"*(1)").replace(/\{ \}/g,"{1}").replace(/_\{([^\}\{]+)\}/g,"_$1").replace(/\}\{/g,")/(").replace(/\}/g,"))").replace(/\{/g,"((").replace(/\\/g,"");;
}
function p_latex(n){
    return p(clean(n)).simplify();
}
String.prototype.markup=function(){
    var e=document.createElement("div");
    e.appendChild(document.createTextNode(this.toString()));
    return e;
};
Number.prototype.markup=function(){
    var e=document.createElement("div");
    e.appendChild(document.createTextNode(this.toString()));
    return e;
};
Array.prototype.markup=function(){
    var e=document.createElement("div");
    e.appendChild(document.createTextNode(this.getString()));
    return e;

};
String.prototype.canEval=function(){
    if(this.toString()=="e"){
        return 2;
    }
    if(this.toString()=="π"){
        return 2;
    }
    if(window.app){
        if(app.variables[this.toString()]){
            if(typeof app.variables[this.toString()]!="function"){
                return 8;
            }
        }
    }

    if(window[this.toString()]){
        if(typeof window[this.toString()]!="function"){
            return true;
        }
    }
    return false;
};

Number.prototype.canEval=function(){
    return true;
};
Array.prototype.canEval=function(){
//TODO: null factor law.
//TODO: support for surds.
    var max=true;
    if(this.type==eqtype.power){
        
        var reta=this[0].canEval();
        var retb=this[1].canEval();
        if(reta ==false || retb==false){
            return false;
        }
        if(reta==4 || retb==4){
            return 4;
        }
        if(this[1].eval()==0.5){
            return ["sqrt",this[0]].setType(eqtype.fn).canEval();
        }
        if(reta==2 || retb==2){
            return 2;
        }
        return true;
    }
    if(this.type==eqtype.fn && window[this[0]] && typeof window[this[0]] =="function" ){
        //Check if it7 can be represented as an absolute value.
        if(this[0]=="diff"){
            return 4;
        }else if(this[0]=="int"){
            return 4;
        }
        if(this[0]=="log"){
        
            var de=log(this[1].eval());
            if(~~de==de){
                return true;
            }else{
                max=2;
            }
        }
        if(this[0]=="sqrt" && !(this[1]==pow(~~(sqrt(this[1])),2)  ) ){
            max=2;
        }
        var ret= this[1].canEval();
        if(!ret || ret==4){
            return ret;
        }
        return max;
    }
    if(this.type==eqtype.fn && app.variables[this[0]] && typeof app.variables[this[0]] =="function" ){
        //Check if it7 can be represented as an absolute value.
        
        var ret=this[1].canEval();
        if(!ret || ret==4){
            return ret;
        }
        return 2;
    }
   
    for(var i=0;i<this.length;i++){
        if(typeof this[i] == "number"){
        }else if(this[i].canEval){
            var res;
            if(!(res=this[i].canEval())){
                return false;
            }
            if(res==4){
                return 4;
            }
            if(res==2){
                max=2;
                //return 2;
            }
            if(res==8){
                max=8;
                //return 2;
            }
        }
    }
    return max;
};

String.prototype.simplify=function (){
    return this.toString();
};
Number.prototype.simplify=function (){
    return Number(this);
};

Function.prototype.eval=function(){
	return isNaN;
};
Function.prototype.canEval=function(){
	return 2;
};

Array.prototype.takeDenom=function(){
    var ret=1;
    if(this.type==eqtype.sum){
        //factorise
        
        
        
        
        //
        return 1;
    }if(this.type==eqtype.fn){
        return 1;
    }else if(this.type==eqtype.product){
        for(var i=0;i<this.length;i++){
            if(this[i].takeDenom){
                ret=ret.multiply(this[i].takeDenom());
            }
        }
    }else if(this.type==eqtype.fraction){
        var numer=this[0];
        var denom=this[1];
        this.type=this[0].type;
        this.splice(0);
        for(var n=0;n<numer.length;n++){
            this.push(numer[n]);
        }
        if(!this.length){
            this.push(1)
        }
        ret=ret.multiply(denom);
    }else{
        //throw("Unimplemented takeDenom: "+this.type);
    }
    return ret;
};


Array.prototype.simplify=function (onlyeval,___retry,hard){
    //NOTE: this code may be destructive to the array.
    //It should not be destructive to the array, because sometimes
    //simplifying might not be beneficial for all things.
    
    //For the time being, it shall be considered destructive.
    if(this.type==eqtype.equality){
        this[0]=this[0].simplify();
        this[1]=this[1].simplify();
        return this;
    }
    
    if(this.length==1){
		return this[0].simplify();
	}
    
    if(hard && this.type==eqtype.fn){
        if(window && window.app && window.app.variables && window.app.variables[this[0]] && typeof window.app.variables[this[0]]=="function"){
            
            return window.app.variables[this[0]].math.dreplace(/^x$/,this[1]).simplify();
        }
    }
    
    if(this.canEval && this.canEval()===true){
        return this.eval();
    }
	for(var i=0;i<this.length;i++){
		while(i<this.length && ((typeof this[i]) == "object") && this[i].length==1){
			this[i]=this[i][0];
		}
        if(this[i].canEval && this[i].canEval()===true){
            this[i]=this[i].eval();
        }else{
			this[i]=this[i].simplify(true,0,hard);
		}
	}
    if(onlyeval){
		return this;
	}
    if(this.type==eqtype.fraction && this[1]===1){
        return this[0];
    }
    
    if(this.type==eqtype.power){
        if(this[1]===1){
            return this[0];
        }else if(this[1]===0){
            return 1;
        }else if(this[0]===1){
            return 1;
        }
    }
    if(this.type==eqtype.fn){
        this[1]=this[1].simplify();
        if(this[0]=="log" && this[1]=="e"){
            //SHOULD BE IN .canEval
            return 1;
        }
        if(this[0]=="diff"){
            if(this.length!=2){
                throw(MessageStrings.lonedoperator);
            }
            return this[1].simplify().differentiate();
        }
        //How can we do both?
        if(this[0]=="int"){
            if(this.length!=2){
                throw(MessageStrings.loneioperator);
            }
            return this[1].simplify().integrate();
        }
        return this;
    }else if(this.type==eqtype.fraction){
        this[1]=this[1].simplify();
        var denomc=this[1].eval();
        
        if(!isNaN(denomc)){
            if(denomc==1){
                return this[0].simplify();
            }else if(denomc==Infinity){
                return 0;
            }else if(denomc==-Infinity){
                return -0;
            }
            if(denomc!=1){
                this[0]=this[0].multiply(1/denomc);
            }
            return this[0].simplify();
        }
        this[0]=this[0].simplify();
        //if(this[1].eval()===1){
        //    return this[0];
        //}
        if(this[0].takeDenom){
            this[1]=this[1].multiply(this[0].takeDenom()).simplify();
    
        }
        if(this[1].takeDenom){
            this[0]=this[0].multiply(this[1].takeDenom()).simplify();
        }
        if(___retry){
            return this;
        }else{
            return this.simplify(0,1);
        }
    }else if(this.type==eqtype.power){
        this[1]=this[1].simplify();
		//already evaled?
        if(this[1].eval()===1){
            return this[0].simplify();
        }
        this[0]=this[0].simplify();
    }else if(this.type==eqtype.product){
        for(var i=0;i<this.length;i++){
            
            this[i]=this[i].simplify();
            if(this[i]===0){
                return 0;
            }else if(this[i]===1){
                this.splice(i,1);
                i--;
            }
        }
        var replacements_base=[];
        var replacements_exp=[];
        var to_splice=[];//IN ORDER
        for(var i=0;i<this.length;i++){
            var z;
            //search on first element
            if((z=replacements_base.indexOf(this[i]))!=-1 && z!=i){
                replacements_exp[z]=replacements_exp[z].add(1);
                to_splice.push(i);
            }else if((z=this.indexOf(this[i]))!=i){
                replacements_base[z]=this[z];
                replacements_exp[z]=2;
                to_splice.push(i);
            }else if(this[i].type==eqtype.power){
                if((z=replacements_base.indexOf(this[i][0]))!=-1){
                    replacements_exp[z]=replacements_exp[z].add(this[i][1]);
                    to_splice.push(i);
                }else if((z=this.indexOf(this[i][0]))!=i){
                    if(z!=-1){
                        replacements_base[z]=this[z];
                        replacements_exp[z]=this[i][1].add(this[i][1]);
                        to_splice.push(i);
                    }else{
                        replacements_base[i]=this[i][0];
                        replacements_exp[i]=this[i][1];
                    }
                }else{
                    replacements_base[i]=this[i][0];
                    replacements_exp[i]=this[i][1];
                }
            }
        }
        
        var offset=0;
        //console.log(to_splice);
        
        //console.log(replacements_exp);
        for(var i=0;i<to_splice.length;i++){
            //this[to_splice[i]+offset]=1;
            //this.splice(to_splice[i]+offset,1);
            offset--;
        }
        for(var i=0;i<replacements_base.length;i++){
            if(replacements_base[i]){
            //   this[i]=[replacements_base[i],replacements_exp[i]].setType(eqtype.power);
            }
        }
        for(var i=0;i<this.length;i++){
            var _prod=1;
			/*while(i<this.length && (typeof (this[i]=this[i].simplify()) =="number")){
				if(this[i]===1){
                    this.splice(i,1);
                }else if(this[i]===0){
                    return 0;
                    alert("Lost data!!!: "+this.splice(i,1));
                }
			}*/
            while(i<this.length && typeof this[i] =="object" && this[i].type==eqtype.product){
				var _n=this.splice(i,1)[0];
                
                for(var n=0;n<_n.length;n++){
                    this.push(_n[n]);
                }
				//this=this.concat(_n);
            }
            if(i<this.length && typeof this[i] =="object" && this[i].type==eqtype.fraction){
				var _fract=this.splice(i,1)[0];
                ///Make me a fraction
                var numer=this.splice(0).setType(this.type);
                if(!numer.length){
                    numer.push(1);
                }
                _fract[0]=_fract[0].multiply(numer);
                this.type=eqtype.fraction;
                this.push(_fract[0]);
                this.push(_fract[1]);
            }
            if(this.type!=eqtype.product){
                return this.simplify();
            }
            
        }
        var _prod=1;
        for(var i=0;i<this.length;i++){
            if(typeof this[i] == "number"){
                _prod*=this[i];
                this.splice(i,1);
                i--;
            }
        }
        if(_prod!==1){
            this.push(_prod);
        }
        else if(_prod===0){
            //Null factor law.
            //Check for singularites
            this.push(0);
            return 0;
        }
        
    }else if(this.type==eqtype.sum){
        var _prod=0;
        for(var i=0;i<this.length;i++){
            this[i]=this[i].simplify();
            while(i<this.length && typeof this[i] == "number"){
                _prod+=this[i];
                this.splice(i,1);
            }
            
        }
        if(_prod!==0){
            this.push(_prod);
        }
        if(!this.length){
            this.push(0);
            return 0;
        }
    }
    
    var z=this;
    while(typeof z=="object" && z.length==1){
        z=z[0];
    }
	return z;
};

String.prototype.getLatex=function(){
    return this.toString();
}
Number.prototype.getLatex=function(){
    return Number(this);
}
Array.prototype.getLatex=function(braces){

    var s=braces?"(":"";
    var self=this;
    var _first=true;
    var endchar="";
    var afterme="";
    var second=true;
    //this.forEach(function(e){
    for(var i=0;i<self.length;i++){
        var e=self[i];
        if(!_first){
            second=false;
        }
        if(_first){
            if(self.type==eqtype.fraction){
                s+="\\frac{";
                endchar="}";
            }
            if(self.type==eqtype.discretevector){
                s+="[";
                endchar="]";
            }
            else if(self.type==eqtype.fn){
                if(typeof e !="string" && typeof e!="function"){
                    throw(messages.fnnamenotstring);
                    return "ERROR";
                }
                if(functions.indexOf(e)==-1){
                    var _found=false;
                    if(window && window.app && window.app.variables && window.app.variables[e] && typeof window.app.variables[e]=="function"){
                        _found=true;
                    }
                    if(!_found){
                        throw("Unknown function: "+e);
                        return "ERROR";
                    }
                }
                afterme="(";
                endchar=")";
            }
            _first=false;
        }else if(self.type==eqtype.sum){
            s+="+";
        }else if(self.type==eqtype.product){
            s+="\\cdot ";
        }else if(self.type==eqtype.equality){
            s+="=";
        }else if(self.type==eqtype.power){
            s+="^";
        }else if(self.type==eqtype.fraction){
            s+="}{";
        }else if(self.type==eqtype.fn){
            if(second){
                s+=",";
            }
        }else{
            s+=",";
        }
        if(self.type==eqtype.power){
            if(typeof e == "string"){
                var _s=e.getLatex(0);
                if(_s.length>1){
                    s+="{";
                    s+=_s;
                    s+="}";
                }else{
                    s+=_s;
                }
            }else{
                s+="{";
                s+=e.getLatex(0);
                s+="}";
            }
        }else if(e.type==eqtype.fn || e.type==eqtype.fraction || e.type==eqtype.product){
            s+=e.getLatex(0);
        }else{
            s+=e.getLatex(1);
        }
        s+=afterme;
        afterme="";
    }
    s+=endchar;
    endchar="";
    if(braces){
        s+=")";
    }
    return s;
};
String.prototype.getString=function(__ignore,javascript){
    if(javascript && window.app){
        var self=dirty(this.toString());
        if(self=="x"||self=="y"){
            return self;
        }
        if(app.variables[self]){
            return "app.variables["+JSON.stringify(self)+"]";
        }
        if(window[self]){
            return self;
        }
        return "app.variables["+JSON.stringify(self)+"]";
    }
    return this.toString();
};
Number.prototype.getString=function(){
    return this.toString();
};
function diff(x){
    return p(x).differentiate();
}
function int(x){
    return p(x).integrate();
}
function text(e){return e.toString()}
Array.prototype.getString=function(braces,javascript){
    var s=braces?"(":"";
    var self=this;
    var _first=true;
    var endchar="";
    var afterme="";
    var second=true;
    //this.forEach(function(e){
    for(var i=0;i<this.length;i++){
        var e=this[i];
        if(!_first){
            second=false;
        }
        if(_first){
            if(javascript && self.type==eqtype.power){
                s+="pow(";
                endchar=")";
            }
            if(!javascript && self.type==eqtype.pm){
                s+="±";
            }
            else if(braces && self.type==eqtype.discretevector){
                s+="[";
                endchar="]";
            }
            else if(self.type==eqtype.fn){
                if(typeof e !="string" && typeof e!="function"){
                    throw(messages.fnnamenotstring);
                    return "ERROR";
                }
                if(functions.indexOf(e)==-1){
                    var _found=false;
                    if(window && window.app && window.app.variables && window.app.variables[e] && typeof window.app.variables[e]=="function"){
                        _found=true;
                    }
                    if(!_found){
                        throw("Unknown function: "+e);
                        return "ERROR";
                    }
                }
                afterme="(";
                endchar=")";
            }
            _first=false;
        }else if(self.type==eqtype.sum){
            s+="+";
        }else if(self.type==eqtype.product){
            s+="*";
        }else if(javascript && self.type==eqtype.power){
            s+=",";
        }else if(self.type==eqtype.equality){
            s+="=";
        }else if(self.type==eqtype.power){
            s+="^";
        }else if(self.type==eqtype.fraction){
            s+="/";
        }else if(self.type==eqtype.fn){
            if(second){
                s+=",";
            }
        }else{
            s+=",";
        }
        if(e.type==eqtype.discretevector){
            s+=e.getString(0,javascript);
        }else{
            s+=e.getString(10,javascript);
        }
        
        s+=afterme;
        afterme="";
    }
    s+=endchar;
    endchar="";
    if(braces){
        s+=")";
    }
    return s;
};


functions="sin,cos,tan,sec,cot,csc,cosec,log,exp,pow,Gamma,sinc,sqrt,W,fact,bellb,Zeta,u,doublefact,signum,asin,acos,atan,arcsin,arccos,arctan,tg,ln,abs,floor,round,ceil,atan2,random,min,max,clear,text,shaw,delta,Γ,ψ,diff,int".split(",");

window._i=33;
var known_derivatives={
    "sqrt":p("1/(2*sqrt(x))"),
    "log":p("1/x"),
    "sin":p("cos(x)"),
    "cos":p("-sin(x)"),
    "tan":p("1/(cos(x)*cos(x))"),
    "exp":p("exp(x)"),
    "floor":p("shaw(x)"),
    "u":p("delta(x)"),
    "asin":p("1/sqrt(1-x^2)"),
    "acos":p("-1/sqrt(1-x^2)"),
    "fact":p("Γ(x+1)*ψ(x+1)"),
    "doublefact":p("0.25*x!!*(2*ψ(x/2+1)+pi*log(2/pi)*sin(pi*x)+log(4))"),
    "Gamma":p("Γ(x)*ψ(x)"),
    "Γ":p("Γ(x)*ψ(x)")
};
var known_inverses={
    "sqrt":p("x^2"),
    "log":p("e^x"),
    "sin":p("asin(x)"),
    "cos":p("acos(x)"),
    "tan":p("atan(x)"),
    "exp":p("log(x)"),
    "floor":p("floor(x+1)"),
    "u":p("(2x-1)^Infinity"),
    "asin":p("sin(x)"),
    "acos":p("cos(x)"),
    "atan":p("tan(x)")
};


//p("(random(x)-0.5)");
var _test_debug_simplifer;
if((_test_debug_simplifer=p("(1/(1*x))*(2*1*1*1*2/3*3*0.5)").simplify().getString())!="2/x"){
    alert("Simplifier improvements required: "+_test_debug_simplifer);
}

//"i" can be changed between one and zero to get the real and imaginary part.
//JSON.stringify and parser for lame browsers
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,dreplacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=dreplacer;if(dreplacer&&typeof dreplacer!=='function'&&(typeof dreplacer!=='object'||typeof dreplacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());Array.prototype.remove = function(elem) {  
	var index=this.indexOf(elem);
	if(index!==-1){this.splice(index,1)}
};

String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1);};

var app={};

	//Visible region on screen: (Global so things eval'ed in compile() can access)
    //Maybe all things should be in one object to avoid stuff like this.
var boundleft = -10;
var boundright = 10;
var boundtop = 10;
var boundbottom = -10;

var rmin=0;
var rmax=10;

var overleft,overtop,overbottom,overright;
var width,height;
var gittest=1;

var messages={
    "standalone":"To run this app in fullscreen mode, add it to your home screen.",
    "excanvasfail":"Explorer Canvas failed: quitting.",
    "badbrowser":"Browser not supported",
    "example":"Example",
    "version":"version",
    "type":"Type",
    "add":"Add a new equation/graph",
    "console":"Show Console",
    "help":"Help Page",
    "png":"Take Screenshot Image",
    "reload":"Reset the Graph",
    "showhide":"Show/Hide Graph",
    "config":"Configure"

};

app.config={
    "lineWidth":1.5,
    "pt":true,
    "font":"12px sans-serif"
};
app.ui=(function(){
	var allowdrag=true;//Set using block: and unblock: in the postMessage API.
	var webkit=/[Ww]eb[kK]it/.test(navigator.userAgent);
    if(/(iPhone)/i.test(navigator.userAgent)){
        if(!navigator.standalone){
           alert(messages.standalone);
        }
    }
	var draw;
	var ctx;
	var ptd,con,proto,conin,logt,ul;
    /*
        ptd: (0,0)
        con: Console div
        proto: prototype function li.
        conin: Mathquill input span for console.
        logt: console results div.
    
    */
	function resize(){
	    width=window.innerWidth  || document.body.clientWidth;
	    height=window.innerHeight|| document.body.clientHeight || 120;//120 for iframe default
        logt.style.maxHeight=~~(height-85)+"px";
	    canvas.width = width;
	    canvas.height= height;
	    ctx && draw();
	}
	//Current Mouse coordinates
	var mx = 400;
	var my = 300;

	//Last mouse coordinates
	var lmx=mx;
	var lmy=my;

	var drag;

	var scalex = 64;
	var scaley = scalex;//not always
    var scalez = scalex;//not always


	var gridsize;

	//Location of canvas on screen. While dragging this changes.
	var _cx = 0;
	var _cy = 0;
	
	//Camera position
	var cx = (window.innerWidth || document.body.clientWidth  || 640)/-3;
	var cy = (window.innerHeight|| document.body.clientHeight || 120)*2/3;
	var cz = 10000;


	function draw(){
        //they can be accidentially changed
	    e = Math.E;
	    pi = Math.PI;

	    if (!ctx) {
	        return;
	    }
	    ctx.lineCap = "butt";
        ctx.strokeStyle = ctx.fillStyle = "black";
	    ctx.clearRect(0, 0, width, height);
	    //try{

	    boundleft = cx / scalex;
	    boundright = (width + cx) / scalex;
	    boundbottom = -(height - cy) / scaley;
	    boundtop = cy / scaley;
        
        //This can probably be simplified a bit
        rmax=Math.sqrt(Math.max(boundleft*boundleft+boundbottom*boundbottom,boundbottom*boundbottom+boundright*boundright,boundright*boundright+boundtop*boundtop,boundtop*boundtop+boundleft*boundleft));
        if(boundleft<0 && boundright>0 && boundtop>0 && boundbottom<0){
            rmin=0;
        }else{
            //TODO: Work out the shotest distance from (0,0) to the screen rectangle.
        }
	    gridsize = pow(2, 6 - Math.round(log(scalex) / log(2)));
	    overleft = gridsize * ~~ (boundleft / gridsize) - gridsize;
	    overright = gridsize * ~~ (boundright / gridsize) + gridsize;
	    overtop = gridsize * ~~ (boundtop / gridsize) + gridsize;
	    overbottom = gridsize * ~~ (boundbottom / gridsize) - gridsize;

	    //Draw grid lines
	
		
        ctx.font=app.config.font;
        
	    ctx.strokeStyle = "#888";
        ctx.fillStyle="#888";
	    ctx.lineWidth = 0.1;
        var n=0;
	    for (var x = overleft; x <= overright; x += gridsize / 4) {
	        ctx.beginPath();
	        ctx.move(x, overbottom);
	        ctx.line(x, overtop);
	        ctx.stroke();
	    }
	    for (var y = overbottom; y <= overtop; y += gridsize / 4) {
	        ctx.beginPath();
	        ctx.move(overleft, y);
	        ctx.line(overright, y);
	        ctx.stroke();
	    }
        /*ctx.shadowColor = "rgba(255,255,255,1.0)";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0
        ctx.shadowBlur = 4;*/
        //Like overleft, but in units of 4*gridsize
        var dblleft=gridsize*4 * ~~ (boundleft / (4*gridsize)) - 4*gridsize;
        var dblleft=gridsize*4 * ~~ (boundbottom / (4*gridsize)) - 4*gridsize;
        for(var x=dblleft; x<=overright; x+=gridsize*4){
            if(x!=0){
            ctx.beginPath();
            ctx.arc(scalex*x-cx,cy-scaley*0,2,0,Math.PI*2,true);
            ctx.fill();
            ctx.fillText(x.toFixed(3).replace(/\.?0+$/,""),scalex*x-cx,14+cy-scaley*0);
            }
            
        }
        for(var y=dblleft; y<=overright; y+=gridsize*4){
            if(y!=0){
            ctx.beginPath();
            ctx.arc(-cx,cy-scaley*y,2,0,Math.PI*2,true);
            ctx.fill();
            ctx.fillText(y.toFixed(3).replace(/\.?0+$/,""),10-cx,4+cy-scaley*y);
            }
            
        }
        

        ctx.lineWidth = 0.4;
		for (var x = overleft; x <= overright; x += gridsize) {
			ctx.beginPath();
			ctx.move(x, overbottom);
			ctx.line(x, overtop);
			ctx.stroke();
		}

	    for (var y = overbottom; y <= overtop; y += gridsize) {
			ctx.beginPath();
			ctx.move(overleft, y);
			ctx.line(overright, y);
			ctx.stroke();
		}
        
		ctx.lineWidth=2;
	
		
		ctx.strokeStyle="black";
					
	    ctx.beginPath();
	    ctx.move(overleft,0);
	    ctx.line(overright,0);
	    ctx.stroke();

	    ctx.beginPath();
	    ctx.move(0,overbottom);
	    ctx.line(0,overtop);
	    ctx.stroke();

        

        ctx.lineWidth=app.config.lineWidth;
        graphs.forEach(function(e){
            if(!e.disabled){
                ctx.strokeStyle=ctx.fillStyle=e.color;
                e.plot(ctx);
                if(app.config.fillText && app.config.pt && e.pt){
                    //TODO: duplicate point checking
                    e.pt.forEach(function(pt){
                        ctx.beginPath();
                        var _nx=pt[0].eval();
                        var _ny=pt[1].eval();
                        //console.log(pt);
                        //Stupid Firefox!
                        if(!isNaN(_nx) && !isNaN(_ny) && _ny<overtop && _ny>overbottom && _nx<overright && _nx>overleft){
                            try{
                                ctx.arc(scalex*_nx-cx,cy-scaley*_ny,app.config.lineWidth*2,0,Math.PI*2,true);
                                ctx.fill();
                                var pt_simplified=pt.simplify(0,0,1);
                                var text=undefined;
                                if(pt_simplified[0]===0 && pt_simplified[1]===0){
                                    //empty block
                                }else if(pt_simplified[0]===0){
                                    text=pt_simplified[1].getString(0);
                                }else if(pt_simplified[1]===0){
                                    text=pt_simplified[0].getString(0);
                                }else{
                                    text=pt_simplified.getString(0);
                                }
                                window.z=pt_simplified;
                                if(text!=undefined){
                                    ctx.fillText(utf8_print(text),12+scalex*_nx-cx,cy-scaley*_ny);
                                }
                            }catch(ex){
                                app.ui.console.warn("Could not plot dot: ("+_nx+","+_ny+")");
                            }
                        }
                    });
                }
            }
        });
	    //}catch(ex){}



	}









	var drawwhiledrag_c=0;
	function mousedown(e) {
        if(e.button != 0 || !allowdrag){return;}
	    lmx=mx=e.x || e.pageX;
	    lmy=my=e.y || e.pageY;
	    drag = true;
	    canvas.style.cursor = "url(grabbing.gif), grabbing";
	    if (!drawwhiledrag_c) {
	        setTimeout(drawwhiledrag, 1000);
	        drawwhiledrag_c++;
	    }
	};

	function mousemove(e) {
        if(e.button != 0 || !allowdrag){return;}
	    e = e || window.event;
	    if (e.x !== undefined) {
	        mx = e.x;
	        my = e.y;
	    } else {
	        mx = e.pageX;
	        my = e.pageY;
	    }
	    if(drag){
	        _cx += mx - lmx;
	        _cy += my - lmy;
			if(webkit){
				canvas.style["-webkit-transform"]="translate("+_cx+"px,"+_cy+"px)";
			}else{
				canvas.style.left = _cx + "px";
				canvas.style.top = _cy + "px";
			}
	
	    }
        
        //Last mouse position
	    lmx = mx;
	    lmy = my;
	}
	var scaleconst = 0.001;
	if (/AppleWebKit/.test(navigator.userAgent)) {
	    scaleconst = 0.0001;
	}
    if (/Chrome/.test(navigator.userAgent)) {
	    scaleconst = 0.005;
	}
	if (/Firefox/.test(navigator.userAgent)) {
	    scaleconst = 0.012;
	}
	if (/Opera/.test(navigator.userAgent)) {
	    scaleconst = 0.03
	}
	if (!/Mac OS X/.test(navigator.userAgent)) {
	    scaleconst = 0.01
	}
	function mousewheel(e){
        
        if(!allowdrag){return;}
		e = e || window.event;
	    if (e.x !== undefined) {
	        mx = e.x;
	        my = e.y;
	    } else {
	        mx = e.pageX;
	        my = e.pageY;
	    }
        
        var delta=scaleconst*((e.wheelDeltaY!=undefined)?e.wheelDeltaY:-e.detail);
        if(delta>1.2){
			delta=1.2;
		}else if(delta<-1.2){
			delta=-1.2;
		}
		var ex=Math.exp(delta);
	    scalex*=ex;
	    scaley*=ex;
		/*
		
			nscalex/scalex=exp
			mx =  scalex*px - cx
		
			(mx + cx)/scalex=px
			∆cx =  nscalex*(mx + cx)/scalex - cx - mx
			∆cx =  ex*(mx + cx) - cx - mx
			
			(cy-my)/scaley = py
			
			my +ex*(cy-my) - cy= ∆cy
			
			mx =  - cx
			
		*/
		var dx=mx+cx;
		var dy=my-cy;
		if((dx*dx+dy*dy)>1000){
            //Move camera towards the point if
            //the squared distance to the origin is more than 1000.
			cx=ex*(mx+cx)-mx;
			cy+=my+ex*(cy-my)-cy;
		}
	    draw();
        
        //Prevent browser from scrolling page
        e.preventDefault();
        return false;
	}
	function perform_translation(){
	    cx-=_cx;
	    cy+=_cy;
	    _cx=_cy=0;
		if(webkit){
			canvas.style["-webkit-transform"]="translate(0px,0px)";
		}else{
		    canvas.style.left = _cx + "px";
		    canvas.style.top = _cy + "px";
		}
	}

	function drawwhiledrag() {
	    if (drag) {
	        perform_translation();
	        draw();
	        setTimeout(drawwhiledrag, 1000);
	    }else{
	        drawwhiledrag_c--;
	    }
	}






	function generateJSON(obj){
			var w=document.createElement("ul");
			w.className="json";
			var mode=typeof obj;
			if(obj===null){
				mode="undefined";
			}
			if(mode=="function" && obj.length!=undefined && obj[0]!=undefined){
				mode="object";
			}
			mode=mode.toString();
			switch(mode){
				case "number":

					var fn=document.createElement("span");
					fn.appendChild(document.createTextNode(obj));
					w.appendChild(fn);
					return w;

					break;
				case "string":
					var fn=document.createElement("strong");
					fn.appendChild(document.createTextNode("\""+obj+"\""));
					w.appendChild(fn);
					return w;

				break;
				case "boolean":
					w.appendChild(document.createTextNode(obj));
					return w;

				break;
				case "undefined":
				case "function":
					var fn=document.createElement("i");
					if(obj===undefined){

						fn.appendChild(document.createTextNode("undefined"));
					}else if(obj===null){

						fn.appendChild(document.createTextNode("null"));
					}else{

						fn.appendChild(document.createTextNode(obj.toString()));
					}
					w.appendChild(fn);
					return w;
				break;

				case "object":
				var found=false;

	function do_loop(i){

		var li=document.createElement("li");

		var m2=typeof obj[i];
		if(obj[i]===null || obj[i]===undefined){
			m2="undefined";
		}

		switch(m2){

			case "function":
			case "object":

				var b=document.createElement("b");

				b.appendChild(document.createTextNode(i+": "));

				var div=document.createElement("div");

				div.appendChild(b);
				div.appendChild(document.createTextNode((typeof(obj[i])).capitalize()));
				li.appendChild(div);
				li.obj=obj[i];

				var children=document.createElement("div");
				children.className="child";
				li.appendChild(children);
				li.done=false;
				li.className="hide";

				li.addEventListener("click",function(e){
					e.stopPropagation();
					if(this.className=="show"){
						this.className="hide";
						return;
					}

					this.className="show";
					if(!this.done){
						this.getElementsByClassName("child")[0].appendChild(generateJSON(this.obj));
						this.done=true;
					}

					return false;
				},false);

				break;
			default:

				var b=document.createElement("b");
				li.className="end";
				b.appendChild(document.createTextNode(i+": "));

				li.appendChild(b);
				var str=obj[i];
				if(m2=="undefined"){
					var strong=document.createElement("i");
					strong.appendChild(document.createTextNode(str));
					li.appendChild(strong);
				}else if(m2=="boolean"){
					li.appendChild(document.createTextNode(str));
				}else if(m2=="string"){
					var strong=document.createElement("strong");
					strong.appendChild(document.createTextNode("\""+str+"\""));
					li.appendChild(strong);
				}else if(m2=="number"){
					var strong=document.createElement("span");
					strong.appendChild(document.createTextNode(str));
					li.appendChild(strong);
				}else {
					li.appendChild(document.createTextNode(str));
				}



		}
		w.appendChild(li);
	}
        if(obj.__proto__!=Array.prototype){
            for(i in obj){
                found=true;
                do_loop(i);
            }
        }
	    if(!found){
	        if(obj.length!==undefined){
	            for(var i=0;i<obj.length;i++){
	                found=true;
	                do_loop(i);
	            }
	            if(!found){
	                w.appendChild(document.createTextNode(obj));
	                return w;
	            }
	        }else{
	            w.appendChild(document.createTextNode(obj));
	            return w;
	        }
	    }
	    break;
	    default:


	    }
	return w;

	}
	
	var ui={
    "remove":function(n){
        if(!ul){
			ul=document.getElementById("graphs");
		}
        ul.removeChild(n);
    },"png":function(){
        window.location=canvas.toDataURL("image/png");
    },"add":function(n){
		var li=proto.cloneNode(true);
		li.id="eq-"+n.gid;
    $(li).find(":checkbox").attr('checked', !n.disabled);
		if(!ul){
			ul=document.getElementById("graphs");
		}
		ul.appendChild(li);
		var inputbox = li.getElementsByClassName("matheditor")[0];
        var warn_ = li.getElementsByTagName("aside")[0];
        var b_=li.firstChild;
        var check_=li.firstChild.firstChild;
        var delete_=li.getElementsByClassName("delete")[0];
		inputbox.appendChild(document.createTextNode(n.equation||""));
        check_.addEventListener("change",function(e){
            for(var i=0;i<graphs.length;i++){
                if(graphs[i].gid==n.gid){
                    graphs[i].disabled=!check_.checked;
                    draw();
                    break;
                }
            }
        },false);
        
        b_.style.backgroundColor=n.color;
        
        //The below code is for focusing on the mathquill when clicking to the right of it. It doesn't work with the latest mathquill. (2011-04-03)
		//inputbox.addEventListener("mouseup",function(e){e.stopPropagation();},false);
		
        //b_.addEventListener("mouseup",function(e){e.stopPropagation();},false);
        
        /*li.addEventListener("mouseup",function(e){
			$(inputbox).trigger({ type: "keydown", ctrlKey: true, which: 65 });
			$(inputbox).trigger({ type: "keydown", which: 39 });
            $(inputbox).focus();
		},false);
        */
        
        delete_.addEventListener("mouseup",function(e){app.remove(li);e.stopPropagation();},false);
        
		$(inputbox).mathquill("editable");
		//$(inputbox).mathquill("redraw");
        
        $(inputbox).bind("keydown keyup",
        function(){
            for(var i=0;i<graphs.length;i++){
                if(graphs[i].gid==n.gid){
                    
                    
                    
        
                   
        
                    var l__=$(inputbox).mathquill("latex");
					
                    graphs[i].equation=l__;
                    try{
                        var c=compile(l__);
                    }catch(ex){
                         
                        warn_.firstChild.nodeValue=messages.error+": "+JSON.stringify(ex).toString();
                        warn_.style.display="block";
                        return;
                    }
                    warn_.firstChild.nodeValue="";
                    warn_.style.display="none";
                    for(k in c){
                        if(c.hasOwnProperty(k)){
                            graphs[i][k]=c[k];
                        }
                    }
                    /*
                    graphs[i].f=c.f;
                    graphs[i].plot=c.plot;
                    graphs[i].math=c.math;
                    graphs[i].xc=c.xc;
                    graphs[i].yc=c.yc;
                    graphs[i].xs=c.xs;
                    graphs[i].ys=c.ys;
                    */
                    draw();
                    break;
                }
            }
        });
		if(!n.auto){
            $(inputbox).trigger({ type: "keydown", ctrlKey: true, which: 65 });
			$(inputbox).focus();
        }
		
        warn_.firstChild.nodeValue="";
        warn_.style.display="none";
		return li;
	},
	"colors":{
		"free":("#000,#f08,#8f0,#80f,#880,#088,#808,#0ff,#f80,#f0f,#0a0,#f00,#07c".split(",")),
	},
	"refresh":function(){
        if(draw){
            draw();
        }
    },"block":function(block_it){
        if(block_it != undefined) {
            allowdrag=block_it?false:true;
        } else {
            return !!allowdrag;
        }
    },"legend":function(show_legend){
        if(show_legend !== undefined) {
            $("#funcs").toggle(!!show_legend);
        } else {
            return $("#funcs:visible").length > 0
        }
    },"get_scale":function() {
        return [scalex,scaley,scalez];
    },"set_scale":function(x,y,z){
        scalex=x||1;
        scaley=y||x||1;
        scalez=y||x||1;
        draw();
    },"scale":function(x,y,z){
        scalex*=x||1;
        scaley*=y||x||1;
        scalez*=y||x||1;
        draw();
    },"button":function(value,show) {
      if(show !== undefined) {
        $(".buttons input[value='" + value + "']").toggle(!!show);
      } else {
        return $(".buttons input[value='" + value + "']:visible").length > 0;
      }
    },"translate":function(x,y,z){
        cx+=x||0;
        cy+=y||0;
        cz+=z||0;
        draw();
    },"get_camera":function() {
        return [cx,cy,cz];
    },"set_camera":function(x,y,z){
        cx=x;
        cy=y;
        cz=z;
        draw();
    },"center":function(x,y,z){
        cx=scalex*(x||0)-width/2;
        cy=scaley*(y||0)+height/2;
        cz=scalez*(z||0)-width/2;
        draw();
    },"init":function(fullscreen){
		(new Image()).src="grabbing.gif";
		canvas=document.createElement("canvas");
		if(fullscreen){
			canvas.width=window.innerWidth;
			canvas.height=window.innerHeight;
		}
		document.body.appendChild(canvas);
		if(canvas.getContext){
			ctx=canvas.getContext("2d");
		}else{
			if(!ctx && G_vmlCanvasManager){
                //Explorer canvas. Currently doesn't work because
                //the parser is too much for ie. But we will
                //try to fix that in a parser rewrite.
                G_vmlCanvasManager.initElement(el);
                if(canvas.getContext){
                    ctx = canvas.getContext("2d");
                }else{
                    alert(messages.excanvasfail);
                }
            }else if(!ctx){
                alert(messages.badbrowser);
                return;
            }
		}
		if(!app.config.fillText){
            app.config.fillText=ctx.fillText?true:false;
        }
		canvas.style.background="white";
		canvas.style.cursor = "default";
		canvas.style.position="fixed";
		
		ptd=document.createElement("div");
        ptd.id="ptd";
		ptd.className="monospace";
		ptd.appendChild(document.createTextNode("(0,0)"));
        //DEBUG
        ptd.style.display="none";
		document.body.appendChild(ptd);
        if(!fullscreen){
            ptd.style.display="none";
        }
		
		con=document.createElement("div");
		con.id="con";
		con.className="overlay";
		con.style.display="none";
        
        logt=document.createElement("div");
        logt.id="logt";
        logt.className="monospace";
        con.appendChild(logt);
        
        var conin_=document.createElement("span");
        conin_.id="conin";
        con.appendChild(conin_);
        
        
		document.body.appendChild(con);
        
		conin=document.getElementById("conin");
        $(conin).mathquill("editable");
		//$(conin).mathquill("redraw");
        
		conin.addEventListener("keydown",function(event){
			if(event.which==13){
                try{
                var needsredraw=false;
                conin.last=$(conin).mathquill("latex");
                var out=p_latex(conin.last).simplify();
                if(out.type==eqtype.equality){
                    if(typeof out[0]=="string"){
                        if(out[0]=="e" || out[0]=="pi"){
                            throw(MessageStrings.protected);
                            return;
                        }
                        app.variables[out[0]]=out[1].eval();
                        needsredraw=true;
                    }
                }
                var can_eval_code=out.canEval();
                if(can_eval_code==false || can_eval_code==2){
                    app.ui.console.log(((out.getString().markup())));
                }else{
                    app.ui.console.log(generateJSON(usr.eval(out.getString(0,1))));
                }
                $(conin).mathquill("latex","");
                if(needsredraw){
                    draw();
                }
                }catch(ex){
                    app.ui.console.warn(ex.toString());
                }
			}
			else if(event.which==38 && event.shiftKey){
                if(!/\\[a-z]*|[^\s]/ig.test(conin.last)){
                    conin.last=" ";
                }
                $(conin).mathquill("latex",conin.last);
			}
		},false);

		var funcs=document.createElement("div");
		funcs.className="overlay";
		funcs.id="funcs";
        if(!fullscreen){
            funcs.style.display="none";
        }
		var _ul=document.createElement("ul");
		_ul.id="graphs";
		funcs.appendChild(_ul);
		
		var _proto=document.createElement("li");
		var _proto_div=document.createElement("div");
        var _proto_warn=document.createElement("aside");
        _proto_warn.appendChild(document.createTextNode("fail"));
        
		_proto_div.className="b";
		_proto_div.style.backgroundColor="#07c";
		var _proto_input=document.createElement("input");
		_proto_input.type="checkbox";
		_proto_input.checked="checked";
        _proto_input.title=messages.showhide;
		_proto_div.appendChild(_proto_input);
		
		
		var _proto_math=document.createElement("span");
		_proto_math.className="matheditor";
		var _proto_del=document.createElement("span");
		_proto_del.className="delete";
        _proto.appendChild(_proto_div);
		_proto.appendChild(_proto_math);
		_proto.appendChild(_proto_del);
		_proto.appendChild(_proto_warn);
		var buttons=document.createElement("div");
		buttons.className="buttons";
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value="+";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.add;
        newfuncbtn.onclick=function(){app.add()};
        buttons.appendChild(newfuncbtn);
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value=">_";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.console;
        newfuncbtn.onclick=function(){app.console()};
        buttons.appendChild(newfuncbtn);
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value=".png";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.png;
        newfuncbtn.onclick=function(){app.png()};
        buttons.appendChild(newfuncbtn);
        
        if(app.view_configured != false) {
          var newfuncbtn=document.createElement("input");
          newfuncbtn.value="reload";
          newfuncbtn.type="button";
          newfuncbtn.title=messages.reload;
          newfuncbtn.onclick=function(){location.reload()};
          buttons.appendChild(newfuncbtn);
        }
        if(app.view_configured==undefined && false) {
          var newfuncbtn=document.createElement("input");
          newfuncbtn.value="config";
          newfuncbtn.type="button";
          newfuncbtn.title=messages.config;
          newfuncbtn.onclick=function(){app.ui.modalConfig()};
          buttons.appendChild(newfuncbtn);
        }
        
        var alink=document.createElement("a");
        alink.href="about/";
        alink.target="_blank";
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value="";
        newfuncbtn.style.textDecoration="none";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.help;
        
        alink.appendChild(newfuncbtn);
        buttons.appendChild(alink);
        
        funcs.appendChild(buttons);
		document.body.appendChild(funcs);
		proto = _proto.cloneNode(true);
		proto.removeAttribute("id");

		canvas.onmousedown=mousedown;
		
		document.body.addEventListener("mouseup",function(){if(!allowdrag){return;}drag=false;perform_translation();canvas.style.cursor = "default";draw()},false);
		document.body.addEventListener("mousemove",mousemove,false);
		   	   window.addEventListener("mousewheel",mousewheel,false);
               window.addEventListener("DOMMouseScroll",mousewheel,false);
               window.addEventListener("resize",resize,false);
        con.addEventListener("mousewheel",function(e){e.stopPropagation();},false);
		document.body.removeChild(document.body.firstChild);
		//we may have to implement scaling if browsers don't work properly
        if(webkit){
		ctx.move=function(px,py,pz){
			return ctx.moveTo(scalex*px-cx,cy-scaley*py);
		};
        
		ctx.line=function(px,py,pz){
			return ctx.lineTo(scalex*px-cx,cy-scaley*py);
		};
        }else{
            ctx.move=function(px,py,pz){
            if(isNaN(px) || isNaN(py)){
                return;
            }
            if(px>overright){
                px=overright;
            }
            if(px<overleft){
                px=overleft;
            }
            if(py>overtop){
                py=overtop;
            }
            if(py<overbottom){
                py=overbottom;
            }
			return ctx.moveTo(scalex*px-cx,cy-scaley*py);
			return;
			if (!isNaN(py)) {
				if (py > boundtop*4) {
					ctx.moveTo(scalex*(px-cx), scaley*(cy-boundtop*4));
					return;
				} else if (py < boundbottom*4) {
					ctx.moveTo(scalex*(px-cx), scaley*(cy-boundbottom*4));
					return;
				}
				ctx.moveTo(scalex*(px+cx), scaley*(-cy-py));
			}
		};
        
		ctx.line=function(px,py,pz){
            if(isNaN(px) || isNaN(py)){
                return;
            }
            if(px>overright){
                px=overright;
            }
            if(px<overleft){
                px=overleft;
            }
            if(py>overtop){
                py=overtop;
            }
            if(py<overbottom){
                py=overbottom;
            }
			return ctx.lineTo(scalex*px-cx,cy-scaley*py);
			ctx.lineTo(scalex*px-cx, cy-scaley*py);
			return;
			if (!isNaN(py)) {
				if (py > boundtop *4) {
					ctx.lineTo(scalex*(px-cx), scaley*(cy-boundtop*4));
					return;
				} else if (py < boundbottom *4) {
					ctx.lineTo(scalex*(px-cx), scaley*(cy-boundbottom*4));
					return;
				}
				ctx.lineTo(scalex*(px-cx), scaley*(cy-py));
			}
		};
        
        
        
        }
		resize();
	}//end init();
	};//end ui
	

	//Is console visible:
	var _console=false;
    ui.modalConfig=function(){
        alert("Settings Panel Not Implemented Yet");
    };
	ui.console={"show":function(){
        con.style.display="block";
        _console=true;
    },"clear":function(){
        while(logt.firstChild){
            logt.removeChild(logt.firstChild);
        }
        return "Cleared";
	},"hide":function(){
        con.style.display="none";
        _console=false;
	},"toggle":function(){
        if(!_console){
            app.ui.console.show();
            $(conin).focus();
            return;
		}
        app.ui.console.hide();
    },"warn":function(x,noshow){
        var div=document.createElement("div");
        var warn=document.createElement("div");
        warn.className="warn";
        div.appendChild(warn);
        div.style.minHeight="23px";
        if(typeof x !="object"){
            div.appendChild(document.createTextNode(x));
        }else{
            div.appendChild(x);
		}
        logt.appendChild(div);
        if(!noshow && !_console){
			app.ui.console.show();
		}
        logt.scrollTop=1e8;    
    },"log":function(x,noshow){
        if(typeof x !="object"){
            var div=document.createElement("div");
            div.appendChild(document.createTextNode(x));
            logt.appendChild(div);
        }else{
            logt.appendChild(x);
		}
        if(!noshow && !_console){
			app.ui.console.show();
		}
        logt.scrollTop=1e8;

	}};
	
	return ui;
})();

function clear(){
    return app.ui.console.clear();
}var usr=(function(){
var usr={"eval":function(_____d){
    return eval(_____d);
},"clear":function(){return app.ui.console.clear();}};

return usr;
})();

var graphs=[];

function track(event) {
    //Google Analytics. If anyone wants access to the
    //data, I can give your google account permssion.
  if (window.pageTracker) {
    setTimeout(function () {
      pageTracker._trackEvent("Graph", event)
    }, 20)
  }
};

randfuncs = "y=x^2@y^2=1-x^2@2e^{-x}@2x+3@\\frac{d}{dx}\\left(\\frac{1}{x}\\right)@\\int x.dx@\\frac{d}{dx}\\left(sin\\left(x\\right)\\right)@\\lambda=3@e^{-\\lambda\\cdot x}@\\left|x^2-4\\right|+2@\\frac1x@x^{-2}@x!@\\ln x@\\sum_{n=1}^{\\infinity}\\frac{x^n}{n}@\\sin x@\\tan\\left(x\\right)@\\left(x-2\\right)^2@\\Gamma\\left(x\\right)@\\sqrt x".split("@");

var randfunc_index = 0;

//Not actually random.
function randfunc() {
	return randfuncs[(randfunc_index++) % randfuncs.length];
}


function compile(n){
    //eq is the equation (CAS)
    var eq;
    if(typeof n=="string"){
        //n is latex. Make it not.
        n=clean(n);
    }
    eq=p(n);
    //dependence is an array of variables that eq should be updated on changes.
    var dependence=eq.dependence?eq.dependence():[];
    eq=eq.simplify();
    
    //Functions of x
    
    var funcs=[];
    
    //Functions of y
    var yfuncs=[];
    
    //Functions of theta
    
    //Functions of r
    var rfuncs=[];
    
    //Defenitions of functions defined by the graph. i.e. "f(x)=x" will defined funcdefs.f
    var funcdefs={};
    
    //Variables defined. Similar to above funcdefs.
    var vars={};
    
    //Variables changed in the process of this compile()
    var changed=[];
    
    if(eq.type==eqtype.equality){
        if(typeof eq[0]=="string"){
            if(eq[0]=="y"){
                //y=f(x)
                
                //TODO: check the f(y) does not depend on y.
                funcs.push(eq[1]);
            }else if(eq[0]=="x"){
                //x=f(y)
                
                //TODO: check the f(y) does not depend on x.
                yfuncs.push(eq[1]);
            }else if(dirty(eq[0])=="theta"){
                rfuncs.push(eq[1]);
            }else if(eq[0]!=""){
                //a *variable* is defined by this graph. Add it to vars.
                var varname=dirty(eq[0]);
                vars[varname]=eq[1].eval();
                if(isNaN(vars[varname])){
                    throw(MessageStrings.nonconstantconstant);
                }
                changed.push(varname);
            }
        }else if(eq[0].length==2 && eq[0].type==eqtype.fn && typeof eq[0][0]=="string" && typeof eq[0][1]=="string"){
            //name(x)=...
            //Add it to funcdefs.
            var mm=eq[1].dreplace(eq[0][1],"x").simplify();
            var jsc=mm.getString(0,true);
            funcdefs[eq[0][0]]=new Function("x","return "+jsc);
            //funcdefs[eq[0][0]]=eval("("+"function(x){return "+jsc+";})");
            funcdefs[eq[0][0]].math=mm;
            
            //Trigger changes soon.
            changed.push(eq[0][0]);
            
        }else if(eq[0].search("y")){
            //If LHS has a y
            
            try{
                //Rearrange so that LHS=y, then push RHS to funcs.
                funcs.push(eq[0].dreplace(/^y$/g,"x").simplify().inverses().simplify().dreplace(/x/g,eq[1].simplify()));
            }catch(ex){
                //Could not rearrange.
                //TODO: try wolfram alpha API maybe.
                //TODO: otherwise, use a discrete/trial-and-error method.
                throw("CAS: "+ex);
            }
        }else{
            //No y on lhs.
            //TODO: search for an x on the LHS, and do something similar to above, 
            //      but for yfuncs.
            
            throw("CAS: Failure");
        }
    }else{
        if(eq.simplify){
            eq=eq.simplify();
        }
        funcs.push(eq);
    }
    
	var ret={"f":function(){throw("Not a function");}};
    
    var builder="";//Javascript code (body) for the plot() function.
    
    //Create an empty vector which will contain vectors as components.
    //TODO: just use an array of vectors. Simpler.
    ret.pt=[].setType(eqtype.discretevector);
    
    //Singularites
    
    //Singularites arise from:
    // Division by zero
    //   * Logs
    // ->± Infinity
    // What else?
    var first=true;
    if(funcs.length){
        for(var i=0;i<funcs.length;i++){
            
            var fn=funcs[i].simplify();
            
            //Get javascript expression.
            var jsc=fn.getString(0,true);
            if(first){
                //ret.f=eval("("+"function(x){return "+jsc+";})");
                //The first value of a multi-valued function shall be its
                //primary value.
                
                ret.f=new Function("x","return "+jsc);
                first=false;
            }
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                
                //We don't care about singularites way out there:
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    //when debugging we want to see the error
                    throw(ex);
                }
            }
            
            //begin the path. Colour (fill and stroke) is already done for us in ui.js
            builder+="ctx.beginPath();var x=boundleft;ctx.move(x,"+jsc+");";
            if(0 && singularities.length){
                //Better plot logic.
                //For example, this would allow us to plot y=sqrt(1-x^2) from [-1,1] exactly with no abrupt endings.
            
            }else{
                //The loop is within the function because calling a function is too slow in javascript (last time I checked)
                //Plot each point: (jsc is the expression generated by CAS)
                builder+="for(var x=boundleft;x<boundright;x+=(boundright-boundleft)/width){"+"ctx.line(x,"+jsc+");}ctx.stroke();";
            }
            
            try{
                //Find stationary points:
                var rts=fn.differentiate().simplify().roots();
                for(var r=0;r<rts.length;r++){
                    var array=[0,0].setType(eqtype.discretevector);
                    //console.log(fn.getString());
                    
                    array[0]=rts[r];
                    array[1]=fn.dreplace("x",array[0]).simplify();
                    
                    ret.pt.push(array);
                }
            }catch(ex){
                if(__debug(0 && 1,0)){
                    throw(ex);
                }
            }
            
            try{
                var array=[0,0].setType(eqtype.discretevector);
                //console.log(fn.getString());
                //Find y intercept(s). I.e. f(0), or just work for multi-valued functions.
                array_math=fn.dreplace(/^x$/,0);
                array[1]=array_math.simplify();
                //.getString(0,1,1);
                
                ret.pt.push(array);
                
                try{
                //Find x-intercepts.
                var rts=fn.roots();
                for(var rid=0;rid<rts.length;rid++){
                    var array=[0,0].setType(eqtype.discretevector);
                    array[0]=rts[rid].simplify();;
                    //.getString(0,1,1);
                    ret.pt.push(array);
                }
                }catch(ex){
                    //could not find roots using cas.
                    
                    //Use wolfram alpha? (needs to be async)
                    //Use newtons method:
                
                }
                
                //console.log("ok");
                //ret.xc.push(funcs[i].inverse().dreplace(/^x$/,0).simplify().simplify());
            }catch(ex){
                //alert(ex);
            }
    
        }
    }
    
    if(yfuncs.length){
        for(var i=0;i<yfuncs.length;i++){
            
            var fn=yfuncs[i].simplify();
            
            //Get javascript expression.
            var jsc=fn.getString(0,true);
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                
                //We don't care about singularites way out there:
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    //when debugging we want to see the error
                    throw(ex);
                }
            }
            
            //begin the path. Colour (fill and stroke) is already done for us in ui.js
            builder+="ctx.beginPath();var y=boundbottom;ctx.move("+jsc+",y);";
            if(0 && singularities.length){
                //Better plot logic.
                //For example, this would allow us to plot y=sqrt(1-x^2) from [-1,1] exactly with no abrupt endings.
            
            }else{
                //The loop is within the function because calling a function is too slow in javascript (last time I checked)
                //Plot each point: (jsc is the expression generated by CAS)
                builder+="for(var y=boundbottom;y<boundtop;y+=(boundtop-boundbottom)/height){"+"ctx.line("+jsc+",y);}ctx.stroke();";
            }
            
            try{
                //Find stationary points:
                var rts=fn.dreplace("y","x").differentiate().simplify().roots();
                for(var r=0;r<rts.length;r++){
                    var array=[0,0].setType(eqtype.discretevector);
                    //console.log(fn.getString());
                    
                    array[0]=rts[r];
                    array[1]=fn.dreplace("x",array[0]).simplify();
                    
                    ret.pt.push(array);
                }
            }catch(ex){
                if(__debug(0 && 1,0)){
                    throw(ex);
                }
            }
            
            try{
                var array=[0,0].setType(eqtype.discretevector);
                //console.log(fn.getString());
                //Find y intercept(s). I.e. f(0), or just work for multi-valued functions.
                array_math=fn.dreplace(/^y$/,0);
                array[0]=array_math.simplify();
                //.getString(0,1,1);
                
                ret.pt.push(array);
                
                try{
                //Find x-intercepts.
                var rts=fn.roots();
                for(var rid=0;rid<rts.length;rid++){
                    var array=[0,0].setType(eqtype.discretevector);
                    array[0]=rts[rid].simplify();;
                    //.getString(0,1,1);
                    ret.pt.push(array);
                }
                }catch(ex){
                    //could not find roots using cas.
                    
                    //Use wolfram alpha? (needs to be async)
                    //Use newtons method:
                
                }
                
                //console.log("ok");
                //ret.xc.push(funcs[i].inverse().dreplace(/^x$/,0).simplify().simplify());
            }catch(ex){
                //alert(ex);
            }
    
        }
    }
    
    
    if(rfuncs.length){
        for(var i=0;i<rfuncs.length;i++){
            
            var fn=rfuncs[i].simplify();
            
            //Get javascript expression.
            var jsc=fn.getString(0,true);
            jsc=jsc.replace(/app\.variables\[\"(x|y|z|r|theta)\"\]/g,"$1");
            if(first){
                //ret.f=eval("("+"function(x){return "+jsc+";})");
                //The first value of a multi-valued function shall be its
                //primary value.
                
                ret.f=new Function("r","return "+jsc);
                first=false;
            }
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                
                //We don't care about singularites way out there:
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    //when debugging we want to see the error
                    throw(ex);
                }
            }
            
            //begin the path. Colour (fill and stroke) is already done for us in ui.js
            builder+="ctx.beginPath();var r=0;ctx.move(r,"+jsc+");";
            if(0 && singularities.length){
                //Better plot logic.
                //For example, this would allow us to plot y=sqrt(1-x^2) from [-1,1] exactly with no abrupt endings.
            
            }else{
                //The loop is within the function because calling a function is too slow in javascript (last time I checked)
                //Plot each point: (jsc is the expression generated by CAS)
                /*
                  We want to plot all points (x,y) ∈ ([boundleft,boundright],[boundbottom,boundtop])
                  r*(sin(x),cos(y)) ∈ (r*cos[boundleft,boundright],r*sin[boundbottom,boundtop])
                
                  x=r.cos(f(r)), y=r.sin(f(r))
                  
                  
                  f(r)=acos(x/r)
                  y=r.sin(acos(x/r))
                  r=atan(y/x)
                
                  y=r.sin(f(atan(y/x)))
                  asin(y/r)=f(atan(y/x))
                */
                builder+="var rinc=(rmax-rmin)/width;for(var r=rmin;r<rmax;r+=rinc){var thtmp=("+jsc+");ctx.line(r*cos(thtmp),r*sin(thtmp));}ctx.stroke();";
            }
            
        }
    
    }
    //Add our vars and funcdefs to the global CAS variables (app.variables)
    //TODO: should not be app, but cas.variables. (javascript-cas will support variables natively someday)
    if(window && window.app && window.app.variables){
        for(i in vars){
            if(vars.hasOwnProperty(i)){
                if(i=="e" || i=="pi"){
                    throw(MessageStrings.protected);
                    return;
                }
                window.app.variables[i]=vars[i];
            }
        }
        for(i in funcdefs){
            if(funcdefs.hasOwnProperty(i)){
                if(functions.indexOf(i)!=-1){
                    throw(MessageStrings.protected);
                    return;
                }
                window.app.variables[i]=funcdefs[i];
            }
        }
    }
    
    //Give out this stuff. It probably won't be used anyway.
    ret.math=funcs;
    ret.funcdefs=funcdefs;
    ret.vars=vars;
    
    //This will be searched on window.app.refresh()
    ret.dependence=dependence;
    
    //This will be called from ui.js. Currently, all graphs share a context. I think this is sufficent, but it may not be.
	ret.plot=new Function("ctx",builder);
    
    //Trigger all changes
    if(window && window.app && window.app.refresh){
        window.app.refresh(changed);
    }
	return ret;
	
}




//function management


var Graph=function(n,disabled){
	var latex=n;
	var auto=0;
	if(n){
		auto=true;
	}else{
        //Sample function
		latex=randfunc();
	}
	var t={};
    var c=compile(latex);
    
    //Copy properties (we will extend the object)
    //TODO: why don't we just use t=c? lol
    for(i in c){
        if(c.hasOwnProperty(i)){
            t[i]=c[i];
        }
    }
    //For debugging purposes. I think.
	t.equation=latex;
    //Graph id: random
	t.gid=random_hash();
  t.disabled=disabled;
	t.color=app.ui.colors.free.pop();
    if(t.color==undefined){
        //We ran out of colours!
        t.color="#000";
    }
	if(auto){t.auto=true;}
    
    //Create html <li> node.
	t.node=app.ui.add(t);
    
	return t;
};
//CAS variables.
//TODO: use cas.variables in javascript-cas.
app.variables={};

//Updated automatically by shell script.
app.version="53a881a";
app.add=function(n,disabled){
    var graph = new Graph(n,disabled);
    graph.disabled = disabled;
	graphs.push(graph);
    track("New");
    app.ui.refresh();
};
app.png=function(){
    app.ui.png();
};
app.console=function(){
    app.ui.console.toggle();
};
app.get_state=function() {
  var res = {};
  res.graphs = {};
  $.each(graphs, function() {
    res.graphs[this.equation] = !this.disabled ? 1 : 0;
  });
  res.scale = $.map(app.ui.get_scale(), function(i) { return parseInt(i); });
  res.camera = $.map(app.ui.get_camera(), function(i) { return parseInt(i); });
  res.legend = app.ui.legend() ? 1 : 0;
  res.block = app.ui.block() ? 1 : 0;
  return res;
}

//TODO: a name like mathDidChange would be much more appropriate
app.refresh=function(changes){
    var redraw=false;
    for(var i=0;i<graphs.length;i++){
        for(var d=0;d<graphs[i].dependence.length;d++){
            if(changes.indexOf(graphs[i].dependence[d])!=-1){
                //app.ui.console.log("auto-update");
                var c=compile(graphs[i].equation);
                //Copy properties from c to graphs[i]
                for(_k in c){
                    if(c.hasOwnProperty(_k)){
                        graphs[i][_k]=c[_k];
                    }
                }
                redraw=true;
            }
        }
    
    }
    if(redraw){
        //This is an actual refresh, see above TODO.
        app.ui.refresh();
    }
};
app.remove=function(n){
    if(typeof n !="string"){
        //Remove a function by html node id.
        var id = n.id.substring(3);
        app.ui.remove(n);
        n=id;
    }
    //Now n is a gid.
    for(var i=0;i<graphs.length;i++){
        if(graphs[i].gid==n){
            //Give colour back to system.
            app.ui.colors.free.push(graphs[i].color);
            graphs.splice(i,1);
            break;
        }
    }
    app.ui.refresh();
};
app.empty=function(n){
    //Remove all graphs.
    for(var i=0;i<graphs.length;i++){
        app.ui.colors.free.push(graphs[i].color);
        graphs.splice(i,1);
    }
    var ul=document.getElementById("graphs");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    app.ui.refresh();
};

function message(m){
    //For postMessage API. ANY WEBSITE CAN CALL THIS!
    var s=m.data.split(/[:,]/);
    switch(s[0]){
        case "add":
            app.add(s[1]);
            break;
        case "block":
            app.ui.block(1);
            break;
        case "unblock":
            app.ui.block(0);
            break;
        case "translate":
            app.ui.translate(s[1],s[2],s[3]);
            break;
        case "empty":
            app.empty();
            break;
        case "scale":
            app.ui.scale(s[1],s[2],s[3]);
            break;
        case "center":
            app.ui.center(s[1],s[2],s[3]);
            break;
    }
}
if(!window.addEventListener){
    //TODO: CHECK THIS. I.E. doesn't work anyway atm. (stack overflow)
    window.addEventListener=function(eventname,fn,mode){
        return window.attachEvent("on"+eventname, fn,mode);
    };
}
if(window.addEventListener){
    window.addEventListener("message", message, false);
}else{
    window.attachEvent("onmessage", message);
}
function hashDidChange(){
    app.empty();
    if(location.hash.match(/^#json=/)) {
        data = JSON.parse(location.hash.substring(6));
        for(var idx in data.graphs) {
        app.add(idx, !data.graphs[idx]);
        }
        if(data.scale) {
            app.ui.set_scale.apply(this, data.scale);
        }
        if(data.camera) {
            app.ui.set_camera.apply(this, data.camera);
        }
        if(data.block != undefined) {
            app.ui.block(!!data.block);
        }
        if(data.console != undefined) {
            app.ui.button('>_', data.console);
        }
        if(data.legend != undefined) {
            app.ui.legend(!!data.legend);
        }
    } else {
        app.add(location.hash.substring(1));
    }

}
window.addEventListener("hashchange", hashDidChange, false);
app.translate=function(x,y,z){
    app.ui.translate(Number(x),Number(y),Number(z));
};
app.scale=function(x,y,z){
    app.ui.scale(Number(x),Number(y),Number(z));
};
app.init=function (){
    var fullscreen=!window.parent.length;
    app.view_configured = location.hash.match(/^#json=/);
	app.ui.init(fullscreen);
    
    if(location.hash!="" && location.hash!="#"){
        hashDidChange();
    }else if(fullscreen){
        var preferences;
        if(window.localStorage){
            preferences=localStorage.getItem("graph.tk");
            if(preferences){
                try{
                    preferences=JSON.parse(preferences);
                }catch(ex){}
            }
        }
        app.add("\\frac{d}{dx}\\left(sin\\left(x\\right)+log\\left(x+1\\right)\\right)");
    }
    var div=document.createElement("div");
    var logo=new Image();
    logo.src="favicon.ico";
    logo.style.float="left";
    div.appendChild(logo);
    
    div.appendChild(document.createTextNode("graph.tk - "+messages.version+" "+app.version));
    //div.style.height="4em";
    var span=document.createElement("span");
    span.className="mathquill-rendered-math mathquill-editable";
    span.innerHTML='<br />'+messages.example+': '+messages.type+' <span class="textarea"><textarea></textarea></span><span class="fraction"><span class="numerator"><var>d</var></span><span class="denominator"><var>d</var><var>x</var></span><span style="width:0">&nbsp;</span></span><span><span class="paren" style="font-size: 1.89542em; ">(</span><span class=""><span class="fraction"><span class="numerator"><span>1</span></span><span class="denominator"><var>x</var></span><span style="width:0">&nbsp;</span></span></span><span class="paren" style="font-size: 1.89542em; ">)</span></span>';
    div.appendChild(span);
    app.ui.console.log(div,true);
    
    //app.ui.console.log("Example: Type d/dx (1/x)",true);
    
    //app.add("x^2");
};
if(!/noboot$/.test(location.search)){
    app.init();
}
