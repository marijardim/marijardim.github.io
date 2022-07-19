/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\nclass MenuMobile{\r\n  constructor(menuButton, menuList, events){\r\n  this.menuButton = document.querySelector(menuButton);\r\n  this.menuList = document.querySelector(menuList);\r\n  this.activeClass = 'active'\r\n  this.openMenu = this.openMenu.bind(this)\r\n  //Define touchstart e click como argumento\r\n  //padrão de events caso o usuário não defina\r\n  if(this.events === undefined){\r\n    this.events = ['touchstart', 'click']\r\n  } else {\r\n    this.events = events\r\n  }\r\n  }\r\n  openMenu(event){\r\n    event.preventDefault();\r\n    this.menuList.classList.add(this.activeClass);\r\n    this.menuButton.classList.add(this.activeClass);\r\n  (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, ()=>{\r\n    this.menuList.classList.remove(this.activeClass);\r\n    this.menuButton.classList.remove(this.activeClass);\r\n    })\r\n}\r\n  addMenuMobileEvents(){\r\n    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu))\r\n  }\r\n  init(){\r\n    if(this.menuButton && this.menuList){\r\n      this.addMenuMobileEvents();\r\n    }\r\n  return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto-portfolio/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback){\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n\r\n  if(!element.hasAttribute(outside)){\r\n    events.forEach(userEvent =>{\r\n      setTimeout(()=> html.addEventListener(userEvent, handleOutsideClick)) \r\n    })\r\n    element.setAttribute(outside, '');\r\n  }\r\n  function handleOutsideClick(event){\r\n    if(!element.contains(event.target)){\r\n      element.removeAttribute(outside);\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      })\r\n      callback();\r\n    }\r\n  } \r\n}\r\n\r\n\r\n  \n\n//# sourceURL=webpack://projeto-portfolio/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave{\r\n  constructor(links, options){\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\nscrollToSection(e){\r\n  e.preventDefault();\r\n  const href = e.currentTarget.getAttribute('href');\r\n  const section = document.querySelector(href);\r\n  section.scrollIntoView({behavior: \"smooth\", block: \"start\"})\r\n\r\n}\r\naddLinkEvent(){\r\n  this.linksInternos.forEach((link) =>{\r\n    link.addEventListener('click', this.scrollToSection)\r\n  })\r\n}\r\ninit(){\r\n  this.addLinkEvent();\r\n  return this;\r\n}\r\n}\n\n//# sourceURL=webpack://projeto-portfolio/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n\r\n\r\n\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-menu=\"list\"] a')\r\nscrollSuave.init();\r\n\r\n\r\n\r\n/**************** Show more  ************/\r\nconst btn = document.querySelector('.show-btn');\r\nconst div = document.querySelectorAll('.show-div');\r\nconst quartoElemento = document.querySelector('.flipbox:nth-child(4)')\r\nfunction showMore(e) {\r\n  e.preventDefault();\r\n  quartoElemento.classList.toggle('ativo');\r\n  div.forEach((item)=>{\r\n    item.classList.toggle('active');\r\n  })\r\n  quartoElemento.classList.contains('ativo') ? btn.innerText  = \"Ver menos\" : btn.innerText  = \"Ver mais\";\r\n}\r\n\r\nbtn.addEventListener('click', showMore)\r\n\r\n/*********** scroll menu ************/\r\nwindow.onscroll = function() {myFunction()};\r\n\r\nconst menu = document.querySelector('.menu')\r\nconst classActive = 'active'\r\nconst mobileMenu = document.querySelector('[data-menu=\"list\"]')\r\n\r\nfunction myFunction() {\r\n  if (window.pageYOffset > 20) {\r\n    menu.classList.add(classActive);\r\n  } else {\r\n    menu.classList.remove(classActive);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto-portfolio/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;