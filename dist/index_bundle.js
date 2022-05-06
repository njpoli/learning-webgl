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
        this.loadAll(imageContext);
        this.loadAll(jsonContext);
        this.loadAll(audioContext);
        this._basicShader = new BasicShader();
        this._basicShader.use();
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
        BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
        BehaviorManager.registerBuilder(new PlayerBehaviorBuilder());
        BehaviorManager.registerBuilder(new KeyboardMovementBehaviorBuilder());
        BehaviorManager.registerBuilder(new ScrollBehaviorBuilder());
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
            if (!this._gameWidth || !this._gameHeight) {
                this._canvas.width = window.innerWidth;
                this._canvas.height = window.innerHeight;
            }
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
            Message.send('GAME_START', undefined, undefined);
            console.log('sending a message');
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
    engine = new Engine(512, 750);
    engine.start();
};
window.onresize = function () {
    engine.resize();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sRUFBRSxDQUFDO1FBQ3ZCLFVBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFUyxvQ0FBbUIsR0FBN0I7UUFBQSxpQkFzQkM7O1FBckJDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5ELFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FB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LGFBQWEsR0FBRyxDQUFDLENBQUM7YUFDeEI7WUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ2xDLElBQUksT0FBTyxDQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMvQixDQUNGLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ2xDLElBQUksT0FBTyxDQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMvQixDQUNGLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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SyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFNUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sa0NBQWMsR0FBckI7UUFDRSxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixDQUFZO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FB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QUN6QyxJQUFNLGtCQUFrQixHQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXZELG1CQUFtQixDQUNqQixrQkFBa0IsRUFDbEIsS0FBSyxFQUNMLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQ3hDLENBQUM7U0FDSDtRQUNELHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7O0FDOU9vQjtBQUNrQjtBQUV2QyxJQUFJLE1BQWMsQ0FBQztBQUNuQiwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDaEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy9zb3VuZHN8c3luY3xDOi8uKHdhdiU3Q21wMykkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvYXNzZXRzL3RleHR1cmVzfHN5bmN8QzovLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvem9uZXN8c3luY3xDOi8uKGpzb24pJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWVzc2FnZS9tZXNzYWdlQnVzLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWVzc2FnZS9tZXNzYWdlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbGxpc2lvbi9jb2xsaXNpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXNzZXRzL2ltYWdlQXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvanNvbkFzc2V0TG9hZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXNzZXRzL2Fzc2V0TWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdmVjdG9yMy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL21hdGVyaWFsTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL2dsLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy92ZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9hbmltYXRlZFNwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9zcHJpdGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9hbmltYXRlZFNwcml0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3NoYXBlczJEL2NpcmNsZTJELnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3Mvc2hhcGVzMkQvcmVjdGFuZ2xlMmQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9jb2xsaXNpb25Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXVkaW8vYXVkaW9NYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2JlaGF2aW9yTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2lucHV0L2lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9iYXNlQmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMva2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC9tYXRoRXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9wbGF5ZXJCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9yb3RhdGlvbkJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL3Njcm9sbEJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvc2hhZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvc2hhZGVycy9iYXNpY1NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2NvbG9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3RleHR1cmVNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL21hdHJpeDR4NC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2ltT2JqZWN0LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS93b3JsZC96b25lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyYjMwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzJiMzA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2FsZl9yZW1peC5tcDNcIjogODUzLFxuXHRcIi4vYmlyZF9qdW1wLndhdlwiOiA2MDcsXG5cdFwiLi9kZWF0aC53YXZcIjogOTU5LFxuXHRcIi4vdGluZy53YXZcIjogNTM2XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNjA1OyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWNrZ3JvdW5kLnBuZ1wiOiA2OTEsXG5cdFwiLi9iaXJkLnBuZ1wiOiAxMSxcblx0XCIuL2JpcmRfc2hydW5rLnBuZ1wiOiA4MjYsXG5cdFwiLi9iaXJkX3NocnVua18yLnBuZ1wiOiA4NDksXG5cdFwiLi9ncmFzcy5wbmdcIjogNDczLFxuXHRcIi4vZ3Jhc3NfYmlnZ2VyLnBuZ1wiOiA4MjQsXG5cdFwiLi9waXBlX2JvZHkucG5nXCI6IDI5Mixcblx0XCIuL3BpcGVfZW5kLnBuZ1wiOiA0NDAsXG5cdFwiLi9zdG9uZV93YWxsLmpwZ1wiOiAxOTAsXG5cdFwiLi9zdG9uZV93YWxsXzEyOHgxMjguanBnXCI6IDczOCxcblx0XCIuL3dvb2RfcGxhbmsuanBnXCI6IDg0Nyxcblx0XCIuL3dvb2RfcGxhbmtfMTI4eDEyOC5qcGdcIjogMzA2XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjQ1OyIsInZhciBtYXAgPSB7XG5cdFwiLi90ZXN0Wm9uZS5qc29uXCI6IDk5M1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDkyNDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUge1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gIHB1YmxpYyBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtZXNzYWdlOiBNZXNzYWdlLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlIH0gZnJvbSAnLi9tZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VQcmlvcml0eSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ1cyB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3N1YnNjcmlwdGlvbnM6IHsgW2NvZGU6IHN0cmluZ106IElNZXNzYWdlSGFuZGxlcltdIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZTogbnVtYmVyID0gMTA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX25vcm1hbE1lc3NhZ2VRdWV1ZTogTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGRTdWJzY3JpcHRpb24oY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIGlmICghTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSkge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKSAhPT0gLTEpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdBdHRlbXB0aW5nIHRvIGFkZCBhIGR1cGxpY2F0ZSBoYW5kbGVyIHRvIGNvZGUgJyArXHJcbiAgICAgICAgICBjb2RlICtcclxuICAgICAgICAgICcuIFN1YnNjcmlwdGlvbiBub3QgYWRkZWQuJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW1vdmVTdWJzY3JpcHRpb24oXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXJcclxuICApOiB2b2lkIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgaXMgY29ycmVjdFxyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnQ2Fubm90IHVuc3Vic2NyaWJlIGhhbmRsZXIgZnJvbSBjb2RlOiAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJyBiZWNhdXNlIHRoYXQgY29kZSBkb2VzIG5vdCBzdWJzY3JpYmVkIHRvLidcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBub2RlSW5kZXggPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmluZGV4T2YoaGFuZGxlcik7XHJcbiAgICBpZiAobm9kZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5maWx0ZXIoXHJcbiAgICAgICAgKF8sIGlkeCkgPT4gaWR4ICE9PSBub2RlSW5kZXhcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcG9zdChtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTWVzc2FnZSBwb3N0ZWQ6JywgbWVzc2FnZSk7XHJcbiAgICBjb25zdCBoYW5kbGVycyA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbbWVzc2FnZS5jb2RlXTtcclxuICAgIGlmICghaGFuZGxlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXJzLmZvckVhY2goKGgpID0+IHtcclxuICAgICAgaWYgKG1lc3NhZ2UucHJpb3JpdHkgPT09IE1lc3NhZ2VQcmlvcml0eS5ISUdIKSB7XHJcbiAgICAgICAgaC5vbk1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnB1c2goXHJcbiAgICAgICAgICBuZXcgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUobWVzc2FnZSwgaClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE5vdCB1c2luZyB0aW1lP1xyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VMaW1pdCA9IE1hdGgubWluKFxyXG4gICAgICBNZXNzYWdlQnVzLl9ub3JtYWxRdWV1ZU1lc3NhZ2VQZXJVcGRhdGUsXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5sZW5ndGhcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlTGltaXQ7ICsraSkge1xyXG4gICAgICBsZXQgbm9kZSA9IE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5wb3AoKTtcclxuICAgICAgbm9kZT8uaGFuZGxlci5vbk1lc3NhZ2Uobm9kZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlQnVzJztcclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VQcmlvcml0eSB7XHJcbiAgTk9STUFMLFxyXG4gIEhJR0gsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICBwdWJsaWMgY29kZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb250ZXh0OiB1bmtub3duO1xyXG4gIHB1YmxpYyBzZW5kZXI6IHVua25vd247XHJcbiAgcHVibGljIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIHNlbmRlcjogdW5rbm93bixcclxuICAgIGNvbnRleHQ6IHVua25vd24sXHJcbiAgICBwcmlvcml0eTogTWVzc2FnZVByaW9yaXR5ID0gTWVzc2FnZVByaW9yaXR5Lk5PUk1BTFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMuc2VuZGVyID0gc2VuZGVyO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VuZChjb2RlOiBzdHJpbmcsIHNlbmRlcjogdW5rbm93biwgY29udGV4dD86IHVua25vd24pOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucG9zdChuZXcgTWVzc2FnZShjb2RlLCBzZW5kZXIsIGNvbnRleHQsIE1lc3NhZ2VQcmlvcml0eS5OT1JNQUwpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VuZFByaW9yaXR5KFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dD86IHVua25vd25cclxuICApOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucG9zdChuZXcgTWVzc2FnZShjb2RlLCBzZW5kZXIsIGNvbnRleHQsIE1lc3NhZ2VQcmlvcml0eS5ISUdIKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZShjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5hZGRTdWJzY3JpcHRpb24oY29kZSwgaGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnJlbW92ZVN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sbGlzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2xsaXNpb25Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZS9tZXNzYWdlL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbkRhdGEge1xyXG4gIHB1YmxpYyB0aW1lOiBudW1iZXI7XHJcbiAgcHVibGljIGE6IENvbGxpc2lvbkNvbXBvbmVudCB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgYjogQ29sbGlzaW9uQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICB0aW1lOiBudW1iZXIsXHJcbiAgICBhOiBDb2xsaXNpb25Db21wb25lbnQsXHJcbiAgICBiOiBDb2xsaXNpb25Db21wb25lbnRcclxuICApIHtcclxuICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5iID0gYjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25NYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfdG90YWxUaW1lOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgc3RhdGljIF9jb21wb25lbnRzOiBDb2xsaXNpb25Db21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfY29sbGlzaW9uRGF0YTogQ29sbGlzaW9uRGF0YVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQ29sbGlzaW9uQ29tcG9uZW50KGNvbXBvbmVudDogQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckNvbGxpc2lvbkNvbXBvbmVudChjb21wb25lbnQ6IENvbGxpc2lvbkNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgaWR4ID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCk7XHJcbiAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5maWx0ZXIoXHJcbiAgICAgICAgKF8sIGkpID0+IGkgIT09IGlkeFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lICs9IHRpbWU7XHJcblxyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIGxldCBjb21wID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50c1tjXTtcclxuICAgICAgZm9yIChsZXQgbyA9IGMgKyAxOyBvIDwgQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgIGxldCBvdGhlciA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHNbb107XHJcbiAgICAgICAgLy8gSWYgYm90aCBzaGFwZXMgYXJlIHN0YXRpYywgc3RvcCBkZXRlY3Rpb24uXHJcbiAgICAgICAgaWYgKGNvbXAgJiYgb3RoZXIgJiYgY29tcC5pc1N0YXRpYyAmJiBvdGhlci5pc1N0YXRpYykge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcC5zaGFwZS5pbnRlcnNlY3RzKG90aGVyLnNoYXBlKSkge1xyXG4gICAgICAgICAgLy8gSGF2ZSBhIGNvbGxpc2lvblxyXG4gICAgICAgICAgbGV0IGV4aXN0czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCBDb2xsaXNpb25NYW5hZ2VyLl9jb2xsaXNpb25EYXRhLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YVtkXTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIChkYXRhLmEgPT09IGNvbXAgJiYgZGF0YS5iID09PSBvdGhlcikgfHxcclxuICAgICAgICAgICAgICAoZGF0YS5iID09PSBjb21wICYmIGRhdGEuYSA9PT0gb3RoZXIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgZXhpc3RpbmcgZGF0YS4gVXBkYXRlIGl0LlxyXG4gICAgICAgICAgICAgIC8vIG9uQ29sbGlzaW9uVXBkYXRlXHJcbiAgICAgICAgICAgICAgY29tcC5vbkNvbGxpc2lvblVwZGF0ZShvdGhlcik7XHJcbiAgICAgICAgICAgICAgb3RoZXIub25Db2xsaXNpb25VcGRhdGUoY29tcCk7XHJcbiAgICAgICAgICAgICAgZGF0YS50aW1lID0gQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lO1xyXG4gICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIWV4aXN0cykge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBjb2xsaXNpb25cclxuICAgICAgICAgICAgLy8gb25Db2xsaXNpb25FbnRyeVxyXG4gICAgICAgICAgICBjb21wLm9uQ29sbGlzaW9uRW50cnkob3RoZXIpO1xyXG4gICAgICAgICAgICBvdGhlci5vbkNvbGxpc2lvbkVudHJ5KGNvbXApO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsID0gbmV3IENvbGxpc2lvbkRhdGEoXHJcbiAgICAgICAgICAgICAgQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lLFxyXG4gICAgICAgICAgICAgIGNvbXAsXHJcbiAgICAgICAgICAgICAgb3RoZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgTWVzc2FnZS5zZW5kUHJpb3JpdHkoJ0NPTExJU0lPTl9FTlRSWTonICsgY29tcC5uYW1lLCB0aGlzLCBjb2xsKTtcclxuICAgICAgICAgICAgTWVzc2FnZS5zZW5kUHJpb3JpdHkoJ0NPTExJU0lPTl9FTlRSWTonICsgb3RoZXIubmFtZSwgdGhpcywgY29sbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpc2lvbkRhdGEucHVzaChjb2xsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgc3RhbGUgY29sbGlzaW9uIGRhdGEuXHJcbiAgICBjb25zdCByZW1vdmVEYXRhOiBDb2xsaXNpb25EYXRhW10gPSBbXTtcclxuICAgIGZvciAobGV0IGQgPSAwOyBkIDwgQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5sZW5ndGg7IGQrKykge1xyXG4gICAgICBjb25zdCBkYXRhID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YVtkXTtcclxuICAgICAgaWYgKGRhdGEudGltZSAhPT0gQ29sbGlzaW9uTWFuYWdlci5fdG90YWxUaW1lKSB7XHJcbiAgICAgICAgLy8gT2xkIGNvbGxpc2lvbiBkYXRhXHJcbiAgICAgICAgLy8gb25Db2xsaXNpb25FeGl0XHJcbiAgICAgICAgcmVtb3ZlRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBkYXRhLmE/Lm9uQ29sbGlzaW9uRXhpdChkYXRhLmIpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBkYXRhLmI/Lm9uQ29sbGlzaW9uRXhpdChkYXRhLmEpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBNZXNzYWdlLnNlbmRQcmlvcml0eSgnQ09MTElTSU9OX0VYSVQ6JyArIGRhdGEuYS5uYW1lLCB0aGlzLCBkYXRhKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgTWVzc2FnZS5zZW5kUHJpb3JpdHkoJ0NPTExJU0lPTl9FWElUOicgKyBkYXRhLmIubmFtZSwgdGhpcywgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAocmVtb3ZlRGF0YS5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3QgaWR4ID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5pbmRleE9mKHJlbW92ZURhdGFbMF0pO1xyXG5cclxuICAgICAgQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgcmVtb3ZlRGF0YS5zaGlmdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBc3NldE1hbmFnZXIgfSBmcm9tICcuL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXRMb2FkZXIgaW1wbGVtZW50cyBJQXNzZXRMb2FkZXIge1xyXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWydwbmcnLCAnZ2lmJywgJ2pwZyddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLm9uSW1hZ2VMb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIGltYWdlKTtcclxuICAgIGltYWdlLnNyYyA9IGFzc2V0TmFtZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbWFnZUxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBuZXcgSW1hZ2VBc3NldChhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBBc3NldE1hbmFnZXIub25Bc3NldExvYWRlZChhc3NldCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsnanNvbiddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGFzc2V0TmFtZSk7XHJcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdsb2FkJyxcclxuICAgICAgdGhpcy5vbkpzb25Mb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIHJlcXVlc3QpXHJcbiAgICApO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSnNvbkxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCByZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgY29uc3QgYXNzZXQgPSBuZXcgSnNvbkFzc2V0KGFzc2V0TmFtZSwganNvbik7XHJcbiAgICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgSnNvbkFzc2V0TG9hZGVyIH0gZnJvbSAnLi9qc29uQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCA9XHJcbiAgJ01FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRDo6JztcclxuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlcnM6IElBc3NldExvYWRlcltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlZEFzc2V0czogeyBbbmFtZTogc3RyaW5nXTogSUFzc2V0IH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBJbWFnZUFzc2V0TG9hZGVyKCkpO1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobmV3IEpzb25Bc3NldExvYWRlcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJMb2FkZXIobG9hZGVyOiBJQXNzZXRMb2FkZXIpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKGxvYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uQXNzZXRMb2FkZWQoYXNzZXQ6IElBc3NldCk6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXQubmFtZV0gPSBhc3NldDtcclxuICAgIE1lc3NhZ2Uuc2VuZChNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyBhc3NldC5uYW1lLCB0aGlzLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXROYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgbCBvZiBBc3NldE1hbmFnZXIuX2xvYWRlcnMpIHtcclxuICAgICAgaWYgKGwuc3VwcG9ydGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbiB8fCAnJykgIT09IC0xKSB7XHJcbiAgICAgICAgbC5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBVbmFibGUgdG8gbG9hZCBhc3NldCB3aXRoIGV4dGVuc2lvbiAke2V4dGVuc2lvbn0gYmVjYXVzZSB0aGVyZSBpcyBubyBsb2FkZXIgYXNzb2NpYXRlZCB3aXRoIGl0LmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzQXNzZXRMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgd29ya3NcclxuICAgIHJldHVybiAhIUFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogSUFzc2V0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdKSB7XHJcbiAgICAgIHJldHVybiBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4vdmVjdG9yMic7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMyB7XHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuICBwcml2YXRlIF96OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB6OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgdGhpcy5feiA9IHo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl96ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCB6ZXJvKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvbmUoKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoMSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0KHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feCA9IHg7XHJcbiAgICB9XHJcbiAgICBpZiAoeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgfVxyXG4gICAgaWYgKHogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl96ID0gejtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgdmVjdG9yIGlzIGVxdWFsIHRvIHRoZSBvbmUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50XHJcbiAgICogQHBhcmFtIHYgVmVjdG9yIHRvIGNoZWNrIGFnYWluc3RcclxuICAgKiBAcmV0dXJucyBCb29sZWFuIGJhYXNlZCBvbiBlcXVpdmFsZW5jeVxyXG4gICAqL1xyXG4gIHB1YmxpYyBlcXVhbHModjogVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ggPT09IHYuX3ggJiYgdGhpcy5feSA9PT0gdi5feSAmJiB0aGlzLl96ID09PSB2Ll96O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0FycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKHZlY3RvcjogVmVjdG9yMyk6IHZvaWQge1xyXG4gICAgdGhpcy5feCA9IHZlY3Rvci5feDtcclxuICAgIHRoaXMuX3kgPSB2ZWN0b3IuX3k7XHJcbiAgICB0aGlzLl96ID0gdmVjdG9yLl96O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkaXN0YW5jZShhOiBWZWN0b3IzLCBiOiBWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGRpZmYgPSBhLnN1YnRyYWN0KGIpO1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChkaWZmLnggKiBkaWZmLnggKyBkaWZmLnkgKiBkaWZmLnkgKyBkaWZmLnogKiBkaWZmLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ueCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ggPSBOdW1iZXIoanNvbi54KTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl95ID0gTnVtYmVyKGpzb24ueSk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi56ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feiA9IE51bWJlcihqc29uLnopO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZCh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94ICs9IHYuX3g7XHJcbiAgICB0aGlzLl95ICs9IHYuX3k7XHJcbiAgICB0aGlzLl96ICs9IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VidHJhY3QodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCAtPSB2Ll94O1xyXG4gICAgdGhpcy5feSAtPSB2Ll95O1xyXG4gICAgdGhpcy5feiAtPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG11bHRpcGx5KHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggKj0gdi5feDtcclxuICAgIHRoaXMuX3kgKj0gdi5feTtcclxuICAgIHRoaXMuX3ogKj0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXZpZGUodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCAvPSB2Ll94O1xyXG4gICAgdGhpcy5feSAvPSB2Ll95O1xyXG4gICAgdGhpcy5feiAvPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3opO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvVmVjdG9yMigpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLl94LCB0aGlzLl95KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMiB7XHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgemVybygpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb25lKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkaXN0YW5jZShhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGRpZmYgPSBhLmNsb25lKCkuc3VidHJhY3QoYik7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGRpZmYueCAqIGRpZmYueCArIGRpZmYueSAqIGRpZmYueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weUZyb20odjogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgdGhpcy5feCA9IHYuX3g7XHJcbiAgICB0aGlzLl95ID0gdi5feTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5feCwgdGhpcy5feV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1ZlY3RvcjMoKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy5feCwgdGhpcy5feSwgMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0KHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feCA9IHg7XHJcbiAgICB9XHJcbiAgICBpZiAoeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ueCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ggPSBOdW1iZXIoanNvbi54KTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl95ID0gTnVtYmVyKGpzb24ueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggKz0gdi5feDtcclxuICAgIHRoaXMuX3kgKz0gdi5feTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJ0cmFjdCh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICB0aGlzLl94IC09IHYuX3g7XHJcbiAgICB0aGlzLl95IC09IHYuX3k7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHkodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAqPSB2Ll94O1xyXG4gICAgdGhpcy5feSAqPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpdmlkZSh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICB0aGlzLl94IC89IHYuX3g7XHJcbiAgICB0aGlzLl95IC89IHYuX3k7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAqPSBzY2FsZTtcclxuICAgIHRoaXMuX3kgKj0gc2NhbGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5feCwgdGhpcy5feSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcblxyXG5jbGFzcyBNYXRlcmlhbFJlZmVyZW5jZU5vZGUge1xyXG4gIHB1YmxpYyBtYXRlcmlhbDogTWF0ZXJpYWwgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyByZWZlcmVuY2VDb3VudDogbnVtYmVyID0gMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1hdGVyaWFsOiBNYXRlcmlhbCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfbWF0ZXJpYWxzOiB7IFtuYW1lOiBzdHJpbmddOiBNYXRlcmlhbFJlZmVyZW5jZU5vZGUgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3Rlck1hdGVyaWFsKG1hdGVyaWFsOiBNYXRlcmlhbCk6IHZvaWQge1xyXG4gICAgaWYgKE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gPSBuZXcgTWF0ZXJpYWxSZWZlcmVuY2VOb2RlKFxyXG4gICAgICAgIG1hdGVyaWFsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldE1hdGVyaWFsKG1hdGVyaWFsTmFtZTogc3RyaW5nKTogTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5yZWZlcmVuY2VDb3VudCsrO1xyXG4gICAgICByZXR1cm4gTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZU1hdGVyaWFsKG1hdGVyaWFsTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYXRlcmlhbFJlZmVyZW5jZSA9IE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV07XHJcbiAgICBpZiAoIW1hdGVyaWFsUmVmZXJlbmNlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IHJlbGVhc2UgYSBtYXRlcmlhbCB3aGljaCBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEgJiZcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdICE9PSB1bmRlZmluZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5tYXRlcmlhbD8uZGVzdHJveSgpO1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuLyoqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIGEgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFV0aWxpdGllcyB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgV2ViR0wsIHBvdGVudGlhbGx5IHVzaW5nIHRoZSBjYW52YXMgd2l0aCBhbiBhc3NpZ25lZCBpZCBtYXRjaGluZ1xyXG4gICAqIHRoZSBwcm92aWRlZCBpZiBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBlbGVtZW50SWQgVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXHJcbiAgICogQHJldHVybnMgcmVmZXJlbmNlIHRvIHRoZSBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShlbGVtZW50SWQ/OiBzdHJpbmcpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICBpZiAoZWxlbWVudElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgaWYgKGNhbnZhcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIGNhbnZhcyBlbGVtZW50IG5hbWVkICcgKyBlbGVtZW50SWQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgIGlmIChnbCA9PT0gdW5kZWZpbmVkIHx8IGdsID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4vZ2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgYSBHTEJ1ZmZlciBhdHRyaWJ1dGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVJbmZvIHtcclxuICAvKipcclxuICAgKiBMb2NhdGlvbiBvZiB0aGUgYXR0cmlidXRlXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIGxvY2F0aW9uOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNpemUgKG51bWJlciBvZiBlbGVtZW50cykgaW4gdGhpcyBhdHRyaWJ1dGUgKGkuZS4gVmVjdG9yMyA9IDMpXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIHNpemU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgYnVmZmVyLlxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBvZmZzZXQ6IG51bWJlciA9IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgV2ViR0wgYnVmZmVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xCdWZmZXIge1xyXG4gIHByaXZhdGUgX2hhc0F0dHJpYnV0ZUxvY2F0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZWxlbWVudFNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIF9zdHJpZGU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuXHJcbiAgcHJpdmF0ZSBfdGFyZ2V0QnVmZmVyVHlwZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2RhdGFUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbW9kZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3R5cGVTaXplOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2RhdGE6IG51bWJlcltdID0gW107XHJcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogQXR0cmlidXRlSW5mb1tdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgR0wgQnVmZmVyLlxyXG4gICAqIEBwYXJhbSBkYXRhVHlwZSBUaGUgZGF0YSB0eXBlIG9mIHRoZSBidWZmZXIuIERlZmF1bHQ6IGdsLkZMT0FUXHJcbiAgICogQHBhcmFtIHRhcmdldEJ1ZmZlclR5cGUgVGhlIGJ1ZmZlciB0YXJnZXQgdHlwZS4gZ2wuQVJSQVlfQlVGRkVSIG9yIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLiBEZWZhdWx0OiBnbC5BUlJBWV9CVUZGRVJcclxuICAgKiBAcGFyYW0gbW9kZSBUaGUgZHJhd2luZyBtb2RlIG9mIHRoZSBidWZmZXIuIChpLmUuIGdsLlRSSUFOR0xFUyBvciBnbC5MSU5FUykuIERlZmF1bHQ6IGdsLlRSSUFOR0xFU1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIGRhdGFUeXBlOiBudW1iZXIgPSBnbC5GTE9BVCxcclxuICAgIHRhcmdldEJ1ZmZlclR5cGU6IG51bWJlciA9IGdsLkFSUkFZX0JVRkZFUixcclxuICAgIG1vZGU6IG51bWJlciA9IGdsLlRSSUFOR0xFU1xyXG4gICkge1xyXG4gICAgdGhpcy5fZWxlbWVudFNpemUgPSAwO1xyXG4gICAgdGhpcy5fZGF0YVR5cGUgPSBkYXRhVHlwZTtcclxuICAgIHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPSB0YXJnZXRCdWZmZXJUeXBlO1xyXG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGJ5dGUgc2l6ZVxyXG4gICAgc3dpdGNoICh0aGlzLl9kYXRhVHlwZSkge1xyXG4gICAgICBjYXNlIGdsLkZMT0FUOlxyXG4gICAgICAvLyBwb3NpdGl2ZSBvciBuZWdhdGl2ZVxyXG4gICAgICBjYXNlIGdsLklOVDpcclxuICAgICAgLy8gb25seSBwb3NpdGl2ZSBidXQgdHdpY2UgdGhlIHNpemUgb2YgaW50XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfSU5UOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gNDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5TSE9SVDpcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuQllURTpcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9CWVRFOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gMTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBkYXRhIHR5cGUgJHtkYXRhVHlwZS50b1N0cmluZygpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNpemUgb2YgZWxlbWVudHMgKiBudW1iZXIgb2YgYnl0ZXMgaW4gZWFjaCBlbGVtZW50XHJcbiAgICB0aGlzLl9idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKSBhcyBXZWJHTEJ1ZmZlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lzIHRoZSBidWZmZXJcclxuICAgKi9cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLl9idWZmZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZHMgdGhpcyBidWZmZXIuXHJcbiAgICogQHBhcmFtIG5vcm1hbGl6ZWQgSW5kaWNhdGVzIGlmIHRoaXMgZGF0YSBzaG91bGQgYmUgbm9ybWFsaXplZC4gRGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgYmluZChub3JtYWxpemVkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgdGhpcy5fYnVmZmVyKTtcclxuXHJcbiAgICBpZiAodGhpcy5faGFzQXR0cmlidXRlTG9jYXRpb24pIHtcclxuICAgICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICBpdC5sb2NhdGlvbixcclxuICAgICAgICAgIGl0LnNpemUsXHJcbiAgICAgICAgICB0aGlzLl9kYXRhVHlwZSxcclxuICAgICAgICAgIG5vcm1hbGl6ZWQsXHJcbiAgICAgICAgICB0aGlzLl9zdHJpZGUsXHJcbiAgICAgICAgICBpdC5vZmZzZXQgKiB0aGlzLl90eXBlU2l6ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGl0LmxvY2F0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIGluZm9ybWF0aW9uIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gdG8gYmUgYWRkZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWRkQXR0cmlidXRlTG9jYXRpb24oaW5mbzogQXR0cmlidXRlSW5mbyk6IHZvaWQge1xyXG4gICAgdGhpcy5faGFzQXR0cmlidXRlTG9jYXRpb24gPSB0cnVlO1xyXG4gICAgaW5mby5vZmZzZXQgPSB0aGlzLl9lbGVtZW50U2l6ZTtcclxuICAgIHRoaXMuX2F0dHJpYnV0ZXMucHVzaChpbmZvKTtcclxuICAgIHRoaXMuX2VsZW1lbnRTaXplICs9IGluZm8uc2l6ZTtcclxuICAgIHRoaXMuX3N0cmlkZSA9IHRoaXMuX2VsZW1lbnRTaXplICogdGhpcy5fdHlwZVNpemU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyB0aGUgY3VycmVudCBkYXRhIGluIHRoZSBidWZmZXIgd2l0aCBwcm92aWRlZCBkYXRhLlxyXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGJlIGxvYWRlZCBpbiB0aGUgYnVmZmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xyXG4gICAgdGhpcy5wdXNoQmFja0RhdGEoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgb3V0IGFsbCBkYXRhIGluIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNsZWFyRGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGEubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgZGF0YSB0byB0aGUgYnVmZmVyXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKi9cclxuICBwdWJsaWMgcHVzaEJhY2tEYXRhKGRhdGE6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGxvYWRzIHRoaXMgZGF0YSB0byB0aGUgR1BVXHJcbiAgICovXHJcbiAgcHVibGljIHVwbG9hZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgdGhpcy5fYnVmZmVyKTtcclxuXHJcbiAgICBsZXQgYnVmZmVyRGF0YTogQXJyYXlCdWZmZXI7XHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgZ2wuRkxPQVQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuSU5UOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEludDE2QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5CWVRFOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50OEFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBEYXRhIHR5cGUgZXJyb3IgaW4gcHVzaEJhY2tEYXRhKCkgZm9yIGRhdGF0eXBlICR7dGhpcy5fZGF0YVR5cGUudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnbC5idWZmZXJEYXRhKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIGJ1ZmZlckRhdGEsIGdsLlNUQVRJQ19EUkFXKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRHJhd3MgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkFSUkFZX0JVRkZFUikge1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKHRoaXMuX21vZGUsIDAsIHRoaXMuX2RhdGEubGVuZ3RoIC8gdGhpcy5fZWxlbWVudFNpemUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRCdWZmZXJUeXBlID09PSBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xyXG4gICAgICBnbC5kcmF3RWxlbWVudHModGhpcy5fbW9kZSwgdGhpcy5fZGF0YS5sZW5ndGgsIHRoaXMuX2RhdGFUeXBlLCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjMnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGRhdGEgZm9yIGEgc2luZ2xlIHZlcnRleFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlcnRleCB7XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyB0ZXhDb29yZHM6IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHg6IG51bWJlciA9IDAsXHJcbiAgICB5OiBudW1iZXIgPSAwLFxyXG4gICAgejogbnVtYmVyID0gMCxcclxuICAgIHR1OiBudW1iZXIgPSAwLFxyXG4gICAgdHY6IG51bWJlciA9IDBcclxuICApIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgdGhpcy5wb3NpdGlvbi56ID0gejtcclxuXHJcbiAgICB0aGlzLnRleENvb3Jkcy54ID0gdHU7XHJcbiAgICB0aGlzLnRleENvb3Jkcy55ID0gdHY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgYXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQodGhpcy5wb3NpdGlvbi50b0FycmF5KCkpO1xyXG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQodGhpcy50ZXhDb29yZHMudG9BcnJheSgpKTtcclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuLi9nbC9nbCc7XHJcbmltcG9ydCB7IEF0dHJpYnV0ZUluZm8sIEdMQnVmZmVyIH0gZnJvbSAnLi4vZ2wvZ2xCdWZmZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSAnLi92ZXJ0ZXgnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfd2lkdGg6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2hlaWdodDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfYnVmZmVyOiBHTEJ1ZmZlciB8IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgX21hdGVyaWFsOiBNYXRlcmlhbCB8IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgX21hdGVyaWFsTmFtZTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfdmVydGljZXM6IFZlcnRleFtdID0gW107XHJcbiAgcHJvdGVjdGVkIF9vcmlnaW46IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG1hdGVyaWFsTmFtZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDEwMCxcclxuICAgIGhlaWdodDogbnVtYmVyID0gMTAwXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSBtYXRlcmlhbE5hbWU7XHJcbiAgICB0aGlzLl9tYXRlcmlhbCA9IE1hdGVyaWFsTWFuYWdlci5nZXRNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3JpZ2luKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIHRoaXMuX29yaWdpbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgb3JpZ2luKHZhbHVlOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLl9vcmlnaW4gPSB2YWx1ZTtcclxuICAgIHRoaXMucmVjYWxjdWxhdGVWZXJ0aWNlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9idWZmZXIpIHtcclxuICAgICAgdGhpcy5fYnVmZmVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWxlYXNlTWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxOYW1lKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX21hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWxOYW1lID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9idWZmZXIgPSBuZXcgR0xCdWZmZXIoKTtcclxuXHJcbiAgICBsZXQgcG9zaXRpb25BdHRyaWJ1dGUgPSBuZXcgQXR0cmlidXRlSW5mbygpO1xyXG4gICAgLy8gUmVtb3ZlZCByZWZlcmVuY2UgdG8gc2hhZGVyLCBiYWQgcHJhY3RpY2UgdG8gcGFzcyBzaGFkZXIgaW5mbyB0byBzcHJpdGUgb24gbG9hZFxyXG4gICAgLy8gU3RpbGwgbm90IGlkZWFsIChyZWZlcmVuY2luZyBhX2xvY2F0aW9uIGluIHZlcnRleFNoYWRlclNvdXJjZSBieSBoYXJkY29kaW5nIDApXHJcbiAgICAvLyBFYWNoIHZhcmlhYmxlIGluIHNoYWRlclNvdXJjZSBpcyByZWZlcmVuY2VkIGJ5IGluZGV4IGluIG9yZGVyIG9mIGRlY2xhcmF0aW9uIChlLmcuIGJlY2F1c2UgYV9sb2NhdGlvbiBpcyB0aGUgZmlyc3QgdmFyaWFibGUgaXQgaXMgaW5kZXggMClcclxuICAgIHBvc2l0aW9uQXR0cmlidXRlLmxvY2F0aW9uID0gMDtcclxuICAgIHBvc2l0aW9uQXR0cmlidXRlLnNpemUgPSAzO1xyXG4gICAgdGhpcy5fYnVmZmVyLmFkZEF0dHJpYnV0ZUxvY2F0aW9uKHBvc2l0aW9uQXR0cmlidXRlKTtcclxuXHJcbiAgICBsZXQgdGV4Q29vcmRBdHRyaWJ1dGUgPSBuZXcgQXR0cmlidXRlSW5mbygpO1xyXG4gICAgdGV4Q29vcmRBdHRyaWJ1dGUubG9jYXRpb24gPSAxO1xyXG4gICAgdGV4Q29vcmRBdHRyaWJ1dGUuc2l6ZSA9IDI7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24odGV4Q29vcmRBdHRyaWJ1dGUpO1xyXG5cclxuICAgIHRoaXMuY2FsY3VsYXRlVmVydGljZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgZHJhdyhzaGFkZXI6IFNoYWRlciwgbW9kZWw6IE1hdHJpeDR4NCk6IHZvaWQge1xyXG4gICAgbGV0IG1vZGVsTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X21vZGVsJyk7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTG9jYXRpb24sIGZhbHNlLCBtb2RlbC50b0Zsb2F0MzJBcnJheSgpKTtcclxuXHJcbiAgICBjb25zdCBjb2xvckxvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV90aW50Jyk7XHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWwpIHtcclxuICAgICAgZ2wudW5pZm9ybTRmdihjb2xvckxvY2F0aW9uLCB0aGlzLl9tYXRlcmlhbC50aW50LnRvRmxvYXQzMkFycmF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbD8uZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgdGhpcy5fbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUuYWN0aXZhdGVBbmRCaW5kKDApO1xyXG4gICAgICBjb25zdCBkaWZmdXNlTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X2RpZmZ1c2UnKTtcclxuICAgICAgLy8gcGFzcyBhIHNpbmdsZSBpbnRlZ2VyXHJcbiAgICAgIGdsLnVuaWZvcm0xaShkaWZmdXNlTG9jYXRpb24sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9idWZmZXIpIHtcclxuICAgICAgdGhpcy5fYnVmZmVyLmJpbmQoKTtcclxuICAgICAgdGhpcy5fYnVmZmVyLmRyYXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXNzaWduZWQgYnVmZmVyIGZvciBzcHJpdGUgJyArIHRoaXMuX25hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVZlcnRpY2VzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbWluWCA9IC0odGhpcy5fd2lkdGggKiB0aGlzLl9vcmlnaW4ueCk7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5fd2lkdGggKiAoMS4wIC0gdGhpcy5fb3JpZ2luLngpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSAtKHRoaXMuX3dpZHRoICogdGhpcy5fb3JpZ2luLnkpO1xyXG4gICAgY29uc3QgbWF4WSA9IHRoaXMuX2hlaWdodCAqICgxLjAgLSB0aGlzLl9vcmlnaW4ueSk7XHJcblxyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICB0aGlzLl92ZXJ0aWNlcyA9IFtcclxuICAgICAgLy8geCwgeSwgeiwgVTogdGV4dHVyZSB4LCBWOiB0ZXh0dXJlIHlcclxuICAgICAgLy8gdHJpYW5nbGUgMVxyXG4gICAgICAvLyBwb2ludCAxXHJcbiAgICAgIG5ldyBWZXJ0ZXgobWluWCwgbWluWSwgMCwgMCwgMCwpLFxyXG4gICAgICAvLyBwb2ludCAyXHJcbiAgICAgIG5ldyBWZXJ0ZXgobWluWCwgbWF4WSwgMCwgMCwgMS4wLCksXHJcbiAgICAgIC8vIHBvaW50IDNcclxuICAgICAgbmV3IFZlcnRleChtYXhYLCBtYXhZLCAwLCAxLjAsIDEuMCwpLFxyXG4gICAgICAvLyB0cmlhbmdsZSAyXHJcbiAgICAgIC8vIHBvaW50IDRcclxuICAgICAgbmV3IFZlcnRleChtYXhYLCBtYXhZLCAwLCAxLjAsIDEuMCksXHJcbiAgICAgIC8vIHBvaW50IDVcclxuICAgICAgbmV3IFZlcnRleChtYXhYLCBtaW5ZLCAwLCAxLjAsIDApLFxyXG4gICAgICAvLyBwb2ludCA2XHJcbiAgICAgIG5ldyBWZXJ0ZXgobWluWCwgbWluWSwgMCwgMCwgMCksXHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgdGhpcy5fYnVmZmVyPy5wdXNoQmFja0RhdGEodi50b0FycmF5KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyPy51cGxvYWQoKTtcclxuICAgIHRoaXMuX2J1ZmZlcj8udW5iaW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVjYWxjdWxhdGVWZXJ0aWNlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1pblggPSAtKHRoaXMuX3dpZHRoICogdGhpcy5fb3JpZ2luLngpO1xyXG4gICAgY29uc3QgbWF4WCA9IHRoaXMuX3dpZHRoICogKDEuMCAtIHRoaXMuX29yaWdpbi54KTtcclxuXHJcbiAgICBjb25zdCBtaW5ZID0gLSh0aGlzLl9oZWlnaHQgKiB0aGlzLl9vcmlnaW4ueSk7XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5faGVpZ2h0ICogKDEuMCAtIHRoaXMuX29yaWdpbi55KTtcclxuXHJcbiAgICB0aGlzLl92ZXJ0aWNlc1swXT8ucG9zaXRpb24uc2V0KG1pblgsIG1pblkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbMV0/LnBvc2l0aW9uLnNldChtaW5YLCBtYXhZKTtcclxuICAgIHRoaXMuX3ZlcnRpY2VzWzJdPy5wb3NpdGlvbi5zZXQobWF4WCwgbWF4WSk7XHJcblxyXG4gICAgdGhpcy5fdmVydGljZXNbM10/LnBvc2l0aW9uLnNldChtYXhYLCBtYXhZKTtcclxuICAgIHRoaXMuX3ZlcnRpY2VzWzRdPy5wb3NpdGlvbi5zZXQobWF4WCwgbWluWSk7XHJcbiAgICB0aGlzLl92ZXJ0aWNlc1s1XT8ucG9zaXRpb24uc2V0KG1pblgsIG1pblkpO1xyXG4gICAgdGhpcy5fYnVmZmVyPy5jbGVhckRhdGEoKTtcclxuXHJcbiAgICB0aGlzLl92ZXJ0aWNlcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8ucHVzaEJhY2tEYXRhKHYudG9BcnJheSgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2J1ZmZlcj8udXBsb2FkKCk7XHJcbiAgICB0aGlzLl9idWZmZXI/LnVuYmluZCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmNsYXNzIFVWSW5mbyB7XHJcbiAgcHVibGljIG1pbjogVmVjdG9yMjtcclxuICBwdWJsaWMgbWF4OiBWZWN0b3IyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWluOiBWZWN0b3IyLCBtYXg6IFZlY3RvcjIpIHtcclxuICAgIHRoaXMubWluID0gbWluO1xyXG4gICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGUgZXh0ZW5kcyBTcHJpdGUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX2ZyYW1lSGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZnJhbWVXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZyYW1lQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9mcmFtZVNlcXVlbmNlOiBudW1iZXJbXTtcclxuICAvLyBUT0RPOiBNYWtlIHRoaXMgY29uZmlndXJhYmxlXHJcbiAgcHJpdmF0ZSBfZnJhbWVUaW1lOiBudW1iZXIgPSAxMjE7XHJcbiAgcHJpdmF0ZSBfZnJhbWVVVnM6IFVWSW5mb1tdID0gW107XHJcbiAgcHJpdmF0ZSBfY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRGcmFtZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9hc3NldExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Fzc2V0V2lkdGg6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBfYXNzZXRIZWlnaHQ6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBfaXNQbGF5aW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgbWF0ZXJpYWxOYW1lOiBzdHJpbmcsXHJcbiAgICB3aWR0aDogbnVtYmVyID0gMTAwLFxyXG4gICAgaGVpZ2h0OiBudW1iZXIgPSAxMDAsXHJcbiAgICBmcmFtZVdpZHRoOiBudW1iZXIgPSAxMCxcclxuICAgIGZyYW1lSGVpZ2h0OiBudW1iZXIgPSAxMCxcclxuICAgIGZyYW1lQ291bnQ6IG51bWJlciA9IDEsXHJcbiAgICBmcmFtZVNlcXVlbmNlOiBudW1iZXJbXSA9IFtdXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuYW1lLCBtYXRlcmlhbE5hbWUsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuX2ZyYW1lV2lkdGggPSBmcmFtZVdpZHRoO1xyXG4gICAgdGhpcy5fZnJhbWVIZWlnaHQgPSBmcmFtZUhlaWdodDtcclxuICAgIHRoaXMuX2ZyYW1lQ291bnQgPSBmcmFtZUNvdW50O1xyXG4gICAgdGhpcy5fZnJhbWVTZXF1ZW5jZSA9IGZyYW1lU2VxdWVuY2U7XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsKSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX21hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlTmFtZSxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzUGxheWluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1BsYXlpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyYW1lKGZyYW1lTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChmcmFtZU51bWJlciA+PSB0aGlzLl9mcmFtZUNvdW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnRnJhbWUgaXMgb3VyIG9mIHJhbmdlOicgK1xyXG4gICAgICAgICAgZnJhbWVOdW1iZXIgK1xyXG4gICAgICAgICAgJ1xcbmZyYW1lQ291bnQ6ICcgK1xyXG4gICAgICAgICAgdGhpcy5fZnJhbWVDb3VudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRGcmFtZSA9IGZyYW1lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1lc3NhZ2UuY29kZSA9PT1cclxuICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgbGV0IGFzc2V0ID0gbWVzc2FnZS5jb250ZXh0IGFzIEltYWdlQXNzZXQ7XHJcbiAgICAgIHRoaXMuX2Fzc2V0SGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLl9hc3NldFdpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVVZzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG5cclxuICAgIGlmICghdGhpcy5fYXNzZXRMb2FkZWQpIHtcclxuICAgICAgdGhpcy5zZXR1cEZyb21NYXRlcmlhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vIEhhY2sgYXJvdW5kIGZvciBub3QgYmVpbmcgaW5zdGFudGlhdGVkIGJlZm9yZSBvbk1lc3NhZ2UgaXMgc2VudFxyXG4gICAgLy8gUmV2aXNpdFxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsICYmICF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICB0aGlzLnNldHVwRnJvbU1hdGVyaWFsKCk7XHJcbiAgICAgIGlmICghdGhpcy5fYXNzZXRMb2FkZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2lzUGxheWluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFRpbWUgKz0gdGltZTtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50VGltZSA+IHRoaXMuX2ZyYW1lVGltZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50RnJhbWUrKztcclxuICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSAwO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRGcmFtZSA+PSB0aGlzLl9mcmFtZVNlcXVlbmNlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZyYW1lVVZzID0gdGhpcy5fZnJhbWVTZXF1ZW5jZVt0aGlzLl9jdXJyZW50RnJhbWVdO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1swXS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbik7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzFdLnRleENvb3Jkcy5jb3B5RnJvbShcclxuICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4ueCxcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgueVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbMl0udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1szXS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heCk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzRdLnRleENvb3Jkcy5jb3B5RnJvbShcclxuICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgueCxcclxuICAgICAgICAgIHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4ueVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbNV0udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4pO1xyXG5cclxuICAgICAgdGhpcy5fYnVmZmVyPy5jbGVhckRhdGEoKTtcclxuICAgICAgdGhpcy5fdmVydGljZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcj8ucHVzaEJhY2tEYXRhKHYudG9BcnJheSgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8udXBsb2FkKCk7XHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8udW5iaW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVVVnMoKTogdm9pZCB7XHJcbiAgICBsZXQgdG90YWxXaWR0aDogbnVtYmVyID0gMDtcclxuICAgIGxldCB5VmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZyYW1lQ291bnQ7IGkrKykge1xyXG4gICAgICB0b3RhbFdpZHRoID0gaSAqIHRoaXMuX2ZyYW1lV2lkdGg7XHJcbiAgICAgIGlmICh0b3RhbFdpZHRoID4gdGhpcy5fYXNzZXRXaWR0aCkge1xyXG4gICAgICAgIHlWYWx1ZSsrO1xyXG4gICAgICAgIHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdSA9IChpICogdGhpcy5fZnJhbWVXaWR0aCkgLyB0aGlzLl9hc3NldFdpZHRoO1xyXG4gICAgICBsZXQgdiA9ICh5VmFsdWUgKiB0aGlzLl9mcmFtZUhlaWdodCkgLyB0aGlzLl9hc3NldEhlaWdodDtcclxuICAgICAgbGV0IG1pbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKHUsIHYpO1xyXG5cclxuICAgICAgbGV0IHVNYXggPSAoaSAqIHRoaXMuX2ZyYW1lV2lkdGggKyB0aGlzLl9mcmFtZVdpZHRoKSAvIHRoaXMuX2Fzc2V0V2lkdGg7XHJcbiAgICAgIGxldCB2TWF4ID1cclxuICAgICAgICAoeVZhbHVlICogdGhpcy5fZnJhbWVIZWlnaHQgKyB0aGlzLl9mcmFtZUhlaWdodCkgLyB0aGlzLl9hc3NldEhlaWdodDtcclxuICAgICAgbGV0IG1heDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKHVNYXgsIHZNYXgpO1xyXG5cclxuICAgICAgdGhpcy5fZnJhbWVVVnMucHVzaChuZXcgVVZJbmZvKG1pbiwgbWF4KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwRnJvbU1hdGVyaWFsKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IE1hdGVyaWFsTWFuYWdlci5nZXRNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gICAgICBpZiAobWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlPy5pc0xvYWRlZCkge1xyXG4gICAgICAgIGlmIChBc3NldE1hbmFnZXIuaXNBc3NldExvYWRlZChtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZU5hbWUpKSB7XHJcbiAgICAgICAgICB0aGlzLl9hc3NldEhlaWdodCA9IG1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLmhlaWdodDtcclxuICAgICAgICAgIHRoaXMuX2Fzc2V0V2lkdGggPSBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS53aWR0aDtcclxuICAgICAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVVZzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2NvcmUvZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi4vY29yZS93b3JsZC9zaW1PYmplY3QnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgcHJvdGVjdGVkIF9vd25lcjogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gIHByb3RlY3RlZCBfZGF0YTogSUNvbXBvbmVudERhdGE7XHJcblxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJQ29tcG9uZW50RGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG93bmVyKCk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3duZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuLi9jb3JlL2dyYXBoaWNzL3Nwcml0ZSc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL2NvcmUvbWF0aC92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnREYXRhIGltcGxlbWVudHMgSUNvbXBvbmVudERhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgbWF0ZXJpYWxOYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgb3JpZ2luOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ud2lkdGgpIHtcclxuICAgICAgdGhpcy53aWR0aCA9IE51bWJlcihqc29uLndpZHRoKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLmhlaWdodCkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE51bWJlcihqc29uLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5uYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ubWF0ZXJpYWxOYW1lKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxOYW1lID0gU3RyaW5nKGpzb24ubWF0ZXJpYWxOYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLm9yaWdpbikge1xyXG4gICAgICB0aGlzLm9yaWdpbi5zZXRGcm9tSnNvbihqc29uLm9yaWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnc3ByaXRlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgU3ByaXRlQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFNwcml0ZUNvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogU3ByaXRlQ29tcG9uZW50RGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBpZiAoZGF0YS53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3dpZHRoID0gTnVtYmVyKGRhdGEud2lkdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5faGVpZ2h0ID0gTnVtYmVyKGRhdGEuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUoXHJcbiAgICAgIGRhdGEubmFtZSxcclxuICAgICAgZGF0YS5tYXRlcmlhbE5hbWUsXHJcbiAgICAgIHRoaXMuX3dpZHRoLFxyXG4gICAgICB0aGlzLl9oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFkYXRhLm9yaWdpbi5lcXVhbHMoVmVjdG9yMy56ZXJvKSkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUub3JpZ2luLmNvcHlGcm9tKGRhdGEub3JpZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLmRyYXcoc2hhZGVyLCB0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3ByaXRlIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9hbmltYXRlZFNwcml0ZSc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9jb3JlL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vc3ByaXRlQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGFcclxuICBleHRlbmRzIFNwcml0ZUNvbXBvbmVudERhdGFcclxuICBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhXHJcbntcclxuICBwdWJsaWMgZnJhbWVXaWR0aDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgZnJhbWVIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lU2VxdWVuY2U6IG51bWJlcltdID0gW107XHJcbiAgcHVibGljIGF1dG9QbGF5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgc3VwZXIuc2V0RnJvbUpzb24oanNvbik7XHJcblxyXG4gICAgaWYgKGpzb24uYXV0b1BsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmF1dG9QbGF5ID0gQm9vbGVhbihqc29uLmF1dG9QbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZVdpZHRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZVdpZHRoIHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVXaWR0aCA9IE51bWJlcihqc29uLmZyYW1lV2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUhlaWdodCB0byBiZSBkZWZpbmVkJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcmFtZUhlaWdodCA9IE51bWJlcihqc29uLmZyYW1lSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZUNvdW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUNvdW50IHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IE51bWJlcihqc29uLmZyYW1lQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lU2VxdWVuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0FuaW1hdGVkIHNwcml0ZSBkYXRhIHJlcXVpcmVzIGZyYW1lU2VxdWVuY2UgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVTZXF1ZW5jZSA9IGpzb24uZnJhbWVTZXF1ZW5jZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ2FuaW1hdGVkU3ByaXRlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9hdXRvcFBsYXk6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBBbmltYXRlZFNwcml0ZTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50RGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICB0aGlzLl9hdXRvcFBsYXkgPSBkYXRhLmF1dG9QbGF5O1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBBbmltYXRlZFNwcml0ZShcclxuICAgICAgZGF0YS5uYW1lLFxyXG4gICAgICBkYXRhLm1hdGVyaWFsTmFtZSxcclxuICAgICAgZGF0YS5mcmFtZVdpZHRoLFxyXG4gICAgICBkYXRhLmZyYW1lSGVpZ2h0LFxyXG4gICAgICBkYXRhLmZyYW1lV2lkdGgsXHJcbiAgICAgIGRhdGEuZnJhbWVIZWlnaHQsXHJcbiAgICAgIGRhdGEuZnJhbWVDb3VudCxcclxuICAgICAgZGF0YS5mcmFtZVNlcXVlbmNlXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEhhdmUgdG8gZG8gdGhpcyBldmVuIHRob3VnaCBjYWxsaW5nIHN1cGVyIGJlY2F1c2Ugb2YgdGhpcy5fc3ByaXRlIGNhbGxcclxuICAgIC8vIGFib3ZlIHdpcGVzIG91dCB0aGUgb3JpZ2luXHJcbiAgICBpZiAoIWRhdGEub3JpZ2luLmVxdWFscyhWZWN0b3IzLnplcm8pKSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5vcmlnaW4uY29weUZyb20oZGF0YS5vcmlnaW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc1BsYXlpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3ByaXRlLmlzUGxheWluZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fYXV0b3BQbGF5KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLnVwZGF0ZSh0aW1lKTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcmFtZShmcmFtZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUuc2V0RnJhbWUoZnJhbWVOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUuZHJhdyhzaGFkZXIsIHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVuZGVyKHNoYWRlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBJU2hhcGUyRCB9IGZyb20gJy4vSVNoYXBlMkQnO1xyXG5pbXBvcnQgeyBSZWN0YW5nbGUyRCB9IGZyb20gJy4vcmVjdGFuZ2xlMmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZTJEIGltcGxlbWVudHMgSVNoYXBlMkQge1xyXG4gIHB1YmxpYyBvcmlnaW46IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyByYWRpdXM6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBvZmZzZXQoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIHRoaXMub3JpZ2luLngsXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIHRoaXMub3JpZ2luLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ub3JpZ2luKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnNldEZyb21Kc29uKGpzb24ub3JpZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5yYWRpdXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpcmNsZTJEIHJlcXVpcmVzIHJhZGl1cyB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yYWRpdXMgPSBqc29uLnJhZGl1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnRlcnNlY3RzKG90aGVyU2hhcGU6IElTaGFwZTJEKTogYm9vbGVhbiB7XHJcbiAgICBpZiAob3RoZXJTaGFwZSBpbnN0YW5jZW9mIENpcmNsZTJEICYmIHRoaXMucmFkaXVzICYmIG90aGVyU2hhcGUucmFkaXVzKSB7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoXHJcbiAgICAgICAgVmVjdG9yMi5kaXN0YW5jZShvdGhlclNoYXBlLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByYWRpdXNMZW5ndGhzID0gdGhpcy5yYWRpdXMgKyBvdGhlclNoYXBlLnJhZGl1cztcclxuICAgICAgaWYgKGRpc3RhbmNlIDw9IHJhZGl1c0xlbmd0aHMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdGhlclNoYXBlIGluc3RhbmNlb2YgUmVjdGFuZ2xlMkQpIHtcclxuICAgICAgaWYgKCFvdGhlclNoYXBlLndpZHRoIHx8ICFvdGhlclNoYXBlLmhlaWdodCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvdGhlclNoYXBlfSByZXF1aXJlcyBhIGhlaWdodCBhbmQgd2lkdGhgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXN9IHJlcXVyZXMgYSByYWRpdXNgKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZGVsdGFYID1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCBvdGhlclNoYXBlLnBvc2l0aW9uLnggKyBvdGhlclNoYXBlLndpZHRoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGxldCBkZWx0YVkgPVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIG90aGVyU2hhcGUucG9zaXRpb24ueSArIG90aGVyU2hhcGUuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICAgIGlmIChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkgPCB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb2ludEluU2hhcGUocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFic0Rpc3RhbmNlID0gTWF0aC5hYnMoVmVjdG9yMi5kaXN0YW5jZSh0aGlzLnBvc2l0aW9uLCBwb2ludCkpO1xyXG4gICAgaWYgKHRoaXMucmFkaXVzICYmIGFic0Rpc3RhbmNlIDw9IHRoaXMucmFkaXVzKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IENpcmNsZTJEIH0gZnJvbSAnLi9jaXJjbGUyRCc7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi9JU2hhcGUyRCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlMkQgaW1wbGVtZW50cyBJU2hhcGUyRCB7XHJcbiAgcHVibGljIG9yaWdpbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcblxyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBvZmZzZXQoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLndpZHRoICogdGhpcy5vcmlnaW4ueCxcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuaGVpZ2h0ICogdGhpcy5vcmlnaW4ueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5vcmlnaW4pIHtcclxuICAgICAgdGhpcy5vcmlnaW4uc2V0RnJvbUpzb24oanNvbi5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLndpZHRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWN0YW5nbGUyZCByZXF1aXJlcyB3aWR0aCB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9IE51bWJlcihqc29uLndpZHRoKTtcclxuXHJcbiAgICBpZiAoanNvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlY3RhbmdsZTJkIHJlcXVpcmVzIGhlaWdodCB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBOdW1iZXIoanNvbi5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGludGVyc2VjdHMob3RoZXJTaGFwZTogSVNoYXBlMkQpOiBib29sZWFuIHtcclxuICAgIGlmIChcclxuICAgICAgb3RoZXJTaGFwZSBpbnN0YW5jZW9mIFJlY3RhbmdsZTJEICYmXHJcbiAgICAgIG90aGVyU2hhcGUud2lkdGggJiZcclxuICAgICAgb3RoZXJTaGFwZS5oZWlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHRoaXMucG9pbnRJblNoYXBlKG90aGVyU2hhcGUucG9zaXRpb24pIHx8XHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUoXHJcbiAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54ICsgb3RoZXJTaGFwZS53aWR0aCxcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi55XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB8fFxyXG4gICAgICAgIHRoaXMucG9pbnRJblNoYXBlKFxyXG4gICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueCArIG90aGVyU2hhcGUud2lkdGgsXHJcbiAgICAgICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueSArIG90aGVyU2hhcGUuaGVpZ2h0XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB8fFxyXG4gICAgICAgIHRoaXMucG9pbnRJblNoYXBlKFxyXG4gICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi55ICsgb3RoZXJTaGFwZS5oZWlnaHRcclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBvdGhlclNoYXBlIGluc3RhbmNlb2YgQ2lyY2xlMkQgJiZcclxuICAgICAgb3RoZXJTaGFwZS5yYWRpdXMgJiZcclxuICAgICAgdGhpcy53aWR0aCAmJlxyXG4gICAgICB0aGlzLmhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGRlbHRhWCA9XHJcbiAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54IC1cclxuICAgICAgICBNYXRoLm1heChcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIE1hdGgubWluKG90aGVyU2hhcGUucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgY29uc3QgZGVsdGFZID1cclxuICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnkgLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgTWF0aC5taW4ob3RoZXJTaGFwZS5wb3NpdGlvbi55LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSA8XHJcbiAgICAgICAgb3RoZXJTaGFwZS5yYWRpdXMgKiBvdGhlclNoYXBlLnJhZGl1c1xyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb2ludEluU2hhcGUocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLndpZHRoICYmIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIGxldCB4ID0gdGhpcy53aWR0aCA8IDAgPyB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoIDogdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICBsZXQgeSA9IHRoaXMuaGVpZ2h0IDwgMCA/IHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IDogdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgbGV0IGV4dGVudFggPVxyXG4gICAgICAgIHRoaXMud2lkdGggPCAwID8gdGhpcy5wb3NpdGlvbi54IDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aDtcclxuICAgICAgbGV0IGV4dGVudFkgPVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0IDwgMCA/IHRoaXMucG9zaXRpb24ueSA6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBvaW50LnggPj0geCAmJlxyXG4gICAgICAgIHBvaW50LnggPD0gZXh0ZW50WCAmJlxyXG4gICAgICAgIHBvaW50LnkgPj0geSAmJlxyXG4gICAgICAgIHBvaW50LnkgPD0gZXh0ZW50WVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9JU2hhcGUyRCc7XHJcbmltcG9ydCB7IFJlY3RhbmdsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9yZWN0YW5nbGUyZCc7XHJcbmltcG9ydCB7IENpcmNsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9jaXJjbGUyRCc7XHJcbmltcG9ydCB7IENvbGxpc2lvbk1hbmFnZXIgfSBmcm9tICcuLi9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQ29tcG9uZW50RGF0YSBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNoYXBlOiBJU2hhcGUyRCB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgc3RhdGljOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnN0YXRpYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGljID0gQm9vbGVhbihqc29uLnN0YXRpYyk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5zaGFwZT8udHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKFN0cmluZyhqc29uLnNoYXBlLnR5cGUpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxyXG4gICAgICAgICAgdGhpcy5zaGFwZSA9IG5ldyBSZWN0YW5nbGUyRCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgIHRoaXMuc2hhcGUgPSBuZXcgQ2lyY2xlMkQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHNoYXBlIHR5cGU6ICcgKyBqc29uLnNoYXBlLnR5cGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNoYXBlLnNldEZyb21Kc29uKGpzb24uc2hhcGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdDb2xsaXNpb25Db21wb25lbnREYXRhIHJlcXVpcmVzIFwic2hhcGVcIiBhbmQgXCJzaGFwZS50eXBlXCIgdG8gYmUgcHJlc2VudC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnY29sbGlzaW9uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgQ29sbGlzaW9uQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbGxpc2lvbkNvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zaGFwZTogSVNoYXBlMkQ7XHJcbiAgcHJpdmF0ZSBfc3RhdGljOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogQ29sbGlzaW9uQ29tcG9uZW50RGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgaWYgKCFkYXRhLnNoYXBlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBpcyBtaXNzaW5nIFwic2hhcGVcIiBwcm9wZXJ0eTonKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NoYXBlID0gZGF0YS5zaGFwZTtcclxuICAgIHRoaXMuX3N0YXRpYyA9IGRhdGEuc3RhdGljO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzaGFwZSgpOiBJU2hhcGUyRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hhcGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzU3RhdGljKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRpYztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG5cclxuICAgIGlmICh0aGlzLm93bmVyKSB7XHJcbiAgICAgIHRoaXMuX3NoYXBlLnBvc2l0aW9uLmNvcHlGcm9tKFxyXG4gICAgICAgIHRoaXMub3duZXIuZ2V0V29ybGRQb3NpdGlvbigpLnRvVmVjdG9yMigpLnN1YnRyYWN0KHRoaXMuX3NoYXBlLm9mZnNldClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWxsIHRoZSBjb2xsaXNpb24gbWFuYWdlciB0aGF0IHdlIGV4aXN0LlxyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5yZWdpc3RlckNvbGxpc2lvbkNvbXBvbmVudCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vd25lcikge1xyXG4gICAgICB0aGlzLl9zaGFwZS5wb3NpdGlvbi5jb3B5RnJvbShcclxuICAgICAgICB0aGlzLm93bmVyLmdldFdvcmxkUG9zaXRpb24oKS50b1ZlY3RvcjIoKS5zdWJ0cmFjdCh0aGlzLl9zaGFwZS5vZmZzZXQpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgLy9pZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAvL3RoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIC8vfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ29sbGlzaW9uRW50cnkob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge31cclxuICBwdWJsaWMgb25Db2xsaXNpb25VcGRhdGUob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge31cclxuICBwdWJsaWMgb25Db2xsaXNpb25FeGl0KG90aGVyOiBDb2xsaXNpb25Db21wb25lbnQpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZ2lzdGVyZWRCdWlsZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUNvbXBvbmVudEJ1aWxkZXIgfSA9XHJcbiAgICB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUNvbXBvbmVudEJ1aWxkZXIpOiB2b2lkIHtcclxuICAgIENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tidWlsZGVyLnR5cGVdID0gYnVpbGRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdENvbXBvbmVudChqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGlmIChqc29uLnR5cGUpIHtcclxuICAgICAgaWYgKENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tTdHJpbmcoanNvbi50eXBlKV0pIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdDb21wb25lbnQgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ0NvbXBvbmVudCBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNvdW5kRWZmZWN0IHtcclxuICBwcml2YXRlIF9wbGF5ZXI6IEhUTUxBdWRpb0VsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBhc3NldFBhdGg6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGFzc2V0UGF0aDogc3RyaW5nLCBsb29wOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgQXVkaW8oYXNzZXRQYXRoKTtcclxuICAgIHRoaXMuX3BsYXllci52b2x1bWUgPSAwLjA1O1xyXG4gICAgdGhpcy5hc3NldFBhdGggPSBhc3NldFBhdGg7XHJcbiAgICB0aGlzLl9wbGF5ZXIubG9vcCA9IGxvb3A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyLmxvb3A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3BsYXllci5sb29wID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX3BsYXllciA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1BhdXNlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGF5ZXIucGF1c2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gICAgdGhpcy5fcGxheWVyLmN1cnJlbnRUaW1lID0gMDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9zb3VuZEVmZmVjdHM6IHsgW25hbWU6IHN0cmluZ106IFNvdW5kRWZmZWN0IH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkU291bmRGaWxlKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgYXNzZXRQYXRoOiBzdHJpbmcsXHJcbiAgICBsb29wOiBib29sZWFuXHJcbiAgKTogdm9pZCB7XHJcbiAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSA9IG5ldyBTb3VuZEVmZmVjdChhc3NldFBhdGgsIGxvb3ApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwbGF5U291bmQobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0pIHtcclxuICAgICAgQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYGNvdWxkIG5vdCBwbGF5IHNvdW5kICR7bmFtZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcFNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGF1c2VTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSkge1xyXG4gICAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXS5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNvdW5kID0gQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV07XHJcbiAgICBpZiAoc291bmQpIHtcclxuICAgICAgc291bmQuaXNQYXVzZWQoKSA/IHNvdW5kLnBsYXkoKSA6IHNvdW5kLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQucGF1c2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdG9wQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfcmVnaXN0ZXJlZEJ1aWxkZXJzOiB7IFt0eXBlOiBzdHJpbmddOiBJQmVoYXZpb3JCdWlsZGVyIH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUJlaGF2aW9yQnVpbGRlcik6IHZvaWQge1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RCZWhhdmlvcihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgaWYgKGpzb24udHlwZSkge1xyXG4gICAgICBpZiAoQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIEJlaGF2aW9yTWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdCZWhhdmlvciBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAnQmVoYXZpb3IgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBlbnVtIEtleXMge1xyXG4gIExFRlQgPSAzNyxcclxuICBVUCA9IDM4LFxyXG4gIFJJR0hUID0gMzksXHJcbiAgRE9XTiA9IDQwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VDb250ZXh0IHtcclxuICBwdWJsaWMgbGVmdERvd246IGJvb2xlYW47XHJcbiAgcHVibGljIHJpZ2h0RG93bjogYm9vbGVhbjtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsZWZ0RG93bjogYm9vbGVhbiwgcmlnaHREb3duOiBib29sZWFuLCBwb3NpdGlvbjogVmVjdG9yMikge1xyXG4gICAgdGhpcy5sZWZ0RG93biA9IGxlZnREb3duO1xyXG4gICAgdGhpcy5yaWdodERvd24gPSByaWdodERvd247XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfa2V5czogYm9vbGVhbltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzTW91c2VYOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzTW91c2VZOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21vdXNlWDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9tb3VzZVk6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHREb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2ldID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBJbnB1dE1hbmFnZXIub25LZXlEb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIElucHV0TWFuYWdlci5vbktleVVwKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBJbnB1dE1hbmFnZXIub25Nb3VzZU1vdmUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIElucHV0TWFuYWdlci5vbk1vdXNlRG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIElucHV0TWFuYWdlci5vbk1vdXNlVXApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0tleURvd24oa2V5OiBLZXlzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gSW5wdXRNYW5hZ2VyLl9rZXlzW2tleV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldE1vdXNlUG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5fbW91c2VYLCB0aGlzLl9tb3VzZVkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX2tleXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgLy9pZiAoZXZlbnQua2V5Q29kZSAhPT0gMTYgJiYgZXZlbnQua2V5Q29kZSAhPT0gMTcgJiYgZXZlbnQua2V5Q29kZSAhPT0gNzMpIHtcclxuICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvL31cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XHJcbiAgICAvLyBpZiAoZXZlbnQua2V5Q29kZSAhPT0gMTYgJiYgZXZlbnQua2V5Q29kZSAhPT0gMTcgJiYgZXZlbnQua2V5Q29kZSAhPT0gNzMpIHtcclxuICAgIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWCA9IElucHV0TWFuYWdlci5fbW91c2VYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWSA9IElucHV0TWFuYWdlci5fbW91c2VZO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVggPSBldmVudC5jbGllbnRYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVkgPSBldmVudC5jbGllbnRZO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgTWVzc2FnZS5zZW5kKFxyXG4gICAgICAnTU9VU0VfRE9XTicsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9yaWdodERvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBNZXNzYWdlLnNlbmQoXHJcbiAgICAgICdNT1VTRV9VUCcsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL3dvcmxkL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUJlaGF2aW9yIGltcGxlbWVudHMgSUJlaGF2aW9yIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX2RhdGE6IElCZWhhdmlvckRhdGE7XHJcbiAgcHJvdGVjdGVkIF9vd25lcjogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUJlaGF2aW9yRGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLl9kYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgYXBwbHkodXNlckRhdGE6IGFueSk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIsIEtleXMgfSBmcm9tICcuLi9pbnB1dC9pbnB1dE1hbmFnZXInO1xyXG5pbXBvcnQgeyBCYXNlQmVoYXZpb3IgfSBmcm9tICcuL2Jhc2VCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5zcGVlZCkge1xyXG4gICAgICB0aGlzLnNwZWVkID0gTnVtYmVyKGpzb24uc3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAna2V5Ym9hcmRNb3ZlbWVudCc7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuTEVGVCkgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLlJJR0hUKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuVVApICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5ET1dOKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hdGhFeHRlbnNpb25zIHtcclxuICBwdWJsaWMgc3RhdGljIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodmFsdWUgPCBtaW4pIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkZWdUb1JhZChkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODAuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmFkVG9EZWcocmFkaWFuczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAocmFkaWFucyAqIDE4MC4wKSAvIE1hdGguUEk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyhNYXRoIGFzIGFueSkuY2xhbXAgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuLy9pZiAodmFsdWUgPCBtaW4pIHtcclxuLy9yZXR1cm4gbWluO1xyXG4vL31cclxuXHJcbi8vaWYgKHZhbHVlID4gbWF4KSB7XHJcbi8vcmV0dXJuIG1heDtcclxuLy99XHJcblxyXG4vL3JldHVybiB2YWx1ZTtcclxuLy99O1xyXG5cclxuLy8oTWF0aCBhcyBhbnkpLmRlZ1RvUmFkID0gKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciA9PiB7XHJcbi8vcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODAuMDtcclxuLy99O1xyXG5cclxuLy8oTWF0aCBhcyBhbnkpLnJhZFRvRGVnID0gKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciA9PiB7XHJcbi8vcmV0dXJuIChyYWRpYW5zICogMTgwLjApIC8gTWF0aC5QSTtcclxuLy99O1xyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25EYXRhIH0gZnJvbSAnLi4vLi4vY29sbGlzaW9uL2NvbGxpc2lvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYW5pbWF0ZWRTcHJpdGVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tICcuLi9hdWRpby9hdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBNYXRoRXh0ZW5zaW9ucyB9IGZyb20gJy4uL21hdGgvbWF0aEV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQmVoYXZpb3JEYXRhIGltcGxlbWVudHMgSUJlaGF2aW9yRGF0YSB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBhY2NlbGVyYXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigwLCA5MjApO1xyXG4gIHB1YmxpYyBwbGF5ZXJDb2xsaXNpb25Db21wb25lbnQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBncm91bmRDb2xsaXNpb25Db21wb25lbnQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBhbmltYXRlZFNwcml0ZU5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIWpzb24ubmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYW1lID0gU3RyaW5nKGpzb24ubmFtZSk7XHJcblxyXG4gICAgaWYgKGpzb24uYWNjZWxlcmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnNldEZyb21Kc29uKGpzb24uYWNjZWxlcmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWpzb24uYW5pbWF0ZWRTcHJpdGVOYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW5pbWF0ZWRTcHJpdGVOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5pbWF0ZWRTcHJpdGVOYW1lID0gU3RyaW5nKGpzb24uYW5pbWF0ZWRTcHJpdGVOYW1lKTtcclxuXHJcbiAgICBpZiAoIWpzb24ucGxheWVyQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAncGxheWVyQ29sbGlzaW9uQ29tcG9uZW50IG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBsYXllckNvbGxpc2lvbkNvbXBvbmVudCA9IFN0cmluZyhqc29uLnBsYXllckNvbGxpc2lvbkNvbXBvbmVudCk7XHJcblxyXG4gICAgaWYgKCFqc29uLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ2dyb3VuZENvbGxpc2lvbkNvbXBvbmVudCBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncm91bmRDb2xsaXNpb25Db21wb25lbnQgPSBTdHJpbmcoanNvbi5ncm91bmRDb2xsaXNpb25Db21wb25lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdwbGF5ZXInO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgUGxheWVyQmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBQbGF5ZXJCZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJCZWhhdmlvciBleHRlbmRzIEJhc2VCZWhhdmlvciBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfYWNjZWxlcmF0aW9uOiBWZWN0b3IyO1xyXG4gIHByaXZhdGUgX3ZlbG9jaXR5ID0gVmVjdG9yMi56ZXJvO1xyXG4gIHByaXZhdGUgX2lzQWxpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHByaXZhdGUgX3BsYXllckNvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBfZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50OiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIF9hbmltYXRlZFNwcml0ZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX2lzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2luaXRpYWxQb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBBbmltYXRlZFNwcml0ZUNvbXBvbmVudDtcclxuICBwcml2YXRlIF9waXBlTmFtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ3BpcGUxQ29sbGlzaW9uRW5kVG9wJyxcclxuICAgICdwaXBlMUNvbGxpc2lvbkJvZHlUb3AnLFxyXG4gICAgJ3BpcGUxQ29sbGlzaW9uRW5kQm90dG9tJyxcclxuICAgICdwaXBlMUNvbGxpc2lvbkJvZHlCb3R0b20nLFxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBQbGF5ZXJCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX2FjY2VsZXJhdGlvbiA9IGRhdGEuYWNjZWxlcmF0aW9uO1xyXG4gICAgdGhpcy5fcGxheWVyQ29sbGlzaW9uQ29tcG9uZW50ID0gZGF0YS5wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQ7XHJcbiAgICB0aGlzLl9ncm91bmRDb2xsaXNpb25Db21wb25lbnQgPSBkYXRhLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudDtcclxuICAgIHRoaXMuX2FuaW1hdGVkU3ByaXRlTmFtZSA9IGRhdGEuYW5pbWF0ZWRTcHJpdGVOYW1lO1xyXG5cclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKCdNT1VTRV9ET1dOJywgdGhpcyk7XHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgJ0NPTExJU0lPTl9FTlRSWTonICsgdGhpcy5fcGxheWVyQ29sbGlzaW9uQ29tcG9uZW50LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoJ0dBTUVfUkVTRVQnLCB0aGlzKTtcclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKCdHQU1FX1NUQVJUJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlUmVhZHkoKTogdm9pZCB7XHJcbiAgICBzdXBlci51cGRhdGVSZWFkeSgpO1xyXG5cclxuICAgIC8vIE9idGFpbiBhIHJlZmVyZW5jZSB0byB0aGUgYW5pbWF0ZWQgc3ByaXRlXHJcbiAgICB0aGlzLl9zcHJpdGUgPSB0aGlzLl9vd25lcj8uZ2V0Q29tcG9uZW50QnlOYW1lKFxyXG4gICAgICB0aGlzLl9hbmltYXRlZFNwcml0ZU5hbWVcclxuICAgICkgYXMgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQ7XHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIHNwcml0ZSBhbmltYXRpb24gcGxheXMgcmlnaHQgYXdheVxyXG4gICAgdGhpcy5fc3ByaXRlLnNldEZyYW1lKDApO1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxQb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBzcHJpdGVSZWFkeSA9IHRoaXMuX293bmVyPy5nZXRDb21wb25lbnRCeU5hbWUoXHJcbiAgICAgIHRoaXMuX2FuaW1hdGVkU3ByaXRlTmFtZVxyXG4gICAgKTtcclxuICAgIGlmICghc3ByaXRlUmVhZHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9vd25lcikge1xyXG4gICAgICBjb25zdCBzZWNvbmRzOiBudW1iZXIgPSB0aW1lIC8gMTAwMDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9pc1BsYXlpbmcpIHtcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eS5hZGQodGhpcy5fYWNjZWxlcmF0aW9uLmNsb25lKCkuc2NhbGUoc2Vjb25kcykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBMaW1pdCBtYXggc3BlZWQgb2YgZmFsbGluZ1xyXG4gICAgICBpZiAodGhpcy5fdmVsb2NpdHkueSA+IDQwMCkge1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5LnkgPSA0MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByZXZlbnQgZmx5aW5nIHRvbyBoaWdoXHJcbiAgICAgIGlmICh0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSA8IC0xMykge1xyXG4gICAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55ID0gLTEzO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9vd25lcj8udHJhbnNmb3JtLnBvc2l0aW9uLmFkZChcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eS5jbG9uZSgpLnNjYWxlKHNlY29uZHMpLnRvVmVjdG9yMygpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fdmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiAtPVxyXG4gICAgICAgICAgTWF0aEV4dGVuc2lvbnMuZGVnVG9SYWQoNjAwLjApICogc2Vjb25kcztcclxuICAgICAgICBpZiAodGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogPCBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCgtMjApKSB7XHJcbiAgICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiA9IE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKC0yMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0ZhbGxpbmcoKSB8fCAhdGhpcy5faXNBbGl2ZSkge1xyXG4gICAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56ICs9XHJcbiAgICAgICAgICBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCg0ODAuMCkgKiBzZWNvbmRzO1xyXG4gICAgICAgIGlmICh0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiA+IE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKDkwKSkge1xyXG4gICAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogPSBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCg5MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zaG91bGROb3RGbGFwKCkpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuc3RvcCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3ByaXRlLmlzUGxheWluZykge1xyXG4gICAgICAgICAgdGhpcy5fc3ByaXRlLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLmNvZGUpIHtcclxuICAgICAgY2FzZSAnTU9VU0VfRE9XTic6XHJcbiAgICAgICAgdGhpcy5vbkZsYXAoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQ09MTElTSU9OX0VOVFJZOicgKyB0aGlzLl9wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQ6XHJcbiAgICAgICAgY29uc3QgZGF0YTogQ29sbGlzaW9uRGF0YSA9IG1lc3NhZ2UuY29udGV4dCBhcyBDb2xsaXNpb25EYXRhO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGRhdGE/LmE/Lm5hbWUgPT09IHRoaXMuX2dyb3VuZENvbGxpc2lvbkNvbXBvbmVudCB8fFxyXG4gICAgICAgICAgZGF0YT8uYj8ubmFtZSA9PT0gdGhpcy5fZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmRpZSgpO1xyXG4gICAgICAgICAgdGhpcy5kZWNlbGVyYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLl9waXBlTmFtZXMuaW5kZXhPZihkYXRhLmEhLm5hbWUpICE9PSAtMSB8fFxyXG4gICAgICAgICAgdGhpcy5fcGlwZU5hbWVzLmluZGV4T2YoZGF0YS5iIS5uYW1lKSAhPT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdHQU1FX1JFU0VUJzpcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0dBTUVfU1RBUlQnOlxyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNGYWxsaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZlbG9jaXR5LnkgPiAyMjAuMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkTm90RmxhcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZWxvY2l0eS55ID4gMjIwLjAgfHwgIXRoaXMuX2lzQWxpdmU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc0FsaXZlKSB7XHJcbiAgICAgIHRoaXMuX2lzQWxpdmUgPSBmYWxzZTtcclxuICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnZGVhZCcpO1xyXG4gICAgICBBdWRpb01hbmFnZXIuc3RvcFNvdW5kKCdtdXNpYycpO1xyXG4gICAgICBNZXNzYWdlLnNlbmQoJ1BMQVlFUl9ESUVEJywgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faXNBbGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuX3Nwcml0ZS5vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uLmNvcHlGcm9tKHRoaXMuX2luaXRpYWxQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9zcHJpdGUub3duZXIhLnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gMDtcclxuXHJcbiAgICB0aGlzLl92ZWxvY2l0eS5zZXQoMCwgMCk7XHJcbiAgICB0aGlzLl9hY2NlbGVyYXRpb24uc2V0KDAsIDkyMCk7XHJcbiAgICB0aGlzLl9zcHJpdGUucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKCdtdXNpYycpO1xyXG4gICAgTWVzc2FnZS5zZW5kKCdQTEFZRVJfUkVTRVQnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVjZWxlcmF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjY2VsZXJhdGlvbi55ID0gMDtcclxuICAgIHRoaXMuX3ZlbG9jaXR5LnkgPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZsYXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faXNBbGl2ZSAmJiB0aGlzLl9pc1BsYXlpbmcpIHtcclxuICAgICAgdGhpcy5fdmVsb2NpdHkueSA9IC0yODA7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ2ZsYXAnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZXN0YXJ0KHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gMDtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgyMDAsIHkpO1xyXG4gICAgICB0aGlzLl92ZWxvY2l0eS5zZXQoMCwgMCk7XHJcbiAgICAgIHRoaXMuX2FjY2VsZXJhdGlvbi5zZXQoMCwgOTIwKTtcclxuICAgICAgdGhpcy5faXNBbGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCR7dGhpcy5fYW5pbWF0ZWRTcHJpdGVOYW1lfSdzIHBsYXllckJlaGF2aW9yIGhhcyBubyBvd25lcmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFqc29uLm5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbi5zZXRGcm9tSnNvbihqc29uLnJvdGF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdyb3RhdGlvbic7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBSb3RhdGlvbkJlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgUm90YXRpb25CZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwcml2YXRlIF9yb3RhdGlvbjogVmVjdG9yMztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFJvdGF0aW9uQmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IGRhdGEucm90YXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXI/LnRyYW5zZm9ybS5yb3RhdGlvbi5hZGQodGhpcy5fcm90YXRpb24pO1xyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmVoYXZpb3JEYXRhIGltcGxlbWVudHMgSUJlaGF2aW9yRGF0YSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHZlbG9jaXR5OiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyBtaW5Qb3NpdGlvbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwdWJsaWMgcmVzZXRQb3NpdGlvbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwdWJsaWMgc3RhcnRNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIHN0b3BNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIHJlc2V0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLm5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgbm90IGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5zdGFydE1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnN0YXJ0TWVzc2FnZSA9IFN0cmluZyhqc29uLnN0YXJ0TWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uc3RvcE1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnN0b3BNZXNzYWdlID0gU3RyaW5nKGpzb24uc3RvcE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnJlc2V0TWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucmVzZXRNZXNzYWdlID0gU3RyaW5nKGpzb24ucmVzZXRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi52ZWxvY2l0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkuc2V0RnJvbUpzb24oanNvbi52ZWxvY2l0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1Njcm9sbEJlaGF2aW9yRGF0YSByZXF1aXJlcyBwcm9wZXJ0eSBcInZlbG9jaXR5XCIgdG8gYmUgZGVmaW5lZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ubWluUG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm1pblBvc2l0aW9uLnNldEZyb21Kc29uKGpzb24ubWluUG9zaXRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdTY3JvbGxCZWhhdmlvckRhdGEgcmVxdWlyZXMgcHJvcGVydHkgXCJtaW5Qb3NpdGlvblwiIHRvIGJlIGRlZmluZWQuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnJlc2V0UG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnJlc2V0UG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5yZXNldFBvc2l0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnU2Nyb2xsQmVoYXZpb3JEYXRhIHJlcXVpcmVzIHByb3BlcnR5IFwicmVzZXRQb3NpdGlvblwiIHRvIGJlIGRlZmluZWQuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdzY3JvbGwnO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgU2Nyb2xsQmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBTY3JvbGxCZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxCZWhhdmlvciBleHRlbmRzIEJhc2VCZWhhdmlvciBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfdmVsb2NpdHk6IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHJpdmF0ZSBfbWluUG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHJpdmF0ZSBfcmVzZXRQb3NpdGlvbjogVmVjdG9yMiA9IFZlY3RvcjIuemVybztcclxuICBwcml2YXRlIF9zdGFydE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9zdG9wTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3Jlc2V0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2lzU2Nyb2xsaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogU2Nyb2xsQmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl92ZWxvY2l0eS5jb3B5RnJvbShkYXRhLnZlbG9jaXR5KTtcclxuICAgIHRoaXMuX21pblBvc2l0aW9uLmNvcHlGcm9tKGRhdGEubWluUG9zaXRpb24pO1xyXG4gICAgdGhpcy5fcmVzZXRQb3NpdGlvbi5jb3B5RnJvbShkYXRhLnJlc2V0UG9zaXRpb24pO1xyXG4gICAgdGhpcy5fc3RhcnRNZXNzYWdlID0gZGF0YS5zdGFydE1lc3NhZ2U7XHJcbiAgICB0aGlzLl9zdG9wTWVzc2FnZSA9IGRhdGEuc3RvcE1lc3NhZ2U7XHJcbiAgICB0aGlzLl9yZXNldE1lc3NhZ2UgPSBkYXRhLnJlc2V0TWVzc2FnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLnVwZGF0ZVJlYWR5KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3N0YXJ0TWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKHRoaXMuX3N0YXJ0TWVzc2FnZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3N0b3BNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgTWVzc2FnZS5zdWJzY3JpYmUodGhpcy5fc3RvcE1lc3NhZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9yZXNldE1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBNZXNzYWdlLnN1YnNjcmliZSh0aGlzLl9yZXNldE1lc3NhZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc1Njcm9sbGluZykge1xyXG4gICAgICB0aGlzLl9vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uLmFkZChcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eVxyXG4gICAgICAgICAgLmNsb25lKClcclxuICAgICAgICAgIC5zY2FsZSh0aW1lIC8gMTAwMClcclxuICAgICAgICAgIC50b1ZlY3RvcjMoKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuX293bmVyIS50cmFuc2Zvcm0ucG9zaXRpb24ueCA8PSB0aGlzLl9taW5Qb3NpdGlvbi54ICYmXHJcbiAgICAgICAgdGhpcy5fb3duZXIhLnRyYW5zZm9ybS5wb3NpdGlvbi55IDw9IHRoaXMuX21pblBvc2l0aW9uLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PSB0aGlzLl9zdGFydE1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5faXNTY3JvbGxpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT0gdGhpcy5fc3RvcE1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5faXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZS5jb2RlID09IHRoaXMuX3Jlc2V0TWVzc2FnZSkge1xyXG4gICAgICB0aGlzLmluaXRpYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciEudHJhbnNmb3JtLnBvc2l0aW9uLmNvcHlGcm9tKHRoaXMuX3Jlc2V0UG9zaXRpb24udG9WZWN0b3IzKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIhLnRyYW5zZm9ybS5wb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9pbml0aWFsUG9zaXRpb24udG9WZWN0b3IzKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4vZ2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBzaGFkZXIuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hhZGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3Byb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gIHByaXZhdGUgX3VuaWZvcm1zOiB7IFtuYW1lOiBzdHJpbmddOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB9ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzaGFkZXIuXHJcbiAgICogQHBhcmFtIHZlcnRleFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBmcmFnbWVudFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBmcmFnbWVudCBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2UoKTogdm9pZCB7XHJcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbG9jYXRpb24gb2YgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIG5hbWVcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIHJldHJpZXZlXHJcbiAgICogQHJldHVybnMgQW4gYXR0cmlidXRlXHJcbiAgICovXHJcbiAgcHVibGljIGdldEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5fYXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgYXR0cmlidXRlIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVbmlmb3JtTG9jYXRpb24obmFtZTogc3RyaW5nKTogV2ViR0xVbmlmb3JtTG9jYXRpb24ge1xyXG4gICAgaWYgKHRoaXMuX3VuaWZvcm1zW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBVbmFibGUgdG8gZmluZCB1bmlmb3JtIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fdW5pZm9ybXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZCh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHZlcnRleFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLmRldGVjdEF0dHJpYnV0ZXMoKTtcclxuICAgIHRoaXMuZGV0ZWN0VW5pZm9ybXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFNoYWRlcihzb3VyY2U6IHN0cmluZywgc2hhZGVyVHlwZTogbnVtYmVyKTogV2ViR0xTaGFkZXIge1xyXG4gICAgbGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSkgYXMgV2ViR0xTaGFkZXI7XHJcblxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgIGxldCBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKT8udHJpbSgpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgY29tcGlsaW5nIHNoYWRlcjogJyArIHRoaXMuX25hbWUgKyAnOiAnICsgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoYWRlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUHJvZ3JhbShcclxuICAgIHZlcnRleFNoYWRlcjogV2ViR0xTaGFkZXIsXHJcbiAgICBmcmFnbWVudFNoYWRlcjogV2ViR0xTaGFkZXJcclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMuX3Byb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCkgYXMgV2ViR0xQcm9ncmFtO1xyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLl9wcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMuX3Byb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuXHJcbiAgICBjb25zdCBlcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMuX3Byb2dyYW0pPy50cmltKCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJyb3IgbGlua2luZyBzaGFkZXIgJyArIHRoaXMuX25hbWUgKyAnOiAnICsgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RBdHRyaWJ1dGVzKCk6IHZvaWQge1xyXG4gICAgLy8gZ2l2ZXMgYWxsIGF0dHJpYnV0ZXMgaW4gdGhlIHNoYWRlclxyXG4gICAgY29uc3QgYXR0cmlidXRlQ291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKFxyXG4gICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICBnbC5BQ1RJVkVfQVRUUklCVVRFU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgYXR0cmlidXRlSW5mbzogV2ViR0xBY3RpdmVJbmZvID0gZ2wuZ2V0QWN0aXZlQXR0cmliKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCFhdHRyaWJ1dGVJbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJpYnV0ZUluZm8ubmFtZV0gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGF0dHJpYnV0ZUluZm8ubmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RVbmlmb3JtcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVuaWZvcm1Db3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9VTklGT1JNU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1Db3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHVuaWZvcm1JbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCF1bmlmb3JtSW5mbykge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQb3B1bGF0ZXMgX2F0dHJpYnVlcyB3aXRoIGVhY2ggYXR0cmlidXRlIGFzIGFzIHRoZSB2YWx1ZSBhbmQgdGhlIGF0dHJpYnV0ZSBuYW1lIGFzIHRoZSBrZXlcclxuICAgICAgdGhpcy5fdW5pZm9ybXNbdW5pZm9ybUluZm8ubmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICB1bmlmb3JtSW5mby5uYW1lXHJcbiAgICAgICkgYXMgV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL3NoYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWNTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdiYXNpYycpO1xyXG5cclxuICAgIHRoaXMubG9hZCh0aGlzLmdldFZlcnRleFNvdXJjZSgpLCB0aGlzLmdldEZyYWdtZW50U291cmNlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWZXJ0ZXhTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjMyBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuXHJcbiAgICB1bmlmb3JtIG1hdDQgdV9wcm9qZWN0aW9uO1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVfbW9kZWw7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcblxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICBnbF9Qb3NpdGlvbiA9IHVfcHJvamVjdGlvbiAqIHVfbW9kZWwgKiB2ZWM0KGFfcG9zaXRpb24sIDEuMCk7XHJcbiAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RnJhZ21lbnRTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHJcbiAgICB1bmlmb3JtIHZlYzQgdV90aW50O1xyXG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdV9kaWZmdXNlO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHVfdGludCAqIHRleHR1cmUyRCh1X2RpZmZ1c2UsIHZfdGV4Q29vcmQpO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICBwcml2YXRlIF9yOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2I6IG51bWJlcjtcclxuICBwcml2YXRlIF9hOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHI6IG51bWJlciA9IDI1NSxcclxuICAgIGc6IG51bWJlciA9IDI1NSxcclxuICAgIGI6IG51bWJlciA9IDI1NSxcclxuICAgIGE6IG51bWJlciA9IDI1NVxyXG4gICkge1xyXG4gICAgdGhpcy5fciA9IHI7XHJcbiAgICB0aGlzLl9nID0gZztcclxuICAgIHRoaXMuX2IgPSBiO1xyXG4gICAgdGhpcy5fYSA9IGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ0Zsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZyAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBnKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2cgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGJGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2IgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgYih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9iID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGEoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGEodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0QXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl9yIC8gMjU1LjAsIHRoaXMuX2cgLyAyNTUuMCwgdGhpcy5fYiAvIDI1NS4wLCB0aGlzLl9hIC8gMjU1LjBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvRmxvYXRBcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2hpdGUoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBibGFjaygpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDI1NSwgMCwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ3JlZW4oKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAyNTUsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJsdWUoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAyNTUsIDI1NSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgZ2wgfSBmcm9tICcuLi9nbC9nbCc7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5jb25zdCBMRVZFTDogbnVtYmVyID0gMDtcclxuY29uc3QgQk9SREVSOiBudW1iZXIgPSAwO1xyXG5jb25zdCBURU1QX0lNQUdFX0RBVEE6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMjU1XSk7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2hhbmRsZTogV2ViR0xUZXh0dXJlO1xyXG4gIHByaXZhdGUgX2lzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciA9IDEsIGhlaWdodDogbnVtYmVyID0gMSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSBhcyBXZWJHTFRleHR1cmU7XHJcblxyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbmFtZSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5iaW5kKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaWduYXR1cmUgaXMgZm9yIGxvYWRpbmcgcmF3IGRhdGEgaW50byBhIHRleHR1cmVcclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgIExFVkVMLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICAxLFxyXG4gICAgICAxLFxyXG4gICAgICBCT1JERVIsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIFRFTVBfSU1BR0VfREFUQVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXRBc3NldCh0aGlzLl9uYW1lKSBhcyBJbWFnZUFzc2V0O1xyXG4gICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgIHRoaXMubG9hZFRleHR1cmVGcm9tQXNzZXQoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWFrZXMgYSBjYWxsIHRvIHdlYmdsIGFuZCB0ZWxscyBpdCB3aGF0IGNoYW5uZWwgdG8gYWN0aXZhdGUgb25cclxuICAgKiAoMzIgdG90YWwpXHJcbiAgICogQHBhcmFtIHRleHR1cmVVbml0IHRleHR1cmUgdG8gYWN0aXZhdGUgb25cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZhdGVBbmRCaW5kKHRleHR1cmVVbml0OiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4dHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChtZXNzYWdlLmNvbnRleHQgYXMgSW1hZ2VBc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0OiBJbWFnZUFzc2V0KTogdm9pZCB7XHJcbiAgICB0aGlzLl93aWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIGFuIGltYWdlIGJpdG1hcHBlclxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIGFzc2V0LmRhdGFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNQb3dlck9mMigpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGEgbWlwIG1hcCBhbmQgY2xhbXAgd3JhcHBpbmcgdG8gZWRnZS5cclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgIH1cclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQb3dlck9mMigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX3dpZHRoKSAmJiB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl9oZWlnaHQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbHVlUG93ZXJPZjIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcblxyXG5jbGFzcyBUZXh0dXJlUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIHRleHR1cmU6IFRleHR1cmU7XHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3RleHR1cmVzOiB7IFtuYW1lOiBzdHJpbmddOiBUZXh0dXJlUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IFRleHR1cmUge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0ZXh0dXJlTmFtZSk7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSBuZXcgVGV4dHVyZVJlZmVyZW5jZU5vZGUodGV4dHVyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlVGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBBIHRleHR1cmUgbmFtZWQgJHt0ZXh0dXJlTmFtZX0gZG9lcyBub3QgZXhpc3QgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmVsZWFzZWQuYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEpIHtcclxuICAgICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcbmltcG9ydCB7IFRleHR1cmVNYW5hZ2VyIH0gZnJvbSAnLi90ZXh0dXJlTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IFRleHR1cmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdGludDogQ29sb3I7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nLCB0aW50OiBDb2xvcikge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSBkaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgICB0aGlzLl90aW50ID0gdGludDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5fZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGludCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlmZnVzZVRleHR1cmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeDR4NCB7XHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIElkZW50aXR5IG1hdHJpeCAoZGVmYXVsdCBtYXRyaXgpXHJcbiAgICB0aGlzLl9kYXRhID0gW1xyXG4gICAgICAvLyByb3cgMVxyXG4gICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAvLyByb3cgMlxyXG4gICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAvLyByb3cgM1xyXG4gICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAvLyByb3cgNFxyXG4gICAgICAwLCAwLCAwLCAxLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaWRlbnRpdHkoKTogTWF0cml4NHg0IHtcclxuICAgIHJldHVybiBuZXcgTWF0cml4NHg0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcnRob2dyYXBoaWMgbWF0cml4XHJcbiAgICogTm8gcGVyc3BlY3RpdmUsIHJlbmRlcnMgc29tZXRoaW5nIGFzIGlmIGl0IGlzIGZsYXQgaW4gc3BhY2VcclxuICAgKiBAcGFyYW0gbGVmdCBwb3NpdGlvbiBmcm9tIGxlZnQgb2Ygc2NyZWVuIChhbG1vc3QgYWx3YXlzIDApXHJcbiAgICogQHBhcmFtIHJpZ2h0IGRpc3RhbmNlIHRvIHJpZ2h0IHNpZGUgb2Ygc2NyZWVuIGZyb20gdGhlIGxlZnQgKGUuZy4gMTA4MHAgd291bGQgYmUgMTkyMClcclxuICAgKiBAcGFyYW0gYm90dG9tIHBvc2l0aW9uIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChhbG1vc3QgYWx3YXlzIDApIHdlYmdsIHN0YXJ0cyBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblxyXG4gICAqIEBwYXJhbSB0b3AgcG9zaXRpb24gZnJvbSBib3R0b20gb2Ygc2NyZWVuIHRvIHRoZSB0b3AgKGUuZy4gMTA4MHAgd291bGQgYmUgMTA4MClcclxuICAgKiBAcGFyYW0gbmVhckNsaXAgc29tZXRoaW5nIG5lZ2F0aXZlICh0byBwcmV2ZW50IGNsaXBwaW5nIGluIGZyb250KVxyXG4gICAqIEBwYXJhbSBmYXJDbGlwIGFyYml0cmFyeSBudW1iZXJcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyhcclxuICAgIGxlZnQ6IG51bWJlcixcclxuICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b206IG51bWJlcixcclxuICAgIHRvcDogbnVtYmVyLFxyXG4gICAgbmVhckNsaXA6IG51bWJlcixcclxuICAgIGZhckNsaXA6IG51bWJlclxyXG4gICk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBjb25zdCBscjogbnVtYmVyID0gMS4wIC8gKGxlZnQgLSByaWdodCk7XHJcbiAgICBjb25zdCBidDogbnVtYmVyID0gMS4wIC8gKGJvdHRvbSAtIHRvcCk7XHJcbiAgICBjb25zdCBuZjogbnVtYmVyID0gMS4wIC8gKG5lYXJDbGlwIC0gZmFyQ2xpcCk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IC0yLjAgKiBscjtcclxuICAgIG0uX2RhdGFbNV0gPSAtMi4wICogYnQ7XHJcbiAgICBtLl9kYXRhWzEwXSA9IDIuMCAqIG5mO1xyXG5cclxuICAgIG0uX2RhdGFbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcclxuICAgIG0uX2RhdGFbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcclxuICAgIG0uX2RhdGFbMTRdID0gKGZhckNsaXAgKyBuZWFyQ2xpcCkgKiBuZjtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbWF0cml4IHRoYXQgaG9sZHMgZGF0YSB0aGF0IHJlcHJlc2VudHMgbW92ZW1lbnQgb2YgYW4gb2JqZWN0XHJcbiAgICogdGhyb3VnaCBzcGFjZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHRyYW5zbGF0aW9uKHBvc2l0aW9uOiBWZWN0b3IzKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIC8vIGVkaXRpbmcgMXN0IDMgbnVtYmVycyBpbiBsYXN0IHJvdyBvZiBtYXRyaXg0XHJcbiAgICBtLl9kYXRhWzEyXSA9IHBvc2l0aW9uLng7XHJcbiAgICBtLl9kYXRhWzEzXSA9IHBvc2l0aW9uLnk7XHJcbiAgICBtLl9kYXRhWzE0XSA9IHBvc2l0aW9uLno7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgcm90YXRpb24gbWF0cml4IG9uIHRoZSBYIGF4aXMgZnJvbSB0aGUgcHJvdmlkZWQgYW5nbGUgaW4gcmFkaWFucy5cclxuICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnMuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblgoYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgIG0uX2RhdGFbNV0gPSBjO1xyXG4gICAgbS5fZGF0YVs2XSA9IHM7XHJcbiAgICBtLl9kYXRhWzldID0gLXM7XHJcbiAgICBtLl9kYXRhWzEwXSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWShhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGM7XHJcbiAgICBtLl9kYXRhWzJdID0gLXM7XHJcbiAgICBtLl9kYXRhWzhdID0gcztcclxuICAgIG0uX2RhdGFbMTBdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25aKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgLy8gcmFkaWFucyBhcmUgdXNlZCBpbiBhbG1vc3QgYWxsIG1hdGggbGlicmFyaWVzIGJlY2F1c2UgaXQgaXMgbW9yZSBwZXJmb3JtYW50XHJcbiAgICAvLyB1bmRlciB0aGUgaG9vZFxyXG5cclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGM7XHJcbiAgICBtLl9kYXRhWzFdID0gcztcclxuICAgIG0uX2RhdGFbNF0gPSAtcztcclxuICAgIG0uX2RhdGFbNV0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblhZWihcclxuICAgIHhSYWRpYW5zOiBudW1iZXIsXHJcbiAgICB5UmFkaWFuczogbnVtYmVyLFxyXG4gICAgelJhZGlhbnM6IG51bWJlclxyXG4gICk6IE1hdHJpeDR4NCB7XHJcbiAgICBjb25zdCByeCA9IE1hdHJpeDR4NC5yb3RhdGlvblgoeFJhZGlhbnMpO1xyXG4gICAgY29uc3QgcnkgPSBNYXRyaXg0eDQucm90YXRpb25ZKHlSYWRpYW5zKTtcclxuICAgIGNvbnN0IHJ6ID0gTWF0cml4NHg0LnJvdGF0aW9uWih6UmFkaWFucyk7XHJcblxyXG4gICAgcmV0dXJuIE1hdHJpeDR4NC5tdWx0aXBseShNYXRyaXg0eDQubXVsdGlwbHkocnosIHJ5KSwgcngpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzY2FsZShzY2FsZTogVmVjdG9yMyk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gc2NhbGUueDtcclxuICAgIG0uX2RhdGFbNV0gPSBzY2FsZS55O1xyXG4gICAgbS5fZGF0YVsxMF0gPSBzY2FsZS56O1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBNYXRyaXg0eDQsIGI6IE1hdHJpeDR4NCk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYjAwID0gYi5fZGF0YVswICogNCArIDBdO1xyXG4gICAgbGV0IGIwMSA9IGIuX2RhdGFbMCAqIDQgKyAxXTtcclxuICAgIGxldCBiMDIgPSBiLl9kYXRhWzAgKiA0ICsgMl07XHJcbiAgICBsZXQgYjAzID0gYi5fZGF0YVswICogNCArIDNdO1xyXG4gICAgbGV0IGIxMCA9IGIuX2RhdGFbMSAqIDQgKyAwXTtcclxuICAgIGxldCBiMTEgPSBiLl9kYXRhWzEgKiA0ICsgMV07XHJcbiAgICBsZXQgYjEyID0gYi5fZGF0YVsxICogNCArIDJdO1xyXG4gICAgbGV0IGIxMyA9IGIuX2RhdGFbMSAqIDQgKyAzXTtcclxuICAgIGxldCBiMjAgPSBiLl9kYXRhWzIgKiA0ICsgMF07XHJcbiAgICBsZXQgYjIxID0gYi5fZGF0YVsyICogNCArIDFdO1xyXG4gICAgbGV0IGIyMiA9IGIuX2RhdGFbMiAqIDQgKyAyXTtcclxuICAgIGxldCBiMjMgPSBiLl9kYXRhWzIgKiA0ICsgM107XHJcbiAgICBsZXQgYjMwID0gYi5fZGF0YVszICogNCArIDBdO1xyXG4gICAgbGV0IGIzMSA9IGIuX2RhdGFbMyAqIDQgKyAxXTtcclxuICAgIGxldCBiMzIgPSBiLl9kYXRhWzMgKiA0ICsgMl07XHJcbiAgICBsZXQgYjMzID0gYi5fZGF0YVszICogNCArIDNdO1xyXG5cclxuICAgIGxldCBhMDAgPSBhLl9kYXRhWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgYTAxID0gYS5fZGF0YVswICogNCArIDFdO1xyXG4gICAgbGV0IGEwMiA9IGEuX2RhdGFbMCAqIDQgKyAyXTtcclxuICAgIGxldCBhMDMgPSBhLl9kYXRhWzAgKiA0ICsgM107XHJcbiAgICBsZXQgYTEwID0gYS5fZGF0YVsxICogNCArIDBdO1xyXG4gICAgbGV0IGExMSA9IGEuX2RhdGFbMSAqIDQgKyAxXTtcclxuICAgIGxldCBhMTIgPSBhLl9kYXRhWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgYTEzID0gYS5fZGF0YVsxICogNCArIDNdO1xyXG4gICAgbGV0IGEyMCA9IGEuX2RhdGFbMiAqIDQgKyAwXTtcclxuICAgIGxldCBhMjEgPSBhLl9kYXRhWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgYTIyID0gYS5fZGF0YVsyICogNCArIDJdO1xyXG4gICAgbGV0IGEyMyA9IGEuX2RhdGFbMiAqIDQgKyAzXTtcclxuICAgIGxldCBhMzAgPSBhLl9kYXRhWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgYTMxID0gYS5fZGF0YVszICogNCArIDFdO1xyXG4gICAgbGV0IGEzMiA9IGEuX2RhdGFbMyAqIDQgKyAyXTtcclxuICAgIGxldCBhMzMgPSBhLl9kYXRhWzMgKiA0ICsgM107XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xyXG4gICAgbS5fZGF0YVszXSA9IGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMztcclxuICAgIG0uX2RhdGFbNF0gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xyXG4gICAgbS5fZGF0YVs2XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbN10gPSBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xyXG4gICAgbS5fZGF0YVs5XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMTBdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyO1xyXG4gICAgbS5fZGF0YVsxMV0gPSBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzEyXSA9IGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbMTNdID0gYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxO1xyXG4gICAgbS5fZGF0YVsxNF0gPSBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzE1XSA9IGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weUZyb20obTogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgdGhpcy5fZGF0YVtpXSA9IG0uX2RhdGFbaV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0cml4NHg0JztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHJvdGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyBzY2FsZTogVmVjdG9yMyA9IFZlY3RvcjMub25lO1xyXG5cclxuICBwdWJsaWMgY29weUZyb20odHJhbnNmb3JtOiBUcmFuc2Zvcm0pOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb24uY29weUZyb20odHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgIHRoaXMucm90YXRpb24uY29weUZyb20odHJhbnNmb3JtLnJvdGF0aW9uKTtcclxuICAgIHRoaXMuc2NhbGUuY29weUZyb20odHJhbnNmb3JtLnNjYWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IHRyYW5zbGF0aW9uID0gTWF0cml4NHg0LnRyYW5zbGF0aW9uKHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgIGxldCByb3RhdGlvbiA9IE1hdHJpeDR4NC5yb3RhdGlvblhZWihcclxuICAgICAgdGhpcy5yb3RhdGlvbi54LFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLnksXHJcbiAgICAgIHRoaXMucm90YXRpb24uelxyXG4gICAgKTtcclxuICAgIGxldCBzY2FsZSA9IE1hdHJpeDR4NC5zY2FsZSh0aGlzLnNjYWxlKTtcclxuXHJcbiAgICAvLyBvcmRlciBtYXR0ZXJzIGhlcmVcclxuICAgIC8vIFQgKiBSICogU1xyXG4gICAgcmV0dXJuIE1hdHJpeDR4NC5tdWx0aXBseShNYXRyaXg0eDQubXVsdGlwbHkodHJhbnNsYXRpb24sIHJvdGF0aW9uKSwgc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5yb3RhdGlvbikge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uLnNldEZyb21Kc29uKGpzb24ucm90YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnNjYWxlKSB7XHJcbiAgICAgIHRoaXMuc2NhbGUuc2V0RnJvbUpzb24oanNvbi5zY2FsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi4vYmVoYXZpb3JzL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4uL21hdGgvbWF0cml4NHg0JztcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vbWF0aC90cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1PYmplY3Qge1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IFNpbU9iamVjdFtdID0gW107XHJcbiAgcHJpdmF0ZSBfcGFyZW50OiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfY29tcG9uZW50czogSUNvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBfYmVoYXZpb3JzOiBJQmVoYXZpb3JbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9sb2NhbE1hdHJpeDogTWF0cml4NHg0ID0gTWF0cml4NHg0LmlkZW50aXR5KCk7XHJcbiAgcHJpdmF0ZSBfd29ybGRNYXRyaXg6IE1hdHJpeDR4NCA9IE1hdHJpeDR4NC5pZGVudGl0eSgpO1xyXG5cclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdHJhbnNmb3JtOiBUcmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHNjZW5lPzogU2NlbmUpIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFyZW50KCk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50IHx8IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd29ybGRNYXRyaXgoKTogTWF0cml4NHg0IHtcclxuICAgIHJldHVybiB0aGlzLl93b3JsZE1hdHJpeDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ2hpbGQoY2hpbGQ6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgIGlmICh0aGlzLl9zY2VuZSkge1xyXG4gICAgICBjaGlsZC5vbkFkZGVkKHRoaXMuX3NjZW5lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVDaGlsZChjaGlsZDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgY2hpbGQuX3BhcmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgLy8gZG91YmxlIGNoZWNrIHRoaXMgd29ya3NcclxuICAgICAgdGhpcy5fY2hpbGRyZW4gPSB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoKF8sIGlkeCkgPT4gaW5kZXggIT09IGlkeCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWU6IHN0cmluZyk6IElDb21wb25lbnQgfCB1bmRlZmluZWQge1xyXG4gICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMuX2NvbXBvbmVudHMpIHtcclxuICAgICAgaWYgKGNvbXBvbmVudC5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRCeU5hbWUobmFtZSk7XHJcbiAgICAgIGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QmVoYXZpb3JCeU5hbWUobmFtZTogc3RyaW5nKTogSUJlaGF2aW9yIHwgdW5kZWZpbmVkIHtcclxuICAgIGZvciAobGV0IGJlaGF2aW9yIG9mIHRoaXMuX2JlaGF2aW9ycykge1xyXG4gICAgICBpZiAoYmVoYXZpb3IubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBiZWhhdmlvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGxldCBiZWhhdmlvciA9IGNoaWxkLmdldEJlaGF2aW9yQnlOYW1lKG5hbWUpO1xyXG4gICAgICBpZiAoYmVoYXZpb3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBiZWhhdmlvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNoaWxkLmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQmVoYXZpb3IoYmVoYXZpb3I6IElCZWhhdmlvcik6IHZvaWQge1xyXG4gICAgdGhpcy5fYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xyXG4gICAgYmVoYXZpb3Iuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQubG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZVJlYWR5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iZWhhdmlvcnMuZm9yRWFjaCgoYmVoYXZpb3IpID0+IHtcclxuICAgICAgYmVoYXZpb3IudXBkYXRlUmVhZHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZVJlYWR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fbG9jYWxNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpO1xyXG4gICAgdGhpcy51cGRhdGVXb3JsZE1hdHJpeChcclxuICAgICAgdGhpcy5fcGFyZW50ICE9PSB1bmRlZmluZWQgPyB0aGlzLl9wYXJlbnQud29ybGRNYXRyaXggOiB1bmRlZmluZWRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZSh0aW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JlaGF2aW9ycy5mb3JFYWNoKChiZWhhdmlvcikgPT4ge1xyXG4gICAgICBiZWhhdmlvci51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXb3JsZFBvc2l0aW9uKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeC5kYXRhWzEyXSxcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXguZGF0YVsxM10sXHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmRhdGFbMTRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uQWRkZWQoc2NlbmU6IFNjZW5lKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVXb3JsZE1hdHJpeChwYXJlbnRXb3JsZE1hdHJpeDogTWF0cml4NHg0IHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBpZiAocGFyZW50V29ybGRNYXRyaXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeCA9IE1hdHJpeDR4NC5tdWx0aXBseShcclxuICAgICAgICBwYXJlbnRXb3JsZE1hdHJpeCxcclxuICAgICAgICB0aGlzLl9sb2NhbE1hdHJpeFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXguY29weUZyb20odGhpcy5fbG9jYWxNYXRyaXgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuL3NpbU9iamVjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmUge1xyXG4gIHByaXZhdGUgX3Jvb3Q6IFNpbU9iamVjdDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fcm9vdCA9IG5ldyBTaW1PYmplY3QoMCwgJ19fUk9PVF9fJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJvb3QoKTogU2ltT2JqZWN0IHtcclxuICAgIHJldHVybiB0aGlzLl9yb290O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290LmlzTG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZE9iamVjdChvYmplY3Q6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC5hZGRDaGlsZChvYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9iamVjdEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QuZ2V0T2JqZWN0QnlOYW1lKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb290LmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb290LnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpIHtcclxuICAgIHRoaXMuX3Jvb3QucmVuZGVyKHNoYWRlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudE1hbmFnZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudE1hbmFnZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvck1hbmFnZXIgfSBmcm9tICcuLi9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi9zaW1PYmplY3QnO1xyXG5cclxuZXhwb3J0IGVudW0gWm9uZVN0YXRlIHtcclxuICBVTklOSVRJQUxJWkVELFxyXG4gIExPQURJTkcsXHJcbiAgVVBEQVRJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBab25lIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3NjZW5lOiBTY2VuZTtcclxuICBwcml2YXRlIF9zdGF0ZTogWm9uZVN0YXRlID0gWm9uZVN0YXRlLlVOSU5JVElBTElaRUQ7XHJcbiAgcHJpdmF0ZSBfZ2xvYmFsSWQ6IG51bWJlciA9IC0xO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5fc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNjZW5lKCk6IFNjZW5lIHtcclxuICAgIHJldHVybiB0aGlzLl9zY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0aWFsaXplKHpvbmVEYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh6b25lRGF0YS5vYmplY3RzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGluaXRpYWxpemF0aW9uIGVycm9yOiBvYmplY3RzIG5vdCBwcmVzZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgem9uZURhdGEub2JqZWN0cy5mb3JFYWNoKChvOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5sb2FkU2ltT2JqZWN0KG8gYXMgU2ltT2JqZWN0LCB0aGlzLl9zY2VuZS5yb290KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IFpvbmVTdGF0ZS5MT0FESU5HO1xyXG5cclxuICAgIHRoaXMuX3NjZW5lLmxvYWQoKTtcclxuXHJcbiAgICB0aGlzLl9zY2VuZS5yb290LnVwZGF0ZVJlYWR5KCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5sb2FkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkcpKSB7XHJcbiAgICAgIHRoaXMuX3NjZW5lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkcpKSB7XHJcbiAgICAgIHRoaXMuX3NjZW5lLnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG9uRGVhY3RpdmF0ZWQoKTogdm9pZCB7fVxyXG5cclxuICBwcml2YXRlIGxvYWRTaW1PYmplY3QoZGF0YVNlY3Rpb246IGFueSwgcGFyZW50OiBTaW1PYmplY3QgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGxldCBuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGlmIChkYXRhU2VjdGlvbi5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbmFtZSA9IFN0cmluZyhkYXRhU2VjdGlvbi5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9nbG9iYWxJZCsrO1xyXG4gICAgbGV0IHNpbU9iamVjdCA9IG5ldyBTaW1PYmplY3QodGhpcy5fZ2xvYmFsSWQsIG5hbWUsIHRoaXMuX3NjZW5lKTtcclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24udHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgc2ltT2JqZWN0LnRyYW5zZm9ybS5zZXRGcm9tSnNvbihkYXRhU2VjdGlvbi50cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5jb21wb25lbnRzKSB7XHJcbiAgICAgIGRhdGFTZWN0aW9uLmNvbXBvbmVudHMuZm9yRWFjaCgoYzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50TWFuYWdlci5leHRyYWN0Q29tcG9uZW50KGMpO1xyXG4gICAgICAgIHNpbU9iamVjdC5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLmJlaGF2aW9ycykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5iZWhhdmlvcnMuZm9yRWFjaCgoYjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBCZWhhdmlvck1hbmFnZXIuZXh0cmFjdEJlaGF2aW9yKGIpO1xyXG4gICAgICAgIHNpbU9iamVjdC5hZGRCZWhhdmlvcihiZWhhdmlvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5jaGlsZHJlbiAmJiBkYXRhU2VjdGlvbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRhdGFTZWN0aW9uLmNoaWxkcmVuLmZvckVhY2goKG86IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvLCBzaW1PYmplY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFyZW50LmFkZENoaWxkKHNpbU9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSnNvbkFzc2V0IH0gZnJvbSAnLi4vYXNzZXRzL2pzb25Bc3NldExvYWRlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tICcuL3pvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmVNYW5hZ2VyIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfZ2xvYmFsWm9uZUlEOiBudW1iZXIgPSAtMTtcclxuICAvLyAgcHJpdmF0ZSBzdGF0aWMgX3pvbmVzOiB7IFtpZDogbnVtYmVyXTogWm9uZSB9ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZ2lzdGVyZWRab25lczogeyBbaWQ6IG51bWJlcl06IHN0cmluZyB9ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2FjdGl2ZVpvbmU6IFpvbmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IFpvbmVNYW5hZ2VyO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgWm9uZU1hbmFnZXIuX2luc3QgPSBuZXcgWm9uZU1hbmFnZXIoKTtcclxuICAgIC8vIHRlbXBvcmFyeVxyXG4gICAgWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1swXSA9ICdzcmMvYXNzZXRzL3pvbmVzL3Rlc3Rab25lLmpzb24nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaGFuZ2Vab25lKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLm9uRGVhY3RpdmF0ZWQoKTtcclxuICAgICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUudW5sb2FkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChBc3NldE1hbmFnZXIuaXNBc3NldExvYWRlZChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSkpIHtcclxuICAgICAgICBjb25zdCBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXRBc3NldChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSk7XHJcbiAgICAgICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgICAgICBab25lTWFuYWdlci5sb2FkWm9uZShhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0sXHJcbiAgICAgICAgICBab25lTWFuYWdlci5faW5zdFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWm9uZSBpZDogJHtpZH0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlLmluZGV4T2YoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEKSAhPT0gLTEpIHtcclxuICAgICAgbGV0IGFzc2V0ID0gbWVzc2FnZS5jb250ZXh0IGFzIEpzb25Bc3NldDtcclxuICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbG9hZFpvbmUoYXNzZXQ6IEpzb25Bc3NldCk6IHZvaWQge1xyXG4gICAgY29uc3Qgem9uZURhdGEgPSBhc3NldC5kYXRhO1xyXG4gICAgbGV0IHpvbmVJZDogbnVtYmVyO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKHpvbmVEYXRhLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgZmlsZSBmb3JtYXQgZXhjZXB0aW9uOiBab25lIGlkIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZUlkID0gTnVtYmVyKHpvbmVEYXRhLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB6b25lTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAodHlwZW9mIHpvbmVEYXRhID09PSAnb2JqZWN0JyAmJiB6b25lRGF0YSkge1xyXG4gICAgICBpZiAoIXpvbmVEYXRhLm5hbWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgZmlsZSBmb3JtYXQgZXhjZXB0aW9uOiBab25lIG5hbWUgbm90IHByZXNlbnQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB6b25lTmFtZSA9IFN0cmluZyh6b25lRGF0YS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB6b25lRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKHpvbmVEYXRhLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgem9uZURlc2NyaXB0aW9uID0gU3RyaW5nKHpvbmVEYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lID0gbmV3IFpvbmUoem9uZUlkISwgem9uZU5hbWUsIHpvbmVEZXNjcmlwdGlvbik7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5pbml0aWFsaXplKHpvbmVEYXRhKTtcclxuICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLm9uQWN0aXZhdGVkKCk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5sb2FkKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbGxpc2lvbk1hbmFnZXIgfSBmcm9tICcuLi9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlcic7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvYW5pbWF0ZWRTcHJpdGVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xsaXNpb25Db21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2xsaXNpb25Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi9hdWRpby9hdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvck1hbmFnZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMva2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yJztcclxuaW1wb3J0IHsgUGxheWVyQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMvcGxheWVyQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL3JvdGF0aW9uQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBTY3JvbGxCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9zY3JvbGxCZWhhdmlvcic7XHJcbmltcG9ydCB7IGdsLCBHTFV0aWxpdGllcyB9IGZyb20gJy4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBCYXNpY1NoYWRlciB9IGZyb20gJy4vZ2wvc2hhZGVycy9iYXNpY1NoYWRlcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9ncmFwaGljcy9jb2xvcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyLCBNb3VzZUNvbnRleHQgfSBmcm9tICcuL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlQnVzJztcclxuaW1wb3J0IHsgWm9uZU1hbmFnZXIgfSBmcm9tICcuL3dvcmxkL3pvbmVNYW5hZ2VyJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBnYW1lIGVuZ2luZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9iYXNpY1NoYWRlcjogQmFzaWNTaGFkZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcHJvamVjdGlvbjogTWF0cml4NHg0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3ByZXZpb3VzVGltZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9nYW1lV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9nYW1lSGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgZW5naW5lXHJcbiAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgZ2FtZSBpbiBwaXhlbHNcclxuICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGdhbWUgaW4gcGl4ZWxzXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHdpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2dhbWVXaWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5fZ2FtZUhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZSgnTU9VU0VfRE9XTicsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHVwIHRoaXMgZW5naW5lXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gR0xVdGlsaXRpZXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgaWYgKHRoaXMuX2dhbWVXaWR0aCAmJiB0aGlzLl9nYW1lSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuX2dhbWVXaWR0aCArICdweCc7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLl9nYW1lSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fZ2FtZVdpZHRoO1xyXG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fZ2FtZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBBc3NldE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgSW5wdXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIFpvbmVNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBnbC5jbGVhckNvbG9yKDk5IC8gMjU1LCAxNTUgLyAyNTUsIDI1NSAvIDI1NSwgMSk7XHJcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xyXG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcblxyXG4gICAgbGV0IGltYWdlQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy90ZXh0dXJlcy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaVxyXG4gICAgKTtcclxuICAgIGxldCBqc29uQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3pvbmVzLycsIHRydWUsIC9cXC4oanNvbikkL2kpO1xyXG4gICAgbGV0IGF1ZGlvQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy9zb3VuZHMvJyxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgL1xcLih3YXZ8bXAzKSQvaVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmxvYWRBbGwoaW1hZ2VDb250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChqc29uQ29udGV4dCk7XHJcbiAgICB0aGlzLmxvYWRBbGwoYXVkaW9Db250ZXh0KTtcclxuXHJcbiAgICB0aGlzLl9iYXNpY1NoYWRlciA9IG5ldyBCYXNpY1NoYWRlcigpO1xyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIudXNlKCk7XHJcblxyXG4gICAgLy8gTG9hZCBtYXRlcmlhbHNcclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgICAgJ3N0b25lV2FsbCcsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvc3RvbmVfd2FsbC5qcGcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICd3b29kUGxhbmsnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3dvb2RfcGxhbmsuanBnJyxcclxuICAgICAgICBDb2xvci53aGl0ZSgpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbCgnYmcnLCAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9iYWNrZ3JvdW5kLnBuZycsIENvbG9yLndoaXRlKCkpXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoJ3BpcGVFbmQnLCAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9waXBlX2VuZC5wbmcnLCBDb2xvci53aGl0ZSgpKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdwaXBlQm9keScsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvcGlwZV9ib2R5LnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoJ2JpcmQnLCAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9iaXJkX3NocnVuay5wbmcnLCBDb2xvci53aGl0ZSgpKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdncmFzcycsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvZ3Jhc3NfYmlnZ2VyLnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnYmlyZEp1bXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnbXVzaWMnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYWxmX3JlbWl4Lm1wMycsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ3RpbmcnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvdGluZy53YXYnLCBmYWxzZSk7XHJcbiAgICBBdWRpb01hbmFnZXIubG9hZFNvdW5kRmlsZShcclxuICAgICAgJ2ZsYXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ2RlYWQnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvZGVhdGgud2F2JywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZpbmQgYSBiZXR0ZXIgcGxhY2UgZm9yIHRoaXM/XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIoKSk7XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgUGxheWVyQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFNjcm9sbEJlaGF2aW9yQnVpbGRlcigpKTtcclxuXHJcbiAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byBiZSByZWFkIGZyb20gZ2FtZSBjb25maWdcclxuICAgIFpvbmVNYW5hZ2VyLmNoYW5nZVpvbmUoMCk7XHJcblxyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICAgIHRoaXMubG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplcyB0aGUgY2FudmFzIHRvIGZpdCB0aGUgd2luZG93LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5fY2FudmFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLl9nYW1lV2lkdGggfHwgIXRoaXMuX2dhbWVIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9wcm9qZWN0aW9uID0gTWF0cml4NHg0Lm9ydGhvZ3JhcGhpYyhcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgLTEwMC4wLFxyXG4gICAgICAgIDEwMC4wXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vdXNlQ29udGV4dCA9IG1lc3NhZ2UuY29udGV4dCBhcyBNb3VzZUNvbnRleHQ7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlID09PSAnTU9VU0VfRE9XTicgJiYgbW91c2VDb250ZXh0KSB7XHJcbiAgICAgIE1lc3NhZ2Uuc2VuZCgnR0FNRV9TVEFSVCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgYSBtZXNzYWdlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRBbGwocmVxdWlyZUNvbnRleHQ6IF9fV2VicGFja01vZHVsZUFwaS5SZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmVxdWlyZUNvbnRleHQua2V5cygpLmZvckVhY2gocmVxdWlyZUNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZGVsdGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3ByZXZpb3VzVGltZTtcclxuXHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgWm9uZU1hbmFnZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgdGhpcy5fcHJldmlvdXNUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlcikge1xyXG4gICAgICBab25lTWFuYWdlci5yZW5kZXIodGhpcy5fYmFzaWNTaGFkZXIpO1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IHVuaWZvcm1zXHJcbiAgICBpZiAodGhpcy5fYmFzaWNTaGFkZXIgJiYgdGhpcy5fcHJvamVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcm9qZWN0aW9uUG9zaXRpb24gPVxyXG4gICAgICAgIHRoaXMuX2Jhc2ljU2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9wcm9qZWN0aW9uJyk7XHJcblxyXG4gICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFxyXG4gICAgICAgIHByb2plY3Rpb25Qb3NpdGlvbixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3Byb2plY3Rpb24uZGF0YSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2NvcmUvZW5naW5lJztcclxuXHJcbnZhciBlbmdpbmU6IEVuZ2luZTtcclxuLy8gVGhlIG1haW4gZW50cnkgcG9pbnQgdG8gdGhlIGFwcGxpY2F0aW9uXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lID0gbmV3IEVuZ2luZSg1MTIsIDc1MCk7XHJcbiAgZW5naW5lLnN0YXJ0KCk7XHJcbn07XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lLnJlc2l6ZSgpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=