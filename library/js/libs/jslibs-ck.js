/*!
 * imagesLoaded PACKAGED v3.1.6
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var r=e.prototype,i=this,s=i.EventEmitter;r.getListeners=function(e){var t,n,r=this._getEvents();if("object"==typeof e){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},r.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},r.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},r.addListener=function(e,n){var r,i=this.getListenersAsObject(e),s="object"==typeof n;for(r in i)i.hasOwnProperty(r)&&-1===t(i[r],n)&&i[r].push(s?n:{listener:n,once:!1});return this},r.on=n("addListener"),r.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},r.once=n("addOnceListener"),r.defineEvent=function(e){return this.getListeners(e),this},r.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},r.removeListener=function(e,n){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&(r=t(s[i],n),-1!==r&&s[i].splice(r,1));return this},r.off=n("removeListener"),r.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},r.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},r.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},r.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if("object"===n)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},r.removeAllListeners=n("removeEvent"),r.emitEvent=function(e,t){var n,r,i,s,o=this.getListenersAsObject(e);for(i in o)if(o.hasOwnProperty(i))for(r=o[i].length;r--;)n=o[i][r],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},r.trigger=n("emitEvent"),r.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},r.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},r._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},r._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return i.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,r=function(){};n.addEventListener?r=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(r=function(e,n,r){e[n+r]=r.handleEvent?function(){var n=t(e);r.handleEvent.call(r,n)}:function(){var n=t(e);r.call(e,n)},e.attachEvent("on"+n,e[n+r])});var i=function(){};n.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(r){e[t+n]=void 0}});var s={bind:r,unbind:i};"function"==typeof define&&define.amd?define("eventie/eventie",s):e.eventie=s}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,r){return t(e,n,r)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function r(e,t){for(var n in t)e[n]=t[n];return e}function i(e){return"[object Array]"===h.call(e)}function s(e){var t=[];if(i(e))t=e;else if("number"==typeof e.length)for(var n=0,r=e.length;r>n;n++)t.push(e[n]);else t.push(e);return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=r({},this.options),"function"==typeof t?n=t:r(this.options,t),n&&this.on("always",n),this.getImages(),f&&(this.jqDeferred=new f.Deferred);var i=this;setTimeout(function(){i.check()})}function u(e){this.img=e}function a(e){this.src=e,p[e]=this}var f=e.jQuery,l=e.console,c=l!==void 0,h=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var r=n.nodeType;if(r&&(1===r||9===r||11===r))for(var i=n.querySelectorAll("img"),s=0,o=i.length;o>s;s++){var u=i[s];this.addImage(u)}}},o.prototype.addImage=function(e){var t=new u(e);this.images.push(t)},o.prototype.check=function(){function e(e,i){return t.options.debug&&c&&l.log("confirm",e,i),t.progress(e),n++,n===r&&t.complete(),!0}var t=this,n=0,r=this.images.length;if(this.hasAnyBroken=!1,!r)return this.complete(),void 0;for(var i=0;r>i;i++){var s=this.images[i];s.on("confirm",e),s.check()}},o.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},f&&(f.fn.imagesLoaded=function(e,t){var n=new o(this,e,t);return n.jqDeferred.promise(f(this))}),u.prototype=new t,u.prototype.check=function(){var e=p[this.img.src]||new a(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var p={};return a.prototype=new t,a.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},a.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},a.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},a.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},a.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},o});!function(e,t){var n=function(e,t,n){var r;return function(){function i(){n||e.apply(s,o),r=null}var s=this,o=arguments;r?clearTimeout(r):n&&e.apply(s,o),r=setTimeout(i,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}}(jQuery,"smartresize");!function(e){e.fn.fluidbox=function(t){var n=e.extend(!0,{viewportFill:.95,overlayColor:"rgba(255,255,255,.85)",debounceResize:!0,stackIndex:1e3,stackIndexDelta:10,closeTrigger:[{selector:".fluidbox-overlay",event:"click"},{selector:"document",event:"keyup",keyCode:27}]},t);n.stackIndex<n.stackIndexDelta&&(n.stackIndexDelta=n.stackIndex),$fbOverlay=e("<div />",{"class":"fluidbox-overlay",css:{"background-color":n.overlayColor,"z-index":n.stackIndex}});var r,i=this,s=e(window),o=function(){e(".fluidbox-opened").trigger("click")},u=function(e){var t=e.find("img"),n=e.find(".fluidbox-ghost"),r=s.scrollTop()-t.offset().top+.5*t.data("imgHeight")*(t.data("imgScale")-1)+.5*(s.height()-t.data("imgHeight")*t.data("imgScale")),i=.5*t.data("imgWidth")*(t.data("imgScale")-1)+.5*(s.width()-t.data("imgWidth")*t.data("imgScale"))-t.offset().left,o=t.data("imgScale");n.css({transform:"translate("+parseInt(10*i)/10+"px,"+parseInt(10*r)/10+"px) scale("+parseInt(1e3*o)/1e3+")"})},f=function(){i.each(function(){l(e(this))})},l=function(e){function t(){a.imgWidth=i.width(),a.imgHeight=i.height(),a.imgRatio=i.width()/i.height(),o.css({width:i.width(),height:i.height(),top:i.offset().top-u.offset().top,left:i.offset().left-u.offset().left}),a.imgScale=r>a.imgRatio?s.height()*n.viewportFill/i.height():s.width()*n.viewportFill/i.width()}if(r=s.width()/s.height(),e.hasClass("fluidbox")){var i=e.find("img"),o=e.find(".fluidbox-ghost"),u=e.find(".fluidbox-wrap"),a=i.data();t(),i.load(t)}},c=function(t){if(e(this).hasClass("fluidbox")){var r=e(this),i=e(this).find("img"),s=e(this).find(".fluidbox-ghost"),o=e(this).find(".fluidbox-wrap"),f={};0!==e(this).data("fluidbox-state")&&e(this).data("fluidbox-state")?(r.data("fluidbox-state",0).removeClass("fluidbox-opened").addClass("fluidbox-closed"),f.open&&window.clearTimeout(f.open),f.close=window.setTimeout(function(){e(".fluidbox-overlay").remove(),o.css({"z-index":n.stackIndex-n.stackIndexDelta})},10),e(".fluidbox-overlay").css({opacity:0}),s.css({transform:"translate(0,0) scale(1)"}).one("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionEnd",function(){i.css({opacity:1}),f.hideGhost=window.setTimeout(function(){s.css({opacity:0})},100)})):e("<img />",{src:i.attr("src")}).load(function(){r.append($fbOverlay).data("fluidbox-state",1).removeClass("fluidbox-closed").addClass("fluidbox-opened"),f.close&&window.clearTimeout(f.close),f.hideGhost&&window.clearTimeout(f.hideGhost),f.open=window.setTimeout(function(){e(".fluidbox-overlay").css({opacity:1})},10),o.css({"z-index":n.stackIndex+n.stackIndexDelta}),s.off("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionEnd").css({"background-image":"url("+i.attr("src")+")",opacity:1}),i.css({opacity:0}),e("<img />",{src:r.attr("href")}).load(function(){s.css({"background-image":"url("+r.attr("href")+")"})}),u(r)}),t.preventDefault()}};n.closeTrigger&&e.each(n.closeTrigger,function(t){var r=n.closeTrigger[t];"window"!=r.selector?"document"==r.selector?r.keyCode?e(document).on(r.event,function(e){e.keyCode==r.keyCode&&o()}):e(document).on(r.event,o):e(document).on(r.event,n.closeTrigger[t].selector,o):s.on(r.event,o)}),i.each(function(){if(e(this).is("a")&&1===e(this).children().length&&e(this).children().is("img")){var t=e("<div />",{"class":"fluidbox-wrap",css:{"z-index":n.stackIndex-n.stackIndexDelta}}),r=e(this);r.addClass("fluidbox").wrapInner(t).find("img").css({opacity:1}).after('<div class="fluidbox-ghost" />').each(function(){var t=e(this);t.width()>0&&t.height()>0?(l(r),r.click(c)):t.load(function(){l(r),r.click(c)})})}});var h=function(){f();var t=e("a.fluidbox.fluidbox-opened");t.length>0&&u(t)};return n.debounceResize?e(window).smartresize(h):e(window).resize(h),i}}(jQuery);(function(e){e.fn.stupidtable=function(t){return this.each(function(){var n=e(this);t=t||{};t=e.extend({},e.fn.stupidtable.default_sort_fns,t);n.on("click.stupidtable","th",function(){var r=e(this),i=0,s=e.fn.stupidtable.dir;n.find("th").slice(0,r.index()).each(function(){var t=e(this).attr("colspan")||1;i+=parseInt(t,10)});var o=r.data("sort-default")||s.ASC;r.data("sort-dir")&&(o=r.data("sort-dir")===s.ASC?s.DESC:s.ASC);var u=r.data("sort")||null;null!==u&&(n.trigger("beforetablesort",{column:i,direction:o}),n.css("display"),setTimeout(function(){var h=[],p=t[u],v=n.children("tbody").children("tr");v.each(function(t,n){var r=e(n).children().eq(i),s=r.data("sort-value"),r="undefined"!=typeof s?s:r.text();h.push([r,n])});h.sort(function(e,t){return p(e[0],t[0])});o!=s.ASC&&h.reverse();v=e.map(h,function(e){return e[1]});n.children("tbody").append(v);n.find("th").data("sort-dir",null).removeClass("sorting-desc sorting-asc");r.data("sort-dir",o).addClass("sorting-"+o);n.trigger("aftertablesort",{column:i,direction:o});n.css("display")},10))})})};e.fn.stupidtable.dir={ASC:"asc",DESC:"desc"};e.fn.stupidtable.default_sort_fns={"int":function(e,t){return parseInt(e,10)-parseInt(t,10)},"float":function(e,t){return parseFloat(e)-parseFloat(t)},string:function(e,t){return e<t?-1:e>t?1:0},"string-ins":function(e,t){e=e.toLowerCase();t=t.toLowerCase();return e<t?-1:e>t?1:0}}})(jQuery);(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):typeof exports=="object"?e(require("jquery")):e(jQuery)})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){e.indexOf('"')===0&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g,u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires=="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{},h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("="),m=r(v.shift()),g=v.join("=");if(t&&t===m){c=o(g,s);break}!t&&(g=o(g))!==undefined&&(c[m]=g)}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined)return!1;e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});(function(e){e.fn.extend({leanModal:function(t){function i(t){e("#lean_overlay").fadeOut(200);e(t).css({display:"none"})}var n={top:100,overlay:.5,closeButton:null},r=e("<div id='lean_overlay'></div>");e("body").append(r);t=e.extend(n,t);return this.each(function(){var n=t;e(this).click(function(t){var r=e(this).attr("href");e("#lean_overlay").click(function(){i(r)});e(n.closeButton).click(function(){i(r)});var s=e(r).outerHeight(),u=e(r).outerWidth();e("#lean_overlay").css({display:"block",opacity:0});e("#lean_overlay").fadeTo(200,n.overlay);e(r).css({display:"block",position:"fixed",opacity:0,"z-index":11e3,left:"50%","margin-left":-(u/2)+"px",top:n.top+"px"});e(r).fadeTo(200,1);t.preventDefault()})})}})})(jQuery);