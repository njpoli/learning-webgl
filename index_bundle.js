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
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #272b30;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,yBAAyB;AAC7B","sourcesContent":["html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #272b30;\r\n}"],"sourceRoot":""}]);
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
	"./stone_wall.jpg": 190,
	"./stone_wall_128x128.jpg": 738,
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
                        Message.sendPriority('COLLISION_ENTRY:' + comp.name, this, coll);
                        Message.sendPriority('COLLISION_ENTRY:' + other.name, this, coll);
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
                Message.sendPriority('COLLISION_EXIT:' + data.a.name, this, data);
                // @ts-ignore
                Message.sendPriority('COLLISION_EXIT:' + data.b.name, this, data);
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
        console.log('onImageLoaded" assetName/image', assetName, image);
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
var AnimatedSprite = /** @class */ (function (_super) {
    __extends(AnimatedSprite, _super);
    function AnimatedSprite(name, materialName, width, height, frameWidth, frameHeight, frameCount, frameSequence) {
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 100; }
        if (frameWidth === void 0) { frameWidth = 10; }
        if (frameHeight === void 0) { frameHeight = 10; }
        if (frameCount === void 0) { frameCount = 1; }
        if (frameSequence === void 0) { frameSequence = []; }
        var _this = _super.call(this, name, materialName, width, height) || this;
        // TODO: Make this configurable
        _this._frameTime = 121;
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
        _this._sprite = new AnimatedSprite(data.name, data.materialName, data.frameWidth, data.frameHeight, data.frameWidth, data.frameHeight, data.frameCount, data.frameSequence);
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
                    _this._size = Number(FontUtilities.extractFieldValue(fields[2]));
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
                        _this._imageFile = 'src/assets/fonts' + _this._imageFile.trim();
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
        debugger;
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
            debugger;
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
        return _this;
    }
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
    function Rectangle2D() {
        this.origin = Vector2.zero;
        this.position = Vector2.zero;
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
        if (otherShape instanceof Rectangle2D &&
            otherShape.width &&
            otherShape.height) {
            return (this.pointInShape(otherShape.position) ||
                this.pointInShape(new Vector2(otherShape.position.x + otherShape.width, otherShape.position.y)) ||
                this.pointInShape(new Vector2(otherShape.position.x + otherShape.width, otherShape.position.y + otherShape.height)) ||
                this.pointInShape(new Vector2(otherShape.position.x, otherShape.position.y + otherShape.height)));
        }
        if (otherShape instanceof Circle2D &&
            otherShape.radius &&
            this.width &&
            this.height) {
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
    InputManager.initialize = function () {
        for (var i = 0; i < 255; i++) {
            InputManager._keys[i] = false;
        }
        window.addEventListener('keydown', InputManager.onKeyDown);
        window.addEventListener('keyup', InputManager.onKeyUp);
        window.addEventListener('mousemove', InputManager.onMouseMove);
        window.addEventListener('mousedown', InputManager.onMouseDown);
        window.addEventListener('mouseup', InputManager.onMouseUp);
    };
    InputManager.isKeyDown = function (key) {
        return InputManager._keys[key];
    };
    InputManager.getMousePosition = function () {
        return new Vector2(this._mouseX, this._mouseY);
    };
    InputManager.onKeyDown = function (event) {
        InputManager._keys[event.keyCode] = true;
        //if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 73) {
        //event.preventDefault();
        //event.stopPropagation();
        //}
        return true;
    };
    InputManager.onKeyUp = function (event) {
        InputManager._keys[event.keyCode] = false;
        // if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 73) {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }
        return false;
    };
    InputManager.onMouseMove = function (event) {
        InputManager._previousMouseX = InputManager._mouseX;
        InputManager._previousMouseY = InputManager._mouseY;
        InputManager._mouseX = event.clientX;
        InputManager._mouseY = event.clientY;
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
        _this._animatedSpriteName = '';
        _this._isPlaying = false;
        _this._initialPosition = Vector3.zero;
        _this._pipeNames = [
            'pipe1CollisionEndTop',
            'pipe1CollisionBodyTop',
            'pipe1CollisionEndBottom',
            'pipe1CollisionBodyBottom',
        ];
        _this._acceleration = data.acceleration;
        _this._playerCollisionComponent = data.playerCollisionComponent;
        _this._groundCollisionComponent = data.groundCollisionComponent;
        _this._animatedSpriteName = data.animatedSpriteName;
        Message.subscribe('MOUSE_DOWN', _this);
        Message.subscribe('COLLISION_ENTRY:' + _this._playerCollisionComponent, _this);
        Message.subscribe('GAME_RESET', _this);
        Message.subscribe('GAME_START', _this);
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
        var _a, _b;
        switch (message.code) {
            case 'MOUSE_DOWN':
                this.onFlap();
                break;
            case 'COLLISION_ENTRY:' + this._playerCollisionComponent:
                var data = message.context;
                if (((_a = data === null || data === void 0 ? void 0 : data.a) === null || _a === void 0 ? void 0 : _a.name) === this._groundCollisionComponent ||
                    ((_b = data === null || data === void 0 ? void 0 : data.b) === null || _b === void 0 ? void 0 : _b.name) === this._groundCollisionComponent) {
                    this.die();
                    this.decelerate();
                }
                if (this._pipeNames.indexOf(data.a.name) !== -1 ||
                    this._pipeNames.indexOf(data.b.name) !== -1) {
                    this.die();
                }
                break;
            case 'GAME_RESET':
                this.reset();
                break;
            case 'GAME_START':
                this.start();
                break;
        }
    };
    PlayerBehavior.prototype.isFalling = function () {
        return this._velocity.y > 220.0;
    };
    PlayerBehavior.prototype.shouldNotFlap = function () {
        return this._velocity.y > 220.0 || !this._isAlive;
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
    PlayerBehavior.prototype.onRestart = function (y) {
        if (this._owner) {
            this._owner.transform.rotation.z = 0;
            this._owner.transform.position.set(200, y);
            this._velocity.set(0, 0);
            this._acceleration.set(0, 920);
            this._isAlive = true;
            this._sprite.play();
        }
        else {
            throw new Error("".concat(this._animatedSpriteName, "'s playerBehavior has no owner"));
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
    };
    ScrollBehavior.prototype.update = function (time) {
        if (this._isScrolling) {
            this._owner.transform.position.add(this._velocity
                .clone()
                .scale(time / 1000)
                .toVector3());
            if (this._owner.transform.position.x <= this._minPosition.x &&
                this._owner.transform.position.y <= this._minPosition.y) {
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
        this._owner.transform.position.copyFrom(this._resetPosition.toVector3());
    };
    ScrollBehavior.prototype.initial = function () {
        this._owner.transform.position.copyFrom(this._initialPosition.toVector3());
    };
    return ScrollBehavior;
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
        this._gameWidth = width;
        this._gameHeight = height;
        Message.subscribe('MOUSE_DOWN', this);
    }
    /**
     * Starts up this engine
     */
    Engine.prototype.start = function () {
        this._canvas = GLUtilities.initialize();
        if (this._gameWidth && this._gameHeight) {
            this._canvas.style.width = this._gameWidth + 'px';
            this._canvas.style.height = this._gameHeight + 'px';
            this._canvas.width = this._gameWidth;
            this._canvas.height = this._gameHeight;
        }
        AssetManager.initialize();
        InputManager.initialize();
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
            }
            this._projection = Matrix4x4.orthographic(0, this._canvas.width, this._canvas.height, 0, -100.0, 100.0);
            gl.viewport(0, 0, this._canvas.width, this._canvas.height);
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
        this.update();
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    };
    Engine.prototype.onMessage = function (message) {
        var mouseContext = message.context;
        if (message.code === 'MOUSE_DOWN' && mouseContext) {
            Message.send('GAME_START', undefined, undefined);
        }
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
    engine.start();
};
window.onresize = function () {
    engine.resize();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssSUFBSSxFQUFFO2dCQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUMzQixTQUFTO2FBQ1Y7WUFFRCxRQUFRLENBQUM7WUFFVCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVyQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN6QixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUV6QixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUUzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQzdDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFFOUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztZQUN6RCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFB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QUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcs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R0FBRztJQUNkLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDaEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy9mb250c3xzeW5jfEM6Ly4ocG5nJTdDdHh0KSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvc291bmRzfHN5bmN8QzovLih3YXYlN0NtcDMpJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy90ZXh0dXJlc3xzeW5jfEM6Ly4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvYXNzZXRzL3pvbmVzfHN5bmN8QzovLihqc29uKSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWVzc2FnZS9tZXNzYWdlU3Vic2NyaXB0aW9uTm9kZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZUJ1cy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXNzZXRzL2pzb25Bc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy90ZXh0QXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvYXNzZXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvZ2wudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbEJ1ZmZlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3ZlcnRleC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvYmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvYml0bWFwRm9udC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2JpdG1hcEZvbnRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvY29sb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy90ZXh0dXJlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvdGV4dHVyZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2JpdG1hcFRleHQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9iaXRtYXBUZXh0Q29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3Mvc2hhcGVzMkQvY2lyY2xlMkQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9zaGFwZXMyRC9yZWN0YW5nbGUyZC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbGxpc2lvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hdWRpby9hdWRpb01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvaW5wdXQvaW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2Jhc2VCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9rZXlib2FyZE1vdmVtZW50QmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL21hdGhFeHRlbnNpb25zLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL3BsYXllckJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL3JvdGF0aW9uQmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvc2Nyb2xsQmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9zaGFkZXJzL2Jhc2ljU2hhZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC9tYXRyaXg0eDQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NpbU9iamVjdC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NjZW5lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3pvbmVNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZW5naW5lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmIzMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyYjMwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9uYXRlLTgtYml0LnR4dFwiOiAyMzgsXG5cdFwiLi9uYXRlLTgtYml0XzAucG5nXCI6IDM2NVxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDUwMDsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWxmX3JlbWl4Lm1wM1wiOiA4NTMsXG5cdFwiLi9iaXJkX2p1bXAud2F2XCI6IDYwNyxcblx0XCIuL2RlYXRoLndhdlwiOiA5NTksXG5cdFwiLi90aW5nLndhdlwiOiA1MzZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA2MDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tncm91bmQucG5nXCI6IDY5MSxcblx0XCIuL2JpcmQucG5nXCI6IDExLFxuXHRcIi4vYmlyZF9zaHJ1bmsucG5nXCI6IDgyNixcblx0XCIuL2JpcmRfc2hydW5rXzIucG5nXCI6IDg0OSxcblx0XCIuL2dyYXNzLnBuZ1wiOiA0NzMsXG5cdFwiLi9ncmFzc19iaWdnZXIucG5nXCI6IDgyNCxcblx0XCIuL3BpcGVfYm9keS5wbmdcIjogMjkyLFxuXHRcIi4vcGlwZV9lbmQucG5nXCI6IDQ0MCxcblx0XCIuL3N0b25lX3dhbGwuanBnXCI6IDE5MCxcblx0XCIuL3N0b25lX3dhbGxfMTI4eDEyOC5qcGdcIjogNzM4LFxuXHRcIi4vd29vZF9wbGFuay5qcGdcIjogODQ3LFxuXHRcIi4vd29vZF9wbGFua18xMjh4MTI4LmpwZ1wiOiAzMDZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL3Rlc3Rab25lLmpzb25cIjogOTkzXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gOTI0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgcHVibGljIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IE1lc3NhZ2UsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcikge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUgfSBmcm9tICcuL21lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVByaW9yaXR5IH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcclxuICBwcml2YXRlIHN0YXRpYyBfc3Vic2NyaXB0aW9uczogeyBbY29kZTogc3RyaW5nXTogSU1lc3NhZ2VIYW5kbGVyW10gfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsUXVldWVNZXNzYWdlUGVyVXBkYXRlOiBudW1iZXIgPSAxMDtcclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsTWVzc2FnZVF1ZXVlOiBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZFN1YnNjcmlwdGlvbihjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5pbmRleE9mKGhhbmRsZXIpICE9PSAtMSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ0F0dGVtcHRpbmcgdG8gYWRkIGEgZHVwbGljYXRlIGhhbmRsZXIgdG8gY29kZSAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJy4gU3Vic2NyaXB0aW9uIG5vdCBhZGRlZC4nXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbW92ZVN1YnNjcmlwdGlvbihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlclxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gTm90IHN1cmUgaWYgdGhpcyBpcyBjb3JyZWN0XHJcbiAgICBpZiAoIU1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdDYW5ub3QgdW5zdWJzY3JpYmUgaGFuZGxlciBmcm9tIGNvZGU6ICcgK1xyXG4gICAgICAgICAgY29kZSArXHJcbiAgICAgICAgICAnIGJlY2F1c2UgdGhhdCBjb2RlIGRvZXMgbm90IHN1YnNjcmliZWQgdG8uJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5vZGVJbmRleCA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgIGlmIChub2RlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmZpbHRlcihcclxuICAgICAgICAoXywgaWR4KSA9PiBpZHggIT09IG5vZGVJbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwb3N0KG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIHBvc3RlZDonLCBtZXNzYWdlKTtcclxuICAgIGNvbnN0IGhhbmRsZXJzID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1ttZXNzYWdlLmNvZGVdO1xyXG4gICAgaWYgKCFoYW5kbGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5wcmlvcml0eSA9PT0gTWVzc2FnZVByaW9yaXR5LkhJR0gpIHtcclxuICAgICAgICBoLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUucHVzaChcclxuICAgICAgICAgIG5ldyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZShtZXNzYWdlLCBoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTm90IHVzaW5nIHRpbWU/XHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUxpbWl0ID0gTWF0aC5taW4oXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZSxcclxuICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VMaW1pdDsgKytpKSB7XHJcbiAgICAgIGxldCBub2RlID0gTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnBvcCgpO1xyXG4gICAgICBub2RlPy5oYW5kbGVyLm9uTWVzc2FnZShub2RlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VCdXMgfSBmcm9tICcuL21lc3NhZ2VCdXMnO1xyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVByaW9yaXR5IHtcclxuICBOT1JNQUwsXHJcbiAgSElHSCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gIHB1YmxpYyBjb2RlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbnRleHQ6IHVua25vd247XHJcbiAgcHVibGljIHNlbmRlcjogdW5rbm93bjtcclxuICBwdWJsaWMgcHJpb3JpdHk6IE1lc3NhZ2VQcmlvcml0eTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dDogdW5rbm93bixcclxuICAgIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHkgPSBNZXNzYWdlUHJpb3JpdHkuTk9STUFMXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kKGNvZGU6IHN0cmluZywgc2VuZGVyOiB1bmtub3duLCBjb250ZXh0PzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5Lk5PUk1BTCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kUHJpb3JpdHkoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBzZW5kZXI6IHVua25vd24sXHJcbiAgICBjb250ZXh0PzogdW5rbm93blxyXG4gICk6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5LkhJR0gpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLmFkZFN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5zdWJzY3JpYmUoY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucmVtb3ZlU3Vic2NyaXB0aW9uKGNvZGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbGxpc2lvbkNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uRGF0YSB7XHJcbiAgcHVibGljIHRpbWU6IG51bWJlcjtcclxuICBwdWJsaWMgYTogQ29sbGlzaW9uQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBiOiBDb2xsaXNpb25Db21wb25lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHRpbWU6IG51bWJlcixcclxuICAgIGE6IENvbGxpc2lvbkNvbXBvbmVudCxcclxuICAgIGI6IENvbGxpc2lvbkNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgIHRoaXMuYSA9IGE7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF90b3RhbFRpbWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbXBvbmVudHM6IENvbGxpc2lvbkNvbXBvbmVudFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9jb2xsaXNpb25EYXRhOiBDb2xsaXNpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJDb2xsaXNpb25Db21wb25lbnQoY29tcG9uZW50OiBDb2xsaXNpb25Db21wb25lbnQpIHtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyQ29sbGlzaW9uQ29tcG9uZW50KGNvbXBvbmVudDogQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBpZHggPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KTtcclxuICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmZpbHRlcihcclxuICAgICAgICAoXywgaSkgPT4gaSAhPT0gaWR4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLl90b3RhbFRpbWUgKz0gdGltZTtcclxuXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgbGV0IGNvbXAgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzW2NdO1xyXG4gICAgICBmb3IgKGxldCBvID0gYyArIDE7IG8gPCBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgbGV0IG90aGVyID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50c1tvXTtcclxuICAgICAgICAvLyBJZiBib3RoIHNoYXBlcyBhcmUgc3RhdGljLCBzdG9wIGRldGVjdGlvbi5cclxuICAgICAgICBpZiAoY29tcCAmJiBvdGhlciAmJiBjb21wLmlzU3RhdGljICYmIG90aGVyLmlzU3RhdGljKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb21wLnNoYXBlLmludGVyc2VjdHMob3RoZXIuc2hhcGUpKSB7XHJcbiAgICAgICAgICAvLyBIYXZlIGEgY29sbGlzaW9uXHJcbiAgICAgICAgICBsZXQgZXhpc3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICBmb3IgKGxldCBkID0gMDsgZCA8IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEubGVuZ3RoOyBkKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb2xsaXNpb25EYXRhW2RdO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgKGRhdGEuYSA9PT0gY29tcCAmJiBkYXRhLmIgPT09IG90aGVyKSB8fFxyXG4gICAgICAgICAgICAgIChkYXRhLmIgPT09IGNvbXAgJiYgZGF0YS5hID09PSBvdGhlcilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBleGlzdGluZyBkYXRhLiBVcGRhdGUgaXQuXHJcbiAgICAgICAgICAgICAgLy8gb25Db2xsaXNpb25VcGRhdGVcclxuICAgICAgICAgICAgICBjb21wLm9uQ29sbGlzaW9uVXBkYXRlKG90aGVyKTtcclxuICAgICAgICAgICAgICBvdGhlci5vbkNvbGxpc2lvblVwZGF0ZShjb21wKTtcclxuICAgICAgICAgICAgICBkYXRhLnRpbWUgPSBDb2xsaXNpb25NYW5hZ2VyLl90b3RhbFRpbWU7XHJcbiAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghZXhpc3RzKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvbGxpc2lvblxyXG4gICAgICAgICAgICAvLyBvbkNvbGxpc2lvbkVudHJ5XHJcbiAgICAgICAgICAgIGNvbXAub25Db2xsaXNpb25FbnRyeShvdGhlcik7XHJcbiAgICAgICAgICAgIG90aGVyLm9uQ29sbGlzaW9uRW50cnkoY29tcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGwgPSBuZXcgQ29sbGlzaW9uRGF0YShcclxuICAgICAgICAgICAgICBDb2xsaXNpb25NYW5hZ2VyLl90b3RhbFRpbWUsXHJcbiAgICAgICAgICAgICAgY29tcCxcclxuICAgICAgICAgICAgICBvdGhlclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBNZXNzYWdlLnNlbmRQcmlvcml0eSgnQ09MTElTSU9OX0VOVFJZOicgKyBjb21wLm5hbWUsIHRoaXMsIGNvbGwpO1xyXG4gICAgICAgICAgICBNZXNzYWdlLnNlbmRQcmlvcml0eSgnQ09MTElTSU9OX0VOVFJZOicgKyBvdGhlci5uYW1lLCB0aGlzLCBjb2xsKTtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlzaW9uRGF0YS5wdXNoKGNvbGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBzdGFsZSBjb2xsaXNpb24gZGF0YS5cclxuICAgIGNvbnN0IHJlbW92ZURhdGE6IENvbGxpc2lvbkRhdGFbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgZCA9IDA7IGQgPCBDb2xsaXNpb25NYW5hZ2VyLl9jb2xsaXNpb25EYXRhLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb2xsaXNpb25EYXRhW2RdO1xyXG4gICAgICBpZiAoZGF0YS50aW1lICE9PSBDb2xsaXNpb25NYW5hZ2VyLl90b3RhbFRpbWUpIHtcclxuICAgICAgICAvLyBPbGQgY29sbGlzaW9uIGRhdGFcclxuICAgICAgICAvLyBvbkNvbGxpc2lvbkV4aXRcclxuICAgICAgICByZW1vdmVEYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGRhdGEuYT8ub25Db2xsaXNpb25FeGl0KGRhdGEuYik7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGRhdGEuYj8ub25Db2xsaXNpb25FeGl0KGRhdGEuYSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIE1lc3NhZ2Uuc2VuZFByaW9yaXR5KCdDT0xMSVNJT05fRVhJVDonICsgZGF0YS5hLm5hbWUsIHRoaXMsIGRhdGEpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBNZXNzYWdlLnNlbmRQcmlvcml0eSgnQ09MTElTSU9OX0VYSVQ6JyArIGRhdGEuYi5uYW1lLCB0aGlzLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChyZW1vdmVEYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBpZHggPSBDb2xsaXNpb25NYW5hZ2VyLl9jb2xsaXNpb25EYXRhLmluZGV4T2YocmVtb3ZlRGF0YVswXSk7XHJcblxyXG4gICAgICBDb2xsaXNpb25NYW5hZ2VyLl9jb2xsaXNpb25EYXRhLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICByZW1vdmVEYXRhLnNoaWZ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VBc3NldCBpbXBsZW1lbnRzIElBc3NldCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGF0YTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEud2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VBc3NldExvYWRlciBpbXBsZW1lbnRzIElBc3NldExvYWRlciB7XHJcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRFeHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbJ3BuZycsICdnaWYnLCAnanBnJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IHRoaXMub25JbWFnZUxvYWRlZC5iaW5kKHRoaXMsIGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG4gICAgaW1hZ2Uuc3JjID0gYXNzZXROYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkltYWdlTG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uSW1hZ2VMb2FkZWRcIiBhc3NldE5hbWUvaW1hZ2UnLCBhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBhc3NldCA9IG5ldyBJbWFnZUFzc2V0KGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG5cclxuICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IGFueTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uQXNzZXRMb2FkZXIgaW1wbGVtZW50cyBJQXNzZXRMb2FkZXIge1xyXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWydqc29uJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgYXNzZXROYW1lKTtcclxuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2xvYWQnLFxyXG4gICAgICB0aGlzLm9uSnNvbkxvYWRlZC5iaW5kKHRoaXMsIGFzc2V0TmFtZSwgcmVxdWVzdClcclxuICAgICk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Kc29uTG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nLCByZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uSW1hZ2VMb2FkZWRcIiBhc3NldE5hbWUvaW1hZ2UnLCBhc3NldE5hbWUsIHJlcXVlc3QpO1xyXG5cclxuICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IHJlcXVlc3QuRE9ORSkge1xyXG4gICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICBjb25zdCBhc3NldCA9IG5ldyBKc29uQXNzZXQoYXNzZXROYW1lLCBqc29uKTtcclxuICAgICAgQXNzZXRNYW5hZ2VyLm9uQXNzZXRMb2FkZWQoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBc3NldE1hbmFnZXIgfSBmcm9tICcuL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRBc3NldCBpbXBsZW1lbnRzIElBc3NldCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YTogdW5rbm93bjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0QXNzZXRMb2FkZXIgaW1wbGVtZW50cyBJQXNzZXRMb2FkZXIge1xyXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWyd0eHQnXTtcclxuICB9XHJcblxyXG4gIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBhc3NldE5hbWUpO1xyXG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnbG9hZCcsXHJcbiAgICAgIHRoaXMub25UZXh0TG9hZGVkLmJpbmQodGhpcywgYXNzZXROYW1lLCByZXF1ZXN0KVxyXG4gICAgKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcsIHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdvblRleHRMb2FkZWQ6IGFzc2V0bmFtZS9yZXF1ZXN0JywgYXNzZXROYW1lLCByZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgY29uc3QgYXNzZXQgPSBuZXcgVGV4dEFzc2V0KGFzc2V0TmFtZSwgcmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICBBc3NldE1hbmFnZXIub25Bc3NldExvYWRlZChhc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldExvYWRlciB9IGZyb20gJy4vaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IEpzb25Bc3NldExvYWRlciB9IGZyb20gJy4vanNvbkFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgVGV4dEFzc2V0TG9hZGVyIH0gZnJvbSAnLi90ZXh0QXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCA9XHJcbiAgJ01FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRDo6JztcclxuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlcnM6IElBc3NldExvYWRlcltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlZEFzc2V0czogeyBbbmFtZTogc3RyaW5nXTogSUFzc2V0IH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBJbWFnZUFzc2V0TG9hZGVyKCkpO1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobmV3IEpzb25Bc3NldExvYWRlcigpKTtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBUZXh0QXNzZXRMb2FkZXIoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyTG9hZGVyKGxvYWRlcjogSUFzc2V0TG9hZGVyKTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChsb2FkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvbkFzc2V0TG9hZGVkKGFzc2V0OiBJQXNzZXQpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0Lm5hbWVdID0gYXNzZXQ7XHJcbiAgICBNZXNzYWdlLnNlbmQoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgYXNzZXQubmFtZSwgdGhpcywgYXNzZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkQXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0TmFtZS5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGwgb2YgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzKSB7XHJcbiAgICAgIGlmIChsLnN1cHBvcnRlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24gfHwgJycpICE9PSAtMSkge1xyXG4gICAgICAgIGwubG9hZEFzc2V0KGFzc2V0TmFtZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICBgVW5hYmxlIHRvIGxvYWQgYXNzZXQgd2l0aCBleHRlbnNpb24gJHtleHRlbnNpb259IGJlY2F1c2UgdGhlcmUgaXMgbm8gbG9hZGVyIGFzc29jaWF0ZWQgd2l0aCBpdC5gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0Fzc2V0TG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyBOb3Qgc3VyZSBpZiB0aGlzIHdvcmtzXHJcbiAgICByZXR1cm4gISFBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IElBc3NldCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXROYW1lXSkge1xyXG4gICAgICByZXR1cm4gQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXROYW1lXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEFzc2V0TWFuYWdlci5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuL3ZlY3RvcjInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfejogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgejogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuICAgIHRoaXMuX3ogPSB6O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3o7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHoodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgemVybygpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb25lKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKDEsIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgfVxyXG4gICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl95ID0geTtcclxuICAgIH1cclxuICAgIGlmICh6ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feiA9IHo7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHZlY3RvciBpcyBlcXVhbCB0byB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxyXG4gICAqIEBwYXJhbSB2IFZlY3RvciB0byBjaGVjayBhZ2FpbnN0XHJcbiAgICogQHJldHVybnMgQm9vbGVhbiBiYWFzZWQgb24gZXF1aXZhbGVuY3lcclxuICAgKi9cclxuICBwdWJsaWMgZXF1YWxzKHY6IFZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl94ID09PSB2Ll94ICYmIHRoaXMuX3kgPT09IHYuX3kgJiYgdGhpcy5feiA9PT0gdi5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5feCwgdGhpcy5feSwgdGhpcy5fel07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2ZWN0b3IuX3g7XHJcbiAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgdGhpcy5feiA9IHZlY3Rvci5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMywgYjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaWZmID0gYS5zdWJ0cmFjdChiKTtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoZGlmZi54ICogZGlmZi54ICsgZGlmZi55ICogZGlmZi55ICsgZGlmZi56ICogZGlmZi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl94ID0gTnVtYmVyKGpzb24ueCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi55ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feSA9IE51bWJlcihqc29uLnkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ogPSBOdW1iZXIoanNvbi56KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgdGhpcy5feSArPSB2Ll95O1xyXG4gICAgdGhpcy5feiArPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YnRyYWN0KHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLT0gdi5feDtcclxuICAgIHRoaXMuX3kgLT0gdi5feTtcclxuICAgIHRoaXMuX3ogLT0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseSh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICB0aGlzLl95ICo9IHYuX3k7XHJcbiAgICB0aGlzLl96ICo9IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGl2aWRlKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLz0gdi5feDtcclxuICAgIHRoaXMuX3kgLz0gdi5feTtcclxuICAgIHRoaXMuX3ogLz0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1ZlY3RvcjIoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5feCwgdGhpcy5feSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMiwgYjogVmVjdG9yMik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaWZmID0gYS5jbG9uZSgpLnN1YnRyYWN0KGIpO1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChkaWZmLnggKiBkaWZmLnggKyBkaWZmLnkgKiBkaWZmLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKHY6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2Ll94O1xyXG4gICAgdGhpcy5feSA9IHYuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3gsIHRoaXMuX3ldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9WZWN0b3IzKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMuX3gsIHRoaXMuX3ksIDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCh4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgfVxyXG4gICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl95ID0geTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl94ID0gTnVtYmVyKGpzb24ueCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi55ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feSA9IE51bWJlcihqc29uLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZCh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICB0aGlzLl94ICs9IHYuX3g7XHJcbiAgICB0aGlzLl95ICs9IHYuX3k7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VidHJhY3QodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAtPSB2Ll94O1xyXG4gICAgdGhpcy5feSAtPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG11bHRpcGx5KHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggKj0gdi5feDtcclxuICAgIHRoaXMuX3kgKj0gdi5feTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXZpZGUodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAvPSB2Ll94O1xyXG4gICAgdGhpcy5feSAvPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggKj0gc2NhbGU7XHJcbiAgICB0aGlzLl95ICo9IHNjYWxlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX3gsIHRoaXMuX3kpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gJy4vbWF0ZXJpYWwnO1xyXG5cclxuY2xhc3MgTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIHtcclxuICBwdWJsaWMgbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgcmVmZXJlbmNlQ291bnQ6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtYXRlcmlhbDogTWF0ZXJpYWwpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21hdGVyaWFsczogeyBbbmFtZTogc3RyaW5nXTogTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJNYXRlcmlhbChtYXRlcmlhbDogTWF0ZXJpYWwpOiB2b2lkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID0gbmV3IE1hdGVyaWFsUmVmZXJlbmNlTm9kZShcclxuICAgICAgICBtYXRlcmlhbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IE1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQrKztcclxuICAgICAgcmV0dXJuIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxSZWZlcmVuY2UgPSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgaWYgKCFtYXRlcmlhbFJlZmVyZW5jZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCByZWxlYXNlIGEgbWF0ZXJpYWwgd2hpY2ggaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQtLTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQgPCAxICYmXHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw/LmRlc3Ryb3koKTtcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbi8qKlxyXG4gKiBSZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCBhIFdlYkdMIHJlbmRlcmluZyBjb250ZXh0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xVdGlsaXRpZXMge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIFdlYkdMLCBwb3RlbnRpYWxseSB1c2luZyB0aGUgY2FudmFzIHdpdGggYW4gYXNzaWduZWQgaWQgbWF0Y2hpbmdcclxuICAgKiB0aGUgcHJvdmlkZWQgaWYgaXQgaXMgZGVmaW5lZC5cclxuICAgKiBAcGFyYW0gZWxlbWVudElkIFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0byBzZWFyY2ggZm9yLlxyXG4gICAqIEByZXR1cm5zIHJlZmVyZW5jZSB0byB0aGUgSFRNTENhbnZhc0VsZW1lbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoZWxlbWVudElkPzogc3RyaW5nKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGlmIChjYW52YXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSBjYW52YXMgZWxlbWVudCBuYW1lZCAnICsgZWxlbWVudElkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICBpZiAoZ2wgPT09IHVuZGVmaW5lZCB8fCBnbCA9PT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2dsJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWQgZm9yIGEgR0xCdWZmZXIgYXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlSW5mbyB7XHJcbiAgLyoqXHJcbiAgICogTG9jYXRpb24gb2YgdGhlIGF0dHJpYnV0ZVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBsb2NhdGlvbjogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIChudW1iZXIgb2YgZWxlbWVudHMpIGluIHRoaXMgYXR0cmlidXRlIChpLmUuIFZlY3RvcjMgPSAzKVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBzaXplOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIFdlYkdMIGJ1ZmZlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMQnVmZmVyIHtcclxuICBwcml2YXRlIF9oYXNBdHRyaWJ1dGVMb2NhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2VsZW1lbnRTaXplOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc3RyaWRlOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2J1ZmZlcjogV2ViR0xCdWZmZXI7XHJcblxyXG4gIHByaXZhdGUgX3RhcmdldEJ1ZmZlclR5cGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9kYXRhVHlwZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX21vZGU6IG51bWJlcjtcclxuICBwcml2YXRlIF90eXBlU2l6ZTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9kYXRhOiBudW1iZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2F0dHJpYnV0ZXM6IEF0dHJpYnV0ZUluZm9bXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEdMIEJ1ZmZlci5cclxuICAgKiBAcGFyYW0gZGF0YVR5cGUgVGhlIGRhdGEgdHlwZSBvZiB0aGUgYnVmZmVyLiBEZWZhdWx0OiBnbC5GTE9BVFxyXG4gICAqIEBwYXJhbSB0YXJnZXRCdWZmZXJUeXBlIFRoZSBidWZmZXIgdGFyZ2V0IHR5cGUuIGdsLkFSUkFZX0JVRkZFUiBvciBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUi4gRGVmYXVsdDogZ2wuQVJSQVlfQlVGRkVSXHJcbiAgICogQHBhcmFtIG1vZGUgVGhlIGRyYXdpbmcgbW9kZSBvZiB0aGUgYnVmZmVyLiAoaS5lLiBnbC5UUklBTkdMRVMgb3IgZ2wuTElORVMpLiBEZWZhdWx0OiBnbC5UUklBTkdMRVNcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBkYXRhVHlwZTogbnVtYmVyID0gZ2wuRkxPQVQsXHJcbiAgICB0YXJnZXRCdWZmZXJUeXBlOiBudW1iZXIgPSBnbC5BUlJBWV9CVUZGRVIsXHJcbiAgICBtb2RlOiBudW1iZXIgPSBnbC5UUklBTkdMRVNcclxuICApIHtcclxuICAgIHRoaXMuX2VsZW1lbnRTaXplID0gMDtcclxuICAgIHRoaXMuX2RhdGFUeXBlID0gZGF0YVR5cGU7XHJcbiAgICB0aGlzLl90YXJnZXRCdWZmZXJUeXBlID0gdGFyZ2V0QnVmZmVyVHlwZTtcclxuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG5cclxuICAgIC8vIERldGVybWluZSBieXRlIHNpemVcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgLy8gcG9zaXRpdmUgb3IgbmVnYXRpdmVcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgIC8vIG9ubHkgcG9zaXRpdmUgYnV0IHR3aWNlIHRoZSBzaXplIG9mIGludFxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuU0hPUlQ6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDE7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgZGF0YSB0eXBlICR7ZGF0YVR5cGUudG9TdHJpbmcoKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaXplIG9mIGVsZW1lbnRzICogbnVtYmVyIG9mIGJ5dGVzIGluIGVhY2ggZWxlbWVudFxyXG4gICAgdGhpcy5fYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCkgYXMgV2ViR0xCdWZmZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95cyB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVCdWZmZXIodGhpcy5fYnVmZmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmRzIHRoaXMgYnVmZmVyLlxyXG4gICAqIEBwYXJhbSBub3JtYWxpemVkIEluZGljYXRlcyBpZiB0aGlzIGRhdGEgc2hvdWxkIGJlIG5vcm1hbGl6ZWQuIERlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIGJpbmQobm9ybWFsaXplZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIHRoaXMuX2J1ZmZlcik7XHJcblxyXG4gICAgaWYgKHRoaXMuX2hhc0F0dHJpYnV0ZUxvY2F0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZXMuZm9yRWFjaCgoaXQpID0+IHtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgaXQubG9jYXRpb24sXHJcbiAgICAgICAgICBpdC5zaXplLFxyXG4gICAgICAgICAgdGhpcy5fZGF0YVR5cGUsXHJcbiAgICAgICAgICBub3JtYWxpemVkLFxyXG4gICAgICAgICAgdGhpcy5fc3RyaWRlLFxyXG4gICAgICAgICAgaXQub2Zmc2V0ICogdGhpcy5fdHlwZVNpemVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpdC5sb2NhdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2F0dHJpYnV0ZXMuZm9yRWFjaCgoaXQpID0+IHtcclxuICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGl0LmxvY2F0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGFuIGF0dHJpYnV0ZSB3aXRoIHRoZSBwcm92aWRlZCBpbmZvcm1hdGlvbiB0byB0aGUgYnVmZmVyXHJcbiAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIHRvIGJlIGFkZGVkXHJcbiAgICovXHJcbiAgcHVibGljIGFkZEF0dHJpYnV0ZUxvY2F0aW9uKGluZm86IEF0dHJpYnV0ZUluZm8pOiB2b2lkIHtcclxuICAgIHRoaXMuX2hhc0F0dHJpYnV0ZUxvY2F0aW9uID0gdHJ1ZTtcclxuICAgIGluZm8ub2Zmc2V0ID0gdGhpcy5fZWxlbWVudFNpemU7XHJcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLnB1c2goaW5mbyk7XHJcbiAgICB0aGlzLl9lbGVtZW50U2l6ZSArPSBpbmZvLnNpemU7XHJcbiAgICB0aGlzLl9zdHJpZGUgPSB0aGlzLl9lbGVtZW50U2l6ZSAqIHRoaXMuX3R5cGVTaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgZGF0YSBpbiB0aGUgYnVmZmVyIHdpdGggcHJvdmlkZWQgZGF0YS5cclxuICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBiZSBsb2FkZWQgaW4gdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRhdGEoKTtcclxuICAgIHRoaXMucHVzaEJhY2tEYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXJzIG91dCBhbGwgZGF0YSBpbiB0aGUgYnVmZmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGVhckRhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGRhdGEgdG8gdGhlIGJ1ZmZlclxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICovXHJcbiAgcHVibGljIHB1c2hCYWNrRGF0YShkYXRhOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBsb2FkcyB0aGlzIGRhdGEgdG8gdGhlIEdQVVxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGxvYWQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIHRoaXMuX2J1ZmZlcik7XHJcblxyXG4gICAgbGV0IGJ1ZmZlckRhdGE6IEFycmF5QnVmZmVyO1xyXG4gICAgc3dpdGNoICh0aGlzLl9kYXRhVHlwZSkge1xyXG4gICAgICBjYXNlIGdsLkZMT0FUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLklOVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEludDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfSU5UOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuU0hPUlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQxNkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgVWludDE2QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuQllURTpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEludDhBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9CWVRFOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgRGF0YSB0eXBlIGVycm9yIGluIHB1c2hCYWNrRGF0YSgpIGZvciBkYXRhdHlwZSAke3RoaXMuX2RhdGFUeXBlLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2wuYnVmZmVyRGF0YSh0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCBidWZmZXJEYXRhLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERyYXdzIHRoZSBidWZmZXJcclxuICAgKi9cclxuICBwdWJsaWMgZHJhdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl90YXJnZXRCdWZmZXJUeXBlID09PSBnbC5BUlJBWV9CVUZGRVIpIHtcclxuICAgICAgZ2wuZHJhd0FycmF5cyh0aGlzLl9tb2RlLCAwLCB0aGlzLl9kYXRhLmxlbmd0aCAvIHRoaXMuX2VsZW1lbnRTaXplKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9PT0gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcclxuICAgICAgZ2wuZHJhd0VsZW1lbnRzKHRoaXMuX21vZGUsIHRoaXMuX2RhdGEubGVuZ3RoLCB0aGlzLl9kYXRhVHlwZSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBkYXRhIGZvciBhIHNpbmdsZSB2ZXJ0ZXhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZXJ0ZXgge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgdGV4Q29vcmRzOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICB4OiBudW1iZXIgPSAwLFxyXG4gICAgeTogbnVtYmVyID0gMCxcclxuICAgIHo6IG51bWJlciA9IDAsXHJcbiAgICB0dTogbnVtYmVyID0gMCxcclxuICAgIHR2OiBudW1iZXIgPSAwXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHRoaXMucG9zaXRpb24ueiA9IHo7XHJcblxyXG4gICAgdGhpcy50ZXhDb29yZHMueCA9IHR1O1xyXG4gICAgdGhpcy50ZXhDb29yZHMueSA9IHR2O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMucG9zaXRpb24udG9BcnJheSgpKTtcclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMudGV4Q29vcmRzLnRvQXJyYXkoKSk7XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbmZvLCBHTEJ1ZmZlciB9IGZyb20gJy4uL2dsL2dsQnVmZmVyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4JztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2J1ZmZlcjogR0xCdWZmZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9tYXRlcmlhbDogTWF0ZXJpYWwgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9tYXRlcmlhbE5hbWU6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX3ZlcnRpY2VzOiBWZXJ0ZXhbXSA9IFtdO1xyXG4gIHByb3RlY3RlZCBfb3JpZ2luOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBtYXRlcmlhbE5hbWU6IHN0cmluZyxcclxuICAgIHdpZHRoOiBudW1iZXIgPSAxMDAsXHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDEwMFxyXG4gICkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5fbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWxOYW1lO1xyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSBNYXRlcmlhbE1hbmFnZXIuZ2V0TWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG9yaWdpbigpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiB0aGlzLl9vcmlnaW47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IG9yaWdpbih2YWx1ZTogVmVjdG9yMykge1xyXG4gICAgdGhpcy5fb3JpZ2luID0gdmFsdWU7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlVmVydGljZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYnVmZmVyKSB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVsZWFzZU1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbCA9IHVuZGVmaW5lZDtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX21hdGVyaWFsTmFtZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEdMQnVmZmVyKCk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIC8vIFJlbW92ZWQgcmVmZXJlbmNlIHRvIHNoYWRlciwgYmFkIHByYWN0aWNlIHRvIHBhc3Mgc2hhZGVyIGluZm8gdG8gc3ByaXRlIG9uIGxvYWRcclxuICAgIC8vIFN0aWxsIG5vdCBpZGVhbCAocmVmZXJlbmNpbmcgYV9sb2NhdGlvbiBpbiB2ZXJ0ZXhTaGFkZXJTb3VyY2UgYnkgaGFyZGNvZGluZyAwKVxyXG4gICAgLy8gRWFjaCB2YXJpYWJsZSBpbiBzaGFkZXJTb3VyY2UgaXMgcmVmZXJlbmNlZCBieSBpbmRleCBpbiBvcmRlciBvZiBkZWNsYXJhdGlvbiAoZS5nLiBiZWNhdXNlIGFfbG9jYXRpb24gaXMgdGhlIGZpcnN0IHZhcmlhYmxlIGl0IGlzIGluZGV4IDApXHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5sb2NhdGlvbiA9IDA7XHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5zaXplID0gMztcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbihwb3NpdGlvbkF0dHJpYnV0ZSk7XHJcblxyXG4gICAgbGV0IHRleENvb3JkQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIHRleENvb3JkQXR0cmlidXRlLmxvY2F0aW9uID0gMTtcclxuICAgIHRleENvb3JkQXR0cmlidXRlLnNpemUgPSAyO1xyXG4gICAgdGhpcy5fYnVmZmVyLmFkZEF0dHJpYnV0ZUxvY2F0aW9uKHRleENvb3JkQXR0cmlidXRlKTtcclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZVZlcnRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgcHVibGljIGRyYXcoc2hhZGVyOiBTaGFkZXIsIG1vZGVsOiBNYXRyaXg0eDQpOiB2b2lkIHtcclxuICAgIGxldCBtb2RlbExvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9tb2RlbCcpO1xyXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbExvY2F0aW9uLCBmYWxzZSwgbW9kZWwudG9GbG9hdDMyQXJyYXkoKSk7XHJcblxyXG4gICAgY29uc3QgY29sb3JMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfdGludCcpO1xyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsKSB7XHJcbiAgICAgIGdsLnVuaWZvcm00ZnYoY29sb3JMb2NhdGlvbiwgdGhpcy5fbWF0ZXJpYWwudGludC50b0Zsb2F0MzJBcnJheSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgIHRoaXMuX21hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLmFjdGl2YXRlQW5kQmluZCgwKTtcclxuICAgICAgY29uc3QgZGlmZnVzZUxvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9kaWZmdXNlJyk7XHJcbiAgICAgIC8vIHBhc3MgYSBzaW5nbGUgaW50ZWdlclxyXG4gICAgICBnbC51bmlmb3JtMWkoZGlmZnVzZUxvY2F0aW9uLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fYnVmZmVyKSB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMuX2J1ZmZlci5kcmF3KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFzc2lnbmVkIGJ1ZmZlciBmb3Igc3ByaXRlICcgKyB0aGlzLl9uYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVWZXJ0aWNlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1pblggPSAtKHRoaXMuX3dpZHRoICogdGhpcy5fb3JpZ2luLngpO1xyXG4gICAgY29uc3QgbWF4WCA9IHRoaXMuX3dpZHRoICogKDEuMCAtIHRoaXMuX29yaWdpbi54KTtcclxuXHJcbiAgICBjb25zdCBtaW5ZID0gLSh0aGlzLl93aWR0aCAqIHRoaXMuX29yaWdpbi55KTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLl9oZWlnaHQgKiAoMS4wIC0gdGhpcy5fb3JpZ2luLnkpO1xyXG5cclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgdGhpcy5fdmVydGljZXMgPSBbXHJcbiAgICAgIC8vIHgsIHksIHosIFU6IHRleHR1cmUgeCwgVjogdGV4dHVyZSB5XHJcbiAgICAgIC8vIHRyaWFuZ2xlIDFcclxuICAgICAgLy8gcG9pbnQgMVxyXG4gICAgICBuZXcgVmVydGV4KG1pblgsIG1pblksIDAsIDAsIDAsKSxcclxuICAgICAgLy8gcG9pbnQgMlxyXG4gICAgICBuZXcgVmVydGV4KG1pblgsIG1heFksIDAsIDAsIDEuMCwpLFxyXG4gICAgICAvLyBwb2ludCAzXHJcbiAgICAgIG5ldyBWZXJ0ZXgobWF4WCwgbWF4WSwgMCwgMS4wLCAxLjAsKSxcclxuICAgICAgLy8gdHJpYW5nbGUgMlxyXG4gICAgICAvLyBwb2ludCA0XHJcbiAgICAgIG5ldyBWZXJ0ZXgobWF4WCwgbWF4WSwgMCwgMS4wLCAxLjApLFxyXG4gICAgICAvLyBwb2ludCA1XHJcbiAgICAgIG5ldyBWZXJ0ZXgobWF4WCwgbWluWSwgMCwgMS4wLCAwKSxcclxuICAgICAgLy8gcG9pbnQgNlxyXG4gICAgICBuZXcgVmVydGV4KG1pblgsIG1pblksIDAsIDAsIDApLFxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLl92ZXJ0aWNlcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8ucHVzaEJhY2tEYXRhKHYudG9BcnJheSgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2J1ZmZlcj8udXBsb2FkKCk7XHJcbiAgICB0aGlzLl9idWZmZXI/LnVuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlY2FsY3VsYXRlVmVydGljZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtaW5YID0gLSh0aGlzLl93aWR0aCAqIHRoaXMuX29yaWdpbi54KTtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLl93aWR0aCAqICgxLjAgLSB0aGlzLl9vcmlnaW4ueCk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IC0odGhpcy5faGVpZ2h0ICogdGhpcy5fb3JpZ2luLnkpO1xyXG4gICAgY29uc3QgbWF4WSA9IHRoaXMuX2hlaWdodCAqICgxLjAgLSB0aGlzLl9vcmlnaW4ueSk7XHJcblxyXG4gICAgdGhpcy5fdmVydGljZXNbMF0/LnBvc2l0aW9uLnNldChtaW5YLCBtaW5ZKTtcclxuICAgIHRoaXMuX3ZlcnRpY2VzWzFdPy5wb3NpdGlvbi5zZXQobWluWCwgbWF4WSk7XHJcbiAgICB0aGlzLl92ZXJ0aWNlc1syXT8ucG9zaXRpb24uc2V0KG1heFgsIG1heFkpO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzWzNdPy5wb3NpdGlvbi5zZXQobWF4WCwgbWF4WSk7XHJcbiAgICB0aGlzLl92ZXJ0aWNlc1s0XT8ucG9zaXRpb24uc2V0KG1heFgsIG1pblkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbNV0/LnBvc2l0aW9uLnNldChtaW5YLCBtaW5ZKTtcclxuICAgIHRoaXMuX2J1ZmZlcj8uY2xlYXJEYXRhKCk7XHJcblxyXG4gICAgdGhpcy5fdmVydGljZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9idWZmZXI/LnVwbG9hZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyPy51bmJpbmQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBc3NldE1hbmFnZXIsXHJcbiAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVELFxyXG59IGZyb20gJy4uL2Fzc2V0cy9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAnLi4vYXNzZXRzL2ltYWdlQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNYW5hZ2VyIH0gZnJvbSAnLi9tYXRlcmlhbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5jbGFzcyBVVkluZm8ge1xyXG4gIHB1YmxpYyBtaW46IFZlY3RvcjI7XHJcbiAgcHVibGljIG1heDogVmVjdG9yMjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1pbjogVmVjdG9yMiwgbWF4OiBWZWN0b3IyKSB7XHJcbiAgICB0aGlzLm1pbiA9IG1pbjtcclxuICAgIHRoaXMubWF4ID0gbWF4O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlIGV4dGVuZHMgU3ByaXRlIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9mcmFtZUhlaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZyYW1lV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9mcmFtZUNvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZnJhbWVTZXF1ZW5jZTogbnVtYmVyW107XHJcbiAgLy8gVE9ETzogTWFrZSB0aGlzIGNvbmZpZ3VyYWJsZVxyXG4gIHByaXZhdGUgX2ZyYW1lVGltZTogbnVtYmVyID0gMTIxO1xyXG4gIHByaXZhdGUgX2ZyYW1lVVZzOiBVVkluZm9bXSA9IFtdO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIF9jdXJyZW50RnJhbWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfYXNzZXRMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9hc3NldFdpZHRoOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgX2Fzc2V0SGVpZ2h0OiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgX2lzUGxheWluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG1hdGVyaWFsTmFtZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDEwMCxcclxuICAgIGhlaWdodDogbnVtYmVyID0gMTAwLFxyXG4gICAgZnJhbWVXaWR0aDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUhlaWdodDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUNvdW50OiBudW1iZXIgPSAxLFxyXG4gICAgZnJhbWVTZXF1ZW5jZTogbnVtYmVyW10gPSBbXVxyXG4gICkge1xyXG4gICAgc3VwZXIobmFtZSwgbWF0ZXJpYWxOYW1lLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLl9mcmFtZVdpZHRoID0gZnJhbWVXaWR0aDtcclxuICAgIHRoaXMuX2ZyYW1lSGVpZ2h0ID0gZnJhbWVIZWlnaHQ7XHJcbiAgICB0aGlzLl9mcmFtZUNvdW50ID0gZnJhbWVDb3VudDtcclxuICAgIHRoaXMuX2ZyYW1lU2VxdWVuY2UgPSBmcmFtZVNlcXVlbmNlO1xyXG5cclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZU5hbWUsXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc1BsYXlpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNQbGF5aW5nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcmFtZShmcmFtZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoZnJhbWVOdW1iZXIgPj0gdGhpcy5fZnJhbWVDb3VudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0ZyYW1lIGlzIG91ciBvZiByYW5nZTonICtcclxuICAgICAgICAgIGZyYW1lTnVtYmVyICtcclxuICAgICAgICAgICdcXG5mcmFtZUNvdW50OiAnICtcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lQ291bnRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdXJyZW50RnJhbWUgPSBmcmFtZU51bWJlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBtZXNzYWdlLmNvZGUgPT09XHJcbiAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX21hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZU5hbWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9hc3NldExvYWRlZCA9IHRydWU7XHJcbiAgICAgIGxldCBhc3NldCA9IG1lc3NhZ2UuY29udGV4dCBhcyBJbWFnZUFzc2V0O1xyXG4gICAgICB0aGlzLl9hc3NldEhlaWdodCA9IGFzc2V0LmhlaWdodDtcclxuICAgICAgdGhpcy5fYXNzZXRXaWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVVWcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmxvYWQoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2Fzc2V0TG9hZGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0dXBGcm9tTWF0ZXJpYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyBIYWNrIGFyb3VuZCBmb3Igbm90IGJlaW5nIGluc3RhbnRpYXRlZCBiZWZvcmUgb25NZXNzYWdlIGlzIHNlbnRcclxuICAgIC8vIFJldmlzaXRcclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCAmJiAhdGhpcy5fYXNzZXRMb2FkZWQpIHtcclxuICAgICAgdGhpcy5zZXR1cEZyb21NYXRlcmlhbCgpO1xyXG4gICAgICBpZiAoIXRoaXMuX2Fzc2V0TG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9pc1BsYXlpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRUaW1lICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudFRpbWUgPiB0aGlzLl9mcmFtZVRpbWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEZyYW1lKys7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gMDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50RnJhbWUgPj0gdGhpcy5fZnJhbWVTZXF1ZW5jZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmcmFtZVVWcyA9IHRoaXMuX2ZyYW1lU2VxdWVuY2VbdGhpcy5fY3VycmVudEZyYW1lXTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbMF0udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4pO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1sxXS50ZXhDb29yZHMuY29weUZyb20oXHJcbiAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluLngsXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4LnlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzJdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4KTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbM10udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1s0XS50ZXhDb29yZHMuY29weUZyb20oXHJcbiAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4LngsXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluLnlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzVdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluKTtcclxuXHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8uY2xlYXJEYXRhKCk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnVwbG9hZCgpO1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVVZzKCk6IHZvaWQge1xyXG4gICAgbGV0IHRvdGFsV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgeVZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mcmFtZUNvdW50OyBpKyspIHtcclxuICAgICAgdG90YWxXaWR0aCA9IGkgKiB0aGlzLl9mcmFtZVdpZHRoO1xyXG4gICAgICBpZiAodG90YWxXaWR0aCA+IHRoaXMuX2Fzc2V0V2lkdGgpIHtcclxuICAgICAgICB5VmFsdWUrKztcclxuICAgICAgICB0b3RhbFdpZHRoID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHUgPSAoaSAqIHRoaXMuX2ZyYW1lV2lkdGgpIC8gdGhpcy5fYXNzZXRXaWR0aDtcclxuICAgICAgbGV0IHYgPSAoeVZhbHVlICogdGhpcy5fZnJhbWVIZWlnaHQpIC8gdGhpcy5fYXNzZXRIZWlnaHQ7XHJcbiAgICAgIGxldCBtaW46IFZlY3RvcjIgPSBuZXcgVmVjdG9yMih1LCB2KTtcclxuXHJcbiAgICAgIGxldCB1TWF4ID0gKGkgKiB0aGlzLl9mcmFtZVdpZHRoICsgdGhpcy5fZnJhbWVXaWR0aCkgLyB0aGlzLl9hc3NldFdpZHRoO1xyXG4gICAgICBsZXQgdk1heCA9XHJcbiAgICAgICAgKHlWYWx1ZSAqIHRoaXMuX2ZyYW1lSGVpZ2h0ICsgdGhpcy5fZnJhbWVIZWlnaHQpIC8gdGhpcy5fYXNzZXRIZWlnaHQ7XHJcbiAgICAgIGxldCBtYXg6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMih1TWF4LCB2TWF4KTtcclxuXHJcbiAgICAgIHRoaXMuX2ZyYW1lVVZzLnB1c2gobmV3IFVWSW5mbyhtaW4sIG1heCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cEZyb21NYXRlcmlhbCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fYXNzZXRMb2FkZWQpIHtcclxuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBNYXRlcmlhbE1hbmFnZXIuZ2V0TWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxOYW1lKTtcclxuICAgICAgaWYgKG1hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZT8uaXNMb2FkZWQpIHtcclxuICAgICAgICBpZiAoQXNzZXRNYW5hZ2VyLmlzQXNzZXRMb2FkZWQobWF0ZXJpYWwuZGlmZnVzZVRleHR1cmVOYW1lKSkge1xyXG4gICAgICAgICAgdGhpcy5fYXNzZXRIZWlnaHQgPSBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgICAgICB0aGlzLl9hc3NldFdpZHRoID0gbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUud2lkdGg7XHJcbiAgICAgICAgICB0aGlzLl9hc3NldExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVVWcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL2NvcmUvd29ybGQvc2ltT2JqZWN0JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gIHByb3RlY3RlZCBfb3duZXI6IFNpbU9iamVjdCB8IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgX2RhdGE6IElDb21wb25lbnREYXRhO1xyXG5cclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUNvbXBvbmVudERhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvd25lcigpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX293bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE93bmVyKG93bmVyOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyID0gb3duZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2NvcmUvZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zcHJpdGUnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9jb3JlL21hdGgvdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50RGF0YSBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIG1hdGVyaWFsTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIG9yaWdpbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLndpZHRoKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSBOdW1iZXIoanNvbi53aWR0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBOdW1iZXIoanNvbi5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLm1hdGVyaWFsTmFtZSkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsTmFtZSA9IFN0cmluZyhqc29uLm1hdGVyaWFsTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5vcmlnaW4pIHtcclxuICAgICAgdGhpcy5vcmlnaW4uc2V0RnJvbUpzb24oanNvbi5vcmlnaW4pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3Nwcml0ZSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGxldCBkYXRhID0gbmV3IFNwcml0ZUNvbXBvbmVudERhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGVDb21wb25lbnQoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBTcHJpdGU7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgaWYgKGRhdGEud2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IE51bWJlcihkYXRhLndpZHRoKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2hlaWdodCA9IE51bWJlcihkYXRhLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKFxyXG4gICAgICBkYXRhLm5hbWUsXHJcbiAgICAgIGRhdGEubWF0ZXJpYWxOYW1lLFxyXG4gICAgICB0aGlzLl93aWR0aCxcclxuICAgICAgdGhpcy5faGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghZGF0YS5vcmlnaW4uZXF1YWxzKFZlY3RvcjMuemVybykpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLm9yaWdpbi5jb3B5RnJvbShkYXRhLm9yaWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZSB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3MvYW5pbWF0ZWRTcHJpdGUnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vY29yZS9tYXRoL3ZlY3RvcjMnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudERhdGEgfSBmcm9tICcuL3Nwcml0ZUNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgZXh0ZW5kcyBTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgaW1wbGVtZW50cyBJQ29tcG9uZW50RGF0YVxyXG57XHJcbiAgcHVibGljIGZyYW1lV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZVNlcXVlbmNlOiBudW1iZXJbXSA9IFtdO1xyXG4gIHB1YmxpYyBhdXRvUGxheTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIHN1cGVyLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIGlmIChqc29uLmF1dG9QbGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5hdXRvUGxheSA9IEJvb2xlYW4oanNvbi5hdXRvUGxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uZnJhbWVXaWR0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5pbWF0ZWQgc3ByaXRlIGRhdGEgcmVxdWlyZXMgZnJhbWVXaWR0aCB0byBiZSBkZWZpbmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyYW1lV2lkdGggPSBOdW1iZXIoanNvbi5mcmFtZVdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZUhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnQW5pbWF0ZWQgc3ByaXRlIGRhdGEgcmVxdWlyZXMgZnJhbWVIZWlnaHQgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVIZWlnaHQgPSBOdW1iZXIoanNvbi5mcmFtZUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uZnJhbWVDb3VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5pbWF0ZWQgc3ByaXRlIGRhdGEgcmVxdWlyZXMgZnJhbWVDb3VudCB0byBiZSBkZWZpbmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyYW1lQ291bnQgPSBOdW1iZXIoanNvbi5mcmFtZUNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZVNlcXVlbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZVNlcXVlbmNlIHRvIGJlIGRlZmluZWQnXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyYW1lU2VxdWVuY2UgPSBqc29uLmZyYW1lU2VxdWVuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdhbmltYXRlZFNwcml0ZSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGxldCBkYXRhID0gbmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfYXV0b3BQbGF5OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogQW5pbWF0ZWRTcHJpdGU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgdGhpcy5fYXV0b3BQbGF5ID0gZGF0YS5hdXRvUGxheTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgQW5pbWF0ZWRTcHJpdGUoXHJcbiAgICAgIGRhdGEubmFtZSxcclxuICAgICAgZGF0YS5tYXRlcmlhbE5hbWUsXHJcbiAgICAgIGRhdGEuZnJhbWVXaWR0aCxcclxuICAgICAgZGF0YS5mcmFtZUhlaWdodCxcclxuICAgICAgZGF0YS5mcmFtZVdpZHRoLFxyXG4gICAgICBkYXRhLmZyYW1lSGVpZ2h0LFxyXG4gICAgICBkYXRhLmZyYW1lQ291bnQsXHJcbiAgICAgIGRhdGEuZnJhbWVTZXF1ZW5jZVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBIYXZlIHRvIGRvIHRoaXMgZXZlbiB0aG91Z2ggY2FsbGluZyBzdXBlciBiZWNhdXNlIG9mIHRoaXMuX3Nwcml0ZSBjYWxsXHJcbiAgICAvLyBhYm92ZSB3aXBlcyBvdXQgdGhlIG9yaWdpblxyXG4gICAgaWYgKCFkYXRhLm9yaWdpbi5lcXVhbHMoVmVjdG9yMy56ZXJvKSkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUub3JpZ2luLmNvcHlGcm9tKGRhdGEub3JpZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNQbGF5aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nwcml0ZS5pc1BsYXlpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlUmVhZHkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2F1dG9wUGxheSkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUuc3RvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS51cGRhdGUodGltZSk7XHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJhbWUoZnJhbWVOdW1iZXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLnNldEZyYW1lKGZyYW1lTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLmRyYXcoc2hhZGVyLCB0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IFRleHRBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy90ZXh0QXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuXHJcbmNsYXNzIEZvbnRVdGlsaXRpZXMge1xyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEZpZWxkVmFsdWUoZmllbGQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZmllbGQuc3BsaXQoJz0nKVsxXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb250R2x5cGgge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIHg6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIHhPZmZzZXQ6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIHlPZmZzZXQ6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIHhBZHZhbmNlOiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBwYWdlOiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBjaGFubmVsOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUZpZWxkcyhmaWVsZHM6IHN0cmluZ1tdKTogRm9udEdseXBoIHtcclxuICAgIGNvbnN0IGdseXBoOiBGb250R2x5cGggPSBuZXcgRm9udEdseXBoKCk7XHJcblxyXG4gICAgZ2x5cGguaWQgPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbMV0pKTtcclxuICAgIGdseXBoLnggPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbMl0pKTtcclxuICAgIGdseXBoLnkgPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbM10pKTtcclxuICAgIGdseXBoLndpZHRoID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzRdKSk7XHJcbiAgICBnbHlwaC5oZWlnaHQgPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbNV0pKTtcclxuICAgIGdseXBoLnhPZmZzZXQgPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbNl0pKTtcclxuICAgIGdseXBoLnlPZmZzZXQgPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbN10pKTtcclxuICAgIGdseXBoLnhBZHZhbmNlID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzhdKSk7XHJcbiAgICBnbHlwaC5wYWdlID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzldKSk7XHJcbiAgICBnbHlwaC5jaGFubmVsID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzEwXSkpO1xyXG5cclxuICAgIHJldHVybiBnbHlwaDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCaXRtYXBGb250IGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZm9udEZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfYXNzZXRMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfaW1hZ2VGaWxlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZ2x5cGhzOiB7IFtpZDogbnVtYmVyXTogRm9udEdseXBoIH0gPSB7fTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9pbWFnZVdpZHRoOiBudW1iZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX2ltYWdlSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGZvbnRGaWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2ZvbnRGaWxlTmFtZSA9IGZvbnRGaWxlTmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpbWFnZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VXaWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2VIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZUhlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGV4dHVyZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZUZpbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Fzc2V0TG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXRBc3NldCh0aGlzLl9mb250RmlsZU5hbWUpO1xyXG4gICAgaWYgKGFzc2V0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5wcm9jZXNzRm9udEZpbGUoU3RyaW5nKGFzc2V0LmRhdGEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX2ZvbnRGaWxlTmFtZSxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBtZXNzYWdlLmNvZGUgPT09XHJcbiAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX2ZvbnRGaWxlTmFtZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucHJvY2Vzc0ZvbnRGaWxlKFN0cmluZygobWVzc2FnZS5jb250ZXh0IGFzIFRleHRBc3NldCkuZGF0YSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEdseXBoKGNoYXI6IHN0cmluZyk6IEZvbnRHbHlwaCB7XHJcbiAgICAvLyByZXBsYWNlIHVucmVjb2duaXplZCBjaGFyYWN0ZXJzIHdpdGggYSAnMCcuXHJcbiAgICBsZXQgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcclxuICAgIGNvZGUgPSB0aGlzLl9nbHlwaHNbY29kZV0gPT09IHVuZGVmaW5lZCA/IDQ4IDogY29kZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZ2x5cGhzW2NvZGVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1lYXN1cmVUZXh0KHRleHQ6IHN0cmluZyk6IFZlY3RvcjIge1xyXG4gICAgbGV0IHNpemU6IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcblxyXG4gICAgbGV0IG1heFggPSAwO1xyXG4gICAgbGV0IHggPSAwO1xyXG4gICAgbGV0IHkgPSAwO1xyXG5cclxuICAgIHRleHQuc3BsaXQoJycpLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgc3dpdGNoIChjKSB7XHJcbiAgICAgICAgY2FzZSAnXFxuJzpcclxuICAgICAgICAgIGlmICh4ID4gbWF4WCkge1xyXG4gICAgICAgICAgICBtYXhYID0geDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHggPSAwO1xyXG4gICAgICAgICAgeSArPSB0aGlzLl9zaXplO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHggKz0gdGhpcy5nZXRHbHlwaChjKS54QWR2YW5jZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXplLnNldChtYXhYLCB5KTtcclxuICAgIHJldHVybiBzaXplO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzRm9udEZpbGUoY29udGVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgY2hhckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IGxpbmVzOiBzdHJpbmdbXSA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpO1xyXG4gICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICAvLyBTYW5pdGl6ZSBsaW5lXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBsaW5lLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKTtcclxuICAgICAgY29uc3QgZmllbGRzID0gZGF0YS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgLy8gTG9vayBhdCB0eXBlIG9mIGxpbmVcclxuICAgICAgc3dpdGNoIChmaWVsZHNbMF0pIHtcclxuICAgICAgICBjYXNlICdpbmZvJzpcclxuICAgICAgICAgIHRoaXMuX3NpemUgPSBOdW1iZXIoRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbMl0pKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NvbW1vbic6XHJcbiAgICAgICAgICB0aGlzLl9pbWFnZVdpZHRoID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzNdKSk7XHJcbiAgICAgICAgICB0aGlzLl9pbWFnZUhlaWdodCA9IE51bWJlcihcclxuICAgICAgICAgICAgRm9udFV0aWxpdGllcy5leHRyYWN0RmllbGRWYWx1ZShmaWVsZHNbNF0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncGFnZSc6XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzFdKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbWFnZUZpbGUgPSBGb250VXRpbGl0aWVzLmV4dHJhY3RGaWVsZFZhbHVlKGZpZWxkc1syXSk7XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIHF1b3Rlc1xyXG4gICAgICAgICAgICB0aGlzLl9pbWFnZUZpbGUgPSB0aGlzLl9pbWFnZUZpbGUucmVwbGFjZSgvXCIvZywgJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJlcGVuZCB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgbmFtZS4gIFRPRE86IFRoaXMgc2hvdWxkIGJlIGNvbmZpZ3VyYWJsZVxyXG4gICAgICAgICAgICB0aGlzLl9pbWFnZUZpbGUgPSAnc3JjL2Fzc2V0cy9mb250cycgKyB0aGlzLl9pbWFnZUZpbGUudHJpbSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2hhcnMnOlxyXG4gICAgICAgICAgY2hhckNvdW50ID0gTnVtYmVyKEZvbnRVdGlsaXRpZXMuZXh0cmFjdEZpZWxkVmFsdWUoZmllbGRzWzFdKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjaGFyJzpcclxuICAgICAgICAgIGNvbnN0IGdseXBoID0gRm9udEdseXBoLmZyb21GaWVsZHMoZmllbGRzKTtcclxuICAgICAgICAgIHRoaXMuX2dseXBoc1tnbHlwaC5pZF0gPSBnbHlwaDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIGxvYWRlZCBnbHlwaHNcclxuICAgIGxldCBhY3R1YWxHbHlwaENvdW50ID0gMDtcclxuXHJcbiAgICAvL09ubHkgY291bnQgcHJvcGVydGllc1xyXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9nbHlwaHMpO1xyXG5cclxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9nbHlwaHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGFjdHVhbEdseXBoQ291bnQrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGFjdHVhbEdseXBoQ291bnQgIT09IGNoYXJDb3VudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYEZvbnQgZmlsZSByZXBvcnRlZCBleGlzdGVuY2Ugb2YgJHtjaGFyQ291bnR9IGdseXBocywgYnV0IG9ubHkgJHthY3R1YWxHbHlwaENvdW50fSB3ZXJlIGZvdW5kLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hc3NldExvYWRlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICcuL2JpdG1hcEZvbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpdG1hcEZvbnRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfZm9udHM6IHsgW25hbWU6IHN0cmluZ106IEJpdG1hcEZvbnQgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZEZvbnQobmFtZTogc3RyaW5nLCBmb250RmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzW25hbWVdID0gbmV3IEJpdG1hcEZvbnQobmFtZSwgZm9udEZpbGVOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Rm9udChuYW1lOiBzdHJpbmcpOiBCaXRtYXBGb250IHtcclxuICAgIGlmIChCaXRtYXBGb250TWFuYWdlci5fZm9udHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZm9udCBuYW1lZCAke25hbWV9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEJpdG1hcEZvbnRNYW5hZ2VyLl9mb250c1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzKTtcclxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIEJpdG1hcEZvbnRNYW5hZ2VyLl9mb250c1trZXldLmxvYWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZWFkeSgpOiBib29sZWFuIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzKTtcclxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmICghQml0bWFwRm9udE1hbmFnZXIuX2ZvbnRzW2tleV0uaXNMb2FkZWQpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKGBmb250ICR7a2V5fSBpcyBzdGlsbCBsb2FkaW5nYCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmRlYnVnKCdBbGwgZm9udHMgYXJlIGxvYWRlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHJpdmF0ZSBfcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2c6IG51bWJlcjtcclxuICBwcml2YXRlIF9iOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICByOiBudW1iZXIgPSAyNTUsXHJcbiAgICBnOiBudW1iZXIgPSAyNTUsXHJcbiAgICBiOiBudW1iZXIgPSAyNTUsXHJcbiAgICBhOiBudW1iZXIgPSAyNTVcclxuICApIHtcclxuICAgIHRoaXMuX3IgPSByO1xyXG4gICAgdGhpcy5fZyA9IGc7XHJcbiAgICB0aGlzLl9iID0gYjtcclxuICAgIHRoaXMuX2EgPSBhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgckZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fciAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2c7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGdGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2cgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYUZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYSAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBhKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2EgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdEFycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciAvIDI1NS4wLCB0aGlzLl9nIC8gMjU1LjAsIHRoaXMuX2IgLyAyNTUuMCwgdGhpcy5fYSAvIDI1NS4wXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0Zsb2F0QXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHdoaXRlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmxhY2soKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWQoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigyNTUsIDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdyZWVuKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMjU1LCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBibHVlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMjU1LCAyNTUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5cclxuY29uc3QgTEVWRUw6IG51bWJlciA9IDA7XHJcbmNvbnN0IEJPUkRFUjogbnVtYmVyID0gMDtcclxuY29uc3QgVEVNUF9JTUFHRV9EQVRBOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDI1NV0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9oYW5kbGU6IFdlYkdMVGV4dHVyZTtcclxuICBwcml2YXRlIF9pc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAxLCBoZWlnaHQ6IG51bWJlciA9IDEpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB0aGlzLl9oYW5kbGUgPSBnbC5jcmVhdGVUZXh0dXJlKCkgYXMgV2ViR0xUZXh0dXJlO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIHJhdyBkYXRhIGludG8gYSB0ZXh0dXJlXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICBMRVZFTCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgMSxcclxuICAgICAgMSxcclxuICAgICAgQk9SREVSLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBURU1QX0lNQUdFX0RBVEFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQodGhpcy5fbmFtZSkgYXMgSW1hZ2VBc3NldDtcclxuICAgIGlmIChhc3NldCkge1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUsIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWFrZXMgYSBjYWxsIHRvIHdlYmdsIGFuZCB0ZWxscyBpdCB3aGF0IGNoYW5uZWwgdG8gYWN0aXZhdGUgb25cclxuICAgKiAoMzIgdG90YWwpXHJcbiAgICogQHBhcmFtIHRleHR1cmVVbml0IHRleHR1cmUgdG8gYWN0aXZhdGUgb25cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZhdGVBbmRCaW5kKHRleHR1cmVVbml0OiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4dHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChtZXNzYWdlLmNvbnRleHQgYXMgSW1hZ2VBc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0OiBJbWFnZUFzc2V0KTogdm9pZCB7XHJcbiAgICB0aGlzLl93aWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIGFuIGltYWdlIGJpdG1hcHBlclxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIGFzc2V0LmRhdGFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNQb3dlck9mMigpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGEgbWlwIG1hcCBhbmQgY2xhbXAgd3JhcHBpbmcgdG8gZWRnZS5cclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgIH1cclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQb3dlck9mMigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX3dpZHRoKSAmJiB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl9oZWlnaHQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbHVlUG93ZXJPZjIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcblxyXG5jbGFzcyBUZXh0dXJlUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIHRleHR1cmU6IFRleHR1cmU7XHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3RleHR1cmVzOiB7IFtuYW1lOiBzdHJpbmddOiBUZXh0dXJlUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IFRleHR1cmUge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0ZXh0dXJlTmFtZSk7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSBuZXcgVGV4dHVyZVJlZmVyZW5jZU5vZGUodGV4dHVyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlVGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBBIHRleHR1cmUgbmFtZWQgJHt0ZXh0dXJlTmFtZX0gZG9lcyBub3QgZXhpc3QgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmVsZWFzZWQuYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEpIHtcclxuICAgICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcbmltcG9ydCB7IFRleHR1cmVNYW5hZ2VyIH0gZnJvbSAnLi90ZXh0dXJlTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IFRleHR1cmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdGludDogQ29sb3I7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nLCB0aW50OiBDb2xvcikge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSBkaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgICB0aGlzLl90aW50ID0gdGludDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5fZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGludCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlmZnVzZVRleHR1cmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbmZvLCBHTEJ1ZmZlciB9IGZyb20gJy4uL2dsL2dsQnVmZmVyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4vYml0bWFwRm9udCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnRNYW5hZ2VyIH0gZnJvbSAnLi9iaXRtYXBGb250TWFuYWdlcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXRtYXBUZXh0IHtcclxuICBwcml2YXRlIF9mb250TmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2lzRGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIF9vcmlnaW46IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcm90ZWN0ZWQgX2J1ZmZlcjogR0xCdWZmZXI7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByb3RlY3RlZCBfbWF0ZXJpYWw6IE1hdGVyaWFsO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcm90ZWN0ZWQgX2JpdG1hcEZvbnQ6IEJpdG1hcEZvbnQ7XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNlczogVmVydGV4W10gPSBbXTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJvdGVjdGVkIF90ZXh0OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGZvbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZm9udE5hbWUgPSBmb250TmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl90ZXh0ICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvcmlnaW4oKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBvcmlnaW4odmFsdWU6IFZlY3RvcjMpIHtcclxuICAgIHRoaXMuX29yaWdpbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVWZXJ0aWNlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9idWZmZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5fbWF0ZXJpYWwuZGVzdHJveSgpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JpdG1hcEZvbnQgPSBCaXRtYXBGb250TWFuYWdlci5nZXRGb250KHRoaXMuX2ZvbnROYW1lKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgIGBCSVRNQVBfRk9OVF8ke3RoaXMuX25hbWV9XyR7dGhpcy5fYml0bWFwRm9udC5zaXplfWAsXHJcbiAgICAgIHRoaXMuX2JpdG1hcEZvbnQudGV4dHVyZU5hbWUsXHJcbiAgICAgIENvbG9yLndoaXRlKClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEdMQnVmZmVyKCk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIHBvc2l0aW9uQXR0cmlidXRlLmxvY2F0aW9uID0gMDtcclxuICAgIHBvc2l0aW9uQXR0cmlidXRlLnNpemUgPSAzO1xyXG4gICAgdGhpcy5fYnVmZmVyLmFkZEF0dHJpYnV0ZUxvY2F0aW9uKHBvc2l0aW9uQXR0cmlidXRlKTtcclxuXHJcbiAgICBsZXQgdGV4Q29vcmRBdHRyaWJ1dGUgPSBuZXcgQXR0cmlidXRlSW5mbygpO1xyXG4gICAgdGV4Q29vcmRBdHRyaWJ1dGUubG9jYXRpb24gPSAxO1xyXG4gICAgdGV4Q29vcmRBdHRyaWJ1dGUuc2l6ZSA9IDI7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24odGV4Q29vcmRBdHRyaWJ1dGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc0RpcnR5ICYmIHRoaXMuX2JpdG1hcEZvbnQuaXNMb2FkZWQpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVWZXJ0aWNlcygpO1xyXG4gICAgICB0aGlzLl9pc0RpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhdyhzaGFkZXI6IFNoYWRlciwgbW9kZWw6IE1hdHJpeDR4NCk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kZWxMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfbW9kZWwnKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxMb2NhdGlvbiwgZmFsc2UsIG1vZGVsLnRvRmxvYXQzMkFycmF5KCkpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3RpbnQnKTtcclxuICAgIGdsLnVuaWZvcm00ZnYoY29sb3JMb2NhdGlvbiwgdGhpcy5fbWF0ZXJpYWwudGludC50b0Zsb2F0MzJBcnJheSgpKTtcclxuXHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS5hY3RpdmF0ZUFuZEJpbmQoMCk7XHJcblxyXG4gICAgICBjb25zdCBkaWZmdXNlTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X2RpZmZ1c2UnKTtcclxuICAgICAgZ2wudW5pZm9ybTFpKGRpZmZ1c2VMb2NhdGlvbiwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyLmJpbmQoKTtcclxuICAgIHRoaXMuX2J1ZmZlci5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVZlcnRpY2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmVydGljZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2J1ZmZlci5jbGVhckRhdGEoKTtcclxuXHJcbiAgICBsZXQgeCA9IDA7XHJcbiAgICBsZXQgeSA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgYyBvZiB0aGlzLl90ZXh0KSB7XHJcbiAgICAgIGlmIChjID09PSAnXFxuJykge1xyXG4gICAgICAgIHggPSAwO1xyXG4gICAgICAgIHkgKz0gdGhpcy5fYml0bWFwRm9udC5zaXplO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgIGxldCBnID0gdGhpcy5fYml0bWFwRm9udC5nZXRHbHlwaChjKTtcclxuXHJcbiAgICAgIGxldCBtaW5YID0geCArIGcueE9mZnNldDtcclxuICAgICAgbGV0IG1pblkgPSB5ICsgZy55T2Zmc2V0O1xyXG5cclxuICAgICAgbGV0IG1heFggPSBtaW5YICsgZy53aWR0aDtcclxuICAgICAgbGV0IG1heFkgPSBtaW5ZICsgZy5oZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgbWludSA9IGcueCAvIHRoaXMuX2JpdG1hcEZvbnQuaW1hZ2VXaWR0aDtcclxuICAgICAgbGV0IG1pbnYgPSBnLnkgLyB0aGlzLl9iaXRtYXBGb250LmltYWdlSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IG1heHUgPSAoZy54ICsgZy53aWR0aCkgLyB0aGlzLl9iaXRtYXBGb250LmltYWdlV2lkdGg7XHJcbiAgICAgIGxldCBtYXh2ID0gKGcueSArIGcuaGVpZ2h0KSAvIHRoaXMuX2JpdG1hcEZvbnQuaW1hZ2VIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWluWCwgbWluWSwgMCwgbWludSwgbWludikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWluWCwgbWF4WSwgMCwgbWludSwgbWF4dikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWF4WCwgbWF4WSwgMCwgbWF4dSwgbWF4dikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWF4WCwgbWF4WSwgMCwgbWF4dSwgbWF4dikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWF4WCwgbWluWSwgMCwgbWF4dSwgbWludikpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgobWluWCwgbWluWSwgMCwgbWludSwgbWludikpO1xyXG5cclxuICAgICAgeCArPSBnLnhBZHZhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgdGhpcy5fYnVmZmVyLnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9idWZmZXIudXBsb2FkKCk7XHJcbiAgICB0aGlzLl9idWZmZXIudW5iaW5kKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2NvcmUvZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgQml0bWFwVGV4dCB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3MvYml0bWFwVGV4dCc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9jb3JlL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXRtYXBUZXh0Q29tcG9uZW50RGF0YSBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIGZvbnROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG9yaWdpbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIHRleHQ6IHN0cmluZztcclxuXHJcbiAgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gU3RyaW5nKGpzb24ubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uZm9udE5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZvbnROYW1lID0gU3RyaW5nKGpzb24uZm9udE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRleHQgPSBTdHJpbmcoanNvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5vcmlnaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9yaWdpbiA9IGpzb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJpdG1hcFRleHRDb21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdiaXRtYXBUZXh0JztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBCaXRtYXBUZXh0Q29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgQml0bWFwVGV4dENvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCaXRtYXBUZXh0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfYml0bWFwVGV4dDogQml0bWFwVGV4dDtcclxuICBwcml2YXRlIF9mb250TmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogQml0bWFwVGV4dENvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgdGhpcy5fZm9udE5hbWUgPSBkYXRhLmZvbnROYW1lO1xyXG4gICAgdGhpcy5fYml0bWFwVGV4dCA9IG5ldyBCaXRtYXBUZXh0KHRoaXMubmFtZSwgdGhpcy5fZm9udE5hbWUpO1xyXG4gICAgaWYgKCFkYXRhLm9yaWdpbi5lcXVhbHMoVmVjdG9yMy56ZXJvKSkge1xyXG4gICAgICB0aGlzLl9iaXRtYXBUZXh0Lm9yaWdpbi5jb3B5RnJvbShkYXRhLm9yaWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYml0bWFwVGV4dC50ZXh0ID0gZGF0YS50ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9iaXRtYXBUZXh0LmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9iaXRtYXBUZXh0LnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9iaXRtYXBUZXh0LmRyYXcoc2hhZGVyLCB0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpO1xyXG4gICAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi9JU2hhcGUyRCc7XHJcbmltcG9ydCB7IFJlY3RhbmdsZTJEIH0gZnJvbSAnLi9yZWN0YW5nbGUyZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlMkQgaW1wbGVtZW50cyBJU2hhcGUyRCB7XHJcbiAgcHVibGljIG9yaWdpbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHVibGljIHJhZGl1czogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IG9mZnNldCgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLnJhZGl1cyArIHRoaXMucmFkaXVzICogdGhpcy5vcmlnaW4ueCxcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLnJhZGl1cyArIHRoaXMucmFkaXVzICogdGhpcy5vcmlnaW4ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5vcmlnaW4pIHtcclxuICAgICAgdGhpcy5vcmlnaW4uc2V0RnJvbUpzb24oanNvbi5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnJhZGl1cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2lyY2xlMkQgcmVxdWlyZXMgcmFkaXVzIHRvIGJlIHByZXNlbnQuJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhZGl1cyA9IGpzb24ucmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGludGVyc2VjdHMob3RoZXJTaGFwZTogSVNoYXBlMkQpOiBib29sZWFuIHtcclxuICAgIGlmIChvdGhlclNoYXBlIGluc3RhbmNlb2YgQ2lyY2xlMkQgJiYgdGhpcy5yYWRpdXMgJiYgb3RoZXJTaGFwZS5yYWRpdXMpIHtcclxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhcclxuICAgICAgICBWZWN0b3IyLmRpc3RhbmNlKG90aGVyU2hhcGUucG9zaXRpb24sIHRoaXMucG9zaXRpb24pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJhZGl1c0xlbmd0aHMgPSB0aGlzLnJhZGl1cyArIG90aGVyU2hhcGUucmFkaXVzO1xyXG4gICAgICBpZiAoZGlzdGFuY2UgPD0gcmFkaXVzTGVuZ3Rocykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG90aGVyU2hhcGUgaW5zdGFuY2VvZiBSZWN0YW5nbGUyRCkge1xyXG4gICAgICBpZiAoIW90aGVyU2hhcGUud2lkdGggfHwgIW90aGVyU2hhcGUuaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke290aGVyU2hhcGV9IHJlcXVpcmVzIGEgaGVpZ2h0IGFuZCB3aWR0aGApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpc30gcmVxdXJlcyBhIHJhZGl1c2ApO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBkZWx0YVggPVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIG90aGVyU2hhcGUucG9zaXRpb24ueCArIG90aGVyU2hhcGUud2lkdGgpXHJcbiAgICAgICAgKTtcclxuICAgICAgbGV0IGRlbHRhWSA9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC1cclxuICAgICAgICBNYXRoLm1heChcclxuICAgICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueSxcclxuICAgICAgICAgIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgb3RoZXJTaGFwZS5wb3NpdGlvbi55ICsgb3RoZXJTaGFwZS5oZWlnaHQpXHJcbiAgICAgICAgKTtcclxuICAgICAgaWYgKGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSA8IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvaW50SW5TaGFwZShwb2ludDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYWJzRGlzdGFuY2UgPSBNYXRoLmFicyhWZWN0b3IyLmRpc3RhbmNlKHRoaXMucG9zaXRpb24sIHBvaW50KSk7XHJcbiAgICBpZiAodGhpcy5yYWRpdXMgJiYgYWJzRGlzdGFuY2UgPD0gdGhpcy5yYWRpdXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgQ2lyY2xlMkQgfSBmcm9tICcuL2NpcmNsZTJEJztcclxuaW1wb3J0IHsgSVNoYXBlMkQgfSBmcm9tICcuL0lTaGFwZTJEJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUyRCBpbXBsZW1lbnRzIElTaGFwZTJEIHtcclxuICBwdWJsaWMgb3JpZ2luOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuXHJcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IG9mZnNldCgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHRoaXMud2lkdGggKiB0aGlzLm9yaWdpbi54LFxyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgdGhpcy5oZWlnaHQgKiB0aGlzLm9yaWdpbi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5wb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldEZyb21Kc29uKGpzb24ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLm9yaWdpbikge1xyXG4gICAgICB0aGlzLm9yaWdpbi5zZXRGcm9tSnNvbihqc29uLm9yaWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ud2lkdGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlY3RhbmdsZTJkIHJlcXVpcmVzIHdpZHRoIHRvIGJlIHByZXNlbnQuJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gTnVtYmVyKGpzb24ud2lkdGgpO1xyXG5cclxuICAgIGlmIChqc29uLmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncmVjdGFuZ2xlMmQgcmVxdWlyZXMgaGVpZ2h0IHRvIGJlIHByZXNlbnQuJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlaWdodCA9IE51bWJlcihqc29uLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW50ZXJzZWN0cyhvdGhlclNoYXBlOiBJU2hhcGUyRCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBvdGhlclNoYXBlIGluc3RhbmNlb2YgUmVjdGFuZ2xlMkQgJiZcclxuICAgICAgb3RoZXJTaGFwZS53aWR0aCAmJlxyXG4gICAgICBvdGhlclNoYXBlLmhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUob3RoZXJTaGFwZS5wb3NpdGlvbikgfHxcclxuICAgICAgICB0aGlzLnBvaW50SW5TaGFwZShcclxuICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnggKyBvdGhlclNoYXBlLndpZHRoLFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnlcclxuICAgICAgICAgIClcclxuICAgICAgICApIHx8XHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUoXHJcbiAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54ICsgb3RoZXJTaGFwZS53aWR0aCxcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi55ICsgb3RoZXJTaGFwZS5oZWlnaHRcclxuICAgICAgICAgIClcclxuICAgICAgICApIHx8XHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUoXHJcbiAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnkgKyBvdGhlclNoYXBlLmhlaWdodFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG90aGVyU2hhcGUgaW5zdGFuY2VvZiBDaXJjbGUyRCAmJlxyXG4gICAgICBvdGhlclNoYXBlLnJhZGl1cyAmJlxyXG4gICAgICB0aGlzLndpZHRoICYmXHJcbiAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgY29uc3QgZGVsdGFYID1cclxuICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnggLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgTWF0aC5taW4ob3RoZXJTaGFwZS5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkZWx0YVkgPVxyXG4gICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueSAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBNYXRoLm1pbihvdGhlclNoYXBlLnBvc2l0aW9uLnksIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZIDxcclxuICAgICAgICBvdGhlclNoYXBlLnJhZGl1cyAqIG90aGVyU2hhcGUucmFkaXVzXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvaW50SW5TaGFwZShwb2ludDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMud2lkdGggJiYgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgbGV0IHggPSB0aGlzLndpZHRoIDwgMCA/IHRoaXMucG9zaXRpb24ueCAtIHRoaXMud2lkdGggOiB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgIGxldCB5ID0gdGhpcy5oZWlnaHQgPCAwID8gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgOiB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICBsZXQgZXh0ZW50WCA9XHJcbiAgICAgICAgdGhpcy53aWR0aCA8IDAgPyB0aGlzLnBvc2l0aW9uLnggOiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoO1xyXG4gICAgICBsZXQgZXh0ZW50WSA9XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPCAwID8gdGhpcy5wb3NpdGlvbi55IDogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcG9pbnQueCA+PSB4ICYmXHJcbiAgICAgICAgcG9pbnQueCA8PSBleHRlbnRYICYmXHJcbiAgICAgICAgcG9pbnQueSA+PSB5ICYmXHJcbiAgICAgICAgcG9pbnQueSA8PSBleHRlbnRZXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuaW1wb3J0IHsgSVNoYXBlMkQgfSBmcm9tICcuLi9jb3JlL2dyYXBoaWNzL3NoYXBlczJEL0lTaGFwZTJEJztcclxuaW1wb3J0IHsgUmVjdGFuZ2xlMkQgfSBmcm9tICcuLi9jb3JlL2dyYXBoaWNzL3NoYXBlczJEL3JlY3RhbmdsZTJkJztcclxuaW1wb3J0IHsgQ2lyY2xlMkQgfSBmcm9tICcuLi9jb3JlL2dyYXBoaWNzL3NoYXBlczJEL2NpcmNsZTJEJztcclxuaW1wb3J0IHsgQ29sbGlzaW9uTWFuYWdlciB9IGZyb20gJy4uL2NvbGxpc2lvbi9jb2xsaXNpb25NYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25Db21wb25lbnREYXRhIGltcGxlbWVudHMgSUNvbXBvbmVudERhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgc2hhcGU6IElTaGFwZTJEIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBzdGF0aWM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5uYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24uc3RhdGljICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zdGF0aWMgPSBCb29sZWFuKGpzb24uc3RhdGljKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnNoYXBlPy50eXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoU3RyaW5nKGpzb24uc2hhcGUudHlwZSkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XHJcbiAgICAgICAgICB0aGlzLnNoYXBlID0gbmV3IFJlY3RhbmdsZTJEKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgdGhpcy5zaGFwZSA9IG5ldyBDaXJjbGUyRCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgc2hhcGUgdHlwZTogJyArIGpzb24uc2hhcGUudHlwZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2hhcGUuc2V0RnJvbUpzb24oanNvbi5zaGFwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0NvbGxpc2lvbkNvbXBvbmVudERhdGEgcmVxdWlyZXMgXCJzaGFwZVwiIGFuZCBcInNoYXBlLnR5cGVcIiB0byBiZSBwcmVzZW50LidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25Db21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdjb2xsaXNpb24nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBDb2xsaXNpb25Db21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sbGlzaW9uQ29tcG9uZW50KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3NoYXBlOiBJU2hhcGUyRDtcclxuICBwcml2YXRlIF9zdGF0aWM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBDb2xsaXNpb25Db21wb25lbnREYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICBpZiAoIWRhdGEuc2hhcGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGlzIG1pc3NpbmcgXCJzaGFwZVwiIHByb3BlcnR5OicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2hhcGUgPSBkYXRhLnNoYXBlO1xyXG4gICAgdGhpcy5fc3RhdGljID0gZGF0YS5zdGF0aWM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNoYXBlKCk6IElTaGFwZTJEIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGFwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNTdGF0aWMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGljO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5sb2FkKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub3duZXIpIHtcclxuICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24uY29weUZyb20oXHJcbiAgICAgICAgdGhpcy5vd25lci5nZXRXb3JsZFBvc2l0aW9uKCkudG9WZWN0b3IyKCkuc3VidHJhY3QodGhpcy5fc2hhcGUub2Zmc2V0KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlbGwgdGhlIGNvbGxpc2lvbiBtYW5hZ2VyIHRoYXQgd2UgZXhpc3QuXHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnJlZ2lzdGVyQ29sbGlzaW9uQ29tcG9uZW50KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm93bmVyKSB7XHJcbiAgICAgIHRoaXMuX3NoYXBlLnBvc2l0aW9uLmNvcHlGcm9tKFxyXG4gICAgICAgIHRoaXMub3duZXIuZ2V0V29ybGRQb3NpdGlvbigpLnRvVmVjdG9yMigpLnN1YnRyYWN0KHRoaXMuX3NoYXBlLm9mZnNldClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICAvL2lmICh0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpIHtcclxuICAgIC8vdGhpcy5fc3ByaXRlLmRyYXcoc2hhZGVyLCB0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpO1xyXG4gICAgLy99XHJcblxyXG4gICAgc3VwZXIucmVuZGVyKHNoYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Db2xsaXNpb25FbnRyeShvdGhlcjogQ29sbGlzaW9uQ29tcG9uZW50KTogdm9pZCB7fVxyXG4gIHB1YmxpYyBvbkNvbGxpc2lvblVwZGF0ZShvdGhlcjogQ29sbGlzaW9uQ29tcG9uZW50KTogdm9pZCB7fVxyXG4gIHB1YmxpYyBvbkNvbGxpc2lvbkV4aXQob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfcmVnaXN0ZXJlZEJ1aWxkZXJzOiB7IFt0eXBlOiBzdHJpbmddOiBJQ29tcG9uZW50QnVpbGRlciB9ID1cclxuICAgIHt9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQnVpbGRlcihidWlsZGVyOiBJQ29tcG9uZW50QnVpbGRlcik6IHZvaWQge1xyXG4gICAgQ29tcG9uZW50TWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW2J1aWxkZXIudHlwZV0gPSBidWlsZGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBleHRyYWN0Q29tcG9uZW50KGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgaWYgKGpzb24udHlwZSkge1xyXG4gICAgICBpZiAoQ29tcG9uZW50TWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1N0cmluZyhqc29uLnR5cGUpXSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbXHJcbiAgICAgICAgICBTdHJpbmcoanNvbi50eXBlKVxyXG4gICAgICAgIF0uYnVpbGRGcm9tSnNvbihqc29uKTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0NvbXBvbmVudCBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAnQ29tcG9uZW50IG1hbmFnZXIgZXJyb3I6IHR5cGUgaXMgbWlzc2luZyBvciBidWlsZGVyIGlzIG5vdCByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUnXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU291bmRFZmZlY3Qge1xyXG4gIHByaXZhdGUgX3BsYXllcjogSFRNTEF1ZGlvRWxlbWVudDtcclxuXHJcbiAgcHVibGljIGFzc2V0UGF0aDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoYXNzZXRQYXRoOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3BsYXllciA9IG5ldyBBdWRpbyhhc3NldFBhdGgpO1xyXG4gICAgdGhpcy5fcGxheWVyLnZvbHVtZSA9IDAuMDU7XHJcbiAgICB0aGlzLmFzc2V0UGF0aCA9IGFzc2V0UGF0aDtcclxuICAgIHRoaXMuX3BsYXllci5sb29wID0gbG9vcDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbG9vcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGF5ZXIubG9vcDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcGxheWVyLmxvb3AgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fcGxheWVyID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzUGF1c2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYXllci5wYXVzZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYXllci5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XHJcbiAgICB0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUgPSAwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3NvdW5kRWZmZWN0czogeyBbbmFtZTogc3RyaW5nXTogU291bmRFZmZlY3QgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGxvYWRTb3VuZEZpbGUoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBhc3NldFBhdGg6IHN0cmluZyxcclxuICAgIGxvb3A6IGJvb2xlYW5cclxuICApOiB2b2lkIHtcclxuICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdID0gbmV3IFNvdW5kRWZmZWN0KGFzc2V0UGF0aCwgbG9vcCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBsYXlTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSkge1xyXG4gICAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXS5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhgY291bGQgbm90IHBsYXkgc291bmQgJHtuYW1lfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdG9wU291bmQobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0pIHtcclxuICAgICAgQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0uc3RvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwYXVzZVNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvZ2dsZVNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc291bmQgPSBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXTtcclxuICAgIGlmIChzb3VuZCkge1xyXG4gICAgICBzb3VuZC5pc1BhdXNlZCgpID8gc291bmQucGxheSgpIDogc291bmQucGF1c2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGF1c2VBbGwoKTogdm9pZCB7XHJcbiAgICBPYmplY3QudmFsdWVzKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzKS5mb3JFYWNoKChzb3VuZCkgPT4ge1xyXG4gICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN0b3BBbGwoKTogdm9pZCB7XHJcbiAgICBPYmplY3QudmFsdWVzKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzKS5mb3JFYWNoKChzb3VuZCkgPT4ge1xyXG4gICAgICBzb3VuZC5zdG9wKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCZWhhdmlvck1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkQnVpbGRlcnM6IHsgW3R5cGU6IHN0cmluZ106IElCZWhhdmlvckJ1aWxkZXIgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQnVpbGRlcihidWlsZGVyOiBJQmVoYXZpb3JCdWlsZGVyKTogdm9pZCB7XHJcbiAgICBCZWhhdmlvck1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tidWlsZGVyLnR5cGVdID0gYnVpbGRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEJlaGF2aW9yKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBpZiAoanNvbi50eXBlKSB7XHJcbiAgICAgIGlmIChCZWhhdmlvck1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tTdHJpbmcoanNvbi50eXBlKV0pIHtcclxuICAgICAgICByZXR1cm4gQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbXHJcbiAgICAgICAgICBTdHJpbmcoanNvbi50eXBlKVxyXG4gICAgICAgIF0uYnVpbGRGcm9tSnNvbihqc29uKTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0JlaGF2aW9yIG1hbmFnZXIgZXJyb3I6IHR5cGUgaXMgbWlzc2luZyBvciBidWlsZGVyIGlzIG5vdCByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICdCZWhhdmlvciBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGVudW0gS2V5cyB7XHJcbiAgTEVGVCA9IDM3LFxyXG4gIFVQID0gMzgsXHJcbiAgUklHSFQgPSAzOSxcclxuICBET1dOID0gNDAsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZUNvbnRleHQge1xyXG4gIHB1YmxpYyBsZWZ0RG93bjogYm9vbGVhbjtcclxuICBwdWJsaWMgcmlnaHREb3duOiBib29sZWFuO1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGxlZnREb3duOiBib29sZWFuLCByaWdodERvd246IGJvb2xlYW4sIHBvc2l0aW9uOiBWZWN0b3IyKSB7XHJcbiAgICB0aGlzLmxlZnREb3duID0gbGVmdERvd247XHJcbiAgICB0aGlzLnJpZ2h0RG93biA9IHJpZ2h0RG93bjtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9rZXlzOiBib29sZWFuW10gPSBbXTtcclxuICBwcml2YXRlIHN0YXRpYyBfcHJldmlvdXNNb3VzZVg6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfcHJldmlvdXNNb3VzZVk6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfbW91c2VYOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21vdXNlWTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9sZWZ0RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc3RhdGljIF9yaWdodERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTU7IGkrKykge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX2tleXNbaV0gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIElucHV0TWFuYWdlci5vbktleURvd24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgSW5wdXRNYW5hZ2VyLm9uS2V5VXApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIElucHV0TWFuYWdlci5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgSW5wdXRNYW5hZ2VyLm9uTW91c2VEb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgSW5wdXRNYW5hZ2VyLm9uTW91c2VVcCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzS2V5RG93bihrZXk6IEtleXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBJbnB1dE1hbmFnZXIuX2tleXNba2V5XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW91c2VQb3NpdGlvbigpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLl9tb3VzZVgsIHRoaXMuX21vdXNlWSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcclxuICAgIElucHV0TWFuYWdlci5fa2V5c1tldmVudC5rZXlDb2RlXSA9IHRydWU7XHJcbiAgICAvL2lmIChldmVudC5rZXlDb2RlICE9PSAxNiAmJiBldmVudC5rZXlDb2RlICE9PSAxNyAmJiBldmVudC5rZXlDb2RlICE9PSA3Mykge1xyXG4gICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIC8vfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX2tleXNbZXZlbnQua2V5Q29kZV0gPSBmYWxzZTtcclxuICAgIC8vIGlmIChldmVudC5rZXlDb2RlICE9PSAxNiAmJiBldmVudC5rZXlDb2RlICE9PSAxNyAmJiBldmVudC5rZXlDb2RlICE9PSA3Mykge1xyXG4gICAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX3ByZXZpb3VzTW91c2VYID0gSW5wdXRNYW5hZ2VyLl9tb3VzZVg7XHJcbiAgICBJbnB1dE1hbmFnZXIuX3ByZXZpb3VzTW91c2VZID0gSW5wdXRNYW5hZ2VyLl9tb3VzZVk7XHJcbiAgICBJbnB1dE1hbmFnZXIuX21vdXNlWCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICBJbnB1dE1hbmFnZXIuX21vdXNlWSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX2xlZnREb3duID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgIElucHV0TWFuYWdlci5fcmlnaHREb3duID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBNZXNzYWdlLnNlbmQoXHJcbiAgICAgICdNT1VTRV9ET1dOJyxcclxuICAgICAgdGhpcyxcclxuICAgICAgbmV3IE1vdXNlQ29udGV4dChcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX2xlZnREb3duLFxyXG4gICAgICAgIElucHV0TWFuYWdlci5fcmlnaHREb3duLFxyXG4gICAgICAgIElucHV0TWFuYWdlci5nZXRNb3VzZVBvc2l0aW9uKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX2xlZnREb3duID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIE1lc3NhZ2Uuc2VuZChcclxuICAgICAgJ01PVVNFX1VQJyxcclxuICAgICAgdGhpcyxcclxuICAgICAgbmV3IE1vdXNlQ29udGV4dChcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX2xlZnREb3duLFxyXG4gICAgICAgIElucHV0TWFuYWdlci5fcmlnaHREb3duLFxyXG4gICAgICAgIElucHV0TWFuYWdlci5nZXRNb3VzZVBvc2l0aW9uKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi4vd29ybGQvc2ltT2JqZWN0JztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQmVoYXZpb3IgaW1wbGVtZW50cyBJQmVoYXZpb3Ige1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfZGF0YTogSUJlaGF2aW9yRGF0YTtcclxuICBwcm90ZWN0ZWQgX293bmVyOiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJQmVoYXZpb3JEYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMuX2RhdGEubmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPd25lcihvd25lcjogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciA9IG93bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBhcHBseSh1c2VyRGF0YTogYW55KTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0TWFuYWdlciwgS2V5cyB9IGZyb20gJy4uL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yRGF0YSBpbXBsZW1lbnRzIElCZWhhdmlvckRhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFqc29uLm5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnNwZWVkKSB7XHJcbiAgICAgIHRoaXMuc3BlZWQgPSBOdW1iZXIoanNvbi5zcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdrZXlib2FyZE1vdmVtZW50JztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUJlaGF2aW9yIHtcclxuICAgIGxldCBkYXRhID0gbmV3IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3IgZXh0ZW5kcyBCYXNlQmVoYXZpb3Ige1xyXG4gIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMC4xO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yRGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5MRUZUKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuUklHSFQpICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5VUCkgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLkRPV04pICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTWF0aEV4dGVuc2lvbnMge1xyXG4gIHB1YmxpYyBzdGF0aWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlZ1RvUmFkKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MC4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByYWRUb0RlZyhyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChyYWRpYW5zICogMTgwLjApIC8gTWF0aC5QSTtcclxuICB9XHJcbn1cclxuXHJcbi8vKE1hdGggYXMgYW55KS5jbGFtcCA9ICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4vL2lmICh2YWx1ZSA8IG1pbikge1xyXG4vL3JldHVybiBtaW47XHJcbi8vfVxyXG5cclxuLy9pZiAodmFsdWUgPiBtYXgpIHtcclxuLy9yZXR1cm4gbWF4O1xyXG4vL31cclxuXHJcbi8vcmV0dXJuIHZhbHVlO1xyXG4vL307XHJcblxyXG4vLyhNYXRoIGFzIGFueSkuZGVnVG9SYWQgPSAoZGVncmVlczogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuLy9yZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MC4wO1xyXG4vL307XHJcblxyXG4vLyhNYXRoIGFzIGFueSkucmFkVG9EZWcgPSAocmFkaWFuczogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuLy9yZXR1cm4gKHJhZGlhbnMgKiAxODAuMCkgLyBNYXRoLlBJO1xyXG4vL307XHJcbiIsImltcG9ydCB7IENvbGxpc2lvbkRhdGEgfSBmcm9tICcuLi8uLi9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlcic7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hbmltYXRlZFNwcml0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gJy4uL2F1ZGlvL2F1ZGlvTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGhFeHRlbnNpb25zIH0gZnJvbSAnLi4vbWF0aC9tYXRoRXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGFjY2VsZXJhdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAsIDkyMCk7XHJcbiAgcHVibGljIHBsYXllckNvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGdyb3VuZENvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGFuaW1hdGVkU3ByaXRlTmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5hY2NlbGVyYXRpb24pIHtcclxuICAgICAgdGhpcy5hY2NlbGVyYXRpb24uc2V0RnJvbUpzb24oanNvbi5hY2NlbGVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghanNvbi5hbmltYXRlZFNwcml0ZU5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbmltYXRlZFNwcml0ZU5hbWUgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRlZFNwcml0ZU5hbWUgPSBTdHJpbmcoanNvbi5hbmltYXRlZFNwcml0ZU5hbWUpO1xyXG5cclxuICAgIGlmICghanNvbi5wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdwbGF5ZXJDb2xsaXNpb25Db21wb25lbnQgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGxheWVyQ29sbGlzaW9uQ29tcG9uZW50ID0gU3RyaW5nKGpzb24ucGxheWVyQ29sbGlzaW9uQ29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoIWpzb24uZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50IG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudCA9IFN0cmluZyhqc29uLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQmVoYXZpb3JCdWlsZGVyIGltcGxlbWVudHMgSUJlaGF2aW9yQnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BsYXllcic7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBQbGF5ZXJCZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IFBsYXllckJlaGF2aW9yKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9hY2NlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgcHJpdmF0ZSBfdmVsb2NpdHkgPSBWZWN0b3IyLnplcm87XHJcbiAgcHJpdmF0ZSBfaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfcGxheWVyQ29sbGlzaW9uQ29tcG9uZW50OiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIF9ncm91bmRDb2xsaXNpb25Db21wb25lbnQ6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX2FuaW1hdGVkU3ByaXRlTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBfaXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG5cclxuICAvL0B0cy1pZ25vcmVcclxuICBwcml2YXRlIF9zcHJpdGU6IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgX3BpcGVOYW1lczogc3RyaW5nW10gPSBbXHJcbiAgICAncGlwZTFDb2xsaXNpb25FbmRUb3AnLFxyXG4gICAgJ3BpcGUxQ29sbGlzaW9uQm9keVRvcCcsXHJcbiAgICAncGlwZTFDb2xsaXNpb25FbmRCb3R0b20nLFxyXG4gICAgJ3BpcGUxQ29sbGlzaW9uQm9keUJvdHRvbScsXHJcbiAgXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFBsYXllckJlaGF2aW9yRGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uID0gZGF0YS5hY2NlbGVyYXRpb247XHJcbiAgICB0aGlzLl9wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQgPSBkYXRhLnBsYXllckNvbGxpc2lvbkNvbXBvbmVudDtcclxuICAgIHRoaXMuX2dyb3VuZENvbGxpc2lvbkNvbXBvbmVudCA9IGRhdGEuZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50O1xyXG4gICAgdGhpcy5fYW5pbWF0ZWRTcHJpdGVOYW1lID0gZGF0YS5hbmltYXRlZFNwcml0ZU5hbWU7XHJcblxyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoJ01PVVNFX0RPV04nLCB0aGlzKTtcclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAnQ09MTElTSU9OX0VOVFJZOicgKyB0aGlzLl9wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQsXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZSgnR0FNRV9SRVNFVCcsIHRoaXMpO1xyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoJ0dBTUVfU1RBUlQnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLnVwZGF0ZVJlYWR5KCk7XHJcblxyXG4gICAgLy8gT2J0YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmltYXRlZCBzcHJpdGVcclxuICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMuX293bmVyPy5nZXRDb21wb25lbnRCeU5hbWUoXHJcbiAgICAgIHRoaXMuX2FuaW1hdGVkU3ByaXRlTmFtZVxyXG4gICAgKSBhcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudDtcclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgc3ByaXRlIGFuaW1hdGlvbiBwbGF5cyByaWdodCBhd2F5XHJcbiAgICB0aGlzLl9zcHJpdGUuc2V0RnJhbWUoMCk7XHJcblxyXG4gICAgdGhpcy5faW5pdGlhbFBvc2l0aW9uLmNvcHlGcm9tKHRoaXMuX293bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNwcml0ZVJlYWR5ID0gdGhpcy5fb3duZXI/LmdldENvbXBvbmVudEJ5TmFtZShcclxuICAgICAgdGhpcy5fYW5pbWF0ZWRTcHJpdGVOYW1lXHJcbiAgICApO1xyXG4gICAgaWYgKCFzcHJpdGVSZWFkeSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX293bmVyKSB7XHJcbiAgICAgIGNvbnN0IHNlY29uZHM6IG51bWJlciA9IHRpbWUgLyAxMDAwO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzUGxheWluZykge1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5LmFkZCh0aGlzLl9hY2NlbGVyYXRpb24uY2xvbmUoKS5zY2FsZShzZWNvbmRzKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIExpbWl0IG1heCBzcGVlZCBvZiBmYWxsaW5nXHJcbiAgICAgIGlmICh0aGlzLl92ZWxvY2l0eS55ID4gNDAwKSB7XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkueSA9IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJldmVudCBmbHlpbmcgdG9vIGhpZ2hcclxuICAgICAgaWYgKHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55IDwgLTEzKSB7XHJcbiAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnkgPSAtMTM7XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkueSA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX293bmVyPy50cmFuc2Zvcm0ucG9zaXRpb24uYWRkKFxyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5LmNsb25lKCkuc2NhbGUoc2Vjb25kcykudG9WZWN0b3IzKClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl92ZWxvY2l0eS55IDwgMCkge1xyXG4gICAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56IC09XHJcbiAgICAgICAgICBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCg2MDAuMCkgKiBzZWNvbmRzO1xyXG4gICAgICAgIGlmICh0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiA8IE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKC0yMCkpIHtcclxuICAgICAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gTWF0aEV4dGVuc2lvbnMuZGVnVG9SYWQoLTIwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmlzRmFsbGluZygpIHx8ICF0aGlzLl9pc0FsaXZlKSB7XHJcbiAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogKz1cclxuICAgICAgICAgIE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKDQ4MC4wKSAqIHNlY29uZHM7XHJcbiAgICAgICAgaWYgKHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56ID4gTWF0aEV4dGVuc2lvbnMuZGVnVG9SYWQoOTApKSB7XHJcbiAgICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiA9IE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKDkwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNob3VsZE5vdEZsYXAoKSkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zdG9wKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcHJpdGUuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICB0aGlzLl9zcHJpdGUucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UuY29kZSkge1xyXG4gICAgICBjYXNlICdNT1VTRV9ET1dOJzpcclxuICAgICAgICB0aGlzLm9uRmxhcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdDT0xMSVNJT05fRU5UUlk6JyArIHRoaXMuX3BsYXllckNvbGxpc2lvbkNvbXBvbmVudDpcclxuICAgICAgICBjb25zdCBkYXRhOiBDb2xsaXNpb25EYXRhID0gbWVzc2FnZS5jb250ZXh0IGFzIENvbGxpc2lvbkRhdGE7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZGF0YT8uYT8ubmFtZSA9PT0gdGhpcy5fZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50IHx8XHJcbiAgICAgICAgICBkYXRhPy5iPy5uYW1lID09PSB0aGlzLl9ncm91bmRDb2xsaXNpb25Db21wb25lbnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgICB0aGlzLmRlY2VsZXJhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuX3BpcGVOYW1lcy5pbmRleE9mKGRhdGEuYSEubmFtZSkgIT09IC0xIHx8XHJcbiAgICAgICAgICB0aGlzLl9waXBlTmFtZXMuaW5kZXhPZihkYXRhLmIhLm5hbWUpICE9PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0dBTUVfUkVTRVQnOlxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnR0FNRV9TVEFSVCc6XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0ZhbGxpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVsb2NpdHkueSA+IDIyMC4wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG91bGROb3RGbGFwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZlbG9jaXR5LnkgPiAyMjAuMCB8fCAhdGhpcy5faXNBbGl2ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGllKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2lzQWxpdmUpIHtcclxuICAgICAgdGhpcy5faXNBbGl2ZSA9IGZhbHNlO1xyXG4gICAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKCdkZWFkJyk7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5zdG9wU291bmQoJ211c2ljJyk7XHJcbiAgICAgIE1lc3NhZ2Uuc2VuZCgnUExBWUVSX0RJRUQnLCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pc0FsaXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc3ByaXRlLm93bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24uY29weUZyb20odGhpcy5faW5pdGlhbFBvc2l0aW9uKTtcclxuICAgIHRoaXMuX3Nwcml0ZS5vd25lciEudHJhbnNmb3JtLnJvdGF0aW9uLnogPSAwO1xyXG5cclxuICAgIHRoaXMuX3ZlbG9jaXR5LnNldCgwLCAwKTtcclxuICAgIHRoaXMuX2FjY2VsZXJhdGlvbi5zZXQoMCwgOTIwKTtcclxuICAgIHRoaXMuX3Nwcml0ZS5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ211c2ljJyk7XHJcbiAgICBNZXNzYWdlLnNlbmQoJ1BMQVlFUl9SRVNFVCcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWNlbGVyYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uLnkgPSAwO1xyXG4gICAgdGhpcy5fdmVsb2NpdHkueSA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmxhcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc0FsaXZlICYmIHRoaXMuX2lzUGxheWluZykge1xyXG4gICAgICB0aGlzLl92ZWxvY2l0eS55ID0gLTI4MDtcclxuICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnZmxhcCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJlc3RhcnQoeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogPSAwO1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KDIwMCwgeSk7XHJcbiAgICAgIHRoaXMuX3ZlbG9jaXR5LnNldCgwLCAwKTtcclxuICAgICAgdGhpcy5fYWNjZWxlcmF0aW9uLnNldCgwLCA5MjApO1xyXG4gICAgICB0aGlzLl9pc0FsaXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fc3ByaXRlLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgJHt0aGlzLl9hbmltYXRlZFNwcml0ZU5hbWV9J3MgcGxheWVyQmVoYXZpb3IgaGFzIG5vIG93bmVyYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yRGF0YSBpbXBsZW1lbnRzIElCZWhhdmlvckRhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHJvdGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIWpzb24ubmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYW1lID0gU3RyaW5nKGpzb24ubmFtZSk7XHJcblxyXG4gICAgaWYgKGpzb24ucm90YXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uLnNldEZyb21Kc29uKGpzb24ucm90YXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyIGltcGxlbWVudHMgSUJlaGF2aW9yQnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3JvdGF0aW9uJztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUJlaGF2aW9yIHtcclxuICAgIGxldCBkYXRhID0gbmV3IFJvdGF0aW9uQmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBSb3RhdGlvbkJlaGF2aW9yKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uQmVoYXZpb3IgZXh0ZW5kcyBCYXNlQmVoYXZpb3Ige1xyXG4gIHByaXZhdGUgX3JvdGF0aW9uOiBWZWN0b3IzO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUm90YXRpb25CZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX3JvdGF0aW9uID0gZGF0YS5yb3RhdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lcj8udHJhbnNmb3JtLnJvdGF0aW9uLmFkZCh0aGlzLl9yb3RhdGlvbik7XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHVibGljIG1pblBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyByZXNldFBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyBzdGFydE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgc3RvcE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgcmVzZXRNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBub3QgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnN0YXJ0TWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRNZXNzYWdlID0gU3RyaW5nKGpzb24uc3RhcnRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5zdG9wTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc3RvcE1lc3NhZ2UgPSBTdHJpbmcoanNvbi5zdG9wTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ucmVzZXRNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5yZXNldE1lc3NhZ2UgPSBTdHJpbmcoanNvbi5yZXNldE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnZlbG9jaXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52ZWxvY2l0eS5zZXRGcm9tSnNvbihqc29uLnZlbG9jaXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnU2Nyb2xsQmVoYXZpb3JEYXRhIHJlcXVpcmVzIHByb3BlcnR5IFwidmVsb2NpdHlcIiB0byBiZSBkZWZpbmVkLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5taW5Qb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMubWluUG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5taW5Qb3NpdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1Njcm9sbEJlaGF2aW9yRGF0YSByZXF1aXJlcyBwcm9wZXJ0eSBcIm1pblBvc2l0aW9uXCIgdG8gYmUgZGVmaW5lZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ucmVzZXRQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnJlc2V0UG9zaXRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdTY3JvbGxCZWhhdmlvckRhdGEgcmVxdWlyZXMgcHJvcGVydHkgXCJyZXNldFBvc2l0aW9uXCIgdG8gYmUgZGVmaW5lZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmVoYXZpb3JCdWlsZGVyIGltcGxlbWVudHMgSUJlaGF2aW9yQnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3Njcm9sbCc7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBTY3JvbGxCZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IFNjcm9sbEJlaGF2aW9yKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF92ZWxvY2l0eTogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwcml2YXRlIF9taW5Qb3NpdGlvbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwcml2YXRlIF9yZXNldFBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHByaXZhdGUgX3N0YXJ0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3N0b3BNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcmVzZXRNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNTY3JvbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9pbml0aWFsUG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBTY3JvbGxCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX3ZlbG9jaXR5LmNvcHlGcm9tKGRhdGEudmVsb2NpdHkpO1xyXG4gICAgdGhpcy5fbWluUG9zaXRpb24uY29weUZyb20oZGF0YS5taW5Qb3NpdGlvbik7XHJcbiAgICB0aGlzLl9yZXNldFBvc2l0aW9uLmNvcHlGcm9tKGRhdGEucmVzZXRQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9zdGFydE1lc3NhZ2UgPSBkYXRhLnN0YXJ0TWVzc2FnZTtcclxuICAgIHRoaXMuX3N0b3BNZXNzYWdlID0gZGF0YS5zdG9wTWVzc2FnZTtcclxuICAgIHRoaXMuX3Jlc2V0TWVzc2FnZSA9IGRhdGEucmVzZXRNZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge1xyXG4gICAgc3VwZXIudXBkYXRlUmVhZHkoKTtcclxuXHJcbiAgICBpZiAodGhpcy5fc3RhcnRNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgTWVzc2FnZS5zdWJzY3JpYmUodGhpcy5fc3RhcnRNZXNzYWdlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc3RvcE1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBNZXNzYWdlLnN1YnNjcmliZSh0aGlzLl9zdG9wTWVzc2FnZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3Jlc2V0TWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKHRoaXMuX3Jlc2V0TWVzc2FnZSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2lzU2Nyb2xsaW5nKSB7XHJcbiAgICAgIHRoaXMuX293bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24uYWRkKFxyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5XHJcbiAgICAgICAgICAuY2xvbmUoKVxyXG4gICAgICAgICAgLnNjYWxlKHRpbWUgLyAxMDAwKVxyXG4gICAgICAgICAgLnRvVmVjdG9yMygpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5fb3duZXIhLnRyYW5zZm9ybS5wb3NpdGlvbi54IDw9IHRoaXMuX21pblBvc2l0aW9uLnggJiZcclxuICAgICAgICB0aGlzLl9vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uLnkgPD0gdGhpcy5fbWluUG9zaXRpb24ueVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlID09IHRoaXMuX3N0YXJ0TWVzc2FnZSkge1xyXG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PSB0aGlzLl9zdG9wTWVzc2FnZSkge1xyXG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT0gdGhpcy5fcmVzZXRNZXNzYWdlKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24uY29weUZyb20odGhpcy5fcmVzZXRQb3NpdGlvbi50b1ZlY3RvcjMoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uLmNvcHlGcm9tKHRoaXMuX2luaXRpYWxQb3NpdGlvbi50b1ZlY3RvcjMoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi9nbCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIFdlYkdMIHNoYWRlci5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFkZXIge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gIHByaXZhdGUgX2F0dHJpYnV0ZXM6IHsgW25hbWU6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgcHJpdmF0ZSBfdW5pZm9ybXM6IHsgW25hbWU6IHN0cmluZ106IFdlYkdMVW5pZm9ybUxvY2F0aW9uIH0gPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBzaGFkZXIuXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNoYWRlci5cclxuICAgKiBAcGFyYW0gdmVydGV4U291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIHZlcnRleCBzaGFkZXIuXHJcbiAgICogQHBhcmFtIGZyYWdtZW50U291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGZyYWdtZW50IHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZSgpOiB2b2lkIHtcclxuICAgIGdsLnVzZVByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBsb2NhdGlvbiBvZiBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZVxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdG8gcmV0cmlldmVcclxuICAgKiBAcmV0dXJucyBBbiBhdHRyaWJ1dGVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0QXR0cmlidXRlTG9jYXRpb24obmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLl9hdHRyaWJ1dGVzW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBVbmFibGUgdG8gZmluZCBhdHRyaWJ1dGUgbmFtZSAke25hbWV9IGluIHNoYWRlciAke3RoaXMuX25hbWV9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVuaWZvcm1Mb2NhdGlvbihuYW1lOiBzdHJpbmcpOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB7XHJcbiAgICBpZiAodGhpcy5fdW5pZm9ybXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFVuYWJsZSB0byBmaW5kIHVuaWZvcm0gbmFtZSAke25hbWV9IGluIHNoYWRlciAke3RoaXMuX25hbWV9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl91bmlmb3Jtc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBsb2FkKHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgdmVydGV4U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKHZlcnRleFNvdXJjZSwgZ2wuVkVSVEVYX1NIQURFUik7XHJcbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmxvYWRTaGFkZXIoZnJhZ21lbnRTb3VyY2UsIGdsLkZSQUdNRU5UX1NIQURFUik7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgIHRoaXMuZGV0ZWN0QXR0cmlidXRlcygpO1xyXG4gICAgdGhpcy5kZXRlY3RVbmlmb3JtcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkU2hhZGVyKHNvdXJjZTogc3RyaW5nLCBzaGFkZXJUeXBlOiBudW1iZXIpOiBXZWJHTFNoYWRlciB7XHJcbiAgICBsZXQgc2hhZGVyOiBXZWJHTFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKSBhcyBXZWJHTFNoYWRlcjtcclxuXHJcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgbGV0IGVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpPy50cmltKCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBjb21waWxpbmcgc2hhZGVyOiAnICsgdGhpcy5fbmFtZSArICc6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hhZGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcm9ncmFtKFxyXG4gICAgdmVydGV4U2hhZGVyOiBXZWJHTFNoYWRlcixcclxuICAgIGZyYWdtZW50U2hhZGVyOiBXZWJHTFNoYWRlclxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5fcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKSBhcyBXZWJHTFByb2dyYW07XHJcblxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMuX3Byb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5fcHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG5cclxuICAgIGNvbnN0IGVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5fcHJvZ3JhbSk/LnRyaW0oKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycnJvciBsaW5raW5nIHNoYWRlciAnICsgdGhpcy5fbmFtZSArICc6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdEF0dHJpYnV0ZXMoKTogdm9pZCB7XHJcbiAgICAvLyBnaXZlcyBhbGwgYXR0cmlidXRlcyBpbiB0aGUgc2hhZGVyXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVDb3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9BVFRSSUJVVEVTXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBhdHRyaWJ1dGVJbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVBdHRyaWIoXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIWF0dHJpYnV0ZUluZm8pIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUG9wdWxhdGVzIF9hdHRyaWJ1ZXMgd2l0aCBlYWNoIGF0dHJpYnV0ZSBhcyBhcyB0aGUgdmFsdWUgYW5kIHRoZSBhdHRyaWJ1dGUgbmFtZSBhcyB0aGUga2V5XHJcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZXNbYXR0cmlidXRlSW5mby5uYW1lXSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgYXR0cmlidXRlSW5mby5uYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdFVuaWZvcm1zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdW5pZm9ybUNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihcclxuICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgZ2wuQUNUSVZFX1VOSUZPUk1TXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pZm9ybUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgdW5pZm9ybUluZm86IFdlYkdMQWN0aXZlSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIXVuaWZvcm1JbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl91bmlmb3Jtc1t1bmlmb3JtSW5mby5uYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIHVuaWZvcm1JbmZvLm5hbWVcclxuICAgICAgKSBhcyBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1NoYWRlciBleHRlbmRzIFNoYWRlciB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2Jhc2ljJyk7XHJcblxyXG4gICAgdGhpcy5sb2FkKHRoaXMuZ2V0VmVydGV4U291cmNlKCksIHRoaXMuZ2V0RnJhZ21lbnRTb3VyY2UoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZlcnRleFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIGF0dHJpYnV0ZSB2ZWMzIGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG5cclxuICAgIHVuaWZvcm0gbWF0NCB1X3Byb2plY3Rpb247XHJcbiAgICB1bmlmb3JtIG1hdDQgdV9tb2RlbDtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX1Bvc2l0aW9uID0gdV9wcm9qZWN0aW9uICogdV9tb2RlbCAqIHZlYzQoYV9wb3NpdGlvbiwgMS4wKTtcclxuICAgICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGcmFnbWVudFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgIHVuaWZvcm0gdmVjNCB1X3RpbnQ7XHJcbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB1X2RpZmZ1c2U7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbiAgICBcclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgZ2xfRnJhZ0NvbG9yID0gdV90aW50ICogdGV4dHVyZTJEKHVfZGlmZnVzZSwgdl90ZXhDb29yZCk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXg0eDQge1xyXG4gIHByaXZhdGUgX2RhdGE6IG51bWJlcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBJZGVudGl0eSBtYXRyaXggKGRlZmF1bHQgbWF0cml4KVxyXG4gICAgdGhpcy5fZGF0YSA9IFtcclxuICAgICAgLy8gcm93IDFcclxuICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgLy8gcm93IDJcclxuICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgLy8gcm93IDNcclxuICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgLy8gcm93IDRcclxuICAgICAgMCwgMCwgMCwgMSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRhdGEoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IE1hdHJpeDR4NCB7XHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeDR4NCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3J0aG9ncmFwaGljIG1hdHJpeFxyXG4gICAqIE5vIHBlcnNwZWN0aXZlLCByZW5kZXJzIHNvbWV0aGluZyBhcyBpZiBpdCBpcyBmbGF0IGluIHNwYWNlXHJcbiAgICogQHBhcmFtIGxlZnQgcG9zaXRpb24gZnJvbSBsZWZ0IG9mIHNjcmVlbiAoYWxtb3N0IGFsd2F5cyAwKVxyXG4gICAqIEBwYXJhbSByaWdodCBkaXN0YW5jZSB0byByaWdodCBzaWRlIG9mIHNjcmVlbiBmcm9tIHRoZSBsZWZ0IChlLmcuIDEwODBwIHdvdWxkIGJlIDE5MjApXHJcbiAgICogQHBhcmFtIGJvdHRvbSBwb3NpdGlvbiBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoYWxtb3N0IGFsd2F5cyAwKSB3ZWJnbCBzdGFydHMgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cclxuICAgKiBAcGFyYW0gdG9wIHBvc2l0aW9uIGZyb20gYm90dG9tIG9mIHNjcmVlbiB0byB0aGUgdG9wIChlLmcuIDEwODBwIHdvdWxkIGJlIDEwODApXHJcbiAgICogQHBhcmFtIG5lYXJDbGlwIHNvbWV0aGluZyBuZWdhdGl2ZSAodG8gcHJldmVudCBjbGlwcGluZyBpbiBmcm9udClcclxuICAgKiBAcGFyYW0gZmFyQ2xpcCBhcmJpdHJhcnkgbnVtYmVyXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvcnRob2dyYXBoaWMoXHJcbiAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICByaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICB0b3A6IG51bWJlcixcclxuICAgIG5lYXJDbGlwOiBudW1iZXIsXHJcbiAgICBmYXJDbGlwOiBudW1iZXJcclxuICApOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgY29uc3QgbHI6IG51bWJlciA9IDEuMCAvIChsZWZ0IC0gcmlnaHQpO1xyXG4gICAgY29uc3QgYnQ6IG51bWJlciA9IDEuMCAvIChib3R0b20gLSB0b3ApO1xyXG4gICAgY29uc3QgbmY6IG51bWJlciA9IDEuMCAvIChuZWFyQ2xpcCAtIGZhckNsaXApO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSAtMi4wICogbHI7XHJcbiAgICBtLl9kYXRhWzVdID0gLTIuMCAqIGJ0O1xyXG4gICAgbS5fZGF0YVsxMF0gPSAyLjAgKiBuZjtcclxuXHJcbiAgICBtLl9kYXRhWzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XHJcbiAgICBtLl9kYXRhWzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XHJcbiAgICBtLl9kYXRhWzE0XSA9IChmYXJDbGlwICsgbmVhckNsaXApICogbmY7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIG1hdHJpeCB0aGF0IGhvbGRzIGRhdGEgdGhhdCByZXByZXNlbnRzIG1vdmVtZW50IG9mIGFuIG9iamVjdFxyXG4gICAqIHRocm91Z2ggc3BhY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyB0cmFuc2xhdGlvbihwb3NpdGlvbjogVmVjdG9yMyk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICAvLyBlZGl0aW5nIDFzdCAzIG51bWJlcnMgaW4gbGFzdCByb3cgb2YgbWF0cml4NFxyXG4gICAgbS5fZGF0YVsxMl0gPSBwb3NpdGlvbi54O1xyXG4gICAgbS5fZGF0YVsxM10gPSBwb3NpdGlvbi55O1xyXG4gICAgbS5fZGF0YVsxNF0gPSBwb3NpdGlvbi56O1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHJvdGF0aW9uIG1hdHJpeCBvbiB0aGUgWCBheGlzIGZyb20gdGhlIHByb3ZpZGVkIGFuZ2xlIGluIHJhZGlhbnMuXHJcbiAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25YKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzVdID0gYztcclxuICAgIG0uX2RhdGFbNl0gPSBzO1xyXG4gICAgbS5fZGF0YVs5XSA9IC1zO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblkoYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBjO1xyXG4gICAgbS5fZGF0YVsyXSA9IC1zO1xyXG4gICAgbS5fZGF0YVs4XSA9IHM7XHJcbiAgICBtLl9kYXRhWzEwXSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWihhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIC8vIHJhZGlhbnMgYXJlIHVzZWQgaW4gYWxtb3N0IGFsbCBtYXRoIGxpYnJhcmllcyBiZWNhdXNlIGl0IGlzIG1vcmUgcGVyZm9ybWFudFxyXG4gICAgLy8gdW5kZXIgdGhlIGhvb2RcclxuXHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBjO1xyXG4gICAgbS5fZGF0YVsxXSA9IHM7XHJcbiAgICBtLl9kYXRhWzRdID0gLXM7XHJcbiAgICBtLl9kYXRhWzVdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25YWVooXHJcbiAgICB4UmFkaWFuczogbnVtYmVyLFxyXG4gICAgeVJhZGlhbnM6IG51bWJlcixcclxuICAgIHpSYWRpYW5zOiBudW1iZXJcclxuICApOiBNYXRyaXg0eDQge1xyXG4gICAgY29uc3QgcnggPSBNYXRyaXg0eDQucm90YXRpb25YKHhSYWRpYW5zKTtcclxuICAgIGNvbnN0IHJ5ID0gTWF0cml4NHg0LnJvdGF0aW9uWSh5UmFkaWFucyk7XHJcbiAgICBjb25zdCByeiA9IE1hdHJpeDR4NC5yb3RhdGlvblooelJhZGlhbnMpO1xyXG5cclxuICAgIHJldHVybiBNYXRyaXg0eDQubXVsdGlwbHkoTWF0cml4NHg0Lm11bHRpcGx5KHJ6LCByeSksIHJ4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2NhbGUoc2NhbGU6IFZlY3RvcjMpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IHNjYWxlLng7XHJcbiAgICBtLl9kYXRhWzVdID0gc2NhbGUueTtcclxuICAgIG0uX2RhdGFbMTBdID0gc2NhbGUuejtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogTWF0cml4NHg0LCBiOiBNYXRyaXg0eDQpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGIwMCA9IGIuX2RhdGFbMCAqIDQgKyAwXTtcclxuICAgIGxldCBiMDEgPSBiLl9kYXRhWzAgKiA0ICsgMV07XHJcbiAgICBsZXQgYjAyID0gYi5fZGF0YVswICogNCArIDJdO1xyXG4gICAgbGV0IGIwMyA9IGIuX2RhdGFbMCAqIDQgKyAzXTtcclxuICAgIGxldCBiMTAgPSBiLl9kYXRhWzEgKiA0ICsgMF07XHJcbiAgICBsZXQgYjExID0gYi5fZGF0YVsxICogNCArIDFdO1xyXG4gICAgbGV0IGIxMiA9IGIuX2RhdGFbMSAqIDQgKyAyXTtcclxuICAgIGxldCBiMTMgPSBiLl9kYXRhWzEgKiA0ICsgM107XHJcbiAgICBsZXQgYjIwID0gYi5fZGF0YVsyICogNCArIDBdO1xyXG4gICAgbGV0IGIyMSA9IGIuX2RhdGFbMiAqIDQgKyAxXTtcclxuICAgIGxldCBiMjIgPSBiLl9kYXRhWzIgKiA0ICsgMl07XHJcbiAgICBsZXQgYjIzID0gYi5fZGF0YVsyICogNCArIDNdO1xyXG4gICAgbGV0IGIzMCA9IGIuX2RhdGFbMyAqIDQgKyAwXTtcclxuICAgIGxldCBiMzEgPSBiLl9kYXRhWzMgKiA0ICsgMV07XHJcbiAgICBsZXQgYjMyID0gYi5fZGF0YVszICogNCArIDJdO1xyXG4gICAgbGV0IGIzMyA9IGIuX2RhdGFbMyAqIDQgKyAzXTtcclxuXHJcbiAgICBsZXQgYTAwID0gYS5fZGF0YVswICogNCArIDBdO1xyXG4gICAgbGV0IGEwMSA9IGEuX2RhdGFbMCAqIDQgKyAxXTtcclxuICAgIGxldCBhMDIgPSBhLl9kYXRhWzAgKiA0ICsgMl07XHJcbiAgICBsZXQgYTAzID0gYS5fZGF0YVswICogNCArIDNdO1xyXG4gICAgbGV0IGExMCA9IGEuX2RhdGFbMSAqIDQgKyAwXTtcclxuICAgIGxldCBhMTEgPSBhLl9kYXRhWzEgKiA0ICsgMV07XHJcbiAgICBsZXQgYTEyID0gYS5fZGF0YVsxICogNCArIDJdO1xyXG4gICAgbGV0IGExMyA9IGEuX2RhdGFbMSAqIDQgKyAzXTtcclxuICAgIGxldCBhMjAgPSBhLl9kYXRhWzIgKiA0ICsgMF07XHJcbiAgICBsZXQgYTIxID0gYS5fZGF0YVsyICogNCArIDFdO1xyXG4gICAgbGV0IGEyMiA9IGEuX2RhdGFbMiAqIDQgKyAyXTtcclxuICAgIGxldCBhMjMgPSBhLl9kYXRhWzIgKiA0ICsgM107XHJcbiAgICBsZXQgYTMwID0gYS5fZGF0YVszICogNCArIDBdO1xyXG4gICAgbGV0IGEzMSA9IGEuX2RhdGFbMyAqIDQgKyAxXTtcclxuICAgIGxldCBhMzIgPSBhLl9kYXRhWzMgKiA0ICsgMl07XHJcbiAgICBsZXQgYTMzID0gYS5fZGF0YVszICogNCArIDNdO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxO1xyXG4gICAgbS5fZGF0YVsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbM10gPSBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzRdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwICsgYjEzICogYTMwO1xyXG4gICAgbS5fZGF0YVs1XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbNl0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzddID0gYjEwICogYTAzICsgYjExICogYTEzICsgYjEyICogYTIzICsgYjEzICogYTMzO1xyXG4gICAgbS5fZGF0YVs4XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbOV0gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzEwXSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbMTFdID0gYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzO1xyXG4gICAgbS5fZGF0YVsxMl0gPSBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzEzXSA9IGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMTRdID0gYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyO1xyXG4gICAgbS5fZGF0YVsxNV0gPSBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKG06IE1hdHJpeDR4NCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFbaV0gPSBtLl9kYXRhW2ldO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgc2NhbGU6IFZlY3RvcjMgPSBWZWN0b3IzLm9uZTtcclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKHRyYW5zZm9ybTogVHJhbnNmb3JtKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLmNvcHlGcm9tKHRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICB0aGlzLnJvdGF0aW9uLmNvcHlGcm9tKHRyYW5zZm9ybS5yb3RhdGlvbik7XHJcbiAgICB0aGlzLnNjYWxlLmNvcHlGcm9tKHRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKTogTWF0cml4NHg0IHtcclxuICAgIGxldCB0cmFuc2xhdGlvbiA9IE1hdHJpeDR4NC50cmFuc2xhdGlvbih0aGlzLnBvc2l0aW9uKTtcclxuXHJcbiAgICBsZXQgcm90YXRpb24gPSBNYXRyaXg0eDQucm90YXRpb25YWVooXHJcbiAgICAgIHRoaXMucm90YXRpb24ueCxcclxuICAgICAgdGhpcy5yb3RhdGlvbi55LFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLnpcclxuICAgICk7XHJcbiAgICBsZXQgc2NhbGUgPSBNYXRyaXg0eDQuc2NhbGUodGhpcy5zY2FsZSk7XHJcblxyXG4gICAgLy8gb3JkZXIgbWF0dGVycyBoZXJlXHJcbiAgICAvLyBUICogUiAqIFNcclxuICAgIHJldHVybiBNYXRyaXg0eDQubXVsdGlwbHkoTWF0cml4NHg0Lm11bHRpcGx5KHRyYW5zbGF0aW9uLCByb3RhdGlvbiksIHNjYWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ucm90YXRpb24pIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbi5zZXRGcm9tSnNvbihqc29uLnJvdGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5zY2FsZSkge1xyXG4gICAgICB0aGlzLnNjYWxlLnNldEZyb21Kc29uKGpzb24uc2NhbGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4uL2JlaGF2aW9ycy9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltT2JqZWN0IHtcclxuICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2NoaWxkcmVuOiBTaW1PYmplY3RbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3BhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2lzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2JlaGF2aW9yczogSUJlaGF2aW9yW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxNYXRyaXg6IE1hdHJpeDR4NCA9IE1hdHJpeDR4NC5pZGVudGl0eSgpO1xyXG4gIHByaXZhdGUgX3dvcmxkTWF0cml4OiBNYXRyaXg0eDQgPSBNYXRyaXg0eDQuaWRlbnRpdHkoKTtcclxuXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybTogVHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzY2VuZT86IFNjZW5lKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudCB8fCB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdvcmxkTWF0cml4KCk6IE1hdHJpeDR4NCB7XHJcbiAgICByZXR1cm4gdGhpcy5fd29ybGRNYXRyaXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENoaWxkKGNoaWxkOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIGNoaWxkLl9wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICBpZiAodGhpcy5fc2NlbmUpIHtcclxuICAgICAgY2hpbGQub25BZGRlZCh0aGlzLl9zY2VuZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlQ2hpbGQoY2hpbGQ6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNoaWxkLl9wYXJlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIC8vIGRvdWJsZSBjaGVjayB0aGlzIHdvcmtzXHJcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKChfLCBpZHgpID0+IGluZGV4ICE9PSBpZHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbXBvbmVudEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBJQ29tcG9uZW50IHwgdW5kZWZpbmVkIHtcclxuICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiB0aGlzLl9jb21wb25lbnRzKSB7XHJcbiAgICAgIGlmIChjb21wb25lbnQubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBsZXQgY29tcG9uZW50ID0gY2hpbGQuZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWUpO1xyXG4gICAgICBpZiAoY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJlaGF2aW9yQnlOYW1lKG5hbWU6IHN0cmluZyk6IElCZWhhdmlvciB8IHVuZGVmaW5lZCB7XHJcbiAgICBmb3IgKGxldCBiZWhhdmlvciBvZiB0aGlzLl9iZWhhdmlvcnMpIHtcclxuICAgICAgaWYgKGJlaGF2aW9yLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYmVoYXZpb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBsZXQgYmVoYXZpb3IgPSBjaGlsZC5nZXRCZWhhdmlvckJ5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKGJlaGF2aW9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gYmVoYXZpb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0T2JqZWN0QnlOYW1lKG5hbWU6IHN0cmluZyk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBjaGlsZC5nZXRPYmplY3RCeU5hbWUobmFtZSk7XHJcbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IElDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgY29tcG9uZW50LnNldE93bmVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEJlaGF2aW9yKGJlaGF2aW9yOiBJQmVoYXZpb3IpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JlaGF2aW9ycy5wdXNoKGJlaGF2aW9yKTtcclxuICAgIGJlaGF2aW9yLnNldE93bmVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LmxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLmxvYWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC51cGRhdGVSZWFkeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYmVoYXZpb3JzLmZvckVhY2goKGJlaGF2aW9yKSA9PiB7XHJcbiAgICAgIGJlaGF2aW9yLnVwZGF0ZVJlYWR5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGVSZWFkeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2xvY2FsTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKTtcclxuICAgIHRoaXMudXBkYXRlV29ybGRNYXRyaXgoXHJcbiAgICAgIHRoaXMuX3BhcmVudCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fcGFyZW50LndvcmxkTWF0cml4IDogdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iZWhhdmlvcnMuZm9yRWFjaCgoYmVoYXZpb3IpID0+IHtcclxuICAgICAgYmVoYXZpb3IudXBkYXRlKHRpbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V29ybGRQb3NpdGlvbigpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXguZGF0YVsxMl0sXHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmRhdGFbMTNdLFxyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeC5kYXRhWzE0XVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkFkZGVkKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXg6IE1hdHJpeDR4NCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBNYXRyaXg0eDQubXVsdGlwbHkoXHJcbiAgICAgICAgcGFyZW50V29ybGRNYXRyaXgsXHJcbiAgICAgICAgdGhpcy5fbG9jYWxNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmNvcHlGcm9tKHRoaXMuX2xvY2FsTWF0cml4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi9zaW1PYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9yb290OiBTaW1PYmplY3Q7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBuZXcgU2ltT2JqZWN0KDAsICdfX1JPT1RfXycsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb290KCk6IFNpbU9iamVjdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRPYmplY3Qob2JqZWN0OiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QuYWRkQ2hpbGQob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290LmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKSB7XHJcbiAgICB0aGlzLl9yb290LnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi4vYmVoYXZpb3JzL2JlaGF2aW9yTWFuYWdlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4vc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBlbnVtIFpvbmVTdGF0ZSB7XHJcbiAgVU5JTklUSUFMSVpFRCxcclxuICBMT0FESU5HLFxyXG4gIFVQREFUSU5HLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgWm9uZSB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgcHJpdmF0ZSBfc3RhdGU6IFpvbmVTdGF0ZSA9IFpvbmVTdGF0ZS5VTklOSVRJQUxJWkVEO1xyXG4gIHByaXZhdGUgX2dsb2JhbElkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuX3NjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZSh6b25lRGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoem9uZURhdGEub2JqZWN0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBpbml0aWFsaXphdGlvbiBlcnJvcjogb2JqZWN0cyBub3QgcHJlc2VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvbmVEYXRhLm9iamVjdHMuZm9yRWFjaCgobzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvIGFzIFNpbU9iamVjdCwgdGhpcy5fc2NlbmUucm9vdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuTE9BRElORztcclxuXHJcbiAgICB0aGlzLl9zY2VuZS5sb2FkKCk7XHJcblxyXG4gICAgdGhpcy5fc2NlbmUucm9vdC51cGRhdGVSZWFkeSgpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVubG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFjdGl2YXRlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBvbkRlYWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHJpdmF0ZSBsb2FkU2ltT2JqZWN0KGRhdGFTZWN0aW9uOiBhbnksIHBhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBsZXQgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAoZGF0YVNlY3Rpb24ubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5hbWUgPSBTdHJpbmcoZGF0YVNlY3Rpb24ubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZ2xvYmFsSWQrKztcclxuICAgIGxldCBzaW1PYmplY3QgPSBuZXcgU2ltT2JqZWN0KHRoaXMuX2dsb2JhbElkLCBuYW1lLCB0aGlzLl9zY2VuZSk7XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNpbU9iamVjdC50cmFuc2Zvcm0uc2V0RnJvbUpzb24oZGF0YVNlY3Rpb24udHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY29tcG9uZW50cykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jb21wb25lbnRzLmZvckVhY2goKGM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudE1hbmFnZXIuZXh0cmFjdENvbXBvbmVudChjKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5iZWhhdmlvcnMpIHtcclxuICAgICAgZGF0YVNlY3Rpb24uYmVoYXZpb3JzLmZvckVhY2goKGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gQmVoYXZpb3JNYW5hZ2VyLmV4dHJhY3RCZWhhdmlvcihiKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQmVoYXZpb3IoYmVoYXZpb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY2hpbGRyZW4gJiYgZGF0YVNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChvOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRTaW1PYmplY3Qobywgc2ltT2JqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmVudC5hZGRDaGlsZChzaW1PYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEpzb25Bc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSAnLi96b25lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBab25lTWFuYWdlciBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2dsb2JhbFpvbmVJRDogbnVtYmVyID0gLTE7XHJcbiAgLy8gIHByaXZhdGUgc3RhdGljIF96b25lczogeyBbaWQ6IG51bWJlcl06IFpvbmUgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkWm9uZXM6IHsgW2lkOiBudW1iZXJdOiBzdHJpbmcgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9hY3RpdmVab25lOiBab25lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0OiBab25lTWFuYWdlcjtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIFpvbmVNYW5hZ2VyLl9pbnN0ID0gbmV3IFpvbmVNYW5hZ2VyKCk7XHJcbiAgICAvLyB0ZW1wb3JhcnlcclxuICAgIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbMF0gPSAnc3JjL2Fzc2V0cy96b25lcy90ZXN0Wm9uZS5qc29uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlWm9uZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkRlYWN0aXZhdGVkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVubG9hZCgpO1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoQXNzZXRNYW5hZ2VyLmlzQXNzZXRMb2FkZWQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pKSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbaWRdLFxyXG4gICAgICAgICAgWm9uZU1hbmFnZXIuX2luc3RcclxuICAgICAgICApO1xyXG4gICAgICAgIEFzc2V0TWFuYWdlci5sb2FkQXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFpvbmUgaWQ6ICR7aWR9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZS5pbmRleE9mKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCkgIT09IC0xKSB7XHJcbiAgICAgIGxldCBhc3NldCA9IG1lc3NhZ2UuY29udGV4dCBhcyBKc29uQXNzZXQ7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLmxvYWRab25lKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGxvYWRab25lKGFzc2V0OiBKc29uQXNzZXQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHpvbmVEYXRhID0gYXNzZXQuZGF0YTtcclxuICAgIGxldCB6b25lSWQ6IG51bWJlcjtcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBpZCBub3QgcHJlc2VudCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHpvbmVJZCA9IE51bWJlcih6b25lRGF0YS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKCF6b25lRGF0YS5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBuYW1lIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZU5hbWUgPSBTdHJpbmcoem9uZURhdGEubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHpvbmVEZXNjcmlwdGlvbiA9IFN0cmluZyh6b25lRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IG5ldyBab25lKHpvbmVJZCEsIHpvbmVOYW1lLCB6b25lRGVzY3JpcHRpb24pO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUuaW5pdGlhbGl6ZSh6b25lRGF0YSk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkFjdGl2YXRlZCgpO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUubG9hZCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vY29sbGlzaW9uL2NvbGxpc2lvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2JpdG1hcFRleHRDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xsaXNpb25Db21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2xsaXNpb25Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi9hdWRpby9hdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvck1hbmFnZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMva2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yJztcclxuaW1wb3J0IHsgUGxheWVyQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMvcGxheWVyQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL3JvdGF0aW9uQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBTY3JvbGxCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9zY3JvbGxCZWhhdmlvcic7XHJcbmltcG9ydCB7IGdsLCBHTFV0aWxpdGllcyB9IGZyb20gJy4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBCYXNpY1NoYWRlciB9IGZyb20gJy4vZ2wvc2hhZGVycy9iYXNpY1NoYWRlcic7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnRNYW5hZ2VyIH0gZnJvbSAnLi9ncmFwaGljcy9iaXRtYXBGb250TWFuYWdlcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9ncmFwaGljcy9jb2xvcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyLCBNb3VzZUNvbnRleHQgfSBmcm9tICcuL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlQnVzJztcclxuaW1wb3J0IHsgWm9uZU1hbmFnZXIgfSBmcm9tICcuL3dvcmxkL3pvbmVNYW5hZ2VyJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBnYW1lIGVuZ2luZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9iYXNpY1NoYWRlcjogQmFzaWNTaGFkZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcHJvamVjdGlvbjogTWF0cml4NHg0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3ByZXZpb3VzVGltZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9nYW1lV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9nYW1lSGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgZW5naW5lXHJcbiAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgZ2FtZSBpbiBwaXhlbHNcclxuICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGdhbWUgaW4gcGl4ZWxzXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHdpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2dhbWVXaWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5fZ2FtZUhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZSgnTU9VU0VfRE9XTicsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHVwIHRoaXMgZW5naW5lXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gR0xVdGlsaXRpZXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgaWYgKHRoaXMuX2dhbWVXaWR0aCAmJiB0aGlzLl9nYW1lSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuX2dhbWVXaWR0aCArICdweCc7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLl9nYW1lSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fZ2FtZVdpZHRoO1xyXG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fZ2FtZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBBc3NldE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgSW5wdXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIFpvbmVNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBnbC5jbGVhckNvbG9yKDk5IC8gMjU1LCAxNTUgLyAyNTUsIDI1NSAvIDI1NSwgMSk7XHJcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xyXG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcblxyXG4gICAgbGV0IGltYWdlQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy90ZXh0dXJlcy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaVxyXG4gICAgKTtcclxuICAgIGxldCBqc29uQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3pvbmVzLycsIHRydWUsIC9cXC4oanNvbikkL2kpO1xyXG4gICAgbGV0IGF1ZGlvQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy9zb3VuZHMvJyxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgL1xcLih3YXZ8bXAzKSQvaVxyXG4gICAgKTtcclxuICAgIGxldCBmb250Q29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy9mb250cy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHBuZ3x0eHQpJC9pXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubG9hZEFsbChpbWFnZUNvbnRleHQpO1xyXG4gICAgdGhpcy5sb2FkQWxsKGpzb25Db250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChhdWRpb0NvbnRleHQpO1xyXG4gICAgdGhpcy5sb2FkQWxsKGZvbnRDb250ZXh0KTtcclxuXHJcbiAgICB0aGlzLl9iYXNpY1NoYWRlciA9IG5ldyBCYXNpY1NoYWRlcigpO1xyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIudXNlKCk7XHJcblxyXG4gICAgLy8gTG9hZCBmb250c1xyXG4gICAgQml0bWFwRm9udE1hbmFnZXIuYWRkRm9udCgnZGVmYXVsdCcsICdzcmMvYXNzZXRzL2ZvbnRzL25hdGUtOC1iaXQudHh0Jyk7XHJcbiAgICBCaXRtYXBGb250TWFuYWdlci5sb2FkKCk7XHJcblxyXG4gICAgLy8gTG9hZCBtYXRlcmlhbHNcclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgICAgJ3N0b25lV2FsbCcsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvc3RvbmVfd2FsbC5qcGcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICd3b29kUGxhbmsnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3dvb2RfcGxhbmsuanBnJyxcclxuICAgICAgICBDb2xvci53aGl0ZSgpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbCgnYmcnLCAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9iYWNrZ3JvdW5kLnBuZycsIENvbG9yLndoaXRlKCkpXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoJ3BpcGVFbmQnLCAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9waXBlX2VuZC5wbmcnLCBDb2xvci53aGl0ZSgpKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdwaXBlQm9keScsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvcGlwZV9ib2R5LnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoJ2JpcmQnLCAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9iaXJkX3NocnVuay5wbmcnLCBDb2xvci53aGl0ZSgpKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdncmFzcycsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvZ3Jhc3NfYmlnZ2VyLnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnYmlyZEp1bXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnbXVzaWMnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYWxmX3JlbWl4Lm1wMycsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ3RpbmcnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvdGluZy53YXYnLCBmYWxzZSk7XHJcbiAgICBBdWRpb01hbmFnZXIubG9hZFNvdW5kRmlsZShcclxuICAgICAgJ2ZsYXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ2RlYWQnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvZGVhdGgud2F2JywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZpbmQgYSBiZXR0ZXIgcGxhY2UgZm9yIHRoaXM/XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIoKSk7XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBCaXRtYXBUZXh0Q29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgUGxheWVyQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFNjcm9sbEJlaGF2aW9yQnVpbGRlcigpKTtcclxuXHJcbiAgICB0aGlzLnJlc2l6ZSgpO1xyXG5cclxuICAgIC8vIEJlZ2luIHRoZSBwcmVsb2FkIHBoYXNlLCB3aGljaCB3YWl0cyBmb3IgdmFyaW91cyBlbGVtZW50cyB0byBiZSBsb2FkZWQgYmVmb3JlIHN0YXJ0aW5nIHRoZSBnYW1lLlxyXG4gICAgdGhpcy5wcmVsb2FkaW5nKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBjYW52YXMgdG8gZml0IHRoZSB3aW5kb3cuXHJcbiAgICovXHJcbiAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLl9jYW52YXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2dhbWVXaWR0aCB8fCAhdGhpcy5fZ2FtZUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3Byb2plY3Rpb24gPSBNYXRyaXg0eDQub3J0aG9ncmFwaGljKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAtMTAwLjAsXHJcbiAgICAgICAgMTAwLjBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZWxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAvLyBNYWtlIHN1cmUgdG8gYWx3YXlzIHVwZGF0ZSB0aGUgbWVzc2FnZSBidXMuXHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZSgwKTtcclxuXHJcbiAgICBpZiAoIUJpdG1hcEZvbnRNYW5hZ2VyLnVwZGF0ZVJlYWR5KSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnByZWxvYWRpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIHVwIHpvbmUuICBUT0RPOiBNYWtlIHRoaXMgY29uZmlndXJhYmxlLlxyXG4gICAgWm9uZU1hbmFnZXIuY2hhbmdlWm9uZSgwKTtcclxuXHJcbiAgICAvLyBLaWNrIG9mZiB0aGUgcmVuZGVyIGxvb3BcclxuICAgIHRoaXMubG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb3VzZUNvbnRleHQgPSBtZXNzYWdlLmNvbnRleHQgYXMgTW91c2VDb250ZXh0O1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PT0gJ01PVVNFX0RPV04nICYmIG1vdXNlQ29udGV4dCkge1xyXG4gICAgICBNZXNzYWdlLnNlbmQoJ0dBTUVfU1RBUlQnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRBbGwocmVxdWlyZUNvbnRleHQ6IF9fV2VicGFja01vZHVsZUFwaS5SZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmVxdWlyZUNvbnRleHQua2V5cygpLmZvckVhY2gocmVxdWlyZUNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZGVsdGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3ByZXZpb3VzVGltZTtcclxuXHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgWm9uZU1hbmFnZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgdGhpcy5fcHJldmlvdXNUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlcikge1xyXG4gICAgICBab25lTWFuYWdlci5yZW5kZXIodGhpcy5fYmFzaWNTaGFkZXIpO1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IHVuaWZvcm1zXHJcbiAgICBpZiAodGhpcy5fYmFzaWNTaGFkZXIgJiYgdGhpcy5fcHJvamVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcm9qZWN0aW9uUG9zaXRpb24gPVxyXG4gICAgICAgIHRoaXMuX2Jhc2ljU2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9wcm9qZWN0aW9uJyk7XHJcblxyXG4gICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFxyXG4gICAgICAgIHByb2plY3Rpb25Qb3NpdGlvbixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3Byb2plY3Rpb24uZGF0YSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vY29yZS9lbmdpbmUnO1xyXG5cclxudmFyIGVuZ2luZTogRW5naW5lO1xyXG4vLyBUaGUgbWFpbiBlbnRyeSBwb2ludCB0byB0aGUgYXBwbGljYXRpb25cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBlbmdpbmUgPSBuZXcgRW5naW5lKDUxMiwgNzUwKTtcclxuICBlbmdpbmUuc3RhcnQoKTtcclxufTtcclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBlbmdpbmUucmVzaXplKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==