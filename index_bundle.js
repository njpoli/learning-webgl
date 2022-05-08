/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    background-color: #272b30;\r\n}\r\n\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#gameArea {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;AACZ","sourcesContent":["html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    background-color: #272b30;\r\n}\r\n\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#gameArea {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./nate-8-bit.txt": 238,
	"./nate-8-bit_0.png": 365
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 500;

/***/ }),

/***/ 605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alf_remix.mp3": 853,
	"./bird_jump.wav": 607,
	"./death.wav": 959,
	"./ting.wav": 536
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 605;

/***/ }),

/***/ 245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./background.png": 691,
	"./bird.png": 11,
	"./bird_shrunk.png": 826,
	"./bird_shrunk_2.png": 849,
	"./grass.png": 473,
	"./grass_bigger.png": 824,
	"./pipe_body.png": 292,
	"./pipe_end.png": 440,
	"./play_button.png": 544,
	"./restart_button.png": 776,
	"./scoreboard.png": 711,
	"./stone_wall.jpg": 190,
	"./stone_wall_128x128.jpg": 738,
	"./title.png": 962,
	"./tutorial.png": 908,
	"./wood_plank.jpg": 847,
	"./wood_plank_128x128.jpg": 306
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 245;

/***/ }),

/***/ 924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./testZone.json": 993
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 924;

/***/ }),

/***/ 238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/fonts/nate-8-bit.txt";

/***/ }),

/***/ 365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/fonts/nate-8-bit_0.png";

/***/ }),

/***/ 853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/sounds/alf_remix.mp3";

/***/ }),

/***/ 607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/sounds/bird_jump.wav";

/***/ }),

/***/ 959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/sounds/death.wav";

/***/ }),

/***/ 536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/sounds/ting.wav";

/***/ }),

/***/ 691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/background.png";

/***/ }),

/***/ 11:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/bird.png";

/***/ }),

/***/ 826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/bird_shrunk.png";

/***/ }),

/***/ 849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/bird_shrunk_2.png";

/***/ }),

/***/ 473:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/grass.png";

/***/ }),

/***/ 824:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/grass_bigger.png";

/***/ }),

/***/ 292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/pipe_body.png";

/***/ }),

/***/ 440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/pipe_end.png";

/***/ }),

/***/ 544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/play_button.png";

/***/ }),

/***/ 776:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/restart_button.png";

/***/ }),

/***/ 711:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/scoreboard.png";

/***/ }),

/***/ 190:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/stone_wall.jpg";

/***/ }),

/***/ 738:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/stone_wall_128x128.jpg";

/***/ }),

/***/ 962:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/title.png";

/***/ }),

/***/ 908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/tutorial.png";

/***/ }),

/***/ 847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/wood_plank.jpg";

/***/ }),

/***/ 306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/textures/wood_plank_128x128.jpg";

/***/ }),

/***/ 993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/zones/testZone.json";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/core/message/messageSubscriptionNode.ts
var MessageSubscriptionNode = /** @class */ (function () {
    function MessageSubscriptionNode(message, handler) {
        this.message = message;
        this.handler = handler;
    }
    return MessageSubscriptionNode;
}());


;// CONCATENATED MODULE: ./src/core/message/messageBus.ts


var MessageBus = /** @class */ (function () {
    function MessageBus() {
    }
    MessageBus.addSubscription = function (code, handler) {
        if (!MessageBus._subscriptions[code]) {
            MessageBus._subscriptions[code] = [];
        }
        if (MessageBus._subscriptions[code].indexOf(handler) !== -1) {
            console.warn('Attempting to add a duplicate handler to code ' +
                code +
                '. Subscription not added.');
        }
        else {
            MessageBus._subscriptions[code].push(handler);
        }
    };
    MessageBus.removeSubscription = function (code, handler) {
        // Not sure if this is correct
        if (!MessageBus._subscriptions[code]) {
            console.warn('Cannot unsubscribe handler from code: ' +
                code +
                ' because that code does not subscribed to.');
            return;
        }
        var nodeIndex = MessageBus._subscriptions[code].indexOf(handler);
        if (nodeIndex !== -1) {
            MessageBus._subscriptions[code] = MessageBus._subscriptions[code].filter(function (_, idx) { return idx !== nodeIndex; });
        }
    };
    MessageBus.post = function (message) {
        console.log('Message posted:', message);
        var handlers = MessageBus._subscriptions[message.code];
        if (!handlers) {
            return;
        }
        handlers.forEach(function (h) {
            if (message.priority === MessagePriority.HIGH) {
                h.onMessage(message);
            }
            else {
                MessageBus._normalMessageQueue.push(new MessageSubscriptionNode(message, h));
            }
        });
    };
    // Not using time?
    MessageBus.update = function (time) {
        if (MessageBus._normalMessageQueue.length === 0) {
            return;
        }
        var messageLimit = Math.min(MessageBus._normalQueueMessagePerUpdate, MessageBus._normalMessageQueue.length);
        for (var i = 0; i < messageLimit; ++i) {
            var node = MessageBus._normalMessageQueue.pop();
            node === null || node === void 0 ? void 0 : node.handler.onMessage(node.message);
        }
    };
    MessageBus._subscriptions = {};
    MessageBus._normalQueueMessagePerUpdate = 10;
    MessageBus._normalMessageQueue = [];
    return MessageBus;
}());


;// CONCATENATED MODULE: ./src/core/message/message.ts

var MessagePriority;
(function (MessagePriority) {
    MessagePriority[MessagePriority["NORMAL"] = 0] = "NORMAL";
    MessagePriority[MessagePriority["HIGH"] = 1] = "HIGH";
})(MessagePriority || (MessagePriority = {}));
var Message = /** @class */ (function () {
    function Message(code, sender, context, priority) {
        if (priority === void 0) { priority = MessagePriority.NORMAL; }
        this.code = code;
        this.sender = sender;
        this.context = context;
        this.priority = priority;
    }
    Message.send = function (code, sender, context) {
        MessageBus.post(new Message(code, sender, context, MessagePriority.NORMAL));
    };
    Message.sendPriority = function (code, sender, context) {
        MessageBus.post(new Message(code, sender, context, MessagePriority.HIGH));
    };
    Message.subscribe = function (code, handler) {
        MessageBus.addSubscription(code, handler);
    };
    Message.unsubscribe = function (code, handler) {
        MessageBus.removeSubscription(code, handler);
    };
    return Message;
}());


;// CONCATENATED MODULE: ./src/collision/collisionManager.ts

var CollisionData = /** @class */ (function () {
    function CollisionData(time, a, b) {
        this.time = time;
        this.a = a;
        this.b = b;
    }
    return CollisionData;
}());

var CollisionManager = /** @class */ (function () {
    function CollisionManager() {
    }
    CollisionManager.registerCollisionComponent = function (component) {
        CollisionManager._components.push(component);
    };
    CollisionManager.unregisterCollisionComponent = function (component) {
        var idx = CollisionManager._components.indexOf(component);
        if (idx !== -1) {
            CollisionManager._components = CollisionManager._components.filter(function (_, i) { return i !== idx; });
        }
    };
    CollisionManager.clear = function () {
        CollisionManager._components.length = 0;
    };
    CollisionManager.update = function (time) {
        var _a, _b;
        CollisionManager._totalTime += time;
        for (var c = 0; c < CollisionManager._components.length; c++) {
            var comp = CollisionManager._components[c];
            for (var o = c + 1; o < CollisionManager._components.length; o++) {
                var other = CollisionManager._components[o];
                // If both shapes are static, stop detection.
                if (comp && other && comp.isStatic && other.isStatic) {
                    continue;
                }
                if (comp.shape.intersects(other.shape)) {
                    // Have a collision
                    var exists = false;
                    for (var d = 0; d < CollisionManager._collisionData.length; d++) {
                        var data = CollisionManager._collisionData[d];
                        if ((data.a === comp && data.b === other) ||
                            (data.b === comp && data.a === other)) {
                            // We have existing data. Update it.
                            // onCollisionUpdate
                            comp.onCollisionUpdate(other);
                            other.onCollisionUpdate(comp);
                            data.time = CollisionManager._totalTime;
                            exists = true;
                            break;
                        }
                    }
                    if (!exists) {
                        // Create a collision
                        // onCollisionEntry
                        comp.onCollisionEntry(other);
                        other.onCollisionEntry(comp);
                        var coll = new CollisionData(CollisionManager._totalTime, comp, other);
                        Message.sendPriority('COLLISION_ENTRY', undefined, coll);
                        this._collisionData.push(coll);
                    }
                }
            }
        }
        // Remove stale collision data.
        var removeData = [];
        for (var d = 0; d < CollisionManager._collisionData.length; d++) {
            var data = CollisionManager._collisionData[d];
            if (data.time !== CollisionManager._totalTime) {
                // Old collision data
                // onCollisionExit
                removeData.push(data);
                // @ts-ignore
                (_a = data.a) === null || _a === void 0 ? void 0 : _a.onCollisionExit(data.b);
                // @ts-ignore
                (_b = data.b) === null || _b === void 0 ? void 0 : _b.onCollisionExit(data.a);
                // @ts-ignore
                Message.sendPriority('COLLISION_EXIT', undefined, data);
            }
        }
        while (removeData.length !== 0) {
            var idx = CollisionManager._collisionData.indexOf(removeData[0]);
            CollisionManager._collisionData.splice(idx, 1);
            removeData.shift();
        }
    };
    CollisionManager._totalTime = 0;
    CollisionManager._components = [];
    CollisionManager._collisionData = [];
    return CollisionManager;
}());


;// CONCATENATED MODULE: ./src/core/assets/imageAssetLoader.ts

