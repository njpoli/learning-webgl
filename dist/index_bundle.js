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
        // TODO: Remove Me
        document.title = CollisionManager._collisionData.length.toString();
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
        console.log("height and width: ", width, height);
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
        console.log('sprite json', json);
        return new SpriteComponent(data);
    };
    return SpriteComponentBuilder;
}());

var SpriteComponent = /** @class */ (function (_super) {
    spriteComponent_extends(SpriteComponent, _super);
    function SpriteComponent(data) {
        var _this = _super.call(this, data) || this;
        console.log("setting sprite data: ", data);
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
    AnimatedSpriteComponent.prototype.isPlaying = function () {
        return this._sprite.isPlaying;
    };
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
        _this._acceleration = data.acceleration;
        _this._playerCollisionComponent = data.playerCollisionComponent;
        _this._groundCollisionComponent = data.groundCollisionComponent;
        _this._animatedSpriteName = data.animatedSpriteName;
        Message.subscribe('MOUSE_DOWN', _this);
        Message.subscribe('COLLISION_ENTRY:' + _this._playerCollisionComponent, _this);
        return _this;
    }
    PlayerBehavior.prototype.updateReady = function () {
        var _a;
        _super.prototype.updateReady.call(this);
        // Obtain a reference to the animated sprite
        this._sprite = (_a = this._owner) === null || _a === void 0 ? void 0 : _a.getComponentByName(this._animatedSpriteName);
    };
    PlayerBehavior.prototype.update = function (time) {
        var _a, _b;
        if (!this._isAlive) {
            return;
        }
        var spriteReady = (_a = this._owner) === null || _a === void 0 ? void 0 : _a.getComponentByName(this._animatedSpriteName);
        if (!spriteReady) {
            return;
        }
        if (this._owner) {
            var seconds = time / 1000;
            this._velocity.add(this._acceleration.clone().scale(seconds));
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
                if (!this._sprite.isPlaying()) {
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
                    Message.send('PLAYER_DIED', this);
                }
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
        this._isAlive = false;
        AudioManager.playSound('dead');
    };
    PlayerBehavior.prototype.decelerate = function () {
        this._acceleration.y = 0;
        this._velocity.y = 0;
    };
    PlayerBehavior.prototype.onFlap = function () {
        if (this._isAlive) {
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
        MaterialManager.registerMaterial(new Material('bird', 'src/assets/textures/bird_shrunk_2.png', Color.white()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBckJDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5ELFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQUksQ0FBQyxPQUFPLDBD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RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ2xDLElBQUksT0FBTyxDQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMvQixDQUNGLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ2xDLElBQUksT0FBTyxDQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMvQixDQUNGLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuRSxVQUFJLENBQUMsT0FBTywwQ0FBRSxTQUFTLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7O2dCQUN2QixXQUFJLENBQUMsT0FBTywwQ0FBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxVQUFJLENBQUMsT0FBTywwQ0FBRSxNQUFNLEVBQUUsQ0FBQztZQUN2QixVQUFJLENBQUMsT0FBTywwQ0FBRSxNQUFNLEVBQUUsQ0FBQztTQUN4QjtRQUVELGlCQUFNLE1BQU0sWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU8scUNBQVksR0FBcEI7UUFDRSxJQUFJLFVBQVUsR0FBVyxDQUFDLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNsQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNqQyxNQUFNLEVBQUUsQ0FBQztnQkFDVCxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDekQsSUFBSSxHQUFHLEdBQVksSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXJDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDeEUsSUFBSSxJQUFJLEdBQ04sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN2RSxJQUFJLEdBQUcsR0FBWSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRU8sMENBQWlCLEdBQXpCOztRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQU0sUUFBUSxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRSxJQUFJLGNBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxjQUFjLDBDQUFFLFFBQVEsRUFBRTtnQkFDdEMsSUFBSSwwQkFBMEIsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtvQkFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztvQkFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxDQW5MbUMsTUFBTSxHQW1MekM7Ozs7QUNuTUQ7SUFNRSx1QkFBbUIsSUFBb0I7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBVyxnQ0FBSzthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsS0FBZ0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLDRCQUFJLEdBQVgsY0FBcUIsQ0FBQztJQUVmLG1DQUFXLEdBQWxCLGNBQTRCLENBQUM7SUFFdEIsOEJBQU0sR0FBYixVQUFjLElBQVksSUFBUyxDQUFDO0lBRTdCLDhCQUFNLEdBQWIsVUFBYyxNQUFjLElBQVMsQ0FBQztJQUN4QyxvQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmdEO0FBQ0Q7QUFJRDtBQUUvQztJQUFBO1FBQ1MsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixXQUFNLEdBQVksWUFBWSxDQUFDO0lBcUJ4QyxDQUFDO0lBakJRLHlDQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFYQyxzQkFBVyx3Q0FBSTthQUFmO1lBQ0UsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFTSw4Q0FBYSxHQUFwQixVQUFxQixJQUFTO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUFxQyxpREFBYTtJQUtoRCx5QkFBbUIsSUFBeUI7UUFBNUMsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FrQlo7UUFqQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FDdkIsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsWUFBWSxFQUNqQixLQUFJLENBQUMsTUFBTSxFQUNYLEtBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNyQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDOztJQUNILENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLE1BQWM7O1FBQzFCLElBQUksVUFBSSxDQUFDLE1BQU0sMENBQUUsV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFJLENBQUMsTUFBTSwwQ0FBRSxXQUFXLENBQUMsQ0FBQztTQUNyRDtRQUVELGlCQUFNLE1BQU0sWUFBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLENBckNvQyxhQUFhLEdBcUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGZ0U7QUFDbEI7QUFDQztBQUlRO0FBRXhEO0lBQ1UscUVBQW1CO0lBRDdCO1FBQUEscUVBNkNDO1FBekNRLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBcUNsQyxDQUFDO0lBbkNRLGlEQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDMUIsaUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FDYix5REFBeUQsQ0FDMUQsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxNQUFNLElBQUksS0FBSyxDQUNiLDJEQUEyRCxDQUM1RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN6QztJQUNILENBQUM7SUFDSCxrQ0FBQztBQUFELENBQUMsQ0E1Q1MsbUJBQW1CLEdBNEM1Qjs7QUFFRDtJQUFBO0lBV0EsQ0FBQztJQVZDLHNCQUFXLGdEQUFJO2FBQWY7WUFDRSxPQUFPLGdCQUFnQixDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRU0sc0RBQWEsR0FBcEIsVUFBcUIsSUFBUztRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLDJCQUEyQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixPQUFPLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNILHFDQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUE2QyxpRUFBYTtJQUl4RCxpQ0FBbUIsSUFBaUM7UUFBcEQsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FtQlo7UUFsQkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQy9CLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztRQUVGLHlFQUF5RTtRQUN6RSw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7O0lBQ0gsQ0FBQztJQUVNLDJDQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0NBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLDZDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFTSx3Q0FBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVNLHNDQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxzQ0FBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sMENBQVEsR0FBZixVQUFnQixXQUFtQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sd0NBQU0sR0FBYixVQUFjLE1BQWM7O1FBQzFCLElBQUksVUFBSSxDQUFDLE1BQU0sMENBQUUsV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFJLENBQUMsTUFBTSwwQ0FBRSxXQUFXLENBQUMsQ0FBQztTQUNyRDtRQUVELGlCQUFNLE1BQU0sWUFBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLENBaEU0QyxhQUFhLEdBZ0V6RDs7OztBQ3JJNEM7QUFFRDtBQUU1QztJQUFBO1FBQ1MsV0FBTSxHQUFZLFlBQVksQ0FBQztRQUMvQixhQUFRLEdBQVksWUFBWSxDQUFDO0lBd0UxQyxDQUFDO0lBckVDLHNCQUFXLDRCQUFNO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLE9BQU87WUFDaEIsYUFBYTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsYUFBYTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDMUMsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsOEJBQVcsR0FBWCxVQUFZLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFrQixVQUFvQjtRQUNwQyxJQUFJLFVBQVUsWUFBWSxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ3ZCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUNyRCxDQUFDO1lBQ0YsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3RELElBQUksUUFBUSxJQUFJLGFBQWEsRUFBRTtnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBRUQsSUFBSSxVQUFVLFlBQVksV0FBVyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFHLFVBQVUsaUNBQThCLENBQUMsQ0FBQzthQUM5RDtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLFVBQUcsSUFBSSxzQkFBbUIsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxNQUFNLEdBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxHQUFHLENBQ04sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUNwRSxDQUFDO1lBQ0osSUFBSSxNQUFNLEdBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxHQUFHLENBQ04sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUNyRSxDQUFDO1lBQ0osSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqRSxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSwrQkFBWSxHQUFuQixVQUFvQixLQUFjO1FBQ2hDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7QUM5RTRDO0FBQ1A7QUFHdEM7SUFBQTtRQUNTLFdBQU0sR0FBWSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsYUFBUSxHQUFZLFlBQVksQ0FBQztJQWdIMUMsQ0FBQztJQTNHQyxzQkFBVywrQkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxPQUFPO1lBQ2hCLFlBQVk7WUFDWixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QixZQUFZO1lBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDL0IsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixVQUFvQjtRQUNwQyxJQUNFLFVBQVUsWUFBWSxXQUFXO1lBQ2pDLFVBQVUsQ0FBQyxLQUFLO1lBQ2hCLFVBQVUsQ0FBQyxNQUFNLEVBQ2pCO1lBQ0EsSUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQ2YsSUFBSSxPQUFPLENBQ1QsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFDeEMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ3RCLENBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FDZixJQUFJLE9BQU8sQ0FDVCxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUN4QyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUMxQyxDQUNGO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQ2YsSUFBSSxPQUFPLENBQ1QsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3JCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQzFDLENBQ0YsRUFDRDtnQkFDQSxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxJQUNFLFVBQVUsWUFBWSxRQUFRO1lBQzlCLFVBQVUsQ0FBQyxNQUFNO1lBQ2pCLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLE1BQU0sRUFDWDtZQUNBLElBQU0sTUFBTSxHQUNWLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLEdBQUcsQ0FDTixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDOUQsQ0FBQztZQUVKLElBQU0sTUFBTSxHQUNWLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLEdBQUcsQ0FDTixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDL0QsQ0FBQztZQUVKLElBQ0UsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTTtnQkFDakMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxFQUNyQztnQkFDQSxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxrQ0FBWSxHQUFuQixVQUFvQixLQUFjO1FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLElBQ0UsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFCLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDdkM7Z0JBQ0EsSUFDRSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUN4QztvQkFDQSxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySCtDO0FBS29CO0FBQ047QUFDRztBQUVqRTtJQUFBO1FBQ1MsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQTBCM0IsQ0FBQztJQXZCUSw0Q0FBVyxHQUFsQixVQUFtQixJQUFTOztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLFVBQUksQ0FBQyxLQUFLLDBDQUFFLElBQUksRUFBRTtZQUNwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUM3QyxLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO29CQUMvQixNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pFO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUNiLHlFQUF5RSxDQUMxRSxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDOztBQUVEO0lBQUE7SUFXQSxDQUFDO0lBVkMsc0JBQVcsMkNBQUk7YUFBZjtZQUNFLE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRU0saURBQWEsR0FBcEIsVUFBcUIsSUFBUztRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUF3Qyx1REFBYTtJQUduRCw0QkFBbUIsSUFBNEI7UUFBL0MsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FNWjtRQUpDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztJQUMzQixDQUFDO0lBRUQsc0JBQVcscUNBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFTSxpQ0FBSSxHQUFYO1FBQ0UsaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFFYixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbkUsQ0FBQztTQUNIO1FBRUQsNENBQTRDO1FBQzVDLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbkUsQ0FBQztTQUNIO1FBRUQsaUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQWMsTUFBYztRQUMxQixpQ0FBaUM7UUFDakMsc0RBQXNEO1FBQ3RELEdBQUc7UUFFSCxpQkFBTSxNQUFNLFlBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLDZDQUFnQixHQUF2QixVQUF3QixLQUF5QixJQUFTLENBQUM7SUFDcEQsOENBQWlCLEdBQXhCLFVBQXlCLEtBQXlCLElBQVMsQ0FBQztJQUNyRCw0Q0FBZSxHQUF0QixVQUF1QixLQUF5QixJQUFTLENBQUM7SUFDNUQseUJBQUM7QUFBRCxDQUFDLENBbER1QyxhQUFhLEdBa0RwRDs7OztBQ25HRDtJQUFBO0lBdUJBLENBQUM7SUFuQmUsZ0NBQWUsR0FBN0IsVUFBOEIsT0FBMEI7UUFDdEQsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUMvRCxDQUFDO0lBRWEsaUNBQWdCLEdBQTlCLFVBQStCLElBQVM7UUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzNELE9BQU8sZ0JBQWdCLENBQUMsbUJBQW1CLENBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2xCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYixxRkFBcUYsQ0FDdEYsQ0FBQztTQUNIO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYixxRkFBcUYsQ0FDdEYsQ0FBQztJQUNKLENBQUM7SUFyQmMsb0NBQW1CLEdBQ2hDLEVBQUUsQ0FBQztJQXFCUCx1QkFBQztDQUFBO0FBdkI0Qjs7O0FDSDdCO0lBS0UscUJBQW1CLFNBQWlCLEVBQUUsSUFBYTtRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFXLDZCQUFJO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFnQixLQUFjO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1NLDZCQUFPLEdBQWQ7UUFDRSxhQUFhO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sMkJBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLDBCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDOztBQUVEO0lBQUE7SUFpREEsQ0FBQztJQTlDZSwwQkFBYSxHQUEzQixVQUNFLElBQVksRUFDWixTQUFpQixFQUNqQixJQUFhO1FBRWIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVhLHNCQUFTLEdBQXZCLFVBQXdCLElBQVk7UUFDbEMsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQXdCLElBQUksQ0FBRSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRWEsc0JBQVMsR0FBdkIsVUFBd0IsSUFBWTtRQUNsQyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFYSx1QkFBVSxHQUF4QixVQUF5QixJQUFZO1FBQ25DLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVhLHdCQUFXLEdBQXpCLFVBQTBCLElBQVk7UUFDcEMsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRWEscUJBQVEsR0FBdEI7UUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RELEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFYSxvQkFBTyxHQUFyQjtRQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDdEQsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBL0NjLDBCQUFhLEdBQW9DLEVBQUUsQ0FBQztJQWdEckUsbUJBQUM7Q0FBQTtBQWpEd0I7OztBQ3hDekI7SUFBQTtJQXNCQSxDQUFDO0lBbkJlLCtCQUFlLEdBQTdCLFVBQThCLE9BQXlCO1FBQ3JELGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzlELENBQUM7SUFFYSwrQkFBZSxHQUE3QixVQUE4QixJQUFTO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksZUFBZSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxlQUFlLENBQUMsbUJBQW1CLENBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2xCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYixvRkFBb0YsQ0FDckYsQ0FBQztTQUNIO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYixvRkFBb0YsQ0FDckYsQ0FBQztJQUNKLENBQUM7SUFwQmMsbUNBQW1CLEdBQXlDLEVBQUUsQ0FBQztJQXFCaEYsc0JBQUM7Q0FBQTtBQXRCMkI7OztBQ0hjO0FBQ0c7QUFFN0MsSUFBWSxJQUtYO0FBTEQsV0FBWSxJQUFJO0lBQ2QsZ0NBQVM7SUFDVCw0QkFBTztJQUNQLGtDQUFVO0lBQ1YsZ0NBQVM7QUFDWCxDQUFDLEVBTFcsSUFBSSxLQUFKLElBQUksUUFLZjtBQUVEO0lBS0Usc0JBQW1CLFFBQWlCLEVBQUUsU0FBa0IsRUFBRSxRQUFpQjtRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDOztBQUVEO0lBQUE7SUF5RkEsQ0FBQztJQWhGZSx1QkFBVSxHQUF4QjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDL0I7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRWEsc0JBQVMsR0FBdkIsVUFBd0IsR0FBUztRQUMvQixPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVhLDZCQUFnQixHQUE5QjtRQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVjLHNCQUFTLEdBQXhCLFVBQXlCLEtBQW9CO1FBQzNDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN6Qyw2RUFBNkU7UUFDN0UseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixHQUFHO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRWMsb0JBQU8sR0FBdEIsVUFBdUIsS0FBb0I7UUFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzFDLDhFQUE4RTtRQUM5RSw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLElBQUk7UUFDSixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFYyx3QkFBVyxHQUExQixVQUEyQixLQUFpQjtRQUMxQyxZQUFZLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDcEQsWUFBWSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ3BELFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNyQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDdkMsQ0FBQztJQUVjLHdCQUFXLEdBQTFCLFVBQTJCLEtBQWlCO1FBQzFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDL0I7YUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsWUFBWSxDQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osSUFBSSxZQUFZLENBQ2QsWUFBWSxDQUFDLFNBQVMsRUFDdEIsWUFBWSxDQUFDLFVBQVUsRUFDdkIsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQ2hDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFYyxzQkFBUyxHQUF4QixVQUF5QixLQUFpQjtRQUN4QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLFlBQVksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixZQUFZLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUNqQztRQUVELFlBQVksQ0FDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLElBQUksWUFBWSxDQUNkLFlBQVksQ0FBQyxTQUFTLEVBQ3RCLFlBQVksQ0FBQyxVQUFVLEVBQ3ZCLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUNoQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBdkZjLGtCQUFLLEdBQWMsRUFBRSxDQUFDO0lBS3RCLHNCQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLHVCQUFVLEdBQVksS0FBSyxDQUFDO0lBa0Y3QyxtQkFBQztDQUFBO0FBekZ3Qjs7O0FDbEJ6QjtJQU1FLHNCQUFtQixJQUFtQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTSwrQkFBUSxHQUFmLFVBQWdCLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxrQ0FBVyxHQUFsQixjQUE0QixDQUFDO0lBRXRCLDZCQUFNLEdBQWIsVUFBYyxJQUFZLElBQVMsQ0FBQztJQUU3Qiw0QkFBSyxHQUFaLFVBQWEsUUFBYSxJQUFTLENBQUM7SUFDdEMsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEIwRDtBQUNiO0FBSzlDO0lBQUE7UUFDUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxHQUFHLENBQUM7SUFhN0IsQ0FBQztJQVhRLGtEQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUNILG1DQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUFBO0lBVUEsQ0FBQztJQVRDLHNCQUFXLGlEQUFJO2FBQWY7WUFDRSxPQUFPLGtCQUFrQixDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsdURBQWEsR0FBYixVQUFjLElBQVM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxzQ0FBQztBQUFELENBQUM7O0FBRUQ7SUFBOEMsbUVBQVk7SUFHeEQsa0NBQW1CLElBQWtDO1FBQXJELFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBR1o7UUFOTSxXQUFLLEdBQVcsR0FBRyxDQUFDO1FBS3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7SUFDMUIsQ0FBQztJQUVNLHlDQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3hCLElBQUksc0JBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDaEQ7UUFFRCxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoRDtRQUVELElBQUksc0JBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDaEQ7UUFFRCxpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxDQTVCNkMsWUFBWSxHQTRCekQ7Ozs7QUMvREQ7SUFBQTtJQWtCQSxDQUFDO0lBakJlLG9CQUFLLEdBQW5CLFVBQW9CLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUN6RCxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDZixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2YsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVhLHVCQUFRLEdBQXRCLFVBQXVCLE9BQWU7UUFDcEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFYSx1QkFBUSxHQUF0QixVQUF1QixPQUFlO1FBQ3BDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDOztBQUVELDhFQUE4RTtBQUM5RSxvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLEdBQUc7QUFFSCxvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLEdBQUc7QUFFSCxlQUFlO0FBQ2YsSUFBSTtBQUVKLHlEQUF5RDtBQUN6RCxxQ0FBcUM7QUFDckMsSUFBSTtBQUVKLHlEQUF5RDtBQUN6RCxxQ0FBcUM7QUFDckMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENpRDtBQUNHO0FBQ2Q7QUFFRztBQUNDO0FBSzlDO0lBQUE7UUFDUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQVksSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLDZCQUF3QixHQUFXLEVBQUUsQ0FBQztRQUN0Qyw2QkFBd0IsR0FBVyxFQUFFLENBQUM7UUFDdEMsdUJBQWtCLEdBQVcsRUFBRSxDQUFDO0lBbUN6QyxDQUFDO0lBakNRLHdDQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQ2IsNERBQTRELENBQzdELENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUNiLDREQUE0RCxDQUM3RCxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQVVBLENBQUM7SUFUQyxzQkFBVyx1Q0FBSTthQUFmO1lBQ0UsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsSUFBUztRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUM7O0FBRUQ7SUFBb0MsK0NBQVk7SUFXOUMsd0JBQW1CLElBQXdCO1FBQTNDLFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBWVo7UUF0Qk8sZUFBUyxHQUFHLFlBQVksQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLCtCQUF5QixHQUFXLEVBQUUsQ0FBQztRQUN2QywrQkFBeUIsR0FBVyxFQUFFLENBQUM7UUFDdkMseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBUXZDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxLQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQy9ELEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDL0QsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUVuRCxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLENBQUM7UUFDdEMsaUJBQWlCLENBQ2Ysa0JBQWtCLEdBQUcsS0FBSSxDQUFDLHlCQUF5QixFQUNuRCxLQUFJLENBQ0wsQ0FBQzs7SUFDSixDQUFDO0lBRU0sb0NBQVcsR0FBbEI7O1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7UUFFcEIsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBSSxDQUFDLE1BQU0sMENBQUUsa0JBQWtCLENBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FDRSxDQUFDO0lBQy9CLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQWMsSUFBWTs7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBRUQsSUFBTSxXQUFXLEdBQUcsVUFBSSxDQUFDLE1BQU0sMENBQUUsa0JBQWtCLENBQ2pELElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBTSxPQUFPLEdBQVcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRTlELDZCQUE2QjtZQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3hCO1lBRUQsMEJBQTBCO1lBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1lBRUQsVUFBSSxDQUFDLE1BQU0sMENBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUNsRCxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5Qix1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2pFO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5Qix1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDaEU7YUFDRjtZQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7UUFFRCxpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxPQUFnQjs7UUFDeEIsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3BCLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsTUFBTTtZQUNSLEtBQUssa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QjtnQkFDdEQsSUFBTSxJQUFJLEdBQWtCLE9BQU8sQ0FBQyxPQUF3QixDQUFDO2dCQUM3RCxJQUNFLFdBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxDQUFDLDBDQUFFLElBQUksTUFBSyxJQUFJLENBQUMseUJBQXlCO29CQUNoRCxXQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsQ0FBQywwQ0FBRSxJQUFJLE1BQUssSUFBSSxDQUFDLHlCQUF5QixFQUNoRDtvQkFDQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ1gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNuQztnQkFDRCxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBRU8sa0NBQVMsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRU8sc0NBQWEsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDcEQsQ0FBQztJQUVPLDRCQUFHLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sbUNBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTywrQkFBTSxHQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3hCLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVPLGtDQUFTLEdBQWpCLFVBQWtCLENBQVM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUNiLFVBQUcsSUFBSSxDQUFDLG1CQUFtQixtQ0FBZ0MsQ0FDNUQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxDQXhKbUMsWUFBWSxHQXdKL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTnlDO0FBQ0k7QUFLOUM7SUFBQTtRQUNTLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFbEIsYUFBUSxHQUFZLFlBQVksQ0FBQztJQWExQyxDQUFDO0lBWFEsMENBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFDSCwyQkFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQVVBLENBQUM7SUFUQyxzQkFBVyx5Q0FBSTthQUFmO1lBQ0UsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCwrQ0FBYSxHQUFiLFVBQWMsSUFBUztRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUFzQyxtREFBWTtJQUdoRCwwQkFBbUIsSUFBMEI7UUFBN0MsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FHWjtRQURDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7SUFDakMsQ0FBQztJQUVNLGlDQUFNLEdBQWIsVUFBYyxJQUFZOztRQUN4QixVQUFJLENBQUMsTUFBTSwwQ0FBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsaUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQ0FkcUMsWUFBWSxHQWNqRDs7OztBQ2xEeUI7QUFFMUI7O0dBRUc7QUFDSDtJQU9FOzs7OztPQUtHO0lBQ0gsZ0JBQW1CLElBQVk7UUFUdkIsZ0JBQVcsR0FBK0IsRUFBRSxDQUFDO1FBQzdDLGNBQVMsR0FBNkMsRUFBRSxDQUFDO1FBUy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFLRCxzQkFBVyx3QkFBSTtRQUhmOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNJLG9CQUFHLEdBQVY7UUFDRSxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kscUNBQW9CLEdBQTNCLFVBQTRCLElBQVk7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUN4QyxNQUFNLElBQUksS0FBSyxDQUNiLHdDQUFpQyxJQUFJLHdCQUFjLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FDaEUsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxtQ0FBa0IsR0FBekIsVUFBMEIsSUFBWTtRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0NBQStCLElBQUksd0JBQWMsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUM5RCxDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVTLHFCQUFJLEdBQWQsVUFBZSxZQUFvQixFQUFFLGNBQXNCO1FBQ3pELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCLFVBQW1CLE1BQWMsRUFBRSxVQUFrQjs7UUFDbkQsSUFBSSxNQUFNLEdBQWdCLGVBQWUsQ0FBQyxVQUFVLENBQWdCLENBQUM7UUFFckUsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyx5QkFBbUIsQ0FBQyxNQUFNLENBQUMsMENBQUUsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLDhCQUFhLEdBQXJCLFVBQ0UsWUFBeUIsRUFDekIsY0FBMkI7O1FBRTNCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLEVBQWtCLENBQUM7UUFFbkQsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0MsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFL0MsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QixJQUFNLEtBQUssR0FBRywwQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBDQUFFLElBQUksRUFBRSxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7SUFFTyxpQ0FBZ0IsR0FBeEI7UUFDRSxxQ0FBcUM7UUFDckMsSUFBTSxjQUFjLEdBQUcsc0JBQXNCLENBQzNDLElBQUksQ0FBQyxRQUFRLEVBQ2Isb0JBQW9CLENBQ3JCLENBQUM7UUFFRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQU0sYUFBYSxHQUFvQixrQkFBa0IsQ0FDdkQsSUFBSSxDQUFDLFFBQVEsRUFDYixDQUFDLENBQ2lCLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbEIsTUFBTTthQUNQO1lBRUQsNkZBQTZGO1lBQzdGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFvQixDQUN6RCxJQUFJLENBQUMsUUFBUSxFQUNiLGFBQWEsQ0FBQyxJQUFJLENBQ25CLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTywrQkFBYyxHQUF0QjtRQUNFLElBQU0sWUFBWSxHQUFHLHNCQUFzQixDQUN6QyxJQUFJLENBQUMsUUFBUSxFQUNiLGtCQUFrQixDQUNuQixDQUFDO1FBRUYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFNLFdBQVcsR0FBb0IsbUJBQW1CLENBQ3RELElBQUksQ0FBQyxRQUFRLEVBQ2IsQ0FBQyxDQUNpQixDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE1BQU07YUFDUDtZQUVELDZGQUE2RjtZQUM3RixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBcUIsQ0FDdEQsSUFBSSxDQUFDLFFBQVEsRUFDYixXQUFXLENBQUMsSUFBSSxDQUNPLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSmtDO0FBRW5DO0lBQWlDLHlDQUFNO0lBQ3JDO1FBQUEsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FHZjtRQURDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFFTyxxQ0FBZSxHQUF2QjtRQUNFLE9BQU8sc1NBYU4sQ0FBQztJQUNKLENBQUM7SUFFTyx1Q0FBaUIsR0FBekI7UUFDRSxPQUFPLHFPQVdOLENBQUM7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLENBdENnQyxNQUFNLEdBc0N0Qzs7OztBQ3hDRDtJQU1FLGVBQ0UsQ0FBZSxFQUNmLENBQWUsRUFDZixDQUFlLEVBQ2YsQ0FBZTtRQUhmLDJCQUFlO1FBQ2YsMkJBQWU7UUFDZiwyQkFBZTtRQUNmLDJCQUFlO1FBRWYsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsc0JBQVcsb0JBQUM7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDO2FBTUQsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQVJBO0lBRUQsc0JBQVcseUJBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsb0JBQUM7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDO2FBTUQsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQVJBO0lBRUQsc0JBQVcseUJBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsb0JBQUM7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDO2FBTUQsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQVJBO0lBRUQsc0JBQVcseUJBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsb0JBQUM7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDO2FBTUQsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQVJBO0lBRUQsc0JBQVcseUJBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTU0sdUJBQU8sR0FBZDtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLDRCQUFZLEdBQW5CO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVNLDhCQUFjLEdBQXJCO1FBQ0UsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRWEsV0FBSyxHQUFuQjtRQUNFLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRWEsV0FBSyxHQUFuQjtRQUNFLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVhLFNBQUcsR0FBakI7UUFDRSxPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFYSxXQUFLLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRWEsVUFBSSxHQUFsQjtRQUNFLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7O0FDOUYrQjtBQUVGO0FBRWU7QUFFN0MsSUFBTSxLQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQ3hCLElBQU0sTUFBTSxHQUFXLENBQUMsQ0FBQztBQUN6QixJQUFNLGVBQWUsR0FBZSxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFekU7SUFPRSxpQkFBbUIsSUFBWSxFQUFFLEtBQWlCLEVBQUUsTUFBa0I7UUFBckMsaUNBQWlCO1FBQUUsbUNBQWtCO1FBSjlELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFLakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsRUFBa0IsQ0FBQztRQUVsRCxpQkFBaUIsQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVaLHdEQUF3RDtRQUN4RCxhQUFhLENBQ1gsYUFBYSxFQUNiLEtBQUssRUFDTCxPQUFPLEVBQ1AsQ0FBQyxFQUNELENBQUMsRUFDRCxNQUFNLEVBQ04sT0FBTyxFQUNQLGdCQUFnQixFQUNoQixlQUFlLENBQ2hCLENBQUM7UUFFRixJQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFlLENBQUM7UUFDOUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRU0seUJBQU8sR0FBZDtRQUNFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQVcseUJBQUk7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFRO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVNLHNCQUFJLEdBQVg7UUFDRSxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sd0JBQU0sR0FBYjtRQUNFLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQ0FBZSxHQUF0QixVQUF1QixXQUF1QjtRQUF2Qiw2Q0FBdUI7UUFDNUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCwyQkFBUyxHQUFULFVBQVUsT0FBZ0I7UUFDeEIsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFxQixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRU8sc0NBQW9CLEdBQTVCLFVBQTZCLEtBQWlCO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVosbURBQW1EO1FBQ25ELGFBQWEsQ0FDWCxhQUFhLEVBQ2IsS0FBSyxFQUNMLE9BQU8sRUFDUCxPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQ1gsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCx3REFBd0Q7WUFFeEQsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckUsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDdEU7UUFDRCxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkUsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTyw0QkFBVSxHQUFsQjtRQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixLQUFhO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDOzs7O0FDckltQztBQUVwQztJQUlFLDhCQUFtQixPQUFnQjtRQUY1QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUdoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDO0FBRUQ7SUFHRTtJQUF1QixDQUFDO0lBRVYseUJBQVUsR0FBeEIsVUFBeUIsV0FBbUI7UUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUN2RCxDQUFDO0lBRWEsNkJBQWMsR0FBNUIsVUFBNkIsV0FBbUI7UUFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxDQUFDLElBQUksQ0FDViwwQkFBbUIsV0FBVyxzREFBbUQsQ0FDbEYsQ0FBQztTQUNIO2FBQU07WUFDTCxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZELElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RCxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEQscURBQXFEO2dCQUNyRCxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7SUEzQmMsd0JBQVMsR0FBNkMsRUFBRSxDQUFDO0lBNEIxRSxxQkFBQztDQUFBO0FBN0IwQjs7O0FDVHVCO0FBRWxEO0lBT0Usa0JBQW1CLElBQVksRUFBRSxrQkFBMEIsRUFBRSxJQUFXO1FBQ3RFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyx5QkFBeUIsQ0FDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUN6QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsc0JBQVcsMEJBQUk7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHdDQUFrQjthQUE3QjtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2xDLENBQUM7YUFhRCxVQUE4QixLQUFhO1lBQ3pDLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7Z0JBQ3RDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztZQUVqQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQXlCLENBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQzthQUNIO1FBQ0gsQ0FBQzs7O09BeEJBO0lBRUQsc0JBQVcsb0NBQWM7YUFBekI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDekIsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywwQkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBZU0sMEJBQU8sR0FBZDtRQUNFLDZCQUE2QixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQzs7OztBQ3pERDtJQUdFO1FBRlEsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUczQixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVE7WUFDUixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsUUFBUTtZQUNSLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixRQUFRO1lBQ1IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLFFBQVE7WUFDUixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ1gsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBVywyQkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRWEsa0JBQVEsR0FBdEI7UUFDRSxPQUFPLElBQUksU0FBUyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNXLHNCQUFZLEdBQTFCLFVBQ0UsSUFBWSxFQUNaLEtBQWEsRUFDYixNQUFjLEVBQ2QsR0FBVyxFQUNYLFFBQWdCLEVBQ2hCLE9BQWU7UUFFZixJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRXhCLElBQU0sRUFBRSxHQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFNLEVBQUUsR0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBTSxFQUFFLEdBQVcsR0FBRyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUV2QixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV4QyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDVyxxQkFBVyxHQUF6QixVQUEwQixRQUFpQjtRQUN6QyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRXhCLCtDQUErQztRQUMvQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUV6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDVyxtQkFBUyxHQUF2QixVQUF3QixjQUFzQjtRQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFYSxtQkFBUyxHQUF2QixVQUF3QixjQUFzQjtRQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFYSxtQkFBUyxHQUF2QixVQUF3QixjQUFzQjtRQUM1Qyw4RUFBOEU7UUFDOUUsaUJBQWlCO1FBRWpCLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRWEscUJBQVcsR0FBekIsVUFDRSxRQUFnQixFQUNoQixRQUFnQixFQUNoQixRQUFnQjtRQUVoQixJQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QyxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVhLGVBQUssR0FBbkIsVUFBb0IsS0FBYztRQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRXhCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVhLGtCQUFRLEdBQXRCLFVBQXVCLENBQVksRUFBRSxDQUFZO1FBQy9DLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFFeEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFNUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sa0NBQWMsR0FBckI7UUFDRSxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixDQUFZO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQzs7OztBQ3ROdUM7QUFDSjtBQUVwQztJQUFBO1FBQ1MsYUFBUSxHQUFZLFlBQVksQ0FBQztRQUNqQyxhQUFRLEdBQVksWUFBWSxDQUFDO1FBQ2pDLFVBQUssR0FBWSxXQUFXLENBQUM7SUFvQ3RDLENBQUM7SUFsQ1EsNEJBQVEsR0FBZixVQUFnQixTQUFvQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sMkNBQXVCLEdBQTlCO1FBQ0UsSUFBSSxXQUFXLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZELElBQUksUUFBUSxHQUFHLHFCQUFxQixDQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDaEIsQ0FBQztRQUNGLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEMscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixPQUFPLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUM7Ozs7QUN0QzZDO0FBQ0E7QUFHOUM7SUFnQkUsbUJBQW1CLEVBQVUsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQWRsRCxjQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUU1QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixpQkFBWSxHQUFjLGtCQUFrQixFQUFFLENBQUM7UUFDL0MsaUJBQVksR0FBYyxrQkFBa0IsRUFBRSxDQUFDO1FBSWhELGNBQVMsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFXLHlCQUFFO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw2QkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQ0FBVzthQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLCtCQUFRO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRU0sNEJBQVEsR0FBZixVQUFnQixLQUFnQjtRQUM5QixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixLQUFnQjtRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUMxQiwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssWUFBSyxLQUFLLEdBQUcsRUFBYixDQUFhLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFTSxzQ0FBa0IsR0FBekIsVUFBMEIsSUFBWTtRQUNwQyxLQUFzQixVQUFnQixFQUFoQixTQUFJLENBQUMsV0FBVyxFQUFoQixjQUFnQixFQUFoQixJQUFnQixFQUFFO1lBQW5DLElBQUksU0FBUztZQUNoQixJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUMzQixPQUFPLFNBQVMsQ0FBQzthQUNsQjtTQUNGO1FBRUQsS0FBa0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUE3QixJQUFJLEtBQUs7WUFDWixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUMzQixPQUFPLFNBQVMsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUF5QixJQUFZO1FBQ25DLEtBQXFCLFVBQWUsRUFBZixTQUFJLENBQUMsVUFBVSxFQUFmLGNBQWUsRUFBZixJQUFlLEVBQUU7WUFBakMsSUFBSSxRQUFRO1lBQ2YsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDMUIsT0FBTyxRQUFRLENBQUM7YUFDakI7U0FDRjtRQUVELEtBQWtCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBN0IsSUFBSSxLQUFLO1lBQ1osSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDMUIsT0FBTyxRQUFRLENBQUM7YUFDakI7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSxtQ0FBZSxHQUF0QixVQUF1QixJQUFZO1FBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELEtBQWtCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBN0IsSUFBSSxLQUFLO1lBQ1osSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3hCLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7U0FDRjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSxnQ0FBWSxHQUFuQixVQUFvQixTQUFxQjtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixRQUFtQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1lBQ2pDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQWtCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBN0IsSUFBSSxLQUFLO1lBQ1osS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDakMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQy9CLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILEtBQWtCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBN0IsSUFBSSxLQUFLO1lBQ1osS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ2xFLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDakMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBa0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUE3QixJQUFJLEtBQUs7WUFDWixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxNQUFjO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUNqQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBa0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUE3QixJQUFJLEtBQUs7WUFDWixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVTLDJCQUFPLEdBQWpCLFVBQWtCLEtBQVk7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFDQUFpQixHQUF6QixVQUEwQixpQkFBd0M7UUFDaEUsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FDcEMsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQzs7OztBQzVMdUM7QUFFeEM7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0JBQVcsdUJBQUk7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLE1BQWlCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSwrQkFBZSxHQUF0QixVQUF1QixJQUFZO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLE1BQWM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7O0FDckNvRTtBQUNOO0FBRS9CO0FBQ1E7QUFFeEMsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDJEQUFhO0lBQ2IsK0NBQU87SUFDUCxpREFBUTtBQUNWLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQjtBQUVEO0lBUUUsY0FBbUIsRUFBVSxFQUFFLElBQVksRUFBRSxXQUFtQjtRQUh4RCxXQUFNLEdBQWMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFXLG9CQUFFO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkJBQVc7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVNLHlCQUFVLEdBQWpCLFVBQWtCLFFBQWE7UUFBL0IsaUJBUUM7UUFQQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNuRTtRQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtZQUM5QixLQUFJLENBQUMsYUFBYSxDQUFDLENBQWMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVNLHFCQUFNLEdBQWIsY0FBdUIsQ0FBQztJQUVqQixxQkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRU0scUJBQU0sR0FBYixVQUFjLE1BQWM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVNLDBCQUFXLEdBQWxCLGNBQTRCLENBQUM7SUFFdEIsNEJBQWEsR0FBcEIsY0FBOEIsQ0FBQztJQUV2Qiw0QkFBYSxHQUFyQixVQUFzQixXQUFnQixFQUFFLE1BQTZCO1FBQXJFLGlCQW9DQztRQW5DQyxJQUFJLElBQUksR0FBVyxFQUFFLENBQUM7UUFDdEIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakUsSUFBSSxXQUFXLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDMUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNO2dCQUNwQyxJQUFNLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ3pCLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtnQkFDbkMsSUFBTSxRQUFRLEdBQUcsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksV0FBVyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNO2dCQUNsQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7Ozs7QUNuSCtCO0FBSWE7QUFDZjtBQUU5QjtJQU9FO0lBQXVCLENBQUM7SUFFVixzQkFBVSxHQUF4QjtRQUNFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxZQUFZO1FBQ1osV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDO0lBQ3JFLENBQUM7SUFFYSxzQkFBVSxHQUF4QixVQUF5QixFQUFVO1FBQ2pDLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ2xELElBQUksMEJBQTBCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hFLElBQU0sS0FBSyxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLEtBQUssRUFBRTtvQkFDVCxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3QjthQUNGO2lCQUFNO2dCQUNMLGlCQUFpQixDQUNmLGlDQUFpQyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFDcEUsV0FBVyxDQUFDLEtBQUssQ0FDbEIsQ0FBQztnQkFDRixzQkFBc0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxRDtTQUNGO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFZLEVBQUUsb0JBQWlCLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFYSxrQkFBTSxHQUFwQixVQUFxQixJQUFZO1FBQy9CLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRWEsa0JBQU0sR0FBcEIsVUFBcUIsTUFBYztRQUNqQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVNLCtCQUFTLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNsRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBb0IsQ0FBQztZQUN6QyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVjLG9CQUFRLEdBQXZCLFVBQXdCLEtBQWdCO1FBQ3RDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxNQUFjLENBQUM7UUFDbkIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxFQUFFO1lBQzVDLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxRQUFRLEdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNMLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7UUFFRCxJQUFJLGVBQWUsR0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxFQUFFO1lBQzVDLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDaEQ7U0FDRjtRQUVELFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN2RSxXQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQXpGYyx5QkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFDLHVEQUF1RDtJQUN4Qyw0QkFBZ0IsR0FBNkIsRUFBRSxDQUFDO0lBd0ZqRSxrQkFBQztDQUFBO0FBM0Z1Qjs7O0FDVnlDO0FBQ3NCO0FBQ1Y7QUFDWDtBQUNLO0FBQ2xCO0FBQ0Q7QUFDVTtBQUN5QjtBQUNwQjtBQUNJO0FBQzdCO0FBQ2E7QUFDZDtBQUNNO0FBQ2M7QUFDSztBQUNyQjtBQUdLO0FBQ0E7QUFFbEQ7O0dBRUc7QUFDSDtJQVFFOzs7O09BSUc7SUFDSCxnQkFBbUIsS0FBYyxFQUFFLE1BQWU7UUFUMUMsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFVaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksc0JBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN4QztRQUVELHVCQUF1QixFQUFFLENBQUM7UUFDMUIsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQixzQkFBc0IsRUFBRSxDQUFDO1FBRXpCLGFBQWEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEIsWUFBWSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRW5ELElBQUksWUFBWSxHQUFHLHdCQUlsQixDQUFDO1FBQ0YsSUFBSSxXQUFXLEdBQUcsd0JBQXVELENBQUM7UUFDMUUsSUFBSSxZQUFZLEdBQUcsd0JBSWxCLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV4QixpQkFBaUI7UUFDakIsZ0NBQWdDLENBQzlCLElBQUksUUFBUSxDQUNWLFdBQVcsRUFDWCxvQ0FBb0MsRUFDcEMsV0FBVyxFQUFFLENBQ2QsQ0FDRixDQUFDO1FBRUYsZ0NBQWdDLENBQzlCLElBQUksUUFBUSxDQUNWLFdBQVcsRUFDWCxvQ0FBb0MsRUFDcEMsV0FBVyxFQUFFLENBQ2QsQ0FDRixDQUFDO1FBRUYsZ0NBQWdDLENBQzlCLElBQUksUUFBUSxDQUNWLE1BQU0sRUFDTix1Q0FBdUMsRUFDdkMsV0FBVyxFQUFFLENBQ2QsQ0FDRixDQUFDO1FBRUYsZ0NBQWdDLENBQzlCLElBQUksUUFBUSxDQUNWLE9BQU8sRUFDUCxzQ0FBc0MsRUFDdEMsV0FBVyxFQUFFLENBQ2QsQ0FDRixDQUFDO1FBRUYsMEJBQTBCLENBQ3hCLFVBQVUsRUFDVixpQ0FBaUMsRUFDakMsS0FBSyxDQUNOLENBQUM7UUFFRiwwQkFBMEIsQ0FDeEIsT0FBTyxFQUNQLGlDQUFpQyxFQUNqQyxJQUFJLENBQ0wsQ0FBQztRQUVGLDBCQUEwQixDQUFDLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSwwQkFBMEIsQ0FDeEIsTUFBTSxFQUNOLGlDQUFpQyxFQUNqQyxLQUFLLENBQ04sQ0FBQztRQUNGLDBCQUEwQixDQUFDLE1BQU0sRUFBRSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RSxnQ0FBZ0M7UUFDaEMsZ0NBQWdDLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDL0QsZ0NBQWdDLENBQUMsSUFBSSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7UUFDdkUsZ0NBQWdDLENBQUMsSUFBSSx5QkFBeUIsRUFBRSxDQUFDLENBQUM7UUFDbEUsK0JBQStCLENBQUMsSUFBSSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDL0QsK0JBQStCLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDN0QsK0JBQStCLENBQUMsSUFBSSwrQkFBK0IsRUFBRSxDQUFDLENBQUM7UUFFdkUsZ0RBQWdEO1FBQ2hELHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLHVCQUFNLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUMxQztZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLENBQ3ZDLENBQUMsRUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ25CLENBQUMsRUFDRCxDQUFDLEtBQUssRUFDTixLQUFLLENBQ04sQ0FBQztZQUVGLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBRU8scUJBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sMEJBQVMsR0FBaEIsVUFBaUIsT0FBZ0I7UUFDL0IsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQXVCLENBQUM7UUFDckQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxZQUFZLEVBQUU7U0FDbEQ7SUFDSCxDQUFDO0lBRU8sd0JBQU8sR0FBZixVQUFnQixjQUFpRDtRQUMvRCxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyx1QkFBTSxHQUFkO1FBQ0UsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFbkQsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekIsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUIsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVPLHVCQUFNLEdBQWQ7UUFDRSxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pDLElBQU0sa0JBQWtCLEdBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFdkQsbUJBQW1CLENBQ2pCLGtCQUFrQixFQUNsQixLQUFLLEVBQ0wsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FDeEMsQ0FBQztTQUNIO1FBQ0QscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7QUM1Tm9CO0FBQ2tCO0FBRXZDLElBQUksTUFBYyxDQUFDO0FBQ25CLDBDQUEwQztBQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLFFBQVEsR0FBRztJQUNoQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvYXNzZXRzL3NvdW5kc3xzeW5jfEM6Ly4od2F2JTdDbXAzKSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvdGV4dHVyZXN8c3luY3xDOi8uKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy96b25lc3xzeW5jfEM6Ly4oanNvbikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2VCdXMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29sbGlzaW9uL2NvbGxpc2lvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvaW1hZ2VBc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvYXNzZXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvZ2wudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbEJ1ZmZlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3ZlcnRleC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvYmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3Mvc2hhcGVzMkQvY2lyY2xlMkQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9zaGFwZXMyRC9yZWN0YW5nbGUyZC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbGxpc2lvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hdWRpby9hdWRpb01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvaW5wdXQvaW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2Jhc2VCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9rZXlib2FyZE1vdmVtZW50QmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL21hdGhFeHRlbnNpb25zLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL3BsYXllckJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL3JvdGF0aW9uQmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9zaGFkZXJzL2Jhc2ljU2hhZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvY29sb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy90ZXh0dXJlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvdGV4dHVyZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvbWF0cml4NHg0LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS93b3JsZC9zaW1PYmplY3QudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS93b3JsZC9zY2VuZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3pvbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS93b3JsZC96b25lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzJiMzA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmIzMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWxmX3JlbWl4Lm1wM1wiOiA4NTMsXG5cdFwiLi9iaXJkX2p1bXAud2F2XCI6IDYwNyxcblx0XCIuL2RlYXRoLndhdlwiOiA5NTksXG5cdFwiLi90aW5nLndhdlwiOiA1MzZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA2MDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tncm91bmQucG5nXCI6IDY5MSxcblx0XCIuL2JpcmQucG5nXCI6IDExLFxuXHRcIi4vYmlyZF9zaHJ1bmsucG5nXCI6IDgyNixcblx0XCIuL2JpcmRfc2hydW5rXzIucG5nXCI6IDg0OSxcblx0XCIuL2dyYXNzLnBuZ1wiOiA0NzMsXG5cdFwiLi9ncmFzc19iaWdnZXIucG5nXCI6IDgyNCxcblx0XCIuL3BpcGVfYm9keS5wbmdcIjogMjkyLFxuXHRcIi4vcGlwZV9lbmQucG5nXCI6IDQ0MCxcblx0XCIuL3N0b25lX3dhbGwuanBnXCI6IDE5MCxcblx0XCIuL3N0b25lX3dhbGxfMTI4eDEyOC5qcGdcIjogNzM4LFxuXHRcIi4vd29vZF9wbGFuay5qcGdcIjogODQ3LFxuXHRcIi4vd29vZF9wbGFua18xMjh4MTI4LmpwZ1wiOiAzMDZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL3Rlc3Rab25lLmpzb25cIjogOTkzXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gOTI0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgcHVibGljIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IE1lc3NhZ2UsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcikge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUgfSBmcm9tICcuL21lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVByaW9yaXR5IH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcclxuICBwcml2YXRlIHN0YXRpYyBfc3Vic2NyaXB0aW9uczogeyBbY29kZTogc3RyaW5nXTogSU1lc3NhZ2VIYW5kbGVyW10gfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsUXVldWVNZXNzYWdlUGVyVXBkYXRlOiBudW1iZXIgPSAxMDtcclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsTWVzc2FnZVF1ZXVlOiBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZFN1YnNjcmlwdGlvbihjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5pbmRleE9mKGhhbmRsZXIpICE9PSAtMSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ0F0dGVtcHRpbmcgdG8gYWRkIGEgZHVwbGljYXRlIGhhbmRsZXIgdG8gY29kZSAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJy4gU3Vic2NyaXB0aW9uIG5vdCBhZGRlZC4nXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbW92ZVN1YnNjcmlwdGlvbihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlclxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gTm90IHN1cmUgaWYgdGhpcyBpcyBjb3JyZWN0XHJcbiAgICBpZiAoIU1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdDYW5ub3QgdW5zdWJzY3JpYmUgaGFuZGxlciBmcm9tIGNvZGU6ICcgK1xyXG4gICAgICAgICAgY29kZSArXHJcbiAgICAgICAgICAnIGJlY2F1c2UgdGhhdCBjb2RlIGRvZXMgbm90IHN1YnNjcmliZWQgdG8uJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5vZGVJbmRleCA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgIGlmIChub2RlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmZpbHRlcihcclxuICAgICAgICAoXywgaWR4KSA9PiBpZHggIT09IG5vZGVJbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwb3N0KG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIHBvc3RlZDonLCBtZXNzYWdlKTtcclxuICAgIGNvbnN0IGhhbmRsZXJzID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1ttZXNzYWdlLmNvZGVdO1xyXG4gICAgaWYgKCFoYW5kbGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5wcmlvcml0eSA9PT0gTWVzc2FnZVByaW9yaXR5LkhJR0gpIHtcclxuICAgICAgICBoLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUucHVzaChcclxuICAgICAgICAgIG5ldyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZShtZXNzYWdlLCBoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTm90IHVzaW5nIHRpbWU/XHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUxpbWl0ID0gTWF0aC5taW4oXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZSxcclxuICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VMaW1pdDsgKytpKSB7XHJcbiAgICAgIGxldCBub2RlID0gTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnBvcCgpO1xyXG4gICAgICBub2RlPy5oYW5kbGVyLm9uTWVzc2FnZShub2RlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VCdXMgfSBmcm9tICcuL21lc3NhZ2VCdXMnO1xyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVByaW9yaXR5IHtcclxuICBOT1JNQUwsXHJcbiAgSElHSCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gIHB1YmxpYyBjb2RlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbnRleHQ6IHVua25vd247XHJcbiAgcHVibGljIHNlbmRlcjogdW5rbm93bjtcclxuICBwdWJsaWMgcHJpb3JpdHk6IE1lc3NhZ2VQcmlvcml0eTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dDogdW5rbm93bixcclxuICAgIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHkgPSBNZXNzYWdlUHJpb3JpdHkuTk9STUFMXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kKGNvZGU6IHN0cmluZywgc2VuZGVyOiB1bmtub3duLCBjb250ZXh0PzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5Lk5PUk1BTCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kUHJpb3JpdHkoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBzZW5kZXI6IHVua25vd24sXHJcbiAgICBjb250ZXh0PzogdW5rbm93blxyXG4gICk6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5LkhJR0gpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLmFkZFN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5zdWJzY3JpYmUoY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucmVtb3ZlU3Vic2NyaXB0aW9uKGNvZGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbGxpc2lvbkNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uRGF0YSB7XHJcbiAgcHVibGljIHRpbWU6IG51bWJlcjtcclxuICBwdWJsaWMgYTogQ29sbGlzaW9uQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBiOiBDb2xsaXNpb25Db21wb25lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHRpbWU6IG51bWJlcixcclxuICAgIGE6IENvbGxpc2lvbkNvbXBvbmVudCxcclxuICAgIGI6IENvbGxpc2lvbkNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgIHRoaXMuYSA9IGE7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF90b3RhbFRpbWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbXBvbmVudHM6IENvbGxpc2lvbkNvbXBvbmVudFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9jb2xsaXNpb25EYXRhOiBDb2xsaXNpb25EYXRhW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJDb2xsaXNpb25Db21wb25lbnQoY29tcG9uZW50OiBDb2xsaXNpb25Db21wb25lbnQpIHtcclxuICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyQ29sbGlzaW9uQ29tcG9uZW50KGNvbXBvbmVudDogQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBpZHggPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KTtcclxuICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmZpbHRlcihcclxuICAgICAgICAoXywgaSkgPT4gaSAhPT0gaWR4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLl90b3RhbFRpbWUgKz0gdGltZTtcclxuXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IENvbGxpc2lvbk1hbmFnZXIuX2NvbXBvbmVudHMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgbGV0IGNvbXAgPSBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzW2NdO1xyXG4gICAgICBmb3IgKGxldCBvID0gYyArIDE7IGMgPCBDb2xsaXNpb25NYW5hZ2VyLl9jb21wb25lbnRzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgbGV0IG90aGVyID0gQ29sbGlzaW9uTWFuYWdlci5fY29tcG9uZW50c1tvXTtcclxuXHJcbiAgICAgICAgaWYgKGNvbXAuc2hhcGUuaW50ZXJzZWN0cyhvdGhlci5zaGFwZSkpIHtcclxuICAgICAgICAgIC8vIEhhdmUgYSBjb2xsaXNpb25cclxuICAgICAgICAgIGxldCBleGlzdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgIGZvciAobGV0IGQgPSAwOyBkIDwgQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5sZW5ndGg7IGQrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGFbZF07XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoZGF0YS5hID09PSBjb21wICYmIGRhdGEuYiA9PT0gb3RoZXIpIHx8XHJcbiAgICAgICAgICAgICAgKGRhdGEuYiA9PT0gY29tcCAmJiBkYXRhLmEgPT09IG90aGVyKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAvLyBXZSBoYXZlIGV4aXN0aW5nIGRhdGEuIFVwZGF0ZSBpdC5cclxuICAgICAgICAgICAgICAvLyBvbkNvbGxpc2lvblVwZGF0ZVxyXG4gICAgICAgICAgICAgIGNvbXAub25Db2xsaXNpb25VcGRhdGUob3RoZXIpO1xyXG4gICAgICAgICAgICAgIG90aGVyLm9uQ29sbGlzaW9uVXBkYXRlKGNvbXApO1xyXG4gICAgICAgICAgICAgIGRhdGEudGltZSA9IENvbGxpc2lvbk1hbmFnZXIuX3RvdGFsVGltZTtcclxuICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29sbGlzaW9uXHJcbiAgICAgICAgICAgIC8vIG9uQ29sbGlzaW9uRW50cnlcclxuICAgICAgICAgICAgY29tcC5vbkNvbGxpc2lvbkVudHJ5KG90aGVyKTtcclxuICAgICAgICAgICAgb3RoZXIub25Db2xsaXNpb25FbnRyeShjb21wKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbCA9IG5ldyBDb2xsaXNpb25EYXRhKFxyXG4gICAgICAgICAgICAgIENvbGxpc2lvbk1hbmFnZXIuX3RvdGFsVGltZSxcclxuICAgICAgICAgICAgICBjb21wLFxyXG4gICAgICAgICAgICAgIG90aGVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIE1lc3NhZ2Uuc2VuZFByaW9yaXR5KCdDT0xMSVNJT05fRU5UUlk6JyArIGNvbXAubmFtZSwgdGhpcywgY29sbCk7XHJcbiAgICAgICAgICAgIE1lc3NhZ2Uuc2VuZFByaW9yaXR5KCdDT0xMSVNJT05fRU5UUlk6JyArIG90aGVyLm5hbWUsIHRoaXMsIGNvbGwpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsaXNpb25EYXRhLnB1c2goY29sbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHN0YWxlIGNvbGxpc2lvbiBkYXRhLlxyXG4gICAgY29uc3QgcmVtb3ZlRGF0YTogQ29sbGlzaW9uRGF0YVtdID0gW107XHJcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEubGVuZ3RoOyBkKyspIHtcclxuICAgICAgY29uc3QgZGF0YSA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGFbZF07XHJcbiAgICAgIGlmIChkYXRhLnRpbWUgIT09IENvbGxpc2lvbk1hbmFnZXIuX3RvdGFsVGltZSkge1xyXG4gICAgICAgIC8vIE9sZCBjb2xsaXNpb24gZGF0YVxyXG4gICAgICAgIC8vIG9uQ29sbGlzaW9uRXhpdFxyXG4gICAgICAgIHJlbW92ZURhdGEucHVzaChkYXRhKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgZGF0YS5hPy5vbkNvbGxpc2lvbkV4aXQoZGF0YS5iKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgZGF0YS5iPy5vbkNvbGxpc2lvbkV4aXQoZGF0YS5hKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgTWVzc2FnZS5zZW5kUHJpb3JpdHkoJ0NPTExJU0lPTl9FWElUOicgKyBkYXRhLmEubmFtZSwgdGhpcywgZGF0YSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIE1lc3NhZ2Uuc2VuZFByaW9yaXR5KCdDT0xMSVNJT05fRVhJVDonICsgZGF0YS5iLm5hbWUsIHRoaXMsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHJlbW92ZURhdGEubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEuaW5kZXhPZihyZW1vdmVEYXRhWzBdKTtcclxuXHJcbiAgICAgIENvbGxpc2lvbk1hbmFnZXIuX2NvbGxpc2lvbkRhdGEuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIHJlbW92ZURhdGEuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgTWVcclxuICAgIGRvY3VtZW50LnRpdGxlID0gQ29sbGlzaW9uTWFuYWdlci5fY29sbGlzaW9uRGF0YS5sZW5ndGgudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS53aWR0aDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsncG5nJywgJ2dpZicsICdqcGcnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkQXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gdGhpcy5vbkltYWdlTG9hZGVkLmJpbmQodGhpcywgYXNzZXROYW1lLCBpbWFnZSk7XHJcbiAgICBpbWFnZS5zcmMgPSBhc3NldE5hbWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSW1hZ2VMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnb25JbWFnZUxvYWRlZFwiIGFzc2V0TmFtZS9pbWFnZScsIGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0ID0gbmV3IEltYWdlQXNzZXQoYXNzZXROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgQXNzZXRNYW5hZ2VyLm9uQXNzZXRMb2FkZWQoYXNzZXQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBc3NldE1hbmFnZXIgfSBmcm9tICcuL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25Bc3NldCBpbXBsZW1lbnRzIElBc3NldCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YTogYW55O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25Bc3NldExvYWRlciBpbXBsZW1lbnRzIElBc3NldExvYWRlciB7XHJcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRFeHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbJ2pzb24nXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkQXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCByZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBhc3NldE5hbWUpO1xyXG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnbG9hZCcsXHJcbiAgICAgIHRoaXMub25Kc29uTG9hZGVkLmJpbmQodGhpcywgYXNzZXROYW1lLCByZXF1ZXN0KVxyXG4gICAgKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkpzb25Mb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcsIHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnb25JbWFnZUxvYWRlZFwiIGFzc2V0TmFtZS9pbWFnZScsIGFzc2V0TmFtZSwgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gcmVxdWVzdC5ET05FKSB7XHJcbiAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IEpzb25Bc3NldChhc3NldE5hbWUsIGpzb24pO1xyXG4gICAgICBBc3NldE1hbmFnZXIub25Bc3NldExvYWRlZChhc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldExvYWRlciB9IGZyb20gJy4vaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IEpzb25Bc3NldExvYWRlciB9IGZyb20gJy4vanNvbkFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgPVxyXG4gICdNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQ6Oic7XHJcbmV4cG9ydCBjbGFzcyBBc3NldE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZXJzOiBJQXNzZXRMb2FkZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZWRBc3NldHM6IHsgW25hbWU6IHN0cmluZ106IElBc3NldCB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChuZXcgSW1hZ2VBc3NldExvYWRlcigpKTtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBKc29uQXNzZXRMb2FkZXIoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyTG9hZGVyKGxvYWRlcjogSUFzc2V0TG9hZGVyKTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChsb2FkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvbkFzc2V0TG9hZGVkKGFzc2V0OiBJQXNzZXQpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0Lm5hbWVdID0gYXNzZXQ7XHJcbiAgICBNZXNzYWdlLnNlbmQoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgYXNzZXQubmFtZSwgdGhpcywgYXNzZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkQXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0TmFtZS5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGwgb2YgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzKSB7XHJcbiAgICAgIGlmIChsLnN1cHBvcnRlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24gfHwgJycpICE9PSAtMSkge1xyXG4gICAgICAgIGwubG9hZEFzc2V0KGFzc2V0TmFtZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICBgVW5hYmxlIHRvIGxvYWQgYXNzZXQgd2l0aCBleHRlbnNpb24gJHtleHRlbnNpb259IGJlY2F1c2UgdGhlcmUgaXMgbm8gbG9hZGVyIGFzc29jaWF0ZWQgd2l0aCBpdC5gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0Fzc2V0TG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyBOb3Qgc3VyZSBpZiB0aGlzIHdvcmtzXHJcbiAgICByZXR1cm4gISFBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IElBc3NldCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXROYW1lXSkge1xyXG4gICAgICByZXR1cm4gQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXROYW1lXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEFzc2V0TWFuYWdlci5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuL3ZlY3RvcjInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfejogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgejogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuICAgIHRoaXMuX3ogPSB6O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3o7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHoodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgemVybygpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb25lKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKDEsIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgfVxyXG4gICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl95ID0geTtcclxuICAgIH1cclxuICAgIGlmICh6ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feiA9IHo7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHZlY3RvciBpcyBlcXVhbCB0byB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxyXG4gICAqIEBwYXJhbSB2IFZlY3RvciB0byBjaGVjayBhZ2FpbnN0XHJcbiAgICogQHJldHVybnMgQm9vbGVhbiBiYWFzZWQgb24gZXF1aXZhbGVuY3lcclxuICAgKi9cclxuICBwdWJsaWMgZXF1YWxzKHY6IFZlY3RvcjMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl94ID09PSB2Ll94ICYmIHRoaXMuX3kgPT09IHYuX3kgJiYgdGhpcy5feiA9PT0gdi5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5feCwgdGhpcy5feSwgdGhpcy5fel07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2ZWN0b3IuX3g7XHJcbiAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgdGhpcy5feiA9IHZlY3Rvci5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMywgYjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaWZmID0gYS5zdWJ0cmFjdChiKTtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoZGlmZi54ICogZGlmZi54ICsgZGlmZi55ICogZGlmZi55ICsgZGlmZi56ICogZGlmZi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl94ID0gTnVtYmVyKGpzb24ueCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi55ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feSA9IE51bWJlcihqc29uLnkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ogPSBOdW1iZXIoanNvbi56KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgdGhpcy5feSArPSB2Ll95O1xyXG4gICAgdGhpcy5feiArPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YnRyYWN0KHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLT0gdi5feDtcclxuICAgIHRoaXMuX3kgLT0gdi5feTtcclxuICAgIHRoaXMuX3ogLT0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseSh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICB0aGlzLl95ICo9IHYuX3k7XHJcbiAgICB0aGlzLl96ICo9IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGl2aWRlKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLz0gdi5feDtcclxuICAgIHRoaXMuX3kgLz0gdi5feTtcclxuICAgIHRoaXMuX3ogLz0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1ZlY3RvcjIoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5feCwgdGhpcy5feSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMiwgYjogVmVjdG9yMik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkaWZmID0gYS5jbG9uZSgpLnN1YnRyYWN0KGIpO1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChkaWZmLnggKiBkaWZmLnggKyBkaWZmLnkgKiBkaWZmLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKHY6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2Ll94O1xyXG4gICAgdGhpcy5feSA9IHYuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3gsIHRoaXMuX3ldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9WZWN0b3IzKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMuX3gsIHRoaXMuX3ksIDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCh4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgfVxyXG4gICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl95ID0geTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl94ID0gTnVtYmVyKGpzb24ueCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi55ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5feSA9IE51bWJlcihqc29uLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZCh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICB0aGlzLl94ICs9IHYuX3g7XHJcbiAgICB0aGlzLl95ICs9IHYuX3k7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VidHJhY3QodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAtPSB2Ll94O1xyXG4gICAgdGhpcy5feSAtPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG11bHRpcGx5KHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggKj0gdi5feDtcclxuICAgIHRoaXMuX3kgKj0gdi5feTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXZpZGUodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgdGhpcy5feCAvPSB2Ll94O1xyXG4gICAgdGhpcy5feSAvPSB2Ll95O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgIHRoaXMuX3ggKj0gc2NhbGU7XHJcbiAgICB0aGlzLl95ICo9IHNjYWxlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX3gsIHRoaXMuX3kpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gJy4vbWF0ZXJpYWwnO1xyXG5cclxuY2xhc3MgTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIHtcclxuICBwdWJsaWMgbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgcmVmZXJlbmNlQ291bnQ6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtYXRlcmlhbDogTWF0ZXJpYWwpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21hdGVyaWFsczogeyBbbmFtZTogc3RyaW5nXTogTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJNYXRlcmlhbChtYXRlcmlhbDogTWF0ZXJpYWwpOiB2b2lkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID0gbmV3IE1hdGVyaWFsUmVmZXJlbmNlTm9kZShcclxuICAgICAgICBtYXRlcmlhbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IE1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQrKztcclxuICAgICAgcmV0dXJuIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxSZWZlcmVuY2UgPSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgaWYgKCFtYXRlcmlhbFJlZmVyZW5jZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCByZWxlYXNlIGEgbWF0ZXJpYWwgd2hpY2ggaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQtLTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQgPCAxICYmXHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw/LmRlc3Ryb3koKTtcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbi8qKlxyXG4gKiBSZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCBhIFdlYkdMIHJlbmRlcmluZyBjb250ZXh0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xVdGlsaXRpZXMge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIFdlYkdMLCBwb3RlbnRpYWxseSB1c2luZyB0aGUgY2FudmFzIHdpdGggYW4gYXNzaWduZWQgaWQgbWF0Y2hpbmdcclxuICAgKiB0aGUgcHJvdmlkZWQgaWYgaXQgaXMgZGVmaW5lZC5cclxuICAgKiBAcGFyYW0gZWxlbWVudElkIFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0byBzZWFyY2ggZm9yLlxyXG4gICAqIEByZXR1cm5zIHJlZmVyZW5jZSB0byB0aGUgSFRNTENhbnZhc0VsZW1lbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoZWxlbWVudElkPzogc3RyaW5nKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGlmIChjYW52YXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSBjYW52YXMgZWxlbWVudCBuYW1lZCAnICsgZWxlbWVudElkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICBpZiAoZ2wgPT09IHVuZGVmaW5lZCB8fCBnbCA9PT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2dsJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWQgZm9yIGEgR0xCdWZmZXIgYXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlSW5mbyB7XHJcbiAgLyoqXHJcbiAgICogTG9jYXRpb24gb2YgdGhlIGF0dHJpYnV0ZVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBsb2NhdGlvbjogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIChudW1iZXIgb2YgZWxlbWVudHMpIGluIHRoaXMgYXR0cmlidXRlIChpLmUuIFZlY3RvcjMgPSAzKVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBzaXplOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIFdlYkdMIGJ1ZmZlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMQnVmZmVyIHtcclxuICBwcml2YXRlIF9oYXNBdHRyaWJ1dGVMb2NhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2VsZW1lbnRTaXplOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc3RyaWRlOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2J1ZmZlcjogV2ViR0xCdWZmZXI7XHJcblxyXG4gIHByaXZhdGUgX3RhcmdldEJ1ZmZlclR5cGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9kYXRhVHlwZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX21vZGU6IG51bWJlcjtcclxuICBwcml2YXRlIF90eXBlU2l6ZTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9kYXRhOiBudW1iZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2F0dHJpYnV0ZXM6IEF0dHJpYnV0ZUluZm9bXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEdMIEJ1ZmZlci5cclxuICAgKiBAcGFyYW0gZGF0YVR5cGUgVGhlIGRhdGEgdHlwZSBvZiB0aGUgYnVmZmVyLiBEZWZhdWx0OiBnbC5GTE9BVFxyXG4gICAqIEBwYXJhbSB0YXJnZXRCdWZmZXJUeXBlIFRoZSBidWZmZXIgdGFyZ2V0IHR5cGUuIGdsLkFSUkFZX0JVRkZFUiBvciBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUi4gRGVmYXVsdDogZ2wuQVJSQVlfQlVGRkVSXHJcbiAgICogQHBhcmFtIG1vZGUgVGhlIGRyYXdpbmcgbW9kZSBvZiB0aGUgYnVmZmVyLiAoaS5lLiBnbC5UUklBTkdMRVMgb3IgZ2wuTElORVMpLiBEZWZhdWx0OiBnbC5UUklBTkdMRVNcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBkYXRhVHlwZTogbnVtYmVyID0gZ2wuRkxPQVQsXHJcbiAgICB0YXJnZXRCdWZmZXJUeXBlOiBudW1iZXIgPSBnbC5BUlJBWV9CVUZGRVIsXHJcbiAgICBtb2RlOiBudW1iZXIgPSBnbC5UUklBTkdMRVNcclxuICApIHtcclxuICAgIHRoaXMuX2VsZW1lbnRTaXplID0gMDtcclxuICAgIHRoaXMuX2RhdGFUeXBlID0gZGF0YVR5cGU7XHJcbiAgICB0aGlzLl90YXJnZXRCdWZmZXJUeXBlID0gdGFyZ2V0QnVmZmVyVHlwZTtcclxuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG5cclxuICAgIC8vIERldGVybWluZSBieXRlIHNpemVcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgLy8gcG9zaXRpdmUgb3IgbmVnYXRpdmVcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgIC8vIG9ubHkgcG9zaXRpdmUgYnV0IHR3aWNlIHRoZSBzaXplIG9mIGludFxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuU0hPUlQ6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDE7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgZGF0YSB0eXBlICR7ZGF0YVR5cGUudG9TdHJpbmcoKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaXplIG9mIGVsZW1lbnRzICogbnVtYmVyIG9mIGJ5dGVzIGluIGVhY2ggZWxlbWVudFxyXG4gICAgdGhpcy5fYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCkgYXMgV2ViR0xCdWZmZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95cyB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVCdWZmZXIodGhpcy5fYnVmZmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmRzIHRoaXMgYnVmZmVyLlxyXG4gICAqIEBwYXJhbSBub3JtYWxpemVkIEluZGljYXRlcyBpZiB0aGlzIGRhdGEgc2hvdWxkIGJlIG5vcm1hbGl6ZWQuIERlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIGJpbmQobm9ybWFsaXplZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIHRoaXMuX2J1ZmZlcik7XHJcblxyXG4gICAgaWYgKHRoaXMuX2hhc0F0dHJpYnV0ZUxvY2F0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZXMuZm9yRWFjaCgoaXQpID0+IHtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICAgaXQubG9jYXRpb24sXHJcbiAgICAgICAgICBpdC5zaXplLFxyXG4gICAgICAgICAgdGhpcy5fZGF0YVR5cGUsXHJcbiAgICAgICAgICBub3JtYWxpemVkLFxyXG4gICAgICAgICAgdGhpcy5fc3RyaWRlLFxyXG4gICAgICAgICAgaXQub2Zmc2V0ICogdGhpcy5fdHlwZVNpemVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpdC5sb2NhdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2F0dHJpYnV0ZXMuZm9yRWFjaCgoaXQpID0+IHtcclxuICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGl0LmxvY2F0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGFuIGF0dHJpYnV0ZSB3aXRoIHRoZSBwcm92aWRlZCBpbmZvcm1hdGlvbiB0byB0aGUgYnVmZmVyXHJcbiAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIHRvIGJlIGFkZGVkXHJcbiAgICovXHJcbiAgcHVibGljIGFkZEF0dHJpYnV0ZUxvY2F0aW9uKGluZm86IEF0dHJpYnV0ZUluZm8pOiB2b2lkIHtcclxuICAgIHRoaXMuX2hhc0F0dHJpYnV0ZUxvY2F0aW9uID0gdHJ1ZTtcclxuICAgIGluZm8ub2Zmc2V0ID0gdGhpcy5fZWxlbWVudFNpemU7XHJcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLnB1c2goaW5mbyk7XHJcbiAgICB0aGlzLl9lbGVtZW50U2l6ZSArPSBpbmZvLnNpemU7XHJcbiAgICB0aGlzLl9zdHJpZGUgPSB0aGlzLl9lbGVtZW50U2l6ZSAqIHRoaXMuX3R5cGVTaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgZGF0YSBpbiB0aGUgYnVmZmVyIHdpdGggcHJvdmlkZWQgZGF0YS5cclxuICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBiZSBsb2FkZWQgaW4gdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRhdGEoKTtcclxuICAgIHRoaXMucHVzaEJhY2tEYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXJzIG91dCBhbGwgZGF0YSBpbiB0aGUgYnVmZmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGVhckRhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGRhdGEgdG8gdGhlIGJ1ZmZlclxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICovXHJcbiAgcHVibGljIHB1c2hCYWNrRGF0YShkYXRhOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBsb2FkcyB0aGlzIGRhdGEgdG8gdGhlIEdQVVxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGxvYWQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIHRoaXMuX2J1ZmZlcik7XHJcblxyXG4gICAgbGV0IGJ1ZmZlckRhdGE6IEFycmF5QnVmZmVyO1xyXG4gICAgc3dpdGNoICh0aGlzLl9kYXRhVHlwZSkge1xyXG4gICAgICBjYXNlIGdsLkZMT0FUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLklOVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEludDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfSU5UOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuU0hPUlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQxNkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgVWludDE2QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuQllURTpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEludDhBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9CWVRFOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgRGF0YSB0eXBlIGVycm9yIGluIHB1c2hCYWNrRGF0YSgpIGZvciBkYXRhdHlwZSAke3RoaXMuX2RhdGFUeXBlLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2wuYnVmZmVyRGF0YSh0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCBidWZmZXJEYXRhLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERyYXdzIHRoZSBidWZmZXJcclxuICAgKi9cclxuICBwdWJsaWMgZHJhdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl90YXJnZXRCdWZmZXJUeXBlID09PSBnbC5BUlJBWV9CVUZGRVIpIHtcclxuICAgICAgZ2wuZHJhd0FycmF5cyh0aGlzLl9tb2RlLCAwLCB0aGlzLl9kYXRhLmxlbmd0aCAvIHRoaXMuX2VsZW1lbnRTaXplKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9PT0gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcclxuICAgICAgZ2wuZHJhd0VsZW1lbnRzKHRoaXMuX21vZGUsIHRoaXMuX2RhdGEubGVuZ3RoLCB0aGlzLl9kYXRhVHlwZSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBkYXRhIGZvciBhIHNpbmdsZSB2ZXJ0ZXhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZXJ0ZXgge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgdGV4Q29vcmRzOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICB4OiBudW1iZXIgPSAwLFxyXG4gICAgeTogbnVtYmVyID0gMCxcclxuICAgIHo6IG51bWJlciA9IDAsXHJcbiAgICB0dTogbnVtYmVyID0gMCxcclxuICAgIHR2OiBudW1iZXIgPSAwXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHRoaXMucG9zaXRpb24ueiA9IHo7XHJcblxyXG4gICAgdGhpcy50ZXhDb29yZHMueCA9IHR1O1xyXG4gICAgdGhpcy50ZXhDb29yZHMueSA9IHR2O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMucG9zaXRpb24udG9BcnJheSgpKTtcclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMudGV4Q29vcmRzLnRvQXJyYXkoKSk7XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbmZvLCBHTEJ1ZmZlciB9IGZyb20gJy4uL2dsL2dsQnVmZmVyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4JztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2J1ZmZlcjogR0xCdWZmZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9tYXRlcmlhbDogTWF0ZXJpYWwgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9tYXRlcmlhbE5hbWU6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX3ZlcnRpY2VzOiBWZXJ0ZXhbXSA9IFtdO1xyXG4gIHByb3RlY3RlZCBfb3JpZ2luOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBtYXRlcmlhbE5hbWU6IHN0cmluZyxcclxuICAgIHdpZHRoOiBudW1iZXIgPSAxMDAsXHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDEwMFxyXG4gICkge1xyXG4gICAgY29uc29sZS5sb2coYGhlaWdodCBhbmQgd2lkdGg6IGAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5fbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWxOYW1lO1xyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSBNYXRlcmlhbE1hbmFnZXIuZ2V0TWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG9yaWdpbigpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiB0aGlzLl9vcmlnaW47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IG9yaWdpbih2YWx1ZTogVmVjdG9yMykge1xyXG4gICAgdGhpcy5fb3JpZ2luID0gdmFsdWU7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlVmVydGljZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlbGVhc2VNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBHTEJ1ZmZlcigpO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICAvLyBSZW1vdmVkIHJlZmVyZW5jZSB0byBzaGFkZXIsIGJhZCBwcmFjdGljZSB0byBwYXNzIHNoYWRlciBpbmZvIHRvIHNwcml0ZSBvbiBsb2FkXHJcbiAgICAvLyBTdGlsbCBub3QgaWRlYWwgKHJlZmVyZW5jaW5nIGFfbG9jYXRpb24gaW4gdmVydGV4U2hhZGVyU291cmNlIGJ5IGhhcmRjb2RpbmcgMClcclxuICAgIC8vIEVhY2ggdmFyaWFibGUgaW4gc2hhZGVyU291cmNlIGlzIHJlZmVyZW5jZWQgYnkgaW5kZXggaW4gb3JkZXIgb2YgZGVjbGFyYXRpb24gKGUuZy4gYmVjYXVzZSBhX2xvY2F0aW9uIGlzIHRoZSBmaXJzdCB2YXJpYWJsZSBpdCBpcyBpbmRleCAwKVxyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUubG9jYXRpb24gPSAwO1xyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUuc2l6ZSA9IDM7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24ocG9zaXRpb25BdHRyaWJ1dGUpO1xyXG5cclxuICAgIGxldCB0ZXhDb29yZEF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5sb2NhdGlvbiA9IDE7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5zaXplID0gMjtcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbih0ZXhDb29yZEF0dHJpYnV0ZSk7XHJcblxyXG4gICAgdGhpcy5jYWxjdWxhdGVWZXJ0aWNlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBkcmF3KHNoYWRlcjogU2hhZGVyLCBtb2RlbDogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBsZXQgbW9kZWxMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfbW9kZWwnKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxMb2NhdGlvbiwgZmFsc2UsIG1vZGVsLnRvRmxvYXQzMkFycmF5KCkpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3RpbnQnKTtcclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICBnbC51bmlmb3JtNGZ2KGNvbG9yTG9jYXRpb24sIHRoaXMuX21hdGVyaWFsLnRpbnQudG9GbG9hdDMyQXJyYXkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS5hY3RpdmF0ZUFuZEJpbmQoMCk7XHJcbiAgICAgIGNvbnN0IGRpZmZ1c2VMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfZGlmZnVzZScpO1xyXG4gICAgICAvLyBwYXNzIGEgc2luZ2xlIGludGVnZXJcclxuICAgICAgZ2wudW5pZm9ybTFpKGRpZmZ1c2VMb2NhdGlvbiwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuYmluZCgpO1xyXG4gICAgICB0aGlzLl9idWZmZXIuZHJhdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhc3NpZ25lZCBidWZmZXIgZm9yIHNwcml0ZSAnICsgdGhpcy5fbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVmVydGljZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtaW5YID0gLSh0aGlzLl93aWR0aCAqIHRoaXMuX29yaWdpbi54KTtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLl93aWR0aCAqICgxLjAgLSB0aGlzLl9vcmlnaW4ueCk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IC0odGhpcy5fd2lkdGggKiB0aGlzLl9vcmlnaW4ueSk7XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5faGVpZ2h0ICogKDEuMCAtIHRoaXMuX29yaWdpbi55KTtcclxuXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHRoaXMuX3ZlcnRpY2VzID0gW1xyXG4gICAgICAvLyB4LCB5LCB6LCBVOiB0ZXh0dXJlIHgsIFY6IHRleHR1cmUgeVxyXG4gICAgICAvLyB0cmlhbmdsZSAxXHJcbiAgICAgIC8vIHBvaW50IDFcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtaW5ZLCAwLCAwLCAwLCksXHJcbiAgICAgIC8vIHBvaW50IDJcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtYXhZLCAwLCAwLCAxLjAsKSxcclxuICAgICAgLy8gcG9pbnQgM1xyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1heFksIDAsIDEuMCwgMS4wLCksXHJcbiAgICAgIC8vIHRyaWFuZ2xlIDJcclxuICAgICAgLy8gcG9pbnQgNFxyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1heFksIDAsIDEuMCwgMS4wKSxcclxuICAgICAgLy8gcG9pbnQgNVxyXG4gICAgICBuZXcgVmVydGV4KG1heFgsIG1pblksIDAsIDEuMCwgMCksXHJcbiAgICAgIC8vIHBvaW50IDZcclxuICAgICAgbmV3IFZlcnRleChtaW5YLCBtaW5ZLCAwLCAwLCAwKSxcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5fdmVydGljZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9idWZmZXI/LnVwbG9hZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyPy51bmJpbmQoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZWNhbGN1bGF0ZVZlcnRpY2VzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbWluWCA9IC0odGhpcy5fd2lkdGggKiB0aGlzLl9vcmlnaW4ueCk7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5fd2lkdGggKiAoMS4wIC0gdGhpcy5fb3JpZ2luLngpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSAtKHRoaXMuX2hlaWdodCAqIHRoaXMuX29yaWdpbi55KTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLl9oZWlnaHQgKiAoMS4wIC0gdGhpcy5fb3JpZ2luLnkpO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzWzBdPy5wb3NpdGlvbi5zZXQobWluWCwgbWluWSk7XHJcbiAgICB0aGlzLl92ZXJ0aWNlc1sxXT8ucG9zaXRpb24uc2V0KG1pblgsIG1heFkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbMl0/LnBvc2l0aW9uLnNldChtYXhYLCBtYXhZKTtcclxuXHJcbiAgICB0aGlzLl92ZXJ0aWNlc1szXT8ucG9zaXRpb24uc2V0KG1heFgsIG1heFkpO1xyXG4gICAgdGhpcy5fdmVydGljZXNbNF0/LnBvc2l0aW9uLnNldChtYXhYLCBtaW5ZKTtcclxuICAgIHRoaXMuX3ZlcnRpY2VzWzVdPy5wb3NpdGlvbi5zZXQobWluWCwgbWluWSk7XHJcbiAgICB0aGlzLl9idWZmZXI/LmNsZWFyRGF0YSgpO1xyXG5cclxuICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgdGhpcy5fYnVmZmVyPy5wdXNoQmFja0RhdGEodi50b0FycmF5KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyPy51cGxvYWQoKTtcclxuICAgIHRoaXMuX2J1ZmZlcj8udW5iaW5kKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuY2xhc3MgVVZJbmZvIHtcclxuICBwdWJsaWMgbWluOiBWZWN0b3IyO1xyXG4gIHB1YmxpYyBtYXg6IFZlY3RvcjI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtaW46IFZlY3RvcjIsIG1heDogVmVjdG9yMikge1xyXG4gICAgdGhpcy5taW4gPSBtaW47XHJcbiAgICB0aGlzLm1heCA9IG1heDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZSBleHRlbmRzIFNwcml0ZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfZnJhbWVIZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9mcmFtZVdpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZnJhbWVDb3VudDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZyYW1lU2VxdWVuY2U6IG51bWJlcltdO1xyXG4gIC8vIFRPRE86IE1ha2UgdGhpcyBjb25maWd1cmFibGVcclxuICBwcml2YXRlIF9mcmFtZVRpbWU6IG51bWJlciA9IDEyMTtcclxuICBwcml2YXRlIF9mcmFtZVVWczogVVZJbmZvW10gPSBbXTtcclxuICBwcml2YXRlIF9jdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBfY3VycmVudEZyYW1lOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2Fzc2V0TG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYXNzZXRXaWR0aDogbnVtYmVyID0gMjtcclxuICBwcml2YXRlIF9hc3NldEhlaWdodDogbnVtYmVyID0gMjtcclxuICBwcml2YXRlIF9pc1BsYXlpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBtYXRlcmlhbE5hbWU6IHN0cmluZyxcclxuICAgIHdpZHRoOiBudW1iZXIgPSAxMDAsXHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDEwMCxcclxuICAgIGZyYW1lV2lkdGg6IG51bWJlciA9IDEwLFxyXG4gICAgZnJhbWVIZWlnaHQ6IG51bWJlciA9IDEwLFxyXG4gICAgZnJhbWVDb3VudDogbnVtYmVyID0gMSxcclxuICAgIGZyYW1lU2VxdWVuY2U6IG51bWJlcltdID0gW11cclxuICApIHtcclxuICAgIHN1cGVyKG5hbWUsIG1hdGVyaWFsTmFtZSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5fZnJhbWVXaWR0aCA9IGZyYW1lV2lkdGg7XHJcbiAgICB0aGlzLl9mcmFtZUhlaWdodCA9IGZyYW1lSGVpZ2h0O1xyXG4gICAgdGhpcy5fZnJhbWVDb3VudCA9IGZyYW1lQ291bnQ7XHJcbiAgICB0aGlzLl9mcmFtZVNlcXVlbmNlID0gZnJhbWVTZXF1ZW5jZTtcclxuXHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWwpIHtcclxuICAgICAgTWVzc2FnZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmVOYW1lLFxyXG4gICAgICAgIHRoaXNcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNQbGF5aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzUGxheWluZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJhbWUoZnJhbWVOdW1iZXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGZyYW1lTnVtYmVyID49IHRoaXMuX2ZyYW1lQ291bnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdGcmFtZSBpcyBvdXIgb2YgcmFuZ2U6JyArXHJcbiAgICAgICAgICBmcmFtZU51bWJlciArXHJcbiAgICAgICAgICAnXFxuZnJhbWVDb3VudDogJyArXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZUNvdW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VycmVudEZyYW1lID0gZnJhbWVOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgbWVzc2FnZS5jb2RlID09PVxyXG4gICAgICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9tYXRlcmlhbD8uZGlmZnVzZVRleHR1cmVOYW1lXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5fYXNzZXRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICBsZXQgYXNzZXQgPSBtZXNzYWdlLmNvbnRleHQgYXMgSW1hZ2VBc3NldDtcclxuICAgICAgdGhpcy5fYXNzZXRIZWlnaHQgPSBhc3NldC5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuX2Fzc2V0V2lkdGggPSBhc3NldC53aWR0aDtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVVVnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5sb2FkKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICB0aGlzLnNldHVwRnJvbU1hdGVyaWFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gSGFjayBhcm91bmQgZm9yIG5vdCBiZWluZyBpbnN0YW50aWF0ZWQgYmVmb3JlIG9uTWVzc2FnZSBpcyBzZW50XHJcbiAgICAvLyBSZXZpc2l0XHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWwgJiYgIXRoaXMuX2Fzc2V0TG9hZGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0dXBGcm9tTWF0ZXJpYWwoKTtcclxuICAgICAgaWYgKCF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5faXNQbGF5aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdXJyZW50VGltZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lID4gdGhpcy5fZnJhbWVUaW1lKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZSsrO1xyXG4gICAgICB0aGlzLl9jdXJyZW50VGltZSA9IDA7XHJcblxyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEZyYW1lID49IHRoaXMuX2ZyYW1lU2VxdWVuY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZnJhbWVVVnMgPSB0aGlzLl9mcmFtZVNlcXVlbmNlW3RoaXMuX2N1cnJlbnRGcmFtZV07XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzBdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluKTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbMV0udGV4Q29vcmRzLmNvcHlGcm9tKFxyXG4gICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbi54LFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heC55XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1syXS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heCk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzNdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4KTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbNF0udGV4Q29vcmRzLmNvcHlGcm9tKFxyXG4gICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heC54LFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbi55XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1s1XS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbik7XHJcblxyXG4gICAgICB0aGlzLl9idWZmZXI/LmNsZWFyRGF0YSgpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyPy5wdXNoQmFja0RhdGEodi50b0FycmF5KCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fYnVmZmVyPy51cGxvYWQoKTtcclxuICAgICAgdGhpcy5fYnVmZmVyPy51bmJpbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVVWcygpOiB2b2lkIHtcclxuICAgIGxldCB0b3RhbFdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IHlWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZnJhbWVDb3VudDsgaSsrKSB7XHJcbiAgICAgIHRvdGFsV2lkdGggPSBpICogdGhpcy5fZnJhbWVXaWR0aDtcclxuICAgICAgaWYgKHRvdGFsV2lkdGggPiB0aGlzLl9hc3NldFdpZHRoKSB7XHJcbiAgICAgICAgeVZhbHVlKys7XHJcbiAgICAgICAgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB1ID0gKGkgKiB0aGlzLl9mcmFtZVdpZHRoKSAvIHRoaXMuX2Fzc2V0V2lkdGg7XHJcbiAgICAgIGxldCB2ID0gKHlWYWx1ZSAqIHRoaXMuX2ZyYW1lSGVpZ2h0KSAvIHRoaXMuX2Fzc2V0SGVpZ2h0O1xyXG4gICAgICBsZXQgbWluOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIodSwgdik7XHJcblxyXG4gICAgICBsZXQgdU1heCA9IChpICogdGhpcy5fZnJhbWVXaWR0aCArIHRoaXMuX2ZyYW1lV2lkdGgpIC8gdGhpcy5fYXNzZXRXaWR0aDtcclxuICAgICAgbGV0IHZNYXggPVxyXG4gICAgICAgICh5VmFsdWUgKiB0aGlzLl9mcmFtZUhlaWdodCArIHRoaXMuX2ZyYW1lSGVpZ2h0KSAvIHRoaXMuX2Fzc2V0SGVpZ2h0O1xyXG4gICAgICBsZXQgbWF4OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIodU1heCwgdk1heCk7XHJcblxyXG4gICAgICB0aGlzLl9mcmFtZVVWcy5wdXNoKG5ldyBVVkluZm8obWluLCBtYXgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBGcm9tTWF0ZXJpYWwoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2Fzc2V0TG9hZGVkKSB7XHJcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gTWF0ZXJpYWxNYW5hZ2VyLmdldE1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgICAgIGlmIChtYXRlcmlhbD8uZGlmZnVzZVRleHR1cmU/LmlzTG9hZGVkKSB7XHJcbiAgICAgICAgaWYgKEFzc2V0TWFuYWdlci5pc0Fzc2V0TG9hZGVkKG1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlTmFtZSkpIHtcclxuICAgICAgICAgIHRoaXMuX2Fzc2V0SGVpZ2h0ID0gbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICAgICAgdGhpcy5fYXNzZXRXaWR0aCA9IG1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLndpZHRoO1xyXG4gICAgICAgICAgdGhpcy5fYXNzZXRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5jYWxjdWxhdGVVVnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuLi9jb3JlL3dvcmxkL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vSUNvbXBvbmVudERhdGEnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICBwcm90ZWN0ZWQgX293bmVyOiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9kYXRhOiBJQ29tcG9uZW50RGF0YTtcclxuXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IElDb21wb25lbnREYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3duZXIoKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9vd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPd25lcihvd25lcjogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciA9IG93bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlUmVhZHkoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3Mvc3ByaXRlJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4vSUNvbXBvbmVudEJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vSUNvbXBvbmVudERhdGEnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vY29yZS9tYXRoL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUNvbXBvbmVudERhdGEgaW1wbGVtZW50cyBJQ29tcG9uZW50RGF0YSB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBtYXRlcmlhbE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBvcmlnaW46IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi53aWR0aCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gTnVtYmVyKGpzb24ud2lkdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24uaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTnVtYmVyKGpzb24uaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLm5hbWUpIHtcclxuICAgICAgdGhpcy5uYW1lID0gU3RyaW5nKGpzb24ubmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi5tYXRlcmlhbE5hbWUpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbE5hbWUgPSBTdHJpbmcoanNvbi5tYXRlcmlhbE5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ub3JpZ2luKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnNldEZyb21Kc29uKGpzb24ub3JpZ2luKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdzcHJpdGUnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBTcHJpdGVDb21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgY29uc29sZS5sb2coJ3Nwcml0ZSBqc29uJywganNvbik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGVDb21wb25lbnQoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfc3ByaXRlOiBTcHJpdGU7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coYHNldHRpbmcgc3ByaXRlIGRhdGE6IGAsIGRhdGEpO1xyXG4gICAgaWYgKGRhdGEud2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IE51bWJlcihkYXRhLndpZHRoKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2hlaWdodCA9IE51bWJlcihkYXRhLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKFxyXG4gICAgICBkYXRhLm5hbWUsXHJcbiAgICAgIGRhdGEubWF0ZXJpYWxOYW1lLFxyXG4gICAgICB0aGlzLl93aWR0aCxcclxuICAgICAgdGhpcy5faGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghZGF0YS5vcmlnaW4uZXF1YWxzKFZlY3RvcjMuemVybykpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLm9yaWdpbi5jb3B5RnJvbShkYXRhLm9yaWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZSB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3MvYW5pbWF0ZWRTcHJpdGUnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vY29yZS9tYXRoL3ZlY3RvcjMnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudERhdGEgfSBmcm9tICcuL3Nwcml0ZUNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgZXh0ZW5kcyBTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgaW1wbGVtZW50cyBJQ29tcG9uZW50RGF0YVxyXG57XHJcbiAgcHVibGljIGZyYW1lV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZVNlcXVlbmNlOiBudW1iZXJbXSA9IFtdO1xyXG4gIHB1YmxpYyBhdXRvUGxheTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIHN1cGVyLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIGlmIChqc29uLmF1dG9QbGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5hdXRvUGxheSA9IEJvb2xlYW4oanNvbi5hdXRvUGxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uZnJhbWVXaWR0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5pbWF0ZWQgc3ByaXRlIGRhdGEgcmVxdWlyZXMgZnJhbWVXaWR0aCB0byBiZSBkZWZpbmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyYW1lV2lkdGggPSBOdW1iZXIoanNvbi5mcmFtZVdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZUhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnQW5pbWF0ZWQgc3ByaXRlIGRhdGEgcmVxdWlyZXMgZnJhbWVIZWlnaHQgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVIZWlnaHQgPSBOdW1iZXIoanNvbi5mcmFtZUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uZnJhbWVDb3VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5pbWF0ZWQgc3ByaXRlIGRhdGEgcmVxdWlyZXMgZnJhbWVDb3VudCB0byBiZSBkZWZpbmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyYW1lQ291bnQgPSBOdW1iZXIoanNvbi5mcmFtZUNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZVNlcXVlbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZVNlcXVlbmNlIHRvIGJlIGRlZmluZWQnXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyYW1lU2VxdWVuY2UgPSBqc29uLmZyYW1lU2VxdWVuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdhbmltYXRlZFNwcml0ZSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGxldCBkYXRhID0gbmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfYXV0b3BQbGF5OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogQW5pbWF0ZWRTcHJpdGU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgdGhpcy5fYXV0b3BQbGF5ID0gZGF0YS5hdXRvUGxheTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgQW5pbWF0ZWRTcHJpdGUoXHJcbiAgICAgIGRhdGEubmFtZSxcclxuICAgICAgZGF0YS5tYXRlcmlhbE5hbWUsXHJcbiAgICAgIGRhdGEuZnJhbWVXaWR0aCxcclxuICAgICAgZGF0YS5mcmFtZUhlaWdodCxcclxuICAgICAgZGF0YS5mcmFtZVdpZHRoLFxyXG4gICAgICBkYXRhLmZyYW1lSGVpZ2h0LFxyXG4gICAgICBkYXRhLmZyYW1lQ291bnQsXHJcbiAgICAgIGRhdGEuZnJhbWVTZXF1ZW5jZVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBIYXZlIHRvIGRvIHRoaXMgZXZlbiB0aG91Z2ggY2FsbGluZyBzdXBlciBiZWNhdXNlIG9mIHRoaXMuX3Nwcml0ZSBjYWxsXHJcbiAgICAvLyBhYm92ZSB3aXBlcyBvdXQgdGhlIG9yaWdpblxyXG4gICAgaWYgKCFkYXRhLm9yaWdpbi5lcXVhbHMoVmVjdG9yMy56ZXJvKSkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUub3JpZ2luLmNvcHlGcm9tKGRhdGEub3JpZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1BsYXlpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3ByaXRlLmlzUGxheWluZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fYXV0b3BQbGF5KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLnVwZGF0ZSh0aW1lKTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcmFtZShmcmFtZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUuc2V0RnJhbWUoZnJhbWVOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUuZHJhdyhzaGFkZXIsIHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVuZGVyKHNoYWRlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBJU2hhcGUyRCB9IGZyb20gJy4vSVNoYXBlMkQnO1xyXG5pbXBvcnQgeyBSZWN0YW5nbGUyRCB9IGZyb20gJy4vcmVjdGFuZ2xlMmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZTJEIGltcGxlbWVudHMgSVNoYXBlMkQge1xyXG4gIHB1YmxpYyBvcmlnaW46IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG4gIHB1YmxpYyByYWRpdXM6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBvZmZzZXQoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIHRoaXMub3JpZ2luLngsXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIHRoaXMub3JpZ2luLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ub3JpZ2luKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnNldEZyb21Kc29uKGpzb24ub3JpZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5yYWRpdXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpcmNsZTJEIHJlcXVpcmVzIHJhZGl1cyB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yYWRpdXMgPSBqc29uLnJhZGl1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnRlcnNlY3RzKG90aGVyU2hhcGU6IElTaGFwZTJEKTogYm9vbGVhbiB7XHJcbiAgICBpZiAob3RoZXJTaGFwZSBpbnN0YW5jZW9mIENpcmNsZTJEICYmIHRoaXMucmFkaXVzICYmIG90aGVyU2hhcGUucmFkaXVzKSB7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoXHJcbiAgICAgICAgVmVjdG9yMi5kaXN0YW5jZShvdGhlclNoYXBlLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByYWRpdXNMZW5ndGhzID0gdGhpcy5yYWRpdXMgKyBvdGhlclNoYXBlLnJhZGl1cztcclxuICAgICAgaWYgKGRpc3RhbmNlIDw9IHJhZGl1c0xlbmd0aHMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdGhlclNoYXBlIGluc3RhbmNlb2YgUmVjdGFuZ2xlMkQpIHtcclxuICAgICAgaWYgKCFvdGhlclNoYXBlLndpZHRoIHx8ICFvdGhlclNoYXBlLmhlaWdodCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvdGhlclNoYXBlfSByZXF1aXJlcyBhIGhlaWdodCBhbmQgd2lkdGhgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXN9IHJlcXVyZXMgYSByYWRpdXNgKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZGVsdGFYID1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCBvdGhlclNoYXBlLnBvc2l0aW9uLnggKyBvdGhlclNoYXBlLndpZHRoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGxldCBkZWx0YVkgPVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIG90aGVyU2hhcGUucG9zaXRpb24ueSArIG90aGVyU2hhcGUuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICAgIGlmIChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkgPCB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb2ludEluU2hhcGUocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFic0Rpc3RhbmNlID0gTWF0aC5hYnMoVmVjdG9yMi5kaXN0YW5jZSh0aGlzLnBvc2l0aW9uLCBwb2ludCkpO1xyXG4gICAgaWYgKHRoaXMucmFkaXVzICYmIGFic0Rpc3RhbmNlIDw9IHRoaXMucmFkaXVzKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IENpcmNsZTJEIH0gZnJvbSAnLi9jaXJjbGUyRCc7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi9JU2hhcGUyRCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlMkQgaW1wbGVtZW50cyBJU2hhcGUyRCB7XHJcbiAgcHVibGljIG9yaWdpbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAuNSwgMC41KTtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcblxyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBvZmZzZXQoKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAtKHRoaXMud2lkdGggKiB0aGlzLm9yaWdpbi54KSxcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIC0odGhpcy5oZWlnaHQgKiB0aGlzLm9yaWdpbi55KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5vcmlnaW4pIHtcclxuICAgICAgdGhpcy5vcmlnaW4uc2V0RnJvbUpzb24oanNvbi5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLndpZHRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWN0YW5nbGUyZCByZXF1aXJlcyB3aWR0aCB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9IE51bWJlcihqc29uLndpZHRoKTtcclxuXHJcbiAgICBpZiAoanNvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlY3RhbmdsZTJkIHJlcXVpcmVzIGhlaWdodCB0byBiZSBwcmVzZW50LicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBOdW1iZXIoanNvbi5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGludGVyc2VjdHMob3RoZXJTaGFwZTogSVNoYXBlMkQpOiBib29sZWFuIHtcclxuICAgIGlmIChcclxuICAgICAgb3RoZXJTaGFwZSBpbnN0YW5jZW9mIFJlY3RhbmdsZTJEICYmXHJcbiAgICAgIG90aGVyU2hhcGUud2lkdGggJiZcclxuICAgICAgb3RoZXJTaGFwZS5oZWlnaHRcclxuICAgICkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUob3RoZXJTaGFwZS5wb3NpdGlvbikgfHxcclxuICAgICAgICB0aGlzLnBvaW50SW5TaGFwZShcclxuICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnggKyBvdGhlclNoYXBlLndpZHRoLFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnlcclxuICAgICAgICAgIClcclxuICAgICAgICApIHx8XHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUoXHJcbiAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54ICsgb3RoZXJTaGFwZS53aWR0aCxcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi55ICsgb3RoZXJTaGFwZS5oZWlnaHRcclxuICAgICAgICAgIClcclxuICAgICAgICApIHx8XHJcbiAgICAgICAgdGhpcy5wb2ludEluU2hhcGUoXHJcbiAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgb3RoZXJTaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnkgKyBvdGhlclNoYXBlLmhlaWdodFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG90aGVyU2hhcGUgaW5zdGFuY2VvZiBDaXJjbGUyRCAmJlxyXG4gICAgICBvdGhlclNoYXBlLnJhZGl1cyAmJlxyXG4gICAgICB0aGlzLndpZHRoICYmXHJcbiAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgY29uc3QgZGVsdGFYID1cclxuICAgICAgICBvdGhlclNoYXBlLnBvc2l0aW9uLnggLVxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgTWF0aC5taW4ob3RoZXJTaGFwZS5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkZWx0YVkgPVxyXG4gICAgICAgIG90aGVyU2hhcGUucG9zaXRpb24ueSAtXHJcbiAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBNYXRoLm1pbihvdGhlclNoYXBlLnBvc2l0aW9uLnksIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZIDxcclxuICAgICAgICBvdGhlclNoYXBlLnJhZGl1cyAqIG90aGVyU2hhcGUucmFkaXVzXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvaW50SW5TaGFwZShwb2ludDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMud2lkdGggJiYgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBvaW50LnggPj0gdGhpcy5wb3NpdGlvbi54ICYmXHJcbiAgICAgICAgcG9pbnQueCA8PSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBvaW50LnkgPj0gdGhpcy5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICBwb2ludC55IDw9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IElTaGFwZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9JU2hhcGUyRCc7XHJcbmltcG9ydCB7IFJlY3RhbmdsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9yZWN0YW5nbGUyZCc7XHJcbmltcG9ydCB7IENpcmNsZTJEIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zaGFwZXMyRC9jaXJjbGUyRCc7XHJcbmltcG9ydCB7IENvbGxpc2lvbk1hbmFnZXIgfSBmcm9tICcuLi9jb2xsaXNpb24vY29sbGlzaW9uTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQ29tcG9uZW50RGF0YSBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNoYXBlOiBJU2hhcGUyRCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnNoYXBlPy50eXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoU3RyaW5nKGpzb24uc2hhcGUudHlwZSkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XHJcbiAgICAgICAgICB0aGlzLnNoYXBlID0gbmV3IFJlY3RhbmdsZTJEKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgdGhpcy5zaGFwZSA9IG5ldyBDaXJjbGUyRCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgc2hhcGUgdHlwZTogJyArIGpzb24uc2hhcGUudHlwZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2hhcGUuc2V0RnJvbUpzb24oanNvbi5zaGFwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0NvbGxpc2lvbkNvbXBvbmVudERhdGEgcmVxdWlyZXMgXCJzaGFwZVwiIGFuZCBcInNoYXBlLnR5cGVcIiB0byBiZSBwcmVzZW50LidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25Db21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdjb2xsaXNpb24nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBDb2xsaXNpb25Db21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sbGlzaW9uQ29tcG9uZW50KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3NoYXBlOiBJU2hhcGUyRDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IENvbGxpc2lvbkNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIGlmICghZGF0YS5zaGFwZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgaXMgbWlzc2luZyBcInNoYXBlXCIgcHJvcGVydHk6Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zaGFwZSA9IGRhdGEuc2hhcGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNoYXBlKCk6IElTaGFwZTJEIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGFwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG5cclxuICAgIGlmICh0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9zaGFwZS5wb3NpdGlvbi5jb3B5RnJvbShcclxuICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24udG9WZWN0b3IyKCkuYWRkKHRoaXMuX3NoYXBlLm9mZnNldClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZWxsIHRoZSBjb2xsaXNpb24gbWFuYWdlciB0aGF0IHdlIGV4aXN0LlxyXG4gICAgQ29sbGlzaW9uTWFuYWdlci5yZWdpc3RlckNvbGxpc2lvbkNvbXBvbmVudCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24uY29weUZyb20oXHJcbiAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnRvVmVjdG9yMigpLmFkZCh0aGlzLl9zaGFwZS5vZmZzZXQpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgLy9pZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAvL3RoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIC8vfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ29sbGlzaW9uRW50cnkob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge31cclxuICBwdWJsaWMgb25Db2xsaXNpb25VcGRhdGUob3RoZXI6IENvbGxpc2lvbkNvbXBvbmVudCk6IHZvaWQge31cclxuICBwdWJsaWMgb25Db2xsaXNpb25FeGl0KG90aGVyOiBDb2xsaXNpb25Db21wb25lbnQpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZ2lzdGVyZWRCdWlsZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUNvbXBvbmVudEJ1aWxkZXIgfSA9XHJcbiAgICB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUNvbXBvbmVudEJ1aWxkZXIpOiB2b2lkIHtcclxuICAgIENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tidWlsZGVyLnR5cGVdID0gYnVpbGRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdENvbXBvbmVudChqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGlmIChqc29uLnR5cGUpIHtcclxuICAgICAgaWYgKENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tTdHJpbmcoanNvbi50eXBlKV0pIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdDb21wb25lbnQgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ0NvbXBvbmVudCBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNvdW5kRWZmZWN0IHtcclxuICBwcml2YXRlIF9wbGF5ZXI6IEhUTUxBdWRpb0VsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBhc3NldFBhdGg6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGFzc2V0UGF0aDogc3RyaW5nLCBsb29wOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgQXVkaW8oYXNzZXRQYXRoKTtcclxuICAgIHRoaXMuX3BsYXllci52b2x1bWUgPSAwLjA1O1xyXG4gICAgdGhpcy5hc3NldFBhdGggPSBhc3NldFBhdGg7XHJcbiAgICB0aGlzLl9wbGF5ZXIubG9vcCA9IGxvb3A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyLmxvb3A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3BsYXllci5sb29wID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX3BsYXllciA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1BhdXNlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGF5ZXIucGF1c2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gICAgdGhpcy5fcGxheWVyLmN1cnJlbnRUaW1lID0gMDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9zb3VuZEVmZmVjdHM6IHsgW25hbWU6IHN0cmluZ106IFNvdW5kRWZmZWN0IH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkU291bmRGaWxlKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgYXNzZXRQYXRoOiBzdHJpbmcsXHJcbiAgICBsb29wOiBib29sZWFuXHJcbiAgKTogdm9pZCB7XHJcbiAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSA9IG5ldyBTb3VuZEVmZmVjdChhc3NldFBhdGgsIGxvb3ApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwbGF5U291bmQobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0pIHtcclxuICAgICAgQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYGNvdWxkIG5vdCBwbGF5IHNvdW5kICR7bmFtZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcFNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGF1c2VTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSkge1xyXG4gICAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXS5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNvdW5kID0gQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV07XHJcbiAgICBpZiAoc291bmQpIHtcclxuICAgICAgc291bmQuaXNQYXVzZWQoKSA/IHNvdW5kLnBsYXkoKSA6IHNvdW5kLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQucGF1c2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdG9wQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfcmVnaXN0ZXJlZEJ1aWxkZXJzOiB7IFt0eXBlOiBzdHJpbmddOiBJQmVoYXZpb3JCdWlsZGVyIH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUJlaGF2aW9yQnVpbGRlcik6IHZvaWQge1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RCZWhhdmlvcihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgaWYgKGpzb24udHlwZSkge1xyXG4gICAgICBpZiAoQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIEJlaGF2aW9yTWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdCZWhhdmlvciBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAnQmVoYXZpb3IgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBlbnVtIEtleXMge1xyXG4gIExFRlQgPSAzNyxcclxuICBVUCA9IDM4LFxyXG4gIFJJR0hUID0gMzksXHJcbiAgRE9XTiA9IDQwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VDb250ZXh0IHtcclxuICBwdWJsaWMgbGVmdERvd246IGJvb2xlYW47XHJcbiAgcHVibGljIHJpZ2h0RG93bjogYm9vbGVhbjtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsZWZ0RG93bjogYm9vbGVhbiwgcmlnaHREb3duOiBib29sZWFuLCBwb3NpdGlvbjogVmVjdG9yMikge1xyXG4gICAgdGhpcy5sZWZ0RG93biA9IGxlZnREb3duO1xyXG4gICAgdGhpcy5yaWdodERvd24gPSByaWdodERvd247XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfa2V5czogYm9vbGVhbltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzTW91c2VYOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzTW91c2VZOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21vdXNlWDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9tb3VzZVk6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHREb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2ldID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBJbnB1dE1hbmFnZXIub25LZXlEb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIElucHV0TWFuYWdlci5vbktleVVwKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBJbnB1dE1hbmFnZXIub25Nb3VzZU1vdmUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIElucHV0TWFuYWdlci5vbk1vdXNlRG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIElucHV0TWFuYWdlci5vbk1vdXNlVXApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0tleURvd24oa2V5OiBLZXlzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gSW5wdXRNYW5hZ2VyLl9rZXlzW2tleV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldE1vdXNlUG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5fbW91c2VYLCB0aGlzLl9tb3VzZVkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX2tleXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgLy9pZiAoZXZlbnQua2V5Q29kZSAhPT0gMTYgJiYgZXZlbnQua2V5Q29kZSAhPT0gMTcgJiYgZXZlbnQua2V5Q29kZSAhPT0gNzMpIHtcclxuICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvL31cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XHJcbiAgICAvLyBpZiAoZXZlbnQua2V5Q29kZSAhPT0gMTYgJiYgZXZlbnQua2V5Q29kZSAhPT0gMTcgJiYgZXZlbnQua2V5Q29kZSAhPT0gNzMpIHtcclxuICAgIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWCA9IElucHV0TWFuYWdlci5fbW91c2VYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWSA9IElucHV0TWFuYWdlci5fbW91c2VZO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVggPSBldmVudC5jbGllbnRYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVkgPSBldmVudC5jbGllbnRZO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgTWVzc2FnZS5zZW5kKFxyXG4gICAgICAnTU9VU0VfRE9XTicsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9yaWdodERvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBNZXNzYWdlLnNlbmQoXHJcbiAgICAgICdNT1VTRV9VUCcsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL3dvcmxkL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUJlaGF2aW9yIGltcGxlbWVudHMgSUJlaGF2aW9yIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX2RhdGE6IElCZWhhdmlvckRhdGE7XHJcbiAgcHJvdGVjdGVkIF9vd25lcjogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUJlaGF2aW9yRGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLl9kYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZWFkeSgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgYXBwbHkodXNlckRhdGE6IGFueSk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIsIEtleXMgfSBmcm9tICcuLi9pbnB1dC9pbnB1dE1hbmFnZXInO1xyXG5pbXBvcnQgeyBCYXNlQmVoYXZpb3IgfSBmcm9tICcuL2Jhc2VCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5zcGVlZCkge1xyXG4gICAgICB0aGlzLnNwZWVkID0gTnVtYmVyKGpzb24uc3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAna2V5Ym9hcmRNb3ZlbWVudCc7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuTEVGVCkgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLlJJR0hUKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuVVApICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5ET1dOKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hdGhFeHRlbnNpb25zIHtcclxuICBwdWJsaWMgc3RhdGljIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodmFsdWUgPCBtaW4pIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkZWdUb1JhZChkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODAuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmFkVG9EZWcocmFkaWFuczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAocmFkaWFucyAqIDE4MC4wKSAvIE1hdGguUEk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyhNYXRoIGFzIGFueSkuY2xhbXAgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuLy9pZiAodmFsdWUgPCBtaW4pIHtcclxuLy9yZXR1cm4gbWluO1xyXG4vL31cclxuXHJcbi8vaWYgKHZhbHVlID4gbWF4KSB7XHJcbi8vcmV0dXJuIG1heDtcclxuLy99XHJcblxyXG4vL3JldHVybiB2YWx1ZTtcclxuLy99O1xyXG5cclxuLy8oTWF0aCBhcyBhbnkpLmRlZ1RvUmFkID0gKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciA9PiB7XHJcbi8vcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODAuMDtcclxuLy99O1xyXG5cclxuLy8oTWF0aCBhcyBhbnkpLnJhZFRvRGVnID0gKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciA9PiB7XHJcbi8vcmV0dXJuIChyYWRpYW5zICogMTgwLjApIC8gTWF0aC5QSTtcclxuLy99O1xyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25EYXRhIH0gZnJvbSAnLi4vLi4vY29sbGlzaW9uL2NvbGxpc2lvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYW5pbWF0ZWRTcHJpdGVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tICcuLi9hdWRpby9hdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBNYXRoRXh0ZW5zaW9ucyB9IGZyb20gJy4uL21hdGgvbWF0aEV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGFjY2VsZXJhdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAsIDkyMCk7XHJcbiAgcHVibGljIHBsYXllckNvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGdyb3VuZENvbGxpc2lvbkNvbXBvbmVudDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGFuaW1hdGVkU3ByaXRlTmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5hY2NlbGVyYXRpb24pIHtcclxuICAgICAgdGhpcy5hY2NlbGVyYXRpb24uc2V0RnJvbUpzb24oanNvbi5hY2NlbGVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghanNvbi5hbmltYXRlZFNwcml0ZU5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbmltYXRlZFNwcml0ZU5hbWUgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRlZFNwcml0ZU5hbWUgPSBTdHJpbmcoanNvbi5hbmltYXRlZFNwcml0ZU5hbWUpO1xyXG5cclxuICAgIGlmICghanNvbi5wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdwbGF5ZXJDb2xsaXNpb25Db21wb25lbnQgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGxheWVyQ29sbGlzaW9uQ29tcG9uZW50ID0gU3RyaW5nKGpzb24ucGxheWVyQ29sbGlzaW9uQ29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoIWpzb24uZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50IG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudCA9IFN0cmluZyhqc29uLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQmVoYXZpb3JCdWlsZGVyIGltcGxlbWVudHMgSUJlaGF2aW9yQnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BsYXllcic7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBQbGF5ZXJCZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IFBsYXllckJlaGF2aW9yKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9hY2NlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgcHJpdmF0ZSBfdmVsb2NpdHkgPSBWZWN0b3IyLnplcm87XHJcbiAgcHJpdmF0ZSBfaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfcGxheWVyQ29sbGlzaW9uQ29tcG9uZW50OiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIF9ncm91bmRDb2xsaXNpb25Db21wb25lbnQ6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX2FuaW1hdGVkU3ByaXRlTmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3Nwcml0ZTogQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBQbGF5ZXJCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX2FjY2VsZXJhdGlvbiA9IGRhdGEuYWNjZWxlcmF0aW9uO1xyXG4gICAgdGhpcy5fcGxheWVyQ29sbGlzaW9uQ29tcG9uZW50ID0gZGF0YS5wbGF5ZXJDb2xsaXNpb25Db21wb25lbnQ7XHJcbiAgICB0aGlzLl9ncm91bmRDb2xsaXNpb25Db21wb25lbnQgPSBkYXRhLmdyb3VuZENvbGxpc2lvbkNvbXBvbmVudDtcclxuICAgIHRoaXMuX2FuaW1hdGVkU3ByaXRlTmFtZSA9IGRhdGEuYW5pbWF0ZWRTcHJpdGVOYW1lO1xyXG5cclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKCdNT1VTRV9ET1dOJywgdGhpcyk7XHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgJ0NPTExJU0lPTl9FTlRSWTonICsgdGhpcy5fcGxheWVyQ29sbGlzaW9uQ29tcG9uZW50LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge1xyXG4gICAgc3VwZXIudXBkYXRlUmVhZHkoKTtcclxuXHJcbiAgICAvLyBPYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIGFuaW1hdGVkIHNwcml0ZVxyXG4gICAgdGhpcy5fc3ByaXRlID0gdGhpcy5fb3duZXI/LmdldENvbXBvbmVudEJ5TmFtZShcclxuICAgICAgdGhpcy5fYW5pbWF0ZWRTcHJpdGVOYW1lXHJcbiAgICApIGFzIEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5faXNBbGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ByaXRlUmVhZHkgPSB0aGlzLl9vd25lcj8uZ2V0Q29tcG9uZW50QnlOYW1lKFxyXG4gICAgICB0aGlzLl9hbmltYXRlZFNwcml0ZU5hbWVcclxuICAgICk7XHJcbiAgICBpZiAoIXNwcml0ZVJlYWR5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fb3duZXIpIHtcclxuICAgICAgY29uc3Qgc2Vjb25kczogbnVtYmVyID0gdGltZSAvIDEwMDA7XHJcbiAgICAgIHRoaXMuX3ZlbG9jaXR5LmFkZCh0aGlzLl9hY2NlbGVyYXRpb24uY2xvbmUoKS5zY2FsZShzZWNvbmRzKSk7XHJcblxyXG4gICAgICAvLyBMaW1pdCBtYXggc3BlZWQgb2YgZmFsbGluZ1xyXG4gICAgICBpZiAodGhpcy5fdmVsb2NpdHkueSA+IDQwMCkge1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5LnkgPSA0MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByZXZlbnQgZmx5aW5nIHRvbyBoaWdoXHJcbiAgICAgIGlmICh0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSA8IC0xMykge1xyXG4gICAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55ID0gLTEzO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9vd25lcj8udHJhbnNmb3JtLnBvc2l0aW9uLmFkZChcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eS5jbG9uZSgpLnNjYWxlKHNlY29uZHMpLnRvVmVjdG9yMygpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fdmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiAtPVxyXG4gICAgICAgICAgTWF0aEV4dGVuc2lvbnMuZGVnVG9SYWQoNjAwLjApICogc2Vjb25kcztcclxuICAgICAgICBpZiAodGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogPCBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCgtMjApKSB7XHJcbiAgICAgICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiA9IE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKC0yMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0ZhbGxpbmcoKSB8fCAhdGhpcy5faXNBbGl2ZSkge1xyXG4gICAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56ICs9XHJcbiAgICAgICAgICBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCg0ODAuMCkgKiBzZWNvbmRzO1xyXG4gICAgICAgIGlmICh0aGlzLl9vd25lci50cmFuc2Zvcm0ucm90YXRpb24ueiA+IE1hdGhFeHRlbnNpb25zLmRlZ1RvUmFkKDkwKSkge1xyXG4gICAgICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnJvdGF0aW9uLnogPSBNYXRoRXh0ZW5zaW9ucy5kZWdUb1JhZCg5MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zaG91bGROb3RGbGFwKCkpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuc3RvcCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3ByaXRlLmlzUGxheWluZygpKSB7XHJcbiAgICAgICAgICB0aGlzLl9zcHJpdGUucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UuY29kZSkge1xyXG4gICAgICBjYXNlICdNT1VTRV9ET1dOJzpcclxuICAgICAgICB0aGlzLm9uRmxhcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdDT0xMSVNJT05fRU5UUlk6JyArIHRoaXMuX3BsYXllckNvbGxpc2lvbkNvbXBvbmVudDpcclxuICAgICAgICBjb25zdCBkYXRhOiBDb2xsaXNpb25EYXRhID0gbWVzc2FnZS5jb250ZXh0IGFzIENvbGxpc2lvbkRhdGE7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZGF0YT8uYT8ubmFtZSA9PT0gdGhpcy5fZ3JvdW5kQ29sbGlzaW9uQ29tcG9uZW50IHx8XHJcbiAgICAgICAgICBkYXRhPy5iPy5uYW1lID09PSB0aGlzLl9ncm91bmRDb2xsaXNpb25Db21wb25lbnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgICB0aGlzLmRlY2VsZXJhdGUoKTtcclxuICAgICAgICAgIE1lc3NhZ2Uuc2VuZCgnUExBWUVSX0RJRUQnLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRmFsbGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZWxvY2l0eS55ID4gMjIwLjA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZE5vdEZsYXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVsb2NpdHkueSA+IDIyMC4wIHx8ICF0aGlzLl9pc0FsaXZlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pc0FsaXZlID0gZmFsc2U7XHJcbiAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKCdkZWFkJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlY2VsZXJhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY2NlbGVyYXRpb24ueSA9IDA7XHJcbiAgICB0aGlzLl92ZWxvY2l0eS55ID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GbGFwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2lzQWxpdmUpIHtcclxuICAgICAgdGhpcy5fdmVsb2NpdHkueSA9IC0yODA7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ2ZsYXAnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZXN0YXJ0KHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gMDtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnNldCgyMDAsIHkpO1xyXG4gICAgICB0aGlzLl92ZWxvY2l0eS5zZXQoMCwgMCk7XHJcbiAgICAgIHRoaXMuX2FjY2VsZXJhdGlvbi5zZXQoMCwgOTIwKTtcclxuICAgICAgdGhpcy5faXNBbGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCR7dGhpcy5fYW5pbWF0ZWRTcHJpdGVOYW1lfSdzIHBsYXllckJlaGF2aW9yIGhhcyBubyBvd25lcmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFqc29uLm5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbi5zZXRGcm9tSnNvbihqc29uLnJvdGF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdyb3RhdGlvbic7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBSb3RhdGlvbkJlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgUm90YXRpb25CZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwcml2YXRlIF9yb3RhdGlvbjogVmVjdG9yMztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFJvdGF0aW9uQmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IGRhdGEucm90YXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXI/LnRyYW5zZm9ybS5yb3RhdGlvbi5hZGQodGhpcy5fcm90YXRpb24pO1xyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2dsJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgV2ViR0wgc2hhZGVyLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNoYWRlciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9wcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogeyBbbmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICBwcml2YXRlIF91bmlmb3JtczogeyBbbmFtZTogc3RyaW5nXTogV2ViR0xVbmlmb3JtTG9jYXRpb24gfSA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IHNoYWRlci5cclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgdmVydGV4IHNoYWRlci5cclxuICAgKiBAcGFyYW0gZnJhZ21lbnRTb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgdXNlKCk6IHZvaWQge1xyXG4gICAgZ2wudXNlUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGxvY2F0aW9uIG9mIGFuIGF0dHJpYnV0ZSB3aXRoIHRoZSBwcm92aWRlZCBuYW1lXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB0byByZXRyaWV2ZVxyXG4gICAqIEByZXR1cm5zIEFuIGF0dHJpYnV0ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRBdHRyaWJ1dGVMb2NhdGlvbihuYW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuX2F0dHJpYnV0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFVuYWJsZSB0byBmaW5kIGF0dHJpYnV0ZSBuYW1lICR7bmFtZX0gaW4gc2hhZGVyICR7dGhpcy5fbmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHtcclxuICAgIGlmICh0aGlzLl91bmlmb3Jtc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgdW5pZm9ybSBuYW1lICR7bmFtZX0gaW4gc2hhZGVyICR7dGhpcy5fbmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3VuaWZvcm1zW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGxvYWQodmVydGV4U291cmNlOiBzdHJpbmcsIGZyYWdtZW50U291cmNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmxvYWRTaGFkZXIodmVydGV4U291cmNlLCBnbC5WRVJURVhfU0hBREVSKTtcclxuICAgIGxldCBmcmFnbWVudFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcihmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgdGhpcy5kZXRlY3RBdHRyaWJ1dGVzKCk7XHJcbiAgICB0aGlzLmRldGVjdFVuaWZvcm1zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRTaGFkZXIoc291cmNlOiBzdHJpbmcsIHNoYWRlclR5cGU6IG51bWJlcik6IFdlYkdMU2hhZGVyIHtcclxuICAgIGxldCBzaGFkZXI6IFdlYkdMU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpIGFzIFdlYkdMU2hhZGVyO1xyXG5cclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICBsZXQgZXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik/LnRyaW0oKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNvbXBpbGluZyBzaGFkZXI6ICcgKyB0aGlzLl9uYW1lICsgJzogJyArIGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oXHJcbiAgICB2ZXJ0ZXhTaGFkZXI6IFdlYkdMU2hhZGVyLFxyXG4gICAgZnJhZ21lbnRTaGFkZXI6IFdlYkdMU2hhZGVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpIGFzIFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5fcHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLl9wcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgZ2wubGlua1Byb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLl9wcm9ncmFtKT8udHJpbSgpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJycm9yIGxpbmtpbmcgc2hhZGVyICcgKyB0aGlzLl9uYW1lICsgJzogJyArIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGV0ZWN0QXR0cmlidXRlcygpOiB2b2lkIHtcclxuICAgIC8vIGdpdmVzIGFsbCBhdHRyaWJ1dGVzIGluIHRoZSBzaGFkZXJcclxuICAgIGNvbnN0IGF0dHJpYnV0ZUNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihcclxuICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgZ2wuQUNUSVZFX0FUVFJJQlVURVNcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVDb3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZUluZm86IFdlYkdMQWN0aXZlSW5mbyA9IGdsLmdldEFjdGl2ZUF0dHJpYihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGlcclxuICAgICAgKSBhcyBXZWJHTEFjdGl2ZUluZm87XHJcbiAgICAgIGlmICghYXR0cmlidXRlSW5mbykge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQb3B1bGF0ZXMgX2F0dHJpYnVlcyB3aXRoIGVhY2ggYXR0cmlidXRlIGFzIGFzIHRoZSB2YWx1ZSBhbmQgdGhlIGF0dHJpYnV0ZSBuYW1lIGFzIHRoZSBrZXlcclxuICAgICAgdGhpcy5fYXR0cmlidXRlc1thdHRyaWJ1dGVJbmZvLm5hbWVdID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBhdHRyaWJ1dGVJbmZvLm5hbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGV0ZWN0VW5pZm9ybXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB1bmlmb3JtQ291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKFxyXG4gICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICBnbC5BQ1RJVkVfVU5JRk9STVNcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlmb3JtQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCB1bmlmb3JtSW5mbzogV2ViR0xBY3RpdmVJbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGlcclxuICAgICAgKSBhcyBXZWJHTEFjdGl2ZUluZm87XHJcbiAgICAgIGlmICghdW5pZm9ybUluZm8pIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUG9wdWxhdGVzIF9hdHRyaWJ1ZXMgd2l0aCBlYWNoIGF0dHJpYnV0ZSBhcyBhcyB0aGUgdmFsdWUgYW5kIHRoZSBhdHRyaWJ1dGUgbmFtZSBhcyB0aGUga2V5XHJcbiAgICAgIHRoaXMuX3VuaWZvcm1zW3VuaWZvcm1JbmZvLm5hbWVdID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgdW5pZm9ybUluZm8ubmFtZVxyXG4gICAgICApIGFzIFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9zaGFkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignYmFzaWMnKTtcclxuXHJcbiAgICB0aGlzLmxvYWQodGhpcy5nZXRWZXJ0ZXhTb3VyY2UoKSwgdGhpcy5nZXRGcmFnbWVudFNvdXJjZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmVydGV4U291cmNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgYXR0cmlidXRlIHZlYzMgYV9wb3NpdGlvbjtcclxuICAgIGF0dHJpYnV0ZSB2ZWMyIGFfdGV4Q29vcmQ7XHJcblxyXG4gICAgdW5pZm9ybSBtYXQ0IHVfcHJvamVjdGlvbjtcclxuICAgIHVuaWZvcm0gbWF0NCB1X21vZGVsO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG5cclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgZ2xfUG9zaXRpb24gPSB1X3Byb2plY3Rpb24gKiB1X21vZGVsICogdmVjNChhX3Bvc2l0aW9uLCAxLjApO1xyXG4gICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZyYWdtZW50U291cmNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblxyXG4gICAgdW5pZm9ybSB2ZWM0IHVfdGludDtcclxuICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfZGlmZnVzZTtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIFxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICBnbF9GcmFnQ29sb3IgPSB1X3RpbnQgKiB0ZXh0dXJlMkQodV9kaWZmdXNlLCB2X3RleENvb3JkKTtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHJpdmF0ZSBfcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2c6IG51bWJlcjtcclxuICBwcml2YXRlIF9iOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICByOiBudW1iZXIgPSAyNTUsXHJcbiAgICBnOiBudW1iZXIgPSAyNTUsXHJcbiAgICBiOiBudW1iZXIgPSAyNTUsXHJcbiAgICBhOiBudW1iZXIgPSAyNTVcclxuICApIHtcclxuICAgIHRoaXMuX3IgPSByO1xyXG4gICAgdGhpcy5fZyA9IGc7XHJcbiAgICB0aGlzLl9iID0gYjtcclxuICAgIHRoaXMuX2EgPSBhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgckZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fciAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2c7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGdGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2cgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYUZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYSAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBhKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2EgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdEFycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciAvIDI1NS4wLCB0aGlzLl9nIC8gMjU1LjAsIHRoaXMuX2IgLyAyNTUuMCwgdGhpcy5fYSAvIDI1NS4wXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0Zsb2F0QXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHdoaXRlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmxhY2soKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWQoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigyNTUsIDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdyZWVuKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMjU1LCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBibHVlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMjU1LCAyNTUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5cclxuY29uc3QgTEVWRUw6IG51bWJlciA9IDA7XHJcbmNvbnN0IEJPUkRFUjogbnVtYmVyID0gMDtcclxuY29uc3QgVEVNUF9JTUFHRV9EQVRBOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDI1NV0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9oYW5kbGU6IFdlYkdMVGV4dHVyZTtcclxuICBwcml2YXRlIF9pc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAxLCBoZWlnaHQ6IG51bWJlciA9IDEpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB0aGlzLl9oYW5kbGUgPSBnbC5jcmVhdGVUZXh0dXJlKCkgYXMgV2ViR0xUZXh0dXJlO1xyXG5cclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIHJhdyBkYXRhIGludG8gYSB0ZXh0dXJlXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICBMRVZFTCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgMSxcclxuICAgICAgMSxcclxuICAgICAgQk9SREVSLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBURU1QX0lNQUdFX0RBVEFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQodGhpcy5fbmFtZSkgYXMgSW1hZ2VBc3NldDtcclxuICAgIGlmIChhc3NldCkge1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBiaW5kKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5faGFuZGxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1ha2VzIGEgY2FsbCB0byB3ZWJnbCBhbmQgdGVsbHMgaXQgd2hhdCBjaGFubmVsIHRvIGFjdGl2YXRlIG9uXHJcbiAgICogKDMyIHRvdGFsKVxyXG4gICAqIEBwYXJhbSB0ZXh0dXJlVW5pdCB0ZXh0dXJlIHRvIGFjdGl2YXRlIG9uXHJcbiAgICovXHJcbiAgcHVibGljIGFjdGl2YXRlQW5kQmluZCh0ZXh0dXJlVW5pdDogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHRleHR1cmVVbml0KTtcclxuXHJcbiAgICB0aGlzLmJpbmQoKTtcclxuICB9XHJcblxyXG4gIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlID09PSBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9uYW1lKSB7XHJcbiAgICAgIHRoaXMubG9hZFRleHR1cmVGcm9tQXNzZXQobWVzc2FnZS5jb250ZXh0IGFzIEltYWdlQXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkVGV4dHVyZUZyb21Bc3NldChhc3NldDogSW1hZ2VBc3NldCk6IHZvaWQge1xyXG4gICAgdGhpcy5fd2lkdGggPSBhc3NldC53aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGFzc2V0LmhlaWdodDtcclxuXHJcbiAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAvLyBUaGlzIHNpZ25hdHVyZSBpcyBmb3IgbG9hZGluZyBhbiBpbWFnZSBiaXRtYXBwZXJcclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgIExFVkVMLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBhc3NldC5kYXRhXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUG93ZXJPZjIoKSkge1xyXG4gICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhIG1pcCBtYXAgYW5kIGNsYW1wIHdyYXBwaW5nIHRvIGVkZ2UuXHJcblxyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICB9XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUG93ZXJPZjIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl93aWR0aCkgJiYgdGhpcy5pc1ZhbHVlUG93ZXJPZjIodGhpcy5faGVpZ2h0KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWx1ZVBvd2VyT2YyKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT09IDA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRleHR1cmUgfSBmcm9tICcuL3RleHR1cmUnO1xyXG5cclxuY2xhc3MgVGV4dHVyZVJlZmVyZW5jZU5vZGUge1xyXG4gIHB1YmxpYyB0ZXh0dXJlOiBUZXh0dXJlO1xyXG4gIHB1YmxpYyByZWZlcmVuY2VDb3VudDogbnVtYmVyID0gMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZU1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF90ZXh0dXJlczogeyBbbmFtZTogc3RyaW5nXTogVGV4dHVyZVJlZmVyZW5jZU5vZGUgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRUZXh0dXJlKHRleHR1cmVOYW1lOiBzdHJpbmcpOiBUZXh0dXJlIHtcclxuICAgIGlmICghVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSkge1xyXG4gICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGV4dHVyZU5hbWUpO1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdID0gbmV3IFRleHR1cmVSZWZlcmVuY2VOb2RlKHRleHR1cmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0udGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZVRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgQSB0ZXh0dXJlIG5hbWVkICR7dGV4dHVyZU5hbWV9IGRvZXMgbm90IGV4aXN0IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJlbGVhc2VkLmBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0ucmVmZXJlbmNlQ291bnQtLTtcclxuICAgICAgaWYgKFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0ucmVmZXJlbmNlQ291bnQgPCAxKSB7XHJcbiAgICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICcuL3RleHR1cmUnO1xyXG5pbXBvcnQgeyBUZXh0dXJlTWFuYWdlciB9IGZyb20gJy4vdGV4dHVyZU1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2RpZmZ1c2VUZXh0dXJlOiBUZXh0dXJlIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3RpbnQ6IENvbG9yO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkaWZmdXNlVGV4dHVyZU5hbWU6IHN0cmluZywgdGludDogQ29sb3IpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lID0gZGlmZnVzZVRleHR1cmVOYW1lO1xyXG4gICAgdGhpcy5fdGludCA9IHRpbnQ7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlID0gVGV4dHVyZU1hbmFnZXIuZ2V0VGV4dHVyZShcclxuICAgICAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRpZmZ1c2VUZXh0dXJlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmUoKTogVGV4dHVyZSB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIXRoaXMuX2RpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZGlmZnVzZVRleHR1cmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRpbnQoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGRpZmZ1c2VUZXh0dXJlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlID0gVGV4dHVyZU1hbmFnZXIuZ2V0VGV4dHVyZShcclxuICAgICAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgVGV4dHVyZU1hbmFnZXIucmVsZWFzZVRleHR1cmUodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lKTtcclxuICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXg0eDQge1xyXG4gIHByaXZhdGUgX2RhdGE6IG51bWJlcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBJZGVudGl0eSBtYXRyaXggKGRlZmF1bHQgbWF0cml4KVxyXG4gICAgdGhpcy5fZGF0YSA9IFtcclxuICAgICAgLy8gcm93IDFcclxuICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgLy8gcm93IDJcclxuICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgLy8gcm93IDNcclxuICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgLy8gcm93IDRcclxuICAgICAgMCwgMCwgMCwgMSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRhdGEoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IE1hdHJpeDR4NCB7XHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeDR4NCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3J0aG9ncmFwaGljIG1hdHJpeFxyXG4gICAqIE5vIHBlcnNwZWN0aXZlLCByZW5kZXJzIHNvbWV0aGluZyBhcyBpZiBpdCBpcyBmbGF0IGluIHNwYWNlXHJcbiAgICogQHBhcmFtIGxlZnQgcG9zaXRpb24gZnJvbSBsZWZ0IG9mIHNjcmVlbiAoYWxtb3N0IGFsd2F5cyAwKVxyXG4gICAqIEBwYXJhbSByaWdodCBkaXN0YW5jZSB0byByaWdodCBzaWRlIG9mIHNjcmVlbiBmcm9tIHRoZSBsZWZ0IChlLmcuIDEwODBwIHdvdWxkIGJlIDE5MjApXHJcbiAgICogQHBhcmFtIGJvdHRvbSBwb3NpdGlvbiBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoYWxtb3N0IGFsd2F5cyAwKSB3ZWJnbCBzdGFydHMgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cclxuICAgKiBAcGFyYW0gdG9wIHBvc2l0aW9uIGZyb20gYm90dG9tIG9mIHNjcmVlbiB0byB0aGUgdG9wIChlLmcuIDEwODBwIHdvdWxkIGJlIDEwODApXHJcbiAgICogQHBhcmFtIG5lYXJDbGlwIHNvbWV0aGluZyBuZWdhdGl2ZSAodG8gcHJldmVudCBjbGlwcGluZyBpbiBmcm9udClcclxuICAgKiBAcGFyYW0gZmFyQ2xpcCBhcmJpdHJhcnkgbnVtYmVyXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvcnRob2dyYXBoaWMoXHJcbiAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICByaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICB0b3A6IG51bWJlcixcclxuICAgIG5lYXJDbGlwOiBudW1iZXIsXHJcbiAgICBmYXJDbGlwOiBudW1iZXJcclxuICApOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgY29uc3QgbHI6IG51bWJlciA9IDEuMCAvIChsZWZ0IC0gcmlnaHQpO1xyXG4gICAgY29uc3QgYnQ6IG51bWJlciA9IDEuMCAvIChib3R0b20gLSB0b3ApO1xyXG4gICAgY29uc3QgbmY6IG51bWJlciA9IDEuMCAvIChuZWFyQ2xpcCAtIGZhckNsaXApO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSAtMi4wICogbHI7XHJcbiAgICBtLl9kYXRhWzVdID0gLTIuMCAqIGJ0O1xyXG4gICAgbS5fZGF0YVsxMF0gPSAyLjAgKiBuZjtcclxuXHJcbiAgICBtLl9kYXRhWzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XHJcbiAgICBtLl9kYXRhWzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XHJcbiAgICBtLl9kYXRhWzE0XSA9IChmYXJDbGlwICsgbmVhckNsaXApICogbmY7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIG1hdHJpeCB0aGF0IGhvbGRzIGRhdGEgdGhhdCByZXByZXNlbnRzIG1vdmVtZW50IG9mIGFuIG9iamVjdFxyXG4gICAqIHRocm91Z2ggc3BhY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyB0cmFuc2xhdGlvbihwb3NpdGlvbjogVmVjdG9yMyk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICAvLyBlZGl0aW5nIDFzdCAzIG51bWJlcnMgaW4gbGFzdCByb3cgb2YgbWF0cml4NFxyXG4gICAgbS5fZGF0YVsxMl0gPSBwb3NpdGlvbi54O1xyXG4gICAgbS5fZGF0YVsxM10gPSBwb3NpdGlvbi55O1xyXG4gICAgbS5fZGF0YVsxNF0gPSBwb3NpdGlvbi56O1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHJvdGF0aW9uIG1hdHJpeCBvbiB0aGUgWCBheGlzIGZyb20gdGhlIHByb3ZpZGVkIGFuZ2xlIGluIHJhZGlhbnMuXHJcbiAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25YKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzVdID0gYztcclxuICAgIG0uX2RhdGFbNl0gPSBzO1xyXG4gICAgbS5fZGF0YVs5XSA9IC1zO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblkoYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBjO1xyXG4gICAgbS5fZGF0YVsyXSA9IC1zO1xyXG4gICAgbS5fZGF0YVs4XSA9IHM7XHJcbiAgICBtLl9kYXRhWzEwXSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWihhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIC8vIHJhZGlhbnMgYXJlIHVzZWQgaW4gYWxtb3N0IGFsbCBtYXRoIGxpYnJhcmllcyBiZWNhdXNlIGl0IGlzIG1vcmUgcGVyZm9ybWFudFxyXG4gICAgLy8gdW5kZXIgdGhlIGhvb2RcclxuXHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBjO1xyXG4gICAgbS5fZGF0YVsxXSA9IHM7XHJcbiAgICBtLl9kYXRhWzRdID0gLXM7XHJcbiAgICBtLl9kYXRhWzVdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25YWVooXHJcbiAgICB4UmFkaWFuczogbnVtYmVyLFxyXG4gICAgeVJhZGlhbnM6IG51bWJlcixcclxuICAgIHpSYWRpYW5zOiBudW1iZXJcclxuICApOiBNYXRyaXg0eDQge1xyXG4gICAgY29uc3QgcnggPSBNYXRyaXg0eDQucm90YXRpb25YKHhSYWRpYW5zKTtcclxuICAgIGNvbnN0IHJ5ID0gTWF0cml4NHg0LnJvdGF0aW9uWSh5UmFkaWFucyk7XHJcbiAgICBjb25zdCByeiA9IE1hdHJpeDR4NC5yb3RhdGlvblooelJhZGlhbnMpO1xyXG5cclxuICAgIHJldHVybiBNYXRyaXg0eDQubXVsdGlwbHkoTWF0cml4NHg0Lm11bHRpcGx5KHJ6LCByeSksIHJ4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2NhbGUoc2NhbGU6IFZlY3RvcjMpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IHNjYWxlLng7XHJcbiAgICBtLl9kYXRhWzVdID0gc2NhbGUueTtcclxuICAgIG0uX2RhdGFbMTBdID0gc2NhbGUuejtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogTWF0cml4NHg0LCBiOiBNYXRyaXg0eDQpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGIwMCA9IGIuX2RhdGFbMCAqIDQgKyAwXTtcclxuICAgIGxldCBiMDEgPSBiLl9kYXRhWzAgKiA0ICsgMV07XHJcbiAgICBsZXQgYjAyID0gYi5fZGF0YVswICogNCArIDJdO1xyXG4gICAgbGV0IGIwMyA9IGIuX2RhdGFbMCAqIDQgKyAzXTtcclxuICAgIGxldCBiMTAgPSBiLl9kYXRhWzEgKiA0ICsgMF07XHJcbiAgICBsZXQgYjExID0gYi5fZGF0YVsxICogNCArIDFdO1xyXG4gICAgbGV0IGIxMiA9IGIuX2RhdGFbMSAqIDQgKyAyXTtcclxuICAgIGxldCBiMTMgPSBiLl9kYXRhWzEgKiA0ICsgM107XHJcbiAgICBsZXQgYjIwID0gYi5fZGF0YVsyICogNCArIDBdO1xyXG4gICAgbGV0IGIyMSA9IGIuX2RhdGFbMiAqIDQgKyAxXTtcclxuICAgIGxldCBiMjIgPSBiLl9kYXRhWzIgKiA0ICsgMl07XHJcbiAgICBsZXQgYjIzID0gYi5fZGF0YVsyICogNCArIDNdO1xyXG4gICAgbGV0IGIzMCA9IGIuX2RhdGFbMyAqIDQgKyAwXTtcclxuICAgIGxldCBiMzEgPSBiLl9kYXRhWzMgKiA0ICsgMV07XHJcbiAgICBsZXQgYjMyID0gYi5fZGF0YVszICogNCArIDJdO1xyXG4gICAgbGV0IGIzMyA9IGIuX2RhdGFbMyAqIDQgKyAzXTtcclxuXHJcbiAgICBsZXQgYTAwID0gYS5fZGF0YVswICogNCArIDBdO1xyXG4gICAgbGV0IGEwMSA9IGEuX2RhdGFbMCAqIDQgKyAxXTtcclxuICAgIGxldCBhMDIgPSBhLl9kYXRhWzAgKiA0ICsgMl07XHJcbiAgICBsZXQgYTAzID0gYS5fZGF0YVswICogNCArIDNdO1xyXG4gICAgbGV0IGExMCA9IGEuX2RhdGFbMSAqIDQgKyAwXTtcclxuICAgIGxldCBhMTEgPSBhLl9kYXRhWzEgKiA0ICsgMV07XHJcbiAgICBsZXQgYTEyID0gYS5fZGF0YVsxICogNCArIDJdO1xyXG4gICAgbGV0IGExMyA9IGEuX2RhdGFbMSAqIDQgKyAzXTtcclxuICAgIGxldCBhMjAgPSBhLl9kYXRhWzIgKiA0ICsgMF07XHJcbiAgICBsZXQgYTIxID0gYS5fZGF0YVsyICogNCArIDFdO1xyXG4gICAgbGV0IGEyMiA9IGEuX2RhdGFbMiAqIDQgKyAyXTtcclxuICAgIGxldCBhMjMgPSBhLl9kYXRhWzIgKiA0ICsgM107XHJcbiAgICBsZXQgYTMwID0gYS5fZGF0YVszICogNCArIDBdO1xyXG4gICAgbGV0IGEzMSA9IGEuX2RhdGFbMyAqIDQgKyAxXTtcclxuICAgIGxldCBhMzIgPSBhLl9kYXRhWzMgKiA0ICsgMl07XHJcbiAgICBsZXQgYTMzID0gYS5fZGF0YVszICogNCArIDNdO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxO1xyXG4gICAgbS5fZGF0YVsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbM10gPSBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzRdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwICsgYjEzICogYTMwO1xyXG4gICAgbS5fZGF0YVs1XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbNl0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzddID0gYjEwICogYTAzICsgYjExICogYTEzICsgYjEyICogYTIzICsgYjEzICogYTMzO1xyXG4gICAgbS5fZGF0YVs4XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbOV0gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzEwXSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbMTFdID0gYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzO1xyXG4gICAgbS5fZGF0YVsxMl0gPSBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzEzXSA9IGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMTRdID0gYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyO1xyXG4gICAgbS5fZGF0YVsxNV0gPSBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKG06IE1hdHJpeDR4NCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFbaV0gPSBtLl9kYXRhW2ldO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgc2NhbGU6IFZlY3RvcjMgPSBWZWN0b3IzLm9uZTtcclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKHRyYW5zZm9ybTogVHJhbnNmb3JtKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLmNvcHlGcm9tKHRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICB0aGlzLnJvdGF0aW9uLmNvcHlGcm9tKHRyYW5zZm9ybS5yb3RhdGlvbik7XHJcbiAgICB0aGlzLnNjYWxlLmNvcHlGcm9tKHRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKTogTWF0cml4NHg0IHtcclxuICAgIGxldCB0cmFuc2xhdGlvbiA9IE1hdHJpeDR4NC50cmFuc2xhdGlvbih0aGlzLnBvc2l0aW9uKTtcclxuXHJcbiAgICBsZXQgcm90YXRpb24gPSBNYXRyaXg0eDQucm90YXRpb25YWVooXHJcbiAgICAgIHRoaXMucm90YXRpb24ueCxcclxuICAgICAgdGhpcy5yb3RhdGlvbi55LFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLnpcclxuICAgICk7XHJcbiAgICBsZXQgc2NhbGUgPSBNYXRyaXg0eDQuc2NhbGUodGhpcy5zY2FsZSk7XHJcblxyXG4gICAgLy8gb3JkZXIgbWF0dGVycyBoZXJlXHJcbiAgICAvLyBUICogUiAqIFNcclxuICAgIHJldHVybiBNYXRyaXg0eDQubXVsdGlwbHkoTWF0cml4NHg0Lm11bHRpcGx5KHRyYW5zbGF0aW9uLCByb3RhdGlvbiksIHNjYWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLnBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0RnJvbUpzb24oanNvbi5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24ucm90YXRpb24pIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbi5zZXRGcm9tSnNvbihqc29uLnJvdGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5zY2FsZSkge1xyXG4gICAgICB0aGlzLnNjYWxlLnNldEZyb21Kc29uKGpzb24uc2NhbGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4uL2JlaGF2aW9ycy9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1PYmplY3Qge1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IFNpbU9iamVjdFtdID0gW107XHJcbiAgcHJpdmF0ZSBfcGFyZW50OiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfY29tcG9uZW50czogSUNvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBfYmVoYXZpb3JzOiBJQmVoYXZpb3JbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9sb2NhbE1hdHJpeDogTWF0cml4NHg0ID0gTWF0cml4NHg0LmlkZW50aXR5KCk7XHJcbiAgcHJpdmF0ZSBfd29ybGRNYXRyaXg6IE1hdHJpeDR4NCA9IE1hdHJpeDR4NC5pZGVudGl0eSgpO1xyXG5cclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdHJhbnNmb3JtOiBUcmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHNjZW5lPzogU2NlbmUpIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFyZW50KCk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50IHx8IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd29ybGRNYXRyaXgoKTogTWF0cml4NHg0IHtcclxuICAgIHJldHVybiB0aGlzLl93b3JsZE1hdHJpeDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ2hpbGQoY2hpbGQ6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgIGlmICh0aGlzLl9zY2VuZSkge1xyXG4gICAgICBjaGlsZC5vbkFkZGVkKHRoaXMuX3NjZW5lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVDaGlsZChjaGlsZDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgY2hpbGQuX3BhcmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgLy8gZG91YmxlIGNoZWNrIHRoaXMgd29ya3NcclxuICAgICAgdGhpcy5fY2hpbGRyZW4gPSB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoKF8sIGlkeCkgPT4gaW5kZXggIT09IGlkeCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWU6IHN0cmluZyk6IElDb21wb25lbnQgfCB1bmRlZmluZWQge1xyXG4gICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMuX2NvbXBvbmVudHMpIHtcclxuICAgICAgaWYgKGNvbXBvbmVudC5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRCeU5hbWUobmFtZSk7XHJcbiAgICAgIGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QmVoYXZpb3JCeU5hbWUobmFtZTogc3RyaW5nKTogSUJlaGF2aW9yIHwgdW5kZWZpbmVkIHtcclxuICAgIGZvciAobGV0IGJlaGF2aW9yIG9mIHRoaXMuX2JlaGF2aW9ycykge1xyXG4gICAgICBpZiAoYmVoYXZpb3IubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBiZWhhdmlvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGxldCBiZWhhdmlvciA9IGNoaWxkLmdldEJlaGF2aW9yQnlOYW1lKG5hbWUpO1xyXG4gICAgICBpZiAoYmVoYXZpb3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBiZWhhdmlvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNoaWxkLmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQmVoYXZpb3IoYmVoYXZpb3I6IElCZWhhdmlvcik6IHZvaWQge1xyXG4gICAgdGhpcy5fYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xyXG4gICAgYmVoYXZpb3Iuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQubG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVJlYWR5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZVJlYWR5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iZWhhdmlvcnMuZm9yRWFjaCgoYmVoYXZpb3IpID0+IHtcclxuICAgICAgYmVoYXZpb3IudXBkYXRlUmVhZHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZVJlYWR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fbG9jYWxNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpO1xyXG4gICAgdGhpcy51cGRhdGVXb3JsZE1hdHJpeChcclxuICAgICAgdGhpcy5fcGFyZW50ICE9PSB1bmRlZmluZWQgPyB0aGlzLl9wYXJlbnQud29ybGRNYXRyaXggOiB1bmRlZmluZWRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZSh0aW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JlaGF2aW9ycy5mb3JFYWNoKChiZWhhdmlvcikgPT4ge1xyXG4gICAgICBiZWhhdmlvci51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkFkZGVkKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXg6IE1hdHJpeDR4NCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBNYXRyaXg0eDQubXVsdGlwbHkoXHJcbiAgICAgICAgcGFyZW50V29ybGRNYXRyaXgsXHJcbiAgICAgICAgdGhpcy5fbG9jYWxNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmNvcHlGcm9tKHRoaXMuX2xvY2FsTWF0cml4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi9zaW1PYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9yb290OiBTaW1PYmplY3Q7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBuZXcgU2ltT2JqZWN0KDAsICdfX1JPT1RfXycsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb290KCk6IFNpbU9iamVjdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRPYmplY3Qob2JqZWN0OiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QuYWRkQ2hpbGQob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290LmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKSB7XHJcbiAgICB0aGlzLl9yb290LnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi4vYmVoYXZpb3JzL2JlaGF2aW9yTWFuYWdlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4vc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBlbnVtIFpvbmVTdGF0ZSB7XHJcbiAgVU5JTklUSUFMSVpFRCxcclxuICBMT0FESU5HLFxyXG4gIFVQREFUSU5HLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgWm9uZSB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgcHJpdmF0ZSBfc3RhdGU6IFpvbmVTdGF0ZSA9IFpvbmVTdGF0ZS5VTklOSVRJQUxJWkVEO1xyXG4gIHByaXZhdGUgX2dsb2JhbElkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuX3NjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZSh6b25lRGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoem9uZURhdGEub2JqZWN0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBpbml0aWFsaXphdGlvbiBlcnJvcjogb2JqZWN0cyBub3QgcHJlc2VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvbmVEYXRhLm9iamVjdHMuZm9yRWFjaCgobzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvIGFzIFNpbU9iamVjdCwgdGhpcy5fc2NlbmUucm9vdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuTE9BRElORztcclxuXHJcbiAgICB0aGlzLl9zY2VuZS5sb2FkKCk7XHJcblxyXG4gICAgdGhpcy5fc2NlbmUucm9vdC51cGRhdGVSZWFkeSgpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVubG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFjdGl2YXRlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBvbkRlYWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHJpdmF0ZSBsb2FkU2ltT2JqZWN0KGRhdGFTZWN0aW9uOiBhbnksIHBhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBsZXQgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAoZGF0YVNlY3Rpb24ubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5hbWUgPSBTdHJpbmcoZGF0YVNlY3Rpb24ubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZ2xvYmFsSWQrKztcclxuICAgIGxldCBzaW1PYmplY3QgPSBuZXcgU2ltT2JqZWN0KHRoaXMuX2dsb2JhbElkLCBuYW1lLCB0aGlzLl9zY2VuZSk7XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNpbU9iamVjdC50cmFuc2Zvcm0uc2V0RnJvbUpzb24oZGF0YVNlY3Rpb24udHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY29tcG9uZW50cykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jb21wb25lbnRzLmZvckVhY2goKGM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudE1hbmFnZXIuZXh0cmFjdENvbXBvbmVudChjKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5iZWhhdmlvcnMpIHtcclxuICAgICAgZGF0YVNlY3Rpb24uYmVoYXZpb3JzLmZvckVhY2goKGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gQmVoYXZpb3JNYW5hZ2VyLmV4dHJhY3RCZWhhdmlvcihiKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQmVoYXZpb3IoYmVoYXZpb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY2hpbGRyZW4gJiYgZGF0YVNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChvOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRTaW1PYmplY3Qobywgc2ltT2JqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmVudC5hZGRDaGlsZChzaW1PYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEpzb25Bc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSAnLi96b25lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBab25lTWFuYWdlciBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2dsb2JhbFpvbmVJRDogbnVtYmVyID0gLTE7XHJcbiAgLy8gIHByaXZhdGUgc3RhdGljIF96b25lczogeyBbaWQ6IG51bWJlcl06IFpvbmUgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkWm9uZXM6IHsgW2lkOiBudW1iZXJdOiBzdHJpbmcgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9hY3RpdmVab25lOiBab25lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0OiBab25lTWFuYWdlcjtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIFpvbmVNYW5hZ2VyLl9pbnN0ID0gbmV3IFpvbmVNYW5hZ2VyKCk7XHJcbiAgICAvLyB0ZW1wb3JhcnlcclxuICAgIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbMF0gPSAnc3JjL2Fzc2V0cy96b25lcy90ZXN0Wm9uZS5qc29uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlWm9uZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkRlYWN0aXZhdGVkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVubG9hZCgpO1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoQXNzZXRNYW5hZ2VyLmlzQXNzZXRMb2FkZWQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pKSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbaWRdLFxyXG4gICAgICAgICAgWm9uZU1hbmFnZXIuX2luc3RcclxuICAgICAgICApO1xyXG4gICAgICAgIEFzc2V0TWFuYWdlci5sb2FkQXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFpvbmUgaWQ6ICR7aWR9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZS5pbmRleE9mKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCkgIT09IC0xKSB7XHJcbiAgICAgIGxldCBhc3NldCA9IG1lc3NhZ2UuY29udGV4dCBhcyBKc29uQXNzZXQ7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLmxvYWRab25lKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGxvYWRab25lKGFzc2V0OiBKc29uQXNzZXQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHpvbmVEYXRhID0gYXNzZXQuZGF0YTtcclxuICAgIGxldCB6b25lSWQ6IG51bWJlcjtcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBpZCBub3QgcHJlc2VudCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHpvbmVJZCA9IE51bWJlcih6b25lRGF0YS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKCF6b25lRGF0YS5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBuYW1lIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZU5hbWUgPSBTdHJpbmcoem9uZURhdGEubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHpvbmVEZXNjcmlwdGlvbiA9IFN0cmluZyh6b25lRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IG5ldyBab25lKHpvbmVJZCEsIHpvbmVOYW1lLCB6b25lRGVzY3JpcHRpb24pO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUuaW5pdGlhbGl6ZSh6b25lRGF0YSk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkFjdGl2YXRlZCgpO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUubG9hZCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vY29sbGlzaW9uL2NvbGxpc2lvbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29sbGlzaW9uQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50TWFuYWdlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gJy4vYXVkaW8vYXVkaW9NYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL2tleWJvYXJkTW92ZW1lbnRCZWhhdmlvcic7XHJcbmltcG9ydCB7IFBsYXllckJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL3BsYXllckJlaGF2aW9yJztcclxuaW1wb3J0IHsgUm90YXRpb25CZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9yb3RhdGlvbkJlaGF2aW9yJztcclxuaW1wb3J0IHsgZ2wsIEdMVXRpbGl0aWVzIH0gZnJvbSAnLi9nbC9nbCc7XHJcbmltcG9ydCB7IEJhc2ljU2hhZGVyIH0gZnJvbSAnLi9nbC9zaGFkZXJzL2Jhc2ljU2hhZGVyJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2dyYXBoaWNzL2NvbG9yJztcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL2dyYXBoaWNzL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNYW5hZ2VyIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbnB1dE1hbmFnZXIsIE1vdXNlQ29udGV4dCB9IGZyb20gJy4vaW5wdXQvaW5wdXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2VCdXMnO1xyXG5pbXBvcnQgeyBab25lTWFuYWdlciB9IGZyb20gJy4vd29ybGQvem9uZU1hbmFnZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIGdhbWUgZW5naW5lIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2Jhc2ljU2hhZGVyOiBCYXNpY1NoYWRlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9wcm9qZWN0aW9uOiBNYXRyaXg0eDQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcHJldmlvdXNUaW1lOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2dhbWVXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2dhbWVIZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBlbmdpbmVcclxuICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSBnYW1lIGluIHBpeGVsc1xyXG4gICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgZ2FtZSBpbiBwaXhlbHNcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3Iod2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcikge1xyXG4gICAgdGhpcy5fZ2FtZVdpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9nYW1lSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHVwIHRoaXMgZW5naW5lXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gR0xVdGlsaXRpZXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgaWYgKHRoaXMuX2dhbWVXaWR0aCAmJiB0aGlzLl9nYW1lSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuX2dhbWVXaWR0aCArICdweCc7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLl9nYW1lSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fZ2FtZVdpZHRoO1xyXG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fZ2FtZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBBc3NldE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgSW5wdXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIFpvbmVNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBnbC5jbGVhckNvbG9yKDk5IC8gMjU1LCAxNTUgLyAyNTUsIDI1NSAvIDI1NSwgMSk7XHJcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xyXG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcblxyXG4gICAgbGV0IGltYWdlQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy90ZXh0dXJlcy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaVxyXG4gICAgKTtcclxuICAgIGxldCBqc29uQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3pvbmVzLycsIHRydWUsIC9cXC4oanNvbikkL2kpO1xyXG4gICAgbGV0IGF1ZGlvQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy9zb3VuZHMvJyxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgL1xcLih3YXZ8bXAzKSQvaVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmxvYWRBbGwoaW1hZ2VDb250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChqc29uQ29udGV4dCk7XHJcbiAgICB0aGlzLmxvYWRBbGwoYXVkaW9Db250ZXh0KTtcclxuXHJcbiAgICB0aGlzLl9iYXNpY1NoYWRlciA9IG5ldyBCYXNpY1NoYWRlcigpO1xyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIudXNlKCk7XHJcblxyXG4gICAgLy8gTG9hZCBtYXRlcmlhbHNcclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgICAgJ3N0b25lV2FsbCcsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvc3RvbmVfd2FsbC5qcGcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICd3b29kUGxhbmsnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3dvb2RfcGxhbmsuanBnJyxcclxuICAgICAgICBDb2xvci53aGl0ZSgpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAnYmlyZCcsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvYmlyZF9zaHJ1bmtfMi5wbmcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdncmFzcycsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvZ3Jhc3NfYmlnZ2VyLnBuZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnYmlyZEp1bXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlci5sb2FkU291bmRGaWxlKFxyXG4gICAgICAnbXVzaWMnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYWxmX3JlbWl4Lm1wMycsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ3RpbmcnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvdGluZy53YXYnLCBmYWxzZSk7XHJcbiAgICBBdWRpb01hbmFnZXIubG9hZFNvdW5kRmlsZShcclxuICAgICAgJ2ZsYXAnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9zb3VuZHMvYmlyZF9qdW1wLndhdicsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgQXVkaW9NYW5hZ2VyLmxvYWRTb3VuZEZpbGUoJ2RlYWQnLCAnc3JjL2Fzc2V0cy9zb3VuZHMvZGVhdGgud2F2JywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZpbmQgYSBiZXR0ZXIgcGxhY2UgZm9yIHRoaXM/XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIoKSk7XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgQ29sbGlzaW9uQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgUGxheWVyQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlcigpKTtcclxuXHJcbiAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byBiZSByZWFkIGZyb20gZ2FtZSBjb25maWdcclxuICAgIFpvbmVNYW5hZ2VyLmNoYW5nZVpvbmUoMCk7XHJcblxyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICAgIHRoaXMubG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplcyB0aGUgY2FudmFzIHRvIGZpdCB0aGUgd2luZG93LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5fY2FudmFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLl9nYW1lV2lkdGggfHwgIXRoaXMuX2dhbWVIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9wcm9qZWN0aW9uID0gTWF0cml4NHg0Lm9ydGhvZ3JhcGhpYyhcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgLTEwMC4wLFxyXG4gICAgICAgIDEwMC4wXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vdXNlQ29udGV4dCA9IG1lc3NhZ2UuY29udGV4dCBhcyBNb3VzZUNvbnRleHQ7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlID09PSAnTU9VU0VfRE9XTicgJiYgbW91c2VDb250ZXh0KSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRBbGwocmVxdWlyZUNvbnRleHQ6IF9fV2VicGFja01vZHVsZUFwaS5SZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmVxdWlyZUNvbnRleHQua2V5cygpLmZvckVhY2gocmVxdWlyZUNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZGVsdGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3ByZXZpb3VzVGltZTtcclxuXHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgWm9uZU1hbmFnZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICBDb2xsaXNpb25NYW5hZ2VyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgdGhpcy5fcHJldmlvdXNUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlcikge1xyXG4gICAgICBab25lTWFuYWdlci5yZW5kZXIodGhpcy5fYmFzaWNTaGFkZXIpO1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IHVuaWZvcm1zXHJcbiAgICBpZiAodGhpcy5fYmFzaWNTaGFkZXIgJiYgdGhpcy5fcHJvamVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcm9qZWN0aW9uUG9zaXRpb24gPVxyXG4gICAgICAgIHRoaXMuX2Jhc2ljU2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9wcm9qZWN0aW9uJyk7XHJcblxyXG4gICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFxyXG4gICAgICAgIHByb2plY3Rpb25Qb3NpdGlvbixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3Byb2plY3Rpb24uZGF0YSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2NvcmUvZW5naW5lJztcclxuXHJcbnZhciBlbmdpbmU6IEVuZ2luZTtcclxuLy8gVGhlIG1haW4gZW50cnkgcG9pbnQgdG8gdGhlIGFwcGxpY2F0aW9uXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lID0gbmV3IEVuZ2luZSg1MTIsIDc1MCk7XHJcbiAgZW5naW5lLnN0YXJ0KCk7XHJcbn07XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lLnJlc2l6ZSgpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=