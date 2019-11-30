/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* @author: Xavier Damman (@xdamman) - http://github.com/xdamman/selection-sharer - @license: MIT */!function(a){function b(a,b){b&&b.length<0||b.forEach(function(b){a.find(b.query).click(b.action)})}function c(a){return a.replace(/<p[^>]*>/gi,"\n").replace(/<\/p>| {2}/gi,"").trim()}var d=function(d){var e=this;d=d||{},"string"==typeof d&&(d={elements:d}),this.sel=null,this.textSelection="",this.htmlSelection="",this.optionalShare=["telegram"],this.appId=a('meta[property="fb:app_id"]').attr("content")||a('meta[property="fb:app_id"]').attr("value"),this.url2share=a('meta[property="og:url"]').attr("content")||a('meta[property="og:url"]').attr("value")||window.location.href,this.getSelectionText=function(a){var b="",c="";if(a=a||window.getSelection(),a.rangeCount){for(var d=document.createElement("div"),f=0,g=a.rangeCount;g>f;++f)d.appendChild(a.getRangeAt(f).cloneContents());c=d.textContent,b=d.innerHTML}return e.textSelection=c,e.htmlSelection=b||c,c},this.selectionDirection=function(a){var b=a||window.getSelection(),c=document.createRange();if(!b.anchorNode)return 0;c.setStart(b.anchorNode,b.anchorOffset),c.setEnd(b.focusNode,b.focusOffset);var d=c.collapsed?"backward":"forward";return c.detach(),d},this.showPopunder=function(){e.popunder=e.popunder||document.getElementById("selectionSharerPopunder");var a=window.getSelection(),b=e.getSelectionText(a);if(a.isCollapsed||b.length<10||!b.match(/ /))return e.hidePopunder();if(e.popunder.classList.contains("fixed"))return e.popunder.style.bottom=0,e.popunder.style.bottom;var c=a.getRangeAt(0),d=c.endContainer.parentNode;if(e.popunder.classList.contains("show")){if(Math.ceil(e.popunder.getBoundingClientRect().top)==Math.ceil(d.getBoundingClientRect().bottom))return;return e.hidePopunder(e.showPopunder)}if(d.nextElementSibling)e.pushSiblings(d);else{e.placeholder||(e.placeholder=document.createElement("div"),e.placeholder.className="selectionSharerPlaceholder");var f=window.getComputedStyle(d).marginBottom;e.placeholder.style.height=f,e.placeholder.style.marginBottom=-2*parseInt(f,10)+"px",d.parentNode.insertBefore(e.placeholder)}var g=window.pageYOffset+d.getBoundingClientRect().bottom;e.popunder.style.top=Math.ceil(g)+"px",setTimeout(function(){e.placeholder&&e.placeholder.classList.add("show"),e.popunder.classList.add("show")},0)},this.pushSiblings=function(a){for(;a=a.nextElementSibling;)a.classList.add("selectionSharer"),a.classList.add("moveDown")},this.hidePopunder=function(a){if(a=a||function(){},"fixed"==e.popunder)return e.popunder.style.bottom="-50px",a();e.popunder.classList.remove("show"),e.placeholder&&e.placeholder.classList.remove("show");for(var b,c=document.getElementsByClassName("moveDown");b=c[0];)b.classList.remove("moveDown");setTimeout(function(){e.placeholder&&document.body.insertBefore(e.placeholder),a()},600)},this.show=function(a){setTimeout(function(){var b=window.getSelection(),c=e.getSelectionText(b);if(!b.isCollapsed&&c&&c.length>10&&c.match(/ /)){var d=b.getRangeAt(0),f=d.getBoundingClientRect().top-5,g=f+e.getPosition().y-e.$popover.height(),h=0;if(a)h=a.pageX;else{var i=b.anchorNode.parentNode;h+=i.offsetWidth/2;do h+=i.offsetLeft;while(i=i.offsetParent)}switch(e.selectionDirection(b)){case"forward":h-=e.$popover.width();break;case"backward":h+=e.$popover.width();break;default:return}e.$popover.removeClass("anim").css("top",g+10).css("left",h).show(),setTimeout(function(){e.$popover.addClass("anim").css("top",g)},0)}},10)},this.hide=function(){e.$popover.hide()},this.smart_truncate=function(a,b){if(!a||!a.length)return a;var c=a.length>b,d=c?a.substr(0,b-1):a;return d=c?d.substr(0,d.lastIndexOf(" ")):d,c?d+"...":d},this.getRelatedTwitterAccounts=function(){var b=[],c=a('meta[name="twitter:creator"]').attr("content")||a('meta[name="twitter:creator"]').attr("value");c&&b.push(c);for(var d=document.getElementsByTagName("a"),e=0,f=d.length;f>e;e++)if(d[e].attributes.href&&"string"==typeof d[e].attributes.href.value){var g=d[e].attributes.href.value.match(/^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i);g&&g.length>1&&-1==["widgets","intent"].indexOf(g[1])&&b.push(g[1])}return b.length>0?b.join(","):""},this.shareTwitter=function(a){a.preventDefault();var b="“"+e.smart_truncate(e.textSelection.trim(),114)+"”",c="http://twitter.com/intent/tweet?text="+encodeURIComponent(b)+"&related="+e.getRelatedTwitterAccounts()+"&url="+encodeURIComponent(e.url2share);e.viaTwitterAccount&&b.length<114-e.viaTwitterAccount.length&&(c+="&via="+e.viaTwitterAccount);var d=640,f=440,g=screen.width/2-d/2,h=screen.height/2-f/2-100;return window.open(c,"share_twitter","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+d+", height="+f+", top="+h+", left="+g),e.hide(),!1},this.shareFacebook=function(a){a.preventDefault();var b=c(e.htmlSelection),d="https://www.facebook.com/dialog/feed?app_id="+e.appId+"&display=popup&caption="+encodeURIComponent(b)+"&link="+encodeURIComponent(e.url2share)+"&href="+encodeURIComponent(e.url2share)+"&redirect_uri="+encodeURIComponent(e.url2share),f=640,g=440,h=screen.width/2-f/2,i=screen.height/2-g/2-100;window.open(d,"share_facebook","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+f+", height="+g+", top="+i+", left="+h)},this.shareLinkedIn=function(a){a.preventDefault();var b=c(e.htmlSelection),d="https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(e.url2share)+"&title="+encodeURIComponent(b),f=640,g=440,h=screen.width/2-f/2,i=screen.height/2-g/2-100;window.open(d,"share_linkedin","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+f+", height="+g+", top="+i+", left="+h)},this.shareTelegram=function(a){a.preventDefault();var b=c(e.htmlSelection),d="https://www.telegram.me/share/share/?url="+encodeURIComponent(e.url2share)+"&text="+encodeURIComponent(b),f=640,g=440,h=screen.width/2-f/2,i=screen.height/2-g/2-100;window.open(d,"share_telegram","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+f+", height="+g+", top="+i+", left="+h)},this.shareEmail=function(){var b=c(e.textSelection),d={};return d.subject=encodeURIComponent("Quote from "+document.title),d.body=encodeURIComponent("“"+b+"”")+"%0D%0A%0D%0AFrom: "+document.title+"%0D%0A"+window.location.href,a(this).attr("href","mailto:?subject="+d.subject+"&body="+d.body),e.hide(),!0},this.render=function(){var b=function(a){var b=a.charAt(0).toUpperCase()+a.substring(1);return'<li><a class="action '+a+'" href="" title="Share this selection on '+b+'" target="_blank">'+b+"</a></li>"},c={telegram:{icon:b("telegram"),query:"a.telegram",action:this.shareTelegram}},d=this.optionalShare.map(function(a){return c[a]}),f=d.reduce(function(a,b){return a.concat(b.icon).concat("\n")},""),g='    <ul>      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>      <li><a class="action linkedin" href="" title="Share this selection on LinkedIn" target="_blank">LinkedIn</a></li>'+f+'      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>    </ul>  </div>',h='<div class="selectionSharer" id="selectionSharerPopover" style="position:absolute;">  <div id="selectionSharerPopover-inner">'+g,i='<div id="selectionSharerPopunder" class="selectionSharer">  <div id="selectionSharerPopunder-inner">    <label>Share this selection</label>    <ul>'+g;e.$popover=a(h),e.$popunder=a(i);var j=d.map(function(a){return{query:a.query,action:a.action}});e.attachHandlers([e.$popover,e.$popunder],[{query:"a.tweet",action:e.shareTwitter},{query:"a.facebook",action:e.shareFacebook},{query:"a.linkedin",action:e.shareLinkedIn},{query:"a.email",action:e.shareEmail}].concat(j)),a("body").append(e.$popover),a("body").append(e.$popunder),e.appId&&e.url2share&&a(".selectionSharer a.facebook").css("display","inline-block")},this.attachHandlers=function(a,c){a&&a.length<0||a.forEach(function(a){b(a,c)})},this.setElements=function(b){"string"==typeof b&&(b=a(b)),e.$elements=b instanceof a?b:a(b),e.$elements.mouseup(e.show).mousedown(e.hide).addClass("selectionShareable"),e.$elements.bind("touchstart",function(){e.isMobile=!0}),document.onselectionchange=e.selectionChanged},this.selectionChanged=function(a){e.isMobile&&(e.lastSelectionChanged&&clearTimeout(e.lastSelectionChanged),e.lastSelectionChanged=setTimeout(function(){e.showPopunder(a)},300))},this.getPosition=function(){var a=void 0!==window.pageXOffset,b="CSS1Compat"===(document.compatMode||""),c=a?window.pageXOffset:b?document.documentElement.scrollLeft:document.body.scrollLeft,d=a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop;return{x:c,y:d}},this.render(),d.elements&&this.setElements(d.elements)};a.fn.selectionSharer=function(){var a=arguments,b=new d.apply(null,a);return b.setElements(this),this}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return d.load=function(a,b,c){var e=new d;e.setElements("p"),c()},d}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=d:window.SelectionSharer=d}(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./selection-sharer.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./selection-sharer.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
var Selection = __webpack_require__(0);

