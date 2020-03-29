function myFunction() {
}/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _watchMail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchMail */ "./src/watchMail.ts");
/* harmony import */ var _spreadSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spreadSheet */ "./src/spreadSheet.ts");


global.myFunction = () => {
    const expences = Object(_watchMail__WEBPACK_IMPORTED_MODULE_0__["getExpenses"])();
    Object(_spreadSheet__WEBPACK_IMPORTED_MODULE_1__["writeSheet"])(expences);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/spreadSheet.ts":
/*!****************************!*\
  !*** ./src/spreadSheet.ts ***!
  \****************************/
/*! exports provided: writeSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeSheet", function() { return writeSheet; });
const writeSheet = (expences) => {
    const foodStores = ["SEVEN-ELEVEN JAPAN", "FAMILYMART"];
    // const otherStores = ["AMAZON CO JP", "BIC CAMERA"];
    const sheet = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SHEET_ID")).getSheetByName("accountbook");
    const foodAmounts = [];
    const otherAmounts = [];
    expences.forEach(({ amount, store }) => {
        if (foodStores.includes(store)) {
            foodAmounts.push(amount);
        }
        else {
            otherAmounts.push(amount);
        }
    });
    Logger.log(foodAmounts);
    Logger.log(otherAmounts);
    const lastRow = sheet.getLastRow();
    if (foodAmounts[0]) {
        sheet.getRange(lastRow + 1, 2).setValue(`= ${foodAmounts.join(" + ")}`);
    }
    if (otherAmounts[0]) {
        sheet.getRange(lastRow + 1, 4).setValue(`= ${otherAmounts.join(" + ")}`);
    }
    sheet.getRange(lastRow + 1, 1).setValue(new Date());
};


/***/ }),

/***/ "./src/watchMail.ts":
/*!**************************!*\
  !*** ./src/watchMail.ts ***!
  \**************************/
/*! exports provided: getExpenses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpenses", function() { return getExpenses; });
const getExpenses = () => {
    const tmpArray = [];
    const regexp1 = /ご利用金額（円）\s+:\s+\d+,?\d+,?\d+/g;
    const regexp2 = /\d+,?\d+,?\d+/g;
    const regexp3 = /ご利用先\s+:\s+\w+ ?\w+-? ?\w+ ?\w+/g;
    const regexp4 = /\w+-? ?\w+ ?\w+ ?\w+/g;
    GmailApp.getInboxThreads().forEach((thread) => {
        thread.getMessages().forEach((message) => {
            if (message.isUnread() && regexp1.test(message.getBody())) {
                tmpArray.push(message.getBody());
            }
        });
    });
    return tmpArray.map((body) => {
        return {
            amount: toNum(body.match(regexp1)[0].match(regexp2)[0]),
            store: body.match(regexp3)[0].match(regexp4)[0],
        };
    });
};
const toNum = (value) => {
    return Number(value.match(/\d+/g).join(""));
};


/***/ })

/******/ });