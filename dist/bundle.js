!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=a(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:l,updater:v(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);s[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"#app{\r\n  position: relative;\r\n}\r\n\r\n.content{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 200px;\r\n}\r\n\r\n.sidebar{\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 200px;\r\n  z-index:100;\r\n  padding: 10px;\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);  \r\n  overflow-y: auto;\r\n}\r\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n.p+"32d383877dc396740f3de515f5302807.png";function o(e,t=""){return`<div class = "row" style = "${"margin:0 "+t}">${e}</div>`}function i(e){return`<div class = "col-sm">${e}</div>`}class s{constructor(e,t){this.value=e,this.options=t}toHTML(){throw new Error("Methods toHTML must be complete")}}class a extends s{constructor(e,t){super(e,t)}toHTML(){return o(i(`<h1> ${this.value}</h1>`),this.options.styles)}}class c extends s{constructor(e,t){super(e,t)}toHTML(){return o(i(`<p style = "margin-bottom: 0;">${this.value}</p>`),this.options.styles)}}console.log(r);const u=[new a("Test title",{styles:"font-size: 1.5 rem; text-align: center; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 30%, rgba(0,212,255,1) 100%); color: #fff"}),new c("This text supose to be very special, but i dont know what i should wrire and how much sentencice",{styles:"font-size: 1.5 rem; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(214,16,67,1) 49%, rgba(0,0,0,1) 100%); color: white;text-align: center"}),new class extends s{constructor(e,t){super(e,t)}toHTML(){return o(this.value.map(e=>i(e)).join(""),this.options.styles)}}(["First column text about freedom in your choices","Second column text about love and actions in relationships","Third column text about freedom in your choices"],{styles:"font-size: 1.5rem; text-align: center; background: rgb(33,164,166); background: linear-gradient(0deg, rgba(33,164,166,1) 15%, rgba(253,187,45,1)100%); color: white"}),new class extends s{constructor(e,t){super(e,t)}toHTML(){const{alt:e,styles:t,imageStyles:n}=this.options;return o(`<img  src="${this.value}" alt= "${e}"  style ="${n}"/>`,t)}}(r,{styles:"padding: 2rem 0; display: flex; justify-content:center",alt:"my fucking image",imagewStyles:"width:500px; hight: auto"})];function l(e){return`\n  <form name = "${e}">\n  <h5>${e}</h5>\n  <div class="form-group">\n    <input  class="form-control form-control-sm" name = "value" placeholder="value">\n  </div>\n  <div class="form-group">\n    <input  class="form-control form-control-sm" name = "styles" placeholder="styles">\n  </div>\n  <button type="submit" class="btn btn-primary btn-sm">Create</button>\n</form>\n<hr />\n  `}n(1);const d=new class{constructor(e){this.$el=document.querySelector(e)}render(e){this.$el.innerHTML="",e.forEach(e=>{this.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}("#site",e=>{u.push(newBlock),d.render(u)});new class{constructor(e,t){this.$el=document.querySelector(e),this.update=t,this.init()}init(){this.$el.addEventListener("submit",this.addBlock.bind(this)),this.$el.innerHTML=this.template}get template(){return[l("text"),l("title")].join("")}addBlock(e){e.preventDefault();const t=e.target.name,n=e.target.value.value,r=e.target.styles.styles,o=new(t===text?c:a)(n,{styles:r});console.log(o),e.target.value.value="",e.target.styles.value="",this.update(o)}}("#panel"),d.render(u)}]);