!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([,function(e,t,n){n(9);var i=n(5);i.registerLanguage("http",n(6)),i.registerLanguage("json",n(7)),$(document).ready(function(){var e=new StickySidebar(".sidebar",{topSpacing:22,bottomSpacing:0,containerSelector:".content-wrapper",innerWrapperSelector:".sidebar__inner"});$(window).resize(function(){e.updateSticky()}),$("[id^=collapse-]").on("show.bs.collapse",function(){var e=$(this).prev().find("a").data("group-id"),t=$(document.getElementById(e)).offset().top-33;$("html, body").animate({scrollTop:t})}),$("[id^=collapse-]").on("hide.bs.collapse",function(e){var t=$(this).prev().find("a").data("group-id"),n=$(document.getElementById(t)).offset().top-33;$(window).scrollTop()!==n&&($("html, body").animate({scrollTop:n}),e.preventDefault())}),$(".tabs").on("click","a",function(e){var t=$(this).attr("href").substring(1),n=$(document.getElementById(t)).offset().top-33;$("html, body").animate({scrollTop:n}),e.preventDefault()}),$(".nav-pills").on("click",".active a",function(e){e.preventDefault();var t=$(this);window.setTimeout(function(){t.closest(".nav-pills").next(".tab-content").find(".tab-pane").removeClass("active"),t.parent("li").removeClass("active")},0)}),$("pre code").each(function(e,t){i.highlightBlock(t)})})},,,,function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(t)}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function i(e,t){var n=e&&e.exec(t);return n&&0===n.index}function r(e){return O.test(e)}function a(e){var t,n,i,a,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",n=k.exec(s))return T(n[1])?n[1]:"no-highlight";for(s=s.split(/\s+/),t=0,i=s.length;t<i;t++)if(a=s[t],r(a)||T(a))return a}function s(e){var t,n={},i=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return i.forEach(function(e){for(t in e)n[t]=e[t]}),n}function o(e){var t=[];return function e(i,r){for(var a=i.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(t.push({event:"start",offset:r,node:a}),r=e(a,r),n(a).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:a}));return r}(e,0),t}function c(e,i,r){function a(){return e.length&&i.length?e[0].offset!==i[0].offset?e[0].offset<i[0].offset?e:i:"start"===i[0].event?e:i:e.length?e:i}function s(e){function i(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}u+="<"+n(e)+y.map.call(e.attributes,i).join("")+">"}function o(e){u+="</"+n(e)+">"}function c(e){("start"===e.event?s:o)(e.node)}for(var l=0,u="",d=[];e.length||i.length;){var p=a();if(u+=t(r.substring(l,p[0].offset)),l=p[0].offset,p===e){d.reverse().forEach(o);do{c(p.splice(0,1)[0]),p=a()}while(p===e&&p.length&&p[0].offset===l);d.reverse().forEach(s)}else"start"===p[0].event?d.push(p[0].node):d.pop(),c(p.splice(0,1)[0])}return u+t(r.substr(l))}function l(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return s(e,{variants:null},t)})),e.cached_variants||e.endsWithParent&&[s(e)]||[e]}function u(e){function t(e){return e&&e.source||e}function n(n,i){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(i?"g":""))}function i(r,a){if(!r.compiled){if(r.compiled=!0,r.keywords=r.keywords||r.beginKeywords,r.keywords){var s={},o=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");s[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof r.keywords?o("keyword",r.keywords):S(r.keywords).forEach(function(e){o(e,r.keywords[e])}),r.keywords=s}r.lexemesRe=n(r.lexemes||/\w+/,!0),a&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=n(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=n(r.end)),r.terminator_end=t(r.end)||"",r.endsWithParent&&a.terminator_end&&(r.terminator_end+=(r.end?"|":"")+a.terminator_end)),r.illegal&&(r.illegalRe=n(r.illegal)),null==r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=Array.prototype.concat.apply([],r.contains.map(function(e){return l("self"===e?r:e)})),r.contains.forEach(function(e){i(e,r)}),r.starts&&i(r.starts,a);var c=r.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([r.terminator_end,r.illegal]).map(t).filter(Boolean);r.terminators=c.length?n(c.join("|"),!0):{exec:function(){return null}}}}i(e)}function d(e,n,r,a){function s(e,t){var n,r;for(n=0,r=t.contains.length;n<r;n++)if(i(t.contains[n].beginRe,e))return t.contains[n]}function o(e,t){if(i(e.endRe,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,t)}function c(e,t){return!r&&i(t.illegalRe,e)}function l(e,t){var n=E.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function f(e,t,n,i){var r=i?"":x.classPrefix,a='<span class="'+r,s=n?"":L;return(a+=e+'">')+t+s}function h(){var e,n,i,r;if(!y.keywords)return t(O);for(r="",n=0,y.lexemesRe.lastIndex=0,i=y.lexemesRe.exec(O);i;)r+=t(O.substring(n,i.index)),e=l(y,i),e?(k+=e[1],r+=f(e[0],t(i[0]))):r+=t(i[0]),n=y.lexemesRe.lastIndex,i=y.lexemesRe.exec(O);return r+t(O.substr(n))}function g(){var e="string"==typeof y.subLanguage;if(e&&!_[y.subLanguage])return t(O);var n=e?d(y.subLanguage,O,!0,S[y.subLanguage]):p(O,y.subLanguage.length?y.subLanguage:void 0);return y.relevance>0&&(k+=n.relevance),e&&(S[y.subLanguage]=n.top),f(n.language,n.value,!1,!0)}function v(){R+=null!=y.subLanguage?g():h(),O=""}function m(e){R+=e.className?f(e.className,"",!0):"",y=Object.create(e,{parent:{value:y}})}function b(e,t){if(O+=e,null==t)return v(),0;var n=s(t,y);if(n)return n.skip?O+=t:(n.excludeBegin&&(O+=t),v(),n.returnBegin||n.excludeBegin||(O=t)),m(n,t),n.returnBegin?0:t.length;var i=o(y,t);if(i){var r=y;r.skip?O+=t:(r.returnEnd||r.excludeEnd||(O+=t),v(),r.excludeEnd&&(O=t));do{y.className&&(R+=L),y.skip||(k+=y.relevance),y=y.parent}while(y!==i.parent);return i.starts&&m(i.starts,""),r.returnEnd?0:t.length}if(c(t,y))throw new Error('Illegal lexeme "'+t+'" for mode "'+(y.className||"<unnamed>")+'"');return O+=t,t.length||1}var E=T(e);if(!E)throw new Error('Unknown language: "'+e+'"');u(E);var w,y=a||E,S={},R="";for(w=y;w!==E;w=w.parent)w.className&&(R=f(w.className,"",!0)+R);var O="",k=0;try{for(var N,M,C=0;;){if(y.terminators.lastIndex=C,!(N=y.terminators.exec(n)))break;M=b(n.substring(C,N.index),N[0]),C=N.index+M}for(b(n.substr(C)),w=y;w.parent;w=w.parent)w.className&&(R+=L);return{relevance:k,value:R,language:e,top:y}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:t(n)};throw e}}function p(e,n){n=n||x.languages||S(_);var i={relevance:0,value:t(e)},r=i;return n.filter(T).forEach(function(t){var n=d(t,e,!1);n.language=t,n.relevance>r.relevance&&(r=n),n.relevance>i.relevance&&(r=i,i=n)}),r.language&&(i.second_best=r),i}function f(e){return x.tabReplace||x.useBR?e.replace(N,function(e,t){return x.useBR&&"\n"===e?"<br>":x.tabReplace?t.replace(/\t/g,x.tabReplace):""}):e}function h(e,t,n){var i=t?R[t]:n,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(i)&&r.push(i),r.join(" ").trim()}function g(e){var t,n,i,s,l,u=a(e);r(u)||(x.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,l=t.textContent,i=u?d(u,l,!0):p(l),n=o(t),n.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=i.value,i.value=c(n,o(s),l)),i.value=f(i.value),e.innerHTML=i.value,e.className=h(e.className,u,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function v(e){x=s(x,e)}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");y.forEach.call(e,g)}}function b(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)}function E(t,n){var i=_[t]=n(e);i.aliases&&i.aliases.forEach(function(e){R[e]=t})}function w(){return S(_)}function T(e){return e=(e||"").toLowerCase(),_[e]||_[R[e]]}var y=[],S=Object.keys,_={},R={},O=/^(no-?highlight|plain|text)$/i,k=/\blang(?:uage)?-([\w-]+)\b/i,N=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,L="</span>",x={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=d,e.highlightAuto=p,e.fixMarkup=f,e.highlightBlock=g,e.configure=v,e.initHighlighting=m,e.initHighlightingOnLoad=b,e.registerLanguage=E,e.listLanguages=w,e.getLanguage=T,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,i){var r=e.inherit({className:"comment",begin:t,end:n,contains:[]},i||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},function(e,t){e.exports=function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],illegal:"\\S",contains:[{begin:"^"+t,end:"$",contains:[{className:"number",begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+t+"$",returnBegin:!0,end:"$",contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{begin:t},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}},function(e,t){e.exports=function(e){var t={literal:"true false null"},n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],i={end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:t},r={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(i,{begin:/:/})],illegal:"\\S"},a={begin:"\\[",end:"\\]",contains:[e.inherit(i)],illegal:"\\S"};return n.splice(n.length,0,r,a),{contains:n,keywords:t,illegal:"\\S"}}},,function(e,t){!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e){for(var t=0,n=["webkit","moz"],i=e.requestAnimationFrame,r=e.cancelAnimationFrame,a=n.length;--a>=0&&!i;)i=e[n[a]+"RequestAnimationFrame"],r=e[n[a]+"CancelAnimationFrame"];i&&r||(i=function(e){var n=+new Date,i=Math.max(t+16,n);return setTimeout(function(){e(t=i)},i-n)},r=clearTimeout),e.requestAnimationFrame=i,e.cancelAnimationFrame=r}(window);var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=function(){var n=".stickySidebar",i={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1};return function(){function r(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e(this,r),this.options=r.extend(i,a),this.sidebar="string"==typeof t?document.querySelector(t):t,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");if(this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.options.containerSelector){var s=document.querySelectorAll(this.options.containerSelector);if(s=Array.prototype.slice.call(s),s.forEach(function(e,t){e.contains(n.sidebar)&&(n.container=e)}),!s.length)throw new Error("The container does not contains on the sidebar.")}this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._breakpoint=!1,this._resizeListeners=[],this.dimensions={translateY:0,topSpacing:0,bottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["_resizeListener"].forEach(function(e){n[e]=n[e].bind(n)}),this.initialize()}return t(r,[{key:"initialize",value:function(){if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null!==this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){var e=document.createElement("div");for(e.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(e);this.sidebar.firstChild!=e;)e.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}null!==this.container&&(this.container=this.sidebar.parentElement),"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){window.addEventListener("resize",this,{passive:!0}),window.addEventListener("scroll",this,{passive:!0}),this.sidebar.addEventListener("update"+n,this),this.options.resizeSensor&&(this.addResizerListener(this.sidebarInner,this),this.addResizerListener(this.container,this))}},{key:"handleEvent",value:function(e){this.updateSticky(e)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var e=this.dimensions;e.containerTop=r.offsetRelative(this.container).top,e.containerHeight=this.container.clientHeight,e.containerBottom=e.containerTop+e.containerHeight,e.sidebarHeight=this.sidebarInner.offsetHeight,e.sidebarWidth=this.sidebar.offsetWidth,e.viewportHeight=window.innerHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var e=this.dimensions;e.sidebarLeft=r.offsetRelative(this.sidebar).left,e.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,e.viewportBottom=e.viewportTop+e.viewportHeight,e.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,e.topSpacing=this.options.topSpacing,e.bottomSpacing=this.options.bottomSpacing,"function"==typeof e.topSpacing&&(e.topSpacing=parseInt(e.topSpacing(this.sidebar))||0),"function"==typeof e.bottomSpacing&&(e.bottomSpacing=parseInt(e.bottomSpacing(this.sidebar))||0)}},{key:"isSidebarFitsViewport",value:function(){return this.dimensions.sidebarHeight<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var e=this.dimensions;if(e.lastViewportTop!==e.viewportTop){var t="down"===this.direction?Math.min:Math.max;e.viewportTop===t(e.viewportTop,e.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}},{key:"getAffixType",value:function(){var e=this.dimensions,t=!1;this._calcDimensionsWithScroll();var n=e.sidebarHeight+e.containerTop,i=e.viewportTop+e.topSpacing,r=e.viewportBottom-e.bottomSpacing;return"up"===this.direction?i<=e.containerTop?(e.translateY=0,t="STATIC"):i<=e.translateY+e.containerTop?(e.translateY=i-e.containerTop,t="VIEWPORT-TOP"):!this.isSidebarFitsViewport()&&e.containerTop<=i&&(t="VIEWPORT-UNBOTTOM"):this.isSidebarFitsViewport()?e.sidebarHeight+i>=e.containerBottom?(e.translateY=e.containerBottom-n,t="CONTAINER-BOTTOM"):i>=e.containerTop&&(e.translateY=i-e.containerTop,t="VIEWPORT-TOP"):e.containerBottom<=r?(e.translateY=e.containerBottom-n,t="CONTAINER-BOTTOM"):n+e.translateY<=r?(e.translateY=r-n,t="VIEWPORT-BOTTOM"):e.containerTop+e.translateY<=i&&(t="VIEWPORT-UNBOTTOM"),e.translateY=Math.max(0,e.translateY),e.translateY=Math.min(e.containerHeight,e.translateY),e.lastViewportTop=e.viewportTop,t}},{key:"_getStyle",value:function(e){if(void 0!==e){var t={inner:{},outer:{}},n=this.dimensions;switch(e){case"VIEWPORT-TOP":t.inner={position:"fixed",top:this.options.topSpacing,left:n.sidebarLeft-n.viewportLeft,width:n.sidebarWidth};break;case"VIEWPORT-BOTTOM":t.inner={position:"fixed",top:"auto",left:n.sidebarLeft,bottom:this.options.bottomSpacing,width:n.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":var i=this._getTranslate(0,n.translateY+"px");t.inner=i?{transform:i}:{position:"absolute",top:n.containerTop+n.translateY}}switch(e){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":t.outer={height:n.sidebarHeight,position:"relative"}}return t.outer=r.extend({height:"",position:""},t.outer),t.inner=r.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:this._getTranslate()},t.inner),t}}},{key:"stickyPosition",value:function(e){if(!this._breakpoint){e=e||!1;var t=(this.options.topSpacing,this.options.bottomSpacing,this.getAffixType()),i=this._getStyle(t);if((this.affixedType!=t||e)&&t){var a="affix."+t.toLowerCase().replace("viewport-","")+n;r.eventTrigger(this.sidebar,a),"STATIC"===t?this.sidebar.classList.remove(this.options.stickyClass):this.sidebar.classList.add(this.options.stickyClass);for(var s in i.outer){i.outer[s];this.sidebar.style[s]=i.outer[s]}for(var o in i.inner){var c="number"==typeof i.inner[o]?"px":"";this.sidebarInner.style[o]=i.inner[o]+c}var l="affixed."+t.toLowerCase().replace("viewport","")+n;r.eventTrigger(this.sidebar,l)}else this._initialized&&(this.sidebarInner.style.left=i.inner.left);this.affixedType=t}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),this.sidebar.classList.remove(this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,function(t){requestAnimationFrame(function(){switch(t){case"scroll":e._calcDimensionsWithScroll(),e.observeScrollDir(),e.stickyPosition();break;case"resize":default:e._widthBreakpoint(),e.calcDimensions(),e.stickyPosition("resize"===t||!1)}e._running=!1})}(t.type))}},{key:"_setSupportFeatures",value:function(){var e=this.support;e.transform=r.supportTransform(),e.transform3d=r.supportTransform(!0)}},{key:"_getTranslate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+e+", "+t+", "+n+")":!!this.support.translate&&"translate("+e+", "+t+")"}},{key:"addResizerListener",value:function(e,t){e.resizeListeners||(e.resizeListeners=[],this._appendResizeSensor(e)),e.resizeListeners.push(t)}},{key:"removeResizeListener",value:function(e,t){var n=e.resizeListeners,i=n.indexOf(t);if(this._resizeListeners.splice(i,1),null!==e.resizeListeners){var r=e.resizeTrigger;r.contentDocument.defaultView.removeEventListener("resize",this._resizeListener),r=r.remove()}}},{key:"_appendResizeSensor",value:function(e){var t=this;"static"===e.style.position&&(e.style.position="relative");var n=document.createElement("object");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%;overflow: hidden; pointer-events: none; z-index: -1;"),n.resizeElement=e,n.addEventListener("load",function(e){var n=e.currentTarget;n.contentDocument.defaultView.resizeTrigger=n.resizeElement,n.contentDocument.defaultView.addEventListener("resize",t._resizeListener)}),n.type="text/html",r.isIE()&&(n.data="about:blank"),e.resizeTrigger=n,e.appendChild(n)}},{key:"_resizeListener",value:function(e){var t=this,n=e.target||e.srcElement,i=n.resizeTrigger;i.resizeListeners.forEach(function(n){"object"==typeof n&&(n=n.handleEvent,i=t),n.call(i,e)})}},{key:"destroy",value:function(){window.removeEventListener("resize",this._onResize),window.removeEventListener("scroll",this._onScroll),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.removeEventListener("update"+n,this.updateSticky);var e={position:"",top:"",left:"",bottom:"",width:"",transform:""};for(var t in e)this.sidebar.style[t]=e[t];this.options.resizeSensor&&(this.removeResizeListener(this.sidebarInner,this.updateSticky),this.removeResizeListener(this.container,this.updateSticky))}}],[{key:"isIE",value:function(){return Boolean(navigator.userAgent.match(/Trident/))}},{key:"supportTransform",value:function(e){var t=!1,n=e?"perspective":"transform",i=n.charAt(0).toUpperCase()+n.slice(1),r=["Webkit","Moz","O","ms"],a=document.createElement("support"),s=a.style;return(n+" "+r.join(i+" ")+i).split(" ").forEach(function(e,n){if(void 0!==s[e])return t=e,!1}),t}},{key:"eventTrigger",value:function(e,t,n){if(window.CustomEvent)var i=new CustomEvent(t,{detail:n});else{var i=document.createEvent("CustomEvent");i.initCustomEvent(t,!0,!0,n)}e.dispatchEvent(i)}},{key:"extend",value:function(e,t){var n={};for(var i in e)void 0!==t[i]?n[i]=t[i]:n[i]=e[i];return n}},{key:"offsetRelative",value:function(e){var t={left:0,top:0};do{var n=e.offsetTop,i=e.offsetLeft;isNaN(n)||(t.top+=n),isNaN(i)||(t.left+=i)}while(e=e.offsetParent);return t}}]),r}()}();window.StickySidebar=n}()},,function(e,t,n){e.exports=n(1)}]);