var ImageAsset = /** @class */ (function () {
    function ImageAsset(name, data) {
        this.name = name;
        this.data = data;
    }
    Object.defineProperty(ImageAsset.prototype, "height", {
        get: function () {
            return this.data.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageAsset.prototype, "width", {
        get: function () {
            return this.data.width;
        },
        enumerable: false,
        configurable: true
    });
    return ImageAsset;
}());

var ImageAssetLoader = /** @class */ (function () {
    function ImageAssetLoader() {
    }
    Object.defineProperty(ImageAssetLoader.prototype, "supportedExtensions", {
        get: function () {
            return ['png', 'gif', 'jpg'];
        },
        enumerable: false,
        configurable: true
    });
    ImageAssetLoader.prototype.loadAsset = function (assetName) {
        var image = new Image();
        image.onload = this.onImageLoaded.bind(this, assetName, image);
        image.src = assetName;
    };
    ImageAssetLoader.prototype.onImageLoaded = function (assetName, image) {
        console.log('onImageLoaded: assetName/image', assetName, image);
        var asset = new ImageAsset(assetName, image);
        AssetManager.onAssetLoaded(asset);
    };
    return ImageAssetLoader;
}());


;// CONCATENATED MODULE: ./src/core/assets/jsonAssetLoader.ts

var JsonAsset = /** @class */ (function () {
    function JsonAsset(name, data) {
        this.name = name;
        this.data = data;
    }
    return JsonAsset;
}());

var JsonAssetLoader = /** @class */ (function () {
    function JsonAssetLoader() {
    }
    Object.defineProperty(JsonAssetLoader.prototype, "supportedExtensions", {
        get: function () {
            return ['json'];
        },
        enumerable: false,
        configurable: true
    });
    JsonAssetLoader.prototype.loadAsset = function (assetName) {
        var request = new XMLHttpRequest();
        request.open('GET', assetName);
        request.addEventListener('load', this.onJsonLoaded.bind(this, assetName, request));
        request.send();
    };
    JsonAssetLoader.prototype.onJsonLoaded = function (assetName, request) {
        console.log('onImageLoaded" assetName/image', assetName, request);
        if (request.readyState === request.DONE) {
            var json = JSON.parse(request.responseText);
            var asset = new JsonAsset(assetName, json);
            AssetManager.onAssetLoaded(asset);
        }
    };
    return JsonAssetLoader;
}());


;// CONCATENATED MODULE: ./src/core/assets/textAssetLoader.ts

var TextAsset = /** @class */ (function () {
    function TextAsset(name, data) {
        this.name = name;
        this.data = data;
    }
    return TextAsset;
}());

var TextAssetLoader = /** @class */ (function () {
    function TextAssetLoader() {
    }
    Object.defineProperty(TextAssetLoader.prototype, "supportedExtensions", {
        get: function () {
            return ['txt'];
        },
        enumerable: false,
        configurable: true
    });
    TextAssetLoader.prototype.loadAsset = function (assetName) {
        var request = new XMLHttpRequest();
        request.open('GET', assetName);
        request.addEventListener('load', this.onTextLoaded.bind(this, assetName, request));
        request.send();
    };
    TextAssetLoader.prototype.onTextLoaded = function (assetName, request) {
        console.debug('onTextLoaded: assetname/request', assetName, request);
        if (request.readyState === request.DONE) {
            var asset = new TextAsset(assetName, request.responseText);
            AssetManager.onAssetLoaded(asset);
        }
    };
    return TextAssetLoader;
}());


;// CONCATENATED MODULE: ./src/core/assets/assetManager.ts




var MESSAGE_ASSET_LOADER_ASSET_LOADED = 'MESSAGE_ASSET_LOADER_ASSET_LOADED::';
var AssetManager = /** @class */ (function () {
    function AssetManager() {
    }
    AssetManager.initialize = function () {
        AssetManager._loaders.push(new ImageAssetLoader());
        AssetManager._loaders.push(new JsonAssetLoader());
        AssetManager._loaders.push(new TextAssetLoader());
    };
    AssetManager.registerLoader = function (loader) {
        AssetManager._loaders.push(loader);
    };
    AssetManager.onAssetLoaded = function (asset) {
        AssetManager._loadedAssets[asset.name] = asset;
        Message.send(MESSAGE_ASSET_LOADER_ASSET_LOADED + asset.name, this, asset);
    };
    AssetManager.loadAsset = function (assetName) {
        var _a;
        var extension = (_a = assetName.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        for (var _i = 0, _b = AssetManager._loaders; _i < _b.length; _i++) {
            var l = _b[_i];
            if (l.supportedExtensions.indexOf(extension || '') !== -1) {
                l.loadAsset(assetName);
                return;
            }
        }
        console.warn("Unable to load asset with extension ".concat(extension, " because there is no loader associated with it."));
    };
    AssetManager.isAssetLoaded = function (assetName) {
        // Not sure if this works
        return !!AssetManager._loadedAssets[assetName];
    };
    AssetManager.getAsset = function (assetName) {
        if (AssetManager._loadedAssets[assetName]) {
            return AssetManager._loadedAssets[assetName];
        }
        else {
            AssetManager.loadAsset(assetName);
        }
        return undefined;
    };
    AssetManager._loaders = [];
    AssetManager._loadedAssets = {};
    return AssetManager;
}());


;// CONCATENATED MODULE: ./src/core/math/vector3.ts

var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this._x = x;
        this._y = y;
        this._z = z;
    }
    Object.defineProperty(Vector3.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "zero", {
        get: function () {
            return new Vector3();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "one", {
        get: function () {
            return new Vector3(1, 1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Vector3.prototype.set = function (x, y, z) {
        if (x !== undefined) {
            this._x = x;
        }
        if (y !== undefined) {
            this._y = y;
        }
        if (z !== undefined) {
            this._z = z;
        }
    };
    /**
     * Checks if the vector is equal to the one passed as an argument
     * @param v Vector to check against
     * @returns Boolean baased on equivalency
     */
    Vector3.prototype.equals = function (v) {
        return this._x === v._x && this._y === v._y && this._z === v._z;
    };
    Vector3.prototype.toArray = function () {
        return [this._x, this._y, this._z];
    };
    Vector3.prototype.toFloat32Array = function () {
        return new Float32Array(this.toArray());
    };
    Vector3.prototype.copyFrom = function (vector) {
        this._x = vector._x;
        this._y = vector._y;
        this._z = vector._z;
    };
    Vector3.distance = function (a, b) {
        var diff = a.subtract(b);
        return Math.sqrt(diff.x * diff.x + diff.y * diff.y + diff.z * diff.z);
    };
    Vector3.prototype.setFromJson = function (json) {
        if (json.x !== undefined) {
            this._x = Number(json.x);
        }
        if (json.y !== undefined) {
            this._y = Number(json.y);
        }
        if (json.z !== undefined) {
            this._z = Number(json.z);
        }
    };
    Vector3.prototype.add = function (v) {
        this._x += v._x;
        this._y += v._y;
        this._z += v._z;
        return this;
    };
    Vector3.prototype.subtract = function (v) {
        this._x -= v._x;
        this._y -= v._y;
        this._z -= v._z;
        return this;
    };
    Vector3.prototype.multiply = function (v) {
        this._x *= v._x;
        this._y *= v._y;
        this._z *= v._z;
        return this;
    };
    Vector3.prototype.divide = function (v) {
        this._x /= v._x;
        this._y /= v._y;
        this._z /= v._z;
        return this;
    };
    Vector3.prototype.clone = function () {
        return new Vector3(this._x, this._y, this._z);
    };
    Vector3.prototype.toVector2 = function () {
        return new Vector2(this._x, this._y);
    };
    return Vector3;
}());


;// CONCATENATED MODULE: ./src/core/math/vector2.ts

var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Vector2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "zero", {
        get: function () {
            return new Vector2();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "one", {
        get: function () {
            return new Vector2(1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Vector2.distance = function (a, b) {
        var diff = a.clone().subtract(b);
        return Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    };
    Vector2.prototype.copyFrom = function (v) {
        this._x = v._x;
        this._y = v._y;
    };
    Vector2.prototype.toArray = function () {
        return [this._x, this._y];
    };
    Vector2.prototype.toFloat32Array = function () {
        return new Float32Array(this.toArray());
    };
    Vector2.prototype.toVector3 = function () {
        return new Vector3(this._x, this._y, 0);
    };
    Vector2.prototype.set = function (x, y) {
        if (x !== undefined) {
            this._x = x;
        }
        if (y !== undefined) {
            this._y = y;
        }
    };
    Vector2.prototype.setFromJson = function (json) {
        if (json.x !== undefined) {
            this._x = Number(json.x);
        }
        if (json.y !== undefined) {
            this._y = Number(json.y);
        }
    };
    Vector2.prototype.add = function (v) {
        this._x += v._x;
        this._y += v._y;
        return this;
    };
    Vector2.prototype.subtract = function (v) {
        this._x -= v._x;
        this._y -= v._y;
        return this;
    };
    Vector2.prototype.multiply = function (v) {
        this._x *= v._x;
        this._y *= v._y;
        return this;
    };
    Vector2.prototype.divide = function (v) {
        this._x /= v._x;
        this._y /= v._y;
        return this;
    };
    Vector2.prototype.scale = function (scale) {
        this._x *= scale;
        this._y *= scale;
        return this;
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this._x, this._y);
    };
    return Vector2;
}());


;// CONCATENATED MODULE: ./src/core/graphics/materialManager.ts
var MaterialReferenceNode = /** @class */ (function () {
    function MaterialReferenceNode(material) {
        this.referenceCount = 1;
        this.material = material;
    }
    return MaterialReferenceNode;
}());
var MaterialManager = /** @class */ (function () {
    function MaterialManager() {
    }
    MaterialManager.registerMaterial = function (material) {
        if (MaterialManager._materials[material.name] === undefined) {
            MaterialManager._materials[material.name] = new MaterialReferenceNode(material);
        }
    };
    MaterialManager.getMaterial = function (materialName) {
        if (MaterialManager._materials[materialName] === undefined) {
            return undefined;
        }
        else {
            MaterialManager._materials[materialName].referenceCount++;
            return MaterialManager._materials[materialName].material;
        }
    };
    MaterialManager.releaseMaterial = function (materialName) {
        var _a;
        var materialReference = MaterialManager._materials[materialName];
        if (!materialReference) {
            console.warn('Cannot release a material which has not been registered');
        }
        else {
            MaterialManager._materials[materialName].referenceCount--;
            if (MaterialManager._materials[materialName].referenceCount < 1 &&
                MaterialManager._materials[materialName] !== undefined) {
                (_a = MaterialManager._materials[materialName].material) === null || _a === void 0 ? void 0 : _a.destroy();
                MaterialManager._materials[materialName].material = undefined;
                delete MaterialManager._materials[materialName];
            }
        }
    };
    MaterialManager._materials = {};
    return MaterialManager;
}());


;// CONCATENATED MODULE: ./src/core/gl/gl.ts
var gl;
/**
 * Responsible for setting up a WebGL rendering context
 */
var GLUtilities = /** @class */ (function () {
    function GLUtilities() {
    }
    /**
     * Initializes WebGL, potentially using the canvas with an assigned id matching
     * the provided if it is defined.
     * @param elementId The id of the element to search for.
     * @returns reference to the HTMLCanvasElement
     */
    GLUtilities.initialize = function (elementId) {
        var canvas;
        if (elementId !== undefined) {
            canvas = document.getElementById(elementId);
            if (canvas === undefined) {
                throw new Error('Could not find a canvas element named ' + elementId);
            }
        }
        else {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
        }
        gl = canvas.getContext('webgl');
        if (gl === undefined || gl === null) {
            throw new Error('Unable to initialize WebGL');
        }
        return canvas;
    };
    return GLUtilities;
}());


;// CONCATENATED MODULE: ./src/core/gl/glBuffer.ts

/**
 * Represents the information needed for a GLBuffer attribute
 */
var AttributeInfo = /** @class */ (function () {
    function AttributeInfo() {
        /**
         * The number of elements from the beginning of the buffer.
         */
        //@ts-ignore
        this.offset = 0;
    }
    return AttributeInfo;
}());

/**
 * Represents a WebGL buffer
 */
var GLBuffer = /** @class */ (function () {
    /**
     * Creates a new GL Buffer.
     * @param dataType The data type of the buffer. Default: gl.FLOAT
     * @param targetBufferType The buffer target type. gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER. Default: gl.ARRAY_BUFFER
     * @param mode The drawing mode of the buffer. (i.e. gl.TRIANGLES or gl.LINES). Default: gl.TRIANGLES
     */
    function GLBuffer(dataType, targetBufferType, mode) {
        if (dataType === void 0) { dataType = gl.FLOAT; }
        if (targetBufferType === void 0) { targetBufferType = gl.ARRAY_BUFFER; }
        if (mode === void 0) { mode = gl.TRIANGLES; }
        this._hasAttributeLocation = false;
        this._stride = 0;
        this._data = [];
        this._attributes = [];
        this._elementSize = 0;
        this._dataType = dataType;
        this._targetBufferType = targetBufferType;
        this._mode = mode;
        // Determine byte size
        switch (this._dataType) {
            case gl.FLOAT:
            // positive or negative
            case gl.INT:
            // only positive but twice the size of int
            case gl.UNSIGNED_INT:
                this._typeSize = 4;
                break;
            case gl.SHORT:
            case gl.UNSIGNED_SHORT:
                this._typeSize = 2;
                break;
            case gl.BYTE:
            case gl.UNSIGNED_BYTE:
                this._typeSize = 1;
            default:
                throw new Error("Unrecognized data type ".concat(dataType.toString()));
        }
        // size of elements * number of bytes in each element
        this._buffer = gl.createBuffer();
    }
    /**
     * Destroys the buffer
     */
    GLBuffer.prototype.destroy = function () {
        gl.deleteBuffer(this._buffer);
    };
    /**
     * Binds this buffer.
     * @param normalized Indicates if this data should be normalized. Default: false
     */
    GLBuffer.prototype.bind = function (normalized) {
        var _this = this;
        if (normalized === void 0) { normalized = false; }
        gl.bindBuffer(this._targetBufferType, this._buffer);
        if (this._hasAttributeLocation) {
            this._attributes.forEach(function (it) {
                gl.vertexAttribPointer(it.location, it.size, _this._dataType, normalized, _this._stride, it.offset * _this._typeSize);
                gl.enableVertexAttribArray(it.location);
            });
        }
    };
    GLBuffer.prototype.unbind = function () {
        this._attributes.forEach(function (it) {
            gl.disableVertexAttribArray(it.location);
        });
        gl.bindBuffer(this._targetBufferType, null);
    };
    /**
     * Adds an attribute with the provided information to the buffer
     * @param info The information to be added
     */
    GLBuffer.prototype.addAttributeLocation = function (info) {
        this._hasAttributeLocation = true;
        info.offset = this._elementSize;
        this._attributes.push(info);
        this._elementSize += info.size;
        this._stride = this._elementSize * this._typeSize;
    };
    /**
     * Replaces the current data in the buffer with provided data.
     * @param data The data to be loaded in the buffer.
     */
    GLBuffer.prototype.setData = function (data) {
        this.clearData();
        this.pushBackData(data);
    };
    /**
     * Clears out all data in the buffer.
     */
    GLBuffer.prototype.clearData = function () {
        this._data.length = 0;
    };
    /**
     * Adds data to the buffer
     * @param data
     */
    GLBuffer.prototype.pushBackData = function (data) {
        this._data = this._data.concat(data);
    };
    /**
     * Uploads this data to the GPU
     */
    GLBuffer.prototype.upload = function () {
        gl.bindBuffer(this._targetBufferType, this._buffer);
        var bufferData;
        switch (this._dataType) {
            case gl.FLOAT:
                bufferData = new Float32Array(this._data);
                break;
            case gl.INT:
                bufferData = new Int32Array(this._data);
                break;
            case gl.UNSIGNED_INT:
                bufferData = new Uint32Array(this._data);
                break;
            case gl.SHORT:
                bufferData = new Int16Array(this._data);
                break;
            case gl.UNSIGNED_SHORT:
                bufferData = new Uint16Array(this._data);
                break;
            case gl.BYTE:
                bufferData = new Int8Array(this._data);
                break;
            case gl.UNSIGNED_BYTE:
                bufferData = new Uint8Array(this._data);
                break;
            default:
                throw new Error("Data type error in pushBackData() for datatype ".concat(this._dataType.toString()));
        }
        gl.bufferData(this._targetBufferType, bufferData, gl.STATIC_DRAW);
    };
    /**
     * Draws the buffer
     */
    GLBuffer.prototype.draw = function () {
        if (this._targetBufferType === gl.ARRAY_BUFFER) {
            gl.drawArrays(this._mode, 0, this._data.length / this._elementSize);
        }
        else if (this._targetBufferType === gl.ELEMENT_ARRAY_BUFFER) {
            gl.drawElements(this._mode, this._data.length, this._dataType, 0);
        }
    };
    return GLBuffer;
}());


;// CONCATENATED MODULE: ./src/core/graphics/vertex.ts


/**
 * Represents the data for a single vertex
 */
var Vertex = /** @class */ (function () {
    function Vertex(x, y, z, tu, tv) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (tu === void 0) { tu = 0; }
        if (tv === void 0) { tv = 0; }
        this.position = Vector3.zero;
        this.texCoords = Vector2.zero;
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        this.texCoords.x = tu;
        this.texCoords.y = tv;
    }
    Vertex.prototype.toArray = function () {
        var array = [];
        array = array.concat(this.position.toArray());
        array = array.concat(this.texCoords.toArray());
        return array;
    };
    Vertex.prototype.toFloat32Array = function () {
        return new Float32Array(this.toArray());
    };
    return Vertex;
}());


;// CONCATENATED MODULE: ./src/core/graphics/sprite.ts





var Sprite = /** @class */ (function () {
    function Sprite(name, materialName, width, height) {
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 100; }
        this._vertices = [];
        this._origin = Vector3.zero;
        this._name = name;
        this._width = width;
        this._height = height;
        this._materialName = materialName;
        this._material = MaterialManager.getMaterial(this._materialName);
    }
    Object.defineProperty(Sprite.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (value) {
            this._origin = value;
            this.recalculateVertices();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Sprite.prototype.destroy = function () {
        if (this._buffer) {
            this._buffer.destroy();
        }
        MaterialManager.releaseMaterial(this._materialName);
        // @ts-ignore
        this._material = undefined;
        // @ts-ignore
        this._materialName = undefined;
    };
    Sprite.prototype.load = function () {
        this._buffer = new GLBuffer();
        var positionAttribute = new AttributeInfo();
        // Removed reference to shader, bad practice to pass shader info to sprite on load
        // Still not ideal (referencing a_location in vertexShaderSource by hardcoding 0)
        // Each variable in shaderSource is referenced by index in order of declaration (e.g. because a_location is the first variable it is index 0)
        positionAttribute.location = 0;
        positionAttribute.size = 3;
        this._buffer.addAttributeLocation(positionAttribute);
        var texCoordAttribute = new AttributeInfo();
        texCoordAttribute.location = 1;
        texCoordAttribute.size = 2;
        this._buffer.addAttributeLocation(texCoordAttribute);
        this.calculateVertices();
    };
    Sprite.prototype.update = function (time) { };
    Sprite.prototype.draw = function (shader, model) {
        var _a;
        var modelLocation = shader.getUniformLocation('u_model');
        gl.uniformMatrix4fv(modelLocation, false, model.toFloat32Array());
        var colorLocation = shader.getUniformLocation('u_tint');
        if (this._material) {
            gl.uniform4fv(colorLocation, this._material.tint.toFloat32Array());
        }
        if ((_a = this._material) === null || _a === void 0 ? void 0 : _a.diffuseTexture) {
            this._material.diffuseTexture.activateAndBind(0);
            var diffuseLocation = shader.getUniformLocation('u_diffuse');
            // pass a single integer
            gl.uniform1i(diffuseLocation, 0);
        }
        if (this._buffer) {
            this._buffer.bind();
            this._buffer.draw();
        }
        else {
            throw new Error('No assigned buffer for sprite ' + this._name);
        }
    };
    Sprite.prototype.calculateVertices = function () {
        var _this = this;
        var _a, _b;
        var minX = -(this._width * this._origin.x);
        var maxX = this._width * (1.0 - this._origin.x);
        var minY = -(this._width * this._origin.y);
        var maxY = this._height * (1.0 - this._origin.y);
        // prettier-ignore
        this._vertices = [
            // x, y, z, U: texture x, V: texture y
            // triangle 1
            // point 1
            new Vertex(minX, minY, 0, 0, 0),
            // point 2
            new Vertex(minX, maxY, 0, 0, 1.0),
            // point 3
            new Vertex(maxX, maxY, 0, 1.0, 1.0),
            // triangle 2
            // point 4
            new Vertex(maxX, maxY, 0, 1.0, 1.0),
            // point 5
            new Vertex(maxX, minY, 0, 1.0, 0),
            // point 6
            new Vertex(minX, minY, 0, 0, 0),
        ];
        this._vertices.forEach(function (v) {
            var _a;
            (_a = _this._buffer) === null || _a === void 0 ? void 0 : _a.pushBackData(v.toArray());
        });
        (_a = this._buffer) === null || _a === void 0 ? void 0 : _a.upload();
        (_b = this._buffer) === null || _b === void 0 ? void 0 : _b.unbind();
    };
    Sprite.prototype.recalculateVertices = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var minX = -(this._width * this._origin.x);
        var maxX = this._width * (1.0 - this._origin.x);
        var minY = -(this._height * this._origin.y);
        var maxY = this._height * (1.0 - this._origin.y);
        (_a = this._vertices[0]) === null || _a === void 0 ? void 0 : _a.position.set(minX, minY);
        (_b = this._vertices[1]) === null || _b === void 0 ? void 0 : _b.position.set(minX, maxY);
        (_c = this._vertices[2]) === null || _c === void 0 ? void 0 : _c.position.set(maxX, maxY);
        (_d = this._vertices[3]) === null || _d === void 0 ? void 0 : _d.position.set(maxX, maxY);
        (_e = this._vertices[4]) === null || _e === void 0 ? void 0 : _e.position.set(maxX, minY);
        (_f = this._vertices[5]) === null || _f === void 0 ? void 0 : _f.position.set(minX, minY);
        (_g = this._buffer) === null || _g === void 0 ? void 0 : _g.clearData();
        this._vertices.forEach(function (v) {
            var _a;
            (_a = _this._buffer) === null || _a === void 0 ? void 0 : _a.pushBackData(v.toArray());
        });
        (_h = this._buffer) === null || _h === void 0 ? void 0 : _h.upload();
        (_j = this._buffer) === null || _j === void 0 ? void 0 : _j.unbind();
    };
    return Sprite;
}());


;// CONCATENATED MODULE: ./src/core/graphics/animatedSprite.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var UVInfo = /** @class */ (function () {
    function UVInfo(min, max) {
        this.min = min;
        this.max = max;
    }
    return UVInfo;
}());
var AnimatedSpriteInfo = /** @class */ (function () {
    function AnimatedSpriteInfo() {
        this.width = 100;
        this.height = 100;
        this.frameWidth = 10;
        this.frameHeight = 10;
        this.frameCount = 1;
        this.frameSequence = [];
        this.frameTime = 60;
    }
    return AnimatedSpriteInfo;
}());

var AnimatedSprite = /** @class */ (function (_super) {
    __extends(AnimatedSprite, _super);
    function AnimatedSprite(name, materialName, width, height, frameWidth, frameHeight, frameCount, frameSequence, frameTime) {
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 100; }
        if (frameWidth === void 0) { frameWidth = 10; }
        if (frameHeight === void 0) { frameHeight = 10; }
        if (frameCount === void 0) { frameCount = 1; }
        if (frameSequence === void 0) { frameSequence = []; }
        if (frameTime === void 0) { frameTime = 100; }
        var _this = _super.call(this, name, materialName, width, height) || this;
        _this._frameTime = 33;
        _this._frameUVs = [];
        _this._currentTime = 0;
        _this._currentFrame = 0;
        _this._assetLoaded = false;
        _this._assetWidth = 2;
        _this._assetHeight = 2;
        _this._isPlaying = true;
        _this._frameWidth = frameWidth;
        _this._frameHeight = frameHeight;
        _this._frameCount = frameCount;
        _this._frameSequence = frameSequence;
        _this._frameTime = frameTime;
        if (_this._material) {
            Message.subscribe(MESSAGE_ASSET_LOADER_ASSET_LOADED + _this._material.diffuseTextureName, _this);
        }
        return _this;
    }
    Object.defineProperty(AnimatedSprite.prototype, "isPlaying", {
        get: function () {
            return this._isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    AnimatedSprite.prototype.play = function () {
        this._isPlaying = true;
    };
    AnimatedSprite.prototype.stop = function () {
        this._isPlaying = false;
    };
    AnimatedSprite.prototype.setFrame = function (frameNumber) {
        if (frameNumber >= this._frameCount) {
            throw new Error('Frame is our of range:' +
                frameNumber +
                '\nframeCount: ' +
                this._frameCount);
        }
        this._currentFrame = frameNumber;
    };
    AnimatedSprite.prototype.onMessage = function (message) {
        var _a;
        if (message.code ===
            MESSAGE_ASSET_LOADER_ASSET_LOADED + ((_a = this._material) === null || _a === void 0 ? void 0 : _a.diffuseTextureName)) {
            this._assetLoaded = true;
            var asset = message.context;
            this._assetHeight = asset.height;
            this._assetWidth = asset.width;
            this.calculateUVs();
        }
    };
    AnimatedSprite.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    AnimatedSprite.prototype.load = function () {
        _super.prototype.load.call(this);
        if (!this._assetLoaded) {
            this.setupFromMaterial();
        }
    };
    AnimatedSprite.prototype.update = function (time) {
        var _this = this;
        var _a, _b, _c;
        // Hack around for not being instantiated before onMessage is sent
        // Revisit
        if (this._material && !this._assetLoaded) {
            this.setupFromMaterial();
            if (!this._assetLoaded) {
                return;
            }
        }
        if (!this._isPlaying) {
            return;
        }
        this._currentTime += time;
        if (this._currentTime > this._frameTime) {
            this._currentFrame++;
            this._currentTime = 0;
            if (this._currentFrame >= this._frameSequence.length) {
                this._currentFrame = 0;
            }
            var frameUVs = this._frameSequence[this._currentFrame];
            this._vertices[0].texCoords.copyFrom(this._frameUVs[frameUVs].min);
            this._vertices[1].texCoords.copyFrom(new Vector2(this._frameUVs[frameUVs].min.x, this._frameUVs[frameUVs].max.y));
            this._vertices[2].texCoords.copyFrom(this._frameUVs[frameUVs].max);
            this._vertices[3].texCoords.copyFrom(this._frameUVs[frameUVs].max);
            this._vertices[4].texCoords.copyFrom(new Vector2(this._frameUVs[frameUVs].max.x, this._frameUVs[frameUVs].min.y));
            this._vertices[5].texCoords.copyFrom(this._frameUVs[frameUVs].min);
            (_a = this._buffer) === null || _a === void 0 ? void 0 : _a.clearData();
            this._vertices.forEach(function (v) {
                var _a;
                (_a = _this._buffer) === null || _a === void 0 ? void 0 : _a.pushBackData(v.toArray());
            });
            (_b = this._buffer) === null || _b === void 0 ? void 0 : _b.upload();
            (_c = this._buffer) === null || _c === void 0 ? void 0 : _c.unbind();
        }
        _super.prototype.update.call(this, time);
    };
    AnimatedSprite.prototype.calculateUVs = function () {
        var totalWidth = 0;
        var yValue = 0;
        for (var i = 0; i < this._frameCount; i++) {
            totalWidth = i * this._frameWidth;
            if (totalWidth > this._assetWidth) {
                yValue++;
                totalWidth = 0;
            }
            var u = (i * this._frameWidth) / this._assetWidth;
            var v = (yValue * this._frameHeight) / this._assetHeight;
            var min = new Vector2(u, v);
            var uMax = (i * this._frameWidth + this._frameWidth) / this._assetWidth;
            var vMax = (yValue * this._frameHeight + this._frameHeight) / this._assetHeight;
            var max = new Vector2(uMax, vMax);
            this._frameUVs.push(new UVInfo(min, max));
        }
    };
    AnimatedSprite.prototype.setupFromMaterial = function () {
        var _a;
        if (!this._assetLoaded) {
            var material = MaterialManager.getMaterial(this._materialName);
            if ((_a = material === null || material === void 0 ? void 0 : material.diffuseTexture) === null || _a === void 0 ? void 0 : _a.isLoaded) {
                if (AssetManager.isAssetLoaded(material.diffuseTextureName)) {
                    this._assetHeight = material.diffuseTexture.height;
                    this._assetWidth = material.diffuseTexture.width;
                    this._assetLoaded = true;
                    this.calculateUVs();
                }
            }
        }
    };
    return AnimatedSprite;
}(Sprite));


;// CONCATENATED MODULE: ./src/components/baseComponent.ts
var BaseComponent = /** @class */ (function () {
    function BaseComponent(data) {
        this._data = data;
        this.name = data.name;
    }
    Object.defineProperty(BaseComponent.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    BaseComponent.prototype.setOwner = function (owner) {
        this._owner = owner;
    };
    BaseComponent.prototype.load = function () { };
    BaseComponent.prototype.updateReady = function () { };
    BaseComponent.prototype.update = function (time) { };
    BaseComponent.prototype.render = function (shader) { };
    return BaseComponent;
}());


;// CONCATENATED MODULE: ./src/components/spriteComponent.ts
var spriteComponent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SpriteComponentData = /** @class */ (function () {
    function SpriteComponentData() {
        this.name = '';
        this.materialName = '';
        this.origin = Vector3.zero;
    }
    SpriteComponentData.prototype.setFromJson = function (json) {
        if (json.width) {
            this.width = Number(json.width);
        }
        if (json.height) {
            this.height = Number(json.height);
        }
        if (json.name) {
            this.name = String(json.name);
        }
        if (json.materialName) {
            this.materialName = String(json.materialName);
        }
        if (json.origin) {
            this.origin.setFromJson(json.origin);
        }
    };
    return SpriteComponentData;
}());

var SpriteComponentBuilder = /** @class */ (function () {
    function SpriteComponentBuilder() {
    }
    Object.defineProperty(SpriteComponentBuilder.prototype, "type", {
        get: function () {
            return 'sprite';
        },
        enumerable: false,
        configurable: true
    });
    SpriteComponentBuilder.prototype.buildFromJson = function (json) {
        var data = new SpriteComponentData();
        data.setFromJson(json);
        return new SpriteComponent(data);
    };
    return SpriteComponentBuilder;
}());

var SpriteComponent = /** @class */ (function (_super) {
    spriteComponent_extends(SpriteComponent, _super);
    function SpriteComponent(data) {
        var _this = _super.call(this, data) || this;
        if (data.width !== undefined) {
            _this._width = Number(data.width);
        }
        if (data.height !== undefined) {
            _this._height = Number(data.height);
        }
        _this._sprite = new Sprite(data.name, data.materialName, _this._width, _this._height);
        if (!data.origin.equals(Vector3.zero)) {
            _this._sprite.origin.copyFrom(data.origin);
        }
        return _this;
    }
    SpriteComponent.prototype.load = function () {
        this._sprite.load();
    };
    SpriteComponent.prototype.render = function (shader) {
        var _a, _b;
        if ((_a = this._owner) === null || _a === void 0 ? void 0 : _a.worldMatrix) {
            this._sprite.draw(shader, (_b = this._owner) === null || _b === void 0 ? void 0 : _b.worldMatrix);
        }
        _super.prototype.render.call(this, shader);
    };
    return SpriteComponent;
}(BaseComponent));


;// CONCATENATED MODULE: ./src/components/animatedSpriteComponent.ts
var animatedSpriteComponent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var AnimatedSpriteComponentData = /** @class */ (function (_super) {
    animatedSpriteComponent_extends(AnimatedSpriteComponentData, _super);
    function AnimatedSpriteComponentData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameWidth = 0;
        _this.frameHeight = 0;
        _this.frameCount = 0;
        _this.frameSequence = [];
        _this.autoPlay = true;
        _this.frameTime = 33;
        return _this;
    }
    AnimatedSpriteComponentData.prototype.setFromJson = function (json) {
        _super.prototype.setFromJson.call(this, json);
        if (json.autoPlay !== undefined) {
            this.autoPlay = Boolean(json.autoPlay);
        }
        if (json.frameWidth === undefined) {
            throw new Error('Animated sprite data requires frameWidth to be defined');
        }
        else {
            this.frameWidth = Number(json.frameWidth);
        }
        if (json.frameHeight === undefined) {
            throw new Error('Animated sprite data requires frameHeight to be defined');
        }
        else {
            this.frameHeight = Number(json.frameHeight);
        }
        if (json.frameCount === undefined) {
            throw new Error('Animated sprite data requires frameCount to be defined');
        }
        else {
            this.frameCount = Number(json.frameCount);
        }
        if (json.frameSequence === undefined) {
            throw new Error('Animated sprite data requires frameSequence to be defined');
        }
        else {
            this.frameSequence = json.frameSequence;
        }
        if (json.frameTime !== undefined) {
            this.frameTime = Number(json.frameTime);
        }
    };
    return AnimatedSpriteComponentData;
}(SpriteComponentData));

var AnimatedSpriteComponentBuilder = /** @class */ (function () {
    function AnimatedSpriteComponentBuilder() {
    }
    Object.defineProperty(AnimatedSpriteComponentBuilder.prototype, "type", {
        get: function () {
            return 'animatedSprite';
        },
        enumerable: false,
        configurable: true
    });
    AnimatedSpriteComponentBuilder.prototype.buildFromJson = function (json) {
        var data = new AnimatedSpriteComponentData();
        data.setFromJson(json);
        return new AnimatedSpriteComponent(data);
    };
    return AnimatedSpriteComponentBuilder;
}());

var AnimatedSpriteComponent = /** @class */ (function (_super) {
    animatedSpriteComponent_extends(AnimatedSpriteComponent, _super);
    function AnimatedSpriteComponent(data) {
        var _this = _super.call(this, data) || this;
        _this._autopPlay = data.autoPlay;
        _this._sprite = new AnimatedSprite(data.name, data.materialName, data.frameWidth, data.frameHeight, data.frameWidth, data.frameHeight, data.frameCount, data.frameSequence, data.frameTime);
        // Have to do this even though calling super because of this._sprite call
        // above wipes out the origin
        if (!data.origin.equals(Vector3.zero)) {
            _this._sprite.origin.copyFrom(data.origin);
        }
        return _this;
    }
    Object.defineProperty(AnimatedSpriteComponent.prototype, "isPlaying", {
        get: function () {
            return this._sprite.isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    AnimatedSpriteComponent.prototype.load = function () {
        this._sprite.load();
    };
    AnimatedSpriteComponent.prototype.updateReady = function () {
        if (!this._autopPlay) {
            this._sprite.stop();
        }
    };
    AnimatedSpriteComponent.prototype.update = function (time) {
        this._sprite.update(time);
        _super.prototype.update.call(this, time);
    };
    AnimatedSpriteComponent.prototype.play = function () {
        this._sprite.play();
    };
    AnimatedSpriteComponent.prototype.stop = function () {
        this._sprite.stop();
    };
    AnimatedSpriteComponent.prototype.setFrame = function (frameNumber) {
        this._sprite.setFrame(frameNumber);
    };
    AnimatedSpriteComponent.prototype.render = function (shader) {
        var _a, _b;
        if ((_a = this._owner) === null || _a === void 0 ? void 0 : _a.worldMatrix) {
            this._sprite.draw(shader, (_b = this._owner) === null || _b === void 0 ? void 0 : _b.worldMatrix);
        }
        _super.prototype.render.call(this, shader);
    };
    return AnimatedSpriteComponent;
}(BaseComponent));


;// CONCATENATED MODULE: ./src/core/graphics/bitmapFont.ts



var FontUtilities = /** @class */ (function () {
    function FontUtilities() {
    }
    FontUtilities.extractFieldValue = function (field) {
        return field.split('=')[1];
    };
    return FontUtilities;
}());
var FontGlyph = /** @class */ (function () {
    function FontGlyph() {
    }
    FontGlyph.fromFields = function (fields) {
        var glyph = new FontGlyph();
        glyph.id = Number(FontUtilities.extractFieldValue(fields[1]));
        glyph.x = Number(FontUtilities.extractFieldValue(fields[2]));
        glyph.y = Number(FontUtilities.extractFieldValue(fields[3]));
        glyph.width = Number(FontUtilities.extractFieldValue(fields[4]));
        glyph.height = Number(FontUtilities.extractFieldValue(fields[5]));
        glyph.xOffset = Number(FontUtilities.extractFieldValue(fields[6]));
        glyph.yOffset = Number(FontUtilities.extractFieldValue(fields[7]));
        glyph.xAdvance = Number(FontUtilities.extractFieldValue(fields[8]));
        glyph.page = Number(FontUtilities.extractFieldValue(fields[9]));
        glyph.channel = Number(FontUtilities.extractFieldValue(fields[10]));
        return glyph;
    };
    return FontGlyph;
}());

var BitmapFont = /** @class */ (function () {
    function BitmapFont(name, fontFileName) {
        this._assetLoaded = false;
        this._glyphs = {};
        this._name = name;
        this._fontFileName = fontFileName;
    }
    Object.defineProperty(BitmapFont.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitmapFont.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitmapFont.prototype, "imageWidth", {
        get: function () {
            return this._imageWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitmapFont.prototype, "imageHeight", {
        get: function () {
            return this._imageHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitmapFont.prototype, "textureName", {
        get: function () {
            return this._imageFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitmapFont.prototype, "isLoaded", {
        get: function () {
            return this._assetLoaded;
        },
        enumerable: false,
        configurable: true
    });
    BitmapFont.prototype.load = function () {
        var asset = AssetManager.getAsset(this._fontFileName);
        if (asset !== undefined) {
            this.processFontFile(String(asset.data));
        }
        else {
            Message.subscribe(MESSAGE_ASSET_LOADER_ASSET_LOADED + this._fontFileName, this);
        }
    };
    BitmapFont.prototype.onMessage = function (message) {
        if (message.code ===
            MESSAGE_ASSET_LOADER_ASSET_LOADED + this._fontFileName) {
            this.processFontFile(String(message.context.data));
        }
        else if (this._imageFile &&
            message.code === MESSAGE_ASSET_LOADER_ASSET_LOADED + this._imageFile) {
        }
    };
    BitmapFont.prototype.getGlyph = function (char) {
        // replace unrecognized characters with a '0'.
        var code = char.charCodeAt(0);
        code = this._glyphs[code] === undefined ? 48 : code;
        return this._glyphs[code];
    };
    BitmapFont.prototype.measureText = function (text) {
        var _this = this;
        var size = Vector2.zero;
        var maxX = 0;
        var x = 0;
        var y = 0;
        text.split('').forEach(function (c) {
            switch (c) {
                case '\n':
                    if (x > maxX) {
                        maxX = x;
                    }
                    x = 0;
                    y += _this._size;
                    break;
                default:
                    x += _this.getGlyph(c).xAdvance;
                    break;
            }
        });
        size.set(maxX, y);
        return size;
    };
    BitmapFont.prototype.processFontFile = function (content) {
        var _this = this;
        var charCount = 0;
        var lines = content.split('\n');
        lines.forEach(function (line) {
            // Sanitize line
            var data = line.replace(/\s\s+/g, ' ');
            var fields = data.split(' ');
            // Look at type of line
            switch (fields[0]) {
                case 'info':
                    _this._size = Number(FontUtilities.extractFieldValue(fields[4]));
                    break;
                case 'common':
                    _this._imageWidth = Number(FontUtilities.extractFieldValue(fields[3]));
                    _this._imageHeight = Number(FontUtilities.extractFieldValue(fields[4]));
                    break;
                case 'page':
                    {
                        var id = Number(FontUtilities.extractFieldValue(fields[1]));
                        _this._imageFile = FontUtilities.extractFieldValue(fields[2]);
                        // Strip quotes
                        _this._imageFile = _this._imageFile.replace(/"/g, '');
                        // Prepend the path to the image name.  TODO: This should be configurable
                        _this._imageFile = 'src/assets/fonts/' + _this._imageFile.trim();
                    }
                    break;
                case 'chars':
                    charCount = Number(FontUtilities.extractFieldValue(fields[1]));
                    break;
                case 'char':
                    var glyph = FontGlyph.fromFields(fields);
                    _this._glyphs[glyph.id] = glyph;
                    break;
            }
        });
        // Verify the loaded glyphs
        var actualGlyphCount = 0;
        //Only count properties
        var keys = Object.keys(this._glyphs);
        keys.forEach(function (key) {
            if (_this._glyphs.hasOwnProperty(key)) {
                actualGlyphCount++;
            }
        });
        if (actualGlyphCount !== charCount) {
            throw new Error("Font file reported existence of ".concat(charCount, " glyphs, but only ").concat(actualGlyphCount, " were found."));
        }
        this._assetLoaded = true;
    };
    return BitmapFont;
}());


;// CONCATENATED MODULE: ./src/core/graphics/bitmapFontManager.ts

var BitmapFontManager = /** @class */ (function () {
    function BitmapFontManager() {
    }
    BitmapFontManager.addFont = function (name, fontFileName) {
        BitmapFontManager._fonts[name] = new BitmapFont(name, fontFileName);
    };
    BitmapFontManager.getFont = function (name) {
        if (BitmapFontManager._fonts[name] === undefined) {
            throw new Error("A font named ".concat(name, " does not exist"));
        }
        return BitmapFontManager._fonts[name];
    };
    BitmapFontManager.load = function () {
        var keys = Object.keys(BitmapFontManager._fonts);
        keys.forEach(function (key) {
            BitmapFontManager._fonts[key].load();
        });
    };
    BitmapFontManager.updateReady = function () {
        var keys = Object.keys(BitmapFontManager._fonts);
        keys.forEach(function (key) {
            if (!BitmapFontManager._fonts[key].isLoaded) {
                console.debug("font ".concat(key, " is still loading"));
                return false;
            }
        });
        console.debug('All fonts are loaded');
        return true;
    };
    BitmapFontManager._fonts = {};
    return BitmapFontManager;
}());


;// CONCATENATED MODULE: ./src/core/graphics/color.ts
var Color = /** @class */ (function () {
    function Color(r, g, b, a) {
        if (r === void 0) { r = 255; }
        if (g === void 0) { g = 255; }
        if (b === void 0) { b = 255; }
        if (a === void 0) { a = 255; }
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
    }
    Object.defineProperty(Color.prototype, "r", {
        get: function () {
            return this._r;
        },
        set: function (value) {
            this._r = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rFloat", {
        get: function () {
            return this._r / 255.0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "g", {
        get: function () {
            return this._g;
        },
        set: function (value) {
            this._g = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "gFloat", {
        get: function () {
            return this._g / 255.0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "bFloat", {
        get: function () {
            return this._b / 255.0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "aFloat", {
        get: function () {
            return this._a / 255.0;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.toArray = function () {
        return [this._r, this._g, this._b, this._a];
    };
    Color.prototype.toFloatArray = function () {
        return [this._r / 255.0, this._g / 255.0, this._b / 255.0, this._a / 255.0];
    };
    Color.prototype.toFloat32Array = function () {
        return new Float32Array(this.toFloatArray());
    };
    Color.white = function () {
        return new Color();
    };
    Color.black = function () {
        return new Color(0, 0, 0, 255);
    };
    Color.red = function () {
        return new Color(255, 0, 0, 255);
    };
    Color.green = function () {
        return new Color(0, 255, 0, 255);
    };
    Color.blue = function () {
        return new Color(0, 0, 255, 255);
    };
    return Color;
}());


;// CONCATENATED MODULE: ./src/core/graphics/texture.ts



var LEVEL = 0;
var BORDER = 0;
var TEMP_IMAGE_DATA = new Uint8Array([255, 255, 255, 255]);
var Texture = /** @class */ (function () {
    function Texture(name, width, height) {
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        this._isLoaded = false;
        this._name = name;
        this._width = width;
        this._height = height;
        this._handle = gl.createTexture();
        this.bind();
        // This signature is for loading raw data into a texture
        gl.texImage2D(gl.TEXTURE_2D, LEVEL, gl.RGBA, 1, 1, BORDER, gl.RGBA, gl.UNSIGNED_BYTE, TEMP_IMAGE_DATA);
        var asset = AssetManager.getAsset(this._name);
        if (asset) {
            this.loadTextureFromAsset(asset);
        }
        else {
            Message.subscribe(MESSAGE_ASSET_LOADER_ASSET_LOADED + this._name, this);
        }
    }
    Texture.prototype.destroy = function () {
        gl.deleteTexture(this._handle);
    };
    Object.defineProperty(Texture.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "isLoaded", {
        get: function () {
            return this._isLoaded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Texture.prototype.bind = function () {
        gl.bindTexture(gl.TEXTURE_2D, this._handle);
    };
    Texture.prototype.unbind = function () {
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    /**
     * makes a call to webgl and tells it what channel to activate on
     * (32 total)
     * @param textureUnit texture to activate on
     */
    Texture.prototype.activateAndBind = function (textureUnit) {
        if (textureUnit === void 0) { textureUnit = 0; }
        gl.activeTexture(gl.TEXTURE0 + textureUnit);
        this.bind();
    };
    Texture.prototype.onMessage = function (message) {
        if (message.code === MESSAGE_ASSET_LOADER_ASSET_LOADED + this._name) {
            this.loadTextureFromAsset(message.context);
        }
    };
    Texture.prototype.loadTextureFromAsset = function (asset) {
        this._width = asset.width;
        this._height = asset.height;
        this.bind();
        // This signature is for loading an image bitmapper
        gl.texImage2D(gl.TEXTURE_2D, LEVEL, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, asset.data);
        if (this.isPowerOf2()) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        else {
            // Do not generate a mip map and clamp wrapping to edge.
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        this._isLoaded = true;
    };
    Texture.prototype.isPowerOf2 = function () {
        return (this.isValuePowerOf2(this._width) && this.isValuePowerOf2(this._height));
    };
    Texture.prototype.isValuePowerOf2 = function (value) {
        return (value & (value - 1)) === 0;
    };
    return Texture;
}());


;// CONCATENATED MODULE: ./src/core/graphics/textureManager.ts

var TextureReferenceNode = /** @class */ (function () {
    function TextureReferenceNode(texture) {
        this.referenceCount = 1;
        this.texture = texture;
    }
    return TextureReferenceNode;
}());
var TextureManager = /** @class */ (function () {
    function TextureManager() {
    }
    TextureManager.getTexture = function (textureName) {
        if (!TextureManager._textures[textureName]) {
            var texture = new Texture(textureName);
            TextureManager._textures[textureName] = new TextureReferenceNode(texture);
        }
        else {
            TextureManager._textures[textureName].referenceCount++;
        }
        return TextureManager._textures[textureName].texture;
    };
    TextureManager.releaseTexture = function (textureName) {
        if (!TextureManager._textures[textureName]) {
            console.warn("A texture named ".concat(textureName, " does not exist and therefore cannot be released."));
        }
        else {
            TextureManager._textures[textureName].referenceCount--;
            if (TextureManager._textures[textureName].referenceCount < 1) {
                TextureManager._textures[textureName].texture.destroy();
                // TextureManager._textures[textureName] = undefined;
                delete TextureManager._textures[textureName];
            }
        }
    };
    TextureManager._textures = {};
    return TextureManager;
}());


;// CONCATENATED MODULE: ./src/core/graphics/material.ts

var Material = /** @class */ (function () {
    function Material(name, diffuseTextureName, tint) {
        this._name = name;
        this._diffuseTextureName = diffuseTextureName;
        this._tint = tint;
        if (this._diffuseTextureName !== undefined) {
            this._diffuseTexture = TextureManager.getTexture(this._diffuseTextureName);
        }
    }
    Object.defineProperty(Material.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Material.prototype, "diffuseTextureName", {
        get: function () {
            return this._diffuseTextureName;
        },
        set: function (value) {
            if (this._diffuseTexture !== undefined) {
                TextureManager.releaseTexture(this._diffuseTextureName);
            }
            this._diffuseTextureName = value;
            if (this._diffuseTextureName !== undefined) {
                this._diffuseTexture = TextureManager.getTexture(this._diffuseTextureName);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Material.prototype, "diffuseTexture", {
        get: function () {
            if (!this._diffuseTexture) {
                return undefined;
            }
            return this._diffuseTexture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Material.prototype, "tint", {
        get: function () {
            return this._tint;
        },
        enumerable: false,
        configurable: true
    });
    Material.prototype.destroy = function () {
        TextureManager.releaseTexture(this._diffuseTextureName);
        this._diffuseTexture = undefined;
    };
    return Material;
}());


;// CONCATENATED MODULE: ./src/core/graphics/bitmapText.ts







var BitmapText = /** @class */ (function () {
    function BitmapText(name, fontName) {
        this._isDirty = false;
        this._origin = Vector3.zero;
        this._vertices = [];
        this._name = name;
        this._fontName = fontName;
    }
    Object.defineProperty(BitmapText.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitmapText.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            if (this._text !== value) {
                this._text = value;
                this._isDirty = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitmapText.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (value) {
            this._origin = value;
            this.calculateVertices();
        },
        enumerable: false,
        configurable: true
    });
    BitmapText.prototype.destroy = function () {
        this._buffer.destroy();
        this._material.destroy();
        // @ts-ignore
        this._material = undefined;
    };
    BitmapText.prototype.load = function () {
        this._bitmapFont = BitmapFontManager.getFont(this._fontName);
        this._material = new Material("BITMAP_FONT_".concat(this._name, "_").concat(this._bitmapFont.size), this._bitmapFont.textureName, Color.white());
        this._buffer = new GLBuffer();
        var positionAttribute = new AttributeInfo();
        positionAttribute.location = 0;
        positionAttribute.size = 3;
        this._buffer.addAttributeLocation(positionAttribute);
        var texCoordAttribute = new AttributeInfo();
        texCoordAttribute.location = 1;
        texCoordAttribute.size = 2;
        this._buffer.addAttributeLocation(texCoordAttribute);
    };
    BitmapText.prototype.update = function (time) {
        var _a;
        if (!((_a = this._material.diffuseTexture) === null || _a === void 0 ? void 0 : _a.isLoaded)) {
            this.load();
            return;
        }
        if (this._isDirty && this._bitmapFont.isLoaded) {
            this.calculateVertices();
            this._isDirty = false;
        }
    };
    BitmapText.prototype.draw = function (shader, model) {
        var modelLocation = shader.getUniformLocation('u_model');
        gl.uniformMatrix4fv(modelLocation, false, model.toFloat32Array());
        var colorLocation = shader.getUniformLocation('u_tint');
        gl.uniform4fv(colorLocation, this._material.tint.toFloat32Array());
        if (this._material.diffuseTexture !== undefined) {
            this._material.diffuseTexture.activateAndBind(0);
            var diffuseLocation = shader.getUniformLocation('u_diffuse');
            gl.uniform1i(diffuseLocation, 0);
        }
        this._buffer.bind();
        this._buffer.draw();
    };
    BitmapText.prototype.calculateVertices = function () {
        var _this = this;
        this._vertices.length = 0;
        this._buffer.clearData();
        var x = 0;
        var y = 0;
        for (var _i = 0, _a = this._text; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c === '\n') {
                x = 0;
                y += this._bitmapFont.size;
                continue;
            }
            var g = this._bitmapFont.getGlyph(c);
            var minX = x + g.xOffset;
            var minY = y + g.yOffset;
            var maxX = minX + g.width;
            var maxY = minY + g.height;
            var minu = g.x / this._bitmapFont.imageWidth;
            var minv = g.y / this._bitmapFont.imageHeight;
            var maxu = (g.x + g.width) / this._bitmapFont.imageWidth;
            var maxv = (g.y + g.height) / this._bitmapFont.imageHeight;
            this._vertices.push(new Vertex(minX, minY, 0, minu, minv));
            this._vertices.push(new Vertex(minX, maxY, 0, minu, maxv));
            this._vertices.push(new Vertex(maxX, maxY, 0, maxu, maxv));
            this._vertices.push(new Vertex(maxX, maxY, 0, maxu, maxv));
            this._vertices.push(new Vertex(maxX, minY, 0, maxu, minv));
            this._vertices.push(new Vertex(minX, minY, 0, minu, minv));
            x += g.xAdvance;
        }
        this._vertices.forEach(function (v) {
            _this._buffer.pushBackData(v.toArray());
        });
        this._buffer.upload();
        this._buffer.unbind();
    };
    return BitmapText;
}());


;// CONCATENATED MODULE: ./src/components/bitmapTextComponent.ts
var bitmapTextComponent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BitmapTextComponentData = /** @class */ (function () {
    function BitmapTextComponentData() {
        this.origin = Vector3.zero;
    }
    BitmapTextComponentData.prototype.setFromJson = function (json) {
        if (json.name !== undefined) {
            this.name = String(json.name);
        }
        if (json.fontName !== undefined) {
            this.fontName = String(json.fontName);
        }
        if (json.text !== undefined) {
            this.text = String(json.text);
        }
        if (json.origin !== undefined) {
            this.origin = json.origin;
        }
    };
    return BitmapTextComponentData;
}());

var BitmapTextComponentBuilder = /** @class */ (function () {
    function BitmapTextComponentBuilder() {
    }
    Object.defineProperty(BitmapTextComponentBuilder.prototype, "type", {
        get: function () {
            return 'bitmapText';
        },
        enumerable: false,
        configurable: true
    });
    BitmapTextComponentBuilder.prototype.buildFromJson = function (json) {
        var data = new BitmapTextComponentData();
        data.setFromJson(json);
        return new BitmapTextComponent(data);
    };
    return BitmapTextComponentBuilder;
}());

var BitmapTextComponent = /** @class */ (function (_super) {
    bitmapTextComponent_extends(BitmapTextComponent, _super);
    function BitmapTextComponent(data) {
        var _this = _super.call(this, data) || this;
        _this._fontName = data.fontName;
        _this._bitmapText = new BitmapText(_this.name, _this._fontName);
        if (!data.origin.equals(Vector3.zero)) {
            _this._bitmapText.origin.copyFrom(data.origin);
        }
        _this._bitmapText.text = data.text;
        // Listen for text updates
        Message.subscribe(_this.name + ':SetText', _this);
        return _this;
    }
    BitmapTextComponent.prototype.onMessage = function (message) {
        if ((message.code = this.name + ':SetText')) {
            this._bitmapText.text = String(message.context);
        }
    };
    BitmapTextComponent.prototype.load = function () {
        this._bitmapText.load();
    };
    BitmapTextComponent.prototype.update = function (time) {
        this._bitmapText.update(time);
    };
    BitmapTextComponent.prototype.render = function (shader) {
        var _a;
        if (this._owner) {
            this._bitmapText.draw(shader, (_a = this._owner) === null || _a === void 0 ? void 0 : _a.worldMatrix);
            _super.prototype.render.call(this, shader);
        }
    };
    return BitmapTextComponent;
}(BaseComponent));


;// CONCATENATED MODULE: ./src/core/graphics/shapes2D/circle2D.ts


var Circle2D = /** @class */ (function () {
    function Circle2D() {
        this.origin = Vector2.zero;
        this.position = Vector2.zero;
    }
    Object.defineProperty(Circle2D.prototype, "offset", {
        get: function () {
            return new Vector2(
            // @ts-ignore
            this.radius + this.radius * this.origin.x, 
            // @ts-ignore
            this.radius + this.radius * this.origin.y);
        },
        enumerable: false,
        configurable: true
    });
    Circle2D.prototype.setFromJson = function (json) {
        if (json.position) {
            this.position.setFromJson(json.position);
        }
        if (json.origin) {
            this.origin.setFromJson(json.origin);
        }
        if (json.radius === undefined) {
            throw new Error('Circle2D requires radius to be present.');
        }
        this.radius = json.radius;
    };
    Circle2D.prototype.intersects = function (otherShape) {
        if (otherShape instanceof Circle2D && this.radius && otherShape.radius) {
            var distance = Math.abs(Vector2.distance(otherShape.position, this.position));
            var radiusLengths = this.radius + otherShape.radius;
            if (distance <= radiusLengths) {
                return true;
            }
        }
        if (otherShape instanceof Rectangle2D) {
            if (!otherShape.width || !otherShape.height) {
                throw new Error("".concat(otherShape, " requires a height and width"));
            }
            if (!this.radius) {
                throw new Error("".concat(this, " requres a radius"));
            }
            var deltaX = this.position.x -
                Math.max(otherShape.position.x, Math.min(this.position.x, otherShape.position.x + otherShape.width));
            var deltaY = this.position.y -
                Math.max(otherShape.position.y, Math.min(this.position.y, otherShape.position.y + otherShape.height));
            if (deltaX * deltaX + deltaY * deltaY < this.radius * this.radius) {
                return true;
            }
        }
        return false;
    };
    Circle2D.prototype.pointInShape = function (point) {
        var absDistance = Math.abs(Vector2.distance(this.position, point));
        if (this.radius && absDistance <= this.radius) {
            return true;
        }
        return false;
    };
    return Circle2D;
}());


;// CONCATENATED MODULE: ./src/core/graphics/shapes2D/rectangle2d.ts


var Rectangle2D = /** @class */ (function () {
    function Rectangle2D(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.origin = Vector2.zero;
        this.position = Vector2.zero;
        this.position.x = x;
        this.position.y = y;
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rectangle2D.prototype, "offset", {
        get: function () {
            return new Vector2(
            //@ts-ignore
            this.width * this.origin.x, 
            //@ts-ignore
            this.height * this.origin.y);
        },
        enumerable: false,
        configurable: true
    });
    Rectangle2D.prototype.setFromJson = function (json) {
        if (json.position) {
            this.position.setFromJson(json.position);
        }
        if (json.origin) {
            this.origin.setFromJson(json.origin);
        }
        if (json.width === undefined) {
            throw new Error('rectangle2d requires width to be present.');
        }
        this.width = Number(json.width);
        if (json.height === undefined) {
            throw new Error('rectangle2d requires height to be present.');
        }
        this.height = Number(json.height);
    };
    Rectangle2D.prototype.intersects = function (otherShape) {
        if (otherShape instanceof Rectangle2D) {
            var a = this.getExtents(this);
            var b = this.getExtents(otherShape);
            if (a.width !== undefined &&
                a.height !== undefined &&
                b.width !== undefined &&
                b.height !== undefined)
                return (a.position.x <= b.width &&
                    a.width >= b.position.x &&
                    a.position.y <= b.height &&
                    a.height >= b.position.y);
        }
        if (otherShape instanceof Circle2D &&
            otherShape.radius &&
            this.width !== undefined &&
            this.height !== undefined) {
            var deltaX = otherShape.position.x -
                Math.max(this.position.x, Math.min(otherShape.position.x, this.position.x + this.width));
            var deltaY = otherShape.position.y -
                Math.max(this.position.y, Math.min(otherShape.position.y, this.position.y + this.height));
            if (deltaX * deltaX + deltaY * deltaY <
                otherShape.radius * otherShape.radius) {
                return true;
            }
        }
        return false;
    };
    Rectangle2D.prototype.pointInShape = function (point) {
        if (this.width && this.height) {
            var x = this.width < 0 ? this.position.x - this.width : this.position.x;
            var y = this.height < 0 ? this.position.y - this.height : this.position.y;
            var extentX = this.width < 0 ? this.position.x : this.position.x + this.width;
            var extentY = this.height < 0 ? this.position.y : this.position.y + this.height;
            if (point.x >= x &&
                point.x <= extentX &&
                point.y >= y &&
                point.y <= extentY) {
                return true;
            }
        }
        return false;
    };
    Rectangle2D.prototype.getExtents = function (shape) {
        if (shape.width === undefined || shape.height === undefined) {
            throw new Error('getExtents needs a shape with a height and a width');
        }
        var x = shape.width < 0 ? shape.position.x - shape.width : shape.position.x;
        var y = shape.height < 0 ? shape.position.y - shape.height : shape.position.y;
        var extentX = shape.width < 0 ? shape.position.x : shape.position.x + shape.width;
        var extentY = shape.height < 0 ? shape.position.y : shape.position.y + shape.height;
        return new Rectangle2D(x, y, extentX, extentY);
    };
    return Rectangle2D;
}());


;// CONCATENATED MODULE: ./src/components/collisionComponent.ts
var collisionComponent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var CollisionComponentData = /** @class */ (function () {
    function CollisionComponentData() {
        this.name = '';
        this.static = true;
    }
    CollisionComponentData.prototype.setFromJson = function (json) {
        var _a;
        if (json.name) {
            this.name = String(json.name);
        }
        if (json.static !== undefined) {
            this.static = Boolean(json.static);
        }
        if ((_a = json.shape) === null || _a === void 0 ? void 0 : _a.type) {
            switch (String(json.shape.type).toLowerCase()) {
                case 'rectangle':
                    this.shape = new Rectangle2D();
                    break;
                case 'circle':
                    this.shape = new Circle2D();
                    break;
                default:
                    throw new Error('Unsupported shape type: ' + json.shape.type);
            }
            this.shape.setFromJson(json.shape);
        }
        else {
            throw new Error('CollisionComponentData requires "shape" and "shape.type" to be present.');
        }
    };
    return CollisionComponentData;
}());

var CollisionComponentBuilder = /** @class */ (function () {
    function CollisionComponentBuilder() {
    }
    Object.defineProperty(CollisionComponentBuilder.prototype, "type", {
        get: function () {
            return 'collision';
        },
        enumerable: false,
        configurable: true
    });
    CollisionComponentBuilder.prototype.buildFromJson = function (json) {
        var data = new CollisionComponentData();
        data.setFromJson(json);
        return new CollisionComponent(data);
    };
    return CollisionComponentBuilder;
}());

var CollisionComponent = /** @class */ (function (_super) {
    collisionComponent_extends(CollisionComponent, _super);
    function CollisionComponent(data) {
        var _this = _super.call(this, data) || this;
        if (!data.shape) {
            throw new Error('Data is missing "shape" property:');
        }
        _this._shape = data.shape;
        _this._static = data.static;
        return _this;
    }
    Object.defineProperty(CollisionComponent.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollisionComponent.prototype, "isStatic", {
        get: function () {
            return this._static;
        },
        enumerable: false,
        configurable: true
    });
    CollisionComponent.prototype.load = function () {
        _super.prototype.load.call(this);
        if (this.owner) {
            this._shape.position.copyFrom(this.owner.getWorldPosition().toVector2().subtract(this._shape.offset));
        }
        // Tell the collision manager that we exist.
        CollisionManager.registerCollisionComponent(this);
    };
    CollisionComponent.prototype.update = function (time) {
        if (this.owner) {
            this._shape.position.copyFrom(this.owner.getWorldPosition().toVector2().subtract(this._shape.offset));
        }
        _super.prototype.update.call(this, time);
    };
    CollisionComponent.prototype.render = function (shader) {
        //if (this._owner?.worldMatrix) {
        //this._sprite.draw(shader, this._owner?.worldMatrix);
        //}
        _super.prototype.render.call(this, shader);
    };
    CollisionComponent.prototype.onCollisionEntry = function (other) { };
    CollisionComponent.prototype.onCollisionUpdate = function (other) { };
    CollisionComponent.prototype.onCollisionExit = function (other) { };
    return CollisionComponent;
}(BaseComponent));


;// CONCATENATED MODULE: ./src/components/componentManager.ts
var ComponentManager = /** @class */ (function () {
    function ComponentManager() {
    }
    ComponentManager.registerBuilder = function (builder) {
        ComponentManager._registeredBuilders[builder.type] = builder;
    };
    ComponentManager.extractComponent = function (json) {
        if (json.type) {
            if (ComponentManager._registeredBuilders[String(json.type)]) {
                return ComponentManager._registeredBuilders[String(json.type)].buildFromJson(json);
            }
            throw new Error('Component manager error: type is missing or builder is not registered for this type');
        }
        throw new Error('Component manager error: type is missing or builder is not registered for this type');
    };
    ComponentManager._registeredBuilders = {};
    return ComponentManager;
}());


;// CONCATENATED MODULE: ./src/core/audio/audioManager.ts
var SoundEffect = /** @class */ (function () {
    function SoundEffect(assetPath, loop) {
        this._player = new Audio(assetPath);
        this._player.volume = 0.05;
        this.assetPath = assetPath;
        this._player.loop = loop;
    }
    Object.defineProperty(SoundEffect.prototype, "loop", {
        get: function () {
            return this._player.loop;
        },
        set: function (value) {
            this._player.loop = value;
        },
        enumerable: false,
        configurable: true
    });
    SoundEffect.prototype.destroy = function () {
        // @ts-ignore
        this._player = undefined;
    };
    SoundEffect.prototype.isPaused = function () {
        return this._player.paused;
    };
    SoundEffect.prototype.play = function () {
        this._player.play();
    };
    SoundEffect.prototype.pause = function () {
        this._player.pause();
    };
    SoundEffect.prototype.stop = function () {
        this._player.pause();
        this._player.currentTime = 0;
    };
    return SoundEffect;
}());

var AudioManager = /** @class */ (function () {
    function AudioManager() {
    }
    AudioManager.loadSoundFile = function (name, assetPath, loop) {
        AudioManager._soundEffects[name] = new SoundEffect(assetPath, loop);
    };
    AudioManager.playSound = function (name) {
        if (AudioManager._soundEffects[name]) {
            AudioManager._soundEffects[name].play();
        }
        else {
            console.log("could not play sound ".concat(name));
        }
    };
    AudioManager.stopSound = function (name) {
        if (AudioManager._soundEffects[name]) {
            AudioManager._soundEffects[name].stop();
        }
    };
    AudioManager.pauseSound = function (name) {
        if (AudioManager._soundEffects[name]) {
            AudioManager._soundEffects[name].pause();
        }
    };
    AudioManager.toggleSound = function (name) {
        var sound = AudioManager._soundEffects[name];
        if (sound) {
            sound.isPaused() ? sound.play() : sound.pause();
        }
    };
    AudioManager.pauseAll = function () {
        Object.values(AudioManager._soundEffects).forEach(function (sound) {
            sound.pause();
        });
    };
    AudioManager.stopAll = function () {
        Object.values(AudioManager._soundEffects).forEach(function (sound) {
            sound.stop();
        });
    };
    AudioManager._soundEffects = {};
    return AudioManager;
}());


;// CONCATENATED MODULE: ./src/core/behaviors/behaviorManager.ts
var BehaviorManager = /** @class */ (function () {
    function BehaviorManager() {
    }
    BehaviorManager.registerBuilder = function (builder) {
        BehaviorManager._registeredBuilders[builder.type] = builder;
    };
    BehaviorManager.extractBehavior = function (json) {
        if (json.type) {
            if (BehaviorManager._registeredBuilders[String(json.type)]) {
                return BehaviorManager._registeredBuilders[String(json.type)].buildFromJson(json);
            }
            throw new Error('Behavior manager error: type is missing or builder is not registered for this type');
        }
        throw new Error('Behavior manager error: type is missing or builder is not registered for this type');
    };
    BehaviorManager._registeredBuilders = {};
    return BehaviorManager;
}());


;// CONCATENATED MODULE: ./src/core/input/inputManager.ts


var Keys;
(function (Keys) {
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["UP"] = 38] = "UP";
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
    Keys[Keys["DOWN"] = 40] = "DOWN";
})(Keys || (Keys = {}));
var MouseContext = /** @class */ (function () {
    function MouseContext(leftDown, rightDown, position) {
        this.leftDown = leftDown;
        this.rightDown = rightDown;
        this.position = position;
    }
    return MouseContext;
}());

var InputManager = /** @class */ (function () {
    function InputManager() {
    }
    InputManager.initialize = function (viewport) {
        for (var i = 0; i < 255; i++) {
            InputManager._keys[i] = false;
        }
        window.addEventListener('keydown', InputManager.onKeyDown);
        window.addEventListener('keyup', InputManager.onKeyUp);
        viewport.addEventListener('mousemove', InputManager.onMouseMove);
        viewport.addEventListener('mousedown', InputManager.onMouseDown);
        viewport.addEventListener('mouseup', InputManager.onMouseUp);
    };
    InputManager.isKeyDown = function (key) {
        return InputManager._keys[key];
    };
    InputManager.getMousePosition = function () {
        return new Vector2(this._mouseX, this._mouseY);
    };
    InputManager.setResolutionScale = function (scale) {
        InputManager._resolutionScale.copyFrom(scale);
    };
    InputManager.onKeyDown = function (event) {
        InputManager._keys[event.keyCode] = true;
        return true;
    };
    InputManager.onKeyUp = function (event) {
        InputManager._keys[event.keyCode] = false;
        return false;
    };
    InputManager.onMouseMove = function (event) {
        InputManager._previousMouseX = InputManager._mouseX;
        InputManager._previousMouseY = InputManager._mouseY;
        var rect = event.target.getBoundingClientRect();
        InputManager._mouseX =
            event.clientX -
                Math.round(rect.left) * (1 / InputManager._resolutionScale.x);
        InputManager._mouseY =
            event.clientY -
                Math.round(rect.top) * (1 / InputManager._resolutionScale.y);
    };
    InputManager.onMouseDown = function (event) {
        if (event.button === 0) {
            InputManager._leftDown = true;
        }
        else if (event.button === 2) {
            InputManager._rightDown = true;
        }
        Message.send('MOUSE_DOWN', this, new MouseContext(InputManager._leftDown, InputManager._rightDown, InputManager.getMousePosition()));
    };
    InputManager.onMouseUp = function (event) {
        if (event.button === 0) {
            InputManager._leftDown = false;
        }
        else if (event.button === 2) {
            InputManager._rightDown = false;
        }
        Message.send('MOUSE_UP', this, new MouseContext(InputManager._leftDown, InputManager._rightDown, InputManager.getMousePosition()));
    };
    InputManager._keys = [];
    InputManager._leftDown = false;
    InputManager._rightDown = false;
    InputManager._resolutionScale = Vector2.one;
    return InputManager;
}());


;// CONCATENATED MODULE: ./src/core/behaviors/baseBehavior.ts
var BaseBehavior = /** @class */ (function () {
    function BaseBehavior(data) {
        this._data = data;
        this.name = this._data.name;
    }
    BaseBehavior.prototype.setOwner = function (owner) {
        this._owner = owner;
    };
    BaseBehavior.prototype.updateReady = function () { };
    BaseBehavior.prototype.update = function (time) { };
    BaseBehavior.prototype.apply = function (userData) { };
    return BaseBehavior;
}());


;// CONCATENATED MODULE: ./src/core/behaviors/keyboardMovementBehavior.ts
var keyboardMovementBehavior_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var KeyboardMovementBehaviorData = /** @class */ (function () {
    function KeyboardMovementBehaviorData() {
        this.name = '';
        this.speed = 0.1;
    }
    KeyboardMovementBehaviorData.prototype.setFromJson = function (json) {
        if (!json.name) {
            throw new Error('Name must be defined in behavior data.');
        }
        this.name = String(json.name);
        if (json.speed) {
            this.speed = Number(json.speed);
        }
    };
    return KeyboardMovementBehaviorData;
}());

var KeyboardMovementBehaviorBuilder = /** @class */ (function () {
    function KeyboardMovementBehaviorBuilder() {
    }
    Object.defineProperty(KeyboardMovementBehaviorBuilder.prototype, "type", {
        get: function () {
            return 'keyboardMovement';
        },
        enumerable: false,
        configurable: true
    });
    KeyboardMovementBehaviorBuilder.prototype.buildFromJson = function (json) {
        var data = new KeyboardMovementBehaviorData();
        data.setFromJson(json);
        return new KeyboardMovementBehavior(data);
    };
    return KeyboardMovementBehaviorBuilder;
}());

var KeyboardMovementBehavior = /** @class */ (function (_super) {
    keyboardMovementBehavior_extends(KeyboardMovementBehavior, _super);
    function KeyboardMovementBehavior(data) {
        var _this = _super.call(this, data) || this;
        _this.speed = 0.1;
        _this.speed = data.speed;
        return _this;
    }
    KeyboardMovementBehavior.prototype.update = function (time) {
        if (InputManager.isKeyDown(Keys.LEFT) && this._owner) {
            this._owner.transform.position.x -= this.speed;
        }
        if (InputManager.isKeyDown(Keys.RIGHT) && this._owner) {
            this._owner.transform.position.x += this.speed;
        }
        if (InputManager.isKeyDown(Keys.UP) && this._owner) {
            this._owner.transform.position.y -= this.speed;
        }
        if (InputManager.isKeyDown(Keys.DOWN) && this._owner) {
            this._owner.transform.position.y += this.speed;
        }
        _super.prototype.update.call(this, time);
    };
    return KeyboardMovementBehavior;
}(BaseBehavior));


;// CONCATENATED MODULE: ./src/core/behaviors/mouseClickBehavior.ts
var mouseClickBehavior_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MouseClickBehaviorData = /** @class */ (function () {
    function MouseClickBehaviorData() {
    }
    MouseClickBehaviorData.prototype.setFromJson = function (json) {
        if (json.name === undefined) {
            throw new Error('Name must be defined in behavior data');
        }
        this.name = String(json.name);
        if (json.width === undefined) {
            throw new Error('Width must be defined in behavior data');
        }
        this.width = Number(json.width);
        if (json.height === undefined) {
            throw new Error('Height must be defined in behavior data');
        }
        this.height = Number(json.height);
        if (json.messageCode === undefined) {
            throw new Error('MessageCode must be defined in behavior data');
        }
        this.messageCode = String(json.messageCode);
    };
    return MouseClickBehaviorData;
}());

var MouseClickBehaviorBuilder = /** @class */ (function () {
    function MouseClickBehaviorBuilder() {
    }
    Object.defineProperty(MouseClickBehaviorBuilder.prototype, "type", {
        get: function () {
            return 'mouseClick';
        },
        enumerable: false,
        configurable: true
    });
    MouseClickBehaviorBuilder.prototype.buildFromJson = function (json) {
        var data = new MouseClickBehaviorData();
        data.setFromJson(json);
        return new MouseClickBehavior(data);
    };
    return MouseClickBehaviorBuilder;
}());

var MouseClickBehavior = /** @class */ (function (_super) {
    mouseClickBehavior_extends(MouseClickBehavior, _super);
    function MouseClickBehavior(data) {
        var _this = _super.call(this, data) || this;
        _this._width = data.width;
        _this._height = data.height;
        _this._messageCode = data.messageCode;
        Message.subscribe('MOUSE_UP', _this);
        return _this;
    }
    MouseClickBehavior.prototype.onMessage = function (message) {
        if (message.code === 'MOUSE_UP') {
            if (this._owner) {
                if (!this._owner.isVisible) {
                    return;
                }
                var context = message.context;
                var worldPos = this._owner.getWorldPosition();
                var extentX = worldPos.x + this._width;
                var extentY = worldPos.y + this._height;
                if (context.position.x >= worldPos.x &&
                    context.position.x <= extentX &&
                    context.position.y >= worldPos.y &&
                    context.position.y <= extentY) {
                    Message.send(this._messageCode, this);
                }
            }
        }
    };
    return MouseClickBehavior;
}(BaseBehavior));


;// CONCATENATED MODULE: ./src/core/math/mathExtensions.ts
var MathExtensions = /** @class */ (function () {
    function MathExtensions() {
    }
    MathExtensions.clamp = function (value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    };
    MathExtensions.degToRad = function (degrees) {
        return (degrees * Math.PI) / 180.0;
    };
    MathExtensions.radToDeg = function (radians) {
        return (radians * 180.0) / Math.PI;
    };
    return MathExtensions;
}());

//(Math as any).clamp = (value: number, min: number, max: number): number => {
//if (value < min) {
//return min;
//}
//if (value > max) {
//return max;
//}
//return value;
//};
//(Math as any).degToRad = (degrees: number): number => {
//return (degrees * Math.PI) / 180.0;
//};
//(Math as any).radToDeg = (radians: number): number => {
//return (radians * 180.0) / Math.PI;
//};

;// CONCATENATED MODULE: ./src/core/behaviors/playerBehavior.ts
var playerBehavior_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var PlayerBehaviorData = /** @class */ (function () {
    function PlayerBehaviorData() {
        this.name = '';
        this.acceleration = new Vector2(0, 920);
        this.playerCollisionComponent = '';
        this.groundCollisionComponent = '';
        this.animatedSpriteName = '';
        this.scoreCollisionComponent = '';
    }
    PlayerBehaviorData.prototype.setFromJson = function (json) {
        if (!json.name) {
            throw new Error('Name must be defined in behavior data.');
        }
        this.name = String(json.name);
        if (json.acceleration) {
            this.acceleration.setFromJson(json.acceleration);
        }
        if (!json.animatedSpriteName) {
            throw new Error('animatedSpriteName must be defined in behavior data.');
        }
        this.animatedSpriteName = String(json.animatedSpriteName);
        if (!json.playerCollisionComponent) {
            throw new Error('playerCollisionComponent must be defined in behavior data.');
        }
        this.playerCollisionComponent = String(json.playerCollisionComponent);
        if (!json.groundCollisionComponent) {
            throw new Error('groundCollisionComponent must be defined in behavior data.');
        }
        this.groundCollisionComponent = String(json.groundCollisionComponent);
        if (!json.scoreCollisionComponent) {
            throw new Error('scoreCollisionComponent must be defined in behavior data.');
        }
        this.scoreCollisionComponent = String(json.scoreCollisionComponent);
    };
    return PlayerBehaviorData;
}());

var PlayerBehaviorBuilder = /** @class */ (function () {
    function PlayerBehaviorBuilder() {
    }
    Object.defineProperty(PlayerBehaviorBuilder.prototype, "type", {
        get: function () {
            return 'player';
        },
        enumerable: false,
        configurable: true
    });
    PlayerBehaviorBuilder.prototype.buildFromJson = function (json) {
        var data = new PlayerBehaviorData();
        data.setFromJson(json);
        return new PlayerBehavior(data);
    };
    return PlayerBehaviorBuilder;
}());

var PlayerBehavior = /** @class */ (function (_super) {
    playerBehavior_extends(PlayerBehavior, _super);
    function PlayerBehavior(data) {
        var _this = _super.call(this, data) || this;
        _this._velocity = Vector2.zero;
        _this._isAlive = true;
        _this._playerCollisionComponent = '';
        _this._groundCollisionComponent = '';
        _this._scoreCollisionComponent = '';
        _this._animatedSpriteName = '';
        _this._isPlaying = false;
        _this._initialPosition = Vector3.zero;
        _this._score = 0;
        _this._highScore = 0;
        _this._pipeNames = [
            'pipe1CollisionEndTop',
            'pipe1CollisionBodyTop',
            'pipe1CollisionEndBottom',
            'pipe1CollisionBodyBottom',
        ];
        _this._acceleration = data.acceleration;
        _this._playerCollisionComponent = data.playerCollisionComponent;
        _this._groundCollisionComponent = data.groundCollisionComponent;
        _this._scoreCollisionComponent = data.scoreCollisionComponent;
        _this._animatedSpriteName = data.animatedSpriteName;
        Message.subscribe('MOUSE_DOWN', _this);
        Message.subscribe('COLLISION_ENTRY', _this);
        Message.subscribe('GAME_READY', _this);
        Message.subscribe('GAME_RESET', _this);
        Message.subscribe('GAME_START', _this);
        Message.subscribe('PLAYER_DIED', _this);
        return _this;
    }
    PlayerBehavior.prototype.updateReady = function () {
        var _a;
        _super.prototype.updateReady.call(this);
        // Obtain a reference to the animated sprite
        this._sprite = (_a = this._owner) === null || _a === void 0 ? void 0 : _a.getComponentByName(this._animatedSpriteName);
        // Make sure sprite animation plays right away
        this._sprite.setFrame(0);
        this._initialPosition.copyFrom(this._owner.transform.position);
    };
    PlayerBehavior.prototype.update = function (time) {
        var _a, _b;
        var spriteReady = (_a = this._owner) === null || _a === void 0 ? void 0 : _a.getComponentByName(this._animatedSpriteName);
        if (!spriteReady) {
            return;
        }
        if (this._owner) {
            var seconds = time / 1000;
            if (this._isPlaying) {
                this._velocity.add(this._acceleration.clone().scale(seconds));
            }
            // Limit max speed of falling
            if (this._velocity.y > 400) {
                this._velocity.y = 400;
            }
            // Prevent flying too high
            if (this._owner.transform.position.y < -13) {
                this._owner.transform.position.y = -13;
                this._velocity.y = 0;
            }
            (_b = this._owner) === null || _b === void 0 ? void 0 : _b.transform.position.add(this._velocity.clone().scale(seconds).toVector3());
            if (this._velocity.y < 0) {
                this._owner.transform.rotation.z -=
                    MathExtensions.degToRad(600.0) * seconds;
                if (this._owner.transform.rotation.z < MathExtensions.degToRad(-20)) {
                    this._owner.transform.rotation.z = MathExtensions.degToRad(-20);
                }
            }
            if (this.isFalling() || !this._isAlive) {
                this._owner.transform.rotation.z +=
                    MathExtensions.degToRad(480.0) * seconds;
                if (this._owner.transform.rotation.z > MathExtensions.degToRad(90)) {
                    this._owner.transform.rotation.z = MathExtensions.degToRad(90);
                }
            }
            if (this.shouldNotFlap()) {
                this._sprite.stop();
            }
            else {
                if (!this._sprite.isPlaying) {
                    this._sprite.play();
                }
            }
        }
        _super.prototype.update.call(this, time);
    };
    PlayerBehavior.prototype.onMessage = function (message) {
        var _a, _b, _c, _d, _e, _f;
        switch (message.code) {
            case 'MOUSE_DOWN':
                this.onFlap();
                break;
            case 'COLLISION_ENTRY':
                var data = message.context;
                if (((_a = data.a) === null || _a === void 0 ? void 0 : _a.name) !== this._playerCollisionComponent &&
                    ((_b = data.b) === null || _b === void 0 ? void 0 : _b.name) !== this._playerCollisionComponent) {
                    return;
                }
                if (((_c = data === null || data === void 0 ? void 0 : data.a) === null || _c === void 0 ? void 0 : _c.name) === this._groundCollisionComponent ||
                    ((_d = data === null || data === void 0 ? void 0 : data.b) === null || _d === void 0 ? void 0 : _d.name) === this._groundCollisionComponent) {
                    this.die();
                    this.decelerate();
                }
                else if (this._pipeNames.indexOf(data.a.name) !== -1 ||
                    this._pipeNames.indexOf(data.b.name) !== -1) {
                    this.die();
                }
                else if (((_e = data === null || data === void 0 ? void 0 : data.a) === null || _e === void 0 ? void 0 : _e.name) === this._scoreCollisionComponent ||
                    ((_f = data === null || data === void 0 ? void 0 : data.b) === null || _f === void 0 ? void 0 : _f.name) === this._scoreCollisionComponent) {
                    if (this._isAlive && this._isPlaying) {
                        this.setScore(this._score + 1);
                        AudioManager.playSound('ting');
                    }
                }
                break;
            // Show the tutorial, click to GAME_START
            case 'GAME_RESET':
                Message.send('GAME_HIDE', this);
                Message.send('RESET_HIDE', this);
                Message.send('SPLASH_HIDE', this);
                Message.send('TUTORIAL_SHOW', this);
                this.reset();
                break;
            // Starts the main game
            case 'GAME_START':
                Message.send('GAME_SHOW', this);
                Message.send('RESET_HIDE', this);
                Message.send('SPLASH_HIDE', this);
                Message.send('TUTORIAL_HIDE', this);
                this._isPlaying = true;
                this._isAlive = true;
                this.start();
                break;
            // Level is loaded, show play button / splash screen
            case 'GAME_READY':
                Message.send('GAME_HIDE', this);
                Message.send('RESET_HIDE', this);
                Message.send('SPLASH_SHOW', this);
                Message.send('TUTORIAL_HIDE', this);
                break;
            case 'PLAYER_DIED':
                Message.send('RESET_SHOW', this);
                break;
        }
    };
    PlayerBehavior.prototype.isFalling = function () {
        return this._velocity.y > 220.0;
    };
    PlayerBehavior.prototype.shouldNotFlap = function () {
        return !this._isPlaying || this._velocity.y > 220.0 || !this._isAlive;
    };
    PlayerBehavior.prototype.die = function () {
        if (this._isAlive) {
            this._isAlive = false;
            AudioManager.playSound('dead');
            AudioManager.stopSound('music');
            Message.send('PLAYER_DIED', this);
        }
    };
    PlayerBehavior.prototype.reset = function () {
        this._isAlive = true;
        this._isPlaying = false;
        this._sprite.owner.transform.position.copyFrom(this._initialPosition);
        this._sprite.owner.transform.rotation.z = 0;
        this.setScore(0);
        this._velocity.set(0, 0);
        this._acceleration.set(0, 920);
        this._sprite.play();
    };
    PlayerBehavior.prototype.start = function () {
        this._isPlaying = true;
        AudioManager.playSound('music');
        Message.send('PLAYER_RESET', this);
    };
    PlayerBehavior.prototype.decelerate = function () {
        this._acceleration.y = 0;
        this._velocity.y = 0;
    };
    PlayerBehavior.prototype.onFlap = function () {
        if (this._isAlive && this._isPlaying) {
            this._velocity.y = -280;
            AudioManager.playSound('flap');
        }
    };
    PlayerBehavior.prototype.setScore = function (score) {
        this._score = score;
        Message.send('counterText:SetText', this, this._score);
        Message.send('scoreText:SetText', this, this._score);
        if (this._score > this._highScore) {
            this._highScore = this._score;
            Message.send('bestText:SetText', this, this._highScore);
        }
    };
    return PlayerBehavior;
}(BaseBehavior));


;// CONCATENATED MODULE: ./src/core/behaviors/rotationBehavior.ts
var rotationBehavior_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RotationBehaviorData = /** @class */ (function () {
    function RotationBehaviorData() {
        this.name = '';
        this.rotation = Vector3.zero;
    }
    RotationBehaviorData.prototype.setFromJson = function (json) {
        if (!json.name) {
            throw new Error('Name must be defined in behavior data.');
        }
        this.name = String(json.name);
        if (json.rotation !== undefined) {
            this.rotation.setFromJson(json.rotation);
        }
    };
    return RotationBehaviorData;
}());

var RotationBehaviorBuilder = /** @class */ (function () {
    function RotationBehaviorBuilder() {
    }
    Object.defineProperty(RotationBehaviorBuilder.prototype, "type", {
        get: function () {
            return 'rotation';
        },
        enumerable: false,
        configurable: true
    });
    RotationBehaviorBuilder.prototype.buildFromJson = function (json) {
        var data = new RotationBehaviorData();
        data.setFromJson(json);
        return new RotationBehavior(data);
    };
    return RotationBehaviorBuilder;
}());

var RotationBehavior = /** @class */ (function (_super) {
    rotationBehavior_extends(RotationBehavior, _super);
    function RotationBehavior(data) {
        var _this = _super.call(this, data) || this;
        _this._rotation = data.rotation;
        return _this;
    }
    RotationBehavior.prototype.update = function (time) {
        var _a;
        (_a = this._owner) === null || _a === void 0 ? void 0 : _a.transform.rotation.add(this._rotation);
        _super.prototype.update.call(this, time);
    };
    return RotationBehavior;
}(BaseBehavior));


;// CONCATENATED MODULE: ./src/core/behaviors/scrollBehavior.ts
var scrollBehavior_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ScrollBehaviorData = /** @class */ (function () {
    function ScrollBehaviorData() {
        this.velocity = Vector2.zero;
        this.minPosition = Vector2.zero;
        this.resetPosition = Vector2.zero;
    }
    ScrollBehaviorData.prototype.setFromJson = function (json) {
        if (json.name === undefined) {
            throw new Error('Name not defined in behavior data.');
        }
        this.name = String(json.name);
        if (json.startMessage !== undefined) {
            this.startMessage = String(json.startMessage);
        }
        if (json.stopMessage !== undefined) {
            this.stopMessage = String(json.stopMessage);
        }
        if (json.resetMessage !== undefined) {
            this.resetMessage = String(json.resetMessage);
        }
        if (json.velocity !== undefined) {
            this.velocity.setFromJson(json.velocity);
        }
        else {
            throw new Error('ScrollBehaviorData requires property "velocity" to be defined.');
        }
        if (json.minPosition !== undefined) {
            this.minPosition.setFromJson(json.minPosition);
        }
        else {
            throw new Error('ScrollBehaviorData requires property "minPosition" to be defined.');
        }
        if (json.resetPosition !== undefined) {
            this.resetPosition.setFromJson(json.resetPosition);
        }
        else {
            throw new Error('ScrollBehaviorData requires property "resetPosition" to be defined.');
        }
        if (json.minResetY !== undefined) {
            this.minResetY = Number(json.minResetY);
        }
        if (json.maxResetY !== undefined) {
            this.maxResetY = Number(json.maxResetY);
        }
    };
    return ScrollBehaviorData;
}());

var ScrollBehaviorBuilder = /** @class */ (function () {
    function ScrollBehaviorBuilder() {
    }
    Object.defineProperty(ScrollBehaviorBuilder.prototype, "type", {
        get: function () {
            return 'scroll';
        },
        enumerable: false,
        configurable: true
    });
    ScrollBehaviorBuilder.prototype.buildFromJson = function (json) {
        var data = new ScrollBehaviorData();
        data.setFromJson(json);
        return new ScrollBehavior(data);
    };
    return ScrollBehaviorBuilder;
}());

var ScrollBehavior = /** @class */ (function (_super) {
    scrollBehavior_extends(ScrollBehavior, _super);
    function ScrollBehavior(data) {
        var _this = _super.call(this, data) || this;
        _this._velocity = Vector2.zero;
        _this._minPosition = Vector2.zero;
        _this._resetPosition = Vector2.zero;
        _this._isScrolling = false;
        _this._initialPosition = Vector2.zero;
        _this._velocity.copyFrom(data.velocity);
        _this._minPosition.copyFrom(data.minPosition);
        _this._resetPosition.copyFrom(data.resetPosition);
        _this._startMessage = data.startMessage;
        _this._stopMessage = data.stopMessage;
        _this._resetMessage = data.resetMessage;
        if (data.minResetY !== undefined) {
            _this._minResetY = data.minResetY;
        }
        if (data.maxResetY !== undefined) {
            _this._maxResetY = data.maxResetY;
        }
        return _this;
    }
    ScrollBehavior.prototype.updateReady = function () {
        _super.prototype.updateReady.call(this);
        if (this._startMessage !== undefined) {
            Message.subscribe(this._startMessage, this);
        }
        if (this._stopMessage !== undefined) {
            Message.subscribe(this._stopMessage, this);
        }
        if (this._resetMessage !== undefined) {
            Message.subscribe(this._resetMessage, this);
        }
        this._initialPosition.copyFrom(this._owner.transform.position.toVector2());
    };
    ScrollBehavior.prototype.update = function (time) {
        if (this._isScrolling) {
            this._owner.transform.position.add(this._velocity
                .clone()
                .scale(time / 1000)
                .toVector3());
            var scrollY_1 = this._minResetY !== undefined && this._maxResetY !== undefined;
            if (this._owner.transform.position.x <= this._minPosition.x &&
                (scrollY_1 ||
                    (!scrollY_1 &&
                        this._owner.transform.position.y <= this._minPosition.y))) {
                this.reset();
            }
        }
    };
    ScrollBehavior.prototype.onMessage = function (message) {
        if (message.code == this._startMessage) {
            this._isScrolling = true;
        }
        if (message.code == this._stopMessage) {
            this._isScrolling = false;
        }
        if (message.code == this._resetMessage) {
            this.initial();
        }
    };
    ScrollBehavior.prototype.reset = function () {
        if (this._minResetY !== undefined && this._maxResetY !== undefined) {
            this._owner.transform.position.set(this._resetPosition.x, this.getRandomY());
        }
        else {
            this._owner.transform.position.copyFrom(this._resetPosition.toVector3());
        }
    };
    ScrollBehavior.prototype.getRandomY = function () {
        // Inclusive of min and max set in the data
        return (Math.floor(Math.random() * (this._maxResetY - this._minResetY + 1)) +
            this._minResetY);
    };
    ScrollBehavior.prototype.initial = function () {
        this._owner.transform.position.copyFrom(this._initialPosition.toVector3());
    };
    return ScrollBehavior;
}(BaseBehavior));


;// CONCATENATED MODULE: ./src/core/behaviors/visibilityOnMessageBehavior.ts
var visibilityOnMessageBehavior_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VisibilityOnMessageBehaviorData = /** @class */ (function () {
    function VisibilityOnMessageBehaviorData() {
    }
    VisibilityOnMessageBehaviorData.prototype.setFromJson = function (json) {
        if (json.messageCode === undefined) {
            throw new Error('VisibilityOnMessageBehaviorData requires "messageCode" to be defined');
        }
        this.messageCode = String(json.messageCode);
        if (json.visible === undefined) {
            throw new Error('VisibilityOnMessageBehaviorData requires "visible" to be defined');
        }
        this.visible = Boolean(json.visible);
    };
    return VisibilityOnMessageBehaviorData;
}());

var VisibilityOnMessageBehaviorBuilder = /** @class */ (function () {
    function VisibilityOnMessageBehaviorBuilder() {
    }
    Object.defineProperty(VisibilityOnMessageBehaviorBuilder.prototype, "type", {
        get: function () {
            return 'visibilityOnMessage';
        },
        enumerable: false,
        configurable: true
    });
    VisibilityOnMessageBehaviorBuilder.prototype.buildFromJson = function (json) {
        var data = new VisibilityOnMessageBehaviorData();
        data.setFromJson(json);
        return new VisibilityOnMessageBehavior(data);
    };
    return VisibilityOnMessageBehaviorBuilder;
}());

var VisibilityOnMessageBehavior = /** @class */ (function (_super) {
    visibilityOnMessageBehavior_extends(VisibilityOnMessageBehavior, _super);
    function VisibilityOnMessageBehavior(data) {
        var _this = _super.call(this, data) || this;
        _this._messageCode = data.messageCode;
        _this._visible = data.visible;
        Message.subscribe(_this._messageCode, _this);
        return _this;
    }
    VisibilityOnMessageBehavior.prototype.onMessage = function (message) {
        if (message.code === this._messageCode) {
            if (this._owner) {
                this._owner.isVisible = this._visible;
            }
        }
    };
    return VisibilityOnMessageBehavior;
}(BaseBehavior));


;// CONCATENATED MODULE: ./src/core/gl/shader.ts

/**
 * Represents a WebGL shader.
 */
var Shader = /** @class */ (function () {
    /**
     * Creates a new shader.
     * @param name The name of the shader.
     * @param vertexSource The source of the vertex shader.
     * @param fragmentSource The source of the fragment shader.
     */
    function Shader(name) {
        this._attributes = {};
        this._uniforms = {};
        this._name = name;
    }
    Object.defineProperty(Shader.prototype, "name", {
        /**
         * The name of the shader.
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Use shader.
     */
    Shader.prototype.use = function () {
        gl.useProgram(this._program);
    };
    /**
     * Gets the location of an attribute with the provided name
     * @param name The name of the attribute to retrieve
     * @returns An attribute
     */
    Shader.prototype.getAttributeLocation = function (name) {
        if (this._attributes[name] === undefined) {
            throw new Error("Unable to find attribute name ".concat(name, " in shader ").concat(this._name));
        }
        return this._attributes[name];
    };
    Shader.prototype.getUniformLocation = function (name) {
        if (this._uniforms[name] === undefined) {
            throw new Error("Unable to find uniform name ".concat(name, " in shader ").concat(this._name));
        }
        return this._uniforms[name];
    };
    Shader.prototype.load = function (vertexSource, fragmentSource) {
        var vertexShader = this.loadShader(vertexSource, gl.VERTEX_SHADER);
        var fragmentShader = this.loadShader(fragmentSource, gl.FRAGMENT_SHADER);
        this.createProgram(vertexShader, fragmentShader);
        this.detectAttributes();
        this.detectUniforms();
    };
    Shader.prototype.loadShader = function (source, shaderType) {
        var _a;
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var error = (_a = gl.getShaderInfoLog(shader)) === null || _a === void 0 ? void 0 : _a.trim();
        if (error) {
            throw new Error('Error compiling shader: ' + this._name + ': ' + error);
        }
        return shader;
    };
    Shader.prototype.createProgram = function (vertexShader, fragmentShader) {
        var _a;
        this._program = gl.createProgram();
        gl.attachShader(this._program, vertexShader);
        gl.attachShader(this._program, fragmentShader);
        gl.linkProgram(this._program);
        var error = (_a = gl.getProgramInfoLog(this._program)) === null || _a === void 0 ? void 0 : _a.trim();
        if (error) {
            throw new Error('Errror linking shader ' + this._name + ': ' + error);
        }
    };
    Shader.prototype.detectAttributes = function () {
        // gives all attributes in the shader
        var attributeCount = gl.getProgramParameter(this._program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < attributeCount; i++) {
            var attributeInfo = gl.getActiveAttrib(this._program, i);
            if (!attributeInfo) {
                break;
            }
            // Populates _attribues with each attribute as as the value and the attribute name as the key
            this._attributes[attributeInfo.name] = gl.getAttribLocation(this._program, attributeInfo.name);
        }
    };
    Shader.prototype.detectUniforms = function () {
        var uniformCount = gl.getProgramParameter(this._program, gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < uniformCount; i++) {
            var uniformInfo = gl.getActiveUniform(this._program, i);
            if (!uniformInfo) {
                break;
            }
            // Populates _attribues with each attribute as as the value and the attribute name as the key
            this._uniforms[uniformInfo.name] = gl.getUniformLocation(this._program, uniformInfo.name);
        }
    };
    return Shader;
}());


;// CONCATENATED MODULE: ./src/core/gl/shaders/basicShader.ts
var basicShader_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BasicShader = /** @class */ (function (_super) {
    basicShader_extends(BasicShader, _super);
    function BasicShader() {
        var _this = _super.call(this, 'basic') || this;
        _this.load(_this.getVertexSource(), _this.getFragmentSource());
        return _this;
    }
    BasicShader.prototype.getVertexSource = function () {
        return "\n    attribute vec3 a_position;\n    attribute vec2 a_texCoord;\n\n    uniform mat4 u_projection;\n    uniform mat4 u_model;\n\n    varying vec2 v_texCoord;\n\n    void main() {\n      gl_Position = u_projection * u_model * vec4(a_position, 1.0);\n      v_texCoord = a_texCoord;\n    }\n    ";
    };
    BasicShader.prototype.getFragmentSource = function () {
        return "\n    precision mediump float;\n\n    uniform vec4 u_tint;\n    uniform sampler2D u_diffuse;\n\n    varying vec2 v_texCoord;\n    \n    void main() {\n      gl_FragColor = u_tint * texture2D(u_diffuse, v_texCoord);\n    }\n    ";
    };
    return BasicShader;
}(Shader));


;// CONCATENATED MODULE: ./src/core/math/matrix4x4.ts
var Matrix4x4 = /** @class */ (function () {
    function Matrix4x4() {
        this._data = [];
        // Identity matrix (default matrix)
        this._data = [
            // row 1
            1, 0, 0, 0,
            // row 2
            0, 1, 0, 0,
            // row 3
            0, 0, 1, 0,
            // row 4
            0, 0, 0, 1,
        ];
    }
    Object.defineProperty(Matrix4x4.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Matrix4x4.identity = function () {
        return new Matrix4x4();
    };
    /**
     * Orthographic matrix
     * No perspective, renders something as if it is flat in space
     * @param left position from left of screen (almost always 0)
     * @param right distance to right side of screen from the left (e.g. 1080p would be 1920)
     * @param bottom position from the bottom of the screen (almost always 0) webgl starts from the bottom of the screen
     * @param top position from bottom of screen to the top (e.g. 1080p would be 1080)
     * @param nearClip something negative (to prevent clipping in front)
     * @param farClip arbitrary number
     */
    Matrix4x4.orthographic = function (left, right, bottom, top, nearClip, farClip) {
        var m = new Matrix4x4();
        var lr = 1.0 / (left - right);
        var bt = 1.0 / (bottom - top);
        var nf = 1.0 / (nearClip - farClip);
        m._data[0] = -2.0 * lr;
        m._data[5] = -2.0 * bt;
        m._data[10] = 2.0 * nf;
        m._data[12] = (left + right) * lr;
        m._data[13] = (top + bottom) * bt;
        m._data[14] = (farClip + nearClip) * nf;
        return m;
    };
    /**
     * A matrix that holds data that represents movement of an object
     * through space.
     */
    Matrix4x4.translation = function (position) {
        var m = new Matrix4x4();
        // editing 1st 3 numbers in last row of matrix4
        m._data[12] = position.x;
        m._data[13] = position.y;
        m._data[14] = position.z;
        return m;
    };
    /**
     * Creates a rotation matrix on the X axis from the provided angle in radians.
     * @param angleInRadians The angle in radians.
     */
    Matrix4x4.rotationX = function (angleInRadians) {
        var m = new Matrix4x4();
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        m._data[5] = c;
        m._data[6] = s;
        m._data[9] = -s;
        m._data[10] = c;
        return m;
    };
    Matrix4x4.rotationY = function (angleInRadians) {
        var m = new Matrix4x4();
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        m._data[0] = c;
        m._data[2] = -s;
        m._data[8] = s;
        m._data[10] = c;
        return m;
    };
    Matrix4x4.rotationZ = function (angleInRadians) {
        // radians are used in almost all math libraries because it is more performant
        // under the hood
        var m = new Matrix4x4();
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        m._data[0] = c;
        m._data[1] = s;
        m._data[4] = -s;
        m._data[5] = c;
        return m;
    };
    Matrix4x4.rotationXYZ = function (xRadians, yRadians, zRadians) {
        var rx = Matrix4x4.rotationX(xRadians);
        var ry = Matrix4x4.rotationY(yRadians);
        var rz = Matrix4x4.rotationZ(zRadians);
        return Matrix4x4.multiply(Matrix4x4.multiply(rz, ry), rx);
    };
    Matrix4x4.scale = function (scale) {
        var m = new Matrix4x4();
        m._data[0] = scale.x;
        m._data[5] = scale.y;
        m._data[10] = scale.z;
        return m;
    };
    Matrix4x4.multiply = function (a, b) {
        var m = new Matrix4x4();
        var b00 = b._data[0 * 4 + 0];
        var b01 = b._data[0 * 4 + 1];
        var b02 = b._data[0 * 4 + 2];
        var b03 = b._data[0 * 4 + 3];
        var b10 = b._data[1 * 4 + 0];
        var b11 = b._data[1 * 4 + 1];
        var b12 = b._data[1 * 4 + 2];
        var b13 = b._data[1 * 4 + 3];
        var b20 = b._data[2 * 4 + 0];
        var b21 = b._data[2 * 4 + 1];
        var b22 = b._data[2 * 4 + 2];
        var b23 = b._data[2 * 4 + 3];
        var b30 = b._data[3 * 4 + 0];
        var b31 = b._data[3 * 4 + 1];
        var b32 = b._data[3 * 4 + 2];
        var b33 = b._data[3 * 4 + 3];
        var a00 = a._data[0 * 4 + 0];
        var a01 = a._data[0 * 4 + 1];
        var a02 = a._data[0 * 4 + 2];
        var a03 = a._data[0 * 4 + 3];
        var a10 = a._data[1 * 4 + 0];
        var a11 = a._data[1 * 4 + 1];
        var a12 = a._data[1 * 4 + 2];
        var a13 = a._data[1 * 4 + 3];
        var a20 = a._data[2 * 4 + 0];
        var a21 = a._data[2 * 4 + 1];
        var a22 = a._data[2 * 4 + 2];
        var a23 = a._data[2 * 4 + 3];
        var a30 = a._data[3 * 4 + 0];
        var a31 = a._data[3 * 4 + 1];
        var a32 = a._data[3 * 4 + 2];
        var a33 = a._data[3 * 4 + 3];
        m._data[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
        m._data[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
        m._data[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
        m._data[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
        m._data[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
        m._data[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
        m._data[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
        m._data[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
        m._data[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
        m._data[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
        m._data[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
        m._data[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
        m._data[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
        m._data[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
        m._data[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
        m._data[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
        return m;
    };
    Matrix4x4.prototype.toFloat32Array = function () {
        return new Float32Array(this._data);
    };
    Matrix4x4.prototype.copyFrom = function (m) {
        for (var i = 0; i < 16; i++) {
            this._data[i] = m._data[i];
        }
    };
    return Matrix4x4;
}());


;// CONCATENATED MODULE: ./src/core/math/transform.ts


var Transform = /** @class */ (function () {
    function Transform() {
        this.position = Vector3.zero;
        this.rotation = Vector3.zero;
        this.scale = Vector3.one;
    }
    Transform.prototype.copyFrom = function (transform) {
        this.position.copyFrom(transform.position);
        this.rotation.copyFrom(transform.rotation);
        this.scale.copyFrom(transform.scale);
    };
    Transform.prototype.getTransformationMatrix = function () {
        var translation = Matrix4x4.translation(this.position);
        var rotation = Matrix4x4.rotationXYZ(this.rotation.x, this.rotation.y, this.rotation.z);
        var scale = Matrix4x4.scale(this.scale);
        // order matters here
        // T * R * S
        return Matrix4x4.multiply(Matrix4x4.multiply(translation, rotation), scale);
    };
    Transform.prototype.setFromJson = function (json) {
        if (json.position) {
            this.position.setFromJson(json.position);
        }
        if (json.rotation) {
            this.rotation.setFromJson(json.rotation);
        }
        if (json.scale) {
            this.scale.setFromJson(json.scale);
        }
    };
    return Transform;
}());


;// CONCATENATED MODULE: ./src/core/world/simObject.ts



var SimObject = /** @class */ (function () {
    function SimObject(id, name, scene) {
        this._children = [];
        this._isLoaded = false;
        this._components = [];
        this._behaviors = [];
        this._isVisible = true;
        this._localMatrix = Matrix4x4.identity();
        this._worldMatrix = Matrix4x4.identity();
        this.transform = new Transform();
        this._id = id;
        this.name = name;
        this._scene = scene;
    }
    Object.defineProperty(SimObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimObject.prototype, "parent", {
        get: function () {
            return this._parent || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimObject.prototype, "worldMatrix", {
        get: function () {
            return this._worldMatrix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimObject.prototype, "isLoaded", {
        get: function () {
            return this._isLoaded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimObject.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (value) {
            this._isVisible = value;
        },
        enumerable: false,
        configurable: true
    });
    SimObject.prototype.addChild = function (child) {
        child._parent = this;
        this._children.push(child);
        if (this._scene) {
            child.onAdded(this._scene);
        }
    };
    SimObject.prototype.removeChild = function (child) {
        var index = this._children.indexOf(child);
        if (index !== -1) {
            child._parent = undefined;
            // double check this works
            this._children = this._children.filter(function (_, idx) { return index !== idx; });
        }
    };
    SimObject.prototype.getComponentByName = function (name) {
        for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.name === name) {
                return component;
            }
        }
        for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
            var child = _c[_b];
            var component = child.getComponentByName(name);
            if (component !== undefined) {
                return component;
            }
        }
        return undefined;
    };
    SimObject.prototype.getBehaviorByName = function (name) {
        for (var _i = 0, _a = this._behaviors; _i < _a.length; _i++) {
            var behavior = _a[_i];
            if (behavior.name === name) {
                return behavior;
            }
        }
        for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
            var child = _c[_b];
            var behavior = child.getBehaviorByName(name);
            if (behavior !== undefined) {
                return behavior;
            }
        }
        return undefined;
    };
    SimObject.prototype.getObjectByName = function (name) {
        if (this.name === name) {
            return this;
        }
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            var result = child.getObjectByName(name);
            if (result !== undefined) {
                return result;
            }
        }
        return undefined;
    };
    SimObject.prototype.addComponent = function (component) {
        this._components.push(component);
        component.setOwner(this);
    };
    SimObject.prototype.addBehavior = function (behavior) {
        this._behaviors.push(behavior);
        behavior.setOwner(this);
    };
    SimObject.prototype.load = function () {
        this._isLoaded = true;
        this._components.forEach(function (component) {
            component.load();
        });
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.load();
        }
    };
    SimObject.prototype.updateReady = function () {
        this._components.forEach(function (component) {
            component.updateReady();
        });
        this._behaviors.forEach(function (behavior) {
            behavior.updateReady();
        });
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.updateReady();
        }
    };
    SimObject.prototype.update = function (time) {
        this._localMatrix = this.transform.getTransformationMatrix();
        this.updateWorldMatrix(this._parent !== undefined ? this._parent.worldMatrix : undefined);
        this._components.forEach(function (component) {
            component.update(time);
        });
        this._behaviors.forEach(function (behavior) {
            behavior.update(time);
        });
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.update(time);
        }
    };
    SimObject.prototype.render = function (shader) {
        if (!this._isVisible) {
            return;
        }
        this._components.forEach(function (component) {
            component.render(shader);
        });
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.render(shader);
        }
    };
    SimObject.prototype.getWorldPosition = function () {
        return new Vector3(this._worldMatrix.data[12], this._worldMatrix.data[13], this._worldMatrix.data[14]);
    };
    SimObject.prototype.onAdded = function (scene) {
        this._scene = scene;
    };
    SimObject.prototype.updateWorldMatrix = function (parentWorldMatrix) {
        if (parentWorldMatrix !== undefined) {
            this._worldMatrix = Matrix4x4.multiply(parentWorldMatrix, this._localMatrix);
        }
        else {
            this._worldMatrix.copyFrom(this._localMatrix);
        }
    };
    return SimObject;
}());


;// CONCATENATED MODULE: ./src/core/world/scene.ts

var Scene = /** @class */ (function () {
    function Scene() {
        this._root = new SimObject(0, '__ROOT__', this);
    }
    Object.defineProperty(Scene.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "isLoaded", {
        get: function () {
            return this._root.isLoaded;
        },
        enumerable: false,
        configurable: true
    });
    Scene.prototype.addObject = function (object) {
        this._root.addChild(object);
    };
    Scene.prototype.getObjectByName = function (name) {
        return this._root.getObjectByName(name);
    };
    Scene.prototype.load = function () {
        this._root.load();
    };
    Scene.prototype.update = function (time) {
        this._root.update(time);
    };
    Scene.prototype.render = function (shader) {
        this._root.render(shader);
    };
    return Scene;
}());


;// CONCATENATED MODULE: ./src/core/world/zone.ts




var ZoneState;
(function (ZoneState) {
    ZoneState[ZoneState["UNINITIALIZED"] = 0] = "UNINITIALIZED";
    ZoneState[ZoneState["LOADING"] = 1] = "LOADING";
    ZoneState[ZoneState["UPDATING"] = 2] = "UPDATING";
})(ZoneState || (ZoneState = {}));
var Zone = /** @class */ (function () {
    function Zone(id, name, description) {
        this._state = ZoneState.UNINITIALIZED;
        this._globalId = -1;
        this._id = id;
        this._name = name;
        this._description = description;
        this._scene = new Scene();
    }
    Object.defineProperty(Zone.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zone.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: false,
        configurable: true
    });
    Zone.prototype.initialize = function (zoneData) {
        var _this = this;
        if (zoneData.objects === undefined) {
            throw new Error('Zone initialization error: objects not present');
        }
        zoneData.objects.forEach(function (o) {
            _this.loadSimObject(o, _this._scene.root);
        });
    };
    Zone.prototype.load = function () {
        this._state = ZoneState.LOADING;
        this._scene.load();
        this._scene.root.updateReady();
        this._state = ZoneState.UPDATING;
    };
    Zone.prototype.unload = function () { };
    Zone.prototype.update = function (time) {
        if ((this._state = ZoneState.UPDATING)) {
            this._scene.update(time);
        }
    };
    Zone.prototype.render = function (shader) {
        if ((this._state = ZoneState.UPDATING)) {
            this._scene.render(shader);
        }
    };
    Zone.prototype.onActivated = function () { };
    Zone.prototype.onDeactivated = function () { };
    Zone.prototype.loadSimObject = function (dataSection, parent) {
        var _this = this;
        var name = '';
        if (dataSection.name !== undefined) {
            name = String(dataSection.name);
        }
        this._globalId++;
        var simObject = new SimObject(this._globalId, name, this._scene);
        if (dataSection.transform !== undefined) {
            simObject.transform.setFromJson(dataSection.transform);
        }
        if (dataSection.components) {
            dataSection.components.forEach(function (c) {
                var component = ComponentManager.extractComponent(c);
                simObject.addComponent(component);
            });
        }
        if (dataSection.behaviors) {
            dataSection.behaviors.forEach(function (b) {
                var behavior = BehaviorManager.extractBehavior(b);
                simObject.addBehavior(behavior);
            });
        }
        if (dataSection.children && dataSection.children.length > 0) {
            dataSection.children.forEach(function (o) {
                _this.loadSimObject(o, simObject);
            });
        }
        if (parent !== undefined) {
            parent.addChild(simObject);
        }
    };
    return Zone;
}());


;// CONCATENATED MODULE: ./src/core/world/zoneManager.ts



var ZoneManager = /** @class */ (function () {
    function ZoneManager() {
    }
    ZoneManager.initialize = function () {
        ZoneManager._inst = new ZoneManager();
        // temporary
        ZoneManager._registeredZones[0] = 'src/assets/zones/testZone.json';
    };
    ZoneManager.changeZone = function (id) {
        if (ZoneManager._activeZone !== undefined) {
            ZoneManager._activeZone.onDeactivated();
            ZoneManager._activeZone.unload();
            ZoneManager._activeZone = undefined;
        }
        if (ZoneManager._registeredZones[id] !== undefined) {
            if (AssetManager.isAssetLoaded(ZoneManager._registeredZones[id])) {
                var asset = AssetManager.getAsset(ZoneManager._registeredZones[id]);
                if (asset) {
                    ZoneManager.loadZone(asset);
                }
            }
            else {
                Message.subscribe(MESSAGE_ASSET_LOADER_ASSET_LOADED + ZoneManager._registeredZones[id], ZoneManager._inst);
                AssetManager.loadAsset(ZoneManager._registeredZones[id]);
            }
        }
        else {
            throw new Error("Zone id: ".concat(id, " does not exist"));
        }
    };
    ZoneManager.update = function (time) {
        if (ZoneManager._activeZone !== undefined) {
            ZoneManager._activeZone.update(time);
        }
    };
    ZoneManager.render = function (shader) {
        if (ZoneManager._activeZone !== undefined) {
            ZoneManager._activeZone.render(shader);
        }
    };
    ZoneManager.prototype.onMessage = function (message) {
        if (message.code.indexOf(MESSAGE_ASSET_LOADER_ASSET_LOADED) !== -1) {
            var asset = message.context;
            ZoneManager.loadZone(asset);
        }
    };
    ZoneManager.loadZone = function (asset) {
        var zoneData = asset.data;
        var zoneId;
        if (typeof zoneData === 'object' && zoneData) {
            if (zoneData.id === undefined) {
                throw new Error('Zone file format exception: Zone id not present');
            }
            else {
                zoneId = Number(zoneData.id);
            }
        }
        var zoneName = '';
        if (typeof zoneData === 'object' && zoneData) {
            if (!zoneData.name) {
                throw new Error('Zone file format exception: Zone name not present');
            }
            else {
                zoneName = String(zoneData.name);
            }
        }
        var zoneDescription = '';
        if (typeof zoneData === 'object' && zoneData) {
            if (zoneData.description) {
                zoneDescription = String(zoneData.description);
            }
        }
        ZoneManager._activeZone = new Zone(zoneId, zoneName, zoneDescription);
        ZoneManager._activeZone.initialize(zoneData);
        ZoneManager._activeZone.onActivated();
        ZoneManager._activeZone.load();
        // Change state to splash
        Message.send('GAME_READY', this);
    };
    ZoneManager._globalZoneID = -1;
    //  private static _zones: { [id: number]: Zone } = {};
    ZoneManager._registeredZones = {};
    return ZoneManager;
}());


;// CONCATENATED MODULE: ./src/core/engine.ts


























/**
 * The main game engine class
 */
var Engine = /** @class */ (function () {
    /**
     * Creates a new engine
     * @param width The width of the game in pixels
     * @param height The height of the game in pixels
     */
    function Engine(width, height) {
        this._previousTime = 0;
        this._isFirstUpdate = true;
        this._gameWidth = width;
        this._gameHeight = height;
    }
    /**
     * Starts up this engine
     */
    Engine.prototype.start = function (elementName) {
        this._canvas = GLUtilities.initialize(elementName);
        if (this._gameWidth && this._gameHeight) {
            this._aspect = this._gameWidth / this._gameHeight;
        }
        AssetManager.initialize();
        InputManager.initialize(this._canvas);
        ZoneManager.initialize();
        gl.clearColor(99 / 255, 155 / 255, 255 / 255, 1);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        var imageContext = __webpack_require__(245);
        var jsonContext = __webpack_require__(924);
        var audioContext = __webpack_require__(605);
        var fontContext = __webpack_require__(500);
        this.loadAll(imageContext);
        this.loadAll(jsonContext);
        this.loadAll(audioContext);
        this.loadAll(fontContext);
        this._basicShader = new BasicShader();
        this._basicShader.use();
        // Load fonts
        BitmapFontManager.addFont('default', 'src/assets/fonts/nate-8-bit.txt');
        BitmapFontManager.load();
        // Load materials
        MaterialManager.registerMaterial(new Material('stoneWall', 'src/assets/textures/stone_wall.jpg', Color.white()));
        MaterialManager.registerMaterial(new Material('woodPlank', 'src/assets/textures/wood_plank.jpg', Color.white()));
        MaterialManager.registerMaterial(new Material('bg', 'src/assets/textures/background.png', Color.white()));
        MaterialManager.registerMaterial(new Material('pipeEnd', 'src/assets/textures/pipe_end.png', Color.white()));
        MaterialManager.registerMaterial(new Material('pipeBody', 'src/assets/textures/pipe_body.png', Color.white()));
        MaterialManager.registerMaterial(new Material('bird', 'src/assets/textures/bird_shrunk.png', Color.white()));
        MaterialManager.registerMaterial(new Material('grass', 'src/assets/textures/grass_bigger.png', Color.white()));
        MaterialManager.registerMaterial(new Material('playButton', 'src/assets/textures/play_button.png', Color.white()));
        MaterialManager.registerMaterial(new Material('restartButton', 'src/assets/textures/restart_button.png', Color.white()));
        MaterialManager.registerMaterial(new Material('scoreboard', 'src/assets/textures/scoreboard.png', Color.white()));
        MaterialManager.registerMaterial(new Material('title', 'src/assets/textures/title.png', Color.white()));
        MaterialManager.registerMaterial(new Material('tutorial', 'src/assets/textures/tutorial.png', Color.white()));
        AudioManager.loadSoundFile('birdJump', 'src/assets/sounds/bird_jump.wav', false);
        AudioManager.loadSoundFile('music', 'src/assets/sounds/alf_remix.mp3', true);
        AudioManager.loadSoundFile('ting', 'src/assets/sounds/ting.wav', false);
        AudioManager.loadSoundFile('flap', 'src/assets/sounds/bird_jump.wav', false);
        AudioManager.loadSoundFile('dead', 'src/assets/sounds/death.wav', false);
        // Find a better place for this?
        ComponentManager.registerBuilder(new SpriteComponentBuilder());
        ComponentManager.registerBuilder(new AnimatedSpriteComponentBuilder());
        ComponentManager.registerBuilder(new CollisionComponentBuilder());
        ComponentManager.registerBuilder(new BitmapTextComponentBuilder());
        BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
        BehaviorManager.registerBuilder(new PlayerBehaviorBuilder());
        BehaviorManager.registerBuilder(new KeyboardMovementBehaviorBuilder());
        BehaviorManager.registerBuilder(new ScrollBehaviorBuilder());
        BehaviorManager.registerBuilder(new MouseClickBehaviorBuilder());
        BehaviorManager.registerBuilder(new VisibilityOnMessageBehaviorBuilder());
        this.resize();
        // Begin the preload phase, which waits for various elements to be loaded before starting the game.
        this.preloading();
    };
    /**
     * Resizes the canvas to fit the window.
     */
    Engine.prototype.resize = function () {
        if (this._canvas !== undefined) {
            if (!this._gameWidth || !this._gameHeight) {
                this._canvas.width = window.innerWidth;
                this._canvas.height = window.innerHeight;
                this._projection = Matrix4x4.orthographic(0, this._canvas.width, this._canvas.height, 0, -100.0, 100.0);
                gl.viewport(0, 0, this._canvas.width, this._canvas.height);
            }
            else {
                var newWidth = window.innerWidth;
                var newHeight = window.innerHeight;
                var newWidthToHeight = newWidth / newHeight;
                var gameArea = document.getElementById('gameArea');
                if (gameArea) {
                    if (newWidthToHeight > this._aspect) {
                        newWidth = newHeight * this._aspect;
                        gameArea.style.height = newHeight + 'px';
                        gameArea.style.width = newWidth + 'px';
                    }
                    else {
                        newHeight = newWidth / this._aspect;
                        gameArea.style.width = newWidth + 'px';
                        gameArea.style.height = newHeight + 'px';
                    }
                    gameArea.style.marginTop = -newHeight / 2 + 'px';
                    gameArea.style.marginLeft = -newWidth / 2 + 'px';
                    this._canvas.width = newWidth;
                    this._canvas.height = newHeight;
                    this._projection = Matrix4x4.orthographic(0, this._gameWidth, this._gameHeight, 0, -100.0, 100.0);
                    gl.viewport(0, 0, newWidth, newHeight);
                    var resolutionScale = new Vector2(newWidth / this._gameWidth, newHeight / this._gameHeight);
                    InputManager.setResolutionScale(resolutionScale);
                }
            }
        }
    };
    Engine.prototype.preloading = function () {
        // Make sure to always update the message bus.
        MessageBus.update(0);
        if (!BitmapFontManager.updateReady) {
            requestAnimationFrame(this.preloading.bind(this));
            return;
        }
        // Load up zone.  TODO: Make this configurable.
        ZoneManager.changeZone(0);
        // Kick off the render loop
        this.loop();
    };
    Engine.prototype.loop = function () {
        if (this._isFirstUpdate) {
        }
        this.update();
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    };
    Engine.prototype.loadAll = function (requireContext) {
        requireContext.keys().forEach(requireContext);
    };
    Engine.prototype.update = function () {
        var delta = performance.now() - this._previousTime;
        MessageBus.update(delta);
        ZoneManager.update(delta);
        CollisionManager.update(delta);
        this._previousTime = performance.now();
    };
    Engine.prototype.render = function () {
        gl.clear(gl.COLOR_BUFFER_BIT);
        if (this._basicShader) {
            ZoneManager.render(this._basicShader);
        }
        // Set uniforms
        if (this._basicShader && this._projection) {
            var projectionPosition = this._basicShader.getUniformLocation('u_projection');
            gl.uniformMatrix4fv(projectionPosition, false, new Float32Array(this._projection.data));
        }
    };
    return Engine;
}());


;// CONCATENATED MODULE: ./src/index.ts


var engine;
// The main entry point to the application
window.onload = function () {
    engine = new Engine(512, 750);
    engine.start('viewport');
};
window.onresize = function () {
    engine.resize();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FB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SUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTNCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDN0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUU5QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3pELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFFM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxD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RyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFH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QUMsWUFBWSxDQUFDLENBQUM7U0FDdkM7UUFDRCxlQUFlO1FBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBTSxrQkFBa0IsR0FDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUV2RCxtQkFBbUIsQ0FDakIsa0JBQWtCLEVBQ2xCLEtBQUssRUFDTCxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUN4QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7QUNuVm9CO0FBQ2tCO0FBRXZDLElBQUksTUFBYyxDQUFDO0FBQ25CLDBDQUEwQztBQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDaEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy9mb250c3xzeW5jfEM6Ly4ocG5nJTdDdHh0KSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvc291bmRzfHN5bmN8QzovLih3YXYlN0NtcDMpJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy90ZXh0dXJlc3xzeW5jfEM6Ly4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvYXNzZXRzL3pvbmVzfHN5bmN8QzovLihqc29uKSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWVzc2FnZS9tZXNzYWdlU3Vic2NyaXB0aW9uTm9kZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZUJ1cy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXNzZXRzL2pzb25Bc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy90ZXh0QXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvYXNzZXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvZ2wudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbEJ1ZmZlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3ZlcnRleC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvYmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvYml0bWFwRm9udC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2JpdG1hcEZvbnRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvY29sb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy90ZXh0dXJlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvdGV4dHVyZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2JpdG1hcFRleHQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9iaXRtYXBUZXh0Q29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3Mvc2hhcGVzMkQvY2lyY2xlMkQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9zaGFwZXMyRC9yZWN0YW5nbGUyZC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbGxpc2lvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hdWRpby9hdWRpb01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvaW5wdXQvaW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2Jhc2VCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9rZXlib2FyZE1vdmVtZW50QmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvbW91c2VDbGlja0JlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC9tYXRoRXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9wbGF5ZXJCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9yb3RhdGlvbkJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL3Njcm9sbEJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL3Zpc2liaWxpdHlPbk1lc3NhZ2VCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlcnMvYmFzaWNTaGFkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL21hdHJpeDR4NC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2ltT2JqZWN0LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS93b3JsZC96b25lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzJiMzA7XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNnYW1lQXJlYSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmIzMDtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVBcmVhIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9uYXRlLTgtYml0LnR4dFwiOiAyMzgsXG5cdFwiLi9uYXRlLTgtYml0XzAucG5nXCI6IDM2NVxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDUwMDsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWxmX3JlbWl4Lm1wM1wiOiA4NTMsXG5cdFwiLi9iaXJkX2p1bXAud2F2XCI6IDYwNyxcblx0XCIuL2RlYXRoLndhdlwiOiA5NTksXG5cdFwiLi90aW5nLndhdlwiOiA1MzZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA2MDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tncm91bmQucG5nXCI6IDY5MSxcblx0XCIuL2JpcmQucG5nXCI6IDExLFxuXHRcIi4vYmlyZF9zaHJ1bmsucG5nXCI6IDgyNixcblx0XCIuL2JpcmRfc2hydW5rXzIucG5nXCI6IDg0OSxcblx0XCIuL2dyYXNzLnBuZ1wiOiA0NzMsXG5cdFwiLi9ncmFzc19iaWdnZXIucG5nXCI6IDgyNCxcblx0XCIuL3BpcGVfYm9keS5wbmdcIjogMjkyLFxuXHRcIi4vcGlwZV9lbmQucG5nXCI6IDQ0MCxcblx0XCIuL3BsYXlfYnV0dG9uLnBuZ1wiOiA1NDQsXG5cdFwiLi9yZXN0YXJ0X2J1dHRvbi5wbmdcIjogNzc2LFxuXHRcIi4vc2NvcmVib2FyZC5wbmdcIjogNzExLFxuXHRcIi4vc3RvbmVfd2FsbC5qcGdcIjogMTkwLFxuXHRcIi4vc3RvbmVfd2FsbF8xMjh4MTI4LmpwZ1wiOiA3MzgsXG5cdFwiLi90aXRsZS5wbmdcIjogOTYyLFxuXHRcIi4vdHV0b3JpYWwucG5nXCI6IDkwOCxcblx0XCIuL3dvb2RfcGxhbmsuanBnXCI6IDg0Nyxcblx0XCIuL3dvb2RfcGxhbmtfMTI4eDEyOC5qcGdcIjogMzA2XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjQ1OyIsInZhciBtYXAgPSB7XG5cdFwiLi90ZXN0Wm9uZS5qc29uXCI6IDk5M1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDkyNDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUge1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gIHB1YmxpYyBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtZXNzYWdlOiBNZXNzYWdlLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlIH0gZnJvbSAnLi9tZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VQcmlvcml0eSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ1cyB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3N1YnNjcmlwdGlvbnM6IHsgW2NvZGU6IHN0cmluZ106IElNZXNzYWdlSGFuZGxlcltdIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZTogbnVtYmVyID0gMTA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX25vcm1hbE1lc3NhZ2VRdWV1ZTogTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGRTdWJzY3JpcHRpb24oY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIGlmICghTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSkge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKSAhPT0gLTEpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdBdHRlbXB0aW5nIHRvIGFkZCBhIGR1cGxpY2F0ZSBoYW5kbGVyIHRvIGNvZGUgJyArXHJcbiAgICAgICAgICBjb2RlICtcclxuICAgICAgICAgICcuIFN1YnNjcmlwdGlvbiBub3QgYWRkZWQuJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW1vdmVTdWJzY3JpcHRpb24oXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXJcclxuICApOiB2b2lkIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgaXMgY29ycmVjdFxyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnQ2Fubm90IHVuc3Vic2NyaWJlIGhhbmRsZXIgZnJvbSBjb2RlOiAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJyBiZWNhdXNlIHRoYXQgY29kZSBkb2VzIG5vdCBzdWJzY3JpYmVkIHRvLidcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBub2RlSW5kZXggPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmluZGV4T2YoaGFuZGxlcik7XHJcbiAgICBpZiAobm9kZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5maWx0ZXIoXHJcbiAgICAgICAgKF8sIGlkeCkgPT4gaWR4ICE9PSBub2RlSW5kZXhcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcG9zdChtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTWVzc2FnZSBwb3N0ZWQ6JywgbWVzc2FnZSk7XHJcbiAgICBjb25zdCBoYW5kbGVycyA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbbWVzc2FnZS5jb2RlXTtcclxuICAgIGlmICghaGFuZGxlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXJzLmZvckVhY2goKGgpID0+IHtcclxuICAgICAgaWYgKG1lc3NhZ2UucHJpb3JpdHkgPT09IE1lc3NhZ2VQcmlvcml0eS5ISUdIKSB7XHJcbiAgICAgICAgaC5vbk1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnB1c2goXHJcbiAgICAgICAgICBuZXcgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUobWVzc2FnZSwgaClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE5vdCB1c2luZyB0aW1lP1xyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VMaW1pdCA9IE1hdGgubWluKFxyXG4gICAgICBNZXNzYWdlQnVzLl9ub3JtYWxRdWV1ZU1lc3NhZ2VQZXJVcGRhdGUsXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5sZW5ndGhcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlTGltaXQ7ICsraSkge1xyXG4gICAgICBsZXQgbm9kZSA9IE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5wb3AoKTtcclxuICAgICAgbm9kZT8uaGFuZGxlci5vbk1lc3NhZ2Uobm9kZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlQnVzJztcclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VQcmlvcml0eSB7XHJcbiAgTk9STUFMLFxyXG4gIEhJR0gsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICBwdWJsaWMgY29kZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb250ZXh0OiB1bmtub3duO1xyXG4gIHB1YmxpYyBzZW5kZXI6IHVua25vd247XHJcbiAgcHVibGljIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIHNlbmRlcjogdW5rbm93bixcclxuICAgIGNvbnRleHQ6IHVua25vd24sXHJcbiAgICBwcmlvcml0eTogTWVzc2FnZVByaW9yaXR5ID0gTWVzc2FnZVByaW9yaXR5Lk5PUk1BTFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMuc2VuZGVyID0gc2VuZGVyO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VuZChjb2RlOiBzdHJpbmcsIHNlbmRlcjogdW5rbm93biwgY29udGV4dD86IHVua25vd24pOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucG9zdChuZXcgTWVzc2FnZShjb2RlLCBzZW5kZXIsIGNvbnRleHQsIE1lc3NhZ2VQcmlvcml0eS5OT1JNQUwpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VuZFByaW9yaXR5KFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dD86IHVua25vd25cclxuICApOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucG9zdChuZXcgTWVzc2FnZShjb2RlLCBzZW5kZXIsIGNvbnRleHQsIE1lc3NhZ2VQcmlvcml0eS5ISUdIKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZShjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5hZGRTdWJzY3JpcHRpb24oY29kZSwgaGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnJlbW92ZVN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sbGlzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2xsaXNpb25Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZS9tZXNzYWdlL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbkRhdGEge1xyXG4gIHB1YmxpYyB0aW1lOiBudW1iZXI7XHJcbiAgcHVibGljIGE6IENvbGxpc2lvbkNvbXBvbmVudCB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgYjogQ29sbGlzaW9uQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICB0aW1lOiBudW1iZXIsXHJcbiAgICBhOiBDb2xsaXNpb25Db21wb25lbnQsXHJcbiAgICBiOiBDb2xsaXNpb25Db21wb25lbnRcclxuICApIHtcclxuICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5iID0gYjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25NYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfdG90YWxUaW1lOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgc3RhdGljIF9jb21wb25lbnRzOiBDb2xsaXNpb25Db21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfY29sbGlzaW9uRGF0YTogQ29sbGlzaW9uRGF0YVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQ29sbGlzaW9uQ29tcG9uZW50KGNvbXBvbmVudDogQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckNvbGxpc2lvbkNvbXBvbmVudChjb21wb25lbnQ6IENvbGxpc2lvbkNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgaWR4ID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCk7XHJcbiAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5maWx0ZXIoXHJcbiAgICAgICAgKF8sIGkpID0+IGkgIT09IGlkeFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lICs9IHRpbWU7XHJcblxyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIGxldCBjb21wID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50c1tjXTtcclxuICAgICAgZm9yIChsZXQgbyA9IGMgKyAxOyBvIDwgQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgIGxldCBvdGhlciA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHNbb107XHJcbiAgICAgICAgLy8gSWYgYm90aCBzaGFwZXMgYXJlIHN0YXRpYywgc3RvcCBkZXRlY3Rpb24uXHJcbiAgICAgICAgaWYgKGNvbXAgJiYgb3RoZXIgJiYgY29tcC5pc1N0YXRpYyAmJiBvdGhlci5pc1N0YXRpYykge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcC5zaGFwZS5pbnRlcnNlY3RzKG90aGVyLnNoYXBlKSkge1xyXG4gICAgICAgICAgLy8gSGF2ZSBhIGNvbGxpc2lvblxyXG4gICAgICAgICAgbGV0IGV4aXN0czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCBDb2xsaXNpb25NYW5hZ2VyLl9jb2xsaXNpb25EYXRhLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YVtkXTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIChkYXRhLmEgPT09IGNvbXAgJiYgZGF0YS5iID09PSBvdGhlcikgfHxcclxuICAgICAgICAgICAgICAoZGF0YS5iID09PSBjb21wICYmIGRhdGEuYSA9PT0gb3RoZXIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgZXhpc3RpbmcgZGF0YS4gVXBkYXRlIGl0LlxyXG4gICAgICAgICAgICAgIC8vIG9uQ29sbGlzaW9uVXBkYXRlXHJcbiAgICAgICAgICAgICAgY29tcC5vbkNvbGxpc2lvblVwZGF0ZShvdGhlcik7XHJcbiAgICAgICAgICAgICAgb3RoZXIub25Db2xsaXNpb25VcGRhdGUoY29tcCk7XHJcbiAgICAgICAgICAgICAgZGF0YS50aW1lID0gQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lO1xyXG4gICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIWV4aXN0cykge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBjb2xsaXNpb25cclxuICAgICAgICAgICAgLy8gb25Db2xsaXNpb25FbnRyeVxyXG4gICAgICAgICAgICBjb21wLm9uQ29sbGlzaW9uRW50cnkob3RoZXIpO1xyXG4gICAgICAgICAgICBvdGhlci5vbkNvbGxpc2lvbkVudHJ5KGNvbXApO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsID0gbmV3IENvbGxpc2lvbkRhdGEoXHJcbiAgICAgICAgICAgICAgQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lLFxyXG4gICAgICAgICAgICAgIGNvbXAsXHJcbiAgICAgICAgICAgICAgb3RoZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgTWVzc2FnZS5zZW5kUHJpb3JpdHkoJ0NPTExJU0lPTl9FTlRSWScsIHVuZGVmaW5lZCwgY29sbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpc2lvbkRhdGEucHVzaChjb2xsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgc3RhbGUgY29sbGlzaW9uIGRhdGEuXHJcbiAgICBjb25zdCByZW1vdmVEYXRhOiBDb2xsaXNpb25EYXRhW10gPSBbXTtcclxuICAgIGZvciAobGV0IGQgPSAwOyBkIDwgQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5sZW5ndGg7IGQrKykge1xyXG4gICAgICBjb25zdCBkYXRhID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YVtkXTtcclxuICAgICAgaWYgKGRhdGEudGltZSAhPT0gQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lKSB7XHJcbiAgICAgICAgLy8gT2xkIGNvbGxpc2lvbiBkYXRhXHJcbiAgICAgICAgLy8gb25Db2xsaXNpb25FeGl0XHJcbiAgICAgICAgcmVtb3ZlRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBkYXRhLmE/Lm9uQ29sbGlzaW9uRXhpdChkYXRhLmIpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBkYXRhLmI/Lm9uQ29sbGlzaW9uRXhpdChkYXRhLmEpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBNZXNzYWdlLnNlbmRQcmlvcml0eSgnQ09MTElTSU9OX0VYSVQnLCB1bmRlZmluZWQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHJlbW92ZURhdGEubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEuaW5kZXhPZihyZW1vdmVEYXRhWzBdKTtcclxuXHJcbiAgICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIHJlbW92ZURhdGEuc2hpZnQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS53aWR0aDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsncG5nJywgJ2dpZicsICdqcGcnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkQXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gdGhpcy5vbkltYWdlTG9hZGVkLmJpbmQodGhpcywgYXNzZXROYW1lLCBpbWFnZSk7XHJcbiAgICBpbWFnZS5zcmMgPSBhc3NldE5hbWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSW1hZ2VMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnb25JbWFnZUxvYWRlZDogYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBuZXcgSW1hZ2VBc3NldChhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBBc3NldE1hbmFnZXIub25Bc3NldExvYWRlZChhc3NldCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsnanNvbiddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGFzc2V0TmFtZSk7XHJcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdsb2FkJyxcclxuICAgICAgdGhpcy5vbkpzb25Mb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIHJlcXVlc3QpXHJcbiAgICApO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSnNvbkxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCByZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgY29uc3QgYXNzZXQgPSBuZXcgSnNvbkFzc2V0KGFzc2V0TmFtZSwganNvbik7XHJcbiAgICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0QXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IHVua25vd247XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsndHh0J107XHJcbiAgfVxyXG5cclxuICBsb2FkQXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgYXNzZXROYW1lKTtcclxuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2xvYWQnLFxyXG4gICAgICB0aGlzLm9uVGV4dExvYWRlZC5iaW5kKHRoaXMsIGFzc2V0TmFtZSwgcmVxdWVzdClcclxuICAgICk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZXh0TG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nLCByZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5kZWJ1Zygnb25UZXh0TG9hZGVkOiBhc3NldG5hbWUvcmVxdWVzdCcsIGFzc2V0TmFtZSwgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gcmVxdWVzdC5ET05FKSB7XHJcbiAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IFRleHRBc3NldChhc3NldE5hbWUsIHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgQXNzZXRNYW5hZ2VyLm9uQXNzZXRMb2FkZWQoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IEltYWdlQXNzZXRMb2FkZXIgfSBmcm9tICcuL2ltYWdlQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBKc29uQXNzZXRMb2FkZXIgfSBmcm9tICcuL2pzb25Bc3NldExvYWRlcic7XHJcbmltcG9ydCB7IFRleHRBc3NldExvYWRlciB9IGZyb20gJy4vdGV4dEFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgPVxyXG4gICdNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQ6Oic7XHJcbmV4cG9ydCBjbGFzcyBBc3NldE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZXJzOiBJQXNzZXRMb2FkZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZWRBc3NldHM6IHsgW25hbWU6IHN0cmluZ106IElBc3NldCB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChuZXcgSW1hZ2VBc3NldExvYWRlcigpKTtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBKc29uQXNzZXRMb2FkZXIoKSk7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChuZXcgVGV4dEFzc2V0TG9hZGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckxvYWRlcihsb2FkZXI6IElBc3NldExvYWRlcik6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobG9hZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb25Bc3NldExvYWRlZChhc3NldDogSUFzc2V0KTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldC5uYW1lXSA9IGFzc2V0O1xyXG4gICAgTWVzc2FnZS5zZW5kKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIGFzc2V0Lm5hbWUsIHRoaXMsIGFzc2V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldE5hbWUuc3BsaXQoJy4nKS5wb3AoKT8udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBmb3IgKGxldCBsIG9mIEFzc2V0TWFuYWdlci5fbG9hZGVycykge1xyXG4gICAgICBpZiAobC5zdXBwb3J0ZWRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uIHx8ICcnKSAhPT0gLTEpIHtcclxuICAgICAgICBsLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgYFVuYWJsZSB0byBsb2FkIGFzc2V0IHdpdGggZXh0ZW5zaW9uICR7ZXh0ZW5zaW9ufSBiZWNhdXNlIHRoZXJlIGlzIG5vIGxvYWRlciBhc3NvY2lhdGVkIHdpdGggaXQuYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNBc3NldExvYWRlZChhc3NldE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgLy8gTm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xyXG4gICAgcmV0dXJuICEhQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXROYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiBJQXNzZXQgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKEFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV0pIHtcclxuICAgICAgcmV0dXJuIEFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBBc3NldE1hbmFnZXIubG9hZEFzc2V0KGFzc2V0TmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi92ZWN0b3IyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IzIHtcclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3o6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHo6IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgICB0aGlzLl96ID0gejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl95ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl96O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB6KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygxLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQoeD86IG51bWJlciwgeT86IG51bWJlciwgej86IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl94ID0geDtcclxuICAgIH1cclxuICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICB9XHJcbiAgICBpZiAoeiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ogPSB6O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSB2ZWN0b3IgaXMgZXF1YWwgdG8gdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnRcclxuICAgKiBAcGFyYW0gdiBWZWN0b3IgdG8gY2hlY2sgYWdhaW5zdFxyXG4gICAqIEByZXR1cm5zIEJvb2xlYW4gYmFhc2VkIG9uIGVxdWl2YWxlbmN5XHJcbiAgICovXHJcbiAgcHVibGljIGVxdWFscyh2OiBWZWN0b3IzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5feCA9PT0gdi5feCAmJiB0aGlzLl95ID09PSB2Ll95ICYmIHRoaXMuX3ogPT09IHYuX3o7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3pdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weUZyb20odmVjdG9yOiBWZWN0b3IzKTogdm9pZCB7XHJcbiAgICB0aGlzLl94ID0gdmVjdG9yLl94O1xyXG4gICAgdGhpcy5feSA9IHZlY3Rvci5feTtcclxuICAgIHRoaXMuX3ogPSB2ZWN0b3IuX3o7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRpc3RhbmNlKGE6IFZlY3RvcjMsIGI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZGlmZiA9IGEuc3VidHJhY3QoYik7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGRpZmYueCAqIGRpZmYueCArIGRpZmYueSAqIGRpZmYueSArIGRpZmYueiAqIGRpZmYueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi54ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feCA9IE51bWJlcihqc29uLngpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3kgPSBOdW1iZXIoanNvbi55KTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl96ID0gTnVtYmVyKGpzb24ueik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggKz0gdi5feDtcclxuICAgIHRoaXMuX3kgKz0gdi5feTtcclxuICAgIHRoaXMuX3ogKz0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJ0cmFjdCh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94IC09IHYuX3g7XHJcbiAgICB0aGlzLl95IC09IHYuX3k7XHJcbiAgICB0aGlzLl96IC09IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHkodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCAqPSB2Ll94O1xyXG4gICAgdGhpcy5feSAqPSB2Ll95O1xyXG4gICAgdGhpcy5feiAqPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpdmlkZSh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94IC89IHYuX3g7XHJcbiAgICB0aGlzLl95IC89IHYuX3k7XHJcbiAgICB0aGlzLl96IC89IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy5feCwgdGhpcy5feSwgdGhpcy5feik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9WZWN0b3IyKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX3gsIHRoaXMuX3kpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyIHtcclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl95ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCB6ZXJvKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvbmUoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRpc3RhbmNlKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZGlmZiA9IGEuY2xvbmUoKS5zdWJ0cmFjdChiKTtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoZGlmZi54ICogZGlmZi54ICsgZGlmZi55ICogZGlmZi55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2OiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICB0aGlzLl94ID0gdi5feDtcclxuICAgIHRoaXMuX3kgPSB2Ll95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl94LCB0aGlzLl95XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0FycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvVmVjdG9yMygpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLl94LCB0aGlzLl95LCAwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQoeD86IG51bWJlciwgeT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl94ID0geDtcclxuICAgIH1cclxuICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi54ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feCA9IE51bWJlcihqc29uLngpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3kgPSBOdW1iZXIoanNvbi55KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgdGhpcy5feSArPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YnRyYWN0KHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggLT0gdi5feDtcclxuICAgIHRoaXMuX3kgLT0gdi5feTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseSh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICB0aGlzLl95ICo9IHYuX3k7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGl2aWRlKHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggLz0gdi5feDtcclxuICAgIHRoaXMuX3kgLz0gdi5feTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICB0aGlzLl94ICo9IHNjYWxlO1xyXG4gICAgdGhpcy5feSAqPSBzY2FsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLl94LCB0aGlzLl95KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL21hdGVyaWFsJztcclxuXHJcbmNsYXNzIE1hdGVyaWFsUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIG1hdGVyaWFsOiBNYXRlcmlhbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWF0ZXJpYWw6IE1hdGVyaWFsKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9tYXRlcmlhbHM6IHsgW25hbWU6IHN0cmluZ106IE1hdGVyaWFsUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyTWF0ZXJpYWwobWF0ZXJpYWw6IE1hdGVyaWFsKTogdm9pZCB7XHJcbiAgICBpZiAoTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9IG5ldyBNYXRlcmlhbFJlZmVyZW5jZU5vZGUoXHJcbiAgICAgICAgbWF0ZXJpYWxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TWF0ZXJpYWwobWF0ZXJpYWxOYW1lOiBzdHJpbmcpOiBNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICAgIHJldHVybiBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlTWF0ZXJpYWwobWF0ZXJpYWxOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1hdGVyaWFsUmVmZXJlbmNlID0gTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXTtcclxuICAgIGlmICghbWF0ZXJpYWxSZWZlcmVuY2UpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgcmVsZWFzZSBhIG1hdGVyaWFsIHdoaWNoIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50LS07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50IDwgMSAmJlxyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0gIT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsPy5kZXN0cm95KCk7XHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5tYXRlcmlhbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4vKipcclxuICogUmVzcG9uc2libGUgZm9yIHNldHRpbmcgdXAgYSBXZWJHTCByZW5kZXJpbmcgY29udGV4dFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVXRpbGl0aWVzIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBXZWJHTCwgcG90ZW50aWFsbHkgdXNpbmcgdGhlIGNhbnZhcyB3aXRoIGFuIGFzc2lnbmVkIGlkIG1hdGNoaW5nXHJcbiAgICogdGhlIHByb3ZpZGVkIGlmIGl0IGlzIGRlZmluZWQuXHJcbiAgICogQHBhcmFtIGVsZW1lbnRJZCBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cclxuICAgKiBAcmV0dXJucyByZWZlcmVuY2UgdG8gdGhlIEhUTUxDYW52YXNFbGVtZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKGVsZW1lbnRJZD86IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIGlmIChlbGVtZW50SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBpZiAoY2FudmFzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGEgY2FudmFzIGVsZW1lbnQgbmFtZWQgJyArIGVsZW1lbnRJZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgaWYgKGdsID09PSB1bmRlZmluZWQgfHwgZ2wgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi9nbCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhIEdMQnVmZmVyIGF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUluZm8ge1xyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgbG9jYXRpb246IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSAobnVtYmVyIG9mIGVsZW1lbnRzKSBpbiB0aGlzIGF0dHJpYnV0ZSAoaS5lLiBWZWN0b3IzID0gMylcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIG9mZnNldDogbnVtYmVyID0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBidWZmZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTEJ1ZmZlciB7XHJcbiAgcHJpdmF0ZSBfaGFzQXR0cmlidXRlTG9jYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9lbGVtZW50U2l6ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3N0cmlkZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9idWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICBwcml2YXRlIF90YXJnZXRCdWZmZXJUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGF0YVR5cGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9tb2RlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdHlwZVNpemU6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiBBdHRyaWJ1dGVJbmZvW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBHTCBCdWZmZXIuXHJcbiAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSBkYXRhIHR5cGUgb2YgdGhlIGJ1ZmZlci4gRGVmYXVsdDogZ2wuRkxPQVRcclxuICAgKiBAcGFyYW0gdGFyZ2V0QnVmZmVyVHlwZSBUaGUgYnVmZmVyIHRhcmdldCB0eXBlLiBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIuIERlZmF1bHQ6IGdsLkFSUkFZX0JVRkZFUlxyXG4gICAqIEBwYXJhbSBtb2RlIFRoZSBkcmF3aW5nIG1vZGUgb2YgdGhlIGJ1ZmZlci4gKGkuZS4gZ2wuVFJJQU5HTEVTIG9yIGdsLkxJTkVTKS4gRGVmYXVsdDogZ2wuVFJJQU5HTEVTXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgZGF0YVR5cGU6IG51bWJlciA9IGdsLkZMT0FULFxyXG4gICAgdGFyZ2V0QnVmZmVyVHlwZTogbnVtYmVyID0gZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgbW9kZTogbnVtYmVyID0gZ2wuVFJJQU5HTEVTXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50U2l6ZSA9IDA7XHJcbiAgICB0aGlzLl9kYXRhVHlwZSA9IGRhdGFUeXBlO1xyXG4gICAgdGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9IHRhcmdldEJ1ZmZlclR5cGU7XHJcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgYnl0ZSBzaXplXHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgZ2wuRkxPQVQ6XHJcbiAgICAgIC8vIHBvc2l0aXZlIG9yIG5lZ2F0aXZlXHJcbiAgICAgIGNhc2UgZ2wuSU5UOlxyXG4gICAgICAvLyBvbmx5IHBvc2l0aXZlIGJ1dCB0d2ljZSB0aGUgc2l6ZSBvZiBpbnRcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9JTlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSA0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5CWVRFOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAxO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGRhdGEgdHlwZSAke2RhdGFUeXBlLnRvU3RyaW5nKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2l6ZSBvZiBlbGVtZW50cyAqIG51bWJlciBvZiBieXRlcyBpbiBlYWNoIGVsZW1lbnRcclxuICAgIHRoaXMuX2J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpIGFzIFdlYkdMQnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveXMgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kcyB0aGlzIGJ1ZmZlci5cclxuICAgKiBAcGFyYW0gbm9ybWFsaXplZCBJbmRpY2F0ZXMgaWYgdGhpcyBkYXRhIHNob3VsZCBiZSBub3JtYWxpemVkLiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBiaW5kKG5vcm1hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbikge1xyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgIGl0LmxvY2F0aW9uLFxyXG4gICAgICAgICAgaXQuc2l6ZSxcclxuICAgICAgICAgIHRoaXMuX2RhdGFUeXBlLFxyXG4gICAgICAgICAgbm9ybWFsaXplZCxcclxuICAgICAgICAgIHRoaXMuX3N0cmlkZSxcclxuICAgICAgICAgIGl0Lm9mZnNldCAqIHRoaXMuX3R5cGVTaXplXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpdC5sb2NhdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgcHJvdmlkZWQgaW5mb3JtYXRpb24gdG8gdGhlIGJ1ZmZlclxyXG4gICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiB0byBiZSBhZGRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRBdHRyaWJ1dGVMb2NhdGlvbihpbmZvOiBBdHRyaWJ1dGVJbmZvKTogdm9pZCB7XHJcbiAgICB0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbiA9IHRydWU7XHJcbiAgICBpbmZvLm9mZnNldCA9IHRoaXMuX2VsZW1lbnRTaXplO1xyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKGluZm8pO1xyXG4gICAgdGhpcy5fZWxlbWVudFNpemUgKz0gaW5mby5zaXplO1xyXG4gICAgdGhpcy5fc3RyaWRlID0gdGhpcy5fZWxlbWVudFNpemUgKiB0aGlzLl90eXBlU2l6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGRhdGEgaW4gdGhlIGJ1ZmZlciB3aXRoIHByb3ZpZGVkIGRhdGEuXHJcbiAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gYmUgbG9hZGVkIGluIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNldERhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICB0aGlzLnB1c2hCYWNrRGF0YShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBvdXQgYWxsIGRhdGEgaW4gdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICBwdWJsaWMgY2xlYXJEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGF0YS5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBkYXRhIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwdXNoQmFja0RhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwbG9hZHMgdGhpcyBkYXRhIHRvIHRoZSBHUFVcclxuICAgKi9cclxuICBwdWJsaWMgdXBsb2FkKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGxldCBidWZmZXJEYXRhOiBBcnJheUJ1ZmZlcjtcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYERhdGEgdHlwZSBlcnJvciBpbiBwdXNoQmFja0RhdGEoKSBmb3IgZGF0YXR5cGUgJHt0aGlzLl9kYXRhVHlwZS50b1N0cmluZygpfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdsLmJ1ZmZlckRhdGEodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgYnVmZmVyRGF0YSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9PT0gZ2wuQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdBcnJheXModGhpcy5fbW9kZSwgMCwgdGhpcy5fZGF0YS5sZW5ndGggLyB0aGlzLl9lbGVtZW50U2l6ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0aGlzLl9tb2RlLCB0aGlzLl9kYXRhLmxlbmd0aCwgdGhpcy5fZGF0YVR5cGUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgZGF0YSBmb3IgYSBzaW5nbGUgdmVydGV4XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVydGV4IHtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHRleENvb3JkczogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgeDogbnVtYmVyID0gMCxcclxuICAgIHk6IG51bWJlciA9IDAsXHJcbiAgICB6OiBudW1iZXIgPSAwLFxyXG4gICAgdHU6IG51bWJlciA9IDAsXHJcbiAgICB0djogbnVtYmVyID0gMFxyXG4gICkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnogPSB6O1xyXG5cclxuICAgIHRoaXMudGV4Q29vcmRzLnggPSB0dTtcclxuICAgIHRoaXMudGV4Q29vcmRzLnkgPSB0djtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIGxldCBhcnJheTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdCh0aGlzLnBvc2l0aW9uLnRvQXJyYXkoKSk7XHJcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdCh0aGlzLnRleENvb3Jkcy50b0FycmF5KCkpO1xyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0FycmF5KCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4uL2dsL2dsJztcclxuaW1wb3J0IHsgQXR0cmlidXRlSW5mbywgR0xCdWZmZXIgfSBmcm9tICcuLi9nbC9nbEJ1ZmZlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4uL21hdGgvbWF0cml4NHg0JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNYW5hZ2VyIH0gZnJvbSAnLi9tYXRlcmlhbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gJy4vbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBWZXJ0ZXggfSBmcm9tICcuL3ZlcnRleCc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIF93aWR0aDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9idWZmZXI6IEdMQnVmZmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByb3RlY3RlZCBfbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG4gIHByb3RlY3RlZCBfbWF0ZXJpYWxOYW1lOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNlczogVmVydGV4W10gPSBbXTtcclxuICBwcm90ZWN0ZWQgX29yaWdpbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgbWF0ZXJpYWxOYW1lOiBzdHJpbmcsXHJcbiAgICB3aWR0aDogbnVtYmVyID0gMTAwLFxyXG4gICAgaGVpZ2h0OiBudW1iZXIgPSAxMDBcclxuICApIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuX21hdGVyaWFsTmFtZSA9IG1hdGVyaWFsTmFtZTtcclxuICAgIHRoaXMuX21hdGVyaWFsID0gTWF0ZXJpYWxNYW5hZ2VyLmdldE1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvcmlnaW4oKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBvcmlnaW4odmFsdWU6IFZlY3RvcjMpIHtcclxuICAgIHRoaXMuX29yaWdpbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVZlcnRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlbGVhc2VNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBHTEJ1ZmZlcigpO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICAvLyBSZW1vdmVkIHJlZmVyZW5jZSB0byBzaGFkZXIsIGJhZCBwcmFjdGljZSB0byBwYXNzIHNoYWRlciBpbmZvIHRvIHNwcml0ZSBvbiBsb2FkXHJcbiAgICAvLyBTdGlsbCBub3QgaWRlYWwgKHJlZmVyZW5jaW5nIGFfbG9jYXRpb24gaW4gdmVydGV4U2hhZGVyU291cmNlIGJ5IGhhcmRjb2RpbmcgMClcclxuICAgIC8vIEVhY2ggdmFyaWFibGUgaW4gc2hhZGVyU291cmNlIGlzIHJlZmVyZW5jZWQgYnkgaW5kZXggaW4gb3JkZXIgb2YgZGVjbGFyYXRpb24gKGUuZy4gYmVjYXVzZSBhX2xvY2F0aW9uIGlzIHRoZSBmaXJzdCB2YXJpYWJsZSBpdCBpcyBpbmRleCAwKVxyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUubG9jYXRpb24gPSAwO1xyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUuc2l6ZSA9IDM7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24ocG9zaXRpb25BdHRyaWJ1dGUpO1xyXG5cclxuICAgIGxldCB0ZXhDb29yZEF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5sb2NhdGlvbiA9IDE7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5zaXplID0gMjtcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbih0ZXhDb29yZEF0dHJpYnV0ZSk7XHJcblxyXG4gICAgdGhpcy5jYWxjdWxhdGVWZXJ0aWNlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBkcmF3KHNoYWRlcjogU2hhZGVyLCBtb2RlbDogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBsZXQgbW9kZWxMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfbW9kZWwnKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxMb2NhdGlvbiwgZmFsc2UsIG1vZGVsLnRvRmxvYXQzMkFycmF5KCkpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3RpbnQnKTtcclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICBnbC51bmlmb3JtNGZ2KGNvbG9yTG9jYXRpb24sIHRoaXMuX21hdGVyaWFsLnRpbnQudG9GbG9hdDMyQXJyYXkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS5hY3RpdmF0ZUFuZEJpbmQoMCk7XHJcbiAgICAgIGNvbnN0IGRpZmZ1c2VMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfZGlmZnVzZScpO1xyXG4gICAgICAvLyBwYXNzIGEgc2luZ2xlIGludGVnZXJcclxuICAgICAgZ2wudW5pZm9ybTFpKGRpZmZ1c2VMb2NhdGlvbiwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuYmluZCgpO1xyXG4gICAgICB0aGlzLl9idWZmZXIuZHJhdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhc3NpZ25lZCBidWZmZXIgZm9yIHNwcml0ZSAnICsgdGhpcy5fbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVmVydGljZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtaW5YID0gLSh0aGlzLl93aWR0aCAqIHRoaXMuX29yaWdpbi54KTtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLl93aWR0aCAqICgxLjAgLSB0aGlzLl9vcmlnaW4ueCk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IC0odGhpcy5fd2lkdGggKiB0aGlzLl9vcmlnaW4ueSk7XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5faGVpZ2h0ICogKDEuMCAtIHRoaXMuX29yaWdpbi55KTtcclxuXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHRoaXMuX3ZlcnRpY2VzID0gW1xyXG4gICAgICAvLyB4LCB5LCB6LCBVOiB0ZXh0dXJlIHgsIFY6IHRleHR1cmUgeVxyXG4gICAgICAvLyB0cmlhbmdsZSAxXHJcbiAgICAgIC8vIHBvaW50IDFcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtaW5ZLCAwLCAwLCAwLCksXHJcbiAgICAgIC8vIHBvaW50IDJcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtYXhZLCAwLCAwLCAxLjAsKSxcclxuICAgICAgLy8gcG9pbnQgM1xyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1heFksIDAsIDEuMCwgMS4wLCksXHJcbiAgICAgIC8vIHRyaWFuZ2xlIDJcclxuICAgICAgLy8gcG9pbnQgNFxyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1heFksIDAsIDEuMCwgMS4wKSxcclxuICAgICAgLy8gcG9pbnQgNVxyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1pblksIDAsIDEuMCwgMCksXHJcbiAgICAgIC8vIHBvaW50IDZcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtaW5ZLCAwLCAwLCAwKSxcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5fdmVydGljZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9idWZmZXI/LnVwbG9hZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyPy51bmJpbmQoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZWNhbGN1bGF0ZVZlcnRpY2VzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbWluWCA9IC0odGhpcy5fd2lkdGggKiB0aGlzLl9vcmlnaW4ueCk7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5fd2lkdGggKiAoMS4wIC0gdGhpcy5fb3JpZ2luLngpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSAtKHRoaXMuX2hlaWdodCAqIHRoaXMuX29yaWdpbi55KTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLl9oZWlnaHQgKiAoMS4wIC0gdGhpcy5fb3JpZ2luLnkpO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzWzBdPy5wb3NpdGlvbi5zZXQobWluWCwgbWluWSk7XHJcbiAgICB0aGlzLl92ZXJ0aWNlc1sxXT8ucG9zaXRpb24uc2V0KG1pblgsIG1heFkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbMl0/LnBvc2l0aW9uLnNldChtYXhYLCBtYXhZKTtcclxuXHJcbiAgICB0aGlzLl92ZXJ0aWNlc1szXT8ucG9zaXRpb24uc2V0KG1heFgsIG1heFkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbNF0/LnBvc2l0aW9uLnNldChtYXhYLCBtaW5ZKTtcclxuICAgIHRoaXMuX3ZlcnRpY2VzWzVdPy5wb3NpdGlvbi5zZXQobWluWCwgbWluWSk7XHJcbiAgICB0aGlzLl9idWZmZXI/LmNsZWFyRGF0YSgpO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgdGhpcy5fYnVmZmVyPy5wdXNoQmFja0RhdGEodi50b0FycmF5KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyPy51cGxvYWQoKTtcclxuICAgIHRoaXMuX2J1ZmZlcj8udW5iaW5kKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuY2xhc3MgVVZJbmZvIHtcclxuICBwdWJsaWMgbWluOiBWZWN0b3IyO1xyXG4gIHB1YmxpYyBtYXg6IFZlY3RvcjI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtaW46IFZlY3RvcjIsIG1heDogVmVjdG9yMikge1xyXG4gICAgdGhpcy5taW4gPSBtaW47XHJcbiAgICB0aGlzLm1heCA9IG1heDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUluZm8ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgbWF0ZXJpYWxOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAxMDA7XHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMTAwO1xyXG4gIHB1YmxpYyBmcmFtZVdpZHRoOiBudW1iZXIgPSAxMDtcclxuICBwdWJsaWMgZnJhbWVIZWlnaHQ6IG51bWJlciA9IDEwO1xyXG4gIHB1YmxpYyBmcmFtZUNvdW50OiBudW1iZXIgPSAxO1xyXG4gIHB1YmxpYyBmcmFtZVNlcXVlbmNlOiBudW1iZXJbXSA9IFtdO1xyXG4gIHB1YmxpYyBmcmFtZVRpbWU6IG51bWJlciA9IDYwO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGUgZXh0ZW5kcyBTcHJpdGUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX2ZyYW1lSGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZnJhbWVXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZyYW1lQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9mcmFtZVNlcXVlbmNlOiBudW1iZXJbXTtcclxuICBwcml2YXRlIF9mcmFtZVRpbWU6IG51bWJlciA9IDMzO1xyXG4gIHByaXZhdGUgX2ZyYW1lVVZzOiBVVkluZm9bXSA9IFtdO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIF9jdXJyZW50RnJhbWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfYXNzZXRMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9hc3NldFdpZHRoOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgX2Fzc2V0SGVpZ2h0OiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgX2lzUGxheWluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG1hdGVyaWFsTmFtZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDEwMCxcclxuICAgIGhlaWdodDogbnVtYmVyID0gMTAwLFxyXG4gICAgZnJhbWVXaWR0aDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUhlaWdodDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUNvdW50OiBudW1iZXIgPSAxLFxyXG4gICAgZnJhbWVTZXF1ZW5jZTogbnVtYmVyW10gPSBbXSxcclxuICAgIGZyYW1lVGltZTogbnVtYmVyID0gMTAwXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuYW1lLCBtYXRlcmlhbE5hbWUsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuX2ZyYW1lV2lkdGggPSBmcmFtZVdpZHRoO1xyXG4gICAgdGhpcy5fZnJhbWVIZWlnaHQgPSBmcmFtZUhlaWdodDtcclxuICAgIHRoaXMuX2ZyYW1lQ291bnQgPSBmcmFtZUNvdW50O1xyXG4gICAgdGhpcy5fZnJhbWVTZXF1ZW5jZSA9IGZyYW1lU2VxdWVuY2U7XHJcbiAgICB0aGlzLl9mcmFtZVRpbWUgPSBmcmFtZVRpbWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsKSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX21hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlTmFtZSxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzUGxheWluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1BsYXlpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyYW1lKGZyYW1lTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChmcmFtZU51bWJlciA+PSB0aGlzLl9mcmFtZUNvdW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnRnJhbWUgaXMgb3VyIG9mIHJhbmdlOicgK1xyXG4gICAgICAgICAgZnJhbWVOdW1iZXIgK1xyXG4gICAgICAgICAgJ1xcbmZyYW1lQ291bnQ6ICcgK1xyXG4gICAgICAgICAgdGhpcy5fZnJhbWVDb3VudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRGcmFtZSA9IGZyYW1lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1lc3NhZ2UuY29kZSA9PT1cclxuICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgbGV0IGFzc2V0ID0gbWVzc2FnZS5jb250ZXh0IGFzIEltYWdlQXNzZXQ7XHJcbiAgICAgIHRoaXMuX2Fzc2V0SGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLl9hc3NldFdpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVVZzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG5cclxuICAgIGlmICghdGhpcy5fYXNzZXRMb2FkZWQpIHtcclxuICAgICAgdGhpcy5zZXR1cEZyb21NYXRlcmlhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vIEhhY2sgYXJvdW5kIGZvciBub3QgYmVpbmcgaW5zdGFudGlhdGVkIGJlZm9yZSBvbk1lc3NhZ2UgaXMgc2VudFxyXG4gICAgLy8gUmV2aXNpdFxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsICYmICF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICB0aGlzLnNldHVwRnJvbU1hdGVyaWFsKCk7XHJcbiAgICAgIGlmICghdGhpcy5fYXNzZXRMb2FkZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2lzUGxheWluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFRpbWUgKz0gdGltZTtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50VGltZSA+IHRoaXMuX2ZyYW1lVGltZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50RnJhbWUrKztcclxuICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSAwO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRGcmFtZSA+PSB0aGlzLl9mcmFtZVNlcXVlbmNlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZyYW1lVVZzID0gdGhpcy5fZnJhbWVTZXF1ZW5jZVt0aGlzLl9jdXJyZW50RnJhbWVdO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1swXS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbik7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzFdLnRleENvb3Jkcy5jb3B5RnJvbShcclxuICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4ueCxcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgueVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbMl0udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1szXS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heCk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzRdLnRleENvb3Jkcy5jb3B5RnJvbShcclxuICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgueCxcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4ueVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbNV0udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4pO1xyXG5cclxuICAgICAgdGhpcy5fYnVmZmVyPy5jbGVhckRhdGEoKTtcclxuICAgICAgdGhpcy5fdmVydGljZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcj8ucHVzaEJhY2tEYXRhKHYudG9BcnJheSgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8udXBsb2FkKCk7XHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8udW5iaW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVVVnMoKTogdm9pZCB7XHJcbiAgICBsZXQgdG90YWxXaWR0aDogbnVtYmVyID0gMDtcclxuICAgIGxldCB5VmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZyYW1lQ291bnQ7IGkrKykge1xyXG4gICAgICB0b3RhbFdpZHRoID0gaSAqIHRoaXMuX2ZyYW1lV2lkdGg7XHJcbiAgICAgIGlmICh0b3RhbFdpZHRoID4gdGhpcy5fYXNzZXRXaWR0aCkge1xyXG4gICAgICAgIHlWYWx1ZSsrO1xyXG4gICAgICAgIHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdSA9IChpICogdGhpcy5fZnJhbWVXaWR0aCkgLyB0aGlzLl9hc3NldFdpZHRoO1xyXG4gICAgICBsZXQgdiA9ICh5VmFsdWUgKiB0aGlzLl9mcmFtZUhlaWdodCkgLyB0aGlzLl9hc3NldEhlaWdodDtcclxuICAgICAgbGV0IG1pbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKHUsIHYpO1xyXG5cclxuICAgICAgbGV0IHVNYXggPSAoaSAqIHRoaXMuX2ZyYW1lV2lkdGggKyB0aGlzLl9mcmFtZVdpZHRoKSAvIHRoaXMuX2Fzc2V0V2lkdGg7XHJcbiAgICAgIGxldCB2TWF4ID1cclxuICAgICAgICAoeVZhbHVlICogdGhpcy5fZnJhbWVIZWlnaHQgKyB0aGlzLl9mcmFtZUhlaWdodCkgLyB0aGlzLl9hc3NldEhlaWdodDtcclxuICAgICAgbGV0IG1heDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKHVNYXgsIHZNYXgpO1xyXG5cclxuICAgICAgdGhpcy5fZnJhbWVVVnMucHVzaChuZXcgVVZJbmZvKG1pbiwgbWF4KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwRnJvbU1hdGVyaWFsKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IE1hdGVyaWFsTWFuYWdlci5nZXRNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gICAgICBpZiAobWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlPy5pc0xvYWRlZCkge1xyXG4gICAgICAgIGlmIChBc3NldE1hbmFnZXIuaXNBc3NldExvYWRlZChtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZU5hbWUpKSB7XHJcbiAgICAgICAgICB0aGlzLl9hc3NldEhlaWdodCA9IG1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLmhlaWdodDtcclxuICAgICAgICAgIHRoaXMuX2Fzc2V0V2lkdGggPSBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS53aWR0aDtcclxuICAgICAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVVZzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2NvcmUvZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi4vY29yZS93b3JsZC9zaW1PYmplY3QnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgcHJvdGVjdGVkIF9vd25lcjogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gIHByb3RlY3RlZCBfZGF0YTogSUNvbXBvbmVudERhdGE7XHJcblxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJQ29tcG9uZW50RGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG93bmVyKCk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3duZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuLi9jb3JlL2dyYXBoaWNzL3Nwcml0ZSc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL2NvcmUvbWF0aC92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnREYXRhIGltcGxlbWVudHMgSUNvbXBvbmVudERhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgbWF0ZXJpYWxOYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgb3JpZ2luOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ud2lkdGgpIHtcclxuICAgICAgdGhpcy53aWR0aCA9IE51bWJlcihqc29uLndpZHRoKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLmhlaWdodCkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE51bWJlcihqc29uLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5uYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ubWF0ZXJpYWxOYW1lKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxOYW1lID0gU3RyaW5nKGpzb24ubWF0ZXJpYWxOYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLm9yaWdpbikge1xyXG4gICAgICB0aGlzLm9yaWdpbi5zZXRGcm9tSnNvbihqc29uLm9yaWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnc3ByaXRlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgU3ByaXRlQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFNwcml0ZUNvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogU3ByaXRlQ29tcG9uZW50RGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBpZiAoZGF0YS53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3dpZHRoID0gTnVtYmVyKGRhdGEud2lkdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5faGVpZ2h0ID0gTnVtYmVyKGRhdGEuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUoXHJcbiAgICAgIGRhdGEubmFtZSxcclxuICAgICAgZGF0YS5tYXRlcmlhbE5hbWUsXHJcbiAgICAgIHRoaXMuX3dpZHRoLFxyXG4gICAgICB0aGlzLl9oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFkYXRhLm9yaWdpbi5lcXVhbHMoVmVjdG9yMy56ZXJvKSkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUub3JpZ2luLmNvcHlGcm9tKGRhdGEub3JpZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLmRyYXcoc2hhZGVyLCB0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3ByaXRlIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9hbmltYXRlZFNwcml0ZSc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9jb3JlL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vc3ByaXRlQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGFcclxuICBleHRlbmRzIFNwcml0ZUNvbXBvbmVudERhdGFcclxuICBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhXHJcbntcclxuICBwdWJsaWMgZnJhbWVXaWR0aDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgZnJhbWVIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lU2VxdWVuY2U6IG51bWJlcltdID0gW107XHJcbiAgcHVibGljIGF1dG9QbGF5OiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZnJhbWVUaW1lOiBudW1iZXIgPSAzMztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgc3VwZXIuc2V0RnJvbUpzb24oanNvbik7XHJcblxyXG4gICAgaWYgKGpzb24uYXV0b1BsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmF1dG9QbGF5ID0gQm9vbGVhbihqc29uLmF1dG9QbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZVdpZHRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZVdpZHRoIHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVXaWR0aCA9IE51bWJlcihqc29uLmZyYW1lV2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUhlaWdodCB0byBiZSBkZWZpbmVkJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcmFtZUhlaWdodCA9IE51bWJlcihqc29uLmZyYW1lSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZUNvdW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUNvdW50IHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IE51bWJlcihqc29uLmZyYW1lQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lU2VxdWVuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0FuaW1hdGVkIHNwcml0ZSBkYXRhIHJlcXVpcmVzIGZyYW1lU2VxdWVuY2UgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVTZXF1ZW5jZSA9IGpzb24uZnJhbWVTZXF1ZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZVRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZyYW1lVGltZSA9IE51bWJlcihqc29uLmZyYW1lVGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdhbmltYXRlZFNwcml0ZSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGxldCBkYXRhID0gbmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfYXV0b3BQbGF5OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogQW5pbWF0ZWRTcHJpdGU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgdGhpcy5fYXV0b3BQbGF5ID0gZGF0YS5hdXRvUGxheTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgQW5pbWF0ZWRTcHJpdGUoXHJcbiAgICAgIGRhdGEubmFtZSxcclxuICAgICAgZGF0YS5tYXRlcmlhbE5hbWUsXHJcbiAgICAgIGRhdGEuZnJhbWVXaWR0aCxcclxuICAgICAgZGF0YS5mcmFtZUhlaWdodCxcclxuICAgICAgZGF0YS5mcmFtZVdpZHRoLFxyXG4gICAgICBkYXRhLmZyYW1lSGVpZ2h0LFxyXG4gICAgICBkYXRhLmZyYW1lQ291bnQsXHJcbiAgICAgIGRhdGEuZnJhbWVTZXF1ZW5jZSxcclxuICAgICAgZGF0YS5mcmFtZVRpbWVcclxuICAgICk7XHJcblxyXG4gICAgLy8gSGF2ZSB0byBkbyB0aGlzIGV2ZW4gdGhvdWdoIGNhbGxpbmcgc3VwZXIgYmVjYXVzZSBvZiB0aGlzLl9zcHJpdGUgY2FsbFxyXG4gICAgLy8gYWJvdmUgd2lwZXMgb3V0IHRoZSBvcmlnaW5cclxuICAgIGlmICghZGF0YS5vcmlnaW4uZXF1YWxzKFZlY3RvcjMuemVybykpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLm9yaWdpbi5jb3B5RnJvbShkYXRhLm9yaWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzUGxheWluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zcHJpdGUuaXNQbGF5aW5nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9hdXRvcFBsYXkpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUudXBkYXRlKHRpbWUpO1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyYW1lKGZyYW1lTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5zZXRGcmFtZShmcmFtZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBc3NldE1hbmFnZXIsXHJcbiAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVELFxyXG59IGZyb20gJy4uL2Fzc2V0cy9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBUZXh0QXNzZXQgfSBmcm9tICcuLi9hc3NldHMvdGV4dEFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5jbGFzcyBGb250VXRpbGl0aWVzIHtcclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGZpZWxkLnNwbGl0KCc9JylbMV07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9udEdseXBoIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyB4T2Zmc2V0OiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyB5T2Zmc2V0OiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyB4QWR2YW5jZTogbnVtYmVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgY2hhbm5lbDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21GaWVsZHMoZmllbGRzOiBzdHJpbmdbXSk6IEZvbnRHbHlwaCB7XHJcbiAgICBjb25zdCBnbHlwaDogRm9udEdseXBoID0gbmV3IEZvbnRHbHlwaCgpO1xyXG5cclxuICAgIGdseXBoLmlkID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzFdKSk7XHJcbiAgICBnbHlwaC54ID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzJdKSk7XHJcbiAgICBnbHlwaC55ID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzNdKSk7XHJcbiAgICBnbHlwaC53aWR0aCA9IE51bWJlcihGb250VXRpbGl0aWVzLmV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkc1s0XSkpO1xyXG4gICAgZ2x5cGguaGVpZ2h0ID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzVdKSk7XHJcbiAgICBnbHlwaC54T2Zmc2V0ID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzZdKSk7XHJcbiAgICBnbHlwaC55T2Zmc2V0ID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzddKSk7XHJcbiAgICBnbHlwaC54QWR2YW5jZSA9IE51bWJlcihGb250VXRpbGl0aWVzLmV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkc1s4XSkpO1xyXG4gICAgZ2x5cGgucGFnZSA9IE51bWJlcihGb250VXRpbGl0aWVzLmV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkc1s5XSkpO1xyXG4gICAgZ2x5cGguY2hhbm5lbCA9IE51bWJlcihGb250VXRpbGl0aWVzLmV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkc1sxMF0pKTtcclxuXHJcbiAgICByZXR1cm4gZ2x5cGg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwRm9udCBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2ZvbnRGaWxlTmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2Fzc2V0TG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX2ltYWdlRmlsZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2dseXBoczogeyBbaWQ6IG51bWJlcl06IEZvbnRHbHlwaCB9ID0ge307XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3NpemU6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfaW1hZ2VXaWR0aDogbnVtYmVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9pbWFnZUhlaWdodDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBmb250RmlsZU5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9mb250RmlsZU5hbWUgPSBmb250RmlsZU5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2VXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlV2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGltYWdlSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRleHR1cmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VGaWxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hc3NldExvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQodGhpcy5fZm9udEZpbGVOYW1lKTtcclxuICAgIGlmIChhc3NldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucHJvY2Vzc0ZvbnRGaWxlKFN0cmluZyhhc3NldC5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9mb250RmlsZU5hbWUsXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgbWVzc2FnZS5jb2RlID09PVxyXG4gICAgICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9mb250RmlsZU5hbWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLnByb2Nlc3NGb250RmlsZShTdHJpbmcoKG1lc3NhZ2UuY29udGV4dCBhcyBUZXh0QXNzZXQpLmRhdGEpKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuX2ltYWdlRmlsZSAmJlxyXG4gICAgICBtZXNzYWdlLmNvZGUgPT09IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX2ltYWdlRmlsZVxyXG4gICAgKSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0R2x5cGgoY2hhcjogc3RyaW5nKTogRm9udEdseXBoIHtcclxuICAgIC8vIHJlcGxhY2UgdW5yZWNvZ25pemVkIGNoYXJhY3RlcnMgd2l0aCBhICcwJy5cclxuICAgIGxldCBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xyXG4gICAgY29kZSA9IHRoaXMuX2dseXBoc1tjb2RlXSA9PT0gdW5kZWZpbmVkID8gNDggOiBjb2RlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9nbHlwaHNbY29kZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWVhc3VyZVRleHQodGV4dDogc3RyaW5nKTogVmVjdG9yMiB7XHJcbiAgICBsZXQgc2l6ZTogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuXHJcbiAgICBsZXQgbWF4WCA9IDA7XHJcbiAgICBsZXQgeCA9IDA7XHJcbiAgICBsZXQgeSA9IDA7XHJcblxyXG4gICAgdGV4dC5zcGxpdCgnJykuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGMpIHtcclxuICAgICAgICBjYXNlICdcXG4nOlxyXG4gICAgICAgICAgaWYgKHggPiBtYXhYKSB7XHJcbiAgICAgICAgICAgIG1heFggPSB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICB5ICs9IHRoaXMuX3NpemU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgeCArPSB0aGlzLmdldEdseXBoKGMpLnhBZHZhbmNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNpemUuc2V0KG1heFgsIHkpO1xyXG4gICAgcmV0dXJuIHNpemU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3NGb250RmlsZShjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBjaGFyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgbGluZXM6IHN0cmluZ1tdID0gY29udGVudC5zcGxpdCgnXFxuJyk7XHJcbiAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgIC8vIFNhbml0aXplIGxpbmVcclxuICAgICAgY29uc3QgZGF0YSA9IGxpbmUucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpO1xyXG4gICAgICBjb25zdCBmaWVsZHMgPSBkYXRhLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAvLyBMb29rIGF0IHR5cGUgb2YgbGluZVxyXG4gICAgICBzd2l0Y2ggKGZpZWxkc1swXSkge1xyXG4gICAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgICAgdGhpcy5fc2l6ZSA9IE51bWJlcihGb250VXRpbGl0aWVzLmV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkc1s0XSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY29tbW9uJzpcclxuICAgICAgICAgIHRoaXMuX2ltYWdlV2lkdGggPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbM10pKTtcclxuICAgICAgICAgIHRoaXMuX2ltYWdlSGVpZ2h0ID0gTnVtYmVyKFxyXG4gICAgICAgICAgICBGb250VXRpbGl0aWVzLmV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkc1s0XSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdwYWdlJzpcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbMV0pKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlRmlsZSA9IEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzJdKTtcclxuICAgICAgICAgICAgLy8gU3RyaXAgcXVvdGVzXHJcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlRmlsZSA9IHRoaXMuX2ltYWdlRmlsZS5yZXBsYWNlKC9cIi9nLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVwZW5kIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSBuYW1lLiAgVE9ETzogVGhpcyBzaG91bGQgYmUgY29uZmlndXJhYmxlXHJcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlRmlsZSA9ICdzcmMvYXNzZXRzL2ZvbnRzLycgKyB0aGlzLl9pbWFnZUZpbGUudHJpbSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2hhcnMnOlxyXG4gICAgICAgICAgY2hhckNvdW50ID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzFdKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjaGFyJzpcclxuICAgICAgICAgIGNvbnN0IGdseXBoID0gRm9udEdseXBoLmZyb21GaWVsZHMoZmllbGRzKTtcclxuICAgICAgICAgIHRoaXMuX2dseXBoc1tnbHlwaC5pZF0gPSBnbHlwaDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIGxvYWRlZCBnbHlwaHNcclxuICAgIGxldCBhY3R1YWxHbHlwaENvdW50ID0gMDtcclxuXHJcbiAgICAvL09ubHkgY291bnQgcHJvcGVydGllc1xyXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9nbHlwaHMpO1xyXG5cclxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9nbHlwaHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGFjdHVhbEdseXBoQ291bnQrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGFjdHVhbEdseXBoQ291bnQgIT09IGNoYXJDb3VudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYEZvbnQgZmlsZSByZXBvcnRlZCBleGlzdGVuY2Ugb2YgJHtjaGFyQ291bnR9IGdseXBocywgYnV0IG9ubHkgJHthY3R1YWxHbHlwaENvdW50fSB3ZXJlIGZvdW5kLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hc3NldExvYWRlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICcuL2JpdG1hcEZvbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpdG1hcEZvbnRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfZm9udHM6IHsgW25hbWU6IHN0cmluZ106IEJpdG1hcEZvbnQgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZEZvbnQobmFtZTogc3RyaW5nLCBmb250RmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzW25hbWVdID0gbmV3IEJpdG1hcEZvbnQobmFtZSwgZm9udEZpbGVOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Rm9udChuYW1lOiBzdHJpbmcpOiBCaXRtYXBGb250IHtcclxuICAgIGlmIChCaXRtYXBGb250TWFuYWdlci5fZm9udHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZm9udCBuYW1lZCAke25hbWV9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEJpdG1hcEZvbnRNYW5hZ2VyLl9mb250c1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzKTtcclxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIEJpdG1hcEZvbnRNYW5hZ2VyLl9mb250c1trZXldLmxvYWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZWFkeSgpOiBib29sZWFuIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzKTtcclxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmICghQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzW2tleV0uaXNMb2FkZWQpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKGBmb250ICR7a2V5fSBpcyBzdGlsbCBsb2FkaW5nYCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmRlYnVnKCdBbGwgZm9udHMgYXJlIGxvYWRlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHJpdmF0ZSBfcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2c6IG51bWJlcjtcclxuICBwcml2YXRlIF9iOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICByOiBudW1iZXIgPSAyNTUsXHJcbiAgICBnOiBudW1iZXIgPSAyNTUsXHJcbiAgICBiOiBudW1iZXIgPSAyNTUsXHJcbiAgICBhOiBudW1iZXIgPSAyNTVcclxuICApIHtcclxuICAgIHRoaXMuX3IgPSByO1xyXG4gICAgdGhpcy5fZyA9IGc7XHJcbiAgICB0aGlzLl9iID0gYjtcclxuICAgIHRoaXMuX2EgPSBhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgckZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fciAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2c7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGdGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2cgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYUZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYSAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBhKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2EgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdEFycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciAvIDI1NS4wLCB0aGlzLl9nIC8gMjU1LjAsIHRoaXMuX2IgLyAyNTUuMCwgdGhpcy5fYSAvIDI1NS4wXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0Zsb2F0QXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHdoaXRlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmxhY2soKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWQoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigyNTUsIDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdyZWVuKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMjU1LCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBibHVlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMjU1LCAyNTUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5cclxuY29uc3QgTEVWRUw6IG51bWJlciA9IDA7XHJcbmNvbnN0IEJPUkRFUjogbnVtYmVyID0gMDtcclxuY29uc3QgVEVNUF9JTUFHRV9EQVRBOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDI1NV0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9oYW5kbGU6IFdlYkdMVGV4dHVyZTtcclxuICBwcml2YXRlIF9pc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAxLCBoZWlnaHQ6IG51bWJlciA9IDEpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB0aGlzLl9oYW5kbGUgPSBnbC5jcmVhdGVUZXh0dXJlKCkgYXMgV2ViR0xUZXh0dXJlO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIHJhdyBkYXRhIGludG8gYSB0ZXh0dXJlXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICBMRVZFTCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgMSxcclxuICAgICAgMSxcclxuICAgICAgQk9SREVSLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBURU1QX0lNQUdFX0RBVEFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQodGhpcy5fbmFtZSkgYXMgSW1hZ2VBc3NldDtcclxuICAgIGlmIChhc3NldCkge1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUsIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWFrZXMgYSBjYWxsIHRvIHdlYmdsIGFuZCB0ZWxscyBpdCB3aGF0IGNoYW5uZWwgdG8gYWN0aXZhdGUgb25cclxuICAgKiAoMzIgdG90YWwpXHJcbiAgICogQHBhcmFtIHRleHR1cmVVbml0IHRleHR1cmUgdG8gYWN0aXZhdGUgb25cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZhdGVBbmRCaW5kKHRleHR1cmVVbml0OiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4dHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChtZXNzYWdlLmNvbnRleHQgYXMgSW1hZ2VBc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0OiBJbWFnZUFzc2V0KTogdm9pZCB7XHJcbiAgICB0aGlzLl93aWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIGFuIGltYWdlIGJpdG1hcHBlclxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIGFzc2V0LmRhdGFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNQb3dlck9mMigpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGEgbWlwIG1hcCBhbmQgY2xhbXAgd3JhcHBpbmcgdG8gZWRnZS5cclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgIH1cclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQb3dlck9mMigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX3dpZHRoKSAmJiB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl9oZWlnaHQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbHVlUG93ZXJPZjIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcblxyXG5jbGFzcyBUZXh0dXJlUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIHRleHR1cmU6IFRleHR1cmU7XHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3RleHR1cmVzOiB7IFtuYW1lOiBzdHJpbmddOiBUZXh0dXJlUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IFRleHR1cmUge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0ZXh0dXJlTmFtZSk7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSBuZXcgVGV4dHVyZVJlZmVyZW5jZU5vZGUodGV4dHVyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlVGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBBIHRleHR1cmUgbmFtZWQgJHt0ZXh0dXJlTmFtZX0gZG9lcyBub3QgZXhpc3QgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmVsZWFzZWQuYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEpIHtcclxuICAgICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcbmltcG9ydCB7IFRleHR1cmVNYW5hZ2VyIH0gZnJvbSAnLi90ZXh0dXJlTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IFRleHR1cmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdGludDogQ29sb3I7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nLCB0aW50OiBDb2xvcikge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSBkaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgICB0aGlzLl90aW50ID0gdGludDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5fZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGludCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlmZnVzZVRleHR1cmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbmZvLCBHTEJ1ZmZlciB9IGZyb20gJy4uL2dsL2dsQnVmZmVyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4vYml0bWFwRm9udCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnRNYW5hZ2VyIH0gZnJvbSAnLi9iaXRtYXBGb250TWFuYWdlcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXRtYXBUZXh0IHtcclxuICBwcml2YXRlIF9mb250TmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2lzRGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIF9vcmlnaW46IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcm90ZWN0ZWQgX2J1ZmZlcjogR0xCdWZmZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByb3RlY3RlZCBfbWF0ZXJpYWw6IE1hdGVyaWFsO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcm90ZWN0ZWQgX2JpdG1hcEZvbnQ6IEJpdG1hcEZvbnQ7XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNlczogVmVydGV4W10gPSBbXTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJvdGVjdGVkIF90ZXh0OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGZvbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZm9udE5hbWUgPSBmb250TmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl90ZXh0ICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvcmlnaW4oKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBvcmlnaW4odmFsdWU6IFZlY3RvcjMpIHtcclxuICAgIHRoaXMuX29yaWdpbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVWZXJ0aWNlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9idWZmZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5fbWF0ZXJpYWwuZGVzdHJveSgpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JpdG1hcEZvbnQgPSBCaXRtYXBGb250TWFuYWdlci5nZXRGb250KHRoaXMuX2ZvbnROYW1lKTtcclxuICAgIHRoaXMuX21hdGVyaWFsID0gbmV3IE1hdGVyaWFsKFxyXG4gICAgICBgQklUTUFQX0ZPTlRfJHt0aGlzLl9uYW1lfV8ke3RoaXMuX2JpdG1hcEZvbnQuc2l6ZX1gLFxyXG4gICAgICB0aGlzLl9iaXRtYXBGb250LnRleHR1cmVOYW1lLFxyXG4gICAgICBDb2xvci53aGl0ZSgpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBHTEJ1ZmZlcigpO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5sb2NhdGlvbiA9IDA7XHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5zaXplID0gMztcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbihwb3NpdGlvbkF0dHJpYnV0ZSk7XHJcblxyXG4gICAgbGV0IHRleENvb3JkQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIHRleENvb3JkQXR0cmlidXRlLmxvY2F0aW9uID0gMTtcclxuICAgIHRleENvb3JkQXR0cmlidXRlLnNpemUgPSAyO1xyXG4gICAgdGhpcy5fYnVmZmVyLmFkZEF0dHJpYnV0ZUxvY2F0aW9uKHRleENvb3JkQXR0cmlidXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX21hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlPy5pc0xvYWRlZCkge1xyXG4gICAgICB0aGlzLmxvYWQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2lzRGlydHkgJiYgdGhpcy5fYml0bWFwRm9udC5pc0xvYWRlZCkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVZlcnRpY2VzKCk7XHJcbiAgICAgIHRoaXMuX2lzRGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3KHNoYWRlcjogU2hhZGVyLCBtb2RlbDogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RlbExvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9tb2RlbCcpO1xyXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbExvY2F0aW9uLCBmYWxzZSwgbW9kZWwudG9GbG9hdDMyQXJyYXkoKSk7XHJcblxyXG4gICAgY29uc3QgY29sb3JMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfdGludCcpO1xyXG4gICAgZ2wudW5pZm9ybTRmdihjb2xvckxvY2F0aW9uLCB0aGlzLl9tYXRlcmlhbC50aW50LnRvRmxvYXQzMkFycmF5KCkpO1xyXG5cclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX21hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLmFjdGl2YXRlQW5kQmluZCgwKTtcclxuXHJcbiAgICAgIGNvbnN0IGRpZmZ1c2VMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfZGlmZnVzZScpO1xyXG4gICAgICBnbC51bmlmb3JtMWkoZGlmZnVzZUxvY2F0aW9uLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9idWZmZXIuYmluZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVmVydGljZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl92ZXJ0aWNlcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5fYnVmZmVyLmNsZWFyRGF0YSgpO1xyXG5cclxuICAgIGxldCB4ID0gMDtcclxuICAgIGxldCB5ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBjIG9mIHRoaXMuX3RleHQpIHtcclxuICAgICAgaWYgKGMgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgeSArPSB0aGlzLl9iaXRtYXBGb250LnNpemU7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBnID0gdGhpcy5fYml0bWFwRm9udC5nZXRHbHlwaChjKTtcclxuXHJcbiAgICAgIGxldCBtaW5YID0geCArIGcueE9mZnNldDtcclxuICAgICAgbGV0IG1pblkgPSB5ICsgZy55T2Zmc2V0O1xyXG5cclxuICAgICAgbGV0IG1heFggPSBtaW5YICsgZy53aWR0aDtcclxuICAgICAgbGV0IG1heFkgPSBtaW5ZICsgZy5oZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgbWludSA9IGcueCAvIHRoaXMuX2JpdG1hcEZvbnQuaW1hZ2VXaWR0aDtcclxuICAgICAgbGV0IG1pbnYgPSBnLnkgLyB0aGlzLl9iaXRtYXBGb250LmltYWdlSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IG1heHUgPSAoZy54ICsgZy53aWR0aCkgLyB0aGlzLl9iaXRtYXBGb250LmltYWdlV2lkdGg7XHJcbiAgICAgIGxldCBtYXh2ID0gKGcueSArIGcuaGVpZ2h0KSAvIHRoaXMuX2JpdG1hcEZvbnQuaW1hZ2VIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWluWCwgbWluWSwgMCwgbWludSwgbWludikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWluWCwgbWF4WSwgMCwgbWludSwgbWF4dikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWF4WCwgbWF4WSwgMCwgbWF4dSwgbWF4dikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWF4WCwgbWF4WSwgMCwgbWF4dSwgbWF4dikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWF4WCwgbWluWSwgMCwgbWF4dSwgbWludikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWluWCwgbWluWSwgMCwgbWludSwgbWludikpO1xyXG5cclxuICAgICAgeCArPSBnLnhBZHZhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgdGhpcy5fYnVmZmVyLnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9idWZmZXIudXBsb2FkKCk7XHJcbiAgICB0aGlzLl9idWZmZXIudW5iaW5kKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2NvcmUvZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgQml0bWFwVGV4dCB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3MvYml0bWFwVGV4dCc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9jb3JlL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL2NvcmUvbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZS9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwVGV4dENvbXBvbmVudERhdGEgaW1wbGVtZW50cyBJQ29tcG9uZW50RGF0YSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBmb250TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBvcmlnaW46IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZvbnROYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5mb250TmFtZSA9IFN0cmluZyhqc29uLmZvbnROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi50ZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50ZXh0ID0gU3RyaW5nKGpzb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ub3JpZ2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcmlnaW4gPSBqc29uLm9yaWdpbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCaXRtYXBUZXh0Q29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnYml0bWFwVGV4dCc7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgQml0bWFwVGV4dENvbXBvbmVudERhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IEJpdG1hcFRleHRDb21wb25lbnQoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwVGV4dENvbXBvbmVudFxyXG4gIGV4dGVuZHMgQmFzZUNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyXHJcbntcclxuICBwcml2YXRlIF9iaXRtYXBUZXh0OiBCaXRtYXBUZXh0O1xyXG4gIHByaXZhdGUgX2ZvbnROYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBCaXRtYXBUZXh0Q29tcG9uZW50RGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICB0aGlzLl9mb250TmFtZSA9IGRhdGEuZm9udE5hbWU7XHJcbiAgICB0aGlzLl9iaXRtYXBUZXh0ID0gbmV3IEJpdG1hcFRleHQodGhpcy5uYW1lLCB0aGlzLl9mb250TmFtZSk7XHJcbiAgICBpZiAoIWRhdGEub3JpZ2luLmVxdWFscyhWZWN0b3IzLnplcm8pKSB7XHJcbiAgICAgIHRoaXMuX2JpdG1hcFRleHQub3JpZ2luLmNvcHlGcm9tKGRhdGEub3JpZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9iaXRtYXBUZXh0LnRleHQgPSBkYXRhLnRleHQ7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciB0ZXh0IHVwZGF0ZXNcclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKHRoaXMubmFtZSArICc6U2V0VGV4dCcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmICgobWVzc2FnZS5jb2RlID0gdGhpcy5uYW1lICsgJzpTZXRUZXh0JykpIHtcclxuICAgICAgdGhpcy5fYml0bWFwVGV4dC50ZXh0ID0gU3RyaW5nKG1lc3NhZ2UuY29udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JpdG1hcFRleHQubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JpdG1hcFRleHQudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX2JpdG1hcFRleHQuZHJhdyhzaGFkZXIsIHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCk7XHJcbiAgICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgSVNoYXBlMkQgfSBmcm9tICcuL0lTaGFwZTJEJztcclxuaW1wb3J0IHsgUmVjdGFuZ2xlMkQgfSBmcm9tICcuL3JlY3RhbmdsZTJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGUyRCBpbXBsZW1lbnRzIElTaGFwZTJEIHtcclxuICBwdWJsaWMgb3JpZ2luOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwdWJsaWMgcmFkaXVzOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBnZXQgb2Zmc2V0KCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXMgKiB0aGlzLm9yaWdpbi54LFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXMgKiB0aGlzLm9yaWdpbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5wb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldEZyb21Kc29uKGpzb24ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLm9yaWdpbikge1xyXG4gICAgICB0aGlzLm9yaWdpbi5zZXRGcm9tSnNvbihqc29uLm9yaWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ucmFkaXVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaXJjbGUyRCByZXF1aXJlcyByYWRpdXMgdG8gYmUgcHJlc2VudC4nKTtcclxuICAgIH1cclxuICAgIHRoaXMucmFkaXVzID0ganNvbi5yYWRpdXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW50ZXJzZWN0cyhvdGhlclNoYXBlOiBJU2hhcGUyRCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG90aGVyU2hhcGUgaW5zdGFuY2VvZiBDaXJjbGUyRCAmJiB0aGlzLnJhZGl1cyAmJiBvdGhlclNoYXBlLnJhZGl1cykge1xyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKFxyXG4gICAgICAgIFZlY3RvcjIuZGlzdGFuY2Uob3RoZXJTaGFwZS5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbilcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmFkaXVzTGVuZ3RocyA9IHRoaXMucmFkaXVzICsgb3RoZXJTaGFwZS5yYWRpdXM7XHJcbiAgICAgIGlmIChkaXN0YW5jZSA8PSByYWRpdXNMZW5ndGhzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3RoZXJTaGFwZSBpbnN0YW5jZW9mIFJlY3RhbmdsZTJEKSB7XHJcbiAgICAgIGlmICghb3RoZXJTaGFwZS53aWR0aCB8fCAhb3RoZXJTaGFwZS5oZWlnaHQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7b3RoZXJTaGFwZX0gcmVxdWlyZXMgYSBoZWlnaHQgYW5kIHdpZHRoYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnJhZGl1cykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzfSByZXF1cmVzIGEgcmFkaXVzYCk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGRlbHRhWCA9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC1cclxuICAgICAgICBNYXRoLm1heChcclxuICAgICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueCxcclxuICAgICAgICAgIE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgb3RoZXJTaGFwZS5wb3NpdGlvbi54ICsgb3RoZXJTaGFwZS53aWR0aClcclxuICAgICAgICApO1xyXG4gICAgICBsZXQgZGVsdGFZID1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCBvdGhlclNoYXBlLnBvc2l0aW9uLnkgKyBvdGhlclNoYXBlLmhlaWdodClcclxuICAgICAgICApO1xyXG4gICAgICBpZiAoZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZIDwgdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9pbnRJblNoYXBlKHBvaW50OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhYnNEaXN0YW5jZSA9IE1hdGguYWJzKFZlY3RvcjIuZGlzdGFuY2UodGhpcy5wb3NpdGlvbiwgcG9pbnQpKTtcclxuICAgIGlmICh0aGlzLnJhZGl1cyAmJiBhYnNEaXN0YW5jZSA8PSB0aGlzLnJhZGl1cykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBDaXJjbGUyRCB9IGZyb20gJy4vY2lyY2xlMkQnO1xyXG5pbXBvcnQgeyBJU2hhcGUyRCB9IGZyb20gJy4vSVNoYXBlMkQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZTJEIGltcGxlbWVudHMgSVNoYXBlMkQge1xyXG4gIHB1YmxpYyBvcmlnaW46IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG5cclxuICBwdWJsaWMgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHg6IG51bWJlciA9IDAsXHJcbiAgICB5OiBudW1iZXIgPSAwLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDAsXHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDBcclxuICApIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG9mZnNldCgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHRoaXMud2lkdGggKiB0aGlzLm9yaWdpbi54LFxyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgdGhpcy5oZWlnaHQgKiB0aGlzLm9yaWdpbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5wb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldEZyb21Kc29uKGpzb24ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLm9yaWdpbikge1xyXG4gICAgICB0aGlzLm9yaWdpbi5zZXRGcm9tSnNvbihqc29uLm9yaWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ud2lkdGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlY3RhbmdsZTJkIHJlcXVpcmVzIHdpZHRoIHRvIGJlIHByZXNlbnQuJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gTnVtYmVyKGpzb24ud2lkdGgpO1xyXG5cclxuICAgIGlmIChqc29uLmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncmVjdGFuZ2xlMmQgcmVxdWlyZXMgaGVpZ2h0IHRvIGJlIHByZXNlbnQuJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlaWdodCA9IE51bWJlcihqc29uLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW50ZXJzZWN0cyhvdGhlclNoYXBlOiBJU2hhcGUyRCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG90aGVyU2hhcGUgaW5zdGFuY2VvZiBSZWN0YW5nbGUyRCkge1xyXG4gICAgICBjb25zdCBhID0gdGhpcy5nZXRFeHRlbnRzKHRoaXMpO1xyXG4gICAgICBjb25zdCBiID0gdGhpcy5nZXRFeHRlbnRzKG90aGVyU2hhcGUpO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGEud2lkdGggIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGEuaGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBiLndpZHRoICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBiLmhlaWdodCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgIClcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgYS5wb3NpdGlvbi54IDw9IGIud2lkdGggJiZcclxuICAgICAgICAgIGEud2lkdGggPj0gYi5wb3NpdGlvbi54ICYmXHJcbiAgICAgICAgICBhLnBvc2l0aW9uLnkgPD0gYi5oZWlnaHQgJiZcclxuICAgICAgICAgIGEuaGVpZ2h0ID49IGIucG9zaXRpb24ueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBvdGhlclNoYXBlIGluc3RhbmNlb2YgQ2lyY2xlMkQgJiZcclxuICAgICAgb3RoZXJTaGFwZS5yYWRpdXMgJiZcclxuICAgICAgdGhpcy53aWR0aCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuaGVpZ2h0ICE9PSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICBjb25zdCBkZWx0YVggPVxyXG4gICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueCAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICBNYXRoLm1pbihvdGhlclNoYXBlLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbHRhWSA9XHJcbiAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi55IC1cclxuICAgICAgICBNYXRoLm1heChcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIE1hdGgubWluKG90aGVyU2hhcGUucG9zaXRpb24ueSwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkgPFxyXG4gICAgICAgIG90aGVyU2hhcGUucmFkaXVzICogb3RoZXJTaGFwZS5yYWRpdXNcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9pbnRJblNoYXBlKHBvaW50OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy53aWR0aCAmJiB0aGlzLmhlaWdodCkge1xyXG4gICAgICBsZXQgeCA9IHRoaXMud2lkdGggPCAwID8gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCA6IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgbGV0IHkgPSB0aGlzLmhlaWdodCA8IDAgPyB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCA6IHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICAgIGxldCBleHRlbnRYID1cclxuICAgICAgICB0aGlzLndpZHRoIDwgMCA/IHRoaXMucG9zaXRpb24ueCA6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGg7XHJcbiAgICAgIGxldCBleHRlbnRZID1cclxuICAgICAgICB0aGlzLmhlaWdodCA8IDAgPyB0aGlzLnBvc2l0aW9uLnkgOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwb2ludC54ID49IHggJiZcclxuICAgICAgICBwb2ludC54IDw9IGV4dGVudFggJiZcclxuICAgICAgICBwb2ludC55ID49IHkgJiZcclxuICAgICAgICBwb2ludC55IDw9IGV4dGVudFlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV4dGVudHMoc2hhcGU6IFJlY3RhbmdsZTJEKTogUmVjdGFuZ2xlMkQge1xyXG4gICAgaWYgKHNoYXBlLndpZHRoID09PSB1bmRlZmluZWQgfHwgc2hhcGUuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRFeHRlbnRzIG5lZWRzIGEgc2hhcGUgd2l0aCBhIGhlaWdodCBhbmQgYSB3aWR0aCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHggPVxyXG4gICAgICBzaGFwZS53aWR0aCA8IDAgPyBzaGFwZS5wb3NpdGlvbi54IC0gc2hhcGUud2lkdGggOiBzaGFwZS5wb3NpdGlvbi54O1xyXG4gICAgY29uc3QgeSA9XHJcbiAgICAgIHNoYXBlLmhlaWdodCA8IDAgPyBzaGFwZS5wb3NpdGlvbi55IC0gc2hhcGUuaGVpZ2h0IDogc2hhcGUucG9zaXRpb24ueTtcclxuXHJcbiAgICBjb25zdCBleHRlbnRYID1cclxuICAgICAgc2hhcGUud2lkdGggPCAwID8gc2hhcGUucG9zaXRpb24ueCA6IHNoYXBlLnBvc2l0aW9uLnggKyBzaGFwZS53aWR0aDtcclxuICAgIGNvbnN0IGV4dGVudFkgPVxyXG4gICAgICBzaGFwZS5oZWlnaHQgPCAwID8gc2hhcGUucG9zaXRpb24ueSA6IHNoYXBlLnBvc2l0aW9uLnkgKyBzaGFwZS5oZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUyRCh4LCB5LCBleHRlbnRYLCBleHRlbnRZKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9JU2hhcGUyRCc7XHJcbmltcG9ydCB7IFJlY3RhbmdsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9yZWN0YW5nbGUyZCc7XHJcbmltcG9ydCB7IENpcmNsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9jaXJjbGUyRCc7XHJcbmltcG9ydCB7IENvbGxpc2lvbk1hbmFnZXIgfSBmcm9tICcuLi9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQ29tcG9uZW50RGF0YSBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNoYXBlOiBJU2hhcGUyRCB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgc3RhdGljOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnN0YXRpYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGljID0gQm9vbGVhbihqc29uLnN0YXRpYyk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5zaGFwZT8udHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKFN0cmluZyhqc29uLnNoYXBlLnR5cGUpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxyXG4gICAgICAgICAgdGhpcy5zaGFwZSA9IG5ldyBSZWN0YW5nbGUyRCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgIHRoaXMuc2hhcGUgPSBuZXcgQ2lyY2xlMkQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHNoYXBlIHR5cGU6ICcgKyBqc29uLnNoYXBlLnR5cGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNoYXBlLnNldEZyb21Kc29uKGpzb24uc2hhcGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdDb2xsaXNpb25Db21wb25lbnREYXRhIHJlcXVpcmVzIFwic2hhcGVcIiBhbmQgXCJzaGFwZS50eXBlXCIgdG8gYmUgcHJlc2VudC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnY29sbGlzaW9uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgQ29sbGlzaW9uQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbGxpc2lvbkNvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zaGFwZTogSVNoYXBlMkQ7XHJcbiAgcHJpdmF0ZSBfc3RhdGljOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogQ29sbGlzaW9uQ29tcG9uZW50RGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgaWYgKCFkYXRhLnNoYXBlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBpcyBtaXNzaW5nIFwic2hhcGVcIiBwcm9wZXJ0eTonKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NoYXBlID0gZGF0YS5zaGFwZTtcclxuICAgIHRoaXMuX3N0YXRpYyA9IGRhdGEuc3RhdGljO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzaGFwZSgpOiBJU2hhcGUyRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hhcGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzU3RhdGljKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRpYztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG5cclxuICAgIGlmICh0aGlzLm93bmVyKSB7XHJcbiAgICAgIHRoaXMuX3NoYXBlLnBvc2l0aW9uLmNvcHlGcm9tKFxyXG4gICAgICAgIHRoaXMub3duZXIuZ2V0V29ybGRQb3NpdGlvbigpLnRvVmVjdG9yMigpLnN1YnRyYWN0KHRoaXMuX3NoYXBlLm9mZnNldClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWxsIHRoZSBjb2xsaXNpb24gbWFuYWdlciB0aGF0IHdlIGV4aXN0LlxyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5yZWdpc3RlckNvbGxpc2lvbkNvbXBvbmVudCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vd25lcikge1xyXG4gICAgICB0aGlzLl9zaGFwZS5wb3NpdGlvbi5jb3B5RnJvbShcclxuICAgICAgICB0aGlzLm93bmVyLmdldFdvcmxkUG9zaXRpb24oKS50b1ZlY3RvcjIoKS5zdWJ0cmFjdCh0aGlzLl9zaGFwZS5vZmZzZXQpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgLy9pZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAvL3RoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIC8vfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ29sbGlzaW9uRW50cnkob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge31cclxuICBwdWJsaWMgb25Db2xsaXNpb25VcGRhdGUob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge31cclxuICBwdWJsaWMgb25Db2xsaXNpb25FeGl0KG90aGVyOiBDb2xsaXNpb25Db21wb25lbnQpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZ2lzdGVyZWRCdWlsZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUNvbXBvbmVudEJ1aWxkZXIgfSA9XHJcbiAgICB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUNvbXBvbmVudEJ1aWxkZXIpOiB2b2lkIHtcclxuICAgIENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tidWlsZGVyLnR5cGVdID0gYnVpbGRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdENvbXBvbmVudChqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGlmIChqc29uLnR5cGUpIHtcclxuICAgICAgaWYgKENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tTdHJpbmcoanNvbi50eXBlKV0pIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdDb21wb25lbnQgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ0NvbXBvbmVudCBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNvdW5kRWZmZWN0IHtcclxuICBwcml2YXRlIF9wbGF5ZXI6IEhUTUxBdWRpb0VsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBhc3NldFBhdGg6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGFzc2V0UGF0aDogc3RyaW5nLCBsb29wOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgQXVkaW8oYXNzZXRQYXRoKTtcclxuICAgIHRoaXMuX3BsYXllci52b2x1bWUgPSAwLjA1O1xyXG4gICAgdGhpcy5hc3NldFBhdGggPSBhc3NldFBhdGg7XHJcbiAgICB0aGlzLl9wbGF5ZXIubG9vcCA9IGxvb3A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyLmxvb3A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3BsYXllci5sb29wID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX3BsYXllciA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1BhdXNlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGF5ZXIucGF1c2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gICAgdGhpcy5fcGxheWVyLmN1cnJlbnRUaW1lID0gMDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9zb3VuZEVmZmVjdHM6IHsgW25hbWU6IHN0cmluZ106IFNvdW5kRWZmZWN0IH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkU291bmRGaWxlKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgYXNzZXRQYXRoOiBzdHJpbmcsXHJcbiAgICBsb29wOiBib29sZWFuXHJcbiAgKTogdm9pZCB7XHJcbiAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSA9IG5ldyBTb3VuZEVmZmVjdChhc3NldFBhdGgsIGxvb3ApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwbGF5U291bmQobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0pIHtcclxuICAgICAgQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYGNvdWxkIG5vdCBwbGF5IHNvdW5kICR7bmFtZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcFNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGF1c2VTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSkge1xyXG4gICAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXS5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNvdW5kID0gQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV07XHJcbiAgICBpZiAoc291bmQpIHtcclxuICAgICAgc291bmQuaXNQYXVzZWQoKSA/IHNvdW5kLnBsYXkoKSA6IHNvdW5kLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQucGF1c2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdG9wQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfcmVnaXN0ZXJlZEJ1aWxkZXJzOiB7IFt0eXBlOiBzdHJpbmddOiBJQmVoYXZpb3JCdWlsZGVyIH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUJlaGF2aW9yQnVpbGRlcik6IHZvaWQge1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RCZWhhdmlvcihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgaWYgKGpzb24udHlwZSkge1xyXG4gICAgICBpZiAoQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIEJlaGF2aW9yTWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdCZWhhdmlvciBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAnQmVoYXZpb3IgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBlbnVtIEtleXMge1xyXG4gIExFRlQgPSAzNyxcclxuICBVUCA9IDM4LFxyXG4gIFJJR0hUID0gMzksXHJcbiAgRE9XTiA9IDQwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VDb250ZXh0IHtcclxuICBwdWJsaWMgbGVmdERvd246IGJvb2xlYW47XHJcbiAgcHVibGljIHJpZ2h0RG93bjogYm9vbGVhbjtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsZWZ0RG93bjogYm9vbGVhbiwgcmlnaHREb3duOiBib29sZWFuLCBwb3NpdGlvbjogVmVjdG9yMikge1xyXG4gICAgdGhpcy5sZWZ0RG93biA9IGxlZnREb3duO1xyXG4gICAgdGhpcy5yaWdodERvd24gPSByaWdodERvd247XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfa2V5czogYm9vbGVhbltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzTW91c2VYOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzTW91c2VZOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21vdXNlWDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9tb3VzZVk6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHREb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3Jlc29sdXRpb25TY2FsZTogVmVjdG9yMiA9IFZlY3RvcjIub25lO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUodmlld3BvcnQ6IEhUTUxDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgIElucHV0TWFuYWdlci5fa2V5c1tpXSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgSW5wdXRNYW5hZ2VyLm9uS2V5RG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBJbnB1dE1hbmFnZXIub25LZXlVcCk7XHJcblxyXG4gICAgdmlld3BvcnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgSW5wdXRNYW5hZ2VyLm9uTW91c2VNb3ZlKTtcclxuICAgIHZpZXdwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIElucHV0TWFuYWdlci5vbk1vdXNlRG93bik7XHJcbiAgICB2aWV3cG9ydC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgSW5wdXRNYW5hZ2VyLm9uTW91c2VVcCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzS2V5RG93bihrZXk6IEtleXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBJbnB1dE1hbmFnZXIuX2tleXNba2V5XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW91c2VQb3NpdGlvbigpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLl9tb3VzZVgsIHRoaXMuX21vdXNlWSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNldFJlc29sdXRpb25TY2FsZShzY2FsZTogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9yZXNvbHV0aW9uU2NhbGUuY29weUZyb20oc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX2tleXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX2tleXNbZXZlbnQua2V5Q29kZV0gPSBmYWxzZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX3ByZXZpb3VzTW91c2VYID0gSW5wdXRNYW5hZ2VyLl9tb3VzZVg7XHJcbiAgICBJbnB1dE1hbmFnZXIuX3ByZXZpb3VzTW91c2VZID0gSW5wdXRNYW5hZ2VyLl9tb3VzZVk7XHJcblxyXG4gICAgY29uc3QgcmVjdCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVggPVxyXG4gICAgICBldmVudC5jbGllbnRYIC1cclxuICAgICAgTWF0aC5yb3VuZChyZWN0LmxlZnQpICogKDEgLyBJbnB1dE1hbmFnZXIuX3Jlc29sdXRpb25TY2FsZS54KTtcclxuICAgIElucHV0TWFuYWdlci5fbW91c2VZID1cclxuICAgICAgZXZlbnQuY2xpZW50WSAtXHJcbiAgICAgIE1hdGgucm91bmQocmVjdC50b3ApICogKDEgLyBJbnB1dE1hbmFnZXIuX3Jlc29sdXRpb25TY2FsZS55KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgIElucHV0TWFuYWdlci5fbGVmdERvd24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9yaWdodERvd24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIE1lc3NhZ2Uuc2VuZChcclxuICAgICAgJ01PVVNFX0RPV04nLFxyXG4gICAgICB0aGlzLFxyXG4gICAgICBuZXcgTW91c2VDb250ZXh0KFxyXG4gICAgICAgIElucHV0TWFuYWdlci5fbGVmdERvd24sXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9yaWdodERvd24sXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLmdldE1vdXNlUG9zaXRpb24oKVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgIElucHV0TWFuYWdlci5fbGVmdERvd24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgIElucHV0TWFuYWdlci5fcmlnaHREb3duID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgTWVzc2FnZS5zZW5kKFxyXG4gICAgICAnTU9VU0VfVVAnLFxyXG4gICAgICB0aGlzLFxyXG4gICAgICBuZXcgTW91c2VDb250ZXh0KFxyXG4gICAgICAgIElucHV0TWFuYWdlci5fbGVmdERvd24sXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9yaWdodERvd24sXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLmdldE1vdXNlUG9zaXRpb24oKVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuLi93b3JsZC9zaW1PYmplY3QnO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VCZWhhdmlvciBpbXBsZW1lbnRzIElCZWhhdmlvciB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIF9kYXRhOiBJQmVoYXZpb3JEYXRhO1xyXG4gIHByb3RlY3RlZCBfb3duZXI6IFNpbU9iamVjdCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IElCZWhhdmlvckRhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5uYW1lID0gdGhpcy5fZGF0YS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE93bmVyKG93bmVyOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyID0gb3duZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlUmVhZHkoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgcHVibGljIGFwcGx5KHVzZXJEYXRhOiBhbnkpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXRNYW5hZ2VyLCBLZXlzIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JEYXRhIGltcGxlbWVudHMgSUJlaGF2aW9yRGF0YSB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMC4xO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIWpzb24ubmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYW1lID0gU3RyaW5nKGpzb24ubmFtZSk7XHJcblxyXG4gICAgaWYgKGpzb24uc3BlZWQpIHtcclxuICAgICAgdGhpcy5zcGVlZCA9IE51bWJlcihqc29uLnNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JCdWlsZGVyIGltcGxlbWVudHMgSUJlaGF2aW9yQnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ2tleWJvYXJkTW92ZW1lbnQnO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvciBleHRlbmRzIEJhc2VCZWhhdmlvciB7XHJcbiAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLnNwZWVkID0gZGF0YS5zcGVlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLkxFRlQpICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi54IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5SSUdIVCkgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLlVQKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuRE9XTikgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vdXNlQ29udGV4dCB9IGZyb20gJy4uL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VDbGlja0JlaGF2aW9yRGF0YSBpbXBsZW1lbnRzIElCZWhhdmlvckRhdGEge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgbWVzc2FnZUNvZGU6IHN0cmluZztcclxuXHJcbiAgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYW1lID0gU3RyaW5nKGpzb24ubmFtZSk7XHJcblxyXG4gICAgaWYgKGpzb24ud2lkdGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dpZHRoIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IE51bWJlcihqc29uLndpZHRoKTtcclxuXHJcbiAgICBpZiAoanNvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlaWdodCBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGVpZ2h0ID0gTnVtYmVyKGpzb24uaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAoanNvbi5tZXNzYWdlQ29kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZUNvZGUgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1lc3NhZ2VDb2RlID0gU3RyaW5nKGpzb24ubWVzc2FnZUNvZGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlQ2xpY2tCZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnbW91c2VDbGljayc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBNb3VzZUNsaWNrQmVoYXZpb3Ige1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgTW91c2VDbGlja0JlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgTW91c2VDbGlja0JlaGF2aW9yKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlQ2xpY2tCZWhhdmlvclxyXG4gIGV4dGVuZHMgQmFzZUJlaGF2aW9yXHJcbiAgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXJcclxue1xyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbWVzc2FnZUNvZGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IE1vdXNlQ2xpY2tCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX3dpZHRoID0gZGF0YS53aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgdGhpcy5fbWVzc2FnZUNvZGUgPSBkYXRhLm1lc3NhZ2VDb2RlO1xyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoJ01PVVNFX1VQJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09ICdNT1VTRV9VUCcpIHtcclxuICAgICAgaWYgKHRoaXMuX293bmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9vd25lci5pc1Zpc2libGUpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb250ZXh0ID0gbWVzc2FnZS5jb250ZXh0IGFzIE1vdXNlQ29udGV4dDtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLl9vd25lci5nZXRXb3JsZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGV4dGVudFggPSB3b3JsZFBvcy54ICsgdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgbGV0IGV4dGVudFkgPSB3b3JsZFBvcy55ICsgdGhpcy5faGVpZ2h0O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNvbnRleHQucG9zaXRpb24ueCA+PSB3b3JsZFBvcy54ICYmXHJcbiAgICAgICAgICBjb250ZXh0LnBvc2l0aW9uLnggPD0gZXh0ZW50WCAmJlxyXG4gICAgICAgICAgY29udGV4dC5wb3NpdGlvbi55ID49IHdvcmxkUG9zLnkgJiZcclxuICAgICAgICAgIGNvbnRleHQucG9zaXRpb24ueSA8PSBleHRlbnRZXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBNZXNzYWdlLnNlbmQodGhpcy5fbWVzc2FnZUNvZGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTWF0aEV4dGVuc2lvbnMge1xyXG4gIHB1YmxpYyBzdGF0aWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlZ1RvUmFkKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MC4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByYWRUb0RlZyhyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChyYWRpYW5zICogMTgwLjApIC8gTWF0aC5QSTtcclxuICB9XHJcbn1cclxuXHJcbi8vKE1hdGggYXMgYW55KS5jbGFtcCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4vL2lmICh2YWx1ZSA8IG1pbikge1xyXG4vL3JldHVybiBtaW47XHJcbi8vfVxyXG5cclxuLy9pZiAodmFsdWUgPiBtYXgpIHtcclxuLy9yZXR1cm4gbWF4O1xyXG4vL31cclxuXHJcbi8vcmV0dXJuIHZhbHVlO1xyXG4vL307XHJcblxyXG4vLyhNYXRoIGFzIGFueSkuZGVnVG9SYWQgPSAoZGVncmVlczogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuLy9yZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MC4wO1xyXG4vL307XHJcblxyXG4vLyhNYXRoIGFzIGFueSkucmFkVG9EZWcgPSAocmFkaWFuczogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuLy9yZXR1cm4gKHJhZGlhbnMgKiAxODAuMCkgLyBNYXRoLlBJO1xyXG4vL307XHJcbiIsImltcG9ydCB7IENvbGxpc2lvbkRhdGEgfSBmcm9tICcuLi8uLi9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlcic7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hbmltYXRlZFNwcml0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gJy4uL2F1ZGlvL2F1ZGlvTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGhFeHRlbnNpb25zIH0gZnJvbSAnLi4vbWF0aC9tYXRoRXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGFjY2VsZXJhdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAsIDkyMCk7XHJcbiAgcHVibGljIHBsYXllckNvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGdyb3VuZENvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGFuaW1hdGVkU3ByaXRlTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNjb3JlQ29sbGlzaW9uQ29tcG9uZW50OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFqc29uLm5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLmFjY2VsZXJhdGlvbikge1xyXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbi5zZXRGcm9tSnNvbihqc29uLmFjY2VsZXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFqc29uLmFuaW1hdGVkU3ByaXRlTmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuaW1hdGVkU3ByaXRlTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGVkU3ByaXRlTmFtZSA9IFN0cmluZyhqc29uLmFuaW1hdGVkU3ByaXRlTmFtZSk7XHJcblxyXG4gICAgaWYgKCFqc29uLnBsYXllckNvbGxpc2lvbkNvbXBvbmVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ3BsYXllckNvbGxpc2lvbkNvbXBvbmVudCBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQgPSBTdHJpbmcoanNvbi5wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQpO1xyXG5cclxuICAgIGlmICghanNvbi5ncm91bmRDb2xsaXNpb25Db21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdncm91bmRDb2xsaXNpb25Db21wb25lbnQgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50ID0gU3RyaW5nKGpzb24uZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoIWpzb24uc2NvcmVDb2xsaXNpb25Db21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdzY29yZUNvbGxpc2lvbkNvbXBvbmVudCBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY29yZUNvbGxpc2lvbkNvbXBvbmVudCA9IFN0cmluZyhqc29uLnNjb3JlQ29sbGlzaW9uQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJCZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAncGxheWVyJztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUJlaGF2aW9yIHtcclxuICAgIGxldCBkYXRhID0gbmV3IFBsYXllckJlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgUGxheWVyQmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQmVoYXZpb3IgZXh0ZW5kcyBCYXNlQmVoYXZpb3IgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX2FjY2VsZXJhdGlvbjogVmVjdG9yMjtcclxuICBwcml2YXRlIF92ZWxvY2l0eSA9IFZlY3RvcjIuemVybztcclxuICBwcml2YXRlIF9pc0FsaXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YXRlIF9wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQ6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX2dyb3VuZENvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBfc2NvcmVDb2xsaXNpb25Db21wb25lbnQ6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX2FuaW1hdGVkU3ByaXRlTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBfaXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHByaXZhdGUgX3Njb3JlOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2hpZ2hTY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBBbmltYXRlZFNwcml0ZUNvbXBvbmVudDtcclxuICBwcml2YXRlIF9waXBlTmFtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ3BpcGUxQ29sbGlzaW9uRW5kVG9wJyxcclxuICAgICdwaXBlMUNvbGxpc2lvbkJvZHlUb3AnLFxyXG4gICAgJ3BpcGUxQ29sbGlzaW9uRW5kQm90dG9tJyxcclxuICAgICdwaXBlMUNvbGxpc2lvbkJvZHlCb3R0b20nLFxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBQbGF5ZXJCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX2FjY2VsZXJhdGlvbiA9IGRhdGEuYWNjZWxlcmF0aW9uO1xyXG4gICAgdGhpcy5fcGxheWVyQ29sbGlzaW9uQ29tcG9uZW50ID0gZGF0YS5wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQ7XHJcbiAgICB0aGlzLl9ncm91bmRDb2xsaXNpb25Db21wb25lbnQgPSBkYXRhLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudDtcclxuICAgIHRoaXMuX3Njb3JlQ29sbGlzaW9uQ29tcG9uZW50ID0gZGF0YS5zY29yZUNvbGxpc2lvbkNvbXBvbmVudDtcclxuICAgIHRoaXMuX2FuaW1hdGVkU3ByaXRlTmFtZSA9IGRhdGEuYW5pbWF0ZWRTcHJpdGVOYW1lO1xyXG5cclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKCdNT1VTRV9ET1dOJywgdGhpcyk7XHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZSgnQ09MTElTSU9OX0VOVFJZJywgdGhpcyk7XHJcblxyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoJ0dBTUVfUkVBRFknLCB0aGlzKTtcclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKCdHQU1FX1JFU0VUJywgdGhpcyk7XHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZSgnR0FNRV9TVEFSVCcsIHRoaXMpO1xyXG5cclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKCdQTEFZRVJfRElFRCcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge1xyXG4gICAgc3VwZXIudXBkYXRlUmVhZHkoKTtcclxuXHJcbiAgICAvLyBPYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIGFuaW1hdGVkIHNwcml0ZVxyXG4gICAgdGhpcy5fc3ByaXRlID0gdGhpcy5fb3duZXI/LmdldENvbXBvbmVudEJ5TmFtZShcclxuICAgICAgdGhpcy5fYW5pbWF0ZWRTcHJpdGVOYW1lXHJcbiAgICApIGFzIEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50O1xyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSBzcHJpdGUgYW5pbWF0aW9uIHBsYXlzIHJpZ2h0IGF3YXlcclxuICAgIHRoaXMuX3Nwcml0ZS5zZXRGcmFtZSgwKTtcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsUG9zaXRpb24uY29weUZyb20odGhpcy5fb3duZXIhLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3ByaXRlUmVhZHkgPSB0aGlzLl9vd25lcj8uZ2V0Q29tcG9uZW50QnlOYW1lKFxyXG4gICAgICB0aGlzLl9hbmltYXRlZFNwcml0ZU5hbWVcclxuICAgICk7XHJcbiAgICBpZiAoIXNwcml0ZVJlYWR5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fb3duZXIpIHtcclxuICAgICAgY29uc3Qgc2Vjb25kczogbnVtYmVyID0gdGltZSAvIDEwMDA7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkuYWRkKHRoaXMuX2FjY2VsZXJhdGlvbi5jbG9uZSgpLnNjYWxlKHNlY29uZHMpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTGltaXQgbWF4IHNwZWVkIG9mIGZhbGxpbmdcclxuICAgICAgaWYgKHRoaXMuX3ZlbG9jaXR5LnkgPiA0MDApIHtcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eS55ID0gNDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcmV2ZW50IGZseWluZyB0b28gaGlnaFxyXG4gICAgICBpZiAodGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnkgPCAtMTMpIHtcclxuICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IC0xMztcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eS55ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fb3duZXI/LnRyYW5zZm9ybS5wb3NpdGlvbi5hZGQoXHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkuY2xvbmUoKS5zY2FsZShzZWNvbmRzKS50b1ZlY3RvcjMoKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3ZlbG9jaXR5LnkgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogLT1cclxuICAgICAgICAgIE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKDYwMC4wKSAqIHNlY29uZHM7XHJcbiAgICAgICAgaWYgKHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56IDwgTWF0aEV4dGVuc2lvbnMuZGVnVG9SYWQoLTIwKSkge1xyXG4gICAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogPSBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCgtMjApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaXNGYWxsaW5nKCkgfHwgIXRoaXMuX2lzQWxpdmUpIHtcclxuICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiArPVxyXG4gICAgICAgICAgTWF0aEV4dGVuc2lvbnMuZGVnVG9SYWQoNDgwLjApICogc2Vjb25kcztcclxuICAgICAgICBpZiAodGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogPiBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCg5MCkpIHtcclxuICAgICAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gTWF0aEV4dGVuc2lvbnMuZGVnVG9SYWQoOTApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc2hvdWxkTm90RmxhcCgpKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLnN0b3AoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Nwcml0ZS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgIHRoaXMuX3Nwcml0ZS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAobWVzc2FnZS5jb2RlKSB7XHJcbiAgICAgIGNhc2UgJ01PVVNFX0RPV04nOlxyXG4gICAgICAgIHRoaXMub25GbGFwKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0NPTExJU0lPTl9FTlRSWSc6XHJcbiAgICAgICAgY29uc3QgZGF0YTogQ29sbGlzaW9uRGF0YSA9IG1lc3NhZ2UuY29udGV4dCBhcyBDb2xsaXNpb25EYXRhO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkYXRhLmE/Lm5hbWUgIT09IHRoaXMuX3BsYXllckNvbGxpc2lvbkNvbXBvbmVudCAmJlxyXG4gICAgICAgICAgZGF0YS5iPy5uYW1lICE9PSB0aGlzLl9wbGF5ZXJDb2xsaXNpb25Db21wb25lbnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGRhdGE/LmE/Lm5hbWUgPT09IHRoaXMuX2dyb3VuZENvbGxpc2lvbkNvbXBvbmVudCB8fFxyXG4gICAgICAgICAgZGF0YT8uYj8ubmFtZSA9PT0gdGhpcy5fZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmRpZSgpO1xyXG4gICAgICAgICAgdGhpcy5kZWNlbGVyYXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHRoaXMuX3BpcGVOYW1lcy5pbmRleE9mKGRhdGEuYSEubmFtZSkgIT09IC0xIHx8XHJcbiAgICAgICAgICB0aGlzLl9waXBlTmFtZXMuaW5kZXhPZihkYXRhLmIhLm5hbWUpICE9PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgZGF0YT8uYT8ubmFtZSA9PT0gdGhpcy5fc2NvcmVDb2xsaXNpb25Db21wb25lbnQgfHxcclxuICAgICAgICAgIGRhdGE/LmI/Lm5hbWUgPT09IHRoaXMuX3Njb3JlQ29sbGlzaW9uQ29tcG9uZW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5faXNBbGl2ZSAmJiB0aGlzLl9pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTY29yZSh0aGlzLl9zY29yZSArIDEpO1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKCd0aW5nJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gU2hvdyB0aGUgdHV0b3JpYWwsIGNsaWNrIHRvIEdBTUVfU1RBUlRcclxuICAgICAgY2FzZSAnR0FNRV9SRVNFVCc6XHJcbiAgICAgICAgTWVzc2FnZS5zZW5kKCdHQU1FX0hJREUnLCB0aGlzKTtcclxuICAgICAgICBNZXNzYWdlLnNlbmQoJ1JFU0VUX0hJREUnLCB0aGlzKTtcclxuICAgICAgICBNZXNzYWdlLnNlbmQoJ1NQTEFTSF9ISURFJywgdGhpcyk7XHJcbiAgICAgICAgTWVzc2FnZS5zZW5kKCdUVVRPUklBTF9TSE9XJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gU3RhcnRzIHRoZSBtYWluIGdhbWVcclxuICAgICAgY2FzZSAnR0FNRV9TVEFSVCc6XHJcbiAgICAgICAgTWVzc2FnZS5zZW5kKCdHQU1FX1NIT1cnLCB0aGlzKTtcclxuICAgICAgICBNZXNzYWdlLnNlbmQoJ1JFU0VUX0hJREUnLCB0aGlzKTtcclxuICAgICAgICBNZXNzYWdlLnNlbmQoJ1NQTEFTSF9ISURFJywgdGhpcyk7XHJcbiAgICAgICAgTWVzc2FnZS5zZW5kKCdUVVRPUklBTF9ISURFJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9pc0FsaXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBMZXZlbCBpcyBsb2FkZWQsIHNob3cgcGxheSBidXR0b24gLyBzcGxhc2ggc2NyZWVuXHJcbiAgICAgIGNhc2UgJ0dBTUVfUkVBRFknOlxyXG4gICAgICAgIE1lc3NhZ2Uuc2VuZCgnR0FNRV9ISURFJywgdGhpcyk7XHJcbiAgICAgICAgTWVzc2FnZS5zZW5kKCdSRVNFVF9ISURFJywgdGhpcyk7XHJcbiAgICAgICAgTWVzc2FnZS5zZW5kKCdTUExBU0hfU0hPVycsIHRoaXMpO1xyXG4gICAgICAgIE1lc3NhZ2Uuc2VuZCgnVFVUT1JJQUxfSElERScsIHRoaXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnUExBWUVSX0RJRUQnOlxyXG4gICAgICAgIE1lc3NhZ2Uuc2VuZCgnUkVTRVRfU0hPVycsIHRoaXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0ZhbGxpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVsb2NpdHkueSA+IDIyMC4wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG91bGROb3RGbGFwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLl9pc1BsYXlpbmcgfHwgdGhpcy5fdmVsb2NpdHkueSA+IDIyMC4wIHx8ICF0aGlzLl9pc0FsaXZlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faXNBbGl2ZSkge1xyXG4gICAgICB0aGlzLl9pc0FsaXZlID0gZmFsc2U7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ2RlYWQnKTtcclxuICAgICAgQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZCgnbXVzaWMnKTtcclxuICAgICAgTWVzc2FnZS5zZW5kKCdQTEFZRVJfRElFRCcsIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzQWxpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zcHJpdGUub3duZXIhLnRyYW5zZm9ybS5wb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9pbml0aWFsUG9zaXRpb24pO1xyXG4gICAgdGhpcy5fc3ByaXRlLm93bmVyIS50cmFuc2Zvcm0ucm90YXRpb24ueiA9IDA7XHJcbiAgICB0aGlzLnNldFNjb3JlKDApO1xyXG5cclxuICAgIHRoaXMuX3ZlbG9jaXR5LnNldCgwLCAwKTtcclxuICAgIHRoaXMuX2FjY2VsZXJhdGlvbi5zZXQoMCwgOTIwKTtcclxuICAgIHRoaXMuX3Nwcml0ZS5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ211c2ljJyk7XHJcbiAgICBNZXNzYWdlLnNlbmQoJ1BMQVlFUl9SRVNFVCcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWNlbGVyYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uLnkgPSAwO1xyXG4gICAgdGhpcy5fdmVsb2NpdHkueSA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmxhcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc0FsaXZlICYmIHRoaXMuX2lzUGxheWluZykge1xyXG4gICAgICB0aGlzLl92ZWxvY2l0eS55ID0gLTI4MDtcclxuICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnZmxhcCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTY29yZShzY29yZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG4gICAgTWVzc2FnZS5zZW5kKCdjb3VudGVyVGV4dDpTZXRUZXh0JywgdGhpcywgdGhpcy5fc2NvcmUpO1xyXG4gICAgTWVzc2FnZS5zZW5kKCdzY29yZVRleHQ6U2V0VGV4dCcsIHRoaXMsIHRoaXMuX3Njb3JlKTtcclxuXHJcbiAgICBpZiAodGhpcy5fc2NvcmUgPiB0aGlzLl9oaWdoU2NvcmUpIHtcclxuICAgICAgdGhpcy5faGlnaFNjb3JlID0gdGhpcy5fc2NvcmU7XHJcbiAgICAgIE1lc3NhZ2Uuc2VuZCgnYmVzdFRleHQ6U2V0VGV4dCcsIHRoaXMsIHRoaXMuX2hpZ2hTY29yZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjMnO1xyXG5pbXBvcnQgeyBCYXNlQmVoYXZpb3IgfSBmcm9tICcuL2Jhc2VCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uQmVoYXZpb3JEYXRhIGltcGxlbWVudHMgSUJlaGF2aW9yRGF0YSB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgcm90YXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24uc2V0RnJvbUpzb24oanNvbi5yb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAncm90YXRpb24nO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgUm90YXRpb25CZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IFJvdGF0aW9uQmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvciBleHRlbmRzIEJhc2VCZWhhdmlvciB7XHJcbiAgcHJpdmF0ZSBfcm90YXRpb246IFZlY3RvcjM7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBSb3RhdGlvbkJlaGF2aW9yRGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgdGhpcy5fcm90YXRpb24gPSBkYXRhLnJvdGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyPy50cmFuc2Zvcm0ucm90YXRpb24uYWRkKHRoaXMuX3JvdGF0aW9uKTtcclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBCYXNlQmVoYXZpb3IgfSBmcm9tICcuL2Jhc2VCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEJlaGF2aW9yRGF0YSBpbXBsZW1lbnRzIElCZWhhdmlvckRhdGEge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwdWJsaWMgbWluUG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHVibGljIHJlc2V0UG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBtaW5SZXNldFk6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIG1heFJlc2V0WTogbnVtYmVyO1xyXG4gIHB1YmxpYyBzdGFydE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgc3RvcE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgcmVzZXRNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBub3QgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnN0YXJ0TWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRNZXNzYWdlID0gU3RyaW5nKGpzb24uc3RhcnRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5zdG9wTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc3RvcE1lc3NhZ2UgPSBTdHJpbmcoanNvbi5zdG9wTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ucmVzZXRNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5yZXNldE1lc3NhZ2UgPSBTdHJpbmcoanNvbi5yZXNldE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnZlbG9jaXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52ZWxvY2l0eS5zZXRGcm9tSnNvbihqc29uLnZlbG9jaXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnU2Nyb2xsQmVoYXZpb3JEYXRhIHJlcXVpcmVzIHByb3BlcnR5IFwidmVsb2NpdHlcIiB0byBiZSBkZWZpbmVkLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5taW5Qb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMubWluUG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5taW5Qb3NpdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1Njcm9sbEJlaGF2aW9yRGF0YSByZXF1aXJlcyBwcm9wZXJ0eSBcIm1pblBvc2l0aW9uXCIgdG8gYmUgZGVmaW5lZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ucmVzZXRQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnJlc2V0UG9zaXRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdTY3JvbGxCZWhhdmlvckRhdGEgcmVxdWlyZXMgcHJvcGVydHkgXCJyZXNldFBvc2l0aW9uXCIgdG8gYmUgZGVmaW5lZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ubWluUmVzZXRZICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5taW5SZXNldFkgPSBOdW1iZXIoanNvbi5taW5SZXNldFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLm1heFJlc2V0WSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMubWF4UmVzZXRZID0gTnVtYmVyKGpzb24ubWF4UmVzZXRZKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxCZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnc2Nyb2xsJztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUJlaGF2aW9yIHtcclxuICAgIGxldCBkYXRhID0gbmV3IFNjcm9sbEJlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgU2Nyb2xsQmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmVoYXZpb3IgZXh0ZW5kcyBCYXNlQmVoYXZpb3IgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX3ZlbG9jaXR5OiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHByaXZhdGUgX21pblBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHByaXZhdGUgX3Jlc2V0UG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX21pblJlc2V0WTogbnVtYmVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9tYXhSZXNldFk6IG51bWJlcjtcclxuICBwcml2YXRlIF9zdGFydE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9zdG9wTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3Jlc2V0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2lzU2Nyb2xsaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogU2Nyb2xsQmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl92ZWxvY2l0eS5jb3B5RnJvbShkYXRhLnZlbG9jaXR5KTtcclxuICAgIHRoaXMuX21pblBvc2l0aW9uLmNvcHlGcm9tKGRhdGEubWluUG9zaXRpb24pO1xyXG4gICAgdGhpcy5fcmVzZXRQb3NpdGlvbi5jb3B5RnJvbShkYXRhLnJlc2V0UG9zaXRpb24pO1xyXG4gICAgdGhpcy5fc3RhcnRNZXNzYWdlID0gZGF0YS5zdGFydE1lc3NhZ2U7XHJcbiAgICB0aGlzLl9zdG9wTWVzc2FnZSA9IGRhdGEuc3RvcE1lc3NhZ2U7XHJcbiAgICB0aGlzLl9yZXNldE1lc3NhZ2UgPSBkYXRhLnJlc2V0TWVzc2FnZTtcclxuXHJcbiAgICBpZiAoZGF0YS5taW5SZXNldFkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9taW5SZXNldFkgPSBkYXRhLm1pblJlc2V0WTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5tYXhSZXNldFkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9tYXhSZXNldFkgPSBkYXRhLm1heFJlc2V0WTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLnVwZGF0ZVJlYWR5KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3N0YXJ0TWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKHRoaXMuX3N0YXJ0TWVzc2FnZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3N0b3BNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgTWVzc2FnZS5zdWJzY3JpYmUodGhpcy5fc3RvcE1lc3NhZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9yZXNldE1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBNZXNzYWdlLnN1YnNjcmliZSh0aGlzLl9yZXNldE1lc3NhZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2luaXRpYWxQb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uLnRvVmVjdG9yMigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faXNTY3JvbGxpbmcpIHtcclxuICAgICAgdGhpcy5fb3duZXIhLnRyYW5zZm9ybS5wb3NpdGlvbi5hZGQoXHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHlcclxuICAgICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgICAuc2NhbGUodGltZSAvIDEwMDApXHJcbiAgICAgICAgICAudG9WZWN0b3IzKClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IHNjcm9sbFkgPVxyXG4gICAgICAgIHRoaXMuX21pblJlc2V0WSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX21heFJlc2V0WSAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuX293bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24ueCA8PSB0aGlzLl9taW5Qb3NpdGlvbi54ICYmXHJcbiAgICAgICAgKHNjcm9sbFkgfHxcclxuICAgICAgICAgICghc2Nyb2xsWSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uLnkgPD0gdGhpcy5fbWluUG9zaXRpb24ueSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT0gdGhpcy5fc3RhcnRNZXNzYWdlKSB7XHJcbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZS5jb2RlID09IHRoaXMuX3N0b3BNZXNzYWdlKSB7XHJcbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PSB0aGlzLl9yZXNldE1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5pbml0aWFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX21pblJlc2V0WSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX21heFJlc2V0WSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX293bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIHRoaXMuX3Jlc2V0UG9zaXRpb24ueCxcclxuICAgICAgICB0aGlzLmdldFJhbmRvbVkoKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fb3duZXIhLnRyYW5zZm9ybS5wb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9yZXNldFBvc2l0aW9uLnRvVmVjdG9yMygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmFuZG9tWSgpOiBudW1iZXIge1xyXG4gICAgLy8gSW5jbHVzaXZlIG9mIG1pbiBhbmQgbWF4IHNldCBpbiB0aGUgZGF0YVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuX21heFJlc2V0WSAtIHRoaXMuX21pblJlc2V0WSArIDEpKSArXHJcbiAgICAgIHRoaXMuX21pblJlc2V0WVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24uY29weUZyb20odGhpcy5faW5pdGlhbFBvc2l0aW9uLnRvVmVjdG9yMygpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXNpYmlsaXR5T25NZXNzYWdlQmVoYXZpb3JEYXRhIGltcGxlbWVudHMgSUJlaGF2aW9yRGF0YSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBtZXNzYWdlQ29kZTogc3RyaW5nO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5tZXNzYWdlQ29kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnVmlzaWJpbGl0eU9uTWVzc2FnZUJlaGF2aW9yRGF0YSByZXF1aXJlcyBcIm1lc3NhZ2VDb2RlXCIgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1lc3NhZ2VDb2RlID0gU3RyaW5nKGpzb24ubWVzc2FnZUNvZGUpO1xyXG5cclxuICAgIGlmIChqc29uLnZpc2libGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1Zpc2liaWxpdHlPbk1lc3NhZ2VCZWhhdmlvckRhdGEgcmVxdWlyZXMgXCJ2aXNpYmxlXCIgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZpc2libGUgPSBCb29sZWFuKGpzb24udmlzaWJsZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzaWJpbGl0eU9uTWVzc2FnZUJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICd2aXNpYmlsaXR5T25NZXNzYWdlJztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUJlaGF2aW9yIHtcclxuICAgIGxldCBkYXRhID0gbmV3IFZpc2liaWxpdHlPbk1lc3NhZ2VCZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IFZpc2liaWxpdHlPbk1lc3NhZ2VCZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXNpYmlsaXR5T25NZXNzYWdlQmVoYXZpb3JcclxuICBleHRlbmRzIEJhc2VCZWhhdmlvclxyXG4gIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyXHJcbntcclxuICBwcml2YXRlIF9tZXNzYWdlQ29kZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Zpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBWaXNpYmlsaXR5T25NZXNzYWdlQmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9tZXNzYWdlQ29kZSA9IGRhdGEubWVzc2FnZUNvZGU7XHJcbiAgICB0aGlzLl92aXNpYmxlID0gZGF0YS52aXNpYmxlO1xyXG5cclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKHRoaXMuX21lc3NhZ2VDb2RlLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PT0gdGhpcy5fbWVzc2FnZUNvZGUpIHtcclxuICAgICAgaWYgKHRoaXMuX293bmVyKSB7XHJcbiAgICAgICAgdGhpcy5fb3duZXIuaXNWaXNpYmxlID0gdGhpcy5fdmlzaWJsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4vZ2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBzaGFkZXIuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hhZGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3Byb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gIHByaXZhdGUgX3VuaWZvcm1zOiB7IFtuYW1lOiBzdHJpbmddOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB9ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzaGFkZXIuXHJcbiAgICogQHBhcmFtIHZlcnRleFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBmcmFnbWVudFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBmcmFnbWVudCBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2UoKTogdm9pZCB7XHJcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbG9jYXRpb24gb2YgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIG5hbWVcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIHJldHJpZXZlXHJcbiAgICogQHJldHVybnMgQW4gYXR0cmlidXRlXHJcbiAgICovXHJcbiAgcHVibGljIGdldEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5fYXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgYXR0cmlidXRlIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVbmlmb3JtTG9jYXRpb24obmFtZTogc3RyaW5nKTogV2ViR0xVbmlmb3JtTG9jYXRpb24ge1xyXG4gICAgaWYgKHRoaXMuX3VuaWZvcm1zW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBVbmFibGUgdG8gZmluZCB1bmlmb3JtIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fdW5pZm9ybXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZCh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHZlcnRleFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLmRldGVjdEF0dHJpYnV0ZXMoKTtcclxuICAgIHRoaXMuZGV0ZWN0VW5pZm9ybXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFNoYWRlcihzb3VyY2U6IHN0cmluZywgc2hhZGVyVHlwZTogbnVtYmVyKTogV2ViR0xTaGFkZXIge1xyXG4gICAgbGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSkgYXMgV2ViR0xTaGFkZXI7XHJcblxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgIGxldCBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKT8udHJpbSgpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgY29tcGlsaW5nIHNoYWRlcjogJyArIHRoaXMuX25hbWUgKyAnOiAnICsgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoYWRlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUHJvZ3JhbShcclxuICAgIHZlcnRleFNoYWRlcjogV2ViR0xTaGFkZXIsXHJcbiAgICBmcmFnbWVudFNoYWRlcjogV2ViR0xTaGFkZXJcclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMuX3Byb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCkgYXMgV2ViR0xQcm9ncmFtO1xyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLl9wcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMuX3Byb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuXHJcbiAgICBjb25zdCBlcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMuX3Byb2dyYW0pPy50cmltKCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJyb3IgbGlua2luZyBzaGFkZXIgJyArIHRoaXMuX25hbWUgKyAnOiAnICsgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RBdHRyaWJ1dGVzKCk6IHZvaWQge1xyXG4gICAgLy8gZ2l2ZXMgYWxsIGF0dHJpYnV0ZXMgaW4gdGhlIHNoYWRlclxyXG4gICAgY29uc3QgYXR0cmlidXRlQ291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKFxyXG4gICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICBnbC5BQ1RJVkVfQVRUUklCVVRFU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgYXR0cmlidXRlSW5mbzogV2ViR0xBY3RpdmVJbmZvID0gZ2wuZ2V0QWN0aXZlQXR0cmliKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCFhdHRyaWJ1dGVJbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJpYnV0ZUluZm8ubmFtZV0gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGF0dHJpYnV0ZUluZm8ubmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RVbmlmb3JtcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVuaWZvcm1Db3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9VTklGT1JNU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1Db3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHVuaWZvcm1JbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCF1bmlmb3JtSW5mbykge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQb3B1bGF0ZXMgX2F0dHJpYnVlcyB3aXRoIGVhY2ggYXR0cmlidXRlIGFzIGFzIHRoZSB2YWx1ZSBhbmQgdGhlIGF0dHJpYnV0ZSBuYW1lIGFzIHRoZSBrZXlcclxuICAgICAgdGhpcy5fdW5pZm9ybXNbdW5pZm9ybUluZm8ubmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICB1bmlmb3JtSW5mby5uYW1lXHJcbiAgICAgICkgYXMgV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL3NoYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWNTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdiYXNpYycpO1xyXG5cclxuICAgIHRoaXMubG9hZCh0aGlzLmdldFZlcnRleFNvdXJjZSgpLCB0aGlzLmdldEZyYWdtZW50U291cmNlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWZXJ0ZXhTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjMyBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuXHJcbiAgICB1bmlmb3JtIG1hdDQgdV9wcm9qZWN0aW9uO1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVfbW9kZWw7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcblxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICBnbF9Qb3NpdGlvbiA9IHVfcHJvamVjdGlvbiAqIHVfbW9kZWwgKiB2ZWM0KGFfcG9zaXRpb24sIDEuMCk7XHJcbiAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RnJhZ21lbnRTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHJcbiAgICB1bmlmb3JtIHZlYzQgdV90aW50O1xyXG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdV9kaWZmdXNlO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHVfdGludCAqIHRleHR1cmUyRCh1X2RpZmZ1c2UsIHZfdGV4Q29vcmQpO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4NHg0IHtcclxuICBwcml2YXRlIF9kYXRhOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gSWRlbnRpdHkgbWF0cml4IChkZWZhdWx0IG1hdHJpeClcclxuICAgIHRoaXMuX2RhdGEgPSBbXHJcbiAgICAgIC8vIHJvdyAxXHJcbiAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAyXHJcbiAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAzXHJcbiAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgIC8vIHJvdyA0XHJcbiAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkYXRhKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBNYXRyaXg0eDQge1xyXG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0eDQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9ydGhvZ3JhcGhpYyBtYXRyaXhcclxuICAgKiBObyBwZXJzcGVjdGl2ZSwgcmVuZGVycyBzb21ldGhpbmcgYXMgaWYgaXQgaXMgZmxhdCBpbiBzcGFjZVxyXG4gICAqIEBwYXJhbSBsZWZ0IHBvc2l0aW9uIGZyb20gbGVmdCBvZiBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMClcclxuICAgKiBAcGFyYW0gcmlnaHQgZGlzdGFuY2UgdG8gcmlnaHQgc2lkZSBvZiBzY3JlZW4gZnJvbSB0aGUgbGVmdCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxOTIwKVxyXG4gICAqIEBwYXJhbSBib3R0b20gcG9zaXRpb24gZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMCkgd2ViZ2wgc3RhcnRzIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXHJcbiAgICogQHBhcmFtIHRvcCBwb3NpdGlvbiBmcm9tIGJvdHRvbSBvZiBzY3JlZW4gdG8gdGhlIHRvcCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxMDgwKVxyXG4gICAqIEBwYXJhbSBuZWFyQ2xpcCBzb21ldGhpbmcgbmVnYXRpdmUgKHRvIHByZXZlbnQgY2xpcHBpbmcgaW4gZnJvbnQpXHJcbiAgICogQHBhcmFtIGZhckNsaXAgYXJiaXRyYXJ5IG51bWJlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3J0aG9ncmFwaGljKFxyXG4gICAgbGVmdDogbnVtYmVyLFxyXG4gICAgcmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgdG9wOiBudW1iZXIsXHJcbiAgICBuZWFyQ2xpcDogbnVtYmVyLFxyXG4gICAgZmFyQ2xpcDogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGNvbnN0IGxyOiBudW1iZXIgPSAxLjAgLyAobGVmdCAtIHJpZ2h0KTtcclxuICAgIGNvbnN0IGJ0OiBudW1iZXIgPSAxLjAgLyAoYm90dG9tIC0gdG9wKTtcclxuICAgIGNvbnN0IG5mOiBudW1iZXIgPSAxLjAgLyAobmVhckNsaXAgLSBmYXJDbGlwKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gLTIuMCAqIGxyO1xyXG4gICAgbS5fZGF0YVs1XSA9IC0yLjAgKiBidDtcclxuICAgIG0uX2RhdGFbMTBdID0gMi4wICogbmY7XHJcblxyXG4gICAgbS5fZGF0YVsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xyXG4gICAgbS5fZGF0YVsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xyXG4gICAgbS5fZGF0YVsxNF0gPSAoZmFyQ2xpcCArIG5lYXJDbGlwKSAqIG5mO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXRyaXggdGhhdCBob2xkcyBkYXRhIHRoYXQgcmVwcmVzZW50cyBtb3ZlbWVudCBvZiBhbiBvYmplY3RcclxuICAgKiB0aHJvdWdoIHNwYWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRpb24ocG9zaXRpb246IFZlY3RvcjMpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgLy8gZWRpdGluZyAxc3QgMyBudW1iZXJzIGluIGxhc3Qgcm93IG9mIG1hdHJpeDRcclxuICAgIG0uX2RhdGFbMTJdID0gcG9zaXRpb24ueDtcclxuICAgIG0uX2RhdGFbMTNdID0gcG9zaXRpb24ueTtcclxuICAgIG0uX2RhdGFbMTRdID0gcG9zaXRpb24uejtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSByb3RhdGlvbiBtYXRyaXggb24gdGhlIFggYXhpcyBmcm9tIHRoZSBwcm92aWRlZCBhbmdsZSBpbiByYWRpYW5zLlxyXG4gICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFucy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWChhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcbiAgICBtLl9kYXRhWzZdID0gcztcclxuICAgIG0uX2RhdGFbOV0gPSAtcztcclxuICAgIG0uX2RhdGFbMTBdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25ZKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMl0gPSAtcztcclxuICAgIG0uX2RhdGFbOF0gPSBzO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblooYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICAvLyByYWRpYW5zIGFyZSB1c2VkIGluIGFsbW9zdCBhbGwgbWF0aCBsaWJyYXJpZXMgYmVjYXVzZSBpdCBpcyBtb3JlIHBlcmZvcm1hbnRcclxuICAgIC8vIHVuZGVyIHRoZSBob29kXHJcblxyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMV0gPSBzO1xyXG4gICAgbS5fZGF0YVs0XSA9IC1zO1xyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWFlaKFxyXG4gICAgeFJhZGlhbnM6IG51bWJlcixcclxuICAgIHlSYWRpYW5zOiBudW1iZXIsXHJcbiAgICB6UmFkaWFuczogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGNvbnN0IHJ4ID0gTWF0cml4NHg0LnJvdGF0aW9uWCh4UmFkaWFucyk7XHJcbiAgICBjb25zdCByeSA9IE1hdHJpeDR4NC5yb3RhdGlvblkoeVJhZGlhbnMpO1xyXG4gICAgY29uc3QgcnogPSBNYXRyaXg0eDQucm90YXRpb25aKHpSYWRpYW5zKTtcclxuXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseShyeiwgcnkpLCByeCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNjYWxlKHNjYWxlOiBWZWN0b3IzKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBzY2FsZS54O1xyXG4gICAgbS5fZGF0YVs1XSA9IHNjYWxlLnk7XHJcbiAgICBtLl9kYXRhWzEwXSA9IHNjYWxlLno7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IE1hdHJpeDR4NCwgYjogTWF0cml4NHg0KTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBiMDAgPSBiLl9kYXRhWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgYjAxID0gYi5fZGF0YVswICogNCArIDFdO1xyXG4gICAgbGV0IGIwMiA9IGIuX2RhdGFbMCAqIDQgKyAyXTtcclxuICAgIGxldCBiMDMgPSBiLl9kYXRhWzAgKiA0ICsgM107XHJcbiAgICBsZXQgYjEwID0gYi5fZGF0YVsxICogNCArIDBdO1xyXG4gICAgbGV0IGIxMSA9IGIuX2RhdGFbMSAqIDQgKyAxXTtcclxuICAgIGxldCBiMTIgPSBiLl9kYXRhWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgYjEzID0gYi5fZGF0YVsxICogNCArIDNdO1xyXG4gICAgbGV0IGIyMCA9IGIuX2RhdGFbMiAqIDQgKyAwXTtcclxuICAgIGxldCBiMjEgPSBiLl9kYXRhWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgYjIyID0gYi5fZGF0YVsyICogNCArIDJdO1xyXG4gICAgbGV0IGIyMyA9IGIuX2RhdGFbMiAqIDQgKyAzXTtcclxuICAgIGxldCBiMzAgPSBiLl9kYXRhWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgYjMxID0gYi5fZGF0YVszICogNCArIDFdO1xyXG4gICAgbGV0IGIzMiA9IGIuX2RhdGFbMyAqIDQgKyAyXTtcclxuICAgIGxldCBiMzMgPSBiLl9kYXRhWzMgKiA0ICsgM107XHJcblxyXG4gICAgbGV0IGEwMCA9IGEuX2RhdGFbMCAqIDQgKyAwXTtcclxuICAgIGxldCBhMDEgPSBhLl9kYXRhWzAgKiA0ICsgMV07XHJcbiAgICBsZXQgYTAyID0gYS5fZGF0YVswICogNCArIDJdO1xyXG4gICAgbGV0IGEwMyA9IGEuX2RhdGFbMCAqIDQgKyAzXTtcclxuICAgIGxldCBhMTAgPSBhLl9kYXRhWzEgKiA0ICsgMF07XHJcbiAgICBsZXQgYTExID0gYS5fZGF0YVsxICogNCArIDFdO1xyXG4gICAgbGV0IGExMiA9IGEuX2RhdGFbMSAqIDQgKyAyXTtcclxuICAgIGxldCBhMTMgPSBhLl9kYXRhWzEgKiA0ICsgM107XHJcbiAgICBsZXQgYTIwID0gYS5fZGF0YVsyICogNCArIDBdO1xyXG4gICAgbGV0IGEyMSA9IGEuX2RhdGFbMiAqIDQgKyAxXTtcclxuICAgIGxldCBhMjIgPSBhLl9kYXRhWzIgKiA0ICsgMl07XHJcbiAgICBsZXQgYTIzID0gYS5fZGF0YVsyICogNCArIDNdO1xyXG4gICAgbGV0IGEzMCA9IGEuX2RhdGFbMyAqIDQgKyAwXTtcclxuICAgIGxldCBhMzEgPSBhLl9kYXRhWzMgKiA0ICsgMV07XHJcbiAgICBsZXQgYTMyID0gYS5fZGF0YVszICogNCArIDJdO1xyXG4gICAgbGV0IGEzMyA9IGEuX2RhdGFbMyAqIDQgKyAzXTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzNdID0gYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzO1xyXG4gICAgbS5fZGF0YVs0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbNV0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzZdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyO1xyXG4gICAgbS5fZGF0YVs3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcclxuICAgIG0uX2RhdGFbOF0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzldID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzExXSA9IGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMztcclxuICAgIG0uX2RhdGFbMTJdID0gYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxM10gPSBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzE0XSA9IGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbMTVdID0gYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbShtOiBNYXRyaXg0eDQpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICB0aGlzLl9kYXRhW2ldID0gbS5fZGF0YVtpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0ge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgcm90YXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHNjYWxlOiBWZWN0b3IzID0gVmVjdG9yMy5vbmU7XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh0cmFuc2Zvcm06IFRyYW5zZm9ybSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgdGhpcy5yb3RhdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucm90YXRpb24pO1xyXG4gICAgdGhpcy5zY2FsZS5jb3B5RnJvbSh0cmFuc2Zvcm0uc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgdHJhbnNsYXRpb24gPSBNYXRyaXg0eDQudHJhbnNsYXRpb24odGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgbGV0IHJvdGF0aW9uID0gTWF0cml4NHg0LnJvdGF0aW9uWFlaKFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLngsXHJcbiAgICAgIHRoaXMucm90YXRpb24ueSxcclxuICAgICAgdGhpcy5yb3RhdGlvbi56XHJcbiAgICApO1xyXG4gICAgbGV0IHNjYWxlID0gTWF0cml4NHg0LnNjYWxlKHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIC8vIG9yZGVyIG1hdHRlcnMgaGVyZVxyXG4gICAgLy8gVCAqIFIgKiBTXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseSh0cmFuc2xhdGlvbiwgcm90YXRpb24pLCBzY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5wb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldEZyb21Kc29uKGpzb24ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnJvdGF0aW9uKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24uc2V0RnJvbUpzb24oanNvbi5yb3RhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uc2NhbGUpIHtcclxuICAgICAgdGhpcy5zY2FsZS5zZXRGcm9tSnNvbihqc29uLnNjYWxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4uL2JlaGF2aW9ycy9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltT2JqZWN0IHtcclxuICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2NoaWxkcmVuOiBTaW1PYmplY3RbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3BhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2lzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2JlaGF2aW9yczogSUJlaGF2aW9yW10gPSBbXTtcclxuICBwcml2YXRlIF9pc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIF9sb2NhbE1hdHJpeDogTWF0cml4NHg0ID0gTWF0cml4NHg0LmlkZW50aXR5KCk7XHJcbiAgcHJpdmF0ZSBfd29ybGRNYXRyaXg6IE1hdHJpeDR4NCA9IE1hdHJpeDR4NC5pZGVudGl0eSgpO1xyXG5cclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdHJhbnNmb3JtOiBUcmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHNjZW5lPzogU2NlbmUpIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFyZW50KCk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50IHx8IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd29ybGRNYXRyaXgoKTogTWF0cml4NHg0IHtcclxuICAgIHJldHVybiB0aGlzLl93b3JsZE1hdHJpeDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGlzVmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNWaXNpYmxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ2hpbGQoY2hpbGQ6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgIGlmICh0aGlzLl9zY2VuZSkge1xyXG4gICAgICBjaGlsZC5vbkFkZGVkKHRoaXMuX3NjZW5lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVDaGlsZChjaGlsZDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgY2hpbGQuX3BhcmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgLy8gZG91YmxlIGNoZWNrIHRoaXMgd29ya3NcclxuICAgICAgdGhpcy5fY2hpbGRyZW4gPSB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoKF8sIGlkeCkgPT4gaW5kZXggIT09IGlkeCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWU6IHN0cmluZyk6IElDb21wb25lbnQgfCB1bmRlZmluZWQge1xyXG4gICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMuX2NvbXBvbmVudHMpIHtcclxuICAgICAgaWYgKGNvbXBvbmVudC5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRCeU5hbWUobmFtZSk7XHJcbiAgICAgIGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QmVoYXZpb3JCeU5hbWUobmFtZTogc3RyaW5nKTogSUJlaGF2aW9yIHwgdW5kZWZpbmVkIHtcclxuICAgIGZvciAobGV0IGJlaGF2aW9yIG9mIHRoaXMuX2JlaGF2aW9ycykge1xyXG4gICAgICBpZiAoYmVoYXZpb3IubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBiZWhhdmlvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGxldCBiZWhhdmlvciA9IGNoaWxkLmdldEJlaGF2aW9yQnlOYW1lKG5hbWUpO1xyXG4gICAgICBpZiAoYmVoYXZpb3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBiZWhhdmlvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNoaWxkLmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQmVoYXZpb3IoYmVoYXZpb3I6IElCZWhhdmlvcik6IHZvaWQge1xyXG4gICAgdGhpcy5fYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xyXG4gICAgYmVoYXZpb3Iuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQubG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZVJlYWR5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iZWhhdmlvcnMuZm9yRWFjaCgoYmVoYXZpb3IpID0+IHtcclxuICAgICAgYmVoYXZpb3IudXBkYXRlUmVhZHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZVJlYWR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fbG9jYWxNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpO1xyXG4gICAgdGhpcy51cGRhdGVXb3JsZE1hdHJpeChcclxuICAgICAgdGhpcy5fcGFyZW50ICE9PSB1bmRlZmluZWQgPyB0aGlzLl9wYXJlbnQud29ybGRNYXRyaXggOiB1bmRlZmluZWRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZSh0aW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JlaGF2aW9ycy5mb3JFYWNoKChiZWhhdmlvcikgPT4ge1xyXG4gICAgICBiZWhhdmlvci51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2lzVmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V29ybGRQb3NpdGlvbigpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXguZGF0YVsxMl0sXHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmRhdGFbMTNdLFxyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeC5kYXRhWzE0XVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkFkZGVkKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXg6IE1hdHJpeDR4NCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBNYXRyaXg0eDQubXVsdGlwbHkoXHJcbiAgICAgICAgcGFyZW50V29ybGRNYXRyaXgsXHJcbiAgICAgICAgdGhpcy5fbG9jYWxNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmNvcHlGcm9tKHRoaXMuX2xvY2FsTWF0cml4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi9zaW1PYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9yb290OiBTaW1PYmplY3Q7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBuZXcgU2ltT2JqZWN0KDAsICdfX1JPT1RfXycsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb290KCk6IFNpbU9iamVjdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRPYmplY3Qob2JqZWN0OiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QuYWRkQ2hpbGQob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290LmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKSB7XHJcbiAgICB0aGlzLl9yb290LnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi4vYmVoYXZpb3JzL2JlaGF2aW9yTWFuYWdlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4vc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBlbnVtIFpvbmVTdGF0ZSB7XHJcbiAgVU5JTklUSUFMSVpFRCxcclxuICBMT0FESU5HLFxyXG4gIFVQREFUSU5HLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgWm9uZSB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgcHJpdmF0ZSBfc3RhdGU6IFpvbmVTdGF0ZSA9IFpvbmVTdGF0ZS5VTklOSVRJQUxJWkVEO1xyXG4gIHByaXZhdGUgX2dsb2JhbElkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuX3NjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZSh6b25lRGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoem9uZURhdGEub2JqZWN0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBpbml0aWFsaXphdGlvbiBlcnJvcjogb2JqZWN0cyBub3QgcHJlc2VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvbmVEYXRhLm9iamVjdHMuZm9yRWFjaCgobzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvIGFzIFNpbU9iamVjdCwgdGhpcy5fc2NlbmUucm9vdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuTE9BRElORztcclxuXHJcbiAgICB0aGlzLl9zY2VuZS5sb2FkKCk7XHJcblxyXG4gICAgdGhpcy5fc2NlbmUucm9vdC51cGRhdGVSZWFkeSgpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVubG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFjdGl2YXRlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBvbkRlYWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHJpdmF0ZSBsb2FkU2ltT2JqZWN0KGRhdGFTZWN0aW9uOiBhbnksIHBhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBsZXQgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAoZGF0YVNlY3Rpb24ubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5hbWUgPSBTdHJpbmcoZGF0YVNlY3Rpb24ubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZ2xvYmFsSWQrKztcclxuICAgIGxldCBzaW1PYmplY3QgPSBuZXcgU2ltT2JqZWN0KHRoaXMuX2dsb2JhbElkLCBuYW1lLCB0aGlzLl9zY2VuZSk7XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNpbU9iamVjdC50cmFuc2Zvcm0uc2V0RnJvbUpzb24oZGF0YVNlY3Rpb24udHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY29tcG9uZW50cykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jb21wb25lbnRzLmZvckVhY2goKGM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudE1hbmFnZXIuZXh0cmFjdENvbXBvbmVudChjKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5iZWhhdmlvcnMpIHtcclxuICAgICAgZGF0YVNlY3Rpb24uYmVoYXZpb3JzLmZvckVhY2goKGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gQmVoYXZpb3JNYW5hZ2VyLmV4dHJhY3RCZWhhdmlvcihiKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQmVoYXZpb3IoYmVoYXZpb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY2hpbGRyZW4gJiYgZGF0YVNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChvOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRTaW1PYmplY3Qobywgc2ltT2JqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmVudC5hZGRDaGlsZChzaW1PYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEpzb25Bc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSAnLi96b25lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBab25lTWFuYWdlciBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2dsb2JhbFpvbmVJRDogbnVtYmVyID0gLTE7XHJcbiAgLy8gIHByaXZhdGUgc3RhdGljIF96b25lczogeyBbaWQ6IG51bWJlcl06IFpvbmUgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkWm9uZXM6IHsgW2lkOiBudW1iZXJdOiBzdHJpbmcgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9hY3RpdmVab25lOiBab25lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0OiBab25lTWFuYWdlcjtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIFpvbmVNYW5hZ2VyLl9pbnN0ID0gbmV3IFpvbmVNYW5hZ2VyKCk7XHJcbiAgICAvLyB0ZW1wb3JhcnlcclxuICAgIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbMF0gPSAnc3JjL2Fzc2V0cy96b25lcy90ZXN0Wm9uZS5qc29uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlWm9uZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkRlYWN0aXZhdGVkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVubG9hZCgpO1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoQXNzZXRNYW5hZ2VyLmlzQXNzZXRMb2FkZWQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pKSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbaWRdLFxyXG4gICAgICAgICAgWm9uZU1hbmFnZXIuX2luc3RcclxuICAgICAgICApO1xyXG4gICAgICAgIEFzc2V0TWFuYWdlci5sb2FkQXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFpvbmUgaWQ6ICR7aWR9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZS5pbmRleE9mKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCkgIT09IC0xKSB7XHJcbiAgICAgIGxldCBhc3NldCA9IG1lc3NhZ2UuY29udGV4dCBhcyBKc29uQXNzZXQ7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLmxvYWRab25lKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGxvYWRab25lKGFzc2V0OiBKc29uQXNzZXQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHpvbmVEYXRhID0gYXNzZXQuZGF0YTtcclxuICAgIGxldCB6b25lSWQ6IG51bWJlcjtcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBpZCBub3QgcHJlc2VudCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHpvbmVJZCA9IE51bWJlcih6b25lRGF0YS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKCF6b25lRGF0YS5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBuYW1lIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZU5hbWUgPSBTdHJpbmcoem9uZURhdGEubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHpvbmVEZXNjcmlwdGlvbiA9IFN0cmluZyh6b25lRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IG5ldyBab25lKHpvbmVJZCEsIHpvbmVOYW1lLCB6b25lRGVzY3JpcHRpb24pO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUuaW5pdGlhbGl6ZSh6b25lRGF0YSk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkFjdGl2YXRlZCgpO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUubG9hZCgpO1xyXG5cclxuICAgIC8vIENoYW5nZSBzdGF0ZSB0byBzcGxhc2hcclxuICAgIE1lc3NhZ2Uuc2VuZCgnR0FNRV9SRUFEWScsIHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vY29sbGlzaW9uL2NvbGxpc2lvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2JpdG1hcFRleHRDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xsaXNpb25Db21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2xsaXNpb25Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi9hdWRpby9hdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvck1hbmFnZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMva2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yJztcclxuaW1wb3J0IHsgTW91c2VDbGlja0JlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL21vdXNlQ2xpY2tCZWhhdmlvcic7XHJcbmltcG9ydCB7IFBsYXllckJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL3BsYXllckJlaGF2aW9yJztcclxuaW1wb3J0IHsgUm90YXRpb25CZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9yb3RhdGlvbkJlaGF2aW9yJztcclxuaW1wb3J0IHsgU2Nyb2xsQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMvc2Nyb2xsQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBWaXNpYmlsaXR5T25NZXNzYWdlQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMvdmlzaWJpbGl0eU9uTWVzc2FnZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgZ2wsIEdMVXRpbGl0aWVzIH0gZnJvbSAnLi9nbC9nbCc7XHJcbmltcG9ydCB7IEJhc2ljU2hhZGVyIH0gZnJvbSAnLi9nbC9zaGFkZXJzL2Jhc2ljU2hhZGVyJztcclxuaW1wb3J0IHsgQml0bWFwRm9udE1hbmFnZXIgfSBmcm9tICcuL2dyYXBoaWNzL2JpdG1hcEZvbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2dyYXBoaWNzL2NvbG9yJztcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL2dyYXBoaWNzL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNYW5hZ2VyIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tICcuL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2VCdXMnO1xyXG5pbXBvcnQgeyBab25lTWFuYWdlciB9IGZyb20gJy4vd29ybGQvem9uZU1hbmFnZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIGdhbWUgZW5naW5lIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2Jhc2ljU2hhZGVyOiBCYXNpY1NoYWRlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9wcm9qZWN0aW9uOiBNYXRyaXg0eDQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcHJldmlvdXNUaW1lOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2dhbWVXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2dhbWVIZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBfaXNGaXJzdFVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX2FzcGVjdDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGVuZ2luZVxyXG4gICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGdhbWUgaW4gcGl4ZWxzXHJcbiAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBnYW1lIGluIHBpeGVsc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9nYW1lV2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2dhbWVIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdXAgdGhpcyBlbmdpbmVcclxuICAgKi9cclxuICBwdWJsaWMgc3RhcnQoZWxlbWVudE5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhbnZhcyA9IEdMVXRpbGl0aWVzLmluaXRpYWxpemUoZWxlbWVudE5hbWUpO1xyXG4gICAgaWYgKHRoaXMuX2dhbWVXaWR0aCAmJiB0aGlzLl9nYW1lSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuX2FzcGVjdCA9IHRoaXMuX2dhbWVXaWR0aCAvIHRoaXMuX2dhbWVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQXNzZXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIElucHV0TWFuYWdlci5pbml0aWFsaXplKHRoaXMuX2NhbnZhcyk7XHJcbiAgICBab25lTWFuYWdlci5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgZ2wuY2xlYXJDb2xvcig5OSAvIDI1NSwgMTU1IC8gMjU1LCAyNTUgLyAyNTUsIDEpO1xyXG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcclxuICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xyXG5cclxuICAgIGxldCBpbWFnZUNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXHJcbiAgICAgICcuLi9hc3NldHMvdGV4dHVyZXMvJyxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkL2lcclxuICAgICk7XHJcbiAgICBsZXQganNvbkNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy96b25lcy8nLCB0cnVlLCAvXFwuKGpzb24pJC9pKTtcclxuICAgIGxldCBhdWRpb0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXHJcbiAgICAgICcuLi9hc3NldHMvc291bmRzLycsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIC9cXC4od2F2fG1wMykkL2lcclxuICAgICk7XHJcbiAgICBsZXQgZm9udENvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXHJcbiAgICAgICcuLi9hc3NldHMvZm9udHMvJyxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgL1xcLihwbmd8dHh0KSQvaVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmxvYWRBbGwoaW1hZ2VDb250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChqc29uQ29udGV4dCk7XHJcbiAgICB0aGlzLmxvYWRBbGwoYXVkaW9Db250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChmb250Q29udGV4dCk7XHJcblxyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIgPSBuZXcgQmFzaWNTaGFkZXIoKTtcclxuICAgIHRoaXMuX2Jhc2ljU2hhZGVyLnVzZSgpO1xyXG5cclxuICAgIC8vIExvYWQgZm9udHNcclxuICAgIEJpdG1hcEZvbnRNYW5hZ2VyLmFkZEZvbnQoJ2RlZmF1bHQnLCAnc3JjL2Fzc2V0cy9mb250cy9uYXRlLTgtYml0LnR4dCcpO1xyXG4gICAgQml0bWFwRm9udE1hbmFnZXIubG9hZCgpO1xyXG5cclxuICAgIC8vIExvYWQgbWF0ZXJpYWxzXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdzdG9uZVdhbGwnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3N0b25lX3dhbGwuanBnJyxcclxuICAgICAgICBDb2xvci53aGl0ZSgpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAnd29vZFBsYW5rJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy93b29kX3BsYW5rLmpwZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoJ2JnJywgJ3NyYy9hc3NldHMvdGV4dHVyZXMvYmFja2dyb3VuZC5wbmcnLCBDb2xvci53aGl0ZSgpKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKCdwaXBlRW5kJywgJ3NyYy9hc3NldHMvdGV4dHVyZXMvcGlwZV9lbmQucG5nJywgQ29sb3Iud2hpdGUoKSlcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAncGlwZUJvZHknLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3BpcGVfYm9keS5wbmcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKCdiaXJkJywgJ3NyYy9hc3NldHMvdGV4dHVyZXMvYmlyZF9zaHJ1bmsucG5nJywgQ29sb3Iud2hpdGUoKSlcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAnZ3Jhc3MnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL2dyYXNzX2JpZ2dlci5wbmcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdwbGF5QnV0dG9uJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9wbGF5X2J1dHRvbi5wbmcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdyZXN0YXJ0QnV0dG9uJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9yZXN0YXJ0X2J1dHRvbi5wbmcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdzY29yZWJvYXJkJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9zY29yZWJvYXJkLnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoJ3RpdGxlJywgJ3NyYy9hc3NldHMvdGV4dHVyZXMvdGl0bGUucG5nJywgQ29sb3Iud2hpdGUoKSlcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAndHV0b3JpYWwnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3R1dG9yaWFsLnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnYmlyZEp1bXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnbXVzaWMnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYWxmX3JlbWl4Lm1wMycsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ3RpbmcnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvdGluZy53YXYnLCBmYWxzZSk7XHJcbiAgICBBdWRpb01hbmFnZXIubG9hZFNvdW5kRmlsZShcclxuICAgICAgJ2ZsYXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ2RlYWQnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvZGVhdGgud2F2JywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZpbmQgYSBiZXR0ZXIgcGxhY2UgZm9yIHRoaXM/XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIoKSk7XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBCaXRtYXBUZXh0Q29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgUGxheWVyQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFNjcm9sbEJlaGF2aW9yQnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IE1vdXNlQ2xpY2tCZWhhdmlvckJ1aWxkZXIoKSk7XHJcbiAgICBCZWhhdmlvck1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBWaXNpYmlsaXR5T25NZXNzYWdlQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG5cclxuICAgIHRoaXMucmVzaXplKCk7XHJcblxyXG4gICAgLy8gQmVnaW4gdGhlIHByZWxvYWQgcGhhc2UsIHdoaWNoIHdhaXRzIGZvciB2YXJpb3VzIGVsZW1lbnRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgc3RhcnRpbmcgdGhlIGdhbWUuXHJcbiAgICB0aGlzLnByZWxvYWRpbmcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2l6ZXMgdGhlIGNhbnZhcyB0byBmaXQgdGhlIHdpbmRvdy5cclxuICAgKi9cclxuICBwdWJsaWMgcmVzaXplKCkge1xyXG4gICAgaWYgKHRoaXMuX2NhbnZhcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5fZ2FtZVdpZHRoIHx8ICF0aGlzLl9nYW1lSGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvamVjdGlvbiA9IE1hdHJpeDR4NC5vcnRob2dyYXBoaWMoXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAtMTAwLjAsXHJcbiAgICAgICAgICAxMDAuMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBsZXQgbmV3V2lkdGhUb0hlaWdodCA9IG5ld1dpZHRoIC8gbmV3SGVpZ2h0O1xyXG4gICAgICAgIGxldCBnYW1lQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQXJlYScpO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZUFyZWEpIHtcclxuICAgICAgICAgIGlmIChuZXdXaWR0aFRvSGVpZ2h0ID4gdGhpcy5fYXNwZWN0KSB7XHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gbmV3SGVpZ2h0ICogdGhpcy5fYXNwZWN0O1xyXG4gICAgICAgICAgICBnYW1lQXJlYS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICBnYW1lQXJlYS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgJ3B4JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IG5ld1dpZHRoIC8gdGhpcy5fYXNwZWN0O1xyXG4gICAgICAgICAgICBnYW1lQXJlYS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgZ2FtZUFyZWEuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBnYW1lQXJlYS5zdHlsZS5tYXJnaW5Ub3AgPSAtbmV3SGVpZ2h0IC8gMiArICdweCc7XHJcbiAgICAgICAgICBnYW1lQXJlYS5zdHlsZS5tYXJnaW5MZWZ0ID0gLW5ld1dpZHRoIC8gMiArICdweCc7XHJcblxyXG4gICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG5cclxuICAgICAgICAgIHRoaXMuX3Byb2plY3Rpb24gPSBNYXRyaXg0eDQub3J0aG9ncmFwaGljKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0aGlzLl9nYW1lV2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVIZWlnaHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIC0xMDAuMCxcclxuICAgICAgICAgICAgMTAwLjBcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvblNjYWxlID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIG5ld1dpZHRoIC8gdGhpcy5fZ2FtZVdpZHRoLFxyXG4gICAgICAgICAgICBuZXdIZWlnaHQgLyB0aGlzLl9nYW1lSGVpZ2h0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgSW5wdXRNYW5hZ2VyLnNldFJlc29sdXRpb25TY2FsZShyZXNvbHV0aW9uU2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVsb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgLy8gTWFrZSBzdXJlIHRvIGFsd2F5cyB1cGRhdGUgdGhlIG1lc3NhZ2UgYnVzLlxyXG4gICAgTWVzc2FnZUJ1cy51cGRhdGUoMCk7XHJcblxyXG4gICAgaWYgKCFCaXRtYXBGb250TWFuYWdlci51cGRhdGVSZWFkeSkge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wcmVsb2FkaW5nLmJpbmQodGhpcykpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCB1cCB6b25lLiAgVE9ETzogTWFrZSB0aGlzIGNvbmZpZ3VyYWJsZS5cclxuICAgIFpvbmVNYW5hZ2VyLmNoYW5nZVpvbmUoMCk7XHJcblxyXG4gICAgLy8gS2ljayBvZmYgdGhlIHJlbmRlciBsb29wXHJcbiAgICB0aGlzLmxvb3AoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9vcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc0ZpcnN0VXBkYXRlKSB7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRBbGwocmVxdWlyZUNvbnRleHQ6IF9fV2VicGFja01vZHVsZUFwaS5SZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmVxdWlyZUNvbnRleHQua2V5cygpLmZvckVhY2gocmVxdWlyZUNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZGVsdGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3ByZXZpb3VzVGltZTtcclxuXHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgWm9uZU1hbmFnZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgdGhpcy5fcHJldmlvdXNUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlcikge1xyXG4gICAgICBab25lTWFuYWdlci5yZW5kZXIodGhpcy5fYmFzaWNTaGFkZXIpO1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IHVuaWZvcm1zXHJcbiAgICBpZiAodGhpcy5fYmFzaWNTaGFkZXIgJiYgdGhpcy5fcHJvamVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcm9qZWN0aW9uUG9zaXRpb24gPVxyXG4gICAgICAgIHRoaXMuX2Jhc2ljU2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9wcm9qZWN0aW9uJyk7XHJcblxyXG4gICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFxyXG4gICAgICAgIHByb2plY3Rpb25Qb3NpdGlvbixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3Byb2plY3Rpb24uZGF0YSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vY29yZS9lbmdpbmUnO1xyXG5cclxudmFyIGVuZ2luZTogRW5naW5lO1xyXG4vLyBUaGUgbWFpbiBlbnRyeSBwb2ludCB0byB0aGUgYXBwbGljYXRpb25cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBlbmdpbmUgPSBuZXcgRW5naW5lKDUxMiwgNzUwKTtcclxuICBlbmdpbmUuc3RhcnQoJ3ZpZXdwb3J0Jyk7XHJcbn07XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lLnJlc2l6ZSgpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=