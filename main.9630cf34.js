parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IRQJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.thanksModal=exports.thanksCloseBtn=exports.thanksShowBtn=exports.checkoutModal=exports.checkoutCloseBtn=exports.checkoutShowBtn=exports.shoppingBagCloseBtn=exports.buyBtn=exports.shoppingBagIcon=exports.shoppingBagModal=exports.page=exports.overlay=exports.menuCloseBtn=exports.nav=exports.headerToggleBtn=void 0;var e=document.querySelector(".header__menuToggler");exports.headerToggleBtn=e;var o=document.querySelector(".nav");exports.nav=o;var t=document.querySelector(".nav__closeBtn");exports.menuCloseBtn=t;var r=document.querySelector(".overlay");exports.overlay=r;var n=document.querySelector(".page");exports.page=n;var s=document.querySelector(".shoppingBagModal");exports.shoppingBagModal=s;var a=document.querySelector(".header__cart");exports.shoppingBagIcon=a;var c=document.querySelectorAll(".btn");exports.buyBtn=c;var p=document.querySelector(".shoppingBagModal__closeBtn");exports.shoppingBagCloseBtn=p;var l=document.querySelector(".shoppingBagModal__checkoutBtn");exports.checkoutShowBtn=l;var u=document.querySelector(".checkoutModal__closeBtn");exports.checkoutCloseBtn=u;var d=document.querySelector(".checkoutModal");exports.checkoutModal=d;var h=document.querySelector(".checkoutModal__btn");exports.thanksShowBtn=h;var x=document.querySelector(".thanksModal__closeBtn");exports.thanksCloseBtn=x;var B=document.querySelector(".thanksModal");exports.thanksModal=B;
},{}],"qh2m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showMenu=s,exports.hideMenu=a;var e=require("./consts");function s(){e.nav.classList.add("nav_active"),e.overlay.classList.add("overlay_active"),e.page.classList.add("page_no-scroll")}function a(){e.nav.classList.remove("nav_active"),e.overlay.classList.remove("overlay_active"),e.page.classList.remove("page_no-scroll")}
},{"./consts":"IRQJ"}],"hAAx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shoppingBagShow=e,exports.shoppingBagHide=s;var a=require("./consts");function e(){a.shoppingBagModal.classList.add("shoppingBagModal_active"),a.overlay.classList.add("overlay_active")}function s(){a.shoppingBagModal.classList.remove("shoppingBagModal_active"),a.overlay.classList.remove("overlay_active")}
},{"./consts":"IRQJ"}],"RcQI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkoutModalShow=o,exports.checkoutModalHide=c;var e=require("./consts");function o(){e.checkoutModal.classList.add("checkoutModal_active"),e.shoppingBagModal.classList.remove("shoppingBagModal_active")}function c(){e.checkoutModal.classList.remove("checkoutModal_active"),e.overlay.classList.remove("overlay_active")}
},{"./consts":"IRQJ"}],"nSMW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.thanksModalShow=a,exports.thanksModalHide=s;var e=require("./consts");function a(){e.thanksModal.classList.add("thanksModal_active"),e.checkoutModal.classList.remove("checkoutModal_active")}function s(){e.thanksModal.classList.remove("thanksModal_active"),e.overlay.classList.remove("overlay_active")}
},{"./consts":"IRQJ"}],"KIzB":[function(require,module,exports) {
"use strict";var e=require("./custom/consts"),n=require("./custom/burgerMenu"),t=require("./custom/shoppingBag"),c=require("./custom/checkout"),i=require("./custom/thanks");e.headerToggleBtn.addEventListener("click",n.showMenu),e.overlay.addEventListener("click",n.hideMenu),e.menuCloseBtn.addEventListener("click",n.hideMenu),e.shoppingBagIcon.addEventListener("click",t.shoppingBagShow),e.shoppingBagCloseBtn.addEventListener("click",t.shoppingBagHide),e.overlay.addEventListener("click",t.shoppingBagHide),e.buyBtn.forEach(function(e){e.addEventListener("click",t.shoppingBagShow)}),e.checkoutShowBtn.addEventListener("click",c.checkoutModalShow),e.checkoutCloseBtn.addEventListener("click",c.checkoutModalHide),e.overlay.addEventListener("click",c.checkoutModalHide),e.thanksShowBtn.addEventListener("click",function(e){e.preventDefault()}),e.thanksShowBtn.addEventListener("click",i.thanksModalShow),e.thanksCloseBtn.addEventListener("click",i.thanksModalHide),e.overlay.addEventListener("click",i.thanksModalHide);
},{"./custom/consts":"IRQJ","./custom/burgerMenu":"qh2m","./custom/shoppingBag":"hAAx","./custom/checkout":"RcQI","./custom/thanks":"nSMW"}]},{},["KIzB"], null)
//# sourceMappingURL=main.9630cf34.js.map