var selection = new Selection('p');



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "/* @author: Xavier Damman (@xdamman) - http://github.com/xdamman/selection-sharer - @license: MIT */\n@keyframes selectionSharerPopover-animation{0%{transform:matrix(0.97,0,0,1,0,12);filter:alpha(opacity=0);opacity:0}20%{transform:matrix(0.99,0,0,1,0,2);filter:alpha(opacity=70);opacity:.7}40%{transform:matrix(1,0,0,1,0,-1);filter:alpha(opacity=100);opacity:1}100%,70%{transform:matrix(1,0,0,1,0,0);filter:alpha(opacity=100);opacity:1}}#selectionSharerPopover{display:none;position:absolute;top:-100px;left:-100px;z-index:1010}#selectionSharerPopover::after{content:'';display:block;position:absolute;bottom:-3px;left:50%;margin-left:-4px;width:8px;height:8px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#262625;box-shadow:0 0 2px #262625}#selectionSharerPopover.anim{transition:top .075s ease-out;animation:selectionSharerPopover-animation 180ms forwards linear;-webkit-animation:selectionSharerPopover-animation 180ms forwards linear}#selectionSharerPopover-inner{position:relative;overflow:hidden;-webkit-border-radius:5px;border-radius:5px;border:1px solid;border-color:#262625 #1c1c1b #121211;box-shadow:0 1px 3px -1px rgba(0,0,0,.7),inset 0 0 1px rgba(255,255,255,.07),inset 0 0 2px rgba(255,255,255,.15);background-image:linear-gradient(to bottom,rgba(49,49,47,.97),#262625);background-repeat:repeat-x}#selectionSharerPopover .selectionSharerPopover-clip{position:absolute;bottom:-11px;display:block;left:50%;clip:rect(12px 24px 24px 0);margin-left:-12px;width:24px;height:24px;line-height:24px}#selectionSharerPopover .selectionSharerPopover-arrow{display:block;width:20px;height:20px;-webkit-transform:rotate(45deg) scale(0.5);transform:rotate(45deg) scale(0.5);background-color:#454543;border:2px solid #121211;box-sizing:content-box}.selectionSharer ul{padding:0;display:inline}.selectionSharer ul li{float:left;list-style:none;background:0 0;margin:0}.selectionSharer a.action{display:block;text-indent:-200px;margin:5px 7px;width:20px;height:20px;border:0}.selectionSharer a:hover{color:#ccc}.selectionSharer a.tweet{background:url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='171' height='139'%3e%3cg transform='translate(-282.32053,-396.30734)'%3e%3cpath style='fill:white' d='m 453.82593,412.80619 c -6.3097,2.79897 -13.09189,4.68982 -20.20852,5.54049 7.26413,-4.35454 12.84406,-11.24992 15.47067,-19.46675 -6.79934,4.03295 -14.3293,6.96055 -22.34461,8.53841 -6.41775,-6.83879 -15.56243,-11.111 -25.68298,-11.111 -19.43159,0 -35.18696,15.75365 -35.18696,35.18525 0,2.75781 0.31128,5.44359 0.91155,8.01875 -29.24344,-1.46723 -55.16995,-15.47582 -72.52461,-36.76396 -3.02879,5.19662 -4.76443,11.24048 -4.76443,17.6891 0,12.20777 6.21194,22.97747 15.65332,29.28716 -5.76773,-0.18265 -11.19331,-1.76565 -15.93716,-4.40083 -0.004,0.14663 -0.004,0.29412 -0.004,0.44248 0,17.04767 12.12889,31.26806 28.22555,34.50266 -2.95247,0.80436 -6.06101,1.23398 -9.26989,1.23398 -2.2673,0 -4.47114,-0.22124 -6.62011,-0.63114 4.47801,13.97857 17.47214,24.15143 32.86992,24.43441 -12.04227,9.43796 -27.21366,15.06335 -43.69965,15.06335 -2.84014,0 -5.64082,-0.16722 -8.39349,-0.49223 15.57186,9.98421 34.06703,15.8094 53.93768,15.8094 64.72024,0 100.11301,-53.61524 100.11301,-100.11387 0,-1.52554 -0.0343,-3.04251 -0.10204,-4.55261 6.87394,-4.95995 12.83891,-11.15646 17.55618,-18.21305 z' /%3e%3c/g%3e%3c/svg%3e\") no-repeat;background-size:18px;background-position:2px 4px}.selectionSharer a.facebook{background:url(\"data:image/svg+xml;charset=utf8,%3csvg viewBox='0 0 33 33' width='25' height='25' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath style='fill:white' d='M 17.996,32L 12,32 L 12,16 l-4,0 l0-5.514 l 4-0.002l-0.006-3.248C 11.993,2.737, 13.213,0, 18.512,0l 4.412,0 l0,5.515 l-2.757,0 c-2.063,0-2.163,0.77-2.163,2.209l-0.008,2.76l 4.959,0 l-0.585,5.514L 18,16L 17.996,32z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\") no-repeat;background-size:18px;background-position:0 2px;display:none}.selectionSharer a.linkedin{background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enable-background=\"new 0 0 300 300\" xml:space=\"preserve\"><g transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\"><path fill=\"white\" d=\"M343.999,2812.002C222.998,2770,155,2672.002,155,2540c0-62.002,5-85,27.998-132.998 c108.003-219.004,459.004-206.001,560,21.997c16.001,36.001,18.003,60,15,125c-5,97.002-27.998,146.001-91.997,203.003 C586.001,2827.002,453.999,2850,343.999,2812.002z\"/> <path fill=\"white\" d=\"M2035.996,2052.998c-150.996-31.997-257.998-92.998-365-210l-68.994-75l-7.002,79.004 c-5,42.998-10.996,100.996-14.004,127.998l-5.996,50l-253.999,2.998L1067.998,2030l6.001-62.002c3.003-35,8.999-452.998,12.002-930 L1092.998,170h288.003H1670l2.002,597.998C1675,1365,1675,1365,1697.998,1410.996c34.004,70,87.002,125.005,150,156.006 c75,36.997,192.998,38.999,257.998,5c59.004-31.001,111.006-95,137.002-172.002c21.006-64.004,22.002-77.002,25-647.002 L2270.996,170h290h290l-3.994,642.998c-2.998,547.998-6.006,652.002-20,707.002c-42.998,172.998-97.002,280-187.998,371.001 C2494.004,2037.998,2257.002,2101.001,2035.996,2052.998z\"/><path fill=\"white\" d=\"M167.002,2022.998c-4.004-2.998-7.002-421.997-7.002-930V170h295h295l-2.002,927.998L745,2025 l-286.001,2.998C302.002,2028.999,171.001,2027.002,167.002,2022.998z\"/></g></svg>') 2px 4px/18px no-repeat;background-size:18px;background-position:0 2px}.selectionSharer a.telegram{background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path style=\"fill:white\" d=\"M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z\" color=\"white\" /></svg>') no-repeat;background-size:18px;background-position:0 2px}.selectionSharer a.email{background:url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='94' height='64'%3e%3cg transform='translate(-10, -10)' fill='transparent'%3e%3crect x='0' y='0' width='114' height='114'%3e%3c/rect%3e%3cpath d='M12,12 L102,12 L102,72 L12,72 L12,12 Z M16,12 L53,49 C55.6666667,51 58.3333333,51 61,49 L98,12 L16,12 Z M15,72 L45,42 L15,72 Z M69,42 L99,72 L69,42 Z' stroke='white' stroke-width='5'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\") no-repeat;background-size:20px;background-position:0 4px}#selectionSharerPopunder.fixed{transition:bottom .5s ease-in-out;width:100%;position:fixed;left:0;bottom:-50px}.selectionSharer{transition:-webkit-transform .6s ease-in-out}.selectionSharer.moveDown{-webkit-transform:translate3d(0,60px,0)}#selectionSharerPopunder{position:absolute;left:0;width:100%;height:0;transition:height .5s ease-in-out;background:#ccc;border:0;box-shadow:inset 0 10px 5px -10px rgba(0,0,0,.5),inset 0 -10px 5px -10px rgba(0,0,0,.5);border-radius:0;overflow:hidden}#selectionSharerPopunder.show{height:50px}.selectionSharerPlaceholder{height:1em;margin-bottom:-2em;transition:height .5s ease-in-out}.selectionSharerPlaceholder.show{height:50px!important}#selectionSharerPopunder-inner ul{overflow:hidden;float:right;margin:0}#selectionSharerPopunder-inner ul li{padding:5px;overflow:hidden}#selectionSharerPopunder-inner label{color:#fff;font-weight:300;line-height:50px;margin:0 20px 0 10px}#selectionSharerPopunder-inner a{width:30px;height:30px;background-size:30px}#selectionSharerPopunder-inner a.tweet{background-position:0 2px}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);