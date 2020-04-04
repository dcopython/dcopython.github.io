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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// body CSS\ndocument.body.style.background = \"#f6f3ee\";\n\nObject(_modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"homePage\"])();\n\nconst tabButtons = document.querySelectorAll(\"button\");\ntabButtons.forEach((button) => { \n    button.addEventListener(\"click\", function (e) {\n        switchTabs(e.target.id);\n    }); \n});\n\nconst removeLastDiv = () => {\n    let lastDiv = document.getElementById(\"content\").lastChild.id;\n\n    if ( lastDiv == \"menuDiv\" || lastDiv == \"contactDiv\") {\n        document.getElementById(\"content\").lastChild.remove()\n    }\n}\n\nconst changeTabColor = (btn) => {\n    tabButtons.forEach((button) => {\n        button.style.background = \"#5a5243\";\n        button.style.color = \"white\";\n    })\n\n    document.getElementById(`${btn}`).style.background = \"white\";\n    document.getElementById(`${btn}`).style.color = \"#5a5243\";\n    \n}\n\nconst switchTabs = (id) => {\n    //take in id and run function for that tab\n    const switchToMenu = () => {\n        removeLastDiv();\n        changeTabColor(id);\n        Object(_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"menu\"])();\n    }\n\n    const switchToContact = () => {\n        removeLastDiv();\n        changeTabColor(id);\n        Object(_modules_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"contact\"])();\n    }\n\n    switch (id) {\n        case \"menuButton\":\n            switchToMenu();\n            break;\n    \n        case \"contactButton\":\n            switchToContact();\n            break;\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\nconst contact = () => {\n    const mainDiv = document.getElementById(\"content\");\n\n    const create = (name, text) => {\n        const make = () => {\n            const div = document.createElement(\"div\");\n            div.id = name;\n            div.innerHTML = text;\n\n            return {\n                div\n            }\n        }\n\n        return {\n            make: make()\n        }\n\n    }\n\n    const text = `\n            <h2>Contact Us</h2>\n            <p>123 4th Street Suite 567</p>\n            <p>Town, State 00000</p>\n            <p>123-456-7890</p>\n            <p>business@business.com</p>\n            `;\n\n    const contact = create(\"contactDiv\", text);\n\n    // contact DIV CSS\n    contact.make.div.style.border = \"1px solid white\";\n    contact.make.div.style.background = \"white\";\n\n    mainDiv.append(contact.make.div);\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/*! exports provided: homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\nconst homePage = () => {\n    const mainDiv = document.getElementById(\"content\");\n\n    const createContent = (name, text) => {\n        const make = () => {\n            const div = document.createElement(\"div\");\n            div.id = name;\n            div.innerHTML = text;\n            mainDiv.append(div);\n        }\n\n        make();\n    \n        return {\n            name,\n            text,\n            make\n        }\n        \n    }\n\n    // add img\n    const img = createContent(\"imgDiv\", \"<img src='/img/restaurant.jpg'>\");\n\n    // add headline\n    const headline = createContent(\"headlineDiv\", \"<h1>Welcome to Seattle's #1 Rated Restaurant!</h1>\");\n\n    // add quote\n    const quote = createContent(\"quoteDiv\", `<h5>\"The food tastes really good and must try if you are in seattle. I went there with few friends and enjoyed it so much. Plus price is very affordable so it's pretty nice. For casual hang out I recommend you to visit.\" - Yelp Reviewer</h5>`);\n\n    // add tabs\n    const tabs = (() => {\n        const tabsDiv = document.createElement(\"div\");\n        tabsDiv.id = \"tabsDiv\";\n\n        const make = (name, text) => {\n            let div = document.createElement(\"button\");\n            div.id = name;\n            div.innerText = text;\n            tabsDiv.append(div);\n\n            return {\n                div,\n                make\n            }\n        }\n\n        const menu = make(\"menuButton\", \"Menu\");\n\n        const contact = make(\"contactButton\", \"Contact\");\n\n        // menu button CSS\n        menu.div.style.width = \"85px\";\n        menu.div.style.height = \"49px\";\n        menu.div.style.background = \"white\";\n        menu.div.style.border = \"1px solid white\";\n        menu.div.style.color = \"#5a5243\";\n\n        //contact button CSS\n        contact.div.style.width = \"85px\";\n        contact.div.style.height = \"49px\";\n        contact.div.style.background = \"#5a5243\"\n        contact.div.style.border = \"1px solid white\";\n        contact.div.style.color = \"white\";\n\n        mainDiv.append(tabsDiv);\n\n    })();\n \n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\nconst menu = () => {\n    const contentDiv = document.getElementById(\"content\");\n\n    const create = (name, text) => {\n        const make = () => {\n            const div = document.createElement(\"div\");\n            div.id = name;\n            div.innerHTML = text;\n            menuDiv.append(div);\n        }\n\n        make();\n\n        return {\n            name,\n            text,\n            make,\n        }\n\n    }\n\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.id = \"menuDiv\";\n\n    const menuHeader = create(\"menuheader\", \"<h1>Menu</h1>\");\n\n    const saladSoup = create(\"saladsoupdiv\",`\n        <h2>Salads and Soup</h2>\n        <p>Caesar Selections – Crisp romaine lettuce tossed with our homemade Caesar dressing, croutons, and shredded parmesan cheese. With chicken, $8.95; shrimp, $9.95; crab cake, $11.95; steak, $13.95; lobster, $15.95.</p>\n        <p>Spinach Salad – Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette, $7.95.</p>\n        <p>Lobster Bisque – Fresh minced lobster in a thick, creamy broth with a touch of sherry, $5.95 cup/$7.95 bowl.</p>\n        <p>Traditional New England Seafood Chowder – with clams, scallops, and shrimp, $5.95 cup/$7.95 bowl.</p>\n    `);\n\n    const meats = create(\"meatsdiv\",`\n        <h2>From The Barnyard</h2>\n        <p>Traditional Filet Mignon – A 6 oz tenderloin wrapped in bacon and served with pureed yukon gold potatoes and haricots verts, $26.95</p>\n        <p>Bacon Bourbon Tenderloin Tips – Tenderloin tips, sautéed with bacon and mushrooms and finished with a bourbon-BBQ sauce, $19.95</p>\n        <p>Rustlers Ribeye – Thick, hand-cut prime rib, grilled to order, served with a baked potato and seasonal vegetable medley, $23.95.</p>\n        <p>Surf and Turf – A grilled, queen-cut ribeye served with shrimp and scallop alfredo, $28.95</p>  \n    `);\n\n    // menu Div CSS\n    menuDiv.style.border = \"1px solid white\";\n    menuDiv.style.background = \"white\";\n\n    \n    contentDiv.append(menuDiv);\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });