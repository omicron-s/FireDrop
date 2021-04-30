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

/***/ "../views/blocks/card-page/card-page.js":
/*!**********************************************!*\
  !*** ../views/blocks/card-page/card-page.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.card-page__card-control button.active').prop('disabled', true);
  $('.card-page__card-img img').attr('src', $('.card-page__card-control button.active img').attr('src'));
  var active = $('.card-page__buttons button.active');

  if (active != null) {
    active.prop('disabled', true);
    $('.card-page__buttons span').css('width', active.width() + 'px');
  }

  $('.card-page__card-control button').on('click', function () {
    $(this).siblings('button').removeClass('active').prop('disabled', false);
    $(this).addClass('active').prop('disabled', true);
    var img = $(this).children('img').attr('src');
    $('.card-page__card-img img').attr('src', img);
  });
  $('.card-page__buttons button').on('click', function () {
    $(this).siblings('button').removeClass('active').prop('disabled', false);
    $('.card-page__text li').removeClass('active');
    $(this).prop('disabled', true);
    $(this).addClass('active');
    var data = this.dataset.set;
    $('.card-page__text li[data-set=' + data + ']').addClass('active');
    cardLine();
    setTimeout(function () {
      cardLine();
    }, 100);
  });
  var scrollTimeout;
  $(window).on('resize', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(cardLine, 150);
  });

  function cardLine() {
    if ($('.card-page').length > 0) {
      var line = $('.card-page__buttons span');
      var button = $('.card-page__buttons button.active');
      var buttonLeft = button.position().left;
      line.css('width', button.width() + 'px');
      line.css('left', buttonLeft + 'px');
    }
  }
});

/***/ }),

/***/ "../views/blocks/faq/faq.js":
/*!**********************************!*\
  !*** ../views/blocks/faq/faq.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.faq__item-button').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings('.faq__item-text').children('dd').slideToggle();
  });
});

/***/ }),

