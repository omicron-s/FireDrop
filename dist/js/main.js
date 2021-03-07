/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/main/heading/heading.js":
/*!***********************************************!*\
  !*** ../views/blocks/main/heading/heading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#headingSlider', {
    slidesPerView: 1,
    speed: 1000,
    centeredSlides: true,
    spaceBetween: 0,
    navigation: {
      prevEl: '#headingSliderPrev',
      nextEl: '#headingSliderNext'
    },
    pagination: {
      el: '#headingPagination',
      type: 'bullets',
      clickable: true
    }
  });
});

/***/ }),

/***/ "../views/blocks/main/services/services.js":
/*!*************************************************!*\
  !*** ../views/blocks/main/services/services.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var active = document.querySelector('.mainServices__right-button.active');

  if (active != null) {
    active.disabled = true;
  }

  $('.mainServices__right-button').on('click', function () {
    var btns = document.querySelectorAll('.mainServices__right-button');
    console.log('hey');
    btns.forEach(function (element) {
      element.disabled = false;
    });
    $('.mainServices__right-button').removeClass('active');
    $('.mainServices__service').removeClass('active');
    var data = this.dataset.service;
    this.disabled = true;
    $(this).addClass('active');
    $('.mainServices__service[data-service=' + data + ']').addClass('active');
  });
  var windowWidth = window.innerWidth;
  var servSwiper;
  var inits = false;
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      if (!inits) {
        inits = true;
        swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"]]);
        servSwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#mainServSlider', {
          slidesPerView: 1,
          speed: 400,
          spaceBetween: 30,
          autoHeight: true,
          pagination: {
            el: '#mainServPage',
            type: 'bullets',
            clickable: true
          }
        });
      }
    } else {
      if (inits) {
        inits = false;
        servSwiper.destroy();
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/slider/slider.js":
/*!****************************************!*\
  !*** ../views/blocks/slider/slider.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider .swiper-container', {
    slidesPerView: 'auto',
    speed: 400,
    // centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      prevEl: '.slider .swiper-button-prev',
      nextEl: '.slider .swiper-button-next'
    },
    pagination: {
      el: '.slider .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 30
      },
      1024: {
        spaceBetween: 40
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/trust/trust.js":
/*!**************************************!*\
  !*** ../views/blocks/trust/trust.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#trustSlider', {
    slidesPerView: 1,
    speed: 400,
    // centeredSlides: true,
    spaceBetween: 15,
    navigation: {
      prevEl: '#trustSliderPrev',
      nextEl: '#trustSliderNext'
    },
    breakpoints: {
      768: {
        slidesPerView: 2 // spaceBetween: 30

      },
      1024: {
        slidesPerView: 3 // spaceBetween: 30

      }
    }
  });
});

/***/ }),

/***/ "../views/layouts/header/header.js":
/*!*****************************************!*\
  !*** ../views/layouts/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /* Появление меню по кнопке */
  $('.button-burger').on('click', function () {
    var expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header').toggleClass('open');
    $('.header__mid').toggleClass('open');
    $('html').toggleClass('header__open');
  });
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/header/header */ "../views/layouts/header/header.js");
/* harmony import */ var _blocks_main_heading_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/main/heading/heading */ "../views/blocks/main/heading/heading.js");
/* harmony import */ var _blocks_main_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/main/services/services */ "../views/blocks/main/services/services.js");
/* harmony import */ var _blocks_trust_trust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/trust/trust */ "../views/blocks/trust/trust.js");
/* harmony import */ var _blocks_slider_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/slider/slider */ "../views/blocks/slider/slider.js");
// import $ from 'jquery';
// import 'core-js/stable/array/for-each';
// import 'core-js/stable/array/includes';
// import 'core-js/stable/dom-collections/for-each';
// import 'core-js/stable';

/* полифил для :focus-visible */
// import 'focus-visible/dist/focus-visible.min';




 // import serv from '@blocks/where/services';
// import prices from '@blocks/prices/prices';
// import about from '@blocks/about/about';
// import shares from '@blocks/shares/shares';
// import modal from '@layouts/modal/modal';
// import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

$('.navUtility__item-link').each(function () {
  if (this.href == location.href) {
    this.disabled = true;
    $(this).attr('tabindex', -1);
    $(this).addClass('active');
  }
});
$(function () {
  // svg4everybody();
  // $('svg').attr('focusable', 'false');
  Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_blocks_main_heading_heading__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_blocks_main_services_services__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_blocks_trust_trust__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_blocks_slider_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map