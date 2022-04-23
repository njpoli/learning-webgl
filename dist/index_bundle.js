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
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n}\r\n\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,UAAU;IACV,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n}\r\n\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}"],"sourceRoot":""}]);
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

/***/ 605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alf_remix.mp3": 853,
	"./bird_jump.wav": 607
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
	"./bird.png": 11,
	"./bird_shrunk.png": 826,
	"./bird_shrunk_2.png": 849,
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
            for (var o = c + 1; c < CollisionManager._components.length; c++) {
                var other = CollisionManager._components[o];
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
            }
        }
        while (removeData.length !== 0) {
            var idx = CollisionManager._collisionData.indexOf(removeData[0]);
            CollisionManager._collisionData.splice(idx, 1);
            removeData.shift();
        }
        // TODO: Remove Me
        document.title = CollisionManager._collisionData.length.toString();
    };
    CollisionManager._totalTime = 0;
    CollisionManager._components = [];
    CollisionManager._collisionData = [];
    return CollisionManager;
}());


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


;// CONCATENATED MODULE: ./src/core/assets/assetManager.ts



var MESSAGE_ASSET_LOADER_ASSET_LOADED = 'MESSAGE_ASSET_LOADER_ASSET_LOADED::';
var AssetManager = /** @class */ (function () {
    function AssetManager() {
    }
    AssetManager.initialize = function () {
        AssetManager._loaders.push(new ImageAssetLoader());
        AssetManager._loaders.push(new JsonAssetLoader());
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
    Vector2.prototype.setFromJson = function (json) {
        if (json.x) {
            this._x = Number(json.x);
        }
        if (json.y) {
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
    Vector2.prototype.clone = function () {
        return new Vector2(this._x, this._y);
    };
    return Vector2;
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
        if (gl === undefined) {
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
        if (x) {
            this._x = x;
        }
        if (y) {
            this._y = y;
        }
        if (z) {
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
        if (json.x) {
            this._x = Number(json.x);
        }
        if (json.y) {
            this._y = Number(json.y);
        }
        if (json.z) {
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
        _this._frameWidth = frameWidth;
        _this._frameHeight = frameHeight;
        _this._frameCount = frameCount;
        _this._frameSequence = frameSequence;
        if (_this._material) {
            Message.subscribe(MESSAGE_ASSET_LOADER_ASSET_LOADED + _this._material.diffuseTextureName, _this);
        }
        return _this;
    }
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
    };
    AnimatedSprite.prototype.update = function (time) {
        var _this = this;
        var _a, _b, _c, _d;
        // Hack around for not being instantiated before onMessage is sent
        // Revisit
        if (this._material && !this._assetLoaded) {
            var asset = AssetManager.getAsset((_a = this._material) === null || _a === void 0 ? void 0 : _a.diffuseTextureName);
            if (asset) {
                this._assetLoaded = true;
                this._assetHeight = asset.height;
                this._assetWidth = asset.width;
                this.calculateUVs();
            }
            else {
                return;
            }
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
            (_b = this._buffer) === null || _b === void 0 ? void 0 : _b.clearData();
            this._vertices.forEach(function (v) {
                var _a;
                (_a = _this._buffer) === null || _a === void 0 ? void 0 : _a.pushBackData(v.toArray());
            });
            (_c = this._buffer) === null || _c === void 0 ? void 0 : _c.upload();
            (_d = this._buffer) === null || _d === void 0 ? void 0 : _d.unbind();
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
        _this._sprite = new Sprite(data.name, data.materialName);
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
        return _this;
    }
    AnimatedSpriteComponentData.prototype.setFromJson = function (json) {
        _super.prototype.setFromJson.call(this, json);
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
        _this._sprite = new AnimatedSprite(data.name, data.materialName, data.frameWidth, data.frameHeight, data.frameWidth, data.frameHeight, data.frameCount, data.frameSequence);
        return _this;
    }
    AnimatedSpriteComponent.prototype.load = function () {
        this._sprite.load();
    };
    AnimatedSpriteComponent.prototype.update = function (time) {
        this._sprite.update(time);
        _super.prototype.update.call(this, time);
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
        this.origin = new Vector2(0.5, 0.5);
        this.position = Vector2.zero;
    }
    Object.defineProperty(Rectangle2D.prototype, "offset", {
        get: function () {
            return new Vector2(
            //@ts-ignore
            -(this.width * this.origin.x), 
            //@ts-ignore
            -(this.height * this.origin.y));
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
            if (this.pointInShape(otherShape.position) ||
                this.pointInShape(new Vector2(otherShape.position.x + otherShape.width, otherShape.position.y)) ||
                this.pointInShape(new Vector2(otherShape.position.x + otherShape.width, otherShape.position.y + otherShape.height)) ||
                this.pointInShape(new Vector2(otherShape.position.x, otherShape.position.y + otherShape.height))) {
                return true;
            }
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
            if (point.x >= this.position.x &&
                point.x <= this.position.x + this.width) {
                if (point.y >= this.position.y &&
                    point.y <= this.position.y + this.height) {
                    return true;
                }
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
    }
    CollisionComponentData.prototype.setFromJson = function (json) {
        var _a;
        if (json.name) {
            this.name = String(json.name);
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
        return _this;
    }
    Object.defineProperty(CollisionComponent.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        enumerable: false,
        configurable: true
    });
    CollisionComponent.prototype.load = function () {
        _super.prototype.load.call(this);
        if (this._owner) {
            this._shape.position.copyFrom(this._owner.transform.position.toVector2().add(this._shape.offset));
        }
        // Tell the collision manager that we exist.
        CollisionManager.registerCollisionComponent(this);
    };
    CollisionComponent.prototype.update = function (time) {
        if (this._owner) {
            this._shape.position.copyFrom(this._owner.transform.position.toVector2().add(this._shape.offset));
        }
        _super.prototype.update.call(this, time);
    };
    CollisionComponent.prototype.render = function (shader) {
        //if (this._owner?.worldMatrix) {
        //this._sprite.draw(shader, this._owner?.worldMatrix);
        //}
        _super.prototype.render.call(this, shader);
    };
    CollisionComponent.prototype.onCollisionEntry = function (other) {
        console.log('onCollisionEntry:', this, other);
    };
    CollisionComponent.prototype.onCollisionUpdate = function (other) {
        console.log('onCollisionUpdate', this, other);
    };
    CollisionComponent.prototype.onCollisionExit = function (other) {
        console.log('onCollisionExit', this, other);
    };
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
        if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 73) {
            event.preventDefault();
            event.stopPropagation();
        }
        return true;
    };
    InputManager.onKeyUp = function (event) {
        InputManager._keys[event.keyCode] = false;
        if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 73) {
            event.preventDefault();
            event.stopPropagation();
        }
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
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var error = gl.getShaderInfoLog(shader);
        if (error) {
            throw new Error('Error compiling shader: ' + this._name + ': ' + error);
        }
        return shader;
    };
    Shader.prototype.createProgram = function (vertexShader, fragmentShader) {
        this._program = gl.createProgram();
        gl.attachShader(this._program, vertexShader);
        gl.attachShader(this._program, fragmentShader);
        gl.linkProgram(this._program);
        var error = gl.getProgramInfoLog(this._program);
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
        Message.subscribe(MESSAGE_ASSET_LOADER_ASSET_LOADED + this._name, this);
        this.bind();
        // This signature is for loading raw data into a texture
        gl.texImage2D(gl.TEXTURE_2D, LEVEL, gl.RGBA, 1, 1, BORDER, gl.RGBA, gl.UNSIGNED_BYTE, TEMP_IMAGE_DATA);
        var asset = AssetManager.getAsset(this._name);
        if (asset) {
            this.loadTextureFromAsset(asset);
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
     */
    function Engine() {
        this._previousTime = 0;
    }
    /**
     * Starts up this engine
     */
    Engine.prototype.start = function () {
        this._canvas = GLUtilities.initialize();
        AssetManager.initialize();
        InputManager.initialize();
        ZoneManager.initialize();
        Message.subscribe('MOUSE_DOWN', this);
        gl.clearColor(0, 0, 0.3, 1);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        var imageContext = __webpack_require__(245);
        var jsonContext = __webpack_require__(924);
        var audioContext = __webpack_require__(605);
        this.loadAll(imageContext);
        this.loadAll(jsonContext);
        this.loadAll(audioContext);
        this._basicShader = new BasicShader();
        this._basicShader.use();
        // Load materials
        MaterialManager.registerMaterial(new Material('stoneWall', 'src/assets/textures/stone_wall.jpg', Color.white()));
        MaterialManager.registerMaterial(new Material('woodPlank', 'src/assets/textures/wood_plank.jpg', Color.white()));
        MaterialManager.registerMaterial(new Material('bird', 'src/assets/textures/bird_shrunk_2.png', Color.white()));
        AudioManager.loadSoundFile('birdJump', 'src/assets/sounds/bird_jump.wav', false);
        AudioManager.loadSoundFile('music', 'src/assets/sounds/alf_remix.mp3', true);
        // Find a better place for this?
        ComponentManager.registerBuilder(new SpriteComponentBuilder());
        ComponentManager.registerBuilder(new AnimatedSpriteComponentBuilder());
        ComponentManager.registerBuilder(new CollisionComponentBuilder());
        BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
        BehaviorManager.registerBuilder(new KeyboardMovementBehaviorBuilder());
        // TODO: Change this to be read from game config
        ZoneManager.changeZone(0);
        this.resize();
        this.loop();
    };
    /**
     * Resizes the canvas to fit the window.
     */
    Engine.prototype.resize = function () {
        if (this._canvas !== undefined) {
            this._canvas.width = window.innerWidth;
            this._canvas.height = window.innerHeight;
            this._projection = Matrix4x4.orthographic(0, this._canvas.width, this._canvas.height, 0, -100.0, 100.0);
            gl.viewport(0, 0, this._canvas.width, this._canvas.height);
        }
    };
    Engine.prototype.loop = function () {
        this.update();
        this.render();
    };
    Engine.prototype.onMessage = function (message) {
        var mouseContext = message.context;
        if (message.code === 'MOUSE_DOWN' && mouseContext) {
            if (mouseContext.leftDown) {
                AudioManager.playSound('birdJump');
            }
            else if (mouseContext.rightDown) {
                AudioManager.toggleSound('music');
            }
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
        requestAnimationFrame(this.loop.bind(this));
    };
    return Engine;
}());


;// CONCATENATED MODULE: ./src/index.ts


var engine;
// The main entry point to the application
window.onload = function () {
    engine = new Engine();
    engine.start();
};
window.onresize = function () {
    engine.resize();
};
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRCxVQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1QyxVQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFJLENBQUMsT0FBTywwQ0FBRSxTQUFTLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7O1lBQ3ZCLFdBQUksQ0FBQyxPQUFPLDBDQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztR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RWEsa0JBQVEsR0FBdEIsVUFBdUIsQ0FBWSxFQUFFLENBQVk7UUFDL0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUV4QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUU1RCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxrQ0FBYyxHQUFyQjtRQUNFLE9B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LENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLFFBQVEsR0FBRztJQUNoQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLGFBQWEsR0FBRyxVQUFVLEtBQUs7SUFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvc291bmRzfHN5bmN8QzovLih3YXYlN0NtcDMpJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy90ZXh0dXJlc3xzeW5jfEM6Ly4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvYXNzZXRzL3pvbmVzfHN5bmN8QzovLihqc29uKSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbGxpc2lvbi9jb2xsaXNpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWVzc2FnZS9tZXNzYWdlU3Vic2NyaXB0aW9uTm9kZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZUJ1cy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXNzZXRzL2pzb25Bc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9hc3NldE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3ZlY3RvcjIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL2dsQnVmZmVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvdmVydGV4LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3Mvc3ByaXRlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvYW5pbWF0ZWRTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9iYXNlQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvYW5pbWF0ZWRTcHJpdGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9zaGFwZXMyRC9jaXJjbGUyRC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3NoYXBlczJEL3JlY3RhbmdsZTJkLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvY29sbGlzaW9uQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2F1ZGlvL2F1ZGlvTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9pbnB1dC9pbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvYmFzZUJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2tleWJvYXJkTW92ZW1lbnRCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9yb3RhdGlvbkJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvc2hhZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvc2hhZGVycy9iYXNpY1NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2NvbG9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3RleHR1cmVNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL21hdHJpeDR4NC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2ltT2JqZWN0LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS93b3JsZC96b25lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2FsZl9yZW1peC5tcDNcIjogODUzLFxuXHRcIi4vYmlyZF9qdW1wLndhdlwiOiA2MDdcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA2MDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JpcmQucG5nXCI6IDExLFxuXHRcIi4vYmlyZF9zaHJ1bmsucG5nXCI6IDgyNixcblx0XCIuL2JpcmRfc2hydW5rXzIucG5nXCI6IDg0OSxcblx0XCIuL3N0b25lX3dhbGwuanBnXCI6IDE5MCxcblx0XCIuL3N0b25lX3dhbGxfMTI4eDEyOC5qcGdcIjogNzM4LFxuXHRcIi4vd29vZF9wbGFuay5qcGdcIjogODQ3LFxuXHRcIi4vd29vZF9wbGFua18xMjh4MTI4LmpwZ1wiOiAzMDZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL3Rlc3Rab25lLmpzb25cIjogOTkzXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gOTI0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgQ29sbGlzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2xsaXNpb25Db21wb25lbnQnO1xyXG5cclxuY2xhc3MgQ29sbGlzaW9uRGF0YSB7XHJcbiAgcHVibGljIHRpbWU6IG51bWJlcjtcclxuICBwdWJsaWMgYTogQ29sbGlzaW9uQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBiOiBDb2xsaXNpb25Db21wb25lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHRpbWU6IG51bWJlcixcclxuICAgIGE6IENvbGxpc2lvbkNvbXBvbmVudCxcclxuICAgIGI6IENvbGxpc2lvbkNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgIHRoaXMuYSA9IGE7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF90b3RhbFRpbWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbXBvbmVudHM6IENvbGxpc2lvbkNvbXBvbmVudFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9jb2xsaXNpb25EYXRhOiBDb2xsaXNpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJDb2xsaXNpb25Db21wb25lbnQoY29tcG9uZW50OiBDb2xsaXNpb25Db21wb25lbnQpIHtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyQ29sbGlzaW9uQ29tcG9uZW50KGNvbXBvbmVudDogQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBpZHggPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KTtcclxuICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmZpbHRlcihcclxuICAgICAgICAoXywgaSkgPT4gaSAhPT0gaWR4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLl90b3RhbFRpbWUgKz0gdGltZTtcclxuXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgbGV0IGNvbXAgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzW2NdO1xyXG4gICAgICBmb3IgKGxldCBvID0gYyArIDE7IGMgPCBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgbGV0IG90aGVyID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50c1tvXTtcclxuXHJcbiAgICAgICAgaWYgKGNvbXAuc2hhcGUuaW50ZXJzZWN0cyhvdGhlci5zaGFwZSkpIHtcclxuICAgICAgICAgIC8vIEhhdmUgYSBjb2xsaXNpb25cclxuICAgICAgICAgIGxldCBleGlzdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgIGZvciAobGV0IGQgPSAwOyBkIDwgQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5sZW5ndGg7IGQrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGFbZF07XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoZGF0YS5hID09PSBjb21wICYmIGRhdGEuYiA9PT0gb3RoZXIpIHx8XHJcbiAgICAgICAgICAgICAgKGRhdGEuYiA9PT0gY29tcCAmJiBkYXRhLmEgPT09IG90aGVyKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAvLyBXZSBoYXZlIGV4aXN0aW5nIGRhdGEuIFVwZGF0ZSBpdC5cclxuICAgICAgICAgICAgICAvLyBvbkNvbGxpc2lvblVwZGF0ZVxyXG4gICAgICAgICAgICAgIGNvbXAub25Db2xsaXNpb25VcGRhdGUob3RoZXIpO1xyXG4gICAgICAgICAgICAgIG90aGVyLm9uQ29sbGlzaW9uVXBkYXRlKGNvbXApO1xyXG4gICAgICAgICAgICAgIGRhdGEudGltZSA9IENvbGxpc2lvbk1hbmFnZXIuX3RvdGFsVGltZTtcclxuICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29sbGlzaW9uXHJcbiAgICAgICAgICAgIC8vIG9uQ29sbGlzaW9uRW50cnlcclxuICAgICAgICAgICAgY29tcC5vbkNvbGxpc2lvbkVudHJ5KG90aGVyKTtcclxuICAgICAgICAgICAgb3RoZXIub25Db2xsaXNpb25FbnRyeShjb21wKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbCA9IG5ldyBDb2xsaXNpb25EYXRhKFxyXG4gICAgICAgICAgICAgIENvbGxpc2lvbk1hbmFnZXIuX3RvdGFsVGltZSxcclxuICAgICAgICAgICAgICBjb21wLFxyXG4gICAgICAgICAgICAgIG90aGVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpc2lvbkRhdGEucHVzaChjb2xsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgc3RhbGUgY29sbGlzaW9uIGRhdGEuXHJcbiAgICBjb25zdCByZW1vdmVEYXRhOiBDb2xsaXNpb25EYXRhW10gPSBbXTtcclxuICAgIGZvciAobGV0IGQgPSAwOyBkIDwgQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5sZW5ndGg7IGQrKykge1xyXG4gICAgICBjb25zdCBkYXRhID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YVtkXTtcclxuICAgICAgaWYgKGRhdGEudGltZSAhPT0gQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lKSB7XHJcbiAgICAgICAgLy8gT2xkIGNvbGxpc2lvbiBkYXRhXHJcbiAgICAgICAgLy8gb25Db2xsaXNpb25FeGl0XHJcbiAgICAgICAgcmVtb3ZlRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBkYXRhLmE/Lm9uQ29sbGlzaW9uRXhpdChkYXRhLmIpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBkYXRhLmI/Lm9uQ29sbGlzaW9uRXhpdChkYXRhLmEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHJlbW92ZURhdGEubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEuaW5kZXhPZihyZW1vdmVEYXRhWzBdKTtcclxuXHJcbiAgICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIHJlbW92ZURhdGEuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgTWVcclxuICAgIGRvY3VtZW50LnRpdGxlID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5sZW5ndGgudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgcHVibGljIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IE1lc3NhZ2UsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcikge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUgfSBmcm9tICcuL21lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVByaW9yaXR5IH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcclxuICBwcml2YXRlIHN0YXRpYyBfc3Vic2NyaXB0aW9uczogeyBbY29kZTogc3RyaW5nXTogSU1lc3NhZ2VIYW5kbGVyW10gfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsUXVldWVNZXNzYWdlUGVyVXBkYXRlOiBudW1iZXIgPSAxMDtcclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsTWVzc2FnZVF1ZXVlOiBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZFN1YnNjcmlwdGlvbihjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5pbmRleE9mKGhhbmRsZXIpICE9PSAtMSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ0F0dGVtcHRpbmcgdG8gYWRkIGEgZHVwbGljYXRlIGhhbmRsZXIgdG8gY29kZSAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJy4gU3Vic2NyaXB0aW9uIG5vdCBhZGRlZC4nXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbW92ZVN1YnNjcmlwdGlvbihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlclxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gTm90IHN1cmUgaWYgdGhpcyBpcyBjb3JyZWN0XHJcbiAgICBpZiAoIU1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdDYW5ub3QgdW5zdWJzY3JpYmUgaGFuZGxlciBmcm9tIGNvZGU6ICcgK1xyXG4gICAgICAgICAgY29kZSArXHJcbiAgICAgICAgICAnIGJlY2F1c2UgdGhhdCBjb2RlIGRvZXMgbm90IHN1YnNjcmliZWQgdG8uJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5vZGVJbmRleCA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgIGlmIChub2RlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmZpbHRlcihcclxuICAgICAgICAoXywgaWR4KSA9PiBpZHggIT09IG5vZGVJbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwb3N0KG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIHBvc3RlZDonLCBtZXNzYWdlKTtcclxuICAgIGNvbnN0IGhhbmRsZXJzID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1ttZXNzYWdlLmNvZGVdO1xyXG4gICAgaWYgKCFoYW5kbGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5wcmlvcml0eSA9PT0gTWVzc2FnZVByaW9yaXR5LkhJR0gpIHtcclxuICAgICAgICBoLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUucHVzaChcclxuICAgICAgICAgIG5ldyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZShtZXNzYWdlLCBoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTm90IHVzaW5nIHRpbWU/XHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUxpbWl0ID0gTWF0aC5taW4oXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZSxcclxuICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VMaW1pdDsgKytpKSB7XHJcbiAgICAgIGxldCBub2RlID0gTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnBvcCgpO1xyXG4gICAgICBub2RlPy5oYW5kbGVyLm9uTWVzc2FnZShub2RlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VCdXMgfSBmcm9tICcuL21lc3NhZ2VCdXMnO1xyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVByaW9yaXR5IHtcclxuICBOT1JNQUwsXHJcbiAgSElHSCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gIHB1YmxpYyBjb2RlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbnRleHQ6IHVua25vd247XHJcbiAgcHVibGljIHNlbmRlcjogdW5rbm93bjtcclxuICBwdWJsaWMgcHJpb3JpdHk6IE1lc3NhZ2VQcmlvcml0eTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dDogdW5rbm93bixcclxuICAgIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHkgPSBNZXNzYWdlUHJpb3JpdHkuTk9STUFMXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kKGNvZGU6IHN0cmluZywgc2VuZGVyOiB1bmtub3duLCBjb250ZXh0PzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5Lk5PUk1BTCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kUHJpb3JpdHkoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBzZW5kZXI6IHVua25vd24sXHJcbiAgICBjb250ZXh0PzogdW5rbm93blxyXG4gICk6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5LkhJR0gpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLmFkZFN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5zdWJzY3JpYmUoY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucmVtb3ZlU3Vic2NyaXB0aW9uKGNvZGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBc3NldE1hbmFnZXIgfSBmcm9tICcuL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXRMb2FkZXIgaW1wbGVtZW50cyBJQXNzZXRMb2FkZXIge1xyXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWydwbmcnLCAnZ2lmJywgJ2pwZyddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLm9uSW1hZ2VMb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIGltYWdlKTtcclxuICAgIGltYWdlLnNyYyA9IGFzc2V0TmFtZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbWFnZUxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBuZXcgSW1hZ2VBc3NldChhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBBc3NldE1hbmFnZXIub25Bc3NldExvYWRlZChhc3NldCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsnanNvbiddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGFzc2V0TmFtZSk7XHJcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdsb2FkJyxcclxuICAgICAgdGhpcy5vbkpzb25Mb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIHJlcXVlc3QpXHJcbiAgICApO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSnNvbkxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCByZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgY29uc3QgYXNzZXQgPSBuZXcgSnNvbkFzc2V0KGFzc2V0TmFtZSwganNvbik7XHJcbiAgICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgSnNvbkFzc2V0TG9hZGVyIH0gZnJvbSAnLi9qc29uQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCA9XHJcbiAgJ01FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRDo6JztcclxuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlcnM6IElBc3NldExvYWRlcltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlZEFzc2V0czogeyBbbmFtZTogc3RyaW5nXTogSUFzc2V0IH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBJbWFnZUFzc2V0TG9hZGVyKCkpO1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobmV3IEpzb25Bc3NldExvYWRlcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJMb2FkZXIobG9hZGVyOiBJQXNzZXRMb2FkZXIpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKGxvYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uQXNzZXRMb2FkZWQoYXNzZXQ6IElBc3NldCk6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXQubmFtZV0gPSBhc3NldDtcclxuICAgIE1lc3NhZ2Uuc2VuZChNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyBhc3NldC5uYW1lLCB0aGlzLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXROYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgbCBvZiBBc3NldE1hbmFnZXIuX2xvYWRlcnMpIHtcclxuICAgICAgaWYgKGwuc3VwcG9ydGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbiB8fCAnJykgIT09IC0xKSB7XHJcbiAgICAgICAgbC5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBVbmFibGUgdG8gbG9hZCBhc3NldCB3aXRoIGV4dGVuc2lvbiAke2V4dGVuc2lvbn0gYmVjYXVzZSB0aGVyZSBpcyBubyBsb2FkZXIgYXNzb2NpYXRlZCB3aXRoIGl0LmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzQXNzZXRMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgd29ya3NcclxuICAgIHJldHVybiAhIUFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogSUFzc2V0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdKSB7XHJcbiAgICAgIHJldHVybiBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMiwgYjogVmVjdG9yMik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaWZmID0gYS5jbG9uZSgpLnN1YnRyYWN0KGIpO1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChkaWZmLnggKiBkaWZmLnggKyBkaWZmLnkgKiBkaWZmLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKHY6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2Ll94O1xyXG4gICAgdGhpcy5feSA9IHYuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3gsIHRoaXMuX3ldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi54KSB7XHJcbiAgICAgIHRoaXMuX3ggPSBOdW1iZXIoanNvbi54KTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnkpIHtcclxuICAgICAgdGhpcy5feSA9IE51bWJlcihqc29uLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZCh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICB0aGlzLl94ICs9IHYuX3g7XHJcbiAgICB0aGlzLl95ICs9IHYuX3k7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VidHJhY3QodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAtPSB2Ll94O1xyXG4gICAgdGhpcy5feSAtPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG11bHRpcGx5KHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggKj0gdi5feDtcclxuICAgIHRoaXMuX3kgKj0gdi5feTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXZpZGUodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAvPSB2Ll94O1xyXG4gICAgdGhpcy5feSAvPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX3gsIHRoaXMuX3kpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4vKipcclxuICogUmVzcG9uc2libGUgZm9yIHNldHRpbmcgdXAgYSBXZWJHTCByZW5kZXJpbmcgY29udGV4dFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVXRpbGl0aWVzIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBXZWJHTCwgcG90ZW50aWFsbHkgdXNpbmcgdGhlIGNhbnZhcyB3aXRoIGFuIGFzc2lnbmVkIGlkIG1hdGNoaW5nXHJcbiAgICogdGhlIHByb3ZpZGVkIGlmIGl0IGlzIGRlZmluZWQuXHJcbiAgICogQHBhcmFtIGVsZW1lbnRJZCBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cclxuICAgKiBAcmV0dXJucyByZWZlcmVuY2UgdG8gdGhlIEhUTUxDYW52YXNFbGVtZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKGVsZW1lbnRJZD86IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIGlmIChlbGVtZW50SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBpZiAoY2FudmFzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGEgY2FudmFzIGVsZW1lbnQgbmFtZWQgJyArIGVsZW1lbnRJZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgaWYgKGdsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi9nbCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhIEdMQnVmZmVyIGF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUluZm8ge1xyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgbG9jYXRpb246IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSAobnVtYmVyIG9mIGVsZW1lbnRzKSBpbiB0aGlzIGF0dHJpYnV0ZSAoaS5lLiBWZWN0b3IzID0gMylcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIG9mZnNldDogbnVtYmVyID0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBidWZmZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTEJ1ZmZlciB7XHJcbiAgcHJpdmF0ZSBfaGFzQXR0cmlidXRlTG9jYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9lbGVtZW50U2l6ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3N0cmlkZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9idWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICBwcml2YXRlIF90YXJnZXRCdWZmZXJUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGF0YVR5cGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9tb2RlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdHlwZVNpemU6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiBBdHRyaWJ1dGVJbmZvW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBHTCBCdWZmZXIuXHJcbiAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSBkYXRhIHR5cGUgb2YgdGhlIGJ1ZmZlci4gRGVmYXVsdDogZ2wuRkxPQVRcclxuICAgKiBAcGFyYW0gdGFyZ2V0QnVmZmVyVHlwZSBUaGUgYnVmZmVyIHRhcmdldCB0eXBlLiBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIuIERlZmF1bHQ6IGdsLkFSUkFZX0JVRkZFUlxyXG4gICAqIEBwYXJhbSBtb2RlIFRoZSBkcmF3aW5nIG1vZGUgb2YgdGhlIGJ1ZmZlci4gKGkuZS4gZ2wuVFJJQU5HTEVTIG9yIGdsLkxJTkVTKS4gRGVmYXVsdDogZ2wuVFJJQU5HTEVTXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgZGF0YVR5cGU6IG51bWJlciA9IGdsLkZMT0FULFxyXG4gICAgdGFyZ2V0QnVmZmVyVHlwZTogbnVtYmVyID0gZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgbW9kZTogbnVtYmVyID0gZ2wuVFJJQU5HTEVTXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50U2l6ZSA9IDA7XHJcbiAgICB0aGlzLl9kYXRhVHlwZSA9IGRhdGFUeXBlO1xyXG4gICAgdGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9IHRhcmdldEJ1ZmZlclR5cGU7XHJcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgYnl0ZSBzaXplXHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgZ2wuRkxPQVQ6XHJcbiAgICAgIC8vIHBvc2l0aXZlIG9yIG5lZ2F0aXZlXHJcbiAgICAgIGNhc2UgZ2wuSU5UOlxyXG4gICAgICAvLyBvbmx5IHBvc2l0aXZlIGJ1dCB0d2ljZSB0aGUgc2l6ZSBvZiBpbnRcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9JTlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSA0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5CWVRFOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAxO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGRhdGEgdHlwZSAke2RhdGFUeXBlLnRvU3RyaW5nKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2l6ZSBvZiBlbGVtZW50cyAqIG51bWJlciBvZiBieXRlcyBpbiBlYWNoIGVsZW1lbnRcclxuICAgIHRoaXMuX2J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpIGFzIFdlYkdMQnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveXMgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kcyB0aGlzIGJ1ZmZlci5cclxuICAgKiBAcGFyYW0gbm9ybWFsaXplZCBJbmRpY2F0ZXMgaWYgdGhpcyBkYXRhIHNob3VsZCBiZSBub3JtYWxpemVkLiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBiaW5kKG5vcm1hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbikge1xyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgIGl0LmxvY2F0aW9uLFxyXG4gICAgICAgICAgaXQuc2l6ZSxcclxuICAgICAgICAgIHRoaXMuX2RhdGFUeXBlLFxyXG4gICAgICAgICAgbm9ybWFsaXplZCxcclxuICAgICAgICAgIHRoaXMuX3N0cmlkZSxcclxuICAgICAgICAgIGl0Lm9mZnNldCAqIHRoaXMuX3R5cGVTaXplXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpdC5sb2NhdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgcHJvdmlkZWQgaW5mb3JtYXRpb24gdG8gdGhlIGJ1ZmZlclxyXG4gICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiB0byBiZSBhZGRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRBdHRyaWJ1dGVMb2NhdGlvbihpbmZvOiBBdHRyaWJ1dGVJbmZvKTogdm9pZCB7XHJcbiAgICB0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbiA9IHRydWU7XHJcbiAgICBpbmZvLm9mZnNldCA9IHRoaXMuX2VsZW1lbnRTaXplO1xyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKGluZm8pO1xyXG4gICAgdGhpcy5fZWxlbWVudFNpemUgKz0gaW5mby5zaXplO1xyXG4gICAgdGhpcy5fc3RyaWRlID0gdGhpcy5fZWxlbWVudFNpemUgKiB0aGlzLl90eXBlU2l6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGRhdGEgaW4gdGhlIGJ1ZmZlciB3aXRoIHByb3ZpZGVkIGRhdGEuXHJcbiAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gYmUgbG9hZGVkIGluIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNldERhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICB0aGlzLnB1c2hCYWNrRGF0YShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBvdXQgYWxsIGRhdGEgaW4gdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICBwdWJsaWMgY2xlYXJEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGF0YS5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBkYXRhIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwdXNoQmFja0RhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwbG9hZHMgdGhpcyBkYXRhIHRvIHRoZSBHUFVcclxuICAgKi9cclxuICBwdWJsaWMgdXBsb2FkKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGxldCBidWZmZXJEYXRhOiBBcnJheUJ1ZmZlcjtcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYERhdGEgdHlwZSBlcnJvciBpbiBwdXNoQmFja0RhdGEoKSBmb3IgZGF0YXR5cGUgJHt0aGlzLl9kYXRhVHlwZS50b1N0cmluZygpfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdsLmJ1ZmZlckRhdGEodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgYnVmZmVyRGF0YSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9PT0gZ2wuQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdBcnJheXModGhpcy5fbW9kZSwgMCwgdGhpcy5fZGF0YS5sZW5ndGggLyB0aGlzLl9lbGVtZW50U2l6ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0aGlzLl9tb2RlLCB0aGlzLl9kYXRhLmxlbmd0aCwgdGhpcy5fZGF0YVR5cGUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gJy4vbWF0ZXJpYWwnO1xyXG5cclxuY2xhc3MgTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIHtcclxuICBwdWJsaWMgbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgcmVmZXJlbmNlQ291bnQ6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtYXRlcmlhbDogTWF0ZXJpYWwpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21hdGVyaWFsczogeyBbbmFtZTogc3RyaW5nXTogTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJNYXRlcmlhbChtYXRlcmlhbDogTWF0ZXJpYWwpOiB2b2lkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID0gbmV3IE1hdGVyaWFsUmVmZXJlbmNlTm9kZShcclxuICAgICAgICBtYXRlcmlhbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IE1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQrKztcclxuICAgICAgcmV0dXJuIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxSZWZlcmVuY2UgPSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgaWYgKCFtYXRlcmlhbFJlZmVyZW5jZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCByZWxlYXNlIGEgbWF0ZXJpYWwgd2hpY2ggaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQtLTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQgPCAxICYmXHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw/LmRlc3Ryb3koKTtcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuL3ZlY3RvcjInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfejogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgejogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuICAgIHRoaXMuX3ogPSB6O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3o7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHoodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgemVybygpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb25lKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKDEsIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoeCkge1xyXG4gICAgICB0aGlzLl94ID0geDtcclxuICAgIH1cclxuICAgIGlmICh5KSB7XHJcbiAgICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgfVxyXG4gICAgaWYgKHopIHtcclxuICAgICAgdGhpcy5feiA9IHo7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHZlY3RvciBpcyBlcXVhbCB0byB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxyXG4gICAqIEBwYXJhbSB2IFZlY3RvciB0byBjaGVjayBhZ2FpbnN0XHJcbiAgICogQHJldHVybnMgQm9vbGVhbiBiYWFzZWQgb24gZXF1aXZhbGVuY3lcclxuICAgKi9cclxuICBwdWJsaWMgZXF1YWxzKHY6IFZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl94ID09PSB2Ll94ICYmIHRoaXMuX3kgPT09IHYuX3kgJiYgdGhpcy5feiA9PT0gdi5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5feCwgdGhpcy5feSwgdGhpcy5fel07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2ZWN0b3IuX3g7XHJcbiAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgdGhpcy5feiA9IHZlY3Rvci5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMywgYjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaWZmID0gYS5zdWJ0cmFjdChiKTtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoZGlmZi54ICogZGlmZi54ICsgZGlmZi55ICogZGlmZi55ICsgZGlmZi56ICogZGlmZi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLngpIHtcclxuICAgICAgdGhpcy5feCA9IE51bWJlcihqc29uLngpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueSkge1xyXG4gICAgICB0aGlzLl95ID0gTnVtYmVyKGpzb24ueSk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi56KSB7XHJcbiAgICAgIHRoaXMuX3ogPSBOdW1iZXIoanNvbi56KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgdGhpcy5feSArPSB2Ll95O1xyXG4gICAgdGhpcy5feiArPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YnRyYWN0KHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLT0gdi5feDtcclxuICAgIHRoaXMuX3kgLT0gdi5feTtcclxuICAgIHRoaXMuX3ogLT0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseSh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICB0aGlzLl95ICo9IHYuX3k7XHJcbiAgICB0aGlzLl96ICo9IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGl2aWRlKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLz0gdi5feDtcclxuICAgIHRoaXMuX3kgLz0gdi5feTtcclxuICAgIHRoaXMuX3ogLz0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1ZlY3RvcjIoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5feCwgdGhpcy5feSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBkYXRhIGZvciBhIHNpbmdsZSB2ZXJ0ZXhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZXJ0ZXgge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgdGV4Q29vcmRzOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICB4OiBudW1iZXIgPSAwLFxyXG4gICAgeTogbnVtYmVyID0gMCxcclxuICAgIHo6IG51bWJlciA9IDAsXHJcbiAgICB0dTogbnVtYmVyID0gMCxcclxuICAgIHR2OiBudW1iZXIgPSAwXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHRoaXMucG9zaXRpb24ueiA9IHo7XHJcblxyXG4gICAgdGhpcy50ZXhDb29yZHMueCA9IHR1O1xyXG4gICAgdGhpcy50ZXhDb29yZHMueSA9IHR2O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMucG9zaXRpb24udG9BcnJheSgpKTtcclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMudGV4Q29vcmRzLnRvQXJyYXkoKSk7XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbmZvLCBHTEJ1ZmZlciB9IGZyb20gJy4uL2dsL2dsQnVmZmVyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4JztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2J1ZmZlcjogR0xCdWZmZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9tYXRlcmlhbDogTWF0ZXJpYWwgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9tYXRlcmlhbE5hbWU6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX3ZlcnRpY2VzOiBWZXJ0ZXhbXSA9IFtdO1xyXG4gIHByb3RlY3RlZCBfb3JpZ2luOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBtYXRlcmlhbE5hbWU6IHN0cmluZyxcclxuICAgIHdpZHRoOiBudW1iZXIgPSAxMDAsXHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDEwMFxyXG4gICkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5fbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWxOYW1lO1xyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSBNYXRlcmlhbE1hbmFnZXIuZ2V0TWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG9yaWdpbigpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiB0aGlzLl9vcmlnaW47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IG9yaWdpbih2YWx1ZTogVmVjdG9yMykge1xyXG4gICAgdGhpcy5fb3JpZ2luID0gdmFsdWU7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlVmVydGljZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlbGVhc2VNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBHTEJ1ZmZlcigpO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICAvLyBSZW1vdmVkIHJlZmVyZW5jZSB0byBzaGFkZXIsIGJhZCBwcmFjdGljZSB0byBwYXNzIHNoYWRlciBpbmZvIHRvIHNwcml0ZSBvbiBsb2FkXHJcbiAgICAvLyBTdGlsbCBub3QgaWRlYWwgKHJlZmVyZW5jaW5nIGFfbG9jYXRpb24gaW4gdmVydGV4U2hhZGVyU291cmNlIGJ5IGhhcmRjb2RpbmcgMClcclxuICAgIC8vIEVhY2ggdmFyaWFibGUgaW4gc2hhZGVyU291cmNlIGlzIHJlZmVyZW5jZWQgYnkgaW5kZXggaW4gb3JkZXIgb2YgZGVjbGFyYXRpb24gKGUuZy4gYmVjYXVzZSBhX2xvY2F0aW9uIGlzIHRoZSBmaXJzdCB2YXJpYWJsZSBpdCBpcyBpbmRleCAwKVxyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUubG9jYXRpb24gPSAwO1xyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUuc2l6ZSA9IDM7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24ocG9zaXRpb25BdHRyaWJ1dGUpO1xyXG5cclxuICAgIGxldCB0ZXhDb29yZEF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5sb2NhdGlvbiA9IDE7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5zaXplID0gMjtcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbih0ZXhDb29yZEF0dHJpYnV0ZSk7XHJcblxyXG4gICAgdGhpcy5jYWxjdWxhdGVWZXJ0aWNlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBkcmF3KHNoYWRlcjogU2hhZGVyLCBtb2RlbDogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBsZXQgbW9kZWxMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfbW9kZWwnKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxMb2NhdGlvbiwgZmFsc2UsIG1vZGVsLnRvRmxvYXQzMkFycmF5KCkpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3RpbnQnKTtcclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICBnbC51bmlmb3JtNGZ2KGNvbG9yTG9jYXRpb24sIHRoaXMuX21hdGVyaWFsLnRpbnQudG9GbG9hdDMyQXJyYXkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS5hY3RpdmF0ZUFuZEJpbmQoMCk7XHJcbiAgICAgIGNvbnN0IGRpZmZ1c2VMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfZGlmZnVzZScpO1xyXG4gICAgICAvLyBwYXNzIGEgc2luZ2xlIGludGVnZXJcclxuICAgICAgZ2wudW5pZm9ybTFpKGRpZmZ1c2VMb2NhdGlvbiwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuYmluZCgpO1xyXG4gICAgICB0aGlzLl9idWZmZXIuZHJhdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhc3NpZ25lZCBidWZmZXIgZm9yIHNwcml0ZSAnICsgdGhpcy5fbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVmVydGljZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtaW5YID0gLSh0aGlzLl93aWR0aCAqIHRoaXMuX29yaWdpbi54KTtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLl93aWR0aCAqICgxLjAgLSB0aGlzLl9vcmlnaW4ueCk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IC0odGhpcy5fd2lkdGggKiB0aGlzLl9vcmlnaW4ueSk7XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5faGVpZ2h0ICogKDEuMCAtIHRoaXMuX29yaWdpbi55KTtcclxuXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHRoaXMuX3ZlcnRpY2VzID0gW1xyXG4gICAgICAvLyB4LCB5LCB6LCBVOiB0ZXh0dXJlIHgsIFY6IHRleHR1cmUgeVxyXG4gICAgICAvLyB0cmlhbmdsZSAxXHJcbiAgICAgIC8vIHBvaW50IDFcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtaW5ZLCAwLCAwLCAwLCksXHJcbiAgICAgIC8vIHBvaW50IDJcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtYXhZLCAwLCAwLCAxLjAsKSxcclxuICAgICAgLy8gcG9pbnQgM1xyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1heFksIDAsIDEuMCwgMS4wLCksXHJcbiAgICAgIC8vIHRyaWFuZ2xlIDJcclxuICAgICAgLy8gcG9pbnQgNFxyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1heFksIDAsIDEuMCwgMS4wKSxcclxuICAgICAgLy8gcG9pbnQgNVxyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1pblksIDAsIDEuMCwgMCksXHJcbiAgICAgIC8vIHBvaW50IDZcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtaW5ZLCAwLCAwLCAwKSxcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5fdmVydGljZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9idWZmZXI/LnVwbG9hZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyPy51bmJpbmQoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZWNhbGN1bGF0ZVZlcnRpY2VzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbWluWCA9IC0odGhpcy5fd2lkdGggKiB0aGlzLl9vcmlnaW4ueCk7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5fd2lkdGggKiAoMS4wIC0gdGhpcy5fb3JpZ2luLngpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSAtKHRoaXMuX2hlaWdodCAqIHRoaXMuX29yaWdpbi55KTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLl9oZWlnaHQgKiAoMS4wIC0gdGhpcy5fb3JpZ2luLnkpO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzWzBdPy5wb3NpdGlvbi5zZXQobWluWCwgbWluWSk7XHJcbiAgICB0aGlzLl92ZXJ0aWNlc1sxXT8ucG9zaXRpb24uc2V0KG1pblgsIG1heFkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbMl0/LnBvc2l0aW9uLnNldChtYXhYLCBtYXhZKTtcclxuXHJcbiAgICB0aGlzLl92ZXJ0aWNlc1szXT8ucG9zaXRpb24uc2V0KG1heFgsIG1heFkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbNF0/LnBvc2l0aW9uLnNldChtYXhYLCBtaW5ZKTtcclxuICAgIHRoaXMuX3ZlcnRpY2VzWzVdPy5wb3NpdGlvbi5zZXQobWluWCwgbWluWSk7XHJcbiAgICB0aGlzLl9idWZmZXI/LmNsZWFyRGF0YSgpO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgdGhpcy5fYnVmZmVyPy5wdXNoQmFja0RhdGEodi50b0FycmF5KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyPy51cGxvYWQoKTtcclxuICAgIHRoaXMuX2J1ZmZlcj8udW5iaW5kKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmNsYXNzIFVWSW5mbyB7XHJcbiAgcHVibGljIG1pbjogVmVjdG9yMjtcclxuICBwdWJsaWMgbWF4OiBWZWN0b3IyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWluOiBWZWN0b3IyLCBtYXg6IFZlY3RvcjIpIHtcclxuICAgIHRoaXMubWluID0gbWluO1xyXG4gICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGUgZXh0ZW5kcyBTcHJpdGUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX2ZyYW1lSGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZnJhbWVXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZyYW1lQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9mcmFtZVNlcXVlbmNlOiBudW1iZXJbXTtcclxuICAvLyBUT0RPOiBNYWtlIHRoaXMgY29uZmlndXJhYmxlXHJcbiAgcHJpdmF0ZSBfZnJhbWVUaW1lOiBudW1iZXIgPSAxMjE7XHJcbiAgcHJpdmF0ZSBfZnJhbWVVVnM6IFVWSW5mb1tdID0gW107XHJcbiAgcHJpdmF0ZSBfY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRGcmFtZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9hc3NldExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Fzc2V0V2lkdGg6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBfYXNzZXRIZWlnaHQ6IG51bWJlciA9IDI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG1hdGVyaWFsTmFtZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDEwMCxcclxuICAgIGhlaWdodDogbnVtYmVyID0gMTAwLFxyXG4gICAgZnJhbWVXaWR0aDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUhlaWdodDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUNvdW50OiBudW1iZXIgPSAxLFxyXG4gICAgZnJhbWVTZXF1ZW5jZTogbnVtYmVyW10gPSBbXVxyXG4gICkge1xyXG4gICAgc3VwZXIobmFtZSwgbWF0ZXJpYWxOYW1lLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLl9mcmFtZVdpZHRoID0gZnJhbWVXaWR0aDtcclxuICAgIHRoaXMuX2ZyYW1lSGVpZ2h0ID0gZnJhbWVIZWlnaHQ7XHJcbiAgICB0aGlzLl9mcmFtZUNvdW50ID0gZnJhbWVDb3VudDtcclxuICAgIHRoaXMuX2ZyYW1lU2VxdWVuY2UgPSBmcmFtZVNlcXVlbmNlO1xyXG5cclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZU5hbWUsXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1lc3NhZ2UuY29kZSA9PT1cclxuICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgbGV0IGFzc2V0ID0gbWVzc2FnZS5jb250ZXh0IGFzIEltYWdlQXNzZXQ7XHJcbiAgICAgIHRoaXMuX2Fzc2V0SGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLl9hc3NldFdpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVVZzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vIEhhY2sgYXJvdW5kIGZvciBub3QgYmVpbmcgaW5zdGFudGlhdGVkIGJlZm9yZSBvbk1lc3NhZ2UgaXMgc2VudFxyXG4gICAgLy8gUmV2aXNpdFxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsICYmICF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICBsZXQgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQoXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApIGFzIEltYWdlQXNzZXQ7XHJcbiAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9hc3NldEhlaWdodCA9IGFzc2V0LmhlaWdodDtcclxuICAgICAgICB0aGlzLl9hc3NldFdpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVVVnMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX2N1cnJlbnRUaW1lICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudFRpbWUgPiB0aGlzLl9mcmFtZVRpbWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEZyYW1lKys7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gMDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50RnJhbWUgPj0gdGhpcy5fZnJhbWVTZXF1ZW5jZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmcmFtZVVWcyA9IHRoaXMuX2ZyYW1lU2VxdWVuY2VbdGhpcy5fY3VycmVudEZyYW1lXTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbMF0udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4pO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1sxXS50ZXhDb29yZHMuY29weUZyb20oXHJcbiAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluLngsXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4LnlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzJdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4KTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbM10udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1s0XS50ZXhDb29yZHMuY29weUZyb20oXHJcbiAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4LngsXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluLnlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzVdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluKTtcclxuXHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8uY2xlYXJEYXRhKCk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnVwbG9hZCgpO1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVVZzKCk6IHZvaWQge1xyXG4gICAgbGV0IHRvdGFsV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgeVZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mcmFtZUNvdW50OyBpKyspIHtcclxuICAgICAgdG90YWxXaWR0aCA9IGkgKiB0aGlzLl9mcmFtZVdpZHRoO1xyXG4gICAgICBpZiAodG90YWxXaWR0aCA+IHRoaXMuX2Fzc2V0V2lkdGgpIHtcclxuICAgICAgICB5VmFsdWUrKztcclxuICAgICAgICB0b3RhbFdpZHRoID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHUgPSAoaSAqIHRoaXMuX2ZyYW1lV2lkdGgpIC8gdGhpcy5fYXNzZXRXaWR0aDtcclxuICAgICAgbGV0IHYgPSAoeVZhbHVlICogdGhpcy5fZnJhbWVIZWlnaHQpIC8gdGhpcy5fYXNzZXRIZWlnaHQ7XHJcbiAgICAgIGxldCBtaW46IFZlY3RvcjIgPSBuZXcgVmVjdG9yMih1LCB2KTtcclxuXHJcbiAgICAgIGxldCB1TWF4ID0gKGkgKiB0aGlzLl9mcmFtZVdpZHRoICsgdGhpcy5fZnJhbWVXaWR0aCkgLyB0aGlzLl9hc3NldFdpZHRoO1xyXG4gICAgICBsZXQgdk1heCA9XHJcbiAgICAgICAgKHlWYWx1ZSAqIHRoaXMuX2ZyYW1lSGVpZ2h0ICsgdGhpcy5fZnJhbWVIZWlnaHQpIC8gdGhpcy5fYXNzZXRIZWlnaHQ7XHJcbiAgICAgIGxldCBtYXg6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMih1TWF4LCB2TWF4KTtcclxuXHJcbiAgICAgIHRoaXMuX2ZyYW1lVVZzLnB1c2gobmV3IFVWSW5mbyhtaW4sIG1heCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL2NvcmUvd29ybGQvc2ltT2JqZWN0JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gIHByb3RlY3RlZCBfb3duZXI6IFNpbU9iamVjdCB8IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgX2RhdGE6IElDb21wb25lbnREYXRhO1xyXG5cclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUNvbXBvbmVudERhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvd25lcigpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX293bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE93bmVyKG93bmVyOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyID0gb3duZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2NvcmUvZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zcHJpdGUnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9jb3JlL21hdGgvdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50RGF0YSBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIG1hdGVyaWFsTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIG9yaWdpbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLm1hdGVyaWFsTmFtZSkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsTmFtZSA9IFN0cmluZyhqc29uLm1hdGVyaWFsTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5vcmlnaW4pIHtcclxuICAgICAgdGhpcy5vcmlnaW4uc2V0RnJvbUpzb24oanNvbi5vcmlnaW4pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3Nwcml0ZSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGxldCBkYXRhID0gbmV3IFNwcml0ZUNvbXBvbmVudERhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGVDb21wb25lbnQoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBTcHJpdGU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBTcHJpdGVDb21wb25lbnREYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKGRhdGEubmFtZSwgZGF0YS5tYXRlcmlhbE5hbWUpO1xyXG5cclxuICAgIGlmICghZGF0YS5vcmlnaW4uZXF1YWxzKFZlY3RvcjMuemVybykpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLm9yaWdpbi5jb3B5RnJvbShkYXRhLm9yaWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZSB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3MvYW5pbWF0ZWRTcHJpdGUnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudERhdGEgfSBmcm9tICcuL3Nwcml0ZUNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgZXh0ZW5kcyBTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgaW1wbGVtZW50cyBJQ29tcG9uZW50RGF0YVxyXG57XHJcbiAgcHVibGljIGZyYW1lV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZVNlcXVlbmNlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBzdXBlci5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZVdpZHRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZVdpZHRoIHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVXaWR0aCA9IE51bWJlcihqc29uLmZyYW1lV2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUhlaWdodCB0byBiZSBkZWZpbmVkJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcmFtZUhlaWdodCA9IE51bWJlcihqc29uLmZyYW1lSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZUNvdW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUNvdW50IHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IE51bWJlcihqc29uLmZyYW1lQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lU2VxdWVuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0FuaW1hdGVkIHNwcml0ZSBkYXRhIHJlcXVpcmVzIGZyYW1lU2VxdWVuY2UgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVTZXF1ZW5jZSA9IGpzb24uZnJhbWVTZXF1ZW5jZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ2FuaW1hdGVkU3ByaXRlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zcHJpdGU6IEFuaW1hdGVkU3ByaXRlO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgQW5pbWF0ZWRTcHJpdGUoXHJcbiAgICAgIGRhdGEubmFtZSxcclxuICAgICAgZGF0YS5tYXRlcmlhbE5hbWUsXHJcbiAgICAgIGRhdGEuZnJhbWVXaWR0aCxcclxuICAgICAgZGF0YS5mcmFtZUhlaWdodCxcclxuICAgICAgZGF0YS5mcmFtZVdpZHRoLFxyXG4gICAgICBkYXRhLmZyYW1lSGVpZ2h0LFxyXG4gICAgICBkYXRhLmZyYW1lQ291bnQsXHJcbiAgICAgIGRhdGEuZnJhbWVTZXF1ZW5jZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUudXBkYXRlKHRpbWUpO1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUuZHJhdyhzaGFkZXIsIHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVuZGVyKHNoYWRlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBJU2hhcGUyRCB9IGZyb20gJy4vSVNoYXBlMkQnO1xyXG5pbXBvcnQgeyBSZWN0YW5nbGUyRCB9IGZyb20gJy4vcmVjdGFuZ2xlMmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZTJEIGltcGxlbWVudHMgSVNoYXBlMkQge1xyXG4gIHB1YmxpYyBvcmlnaW46IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyByYWRpdXM6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBvZmZzZXQoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIHRoaXMub3JpZ2luLngsXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIHRoaXMub3JpZ2luLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ub3JpZ2luKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnNldEZyb21Kc29uKGpzb24ub3JpZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5yYWRpdXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpcmNsZTJEIHJlcXVpcmVzIHJhZGl1cyB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yYWRpdXMgPSBqc29uLnJhZGl1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnRlcnNlY3RzKG90aGVyU2hhcGU6IElTaGFwZTJEKTogYm9vbGVhbiB7XHJcbiAgICBpZiAob3RoZXJTaGFwZSBpbnN0YW5jZW9mIENpcmNsZTJEICYmIHRoaXMucmFkaXVzICYmIG90aGVyU2hhcGUucmFkaXVzKSB7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoXHJcbiAgICAgICAgVmVjdG9yMi5kaXN0YW5jZShvdGhlclNoYXBlLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByYWRpdXNMZW5ndGhzID0gdGhpcy5yYWRpdXMgKyBvdGhlclNoYXBlLnJhZGl1cztcclxuICAgICAgaWYgKGRpc3RhbmNlIDw9IHJhZGl1c0xlbmd0aHMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdGhlclNoYXBlIGluc3RhbmNlb2YgUmVjdGFuZ2xlMkQpIHtcclxuICAgICAgaWYgKCFvdGhlclNoYXBlLndpZHRoIHx8ICFvdGhlclNoYXBlLmhlaWdodCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvdGhlclNoYXBlfSByZXF1aXJlcyBhIGhlaWdodCBhbmQgd2lkdGhgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXN9IHJlcXVyZXMgYSByYWRpdXNgKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZGVsdGFYID1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCBvdGhlclNoYXBlLnBvc2l0aW9uLnggKyBvdGhlclNoYXBlLndpZHRoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGxldCBkZWx0YVkgPVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIG90aGVyU2hhcGUucG9zaXRpb24ueSArIG90aGVyU2hhcGUuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICAgIGlmIChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkgPCB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb2ludEluU2hhcGUocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFic0Rpc3RhbmNlID0gTWF0aC5hYnMoVmVjdG9yMi5kaXN0YW5jZSh0aGlzLnBvc2l0aW9uLCBwb2ludCkpO1xyXG4gICAgaWYgKHRoaXMucmFkaXVzICYmIGFic0Rpc3RhbmNlIDw9IHRoaXMucmFkaXVzKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IENpcmNsZTJEIH0gZnJvbSAnLi9jaXJjbGUyRCc7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi9JU2hhcGUyRCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlMkQgaW1wbGVtZW50cyBJU2hhcGUyRCB7XHJcbiAgcHVibGljIG9yaWdpbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAuNSwgMC41KTtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcblxyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBvZmZzZXQoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAtKHRoaXMud2lkdGggKiB0aGlzLm9yaWdpbi54KSxcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIC0odGhpcy5oZWlnaHQgKiB0aGlzLm9yaWdpbi55KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5vcmlnaW4pIHtcclxuICAgICAgdGhpcy5vcmlnaW4uc2V0RnJvbUpzb24oanNvbi5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLndpZHRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWN0YW5nbGUyZCByZXF1aXJlcyB3aWR0aCB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9IE51bWJlcihqc29uLndpZHRoKTtcclxuXHJcbiAgICBpZiAoanNvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlY3RhbmdsZTJkIHJlcXVpcmVzIGhlaWdodCB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBOdW1iZXIoanNvbi5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGludGVyc2VjdHMob3RoZXJTaGFwZTogSVNoYXBlMkQpOiBib29sZWFuIHtcclxuICAgIGlmIChcclxuICAgICAgb3RoZXJTaGFwZSBpbnN0YW5jZW9mIFJlY3RhbmdsZTJEICYmXHJcbiAgICAgIG90aGVyU2hhcGUud2lkdGggJiZcclxuICAgICAgb3RoZXJTaGFwZS5oZWlnaHRcclxuICAgICkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUob3RoZXJTaGFwZS5wb3NpdGlvbikgfHxcclxuICAgICAgICB0aGlzLnBvaW50SW5TaGFwZShcclxuICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnggKyBvdGhlclNoYXBlLndpZHRoLFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnlcclxuICAgICAgICAgIClcclxuICAgICAgICApIHx8XHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUoXHJcbiAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54ICsgb3RoZXJTaGFwZS53aWR0aCxcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi55ICsgb3RoZXJTaGFwZS5oZWlnaHRcclxuICAgICAgICAgIClcclxuICAgICAgICApIHx8XHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUoXHJcbiAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnkgKyBvdGhlclNoYXBlLmhlaWdodFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG90aGVyU2hhcGUgaW5zdGFuY2VvZiBDaXJjbGUyRCAmJlxyXG4gICAgICBvdGhlclNoYXBlLnJhZGl1cyAmJlxyXG4gICAgICB0aGlzLndpZHRoICYmXHJcbiAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgY29uc3QgZGVsdGFYID1cclxuICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnggLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgTWF0aC5taW4ob3RoZXJTaGFwZS5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkZWx0YVkgPVxyXG4gICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueSAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBNYXRoLm1pbihvdGhlclNoYXBlLnBvc2l0aW9uLnksIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZIDxcclxuICAgICAgICBvdGhlclNoYXBlLnJhZGl1cyAqIG90aGVyU2hhcGUucmFkaXVzXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvaW50SW5TaGFwZShwb2ludDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMud2lkdGggJiYgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBvaW50LnggPj0gdGhpcy5wb3NpdGlvbi54ICYmXHJcbiAgICAgICAgcG9pbnQueCA8PSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBvaW50LnkgPj0gdGhpcy5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICBwb2ludC55IDw9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9JU2hhcGUyRCc7XHJcbmltcG9ydCB7IFJlY3RhbmdsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9yZWN0YW5nbGUyZCc7XHJcbmltcG9ydCB7IENpcmNsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9jaXJjbGUyRCc7XHJcbmltcG9ydCB7IENvbGxpc2lvbk1hbmFnZXIgfSBmcm9tICcuLi9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQ29tcG9uZW50RGF0YSBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNoYXBlOiBJU2hhcGUyRCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnNoYXBlPy50eXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoU3RyaW5nKGpzb24uc2hhcGUudHlwZSkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XHJcbiAgICAgICAgICB0aGlzLnNoYXBlID0gbmV3IFJlY3RhbmdsZTJEKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgdGhpcy5zaGFwZSA9IG5ldyBDaXJjbGUyRCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgc2hhcGUgdHlwZTogJyArIGpzb24uc2hhcGUudHlwZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2hhcGUuc2V0RnJvbUpzb24oanNvbi5zaGFwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0NvbGxpc2lvbkNvbXBvbmVudERhdGEgcmVxdWlyZXMgXCJzaGFwZVwiIGFuZCBcInNoYXBlLnR5cGVcIiB0byBiZSBwcmVzZW50LidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25Db21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdjb2xsaXNpb24nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBDb2xsaXNpb25Db21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sbGlzaW9uQ29tcG9uZW50KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3NoYXBlOiBJU2hhcGUyRDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IENvbGxpc2lvbkNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIGlmICghZGF0YS5zaGFwZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgaXMgbWlzc2luZyBcInNoYXBlXCIgcHJvcGVydHk6Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zaGFwZSA9IGRhdGEuc2hhcGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNoYXBlKCk6IElTaGFwZTJEIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGFwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG5cclxuICAgIGlmICh0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9zaGFwZS5wb3NpdGlvbi5jb3B5RnJvbShcclxuICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24udG9WZWN0b3IyKCkuYWRkKHRoaXMuX3NoYXBlLm9mZnNldClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWxsIHRoZSBjb2xsaXNpb24gbWFuYWdlciB0aGF0IHdlIGV4aXN0LlxyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5yZWdpc3RlckNvbGxpc2lvbkNvbXBvbmVudCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24uY29weUZyb20oXHJcbiAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnRvVmVjdG9yMigpLmFkZCh0aGlzLl9zaGFwZS5vZmZzZXQpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgLy9pZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAvL3RoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIC8vfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ29sbGlzaW9uRW50cnkob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uQ29sbGlzaW9uRW50cnk6JywgdGhpcywgb3RoZXIpO1xyXG4gIH1cclxuICBwdWJsaWMgb25Db2xsaXNpb25VcGRhdGUob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uQ29sbGlzaW9uVXBkYXRlJywgdGhpcywgb3RoZXIpO1xyXG4gIH1cclxuICBwdWJsaWMgb25Db2xsaXNpb25FeGl0KG90aGVyOiBDb2xsaXNpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkNvbGxpc2lvbkV4aXQnLCB0aGlzLCBvdGhlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4vSUNvbXBvbmVudEJ1aWxkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkQnVpbGRlcnM6IHsgW3R5cGU6IHN0cmluZ106IElDb21wb25lbnRCdWlsZGVyIH0gPVxyXG4gICAge307XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJCdWlsZGVyKGJ1aWxkZXI6IElDb21wb25lbnRCdWlsZGVyKTogdm9pZCB7XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RDb21wb25lbnQoanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBpZiAoanNvbi50eXBlKSB7XHJcbiAgICAgIGlmIChDb21wb25lbnRNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tcclxuICAgICAgICAgIFN0cmluZyhqc29uLnR5cGUpXHJcbiAgICAgICAgXS5idWlsZEZyb21Kc29uKGpzb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICdDb21wb25lbnQgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTb3VuZEVmZmVjdCB7XHJcbiAgcHJpdmF0ZSBfcGxheWVyOiBIVE1MQXVkaW9FbGVtZW50O1xyXG5cclxuICBwdWJsaWMgYXNzZXRQYXRoOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihhc3NldFBhdGg6IHN0cmluZywgbG9vcDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcGxheWVyID0gbmV3IEF1ZGlvKGFzc2V0UGF0aCk7XHJcbiAgICB0aGlzLl9wbGF5ZXIudm9sdW1lID0gMC4wNTtcclxuICAgIHRoaXMuYXNzZXRQYXRoID0gYXNzZXRQYXRoO1xyXG4gICAgdGhpcy5fcGxheWVyLmxvb3AgPSBsb29wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsb29wKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYXllci5sb29wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9wbGF5ZXIubG9vcCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9wbGF5ZXIgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNQYXVzZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyLnBhdXNlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTtcclxuICAgIHRoaXMuX3BsYXllci5jdXJyZW50VGltZSA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfc291bmRFZmZlY3RzOiB7IFtuYW1lOiBzdHJpbmddOiBTb3VuZEVmZmVjdCB9ID0ge307XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFNvdW5kRmlsZShcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGFzc2V0UGF0aDogc3RyaW5nLFxyXG4gICAgbG9vcDogYm9vbGVhblxyXG4gICk6IHZvaWQge1xyXG4gICAgQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0gPSBuZXcgU291bmRFZmZlY3QoYXNzZXRQYXRoLCBsb29wKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGxheVNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcFNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGF1c2VTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSkge1xyXG4gICAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXS5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNvdW5kID0gQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV07XHJcbiAgICBpZiAoc291bmQpIHtcclxuICAgICAgc291bmQuaXNQYXVzZWQoKSA/IHNvdW5kLnBsYXkoKSA6IHNvdW5kLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQucGF1c2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdG9wQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfcmVnaXN0ZXJlZEJ1aWxkZXJzOiB7IFt0eXBlOiBzdHJpbmddOiBJQmVoYXZpb3JCdWlsZGVyIH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUJlaGF2aW9yQnVpbGRlcik6IHZvaWQge1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RCZWhhdmlvcihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgaWYgKGpzb24udHlwZSkge1xyXG4gICAgICBpZiAoQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIEJlaGF2aW9yTWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ0JlaGF2aW9yIG1hbmFnZXIgZXJyb3I6IHR5cGUgaXMgbWlzc2luZyBvciBidWlsZGVyIGlzIG5vdCByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUnXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZW51bSBLZXlzIHtcclxuICBMRUZUID0gMzcsXHJcbiAgVVAgPSAzOCxcclxuICBSSUdIVCA9IDM5LFxyXG4gIERPV04gPSA0MCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlQ29udGV4dCB7XHJcbiAgcHVibGljIGxlZnREb3duOiBib29sZWFuO1xyXG4gIHB1YmxpYyByaWdodERvd246IGJvb2xlYW47XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobGVmdERvd246IGJvb2xlYW4sIHJpZ2h0RG93bjogYm9vbGVhbiwgcG9zaXRpb246IFZlY3RvcjIpIHtcclxuICAgIHRoaXMubGVmdERvd24gPSBsZWZ0RG93bjtcclxuICAgIHRoaXMucmlnaHREb3duID0gcmlnaHREb3duO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2tleXM6IGJvb2xlYW5bXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIF9wcmV2aW91c01vdXNlWDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9wcmV2aW91c01vdXNlWTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9tb3VzZVg6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfbW91c2VZOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xlZnREb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JpZ2h0RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgIElucHV0TWFuYWdlci5fa2V5c1tpXSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgSW5wdXRNYW5hZ2VyLm9uS2V5RG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBJbnB1dE1hbmFnZXIub25LZXlVcCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgSW5wdXRNYW5hZ2VyLm9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBJbnB1dE1hbmFnZXIub25Nb3VzZURvd24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBJbnB1dE1hbmFnZXIub25Nb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNLZXlEb3duKGtleTogS2V5cyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIElucHV0TWFuYWdlci5fa2V5c1trZXldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNb3VzZVBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX21vdXNlWCwgdGhpcy5fbW91c2VZKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgIGlmIChldmVudC5rZXlDb2RlICE9PSAxNiAmJiBldmVudC5rZXlDb2RlICE9PSAxNyAmJiBldmVudC5rZXlDb2RlICE9PSA3Mykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSAhPT0gMTYgJiYgZXZlbnQua2V5Q29kZSAhPT0gMTcgJiYgZXZlbnQua2V5Q29kZSAhPT0gNzMpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWCA9IElucHV0TWFuYWdlci5fbW91c2VYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWSA9IElucHV0TWFuYWdlci5fbW91c2VZO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVggPSBldmVudC5jbGllbnRYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVkgPSBldmVudC5jbGllbnRZO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgTWVzc2FnZS5zZW5kKFxyXG4gICAgICAnTU9VU0VfRE9XTicsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9yaWdodERvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBNZXNzYWdlLnNlbmQoXHJcbiAgICAgICdNT1VTRV9VUCcsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL3dvcmxkL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUJlaGF2aW9yIGltcGxlbWVudHMgSUJlaGF2aW9yIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX2RhdGE6IElCZWhhdmlvckRhdGE7XHJcbiAgcHJvdGVjdGVkIF9vd25lcjogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUJlaGF2aW9yRGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLl9kYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgYXBwbHkodXNlckRhdGE6IGFueSk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIsIEtleXMgfSBmcm9tICcuLi9pbnB1dC9pbnB1dE1hbmFnZXInO1xyXG5pbXBvcnQgeyBCYXNlQmVoYXZpb3IgfSBmcm9tICcuL2Jhc2VCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5zcGVlZCkge1xyXG4gICAgICB0aGlzLnNwZWVkID0gTnVtYmVyKGpzb24uc3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAna2V5Ym9hcmRNb3ZlbWVudCc7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuTEVGVCkgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLlJJR0hUKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuVVApICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5ET1dOKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFqc29uLm5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbi5zZXRGcm9tSnNvbihqc29uLnJvdGF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdyb3RhdGlvbic7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBSb3RhdGlvbkJlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgUm90YXRpb25CZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwcml2YXRlIF9yb3RhdGlvbjogVmVjdG9yMztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFJvdGF0aW9uQmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IGRhdGEucm90YXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXI/LnRyYW5zZm9ybS5yb3RhdGlvbi5hZGQodGhpcy5fcm90YXRpb24pO1xyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2dsJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgV2ViR0wgc2hhZGVyLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNoYWRlciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9wcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogeyBbbmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICBwcml2YXRlIF91bmlmb3JtczogeyBbbmFtZTogc3RyaW5nXTogV2ViR0xVbmlmb3JtTG9jYXRpb24gfSA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IHNoYWRlci5cclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgdmVydGV4IHNoYWRlci5cclxuICAgKiBAcGFyYW0gZnJhZ21lbnRTb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgdXNlKCk6IHZvaWQge1xyXG4gICAgZ2wudXNlUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGxvY2F0aW9uIG9mIGFuIGF0dHJpYnV0ZSB3aXRoIHRoZSBwcm92aWRlZCBuYW1lXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB0byByZXRyaWV2ZVxyXG4gICAqIEByZXR1cm5zIEFuIGF0dHJpYnV0ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRBdHRyaWJ1dGVMb2NhdGlvbihuYW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuX2F0dHJpYnV0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFVuYWJsZSB0byBmaW5kIGF0dHJpYnV0ZSBuYW1lICR7bmFtZX0gaW4gc2hhZGVyICR7dGhpcy5fbmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHtcclxuICAgIGlmICh0aGlzLl91bmlmb3Jtc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgdW5pZm9ybSBuYW1lICR7bmFtZX0gaW4gc2hhZGVyICR7dGhpcy5fbmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3VuaWZvcm1zW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGxvYWQodmVydGV4U291cmNlOiBzdHJpbmcsIGZyYWdtZW50U291cmNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmxvYWRTaGFkZXIodmVydGV4U291cmNlLCBnbC5WRVJURVhfU0hBREVSKTtcclxuICAgIGxldCBmcmFnbWVudFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcihmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgdGhpcy5kZXRlY3RBdHRyaWJ1dGVzKCk7XHJcbiAgICB0aGlzLmRldGVjdFVuaWZvcm1zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRTaGFkZXIoc291cmNlOiBzdHJpbmcsIHNoYWRlclR5cGU6IG51bWJlcik6IFdlYkdMU2hhZGVyIHtcclxuICAgIGxldCBzaGFkZXI6IFdlYkdMU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpIGFzIFdlYkdMU2hhZGVyO1xyXG5cclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICBsZXQgZXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBjb21waWxpbmcgc2hhZGVyOiAnICsgdGhpcy5fbmFtZSArICc6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hhZGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcm9ncmFtKFxyXG4gICAgdmVydGV4U2hhZGVyOiBXZWJHTFNoYWRlcixcclxuICAgIGZyYWdtZW50U2hhZGVyOiBXZWJHTFNoYWRlclxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5fcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKSBhcyBXZWJHTFByb2dyYW07XHJcblxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMuX3Byb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5fcHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG5cclxuICAgIGNvbnN0IGVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5fcHJvZ3JhbSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJyb3IgbGlua2luZyBzaGFkZXIgJyArIHRoaXMuX25hbWUgKyAnOiAnICsgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RBdHRyaWJ1dGVzKCk6IHZvaWQge1xyXG4gICAgLy8gZ2l2ZXMgYWxsIGF0dHJpYnV0ZXMgaW4gdGhlIHNoYWRlclxyXG4gICAgY29uc3QgYXR0cmlidXRlQ291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKFxyXG4gICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICBnbC5BQ1RJVkVfQVRUUklCVVRFU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgYXR0cmlidXRlSW5mbzogV2ViR0xBY3RpdmVJbmZvID0gZ2wuZ2V0QWN0aXZlQXR0cmliKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCFhdHRyaWJ1dGVJbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJpYnV0ZUluZm8ubmFtZV0gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGF0dHJpYnV0ZUluZm8ubmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RVbmlmb3JtcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVuaWZvcm1Db3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9VTklGT1JNU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1Db3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHVuaWZvcm1JbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCF1bmlmb3JtSW5mbykge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQb3B1bGF0ZXMgX2F0dHJpYnVlcyB3aXRoIGVhY2ggYXR0cmlidXRlIGFzIGFzIHRoZSB2YWx1ZSBhbmQgdGhlIGF0dHJpYnV0ZSBuYW1lIGFzIHRoZSBrZXlcclxuICAgICAgdGhpcy5fdW5pZm9ybXNbdW5pZm9ybUluZm8ubmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICB1bmlmb3JtSW5mby5uYW1lXHJcbiAgICAgICkgYXMgV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL3NoYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWNTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdiYXNpYycpO1xyXG5cclxuICAgIHRoaXMubG9hZCh0aGlzLmdldFZlcnRleFNvdXJjZSgpLCB0aGlzLmdldEZyYWdtZW50U291cmNlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWZXJ0ZXhTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjMyBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuXHJcbiAgICB1bmlmb3JtIG1hdDQgdV9wcm9qZWN0aW9uO1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVfbW9kZWw7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcblxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICBnbF9Qb3NpdGlvbiA9IHVfcHJvamVjdGlvbiAqIHVfbW9kZWwgKiB2ZWM0KGFfcG9zaXRpb24sIDEuMCk7XHJcbiAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RnJhZ21lbnRTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHJcbiAgICB1bmlmb3JtIHZlYzQgdV90aW50O1xyXG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdV9kaWZmdXNlO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHVfdGludCAqIHRleHR1cmUyRCh1X2RpZmZ1c2UsIHZfdGV4Q29vcmQpO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICBwcml2YXRlIF9yOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2I6IG51bWJlcjtcclxuICBwcml2YXRlIF9hOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHI6IG51bWJlciA9IDI1NSxcclxuICAgIGc6IG51bWJlciA9IDI1NSxcclxuICAgIGI6IG51bWJlciA9IDI1NSxcclxuICAgIGE6IG51bWJlciA9IDI1NVxyXG4gICkge1xyXG4gICAgdGhpcy5fciA9IHI7XHJcbiAgICB0aGlzLl9nID0gZztcclxuICAgIHRoaXMuX2IgPSBiO1xyXG4gICAgdGhpcy5fYSA9IGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ0Zsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZyAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBnKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2cgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGJGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2IgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgYih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9iID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGEoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGEodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0QXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl9yIC8gMjU1LjAsIHRoaXMuX2cgLyAyNTUuMCwgdGhpcy5fYiAvIDI1NS4wLCB0aGlzLl9hIC8gMjU1LjBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvRmxvYXRBcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2hpdGUoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBibGFjaygpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDI1NSwgMCwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ3JlZW4oKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAyNTUsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJsdWUoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAyNTUsIDI1NSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgZ2wgfSBmcm9tICcuLi9nbC9nbCc7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5jb25zdCBMRVZFTDogbnVtYmVyID0gMDtcclxuY29uc3QgQk9SREVSOiBudW1iZXIgPSAwO1xyXG5jb25zdCBURU1QX0lNQUdFX0RBVEE6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMjU1XSk7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2hhbmRsZTogV2ViR0xUZXh0dXJlO1xyXG4gIHByaXZhdGUgX2lzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciA9IDEsIGhlaWdodDogbnVtYmVyID0gMSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSBhcyBXZWJHTFRleHR1cmU7XHJcblxyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbmFtZSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5iaW5kKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaWduYXR1cmUgaXMgZm9yIGxvYWRpbmcgcmF3IGRhdGEgaW50byBhIHRleHR1cmVcclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgIExFVkVMLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICAxLFxyXG4gICAgICAxLFxyXG4gICAgICBCT1JERVIsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIFRFTVBfSU1BR0VfREFUQVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXRBc3NldCh0aGlzLl9uYW1lKSBhcyBJbWFnZUFzc2V0O1xyXG4gICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgIHRoaXMubG9hZFRleHR1cmVGcm9tQXNzZXQoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWFrZXMgYSBjYWxsIHRvIHdlYmdsIGFuZCB0ZWxscyBpdCB3aGF0IGNoYW5uZWwgdG8gYWN0aXZhdGUgb25cclxuICAgKiAoMzIgdG90YWwpXHJcbiAgICogQHBhcmFtIHRleHR1cmVVbml0IHRleHR1cmUgdG8gYWN0aXZhdGUgb25cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZhdGVBbmRCaW5kKHRleHR1cmVVbml0OiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4dHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChtZXNzYWdlLmNvbnRleHQgYXMgSW1hZ2VBc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0OiBJbWFnZUFzc2V0KTogdm9pZCB7XHJcbiAgICB0aGlzLl93aWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIGFuIGltYWdlIGJpdG1hcHBlclxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIGFzc2V0LmRhdGFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNQb3dlck9mMigpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGEgbWlwIG1hcCBhbmQgY2xhbXAgd3JhcHBpbmcgdG8gZWRnZS5cclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgIH1cclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQb3dlck9mMigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX3dpZHRoKSAmJiB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl9oZWlnaHQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbHVlUG93ZXJPZjIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcblxyXG5jbGFzcyBUZXh0dXJlUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIHRleHR1cmU6IFRleHR1cmU7XHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3RleHR1cmVzOiB7IFtuYW1lOiBzdHJpbmddOiBUZXh0dXJlUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IFRleHR1cmUge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0ZXh0dXJlTmFtZSk7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSBuZXcgVGV4dHVyZVJlZmVyZW5jZU5vZGUodGV4dHVyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlVGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBBIHRleHR1cmUgbmFtZWQgJHt0ZXh0dXJlTmFtZX0gZG9lcyBub3QgZXhpc3QgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmVsZWFzZWQuYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEpIHtcclxuICAgICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcbmltcG9ydCB7IFRleHR1cmVNYW5hZ2VyIH0gZnJvbSAnLi90ZXh0dXJlTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IFRleHR1cmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdGludDogQ29sb3I7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nLCB0aW50OiBDb2xvcikge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSBkaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgICB0aGlzLl90aW50ID0gdGludDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5fZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGludCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlmZnVzZVRleHR1cmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeDR4NCB7XHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIElkZW50aXR5IG1hdHJpeCAoZGVmYXVsdCBtYXRyaXgpXHJcbiAgICB0aGlzLl9kYXRhID0gW1xyXG4gICAgICAvLyByb3cgMVxyXG4gICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAvLyByb3cgMlxyXG4gICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAvLyByb3cgM1xyXG4gICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAvLyByb3cgNFxyXG4gICAgICAwLCAwLCAwLCAxLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaWRlbnRpdHkoKTogTWF0cml4NHg0IHtcclxuICAgIHJldHVybiBuZXcgTWF0cml4NHg0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcnRob2dyYXBoaWMgbWF0cml4XHJcbiAgICogTm8gcGVyc3BlY3RpdmUsIHJlbmRlcnMgc29tZXRoaW5nIGFzIGlmIGl0IGlzIGZsYXQgaW4gc3BhY2VcclxuICAgKiBAcGFyYW0gbGVmdCBwb3NpdGlvbiBmcm9tIGxlZnQgb2Ygc2NyZWVuIChhbG1vc3QgYWx3YXlzIDApXHJcbiAgICogQHBhcmFtIHJpZ2h0IGRpc3RhbmNlIHRvIHJpZ2h0IHNpZGUgb2Ygc2NyZWVuIGZyb20gdGhlIGxlZnQgKGUuZy4gMTA4MHAgd291bGQgYmUgMTkyMClcclxuICAgKiBAcGFyYW0gYm90dG9tIHBvc2l0aW9uIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChhbG1vc3QgYWx3YXlzIDApIHdlYmdsIHN0YXJ0cyBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblxyXG4gICAqIEBwYXJhbSB0b3AgcG9zaXRpb24gZnJvbSBib3R0b20gb2Ygc2NyZWVuIHRvIHRoZSB0b3AgKGUuZy4gMTA4MHAgd291bGQgYmUgMTA4MClcclxuICAgKiBAcGFyYW0gbmVhckNsaXAgc29tZXRoaW5nIG5lZ2F0aXZlICh0byBwcmV2ZW50IGNsaXBwaW5nIGluIGZyb250KVxyXG4gICAqIEBwYXJhbSBmYXJDbGlwIGFyYml0cmFyeSBudW1iZXJcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyhcclxuICAgIGxlZnQ6IG51bWJlcixcclxuICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b206IG51bWJlcixcclxuICAgIHRvcDogbnVtYmVyLFxyXG4gICAgbmVhckNsaXA6IG51bWJlcixcclxuICAgIGZhckNsaXA6IG51bWJlclxyXG4gICk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBjb25zdCBscjogbnVtYmVyID0gMS4wIC8gKGxlZnQgLSByaWdodCk7XHJcbiAgICBjb25zdCBidDogbnVtYmVyID0gMS4wIC8gKGJvdHRvbSAtIHRvcCk7XHJcbiAgICBjb25zdCBuZjogbnVtYmVyID0gMS4wIC8gKG5lYXJDbGlwIC0gZmFyQ2xpcCk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IC0yLjAgKiBscjtcclxuICAgIG0uX2RhdGFbNV0gPSAtMi4wICogYnQ7XHJcbiAgICBtLl9kYXRhWzEwXSA9IDIuMCAqIG5mO1xyXG5cclxuICAgIG0uX2RhdGFbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcclxuICAgIG0uX2RhdGFbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcclxuICAgIG0uX2RhdGFbMTRdID0gKGZhckNsaXAgKyBuZWFyQ2xpcCkgKiBuZjtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbWF0cml4IHRoYXQgaG9sZHMgZGF0YSB0aGF0IHJlcHJlc2VudHMgbW92ZW1lbnQgb2YgYW4gb2JqZWN0XHJcbiAgICogdGhyb3VnaCBzcGFjZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHRyYW5zbGF0aW9uKHBvc2l0aW9uOiBWZWN0b3IzKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIC8vIGVkaXRpbmcgMXN0IDMgbnVtYmVycyBpbiBsYXN0IHJvdyBvZiBtYXRyaXg0XHJcbiAgICBtLl9kYXRhWzEyXSA9IHBvc2l0aW9uLng7XHJcbiAgICBtLl9kYXRhWzEzXSA9IHBvc2l0aW9uLnk7XHJcbiAgICBtLl9kYXRhWzE0XSA9IHBvc2l0aW9uLno7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgcm90YXRpb24gbWF0cml4IG9uIHRoZSBYIGF4aXMgZnJvbSB0aGUgcHJvdmlkZWQgYW5nbGUgaW4gcmFkaWFucy5cclxuICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnMuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblgoYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgIG0uX2RhdGFbNV0gPSBjO1xyXG4gICAgbS5fZGF0YVs2XSA9IHM7XHJcbiAgICBtLl9kYXRhWzldID0gLXM7XHJcbiAgICBtLl9kYXRhWzEwXSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWShhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGM7XHJcbiAgICBtLl9kYXRhWzJdID0gLXM7XHJcbiAgICBtLl9kYXRhWzhdID0gcztcclxuICAgIG0uX2RhdGFbMTBdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25aKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgLy8gcmFkaWFucyBhcmUgdXNlZCBpbiBhbG1vc3QgYWxsIG1hdGggbGlicmFyaWVzIGJlY2F1c2UgaXQgaXMgbW9yZSBwZXJmb3JtYW50XHJcbiAgICAvLyB1bmRlciB0aGUgaG9vZFxyXG5cclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGM7XHJcbiAgICBtLl9kYXRhWzFdID0gcztcclxuICAgIG0uX2RhdGFbNF0gPSAtcztcclxuICAgIG0uX2RhdGFbNV0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblhZWihcclxuICAgIHhSYWRpYW5zOiBudW1iZXIsXHJcbiAgICB5UmFkaWFuczogbnVtYmVyLFxyXG4gICAgelJhZGlhbnM6IG51bWJlclxyXG4gICk6IE1hdHJpeDR4NCB7XHJcbiAgICBjb25zdCByeCA9IE1hdHJpeDR4NC5yb3RhdGlvblgoeFJhZGlhbnMpO1xyXG4gICAgY29uc3QgcnkgPSBNYXRyaXg0eDQucm90YXRpb25ZKHlSYWRpYW5zKTtcclxuICAgIGNvbnN0IHJ6ID0gTWF0cml4NHg0LnJvdGF0aW9uWih6UmFkaWFucyk7XHJcblxyXG4gICAgcmV0dXJuIE1hdHJpeDR4NC5tdWx0aXBseShNYXRyaXg0eDQubXVsdGlwbHkocnosIHJ5KSwgcngpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzY2FsZShzY2FsZTogVmVjdG9yMyk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gc2NhbGUueDtcclxuICAgIG0uX2RhdGFbNV0gPSBzY2FsZS55O1xyXG4gICAgbS5fZGF0YVsxMF0gPSBzY2FsZS56O1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBNYXRyaXg0eDQsIGI6IE1hdHJpeDR4NCk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYjAwID0gYi5fZGF0YVswICogNCArIDBdO1xyXG4gICAgbGV0IGIwMSA9IGIuX2RhdGFbMCAqIDQgKyAxXTtcclxuICAgIGxldCBiMDIgPSBiLl9kYXRhWzAgKiA0ICsgMl07XHJcbiAgICBsZXQgYjAzID0gYi5fZGF0YVswICogNCArIDNdO1xyXG4gICAgbGV0IGIxMCA9IGIuX2RhdGFbMSAqIDQgKyAwXTtcclxuICAgIGxldCBiMTEgPSBiLl9kYXRhWzEgKiA0ICsgMV07XHJcbiAgICBsZXQgYjEyID0gYi5fZGF0YVsxICogNCArIDJdO1xyXG4gICAgbGV0IGIxMyA9IGIuX2RhdGFbMSAqIDQgKyAzXTtcclxuICAgIGxldCBiMjAgPSBiLl9kYXRhWzIgKiA0ICsgMF07XHJcbiAgICBsZXQgYjIxID0gYi5fZGF0YVsyICogNCArIDFdO1xyXG4gICAgbGV0IGIyMiA9IGIuX2RhdGFbMiAqIDQgKyAyXTtcclxuICAgIGxldCBiMjMgPSBiLl9kYXRhWzIgKiA0ICsgM107XHJcbiAgICBsZXQgYjMwID0gYi5fZGF0YVszICogNCArIDBdO1xyXG4gICAgbGV0IGIzMSA9IGIuX2RhdGFbMyAqIDQgKyAxXTtcclxuICAgIGxldCBiMzIgPSBiLl9kYXRhWzMgKiA0ICsgMl07XHJcbiAgICBsZXQgYjMzID0gYi5fZGF0YVszICogNCArIDNdO1xyXG5cclxuICAgIGxldCBhMDAgPSBhLl9kYXRhWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgYTAxID0gYS5fZGF0YVswICogNCArIDFdO1xyXG4gICAgbGV0IGEwMiA9IGEuX2RhdGFbMCAqIDQgKyAyXTtcclxuICAgIGxldCBhMDMgPSBhLl9kYXRhWzAgKiA0ICsgM107XHJcbiAgICBsZXQgYTEwID0gYS5fZGF0YVsxICogNCArIDBdO1xyXG4gICAgbGV0IGExMSA9IGEuX2RhdGFbMSAqIDQgKyAxXTtcclxuICAgIGxldCBhMTIgPSBhLl9kYXRhWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgYTEzID0gYS5fZGF0YVsxICogNCArIDNdO1xyXG4gICAgbGV0IGEyMCA9IGEuX2RhdGFbMiAqIDQgKyAwXTtcclxuICAgIGxldCBhMjEgPSBhLl9kYXRhWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgYTIyID0gYS5fZGF0YVsyICogNCArIDJdO1xyXG4gICAgbGV0IGEyMyA9IGEuX2RhdGFbMiAqIDQgKyAzXTtcclxuICAgIGxldCBhMzAgPSBhLl9kYXRhWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgYTMxID0gYS5fZGF0YVszICogNCArIDFdO1xyXG4gICAgbGV0IGEzMiA9IGEuX2RhdGFbMyAqIDQgKyAyXTtcclxuICAgIGxldCBhMzMgPSBhLl9kYXRhWzMgKiA0ICsgM107XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xyXG4gICAgbS5fZGF0YVszXSA9IGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMztcclxuICAgIG0uX2RhdGFbNF0gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xyXG4gICAgbS5fZGF0YVs2XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbN10gPSBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xyXG4gICAgbS5fZGF0YVs5XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMTBdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyO1xyXG4gICAgbS5fZGF0YVsxMV0gPSBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzEyXSA9IGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbMTNdID0gYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxO1xyXG4gICAgbS5fZGF0YVsxNF0gPSBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzE1XSA9IGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weUZyb20obTogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgdGhpcy5fZGF0YVtpXSA9IG0uX2RhdGFbaV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0cml4NHg0JztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHJvdGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyBzY2FsZTogVmVjdG9yMyA9IFZlY3RvcjMub25lO1xyXG5cclxuICBwdWJsaWMgY29weUZyb20odHJhbnNmb3JtOiBUcmFuc2Zvcm0pOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb24uY29weUZyb20odHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgIHRoaXMucm90YXRpb24uY29weUZyb20odHJhbnNmb3JtLnJvdGF0aW9uKTtcclxuICAgIHRoaXMuc2NhbGUuY29weUZyb20odHJhbnNmb3JtLnNjYWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IHRyYW5zbGF0aW9uID0gTWF0cml4NHg0LnRyYW5zbGF0aW9uKHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgIGxldCByb3RhdGlvbiA9IE1hdHJpeDR4NC5yb3RhdGlvblhZWihcclxuICAgICAgdGhpcy5yb3RhdGlvbi54LFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLnksXHJcbiAgICAgIHRoaXMucm90YXRpb24uelxyXG4gICAgKTtcclxuICAgIGxldCBzY2FsZSA9IE1hdHJpeDR4NC5zY2FsZSh0aGlzLnNjYWxlKTtcclxuXHJcbiAgICAvLyBvcmRlciBtYXR0ZXJzIGhlcmVcclxuICAgIC8vIFQgKiBSICogU1xyXG4gICAgcmV0dXJuIE1hdHJpeDR4NC5tdWx0aXBseShNYXRyaXg0eDQubXVsdGlwbHkodHJhbnNsYXRpb24sIHJvdGF0aW9uKSwgc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5yb3RhdGlvbikge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uLnNldEZyb21Kc29uKGpzb24ucm90YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnNjYWxlKSB7XHJcbiAgICAgIHRoaXMuc2NhbGUuc2V0RnJvbUpzb24oanNvbi5zY2FsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi4vYmVoYXZpb3JzL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4uL21hdGgvbWF0cml4NHg0JztcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vbWF0aC90cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbU9iamVjdCB7XHJcbiAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9jaGlsZHJlbjogU2ltT2JqZWN0W10gPSBbXTtcclxuICBwcml2YXRlIF9wYXJlbnQ6IFNpbU9iamVjdCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9pc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NjZW5lOiBTY2VuZSB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9jb21wb25lbnRzOiBJQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIF9iZWhhdmlvcnM6IElCZWhhdmlvcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2xvY2FsTWF0cml4OiBNYXRyaXg0eDQgPSBNYXRyaXg0eDQuaWRlbnRpdHkoKTtcclxuICBwcml2YXRlIF93b3JsZE1hdHJpeDogTWF0cml4NHg0ID0gTWF0cml4NHg0LmlkZW50aXR5KCk7XHJcblxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyB0cmFuc2Zvcm06IFRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgc2NlbmU/OiBTY2VuZSkge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwYXJlbnQoKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQgfHwgdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3b3JsZE1hdHJpeCgpOiBNYXRyaXg0eDQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dvcmxkTWF0cml4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRDaGlsZChjaGlsZDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgaWYgKHRoaXMuX3NjZW5lKSB7XHJcbiAgICAgIGNoaWxkLm9uQWRkZWQodGhpcy5fc2NlbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUNoaWxkKGNoaWxkOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjaGlsZC5fcGFyZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAvLyBkb3VibGUgY2hlY2sgdGhpcyB3b3Jrc1xyXG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMuX2NoaWxkcmVuLmZpbHRlcigoXywgaWR4KSA9PiBpbmRleCAhPT0gaWR4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNoaWxkLmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQmVoYXZpb3IoYmVoYXZpb3I6IElCZWhhdmlvcik6IHZvaWQge1xyXG4gICAgdGhpcy5fYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xyXG4gICAgYmVoYXZpb3Iuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQubG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2xvY2FsTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKTtcclxuICAgIHRoaXMudXBkYXRlV29ybGRNYXRyaXgoXHJcbiAgICAgIHRoaXMuX3BhcmVudCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fcGFyZW50LndvcmxkTWF0cml4IDogdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iZWhhdmlvcnMuZm9yRWFjaCgoYmVoYXZpb3IpID0+IHtcclxuICAgICAgYmVoYXZpb3IudXBkYXRlKHRpbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25BZGRlZChzY2VuZTogU2NlbmUpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVdvcmxkTWF0cml4KHBhcmVudFdvcmxkTWF0cml4OiBNYXRyaXg0eDQgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChwYXJlbnRXb3JsZE1hdHJpeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gTWF0cml4NHg0Lm11bHRpcGx5KFxyXG4gICAgICAgIHBhcmVudFdvcmxkTWF0cml4LFxyXG4gICAgICAgIHRoaXMuX2xvY2FsTWF0cml4XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeC5jb3B5RnJvbSh0aGlzLl9sb2NhbE1hdHJpeCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4vc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgcHJpdmF0ZSBfcm9vdDogU2ltT2JqZWN0O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9yb290ID0gbmV3IFNpbU9iamVjdCgwLCAnX19ST09UX18nLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcm9vdCgpOiBTaW1PYmplY3Qge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QuaXNMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkT2JqZWN0KG9iamVjdDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb290LmFkZENoaWxkKG9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0T2JqZWN0QnlOYW1lKG5hbWU6IHN0cmluZyk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5nZXRPYmplY3RCeU5hbWUobmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcikge1xyXG4gICAgdGhpcy5fcm9vdC5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50TWFuYWdlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yTWFuYWdlciB9IGZyb20gJy4uL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuL3NpbU9iamVjdCc7XHJcblxyXG5leHBvcnQgZW51bSBab25lU3RhdGUge1xyXG4gIFVOSU5JVElBTElaRUQsXHJcbiAgTE9BRElORyxcclxuICBVUERBVElORyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmUge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG4gIHByaXZhdGUgX3N0YXRlOiBab25lU3RhdGUgPSBab25lU3RhdGUuVU5JTklUSUFMSVpFRDtcclxuICBwcml2YXRlIF9nbG9iYWxJZDogbnVtYmVyID0gLTE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLl9zY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXRpYWxpemUoem9uZURhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHpvbmVEYXRhLm9iamVjdHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgaW5pdGlhbGl6YXRpb24gZXJyb3I6IG9iamVjdHMgbm90IHByZXNlbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICB6b25lRGF0YS5vYmplY3RzLmZvckVhY2goKG86IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRTaW1PYmplY3QobyBhcyBTaW1PYmplY3QsIHRoaXMuX3NjZW5lLnJvb3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLkxPQURJTkc7XHJcblxyXG4gICAgdGhpcy5fc2NlbmUubG9hZCgpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVubG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFjdGl2YXRlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBvbkRlYWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHJpdmF0ZSBsb2FkU2ltT2JqZWN0KGRhdGFTZWN0aW9uOiBhbnksIHBhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBsZXQgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAoZGF0YVNlY3Rpb24ubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5hbWUgPSBTdHJpbmcoZGF0YVNlY3Rpb24ubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZ2xvYmFsSWQrKztcclxuICAgIGxldCBzaW1PYmplY3QgPSBuZXcgU2ltT2JqZWN0KHRoaXMuX2dsb2JhbElkLCBuYW1lLCB0aGlzLl9zY2VuZSk7XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNpbU9iamVjdC50cmFuc2Zvcm0uc2V0RnJvbUpzb24oZGF0YVNlY3Rpb24udHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY29tcG9uZW50cykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jb21wb25lbnRzLmZvckVhY2goKGM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudE1hbmFnZXIuZXh0cmFjdENvbXBvbmVudChjKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5iZWhhdmlvcnMpIHtcclxuICAgICAgZGF0YVNlY3Rpb24uYmVoYXZpb3JzLmZvckVhY2goKGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gQmVoYXZpb3JNYW5hZ2VyLmV4dHJhY3RCZWhhdmlvcihiKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQmVoYXZpb3IoYmVoYXZpb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY2hpbGRyZW4gJiYgZGF0YVNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChvOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRTaW1PYmplY3Qobywgc2ltT2JqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmVudC5hZGRDaGlsZChzaW1PYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEpzb25Bc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSAnLi96b25lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBab25lTWFuYWdlciBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2dsb2JhbFpvbmVJRDogbnVtYmVyID0gLTE7XHJcbiAgLy8gIHByaXZhdGUgc3RhdGljIF96b25lczogeyBbaWQ6IG51bWJlcl06IFpvbmUgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkWm9uZXM6IHsgW2lkOiBudW1iZXJdOiBzdHJpbmcgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9hY3RpdmVab25lOiBab25lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0OiBab25lTWFuYWdlcjtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIFpvbmVNYW5hZ2VyLl9pbnN0ID0gbmV3IFpvbmVNYW5hZ2VyKCk7XHJcbiAgICAvLyB0ZW1wb3JhcnlcclxuICAgIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbMF0gPSAnc3JjL2Fzc2V0cy96b25lcy90ZXN0Wm9uZS5qc29uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlWm9uZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkRlYWN0aXZhdGVkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVubG9hZCgpO1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoQXNzZXRNYW5hZ2VyLmlzQXNzZXRMb2FkZWQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pKSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbaWRdLFxyXG4gICAgICAgICAgWm9uZU1hbmFnZXIuX2luc3RcclxuICAgICAgICApO1xyXG4gICAgICAgIEFzc2V0TWFuYWdlci5sb2FkQXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFpvbmUgaWQ6ICR7aWR9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZS5pbmRleE9mKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCkgIT09IC0xKSB7XHJcbiAgICAgIGxldCBhc3NldCA9IG1lc3NhZ2UuY29udGV4dCBhcyBKc29uQXNzZXQ7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLmxvYWRab25lKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGxvYWRab25lKGFzc2V0OiBKc29uQXNzZXQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHpvbmVEYXRhID0gYXNzZXQuZGF0YTtcclxuICAgIGxldCB6b25lSWQ6IG51bWJlcjtcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBpZCBub3QgcHJlc2VudCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHpvbmVJZCA9IE51bWJlcih6b25lRGF0YS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKCF6b25lRGF0YS5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBuYW1lIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZU5hbWUgPSBTdHJpbmcoem9uZURhdGEubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHpvbmVEZXNjcmlwdGlvbiA9IFN0cmluZyh6b25lRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IG5ldyBab25lKHpvbmVJZCEsIHpvbmVOYW1lLCB6b25lRGVzY3JpcHRpb24pO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUuaW5pdGlhbGl6ZSh6b25lRGF0YSk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkFjdGl2YXRlZCgpO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUubG9hZCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vY29sbGlzaW9uL2NvbGxpc2lvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29sbGlzaW9uQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50TWFuYWdlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gJy4vYXVkaW8vYXVkaW9NYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL2tleWJvYXJkTW92ZW1lbnRCZWhhdmlvcic7XHJcbmltcG9ydCB7IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMvcm90YXRpb25CZWhhdmlvcic7XHJcbmltcG9ydCB7IGdsLCBHTFV0aWxpdGllcyB9IGZyb20gJy4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBCYXNpY1NoYWRlciB9IGZyb20gJy4vZ2wvc2hhZGVycy9iYXNpY1NoYWRlcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9ncmFwaGljcy9jb2xvcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyLCBNb3VzZUNvbnRleHQgfSBmcm9tICcuL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlQnVzJztcclxuaW1wb3J0IHsgWm9uZU1hbmFnZXIgfSBmcm9tICcuL3dvcmxkL3pvbmVNYW5hZ2VyJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBnYW1lIGVuZ2luZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9iYXNpY1NoYWRlcjogQmFzaWNTaGFkZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcHJvamVjdGlvbjogTWF0cml4NHg0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3ByZXZpb3VzVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBlbmdpbmVcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdXAgdGhpcyBlbmdpbmVcclxuICAgKi9cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYW52YXMgPSBHTFV0aWxpdGllcy5pbml0aWFsaXplKCk7XHJcbiAgICBBc3NldE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgSW5wdXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIFpvbmVNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZSgnTU9VU0VfRE9XTicsIHRoaXMpO1xyXG5cclxuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMC4zLCAxKTtcclxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XHJcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcclxuXHJcbiAgICBsZXQgaW1hZ2VDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxyXG4gICAgICAnLi4vYXNzZXRzL3RleHR1cmVzLycsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pXHJcbiAgICApO1xyXG4gICAgbGV0IGpzb25Db250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvem9uZXMvJywgdHJ1ZSwgL1xcLihqc29uKSQvaSk7XHJcbiAgICBsZXQgYXVkaW9Db250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxyXG4gICAgICAnLi4vYXNzZXRzL3NvdW5kcy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHdhdnxtcDMpJC9pXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubG9hZEFsbChpbWFnZUNvbnRleHQpO1xyXG4gICAgdGhpcy5sb2FkQWxsKGpzb25Db250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChhdWRpb0NvbnRleHQpO1xyXG5cclxuICAgIHRoaXMuX2Jhc2ljU2hhZGVyID0gbmV3IEJhc2ljU2hhZGVyKCk7XHJcbiAgICB0aGlzLl9iYXNpY1NoYWRlci51c2UoKTtcclxuXHJcbiAgICAvLyBMb2FkIG1hdGVyaWFsc1xyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAnc3RvbmVXYWxsJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9zdG9uZV93YWxsLmpwZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgICAgJ3dvb2RQbGFuaycsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvd29vZF9wbGFuay5qcGcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdiaXJkJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9iaXJkX3NocnVua18yLnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnYmlyZEp1bXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnbXVzaWMnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYWxmX3JlbWl4Lm1wMycsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgLy8gRmluZCBhIGJldHRlciBwbGFjZSBmb3IgdGhpcz9cclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBTcHJpdGVDb21wb25lbnRCdWlsZGVyKCkpO1xyXG4gICAgQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBDb2xsaXNpb25Db21wb25lbnRCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgUm90YXRpb25CZWhhdmlvckJ1aWxkZXIoKSk7XHJcbiAgICBCZWhhdmlvck1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JCdWlsZGVyKCkpO1xyXG5cclxuICAgIC8vIFRPRE86IENoYW5nZSB0aGlzIHRvIGJlIHJlYWQgZnJvbSBnYW1lIGNvbmZpZ1xyXG4gICAgWm9uZU1hbmFnZXIuY2hhbmdlWm9uZSgwKTtcclxuXHJcbiAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgdGhpcy5sb29wKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBjYW52YXMgdG8gZml0IHRoZSB3aW5kb3cuXHJcbiAgICovXHJcbiAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLl9jYW52YXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuX3Byb2plY3Rpb24gPSBNYXRyaXg0eDQub3J0aG9ncmFwaGljKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAtMTAwLjAsXHJcbiAgICAgICAgMTAwLjBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvb3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgY29uc3QgbW91c2VDb250ZXh0ID0gbWVzc2FnZS5jb250ZXh0IGFzIE1vdXNlQ29udGV4dDtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09ICdNT1VTRV9ET1dOJyAmJiBtb3VzZUNvbnRleHQpIHtcclxuICAgICAgaWYgKG1vdXNlQ29udGV4dC5sZWZ0RG93bikge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ2JpcmRKdW1wJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW91c2VDb250ZXh0LnJpZ2h0RG93bikge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci50b2dnbGVTb3VuZCgnbXVzaWMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkQWxsKHJlcXVpcmVDb250ZXh0OiBfX1dlYnBhY2tNb2R1bGVBcGkuUmVxdWlyZUNvbnRleHQpIHtcclxuICAgIHJlcXVpcmVDb250ZXh0LmtleXMoKS5mb3JFYWNoKHJlcXVpcmVDb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgbGV0IGRlbHRhID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLl9wcmV2aW91c1RpbWU7XHJcblxyXG4gICAgTWVzc2FnZUJ1cy51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIFpvbmVNYW5hZ2VyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgQ29sbGlzaW9uTWFuYWdlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIHRoaXMuX3ByZXZpb3VzVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBpZiAodGhpcy5fYmFzaWNTaGFkZXIpIHtcclxuICAgICAgWm9uZU1hbmFnZXIucmVuZGVyKHRoaXMuX2Jhc2ljU2hhZGVyKTtcclxuICAgIH1cclxuICAgIC8vIFNldCB1bmlmb3Jtc1xyXG4gICAgaWYgKHRoaXMuX2Jhc2ljU2hhZGVyICYmIHRoaXMuX3Byb2plY3Rpb24pIHtcclxuICAgICAgY29uc3QgcHJvamVjdGlvblBvc2l0aW9uID1cclxuICAgICAgICB0aGlzLl9iYXNpY1NoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfcHJvamVjdGlvbicpO1xyXG5cclxuICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihcclxuICAgICAgICBwcm9qZWN0aW9uUG9zaXRpb24sXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9wcm9qZWN0aW9uLmRhdGEpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9jb3JlL2VuZ2luZSc7XHJcblxyXG52YXIgZW5naW5lOiBFbmdpbmU7XHJcbi8vIFRoZSBtYWluIGVudHJ5IHBvaW50IHRvIHRoZSBhcHBsaWNhdGlvblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGVuZ2luZSA9IG5ldyBFbmdpbmUoKTtcclxuICBlbmdpbmUuc3RhcnQoKTtcclxufTtcclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBlbmdpbmUucmVzaXplKCk7XHJcbn07XHJcblxyXG53aW5kb3cub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==