/***/ "../views/blocks/main/heading/heading.js":
/*!***********************************************!*\
  !*** ../views/blocks/main/heading/heading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");
/* harmony import */ var _blocks_slider_sliderNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/slider/sliderNumbers */ "../views/blocks/slider/sliderNumbers.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Autoplay"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#headingSlider', {
    slidesPerView: 1,
    speed: 2000,
    // скорость прокрутки от слайдера к слайдера
    centeredSlides: true,
    spaceBetween: 0,
    allowTouchMove: false,
    autoplay: {
      delay: 5000 // задержка прокрутки от слайдера к слайдера

    },
    loop: true,
    navigation: {
      prevEl: '#headingSliderPrev',
      nextEl: '#headingSliderNext'
    },
    pagination: {
      el: '#headingPagination',
      type: 'bullets',
      clickable: true
    },
    on: {
      init: function init() {
        setTimeout(_blocks_slider_sliderNumbers__WEBPACK_IMPORTED_MODULE_1__["default"], 100, this, '.heading');
      },
      slideChange: function slideChange() {
        Object(_blocks_slider_sliderNumbers__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '.heading');
      }
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var btn = '.mainServices__right-button',
      serv = '.mainServices__service',
      bg = '.mainServices__bg';
  $(window).on('load', function () {
    var active = $('.mainServices__right-button.active');

    if (active != null) {
      active.prop('disabled', true);
    }

    $('.mainServices__right-button').on('click', function () {
      $(btn).prop('disabled', false);
      $(btn).removeClass('active');
      $(serv).removeClass('active');
      $(bg).removeClass('active');
      var data = this.dataset.service;
      var ds = "[data-service=".concat(data, "]");
      $(this).prop('disabled', true);
      $(this).addClass('active');
      $(bg + ds).addClass('active');
      $(serv + ds).addClass('active');
    });
  });
  var windowWidth = window.innerWidth;
  var servSwiper;
  var inits = false;
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      if (!inits) {
        var array = ['proj', 'prod', 'sup', 'assem', 'equip'];
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
            clickable: true,
            renderBullet: function renderBullet(index, className) {
              return "<span class=\"".concat(className, "\" data-service=").concat(array[index], "></span>");
            }
          },
          on: {
            init: function init() {
              setTimeout(function () {
                $('.mainServices__right-button').each(function (i) {
                  if ($(this).hasClass('active')) {
                    servSwiper.slideTo(i);
                    servSwiper.update();
                  }
                });
              }, 10);
            }
          }
        });
        $('#mainServPage .swiper-pagination-bullet').on('click', function () {
          $(btn).prop('disabled', false);
          $(btn).removeClass('active');
          $(serv).removeClass('active');
          $(bg).removeClass('active');
          var data = this.dataset.service;
          var ds = "[data-service=".concat(data, "]");
          $(btn + ds).prop('disabled', true);
          $(btn + ds).addClass('active');
          $(bg + ds).addClass('active');
          $(serv + ds).addClass('active');
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

/***/ "../views/blocks/modals/modal-zoom/modal-zoom.js":
/*!*******************************************************!*\
  !*** ../views/blocks/modals/modal-zoom/modal-zoom.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(window).on('load resize', function () {
    var windowWidth = window.innerWidth;

    if (windowWidth < 400) {
      $('.work__item-button').prop('disabled', true);
    } else {
      $('.work__item-button').prop('disabled', false);
    }
  });
  $('.work__item-button').on('click', function () {
    $('.work__item-button').parent('li').removeClass('showed');
    $(this).parent('li').addClass('showed');
    var src = $(this).siblings('.work__item-img').children('img').attr('src');
    var title = $(this).siblings('.work__item-text').children('b').text();
    $('.modal-zoom__img img').attr('src', src);
    $('.modal-zoom__title b').text(title);
  });
  $('.modal-zoom__prev').on('click', function () {
    var showed = $('.work__item.showed');
    var prev = showed.prev();
    changed(prev);

    if (prev.prev().prop('localName') != 'li') {
      $(this).addClass('swiper-button-disabled');
      $(this).prop('disabled', true);
    }

    if (prev.prop('localName') == 'li') {
      $('.modal-zoom__next').prop('disabled', false);
      $('.modal-zoom__next').removeClass('swiper-button-disabled');
    }
  });
  $('.modal-zoom__next').on('click', function () {
    var showed = $('.work__item.showed');
    var next = showed.next();
    changed(next);

    if (next.next().prop('localName') != 'li') {
      $(this).addClass('swiper-button-disabled');
      $(this).prop('disabled', true);
    }

    if (next.prop('localName') == 'li') {
      $('.modal-zoom__prev').prop('disabled', false);
      $('.modal-zoom__prev').removeClass('swiper-button-disabled');
    }
  });

  function changed(el) {
    if (el.prop('localName') == 'li') {
      var src = el.children('.work__item-img').children('img').attr('src');
      $('.modal-zoom__img img').attr('src', src);
      $('.work__item').removeClass('showed');
      el.addClass('showed');
      var title = el.children('.work__item-text');

      if (title != null) {
        $('.modal-zoom__title b').text(title.children('b').text());
      } else {
        $('.modal-zoom__title b').text('');
      }
    }
  }
});

/***/ }),

/***/ "../views/blocks/resume/resume.js":
/*!****************************************!*\
  !*** ../views/blocks/resume/resume.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.input-file input').on('change', function () {
    $('.input-file-name').text(this.files[0].name);
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
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 10,
    centeredSlides: true,
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
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: false
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: false
      }
    }
  });
  var resizeSwiper = false;
  $(window).on('resize', function () {
    var windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      if (!resizeSwiper) {
        resizeSwiper = true;
        $('.slider .swiper-slide').attr('style', null);
      }
    } else {
      resizeSwiper = false;
    }
  });
});

/***/ }),

