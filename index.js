!function(n){var o={};function e(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=o,e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},e.p="",e(e.s=1)}([function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return void 0===n?"undefined":t(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":void 0===n?"undefined":t(n)},r=window.device,a={},c=[];window.device=a;var d=window.document.documentElement,s=window.navigator.userAgent.toLowerCase(),l=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"];function u(n){return-1!==s.indexOf(n)}function b(n){return d.className.match(new RegExp(n,"i"))}function p(n){var o=null;b(n)||(o=d.className.replace(/^\s+|\s+$/g,""),d.className=o+" "+n)}function f(n){b(n)&&(d.className=d.className.replace(" "+n,""))}function w(){a.landscape()?(f("portrait"),p("landscape"),y("landscape")):(f("landscape"),p("portrait"),y("portrait")),v()}function y(n){for(var o in c)c[o](n)}a.macos=function(){return u("mac")},a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&u("iphone")},a.ipod=function(){return u("ipod")},a.ipad=function(){return u("ipad")},a.android=function(){return!a.windows()&&u("android")},a.androidPhone=function(){return a.android()&&u("mobile")},a.androidTablet=function(){return a.android()&&!u("mobile")},a.blackberry=function(){return u("blackberry")||u("bb10")||u("rim")},a.blackberryPhone=function(){return a.blackberry()&&!u("tablet")},a.blackberryTablet=function(){return a.blackberry()&&u("tablet")},a.windows=function(){return u("windows")},a.windowsPhone=function(){return a.windows()&&u("phone")},a.windowsTablet=function(){return a.windows()&&u("touch")&&!a.windowsPhone()},a.fxos=function(){return(u("(mobile")||u("(tablet"))&&u(" rv:")},a.fxosPhone=function(){return a.fxos()&&u("mobile")},a.fxosTablet=function(){return a.fxos()&&u("tablet")},a.meego=function(){return u("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"===i(window.process)},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){for(var n=0;n<l.length;){if(u(l[n]))return!0;n++}return!1},a.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?screen.orientation.type.includes("portrait"):window.innerHeight/window.innerWidth>1},a.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?screen.orientation.type.includes("landscape"):window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=r,this},a.ios()?a.ipad()?p("ios ipad tablet"):a.iphone()?p("ios iphone mobile"):a.ipod()&&p("ios ipod mobile"):a.macos()?p("macos desktop"):a.android()?a.androidTablet()?p("android tablet"):p("android mobile"):a.blackberry()?a.blackberryTablet()?p("blackberry tablet"):p("blackberry mobile"):a.windows()?a.windowsTablet()?p("windows tablet"):a.windowsPhone()?p("windows mobile"):p("windows desktop"):a.fxos()?a.fxosTablet()?p("fxos tablet"):p("fxos mobile"):a.meego()?p("meego mobile"):a.nodeWebkit()?p("node-webkit"):a.television()?p("television"):a.desktop()&&p("desktop"),a.cordova()&&p("cordova"),a.onChangeOrientation=function(n){"function"==typeof n&&c.push(n)};var m="resize";function h(n){for(var o=0;o<n.length;o++)if(a[n[o]]())return n[o];return"unknown"}function v(){a.orientation=h(["portrait","landscape"])}Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(m="orientationchange"),window.addEventListener?window.addEventListener(m,w,!1):window.attachEvent?window.attachEvent(m,w):window[m]=w,w(),a.type=h(["mobile","tablet","desktop"]),a.os=h(["ios","iphone","ipad","ipod","android","blackberry","windows","fxos","meego","television"]),v(),o.default=a},function(n,o,e){"use strict";var t=e(0).default;n.exports=function(n){t.desktop()?window.open("https://lineit.line.me/share/ui?url="+encodeURIComponent(n),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400"):window.open("line://msg/text/"+encodeURIComponent(n),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")}}]);