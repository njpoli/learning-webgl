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
        var _this = this;
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
        // prettier-ignore
        this._vertices = [
            // x, y, z, U: texture x, V: texture y
            // triangle 1
            // point 1
            new Vertex(0, 0, 0, 0, 0),
            // point 2
            new Vertex(0, this._height, 0, 0, 1.0),
            // point 3
            new Vertex(this._width, this._height, 0, 1.0, 1.0),
            // triangle 2
            // point 4
            new Vertex(this._width, this._height, 0, 1.0, 1.0),
            // point 5
            new Vertex(this._width, 0, 0, 1.0, 0),
            // point 6
            new Vertex(0, 0, 0, 0, 0),
        ];
        this._vertices.forEach(function (v) {
            var _a;
            (_a = _this._buffer) === null || _a === void 0 ? void 0 : _a.pushBackData(v.toArray());
        });
        this._buffer.upload();
        this._buffer.unbind();
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
    }
    SpriteComponentData.prototype.setFromJson = function (json) {
        if (json.name) {
            this.name = String(json.name);
        }
        if (json.materialName) {
            this.materialName = String(json.materialName);
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
        MaterialManager.registerMaterial(new Material('bird', 'src/assets/textures/bird.png', Color.white()));
        AudioManager.loadSoundFile('birdJump', 'src/assets/sounds/bird_jump.wav', false);
        AudioManager.loadSoundFile('music', 'src/assets/sounds/alf_remix.mp3', true);
        // Find a better place for this?
        ComponentManager.registerBuilder(new SpriteComponentBuilder());
        ComponentManager.registerBuilder(new AnimatedSpriteComponentBuilder());
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
            console.log(mouseContext);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFNUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sa0NBQWMsR0FBckI7UUFDRSxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixDQUFZO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0Is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QyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy9zb3VuZHN8c3luY3xDOi8uKHdhdiU3Q21wMykkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvYXNzZXRzL3RleHR1cmVzfHN5bmN8QzovLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvaSIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvem9uZXN8c3luY3xDOi8uKGpzb24pJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWVzc2FnZS9tZXNzYWdlQnVzLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWVzc2FnZS9tZXNzYWdlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXNzZXRzL2ltYWdlQXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvanNvbkFzc2V0TG9hZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYXNzZXRzL2Fzc2V0TWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL2dsLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9tYXRlcmlhbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy92ZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9hbmltYXRlZFNwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9zcHJpdGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9hbmltYXRlZFNwcml0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hdWRpby9hdWRpb01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvaW5wdXQvaW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2Jhc2VCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9rZXlib2FyZE1vdmVtZW50QmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvcm90YXRpb25CZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlcnMvYmFzaWNTaGFkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9jb2xvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy90ZXh0dXJlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL21hdGVyaWFsLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC9tYXRyaXg0eDQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NpbU9iamVjdC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NjZW5lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3pvbmVNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZW5naW5lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hbGZfcmVtaXgubXAzXCI6IDg1Myxcblx0XCIuL2JpcmRfanVtcC53YXZcIjogNjA3XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNjA1OyIsInZhciBtYXAgPSB7XG5cdFwiLi9iaXJkLnBuZ1wiOiAxMSxcblx0XCIuL3N0b25lX3dhbGwuanBnXCI6IDE5MCxcblx0XCIuL3N0b25lX3dhbGxfMTI4eDEyOC5qcGdcIjogNzM4LFxuXHRcIi4vd29vZF9wbGFuay5qcGdcIjogODQ3LFxuXHRcIi4vd29vZF9wbGFua18xMjh4MTI4LmpwZ1wiOiAzMDZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNDU7IiwidmFyIG1hcCA9IHtcblx0XCIuL3Rlc3Rab25lLmpzb25cIjogOTkzXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gOTI0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgcHVibGljIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IE1lc3NhZ2UsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcikge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUgfSBmcm9tICcuL21lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVByaW9yaXR5IH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcclxuICBwcml2YXRlIHN0YXRpYyBfc3Vic2NyaXB0aW9uczogeyBbY29kZTogc3RyaW5nXTogSU1lc3NhZ2VIYW5kbGVyW10gfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsUXVldWVNZXNzYWdlUGVyVXBkYXRlOiBudW1iZXIgPSAxMDtcclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsTWVzc2FnZVF1ZXVlOiBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZFN1YnNjcmlwdGlvbihjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5pbmRleE9mKGhhbmRsZXIpICE9PSAtMSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ0F0dGVtcHRpbmcgdG8gYWRkIGEgZHVwbGljYXRlIGhhbmRsZXIgdG8gY29kZSAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJy4gU3Vic2NyaXB0aW9uIG5vdCBhZGRlZC4nXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbW92ZVN1YnNjcmlwdGlvbihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlclxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gTm90IHN1cmUgaWYgdGhpcyBpcyBjb3JyZWN0XHJcbiAgICBpZiAoIU1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdDYW5ub3QgdW5zdWJzY3JpYmUgaGFuZGxlciBmcm9tIGNvZGU6ICcgK1xyXG4gICAgICAgICAgY29kZSArXHJcbiAgICAgICAgICAnIGJlY2F1c2UgdGhhdCBjb2RlIGRvZXMgbm90IHN1YnNjcmliZWQgdG8uJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5vZGVJbmRleCA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgIGlmIChub2RlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmZpbHRlcihcclxuICAgICAgICAoXywgaWR4KSA9PiBpZHggIT09IG5vZGVJbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwb3N0KG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIHBvc3RlZDonLCBtZXNzYWdlKTtcclxuICAgIGNvbnN0IGhhbmRsZXJzID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1ttZXNzYWdlLmNvZGVdO1xyXG4gICAgaWYgKCFoYW5kbGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5wcmlvcml0eSA9PT0gTWVzc2FnZVByaW9yaXR5LkhJR0gpIHtcclxuICAgICAgICBoLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUucHVzaChcclxuICAgICAgICAgIG5ldyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZShtZXNzYWdlLCBoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTm90IHVzaW5nIHRpbWU/XHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUxpbWl0ID0gTWF0aC5taW4oXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZSxcclxuICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VMaW1pdDsgKytpKSB7XHJcbiAgICAgIGxldCBub2RlID0gTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnBvcCgpO1xyXG4gICAgICBub2RlPy5oYW5kbGVyLm9uTWVzc2FnZShub2RlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VCdXMgfSBmcm9tICcuL21lc3NhZ2VCdXMnO1xyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVByaW9yaXR5IHtcclxuICBOT1JNQUwsXHJcbiAgSElHSCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gIHB1YmxpYyBjb2RlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbnRleHQ6IHVua25vd247XHJcbiAgcHVibGljIHNlbmRlcjogdW5rbm93bjtcclxuICBwdWJsaWMgcHJpb3JpdHk6IE1lc3NhZ2VQcmlvcml0eTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dDogdW5rbm93bixcclxuICAgIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHkgPSBNZXNzYWdlUHJpb3JpdHkuTk9STUFMXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kKGNvZGU6IHN0cmluZywgc2VuZGVyOiB1bmtub3duLCBjb250ZXh0PzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5Lk5PUk1BTCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kUHJpb3JpdHkoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBzZW5kZXI6IHVua25vd24sXHJcbiAgICBjb250ZXh0PzogdW5rbm93blxyXG4gICk6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5LkhJR0gpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLmFkZFN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5zdWJzY3JpYmUoY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucmVtb3ZlU3Vic2NyaXB0aW9uKGNvZGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBc3NldE1hbmFnZXIgfSBmcm9tICcuL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXRMb2FkZXIgaW1wbGVtZW50cyBJQXNzZXRMb2FkZXIge1xyXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWydwbmcnLCAnZ2lmJywgJ2pwZyddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLm9uSW1hZ2VMb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIGltYWdlKTtcclxuICAgIGltYWdlLnNyYyA9IGFzc2V0TmFtZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbWFnZUxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBuZXcgSW1hZ2VBc3NldChhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBBc3NldE1hbmFnZXIub25Bc3NldExvYWRlZChhc3NldCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsnanNvbiddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGFzc2V0TmFtZSk7XHJcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdsb2FkJyxcclxuICAgICAgdGhpcy5vbkpzb25Mb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIHJlcXVlc3QpXHJcbiAgICApO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSnNvbkxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCByZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgY29uc3QgYXNzZXQgPSBuZXcgSnNvbkFzc2V0KGFzc2V0TmFtZSwganNvbik7XHJcbiAgICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgSnNvbkFzc2V0TG9hZGVyIH0gZnJvbSAnLi9qc29uQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCA9XHJcbiAgJ01FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRDo6JztcclxuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlcnM6IElBc3NldExvYWRlcltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlZEFzc2V0czogeyBbbmFtZTogc3RyaW5nXTogSUFzc2V0IH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBJbWFnZUFzc2V0TG9hZGVyKCkpO1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobmV3IEpzb25Bc3NldExvYWRlcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJMb2FkZXIobG9hZGVyOiBJQXNzZXRMb2FkZXIpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKGxvYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uQXNzZXRMb2FkZWQoYXNzZXQ6IElBc3NldCk6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXQubmFtZV0gPSBhc3NldDtcclxuICAgIE1lc3NhZ2Uuc2VuZChNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyBhc3NldC5uYW1lLCB0aGlzLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXROYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgbCBvZiBBc3NldE1hbmFnZXIuX2xvYWRlcnMpIHtcclxuICAgICAgaWYgKGwuc3VwcG9ydGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbiB8fCAnJykgIT09IC0xKSB7XHJcbiAgICAgICAgbC5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBVbmFibGUgdG8gbG9hZCBhc3NldCB3aXRoIGV4dGVuc2lvbiAke2V4dGVuc2lvbn0gYmVjYXVzZSB0aGVyZSBpcyBubyBsb2FkZXIgYXNzb2NpYXRlZCB3aXRoIGl0LmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzQXNzZXRMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgd29ya3NcclxuICAgIHJldHVybiAhIUFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogSUFzc2V0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdKSB7XHJcbiAgICAgIHJldHVybiBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2OiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICB0aGlzLl94ID0gdi5feDtcclxuICAgIHRoaXMuX3kgPSB2Ll95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl94LCB0aGlzLl95XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0FycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ueCkge1xyXG4gICAgICB0aGlzLl94ID0gTnVtYmVyKGpzb24ueCk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi55KSB7XHJcbiAgICAgIHRoaXMuX3kgPSBOdW1iZXIoanNvbi55KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuLyoqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIGEgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFV0aWxpdGllcyB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgV2ViR0wsIHBvdGVudGlhbGx5IHVzaW5nIHRoZSBjYW52YXMgd2l0aCBhbiBhc3NpZ25lZCBpZCBtYXRjaGluZ1xyXG4gICAqIHRoZSBwcm92aWRlZCBpZiBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBlbGVtZW50SWQgVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXHJcbiAgICogQHJldHVybnMgcmVmZXJlbmNlIHRvIHRoZSBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShlbGVtZW50SWQ/OiBzdHJpbmcpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICBpZiAoZWxlbWVudElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgaWYgKGNhbnZhcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIGNhbnZhcyBlbGVtZW50IG5hbWVkICcgKyBlbGVtZW50SWQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgIGlmIChnbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4vZ2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgYSBHTEJ1ZmZlciBhdHRyaWJ1dGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVJbmZvIHtcclxuICAvKipcclxuICAgKiBMb2NhdGlvbiBvZiB0aGUgYXR0cmlidXRlXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIGxvY2F0aW9uOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNpemUgKG51bWJlciBvZiBlbGVtZW50cykgaW4gdGhpcyBhdHRyaWJ1dGUgKGkuZS4gVmVjdG9yMyA9IDMpXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIHNpemU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgYnVmZmVyLlxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBvZmZzZXQ6IG51bWJlciA9IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgV2ViR0wgYnVmZmVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xCdWZmZXIge1xyXG4gIHByaXZhdGUgX2hhc0F0dHJpYnV0ZUxvY2F0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZWxlbWVudFNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIF9zdHJpZGU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuXHJcbiAgcHJpdmF0ZSBfdGFyZ2V0QnVmZmVyVHlwZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2RhdGFUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbW9kZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3R5cGVTaXplOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2RhdGE6IG51bWJlcltdID0gW107XHJcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogQXR0cmlidXRlSW5mb1tdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgR0wgQnVmZmVyLlxyXG4gICAqIEBwYXJhbSBkYXRhVHlwZSBUaGUgZGF0YSB0eXBlIG9mIHRoZSBidWZmZXIuIERlZmF1bHQ6IGdsLkZMT0FUXHJcbiAgICogQHBhcmFtIHRhcmdldEJ1ZmZlclR5cGUgVGhlIGJ1ZmZlciB0YXJnZXQgdHlwZS4gZ2wuQVJSQVlfQlVGRkVSIG9yIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLiBEZWZhdWx0OiBnbC5BUlJBWV9CVUZGRVJcclxuICAgKiBAcGFyYW0gbW9kZSBUaGUgZHJhd2luZyBtb2RlIG9mIHRoZSBidWZmZXIuIChpLmUuIGdsLlRSSUFOR0xFUyBvciBnbC5MSU5FUykuIERlZmF1bHQ6IGdsLlRSSUFOR0xFU1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIGRhdGFUeXBlOiBudW1iZXIgPSBnbC5GTE9BVCxcclxuICAgIHRhcmdldEJ1ZmZlclR5cGU6IG51bWJlciA9IGdsLkFSUkFZX0JVRkZFUixcclxuICAgIG1vZGU6IG51bWJlciA9IGdsLlRSSUFOR0xFU1xyXG4gICkge1xyXG4gICAgdGhpcy5fZWxlbWVudFNpemUgPSAwO1xyXG4gICAgdGhpcy5fZGF0YVR5cGUgPSBkYXRhVHlwZTtcclxuICAgIHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPSB0YXJnZXRCdWZmZXJUeXBlO1xyXG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGJ5dGUgc2l6ZVxyXG4gICAgc3dpdGNoICh0aGlzLl9kYXRhVHlwZSkge1xyXG4gICAgICBjYXNlIGdsLkZMT0FUOlxyXG4gICAgICAvLyBwb3NpdGl2ZSBvciBuZWdhdGl2ZVxyXG4gICAgICBjYXNlIGdsLklOVDpcclxuICAgICAgLy8gb25seSBwb3NpdGl2ZSBidXQgdHdpY2UgdGhlIHNpemUgb2YgaW50XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfSU5UOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gNDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5TSE9SVDpcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuQllURTpcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9CWVRFOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gMTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBkYXRhIHR5cGUgJHtkYXRhVHlwZS50b1N0cmluZygpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNpemUgb2YgZWxlbWVudHMgKiBudW1iZXIgb2YgYnl0ZXMgaW4gZWFjaCBlbGVtZW50XHJcbiAgICB0aGlzLl9idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKSBhcyBXZWJHTEJ1ZmZlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lzIHRoZSBidWZmZXJcclxuICAgKi9cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLl9idWZmZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZHMgdGhpcyBidWZmZXIuXHJcbiAgICogQHBhcmFtIG5vcm1hbGl6ZWQgSW5kaWNhdGVzIGlmIHRoaXMgZGF0YSBzaG91bGQgYmUgbm9ybWFsaXplZC4gRGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgYmluZChub3JtYWxpemVkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgdGhpcy5fYnVmZmVyKTtcclxuXHJcbiAgICBpZiAodGhpcy5faGFzQXR0cmlidXRlTG9jYXRpb24pIHtcclxuICAgICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICBpdC5sb2NhdGlvbixcclxuICAgICAgICAgIGl0LnNpemUsXHJcbiAgICAgICAgICB0aGlzLl9kYXRhVHlwZSxcclxuICAgICAgICAgIG5vcm1hbGl6ZWQsXHJcbiAgICAgICAgICB0aGlzLl9zdHJpZGUsXHJcbiAgICAgICAgICBpdC5vZmZzZXQgKiB0aGlzLl90eXBlU2l6ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGl0LmxvY2F0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIGluZm9ybWF0aW9uIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gdG8gYmUgYWRkZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWRkQXR0cmlidXRlTG9jYXRpb24oaW5mbzogQXR0cmlidXRlSW5mbyk6IHZvaWQge1xyXG4gICAgdGhpcy5faGFzQXR0cmlidXRlTG9jYXRpb24gPSB0cnVlO1xyXG4gICAgaW5mby5vZmZzZXQgPSB0aGlzLl9lbGVtZW50U2l6ZTtcclxuICAgIHRoaXMuX2F0dHJpYnV0ZXMucHVzaChpbmZvKTtcclxuICAgIHRoaXMuX2VsZW1lbnRTaXplICs9IGluZm8uc2l6ZTtcclxuICAgIHRoaXMuX3N0cmlkZSA9IHRoaXMuX2VsZW1lbnRTaXplICogdGhpcy5fdHlwZVNpemU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyB0aGUgY3VycmVudCBkYXRhIGluIHRoZSBidWZmZXIgd2l0aCBwcm92aWRlZCBkYXRhLlxyXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGJlIGxvYWRlZCBpbiB0aGUgYnVmZmVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xyXG4gICAgdGhpcy5wdXNoQmFja0RhdGEoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgb3V0IGFsbCBkYXRhIGluIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNsZWFyRGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGEubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgZGF0YSB0byB0aGUgYnVmZmVyXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKi9cclxuICBwdWJsaWMgcHVzaEJhY2tEYXRhKGRhdGE6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGxvYWRzIHRoaXMgZGF0YSB0byB0aGUgR1BVXHJcbiAgICovXHJcbiAgcHVibGljIHVwbG9hZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgdGhpcy5fYnVmZmVyKTtcclxuXHJcbiAgICBsZXQgYnVmZmVyRGF0YTogQXJyYXlCdWZmZXI7XHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgZ2wuRkxPQVQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuSU5UOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEludDE2QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5CWVRFOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50OEFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBEYXRhIHR5cGUgZXJyb3IgaW4gcHVzaEJhY2tEYXRhKCkgZm9yIGRhdGF0eXBlICR7dGhpcy5fZGF0YVR5cGUudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnbC5idWZmZXJEYXRhKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIGJ1ZmZlckRhdGEsIGdsLlNUQVRJQ19EUkFXKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRHJhd3MgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkFSUkFZX0JVRkZFUikge1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKHRoaXMuX21vZGUsIDAsIHRoaXMuX2RhdGEubGVuZ3RoIC8gdGhpcy5fZWxlbWVudFNpemUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRCdWZmZXJUeXBlID09PSBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xyXG4gICAgICBnbC5kcmF3RWxlbWVudHModGhpcy5fbW9kZSwgdGhpcy5fZGF0YS5sZW5ndGgsIHRoaXMuX2RhdGFUeXBlLCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL21hdGVyaWFsJztcclxuXHJcbmNsYXNzIE1hdGVyaWFsUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIG1hdGVyaWFsOiBNYXRlcmlhbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWF0ZXJpYWw6IE1hdGVyaWFsKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9tYXRlcmlhbHM6IHsgW25hbWU6IHN0cmluZ106IE1hdGVyaWFsUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyTWF0ZXJpYWwobWF0ZXJpYWw6IE1hdGVyaWFsKTogdm9pZCB7XHJcbiAgICBpZiAoTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9IG5ldyBNYXRlcmlhbFJlZmVyZW5jZU5vZGUoXHJcbiAgICAgICAgbWF0ZXJpYWxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TWF0ZXJpYWwobWF0ZXJpYWxOYW1lOiBzdHJpbmcpOiBNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICAgIHJldHVybiBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlTWF0ZXJpYWwobWF0ZXJpYWxOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1hdGVyaWFsUmVmZXJlbmNlID0gTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXTtcclxuICAgIGlmICghbWF0ZXJpYWxSZWZlcmVuY2UpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgcmVsZWFzZSBhIG1hdGVyaWFsIHdoaWNoIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50LS07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50IDwgMSAmJlxyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0gIT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsPy5kZXN0cm95KCk7XHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5tYXRlcmlhbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVmVjdG9yMyB7XHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuICBwcml2YXRlIF96OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB6OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgdGhpcy5feiA9IHo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl96ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCB6ZXJvKCk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvbmUoKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoMSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3pdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weUZyb20odmVjdG9yOiBWZWN0b3IzKTogdm9pZCB7XHJcbiAgICB0aGlzLl94ID0gdmVjdG9yLl94O1xyXG4gICAgdGhpcy5feSA9IHZlY3Rvci5feTtcclxuICAgIHRoaXMuX3ogPSB2ZWN0b3IuX3o7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi54KSB7XHJcbiAgICAgIHRoaXMuX3ggPSBOdW1iZXIoanNvbi54KTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnkpIHtcclxuICAgICAgdGhpcy5feSA9IE51bWJlcihqc29uLnkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueikge1xyXG4gICAgICB0aGlzLl96ID0gTnVtYmVyKGpzb24ueik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggKz0gdi5feDtcclxuICAgIHRoaXMuX3kgKz0gdi5feTtcclxuICAgIHRoaXMuX3ogKz0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJ0cmFjdCh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94IC09IHYuX3g7XHJcbiAgICB0aGlzLl95IC09IHYuX3k7XHJcbiAgICB0aGlzLl96IC09IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHkodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCAqPSB2Ll94O1xyXG4gICAgdGhpcy5feSAqPSB2Ll95O1xyXG4gICAgdGhpcy5feiAqPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpdmlkZSh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94IC89IHYuX3g7XHJcbiAgICB0aGlzLl95IC89IHYuX3k7XHJcbiAgICB0aGlzLl96IC89IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBkYXRhIGZvciBhIHNpbmdsZSB2ZXJ0ZXhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZXJ0ZXgge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgdGV4Q29vcmRzOiBWZWN0b3IyID0gVmVjdG9yMi56ZXJvO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICB4OiBudW1iZXIgPSAwLFxyXG4gICAgeTogbnVtYmVyID0gMCxcclxuICAgIHo6IG51bWJlciA9IDAsXHJcbiAgICB0dTogbnVtYmVyID0gMCxcclxuICAgIHR2OiBudW1iZXIgPSAwXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHRoaXMucG9zaXRpb24ueiA9IHo7XHJcblxyXG4gICAgdGhpcy50ZXhDb29yZHMueCA9IHR1O1xyXG4gICAgdGhpcy50ZXhDb29yZHMueSA9IHR2O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMucG9zaXRpb24udG9BcnJheSgpKTtcclxuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KHRoaXMudGV4Q29vcmRzLnRvQXJyYXkoKSk7XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbmZvLCBHTEJ1ZmZlciB9IGZyb20gJy4uL2dsL2dsQnVmZmVyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfd2lkdGg6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2hlaWdodDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfYnVmZmVyOiBHTEJ1ZmZlciB8IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgX21hdGVyaWFsOiBNYXRlcmlhbCB8IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgX21hdGVyaWFsTmFtZTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfdmVydGljZXM6IFZlcnRleFtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG1hdGVyaWFsTmFtZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDEwMCxcclxuICAgIGhlaWdodDogbnVtYmVyID0gMTAwXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSBtYXRlcmlhbE5hbWU7XHJcbiAgICB0aGlzLl9tYXRlcmlhbCA9IE1hdGVyaWFsTWFuYWdlci5nZXRNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlbGVhc2VNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBHTEJ1ZmZlcigpO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICAvLyBSZW1vdmVkIHJlZmVyZW5jZSB0byBzaGFkZXIsIGJhZCBwcmFjdGljZSB0byBwYXNzIHNoYWRlciBpbmZvIHRvIHNwcml0ZSBvbiBsb2FkXHJcbiAgICAvLyBTdGlsbCBub3QgaWRlYWwgKHJlZmVyZW5jaW5nIGFfbG9jYXRpb24gaW4gdmVydGV4U2hhZGVyU291cmNlIGJ5IGhhcmRjb2RpbmcgMClcclxuICAgIC8vIEVhY2ggdmFyaWFibGUgaW4gc2hhZGVyU291cmNlIGlzIHJlZmVyZW5jZWQgYnkgaW5kZXggaW4gb3JkZXIgb2YgZGVjbGFyYXRpb24gKGUuZy4gYmVjYXVzZSBhX2xvY2F0aW9uIGlzIHRoZSBmaXJzdCB2YXJpYWJsZSBpdCBpcyBpbmRleCAwKVxyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUubG9jYXRpb24gPSAwO1xyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUuc2l6ZSA9IDM7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24ocG9zaXRpb25BdHRyaWJ1dGUpO1xyXG5cclxuICAgIGxldCB0ZXhDb29yZEF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5sb2NhdGlvbiA9IDE7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5zaXplID0gMjtcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbih0ZXhDb29yZEF0dHJpYnV0ZSk7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHRoaXMuX3ZlcnRpY2VzID0gW1xyXG4gICAgICAvLyB4LCB5LCB6LCBVOiB0ZXh0dXJlIHgsIFY6IHRleHR1cmUgeVxyXG4gICAgICAvLyB0cmlhbmdsZSAxXHJcbiAgICAgIC8vIHBvaW50IDFcclxuICAgICAgbmV3IFZlcnRleCgwLCAwLCAwLCAwLCAwLCksXHJcbiAgICAgIC8vIHBvaW50IDJcclxuICAgICAgbmV3IFZlcnRleCgwLCB0aGlzLl9oZWlnaHQsIDAsIDAsIDEuMCwpLFxyXG4gICAgICAvLyBwb2ludCAzXHJcbiAgICAgIG5ldyBWZXJ0ZXgodGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgMCwgMS4wLCAxLjAsKSxcclxuICAgICAgLy8gdHJpYW5nbGUgMlxyXG4gICAgICAvLyBwb2ludCA0XHJcbiAgICAgIG5ldyBWZXJ0ZXgodGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgMCwgMS4wLCAxLjApLFxyXG4gICAgICAvLyBwb2ludCA1XHJcbiAgICAgIG5ldyBWZXJ0ZXgodGhpcy5fd2lkdGgsIDAsIDAsIDEuMCwgMCksXHJcbiAgICAgIC8vIHBvaW50IDZcclxuICAgICAgbmV3IFZlcnRleCgwLCAwLCAwLCAwLCAwKSxcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5fdmVydGljZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2J1ZmZlci51cGxvYWQoKTtcclxuICAgIHRoaXMuX2J1ZmZlci51bmJpbmQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgZHJhdyhzaGFkZXI6IFNoYWRlciwgbW9kZWw6IE1hdHJpeDR4NCk6IHZvaWQge1xyXG4gICAgbGV0IG1vZGVsTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X21vZGVsJyk7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTG9jYXRpb24sIGZhbHNlLCBtb2RlbC50b0Zsb2F0MzJBcnJheSgpKTtcclxuXHJcbiAgICBjb25zdCBjb2xvckxvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV90aW50Jyk7XHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWwpIHtcclxuICAgICAgZ2wudW5pZm9ybTRmdihjb2xvckxvY2F0aW9uLCB0aGlzLl9tYXRlcmlhbC50aW50LnRvRmxvYXQzMkFycmF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbD8uZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgdGhpcy5fbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUuYWN0aXZhdGVBbmRCaW5kKDApO1xyXG4gICAgICBjb25zdCBkaWZmdXNlTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X2RpZmZ1c2UnKTtcclxuICAgICAgLy8gcGFzcyBhIHNpbmdsZSBpbnRlZ2VyXHJcbiAgICAgIGdsLnVuaWZvcm0xaShkaWZmdXNlTG9jYXRpb24sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9idWZmZXIpIHtcclxuICAgICAgdGhpcy5fYnVmZmVyLmJpbmQoKTtcclxuICAgICAgdGhpcy5fYnVmZmVyLmRyYXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXNzaWduZWQgYnVmZmVyIGZvciBzcHJpdGUgJyArIHRoaXMuX25hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5jbGFzcyBVVkluZm8ge1xyXG4gIHB1YmxpYyBtaW46IFZlY3RvcjI7XHJcbiAgcHVibGljIG1heDogVmVjdG9yMjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1pbjogVmVjdG9yMiwgbWF4OiBWZWN0b3IyKSB7XHJcbiAgICB0aGlzLm1pbiA9IG1pbjtcclxuICAgIHRoaXMubWF4ID0gbWF4O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlIGV4dGVuZHMgU3ByaXRlIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9mcmFtZUhlaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZyYW1lV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9mcmFtZUNvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZnJhbWVTZXF1ZW5jZTogbnVtYmVyW107XHJcbiAgLy8gVE9ETzogTWFrZSB0aGlzIGNvbmZpZ3VyYWJsZVxyXG4gIHByaXZhdGUgX2ZyYW1lVGltZTogbnVtYmVyID0gMTIxO1xyXG4gIHByaXZhdGUgX2ZyYW1lVVZzOiBVVkluZm9bXSA9IFtdO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIF9jdXJyZW50RnJhbWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfYXNzZXRMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9hc3NldFdpZHRoOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgX2Fzc2V0SGVpZ2h0OiBudW1iZXIgPSAyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBtYXRlcmlhbE5hbWU6IHN0cmluZyxcclxuICAgIHdpZHRoOiBudW1iZXIgPSAxMDAsXHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDEwMCxcclxuICAgIGZyYW1lV2lkdGg6IG51bWJlciA9IDEwLFxyXG4gICAgZnJhbWVIZWlnaHQ6IG51bWJlciA9IDEwLFxyXG4gICAgZnJhbWVDb3VudDogbnVtYmVyID0gMSxcclxuICAgIGZyYW1lU2VxdWVuY2U6IG51bWJlcltdID0gW11cclxuICApIHtcclxuICAgIHN1cGVyKG5hbWUsIG1hdGVyaWFsTmFtZSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5fZnJhbWVXaWR0aCA9IGZyYW1lV2lkdGg7XHJcbiAgICB0aGlzLl9mcmFtZUhlaWdodCA9IGZyYW1lSGVpZ2h0O1xyXG4gICAgdGhpcy5fZnJhbWVDb3VudCA9IGZyYW1lQ291bnQ7XHJcbiAgICB0aGlzLl9mcmFtZVNlcXVlbmNlID0gZnJhbWVTZXF1ZW5jZTtcclxuXHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWwpIHtcclxuICAgICAgTWVzc2FnZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmVOYW1lLFxyXG4gICAgICAgIHRoaXNcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBtZXNzYWdlLmNvZGUgPT09XHJcbiAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX21hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZU5hbWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9hc3NldExvYWRlZCA9IHRydWU7XHJcbiAgICAgIGxldCBhc3NldCA9IG1lc3NhZ2UuY29udGV4dCBhcyBJbWFnZUFzc2V0O1xyXG4gICAgICB0aGlzLl9hc3NldEhlaWdodCA9IGFzc2V0LmhlaWdodDtcclxuICAgICAgdGhpcy5fYXNzZXRXaWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVVWcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyBIYWNrIGFyb3VuZCBmb3Igbm90IGJlaW5nIGluc3RhbnRpYXRlZCBiZWZvcmUgb25NZXNzYWdlIGlzIHNlbnRcclxuICAgIC8vIFJldmlzaXRcclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCAmJiAhdGhpcy5fYXNzZXRMb2FkZWQpIHtcclxuICAgICAgbGV0IGFzc2V0ID0gQXNzZXRNYW5hZ2VyLmdldEFzc2V0KFxyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZU5hbWVcclxuICAgICAgKSBhcyBJbWFnZUFzc2V0O1xyXG4gICAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLl9hc3NldExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRIZWlnaHQgPSBhc3NldC5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRXaWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVVZzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jdXJyZW50VGltZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lID4gdGhpcy5fZnJhbWVUaW1lKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZSsrO1xyXG4gICAgICB0aGlzLl9jdXJyZW50VGltZSA9IDA7XHJcblxyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEZyYW1lID49IHRoaXMuX2ZyYW1lU2VxdWVuY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZnJhbWVVVnMgPSB0aGlzLl9mcmFtZVNlcXVlbmNlW3RoaXMuX2N1cnJlbnRGcmFtZV07XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzBdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluKTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbMV0udGV4Q29vcmRzLmNvcHlGcm9tKFxyXG4gICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbi54LFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heC55XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1syXS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heCk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzNdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4KTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbNF0udGV4Q29vcmRzLmNvcHlGcm9tKFxyXG4gICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1heC54LFxyXG4gICAgICAgICAgdGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbi55XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1s1XS50ZXhDb29yZHMuY29weUZyb20odGhpcy5fZnJhbWVVVnNbZnJhbWVVVnNdLm1pbik7XHJcblxyXG4gICAgICB0aGlzLl9idWZmZXI/LmNsZWFyRGF0YSgpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyPy5wdXNoQmFja0RhdGEodi50b0FycmF5KCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fYnVmZmVyPy51cGxvYWQoKTtcclxuICAgICAgdGhpcy5fYnVmZmVyPy51bmJpbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVVWcygpOiB2b2lkIHtcclxuICAgIGxldCB0b3RhbFdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IHlWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZnJhbWVDb3VudDsgaSsrKSB7XHJcbiAgICAgIHRvdGFsV2lkdGggPSBpICogdGhpcy5fZnJhbWVXaWR0aDtcclxuICAgICAgaWYgKHRvdGFsV2lkdGggPiB0aGlzLl9hc3NldFdpZHRoKSB7XHJcbiAgICAgICAgeVZhbHVlKys7XHJcbiAgICAgICAgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB1ID0gKGkgKiB0aGlzLl9mcmFtZVdpZHRoKSAvIHRoaXMuX2Fzc2V0V2lkdGg7XHJcbiAgICAgIGxldCB2ID0gKHlWYWx1ZSAqIHRoaXMuX2ZyYW1lSGVpZ2h0KSAvIHRoaXMuX2Fzc2V0SGVpZ2h0O1xyXG4gICAgICBsZXQgbWluOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIodSwgdik7XHJcblxyXG4gICAgICBsZXQgdU1heCA9IChpICogdGhpcy5fZnJhbWVXaWR0aCArIHRoaXMuX2ZyYW1lV2lkdGgpIC8gdGhpcy5fYXNzZXRXaWR0aDtcclxuICAgICAgbGV0IHZNYXggPVxyXG4gICAgICAgICh5VmFsdWUgKiB0aGlzLl9mcmFtZUhlaWdodCArIHRoaXMuX2ZyYW1lSGVpZ2h0KSAvIHRoaXMuX2Fzc2V0SGVpZ2h0O1xyXG4gICAgICBsZXQgbWF4OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIodU1heCwgdk1heCk7XHJcblxyXG4gICAgICB0aGlzLl9mcmFtZVVWcy5wdXNoKG5ldyBVVkluZm8obWluLCBtYXgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuLi9jb3JlL3dvcmxkL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vSUNvbXBvbmVudERhdGEnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICBwcm90ZWN0ZWQgX293bmVyOiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9kYXRhOiBJQ29tcG9uZW50RGF0YTtcclxuXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IElDb21wb25lbnREYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3duZXIoKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9vd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPd25lcihvd25lcjogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciA9IG93bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3Mvc3ByaXRlJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4vSUNvbXBvbmVudEJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vSUNvbXBvbmVudERhdGEnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi9jb21wb25lbnRNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnREYXRhIGltcGxlbWVudHMgSUNvbXBvbmVudERhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgbWF0ZXJpYWxOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLm1hdGVyaWFsTmFtZSkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsTmFtZSA9IFN0cmluZyhqc29uLm1hdGVyaWFsTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnc3ByaXRlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgU3ByaXRlQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFNwcml0ZUNvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUoZGF0YS5uYW1lLCBkYXRhLm1hdGVyaWFsTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZSB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3MvYW5pbWF0ZWRTcHJpdGUnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudERhdGEgfSBmcm9tICcuL3Nwcml0ZUNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgZXh0ZW5kcyBTcHJpdGVDb21wb25lbnREYXRhXHJcbiAgaW1wbGVtZW50cyBJQ29tcG9uZW50RGF0YVxyXG57XHJcbiAgcHVibGljIGZyYW1lV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmcmFtZVNlcXVlbmNlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBzdXBlci5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZVdpZHRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZVdpZHRoIHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVXaWR0aCA9IE51bWJlcihqc29uLmZyYW1lV2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUhlaWdodCB0byBiZSBkZWZpbmVkJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcmFtZUhlaWdodCA9IE51bWJlcihqc29uLmZyYW1lSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5mcmFtZUNvdW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmltYXRlZCBzcHJpdGUgZGF0YSByZXF1aXJlcyBmcmFtZUNvdW50IHRvIGJlIGRlZmluZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IE51bWJlcihqc29uLmZyYW1lQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lU2VxdWVuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0FuaW1hdGVkIHNwcml0ZSBkYXRhIHJlcXVpcmVzIGZyYW1lU2VxdWVuY2UgdG8gYmUgZGVmaW5lZCdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJhbWVTZXF1ZW5jZSA9IGpzb24uZnJhbWVTZXF1ZW5jZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ2FuaW1hdGVkU3ByaXRlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zcHJpdGU6IEFuaW1hdGVkU3ByaXRlO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogQW5pbWF0ZWRTcHJpdGVDb21wb25lbnREYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgQW5pbWF0ZWRTcHJpdGUoXHJcbiAgICAgIGRhdGEubmFtZSxcclxuICAgICAgZGF0YS5tYXRlcmlhbE5hbWUsXHJcbiAgICAgIGRhdGEuZnJhbWVXaWR0aCxcclxuICAgICAgZGF0YS5mcmFtZUhlaWdodCxcclxuICAgICAgZGF0YS5mcmFtZVdpZHRoLFxyXG4gICAgICBkYXRhLmZyYW1lSGVpZ2h0LFxyXG4gICAgICBkYXRhLmZyYW1lQ291bnQsXHJcbiAgICAgIGRhdGEuZnJhbWVTZXF1ZW5jZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUudXBkYXRlKHRpbWUpO1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUuZHJhdyhzaGFkZXIsIHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVuZGVyKHNoYWRlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4vSUNvbXBvbmVudEJ1aWxkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkQnVpbGRlcnM6IHsgW3R5cGU6IHN0cmluZ106IElDb21wb25lbnRCdWlsZGVyIH0gPVxyXG4gICAge307XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJCdWlsZGVyKGJ1aWxkZXI6IElDb21wb25lbnRCdWlsZGVyKTogdm9pZCB7XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RDb21wb25lbnQoanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBpZiAoanNvbi50eXBlKSB7XHJcbiAgICAgIGlmIChDb21wb25lbnRNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tcclxuICAgICAgICAgIFN0cmluZyhqc29uLnR5cGUpXHJcbiAgICAgICAgXS5idWlsZEZyb21Kc29uKGpzb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICdDb21wb25lbnQgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTb3VuZEVmZmVjdCB7XHJcbiAgcHJpdmF0ZSBfcGxheWVyOiBIVE1MQXVkaW9FbGVtZW50O1xyXG5cclxuICBwdWJsaWMgYXNzZXRQYXRoOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihhc3NldFBhdGg6IHN0cmluZywgbG9vcDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcGxheWVyID0gbmV3IEF1ZGlvKGFzc2V0UGF0aCk7XHJcbiAgICB0aGlzLl9wbGF5ZXIudm9sdW1lID0gMC4wNTtcclxuICAgIHRoaXMuYXNzZXRQYXRoID0gYXNzZXRQYXRoO1xyXG4gICAgdGhpcy5fcGxheWVyLmxvb3AgPSBsb29wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsb29wKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYXllci5sb29wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9wbGF5ZXIubG9vcCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9wbGF5ZXIgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNQYXVzZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyLnBhdXNlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTtcclxuICAgIHRoaXMuX3BsYXllci5jdXJyZW50VGltZSA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfc291bmRFZmZlY3RzOiB7IFtuYW1lOiBzdHJpbmddOiBTb3VuZEVmZmVjdCB9ID0ge307XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFNvdW5kRmlsZShcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGFzc2V0UGF0aDogc3RyaW5nLFxyXG4gICAgbG9vcDogYm9vbGVhblxyXG4gICk6IHZvaWQge1xyXG4gICAgQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV0gPSBuZXcgU291bmRFZmZlY3QoYXNzZXRQYXRoLCBsb29wKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGxheVNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcFNvdW5kKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdKSB7XHJcbiAgICAgIEF1ZGlvTWFuYWdlci5fc291bmRFZmZlY3RzW25hbWVdLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGF1c2VTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXSkge1xyXG4gICAgICBBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0c1tuYW1lXS5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b2dnbGVTb3VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNvdW5kID0gQXVkaW9NYW5hZ2VyLl9zb3VuZEVmZmVjdHNbbmFtZV07XHJcbiAgICBpZiAoc291bmQpIHtcclxuICAgICAgc291bmQuaXNQYXVzZWQoKSA/IHNvdW5kLnBsYXkoKSA6IHNvdW5kLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQucGF1c2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdG9wQWxsKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LnZhbHVlcyhBdWRpb01hbmFnZXIuX3NvdW5kRWZmZWN0cykuZm9yRWFjaCgoc291bmQpID0+IHtcclxuICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfcmVnaXN0ZXJlZEJ1aWxkZXJzOiB7IFt0eXBlOiBzdHJpbmddOiBJQmVoYXZpb3JCdWlsZGVyIH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUJlaGF2aW9yQnVpbGRlcik6IHZvaWQge1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RCZWhhdmlvcihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgaWYgKGpzb24udHlwZSkge1xyXG4gICAgICBpZiAoQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIEJlaGF2aW9yTWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ0JlaGF2aW9yIG1hbmFnZXIgZXJyb3I6IHR5cGUgaXMgbWlzc2luZyBvciBidWlsZGVyIGlzIG5vdCByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUnXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZW51bSBLZXlzIHtcclxuICBMRUZUID0gMzcsXHJcbiAgVVAgPSAzOCxcclxuICBSSUdIVCA9IDM5LFxyXG4gIERPV04gPSA0MCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlQ29udGV4dCB7XHJcbiAgcHVibGljIGxlZnREb3duOiBib29sZWFuO1xyXG4gIHB1YmxpYyByaWdodERvd246IGJvb2xlYW47XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobGVmdERvd246IGJvb2xlYW4sIHJpZ2h0RG93bjogYm9vbGVhbiwgcG9zaXRpb246IFZlY3RvcjIpIHtcclxuICAgIHRoaXMubGVmdERvd24gPSBsZWZ0RG93bjtcclxuICAgIHRoaXMucmlnaHREb3duID0gcmlnaHREb3duO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2tleXM6IGJvb2xlYW5bXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIF9wcmV2aW91c01vdXNlWDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9wcmV2aW91c01vdXNlWTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9tb3VzZVg6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfbW91c2VZOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xlZnREb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JpZ2h0RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgIElucHV0TWFuYWdlci5fa2V5c1tpXSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgSW5wdXRNYW5hZ2VyLm9uS2V5RG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBJbnB1dE1hbmFnZXIub25LZXlVcCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgSW5wdXRNYW5hZ2VyLm9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBJbnB1dE1hbmFnZXIub25Nb3VzZURvd24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBJbnB1dE1hbmFnZXIub25Nb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNLZXlEb3duKGtleTogS2V5cyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIElucHV0TWFuYWdlci5fa2V5c1trZXldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNb3VzZVBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX21vdXNlWCwgdGhpcy5fbW91c2VZKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgIGlmIChldmVudC5rZXlDb2RlICE9PSAxNiAmJiBldmVudC5rZXlDb2RlICE9PSAxNyAmJiBldmVudC5rZXlDb2RlICE9PSA3Mykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSAhPT0gMTYgJiYgZXZlbnQua2V5Q29kZSAhPT0gMTcgJiYgZXZlbnQua2V5Q29kZSAhPT0gNzMpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWCA9IElucHV0TWFuYWdlci5fbW91c2VYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9wcmV2aW91c01vdXNlWSA9IElucHV0TWFuYWdlci5fbW91c2VZO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVggPSBldmVudC5jbGllbnRYO1xyXG4gICAgSW5wdXRNYW5hZ2VyLl9tb3VzZVkgPSBldmVudC5jbGllbnRZO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgTWVzc2FnZS5zZW5kKFxyXG4gICAgICAnTU9VU0VfRE9XTicsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93biA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9yaWdodERvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBNZXNzYWdlLnNlbmQoXHJcbiAgICAgICdNT1VTRV9VUCcsXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIG5ldyBNb3VzZUNvbnRleHQoXHJcbiAgICAgICAgSW5wdXRNYW5hZ2VyLl9sZWZ0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuX3JpZ2h0RG93bixcclxuICAgICAgICBJbnB1dE1hbmFnZXIuZ2V0TW91c2VQb3NpdGlvbigpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL3dvcmxkL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUJlaGF2aW9yIGltcGxlbWVudHMgSUJlaGF2aW9yIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX2RhdGE6IElCZWhhdmlvckRhdGE7XHJcbiAgcHJvdGVjdGVkIF9vd25lcjogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUJlaGF2aW9yRGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLl9kYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgYXBwbHkodXNlckRhdGE6IGFueSk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIsIEtleXMgfSBmcm9tICcuLi9pbnB1dC9pbnB1dE1hbmFnZXInO1xyXG5pbXBvcnQgeyBCYXNlQmVoYXZpb3IgfSBmcm9tICcuL2Jhc2VCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuXHJcbiAgICBpZiAoanNvbi5zcGVlZCkge1xyXG4gICAgICB0aGlzLnNwZWVkID0gTnVtYmVyKGpzb24uc3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAna2V5Ym9hcmRNb3ZlbWVudCc7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuTEVGVCkgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLlJJR0hUKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuVVApICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5ET1dOKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4uL21hdGgvdmVjdG9yMyc7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvckRhdGEgaW1wbGVtZW50cyBJQmVoYXZpb3JEYXRhIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFqc29uLm5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbi5zZXRGcm9tSnNvbihqc29uLnJvdGF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdyb3RhdGlvbic7XHJcbiAgfVxyXG5cclxuICBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBSb3RhdGlvbkJlaGF2aW9yRGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuICAgIHJldHVybiBuZXcgUm90YXRpb25CZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yIGV4dGVuZHMgQmFzZUJlaGF2aW9yIHtcclxuICBwcml2YXRlIF9yb3RhdGlvbjogVmVjdG9yMztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFJvdGF0aW9uQmVoYXZpb3JEYXRhKSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IGRhdGEucm90YXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXI/LnRyYW5zZm9ybS5yb3RhdGlvbi5hZGQodGhpcy5fcm90YXRpb24pO1xyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2dsJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgV2ViR0wgc2hhZGVyLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNoYWRlciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9wcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogeyBbbmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICBwcml2YXRlIF91bmlmb3JtczogeyBbbmFtZTogc3RyaW5nXTogV2ViR0xVbmlmb3JtTG9jYXRpb24gfSA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IHNoYWRlci5cclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgdmVydGV4IHNoYWRlci5cclxuICAgKiBAcGFyYW0gZnJhZ21lbnRTb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgdXNlKCk6IHZvaWQge1xyXG4gICAgZ2wudXNlUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGxvY2F0aW9uIG9mIGFuIGF0dHJpYnV0ZSB3aXRoIHRoZSBwcm92aWRlZCBuYW1lXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB0byByZXRyaWV2ZVxyXG4gICAqIEByZXR1cm5zIEFuIGF0dHJpYnV0ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRBdHRyaWJ1dGVMb2NhdGlvbihuYW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuX2F0dHJpYnV0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFVuYWJsZSB0byBmaW5kIGF0dHJpYnV0ZSBuYW1lICR7bmFtZX0gaW4gc2hhZGVyICR7dGhpcy5fbmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHtcclxuICAgIGlmICh0aGlzLl91bmlmb3Jtc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgdW5pZm9ybSBuYW1lICR7bmFtZX0gaW4gc2hhZGVyICR7dGhpcy5fbmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3VuaWZvcm1zW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGxvYWQodmVydGV4U291cmNlOiBzdHJpbmcsIGZyYWdtZW50U291cmNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmxvYWRTaGFkZXIodmVydGV4U291cmNlLCBnbC5WRVJURVhfU0hBREVSKTtcclxuICAgIGxldCBmcmFnbWVudFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcihmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgdGhpcy5kZXRlY3RBdHRyaWJ1dGVzKCk7XHJcbiAgICB0aGlzLmRldGVjdFVuaWZvcm1zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRTaGFkZXIoc291cmNlOiBzdHJpbmcsIHNoYWRlclR5cGU6IG51bWJlcik6IFdlYkdMU2hhZGVyIHtcclxuICAgIGxldCBzaGFkZXI6IFdlYkdMU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpIGFzIFdlYkdMU2hhZGVyO1xyXG5cclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICBsZXQgZXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBjb21waWxpbmcgc2hhZGVyOiAnICsgdGhpcy5fbmFtZSArICc6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hhZGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcm9ncmFtKFxyXG4gICAgdmVydGV4U2hhZGVyOiBXZWJHTFNoYWRlcixcclxuICAgIGZyYWdtZW50U2hhZGVyOiBXZWJHTFNoYWRlclxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5fcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKSBhcyBXZWJHTFByb2dyYW07XHJcblxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMuX3Byb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5fcHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG5cclxuICAgIGNvbnN0IGVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5fcHJvZ3JhbSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJyb3IgbGlua2luZyBzaGFkZXIgJyArIHRoaXMuX25hbWUgKyAnOiAnICsgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RBdHRyaWJ1dGVzKCk6IHZvaWQge1xyXG4gICAgLy8gZ2l2ZXMgYWxsIGF0dHJpYnV0ZXMgaW4gdGhlIHNoYWRlclxyXG4gICAgY29uc3QgYXR0cmlidXRlQ291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKFxyXG4gICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICBnbC5BQ1RJVkVfQVRUUklCVVRFU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgYXR0cmlidXRlSW5mbzogV2ViR0xBY3RpdmVJbmZvID0gZ2wuZ2V0QWN0aXZlQXR0cmliKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCFhdHRyaWJ1dGVJbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJpYnV0ZUluZm8ubmFtZV0gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGF0dHJpYnV0ZUluZm8ubmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RVbmlmb3JtcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVuaWZvcm1Db3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9VTklGT1JNU1xyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1Db3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHVuaWZvcm1JbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgaVxyXG4gICAgICApIGFzIFdlYkdMQWN0aXZlSW5mbztcclxuICAgICAgaWYgKCF1bmlmb3JtSW5mbykge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQb3B1bGF0ZXMgX2F0dHJpYnVlcyB3aXRoIGVhY2ggYXR0cmlidXRlIGFzIGFzIHRoZSB2YWx1ZSBhbmQgdGhlIGF0dHJpYnV0ZSBuYW1lIGFzIHRoZSBrZXlcclxuICAgICAgdGhpcy5fdW5pZm9ybXNbdW5pZm9ybUluZm8ubmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICB1bmlmb3JtSW5mby5uYW1lXHJcbiAgICAgICkgYXMgV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL3NoYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWNTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdiYXNpYycpO1xyXG5cclxuICAgIHRoaXMubG9hZCh0aGlzLmdldFZlcnRleFNvdXJjZSgpLCB0aGlzLmdldEZyYWdtZW50U291cmNlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWZXJ0ZXhTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjMyBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuXHJcbiAgICB1bmlmb3JtIG1hdDQgdV9wcm9qZWN0aW9uO1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVfbW9kZWw7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcblxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICBnbF9Qb3NpdGlvbiA9IHVfcHJvamVjdGlvbiAqIHVfbW9kZWwgKiB2ZWM0KGFfcG9zaXRpb24sIDEuMCk7XHJcbiAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RnJhZ21lbnRTb3VyY2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHJcbiAgICB1bmlmb3JtIHZlYzQgdV90aW50O1xyXG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdV9kaWZmdXNlO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHVfdGludCAqIHRleHR1cmUyRCh1X2RpZmZ1c2UsIHZfdGV4Q29vcmQpO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICBwcml2YXRlIF9yOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZzogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2I6IG51bWJlcjtcclxuICBwcml2YXRlIF9hOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHI6IG51bWJlciA9IDI1NSxcclxuICAgIGc6IG51bWJlciA9IDI1NSxcclxuICAgIGI6IG51bWJlciA9IDI1NSxcclxuICAgIGE6IG51bWJlciA9IDI1NVxyXG4gICkge1xyXG4gICAgdGhpcy5fciA9IHI7XHJcbiAgICB0aGlzLl9nID0gZztcclxuICAgIHRoaXMuX2IgPSBiO1xyXG4gICAgdGhpcy5fYSA9IGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ0Zsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZyAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBnKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2cgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGJGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2IgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgYih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9iID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGEoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGEodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0QXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl9yIC8gMjU1LjAsIHRoaXMuX2cgLyAyNTUuMCwgdGhpcy5fYiAvIDI1NS4wLCB0aGlzLl9hIC8gMjU1LjBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvRmxvYXRBcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2hpdGUoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBibGFjaygpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDI1NSwgMCwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ3JlZW4oKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAyNTUsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJsdWUoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAyNTUsIDI1NSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgZ2wgfSBmcm9tICcuLi9nbC9nbCc7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcblxyXG5jb25zdCBMRVZFTDogbnVtYmVyID0gMDtcclxuY29uc3QgQk9SREVSOiBudW1iZXIgPSAwO1xyXG5jb25zdCBURU1QX0lNQUdFX0RBVEE6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMjU1XSk7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2hhbmRsZTogV2ViR0xUZXh0dXJlO1xyXG4gIHByaXZhdGUgX2lzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciA9IDEsIGhlaWdodDogbnVtYmVyID0gMSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSBhcyBXZWJHTFRleHR1cmU7XHJcblxyXG4gICAgTWVzc2FnZS5zdWJzY3JpYmUoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbmFtZSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5iaW5kKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaWduYXR1cmUgaXMgZm9yIGxvYWRpbmcgcmF3IGRhdGEgaW50byBhIHRleHR1cmVcclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgIExFVkVMLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICAxLFxyXG4gICAgICAxLFxyXG4gICAgICBCT1JERVIsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIFRFTVBfSU1BR0VfREFUQVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXRBc3NldCh0aGlzLl9uYW1lKSBhcyBJbWFnZUFzc2V0O1xyXG4gICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgIHRoaXMubG9hZFRleHR1cmVGcm9tQXNzZXQoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWFrZXMgYSBjYWxsIHRvIHdlYmdsIGFuZCB0ZWxscyBpdCB3aGF0IGNoYW5uZWwgdG8gYWN0aXZhdGUgb25cclxuICAgKiAoMzIgdG90YWwpXHJcbiAgICogQHBhcmFtIHRleHR1cmVVbml0IHRleHR1cmUgdG8gYWN0aXZhdGUgb25cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZhdGVBbmRCaW5kKHRleHR1cmVVbml0OiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4dHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChtZXNzYWdlLmNvbnRleHQgYXMgSW1hZ2VBc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0OiBJbWFnZUFzc2V0KTogdm9pZCB7XHJcbiAgICB0aGlzLl93aWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIGFuIGltYWdlIGJpdG1hcHBlclxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIGFzc2V0LmRhdGFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNQb3dlck9mMigpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGEgbWlwIG1hcCBhbmQgY2xhbXAgd3JhcHBpbmcgdG8gZWRnZS5cclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgIH1cclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQb3dlck9mMigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX3dpZHRoKSAmJiB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl9oZWlnaHQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbHVlUG93ZXJPZjIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcblxyXG5jbGFzcyBUZXh0dXJlUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIHRleHR1cmU6IFRleHR1cmU7XHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3RleHR1cmVzOiB7IFtuYW1lOiBzdHJpbmddOiBUZXh0dXJlUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IFRleHR1cmUge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0ZXh0dXJlTmFtZSk7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSBuZXcgVGV4dHVyZVJlZmVyZW5jZU5vZGUodGV4dHVyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlVGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBBIHRleHR1cmUgbmFtZWQgJHt0ZXh0dXJlTmFtZX0gZG9lcyBub3QgZXhpc3QgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmVsZWFzZWQuYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEpIHtcclxuICAgICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcbmltcG9ydCB7IFRleHR1cmVNYW5hZ2VyIH0gZnJvbSAnLi90ZXh0dXJlTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IFRleHR1cmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdGludDogQ29sb3I7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nLCB0aW50OiBDb2xvcikge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSBkaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgICB0aGlzLl90aW50ID0gdGludDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5fZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGludCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlmZnVzZVRleHR1cmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL3ZlY3RvcjMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeDR4NCB7XHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIElkZW50aXR5IG1hdHJpeCAoZGVmYXVsdCBtYXRyaXgpXHJcbiAgICB0aGlzLl9kYXRhID0gW1xyXG4gICAgICAvLyByb3cgMVxyXG4gICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAvLyByb3cgMlxyXG4gICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAvLyByb3cgM1xyXG4gICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAvLyByb3cgNFxyXG4gICAgICAwLCAwLCAwLCAxLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaWRlbnRpdHkoKTogTWF0cml4NHg0IHtcclxuICAgIHJldHVybiBuZXcgTWF0cml4NHg0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcnRob2dyYXBoaWMgbWF0cml4XHJcbiAgICogTm8gcGVyc3BlY3RpdmUsIHJlbmRlcnMgc29tZXRoaW5nIGFzIGlmIGl0IGlzIGZsYXQgaW4gc3BhY2VcclxuICAgKiBAcGFyYW0gbGVmdCBwb3NpdGlvbiBmcm9tIGxlZnQgb2Ygc2NyZWVuIChhbG1vc3QgYWx3YXlzIDApXHJcbiAgICogQHBhcmFtIHJpZ2h0IGRpc3RhbmNlIHRvIHJpZ2h0IHNpZGUgb2Ygc2NyZWVuIGZyb20gdGhlIGxlZnQgKGUuZy4gMTA4MHAgd291bGQgYmUgMTkyMClcclxuICAgKiBAcGFyYW0gYm90dG9tIHBvc2l0aW9uIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChhbG1vc3QgYWx3YXlzIDApIHdlYmdsIHN0YXJ0cyBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblxyXG4gICAqIEBwYXJhbSB0b3AgcG9zaXRpb24gZnJvbSBib3R0b20gb2Ygc2NyZWVuIHRvIHRoZSB0b3AgKGUuZy4gMTA4MHAgd291bGQgYmUgMTA4MClcclxuICAgKiBAcGFyYW0gbmVhckNsaXAgc29tZXRoaW5nIG5lZ2F0aXZlICh0byBwcmV2ZW50IGNsaXBwaW5nIGluIGZyb250KVxyXG4gICAqIEBwYXJhbSBmYXJDbGlwIGFyYml0cmFyeSBudW1iZXJcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyhcclxuICAgIGxlZnQ6IG51bWJlcixcclxuICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b206IG51bWJlcixcclxuICAgIHRvcDogbnVtYmVyLFxyXG4gICAgbmVhckNsaXA6IG51bWJlcixcclxuICAgIGZhckNsaXA6IG51bWJlclxyXG4gICk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBjb25zdCBscjogbnVtYmVyID0gMS4wIC8gKGxlZnQgLSByaWdodCk7XHJcbiAgICBjb25zdCBidDogbnVtYmVyID0gMS4wIC8gKGJvdHRvbSAtIHRvcCk7XHJcbiAgICBjb25zdCBuZjogbnVtYmVyID0gMS4wIC8gKG5lYXJDbGlwIC0gZmFyQ2xpcCk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IC0yLjAgKiBscjtcclxuICAgIG0uX2RhdGFbNV0gPSAtMi4wICogYnQ7XHJcbiAgICBtLl9kYXRhWzEwXSA9IDIuMCAqIG5mO1xyXG5cclxuICAgIG0uX2RhdGFbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcclxuICAgIG0uX2RhdGFbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcclxuICAgIG0uX2RhdGFbMTRdID0gKGZhckNsaXAgKyBuZWFyQ2xpcCkgKiBuZjtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbWF0cml4IHRoYXQgaG9sZHMgZGF0YSB0aGF0IHJlcHJlc2VudHMgbW92ZW1lbnQgb2YgYW4gb2JqZWN0XHJcbiAgICogdGhyb3VnaCBzcGFjZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHRyYW5zbGF0aW9uKHBvc2l0aW9uOiBWZWN0b3IzKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIC8vIGVkaXRpbmcgMXN0IDMgbnVtYmVycyBpbiBsYXN0IHJvdyBvZiBtYXRyaXg0XHJcbiAgICBtLl9kYXRhWzEyXSA9IHBvc2l0aW9uLng7XHJcbiAgICBtLl9kYXRhWzEzXSA9IHBvc2l0aW9uLnk7XHJcbiAgICBtLl9kYXRhWzE0XSA9IHBvc2l0aW9uLno7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgcm90YXRpb24gbWF0cml4IG9uIHRoZSBYIGF4aXMgZnJvbSB0aGUgcHJvdmlkZWQgYW5nbGUgaW4gcmFkaWFucy5cclxuICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnMuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblgoYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgIG0uX2RhdGFbNV0gPSBjO1xyXG4gICAgbS5fZGF0YVs2XSA9IHM7XHJcbiAgICBtLl9kYXRhWzldID0gLXM7XHJcbiAgICBtLl9kYXRhWzEwXSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWShhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGM7XHJcbiAgICBtLl9kYXRhWzJdID0gLXM7XHJcbiAgICBtLl9kYXRhWzhdID0gcztcclxuICAgIG0uX2RhdGFbMTBdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25aKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgLy8gcmFkaWFucyBhcmUgdXNlZCBpbiBhbG1vc3QgYWxsIG1hdGggbGlicmFyaWVzIGJlY2F1c2UgaXQgaXMgbW9yZSBwZXJmb3JtYW50XHJcbiAgICAvLyB1bmRlciB0aGUgaG9vZFxyXG5cclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGM7XHJcbiAgICBtLl9kYXRhWzFdID0gcztcclxuICAgIG0uX2RhdGFbNF0gPSAtcztcclxuICAgIG0uX2RhdGFbNV0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblhZWihcclxuICAgIHhSYWRpYW5zOiBudW1iZXIsXHJcbiAgICB5UmFkaWFuczogbnVtYmVyLFxyXG4gICAgelJhZGlhbnM6IG51bWJlclxyXG4gICk6IE1hdHJpeDR4NCB7XHJcbiAgICBjb25zdCByeCA9IE1hdHJpeDR4NC5yb3RhdGlvblgoeFJhZGlhbnMpO1xyXG4gICAgY29uc3QgcnkgPSBNYXRyaXg0eDQucm90YXRpb25ZKHlSYWRpYW5zKTtcclxuICAgIGNvbnN0IHJ6ID0gTWF0cml4NHg0LnJvdGF0aW9uWih6UmFkaWFucyk7XHJcblxyXG4gICAgcmV0dXJuIE1hdHJpeDR4NC5tdWx0aXBseShNYXRyaXg0eDQubXVsdGlwbHkocnosIHJ5KSwgcngpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzY2FsZShzY2FsZTogVmVjdG9yMyk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gc2NhbGUueDtcclxuICAgIG0uX2RhdGFbNV0gPSBzY2FsZS55O1xyXG4gICAgbS5fZGF0YVsxMF0gPSBzY2FsZS56O1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBNYXRyaXg0eDQsIGI6IE1hdHJpeDR4NCk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICBsZXQgYjAwID0gYi5fZGF0YVswICogNCArIDBdO1xyXG4gICAgbGV0IGIwMSA9IGIuX2RhdGFbMCAqIDQgKyAxXTtcclxuICAgIGxldCBiMDIgPSBiLl9kYXRhWzAgKiA0ICsgMl07XHJcbiAgICBsZXQgYjAzID0gYi5fZGF0YVswICogNCArIDNdO1xyXG4gICAgbGV0IGIxMCA9IGIuX2RhdGFbMSAqIDQgKyAwXTtcclxuICAgIGxldCBiMTEgPSBiLl9kYXRhWzEgKiA0ICsgMV07XHJcbiAgICBsZXQgYjEyID0gYi5fZGF0YVsxICogNCArIDJdO1xyXG4gICAgbGV0IGIxMyA9IGIuX2RhdGFbMSAqIDQgKyAzXTtcclxuICAgIGxldCBiMjAgPSBiLl9kYXRhWzIgKiA0ICsgMF07XHJcbiAgICBsZXQgYjIxID0gYi5fZGF0YVsyICogNCArIDFdO1xyXG4gICAgbGV0IGIyMiA9IGIuX2RhdGFbMiAqIDQgKyAyXTtcclxuICAgIGxldCBiMjMgPSBiLl9kYXRhWzIgKiA0ICsgM107XHJcbiAgICBsZXQgYjMwID0gYi5fZGF0YVszICogNCArIDBdO1xyXG4gICAgbGV0IGIzMSA9IGIuX2RhdGFbMyAqIDQgKyAxXTtcclxuICAgIGxldCBiMzIgPSBiLl9kYXRhWzMgKiA0ICsgMl07XHJcbiAgICBsZXQgYjMzID0gYi5fZGF0YVszICogNCArIDNdO1xyXG5cclxuICAgIGxldCBhMDAgPSBhLl9kYXRhWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgYTAxID0gYS5fZGF0YVswICogNCArIDFdO1xyXG4gICAgbGV0IGEwMiA9IGEuX2RhdGFbMCAqIDQgKyAyXTtcclxuICAgIGxldCBhMDMgPSBhLl9kYXRhWzAgKiA0ICsgM107XHJcbiAgICBsZXQgYTEwID0gYS5fZGF0YVsxICogNCArIDBdO1xyXG4gICAgbGV0IGExMSA9IGEuX2RhdGFbMSAqIDQgKyAxXTtcclxuICAgIGxldCBhMTIgPSBhLl9kYXRhWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgYTEzID0gYS5fZGF0YVsxICogNCArIDNdO1xyXG4gICAgbGV0IGEyMCA9IGEuX2RhdGFbMiAqIDQgKyAwXTtcclxuICAgIGxldCBhMjEgPSBhLl9kYXRhWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgYTIyID0gYS5fZGF0YVsyICogNCArIDJdO1xyXG4gICAgbGV0IGEyMyA9IGEuX2RhdGFbMiAqIDQgKyAzXTtcclxuICAgIGxldCBhMzAgPSBhLl9kYXRhWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgYTMxID0gYS5fZGF0YVszICogNCArIDFdO1xyXG4gICAgbGV0IGEzMiA9IGEuX2RhdGFbMyAqIDQgKyAyXTtcclxuICAgIGxldCBhMzMgPSBhLl9kYXRhWzMgKiA0ICsgM107XHJcblxyXG4gICAgbS5fZGF0YVswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xyXG4gICAgbS5fZGF0YVszXSA9IGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMztcclxuICAgIG0uX2RhdGFbNF0gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xyXG4gICAgbS5fZGF0YVs2XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbN10gPSBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xyXG4gICAgbS5fZGF0YVs5XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMTBdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyO1xyXG4gICAgbS5fZGF0YVsxMV0gPSBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzM7XHJcbiAgICBtLl9kYXRhWzEyXSA9IGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbMTNdID0gYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxO1xyXG4gICAgbS5fZGF0YVsxNF0gPSBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzE1XSA9IGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weUZyb20obTogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgdGhpcy5fZGF0YVtpXSA9IG0uX2RhdGFbaV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0cml4NHg0JztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHJvdGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyBzY2FsZTogVmVjdG9yMyA9IFZlY3RvcjMub25lO1xyXG5cclxuICBwdWJsaWMgY29weUZyb20odHJhbnNmb3JtOiBUcmFuc2Zvcm0pOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb24uY29weUZyb20odHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgIHRoaXMucm90YXRpb24uY29weUZyb20odHJhbnNmb3JtLnJvdGF0aW9uKTtcclxuICAgIHRoaXMuc2NhbGUuY29weUZyb20odHJhbnNmb3JtLnNjYWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IHRyYW5zbGF0aW9uID0gTWF0cml4NHg0LnRyYW5zbGF0aW9uKHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgIGxldCByb3RhdGlvbiA9IE1hdHJpeDR4NC5yb3RhdGlvblhZWihcclxuICAgICAgdGhpcy5yb3RhdGlvbi54LFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLnksXHJcbiAgICAgIHRoaXMucm90YXRpb24uelxyXG4gICAgKTtcclxuICAgIGxldCBzY2FsZSA9IE1hdHJpeDR4NC5zY2FsZSh0aGlzLnNjYWxlKTtcclxuXHJcbiAgICAvLyBvcmRlciBtYXR0ZXJzIGhlcmVcclxuICAgIC8vIFQgKiBSICogU1xyXG4gICAgcmV0dXJuIE1hdHJpeDR4NC5tdWx0aXBseShNYXRyaXg0eDQubXVsdGlwbHkodHJhbnNsYXRpb24sIHJvdGF0aW9uKSwgc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXRGcm9tSnNvbihqc29uLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5yb3RhdGlvbikge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uLnNldEZyb21Kc29uKGpzb24ucm90YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnNjYWxlKSB7XHJcbiAgICAgIHRoaXMuc2NhbGUuc2V0RnJvbUpzb24oanNvbi5zY2FsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi4vYmVoYXZpb3JzL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4uL21hdGgvbWF0cml4NHg0JztcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vbWF0aC90cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbU9iamVjdCB7XHJcbiAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9jaGlsZHJlbjogU2ltT2JqZWN0W10gPSBbXTtcclxuICBwcml2YXRlIF9wYXJlbnQ6IFNpbU9iamVjdCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9pc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NjZW5lOiBTY2VuZSB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9jb21wb25lbnRzOiBJQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIF9iZWhhdmlvcnM6IElCZWhhdmlvcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2xvY2FsTWF0cml4OiBNYXRyaXg0eDQgPSBNYXRyaXg0eDQuaWRlbnRpdHkoKTtcclxuICBwcml2YXRlIF93b3JsZE1hdHJpeDogTWF0cml4NHg0ID0gTWF0cml4NHg0LmlkZW50aXR5KCk7XHJcblxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyB0cmFuc2Zvcm06IFRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgc2NlbmU/OiBTY2VuZSkge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwYXJlbnQoKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQgfHwgdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3b3JsZE1hdHJpeCgpOiBNYXRyaXg0eDQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dvcmxkTWF0cml4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRDaGlsZChjaGlsZDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgaWYgKHRoaXMuX3NjZW5lKSB7XHJcbiAgICAgIGNoaWxkLm9uQWRkZWQodGhpcy5fc2NlbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUNoaWxkKGNoaWxkOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjaGlsZC5fcGFyZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAvLyBkb3VibGUgY2hlY2sgdGhpcyB3b3Jrc1xyXG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMuX2NoaWxkcmVuLmZpbHRlcigoXywgaWR4KSA9PiBpbmRleCAhPT0gaWR4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNoaWxkLmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQmVoYXZpb3IoYmVoYXZpb3I6IElCZWhhdmlvcik6IHZvaWQge1xyXG4gICAgdGhpcy5fYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xyXG4gICAgYmVoYXZpb3Iuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQubG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2xvY2FsTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKTtcclxuICAgIHRoaXMudXBkYXRlV29ybGRNYXRyaXgoXHJcbiAgICAgIHRoaXMuX3BhcmVudCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fcGFyZW50LndvcmxkTWF0cml4IDogdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iZWhhdmlvcnMuZm9yRWFjaCgoYmVoYXZpb3IpID0+IHtcclxuICAgICAgYmVoYXZpb3IudXBkYXRlKHRpbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25BZGRlZChzY2VuZTogU2NlbmUpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVdvcmxkTWF0cml4KHBhcmVudFdvcmxkTWF0cml4OiBNYXRyaXg0eDQgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGlmIChwYXJlbnRXb3JsZE1hdHJpeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gTWF0cml4NHg0Lm11bHRpcGx5KFxyXG4gICAgICAgIHBhcmVudFdvcmxkTWF0cml4LFxyXG4gICAgICAgIHRoaXMuX2xvY2FsTWF0cml4XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeC5jb3B5RnJvbSh0aGlzLl9sb2NhbE1hdHJpeCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4vc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgcHJpdmF0ZSBfcm9vdDogU2ltT2JqZWN0O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9yb290ID0gbmV3IFNpbU9iamVjdCgwLCAnX19ST09UX18nLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcm9vdCgpOiBTaW1PYmplY3Qge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QuaXNMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkT2JqZWN0KG9iamVjdDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb290LmFkZENoaWxkKG9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0T2JqZWN0QnlOYW1lKG5hbWU6IHN0cmluZyk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5nZXRPYmplY3RCeU5hbWUobmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcikge1xyXG4gICAgdGhpcy5fcm9vdC5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50TWFuYWdlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yTWFuYWdlciB9IGZyb20gJy4uL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuL3NpbU9iamVjdCc7XHJcblxyXG5leHBvcnQgZW51bSBab25lU3RhdGUge1xyXG4gIFVOSU5JVElBTElaRUQsXHJcbiAgTE9BRElORyxcclxuICBVUERBVElORyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmUge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG4gIHByaXZhdGUgX3N0YXRlOiBab25lU3RhdGUgPSBab25lU3RhdGUuVU5JTklUSUFMSVpFRDtcclxuICBwcml2YXRlIF9nbG9iYWxJZDogbnVtYmVyID0gLTE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLl9zY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXRpYWxpemUoem9uZURhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHpvbmVEYXRhLm9iamVjdHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgaW5pdGlhbGl6YXRpb24gZXJyb3I6IG9iamVjdHMgbm90IHByZXNlbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICB6b25lRGF0YS5vYmplY3RzLmZvckVhY2goKG86IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRTaW1PYmplY3QobyBhcyBTaW1PYmplY3QsIHRoaXMuX3NjZW5lLnJvb3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLkxPQURJTkc7XHJcblxyXG4gICAgdGhpcy5fc2NlbmUubG9hZCgpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVubG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuX3N0YXRlID0gWm9uZVN0YXRlLlVQREFUSU5HKSkge1xyXG4gICAgICB0aGlzLl9zY2VuZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFjdGl2YXRlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBvbkRlYWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHJpdmF0ZSBsb2FkU2ltT2JqZWN0KGRhdGFTZWN0aW9uOiBhbnksIHBhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBsZXQgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAoZGF0YVNlY3Rpb24ubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5hbWUgPSBTdHJpbmcoZGF0YVNlY3Rpb24ubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZ2xvYmFsSWQrKztcclxuICAgIGxldCBzaW1PYmplY3QgPSBuZXcgU2ltT2JqZWN0KHRoaXMuX2dsb2JhbElkLCBuYW1lLCB0aGlzLl9zY2VuZSk7XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNpbU9iamVjdC50cmFuc2Zvcm0uc2V0RnJvbUpzb24oZGF0YVNlY3Rpb24udHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY29tcG9uZW50cykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jb21wb25lbnRzLmZvckVhY2goKGM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudE1hbmFnZXIuZXh0cmFjdENvbXBvbmVudChjKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5iZWhhdmlvcnMpIHtcclxuICAgICAgZGF0YVNlY3Rpb24uYmVoYXZpb3JzLmZvckVhY2goKGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gQmVoYXZpb3JNYW5hZ2VyLmV4dHJhY3RCZWhhdmlvcihiKTtcclxuICAgICAgICBzaW1PYmplY3QuYWRkQmVoYXZpb3IoYmVoYXZpb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24uY2hpbGRyZW4gJiYgZGF0YVNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBkYXRhU2VjdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChvOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRTaW1PYmplY3Qobywgc2ltT2JqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmVudC5hZGRDaGlsZChzaW1PYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEpzb25Bc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSAnLi96b25lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBab25lTWFuYWdlciBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2dsb2JhbFpvbmVJRDogbnVtYmVyID0gLTE7XHJcbiAgLy8gIHByaXZhdGUgc3RhdGljIF96b25lczogeyBbaWQ6IG51bWJlcl06IFpvbmUgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkWm9uZXM6IHsgW2lkOiBudW1iZXJdOiBzdHJpbmcgfSA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIF9hY3RpdmVab25lOiBab25lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0OiBab25lTWFuYWdlcjtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIFpvbmVNYW5hZ2VyLl9pbnN0ID0gbmV3IFpvbmVNYW5hZ2VyKCk7XHJcbiAgICAvLyB0ZW1wb3JhcnlcclxuICAgIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbMF0gPSAnc3JjL2Fzc2V0cy96b25lcy90ZXN0Wm9uZS5qc29uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlWm9uZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkRlYWN0aXZhdGVkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVubG9hZCgpO1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoQXNzZXRNYW5hZ2VyLmlzQXNzZXRMb2FkZWQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pKSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICAgIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIFpvbmVNYW5hZ2VyLl9yZWdpc3RlcmVkWm9uZXNbaWRdLFxyXG4gICAgICAgICAgWm9uZU1hbmFnZXIuX2luc3RcclxuICAgICAgICApO1xyXG4gICAgICAgIEFzc2V0TWFuYWdlci5sb2FkQXNzZXQoWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFpvbmUgaWQ6ICR7aWR9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZS5pbmRleE9mKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCkgIT09IC0xKSB7XHJcbiAgICAgIGxldCBhc3NldCA9IG1lc3NhZ2UuY29udGV4dCBhcyBKc29uQXNzZXQ7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLmxvYWRab25lKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGxvYWRab25lKGFzc2V0OiBKc29uQXNzZXQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHpvbmVEYXRhID0gYXNzZXQuZGF0YTtcclxuICAgIGxldCB6b25lSWQ6IG51bWJlcjtcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBpZCBub3QgcHJlc2VudCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHpvbmVJZCA9IE51bWJlcih6b25lRGF0YS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKCF6b25lRGF0YS5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGZpbGUgZm9ybWF0IGV4Y2VwdGlvbjogWm9uZSBuYW1lIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZU5hbWUgPSBTdHJpbmcoem9uZURhdGEubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgem9uZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGlmICh0eXBlb2Ygem9uZURhdGEgPT09ICdvYmplY3QnICYmIHpvbmVEYXRhKSB7XHJcbiAgICAgIGlmICh6b25lRGF0YS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHpvbmVEZXNjcmlwdGlvbiA9IFN0cmluZyh6b25lRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZSA9IG5ldyBab25lKHpvbmVJZCEsIHpvbmVOYW1lLCB6b25lRGVzY3JpcHRpb24pO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUuaW5pdGlhbGl6ZSh6b25lRGF0YSk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkFjdGl2YXRlZCgpO1xyXG4gICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUubG9hZCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50TWFuYWdlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gJy4vYXVkaW8vYXVkaW9NYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL2tleWJvYXJkTW92ZW1lbnRCZWhhdmlvcic7XHJcbmltcG9ydCB7IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMvcm90YXRpb25CZWhhdmlvcic7XHJcbmltcG9ydCB7IGdsLCBHTFV0aWxpdGllcyB9IGZyb20gJy4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBCYXNpY1NoYWRlciB9IGZyb20gJy4vZ2wvc2hhZGVycy9iYXNpY1NoYWRlcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9ncmFwaGljcy9jb2xvcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyLCBNb3VzZUNvbnRleHQgfSBmcm9tICcuL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlJztcclxuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlQnVzJztcclxuaW1wb3J0IHsgWm9uZU1hbmFnZXIgfSBmcm9tICcuL3dvcmxkL3pvbmVNYW5hZ2VyJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBnYW1lIGVuZ2luZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSBpbXBsZW1lbnRzIElNZXNzYWdlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9iYXNpY1NoYWRlcjogQmFzaWNTaGFkZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcHJvamVjdGlvbjogTWF0cml4NHg0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3ByZXZpb3VzVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBlbmdpbmVcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdXAgdGhpcyBlbmdpbmVcclxuICAgKi9cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYW52YXMgPSBHTFV0aWxpdGllcy5pbml0aWFsaXplKCk7XHJcbiAgICBBc3NldE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgSW5wdXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIFpvbmVNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZSgnTU9VU0VfRE9XTicsIHRoaXMpO1xyXG5cclxuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMC4zLCAxKTtcclxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XHJcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcclxuXHJcbiAgICBsZXQgaW1hZ2VDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxyXG4gICAgICAnLi4vYXNzZXRzL3RleHR1cmVzLycsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pXHJcbiAgICApO1xyXG4gICAgbGV0IGpzb25Db250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvem9uZXMvJywgdHJ1ZSwgL1xcLihqc29uKSQvaSk7XHJcbiAgICBsZXQgYXVkaW9Db250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxyXG4gICAgICAnLi4vYXNzZXRzL3NvdW5kcy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHdhdnxtcDMpJC9pXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubG9hZEFsbChpbWFnZUNvbnRleHQpO1xyXG4gICAgdGhpcy5sb2FkQWxsKGpzb25Db250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChhdWRpb0NvbnRleHQpO1xyXG5cclxuICAgIHRoaXMuX2Jhc2ljU2hhZGVyID0gbmV3IEJhc2ljU2hhZGVyKCk7XHJcbiAgICB0aGlzLl9iYXNpY1NoYWRlci51c2UoKTtcclxuXHJcbiAgICAvLyBMb2FkIG1hdGVyaWFsc1xyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAnc3RvbmVXYWxsJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy9zdG9uZV93YWxsLmpwZycsXHJcbiAgICAgICAgQ29sb3Iud2hpdGUoKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgICAgJ3dvb2RQbGFuaycsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvd29vZF9wbGFuay5qcGcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKCdiaXJkJywgJ3NyYy9hc3NldHMvdGV4dHVyZXMvYmlyZC5wbmcnLCBDb2xvci53aGl0ZSgpKVxyXG4gICAgKTtcclxuXHJcbiAgICBBdWRpb01hbmFnZXIubG9hZFNvdW5kRmlsZShcclxuICAgICAgJ2JpcmRKdW1wJyxcclxuICAgICAgJ3NyYy9hc3NldHMvc291bmRzL2JpcmRfanVtcC53YXYnLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBBdWRpb01hbmFnZXIubG9hZFNvdW5kRmlsZShcclxuICAgICAgJ211c2ljJyxcclxuICAgICAgJ3NyYy9hc3NldHMvc291bmRzL2FsZl9yZW1peC5tcDMnLFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEZpbmQgYSBiZXR0ZXIgcGxhY2UgZm9yIHRoaXM/XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudEJ1aWxkZXIoKSk7XHJcbiAgICBCZWhhdmlvck1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckJ1aWxkZXIoKSk7XHJcblxyXG4gICAgLy8gVE9ETzogQ2hhbmdlIHRoaXMgdG8gYmUgcmVhZCBmcm9tIGdhbWUgY29uZmlnXHJcbiAgICBab25lTWFuYWdlci5jaGFuZ2Vab25lKDApO1xyXG5cclxuICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB0aGlzLmxvb3AoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2l6ZXMgdGhlIGNhbnZhcyB0byBmaXQgdGhlIHdpbmRvdy5cclxuICAgKi9cclxuICBwdWJsaWMgcmVzaXplKCkge1xyXG4gICAgaWYgKHRoaXMuX2NhbnZhcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5fcHJvamVjdGlvbiA9IE1hdHJpeDR4NC5vcnRob2dyYXBoaWMoXHJcbiAgICAgICAgMCxcclxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIC0xMDAuMCxcclxuICAgICAgICAxMDAuMFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9vcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb3VzZUNvbnRleHQgPSBtZXNzYWdlLmNvbnRleHQgYXMgTW91c2VDb250ZXh0O1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PT0gJ01PVVNFX0RPV04nICYmIG1vdXNlQ29udGV4dCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhtb3VzZUNvbnRleHQpO1xyXG4gICAgICBpZiAobW91c2VDb250ZXh0LmxlZnREb3duKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnYmlyZEp1bXAnKTtcclxuICAgICAgfSBlbHNlIGlmIChtb3VzZUNvbnRleHQucmlnaHREb3duKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLnRvZ2dsZVNvdW5kKCdtdXNpYycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRBbGwocmVxdWlyZUNvbnRleHQ6IF9fV2VicGFja01vZHVsZUFwaS5SZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmVxdWlyZUNvbnRleHQua2V5cygpLmZvckVhY2gocmVxdWlyZUNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZGVsdGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3ByZXZpb3VzVGltZTtcclxuXHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgWm9uZU1hbmFnZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICB0aGlzLl9wcmV2aW91c1RpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Jhc2ljU2hhZGVyKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLnJlbmRlcih0aGlzLl9iYXNpY1NoYWRlcik7XHJcbiAgICB9XHJcbiAgICAvLyBTZXQgdW5pZm9ybXNcclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlciAmJiB0aGlzLl9wcm9qZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3Rpb25Qb3NpdGlvbiA9XHJcbiAgICAgICAgdGhpcy5fYmFzaWNTaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3Byb2plY3Rpb24nKTtcclxuXHJcbiAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXHJcbiAgICAgICAgcHJvamVjdGlvblBvc2l0aW9uLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fcHJvamVjdGlvbi5kYXRhKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vY29yZS9lbmdpbmUnO1xyXG5cclxudmFyIGVuZ2luZTogRW5naW5lO1xyXG4vLyBUaGUgbWFpbiBlbnRyeSBwb2ludCB0byB0aGUgYXBwbGljYXRpb25cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBlbmdpbmUgPSBuZXcgRW5naW5lKCk7XHJcbiAgZW5naW5lLnN0YXJ0KCk7XHJcbn07XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lLnJlc2l6ZSgpO1xyXG59O1xyXG5cclxud2luZG93Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=