/***/ "../views/blocks/slider/sliderNumbers.js":
/*!***********************************************!*\
  !*** ../views/blocks/slider/sliderNumbers.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (slider, query) {
  var zero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var slidesNumber = slider.realIndex + 1,
      loopedSlide = slider.loopedSlides * 2 || 0;
  var maxNumber = slider.slides.length - loopedSlide;
  $(query + ' .slider__quantity-1st').text(slidesNumber);
  $(query + ' .slider__quantity-2nd').text(maxNumber);
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
/* harmony import */ var _blocks_slider_sliderNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/slider/sliderNumbers */ "../views/blocks/slider/sliderNumbers.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#trustSlider', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 15,
    navigation: {
      prevEl: '#trustSliderPrev',
      nextEl: '#trustSliderNext'
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    },
    on: {
      init: function init() {
        setTimeout(_blocks_slider_sliderNumbers__WEBPACK_IMPORTED_MODULE_1__["default"], 100, this, '.trust');
      },
      slideChange: function slideChange() {
        Object(_blocks_slider_sliderNumbers__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '.trust');
      },
      resize: function resize() {
        Object(_blocks_slider_sliderNumbers__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '.trust');
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

/***/ "../views/layouts/modal/modal.js":
/*!***************************************!*\
  !*** ../views/layouts/modal/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  //функция close
  var modalClose = function modalClose(e) {
    $('body, .modal').css('padding-right', 0); // $('.navbar').css('right', 0);

    $(e).parentsUntil('modal').removeClass('show');

    if (!$('.modal').hasClass('show')) {
      $('html').removeClass('fixed');
      focusUnlock();
      $('.modal__content').find(':focus').trigger('blur'); //Переход на предыдущий фокус

      $('.modal__content').one('transitionend', function () {
        $(tabMemory).trigger('focus');
      }); //Включить запись фокус

      modalIsOpen = false;
    }
  }; //Focus-lock


  var focusLock = function focusLock() {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '-1');
    });
    focusModalElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  }; //Focus-unlock


  var focusUnlock = function focusUnlock() {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  }; //focusable элементы


  var focusElements = $('a[href], button, input, textarea, select').has('focus'); //focusable элементы в modal

  var focusModalElements = $('.modal__content').find('a[href], button, input, textarea, select').has('focus'); // Инициализация переменных, 1-ый элемент по умолчанию и  модалка не открыта

  var tabMemory = focusElements.prevObject.first();
  var modalIsOpen = false; //При фокусе запоминаем предыдущый элемент, т.к. модалка открывается текущей кнопкой

  $('a[href], button, input, textarea, select').on('focusin', function () {
    if (!modalIsOpen) {
      tabMemory = $(this);
    }
  }); //открытие модального окна

  $('button[data-modal], a[data-modal]').on('click', function () {
    var modalName = $(this).attr('data-modal');
    var body = $('body').width();
    var scrollWidth = window.innerWidth - body; // let headerTop = $('.header').outerHeight();
    //Отменяем запоминание текущего фокуса

    modalIsOpen = true; //Удаление всех tabindex

    focusLock(); //Показ модалки

    $('.modal[data-modal="' + modalName + '"]').addClass('show'); //Фиксируем страницу

    $('html').addClass('fixed');

    if (scrollWidth > 0) {
      $('body, .modal').css('padding-right', scrollWidth); // $('.navbar').css('right', scrollWidth);
    }
  }); //Отмена по кнопке "Закрыть" и по фону

  $('.modal__btn button, .modal__button-close').on('click', function (e) {
    modalClose(e.target);
  });
  $('.modal-overlay').on('click', function () {
    modalClose('.modal__content');
  }); //Отмена по Esc

  $(document).on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 27) {
      modalClose();
    }
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
/* harmony import */ var _blocks_card_page_card_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/card-page/card-page */ "../views/blocks/card-page/card-page.js");
/* harmony import */ var _blocks_resume_resume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/resume/resume */ "../views/blocks/resume/resume.js");
/* harmony import */ var _blocks_faq_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/faq/faq */ "../views/blocks/faq/faq.js");
/* harmony import */ var _blocks_modals_modal_zoom_modal_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/modals/modal-zoom/modal-zoom */ "../views/blocks/modals/modal-zoom/modal-zoom.js");
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");
// import $ from 'jquery';
// import 'core-js/stable/array/for-each';
// import 'core-js/stable/array/includes';
// import 'core-js/stable/dom-collections/for-each';
// import 'core-js/stable';

/* полифил для :focus-visible */
// import 'focus-visible/dist/focus-visible.min';









 // import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

$('.nav__item-link').each(function () {
  if (this.href == location.href) {
    this.disabled = true;
    $(this).attr('tabindex', -1);
    $(this).addClass('active');
  }
});
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
  Object(_blocks_trust_trust__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_blocks_slider_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_blocks_card_page_card_page__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_blocks_resume_resume__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_blocks_faq_faq__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_9__["default"])();
});
Object(_blocks_main_services_services__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_blocks_modals_modal_zoom_modal_zoom__WEBPACK_IMPORTED_MODULE_8__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map